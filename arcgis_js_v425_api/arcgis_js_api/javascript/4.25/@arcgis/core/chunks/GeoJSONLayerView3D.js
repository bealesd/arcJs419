/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{F as o}from"./FeatureLayerViewBase3D.js";import"./Logger.js";import"../config.js";import"./object.js";import"./maybe.js";import"./string.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"./tracking.js";import"../core/reactiveUtils.js";import"../core/promiseUtils.js";import"./watch.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"./hydratedFeatures.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./dehydratedFeatures.js";import"./byteSizeEstimations.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FeatureLikeLayerView3D.js";import"./asyncUtils.js";import"./WatchUpdatingTracking.js";import"./arcgisLayerUrl.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils4.js";import"./utils5.js";import"../rest/support/ProjectParameters.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./ViewingMode.js";import"./dehydratedFeatureComparison.js";import"../views/SceneView.js";import"../Camera.js";import"./Cyclical.js";import"../Viewpoint.js";import"./domUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./assets.js";import"../intl.js";import"./messages.js";import"./GraphicsCollection.js";import"../core/HandleOwner.js";import"../geometry/HeightModelInfo.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../geometry/projection.js";import"./mat4.js";import"./pe.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./boundedPlane.js";import"./ray.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./vec4f64.js";import"./vector.js";import"./lineSegment.js";import"./plane.js";import"./mathUtils2.js";import"./RenderCoordsHelper.js";import"./sphere.js";import"./ElevationProvider.js";import"./spatialReferenceSupport.js";import"./scaleUtils.js";import"../widgets/Popup/PopupViewModel.js";import"../layers/Layer.js";import"../symbols/support/symbolUtils.js";import"./utils6.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./ItemCache.js";import"./MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./colorUtils2.js";import"./projector.js";import"./widgetUtils.js";import"./mat2df32.js";import"./mat2d.js";import"./jsxFactory.js";import"./jsxWidgetSupport.js";import"./InputManager.js";import"./ObservableValue.js";import"./layerViewUtils.js";import"../widgets/Feature/FeatureViewModel.js";import"./throttle.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./executeQueryJSON.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"../rest/support/FeatureSet.js";import"./featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils2.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"./editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"../layers/mixins/BlendLayer.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureLayerBase.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils.js";import"../support/popupUtils.js";import"./actions.js";import"./AnchorElementViewModel.js";import"../widgets/support/GoTo.js";import"./layerUtils.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"./writeUtils.js";import"../Ground.js";import"./debugFlags.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"./basemapUtils.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./Scheduler.js";import"./debugFlags2.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces3.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./heightModelInfoUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"../widgets/Popup.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"./messageBundle.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"./themeUtils.js";import"./uriUtils.js";import"./utils15.js";import"./numberUtils.js";import"./chartUtils.js";import"./Spinner.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"./TileKey.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"./context-util.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./vec2.js";import"./SSAOHelper.js";import"./bufferWriterUtils.js";import"./basicInterfaces.js";import"./Util2.js";import"./Material.js";import"./VertexAttribute.js";import"./utils20.js";import"./doublePrecisionUtils.js";import"./triangle.js";import"./Indices.js";import"./ShaderTechniqueConfiguration.js";import"./RenderSlot.js";import"./vec3f32.js";import"./requestImageUtils.js";import"./enums3.js";import"./Texture.js";import"./FramebufferObject.js";import"./VertexElementDescriptor.js";import"./BufferView.js";import"./OrderIndependentTransparency.js";import"./CameraSpace.glsl.js";import"./line2.js";import"./DefaultBufferWriter.js";import"./Octree.js";import"./frustum.js";import"./InterleavedLayout.js";import"./types.js";import"./floatRGBA.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"./MultipassGeometryTest.glsl.js";import"./graphicUtils.js";import"./interfaces4.js";import"./vec2f32.js";import"./NestedMap.js";import"./Camera.js";import"./Intersector.js";import"./verticalOffsetUtils.js";import"./mat3.js";import"./quat.js";import"./glUtil.js";import"./OutputHighlight.glsl.js";import"./GeometryUtil.js";import"./HUDMaterial.js";import"./VisualVariables.glsl.js";import"./GLTextureMaterial.js";import"./axisAngleDegrees.js";import"./earthUtils.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./ElevationQuery.js";import"./edgeUtils.js";import"./vec32.js";import"./SnappingCandidate.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./mat3f32.js";import"./symbolColorUtils.js";import"./VertexColor.glsl.js";import"./callExpressionWithFeature.js";import"./line.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./ColorMaterial.js";import"./viewpointUtils.js";import"./ray2.js";import"./resources.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./vec4f32.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./terrainUtils.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./WorkerHandle.js";import"./VectorTile.js";import"./enums2.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey2.js";import"./ElevationSamplerData.js";import"./DefaultVertexAttributeLayouts.js";import"../views/2d/ViewState.js";import"./mat2df64.js";import"./I3SUtil.js";import"./I3SBinaryReader.js";import"./edgeProcessing.js";import"./EdgeWorkerHandle.js";import"./workerHelper.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";import"./queryForSymbologySnapping.js";import"./elevationInfoUtils.js";import"./hash.js";import"./Graphics3DObjectStates.js";import"./rendererConversion.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./PooledRBush.js";import"./quickselect.js";import"./floorFilterUtils.js";import"./QueryEngine.js";import"./QueryEngineResult.js";import"../core/sql/WhereClause.js";import"./utils13.js";import"./generateRendererUtils.js";import"./projectionSupport.js";import"./json.js";import"./utils21.js";import"./QueryEngineCapabilities.js";import"./timeSupport.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./heatmapTextureUtils.js";import"./projectExtentUtils.js";import"./LayerView3D.js";import"./EventedSet.js";import"./FeatureLayerView.js";import"./popupUtils.js";import"../views/layers/LayerView.js";import"./RefreshableLayerView.js";let e=class extends o{constructor(){super(...arguments),this.type="geojson-3d"}};t([r()],e.prototype,"layer",void 0),e=t([s("esri.views.3d.layers.GeoJSONLayerView3D")],e);const i=e;export{i as default};
