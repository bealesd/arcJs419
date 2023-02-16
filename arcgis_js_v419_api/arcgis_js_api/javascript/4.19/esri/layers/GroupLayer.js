// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/maybe ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/utils ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/loadAll ../webdoc/support/writeUtils ./Layer ../support/LayersMixin ../support/TablesMixin ../core/MultiOriginJSONSupport ./mixins/OperationalLayer ./mixins/BlendLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer".split(" "),
function(n,f,d,q,F,G,r,g,H,t,u,I,J,K,v,w,x,y,z,A,B,C,D,E){d=function(p){function m(a){a=p.call(this,a)||this;a._visibilityHandles={};a.fullExtent=void 0;a.operationalLayerType="GroupLayer";a.spatialReference=void 0;a.type="group";a._visibilityWatcher=a._visibilityWatcher.bind(n._assertThisInitialized(a));return a}n._inheritsLoose(m,p);var e=m.prototype;e.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible);this.watch("visible",this._visibleWatcher.bind(this),!0)};e._writeLayers=
function(a,b,k,c){const h=[];if(!a)return h;a.forEach(l=>{l=w.getLayerJSON(l,c.webmap?c.webmap.getLayerJSONFromResourceInfo(l):null,c);q.isSome(l)&&l.layerType&&h.push(l)});b.layers=h};e.load=function(a){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},a));return Promise.resolve(this)};e.loadAll=function(){return v.loadAll(this,a=>{a(this.layers)})};e.layerAdded=function(a){a.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(a):
"inherited"===this.visibilityMode&&(a.visible=this.visible);this._visibilityHandles[a.uid]=a.watch("visible",this._visibilityWatcher,!0)};e.layerRemoved=function(a){const b=this._visibilityHandles[a.uid];b&&(b.remove(),delete this._visibilityHandles[a.uid]);this._enforceVisibility(this.visibilityMode,this.visible)};e._turnOffOtherLayers=function(a){this.layers.forEach(b=>{b!==a&&(b.visible=!1)})};e._enforceVisibility=function(a,b){if(r.getProperties(this).initialized){var k=this.layers,c=k.find(h=>
h.visible);switch(a){case "exclusive":k.length&&!c&&(c=k.getItemAt(0),c.visible=!0);this._turnOffOtherLayers(c);break;case "inherited":k.forEach(h=>{h.visible=b})}}};e._visibleWatcher=function(a){"inherited"===this.visibilityMode&&this.layers.forEach(b=>{b.visible=a})};e._visibilityWatcher=function(a,b,k,c){switch(this.visibilityMode){case "exclusive":a?this._turnOffOtherLayers(c):this._isAnyLayerVisible()||(c.visible=!0);break;case "inherited":c.visible=this.visible}};e._isAnyLayerVisible=function(){return this.layers.some(a=>
a.visible)};n._createClass(m,[{key:"portalItem",set:function(a){this._set("portalItem",a)}},{key:"visibilityMode",set:function(a){const b=this._get("visibilityMode")!==a;this._set("visibilityMode",a);b&&this._enforceVisibility(a,this.visible)}}]);return m}(C.BlendLayer(E.ScaleRangeLayer(B.OperationalLayer(D.PortalLayer(z.TablesMixin(y.LayersMixin(A.MultiOriginJSONMixin(x))))))));f.__decorate([g.property()],d.prototype,"fullExtent",void 0);f.__decorate([g.property({json:{read:!1,write:{ignoreOrigin:!0}}})],
d.prototype,"layers",void 0);f.__decorate([u.writer("layers")],d.prototype,"_writeLayers",null);f.__decorate([g.property({type:["GroupLayer"]})],d.prototype,"operationalLayerType",void 0);f.__decorate([g.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",null);f.__decorate([g.property()],d.prototype,"spatialReference",void 0);f.__decorate([g.property({json:{read:!1},readOnly:!0,value:"group"})],d.prototype,"type",void 0);f.__decorate([g.property({type:["independent",
"inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],d.prototype,"visibilityMode",null);return d=f.__decorate([t.subclass("esri.layers.GroupLayer")],d)});