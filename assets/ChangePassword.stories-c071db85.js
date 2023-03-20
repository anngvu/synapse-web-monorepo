import{j as o,a}from"./jsx-runtime-670450c2.js";import{r as t}from"./index-f1f749bf.js";import{d as n}from"./ToastMessage-78d533c0.js";import{a9 as b,h as x,ct as F}from"./SynapseContext-e236d752.js";import{F as d}from"./FormGroup-08e5002f.js";import{c,b as l}from"./FormLabel-897d2462.js";import{B as I}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-c1632100.js";import"./Alert-84d62a08.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./index-4d501b15.js";import"./Typography-5bc17eac.js";import"./styled-a7106a93.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./extendSxProp-667aa008.js";import"./Clear-3ac01158.js";import"./useTheme-3634b412.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isArray-5e3f9107.js";import"./isSymbol-7c514724.js";import"./Fade-9c0595ba.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./SvgIcon-139ff9de.js";import"./IconSvg-82bbff7a.js";import"./Box-410a3c10.js";import"./Button-c1d710d9.js";import"./ButtonBase-b022013b.js";import"./emotion-react.browser.esm-2df70300.js";import"./Col-1f1afacc.js";const w=()=>{const{accessToken:s}=b(),[h,_]=t.useState(""),[m,v]=t.useState(""),[u,S]=t.useState(""),[p,g]=t.useState();t.useEffect(()=>{async function r(){const e=await x(s);g(e)}s?r():g(void 0)},[s]);const P=async r=>{r.preventDefault();try{if(m!==u)n("New password and confirm password does not match.","danger");else if(s){const e={newPassword:m,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:p==null?void 0:p.userName,currentPassword:h};await F(e,s).then(()=>n("Successfully changed","success")).catch(N=>n(N.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return o("div",{className:"changePassword",children:a("form",{onSubmit:r=>{P(r)},children:[a(d,{controlId:"oldPassword",children:[o(c,{children:"Current Password"}),o(l,{type:"password",onChange:r=>_(r.target.value),value:h})]}),a(d,{controlId:"newPassword",children:[o(c,{children:"New Password"}),o(l,{type:"password",onChange:r=>v(r.target.value),value:m})]}),a(d,{controlId:"confirmPassword",children:[o(c,{children:"Confirm Password"}),o(l,{type:"password",onChange:r=>S(r.target.value),value:u})]}),o(I,{type:"submit",onSubmit:r=>{P(r)},children:"Change Password"})]})})};try{w.displayName="ChangePassword",w.__docgenInfo={description:"",displayName:"ChangePassword",props:{}}}catch{}const yr={title:"Authentication/ChangePassword",component:w},i={};var f,C,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const _r=["ChangePasswordDemo"];export{i as ChangePasswordDemo,_r as __namedExportsOrder,yr as default};
//# sourceMappingURL=ChangePassword.stories-c071db85.js.map