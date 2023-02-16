// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./ColorRamp".split(" "),function(m,c,g,h,d,k,n,p,a){var e;a=e=function(l){function f(b){b=l.call(this,b)||this;b.algorithm=null;b.fromColor=null;b.toColor=null;b.type="algorithmic";return b}m._inheritsLoose(f,l);f.prototype.clone=
function(){return new e({fromColor:h.clone(this.fromColor),toColor:h.clone(this.toColor),algorithm:this.algorithm})};return f}(a);c.__decorate([n.enumeration({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],a.prototype,"algorithm",void 0);c.__decorate([d.property({type:g,json:{type:[k.Integer],write:!0}})],a.prototype,"fromColor",void 0);c.__decorate([d.property({type:g,json:{type:[k.Integer],write:!0}})],a.prototype,"toColor",void 0);c.__decorate([d.property({type:["algorithmic"]})],
a.prototype,"type",void 0);return a=e=c.__decorate([p.subclass("esri.rest.support.AlgorithmicColorRamp")],a)});