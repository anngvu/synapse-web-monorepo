import{j as t,a as k,F as y}from"./jsx-runtime-670450c2.js";import{I as g}from"./IconSvg-da01548f.js";import{t as h}from"./StringUtils-d4255937.js";import{B as F}from"./Breadcrumbs-d0db54d7.js";import{T as v}from"./Clear-40cc83b8.js";import{T as D}from"./Typography-ea175c9e.js";import{L as H}from"./Link-cd148c3f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./SvgIcon-798376c1.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-14ca3f03.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./index-1aacdabe.js";import"./ButtonBase-85365024.js";import"./emotion-react.browser.esm-1c93b06f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-ef5b8fd1.js";import"./useTheme-6e189800.js";import"./index-96c5f47c.js";const b=32;function S(){return t(g,{icon:"chevronRight",sx:{color:"grey.500"}})}const B={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},_={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function a(r){const{items:x}=r;return t(F,{separator:t(S,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:B,children:x.map((n,s)=>{const i=h(n.text,b),C=i!==n.text?n.text:null;return t(v,{title:C,placement:"top",children:t(D,{variant:"breadcrumb1",children:n.current?i:t(H,{href:n.href,onClick:n.onClick,underline:"hover",sx:_,children:i},s)})},s)})})}try{a.displayName="EntityPageBreadcrumbs",a.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const $={title:"Synapse/EntityPage/Breadcrumb",component:a,render:r=>k(y,{children:[t("br",{}),t("br",{}),t(a,{items:[],...r})]})},e=r=>{r.preventDefault()},o={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"#!Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]}},l={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      onClick: preventDefaultHandler,
      text: 'Files',
      href: '#area'
    }, {
      onClick: preventDefaultHandler,
      text: 'Root folder',
      href: '#!Synapse:syn123'
    }, {
      onClick: preventDefaultHandler,
      text: 'A very long subfolder name that gets truncated',
      href: '#!Synapse:syn456'
    }, {
      onClick: preventDefaultHandler,
      text: 'The file you are looking at',
      href: '#!Synapse:syn789',
      current: true
    }]
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      onClick: preventDefaultHandler,
      text: 'Files',
      href: '#area'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder A'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder B'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder C'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder D'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder E'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder F'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder G'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder H'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder I'
    }, {
      onClick: preventDefaultHandler,
      text: 'Leaf file',
      current: true
    }]
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ee=["Demo","ManyItems"];export{o as Demo,l as ManyItems,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=EntityPageBreadcrumb.stories-bcbc3c6d.js.map