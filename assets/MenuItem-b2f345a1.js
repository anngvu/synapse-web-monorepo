import{_ as P}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as r}from"./extends-98964cd2.js";import{r as c}from"./index-8db94870.js";import{e as f,g,s as U,L as j,k as d,f as w,i as x,j as G}from"./styled-eda33d92.js";import{L as $}from"./MenuList-f5ab20ec.js";import{j as M}from"./jsx-runtime-095bf462.js";import{B as S}from"./ButtonBase-8aff28b9.js";import{d as L}from"./dividerClasses-a65a6b87.js";import{a as _,u as E}from"./useForkRef-f2aa3d66.js";function ie(e){return g("MuiListItemIcon",e)}const H=f("MuiListItemIcon",["root","alignItemsFlexStart"]),O=H;function ne(e){return g("MuiListItemText",e)}const z=f("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),k=z;function D(e){return g("MuiMenuItem",e)}const W=f("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=W,q=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],A=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},J=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:p,classes:o}=e,i=G({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",p&&"selected"]},D,o);return r({},o,i)},K=U(S,{shouldForwardProp:e=>j(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:A})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${L.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${L.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),Q=c.forwardRef(function(t,s){const a=w({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:b=!1,disableGutters:i=!1,focusVisibleClassName:T,role:R="menuitem",tabIndex:v,className:B}=a,V=P(a,q),y=c.useContext($),C=c.useMemo(()=>({dense:o||y.dense||!1,disableGutters:i}),[y.dense,o,i]),u=c.useRef(null);_(()=>{l&&u.current&&u.current.focus()},[l]);const F=r({},a,{dense:C.dense,divider:b,disableGutters:i}),m=J(a),N=E(u,s);let I;return a.disabled||(I=v!==void 0?v:-1),M($.Provider,{value:C,children:M(K,r({ref:N,role:R,tabIndex:I,component:p,focusVisibleClassName:x(m.focusVisible,T),className:x(m.root,B)},V,{ownerState:F,classes:m}))})}),re=Q;export{re as M,ne as a,ie as g,k as l};
//# sourceMappingURL=MenuItem-b2f345a1.js.map