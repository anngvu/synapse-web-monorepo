import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-ba585d89.js";import{d as A,F as E,n as s}from"./SynapseClient-a4e4b778.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-8e07f653.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-55b76ab0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./useTheme-c3897ed6.js";import"./Grow-aadb01f1.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-fc362ac6.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-c95ac3df.js";import"./ButtonBase-808eaa85.js";import"./emotion-react.browser.esm-6281246a.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-98d100a8.js";import"./ErrorOutlined-77fe1f54.js";import"./SynapseConstants-b4e8f39a.js";import"./OrientationBanner-f49a763f.js";import"./FullWidthAlert-81b4d296.js";import"./AlertTitle-78f79fc0.js";import"./Paper-18b94b55.js";import"./IconButton-693072d1.js";import"./Typography-2ef1cd4b.js";import"./extendSxProp-a7783ced.js";import"./Stack-eddb74b2.js";import"./Box-402daddb.js";import"./ClickAwayListener-36b79525.js";import"./Button-79de9a0b.js";import"./getEndpoint-ac94413e.js";import"./Link-f298db32.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-8c851187.js";import"./inputBaseClasses-529452bb.js";import"./Fade-fa965c6f.js";const hr={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,l,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const gr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,gr as __namedExportsOrder,hr as default};
//# sourceMappingURL=ErrorChip.stories-9d05265e.js.map