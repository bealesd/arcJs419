/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import{a as s}from"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../webdoc/applicationProperties/Search.js";import"../chunks/fieldType.js";import"../webdoc/applicationProperties/SearchLayerField.js";import"../webdoc/applicationProperties/SearchLayer.js";import"../webdoc/applicationProperties/SearchTableField.js";import"../webdoc/applicationProperties/SearchTable.js";import i from"../webdoc/applicationProperties/Viewing.js";var t;let p=t=class extends s{constructor(r){super(r),this.viewing=null}clone(){return new t({viewing:this.viewing?this.viewing.clone():null})}};r([o({type:i,json:{write:!0}})],p.prototype,"viewing",void 0),p=t=r([e("esri.webscene.ApplicationProperties")],p);var c=p;export default c;
