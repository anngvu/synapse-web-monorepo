import{S as b,c as w}from"./_cacheHas-6a8ad860.js";import{a as d}from"./toString-cc90cb98.js";import{aF as x}from"./SynapseClient-c43c6534.js";import{b as m}from"./_baseRest-052a6903.js";import{i as I}from"./isArrayLikeObject-c369fda5.js";function a(n,t,i,e){for(var f=n.length,s=i+(e?1:-1);e?s--:++s<f;)if(t(n[s],s,n))return s;return-1}function p(n){return n!==n}function A(n,t,i){for(var e=i-1,f=n.length;++e<f;)if(n[e]===t)return e;return-1}function L(n,t,i){return t===t?A(n,t,i):a(n,p,i)}function O(n,t){var i=n==null?0:n.length;return!!i&&L(n,t,0)>-1}function R(n,t,i){for(var e=-1,f=n==null?0:n.length;++e<f;)if(i(t,n[e]))return!0;return!1}var S=200;function C(n,t,i,e){var f=-1,s=O,l=!0,o=n.length,h=[],g=t.length;if(!o)return h;i&&(t=d(t,x(i))),e?(s=R,l=!1):t.length>=S&&(s=w,l=!1,t=new b(t));n:for(;++f<o;){var r=n[f],c=i==null?r:i(r);if(r=e||r!==0?r:0,l&&c===c){for(var u=g;u--;)if(t[u]===c)continue n;h.push(r)}else s(t,c,e)||h.push(r)}return h}var E=m(function(n,t){return I(n)?C(n,t):[]});const D=E;export{O as a,C as b,R as c,a as d,L as e,p as f,D as w};
//# sourceMappingURL=without-c7324a45.js.map