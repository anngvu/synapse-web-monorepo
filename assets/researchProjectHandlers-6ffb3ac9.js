import{l as a}from"./index-c0a17ffd.js";import{R,o as n}from"./SynapseClient-ce341217.js";import{M as E}from"./MockResearchProject-1796694f.js";function p(o){return[a.rest.post(`${o}${R}`,async(r,t,s)=>{const e=await r.json();return t(s.status(201),s.json(e))}),a.rest.get(`${o}${n(":id")}`,async(r,t,s)=>{const e={...E,accessRequirementId:r.params.id.toString()};return t(s.status(200),s.json(e))})]}export{p as g};
//# sourceMappingURL=researchProjectHandlers-6ffb3ac9.js.map