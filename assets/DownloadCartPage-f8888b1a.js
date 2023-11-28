import{a,F as D,j as e}from"./jsx-runtime-095bf462.js";import{r as d}from"./index-8db94870.js";import{u as L,m as oe,bq as ee,n as ae,Q as R,aL as se,aO as ce,a9 as de,bQ as me,bR as ue,E as pe}from"./SynapseClient-7c41af39.js";import{P as he}from"./getEndpoint-ac94413e.js";import"./OrientationBanner-9afa28c1.js";import{b as fe,c as ge,u as ye}from"./useDownloadList-99b658e4.js";import{u as ie}from"./index-95cfb7c2.js";import{d as z}from"./dayjs.min-59ef0ea6.js";import{S as we}from"./Sort-7295b89b.js";import{I as y,D as be}from"./IconSvg-6a122bd5.js";import{T as A}from"./SynapseTableConstants-5f56c39f.js";import"./SkeletonButton-0864bc76.js";import{h as ne,X as ve,O as Se,K as $,Y as De,H as K}from"./SynapseTableCell-f78a513d.js";import{S as Ne}from"./SkeletonTable-c29b0ab8.js";import{d as X}from"./ToastMessage-bca643b9.js";import{T as F}from"./Tooltip-fa7621de.js";import{B as ke}from"./LoadingScreen-cb516f2c.js";import{l as Ce}from"./timezone-fd382bd1.js";import{a as Fe}from"./UserBadge-28df0982.js";import{D as x}from"./Dropdown-d38c09b6.js";import{T as Ie}from"./Table-295674c2.js";import{L as _e}from"./ActionRequiredCard-4a25f819.js";import{B as te}from"./Box-f664662a.js";import{F as re}from"./FullWidthAlert-b0620f84.js";import{T as Pe}from"./TextField-b415d66b.js";import{I as Ae}from"./InputAdornment-5b492668.js";import{B as P}from"./Button-f56bbd3a.js";import{T as _}from"./Typography-214fd772.js";function H({entityId:n,version:t}){const[r,s]=d.useState(!1),m=`library(synapser)
synLogin('username','password')

# Obtain a pointer and download the data
${n} <- synGet(entity='${n}'${t?`, version=${t}`:""} ) `,u=`import synapseclient

syn = synapseclient.Synapse()
syn.login('synapse_username','password')

# Obtain a pointer and download the data
${n} = syn.get(entity='${n}'${t?`, version=${t}`:""} )

# Get the path to the local copy of the data file
filepath = ${n}.path`,c=`synapse get ${n} ${t?`--version ${t}`:""}`;return a(D,{children:[e(F,{title:"Programmatic download options",enterNextDelay:A,placement:"left",children:e("span",{children:e("button",{className:"btn-download-icon",onClick:()=>s(!0),children:e(y,{icon:"code"})})})}),r&&e(ne,{show:!0,onClose:()=>s(!1),title:"Download Programmatically",cliCode:c,rCode:m,pythonCode:u})]})}try{H.displayName="DirectProgrammaticDownload",H.__docgenInfo={description:"",displayName:"DirectProgrammaticDownload",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"number"}}}}}catch{}const Te="TESTING_TRASH_BTN_CLASS";z.extend(Ce);function G(n){const{filesStatistics:t,refetchStatistics:r}=n,{accessToken:s}=L(),m=oe(),{ref:u,inView:c}=ie(),[p,w]=d.useState(!1),[o,f]=d.useState(void 0),[v,l]=d.useState(void 0),{data:h,status:g,isFetchingNextPage:b,isLoading:S,hasNextPage:N,fetchNextPage:B,isError:Z,error:O,refetch:T}=fe(o,v);d.useEffect(()=>{T&&T()},[t,T]),d.useEffect(()=>{Z&&O&&m(O)},[Z,O,m]);const E=(h==null?void 0:h.pages.flatMap(i=>i.page))??[];d.useEffect(()=>{g==="success"&&!b&&N&&B&&(c||p)?B():!N&&p&&(()=>{const C=E.map(I=>`${I.fileEntityId}.${I.versionNumber}`).join(`
`);navigator.clipboard.writeText(C).then(()=>{X("Successfully copied to clipboard")}),w(!1)})()},[g,b,N,B,c,p,E]);const q=i=>i?i=="eligibleForPackaging"?"Only Eligible":"Only Ineligible":"All",Q=async(i,C,I)=>{try{await ae.removeItemFromDownloadListV2(i,s),X(`${C} has been removed from your list.`,"success",{title:I}),T(),r()}catch(V){console.error(V)}},k=({columnSortBy:i})=>e("span",{children:f&&e(we,{role:"button",style:{height:"20px"},active:(o==null?void 0:o.field)===i,direction:(o==null?void 0:o.field)===i?o.direction==="DESC"?R.DESC:R.ASC:R.DESC,onClick:()=>{const C=i===(o==null?void 0:o.field)?o.direction==="ASC"?"DESC":"ASC":"DESC";f({field:i,direction:C})}})}),le=[void 0,"eligibleForPackaging","ineligibleForPackaging"];return a("div",{className:"bootstrap-4-backport",children:[e(ke,{show:p}),a("div",{className:"filterFilesContainer",children:[e("span",{className:"filterFilesByText",children:"Filter Files By"}),a(x,{children:[e(x.Toggle,{variant:"gray-primary-500",id:"dropdown-basic",children:q(v)}),e(x.Menu,{role:"menu",children:le.map(i=>e(x.Item,{role:"menuitem",onClick:()=>{l(i)},children:q(i)},`${q(i)}-filter-option`))})]})]}),E.length>0&&e(D,{children:a(Ie,{striped:!0,responsive:!0,className:"DownloadListTableV2",children:[e("thead",{children:a("tr",{children:[e("th",{}),a("th",{children:["Name",e(k,{columnSortBy:"fileName"})]}),a("th",{children:["Size",e(k,{columnSortBy:"fileSize"})]}),a("th",{children:["SynID",e(ve,{size:"small",onCopy:()=>{w(!0)}}),e(k,{columnSortBy:"synId"})]}),a("th",{children:["Project",e(k,{columnSortBy:"projectName"})]}),a("th",{children:["Added On",e(k,{columnSortBy:"addedOn"})]}),a("th",{children:["Created By",e(k,{columnSortBy:"createdBy"})]}),a("th",{children:["Created On",e(k,{columnSortBy:"createdOn"})]}),e("th",{className:"stickyColumn",children:"Actions"})]})}),a("tbody",{children:[E.map(i=>{if(i){const C=z(i.addedOn).format("L LT"),I=z(i.createdOn).format("L LT");return a("tr",{children:[a("td",{className:i.isEligibleForPackaging?"":"ineligibleForPackagingTd",children:[i.isEligibleForPackaging&&e(F,{title:"Eligible for packaging",enterNextDelay:A,placement:"right",children:e("span",{className:"eligibileIcon",children:e(y,{wrap:!1,icon:"packagableFile"})})}),!i.isEligibleForPackaging&&e(F,{title:"This file is ineligible for Web packaging because it is >100MB, or it is an external link, or it is not stored on Synapse native storage",enterNextDelay:A,placement:"right",children:e("span",{className:"ineligibileIcon",children:e(y,{wrap:!1,icon:"warningOutlined"})})})]}),e("td",{children:e("a",{target:"_blank",rel:"noopener noreferrer",href:`${he.PORTAL}#!Synapse:${i.fileEntityId}.${i.versionNumber}`,children:i.fileName})}),e("td",{children:i.fileSizeBytes&&ee(i.fileSizeBytes)}),e("td",{children:`${i.fileEntityId}${i.versionNumber?`.${i.versionNumber}`:""}`}),e("td",{children:i.projectName}),e("td",{children:C}),e("td",{children:e(Fe,{userId:i.createdBy})}),e("td",{children:I}),e("td",{className:"stickyColumn",children:a("div",{className:"actionsContainer",children:[e("span",{className:"downloadItem",children:e(Se,{entityId:i.fileEntityId,entityVersionNumber:i.versionNumber,displayFileName:!1,onClickCallback:V=>{V||Q({fileEntityId:i.fileEntityId,versionNumber:i.versionNumber},i.fileName,"File Downloaded")}})}),e("span",{className:"programmaticAccessItem",children:e(H,{entityId:i.fileEntityId,version:i.versionNumber})}),e(F,{title:"Remove from Download Cart",placement:"left",enterNextDelay:A,children:e("span",{className:"removeItem",children:e("button",{className:Te,onClick:()=>{Q({fileEntityId:i.fileEntityId,versionNumber:i.versionNumber},i.fileName,"File Removed")},children:e(y,{icon:"removeCircle"})})})})]})})]},i.fileEntityId)}else return!1}),e("tr",{ref:u})]})]})}),S&&e(Ne,{numCols:5,numRows:3})]})}try{G.displayName="DownloadListTable",G.__docgenInfo={description:"",displayName:"DownloadListTable",props:{filesStatistics:{defaultValue:null,description:"",name:"filesStatistics",required:!0,type:{name:"FilesStatisticsResponse"}},refetchStatistics:{defaultValue:null,description:"",name:"refetchStatistics",required:!0,type:{name:"() => Promise<any>"}}}}}catch{}function M(n){const{accessToken:t}=L(),r=new se({defaultOptions:{queries:{staleTime:50*1e3,retry:!1}}});return t?e(ce,{client:r,children:e(de,{children:n.filesStatistics&&e(G,{...n})})}):e(D,{})}try{M.displayName="AvailableForDownloadTable",M.__docgenInfo={description:`Table of the files added to the Download Cart that are currently available for download.
Note that this creates it's own QueryClient, so it's cache does not persist if you remount.`,displayName:"AvailableForDownloadTable",props:{filesStatistics:{defaultValue:null,description:"",name:"filesStatistics",required:!0,type:{name:"FilesStatisticsResponse"}},refetchStatistics:{defaultValue:null,description:"",name:"refetchStatistics",required:!0,type:{name:"() => Promise<any>"}}}}}catch{}function W(n){const{numFiles:t,numPackagableFiles:r,numBytes:s}=n,m=t-r,u=t===0,c=u?"SRC-inactive":"SRC-primary-text-color";return a("span",{className:"DownloadDetailsV2",children:[e("span",{className:"item",children:!u&&a(D,{children:[t.toLocaleString()," ",$("File",t)]})}),a("span",{className:"item",children:[e("span",{className:c,children:e(y,{wrap:!1,icon:"packagableFile"})}),!u&&a(D,{children:[r.toLocaleString()," ",$("File",r)," eligible for packaging"]})]}),s>0&&e(F,{title:"This is the total size of all files in the Download Cart that are available to download.",enterNextDelay:A,placement:"top",children:e("span",{className:"item",children:ee(s)})}),m>0&&a("span",{className:"item",children:[e("span",{className:"SRC-warning-color",children:e(y,{icon:"warningOutlined"})}),!u&&a(D,{children:[m.toLocaleString()," ",$("File",m)," ineligible for packaging"]})]})]})}try{W.displayName="DownloadDetails",W.__docgenInfo={description:"",displayName:"DownloadDetails",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numPackagableFiles:{defaultValue:null,description:"",name:"numPackagableFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!0,type:{name:"number"}}}}}catch{}function U(n){const{numFiles:t,numPackagableFiles:r,numBytes:s}=n;return e("div",{children:e(W,{numFiles:t,numPackagableFiles:r,numBytes:s})})}try{U.displayName="DownloadListStats",U.__docgenInfo={description:"",displayName:"DownloadListStats",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numPackagableFiles:{defaultValue:null,description:"",name:"numPackagableFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!0,type:{name:"number"}}}}}catch{}const j=n=>{const{ref:t,inView:r}=ie(),{data:s,status:m,isLoading:u,hasNextPage:c,isFetchingNextPage:p,fetchNextPage:w}=ge({useErrorBoundary:!0});d.useEffect(()=>{m==="success"&&!p&&c&&w&&r&&w()},[m,c,p,w,r]);const o=(s==null?void 0:s.pages.flatMap(f=>f.page))??[];return e(D,{children:a(te,{sx:{pt:5},display:"flex",flexDirection:"column",gap:3,children:[o.map((f,v)=>f?e(De,{action:f.action,count:f.count,onViewSharingSettingsClicked:n.onViewSharingSettingsClicked},v):!1),o.length>0&&e("div",{ref:t}),u&&e(_e,{})]})})};try{j.displayName="DownloadListActionsRequired",j.__docgenInfo={description:"",displayName:"DownloadListActionsRequired",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}const Ee="Please provide a package file name and try again.",Y=n=>{const{accessToken:t}=L(),[r,s]=d.useState(!1),[m,u]=d.useState(""),[c,p]=d.useState(),[w,o]=d.useState(void 0),{onPackageCreation:f}=n,v=async h=>{if(h.preventDefault(),!m){p({message:Ee,variant:"danger"});return}s(!0);try{const g=`${m}.zip`,b=await me(g,t);o(b);const{resultFileHandleId:S}=b;try{window.location.href=await ue(S,t),u(""),o(void 0),f()}catch(N){console.error("Err on getFileHandleByIdURL = ",N)}}catch(g){p({message:g.reason,variant:"danger"})}finally{s(!1)}};return a(D,{children:[e("div",{className:"CreatePackageV2",children:a("div",{className:"createPackageStep",children:[e("span",{className:"createPackageTitle",children:"Create your Download Package"}),e("span",{className:"createPackageDescription",children:"Name your download package and select Download Package to get started."}),!r&&!w&&a(te,{display:"flex",alignItems:"stretch",children:[e(Pe,{onChange:h=>{u(h.target.value)},type:"text",placeholder:"PackageName",sx:{width:"233px"},InputProps:{endAdornment:e(Ae,{position:"end",children:".zip"})}}),e(P,{variant:"contained",color:"primary",onClick:h=>{v(h)},sx:{marginLeft:"20px"},disabled:!m,children:"Download Package"})]}),r&&a("div",{className:"creatingPackage",children:[e("span",{className:"spinner"}),e("span",{style:{marginLeft:5},children:"Creating package..."})]})]})}),e(re,{show:!!c,variant:c!=null&&c.variant?c.variant:"success",description:c==null?void 0:c.message,autoCloseAfterDelayInSeconds:10,onClose:()=>{p(void 0)}})]})};try{Y.displayName="CreatePackageV2",Y.__docgenInfo={description:"",displayName:"CreatePackageV2",props:{onPackageCreation:{defaultValue:null,description:"",name:"onPackageCreation",required:!0,type:{name:"() => void"}}}}}catch{}const xe=`import synapseclient
syn = synapseclient.login()
dl_list_file_entities = syn.get_download_list()`,Le="synapse get-download-list",J=n=>{const{accessToken:t}=L(),[r,s]=d.useState(0),[m,u]=d.useState(!1),[c,p]=d.useState(!1),[w,o]=d.useState(!1),[f,v]=d.useState(),{data:l,isLoading:h,isError:g,error:b,refetch:S}=ye();if(d.useEffect(()=>{g&&b&&v(b)},[g,b]),d.useEffect(()=>{l&&l.numberOfFilesRequiringAction==0&&s(1)},[l]),f)return e(pe,{error:f});const N=async()=>{await ae.clearDownloadListV2(t),S()};return a("div",{className:"DownloadCartPage",children:[e("div",{children:a("div",{className:"pageHeader",children:[a("div",{className:"grid",children:[e("h3",{className:"pageHeaderTitle",children:"Your Download Cart"}),e(F,{title:"Immediately removes all items from your download cart",enterNextDelay:300,placement:"right",children:e(P,{onClick:()=>{N()},variant:"text",color:"primary",startIcon:e(be,{}),children:"Clear Your Download Cart"})})]}),e(_,{className:"description",variant:"body1",children:"You may find your added files in the tabs below. Any files which require actions before download can be found in the Access Actions Required tab, while any that can be downloaded now can be found in the Download List tab."})]})}),e("div",{className:"tabs-container",children:e("div",{className:"container",children:a("ul",{className:"nav nav-tabs",children:[e("li",{className:`nav-item ${r==0?"active":""}`,"aria-selected":r==0,children:a("button",{onClick:()=>s(0),children:["Access Actions Required",!g&&!h&&l&&e("span",{className:"fileCount",children:l.totalNumberOfFiles-l.numberOfFilesAvailableForDownload})]})}),e("li",{className:`nav-item ${r==1?"active":""}`,"aria-selected":r==1,children:a("button",{onClick:()=>s(1),children:["Download List",!g&&!h&&l&&e("span",{className:"fileCount",children:l.numberOfFilesAvailableForDownload})]})})]})})}),r==0&&!g&&!h&&l&&a("div",{children:[l.numberOfFilesRequiringAction>0&&e("div",{children:e("div",{className:"actionsRequiredContainer container",children:e(j,{...n})})}),l.numberOfFilesRequiringAction===0&&e("div",{className:"placeholder",children:e("div",{children:"No actions are currently required."})})]}),r==1&&!g&&!h&&l&&a("div",{children:[l.numberOfFilesAvailableForDownload>0&&a("div",{className:"DownloadListTabContent",children:[e("div",{className:"subSectionOverviewContainer",children:a("div",{className:"subSectionOverview container",children:[a("div",{children:[a("div",{className:"headlineWithHelp",children:[a(_,{variant:"headline3",sx:{mb:2},children:[e(y,{icon:"packagableFile"})," Web Download (.ZIP Packages)"]}),e(K,{markdownText:"This will allow you to create a .zip file that contains eligible files. Files greater that 100 MB, external links, or files which are not stored on Synapse native storage are ineligible. In most cases, ineligible files can be downloaded individually. External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-From-the-Synapse-UI.2004254837.html"})]}),e(_,{variant:"body1",component:"div",sx:{mb:2},children:a("ul",{children:[e("li",{children:"Eligible files will be added to .ZIP packages of up to 1GB in size"}),e("li",{children:"If you have more than 1GB, you can create multiple packages"}),e("li",{children:"Will only include files which are hosted on Synapse native storage"}),e("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),l.numberOfFilesAvailableForDownloadAndEligibleForPackaging>0&&e(P,{variant:"contained",onClick:()=>{u(!0)},startIcon:e(y,{icon:"download",wrap:!1}),children:"Download As .Zip Packages"}),l.numberOfFilesAvailableForDownloadAndEligibleForPackaging==0&&e(F,{title:"You cannot create a .zip package because there are no eligible files.",enterNextDelay:300,placement:"top",children:e("span",{children:e(P,{variant:"contained",disabled:!0,startIcon:e(y,{icon:"download",wrap:!1}),children:"Download As .Zip Packages"})})})]}),a("div",{children:[a("div",{className:"headlineWithHelp",children:[a(_,{variant:"headline3",sx:{mb:2},children:[e(y,{icon:"code"})," Programmatic Download"]}),e(K,{markdownText:"This will provide syntax which you can enter into your programmatic client. It is suitable for large files (>100 MB), for packages > 1GB, and for files which aren’t stored on Synapse native storage (e.g. in a special AWS S3 or Google Cloud bucket).  External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-Programmatically.2003796248.html"})]}),e(_,{variant:"body1",component:"div",sx:{mb:2},children:a("ul",{children:[e("li",{children:"Requires installation of a programmatic client (R, Python, CLI)"}),e("li",{children:"No limit to the file size or the size of the package that can be downloaded"}),e("li",{children:"Will include files which are hosted on and off Synapse native storage"}),e("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),e(P,{variant:"contained",onClick:()=>{p(!0)},startIcon:e(y,{icon:"code",wrap:!1}),children:"Create Programmatic Package"})]})]})}),a("div",{className:"availableForDownloadTableContainer container",children:[m&&e(Y,{onPackageCreation:()=>{o(!0),S()}}),e(U,{numBytes:l.sumOfFileSizesAvailableForDownload,numPackagableFiles:l.numberOfFilesAvailableForDownloadAndEligibleForPackaging,numFiles:l.numberOfFilesAvailableForDownload}),S&&e(M,{filesStatistics:l,refetchStatistics:S})]})]}),l.numberOfFilesAvailableForDownload===0&&e("div",{className:"placeholder",children:e("div",{children:"Your Download Cart is currently empty."})})]}),e(re,{show:w,variant:"success",title:"Package Created",description:"A package has been created with eligible files. The items contained in this .zip file have been removed from your list. If your package is over 1GB, you will need to create multiple packages.",autoCloseAfterDelayInSeconds:10,onClose:()=>{o(!1)}}),c&&e(ne,{show:!0,onClose:()=>p(!1),title:"Download Programmatically",pythonCode:xe,cliCode:Le})]})};try{J.displayName="DownloadCartPage",J.__docgenInfo={description:"Show the Download Cart page.",displayName:"DownloadCartPage",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}export{J as D};
//# sourceMappingURL=DownloadCartPage-f8888b1a.js.map