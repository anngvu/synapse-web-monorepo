import{al as q,u,am as i,S as o,an as R}from"./SynapseClient-3d6edbd0.js";import{u as l}from"./useMutation-7b3b5600.js";import{u as d}from"./useInfiniteQuery-0353c0f5.js";import{r as k,a as Q}from"./index-8db94870.js";import{N as h,R as T}from"./styled-6ec5f85d.js";import{a as F}from"./useForkRef-f2aa3d66.js";import{s as K}from"./sortBy-d1364795.js";import{u as p}from"./useTheme-9d382341.js";function C(e,c,t,s,n){const[r,a]=k.useState(()=>n&&t?t(e).matches:s?s(e).matches:c);return F(()=>{let m=!0;if(!t)return;const y=t(e),A=()=>{m&&a(y.matches)};return A(),y.addListener(A),()=>{m=!1,y.removeListener(A)}},[e,t]),r}const S=Q["useSyncExternalStore"];function w(e,c,t,s,n){const r=k.useCallback(()=>c,[c]),a=k.useMemo(()=>{if(n&&t)return()=>t(e).matches;if(s!==null){const{matches:f}=s(e);return()=>f}return r},[r,e,s,n,t]),[m,y]=k.useMemo(()=>{if(t===null)return[r,()=>()=>{}];const f=t(e);return[()=>f.matches,g=>(f.addListener(g),()=>{f.removeListener(g)})]},[r,t,e]);return S(y,m,a)}function P(e,c={}){const t=h(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:n=!1,matchMedia:r=s?window.matchMedia:null,ssrMatchMedia:a=null,noSsr:m=!1}=T({name:"MuiUseMediaQuery",props:c,theme:t});let y=typeof e=="function"?e(t):e;return y=y.replace(/^@media( ?)/m,""),(S!==void 0?w:C)(y,n,r,a,m)}const v=async(e,c)=>{const t=c.map(n=>q(e,n)),s=await Promise.all(t);return K(c,n=>-1*Number(s.find(r=>n===r.accessRequirementId).isApproved))};function B(){const e=p();return P(e.breakpoints.up("md"))}function M(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getAccessRequirementQueryKey(String(e)),()=>o.getAccessRequirementById(t,e),c)}function W(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getEntityAccessRequirementsQueryKey(e),()=>o.getAllAccessRequirements(t,e),c)}function I(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getTeamAccessRequirementsQueryKey(e),()=>o.getTeamAccessRequirements(t,e),c)}function N(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getAccessRequirementWikiPageKey(e),()=>o.getWikiPageKeyForAccessRequirement(t,e),c)}function z(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getAccessRequirementAclQueryKey(e),()=>o.getAccessRequirementAcl(t,e),c)}function O(e,c){const{accessToken:t,keyFactory:s}=u();return d(s.searchAccessRequirementsQueryKey(e),async n=>await o.searchAccessRequirements(t,{...e,nextPageToken:n.pageParam}),{...c,getNextPageParam:n=>n.nextPageToken})}function $(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getAccessRequirementRestrictionInformationQueryKey(e),()=>o.getRestrictionInformation(e,t),c)}function H(e){const{accessToken:c}=u(),t=R(),{keyFactory:s}=u();return l({...e,mutationFn:n=>o.createLockAccessRequirement(n,c),mutationKey:["createLockAccessRequirement"],onSuccess:async(n,r,a)=>{if(await t.invalidateQueries(s.getAccessRequirementQueryKey()),await t.invalidateQueries(s.getAllEntityDataQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(n,r,a)}})}function J(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getAccessRequirementStatusQueryKey(e),()=>o.getAccessRequirementStatus(t,e),c)}function V(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getSortedAccessRequirementsAndStatusQueryKey(e),()=>v(t,e),c)}function X(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getAccessRequirementResearchProjectQueryKey(e),()=>o.getResearchProject(e,t),c)}function Y(e){const{accessToken:c}=u(),t=R(),{keyFactory:s}=u();return l(n=>o.updateResearchProject(n,c),{...e,onSuccess:async(n,r,a)=>{if(await t.invalidateQueries(s.getAccessRequirementResearchProjectQueryKey(n.accessRequirementId)),e!=null&&e.onSuccess)return e.onSuccess(n,r,a)}})}function Z(e,c){const{accessToken:t,keyFactory:s}=u();return i(s.getDataAccessRequestForUpdateQueryKey(e),()=>o.getDataAccessRequestForUpdate(e,t),c)}function _(e){const{accessToken:c}=u(),t=R(),{keyFactory:s}=u();return l(n=>o.updateDataAccessRequest(n,c),{...e,onSuccess:async(n,r,a)=>{if(await t.invalidateQueries(s.getDataAccessRequestForUpdateQueryKey(n.accessRequirementId)),e!=null&&e.onSuccess)return e.onSuccess(n,r,a)}})}function ee(e){const{accessToken:c}=u(),t=R(),{keyFactory:s}=u();return l(n=>o.createAccessApproval(c,n),{...e,onSuccess:async(n,r,a)=>{if(await t.invalidateQueries(s.getAccessRequirementStatusQueryKey(String(r.requirementId))),e!=null&&e.onSuccess)return e.onSuccess(n,r,a)}})}function te(e){const{accessToken:c}=u(),t=R(),{keyFactory:s}=u();return l(n=>o.cancelDataAccessRequest(n.submissionId,c),{...e,onSuccess:async(n,r,a)=>{if(await t.invalidateQueries(s.getAccessRequirementStatusQueryKey(String(r.accessRequirementId))),e!=null&&e.onSuccess)return e.onSuccess(n,r,a)}})}export{_ as a,N as b,B as c,X as d,Y as e,Z as f,J as g,te as h,ee as i,I as j,W as k,V as l,$ as m,H as n,P as o,O as p,z as q,M as u};
//# sourceMappingURL=useAccessRequirements-6a144a98.js.map