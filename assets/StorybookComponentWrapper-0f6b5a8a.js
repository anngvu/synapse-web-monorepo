import{a as i,j as l}from"./jsx-runtime-095bf462.js";import{r as s,R as y}from"./index-8db94870.js";import{Q as f,h as P,i as h,S as c,j as C,F as g,k,l as w,m as x,n as S,o as b,p as v,q as E,r as T,t as Q,v as R,w as _,x as O,y as D,z as A,B as M,C as I,D as j,G as F}from"./SynapseClient-a4e4b778.js";import{S as N}from"./ToastMessage-86aa22ee.js";import{d as q}from"./dayjs.min-8d4ef725.js";import{S as B}from"./getEndpoint-ac94413e.js";import{c as U}from"./styled-55b76ab0.js";var d={exports:{}};d.exports={ReactQueryDevtools:function(){return null},ReactQueryDevtoolsPanel:function(){return null}};var W=d.exports;async function H(){let e=await w(),t;try{t=await x(e)}catch(o){throw o instanceof S&&o.status===401&&(console.error("Encountered error fetching profile: ",o,"Signing out..."),await b(),e=void 0),o}let a;return e&&v(e).then(o=>{a=q(o.authenticatedOn).format("L LT")}),{accessToken:e,profile:t,authenticatedOn:a}}const r=new f(P);function K(e){const t=B[e];window.SRC={OVERRIDE_ENDPOINT_CONFIG:t},r.resetQueries()}const G={default:E,sageBionetworks:T,mtb:Q,arkPortal:R,adKnowledgePortal:_,nfPortal:O,bsmnPortal:D,psychEncodePortal:A,stopAdPortal:M,digitalHealthPortal:I,crcResearcherPortal:j,cancerComplexityPortal:F};function p(e){const{storybookContext:t}=e;s.useEffect(()=>{K(t.globals.stack||t.parameters.stack)},[t.globals.stack]);const[a,o]=y.useState(void 0);h(),s.useEffect(()=>{H().then(n=>{o(n.accessToken)})}),s.useEffect(()=>{async function n(){await r.cancelQueries(),r.removeQueries(),await r.invalidateQueries()}n()},[a]);const u=s.useMemo(()=>({accessToken:a,isInExperimentalMode:c.isInSynapseExperimentalMode(),utcTime:c.getUseUtcTimeFromCookie(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[a]),m=U(C,{palette:G[t.globals.palette]});return i(g,{queryClient:r,synapseContext:u,theme:m,children:[t.globals.showReactQueryDevtools&&l(W.ReactQueryDevtools,{}),i(k,{children:[l(N,{}),l("main",{children:e.children})]})]},a)}try{p.displayName="StorybookComponentWrapper",p.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{storybookContext:{defaultValue:null,description:"",name:"storybookContext",required:!0,type:{name:"any"}}}}}catch{}export{p as S,H as s};
//# sourceMappingURL=StorybookComponentWrapper-0f6b5a8a.js.map