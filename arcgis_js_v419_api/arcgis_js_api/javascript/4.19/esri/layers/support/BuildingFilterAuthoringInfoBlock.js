// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/lang ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../core/Collection ./BuildingFilterAuthoringInfoType".split(" "),function(g,d,e,h,p,q,k,r,l,t,u,v,a,m,n){var b;e=m.ofType(n);a=b=function(f){function c(){return f.apply(this,
arguments)||this}g._inheritsLoose(c,f);c.prototype.clone=function(){return new b({filterTypes:h.clone(this.filterTypes)})};return c}(a.JSONSupport);d.__decorate([k.property({type:e,json:{write:!0}})],a.prototype,"filterTypes",void 0);return a=b=d.__decorate([l.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],a)});