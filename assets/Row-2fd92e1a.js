import{_ as R}from"./extends-98964cd2.js";import{_ as P}from"./objectWithoutPropertiesLoose-4f48578a.js";import{u as w,c as E}from"./Button-5637ed55.js";import{R as i}from"./index-8db94870.js";var N=["bsPrefix","className","noGutters","as"],G=["xl","lg","md","sm","xs"],h={noGutters:!1},t=i.forwardRef(function(s,p){var u=s.bsPrefix,m=s.className,n=s.noGutters,l=s.as,d=l===void 0?"div":l,r=P(s,N),c=w(u,"row"),v=c+"-cols",f=[];return G.forEach(function(e){var a=r[e];delete r[e];var o;a!=null&&typeof a=="object"?o=a.cols:o=a;var x=e!=="xs"?"-"+e:"";o!=null&&f.push(""+v+x+"-"+o)}),i.createElement(d,R({ref:p},r,{className:E.apply(void 0,[m,c,n&&"no-gutters"].concat(f))}))});t.displayName="Row";t.defaultProps=h;const j=t;export{j as R};
//# sourceMappingURL=Row-2fd92e1a.js.map