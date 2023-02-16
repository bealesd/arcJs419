// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../core/quantityUtils ../../geometry/geometryEngine ../../geometry/projection ../../geometry/support/geodesicUtils ./geodesicMeasurementUtils ../../geometry/SpatialReference".split(" "),function(d,p,c,f,g,e,h,k){function l(a){return c.createArea(Math.abs(e.geodesicAreas([a],"square-meters")[0]),"square-meters")}function m(a){try{return c.createArea(Math.abs(f.geodesicArea(a,"square-meters")),"square-meters")}catch(b){return null}}function n(a){const b=[];return g.projectPolygonToWGS84ComparableLonLat(a,
b)?c.createArea(Math.abs(e.geodesicAreas([{type:"polygon",rings:b,spatialReference:k.WGS84}],"square-meters")[0]),"square-meters"):null}d.geodesicArea=function(a){const {spatialReference:b}=a;return h.geodesicMeasure(b,l,m,n,a)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});