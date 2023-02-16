/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{L as e}from"../chunks/Logger.js";import{u as t,i,g as o,a as r}from"../chunks/maybe.js";import{watch as n,initial as p,syncAndInitial as l,when as m}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import c from"./Widget.js";import h,{S as d,O as j}from"./Daylight/DaylightViewModel.js";import k from"../core/Accessor.js";import{e as y}from"../core/promiseUtils.js";import g from"./Slider.js";import{P as b}from"../chunks/Popover.js";import"../chunks/widgetUtils.js";import{t as w,a as v}from"../chunks/jsxFactory.js";import f from"./support/DatePicker.js";import{H as S}from"../chunks/Heading.js";import{g as _}from"../chunks/timeWidgetUtils.js";import{m as C}from"../chunks/messageBundle.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/handleUtils.js";import"../chunks/watch.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Error.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";import"../chunks/metadata.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Handles.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";import"../chunks/timeUtils.js";import"../views/SceneView.js";import"../Camera.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../Viewpoint.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/GraphicsCollection.js";import"../geometry/HeightModelInfo.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../geometry/projection.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/boundedPlane.js";import"../chunks/ray.js";import"../chunks/byteSizeEstimations.js";import"../chunks/mat3f64.js";import"../chunks/mat4f64.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/vec4f64.js";import"../chunks/vector.js";import"../chunks/lineSegment.js";import"../chunks/plane.js";import"../chunks/mathUtils2.js";import"../chunks/RenderCoordsHelper.js";import"../chunks/sphere.js";import"../chunks/ElevationProvider.js";import"../chunks/ViewingMode.js";import"../chunks/spatialReferenceSupport.js";import"../chunks/scaleUtils.js";import"./Popup/PopupViewModel.js";import"../layers/Layer.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils6.js";import"../chunks/asyncUtils.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/_commonjsHelpers.js";import"../chunks/ItemCache.js";import"../chunks/MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"../chunks/colorUtils2.js";import"../chunks/mat2df32.js";import"../chunks/mat2d.js";import"../chunks/InputManager.js";import"../chunks/ObservableValue.js";import"../chunks/layerViewUtils.js";import"./Feature/FeatureViewModel.js";import"../chunks/throttle.js";import"./Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/executeQueryJSON.js";import"../chunks/utils4.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils5.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../rest/support/FeatureSet.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../chunks/featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../chunks/editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"../layers/mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureLayerBase.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils.js";import"../support/popupUtils.js";import"../chunks/actions.js";import"../chunks/AnchorElementViewModel.js";import"./support/GoTo.js";import"../chunks/layerUtils.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"../chunks/loadAll.js";import"../chunks/writeUtils.js";import"../Ground.js";import"../chunks/debugFlags.js";import"../chunks/CollectionFlattener.js";import"../chunks/editableLayers.js";import"../chunks/basemapUtils.js";import"../chunks/collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"../chunks/Scheduler.js";import"../chunks/debugFlags2.js";import"../chunks/ViewEvents.js";import"../chunks/IViewEvents.js";import"../chunks/interfaces3.js";import"../chunks/screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../chunks/heightModelInfoUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"./Popup.js";import"./Feature.js";import"./Attachments.js";import"../chunks/unitFormatUtils.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/vmEvent.js";import"../chunks/themeUtils.js";import"../chunks/uriUtils.js";import"../chunks/utils15.js";import"../chunks/numberUtils.js";import"../chunks/chartUtils.js";import"../chunks/Spinner.js";import"./Spinner/SpinnerViewModel.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"../chunks/TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"../chunks/TileKey.js";import"../chunks/WebGLRequirements.js";import"../chunks/capabilities2.js";import"../chunks/context-util.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"../chunks/weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../chunks/lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"../chunks/vec2.js";import"../chunks/SSAOHelper.js";import"../chunks/bufferWriterUtils.js";import"../chunks/basicInterfaces.js";import"../chunks/Util2.js";import"../chunks/Material.js";import"../chunks/VertexAttribute.js";import"../chunks/utils20.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/triangle.js";import"../chunks/Indices.js";import"../chunks/ShaderTechniqueConfiguration.js";import"../chunks/RenderSlot.js";import"../chunks/vec3f32.js";import"../chunks/requestImageUtils.js";import"../chunks/enums3.js";import"../chunks/Texture.js";import"../chunks/FramebufferObject.js";import"../chunks/VertexElementDescriptor.js";import"../chunks/BufferView.js";import"../chunks/OrderIndependentTransparency.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/line2.js";import"../chunks/DefaultBufferWriter.js";import"../chunks/Octree.js";import"../chunks/frustum.js";import"../chunks/InterleavedLayout.js";import"../chunks/types.js";import"../chunks/floatRGBA.js";import"../chunks/triangulationUtils.js";import"../chunks/earcut.js";import"../chunks/deduplicate.js";import"../chunks/MultipassGeometryTest.glsl.js";import"../chunks/graphicUtils.js";import"../chunks/dehydratedFeatures.js";import"../chunks/quantizationUtils.js";import"../chunks/hydratedFeatures.js";import"../chunks/interfaces4.js";import"../chunks/vec2f32.js";import"../chunks/NestedMap.js";import"../chunks/Camera.js";import"../chunks/Intersector.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/mat3.js";import"../chunks/quat.js";import"../chunks/glUtil.js";import"../chunks/OutputHighlight.glsl.js";import"../chunks/GeometryUtil.js";import"../chunks/HUDMaterial.js";import"../chunks/VisualVariables.glsl.js";import"../chunks/GLTextureMaterial.js";import"../chunks/axisAngleDegrees.js";import"../chunks/earthUtils.js";import"../chunks/ShadowCastVisualizeTechniqueConfiguration.js";import"../chunks/ElevationQuery.js";import"../chunks/edgeUtils.js";import"../chunks/vec32.js";import"../chunks/SnappingCandidate.js";import"../chunks/objectResourceUtils.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/DefaultMaterial_COLOR_GAMMA.js";import"../chunks/Version.js";import"../chunks/mat3f32.js";import"../chunks/symbolColorUtils.js";import"../chunks/VertexColor.glsl.js";import"../chunks/callExpressionWithFeature.js";import"../chunks/line.js";import"../chunks/lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"../chunks/imageUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../chunks/projection.js";import"../chunks/NativeLineMaterial.js";import"../chunks/ColorMaterial.js";import"../chunks/viewpointUtils.js";import"../chunks/ray2.js";import"../chunks/resources.js";import"../chunks/labelFormatUtils.js";import"../chunks/FeatureTileDescriptor3D.js";import"../chunks/vec4f32.js";import"../chunks/geometryServiceUtils.js";import"../chunks/project.js";import"../rest/support/ProjectParameters.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"../chunks/terrainUtils.js";import"../chunks/ElevationQueryTileCache.js";import"../chunks/LercDecoder.js";import"../chunks/WorkerHandle.js";import"../chunks/VectorTile.js";import"../chunks/enums2.js";import"../chunks/config.js";import"../chunks/TiledDisplayObject.js";import"../chunks/DisplayObject.js";import"../chunks/TileKey2.js";import"../chunks/ElevationSamplerData.js";import"../chunks/DefaultVertexAttributeLayouts.js";import"../views/2d/ViewState.js";import"../chunks/mat2df64.js";import"../chunks/I3SUtil.js";import"../chunks/I3SBinaryReader.js";import"../chunks/edgeProcessing.js";import"../chunks/EdgeWorkerHandle.js";import"../chunks/workerHelper.js";import"../chunks/RenderingContext.js";import"../chunks/ProgramCache.js";import"../chunks/Program.js";import"../chunks/intersectorUtilsConversions.js";import"../chunks/hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"./Attribution.js";import"./Attribution/AttributionViewModel.js";import"./Compass.js";import"./Compass/CompassViewModel.js";import"./NavigationToggle.js";import"./NavigationToggle/NavigationToggleViewModel.js";import"./Zoom.js";import"./Zoom/ZoomViewModel.js";import"./Slider/SliderViewModel.js";import"./support/DatePickerViewModel.js";import"./support/DateTimeElementViewModel.js";import"../chunks/datetime.js";const M="esri-daylight",D=`${M}__container`,U={base:M,widgetIcon:"esri-icon-environment-settings",widget:"esri-widget",select:"esri-select",pause:"esri-icon-pause",play:"esri-icon-play",shadowOff:"esri-slider--shadow-off",shadowOn:"esri-slider--shadow-on",sliderDateOn:"esri-slider--date-on",sliderDateOff:"esri-slider--date-off",sliderAmPmOn:"esri-slider--ampm-on",sliderAlignLeft:"esri-slider--align-left",sliderAlignRight:"esri-slider--align-right",primaryTick:"primary-tick",primaryTickAmPm:"primary-tick__ampm",primaryTickLabel:"primary-tick__label",secondaryTick:"secondary-tick",dayContainer:`${D} ${M}__day-container`,dateContainer:`${D} ${M}__date-container`,containerDisabled:`${D}--disabled`,playPauseButton:`${M}__play-pause-button`,seasonPicker:`${M}__season-picker`,seasonPickerDisabled:`${M}__season-picker--disabled`,panelError:`${M}__panel--error`,sunLightingCheckbox:`${M}__sun-lighting-checkbox`,shadowsCheckbox:`${M}__shadows-checkbox`};let P=class extends k{constructor(){super(...arguments),this.header=!0,this.playButtons=!0,this.datePicker=!0,this.timezone=!0,this.sunLightingToggle=!0,this.shadowsToggle=!0}};s([a({type:Boolean,nonNullable:!0})],P.prototype,"header",void 0),s([a({type:Boolean,nonNullable:!0})],P.prototype,"playButtons",void 0),s([a({type:Boolean,nonNullable:!0})],P.prototype,"datePicker",void 0),s([a({type:Boolean,nonNullable:!0})],P.prototype,"timezone",void 0),s([a({type:Boolean,nonNullable:!0})],P.prototype,"sunLightingToggle",void 0),s([a({type:Boolean,nonNullable:!0})],P.prototype,"shadowsToggle",void 0),P=s([u("esri.widgets.Daylight.VisibleElements")],P);const T=P;let I=class extends g{constructor(s,e){super(s,e),this.viewModel=new d,this.buttonTooltip="",this.showDropDown=!0,this._dropdownAnchor=null,this._dropdownElement=null,this._popover=new b({owner:this,placement:"bottom-start",anchorElement:()=>t(this._dropdownAnchor),renderContentFunction:()=>this._renderPopover()})}initialize(){this.addHandles(n((()=>this.viewModel.isDropdownOpen),(s=>{this._popover.open=s}),p))}destroy(){this._popover.destroy()}get items(){return this.viewModel.items}set items(s){this.viewModel.items=s}get currentIndex(){return this.viewModel.currentIndex}set currentIndex(s){this.viewModel.currentIndex=s}get currentItem(){return this.viewModel.currentItem}get isDropdownOpen(){return this.viewModel.isDropdownOpen}renderThumbLabel(s){const e={"esri-slider-with-dropdown__box--drop-down-on":this.showDropDown,"esri-slider-with-dropdown__box--drop-down-off":!this.showDropDown};return w("div",{class:this.classes("esri-slider-with-dropdown__box","esri-slider__label",e)},super.renderThumbLabel(s),this.showDropDown&&w("div",{bind:this,afterCreate:this._onDropdownAnchorAfterCreate,class:"esri-slider-with-dropdown__dropdown-root"},w("button",{class:this.classes("esri-interactive"," esri-widget__anchor esri-slider-with-dropdown__anchor",this.isDropdownOpen?"esri-slider-with-dropdown__anchor--open":"esri-slider-with-dropdown__anchor--closed"),bind:this,disabled:this.disabled,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.isDropdownOpen.toString(),"aria-haspopup":"listbox",type:"button"},this.currentItem?this.currentItem.name+" ":"")))}_onDropdownAnchorAfterCreate(s){this._dropdownAnchor=s}_renderPopover(){return w("ol",{role:"listbox",afterCreate:this._onDropdownAfterCreate,"aria-label":this.buttonTooltip,bind:this,class:this.classes("esri-slider-with-dropdown__list"),tabindex:"-1",onkeydown:this._onDropdownKeyDown,onfocusout:this._onDropdownFocusOut,onpointerdown:this._killEvent},this.items.map(((s,e)=>w("li",{class:e===this.currentIndex?this.classes("esri-interactive","esri-slider-with-dropdown__list-item","esri-slider-with-dropdown__list-item--selected"):this.classes("esri-interactive","esri-slider-with-dropdown__list-item"),bind:this,onclick:this._onDropdownItemClick,"data-result":e,"aria-label":s.label.join(" "),role:"option","aria-selected":(e===this.currentIndex).toString(),onkeydown:this._onLiKeyDown,tabindex:"0"},s.label.map((s=>w("span",{bind:this},s)))))))}_onDropdownAfterCreate(s){this._dropdownElement=s;const e=s.querySelector(".esri-slider-with-dropdown__list-item--selected")??s.firstChild;i(e)&&e instanceof HTMLElement&&(e.scrollIntoView(),e.focus())}_onAnchorClick(){return!this.disabled&&(this.viewModel.toggle(),!0)}_onDropdownItemClick(s){const e=s.currentTarget;this.viewModel.selectItem(e["data-result"])}_onDropdownFocusOut(s){let e=s.relatedTarget;null===e&&(e=document.activeElement),i(this._dropdownElement)&&!this._dropdownElement.contains(e)&&i(this._dropdownAnchor)&&!this._dropdownAnchor.contains(e)&&(this.viewModel.isDropdownOpen=!1)}_killEvent(s){return s.stopPropagation(),!0}_onDropdownKeyDown(s){s.stopPropagation(),"Escape"===y(s)&&(this.viewModel.isDropdownOpen=!1)}_onLiKeyDown(s){const e=s.target;switch(y(s)){case"ArrowUp":e.previousElementSibling&&e.previousElementSibling.focus();break;case"ArrowDown":e.nextElementSibling&&e.nextElementSibling.focus();break;case"Enter":e.click()}}};s([a()],I.prototype,"viewModel",void 0),s([a()],I.prototype,"buttonTooltip",void 0),s([a()],I.prototype,"showDropDown",void 0),s([a()],I.prototype,"items",null),s([a()],I.prototype,"currentIndex",null),s([a()],I.prototype,"currentItem",null),s([a()],I.prototype,"isDropdownOpen",null),I=s([u("esri.widgets.Daylight.SliderWithDropdown")],I);const x=I,L=/(.*)\s(.*)/;let O=class extends c{constructor(s,e){super(s,e),this.headingLevel=3,this.iconClass=U.widgetIcon,this.viewModel=new h,this.visibleElements=new T,this.dateOrSeason="date",this._timeSlider=new x({viewModel:this.viewModel.timeSliderViewModel,steps:this.timeSliderSteps,labelInputsEnabled:!1,visibleElements:{labels:!0},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:this._onPrimaryTickCreated.bind(this)},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:this._onSecondaryTickCreated.bind(this)}],items:[]}),this._datePicker=new f({viewModel:this.viewModel.datePickerViewModel,commitOnMonthChange:!0}),this._onPlayDayClick=()=>{this.viewModel.toggleDayPlaying()},this._onYearPlayClick=()=>{this.viewModel.toggleYearPlaying()},this._onSeasonChange=s=>{const e=s.target;this.viewModel.currentSeason=e.value},this._onSunLightingCheckboxChange=()=>{this.viewModel.toggleSunLightingEnabled()},this._onShadowCheckboxChange=()=>{this.viewModel.toggleDirectShadowsEnabled()}}get gmtOffsets(){return o(this.timezoneMessages,_)}get label(){return this.messages?.title??""}set label(s){this._overrideIfSome("label",s)}get playSpeedMultiplier(){return this.viewModel.playSpeedMultiplier}set playSpeedMultiplier(s){this.viewModel.playSpeedMultiplier=s}get timeSliderSteps(){return this._timeSlider?.steps??5}set timeSliderSteps(s){this._timeSlider.steps=s}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}get _useAmPm(){const s=this._timeSlider.viewModel.getLabelForValue(0,"tick");return L.test(s)}get _labelAlignmentClass(){const s=this.viewModel.timeSliderViewModel.values?.[0]??0,e=60*(this._useAmPm?4:3),t=60*(this._useAmPm?21:21.5);return s<e?U.sliderAlignLeft:s>t?U.sliderAlignRight:null}postInitialize(){this.viewModel.isSupported&&this.addHandles([n((()=>this.viewModel.datePickerViewModel),(s=>this._datePicker.viewModel=s),l),n((()=>this.viewModel.timeSliderViewModel),(s=>this._timeSlider.viewModel=s),l),n((()=>this.timezoneMessages.chooseTimezone),(s=>this._timeSlider.buttonTooltip=s),l),n((()=>this.visibleElements?.timezone),(s=>this._timeSlider.showDropDown=s),l),n((()=>!this.viewModel.sunLightingEnabled),(s=>{this._datePicker.disabled=s,this._timeSlider.disabled=s}),l),m((()=>this.gmtOffsets),(s=>{this._timeSlider.items=s.map((s=>({utcOffset:s.utcOffset,name:s.short,label:[s.shortWithUTC,s.long]})))}),l),n((()=>[this.viewModel.utcOffset,this.gmtOffsets]),(()=>this._onUTCOffsetChange()),l)])}destroy(){this._datePicker.destroy(),this._timeSlider.destroy()}render(){const{messages:s,viewModel:e,visibleElements:t}=this,i=e.isSupported;return w("div",{class:this.classes(U.base,U.widget)},i?w(v,null,t.header&&w(S,{level:this.headingLevel},s.title),this._renderTimeOptions(),t.datePicker&&this._renderDateOrSeason(),t.sunLightingToggle&&this._renderSunLightingToggle(),t.shadowsToggle&&this._renderShadowsToggle()):w("div",{key:"unsupported",class:U.panelError},w("p",null,s.unsupported)))}loadDependencies(){return Promise.all([import("../chunks/calcite-button.js"),import("../chunks/calcite-checkbox.js"),import("../chunks/calcite-label.js")])}_renderTimeOptions(){const{viewModel:s,visibleElements:e,messages:t}=this,{directShadowsEnabled:i,dayPlaying:o}=s,r=!s.sunLightingEnabled;return w("div",{class:this.classes(U.dayContainer,this._labelAlignmentClass,{[U.shadowOn]:i,[U.shadowOff]:!i,[U.sliderDateOn]:e.datePicker,[U.sliderDateOff]:!e.datePicker,[U.sliderAmPmOn]:this._useAmPm,[U.containerDisabled]:r}),key:"daylight-time-options"},this._timeSlider.render(),e.playButtons&&this._renderPlayPauseButton({playing:o,disabled:r,label:t.playDay,onClick:this._onPlayDayClick}))}_renderDateOptions(){const{viewModel:s,visibleElements:e,messages:t}=this,{yearPlaying:i}=s,o=!s.sunLightingEnabled;return w("div",{key:"daylight-date-options",class:this.classes(U.dateContainer,o&&U.containerDisabled)},this._datePicker.render(),e.playButtons&&this._renderPlayPauseButton({playing:i,disabled:o,label:t.playYear,onClick:this._onYearPlayClick}))}_renderPlayPauseButton({playing:s,disabled:e,label:t,onClick:i}){return w("calcite-button",{appearance:"solid",class:U.playPauseButton,disabled:e,"icon-start":s?"pause-f":"play-f",label:t,round:!0,title:t,type:"button",onclick:i})}_renderSeasonOptions(){const{messages:s,viewModel:e}=this,t=!e.sunLightingEnabled;return w("select",{class:this.classes(U.select,U.seasonPicker,t&&U.seasonPickerDisabled),disabled:t,value:e.currentSeason,"aria-label":s.season,onchange:this._onSeasonChange},j.map((e=>w("option",{value:e},s[e]))))}_renderDateOrSeason(){return"date"===this.dateOrSeason?this._renderDateOptions():this._renderSeasonOptions()}_renderSunLightingToggle(){const s=this.messages?.sunLightingToggle;return w("calcite-label",{key:"date-time-toggle",layout:"inline",title:s?.tooltip,scale:"s"},w("calcite-checkbox",{class:U.sunLightingCheckbox,checked:this.viewModel.sunLightingEnabled,onCalciteCheckboxChange:this._onSunLightingCheckboxChange}),s?.label)}_renderShadowsToggle(){const s=this.messages.shadowsToggle;return w("calcite-label",{key:"shadow-toggle",layout:"inline",title:s?.tooltip,scale:"s"},w("calcite-checkbox",{class:U.shadowsCheckbox,checked:this.viewModel.directShadowsEnabled,onCalciteCheckboxChange:this._onShadowCheckboxChange}),s.label)}_onUTCOffsetChange(){const s=this.viewModel.utcOffset,e=this._timeSlider.currentItem?.utcOffset,t=this.gmtOffsets;if(r(t)||e===s)return;const i=t.findIndex((({utcOffset:e})=>e===s));i>-1&&(this._timeSlider.currentIndex=i)}_onPrimaryTickCreated(s,e,t){e.classList.add(...V,U.primaryTick),t.classList.add(...V,U.primaryTickLabel),t.onclick=e.onclick=this._makeGoToTime(s);const i=L.exec(t.textContent);i&&(t.innerHTML=`${i[1]}<br><div class=${U.primaryTickAmPm}>${i[2]}</div>`)}_onSecondaryTickCreated(s,e){e.classList.add(...V,U.secondaryTick),e.onclick=this._makeGoToTime(s)}_makeGoToTime(s){return()=>{this.viewModel.timeSliderPosition=s}}};s([a({readOnly:!0})],O.prototype,"gmtOffsets",null),s([a(),C("esri/widgets/Daylight/t9n/Daylight")],O.prototype,"messages",void 0),s([a(),C("esri/widgets/support/t9n/timezone")],O.prototype,"timezoneMessages",void 0),s([a()],O.prototype,"headingLevel",void 0),s([a()],O.prototype,"iconClass",void 0),s([a()],O.prototype,"label",null),s([a()],O.prototype,"playSpeedMultiplier",null),s([a()],O.prototype,"timeSliderSteps",null),s([a()],O.prototype,"view",null),s([a({type:h})],O.prototype,"viewModel",void 0),s([a({type:T,nonNullable:!0})],O.prototype,"visibleElements",void 0),s([a({cast:s=>"season"===s||"date"===s?s:(e.getLogger("esri.widgets.Daylight").warn(`"${s}" is not a valid option. Acceptable values are only "date" or "season". Defaulting to "date".`),"date")})],O.prototype,"dateOrSeason",void 0),s([a()],O.prototype,"_timeSlider",void 0),s([a()],O.prototype,"_useAmPm",null),s([a()],O.prototype,"_labelAlignmentClass",null),s([a()],O.prototype,"_datePicker",void 0),O=s([u("esri.widgets.Daylight")],O);const V=["esri-interactive","esri-widget__anchor"],E=O;export{E as default};
