// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../core/Promise ../../../../core/workers/workers".split(" "),function(n,
g,e,u,v,k,w,q,x,y,z,d,r,t){e=function(p){function h(a){a=p.call(this,a)||this;a._startupResolver=d.createResolver();a.isReady=!1;return a}n._inheritsLoose(h,p);var b=h.prototype;b.initialize=function(){this._controller=d.createAbortController();this.addResolvingPromise(this._startWorker(this._controller.signal))};b.destroy=function(){this._controller.abort();this._connection&&this._connection.close()};b.startup=async function(a,c,f,l){await this.when();var m=this._controller.signal;m=Array.isArray(f.source)?
{transferList:f.source,signal:m}:void 0;a=a.tileInfo.toJSON();await this._connection.invoke("startup",{service:f,config:c,tileInfo:a,tiles:l},m);this._startupResolver.resolve();this._set("isReady",!0)};b.updateTiles=async function(a){await this._startupResolver.promise;return d.ignoreAbortErrors(this._connection.invoke("updateTiles",a))};b.update=async function(a){a={config:a};await this._startupResolver.promise;return this._connection.invoke("update",a)};b.applyUpdate=async function(a){await this._startupResolver.promise;
return this._connection.invoke("applyUpdate",a)};b.setHighlight=async function(a){await this._startupResolver.promise;return d.ignoreAbortErrors(this._connection.invoke("controller.setHighlight",a))};b.refresh=async function(){await this._startupResolver.promise;return d.ignoreAbortErrors(this._connection.invoke("controller.refresh"))};b.queryFeatures=async function(a,c){await this._startupResolver.promise;return this._connection.invoke("controller.queryFeatures",a.toJSON(),c)};b.queryObjectIds=async function(a,
c){await this._startupResolver.promise;return this._connection.invoke("controller.queryObjectIds",a.toJSON(),c)};b.queryFeatureCount=async function(a,c){await this._startupResolver.promise;return this._connection.invoke("controller.queryFeatureCount",a.toJSON(),c)};b.queryExtent=async function(a,c){return this._connection.invoke("controller.queryExtent",a.toJSON(),c)};b.queryLatestObservations=async function(a,c){await this._startupResolver.promise;return this._connection.invoke("controller.queryLatestObservations",
a.toJSON(),c)};b.queryStatistics=async function(a){await this._startupResolver.promise;return this._connection.invoke("controller.queryStatistics",a)};b.getObjectId=async function(a){await this._startupResolver.promise;return this._connection.invoke("controller.getObjectId",a)};b.getDisplayId=async function(a){await this._startupResolver.promise;return this._connection.invoke("controller.getDisplayId",a)};b.getFeature=async function(a){await this._startupResolver.promise;return this._connection.invoke("controller.getFeature",
a)};b.getAggregate=async function(a){await this._startupResolver.promise;return this._connection.invoke("controller.getAggregate",a)};b.getAggregateValueRanges=async function(){await this._startupResolver.promise;return this._connection.invoke("controller.getAggregateValueRanges")};b.mapValidDisplayIds=async function(a){await this._startupResolver.promise;return this._connection.invoke("controller.mapValidDisplayIds",a)};b.onEdits=async function(a){await this._startupResolver.promise;const {addedFeatures:c,
deletedFeatures:f,updatedFeatures:l}=a;return d.ignoreAbortErrors(this._connection.invoke("controller.onEdits",{addedFeatures:c,deletedFeatures:f,updatedFeatures:l}))};b.enableEvent=async function(a,c){await this._startupResolver.promise;return d.ignoreAbortErrors(this._connection.invoke("controller.enableEvent",{name:a,value:c}))};b._startWorker=async function(a){try{this._connection=await t.open("Pipeline",{client:this.client,strategy:"dedicated",signal:a})}catch(c){d.throwIfNotAbortError(c)}};
n._createClass(h,[{key:"tileRenderer",set:function(a){this.client.tileRenderer=a}},{key:"closed",get:function(){return this._connection.closed}}]);return h}(r.EsriPromise);g.__decorate([k.property()],e.prototype,"isReady",void 0);g.__decorate([k.property()],e.prototype,"client",void 0);g.__decorate([k.property()],e.prototype,"tileRenderer",null);return e=g.__decorate([q.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],e)});