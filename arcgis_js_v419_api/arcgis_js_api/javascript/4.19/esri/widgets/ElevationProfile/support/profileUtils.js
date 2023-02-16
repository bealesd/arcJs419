// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/arrayUtils ../../../core/promiseUtils ../../../geometry/Multipoint ../../../core/mathUtils ../../../views/support/Scheduler ../../../views/support/QueueProcessor ./constants ./ProfileGenerationError ./geometryUtils ./statisticsUtils ./traversal".split(" "),function(u,v,D,t,E,F,G,H,x,w,y,I,J){function*z(a,b){var {densificationResult:c}=a;a={...a,abortOptions:b,densificationResult:c};b=J.getIndices(0,a.result.samples.length);c=b.slice(0,a.provider.numSamplesForPreview);
yield A(a,c,!0);b=D.splitIntoChunks(b,a.provider.numSamplesPerChunk);for(const n of b)yield A(a,n,!1)}async function A({densificationResult:a,result:b,provider:c,queue:n,abortOptions:d,cache:m},k,p){const {densifiedPath:f,pathLength:e}=a;a=b.spatialReference;const {samples:l}=b,r=Array(k.length);for(let h=0;h<k.length;h++)r[h]=l[k[h]].coordinate;try{return await n.push({geometry:new E({spatialReference:a,points:r,hasZ:f.hasZ}),provider:c,indices:k,preview:p,result:b,queryOptions:{...x.DEFAULT_ELEVATION_PROFILE_QUERY_OPTIONS,
minDemResolution:p?Math.round(e/c.numSamplesForPreview):Math.round(e/l.length),cache:m}},d),{...b}}catch(h){return t.isAbortError(h)?null:x.ERROR_RESULT}}async function K({geometry:a,provider:b,indices:c,preview:n,result:d,queryOptions:m}){if(0!==c.length){a=(await L(b,a,m)).geometry;var {hasZ:k,points:p}=a;m=m.noDataValue;({samples:a}=d);for(b=0;b<c.length;b++){const f=a[c[b]];if(f.isHole)continue;const e=k?p[b][2]:null;null===e||e===m?f.sampledZ=null:(d.hasZ=!0,f.sampledZ=e);f.sampled=!0}B(a);d.progress=
n?0:d.progress+c.length/a.length;d.statistics=I.getStatistics(d.samples,d.spatialReference)}}function B(a){const b=a.length-1;var c=0;for(let f=1;f<=b;f++)if(a[f].sampled||f===b){a:{var n=a,d=c;c=f;if(1===c-d)break a;var m=n[d],k=m.sampledZ,p=n[c];const e=p.sampledZ;if(v.isNone(k)||v.isNone(e))for(k=d+1;k<c;k++)n[k].sampledZ=null;else for(m=m.distance,p=p.distance-m,d+=1;d<c;d++){const l=n[d];l.sampledZ=F.lerp(k,e,(l.distance-m)/p)}}c=f}}function M({densifiedPath:a,distances:b}){const c=a.spatialReference;
a=a.paths;const n=a.length;var d=2*(n-1);d=a.reduce((e,l)=>e+l.length,0)+d;const m=Array(d);let k=0;d=null;let p=0;const f=(e,l,r,h)=>{m[k++]=C(e,r);m[k++]=C(l,h)};for(let e=0;e<n;e++){const l=a[e],r=b[e];for(let h=0;h<l.length;h++){const g=l[h],q=r[h];d&&0===h&&f(d,g,p,q);m[k++]={coordinate:g,distance:q,sampledZ:null,sampled:!1,isHole:!1};d=g;p=q}}return{progress:0,samples:m,hasZ:!1,statistics:null,spatialReference:c}}function C(a,b){return{coordinate:a,distance:b,sampledZ:null,sampled:!0,isHole:!0}}
async function L(a,b,c){try{return await a.queryElevation(b,c)}catch(n){throw new w.ProfileGenerationError("elevation-query-error");}}u.createProfileQueue=function(a){return new H.QueueProcessor({task:G.Task.ELEVATION_PROFILE,concurrency:1,scheduler:a,process:async b=>{t.throwIfAborted(b.queryOptions);try{await K(b)}catch(c){t.throwIfNotAbortError(c)}}})};u.generateProfile=z;u.generateProfiles=async function*(a,b){var c;const {view:n,geometry:d,elevationInfo:m,providers:k,options:p}=a;if(v.isNone(d)||
!y.isValidInputPath(d))throw new w.ProfileGenerationError("invalid-geometry");var f=n.spatialReference;const e=k.length;if(0===e)return v.none;var l=Math.round(p.maxTotalSamples/e);if(y.countPoints(d)>l)throw new w.ProfileGenerationError("too-complex");var r=await y.densifyPath(d,m,n,f,p,l,b),h=0;f=Array(e);l=Array(e);for(let g=0;g<e;g++){const q=M(r);f[g]=q;h+=q.samples.length;l[g]=z({...a,provider:k[g],result:q,densificationResult:r},b)[Symbol.iterator]()}if(h>p.maxTotalSamples)throw new w.ProfileGenerationError("too-complex");
r=await Promise.all(l.map(g=>{g=g.next();return!0===g.done?Promise.resolve(null):g.value}));t.throwIfAborted(b);for(h=0;h<e;h++)f[h]=r[h];yield f;await t.after(null!=(c=a.delayAfterPreview)?c:x.DELAY_AFTER_PREVIEW_MILLIS,null,b.signal);a=[];try{let g;do for(g=!1,c=0;c<e;c++){const q=l[c].next();!1===q.done&&(a.push({resultPromise:q.value,index:c}),g=!0)}while(g)}finally{l.forEach(g=>null==g.return?void 0:g.return())}for(const {resultPromise:g,index:q}of a)f[q]=await g,t.throwIfAborted(b),yield f;
v.forEachSome(f,g=>{g.progress=1});yield f};u.interpolateElevations=B;Object.defineProperty(u,"__esModule",{value:!0})});