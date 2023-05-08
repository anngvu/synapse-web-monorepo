import{j as b,a as J}from"./jsx-runtime-095bf462.js";import{u as Y,c0 as Z,b9 as Q,c1 as X}from"./EntityTypeUtils-2e4d4a81.js";import{T as w}from"./Tooltip-d0fc02c5.js";import{_ as oo}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as f}from"./extends-98964cd2.js";import{r as C}from"./index-8db94870.js";import{a as ao,g as lo,s as N,x as r,k as v,u as ro,b as k,e as eo}from"./styled-f64e11ba.js";import{c as M}from"./Clear-72bafe95.js";import{B as _}from"./ButtonBase-4f599170.js";import{u as io}from"./useForkRef-f2aa3d66.js";import{A as co}from"./Avatar-c25dcc6a.js";import{E as to}from"./IconSvg-6ba2e879.js";const no=M(b("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function so(o){return lo("MuiChip",o)}const po=ao("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),l=po,uo=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],vo=o=>{const{classes:a,disabled:c,size:e,color:i,iconColor:u,onDelete:p,clickable:n,variant:s}=o,d={root:["root",s,c&&"disabled",`size${r(e)}`,`color${r(i)}`,n&&"clickable",n&&`clickableColor${r(i)}`,p&&"deletable",p&&`deletableColor${r(i)}`,`${s}${r(i)}`],label:["label",`label${r(e)}`],avatar:["avatar",`avatar${r(e)}`,`avatarColor${r(i)}`],icon:["icon",`icon${r(e)}`,`iconColor${r(u)}`],deleteIcon:["deleteIcon",`deleteIcon${r(e)}`,`deleteIconColor${r(i)}`,`deleteIcon${r(s)}Color${r(i)}`]};return eo(d,so,a)},bo=N("div",{name:"MuiChip",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:c}=o,{color:e,iconColor:i,clickable:u,onDelete:p,size:n,variant:s}=c;return[{[`& .${l.avatar}`]:a.avatar},{[`& .${l.avatar}`]:a[`avatar${r(n)}`]},{[`& .${l.avatar}`]:a[`avatarColor${r(e)}`]},{[`& .${l.icon}`]:a.icon},{[`& .${l.icon}`]:a[`icon${r(n)}`]},{[`& .${l.icon}`]:a[`iconColor${r(i)}`]},{[`& .${l.deleteIcon}`]:a.deleteIcon},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(n)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(s)}Color${r(e)}`]},a.root,a[`size${r(n)}`],a[`color${r(e)}`],u&&a.clickable,u&&e!=="default"&&a[`clickableColor${r(e)})`],p&&a.deletable,p&&e!=="default"&&a[`deletableColor${r(e)}`],a[s],a[`${s}${r(e)}`]]}})(({theme:o,ownerState:a})=>{const c=o.palette.mode==="light"?o.palette.grey[700]:o.palette.grey[300];return f({maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:c,fontSize:o.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${l.icon}`]:f({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&f({color:o.vars?o.vars.palette.Chip.defaultIconColor:c},a.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:f({WebkitTapHighlightColor:"transparent",color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.26)`:v(o.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.4)`:v(o.palette.text.primary,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:o.vars?`rgba(${o.vars.palette[a.color].contrastTextChannel} / 0.7)`:v(o.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(o.vars||o).palette[a.color].main,color:(o.vars||o).palette[a.color].contrastText},a.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:v(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}})},({theme:o,ownerState:a})=>f({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:v(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:v(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)},"&:active":{boxShadow:(o.vars||o).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}}),({theme:o,ownerState:a})=>f({},a.variant==="outlined"&&{backgroundColor:"transparent",border:o.vars?`1px solid ${o.vars.palette.Chip.defaultBorder}`:`1px solid ${o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(o.vars||o).palette[a.color].main,border:`1px solid ${o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:v(o.palette[a.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[a.color].main,o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.focusOpacity})`:v(o.palette[a.color].main,o.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:v(o.palette[a.color].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].main}}})),fo=N("span",{name:"MuiChip",slot:"Label",overridesResolver:(o,a)=>{const{ownerState:c}=o,{size:e}=c;return[a.label,a[`label${r(e)}`]]}})(({ownerState:o})=>f({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},o.size==="small"&&{paddingLeft:8,paddingRight:8}));function h(o){return o.key==="Backspace"||o.key==="Delete"}const Co=C.forwardRef(function(a,c){const e=ro({props:a,name:"MuiChip"}),{avatar:i,className:u,clickable:p,color:n="default",component:s,deleteIcon:d,disabled:m=!1,icon:y,label:U,onClick:R,onDelete:g,onKeyDown:E,onKeyUp:T,size:K="medium",variant:A="filled",tabIndex:W,skipFocusWhenDisabled:F=!1}=e,H=oo(e,uo),x=C.useRef(null),j=io(x,c),D=t=>{t.stopPropagation(),g&&g(t)},B=t=>{t.currentTarget===t.target&&h(t)&&t.preventDefault(),E&&E(t)},q=t=>{t.currentTarget===t.target&&(g&&h(t)?g(t):t.key==="Escape"&&x.current&&x.current.blur()),T&&T(t)},I=p!==!1&&R?!0:p,z=I||g?_:s||"div",O=f({},e,{component:z,disabled:m,size:K,color:n,iconColor:C.isValidElement(y)&&y.props.color||n,onDelete:!!g,clickable:I,variant:A}),$=vo(O),G=z===_?f({component:s||"div",focusVisibleClassName:$.focusVisible},g&&{disableRipple:!0}):{};let P=null;g&&(P=d&&C.isValidElement(d)?C.cloneElement(d,{className:k(d.props.className,$.deleteIcon),onClick:D}):b(no,{className:k($.deleteIcon),onClick:D}));let V=null;i&&C.isValidElement(i)&&(V=C.cloneElement(i,{className:k($.avatar,i.props.className)}));let L=null;return y&&C.isValidElement(y)&&(L=C.cloneElement(y,{className:k($.icon,y.props.className)})),J(bo,f({as:z,className:k($.root,u),disabled:I&&m?!0:void 0,onClick:R,onKeyDown:B,onKeyUp:q,ref:j,tabIndex:F&&m?-1:W,ownerState:O},G,H,{children:[V||L,b(fo,{className:k($.label),ownerState:O,children:U}),P]}))}),go=Co,$o=M(b("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");function S(o){const{chipText:a,error:c}=o,{accessToken:e}=Y(),i=(c.status===403||c.status===401)&&!e,u=c.status===403&&e;Z({show:c.status>=500,issueCollector:"SWC",issueSummary:"",issueDescription:c.reason,issuePriority:"3"});const p=i?"warning":"error";let n,s;i||u?n=b(co,{sx:{bgcolor:`${p}.main`},children:b($o,{sx:{color:"white",width:"18px"}})}):s=i||u?void 0:b(to,{});let d;return i?d=b(Q,{}):u?d=X:d=c.reason,b(w,{title:d,children:b(go,{avatar:n,color:p,variant:"outlined",icon:s,label:a})})}try{S.displayName="ErrorChip",S.__docgenInfo={description:"A chip component for handling inline errors, where some information can be shown (e.g. an ID) without breaking an entire component.",displayName:"ErrorChip",props:{chipText:{defaultValue:null,description:"",name:"chipText",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"SynapseClientError"}}}}}catch{}export{S as E};
//# sourceMappingURL=ErrorChip-6f883cc7.js.map
