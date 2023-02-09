import{E as _}from"./SynapseContext-0510efef.js";import{G as a,S as s,E as n,P as E,e as c}from"./AccessRequirementList-afc59fbd.js";import{U as l}from"./UploadDestination-5ff3844f.js";const i="Synapse Storage",g=1;function T(e){switch(e.concreteType){case c:return{endpoint:e.endpointUrl,bucket:e.bucket,fileKey:e.fileKey};case E:case n:return{url:o(e)};case s:case a:return{location:o(e)};default:throw new Error(`Couldn't determine location name for file handle: ${JSON.stringify(e)}`)}}function o(e){switch(e.concreteType){case E:return e.filePath;case c:return e.bucket;case n:return e.externalURL;case s:return[null,g].includes(e.storageLocationId)?i:`s3://${e.bucketName}`;case a:return`gs://${e.bucketName}`;default:throw new Error(`Couldn't determine location name for file handle: ${JSON.stringify(e)}`)}}function f(e){let r;return e.entityType===_.FILE&&(r=e.fileHandles.filter(t=>t.id===e.entity.dataFileHandleId)[0]),r}function S(e){let r=null;if(e)switch(e.concreteType){case"org.sagebionetworks.repo.model.file.S3UploadDestination":r=i;break;case"org.sagebionetworks.repo.model.file.ExternalUploadDestination":if(r=e.url,e.uploadType===l.SFTP){const t=r.lastIndexOf("/");t&&(r=r.substring(0,t))}break;case"org.sagebionetworks.repo.model.file.ExternalS3UploadDestination":r="s3://"+e.bucket+"/",e.baseKey!=null&&(r+=e.baseKey);break;case"org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination":r="gs://"+e.bucket+"/",e.baseKey!=null&&(r+=e.baseKey);break;case"org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination":r=e.endpointUrl+"/"+e.bucket;break}return r}export{o as a,T as b,S as c,f as g};
//# sourceMappingURL=FileHandleUtils-a393f9b0.js.map