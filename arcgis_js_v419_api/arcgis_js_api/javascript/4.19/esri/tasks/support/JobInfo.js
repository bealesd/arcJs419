// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/JSONSupport ../../request ../../rest/utils ./GPMessage ../../rest/geoprocessor/GPOptions ../../rest/geoprocessor/utils".split(" "),
function(x,y,h,v,F,G,l,z,A,H,I,J,t,f,p,m,B,C,q){var r;v=new z.JSONMap({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});f=r=function(w){function u(a){a=w.call(this,a)||this;a.jobId=null;a.jobStatus=null;a.messages=
null;a.requestOptions=null;a.sourceUrl=null;a._timer=null;return a}y._inheritsLoose(u,w);var g=u.prototype;g.cancelJob=function(a){const {jobId:b,sourceUrl:c}=this,{path:e}=m.parseUrl(c);a={...this.requestOptions,...a,query:{f:"json"}};this._clearTimer();return p(`${e}/jobs/${b}/cancel`,a).then(d=>{d=r.fromJSON(d.data);this.messages=d.messages;this.jobStatus=d.jobStatus;return this})};g.destroy=function(){clearInterval(this._timer)};g.checkJobStatus=function(a){const {path:b}=m.parseUrl(this.sourceUrl);
return p(`${b}/jobs/${this.jobId}`,{...this.requestOptions,...a,query:{f:"json"}}).then(({data:c})=>{c=r.fromJSON(c);this.messages=c.messages;this.jobStatus=c.jobStatus;return this})};g.fetchResultData=function(a,b,c){b=C.from(b);const {returnFeatureCollection:e,returnM:d,returnZ:n,outSpatialReference:k}=b;({path:b}=m.parseUrl(this.sourceUrl));const D=q.gpEncode({returnFeatureCollection:e||void 0,returnM:d||void 0,returnZ:n||void 0,outSR:k,returnType:"data",f:"json"},null);return p(`${b}/jobs/${this.jobId}/results/${a}`,
{...this.requestOptions,...c,query:D}).then(E=>q.decode(E.data))};g.fetchResultImage=function(a,b,c){const {path:e}=m.parseUrl(this.sourceUrl);b={...b.toJSON(),f:"json"};b=q.gpEncode(b);return p(`${e}/jobs/${this.jobId}/results/${a}`,{...this.requestOptions,...c,query:b}).then(d=>q.decode(d.data))};g.fetchResultMapImageLayer=async function(){var {path:a}=m.parseUrl(this.sourceUrl);const b=a.indexOf("/GPServer/");a=`${a.substring(0,b)}/MapServer/jobs/${this.jobId}`;return new (await new Promise(function(c,
e){x(["../../layers/MapImageLayer"],function(d){c(Object.freeze({__proto__:null,"default":d}))},e)})).default({url:a})};g.waitForJobCompletion=async function(a={}){const {interval:b=1E3,signal:c,statusCallback:e}=a;return new Promise((d,n)=>{t.onAbort(c,()=>{this._clearTimer();n(t.createAbortError())});this._clearTimer();this._timer=setInterval(()=>{this._timer||n(t.createAbortError());this.checkJobStatus(this.requestOptions).then(k=>{({jobStatus:k}=k);this.jobStatus=k;switch(k){case "job-succeeded":this._clearTimer();
d(this);break;case "job-submitted":case "job-executing":case "job-waiting":case "job-new":e&&e(this);break;case "job-cancelled":case "job-cancelling":case "job-deleted":case "job-deleting":case "job-timed-out":case "job-failed":this._clearTimer(),n(this)}})},b)})};g._clearTimer=function(){this._timer&&(clearInterval(this._timer),this._timer=null)};return u}(f.JSONSupport);h.__decorate([l.property()],f.prototype,"jobId",void 0);h.__decorate([l.property({json:{read:v.read}})],f.prototype,"jobStatus",
void 0);h.__decorate([l.property({type:[B]})],f.prototype,"messages",void 0);h.__decorate([l.property()],f.prototype,"requestOptions",void 0);h.__decorate([l.property({json:{write:!0}})],f.prototype,"sourceUrl",void 0);return f=r=h.__decorate([A.subclass("esri.tasks.support.JobInfo")],f)});