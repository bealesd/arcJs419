/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{resolve as e,reject as r}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import t from"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./sizeVariableUtils.js";import"../core/watchUtils.js";import"./fieldType.js";import"./Scheduler.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import{crosses as s,touches as i,within as o,overlaps as n,contains as a,intersects as p,relate as l}from"../geometry/geometryEngineAsync.js";import"../layers/support/Field.js";import"../layers/support/FieldsIndex.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import"./number3.js";import"./moment.js";import{Q as c,z as m,ak as u,p as f,t as j}from"./arcadeUtils.js";import"./centroid.js";import"./FeatureSetReader.js";import{S as d,E as y}from"./SpatialFilter.js";function g(e){return e instanceof t}function S(l,f,j,S,R){return R(l,f,(function(l,f,R){if(R.length<2)return S(new Error("Missing Parameters"));if(null===(R=c(R))[0]&&null===R[1])return e(!1);if(m(R[0]))return R[1]instanceof t?e(new d({parentfeatureset:R[0],relation:j,relationGeom:R[1]})):null===R[1]?e(new y({parentfeatureset:R[0]})):S("Spatial Relation cannot accept this parameter type");if(g(R[0])){if(g(R[1])){let e=null;switch(j){case"esriSpatialRelEnvelopeIntersects":e=p(u(R[0]),u(R[1]));break;case"esriSpatialRelIntersects":e=p(R[0],R[1]);break;case"esriSpatialRelContains":e=a(R[0],R[1]);break;case"esriSpatialRelOverlaps":e=n(R[0],R[1]);break;case"esriSpatialRelWithin":e=o(R[0],R[1]);break;case"esriSpatialRelTouches":e=i(R[0],R[1]);break;case"esriSpatialRelCrosses":e=s(R[0],R[1])}return null!==e?e:r(new Error("Unrecognised Relationship"))}return m(R[1])?e(new d({parentfeatureset:R[1],relation:j,relationGeom:R[0]})):null===R[1]?e(!1):S("Spatial Relation cannot accept this parameter type")}return null!==R[0]?S("Spatial Relation cannot accept this parameter type"):m(R[1])?e(new y({parentfeatureset:R[1]})):R[1]instanceof t||null===R[1]?e(!1):void 0}))}function R(e){"async"===e.mode&&(e.functions.intersects=function(r,t){return S(r,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(r,t){return S(r,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(r,t){return S(r,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(r,t){return S(r,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(r,t){return S(r,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(r,t){return S(r,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(r,t){return S(r,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(r,s){return e.standardFunctionAsync(r,s,(function(e,r,s){if(s=c(s),f(s,3,3),g(s[0])&&g(s[1]))return l(s[0],s[1],j(s[2]));if(s[0]instanceof t&&null===s[1])return!1;if(s[1]instanceof t&&null===s[0])return!1;if(m(s[0])&&null===s[1])return new y({parentfeatureset:s[0]});if(m(s[1])&&null===s[0])return new y({parentfeatureset:s[1]});if(m(s[0])&&s[1]instanceof t)return s[0].relate(s[1],j(s[2]));if(m(s[1])&&s[0]instanceof t)return s[1].relate(s[0],j(s[2]));if(null===s[0]&&null===s[1])return!1;throw new Error("Illegal Argument")}))})}export{R as registerFunctions};
