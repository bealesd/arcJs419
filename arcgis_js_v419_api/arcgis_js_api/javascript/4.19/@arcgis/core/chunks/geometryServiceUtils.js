/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import r from"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import e from"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import t from"../portal/Portal.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"../geometry/support/jsonUtils.js";import o from"../tasks/support/ProjectParameters.js";async function s(o=null,s){if(r.geometryServiceUrl){return new(0,(await import("../tasks/GeometryService.js")).default)({url:r.geometryServiceUrl})}if(!o)throw new e("internal:geometry-service-url-not-configured");let i;if(i="portal"in o?o.portal||t.getDefault():o,await i.load({signal:s}),i.helperServices&&i.helperServices.geometry&&i.helperServices.geometry.url){return new(0,(await import("../tasks/GeometryService.js")).default)({url:i.helperServices.geometry.url})}throw new e("internal:geometry-service-url-not-configured")}async function i(r,t,i=null,p){const m=await s(i,p),a=new o;a.geometries=[r],a.outSpatialReference=t;const l=await m.project(a,{signal:p});if(l&&Array.isArray(l)&&1===l.length)return l[0];throw new e("internal:geometry-service-projection-failed")}export{s as create,i as projectGeometry};
