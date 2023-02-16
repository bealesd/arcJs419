self.webpackChunkRemoteClient([18],{195:function(e,t,n){"use strict";n(11),n(17),n(1),n(19),n(4),n(18),n(6);var r=n(0),o=(n(9),n(3)),i=(n(7),n(15),n(16),n(12),n(2)),s=(n(10),n(8),n(5),n(13),n(14),n(21),n(20),n(22),n(23));const a=r.a.getLogger("esri.core.workers.Connection");t.a=class{constructor(){this._clients=new Array,this._clientPromises=new Array,this._clientIdx=0}destroy(){this.close()}get closed(){return!this._clients||!this._clients.length}open(e,t){return new Promise((n,r)=>{let o=!0;const a=e=>{Object(i.v)(t.signal),o&&(o=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length;for(let o=0;o<e.length;++o){const c=e[o];Object(i.o)(c)?this._clientPromises[o]=c.then(e=>(this._clients[o]=new s.default(e,t),a(n),this._clients[o]),()=>(a(r),null)):(this._clients[o]=new s.default(c,t),this._clientPromises[o]=Promise.resolve(this._clients[o]),a(n))}})}broadcast(e,t,n){const r=new Array(this._clientPromises.length);for(let o=0;o<this._clientPromises.length;++o){const i=this._clientPromises[o];r[o]=i.then(r=>r.invoke(e,t,n))}return r}close(){for(const e of this._clientPromises)e.then(e=>e.close());this._clients.length=0,this._clientPromises.length=0}getAvailableClient(){let e;for(let t=0;t<this._clients.length;++t){const n=this._clients[t];if(n){if(!n.isBusy())return Promise.resolve(n)}else e=e||[],e.push(this._clientPromises[t])}return e?Promise.race(e):(this._clientIdx=(this._clientIdx+1)%this._clients.length,Promise.resolve(this._clients[this._clientIdx]))}invoke(e,t,n){let r=null;return Array.isArray(n)?(a.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),r={transferList:n}):r=n,this.closed?Promise.reject(new Error("Connection closed")):this.getAvailableClient().then(n=>n.invoke(e,t,r))}on(e,t){return Promise.all(this._clientPromises).then(()=>Object(o.h)(this._clients.map(n=>n.on(e,t))))}openPorts(){return new Promise(e=>{const t=new Array(this._clientPromises.length);let n=t.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then(o=>{t[r]=o.openPort(),0==--n&&e(t)})})}get test(){return{numClients:this._clients.length}}}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return D}));n(11),n(17);var r=n(1),o=(n(19),n(4),n(18)),i=n(6),s=n(0),a=(n(9),n(3),n(7),n(15),n(16),n(12),n(2)),c=(n(10),n(8)),u=(n(5),n(13),n(14)),l=(n(43),n(21),n(57)),f=(n(58),n(77),n(27),n(69)),h=(n(20),n(22),n(23)),d=n(195);let b=null;b=Object(u.y)(Object(f.a)("esri/core/workers/init.js"));const g={};g.baseUrl=Object(u.y)(Object(f.a)("dojo/")),g.packages=[{name:"esri",location:"../esri"}];class m{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...n)=>e[t](...n)})}}const O=r.h.MutationObserver||r.h.WebKitMutationObserver,j=function(){let e;if(r.h.process&&r.h.process.nextTick)e=e=>{r.h.process.nextTick(e)};else if(r.h.Promise)e=e=>{r.h.Promise.resolve().then(e)};else if(O){const t=[],n=document.createElement("div");new O(()=>{for(;t.length>0;)t.shift()()}).observe(n,{attributes:!0}),e=e=>{t.push(e),n.setAttribute("queueStatus","1")}}return e}(),w=(()=>{const e=r.h.MessageEvent;try{new e("message",{data:null})}catch{return(e,t={})=>{const{data:n,bubbles:r=!1,cancelable:o=!1}=t,i=document.createEvent("Event");return i.initEvent(e,r,o),i.data=n,i}}return(t,n)=>new e(t,n)})();class p{constructor(){this._dispatcher=new m,this._workerPostMessage({type:h.M.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){j(()=>{this._workerMessageHandler(w("message",{data:e}))})}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,n){this._dispatcher.addEventListener(e,t,n)}removeEventListener(e,t,n){this._dispatcher.removeEventListener(e,t,n)}_workerPostMessage(e){j(()=>{this.dispatchEvent(w("message",{data:e}))})}async _workerMessageHandler(e){const t=Object(h.r)(e);if(t&&t.type===h.M.OPEN){const{modulePath:e,jobId:n}=t;let r=await h.default.loadWorker(e);r||(r=await import(e));const o=h.default.connect(r);this._workerPostMessage({type:h.M.OPENED,jobId:n,data:o})}}}const y=s.a.getLogger("esri.core.workers");r.i.add("esri-workers-arraybuffer-transfer",!Object(r.i)("safari")||Object(r.i)("safari")>=12);const{HANDSHAKE:A}=h.M;let v,E;const k="Failed to create Worker. Fallback to execute module in main thread";async function _(e){return new Promise(t=>{function n(o){const i=Object(h.r)(o);i&&i.type===A&&(e.removeEventListener("message",n),e.removeEventListener("error",r),t(e))}function r(t){t.preventDefault(),e.removeEventListener("message",n),e.removeEventListener("error",r),y.warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new p).addEventListener("message",n),e.addEventListener("error",r)}e.addEventListener("message",n),e.addEventListener("error",r)})}let I=0;const S=s.a.getLogger("esri.core.workers"),{ABORT:P,INVOKE:L,OPEN:N,OPENED:M,RESPONSE:R}=h.M;class U{constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",e=>{e.preventDefault(),S.error(e)})}static async create(e){const t=await async function(){if(!Object(r.i)("esri-workers"))return _(new p);if(!v&&!E)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace('"{CONFIGURATION}"',`'${function(){let e;if(null!=i.a.default){const t={...i.a};delete t.default,e=JSON.parse(JSON.stringify(t))}else e=JSON.parse(JSON.stringify(i.a));e.assetsPath=Object(u.y)(e.assetsPath),e.request.interceptors=[],e.log.interceptors=[],e.locale=Object(l.b)(),e.has={"csp-restrictions":Object(r.i)("csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":Object(r.i)("esri-2d-update-debug"),"esri-2d-query-centroid-enabled":Object(r.i)("esri-2d-query-centroid-enabled"),"featurelayer-pbf":Object(r.i)("featurelayer-pbf"),"featurelayer-snapshot-point-threshold":Object(r.i)("featurelayer-snapshot-point-threshold"),"esri-atomics":Object(r.i)("esri-atomics"),"esri-shared-array-buffer":Object(r.i)("esri-shared-array-buffer"),"esri-tiles-debug":Object(r.i)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":Object(r.i)("esri-workers-arraybuffer-transfer"),"host-webworker":1},e.workers.loaderUrl?e.workers.loaderUrl=Object(u.y)(e.workers.loaderUrl):b&&(e.workers.loaderUrl=b),e.workers.workerPath?e.workers.workerPath=Object(u.y)(e.workers.workerPath):e.workers.workerPath="esri/core/workers/RemoteClient";const t=i.a.workers.loaderConfig,n=function(e){var t;const n={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages&&e.packages.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(n.async=!0),e.hasOwnProperty("isDebug")||(n.isDebug=!1),e.baseUrl||(n.baseUrl=g.baseUrl),null==(t=g.packages)||t.forEach(e=>{!function(e,t){for(const n of e)if(n.name===t.name)return;e.push(t)}(n.packages,e)}),n}({baseUrl:null==t?void 0:t.baseUrl,locale:Object(l.b)(),has:{"csp-restrictions":Object(r.i)("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1,...null==t?void 0:t.has},map:{...null==t?void 0:t.map},paths:{...null==t?void 0:t.paths},packages:(null==t?void 0:t.packages)||[]}),s={version:o.f,buildDate:o.b,revision:o.d};return JSON.stringify({esriConfig:e,loaderConfig:n,kernelInfo:s})}()}'`);v=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){E=e||{}}let e;if(v)try{e=new Worker(v,{name:"esri-worker-"+I++})}catch(t){y.warn(k,E),e=new p}else y.warn(k,E),e=new p;return _(e)}();return new U(t,e)}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:n}=t,r=Object(h.n)();return new Promise((t,o)=>{const i={resolve:t,reject:o,abortHandle:Object(a.r)(n,()=>{this._outJobs.delete(r),this._post({type:P,jobId:r})})};this._outJobs.set(r,i),this._post({type:N,jobId:r,modulePath:e})})}_onMessage(e){const t=Object(h.r)(e);if(t)switch(t.type){case M:this._onOpenedMessage(t);break;case R:this._onResponseMessage(t);break;case P:this._onAbortMessage(t);break;case L:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,n=e.jobId,r=t.get(n);r&&(r.controller&&r.controller.abort(),t.delete(n))}_onInvokeMessage(e){const{methodName:t,jobId:n,data:r,abortable:i}=e,s=i?Object(a.d)():null,c=this._inJobs,u=o.g[t];let l;try{if("function"!=typeof u)throw new TypeError(t+" is not a function");l=u.call(null,r,{signal:s?s.signal:null})}catch(e){return void this._post({type:R,jobId:n,error:Object(h.t)(e)})}Object(a.o)(l)?(c.set(n,{controller:s,promise:l}),l.then(e=>{c.has(n)&&(c.delete(n),this._post({type:R,jobId:n},e))},e=>{c.has(n)&&(c.delete(n),e||(e={message:"Error encountered at method"+t}),Object(a.m)(e)||this._post({type:R,jobId:n,error:Object(h.t)(e||{message:"Error encountered at method "+t})}))})):this._post({type:R,jobId:n},l)}_onOpenedMessage(e){var t;const{jobId:n,data:r}=e,o=this._outJobs.get(n);o&&(this._outJobs.delete(n),null==(t=o.abortHandle)||t.remove(),o.resolve(r))}_onResponseMessage(e){var t;const{jobId:n,error:r,data:o}=e,i=this._outJobs.get(n);i&&(this._outJobs.delete(n),null==(t=i.abortHandle)||t.remove(),r?i.reject(c.a.fromJSON(JSON.parse(r))):i.resolve(o))}_post(e,t,n){return Object(h.p)(this.worker,e,t,n)}}let x=Object(r.i)("esri-workers-debug")?1:Object(r.i)("host-browser")?navigator.hardwareConcurrency-1:0;x||(x=Object(r.i)("safari")&&Object(r.i)("mac")||Object(r.i)("trident")?7:2);let F=0;const C=[];function D(e,t){return T(e,{client:t})}async function T(e,t){const n=new d.a;return await n.open(e,t),n}async function W(e,t={}){if("string"!=typeof e)throw new c.a("workers:undefined-module","modulePath is missing");let n=t.strategy||"distributed";if(Object(r.i)("host-webworker")&&!Object(r.i)("esri-workers")&&(n="local"),"local"===n){let n=await h.default.loadWorker(e);n||(n=await import(e)),Object(a.v)(t.signal);const r=t.client||n;return T([h.default.connect(n)],{...t,client:r})}if(await J(),Object(a.v)(t.signal),"dedicated"===n){const n=F++%x;return T([await C[n].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const n=Math.min(t.maxNumWorkers,x);if(n<x){const r=new Array(n);for(let o=0;o<n;++o){const n=F++%x;r[o]=C[n].open(e,t)}return T(r,t)}}return T(C.map(n=>n.open(e,t)),t)}let Q,H=null;async function J(){if(H)return H;Q=Object(a.d)();const e=[];for(let t=0;t<x;t++){const n=U.create(t).then(e=>(C[t]=e,e));e.push(n)}return H=Promise.all(e),H}},330:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return U})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return D})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return x})),n.d(t,"o",(function(){return T})),n.d(t,"p",(function(){return _})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return A})),n.d(t,"s",(function(){return S})),n.d(t,"t",(function(){return p})),n.d(t,"u",(function(){return F})),n.d(t,"v",(function(){return C})),n.d(t,"w",(function(){return y})),n.d(t,"x",(function(){return M})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return k})),n.d(t,"A",(function(){return O})),n.d(t,"B",(function(){return I})),n.d(t,"C",(function(){return j}));n(11),n(17),n(1),n(19),n(4),n(18),n(6),n(0),n(9),n(3),n(7),n(15),n(16),n(12),n(2),n(10),n(8),n(5),n(13),n(42),n(14),n(48),n(43),n(45),n(44),n(21),n(46),n(57),n(58),n(77),n(27),n(69),n(51),n(52),n(49),n(54),n(50),n(65),n(63),n(62),n(60),n(61),n(67);var r=n(59),o=(n(64),n(20),n(22),n(23),n(195),n(237));function i(e){var t;return Array.isArray(e)?null==(t=e[0])?void 0:t.spatialReference:null==e?void 0:e.spatialReference}function s(e){return e?Array.isArray(e)?e.map(s):e.toJSON?e.toJSON():e:e}function a(e){return Array.isArray(e)?e.map(e=>Object(r.a)(e)):Object(r.a)(e)}let c;async function u(e,t){return(await async function(){return c||(c=Object(o.a)("geometryEngineWorker",{strategy:"distributed"})),c}()).invoke("executeGEOperation",{operation:e,parameters:s(t)})}async function l(e,t){return a(await u("clip",[i(e),e,t]))}async function f(e,t){return a(await u("cut",[i(e),e,t]))}function h(e,t){return u("contains",[i(e),e,t])}function d(e,t){return u("crosses",[i(e),e,t])}function b(e,t,n){return u("distance",[i(e),e,t,n])}function g(e,t){return u("equals",[i(e),e,t])}function m(e,t){return u("intersects",[i(e),e,t])}function O(e,t){return u("touches",[i(e),e,t])}function j(e,t){return u("within",[i(e),e,t])}function w(e,t){return u("disjoint",[i(e),e,t])}function p(e,t){return u("overlaps",[i(e),e,t])}function y(e,t,n){return u("relate",[i(e),e,t,n])}function A(e){return u("isSimple",[i(e),e])}async function v(e){return a(await u("simplify",[i(e),e]))}async function E(e,t){return a(await u("difference",[i(e),e,t]))}async function k(e,t){return a(await u("symmetricDifference",[i(e),e,t]))}async function _(e,t){return a(await u("intersect",[i(e),e,t]))}async function I(e,t=null){const n=function(e,t){let n;return Array.isArray(e)?n=e:(n=[],n.push(e),null!=t&&n.push(t)),n}(e,t);return a(await u("union",[i(n),n]))}async function S(e,t,n,r,o,s){return a(await u("offset",[i(e),e,t,n,r,o,s]))}async function P(e,t,n,r=!1){const o=[i(e),e,t,n,r];return a(await u("buffer",o))}async function L(e,t,n,r,o,s){const c=[i(e),e,t,n,r,o,s];return a(await u("geodesicBuffer",c))}function N(e){return"xmin"in e?e.center:"x"in e?e:e.extent.center}async function M(e,t,n){var r;if(null==e)throw new Error("Illegal Argument Exception");const o=e.spatialReference;n=null!=(r=n)?r:N(e);const i=e.constructor.fromJSON(await u("rotate",[o,e,t,n]));return i.spatialReference=o,i}async function R(e,t,n,r){return a(await u("generalize",[i(e),e,t,n,r]))}async function U(e,t,n){return a(await u("densify",[i(e),e,t,n]))}async function x(e,t,n,r=0){return a(await u("geodesicDensify",[i(e),e,t,n,r]))}function F(e,t){return u("planarArea",[i(e),e,t])}function C(e,t){return u("planarLength",[i(e),e,t])}function D(e,t,n){return u("geodesicArea",[i(e),e,t,n])}function T(e,t,n){return u("geodesicLength",[i(e),e,t,n])}},458:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return g}));n(11),n(17),n(1),n(19),n(4);var r=n(18),o=(n(6),n(0),n(9),n(3),n(7),n(15),n(16),n(12),n(2),n(10),n(8),n(5),n(13),n(42),n(14),n(48),n(43),n(47),n(45),n(44),n(21),n(46),n(57),n(58),n(77),n(27),n(69),n(51)),i=n(52),s=(n(49),n(54),n(50)),a=(n(65),n(63)),c=n(62),u=(n(60),n(61)),l=(n(67),n(59)),f=(n(64),n(78),n(71),n(79),n(80),n(82),n(175),n(20),n(173),n(22),n(23),n(195),n(237),n(330)),h=(n(170),n(199),n(196),n(333),n(353),n(300));n(272),n(288);function d(e){return 0===r.f.indexOf("4.")?c.a.fromExtent(e):new c.a({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function b(e){if(Object(h.p)(e,2,2),e[0]instanceof o.a&&e[1]instanceof o.a);else if(e[0]instanceof o.a&&null===e[1]);else if(e[1]instanceof o.a&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new Error("Illegal Argument")}function g(e){"async"===e.mode&&(e.functions.disjoint=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null===n[0]||null===n[1]||Object(f.h)(n[0],n[1])}))},e.functions.intersects=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null!==n[0]&&null!==n[1]&&Object(f.q)(n[0],n[1])}))},e.functions.touches=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null!==n[0]&&null!==n[1]&&Object(f.A)(n[0],n[1])}))},e.functions.crosses=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null!==n[0]&&null!==n[1]&&Object(f.d)(n[0],n[1])}))},e.functions.within=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null!==n[0]&&null!==n[1]&&Object(f.C)(n[0],n[1])}))},e.functions.contains=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null!==n[0]&&null!==n[1]&&Object(f.c)(n[0],n[1])}))},e.functions.overlaps=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null!==n[0]&&null!==n[1]&&Object(f.t)(n[0],n[1])}))},e.functions.equals=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return Object(h.p)(n,2,2),n[0]===n[1]||(n[0]instanceof o.a&&n[1]instanceof o.a?Object(f.j)(n[0],n[1]):!(!Object(h.L)(n[0])||!Object(h.L)(n[1]))&&n[0].getTime()===n[1].getTime())}))},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,3,3),n[0]instanceof o.a&&n[1]instanceof o.a)return Object(f.w)(n[0],n[1],Object(h.t)(n[2]));if(n[0]instanceof o.a&&null===n[1])return!1;if(n[1]instanceof o.a&&null===n[0])return!1;if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))},e.functions.intersection=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null===n[0]||null===n[1]?null:Object(f.p)(n[0],n[1])}))},e.functions.union=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){const i=[];if(0===(r=Object(h.Q)(r)).length)throw new Error("Function called with wrong number of Parameters");if(1===r.length)if(Object(h.u)(r[0])){const e=Object(h.Q)(r[0]);for(let t=0;t<e.length;t++)if(null!==e[t]){if(!(e[t]instanceof o.a))throw new Error("Illegal Argument");i.push(e[t])}}else{if(!Object(h.x)(r[0])){if(r[0]instanceof o.a)return Object(h.H)(Object(h.S)(r[0]),t.spatialReference);if(null===r[0])return null;throw new Error("Illegal Argument")}{const e=Object(h.Q)(r[0].toArray());for(let t=0;t<e.length;t++)if(null!==e[t]){if(!(e[t]instanceof o.a))throw new Error("Illegal Argument");i.push(e[t])}}}else for(let e=0;e<r.length;e++)if(null!==r[e]){if(!(r[e]instanceof o.a))throw new Error("Illegal Argument");i.push(r[e])}return 0===i.length?null:Object(f.B)(i)}))},e.functions.difference=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null!==n[0]&&null===n[1]?Object(h.S)(n[0]):null===n[0]?null:Object(f.g)(n[0],n[1])}))},e.functions.symmetricdifference=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return b(n=Object(h.Q)(n)),null===n[0]&&null===n[1]?null:null===n[0]?Object(h.S)(n[1]):null===n[1]?Object(h.S)(n[0]):Object(f.z)(n[0],n[1])}))},e.functions.clip=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,2),!(n[1]instanceof s.b)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return null===n[1]?null:Object(f.b)(n[0],n[1])}))},e.functions.cut=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,2),!(n[1]instanceof u.a)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return[];if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return null===n[1]?[Object(h.S)(n[0])]:Object(f.e)(n[0],n[1])}))},e.functions.area=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(h.p)(r,1,2),null===(r=Object(h.Q)(r))[0])return 0;if(Object(h.z)(r[0]))return r[0].sumArea(Object(h.T)(Object(h.U)(r[1],-1)),!1,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(h.u)(r[0])||Object(h.x)(r[0])){const e=Object(h.V)(r[0],t.spatialReference);return null===e?0:Object(f.u)(e,Object(h.T)(Object(h.U)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(f.u)(r[0],Object(h.T)(Object(h.U)(r[1],-1)))}))},e.functions.areageodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(h.p)(r,1,2),null===(r=Object(h.Q)(r))[0])return 0;if(Object(h.z)(r[0]))return r[0].sumArea(Object(h.T)(Object(h.U)(r[1],-1)),!0,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(h.u)(r[0])||Object(h.x)(r[0])){const e=Object(h.V)(r[0],t.spatialReference);return null===e?0:Object(f.l)(e,Object(h.T)(Object(h.U)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(f.l)(r[0],Object(h.T)(Object(h.U)(r[1],-1)))}))},e.functions.length=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(h.p)(r,1,2),null===(r=Object(h.Q)(r))[0])return 0;if(Object(h.z)(r[0]))return r[0].sumLength(Object(h.W)(Object(h.U)(r[1],-1)),!1,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(h.u)(r[0])||Object(h.x)(r[0])){const e=Object(h.X)(r[0],t.spatialReference);return null===e?0:Object(f.v)(e,Object(h.W)(Object(h.U)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(f.v)(r[0],Object(h.W)(Object(h.U)(r[1],-1)))}))},e.functions.lengthgeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(h.p)(r,1,2),null===(r=Object(h.Q)(r))[0])return 0;if(Object(h.z)(r[0]))return r[0].sumLength(Object(h.W)(Object(h.U)(r[1],-1)),!0,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(h.u)(r[0])||Object(h.x)(r[0])){const e=Object(h.X)(r[0],t.spatialReference);return null===e?0:Object(f.o)(e,Object(h.W)(Object(h.U)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(f.o)(r[0],Object(h.W)(Object(h.U)(r[1],-1)))}))},e.functions.distance=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){r=Object(h.Q)(r),Object(h.p)(r,2,3);let i=r[0];(Object(h.u)(r[0])||Object(h.x)(r[0]))&&(i=Object(h.Y)(r[0],t.spatialReference));let s=r[1];if((Object(h.u)(r[1])||Object(h.x)(r[1]))&&(s=Object(h.Y)(r[1],t.spatialReference)),!(i instanceof o.a))throw new Error("Illegal Argument");if(!(s instanceof o.a))throw new Error("Illegal Argument");return Object(f.i)(i,s,Object(h.W)(Object(h.U)(r[2],-1)))}))},e.functions.distancegeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){n=Object(h.Q)(n),Object(h.p)(n,2,3);const r=n[0],o=n[1];if(!(r instanceof i.a))throw new Error("Illegal Argument");if(!(o instanceof i.a))throw new Error("Illegal Argument");const s=new u.a({paths:[],spatialReference:r.spatialReference});return s.addPath([r,o]),Object(f.o)(s,Object(h.W)(Object(h.U)(n[2],-1)))}))},e.functions.densify=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(h.C)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");if(r<=0)throw new Error("Illegal Argument");return n[0]instanceof c.a||n[0]instanceof u.a?Object(f.f)(n[0],r,Object(h.W)(Object(h.U)(n[2],-1))):n[0]instanceof s.b?Object(f.f)(d(n[0]),r,Object(h.W)(Object(h.U)(n[2],-1))):n[0]}))},e.functions.densifygeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(h.C)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");if(r<=0)throw new Error("Illegal Argument");return n[0]instanceof c.a||n[0]instanceof u.a?Object(f.n)(n[0],r,Object(h.W)(Object(h.U)(n[2],-1))):n[0]instanceof s.b?Object(f.n)(d(n[0]),r,Object(h.W)(Object(h.U)(n[2],-1))):n[0]}))},e.functions.generalize=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,4),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(h.C)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");return Object(f.k)(n[0],r,Object(h.Z)(Object(h.U)(n[2],!0)),Object(h.W)(Object(h.U)(n[3],-1)))}))},e.functions.buffer=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(h.C)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");return 0===r?Object(h.S)(n[0]):Object(f.a)(n[0],r,Object(h.W)(Object(h.U)(n[2],-1)))}))},e.functions.buffergeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(h.C)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");return 0===r?Object(h.S)(n[0]):Object(f.m)(n[0],r,Object(h.W)(Object(h.U)(n[2],-1)))}))},e.functions.offset=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,2,6),null===n[0])return null;if(!(n[0]instanceof c.a||n[0]instanceof u.a))throw new Error("Illegal Argument");const r=Object(h.C)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");const o=Object(h.C)(Object(h.U)(n[4],10));if(isNaN(o))throw new Error("Illegal Argument");const i=Object(h.C)(Object(h.U)(n[5],0));if(isNaN(i))throw new Error("Illegal Argument");return Object(f.s)(n[0],r,Object(h.W)(Object(h.U)(n[2],-1)),Object(h.t)(Object(h.U)(n[3],"round")).toLowerCase(),o,i)}))},e.functions.rotate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){n=Object(h.Q)(n),Object(h.p)(n,2,3);let r=n[0];if(null===r)return null;if(!(r instanceof o.a))throw new Error("Illegal Argument");r instanceof s.b&&(r=c.a.fromExtent(r));const a=Object(h.C)(n[1]);if(isNaN(a))throw new Error("Illegal Argument");const u=Object(h.U)(n[2],null);if(null===u)return Object(f.x)(r,a);if(u instanceof i.a)return Object(f.x)(r,a,u);throw new Error("Illegal Argument")}))},e.functions.centroid=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(r=Object(h.Q)(r),Object(h.p)(r,1,1),null===r[0])return null;let l=r[0];if((Object(h.u)(r[0])||Object(h.x)(r[0]))&&(l=Object(h.Y)(r[0],t.spatialReference)),null===l)return null;if(!(l instanceof o.a))throw new Error("Illegal Argument");return l instanceof i.a?Object(h.H)(Object(h.S)(r[0]),t.spatialReference):l instanceof c.a?l.centroid:l instanceof u.a?Object(h._)(l):l instanceof a.a?Object(h.$)(l):l instanceof s.b?l.center:null}))},e.functions.multiparttosinglepart=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){r=Object(h.Q)(r),Object(h.p)(r,1,1);const d=[];if(null===r[0])return null;if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return r[0]instanceof i.a||r[0]instanceof s.b?[Object(h.H)(Object(h.S)(r[0]),t.spatialReference)]:Object(f.y)(r[0]).then(e=>{if(e instanceof c.a){const t=[],n=[];for(let r=0;r<e.rings.length;r++)if(e.isClockwise(e.rings[r])){const n=Object(l.a)({rings:[e.rings[r]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});t.push(n)}else n.push({ring:e.rings[r],pt:e.getPoint(r,0)});for(let e=0;e<n.length;e++)for(let r=0;r<t.length;r++)if(t[r].contains(n[e].pt)){t[r].addRing(n[e].ring);break}return t}if(e instanceof u.a){const t=[];for(let n=0;n<e.paths.length;n++){const r=Object(l.a)({paths:[e.paths[n]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});t.push(r)}return t}if(r[0]instanceof a.a){const e=Object(h.H)(Object(h.S)(r[0]),t.spatialReference);for(let t=0;t<e.points.length;t++)d.push(e.getPoint(t));return d}return null})}))},e.functions.issimple=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,1,1),null===n[0])return!0;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return Object(f.r)(n[0])}))},e.functions.simplify=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(h.Q)(n),Object(h.p)(n,1,1),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return Object(f.y)(n[0])}))})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return v}));var r=n(0),o=n(43),i=n(57);const s={year:"numeric",month:"numeric",day:"numeric"},a={year:"numeric",month:"long",day:"numeric"},c={year:"numeric",month:"short",day:"numeric"},u={year:"numeric",month:"long",weekday:"long",day:"numeric"},l={hour:"numeric",minute:"numeric"},f={...l,second:"numeric"},h={"short-date":s,"short-date-short-time":{...s,...l},"short-date-short-time-24":{...s,...l,hour12:!1},"short-date-long-time":{...s,...f},"short-date-long-time-24":{...s,...f,hour12:!1},"short-date-le":s,"short-date-le-short-time":{...s,...l},"short-date-le-short-time-24":{...s,...l,hour12:!1},"short-date-le-long-time":{...s,...f},"short-date-le-long-time-24":{...s,...f,hour12:!1},"long-month-day-year":a,"long-month-day-year-short-time":{...a,...l},"long-month-day-year-short-time-24":{...a,...l,hour12:!1},"long-month-day-year-long-time":{...a,...f},"long-month-day-year-long-time-24":{...a,...f,hour12:!1},"day-short-month-year":c,"day-short-month-year-short-time":{...c,...l},"day-short-month-year-short-time-24":{...c,...l,hour12:!1},"day-short-month-year-long-time":{...c,...f},"day-short-month-year-long-time-24":{...c,...f,hour12:!1},"long-date":u,"long-date-short-time":{...u,...l},"long-date-short-time-24":{...u,...l,hour12:!1},"long-date-long-time":{...u,...f},"long-date-long-time-24":{...u,...f,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":l,"long-time":f},d=Object(o.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),b=(d.toJSON.bind(d),d.fromJSON.bind(d),{ar:"ar-u-nu-latn-ca-gregory"});let g=new WeakMap,m=h["short-date-short-time"];function O(e){return h[e]||null}function j(e,t){return function(e){const t=e||m;if(!g.has(t)){const e=Object(i.b)(),n=b[Object(i.b)()]||e;g.set(t,new Intl.DateTimeFormat(n,t))}return g.get(t)}(t).format(e)}Object(i.a)(()=>{g=new WeakMap,m=h["short-date-short-time"]});const w={ar:"ar-u-nu-latn"};let p=new WeakMap,y={};function A(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function v(e,t){return function(e){const t=e||y;if(!p.has(t)){const n=Object(i.b)(),r=w[Object(i.b)()]||n;p.set(t,new Intl.NumberFormat(r,e))}return Object(r.b)(p.get(t))}(t).format(e)}Object(i.a)(()=>{p=new WeakMap,y={}})},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(1),o=n(4),i=(n(18),n(6),n(0)),s=n(9),a=n(2),c=(n(10),n(8)),u=(n(14),n(43),n(57)),l=n(58),f=n(27),h=n(69);const d=i.a.getLogger("esri.intl");function b(e,t,n={}){const{format:r={}}=n;return Object(s.c)(e,e=>function(e,t,n){let r,i;const s=e.indexOf(":");if(-1===s?r=e.trim():(r=e.slice(0,s).trim(),i=e.slice(s+1).trim()),!r)return"";const a=Object(o.b)(r,t);if(null==a)return"";const c=n[i]||n[r];return c?function(e,t){switch(t.type){case"date":return Object(l.a)(e,t.intlOptions);case"number":return Object(l.d)(e,t.intlOptions);default:return d.warn("missing format descriptor for key {key}"),g(e)}}(a,c):i?function(e,t){switch(t.toLowerCase()){case"dateformat":return Object(l.a)(e);case"numberformat":return Object(l.d)(e);default:return d.warn("inline format is unsupported since 4.12: "+t),/^(dateformat|datestring)/i.test(t)?Object(l.a)(e):/^numberformat/i.test(t)?Object(l.d)(e):g(e)}}(a,i):g(a)}(e,t,r))}function g(e){switch(typeof e){case"string":return e;case"number":return Object(l.d)(e);case"boolean":return""+e;default:return e instanceof Date?Object(l.a)(e):""}}const m=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,O=new Set(["ar","bs","ca","cs","da","de","el","en","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"]),j=[],w=new Map;async function p(e){const t=Object(u.b)();w.has(e)||w.set(e,async function(e,t){const n=[];for(const r of j)if(y(r.pattern,e))try{return await r.fetchMessageBundle(e,t)}catch(e){n.push(e)}if(n.length)throw new c.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:n});throw new c.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t));const n=w.get(e);return await A.add(n),n}function y(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(u.a)(()=>{w.clear()});const A=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(a.f)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}};async function v(e){if(Object(i.h)(k.fetchBundleAsset))return k.fetchBundleAsset(e);const t=await Object(f.default)(e,{responseType:"text"});return JSON.parse(t.data)}class E{constructor({base:e="",pattern:t,location:n=new URL(window.location.href)}){let o;o="string"==typeof n?e=>new URL(e,new URL(n,r.h.location)).href:n instanceof URL?e=>new URL(e,n).href:n,this.pattern="string"==typeof t?new RegExp("^"+t):t,this.getAssetUrl=o,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,n,r){const o=t.exec(n);if(!o)throw new c.a("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${t}"`);const i=o[1]?o[1]+"/":"",s=o[2],a=function(e){if(!m.test(e))return null;const[,t,n]=m.exec(e),r=t+(n?"-"+n.toUpperCase():"");return O.has(r)?r:O.has(t)?t:null}(r),u=`${i}${s}.json`,l=a?`${i}${s}_${a}.json`:u;let f;try{f=await v(e(l))}catch(t){if(l===u)throw new c.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:t});try{f=await v(e(u))}catch(e){throw new c.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:e})}}return f}(this.getAssetUrl,this.matcher,e,t)}}const k={};var _;!function(e){if(!j.includes(e)){for(const t of w.keys())y(e.pattern,t)&&w.delete(t);j.unshift(e)}}((_={pattern:"esri/",location:h.a},new E(_)))}});