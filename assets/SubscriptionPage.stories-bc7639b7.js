import{j as i,F as h,a as f}from"./jsx-runtime-095bf462.js";import{r as l}from"./index-8db94870.js";import{u as O,b as E}from"./useSubscription-364025fb.js";import{J as n,bS as F}from"./SynapseClient-a4e4b778.js";import{T as P}from"./Topic-9ce5cdd4.js";import{b as R}from"./useForum-6a5a698f.js";import{u as v}from"./useEntity-07c5d97b.js";import"./OrientationBanner-f49a763f.js";import{g as j,B as x,M}from"./getEndpoint-ac94413e.js";import{u as C}from"./useThread-8907b6c5.js";import{D as k}from"./DropdownSelect-3c23ce7f.js";import{B as A}from"./Box-402daddb.js";import{T as B,a as T}from"./Tabs-e147e809.js";import{S as $}from"./Stack-eddb74b2.js";import{B as H}from"./Button-79de9a0b.js";import{g as w}from"./handlers-0baffa2d.js";import"./_commonjsHelpers-042e6b4d.js";import"./useMutation-0e9148bd.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./useInfiniteQuery-9947b096.js";import"./SynapseConstants-b4e8f39a.js";import"./index-8ce4a492.js";import"./FullWidthAlert-81b4d296.js";import"./AlertTitle-78f79fc0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-55b76ab0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./createSvgIcon-c95ac3df.js";import"./Paper-18b94b55.js";import"./IconButton-693072d1.js";import"./ButtonBase-808eaa85.js";import"./emotion-react.browser.esm-6281246a.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-2ef1cd4b.js";import"./extendSxProp-a7783ced.js";import"./useTheme-c3897ed6.js";import"./Grow-aadb01f1.js";import"./isHostComponent-fa76b8d9.js";import"./utils-fc362ac6.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-8e07f653.js";import"./Link-f298db32.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-8c851187.js";import"./inputBaseClasses-529452bb.js";import"./Fade-fa965c6f.js";import"./IconSvg-ef9afca2.js";import"./ErrorOutlined-77fe1f54.js";import"./InfoOutlined-c40241a8.js";import"./ConditionalWrapper-51b8d1ed.js";import"./Skeleton-7e59f3cf.js";import"./EntityTypeUtils-27ede0a8.js";import"./IsType-3ac804ed.js";import"./pick-560fd152.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseClone-aa39fa36.js";import"./_Uint8Array-c4b717ff.js";import"./_MapCache-5d9b55c6.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./hasIn-612d816a.js";import"./_baseSlice-cf92e063.js";import"./MenuList-7e44d0fb.js";import"./index-953d39fd.js";import"./getScrollbarSize-ac846fe6.js";import"./MenuItem-e5772fab.js";import"./dividerClasses-112c5af6.js";import"./ownerWindow-2c76219e.js";import"./index-7479d659.js";import"./util-441245ad.js";import"./entityHandlers-c7a24b1f.js";import"./mock_user_profile-00be6100.js";import"./mock_file_handle-90919b56.js";import"./times-5bba76cd.js";import"./mockFileEntity-463b26bf.js";import"./userProfileHandlers-69aa3a66.js";import"./mockSchema-8982d1d7.js";import"./accessRequirementHandlers-445b6312.js";import"./MockSubmission-ec8679cb.js";import"./mockWiki-e113b5b2.js";import"./fileHandlers-f8bb0667.js";import"./MockResearchProject-7d34cf6a.js";import"./researchProjectHandlers-65444cfc.js";function b(o){const{subscription:r}=o,{data:t}=R(r.objectId),{data:s}=v(t==null?void 0:t.projectId,void 0,{enabled:!!t}),{isSubscribed:m,isLoading:a,toggleSubscribed:p}=O(r.objectId,n.FORUM);let c;return t&&(c=`${j(x.PORTAL_ENDPOINT)}#!Synapse:${t.projectId}/discussion`),i(P,{isLoading:a,isSubscribed:m,icon:"dashboard",name:s==null?void 0:s.name,nameHref:c,onToggleSubscribe:p})}try{b.displayName="ForumTopic",b.__docgenInfo={description:"",displayName:"ForumTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function G(o){const{subscription:r}=o,{threadData:t}=C(r.objectId),{isSubscribed:s,isLoading:m,toggleSubscribed:a}=O(r.objectId,n.THREAD);let p;return t&&(p=`${j(x.PORTAL_ENDPOINT)}#!Synapse:${t.projectId}/discussion/threadId=${r.objectId}`),i(P,{isLoading:m,isSubscribed:s,icon:"discussion",name:t==null?void 0:t.title,nameHref:p,onToggleSubscribe:a})}try{ThreadTopic.displayName="ThreadTopic",ThreadTopic.__docgenInfo={description:"",displayName:"ThreadTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function g(o){const{subscription:r}=o;switch(r.objectType){case n.FORUM:return i(b,{subscription:r});case n.THREAD:return i(G,{subscription:r});default:return console.warn(`Subscription type ${o.subscription.objectType} not supported in UI`),i(h,{})}}try{g.displayName="SubscriptionItem",g.__docgenInfo={description:`Simple discriminator component that maps a {@link Subscription} rendered on the {@link SubscriptionPage } to
a {@link Topic } component`,displayName:"SubscriptionItem",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}const d=[{value:"ASC",label:"Date Posted"},{value:"DESC",label:"Most Recent"}];function L(){const[o,r]=l.useState(n.FORUM),[t,s]=l.useState(d[0]),m=l.useId(),a={objectType:o,sortBy:F.CREATED_ON,sortDirection:t.value},{data:p,hasNextPage:c,isFetchingNextPage:S,fetchNextPage:N}=E(a,{staleTime:1/0},[`subscriptionPageFetch_${m}`,a]);return f(h,{children:[i(A,{sx:{float:"right"},children:i(k,{variant:"outlined",options:d.map(e=>e.label),selectedIndex:d.findIndex(e=>e.value===t.value),setSelectedIndex:e=>s(d[e])})}),f(B,{sx:{mb:3},value:o,onChange:(e,D)=>{e.stopPropagation(),r(D)},textColor:"secondary",indicatorColor:"secondary",children:[i(T,{value:n.FORUM,label:"Project Forums"}),i(T,{value:n.THREAD,label:"Threads"})]}),i($,{gap:.5,children:p==null?void 0:p.pages.map(e=>i(g,{subscription:e},e.subscriptionId))}),c&&i(H,{variant:"contained",onClick:()=>{N()},disabled:S,sx:{mt:6},children:S?"Loading...":"Load More"})]})}const xo={title:"Synapse/Following/SubscriptionPage",component:L,parameters:{stack:"mock"}},u={name:"SubscriptionPage",args:{},parameters:{msw:{handlers:{...w(M)}}}};var _,y,I;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'SubscriptionPage',
  args: {},
  parameters: {
    msw: {
      handlers: {
        ...getHandlers(MOCK_REPO_ORIGIN)
      }
    }
  }
}`,...(I=(y=u.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const No=["Demo"];export{u as Demo,No as __namedExportsOrder,xo as default};
//# sourceMappingURL=SubscriptionPage.stories-bc7639b7.js.map