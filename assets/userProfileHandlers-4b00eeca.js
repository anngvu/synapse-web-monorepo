import{l as u}from"./index-617c1d39.js";import{ah as $,ai as p,aj as E,ak as I,al as _,am as R,an as g,ao as f,ap as L,aq as S}from"./SynapseClient-d7c1516f.js";import{g as j,B as H}from"./getEndpoint-ac94413e.js";import{M as U,m as d,d as c,a as h}from"./mock_user_profile-4c1267b7.js";import{m as y}from"./mockFileEntity-0ac68e79.js";import{a as P}from"./mock_file_handle-daad41b0.js";const D=P.id,l=P.entity;y.name;const N=y.entityHeader,C="syn20000",k="A $@*#$% terribly named Project",m={id:C,parentId:D,name:"my folder name",concreteType:"org.sagebionetworks.repo.model.Folder"},F={id:m.id,name:m.name,type:m.concreteType,versionNumber:1,versionLabel:"Version label",benefactorId:1234,createdOn:"",modifiedOn:"",createdBy:"",modifiedBy:""},O={totalNumberOfResults:2,results:[N,F]};l.id,l.name,l.modifiedOn,U;const v=i=>[u.rest.get(`${i}${$(":id")}`,async(a,t,e)=>{let s=404,o={reason:`Mock Service worker could not find a user profile with ID ${a.params.id}`};const r=d.find(n=>n.id.toString()===a.params.id);return r&&r.userProfile&&(o=r.userProfile,s=200),t(e.status(s),e.json(o))}),u.rest.get(`${i}${p}`,async(a,t,e)=>{const s=h,o=200;return t(e.status(o),e.json(s))}),u.rest.get(`${j(H.REPO_ENDPOINT)}${E}`,async(a,t,e)=>{const s=c;return t(e.status(200),e.json(s))}),u.rest.get(`${i}${I(":id")}`,async(a,t,e)=>{let s=404,o={reason:`Mock Service worker could not find a user bundle with ID ${a.params.id}`};const r=d.find(n=>n.id.toString()===a.params.id);return r&&r.userBundle&&(o=r.userBundle,s=200),t(e.status(s),e.json(o))}),u.rest.get(`${i}${_}`,async(a,t,e)=>t(e.status(200),e.json(O))),u.rest.get(`${i}${R}`,async(a,t,e)=>{const s=a.url.searchParams.get("ids").split(","),o={children:d.filter(r=>s.includes(r.id.toString())).map(r=>r.userGroupHeader)};return t(e.status(200),e.json(o))}),u.rest.post(`${i}${p}`,async(a,t,e)=>{const s=(await a.json()).list,o={list:d.filter(r=>s.includes(r.id.toString())).map(r=>r.userProfile).filter(r=>r!=null)};return t(e.status(200),e.json(o))}),u.rest.get(`${i}${g}`,async(a,t,e)=>{const s=(a.url.searchParams.get("prefix")??"").toLowerCase(),o=a.url.searchParams.get("typeFilter"),r={children:d.filter(n=>!o||o===f.ALL?!0:o===f.USERS_ONLY?n.userGroupHeader.isIndividual:!n.userGroupHeader.isIndividual).filter(n=>n.userGroupHeader.userName.toLowerCase().startsWith(s)||(n.userGroupHeader.firstName||"").toLowerCase().startsWith(s)||n.userGroupHeader.displayName.toLowerCase().startsWith(s)||(n.userGroupHeader.lastName||"").toLowerCase().startsWith(s)).map(n=>n.userGroupHeader)};return t(e.status(200),e.json(r))}),u.rest.get(`${i}${L(":userId")}`,async(a,t,e)=>t(e.status(404),e.json({reason:"user has no profile image"}))),u.rest.get(`${i}${S}`,async(a,t,e)=>{var s;return t(e.status(200),e.json({email:(s=c.userProfile)==null?void 0:s.email}))}),u.rest.get(`${i}/auth/v1/2fa`,async(a,t,e)=>{const s={status:"ENABLED"};return t(e.status(200),e.json(s))})];function q(i,a,t){return u.rest.get(`${i}${E}`,async(e,s,o)=>{let r=200,n={...c,isCertified:a,isVerified:t};return s(o.status(r),o.json(n))})}export{k as M,v as a,C as b,q as g};
//# sourceMappingURL=userProfileHandlers-4b00eeca.js.map