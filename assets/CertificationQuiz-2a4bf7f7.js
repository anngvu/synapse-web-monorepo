import{a as o,j as n,F as y}from"./jsx-runtime-095bf462.js";import{r as l,R as E}from"./index-8db94870.js";import{u as Q,s as z,t as w,M as H}from"./SynapseClient-9e187ec0.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-7886af1c.js";import{d as p}from"./ToastMessage-91a3bbbf.js";import{M as B}from"./SynapseTableCell-7e4d8fea.js";import{T as u}from"./Typography-d16533eb.js";import{L}from"./Link-fc5d7a73.js";import{B as x}from"./Button-c45f00b4.js";import{H as v}from"./IconSvg-3b8e6785.js";const C=()=>{const{accessToken:i}=Q(),T=z(),[t,_]=l.useState(),[d,m]=l.useState([]),[r,h]=l.useState(),f=E.useRef(null),I="https://help.synapse.org/docs/Getting-Started.2055471150.html",g=async()=>{try{_(await w.getCertifyQuiz(i))}catch(e){T(e)}};l.useEffect(()=>{g()},[i]);const R=(e,a)=>{const c=[...d.filter(s=>s.questionIndex!==e),{questionIndex:e,answerIndex:[a],concreteType:H}];m(c)},S=()=>{var e;(e=f.current)==null||e.reset(),m([]),h(void 0),g()},k=async()=>{try{if(t&&t.questions.length===d.length){const e={quizId:t.id,questionResponses:d},a=await w.postCertifiedUserTestResponse(i,e);h(a),window.scrollTo(0,0)}else p("Please answer all of the questions and try again.","warning")}catch(e){p(e.reason,"danger")}},b=e=>e?{content:n(y,{children:"More info"}),closePopoverOnClick:!0,onClick:()=>window.open(e,"_blank"),color:"primary"}:void 0;return o("div",{className:"bootstrap-4-backport CertificationQuiz",children:[r&&n("div",{children:o(y,{children:[!r.passed&&n("div",{className:"failBanner",children:"Quiz Failed"}),o(u,{variant:"hintText",children:["Score: ",r.score," / ",t==null?void 0:t.questions.length]}),r.passed?p(`You passed the Synapse Certification Quiz on ${r.passedOn}`,"success"):o(u,{variant:"body1",children:["Please review the items shown in red below, and"," ",n(L,{href:"#",onClick:e=>{e.preventDefault(),S()},children:"try again"}),"."]})]})}),o("div",{className:"CertificationQuiz__container",children:[o(x,{onClick:()=>window.open(I,"_blank"),className:"help-button",color:"secondary",variant:"contained",children:[n(v,{className:"HelpButton",style:{marginRight:"4px"}}),"Help"]}),t?n("div",{dangerouslySetInnerHTML:{__html:t.header}}):"",n("form",{ref:f,onSubmit:e=>e.preventDefault(),children:n("ol",{children:t==null?void 0:t.questions.map(e=>{var a,c;return o("li",{role:e.exclusive?"radiogroup":void 0,children:[n("div",{dangerouslySetInnerHTML:{__html:e.prompt},className:r&&((c=(a=r.corrections)==null?void 0:a.find(s=>s.question.questionIndex===e.questionIndex))!=null&&c.isCorrect?"":"incorrectQuestion")}),e.answers.map(s=>o("div",{children:[n("input",{id:`${e.questionIndex}-${s.answerIndex}`,name:`${e.questionIndex}`,type:e.exclusive?"radio":"checkbox",value:s.answerIndex,onClick:N=>R(e.questionIndex,Number(N.currentTarget.value)),disabled:!!r}),n("label",{style:{fontWeight:400},htmlFor:`${e.questionIndex}-${s.answerIndex}`,children:s.prompt})]},`${e.questionIndex}-${s.answerIndex}`)),n(B,{contentProps:{markdown:e.helpText},placement:"right",actionButton:b(e.docLink),showCloseButton:!0,children:o(u,{variant:"hintText",color:"primary",children:[n(v,{className:"HelpButton",style:{marginRight:"4px"}}),"Need help answering this question?"]})})]},e.questionIndex)})})}),!r&&n(x,{className:"help-button",color:"primary",variant:"contained",size:"large",onClick:()=>{k()},children:"Submit"})]})]})};try{C.displayName="CertificationQuiz",C.__docgenInfo={description:"",displayName:"CertificationQuiz",props:{}}}catch{}export{C};
//# sourceMappingURL=CertificationQuiz-2a4bf7f7.js.map