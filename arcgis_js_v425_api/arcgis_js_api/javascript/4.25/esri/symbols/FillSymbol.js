// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./SimpleLineSymbol ./Symbol".split(" "),function(g,c,e,a,m,h,k,l){a=function(f){function d(b){b=f.call(this,b)||this;b.outline=null;b.type=null;return b}g._inheritsLoose(d,f);d.prototype.hash=function(){return`${this.type}.${this.outline&&this.outline.hash()}`};return d}(l);c.__decorate([e.property({types:{key:"type",
base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":k}},json:{default:null,write:!0}})],a.prototype,"outline",void 0);c.__decorate([e.property({type:["simple-fill","picture-fill"],readOnly:!0})],a.prototype,"type",void 0);return a=c.__decorate([h.subclass("esri.symbols.FillSymbol")],a)});