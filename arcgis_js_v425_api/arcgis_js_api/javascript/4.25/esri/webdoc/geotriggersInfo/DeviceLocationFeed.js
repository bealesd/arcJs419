// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ExpressionInfo".split(" "),function(h,d,a,b,k,e,n,p,l,m){b=new b.JSONMap({deviceLocation:"device-location"});a=function(f){function g(c){c=f.call(this,c)||this;c.filterExpression=null;c.type="device-location";return c}
h._inheritsLoose(g,f);return g}(a.ClonableMixin(k.JSONSupport));d.__decorate([e.property({type:m,json:{write:!0}})],a.prototype,"filterExpression",void 0);d.__decorate([e.property({type:b.apiValues,readOnly:!0,json:{type:b.jsonValues,read:b.read,write:b.write}})],a.prototype,"type",void 0);return a=d.__decorate([l.subclass("esri.webdoc.geotriggersInfo.DeviceLocationFeed")],a)});