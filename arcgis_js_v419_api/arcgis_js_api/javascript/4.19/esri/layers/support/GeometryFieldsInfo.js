// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../core/unitUtils".split(" "),function(h,d,a,m,n,e,p,k,q,r,t,l,f){a=function(c){function g(b){b=c.call(this,b)||this;b.shapeAreaField=null;b.shapeLengthField=
null;b.units=null;return b}h._inheritsLoose(g,c);return g}(l.JSONSupport);d.__decorate([e.property({type:String,json:{read:{source:"shapeAreaFieldName"}}})],a.prototype,"shapeAreaField",void 0);d.__decorate([e.property({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0);d.__decorate([e.property({type:String,json:{read:c=>f.areaUnitsJSONMap.read(c)||f.lengthUnitsJSONMap.read(c)}})],a.prototype,"units",void 0);return a=d.__decorate([k.subclass("esri.layers.support.GeometryFieldsInfo")],
a)});