/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{g as e}from"./metadata.js";import{c as r}from"./JSONSupport.js";import{w as i}from"./persistableUrlUtils.js";import n from"../geometry/SpatialReference.js";import t from"../geometry/Extent.js";import{t as a}from"./opacityUtils.js";import s from"../TimeExtent.js";import{E as o}from"./ElevationInfo.js";const l={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(r,i){if(null!=i.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return i.screenSizePerspective;e(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,i,n,t){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||r(this,"screenSizePerspectiveEnabled",{},t))&&(i[n]=e)}}}}}},c={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e}}}},p={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:i}}},d={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},m={value:null,type:o,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function y(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},g={...u,json:{...u.json,origins:{"web-document":{...u.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?a(r.layerDefinition.drawingInfo.transparency):void 0:a(r.drawingInfo.transparency)}}},w={type:s,readOnly:!0,get(){var e,r;if(null==(e=this.layer)||!e.timeInfo)return null;const i=null==(r=this.view)?void 0:r.timeExtent,n=this.layer.timeExtent,t=this.layer.useViewTime?i&&n?i.intersection(n):i||n:n;if(!t||t.isEmpty)return t;const a=this.layer.timeOffset,s=a?t.offset(-a.value,a.unit):t,o=this._get("timeExtent");return s.equals(o)?o:s}},v={type:t,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,r)=>{const i=t.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(i.spatialReference=n.fromJSON(r.spatialReference)),i}}}},read:!1}},b={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},j={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}};export{g as a,d as b,S as c,l as d,m as e,w as f,b as i,p as l,j as m,u as o,c as p,y as r,v as s,f as u};