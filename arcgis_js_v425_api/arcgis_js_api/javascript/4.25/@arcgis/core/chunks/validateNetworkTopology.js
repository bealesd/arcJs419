/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import t from"../request.js";import{p as o,e as r,a as e}from"./utils4.js";import{_ as s}from"./tslib.es6.js";import{JSONSupport as i}from"../core/JSONSupport.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import"../config.js";import"./object.js";import"./maybe.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"./Logger.js";import"./string.js";import"../core/promiseUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";let m=class extends i{constructor(t){super(t),this.moment=null,this.fullUpdate=!1,this.validateErrorsCreated=!1,this.dirtyAreaCount=null,this.exceededTransferLimit=null,this.serviceEdits=null}};s([p({type:Date,json:{type:Number,write:{writer:(t,o)=>{o.moment=t?t.getTime():null}}}})],m.prototype,"moment",void 0),s([p({type:Boolean,json:{write:!0}})],m.prototype,"fullUpdate",void 0),s([p({type:Boolean,json:{write:!0}})],m.prototype,"validateErrorsCreated",void 0),s([p({type:Number,json:{write:!0}})],m.prototype,"dirtyAreaCount",void 0),s([p({type:Boolean,json:{write:!0}})],m.prototype,"exceededTransferLimit",void 0),s([p({type:[Object],json:{write:!0}})],m.prototype,"serviceEdits",void 0),m=s([a("esri.rest.networks.support.ValidateNetworkTopologyResult")],m);const n=m;async function l(s,i,p){const a=o(s),m=i.toJSON();i.validationSet&&(m.validationSet=JSON.stringify(i.validationSet));const l={...m,f:"json"},d=r({...a.query,...l}),c=e(d,{...p,method:"post"}),j=`${a.path}/validateNetworkTopology`,{data:u}=await t(j,c);if(!u)return null;const y=n.fromJSON(u);return y.serviceEdits=y.serviceEdits.map((t=>({layerId:t.id,editedFeatures:t.editedFeatures}))),y}export{l as validateNetworkTopology};