import{l as n}from"./index-abd45326.js";import{ag as d,ai as m,aj as u,ak as p,al as D}from"./SynapseClient-af316750.js";import{m as S}from"./mockAccessRequirements-1ad236a0.js";import{M as a,c as g}from"./mock_user_profile-23583c3f.js";import{M as A,c,d as E,e as C,g as M}from"./mock_file_handle-b348f9e6.js";import{M as I}from"./MockResearchProject-82ef28b7.js";const f="3541518",R="49813181",O={id:f,accessorChanges:[{userId:String(a),type:d.GAIN_ACCESS}],attachments:[A,c],createdBy:String(a),createdOn:"2023-04-19T13:06:51+00:00",ducFileHandleId:E,irbFileHandleId:C,modifiedBy:String(a),modifiedOn:"2023-04-19T13:06:51+00:00",researchProjectId:I,etag:"0",accessRequirementId:String(S.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.Request"},L={id:R,accessorChanges:[{userId:String(a),type:d.GAIN_ACCESS},{userId:String(g),type:d.REVOKE_ACCESS}],attachments:[A,c],createdBy:String(a),createdOn:"2023-04-19T13:06:51+00:00",ducFileHandleId:E,irbFileHandleId:C,modifiedBy:String(a),modifiedOn:"2023-04-19T13:06:51+00:00",researchProjectId:I,etag:"0",accessRequirementId:String(S.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.Renewal",publication:"My cool paper that used this data: https://doi.org/10.1016/j.cell.2011.02.013",summaryOfUse:"We ran a χ² test of homogeneity to determine if this data was representative of the rest of the population with consideration for similar large data collections."};function K(r,i=O){return[n.rest.get(`${r}${m(":id")}`,async(o,s,e)=>{const t=i;return s(e.status(200),e.json(t))}),n.rest.post(`${r}${u}`,async(o,s,e)=>{const t=await o.json();return s(e.status(201),e.json(t))}),n.rest.post(`${r}${p(":id")}`,async(o,s,e)=>s(e.status(201),e.json({})))]}function q(r){return[n.rest.post(`${r}${D}`,async(i,o,s)=>{const e=await i.json(),t={requestedFiles:[]};return e.requestedFiles.forEach(l=>{const _=M.find(T=>T.id===l.fileHandleId);_&&t.requestedFiles.push({fileHandleId:_.id,fileHandle:_})}),o(s.status(201),s.json(t))})]}export{O as M,K as a,L as b,q as g};
//# sourceMappingURL=fileHandlers-fdd991ab.js.map