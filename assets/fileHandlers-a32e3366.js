import{l as n}from"./index-8a9f86e0.js";import{ai as d,aj as T,ak as u,al as p,am as D}from"./SynapseClient-8e79bfab.js";import{m as S}from"./MockSubmission-194eed59.js";import{M as a,c as f}from"./mock_user_profile-ff8c0312.js";import{M as c,d as A,e as E,g as C,h as g}from"./mock_file_handle-fd0e9e29.js";import{M as I}from"./MockResearchProject-b618117c.js";const M="3541518",R="49813181",O={id:M,accessorChanges:[{userId:String(a),type:d.GAIN_ACCESS}],attachments:[c,A],createdBy:String(a),createdOn:"2023-04-19T13:06:51+00:00",ducFileHandleId:E,irbFileHandleId:C,modifiedBy:String(a),modifiedOn:"2023-04-19T13:06:51+00:00",researchProjectId:I,etag:"0",accessRequirementId:String(S.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.Request"};String(a),d.GAIN_ACCESS,String(f),d.REVOKE_ACCESS,c,A,String(a),E,C,String(a),I,String(S.id);function L(r,i=O){return[n.rest.get(`${r}${T(":id")}`,async(o,s,e)=>{const t=i;return s(e.status(200),e.json(t))}),n.rest.post(`${r}${u}`,async(o,s,e)=>{const t=await o.json();return s(e.status(201),e.json(t))}),n.rest.post(`${r}${p(":id")}`,async(o,s,e)=>s(e.status(201),e.json({})))]}function q(r){return[n.rest.post(`${r}${D}`,async(i,o,s)=>{const e=await i.json(),t={requestedFiles:[]};return e.requestedFiles.forEach(l=>{const _=g.find(m=>m.id===l.fileHandleId);_&&t.requestedFiles.push({fileHandleId:_.id,fileHandle:_})}),o(s.status(201),s.json(t))})]}export{O as M,L as a,q as g};
//# sourceMappingURL=fileHandlers-a32e3366.js.map