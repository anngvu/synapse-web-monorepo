import{j as e,F as f,a as v}from"./jsx-runtime-095bf462.js";import{I as r}from"./IconSvg-ded09394.js";import{u as w,L as x,g as b}from"./LastLoginInfo-3e9e96f9.js";import{B as c}from"./Button-d3d5b3a8.js";import{B as s}from"./Box-891dc3c7.js";const d={color:"grey.800",mb:"10px"},p={width:"28px",height:"28px"};function h(a){const{loginMethod:l,iconName:u,onClick:o}=a,{lastLoginMethod:t,...g}=w(),n=x({lastLoginMethod:t,display:"sentence",...g}),m=t===l&&n,i=`Sign in with ${b(l)}`;return e(f,{children:m?e(c,{fullWidth:!0,variant:"outlined",onClick:o,sx:{...d,height:"74px",py:1.5},"data-testid":"button-with-last-login-info",children:v(s,{flexDirection:"column",children:[v(s,{display:"flex",justifyContent:"center",alignItems:"center",mb:"10px",children:[e(r,{icon:u,sx:{...p,mr:1,ml:-.5}}),i]}),n]})}):e(c,{fullWidth:!0,variant:"outlined",onClick:o,sx:{...d,height:"50px"},startIcon:e(r,{icon:u,sx:p}),"data-testid":"button-without-last-login-info",children:i})})}try{h.displayName="LoginMethodButton",h.__docgenInfo={description:"",displayName:"LoginMethodButton",props:{loginMethod:{defaultValue:null,description:"",name:"loginMethod",required:!0,type:{name:"enum",value:[{value:'"GOOGLE"'},{value:'"ORCID"'},{value:'"EMAIL"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"clear"'},{value:'"visibility"'},{value:'"columns"'},{value:'"info"'},{value:'"warning"'},{value:'"article"'},{value:'"code"'},{value:'"data"'},{value:'"label"'},{value:'"link"'},{value:'"table"'},{value:'"time"'},{value:'"title"'},{value:'"circle"'},{value:'"image"'},{value:'"accessOpen"'},{value:'"accessClosed"'},{value:'"arrowBack"'},{value:'"arrowForward"'},{value:'"arrowDropUp"'},{value:'"arrowDropDown"'},{value:'"cards"'},{value:'"check"'},{value:'"cart"'},{value:'"clock"'},{value:'"openInNewWindow"'},{value:'"dashboard"'},{value:'"delete"'},{value:'"deleteSweep"'},{value:'"addToCart"'},{value:'"addCircleOutline"'},{value:'"addCircleTwoTone"'},{value:'"reload"'},{value:'"team"'},{value:'"photoCamera"'},{value:'"favTwoTone"'},{value:'"favOutline"'},{value:'"fav"'},{value:'"peopleTwoTone"'},{value:'"challengesTwoTone"'},{value:'"download"'},{value:'"searchOutlined"'},{value:'"search"'},{value:'"history"'},{value:'"login"'},{value:'"helpOutlined"'},{value:'"helpOutlineTwoTone"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"rat"'},{value:'"chromatin"'},{value:'"clinical"'},{value:'"contentCopy"'},{value:'"dataLocked"'},{value:'"geneExpression"'},{value:'"geneVariants"'},{value:'"github"'},{value:'"imaging"'},{value:'"lineGraph"'},{value:'"kinomics"'},{value:'"proteomics"'},{value:'"packagableFile"'},{value:'"other"'},{value:'"wiki"'},{value:'"file"'},{value:'"fileOutlined"'},{value:'"folder"'},{value:'"public"'},{value:'"people"'},{value:'"entityview"'},{value:'"submissionview"'},{value:'"challenge"'},{value:'"discussion"'},{value:'"dataset"'},{value:'"datasetcollection"'},{value:'"docker"'},{value:'"accountCertified"'},{value:'"accountRegistered"'},{value:'"accountValidated"'},{value:'"warningOutlined"'},{value:'"removeCircle"'},{value:'"replyTwoTone"'},{value:'"chatTwoTone"'},{value:'"accessManagement"'},{value:'"chevronRight"'},{value:'"chevronLeft"'},{value:'"database"'},{value:'"close"'},{value:'"cross"'},{value:'"verticalEllipsis"'},{value:'"sync"'},{value:'"clipboard"'},{value:'"clipboardCheck"'},{value:'"add"'},{value:'"block"'},{value:'"checkCircle"'},{value:'"errorOutlined"'},{value:'"phone"'},{value:'"pushpin"'},{value:'"addBoxOutline"'},{value:'"minusBoxOutline"'},{value:'"italic"'},{value:'"bold"'},{value:'"visibilityOff"'},{value:'"strikethrough"'},{value:'"subscript"'},{value:'"superscript"'},{value:'"latex"'},{value:'"edit"'},{value:'"tag"'},{value:'"restore"'},{value:'"upload"'},{value:'"flag"'},{value:'"newFolder"'},{value:'"createVersion"'},{value:'"email"'},{value:'"addConditions"'},{value:'"google24"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{h as L};
//# sourceMappingURL=LoginMethodButton-19147e85.js.map