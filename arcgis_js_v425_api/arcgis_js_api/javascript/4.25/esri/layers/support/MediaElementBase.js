// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Identifiable ../../core/Loadable ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ControlPointsGeoreference ./CornersGeoreference ./ExtentAndRotationGeoreference ./GeoreferenceBase".split(" "),function(h,b,a,k,d,e,r,l,m,n,p,q){e={key:"type",base:q,typeMap:{"control-points":m,corners:n,"extent-and-rotation":p}};a=
function(f){function g(){var c=f.apply(this,arguments)||this;c.georeference=null;c.opacity=1;return c}h._inheritsLoose(g,f);return g}(a.NumericIdentifiableMixin(k));b.__decorate([d.property({types:e})],a.prototype,"georeference",void 0);b.__decorate([d.property()],a.prototype,"opacity",void 0);return a=b.__decorate([l.subclass("esri.layers.support.MediaElementBase")],a)});