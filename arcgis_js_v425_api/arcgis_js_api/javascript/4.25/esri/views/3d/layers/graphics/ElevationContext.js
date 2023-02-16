// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../symbols/support/unitConversionUtils","./featureExpressionInfoUtils"],function(h,m,d,k,g){let n=function(){function e(){this._renderUnitOffset=this._meterUnitOffset=0;this._unit="meters";this._metersPerElevationInfoUnit=1;this.mode=this.centerPointInElevationSR=this._featureExpressionInfoContext=null}var c=e.prototype;c.reset=function(){this.mode=null;this._renderUnitOffset=this._meterUnitOffset=
0;this._featureExpressionInfoContext=null;this.unit="meters"};c.addOffsetRenderUnits=function(a){this._renderUnitOffset+=a};c.geometryZWithOffset=function(a,b){b=this.calculateOffsetRenderUnits(b);return null!=this.featureExpressionInfoContext?b:a+b};c.calculateOffsetRenderUnits=function(a){let b=this._meterUnitOffset;const f=this.featureExpressionInfoContext;null!=f&&(b+=g.execute(f)*this._metersPerElevationInfoUnit);return b/a.unitInMeters+this._renderUnitOffset};c.setFromElevationInfo=function(a){this.mode=
a.mode;this.unit=k.supportsUnit(a.unit)?a.unit:"meters";this.offsetElevationInfoUnits=d.unwrapOr(a.offset,0)};c.updateFeatureExpressionInfoContext=function(a,b,f){if(d.isNone(a))this._featureExpressionInfoContext=null;else{var l=a&&a.arcade;l&&d.isSome(b)&&d.isSome(f)?(this._featureExpressionInfoContext=g.clone(a),g.setContextFeature(this._featureExpressionInfoContext,g.createFeature(l.modules,b,f))):this._featureExpressionInfoContext=a}};e.fromElevationInfo=function(a){const b=new e;d.isSome(a)&&
b.setFromElevationInfo(a);return b};m._createClass(e,[{key:"featureExpressionInfoContext",get:function(){return this._featureExpressionInfoContext}},{key:"meterUnitOffset",get:function(){return this._meterUnitOffset}},{key:"unit",get:function(){return this._unit},set:function(a){this._unit=a;this._metersPerElevationInfoUnit=k.getMetersPerUnit(a)}},{key:"requiresSampledElevationInfo",get:function(){return"absolute-height"!==this.mode}},{key:"offsetMeters",set:function(a){this._meterUnitOffset=a;this._renderUnitOffset=
0}},{key:"offsetElevationInfoUnits",set:function(a){this._meterUnitOffset=a*this._metersPerElevationInfoUnit;this._renderUnitOffset=0}}]);return e}();h.ElevationContext=n;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});