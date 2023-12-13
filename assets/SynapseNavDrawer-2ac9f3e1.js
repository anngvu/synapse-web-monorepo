import{j as t,a as C,F as E}from"./jsx-runtime-095bf462.js";import{u as ue,a1 as ge,n as ve,bM as ye,$ as we,w as xe}from"./SynapseClient-ce341217.js";import{r as v}from"./index-8db94870.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-caa14b37.js";import{b as Se}from"./useDataAccessSubmission-edf30cf6.js";import{u as Te}from"./useDownloadList-0c4581ed.js";import{C as ke}from"./CreateProjectModal-e84e327d.js";import{I as V}from"./IconSvg-e494d1b3.js";import{U as Ne}from"./UserBadge-2064d2de.js";import{_ as j,a as be,g as Ie,s as z,E as oe,o as G,e as ne,f as M,h as ae,c as B}from"./styled-81e3612a.js";import{_ as y}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{u as se}from"./useTheme-533dafd0.js";import{M as Re}from"./Modal-7f464547.js";import{P as Fe}from"./Paper-057dfac2.js";import{T as Le,r as De,g as q}from"./utils-b7dab64f.js";import{u as ie,a as $e}from"./useForkRef-f2aa3d66.js";import{d as Oe,o as le}from"./ownerWindow-2c76219e.js";import{L as X,a as J}from"./MenuList-19fca92f.js";import{T as ce}from"./Tooltip-f72372f7.js";import{F as K}from"./Form-326662a3.js";import{l as P,g as Ee}from"./listItemButtonClasses-d94f4ee9.js";import{B as Me}from"./ButtonBase-84be17da.js";import{a2 as Pe}from"./SynapseTableCell-f4b5964e.js";const _e=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ae(e,r,a){const o=r.getBoundingClientRect(),s=a&&a.getBoundingClientRect(),h=le(r);let d;if(r.fakeTransform)d=r.fakeTransform;else{const l=h.getComputedStyle(r);d=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let m=0,f=0;if(d&&d!=="none"&&typeof d=="string"){const l=d.split("(")[1].split(")")[0].split(",");m=parseInt(l[4],10),f=parseInt(l[5],10)}return e==="left"?s?`translateX(${s.right+m-o.left}px)`:`translateX(${h.innerWidth+m-o.left}px)`:e==="right"?s?`translateX(-${o.right-s.left-m}px)`:`translateX(-${o.left+o.width-m}px)`:e==="up"?s?`translateY(${s.bottom+f-o.top}px)`:`translateY(${h.innerHeight+f-o.top}px)`:s?`translateY(-${o.top-s.top+o.height-f}px)`:`translateY(-${o.top+o.height-f}px)`}function Be(e){return typeof e=="function"?e():e}function H(e,r,a){const o=Be(a),s=Ae(e,r,o);s&&(r.style.webkitTransform=s,r.style.transform=s)}const He=v.forwardRef(function(r,a){const o=se(),s={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},h={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:d,appear:m=!0,children:f,container:l,direction:w="down",easing:L=s,in:S,onEnter:b,onEntered:p,onEntering:n,onExit:R,onExited:D,onExiting:T,style:x,timeout:$=h,TransitionComponent:u=Le}=r,c=j(r,_e),k=v.useRef(null),g=ie(f.ref,k,a),I=i=>N=>{i&&(N===void 0?i(k.current):i(k.current,N))},O=I((i,N)=>{H(w,i,l),De(i),b&&b(i,N)}),_=I((i,N)=>{const Y=q({timeout:$,style:x,easing:L},{mode:"enter"});i.style.webkitTransition=o.transitions.create("-webkit-transform",y({},Y)),i.style.transition=o.transitions.create("transform",y({},Y)),i.style.webkitTransform="none",i.style.transform="none",n&&n(i,N)}),A=I(p),Ce=I(T),me=I(i=>{const N=q({timeout:$,style:x,easing:L},{mode:"exit"});i.style.webkitTransition=o.transitions.create("-webkit-transform",N),i.style.transition=o.transitions.create("transform",N),H(w,i,l),R&&R(i)}),fe=I(i=>{i.style.webkitTransition="",i.style.transition="",D&&D(i)}),he=i=>{d&&d(k.current,i)},Z=v.useCallback(()=>{k.current&&H(w,k.current,l)},[w,l]);return v.useEffect(()=>{if(S||w==="down"||w==="right")return;const i=Oe(()=>{k.current&&H(w,k.current,l)}),N=le(k.current);return N.addEventListener("resize",i),()=>{i.clear(),N.removeEventListener("resize",i)}},[w,S,l]),v.useEffect(()=>{S||Z()},[S,Z]),t(u,y({nodeRef:k,onEnter:O,onEntered:A,onEntering:_,onExit:me,onExited:fe,onExiting:Ce,addEndListener:he,appear:m,in:S,timeout:$},c,{children:(i,N)=>v.cloneElement(f,y({ref:g,style:y({visibility:i==="exited"&&!S?"hidden":void 0},x,f.props.style)},N))}))}),Ve=He;function je(e){return be("MuiDrawer",e)}Ie("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Ge=["BackdropProps"],ze=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],de=(e,r)=>{const{ownerState:a}=e;return[r.root,(a.variant==="permanent"||a.variant==="persistent")&&r.docked,r.modal]},We=e=>{const{classes:r,anchor:a,variant:o}=e,s={root:["root"],docked:[(o==="permanent"||o==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${G(a)}`,o!=="temporary"&&`paperAnchorDocked${G(a)}`]};return ae(s,je,r)},Ue=z(Re,{name:"MuiDrawer",slot:"Root",overridesResolver:de})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),Q=z("div",{shouldForwardProp:oe,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:de})({flex:"0 0 auto"}),Ze=z(Fe,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.paper,r[`paperAnchor${G(a.anchor)}`],a.variant!=="temporary"&&r[`paperAnchorDocked${G(a.anchor)}`]]}})(({theme:e,ownerState:r})=>y({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),pe={left:"right",right:"left",top:"down",bottom:"up"};function Ye(e){return["left","right"].indexOf(e)!==-1}function qe(e,r){return e.direction==="rtl"&&Ye(r)?pe[r]:r}const Xe=v.forwardRef(function(r,a){const o=ne({props:r,name:"MuiDrawer"}),s=se(),h={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:d="left",BackdropProps:m,children:f,className:l,elevation:w=16,hideBackdrop:L=!1,ModalProps:{BackdropProps:S}={},onClose:b,open:p=!1,PaperProps:n={},SlideProps:R,TransitionComponent:D=Ve,transitionDuration:T=h,variant:x="temporary"}=o,$=j(o.ModalProps,Ge),u=j(o,ze),c=v.useRef(!1);v.useEffect(()=>{c.current=!0},[]);const k=qe(s,d),I=y({},o,{anchor:d,elevation:w,open:p,variant:x},u),O=We(I),_=t(Ze,y({elevation:x==="temporary"?w:0,square:!0},n,{className:M(O.paper,n.className),ownerState:I,children:f}));if(x==="permanent")return t(Q,y({className:M(O.root,O.docked,l),ownerState:I,ref:a},u,{children:_}));const A=t(D,y({in:p,direction:pe[k],timeout:T,appear:c.current},R,{children:_}));return x==="persistent"?t(Q,y({className:M(O.root,O.docked,l),ownerState:I,ref:a},u,{children:A})):t(Ue,y({BackdropProps:y({},m,S,{transitionDuration:T}),className:M(O.root,O.modal,l),open:p,ownerState:I,onClose:b,hideBackdrop:L,ref:a},u,$,{children:A}))}),ee=Xe,Je=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Ke=(e,r)=>{const{ownerState:a}=e;return[r.root,a.dense&&r.dense,a.alignItems==="flex-start"&&r.alignItemsFlexStart,a.divider&&r.divider,!a.disableGutters&&r.gutters]},Qe=e=>{const{alignItems:r,classes:a,dense:o,disabled:s,disableGutters:h,divider:d,selected:m}=e,l=ae({root:["root",o&&"dense",!h&&"gutters",d&&"divider",s&&"disabled",r==="flex-start"&&"alignItemsFlexStart",m&&"selected"]},Ee,a);return y({},a,l)},et=z(Me,{shouldForwardProp:e=>oe(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Ke})(({theme:e,ownerState:r})=>y({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:B(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:B(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:B(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},r.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},r.alignItems==="flex-start"&&{alignItems:"flex-start"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.dense&&{paddingTop:4,paddingBottom:4})),tt=v.forwardRef(function(r,a){const o=ne({props:r,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:h=!1,component:d="div",children:m,dense:f=!1,disableGutters:l=!1,divider:w=!1,focusVisibleClassName:L,selected:S=!1,className:b}=o,p=j(o,Je),n=v.useContext(X),R=v.useMemo(()=>({dense:f||n.dense||!1,alignItems:s,disableGutters:l}),[s,n.dense,f,l]),D=v.useRef(null);$e(()=>{h&&D.current&&D.current.focus()},[h]);const T=y({},o,{alignItems:s,dense:R.dense,disableGutters:l,divider:w,selected:S}),x=Qe(T),$=ie(D,a);return t(X.Provider,{value:R,children:t(et,y({ref:$,href:p.href||p.to,component:(p.href||p.to)&&d==="div"?"button":d,focusVisibleClassName:M(x.focusVisible,L),ownerState:T,className:M(x.root,b)},p,{classes:x,children:m}))})}),rt=tt,W=e=>C("svg",{...e,width:"30",height:"33",viewBox:"0 0 30 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M7.80432 14.0604L20.8862 6.64159",stroke:"#F8F9FA"}),t("path",{d:"M25.2369 8.80366L25.2369 23.9155",stroke:"#F8F9FA"}),t("path",{d:"M7.62979 19.3677L20.5417 26.9974",stroke:"#F8F9FA"}),t("circle",{cx:"24.65",cy:"4.69524",r:"4.19524",stroke:"#F8F9FA"}),t("circle",{cx:"24.65",cy:"28.1713",r:"4.19524",stroke:"#F8F9FA"}),t("circle",{cx:"4.69524",cy:"16.4335",r:"4.19524",stroke:"#F8F9FA"})]});try{W.displayName="SynapseIconWhite",W.__docgenInfo={description:"",displayName:"SynapseIconWhite",props:{}}}catch{}const U=e=>C("svg",{width:"109",height:"15",viewBox:"0 0 109 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M9.31503 2.91881C9.25595 3.01716 9.19032 3.09255 9.11809 3.145C9.05246 3.19089 8.97039 3.21384 8.87192 3.21384C8.76031 3.21384 8.62906 3.15812 8.47806 3.04666C8.32706 2.9352 8.13672 2.81392 7.90695 2.68279C7.68377 2.54511 7.41131 2.42055 7.08967 2.30909C6.77457 2.19763 6.39055 2.14191 5.9376 2.14191C5.51091 2.14191 5.13346 2.20091 4.80523 2.31892C4.48357 2.43038 4.21114 2.58445 3.98795 2.78113C3.77132 2.97782 3.60721 3.21056 3.49561 3.47937C3.38402 3.74161 3.32822 4.0268 3.32822 4.33495C3.32822 4.72832 3.42341 5.05613 3.61378 5.31837C3.81071 5.57406 4.06673 5.79371 4.38182 5.97727C4.70348 6.16082 5.06453 6.32146 5.46496 6.45914C5.87197 6.59028 6.28554 6.72796 6.70565 6.87218C7.13236 7.0164 7.54592 7.18034 7.94633 7.36389C8.35335 7.54091 8.71438 7.7671 9.02948 8.04246C9.35112 8.31782 9.60713 8.65548 9.79752 9.05539C9.99445 9.4553 10.0929 9.94701 10.0929 10.5305C10.0929 11.1468 9.98791 11.727 9.77783 12.2712C9.56775 12.8088 9.25925 13.2776 8.85223 13.6775C8.45182 14.0774 7.95618 14.3921 7.36538 14.6216C6.78112 14.8511 6.11484 14.9658 5.36649 14.9658C4.44746 14.9658 3.61378 14.8019 2.86542 14.4741C2.11707 14.1397 1.47704 13.6906 0.945312 13.1268L1.49673 12.222C1.54925 12.1499 1.61161 12.0909 1.68382 12.045C1.76259 11.9925 1.84793 11.9663 1.93983 11.9663C2.02517 11.9663 2.12036 12.0024 2.22539 12.0745C2.33698 12.14 2.46171 12.2253 2.59956 12.3302C2.73742 12.4351 2.89496 12.5498 3.0722 12.6744C3.24945 12.7989 3.44966 12.9137 3.67286 13.0186C3.90261 13.1235 4.16191 13.212 4.45075 13.2841C4.73959 13.3497 5.06453 13.3825 5.42557 13.3825C5.87852 13.3825 6.28224 13.3202 6.63672 13.1956C6.9912 13.0711 7.2899 12.8973 7.53277 12.6744C7.78224 12.4449 7.97258 12.1728 8.10388 11.8581C8.23519 11.5435 8.30082 11.1927 8.30082 10.8059C8.30082 10.3797 8.20235 10.0323 8.00542 9.76345C7.81503 9.48809 7.56231 9.25861 7.24722 9.07505C6.93212 8.8915 6.57109 8.7374 6.16408 8.61284C5.75708 8.4817 5.34352 8.35061 4.92339 8.21947C4.50326 8.0818 4.0897 7.92445 3.6827 7.74743C3.2757 7.57041 2.91466 7.34093 2.59956 7.05903C2.28447 6.77713 2.02845 6.42635 1.83152 6.00677C1.64115 5.5806 1.54596 5.05613 1.54596 4.43329C1.54596 3.93502 1.64115 3.45314 1.83152 2.98765C2.02845 2.52216 2.31073 2.10913 2.67834 1.74854C3.05251 1.38795 3.50875 1.09948 4.04703 0.883124C4.59189 0.66677 5.21551 0.558594 5.91791 0.558594C6.70565 0.558594 7.42116 0.68316 8.06449 0.932294C8.71438 1.18143 9.28549 1.54202 9.77783 2.01406L9.31503 2.91881Z",fill:"#F8F9FA"}),t("path",{d:"M21.9847 9.19294V14.8083H20.0745V9.19294L14.9049 0.71582H16.5789C16.7496 0.71582 16.8841 0.758435 16.9826 0.843666C17.0811 0.922339 17.1664 1.02724 17.2386 1.15836L20.4683 6.63604C20.5865 6.86552 20.6948 7.08187 20.7933 7.2851C20.8917 7.48178 20.9771 7.68176 21.0493 7.88499C21.1215 7.68176 21.2035 7.48178 21.2955 7.2851C21.3874 7.08187 21.4891 6.86552 21.6007 6.63604L24.8206 1.15836C24.8797 1.04691 24.9617 0.945286 25.0668 0.853499C25.1718 0.761713 25.3064 0.71582 25.4705 0.71582H27.1543L21.9847 9.19294Z",fill:"#F8F9FA"}),t("path",{d:"M43.6078 0.71582V14.8083H42.6527C42.5017 14.8083 42.3737 14.7821 42.2687 14.7296C42.1702 14.6772 42.0717 14.5886 41.9733 14.4641L33.8104 3.84311C33.8235 4.00701 33.8333 4.16764 33.8399 4.32499C33.8465 4.48234 33.8497 4.62985 33.8497 4.76753V14.8083H32.1758V0.71582H33.1605C33.2458 0.71582 33.318 0.722376 33.3771 0.735489C33.4361 0.742045 33.4887 0.758435 33.5346 0.784659C33.5806 0.804328 33.6265 0.83711 33.6725 0.883003C33.7184 0.92234 33.7677 0.974788 33.8202 1.04035L41.9831 11.6515C41.97 11.481 41.9569 11.3171 41.9438 11.1598C41.9372 10.9959 41.9339 10.8418 41.9339 10.6976V0.71582H43.6078Z",fill:"#F8F9FA"}),t("path",{d:"M58.4023 9.57648L56.1868 3.84311C56.1208 3.67265 56.0519 3.47596 55.98 3.25306C55.9076 3.02359 55.8387 2.78101 55.7732 2.52532C55.6354 3.05637 55.4941 3.49891 55.3498 3.85295L53.1343 9.57648H58.4023ZM62.3804 14.8083H60.9034C60.7325 14.8083 60.5947 14.7657 60.4898 14.6805C60.3844 14.5952 60.3057 14.4871 60.2535 14.3559L58.934 10.9533H52.6026L51.2831 14.3559C51.2437 14.4739 51.1679 14.5788 51.0566 14.6706C50.9449 14.7624 50.807 14.8083 50.6431 14.8083H49.1661L54.8083 0.71582H56.7382L62.3804 14.8083Z",fill:"#F8F9FA"}),t("path",{d:"M72.5866 8.02267C73.1317 8.02267 73.6107 7.95053 74.0243 7.80631C74.4442 7.66209 74.7958 7.46212 75.0779 7.20642C75.3669 6.94419 75.5835 6.63274 75.7277 6.27217C75.872 5.9116 75.9444 5.51493 75.9444 5.08223C75.9444 4.18403 75.6652 3.48252 75.1074 2.9777C74.556 2.47287 73.7156 2.22046 72.5866 2.22046H70.3219V8.02267H72.5866ZM72.5866 0.71582C73.4793 0.71582 74.2542 0.820719 74.9105 1.03052C75.5736 1.23376 76.1216 1.52551 76.5549 1.90576C76.9881 2.28602 77.3096 2.74495 77.5198 3.28256C77.7365 3.82016 77.8448 4.42005 77.8448 5.08223C77.8448 5.73783 77.7301 6.33772 77.5002 6.88189C77.2702 7.42607 76.9325 7.89482 76.4859 8.28819C76.0463 8.68156 75.4978 8.98972 74.8415 9.21261C74.1917 9.42896 73.4399 9.53714 72.5866 9.53714H70.3219V14.8083H68.4215V0.71582H72.5866Z",fill:"#F8F9FA"}),t("path",{d:"M92.1441 2.91881C92.085 3.01716 92.0195 3.09255 91.9472 3.145C91.8817 3.19089 91.7995 3.21384 91.701 3.21384C91.5897 3.21384 91.4583 3.15812 91.3071 3.04666C91.1565 2.9352 90.9659 2.81392 90.736 2.68279C90.513 2.54511 90.2407 2.42055 89.9187 2.30909C89.6036 2.19763 89.2196 2.14191 88.7667 2.14191C88.3403 2.14191 87.9627 2.20091 87.6343 2.31892C87.3128 2.43038 87.0405 2.58445 86.817 2.78113C86.6004 2.97782 86.4364 3.21056 86.3247 3.47937C86.2134 3.74161 86.1573 4.0268 86.1573 4.33495C86.1573 4.72832 86.2528 5.05613 86.4428 5.31837C86.6398 5.57406 86.8958 5.79371 87.2109 5.97727C87.5329 6.16082 87.8938 6.32146 88.294 6.45914C88.7012 6.59028 89.1148 6.72796 89.5347 6.87218C89.9616 7.0164 90.3751 7.18034 90.7754 7.36389C91.1826 7.54091 91.5434 7.7671 91.8585 8.04246C92.1805 8.31782 92.4365 8.65548 92.6266 9.05539C92.8235 9.4553 92.922 9.94701 92.922 10.5305C92.922 11.1468 92.8171 11.727 92.6069 12.2712C92.3972 12.8088 92.0885 13.2776 91.6813 13.6775C91.281 14.0774 90.7852 14.3921 90.1944 14.6216C89.6105 14.8511 88.9439 14.9658 88.1956 14.9658C87.2769 14.9658 86.4428 14.8019 85.6945 14.4741C84.9461 14.1397 84.3061 13.6906 83.7744 13.1268L84.3258 12.222C84.3785 12.1499 84.441 12.0909 84.5129 12.045C84.5917 11.9925 84.6773 11.9663 84.7689 11.9663C84.8546 11.9663 84.9496 12.0024 85.0545 12.0745C85.1662 12.14 85.2908 12.2253 85.4286 12.3302C85.5665 12.4351 85.724 12.5498 85.9013 12.6744C86.0785 12.7989 86.2789 12.9137 86.5019 13.0186C86.7319 13.1235 86.9913 13.212 87.2798 13.2841C87.5688 13.3497 87.8938 13.3825 88.2546 13.3825C88.7076 13.3825 89.1113 13.3202 89.4658 13.1956C89.8203 13.0711 90.1191 12.8973 90.3618 12.6744C90.6115 12.4449 90.802 12.1728 90.9329 11.8581C91.0644 11.5435 91.1299 11.1927 91.1299 10.8059C91.1299 10.3797 91.0314 10.0323 90.8345 9.76345C90.6444 9.48809 90.3914 9.25861 90.0763 9.07505C89.7612 8.8915 89.4003 8.7374 88.9931 8.61284C88.5865 8.4817 88.1729 8.35061 87.7525 8.21947C87.3325 8.0818 86.9189 7.92445 86.5118 7.74743C86.1051 7.57041 85.7437 7.34093 85.4286 7.05903C85.1135 6.77713 84.8575 6.42635 84.6606 6.00677C84.4705 5.5806 84.375 5.05613 84.375 4.43329C84.375 3.93502 84.4705 3.45314 84.6606 2.98765C84.8575 2.52216 85.1401 2.10913 85.5074 1.74854C85.8816 1.38795 86.338 1.09948 86.8761 0.883124C87.4211 0.66677 88.0449 0.558594 88.747 0.558594C89.5347 0.558594 90.2506 0.68316 90.8936 0.932294C91.5435 1.18143 92.1146 1.54202 92.6069 2.01406L92.1441 2.91881Z",fill:"#F8F9FA"}),t("path",{d:"M108.999 13.2545L108.989 14.8083H100.295V0.71582H108.989V2.26963H102.205V6.95073H107.699V8.44554H102.205V13.2545H108.999Z",fill:"#F8F9FA"})]});try{U.displayName="SynapseLogoName",U.__docgenInfo={description:"",displayName:"SynapseLogoName",props:{}}}catch{}const te={queryTerm:[],booleanQuery:[{key:"node_type",value:"project"}],facetOptions:[{name:"EntityType",maxResultCount:300,sortType:"COUNT"},{name:"Consortium",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedOn",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedBy",maxResultCount:300,sortType:"COUNT"},{name:"CreatedOn",maxResultCount:300,sortType:"COUNT"},{name:"Tissue",maxResultCount:300,sortType:"COUNT"},{name:"CreatedBy",maxResultCount:300,sortType:"COUNT"}],start:0,size:30},F=e=>{const{tooltip:r,iconName:a,onClickOpenNavMenu:o,onClickGoToUrl:s,additionalChildren:h,badgeContent:d,isCurrentlySelectedItem:m=!1,handleDrawerClose:f,handleDrawerOpen:l}=e,S=t(ce,{title:r,placement:"right",children:t(rt,{onClick:m||s?f:()=>{l(o)},className:"SRC-whiteText",selected:m,children:t(Pe,{badgeContent:d,color:"secondary",children:a?C(E,{children:[t(V,{icon:a})," ",h," "]}):h})},a)});return s?t("li",{children:t("a",{href:s,rel:"noopener noreferrer",className:"SRC-whiteText",children:S})}):t("li",{children:S})},re=({initIsOpen:e=!1,signoutCallback:r})=>{const[a,o]=v.useState(e),[s,h]=v.useState(),[d,m]=v.useState(""),[f,l]=v.useState(""),[w,L]=v.useState(!1),{accessToken:S}=ue(),b=!!S,{data:p}=ge(),n=b&&p?p.userProfile:void 0,{data:R}=Te({enabled:b}),D=R==null?void 0:R.totalNumberOfFiles,{data:T}=Se({submissionState:ve.SUBMITTED,sort:[{field:ye.CREATED_ON,direction:we.DESC}]},{enabled:p==null?void 0:p.isARReviewer});let x=(T==null?void 0:T.pages[0].results.length)??0;T!=null&&T.pages[0].nextPageToken&&(x=`${x}+`);const $=async()=>{r?r():(await xe.signOut(),window.location.reload())},u=g=>{o(!0),h(g)},c=()=>{o(!1),h(void 0)},k=g=>{te.queryTerm=g.split(/[ ,]+/),window.location.href=`/#!Search:${encodeURI(JSON.stringify(te))}`};return C(E,{children:[C("div",{className:"SynapseNavDrawer",children:[C(ee,{variant:"permanent",className:`SynapseNavDrawerMenu ${a?"tempDrawerOpen":""}`,children:[t("div",{onClick:c,children:t("a",{className:"synapseIcon",rel:"noopener noreferrer",href:"/#!Home:0","aria-label":"Synapse Home",children:t(W,{})})}),C(J,{children:[b&&n&&C(E,{children:[t(F,{tooltip:"Projects",iconName:"dashboard",onClickOpenNavMenu:0,isCurrentlySelectedItem:s==0,handleDrawerClose:c,handleDrawerOpen:u}),t(F,{tooltip:"Favorites",iconName:"favTwoTone",onClickGoToUrl:`/#!Profile:${n.ownerId}/favorites`,handleDrawerClose:c,handleDrawerOpen:u}),t(F,{tooltip:"Teams",iconName:"peopleTwoTone",onClickGoToUrl:`/#!Profile:${n.ownerId}/teams`,handleDrawerClose:c,handleDrawerOpen:u}),t(F,{tooltip:"Challenges",iconName:"challengesTwoTone",onClickGoToUrl:`/#!Profile:${n.ownerId}/challenges`,handleDrawerClose:c,handleDrawerOpen:u}),t(F,{tooltip:"Download Cart",iconName:"download",onClickGoToUrl:"/#!DownloadCart:0",badgeContent:D,handleDrawerClose:c,handleDrawerOpen:u}),t(F,{tooltip:"Trash Can",iconName:"delete",onClickGoToUrl:"/#!Trash:0",handleDrawerClose:c,handleDrawerOpen:u}),(p==null?void 0:p.isARReviewer)&&t(F,{tooltip:"Data Access Management",iconName:"accessManagement",onClickGoToUrl:"/#!DataAccessManagement:default/Submissions",badgeContent:x,handleDrawerClose:c,handleDrawerOpen:u})]}),t(F,{tooltip:"Search",iconName:"search",onClickGoToUrl:"/#!Search:",handleDrawerClose:c,handleDrawerOpen:u})]}),t("div",{className:"filler"}),C(J,{children:[b&&n&&t(F,{tooltip:"Your Account",onClickOpenNavMenu:6,additionalChildren:t(Ne,{userProfile:n,size:"AVATAR",avatarSize:"SMALL"}),isCurrentlySelectedItem:s==6,handleDrawerClose:c,handleDrawerOpen:u}),!b&&t(F,{tooltip:"Sign in",iconName:"login",onClickGoToUrl:"/#!LoginPlace:0",handleDrawerClose:c,handleDrawerOpen:u}),t(F,{tooltip:"Help",iconName:"helpOutlined",onClickOpenNavMenu:7,isCurrentlySelectedItem:s==7,handleDrawerClose:c,handleDrawerOpen:u})]})]}),C(ee,{variant:"temporary",open:a,className:"SynapseNavContentDrawer",onClose:c,children:[t("div",{className:"synapseLogoNameContainer",children:t(U,{})}),C("div",{className:"navContentContainer",children:[s==0&&C(E,{children:[t("div",{className:"header projectHeader",children:"Projects"}),t(ce,{title:"Create a New Project",placement:"right",children:t("a",{className:"createProjectLink",onClick:()=>{L(!0),c()},children:t(V,{icon:"addCircleOutline"})})}),C("div",{className:"searchInputWithIcon",children:[t(V,{icon:"searchOutlined"}),t(K.Control,{type:"search",placeholder:"Search All Projects",value:d,onChange:g=>{m(g.target.value)},onKeyDown:g=>{g.key==="Enter"&&g.target.value!==""&&(m(""),c(),k(g.target.value))}})]}),C("div",{className:"linkList",onClick:c,children:[t("a",{className:"SRC-whiteText",href:`/#!Profile:${n==null?void 0:n.ownerId}/projects/all`,rel:"noopener noreferrer",children:"All"}),t("a",{className:"SRC-whiteText",href:`/#!Profile:${n==null?void 0:n.ownerId}/projects/created_by_me`,rel:"noopener noreferrer",children:"Created By Me"}),t("a",{className:"SRC-whiteText",href:`/#!Profile:${n==null?void 0:n.ownerId}/projects/favorites`,rel:"noopener noreferrer",children:"Favorite Projects"}),t("a",{className:"SRC-whiteText",href:`/#!Profile:${n==null?void 0:n.ownerId}/projects/shared_directly_with_me`,rel:"noopener noreferrer",children:"Shared With Me"}),t("a",{className:"SRC-whiteText",href:`/#!Profile:${n==null?void 0:n.ownerId}/projects/all_my_team_projects`,rel:"noopener noreferrer",children:"Team Projects"})]})]}),s==6&&C(E,{children:[C("div",{className:"header",children:["Welcome Back,",t("br",{}),n==null?void 0:n.userName,"!"]}),C("div",{className:"linkList",onClick:c,children:[t("a",{className:"SRC-whiteText",href:`/#!Profile:${n==null?void 0:n.ownerId}/profile`,rel:"noopener noreferrer",children:"View Profile"}),t("a",{className:"SRC-whiteText",href:`/#!Profile:${n==null?void 0:n.ownerId}/settings`,rel:"noopener noreferrer",children:"Account Settings"}),t("a",{className:"SRC-whiteText",href:"/#!Following:0",rel:"noopener noreferrer",children:"Following"}),t("a",{className:"SRC-whiteText",onClick:()=>{$()},rel:"noopener noreferrer",children:"Sign Out"})]})]}),s==7&&C(E,{children:[t("div",{className:"header",children:"Help"}),C("div",{className:"searchInputWithIcon",children:[t(V,{icon:"searchOutlined"}),t(K.Control,{type:"search",placeholder:"Search Synapse Documentation",value:f,onChange:g=>{l(g.target.value)},onKeyDown:g=>{g.key==="Enter"&&g.target.value!==""&&(window.open(`https://help.synapse.org/search.html?max=10&s=docs&q=${encodeURI(g.target.value)}`),l(""),c())}})]}),C("div",{className:"linkList",onClick:c,children:[t("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/Getting-Started.2055471150.html",rel:"noopener noreferrer",target:"_blank",children:"Getting Started"}),t("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/",rel:"noopener noreferrer",target:"_blank",children:"Synapse Documentation"}),t("a",{className:"SRC-whiteText",href:"#!SynapseForum:default",rel:"noopener noreferrer",children:"Help Forum"}),t("a",{className:"SRC-whiteText",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",rel:"noopener noreferrer",target:"_blank",children:"Contact Us"})]})]})]})]})]}),t(ke,{onClose:()=>L(!1),isShowingModal:w})]})};try{re.displayName="SynapseNavDrawer",re.__docgenInfo={description:"Displays the Synapse navigational drawer on the left side of the page.  Has links to various areas if logged in.",displayName:"SynapseNavDrawer",props:{initIsOpen:{defaultValue:{value:"false"},description:"",name:"initIsOpen",required:!1,type:{name:"boolean"}},signoutCallback:{defaultValue:null,description:"",name:"signoutCallback",required:!1,type:{name:"(() => void)"}}}}}catch{}export{re as S};
//# sourceMappingURL=SynapseNavDrawer-2ac9f3e1.js.map