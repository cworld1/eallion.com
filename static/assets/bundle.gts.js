var t,e,r,n,o={413:(t,e,r)=>{r.a(t,(async(t,e)=>{try{var n=r(789),o=r(73);const t=(0,n.wc)({url:"https://m.eallion.com",accessToken:"MTUXNMZMZJUTYWM4MC0ZN2ZJLTK3ZMITNJK2YZG5MMJINMUX"}),i=await t.v1.timelines.public.list({limit:40});console.log(i);let a=0;for await(const e of t.v1.timelines.public.list()){for(const r of e)await t.v1.statuses.$select(r.id).favourite(),a+=1,console.log(r);if(a>=10)break}(0,o.jU)(),e()}catch(t){e(t)}}),1)},26:t=>{t.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}},73:(t,e,r)=>{function n(t,e,r,n){for(var o,i=arguments.length,a=i<3?e:null===n?n=f(e,r):n,s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&u(e,r,a),a}r.d(e,{jU:()=>Dr});const o=Object,{call:i,prototype:a}=o,{getPrototypeOf:s,setPrototypeOf:c,defineProperty:u,defineProperties:l,getOwnPropertyDescriptor:f,getOwnPropertyDescriptors:h,create:d,preventExtensions:p,keys:v,isExtensible:y,freeze:w,is:g}=o,{hasOwnProperty:m}=a,b=s(s(s(async function*(){}()))),_=s(s(s(function*(){}()))),x=(u(a,"__マジック__",{get(){return this},configurable:!0}),O=__マジック__,delete a.__マジック__,O);var O;const{Array:k,Map:P,Proxy:j,RangeError:A,Set:E,Symbol:S,TypeError:M,WeakMap:T,WeakSet:R}=x,I=k.prototype,q=function(){return this}(),{asyncIterator:W,iterator:$,toStringTag:z,toPrimitive:D}=S,L=i.bind(i.bind),N=L(i,i),B=L(i,i.apply),U=L(i,m),C=L(i,I.unshift),J=L(i,I.shift),Z=L(i,I.includes),{floor:F,min:H}=Math,{get:G,set:K}=Reflect,V=(t,e)=>t===e||t!=t&&e!=e,X=t=>{throw t},Y=d(null),Q=function(){if(new.target===q||new.target===x)throw M("Iterator constructor cannot be called without `new`")},tt=function(){if(new.target===q||new.target===x)throw M("AsyncIterator constructor cannot be called without `new`")},et=S(),rt=(t,e=t.name,r=d(null))=>new j(N,{apply:(e,r,n)=>B(t,r,n),construct(){throw e+" is not a constructor!"},defineProperty:(e,n,o)=>u("prototype"===n?r:t,n,o),deleteProperty:(e,n)=>delete("prototype"===n?r:t)[n],get:(e,n,o)=>G("prototype"===n?r:t,n,o),getPrototypeOf:()=>s(t),getOwnPropertyDescriptor:(e,n)=>f("prototype"===n?r:t,n),has:(e,n)=>n in("prototype"===n?r:t),isExtensible:()=>y(t),ownKeys:()=>[...v(t),...v(r)],preventExtensions:()=>p(r)&&p(t),set:(e,n,o,i)=>K("prototype"===n?r:t,n,o,i),setPrototypeOf:(e,r)=>c(t,r)}),nt=(t,e,{return:r}=t)=>(r!==q&&N(r,t),e),ot=async(t,e,{return:r}=t)=>(r!==q&&await N(r,t),e),it=t=>{var e;if(!t||!mt(e=t.next))throw M("Iterator method is called on incompatible reciever "+t);return e},at=it,st=t=>{function e(){const e=it(this);return N(t,this,((...t)=>B(e,this,t)),...arguments)}return e[et]=t[et]||t,e},ct=(t,e,r)=>{function n(n){if(!t(n))throw M(e(n));return B(r,this,arguments)}return n[et]=r[et]||r,n},ut=(t,e)=>{function r(r){return arguments.length||(arguments.length=1),arguments[0]=t(r),B(e,this,arguments)}return r[et]=e[et]||e,r},lt=(t,e)=>{function r(){return t(arguments),B(e,this,arguments)}return r[et]=e[et]||e,r},ft=({prototype:t},e)=>{l(t,h(e.prototype))};class ht extends T{}class dt extends R{}class pt extends Map{getSet(t,e){if(this.has(t))return this.get(t);const r=e();return this.set(t,r),r}}class vt extends E{}ft(ht,T),ft(dt,R),ft(vt,E),ft(pt,Map);const yt=t=>"function"==typeof t||"object"==typeof t;class wt{constructor(){this.t=new dt,this.n=new vt}has(t){return yt(t)?this.t.has(t):this.n.has(t)}add(t){return yt(t)?this.t.add(t):this.n.add(t),this}delete(t){return yt(t)?this.t.delete(t):this.n.delete(t)}}const gt=(t,e,r)=>(r.value=L(r.value,t),r),mt=t=>"function"==typeof t,bt=t=>{const e=_t(t);return e<0&&X(M("Negative integers are not supported by this function")),F(e)},_t=t=>+t||0,xt=(t,e,r)=>{const{length:n}=r[et]||r;return l(r,{length:{value:null!=t?t:n-1,configurable:!0},name:{value:e,configurable:!0}}),delete r[et],rt(r)},Ot=(t,e)=>{const r=t[e];return"function"==typeof r?N(r,t):t},kt=t=>yt(t)&&null!==t,Pt={toString:t=>Pt,valueOf:t=>Pt},jt=t=>{if(kt(t)){const e=t[D];e!==q?(t=N(e,t,"string"),kt(t)&&Y[{[D]:e=>t}]):(t=Ot(t,"toString"),kt(t)&&(t=Ot(t,"valueOf"),kt(t)&&Y[Pt]))}return t},At=(t,e)=>t[t.length]=e;var Et,St,Mt=xt(0,"indexed",st((async function*(t){for(var e,r,n,o=0;({done:r,value:n}=await t(e)),!r;)e=yield[o++,n]})));class Tt{constructor(t,e){this.e=t,this.r=e}}class Rt{constructor(t=(t=>t)){this.i=t,this.o=new ht}static init(...t){var e;const{length:r}=t,{o:n}=this;return e=class{constructor(){for(var e=0;e<r;e++){const r=t[e];r.o.set(this,B(r.i,this,arguments))}}},n.set(e.prototype,new Tt([],t)),e}static link(t,e=rt){return r=>{const n=r.prototype,o=s(n),{e:i,r:a}=this.o.get(o),u=i.length;for(var l=0;l<u;l++){const r=i[l],o=`${t}.prototype.${r}: called on incompatible reciever `,s=n[r];n[r]=e((function(){if(!a[0].has(this))throw M(o+typeof this);return B(s,this,arguments)}))}return c(n,s(o)),r}}static check(t,e,r){return At(this.o.get(s(t)).e,e),r}get(t){return this.o.get(t)}has(t){return this.o.has(t)}set(t,e){return this.o.set(t,e),this}}Rt.o=new ht,n([gt],Rt,"link",null),n([gt],Rt,"check",null);let It=class extends(Rt.init(Et=new Rt(at),St=new Rt)){async next(t){return await(0 in arguments?N(Et.get(this),St.get(this),t):N(Et.get(this),St.get(this)))}async return(t){const e=St.get(this).return;return{value:e!==q?await N(e,St.get(this)):t,done:!0}}async throw(t){const e=St.get(this).throw;if(e===q)throw t;await N(e,St.get(this),t)}};n([Rt.check],It.prototype,"next",null),n([Rt.check],It.prototype,"return",null),n([Rt.check],It.prototype,"throw",null),It=n([Rt.link("WrapForVaildAsyncIteratorPrototype")],It);const{prototype:qt}=It;delete qt.constructor,c(qt,b);var Wt,$t,zt=xt(1,"from",(t=>{var e,r=o(t),n=r[W],i=n!==q&&null!==n?n:r[$];if(i!==q&&null!==i){if((e=N(i,r))instanceof tt)return e}else e=r;return new It(e)})),Dt=xt(q,"flatMap",ct(mt,(t=>t+" is not a function"),st((async function*(t,e){for(var r,n;({done:r,value:n}=await t()),!r;)try{yield*zt(await e(n))}catch(t){throw await ot(this),t}})))),Lt=xt(q,"forEach",ct(mt,(t=>t+" is not a function"),st((async function(t,e){for(var r,n;({done:r,value:n}=await t()),!r;)try{await e(n)}catch(t){throw await ot(this),t}})))),Nt=xt(0,"toArray",st((async function(t){for(var e,r,n=[],o=0;({done:e,value:r}=await t()),!e;)n[o++]=r;return n}))),Bt=xt(q,"filter",ct(mt,(t=>t+" is not a function"),st((async function*(t,e){for(var r,n,o;({done:n,value:o}=await t(r)),!n;)try{await e(o)&&(r=yield o)}catch(t){throw await ot(this),t}})))),Ut=xt(1,"reduce",ct(mt,(t=>t+" is not a function"),st((async function(t,e,r){if(!(2 in arguments)){if(({value:n,done:o}=await t()),o)throw TypeError("reduce of empty iterator with no initial value");r=n}for(var n,o;({value:n,done:o}=await t()),!o;)try{r=await e(r,n)}catch(t){throw await ot(this),t}return r})))),Ct=xt(q,"every",ct(mt,(t=>t+" is not a function"),st((async function(t,e){for(var r,n;({done:r,value:n}=await t()),!r;)try{if(!await e(n))return ot(this,!1)}catch(t){throw await ot(this),t}return!0})))),Jt=xt(q,"drop",ut(bt,st((async function*(t,e){for(;e--;)if((await t()).done)return;for(var r,n,o;({done:n,value:o}=await t(r)),!n;)r=yield o})))),Zt=xt(q,"find",ct(mt,(t=>t+" is not a function"),st((async function(t,e){for(var r,n;({value:r,done:n}=await t()),!n;)try{if(await e(r))return ot(this,r)}catch(t){throw await ot(this),t}})))),Ft=xt(q,"some",ct(mt,(t=>t+" is not a function"),st((async function(t,e){for(var r,n;({done:r,value:n}=await t(void 0)),!r;)try{if(await e(n))return ot(this,!0)}catch(t){throw await ot(this),t}return!1})))),Ht=xt(q,"take",ut(bt,st((async function*(t,e){for(;e--;){var r,{done:n,value:o}=await t(r);if(n)return;r=yield o}})))),Gt={__proto__:null,asIndexedPairs:Mt,drop:Jt,every:Ct,filter:Bt,find:Zt,flatMap:Dt,forEach:Lt,indexed:Mt,map:xt(q,"map",ct(mt,(t=>t+" is not a function"),st((async function*(t,e){for(var r,n,o;({done:n,value:o}=await t(r)),!n;)try{r=yield await e(o)}catch(t){throw await ot(this),t}})))),reduce:Ut,some:Ft,take:Ht,toArray:Nt},Kt=xt(0,"asIndexedPairs",st((function*(t){for(var e,r,n,o=0;({done:r,value:n}=t(e)),!r;)e=yield[o++,n]})));let Vt=class extends(Rt.init(Wt=new Rt(it),$t=new Rt((t=>t)))){next(t){return 0 in arguments?N(Wt.get(this),$t.get(this),t):N(Wt.get(this),$t.get(this))}return(t){const e=$t.get(this).return;return{value:e!==q?N(e,$t.get(this)):t,done:!0}}throw(t){const e=$t.get(this).throw;if(e===q)throw t;N(e,$t.get(this),t)}};n([Rt.check],Vt.prototype,"next",null),n([Rt.check],Vt.prototype,"return",null),n([Rt.check],Vt.prototype,"throw",null),Vt=n([Rt.link("WrapForVaildIteratorPrototype")],Vt);const{prototype:Xt}=Vt;delete Xt.constructor,c(Xt,_);var Yt=xt(1,"from",(function(t){var e,r=o(t),n=r[$];if(n!==q&&null!==n){if((e=N(n,r))instanceof Q)return e}else e=r;return new Vt(e)})),Qt=xt(q,"flatMap",ct(mt,(t=>t+" is not a function"),st((function*(t,e){for(var r,n;({done:r,value:n}=t()),!r;)try{yield*Yt(e(n))}catch(t){throw nt(this),t}})))),te=xt(q,"forEach",ct(mt,(t=>t+" is not a function"),st((function(t,e){for(var r,n;({done:r,value:n}=t()),!r;)try{e(n)}catch(t){throw nt(this),t}})))),ee=xt(0,"toArray",st((function(t){for(var e,r,n=[],o=0;({done:e,value:r}=t()),!e;)n[o++]=r;return n}))),re=xt(q,"filter",ct(mt,(t=>t+" is not a function"),st((function*(t,e){for(var r,n,o;({done:n,value:o}=t(r)),!n;)try{e(o)&&(r=yield o)}catch(t){throw nt(this),t}})))),ne=xt(1,"reduce",ct(mt,(t=>t+" is not a function"),st((function(t,e,r){if(!(2 in arguments)){if(({value:n,done:o}=t()),o)throw TypeError("reduce of empty iterator with no initial value");r=n}for(var n,o;({value:n,done:o}=t()),!o;)try{r=e(r,n)}catch(t){throw nt(this),t}return r})))),oe=xt(q,"every",ct(mt,(t=>t+" is not a function"),st((function(t,e){for(var r,n;({done:r,value:n}=t()),!r;)try{if(!e(n))return nt(this,!1)}catch(t){throw nt(this),t}return!0})))),ie=xt(q,"drop",ut(bt,st((function*(t,e){for(;e--;)if(t().done)return;for(;;){var r,{done:n,value:o}=t(r);if(n)return;r=yield o}})))),ae=xt(q,"find",ct(mt,(t=>t+" is not a function"),st((function(t,e){for(var r,n;({value:r,done:n}=t()),!n;)try{if(e(r))return nt(this,r)}catch(t){throw nt(this),t}})))),se=xt(q,"some",ct(mt,(t=>t+" is not a function"),st((function(t,e){for(var r,n;({done:r,value:n}=t()),!r;)try{if(e(n))return nt(this,!0)}catch(t){throw nt(this),t}return!1})))),ce=xt(q,"take",ut(bt,st((function*(t,e){for(;e--;){var r,{done:n,value:o}=t(r);if(n)return;r=yield o}})))),ue={__proto__:null,asIndexedPairs:Kt,drop:ie,every:oe,filter:re,find:ae,flatMap:Qt,forEach:te,indexed:Kt,map:xt(q,"map",ct(mt,(t=>t+" is not a function"),st((function*(t,e){for(var r,n,o;({done:n,value:o}=t(r)),!n;)try{r=yield e(o)}catch(t){throw nt(this),t}})))),reduce:ne,some:se,take:ce,toArray:ee},le=xt(q,"symmetricDifference",ut(((t,e=zt(t))=>L(it(e),e)),st((async function*(t,e){for(var r,n,o=[],i=[],a=0,s=0;({done:r,value:n}=await e()),!r;)o[a++]=n;for(;({done:r,value:n}=await t()),!r;)Z(o,n)?i[s++]=n:yield n;for(var c=0;c<a;c++){const t=o[c];Z(i,t)||(yield t)}})))),fe=xt(q,"uniqueJustseen",st((async function*(t){for(var e,r,n;({done:e,value:r}=await t()),!e;)V(n,r)||(yield n=r)}))),he=xt(q,"groupByToMap",ct(mt,(t=>t+" is not a function"),st((async function(t,e){for(var r,n,o=new pt;({done:r,value:n}=await t()),!r;)try{At(o.getSet(await e(n),Array),n)}catch(t){throw await ot(this),t}return new P(o)})))),de=xt(q,"intersection",ut(((t,e=zt(t))=>L(it(e),e)),st((async function*(t,e){for(var r,n,o=[],i=0;({done:r,value:n}=await e()),!r;)o[i++]=await n;for(;({done:r,value:n}=await t()),n=await n,!r;)Z(o,n)&&(yield n)})))),pe=xt(1,"intersperse",st((async function*(t,e){var{done:r,value:n}=await t();const o=await e;if(!r)for(yield n;({done:r,value:n}=await t()),!r;)yield o,yield n}))),ve=xt(q,"difference",ut(((t,e=zt(t))=>L(it(e),e)),st((async function*(t,e){for(var r,n,o=[],i=0;({done:r,value:n}=await e()),!r;)o[i++]=n;for(;({done:r,value:n}=await t()),!r;)Z(o,n)||(yield n)})))),ye=xt(q,"roundrobin",lt((t=>{for(var e,r=0,n=t.length;r<n;r++)t[r]=L((e=zt(t[r])).next,e)}),st((async function*(t,...e){for(var r,n=C(e,t),o=0,i=k(n);o<n;)for(r=0;r<n;r++)if(e[r]){const{done:t,value:n}=await e[r](i[r]);if(t&&++o){delete e[r];continue}i[r]=yield n}})))),we=xt(q,"zipLongest",lt((t=>{for(var e=0,r=t.length;e<r;e++)t[e]=L(it(t[e]),t[e])}),st((async function*(t,...e){for(var r,n,o,i=0,a=C(e,t),s=k(a);n=k(a);){for(r=0;r<a;){const{done:t,value:c}=await e[r]();if(t){for(s[r]=!0,i=0,o=!1;i<a;)if(!s[r++]){o=!0;break}if(o)return}n[r++]=c}yield n}})))),ge=xt(q,"dropWhile",ct(mt,(t=>t+" is not a function"),st((async function*(t,e){for(var r,n,o;({done:n,value:o}=await t()),!n;)try{if(!await e(o))break}catch(t){throw await ot(this),t}for(;({done:n,value:o}=await t(r)),!n;)r=yield o})))),me=xt(1,"filterMap",ct(mt,(t=>t+" is not a function"),st((async function*(t,e,r){for(var n,o;({done:n,value:o}=await t()),!n;)try{const t=await e(...o);V(t,r)&&(yield t)}catch(t){throw await ot(this),t}}))));class be{constructor(t,e,r){this.a=t,this.u=e,this.c=r}async*s(t,e,r){for(;;){if(this.f)throw this.f[0];try{for(;e.length>0;)yield J(e);if(this.l)break;for(;;){var n,{value:o,done:i}=await this.a(this.h);if(i){for(this.l=[o];e.length>0;)yield J(e);return o}try{n=await N(this.u,q,o)}catch(t){throw await ot(this.c),t}if(!!n===t){for(;e.length>0;)yield J(e);this.h=yield o;break}At(r,o)}}catch(t){throw this.f=[t],t}}return this.l&&this.l[0]}d(t=[],e=[]){return[this.s(!0,t,e),this.s(!1,e,t)]}}var _e=xt(q,"partition",ct(mt,(t=>t+" is not a function"),st((function(t,e){return new be(t,e,this).d()})))),xe=xt(q,"takeWhile",ct(mt,(t=>t+" is not a function"),st((async function*(t,e){for(var r,n,o;({done:n,value:o}=await t()),!n;)try{if(!await e(o))break}catch(t){throw await ot(this),t}for(;({done:n,value:o}=await t(r)),!n;)r=yield o})))),Oe=xt(q,"contains",st((async function(t,e){for(var r,n;({done:r,value:n}=await t()),!r;)if(V(n,e))return!0;return!1}))),ke=xt(0,"average",st((async function(t){for(var e,r,n=0,o=0;({done:e,value:r}=await t()),!e;)n+=r,o++;return n/o}))),Pe=xt(q,"chunked",ut((t=>bt(t)),st((async function*(t,e=2){var r,n,o,i;t:for(;n=0,r=[];){for(;n<e&&({done:o,value:i}=await t());){if(o)break t;r[n++]=i}yield r}n&&(yield r)})))),je=xt(0,"flatten",ut(((t=1)=>bt(t)),st((async function*t(e,r,{keepStringsAsIs:n=!1}={}){for(var o,i,a,s;({done:o,value:i}=await e()),!o;)r>0&&("string"!=typeof i||!n&&i.length>1)?yield*N(t,a=zt(i),(s=a.next,(...t)=>B(s,a,t)),r-1):yield i})))),Ae=xt(q,"groupBy",ct(mt,(t=>t+" is not a function"),st((async function(t,e){for(var r,n,o,i,a={};({done:o,value:i}=await t()),!o;)try{At(null!==(r=a[n=jt(await e(i))])&&void 0!==r?r:a[n]=[],i)}catch(t){throw await ot(this),t}return a})))),Ee=xt(q,"starMap",ct(mt,(t=>t+" is not a function"),st((async function*(t,e){for(var r,n,o;({done:n,value:o}=await t(r)),!n;)try{r=yield await e(...o)}catch(t){throw await ot(this),t}})))),Se=xt(q,"chain",lt((t=>{for(var e=0,r=t.length;e<r;e++)t[e]=zt(t[e])}),st((async function*(t,...e){yield*{[W]:()=>({next:t})};for(var r=0,n=e.length;r<n;){const t=e[r++];t===q&&null===t||(yield*t)}})))),Me=xt(0,"cycle",ut(((t=1/0)=>bt(t)),st((async function*(t,e){for(var r,n,o,i,a=[],s=0;({done:r,value:n}=await t(o)),!r;)o=yield a[s++]=n;for(;e--;)for(i=0;i<s;)yield a[i++];return n})))),Te=xt(q,"unique",st((async function*(t){for(var e,r,n=new wt;({done:e,value:r}=await t()),!e;)n.has(r)||(yield(n.add(r),r))}))),Re=xt(0,"count",st((async function(t){for(var e=0;!(await t()).done;)e++;return e}))),Ie=xt(q,"heads",lt((t=>{for(var e,r=0,n=t.length;r<n;r++)t[r]=L((e=zt(t[r])).next,e)}),st((async function*(t,...e){for(var r,n,o,i=C(e,t),a=0;a<i;){for(r=0,n=0,o=[];r<i;r++)if(r in e){var{done:s,value:c}=await e[r]();if(s&&++a){delete e[r];continue}o[n++]=c}n&&(yield o)}})))),qe=xt(q,"each",ct(mt,(t=>t+" is not a function"),st((async function*(t,e){for(var r,n,o;({done:r,value:n}=await t(o)),!r;)try{await e(n),o=yield n}catch(t){throw await ot(this),t}})))),We=xt(1,"join",st((async function(t,e=", "){var r,n=e+"",{done:o,value:i}=await t();if(o)return"";for(r=i+"";({done:o,value:i}=await t()),!o;)r+=n+i;return r}))),$e=xt(0,"max",st((async function(t){for(var e,r,n=-1/0;({done:e,value:r}=await t()),!e;)n<r&&(n=+r);return n}))),ze=xt(0,"min",st((async function(t){for(var e,r,n=1/0;({done:e,value:r}=await t()),!e;)n>r&&(n=+r);return n})));class De{constructor(t){this.a=t}d(t){const e=k(t),r=[],n=k(t);for(var o=0;o<t;o++)n[o]=0,e[o]=this.s(o,r,n);return e}async*s(t,e,r){for(var n=0;(this.l&&this.l[0])!==n;){if(n>=e.length){const{done:o,value:i}=await this.a(this.h);if(o)return this.l=[n,i],i;this.h=yield e[n++]=i,r[t]=n;continue}const o=e[n++];r[t]=n,B(H,q,r)===n&&delete e[n-1],yield o}return this.l&&this.l[1]}}var Le=xt(0,"tee",ut(((t=2)=>bt(t)),st((function(t,e){return new De(t).d(e)})))),Ne=xt(q,"zip",lt((t=>{for(var e=0,r=t.length;e<r;e++)t[e]=L(it(t[e]),t[e])}),st((async function*(t,...e){for(var r,n,o=C(e,t);n=k(o);){for(r=0;r<o;r++){const{done:t,value:o}=await e[r]();if(t)return;n[r]=o}yield n}})))),Be={__proto__:null,average:ke,chain:Se,chunked:Pe,concat:Se,contains:Oe,count:Re,cycle:Me,difference:ve,dropWhile:ge,each:qe,entries:Mt,enumerate:Mt,filterMap:me,flatten:je,group:Ae,groupBy:Ae,groupByToMap:he,groupToMap:he,heads:Ie,intersection:de,intersperse:pe,join:We,max:$e,min:ze,partition:_e,repeat:Me,roundrobin:ye,skip:Jt,skipWhile:ge,starMap:Ee,symmetricDifference:le,takeWhile:xe,tee:Le,unique:Te,uniqueJustseen:fe,zip:Ne,zipLongest:we},Ue=xt(q,"symmetricDifference",ut(((t,e=Yt(t))=>L(it(e),e)),st((function*(t,e){for(var r,n,o=[],i=[],a=0,s=0;({done:r,value:n}=e()),!r;)o[a++]=n;for(;({done:r,value:n}=t()),!r;)Z(o,n)?i[s++]=n:yield n;for(var c=0;c<a;c++){const t=o[c];Z(i,t)||(yield t)}})))),Ce=xt(q,"uniqueJustseen",st((function*(t){for(var e,r,n;({done:e,value:r}=t()),!e;)V(n,r)||(yield n=r)}))),Je=xt(q,"groupByToMap",ct(mt,(t=>t+" is not a function"),st((function(t,e){for(var r,n,o=new pt;({done:r,value:n}=t()),!r;)try{At(o.getSet(e(n),Array),n)}catch(t){throw nt(this),t}return new Map(o)})))),Ze=xt(q,"intersection",ut(((t,e=Yt(t))=>L(it(e),e)),st((function*(t,e){for(var r,n,o=[],i=0;({done:r,value:n}=e()),!r;)o[i++]=n;for(;({done:r,value:n}=t()),!r;)Z(o,n)&&(yield n)})))),Fe=xt(1,"intersperse",st((function*(t,e){var{done:r,value:n}=t();if(!r)for(yield n;({done:r,value:n}=t()),!r;)yield e,yield n}))),He=xt(q,"difference",ut(((t,e=Yt(t))=>L(it(e),e)),st((function*(t,e){for(var r,n,o=[],i=0;({done:r,value:n}=e()),!r;)o[i++]=n;for(;({done:r,value:n}=t()),!r;)Z(o,n)||(yield n)})))),Ge=xt(q,"roundrobin",lt((t=>{for(var e,r=0,n=t.length;r<n;r++)t[r]=L((e=Yt(t[r])).next,e)}),st((function*(t,...e){for(var r,n=C(e,t),o=0,i=k(n);o<n;)for(r=0;r<n;r++)if(e[r]){const{done:t,value:n}=e[r](i[r]);if(t&&++o){delete e[r];continue}i[r]=yield n}})))),Ke=xt(q,"zipLongest",lt((t=>{for(var e=0,r=t.length;e<r;e++)t[e]=L(it(t[e]),t[e])}),st((function*(t,...e){for(var r,n,o,i=0,a=C(e,t),s=k(a);n=k(a);){for(r=0;r<a;){const{done:t,value:c}=e[r]();if(t){for(s[r]=!0,i=0,o=!1;i<a;)if(!s[r++]){o=!0;break}if(o)return}n[r++]=c}yield n}})))),Ve=xt(q,"dropWhile",ct(mt,(t=>t+" is not a function"),st((function*(t,e){for(var r,n,o;({done:n,value:o}=t()),!n;)try{if(!e(o))break}catch(t){throw nt(this),t}for(;({done:n,value:o}=t(r)),!n;)r=yield o})))),Xe=xt(1,"filterMap",ct(mt,(t=>t+" is not a function"),st((function*(t,e,r){for(var n,o;({done:n,value:o}=t()),!n;)try{const t=e(...o);V(t,r)&&(yield t)}catch(t){throw nt(this),t}}))));class Ye{constructor(t,e,r){this.a=t,this.u=e,this.c=r}*s(t,e,r){for(;;){if(this.f)throw this.f[0];try{for(;e.length>0;)yield J(e);if(this.l)break;for(;;){var n,{value:o,done:i}=this.a(this.h);if(i){for(this.l=[o];e.length>0;)yield J(e);return o}try{n=N(this.u,q,o)}catch(t){throw nt(this.c),t}if(!!n===t){for(;e.length>0;)yield J(e);this.h=yield o;break}At(r,o)}}catch(t){throw this.f=[t],t}}return this.l&&this.l[0]}d(t=[],e=[]){return[this.s(!0,t,e),this.s(!1,e,t)]}}var Qe=xt(q,"partition",ct(mt,(t=>t+" is not a function"),st((function(t,e){return new Ye(t,e,this).d()})))),tr=xt(q,"takeWhile",ct(mt,(t=>t+" is not a function"),st((function*(t,e){for(var r,n,o;({done:n,value:o}=t()),!n;)try{if(!e(o))break}catch(t){throw nt(this),t}for(;({done:n,value:o}=t(r)),!n;)r=yield o})))),er=xt(q,"contains",st((function(t,e){for(var r,n;({done:r,value:n}=t()),!r;)if(V(n,e))return!0;return!1}))),rr=xt(0,"average",st((function(t){for(var e,r,n=0,o=0;({done:e,value:r}=t()),!e;)n+=r,o++;return n/o}))),nr=xt(q,"chunked",ut((t=>bt(t)),st((function*(t,e=2){var r,n,o,i;t:for(;n=0,r=[];){for(;n<e&&({done:o,value:i}=t());){if(o)break t;r[n++]=i}yield r}n&&(yield r)})))),or=xt(0,"flatten",ut(((t=1)=>bt(t)),st((function*t(e,r,{keepStringsAsIs:n=!1}={}){for(var o,i,a,s;({done:o,value:i}=e()),!o;)r>0&&("string"!=typeof i||!n&&i.length>1)?yield*N(t,a=Yt(i),(s=a.next,(...t)=>B(s,a,t)),r-1):yield i})))),ir=xt(q,"groupBy",ct(mt,(t=>t+" is not a function"),st((function(t,e){for(var r,n,o,i,a={};({done:o,value:i}=t()),!o;)try{At(null!==(r=a[n=jt(e(i))])&&void 0!==r?r:a[n]=[],i)}catch(t){throw nt(this),t}return a})))),ar=xt(q,"starMap",ct(mt,(t=>t+" is not a function"),st((function*(t,e){for(var r,n,o;({done:n,value:o}=t(r)),!n;)try{r=yield e(...o)}catch(t){throw nt(this),t}})))),sr=xt(q,"chain",lt((t=>{for(var e=0,r=t.length;e<r;e++)t[e]=Yt(t[e])}),st((function*(t,...e){yield*{[$]:()=>({next:t})};for(var r=0,n=e.length;r<n;)yield*e[r++]})))),cr=xt(0,"cycle",ut(((t=1/0)=>bt(t)),st((function*(t,e){for(var r,n,o,i,a=[],s=0;({done:r,value:n}=t(o)),!r;)o=yield a[s++]=n;for(;e--;)for(i=0;i<s;)yield a[i++];return n})))),ur=xt(q,"unique",st((function*(t){for(var e,r,n=new wt;({done:e,value:r}=t()),!e;)n.has(r)||(yield(n.add(r),r))}))),lr=xt(0,"count",st((function(t){for(var e=0;!t().done;)e++;return e}))),fr=xt(q,"heads",lt((t=>{for(var e,r=0,n=t.length;r<n;r++)t[r]=L((e=Yt(t[r])).next,e)}),st((function*(t,...e){for(var r,n,o,i=C(e,t),a=0;a<i;){for(r=0,n=0,o=[];r<i;r++)if(r in e){var{done:s,value:c}=e[r]();if(s&&++a){delete e[r];continue}o[n++]=c}n&&(yield o)}})))),hr=xt(q,"each",ct(mt,(t=>t+" is not a function"),st((function*(t,e){for(var r,n,o;({done:r,value:n}=t(o)),!r;)try{e(n),o=yield n}catch(t){throw nt(this),t}})))),dr=xt(1,"join",st((function(t,e=", "){var r,n=e+"",{done:o,value:i}=t();if(o)return"";for(r=i+"";({done:o,value:i}=t()),!o;)r+=n+i;return r}))),pr=xt(0,"max",st((function(t){for(var e,r,n=-1/0;({done:e,value:r}=t()),!e;)n<r&&(n=+r);return n}))),vr=xt(0,"min",st((function(t){for(var e,r,n=1/0;({done:e,value:r}=t()),!e;)n>r&&(n=+r);return n})));class yr{constructor(t){this.a=t}d(t){const e=k(t),r=[],n=[];for(var o=0;o<t;o++)e[o]=this.s(o,r,n);return e}*s(t,e,r){for(var n=r[t]=0;(this.l&&this.l[0])!==n;){if(n>=e.length){const{done:o,value:i}=this.a(this.h);if(o)return this.l=[n,i],i;this.h=yield e[r[t]=n++]=i;continue}const o=e[n++];r[t]=n,B(H,q,r)===n&&delete e[n-1],yield o}return this.l&&this.l[1]}}var wr=xt(0,"tee",ut(((t=2)=>bt(t)),st((function(t,e){return new yr(t).d(e)})))),gr=xt(q,"zip",lt((t=>{for(var e=0,r=t.length;e<r;e++)t[e]=L(it(t[e]),t[e])}),st((function*(t,...e){for(var r,n,o=C(e,t);n=k(o);){for(r=0;r<o;r++){const{done:t,value:o}=e[r]();if(t)return;n[r]=o}yield n}})))),mr={__proto__:null,average:rr,chain:sr,chunked:nr,concat:sr,contains:er,count:lr,cycle:cr,difference:He,dropWhile:Ve,each:hr,entries:Kt,enumerate:Kt,filterMap:Xe,flatten:or,group:ir,groupBy:ir,groupByToMap:Je,groupToMap:Je,heads:fr,intersection:Ze,intersperse:Fe,join:dr,max:pr,min:vr,partition:Qe,repeat:cr,roundrobin:Ge,skip:ie,skipWhile:Ve,starMap:ar,symmetricDifference:Ue,takeWhile:tr,tee:wr,unique:ur,uniqueJustseen:Ce,zip:gr,zipLongest:Ke},br=xt(1,"range",lt((t=>{t[0]=_t(t[0]),t[1]=t[1]!==q?_t(t[1]):q,t[2]=t[2]!==q?_t(t[2])||X(A("AsyncIterator.range(): step argument cannot be 0")):q}),(async function*(t,e=(e=>(t=0,e))(t),r=1){if(r>0)for(;t<e;t+=r)yield t;else for(;t>e;t+=r)yield t}))),_r={__proto__:null,range:br},xr={__proto__:null,from:zt},Or=xt(1,"range",lt((t=>{t[0]=_t(t[0]),t[1]=t[1]!==q?_t(t[1]):q,t[2]=t[2]!==q?_t(t[2])||X(A("AsyncIterator.range(): step argument cannot be 0")):q}),(function*(t,e=(e=>(t=0,e))(t),r=1){if(r>0)for(;t<e;t+=r)yield t;else for(;t>e;t+=r)yield t}))),kr={__proto__:null,range:Or},Pr={__proto__:null,from:Yt};function jr(t,e){for(const r in e)if(U(e,r)){const n=e[r];u(t,r,{value:n,configurable:!0,writable:!0})}}function Ar(t,e){for(let r=0,n=e.length;r<n;r++)delete t[e[r]]}function Er(t,e,r){jr(e,r),u(t,"prototype",{value:e})}const Sr=w({...w(ue),...w(mr)}),Mr=w({...w(Gt),...w(Be)}),Tr=w({...w(Pr),...w(kr)}),Rr=w({...w(xr),...w(_r)});Er(Q,_,Sr),Er(tt,b,Mr),jr(tt,Rr),jr(Q,Tr);const Ir=(t={})=>(e,r,n)=>{const o=n.value,i={};for(let e=v(t),r=0,n=e.length;r<n;r++){const n=e[r];u(i,n,Ir()({},"",f(t,n)))}return w(i),delete n.value,delete n.writable,n.get=()=>i,n.set=t=>{o(t)},n},qr=(t,e,r,n)=>{e?jr(r,{[t]:n[t]}):Ar(r,[t])},Wr=t=>e=>{qr(t,e,_,Sr),qr(t,e,b,Mr)},$r=t=>{const e={};for(var r=0,n=t.length;r<n;r++){const n=t[r];e[n]=Wr(n)}return e};class zr{additionals(t){if(t)jr(b,Be),jr(_,mr);else{const t=v(mr);Ar(b,t),Ar(_,t)}}polyfilled(t){if(t)jr(b,Gt),jr(_,ue);else{const t=v(Gt);Ar(b,t),Ar(_,t)}}}n([Ir($r(v(mr)))],zr.prototype,"additionals",null),n([Ir($r(v(ue)))],zr.prototype,"polyfilled",null),u(_,z,{value:"Iterator",configurable:!0}),u(b,z,{value:"AsyncIterator",configurable:!0}),new zr;const Dr=()=>{x.Iterator=Q,x.AsyncIterator=tt}},789:(t,e,r)=>{r.d(e,{wc:()=>C});var n,o=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=function(t){function e(e,r){var n,o,i,a=this.constructor,s=t.call(this,e,r)||this;return Object.defineProperty(s,"name",{value:a.name,enumerable:!1,configurable:!0}),n=s,o=a.prototype,(i=Object.setPrototypeOf)?i(n,o):n.__proto__=o,function(t,e){void 0===e&&(e=t.constructor);var r=Error.captureStackTrace;r&&r(t,e)}(s),s}return o(e,t),e}(Error),a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};function s(t){return t.toLowerCase()}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],u=/[^A-Z0-9]+/gi;function l(t,e){void 0===e&&(e={});for(var r=e.splitRegexp,n=void 0===r?c:r,o=e.stripRegexp,i=void 0===o?u:o,a=e.transform,l=void 0===a?s:a,h=e.delimiter,d=void 0===h?" ":h,p=f(f(t,n,"$1\0$2"),i,"\0"),v=0,y=p.length;"\0"===p.charAt(v);)v++;for(;"\0"===p.charAt(y-1);)y--;return p.slice(v,y).split("\0").map(l).join(d)}function f(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce((function(t,e){return t.replace(e,r)}),t)}function h(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),l(t,a({delimiter:"."},e))}(t,a({delimiter:"_"},e))}function d(t,e){var r=t.charAt(0),n=t.substr(1).toLowerCase();return e>0&&r>="0"&&r<="9"?"_"+r+n:""+r.toUpperCase()+n}function p(t,e){return 0===e?t.toLowerCase():d(t,e)}function v(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),l(t,a({delimiter:"",transform:d},e))}(t,a({transform:p},e))}r(26);class y extends i{}class w extends i{constructor(t,e,r,n){super(t,n),this.contentType=e,this.data=r}}class g extends i{constructor(t,e,r,n,o){super(e,o),this.statusCode=t,this.message=e,this.description=r,this.details=n}}class m extends i{}function b(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))}const _=t=>new Promise((e=>setTimeout((()=>e()),t)));function x(){}Symbol.asyncIterator;class O{constructor(t,e,r,n,o="next"){this.http=t,this.nextPath=e,this.nextParams=r,this.meta=n,this.direction=o}next(){return b(this,void 0,void 0,(function*(){if(null==this.nextPath)return{done:!0,value:void 0};const t=yield this.http.request(Object.assign({method:"GET",path:this.nextPath,search:this.nextParams},this.meta)),e=this.getLink(t.headers.get("link"));return this.nextPath=null==e?void 0:e.pathname,this.nextParams=null==e?void 0:e.search.replace(/^\?/,""),{done:!1,value:yield t.data}}))}return(t){return b(this,void 0,void 0,(function*(){return this.clear(),{done:!0,value:yield t}}))}throw(t){return b(this,void 0,void 0,(function*(){throw this.clear(),t}))}then(t=Promise.resolve.bind(Promise),e=Promise.reject.bind(Promise)){return this.next().then((e=>t(e.value)),e)}values(){return this[Symbol.asyncIterator]()}getDirection(){return this.direction}setDirection(t){return new O(this.http,this.nextPath,this.nextParams,this.meta,t)}[Symbol.asyncIterator](){return this}getLink(t){if(null==t)return;const e=(t=>{const e=new Map;for(const r of t.split(",")){const t=r.match(/<([^>]+)>;\s*rel="([^"]+)"/);t&&e.set(t[2],t[1])}return e})(t).get(this.direction);return null!=e?new URL(e):void 0}clear(){this.nextPath=void 0,this.nextParams=void 0}clone(){return new O(this.http,this.nextPath,this.nextParams,this.meta,this.direction)}}class k{constructor(t,e={}){this.http=t,this.params=e,this.waitForMediaAttachment=t=>b(this,void 0,void 0,(function*(){let e;const r=AbortSignal.timeout(this.mediaTimeout);for(;null==e;){if(r.aborted)throw new m(`Media processing timed out of ${this.mediaTimeout}ms`);try{yield _(1e3);const r=yield this.http.get(`/api/v1/media/${t}`);null!=r.url&&(e=r)}catch(t){if(t instanceof g&&404===t.statusCode)continue;throw t}}return e}))}dispatch(t){const e=this.toPrimitiveAction(t.type),r=this.isPrimitiveAction(t.type)?t.path:t.path+"/"+h(t.type),n=this.inferEncoding(e,r),o=Object.assign(Object.assign({},t.meta),{encoding:n});switch(e){case"fetch":return this.http.get(r,t.data,o);case"create":return"/api/v2/media"===r?this.http.post(r,t.data,o).then((t=>this.waitForMediaAttachment(t.id))):this.http.post(r,t.data,o);case"update":return this.http.patch(r,t.data,o);case"remove":return this.http.delete(r,t.data,o);case"list":return new O(this.http,r,t.data)}}isPrimitiveAction(t){switch(t){case"fetch":case"create":case"update":case"remove":case"list":return!0;default:return!1}}toPrimitiveAction(t){if(this.isPrimitiveAction(t))return t;switch(t){case"lookup":case"verify_credentials":return"fetch";case"update_credentials":return"update";default:return"create"}}inferEncoding(t,e){return"create"===t&&"/api/v1/accounts"===e||"update"===t&&"/api/v1/accounts/update_credentials"===e||"create"===t&&"/api/v1/email"===e||"create"===t&&"/api/v1/featured_tag"===e||"create"===t&&"/api/v1/media"===e||"create"===t&&"/api/v2/media"===e?"multipart-form":"json"}get mediaTimeout(){var t;return null!==(t=this.params.mediaTimeout)&&void 0!==t?t:6e4}}Symbol.asyncIterator;const P=(t,e=[])=>new Proxy(x,{get:A(t,e),apply:E(t,e)}),j=new Set(["then","catch","finally","inspect","toString","valueOf","toJSON","constructor","prototype","length","name","caller","callee","arguments","bind","apply","call"]),A=(t,e)=>(r,n)=>{if(("string"!=typeof n||!j.has(n))&&"symbol"!=typeof n)return P(t,"$select"===n?[...e,n]:[...e,h(n)])},E=(t,e)=>(r,n,o)=>{const i=e.pop();if(null==i)throw new Error("No action specified");if("$select"===i)return P(t,[...e,...o]);const a="/"+e.join("/"),[s,c]=o;return t.dispatch({type:i,path:a,data:s,meta:c})};class S{constructor(t,e){this.props=t,this.serializer=e}mergeRequestInitWithDefaults(t={}){const e=Object.assign({},this.props.requestInit);{const{headers:r,signal:n}=t,o=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["headers","signal"]);Object.assign(e,o),e.headers=this.mergeHeadersWithDefaults(r),e.signal=this.mergeAbortSignalWithDefaults(n)}return e}resolvePath(t,e){const r=new URL(t,this.props.url);return"string"==typeof e?r.search=e:null!=e&&(r.search=this.serializer.serialize("querystring",e)),r}createTimeout(){var t;return AbortSignal.timeout(null!==(t=this.props.timeout)&&void 0!==t?t:3e5)}mergeHeadersWithDefaults(t={}){var e,r;const n=(([t,...e])=>{const r=new Headers(t);for(const t of e)for(const[e,n]of new Headers(t).entries())r.set(e,n);return r})([null!==(r=null===(e=this.props.requestInit)||void 0===e?void 0:e.headers)&&void 0!==r?r:{},t]),o=new Headers(n);return this.props.accessToken&&o.set("Authorization",`Bearer ${this.props.accessToken}`),new Headers(o)}mergeAbortSignalWithDefaults(t){var e;const r=[this.createTimeout()];return(null===(e=this.props.requestInit)||void 0===e?void 0:e.signal)&&r.push(this.props.requestInit.signal),null!=t&&r.push(t),(t=>{const e=new AbortController;for(const r of t)r.addEventListener("abort",(()=>e.abort()),{once:!0});return e.signal})(r)}}class M{get(t,e,r={}){return this.request(Object.assign({method:"GET",path:t,search:e},r)).then((t=>t.data))}post(t,e,r={}){return this.request(Object.assign({method:"POST",path:t,body:e},r)).then((t=>t.data))}delete(t,e,r={}){return this.request(Object.assign({method:"DELETE",path:t,body:e},r)).then((t=>t.data))}put(t,e,r={}){return this.request(Object.assign({method:"PUT",path:t,body:e},r)).then((t=>t.data))}patch(t,e,r={}){return this.request(Object.assign({method:"PATCH",path:t,body:e},r)).then((t=>t.data))}}const T=t=>{var e;const r=null===(e=t.get("Content-Type"))||void 0===e?void 0:e.replace(/\s*;.*$/,"");if("string"==typeof r)switch(r){case"application/json":return"json";case"multipart/form-data":return"multipart-form";default:return}};class R extends M{constructor(t,e,r){super(),this.serializer=t,this.config=e,this.logger=r}request(t){var e,r,n,o,i;return b(this,void 0,void 0,(function*(){const a=this.createRequest(t);try{null===(e=this.logger)||void 0===e||e.info(`↑ ${a.method} ${a.url}`),null===(r=this.logger)||void 0===r||r.debug("\tbody",{encoding:t.encoding,body:t.body});const i=yield fetch(a);if(!i.ok)throw i;const s=yield i.text(),c=T(i.headers);if(null==c)throw new y("The server returned data with an unknown encoding.");const u=this.serializer.deserialize(c,s);return null===(n=this.logger)||void 0===n||n.info(`↓ ${a.method} ${a.url}`),null===(o=this.logger)||void 0===o||o.debug("\tbody",s),{headers:i.headers,data:u}}catch(t){throw null===(i=this.logger)||void 0===i||i.debug("HTTP failed",t),yield this.createError(t)}}))}createRequest(t){const{method:e,path:r,search:n,encoding:o="json",requestInit:i={}}=t,a=this.config.resolvePath(r,n),s=this.serializer.serialize(o,t.body),c=this.config.mergeRequestInitWithDefaults(i),u=new Request(a,Object.assign({method:e,body:s},c));return"string"==typeof s&&"json"===o&&u.headers.set("Content-Type","application/json"),u}createError(t){return b(this,void 0,void 0,(function*(){if(t instanceof Response){const e=T(t.headers);if(null==e)throw new y("The server returned data with an unknown encoding. The server may be down.");const r=this.serializer.deserialize(e,yield t.text());return new g(t.status,r.error,r.errorDescription,r.details,{cause:t})}return null!=t&&"AbortError"===t.name?new m("Request timed out",{cause:t}):t}))}}class I{constructor(t){this.logLevel=t}debug(t,e){this.logLevel.satisfies("debug")&&this.log("debug",t,e)}info(t,e){this.logLevel.satisfies("info")&&this.log("info",t,e)}warn(t,e){this.logLevel.satisfies("warn")&&this.log("warn",t,e)}error(t,e){this.logLevel.satisfies("error")&&this.log("error",t,e)}}class q extends I{log(t,e,r){const n=null==r?[e]:[e,r];switch(t){case"debug":return void console.debug(...n);case"info":return void console.info(...n);case"warn":return void console.warn(...n);case"error":return void console.error(...n)}}}const W=Object.freeze({DEBUG:1,INFO:2,WARN:4,ERROR:8});class ${constructor(t){this.level=t}satisfies(t){switch(t){case"debug":return Boolean(this.level&W.DEBUG);case"info":return Boolean(this.level&W.INFO);case"warn":return Boolean(this.level&W.WARN);case"error":return Boolean(this.level&W.ERROR)}}static from(t){switch(t){case"debug":return new $(W.DEBUG|W.INFO|W.WARN|W.ERROR);case"info":return new $(W.INFO|W.WARN|W.ERROR);case"warn":return new $(W.WARN|W.ERROR);case"error":return new $(W.ERROR)}}}const z=t=>"object"==typeof t&&null!==t&&"Object"===t.constructor.name,D=(t,e="")=>Array.isArray(t)?t.map(((t,r)=>D(t,""==e?r.toString():`${e}[${r}]`))).reduce(((t,e)=>Object.assign(t,e)),{}):z(t)?Object.entries(t).map((([t,r])=>D(r,""===e?t:`${e}[${t}]`))).reduce(((t,e)=>Object.assign(t,e)),{}):""===e?t:{[e]:t},L=(t,e="")=>Array.isArray(t)?t.flatMap(((t,r)=>L(t,""==e?r.toString():`${e}[]`))):z(t)?Object.entries(t).flatMap((([t,r])=>L(r,""===e?t:`${e}[${t}]`))):[[e,t]],N=(t,e)=>Array.isArray(t)?t.map((t=>N(t,e))):z(t)?Object.fromEntries(Object.entries(t).map((([t,r])=>[e(t),N(r,e)]))):t,B=(t,e)=>N(t,(t=>t.includes(":")||t.startsWith("_")?t:e(t)));class U{serialize(t,e){const r=B(e,h);switch(t){case"json":return JSON.stringify(r);case"multipart-form":{const t=new FormData;for(const[e,n]of Object.entries(D(r)))t.append(e,n);return t}case"querystring":return L(r).filter((([,t])=>null!=t)).map((([t,e])=>`${t}=${encodeURIComponent(e)}`)).join("&");default:throw new y(`Unknown content type ${t} to serialize.`)}}deserialize(t,e){if("json"===t)try{return B(JSON.parse(e),v)}catch(r){throw new w(`Malformed JSON ${e} returned from the server.`,t,e)}throw new w(`Unknown content type ${t} returned from the server.`,t,e)}}const C=t=>{const e=new U,r=new S(t,e),n=(t=>{const e=$.from(null!=t?t:"warn");return new q(e)})(t.log),o=new R(e,r,n),i=new k(o);return P(i,["api"])}}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return o[t](r,r.exports,a),r.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},a.a=(o,i,a)=>{var s;a&&((s=[]).d=-1);var c,u,l,f=new Set,h=o.exports,d=new Promise(((t,e)=>{l=e,u=t}));d[e]=h,d[t]=t=>(s&&t(s),f.forEach(t),d.catch((t=>{}))),o.exports=d,i((o=>{var i;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var i=[];i.d=0,o.then((t=>{a[e]=t,n(i)}),(t=>{a[r]=t,n(i)}));var a={};return a[t]=t=>t(i),a}}var s={};return s[t]=t=>{},s[e]=o,s})))(o);var a=()=>c.map((t=>{if(t[r])throw t[r];return t[e]})),u=new Promise((e=>{(i=()=>e(a)).r=0;var r=t=>t!==s&&!f.has(t)&&(f.add(t),t&&!t.d&&(i.r++,t.push(i)));c.map((e=>e[t](r)))}));return i.r?u:a()}),(t=>(t?l(d[r]=t):u(h),n(s)))),s&&s.d<0&&(s.d=0)},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var s=a(413);s=await s;