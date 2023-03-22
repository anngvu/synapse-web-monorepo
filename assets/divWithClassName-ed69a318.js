import{a as w,_ as C}from"./objectWithoutPropertiesLoose-df62547b.js";import{c as b}from"./Button-dd6fc6af.js";import{R as u,r as I}from"./index-f1f749bf.js";import{_ as U}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as F}from"./inheritsLoose-d541526f.js";import{R as S}from"./index-96c5f47c.js";import{o as $,l as P}from"./createWithBsPrefix-9409c681.js";import{p as k}from"./index-4d501b15.js";function G(n){var i=$(n);return i&&i.defaultView||window}function W(n,i){return G(n).getComputedStyle(n,i)}var X=/([A-Z])/g;function B(n){return n.replace(X,"-$1").toLowerCase()}var j=/^ms-/;function x(n){return B(n).replace(j,"-ms-")}var H=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function V(n){return!!(n&&H.test(n))}function L(n,i){var r="",a="";if(typeof i=="string")return n.style.getPropertyValue(x(i))||W(n).getPropertyValue(x(i));Object.keys(i).forEach(function(e){var t=i[e];!t&&t!==0?n.style.removeProperty(x(e)):V(e)?a+=e+"("+t+") ":r+=x(e)+": "+t+";"}),a&&(r+="transform: "+a+";"),n.style.cssText+=";"+r}const O={disabled:!1},M=u.createContext(null);var h="unmounted",p="exited",c="entering",d="entered",g="exiting",f=function(n){F(i,n);function i(a,e){var t;t=n.call(this,a,e)||this;var s=e,o=s&&!s.isMounting?a.enter:a.appear,l;return t.appearStatus=null,a.in?o?(l=p,t.appearStatus=c):l=d:a.unmountOnExit||a.mountOnEnter?l=h:l=p,t.state={status:l},t.nextCallback=null,t}i.getDerivedStateFromProps=function(e,t){var s=e.in;return s&&t.status===h?{status:p}:null};var r=i.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var s=this.state.status;this.props.in?s!==c&&s!==d&&(t=c):(s===c||s===d)&&(t=g)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e=this.props.timeout,t,s,o;return t=s=o=e,e!=null&&typeof e!="number"&&(t=e.exit,s=e.enter,o=e.appear!==void 0?e.appear:s),{exit:t,enter:s,appear:o}},r.updateStatus=function(e,t){e===void 0&&(e=!1),t!==null?(this.cancelNextCallback(),t===c?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:h})},r.performEnter=function(e){var t=this,s=this.props.enter,o=this.context?this.context.isMounting:e,l=this.props.nodeRef?[o]:[S.findDOMNode(this),o],m=l[0],v=l[1],D=this.getTimeouts(),_=o?D.appear:D.enter;if(!e&&!s||O.disabled){this.safeSetState({status:d},function(){t.props.onEntered(m)});return}this.props.onEnter(m,v),this.safeSetState({status:c},function(){t.props.onEntering(m,v),t.onTransitionEnd(_,function(){t.safeSetState({status:d},function(){t.props.onEntered(m,v)})})})},r.performExit=function(){var e=this,t=this.props.exit,s=this.getTimeouts(),o=this.props.nodeRef?void 0:S.findDOMNode(this);if(!t||O.disabled){this.safeSetState({status:p},function(){e.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:g},function(){e.props.onExiting(o),e.onTransitionEnd(s.exit,function(){e.safeSetState({status:p},function(){e.props.onExited(o)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,s=!0;return this.nextCallback=function(o){s&&(s=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var s=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this),o=e==null&&!this.props.addEndListener;if(!s||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],m=l[0],v=l[1];this.props.addEndListener(m,v)}e!=null&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===h)return null;var t=this.props,s=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var o=U(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return u.createElement(M.Provider,{value:null},typeof s=="function"?s(e,o):u.cloneElement(u.Children.only(s),o))},i}(u.Component);f.contextType=M;f.propTypes={};function E(){}f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E};f.UNMOUNTED=h;f.EXITED=p;f.ENTERING=c;f.ENTERED=d;f.EXITING=g;function A(n,i,r,a){if(r===void 0&&(r=!1),a===void 0&&(a=!0),n){var e=document.createEvent("HTMLEvents");e.initEvent(i,r,a),n.dispatchEvent(e)}}function Y(n){var i=L(n,"transitionDuration")||"",r=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*r}function Z(n,i,r){r===void 0&&(r=5);var a=!1,e=setTimeout(function(){a||A(n,"transitionend",!0)},i+r),t=P(n,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(e),t()}}function q(n,i,r,a){r==null&&(r=Y(n)||0);var e=Z(n,r,a),t=P(n,"transitionend",i);return function(){e(),t()}}function R(n,i){var r=L(n,i)||"",a=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*a}function z(n,i){var r=R(n,"transitionDuration"),a=R(n,"transitionDelay"),e=q(n,function(t){t.target===n&&(e(),i(t))},r+a)}function J(n){n.offsetHeight}var K=["className","children"],N,Q={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},tt=(N={},N[c]="show",N[d]="show",N),y=u.forwardRef(function(n,i){var r=n.className,a=n.children,e=w(n,K),t=I.useCallback(function(s){J(s),e.onEnter&&e.onEnter(s)},[e]);return u.createElement(f,C({ref:i,addEndListener:z},e,{onEnter:t}),function(s,o){return u.cloneElement(a,C({},o,{className:b("fade",r,a.props.className,tt[s])}))})});y.defaultProps=Q;y.displayName="Fade";const pt=y;var et=["label","onClick","className"],nt={label:k.string.isRequired,onClick:k.func},rt={label:"Close"},T=u.forwardRef(function(n,i){var r=n.label,a=n.onClick,e=n.className,t=w(n,et);return u.createElement("button",C({ref:i,type:"button",className:b("close",e),onClick:a},t),u.createElement("span",{"aria-hidden":"true"},"×"),u.createElement("span",{className:"sr-only"},r))});T.displayName="CloseButton";T.propTypes=nt;T.defaultProps=rt;const dt=T,mt=function(n){return u.forwardRef(function(i,r){return u.createElement("div",C({},i,{ref:r,className:b(i.className,n)}))})};export{dt as C,p as E,pt as F,f as T,M as a,g as b,c,mt as d,d as e,z as f,J as g,L as s,q as t};
//# sourceMappingURL=divWithClassName-ed69a318.js.map
