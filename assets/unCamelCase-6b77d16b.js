import{b as A}from"./_baseSlice-cf92e063.js";import{t as R}from"./toString-cc90cb98.js";import{c as v}from"./without-7d3361a1.js";import{b as $}from"./hasIn-f27d5008.js";import{b as h}from"./_baseRest-a521bdfe.js";import{i as f}from"./isArrayLikeObject-5c8b519d.js";import{l as C}from"./pick-d46a53c9.js";import{c as S,b as k}from"./sortBy-ccf5a01c.js";import{a as M}from"./isArray-5e3f9107.js";function y(r,e,a){var n=r.length;return a=a===void 0?n:a,!e&&a>=n?r:A(r,e,a)}var F="\\ud800-\\udfff",U="\\u0300-\\u036f",Z="\\ufe20-\\ufe2f",j="\\u20d0-\\u20ff",x=U+Z+j,O="\\ufe0e\\ufe0f",W="\\u200d",E=RegExp("["+W+F+x+O+"]");function c(r){return E.test(r)}function H(r){return r.split("")}var d="\\ud800-\\udfff",J="\\u0300-\\u036f",T="\\ufe20-\\ufe2f",V="\\u20d0-\\u20ff",z=J+T+V,q="\\ufe0e\\ufe0f",w="["+d+"]",u="["+z+"]",i="\\ud83c[\\udffb-\\udfff]",D="(?:"+u+"|"+i+")",m="[^"+d+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",I="\\u200d",g=D+"?",l="["+q+"]?",L="(?:"+I+"(?:"+[m,p,b].join("|")+")"+l+g+")*",N=l+g+L,P="(?:"+[m+u+"?",u,p,b,w].join("|")+")",B=RegExp(i+"(?="+i+")|"+P+N,"g");function G(r){return r.match(B)||[]}function K(r){return c(r)?G(r):H(r)}function Q(r){return function(e){e=R(e);var a=c(e)?K(e):void 0,n=a?a[0]:e.charAt(0),o=a?y(a,1).join(""):e.slice(1);return n[r]()+o}}var X=Q("toUpperCase");const mr=X;function Y(r,e,a,n){for(var o=-1,t=r==null?0:r.length;++o<t;){var s=r[o];e(n,s,a(s),r)}return n}function _(r,e,a,n){return S(r,function(o,t,s){e(n,o,a(o),s)}),n}function rr(r,e){return function(a,n){var o=M(a)?Y:_,t=e?e():{};return o(a,r,k(n),t)}}var er=h(function(r,e){var a=C(e);return f(a)&&(a=void 0),f(r)?v(r,$(e,1,f,!0),void 0,a):[]});const pr=er;var ar=rr(function(r,e,a){r[a?0:1].push(e)},function(){return[[],[]]});const br=ar,gr=r=>r.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,e=>e.toUpperCase());export{gr as a,Q as b,rr as c,y as d,pr as e,c as h,br as p,K as s,mr as u};
//# sourceMappingURL=unCamelCase-6b77d16b.js.map