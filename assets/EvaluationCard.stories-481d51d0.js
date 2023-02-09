import{j as t,a as o,F as h}from"./jsx-runtime-670450c2.js";import{r as l}from"./index-f1f749bf.js";import{a4 as D,d1 as I,aA as k,d2 as A}from"./SynapseContext-0510efef.js";import{C as E,a as M}from"./CreatedOnByUserDiv-4ed3615f.js";import{W as T}from"./WarningModal-5c61fbe5.js";import{I as _}from"./IconSvg-1961918c.js";import{R as x}from"./Row-264af41d.js";import{C as v}from"./isArray-a82322d9.js";import{B}from"./Button-7d415009.js";import{D as n}from"./Dropdown-4ab191d6.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-65d0b271.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-860bf3dd.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./styled-692f7acd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-fa5d240c.js";import"./useIsFocusVisible-c754a498.js";import"./SvgIcon-11a58ea3.js";import"./getEndpoint-5374ab4d.js";import"./FullWidthAlert-ca15609f.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3f5fe1df.js";import"./index-4d501b15.js";import"./Typography-641a9a3f.js";import"./IconButton-e44040a1.js";import"./ButtonBase-8f10ace8.js";import"./emotion-react.browser.esm-5ef5dfb7.js";import"./assertThisInitialized-081f9914.js";import"./Link-3a86b878.js";import"./Button-ec3f5b60.js";import"./SynapseConstants-6db32387.js";import"./UserCard-da2ee895.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-887266c2.js";import"./times-165c216b.js";import"./toInteger-1acbf570.js";import"./isSymbol-b6149709.js";import"./Skeleton-43b766b0.js";import"./ToastMessage-f34af748.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./Overlay-03d0568a.js";import"./contains-60f9209b.js";import"./usePopperMarginModifiers-4386c40a.js";import"./useWaitForDOMRef-54076dc2.js";import"./Modal-4281cfd8.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./isRequiredForA11y-0a29da5f.js";const f=({evaluation:e,onEdit:c,onModifyAccess:m,onSubmit:d,onDeleteSuccess:p})=>{const{accessToken:r}=D(),[b,a]=l.useState(),[i,w]=l.useState();l.useEffect(()=>{a(void 0),I(e.id,r).then(u=>{w(u)}).catch(u=>a(u))},[e,r]);const S=()=>{a(void 0),A(e.id,r).then(p).catch(a)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(E,{children:o(E.Body,{children:[b&&t(k,{error:b}),i&&o(h,{children:[o(x,{children:[t(v,{children:t("label",{children:"EVALUATION QUEUE"})}),t(v,{children:t(N,{permissions:i,onDelete:S,onEdit:c,onModifyAccess:m})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(M,{userId:e.ownerId,date:new Date(e.createdOn)}),(i==null?void 0:i.canSubmit)&&t(B,{className:"submit-button",type:"primary",onClick:d,children:"Submit"})]})]})})})},N=({permissions:e,onEdit:c,onModifyAccess:m,onDelete:d})=>{const[p,r]=l.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(T,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:p,confirmButtonText:"Delete",onConfirm:()=>{d(),r(!1)},onConfirmCallbackArgs:[],onCancel:()=>{r(!1)},confirmButtonVariant:"danger"}),o(n,{className:"float-right",children:[t(n.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(_,{icon:"verticalEllipsis"})}),o(n.Menu,{alignRight:!0,children:[e.canEdit&&t(n.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(n.Item,{role:"menuitem",onClick:m,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(n.Divider,{}),t(n.Item,{role:"menuitem",onClick:()=>r(!0),children:"Delete"})," "]})]})]})]}):null};try{f.displayName="EvaluationCard",f.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}}}catch{}const We={title:"Synapse/Challenge/EvaluationCard",component:f},s={args:{evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}}};var g,y,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    evaluation: {
      id: '9614690',
      etag: '6f8aa977-527e-4b2f-9d87-beab2db99503',
      name: 'Sample Evaluation Queue',
      description: 'This is a sample Evaluation Queue',
      ownerId: '3345868',
      createdOn: '2021-01-05T00:41:11.670Z',
      contentSource: 'syn23679309',
      submissionInstructionsMessage: 'Do a barrel roll',
      submissionReceiptMessage: 'We received your submission'
    }
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const qe=["Card"];export{s as Card,qe as __namedExportsOrder,We as default};
//# sourceMappingURL=EvaluationCard.stories-481d51d0.js.map