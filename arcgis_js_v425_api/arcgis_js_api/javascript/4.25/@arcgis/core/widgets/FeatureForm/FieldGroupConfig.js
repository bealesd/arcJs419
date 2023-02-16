/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import s from"../../core/Accessor.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{cast as t}from"../../core/accessorSupport/decorators/cast.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import e from"./FieldConfig.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import"../../chunks/Format.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";let p=class extends s{constructor(o){super(o),this.description=null,this.fieldConfig=null,this.label=null,this.state="expanded",this.visibilityExpression=null}castFieldConfig(o){return o?o.map((o=>o.declaredClass?o:new e(o))):null}};o([r()],p.prototype,"description",void 0),o([r()],p.prototype,"fieldConfig",void 0),o([t("fieldConfig")],p.prototype,"castFieldConfig",null),o([r()],p.prototype,"label",void 0),o([r()],p.prototype,"state",void 0),o([r()],p.prototype,"visibilityExpression",void 0),p=o([i("esri.widgets.FeatureForm.FieldGroupConfig")],p);const c=p;export{c as default};