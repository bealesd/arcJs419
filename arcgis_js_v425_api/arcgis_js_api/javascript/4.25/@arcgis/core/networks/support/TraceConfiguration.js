/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";let i=class extends o{constructor(t){super(t),this.conditionBarriers=[],this.outputConditions=[],this.functions=[],this.functionBarriers=[],this.traversabilityScope=null,this.shortestPathNetworkAttributeName=null,this.includeBarriers=null,this.validateConsistency=null,this.ignoreBarriersAtStartingPoints=null}};t([r({type:[Object],json:{write:!0}})],i.prototype,"conditionBarriers",void 0),t([r({type:[Object],json:{write:!0}})],i.prototype,"outputConditions",void 0),t([r({type:[Object],json:{write:!0}})],i.prototype,"functions",void 0),t([r({type:[Object],json:{write:!0}})],i.prototype,"functionBarriers",void 0),t([r({type:["junctions","edges","junctionsAndEdges"],json:{write:!0}})],i.prototype,"traversabilityScope",void 0),t([r({type:String,json:{write:!0}})],i.prototype,"shortestPathNetworkAttributeName",void 0),t([r({type:Boolean,json:{write:!0}})],i.prototype,"includeBarriers",void 0),t([r({type:Boolean,json:{write:!0}})],i.prototype,"validateConsistency",void 0),t([r({type:Boolean,json:{write:!0}})],i.prototype,"ignoreBarriersAtStartingPoints",void 0),i=t([s("esri.networks.support.TraceConfiguration")],i);const e=i;export{e as default};