import{L as h,M as c}from"./_MapCache-5d9b55c6.js";import{aK as g,aG as y,aH as d,aI as m,aM as A,aN as b}from"./SynapseClient-a4e4b778.js";import{a as p,r as v}from"./isArray-5e3f9107.js";import{b as z}from"./_baseTimes-8cccc40f.js";import{i as S}from"./_isIndex-af14b756.js";var w=Object.prototype,O=w.hasOwnProperty;function I(t,e){var r=p(t),s=!r&&g(t),n=!r&&!s&&y(t),i=!r&&!s&&!n&&d(t),o=r||s||n||i,u=o?z(t.length,String):[],l=u.length;for(var a in t)(e||O.call(t,a))&&!(o&&(a=="length"||n&&(a=="offset"||a=="parent")||i&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||S(a,l)))&&u.push(a);return u}function x(t){return m(t)?I(t):A(t)}function L(t,e){for(var r=-1,s=e.length,n=t.length;++r<s;)t[n+r]=e[r];return t}function P(){this.__data__=new h,this.size=0}function G(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function K(t){return this.__data__.get(t)}function E(t){return this.__data__.has(t)}var M=200;function U(t,e){var r=this.__data__;if(r instanceof h){var s=r.__data__;if(!b||s.length<M-1)return s.push([t,e]),this.size=++r.size,this;r=this.__data__=new c(s)}return r.set(t,e),this.size=r.size,this}function f(t){var e=this.__data__=new h(t);this.size=e.size}f.prototype.clear=P;f.prototype.delete=G;f.prototype.get=K;f.prototype.has=E;f.prototype.set=U;function C(t,e){for(var r=-1,s=t==null?0:t.length,n=0,i=[];++r<s;){var o=t[r];e(o,r,t)&&(i[n++]=o)}return i}function R(){return[]}var T=Object.prototype,$=T.propertyIsEnumerable,_=Object.getOwnPropertySymbols,k=_?function(t){return t==null?[]:(t=Object(t),C(_(t),function(e){return $.call(t,e)}))}:R;const B=k;function H(t,e,r){var s=e(t);return p(t)?s:L(s,r(t))}function J(t){return H(t,x,B)}var D=v.Uint8Array;const Q=D;export{f as S,Q as U,L as a,I as b,B as c,H as d,C as e,J as g,x as k,R as s};
//# sourceMappingURL=_Uint8Array-c4b717ff.js.map