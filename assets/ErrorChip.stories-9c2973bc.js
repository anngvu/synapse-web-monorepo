import{j as e}from"./jsx-runtime-670450c2.js";import{E as p}from"./ErrorChip-72c19f44.js";import{_ as A,S as E,j as s}from"./SynapseContext-3921ef89.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Clear-16219090.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-42ab246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-dfe229ea.js";import"./isHostComponent-fa76b8d9.js";import"./index-96c5f47c.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./Transition-550b3899.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./SvgIcon-74ace867.js";import"./ButtonBase-4a394d72.js";import"./emotion-react.browser.esm-e553699c.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-ea317e27.js";import"./IconSvg-bec9c070.js";import"./Fade-49f10167.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./Box-b7ffd230.js";import"./extendSxProp-63b32eb6.js";import"./Button-86068eae.js";import"./Button-7d415009.js";import"./Alert-4131c431.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-95211f4d.js";import"./index-4d501b15.js";const nr={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},l=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:l,isAuthenticated:!0}};var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const pr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,pr as __namedExportsOrder,nr as default};
//# sourceMappingURL=ErrorChip.stories-9c2973bc.js.map
