/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Basemap.js";import s from"../../core/Collection.js";import{HandleOwnerMixin as i}from"../../core/HandleOwner.js";import r from"../../core/Loadable.js";import{a as o,i as a}from"../../chunks/maybe.js";import{watch as n,on as p}from"../../core/reactiveUtils.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{cast as m}from"../../core/accessorSupport/decorators/cast.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{canProjectWithoutEngine as u,isLoaded as h,load as f}from"../../geometry/projection.js";import{e as j}from"../../geometry/SpatialReference.js";import{b as d}from"../../chunks/basemapUtils.js";import y from"../../core/Error.js";import{throwIfAborted as g}from"../../core/promiseUtils.js";import{c as b,j as w}from"../../chunks/layerUtils.js";import{s as k,V as v}from"../../chunks/ViewingMode.js";import{N as R,M as B}from"../../chunks/terrainUtils.js";import{T as P}from"../../chunks/TerrainConst.js";import{i as I}from"../../chunks/spatialReferenceSupport.js";import U from"./support/BasemapGalleryItem.js";import L from"./support/LocalBasemapsSource.js";import S from"./support/PortalBasemapsSource.js";import"../../chunks/collectionUtils.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/ensureType.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../chunks/jsonMap.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../core/Promise.js";import"../../portal/PortalItem.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/messages.js";import"../../chunks/writeUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/WatchUpdatingTracking.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/mat4.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/Util2.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4f64.js";import"../../chunks/Scheduler.js";import"../../chunks/ObservableValue.js";import"../../chunks/debugFlags2.js";import"../../chunks/interfaces4.js";import"../../layers/support/TileInfo.js";import"../../layers/support/LOD.js";import"../../chunks/TileKey.js";import"../../core/Identifiable.js";async function _(e,t={}){await async function(e,t){const{basemap:s,view:i}=e;if(await s.load(t),0===s.baseLayers.length)return;const r=s.baseLayers.concat(s.referenceLayers).toArray().filter((e=>!w(e))).map((e=>new y("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})));if(r.length)throw r[0];const n=s.baseLayers.getItemAt(0);if(w(n)){try{await n.load(t)}catch(e){const t="basemap-compatibility:unknown-error",s="Unknown basemap compatibility error",{name:i=t,message:r=s,details:o}=e;throw new y(i,r,o)}!function(e,t){const s=t.state.viewingMode;if(!s)return;let i,r;if("wmts"===e?.type){const a=R(e,t.spatialReference,s);if(o(a.tileInfo))throw new y("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");i=a.tileInfo,r=a.fullExtent}else i=e.tileInfo,r=e.fullExtent;if(o(i))return;if(!I(i.spatialReference,s))throw new y(`basemapgalleryitem:spatial-reference-unsupported-${k(s)}`,`Basemap spatial reference is unsupported in ${k(s)} mode`);const n=i.spatialReference.isGeographic,p="vector-tile"===e?.type?i.getOrCreateCompatible(256,n?1:2):null;if(s===v.Global){let t=B(i,r,null,s);if(t&&"vector-tile"===e?.type&&a(r)&&p&&!B(p,r,null,s)&&(t=null),t){const e=i.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new y(`basemapgalleryitem:tiling-scheme-unsupported-${e}-global`,"Basemap tiling scheme is unsupported in global mode",{error:t})}}else if(P.checkUnsupported(i))throw new y("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const c=t.get("basemapTerrain.tilingScheme");if(c&&!c.compatibleWith(i)&&("vector-tile"!==e?.type||!p||!c.compatibleWith(p)))throw new y("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(n,i)}}(e,t),g(t)}async function E(e,t={}){const{basemap:s,view:i}=e;if(g(t),"spatialReferenceLocked"in i&&!i.spatialReferenceLocked)return;if(await s.load(t),g(t),0===s.baseLayers.length)return;const r=s.baseLayers.getItemAt(0);if(!b(r))return;if(s.spatialReference){if(i.spatialReference.equals(s.spatialReference))return;T()}await r.load(t),g(t);const o=(("supportedSpatialReferences"in r?r.supportedSpatialReferences:null)||["tileInfo"in r?r.tileInfo.spatialReference:null]).filter(Boolean);0!==o.length&&o.every((e=>!i.spatialReference.equals(e)))&&T()}function T(){throw new y("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}const O=s.ofType(U);let x=class extends(i(r)){constructor(e){super(e),this._loadingProjectionEngine=!1,this.items=new O,this.source=new S,this.view=null}initialize(){const e=()=>this._recreateItems();this.handles.add([n((()=>"ready"===this.state?this.compatibilityFunction:null),(()=>this._updateItems())),p((()=>this.source?.basemaps),"change",e,{onListenerAdd:e})])}get activeBasemap(){return this.view?.map?.basemap??null}set activeBasemap(e){if(!this.view.map)return;const s="string"==typeof e?t.fromId(e):e;if(!s||!this.view.ready)return this.view.map.basemap=s,void this._clearOverride("activeBasemap");const i=s.spatialReference||this.items?.find((e=>this.basemapEquals(s,e.basemap)))?.spatialReference;if(i&&"spatialReferenceLocked"in this.view&&!this.view.spatialReferenceLocked){const t=this.view.spatialReference;if(a(i)&&!j(t,i)&&!u(this.view.spatialReference,i)&&!h())return this._override("activeBasemap",s),this._loadingProjectionEngine=!0,void f().then((()=>{this._get("activeBasemap")===e&&(this.view.map.basemap=e,this.view.spatialReference=i,this._clearOverride("activeBasemap"))}),(()=>{})).then((()=>{this._loadingProjectionEngine=!1}));this.view.map.basemap=s,this._clearOverride("activeBasemap"),a(i)&&!j(this.view.spatialReference,i)&&(this.view.spatialReference=i)}else this.view.map.basemap=s,this._clearOverride("activeBasemap")}get activeBasemapIndex(){const{state:e,items:t,activeBasemap:s}=this;if("ready"!==e)return-1;const i=t.findIndex((e=>e.basemap===s));return-1===i?t.findIndex((e=>this.basemapEquals(e.basemap,s))):i}get compatibilityFunction(){return"3d"===this.view?.type?_:E}set compatibilityFunction(e){this._overrideIfSome("compatibilityFunction",e)}castSource(e){return Array.isArray(e)||s.isCollection(e)?new L({basemaps:e}):function(e){return e&&"esri.portal.Portal"===e.declaredClass}(e)?new S({portal:e}):function(e){return e&&!(e instanceof S)&&(!!e.portal||!!e.query)}(e)?new S(e):function(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}(e)?e:null}get state(){return this.view?.ready&&this.source?this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(e,t){return d(e,t)}refresh(){this._recreateItems()}load(e){return this.addResolvingPromise(r.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)}_recreateItems(){const e=this.source?.basemaps,{view:t,compatibilityFunction:s}=this;this.items.removeAll().forEach((e=>e.destroy())),e&&this.items.addMany(e.map((e=>new U({basemap:e,compatibilityFunction:s,view:t}))))}_updateItems(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view}};e([c()],x.prototype,"_loadingProjectionEngine",void 0),e([c()],x.prototype,"activeBasemap",null),e([c({readOnly:!0})],x.prototype,"activeBasemapIndex",null),e([c()],x.prototype,"compatibilityFunction",null),e([c({readOnly:!0,type:O})],x.prototype,"items",void 0),e([c()],x.prototype,"source",void 0),e([m("source")],x.prototype,"castSource",null),e([c({readOnly:!0})],x.prototype,"state",null),e([c()],x.prototype,"view",void 0),x=e([l("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],x);const F=x;export{F as default};
