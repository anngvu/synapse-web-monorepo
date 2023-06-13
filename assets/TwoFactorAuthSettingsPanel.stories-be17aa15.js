import{a as n,j as o}from"./jsx-runtime-095bf462.js";import{d as u}from"./ToastMessage-c60353c5.js";import{I as v}from"./IconSvg-a7846a87.js";import{u as B,a as F,T as k}from"./TwoFactorEnrollmentForm-cd5b0483.js";import{C as s}from"./ConditionalWrapper-51b8d1ed.js";import{B as x}from"./Box-ef0af35d.js";import{T as a}from"./Typography-bbc222e1.js";import{S as d}from"./Skeleton-79583c46.js";import{S}from"./Stack-fc7a4170.js";import{B as l}from"./Button-6910d769.js";import{P as C}from"./Paper-c5bb6f3a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-ac112c77.js";import"./AlertTitle-1c4986af.js";import"./styled-0d0c058b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./createSvgIcon-c04c1e3c.js";import"./IconButton-055a3ecb.js";import"./ButtonBase-89336bd6.js";import"./emotion-react.browser.esm-a1e35fdb.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./useTheme-48a0a3fd.js";import"./Grow-abebdd1c.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-a7612588.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-ada0ed7d.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isArray-5e3f9107.js";import"./isSymbol-7c514724.js";import"./ErrorOutlined-81a5221b.js";import"./InfoOutlined-1e8e00a7.js";import"./CheckCircleTwoTone-a72e35ba.js";import"./LeftRightPanel-91167215.js";import"./SynapseClient-8e79bfab.js";import"./SynapseConstants-fca8ab5f.js";import"./OrientationBanner-ec8fcbed.js";import"./getEndpoint-ac94413e.js";import"./Link-c55ec6e2.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./inputBaseClasses-2d1e355f.js";import"./Fade-8ab202b4.js";import"./EntityTypeUtils-ae66587c.js";import"./IsType-b012064f.js";import"./TextField-b3bab9ad.js";import"./InputLabel-a4beb275.js";import"./ownerWindow-2c76219e.js";import"./isMuiElement-08f54e3c.js";import"./LoadingScreen-5d3f898f.js";import"./LinearProgress-8f888fd4.js";import"./Backdrop-85605ced.js";import"./useMutation-7b1b4b62.js";import"./DialogTitle-55875a60.js";import"./Modal-1e12e009.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./Divider-ac94dde5.js";import"./dividerClasses-a42a4a88.js";import"./extendSxProp-32377841.js";function m(e){const{onRegenerateBackupCodes:w,onBeginTwoFactorEnrollment:y}=e,{data:t,isLoading:c}=B(),r=(t==null?void 0:t.status)==="ENABLED",{mutate:A,isLoading:T}=F({onSuccess:()=>{u("2FA removed from this account","info")}}),i=c||T;return n(x,{children:[o(a,{variant:"headline2",children:"Two-factor Authentication (2FA)"}),o(s,{condition:i,wrapper:d,children:n(a,{variant:"body1",color:r?"success.main":"error.main",sx:{my:2,display:"flex",alignItems:"center"},children:[o(v,{icon:r?"check":"cross",sx:{mr:1,height:"24px"}}),i?"Loading...":r?"Active":"Inactive"]})}),o(a,{variant:"body1Italic",sx:{my:1},children:"Required to satisfy certain data access requirements, and recommended for overall account security."}),o(a,{variant:"body1",sx:{my:2},children:"Synapse uses a time-based system, which you can set up using an app like Google Authenticator, Duo Mobile, Microsoft Authenticator, or Authy. Certain data may require 2FA to be turned on for your account in order to request access."}),n(S,{direction:"row",gap:1,children:[o(s,{condition:c,wrapper:d,children:n(l,{variant:"outlined",disabled:i,onClick:()=>{r?A():y()},children:[r?"Deactivate":"Activate"," 2FA"]})}),(t==null?void 0:t.status)!=="DISABLED"&&o(s,{condition:c,wrapper:d,children:o(l,{variant:"text",disabled:i,onClick:()=>{w()},children:"Regenerate Backup Codes"})}),o(l,{variant:"text",onClick:()=>window.open(k,"_blank"),children:"More Information"})]})]})}try{m.displayName="TwoFactorAuthSettingsPanel",m.__docgenInfo={description:"",displayName:"TwoFactorAuthSettingsPanel",props:{onRegenerateBackupCodes:{defaultValue:null,description:"",name:"onRegenerateBackupCodes",required:!0,type:{name:"() => void"}},onBeginTwoFactorEnrollment:{defaultValue:null,description:"",name:"onBeginTwoFactorEnrollment",required:!0,type:{name:"() => void"}}}}}catch{}const Wo={title:"Authentication/TwoFactorSettingsPanel",component:m,render:e=>o(C,{sx:{p:7,mx:"auto",width:"720px"},children:o(m,{...e})})},p={args:{onBeginTwoFactorEnrollment:()=>{u("In-app, you would now redirect to the two-factor enrollment page","info")},onRegenerateBackupCodes:()=>{u("In-app, you would now redirect to the backup codes page","info")}}};var g,h,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onBeginTwoFactorEnrollment: () => {
      displayToast('In-app, you would now redirect to the two-factor enrollment page', 'info');
    },
    onRegenerateBackupCodes: () => {
      displayToast('In-app, you would now redirect to the backup codes page', 'info');
    }
  }
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Ko=["Demo"];export{p as Demo,Ko as __namedExportsOrder,Wo as default};
//# sourceMappingURL=TwoFactorAuthSettingsPanel.stories-be17aa15.js.map