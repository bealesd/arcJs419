// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ShaderTechniqueConfiguration"],function(b,h,f,c){b.AlphaMode=void 0;(function(a){a[a.None=0]="None";a[a.Alpha=1]="Alpha";a[a.PremultipliedAlpha=2]="PremultipliedAlpha";a[a.COUNT=3]="COUNT"})(b.AlphaMode||(b.AlphaMode={}));let e=function(a){function g(){var d=a.apply(this,arguments)||this;d.alphaMode=b.AlphaMode.None;d.hasOpacityFactor=!1;return d}h._inheritsLoose(g,a);return g}(c.ShaderTechniqueConfiguration);
f.__decorate([c.parameter({count:b.AlphaMode.COUNT})],e.prototype,"alphaMode",void 0);f.__decorate([c.parameter()],e.prototype,"hasOpacityFactor",void 0);b.CompositingTechniqueConfiguration=e;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});