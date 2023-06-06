import{a as p,j as n}from"./jsx-runtime-095bf462.js";import{r as m,R as L}from"./index-8db94870.js";import{L as h}from"./LinearProgress-3ed84810.js";import{B as v}from"./Box-402daddb.js";import{B as u}from"./Button-79de9a0b.js";import"./_commonjsHelpers-042e6b4d.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-55b76ab0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./useTheme-c3897ed6.js";import"./emotion-react.browser.esm-6281246a.js";import"./extendSxProp-a7783ced.js";import"./ButtonBase-808eaa85.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";const o=a=>{const{barColor:r,barPercent:e,backBtnLabel:B,forwardBtnLabel:k,forwardBtnActive:l,backBtnCallback:i,forwardBtnCallback:s}=a,[x,C]=m.useState(0);let c=!0;m.useEffect(()=>(c&&C(e),()=>{c=!1}),[e]);const P=y=>{i&&i()},w=y=>{s&&l&&s()},d={padding:"10px 120px",marginRight:"30px"};return p("section",{children:[n(h,{value:x,variant:"determinate",sx:{backgroundColor:"transparent","& .MuiLinearProgress-bar":{backgroundColor:r},height:"10px"}}),p(v,{padding:"30px 0",textAlign:"center",children:[n(u,{onClick:P,sx:d,variant:"outlined",color:"primary",children:B}),n(u,{onClick:w,disabled:!l,sx:d,variant:"contained",color:"primary",children:k})]})]})};try{o.displayName="PageProgress",o.__docgenInfo={description:"",displayName:"PageProgress",props:{barColor:{defaultValue:null,description:"",name:"barColor",required:!0,type:{name:"string"}},barPercent:{defaultValue:null,description:"",name:"barPercent",required:!0,type:{name:"number"}},backBtnLabel:{defaultValue:null,description:"",name:"backBtnLabel",required:!0,type:{name:"string"}},backBtnCallback:{defaultValue:null,description:"",name:"backBtnCallback",required:!1,type:{name:"(() => void)"}},forwardBtnLabel:{defaultValue:null,description:"",name:"forwardBtnLabel",required:!0,type:{name:"string"}},forwardBtnCallback:{defaultValue:null,description:"",name:"forwardBtnCallback",required:!1,type:{name:"(() => void)"}},forwardBtnActive:{defaultValue:null,description:"",name:"forwardBtnActive",required:!0,type:{name:"boolean"}}}}}catch{}const Q={title:"UI/PageProgress",component:o,render:a=>{const[r,e]=L.useState(0);return n(o,{barPercent:r,backBtnCallback:()=>{e(r-25)},forwardBtnCallback:()=>{e(r+25)},forwardBtnActive:r<100,...a})}},t={args:{barColor:"green",backBtnLabel:"Back",forwardBtnLabel:"Next"}};var b,f,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    barColor: 'green',
    backBtnLabel: 'Back',
    forwardBtnLabel: 'Next'
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const T=["Demo"];export{t as Demo,T as __namedExportsOrder,Q as default};
//# sourceMappingURL=PageProgress.stories-779f3ae5.js.map