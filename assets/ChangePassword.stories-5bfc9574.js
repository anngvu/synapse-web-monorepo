import{j as o,a}from"./jsx-runtime-670450c2.js";import{r as t}from"./index-f1f749bf.js";import{d as n}from"./ToastMessage-f34af748.js";import{a4 as b,co as d,e as x,cp as I}from"./SynapseContext-ee41ea54.js";import{c,b as l}from"./isArray-a82322d9.js";import{B as j}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-ca15609f.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3f5fe1df.js";import"./useTheme-860bf3dd.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./styled-692f7acd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./index-4d501b15.js";import"./Typography-641a9a3f.js";import"./Clear-fa5d240c.js";import"./useIsFocusVisible-c754a498.js";import"./SvgIcon-11a58ea3.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./Fade-65d0b271.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-1d990fee.js";import"./IconButton-e44040a1.js";import"./ButtonBase-8f10ace8.js";import"./emotion-react.browser.esm-5ef5dfb7.js";import"./Link-3a86b878.js";import"./Button-ec3f5b60.js";import"./SynapseConstants-6db32387.js";const w=()=>{const{accessToken:s}=b(),[u,_]=t.useState(""),[m,v]=t.useState(""),[h,S]=t.useState(""),[p,g]=t.useState();t.useEffect(()=>{async function r(){const e=await x(s);g(e)}s?r():g(void 0)},[s]);const P=async r=>{r.preventDefault();try{if(m!==h)n("New password and confirm password does not match.","danger");else if(s){const e={newPassword:m,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:p==null?void 0:p.userName,currentPassword:u};await I(e,s).then(()=>n("Successfully changed","success")).catch(N=>n(N.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return o("div",{className:"changePassword",children:a("form",{onSubmit:r=>{P(r)},children:[a(d,{controlId:"oldPassword",children:[o(c,{children:"Current Password"}),o(l,{type:"password",onChange:r=>_(r.target.value),value:u})]}),a(d,{controlId:"newPassword",children:[o(c,{children:"New Password"}),o(l,{type:"password",onChange:r=>v(r.target.value),value:m})]}),a(d,{controlId:"confirmPassword",children:[o(c,{children:"Confirm Password"}),o(l,{type:"password",onChange:r=>S(r.target.value),value:h})]}),o(j,{type:"submit",onSubmit:r=>{P(r)},children:"Change Password"})]})})};try{w.displayName="ChangePassword",w.__docgenInfo={description:"",displayName:"ChangePassword",props:{}}}catch{}const hr={title:"Authentication/ChangePassword",component:w},i={};var f,C,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const gr=["ChangePasswordDemo"];export{i as ChangePasswordDemo,gr as __namedExportsOrder,hr as default};
//# sourceMappingURL=ChangePassword.stories-5bfc9574.js.map