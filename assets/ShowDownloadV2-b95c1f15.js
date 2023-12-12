import{j as e,F as l,a as u}from"./jsx-runtime-095bf462.js";import{r as h}from"./index-8db94870.js";import{T as w}from"./SynapseTableConstants-5f56c39f.js";import{u as y,m as g}from"./SynapseClient-07cb66ce.js";import{u as N}from"./useDownloadList-28d47d08.js";import{I as _}from"./IconSvg-6f6e1e68.js";import{T as D}from"./Tooltip-f72372f7.js";function c({to:a,className:d=""}){const{accessToken:o}=y(),n=g(),m="Click to view items in your download cart.",{data:r,isLoading:p,isError:s,error:t}=N();if(h.useEffect(()=>{s&&t&&o&&n(t)},[s,t,n,o]),!o||p)return e(l,{});const i=(r==null?void 0:r.totalNumberOfFiles)??0;if(i===0)return e(l,{});const f=e(D,{title:m,placement:"bottom",enterNextDelay:w,children:u("span",{children:[e("span",{className:"SRC-primary-text-color",children:e(_,{icon:"cart"})}),e("span",{className:"download-cart-size",children:i})]})});return e("a",{className:`Download-Link v2 ${d}`,href:a,rel:"noopener noreferrer",children:f})}try{c.displayName="ShowDownloadV2",c.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{c as S};
//# sourceMappingURL=ShowDownloadV2-b95c1f15.js.map