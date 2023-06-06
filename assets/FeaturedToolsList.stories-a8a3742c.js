import{a as $,j as e}from"./jsx-runtime-095bf462.js";import{v as P,m as b}from"./SynapseConstants-b4e8f39a.js";import{r as f}from"./index-8db94870.js";import"./getEndpoint-ac94413e.js";import{u as w,E as Y}from"./SynapseClient-a4e4b778.js";import{g as l}from"./queryUtils-9076d882.js";import{a as B}from"./useGetQueryResultBundle-42511f79.js";import{d as k}from"./dayjs.min-8d4ef725.js";import{f as O}from"./DateFormatter-8ecdfc55.js";import"./OrientationBanner-f49a763f.js";import"./FullWidthAlert-81b4d296.js";import"./AlertTitle-78f79fc0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-55b76ab0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./createSvgIcon-c95ac3df.js";import"./Paper-18b94b55.js";import"./IconButton-693072d1.js";import"./ButtonBase-808eaa85.js";import"./emotion-react.browser.esm-6281246a.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-2ef1cd4b.js";import"./extendSxProp-a7783ced.js";import"./Stack-eddb74b2.js";import"./Box-402daddb.js";import"./useTheme-c3897ed6.js";import"./Grow-aadb01f1.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-fc362ac6.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-8e07f653.js";import"./Button-79de9a0b.js";import"./Link-f298db32.js";import"./isArray-5e3f9107.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-8c851187.js";import"./inputBaseClasses-529452bb.js";import"./Fade-fa965c6f.js";import"./IsType-3ac804ed.js";import"./cloneDeep-d2a64a99.js";import"./_baseClone-aa39fa36.js";import"./_Uint8Array-c4b717ff.js";import"./_MapCache-5d9b55c6.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./useInfiniteQuery-9947b096.js";import"./merge-26799e29.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-6b2f461f.js";import"./_baseRest-907aefb6.js";import"./_isIterateeCall-cec43fc6.js";const g=({id:t,name:c,description:i,type:n,toolDetailPageURL:s,date:d,...o})=>$("div",{...o,className:`cardContainer FeaturedToolCard bootstrap-4-backport ${o.className??""}`,children:[e("div",{className:"FeaturedToolCard__Type",children:e("span",{className:"SRC-tag",children:n})}),e("div",{className:"FeaturedToolCard__Date",children:O(k(parseInt(d)),"MMMM YYYY")}),e("div",{className:"FeaturedToolCard__Name",children:c}),e("div",{className:"FeaturedToolCard__Description",children:i}),e("div",{children:e("a",{className:"FeaturedToolCard__Link",href:`${s}${t}`,children:"View Tool"})})]});try{g.displayName="FeaturedToolCard",g.__docgenInfo={description:"",displayName:"FeaturedToolCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}}}catch{}const _=({entityId:t,toolDetailPageURL:c,idColumnName:i="id",nameColumnName:n="name",descriptionColumnName:s="description",typeColumnName:d="type",dateColumnName:o="date"})=>{const E=`SELECT "${i}", "${n}", "${s}", "${d}", "${o}" FROM ${t} ORDER BY ROW_ID DESC LIMIT 3`,v={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,partMask:P|b,query:{sql:E}},{accessToken:L}=w(),[h,F]=f.useState([]),[C,I]=f.useState(),{data:r,error:y}=B(v);return f.useEffect(()=>{(()=>{try{const p=l(i,r),V=l(n,r),x=l(d,r),S=l(s,r),U=l(o,r),N=(r==null?void 0:r.queryResult.queryResults.rows.map(T=>{T.values.some(M=>M===null)&&console.warn("Row has null value(s)");const m=T.values;return{name:m[V],description:m[S],type:m[x],id:m[p],date:m[U]}}))??[];if(y)throw y;if(N.length===0)return;F(N)}catch(p){console.error(p),I(p)}})()},[t,L,r,y,i,n,d,s,o]),C?e(Y,{error:C}):e("div",{className:"FeaturedToolList",children:h.map(a=>e(g,{name:a.name,type:a.type,description:a.description,id:a.id,date:a.date,toolDetailPageURL:c},a.id))})};try{_.displayName="FeaturedToolsList",_.__docgenInfo={description:`Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
'id', 'name', 'type', and 'description'.`,displayName:"FeaturedToolsList",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},idColumnName:{defaultValue:{value:"id"},description:"",name:"idColumnName",required:!1,type:{name:"string"}},nameColumnName:{defaultValue:{value:"name"},description:"",name:"nameColumnName",required:!1,type:{name:"string"}},descriptionColumnName:{defaultValue:{value:"description"},description:"",name:"descriptionColumnName",required:!1,type:{name:"string"}},typeColumnName:{defaultValue:{value:"type"},description:"",name:"typeColumnName",required:!1,type:{name:"string"}},dateColumnName:{defaultValue:{value:"date"},description:"",name:"dateColumnName",required:!1,type:{name:"string"}}}}}catch{}const Ge={title:"Home Page/FeaturedToolsList",component:_},u={args:{entityId:"syn26450069",idColumnName:"resourceId",nameColumnName:"resourceName",descriptionColumnName:"description",typeColumnName:"resourceType",dateColumnName:"dateAdded",toolDetailPageURL:"/Explore/Tools/DetailsPage?Resource_id="}};var D,R,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26450069',
    idColumnName: 'resourceId',
    nameColumnName: 'resourceName',
    descriptionColumnName: 'description',
    typeColumnName: 'resourceType',
    dateColumnName: 'dateAdded',
    toolDetailPageURL: '/Explore/Tools/DetailsPage?Resource_id='
  }
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const He=["Demo"];export{u as Demo,He as __namedExportsOrder,Ge as default};
//# sourceMappingURL=FeaturedToolsList.stories-a8a3742c.js.map