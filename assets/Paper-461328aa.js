import{_ as s,a as g}from"./objectWithoutPropertiesLoose-df62547b.js";import{r as P}from"./index-f1f749bf.js";import{g as x,d as b,s as m,v as l,e as $,h as y,i as C}from"./styled-233e7b47.js";import{j as R}from"./jsx-runtime-670450c2.js";const k=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)},v=k;function q(e){return x("MuiPaper",e)}b("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const M=["className","component","elevation","square","variant"],_=e=>{const{square:a,elevation:o,variant:t,classes:n}=e,r={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return C(r,q,n)},U=m("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(a.elevation))}, ${l("#fff",v(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),j=P.forwardRef(function(a,o){const t=$({props:a,name:"MuiPaper"}),{className:n,component:r="div",elevation:d=1,square:p=!1,variant:c="elevation"}=t,u=g(t,M),i=s({},t,{component:r,elevation:d,square:p,variant:c}),f=_(i);return R(U,s({as:r,ownerState:i,className:y(f.root,n),ref:o},u))}),h=j;export{h as P};
//# sourceMappingURL=Paper-461328aa.js.map
