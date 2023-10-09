import{a as f,F as y,j as r}from"./jsx-runtime-095bf462.js";import{r as g}from"./index-8db94870.js";import{u as k,n as _,m as I,bI as b,ac as v}from"./SynapseClient-47ca3138.js";import{P as U}from"./getEndpoint-ac94413e.js";import"./OrientationBanner-ecffb496.js";import{I as L}from"./IconSvg-7541a7b0.js";import{u as j}from"./index-95cfb7c2.js";import{u as x}from"./useInfiniteQuery-2d60b5a6.js";import{S as w}from"./SkeletonTable-5263c31a.js";import{a as O}from"./useGetUserTeams-cd9f0b22.js";import{T as C}from"./Typography-d16533eb.js";import{S}from"./Skeleton-2bd04c38.js";function $(s,l){const{accessToken:c,keyFactory:a}=k();return x(a.getUserChallengesQueryKey(s),async o=>{const e=await _.getUserChallenges(c,s,o.pageParam,10);if(e.results.length>0){const t=Array.from(e.results,i=>i.projectId),u=await _.getEntityHeadersByIds(t);return{results:Array.from(e.results,(i,d)=>({challenge:i,projectHeader:u.results[d]})),totalNumberOfResults:e.totalNumberOfResults}}return{results:[],totalNumberOfResults:e.totalNumberOfResults}},{...l,getNextPageParam:(o,e)=>{if(o.results.length>0)return e.length*10}})}function F(s,l,c){const{accessToken:a,keyFactory:o}=k();return x(o.getUserProjectsQueryKey(s,l),async e=>_.getUserProjects(s,{...l,nextPageToken:e.pageParam},a),{...c,getNextPageParam:e=>e.nextPageToken})}function N({userId:s}){const l=I(),{ref:c,inView:a}=j(),{data:o,status:e,isFetching:t,isLoading:u,hasNextPage:h,fetchNextPage:i,isError:d,error:m}=$(s);g.useEffect(()=>{d&&m&&l(m)},[d,m,l]),g.useEffect(()=>{e==="success"&&!t&&h&&i&&a&&i()},[e,t,h,i,a]);const p=(o==null?void 0:o.pages.flatMap(n=>n.results))??[];return f(y,{children:[p.length>0&&f(y,{children:[p.map(n=>n&&n.challenge&&n.projectHeader?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${U.PORTAL}#!Synapse:${n.challenge.projectId}/challenge`,children:n.projectHeader.name})},`user-challenge-list-item-${n.challenge.projectId}`):!1),r("div",{ref:c})]}),!t&&p.length==0&&r("div",{children:"Empty"}),u&&r(w,{numRows:5,numCols:1})]})}try{N.displayName="UserChallenges",N.__docgenInfo={description:"",displayName:"UserChallenges",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function T({userId:s}){const l=I(),{ref:c,inView:a}=j(),o={},{data:e,status:t,isFetching:u,isLoading:h,hasNextPage:i,fetchNextPage:d,isError:m,error:p}=F(s,o);g.useEffect(()=>{m&&p&&l(p)},[m,p,l]),g.useEffect(()=>{t==="success"&&!u&&i&&d&&a&&d()},[t,u,i,d,a]);const n=(e==null?void 0:e.pages.flatMap(P=>P.results))??[];return f(y,{children:[n.length>0&&f(y,{children:[n.map(P=>P?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${U.PORTAL}#!Synapse:${P.id}`,children:P.name})},`user-project-list-item-${P.id}`):!1),r("div",{ref:c})]}),!u&&n.length==0&&r("div",{children:"Empty"}),h&&r(w,{numRows:5,numCols:1})]})}try{T.displayName="UserProjects",T.__docgenInfo={description:"",displayName:"UserProjects",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function E({userId:s}){const l=I(),{ref:c,inView:a}=j(),{data:o,status:e,isFetching:t,isLoading:u,hasNextPage:h,fetchNextPage:i,isError:d,error:m}=O(s);g.useEffect(()=>{d&&m&&l(m)},[d,m,l]),g.useEffect(()=>{e==="success"&&!t&&h&&i&&a&&i()},[e,t,h,i,a]);const p=(o==null?void 0:o.pages.flatMap(n=>n.results))??[];return f(y,{children:[p.length>0&&f(y,{children:[p.map(n=>n?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${U.PORTAL}#!Team:${n.id}`,children:n.name})},`user-team-list-item-${n.id}`):!1),r("div",{ref:c})]}),!t&&p.length==0&&r("div",{children:"Empty"}),u&&r(w,{numRows:5,numCols:1})]})}try{E.displayName="UserTeams",E.__docgenInfo={description:"",displayName:"UserTeams",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function R({userId:s}){var e;const[l,c]=g.useState("Projects"),{data:a}=b(s),o=g.useMemo(()=>[{name:"Projects",iconName:"dashboard",render:r(T,{userId:s})},{name:"Teams",iconName:"peopleTwoTone",render:r(E,{userId:s})},{name:"Challenges",iconName:"challengesTwoTone",render:r(N,{userId:s})}],[s]);return f("div",{className:"UserProfileLinks",children:[f(C,{variant:"headline2",className:"title",children:[a&&f(y,{children:[a==null?void 0:a.userName,"'s Items"]}),!a&&r(S,{width:"75%"})]}),r("div",{className:"Tabs",children:o.map(t=>r("div",{className:"Tab",role:"tab",onClick:u=>{u.stopPropagation(),c(t.name)},"aria-selected":l===t.name,children:f(C,{variant:"buttonLink",children:[r(L,{icon:t.iconName})," ",t.name]})},t.name))}),r("div",{className:"TabContent",children:r(v,{children:(e=o.find(t=>l===t.name))==null?void 0:e.render})})]})}try{R.displayName="UserProfileLinks",R.__docgenInfo={description:"",displayName:"UserProfileLinks",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}export{R as U};
//# sourceMappingURL=UserProfileLinks-d50cd1bc.js.map