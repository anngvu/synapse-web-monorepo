var p=Object.defineProperty;var c=(i,n,e)=>n in i?p(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e;var t=(i,n,e)=>(c(i,typeof n!="symbol"?n+"":n,e),e);import{j as s,F as h}from"./jsx-runtime-095bf462.js";import{R as d}from"./index-8db94870.js";import{I as w}from"./react-intersection-observer.modern-64b519d2.js";class o extends d.Component{constructor(e){super(e);t(this,"getObserverChildren",e=>{const{renderInView:r,renderOutOfView:a}=this.props;return(e.inView||this.state.hasBeenInView)&&r?r():!e.inView&&a?a():null});t(this,"onVisibilityChange",e=>{e?(this.setState({hasBeenInView:!0}),this.props.onEnterView&&this.props.onEnterView()):this.props.onLeaveView&&this.props.onLeaveView()});this.state={hasBeenInView:!1}}render(){const{rootMargin:e,tag:r}=this.props;return s(w,{as:r||"div",rootMargin:e,onChange:this.onVisibilityChange,children:this.getObserverChildren})}}try{o.displayName="VisibilityObserver",o.__docgenInfo={description:"VisibilityObserver uses the IntersectionObserver API to allow conditional child rendering and callbacks based\non viewport visibility. It will render the `renderOutOfView` prop until it is scrolled into view, then will\nalways render the `renderInView` prop instead. Callbacks will always be triggered on visibility changes.",displayName:"VisibilityObserver",props:{onEnterView:{defaultValue:null,description:"A callback which will be triggered when the component is scrolled into view.",name:"onEnterView",required:!1,type:{name:"(() => void)"}},onLeaveView:{defaultValue:null,description:"A callback which will be triggered when the component is scrolled out of view.",name:"onLeaveView",required:!1,type:{name:"(() => void)"}},renderInView:{defaultValue:null,description:`Render prop to return child content when the component is visible in the viewport. Once the component
has been in view it will always use this render prop, even when scrolled back out of view.`,name:"renderInView",required:!1,type:{name:"(() => ReactNode)"}},renderOutOfView:{defaultValue:null,description:"Render prop to return child content before the component becomes visible in the viewport.",name:"renderOutOfView",required:!1,type:{name:"(() => ReactNode)"}},tag:{defaultValue:{value:"'div'"},description:"Wrapper element tag name.",name:"tag",required:!1,type:{name:"string"}},rootMargin:{defaultValue:null,description:`A CSS margin string which pushes the intersection boundary further in or out of the viewport.
A positive value will expand the viewport threshold so your component is considered "in view" while it's
still offscreen, for example you could set thresholdOffset="200px" you want an image to start loading before
it scrolls into view. A negative value will move the boundary into the viewport, triggering "in view" after
it's already becoming visible.
"200px", "200px 0 50px 0", "-50px" are all valid values.`,name:"rootMargin",required:!1,type:{name:"string"}},className:{defaultValue:null,description:'One or more class names to be added to the root element of this component, i.e.\n`"class-one class-two"`.',name:"className",required:!1,type:{name:"string"}}}}}catch{}class l extends d.Component{constructor(){super(...arguments);t(this,"getChildren",()=>s(h,{children:this.props.children}))}render(){return s(o,{renderInView:this.getChildren})}}try{l.displayName="RenderIfInView",l.__docgenInfo={description:"",displayName:"RenderIfInView",props:{}}}catch{}export{l as R};
//# sourceMappingURL=RenderIfInView-72581fed.js.map