"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2058],{82058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b,i:()=>h,l:()=>y,p:()=>p,r:()=>j,s:()=>w});var s=r(31450),o=r(88762),n=r(60991),a=r(71552),i=r(76506),l=r(71252),c=r(50406),u=r(32101);r(92143),r(40642);const d=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,m={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function p(e){const t=e?.match(d);if(!t)return null;const[,r,s,o]=t;if(!r)return null;let n=null,a=null,i=null;const{devext:l,qaext:c,www:u}=m;if(s)if(n=r,o)switch(o.toLowerCase()){case"devext":({customBaseUrl:a,portalHostname:i}=l);break;case"qa":({customBaseUrl:a,portalHostname:i}=c);break;default:return null}else({customBaseUrl:a,portalHostname:i}=u);else switch(r.toLowerCase()){case"devext":({customBaseUrl:a,portalHostname:i}=l);break;case"qaext":({customBaseUrl:a,portalHostname:i}=c);break;case"www":({customBaseUrl:a,portalHostname:i}=u);break;default:return null}return{customBaseUrl:a,isPortal:!1,portalHostname:i,urlKey:n}}function h(e){return/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(e)}const f=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function w(e){const t=(0,u.P$)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!f.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function y(e,t,r=!1,s){return new Promise(((o,n)=>{if((0,c.Hc)(s))return void n(g());let i=()=>{m(),n(new Error(`Unable to load ${t}`))},u=()=>{const t=e;m(),o(t)},d=()=>{if(!e)return;const t=e;m(),t.src="",n(g())};const m=()=>{(0,a.h)("esri-image-decode")||(e.removeEventListener("error",i),e.removeEventListener("load",u)),i=null,u=null,e=null,(0,l.i)(s)&&s.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)};(0,l.i)(s)&&s.addEventListener("abort",d),(0,a.h)("esri-image-decode")?e.decode().then(u,i):(e.addEventListener("error",i),e.addEventListener("load",u))}))}function g(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function b(e,t){const i=(0,u.HK)(e),d=(0,u.jc)(e);d||i||(e=(0,u.Fv)(e));const m={url:e,requestOptions:{...(0,l.u)(t)}};let p=(0,u.oh)(e);if(p){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s;try{s=await e.before(t)}catch(e){r=S("request:interceptor",e,t)}if((s instanceof Error||s instanceof n.Z)&&(r=S("request:interceptor",s,t)),r)throw e.error&&e.error(r),r;return s}}(p,m);if(null!=e)return{data:e,getHeader:x,requestOptions:m.requestOptions,url:m.url};p.after||p.error||(p=null)}if(e=m.url,"image"===(t=m.requestOptions).responseType){if((0,a.h)("host-webworker")||(0,a.h)("host-node"))throw S("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),m)}else if(i)throw S("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),m);if("head"===t.method){if(t.body)throw S("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),m);if(i||d)throw S("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),m)}if(await async function(){(0,a.h)("host-webworker")?q||(q=await r.e(9768).then(r.bind(r,89768))):b._abortableFetch||(b._abortableFetch=globalThis.fetch.bind(globalThis))}(),q)return q.execute(e,t);const h=new AbortController;(0,c.fu)(t,(()=>h.abort()));const f={controller:h,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:p,params:m,redoRequest:!1,useIdentity:v.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},y=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,n=e.controller.signal,a=r.body;let i=null,l=null;if(k&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(l=a),e.fetchOptions={cache:r.cacheBust&&!b._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:v.priority,redirect:"follow",signal:n},(i||l)&&(e.fetchOptions.body=i||l),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||i?.get("token")),!e.hasToken&&s.Z.apiKey&&w(t)&&(r.query||(r.query={}),r.query.token=s.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!U(t)&&!(0,c.Hc)(n)){let s;"immediate"===r.authMode?(await P(),s=await o.id.getCredential(t,{signal:n}),e.credential=s):"no-prompt"===r.authMode?(await P(),s=await o.id.getCredential(t,{prompt:!1,signal:n}).catch((()=>{})),e.credential=s):o.id&&(s=o.id.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e);try{do{[t,r]=await D(e)}while(!await B(e,t,r))}catch(r){const s=S("request:server",r,e.params,t);throw s.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(s),s}const n=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(n)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,u.kl)(n)){const e=(0,u.P$)(n,!0);e&&v.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&function(e){s.Z.request.crossOriginNoCorsDomains||(s.Z.request.crossOriginNoCorsDomains={});const t=s.Z.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,u.P$)(r)??""]=0:(t[(0,u.P$)("http://"+r)??""]=0,t[(0,u.P$)("https://"+r)??""]=0)}(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&o.id){const e=o.id.findServerInfo(a.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,a.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t?.headers.get(e):x,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(f);return p?.after?.(y),y}let q;const v=s.Z.request,k="FormData"in globalThis,T=[499,498,403,401],C=["COM_0056","COM_0057","SB_0008"],O=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],x=()=>null,E=Symbol();function L(e){const t=(0,u.P$)(e);return!t||t.endsWith(".arcgis.com")||b._corsServers.includes(t)||(0,u.kl)(t)}function S(e,t,r,s){let o="Error";const a={url:r.url,requestOptions:r.requestOptions,getHeader:x,ssl:!1};if(t instanceof n.Z)return t.details?(t.details=(0,i.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=s&&(e=>s.headers.get(e)),r=s&&s.status,n=t.message;n&&(o=n),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=E in t?t[E]:t}return(0,c.D_)(t)?(0,c.zE)():new n.Z(e,o,a)}async function P(){o.id||await Promise.all([r.e(6467),r.e(9798)]).then(r.bind(r,89798))}function U(e){return O.some((t=>t.test(e)))}async function D(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions??{},i=(0,u.jc)(t)||(0,u.HK)(t),l=r.responseType||"json",d=i?0:null!=r.timeout?r.timeout:v.timeout;let m=!1;if(!i){e.useSSL&&(t=(0,u.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,u.ZN)(t,"request.preventCache",Date.now()));let i={...r.query};e.credentialToken&&(i.token=e.credentialToken);let l=(0,u.B7)(i);(0,a.h)("esri-url-encodes-apostrophe")&&(l=l.replace(/'/g,"%27"));const c=t.length+1+l.length;let d;m="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||c>v.maxUrlLength;const p=r.useProxy||!!(0,u.ed)(t);if(p){const e=(0,u.b7)(t);d=e.path,!m&&d.length+1+c>v.maxUrlLength&&(m=!0),e.query&&(i={...e.query,...i})}if("HEAD"===n.method&&(m||p)){if(m){if(c>v.maxUrlLength)throw S("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw S("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(p)throw S("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(m?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,u.fl)(t,i):(n.body=(0,u.B7)(i),n.headers||(n.headers={}),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,u.fl)(t,i),p&&(e.useProxy=!0,t=`${d}?${t}`),i.token&&k&&n.body instanceof FormData&&!h(t)&&n.body.set("token",i.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,u.D6)(t,(0,u.TI)()))if((0,u.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include",function(e){const t=s.Z.request.crossOriginNoCorsDomains;if(t){let r=(0,u.P$)(e);if(r)return r=r.toLowerCase(),!(0,u.D6)(r,(0,u.TI)())&&t[r]<Date.now()-36e5}return!1}(t)&&await async function(e){const t=s.Z.request.crossOriginNoCorsDomains,r=(0,u.P$)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const o=(0,u.mN)(e);e=o.path,"json"===o.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}(m?(0,u.fl)(t,i):t))}let p,f,w=0,y=!1;d>0&&(w=setTimeout((()=>{y=!0,e.controller.abort()}),d));try{if("native-request-init"===r.responseType)f=n,f.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||m||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!i&&!e.useProxy&&v.proxyUrl&&!L(t)){if(p=await b._abortableFetch(t,n),e.useProxy||function(e){const t=(0,u.P$)(e);t&&!b._corsServers.includes(t)&&b._corsServers.push(t)}(t),"native"===r.responseType)f=p;else if("HEAD"!==n.method)if(p.ok){switch(l){case"array-buffer":f=await p.arrayBuffer();break;case"blob":case"image":f=await p.blob();break;default:f=await p.text()}if(w&&(clearTimeout(w),w=0),"json"===l||"xml"===l||"document"===l)if(f)switch(l){case"json":f=JSON.parse(f);break;case"xml":f=H(f,"application/xml");break;case"document":f=H(f,"text/html")}else f=null;if(f){if("array-buffer"===l||"blob"===l){const e=p.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&f["blob"===l?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e)}catch{}}"image"===l&&f instanceof Blob&&(f=await _(URL.createObjectURL(f),e,!0))}}else f=await p.text()}else f=await _(t,e)}catch(s){if("AbortError"===s.name){if(y)throw new Error("Timeout exceeded");throw(0,c.zE)("Request canceled")}if(!(!p&&s instanceof TypeError&&v.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||L(t))throw s;e.redoRequest=!0,(0,u.tD)({proxyUrl:v.proxyUrl,urlPrefix:(0,u.P$)(t)??""})}finally{w&&clearTimeout(w)}return[p,f]}function H(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function B(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const s=e.params.requestOptions;if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0;let n,a;if(!t.ok)throw n=new Error(`Unable to load ${t.url} status: ${t.status}`),n[E]=r,n;r&&(r.error?n=r.error:"error"===r.status&&Array.isArray(r.messages)&&(n={...r},n[E]=r,n.details=r.messages));let i,l=null;n&&(a=Number(n.code),l=n.hasOwnProperty("subcode")?Number(n.subcode):null,i=n.messageCode,i=i&&i.toUpperCase());const c=s.authMode;if(403===a&&(4===l||n.message&&n.message.toLowerCase().includes("ssl")&&!n.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&T.includes(a)&&!U(e.params.url)&&(403!==a||i&&!C.includes(i)&&(null==l||2===l&&e.credentialToken))){await P();try{const t=await o.id.getCredential(e.params.url,{error:S("request:server",n,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;n=t}}if(n)throw n;return!0}function _(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=v.priority,o.src=e,y(o,e,r,s)}b._abortableFetch=null,b._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const j=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}))}}]);