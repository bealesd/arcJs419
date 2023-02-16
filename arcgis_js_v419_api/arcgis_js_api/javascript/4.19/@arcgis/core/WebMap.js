/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./chunks/tslib.es6.js";import"./chunks/ArrayPool.js";import"./core/lang.js";import"./chunks/deprecate.js";import"./chunks/object.js";import{version as t}from"./kernel.js";import"./config.js";import{L as r,u as i,i as o}from"./chunks/Logger.js";import"./chunks/string.js";import"./chunks/metadata.js";import{property as a}from"./core/accessorSupport/decorators/property.js";import"./core/Accessor.js";import"./chunks/PropertyOrigin.js";import{f as s}from"./core/scheduling.js";import{eachAlways as n}from"./core/promiseUtils.js";import"./chunks/Message.js";import l from"./core/Error.js";import"./chunks/compilerUtils.js";import"./chunks/ensureType.js";import{subclass as p}from"./core/accessorSupport/decorators/subclass.js";import"./chunks/Evented.js";import m from"./core/Collection.js";import"./chunks/collectionUtils.js";import{r as u}from"./chunks/JSONSupport.js";import{a as h}from"./chunks/Promise.js";import{L as c}from"./chunks/Loadable.js";import"./chunks/asyncUtils.js";import{l as d}from"./chunks/loadAll.js";import{urlToObject as y,isDataProtocol as g,dataComponents as w,addQueryParameter as f}from"./core/urlUtils.js";import"./core/accessorSupport/decorators/cast.js";import"./chunks/jsonMap.js";import"./chunks/enumeration.js";import{r as b}from"./chunks/reader.js";import{w as _}from"./chunks/writer.js";import"./chunks/multiOriginJSONSupportUtils.js";import"./chunks/resourceExtension.js";import"./chunks/persistableUrlUtils.js";import j from"./geometry/SpatialReference.js";import"./chunks/locale.js";import"./chunks/number.js";import"./intl.js";import"./request.js";import"./chunks/assets.js";import"./geometry/Geometry.js";import"./geometry/Point.js";import"./chunks/Ellipsoid.js";import{geographicToWebMercator as v,webMercatorToGeographic as S}from"./geometry/support/webMercatorUtils.js";import"./geometry/Extent.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalFolder.js";import"./portal/PortalGroup.js";import"./portal/PortalUser.js";import I from"./portal/Portal.js";import"./portal/PortalItemResource.js";import"./portal/PortalRating.js";import A from"./portal/PortalItem.js";import"./Basemap.js";import{g as k}from"./chunks/writeUtils.js";import"./chunks/mathUtils2.js";import"./chunks/vec3f64.js";import"./chunks/common.js";import"./chunks/vec3.js";import"./chunks/mathUtils.js";import"./Camera.js";import"./chunks/colorUtils.js";import"./Color.js";import"./chunks/zmUtils.js";import"./geometry/Multipoint.js";import"./geometry/Polygon.js";import"./chunks/extentUtils.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./geometry.js";import"./chunks/Identifiable.js";import"./chunks/opacityUtils.js";import"./Ground.js";import"./core/Handles.js";import"./chunks/CollectionFlattener.js";import{h as P,i as O}from"./chunks/basemapUtils.js";import L from"./Map.js";import"./layers/Layer.js";import"./chunks/TablesMixin.js";import"./chunks/timeUtils.js";import"./TimeExtent.js";import"./TimeInterval.js";import U from"./Viewpoint.js";import"./chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as V,a as F}from"./chunks/MultiOriginJSONSupport.js";import{whenTrueOnce as T}from"./core/watchUtils.js";import{u as W}from"./chunks/originUtils.js";import{i as R}from"./chunks/arcgisLayerUrl.js";import{r as M,a as x,h as C}from"./chunks/portalItemUtils.js";import"./layers/support/FacilityLayerInfo.js";import"./layers/support/LevelLayerInfo.js";import"./layers/support/SiteLayerInfo.js";import N from"./support/MapFloorInfo.js";import E from"./tasks/support/ProjectParameters.js";import J,{R as B}from"./webmap/InitialViewProperties.js";import{W as G}from"./chunks/Widgets.js";import{g as D}from"./chunks/thumbnailUtils.js";import"./webdoc/applicationProperties/Search.js";import"./chunks/fieldType.js";import"./webdoc/applicationProperties/SearchLayerField.js";import"./webdoc/applicationProperties/SearchLayer.js";import"./webdoc/applicationProperties/SearchTableField.js";import"./webdoc/applicationProperties/SearchTable.js";import"./webdoc/applicationProperties/Viewing.js";import K from"./webmap/ApplicationProperties.js";import"./chunks/Thumbnail2.js";import $ from"./webmap/Bookmark.js";import z from"./webmap/background/ColorBackground.js";import{V as q}from"./chunks/Version.js";class H extends q{constructor(e,t){super(e,t,"webmap")}}const Q=new H(2,20),X=m.ofType($),Y=r.getLogger("esri.WebMap"),Z=new Map;Z.set("image/jpeg","jpeg"),Z.set("image/jpg","jpg"),Z.set("image/png","png"),Z.set("image/gif","gif");const ee=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map((e=>e.toLowerCase()));let te=class extends(V(c.LoadableMixin(h(L)))){constructor(e){super(e),this.applicationProperties=null,this.bookmarks=new X,this.floorInfo=null,this.initialViewProperties=new J,this.portalItem=null,this.presentation=null,this.sourceVersion=null,this.widgets=null,this.authoringApp=this.authoringAppVersion=null,this._isAuthoringAppSetByUser=this._isAuthoringAppVersionSetByUser=!1}destroy(){const e=this.portalItem;this.portalItem=null,null==e||e.destroy()}initialize(){if(this.when().catch((e=>{Y.error("#load()","Failed to load web map",e)})),this.resourceInfo){let e;try{e=this._validateJSON(this.resourceInfo)}catch(e){return void this.addResolvingPromise(Promise.reject(e))}this.read(e)}}set authoringApp(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}writeAuthoringApp(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp="ArcGIS API for JavaScript"}set authoringAppVersion(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}writeAuthoringAppVersion(e,r){e&&this._isAuthoringAppVersionSetByUser?r.authoringAppVersion=e:r.authoringAppVersion=t}readInitialViewProperties(e,t){var r;const i=new J;t.background&&(i.background=z.fromJSON(t.background));const o=null==(r=t.initialState)?void 0:r.viewpoint;if(o){if(o.rotation){H.parse(t.version||"","webmap").lessThan(2,20)&&"ArcGIS Pro"===t.authoringApp&&(o.rotation*=-1)}i.viewpoint=U.fromJSON(o)}return t.mapRangeInfo&&(i.rangeInfo=B.fromJSON(t.mapRangeInfo)),t.spatialReference&&(i.spatialReference=j.fromJSON(t.spatialReference)),i}writeInitialViewProperties(e,t,r,i){if(!e)return;const o=e.background;o&&o.color&&(t.background=o.write(null,i)),e.viewpoint&&(t.initialState={viewpoint:e.viewpoint.write(null,i)}),e.rangeInfo&&(t.mapRangeInfo=e.rangeInfo.toJSON(i)),e.spatialReference&&(t.spatialReference=e.spatialReference.write(null,i))}writeLayers(e,t,r,i){t[r]=this._writeLayers(e,i,"operational-layers")}readSourceVersion(e,t){const[r,i]=t.version.split(".");return new H(parseInt(r,10),parseInt(i,10))}writeSourceVersion(e,t,r){t[r]=`${Q.major}.${Q.minor}`}writeTables(e,t,r,i){const o=this._writeLayers(e,i,"tables");o.length&&(t[r]=o)}get thumbnailUrl(){return this.portalItem&&this.portalItem.thumbnailUrl||null}set thumbnailUrl(e){e?(this._override("thumbnailUrl",e),this._thumbnailFilename=this._generateCustomThumbnailFilename(e)):this._clearThumbnailOverride()}load(e){return this.addResolvingPromise(this._loadFromSource()),Promise.resolve(this)}loadAll(){return d(this,(e=>{e(this.ground,this.basemap,this.layers,this.tables)}))}read(e,t){t={...t,origin:"web-map"};const r=this._getAuthoringPropsState();u(this,e,(t=>super.read(e,t)),t),this._restoreAuthoringPropsFromState(r)}write(e,t){if("loaded"!==this.loadStatus){const e=new l("webmap:not-loaded","Web map must be loaded before it can be serialized");throw Y.error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus),e}return this._removeDanglingLayerRefs(),t={...t,origin:"web-map",restrictedWebMapWriting:!0,webmap:this},super.write(e,t)}async save(e){e=e||{},this._validateItem(),await this._updateFromPromise,await this.load(),await this._loadLayerContainers(),await this._beforeSave(),this._validateMap();const t=this.portalItem,r={origin:"web-map",messages:[],writtenProperties:[],url:t.itemUrl&&y(t.itemUrl),portal:t.portal||I.getDefault()},i=this.write(null,r);return this._validateJSONForWriting(r,e),await this._updateItemProperties(t),await this._updateItem(t,i,r),await this._updateItemThumbnail(),t}async saveAs(e,t){t=t||{};const r=this._getPortalItem(e);await this._updateFromPromise,await this.load(),await this._loadLayerContainers(),await this._beforeSave(),this._validateMap();const i={origin:"web-map",messages:[],writtenProperties:[],url:null,portal:r.portal},o=this.write(null,i);this._validateJSONForWriting(i,t),await this._updateItemPropertiesForSaveAs(r);const a=this._getThumbnailState();return await this._createItem(r,o,i,t),this._restoreThumbnailFromState(a),await this._updateItemThumbnail(),r}async updateFrom(e,t){const r=this._updateFromInternal(e,t);this._updateFromPromise=r,await r;r===this._updateFromPromise&&(this._updateFromPromise=null)}getLayerJSONFromResourceInfo(e){var t,r,i,o;const a=this.resourceInfo;return this._collectAllLayersJSON(s([null==a||null==(t=a.baseMap)?void 0:t.baseMapLayers,null==a?void 0:a.operationalLayers,null==(r=this.basemap)||null==(i=r.resourceInfo)||null==(o=i.data)?void 0:o.baseMapLayers])).find((t=>t.id===e.id))}_collectAllLayersJSON(e){return e.reduce(((e,t)=>(e.push(t),"GroupLayer"===t.layerType&&(e=e.concat(this._collectAllLayersJSON(t.layers||[]))),e)),[])}_writeLayers(e,t,r){t={...t,layerContainerType:r};return e.map((e=>i(k(e,"tables"===r?null:this.getLayerJSONFromResourceInfo(e),t)))).filter(Boolean).toArray()}_loadFromSource(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):Promise.resolve(null)}_loadFromItem(e){return e.load().catch((e=>{throw new l("webmap:load-portal-item","Failed to load portal item",{error:e})})).then((()=>{if("Web Map"!==e.type)throw new l("webmap:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Map'",{type:e.type})})).then((()=>e.fetchData())).then((t=>(this.resourceInfo=t,this._readAndLoadFromJSON(t,{origin:"web-map",portal:e.portal||I.getDefault()})))).then((()=>this._computeInitialViewpoint()))}_readAndLoadFromJSON(e,t){const r=this._validateJSON(e);return this.read(r,t),this._loadFromJSON(r,t)}_validateJSON(e){const t=H.parse(e.version||"","webmap");return Q.validate(t),e.version=`${t.major}.${t.minor}`,e}_loadFromJSON(e,t){const r={context:{...t,layerContainerType:"operational-layers"}};return this.portalItem&&(r.context.portal=this.portalItem.portal||I.getDefault()),import("./chunks/layersCreator.js").then((({populateOperationalLayers:t})=>{const i=[],o=e.operationalLayers;o&&o.length&&i.push(t(this.layers,o,r));const a={...r,context:{...r.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"},s=e.tables;return s&&s.length&&i.push(t(this.tables,s,a)),n(i).then((()=>{}))}))}async _computeInitialViewpoint(){var e,t;let r=this.initialViewProperties;if(null==(e=r)||null==(t=e.viewpoint)?void 0:t.targetGeometry)return;const i=await this._getExtentFromItem();i&&(r=r?r.clone():new J,r.viewpoint=new U,r.viewpoint.targetGeometry=i,this.initialViewProperties=r)}async _getExtentFromItem(){var e,t;const r=null==(e=this.initialViewProperties)?void 0:e.spatialReference,i=null==(t=this.portalItem)?void 0:t.extent;if(r&&i){if(r.isWGS84)return i.clone();if(r.isWebMercator)return v(i);return(await import("./chunks/geometryServiceUtils.js")).create(this.portalItem).then((e=>{const t=new E;return t.geometries=[i],t.outSpatialReference=r,e.project(t)})).then((e=>e[0])).catch((e=>(Y.error("Error projecting item's extent:",e),null)))}return null}_removeDanglingLayerRefs(){const e=this.applicationProperties,t=e&&e.viewing&&e.viewing.search,r=e=>!!this.allLayers.find((t=>t.id===e));t&&t.layers&&(t.layers=t.layers.filter((e=>r(e.id)))),t&&t.tables&&(t.tables=t.tables.filter((e=>!!this.tables.find((t=>t.id===e.id)))));const i=e&&e.editing&&e.editing.locationTracking;i&&i.info&&!r(i.info.layerId)&&(e.editing=null);const o=this.presentation&&this.presentation.slides;o&&o.forEach((e=>{e.visibleLayers&&(e.visibleLayers=e.visibleLayers.filter((e=>r(e.id))))}))}_validateMap(){if(!this.basemap||!this.basemap.baseLayers.length)throw new l("webmap:save","Map does not have a valid basemap with a base layer.")}_validateItem(){if(!this.portalItem)throw Y.error("save: requires the portalItem property to be set"),new l("webmap:portal-item-not-set","Portal item to save to has not been set on the WebMap");this._validateItemType(this.portalItem)}_validateItemType(e){if("Web Map"!==e.type)throw new l("webmap:portal-item-wrong-type",'Portal item needs to have type "Web Map"')}_loadLayerContainers(){const e=[];return this.basemap&&e.push(this.basemap.load()),this.ground&&e.push(this.ground.load()),n(e).then((()=>{}))}async _beforeSave(){const e=[];for(const t of this.allLayers)if("beforeSave"in t&&"function"==typeof t.beforeSave){const r=t.beforeSave();r&&e.push(r)}await n(e)}_loadAllLayers(){const e=this._getAllLayersAndTables().map((e=>e.load()));return n(e).then((()=>{}))}_getAllLayersAndTables(){return this.allLayers.concat(this.allTables)}_validateJSONForWriting(e,t){let r=e.messages.filter((e=>"error"===e.type)).map((e=>new l(e.name,e.message,e.details)));if(t.ignoreUnsupported&&(r=r.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name))),r.length>0)throw new l("webmap:save","Failed to save webmap due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async _updateItemProperties(e){e.extent=await this._getWGS84Extent(this.initialViewProperties.viewpoint.targetGeometry),await this._updateTypeKeywords(e)}async _updateItemPropertiesForSaveAs(e){M(e,"CollectorDisabled"),M(e,"OfflineDisabled"),M(e,"Workforce Project"),M(e,"Workforce Worker"),M(e,"Workforce Dispatcher"),M(e,"Offline Map Areas"),M(e,"FieldMapsDisabled"),await this._updateItemProperties(e)}async _getWGS84Extent(e){const t=e.clone().normalize();let r;if(t.length>1)for(const e of t)r?e.width>r.width&&(r=e):r=e;else r=t[0];return this._projectToWGS84(r)}async _projectToWGS84(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return S(e);const r=await import("./chunks/geometryServiceUtils.js"),i=await r.create(this.portalItem),o=new E;o.geometries=[e],o.outSpatialReference=j.WGS84;return(await i.project(o))[0]}async _updateTypeKeywords(e){x(e,"ArcGIS API for JavaScript"),await this._loadAllLayers(),this._evalCollectorKeyword(e),this._evalDataEditingKeyword(e),this._evalOfflineKeyword(e),this._evalDeveloperBasemapKeyword(e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}_evalCollectorKeyword(e){C(e,"CollectorDisabled")||C(e,"Workforce Project")||C(e,"Workforce Worker")||C(e,"Workforce Dispatcher")||!this._hasEditableFeatureLayer()?M(e,"Collector"):x(e,"Collector")}_evalDataEditingKeyword(e){this._hasEditableFeatureLayer()?x(e,"Data Editing"):M(e,"Data Editing")}_evalOfflineKeyword(e){!C(e,"OfflineDisabled")&&this._isOfflineCapableMap()?x(e,"Offline"):M(e,"Offline")}_evalDeveloperBasemapKeyword(e){P(this.basemap)?x(e,"DeveloperBasemap"):M(e,"DeveloperBasemap")}_hasEditableFeatureLayer(){return this._getAllLayersAndTables().some((e=>e.loaded&&this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled))}_isFeatureServiceLayer(e){return!("feature"!==e.type||!e.source||"feature-layer"!==e.source.type)}_isOfflineCapableMap(){return this._getAllLayersAndTables().filter((e=>"group"!==e.type)).every((e=>e.loaded&&this._isOfflineCapableLayer(e)))}_isOfflineCapableLayer(e){return this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsSync||("tile"===e.type||"vector-tile"===e.type)&&(e.capabilities.operations.supportsExportTiles||this._isExportableAGOLTileLayer(e)||O(e))&&e.spatialReference.equals(this.initialViewProperties.spatialReference)}_isExportableAGOLTileLayer(e){return"tile"===e.type&&(R(e.url)&&ee.some((t=>e.url.toLowerCase().indexOf("/"+t+"/")>-1)))}async _updateItem(e,t,r){await e.update({data:t}),this._syncUpInstanceWithItem(e,t,r)}async _createItem(e,t,r,i){const o=this.portalItem,a=!!(o&&o.id&&o.portal.user),s=e.portal;if(await s._signIn(),!await this._canCopyItem(o,a,s))throw new l("webmap:save-as-copy-not-allowed","Owner of this map does not allow others to save a copy");await s.user.addItem({item:e,folder:i.folder,data:t}),this.portalItem=e,this._syncUpInstanceWithItem(e,t,r)}async _canCopyItem(e,t,r){return!(o(e)&&e.id&&e.typeKeywords&&e.typeKeywords.indexOf("useOnly")>-1)||e.portal.portalHostname===r.portalHostname&&(t||await e.reload(),"admin"===e.itemControl||"update"===e.itemControl)}_syncUpInstanceWithItem(e,t,r){F.prototype.read.call(this,{version:t.version,authoringApp:t.authoringApp,authoringAppVersion:t.authoringAppVersion},{origin:"web-map",ignoreDefaults:!0,url:e.itemUrl&&y(e.itemUrl)}),W(r),this.resourceInfo=t}async _updateItemThumbnail(){this.thumbnailUrl&&this._isOverridden("thumbnailUrl")&&(await this.portalItem.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename}),this._clearThumbnailOverride())}_getPortalItem(e){let t=A.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type="Web Map"),t.portal||(t.portal=I.getDefault()),this._validateItemType(t),t}async _updateFromInternal(e,t){t=t||{},await T(e,"ready"),this._updateInitialViewProperties(e,t),await this._updateThumbnailUrl(e,t)}_updateInitialViewProperties(e,t){var r;t.backgroundExcluded||(this.initialViewProperties.background=null==(r=e.background)?void 0:r.clone());if(this.initialViewProperties.spatialReference=e.spatialReference.clone(),t.viewpointExcluded||(this.initialViewProperties.viewpoint=new U({rotation:e.rotation,scale:t.scalePreserved?e.scale:null,targetGeometry:this._getViewExtent(e)})),!t.widgetsExcluded)for(const t of e.persistableViewModels)t.updateWebDocument(this)}_getViewExtent(e){const t=e.center.clone().normalize(),r=e.extent.clone(),i=r.width/2;return r.xmin=t.x-i,r.xmax=t.x+i,r}async _updateThumbnailUrl(e,t){if(t.thumbnailExcluded)return;const r=D(e,t.thumbnailSize),i=await e.takeScreenshot({format:"png",width:r.width,height:r.height});this._setAutoGeneratedThumbnail(i.dataUrl)}_setAutoGeneratedThumbnail(e){this.thumbnailUrl=e,this._thumbnailFilename=null}_clearThumbnailOverride(){this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"),this._thumbnailFilename=null}_generateCustomThumbnailFilename(e){if(g(e)){const t=w(e),r=t&&t.mediaType,i=r&&Z.get(r.toLowerCase())||null,o=`thumbnail${Date.now()}`;return i?`${o}.${i}`:o}return null}_getThumbnailState(){let e=this.thumbnailUrl;return e&&(e=this._isOverridden("thumbnailUrl")?e:f(e,"w","8192")),{thumbnailUrl:e,filename:this._thumbnailFilename}}_restoreThumbnailFromState(e){this.thumbnailUrl=e.thumbnailUrl,this._thumbnailFilename=e.filename}_getAuthoringPropsState(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}}_restoreAuthoringPropsFromState(e){e.isAuthoringAppSetByUser?this.authoringApp=e.authoringApp:this._isAuthoringAppSetByUser=!1,e.isAuthoringAppVersionSetByUser?this.authoringAppVersion=e.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1}static fromJSON(e){const t=e;if(!t)throw new l("webmap:empty-resource","Expected a JSON resource but got nothing");return new this({resourceInfo:t})}};te.VERSION=Q,e([a({type:K,json:{write:!0}})],te.prototype,"applicationProperties",void 0),e([a({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],te.prototype,"authoringApp",null),e([_("authoringApp")],te.prototype,"writeAuthoringApp",null),e([a({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],te.prototype,"authoringAppVersion",null),e([_("authoringAppVersion")],te.prototype,"writeAuthoringAppVersion",null),e([a({json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],te.prototype,"basemap",void 0),e([a({type:X,json:{write:{overridePolicy:e=>({enabled:!!(e&&e.length>0),ignoreOrigin:!0})}}})],te.prototype,"bookmarks",void 0),e([a({type:N,json:{read:{source:"mapFloorInfo"},write:{target:"mapFloorInfo"}}})],te.prototype,"floorInfo",void 0),e([a({type:J,nonNullable:!0,json:{read:{source:["background","initialState.viewpoint","mapRangeInfo","spatialReference"]},write:{ignoreOrigin:!0,target:{background:{type:z},"initialState.viewpoint":{type:U},mapRangeInfo:{type:B},spatialReference:{type:j}}}}})],te.prototype,"initialViewProperties",void 0),e([b("initialViewProperties")],te.prototype,"readInitialViewProperties",null),e([_("initialViewProperties")],te.prototype,"writeInitialViewProperties",null),e([a({json:{read:!1,write:{target:"operationalLayers",ignoreOrigin:!0}}})],te.prototype,"layers",void 0),e([_("layers")],te.prototype,"writeLayers",null),e([a({type:A})],te.prototype,"portalItem",void 0),e([a({json:{write:!0}})],te.prototype,"presentation",void 0),e([a()],te.prototype,"resourceInfo",void 0),e([a({readOnly:!0,type:H,json:{read:{source:"version"},write:{allowNull:!0,ignoreOrigin:!0,target:"version",isRequired:!0}}})],te.prototype,"sourceVersion",void 0),e([b("sourceVersion")],te.prototype,"readSourceVersion",null),e([_("sourceVersion")],te.prototype,"writeSourceVersion",null),e([a({json:{read:!1,write:{ignoreOrigin:!0}}})],te.prototype,"tables",void 0),e([_("tables")],te.prototype,"writeTables",null),e([a()],te.prototype,"thumbnailUrl",null),e([a({type:G,json:{write:!0}})],te.prototype,"widgets",void 0),te=e([p("esri.WebMap")],te);var re=te;export default re;
