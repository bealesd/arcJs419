/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/opacityUtils.js";import"../../chunks/LegendOptions.js";import o from"./VisualVariable.js";import e from"./support/OpacityStop.js";var i;let p=i=class extends o{constructor(s){super(s),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(s){s&&Array.isArray(s)&&(s=s.filter((s=>!!s))).sort(((s,t)=>s.value-t.value)),this._set("stops",s)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((s=>s.clone())),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((s=>s.value||0))}};s([t({readOnly:!0})],p.prototype,"cache",null),s([t({type:["opacity"],json:{type:["transparencyInfo"]}})],p.prototype,"type",void 0),s([t({type:String,json:{write:!0}})],p.prototype,"normalizationField",void 0),s([t({type:[e],json:{write:!0}})],p.prototype,"stops",null),p=i=s([r("esri.renderers.visualVariables.OpacityVariable")],p);var n=p;export default n;
