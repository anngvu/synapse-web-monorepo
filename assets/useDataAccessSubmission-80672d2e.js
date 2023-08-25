import{u as r,z as o,n as i,G as y}from"./SynapseClient-c9b3409f.js";import{u as S}from"./useMutation-af56ae56.js";import{u as m}from"./useInfiniteQuery-2180e638.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-d057b0e6.js";function k(e,a){const{accessToken:t,keyFactory:c}=r();return o(c.getDataAccessSubmissionQueryKey(String(e.toString())),()=>i.getSubmissionById(e,t),a)}function D(e,a){const{accessToken:t,keyFactory:c}=r();return m(c.searchDataAccessSubmissionQueryKey(e),async s=>await i.searchAccessSubmission({...e,nextPageToken:s.pageParam},t),{...a,getNextPageParam:s=>s.nextPageToken})}function l(e){const a=y(),{accessToken:t,keyFactory:c}=r();return S(s=>i.updateSubmissionStatus(s,t),{...e,onSuccess:async(s,u,n)=>{await a.invalidateQueries(c.searchDataAccessSubmissionQueryKey()),a.setQueryData(c.getDataAccessSubmissionQueryKey(u.submissionId),s),e!=null&&e.onSuccess&&await e.onSuccess(s,u,n)}})}function d(e){const a=y(),{accessToken:t,keyFactory:c}=r();return S(async({request:s,accessRequirementId:u})=>{if(s.subjectId==null||s.subjectType==null){const{subjects:n}=await i.getSubjects(t,u);s.subjectId=n[0].id,s.subjectType=n[0].type}return i.submitDataAccessRequest(s,t)},{...e,onSuccess:async(s,u,n)=>{await a.invalidateQueries(c.getAccessRequirementStatusQueryKey(u.accessRequirementId)),await a.invalidateQueries(c.searchDataAccessSubmissionQueryKey()),e!=null&&e.onSuccess&&await e.onSuccess(s,u,n)}})}export{l as a,D as b,d as c,k as u};
//# sourceMappingURL=useDataAccessSubmission-80672d2e.js.map