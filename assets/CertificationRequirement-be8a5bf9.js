import{a,j as i}from"./jsx-runtime-095bf462.js";import{b4 as c}from"./SynapseClient-f341520e.js";import"./index-8db94870.js";import"./EntityTypeUtils-e39da199.js";import"./OrientationBanner-ec8fcbed.js";import{P as m}from"./getEndpoint-ac94413e.js";import{a as r,R as f}from"./RequirementItem-66617ba1.js";import{T as o}from"./Typography-bbc222e1.js";import{L as p}from"./Link-c55ec6e2.js";function s(){const{data:e,isLoading:t}=c(),n=t?r.LOADING:e!=null&&e.isCertified?r.COMPLETE:r.LOCKED;return a(f,{status:n,children:[a(o,{variant:"body1",children:["You must first become a"," ",i(p,{href:`${m.PORTAL}#!Quiz:`,children:"certified user"})]}),t&&i("span",{className:"spinner"}),(e==null?void 0:e.isCertified)&&i(o,{variant:"body1",children:"You are a certified user"})]})}try{s.displayName="CertificationRequirement",s.__docgenInfo={description:`When creating requests for access requirements on a particular file, one or more access requirements may require that the
user is certified.

This component checks if the user is certified, and if not, provides a link on how to begin certification.`,displayName:"CertificationRequirement",props:{}}}catch{}export{s as C};
//# sourceMappingURL=CertificationRequirement-be8a5bf9.js.map