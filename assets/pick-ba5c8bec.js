import{a as c}from"./toString-cc90cb98.js";import{i as L,a as O,g as F,b as x,d as A}from"./_baseClone-a6b436bf.js";import{a as C,b as g,d as o,t as v,h as E}from"./hasIn-c5abd582.js";import{b as P}from"./_baseSlice-cf92e063.js";import{i as S}from"./_isIndex-af14b756.js";import{aF as m}from"./SynapseClient-d7c1516f.js";import{s as G,o as I}from"./_MapCache-c874266c.js";function N(n){var r=n==null?0:n.length;return r?C(n,1):[]}function _(n){return G(I(n,void 0,N),n+"")}function B(n){var r=n==null?0:n.length;return r?n[r-1]:void 0}function D(n,r){return r.length<2?n:g(n,P(r,0,-1))}function K(n,r){return r=o(r,n),n=D(n,r),n==null||delete n[v(B(r))]}function M(n){return L(n)?void 0:n}var R=1,T=2,h=4,p=_(function(n,r){var e={};if(n==null)return e;var i=!1;r=c(r,function(t){return t=o(t,n),i||(i=t.length>1),t}),O(n,F(n),e),i&&(e=x(e,R|T|h,M));for(var s=r.length;s--;)K(e,r[s]);return e});const z=p;function U(n,r,e,i){if(!m(n))return n;r=o(r,n);for(var s=-1,t=r.length,a=t-1,l=n;l!=null&&++s<t;){var u=v(r[s]),f=e;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(s!=a){var d=l[u];f=i?i(d,u,l):void 0,f===void 0&&(f=m(d)?d:S(r[s+1])?[]:{})}A(l,u,f),l=l[u]}return n}function Y(n,r,e){for(var i=-1,s=r.length,t={};++i<s;){var a=r[i],l=g(n,a);e(l,a)&&U(t,o(a,n),l)}return t}function $(n,r){return Y(n,r,function(e,i){return E(n,i)})}var q=_(function(n,r){return n==null?{}:$(n,r)});const k=q;export{k as _,K as a,U as b,N as c,Y as d,_ as f,B as l,z as o,D as p};
//# sourceMappingURL=pick-ba5c8bec.js.map