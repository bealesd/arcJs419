// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,b,a,d,l,m,k){var e;a=e=function(g){function f(){var c=g.apply(this,arguments)||this;c.age=null;c.ageReceived=null;c.displayCount=null;c.maxObservations=1;return c}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({age:this.age,
ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})};return f}(a.JSONSupport);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"age",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0);return a=e=b.__decorate([k.subclass("esri.layers.support.PurgeOptions")],
a)});