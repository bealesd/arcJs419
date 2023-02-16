/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import s from"../core/Collection.js";import i from"../core/Handles.js";let r=class extends s{constructor(t){super(t),this._handles=new i,this.root=null}initialize(){this._handles.add(this.rootCollectionNames.map((t=>this.watch("root."+t,(()=>this.updateCollections()),!0)))),this.updateCollections()}destroy(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null}updateCollections(){this._collections=this.rootCollectionNames.map((t=>this.get("root."+t))).filter((t=>null!=t)),this.refresh()}refresh(){const t=this._handles;t.remove("collections");const o=new Array;let e=0;for(const t of this._collections)e=this._processCollection(o,e,t);this.splice(e,this.length);for(const e of o)t.add(e.on("after-changes",(()=>this.refresh())),"collections")}_createNewInstance(t){return new s(t)}_processCollection(t,o,e){return e?(t.push(e),e.forEach((e=>{if(e){if(!this.itemFilterFunction||this.itemFilterFunction(e)){const t=this.indexOf(e,o);t>=0?t!==o&&this.reorder(e,o):this.add(e,o),++o}this.getChildrenFunction&&(o=this._processCollection(t,o,this.getChildrenFunction(e)))}})),o):o}};t([o()],r.prototype,"rootCollectionNames",void 0),t([o()],r.prototype,"root",void 0),t([o()],r.prototype,"getChildrenFunction",void 0),t([o()],r.prototype,"itemFilterFunction",void 0),r=t([e("esri.core.CollectionFlattener")],r);var l=r;export{l as C};