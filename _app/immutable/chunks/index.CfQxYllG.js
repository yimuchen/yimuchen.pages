import{s as De,z as dt,n as Et,d as je,A as fe,B as ce,C as wn}from"./scheduler.D0k7T8uo.js";import{S as Ye,i as Ue,F as Tn,H as Mn,G as Ln,h as Fn,I as _n,f as wt,J as zn,d as We,p as ue,u as ct,v as Rn,q as Tt,r as Dn,K as jn,x as Yn,y as Un,z as Wn,A as Hn}from"./index.DKPK4hvO.js";function Gn(t,e){const n={},a={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],o=e[i];if(o){for(const l in s)l in o||(a[l]=1);for(const l in o)r[l]||(n[l]=o[l],r[l]=1);t[i]=o}else for(const l in s)r[l]=1}for(const s in a)s in n||(n[s]=void 0);return n}function Xn(t){return typeof t=="object"&&t!==null?t:{}}function Bn(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:i,flash:s,spin:o,spinPulse:l,spinReverse:f,pulse:m,fixedWidth:g,inverse:d,border:x,listItem:h,flip:k,size:b,rotation:A,pull:v}=t,E={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":g,"fa-inverse":d,"fa-border":x,"fa-li":h,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both",[`fa-${b}`]:typeof b<"u"&&b!==null,[`fa-rotate-${A}`]:typeof A<"u"&&A!==null&&A!==0,[`fa-pull-${v}`]:typeof v<"u"&&v!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(E).map(O=>E[O]?O:null).filter(O=>O)}function Vn(t){return t=t-0,t===t}function qn(t){return Vn(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function Kn(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function He(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(i=>He(t,i)),r=Object.keys(e.attributes||{}).reduce((i,s)=>{const o=e.attributes[s];return s==="style"?i.attrs.style=Kn(o):s.indexOf("aria-")===0||s.indexOf("data-")===0?i.attrs[s.toLowerCase()]=o:i.attrs[qn(s)]=o,i},{attrs:{}});return t(e.tag,{...r.attrs},a)}const me=()=>{};let Vt={},Ge={},Xe=null,Be={mark:me,measure:me};try{typeof window<"u"&&(Vt=window),typeof document<"u"&&(Ge=document),typeof MutationObserver<"u"&&(Xe=MutationObserver),typeof performance<"u"&&(Be=performance)}catch{}const{userAgent:de=""}=Vt.navigator||{},R=Vt,p=Ge,ge=Xe,ft=Be;R.document;const F=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Ve=~de.indexOf("MSIE")||~de.indexOf("Trident/");var y="classic",qe="duotone",S="sharp",P="sharp-duotone",Jn=[y,qe,S,P],Qn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},he={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Zn=["kit"],$n=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,ta=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ea={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},na={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},aa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ra={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ia={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},sa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ke={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},oa=["solid","regular","light","thin","duotone","brands"],Je=[1,2,3,4,5,6,7,8,9,10],la=Je.concat([11,12,13,14,15,16,17,18,19,20]),Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fa=[...Object.keys(ra),...oa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY].concat(Je.map(t=>"".concat(t,"x"))).concat(la.map(t=>"w-".concat(t))),ca={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ua={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ma={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},pe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",Mt=16,Qe="fa",Ze="svg-inline--fa",H="data-fa-i2svg",Lt="data-fa-pseudo-element",da="data-fa-pseudo-element-pending",qt="data-prefix",Kt="data-icon",be="fontawesome-i2svg",ga="async",ha=["HTML","HEAD","STYLE","SCRIPT"],$e=(()=>{try{return!0}catch{return!1}})(),tn=[y,S,P];function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[y]}})}const en={...Ke};en[y]={...Ke[y],...he.kit,...he["kit-duotone"]};const U=rt(en),Ft={...sa};Ft[y]={...Ft[y],...pe.kit,...pe["kit-duotone"]};const nt=rt(Ft),_t={...ia};_t[y]={..._t[y],...ma.kit};const W=rt(_t),zt={...aa};zt[y]={...zt[y],...ua.kit};const pa=rt(zt),ba=$n,nn="fa-layers-text",ya=ta,va={...Qn};rt(va);const xa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot=Z,q=new Set;Object.keys(nt[y]).map(q.add.bind(q));Object.keys(nt[S]).map(q.add.bind(q));Object.keys(nt[P]).map(q.add.bind(q));const ka=[...Zn,...fa],tt=R.FontAwesomeConfig||{};function Aa(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ea(Aa(n));r!=null&&(tt[a]=r)});const an={styleDefault:"solid",familyDefault:"classic",cssPrefix:Qe,replacementClass:Ze,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);const K={...an,...tt};K.autoReplaceSvg||(K.observeMutations=!1);const c={};Object.keys(an).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){K[t]=e,et.forEach(n=>n(c))},get:function(){return K[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){K.cssPrefix=t,et.forEach(e=>e(c))},get:function(){return K.cssPrefix}});R.FontAwesomeConfig=c;const et=[];function Oa(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}const _=Mt,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sa(t){if(!t||!F)return;const e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=p.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return p.head.insertBefore(e,a),t}const Pa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function at(){let t=12,e="";for(;t-- >0;)e+=Pa[Math.random()*62|0];return e}function J(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jt(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function rn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ca(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(rn(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qt(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function Na(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function Ia(t){let{transform:e,width:n=Mt,height:a=Mt,startCentered:r=!1}=t,i="";return r&&Ve?i+="translate(".concat(e.x/_-n/2,"em, ").concat(e.y/_-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/_,"em), calc(-50% + ").concat(e.y/_,"em)) "):i+="translate(".concat(e.x/_,"em, ").concat(e.y/_,"em) "),i+="scale(".concat(e.size/_*(e.flipX?-1:1),", ").concat(e.size/_*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var wa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function sn(){const t=Qe,e=Ze,n=c.cssPrefix,a=c.replacementClass;let r=wa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let ye=!1;function St(){c.autoAddCss&&!ye&&(Sa(sn()),ye=!0)}var Ta={mixout(){return{dom:{css:sn,insertCss:St}}},hooks(){return{beforeDOMElementCreation(){St()},beforeI2svg(){St()}}}};const L=R||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var I=L[M];const on=[],ln=function(){p.removeEventListener("DOMContentLoaded",ln),gt=1,on.map(t=>t())};let gt=!1;F&&(gt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),gt||p.addEventListener("DOMContentLoaded",ln));function Ma(t){F&&(gt?setTimeout(t,0):on.push(t))}function it(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?rn(t):"<".concat(e," ").concat(Ca(n),">").concat(a.map(it).join(""),"</").concat(e,">")}function ve(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Pt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,l,f,m;for(a===void 0?(l=1,m=e[i[0]]):(l=0,m=a);l<s;l++)f=i[l],m=o(m,e[f],f,e);return m};function La(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Rt(t){const e=La(t);return e.length===1?e[0].toString(16):null}function Fa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function xe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=xe(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,xe(e)):I.styles[t]={...I.styles[t]||{},...r},t==="fas"&&Dt("fa",e)}const{styles:Y,shims:_a}=I,za={[y]:Object.values(W[y]),[S]:Object.values(W[S]),[P]:Object.values(W[P])};let Zt=null,fn={},cn={},un={},mn={},dn={};const Ra={[y]:Object.keys(U[y]),[S]:Object.keys(U[S]),[P]:Object.keys(U[P])};function Da(t){return~ka.indexOf(t)}function ja(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Da(r)?r:null}const gn=()=>{const t=a=>Pt(Y,(r,i,s)=>(r[s]=Pt(i,a,{}),r),{});fn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),cn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),dn=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in Y||c.autoFetchSvg,n=Pt(_a,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});un=n.names,mn=n.unicodes,Zt=bt(c.styleDefault,{family:c.familyDefault})};Oa(t=>{Zt=bt(t.styleDefault,{family:c.familyDefault})});gn();function $t(t,e){return(fn[t]||{})[e]}function Ya(t,e){return(cn[t]||{})[e]}function z(t,e){return(dn[t]||{})[e]}function hn(t){return un[t]||{prefix:null,iconName:null}}function Ua(t){const e=mn[t],n=$t("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return Zt}const te=()=>({prefix:null,iconName:null,rest:[]});function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=y}=e,a=U[n][t],r=nt[n][t]||nt[n][a],i=t in I.styles?t:null;return r||i||null}const Wa={[y]:Object.keys(W[y]),[S]:Object.keys(W[S]),[P]:Object.keys(W[P])};function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[y]:"".concat(c.cssPrefix,"-").concat(y),[S]:"".concat(c.cssPrefix,"-").concat(S),[P]:"".concat(c.cssPrefix,"-").concat(P)};let r=null,i=y;const s=Jn.filter(l=>l!==qe);s.forEach(l=>{(t.includes(a[l])||t.some(f=>Wa[l].includes(f)))&&(i=l)});const o=t.reduce((l,f)=>{const m=ja(c.cssPrefix,f);if(Y[f]?(f=za[i].includes(f)?pa[i][f]:f,r=f,l.prefix=f):Ra[i].indexOf(f)>-1?(r=f,l.prefix=bt(f,{family:i})):m?l.iconName=m:f!==c.replacementClass&&!s.some(g=>f===a[g])&&l.rest.push(f),!n&&l.prefix&&l.iconName){const g=r==="fa"?hn(l.iconName):{},d=z(l.prefix,l.iconName);g.prefix&&(r=null),l.iconName=g.iconName||d||l.iconName,l.prefix=g.prefix||l.prefix,l.prefix==="far"&&!Y.far&&Y.fas&&!c.autoFetchSvg&&(l.prefix="fas")}return l},te());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===S&&(Y.fass||c.autoFetchSvg)&&(o.prefix="fass",o.iconName=z(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===P&&(Y.fasds||c.autoFetchSvg)&&(o.prefix="fasds",o.iconName=z(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=D()||"fas"),o}class Ha{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Dt(i,r[i]);const s=W[y][i];s&&Dt(s,r[i]),gn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],l=o[2];e[i]||(e[i]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[i][f]=o)}),e[i][s]=o}),e}}let ke=[],B={};const V={},Ga=Object.keys(V);function Xa(t,e){let{mixoutsTo:n}=e;return ke=t,B={},Object.keys(V).forEach(a=>{Ga.indexOf(a)===-1&&delete V[a]}),ke.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{B[s]||(B[s]=[]),B[s].push(i[s])})}a.provides&&a.provides(V)}),n}function jt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(B[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(B[t]||[]).forEach(i=>{i.apply(null,n)})}function j(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function Yt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||D();if(e)return e=z(n,e)||e,ve(pn.definitions,n,e)||ve(I.styles,n,e)}const pn=new Ha,Ba=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,G("noAuto")},Va={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(G("beforeI2svg",t),j("pseudoElements2svg",t),j("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Ma(()=>{Ka({autoReplaceSvgRoot:e}),G("watch",t)})}},qa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bt(t[0]);return{prefix:n,iconName:z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(ba))){const e=yt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||D(),iconName:z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=D();return{prefix:e,iconName:z(e,t)||t}}}},C={noAuto:Ba,config:c,dom:Va,parse:qa,library:pn,findIconDefinition:Yt,toHtml:it},Ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=p}=t;(Object.keys(I.styles).length>0||c.autoFetchSvg)&&F&&c.autoReplaceSvg&&C.dom.i2svg({node:e})};function vt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!F)return;const n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ja(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Qt(s)&&n.found&&!a.found){const{width:o,height:l}=n,f={x:o/l/2,y:.5};r.style=pt({...i,"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Qa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:a}]}]}function ee(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:l,titleId:f,extra:m,watchable:g=!1}=t,{width:d,height:x}=n.found?n:e,h=a==="fak",k=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(T=>m.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(m.classes).join(" ");let b={children:[],attributes:{...m.attributes,"data-prefix":a,"data-icon":r,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(x)}};const A=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/x*16*.0625,"em")}:{};g&&(b.attributes[H]=""),o&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||at())},children:[o]}),delete b.attributes.title);const v={...b,prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:i,symbol:s,styles:{...A,...m.styles}},{children:E,attributes:O}=n.found&&e.found?j("generateAbstractMask",v)||{children:[],attributes:{}}:j("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=E,v.attributes=O,s?Qa(v):Ja(v)}function Ae(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,l={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};o&&(l[H]="");const f={...s.styles};Qt(r)&&(f.transform=Ia({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=pt(f);m.length>0&&(l.style=m);const g=[];return g.push({tag:"span",attributes:l,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Za(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=pt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Ct}=I;function Ut(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const $a={found:!1,width:512,height:512};function tr(t,e){!$e&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=D()),new Promise((a,r)=>{if(n==="fa"){const i=hn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ct[e]&&Ct[e][t]){const i=Ct[e][t];return a(Ut(i))}tr(t,e),a({...$a,icon:c.showMissingIcons&&t?j("missingIconAbstract")||{}:{}})})}const Ee=()=>{},Ht=c.measurePerformance&&ft&&ft.mark&&ft.measure?ft:{mark:Ee,measure:Ee},$='FA "6.6.0"',er=t=>(Ht.mark("".concat($," ").concat(t," begins")),()=>bn(t)),bn=t=>{Ht.mark("".concat($," ").concat(t," ends")),Ht.measure("".concat($," ").concat(t),"".concat($," ").concat(t," begins"),"".concat($," ").concat(t," ends"))};var ne={begin:er,end:bn};const ut=()=>{};function Oe(t){return typeof(t.getAttribute?t.getAttribute(H):null)=="string"}function nr(t){const e=t.getAttribute?t.getAttribute(qt):null,n=t.getAttribute?t.getAttribute(Kt):null;return e&&n}function ar(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function rr(){return c.autoReplaceSvg===!0?mt.replace:mt[c.autoReplaceSvg]||mt.replace}function ir(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function sr(t){return p.createElement(t)}function yn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ir:sr}=e;if(typeof t=="string")return p.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(yn(i,{ceFn:n}))}),a}function or(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const mt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(yn(n),e)}),e.getAttribute(H)===null&&c.keepOriginalSource){let n=p.createComment(or(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Jt(e).indexOf(c.replacementClass))return mt.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===c.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>it(i)).join(`
`);e.setAttribute(H,""),e.innerHTML=r}};function Se(t){t()}function vn(t,e){const n=typeof e=="function"?e:ut;if(t.length===0)n();else{let a=Se;c.mutateApproach===ga&&(a=R.requestAnimationFrame||Se),a(()=>{const r=rr(),i=ne.begin("mutate");t.map(r),i(),n()})}}let ae=!1;function xn(){ae=!0}function Gt(){ae=!1}let ht=null;function Pe(t){if(!ge||!c.observeMutations)return;const{treeCallback:e=ut,nodeCallback:n=ut,pseudoElementsCallback:a=ut,observeMutationsRoot:r=p}=t;ht=new ge(i=>{if(ae)return;const s=D();J(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Oe(o.addedNodes[0])&&(c.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&c.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&Oe(o.target)&&~xa.indexOf(o.attributeName))if(o.attributeName==="class"&&nr(o.target)){const{prefix:l,iconName:f}=yt(Jt(o.target));o.target.setAttribute(qt,l||s),f&&o.target.setAttribute(Kt,f)}else ar(o.target)&&n(o.target)})}),F&&ht.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function lr(){ht&&ht.disconnect()}function fr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function cr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=yt(Jt(t));return r.prefix||(r.prefix=D()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ya(r.prefix,t.innerText)||$t(r.prefix,Rt(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ur(t){const e=J(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||at()):(e["aria-hidden"]="true",e.focusable="false")),e}function mr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ce(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=cr(t),i=ur(t),s=jt("parseNodeAttributes",{},t);let o=e.styleParser?fr(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i},...s}}const{styles:dr}=I;function kn(t){const e=c.autoReplaceSvg==="nest"?Ce(t,{styleParser:!1}):Ce(t);return~e.extra.classes.indexOf(nn)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}let w=new Set;tn.map(t=>{w.add("fa-".concat(t))});Object.keys(U[y]).map(w.add.bind(w));Object.keys(U[S]).map(w.add.bind(w));Object.keys(U[P]).map(w.add.bind(w));w=[...w];function Ne(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=p.documentElement.classList,a=m=>n.add("".concat(be,"-").concat(m)),r=m=>n.remove("".concat(be,"-").concat(m)),i=c.autoFetchSvg?w:tn.map(m=>"fa-".concat(m)).concat(Object.keys(dr));i.includes("fa")||i.push("fa");const s=[".".concat(nn,":not([").concat(H,"])")].concat(i.map(m=>".".concat(m,":not([").concat(H,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=J(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const l=ne.begin("onTree"),f=o.reduce((m,g)=>{try{const d=kn(g);d&&m.push(d)}catch(d){$e||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,g)=>{Promise.all(f).then(d=>{vn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),m()})}).catch(d=>{l(),g(d)})})}function gr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kn(t).then(n=>{n&&vn([n],e)})}function hr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Yt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Yt(r||{})),t(a,{...n,mask:r})}}const pr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=N,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:l=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:g,iconName:d,icon:x}=t;return vt({type:"icon",...t},()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(s?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(o||at()):(f["aria-hidden"]="true",f.focusable="false")),ee({icons:{main:Ut(x),mask:r?Ut(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:{...N,...n},symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:f,styles:m,classes:l}})))};var br={mixout(){return{icon:hr(pr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ne,t.nodeCallback=gr,t}}},provides(t){t.i2svg=function(e){const{node:n=p,callback:a=()=>{}}=e;return Ne(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:l,mask:f,maskId:m,extra:g}=n;return new Promise((d,x)=>{Promise.all([Wt(a,s),f.iconName?Wt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(h=>{let[k,b]=h;d([e,ee({icons:{main:k,mask:b},prefix:s,iconName:a,transform:o,symbol:l,maskId:m,title:r,titleId:i,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=pt(s);o.length>0&&(a.style=o);let l;return Qt(i)&&(l=j("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},yr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return vt({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},vr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return vt({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),Za({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},xr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=N,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return vt({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),Ae({content:t,transform:{...N,...n},title:a,extra:{attributes:i,styles:s,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(Ve){const l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/l,o=f.height/l}return c.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ae({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const kr=new RegExp('"',"ug"),Ie=[1105920,1112319],we={FontAwesome:{normal:"fas",400:"fas"},...na,...ea,...ca},Xt=Object.keys(we).reduce((t,e)=>(t[e.toLowerCase()]=we[e],t),{}),Ar=Object.keys(Xt).reduce((t,e)=>{const n=Xt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Er(t){const e=t.replace(kr,""),n=Fa(e,0),a=n>=Ie[0]&&n<=Ie[1],r=e.length===2?e[0]===e[1]:!1;return{value:Rt(r?e[0]:e),isSecondary:a||r}}function Or(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Xt[n]||{})[r]||Ar[n]}function Te(t,e){const n="".concat(da).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=J(t.children).filter(d=>d.getAttribute(Lt)===e)[0],o=R.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),f=l.match(ya),m=o.getPropertyValue("font-weight"),g=o.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&g!=="none"&&g!==""){const d=o.getPropertyValue("content");let x=Or(l,m);const{value:h,isSecondary:k}=Er(d),b=f[0].startsWith("FontAwesome");let A=$t(x,h),v=A;if(b){const E=Ua(h);E.iconName&&E.prefix&&(A=E.iconName,x=E.prefix)}if(A&&!k&&(!s||s.getAttribute(qt)!==x||s.getAttribute(Kt)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const E=mr(),{extra:O}=E;O.attributes[Lt]=e,Wt(A,x).then(T=>{const st=ee({...E,icons:{main:T,mask:te()},prefix:x,iconName:v,extra:O,watchable:!0}),X=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=st.map(ot=>it(ot)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Sr(t){return Promise.all([Te(t,"::before"),Te(t,"::after")])}function Pr(t){return t.parentNode!==document.head&&!~ha.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Lt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Me(t){if(F)return new Promise((e,n)=>{const a=J(t.querySelectorAll("*")).filter(Pr).map(Sr),r=ne.begin("searchPseudoElements");xn(),Promise.all(a).then(()=>{r(),Gt(),e()}).catch(()=>{r(),Gt(),n()})})}var Cr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Me,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=p}=e;c.searchPseudoElements&&Me(n)}}};let Le=!1;var Nr={mixout(){return{dom:{unwatch(){xn(),Le=!0}}}},hooks(){return{bootstrap(){Pe(jt("mutationObserverCallbacks",{}))},noAuto(){lr()},watch(t){const{observeMutationsRoot:e}=t;Le?Gt():Pe(jt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Fe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Ir={mixout(){return{parse:{transform:t=>Fe(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Fe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(o," ").concat(l," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},d={outer:s,inner:m,path:g};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Nt={x:0,y:0,width:"100%",height:"100%"};function _e(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function wr(t){return t.tag==="g"?t.children:[t]}var Tr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?yt(n.split(" ").map(r=>r.trim())):te();return a.prefix||(a.prefix=D()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:l,icon:f}=r,{width:m,icon:g}=i,d=Na({transform:o,containerWidth:m,iconWidth:l}),x={tag:"rect",attributes:{...Nt,fill:"white"}},h=f.children?{children:f.children.map(_e)}:{},k={tag:"g",attributes:{...d.inner},children:[_e({tag:f.tag,attributes:{...f.attributes,...d.path},...h})]},b={tag:"g",attributes:{...d.outer},children:[k]},A="mask-".concat(s||at()),v="clip-".concat(s||at()),E={tag:"mask",attributes:{...Nt,id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[x,b]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:wr(g)},E]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(A,")"),...Nt}}),{children:n,attributes:a}}}},Mr={provides(t){let e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Lr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Fr=[Ta,br,yr,vr,xr,Cr,Nr,Ir,Tr,Mr,Lr];Xa(Fr,{mixoutsTo:C});C.noAuto;const Gr=C.config;C.library;C.dom;const Bt=C.parse;C.findIconDefinition;C.toHtml;const _r=C.icon;C.layer;C.text;C.counter;let An=!1;try{An=!0}catch{}function zr(...t){!An&&console&&typeof console.error=="function"&&console.error(...t)}function ze(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bt.icon)return Bt.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function It(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}function Rr(t){let e,n,a=[t[2]],r={};for(let i=0;i<a.length;i+=1)r=dt(r,a[i]);return{c(){e=Tn("svg"),n=new Mn(!0),this.h()},l(i){e=Ln(i,"svg",{});var s=Fn(e);n=_n(s,!0),s.forEach(wt),this.h()},h(){n.a=null,zn(e,r)},m(i,s){We(i,e,s),n.m(t[1],e),t[7](e)},p:Et,i:Et,o:Et,d(i){i&&wt(e),t[7](null)}}}function Dr(t,e,n){let{tag:a}=e,{props:r}=e,{children:i}=e,{style:s=null}=e,{ref:o=null}=e;if(a!=="svg")throw new Error('SvgElement requires a tag of "svg"');function l(h){return(h==null?void 0:h.reduce((k,b)=>k+(b.tag?f(b):b),""))||""}function f({tag:h,props:k,children:b}){const A=Object.keys(k).map(v=>`${v}="${k[v]}"`).join(" ");return`<${h} ${A}>${l(b)}</${h}>`}const m=l(i),g=r!=null&&r.style?`${r.style}${s||""}`:s,d={...r,style:g};function x(h){je[h?"unshift":"push"](()=>{o=h,n(0,o)})}return t.$$set=h=>{"tag"in h&&n(3,a=h.tag),"props"in h&&n(4,r=h.props),"children"in h&&n(5,i=h.children),"style"in h&&n(6,s=h.style),"ref"in h&&n(0,o=h.ref)},[o,m,d,a,r,i,s,x]}class jr extends Ye{constructor(e){super(),Ue(this,e,Dr,Rr,De,{tag:3,props:4,children:5,style:6,ref:0})}}function Re(t){let e,n,a;const r=[t[2],{style:t[1]}];function i(o){t[28](o)}let s={};for(let o=0;o<r.length;o+=1)s=dt(s,r[o]);return t[0]!==void 0&&(s.ref=t[0]),e=new jr({props:s}),je.push(()=>jn(e,"ref",i)),{c(){Yn(e.$$.fragment)},l(o){Un(e.$$.fragment,o)},m(o,l){Wn(e,o,l),a=!0},p(o,l){const f=l[0]&6?Gn(r,[l[0]&4&&Xn(o[2]),l[0]&2&&{style:o[1]}]):{};!n&&l[0]&1&&(n=!0,f.ref=o[0],wn(()=>n=!1)),e.$set(f)},i(o){a||(ct(e.$$.fragment,o),a=!0)},o(o){Tt(e.$$.fragment,o),a=!1},d(o){Hn(e,o)}}}function Yr(t){let e,n,a=t[2]&&Re(t);return{c(){a&&a.c(),e=ue()},l(r){a&&a.l(r),e=ue()},m(r,i){a&&a.m(r,i),We(r,e,i),n=!0},p(r,i){r[2]?a?(a.p(r,i),i[0]&4&&ct(a,1)):(a=Re(r),a.c(),ct(a,1),a.m(e.parentNode,e)):a&&(Rn(),Tt(a,1,1,()=>{a=null}),Dn())},i(r){n||(ct(a),n=!0)},o(r){Tt(a),n=!1},d(r){r&&wt(e),a&&a.d(r)}}}function Ur(t,e,n){const a=["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"];let r=fe(e,a),{border:i=!1}=e,{mask:s=null}=e,{maskId:o=null}=e,{fixedWidth:l=!1}=e,{inverse:f=!1}=e,{flip:m=!1}=e,{icon:g=null}=e,{listItem:d=!1}=e,{pull:x=null}=e,{pulse:h=!1}=e,{rotation:k=null}=e,{size:b=null}=e,{spin:A=!1}=e,{spinPulse:v=!1}=e,{spinReverse:E=!1}=e,{beat:O=!1}=e,{fade:T=!1}=e,{beatFade:st=!1}=e,{bounce:X=!1}=e,{shake:ot=!1}=e,{symbol:xt=!1}=e,{title:kt=""}=e,{titleId:At=null}=e,{transform:Q=null}=e,{swapOpacity:re=!1}=e,{ref:lt=null}=e,{style:ie=null}=e;const se=ze(g),En=It("classes",[...Bn(e),...(e.class||"").split(" ")]),On=It("transform",typeof Q=="string"?Bt.transform(Q):Q),Sn=It("mask",ze(s)),oe=_r(se,{...En,...On,...Sn,symbol:xt,title:kt,titleId:At,maskId:o});let le=null;if(!oe)zr("Could not find icon",se);else{const{abstract:u}=oe;le=He((Cn,Nn,In)=>({tag:Cn,props:Nn,children:In}),u[0],r)}function Pn(u){lt=u,n(0,lt)}return t.$$set=u=>{n(35,e=dt(dt({},e),ce(u))),n(34,r=fe(e,a)),"border"in u&&n(3,i=u.border),"mask"in u&&n(4,s=u.mask),"maskId"in u&&n(5,o=u.maskId),"fixedWidth"in u&&n(6,l=u.fixedWidth),"inverse"in u&&n(7,f=u.inverse),"flip"in u&&n(8,m=u.flip),"icon"in u&&n(9,g=u.icon),"listItem"in u&&n(10,d=u.listItem),"pull"in u&&n(11,x=u.pull),"pulse"in u&&n(12,h=u.pulse),"rotation"in u&&n(13,k=u.rotation),"size"in u&&n(14,b=u.size),"spin"in u&&n(15,A=u.spin),"spinPulse"in u&&n(16,v=u.spinPulse),"spinReverse"in u&&n(17,E=u.spinReverse),"beat"in u&&n(18,O=u.beat),"fade"in u&&n(19,T=u.fade),"beatFade"in u&&n(20,st=u.beatFade),"bounce"in u&&n(21,X=u.bounce),"shake"in u&&n(22,ot=u.shake),"symbol"in u&&n(23,xt=u.symbol),"title"in u&&n(24,kt=u.title),"titleId"in u&&n(25,At=u.titleId),"transform"in u&&n(26,Q=u.transform),"swapOpacity"in u&&n(27,re=u.swapOpacity),"ref"in u&&n(0,lt=u.ref),"style"in u&&n(1,ie=u.style)},e=ce(e),[lt,ie,le,i,s,o,l,f,m,g,d,x,h,k,b,A,v,E,O,T,st,X,ot,xt,kt,At,Q,re,Pn]}class Xr extends Ye{constructor(e){super(),Ue(this,e,Ur,Yr,De,{border:3,mask:4,maskId:5,fixedWidth:6,inverse:7,flip:8,icon:9,listItem:10,pull:11,pulse:12,rotation:13,size:14,spin:15,spinPulse:16,spinReverse:17,beat:18,fade:19,beatFade:20,bounce:21,shake:22,symbol:23,title:24,titleId:25,transform:26,swapOpacity:27,ref:0,style:1},null,[-1,-1])}}const Br={prefix:"fas",iconName:"blog",icon:[512,512,[],"f781","M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-16 0 0 96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48l0-224z"]},Vr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},qr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Kr={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Jr={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Qr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};export{Xr as F,Jr as a,Kr as b,Vr as c,Qr as d,qr as e,Br as f,Gr as g};
