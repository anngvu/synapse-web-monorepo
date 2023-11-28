import{j as r,a as t}from"./jsx-runtime-095bf462.js";import{T as y,t as l}from"./Tooltip-fa7621de.js";import{s as N}from"./styled-81e3612a.js";import{I as b}from"./IconSvg-6a122bd5.js";import"./index-368e9af1.js";import{S as O}from"./SkeletonTable-c29b0ab8.js";import{a as x}from"./UserBadge-28df0982.js";import{S}from"./ShowMore-7427d245.js";import{L as w}from"./Link-bf67348e.js";import{S as c}from"./Skeleton-fabf6a47.js";const p=N(({className:e,...a})=>r(y,{...a,classes:{popper:e}}))(({theme:e})=>({[`& .${l.tooltip}`]:{backgroundColor:e.palette.common.white,color:e.palette.grey[1e3],boxShadow:e.shadows[1],border:`1px solid ${e.palette.grey[500]}`},[`& .${l.arrow}`]:{"&:before":{boxShadow:e.shadows[1],border:`1px solid ${e.palette.grey[500]}`},color:e.palette.common.white}}));try{p.displayName="LightTooltip",p.__docgenInfo={description:"",displayName:"LightTooltip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const m=({data:e,schema:a,includePortalCardClass:u=!0})=>{const v=e[a.observationSubmitterName],o=e[a.synapseId],i=e[a.observationTime],C=e[a.observationTimeUnits],s=e[a.observationText],n=e[a.observationType],g=JSON.parse(n??""),d=e[a.doi];return t("div",{className:`ObservationCard ${u?"SRC-portalCard":""}`,children:[t("div",{className:"ObservationCard__submitter",children:[!o&&r("div",{children:v}),o&&r(x,{userId:o})]}),i&&t("div",{className:"ObservationCard__time",children:[r(b,{icon:"time"}),r("span",{children:`${i} ${C}`})]}),s&&r("div",{className:"ObservationCard__text",children:r(S,{summary:s})}),d&&r("div",{className:"ObservationCard__doi",children:r(w,{href:d,target:"_blank",children:"Reference"})}),r("div",{className:"ObservationCard__tags",children:n&&g.map((f,h)=>r("span",{className:"SRC-tag",style:{marginRight:"5px"},children:f},h))})]})},_=()=>t("div",{className:"SRC-portalCard ObservationCard",children:[r("div",{className:"ObservationCard__submitter",children:r("span",{children:r(c,{width:"100px"})})}),r("div",{className:"ObservationCard__time",children:r(b,{icon:"time"})}),r("div",{className:"ObservationCard__text",children:r(O,{numCols:1,numRows:4})}),r("div",{className:"ObservationCard__tags",children:r(c,{width:"80px"})})]});try{m.displayName="ObservationCard",m.__docgenInfo={description:`Specialized Observation Card, initially implemented for the NF portal.
Expects the following columns: submitterName, submitterUserId, time, timeUnits, text, and tag.`,displayName:"ObservationCard",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"ObservationCardSchema"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"(string | null)[]"}},includePortalCardClass:{defaultValue:{value:"true"},description:"",name:"includePortalCardClass",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="LoadingObservationCard",_.__docgenInfo={description:"",displayName:"LoadingObservationCard",props:{}}}catch{}export{p as L,m as O,_ as a};
//# sourceMappingURL=ObservationCard-543fa107.js.map