import{j as n,a as c}from"./jsx-runtime-095bf462.js";import{r as s,R as y}from"./index-8db94870.js";import{aT as m,aU as f,aV as C,w as l,aW as k,a as h,aX as S,aY as g,aZ as v,b as w,a_ as x,a$ as b}from"./SynapseClient-ce341217.js";import{S as E}from"./getEndpoint-ac94413e.js";import"./OrientationBanner-caa14b37.js";import{S as Q}from"./ToastMessage-84db75ac.js";import{d as T}from"./dayjs.min-47c8dffe.js";var d={exports:{}};d.exports={ReactQueryDevtools:function(){return null},ReactQueryDevtoolsPanel:function(){return null}};var _=d.exports;async function R(){let e=await g(),t;try{t=await v(e)}catch(o){throw o instanceof w&&o.status===401&&(console.error("Encountered error fetching profile: ",o,"Signing out..."),await x(),e=void 0),o}let a;return e&&b(e).then(o=>{a=T(o.authenticatedOn).format("L LT")}),{accessToken:e,profile:t,authenticatedOn:a}}const r=new m(f);function D(e){const t=E[e];window.SRC={OVERRIDE_ENDPOINT_CONFIG:t},r.resetQueries()}function u(e){const{storybookContext:t}=e;s.useEffect(()=>{D(t.globals.stack||t.parameters.stack)},[t.globals.stack]);const[a,o]=y.useState(void 0);C(),s.useEffect(()=>{R().then(i=>{o(i.accessToken)})}),s.useEffect(()=>{async function i(){await r.cancelQueries(),r.removeQueries(),await r.invalidateQueries()}i()},[a]);const p=s.useMemo(()=>({accessToken:a,isInExperimentalMode:l.isInSynapseExperimentalMode(),utcTime:l.getUseUtcTimeFromCookie(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[a]);return n(k,{client:r,children:c(h,{synapseContext:p,children:[t.globals.showReactQueryDevtools&&n(_.ReactQueryDevtools,{}),c(S,{children:[n(Q,{}),n("main",{children:e.children})]})]})})}try{u.displayName="StorybookComponentWrapper",u.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{storybookContext:{defaultValue:null,description:"",name:"storybookContext",required:!0,type:{name:"{ globals: { stack?: SynapseStack | undefined; showReactQueryDevtools?: boolean | undefined; }; parameters: { stack?: SynapseStack | undefined; }; }"}}}}}catch{}export{u as S,R as s};
//# sourceMappingURL=StorybookComponentWrapper-005c53df.js.map