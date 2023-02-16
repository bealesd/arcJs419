/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import e from"./Element.js";import{types as r}from"./support/inputs.js";import{t as o,f as p}from"../../chunks/domains.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"./inputs/BarcodeScannerInput.js";import"./inputs/TextInput.js";import"./inputs/Input.js";import"./inputs/ComboBoxInput.js";import"./inputs/DateTimePickerInput.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"./inputs/RadioButtonsInput.js";import"./inputs/SwitchInput.js";import"./inputs/TextAreaInput.js";import"./inputs/TextBoxInput.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";var n;let u=n=class extends e{constructor(t){super(t),this.domain=null,this.editable=!0,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new n({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};t([s({types:o,json:{read:{reader:p},write:!0}})],u.prototype,"domain",void 0),t([s({type:Boolean,json:{write:!0}})],u.prototype,"editable",void 0),t([s({type:String,json:{write:!0}})],u.prototype,"editableExpression",void 0),t([s({type:String,json:{write:!0}})],u.prototype,"fieldName",void 0),t([s({type:String,json:{write:!0}})],u.prototype,"hint",void 0),t([s({types:r,json:{read:{source:"inputType"},write:{target:"inputType"}}})],u.prototype,"input",void 0),t([s({type:String,json:{write:!0}})],u.prototype,"requiredExpression",void 0),t([s({type:String,json:{read:!1,write:!0}})],u.prototype,"type",void 0),t([s({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),u=n=t([i("esri.form.elements.FieldElement")],u);const m=u;export{m as default};