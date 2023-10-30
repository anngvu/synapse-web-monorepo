import{g as ht,a as mt,s as F,m as Pt,e as St,_ as nt,f as z,h as vt}from"./styled-9c91c4fe.js";import{_ as f}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as d}from"./index-8db94870.js";import{a as J,j as B}from"./jsx-runtime-095bf462.js";import{B as Lt}from"./ButtonBase-7c3b1b89.js";import"./index-953d39fd.js";import{u as Nt}from"./useTheme-68d5aa8d.js";import{a as Gt}from"./useForkRef-f2aa3d66.js";import{o as $t,d as pt}from"./ownerWindow-2c76219e.js";import{u as rt}from"./Grow-adae5ed8.js";import{u as ft}from"./TransitionGroupContext-f2b81dde.js";import{c as kt}from"./createSvgIcon-fd8a55dc.js";import{o as Jt}from"./isHostComponent-fa76b8d9.js";let U;function Ft(){if(U)return U;const t=document.createElement("div"),o=document.createElement("div");return o.style.width="10px",o.style.height="1px",t.appendChild(o),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function Et(t,o){const r=t.scrollLeft;if(o!=="rtl")return r;switch(Ft()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function Qt(t){return mt("MuiTab",t)}const Zt=ht("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),k=Zt,to=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],oo=t=>{const{classes:o,textColor:r,fullWidth:i,wrapped:n,icon:c,label:p,selected:b,disabled:u}=t,m={root:["root",c&&p&&"labelIcon",`textColor${Pt(r)}`,i&&"fullWidth",n&&"wrapped",b&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return vt(m,Qt,o)},eo=F(Lt,{name:"MuiTab",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.label&&r.icon&&o.labelIcon,o[`textColor${Pt(r.textColor)}`],r.fullWidth&&o.fullWidth,r.wrapped&&o.wrapped]}})(({theme:t,ownerState:o})=>f({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:o.iconPosition==="top"||o.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${k.iconWrapper}`]:f({},o.iconPosition==="top"&&{marginBottom:6},o.iconPosition==="bottom"&&{marginTop:6},o.iconPosition==="start"&&{marginRight:t.spacing(1)},o.iconPosition==="end"&&{marginLeft:t.spacing(1)})},o.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${k.selected}`]:{opacity:1},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${k.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${k.disabled}`]:{color:(t.vars||t).palette.text.disabled}},o.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${k.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${k.disabled}`]:{color:(t.vars||t).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:t.typography.pxToRem(12)})),lo=d.forwardRef(function(o,r){const i=St({props:o,name:"MuiTab"}),{className:n,disabled:c=!1,disableFocusRipple:p=!1,fullWidth:b,icon:u,iconPosition:m="top",indicator:E,label:w,onChange:g,onClick:S,onFocus:A,selected:y,selectionFollowsFocus:v,textColor:H="inherit",value:I,wrapped:st=!1}=i,X=nt(i,to),V=f({},i,{disabled:c,disableFocusRipple:p,selected:y,icon:!!u,iconPosition:m,label:!!w,fullWidth:b,textColor:H,wrapped:st}),D=oo(V),P=u&&w&&d.isValidElement(u)?d.cloneElement(u,{className:z(D.iconWrapper,u.props.className)}):u,Q=M=>{!y&&g&&g(M,I),S&&S(M)},Y=M=>{v&&!y&&g&&g(M,I),A&&A(M)};return J(eo,f({focusRipple:!p,className:z(D.root,n),ref:r,role:"tab","aria-selected":y,disabled:c,onClick:Q,onFocus:Y,ownerState:V,tabIndex:y?0:-1},X,{children:[m==="top"||m==="start"?J(d.Fragment,{children:[P,w]}):J(d.Fragment,{children:[w,P]}),E]}))}),_o=lo,ro=kt(B("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),no=kt(B("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function so(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function ao(t,o,r,i={},n=()=>{}){const{ease:c=so,duration:p=300}=i;let b=null;const u=o[t];let m=!1;const E=()=>{m=!0},w=g=>{if(m){n(new Error("Animation cancelled"));return}b===null&&(b=g);const S=Math.min(1,(g-b)/p);if(o[t]=c(S)*(r-u)+u,S>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(w)};return u===r?(n(new Error("Element already at target position")),E):(requestAnimationFrame(w),E)}const io=["onChange"],co={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function uo(t){const{onChange:o}=t,r=nt(t,io),i=d.useRef(),n=d.useRef(null),c=()=>{i.current=n.current.offsetHeight-n.current.clientHeight};return Gt(()=>{const p=pt(()=>{const u=i.current;c(),u!==i.current&&o(i.current)}),b=$t(n.current);return b.addEventListener("resize",p),()=>{p.clear(),b.removeEventListener("resize",p)}},[o]),d.useEffect(()=>{c(),o(i.current)},[o]),B("div",f({style:co,ref:n},r))}function fo(t){return mt("MuiTabScrollButton",t)}const bo=ht("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),po=bo,ho=["className","slots","slotProps","direction","orientation","disabled"],mo=t=>{const{classes:o,orientation:r,disabled:i}=t;return vt({root:["root",r,i&&"disabled"]},fo,o)},So=F(Lt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.orientation&&o[r.orientation]]}})(({ownerState:t})=>f({width:40,flexShrink:0,opacity:.8,[`&.${po.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),vo=d.forwardRef(function(o,r){var i,n;const c=St({props:o,name:"MuiTabScrollButton"}),{className:p,slots:b={},slotProps:u={},direction:m}=c,E=nt(c,ho),g=Nt().direction==="rtl",S=f({isRtl:g},c),A=mo(S),y=(i=b.StartScrollButtonIcon)!=null?i:ro,v=(n=b.EndScrollButtonIcon)!=null?n:no,H=rt({elementType:y,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),I=rt({elementType:v,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return B(So,f({component:"div",className:z(A.root,p),ref:r,role:null,ownerState:S,tabIndex:null},E,{children:m==="left"?B(y,f({},H)):B(v,f({},I))}))}),go=vo;function xo(t){return mt("MuiTabs",t)}const Co=ht("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),bt=Co,Bo=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Rt=(t,o)=>t===o?t.firstChild:o&&o.nextElementSibling?o.nextElementSibling:t.firstChild,Wt=(t,o)=>t===o?t.lastChild:o&&o.previousElementSibling?o.previousElementSibling:t.lastChild,lt=(t,o,r)=>{let i=!1,n=r(t,o);for(;n;){if(n===t.firstChild){if(i)return;i=!0}const c=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||c)n=r(t,n);else{n.focus();return}}},wo=t=>{const{vertical:o,fixed:r,hideScrollbar:i,scrollableX:n,scrollableY:c,centered:p,scrollButtonsHideMobile:b,classes:u}=t;return vt({root:["root",o&&"vertical"],scroller:["scroller",r&&"fixed",i&&"hideScrollbar",n&&"scrollableX",c&&"scrollableY"],flexContainer:["flexContainer",o&&"flexContainerVertical",p&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},xo,u)},yo=F("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[{[`& .${bt.scrollButtons}`]:o.scrollButtons},{[`& .${bt.scrollButtons}`]:r.scrollButtonsHideMobile&&o.scrollButtonsHideMobile},o.root,r.vertical&&o.vertical]}})(({ownerState:t,theme:o})=>f({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${bt.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}})),To=F("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.scroller,r.fixed&&o.fixed,r.hideScrollbar&&o.hideScrollbar,r.scrollableX&&o.scrollableX,r.scrollableY&&o.scrollableY]}})(({ownerState:t})=>f({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Io=F("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.flexContainer,r.vertical&&o.flexContainerVertical,r.centered&&o.centered]}})(({ownerState:t})=>f({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Mo=F("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,o)=>o.indicator})(({ownerState:t,theme:o})=>f({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(o.vars||o).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Eo=F(uo,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),zt={},Ro=d.forwardRef(function(o,r){const i=St({props:o,name:"MuiTabs"}),n=Nt(),c=n.direction==="rtl",{"aria-label":p,"aria-labelledby":b,action:u,centered:m=!1,children:E,className:w,component:g="div",allowScrollButtonsMobile:S=!1,indicatorColor:A="primary",onChange:y,orientation:v="horizontal",ScrollButtonComponent:H=go,scrollButtons:I="auto",selectionFollowsFocus:st,slots:X={},slotProps:V={},TabIndicatorProps:D={},TabScrollButtonProps:P={},textColor:Q="primary",value:Y,variant:M="standard",visibleScrollbar:at=!1}=i,At=nt(i,Bo),R=M==="scrollable",x=v==="vertical",O=x?"scrollTop":"scrollLeft",Z=x?"top":"left",tt=x?"bottom":"right",it=x?"clientHeight":"clientWidth",j=x?"height":"width",L=f({},i,{component:g,allowScrollButtonsMobile:S,indicatorColor:A,orientation:v,vertical:x,scrollButtons:I,textColor:Q,variant:M,visibleScrollbar:at,fixed:!R,hideScrollbar:R&&!at,scrollableX:R&&!x,scrollableY:R&&x,centered:m&&!R,scrollButtonsHideMobile:!S}),W=wo(L),Ht=rt({elementType:X.StartScrollButtonIcon,externalSlotProps:V.startScrollButtonIcon,ownerState:L}),Xt=rt({elementType:X.EndScrollButtonIcon,externalSlotProps:V.endScrollButtonIcon,ownerState:L}),[gt,Dt]=d.useState(!1),[N,xt]=d.useState(zt),[_,Yt]=d.useState({start:!1,end:!1}),[Ct,_t]=d.useState({overflow:"hidden",scrollbarWidth:0}),Bt=new Map,T=d.useRef(null),q=d.useRef(null),wt=()=>{const e=T.current;let l;if(e){const a=e.getBoundingClientRect();l={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:Et(e,n.direction),scrollWidth:e.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let s;if(e&&Y!==!1){const a=q.current.children;if(a.length>0){const h=a[Bt.get(Y)];s=h?h.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:s}},G=ft(()=>{const{tabsMeta:e,tabMeta:l}=wt();let s=0,a;if(x)a="top",l&&e&&(s=l.top-e.top+e.scrollTop);else if(a=c?"right":"left",l&&e){const C=c?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;s=(c?-1:1)*(l[a]-e[a]+C)}const h={[a]:s,[j]:l?l[j]:0};if(isNaN(N[a])||isNaN(N[j]))xt(h);else{const C=Math.abs(N[a]-h[a]),K=Math.abs(N[j]-h[j]);(C>=1||K>=1)&&xt(h)}}),ct=(e,{animation:l=!0}={})=>{l?ao(O,T.current,e,{duration:n.transitions.duration.standard}):T.current[O]=e},yt=e=>{let l=T.current[O];x?l+=e:(l+=e*(c?-1:1),l*=c&&Ft()==="reverse"?-1:1),ct(l)},Tt=()=>{const e=T.current[it];let l=0;const s=Array.from(q.current.children);for(let a=0;a<s.length;a+=1){const h=s[a];if(l+h[it]>e){a===0&&(l=e);break}l+=h[it]}return l},Kt=()=>{yt(-1*Tt())},Ut=()=>{yt(Tt())},Vt=d.useCallback(e=>{_t({overflow:null,scrollbarWidth:e})},[]),Ot=()=>{const e={};e.scrollbarSizeListener=R?B(Eo,{onChange:Vt,className:z(W.scrollableX,W.hideScrollbar)}):null;const l=_.start||_.end,s=R&&(I==="auto"&&l||I===!0);return e.scrollButtonStart=s?B(H,f({slots:{StartScrollButtonIcon:X.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Ht},orientation:v,direction:c?"right":"left",onClick:Kt,disabled:!_.start},P,{className:z(W.scrollButtons,P.className)})):null,e.scrollButtonEnd=s?B(H,f({slots:{EndScrollButtonIcon:X.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Xt},orientation:v,direction:c?"left":"right",onClick:Ut,disabled:!_.end},P,{className:z(W.scrollButtons,P.className)})):null,e},It=ft(e=>{const{tabsMeta:l,tabMeta:s}=wt();if(!(!s||!l)){if(s[Z]<l[Z]){const a=l[O]+(s[Z]-l[Z]);ct(a,{animation:e})}else if(s[tt]>l[tt]){const a=l[O]+(s[tt]-l[tt]);ct(a,{animation:e})}}}),$=ft(()=>{if(R&&I!==!1){const{scrollTop:e,scrollHeight:l,clientHeight:s,scrollWidth:a,clientWidth:h}=T.current;let C,K;if(x)C=e>1,K=e<l-s-1;else{const et=Et(T.current,n.direction);C=c?et<a-h-1:et>1,K=c?et>1:et<a-h-1}(C!==_.start||K!==_.end)&&Yt({start:C,end:K})}});d.useEffect(()=>{const e=pt(()=>{T.current&&(G(),$())}),l=$t(T.current);l.addEventListener("resize",e);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(e),Array.from(q.current.children).forEach(a=>{s.observe(a)})),()=>{e.clear(),l.removeEventListener("resize",e),s&&s.disconnect()}},[G,$]);const dt=d.useMemo(()=>pt(()=>{$()}),[$]);d.useEffect(()=>()=>{dt.clear()},[dt]),d.useEffect(()=>{Dt(!0)},[]),d.useEffect(()=>{G(),$()}),d.useEffect(()=>{It(zt!==N)},[It,N]),d.useImperativeHandle(u,()=>({updateIndicator:G,updateScrollButtons:$}),[G,$]);const Mt=B(Mo,f({},D,{className:z(W.indicator,D.className),ownerState:L,style:f({},N,D.style)}));let ot=0;const jt=d.Children.map(E,e=>{if(!d.isValidElement(e))return null;const l=e.props.value===void 0?ot:e.props.value;Bt.set(l,ot);const s=l===Y;return ot+=1,d.cloneElement(e,f({fullWidth:M==="fullWidth",indicator:s&&!gt&&Mt,selected:s,selectionFollowsFocus:st,onChange:y,textColor:Q,value:l},ot===1&&Y===!1&&!e.props.tabIndex?{tabIndex:0}:{}))}),qt=e=>{const l=q.current,s=Jt(l).activeElement;if(s.getAttribute("role")!=="tab")return;let h=v==="horizontal"?"ArrowLeft":"ArrowUp",C=v==="horizontal"?"ArrowRight":"ArrowDown";switch(v==="horizontal"&&c&&(h="ArrowRight",C="ArrowLeft"),e.key){case h:e.preventDefault(),lt(l,s,Wt);break;case C:e.preventDefault(),lt(l,s,Rt);break;case"Home":e.preventDefault(),lt(l,null,Rt);break;case"End":e.preventDefault(),lt(l,null,Wt);break}},ut=Ot();return J(yo,f({className:z(W.root,w),ownerState:L,ref:r,as:g},At,{children:[ut.scrollButtonStart,ut.scrollbarSizeListener,J(To,{className:W.scroller,ownerState:L,style:{overflow:Ct.overflow,[x?`margin${c?"Left":"Right"}`:"marginBottom"]:at?void 0:-Ct.scrollbarWidth},ref:T,onScroll:dt,children:[B(Io,{"aria-label":p,"aria-labelledby":b,"aria-orientation":v==="vertical"?"vertical":null,className:W.flexContainer,ownerState:L,onKeyDown:qt,ref:q,role:"tablist",children:jt}),gt&&Mt]}),ut.scrollButtonEnd]}))}),Ko=Ro;export{no as K,Ko as T,_o as a,ro as b,bt as t};
//# sourceMappingURL=Tabs-9b8cc802.js.map