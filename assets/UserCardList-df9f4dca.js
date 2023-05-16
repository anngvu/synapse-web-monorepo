import{j as d}from"./jsx-runtime-095bf462.js";import{R as f}from"./index-8db94870.js";import{g as L,U as c}from"./UserCard-fff343bf.js";import{H as E}from"./SynapseConstants-667d004c.js";import{w as N}from"./without-2c931b27.js";var R=(e=>(e.STRING="STRING",e.DOUBLE="DOUBLE",e.BOOLEAN="BOOLEAN",e.INTEGER="INTEGER",e.DATE="DATE",e.FILEHANDLEID="FILEHANDLEID",e.ENTITYID="ENTITYID",e.LINK="LINK",e.MEDIUMTEXT="MEDIUMTEXT",e.LARGETEXT="LARGETEXT",e.USERID="USERID",e.STRING_LIST="STRING_LIST",e.INTEGER_LIST="INTEGER_LIST",e.BOOLEAN_LIST="BOOLEAN_LIST",e.DATE_LIST="DATE_LIST",e.USERID_LIST="USERID_LIST",e.ENTITYID_LIST="ENTITYID_LIST",e.EVALUATIONID="EVALUATIONID",e))(R||{});class u extends f.Component{constructor(t){super(t),this.state={userProfileMap:{}},this.update=this.update.bind(this)}componentDidMount(){const{list:t}=this.props;this.update(t)}componentDidUpdate(t){const r=t.list,a=N(this.props.list.filter(l=>l),...r);a.length>0&&this.update(a)}update(t){L(t.filter(r=>!!r)).then(r=>{const a={};r.list.forEach(l=>{const{ownerId:n}=l;a[n]=l}),this.setState({userProfileMap:{...this.state.userProfileMap,...a}})}).catch(r=>{console.error("Error on batch call =",r)})}manuallyExtractData(t){const r=t.queryResult.queryResults.headers.findIndex(s=>s.name==="firstName"),a=t.queryResult.queryResults.headers.findIndex(s=>s.name==="lastName"),l=t.queryResult.queryResults.headers.findIndex(s=>s.name==="institution"),n=t.queryResult.queryResults.headers.findIndex(s=>s.columnType===R.USERID);return t.queryResult.queryResults.rows.filter(s=>!s.values[n]).map(s=>{const i=s.values;return{firstName:i[r]??"",lastName:i[a]??"",company:i[l]??void 0,ownerId:null,userName:i[r]?i[r][0]??"":""}})}render(){const{size:t=E,data:r,list:a}=this.props,{userProfileMap:l={}}=this.state,n=r&&this.manuallyExtractData(r);let o=0;return d("div",{className:"SRC-card-grid-row",children:a.map(s=>{const i=s!=null?l[s]:null;if(i)return d("div",{className:"SRC-grid-item SRC-narrow-grid-item",children:d(c,{size:t,preSignedURL:i.clientPreSignedURL,userProfile:i})},JSON.stringify(i));const I=n&&n[o];return I?(o+=1,d("div",{className:"SRC-grid-item SRC-narrow-grid-item",children:d(c,{disableLink:!0,hideEmail:!0,size:t,userProfile:I})},JSON.stringify(I))):!1})})}}try{u.displayName="UserCardList",u.__docgenInfo={description:"",displayName:"UserCardList",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"(string | null)[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"QueryResultBundle"}}}}}catch{}export{R as C,u as U};
//# sourceMappingURL=UserCardList-df9f4dca.js.map