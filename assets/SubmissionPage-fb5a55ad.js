import{a as t,j as e,F as o}from"./jsx-runtime-670450c2.js";import{d as h}from"./dayjs.min-e0adaab4.js";import{r as S,R as y}from"./index-f1f749bf.js";import{al as g,ak as F,ag as j}from"./SynapseContext-8a8a2a7d.js";import{f as A}from"./DateFormatter-242cd4e4.js";import{b as U,u as B}from"./useDataAccessSubmission-6979f5ad.js";import{a as N,d as P,e as E}from"./useAccessRequirements-b4377807.js";import{A as O}from"./SynapseConstants-6db32387.js";import{S as L}from"./ManagedACTAccessRequirementStatus-9671fe8d.js";import{r as M,F as H,f as K}from"./AccessRequirementList-660708e6.js";import{W as _}from"./WarningModal-5c61fbe5.js";import{U as v}from"./UserCard-31a43ed8.js";import{U as R}from"./UserOrTeamBadge-2c13a88b.js";import{R as k}from"./RejectDataAccessRequestModal-eed00ef7.js";import{T as i}from"./Typography-641a9a3f.js";import{S as d}from"./Skeleton-43b766b0.js";import{B as b}from"./Button-7d415009.js";import{u as V}from"./upperFirst-6d18bcef.js";import{t as W}from"./toLower-e173e626.js";h.extend(M);function f(l){const{submissionId:r,fileHandleId:c}=l,m=y.useMemo(()=>({fileHandleId:c,associateObjectId:r,associateObjectType:j.DataAccessSubmissionAttachment}),[c,r]);return e(H,{showDownloadIcon:!0,fileHandleAssociation:m},c)}function G(l){return e(_,{show:l.show,title:"Approve Request?",modalBody:t(o,{children:[e(i,{variant:"body1",children:"Approving the request will grant access to controlled data."}),e(i,{variant:"body1",children:"In addition, the user will receive an email notification alerting them that the request has been granted."})]}),onConfirm:l.onConfirm,onConfirmCallbackArgs:[],onCancel:l.onCancel,confirmButtonText:"Approve"})}function z(l){const{data:r}=E(l.accessRequirementId,{useErrorBoundary:!0});return r?e("div",{className:"AccessRequirementWikiContainer",children:t("div",{className:"AccessRequirementWikiContent",children:[e(i,{variant:"headline1",children:"Access Requirement"}),e("hr",{}),e(K,{wikiId:r==null?void 0:r.wikiPageId,ownerId:r==null?void 0:r.ownerObjectId,objectType:r==null?void 0:r.ownerObjectType})]})}):e(d,{width:"100%",height:"600px"})}function w(l){var I;const{submissionId:r}=l,[c,m]=S.useState(!1),D=g(),{data:a,refetch:q}=U(r,{useErrorBoundary:!0}),{mutateAsync:C}=B(),{data:n}=N(parseInt(a==null?void 0:a.accessRequirementId),{enabled:!!a}),{data:u}=P(a==null?void 0:a.accessRequirementId,{enabled:!!a,useErrorBoundary:!0}),[T,p]=S.useState(!1);function x(){return C({submissionId:(a==null?void 0:a.id)??"",newState:L.APPROVED})}return t("div",{className:"SubmissionPage",children:[e(G,{show:T,onCancel:()=>{p(!1)},onConfirm:async()=>{try{await x()}catch(s){D(s)}p(!1),q()}}),e(k,{submissionId:r,open:c,onClose:()=>m(!1)},r),t("div",{className:"SubmissionSummary",children:[e(i,{variant:"dataFieldKey",children:"Status"}),e(i,{variant:"headline3",children:a?a.state:e(d,{width:100})}),e("br",{}),a?a.state==="SUBMITTED"&&t("div",{className:"bootstrap-4-backport ButtonContainer",children:[e(b,{onClick:()=>{p(!0)},variant:"success",children:"Approve"}),e(b,{onClick:()=>{m(!0)},variant:"danger",children:"Reject"})]}):e(d,{width:200}),e(i,{variant:"dataFieldKey",children:"Access Requirement Name"}),e(i,{variant:"smallText1",children:(n==null?void 0:n.name)??e(d,{width:100})}),e("br",{}),e(i,{variant:"dataFieldKey",children:"Assigned Reviewer"}),e(i,{variant:"smallText1",children:u!==void 0?u!==null?u.resourceAccess.map(s=>e(R,{principalId:s.principalId},s.principalId)):e(R,{principalId:O}):e(d,{width:100})}),e("br",{}),e(i,{variant:"dataFieldKey",children:"Conditions"}),n?e(i,{variant:"smallText1",component:"div",children:t("ul",{children:[t("li",{children:["Expiration period:"," ",h.duration({milliseconds:n.expirationPeriod}).asDays()," ","day(s)",n.expirationPeriod===0&&" (no expiration)"]}),n.isCertifiedUserRequired&&e("li",{children:"User must be Certified"}),n.isValidatedProfileRequired&&e("li",{children:"User Profile must be Validated"}),n.isDUCRequired&&e("li",{children:"DUC is required"}),n.isIDURequired&&e("li",{children:"IDU is required"}),n.isIDUPublic&&e("li",{children:"IDU will be made public"}),n.isIRBApprovalRequired&&e("li",{children:"IRB Approval is required"}),n.areOtherAttachmentsRequired&&e("li",{children:"Other attachments are required"})]})}):e(d,{width:100}),e("br",{}),t("div",{className:"SubmissionSummaryGrid",children:[e(i,{variant:"dataFieldKey",children:"Submitted By"}),e(i,{variant:"smallText1",children:a?e(v,{size:"SMALL USER CARD",ownerId:a.submittedBy}):e(d,{width:100})}),e(i,{variant:"dataFieldKey",children:"Submitted On"}),e(i,{variant:"smallText1",children:a?A(h(a.submittedOn)):e(d,{width:100})}),e(i,{variant:"dataFieldKey",children:"Modified By"}),e(i,{variant:"smallText1",children:a?e(v,{size:"SMALL USER CARD",ownerId:a.modifiedBy}):e(d,{width:100})}),e(i,{variant:"dataFieldKey",children:"Modified On"}),e(i,{variant:"smallText1",children:a?A(h(a.modifiedOn)):e(d,{width:100})}),t(i,{className:"Key",variant:"dataFieldKey",children:["Data Requesters",`${a?` (${a.accessorChanges.length})`:""}`]}),a?a.accessorChanges.map(s=>t(y.Fragment,{children:[e(i,{className:"Key DataAccessor",variant:"smallText1",children:e("span",{style:{whiteSpace:"nowrap"},children:e(v,{size:"SMALL USER CARD",ownerId:s.userId},s.userId)})}),e(i,{className:"Value DataAccessor",variant:"smallText1",children:V(W(s.type.substring(0,s.type.indexOf("_"))))})]},s.userId)):e(d,{width:100}),e(i,{className:"Key",variant:"dataFieldKey",children:"Institution"}),e(i,{className:"Value",variant:"smallText1",children:a?a.researchProjectSnapshot.institution:e(d,{width:100})}),e(i,{className:"Key",variant:"dataFieldKey",children:"Project Lead"}),e(i,{className:"Value",variant:"smallText1",children:a?a.researchProjectSnapshot.projectLead:e(d,{width:100})})]})]}),t("div",{className:"SubmissionRightPane",children:[e(F,{children:a?e(z,{accessRequirementId:a.accessRequirementId}):e(o,{})}),t("div",{children:[(a==null?void 0:a.rejectedReason)&&t(o,{children:[e(i,{variant:"headline1",children:"Reason for rejection given by reviewer"}),e("hr",{}),e(i,{variant:"body1",style:{whiteSpace:"pre-line"},children:a.rejectedReason})]}),e(i,{variant:"headline1",children:"Contents of the Access Request"}),e("hr",{}),((I=a==null?void 0:a.researchProjectSnapshot)==null?void 0:I.intendedDataUseStatement)&&t(o,{children:[e(i,{variant:"headline2",children:"Intended Data Use Statement"}),e(i,{variant:"body1",style:{whiteSpace:"pre-line"},children:a.researchProjectSnapshot.intendedDataUseStatement})]}),e(i,{variant:"headline2",children:"Documents"}),(a==null?void 0:a.ducFileHandleId)&&t(o,{children:[e(i,{variant:"smallText2",children:"Data Use Certificate (DUC)"}),e(f,{submissionId:a.id,fileHandleId:a.ducFileHandleId})]}),(a==null?void 0:a.irbFileHandleId)&&t(o,{children:[e(i,{variant:"smallText2",children:"IRB Approval Letter"}),e(f,{submissionId:a.id,fileHandleId:a.irbFileHandleId})]}),(a==null?void 0:a.attachments)&&t(o,{children:[e(i,{variant:"smallText2",children:"Other Attachments"}),a.attachments.map(s=>t(y.Fragment,{children:[e(f,{submissionId:a.id,fileHandleId:s}),e("br",{})]},s))]})]})]})]})}try{w.displayName="SubmissionPage",w.__docgenInfo={description:"Page for a Data Access Submission that a designated reviewer can view, and choose to approve or reject.",displayName:"SubmissionPage",props:{submissionId:{defaultValue:null,description:"The ID of the submission to view",name:"submissionId",required:!0,type:{name:"string | number"}}}}}catch{}export{w as S};
//# sourceMappingURL=SubmissionPage-fb5a55ad.js.map