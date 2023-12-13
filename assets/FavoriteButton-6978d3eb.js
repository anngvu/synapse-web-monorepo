import{j as t}from"./jsx-runtime-095bf462.js";import{I as v}from"./IconSvg-e494d1b3.js";import{u as f}from"./SynapseClient-ce341217.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-caa14b37.js";import"./index-8db94870.js";import{u as g,a as h,b as y}from"./useFavorites-788f147e.js";import{C as F}from"./ConditionalWrapper-51b8d1ed.js";import{S as I}from"./Skeleton-fabf6a47.js";import{T as x}from"./Tooltip-f72372f7.js";import{I as _}from"./IconButton-2a435ef1.js";function s(r){const{entityId:e}=r,{accessToken:d}=f(),n=!!d,{isFavorite:o,isLoading:a}=g(e),{mutate:p,isLoading:m}=h(),{mutate:c,isLoading:l}=y(),u=a||m||l||!n;let i="Add to Favorites";return n?o&&(i="Remove from Favorites"):i="Sign in to add this to your favorites",t(F,{condition:a,wrapper:I,children:t(x,{title:i,placement:"top",children:t("span",{children:t(_,{size:"small",disabled:u,onClick:()=>{o?c(e):p(e)},sx:{padding:"2px"},children:t(v,{icon:o?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{s.displayName="FavoriteButton",s.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
added to/removed from their favorites`,displayName:"FavoriteButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{s as F};
//# sourceMappingURL=FavoriteButton-6978d3eb.js.map