import{j as m}from"./jsx-runtime-095bf462.js";import{l as w}from"./index-7c33d086.js";import{M as E}from"./getEndpoint-ac94413e.js";import{T as i}from"./TwoFactorAuthEnabledRequirement-c04ee3f2.js";import{S as A,F}from"./SynapseClient-9e187ec0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./util-f846e4fa.js";import"./TwoFactorEnrollmentForm-e7f78f94.js";import"./LeftRightPanel-908871dc.js";import"./Box-49321e59.js";import"./styled-9c91c4fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./extendSxProp-e5d44a75.js";import"./Paper-88da9df3.js";import"./OrientationBanner-7886af1c.js";import"./FullWidthAlert-918940ef.js";import"./AlertTitle-af39c120.js";import"./createSvgIcon-fd8a55dc.js";import"./IconButton-152addcf.js";import"./ButtonBase-7c3b1b89.js";import"./emotion-react.browser.esm-8f02f344.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-d16533eb.js";import"./Stack-c9edc483.js";import"./useTheme-68d5aa8d.js";import"./Grow-adae5ed8.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-87fd7144.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-39e0afa2.js";import"./Button-c45f00b4.js";import"./TextField-d8035ef7.js";import"./StyledFormControl-80c3c2db.js";import"./InputLabel-b63da0ce.js";import"./inputBaseClasses-f05f2ac2.js";import"./ownerWindow-2c76219e.js";import"./isMuiElement-08f54e3c.js";import"./LoadingScreen-a23a06c8.js";import"./Backdrop-7ef683b4.js";import"./Fade-26b5aaed.js";import"./LinearProgress-f638b645.js";import"./useMutation-6e94174b.js";import"./IconSvg-3b8e6785.js";import"./ErrorOutlined-dd0fb706.js";import"./GetAppTwoTone-325427e5.js";import"./InfoOutlined-3b5cb253.js";import"./CheckCircleTwoTone-784a445a.js";import"./Dialog-b154ee51.js";import"./Modal-5d1d85a5.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./DialogTitle-0b7c1528.js";import"./Link-fc5d7a73.js";import"./Divider-c7474078.js";import"./dividerClasses-94cb8e7e.js";import"./RequirementItem-724a29d5.js";import"./ConditionalWrapper-51b8d1ed.js";import"./Avatar-281ced81.js";import"./Skeleton-2bd04c38.js";import"./CheckTwoTone-8be00e66.js";import"./SynapseConstants-c9342f94.js";import"./_getTag-39555acc.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";const Mr={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:i,parameters:{stack:"mock"},render:o=>m(A,{children:e=>m(F,{synapseContext:{...e,accessToken:"fake token"},children:m(i,{...o})})})};function l(o){return[w.rest.get(`${E}/auth/v1/2fa`,async(e,h,p)=>{const f={status:o?"ENABLED":"DISABLED"};return h(p.status(200),p.json(f))})]}const r={parameters:{msw:{handlers:[l(!0)]}}},t={parameters:{msw:{handlers:[l(!1)]}}};var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Nr=["Enabled","Disabled"];export{t as Disabled,r as Enabled,Nr as __namedExportsOrder,Mr as default};
//# sourceMappingURL=TwoFactorAuthEnabledRequirement.stories-a2598c7b.js.map