// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport".split(" "),function(h,b,a,m,n,d,p,k,q,r,t,l){var e;a=e=function(g){function f(){var c=g.apply(this,arguments)||this;c.age=null;c.ageReceived=null;c.displayCount=
null;c.maxObservations=1;return c}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})};return f}(l.JSONSupport);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"age",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0);
b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0);return a=e=b.__decorate([k.subclass("esri.layers.support.PurgeOptions")],a)});