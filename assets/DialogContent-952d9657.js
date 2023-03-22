import{_ as i,a as y}from"./objectWithoutPropertiesLoose-df62547b.js";import{r as p}from"./index-f1f749bf.js";import{d as h,g as b,s as u,t as d,e as S,h as f,i as $}from"./styled-233e7b47.js";import{u as O}from"./useTheme-4a3c7035.js";import{j as c}from"./jsx-runtime-670450c2.js";import{B as V,M as q}from"./Modal-6e86dc8b.js";import{P as T}from"./Paper-461328aa.js";import{e as G}from"./Clear-10ac5e31.js";import{F as J}from"./Fade-f26d100e.js";function Q(o){return b("MuiDialog",o)}const Z=h("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=Z,oo=p.createContext({}),eo=oo,ao=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],to=u(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),io=o=>{const{classes:e,scroll:a,maxWidth:t,fullWidth:r,fullScreen:s}=o,n={root:["root"],container:["container",`scroll${d(a)}`],paper:["paper",`paperScroll${d(a)}`,`paperWidth${d(String(t))}`,r&&"paperFullWidth",s&&"paperFullScreen"]};return $(n,Q,e)},ro=u(q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),so=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${d(a.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),no=u(T,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${d(a.scroll)}`],e[`paperWidth${d(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),lo=p.forwardRef(function(e,a){const t=S({props:e,name:"MuiDialog"}),r=O(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,BackdropComponent:g,BackdropProps:A,children:N,className:F,disableEscapeKeyDown:M=!1,fullScreen:U=!1,fullWidth:_=!1,maxWidth:j="sm",onBackdropClick:w,onClose:D,open:P,PaperComponent:I=T,PaperProps:B={},scroll:L="paper",TransitionComponent:E=J,transitionDuration:R=s,TransitionProps:Y}=t,K=y(t,ao),x=i({},t,{disableEscapeKeyDown:M,fullScreen:U,fullWidth:_,maxWidth:j,scroll:L}),C=io(x),v=p.useRef(),X=m=>{v.current=m.target===m.currentTarget},z=m=>{v.current&&(v.current=null,w&&w(m),D&&D(m,"backdropClick"))},W=G(l),H=p.useMemo(()=>({titleId:W}),[W]);return c(ro,i({className:f(C.root,F),closeAfterTransition:!0,components:{Backdrop:to},componentsProps:{backdrop:i({transitionDuration:R,as:g},A)},disableEscapeKeyDown:M,onClose:D,open:P,ref:a,onClick:z,ownerState:x},K,{children:c(E,i({appear:!0,in:P,timeout:R,role:"presentation"},Y,{children:c(so,{className:f(C.container),onMouseDown:X,ownerState:x,children:c(no,i({as:I,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":W},B,{className:f(C.paper,B.className),ownerState:x,children:c(eo.Provider,{value:H,children:N})}))})}))}))}),Ro=lo;function co(o){return b("MuiDialogActions",o)}h("MuiDialogActions",["root","spacing"]);const po=["className","disableSpacing"],uo=o=>{const{classes:e,disableSpacing:a}=o;return $({root:["root",!a&&"spacing"]},co,e)},go=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,!a.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),mo=p.forwardRef(function(e,a){const t=S({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:s=!1}=t,n=y(t,po),l=i({},t,{disableSpacing:s}),g=uo(l);return c(go,i({className:f(g.root,r),ownerState:l,ref:a},n))}),To=mo;function fo(o){return b("MuiDialogContent",o)}h("MuiDialogContent",["root","dividers"]);function Ao(o){return b("MuiDialogTitle",o)}const xo=h("MuiDialogTitle",["root"]),ho=xo,bo=["className","dividers"],Do=o=>{const{classes:e,dividers:a}=o;return $({root:["root",a&&"dividers"]},fo,e)},Co=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${ho.root} + &`]:{paddingTop:0}})),vo=p.forwardRef(function(e,a){const t=S({props:e,name:"MuiDialogContent"}),{className:r,dividers:s=!1}=t,n=y(t,bo),l=i({},t,{dividers:s}),g=Do(l);return c(Co,i({className:f(g.root,r),ownerState:l,ref:a},n))}),No=vo;export{No as D,To as a,Ro as b,eo as c,k as d,Ao as g};
//# sourceMappingURL=DialogContent-952d9657.js.map
