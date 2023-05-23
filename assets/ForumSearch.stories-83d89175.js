import{j as t,a as n,F as T}from"./jsx-runtime-095bf462.js";import{r as o}from"./index-8db94870.js";import{u as V,c2 as $,c3 as P,c4 as F,c5 as U,c6 as O,c7 as j,aL as q}from"./SynapseClient-c43c6534.js";import{d as A}from"./dayjs.min-8d4ef725.js";import{U as K}from"./UserCard-6ee404cb.js";import{S as z}from"./SynapseConstants-1ebc8be6.js";import{I as _}from"./IconSvg-f04d8c2b.js";import{S as G}from"./SkeletonTable-548d1d1b.js";import{P as B}from"./getEndpoint-ac94413e.js";import{f as H}from"./DateFormatter-16f01884.js";import{R as J}from"./Row-2fd92e1a.js";import{C as E}from"./Col-8dbe8567.js";import{S as Q}from"./Skeleton-cbf43066.js";import{T as g}from"./Typography-b4a6e0b5.js";import{s as W}from"./NoSearchResults-460db635.js";import{d as X}from"./ToastMessage-6e66d93f.js";import{B as Y}from"./Button-5637ed55.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-c82a83d4.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./Link-50e57cb4.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-2cba4329.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./TransitionGroupContext-53ae1513.js";import"./useForkRef-2674f3de.js";import"./utils-8d96ae5c.js";import"./useTheme-d9b5c73e.js";import"./Alert-e578e9d5.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./isArray-5e3f9107.js";import"./hoist-non-react-statics.cjs-775f1375.js";import"./inputBaseClasses-564a6ee4.js";import"./Fade-2249b304.js";import"./Tooltip-b11baf92.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-c45cae33.js";import"./isHostComponent-73d6e646.js";import"./useControlled-be22aa93.js";import"./useEventCallback-65e61675.js";import"./Popover-0894bcd3.js";import"./Modal-cf7a81a7.js";import"./Backdrop-0451e96c.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-16fb121c.js";import"./Box-fe8ef83e.js";import"./extendSxProp-a6a93bb0.js";import"./SvgIcon-bc070951.js";import"./createSvgIcon-02cd1a2a.js";import"./ErrorOutlined-fccff164.js";import"./InfoOutlined-d944994d.js";import"./Clear-398befb5.js";import"./times-7d6556a7.js";import"./_baseTimes-8cccc40f.js";import"./isSymbol-7c514724.js";import"./emotion-react.browser.esm-9ef79d4e.js";import"./FullWidthAlert-51eedfbf.js";import"./TransitionGroup-5e0fc2af.js";import"./assertThisInitialized-081f9914.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";const x=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),b=r=>{const{threadId:p,replyId:c}=r,{accessToken:a}=V(),[s,l]=o.useState(),[h,f]=o.useState(""),[i,m]=o.useState(),[S,I]=o.useState(),[y,v]=o.useState(!1),N=async()=>{let u;const e=await $(p,a);if(v(!0),c){const d=await P(c,a);u=await F(d.messageKey,a),I(await U(a,d.createdBy)),m(d)}else I(await U(a,e.createdBy)),u=await O(e.messageKey,a);f(await x(u.messageUrl)),l(e),v(!1)};return o.useEffect(()=>{N()},[]),t("div",{className:"search-result-container",children:n(J,{children:[t(E,{xs:1,children:y?t(Q,{variant:"circular",width:"40px",height:"40px"}):c?t(_,{icon:"replyTwoTone"}):t(_,{icon:"chatTwoTone"})}),t(E,{xs:11,children:y?t(G,{numCols:1,numRows:4}):n(T,{children:[t(g,{variant:"headline3",children:t("a",{className:"link",href:((u,e,d)=>{let k=`${B.PORTAL}#!Synapse:${e}/discussion/threadId=${u}`;return d&&(k+=`&replyId=${d}`),k})(s==null?void 0:s.id,s==null?void 0:s.projectId,i==null?void 0:i.id),children:s==null?void 0:s.title})}),t("div",{className:"truncated",children:t(g,{variant:"body1",children:h})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(K,{size:z,ownerId:S==null?void 0:S.ownerId})," ",H(A(i==null?void 0:i.createdOn))]})]})})]})})};try{x.displayName="getMessage",x.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{b.displayName="DiscussionSearchResult",b.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const w=r=>{const{onSearchResultsVisible:p}=r,{accessToken:c}=V(),[a,s]=o.useState(""),[l,h]=o.useState(),[f,i]=o.useState(),[m,S]=o.useState(),[I,y]=o.useState(!1),v=async()=>{p&&p(!0);try{h(void 0),y(!1);const e=await j({searchString:a,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&y(!0),h(e),i(e.matches)}catch(e){X(e.reason,"danger")}},N=()=>{p&&p(!1),s(""),h(void 0),y(!1),i(void 0)};o.useEffect(()=>{(async()=>{if(r.projectId){const d=await q(c,r.projectId);S(d)}})()},[c,r.projectId]);const C=()=>n("div",{className:"text-center",children:[W,t(g,{variant:"body1",children:"No results with this query"}),t(g,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),u=async()=>{const e=await j({searchString:a,nextPageToken:l==null?void 0:l.nextPageToken},r.forumId,c);h(e),f&&i([...f,...e.matches])};return n("div",{className:"bootstrap-4-backport ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(_,{icon:"search"})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${l?"SearchBarResult":""}`,placeholder:"Search discussions",value:a,onChange:e=>{s(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&v()}}),a&&t("button",{className:"ClearSearchIcon",onClick:()=>{N()},children:t(_,{icon:"clear"})})]}),I&&n(T,{children:[r.projectId&&n(g,{variant:"body1Italic",className:"NoResultsText",children:['No results for "',a,'" in ',m==null?void 0:m.name]}),t(C,{})]}),f&&n(T,{children:[r.projectId&&!I&&n(g,{variant:"body1Italic",className:"ResultsText",children:['Results for "',a,'" in ',m==null?void 0:m.name]}),f.map(e=>t("div",{children:t(b,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(l==null?void 0:l.nextPageToken)&&t("div",{className:"text-center",children:t(Y,{variant:"primary",onClick:()=>{u()},children:"Load more"})})]})};try{w.displayName="ForumSearch",w.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const dt={title:"Synapse/ForumSearch",component:w},R={args:{forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)}};var D,L,M;R.parameters={...R.parameters,docs:{...(D=R.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`)
  }
}`,...(M=(L=R.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const pt=["Demo"];export{R as Demo,pt as __namedExportsOrder,dt as default};
//# sourceMappingURL=ForumSearch.stories-83d89175.js.map