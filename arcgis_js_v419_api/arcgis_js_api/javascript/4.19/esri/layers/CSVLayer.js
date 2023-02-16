// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../chunks/persistableUrlUtils ../geometry/SpatialReference ../geometry ../tasks/support/Query ./FeatureLayer ./graphics/data/QueryEngineCapabilities ./graphics/sources/CSVSource".split(" "),
function(m,d,b,x,y,e,z,r,t,A,B,C,n,u,D,g,v,w,p){b=function(l){function h(...a){a=l.call(this,...a)||this;a.delimiter=null;a.editingEnabled=!1;a.fields=null;a.latitudeField=null;a.locationType="coordinates";a.longitudeField=null;a.operationalLayerType="CSV";a.outFields=["*"];a.path=null;a.portalItem=null;a.spatialReference=u.WGS84;a.source=null;a.type="csv";return a}m._inheritsLoose(h,l);var f=h.prototype;f.normalizeCtorArgs=function(a,c){return"string"===typeof a?{url:a,...c}:a};f.readWebMapLabelsVisible=
function(a,c){return null!=c.showLabels?c.showLabels:!!(c.layerDefinition&&c.layerDefinition.drawingInfo&&c.layerDefinition.drawingInfo.labelingInfo)};f.createGraphicsSource=async function(a){const c=new p({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});this._set("source",c);await c.load({signal:a});this.read({locationInfo:c.locationInfo,columnDelimiter:c.columnDelimiter},
{origin:"service",url:this.parsedUrl});return c};f.queryFeatures=function(a,c){return this.load().then(()=>this.source.queryFeatures(g.from(a)||this.createQuery())).then(k=>{if(k&&k.features)for(const q of k.features)q.layer=q.sourceLayer=this;return k})};f.queryObjectIds=function(a,c){return this.load().then(()=>this.source.queryObjectIds(g.from(a)||this.createQuery()))};f.queryFeatureCount=function(a,c){return this.load().then(()=>this.source.queryFeatureCount(g.from(a)||this.createQuery()))};f.queryExtent=
function(a,c){return this.load().then(()=>this.source.queryExtent(g.from(a)||this.createQuery()))};f.write=function(a,c){return l.prototype.write.call(this,a,{...c,writeLayerSchema:!0})};f._verifyFields=function(){};f._verifySource=function(){};f._hasMemorySource=function(){return!1};m._createClass(h,[{key:"capabilities",get:function(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,
supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:w.queryCapabilities,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},
{key:"url",set:function(a){this._set("url",a)}}]);return h}(v);d.__decorate([e.property({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],b.prototype,"capabilities",null);d.__decorate([e.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],b.prototype,"delimiter",void 0);d.__decorate([e.property({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],b.prototype,"editingEnabled",void 0);d.__decorate([e.property({json:{read:{source:"layerDefinition.fields"},
write:{target:"layerDefinition.fields"}}})],b.prototype,"fields",void 0);d.__decorate([e.property({type:Boolean,readOnly:!0})],b.prototype,"isTable",null);d.__decorate([r.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],b.prototype,"readWebMapLabelsVisible",null);d.__decorate([e.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],b.prototype,"latitudeField",void 0);
d.__decorate([e.property({type:["show","hide"]})],b.prototype,"listMode",void 0);d.__decorate([e.property({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],b.prototype,"locationType",void 0);d.__decorate([e.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],b.prototype,"longitudeField",void 0);d.__decorate([e.property({type:["CSV"]})],
b.prototype,"operationalLayerType",void 0);d.__decorate([e.property()],b.prototype,"outFields",void 0);d.__decorate([e.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],b.prototype,"path",void 0);d.__decorate([e.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"portalItem",void 0);d.__decorate([e.property({json:{read:!1},cast:null,type:p,readOnly:!0})],b.prototype,"source",void 0);d.__decorate([e.property({json:{read:!1},
value:"csv",readOnly:!0})],b.prototype,"type",void 0);d.__decorate([e.property({json:{read:n.read,write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}})],b.prototype,"url",null);return b=d.__decorate([t.subclass("esri.layers.CSVLayer")],b)});