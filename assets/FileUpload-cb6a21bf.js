import{a as m,F as y,j as n}from"./jsx-runtime-095bf462.js";import{R as g}from"./index-8db94870.js";import{u as b,bM as k}from"./SynapseClient-af316750.js";import{B as _}from"./Button-eaba334d.js";const r=s=>{const{id:i,buttonProps:c={variant:"contained"},label:p="Browse...",uploadCallback:l}=s,{accessToken:d}=b(),a=g.useRef(null),u=()=>{var e;a!=null&&a.current&&((e=a.current)==null||e.click())},f=async e=>{if(e.target.files&&e.target.files.length>0){const o=e.target.files[0];try{const t=await k(d,o.name,o);l&&l({success:!0,resp:t})}catch(t){console.log("FileUpload: fail to upload file",t),l&&l({success:!1,error:t})}}};return m(y,{children:[n("input",{type:"file",ref:a,onChange:e=>{f(e)},style:{display:"none"}}),n(_,{id:i,onClick:u,...c,children:p})]})};try{r.displayName="FileUpload",r.__docgenInfo={description:"",displayName:"FileUpload",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},uploadCallback:{defaultValue:null,description:"",name:"uploadCallback",required:!1,type:{name:"((response: UploadCallbackResp) => void)"}}}}}catch{}export{r as F};
//# sourceMappingURL=FileUpload-cb6a21bf.js.map