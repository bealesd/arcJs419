// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./Element ../support/elements".split(" "),function(n,c,p,f,q,r,t,u,a,d){var g;a=g=function(m){function h(b){b=m.call(this,b)||this;b.elements=null;b.initialState="expanded";b.type="group";
return b}n._inheritsLoose(h,m);var e=h.prototype;e.castElements=function(b){return d.ensureType(b,k,!1)};e.readElements=function(b,l){return d.fromJSON(l.formElements,k,!1)};e.writeElements=function(b,l){l.formElements=d.toJSON(b,k,!1)};e.clone=function(){return new g({description:this.description,elements:p.clone(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})};return h}(a);c.__decorate([f.property({json:{write:!0}})],a.prototype,"elements",
void 0);c.__decorate([q.cast("elements")],a.prototype,"castElements",null);c.__decorate([r.reader("elements",["formElements"])],a.prototype,"readElements",null);c.__decorate([u.writer("elements")],a.prototype,"writeElements",null);c.__decorate([f.property({type:["collapsed","expanded"],json:{write:!0}})],a.prototype,"initialState",void 0);c.__decorate([f.property({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0);a=g=c.__decorate([t.subclass("esri.form.elements.GroupElement")],a);
const k=d.buildTypeMaps(a);return a});