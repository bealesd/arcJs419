// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../networks/support/typeUtils ./NetworkElement".split(" "),function(h,c,a,d,m,n,k,e,l){a=function(f){function g(b){b=f.call(this,b)||this;b.returnDeletes=!1;b.elements=[];b.associationTypes=[];b.gdbVersion=null;b.moment=null;return b}
h._inheritsLoose(g,f);return g}(a.JSONSupport);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"returnDeletes",void 0);c.__decorate([d.property({type:[l],json:{write:!0}})],a.prototype,"elements",void 0);c.__decorate([d.property({type:[e.associationTypeKebabDict.apiValues],json:{type:e.associationTypeKebabDict.jsonValues,read:e.associationTypeKebabDict.read,write:e.associationTypeKebabDict.write}})],a.prototype,"associationTypes",void 0);c.__decorate([d.property({type:String,
json:{write:!0}})],a.prototype,"gdbVersion",void 0);c.__decorate([d.property({type:Date,json:{type:Number,write:{writer:(f,g)=>{g.moment=f?.getTime()}}}})],a.prototype,"moment",void 0);return a=c.__decorate([k.subclass("esri.rest.networks.support.QueryAssociationsParameters")],a)});