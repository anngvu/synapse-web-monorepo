import{j as e,F as s,a as o}from"./jsx-runtime-ad672792.js";import{L as S}from"./LeftRightPanel-36807a75.js";import{u as T}from"./useShowDesktop-5e97065b.js";import{u as L,L as g,a as k}from"./LoginFlowBackButton-acb292b2.js";import{T as i}from"./Typography-f5dd8748.js";import{B as a}from"./Box-2e3c1244.js";import{L as R}from"./Link-a8e33667.js";import{S as u}from"./Stack-e5639b81.js";import{s as w}from"./styled-8837a0b3.js";import{u as D}from"./useTheme-c4678cf9.js";import{s as N}from"./StorybookComponentWrapper-bea3a73d.js";import{d as A}from"./ToastMessage-2d5f260a.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Paper-a43bd2f5.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./SynapseContext-d24812ed.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-9d1f6e44.js";import"./SvgIcon-93d86b25.js";import"./IconSvg-d08f7c5f.js";import"./Clear-a369813f.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./Button-e0234af7.js";import"./ButtonBase-26873d31.js";import"./emotion-react.browser.esm-a8a50fc7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./assertThisInitialized-081f9914.js";import"./Button-7d415009.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./useMutation-a65d2b87.js";import"./mutation-378a4eea.js";import"./FullWidthAlert-922261cc.js";import"./TextField-4889884a.js";import"./InputLabel-3d19a161.js";import"./ownerWindow-2c76219e.js";import"./isMuiElement-d529b771.js";import"./index-1aacdabe.js";import"./Popover-1817f0c0.js";import"./Modal-9e0ffea8.js";import"./Fade-04af601d.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./MenuList-5339742f.js";import"./TextField-7043d1f2.js";import"./IconButton-404fc885.js";import"./extendSxProp-a6801df0.js";import"./dayjs.min-e0adaab4.js";import"./FullContextProvider-e78d1110.js";import"./Typography-fd50ec33.js";import"./queryClient-853f336d.js";import"./infiniteQueryBehavior-b4df1474.js";import"./react-router-b06b9355.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";const U=encodeURIComponent("Lost access to my Synapse account"),V=encodeURIComponent("<Please provide your username and/or email address associated with your account.>"),F=`https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=${U}&description=${V}`,c=w(i,{label:"Tagline"})(({theme:t})=>({marginBottom:t.spacing(2),font:"300 24px/34px Lato, sans-serif"}));function x(t){return o(s,{children:[e(i,{...t,children:"Your backup code is a 16 digit code, with groups of 4 letters or numbers separated by hyphens, like this:"}),e(i,{...t,component:"div",variant:"monospace",sx:{my:1,fontSize:"18px"},children:"xxxx-xxxx-xxxx-xxxx"}),o(i,{...t,children:["Each code can only be used once. If you don’t have access to these codes, please"," ",e(R,{href:F,children:"contact us"}),"."]})]})}function l(t){const{ssoRedirectUrl:b,sessionCallback:E}=t,n=T(910),d=D(),{step:r,onStepChange:m,submitUsernameAndPassword:_,submitOneTimePassword:v,errorMessage:I,isLoading:O}=L(E),h=o(u,{alignItems:"stretch",sx:{height:"100%",width:"325px",mx:"auto"},children:[!n&&e(u,{flexDirection:"row",children:e(g,{step:r,onStepChange:m})}),o(a,{sx:{mb:4,textAlign:"center",maxWidth:"90vw"},children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),!n&&e(i,{variant:"body1",align:"center",sx:{my:1},children:"Organize. Get credit. Collaborate."})]}),!n&&r==="VERIFICATION_CODE"&&e(i,{variant:"body1",align:"center",sx:{my:1},children:"Enter the 6-digit, time-based verification code provided by your authenticator app."}),!n&&r==="RECOVERY_CODE"&&e(x,{variant:"body1",align:"center",sx:{my:1}}),e(k,{ssoRedirectUrl:b,step:r,onStepChange:m,submitUsernameAndPassword:_,submitOneTimePassword:v,errorMessage:I,isLoading:O})]});return n?e(S,{leftContent:e(s,{children:o(a,{sx:{py:15,px:8,height:"100%",position:"relative"},children:[e(g,{step:r,onStepChange:m,sx:{position:"absolute",top:d.spacing(2),left:d.spacing(2)}}),h]})}),rightContent:e(a,{sx:{py:15,height:"100%",background:"url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 5px"},children:o(a,{sx:{px:9,color:"#1e4964"},children:[r==="VERIFICATION_CODE"&&o(s,{children:[e(i,{variant:"headline1",sx:{mb:4},children:"Enter your verification code"}),e(i,{variant:"headline2",sx:{lineHeight:"30px"},children:"Enter the 6-digit, time-based verification code provided by your authenticator app."})]}),r==="RECOVERY_CODE"&&o(s,{children:[e(i,{variant:"headline1",sx:{mb:4},children:"Enter your backup code"}),e(x,{variant:"body1",sx:{fontSize:"18px",lineHeight:"30px"}})]}),r!=="VERIFICATION_CODE"&&r!=="RECOVERY_CODE"&&o(s,{children:[o(c,{variant:"headline2",children:[e("strong",{children:"Organize"})," your digital research assets."]}),o(c,{variant:"headline2",children:[e("strong",{children:"Get credit"})," for your research."]}),o(c,{variant:"headline2",children:[e("strong",{children:"Collaborate"})," with your colleagues and the public."]})]})]})})}):e(a,{sx:{px:0,py:12,height:"95vh",background:"#fff url('https://s3.amazonaws.com/static.synapse.org/images/SynapseMobileLogInFull.svg') 50% 50%",backgroundSize:"contain"},children:h})}try{l.displayName="LoginPage",l.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}}}catch{}const Ze={title:"Authentication/LoginPage",component:l},p={args:{sessionCallback:()=>{N().then(({profile:t})=>{A(`You are currently logged in as ${t.userName}`,"info",{autoCloseInMs:5e3})})}}};var y,f,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      sessionChangeHandler().then(({
        profile
      }) => {
        displayToast(\`You are currently logged in as \${profile.userName}\`, 'info', {
          autoCloseInMs: 5000
        });
      });
    }
  }
}`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const eo=["Demo"];export{p as Demo,eo as __namedExportsOrder,Ze as default};
//# sourceMappingURL=LoginPage.stories-3cc58459.js.map
