import{a as i,u as o,d as c,l as F}from"./SynapseClient-e12f3692.js";import{u as y}from"./useMutation-a2021e36.js";import{u as d}from"./useInfiniteQuery-e4891143.js";function l(e){var t;const{data:a,isLoading:s}=m();return{isFavorite:(t=a==null?void 0:a.results)==null?void 0:t.some(n=>n.id===e),isLoading:s}}function S(e){const{accessToken:a,keyFactory:s}=i(),r=o();return y({...e,mutationFn:t=>c.addUserFavorite(t,a),mutationKey:["addFavorite"],onSuccess:async(t,n,u)=>{if(await r.invalidateQueries(s.getFavoritesQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,n,u)}})}function Q(e){const{accessToken:a}=i(),s=o(),{keyFactory:r}=i();return y({...e,mutationFn:t=>c.removeUserFavorite(t,a),mutationKey:["removeFavorite"],onSuccess:async(t,n,u)=>{if(await s.invalidateQueries(r.getFavoritesQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,n,u)}})}function m(e="FAVORITED_ON",a="DESC",s){const{accessToken:r,keyFactory:t}=i();return F(t.getUserFavoritesQueryKey(e,a),()=>c.getUserFavorites(r,void 0,void 0,e,a),s)}function T(e="FAVORITED_ON",a="DESC",s){const{accessToken:t,keyFactory:n}=i();return d(n.getUserFavoritesInfiniteQueryKey(e,a),async u=>c.getUserFavorites(t,u.pageParam,10,e,a),{...s,getNextPageParam:(u,v)=>{if(u.results.length>0)return v.length*10}})}export{m as a,l as b,S as c,Q as d,T as u};
//# sourceMappingURL=useFavorites-aa8dc7f0.js.map