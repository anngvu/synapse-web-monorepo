import{j as t,a as r,F as k}from"./jsx-runtime-ad672792.js";import{r as V,h as S}from"./SynapseConstants-9d1f6e44.js";import{aZ as h,b$ as z,av as G,aN as P}from"./SynapseContext-d24812ed.js";import{u as K}from"./useEntity-50ede0e5.js";import{b as Q}from"./useGetQueryResultBundle-dabe441d.js";import{U as C}from"./UserCard-3f1ebd8e.js";import{f as y}from"./DateFormatter-32da4422.js";import{C as N}from"./ConditionalWrapper-2492e95a.js";import{d as u}from"./dayjs.min-e0adaab4.js";import{B as Z}from"./Box-2e3c1244.js";import{B as H}from"./Breadcrumbs-856d166d.js";import{S as v}from"./Skeleton-cff63b1c.js";import{T as p}from"./Typography-f5dd8748.js";import{a as f}from"./Clear-a369813f.js";import{I as b}from"./FullWidthAlert-922261cc.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-93d86b25.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8837a0b3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./IconSvg-d08f7c5f.js";import"./Button-e0234af7.js";import"./ButtonBase-26873d31.js";import"./emotion-react.browser.esm-a8a50fc7.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-a2b6e27b.js";import"./useForkRef-dd8a6e5c.js";import"./Button-7d415009.js";import"./useTheme-c4678cf9.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./useMutation-a65d2b87.js";import"./mutation-378a4eea.js";import"./useInfiniteQuery-7acad3e2.js";import"./infiniteQueryBehavior-b4df1474.js";import"./pick-18ce9c0d.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseClone-5fae8b56.js";import"./_MapCache-7d334ea4.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./_baseSlice-cf92e063.js";import"./merge-eb7ef470.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-6eb86642.js";import"./_isIterateeCall-50961260.js";import"./SkeletonTable-936bef78.js";import"./times-21b7de4c.js";import"./toInteger-e4bf8a9e.js";import"./ToastMessage-2d5f260a.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./Popover-1817f0c0.js";import"./Modal-9e0ffea8.js";import"./Fade-04af601d.js";import"./getScrollbarSize-ac846fe6.js";import"./isHostComponent-fa76b8d9.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-a43bd2f5.js";import"./utc-8a3e1a17.js";import"./extendSxProp-a6801df0.js";import"./index-1aacdabe.js";function J(){return t(p,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function g(T){var w;const{entityId:d,versionNumber:m}=T,i=`${d}${m?`.${m}`:""}`,{data:e}=K(d,m),{data:c}=Q({entityId:d,query:{sql:`SELECT * FROM ${i} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&h(e))}),x=(w=c==null?void 0:c.responseBody)==null?void 0:w.lastUpdatedOn,o=e?z(G(e.concreteType)):"",j="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",q=r(k,{children:[r("p",{children:["This is when the configuration of this ",o," was last changed."]}),t("p",{children:"Configuration changes may be triggered by (for example):"}),r("ul",{children:[r("li",{children:["Editing the name of the ",o]}),r("li",{children:["Updating the schema used by the ",o]})]}),r("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),R=`This is when the configuration of this ${o} was last changed.`,W=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,B=`${i}-createdByTooltip`,I=`${i}-modifiedByTooltip`,_=`${i}-lastUpdatedTooltip`,l={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return t(Z,{sx:{bgcolor:"grey.100",py:"10px"},children:r(H,{separator:t(J,{}),sx:{"& .MuiBreadcrumbs-ol":{justifyContent:"center"}},children:[t(N,{condition:!e,wrapper:v,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":B,children:[o," created by"," ",t(C,{ownerId:e==null?void 0:e.createdBy,size:S})," on"," ",y(u(e==null?void 0:e.createdOn)),e&&P(e)&&t(f,{id:B,title:j,children:t(b,{sx:l})})]})}),t(N,{condition:!e,wrapper:v,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&h(e)?"Configuration":o," last modified by"," ",t(C,{ownerId:e==null?void 0:e.modifiedBy,size:S})," on"," ",y(u(e==null?void 0:e.modifiedOn)),e&&h(e)&&t(f,{id:I,title:q,"aria-label":R,children:t(b,{sx:l})})]})}),x&&r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":_,children:[o," last rebuilt on ",y(u(x)),t(f,{title:W,id:_,children:t(b,{sx:l})})]})]})})}try{g.displayName="CreatedByModifiedBy",g.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const Tt={title:"Synapse/EntityPage/CreatedByModifiedBy",component:g},a={args:{entityId:"syn36695878",versionNumber:1}},s={args:{entityId:"syn35197546"}},n={args:{entityId:"syn26302617"}};var M,D,E;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    entityId: 'syn36695878',
    versionNumber: 1
  }
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var U,$,L;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    entityId: 'syn35197546'
  }
}`,...(L=($=s.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var O,A,F;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26302617'
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const xt=["File","Table","Dataset"];export{n as Dataset,a as File,s as Table,xt as __namedExportsOrder,Tt as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-1222f8f9.js.map
