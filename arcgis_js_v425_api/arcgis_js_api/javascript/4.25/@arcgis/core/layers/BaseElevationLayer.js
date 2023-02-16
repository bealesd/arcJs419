/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../geometry.js";import e from"../core/Error.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{Z as s}from"../chunks/aaBoundingRect.js";import i from"./Layer.js";import p from"./support/TileInfo.js";import{T as n}from"../chunks/TileKey.js";import m from"../geometry/SpatialReference.js";import c from"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Evented.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"./support/LOD.js";const l=new n("0/0/0",0,0,0,void 0);let a=class extends i{constructor(){super(...arguments),this.tileInfo=p.create({spatialReference:m.WebMercator,size:256}),this.fullExtent=new c(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,m.WebMercator),this.spatialReference=m.WebMercator,this.type="base-elevation"}getTileBounds(t,e,o,r){const i=r||s;return l.level=t,l.row=e,l.col=o,l.extent=i,this.tileInfo.updateTileInfo(l),l.extent=void 0,i}fetchTile(){throw new e("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")}queryElevation(t,e){return this._importElevationQuery().then((o=>(new o.ElevationQuery).query(this,t,e)))}createElevationSampler(t,e){return this._importElevationQuery().then((o=>(new o.ElevationQuery).createSampler(this,t,e)))}_importElevationQuery(){return import("../chunks/ElevationQuery2.js")}};t([o({type:p})],a.prototype,"tileInfo",void 0),t([o({type:["show","hide"]})],a.prototype,"listMode",void 0),t([o()],a.prototype,"fullExtent",void 0),t([o()],a.prototype,"spatialReference",void 0),t([o({readOnly:!0,value:"base-elevation"})],a.prototype,"type",void 0),a=t([r("esri.layers.BaseElevationLayer")],a);const u=a;export{u as default};
