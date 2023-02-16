/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import{i as e}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import s from"../core/Error.js";import"../chunks/compilerUtils.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import{L as i}from"../chunks/Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import p,{e as n}from"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import l from"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import{t as a}from"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import{fixRendererFields as u,fixTimeInfoFields as m}from"./support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import c from"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"../chunks/uid.js";import"../Graphic.js";import d from"./Layer.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"../chunks/colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/sizeVariableUtils.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/VisualVariablesMixin.js";import"../chunks/symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/MemCache.js";import"../chunks/LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import{read as y,r as j}from"../renderers/support/jsonUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import{R as h}from"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../chunks/fieldType.js";import{E as f}from"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";import b from"./support/Field.js";import"../tasks/support/FeatureSet.js";import{B as g}from"../chunks/BlendLayer.js";import{R as k}from"../chunks/RefreshableLayer.js";import{S}from"../chunks/ScaleRangeLayer.js";import"./support/TimeInfo.js";import{T as v}from"../chunks/TemporalLayer.js";import I,{F as D}from"./support/FeatureReductionSelection.js";import C from"./support/FeatureReductionCluster.js";import"../chunks/labelUtils.js";import R from"./support/LabelClass.js";import"../chunks/defaultsJSON.js";import"../chunks/defaults.js";import"./support/FeatureTemplate.js";import F from"./support/FeatureType.js";import O from"./support/FieldsIndex.js";import"../chunks/DataLayerSource.js";import{createPopupTemplate as U}from"../support/popupUtils.js";import x from"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/featureConversionUtils.js";import"../chunks/geojson.js";import"../chunks/clientSideDefaults.js";import{g as P,a as L,b as M,c as E,d as T,q as V,e as B}from"../chunks/ogcFeatureUtils.js";const w="http://www.opengis.net/def/crs/OGC/1.3/CRS84";let A=class extends i{constructor(){super(...arguments),this.collection=null,this.conformance=null,this.landingPage=null,this.layerDefinition=null,this.type="ogc-feature"}load(t){const o=e(t)?t.signal:null,{collectionId:r,fields:i,geometryType:p,hasZ:n,objectIdField:l,timeInfo:u,url:m}=this.layer,c={fields:null==i?void 0:i.map((t=>t.toJSON())),geometryType:a.toJSON(p),hasZ:n,objectIdField:l,timeInfo:null==u?void 0:u.toJSON()};return this.addResolvingPromise(Promise.all([P(m,o),L(m,o),M(m,r,o),E(m,r,c,o)]).then((t=>{const[e,o,r,i]=t;this.set({landingPage:e,conformance:o,collection:r,layerDefinition:i});const p=new RegExp("^https?://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson$","i");if(!(null==o?void 0:o.conformsTo.some((t=>p.test(t)))))throw new s("ogc-feature-layer:no-geojson-support","Server does not support geojson")}))),this.when()}get fullExtent(){var t,e;const o=null==(t=this.collection)||null==(e=t.extent)?void 0:e.spatial;if(!o)return null;const s=o.bbox[0],r=4===s.length,i=s[0],n=s[1],a=r?void 0:s[2],u=r?s[2]:s[3],m=r?s[3]:s[4],c=r?void 0:s[5],d=p.WGS84;return new l({xmin:i,ymin:n,xmax:u,ymax:m,zmin:a,zmax:c,spatialReference:d})}get spatialReference(){var t;const e=null!=(t=this.collection.storageCrs)?t:w,o=T(e);return o||p.WGS84}getFeatureDefinition(){var t;const{collection:e,layer:{capabilities:o,collectionId:s,spatialReference:r,url:i},layerDefinition:p}=this,n=null!=(t=null==e?void 0:e.crs)?t:[w];return{capabilities:o,collectionId:s,layerDefinition:p,spatialReference:r.toJSON(),supportedCrs:n,url:i}}queryExtent(t,e={}){return null}queryFeatureCount(t,e={}){return null}queryFeatures(t,e={}){const o=this.getFeatureDefinition();return this.load(e).then((()=>V(o,t,e)))}queryFeaturesJSON(t,e={}){const o=this.getFeatureDefinition();return this.load(e).then((()=>B(o,t,e)))}queryObjectIds(t,e={}){return null}supportsSpatialReference(t){var e,o;if(t.isWGS84||t.isWebMercator)return!0;return(null!=(e=null==(o=this.collection)?void 0:o.crs)?e:[w]).some((e=>{const o=T(e);return!!o&&n(o,t)}))}};t([o()],A.prototype,"collection",void 0),t([o()],A.prototype,"conformance",void 0),t([o({readOnly:!0,type:l})],A.prototype,"fullExtent",null),t([o()],A.prototype,"landingPage",void 0),t([o({constructOnly:!0})],A.prototype,"layer",void 0),t([o()],A.prototype,"layerDefinition",void 0),t([o()],A.prototype,"spatialReference",null),t([o()],A.prototype,"type",void 0),A=t([r("esri.layers.graphics.sources.OGCFeatureSource")],A);var q=A;let z=class extends(g(v(S(k(h(d)))))){constructor(t){super(t),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}load(t){const e=new q({layer:this});return this._set("source",e),this.addResolvingPromise(e.load(t).then((()=>{const{geometryType:t,hasZ:e,objectIdField:o}=this.source.layerDefinition;this.set({geometryType:a.fromJSON(t),hasZ:e,objectIdField:o}),u(this.renderer,this.fields),m(this.timeInfo,this.fields)}))),this.when()}get capabilities(){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!!this.hasZ},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}get defaultPopupTemplate(){return this.createPopupTemplate()}get description(){var t,e,o;return null!=(t=null==(e=this.source)||null==(o=e.collection)?void 0:o.description)?t:null}get fields(){var t,e,o;const s=null==(t=this.source)||null==(e=t.layerDefinition)?void 0:e.fields;return null!=(o=null==s?void 0:s.map((t=>b.fromJSON(t))))?o:null}set fields(t){t?this._override("fields",t):this._clearOverride("fields")}get fieldsIndex(){return new O(this.fields)}get renderer(){var t,e,o;const s=null==(t=this.source)||null==(e=t.layerDefinition)||null==(o=e.drawingInfo)?void 0:o.renderer;return s?y(s,null,{origin:"service"}):null}set renderer(t){t?(u(t,this.fields),this._override("renderer",t)):this._clearOverride("renderer")}get spatialReference(){return this.source.spatialReference}get title(){var t,e;return null==(t=this.source)||null==(e=t.collection)?void 0:e.title}set title(t){t?this._override("title",t):this._clearOverride("title")}on(t,e){return super.on(t,e)}createPopupTemplate(t){return U(this,t)}createQuery(){return new x}getField(t){return this.fieldsIndex.get(t)}getFieldDomain(t,e){var o;let s,r=!1;const i=null==e||null==(o=e.feature)?void 0:o.attributes,p=this.typeIdField&&(null==i?void 0:i[this.typeIdField]);return null!=p&&this.types&&(r=this.types.some((e=>{var o,r;return e.id==p&&(s=null==(o=e.domains)?void 0:o[t],"inherited"===(null==(r=s)?void 0:r.type)&&(s=this._getLayerDomain(t)),!0)}))),r||s||(s=this._getLayerDomain(t)),s}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(x.from(t)||this.createQuery(),e))).then((t=>{var e;return null==t||null==(e=t.features)||e.forEach((t=>{t.layer=t.sourceLayer=this})),t}))}_getLayerDomain(t){if(!this.fields)return null;for(const e of this.fields)if(e.name===t&&e.domain)return e.domain;return null}};t([o({readOnly:!0,dependsOn:["hasZ"]})],z.prototype,"capabilities",null),t([o({type:String})],z.prototype,"collectionId",void 0),t([o({type:String})],z.prototype,"copyright",void 0),t([o({readOnly:!0})],z.prototype,"defaultPopupTemplate",null),t([o({type:String})],z.prototype,"definitionExpression",void 0),t([o({readOnly:!0,type:String})],z.prototype,"description",null),t([o({type:String})],z.prototype,"displayField",void 0),t([o({type:f})],z.prototype,"elevationInfo",void 0),t([o({types:{key:"type",base:D,typeMap:{selection:I,cluster:C}}})],z.prototype,"featureReduction",void 0),t([o({type:[b]})],z.prototype,"fields",null),t([o({readOnly:!0})],z.prototype,"fieldsIndex",null),t([o({type:l,aliasOf:"source.fullExtent"})],z.prototype,"fullExtent",void 0),t([o({type:["point","polygon","polyline","multipoint"]})],z.prototype,"geometryType",void 0),t([o({type:Boolean})],z.prototype,"hasZ",void 0),t([o({type:String})],z.prototype,"id",void 0),t([o({type:[R]})],z.prototype,"labelingInfo",void 0),t([o({type:Boolean})],z.prototype,"labelsVisible",void 0),t([o({type:Boolean})],z.prototype,"legendEnabled",void 0),t([o({type:["show","hide"]})],z.prototype,"listMode",void 0),t([o({type:String})],z.prototype,"objectIdField",void 0),t([o({type:Boolean})],z.prototype,"popupEnabled",void 0),t([o({type:c})],z.prototype,"popupTemplate",void 0),t([o({types:j})],z.prototype,"renderer",null),t([o({type:Boolean})],z.prototype,"screenSizePerspectiveEnabled",void 0),t([o({readOnly:!0})],z.prototype,"source",void 0),t([o({readOnly:!0})],z.prototype,"spatialReference",null),t([o()],z.prototype,"title",null),t([o({readOnly:!0})],z.prototype,"type",void 0),t([o({type:String,readOnly:!0})],z.prototype,"typeIdField",void 0),t([o({type:[F]})],z.prototype,"types",void 0),t([o({type:String})],z.prototype,"url",void 0),z=t([r("esri.layers.OGCFeatureLayer")],z);var G=z;export default G;
