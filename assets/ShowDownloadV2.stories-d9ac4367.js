import{j as o,F as c,a as D}from"./jsx-runtime-095bf462.js";import{r as _}from"./index-8db94870.js";import{T as y}from"./SynapseTableConstants-942d2b0b.js";import{u as N,a as S}from"./SynapseClient-a4e4b778.js";import{u as x}from"./useDownloadList-43d46c78.js";import{I as E}from"./IconSvg-ef9afca2.js";import{T}from"./Tooltip-8e07f653.js";import"./_commonjsHelpers-042e6b4d.js";import"./SynapseConstants-b4e8f39a.js";import"./OrientationBanner-f49a763f.js";import"./FullWidthAlert-81b4d296.js";import"./AlertTitle-78f79fc0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-55b76ab0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./createSvgIcon-c95ac3df.js";import"./Paper-18b94b55.js";import"./IconButton-693072d1.js";import"./ButtonBase-808eaa85.js";import"./emotion-react.browser.esm-6281246a.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-2ef1cd4b.js";import"./extendSxProp-a7783ced.js";import"./Stack-eddb74b2.js";import"./Box-402daddb.js";import"./useTheme-c3897ed6.js";import"./Grow-aadb01f1.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-fc362ac6.js";import"./ClickAwayListener-36b79525.js";import"./Button-79de9a0b.js";import"./getEndpoint-ac94413e.js";import"./Link-f298db32.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-8c851187.js";import"./inputBaseClasses-529452bb.js";import"./Fade-fa965c6f.js";import"./useMutation-0e9148bd.js";import"./useInfiniteQuery-9947b096.js";import"./ErrorOutlined-77fe1f54.js";import"./InfoOutlined-c40241a8.js";function a({to:m,className:f=""}){const{accessToken:t}=N(),n=S(),h="Click to view items in your download cart.",{data:e,isLoading:w,isError:p,error:i}=x();if(_.useEffect(()=>{p&&i&&t&&n(i)},[p,i,n,t]),!t||w)return o(c,{});const s=(e==null?void 0:e.totalNumberOfFiles)??0;if(s===0)return o(c,{});const g=o(T,{title:h,placement:"bottom",enterNextDelay:y,children:D("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(E,{icon:"cart"})}),o("span",{className:"download-cart-size",children:s})]})});return o("a",{className:`Download-Link v2 ${f}`,href:m,rel:"noopener noreferrer",children:g})}try{a.displayName="ShowDownloadV2",a.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const So={title:"Download/ShowDownloadV2",component:a},r={args:{to:"/#/Other%20Components?id=downloadcartpage"}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    to: '/#/Other%20Components?id=downloadcartpage'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const xo=["Demo"];export{r as Demo,xo as __namedExportsOrder,So as default};
//# sourceMappingURL=ShowDownloadV2.stories-d9ac4367.js.map