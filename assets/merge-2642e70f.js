import{e as M,S as x}from"./_Uint8Array-81ff25c8.js";import{a as F,c as I,k as v,d as P,e as S,f as q,i as w}from"./_baseClone-daafcb33.js";import{b as D}from"./_baseFor-d254fa1e.js";import{b as G,c as L,d as b,a as _,e as R}from"./_getTag-39555acc.js";import{a as h}from"./isArray-5e3f9107.js";import{i as T}from"./isArrayLikeObject-a31b0675.js";import{i as V}from"./isPlainObject-b0225e48.js";import{b as $}from"./_baseRest-2c0b1ec4.js";import{i as B}from"./_isIterateeCall-44d71915.js";function E(n){return $(function(e,i){var o=-1,r=i.length,a=r>1?i[r-1]:void 0,s=r>2?i[2]:void 0;for(a=n.length>3&&typeof a=="function"?(r--,a):void 0,s&&B(i[0],i[1],s)&&(a=r<3?void 0:a,r=1),e=Object(e);++o<r;){var f=i[o];f&&n(e,f,o,a)}return e})}function p(n,e,i){(i!==void 0&&!M(n[e],i)||i===void 0&&!(e in n))&&F(n,e,i)}function g(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function H(n){return I(n,v(n))}function J(n,e,i,o,r,a,s){var f=g(n,i),t=g(e,i),O=s.get(t);if(O){p(n,i,O);return}var d=a?a(f,t,i+"",n,e,s):void 0,m=d===void 0;if(m){var l=h(t),u=!l&&G(t),A=!l&&!u&&L(t);d=t,l||u||A?h(f)?d=f:T(f)?d=P(f):u?(m=!1,d=S(t,!0)):A?(m=!1,d=q(t,!0)):d=[]:V(t)||b(t)?(d=f,b(f)?d=H(f):(!_(f)||R(f))&&(d=w(t))):m=!1}m&&(s.set(t,d),r(d,t,o,a,s),s.delete(t)),p(n,i,d)}function C(n,e,i,o,r){n!==e&&D(e,function(a,s){if(r||(r=new x),_(a))J(n,e,s,i,C,o,r);else{var f=o?o(g(n,s),a,s+"",n,e,r):void 0;f===void 0&&(f=a),p(n,s,f)}},v)}var K=E(function(n,e,i){C(n,e,i)});const z=K;export{C as b,E as c,z as m,H as t};
//# sourceMappingURL=merge-2642e70f.js.map