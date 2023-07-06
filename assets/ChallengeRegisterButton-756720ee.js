import{j as s,a as _}from"./jsx-runtime-095bf462.js";import{r}from"./index-8db94870.js";import{d as I}from"./ExitToApp-d324ff0a.js";import{S as c}from"./SpinnerButton-fb47bcc3.js";import"./OrientationBanner-892f3bb7.js";import"./getEndpoint-ac94413e.js";import{u as k,a_ as E}from"./SynapseClient-3d6edbd0.js";import"./EntityTypeUtils-403062fd.js";import{u as T}from"./useGetEntityChallenge-3ad29fd9.js";import{u as w}from"./useGetUserTeams-01bf2183.js";import{u as R}from"./useTeamMembers-07e6755a.js";import{B as q}from"./Box-88f7d7c8.js";const S="",b=({projectId:f,onChallengeError:a,onJoinClick:m,onLeaveClick:p})=>{const{accessToken:l}=k(),[e,v]=r.useState(),{data:n}=E(),[g,h]=r.useState(!1),[C,x]=r.useState(!1),[y,i]=r.useState(!0),[d,u]=r.useState();return r.useEffect(()=>{d&&a&&a(d)},[d,a]),T(f,{enabled:!!l&&!e,onSettled:(t,o)=>{t&&v(t),o&&(i(!1),u(o))}}),R((e==null?void 0:e.participantTeamId)??S,(n==null?void 0:n.ownerId)??S,{enabled:!!e&&!!n,onSettled:(t,o)=>{t===null&&(h(!1),i(!1)),t!==null&&h(!0),o&&(i(!1),u(o))}}),w((e==null?void 0:e.id)??"0",20,{enabled:!!e&&!!l,onSettled:(t,o)=>{t&&x(t.results.length>0),o&&u(o),i(!1)}}),y?s(c,{showSpinner:!0,children:"Loading..."}):_(q,{children:[(!g||!C)&&s(c,{disableElevation:!0,variant:"contained",onClick:()=>l&&m?m():void 0,sx:{color:"white",backgroundColor:"#109488",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white",backgroundColor:"#109488"},":active":{color:"white",backgroundColor:"#109488"},":visited":{color:"white",backgroundColor:"#109488"}},children:"Register for this Challenge"}),g&&C&&s(c,{disableElevation:!0,variant:"outlined",endIcon:s(I,{}),onClick:()=>p?p():void 0,sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},children:"Leave Challenge"})]})};try{b.displayName="ChallengeRegisterButton",b.__docgenInfo={description:"",displayName:"ChallengeRegisterButton",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},onChallengeError:{defaultValue:null,description:"",name:"onChallengeError",required:!1,type:{name:"((error: SynapseClientError) => void)"}},onJoinClick:{defaultValue:null,description:"",name:"onJoinClick",required:!1,type:{name:"(() => void)"}},onLeaveClick:{defaultValue:null,description:"",name:"onLeaveClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{b as C};
//# sourceMappingURL=ChallengeRegisterButton-756720ee.js.map