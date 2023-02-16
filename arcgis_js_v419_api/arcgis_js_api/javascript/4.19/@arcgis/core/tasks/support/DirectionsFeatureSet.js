/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{u as t}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import{r as e}from"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import p from"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import i from"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import m from"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import n from"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import l from"../../Graphic.js";import"../../chunks/fieldType.js";import"../../layers/support/Field.js";import a from"./FeatureSet.js";let u=class extends a{constructor(o){super(o),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(o,s){(o||[]).forEach((o=>{this._decompressFeatureGeometry(o,s.summary.envelope.spatialReference)}));const r=p.fromJSON(s.spatialReference);return o.map((o=>{const s=l.fromJSON(o),e=o.geometry&&o.geometry.spatialReference;return s.geometry&&!e&&(t(s.geometry).spatialReference=r),s.strings=o.strings,s.events=(o.events||[]).map((t=>{const s=new l({geometry:new i({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:o.geometry&&o.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return s.strings=t.strings,s})),s}))}get mergedGeometry(){if(!this.features)return null;const o=this.features.map((({geometry:o})=>t(o))),s=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(o,s)}get strings(){return this.features.map((({strings:o})=>o))}_decompressFeatureGeometry(o,t){o.geometry=this._decompressGeometry(o.compressedGeometry,t)}_decompressGeometry(o,t){let s=0,r=0,e=0,p=0;const i=[];let m,n,l,a,u,c,j,y,h=0,d=0,b=0;if(u=o.match(/((\+|\-)[^\+\-\|]+|\|)/g),u||(u=[]),0===parseInt(u[h],32)){h=2;const o=parseInt(u[h],32);h++,c=parseInt(u[h],32),h++,1&o&&(d=u.indexOf("|")+1,j=parseInt(u[d],32),d++),2&o&&(b=u.indexOf("|",d)+1,y=parseInt(u[b],32),b++)}else c=parseInt(u[h],32),h++;for(;h<u.length&&"|"!==u[h];){m=parseInt(u[h],32)+s,h++,s=m,n=parseInt(u[h],32)+r,h++,r=n;const o=[m/c,n/c];d&&(a=parseInt(u[d],32)+e,d++,e=a,o.push(a/j)),b&&(l=parseInt(u[b],32)+p,b++,p=l,o.push(l/y)),i.push(o)}return{paths:[i],hasZ:d>0,hasM:b>0,spatialReference:t}}_mergePolylinesToSinglePath(o,t){let s=[];(o||[]).forEach((o=>{o.paths.forEach((o=>{s=s.concat(o)}))}));const r=[];let e=[0,0];return s.forEach((o=>{o[0]===e[0]&&o[1]===e[1]||(r.push(o),e=o)})),new n({paths:[r]},t)}};o([s({type:m,json:{read:{source:"summary.envelope"}}})],u.prototype,"extent",void 0),o([s()],u.prototype,"features",void 0),o([e("features")],u.prototype,"readFeatures",null),o([s()],u.prototype,"geometryType",void 0),o([s({readOnly:!0})],u.prototype,"mergedGeometry",null),o([s()],u.prototype,"routeId",void 0),o([s()],u.prototype,"routeName",void 0),o([s({value:null,readOnly:!0})],u.prototype,"strings",null),o([s({json:{read:{source:"summary.totalDriveTime"}}})],u.prototype,"totalDriveTime",void 0),o([s({json:{read:{source:"summary.totalLength"}}})],u.prototype,"totalLength",void 0),o([s({json:{read:{source:"summary.totalTime"}}})],u.prototype,"totalTime",void 0),u=o([r("esri.tasks.support.DirectionsFeatureSet")],u);var c=u;export default c;
