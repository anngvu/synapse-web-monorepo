import{_ as P}from"./extends-98964cd2.js";import{_ as N}from"./objectWithoutPropertiesLoose-4f48578a.js";import{u as $,c as y}from"./Button-5637ed55.js";import{R as a,r as I}from"./index-8db94870.js";import{b as h,c as U,a as le,F as oe}from"./FormLabel-7b55e02a.js";import{F as re}from"./FormGroup-a255fd2e.js";import{c as ne}from"./createWithBsPrefix-0fdadc7a.js";var de=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],X=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.className,l=e.type,i=l===void 0?"checkbox":l,c=e.isValid,m=c===void 0?!1:c,n=e.isInvalid,u=n===void 0?!1:n,f=e.isStatic,x=e.as,k=x===void 0?"input":x,w=N(e,de),p=I.useContext(h),C=p.controlId,v=p.custom,V=v?[d,"custom-control-input"]:[t,"form-check-input"],L=V[0],F=V[1];return t=$(L,F),a.createElement(k,P({},w,{ref:o,type:i,id:s||C,className:y(r,t,m&&"is-valid",u&&"is-invalid",f&&"position-static")}))});X.displayName="FormCheckInput";const Y=X;var ce=["bsPrefix","bsCustomPrefix","className","htmlFor"],Z=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.bsCustomPrefix,d=e.className,r=e.htmlFor,l=N(e,ce),i=I.useContext(h),c=i.controlId,m=i.custom,n=m?[t,"custom-control-label"]:[s,"form-check-label"],u=n[0],f=n[1];return s=$(u,f),a.createElement("label",P({},l,{ref:o,htmlFor:r||c,className:y(d,s)}))});Z.displayName="FormCheckLabel";const _=Z;var me=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],W=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.inline,l=r===void 0?!1:r,i=e.disabled,c=i===void 0?!1:i,m=e.isValid,n=m===void 0?!1:m,u=e.isInvalid,f=u===void 0?!1:u,x=e.feedbackTooltip,k=x===void 0?!1:x,w=e.feedback,p=e.className,C=e.style,v=e.title,V=v===void 0?"":v,L=e.type,F=L===void 0?"checkbox":L,R=e.label,g=e.children,D=e.custom,S=e.as,A=S===void 0?"input":S,H=N(e,me),E=F==="switch"?!0:D,B=E?[d,"custom-control"]:[t,"form-check"],J=B[0],G=B[1];t=$(J,G);var K=I.useContext(h),T=K.controlId,M=I.useMemo(function(){return{controlId:s||T,custom:E}},[T,E,s]),Q=E||R!=null&&R!==!1&&!g,ie=a.createElement(Y,P({},H,{type:F==="switch"?"checkbox":F,ref:o,isValid:n,isInvalid:f,isStatic:!Q,disabled:c,as:A}));return a.createElement(h.Provider,{value:M},a.createElement("div",{style:C,className:y(p,t,E&&"custom-"+F,l&&t+"-inline")},g||a.createElement(a.Fragment,null,ie,Q&&a.createElement(_,{title:V},R),(n||f)&&a.createElement(U,{type:n?"valid":"invalid",tooltip:k},w))))});W.displayName="FormCheck";W.Input=Y;W.Label=_;const j=W;var ue=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],ee=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.className,l=e.isValid,i=e.isInvalid,c=e.lang,m=e.as,n=m===void 0?"input":m,u=N(e,ue),f=I.useContext(h),x=f.controlId,k=f.custom,w="file",p=k?[d,"custom-file-input"]:[t,"form-control-file"],C=p[0],v=p[1];return t=$(C,v),a.createElement(n,P({},u,{ref:o,id:s||x,type:w,lang:c,className:y(r,t,l&&"is-valid",i&&"is-invalid")}))});ee.displayName="FormFileInput";const ae=ee;var fe=["bsPrefix","bsCustomPrefix","className","htmlFor"],se=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.bsCustomPrefix,d=e.className,r=e.htmlFor,l=N(e,fe),i=I.useContext(h),c=i.controlId,m=i.custom,n=m?[t,"custom-file-label"]:[s,"form-file-label"],u=n[0],f=n[1];return s=$(u,f),a.createElement("label",P({},l,{ref:o,htmlFor:r||c,className:y(d,s),"data-browse":l["data-browse"]}))});se.displayName="FormFileLabel";const O=se;var pe=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],q=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.disabled,l=r===void 0?!1:r,i=e.isValid,c=i===void 0?!1:i,m=e.isInvalid,n=m===void 0?!1:m,u=e.feedbackTooltip,f=u===void 0?!1:u,x=e.feedback,k=e.className,w=e.style,p=e.label,C=e.children,v=e.custom,V=e.lang,L=e["data-browse"],F=e.as,R=F===void 0?"div":F,g=e.inputAs,D=g===void 0?"input":g,S=N(e,pe),A=v?[d,"custom"]:[t,"form-file"],H=A[0],E=A[1];t=$(H,E);var B="file",J=I.useContext(h),G=J.controlId,K=I.useMemo(function(){return{controlId:s||G,custom:v}},[G,v,s]),T=p!=null&&p!==!1&&!C,M=a.createElement(ae,P({},S,{ref:o,isValid:c,isInvalid:n,disabled:l,as:D,lang:V}));return a.createElement(h.Provider,{value:K},a.createElement(R,{style:w,className:y(k,t,v&&"custom-"+B)},C||a.createElement(a.Fragment,null,v?a.createElement(a.Fragment,null,M,T&&a.createElement(O,{"data-browse":L},p)):a.createElement(a.Fragment,null,T&&a.createElement(O,null,p),M),(c||n)&&a.createElement(U,{type:c?"valid":"invalid",tooltip:f},x))))});q.displayName="FormFile";q.Input=ae;q.Label=O;const ve=q;var be=["bsPrefix","className","as","muted"],te=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.className,d=e.as,r=d===void 0?"small":d,l=e.muted,i=N(e,be);return s=$(s,"form-text"),a.createElement(r,P({},i,{ref:o,className:y(t,s,l&&"text-muted")}))});te.displayName="FormText";const xe=te;var z=a.forwardRef(function(e,o){return a.createElement(j,P({},e,{ref:o,type:"switch"}))});z.displayName="Switch";z.Input=j.Input;z.Label=j.Label;const Fe=z;var Pe=["bsPrefix","inline","className","validated","as"],Ce=ne("form-row"),Ie={inline:!1},b=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.inline,d=e.className,r=e.validated,l=e.as,i=l===void 0?"form":l,c=N(e,Pe);return s=$(s,"form"),a.createElement(i,P({},c,{ref:o,className:y(d,r&&"was-validated",t&&s+"-inline")}))});b.displayName="Form";b.defaultProps=Ie;b.Row=Ce;b.Group=re;b.Control=le;b.Check=j;b.File=ve;b.Switch=Fe;b.Label=oe;b.Text=xe;const Ve=b;export{Ve as F};
//# sourceMappingURL=Form-98a3f736.js.map