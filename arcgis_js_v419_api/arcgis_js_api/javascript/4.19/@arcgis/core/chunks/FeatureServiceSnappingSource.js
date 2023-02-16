/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{i as t,b as r}from"./Logger.js";import"./string.js";import{f as i,j as s}from"./metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import p,{r as n}from"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{whenOrAbort as l}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"./asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./shared.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import m from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import{a as u}from"./vec3.js";import"./mathUtils.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import d from"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import{f as j}from"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import"../Graphic.js";import c from"../core/Handles.js";import"../layers/Layer.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"./colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"./sizeVariableUtils.js";import"./unitUtils.js";import"./lengthUtils.js";import"./visualVariableUtils.js";import"./VisualVariablesMixin.js";import"./symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./devEnvironmentUtils.js";import"./styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"./normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./ItemCache.js";import"./utils3.js";import"../symbols/support/cimSymbolUtils.js";import"./utils2.js";import"./LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"./timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"./MultiOriginJSONSupport.js";import{init as y}from"../core/watchUtils.js";import"./arcgisLayerUrl.js";import"./fieldType.js";import"../geometry/HeightModelInfo.js";import"./mat4.js";import"./pe.js";import{t as f,k as h}from"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"./OperationalLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./commonProperties2.js";import{d as g}from"./Scheduler.js";import{HandleOwnerMixin as v,HandleOwner as w}from"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"../form/ExpressionInfo.js";import"../form/elements/FieldElement.js";import"../form/support/elements.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/support/inputs.js";import"../form/elements/GroupElement.js";import"../form/FormTemplate.js";import"../geometry/support/geodesicUtils.js";import"../geometry/Circle.js";import{c as b}from"./vec4f64.js";import"./quatf64.js";import"./mat3.js";import"./BufferView.js";import"./vec2.js";import"./vec4.js";import"./quat.js";import"./domUtils.js";import"./widgetUtils.js";import"./projector.js";import"./accessibleHandler.js";import"./messageBundle.js";import"../widgets/support/widget.js";import"./vmEvent.js";import"./index.js";import"../widgets/Widget.js";import S from"../layers/support/LOD.js";import I from"../layers/support/TileInfo.js";import"./zscale.js";import"./queryZScale.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"../layers/FeatureLayer.js";import"./ArcGISService.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./PortalLayer.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"../layers/support/TimeInfo.js";import"./TemporalLayer.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"./labelUtils.js";import"../layers/support/LabelClass.js";import"./defaultsJSON.js";import"./defaults.js";import"./featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./DataLayerSource.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import{W as O}from"./WorkerHandle.js";import"./GraphicsCollection.js";import"../layers/GraphicsLayer.js";import"./utils4.js";import"../tasks/Task.js";import"../rest/query/support/AttachmentInfo.js";import"./query.js";import"./executeRelationshipQuery.js";import"./pbf.js";import"./OptimizedFeatureSet.js";import"./pbfQueryUtils.js";import"./featureConversionUtils.js";import"../tasks/QueryTask.js";import"./aaBoundingBox.js";import"./vec4f32.js";import"./quantizationUtils.js";import"./mat2d.js";import"../symbols/support/symbolUtils.js";import"./byteSizeEstimations.js";import"./dehydratedFeatureComparison.js";import"./dehydratedFeatures.js";import"./ElevationProvider.js";import"./interactiveToolUtils.js";import"./throttle.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../widgets/Feature/FeatureViewModel.js";import"../widgets/Feature.js";import"./AnchorElementViewModel.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../widgets/Popup.js";import"./Queue.js";import"./InputManager.js";import{s as k}from"./layerViewUtils.js";import"./actions.js";import"../widgets/Popup/PopupViewModel.js";import"./GoTo.js";import"./MapUtils.js";import"./screenUtils2.js";import"./mat2df64.js";import"./vec2f64.js";import"./requestImageUtils.js";import"./VertexColor.glsl.js";import"./Program.js";import"./FramebufferObject.js";import"./renderState.js";import"./glUtil.js";import"./InterleavedLayout.js";import"./mat4f32.js";import"./vec3f32.js";import"./stack.js";import{b as U}from"./geometryUtils.js";import"./ColorMaterial.js";import"./Util.js";import"./glUtil3D.js";import"./Object3D.js";import"./VertexArrayObject.js";import"./sdfPrimitives.js";import"./PiUtils.glsl.js";import"./GLMaterialTexture.js";import"./VerticalOffset.glsl.js";import"./RibbonLineMaterial.js";import"./Texture.js";import"./CameraSpace.glsl.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./Settings.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/draw/DrawAction.js";import"./elevationInfoUtils.js";import"./AppendVertex.js";import"./Keys.js";import"../views/draw/MultipointDrawAction.js";import"./InteractiveToolBase.js";import"./DrawTool.js";import"./VisualElement.js";import"./LaserlineVisualElement.js";import"./Object3DVisualElement.js";import"./RightAngleQuadVisualElement.js";import"../views/draw/PointDrawAction.js";import"../views/draw/PolygonDrawAction.js";import"../views/draw/PolylineDrawAction.js";import"../views/draw/SegmentDrawAction.js";import"../views/draw/Draw.js";import"../widgets/Sketch/SketchViewModel.js";import{T as C}from"./TileTreeDebugger.js";import{c as T}from"./queryEngineUtils.js";function P(e,t){return U.fromAABoundingRect(t.extent,H),U.distance(H,u(D,e.x,e.y,0))}const H=U.create(),D=b();let M=class extends(v(p)){constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,r=t(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort(((e,t)=>P(r,e)-P(r,t))),e}scaleEnabled(){return k(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||r(this.tileInfo))return[];if(!this.scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,s=[];for(const{row:r,colFrom:o,colTo:p}of e)for(let e=o;e<=p;e++){const o={id:null,level:i,row:r,col:t.normalizeCol(e)};this.tileInfo.updateTileInfo(o),s.push(o)}return s}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featuresTilingScheme)?void 0:t.tileInfo)?e:null}get tileSize(){return t(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.handles.add(this.watch("view.state.viewpoint",(()=>this.notifyChange("tilesCoveringView")),!0))}};e([o({readOnly:!0})],M.prototype,"tiles",null),e([o({readOnly:!0})],M.prototype,"scaleEnabled",null),e([o({readOnly:!0})],M.prototype,"tilesCoveringView",null),e([o({readOnly:!0})],M.prototype,"tileInfo",null),e([o({readOnly:!0})],M.prototype,"tileSize",null),e([o({constructOnly:!0})],M.prototype,"view",void 0),e([o({constructOnly:!0})],M.prototype,"layer",void 0),e([o()],M.prototype,"pointOfInterest",void 0),M=e([a("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],M);let R=class extends w{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,r=this.effectivePointOfInterest;if(t(r)){const t=e.map((e=>P(r,e)));for(let i=1;i<t.length;i++)if(t[i-1]>t[i])return e.sort(((e,t)=>P(r,e)-P(r,t))),e.slice()}return e}get tilesCoveringView(){var e,t;return this.filterTiles(null==(e=this.view.featureTiles)||null==(t=e.tiles)?void 0:t.toArray()).map(V)}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tilingScheme.toTileInfo())?e:null}get tileSize(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tileSize)?e:256}get effectivePointOfInterest(){var e;const r=this.pointOfInterest;return t(r)?r:null==(e=this.view.pointsOfInterest)?void 0:e.focus.location}initialize(){this.handles.add(y(this.view,"featureTiles",(e=>{this.handles.remove(E),e&&this.handles.add(e.addClient(),E)})))}filterTiles(e){if(r(e))return[];return e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>F&&2===e.measures.visibility))}};function V({lij:[e,t,r],extent:i}){return{id:`${e}/${t}/${r}`,level:e,row:t,col:r,extent:i}}e([o({readOnly:!0})],R.prototype,"tiles",null),e([o({readOnly:!0})],R.prototype,"tilesCoveringView",null),e([o({readOnly:!0})],R.prototype,"tileInfo",null),e([o({readOnly:!0})],R.prototype,"tileSize",null),e([o({constructOnly:!0})],R.prototype,"view",void 0),e([o()],R.prototype,"pointOfInterest",void 0),e([o()],R.prototype,"effectivePointOfInterest",null),R=e([a("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],R);const F=50,E="feature-tiles";let L=class extends C{constructor(e){super(e),this.handles=new c}initialize(){const e=setInterval((()=>this.fetchDebugInfo()),2e3);this.handles.add(i((()=>clearInterval(e))))}destroy(){this.handles.destroy()}getTiles(){if(!this.debugInfo)return[];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this.debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state)}));const r=r=>{var i;const s=t.get(r),o=null!=(i=e.get(r))?i:"?";return s?`${s}:${o}\n${r}`:`store:${o}\n${r}`},i=new Map;return this.debugInfo.storedTiles.forEach((e=>{i.set(e.data.id,e.data)})),this.debugInfo.pendingTiles.forEach((e=>{i.set(e.data.id,e.data)})),Array.from(i.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:d.fromExtent(f(e.extent,this.view.spatialReference)),label:r(e.id)})))}fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this.debugInfo=e,this.update()}))}};e([o({constructOnly:!0})],L.prototype,"handle",void 0),L=e([a("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],L);let x=class extends w{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy()}initialize(){this.workerHandle=new A(this.scheduler),this.handles.add([this.workerHandle.on("notify-updating",(({updating:e})=>this.workerHandleUpdating=e)),this.workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const i=this.serviceInfoFromLayer(e.layer);if(r(i))return;const s={configuration:this.convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",s,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const r=this.convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",r,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,r){const i={distance:e.distance,point:e.coordinateHelper.toPoint(e.point,new m).toJSON(),types:e.types,filter:t(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(i,r)}async updateTiles(e,r){const i={tiles:e.tiles,tileInfo:t(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.workerHandle.invokeMethod("updateTiles",i,r),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},r))}async applyEdits(e,t){var r,i,s,o,p,n;const a=this.editId++,m={id:a};await this.workerHandle.invokeMethod("beginApplyEdits",m,t),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));const u=await l(e.result,t),d={id:a,edits:{addedFeatures:null!=(r=null==(i=u.addedFeatures)?void 0:i.map((({objectId:e})=>e)))?r:[],deletedFeatures:null!=(s=null==(o=u.deletedFeatures)?void 0:o.map((({objectId:e})=>e)))?s:[],updatedFeatures:null!=(p=null==(n=u.updatedFeatures)?void 0:n.map((({objectId:e})=>e)))?p:[]}};await this.workerHandle.invokeMethod("endApplyEdits",d,t),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}convertConfiguration(e){return{filter:t(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}serviceInfoFromLayer(e){var t;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map((e=>e.toJSON())),geometryType:j.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null==(t=e.timeInfo)?void 0:t.toJSON()}}};e([o({constructOnly:!0})],x.prototype,"scheduler",void 0),e([o({readOnly:!0})],x.prototype,"updating",null),e([o({readOnly:!0})],x.prototype,"availability",void 0),e([o()],x.prototype,"workerHandleUpdating",void 0),x=e([a("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],x);class A extends O{constructor(e){super("FeatureServiceSnappingSourceWorker","fetchCandidates",e,{strategy:"dedicated"})}getTransferList(){return[]}}let z=class extends p{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[{id:"0/0/0",level:0,row:0,col:0,extent:h(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new I({origin:new m({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new S({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};e([o({readOnly:!0})],z.prototype,"tiles",null),e([o({readOnly:!0})],z.prototype,"tileInfo",null),e([o({readOnly:!0})],z.prototype,"tileSize",null),e([o({constructOnly:!0})],z.prototype,"layer",void 0),e([o()],z.prototype,"pointOfInterest",void 0),z=e([a("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],z);let N=class extends(v(p)){constructor(e){super(e)}get updateTilesParameters(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){if(t(this.view))switch(this.view.type){case"2d":this.tilesOfInterest=new M({view:this.view,layer:this.layer});break;case"3d":this.tilesOfInterest=new R({view:this.view})}else this.tilesOfInterest=new z({layer:this.layer});if(this.workerHandle=new x({scheduler:t(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),this.handles.add([s(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add(this,"updateTilesParameters",(()=>this.workerHandle.updateTiles(this.updateTilesParameters,null)),2),this.handles.add([n((()=>this.configuration),(e=>this.workerHandle.configure(e,null)))]),t(this.view)){const e=this.view;this.handles.add(y(g,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",(t=>{t&&!this.debug?(this.debug=new L({view:e,handle:this.workerHandle}),this.handles.add(s(this.debug),"debug")):!t&&this.debug&&this.handles.remove("debug")})))}this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this.workerHandle.applyEdits(e,null)})))}refresh(){this.workerHandle.refresh(null)}async fetchCandidates(e,t){this.tilesOfInterest.pointOfInterest=e.coordinateHelper.toPoint(e.point,new m);const{candidates:r}=await this.workerHandle.fetchCandidates({...e,filter:null},t);return{candidates:r.map((t=>T(t,e.coordinateHelper)))}}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};e([o({constructOnly:!0})],N.prototype,"spatialReference",void 0),e([o({constructOnly:!0})],N.prototype,"layerSource",void 0),e([o({constructOnly:!0})],N.prototype,"view",void 0),e([o()],N.prototype,"tilesOfInterest",void 0),e([o({readOnly:!0})],N.prototype,"updateTilesParameters",null),e([o({readOnly:!0})],N.prototype,"updating",null),e([o({readOnly:!0})],N.prototype,"configuration",null),e([o({readOnly:!0})],N.prototype,"availability",null),N=e([a("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],N);export{N as FeatureServiceSnappingSource};
