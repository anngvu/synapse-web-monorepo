import{j as t,a as r,F as k}from"./jsx-runtime-095bf462.js";import{B as V,S as w}from"./SynapseConstants-b4e8f39a.js";import{I as y}from"./SynapseClient-a4e4b778.js";import{u as z}from"./useEntity-07c5d97b.js";import"./index-8db94870.js";import"./getEndpoint-ac94413e.js";import{u as G}from"./useGetQueryResultBundle-42511f79.js";import{i as h,e as P,c as K,a as Q}from"./EntityTypeUtils-27ede0a8.js";import{U as C}from"./UserCard-2b673b10.js";import{f as u}from"./DateFormatter-8ecdfc55.js";import{C as M}from"./ConditionalWrapper-51b8d1ed.js";import{d as f}from"./dayjs.min-8d4ef725.js";import{B as H}from"./Box-402daddb.js";import{B as J}from"./Breadcrumbs-19af940f.js";import{S as N}from"./Skeleton-7e59f3cf.js";import{T as p}from"./Typography-2ef1cd4b.js";import{T as b}from"./Tooltip-8e07f653.js";import"./OrientationBanner-f49a763f.js";import"./FullWidthAlert-81b4d296.js";import"./AlertTitle-78f79fc0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-55b76ab0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./createSvgIcon-c95ac3df.js";import"./Paper-18b94b55.js";import"./IconButton-693072d1.js";import"./ButtonBase-808eaa85.js";import"./emotion-react.browser.esm-6281246a.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Stack-eddb74b2.js";import"./extendSxProp-a7783ced.js";import"./useTheme-c3897ed6.js";import"./Grow-aadb01f1.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-fc362ac6.js";import"./ClickAwayListener-36b79525.js";import"./Button-79de9a0b.js";import"./Link-f298db32.js";import"./isArray-5e3f9107.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-8c851187.js";import"./inputBaseClasses-529452bb.js";import"./Fade-fa965c6f.js";import"./useMutation-0e9148bd.js";import"./useInfiniteQuery-9947b096.js";import"./pick-560fd152.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseClone-aa39fa36.js";import"./_Uint8Array-c4b717ff.js";import"./_MapCache-5d9b55c6.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./hasIn-612d816a.js";import"./_baseSlice-cf92e063.js";import"./merge-26799e29.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-6b2f461f.js";import"./_baseRest-907aefb6.js";import"./_isIterateeCall-cec43fc6.js";import"./IsType-3ac804ed.js";import"./SkeletonTable-5a27bbce.js";import"./times-5bba76cd.js";import"./IconSvg-ef9afca2.js";import"./ErrorOutlined-77fe1f54.js";import"./InfoOutlined-c40241a8.js";import"./ToastMessage-86aa22ee.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./Popover-a2db6266.js";import"./Modal-99a88e12.js";import"./Backdrop-0086dc9a.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./index-953d39fd.js";function X(){return t(p,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function g(T){var _;const{entityId:m,versionNumber:d}=T,i=`${m}${d?`.${d}`:""}`,{data:e}=z(m,d),{data:c}=G({entityId:m,query:{sql:`SELECT * FROM ${i} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&h(e))}),B=(_=c==null?void 0:c.responseBody)==null?void 0:_.lastUpdatedOn,o=e?P(K(e.concreteType)):"",j="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",q=r(k,{children:[r("p",{children:["This is when the configuration of this ",o," was last changed."]}),t("p",{children:"Configuration changes may be triggered by (for example):"}),r("ul",{children:[r("li",{children:["Editing the name of the ",o]}),r("li",{children:["Updating the schema used by the ",o]})]}),r("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),R=`This is when the configuration of this ${o} was last changed.`,W=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,x=`${i}-createdByTooltip`,I=`${i}-modifiedByTooltip`,S=`${i}-lastUpdatedTooltip`,l={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return t(H,{sx:{bgcolor:"grey.100",py:"10px"},children:r(J,{separator:t(X,{}),sx:{"& .MuiBreadcrumbs-ol":{justifyContent:"center"}},children:[t(M,{condition:!e,wrapper:N,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":x,children:[o," created by"," ",t(C,{ownerId:e==null?void 0:e.createdBy,size:w})," on"," ",u(f(e==null?void 0:e.createdOn)),e&&Q(e)&&t(b,{id:x,title:j,children:t(y,{sx:l})})]})}),t(M,{condition:!e,wrapper:N,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&h(e)?"Configuration":o," last modified by"," ",t(C,{ownerId:e==null?void 0:e.modifiedBy,size:w})," on"," ",u(f(e==null?void 0:e.modifiedOn)),e&&h(e)&&t(b,{id:I,title:q,"aria-label":R,children:t(y,{sx:l})})]})}),B&&r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":S,children:[o," last rebuilt on ",u(f(B)),t(b,{title:W,id:S,children:t(y,{sx:l})})]})]})})}try{g.displayName="CreatedByModifiedBy",g.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const Mt={title:"Synapse/EntityPage/CreatedByModifiedBy",component:g},a={args:{entityId:"syn36695878",versionNumber:1}},s={args:{entityId:"syn35197546"}},n={args:{entityId:"syn26302617"}};var v,D,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    entityId: 'syn36695878',
    versionNumber: 1
  }
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var U,L,O;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    entityId: 'syn35197546'
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,A,F;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26302617'
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Nt=["File","Table","Dataset"];export{n as Dataset,a as File,s as Table,Nt as __namedExportsOrder,Mt as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-25fe24f8.js.map