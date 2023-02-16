// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/promiseUtils ../../../../../core/Accessor".split(" "),
function(d,q,n,B,C,D,r,E,w,F,G,H,k,x){d.EditsQueue=function(t){function l(a){a=t.call(this,a)||this;a._queue=[];a._onGoingRequest=null;a._abortController=k.createAbortController();return a}q._inheritsLoose(l,t);var m=l.prototype;m.destroy=function(){this.clear()};m.clear=function(){if(this.destroyed)throw Error("instance is already destroyed");let a=this._queue.pop();for(;a;)a.resolver.reject(k.createAbortError()),a=this._queue.pop();this._queue.length=0;this._abortController.abort();this._abortController=
k.createAbortController()};m.push=async function(a){if(this.destroyed)throw Error("instance is already destroyed");const e=k.createResolver();this._queue.push({event:a,resolver:e});this.notifyChange("updating");Promise.resolve().then(()=>{this._processNext()});return e.promise};m._processNext=async function(){if(!this._onGoingRequest){for(var a=[],e=new Set,f=new Set,g=new Set,p=this._queue.shift();p;){const {event:{addedFeatures:c,deletedFeatures:y,updatedFeatures:z},resolver:A}=p;a.push(A);for(const {objectId:b,
error:h}of c)h||(e.add(b),f.add(b),g.delete(b));for(const {objectId:b,error:h}of z)h||(f.add(b),g.delete(b));for(const {objectId:b,error:h}of y)h||(e.has(b)?e.delete(b):g.add(b),f.delete(b));p=this._queue.shift()}if(f.size||g.size){var u=[],v=[];f.size&&f.forEach(c=>{u.push(c)});g.size&&g.forEach(c=>{v.push(c)});this._onGoingRequest=Promise.resolve().then(()=>this.processEdits(u,v,{signal:this._abortController.signal})).catch(()=>{});this.notifyChange("updating");await this._onGoingRequest;this._onGoingRequest=
null;this.notifyChange("updating");a.forEach(c=>c());0<this._queue.length&&this._processNext()}else this.notifyChange("updating"),a.forEach(c=>c())}};q._createClass(l,[{key:"updating",get:function(){return!this.destroyed&&(0<this._queue.length||null!=this._onGoingRequest)}}]);return l}(x);n.__decorate([r.property({constructOnly:!0})],d.EditsQueue.prototype,"processEdits",void 0);n.__decorate([r.property({readOnly:!0})],d.EditsQueue.prototype,"updating",null);d.EditsQueue=n.__decorate([w.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],
d.EditsQueue);Object.defineProperty(d,"__esModule",{value:!0})});