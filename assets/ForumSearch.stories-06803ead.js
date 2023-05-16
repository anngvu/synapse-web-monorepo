import{j as t,a as n,F as T}from"./jsx-runtime-095bf462.js";import{r as o}from"./index-8db94870.js";import{u as $,cC as L,d6 as P,cB as F,d7 as U,cK as O,d8 as j,b4 as q}from"./EntityTypeUtils-1e303662.js";import{d as A}from"./dayjs.min-8d4ef725.js";import{U as K}from"./UserCard-fff343bf.js";import{S as z}from"./SynapseConstants-667d004c.js";import{I as _}from"./IconSvg-90b7b72f.js";import{S as B}from"./SkeletonTable-d57da240.js";import{P as G}from"./getEndpoint-ac94413e.js";import{f as H}from"./DateFormatter-66a25001.js";import{R as J}from"./Row-2fd92e1a.js";import{C as E}from"./Col-8dbe8567.js";import{S as Q}from"./Skeleton-3aad52b9.js";import{T as g}from"./Typography-0933b2f6.js";import{s as W}from"./NoSearchResults-460db635.js";import{d as X}from"./ToastMessage-def67892.js";import{B as Y}from"./Button-5637ed55.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-c82a83d4.js";import"./isArray-5e3f9107.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./SvgIcon-4c933a0b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-f64e11ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./Box-13f1aabd.js";import"./extendSxProp-29a14132.js";import"./Button-891a522f.js";import"./ButtonBase-4f599170.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-0df7f063.js";import"./useForkRef-f2aa3d66.js";import"./utils-724ac38b.js";import"./useTheme-14d0ce71.js";import"./Alert-fbdd8ab9.js";import"./createWithBsPrefix-f259edae.js";import"./index-58d3fd43.js";import"./Tooltip-72c76487.js";import"./isHostComponent-fa76b8d9.js";import"./Popover-45a8559b.js";import"./Modal-b99e76f4.js";import"./Backdrop-31335125.js";import"./Fade-f7811978.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-2b624eab.js";import"./Link-2921f78c.js";import"./Clear-72bafe95.js";import"./times-eee37d24.js";import"./_baseTimes-8cccc40f.js";import"./isSymbol-7c514724.js";import"./FullWidthAlert-93fbddb4.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";const b=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),x=r=>{const{threadId:p,replyId:c}=r,{accessToken:s}=$(),[a,l]=o.useState(),[h,f]=o.useState(""),[i,d]=o.useState(),[S,I]=o.useState(),[y,v]=o.useState(!1),N=async()=>{let u;const e=await L(p,s);if(v(!0),c){const m=await P(c,s);u=await F(m.messageKey,s),I(await U(s,m.createdBy)),d(m)}else I(await U(s,e.createdBy)),u=await O(e.messageKey,s);f(await b(u.messageUrl)),l(e),v(!1)};return o.useEffect(()=>{N()},[]),t("div",{className:"search-result-container",children:n(J,{children:[t(E,{xs:1,children:y?t(Q,{variant:"circular",width:"40px",height:"40px"}):c?t(_,{icon:"replyTwoTone"}):t(_,{icon:"chatTwoTone"})}),t(E,{xs:11,children:y?t(B,{numCols:1,numRows:4}):n(T,{children:[t(g,{variant:"headline3",children:t("a",{className:"link",href:((u,e,m)=>{let k=`${G.PORTAL}#!Synapse:${e}/discussion/threadId=${u}`;return m&&(k+=`&replyId=${m}`),k})(a==null?void 0:a.id,a==null?void 0:a.projectId,i==null?void 0:i.id),children:a==null?void 0:a.title})}),t("div",{className:"truncated",children:t(g,{variant:"body1",children:h})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(K,{size:z,ownerId:S==null?void 0:S.ownerId})," ",H(A(i==null?void 0:i.createdOn))]})]})})]})})};try{b.displayName="getMessage",b.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{x.displayName="DiscussionSearchResult",x.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const w=r=>{const{onSearchResultsVisible:p}=r,{accessToken:c}=$(),[s,a]=o.useState(""),[l,h]=o.useState(),[f,i]=o.useState(),[d,S]=o.useState(),[I,y]=o.useState(!1),v=async()=>{p&&p(!0);try{h(void 0),y(!1);const e=await j({searchString:s,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&y(!0),h(e),i(e.matches)}catch(e){X(e.reason,"danger")}},N=()=>{p&&p(!1),a(""),h(void 0),y(!1),i(void 0)};o.useEffect(()=>{(async()=>{if(r.projectId){const m=await q(c,r.projectId);S(m)}})()},[c,r.projectId]);const C=()=>n("div",{className:"text-center",children:[W,t(g,{variant:"body1",children:"No results with this query"}),t(g,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),u=async()=>{const e=await j({searchString:s,nextPageToken:l==null?void 0:l.nextPageToken},r.forumId,c);h(e),f&&i([...f,...e.matches])};return n("div",{className:"bootstrap-4-backport ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(_,{icon:"search"})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${l?"SearchBarResult":""}`,placeholder:"Search discussions",value:s,onChange:e=>{a(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&v()}}),s&&t("button",{className:"ClearSearchIcon",onClick:()=>{N()},children:t(_,{icon:"clear"})})]}),I&&n(T,{children:[r.projectId&&n(g,{variant:"body1Italic",className:"NoResultsText",children:['No results for "',s,'" in ',d==null?void 0:d.name]}),t(C,{})]}),f&&n(T,{children:[r.projectId&&!I&&n(g,{variant:"body1Italic",className:"ResultsText",children:['Results for "',s,'" in ',d==null?void 0:d.name]}),f.map(e=>t("div",{children:t(x,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(l==null?void 0:l.nextPageToken)&&t("div",{className:"text-center",children:t(Y,{variant:"primary",onClick:()=>{u()},children:"Load more"})})]})};try{w.displayName="ForumSearch",w.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const st={title:"Synapse/ForumSearch",component:w},R={args:{forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)}};var D,M,V;R.parameters={...R.parameters,docs:{...(D=R.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`)
  }
}`,...(V=(M=R.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const at=["Demo"];export{R as Demo,at as __namedExportsOrder,st as default};
//# sourceMappingURL=ForumSearch.stories-06803ead.js.map