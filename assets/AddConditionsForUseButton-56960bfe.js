import{a as g,F as A,j as t}from"./jsx-runtime-095bf462.js";import{r as y}from"./index-8db94870.js";import{I}from"./IconSvg-6aae701c.js";import{I as h}from"./ImposeRestrictionDialog-67057f05.js";import{cf as _,bo as b,cg as E}from"./EntityTypeUtils-3faa74f4.js";import"./getEndpoint-ac94413e.js";import{u as L}from"./ConfirmationDialog-6e7c9218.js";import{R}from"./RestrictionInformation-4ed2591e.js";import{B as T}from"./Button-891a522f.js";function a(i){var r;const{entityId:s,onACTMemberClick:c}=i,[d,e]=y.useState(!1),{data:o,isLoading:m}=L(s),{data:n,isLoading:p}=_(),l=m||p,u=(o==null?void 0:o.entity)&&!b(o.entity)&&!E(o.entity),f=o==null?void 0:o.permissions.canChangePermissions,C=((r=o==null?void 0:o.restrictionInformation)==null?void 0:r.restrictionLevel)===R.OPEN;return g(A,{children:[t(h,{open:d,onClose:()=>e(!1),entityId:s}),!l&&C&&u&&(f||n)&&t(T,{onClick:()=>{n?c():e(!0)},startIcon:t(I,{icon:"addConditions",wrap:!1}),children:"Add Conditions for Use"})]})}try{a.displayName="AddConditionsForUseButton",a.__docgenInfo={description:"",displayName:"AddConditionsForUseButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},onACTMemberClick:{defaultValue:null,description:"",name:"onACTMemberClick",required:!0,type:{name:"() => void"}}}}}catch{}export{a as A};
//# sourceMappingURL=AddConditionsForUseButton-56960bfe.js.map
