import{j as e}from"./jsx-runtime-670450c2.js";import{E as p}from"./ErrorChip-a5d6eaf3.js";import{_ as A,S as E,j as s}from"./SynapseContext-1b625f19.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Clear-40cc83b8.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-14ca3f03.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-6e189800.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-ef5b8fd1.js";import"./SvgIcon-798376c1.js";import"./ButtonBase-85365024.js";import"./emotion-react.browser.esm-1c93b06f.js";import"./assertThisInitialized-081f9914.js";import"./IconSvg-da01548f.js";import"./Fade-c37d00c6.js";import"./isArray-a82322d9.js";import"./Button-7d415009.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-6db32387.js";import"./FullWidthAlert-a78446f8.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-e7625fe7.js";import"./Typography-ea175c9e.js";import"./IconButton-85dbcd17.js";import"./Link-cd148c3f.js";import"./Button-2bfdfcba.js";const er={title:"Components/ErrorChip",component:p,render:n=>e(A,{children:i=>e(E,{synapseContext:{...i,accessToken:n.isAuthenticated?i.accessToken||"fake token":void 0},children:e(p,{...n})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},l=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:l,isAuthenticated:!0}};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const sr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,sr as __namedExportsOrder,er as default};
//# sourceMappingURL=ErrorChip.stories-8243f6cc.js.map