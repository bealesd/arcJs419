// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../css ../../../../widgets/Widget ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,h,b,d,p,q,k,l,m,r,c){var n=`${l.BASE}-value-by-value`;a.ValueByValue=function(f){function e(){var g=
f.apply(this,arguments)||this;g.divider="\u00d7";return g}h._inheritsLoose(e,f);e.prototype.render=function(){return c.tsx("div",{class:n},c.tsx("span",null,this.left),c.tsx("span",null,this.divider),c.tsx("span",null,this.right))};return e}(m);b.__decorate([d.property()],a.ValueByValue.prototype,"left",void 0);b.__decorate([d.property()],a.ValueByValue.prototype,"divider",void 0);b.__decorate([d.property()],a.ValueByValue.prototype,"right",void 0);a.ValueByValue=b.__decorate([k.subclass("esri.views.interactive.tooltip.support.ValueByValue")],
a.ValueByValue);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});