import{r as f,R as d}from"./index-f1f749bf.js";import{_ as L}from"./extends-98964cd2.js";import{_ as P}from"./objectWithoutPropertiesLoose-4f48578a.js";import{u as b,c as x}from"./Button-7d415009.js";function M(e){return e&&e.ownerDocument||document}const g=!!(typeof window<"u"&&window.document&&window.document.createElement);var m=!1,v=!1;try{var i={get passive(){return m=!0},get once(){return v=m=!0}};g&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch{}function R(e,r,t,n){if(n&&typeof n!="boolean"&&!v){var a=n.once,u=n.capture,o=t;!v&&a&&(o=t.__once||function c(s){this.removeEventListener(r,c,u),t.call(this,s)},t.__once=o),e.addEventListener(r,o,m?n:u)}e.addEventListener(r,t,n)}function N(e,r,t,n){var a=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(r,t,a),t.__once&&e.removeEventListener(r,t.__once,a)}function O(e,r,t,n){return R(e,r,t,n),function(){N(e,r,t,n)}}function B(e){var r=f.useRef(e);return f.useEffect(function(){r.current=e},[e]),r}function T(e){var r=B(e);return f.useCallback(function(){return r.current&&r.current.apply(r,arguments)},[r])}var D=/-(.)/g;function U(e){return e.replace(D,function(r,t){return t.toUpperCase()})}var k=["className","bsPrefix","as"],S=function(r){return r[0].toUpperCase()+U(r).slice(1)};function q(e,r){var t=r===void 0?{}:r,n=t.displayName,a=n===void 0?S(e):n,u=t.Component,o=t.defaultProps,c=d.forwardRef(function(s,l){var E=s.className,_=s.bsPrefix,p=s.as,w=p===void 0?u||"div":p,y=P(s,k),C=b(_,e);return d.createElement(w,L({ref:l,className:x(E,C)},y))});return c.defaultProps=o,c.displayName=a,c}export{g as a,R as b,q as c,O as l,M as o,N as r,T as u};
//# sourceMappingURL=createWithBsPrefix-e09f51dd.js.map