import{a as c}from"./index-df1ee903.js";import{ak as p,al as E,am as g,an as S,ao as R,o as l}from"./EntityTypeUtils-5f3d9964.js";import{a as A}from"./mockWiki-9968c904.js";import{M as I}from"./getEndpoint-ac94413e.js";import{S as k}from"./ManagedACTAccessRequirementStatus-9671fe8d.js";import{d as u,e as f}from"./mockAccessRequirements-c4fcc9b7.js";import{m}from"./MockSubmission-ae96a948.js";const $=n=>[c.rest.get(`${n}${p(":arId",":wikiId")}`,async(s,t,r)=>{let a=404,e={reason:`Mock Service worker could not find a wiki page with ID ${s.params.wikiId}`};const i=A.find(o=>o.id===s.params.wikiId);return i&&(e=i,a=200),t(r.status(a),r.json(e))})],O=n=>[c.rest.get(`${n}${E(":id")}`,async(s,t,r)=>{let a=404,e={reason:`Mock Service worker could not find an access requirement with ID ${s.params.id}`};const i=u.find(o=>o.id.toString()===s.params.id);return i&&(e=i,a=200),t(r.status(a),r.json(e))}),c.rest.get(`${n}${g(":id")}`,async(s,t,r)=>{let a=404,e={reason:`Mock Service worker could not find an access requirement wiki page key with AR ID ${s.params.id}`};const i=f.find(o=>(o.ownerObjectType===S.ACCESS_REQUIREMENT&&o.ownerObjectId.toString())===s.params.id);return i&&(e=i,a=200),t(r.status(a),r.json(e))})],N=(n,s=":entityId",t=u)=>[c.rest.get(`${I}${R(s)}`,async(r,a,e)=>{let i=200,o={results:t,totalNumberOfResults:t.length};return a(e.status(i),e.json(o))})],P=(n,s={})=>[c.rest.get(`${n}${l(":id")}`,async(t,r,a)=>{let e;const i=u.find(d=>t.params.id===d.id.toString());if(t.params.id in s&&(e=s[t.params.id]),!e){const d=i.concreteType==="org.sagebionetworks.repo.model.ManagedACTAccessRequirement";e={accessRequirementId:t.params.id,concreteType:d?"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus":"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:d?{submissionId:m.id,submittedBy:m.submittedBy,modifiedOn:m.modifiedOn,state:k.APPROVED}:void 0}}const o=e?200:404;return r(a.status(o),a.json(e))})];export{N as a,P as b,$ as c,O as g};
//# sourceMappingURL=accessRequirementHandlers-cb950f69.js.map