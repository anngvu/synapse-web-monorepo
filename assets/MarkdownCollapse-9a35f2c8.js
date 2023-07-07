import{a as I,j as S}from"./jsx-runtime-095bf462.js";import{R as h,r as v}from"./index-8db94870.js";import{a6 as X,a7 as Q,a5 as Z}from"./ConfirmationDialog-9ae9d9fa.js";import{I as z}from"./UserCard-65047c47.js";import{d as J}from"./ToastMessage-c23277fc.js";import{o as K,l as L,c as N,b as A}from"./ElementWithTooltip-3699ecce.js";import{_ as b}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import{_ as F}from"./styled-6ec5f85d.js";import{c as ee}from"./ThemeProvider-c7f6a893.js";import{_ as te}from"./inheritsLoose-c82a83d4.js";import{R as k}from"./index-8ce4a492.js";function ne(n){var r=K(n);return r&&r.defaultView||window}function ae(n,r){return ne(n).getComputedStyle(n,r)}var ie=/([A-Z])/g;function re(n){return n.replace(ie,"-$1").toLowerCase()}var oe=/^ms-/;function D(n){return re(n).replace(oe,"-ms-")}var se=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function le(n){return!!(n&&se.test(n))}function R(n,r){var i="",a="";if(typeof r=="string")return n.style.getPropertyValue(D(r))||ae(n).getPropertyValue(D(r));Object.keys(r).forEach(function(t){var e=r[t];!e&&e!==0?n.style.removeProperty(D(t)):le(t)?a+=t+"("+e+") ":i+=D(t)+": "+e+";"}),a&&(i+="transform: "+a+";"),n.style.cssText+=";"+i}const P={disabled:!1},G=h.createContext(null);var y="unmounted",E="exited",m="entering",x="entered",M="exiting",f=function(n){te(r,n);function r(a,t){var e;e=n.call(this,a,t)||this;var o=t,s=o&&!o.isMounting?a.enter:a.appear,l;return e.appearStatus=null,a.in?s?(l=E,e.appearStatus=m):l=x:a.unmountOnExit||a.mountOnEnter?l=y:l=E,e.state={status:l},e.nextCallback=null,e}r.getDerivedStateFromProps=function(t,e){var o=t.in;return o&&e.status===y?{status:E}:null};var i=r.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var o=this.state.status;this.props.in?o!==m&&o!==x&&(e=m):(o===m||o===x)&&(e=M)}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t=this.props.timeout,e,o,s;return e=o=s=t,t!=null&&typeof t!="number"&&(e=t.exit,o=t.enter,s=t.appear!==void 0?t.appear:o),{exit:e,enter:o,appear:s}},i.updateStatus=function(t,e){t===void 0&&(t=!1),e!==null?(this.cancelNextCallback(),e===m?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===E&&this.setState({status:y})},i.performEnter=function(t){var e=this,o=this.props.enter,s=this.context?this.context.isMounting:t,l=this.props.nodeRef?[s]:[k.findDOMNode(this),s],d=l[0],u=l[1],C=this.getTimeouts(),w=s?C.appear:C.enter;if(!t&&!o||P.disabled){this.safeSetState({status:x},function(){e.props.onEntered(d)});return}this.props.onEnter(d,u),this.safeSetState({status:m},function(){e.props.onEntering(d,u),e.onTransitionEnd(w,function(){e.safeSetState({status:x},function(){e.props.onEntered(d,u)})})})},i.performExit=function(){var t=this,e=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:k.findDOMNode(this);if(!e||P.disabled){this.safeSetState({status:E},function(){t.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:M},function(){t.props.onExiting(s),t.onTransitionEnd(o.exit,function(){t.safeSetState({status:E},function(){t.props.onExited(s)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},i.onTransitionEnd=function(t,e){this.setNextCallback(e);var o=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this),s=t==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],d=l[0],u=l[1];this.props.addEndListener(d,u)}t!=null&&setTimeout(this.nextCallback,t)},i.render=function(){var t=this.state.status;if(t===y)return null;var e=this.props,o=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var s=F(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return h.createElement(G.Provider,{value:null},typeof o=="function"?o(t,s):h.cloneElement(h.Children.only(o),s))},r}(h.Component);f.contextType=G;f.propTypes={};function T(){}f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T};f.UNMOUNTED=y;f.EXITED=E;f.ENTERING=m;f.ENTERED=x;f.EXITING=M;const ue=f;function pe(n,r,i,a){if(i===void 0&&(i=!1),a===void 0&&(a=!0),n){var t=document.createEvent("HTMLEvents");t.initEvent(r,i,a),n.dispatchEvent(t)}}function ce(n){var r=R(n,"transitionDuration")||"",i=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*i}function de(n,r,i){i===void 0&&(i=5);var a=!1,t=setTimeout(function(){a||pe(n,"transitionend",!0)},r+i),e=L(n,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(t),e()}}function fe(n,r,i,a){i==null&&(i=ce(n)||0);var t=de(n,i,a),e=L(n,"transitionend",r);return function(){t(),e()}}function V(n,r){var i=R(n,r)||"",a=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*a}function Ee(n,r){var i=V(n,"transitionDuration"),a=V(n,"transitionDelay"),t=fe(n,function(e){e.target===n&&(t(),r(e))},i+a)}function me(n){n.offsetHeight}var ve=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],g,he={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function q(n,r){var i="offset"+n[0].toUpperCase()+n.slice(1),a=r[i],t=he[n];return a+parseInt(R(r,t[0]),10)+parseInt(R(r,t[1]),10)}var xe=(g={},g[E]="collapse",g[M]="collapsing",g[m]="collapsing",g[x]="collapse show",g),Se={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:q},B=h.forwardRef(function(n,r){var i=n.onEnter,a=n.onEntering,t=n.onEntered,e=n.onExit,o=n.onExiting,s=n.className,l=n.children,d=n.dimension,u=d===void 0?"height":d,C=n.getDimensionValue,w=C===void 0?q:C,O=F(n,ve),p=typeof u=="function"?u():u,W=v.useMemo(function(){return N(function(c){c.style[p]="0"},i)},[p,i]),$=v.useMemo(function(){return N(function(c){var _="scroll"+p[0].toUpperCase()+p.slice(1);c.style[p]=c[_]+"px"},a)},[p,a]),j=v.useMemo(function(){return N(function(c){c.style[p]=null},t)},[p,t]),Y=v.useMemo(function(){return N(function(c){c.style[p]=w(p,c)+"px",me(c)},e)},[e,w,p]),H=v.useMemo(function(){return N(function(c){c.style[p]=null},o)},[p,o]);return h.createElement(ue,b({ref:r,addEndListener:Ee},O,{"aria-expanded":O.role?O.in:null,onEnter:W,onEntering:$,onEntered:j,onExit:Y,onExiting:H}),function(c,_){return h.cloneElement(l,b({},_,{className:ee(s,l.props.className,xe[c],p==="width"&&"width")}))})});B.defaultProps=Se;const Te=B,U=n=>{const[r,i]=v.useState(!1),[a,t]=v.useState(),[e,o]=v.useState(),s=u=>{u&&(o(u.trim()),t(u.trim().split(/\s+/).length))},{textDescription:l="full text",showCopyPlainText:d}=n;return I("div",{className:"MarkdownCollapse bootstrap-4-backport",children:[I("p",{children:[r?S(X,{}):S(Q,{}),I(A,{className:"highlight-link",onClick:()=>i(!r),"aria-controls":"collapse-text","aria-expanded":r,children:[r?"Hide":"View"," ",l," ",a?`(${a} words)`:""]})]}),d&&I("p",{children:[S(z,{className:"primary"}),I(A,{className:"highlight-link",onClick:()=>{e&&navigator.clipboard.writeText(e).then(()=>{J("Successfully copied to the clipboard")}).catch(u=>{console.error(u)})},children:["Copy ",l," to clipboard"]})]}),S(Te,{in:r,children:S("div",{id:"collapse-text",children:S(Z,{...n,onMarkdownProcessingDone:s})})})]})};try{U.displayName="MarkdownCollapse",U.__docgenInfo={description:`Wraps a MarkdownSynapse in a Collapse area, with customizable text description.
Will pass down all properties to the MarkdownSynapse component, so this can be used in
the portal detail pages.`,displayName:"MarkdownCollapse",props:{textDescription:{defaultValue:null,description:"",name:"textDescription",required:!1,type:{name:"string"}},showCopyPlainText:{defaultValue:null,description:"",name:"showCopyPlainText",required:!1,type:{name:"boolean"}},ownerId:{defaultValue:null,description:"",name:"ownerId",required:!1,type:{name:"string"}},wikiId:{defaultValue:null,description:"",name:"wikiId",required:!1,type:{name:"string"}},markdown:{defaultValue:null,description:"",name:"markdown",required:!1,type:{name:"string"}},renderInline:{defaultValue:null,description:"",name:"renderInline",required:!1,type:{name:"boolean"}},objectType:{defaultValue:null,description:"",name:"objectType",required:!1,type:{name:"enum",value:[{value:'"ENTITY"'},{value:'"ENTITY_CONTAINER"'},{value:'"PRINCIPAL"'},{value:'"ACTIVITY"'},{value:'"EVALUATION"'},{value:'"SUBMISSION"'},{value:'"EVALUATION_SUBMISSIONS"'},{value:'"FILE"'},{value:'"MESSAGE"'},{value:'"WIKI"'},{value:'"FAVORITE"'},{value:'"ACCESS_REQUIREMENT"'},{value:'"ACCESS_APPROVAL"'},{value:'"TEAM"'},{value:'"TABLE"'},{value:'"ACCESS_CONTROL_LIST"'},{value:'"PROJECT_SETTING"'},{value:'"VERIFICATION_SUBMISSION"'},{value:'"CERTIFIED_USER_PASSING_RECORD"'},{value:'"FORUM"'},{value:'"THREAD"'},{value:'"REPLY"'},{value:'"FORM_GROUP"'},{value:'"FORM_DATA"'},{value:'"ENTITY_VIEW"'},{value:'"USER_PROFILE"'},{value:'"DATA_ACCESS_REQUEST"'},{value:'"DATA_ACCESS_SUBMISSION"'},{value:'"DATA_ACCESS_SUBMISSION_STATUS"'},{value:'"MEMBERSHIP_INVITATION"'}]}},loadingSkeletonRowCount:{defaultValue:null,description:"",name:"loadingSkeletonRowCount",required:!1,type:{name:"number"}},onMarkdownProcessingDone:{defaultValue:null,description:"",name:"onMarkdownProcessingDone",required:!1,type:{name:"((textContent: string | null) => void)"}}}}}catch{}export{U as M};
//# sourceMappingURL=MarkdownCollapse-9a35f2c8.js.map