import{a as r}from"./index-093780d1.js";import{g as o}from"./entityHandlers-a5376f8e.js";import{a as n,g as m}from"./userProfileHandlers-3f9ecfc1.js";import{g as u,B as l}from"./getEndpoint-ac94413e.js";import{c as g,g as i,a as H,b as d}from"./accessRequirementHandlers-d62efd83.js";import{a as p,g as f}from"./fileHandlers-7e3ed9c2.js";import{g as c}from"./researchProjectHandlers-07604eba.js";const q=t=>[r.rest.options("*",async(a,s,e)=>s(e.status(200))),r.rest.get(`${t}/auth/v1/authenticatedOn`,async(a,s,e)=>s(e.status(200),e.json({authenticatedOn:new Date().toISOString()}))),...o(t),...n(t),m(t,!0,!0),...g(t),...i(t),...H(),...d(t),...p(t),...c(t),...f(t)];q(u(l.REPO_ENDPOINT));export{q as g};
//# sourceMappingURL=handlers-381441e8.js.map