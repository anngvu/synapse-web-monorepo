import{S as I}from"./_Uint8Array-f84b6e67.js";import{e as M,a as q,k as v,c as x,f as D,h as F,i as L,j as P}from"./_baseClone-1bf93ecc.js";import{e as S}from"./_MapCache-42b99178.js";import{b as w}from"./_baseFor-d254fa1e.js";import{aH as G,aI as H,aL as h,aq as _,bD as R}from"./SynapseClient-8e79bfab.js";import{a as b}from"./isArray-5e3f9107.js";import{i as T}from"./isArrayLikeObject-196409f5.js";import{b as V}from"./_baseRest-ab6aa13f.js";import{i as $}from"./_isIterateeCall-e6d156af.js";function B(n){return V(function(e,i){var o=-1,r=i.length,a=r>1?i[r-1]:void 0,s=r>2?i[2]:void 0;for(a=n.length>3&&typeof a=="function"?(r--,a):void 0,s&&$(i[0],i[1],s)&&(a=r<3?void 0:a,r=1),e=Object(e);++o<r;){var f=i[o];f&&n(e,f,o,a)}return e})}function p(n,e,i){(i!==void 0&&!S(n[e],i)||i===void 0&&!(e in n))&&M(n,e,i)}function g(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function E(n){return q(n,v(n))}function J(n,e,i,o,r,a,s){var f=g(n,i),t=g(e,i),O=s.get(t);if(O){p(n,i,O);return}var d=a?a(f,t,i+"",n,e,s):void 0,m=d===void 0;if(m){var l=b(t),u=!l&&G(t),A=!l&&!u&&H(t);d=t,l||u||A?b(f)?d=f:T(f)?d=x(f):u?(m=!1,d=D(t,!0)):A?(m=!1,d=F(t,!0)):d=[]:L(t)||h(t)?(d=f,h(f)?d=E(f):(!_(f)||R(f))&&(d=P(t))):m=!1}m&&(s.set(t,d),r(d,t,o,a,s),s.delete(t)),p(n,i,d)}function C(n,e,i,o,r){n!==e&&w(e,function(a,s){if(r||(r=new I),_(a))J(n,e,s,i,C,o,r);else{var f=o?o(g(n,s),a,s+"",n,e,r):void 0;f===void 0&&(f=a),p(n,s,f)}},v)}var K=B(function(n,e,i){C(n,e,i)});const z=K;export{C as b,B as c,z as m,E as t};
//# sourceMappingURL=merge-6b1247c2.js.map