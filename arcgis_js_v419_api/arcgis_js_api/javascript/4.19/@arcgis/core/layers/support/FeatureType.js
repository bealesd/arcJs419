/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{fixJson as o}from"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import{a as e}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import{r as i}from"../../chunks/reader.js";import{w as p}from"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import m from"./CodedValueDomain.js";import"./Domain.js";import n from"./InheritedDomain.js";import a from"./RangeDomain.js";import"../../chunks/domains.js";import c from"./FeatureTemplate.js";let u=class extends e{constructor(r){super(r),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(r){const o={};for(const s in r)if(r.hasOwnProperty(s)){const t=r[s];switch(t.type){case"range":o[s]=a.fromJSON(t);break;case"codedValue":o[s]=m.fromJSON(t);break;case"inherited":o[s]=n.fromJSON(t)}}return o}writeDomains(r,s){const t={};for(const o in r)r.hasOwnProperty(o)&&(t[o]=r[o]&&r[o].toJSON());o(t),s.domains=t}readTemplates(r){return r&&r.map((r=>new c(r)))}writeTemplates(r,o){o.templates=r&&r.map((r=>r.toJSON()))}};r([s({json:{write:!0}})],u.prototype,"id",void 0),r([s({json:{write:!0}})],u.prototype,"name",void 0),r([s({json:{write:!0}})],u.prototype,"domains",void 0),r([i("domains")],u.prototype,"readDomains",null),r([p("domains")],u.prototype,"writeDomains",null),r([s({json:{write:!0}})],u.prototype,"templates",void 0),r([i("templates")],u.prototype,"readTemplates",null),r([p("templates")],u.prototype,"writeTemplates",null),u=r([t("esri.layers.support.FeatureType")],u);var l=u;export default l;
