// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/TransparencyPassType ../materials/DefaultTechniqueConfiguration".split(" "),function(f,l,b,g,c,h,a){f.LineMarkerSpace=void 0;(function(d){d[d.Draped=0]="Draped";d[d.Screen=1]="Screen";d[d.World=2]="World";d[d.COUNT=3]="COUNT"})(f.LineMarkerSpace||(f.LineMarkerSpace={}));f.LineMarkerAnchor=void 0;(function(d){d[d.Center=
0]="Center";d[d.Tip=1]="Tip";d[d.COUNT=2]="COUNT"})(f.LineMarkerAnchor||(f.LineMarkerAnchor={}));a=function(d){function k(){var e=d.apply(this,arguments)||this;e.output=g.ShaderOutput.Color;e.transparencyPassType=h.TransparencyPassType.NONE;e.occluder=!1;e.hasSlicePlane=!1;e.writeDepth=!1;e.space=f.LineMarkerSpace.Screen;e.hideOnShortSegments=!1;e.hasCap=!1;e.anchor=f.LineMarkerAnchor.Center;e.hasTip=!1;e.vvSize=!1;e.vvColor=!1;e.vvOpacity=!1;e.hasOccludees=!1;e.hasMultipassTerrain=!1;e.cullAboveGround=
!1;return e}l._inheritsLoose(k,d);return k}(a.DefaultTechniqueConfiguration);b.__decorate([c.parameter({count:g.ShaderOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:h.TransparencyPassType.COUNT})],a.prototype,"transparencyPassType",void 0);b.__decorate([c.parameter()],a.prototype,"occluder",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",void 0);b.__decorate([c.parameter({count:f.LineMarkerSpace.COUNT})],
a.prototype,"space",void 0);b.__decorate([c.parameter()],a.prototype,"hideOnShortSegments",void 0);b.__decorate([c.parameter()],a.prototype,"hasCap",void 0);b.__decorate([c.parameter({count:f.LineMarkerAnchor.COUNT})],a.prototype,"anchor",void 0);b.__decorate([c.parameter()],a.prototype,"hasTip",void 0);b.__decorate([c.parameter()],a.prototype,"vvSize",void 0);b.__decorate([c.parameter()],a.prototype,"vvColor",void 0);b.__decorate([c.parameter()],a.prototype,"vvOpacity",void 0);b.__decorate([c.parameter()],
a.prototype,"hasOccludees",void 0);b.__decorate([c.parameter()],a.prototype,"hasMultipassTerrain",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveGround",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasVvInstancing",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasSliceTranslatedView",void 0);f.LineMarkerTechniqueConfiguration=a;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});