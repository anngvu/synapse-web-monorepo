import{a as n,j as e}from"./jsx-runtime-095bf462.js";import{I as f}from"./IconSvg-3b8e6785.js";import{u as y,a as A,T as v}from"./TwoFactorEnrollmentForm-e7f78f94.js";import{C as c}from"./ConditionalWrapper-51b8d1ed.js";import{d as w}from"./ToastMessage-91a3bbbf.js";import{B as T}from"./Box-49321e59.js";import{T as r}from"./Typography-d16533eb.js";import{S as s}from"./Skeleton-2bd04c38.js";import{S as F}from"./Stack-c9edc483.js";import{B as d}from"./Button-c45f00b4.js";function u(l){const{onRegenerateBackupCodes:m,onBeginTwoFactorEnrollment:p}=l,{data:o,isLoading:i}=y(),t=(o==null?void 0:o.status)==="ENABLED",{mutate:h,isLoading:g}=A({onSuccess:()=>{w("2FA removed from this account","info")}}),a=i||g;return n(T,{children:[e(r,{variant:"headline2",children:"Two-factor Authentication (2FA)"}),e(c,{condition:a,wrapper:s,children:n(r,{variant:"body1",color:t?"success.main":"error.main",sx:{my:2,display:"flex",alignItems:"center"},children:[e(f,{icon:t?"check":"cross",sx:{mr:1,height:"24px"}}),a?"Loading...":t?"Active":"Inactive"]})}),e(r,{variant:"body1Italic",sx:{my:1},children:"Required to satisfy certain data access requirements, and recommended for overall account security."}),e(r,{variant:"body1",sx:{my:2},children:"Synapse uses a time-based system, which you can set up using an app like Google Authenticator, Duo Mobile, Microsoft Authenticator, or Authy. Certain data may require 2FA to be turned on for your account in order to request access."}),n(F,{direction:"row",gap:1,children:[e(c,{condition:i,wrapper:s,children:n(d,{variant:"outlined",disabled:a,onClick:()=>{t?h():p()},children:[t?"Deactivate":"Activate"," 2FA"]})}),(o==null?void 0:o.status)!=="DISABLED"&&e(c,{condition:i,wrapper:s,children:e(d,{variant:"text",disabled:a,onClick:()=>{m()},children:"Regenerate Backup Codes"})}),e(d,{variant:"text",onClick:()=>window.open(v,"_blank"),children:"More Information"})]})]})}try{u.displayName="TwoFactorAuthSettingsPanel",u.__docgenInfo={description:"",displayName:"TwoFactorAuthSettingsPanel",props:{onRegenerateBackupCodes:{defaultValue:null,description:"",name:"onRegenerateBackupCodes",required:!0,type:{name:"() => void"}},onBeginTwoFactorEnrollment:{defaultValue:null,description:"",name:"onBeginTwoFactorEnrollment",required:!0,type:{name:"() => void"}}}}}catch{}export{u as T};
//# sourceMappingURL=TwoFactorAuthSettingsPanel-b351fced.js.map