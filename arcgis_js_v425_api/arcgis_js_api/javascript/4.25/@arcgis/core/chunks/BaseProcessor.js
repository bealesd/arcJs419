/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{HandleOwner as t}from"../core/HandleOwner.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";let s=class extends t{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([r({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([r({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([r({constructOnly:!0})],s.prototype,"service",void 0),e([r()],s.prototype,"spatialReference",null),e([r({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([r({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([o("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;export{p as B};