// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(d,b,e,k,l,g){return a=>{a=function(f){function c(){return f.apply(this,arguments)||this}d._inheritsLoose(c,f);d._createClass(c,[{key:"availableFields",get:function(){return this.layer.fieldsIndex.fields.map(h=>h.name)}}]);return c}(a);b.__decorate([e.property()],
a.prototype,"layer",void 0);b.__decorate([e.property({readOnly:!0})],a.prototype,"availableFields",null);return a=b.__decorate([g.subclass("esri.views.layers.OGCFeatureLayerView")],a)}});