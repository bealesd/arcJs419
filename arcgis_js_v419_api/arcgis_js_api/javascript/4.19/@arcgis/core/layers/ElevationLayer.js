/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import{L as r,i as t}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{createAbortController as s,throwIfAborted as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import a from"../core/Error.js";import"../chunks/ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import{objectToQuery as p}from"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as l}from"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import c from"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../chunks/Identifiable.js";import"../chunks/opacityUtils.js";import"../core/Handles.js";import m from"./Layer.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/MemCache.js";import"../chunks/LRUCache.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as u}from"../chunks/MultiOriginJSONSupport.js";import"../core/watchUtils.js";import"../chunks/arcgisLayerUrl.js";import h from"../geometry/HeightModelInfo.js";import"../chunks/aaBoundingRect.js";import{O as d}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import{u as j}from"../chunks/commonProperties2.js";import"../chunks/Scheduler.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"./support/LOD.js";import"./support/TileInfo.js";import{A as y}from"../chunks/ArcGISService.js";import{P as g}from"../chunks/PortalLayer.js";import"../chunks/serviceTileInfoProperty.js";import"../chunks/TilemapCache.js";import{A as k}from"../chunks/ArcGISCachedService.js";import{W as v}from"../chunks/WorkerHandle.js";class f extends v{constructor(e){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.scheduler=e}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return[e.buffer]}}const S=new Map;function w(e){let r=S.get(e);return r||(r={instance:new f(e),ref:0},S.set(e,r)),++r.ref,r.instance}function U(e){if(null==e)return;const r=e.scheduler,t=S.get(r);t&&--t.ref<=0&&(t.instance.destroy(),S.delete(r))}const P=r.getLogger("esri.layers.ElevationLayer");let I=class extends(k(y(d(g(u(m)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=w()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}destroy(){U(this._lercDecoder),this._lercDecoder=null}set minScale(e){this.constructed&&P.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&P.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=t(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((()=>this._fetchImageService(r)),(()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,r,o,i){const a=t((i=i||{signal:null}).signal)?i.signal:i.signal=s().signal,n={responseType:"array-buffer",signal:a},p={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,r,o,i))).then((()=>c(this.getTileUrl(e,r,o),n))).then((e=>this._lercDecoder.decode(e.data,p,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,s=p({...this.parsedUrl.query,blankTile:!o&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${s?"?"+s:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import("../chunks/ElevationQuery.js");i(r);return(new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import("../chunks/ElevationQuery.js");i(r);return(new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await c(this.parsedUrl.path,r);t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}};e([o({json:{read:{source:"copyrightText"}}})],I.prototype,"copyright",void 0),e([o({readOnly:!0,type:h})],I.prototype,"heightModelInfo",void 0),e([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),e([o({type:["show","hide"]})],I.prototype,"listMode",void 0),e([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],I.prototype,"minScale",null),e([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],I.prototype,"maxScale",null),e([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],I.prototype,"opacity",void 0),e([o({type:["ArcGISTiledElevationServiceLayer"]})],I.prototype,"operationalLayerType",void 0),e([o()],I.prototype,"sourceJSON",void 0),e([o({json:{read:!1},value:"elevation",readOnly:!0})],I.prototype,"type",void 0),e([o(j)],I.prototype,"url",void 0),e([o()],I.prototype,"version",void 0),e([l("version",["currentVersion"])],I.prototype,"readVersion",null),I=e([n("esri.layers.ElevationLayer")],I);var b=I,T=Object.freeze({__proto__:null,default:b});export default b;export{T as E,w as a,U as r};
