// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType".split(" "),function(k,c,l,b,m,d,r,n,p,q){var e;b=e=function(h){function f(a){a=h.call(this,a)||this;a.color=null;a.field=null;a.label=null;a.valueExpression=null;a.valueExpressionTitle=
null;return a}k._inheritsLoose(f,h);var g=f.prototype;g.castField=function(a){return null==a?a:"function"===typeof a?(m.getLogger(this.declaredClass).error(".field: field must be a string value"),null):q.ensureString(a)};g.getAttributeHash=function(){return`${this.field}-${this.valueExpression}`};g.clone=function(){return new e({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})};return f}(b.JSONSupport);
c.__decorate([d.property({type:l,json:{type:[Number],write:!0}})],b.prototype,"color",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"field",void 0);c.__decorate([n.cast("field")],b.prototype,"castField",null);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"label",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"valueExpression",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"valueExpressionTitle",
void 0);return b=e=c.__decorate([p.subclass("esri.renderers.support.AttributeColorInfo")],b)});