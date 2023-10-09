import{a as b,j as s,F as H}from"./jsx-runtime-095bf462.js";import{r as N}from"./index-8db94870.js";import{x as J}from"./SynapseClient-47ca3138.js";import"./getEndpoint-ac94413e.js";import{b as j}from"./SynapseConstants-1ba53034.js";import{a as g}from"./queryUtils-7ea32e84.js";import{p as D,g as Z}from"./SqlFunctions-bff207dd.js";import{a as G}from"./useGetQueryResultBundle-f62cb8c7.js";import{c as ee,P as re}from"./factory-275e83af.js";import{d as A}from"./dayjs.min-59ef0ea6.js";import{O as te,p as se,N as oe}from"./ObservationCard-1a13ab0d.js";import{D as ne}from"./Dialog-2dba707a.js";import{g as B}from"./ColorGradient-3d3e1969.js";import{r as ae}from"./react-sizeme-5bfc490a.js";import{B as f}from"./Box-c35526e4.js";import{T as ie}from"./Typography-d16533eb.js";import"./LeftRightPanel-0576276e.js";import{S as le}from"./StyledFormControl-6913b245.js";import"./WideButton-5d80dc49.js";import"./InputSizedButton-39c23760.js";import{I as ue}from"./InputLabel-b63da0ce.js";import{S as de}from"./Select-6dcf8eff.js";import{M as ce}from"./MenuItem-0cef413c.js";import{S as E}from"./Skeleton-2bd04c38.js";const me="species",pe="observationphase",L={concreteType:"org.sagebionetworks.repo.model.table.QueryResultBundle",queryResult:{concreteType:"org.sagebionetworks.repo.model.table.QueryResult",queryResults:{concreteType:"org.sagebionetworks.repo.model.table.RowSet",tableId:"syn52408661",etag:"a3270cb2-4373-4e12-9981-e12326e54ad1",headers:[{name:"species",columnType:"STRING",id:"152514"},{name:"observationPhase",columnType:"STRING",id:"197976"},{name:"observationPhaseOrder",columnType:"INTEGER",id:"198102"},{name:"observationTimeMax",columnType:"INTEGER",id:"198103"},{name:"observationTimeUnits",columnType:"STRING",id:"198101"}],rows:[{rowId:9,versionNumber:4,values:["Danio rerio","embryo","1","7","days"]},{rowId:10,versionNumber:4,values:["Danio rerio","larval","2","3","months"]},{rowId:11,versionNumber:4,values:["Danio rerio","juvenile","3","6","months"]},{rowId:12,versionNumber:4,values:["Danio rerio","adult","4","12","months"]},{rowId:16,versionNumber:4,values:["Drosophila","embryo","1","24","hours"]},{rowId:17,versionNumber:4,values:["Drosophila","larval","2","5","days"]},{rowId:18,versionNumber:4,values:["Drosophila","pupal","3","12","days"]},{rowId:19,versionNumber:4,values:["Drosophila","adult","4","5","weeks"]},{rowId:1,versionNumber:4,values:["Mus musculus","prenatal","1","21","days"]},{rowId:2,versionNumber:4,values:["Mus musculus","postnatal","2","6","months"]},{rowId:20,versionNumber:4,values:["Rattus norvegicus","prenatal","1","23","days"]},{rowId:21,versionNumber:4,values:["Rattus norvegicus","neonatal","2","4","weeks"]},{rowId:22,versionNumber:4,values:["Rattus norvegicus","weanling","3","2","months"]},{rowId:23,versionNumber:4,values:["Rattus norvegicus","juvenile","4","3","months"]},{rowId:24,versionNumber:4,values:["Rattus norvegicus","adolescent","5","6","months"]},{rowId:25,versionNumber:4,values:["Rattus norvegicus","adult","6","12","months"]},{rowId:13,versionNumber:4,values:["Saccharomyces","log phase","1","7","days"]},{rowId:14,versionNumber:4,values:["Saccharomyces","stationary phase","2","2","weeks"]},{rowId:15,versionNumber:4,values:["Saccharomyces","death phase","3","3","weeks"]},{rowId:3,versionNumber:4,values:["Sus scrofa","prenatal","1","115","days"]},{rowId:4,versionNumber:4,values:["Sus scrofa","neonatal","2","3","months"]},{rowId:5,versionNumber:4,values:["Sus scrofa","weanling","3","6","months"]},{rowId:6,versionNumber:4,values:["Sus scrofa","juvenile","4","12","months"]},{rowId:7,versionNumber:4,values:["Sus scrofa","adolescent","5","2","years"]},{rowId:8,versionNumber:4,values:["Sus scrofa","adult","6","3","years"]}]}}};var F;const fe=(F=L.queryResult)==null?void 0:F.queryResults.headers.findIndex(e=>e.name.toLowerCase()===me);var Q;const O=(Q=L.queryResult)==null?void 0:Q.queryResults.headers.findIndex(e=>e.name.toLowerCase()===pe),ye=ee(re),he=(e,r,l,d)=>{let n=-1;return{timepoints:r.map((o,u)=>{const a=parseInt(o.values[l.time]),c=o.values[l.timeUnits];return o.rowId==d&&(n=u),e.add(a,c)}),hoverOverIndex:n}},q=e=>e.length==0?A().add(1,"days"):e.reduce((r,l)=>!r||l.isAfter(r)?l:r),ve=(e,r)=>{if(e.timepoints.length==0)return[{x:[A().format()],y:[.5],mode:"lines",line:{color:"blue",width:2},customdata:[],hoverinfo:"none"}];const l=e.timepoints.reduce((n,t,o)=>{const u=n;return u[t.format()]||(u[t.format()]=[]),u[t.format()].push(r[o]),n},{});return e.timepoints.map((n,t)=>{const o=n.format(),u=t==e.hoverOverIndex,c=l[o].map(y=>y.rowId);return{x:[o,o,o],y:[0,.5,1],mode:"lines",line:{color:u?"black":"gray",width:2},customdata:[c,c,c],hoverinfo:"none"}})},ge=(e,r,l,d,n,t)=>{const o=[{x:e.add(1,"day").format(),y:-1,text:"                             ",showarrow:!1,textangle:"270",height:15}];if(d&&n&&t){const u=t>1?`(${t})`:"",a=e.add(d,n);o.push({x:a.format(),y:-1,text:`${d} ${se(n,d)} ${u}`,showarrow:!1,textangle:"270",height:15})}return{hovermode:"closest",dragmode:!1,showlegend:!1,xaxis:{showgrid:!1,showticklabels:!1,showline:!1,zeroline:!1},yaxis:{range:[-1,1],showgrid:!1,zeroline:!1,showline:!1,showticklabels:!1},annotations:o,shapes:[{type:"rect",x0:e.subtract(r.diff(e)/10).format(),x1:r.add(r.diff(e)/3).format(),y0:.25,y1:.75,fillcolor:l,opacity:.8,line:{width:0}}],margin:{l:0,r:0,t:60,b:60}}},M=({color:e,rowData:r,schema:l,widthPx:d})=>{const[n,t]=N.useState(),[o,u]=N.useState(),a=A(),c=N.useRef(null),y=n==null?void 0:n.points[0].customdata,i=r==null?void 0:r.filter(p=>y==null?void 0:y.includes(p.rowId)),m=o==null?void 0:o.points[0].customdata,h=r==null?void 0:r.filter(p=>m==null?void 0:m.includes(p.rowId)),S=h&&h.length>0?parseInt(h[0].values[l.time]):void 0,T=h&&h.length>0?h[0].values[l.timeUnits]:void 0,_=he(a,r,l,(m==null?void 0:m.length)>0?m[0]:void 0),w=q(_.timepoints);return b("div",{ref:c,children:[s(ye,{style:{width:d,height:"220px"},data:ve(_,r),layout:ge(a,w,e,S,T,h.length),config:{displayModeBar:!1},useResizeHandler:!0,onClick:p=>{t(p),u(void 0)},onHover:p=>{u(p)},onUnhover:()=>{u(void 0)}}),i&&s(ne,{onClose:()=>t(void 0),open:!!i&&i.length>0,children:i.map(p=>s(te,{data:p.values,schema:l,includePortalCardClass:!1},p.rowId))})]})};try{q.displayName="getMaxDate",q.__docgenInfo={description:"",displayName:"getMaxDate",props:{}}}catch{}try{M.displayName="TimelinePhase",M.__docgenInfo={description:"",displayName:"TimelinePhase",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},rowData:{defaultValue:null,description:"",name:"rowData",required:!0,type:{name:"Row[]"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"ObservationCardSchema"}},widthPx:{defaultValue:null,description:"",name:"widthPx",required:!0,type:{name:"number"}}}}}catch{}const C=({color:e,phaseName:r})=>b(f,{sx:{display:"flex",alignItems:"center",gap:"7px"},children:[s(f,{sx:{backgroundColor:e,width:"20px",height:"20px"}}),s(ie,{variant:"body1",children:r==null?void 0:r.toUpperCase()})]});try{C.displayName="TimelineLegendItem",C.__docgenInfo={description:"",displayName:"TimelineLegendItem",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},phaseName:{defaultValue:null,description:"",name:"phaseName",required:!0,type:{name:"string | null"}}}}}catch{}const P=({sql:e,additionalFilters:r=[],species:l,setSpecies:d})=>{var c,y;const n=D(e),t=G({entityId:n,query:{sql:`SELECT species FROM ${n} WHERE species IS NOT null GROUP BY species`,additionalFilters:r},partMask:j,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"}),{data:o,isLoading:u}=t,a=(y=(c=o==null?void 0:o.queryResult)==null?void 0:c.queryResults)==null?void 0:y.rows;return N.useEffect(()=>{a&&d(a.length>0?a[0].values[0]:null)},[a,d]),u||!a||a.length<2?s(H,{}):s(f,{children:b(le,{children:[s(ue,{children:"Species"}),s(de,{sx:{marginLeft:"2px",marginBottom:"2px"},value:l,defaultValue:a[0].values[0],label:"Species",onChange:i=>d(i.target.value),children:a==null?void 0:a.map(i=>{const m=i.values[0];return s(ce,{value:m,children:m},m)})})]})})};try{P.displayName="TimelinePlotSpeciesSelector",P.__docgenInfo={description:"",displayName:"TimelinePlotSpeciesSelector",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},additionalFilters:{defaultValue:{value:"[]"},description:"",name:"additionalFilters",required:!1,type:{name:"QueryFilter[]"}},species:{defaultValue:null,description:"",name:"species",required:!1,type:{name:"string | null"}},setSpecies:{defaultValue:null,description:"",name:"setSpecies",required:!0,type:{name:"Dispatch<SetStateAction<string | null | undefined>>"}}}}}catch{}const Ie="phase",be="time",Ne="timeunits",_e="submittername",xe="text",Se="tag",Te="submitteruserid",we="doi",k=({sql:e,searchParams:r,sqlOperator:l,defaultSpecies:d})=>{var U;const n=D(e),[t,o]=N.useState(d),u=Z(n,r,l)??[],a=t?{columnName:"species",concreteType:"org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter",values:[t],operator:J.EQUAL}:void 0,c=[...u];a&&c.push(a);const y=G({entityId:n,query:{sql:`${e} WHERE observationTime IS NOT NULL`,sort:[{column:"observationTime",direction:"ASC"}],additionalFilters:c},partMask:j,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!t}),{data:i,isLoading:m}=y;if(m)return s(Re,{});const h=g(Ie,i),S=g(be,i),T=g(Ne,i),_=g(_e,i),w=g(xe,i),p=g(we,i),$=g(Se,i),z=g(Te,i),K={submitterName:_,submitterUserId:z,tag:$,text:w,time:S,timeUnits:T,doi:p};let x=[];if(t){const v=(U=L.queryResult)==null?void 0:U.queryResults.rows.filter(I=>I.values[fe]==t);if(!v||v.length==0)return s(H,{});x=v}return t===null?s(oe,{}):b(f,{children:[b(f,{sx:{display:"flex",justifyContent:"space-between"},children:[s(f,{children:!d&&s(P,{setSpecies:o,species:t,sql:e,additionalFilters:u})}),s(f,{sx:{display:"flex",justifyContent:"flex-end",gap:"25px"},children:x.map((v,I)=>{const{colorPalette:R}=B(I,1);return s(C,{color:R[0],phaseName:v.values[O]},v.rowId)})})]}),t&&s(ae.SizeMe,{monitorWidth:!0,noPlaceholder:!0,children:({size:v})=>s(f,{sx:{display:"flex"},className:"forcePlotlyDefaultCursor",children:x.map((I,R)=>{var V;const{colorPalette:W}=B(R,1),Y=(V=i==null?void 0:i.queryResult)==null?void 0:V.queryResults.rows.filter(X=>X.values[h]==I.values[O]);return s(M,{name:I.values[O],color:W[0],rowData:Y,schema:K,widthPx:v.width?v.width/x.length:0},I.rowId)})})})]})},Re=()=>b(f,{children:[b(f,{sx:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[s(E,{height:"45px",width:"80px"}),s(E,{height:"45px",width:"80px"})]}),s(f,{sx:{display:"flex"},children:s(E,{height:"150px",width:"100%"})})]});try{k.displayName="TimelinePlot",k.__docgenInfo={description:"",displayName:"TimelinePlot",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"EQUAL"'},{value:'"IN"'},{value:'"HAS"'},{value:'"HAS_LIKE"'}]}},defaultSpecies:{defaultValue:null,description:"",name:"defaultSpecies",required:!1,type:{name:"string"}}}}}catch{}export{k as T};
//# sourceMappingURL=TimelinePlot-93618c99.js.map