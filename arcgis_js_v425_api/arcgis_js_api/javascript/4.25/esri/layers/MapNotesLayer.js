// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../Graphic ../symbols ../core/Collection ../core/Error ../core/lang ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/Warning ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../geometry/projection ../geometry/support/aaBoundingRect ../geometry/support/normalizeUtils ../geometry/support/spatialReferenceUtils ./FeatureLayer ./GraphicsLayer ./Layer ./graphics/objectIdUtils ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./support/Field ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../symbols/TextSymbol ../geometry/SpatialReference ../geometry/Extent".split(" "),
function(y,d,f,M,ia,B,N,C,l,O,P,F,h,ja,x,G,Q,w,r,R,S,T,U,V,W,X,Y,Z,aa,H,ba,ca,I,da,z,ea){function A(q){return"markup"===q.featureCollectionType||q.layers.some(p=>null!=p.layerDefinition.visibilityField||!J(p))}function J({layerDefinition:q,featureSet:p}){const e=q.geometryType??p.geometryType;return D.find(b=>e===b.geometryTypeJSON&&q.drawingInfo?.renderer?.symbol?.type===b.identifyingSymbol.type)}function K(){return new ea({xmin:-180,ymin:-90,xmax:180,ymax:90})}const L=new H({name:"OBJECTID",alias:"OBJECTID",
type:"oid",nullable:!1,editable:!1}),fa=new H({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=function(q){function p(e){e=q.call(this,e)||this;e.visibilityMode="inherited";return e}y._inheritsLoose(p,q);p.prototype.initialize=function(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer});this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})};y._createClass(p,[{key:"fullExtent",get:function(){const e=
this.layer?.spatialReference,b=this.fullBounds;return e?l.isNone(b)?w.projectOrLoad(K(),e).geometry:r.toExtent(b,e):null}},{key:"fullBounds",get:function(){const e=this.layer?.spatialReference;if(!e)return null;const b=r.empty();this.graphics.forEach(a=>{a=l.isSome(a.geometry)?w.projectOrLoad(a.geometry,e).geometry:null;l.isSome(a)&&r.expand(b,"point"===a.type?a:a.extent,b)});return r.equals(b,r.NEGATIVE_INFINITY)?null:b}},{key:"sublayers",get:function(){return this.graphics}}]);return p}(U);d.__decorate([h.property({readOnly:!0})],
u.prototype,"fullExtent",null);d.__decorate([h.property({readOnly:!0})],u.prototype,"fullBounds",null);d.__decorate([h.property({readOnly:!0})],u.prototype,"sublayers",null);d.__decorate([h.property()],u.prototype,"layer",void 0);d.__decorate([h.property()],u.prototype,"layerId",void 0);d.__decorate([h.property({readOnly:!0})],u.prototype,"visibilityMode",void 0);u=d.__decorate([G.subclass("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const D=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",
id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new ba).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new ca).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new I).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new I).toJSON()},
{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new da).toJSON()}];f=function(q){function p(b){var a=q.call(this,b)||this;a.capabilities={operations:{supportsMapNotesEditing:!0}};a.featureCollections=null;a.featureCollectionJSON=null;a.featureCollectionType="notes";a.legendEnabled=!1;a.listMode="hide-children";a.minScale=0;a.maxScale=0;a.spatialReference=z.WGS84;a.sublayers=new B(D.map(c=>new u({id:c.id,layerId:c.layerId,title:c.title,
layer:y._assertThisInitialized(a)})));a.title="Map Notes";a.type="map-notes";a.visibilityMode="inherited";return a}y._inheritsLoose(p,q);var e=p.prototype;e.readCapabilities=function(b,a,c){return{operations:{supportsMapNotesEditing:!A(a)&&"portal-item"!==c?.origin}}};e.readFeatureCollections=function(b,a,c){if(!A(a))return null;b=a.layers.map(k=>{const g=new T;g.read(k,c);return g});return new B({items:b})};e.readLegacyfeatureCollectionJSON=function(b,a){return A(a)?C.clone(a.featureCollection):
null};e.readMinScale=function(b,a){for(const c of a.layers)if(null!=c.layerDefinition.minScale)return c.layerDefinition.minScale;return 0};e.readMaxScale=function(b,a){for(const c of a.layers)if(null!=c.layerDefinition.maxScale)return c.layerDefinition.maxScale;return 0};e.readSpatialReference=function(b,a){return a.layers.length?z.fromJSON(a.layers[0].layerDefinition.spatialReference):z.WGS84};e.readSublayers=function(b,a,c){if(A(a))return null;b=[];c=a.layers.reduce((k,g)=>Math.max(k,g.layerDefinition.id??
-1),-1)+1;for(const k of a.layers){const {layerDefinition:g,featureSet:m}=k;a=g.id??c++;const n=J(k);l.isSome(n)&&(a=new u({id:n.id,title:g.name,layerId:a,layer:this,graphics:m.features.map(({geometry:v,symbol:t,attributes:E,popupInfo:ha})=>M.fromJSON({attributes:E,geometry:v,symbol:t,popupTemplate:ha}))}),b.push(a))}return new B(b)};e.writeSublayers=function(b,a,c,k){const {minScale:g,maxScale:m}=this;if(!l.isNone(b))if(c=b.some(t=>0<t.graphics.length),this.capabilities.operations.supportsMapNotesEditing){c=
[];var n=this.spatialReference.toJSON();a:for(var v of b)for(const t of v.graphics)if(l.isSome(t.geometry)){n=t.geometry.spatialReference.toJSON();break a}for(const t of D)v=b.find(E=>t.id===E.id),this._writeMapNoteSublayer(c,v,t,g,m,n,k);P.setDeepValue("featureCollection.layers",c,a)}else c&&k?.messages?.push(new N("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))};e.load=function(b){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},
b));return Promise.resolve(this)};e.read=function(b,a){"featureCollection"in b&&(b=C.clone(b),Object.assign(b,b.featureCollection));q.prototype.read.call(this,b,a)};e.beforeSave=function(){var b=y._asyncToGenerator(function*(){if(!l.isNone(this.sublayers)){var a=null,c=[];for(const g of this.sublayers)for(const m of g.graphics)if(l.isSome(m.geometry)){const n=m.geometry;a?S.equals(n.spatialReference,a)||(w.canProjectWithoutEngine(n.spatialReference,a)||w.isLoaded()||(yield w.load()),m.geometry=w.project(n,
a)):a=n.spatialReference;c.push(m)}var k=yield R.normalizeCentralMeridian(c.map(g=>g.geometry));c.forEach((g,m)=>g.geometry=k[m])}});return function(){return b.apply(this,arguments)}}();e._findSublayer=function(b){return l.isNone(this.sublayers)?null:this.sublayers?.find(a=>a.id===b)??null};e._writeMapNoteSublayer=function(b,a,c,k,g,m,n){const v=[];if(!l.isNone(a)){for(const t of a.graphics)this._writeMapNote(v,t,c.geometryType,n);this._normalizeObjectIds(v,L);b.push({layerDefinition:{name:a.title,
drawingInfo:{renderer:{type:"simple",symbol:C.clone(c.identifyingSymbol)}},id:a.layerId,geometryType:c.geometryTypeJSON,minScale:k,maxScale:g,objectIdField:"OBJECTID",fields:[L.toJSON(),fa.toJSON()],spatialReference:m},featureSet:{features:v,geometryType:c.geometryTypeJSON}})}};e._writeMapNote=function(b,a,c,k){if(!l.isNone(a)){var {geometry:g,symbol:m,popupTemplate:n}=a;l.isNone(g)||(g.type!==c?k?.messages?.push(new F("map-notes-layer:invalid-geometry-type",`Geometry "${g.type}" cannot be saved in "${c}" layer`,
{graphic:a})):l.isNone(m)?k?.messages?.push(new F("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:a})):(a={attributes:{...a.attributes},geometry:g.toJSON(),symbol:m.toJSON()},l.isSome(n)&&(a.popupInfo=n.toJSON()),b.push(a)))}};e._normalizeObjectIds=function(b,a){a=a.name;let c=W.findLastObjectIdFromFeatures(a,b)+1;const k=new Set;for(const g of b){g.attributes||(g.attributes={});({attributes:b}=g);if(null==b[a]||k.has(b[a]))b[a]=c++;k.add(b[a])}};y._createClass(p,[{key:"fullExtent",
get:function(){const b=this.spatialReference,a=r.empty();l.isSome(this.sublayers)?this.sublayers.forEach(({fullBounds:c})=>l.isSome(c)?r.expand(a,c,a):a,a):this.featureCollectionJSON?.layers.some(c=>c.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(c=>{c=w.projectOrLoad(c.layerDefinition.extent,b).geometry;l.isSome(c)&&r.expand(a,c,a)});return r.equals(a,r.NEGATIVE_INFINITY)?w.projectOrLoad(K(),b).geometry:r.toExtent(a,b)}},{key:"multipointLayer",get:function(){return this._findSublayer("multipointLayer")}},
{key:"pointLayer",get:function(){return this._findSublayer("pointLayer")}},{key:"polygonLayer",get:function(){return this._findSublayer("polygonLayer")}},{key:"polylineLayer",get:function(){return this._findSublayer("polylineLayer")}},{key:"textLayer",get:function(){return this._findSublayer("textLayer")}}]);return p}(X.BlendLayer(aa.ScaleRangeLayer(Y.OperationalLayer(Z.PortalLayer(O.MultiOriginJSONMixin(V))))));d.__decorate([h.property({readOnly:!0})],f.prototype,"capabilities",void 0);d.__decorate([x.reader(["portal-item",
"web-map"],"capabilities",["layers"])],f.prototype,"readCapabilities",null);d.__decorate([h.property({readOnly:!0})],f.prototype,"featureCollections",void 0);d.__decorate([x.reader(["web-map","portal-item"],"featureCollections",["layers"])],f.prototype,"readFeatureCollections",null);d.__decorate([h.property({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],f.prototype,"featureCollectionJSON",void 0);d.__decorate([x.reader(["web-map","portal-item"],"featureCollectionJSON",
["featureCollection"])],f.prototype,"readLegacyfeatureCollectionJSON",null);d.__decorate([h.property({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],f.prototype,"featureCollectionType",void 0);d.__decorate([h.property({readOnly:!0})],f.prototype,"fullExtent",null);d.__decorate([h.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],f.prototype,"legendEnabled",void 0);
d.__decorate([h.property({type:["show","hide","hide-children"]})],f.prototype,"listMode",void 0);d.__decorate([h.property({type:Number,nonNullable:!0,json:{write:!1}})],f.prototype,"minScale",void 0);d.__decorate([x.reader(["web-map","portal-item"],"minScale",["layers"])],f.prototype,"readMinScale",null);d.__decorate([h.property({type:Number,nonNullable:!0,json:{write:!1}})],f.prototype,"maxScale",void 0);d.__decorate([x.reader(["web-map","portal-item"],"maxScale",["layers"])],f.prototype,"readMaxScale",
null);d.__decorate([h.property({readOnly:!0})],f.prototype,"multipointLayer",null);d.__decorate([h.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],f.prototype,"operationalLayerType",void 0);d.__decorate([h.property({readOnly:!0})],f.prototype,"pointLayer",null);d.__decorate([h.property({readOnly:!0})],f.prototype,"polygonLayer",null);d.__decorate([h.property({readOnly:!0})],f.prototype,"polylineLayer",null);d.__decorate([h.property({type:z})],f.prototype,"spatialReference",void 0);
d.__decorate([x.reader(["web-map","portal-item"],"spatialReference",["layers"])],f.prototype,"readSpatialReference",null);d.__decorate([h.property({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],f.prototype,"sublayers",void 0);d.__decorate([x.reader("web-map","sublayers",["layers"])],f.prototype,"readSublayers",null);d.__decorate([Q.writer("web-map","sublayers")],f.prototype,"writeSublayers",null);d.__decorate([h.property({readOnly:!0})],f.prototype,"textLayer",null);d.__decorate([h.property()],
f.prototype,"title",void 0);d.__decorate([h.property({readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0);return f=d.__decorate([G.subclass("esri.layers.MapNotesLayer")],f)});