// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../geometry/SpatialReference ../../geometry ../support/serviceTileInfoProperty ../support/TilemapCache".split(" "),function(k,
l,b,t,u,v,d,w,g,n,x,y,z,p,A,q,r){k.ArcGISCachedService=a=>{a=function(m){function f(){var c=m.apply(this,arguments)||this;c.copyright=null;c.minScale=0;c.maxScale=0;c.spatialReference=null;c.tileInfo=null;c.tilemapCache=null;return c}l._inheritsLoose(f,m);var h=f.prototype;h.readMinScale=function(c,e){return null!=e.minLOD&&null!=e.maxLOD?c:0};h.readMaxScale=function(c,e){return null!=e.minLOD&&null!=e.maxLOD?c:0};h.readTilemapCache=function(c,e){return e.capabilities&&-1<e.capabilities.indexOf("Tilemap")?
new r.TilemapCache({layer:this}):null};l._createClass(f,[{key:"supportsBlankTile",get:function(){return 10.2<=this.version}}]);return f}(a);b.__decorate([d.property({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0);b.__decorate([d.property()],a.prototype,"minScale",void 0);b.__decorate([g.reader("service","minScale")],a.prototype,"readMinScale",null);b.__decorate([d.property()],a.prototype,"maxScale",void 0);b.__decorate([g.reader("service","maxScale")],a.prototype,"readMaxScale",
null);b.__decorate([d.property({type:p})],a.prototype,"spatialReference",void 0);b.__decorate([d.property({readOnly:!0})],a.prototype,"supportsBlankTile",null);b.__decorate([d.property(q.serviceTileInfoProperty)],a.prototype,"tileInfo",void 0);b.__decorate([d.property()],a.prototype,"tilemapCache",void 0);b.__decorate([g.reader("service","tilemapCache",["capabilities"])],a.prototype,"readTilemapCache",null);b.__decorate([d.property()],a.prototype,"version",void 0);return a=b.__decorate([n.subclass("esri.layers.mixins.ArcGISCachedService")],
a)};Object.defineProperty(k,"__esModule",{value:!0})});