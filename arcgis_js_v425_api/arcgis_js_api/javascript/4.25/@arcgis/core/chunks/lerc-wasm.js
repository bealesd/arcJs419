/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(t,n){for(var e=0;e<n.length;e++){const r=n[e];if("string"!=typeof r&&!Array.isArray(r))for(const n in r)if("default"!==n&&!(n in t)){const e=Object.getOwnPropertyDescriptor(r,n);e&&Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:()=>r[n]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,e,r,i={exports:{}};n=i,e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(e=e||__filename),r=function(t){var n,r;(t=void 0!==(t=t||{})?t:{}).ready=new Promise((function(t,e){n=t,r=e}));var i,o,s,u,a,c,f=Object.assign({},t),p="object"==typeof window,l="function"==typeof importScripts,h="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d="";h?(d=l?require("path").dirname(d)+"/":__dirname+"/",c=()=>{a||(u=require("fs"),a=require("path"))},i=function(t,n){return c(),t=a.normalize(t),u.readFileSync(t,n?void 0:"utf8")},s=t=>{var n=i(t,!0);return n.buffer||(n=new Uint8Array(n)),n},o=(t,n,e)=>{c(),t=a.normalize(t),u.readFile(t,(function(t,r){t?e(t):n(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof J))throw t})),process.on("unhandledRejection",(function(t){throw t})),t.inspect=function(){return"[Emscripten Module object]"}):(p||l)&&(l?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),e&&(d=e),d=0!==d.indexOf("blob:")?d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},l&&(s=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),o=(t,n,e)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?n(r.response):e()},r.onerror=e,r.send(null)}),t.print||console.log.bind(console);var m,_,y=t.printErr||console.warn.bind(console);Object.assign(t,f),f=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit,t.wasmBinary&&(m=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&W("no native wasm support detected");var g,v,w,b,A,R,x=!1,S="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(t,n){return t?function(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&S)return S.decode(t.subarray(n,i));for(var o="";n<i;){var s=t[n++];if(128&s){var u=63&t[n++];if(192!=(224&s)){var a=63&t[n++];if((s=224==(240&s)?(15&s)<<12|u<<6|a:(7&s)<<18|u<<12|a<<6|63&t[n++])<65536)o+=String.fromCharCode(s);else{var c=s-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&s)<<6|u)}else o+=String.fromCharCode(s)}return o}(w,t,n):""}function E(n){g=n,t.HEAP8=v=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=b=new Int32Array(n),t.HEAPU8=w=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=A=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}t.INITIAL_MEMORY;var I,j,T=[],D=[],H=[],M=0,O=null;function W(n){t.onAbort&&t.onAbort(n),y(n="Aborted("+n+")"),x=!0,n+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(n);throw r(e),e}function U(t){return t.startsWith("data:application/octet-stream;base64,")}function q(t){return t.startsWith("file://")}function C(t){try{if(t==I&&m)return new Uint8Array(m);if(s)return s(t);throw"both async and sync fetching of the wasm failed"}catch(t){W(t)}}function F(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?k(r)():k(r)(e.arg):r(void 0===e.arg?null:e.arg)}else e(t)}}U(I="lerc-wasm.wasm")||(j=I,I=t.locateFile?t.locateFile(j,d):d+j);var B=[];function k(t){var n=B[t];return n||(t>=B.length&&(B.length=t+1),B[t]=n=R.get(t)),n}function z(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(t){A[this.ptr+4>>2]=t},this.get_type=function(){return A[this.ptr+4>>2]},this.set_destructor=function(t){A[this.ptr+8>>2]=t},this.get_destructor=function(){return A[this.ptr+8>>2]},this.set_refcount=function(t){b[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,v[this.ptr+12>>0]=t},this.get_caught=function(){return 0!=v[this.ptr+12>>0]},this.set_rethrown=function(t){t=t?1:0,v[this.ptr+13>>0]=t},this.get_rethrown=function(){return 0!=v[this.ptr+13>>0]},this.init=function(t,n){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=b[this.ptr>>2];b[this.ptr>>2]=t+1},this.release_ref=function(){var t=b[this.ptr>>2];return b[this.ptr>>2]=t-1,1===t},this.set_adjusted_ptr=function(t){A[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return A[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Y(this.get_type()))return A[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}function L(t){try{return _.grow(t-g.byteLength+65535>>>16),E(_.buffer),1}catch(t){}}var G={a:function(t,n,e,r){W("Assertion failed: "+P(t)+", at: "+[n?P(n):"unknown filename",e,r?P(r):"unknown function"])},c:function(t){return X(t+24)+24},b:function(t,n,e){throw new z(t).init(n,e),t},d:function(){W("")},f:function(t,n,e){w.copyWithin(t,n,n+e)},e:function(t){var n,e=w.length,r=2147483648;if((t>>>=0)>r)return!1;for(var i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),L(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1}};!function(){var n={a:G};function e(n,e){var r,i=n.exports;t.asm=i,E((_=t.asm.g).buffer),R=t.asm.m,r=t.asm.h,D.unshift(r),function(n){if(M--,t.monitorRunDependencies&&t.monitorRunDependencies(M),0==M&&O){var e=O;O=null,e()}}()}function i(t){e(t.instance)}function s(t){return function(){if(!m&&(p||l)){if("function"==typeof fetch&&!q(I))return fetch(I,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+I+"'";return t.arrayBuffer()})).catch((function(){return C(I)}));if(o)return new Promise((function(t,n){o(I,(function(n){t(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return C(I)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then((function(t){return t})).then(t,(function(t){y("failed to asynchronously prepare wasm: "+t),W(t)}))}if(M++,t.monitorRunDependencies&&t.monitorRunDependencies(M),t.instantiateWasm)try{return t.instantiateWasm(n,e)}catch(t){return y("Module.instantiateWasm callback failed with error: "+t),!1}(m||"function"!=typeof WebAssembly.instantiateStreaming||U(I)||q(I)||h||"function"!=typeof fetch?s(i):fetch(I,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(i,(function(t){return y("wasm streaming compile failed: "+t),y("falling back to ArrayBuffer instantiation"),s(i)}))}))).catch(r)}(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._lerc_getBlobInfo=function(){return(t._lerc_getBlobInfo=t.asm.i).apply(null,arguments)},t._lerc_getDataRanges=function(){return(t._lerc_getDataRanges=t.asm.j).apply(null,arguments)},t._lerc_decode=function(){return(t._lerc_decode=t.asm.k).apply(null,arguments)},t._lerc_decode_4D=function(){return(t._lerc_decode_4D=t.asm.l).apply(null,arguments)};var X=t._malloc=function(){return(X=t._malloc=t.asm.n).apply(null,arguments)};t._free=function(){return(t._free=t.asm.o).apply(null,arguments)};var N,Y=t.___cxa_is_pointer_type=function(){return(Y=t.___cxa_is_pointer_type=t.asm.p).apply(null,arguments)};function J(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function K(e){function r(){N||(N=!0,t.calledRun=!0,x||(F(D),n(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)n=t.postRun.shift(),H.unshift(n);var n;F(H)}()))}M>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)n=t.preRun.shift(),T.unshift(n);var n;F(T)}(),M>0||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),r()}),1)):r()))}if(O=function t(){N||K(),N||(O=t)},t.run=K,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return K(),t.ready},n.exports=r;const o=t({__proto__:null,default:i.exports},[i.exports]);export{o as l};
