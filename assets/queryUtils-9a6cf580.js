import{V as l}from"./SynapseConstants-46689190.js";import"./SynapseClient-28b35d32.js";import{d as o,e as c}from"./IsType-c4e88a66.js";import{c as f}from"./cloneDeep-dfa03832.js";const N=(e,t)=>{var r;return((r=t==null?void 0:t.selectColumns)==null?void 0:r.findIndex(n=>n.name===e))??-1},A=(e,t)=>e==null||t==null||e.length===0||t.length===0?!1:e.filter(n=>!m(n)&&t.find(a=>a.name===n.columnName)).length>0,m=e=>e.facetType==="enumeration"&&e.facetValues.length==1&&e.facetValues[0].value==l;function V(e,t){var n;const r=t==null?void 0:t.columnName;if(r&&e){const a=f(e),s=(n=a.facets)==null?void 0:n.filter(i=>i.columnName.toLowerCase()!==r.toLowerCase());return a.facets=s,a}else return e}function p(e,t){const r=Array.isArray(e.selectedFacets)&&e.selectedFacets.filter(a=>a.columnName!==(t==null?void 0:t.columnName)).length>0,n=Array.isArray(e.additionalFilters)&&e.additionalFilters.filter(a=>o(a)||c(a)?a.columnName!==(t==null?void 0:t.columnName):!0).length>0;return r||n}export{m as a,N as g,p as h,A as i,V as r};
//# sourceMappingURL=queryUtils-9a6cf580.js.map