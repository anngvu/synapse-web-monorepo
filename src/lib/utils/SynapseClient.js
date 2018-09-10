function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}

const fetch_with_exponential_timeout =
  (url, options, delayMs, retries) => {
    return fetch(url, options).then(
      resp => {
        if (resp.status > 199 && resp.status < 300) {
          // ok!
          return resp.json();
        } else if (resp.status === 429 || resp.status === 0) {
          // TOO_MANY_REQUESTS_STATUS_CODE, or network connection is down.  Retry after a couple of seconds.
          if (retries === 1) {
            return Promise.reject({
              statusCode: resp.status,
              reason: resp.statusText
            });
          }
          return delay(delayMs).then(function () {
            return fetch_with_exponential_timeout(url, options, delayMs * 2, retries - 1);
          });
        } else {
          // error status that indicates no more retries
          retries = 1;
          return resp.json().then(json => {
            // on okay response return json, o.w. reject with json and 
            // send to catch block
            let error = {
              reason: json.reason,
              status: resp.status
            } 
            return resp.ok ? json : Promise.reject(error)
          }).catch(error => {
            // call failed above
            if (error.reason && error.status) {
              // successfull return from server but invalid call
              // the call was recieved, but staus wasn't ok-- return the json response from above
              // from the response directly
              return Promise.reject({
                statusCode: error.status,
                reason: error.reason
              })
            } else {
              return Promise.reject({
                statusCode: resp.status,
                reason: resp.statusText
              })
            }
          })
        }
    }).catch(function (error) {
      // this should never happen
      return Promise.reject(error)
    });
  }

export const doPost =
  (url, requestJsonObject, sessionToken, endpoint) => {
    let options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': 'sessiontoken'
      },
      body: JSON.stringify(requestJsonObject)
    };
    if (sessionToken) {
      options.headers.sessionToken = sessionToken;
    }
    return fetch_with_exponential_timeout(endpoint + url, options, 1000, 5);
  }

