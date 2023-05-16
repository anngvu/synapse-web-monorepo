import{r as C,R as w}from"./index-8db94870.js";import{aq as B,ar as se}from"./SynapseConstants-667d004c.js";import{c4 as ue,c5 as de,s as le,c6 as ce}from"./EntityTypeUtils-1e303662.js";import{g as J,B as Q}from"./getEndpoint-ac94413e.js";import{u as G}from"./useMutation-478d0e49.js";import{j as d,a as S,F as W}from"./jsx-runtime-095bf462.js";import{F as pe}from"./FullWidthAlert-93fbddb4.js";import{s as me}from"./styled-f64e11ba.js";import{T as ge}from"./TextField-647c939b.js";import{B as D}from"./Box-13f1aabd.js";import{B as M}from"./Button-891a522f.js";import{T as P}from"./TextField-c47f1d13.js";import{L as b}from"./Link-2921f78c.js";import{I as fe}from"./IconSvg-90b7b72f.js";import{I as Ee}from"./IconButton-74239a2b.js";function Be(t,o){const[i,r]=C.useState("CHOOSE_AUTH_METHOD"),[p,n]=C.useState(),[l,m]=C.useState(),[g,c]=C.useState();C.useEffect(()=>{const a=new URL(window.location.href.replaceAll("#","/")),{searchParams:f}=a;if(f){const O=f.get("userId"),y=f.get("twoFaToken");O&&y&&(m(parseInt(O,10)),c(y),["VERIFICATION_CODE","RECOVERY_CODE","LOGGED_IN"].includes(i)||r("VERIFICATION_CODE"))}},[i]),C.useEffect(()=>{o&&(c(o.twoFaToken),m(o.userId),["VERIFICATION_CODE","RECOVERY_CODE","LOGGED_IN"].includes(i)||r("VERIFICATION_CODE"))},[o]),C.useEffect(()=>{n(void 0)},[i]);async function h(a){await le(a.accessToken),localStorage.setItem(B,a.authenticationReceipt),r("LOGGED_IN"),t&&t()}const{mutate:E,isLoading:T}=G(({username:a,password:f,authenticationReceipt:O})=>ue(a,f,O),{onError:a=>{n(a.reason)},onSuccess:async a=>{"errorCode"in a?(r("VERIFICATION_CODE"),c(a.twoFaToken),m(a.userId)):await h(a)}}),{mutate:A,isLoading:v}=G(de,{onError:a=>{n(a.reason),(a.reason.includes("The provided twoFaToken is invalid")||a.reason.includes("Token has expired"))&&(console.warn(a),n("Something went wrong. Refresh the page and try again."),window.location.href.includes("twoFaToken")&&window.history.replaceState({},document.title,window.location.href.replaceAll(/(twoFaToken|userId)=[^&]*&?/g,"")))},onSuccess:h});return{step:i,onStepChange:r,submitUsernameAndPassword:(a,f)=>{n(void 0);const O=localStorage.getItem(B);E({username:a,password:f,authenticationReceipt:O})},submitOneTimePassword:(a,f=i==="RECOVERY_CODE"?"RECOVERY_CODE":"TOTP")=>{if(n(void 0),g==null||l==null){n("You did not first log in with your password or a third-party identity provider.");return}A({userId:l,twoFaToken:g,otpCode:a,otpType:f})},errorMessage:p,isLoading:T||v}}const Oe=me(ge)`
  input {
    text-align: center;
  }
`,_e={TextFieldStyled:Oe},Ce=t=>d(_e.TextFieldStyled,{...t}),L={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"};function he(t,o){return t<=0?[]:Array.from({length:t},o)}function Te(t,o,i){return t.map((r,p)=>o===p?i:r)}function Y(t){return t.join("")}function $(t,o){return[...t,o]}function Re(t,o,i){return t.reduce((r,p,n)=>{const{characters:l,restArrayMerged:m}=r;if(n<i)return{restArrayMerged:m,characters:$(l,p)};const[g,...c]=m;return{restArrayMerged:c,characters:$(l,g||"")}},{restArrayMerged:o,characters:[]}).characters}function ye(t){return t.split("")}const X=w.forwardRef((t,o)=>{const{value:i,length:r,autoFocus:p,onChange:n,TextFieldsProps:l,onComplete:m,validateChar:g,className:c,...h}=t,{onPaste:E,onFocus:T,onKeyDown:A,className:v,...H}=l||{},R=he(r,(e,u)=>({character:i[u]||"",inputRef:w.createRef()})),a=e=>R.findIndex(({inputRef:u})=>u.current===e),f=()=>R.map(({character:e})=>e),O=(e,u)=>{const s=Te(f(),e,u);return Y(s)},y=e=>{var u,s;(s=(u=R[e])==null?void 0:u.inputRef.current)==null||s.focus()},I=e=>{var u,s;(s=(u=R[e])==null?void 0:u.inputRef.current)==null||s.select()},F=e=>{e+1!==r&&(R[e+1].character?I(e+1):y(e+1))},Z=e=>{e>0&&I(e-1)},ee=e=>{const u=e.target.value[0]||"",s=a(e.target);if(typeof g=="function"&&!g(u,s))return;const _=O(s,u);n==null||n(_),_.length===r&&(m==null||m(_)),u!==""?_.length<r?F(_.length-1):F(s):_[s]?I(s):Z(s)},te=e=>{e.preventDefault(),e.target.select(),T==null||T(e)},re=e=>{const u=e.target,s=a(u);u.value===e.key?(e.preventDefault(),F(s)):!u.value&&L.backspace===e.key||L.left===e.key?(e.preventDefault(),I(s-1)):L.right===e.key&&(e.preventDefault(),I(s+1)),A==null||A(e)},ne=e=>{e.preventDefault();const u=e.target,s=e.clipboardData.getData("text/plain"),_=a(u),oe=f(),k=Re(oe,ye(s),_),q=k.findIndex((ae,ie)=>ie>_&&ae===""),N=Y(k);if(n==null||n(N),N.length===r){m==null||m(N),y(r-1);return}q!==-1&&y(q),E==null||E(e)};return d(D,{display:"flex",gap:"20px",alignItems:"center",ref:o,className:`MuiOtpInput-Box ${c||""}`,...h,children:R.map(({character:e,inputRef:u},s)=>d(Ce,{autoFocus:p?s===0:!1,autoComplete:"one-time-code",value:e,inputRef:u,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${s+1} ${v||""}`,onPaste:ne,onFocus:te,onChange:ee,onKeyDown:re,...H},s))})});X.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}};const j=6,Ae=["0","1","2","3","4","5","6","7","8","9"];function U(t){const{onSubmit:o,isLoading:i}=t,[r,p]=w.useState("");return S(D,{children:[d(X,{autoFocus:!0,length:j,value:r,onChange:p,onComplete:o,validateChar:n=>Ae.includes(n)||n==="",gap:0,sx:{".MuiInputBase-root":{paddingLeft:"5px",paddingRight:"5px"},".MuiFormControl-root:first-of-type > .MuiInputBase-root":{borderTopRightRadius:0,borderBottomRightRadius:0},".MuiFormControl-root:last-of-type > .MuiInputBase-root":{borderTopLeftRadius:0,borderBottomLeftRadius:0},".MuiFormControl-root:not(:first-of-type):not(:last-of-type) > .MuiInputBase-root":{borderRadius:0}}}),d(M,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",sx:{height:"50px",mt:4,mb:2},disabled:r.length!==j||i,onClick:n=>{n.preventDefault(),o(r)},children:i?"Verifying...":"Submit"})]})}try{U.displayName="TOTPForm",U.__docgenInfo={description:"",displayName:"TOTPForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(value: string) => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}}}catch{}function V(t){const{resetPasswordUrl:o=`${J(Q.PORTAL_ENDPOINT)}#!PasswordReset:0`,onSubmit:i,isLoading:r}=t,[p,n]=C.useState(""),[l,m]=C.useState("");function g(c){c.preventDefault(),i(p,l)}return S("form",{onSubmit:c=>{g(c)},children:[d(P,{required:!0,fullWidth:!0,autoFocus:!0,autoComplete:"username",label:"Username or Email Address",id:"username",type:"text",value:p,onChange:c=>n(c.target.value)}),d(P,{required:!0,fullWidth:!0,autoComplete:"current-password",label:"Password",id:"current-password",type:"password",value:l,onChange:c=>m(c.target.value)}),d(b,{href:o,children:"Forgot password?"}),d(M,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",disabled:r,sx:{height:"50px",mt:4,mb:2},children:r?"Logging you in...":"Sign in"})]})}try{V.displayName="UsernamePasswordForm",V.__docgenInfo={description:"",displayName:"UsernamePasswordForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(username: string, password: string) => void"}},resetPasswordUrl:{defaultValue:null,description:"",name:"resetPasswordUrl",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}}}catch{}const Ie=19;function x(t){const{onSubmit:o,isLoading:i}=t,[r,p]=w.useState("");return S(D,{children:[d(P,{placeholder:"Enter backup code",value:r,onChange:n=>{const l=n.target.value.toLowerCase().replace(/[^a-z0-9-]/gi,"");p(l)}}),d(M,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",sx:{height:"50px",mt:4,mb:2},disabled:r.length!==Ie||i,onClick:n=>{n.preventDefault(),o(r)},children:i?"Verifying...":"Submit"})]})}try{x.displayName="RecoveryCodeForm",x.__docgenInfo={description:"",displayName:"RecoveryCodeForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(value: string) => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}}}catch{}function K(t){const{ssoRedirectUrl:o,registerAccountUrl:i=`${J(Q.PORTAL_ENDPOINT)}#!RegisterAccount:0`,resetPasswordUrl:r,onBeginOAuthSignIn:p,onStepChange:n,step:l,submitUsernameAndPassword:m,submitOneTimePassword:g,errorMessage:c,isLoading:h}=t;return S(W,{children:[l=="CHOOSE_AUTH_METHOD"&&d(ce,{onSelectUsernameAndPassword:()=>n("USERNAME_PASSWORD"),onBeginOAuthSignIn:p,ssoRedirectUrl:o}),l==="USERNAME_PASSWORD"&&d(V,{isLoading:h,resetPasswordUrl:r,onSubmit:(E,T)=>{m(E,T)}}),l==="VERIFICATION_CODE"&&S(W,{children:[d(U,{isLoading:h,onSubmit:E=>{g(E,"TOTP")}}),d(b,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto"},onClick:()=>n("RECOVERY_CODE"),children:"Use a backup code instead"})]}),l==="RECOVERY_CODE"&&d(x,{isLoading:h,onSubmit:E=>{g(E,"RECOVERY_CODE")}}),(l==="CHOOSE_AUTH_METHOD"||l==="USERNAME_PASSWORD")&&d(D,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:d(b,{href:i,align:"center",children:"Don't have an account? Create one now"})}),c&&d(pe,{variant:"warning",isGlobal:!1,description:c})]})}try{K.displayName="LoginForm",K.__docgenInfo={description:"",displayName:"LoginForm",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},registerAccountUrl:{defaultValue:null,description:"",name:"registerAccountUrl",required:!1,type:{name:"string"}},resetPasswordUrl:{defaultValue:null,description:"",name:"resetPasswordUrl",required:!1,type:{name:"string"}},onBeginOAuthSignIn:{defaultValue:null,description:"",name:"onBeginOAuthSignIn",required:!1,type:{name:"(() => void)"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"CHOOSE_AUTH_METHOD"'},{value:'"USERNAME_PASSWORD"'},{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"LOGGED_IN"'}]}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!0,type:{name:'(step: "CHOOSE_AUTH_METHOD" | "USERNAME_PASSWORD" | "VERIFICATION_CODE" | "RECOVERY_CODE" | "LOGGED_IN") => void'}},twoFactorAuthenticationRequired:{defaultValue:null,description:"",name:"twoFactorAuthenticationRequired",required:!1,type:{name:"TwoFactorAuthErrorResponse"}},submitUsernameAndPassword:{defaultValue:null,description:"",name:"submitUsernameAndPassword",required:!0,type:{name:"(username: string, password: string) => void"}},submitOneTimePassword:{defaultValue:null,description:"",name:"submitOneTimePassword",required:!0,type:{name:"(code: string, otpType?: TwoFactorAuthOtpType | undefined) => void"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}}}catch{}function Se(t){switch(t){case"CHOOSE_AUTH_METHOD":return"CHOOSE_AUTH_METHOD";case"USERNAME_PASSWORD":return"CHOOSE_AUTH_METHOD";case"VERIFICATION_CODE":return"CHOOSE_AUTH_METHOD";case"RECOVERY_CODE":return"VERIFICATION_CODE";case"LOGGED_IN":return"LOGGED_IN"}}function z(t){const{step:o,onStepChange:i,sx:r}=t;return o==="USERNAME_PASSWORD"||o==="VERIFICATION_CODE"||o==="RECOVERY_CODE"?d(Ee,{className:se,type:"button",onClick:()=>{i(Se(o))},sx:r,children:d(fe,{icon:"arrowBack",wrap:!1,sx:{height:"24px",width:"24px"}})}):null}try{z.displayName="LoginFlowBackButton",z.__docgenInfo={description:"",displayName:"LoginFlowBackButton",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"CHOOSE_AUTH_METHOD"'},{value:'"USERNAME_PASSWORD"'},{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"LOGGED_IN"'}]}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!0,type:{name:'(step: "CHOOSE_AUTH_METHOD" | "USERNAME_PASSWORD" | "VERIFICATION_CODE" | "RECOVERY_CODE" | "LOGGED_IN") => void'}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}export{z as L,K as a,Be as u};
//# sourceMappingURL=LoginFlowBackButton-e34fe1b9.js.map