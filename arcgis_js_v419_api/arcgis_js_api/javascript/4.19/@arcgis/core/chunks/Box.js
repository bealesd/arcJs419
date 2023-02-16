/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{i as e}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{E as i}from"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"./asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./shared.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import o from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./mathUtils.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import a from"../geometry/Multipoint.js";import p,{c as n}from"../geometry/Polygon.js";import{c as l}from"./extentUtils.js";import c from"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import m from"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import h from"../symbols/SimpleFillSymbol.js";import u from"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import j from"../Graphic.js";import d from"../core/Handles.js";import"../layers/Layer.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"./colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"./sizeVariableUtils.js";import"./unitUtils.js";import"./lengthUtils.js";import"./visualVariableUtils.js";import"./VisualVariablesMixin.js";import"./symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./devEnvironmentUtils.js";import"./styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"./normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./ItemCache.js";import"./utils3.js";import"../symbols/support/cimSymbolUtils.js";import"./utils2.js";import"./LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"./timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"./MultiOriginJSONSupport.js";import{whenOnce as y,pausable as g}from"../core/watchUtils.js";import"./arcgisLayerUrl.js";import"./fieldType.js";import"../geometry/HeightModelInfo.js";import"./mat4.js";import"./pe.js";import{c as f}from"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"./OperationalLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./commonProperties2.js";import"./Scheduler.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"../form/ExpressionInfo.js";import"../form/elements/FieldElement.js";import"../form/support/elements.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/support/inputs.js";import"../form/elements/GroupElement.js";import"../form/FormTemplate.js";import"../geometry/support/geodesicUtils.js";import"../geometry/Circle.js";import"./vec4f64.js";import"./quatf64.js";import"./mat3.js";import"./BufferView.js";import"./vec2.js";import"./vec4.js";import"./quat.js";import"./domUtils.js";import"./widgetUtils.js";import"./projector.js";import"./accessibleHandler.js";import"./messageBundle.js";import"../widgets/support/widget.js";import"./vmEvent.js";import"./index.js";import"../widgets/Widget.js";import"./zscale.js";import"./queryZScale.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"../layers/FeatureLayer.js";import"./ArcGISService.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./PortalLayer.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"../layers/support/TimeInfo.js";import"./TemporalLayer.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"./labelUtils.js";import"../layers/support/LabelClass.js";import"./defaultsJSON.js";import"./defaults.js";import"./featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./DataLayerSource.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import"./GraphicsCollection.js";import"../layers/GraphicsLayer.js";import"./utils4.js";import"../tasks/Task.js";import"../rest/query/support/AttachmentInfo.js";import"./query.js";import"./executeRelationshipQuery.js";import"./pbf.js";import"./OptimizedFeatureSet.js";import"./pbfQueryUtils.js";import"./featureConversionUtils.js";import"../tasks/QueryTask.js";import"./aaBoundingBox.js";import"./vec4f32.js";import"./quantizationUtils.js";import"./mat2d.js";import"../symbols/support/symbolUtils.js";import"./byteSizeEstimations.js";import"./dehydratedFeatureComparison.js";import"./dehydratedFeatures.js";import"./ElevationProvider.js";import"./interactiveToolUtils.js";import"./throttle.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../widgets/Feature/FeatureViewModel.js";import"../widgets/Feature.js";import"./AnchorElementViewModel.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../widgets/Popup.js";import"./Queue.js";import"./InputManager.js";import"./layerViewUtils.js";import"./actions.js";import"../widgets/Popup/PopupViewModel.js";import"./GoTo.js";import"./MapUtils.js";import"./screenUtils2.js";import"./mat2df64.js";import"./vec2f64.js";import"./requestImageUtils.js";import"./VertexColor.glsl.js";import"./Program.js";import"./FramebufferObject.js";import"./renderState.js";import"./glUtil.js";import"./InterleavedLayout.js";import"./mat4f32.js";import"./vec3f32.js";import"./stack.js";import"./geometryUtils.js";import"./ColorMaterial.js";import"./Util.js";import"./glUtil3D.js";import"./Object3D.js";import"./VertexArrayObject.js";import"./sdfPrimitives.js";import"./PiUtils.glsl.js";import"./GLMaterialTexture.js";import"./VerticalOffset.glsl.js";import"./RibbonLineMaterial.js";import"./Texture.js";import"./CameraSpace.glsl.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./Settings.js";import"../views/interactive/snapping/SnappingOptions.js";import{h as b}from"../views/draw/DrawAction.js";import"./elevationInfoUtils.js";import"./AppendVertex.js";import"./Keys.js";import"../views/draw/MultipointDrawAction.js";import{k as v,l as G,m as _,n as S}from"./InteractiveToolBase.js";import"./DrawTool.js";import"./VisualElement.js";import"./LaserlineVisualElement.js";import"./Object3DVisualElement.js";import"./RightAngleQuadVisualElement.js";import"../views/draw/PointDrawAction.js";import"../views/draw/PolygonDrawAction.js";import"../views/draw/PolylineDrawAction.js";import"../views/draw/SegmentDrawAction.js";import"../views/draw/Draw.js";import"./drapedUtils.js";import"./GraphicManipulator.js";import{b as w}from"../widgets/Sketch/SketchViewModel.js";import x from"./GraphicMover.js";function k(t){let e=0,r=0;const s=t.length;let i,o=t[r];for(r=0;r<s-1;r++)i=t[r+1],e+=(i[0]-o[0])*(i[1]+o[1]),o=i;return e>=0}function I(t,e,r,s){const i=[];for(const o of t){const t=o.slice(0);i.push(t);const a=e*(o[0]-s.x)-r*(o[1]-s.y)+s.x,p=r*(o[0]-s.x)+e*(o[1]-s.y)+s.y;t[0]=a,t[1]=p}return i}function R(t,e,r){const s=t.spatialReference,i=e*Math.PI/180,n=Math.cos(i),l=Math.sin(i);var m,h;"xmin"in t&&(r=null!=(m=r)?m:t.center,t=new p({spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}));if("paths"in t){var u;r=null!=(u=r)?u:t.extent.center;const e=[];for(const s of t.paths)e.push(I(s,n,l,r));return new c({spatialReference:s,paths:e})}if("rings"in t){var j;r=null!=(j=r)?j:t.extent.center;const e=[];for(const s of t.rings){const t=k(s),i=I(s,n,l,r);k(i)!==t&&i.reverse(),e.push(i)}return new p({spatialReference:s,rings:e})}if("x"in t){var d;r=null!=(d=r)?d:t;const e=new o({x:n*(t.x-r.x)-l*(t.y-r.y)+r.x,y:l*(t.x-r.x)+n*(t.y-r.y)+r.y,spatialReference:s});return null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}return"points"in t?(r=null!=(h=r)?h:t.extent.center,new a({points:I(t.points,n,l,r),spatialReference:s})):null}class M{constructor(t,e,r,s){this.graphics=t,this.mover=e,this.dx=r,this.dy=s,this.type="move-start"}}class C{constructor(t,e,r,s){this.graphics=t,this.mover=e,this.dx=r,this.dy=s,this.type="move"}}class U{constructor(t,e,r,s){this.graphics=t,this.mover=e,this.dx=r,this.dy=s,this.type="move-stop"}}class L{constructor(t,e,r){this.graphics=t,this.mover=e,this.angle=r,this.type="rotate-start"}}class E{constructor(t,e,r){this.graphics=t,this.mover=e,this.angle=r,this.type="rotate"}}class O{constructor(t,e,r){this.graphics=t,this.mover=e,this.angle=r,this.type="rotate-stop"}}class D{constructor(t,e,r,s){this.graphics=t,this.mover=e,this.xScale=r,this.yScale=s,this.type="scale-start"}}class V{constructor(t,e,r,s){this.graphics=t,this.mover=e,this.xScale=r,this.yScale=s,this.type="scale"}}class P{constructor(t,e,r,s){this.graphics=t,this.mover=e,this.xScale=r,this.yScale=s,this.type="scale-stop"}}const A=b.transformGraphics,T={centerIndicator:new u({style:"cross",size:A.center.size,color:A.center.color}),fill:{default:new h({color:A.fill.color,outline:{color:A.fill.outlineColor,join:"round",width:1}}),active:new h({color:A.fill.stagedColor,outline:{color:A.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new u({style:"square",size:A.vertex.size,color:A.vertex.color,outline:{color:A.vertex.outlineColor,width:1}}),hover:new u({style:"square",size:A.vertex.hoverSize,color:A.vertex.hoverColor,outline:{color:A.vertex.hoverOutlineColor,width:1}})},rotator:{default:new u({style:"circle",size:A.vertex.size,color:A.vertex.color,outline:{color:A.vertex.outlineColor,width:1}}),hover:new u({style:"circle",size:A.vertex.hoverSize,color:A.vertex.hoverColor,outline:{color:A.vertex.hoverOutlineColor,width:1}})},rotatorLine:new m({color:A.line.color,width:1})};let F=class extends i.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new d,this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const t=f();return(e,r)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of r){if(!s)continue;let r,i,o,a;if("point"===s.type)r=o=s.x,i=a=s.y;else if("multipoint"===s.type){const e=n(s);[r,i,o,a]=l(t,[e])}else if("extent"===s.type)[r,i,o,a]=[s.xmin,s.ymin,s.xmax,s.ymax];else{const e=n(s);[r,i,o,a]=l(t,e)}e[0]=Math.min(r,e[0]),e[1]=Math.min(i,e[1]),e[2]=Math.max(o,e[2]),e[3]=Math.max(a,e[3])}return e}})()}initialize(){this._setup(),this._handles.add([y(this,"view.ready",(()=>{const{layer:t,view:e}=this;w(e,t)})),g(this,"preserveAspectRatio",(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())})),g(this,"view.scale",(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()})),g(this,"graphics",(()=>this.refresh())),g(this,"layer",((t,e)=>{e&&this._resetGraphics(e),this.refresh()}))])}destroy(){this._reset(),this._handles&&(this._handles.removeAll(),this._handles=null)}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:e=T.centerIndicator,fill:r=T.fill,handles:s=T.handles,rotator:i=T.rotator,rotatorLine:o=T.rotatorLine}=t||{};this._set("symbols",{centerIndicator:e,fill:r,handles:s,rotator:i,rotatorLine:o})}isUIGraphic(t){let e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}move(t,e){if(this._mover&&this.graphics.length){for(const r of this.graphics){const s=r.geometry,i=v(s,t,e,this.view);r.geometry=i}this.refresh(),this._emitMoveStopEvent(t,e,null)}}scale(t,e){if(this._mover&&this.graphics.length){for(const r of this.graphics){const s=r.geometry,i=G(s,t,e);r.geometry=i}this.refresh(),this._emitScaleStopEvent(t,e,null)}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this.handleGraphics[1].geometry.x,r=this.handleGraphics[3].geometry.y;e=new o(t,r,this.view.spatialReference)}for(const r of this.graphics){const s=R(r.geometry,t,e);r.geometry=s}this.refresh(),this._emitRotateStopEvent(t,null)}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){const e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(const t of this.handleGraphics)t.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}_setupMover(){let t=[].concat(this.handleGraphics);this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new x({enableMoveAllGraphics:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[e,r,s,i]=this._getBoxBounds(f()),o=Math.abs(s-e),a=Math.abs(i-r),p=(s+e)/2,n=(i+r)/2,{x:l,y:c}=t.geometry;return{width:o,height:a,centerX:p,centerY:n,startX:l,startY:c,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[r,s,i,o]=this._getBounds(f(),[e]);return{width:Math.abs(i-r),height:Math.abs(o-s),centerX:(i+r)/2,centerY:(o+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:r,_yScale:s,backgroundGraphic:i,handleGraphics:o,rotateGraphic:a,symbols:p}=this,n=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),i.symbol=p.fill.active,this._startInfo=this._getStartInfo(n),n===a?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,n)):o.includes(n)?(this._activeHandleGraphic=n,this._emitScaleStartEvent(r,s,n)):this._emitMoveStartEvent(t.dx,t.dy,n)}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{const r=t.dx,s=t.dy;this._totalDx+=r,this._totalDy+=s,this._moveGraphic(e,r,s),this._emitMoveEvent(r,s,e)}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:r,_totalDx:s,_totalDy:i,_xScale:o,_yScale:a,backgroundGraphic:p,handleGraphics:n,rotateGraphic:l,symbols:c}=this;this._updateGraphics(),this._showGraphicsAfterUpdate(),p.symbol=c.fill.default,e===l?(this.view.cursor="pointer",this._emitRotateStopEvent(r,e)):n.includes(e)?this._emitScaleStopEvent(o,a,e):this._emitMoveStopEvent(s,i,e),this._resetGraphicStateVars()}_onGraphicPointerOverCallback(t){const{backgroundGraphic:e,handleGraphics:r,graphics:s,rotateGraphic:i,symbols:o,view:a}=this,p=t.graphic;if(p===i)return i.symbol=o.rotator.hover,void(a.cursor="pointer");if(s.includes(p)||p===e)return void(a.cursor="move");if(!r.includes(p))return void(a.cursor="pointer");t.graphic.symbol=o.handles.hover;const n=a.rotation;let l,c=t.index;switch(c<8&&(n>=0&&n<45?c%=8:c=n>=45&&n<90?(c+1)%8:n>=90&&n<135?(c+2)%8:n>=135&&n<180?(c+3)%8:n>=180&&n<225?(c+4)%8:n>=225&&n<270?(c+5)%8:n>=270&&n<315?(c+6)%8:(c+7)%8),c){case 0:l="nwse-resize";break;case 1:l="ns-resize";break;case 2:l="nesw-resize";break;case 3:l="ew-resize";break;case 4:l="nwse-resize";break;case 5:l="ns-resize";break;case 6:l="nesw-resize";break;case 7:l="ew-resize";break;default:l="pointer"}a.cursor=l}_onGraphicPointerOutCallback(t){const{handleGraphics:e,rotateGraphic:r,symbols:s,view:i}=this;t.graphic===r?r.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),i.cursor="default"}_scaleGraphic(t){const{_startInfo:e,handleGraphics:r,preserveAspectRatio:s,view:i}=this,{centerX:a,centerY:p,startX:n,startY:l}=e,{resolution:c,transform:m}=i.state,h=r.indexOf(t);1!==h&&5!==h||this._updateX(t,a),3!==h&&7!==h||this._updateY(t,p);const{x:u,y:j}=t.geometry,d=m[0]*u+m[2]*j+m[4],y=m[1]*u+m[3]*j+m[5],g=e.graphicInfos.map((t=>t.geometry));if(s){const t=m[0]*a+m[2]*p+m[4],e=m[1]*a+m[3]*p+m[5],r=m[0]*n+m[2]*l+m[4],s=m[1]*n+m[3]*l+m[5];this._xScale=this._yScale=_(t,e,r,s,d,y);for(const t of g){const e=g.indexOf(t);this.graphics[e].geometry=G(t,this._xScale,this._yScale,[a,p])}this._updateBackgroundGraphic()}else{const{width:t,height:r}=e;let s=u-n,m=l-j;if(1===h||5===h?s=0:3!==h&&7!==h||(m=0),0===s&&0===m)return;const d=t+(n>a?s:-1*s),y=r+(l<p?m:-1*m),f=a+s/2,b=p+m/2;this._xScale=d/t||1,this._yScale=y/r||1,1===h||5===h?this._xScale=1:3!==h&&7!==h||(this._yScale=1);const _=(f-a)/c,S=(b-p)/c,w=G(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=v(w,_,S,i,!0);const{centerX:x,centerY:k}=this._getGraphicInfo(this.backgroundGraphic),I=(x-a)/c,R=-1*(k-p)/c;for(const t of g){const e=g.indexOf(t),r=G(t,this._xScale,this._yScale,[a,p]);this.graphics[e].geometry=v(r,I,R,i,!0)}this.centerGraphic.geometry=new o(x,k,i.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:r,startX:s,startY:i,box:a,rotate:p}=this._startInfo,{x:n,y:l}=t.geometry,c=new o(e,r,this.view.spatialReference);this._angleOfRotation=S(e,r,s,i,n,l);const m=this._startInfo.graphicInfos.map((t=>t.geometry));for(const t of m){const e=m.indexOf(t),r=R(t,this._angleOfRotation,c);this.graphics[e].geometry=r}this.backgroundGraphic.geometry=R(a,this._angleOfRotation,c),this.rotateGraphic.geometry=R(p,this._angleOfRotation,c)}_moveGraphic(t,e,r){if(this.graphics.includes(t)){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=v(s,e,r,this.view);for(const s of this.graphics)s!==t&&(s.geometry=v(s.geometry,e,r,this.view))}else if(t===this.centerGraphic){const t=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=v(t,e,r,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic)for(const t of this.graphics)t.geometry=v(t.geometry,e,r,this.view)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._set("centerGraphic",new j(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new j(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new j(null,e.rotatorLine,t),this._set("rotateGraphic",new j(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let r=0;r<8;r++)this.handleGraphics.push(new j(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((t=>t.visible=!1))}_showGraphicsAfterUpdate(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach((t=>t.visible=!0))}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach(((e,r)=>{const[s,i]=t[r];this._updateXY(e,s,i)}))}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new p({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,r,s]=this._getBoxBounds(f()),i=(r+t)/2,a=(s+e)/2;this.centerGraphic.geometry=new o(i,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:t,y:e}=this.handleGraphics[1].geometry,r=e+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new o(t,r,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new c({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,r){t.geometry=new o(e,r,this.view.spatialReference)}_updateX(t,e){const r=t.geometry.y;t.geometry=new o(e,r,this.view.spatialReference)}_updateY(t,e){const r=t.geometry.x;t.geometry=new o(r,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some((t=>t&&e(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,r,s,i]=this._getBoxBounds(f());if(t){const t=(e+s)/2,o=(i+r)/2;return[[e,i],[t,i],[s,i],[s,o],[s,r],[t,r],[e,r],[e,o]]}return[[e,i],[s,i],[s,r],[e,r]]}_emitMoveStartEvent(t,e,r){const s=new M(this.graphics,r,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s)}_emitMoveEvent(t,e,r){const s=new C(this.graphics,r,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s)}_emitMoveStopEvent(t,e,r){const s=new U(this.graphics,r,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitRotateStartEvent(t,e){const r=new L(this.graphics,e,t);this.emit("rotate-start",r),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(r)}_emitRotateEvent(t,e){const r=new E(this.graphics,e,t);this.emit("rotate",r),this.callbacks.onRotate&&this.callbacks.onRotate(r)}_emitRotateStopEvent(t,e){const r=new O(this.graphics,e,t);this.emit("rotate-stop",r),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(r)}_emitScaleStartEvent(t,e,r){const s=new D(this.graphics,r,t,e);this.emit("scale-start",s),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(s)}_emitScaleEvent(t,e,r){const s=new V(this.graphics,r,t,e);this.emit("scale",s),this.callbacks.onScale&&this.callbacks.onScale(s)}_emitScaleStopEvent(t,e,r){const s=new P(this.graphics,r,t,e);this.emit("scale-stop",s),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(s)}};t([r()],F.prototype,"_rotateLineGraphic",void 0),t([r({readOnly:!0})],F.prototype,"type",void 0),t([r()],F.prototype,"callbacks",void 0),t([r({readOnly:!0})],F.prototype,"centerGraphic",void 0),t([r({readOnly:!0})],F.prototype,"backgroundGraphic",void 0),t([r()],F.prototype,"enableMovement",void 0),t([r()],F.prototype,"enableRotation",void 0),t([r()],F.prototype,"enableScaling",void 0),t([r()],F.prototype,"graphics",void 0),t([r({readOnly:!0})],F.prototype,"handleGraphics",void 0),t([r()],F.prototype,"layer",void 0),t([r()],F.prototype,"preserveAspectRatio",void 0),t([r({readOnly:!0})],F.prototype,"rotateGraphic",void 0),t([r()],F.prototype,"showCenterGraphic",void 0),t([r({readOnly:!0})],F.prototype,"state",null),t([r({value:T})],F.prototype,"symbols",null),t([r()],F.prototype,"view",void 0),F=t([s("esri.views.draw.support.Box")],F);var B=F;export default B;