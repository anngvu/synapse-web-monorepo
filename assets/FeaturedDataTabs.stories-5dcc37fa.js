import{j as e,a as d,F as I}from"./jsx-runtime-095bf462.js";import{r as f}from"./index-8db94870.js";import{q as L,r as U,p as w,j,o as K}from"./SynapseConstants-06779f3a.js";import{u as Y}from"./EntityTypeUtils-2e4d4a81.js";import"./getEndpoint-ac94413e.js";import{p as k}from"./sqlFunctions-d95c3fbf.js";import{u as G,b as Z,o as ee,p as te,q as ae,r as re,n as J,e as H,l as $}from"./FacetNav-ee14352a.js";import{c as se,P as oe}from"./factory-51364b46.js";import{r as ne}from"./react-sizeme-0d7fb727.js";import{g as ie}from"./ColorGradient-fc5a110b.js";import{l as le}from"./LoadingScreen-b6c0f620.js";import{S as de,I as ce}from"./ElementWithTooltip-2d145823.js";import{L as ue}from"./Link-2921f78c.js";import{B as me}from"./Button-5637ed55.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-c82a83d4.js";import"./isArray-5e3f9107.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./SvgIcon-4c933a0b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-f64e11ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./IconSvg-6ba2e879.js";import"./Tooltip-d0fc02c5.js";import"./useTheme-14d0ce71.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./TransitionGroupContext-0df7f063.js";import"./Clear-72bafe95.js";import"./Box-13f1aabd.js";import"./extendSxProp-29a14132.js";import"./Button-891a522f.js";import"./ButtonBase-4f599170.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./assertThisInitialized-081f9914.js";import"./Alert-57f06f06.js";import"./hook-f132a7c0.js";import"./createWithBsPrefix-57e9f06a.js";import"./divWithClassName-ac73dc31.js";import"./index-58d3fd43.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-49e13051.js";import"./queryUtils-4a6e4832.js";import"./cloneDeep-f1183ca6.js";import"./_baseClone-206cc617.js";import"./_Uint8Array-2ff739b2.js";import"./_MapCache-56fce68f.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./use-deep-compare-effect.esm-cb3aaa60.js";import"./index-5d0cf067.js";import"./NoSearchResults-460db635.js";import"./NoData-59ea70fa.js";import"./unCamelCase-ec1c2b3d.js";import"./ColumnType-5116adf5.js";import"./useEntity-10afbd15.js";import"./useMutation-84470403.js";import"./mutation-d407287d.js";import"./useInfiniteQuery-4cc5d26b.js";import"./infiniteQueryBehavior-ec539414.js";import"./pick-955224da.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./hasIn-9b7bfdc3.js";import"./_baseSlice-cf92e063.js";import"./useGetQueryResultBundle-e261ccc2.js";import"./merge-e7c8ff8b.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-454d4924.js";import"./_baseRest-0daef1f4.js";import"./_isIterateeCall-8eabee9c.js";import"./isEqual-19520743.js";import"./_baseIsEqual-c2ebfcb7.js";import"./_cacheHas-812f5171.js";import"./_setToArray-3d6ec6fd.js";import"./useGetInfoFromIds-29a0b687.js";import"./uniq-6ee225a2.js";import"./toInteger-97973f8e.js";import"./without-8da9b9e0.js";import"./uniqueId-4d05949d.js";import"./RadioGroup-bf0fed90.js";import"./dayjs.min-8d4ef725.js";import"./RangeSlider-506c11be.js";import"./Typography-0933b2f6.js";import"./Skeleton-3aad52b9.js";import"./Stack-98e16f53.js";import"./SelectionCriteriaPill-93800590.js";import"./Close-336bf9d0.js";import"./colorPalette-43310703.js";import"./contains-868734fe.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./SynapseTableConstants-942d2b0b.js";const pe=se(oe),ye={showlegend:!1,annotations:[],margin:{l:0,r:0,b:0,t:0,pad:0},yaxis:{visible:!1,showgrid:!1},xaxis:{visible:!1,showgrid:!1}},F=({title:t,description:s,facetsToPlot:r,detailsPagePath:l})=>{const{accessToken:c}=Y(),{data:a,isLoadingNewBundle:i}=G(),{getColumnDisplayName:m,rgbIndex:y}=Z(),[p,x]=f.useState([]),[S,z]=f.useState([]),[b,X]=f.useState(""),{colorPalette:W}=ie(y??0,2);if(f.useEffect(()=>{var P;if(!(!r||!a)){const h=n=>{var u,g;return(g=(u=a==null?void 0:a.columnModels)==null?void 0:u.find(E=>E.name===n.columnName))==null?void 0:g.columnType},_=ee(a,r);z(_),Promise.all(_.map(async(n,u)=>await te(n,h(n),u+1,"PIE",c))).then(n=>x(n));const o=(P=a==null?void 0:a.facets)==null?void 0:P.map(n=>{const u=n.facetValues;if(u){const g=u.filter(E=>E.isSelected);return g.length>0?g[0]:void 0}else return}).filter(n=>n!==void 0)[0];o&&o.value&&X(o==null?void 0:o.value)}},[r,a]),i||!p||!S||S.length===0)return e("div",{className:"FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn",children:le});{let P=e(I,{});l&&b&&(P=e("div",{children:d(ue,{href:l,children:["Explore ",b]})}));const h=p.length>1,_=t??(h?b:m(S[0].columnName));return d("div",{className:"FacetPlotsCard cardContainer",children:[d("div",{className:"FacetPlotsCard__titlebar",style:{backgroundColor:W[0].replace(")",",.05)")},children:[e("span",{className:"FacetPlotsCard__title",children:_}),s&&e("span",{className:"FacetPlotsCard__description",children:e(de,{summary:s,maxCharacterCount:200})}),P,i&&e("span",{style:{marginLeft:"2px"},className:"spinner"})]}),e("div",{className:"FacetPlotsCard__body",children:p.map((o,n)=>d("div",{children:[n!==0&&e("hr",{}),h&&e("div",{className:"FacetPlotsCard__body__facetname",children:e("span",{children:m(S[n].columnName)})}),d("div",{className:"FacetPlotsCard__body__row",children:[e(ne.SizeMe,{monitorHeight:!0,children:({size:u})=>e("div",{className:"FacetPlotsCard__body__plot",children:e(pe,{layout:ye,data:(o==null?void 0:o.data)??[],style:ae(u.width,"PIE",150),config:{displayModeBar:!1}},`${r[n]}-${u.width}`)})}),e("div",{className:"FacetPlotsCard__body__legend",children:e(re,{labels:o==null?void 0:o.labels,colors:o==null?void 0:o.colors,isExpanded:!1})})]})]},n))})]})}};try{F.displayName="FacetPlotsCard",F.__docgenInfo={description:"",displayName:"FacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!1,type:{name:"string"}}}}}catch{}function ge(t,s,r){return{entityId:k(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:L|U|w|j,query:{sql:t,offset:0,limit:K,selectedFacets:[{columnName:s,facetValues:[r],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]}}}const N=t=>{const{title:s,description:r,sql:l,facetsToPlot:c,rgbIndex:a,selectFacetColumnName:i,selectFacetColumnValue:m,detailsPagePath:y,...p}=t,x=ge(l,i,m);return e("div",{className:"QueryPerFacetPlotsCard",children:e(J,{...p,initQueryRequest:x,children:d(H,{rgbIndex:a,...p,children:[e($,{}),e(F,{title:s,description:r,facetsToPlot:c,detailsPagePath:y})]})})})};try{N.displayName="QueryPerFacetPlotsCard",N.__docgenInfo={description:"",displayName:"QueryPerFacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},selectFacetColumnName:{defaultValue:null,description:"",name:"selectFacetColumnName",required:!0,type:{name:"string"}},selectFacetColumnValue:{defaultValue:null,description:"",name:"selectFacetColumnValue",required:!0,type:{name:"string"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!0,type:{name:"string"}}}}}catch{}function q(t){return{entityId:k(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:L|U|w|j,query:{sql:t,offset:0,limit:1}}}const A=t=>{const{sql:s,facetsToPlot:r,rgbIndex:l,columnAliases:c}=t,a=q(s);return e("div",{className:"SingleQueryFacetPlotsCards",children:e(J,{initQueryRequest:a,children:d(H,{rgbIndex:l,columnAliases:c,children:[e($,{}),r==null?void 0:r.map(i=>e(F,{facetsToPlot:[i]},`FacetPlotCard-${i}`))]})})})};try{q.displayName="getQueryRequest",q.__docgenInfo={description:"",displayName:"getQueryRequest",props:{}}}catch{}try{A.displayName="SingleQueryFacetPlotsCards",A.__docgenInfo={description:"",displayName:"SingleQueryFacetPlotsCards",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},columnAliases:{defaultValue:null,description:"",name:"columnAliases",required:!1,type:{name:"Record<string, string>"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}}}}}catch{}const M=t=>{const{configs:s,rgbIndex:r,sql:l}=t,c=s[0].selectFacetColumnName;return e("div",{className:`FeaturedDataPlots${c?"__queryPerCard":"__singleQuery"}`,children:s.map(a=>d(I,{children:[c&&e(N,{...a,rgbIndex:r,sql:l}),!c&&e(A,{...a,rgbIndex:r,sql:l})]}))})};try{M.displayName="FeaturedDataPlots",M.__docgenInfo={description:"",displayName:"FeaturedDataPlots",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"QueryFacetPlotsCardsProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},explorePagePath:{defaultValue:null,description:"",name:"explorePagePath",required:!1,type:{name:"string"}}}}}catch{}const V=t=>{const[s,r]=f.useState(0),{configs:l,rgbIndex:c,sql:a}=t,i=l[s];return d("div",{className:"FeaturedDataTabs",children:[e("div",{className:"FeaturedDataTabs__tabs",children:l.map((m,y)=>e("div",{className:`FeaturedDataTabs__tabs__tab ${y===s?"FeaturedDataTabs__tabs__tab__selected":""}`,children:d("button",{className:"SRC-centerAndJustifyContent",onClick:()=>r(y),children:[m.icon&&e(ce,{type:m.icon}),e("span",{children:m.title})]})},m.title))}),i&&d(I,{children:[e(M,{...i.plotsConfig,rgbIndex:c,sql:a,explorePagePath:i.explorePagePath},`${a}-${s}`),i.explorePagePath&&e("div",{className:"bootstrap-4-backport FeaturedDataTabs__explore-all",children:d(me,{variant:"secondary",size:"lg",href:i.explorePagePath,children:["View All ",i.exploreObjectType]})})]})]})};try{V.displayName="FeaturedDataTabs",V.__docgenInfo={description:"",displayName:"FeaturedDataTabs",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"FeatureDataTabProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}}}}}catch{}const aa={title:"Home Page/FeaturedDataTabs",component:V},C={args:{rgbIndex:1,sql:"SELECT * FROM syn21994974",configs:[{title:"Studies",icon:"chart2",explorePagePath:"/Explore/Studies",exploreObjectType:"Studies",plotsConfig:{sql:`SELECT * FROM syn21994974 WHERE ( ( "collectionType" = 'Validation Study' OR "collectionType" = 'Interventional Study' OR "collectionType" = 'Observational Study' ) )`,configs:[{facetsToPlot:["dataCollectionMethod","deviceType","devicePlatform","diagnosis","reportedOutcome","digitalAssessmentCategory"]}]}}]}},T={args:{rgbIndex:1,sql:"select * from syn11346063",configs:[{title:"Human Studies",icon:"PERSON",explorePagePath:"/Explore/HumanStudies",exploreObjectType:"Studies",plotsConfig:{configs:[{title:"The Religious Orders and Memory and Aging Project Study",description:"This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"ROSMAP",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3219045"},{title:"The Mount Sinai Brain Bank Study",description:"This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"MSBB",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3159438"},{title:"The RNAseq Harmonization Study",description:"The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"rnaSeqReprocessing",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn5550404"}]}},{title:"Animal Model Studies",icon:"MOUSE",plotsConfig:{configs:[{title:"The UCI MODEL-AD 5XFAD Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"UCI_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn16798076"},{title:"The IU/Jax/Pitt MODEL-AD Primary Screen Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_PrimaryScreen",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn21595258"},{title:"The IU/Jax/Pit MODEL-AD APOE/TREM2 Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn17095980"}]}}]}};var R,D,O;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    rgbIndex: 1,
    sql: 'SELECT * FROM syn21994974',
    configs: [{
      title: 'Studies',
      icon: 'chart2',
      explorePagePath: '/Explore/Studies',
      exploreObjectType: 'Studies',
      plotsConfig: {
        sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \\'Validation Study\\' OR "collectionType" = \\'Interventional Study\\' OR "collectionType" = \\'Observational Study\\' ) )',
        configs: [{
          facetsToPlot: ['dataCollectionMethod', 'deviceType', 'devicePlatform', 'diagnosis', 'reportedOutcome', 'digitalAssessmentCategory']
        }]
      }
    }]
  }
}`,...(O=(D=C.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var v,Q,B;T.parameters={...T.parameters,docs:{...(v=T.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rgbIndex: 1,
    sql: 'select * from syn11346063',
    configs: [{
      title: 'Human Studies',
      icon: 'PERSON',
      explorePagePath: '/Explore/HumanStudies',
      exploreObjectType: 'Studies',
      plotsConfig: {
        configs: [{
          title: 'The Religious Orders and Memory and Aging Project Study',
          description: 'This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'ROSMAP',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3219045'
        }, {
          title: 'The Mount Sinai Brain Bank Study',
          description: 'This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'MSBB',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3159438'
        }, {
          title: 'The RNAseq Harmonization Study',
          description: 'The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'rnaSeqReprocessing',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn5550404'
        }]
      }
    }, {
      title: 'Animal Model Studies',
      icon: 'MOUSE',
      // explorePagePath:'/Explore/AnimalStudies',
      // exploreObjectType:'Studies',
      plotsConfig: {
        configs: [{
          title: 'The UCI MODEL-AD 5XFAD Study',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'UCI_5XFAD',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn16798076'
        }, {
          title: 'The IU/Jax/Pitt MODEL-AD Primary Screen Study',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'Jax.IU.Pitt_PrimaryScreen',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn21595258'
        }, {
          title: 'The IU/Jax/Pit MODEL-AD APOE/TREM2 Study',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'Jax.IU.Pitt_5XFAD',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn17095980'
        }]
      }
    }]
  }
}`,...(B=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:B.source}}};const ra=["SingleQuery","QueryPerCard"];export{T as QueryPerCard,C as SingleQuery,ra as __namedExportsOrder,aa as default};
//# sourceMappingURL=FeaturedDataTabs.stories-5dcc37fa.js.map
