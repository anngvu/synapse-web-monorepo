import{a as u,j as t}from"./jsx-runtime-095bf462.js";import{r as m,R as L}from"./index-8db94870.js";import{L as h}from"./LinearProgress-f638b645.js";import{B as v}from"./Box-49321e59.js";import{B as b}from"./Button-c45f00b4.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-9c91c4fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-68d5aa8d.js";import"./emotion-react.browser.esm-8f02f344.js";import"./extendSxProp-e5d44a75.js";import"./ButtonBase-7c3b1b89.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";const l=n=>{const{barColor:o,barPercent:e,backBtnLabel:r,forwardBtnLabel:k,forwardBtnActive:i,backBtnCallback:s,forwardBtnCallback:c}=n,[x,C]=m.useState(0);let d=!0;m.useEffect(()=>(d&&C(e),()=>{d=!1}),[e]);const P=y=>{s&&s()},w=y=>{c&&i&&c()},p={padding:"10px 120px",marginRight:"30px"};return u("section",{children:[t(h,{value:x,variant:"determinate",sx:{backgroundColor:"transparent","& .MuiLinearProgress-bar":{backgroundColor:o},height:"10px"}}),u(v,{padding:"30px 0",textAlign:"center",children:[t(b,{onClick:P,sx:p,variant:"outlined",color:"primary",children:r}),t(b,{onClick:w,disabled:!i,sx:p,variant:"contained",color:"primary",children:k})]})]})};try{l.displayName="PageProgress",l.__docgenInfo={description:"",displayName:"PageProgress",props:{barColor:{defaultValue:null,description:"",name:"barColor",required:!0,type:{name:"string"}},barPercent:{defaultValue:null,description:"",name:"barPercent",required:!0,type:{name:"number"}},backBtnLabel:{defaultValue:null,description:"",name:"backBtnLabel",required:!0,type:{name:"string"}},backBtnCallback:{defaultValue:null,description:"",name:"backBtnCallback",required:!1,type:{name:"(() => void)"}},forwardBtnLabel:{defaultValue:null,description:"",name:"forwardBtnLabel",required:!0,type:{name:"string"}},forwardBtnCallback:{defaultValue:null,description:"",name:"forwardBtnCallback",required:!1,type:{name:"(() => void)"}},forwardBtnActive:{defaultValue:null,description:"",name:"forwardBtnActive",required:!0,type:{name:"boolean"}}}}}catch{}const J={title:"UI/PageProgress",render:function(o){const[e,r]=L.useState(0);return t(l,{barPercent:e,backBtnCallback:()=>{r(e-25)},forwardBtnCallback:()=>{r(e+25)},forwardBtnActive:e<100,...o})}},a={args:{barColor:"green",backBtnLabel:"Back",forwardBtnLabel:"Next"}};var f,g,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    barColor: 'green',
    backBtnLabel: 'Back',
    forwardBtnLabel: 'Next'
  }
}`,...(B=(g=a.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const K=["Demo"];export{a as Demo,K as __namedExportsOrder,J as default};
//# sourceMappingURL=PageProgress.stories-803c2c81.js.map