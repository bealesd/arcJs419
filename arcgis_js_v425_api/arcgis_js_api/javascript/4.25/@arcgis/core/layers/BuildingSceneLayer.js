/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../core/Collection.js";import{C as t}from"../chunks/CollectionFlattener.js";import e from"../core/Error.js";import{clone as o}from"../core/lang.js";import{l as i}from"../chunks/loadAll.js";import{L as p}from"../chunks/Logger.js";import{i as n}from"../chunks/maybe.js";import{M as m}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as l}from"../core/promiseUtils.js";import{join as a}from"../core/urlUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{r as c}from"../chunks/reader.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import y from"../geometry/SpatialReference.js";import d from"./Layer.js";import h from"./buildingSublayers/BuildingComponentSublayer.js";import b from"./buildingSublayers/BuildingGroupSublayer.js";import{APIKeyMixin as k}from"./mixins/APIKeyMixin.js";import{A as f}from"../chunks/ArcGISService.js";import{O as S}from"../chunks/OperationalLayer.js";import{PortalLayer as g}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as v}from"./mixins/ScaleRangeLayer.js";import{SceneService as I,SaveOperationType as U}from"./mixins/SceneService.js";import L from"./support/BuildingFilter.js";import C from"./support/BuildingSummaryStatistics.js";import{f as x,r as F,e as R}from"../chunks/commonProperties.js";import{F as w}from"../chunks/FetchAssociatedFeatureLayer.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../config.js";import"../chunks/string.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../core/JSONSupport.js";import"../chunks/writer.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../core/Identifiable.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../core/reactiveUtils.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/support/jsonUtils.js";import"./FeatureLayer.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/assets.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"./support/Field.js";import"../chunks/fieldType.js";import"./mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"./mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"./mixins/FeatureEffectLayer.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"./mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/arcgisLayerUrl.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"./support/GeometryFieldsInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"./mixins/FeatureReductionLayer.js";import"./support/AggregateField.js";import"./support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"./mixins/OrderedLayer.js";import"./mixins/PublishableLayer.js";import"./support/PublishingInfo.js";import"./mixins/RefreshableLayer.js";import"./mixins/TemporalLayer.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/TimeReference.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"../chunks/fieldProperties.js";import"./support/FieldsIndex.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./buildingSublayers/BuildingSublayer.js";import"../chunks/capabilities.js";import"../chunks/I3SIndexInfo.js";import"../chunks/I3SLayerDefinitions.js";import"../chunks/I3SUtil.js";import"../chunks/mat3.js";import"../chunks/mat3f64.js";import"../chunks/mat4f64.js";import"../chunks/quat.js";import"../chunks/I3SBinaryReader.js";import"../chunks/VertexAttribute.js";import"../chunks/quatf64.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/ViewingMode.js";import"../chunks/edgeUtils.js";import"../chunks/symbolColorUtils.js";import"../chunks/vec3f32.js";import"../chunks/plane.js";import"../chunks/vector.js";import"../chunks/ray.js";import"../chunks/byteSizeEstimations.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/popupUtils.js";import"../chunks/originUtils.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/saveUtils.js";import"../chunks/uuid.js";import"../chunks/resourceUtils.js";import"../chunks/BuildingFilterBlock.js";const O=r.ofType(L),T=o(b.sublayersProperty);T.json.origins["web-scene"]={type:[h],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},T.json.origins["portal-item"]={type:[h],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let P=class extends(I(f(S(g(v(m(k(d)))))))){constructor(s){super(s),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new t({getCollections:()=>[this.sublayers],getChildrenFunction:s=>"building-group"===s.type?s.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new O,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(s){return"string"==typeof s?{url:s}:s??{}}destroy(){this.allSublayers.destroy()}readSublayers(s,r,t){const e=b.readSublayers(s,r,t);return b.forEachSublayer(e,(s=>s.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(e,this._sublayerOverrides),this._sublayerOverrides=null),e}applySublayerOverrides(s,{overrides:r,context:t}){b.forEachSublayer(s,(s=>s.read(r.get(s.id),t)))}readSublayerOverrides(s,r){const t=new Map;for(const o of s)null!=o&&"object"==typeof o&&"number"==typeof o.id?t.set(o.id,o):r.messages?.push(new e("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:o}));return{overrides:t,context:r}}writeSublayerOverrides(s,r,t){const e=[];b.forEachSublayer(this.sublayers,(s=>{const r=s.write({},t);Object.keys(r).length>1&&e.push(r)})),e.length>0&&(r.sublayers=e)}writeUnappliedOverrides(s,r){r.sublayers=[],s.overrides.forEach((s=>{r.sublayers.push(o(s))}))}write(s,r){return s=super.write(s,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,s,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,s)),s}read(s,r){if(super.read(s,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=s&&Array.isArray(s.sublayers)){const t=this.readSublayerOverrides(s.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this._sublayerOverrides=t}}readSummaryStatistics(s,r){if("string"==typeof r.statisticsHRef){const s=a(this.parsedUrl?.path,r.statisticsHRef);return new C({url:s})}return null}set elevationInfo(s){this._set("elevationInfo",s),this._validateElevationInfo()}load(s){const r=n(s)?s.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},s).catch(l).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return i(this,(s=>{b.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&s(r)})),this.summaryStatistics&&s(this.summaryStatistics)}))}async saveAs(s,r){return this._debouncedSaveOperations(U.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},s)}async save(){const s={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(U.SAVE,s)}validateLayer(s){if(!s.layerType||"Building"!==s.layerType)throw new e("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:s.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const s=this.elevationInfo;s&&("absolute-height"!==s.mode&&p.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),s.featureExpressionInfo&&"0"!==s.featureExpressionInfo.expression&&p.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(s){const r=new w(this.parsedUrl,this.portalItem,this.apiKey,s);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(s){p.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",s)}}};s([u({type:["BuildingSceneLayer"]})],P.prototype,"operationalLayerType",void 0),s([u({readOnly:!0})],P.prototype,"allSublayers",void 0),s([u(T)],P.prototype,"sublayers",void 0),s([c("service","sublayers")],P.prototype,"readSublayers",null),s([u({type:O,nonNullable:!0,json:{write:!0}})],P.prototype,"filters",void 0),s([u({type:String,json:{write:!0}})],P.prototype,"activeFilterId",void 0),s([u({readOnly:!0,type:C})],P.prototype,"summaryStatistics",void 0),s([c("summaryStatistics",["statisticsHRef"])],P.prototype,"readSummaryStatistics",null),s([u({type:[String],json:{read:!1}})],P.prototype,"outFields",void 0),s([u(x)],P.prototype,"fullExtent",void 0),s([u({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),s([u(F(y))],P.prototype,"spatialReference",void 0),s([u(R)],P.prototype,"elevationInfo",null),s([u({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),s([u()],P.prototype,"associatedFeatureServiceItem",void 0),P=s([j("esri.layers.BuildingSceneLayer")],P);const D=P;export{D as default};
