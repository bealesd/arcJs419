// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,l,d,m,e,p,q,n){return b=>{b=function(h){function f(...a){a=h.call(this,...a)||this;a.layer=null;return a}g._inheritsLoose(f,h);f.prototype.createLengthDimensions=function(){var a=g._asyncToGenerator(function*(k){if(d.isSome(this.analysisView))yield this.analysisView.createLengthDimensions(k);
else throw m.createAbortError();});return function(k){return a.apply(this,arguments)}}();g._createClass(f,[{key:"interactive",get:function(){return d.isSome(this.analysisView)?this.analysisView.interactive:!1},set:function(a){d.isSome(this.analysisView)&&(this.analysisView.interactive=a)}},{key:"results",get:function(){return d.isSome(this.analysisView)?this.analysisView.results:new l}},{key:"selectedDimension",get:function(){return d.isSome(this.analysisView)?this.analysisView.selectedDimension:
null},set:function(a){d.isSome(this.analysisView)&&(this.analysisView.selectedDimension=a)}}]);return f}(b);c.__decorate([e.property()],b.prototype,"layer",void 0);c.__decorate([e.property()],b.prototype,"interactive",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"results",null);c.__decorate([e.property()],b.prototype,"selectedDimension",null);c.__decorate([e.property()],b.prototype,"analysisView",void 0);return b=c.__decorate([n.subclass("esri.views.layers.DimensionLayerView")],b)}});