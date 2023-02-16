// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/JSONSupport ../tasks/support/colorRamps".split(" "),function(l,c,b,m,t,u,d,n,p,q,v,w,x,r,g){var e;b=e=function(h){function f(a){a=
h.call(this,a)||this;a.altitude=45;a.azimuth=315;a.colorRamp=null;a.hillshadeType="multi-directional";a.pixelSizePower=.664;a.pixelSizeFactor=.024;a.scalingType="none";a.type="raster-shaded-relief";a.zFactor=1;return a}l._inheritsLoose(f,h);var k=f.prototype;k.readColorRamp=function(a){return g.fromJSON(a)};k.clone=function(){return new e({hillshadeType:this.hillshadeType,altitude:this.altitude,azimuth:this.azimuth,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizeFactor:this.pixelSizeFactor,
pixelSizePower:this.pixelSizePower,colorRamp:m.clone(this.colorRamp)})};return f}(r.JSONSupport);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"altitude",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"azimuth",void 0);c.__decorate([d.property({types:g.types,json:{write:!0}})],b.prototype,"colorRamp",void 0);c.__decorate([p.reader("colorRamp")],b.prototype,"readColorRamp",null);c.__decorate([d.property({type:["traditional","multi-directional"],
json:{write:!0}})],b.prototype,"hillshadeType",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"pixelSizePower",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"pixelSizeFactor",void 0);c.__decorate([d.property({type:["none","adjusted"],json:{write:!0}})],b.prototype,"scalingType",void 0);c.__decorate([n.enumeration({rasterShadedRelief:"raster-shaded-relief"})],b.prototype,"type",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],
b.prototype,"zFactor",void 0);return b=e=c.__decorate([q.subclass("esri.renderers.RasterShadedReliefRenderer")],b)});