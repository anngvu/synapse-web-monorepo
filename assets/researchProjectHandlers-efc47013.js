import{a as o}from"./index-513fe62f.js";import{at as n,au as E}from"./EntityTypeUtils-ff900331.js";import{a as R}from"./MockResearchProject-6539d358.js";function p(e){return[o.rest.post(`${e}${n}`,async(t,r,s)=>{const a=await t.json();return r(s.status(201),s.json(a))}),o.rest.get(`${e}${E(":id")}`,async(t,r,s)=>{const a={...R,accessRequirementId:t.params.id.toString()};return r(s.status(200),s.json(a))})]}export{p as g};
//# sourceMappingURL=researchProjectHandlers-efc47013.js.map
