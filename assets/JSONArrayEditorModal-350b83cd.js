import{a as p,j as o}from"./jsx-runtime-095bf462.js";import{r as a}from"./index-8db94870.js";import{z as N,K as D,C as b}from"./SynapseTableCell-f4b5964e.js";import{g as x,M as w,A as F,a as I,b as O,c as P,B as J,E as q,T as M,D as R,d as j}from"./ErrorListTemplate-63d19479.js";import"./isPlainObject-a5fcaf03.js";import"./mapValues-12c386f6.js";import"./index.modern-bdabb7b6.js";import"./index-953d39fd.js";import{p as B}from"./papaparse.min-84949987.js";import{a as k,C as W}from"./_getTag-ed9314eb.js";import{B as T}from"./Box-f664662a.js";import{B as y}from"./Button-f56bbd3a.js";import{T as L}from"./TextField-f454b447.js";import{A as H,a as K}from"./AlertTitle-ce329963.js";import{T as U}from"./Typography-214fd772.js";const $={jsonSchemaDefinition:{type:"string"}};function z(n=$){const{jsonSchemaDefinition:t}=n,i=a.useMemo(()=>k(t)&&t.type&&t.type==="string",[t]);return{parse:a.useCallback(l=>new Promise((s,u)=>{B.parse(l,{dynamicTyping:!i,complete:r=>{r.errors.length>0?u(r.errors):s(r.data.flat())}})}),[i])}}const A={type:"string"};function G(n=A){return{$schema:"http://json-schema.org/draft-07/schema#",type:"array",items:n}}function h(n){const{value:t=[],onChange:i,onSubmit:f,arrayItemDefinition:l=A,formRef:s}=n,[u,r]=a.useState(!1),[m,d]=a.useState(""),[c,g]=a.useState([]),V=a.useMemo(()=>G(l),[l]),{parse:S}=z({jsonSchemaDefinition:l}),v=a.useCallback(async()=>{if(m)try{const e=await S(m);i([...t,...e]),g([]),d(""),r(!1)}catch(e){g(e)}},[i,m,t,S]),E=a.useMemo(()=>x(),[]);return p(T,{className:"JsonSchemaFormContainer",sx:{".JsonSchemaForm .LabelContainer":{display:"none",visibility:"hidden"}},children:[o(w,{ref:s,schema:V,className:"JsonSchemaForm",noHtml5Validate:!0,uiSchema:{"ui:submitButtonOptions":{norender:!0}},validator:N,formData:t,formContext:{allowRemovingLastItemInArray:!0},onChange:({formData:e})=>i(e),onSubmit:({formData:e})=>f(e),templates:{ArrayFieldDescriptionTemplate:F,ArrayFieldItemTemplate:I,ArrayFieldTemplate:O,ArrayFieldTitleTemplate:P,ButtonTemplates:J,ErrorListTemplate:q},transformErrors:E,widgets:{TextWidget:M,DateTimeWidget:R,SelectWidget:D,CheckboxWidget:j}}),o(y,{onClick:()=>r(!0),children:"Paste new values"}),p(W,{sx:{mt:2},in:u,children:[o(L,{multiline:!0,InputProps:{inputProps:{"aria-label":"CSV or TSV to Append"}},rows:5,placeholder:"Place comma or tab delimited values here",value:m,onChange:e=>d(e.target.value)}),p(T,{my:1,display:"flex",justifyContent:"flex-end",children:[o(y,{onClick:()=>r(!1),children:"Cancel"}),o(y,{onClick:()=>{v()},children:"Add"})]}),c&&c.length>0&&p(H,{severity:"error",sx:{my:2},children:[o(K,{children:"Parsing errors encountered:"}),o("ul",{children:c.map((e,_)=>p(U,{component:"li",lineHeight:1.5,variant:"smallText1",children:[e.row?`At ${e.row}: `:"",e.message]},_))})]})]})]})}try{h.displayName="JSONArrayEditor",h.__docgenInfo={description:"",displayName:"JSONArrayEditor",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: T[]) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(formData: T[]) => void"}},formRef:{defaultValue:null,description:"",name:"formRef",required:!1,type:{name:"Ref<Form<T, RJSFSchema, GenericObjectType>>"}}}}}catch{}function C(n){const{isShowingModal:t,onConfirm:i,onCancel:f,dialogTitle:l="Edit Values",value:s,...u}=n,r=a.useRef(null),[m,d]=a.useState(s??[]);return a.useEffect(()=>{s&&d(s)},[s]),o(b,{open:t,title:l,confirmButtonText:"OK",onCancel:f,maxWidth:"md",content:o(h,{formRef:r,value:m,onChange:c=>d(c),onSubmit:i,...u}),onConfirm:()=>{r.current.formElement.current.requestSubmit()}})}try{C.displayName="JSONArrayEditorModal",C.__docgenInfo={description:"",displayName:"JSONArrayEditorModal",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},dialogTitle:{defaultValue:null,description:"",name:"dialogTitle",required:!1,type:{name:"ReactNode"}},isShowingModal:{defaultValue:null,description:"",name:"isShowingModal",required:!0,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(value: T[]) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}}}catch{}export{C as J};
//# sourceMappingURL=JSONArrayEditorModal-350b83cd.js.map