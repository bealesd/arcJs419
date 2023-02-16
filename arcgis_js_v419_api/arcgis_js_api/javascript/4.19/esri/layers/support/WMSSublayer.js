// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/jsonMap ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../geometry/Extent ../../core/Collection ../../core/Handles ../../core/MultiOriginJSONSupport".split(" "),
function(l,c,b,y,p,d,q,z,m,r,A,B,C,t,u,v,w){var h;let x=0;b=h=function(n){function k(a){a=n.call(this,a)||this;a._sublayersHandles=new v;a.dimensions=null;a.fullExtents=null;a.featureInfoFormat=null;a.featureInfoUrl=null;a.legendUrl=null;a.legendEnabled=!0;a.maxScale=0;a.minScale=0;a.popupEnabled=!1;a.queryable=!1;a.spatialReferences=null;return a}l._inheritsLoose(k,n);var g=k.prototype;g.readExtent=function(a,e){return(a=e.extent)?t.fromJSON(a):null};g.readLegendUrl=function(a,e){return e?e.legendUrl||
e.legendURL:null};g.castSublayers=function(a){return p.ensureType(u.ofType(h),a)};g.clone=function(){const a=new h;this.hasOwnProperty("description")&&(a.description=this.description);this.hasOwnProperty("fullExtent")&&(a.fullExtent=this.fullExtent.clone());this.hasOwnProperty("fullExtents")&&(a.fullExtents=this.fullExtents.map(e=>e.clone()));this.hasOwnProperty("featureInfoFormat")&&(a.featureInfoFormat=this.featureInfoFormat);this.hasOwnProperty("featureInfoUrl")&&(a.featureInfoUrl=this.featureInfoUrl);
this.hasOwnProperty("legendUrl")&&(a.legendUrl=this.legendUrl);this.hasOwnProperty("legendEnabled")&&(a.legendEnabled=this.legendEnabled);this.hasOwnProperty("layer")&&(a.layer=this.layer);this.hasOwnProperty("name")&&(a.name=this.name);this.hasOwnProperty("parent")&&(a.parent=this.parent);this.hasOwnProperty("queryable")&&(a.queryable=this.queryable);this.hasOwnProperty("sublayers")&&(a.sublayers=this.sublayers&&this.sublayers.map(e=>e.clone()));this.hasOwnProperty("spatialReferences")&&(a.spatialReferences=
this.spatialReferences.map(e=>e));this.hasOwnProperty("visible")&&(a.visible=this.visible);this.hasOwnProperty("title")&&(a.title=this.title);return a};g._setAndNotifyLayer=function(a,e){const f=this.layer;this._get(a)!==e&&(this._set(a,e),f&&f.emit("wms-sublayer-update",{propertyName:a,id:this.id}))};l._createClass(k,[{key:"description",get:function(){return this._get("description")},set:function(a){this._set("description",a)}},{key:"fullExtent",get:function(){return this._get("fullExtent")},set:function(a){this._set("fullExtent",
a)}},{key:"id",get:function(){const a=this._get("id");return null==a?x++:a},set:function(a){this._set("id",a)}},{key:"layer",set:function(a){this._set("layer",a);this.sublayers&&this.sublayers.forEach(e=>e.layer=a)}},{key:"name",get:function(){return this._get("name")},set:function(a){this._set("name",a)}},{key:"sublayers",set:function(a){const e=this._get("sublayers");e&&(e.forEach(f=>{f.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null);a&&(a.forEach(f=>{f.parent=this;
f.layer=this.layer}),this._sublayersHandles.add([a.on("after-add",({item:f})=>{f.parent=this;f.layer=this.layer}),a.on("after-remove",({item:f})=>{f.parent=null;f.layer=null})]));this._set("sublayers",a)}},{key:"title",get:function(){return this._get("title")},set:function(a){this._set("title",a)}},{key:"visible",get:function(){return this._get("visible")},set:function(a){this._setAndNotifyLayer("visible",a)}}]);return k}(w.MultiOriginJSONSupport);c.__decorate([d.property()],b.prototype,"description",
null);c.__decorate([d.property({readOnly:!0})],b.prototype,"dimensions",void 0);c.__decorate([d.property({value:null})],b.prototype,"fullExtent",null);c.__decorate([m.reader("fullExtent",["extent"])],b.prototype,"readExtent",null);c.__decorate([d.property()],b.prototype,"fullExtents",void 0);c.__decorate([d.property()],b.prototype,"featureInfoFormat",void 0);c.__decorate([d.property()],b.prototype,"featureInfoUrl",void 0);c.__decorate([d.property({type:Number,json:{write:{enabled:!1,overridePolicy:()=>
({ignoreOrigin:!0,enabled:!0})}}})],b.prototype,"id",null);c.__decorate([d.property({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],b.prototype,"legendUrl",void 0);c.__decorate([m.reader(["web-document"],"legendUrl")],b.prototype,"readLegendUrl",null);c.__decorate([d.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,
write:!1},"web-scene":{read:!1,write:!1}}}})],b.prototype,"legendEnabled",void 0);c.__decorate([d.property({value:null})],b.prototype,"layer",null);c.__decorate([d.property()],b.prototype,"maxScale",void 0);c.__decorate([d.property()],b.prototype,"minScale",void 0);c.__decorate([d.property({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],b.prototype,"name",null);c.__decorate([d.property()],b.prototype,"parent",void 0);c.__decorate([d.property({type:Boolean,json:{read:{source:"showPopup"},
write:{ignoreOrigin:!0,target:"showPopup"}}})],b.prototype,"popupEnabled",void 0);c.__decorate([d.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],b.prototype,"queryable",void 0);c.__decorate([d.property()],b.prototype,"sublayers",null);c.__decorate([q.cast("sublayers")],b.prototype,"castSublayers",null);c.__decorate([d.property({type:[Number],json:{read:{source:"spatialReferences"}}})],b.prototype,"spatialReferences",void 0);c.__decorate([d.property({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],
b.prototype,"title",null);c.__decorate([d.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],b.prototype,"visible",null);return b=h=c.__decorate([r.subclass("esri.layers.support.WMSSublayer")],b)});