import{j as m}from"./jsx-runtime-095bf462.js";import{l as E}from"./index-7479d659.js";import{M as A}from"./getEndpoint-ac94413e.js";import{T as i}from"./TwoFactorAuthEnabledRequirement-57952dad.js";import{d as F,F as b}from"./SynapseClient-a4e4b778.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./util-441245ad.js";import"./TwoFactorEnrollmentForm-a6a1b5c8.js";import"./LeftRightPanel-ca5e808f.js";import"./Box-402daddb.js";import"./styled-55b76ab0.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./extendSxProp-a7783ced.js";import"./Paper-18b94b55.js";import"./EntityTypeUtils-27ede0a8.js";import"./IsType-3ac804ed.js";import"./OrientationBanner-f49a763f.js";import"./FullWidthAlert-81b4d296.js";import"./AlertTitle-78f79fc0.js";import"./createSvgIcon-c95ac3df.js";import"./IconButton-693072d1.js";import"./ButtonBase-808eaa85.js";import"./emotion-react.browser.esm-6281246a.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-2ef1cd4b.js";import"./Stack-eddb74b2.js";import"./useTheme-c3897ed6.js";import"./Grow-aadb01f1.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-fc362ac6.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-8e07f653.js";import"./Button-79de9a0b.js";import"./TextField-50ff84d4.js";import"./InputLabel-65463e27.js";import"./inputBaseClasses-529452bb.js";import"./ownerWindow-2c76219e.js";import"./isMuiElement-08f54e3c.js";import"./LoadingScreen-1e50bdbe.js";import"./LinearProgress-3ed84810.js";import"./Backdrop-0086dc9a.js";import"./Fade-fa965c6f.js";import"./useMutation-0e9148bd.js";import"./IconSvg-ef9afca2.js";import"./ErrorOutlined-77fe1f54.js";import"./InfoOutlined-c40241a8.js";import"./CheckCircleTwoTone-8c851187.js";import"./DialogTitle-486826aa.js";import"./Modal-99a88e12.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./Link-f298db32.js";import"./Divider-a63231fb.js";import"./dividerClasses-112c5af6.js";import"./RequirementItem-0d0d08c3.js";import"./ConditionalWrapper-51b8d1ed.js";import"./Avatar-98d100a8.js";import"./Skeleton-7e59f3cf.js";import"./SynapseConstants-b4e8f39a.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";const Br={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:i,parameters:{stack:"mock"},render:o=>m(F,{children:e=>m(b,{synapseContext:{...e,accessToken:"fake token"},children:m(i,{...o})})})};function d(o){return[E.rest.get(`${A}/auth/v1/2fa`,async(e,h,p)=>{let f=200,w={status:o?"ENABLED":"DISABLED"};return h(p.status(f),p.json(w))})]}const r={parameters:{msw:{handlers:[d(!0)]}}},t={parameters:{msw:{handlers:[d(!1)]}}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,u,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const Gr=["Enabled","Disabled"];export{t as Disabled,r as Enabled,Gr as __namedExportsOrder,Br as default};
//# sourceMappingURL=TwoFactorAuthEnabledRequirement.stories-1a336ad0.js.map