import{a as d}from"./index-4b0d6f52.js";import{E as U,w as z,x as R,y as Q,z as X,A as B,B as x,C as ee,D as te,U as se,F as j,G as ne,H as oe,I as re,J as ie,K as ae,P as de,N as ce,L as me,M as le,O as ye,R as ue}from"./SynapseContext-0510efef.js";import{g as w,B as A,M as pe}from"./getEndpoint-5374ab4d.js";import{m as fe,a as Ie,A as h,M as c,b as p,c as y,d as $,e as k,f as b,g as F,h as Ee,i as ge,j as be,k as Se}from"./mockAccessRequirements-7627273f.js";import{R as Te}from"./RestrictionInformation-4ed2591e.js";import{U as ve}from"./UploadDestination-5ff3844f.js";const S=y.id,ke=y.name,E="syn123",T="My mock file entity",Ne="45745485",l={id:E,parentId:S,dataFileHandleId:$,name:T,concreteType:"org.sagebionetworks.repo.model.FileEntity",createdBy:c.toString(),modifiedBy:k.toString(),etag:"00000000-0000-0000-0000-000000000000",versionNumber:3,versionLabel:"a label for version 3",isLatestVersion:!0,createdOn:"2021-03-02T15:05:34.973Z",modifiedOn:"2021-03-05T11:31:24.521Z"},De=[{id:E,modifiedBy:c.toString(),versionNumber:1,versionLabel:"a label for version 1",versionComment:"a comment",contentSize:"100",contentMd5:"d836adae5632872014783b05cd2f76d7",modifiedByPrincipalId:c.toString(),modifiedOn:"2021-03-02T15:05:34.973Z",isLatestVersion:!1},{id:E,modifiedBy:c.toString(),versionNumber:3,versionLabel:"a label for version 3",versionComment:"a comment about version 3",contentSize:"100",contentMd5:"bc91a4a16ccb21944fcee55275dc4574",modifiedByPrincipalId:c.toString(),modifiedOn:"2021-03-05T11:31:24.521Z",isLatestVersion:!0}],he={3:{id:E,parentId:S,dataFileHandleId:$,name:T,concreteType:"org.sagebionetworks.repo.model.FileEntity",createdBy:c.toString(),modifiedBy:c.toString(),etag:"00000000-0000-0000-0000-000000000000",versionNumber:3,versionLabel:"a label for version 3",isLatestVersion:!0},1:{id:E,parentId:S,dataFileHandleId:$,name:T,concreteType:"org.sagebionetworks.repo.model.FileEntity",createdBy:c.toString(),modifiedBy:c.toString(),etag:"00000000-0000-0000-0000-000000000000",versionNumber:1,versionLabel:"a label for version 1",isLatestVersion:!1}},V={path:[{name:"root",id:"syn4489",type:"org.sagebionetworks.repo.model.Folder"},{name:ke,id:S,type:"org.sagebionetworks.repo.model.Project"},{name:T,id:E,type:"org.sagebionetworks.repo.model.FileEntity"}]},_e={entity:l,entityType:U.FILE,fileHandles:[fe,Ie],annotations:{id:E,etag:"00000000-0000-0000-0000-000000000000",annotations:{myStringKey:{type:h.STRING,value:["myValue"]},myIntegerKey:{type:h.LONG,value:[4325435345213,4321]},myFloatKey:{type:h.LONG,value:[1.5,17/13]}}},rootWikiId:Ne,fileName:l.name,benefactorAcl:{id:S,creationDate:"2020-11-18T20:05:06.540Z",etag:"f143bbfd-ba09-4a42-b1e9-f9368777ad9b",resourceAccess:[{principalId:c,accessType:[p.DELETE,p.CHANGE_SETTINGS,p.MODERATE,p.CHANGE_PERMISSIONS,p.UPDATE,p.READ,p.DOWNLOAD,p.CREATE]},{principalId:273948,accessType:[p.READ]},{principalId:273949,accessType:[p.READ]}]},permissions:{canView:!0,canEdit:!0,canMove:!0,canAddChild:!0,canCertifiedUserEdit:!0,canCertifiedUserAddChild:!0,isCertifiedUser:!0,canChangePermissions:!0,canChangeSettings:!0,canDelete:!0,canDownload:!0,canUpload:!0,canEnableInheritance:!0,ownerPrincipalId:3350396,canPublicRead:!0,canModerate:!0,isCertificationRequired:!0,isEntityOpenData:!1},threadCount:5,path:V,restrictionInformation:{restrictionLevel:Te.OPEN,hasUnmetAccessRequirement:!1}},Ce={id:l.id,name:l.name,etag:l.etag,createdOn:l.createdOn,modifiedOn:l.modifiedOn,createdBy:l.createdBy,modifiedBy:l.modifiedBy,parentId:"syn4489",concreteType:"org.sagebionetworks.repo.model.Project",myStringKey:"myValue",myIntegerKey:[4325435345213,4321],myFloatKey:[1.5,17/13]},$e={id:l.id,name:l.name,type:l.concreteType,versionNumber:3,versionLabel:"a label for version 3",benefactorId:123,createdOn:l.createdOn,modifiedOn:l.modifiedOn,createdBy:c.toString(),modifiedBy:k.toString(),isLatestVersion:!0},N={id:E,name:T,entity:l,bundle:_e,json:Ce,versions:he,versionInfo:De,entityHeader:$e,path:V},g="syn234",D="A Mocked Dataset",v={id:g,parentId:y.id,name:D,concreteType:"org.sagebionetworks.repo.model.table.Dataset",createdBy:c.toString(),modifiedBy:k.toString(),createdOn:"2020-01-01T00:00:00.000Z",modifiedOn:"2020-02-01T00:00:00.000Z",versionNumber:3,versionLabel:"in progress",versionComment:"in progress",isLatestVersion:!0,etag:"00000000-0000-0000-0000-000000000000",items:[],columnIds:[],isSearchEnabled:!1},we={id:g,type:"org.sagebionetworks.repo.model.table.Dataset",name:D,benefactorId:parseInt(y.id),createdOn:"2020-01-01T00:00:00.000Z",modifiedOn:"2020-02-01T00:00:00.000Z",createdBy:c.toString(),modifiedBy:c.toString(),versionNumber:3,versionLabel:"in progress",isLatestVersion:!0},K={path:[{name:"root",id:"syn4489",type:"org.sagebionetworks.repo.model.Folder"},{name:y.name,id:y.id,type:"org.sagebionetworks.repo.model.Project"},{name:D,id:g,type:"org.sagebionetworks.repo.model.FileEntity"}]},Ae={1:{...v,versionNumber:1,versionLabel:"snapshot 1",versionComment:"",isLatestVersion:!1},2:{...v,versionNumber:2,versionLabel:"snapshot 2",versionComment:"",isLatestVersion:!1}},Oe=[{id:g,versionNumber:2,versionLabel:"snapshot 2",versionComment:"",isLatestVersion:!1,modifiedBy:c.toString(),modifiedByPrincipalId:c.toString(),modifiedOn:"2022-03-22T18:50:22.336Z"},{id:g,versionNumber:1,versionLabel:"snapshot 1",versionComment:"",isLatestVersion:!1,modifiedBy:c.toString(),modifiedByPrincipalId:c.toString(),modifiedOn:"2022-03-22T18:47:34.797Z"}],Le={entity:v,entityType:U.DATASET,path:K,permissions:{canView:!0,canEdit:!0,canMove:!0,canAddChild:!0,canCertifiedUserEdit:!0,canCertifiedUserAddChild:!0,isCertifiedUser:!0,canChangePermissions:!0,canChangeSettings:!0,canDelete:!0,canDownload:!0,canUpload:!0,canEnableInheritance:!0,ownerPrincipalId:3350396,canPublicRead:!0,canModerate:!0,isCertificationRequired:!0,isEntityOpenData:!1}},G={id:g,name:D,entity:v,entityHeader:we,path:K,bundle:Le,versions:Ae,versionInfo:Oe},O="syn654651",L="A Mocked Dataset Collection",Me={id:O,parentId:y.id,name:L,concreteType:"org.sagebionetworks.repo.model.table.DatasetCollection",createdBy:c.toString(),modifiedBy:c.toString(),etag:"00000000-0000-0000-0000-000000000000",items:[{entityId:G.id,versionNumber:1}],columnIds:[],isSearchEnabled:!1},Pe={path:[{name:"root",id:"syn4489",type:"org.sagebionetworks.repo.model.Folder"},{name:y.name,id:y.id,type:"org.sagebionetworks.repo.model.Project"},{name:L,id:O,type:"org.sagebionetworks.repo.model.FileEntity"}]},Re={id:O,name:L,entity:Me,path:Pe},M="syn345",Z="my table name",Y=y.id,I={id:M,versionNumber:1,versionLabel:"in progress",versionComment:"in progress",parentId:Y,name:Z,concreteType:"org.sagebionetworks.repo.model.table.TableEntity",createdBy:c.toString(),createdOn:"2022-02-03T12:44:35.457Z",modifiedOn:"2022-05-14T17:10:36.915Z",modifiedBy:k.toString(),etag:"00000000-0000-0000-0000-000000000000",columnIds:[],isSearchEnabled:!0,isLatestVersion:!0},Be={name:I.name,id:M,type:"org.sagebionetworks.repo.model.table.TableEntity",versionNumber:I.versionNumber,versionLabel:I.versionLabel,benefactorId:Y,createdOn:I.createdOn,modifiedOn:I.modifiedOn,createdBy:I.createdBy,modifiedBy:I.modifiedBy,isLatestVersion:I.isLatestVersion},je={id:M,name:Z,entity:I,entityHeader:Be},f=[N,y,G,Re,je],Fe=y.id,_=y.entity;N.name;const He=N.entityHeader,Ue="syn1234",Ve="A $@*#$% terribly named Project",C={id:Ue,parentId:Fe,name:"my folder name",concreteType:"org.sagebionetworks.repo.model.Folder"},Ke={id:C.id,name:C.name,type:C.concreteType,versionNumber:1,versionLabel:"Version label",benefactorId:1234,createdOn:"",modifiedOn:"",createdBy:"",modifiedBy:""},Ge={totalNumberOfResults:2,results:[He,Ke]};_.id,_.name,_.modifiedOn,c;var W=(i=>(i.entity="entity",i))(W||{}),q=(i=>(i.entity="entity",i))(q||{});const H=N.entity,P={jsonSchemaVersionInfo:{organizationId:"1",organizationName:"org.sagebionetworks",schemaId:"1",schemaName:"Mock Schema",versionId:"555",$id:"org.sagebionetworks-MockSchema",jsonSHA256Hex:"5f2cd73c0fe25b30cbee2f213b6d633951f1873ca1911f494d4654f702a69e95",createdOn:"2021-04-01T08:00:00.000Z",createdBy:"1"},objectId:3333,objectType:W.entity,createdOn:"2021-04-01T08:00:00.000Z",createdBy:"1"};H.id,q.entity,H.etag,`${P.jsonSchemaVersionInfo.$id}`;`${P.jsonSchemaVersionInfo.$id}`;const Ze=i=>[d.rest.post(`${i}${z}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a matching mock entity for this request : ${JSON.stringify(n.body)}`};if(n.body){const t=n.body,a=f.find(m=>m.name===t.name);a?(r=a.entity,s=200):t.name===Ve&&(r.reason="Invalid project name",s=403)}return o(e.status(s),e.json(r))}),d.rest.get(`${i}${R(":entityId")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a mock entity with ID ${n.params.entityId}`};const t=f.find(a=>a.id===n.params.entityId);return t&&(r=t.entity,s=200),o(e.status(s),e.json(r))}),d.rest.get(`${i}${Q(":entityId")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find mock entity versions for ID ${n.params.entityId}`};const t=f.find(a=>a.id===n.params.entityId);return t&&t.versionInfo&&(r={results:t.versionInfo},s=200),o(e.status(s),e.json(r))}),d.rest.get(`${i}${X(":entityId",":versionNumber")}`,async(n,o,e)=>{let s=404;const r=n.params.entityId,t=n.params.versionNumber.toString(),a=parseInt(t);let m={reason:`Mock Service worker could not find a mock versioned entity with ID ${r}.${t}`};const u=f.find(J=>J.id===n.params.entityId);return u&&u.versions&&u.versions[a]&&(m=u.versions[a],s=200),o(e.status(s),e.json(m))}),d.rest.post(`${i}${B(":entityId")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const t=f.find(a=>a.id===n.params.entityId);return t!=null&&t.bundle&&(r=t.bundle,s=200),o(e.status(s),e.json(r))}),d.rest.post(`${i}${B(":entityId",":versionNumber")}`,async(n,o,e)=>{const s=n.params.entityId,r=parseInt(n.params.versionNumber);let t=404,a={reason:`Mock Service worker could not find a mock entity bundle with ID ${s}`};const m=f.find(u=>u.id===s);if(m){const u=m.bundle;m.versions&&m.versions[r]?a={...u,entity:m.versions[r]}:a=u,t=200}return o(e.status(t),e.json(a))}),d.rest.get(`${i}${x(":entityId")}`,async(n,o,e)=>o(e.status(200),e.json(P))),d.rest.get(`${i}${ee(":entityId")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const t=f.find(a=>a.id===n.params.entityId);return t!=null&&t.json&&(r=t.json,s=200),o(e.status(s),e.json(r))}),d.rest.post(`${i}${te}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const t=n.body,a=f.filter(m=>t.references.find(u=>u.targetId===m.id)).map(m=>m.entityHeader).filter(m=>!!m);return a&&(r={results:a},s=200),o(e.status(s),e.json(r))}),d.rest.get(`${i}${R(":entityId")}/path`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a mock entity path using ID ${n.params.entityId}`};const t=f.find(a=>n.params.entityId===a.id);return t&&t.path&&(r=t.path,s=200),o(e.status(s),e.json(r))}),d.rest.get(`${w(A.REPO_ENDPOINT)}/file/v1/entity/:id/uploadDestination`,async(n,o,e)=>{const s={banner:"",storageLocationId:1,uploadType:ve.S3,concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"};return o(e.status(200),e.json(s))})],Ye=i=>[d.rest.get(`${i}${se(":id")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a user profile with ID ${n.params.id}`};const t=b.find(a=>a.id.toString()===n.params.id);return t&&t.userProfile&&(r=t.userProfile,s=200),o(e.status(s),e.json(r))}),d.rest.get(`${i}${j}`,async(n,o,e)=>{const s=Ee,r=200;return o(e.status(r),e.json(s))}),d.rest.get(`${w(A.REPO_ENDPOINT)}${ne}`,async(n,o,e)=>{const s=F;return o(e.status(200),e.json(s))}),d.rest.get(`${i}${oe(":id")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a user bundle with ID ${n.params.id}`};const t=b.find(a=>a.id.toString()===n.params.id);return t&&t.userBundle&&(r=t.userBundle,s=200),o(e.status(s),e.json(r))}),d.rest.get(`${i}${re}`,async(n,o,e)=>o(e.status(200),e.json(Ge))),d.rest.get(`${i}${ie}`,async(n,o,e)=>{const s=n.url.searchParams.get("ids").split(","),r={children:b.filter(t=>s.includes(t.id.toString())).map(t=>t.userGroupHeader)};return o(e.status(200),e.json(r))}),d.rest.post(`${i}${j}`,async(n,o,e)=>{const s=(await n.json()).list,r={list:b.filter(t=>s.includes(t.id.toString())).map(t=>t.userProfile).filter(t=>t!=null)};return o(e.status(200),e.json(r))}),d.rest.get(`${i}${ae}`,async(n,o,e)=>{const s=n.url.searchParams.get("prefix"),r={children:b.filter(t=>t.userGroupHeader.userName.toLowerCase().startsWith(s.toLowerCase()??"")||(t.userGroupHeader.firstName||"").toLowerCase().startsWith(s.toLowerCase()??"")||(t.userGroupHeader.displayName||"").toLowerCase().startsWith(s.toLowerCase()??"")||(t.userGroupHeader.lastName||"").toLowerCase().startsWith(s.toLowerCase()??"")).map(t=>t.userGroupHeader)};return o(e.status(200),e.json(r))}),d.rest.get(`${i}${de(":userId")}`,async(n,o,e)=>o(e.status(404),e.json({reason:"user has no profile image"}))),d.rest.get(`${i}${ce}`,async(n,o,e)=>{var s;return o(e.status(200),e.json({email:(s=F.userProfile)==null?void 0:s.email}))})],We=i=>[d.rest.get(`${i}${me(":id")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find an access requirement with ID ${n.params.id}`};const t=ge.find(a=>a.id.toString()===n.params.id);return t&&(r=t,s=200),o(e.status(s),e.json(r))}),d.rest.get(`${pe}${le(":id")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find an access requirement wiki page key with AR ID ${n.params.id}`};const t=be.find(a=>(a.ownerObjectType===ye.ACCESS_REQUIREMENT&&a.ownerObjectId.toString())===n.params.id);return t&&(r=t,s=200),o(e.status(s),e.json(r))})],qe=i=>[d.rest.get(`${i}${ue(":arId",":wikiId")}`,async(n,o,e)=>{let s=404,r={reason:`Mock Service worker could not find a wiki page with ID ${n.params.wikiId}`};const t=Se.find(a=>a.id===n.params.wikiId);return t&&(r=t,s=200),o(e.status(s),e.json(r))})],Je=i=>[d.rest.options("*",async(n,o,e)=>o(e.status(200))),d.rest.get(`${i}/auth/v1/authenticatedOn`,async(n,o,e)=>o(e.status(200),e.json({authenticatedOn:new Date().toISOString()}))),...Ze(i),...Ye(i),...qe(i),...We(i)];Je(w(A.REPO_ENDPOINT));export{Je as g,N as m};
//# sourceMappingURL=handlers-0e4fb508.js.map