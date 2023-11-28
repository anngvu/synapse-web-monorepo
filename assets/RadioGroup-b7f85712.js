import{j as n,a as i}from"./jsx-runtime-095bf462.js";import{r as o}from"./index-8db94870.js";import{u as d}from"./uniqueId-4d05949d.js";function u(e){const a=e.className?`radiogroup ${e.className}`:"radiogroup";return n("div",{className:a,role:"radiogroup",children:e.options.map((r,t)=>n(l,{groupId:e.id,label:r.label,value:r.value,currentValue:e.value,onChange:e.onChange},t.toString()))})}function l(e){const[a]=o.useState(d("src-radio-"));return i("div",{className:"radio",onClick:()=>e.onChange(e.value),children:[n("input",{id:a,type:"radio",onChange:()=>{},checked:e.currentValue===e.value,value:e.value.toString()}),n("label",{htmlFor:a,style:e.style,children:e.label})]})}try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ label: string; value: T; }[]"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}}}}}catch{}try{l.displayName="RadioOption",l.__docgenInfo={description:"",displayName:"RadioOption",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | boolean"}},currentValue:{defaultValue:null,description:"",name:"currentValue",required:!1,type:{name:"string | number | boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}}}}}catch{}export{u as R,l as a};
//# sourceMappingURL=RadioGroup-b7f85712.js.map