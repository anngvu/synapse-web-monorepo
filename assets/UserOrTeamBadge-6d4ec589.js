import{a as h,j as o,F as H}from"./jsx-runtime-095bf462.js";import{r as m}from"./index-8db94870.js";import{u as i,z as p,n as c}from"./SynapseClient-ff77005a.js";import{P as I}from"./getEndpoint-ac94413e.js";import"./OrientationBanner-3e5e2da7.js";import{a as _,P as G,S as U}from"./SynapseConstants-cca80e29.js";import{I as b}from"./IconSvg-62f164ab.js";import{U as N}from"./UserCard-79d2ccad.js";import{S as T}from"./Skeleton-a24326d8.js";function w(r,e){const{accessToken:a,keyFactory:t}=i(),s=t.getUserGroupHeaderQueryKey(r);return p(s,async()=>{const n=await c.getGroupHeadersBatch([r],a);if(n.children.length!==1)throw new Error(`Expected one response in useGetUserGroupHeader for id: ${r}, got ${n.children.length}`);return n.children[0]},e)}function L(r,e,a){const{keyFactory:t}=i(),s=t.getUserGroupHeaderSearchQueryKey(r,e);return p(s,async()=>(await c.getUserGroupHeaders(r,e)).children,a)}function V(r,e){const{keyFactory:a}=i(),t=a.getUserGroupHeaderWithAliasQueryKey(r);return p(t,async()=>(await c.postUserGroupHeadersWithAlias(r)).list,e)}function l(r){const{teamId:e}=r;let{teamName:a,disableHref:t}=r,s="team";return e==_&&(s="public",a="All registered Synapse users",t=!0),e==G&&(s="public",a="Anyone on the web",t=!0),h("span",{children:[o(b,{icon:s}),o(t?"span":"a",{style:{marginLeft:"5px"},href:t?void 0:`${I.PORTAL}#!Team:${e}`,children:a})]})}try{l.displayName="TeamBadge",l.__docgenInfo={description:"",displayName:"TeamBadge",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string | number"}},teamName:{defaultValue:null,description:"",name:"teamName",required:!0,type:{name:"string"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}}}}}catch{}function f(r){let e=r.principalId;const{disableHref:a,showCardOnHover:t,showFullName:s,userGroupHeader:n}=r;e==null&&(e=n==null?void 0:n.ownerId);const{accessToken:y}=i(),[u,g]=m.useState(n),{data:d}=w((e??"").toString(),{enabled:!n});return m.useEffect(()=>{e&&u==null&&d&&g(d)},[y,e,u,d]),e==null&&n==null?(console.error("Expected one of principalId or userGroupHeader to be defined but both were null or undefined"),o(H,{})):u===void 0?o(T,{width:125,height:30}):u.isIndividual?o(N,{ownerId:e.toString(),size:U,disableLink:a,showFullName:s,showCardOnHover:t}):o(l,{teamId:e,teamName:u.userName,disableHref:a})}try{f.displayName="UserOrTeamBadge",f.__docgenInfo={description:"",displayName:"UserOrTeamBadge",props:{principalId:{defaultValue:null,description:"",name:"principalId",required:!1,type:{name:"string | number"}},userGroupHeader:{defaultValue:null,description:"",name:"userGroupHeader",required:!1,type:{name:"UserGroupHeader"}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}}}}}catch{}export{f as U,V as a,L as u};
//# sourceMappingURL=UserOrTeamBadge-6d4ec589.js.map