import{j as o,F as c,a as D}from"./jsx-runtime-095bf462.js";import{r as _}from"./index-8db94870.js";import{T as y}from"./SynapseTableConstants-942d2b0b.js";import{u as N,a as S}from"./SynapseClient-c43c6534.js";import{u as x}from"./useDownloadList-1bef3ea6.js";import{I as E}from"./IconSvg-4b01d7a7.js";import{T}from"./Tooltip-b11baf92.js";import"./_commonjsHelpers-042e6b4d.js";import"./SynapseConstants-1ebc8be6.js";import"./getEndpoint-ac94413e.js";import"./inheritsLoose-c82a83d4.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./Link-50e57cb4.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-2cba4329.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./Typography-b4a6e0b5.js";import"./extendSxProp-a6a93bb0.js";import"./TransitionGroupContext-53ae1513.js";import"./useForkRef-2674f3de.js";import"./Button-5637ed55.js";import"./utils-8d96ae5c.js";import"./useTheme-d9b5c73e.js";import"./Alert-e578e9d5.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./hoist-non-react-statics.cjs-775f1375.js";import"./inputBaseClasses-564a6ee4.js";import"./Fade-2249b304.js";import"./useMutation-424ee4ed.js";import"./useInfiniteQuery-f8eb063d.js";import"./SvgIcon-bc070951.js";import"./createSvgIcon-02cd1a2a.js";import"./ErrorOutlined-fccff164.js";import"./InfoOutlined-d944994d.js";import"./Clear-398befb5.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-c45cae33.js";import"./isHostComponent-73d6e646.js";import"./useControlled-be22aa93.js";import"./useEventCallback-65e61675.js";function i({to:n,className:f=""}){const{accessToken:t}=N(),s=S(),h="Click to view items in your download cart.",{data:e,isLoading:w,isError:m,error:a}=x();if(_.useEffect(()=>{m&&a&&t&&s(a)},[m,a,s,t]),!t||w)return o(c,{});const p=(e==null?void 0:e.totalNumberOfFiles)??0;if(p===0)return o(c,{});const g=o(T,{title:h,placement:"bottom",enterNextDelay:y,children:D("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(E,{icon:"cart"})}),o("span",{className:"download-cart-size",children:p})]})});return o("a",{className:`Download-Link v2 ${f}`,href:n,rel:"noopener noreferrer",children:g})}try{i.displayName="ShowDownloadV2",i.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const go={title:"Download/ShowDownloadV2",component:i},r={args:{to:"/#/Other%20Components?id=downloadcartpage"}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    to: '/#/Other%20Components?id=downloadcartpage'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const Do=["Demo"];export{r as Demo,Do as __namedExportsOrder,go as default};
//# sourceMappingURL=ShowDownloadV2.stories-0032c37e.js.map