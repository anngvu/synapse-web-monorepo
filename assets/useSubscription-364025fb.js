import{u as a,as as b,S as o,ar as l,bS as p,bN as d}from"./SynapseClient-a4e4b778.js";import{u as g}from"./useMutation-0e9148bd.js";import{u as f}from"./useInfiniteQuery-9947b096.js";import"./OrientationBanner-f49a763f.js";import{r as m}from"./index-8db94870.js";import"./getEndpoint-ac94413e.js";import"./jsx-runtime-095bf462.js";function A(e,s){const{accessToken:u,keyFactory:c}=a();return l(c.getSubscribersQueryKey(e.objectId,e.objectType),()=>o.getSubscribers(u,e),s)}function Q(e,s,u){const{accessToken:c,keyFactory:i}=a(),r=async()=>{const t={objectType:s,idList:[e],sortByType:p.OBJECT_ID,sortDirection:d.ASC};return(await o.postSubscriptionList(c,t)).results[0]};return l(i.getSubscriptionQueryKey(e,s),r,u)}function D(e,s,u){const{accessToken:c,keyFactory:i}=a(),r=b();return f(u??i.getAllSubscriptionsQueryKey(e),async t=>{const n=t.pageParam;return await o.getAllSubscriptions(c,10,n,e)},{...s,onSuccess:t=>{t.pages.forEach(n=>{r.setQueryData(i.getSubscriptionQueryKey(n.objectId,n.objectType),n)}),s!=null&&s.onSuccess&&s.onSuccess(t)},select:t=>({pages:t.pages.flatMap(n=>n.results),pageParams:t.pageParams}),getNextPageParam:(t,n)=>{const y=n.flatMap(S=>S.results).length;if(t.totalNumberOfResults>y)return y}})}function k(e){const s=b(),{accessToken:u,keyFactory:c}=a();return g(i=>o.postSubscription(u,i),{...e,onSuccess:async(i,r,t)=>{await Promise.all([s.invalidateQueries(c.getAllSubscriptionsQueryKey()),s.invalidateQueries(c.getSubscriptionQueryKey(r.objectId,r.objectType)),s.invalidateQueries(c.getSubscribersQueryKey(r.objectId,r.objectType))]),e!=null&&e.onSuccess&&await e.onSuccess(i,r,t)}})}function L(e){const s=b(),{accessToken:u,keyFactory:c}=a();return g(i=>o.deleteSubscription(u,i.subscriptionId),{...e,onSuccess:async(i,r,t)=>{await Promise.all([s.invalidateQueries(c.getAllSubscriptionsQueryKey()),s.invalidateQueries(c.getSubscriptionQueryKey(r.objectId,r.objectType)),s.invalidateQueries(c.getSubscribersQueryKey(r.objectId,r.objectType))]),e!=null&&e.onSuccess&&await e.onSuccess(i,r,t)}})}const I=(e,s)=>{const{data:u,isLoading:c}=Q(e,s),{mutate:i,isLoading:r}=k(),{mutate:t,isLoading:n}=L(),y=c||r||n,S=m.useCallback(()=>{u?t(u):i({objectId:e,objectType:s})},[t,e,s,i,u]);return{isLoading:y,subscription:u,toggleSubscribed:S,isSubscribed:!!u}};export{A as a,D as b,I as u};
//# sourceMappingURL=useSubscription-364025fb.js.map