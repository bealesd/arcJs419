// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/Error ../../core/has ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/originUtils ../../geometry/Extent ../../geometry/HeightModelInfo ../../geometry/SpatialReference ../support/arcgisLayerUrl ../support/commonProperties ../support/I3SIndexInfo ../../portal/Portal ../../portal/PortalItem ../../webdoc/support/saveUtils".split(" "),
function(G,n,l,g,w,m,P,H,I,J,z,k,Q,R,r,K,L,A,x,M,y,t,B,N,C,O,D){const q=H.getLogger("esri.layers.mixins.SceneService");var u;(function(d){d[d.existingItem=0]="existingItem";d[d.newItem=1]="newItem"})(u||(u={}));const E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};n.SaveOperationType=void 0;(function(d){d[d.SAVE=0]="SAVE";d[d.SAVE_AS=1]="SAVE_AS"})(n.SaveOperationType||(n.SaveOperationType={}));n.SCENE_SERVICE_ITEM_TYPE=
"Scene Service";n.SceneService=d=>{d=function(F){function v(){var b=F.apply(this,arguments)||this;b.spatialReference=null;b.fullExtent=null;b.heightModelInfo=null;b.minScale=0;b.maxScale=0;b.version={major:Number.NaN,minor:Number.NaN,versionString:""};b.copyright=null;b.sublayerTitleMode="item-title";b.title=null;b.layerId=null;b.indexInfo=null;b._debouncedSaveOperations=J.debounce(function(){var a=l._asyncToGenerator(function*(c,e,f){switch(c){case n.SaveOperationType.SAVE:return b._save(e);case n.SaveOperationType.SAVE_AS:return b._saveAs(f,
e)}});return function(c,e,f){return a.apply(this,arguments)}}());return b}l._inheritsLoose(v,F);var h=v.prototype;h.readSpatialReference=function(b,a){return this._readSpatialReference(a)};h._readSpatialReference=function(b){if(null!=b.spatialReference)return y.fromJSON(b.spatialReference);b=b.store;b=(b=b.indexCRS||b.geographicCRS)&&parseInt(b.substring(b.lastIndexOf("/")+1,b.length),10);return null!=b?new y(b):null};h.readFullExtent=function(b,a,c){if(null!=b&&"object"===typeof b)return a=null==
b.spatialReference?{...b,spatialReference:this._readSpatialReference(a)}:b,x.fromJSON(a,c);c=a.store;a=this._readSpatialReference(a);return null==a||null==c||null==c.extent||!Array.isArray(c.extent)||c.extent.some(e=>-1E38>e)?null:new x({xmin:c.extent[0],ymin:c.extent[1],xmax:c.extent[2],ymax:c.extent[3],spatialReference:a})};h.parseVersionString=function(b){const a={major:Number.NaN,minor:Number.NaN,versionString:b};b=b.split(".");2<=b.length&&(a.major=parseInt(b[0],10),a.minor=parseInt(b[1],10));
return a};h.readVersion=function(b,a){b=a.store;return this.parseVersionString(null!=b.version?b.version.toString():"")};h.readTitlePortalItem=function(b){return"item-title"!==this.sublayerTitleMode?void 0:b};h.readTitleService=function(b,a){b=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return t.titleFromUrlAndName(this.url,a.name);a=a.name;if(!a&&this.url){const c=t.parse(this.url);I.isSome(c)&&(a=c.title)}"item-title-and-service-name"===this.sublayerTitleMode&&
b&&(a=b+" - "+a);return t.cleanTitle(a)};h.writeUrl=function(b,a,c,e){t.writeUrlWithLayerId(this,b,"layers",a,e)};h._fetchIndexAndUpdateExtent=function(){var b=l._asyncToGenerator(function*(a,c){this.indexInfo=N.fetchIndexInfo(this.parsedUrl.path,this.rootNode,a,this.apiKey,q,c);null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(yield this.indexInfo)});return function(a,c){return b.apply(this,arguments)}}();h._updateExtent=function(b){if("page"===b?.type){var a=b.rootIndex%b.pageSize;
a=b.rootPage?.nodes?.[a];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new m("sceneservice:invalid-node-page","Invalid node page.");-1E38>a.obb.center[0]||null==this.fullExtent||this.fullExtent.hasZ||(b=a.obb.halfSize,a=a.obb.center[2],b=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]),this.fullExtent.zmin=a-b,this.fullExtent.zmax=a+b)}else if("node"===b?.type&&(a=b.rootNode?.mbs,Array.isArray(a)&&4===a.length&&!(-1E38>a[0]))){b=a[2];a=a[3];var {fullExtent:c}=this;c&&(c.zmin=b-a,
c.zmax=b+a)}};h._fetchService=function(){var b=l._asyncToGenerator(function*(a){if(null==this.url)throw new m("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const c=yield this._fetchFirstLayerId(a);null!=c&&(this.layerId=c)}return this._fetchServiceLayer(a)});return function(a){return b.apply(this,arguments)}}();h._fetchFirstLayerId=function(){var b=l._asyncToGenerator(function*(a){a=yield w(this.url,
{query:{f:"json",token:this.apiKey},responseType:"json",signal:a});if(a.data&&Array.isArray(a.data.layers)&&0<a.data.layers.length)return a.data.layers[0].id});return function(a){return b.apply(this,arguments)}}();h._fetchServiceLayer=function(){var b=l._asyncToGenerator(function*(a){a=yield w(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:a});a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let c=!1;a.data.layerType&&"Voxel"===a.data.layerType&&(c=!0);
if(c)return this._fetchVoxelServiceLayer();a=a.data;this.read(a,{origin:"service",url:this.parsedUrl});this.validateLayer(a)});return function(a){return b.apply(this,arguments)}}();h._fetchVoxelServiceLayer=function(){var b=l._asyncToGenerator(function*(a){a=(yield w(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:a})).data;this.read(a,{origin:"service",url:this.parsedUrl});this.validateLayer(a)});return function(a){return b.apply(this,arguments)}}();h._ensureLoadBeforeSave=
function(){var b=l._asyncToGenerator(function*(){yield this.load();"beforeSave"in this&&"function"===typeof this.beforeSave&&(yield this.beforeSave())});return function(){return b.apply(this,arguments)}}();h.validateLayer=function(b){};h._updateTypeKeywords=function(b,a,c){b.typeKeywords||(b.typeKeywords=[]);a=a.getTypeKeywords();for(const e of a)b.typeKeywords.push(e);b.typeKeywords&&(b.typeKeywords=b.typeKeywords.filter((e,f,p)=>p.indexOf(e)===f),c===u.newItem&&(b.typeKeywords=b.typeKeywords.filter(e=>
"Hosted Service"!==e)))};h._saveAs=function(){var b=l._asyncToGenerator(function*(a,c){c={...E,...c};a=O.from(a);a||(q.error("_saveAs(): requires a portal item parameter"),yield Promise.reject(new m("sceneservice:portal-item-required","_saveAs() requires a portal item to save to")));a.id&&(a=a.clone(),a.id=null);const e=a.portal||C.getDefault();yield this._ensureLoadBeforeSave();a.type="Scene Service";a.portal=e;const f={origin:"portal-item",url:null,messages:[],portal:e,portalItem:a,writtenProperties:[],
blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},f)]};yield Promise.all(f.resources?.pendingOperations??[]);yield this._validateAgainstJSONSchema(p,f,c);a.url=this.url;a.title||(a.title=this.title);this._updateTypeKeywords(a,c,u.newItem);yield e._signIn();yield e.user?.addItem({item:a,folder:c&&c.folder,data:p});yield D.saveResources(this.resourceReferences,f,null);this.portalItem=a;A.updateOrigins(f);return f.portalItem=a});return function(a,
c){return b.apply(this,arguments)}}();h._save=function(){var b=l._asyncToGenerator(function*(a){a={...E,...a};if(!this.portalItem)throw q.error("_save(): requires the .portalItem property to be set"),new m("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if("Scene Service"!==this.portalItem.type)throw q.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected Scene Service"),new m("sceneservice:portal-item-wrong-type",
'Portal item needs to have type "Scene Service"');yield this._ensureLoadBeforeSave();const c={origin:"portal-item",url:this.portalItem.itemUrl&&z.urlToObject(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||C.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},e={layers:[this.write({},c)]};yield Promise.all(c.resources?.pendingOperations??[]);yield this._validateAgainstJSONSchema(e,
c,a);this.portalItem.url=this.url;this.portalItem.title||(this.portalItem.title=this.title);this._updateTypeKeywords(this.portalItem,a,u.existingItem);yield this.portalItem.update({data:e});yield D.saveResources(this.resourceReferences,c,null);A.updateOrigins(c);return this.portalItem});return function(a){return b.apply(this,arguments)}}();h._validateAgainstJSONSchema=function(){var b=l._asyncToGenerator(function*(a,c,e){c=c.messages?.filter(f=>"error"===f.type).map(f=>new m(f.name,f.message,f.details))??
[];e&&e.validationOptions?.ignoreUnsupported&&(c=c.filter(f=>"layer:unsupported"!==f.name&&"symbol:unsupported"!==f.name&&"symbol-layer:unsupported"!==f.name&&"property:unsupported"!==f.name&&"url:unsupported"!==f.name&&"scenemodification:unsupported"!==f.name));if(e.validationOptions?.enabled&&(a=(yield new Promise((f,p)=>G(["../support/schemaValidator"],f,p))).validate(a,e.portalItemLayerType),0<a.length)){const f=`Layer item did not validate:\n${a.join("\n")}`;q.error(`_validateAgainstJSONSchema(): ${f}`);
if("throw"===e.validationOptions?.failPolicy)throw e=a.map(p=>new m("sceneservice:schema-validation",p)).concat(c),new m("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e});}if(0<c.length)throw new m("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:c});});return function(a,c,e){return b.apply(this,arguments)}}();l._createClass(v,[{key:"url",
set:function(b){b=t.sanitizeUrlWithLayerId({layer:this,url:b,nonStandardUrlAllowed:!1,logger:q});this._set("url",b.url);null!=b.layerId&&this._set("layerId",b.layerId)}},{key:"parsedUrl",get:function(){var b=this._get("url");b=z.urlToObject(b);null!=this.layerId&&(b.path=`${b.path}/layers/${this.layerId}`);return b}}]);return v}(d);g.__decorate([k.property(B.id)],d.prototype,"id",void 0);g.__decorate([k.property({type:y})],d.prototype,"spatialReference",void 0);g.__decorate([r.reader("spatialReference",
["spatialReference","store.indexCRS","store.geographicCRS"])],d.prototype,"readSpatialReference",null);g.__decorate([k.property({type:x})],d.prototype,"fullExtent",void 0);g.__decorate([r.reader("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],d.prototype,"readFullExtent",null);g.__decorate([k.property({readOnly:!0,type:M})],d.prototype,"heightModelInfo",void 0);g.__decorate([k.property({type:Number,json:{name:"layerDefinition.minScale",write:!0,
origins:{service:{read:{source:"minScale"},write:!1}}}})],d.prototype,"minScale",void 0);g.__decorate([k.property({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],d.prototype,"maxScale",void 0);g.__decorate([k.property({readOnly:!0})],d.prototype,"version",void 0);g.__decorate([r.reader("version",["store.version"])],d.prototype,"readVersion",null);g.__decorate([k.property({type:String,json:{read:{source:"copyrightText"}}})],d.prototype,
"copyright",void 0);g.__decorate([k.property({type:String,json:{read:!1}})],d.prototype,"sublayerTitleMode",void 0);g.__decorate([k.property({type:String})],d.prototype,"title",void 0);g.__decorate([r.reader("portal-item","title")],d.prototype,"readTitlePortalItem",null);g.__decorate([r.reader("service","title",["name"])],d.prototype,"readTitleService",null);g.__decorate([k.property({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},
read:!1}}}})],d.prototype,"layerId",void 0);g.__decorate([k.property(B.url)],d.prototype,"url",null);g.__decorate([L.writer("url")],d.prototype,"writeUrl",null);g.__decorate([k.property()],d.prototype,"parsedUrl",null);g.__decorate([k.property({readOnly:!0})],d.prototype,"store",void 0);g.__decorate([k.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],d.prototype,"rootNode",void 0);return d=g.__decorate([K.subclass("esri.layers.mixins.SceneService")],d)};Object.defineProperties(n,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});