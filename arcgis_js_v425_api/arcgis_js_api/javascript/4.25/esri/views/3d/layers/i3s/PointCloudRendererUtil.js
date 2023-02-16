// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function g(a,b){for(const c of a)if(c.name===b&&null!=c.attributeValues&&"UInt8"===c.attributeValues.valueType&&3===c.attributeValues.valuesPerElement)return{name:b,storageInfo:c,useElevation:!1};return null}function e(a,b){for(const c of a)if(c.name===b)return a="embedded-elevation"===c.encoding,{name:b,storageInfo:a?null:c,useElevation:a};return"elevation"===b.toLowerCase()?{name:b,storageInfo:null,useElevation:!0}:null}d.getAttributeInfo=e;d.getFilterInfo=function(a){const b=
a.filters;return b?b.map(c=>({filterJSON:c.toJSON(),attributeInfo:e(a.attributeStorageInfo,c.field)})):[]};d.getFixedSizeAlgorithm=function(a){return(a=a&&a.pointSizeAlgorithm)&&"fixed-size"===a.type?a:null};d.getRendererInfo=function(a){const b=a.renderer;var c=b&&b.type;const k=b&&a.renderer.toJSON()||null;let f=null,h=!1;"point-cloud-unique-value"===c?f=e(a.attributeStorageInfo,b.field):"point-cloud-stretch"===c?f=e(a.attributeStorageInfo,b.field):"point-cloud-class-breaks"===c?f=e(a.attributeStorageInfo,
b.field):(f="point-cloud-rgb"===c?g(a.attributeStorageInfo,b.field):g(a.attributeStorageInfo,"RGB"),h=null!=f);c=null;b&&b.colorModulation&&(c=e(a.attributeStorageInfo,b.colorModulation.field));return{rendererJSON:k,isRGBRenderer:h,primaryAttribute:f,modulationAttribute:c}};d.getSplatSizeAlgorithm=function(a){return(a=a&&a.pointSizeAlgorithm)&&"splat"===a.type?a:null};d.rendererUsesFixedSizes=function(a){return(a=a&&a.pointSizeAlgorithm)&&a.type?"fixed-size"===a.type:!1};Object.defineProperties(d,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});