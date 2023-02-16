// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ./Layer ../symbols/support/ElevationInfo ./mixins/BlendLayer ./mixins/ScaleRangeLayer ../support/GraphicsCollection".split(" "),function(k,d,b,t,u,e,v,l,w,x,y,m,n,p,q,h){b=function(f){function g(a){a=f.call(this,
a)||this;a.elevationInfo=null;a.graphics=new h["default"];a.screenSizePerspectiveEnabled=!0;a.type="graphics";a.internal=!1;return a}k._inheritsLoose(g,f);var c=g.prototype;c.destroy=function(){this.removeAll();this.graphics.destroy()};c.add=function(a){this.graphics.add(a);return this};c.addMany=function(a){this.graphics.addMany(a);return this};c.removeAll=function(){this.graphics.removeAll();return this};c.remove=function(a){this.graphics.remove(a)};c.removeMany=function(a){this.graphics.removeMany(a)};
c.on=function(a,r){return f.prototype.on.call(this,a,r)};c.graphicChanged=function(a){this.emit("graphic-update",a)};return g}(p.BlendLayer(q.ScaleRangeLayer(m)));d.__decorate([e.property({type:n})],b.prototype,"elevationInfo",void 0);d.__decorate([e.property(h.graphicsCollectionProperty())],b.prototype,"graphics",void 0);d.__decorate([e.property({type:["show","hide"]})],b.prototype,"listMode",void 0);d.__decorate([e.property()],b.prototype,"screenSizePerspectiveEnabled",void 0);d.__decorate([e.property({readOnly:!0})],
b.prototype,"type",void 0);d.__decorate([e.property({constructOnly:!0})],b.prototype,"internal",void 0);return b=d.__decorate([l.subclass("esri.layers.GraphicsLayer")],b)});