import{aY as t,f as o,aZ as n,k as y,O as a,a_ as R}from"./SynapseClient-ff77005a.js";import{M as e,a as b}from"./mock_user_profile-5b527b8a.js";import{m as A}from"./mockProject-9cd641d7.js";import{m as k,a as q,b as C,c as E,d as O}from"./mockWiki-e84ed272.js";import{b as w}from"./mock_file_handle-eea03cf6.js";import{l as h}from"./index-5dceb175.js";const j={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:t.RENEW_ACCESS},{userId:b.toString(),type:t.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:o.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:n.ENTITY},P={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:t.GAIN_ACCESS},{userId:b.toString(),type:t.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:o.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},B={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:t.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:o.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:n.ENTITY},U={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:t.RENEW_ACCESS},{userId:"3350396",type:t.GAIN_ACCESS},{userId:"3371908",type:t.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:o.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},L=[B,j,P,U],f=A.id,i={id:1,name:"Mocked access requirement",etag:"26489045-3a98-405f-b214-9e1c90208c64",createdOn:"2019-02-06T21:17:25.790Z",modifiedOn:"2020-07-24T18:11:35.323Z",versionNumber:1,subjectIds:[{id:"syn12664802",type:n.ENTITY}],createdBy:"1981374",modifiedBy:"1981374",accessType:y.DOWNLOAD},s={...i,id:1,concreteType:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",areOtherAttachmentsRequired:!0,isCertifiedUserRequired:!0,isDUCRequired:!0,isIDUPublic:!0,isIDURequired:!0,ducTemplateFileHandleId:w.id,expirationPeriod:1e3*60*60*24,isIRBApprovalRequired:!0,isValidatedProfileRequired:!0,isTwoFaRequired:!0,description:"",subjectsDefinedByAnnotations:!1},D={wikiPageId:k.id,ownerObjectId:s.id.toString(),ownerObjectType:a.ACCESS_REQUIREMENT},Z={...i,id:2,concreteType:"org.sagebionetworks.repo.model.TermsOfUseAccessRequirement",termsOfUse:"These are the termsOfUse for a TermsOfUseAccessRequirement. The content is inlined in the object, but **markdown** is supported.",description:"",subjectsDefinedByAnnotations:!1},g={...i,id:3,concreteType:"org.sagebionetworks.repo.model.SelfSignAccessRequirement",isCertifiedUserRequired:!0,isValidatedProfileRequired:!0,description:"",subjectsDefinedByAnnotations:!1},_={wikiPageId:q.id,ownerObjectId:g.id.toString(),ownerObjectType:a.ACCESS_REQUIREMENT},N={...i,id:4,concreteType:"org.sagebionetworks.repo.model.ACTAccessRequirement",actContactInfo:"This is the actContactInfo for the ACTAccessRequirement. You would probably email some documentation to act@sagebase.org, or something like that. **Markdown is supported**.",openJiraIssue:!0,description:"",subjectsDefinedByAnnotations:!1},W={...i,id:5,concreteType:"org.sagebionetworks.repo.model.LockAccessRequirement",description:"",subjectsDefinedByAnnotations:!1,jiraKey:""},T={...i,id:6,concreteType:"org.sagebionetworks.repo.model.TermsOfUseAccessRequirement",description:"",subjectsDefinedByAnnotations:!1},M={wikiPageId:C.id,ownerObjectId:T.id.toString(),ownerObjectType:a.ACCESS_REQUIREMENT},l={...i,id:7,concreteType:"org.sagebionetworks.repo.model.ACTAccessRequirement",openJiraIssue:!0,description:"",subjectsDefinedByAnnotations:!1},v={wikiPageId:E.id,ownerObjectId:l.id.toString(),ownerObjectType:a.ACCESS_REQUIREMENT};s.id.toString(),s.createdOn,s.modifiedOn,s.name,s.versionNumber.toString(),e.toString();const Q=[s,Z,g,N,W,T,l],J=[D,_,M,v],x=I=>[h.rest.get(`${I}${R(":arId",":wikiId")}`,async(r,S,c)=>{let d=404,m={reason:`Mock Service worker could not find a wiki page with ID ${r.params.wikiId}`};const u=O.find(p=>p.id===r.params.wikiId);return u&&(m=u,d=200),S(c.status(d),c.json(m))})];export{s as a,Q as b,J as c,B as d,g as e,Z as f,x as g,N as h,l as i,T as j,L as m};
//# sourceMappingURL=wikiHandlers-3c6e2b82.js.map