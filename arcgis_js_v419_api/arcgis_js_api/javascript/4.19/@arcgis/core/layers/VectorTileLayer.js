/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{clone as t,g as r}from"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import s from"../config.js";import{L as i}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{throwIfAborted as l,isAborted as n,createAbortController as a,onAbort as p}from"../core/promiseUtils.js";import"../chunks/Message.js";import u from"../core/Error.js";import"../chunks/ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import{urlToObject as h,objectToQuery as m,isAbsolute as y,join as d,removeTrailingSlash as f,getOrigin as g,isProtocolRelative as S,normalize as A,removeFile as j,appBaseUrl as v}from"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as U}from"../chunks/reader.js";import{w as x}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import k from"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import w from"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import P from"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../chunks/Identifiable.js";import"../chunks/opacityUtils.js";import"../core/Handles.js";import R from"./Layer.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/colorUtils2.js";import"../chunks/MemCache.js";import"../chunks/LRUCache.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as I}from"../chunks/MultiOriginJSONSupport.js";import"../core/watchUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/aaBoundingRect.js";import{O as _}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";import b from"./support/LOD.js";import T from"./support/TileInfo.js";import{A as O}from"../chunks/ArcGISService.js";import{B as L}from"../chunks/BlendLayer.js";import{P as C}from"../chunks/PortalLayer.js";import{S as M}from"../chunks/ScaleRangeLayer.js";import{r as E}from"../chunks/serviceTileInfoProperty.js";import{T as N}from"../chunks/TilemapCache.js";import{A as D}from"../chunks/ArcGISCachedService.js";import"../chunks/TileKey.js";import{T as B}from"../chunks/TileIndex.js";import{c as z}from"../chunks/jsonContext.js";import"../chunks/vec4f32.js";import{S as Q}from"../chunks/StyleRepository.js";import"../chunks/unitBezier.js";import"../chunks/definitions.js";import{g as G}from"../chunks/capabilities2.js";const V=i.getLogger("esri.layers.support.SpriteSource");class F{constructor(e,t,r,s){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=r,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const t=h(this.baseURL),r=t.query?"?"+m(t.query):"",s=this._isRetina?"@2x":"",i=`${t.path}${s}.${this._spriteImageFormat}${r}`,o=`${t.path}${s}.json${r}`;return Promise.all([w(o,e),w(i,{responseType:"image",...e})]).then((([e,r])=>{const s=Object.keys(e.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!r||!r.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=e.data;const i=r.data,o=Math.max(this.maxTextureSize,4096);if(i.width>o||i.height>o){const e=`Sprite resource for style ${t.path} is bigger than the maximum allowed of ${o} pixels}`;throw V.error(e),new u("SpriteSource",e)}this.width=i.width,this.height=i.height;const l=document.createElement("canvas"),n=l.getContext("2d");l.width=i.width,l.height=i.height,n.drawImage(i,0,0,i.width,i.height);const a=n.getImageData(0,0,i.width,i.height),p=new Uint8Array(a.data);let c;for(let e=0;e<p.length;e+=4)c=p[e+3]/255,p[e]=p[e]*c,p[e+1]=p[e+1]*c,p[e+2]=p[e+2]*c;this.image=p}))}}class J{constructor(e,r,s){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=r,r&&(this.parsedUrl=h(this.sourceUrl));const i=this.parsedUrl.path,o=this.parsedUrl.query?"?"+m(this.parsedUrl.query):"",l=t(s),n=l.tiles;r&&n.forEach(((e,t)=>{y(e)||(n[t]=d(i,e)+o)})),this.tileServers=n,s.tileMap&&(this.tileMapURL=d(r,s.tileMap));const a=s.capabilities&&s.capabilities.split(",").map((e=>e.toLowerCase().trim())),p=!!s.exportTilesAllowed,u=!!a&&-1!==a.indexOf("tilemap"),c=p&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:p,supportsTileMap:u},exportTiles:p?{maxExportTilesCount:+c}:null},this.tileInfo=E(l.tileInfo,l,null,{ignoreMinMaxLOD:!0}),u&&(this.type="vector-tile",this.tilemapCache=new N({layer:this}),this.tilemapCache&&(this.tileIndex=new B(this.tilemapCache))),this.fullExtent=P.fromJSON(s.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,r){let s=this.tileServers[t%this.tileServers.length];return s=s.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),s}isCompatibleWith(e){const t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;const s=t.lods,i=r.lods,o=Math.min(s.length,i.length);for(let e=0;e<o;e++){const t=s[e],r=i[e];if(t.level!==r.level||Math.round(t.scale)!==Math.round(r.scale))return!1}return!0}}const $=s.defaults&&s.defaults.io.corsEnabledServers;function W(e){if(!e)return;const t=g(e);$&&-1===$.indexOf(t)&&$.push(t)}function q(...e){let t;for(let r=0;r<e.length;++r)if(S(e[r])){if(t){const s=t.split("://")[0];t=s+":"+e[r].trim()}}else t=y(e[r])?e[r]:d(t,e[r]);return f(t)}async function K(e,t,r,s,i){let o,n,a;if(l(i),"string"==typeof r){const e=A(r);W(e);const t=h(e);a=await w(t.path,{query:{f:"json"},responseType:"json",...i}),o=e,n=e}else a={data:r},o=r.jsonUrl||null,n=s;const p=a.data;return a.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),n&&(n=n.replace(/^http:/i,"https:"))),X(p)?(e.styleUrl=o||null,async function(e,t,r,s){const i=r?j(r):v;e.styleBase=i,e.style=t,e.styleUrl&&W(e.styleUrl);t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const r=t.sources.esri;r.url?await K(e,"esri",q(i,r.url),void 0,s):o.push(K(e,"esri",r,i,s))}for(const r of Object.keys(t.sources))"esri"!==r&&"vector"===t.sources[r].type&&(t.sources[r].url?o.push(K(e,r,q(i,t.sources[r].url),void 0,s)):t.sources[r].tiles&&o.push(K(e,r,t.sources[r],i,s)));await Promise.all(o)}(e,p,n,i)):X(p)?Promise.reject("You must specify the URL or the JSON for a service or for a style."):e.sourceUrl?Y(e,p,n,!1,t,i):(e.sourceUrl=o||null,Y(e,p,n,!0,t,i))}function X(e){return!!e.sources}async function Y(e,t,r,s,i,o){const l=r?f(r)+"/":v,n=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,o=295828763.7957775;const l=[],n=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,a=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let e=0;e<=a;e++)e>=n&&l.push({level:e,scale:o,resolution:i}),i/=2,o/=2;for(const r of e.tiles)W(q(t,r));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:l,spatialReference:{wkid:102100}}}}(t,l),a=new J(i,l,n);if(!s&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(a))return Promise.resolve();null!=a.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(a.fullExtent):t.fullExtent=a.fullExtent.clone()),t.tileInfo.lods.length<a.tileInfo.lods.length&&(t.tileInfo=a.tileInfo)}if(s?(e.sourceBase=l,e.source=t,e.validatedSource=n,e.primarySourceName=i,e.sourceUrl&&W(e.sourceUrl)):W(l),e.sourceNameToSource[i]=a,!e.style)return null==t.defaultStyles?Promise.reject():"string"==typeof t.defaultStyles?K(e,"",q(l,t.defaultStyles,"root.json"),void 0,o):K(e,"",t.defaultStyles,q(l,"root.json"),o)}class H{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let r=0,s=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(r=t),e[1]%2&&(s=t)),[r,s]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;const t=e.spatialReference.isGeographic,r=[],s=e.lods.length;for(let i=0;i<s;i++){const s=e.lods[i],o=t?s.resolution:2*s.resolution;r.push(new b({level:s.level,scale:s.scale,resolution:o}))}return new T({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:r})}static create512x512CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;const t=[],r=e.lods.length;for(let s=0;s<r;s++){const r=e.lods[s],i=.5*r.resolution;t.push(new b({level:r.level,scale:r.scale,resolution:i}))}return new T({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:t})}}function Z(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=1e-6||Math.abs(r.y-s.y)>=1e-6)return!1;let i,o;e.lods[0].scale>t.lods[0].scale?(i=e,o=t):(o=e,i=t);for(let e=i.lods[0].scale;e>=o.lods[o.lods.length-1].scale-1e-6;e/=2)if(Math.abs(e-o.lods[0].scale)<1e-6)return!0;return!1}function ee(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,o={x:e.origin.x,y:e.origin.y},l=e.spatialReference.toJSON(),n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],p=n.scale,u=n.resolution,c=a.scale,h=[];let m=p,y=u,d=0;for(;m>c;)h.push({level:d,resolution:y,scale:m}),d++,m/=2,y/=2;return new T({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:h,spatialReference:l})}let te=class extends(L(M(D(O(_(C(I(R)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(r.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await w(t,{...e,query:{f:"json"}})).data&&this.read({url:t},z(this.portalItem))})).then((()=>this._loadStyle(e)),(()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&h(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?h(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&S(e)&&(e=`https:${e}`),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const e in this.sourceNameToSource)t.push(this.sourceNameToSource[e]);let r=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new T;if(t.length>1)for(let e=0;e<t.length;e++)Z(r,t[e].tileInfo)&&(r=ee(r,t[e].tileInfo));return r}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return H.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return H.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=G(),s=new F(this.styleRepository.sprite,e,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await s.load(t),this._spriteSourceMap.set(e,s)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const r=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!n(this._abortController))return this._loadingPromise;const s=this._abortController;s&&s.abort();const i=a();return this._loadingPromise=new Promise(((e,s)=>{const o={signal:i.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,o).then(e,s),p(t,(()=>{i.abort()}))})),this._abortController=i,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return t(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layerName:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return t(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layerName:e})}getLayoutProperties(e){return t(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,r){let s=this.tileServers[t%this.tileServers.length];return s=s.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),s}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new u("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await async function(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]="string"==typeof e?[e,null]:[null,e.jsonUrl],o=s?h(s):null;await K(r,"esri",e,i,t);const l={layerDefinition:r.validatedSource,url:s,parsedUrl:o,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&q(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&q(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return W(l.spriteUrl),W(l.glyphsUrl),l}(e,t);if("webp"===r.spriteFormat){await function(e){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}))}("lossy")||(r.spriteFormat="png")}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySourceName",r.primarySourceName),this._set("styleRepository",new Q(r.style,r)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const e of r)if(e.toLowerCase().indexOf(s)>-1)return A(`//static.arcgis.com/attribution/Vector${i}/${e}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};e([o({readOnly:!0})],te.prototype,"attributionDataUrl",null),e([o({type:["show","hide"]})],te.prototype,"listMode",void 0),e([o({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],te.prototype,"capabilities",null),e([o({readOnly:!0})],te.prototype,"currentStyleInfo",void 0),e([o({json:{read:!1},readOnly:!0,type:P})],te.prototype,"fullExtent",null),e([o()],te.prototype,"style",void 0),e([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],te.prototype,"isReference",void 0),e([o({type:["VectorTileLayer"]})],te.prototype,"operationalLayerType",void 0),e([o({readOnly:!0})],te.prototype,"parsedUrl",null),e([o({readOnly:!0})],te.prototype,"serviceUrl",null),e([o({type:k,readOnly:!0})],te.prototype,"spatialReference",null),e([o({readOnly:!0})],te.prototype,"styleRepository",void 0),e([o({readOnly:!0})],te.prototype,"sourceNameToSource",void 0),e([o({readOnly:!0})],te.prototype,"primarySourceName",void 0),e([o({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],te.prototype,"styleUrl",null),e([x(["portal-item","web-document"],"styleUrl")],te.prototype,"writeStyleUrl",null),e([o({json:{read:!1},readOnly:!0})],te.prototype,"tileIndexType",null),e([o({json:{read:!1},readOnly:!0})],te.prototype,"tileIndexUrl",null),e([o({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:T})],te.prototype,"tileInfo",null),e([o({json:{read:!1},readOnly:!0,type:N})],te.prototype,"tilemapCache",null),e([o({json:{read:!1},readOnly:!0})],te.prototype,"tileServers",null),e([o({json:{read:!1},readOnly:!0,value:"vector-tile"})],te.prototype,"type",void 0),e([o({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],te.prototype,"url",void 0),e([o({readOnly:!0})],te.prototype,"version",void 0),e([U("version",["version","currentVersion"])],te.prototype,"readVersion",null),e([o({readOnly:!0})],te.prototype,"compatibleTileInfo256",null),e([o({readOnly:!0})],te.prototype,"compatibleTileInfo512",null),te=e([c("esri.layers.VectorTileLayer")],te);var re=te,se=Object.freeze({__proto__:null,default:re});export default re;export{H as S,se as V};