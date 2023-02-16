/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"../core/Error.js";import"./object.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{B as i}from"./BitmapTileContainer.js";const o=o=>{let r=class extends o{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new i(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren()}};return r=e([t("esri.views.2d.layers.BitmapTileLayerView2D")],r),r};function r(e,t,i,o){if(i.level===o.level)return t;const r=e.tileInfo.size,s=e.getTileResolution(i.level),a=e.getTileResolution(o.level);let l=e.getLODInfoAt(o.level);const c=l.getXForColumn(o.col),m=l.getYForRow(o.row);l=e.getLODInfoAt(i.level);const h=l.getXForColumn(i.col),u=l.getYForRow(i.row),d=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/r[0],p=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/r[1],g=Math.round(d*((c-h)/s)),w=Math.round(p*(-(m-u)/s)),f=Math.round(d*r[0]*(a/s)),v=Math.round(p*r[1]*(a/s)),j=n(r);return j.getContext("2d").drawImage(t,g,w,f,v,0,0,r[0],r[1]),j}function n(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{o as B,n as c,r};
