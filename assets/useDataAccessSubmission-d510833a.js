import{a9 as u,ab as r,dz as o,dA as m,bO as S,dB as b}from"./SynapseContext-1b625f19.js";import{u as y}from"./useMutation-816e8a69.js";import{u as f}from"./useInfiniteQuery-224f89d9.js";const n={submission:s=>["dataAccessSubmission",s],search:s=>s?["accessSubmissionSearch",s]:["accessSubmissionSearch"]};function g(s,a){const{accessToken:c}=u();return r(n.submission(s),()=>o(s,c),a)}function Q(s,a){const{accessToken:c}=u();return f(n.search(s),async e=>await m({...s,nextPageToken:e.pageParam},c),{...a,getNextPageParam:e=>e.nextPageToken})}function k(s){const a=S(),{accessToken:c}=u();return y(e=>b(e,c),{...s,onSuccess:async(e,t,i)=>{a.invalidateQueries(n.search()),a.setQueryData(n.submission(t.submissionId),e),s!=null&&s.onSuccess&&await s.onSuccess(e,t,i)}})}export{Q as a,g as b,k as u};
//# sourceMappingURL=useDataAccessSubmission-d510833a.js.map