import{a as m}from"./_commonjsHelpers-042e6b4d.js";import{c as v,d as x,u as q}from"./Clear-a369813f.js";import{t as F,x as h}from"./styled-8837a0b3.js";import{c as C}from"./createChainedFunction-0bab83cf.js";import{d as I,o as P}from"./ownerWindow-2c76219e.js";import{s as E,a as N,u as R}from"./useForkRef-dd8a6e5c.js";import{i as S}from"./isMuiElement-d529b771.js";import{o as j}from"./isHostComponent-fa76b8d9.js";import{u as k,a as V}from"./TransitionGroupContext-a2b6e27b.js";import{b as w,a as M,F as U,j as c}from"./jsx-runtime-ad672792.js";import{r as $}from"./index-f1f749bf.js";import{ah as B,bj as D}from"./SynapseContext-d24812ed.js";import{B as O}from"./Button-e0234af7.js";function T(e,r){return()=>null}function z(e,r){return()=>null}function G(e,r,a,i,n){return null}const H={configure:e=>{F.configure(e)}},A=Object.freeze(Object.defineProperty({__proto__:null,capitalize:h,createChainedFunction:C,createSvgIcon:v,debounce:I,deprecatedPropType:T,isMuiElement:S,ownerDocument:j,ownerWindow:P,requirePropFactory:z,setRef:E,unstable_ClassNameGenerator:H,unstable_useEnhancedEffect:N,unstable_useId:x,unsupportedProp:G,useControlled:q,useEventCallback:k,useForkRef:R,useIsFocusVisible:V},Symbol.toStringTag,{value:"Module"}));var p={},W={get exports(){return p},set exports(e){p=e}};(function(e){function r(a){return a&&a.__esModule?a:{default:a}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(W);var u={};const J=m(A);var f;function ue(){return f||(f=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=J}(u)),u}const ie=m(w),d=e=>{const{id:r,buttonProps:a={variant:"contained"},label:i="Browse...",uploadCallback:n,context:g}=e,{accessToken:_}=B(),o=$.useRef(null),y=()=>{var t;o!=null&&o.current&&((t=o.current)==null||t.click())},b=async t=>{if(t.target.files&&t.target.files.length>0){const l=t.target.files[0];try{const s=await D(_,l.name,l);n==null||n({success:!0,resp:s,context:g})}catch(s){console.log("FileUpload: fail to upload file",s),n==null||n({success:!1,error:s})}}};return M(U,{children:[c("input",{type:"file",ref:o,onChange:t=>{b(t)},style:{display:"none"}}),c(O,{id:r,onClick:y,...a,children:i})]})};try{d.displayName="FileUpload",d.__docgenInfo={description:"",displayName:"FileUpload",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},uploadCallback:{defaultValue:null,description:"",name:"uploadCallback",required:!1,type:{name:"((response: UploadCallbackResp) => void)"}},context:{defaultValue:null,description:"",name:"context",required:!1,type:{name:"any"}}}}}catch{}export{d as F,ie as a,p as i,ue as r};
//# sourceMappingURL=FileUpload-50eca8c7.js.map
