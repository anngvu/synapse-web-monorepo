import{a as be,j as b,F as Xe}from"./jsx-runtime-ad672792.js";import{r as m,R as f}from"./index-f1f749bf.js";import{_ as J}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as g}from"./extends-98964cd2.js";import{u as ze,c as Q,B as fr}from"./Button-7d415009.js";import{a as Ke,o as ye,u as R,l as Ye,c as qe,r as Qe,b as mr}from"./createWithBsPrefix-e09f51dd.js";import{u as pr,c as Je,a as vr}from"./contains-60f9209b.js";import{u as hr,a as tr}from"./useWaitForDOMRef-b2ebcbef.js";import{s as Y,C as gr,d as br,F as ir,t as yr}from"./divWithClassName-1aeead00.js";import{p as c}from"./index-4d501b15.js";import{R as Er}from"./index-96c5f47c.js";import{u as Cr,q as $}from"./usePrevious-9f30f8c7.js";import{a as xr,r as kr}from"./removeClass-164fd327.js";import{_ as Nr}from"./inheritsLoose-d541526f.js";import{T as Pe}from"./Typography-f5dd8748.js";import{g as wr,a as Sr,s as xe,x as M,u as Mr,c as Tr,b as Rr,Q as Or,R as Fr}from"./styled-8837a0b3.js";import{u as Br}from"./useTheme-c4678cf9.js";import{k as Ue,c as je}from"./emotion-react.browser.esm-a8a50fc7.js";var ge;function Ee(e){if((!ge&&ge!==0||e)&&Ke){var r=document.createElement("div");r.style.position="absolute",r.style.top="-9999px",r.style.width="50px",r.style.height="50px",r.style.overflow="scroll",document.body.appendChild(r),ge=r.offsetWidth-r.clientWidth,document.body.removeChild(r)}return ge}function De(e){e===void 0&&(e=ye());try{var r=e.activeElement;return!r||!r.nodeName?null:r}catch{return e.body}}function Pr(e){return"nodeType"in e&&e.nodeType===document.DOCUMENT_NODE}function Le(e){return"window"in e&&e.window===e?e:Pr(e)&&e.defaultView||!1}function Dr(e){return e&&e.tagName.toLowerCase()==="body"}function Ir(e){var r=Le(e)?ye():ye(e),a=Le(e)||r.defaultView;return r.body.clientWidth<a.innerWidth}function $r(e){var r=Le(e);return r||Dr(e)?Ir(e):e.scrollHeight>e.clientHeight}var Lr=["template","script","style"],Hr=function(r){var a=r.nodeType,n=r.tagName;return a===1&&Lr.indexOf(n.toLowerCase())===-1},sr=function(r,a,n){[].forEach.call(r.children,function(o){a.indexOf(o)===-1&&Hr(o)&&n(o)})};function Ce(e,r){r&&(e?r.setAttribute("aria-hidden","true"):r.removeAttribute("aria-hidden"))}function Ar(e,r){var a=r.dialog,n=r.backdrop;sr(e,[a,n],function(o){return Ce(!0,o)})}function zr(e,r){var a=r.dialog,n=r.backdrop;sr(e,[a,n],function(o){return Ce(!1,o)})}function Kr(e,r){var a=-1;return e.some(function(n,o){return r(n,o)?(a=o,!0):!1}),a}var ke=function(){function e(a){var n=a===void 0?{}:a,o=n.hideSiblingNodes,t=o===void 0?!0:o,i=n.handleContainerOverflow,s=i===void 0?!0:i;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=t,this.handleContainerOverflow=s,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=Ee()}var r=e.prototype;return r.isContainerOverflowing=function(n){var o=this.data[this.containerIndexFromModal(n)];return o&&o.overflowing},r.containerIndexFromModal=function(n){return Kr(this.data,function(o){return o.modals.indexOf(n)!==-1})},r.setContainerStyle=function(n,o){var t={overflow:"hidden"};n.style={overflow:o.style.overflow,paddingRight:o.style.paddingRight},n.overflowing&&(t.paddingRight=parseInt(Y(o,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Y(o,t)},r.removeContainerStyle=function(n,o){Object.assign(o.style,n.style)},r.add=function(n,o,t){var i=this.modals.indexOf(n),s=this.containers.indexOf(o);if(i!==-1)return i;if(i=this.modals.length,this.modals.push(n),this.hideSiblingNodes&&Ar(o,n),s!==-1)return this.data[s].modals.push(n),i;var d={modals:[n],classes:t?t.split(/\s+/):[],overflowing:$r(o)};return this.handleContainerOverflow&&this.setContainerStyle(d,o),d.classes.forEach(xr.bind(null,o)),this.containers.push(o),this.data.push(d),i},r.remove=function(n){var o=this.modals.indexOf(n);if(o!==-1){var t=this.containerIndexFromModal(n),i=this.data[t],s=this.containers[t];if(i.modals.splice(i.modals.indexOf(n),1),this.modals.splice(o,1),i.modals.length===0)i.classes.forEach(kr.bind(null,s)),this.handleContainerOverflow&&this.removeContainerStyle(i,s),this.hideSiblingNodes&&zr(s,n),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var d=i.modals[i.modals.length-1],y=d.backdrop,v=d.dialog;Ce(!1,v),Ce(!1,y)}}},r.isTopModal=function(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n},e}(),Ie;function qr(){return Ie||(Ie=new ke),Ie}function Ur(e){var r=e||qr(),a=m.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:function(o,t){return r.add(a.current,o,t)},remove:function(){return r.remove(a.current)},isTopModal:function(){return r.isTopModal(a.current)},setDialogRef:m.useCallback(function(n){a.current.dialog=n},[]),setBackdropRef:m.useCallback(function(n){a.current.backdrop=n},[])})}var Ve=m.forwardRef(function(e,r){var a=e.show,n=a===void 0?!1:a,o=e.role,t=o===void 0?"dialog":o,i=e.className,s=e.style,d=e.children,y=e.backdrop,v=y===void 0?!0:y,w=e.keyboard,B=w===void 0?!0:w,E=e.onBackdropClick,x=e.onEscapeKeyDown,C=e.transition,Z=e.backdropTransition,_=e.autoFocus,P=_===void 0?!0:_,ee=e.enforceFocus,Ne=ee===void 0?!0:ee,re=e.restoreFocus,we=re===void 0?!0:re,Se=e.restoreFocusOptions,ae=e.renderDialog,A=e.renderBackdrop,Me=A===void 0?function(u){return f.createElement("div",u)}:A,ne=e.manager,oe=e.container,te=e.containerClassName,z=e.onShow,K=e.onHide,ie=K===void 0?function(){}:K,se=e.onExit,le=e.onExited,Te=e.onExiting,de=e.onEnter,Re=e.onEntering,ce=e.onEntered,q=J(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),S=hr(oe),p=Ur(ne),ue=pr(),k=Cr(n),fe=m.useState(!n),T=fe[0],U=fe[1],O=m.useRef(null);m.useImperativeHandle(r,function(){return p},[p]),Ke&&!k&&n&&(O.current=De()),!C&&!n&&!T?U(!0):n&&T&&U(!1);var j=R(function(){if(p.add(S,te),W.current=Ye(document,"keydown",me),V.current=Ye(document,"focus",function(){return setTimeout(Oe)},!0),z&&z(),P){var u=De(document);p.dialog&&u&&!Je(p.dialog,u)&&(O.current=u,p.dialog.focus())}}),F=R(function(){if(p.remove(),W.current==null||W.current(),V.current==null||V.current(),we){var u;(u=O.current)==null||u.focus==null||u.focus(Se),O.current=null}});m.useEffect(function(){!n||!S||j()},[n,S,j]),m.useEffect(function(){T&&F()},[T,F]),tr(function(){F()});var Oe=R(function(){if(!(!Ne||!ue()||!p.isTopModal())){var u=De();p.dialog&&u&&!Je(p.dialog,u)&&p.dialog.focus()}}),Fe=R(function(u){u.target===u.currentTarget&&(E==null||E(u),v===!0&&ie())}),me=R(function(u){B&&u.keyCode===27&&p.isTopModal()&&(x==null||x(u),u.defaultPrevented||ie())}),V=m.useRef(),W=m.useRef(),Be=function(){U(!0);for(var he=arguments.length,h=new Array(he),l=0;l<he;l++)h[l]=arguments[l];le==null||le.apply(void 0,h)},G=C;if(!S||!(n||G&&!T))return null;var pe=g({role:t,ref:p.setDialogRef,"aria-modal":t==="dialog"?!0:void 0},q,{style:s,className:i,tabIndex:-1}),X=ae?ae(pe):f.createElement("div",pe,f.cloneElement(d,{role:"document"}));G&&(X=f.createElement(G,{appear:!0,unmountOnExit:!0,in:!!n,onExit:se,onExiting:Te,onExited:Be,onEnter:de,onEntering:Re,onEntered:ce},X));var D=null;if(v){var ve=Z;D=Me({ref:p.setBackdropRef,onClick:Fe}),ve&&(D=f.createElement(ve,{appear:!0,in:!!n},D))}return f.createElement(f.Fragment,null,Er.createPortal(f.createElement(f.Fragment,null,D,X),S))}),jr={show:c.bool,container:c.any,onShow:c.func,onHide:c.func,backdrop:c.oneOfType([c.bool,c.oneOf(["static"])]),renderDialog:c.func,renderBackdrop:c.func,onEscapeKeyDown:c.func,onBackdropClick:c.func,containerClassName:c.string,keyboard:c.bool,transition:c.elementType,backdropTransition:c.elementType,autoFocus:c.bool,enforceFocus:c.bool,restoreFocus:c.bool,restoreFocusOptions:c.shape({preventScroll:c.bool}),onEnter:c.func,onEntering:c.func,onEntered:c.func,onExit:c.func,onExiting:c.func,onExited:c.func,manager:c.instanceOf(ke)};Ve.displayName="Modal";Ve.propTypes=jr;const Vr=Object.assign(Ve,{Manager:ke});var L={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},Wr=function(e){Nr(r,e);function r(){return e.apply(this,arguments)||this}var a=r.prototype;return a.adjustAndStore=function(o,t,i){var s,d=t.style[o];t.dataset[o]=d,Y(t,(s={},s[o]=parseFloat(Y(t,o))+i+"px",s))},a.restore=function(o,t){var i=t.dataset[o];if(i!==void 0){var s;delete t.dataset[o],Y(t,(s={},s[o]=i,s))}},a.setContainerStyle=function(o,t){var i=this;if(e.prototype.setContainerStyle.call(this,o,t),!!o.overflowing){var s=Ee();$(t,L.FIXED_CONTENT).forEach(function(d){return i.adjustAndStore("paddingRight",d,s)}),$(t,L.STICKY_CONTENT).forEach(function(d){return i.adjustAndStore("marginRight",d,-s)}),$(t,L.NAVBAR_TOGGLER).forEach(function(d){return i.adjustAndStore("marginRight",d,s)})}},a.removeContainerStyle=function(o,t){var i=this;e.prototype.removeContainerStyle.call(this,o,t),$(t,L.FIXED_CONTENT).forEach(function(s){return i.restore("paddingRight",s)}),$(t,L.STICKY_CONTENT).forEach(function(s){return i.restore("marginRight",s)}),$(t,L.NAVBAR_TOGGLER).forEach(function(s){return i.restore("marginRight",s)})},r}(ke);const Gr=qe("modal-body");var Xr=f.createContext({onHide:function(){}});const lr=Xr;var Yr=["bsPrefix","className","contentClassName","centered","size","children","scrollable"],dr=f.forwardRef(function(e,r){var a=e.bsPrefix,n=e.className,o=e.contentClassName,t=e.centered,i=e.size,s=e.children,d=e.scrollable,y=J(e,Yr);a=ze(a,"modal");var v=a+"-dialog";return f.createElement("div",g({},y,{ref:r,className:Q(v,n,i&&a+"-"+i,t&&v+"-centered",d&&v+"-scrollable")}),f.createElement("div",{className:Q(a+"-content",o)},s))});dr.displayName="ModalDialog";const cr=dr,Qr=qe("modal-footer");var Jr=["bsPrefix","closeLabel","closeButton","onHide","className","children"],Zr={closeLabel:"Close",closeButton:!1},We=f.forwardRef(function(e,r){var a=e.bsPrefix,n=e.closeLabel,o=e.closeButton,t=e.onHide,i=e.className,s=e.children,d=J(e,Jr);a=ze(a,"modal-header");var y=m.useContext(lr),v=R(function(){y&&y.onHide(),t&&t()});return f.createElement("div",g({ref:r},d,{className:Q(i,a)}),s,o&&f.createElement(gr,{label:n,onClick:v}))});We.displayName="ModalHeader";We.defaultProps=Zr;const _r=We;var ea=br("h4");const ra=qe("modal-title",{Component:ea});var aa=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],$e,na={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:cr};function oa(e){return f.createElement(ir,g({},e,{timeout:null}))}function ta(e){return f.createElement(ir,g({},e,{timeout:null}))}var N=f.forwardRef(function(e,r){var a=e.bsPrefix,n=e.className,o=e.style,t=e.dialogClassName,i=e.contentClassName,s=e.children,d=e.dialogAs,y=e["aria-labelledby"],v=e["aria-describedby"],w=e["aria-label"],B=e.show,E=e.animation,x=e.backdrop,C=e.keyboard,Z=e.onEscapeKeyDown,_=e.onShow,P=e.onHide,ee=e.container,Ne=e.autoFocus,re=e.enforceFocus,we=e.restoreFocus,Se=e.restoreFocusOptions,ae=e.onEntered,A=e.onExit,Me=e.onExiting,ne=e.onEnter,oe=e.onEntering,te=e.onExited,z=e.backdropClassName,K=e.manager,ie=J(e,aa),se=m.useState({}),le=se[0],Te=se[1],de=m.useState(!1),Re=de[0],ce=de[1],q=m.useRef(!1),S=m.useRef(!1),p=m.useRef(null),ue=vr(),k=ue[0],fe=ue[1],T=R(P);a=ze(a,"modal"),m.useImperativeHandle(r,function(){return{get _modal(){return k}}},[k]);var U=m.useMemo(function(){return{onHide:T}},[T]);function O(){return K||($e||($e=new Wr),$e)}function j(h){if(Ke){var l=O().isContainerOverflowing(k),I=h.scrollHeight>ye(h).documentElement.clientHeight;Te({paddingRight:l&&!I?Ee():void 0,paddingLeft:!l&&I?Ee():void 0})}}var F=R(function(){k&&j(k.dialog)});tr(function(){Qe(window,"resize",F),p.current&&p.current()});var Oe=function(){q.current=!0},Fe=function(l){q.current&&k&&l.target===k.dialog&&(S.current=!0),q.current=!1},me=function(){ce(!0),p.current=yr(k.dialog,function(){ce(!1)})},V=function(l){l.target===l.currentTarget&&me()},W=function(l){if(x==="static"){V(l);return}if(S.current||l.target!==l.currentTarget){S.current=!1;return}P==null||P()},Be=function(l){!C&&x==="static"?(l.preventDefault(),me()):C&&Z&&Z(l)},G=function(l,I){l&&(l.style.display="block",j(l)),ne==null||ne(l,I)},pe=function(l){p.current==null||p.current(),A==null||A(l)},X=function(l,I){oe==null||oe(l,I),mr(window,"resize",F)},D=function(l){l&&(l.style.display=""),te==null||te(l),Qe(window,"resize",F)},ve=m.useCallback(function(h){return f.createElement("div",g({},h,{className:Q(a+"-backdrop",z,!E&&"show")}))},[E,z,a]),u=g({},o,le);E||(u.display="block");var he=function(l){return f.createElement("div",g({role:"dialog"},l,{style:u,className:Q(n,a,Re&&a+"-static"),onClick:x?W:void 0,onMouseUp:Fe,"aria-label":w,"aria-labelledby":y,"aria-describedby":v}),f.createElement(d,g({},ie,{onMouseDown:Oe,className:t,contentClassName:i}),s))};return f.createElement(lr.Provider,{value:U},f.createElement(Vr,{show:B,ref:fe,backdrop:x,container:ee,keyboard:!0,autoFocus:Ne,enforceFocus:re,restoreFocus:we,restoreFocusOptions:Se,onEscapeKeyDown:Be,onShow:_,onHide:P,onEnter:G,onEntering:X,onEntered:ae,onExit:pe,onExiting:Me,onExited:D,manager:O(),containerClassName:a+"-open",transition:E?oa:void 0,backdropTransition:E?ta:void 0,renderBackdrop:ve,renderDialog:he}))});N.displayName="Modal";N.defaultProps=na;N.Body=Gr;N.Header=_r;N.Title=ra;N.Footer=Qr;N.Dialog=cr;N.TRANSITION_DURATION=300;N.BACKDROP_TRANSITION_DURATION=150;const ia=N;function sa(e){return wr("MuiLinearProgress",e)}Sr("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const la=["className","color","value","valueBuffer","variant"];let H=e=>e,Ze,_e,er,rr,ar,nr;const He=4,da=Ue(Ze||(Ze=H`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),ca=Ue(_e||(_e=H`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),ua=Ue(er||(er=H`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),fa=e=>{const{classes:r,variant:a,color:n}=e,o={root:["root",`color${M(n)}`,a],dashed:["dashed",`dashedColor${M(n)}`],bar1:["bar",`barColor${M(n)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${M(n)}`,a==="buffer"&&`color${M(n)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return Rr(o,sa,r)},Ge=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?Or(e.palette[r].main,.62):Fr(e.palette[r].main,.5),ma=xe("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${M(a.color)}`],r[a.variant]]}})(({ownerState:e,theme:r})=>g({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:Ge(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),pa=xe("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${M(a.color)}`]]}})(({ownerState:e,theme:r})=>{const a=Ge(r,e.color);return g({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},je(rr||(rr=H`
    animation: ${0} 3s infinite linear;
  `),ua)),va=xe("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${M(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar1Indeterminate,a.variant==="determinate"&&r.bar1Determinate,a.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>g({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${He}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${He}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&je(ar||(ar=H`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),da)),ha=xe("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${M(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar2Indeterminate,a.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>g({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:Ge(r,e.color),transition:`transform .${He}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&je(nr||(nr=H`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),ca)),ga=m.forwardRef(function(r,a){const n=Mr({props:r,name:"MuiLinearProgress"}),{className:o,color:t="primary",value:i,valueBuffer:s,variant:d="indeterminate"}=n,y=J(n,la),v=g({},n,{color:t,variant:d}),w=fa(v),B=Br(),E={},x={bar1:{},bar2:{}};if((d==="determinate"||d==="buffer")&&i!==void 0){E["aria-valuenow"]=Math.round(i),E["aria-valuemin"]=0,E["aria-valuemax"]=100;let C=i-100;B.direction==="rtl"&&(C=-C),x.bar1.transform=`translateX(${C}%)`}if(d==="buffer"&&s!==void 0){let C=(s||0)-100;B.direction==="rtl"&&(C=-C),x.bar2.transform=`translateX(${C}%)`}return be(ma,g({className:Tr(w.root,o),ownerState:v,role:"progressbar"},E,{ref:a},y,{children:[d==="buffer"?b(pa,{className:w.dashed,ownerState:v}):null,b(va,{className:w.bar1,ownerState:v,style:x.bar1}),d==="determinate"?null:b(ha,{className:w.bar2,ownerState:v,style:x.bar2})]}))}),ur=ga;const $a=b("div",{className:"bar-loader",children:b(ur,{classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"}})}),Ae=({size:e=20})=>b("div",{className:"spinner",style:{height:`${e}px`,width:`${e}px`,backgroundSize:`${e}px`}}),or=({show:e,currentProgress:r,onCancel:a,totalProgress:n,headlineText:o,hintText:t})=>{m.useEffect(()=>(document.body.style.cursor=e?"wait":"default",()=>{document.body.style.cursor="default"}),[e]);const i=be(Xe,{children:[b("div",{className:"bar-loader",children:b(ur,{"data-testid":"progress-bar",variant:"determinate",classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"},value:r/n*100})}),b(Pe,{variant:"headline3",children:o}),b(Pe,{variant:"hintText",children:t})]});return b(ia,{className:"bootstrap-4-backport BlockingLoader",backdrop:!1,animation:!1,show:e,size:"sm",centered:!0,onHide:()=>{},children:be("div",{className:"SpinnerContainer","data-testid":"spinner-container",children:[n?i:be(Xe,{children:[b(Ae,{size:40}),b(Pe,{variant:"headline3","data-testid":"spinner-hint-text",children:t})]}),a&&b(fr,{variant:"default",onClick:a,children:"Cancel"})]})})};try{Ae.displayName="SynapseSpinner",Ae.__docgenInfo={description:"",displayName:"SynapseSpinner",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}try{or.displayName="BlockingLoader",or.__docgenInfo={description:"",displayName:"BlockingLoader",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},currentProgress:{defaultValue:null,description:"",name:"currentProgress",required:!1,type:{name:"number"}},totalProgress:{defaultValue:null,description:"",name:"totalProgress",required:!1,type:{name:"number"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},headlineText:{defaultValue:null,description:"",name:"headlineText",required:!1,type:{name:"string"}}}}}catch{}export{or as B,ia as M,Ae as S,Gr as a,Qr as b,$a as l};
//# sourceMappingURL=LoadingScreen-43345a4f.js.map
