/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../core/lang.js";import{L as e}from"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{throwIfAborted as o,isAbortError as s}from"../core/promiseUtils.js";import a from"../core/Error.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{hasSamePortal as l}from"../core/urlUtils.js";import{r as p}from"./reader.js";import{w as m}from"./writer.js";import"./resourceExtension.js";import n from"../portal/Portal.js";import d from"../portal/PortalItem.js";const c=e.getLogger("esri.layers.mixins.PortalLayer"),h=e=>{let h=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var t;null==(t=this.portalItem)||t.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new d({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const r=await import("./layersLoader.js");return o(e),await r.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)}catch(t){throw s(t)||c.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||n.getDefault());return r&&o&&!l(o.restUrl,r.restUrl)?(e.messages&&e.messages.push(new a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return t([r({type:d})],h.prototype,"portalItem",null),t([p("web-document","portalItem",["itemId"])],h.prototype,"readPortalItem",null),t([m("web-document","portalItem",{itemId:{type:String}})],h.prototype,"writePortalItem",null),t([r()],h.prototype,"resourceReferences",void 0),h=t([i("esri.layers.mixins.PortalLayer")],h),h};export{h as P};
