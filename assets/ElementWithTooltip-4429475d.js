var Ie=Object.defineProperty;var qe=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var B=(e,t,r)=>(qe(e,typeof t!="symbol"?t+"":t,r),r);import{j as C,a as V,F as _e}from"./jsx-runtime-095bf462.js";import{T as Fe}from"./SynapseTableConstants-942d2b0b.js";import{R as M,r as f}from"./index-8db94870.js";import{I as oe}from"./IconSvg-6aae701c.js";import{D as Ve}from"./RegularExpressions-bc0adf55.js";import{I as ae}from"./Icon-6cd44b63.js";import{_ as P}from"./extends-98964cd2.js";import{_ as j}from"./objectWithoutPropertiesLoose-4f48578a.js";import{u as W,c as X,S as Le,B as Ae}from"./Button-5637ed55.js";import{u as Ue,c as We,a as je,b as Ke,q as ge}from"./contains-584479aa.js";import{a as L,o as He,l as z,b as Be,d as ze,c as le,u as Ge}from"./createWithBsPrefix-f259edae.js";import{P as S}from"./index-58d3fd43.js";import{p as Ye,h as Xe,d as Je,e as Qe,f as Ze,o as er,g as rr,i as tr,j as nr,T as or}from"./Tooltip-525f62fe.js";import{g as ar}from"./_commonjsHelpers-042e6b4d.js";import{R as ir}from"./index-8ce4a492.js";import{h as re}from"./hasClass-ec9efd32.js";var sr=M.createContext(null),he=function(t,r){return r===void 0&&(r=null),t!=null?String(t):r||null};const ie=sr;var te;function lr(e,t){if(!te){var r=document.body,n=r.matches||r.matchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector;te=function(a,i){return n.call(a,i)}}return te(e,t)}function ur(){var e=f.useReducer(function(r){return!r},!1),t=e[1];return t}function cr(e,t,r,n){n===void 0&&(n=!1);var o=L(r);f.useEffect(function(){var a=typeof e=="function"?e():e;return a.addEventListener(t,o,n),function(){return a.removeEventListener(t,o,n)}},[e])}function dr(e,t,r){r===void 0&&(r=!1);var n=f.useCallback(function(){return document},[]);return cr(n,e,t,r)}var pr=M.createContext(null);const ue=pr;function fr(e){var t=Ue();return[e[0],f.useCallback(function(r){if(t())return e[1](r)},[t,e[1]])]}var mr=Ye({defaultModifiers:[Xe,Je,Qe,Ze,er,rr,tr,nr]}),ve=function(t){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},gr={name:"applyStyles",enabled:!1},hr={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(t){var r=t.state;return function(){var n=r.elements,o=n.reference,a=n.popper;if("removeAttribute"in o){var i=(o.getAttribute("aria-describedby")||"").split(",").filter(function(l){return l.trim()!==a.id});i.length?o.setAttribute("aria-describedby",i.join(",")):o.removeAttribute("aria-describedby")}}},fn:function(t){var r,n=t.state,o=n.elements,a=o.popper,i=o.reference,l=(r=a.getAttribute("role"))==null?void 0:r.toLowerCase();if(a.id&&l==="tooltip"&&"setAttribute"in i){var m=i.getAttribute("aria-describedby");if(m&&m.split(",").indexOf(a.id)!==-1)return;i.setAttribute("aria-describedby",m?m+","+a.id:a.id)}}},vr=[];function yr(e,t,r){var n=r===void 0?{}:r,o=n.enabled,a=o===void 0?!0:o,i=n.placement,l=i===void 0?"bottom":i,m=n.strategy,d=m===void 0?"absolute":m,h=n.modifiers,c=h===void 0?vr:h,s=j(n,["enabled","placement","strategy","modifiers"]),u=f.useRef(),p=f.useCallback(function(){var y;(y=u.current)==null||y.update()},[]),g=f.useCallback(function(){var y;(y=u.current)==null||y.forceUpdate()},[]),b=fr(f.useState({placement:l,update:p,forceUpdate:g,attributes:{},styles:{popper:ve(d),arrow:{}}})),x=b[0],v=b[1],w=f.useMemo(function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(D){var T=D.state,N={},_={};Object.keys(T.elements).forEach(function(E){N[E]=T.styles[E],_[E]=T.attributes[E]}),v({state:T,styles:N,attributes:_,update:p,forceUpdate:g,placement:T.placement})}}},[p,g,v]);return f.useEffect(function(){!u.current||!a||u.current.setOptions({placement:l,strategy:d,modifiers:[].concat(c,[w,gr])})},[d,l,w,a]),f.useEffect(function(){if(!(!a||e==null||t==null))return u.current=mr(e,t,P({},s,{placement:l,strategy:d,modifiers:[].concat(c,[hr,w])})),function(){u.current!=null&&(u.current.destroy(),u.current=void 0,v(function(y){return P({},y,{attributes:{},styles:{popper:ve(d)}})}))}},[a,e,t]),x}var wr=function(){},br=wr;const Cr=ar(br);function Sr(e){return e&&"setState"in e?ir.findDOMNode(e):e??null}const Rr=function(e){return He(Sr(e))};var xr=27,ye=function(){};function Mr(e){return e.button===0}function _r(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var we=function(t){return t&&("current"in t?t.current:t)};function Er(e,t,r){var n=r===void 0?{}:r,o=n.disabled,a=n.clickTrigger,i=a===void 0?"click":a,l=f.useRef(!1),m=t||ye,d=f.useCallback(function(s){var u,p=we(e);Cr(!!p,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),l.current=!p||_r(s)||!Mr(s)||!!We(p,(u=s.composedPath==null?void 0:s.composedPath()[0])!=null?u:s.target)},[e]),h=L(function(s){l.current||m(s)}),c=L(function(s){s.keyCode===xr&&m(s)});f.useEffect(function(){if(!(o||e==null)){var s=window.event,u=Rr(we(e)),p=z(u,i,d,!0),g=z(u,i,function(v){if(v===s){s=void 0;return}h(v)}),b=z(u,"keyup",function(v){if(v===s){s=void 0;return}c(v)}),x=[];return"ontouchstart"in u.documentElement&&(x=[].slice.call(u.body.children).map(function(v){return z(v,"mousemove",ye)})),function(){p(),g(),b(),x.forEach(function(v){return v()})}}},[e,o,i,d,h,c])}function Pr(e){var t={};return Array.isArray(e)?(e==null||e.forEach(function(r){t[r.name]=r}),t):e||t}function Tr(e){return e===void 0&&(e={}),Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t].name=t,e[t]})}function Nr(e){var t,r,n,o,a=e.enabled,i=e.enableEvents,l=e.placement,m=e.flip,d=e.offset,h=e.fixed,c=e.containerPadding,s=e.arrowElement,u=e.popperConfig,p=u===void 0?{}:u,g=Pr(p.modifiers);return P({},p,{placement:l,enabled:a,strategy:h?"fixed":p.strategy,modifiers:Tr(P({},g,{eventListeners:{enabled:i},preventOverflow:P({},g.preventOverflow,{options:c?P({padding:c},(t=g.preventOverflow)==null?void 0:t.options):(r=g.preventOverflow)==null?void 0:r.options}),offset:{options:P({offset:d},(n=g.offset)==null?void 0:n.options)},arrow:P({},g.arrow,{enabled:!!s,options:P({},(o=g.arrow)==null?void 0:o.options,{element:s})}),flip:P({enabled:!!m},g.flip)}))})}var $r=function(){};function Ee(e){e===void 0&&(e={});var t=f.useContext(ue),r=je(),n=r[0],o=r[1],a=f.useRef(!1),i=e,l=i.flip,m=i.offset,d=i.rootCloseEvent,h=i.fixed,c=h===void 0?!1:h,s=i.popperConfig,u=s===void 0?{}:s,p=i.usePopper,g=p===void 0?!!t:p,b=(t==null?void 0:t.show)==null?!!e.show:t.show,x=(t==null?void 0:t.alignEnd)==null?e.alignEnd:t.alignEnd;b&&!a.current&&(a.current=!0);var v=function(R){t==null||t.toggle(!1,R)},w=t||{},y=w.drop,D=w.setMenu,T=w.menuElement,N=w.toggleElement,_=x?"bottom-end":"bottom-start";y==="up"?_=x?"top-end":"top-start":y==="right"?_=x?"right-end":"right-start":y==="left"&&(_=x?"left-end":"left-start");var E=yr(N,T,Nr({placement:_,enabled:!!(g&&b),enableEvents:b,offset:m,flip:l,fixed:c,arrowElement:n,popperConfig:u})),A=P({ref:D||$r,"aria-labelledby":N==null?void 0:N.id},E.attributes.popper,{style:E.styles.popper}),q={show:b,alignEnd:x,hasShown:a.current,toggle:t==null?void 0:t.toggle,popper:g?E:null,arrowProps:g?P({ref:o},E.attributes.arrow,{style:E.styles.arrow}):{}};return Er(T,v,{clickTrigger:d,disabled:!b}),[A,q]}var Dr={children:S.func.isRequired,show:S.bool,alignEnd:S.bool,flip:S.bool,usePopper:S.oneOf([!0,!1]),popperConfig:S.object,rootCloseEvent:S.string},kr={usePopper:!0};function J(e){var t=e.children,r=j(e,["children"]),n=Ee(r),o=n[0],a=n[1];return M.createElement(M.Fragment,null,a.hasShown?t(o,a):null)}J.displayName="ReactOverlaysDropdownMenu";J.propTypes=Dr;J.defaultProps=kr;var be=function(){};function Pe(){var e=f.useContext(ue)||{},t=e.show,r=t===void 0?!1:t,n=e.toggle,o=n===void 0?be:n,a=e.setToggle,i=f.useCallback(function(l){o(!r,l)},[r,o]);return[{ref:a||be,onClick:i,"aria-haspopup":!0,"aria-expanded":!!r},{show:r,toggle:o}]}var Or={children:S.func.isRequired};function ce(e){var t=e.children,r=Pe(),n=r[0],o=r[1];return M.createElement(M.Fragment,null,t(n,o))}ce.displayName="ReactOverlaysDropdownToggle";ce.propTypes=Or;var Ir={children:S.node,drop:S.oneOf(["up","left","right","down"]),focusFirstItemOnShow:S.oneOf([!1,!0,"keyboard"]),itemSelector:S.string,alignEnd:S.bool,show:S.bool,defaultShow:S.bool,onToggle:S.func};function Ce(){var e=ur(),t=f.useRef(null),r=f.useCallback(function(n){t.current=n,e()},[e]);return[t,r]}function H(e){var t=e.drop,r=e.alignEnd,n=e.defaultShow,o=e.show,a=e.onToggle,i=e.itemSelector,l=i===void 0?"* > *":i,m=e.focusFirstItemOnShow,d=e.children,h=Be(o,n,a),c=h[0],s=h[1],u=Ce(),p=u[0],g=u[1],b=p.current,x=Ce(),v=x[0],w=x[1],y=v.current,D=Ke(c),T=f.useRef(null),N=f.useRef(!1),_=f.useCallback(function(R,$){s(R,$)},[s]),E=f.useMemo(function(){return{toggle:_,drop:t,show:c,alignEnd:r,menuElement:b,toggleElement:y,setMenu:g,setToggle:w}},[_,t,c,r,b,y,g,w]);b&&D&&!c&&(N.current=b.contains(document.activeElement));var A=L(function(){y&&y.focus&&y.focus()}),q=L(function(){var R=T.current,$=m;if($==null&&($=p.current&&lr(p.current,"[role=menu]")?"keyboard":!1),!($===!1||$==="keyboard"&&!/^key.+$/.test(R))){var k=ge(p.current,l)[0];k&&k.focus&&k.focus()}});f.useEffect(function(){c?q():N.current&&(N.current=!1,A())},[c,N,A,q]),f.useEffect(function(){T.current=null});var U=function($,k){if(!p.current)return null;var F=ge(p.current,l),O=F.indexOf($)+k;return O=Math.max(0,Math.min(O,F.length)),F[O]};return dr("keydown",function(R){var $,k,F=R.key,O=R.target,fe=($=p.current)==null?void 0:$.contains(O),ke=(k=v.current)==null?void 0:k.contains(O),Oe=/input|textarea/i.test(O.tagName);if(!(Oe&&(F===" "||F!=="Escape"&&fe))&&!(!fe&&!ke)&&!(!p.current&&F==="Tab"))switch(T.current=R.type,F){case"ArrowUp":{var Q=U(O,-1);Q&&Q.focus&&Q.focus(),R.preventDefault();return}case"ArrowDown":if(R.preventDefault(),!c)s(!0,R);else{var Z=U(O,1);Z&&Z.focus&&Z.focus()}return;case"Tab":ze(document,"keyup",function(ee){var me;(ee.key==="Tab"&&!ee.target||!((me=p.current)!=null&&me.contains(ee.target)))&&s(!1,R)},{once:!0});break;case"Escape":R.preventDefault(),R.stopPropagation(),s(!1,R);break}}),M.createElement(ue.Provider,{value:E},d)}H.displayName="ReactOverlaysDropdown";H.propTypes=Ir;H.Menu=J;H.Toggle=ce;var Te=M.createContext(null);Te.displayName="NavContext";const qr=Te;var Fr=["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"],Vr={as:Le,disabled:!1},de=M.forwardRef(function(e,t){var r=e.bsPrefix,n=e.className,o=e.children,a=e.eventKey,i=e.disabled,l=e.href,m=e.onClick,d=e.onSelect,h=e.active,c=e.as,s=j(e,Fr),u=W(r,"dropdown-item"),p=f.useContext(ie),g=f.useContext(qr),b=g||{},x=b.activeKey,v=he(a,l),w=h==null&&v!=null?he(x)===v:h,y=L(function(D){i||(m&&m(D),p&&p(v,D),d&&d(v,D))});return M.createElement(c,P({},s,{ref:t,href:l,disabled:i,className:X(n,u,w&&"active",i&&"disabled"),onClick:y}),o)});de.displayName="DropdownItem";de.defaultProps=Vr;const Lr=de;var Se=function(t){return!t||typeof t=="function"?t:function(r){t.current=r}};function Ar(e,t){var r=Se(e),n=Se(t);return function(o){r&&r(o),n&&n(o)}}function se(e,t){return f.useMemo(function(){return Ar(e,t)},[e,t])}var Ne=M.createContext(null);Ne.displayName="NavbarContext";const Ur=Ne;function $e(e,t){return e}function ne(e){var t=window.getComputedStyle(e),r=parseFloat(t.marginTop)||0,n=parseFloat(t.marginRight)||0,o=parseFloat(t.marginBottom)||0,a=parseFloat(t.marginLeft)||0;return{top:r,right:n,bottom:o,left:a}}function Wr(){var e=f.useRef(null),t=f.useRef(null),r=f.useRef(null),n=W(void 0,"popover"),o=W(void 0,"dropdown-menu"),a=f.useCallback(function(d){!d||!(re(d,n)||re(d,o))||(t.current=ne(d),d.style.margin="0",e.current=d)},[n,o]),i=f.useMemo(function(){return{name:"offset",options:{offset:function(h){var c=h.placement;if(!t.current)return[0,0];var s=t.current,u=s.top,p=s.left,g=s.bottom,b=s.right;switch(c.split("-")[0]){case"top":return[0,g];case"left":return[0,b];case"bottom":return[0,u];case"right":return[0,p];default:return[0,0]}}}}},[t]),l=f.useMemo(function(){return{name:"arrow",options:{padding:function(){if(!r.current)return 0;var h=r.current,c=h.top,s=h.right,u=c||s;return{top:u,left:u,right:u,bottom:u}}}}},[r]),m=f.useMemo(function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",fn:function(){},requiresIfExists:["arrow"],effect:function(h){var c=h.state;if(!(!e.current||!c.elements.arrow||!re(e.current,n))){if(c.modifiersData["arrow#persistent"]){var s=ne(c.elements.arrow),u=s.top,p=s.right,g=u||p;c.modifiersData["arrow#persistent"].padding={top:g,left:g,right:g,bottom:g}}else r.current=ne(c.elements.arrow);return c.elements.arrow.style.margin="0",function(){c.elements.arrow&&(c.elements.arrow.style.margin="")}}}}},[n]);return[a,[i,l,m]]}var jr=["bsPrefix","className","align","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"],K=S.oneOf(["left","right"]);S.oneOfType([K,S.shape({sm:K}),S.shape({md:K}),S.shape({lg:K}),S.shape({xl:K})]);var Kr={align:"left",alignRight:!1,flip:!0},pe=M.forwardRef(function(e,t){var r=e.bsPrefix,n=e.className,o=e.align,a=e.alignRight,i=e.rootCloseEvent,l=e.flip,m=e.show,d=e.renderOnMount,h=e.as,c=h===void 0?"div":h,s=e.popperConfig,u=j(e,jr),p=f.useContext(Ur),g=W(r,"dropdown-menu"),b=Wr(),x=b[0],v=b[1],w=[];if(o)if(typeof o=="object"){var y=Object.keys(o);if(y.length){var D=y[0],T=o[D];a=T==="left",w.push(g+"-"+D+"-"+T)}}else o==="right"&&(a=!0);var N=Ee({flip:l,rootCloseEvent:i,show:m,alignEnd:a,usePopper:!p&&w.length===0,popperConfig:P({},s,{modifiers:v.concat((s==null?void 0:s.modifiers)||[])})}),_=N[0],E=N[1],A=E.hasShown,q=E.popper,U=E.show,R=E.alignEnd,$=E.toggle;if(_.ref=se(x,se($e(t),_.ref)),!A&&!d)return null;typeof c!="string"&&(_.show=U,_.close=function(){return $==null?void 0:$(!1)},_.alignRight=R);var k=u.style;return q!=null&&q.placement&&(k=P({},u.style,_.style),u["x-placement"]=q.placement),M.createElement(c,P({},u,_,{style:k,className:X.apply(void 0,[n,g,U&&"show",R&&g+"-right"].concat(w))}))});pe.displayName="DropdownMenu";pe.defaultProps=Kr;const Hr=pe;var Re={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){return function(a,i,l,m,d){var h=l||"<<anonymous>>",c=d||i;if(a[i]==null)return new Error("The "+m+" `"+c+"` is required to make "+("`"+h+"` accessible for users of assistive ")+"technologies such as screen readers.");for(var s=arguments.length,u=Array(s>5?s-5:0),p=5;p<s;p++)u[p-5]=arguments[p];return n.apply(void 0,[a,i,l,m,d].concat(u))}}e.exports=t.default})(Re,Re.exports);var Br=["bsPrefix","split","className","childBsPrefix","as"],De=M.forwardRef(function(e,t){var r=e.bsPrefix,n=e.split,o=e.className,a=e.childBsPrefix,i=e.as,l=i===void 0?Ae:i,m=j(e,Br),d=W(r,"dropdown-toggle");a!==void 0&&(m.bsPrefix=a);var h=Pe(),c=h[0];return c.ref=se(c.ref,$e(t)),M.createElement(l,P({className:X(o,d,n&&d+"-split")},c,m))});De.displayName="DropdownToggle";const zr=De;var Gr=["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"],Yr=le("dropdown-header",{defaultProps:{role:"heading"}}),Xr=le("dropdown-divider",{defaultProps:{role:"separator"}}),Jr=le("dropdown-item-text",{Component:"span"}),Qr={navbar:!1},I=M.forwardRef(function(e,t){var r=Ge(e,{show:"onToggle"}),n=r.bsPrefix,o=r.drop,a=r.show,i=r.className,l=r.alignRight,m=r.onSelect,d=r.onToggle,h=r.focusFirstItemOnShow,c=r.as,s=c===void 0?"div":c;r.navbar;var u=j(r,Gr),p=f.useContext(ie),g=W(n,"dropdown"),b=L(function(v,w,y){y===void 0&&(y=w.type),w.currentTarget===document&&(y!=="keydown"||w.key==="Escape")&&(y="rootClose"),d&&d(v,w,{source:y})}),x=L(function(v,w){p&&p(v,w),m&&m(v,w),b(!1,w,"select")});return M.createElement(ie.Provider,{value:x},M.createElement(H,{drop:o,show:a,alignEnd:l,onToggle:b,focusFirstItemOnShow:h,itemSelector:"."+g+"-item:not(.disabled):not(:disabled)"},M.createElement(s,P({},u,{ref:t,className:X(i,a&&"show",(!o||o==="down")&&g,o==="up"&&"dropup",o==="right"&&"dropright",o==="left"&&"dropleft")}))))});I.displayName="Dropdown";I.defaultProps=Qr;I.Divider=Xr;I.Header=Yr;I.Item=Lr;I.ItemText=Jr;I.Menu=Hr;I.Toggle=zr;const Zr=I;class G extends f.Component{constructor(r){super(r);B(this,"renderRowValue",(r,n,o)=>{const a=this.props.columnIconOptions;if(!n.match||!n.trim)return n;if(n=n.trim(),n.match(Ve))return C("a",{"data-search-handle":r,target:"_blank",rel:"noopener noreferrer",href:`https://dx.doi.org/${n}`,children:n});if(a&&a.columns&&Object.keys(a.columns).includes(o)){const i=a.columns[o][n];return i?(i.sx={...i.sx,paddingRight:"0.2rem"},V(_e,{children:[C(oe,{...i}),C("span",{style:{verticalAlign:"middle"},children:n})]})):C("span",{children:n})}return n});B(this,"renderRows",(r,n,o)=>r.map((a,i)=>{const l=i>=n?"SRC-hidden":"",m=a[0],d=this.renderRowValue(m,a[1],a[2]);return o?V("tr",{className:"SRC-cardRowDesktop "+l,children:[C("td",{className:"SRC-verticalAlignTop SRC-row-label",children:m}),C("td",{"data-search-handle":m,className:"SRC-row-data SRC-limitMaxWidth ",children:d})]},i):V(f.Fragment,{children:[C("tr",{className:"SRC-cardRowMobile "+l,children:C("td",{className:"SRC-verticalAlignTop SRC-row-label",children:m})}),C("tr",{className:"SRC-cardRowMobile "+l,children:C("td",{"data-search-handle":m,className:"SRC-row-data SRC-limitMaxWidth",children:d})})]},i)}));this.state={isShowMoreOn:!1,isDesktop:!1},this.toggleShowMore=this.toggleShowMore.bind(this),this.updatePredicate=this.updatePredicate.bind(this)}toggleShowMore(){this.setState({isShowMoreOn:!this.state.isShowMoreOn})}componentDidMount(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}componentWillUnmount(){window.removeEventListener("resize",this.updatePredicate)}updatePredicate(){this.setState({isDesktop:window.innerWidth>600})}render(){const{values:r,secondaryLabelLimit:n=3}=this.props,{isShowMoreOn:o,isDesktop:a}=this.state,i=r.filter(d=>d[1]),l=i.length>n,m=!l||o?1/0:n;return C("div",{"data-testid":"CardFooter",className:`SRC-cardMetadata ${this.props.isHeader?"SRC-card-footer-header":""} ${this.props.className??""}`,children:C("table",{children:V("tbody",{children:[this.renderRows(i,m,a),l&&C("tr",{className:"SRC-cardRow",children:C("td",{children:V("a",{style:{textAlign:"left",margin:0,padding:0},onClick:this.toggleShowMore,className:"highlight-link",children:["Show ",o?"Less":"More",C(oe,{icon:o?"expandLess":"expandMore"})]})})})]})})})}}try{G.displayName="CardFooter",G.__docgenInfo={description:"",displayName:"CardFooter",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"any[]"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!0,type:{name:"boolean"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Y=({chips:e})=>{const t=e.map((r,n)=>r?V("span",{children:[" ",r]},n):!1);return C(f.Fragment,{children:t})};try{Y.displayName="ChipContainer",Y.__docgenInfo={description:"",displayName:"ChipContainer",props:{chips:{defaultValue:null,description:"",name:"chips",required:!0,type:{name:"any[]"}}}}}catch{}const et=400;class xe extends f.Component{constructor(r){super(r);B(this,"getCutoff",(r,n)=>{let o="";if(!r)return{previewText:o};let a="";const i=r.split(" ");let l=0;for(;o.length<n&&l<i.length;)o+=`${i[l]} `,l+=1;return l<i.length-1&&(a=i.slice(l).join(" ")),{previewText:o,hiddenText:a}});this.state={showMore:!1},this.toggleShowMore=this.toggleShowMore.bind(this)}toggleShowMore(r){r.preventDefault(),this.setState({showMore:!0})}render(){const{summary:r,maxCharacterCount:n=et}=this.props,o=r&&r.length>=n,{previewText:a,hiddenText:i}=this.getCutoff(r,n),l=o&&C("a",{style:{fontSize:"14px",cursor:"pointer",marginLeft:"5px"},onClick:this.toggleShowMore,className:"highlight-link",children:"...Show More"});return V(f.Fragment,{children:[V("span",{children:[a,C("span",{className:this.state.showMore?"":"SRC-hidden",children:i})]}),!this.state.showMore&&l]})}}try{xe.displayName="ShowMore",xe.__docgenInfo={description:"",displayName:"ShowMore",props:{summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},maxCharacterCount:{defaultValue:null,description:"",name:"maxCharacterCount",required:!1,type:{name:"number"}}}}}catch{}try{G.displayName="CardFooter",G.__docgenInfo={description:"",displayName:"CardFooter",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"any[]"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!0,type:{name:"boolean"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ae.displayName="Icon",ae.__docgenInfo={description:"",displayName:"Icon",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},iconOptions:{defaultValue:null,description:"",name:"iconOptions",required:!1,type:{name:"IconOptions"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!1,type:{name:"boolean"}},cssClass:{defaultValue:null,description:"",name:"cssClass",required:!1,type:{name:"string"}}}}}catch{}try{utils.displayName="utils",utils.__docgenInfo={description:"",displayName:"utils",props:{summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},maxCharacterCount:{defaultValue:null,description:"",name:"maxCharacterCount",required:!1,type:{name:"number"}}}}}catch{}try{Y.displayName="ChipContainer",Y.__docgenInfo={description:"",displayName:"ChipContainer",props:{chips:{defaultValue:null,description:"",name:"chips",required:!0,type:{name:"any[]"}}}}}catch{}function rt(e,t,r){return"svgImg"in e?e.svgImg:C(oe,{...e,sx:{color:t,width:r}})}const Me=({image:e,callbackFn:t,tooltipText:r,className:n="",imageColor:o,tooltipVisualProps:a={place:"top"},children:i,darkTheme:l,size:m,icon:d})=>{const{place:h}=a,c=d?C(ae,{type:d}):void 0,s=c||(e?rt(e,o,m):i||C(_e,{}));let u;return i?u=C("div",{className:"SRC-hand-cursor",children:i}):u=t?C("button",{tabIndex:0,className:`ElementWithTooltip SRC-hand-cursor SRC-grey-background-hover ${n} ${l?"dark-theme":""} `,onKeyPress:()=>t(),onClick:()=>t(),"aria-label":r,children:s}):C(Zr.Toggle,{className:`ElementWithTooltip SRC-hand-cursor SRC-grey-background-hover ${n} ${l?"dark-theme":""} `,variant:"light","aria-label":r,children:s}),C(or,{title:r,enterNextDelay:Fe,placement:h,"data-testid":"ElementTooltip",children:u})};try{Me.displayName="ElementWithTooltip",Me.__docgenInfo={description:"",displayName:"ElementWithTooltip",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IconSvgProps | CustomImageProps"}},imageColor:{defaultValue:null,description:"",name:"imageColor",required:!1,type:{name:"string"}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!0,type:{name:"string"}},callbackFn:{defaultValue:null,description:"",name:"callbackFn",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},tooltipVisualProps:{defaultValue:{value:"{ place: 'top' }"},description:"",name:"tooltipVisualProps",required:!1,type:{name:"Partial<TooltipVisualProps>"}},darkTheme:{defaultValue:null,description:"",name:"darkTheme",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}}}}}catch{}export{G as C,Zr as D,Me as E,xe as S,Y as a};
//# sourceMappingURL=ElementWithTooltip-4429475d.js.map
