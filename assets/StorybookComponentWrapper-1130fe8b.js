import{j as p,a as R}from"./jsx-runtime-670450c2.js";import{r as u,R as w}from"./index-f1f749bf.js";import{P as y,o as k,a as E,b as O,s as S,g as v,Q as T,d as b,i as x,c as A,S as D,e as I,f as _,h as N,j as Q,k as U,l as M,p as L,m as F,n as j,q,r as B,t as G,u as W,v as H,w as K,x as V,y as $,z}from"./SynapseContext-1b625f19.js";import{S as J}from"./ToastMessage-80cbec70.js";import{d as X}from"./dayjs.min-e0adaab4.js";import{B as m,P as Y,S as Z}from"./getEndpoint-5374ab4d.js";import{M as ee}from"./react-router-a0ab681b.js";function te(e=`${Y.PORTAL}#!RegisterAccount:0`,t){u.useEffect(()=>{const a=v(),o=new URL(window.location.href),{searchParams:c}=o;if(!c)return;const r=c.get("code"),s=c.get("provider"),g=c.get("state");if(r&&s){const f=`${a}?provider=${s}`,h=()=>{const n=localStorage.getItem("after-sso-login-url");localStorage.removeItem("after-sso-login-url"),n&&window.location.replace(n)};if(y.GOOGLE==s){const n=l=>{S(l.accessToken).then(h)},i=l=>{l.status===404&&window.location.replace(e),console.error("Error with Google account association: ",l),t&&t(l.reason)};g?k(g,s,r,f,m.REPO_ENDPOINT).then(n).catch(i):E(s,r,f,m.REPO_ENDPOINT).then(n).catch(i)}else if(y.ORCID==s){const n=i=>{console.error("Error binding ORCiD to account: ",i),t&&t(i.reason)};O(s,r,f,m.REPO_ENDPOINT).then(h).catch(n)}}},[])}var P={},oe={get exports(){return P},set exports(e){P=e}};oe.exports={ReactQueryDevtools:function(){return null},ReactQueryDevtoolsPanel:function(){return null}};async function ae(){let e=await _(),t;try{t=await N(e)}catch(o){throw o instanceof Q&&o.status===401&&(console.error("Encountered error fetching profile: ",o,"Signing out..."),await U(),e=void 0),o}let a;return e&&M(e).then(o=>{a=X(o.authenticatedOn).format("L LT")}),{accessToken:e,profile:t,authenticatedOn:a}}const d=new T(b);function re(e){const t=Z[e];window.SRC={OVERRIDE_ENDPOINT_CONFIG:t},d.resetQueries()}const se={default:L,sageBionetworks:F,mtb:j,arkPortal:q,adKnowledgePortal:B,nfPortal:G,bsmnPortal:W,psychEncodePortal:H,stopAdPortal:K,digitalHealthPortal:V,crcResearcherPortal:$,cancerComplexityPortal:z};function C(e){const{storybookContext:t}=e;u.useEffect(()=>{re(t.globals.stack)},[t.globals.stack]);const[a,o]=w.useState(void 0);te(),u.useEffect(()=>{ae().then(r=>{o(r.accessToken)})}),u.useEffect(()=>{async function r(){await d.cancelQueries(),d.removeQueries(),await d.invalidateQueries()}r()},[a]);const c=u.useMemo(()=>({accessToken:a,isInExperimentalMode:x(),utcTime:A(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[a]);return p(D,{queryClient:d,synapseContext:c,theme:{...I,palette:se[t.globals.palette]},children:R(ee,{children:[t.globals.showReactQueryDevtools&&p(P.ReactQueryDevtools,{}),p(J,{}),p("main",{children:e.children})]})},a)}try{C.displayName="StorybookComponentWrapper",C.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{storybookContext:{defaultValue:null,description:"",name:"storybookContext",required:!0,type:{name:"any"}}}}}catch{}export{C as S,ae as s};
//# sourceMappingURL=StorybookComponentWrapper-1130fe8b.js.map