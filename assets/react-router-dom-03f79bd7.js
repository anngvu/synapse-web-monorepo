import{a4 as F,a5 as x,a6 as G,a7 as z,a8 as M,a9 as $,aa as I,ab as J}from"./SynapseClient-0de7e8d0.js";import{_ as W}from"./inheritsLoose-c82a83d4.js";import{R as c}from"./index-8db94870.js";import{_ as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{_ as H}from"./styled-96220216.js";var rr=function(r){W(t,r);function t(){for(var a,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return a=r.call.apply(r,[this].concat(o))||this,a.history=F(a.props),a}var e=t.prototype;return e.render=function(){return c.createElement(x,{history:this.history,children:this.props.children})},t}(c.Component);c.Component;var E=function(t,e){return typeof t=="function"?t(e):t},S=function(t,e){return typeof t=="string"?J(t,null,null,e):t},B=function(t){return t},v=c.forwardRef;typeof v>"u"&&(v=B);function O(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var Q=v(function(r,t){var e=r.innerRef,a=r.navigate,i=r.onClick,o=H(r,["innerRef","navigate","onClick"]),n=o.target,l=g({},o,{onClick:function(s){try{i&&i(s)}catch(u){throw s.preventDefault(),u}!s.defaultPrevented&&s.button===0&&(!n||n==="_self")&&!O(s)&&(s.preventDefault(),a())}});return B!==v?l.ref=t||e:l.ref=e,c.createElement("a",l)}),U=v(function(r,t){var e=r.component,a=e===void 0?Q:e,i=r.replace,o=r.to,n=r.innerRef,l=H(r,["component","replace","to","innerRef"]);return c.createElement(z.Consumer,null,function(f){f||M(!1);var s=f.history,u=S(E(o,f.location),f.location),L=u?s.createHref(u):"",p=g({},l,{href:L,navigate:function(){var m=E(o,f.location),d=$(f.location)===$(S(m)),C=i||d?s.replace:s.push;C(m)}});return B!==v?p.ref=t||n:p.innerRef=n,c.createElement(a,p)})}),q=function(t){return t},w=c.forwardRef;typeof w>"u"&&(w=q);function V(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.filter(function(a){return a}).join(" ")}var tr=w(function(r,t){var e=r["aria-current"],a=e===void 0?"page":e,i=r.activeClassName,o=i===void 0?"active":i,n=r.activeStyle,l=r.className,f=r.exact,s=r.isActive,u=r.location,L=r.sensitive,p=r.strict,h=r.style,m=r.to,d=r.innerRef,C=H(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(z.Consumer,null,function(K){K||M(!1);var y=u||K.location,T=S(E(m,y),y),b=T.pathname,j=b&&b.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),D=j?I(y.pathname,{path:j,exact:f,sensitive:L,strict:p}):null,R=!!(s?s(D,y):D),N=typeof l=="function"?l(R):l,P=typeof h=="function"?h(R):h;R&&(N=V(N,o),P=g({},P,n));var A=g({"aria-current":R&&a||null,className:N,style:P,to:T},C);return q!==w?A.ref=t||d:A.innerRef=d,c.createElement(U,A)})});export{rr as B,U as L,tr as N};
//# sourceMappingURL=react-router-dom-03f79bd7.js.map