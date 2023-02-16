/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{clone as t}from"../core/lang.js";import"../chunks/deprecate.js";import{s as r}from"../chunks/object.js";import"../kernel.js";import"../config.js";import{b as o,i as s}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import p from"../core/Error.js";import"../chunks/compilerUtils.js";import"../chunks/ensureType.js";import{subclass as n,W as l}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import a from"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../chunks/asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as m}from"../chunks/reader.js";import"../chunks/shared.js";import{w as u}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import y,{e as c}from"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import j from"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/vec3.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import d from"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import f from"../symbols/SimpleFillSymbol.js";import h from"../symbols/SimpleMarkerSymbol.js";import b from"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"../chunks/uid.js";import S from"../Graphic.js";import"../core/Handles.js";import g from"./Layer.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"../chunks/colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/sizeVariableUtils.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/VisualVariablesMixin.js";import"../chunks/symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/normalizeUtilsCommon.js";import{normalizeCentralMeridian as k}from"../geometry/support/normalizeUtils.js";import"../chunks/MemCache.js";import"../chunks/LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as O}from"../chunks/MultiOriginJSONSupport.js";import"../core/watchUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/fieldType.js";import"../geometry/HeightModelInfo.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import{canProjectWithoutEngine as C,isLoaded as I,load as L,project as w}from"../geometry/projection.js";import{O as v}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";import"../chunks/Scheduler.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"../form/ExpressionInfo.js";import"../form/elements/FieldElement.js";import"../form/support/elements.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/support/inputs.js";import"../form/elements/GroupElement.js";import"../form/FormTemplate.js";import"../chunks/zscale.js";import"../chunks/queryZScale.js";import M from"./support/Field.js";import"../tasks/support/FeatureSet.js";import N from"./FeatureLayer.js";import"../chunks/ArcGISService.js";import{B as T}from"../chunks/BlendLayer.js";import"../chunks/CustomParametersMixin.js";import{P as R}from"../chunks/PortalLayer.js";import"../chunks/RefreshableLayer.js";import{S as D}from"../chunks/ScaleRangeLayer.js";import"./support/TimeInfo.js";import"../chunks/TemporalLayer.js";import"./support/FeatureReductionSelection.js";import"./support/FeatureReductionCluster.js";import"../chunks/labelUtils.js";import"./support/LabelClass.js";import"../chunks/defaultsJSON.js";import"../chunks/defaults.js";import"../chunks/featureReductionUtils.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"../chunks/fieldProperties.js";import"./support/FieldsIndex.js";import"./support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/DataLayerSource.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import"../chunks/GraphicsCollection.js";import x from"./GraphicsLayer.js";import{f as U}from"../chunks/objectIdUtils.js";function P(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const J=new M({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),F=new M({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let E=class extends x{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};e([i({readOnly:!0})],E.prototype,"sublayers",null),e([i()],E.prototype,"layer",void 0),e([i({readOnly:!0})],E.prototype,"visibilityMode",void 0),E=e([n("esri.layers.MapNotesLayer.MapNotesSublayer")],E);const V=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new f).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new d).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new h).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new h).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new b).toJSON()}];let G=class extends(T(D(v(R(O(g)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=y.WGS84,this.sublayers=new a(V.map((e=>new E({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!P(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!P(t))return null;const o=t.layers.map((e=>{const t=new N;return t.read(e,r),t}));return new a({items:o})}readLegacyfeatureCollectionJSON(e,r){return P(r)?t(r.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new j({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:y.WGS84});const r=y.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?j.fromJSON(r).union(e):e}),new j({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?y.fromJSON(t.layers[0].layerDefinition.spatialReference):y.WGS84}readSublayers(e,t,r){if(P(t))return null;const o=[];for(let e=0;e<t.layers.length;e++){var s;const{layerDefinition:r,featureSet:i}=t.layers[e],p=null!=(s=r.geometryType)?s:i.geometryType,n=V.find((e=>{var t,o,s;return p===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(o=t.renderer)||null==(s=o.symbol)?void 0:s.type)===e.identifyingSymbol.type}));if(n){const e=new E({id:n.layerId,title:r.name,layer:this,graphics:i.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>S.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(e)}}return new a(o)}writeSublayers(e,t,i,n){const{minScale:l,maxScale:a}=this;if(o(e))return;const m=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing){var u;if(m)null==n||null==(u=n.messages)||u.push(new p("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"));return}const y=[];let c=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(s(e.geometry)){c=e.geometry.spatialReference.toJSON();break e}for(const t of V){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(y,r,t,l,a,c,n)}r("featureCollection.layers",y,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,r){"featureCollection"in e&&(e=t(e),Object.assign(e,e.featureCollection)),super.read(e,r)}async beforeSave(){if(o(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const o of r.graphics)if(s(o.geometry)){const r=o.geometry;e?c(r.spatialReference,e)||(C(r.spatialReference,e)||I()||await L(),o.geometry=w(r,e)):e=r.spatialReference,t.push(o)}const r=await k(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return o(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,r,s,i,p,n,l){const a=[];if(!o(r)){for(const e of r.graphics)this._writeMapNote(a,e,s.geometryType,l);this._normalizeObjectIds(a,J),e.push({layerDefinition:{name:r.title,drawingInfo:{renderer:{type:"simple",symbol:t(s.identifyingSymbol)}},geometryType:s.geometryTypeJSON,minScale:i,maxScale:p,objectIdField:"OBJECTID",fields:[J.toJSON(),F.toJSON()],spatialReference:n},featureSet:{features:a,geometryType:s.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){if(o(t))return;const{geometry:p,symbol:n,popupTemplate:a}=t;if(o(p))return;var m,u;if(p.type!==r)return void(null==i||null==(m=i.messages)||m.push(new l("map-notes-layer:invalid-geometry-type",`Geometry "${p.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(o(n))return void(null==i||null==(u=i.messages)||u.push(new l("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:p.toJSON(),symbol:n.toJSON()};s(a)&&(y.popupInfo=a.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let o=U(r,e)+1;const s=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||s.has(e[r]))&&(e[r]=o++),s.add(e[r])}}};e([i({readOnly:!0})],G.prototype,"capabilities",void 0),e([m(["portal-item","web-map"],"capabilities",["layers"])],G.prototype,"readCapabilities",null),e([i({readOnly:!0})],G.prototype,"featureCollections",void 0),e([m(["web-map","portal-item"],"featureCollections",["layers"])],G.prototype,"readFeatureCollections",null),e([i({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],G.prototype,"featureCollectionJSON",void 0),e([m(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],G.prototype,"readLegacyfeatureCollectionJSON",null),e([i({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],G.prototype,"featureCollectionType",void 0),e([i({json:{write:!1}})],G.prototype,"fullExtent",void 0),e([m(["web-map","portal-item"],"fullExtent",["layers"])],G.prototype,"readFullExtent",null),e([i({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],G.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],G.prototype,"listMode",void 0),e([i({type:Number,nonNullable:!0,json:{write:!1}})],G.prototype,"minScale",void 0),e([m(["web-map","portal-item"],"minScale",["layers"])],G.prototype,"readMinScale",null),e([i({type:Number,nonNullable:!0,json:{write:!1}})],G.prototype,"maxScale",void 0),e([m(["web-map","portal-item"],"maxScale",["layers"])],G.prototype,"readMaxScale",null),e([i({readOnly:!0})],G.prototype,"multipointLayer",null),e([i({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],G.prototype,"operationalLayerType",void 0),e([i({readOnly:!0})],G.prototype,"pointLayer",null),e([i({readOnly:!0})],G.prototype,"polygonLayer",null),e([i({readOnly:!0})],G.prototype,"polylineLayer",null),e([i({type:y})],G.prototype,"spatialReference",void 0),e([m(["web-map","portal-item"],"spatialReference",["layers"])],G.prototype,"readSpatialReference",null),e([i({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],G.prototype,"sublayers",void 0),e([m("web-map","sublayers",["layers"])],G.prototype,"readSublayers",null),e([u("web-map","sublayers")],G.prototype,"writeSublayers",null),e([i({readOnly:!0})],G.prototype,"textLayer",null),e([i()],G.prototype,"title",void 0),e([i({readOnly:!0,json:{read:!1}})],G.prototype,"type",void 0),G=e([n("esri.layers.MapNotesLayer")],G);var A=G;export default A;