// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../executionError ../kernel ../../chunks/languageUtils ../featureset/actions/SpatialFilter ../featureset/sources/Empty ../../geometry/Geometry ../../geometry/geometryEngineAsync".split(" "),function(n,u,g,p,f,q,m,h,k){function l(c,d,e,r){return r(c,d,function(){var t=u._asyncToGenerator(function*(b,v,a){if(2>a.length)throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.WrongNumberOfParameters,d);a=f.autoCastFeatureToGeometry(a);if(null===
a[0]&&null===a[1])return!1;if(f.isFeatureSet(a[0])){if(a[1]instanceof h)return new q({parentfeatureset:a[0],relation:e,relationGeom:a[1]});if(null===a[1])return new m({parentfeatureset:a[0]});throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);}if(a[0]instanceof h){if(a[1]instanceof h){switch(e){case "esriSpatialRelEnvelopeIntersects":return k.intersects(p.shapeExtent(a[0]),p.shapeExtent(a[1]));case "esriSpatialRelIntersects":return k.intersects(a[0],a[1]);case "esriSpatialRelContains":return k.contains(a[0],
a[1]);case "esriSpatialRelOverlaps":return k.overlaps(a[0],a[1]);case "esriSpatialRelWithin":return k.within(a[0],a[1]);case "esriSpatialRelTouches":return k.touches(a[0],a[1]);case "esriSpatialRelCrosses":return k.crosses(a[0],a[1])}throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);}if(f.isFeatureSet(a[1]))return new q({parentfeatureset:a[1],relation:e,relationGeom:a[0]});if(null===a[1])return!1;throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,
d);}if(null===a[0]){if(f.isFeatureSet(a[1]))return new m({parentfeatureset:a[1]});if(a[1]instanceof h||null===a[1])return!1}else throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);});return function(b,v,a){return t.apply(this,arguments)}}())}n.registerFunctions=function(c){"async"===c.mode&&(c.functions.intersects=function(d,e){return l(d,e,"esriSpatialRelIntersects",c.standardFunctionAsync)},c.functions.envelopeintersects=function(d,e){return l(d,e,"esriSpatialRelEnvelopeIntersects",
c.standardFunctionAsync)},c.signatures.push({name:"envelopeintersects",min:2,max:2}),c.functions.contains=function(d,e){return l(d,e,"esriSpatialRelContains",c.standardFunctionAsync)},c.functions.overlaps=function(d,e){return l(d,e,"esriSpatialRelOverlaps",c.standardFunctionAsync)},c.functions.within=function(d,e){return l(d,e,"esriSpatialRelWithin",c.standardFunctionAsync)},c.functions.touches=function(d,e){return l(d,e,"esriSpatialRelTouches",c.standardFunctionAsync)},c.functions.crosses=function(d,
e){return l(d,e,"esriSpatialRelCrosses",c.standardFunctionAsync)},c.functions.relate=function(d,e){return c.standardFunctionAsync(d,e,(r,t,b)=>{b=f.autoCastFeatureToGeometry(b);f.pcCheck(b,3,3,d,e);if(b[0]instanceof h&&b[1]instanceof h)return k.relate(b[0],b[1],f.toString(b[2]));if(b[0]instanceof h&&null===b[1]||b[1]instanceof h&&null===b[0])return!1;if(f.isFeatureSet(b[0])&&null===b[1])return new m({parentfeatureset:b[0]});if(f.isFeatureSet(b[1])&&null===b[0])return new m({parentfeatureset:b[1]});
if(f.isFeatureSet(b[0])&&b[1]instanceof h)return b[0].relate(b[1],f.toString(b[2]));if(f.isFeatureSet(b[1])&&b[0]instanceof h)return b[1].relate(b[0],f.toString(b[2]));if(null===b[0]&&null===b[1])return!1;throw new g.ArcadeExecutionError(d,g.ExecutionErrorCodes.InvalidParameter,e);})})};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});