export const doGet =
  (url, sessionToken, endpoint) => {
    let options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': '*/*',
        'Access-Control-Request-Headers': 'sessiontoken',
      }
    };
    if (sessionToken) {
      options.headers.sessionToken = sessionToken;
    }
    return fetch_with_exponential_timeout(endpoint + url, options, 1000, 5);
  }

export const getVersion =
  (endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doGet('/repo/v1/version', undefined, endpoint);
  }

export const getQueryTableResultsFromJobId =
  (entityId, jobId, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doGet(`/repo/v1/entity/${entityId}/table/query/async/get/${jobId}`, sessionToken, endpoint)
      .then(resp => {
        // is this the job status?
        if (resp.jobState && resp.jobState !== 'FAILED') {
          // still processing, wait for a second and try again
          return delay(500).then(function () {
            return getQueryTableResultsFromJobId(entityId, jobId, sessionToken, endpoint);
          });
        } else {
          // these must be the query results!
          return resp;
        }
      }).catch(function (error) {
        throw error;
      })
  }

/**
 * http://docs.synapse.org/rest/POST/entity/id/table/query/nextPage/async/start.html
 * @param {*} queryBundleRequest 
 * @param {*} sessionToken 
 * @param {*} endpoint 
 */
export const getQueryTableResults =
  (queryBundleRequest, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost(`/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/start`, queryBundleRequest, sessionToken, endpoint)
        .then(resp => {
          //started query, now attempt to get the results.
          return getQueryTableResultsFromJobId(queryBundleRequest.entityId, resp.token, sessionToken, endpoint);
        }).catch(function (error) {
          throw error;
        })
      }

  
   /**
   *  Run and return results from queryBundleRequest, queryBundle request must be of the
   *  form:
   *     {
   *        concreteType: String,
   *        query: {
   *           sql: String,
   *           isConsistent: Boolean,
   *           partMask: Number
   *        }
   *     }
   * @param {*} queryBundleRequest 
   * @param {*} [sessionToken=undefined]
   * @param {boolean} [onlyGetFacets=false] Specify if the query only needs facets and no
   * data-- (internally this limits the row count to 1 on the request)
   * @returns Full dataset from synapse table query
   */
  export const getFullQueryTableResults =
    async (queryBundleRequest, sessionToken = undefined) => {

      // TODO: Find out why theres a bug causing the query limut 
      const  {query, ...rest} = queryBundleRequest

      let data = {}
      let maxPageSize = 150
      let queryRequest = {
        ...rest,
        query: {...query, limit: maxPageSize}
      };

      // Have to make two "sets" of calls for query, the first one tells us the maximum size per page of data
      // we can get, the following uses that maximum and offsets to the appropriate location to get the data
      // afterwards, the process repeats
      await getQueryTableResults(queryRequest, sessionToken).then(
        async (initData) => {
          let queryCount = initData.queryResult.queryResults.rows.length
          let currentQueryCount = queryCount
          data = initData;

          // Get the subsequent data, note- although the function calls itself, it runs
          // iteratively due to the await
          const getData = async () => {
              if (queryCount === maxPageSize) {
                  maxPageSize = initData.maxRowsPerPage
                  let queryRequestWithMaxPageSize = {
                    ...rest,
                      query: {...query, limit: maxPageSize, offset: currentQueryCount}
                  };
                  await getQueryTableResults(queryRequestWithMaxPageSize, sessionToken)
                      .then(post_data => {
                          queryCount += post_data.queryResult.queryResults.rows.length
                          if (queryCount > 0) {
                            currentQueryCount += queryCount
                              data.queryResult.queryResults.rows.push(
                                  ...post_data.queryResult.queryResults.rows  // ... spread operator to push all elements on
                              )
                          }
                          return getData()
                      })
                      .catch(err => 
                          {
                              console.log("Error on getting table results ", err)
                          }
                      );
              } else {
                  // set data to this plots sql in the query data
                  return data
              }
          }
          return getData()
      })
      return data
  }

/** Log-in using the given username and password.  Will return a session token that must be used in authenticated requests. 
 * http://docs.synapse.org/rest/POST/login.html
*/
export const login =
(username, password, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/auth/v1/login', { username: username, password: password }, undefined, endpoint)
  }

/** Create an entity (Project, Folder, File, Table, View) 
 * http://docs.synapse.org/rest/POST/entity.html
*/
export const createEntity =
  (entity, sessionToken, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/entity', entity, sessionToken, endpoint);
  }

/** Create a project with the given name. 
 * http://docs.synapse.org/rest/POST/entity.html
*/
export const createProject =
  (name, sessionToken, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return createEntity(
      {
        concreteType: "org.sagebionetworks.repo.model.Project",
        name: name
      }, sessionToken, endpoint);
  }
  
/** Return this user's UserProfile
 * http://docs.synapse.org/rest/GET/userProfile.html
*/
export const getUserProfile =
(sessionToken, endpoint = 'https://repo-prod.prod.sagebase.org') => {
  return doGet('/repo/v1/userProfile', sessionToken, endpoint);
}

/** Return the User Profiles for the given list of user IDs 
 * http://docs.synapse.org/rest/POST/userProfile.html
*/
export const getUserProfiles =
  (userIdsArray, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/userProfile', { list: userIdsArray }, undefined, endpoint);
  }

/** Return the children (Files/Folders) of the given entity (Project or Folder). 
 * http://docs.synapse.org/rest/POST/entity/children.html
*/
export const getEntityChildren =
  (request, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/entity/children', request, sessionToken, endpoint);
  }

/** Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations.
 * http://docs.synapse.org/rest/POST/fileHandle/batch.html
*/
export const getFiles =
  (request, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/file/v1/fileHandle/batch', request, sessionToken, endpoint);
  }

  /**
   * Bundled access to Entity and related data components. 
   * An EntityBundle can be used to create, fetch, or update an Entity and associated objects with a single web service request.
   * See SynapseClient.test.js for an example partsMask.
   * http://docs.synapse.org/rest/GET/entity/id/version/versionNumber/bundle.html
   */
  export const getEntity =
  (sessionToken = undefined, entityId, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    let url = `/repo/v1/entity/${entityId}`;
    return doGet(url, sessionToken, endpoint);
  }

  /**
   * Bundled access to Entity and related data components. 
   * An EntityBundle can be used to create, fetch, or update an Entity and associated objects with a single web service request.
   * See SynapseClient.test.js for an example partsMask.
   * http://docs.synapse.org/rest/GET/entity/id/version/versionNumber/bundle.html
   */
export const getEntityBundleForVersion =
  (entityId, version, partsMask, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    let url = `/repo/v1/entity/${entityId}`;
    if (version) {
      url += '/version/' + version;
    }
    url += '/bundle?mask=' + partsMask;
    return doGet(url, sessionToken, endpoint);
  }

  /**
   * Get Wiki page contents, call is of the form:
   * http://docs.synapse.org/rest/GET/entity/ownerId/wiki.html
   */
  export const getEntityWiki =
    (sessionToken, ownerId, wikiId, endpoint="https://repo-prod.prod.sagebase.org") => {
      let url = `/repo/v1/entity/${ownerId}/wiki/${wikiId}`
      return doGet(url, sessionToken, endpoint)
    }


  /**
    * Returns synapse user favorites list given their session token
    * http://docs.synapse.org/rest/GET/favorite.html
  */
  export const getUserFavorites =
    (sessionToken, endpoint="https://repo-prod.prod.sagebase.org/") => {
      let url = 'repo/v1/favorite?offset=0&limit=200'
      return doGet(url, sessionToken, endpoint)
    }

  /**
   *  http://docs.synapse.org/rest/GET/projects/type.html
   *  @param {String} projectDetails Can be "MY_PROJECTS", "MY_CREATED_PROJECTS" or "MY_PARTICIPATED_PROJECTS"
   */
  export const getUserProjectList =
  (sessionToken, projectDetails, endpoint="https://repo-prod.prod.sagebase.org/") => {
    let url = `repo/v1/projects/${projectDetails}?offset=0&limit=200`
    return doGet(url, sessionToken, endpoint)
  }

  /**
   * Get the user's list of teams they are on
   * 
   * @param {*} id ownerID of the synapse user see - http://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html
   */
  export const getUserTeamList =
  (sessionToken, id, endpoint="https://repo-prod.prod.sagebase.org/") => {
    let url = `repo/v1/user/${id}/team?offset=0&limit=200`
    return doGet(url, sessionToken, endpoint)
  }

  export const getWikiAttachmentsFromEntity = 
  (sessionToken, id, wikiId, endpoint="https://repo-prod.prod.sagebase.org/") => {
    let url = `repo/v1/entity/${id}/wiki/${wikiId}/attachmenthandles`
    return doGet(url, sessionToken, endpoint)
  }

  export const getWikiAttachmentsFromEvaluation = 
  (sessionToken, id, wikiId, endpoint="https://repo-prod.prod.sagebase.org/") => {
    let url = `repo/v1/evaluation/${id}/wiki/${wikiId}/attachmenthandles`
    return doGet(url, sessionToken, endpoint)
  }