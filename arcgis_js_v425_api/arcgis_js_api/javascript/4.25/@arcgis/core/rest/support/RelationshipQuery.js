/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{e as s}from"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{w as n}from"../../chunks/writer.js";import{D as p}from"../../chunks/DataLayerSource.js";import m from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/enumeration.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";var c;let u=c=class extends e{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1")}clone(){return new c(o({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};t([r({type:Boolean,json:{write:!0}})],u.prototype,"cacheHint",void 0),t([r({type:p,json:{write:!0}})],u.prototype,"dynamicDataSource",void 0),t([r({type:String,json:{write:!0}})],u.prototype,"gdbVersion",void 0),t([r({type:Number,json:{write:!0}})],u.prototype,"geometryPrecision",void 0),t([r({type:Date})],u.prototype,"historicMoment",void 0),t([n("historicMoment")],u.prototype,"_writeHistoricMoment",null),t([r({type:Number,json:{write:!0}})],u.prototype,"maxAllowableOffset",void 0),t([r({type:[Number],json:{write:!0}})],u.prototype,"objectIds",void 0),t([r({type:[String],json:{write:!0}})],u.prototype,"orderByFields",void 0),t([r({type:[String],json:{write:!0}})],u.prototype,"outFields",void 0),t([r({type:m,json:{read:{source:"outSR"},write:{target:"outSR"}}})],u.prototype,"outSpatialReference",void 0),t([r({json:{write:!0}})],u.prototype,"relationshipId",void 0),t([r({type:Number,json:{read:{source:"resultOffset"}}})],u.prototype,"start",void 0),t([n("start"),n("num")],u.prototype,"writeStart",null),t([r({type:Number,json:{read:{source:"resultRecordCount"}}})],u.prototype,"num",void 0),t([r({json:{write:!0}})],u.prototype,"returnGeometry",void 0),t([r({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],u.prototype,"returnM",void 0),t([r({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],u.prototype,"returnZ",void 0),t([r({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],u.prototype,"where",void 0),u=c=t([i("esri.rest.support.RelationshipQuery")],u),u.from=s(u);const a=u;export{a as default};
