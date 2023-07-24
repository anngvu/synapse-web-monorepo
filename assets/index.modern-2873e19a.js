import{g as be}from"./_commonjsHelpers-042e6b4d.js";import{h as ve,j as Qe,k as _e,c as G,l as me,n as Je,o as en,e as nn,p as Ae,q as tn,b as Ie,s as rn,r as an,t as on,u as sn,v as Z,a as ke,w as xe,x as Te,y as cn,z as ln,A as un,i as fn,B as gn,C as Se,D as pn,E as yn,F as Oe,G as dn,H as hn,I as $n}from"./mapValues-b26bbf14.js";import{r as M}from"./index-8db94870.js";function bn(e,t){for(var r=-1,o=e==null?0:e.length;++r<o&&t(e[r],r,e)!==!1;);return e}var vn=bn,_n=ve,mn=Qe,An=Object.prototype,In=An.hasOwnProperty;function kn(e,t,r){var o=e[t];(!(In.call(e,t)&&mn(o,r))||r===void 0&&!(t in e))&&_n(e,t,r)}var z=kn,xn=z,Tn=ve;function Sn(e,t,r,o){var l=!r;r||(r={});for(var u=-1,c=t.length;++u<c;){var i=t[u],f=o?o(r[i],e[i],i,r,e):void 0;f===void 0&&(f=e[i]),l?Tn(r,i,f):xn(r,i,f)}return r}var N=Sn,On=N,wn=_e;function jn(e,t){return e&&On(t,wn(t),e)}var Cn=jn;function En(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Ln=En,Mn=G,Hn=me,Bn=Ln,Pn=Object.prototype,Gn=Pn.hasOwnProperty;function Nn(e){if(!Mn(e))return Bn(e);var t=Hn(e),r=[];for(var o in e)o=="constructor"&&(t||!Gn.call(e,o))||r.push(o);return r}var Fn=Nn,Un=Je,Rn=Fn,Dn=en;function Kn(e){return Dn(e)?Un(e,!0):Rn(e)}var V=Kn,Wn=N,qn=V;function Xn(e,t){return e&&Wn(t,qn(t),e)}var Zn=Xn,P={exports:{}};P.exports;(function(e,t){var r=nn,o=t&&!t.nodeType&&t,l=o&&!0&&e&&!e.nodeType&&e,u=l&&l.exports===o,c=u?r.Buffer:void 0,i=c?c.allocUnsafe:void 0;function f(d,v){if(v)return d.slice();var _=d.length,x=i?i(_):new d.constructor(_);return d.copy(x),x}e.exports=f})(P,P.exports);var zn=P.exports;function Vn(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}var Yn=Vn,Qn=N,Jn=Ae;function et(e,t){return Qn(e,Jn(e),t)}var nt=et,tt=tn,rt=Ie,at=Ae,ot=rn,st=Object.getOwnPropertySymbols,it=st?function(e){for(var t=[];e;)tt(t,at(e)),e=rt(e);return t}:ot,we=it,ct=N,lt=we;function ut(e,t){return ct(e,lt(e),t)}var ft=ut,gt=an,pt=we,yt=V;function dt(e){return gt(e,yt,pt)}var ht=dt,$t=Object.prototype,bt=$t.hasOwnProperty;function vt(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&bt.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var _t=vt,ne=on;function mt(e){var t=new e.constructor(e.byteLength);return new ne(t).set(new ne(e)),t}var Y=mt,At=Y;function It(e,t){var r=t?At(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var kt=It,xt=/\w*$/;function Tt(e){var t=new e.constructor(e.source,xt.exec(e));return t.lastIndex=e.lastIndex,t}var St=Tt,te=sn,re=te?te.prototype:void 0,ae=re?re.valueOf:void 0;function Ot(e){return ae?Object(ae.call(e)):{}}var wt=Ot,jt=Y;function Ct(e,t){var r=t?jt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Et=Ct,Lt=Y,Mt=kt,Ht=St,Bt=wt,Pt=Et,Gt="[object Boolean]",Nt="[object Date]",Ft="[object Map]",Ut="[object Number]",Rt="[object RegExp]",Dt="[object Set]",Kt="[object String]",Wt="[object Symbol]",qt="[object ArrayBuffer]",Xt="[object DataView]",Zt="[object Float32Array]",zt="[object Float64Array]",Vt="[object Int8Array]",Yt="[object Int16Array]",Qt="[object Int32Array]",Jt="[object Uint8Array]",er="[object Uint8ClampedArray]",nr="[object Uint16Array]",tr="[object Uint32Array]";function rr(e,t,r){var o=e.constructor;switch(t){case qt:return Lt(e);case Gt:case Nt:return new o(+e);case Xt:return Mt(e,r);case Zt:case zt:case Vt:case Yt:case Qt:case Jt:case er:case nr:case tr:return Pt(e,r);case Ft:return new o;case Ut:case Kt:return new o(e);case Rt:return Ht(e);case Dt:return new o;case Wt:return Bt(e)}}var ar=rr,or=G,oe=Object.create,sr=function(){function e(){}return function(t){if(!or(t))return{};if(oe)return oe(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),ir=sr,cr=ir,lr=Ie,ur=me;function fr(e){return typeof e.constructor=="function"&&!ur(e)?cr(lr(e)):{}}var gr=fr,pr=Z,yr=ke,dr="[object Map]";function hr(e){return yr(e)&&pr(e)==dr}var $r=hr,br=$r,vr=Te,se=xe,ie=se&&se.isMap,_r=ie?vr(ie):br,mr=_r,Ar=Z,Ir=ke,kr="[object Set]";function xr(e){return Ir(e)&&Ar(e)==kr}var Tr=xr,Sr=Tr,Or=Te,ce=xe,le=ce&&ce.isSet,wr=le?Or(le):Sr,jr=wr,Cr=cn,Er=vn,Lr=z,Mr=Cn,Hr=Zn,Br=zn,Pr=Yn,Gr=nt,Nr=ft,Fr=un,Ur=ht,Rr=Z,Dr=_t,Kr=ar,Wr=gr,qr=fn,Xr=ln,Zr=mr,zr=G,Vr=jr,Yr=_e,Qr=V,Jr=1,ea=2,na=4,je="[object Arguments]",ta="[object Array]",ra="[object Boolean]",aa="[object Date]",oa="[object Error]",Ce="[object Function]",sa="[object GeneratorFunction]",ia="[object Map]",ca="[object Number]",Ee="[object Object]",la="[object RegExp]",ua="[object Set]",fa="[object String]",ga="[object Symbol]",pa="[object WeakMap]",ya="[object ArrayBuffer]",da="[object DataView]",ha="[object Float32Array]",$a="[object Float64Array]",ba="[object Int8Array]",va="[object Int16Array]",_a="[object Int32Array]",ma="[object Uint8Array]",Aa="[object Uint8ClampedArray]",Ia="[object Uint16Array]",ka="[object Uint32Array]",$={};$[je]=$[ta]=$[ya]=$[da]=$[ra]=$[aa]=$[ha]=$[$a]=$[ba]=$[va]=$[_a]=$[ia]=$[ca]=$[Ee]=$[la]=$[ua]=$[fa]=$[ga]=$[ma]=$[Aa]=$[Ia]=$[ka]=!0;$[oa]=$[Ce]=$[pa]=!1;function H(e,t,r,o,l,u){var c,i=t&Jr,f=t&ea,d=t&na;if(r&&(c=l?r(e,o,l,u):r(e)),c!==void 0)return c;if(!zr(e))return e;var v=qr(e);if(v){if(c=Dr(e),!i)return Pr(e,c)}else{var _=Rr(e),x=_==Ce||_==sa;if(Xr(e))return Br(e,i);if(_==Ee||_==je||x&&!l){if(c=f||x?{}:Wr(e),!i)return f?Nr(e,Hr(c,e)):Gr(e,Mr(c,e))}else{if(!$[_])return l?e:{};c=Kr(e,_,i)}}u||(u=new Cr);var n=u.get(e);if(n)return n;u.set(e,c),Vr(e)?e.forEach(function(g){c.add(H(g,t,r,g,e,u))}):Zr(e)&&e.forEach(function(g,p){c.set(p,H(g,t,r,p,e,u))});var s=d?f?Ur:Fr:f?Qr:Yr,a=v?void 0:s(e);return Er(a||e,function(g,p){a&&(p=g,g=e[p]),Lr(c,p,H(g,t,r,p,e,u))}),c}var xa=H;function Ta(e,t,r,o){for(var l=e.length,u=r+(o?1:-1);o?u--:++u<l;)if(t(e[u],u,e))return u;return-1}var Sa=Ta;function Oa(e){return e!==e}var wa=Oa;function ja(e,t,r){for(var o=r-1,l=e.length;++o<l;)if(e[o]===t)return o;return-1}var Ca=ja,Ea=Sa,La=wa,Ma=Ca;function Ha(e,t,r){return t===t?Ma(e,t,r):Ea(e,La,r)}var Ba=Ha,Pa=Ba;function Ga(e,t){var r=e==null?0:e.length;return!!r&&Pa(e,t,0)>-1}var Na=Ga;function Fa(e,t,r){for(var o=-1,l=e==null?0:e.length;++o<l;)if(r(t,e[o]))return!0;return!1}var Ua=Fa;function Ra(){}var Da=Ra,U=gn,Ka=Da,Wa=Se,qa=1/0,Xa=U&&1/Wa(new U([,-0]))[1]==qa?function(e){return new U(e)}:Ka,Za=Xa,za=pn,Va=Na,Ya=Ua,Qa=yn,Ja=Za,eo=Se,no=200;function to(e,t,r){var o=-1,l=Va,u=e.length,c=!0,i=[],f=i;if(r)c=!1,l=Ya;else if(u>=no){var d=t?null:Ja(e);if(d)return eo(d);c=!1,l=Qa,f=new za}else f=t?[]:i;e:for(;++o<u;){var v=e[o],_=t?t(v):v;if(v=r||v!==0?v:0,c&&_===_){for(var x=f.length;x--;)if(f[x]===_)continue e;t&&f.push(_),i.push(v)}else l(f,_,r)||(f!==i&&f.push(_),i.push(v))}return i}var ro=to,ao=xa,oo=1,so=4;function io(e){return ao(e,oo|so)}var co=io;const ws=be(co);var lo=z,uo=Oe,fo=dn,ue=G,go=hn;function po(e,t,r,o){if(!ue(e))return e;t=uo(t,e);for(var l=-1,u=t.length,c=u-1,i=e;i!=null&&++l<u;){var f=go(t[l]),d=r;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(l!=c){var v=i[f];d=o?o(v,f,i):void 0,d===void 0&&(d=ue(v)?v:fo(t[l+1])?[]:{})}lo(i,f,d),i=i[f]}return e}var yo=po,ho=$n,$o=yo,bo=Oe;function vo(e,t,r){for(var o=-1,l=t.length,u={};++o<l;){var c=t[o],i=ho(e,c);r(i,c)&&$o(u,bo(c,e),i)}return u}var js=vo,_o=ro;function mo(e){return e&&e.length?_o(e):[]}var Ao=mo;const Cs=be(Ao);function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},C.apply(this,arguments)}const Io=["children","options"],fe=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),ge={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},ko=["style","script"],xo=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,To=/mailto:/i,So=/\n{2,}$/,Le=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,Oo=/^ *> ?/gm,wo=/^ {2,}\n/,jo=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Me=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,He=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,Co=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,Eo=/^(?:\n *)*\n/,Lo=/\r\n?/g,Mo=/^\[\^([^\]]+)](:.*)\n/,Ho=/^\[\^([^\]]+)]/,Bo=/\f/g,Po=/^\s*?\[(x|\s)\]/,Be=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Pe=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,q=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,Go=/&([a-zA-Z]+);/g,Ge=/^<!--[\s\S]*?(?:-->)/,No=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,X=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Fo=/^\{.*\}$/,Uo=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Ro=/^<([^ >]+@[^ >]+)>/,Do=/^<([^ >]+:\/[^ >]+)>/,Ko=/-([a-z])?/gi,Ne=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Wo=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,qo=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Xo=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Zo=/(\[|\])/g,zo=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Vo=/\t/g,Yo=/^ *\| */,Qo=/(^ *\||\| *$)/g,Jo=/ *$/,es=/^ *:-+: *$/,ns=/^ *:-+ *$/,ts=/^ *-+: *$/,rs=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,as=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,os=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,ss=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,is=/^\\([^0-9A-Za-z\s])/,cs=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ls=/^\n+/,us=/^([ \t]*)/,fs=/\\([^\\])/g,pe=/ *\n+$/,gs=/(?:^|\n)( *)$/,Q="(?:\\d+\\.)",J="(?:[*+-])";function Fe(e){return"( *)("+(e===1?Q:J)+") +"}const Ue=Fe(1),Re=Fe(2);function De(e){return new RegExp("^"+(e===1?Ue:Re))}const ps=De(1),ys=De(2);function Ke(e){return new RegExp("^"+(e===1?Ue:Re)+"[^\\n]*(?:\\n(?!\\1"+(e===1?Q:J)+" )[^\\n]*)*(\\n|$)","gm")}const We=Ke(1),qe=Ke(2);function Xe(e){const t=e===1?Q:J;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const Ze=Xe(1),ze=Xe(2);function ye(e,t){const r=t===1,o=r?Ze:ze,l=r?We:qe,u=r?ps:ys;return{t(c,i,f){const d=gs.exec(f);return d&&(i.o||!i._&&!i.u)?o.exec(c=d[1]+c):null},i:y.HIGH,l(c,i,f){const d=r?+c[2]:void 0,v=c[0].replace(So,`
`).match(l);let _=!1;return{p:v.map(function(x,n){const s=u.exec(x)[0].length,a=new RegExp("^ {1,"+s+"}","gm"),g=x.replace(a,"").replace(u,""),p=n===v.length-1,b=g.indexOf(`

`)!==-1||p&&_;_=b;const h=f._,k=f.o;let I;f.o=!0,b?(f._=!1,I=g.replace(pe,`

`)):(f._=!0,I=g.replace(pe,""));const T=i(I,f);return f._=h,f.o=k,T}),m:r,g:d}},h:(c,i,f)=>e(c.m?"ol":"ul",{key:f.k,start:c.g},c.p.map(function(d,v){return e("li",{key:v},i(d,f))}))}}const ds=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,hs=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Ve=[Le,Me,He,Be,Pe,Ge,Ne,We,Ze,qe,ze],$s=[...Ve,/^[^\n]+(?:  \n|\n{2,})/,q,X];function bs(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function vs(e){return ts.test(e)?"right":es.test(e)?"center":ns.test(e)?"left":null}function de(e,t,r){const o=r.v;r.v=!0;const l=t(e.trim(),r);r.v=o;let u=[[]];return l.forEach(function(c,i){c.type==="tableSeparator"?i!==0&&i!==l.length-1&&u.push([]):(c.type!=="text"||l[i+1]!=null&&l[i+1].type!=="tableSeparator"||(c.$=c.$.replace(Jo,"")),u[u.length-1].push(c))}),u}function _s(e,t,r){r._=!0;const o=de(e[1],t,r),l=e[2].replace(Qo,"").split("|").map(vs),u=function(c,i,f){return c.trim().split(`
`).map(function(d){return de(d,i,f)})}(e[3],t,r);return r._=!1,{S:l,A:u,L:o,type:"table"}}function he(e,t){return e.S[t]==null?{}:{textAlign:e.S[t]}}function w(e){return function(t,r){return r._?e.exec(t):null}}function j(e){return function(t,r){return r._||r.u?e.exec(t):null}}function S(e){return function(t,r){return r._||r.u?null:e.exec(t)}}function L(e){return function(t){return e.exec(t)}}function ms(e,t,r){if(t._||t.u||r&&!r.endsWith(`
`))return null;let o="";e.split(`
`).every(u=>!Ve.some(c=>c.test(u))&&(o+=u+`
`,u.trim()));const l=o.trimEnd();return l==""?null:[o,l]}function E(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch{return null}return e}function $e(e){return e.replace(fs,"$1")}function B(e,t,r){const o=r._||!1,l=r.u||!1;r._=!0,r.u=!0;const u=e(t,r);return r._=o,r.u=l,u}function As(e,t,r){const o=r._||!1,l=r.u||!1;r._=!1,r.u=!0;const u=e(t,r);return r._=o,r.u=l,u}function Is(e,t,r){return r._=!1,e(t+`

`,r)}const R=(e,t,r)=>({$:B(t,e[1],r)});function D(){return{}}function K(){return null}function ks(...e){return e.filter(Boolean).join(" ")}function W(e,t,r){let o=e;const l=t.split(".");for(;l.length&&(o=o[l[0]],o!==void 0);)l.shift();return o||r}var y;function xs(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||bs,t.namedCodesToUnicode=t.namedCodesToUnicode?C({},ge,t.namedCodesToUnicode):ge;const r=t.createElement||M.createElement;function o(n,s,...a){const g=W(t.overrides,`${n}.props`,{});return r(function(p,b){const h=W(b,p);return h?typeof h=="function"||typeof h=="object"&&"render"in h?h:W(b,`${p}.component`,p):p}(n,t.overrides),C({},s,g,{className:ks(s==null?void 0:s.className,g.className)||void 0}),...a)}function l(n){let s=!1;t.forceInline?s=!0:t.forceBlock||(s=zo.test(n)===!1);const a=v(d(s?n:`${n.trimEnd().replace(ls,"")}

`,{_:s}));for(;typeof a[a.length-1]=="string"&&!a[a.length-1].trim();)a.pop();if(t.wrapper===null)return a;const g=t.wrapper||(s?"span":"div");let p;if(a.length>1||t.forceWrapper)p=a;else{if(a.length===1)return p=a[0],typeof p=="string"?o("span",{key:"outer"},p):p;p=null}return M.createElement(g,{key:"outer"},p)}function u(n){const s=n.match(xo);return s?s.reduce(function(a,g,p){const b=g.indexOf("=");if(b!==-1){const h=function(m){return m.indexOf("-")!==-1&&m.match(No)===null&&(m=m.replace(Ko,function(A,O){return O.toUpperCase()})),m}(g.slice(0,b)).trim(),k=function(m){const A=m[0];return(A==='"'||A==="'")&&m.length>=2&&m[m.length-1]===A?m.slice(1,-1):m}(g.slice(b+1).trim()),I=fe[h]||h,T=a[I]=function(m,A){return m==="style"?A.split(/;\s?/).reduce(function(O,F){const ee=F.slice(0,F.indexOf(":"));return O[ee.replace(/(-[a-z])/g,Ye=>Ye[1].toUpperCase())]=F.slice(ee.length+1).trim(),O},{}):m==="href"?E(A):(A.match(Fo)&&(A=A.slice(1,A.length-1)),A==="true"||A!=="false"&&A)}(h,k);typeof T=="string"&&(q.test(T)||X.test(T))&&(a[I]=M.cloneElement(l(T.trim()),{key:p}))}else g!=="style"&&(a[fe[g]||g]=!0);return a},{}):null}const c=[],i={},f={blockQuote:{t:S(Le),i:y.HIGH,l:(n,s,a)=>({$:s(n[0].replace(Oo,""),a)}),h:(n,s,a)=>o("blockquote",{key:a.k},s(n.$,a))},breakLine:{t:L(wo),i:y.HIGH,l:D,h:(n,s,a)=>o("br",{key:a.k})},breakThematic:{t:S(jo),i:y.HIGH,l:D,h:(n,s,a)=>o("hr",{key:a.k})},codeBlock:{t:S(He),i:y.MAX,l:n=>({$:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(n,s,a)=>o("pre",{key:a.k},o("code",C({},n.I,{className:n.M?`lang-${n.M}`:""}),n.$))},codeFenced:{t:S(Me),i:y.MAX,l:n=>({I:u(n[3]||""),$:n[4],M:n[2]||void 0,type:"codeBlock"})},codeInline:{t:j(Co),i:y.LOW,l:n=>({$:n[2]}),h:(n,s,a)=>o("code",{key:a.k},n.$)},footnote:{t:S(Mo),i:y.MAX,l:n=>(c.push({O:n[2],B:n[1]}),{}),h:K},footnoteReference:{t:w(Ho),i:y.HIGH,l:n=>({$:n[1],R:`#${t.slugify(n[1])}`}),h:(n,s,a)=>o("a",{key:a.k,href:E(n.R)},o("sup",{key:a.k},n.$))},gfmTask:{t:w(Po),i:y.HIGH,l:n=>({T:n[1].toLowerCase()==="x"}),h:(n,s,a)=>o("input",{checked:n.T,key:a.k,readOnly:!0,type:"checkbox"})},heading:{t:S(Be),i:y.HIGH,l:(n,s,a)=>({$:B(s,n[2],a),j:t.slugify(n[2]),C:n[1].length}),h:(n,s,a)=>o(`h${n.C}`,{id:n.j,key:a.k},s(n.$,a))},headingSetext:{t:S(Pe),i:y.MAX,l:(n,s,a)=>({$:B(s,n[1],a),C:n[2]==="="?1:2,type:"heading"})},htmlComment:{t:L(Ge),i:y.HIGH,l:()=>({}),h:K},image:{t:j(hs),i:y.HIGH,l:n=>({D:n[1],R:$e(n[2]),N:n[3]}),h:(n,s,a)=>o("img",{key:a.k,alt:n.D||void 0,title:n.N||void 0,src:E(n.R)})},link:{t:w(ds),i:y.LOW,l:(n,s,a)=>({$:As(s,n[1],a),R:$e(n[2]),N:n[3]}),h:(n,s,a)=>o("a",{key:a.k,href:E(n.R),title:n.N},s(n.$,a))},linkAngleBraceStyleDetector:{t:w(Do),i:y.MAX,l:n=>({$:[{$:n[1],type:"text"}],R:n[1],type:"link"})},linkBareUrlDetector:{t:(n,s)=>s.Z?null:w(Uo)(n,s),i:y.MAX,l:n=>({$:[{$:n[1],type:"text"}],R:n[1],N:void 0,type:"link"})},linkMailtoDetector:{t:w(Ro),i:y.MAX,l(n){let s=n[1],a=n[1];return To.test(a)||(a="mailto:"+a),{$:[{$:s.replace("mailto:",""),type:"text"}],R:a,type:"link"}}},orderedList:ye(o,1),unorderedList:ye(o,2),newlineCoalescer:{t:S(Eo),i:y.LOW,l:D,h:()=>`
`},paragraph:{t:ms,i:y.LOW,l:R,h:(n,s,a)=>o("p",{key:a.k},s(n.$,a))},ref:{t:w(Wo),i:y.MAX,l:n=>(i[n[1]]={R:n[2],N:n[4]},{}),h:K},refImage:{t:j(qo),i:y.MAX,l:n=>({D:n[1]||void 0,F:n[2]}),h:(n,s,a)=>o("img",{key:a.k,alt:n.D,src:E(i[n.F].R),title:i[n.F].N})},refLink:{t:w(Xo),i:y.MAX,l:(n,s,a)=>({$:s(n[1],a),P:s(n[0].replace(Zo,"\\$1"),a),F:n[2]}),h:(n,s,a)=>i[n.F]?o("a",{key:a.k,href:E(i[n.F].R),title:i[n.F].N},s(n.$,a)):o("span",{key:a.k},s(n.P,a))},table:{t:S(Ne),i:y.HIGH,l:_s,h:(n,s,a)=>o("table",{key:a.k},o("thead",null,o("tr",null,n.L.map(function(g,p){return o("th",{key:p,style:he(n,p)},s(g,a))}))),o("tbody",null,n.A.map(function(g,p){return o("tr",{key:p},g.map(function(b,h){return o("td",{key:h,style:he(n,h)},s(b,a))}))})))},tableSeparator:{t:function(n,s){return s.v?Yo.exec(n):null},i:y.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:L(cs),i:y.MIN,l:n=>({$:n[0].replace(Go,(s,a)=>t.namedCodesToUnicode[a]?t.namedCodesToUnicode[a]:s)}),h:n=>n.$},textBolded:{t:j(rs),i:y.MED,l:(n,s,a)=>({$:s(n[2],a)}),h:(n,s,a)=>o("strong",{key:a.k},s(n.$,a))},textEmphasized:{t:j(as),i:y.LOW,l:(n,s,a)=>({$:s(n[2],a)}),h:(n,s,a)=>o("em",{key:a.k},s(n.$,a))},textEscaped:{t:j(is),i:y.HIGH,l:n=>({$:n[1],type:"text"})},textMarked:{t:j(os),i:y.LOW,l:R,h:(n,s,a)=>o("mark",{key:a.k},s(n.$,a))},textStrikethroughed:{t:j(ss),i:y.LOW,l:R,h:(n,s,a)=>o("del",{key:a.k},s(n.$,a))}};t.disableParsingRawHTML!==!0&&(f.htmlBlock={t:L(q),i:y.HIGH,l(n,s,a){const[,g]=n[3].match(us),p=new RegExp(`^${g}`,"gm"),b=n[3].replace(p,""),h=(k=b,$s.some(A=>A.test(k))?Is:B);var k;const I=n[1].toLowerCase(),T=ko.indexOf(I)!==-1;a.Z=a.Z||I==="a";const m=T?n[3]:h(s,b,a);return a.Z=!1,{I:u(n[2]),$:m,G:T,H:T?I:n[1]}},h:(n,s,a)=>o(n.H,C({key:a.k},n.I),n.G?n.$:s(n.$,a))},f.htmlSelfClosing={t:L(X),i:y.HIGH,l:n=>({I:u(n[2]||""),H:n[1]}),h:(n,s,a)=>o(n.H,C({},n.I,{key:a.k}))});const d=function(n){let s=Object.keys(n);function a(g,p){let b=[],h="";for(;g;){let k=0;for(;k<s.length;){const I=s[k],T=n[I],m=T.t(g,p,h);if(m){const A=m[0];g=g.substring(A.length);const O=T.l(m,a,p);O.type==null&&(O.type=I),b.push(O),h=A;break}k++}}return b}return s.sort(function(g,p){let b=n[g].i,h=n[p].i;return b!==h?b-h:g<p?-1:1}),function(g,p){return a(function(b){return b.replace(Lo,`
`).replace(Bo,"").replace(Vo,"    ")}(g),p)}}(f),v=(_=function(n){return function(s,a,g){return n[s.type].h(s,a,g)}}(f),function n(s,a={}){if(Array.isArray(s)){const g=a.k,p=[];let b=!1;for(let h=0;h<s.length;h++){a.k=h;const k=n(s[h],a),I=typeof k=="string";I&&b?p[p.length-1]+=k:k!==null&&p.push(k),b=I}return a.k=g,p}return _(s,n,a)});var _;const x=l(e);return c.length?o("div",null,x,o("footer",{key:"footer"},c.map(function(n){return o("div",{id:t.slugify(n.B),key:n.B},n.B,v(d(n.O,{_:!0})))}))):x}(function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"})(y||(y={}));const Es=e=>{let{children:t,options:r}=e,o=function(l,u){if(l==null)return{};var c,i,f={},d=Object.keys(l);for(i=0;i<d.length;i++)u.indexOf(c=d[i])>=0||(f[c]=l[c]);return f}(e,Io);return M.cloneElement(xs(t,r),o)};export{Es as M,js as _,ht as a,xa as b,ws as c,vn as d,ir as e,ro as f,Sa as g,N as h,zn as i,Et as j,V as k,Yn as l,gr as m,z as n,co as o,Na as p,Ua as q,Ao as r,Ba as s,Cs as u};
//# sourceMappingURL=index.modern-2873e19a.js.map