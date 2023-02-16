// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../request ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/asyncUtils ../../../../core/byteSizeEstimations ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../intl/number ../../../../layers/support/featureQueryAll ../../../../support/featureFlags ../FeatureLayerView3D".split(" "),
function(n,v,q,E,F,A,x,B,G,e,H,C,t,O,I,J,y,z,K){n.I3SOverrides=function(p){function u(a){a=p.call(this,a)||this;a._warnMaximumChangedObjectsExceeded=!1;a._pendingFetchAbortController=new AbortController;a._interactiveEditingSessions=null;a._maximumNumberOfEditOVerrides=5E4;a._original3DOFLDefinitionExpression=null;a._associatedLayerView=null;a._changedObjectIds=new Set;return a}v._inheritsLoose(u,p);var f=u.prototype;f.initialize=function(){this._memCache=this.memoryController.newCache(`${this.layer.uid}-attribute-overrides`);
this._pendingFetchChangedObjectIds=this._fetchChangedObjectIds(this._pendingFetchAbortController.signal);this._pendingFetchChangedObjectIds.then(()=>this._pendingFetchAbortController=null);z.sceneLayerEditingEnabled()&&e.isSome(this._associatedLayer)&&e.isSome(this._associatedLayer.infoFor3D)&&this._associatedLayer.load().then(a=>{this.destroyed||(this._original3DOFLDefinitionExpression=a.definitionExpression,this.addHandles(C.watch(()=>this._definitionExpression,b=>a.definitionExpression=b,C.initial)),
this._associatedLayerView=new K({layer:this._associatedLayer,view:this.view}))})};f.destroy=function(){z.sceneLayerEditingEnabled()&&e.isSome(this._associatedLayer)&&e.isSome(this._associatedLayer.infoFor3D)&&e.isSome(this._associatedLayerView)&&(this._associatedLayer.definitionExpression=e.unwrap(this._original3DOFLDefinitionExpression));this._set("layer",null);this._memCache.destroy();this._memCache=null;this._pendingFetchAbortController&&(this._pendingFetchAbortController.abort(),this._pendingFetchAbortController=
null);this._pendingFetchChangedObjectIds=null};f.createInteractiveEditSession=function(a){this._changedObjectIds.add(a);this.notifyChange("_changedObjectIds");e.isNone(this._interactiveEditingSessions)&&(this._interactiveEditingSessions=[]);const b=this._interactiveEditingSessions,c=new L(a,{rollback:()=>{A.remove(b,c);0===b.length&&(this._interactiveEditingSessions=null)},commit:d=>{for(const [g,h]of d)this.updateAttributeValue(a,g,h)}});b.unshift(c);return c};f.apply=function(){var a=v._asyncToGenerator(function*(b,
c,d){if(!e.isNone(c)){var {loadedAttributes:g,attributeData:h}=c;if(!e.isNone(g)&&0!==g.length&&!e.isNone(h)&&(yield H.whenOrAbort(this._pendingFetchChangedObjectIds,d),0!==this._changedObjectIds.size)){c={loadedAttributes:g,attributeData:h};var k=this._getOverridesFromCache(b,c,this._changedObjectIds),{objectIds:m,fieldNames:l}=k;d=yield this._queryOverridesFromAssociatedLayer(m,l,d);e.isNone(d)||this._processOverridesFromAssociatedLayer(b,d,l,c)}}});return function(b,c,d){return a.apply(this,arguments)}}();
f.updateGeometry=function(a){this._changedObjectIds.add(a);this.notifyChange("_changedObjectIds")};f.updateAttributeValue=function(a,b,c){this._changedObjectIds.add(a);this._cacheAttributeValue(a,b,c);this.notifyChange("_changedObjectIds")};f._cacheAttributeValue=function(a,b,c){this._memCache.put(this._getAttributeCacheKey(a,b),c,this._memCacheAttributeValueSize(c))};f._getOverridesFromCache=function(a,{loadedAttributes:b,attributeData:c},d){const g=new Set,h=[];for(var k of b)h[k.index]=c[k.name];
c=new Set;for(k=0;k<a.length;k++){const m=a[k];if(d.has(m))for(const l of b){const r=this._fromCache(m,l.index);void 0!==r?h[l.index][k]=r:(g.add(m),c.add(l.name))}}return{objectIds:Array.from(g),fieldNames:Array.from(c)}};f._fromCache=function(a,b){const c=this._fromInteractiveEditingSession(a,b);if(void 0!==c)return c;a=this._getAttributeCacheKey(a,b);return this._memCache.get(a)};f._fromInteractiveEditingSession=function(a,b){if(!e.isNone(this._interactiveEditingSessions))for(const c of this._interactiveEditingSessions){if(c.objectId!==
a)continue;const d=c.get(b);if(void 0!==d)return d}};f._getAttributeCacheKey=function(a,b){return`${a}-${b}`};f._queryOverridesFromAssociatedLayer=function(){var a=v._asyncToGenerator(function*(b,c,d){if(0===b.length||0===c.length)return null;b=b.sort((k,m)=>k-m);this._warnMaximumChangedObjectsExceeded&&(this._warnMaximumChangedObjectsExceeded=!1,this._logMaximumObjectsExceededWarning());const g=this.layer.associatedLayer;if(e.isNone(g))return null;const h=g.createQuery();h.where="1\x3d1";h.returnGeometry=
!1;h.outFields=[g.objectIdField,...c];h.cacheHint=!0;h.objectIds=b;c=y.getMaximumQuerySize(g);b=b.length>c?A.splitIntoChunks(b,c).map(k=>{const m=h.clone();m.objectIds=k;return x.resultOrAbort(y.queryAllJSON(g,m,{signal:d}))}):[x.resultOrAbort(y.queryAllJSON(g,h,{signal:d}))];return(yield Promise.all(b)).reduce((k,m)=>k.concat(m.ok?m.value.features:[]),[])});return function(b,c,d){return a.apply(this,arguments)}}();f._logMaximumObjectsExceededWarning=function(){let a=`The number of edited objects that are not yet cached in the scene service exceeds the maximum limit. Attribute changes will only be available for the first ${J.formatNumber(this._maximumNumberOfEditOVerrides)} objects. Please consider re-caching the scene service`;
const b=this.layer.portalItem;a=b&&b.loaded?a+` (${b.portal.url}/home/item.html?id=${b.id}#settings)`:a+` (${this.layer.parsedUrl.path})`;G.getLogger("esri.views.3d.layers.i3s.I3SOverrides").warn("#queryOverrides()",this.layer.title,`${a}.`)};f._processOverridesFromAssociatedLayer=function(a,b,c,{loadedAttributes:d,attributeData:g}){var h=this.layer.associatedLayer;if(!e.isNone(h)){h=h.objectIdField;var k=c.map(l=>g[l]),m=new Map(d.map(l=>[l.name,l.index]));d=c.map(l=>m.get(l));a=new Map(Array.from(a,
(l,r)=>[l,r]));for(const l of b){b=l.attributes[h];for(let r=0;r<c.length;r++){const M=d[r],N=a.get(b),D=l.attributes[c[r]];k[r][N]=D;this._cacheAttributeValue(b,M,D)}}}};f._memCacheAttributeValueSize=function(a){return"string"===typeof a?B.estimateStringByteSize(a):B.estimateNumberByteSize()};f._fetchChangedObjectIds=function(){var a=v._asyncToGenerator(function*(b){var c=this.layer;yield c.load({signal:b});this._changedObjectIds.clear();if(!e.isNone(c.associatedLayer)&&c.associatedLayer.capabilities?.operations?.supportsChangeTracking){var d=
this._getFetchChangedObjectIdsServerGen();if(e.isNone(d))return null;var g=c.associatedLayer.layerId,h=e.isSome(c.associatedLayer.infoFor3D);b=yield x.result(E(`${c.associatedLayer.url}/extractChanges`,{method:"post",query:{f:"json",returnIdsOnly:!0,layers:`[${g}]`,returnUpdates:!0,returnDeletes:h,returnInserts:h,layerServerGens:JSON.stringify([{id:g,serverGen:d}])},timeout:1E4,signal:b}));if(b.ok&&b.value.data?.edits&&1===b.value.data.edits.length)for(d=b.value.data.edits[0],b=e.get(d,"objectIds",
"adds"),c=e.get(d,"objectIds","updates"),g=e.get(d,"objectIds","deletes"),d=[],e.isSome(b)&&(d=d.concat(b)),e.isSome(c)&&(d=d.concat(c)),e.isSome(g)&&(d=d.concat(g)),b=Math.min(this._maximumNumberOfEditOVerrides,d.length),b<d.length&&(this._warnMaximumChangedObjectsExceeded=!0),c=d.sort((k,m)=>k-m),d=0;d<b;d++)this._changedObjectIds.add(c[d]);this.notifyChange("_changedObjectIds")}});return function(b){return a.apply(this,arguments)}}();f._getFetchChangedObjectIdsServerGen=function(){var a=this.layer;
if(e.isSome(a.serviceUpdateTimeStamp)&&e.isSome(a.serviceUpdateTimeStamp.lastUpdate))return a.serviceUpdateTimeStamp.lastUpdate;a=a.associatedLayer;return e.isSome(a)&&e.isSome(a.serverGens)&&e.isSome(a.serverGens.minServerGen)?a.serverGens.minServerGen:null};v._createClass(u,[{key:"geometryChangedObjectIds",get:function(){return[...this._changedObjectIds]}},{key:"_associatedLayer",get:function(){return this.layer.associatedLayer}},{key:"_definitionExpression",get:function(){const a=this.geometryChangedObjectIds;
return 0===a.length?"1 \x3d 0":`OBJECTID IN (${a.join(",")})`}},{key:"updating",get:function(){return z.sceneLayerEditingEnabled()&&e.isSome(this._associatedLayer)&&e.isSome(this._associatedLayer.infoFor3D)?!e.isSome(this._associatedLayerView)||e.isSome(this._associatedLayerView)&&this._associatedLayerView.updating:!1}},{key:"test",get:function(){const a=this;return{changedObjectIds:Array.from(this._changedObjectIds),pendingFetchChangedObjectIds:this._pendingFetchChangedObjectIds,get maximumNumberOfEditOVerrides(){return a._maximumNumberOfEditOVerrides},
set maximumNumberOfEditOVerrides(b){a._maximumNumberOfEditOVerrides=b}}}}]);return u}(F);q.__decorate([t.property({constructOnly:!0})],n.I3SOverrides.prototype,"view",void 0);q.__decorate([t.property({constructOnly:!0})],n.I3SOverrides.prototype,"layer",void 0);q.__decorate([t.property({readOnly:!0})],n.I3SOverrides.prototype,"geometryChangedObjectIds",null);q.__decorate([t.property()],n.I3SOverrides.prototype,"_associatedLayer",null);q.__decorate([t.property()],n.I3SOverrides.prototype,"_associatedLayerView",
void 0);q.__decorate([t.property({constructOnly:!0})],n.I3SOverrides.prototype,"memoryController",void 0);q.__decorate([t.property()],n.I3SOverrides.prototype,"_changedObjectIds",void 0);q.__decorate([t.property()],n.I3SOverrides.prototype,"_definitionExpression",null);q.__decorate([t.property()],n.I3SOverrides.prototype,"updating",null);n.I3SOverrides=q.__decorate([I.subclass("esri.views.3d.layers.i3s.I3SOverrides")],n.I3SOverrides);let L=function(){function p(f,a){this.objectId=f;this._options=
a;this._updates=new Map;this._state=w.ACTIVE}var u=p.prototype;u.get=function(f){return this._updates.get(f)};u.set=function(f,a){this._isActive&&this._updates.set(f,a)};u.rollback=function(){this._isActive&&(this._state=w.ROLLED_BACK,this._options.rollback())};u.commit=function(){this._isActive&&(this._state=w.COMMITTED,this._options.commit(this._updates),this._updates.clear())};v._createClass(p,[{key:"_isActive",get:function(){return this._state===w.ACTIVE}}]);return p}();var w;(function(p){p[p.ACTIVE=
0]="ACTIVE";p[p.COMMITTED=1]="COMMITTED";p[p.ROLLED_BACK=2]="ROLLED_BACK"})(w||(w={}));Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});