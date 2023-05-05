import{j as u}from"./jsx-runtime-095bf462.js";import{r as l,R as f}from"./index-8db94870.js";import{u as E,S as N,c as p}from"./Select-457c486b.esm-387af9bf.js";import{_ as x}from"./extends-98964cd2.js";import"./index-8ce4a492.js";import"./EntityTypeUtils-5f3d9964.js";import"./getEndpoint-ac94413e.js";import{u as C}from"./useGetInfoFromIds-19564df7.js";import{a as H,U as m}from"./UserOrTeamBadge-5faa083a.js";import{S as q}from"./Skeleton-3aad52b9.js";var w=l.forwardRef(function(r,e){var t=E(r);return l.createElement(N,x({ref:e},t))});const R=w,F=(r,e,t)=>{l.useEffect(()=>{const s=setTimeout(()=>r(),t);return()=>clearTimeout(s)},[...e||[],t])},G={Control:r=>u(p.Control,{...r,className:`form-control ${r.className??""}`}),SingleValue:r=>{const{data:e}=r;return l.createElement(p.SingleValue,{...r,key:e==null?void 0:e.id},u(m,{userGroupHeader:e==null?void 0:e.header,disableHref:!0,showFullName:!0},e==null?void 0:e.header.ownerId))},Option:r=>{const{data:e}=r;return l.createElement(p.Option,{...r,key:e==null?void 0:e.id},u(m,{userGroupHeader:e==null?void 0:e.header,disableHref:!0,showFullName:!0,showCardOnHover:!1}))}},S=r=>{const{inputId:e,defaultValue:t=null,onChange:s,filterPredicate:h,typeFilter:g,placeholder:V,focusOnSelect:y=!1,value:v}=r,[n,I]=l.useState(""),[i,U]=l.useState("");F(()=>{U(n)},[n],500);const[c=void 0]=C({ids:t?[t]:[],type:"USER_PROFILE"}),{data:b,isLoading:o}=H(i,g),d=f.useRef(null);f.useEffect(()=>{y&&d.current&&d.current.focus()});const _=l.useMemo(()=>o||n!==i?()=>"Loading…":void 0,[o,i,n]),O=(b??[]).filter(h??(()=>!0)).map(a=>({id:a.ownerId.toString(),value:a.ownerId.toString(),label:a.userName,header:a}));return t&&c==null?u(q,{width:"100%"}):u(R,{className:"bootstrap-4-backport UserSearchBoxV2",ref:d,inputValue:n,onInputChange:I,filterOption:()=>!0,isLoading:o,options:!o&&O||[],noOptionsMessage:_,defaultValue:t?{id:t,value:t,label:c.userName,header:c}:void 0,inputId:e,isClearable:!0,value:v,styles:{control:a=>({...a,display:"flex !important"}),input:a=>({...a,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:G,onChange:a=>{s&&s((a==null?void 0:a.id)??null,(a==null?void 0:a.header)??null)},placeholder:V})};try{S.displayName="UserSearchBoxV2",S.__docgenInfo={description:"",displayName:"UserSearchBoxV2",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((principalId: string | null, header: UserGroupHeader | null) => void)"}},typeFilter:{defaultValue:null,description:"",name:"typeFilter",required:!1,type:{name:"enum",value:[{value:'"USERS_ONLY"'},{value:'"TEAMS_ONLY"'},{value:'"ALL"'}]}},filterPredicate:{defaultValue:null,description:"",name:"filterPredicate",required:!1,type:{name:"((item: UserGroupHeader) => boolean)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},focusOnSelect:{defaultValue:null,description:"",name:"focusOnSelect",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"PropsValue<UserSearchBoxValueType>"}}}}}catch{}export{R as S,S as U,F as u};
//# sourceMappingURL=UserSearchBoxV2-7eaff957.js.map