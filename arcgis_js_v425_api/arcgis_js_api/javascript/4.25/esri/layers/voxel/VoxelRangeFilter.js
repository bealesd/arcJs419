// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,b,a,h,d,l,m,k){a=function(e){function f(){var c=e.apply(this,arguments)||this;c.enabled=!1;c.range=null;return c}g._inheritsLoose(f,e);return f}(a.ClonableMixin(h.JSONSupport));b.__decorate([d.property({type:Boolean,
json:{default:!1,write:!0}})],a.prototype,"enabled",void 0);b.__decorate([d.property({type:[Number],json:{write:!0}})],a.prototype,"range",void 0);return a=b.__decorate([k.subclass("esri.layers.voxel.VoxelRangeFilter")],a)});