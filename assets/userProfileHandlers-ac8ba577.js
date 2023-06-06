import{l as u}from"./index-abd45326.js";import{a1 as $,a2 as p,a3 as E,a4 as I,a5 as _,a6 as R,a7 as g,a8 as f,a9 as L,aa as S}from"./SynapseClient-af316750.js";import{g as H,B as U}from"./getEndpoint-ac94413e.js";import{M as j,m as d,d as c,a as D}from"./mock_user_profile-23583c3f.js";import{m as y}from"./mockFileEntity-d245c0f5.js";import{a as P}from"./mock_file_handle-b348f9e6.js";const N=P.id,l=P.entity;y.name;const h=y.entityHeader,C="syn20000",v="A $@*#$% terribly named Project",m={id:C,parentId:N,name:"my folder name",concreteType:"org.sagebionetworks.repo.model.Folder"},F={id:m.id,name:m.name,type:m.concreteType,versionNumber:1,versionLabel:"Version label",benefactorId:1234,createdOn:"",modifiedOn:"",createdBy:"",modifiedBy:""},O={totalNumberOfResults:2,results:[h,F]};l.id,l.name,l.modifiedOn,j;const k=i=>[u.rest.get(`${i}${$(":id")}`,async(a,t,e)=>{let s=404,o={reason:`Mock Service worker could not find a user profile with ID ${a.params.id}`};const r=d.find(n=>n.id.toString()===a.params.id);return r&&r.userProfile&&(o=r.userProfile,s=200),t(e.status(s),e.json(o))}),u.rest.get(`${i}${p}`,async(a,t,e)=>{const s=D,o=200;return t(e.status(o),e.json(s))}),u.rest.get(`${H(U.REPO_ENDPOINT)}${E}`,async(a,t,e)=>{const s=c;return t(e.status(200),e.json(s))}),u.rest.get(`${i}${I(":id")}`,async(a,t,e)=>{let s=404,o={reason:`Mock Service worker could not find a user bundle with ID ${a.params.id}`};const r=d.find(n=>n.id.toString()===a.params.id);return r&&r.userBundle&&(o=r.userBundle,s=200),t(e.status(s),e.json(o))}),u.rest.get(`${i}${_}`,async(a,t,e)=>t(e.status(200),e.json(O))),u.rest.get(`${i}${R}`,async(a,t,e)=>{const s=a.url.searchParams.get("ids").split(","),o={children:d.filter(r=>s.includes(r.id.toString())).map(r=>r.userGroupHeader)};return t(e.status(200),e.json(o))}),u.rest.post(`${i}${p}`,async(a,t,e)=>{const s=(await a.json()).list,o={list:d.filter(r=>s.includes(r.id.toString())).map(r=>r.userProfile).filter(r=>r!=null)};return t(e.status(200),e.json(o))}),u.rest.get(`${i}${g}`,async(a,t,e)=>{const s=(a.url.searchParams.get("prefix")??"").toLowerCase(),o=a.url.searchParams.get("typeFilter"),r={children:d.filter(n=>!o||o===f.ALL?!0:o===f.USERS_ONLY?n.userGroupHeader.isIndividual:!n.userGroupHeader.isIndividual).filter(n=>n.userGroupHeader.userName.toLowerCase().startsWith(s)||(n.userGroupHeader.firstName||"").toLowerCase().startsWith(s)||n.userGroupHeader.displayName.toLowerCase().startsWith(s)||(n.userGroupHeader.lastName||"").toLowerCase().startsWith(s)).map(n=>n.userGroupHeader)};return t(e.status(200),e.json(r))}),u.rest.get(`${i}${L(":userId")}`,async(a,t,e)=>t(e.status(404),e.json({reason:"user has no profile image"}))),u.rest.get(`${i}${S}`,async(a,t,e)=>{var s;return t(e.status(200),e.json({email:(s=c.userProfile)==null?void 0:s.email}))}),u.rest.get(`${i}/auth/v1/2fa`,async(a,t,e)=>{const s={status:"ENABLED"};return t(e.status(200),e.json(s))})];function V(i,a,t){return u.rest.get(`${i}${E}`,async(e,s,o)=>{let r=200,n={...c,isCertified:a,isVerified:t};return s(o.status(r),o.json(n))})}export{C as M,k as a,v as b,V as g};
//# sourceMappingURL=userProfileHandlers-ac8ba577.js.map