import{a4 as c,c1 as u,c2 as l,a6 as d,c3 as g,bJ as f,c4 as b}from"./SynapseContext-0510efef.js";import{u as w}from"./useMutation-0a006ef5.js";import{u as r}from"./useInfiniteQuery-4a12d5f1.js";const a={base:["downloadList"],availableFiles:e=>[...a.base,"availableFiles",e],availableFilesInfinite:e=>[...a.availableFiles(e),"infinite"],getActionsRequired:()=>[...a.base,"actionsRequired"],getActionsRequiredInfinite:()=>[...a.getActionsRequired(),"infinite"],getStatistics:()=>[...a.base,"statistics"]};function q(e,i,n){const{accessToken:t}=c(),s={concreteType:"org.sagebionetworks.repo.model.download.AvailableFilesRequest"};return e&&(s.sort=[e]),i&&(s.filter=i),r(a.availableFilesInfinite(s),async o=>u({...s,nextPageToken:o.pageParam},t),{...n,getNextPageParam:o=>o.nextPageToken})}function F(e){const{accessToken:i}=c(),n={concreteType:"org.sagebionetworks.repo.model.download.ActionRequiredRequest"};return r(a.getActionsRequiredInfinite(),async t=>await l({...n,nextPageToken:t.pageParam},i),{...e,getNextPageParam:t=>t.nextPageToken})}function A(e){const{accessToken:i}=c();return d(a.getStatistics(),()=>g(i),e)}function k(e){const{accessToken:i}=c(),n=f();return w({...e,mutationFn:t=>b(t.entityId,t.entityVersionNumber,i),mutationKey:["addFileToDownloadList"],onSuccess:async(t,s,o)=>{if(await n.invalidateQueries(a.base),e!=null&&e.onSuccess)return e.onSuccess(t,s,o)}})}export{k as a,q as b,F as c,A as u};
//# sourceMappingURL=useDownloadList-cfbd966a.js.map