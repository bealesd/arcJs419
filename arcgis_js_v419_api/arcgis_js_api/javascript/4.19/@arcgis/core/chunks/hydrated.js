/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import e from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import t from"../geometry/Extent.js";import"./zmUtils.js";import o from"../geometry/Multipoint.js";import r from"../geometry/Polygon.js";import"./extentUtils.js";import s from"../geometry/Polyline.js";const i={convertToGEGeometry:function(e,t){if(null==t)return null;let o="cache"in t?t.cache._geVersion:void 0;null==o&&(o=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=o));return o},exportPoint:function(t,o,r){const s=t.hasZ(o),i=t.hasM(o),n=new e({x:t.getPointX(o),y:t.getPointY(o),spatialReference:r});s&&(n.z=t.getPointZ(o));i&&(n.m=t.getPointM(o));return n.cache._geVersion=o,n},exportPolygon:function(e,t,o){const s=new r({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:o});return s.cache._geVersion=t,s},exportPolyline:function(e,t,o){const r=new s({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:o});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,r){const s=new o({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:r});return s.cache._geVersion=t,s},exportExtent:function(e,o,r){const s=e.hasZ(o),i=e.hasM(o),n=new t({xmin:e.getXMin(o),ymin:e.getYMin(o),xmax:e.getXMax(o),ymax:e.getYMax(o),spatialReference:r});if(s){const t=e.getZExtent(o);n.zmin=t.vmin,n.zmax=t.vmax}if(i){const t=e.getMExtent(o);n.mmin=t.vmin,n.mmax=t.vmax}return n.cache._geVersion=o,n}};export{i as hydratedAdapter};