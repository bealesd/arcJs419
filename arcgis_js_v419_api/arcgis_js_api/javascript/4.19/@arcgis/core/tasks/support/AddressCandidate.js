/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{a as s}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import e from"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import i from"../../geometry/Extent.js";let p=class extends s{constructor(r){super(r),this.address=null,this.attributes=null,this.extent=null,this.location=null,this.score=null}};r([t({type:String,json:{write:!0}})],p.prototype,"address",void 0),r([t({type:Object,json:{write:!0}})],p.prototype,"attributes",void 0),r([t({type:i,json:{write:!0}})],p.prototype,"extent",void 0),r([t({type:e,json:{write:!0}})],p.prototype,"location",void 0),r([t({type:Number,json:{write:!0}})],p.prototype,"score",void 0),p=r([o("esri.tasks.support.AddressCandidate")],p);var c=p;export default c;
