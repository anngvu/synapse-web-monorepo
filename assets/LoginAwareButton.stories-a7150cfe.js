import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-6562a7f8.js";import{L as i}from"./LoginAwareButton-ff8824e4.js";import{S as u,a as f}from"./SynapseClient-c9b3409f.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-0d22bf03.js";import"./createSvgIcon-102248e7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-96220216.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-08f54e3c.js";import"./Grow-15d1c4f6.js";import"./index-8ce4a492.js";import"./useTheme-a5fe342b.js";import"./utils-60a28f01.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-3164d79d.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-442c550d.js";import"./OrientationBanner-d057b0e6.js";import"./FullWidthAlert-7e419f2a.js";import"./AlertTitle-d92dfb78.js";import"./Paper-8ac7942c.js";import"./IconButton-1e0dd4f6.js";import"./ButtonBase-0195d275.js";import"./emotion-react.browser.esm-8516f11f.js";import"./assertThisInitialized-081f9914.js";import"./Typography-c5b8eeae.js";import"./extendSxProp-d749f662.js";import"./Stack-f7ee2fdc.js";import"./Box-891dc3c7.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-e6a8fad5.js";import"./Button-d3d5b3a8.js";import"./getEndpoint-ac94413e.js";import"./Link-9ad54ce1.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-cd25e954.js";import"./inputBaseClasses-f1eaf41c.js";import"./Fade-5a6f6506.js";const ce={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false,
    children: 'Register for this Challenge',
    to: '/pathName?key=value#fragment',
    href: '',
    disableElevation: true,
    variant: 'contained',
    color: 'secondary',
    sx: {
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: 'white'
      },
      ':active': {
        color: 'white'
      },
      ':visited': {
        color: 'white'
      }
    },
    replace: false
  }
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var m,l,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    children: 'Leave Challenge',
    onClick: () => {
      alert('Leave Challenge Clicked');
    },
    endIcon: <ExitToAppIcon />,
    variant: 'outlined',
    sx: {
      borderColor: 'white',
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: '#172430',
        borderColor: '#172430'
      }
    },
    replace: false
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const de=["Register","Leave"];export{t as Leave,e as Register,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=LoginAwareButton.stories-a7150cfe.js.map