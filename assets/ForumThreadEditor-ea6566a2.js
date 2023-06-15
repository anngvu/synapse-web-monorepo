import{j as i,F as q,a as w}from"./jsx-runtime-095bf462.js";import{r as m}from"./index-8db94870.js";import{c as B,d as j,e as $}from"./useThread-4c10715f.js";import{a as k,d as v,l as O,u as L,ao as G,cd as Y,ce as Q}from"./SynapseClient-e12f3692.js";import{u as U}from"./useMutation-a2021e36.js";import{u as z}from"./useInfiniteQuery-e4891143.js";import{I as K}from"./IconSvg-86724fbb.js";import{W as H,a9 as J,c as X,V as Z}from"./ConfirmationDialog-35193f14.js";import{U as ee}from"./UserSearchBoxV2-5657faba.js";import{s as te}from"./startCase-8f087d09.js";import{B as ae}from"./Box-653de305.js";import{b as se}from"./Form-3a0caad7.js";function Se(e,s,o,n,t,r){const{accessToken:c,keyFactory:h}=k();return z(h.getRepliesQueryKey(e,s,o,n,t),async d=>v.getReplies(c,e,o,d.pageParam,n,s,t),{...r,getNextPageParam:(d,M)=>{const g=M.flatMap(u=>u.results).length;if(d.totalNumberOfResults>g)return g}})}function Ce(e,s){const{accessToken:o,keyFactory:n}=k(),t=async()=>{const r=await v.getReplyMessageUrl(e.messageKey,o);return(await fetch(r.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return O(n.getReplyQueryKey(e.threadId,e.id,e.messageKey),t,s)}function ne(e){const s=L(),{accessToken:o,keyFactory:n}=k();return U(t=>v.postReply(t,o),{...e,onSuccess:async(t,r,c)=>{await s.invalidateQueries(n.getAllRepliesQueryKey(t.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,r,c)}})}function re(e){const s=L(),{accessToken:o,keyFactory:n}=k();return U(t=>v.putReply(t,o),{...e,onSuccess:async(t,r,c)=>{await s.invalidateQueries(n.getAllRepliesQueryKey(t.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,r,c)}})}function Re(e){const s=L(),{accessToken:o,keyFactory:n}=k();return U(t=>v.deleteReply(o,t.replyId),{...e,onSuccess:async(t,r,c)=>{await s.invalidateQueries(n.getAllRepliesQueryKey(r.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,r,c)}})}const F=({show:e,onClose:s,handleUserTag:o})=>{const n=m.useCallback((t,r)=>{t&&r&&o(r.userName),s()},[s,o]);return i(q,{children:i(H,{open:e,onCancel:s,title:"Find User or Team",content:i(ee,{placeholder:"Search for a user or team name",onChange:n,typeFilter:G.ALL,focusOnSelect:!0}),sx:{".MuiDialog-paperFullWidth":{overflowY:"visible",".MuiDialogContent-root":{overflowY:"visible"}}}})})};try{F.displayName="UserMentionModal",F.__docgenInfo={description:"",displayName:"UserMentionModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},handleUserTag:{defaultValue:null,description:"",name:"handleUserTag",required:!0,type:{name:"(user: string) => void"}}}}}catch{}var V=(e=>(e.WRITE="WRITE",e.PREVIEW="PREVIEW",e))(V||{});const N=({placeholder:e,text:s,setText:o})=>{const[n,t]=m.useState("WRITE"),[r,c]=m.useState(0),[h,d]=m.useState(!1),[M,g]=m.useState(!1),u=m.useRef(null);m.useEffect(()=>{const a=u.current;a&&a.setSelectionRange(r,r)},[u,r]),m.useEffect(()=>{var a;(a=u.current)==null||a.focus()},[h]);const _=a=>{const l=[],p=u.current;if(p){const f=p==null?void 0:p.selectionStart,T=s.substring(0,f),S=s.substring(f,s.length);c(f+a.length),l.push(T,`${M?"":"@"}${a.replace(/\s/g,"")}`,S)}o(l.join("")),g(!1)},x=a=>{const l=u.current&&u.current.selectionStart;l&&l>0&&a.charAt(l-1)==="@"&&(g(!0),d(!0))},I=a=>{const l=u.current;if(l){const p=l.selectionStart,f=l.selectionEnd,T=s.substring(p,f),S=s.substring(0,p),E=s.substring(f,s.length),C=Q[a].openSyntax,b=Q[a].closeSyntax;switch(a){case"code":{const y=[];y.push(S,C,T,b,E),o(y.join(`\r
`)),l.focus(),c(p+C.length+2);break}case"title":case"bold":case"italic":case"strikethrough":case"latex":case"subscript":case"superscript":case"link":case"image":{const y=`${S}${C}${T}${b}${E}`;l.focus(),c(p+C.length),o(y)}}}};return w("div",{className:"bootstrap-4-backport MarkdownEditor",children:[w("div",{className:"MarkdownEditorControls",children:[i("div",{className:"Tabs",children:Object.keys(V).map(a=>i("button",{className:"Tab",role:"tab","aria-selected":a===n,onClick:l=>{l.stopPropagation(),t(V[a])},children:a},a))}),n==="WRITE"&&w("div",{className:"MarkdownEditorControlsToolbar",children:[Y.map(a=>i("button",{onClick:()=>I(a),children:i(K,{icon:a,label:te(a)})},a)),i("button",{onClick:()=>d(!0),children:i(K,{icon:"tag",label:"Mention"})})]})]}),i("div",{children:n==="WRITE"?i("textarea",{onChange:a=>{o(a.target.value),x(a.target.value)},style:{width:"100%"},rows:6,value:s,ref:u,placeholder:e}):s?i(J,{markdown:s}):"Nothing to preview"}),i(F,{show:h,onClose:()=>d(!1),handleUserTag:_})]})};try{N.displayName="MarkdownEditor",N.__docgenInfo={description:"",displayName:"MarkdownEditor",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},setText:{defaultValue:null,description:"",name:"setText",required:!0,type:{name:"(text: string) => void"}}}}}catch{}const P=e=>{const{initialText:s,initialTitle:o,id:n,onClose:t,isReply:r,isDialog:c,openDialog:h}=e,[d,M]=m.useState(o??""),[g,u]=m.useState(s??""),{mutate:_,isLoading:x}=B({onSuccess:()=>t()}),{mutate:I,isLoading:a}=j({onSuccess:()=>t()}),{mutate:l,isLoading:p}=$({onSuccess:()=>t()}),{mutate:f,isLoading:T}=ne({onSuccess:()=>t()}),{mutate:S,isLoading:E}=re({onSuccess:()=>t()}),C=a||T||p||x||E,b=!r&&o,y=(R,W)=>{r?s?S({replyId:n,messageMarkdown:R}):f({threadId:n,messageMarkdown:R}):b?(_({title:W,threadId:n}),I({messageMarkdown:R,threadId:n})):l({forumId:n,title:W,messageMarkdown:R})},A=w("div",{className:"bootstrap-4-backport",children:[!r&&i(se,{type:"text",placeholder:"Title",value:d,onChange:R=>M(R.target.value)}),i(N,{text:g,setText:u})]}),D=C?"Saving":"Save";return i(q,{children:c?i(X,{maxWidth:"md",open:h,onCancel:t,title:r?"Edit Reply":b?"Edit Thread":"New Thread",content:A,onConfirm:()=>y(g,d),confirmButtonText:D}):w(q,{children:[A,i(ae,{display:"flex",justifyContent:"flex-end",children:i(Z,{onCancel:t,onConfirm:()=>y(g,d),confirmButtonText:D})})]})})};try{P.displayName="ForumThreadEditor",P.__docgenInfo={description:"",displayName:"ForumThreadEditor",props:{initialTitle:{defaultValue:null,description:"",name:"initialTitle",required:!1,type:{name:"string"}},initialText:{defaultValue:null,description:"",name:"initialText",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}},isDialog:{defaultValue:null,description:"",name:"isDialog",required:!0,type:{name:"boolean"}},openDialog:{defaultValue:null,description:"",name:"openDialog",required:!1,type:{name:"boolean"}}}}}catch{}export{P as F,Re as a,Se as b,Ce as u};
//# sourceMappingURL=ForumThreadEditor-ea6566a2.js.map