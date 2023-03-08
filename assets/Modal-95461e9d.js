import{_ as X}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as g}from"./extends-98964cd2.js";import{r as c}from"./index-f1f749bf.js";import{g as ce,d as de,i as ue,s as J,e as fe,h as ve}from"./styled-42ab246b.js";import{a as pe,j as A}from"./jsx-runtime-670450c2.js";import{F as Re}from"./Fade-49f10167.js";import{g as Pe}from"./getScrollbarSize-ac846fe6.js";import{o as D,i as Te}from"./isHostComponent-fa76b8d9.js";import{o as Q}from"./ownerWindow-12ded16b.js";import{u as me}from"./useForkRef-dd8a6e5c.js";import{u as ne}from"./useIsFocusVisible-83eed526.js";import{e as re,P as Se,f as se}from"./Clear-16219090.js";function ie(...e){return e.reduce((t,n)=>n==null?t:function(...s){t.apply(this,s),n.apply(this,s)},()=>{})}const Ce=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ie(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Me(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Fe(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Me(e))}function Ne(e){const t=[],n=[];return Array.from(e.querySelectorAll(Ce)).forEach((o,s)=>{const r=Ie(o);r===-1||!Fe(o)||(r===0?t.push(o):n.push({documentOrder:s,tabIndex:r,node:o}))}),n.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function we(){return!0}function Ae(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:r=Ne,isEnabled:i=we,open:l}=e,d=c.useRef(!1),k=c.useRef(null),y=c.useRef(null),p=c.useRef(null),x=c.useRef(null),E=c.useRef(!1),u=c.useRef(null),I=me(t.ref,u),v=c.useRef(null);c.useEffect(()=>{!l||!u.current||(E.current=!n)},[n,l]),c.useEffect(()=>{if(!l||!u.current)return;const a=D(u.current);return u.current.contains(a.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex","-1"),E.current&&u.current.focus()),()=>{s||(p.current&&p.current.focus&&(d.current=!0,p.current.focus()),p.current=null)}},[l]),c.useEffect(()=>{if(!l||!u.current)return;const a=D(u.current),f=P=>{const{current:w}=u;if(w!==null){if(!a.hasFocus()||o||!i()||d.current){d.current=!1;return}if(!w.contains(a.activeElement)){if(P&&x.current!==P.target||a.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!E.current)return;let M=[];if((a.activeElement===k.current||a.activeElement===y.current)&&(M=r(u.current)),M.length>0){var S,C;const L=Boolean(((S=v.current)==null?void 0:S.shiftKey)&&((C=v.current)==null?void 0:C.key)==="Tab"),B=M[0],F=M[M.length-1];typeof B!="string"&&typeof F!="string"&&(L?F.focus():B.focus())}else w.focus()}}},h=P=>{v.current=P,!(o||!i()||P.key!=="Tab")&&a.activeElement===u.current&&P.shiftKey&&(d.current=!0,y.current&&y.current.focus())};a.addEventListener("focusin",f),a.addEventListener("keydown",h,!0);const R=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&f(null)},50);return()=>{clearInterval(R),a.removeEventListener("focusin",f),a.removeEventListener("keydown",h,!0)}},[n,o,s,i,l,r]);const N=a=>{p.current===null&&(p.current=a.relatedTarget),E.current=!0,x.current=a.target;const f=t.props.onFocus;f&&f(a)},b=a=>{p.current===null&&(p.current=a.relatedTarget),E.current=!0};return pe(c.Fragment,{children:[A("div",{tabIndex:l?0:-1,onFocus:b,ref:k,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:I,onFocus:N}),A("div",{tabIndex:l?0:-1,onFocus:b,ref:y,"data-testid":"sentinelEnd"})]})}function Be(e){const t=D(e);return t.body===e?Q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ae(e){return parseInt(Q(e).getComputedStyle(e).paddingRight,10)||0}function Oe(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function le(e,t,n,o,s){const r=[t,n,...o];[].forEach.call(e.children,i=>{const l=r.indexOf(i)===-1,d=!Oe(i);l&&d&&K(i,s)})}function V(e,t){let n=-1;return e.some((o,s)=>t(o)?(n=s,!0):!1),n}function De(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Be(o)){const i=Pe(D(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${ae(o)+i}px`;const l=D(o).querySelectorAll(".mui-fixed");[].forEach.call(l,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${ae(d)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=D(o).body;else{const i=o.parentElement,l=Q(o);r=(i==null?void 0:i.nodeName)==="HTML"&&l.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:l})=>{r?i.style.setProperty(l,r):i.style.removeProperty(l)})}}function Le(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Ue{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=Le(n);le(n,t.mount,t.modalRef,s,!0);const r=V(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),o)}mount(t,n){const o=V(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[o];s.restore||(s.restore=De(s,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=V(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&K(t.modalRef,n),le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function _e(e){return ce("MuiModal",e)}de("MuiModal",["root","hidden"]);const $e=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],He=e=>{const{open:t,exited:n,classes:o}=e;return ue({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},_e,o)};function Ke(e){return typeof e=="function"?e():e}function je(e){return e?e.props.hasOwnProperty("in"):!1}const We=new Ue,ze=c.forwardRef(function(t,n){var o,s;const{children:r,classes:i,closeAfterTransition:l=!1,component:d,container:k,disableAutoFocus:y=!1,disableEnforceFocus:p=!1,disableEscapeKeyDown:x=!1,disablePortal:E=!1,disableRestoreFocus:u=!1,disableScrollLock:I=!1,hideBackdrop:v=!1,keepMounted:N=!1,manager:b=We,onBackdropClick:a,onClose:f,onKeyDown:h,open:R,onTransitionEnter:P,onTransitionExited:w,slotProps:S={},slots:C={}}=t,M=X(t,$e),[L,B]=c.useState(!R),F=c.useRef({}),U=c.useRef(null),T=c.useRef(null),W=me(T,n),O=je(r),$=(o=t["aria-hidden"])!=null?o:!0,z=()=>D(U.current),_=()=>(F.current.modalRef=T.current,F.current.mountNode=U.current,F.current),Z=()=>{b.mount(_(),{disableScrollLock:I}),T.current&&(T.current.scrollTop=0)},ee=ne(()=>{const m=Ke(k)||z().body;b.add(_(),m),T.current&&Z()}),Y=c.useCallback(()=>b.isTopModal(_()),[b]),be=ne(m=>{U.current=m,!(!m||!T.current)&&(R&&Y()?Z():K(T.current,$))}),H=c.useCallback(()=>{b.remove(_(),$)},[b,$]);c.useEffect(()=>()=>{H()},[H]),c.useEffect(()=>{R?ee():(!O||!l)&&H()},[R,H,O,l,ee]);const q=g({},t,{classes:i,closeAfterTransition:l,disableAutoFocus:y,disableEnforceFocus:p,disableEscapeKeyDown:x,disablePortal:E,disableRestoreFocus:u,disableScrollLock:I,exited:L,hideBackdrop:v,keepMounted:N}),te=He(q),he=()=>{B(!1),P&&P()},ge=()=>{B(!0),w&&w(),l&&H()},xe=m=>{m.target===m.currentTarget&&(a&&a(m),f&&f(m,"backdropClick"))},Ee=m=>{h&&h(m),!(m.key!=="Escape"||!Y())&&(x||(m.stopPropagation(),f&&f(m,"escapeKeyDown")))},j={};r.props.tabIndex===void 0&&(j.tabIndex="-1"),O&&(j.onEnter=ie(he,r.props.onEnter),j.onExited=ie(ge,r.props.onExited));const oe=(s=d??C.root)!=null?s:"div",ke=re({elementType:oe,externalSlotProps:S.root,externalForwardedProps:M,additionalProps:{ref:W,role:"presentation",onKeyDown:Ee},className:te.root,ownerState:q}),G=C.backdrop,ye=re({elementType:G,externalSlotProps:S.backdrop,additionalProps:{"aria-hidden":!0,onClick:xe,open:R},className:te.backdrop,ownerState:q});return!N&&!R&&(!O||L)?null:A(Se,{ref:be,container:k,disablePortal:E,children:pe(oe,g({},ke,{children:[!v&&G?A(G,g({},ye)):null,A(Ae,{disableEnforceFocus:p,disableAutoFocus:y,disableRestoreFocus:u,isEnabled:Y,open:R,children:c.cloneElement(r,j)})]}))})}),Ye=ze;function qe(e){return ce("MuiBackdrop",e)}de("MuiBackdrop",["root","invisible"]);const Ge=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],Ve=e=>{const{classes:t,invisible:n}=e;return ue({root:["root",n&&"invisible"]},qe,t)},Xe=J("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>g({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Je=c.forwardRef(function(t,n){var o,s,r;const i=fe({props:t,name:"MuiBackdrop"}),{children:l,component:d="div",components:k={},componentsProps:y={},className:p,invisible:x=!1,open:E,slotProps:u={},slots:I={},transitionDuration:v,TransitionComponent:N=Re}=i,b=X(i,Ge),a=g({},i,{component:d,invisible:x}),f=Ve(a),h=(o=u.root)!=null?o:y.root;return A(N,g({in:E,timeout:v},b,{children:A(Xe,g({"aria-hidden":!0},h,{as:(s=(r=I.root)!=null?r:k.Root)!=null?s:d,className:ve(f.root,p,h==null?void 0:h.className),ownerState:g({},a,h==null?void 0:h.ownerState),classes:f,ref:n,children:l}))}))}),Qe=Je,Ze=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],et=e=>e.classes,tt=J("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>g({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),ot=J(Qe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),nt=c.forwardRef(function(t,n){var o,s,r,i,l,d;const k=fe({name:"MuiModal",props:t}),{BackdropComponent:y=ot,BackdropProps:p,closeAfterTransition:x=!1,children:E,component:u,components:I={},componentsProps:v={},disableAutoFocus:N=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:a=!1,disablePortal:f=!1,disableRestoreFocus:h=!1,disableScrollLock:R=!1,hideBackdrop:P=!1,keepMounted:w=!1,slotProps:S,slots:C,theme:M}=k,L=X(k,Ze),[B,F]=c.useState(!0),U={closeAfterTransition:x,disableAutoFocus:N,disableEnforceFocus:b,disableEscapeKeyDown:a,disablePortal:f,disableRestoreFocus:h,disableScrollLock:R,hideBackdrop:P,keepMounted:w},T=g({},k,U,{exited:B}),W=et(T),O=(o=(s=C==null?void 0:C.root)!=null?s:I.Root)!=null?o:tt,$=(r=(i=C==null?void 0:C.backdrop)!=null?i:I.Backdrop)!=null?r:y,z=(l=S==null?void 0:S.root)!=null?l:v.root,_=(d=S==null?void 0:S.backdrop)!=null?d:v.backdrop;return A(Ye,g({slots:{root:O,backdrop:$},slotProps:{root:()=>g({},se(z,T),!Te(O)&&{as:u,theme:M}),backdrop:()=>g({},p,se(_,T))},onTransitionEnter:()=>F(!1),onTransitionExited:()=>F(!0),ref:n},L,{classes:W},U,{children:E}))}),ht=nt;export{Qe as B,Ae as F,ht as M};
//# sourceMappingURL=Modal-95461e9d.js.map
