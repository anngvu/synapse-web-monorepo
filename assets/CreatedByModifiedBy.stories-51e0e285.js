import{j as t,a as r,F as W}from"./jsx-runtime-095bf462.js";import{B as V,S as w}from"./SynapseConstants-667d004c.js";import{i as y,j as z,k as G,l as P}from"./EntityTypeUtils-1e303662.js";import"./index-8db94870.js";import"./getEndpoint-ac94413e.js";import{u as K}from"./useEntity-8c420780.js";import{u as Q}from"./useGetQueryResultBundle-1f4bb24d.js";import{U as C}from"./UserCard-fff343bf.js";import{f as h}from"./DateFormatter-66a25001.js";import{C as M}from"./ConditionalWrapper-51b8d1ed.js";import{d as u}from"./dayjs.min-8d4ef725.js";import{B as H}from"./Box-13f1aabd.js";import{B as J}from"./Breadcrumbs-ed45444f.js";import{S as N}from"./Skeleton-3aad52b9.js";import{T as p}from"./Typography-0933b2f6.js";import{T as f}from"./Tooltip-72c76487.js";import{I as b}from"./FullWidthAlert-93fbddb4.js";import"./inheritsLoose-c82a83d4.js";import"./isArray-5e3f9107.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./SvgIcon-4c933a0b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-f64e11ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./IconSvg-90b7b72f.js";import"./Clear-72bafe95.js";import"./Button-891a522f.js";import"./ButtonBase-4f599170.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-0df7f063.js";import"./useForkRef-f2aa3d66.js";import"./Button-5637ed55.js";import"./utils-724ac38b.js";import"./useTheme-14d0ce71.js";import"./Alert-fbdd8ab9.js";import"./createWithBsPrefix-f259edae.js";import"./index-58d3fd43.js";import"./useMutation-478d0e49.js";import"./mutation-91b2e413.js";import"./useInfiniteQuery-383cf71c.js";import"./infiniteQueryBehavior-c66ea7b2.js";import"./pick-1b1f40c9.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseClone-4227d996.js";import"./_Uint8Array-b845e6a2.js";import"./_MapCache-9d0736ef.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./hasIn-357235e5.js";import"./_baseSlice-cf92e063.js";import"./merge-7ae7c790.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-fe52ea66.js";import"./_baseRest-26f86aa0.js";import"./_isIterateeCall-080d3acf.js";import"./SkeletonTable-d57da240.js";import"./times-eee37d24.js";import"./ToastMessage-def67892.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./Popover-45a8559b.js";import"./Modal-b99e76f4.js";import"./Backdrop-31335125.js";import"./Fade-f7811978.js";import"./getScrollbarSize-ac846fe6.js";import"./isHostComponent-fa76b8d9.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-2b624eab.js";import"./Link-2921f78c.js";import"./extendSxProp-29a14132.js";import"./react-is.production.min-a192e302.js";function X(){return t(p,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function g(T){var _;const{entityId:d,versionNumber:m}=T,i=`${d}${m?`.${m}`:""}`,{data:e}=K(d,m),{data:c}=Q({entityId:d,query:{sql:`SELECT * FROM ${i} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&y(e))}),B=(_=c==null?void 0:c.responseBody)==null?void 0:_.lastUpdatedOn,o=e?z(G(e.concreteType)):"",F="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",q=r(W,{children:[r("p",{children:["This is when the configuration of this ",o," was last changed."]}),t("p",{children:"Configuration changes may be triggered by (for example):"}),r("ul",{children:[r("li",{children:["Editing the name of the ",o]}),r("li",{children:["Updating the schema used by the ",o]})]}),r("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),R=`This is when the configuration of this ${o} was last changed.`,k=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,x=`${i}-createdByTooltip`,I=`${i}-modifiedByTooltip`,S=`${i}-lastUpdatedTooltip`,l={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return t(H,{sx:{bgcolor:"grey.100",py:"10px"},children:r(J,{separator:t(X,{}),sx:{"& .MuiBreadcrumbs-ol":{justifyContent:"center"}},children:[t(M,{condition:!e,wrapper:N,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":x,children:[o," created by"," ",t(C,{ownerId:e==null?void 0:e.createdBy,size:w})," on"," ",h(u(e==null?void 0:e.createdOn)),e&&P(e)&&t(f,{id:x,title:F,children:t(b,{sx:l})})]})}),t(M,{condition:!e,wrapper:N,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&y(e)?"Configuration":o," last modified by"," ",t(C,{ownerId:e==null?void 0:e.modifiedBy,size:w})," on"," ",h(u(e==null?void 0:e.modifiedOn)),e&&y(e)&&t(f,{id:I,title:q,"aria-label":R,children:t(b,{sx:l})})]})}),B&&r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":S,children:[o," last rebuilt on ",h(u(B)),t(f,{title:k,id:S,children:t(b,{sx:l})})]})]})})}try{g.displayName="CreatedByModifiedBy",g.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const Bt={title:"Synapse/EntityPage/CreatedByModifiedBy",component:g},a={args:{entityId:"syn36695878",versionNumber:1}},s={args:{entityId:"syn35197546"}},n={args:{entityId:"syn26302617"}};var v,D,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    entityId: 'syn36695878',
    versionNumber: 1
  }
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var U,L,O;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    entityId: 'syn35197546'
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,A,j;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26302617'
  }
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const xt=["File","Table","Dataset"];export{n as Dataset,a as File,s as Table,xt as __namedExportsOrder,Bt as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-51e0e285.js.map