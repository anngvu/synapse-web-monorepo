import{a as r}from"./index-10eb708c.js";import{g as o}from"./entityHandlers-8c39ff51.js";import{a as n,g as m}from"./userProfileHandlers-e2107c4f.js";import{g as u,B as l}from"./getEndpoint-ac94413e.js";import{c as g,g as i,a as H,b as d}from"./accessRequirementHandlers-2b7944df.js";import{a as p,g as f}from"./fileHandlers-34d55f09.js";import{g as c}from"./researchProjectHandlers-f531f8b0.js";const q=t=>[r.rest.options("*",async(a,s,e)=>s(e.status(200))),r.rest.get(`${t}/auth/v1/authenticatedOn`,async(a,s,e)=>s(e.status(200),e.json({authenticatedOn:new Date().toISOString()}))),...o(t),...n(t),m(t,!0,!0),...g(t),...i(t),...H(),...d(t),...p(t),...c(t),...f(t)];q(u(l.REPO_ENDPOINT));export{q as g};
//# sourceMappingURL=handlers-b99d67ad.js.map
