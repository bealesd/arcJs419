/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/resourceExtension.js";import e from"./Content.js";var o;let i=o=class extends e{constructor(t){super(t),this.description=null,this.displayType=null,this.title=null,this.type="attachments"}clone(){return new o({description:this.description,displayType:this.displayType,title:this.title})}};t([r({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i.prototype,"description",void 0),t([r({type:["preview","list"],json:{write:!0}})],i.prototype,"displayType",void 0),t([r({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i.prototype,"title",void 0),t([r({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],i.prototype,"type",void 0),i=o=t([s("esri.popup.content.AttachmentsContent")],i);var p=i;export default p;
