import{a as d,g,s as p,e as u,_ as f,f as D,h as m}from"./styled-81e3612a.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as v}from"./index-8db94870.js";import{j as C}from"./jsx-runtime-095bf462.js";function x(o){return d("MuiDialogActions",o)}g("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],w=o=>{const{classes:t,disableSpacing:s}=o;return m({root:["root",!s&&"spacing"]},x,t)},y=p("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,!s.disableSpacing&&t.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),M=v.forwardRef(function(t,s){const e=u({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:r=!1}=e,l=f(e,S),a=i({},e,{disableSpacing:r}),c=w(a);return C(y,i({className:D(c.root,n),ownerState:a,ref:s},l))}),P=M;function b(o){return d("MuiDialogContent",o)}g("MuiDialogContent",["root","dividers"]);function W(o){return d("MuiDialogTitle",o)}const A=g("MuiDialogTitle",["root"]),R=A,T=["className","dividers"],$=o=>{const{classes:t,dividers:s}=o;return m({root:["root",s&&"dividers"]},b,t)},U=p("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${R.root} + &`]:{paddingTop:0}})),N=v.forwardRef(function(t,s){const e=u({props:t,name:"MuiDialogContent"}),{className:n,dividers:r=!1}=e,l=f(e,T),a=i({},e,{dividers:r}),c=$(a);return C(U,i({className:D(c.root,n),ownerState:a,ref:s},l))}),k=N;export{k as D,P as a,W as g};
//# sourceMappingURL=DialogContent-bffd2073.js.map