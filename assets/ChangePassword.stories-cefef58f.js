import{j as o,a}from"./jsx-runtime-095bf462.js";import{r as e}from"./index-8db94870.js";import{d as i}from"./ToastMessage-86aa22ee.js";import{u as x,S as f}from"./SynapseClient-a4e4b778.js";import{F as d,a as c,b as l}from"./FormLabel-ebef8756.js";import{B as F}from"./Button-879a91fd.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-81b4d296.js";import"./AlertTitle-78f79fc0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-55b76ab0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./createSvgIcon-c95ac3df.js";import"./Paper-18b94b55.js";import"./IconButton-693072d1.js";import"./ButtonBase-808eaa85.js";import"./emotion-react.browser.esm-6281246a.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-2ef1cd4b.js";import"./extendSxProp-a7783ced.js";import"./Stack-eddb74b2.js";import"./Box-402daddb.js";import"./useTheme-c3897ed6.js";import"./Grow-aadb01f1.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-fc362ac6.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-8e07f653.js";import"./Button-79de9a0b.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isArray-5e3f9107.js";import"./isSymbol-7c514724.js";import"./SynapseConstants-b4e8f39a.js";import"./OrientationBanner-f49a763f.js";import"./getEndpoint-ac94413e.js";import"./Link-f298db32.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-8c851187.js";import"./inputBaseClasses-529452bb.js";import"./Fade-fa965c6f.js";import"./ThemeProvider-c7f6a893.js";import"./Col-37033e9f.js";const w=()=>{const{accessToken:t}=x(),[u,_]=e.useState(""),[m,v]=e.useState(""),[h,N]=e.useState(""),[p,g]=e.useState();e.useEffect(()=>{async function r(){const s=await f.getUserProfile(t);g(s)}t?r():g(void 0)},[t]);const P=async r=>{r.preventDefault();try{if(m!==h)i("New password and confirm password does not match.","danger");else if(t){const s={newPassword:m,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:p==null?void 0:p.userName,currentPassword:u};await f.changePasswordWithCurrentPassword(s,t).then(()=>i("Successfully changed","success")).catch(b=>i(b.reason,"danger"))}}catch(s){i(s.reason,"danger")}};return o("div",{className:"changePassword",children:a("form",{onSubmit:r=>{P(r)},children:[a(d,{controlId:"oldPassword",children:[o(c,{children:"Current Password"}),o(l,{type:"password",onChange:r=>_(r.target.value),value:u})]}),a(d,{controlId:"newPassword",children:[o(c,{children:"New Password"}),o(l,{type:"password",onChange:r=>v(r.target.value),value:m})]}),a(d,{controlId:"confirmPassword",children:[o(c,{children:"Confirm Password"}),o(l,{type:"password",onChange:r=>N(r.target.value),value:h})]}),o(F,{type:"submit",onSubmit:r=>{P(r)},children:"Change Password"})]})})};try{w.displayName="ChangePassword",w.__docgenInfo={description:"",displayName:"ChangePassword",props:{}}}catch{}const br={title:"Authentication/ChangePassword",component:w},n={};var C,y,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const xr=["ChangePasswordDemo"];export{n as ChangePasswordDemo,xr as __namedExportsOrder,br as default};
//# sourceMappingURL=ChangePassword.stories-cefef58f.js.map