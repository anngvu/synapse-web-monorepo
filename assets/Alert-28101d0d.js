import{_ as U}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as a}from"./extends-98964cd2.js";import{r as F}from"./index-8db94870.js";import{a as V,g as Z,s as d,x as b,G as h,F as z,u as G,b as q,e as D}from"./styled-f64e11ba.js";import{c}from"./Clear-5ef00073.js";import{j as r,a as J}from"./jsx-runtime-095bf462.js";import{P as K}from"./Paper-2b624eab.js";import{I as Q}from"./IconButton-025ae2ef.js";function X(o){return Z("MuiAlert",o)}const Y=V("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),L=Y,oo=c(r("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),to=c(r("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),so=c(r("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ro=c(r("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),lo=c(r("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),eo=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],no=o=>{const{variant:s,color:l,severity:e,classes:t}=o,p={root:["root",`${s}${b(l||e)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return D(p,X,t)},ao=d(K,{name:"MuiAlert",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:l}=o;return[s.root,s[l.variant],s[`${l.variant}${b(l.color||l.severity)}`]]}})(({theme:o,ownerState:s})=>{const l=o.palette.mode==="light"?h:z,e=o.palette.mode==="light"?z:h,t=s.color||s.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&s.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:l(o.palette[t].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${t}StandardBg`]:e(o.palette[t].light,.9),[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:l(o.palette[t].light,.6),border:`1px solid ${(o.vars||o).palette[t].light}`,[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${t}FilledColor`],backgroundColor:o.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main,color:o.palette.getContrastText(o.palette[t].main)}))}),io=d("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),co=d("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),P=d("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),B={success:r(oo,{fontSize:"inherit"}),warning:r(to,{fontSize:"inherit"}),error:r(so,{fontSize:"inherit"}),info:r(ro,{fontSize:"inherit"})},po=F.forwardRef(function(s,l){var e,t,p,f,A,C;const u=G({props:s,name:"MuiAlert"}),{action:g,children:R,className:_,closeText:m="Close",color:k,components:I={},componentsProps:M={},icon:x,iconMapping:O=B,onClose:$,role:N="alert",severity:v="success",slotProps:y={},slots:S={},variant:W="standard"}=u,w=U(u,eo),n=a({},u,{color:k,severity:v,variant:W}),i=no(n),E=(e=(t=S.closeButton)!=null?t:I.CloseButton)!=null?e:Q,H=(p=(f=S.closeIcon)!=null?f:I.CloseIcon)!=null?p:lo,j=(A=y.closeButton)!=null?A:M.closeButton,T=(C=y.closeIcon)!=null?C:M.closeIcon;return J(ao,a({role:N,elevation:0,ownerState:n,className:q(i.root,_),ref:l},w,{children:[x!==!1?r(io,{ownerState:n,className:i.icon,children:x||O[v]||B[v]}):null,r(co,{ownerState:n,className:i.message,children:R}),g!=null?r(P,{ownerState:n,className:i.action,children:g}):null,g==null&&$?r(P,{ownerState:n,className:i.action,children:r(E,a({size:"small","aria-label":m,title:m,color:"inherit",onClick:$},j,{children:r(H,a({fontSize:"small"},T))}))}):null]}))}),Mo=po;export{Mo as A};
//# sourceMappingURL=Alert-28101d0d.js.map