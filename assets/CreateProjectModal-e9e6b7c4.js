import{a as p,F as m,j as t}from"./jsx-runtime-095bf462.js";import{r as a}from"./index-8db94870.js";import{u as S,S as g}from"./SynapseClient-af316750.js";import{C as j}from"./ConfirmationDialog-8eb05c08.js";import{F as y}from"./FullWidthAlert-20558162.js";import{T as w}from"./TextField-f518206e.js";import{A as P}from"./AlertTitle-1b72df18.js";const u=({isShowingModal:n=!1,onClose:f})=>{const{accessToken:C}=S(),[o,s]=a.useState(""),[h,i]=a.useState(!1),[c,r]=a.useState(),l=()=>{s(""),r(void 0),f()},d=async()=>{try{const e=await g.createProject(o,C);i(!0),l(),window.location.href=`/#!Synapse:${e.id}`}catch(e){e.reason?r(e.reason):r(e.toString())}};return p(m,{children:[t(j,{open:n,title:"Create a new Project",content:p(m,{children:[t(w,{id:"projectInput",label:"Project Name",value:o,fullWidth:!0,onChange:e=>{s(e.target.value)},inputProps:{onKeyDown:e=>{e.key==="Enter"&&o!==""&&d()}}}),c&&t(P,{severity:"error",children:c})]}),confirmButtonText:"Save",onConfirm:()=>{d()},onCancel:l,maxWidth:"md"}),t(y,{show:h,variant:"info",title:"Project created",description:"",autoCloseAfterDelayInSeconds:10,onClose:()=>{i(!1)}})]})};try{u.displayName="CreateProjectModal",u.__docgenInfo={description:"",displayName:"CreateProjectModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{u as C};
//# sourceMappingURL=CreateProjectModal-e9e6b7c4.js.map