import{a as g,F as A,j as o}from"./jsx-runtime-095bf462.js";import{r as y}from"./index-8db94870.js";import{I}from"./IconSvg-90b7b72f.js";import{I as h}from"./ImposeRestrictionDialog-512e4cbf.js";import{ch as _,bs as b,ci as E}from"./EntityTypeUtils-1e303662.js";import"./getEndpoint-ac94413e.js";import{u as L}from"./ConfirmationDialog-c823cd36.js";import{R}from"./RestrictionInformation-4ed2591e.js";import{B as T}from"./Button-891a522f.js";function a(i){var r;const{entityId:s,onACTMemberClick:c}=i,[d,e]=y.useState(!1),{data:t,isLoading:m}=L(s),{data:n,isLoading:p}=_(),l=m||p,u=(t==null?void 0:t.entity)&&!b(t.entity)&&!E(t.entity),f=t==null?void 0:t.permissions.canChangePermissions,C=((r=t==null?void 0:t.restrictionInformation)==null?void 0:r.restrictionLevel)===R.OPEN;return g(A,{children:[o(h,{open:d,onClose:()=>e(!1),entityId:s}),!l&&C&&u&&(f||n)&&o(T,{onClick:()=>{n?c():e(!0)},startIcon:o(I,{icon:"addConditions",wrap:!1}),children:"Add Conditions for Use"})]})}try{a.displayName="AddConditionsForUseButton",a.__docgenInfo={description:"",displayName:"AddConditionsForUseButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},onACTMemberClick:{defaultValue:null,description:"",name:"onACTMemberClick",required:!0,type:{name:"() => void"}}}}}catch{}export{a as A};
//# sourceMappingURL=AddConditionsForUseButton-324ea178.js.map