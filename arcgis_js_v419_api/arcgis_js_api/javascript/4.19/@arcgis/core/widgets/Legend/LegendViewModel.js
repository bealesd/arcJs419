/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import r from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import i from"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import{o}from"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import a from"../../core/Handles.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../tasks/support/ColorRamp.js";import"../../tasks/support/AlgorithmicColorRamp.js";import"../../tasks/support/MultipartColorRamp.js";import"../../chunks/colorRamps.js";import"../../renderers/Renderer.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/VisualVariablesMixin.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/jsonUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/ClassBreaksRenderer.js";import"../../chunks/colorUtils2.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/MemCache.js";import"../../chunks/ItemCache.js";import"../../chunks/utils3.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils2.js";import"../../chunks/LRUCache.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import{init as n,watch as l,whenTrue as p}from"../../core/watchUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/commonProperties2.js";import"../../core/HandleOwner.js";import"../../chunks/widgetUtils.js";import"../../chunks/projector.js";import"../../chunks/index.js";import"../../chunks/sublayerUtils.js";import"../../chunks/ExportImageParameters.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df32.js";import"../../chunks/numberUtils.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/rendererConversion.js";import m from"./support/ActiveLayerInfo.js";import"../../chunks/renderUtils.js";import"../../chunks/previewSymbol3D.js";const y="state",c="view",d="all-layer-views",h="legend-properties",u=i.ofType(m),j=["esri.layers.BuildingSceneLayer","esri.layers.CSVLayer","esri.layers.FeatureLayer","esri.layers.GeoJSONLayer","esri.layers.GeoRSSLayer","esri.layers.GroupLayer","esri.layers.HeatmapLayer","esri.layers.ImageryLayer","esri.layers.ImageryTileLayer","esri.layers.MapImageLayer","esri.layers.OGCFeatureLayer","esri.layers.PointCloudLayer","esri.layers.StreamLayer","esri.layers.SceneLayer","esri.layers.TileLayer","esri.layers.WMSLayer","esri.layers.WMTSLayer","esri.layers.WCSLayer"],L=["view.basemapView.baseLayerViews","view.groundView.layerViews","view.layerViews","view.basemapView.referenceLayerViews"];let b=class extends r{constructor(e){super(e),this._handles=new a,this._layerViewByLayerId={},this._layerInfosByLayerViewId={},this._activeLayerInfosByLayerViewId={},this._activeLayerInfosWithNoParent=new i,this.activeLayerInfos=new u,this.basemapLegendVisible=!1,this.groundLegendVisible=!1,this.keepCacheOnDestroy=!1,this.respectLayerVisibility=!0,this.layerInfos=[],this.view=null}initialize(){this._handles.add(n(this,"view",this._viewHandles),c),this._handles.add(o((()=>this._refresh())))}destroy(){this._destroyViewActiveLayerInfos(),this._handles.destroy(),this._handles=null,this.view=null}get state(){return this.get("view.ready")?"ready":"disabled"}_viewHandles(){this._handles.remove(y),this.view&&this._handles.add(n(this,"state",this._stateHandles),y)}_stateHandles(){this._resetAll(),"ready"===this.state&&this._watchPropertiesAndAllLayerViews()}_resetAll(){this._handles.remove([d,h]),this._destroyViewActiveLayerInfos(),this.activeLayerInfos.removeAll()}_destroyViewActiveLayerInfos(){Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo,this)}_destroyViewActiveLayerInfo(e){this._handles.remove(e);const s=this._activeLayerInfosByLayerViewId[e];delete this._activeLayerInfosByLayerViewId[e],s&&s.parent&&s.parent.children.remove(s)}_watchPropertiesAndAllLayerViews(){const{allLayerViews:e}=this.view;e.length&&this._refresh(),this._handles.add(e.on("change",this._allLayerViewsChangeHandle.bind(this)),d),this._handles.add(l(this,"layerInfos, basemapLegendVisible, groundLegendVisible",this._propertiesChangeHandle.bind(this)),h)}_allLayerViewsChangeHandle(e){e.removed.forEach((e=>this._destroyViewActiveLayerInfo(e.uid))),this._refresh()}_propertiesChangeHandle(){this._destroyViewActiveLayerInfos(),this._refresh()}_refresh(){this._layerInfosByLayerViewId={},this.activeLayerInfos.removeAll(),this._generateLayerViews().filter(this._filterLayerViewsByLayerInfos,this).filter(this._isLayerViewSupported,this).forEach(this._generateActiveLayerInfo,this),this._sortActiveLayerInfos(this.activeLayerInfos)}_sortActiveLayerInfos(e){if(e.length<2)return;const s=[];e.forEach((r=>{if(!r.parent){const t=r.layer.parent,i=t&&"uid"in t&&this._layerViewByLayerId[t.uid],o=i&&this._activeLayerInfosByLayerViewId[i.uid];o&&-1!==e.indexOf(o)&&(s.push(r),r.parent=o,o.children.add(r),this._sortActiveLayerInfos(o.children))}})),e.removeMany(s);const r={};this.view.allLayerViews.forEach(((e,s)=>r[e.layer.uid]=s)),e.sort(((e,s)=>{const t=r[e.layer.uid]||0;return(r[s.layer.uid]||0)-t}))}_generateLayerViews(){const e=[];return L.filter(this._filterLayerViews,this).map(this.get,this).filter((e=>null!=e)).forEach(this._collectLayerViews("layerViews",e)),e}_filterLayerViews(e){const s=!this.basemapLegendVisible&&("view.basemapView.baseLayerViews"===e||"view.basemapView.referenceLayerViews"===e),r=!this.groundLegendVisible&&"view.groundView.layerViews"===e;return!s&&!r}_collectLayerViews(e,s){const r=t=>(t&&t.forEach((t=>{s.push(t),r(t[e])})),s);return r}_filterLayerViewsByLayerInfos(e){const s=this.layerInfos;return!s||!s.length||s.some((s=>this._hasLayerInfo(s,e)))}_hasLayerInfo(e,s){const r=this._isLayerUIDMatching(e.layer,s.layer.uid);return r&&(this._layerInfosByLayerViewId[s.uid]=e),r}_isLayerUIDMatching(e,s){return e&&(e.uid===s||this._hasLayerUID(e.layers,s))}_hasLayerUID(e,s){return e&&e.some((e=>this._isLayerUIDMatching(e,s)))}_isLayerViewSupported(e){return j.indexOf(e.layer.declaredClass)>-1&&(this._layerViewByLayerId[e.layer.uid]=e,!0)}_generateActiveLayerInfo(e){this._isLayerActive(e)?this._buildActiveLayerInfo(e):(this._handles.remove(e.uid),this._handles.add(l(e,"legendEnabled, layer.legendEnabled",(()=>this._layerActiveHandle(e))),e.uid))}_layerActiveHandle(e){this._isLayerActive(e)&&(this._handles.remove(e.uid),this._buildActiveLayerInfo(e))}_isLayerActive(e){return!this.respectLayerVisibility||e.legendEnabled&&e.get("layer.legendEnabled")}_buildActiveLayerInfo(e){var s;const r=e.layer,t=e.uid,i=this._layerInfosByLayerViewId[t];let o=this._activeLayerInfosByLayerViewId[t];if(!o){const s=i&&void 0!==i.title&&i.layer.uid===r.uid;o=new m({layer:r,layerView:e,title:s?i.title:r.title,view:this.view,respectLayerVisibility:this.respectLayerVisibility,keepCacheOnDestroy:this.keepCacheOnDestroy,sublayerIds:i&&i.sublayerIds||[]}),this._activeLayerInfosByLayerViewId[t]=o}const a=r.parent&&"uid"in r.parent&&this._layerViewByLayerId[null==(s=r.parent)?void 0:s.uid];if(o.parent=this._activeLayerInfosByLayerViewId[null==a?void 0:a.uid],!this._handles.has(t)){const s=[l(r,"title",(e=>this._titleHandle(e,o))),l(r,"renderer?, opacity, pointSymbol?, lineSymbol?, polygonSymbol?",(()=>this._constructLegendElements(o))),p(this.view,"stationary",(()=>this._scaleHandle(o))),l(e,"_effectiveRenderer",(()=>this._constructLegendElements(o)))];if(this.respectLayerVisibility){const t=l(e,"legendEnabled",(e=>this._legendEnabledHandle(e,o))),i=l(r,"legendEnabled",(e=>this._legendEnabledHandle(e,o)));s.push(t,i)}this._handles.add(s,t)}o.isScaleDriven||this._constructLegendElements(o),this._addActiveLayerInfo(o)}_titleHandle(e,s){s.title=e,this._constructLegendElements(s)}_legendEnabledHandle(e,s){e?this._addActiveLayerInfo(s):this._removeActiveLayerInfo(s)}_scaleHandle(e){e.isScaleDriven&&this._constructLegendElements(e)}_addActiveLayerInfo(e){const{layerView:s,layer:r}=e;if(this._isLayerActive(s)&&-1===this.activeLayerInfos.indexOf(e)){const s=e.parent;if(s)-1===s.children.indexOf(e)&&s.children.push(e),this._sortActiveLayerInfos(s.children);else{var t;const s=null==(t=this.layerInfos)?void 0:t.some((e=>e.layer.uid===r.uid));r.parent&&"uid"in r.parent&&!s?this._activeLayerInfosWithNoParent.add(e):(this.activeLayerInfos.add(e),this._sortActiveLayerInfos(this.activeLayerInfos))}if(this._activeLayerInfosWithNoParent.length){const e=[];this._activeLayerInfosWithNoParent.forEach((s=>{const r=s.layer.parent,t=r&&"uid"in r&&this._layerViewByLayerId[null==r?void 0:r.uid],i=this._activeLayerInfosByLayerViewId[null==t?void 0:t.uid];i&&(e.push(s),s.parent=i)})),e.length&&(this._activeLayerInfosWithNoParent.removeMany(e),e.forEach((e=>this._addActiveLayerInfo(e))))}}}_removeActiveLayerInfo(e){const s=e.parent;s?s.children.remove(e):this.activeLayerInfos.remove(e)}_constructLegendElements(e){const s=e.layer;"featureCollections"in s&&s.featureCollections?e.buildLegendElementsForFeatureCollections(s.featureCollections):"renderer"in s&&s.renderer?e.buildLegendElementsForRenderer(s.renderer):"url"in s&&s.url?e.buildLegendElementsForTools():e.children.forEach((e=>this._constructLegendElements(e)))}};e([s({type:u})],b.prototype,"activeLayerInfos",void 0),e([s()],b.prototype,"basemapLegendVisible",void 0),e([s()],b.prototype,"groundLegendVisible",void 0),e([s()],b.prototype,"keepCacheOnDestroy",void 0),e([s()],b.prototype,"respectLayerVisibility",void 0),e([s()],b.prototype,"layerInfos",void 0),e([s({readOnly:!0})],b.prototype,"state",null),e([s()],b.prototype,"view",void 0),b=e([t("esri.widgets.Legend.LegendViewModel")],b);var f=b;export default f;
