// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/graphics/sources/GeoJSONSource":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./support/clientSideDefaults ../../../rest/support/FeatureSet ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/support/typeUtils".split(" "),
function(q,u,c,K,E,T,U,V,L,W,X,y,Z,aa,F,M,d,N,G,f){const O=V.getLogger("esri.layers.graphics.sources.GeoJSONSource");q.GeoJSONSource=function(P){function z(){var b=P.apply(this,arguments)||this;b.type="geojson";b.refresh=W.debounce(function(){var e=u._asyncToGenerator(function*(m){yield b.load();const {extent:r,timeExtent:t}=yield b._connection.invoke("refresh",m);b.sourceJSON.extent=r;t&&(b.sourceJSON.timeInfo.timeExtent=[t.start,t.end]);return{dataChanged:!0,updates:{extent:b.sourceJSON.extent,
timeInfo:b.sourceJSON.timeInfo}}});return function(m){return e.apply(this,arguments)}}());return b}u._inheritsLoose(z,P);var k=z.prototype;k.load=function(b){b=L.isSome(b)?b.signal:null;this.addResolvingPromise(this._startWorker(b));return Promise.resolve(this)};k.destroy=function(){this._connection?.close();this._connection=null};k.applyEdits=function(b){return this.load().then(()=>this._applyEdits(b))};k.openPorts=function(){return this.load().then(()=>this._connection.openPorts())};k.queryFeatures=
function(b,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",b?b.toJSON():null,e)).then(m=>d.fromJSON(m))};k.queryFeaturesJSON=function(b,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",b?b.toJSON():null,e))};k.queryFeatureCount=function(b,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",b?b.toJSON():null,e))};k.queryObjectIds=function(b,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",b?b.toJSON():
null,e))};k.queryExtent=function(b,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",b?b.toJSON():null,e)).then(m=>({count:m.count,extent:N.fromJSON(m.extent)}))};k.querySnapping=function(b,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",b,e))};k._applyEdits=function(b){if(!this._connection)throw new E("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,m=[],r=[],t=[];if(b.addFeatures)for(const l of b.addFeatures)m.push(this._serializeFeature(l));
if(b.deleteFeatures)for(const l of b.deleteFeatures)"objectId"in l&&null!=l.objectId?r.push(l.objectId):"attributes"in l&&null!=l.attributes[e]&&r.push(l.attributes[e]);if(b.updateFeatures)for(const l of b.updateFeatures)t.push(this._serializeFeature(l));return this._connection.invoke("applyEdits",{adds:m,updates:t,deletes:r}).then(({extent:l,timeExtent:w,featureEditResults:A})=>{this.sourceJSON.extent=l;w&&(this.sourceJSON.timeInfo.timeExtent=[w.start,w.end]);return this._createEditsResult(A)})};
k._createEditsResult=function(b){return{addFeatureResults:b.addResults?b.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:b.updateResults?b.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:b.deleteResults?b.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};k._createFeatureEditResult=function(b){const e=!0===b.success?null:b.error||{code:void 0,description:void 0};
return{objectId:b.objectId,globalId:b.globalId,error:e?new E("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}};k._serializeFeature=function(b){const {attributes:e}=b;return(b=this._geometryForSerialization(b))?{geometry:b.toJSON(),attributes:e}:{attributes:e}};k._geometryForSerialization=function(b){({geometry:b}=b);return L.isNone(b)?null:"mesh"===b.type||"extent"===b.type?G.fromExtent(b.extent):b};k._startWorker=function(){var b=u._asyncToGenerator(function*(e){this._connection=
yield X.open("GeoJSONSourceWorker",{strategy:T("feature-layers-workers")?"dedicated":"local",signal:e});const {fields:m,spatialReference:r,hasZ:t,geometryType:l,objectIdField:w,url:A,timeInfo:H,customParameters:Q}=this.layer;var B="defaults"===this.layer.originOf("spatialReference");B={url:A,customParameters:Q,fields:m&&m.map(x=>x.toJSON()),geometryType:f.featureGeometryTypeKebabDictionary.toJSON(l),hasZ:t,objectIdField:w,timeInfo:H?H.toJSON():null,spatialReference:B?null:r&&r.toJSON()};e=yield this._connection.invoke("load",
B,{signal:e});for(const x of e.warnings)O.warn(x.message,{layer:this.layer,warning:x});e.featureErrors.length&&O.warn(`Encountered ${e.featureErrors.length} validation errors while loading features`,e.featureErrors);this.sourceJSON=e.layerDefinition;this.capabilities=M.createCapabilities(this.sourceJSON.hasZ,!0)});return function(e){return b.apply(this,arguments)}}();return z}(U);c.__decorate([y.property()],q.GeoJSONSource.prototype,"capabilities",void 0);c.__decorate([y.property()],q.GeoJSONSource.prototype,
"type",void 0);c.__decorate([y.property({constructOnly:!0})],q.GeoJSONSource.prototype,"layer",void 0);c.__decorate([y.property()],q.GeoJSONSource.prototype,"sourceJSON",void 0);q.GeoJSONSource=c.__decorate([F.subclass("esri.layers.graphics.sources.GeoJSONSource")],q.GeoJSONSource);Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"*noref":1}});
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/support/typeUtils ./Layer ./graphics/sources/GeoJSONSource ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/FeatureEffectLayer ./mixins/FeatureReductionLayer ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/commonProperties ./support/FeatureTemplate ./support/FeatureType ./support/Field ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ../rest/support/Query ../support/popupUtils ../geometry/SpatialReference ../geometry/Extent".split(" "),function(q,
u,c,K,E,T,U,V,L,W,X,y,Z,aa,F,M,d,N,G,f,O,P,z,k,b,e,m,r,t,l,w,A,H,Q,B,x,v,ba,ca,da,ea,R,fa,ha,C,ia,Y,ja){K=ea.defineFieldProperties();d=function(S){function I(a){a=S.call(this,a)||this;a.copyright=null;a.definitionExpression=null;a.displayField=null;a.editingEnabled=!1;a.elevationInfo=null;a.fields=null;a.fieldsIndex=null;a.fullExtent=null;a.geometryType=null;a.hasZ=void 0;a.labelsVisible=!0;a.labelingInfo=null;a.legendEnabled=!0;a.objectIdField=null;a.operationalLayerType="GeoJSON";a.popupEnabled=
!0;a.popupTemplate=null;a.screenSizePerspectiveEnabled=!0;a.source=new e.GeoJSONSource({layer:u._assertThisInitialized(a)});a.spatialReference=Y.WGS84;a.templates=null;a.title="GeoJSON";a.type="geojson";a.typeIdField=null;a.types=null;return a}u._inheritsLoose(I,S);var n=I.prototype;n.destroy=function(){this.source?.destroy()};n.load=function(a){const g=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},a).catch(N.throwIfAbortError).then(()=>this.source.load(a)).then(()=>{this.read(this.source.sourceJSON,
{origin:"service",url:this.parsedUrl});this.revert(["objectIdField","fields","timeInfo"],"service");R.fixRendererFields(this.renderer,this.fieldsIndex);R.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)});this.addResolvingPromise(g);return Promise.resolve(this)};n.applyEdits=function(){var a=u._asyncToGenerator(function*(g,h){const p=yield new Promise((J,D)=>q(["./graphics/editingSupport"],J,D));yield this.load();g=yield p.applyEdits(this,this.source,g,h);this.read({extent:this.source.sourceJSON.extent,
timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0});return g});return function(g,h){return a.apply(this,arguments)}}();n.on=function(a,g){return S.prototype.on.call(this,a,g)};n.createPopupTemplate=function(a){return ia.createPopupTemplate(this,a)};n.createQuery=function(){const a=new C,g=this.get("capabilities.data");a.returnGeometry=!0;g&&g.supportsZ&&(a.returnZ=!0);a.outFields=["*"];a.where=this.definitionExpression||"1\x3d1";const {timeOffset:h,timeExtent:p}=this;a.timeExtent=
null!=h&&null!=p?p.offset(-h.value,h.unit):p||null;return a};n.getFieldDomain=function(a,g){let h,p=!1;g=(g=g&&g.feature)&&g.attributes;const J=this.typeIdField&&g&&g[this.typeIdField];null!=J&&this.types&&(p=this.types.some(D=>D.id==J?((h=D.domains&&D.domains[a])&&"inherited"===h.type&&(h=this._getLayerDomain(a)),!0):!1));p||h||(h=this._getLayerDomain(a));return h};n.getField=function(a){return this.fieldsIndex.get(a)};n.queryFeatures=function(a,g){return this.load().then(()=>this.source.queryFeatures(C.from(a)||
this.createQuery(),g)).then(h=>{if(h?.features)for(const p of h.features)p.layer=p.sourceLayer=this;return h})};n.queryObjectIds=function(a,g){return this.load().then(()=>this.source.queryObjectIds(C.from(a)||this.createQuery(),g))};n.queryFeatureCount=function(a,g){return this.load().then(()=>this.source.queryFeatureCount(C.from(a)||this.createQuery(),g))};n.queryExtent=function(a,g){return this.load().then(()=>this.source.queryExtent(C.from(a)||this.createQuery(),g))};n.hasDataChanged=function(){var a=
u._asyncToGenerator(function*(){try{const {dataChanged:g,updates:h}=yield this.source.refresh(this.customParameters);M.isSome(h)&&this.read(h,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0});return g}catch{}return!1});return function(){return a.apply(this,arguments)}}();n._getLayerDomain=function(a){if(!this.fields)return null;let g=null;this.fields.some(h=>{h.name===a&&(g=h.domain);return!!g});return g};u._createClass(I,[{key:"capabilities",get:function(){return this.source?this.source.capabilities:
null}},{key:"createQueryVersion",get:function(){this.commitProperty("definitionExpression");this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("capabilities");return(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"parsedUrl",get:function(){return this.url?G.urlToObject(this.url):
null}},{key:"renderer",set:function(a){R.fixRendererFields(a,this.fieldsIndex);this._set("renderer",a)}},{key:"url",set:function(a){a?(a=G.urlToObject(a),this._set("url",a.path),a.query&&(this.customParameters={...this.customParameters,...a.query})):this._set("url",a)}}]);return I}(A.OrderedLayer(r.CustomParametersMixin(l.FeatureReductionLayer(t.FeatureEffectLayer(m.BlendLayer(x.TemporalLayer(B.ScaleRangeLayer(Q.RefreshableLayer(w.OperationalLayer(H.PortalLayer(d.MultiOriginJSONMixin(b))))))))))));
c.__decorate([f.property({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"capabilities",null);c.__decorate([f.property({type:String})],d.prototype,"copyright",void 0);c.__decorate([f.property({readOnly:!0})],d.prototype,"createQueryVersion",null);c.__decorate([f.property({readOnly:!0})],d.prototype,"defaultPopupTemplate",null);c.__decorate([f.property({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],d.prototype,"definitionExpression",void 0);c.__decorate([f.property({type:String})],
d.prototype,"displayField",void 0);c.__decorate([f.property({type:Boolean})],d.prototype,"editingEnabled",void 0);c.__decorate([f.property(v.elevationInfo)],d.prototype,"elevationInfo",void 0);c.__decorate([f.property({type:[da],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],d.prototype,"fields",void 0);c.__decorate([f.property(K.fieldsIndex)],d.prototype,"fieldsIndex",void 0);c.__decorate([f.property({type:ja,json:{name:"extent"}})],
d.prototype,"fullExtent",void 0);c.__decorate([f.property({type:["point","polygon","polyline","multipoint"],json:{read:{reader:k.featureGeometryTypeKebabDictionary.read}}})],d.prototype,"geometryType",void 0);c.__decorate([f.property({type:Boolean})],d.prototype,"hasZ",void 0);c.__decorate([f.property(v.id)],d.prototype,"id",void 0);c.__decorate([f.property({type:Boolean,readOnly:!0})],d.prototype,"isTable",null);c.__decorate([f.property(v.labelsVisible)],d.prototype,"labelsVisible",void 0);c.__decorate([f.property({type:[fa],
json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ha.reader},write:!0}})],d.prototype,"labelingInfo",void 0);c.__decorate([f.property(v.legendEnabled)],d.prototype,"legendEnabled",void 0);c.__decorate([f.property({type:["show","hide"]})],d.prototype,"listMode",void 0);c.__decorate([f.property({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],d.prototype,"objectIdField",void 0);c.__decorate([f.property(v.opacity)],
d.prototype,"opacity",void 0);c.__decorate([f.property({type:["GeoJSON"]})],d.prototype,"operationalLayerType",void 0);c.__decorate([f.property({readOnly:!0})],d.prototype,"parsedUrl",null);c.__decorate([f.property(v.popupEnabled)],d.prototype,"popupEnabled",void 0);c.__decorate([f.property({type:E,json:{name:"popupInfo",write:!0}})],d.prototype,"popupTemplate",void 0);c.__decorate([f.property({types:F.rendererTypes,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},
"web-scene":{types:F.webSceneRendererTypes}}}})],d.prototype,"renderer",null);c.__decorate([f.property(v.screenSizePerspectiveEnabled)],d.prototype,"screenSizePerspectiveEnabled",void 0);c.__decorate([f.property({readOnly:!0})],d.prototype,"source",void 0);c.__decorate([f.property({type:Y})],d.prototype,"spatialReference",void 0);c.__decorate([f.property({type:[ba]})],d.prototype,"templates",void 0);c.__decorate([f.property()],d.prototype,"title",void 0);c.__decorate([f.property({json:{read:!1},readOnly:!0})],
d.prototype,"type",void 0);c.__decorate([f.property({type:String,readOnly:!0})],d.prototype,"typeIdField",void 0);c.__decorate([f.property({type:[ca]})],d.prototype,"types",void 0);c.__decorate([f.property(v.url)],d.prototype,"url",null);return d=c.__decorate([z.subclass("esri.layers.GeoJSONLayer")],d)});