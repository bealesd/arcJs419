/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../symbols.js";import t from"../core/Error.js";import{h as r}from"./object.js";import{o as s}from"./ensureType.js";import{a as i,i as a}from"./maybe.js";import{debounce as o,eachAlways as n}from"../core/promiseUtils.js";import{on as l}from"../core/reactiveUtils.js";import{e as p}from"./unitUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import u from"../geometry/Extent.js";import{b as m}from"./scaleUtils.js";import{g as y}from"./commonProperties.js";import{E as d}from"./ExportImageParameters.js";import{g as f}from"./floorFilterUtils.js";import{c as g}from"./drapedUtils.js";import{identify as w}from"../rest/identify.js";import b from"../rest/support/IdentifyParameters.js";import{l as x}from"./arcadeOnDemand.js";import{G as v}from"./GraphicsCollection.js";import{g as P,a as j}from"./popupUtils.js";import _ from"../symbols/SimpleMarkerSymbol.js";let F=null;const I=I=>{let G=class extends I{constructor(){super(...arguments),this._featuresResolutions=new WeakMap,this.highlightGraphics=new v,this.updateHighlightedFeatures=o((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){this.exportImageParameters=new d({layer:this.layer}),this.handles.add([l((()=>this.highlightGraphics),"change",(e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e.added).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)}))])}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,r){const{layer:s}=this;if(!e)throw new t("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const i=this.layer.capabilities?.operations?.supportsQuery??!0;if(!((this.layer.capabilities?.operations?.supportsIdentify??1)&&this.layer.version>=10.5||i))throw new t("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:s});return i?this._fetchPopupFeaturesUsingQueries(e,r):this._fetchPopupFeaturesUsingIdentify(e,r)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}async _updateHighlightedFeaturesSymbols(e){for(const t of e){const e="renderer"in t.sourceLayer&&t.sourceLayer.renderer;"geometryType"in t.sourceLayer&&"point"===t.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(t).then((async r=>{let s="width"in r&&"height"in r&&null!=r.width&&null!=r.height?Math.max(r.width,r.height):"size"in r?r.size:null;const i="visualVariables"in e&&e.visualVariables?.find((e=>"size"===e.type));i&&(F||(F=(await import("./visualVariableUtils.js")).getSize),s=F(i,t,{view:this.view.type,scale:this.view.scale,shape:"simple-marker"===r.type?r.style:null})),this.highlightGraphics.includes(t)&&(t.symbol=new _({style:"square",size:s,xoffset:"xoffset"in r?r.xoffset:0,yoffset:"yoffset"in r?r.yoffset:0}),t.visible=!0,this.highlightGraphicUpdated(t,"symbol"))}))}}async _updateHighlightedFeaturesGeometries(e){this._highlightGeometriesResolution=e;const t=this.highlightGraphics;if(!t.length||!this.layer.capabilities.operations.supportsQuery)return;const r=this._getTargetResolution(e),i=new Map;for(const e of t)if(!this._featuresResolutions.has(e)||this._featuresResolutions.get(e)>r){const t=e.sourceLayer;s(i,t,(()=>new Map)).set(e.getObjectId(),e)}const a=Array.from(i,(([e,t])=>{const s=e.createQuery();return s.objectIds=[...t.keys()],s.outFields=[e.objectIdField],s.returnGeometry=!0,s.maxAllowableOffset=r,s.outSpatialReference=this.view.spatialReference,e.queryFeatures(s)})),o=await Promise.all(a);if(!this.destroyed)for(const{features:e}of o)for(const t of e){const e=t.sourceLayer,s=i.get(e).get(t.getObjectId());s&&this.highlightGraphics.includes(s)&&(s.geometry=t.geometry,this.highlightGraphicUpdated(s,"geometry"),this._featuresResolutions.set(s,r))}}_getTargetResolution(e){const t=e*p(this.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t){const r=await this._createIdentifyParameters(e,t);if(i(r))return[];const{results:s}=await w(this.layer.parsedUrl,r);return s.map((e=>e.feature))}async _createIdentifyParameters(e,t){const{floors:s,spatialReference:i,scale:o}=this.view,n=a(t)?t.event:null,l=await this._collectPopupProviders(this.layer.sublayers,o,t);if(!l.length)return null;await Promise.all(l.map((({sublayer:e})=>e.load().catch((()=>{})))));const p=Math.min(r("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce(((e,t)=>t.renderer?g({renderer:t.renderer,event:n}):e),2)),h=this.createFetchPopupFeaturesQueryGeometry(e,p),c=m(o,i),y=Math.round(h.width/c),d=new u({xmin:h.center.x-c*y,ymin:h.center.y-c*y,xmax:h.center.x+c*y,ymax:h.center.y+c*y,spatialReference:h.spatialReference});return new b({floors:s,gdbVersion:this.layer.gdbVersion,geometry:e,height:y,layerOption:"popup",mapExtent:d,returnGeometry:!0,spatialReference:i,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:p,width:y})}async _fetchPopupFeaturesUsingQueries(e,t){const r=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,t),s=a(t)?t.event:null,i=r.map((async({sublayer:t,popupTemplate:r})=>{await t.load().catch((()=>{}));const i=t.createQuery(),o=g({renderer:t.renderer,event:s}),n=this.createFetchPopupFeaturesQueryGeometry(e,o);if(i.geometry=n,i.outFields=await P(t,r),i.timeExtent=this.timeExtent,"floors"in this.view){const e=this.view?.floors?.clone(),r=f(e,t);a(r)&&(i.where=i.where?`(${i.where}) AND (${r})`:r)}const l=this._getTargetResolution(n.width/o),p=await this._loadArcadeModules(r),h="point"===t.geometryType||p&&p.arcadeUtils.hasGeometryOperations(r);h||(i.maxAllowableOffset=l);const{features:c}=await t.queryFeatures(i),u=h?0:l;for(const e of c)this._featuresResolutions.set(e,u);return c}));return(await n(i)).reverse().reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}async _collectPopupProviders(e,t,r){const s=[],i=async e=>{const o=0===e.minScale||t<=e.minScale,n=0===e.maxScale||t>=e.maxScale;if(e.visible&&o&&n)if(e.sublayers)e.sublayers.forEach(i);else if(e.popupEnabled){const t=j(e,{...r,defaultPopupTemplateEnabled:!1});a(t)&&s.unshift({sublayer:e,popupTemplate:t})}},o=e.toArray().reverse().map(i);return await Promise.all(o),s}_loadArcadeModules(e){if(e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return x()}};return e([h()],G.prototype,"highlightGraphics",void 0),e([h()],G.prototype,"exportImageParameters",void 0),e([h({readOnly:!0})],G.prototype,"exportImageVersion",null),e([h()],G.prototype,"layer",void 0),e([h()],G.prototype,"suspended",void 0),e([h(y)],G.prototype,"timeExtent",void 0),G=e([c("esri.views.layers.MapImageLayerView")],G),G};export{I as M};