import{a as t,j as r}from"./jsx-runtime-095bf462.js";import{a$ as n}from"./SynapseClient-3d6edbd0.js";import"./index-8db94870.js";import"./EntityTypeUtils-403062fd.js";import"./OrientationBanner-892f3bb7.js";import{P as m}from"./getEndpoint-ac94413e.js";import{R as p,a as i}from"./RequirementItem-e8cfb127.js";import{T as o}from"./Typography-65c9d67d.js";import{L as d}from"./Link-a20b00c0.js";function s(){const{data:e,isLoading:a}=n();return t(p,{status:a?i.LOADING:e.isVerified?i.COMPLETE:i.LOCKED,children:[t(o,{variant:"body1",children:["You must first apply to have your"," ",r(d,{href:`${m.PORTAL}#!Profile:v/settings`,children:"user profile validated"})]}),a&&r("span",{className:"spinner"}),(e==null?void 0:e.isVerified)&&r(o,{variant:"body1",children:"Your user profile is validated."})]})}try{s.displayName="ValidationRequirement",s.__docgenInfo={description:`When creating requests for access requirements on a particular file, one or more access requirements may require that the
user has a validated profile.

This component checks if the user has a validated profile, and if not, provides a link on how to begin profile validation.`,displayName:"ValidationRequirement",props:{}}}catch{}export{s as V};
//# sourceMappingURL=ValidationRequirement-183d71e2.js.map