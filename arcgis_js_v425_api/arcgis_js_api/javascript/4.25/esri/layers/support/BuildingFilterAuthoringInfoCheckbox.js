// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./BuildingFilterAuthoringInfo ./BuildingFilterAuthoringInfoBlock".split(" "),function(k,b,c,l,f,p,m,a,n){var d;c=c.ofType(n);a=d=function(g){function e(){var h=g.apply(this,arguments)||this;h.type="checkbox";return h}k._inheritsLoose(e,g);e.prototype.clone=function(){return new d({filterBlocks:l.clone(this.filterBlocks)})};
return e}(a);b.__decorate([f.property({type:["checkbox"]})],a.prototype,"type",void 0);b.__decorate([f.property({type:c,json:{write:!0}})],a.prototype,"filterBlocks",void 0);return a=d=b.__decorate([m.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],a)});