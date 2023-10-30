import{j as a,a as u,F as x}from"./jsx-runtime-095bf462.js";import{r as p,R as Z}from"./index-8db94870.js";import{T as se,W as ie,L as oe,M as le,j as de,k as ce,s as ue,t as pe}from"./SynapseConstants-c9342f94.js";import{g as me,B as fe,P as ee}from"./getEndpoint-ac94413e.js";import{L as S,u as U,Q as ae,t as w,bi as re,cj as he,ck as Ce,bH as ye}from"./SynapseClient-9e187ec0.js";import{P as ge}from"./Popover-9afe50c5.js";import{F as Le}from"./Fade-26b5aaed.js";import{P as we}from"./Paper-88da9df3.js";import{I as P}from"./IconSvg-3b8e6785.js";import"./OrientationBanner-7886af1c.js";import{c as ve}from"./cloneDeep-2774ded5.js";import{S as Re}from"./SkeletonTable-f13a2e9d.js";import{T as Se}from"./ToastMessage-91a3bbbf.js";import{T as be}from"./Tooltip-39e0afa2.js";import{S as H}from"./Skeleton-2bd04c38.js";import{A as Ue}from"./Avatar-281ced81.js";import{B as _e}from"./Box-49321e59.js";import{L as Ne}from"./Link-fc5d7a73.js";function Ae(e){e&&clearTimeout(e)}const Ie=250,Ee=500;function te(e,r,t=Ie,n=Ee,i={},o={vertical:"top",horizontal:"right"},l={vertical:"center",horizontal:"left"}){const d=p.useRef(!1),g=p.useRef(null),[f,y]=p.useState(!1);p.useEffect(()=>(d.current=!0,()=>{d.current=!1}),[]);const m=p.useCallback((C=f,L=!0)=>{Ae(g.current),L?g.current=setTimeout(()=>{d.current&&y(C)},C?t:n):y(C)},[n,t,f]),h=p.useCallback((C=!0)=>{m(!0,C)},[m]),s=p.useCallback((C=!0)=>{m(!1,C)},[m]);return{OverlayComponent:p.useCallback(()=>a(ge,{TransitionComponent:Le,anchorEl:r.current,open:f,anchorOrigin:o,transformOrigin:l,sx:{pointerEvents:"none"},children:a(we,{...i,onMouseEnter:()=>{m(!0,!1)},onMouseLeave:()=>{s(!0)},sx:{pointerEvents:"auto",width:"max-content",minWidth:"300px",...i.sx},children:e})}),[e,f,o,r,m,s]),isShowing:f,toggleShow:h,toggleHide:s,toggle:m}}async function xe(e){return await(await fetch(e)).blob()}function Me(e){URL.revokeObjectURL(e)}function ke(e){const{data:r,error:t}=S(["usePreFetchResource",e],()=>xe(e),{enabled:!!e,staleTime:1/0});return p.useEffect(()=>{t&&console.error(`Failed to fetch object with presigned URL ${e}. See network log for details`)},[t,e]),ne(r)}function ne(e){const[r,t]=p.useState(void 0);return p.useEffect(()=>{if(e){const n=URL.createObjectURL(e);t(n)}else t(void 0)},[e]),p.useEffect(()=>()=>{r&&Me(r)},[r]),r}function la(e,r,t,n){r.requestedFiles.length!==1&&console.warn("useGetPresignedUrlContent only supports one file at a time");const{accessToken:i,keyFactory:o}=U(),l=async()=>{const d=await w.getFiles(r,i);return await w.getFileHandleContent(e,d.requestedFiles[0].preSignedURL,t)};return S(o.getPresignedUrlContentQueryKey(e,r,t),l,{staleTime:1/0,...n})}function da(e,r=!1,t){const{accessToken:n,keyFactory:i}=U(),o=async()=>{const l=await w.getFiles({requestedFiles:[e],includeFileHandles:!0,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1},r?void 0:n);return await w.getFileHandleContent(l.requestedFiles[0].fileHandle,l.requestedFiles[0].preSignedURL)};return S(i.getPresignedUrlFromFHAContentQueryKey(e,r),o,{staleTime:1/0,...t})}function Pe(e,r){const{keyFactory:t}=U(),n=async()=>{const i=await w.getProfilePicPreviewPresignedUrl(e);return i?await(await fetch(i,{method:"GET",mode:"cors",cache:"no-cache"})).blob():null};return S(t.getProfileImageQueryKey(e),n,{staleTime:1/0,...r})}function ca(e,r){const{accessToken:t,keyFactory:n}=U(),i=ae(),o=async()=>{const l=await w.getFiles(e,t);return l.requestedFiles.forEach(d=>{const g=e.requestedFiles.find(m=>m.fileHandleId===d.fileHandleId),f={...ve(e),requestedFiles:[g]},y={requestedFiles:[d]};i.setQueryData(n.getBatchOfFiles(f),y)}),l};if(e.includePreSignedURLs||e.includePreviewPreSignedURLs)throw new Error("useGetFileBatch does not support pre-signed URLs.");return S(n.getBatchOfFiles(e),o,{...r})}function Ve(e,r){const{keyFactory:t}=U(),n=t.getUserGroupHeaderQueryKey(e);return S(n,async()=>{const i=await w.getGroupHeadersBatch([e]);if(i.children.length!==1)throw new Error(`Expected one response in useGetUserGroupHeader for id: ${e}, got ${i.children.length}`);return i.children[0]},r)}function ua(e,r){const{keyFactory:t}=U(),n=ae(),i=t.getUserGroupHeaderBatchQueryKey(e);return S(i,async()=>{const l=await w.getGroupHeadersBatch(e);return l.children.forEach(d=>{n.setQueryData(t.getUserGroupHeaderQueryKey(d.ownerId),d)}),l.children},r)}function pa(e,r,t){const{keyFactory:n}=U(),i=n.getUserGroupHeaderSearchQueryKey(e,r);return S(i,async()=>(await w.getUserGroupHeaders(e,r)).children,t)}function ma(e,r){const{keyFactory:t}=U(),n=t.getUserGroupHeaderWithAliasQueryKey(e);return S(n,async()=>(await w.postUserGroupHeadersWithAlias(e)).list,r)}async function fa(e){return{list:(await w.getUserProfiles(e)).list.map(n=>n.profilePicureFileHandleId?{...n,clientPreSignedURL:`${me(fe.REPO_ENDPOINT)}/repo/v1/userProfile/${n.ownerId}/image/preview?redirect=true`}:n)}}const j=["chocolate","black","firebrick","maroon","olive","green","forestgreen","darkturquoise","teal","blue","navy","darkmagenta","purple","blue","orangered","blueviolet"],qe=e=>{const r=e.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0);return Math.abs(r)},Fe=e=>{const r=qe(e);return j[r%j.length]},T=e=>a("svg",{...e,className:`Icon-Copy ${e.className??""}`,width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M10.7368 12.7273H3.78947V3.81818H10.7368V12.7273ZM10.7368 2.54545H3.78947C3.45446 2.54545 3.13317 2.67954 2.89629 2.91823C2.6594 3.15691 2.52632 3.48063 2.52632 3.81818V12.7273C2.52632 13.0648 2.6594 13.3885 2.89629 13.6272C3.13317 13.8659 3.45446 14 3.78947 14H10.7368C11.0719 14 11.3931 13.8659 11.63 13.6272C11.8669 13.3885 12 13.0648 12 12.7273V3.81818C12 3.48063 11.8669 3.15691 11.63 2.91823C11.3931 2.67954 11.0719 2.54545 10.7368 2.54545V2.54545ZM8.8421 0H1.26316C0.928148 0 0.606858 0.134091 0.36997 0.372773C0.133082 0.611456 0 0.935179 0 1.27273V10.1818H1.26316V1.27273H8.8421V0Z"})});try{T.displayName="IconCopy",T.__docgenInfo={description:"",displayName:"IconCopy",props:{}}}catch{}const Te=a("span",{className:"SRC-validatedProfileIcon",children:a("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M1.21612 12.9284C1.00431 13.5978 1.46323 14.3024 2.16925 14.4081L2.62816 14.4786C3.12238 14.5491 3.51069 14.9366 3.61659 15.4299L3.68719 15.8879C3.7931 16.5925 4.49912 17.0153 5.20514 16.8039L5.66405 16.663C6.15827 16.5221 6.68778 16.6982 6.97019 17.121L7.2526 17.5086C7.67621 18.0723 8.48813 18.178 9.01765 17.6847L9.37066 17.3676C9.75897 17.0153 10.2885 16.9448 10.7474 17.1915L11.171 17.4029C11.8064 17.7552 12.5831 17.4733 12.8302 16.8039L13.0067 16.3811C13.1832 15.9231 13.6774 15.606 14.1716 15.6413L14.6305 15.6765C15.3365 15.7117 15.9367 15.1128 15.8661 14.4081L15.8307 13.9501C15.7954 13.4569 16.0779 12.9636 16.5721 12.7875L16.9957 12.6113C17.6664 12.3294 17.9135 11.5543 17.5605 10.9554L17.2428 10.5678C16.9957 10.145 17.0663 9.58133 17.384 9.19378L17.7017 8.84145C18.1606 8.31297 18.09 7.50264 17.4899 7.07985L17.1016 6.83322C16.678 6.55137 16.5015 6.02289 16.6427 5.52964L16.7839 5.07162C16.9957 4.40221 16.5368 3.69757 15.8307 3.59187L15.3718 3.52141C14.8776 3.45094 14.4893 3.06339 14.3834 2.57014L14.3128 2.11212C14.2069 1.40748 13.5009 0.984696 12.7949 1.19609L12.3359 1.33702C11.8417 1.47795 11.3122 1.30179 11.0298 0.879L10.7474 0.491447C10.3238 -0.072267 9.51186 -0.177963 8.98235 0.315286L8.62934 0.632375C8.24103 0.984696 7.71151 1.05516 7.2526 0.808536L6.82899 0.597143C6.19357 0.244822 5.41694 0.526679 5.16984 1.19609L4.99333 1.61887C4.81683 2.07689 4.32261 2.39398 3.8284 2.35875L3.44009 2.28828C2.73407 2.25305 2.13395 2.852 2.20455 3.55664L2.23985 4.01466C2.27515 4.50791 1.99274 5.00116 1.49853 5.17732L1.07492 5.35348C0.404196 5.63533 0.15709 6.41044 0.5101 7.00939L0.757207 7.39694C1.00431 7.81972 0.933712 8.38344 0.616003 8.77099L0.298294 9.12331C-0.16062 9.65179 -0.0900176 10.4621 0.5101 10.8849L0.898411 11.1315C1.32202 11.4134 1.49853 11.9419 1.35732 12.4351L1.21612 12.9284ZM6.37007 7.6788L7.92332 9.26424L11.6652 5.56487L13.2891 7.18555L9.54716 10.8497L7.92332 12.4704L6.29947 10.8497L4.74622 9.29947L6.37007 7.6788Z",fill:"#28A745"})})}),D=e=>{const{menuActions:r=[],userProfile:t}=e;return a("div",{className:"dropdown open",children:a("ul",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenu1",children:r.map((n,i)=>{const o=()=>n.callback(t);return n.field===se?a("hr",{className:"SRC-break"},`${n.field}_${i}`):a("li",{role:"menuitem",style:{listStyle:"none"},className:"SRC-menu-item SRC-table-dropdown-list SRC-primary-background-color-hover",onClick:o,onKeyPress:o,children:a("button",{className:"SRC-menuAction",children:n.field})},n.field)})})})};try{D.displayName="UserCardContextMenu",D.__docgenInfo={description:"",displayName:"UserCardContextMenu",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!0,type:{name:"MenuAction[]"}}}}}catch{}const De=a("span",{className:"SRC-certified-user-icon",children:u("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("path",{d:"M5.63578 14.1759C5.53042 14.0916 5.40399 14.0284 5.27756 14.0284L4.39256 13.9652C3.48648 13.902 2.68576 13.4384 2.15897 12.7641L0.0518096 17.2523C-0.137835 17.6738 0.220382 18.1584 0.683957 18.0741L2.5804 17.7159C2.81219 17.6738 3.06505 17.7791 3.19148 18.0109L4.11862 19.6966C4.35041 20.1181 4.94042 20.097 5.13006 19.6545L7.174 15.2927C6.85793 15.1663 6.584 14.9977 6.31007 14.7659L5.63578 14.1759Z",fill:"#58A158"}),a("path",{d:"M16.6564 17.2523L14.5492 12.7641C14.0224 13.4384 13.2217 13.8809 12.3156 13.9652L11.4306 14.0284C11.2831 14.0495 11.1778 14.0916 11.0724 14.1759L10.3981 14.7448C10.1453 14.9555 9.85025 15.1452 9.53418 15.2716L11.5781 19.6334C11.7678 20.0549 12.3788 20.0759 12.5896 19.6756L13.5167 17.9899C13.6431 17.7791 13.8749 17.6527 14.1278 17.6948L16.0242 18.0531C16.4878 18.1374 16.8671 17.6738 16.6564 17.2523Z",fill:"#58A158"}),a("path",{d:"M10.2503 13.2277C10.5453 12.9748 10.9246 12.8063 11.3249 12.7852L12.2099 12.722C13.1371 12.6588 13.8746 11.9212 13.9378 10.9941L14.001 10.1091C14.0221 9.70873 14.1906 9.32944 14.4435 9.03444L15.0335 8.36015C15.6446 7.64372 15.6446 6.61121 15.0335 5.91585L14.4435 5.24156C14.1906 4.94655 14.0221 4.56727 14.001 4.16691L13.9378 3.2819C13.8746 2.35475 13.1371 1.61724 12.2099 1.55403L11.3249 1.49081C10.9246 1.46974 10.5453 1.30117 10.2503 1.04831L9.57597 0.458307C8.85954 -0.152769 7.82703 -0.152769 7.13167 0.458307L6.45738 0.985097C6.16237 1.23796 5.78309 1.40653 5.38273 1.4276L4.49772 1.49081C3.57057 1.55403 2.83306 2.29153 2.76985 3.21868L2.70664 4.10369C2.68556 4.50405 2.51699 4.88334 2.26413 5.17834L1.67413 5.85263C1.06305 6.56907 1.06305 7.60157 1.67413 8.29694L2.26413 8.97123C2.51699 9.26623 2.68556 9.64552 2.70664 10.0459L2.76985 10.9309C2.83306 11.858 3.57057 12.5955 4.49772 12.6588L5.38273 12.722C5.78309 12.743 6.16237 12.9116 6.45738 13.1645L7.13167 13.7545C7.8481 14.3656 8.88061 14.3656 9.57597 13.7545L10.2503 13.2277ZM4.39236 7.11693C4.39236 4.92548 6.16237 3.15547 8.35382 3.15547C10.5453 3.15547 12.3153 4.92548 12.3153 7.11693C12.3153 9.30837 10.5453 11.0784 8.35382 11.0784C6.16237 11.0784 4.39236 9.2873 4.39236 7.11693Z",fill:"#58A158"}),a("path",{d:"M10.5875 6.0844L9.49182 5.87368C9.38646 5.85261 9.28111 5.7894 9.23896 5.68404L8.6911 4.69367C8.5436 4.44081 8.16431 4.44081 8.03788 4.69367L7.49002 5.68404C7.42681 5.7894 7.34252 5.85261 7.23716 5.87368L6.14144 6.0844C5.84644 6.14761 5.74108 6.50583 5.93072 6.71654L6.6893 7.53834C6.77359 7.62262 6.79466 7.72798 6.79466 7.83334L6.66823 8.95013C6.62609 9.24513 6.94216 9.45585 7.19502 9.32942L8.20646 8.84477C8.31181 8.80263 8.41717 8.80263 8.52253 8.84477L9.53396 9.32942C9.8079 9.45585 10.1029 9.24513 10.0608 8.95013L9.93433 7.83334C9.91325 7.72798 9.9554 7.60155 10.0397 7.53834L10.7983 6.71654C10.9879 6.48476 10.8825 6.14761 10.5875 6.0844Z",fill:"#C94281"})]})});function O({userProfile:e,isCertified:r}){const{summary:t,industry:n,location:i,url:o}=e;return a("div",{className:"SRC-cardMetaData",children:u("div",{className:"SRC-cardMetaData-scroll",children:[t&&u("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Bio "}),a("p",{children:t})]}),o&&u("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" More Info "}),a("p",{children:o})]}),n&&u("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Industry "}),a("p",{children:n})]}),i&&u("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Location "}),a("p",{children:i})]}),r&&u("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Access "}),u("p",{children:[De," Certified Account"]})]})]})})}try{O.displayName="UserCardLarge",O.__docgenInfo={description:"UserCardLarge wraps around UserCardMedium",displayName:"UserCardLarge",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}}}}}catch{}const Y=(e,r,t)=>n=>{n.preventDefault(),navigator.clipboard.writeText(r).then(()=>{t()})},M=({userProfile:e,menuActions:r,isLarge:t=!1,imageURL:n,hideEmail:i=!1,disableLink:o=!1,link:l,openLinkInNewTab:d=!1,isValidated:g,isCertified:f,isLoadingAvatar:y})=>{const[m,h]=p.useState(!1),[s,c]=p.useState(!1),C=p.useRef(null),L=()=>{h(!0),setTimeout(()=>{h(!1)},4e3)},{displayName:v,userName:b,firstName:R,lastName:_,position:N,company:k}=e;p.useEffect(()=>{const F=Q=>{s&&setTimeout(()=>{s&&I()},10)};return window.addEventListener("mouseup",F,!1),()=>{window.removeEventListener("mouseup",F,!1)}},[]);const{data:A}=re(e.ownerId,ie),G=A==null?void 0:A.ORCID,I=F=>{c(Q=>!Q)};let E="";const z=l||`${ee.PORTAL}#!Profile:${e.ownerId}`,B=`${b}@synapse.org`;v?E=v:R&&_?E=`${R} ${_}`:b&&(E=b);const K=a(V,{userProfile:e,imageURL:n,avatarSize:"LARGE",isLoadingAvatar:y}),W=u(Z.Fragment,{children:[!i&&a(Se,{show:m,text:"Email address copied to clipboard",autohide:!0}),o&&K,!o&&a("a",{href:z,target:d?"_blank":"",rel:d?"noreferrer":"",className:`SRC-no-border-bottom-imp ${t?"SRC-isLargeCard":""}`,children:K}),u("div",{className:"SRC-cardContent",children:[u("p",{className:"SRC-eqHeightRow SRC-userCardName",children:[t||o?a("span",{className:t?"SRC-whiteText":"SRC-blackText",children:E}):a("a",{href:z,target:d?"_blank":"",rel:d?"noreferrer":"",tabIndex:0,className:"SRC-hand-cursor",children:E}),g&&a(be,{title:"This user profile has been validated.",placement:"bottom",enterNextDelay:300,children:a("span",{children:Te})})]}),(N||k)&&u("p",{className:`${t?"SRC-whiteText":""}`,children:[N," ",N?" / ":""," ",k]}),!i&&u("p",{ref:C,className:`${t?"SRC-whiteText":""}
              SRC-hand-cursor SRC-eqHeightRow SRC-inlineFlex SRC-emailText SRC-cardSvg`,onClick:Y(C,B,L),onKeyPress:Y(C,B,L),tabIndex:0,children:[a("span",{style:{paddingRight:"5px",paddingBottom:"2px"},children:a("a",{className:`link ${t?"SRC-whiteText":""}`,children:`${b}@synapse.org`})}),a(T,{})]}),G&&a("a",{href:G,target:"_blank",rel:"noopener noreferrer",style:{width:"fit-content"},tabIndex:0,className:t?"SRC-whiteText":"",children:"View ORCID"})]}),r&&r.length>0&&u(Z.Fragment,{children:[a("span",{role:"menu",className:`SRC-extraPadding SRC-hand-cursor SRC-primary-background-color-hover SRC-inlineBlock
              SRC-cardMenuButton ${s?"SRC-primary-background-color":""}`,style:{outline:"none"},tabIndex:0,onClick:I,onKeyPress:I,children:a("span",{className:s||t?"SRC-whiteText":"SRC-primary-text-color",children:a(P,{icon:"verticalEllipsis"})})}),s&&a(D,{menuActions:r,userProfile:e})]}),!r&&a("span",{style:{padding:"0px 0px 0px 35px"}})]});return t?u("div",{className:s?"SRC-hand-cursor cardContainer":"cardContainer",onClick:s?I:void 0,children:[a("div",{className:`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${s?"SRC-hand-cursor":""}`,children:W}),t?a(O,{userProfile:e,isCertified:f}):!1]}):a("div",{style:{border:"1px solid #DDDDDF",backgroundColor:"white"},className:`cardContainer SRC-userCard SRC-userCardMediumUp ${s?"SRC-hand-cursor":""}`,onClick:s?I:void 0,children:W})},J=()=>u("div",{className:"cardContainer SRC-userCard SRC-userCardMediumUp",style:{width:"380px"},children:[a(H,{variant:"circular",width:"80px",height:"80px"}),a("div",{style:{width:"250px"},children:a(Re,{numCols:1,numRows:2})})]});try{M.displayName="UserCardMedium",M.__docgenInfo={description:"",displayName:"UserCardMedium",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},hideEmail:{defaultValue:{value:"false"},description:"",name:"hideEmail",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:{value:"false"},description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:{value:"false"},description:"",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:null,description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}}}}}catch{}try{J.displayName="LoadingUserCardMedium",J.__docgenInfo={description:"",displayName:"LoadingUserCardMedium",props:{}}}catch{}const Oe=250,$e=500,V=({userProfile:e,avatarSize:r="LARGE",imageURL:t,showCardOnHover:n=!1,isLoadingAvatar:i=!1,className:o})=>{const l=p.useRef(null),d=a(M,{userProfile:e,imageURL:t}),{OverlayComponent:g,isShowing:f,toggleShow:y,toggleHide:m}=te(d,l,Oe,$e,{sx:{maxWidth:"425px"}});let h={};switch(r){case"SMALL":h={fontSize:"12px",width:"20px",height:"20px"};break;case"MEDIUM":h={fontSize:"18px",width:"30px",height:"30px"};break;case"LARGE":h={fontSize:"26px",width:"80px",height:"80px"};break}const s=n?"pointer":"unset",c=!!t,C=c?{backgroundImage:`url(${t})`}:{background:Fe(e.userName)};if(i)return a(H,{sx:h,variant:"circular"});let L=a(x,{});return c||(L=e.firstName?e.firstName[0]:e.userName[0]),u(x,{children:[n&&a(g,{}),a(Ue,{ref:l,role:"img",onMouseEnter:()=>y(),onMouseLeave:()=>m(),onClick:v=>{n&&v.stopPropagation(),f?m(!1):y(!1)},className:`${o??""}`,sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",cursor:s,textDecoration:"none",...h,...C},children:L})]})};try{V.displayName="Avatar",V.__docgenInfo={description:"",displayName:"Avatar",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},avatarSize:{defaultValue:{value:"LARGE"},description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},showCardOnHover:{defaultValue:{value:"false"},description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:{value:"false"},description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function q(e){var _;const{userProfile:r,preSignedURL:t,size:n,ownerId:i,alias:o,...l}=e,{data:d,isLoading:g}=he({alias:o,type:Ce.USER_NAME},{enabled:!!o}),f=(_=i??(r==null?void 0:r.ownerId)??d)==null?void 0:_.toString(),{data:y,isLoading:m}=ye(f,{enabled:!!f&&!r}),h=r??y,{data:s,isLoading:c}=Pe(f,{enabled:!!(!t&&f)}),C=ke(t),L=ne(s),v=C??L,b=g||m,R=p.useMemo(()=>({userProfile:h,imageURL:v,isLoadingAvatar:c,...l}),[v,c,l,h]);if(b||h==null)return a(x,{});switch(n){case ce:return a(V,{...R});case de:return a($,{userId:i??h.ownerId,...R});case le:return a(M,{...R});case oe:return a(M,{isLarge:!0,...R});default:return console.warn("No size specified for UserCard"),a("span",{})}}try{q.displayName="UserCard",q.__docgenInfo={description:"",displayName:"UserCard",props:{userProfile:{defaultValue:null,description:"A UserProfile may be used for data for the card. You must supply one of `userProfile`, `alias`, `ownerId`",name:"userProfile",required:!1,type:{name:"UserProfile"}},alias:{defaultValue:null,description:"An alias that resolves the ownerId for the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"alias",required:!1,type:{name:"string"}},ownerId:{defaultValue:null,description:"The unique ownerId of the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"ownerId",required:!1,type:{name:"string"}},hideEmail:{defaultValue:null,description:"Whether to hide the user's Synapse email address",name:"hideEmail",required:!1,type:{name:"boolean"}},preSignedURL:{defaultValue:null,description:"If set, the corresponding image will be shown for the user.",name:"preSignedURL",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Specifies the card size",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},showCardOnHover:{defaultValue:null,description:"For the small user card or avatar, shows the medium user card on mouseover",name:"showCardOnHover",required:!1,type:{name:"boolean"}},hideTooltip:{defaultValue:null,description:"@deprecated For the small user card, hides the tooltip observed when hovering over the profile image.",name:"hideTooltip",required:!1,type:{name:"boolean"}},menuActions:{defaultValue:null,description:"Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. If left undefined, the menu will not render to the screen.",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},link:{defaultValue:null,description:"The link to point to on the username, defaults to https://www.synapse.org/#!Profile:${userProfile.ownerId}",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"Disables the `@username` link for the small user card (if `showCardOnHover` is false). For the medium user card, disables linking the user's name to their profile (or other specified destination)",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"Determines the size of the avatar when size === 'AVATAR' or (size === 'SMALL' and withAvatar is true)",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},withAvatar:{defaultValue:null,description:"Whether to show the avatar with the name for the small user card",name:"withAvatar",required:!1,type:{name:"boolean"}},showFullName:{defaultValue:null,description:"@deprecated Whether to show the full name in the small user card",name:"showFullName",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showAccountLevelIcon:{defaultValue:null,description:"@deprecated show certification/validation badges for small user card",name:"showAccountLevelIcon",required:!1,type:{name:"boolean"}}}}}catch{}const He=250,Ge=500,X=" ";function $(e){const{userId:r,showCardOnHover:t=!0,disableLink:n,showAccountLevelIcon:i=!1,openLinkInNewTab:o=!1,withAvatar:l=!1,avatarSize:d="SMALL",className:g,showFullName:f=!1}=e;let{link:y}=e;const m=p.useRef(null),h=ue|pe,{data:s}=Ve(r,{enabled:!!r,staleTime:1e3*60*15}),{data:c}=re(r,h,{enabled:!!r&&i}),C=p.useMemo(()=>a(q,{ownerId:r,size:"MEDIUM USER CARD"}),[r]);y==null&&(y=`${ee.PORTAL}#!Profile:${r}`);const{OverlayComponent:L,toggleShow:v,toggleHide:b}=te(C,m,He,Ge,{sx:{maxWidth:"425px"}}),R=l?a("span",{className:"SRC-inline-avatar",children:a(q,{ownerId:r,size:"AVATAR",avatarSize:d})}):a(x,{}),_=u(_e,{display:"flex",gap:1,sx:{mx:1},children:[!(c!=null&&c.isCertified)&&!(c!=null&&c.isVerified)&&a(P,{icon:"accountRegistered",label:"Registered",sx:{width:"30px",height:"30px"}}),(c==null?void 0:c.isCertified)&&a(P,{icon:"accountCertified",label:"Certified",sx:{width:"30px",height:"30px"}}),(c==null?void 0:c.isVerified)&&a(P,{icon:"accountValidated",label:"Validated",sx:{width:"30px",height:"30px"}})]}),N=f&&(s!=null&&s.firstName||s!=null&&s.lastName)?u("span",{className:"user-fullname",children:[`${(s==null?void 0:s.firstName)??""}`,s!=null&&s.firstName&&(s!=null&&s.lastName)?X:"",`${(s==null?void 0:s.lastName)??""}`]}):null,k=t||!n?Ne:"span";let A={};return t?A={whiteSpace:"nowrap"}:n&&(A={cursor:"unset"}),u(x,{children:[t&&a(L,{}),R,u(k,{className:`SRC-userCard UserBadge SRC-boldText ${g??""}`,style:A,href:n?void 0:y,target:o?"_blank":"",rel:o?"noreferrer":"",ref:m,onMouseEnter:()=>v(),onMouseLeave:()=>b(),children:[N,N?`${X}(`:"",s?`@${s.userName}`:a(H,{width:"100px"}),N?")":"",i&&_]})]})}try{$.displayName="UserBadge",$.__docgenInfo={description:"",displayName:"UserBadge",props:{userId:{defaultValue:null,description:"",name:"userId",required:!1,type:{name:"string"}},withAvatar:{defaultValue:null,description:"",name:"withAvatar",required:!1,type:{name:"boolean"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},showAccountLevelIcon:{defaultValue:null,description:"",name:"showAccountLevelIcon",required:!1,type:{name:"boolean"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{J as L,q as U,$ as a,da as b,pa as c,ca as d,la as e,ua as f,fa as g,ma as h,Ve as u};
//# sourceMappingURL=UserBadge-1350facf.js.map