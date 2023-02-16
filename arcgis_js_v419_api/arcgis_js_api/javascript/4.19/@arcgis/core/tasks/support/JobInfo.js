/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import{onAbort as e,createAbortError as s}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import{a as i}from"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import{J as a}from"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import p from"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../chunks/normalizeUtilsCommon.js";import{normalizeCentralMeridian as m}from"../../geometry/support/normalizeUtils.js";import"../../chunks/fieldType.js";import l from"../../layers/support/Field.js";import n from"./FeatureSet.js";import{p as u,e as c}from"../../chunks/utils4.js";import j from"../../layers/support/MapImage.js";import b from"./GPMessage.js";import y from"../../rest/geoprocessor/GPOptions.js";import h from"./DataFile.js";import d from"./LinearUnit.js";import S from"./ParameterValue.js";import f from"./RasterData.js";async function k(t,o,e,s,r){const i={},a={},l=[];return function(t,o,e){for(const s in t){const r=t[s];if(r&&"object"==typeof r&&r instanceof n){const{features:t}=r;e[s]=[o.length,o.length+t.length],t.forEach((t=>{o.push(t.geometry)}))}}}(s,l,i),m(l).then((m=>{const{outSpatialReference:l,processExtent:n,processSpatialReference:c,returnFeatureCollection:j,returnM:b,returnZ:y}=e,{path:h}=u(t);for(const t in i){const o=i[t];a[t]=m.slice(o[0],o[1])}const d=l?l.wkid||l:null,S=c?c.wkid||c:null,f="execute"===o?{returnFeatureCollection:j||void 0,returnM:b||void 0,returnZ:y||void 0}:null,k=P({...n?{context:{extent:n,outSR:d,processSR:S}}:{"env:outSR":d,"env:processSR":S},...s,...f,f:"json"},null,a),g={...r,query:k};return p(`${h}/${o}`,g)}))}function g(t){const o=t.dataType,e=S.fromJSON(t);switch(o){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return e;case"GPDate":e.value=new Date(e.value);break;case"GPDataFile":e.value=h.fromJSON(e.value);break;case"GPLinearUnit":e.value=d.fromJSON(e.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const o=t.value.url;e.value=o?h.fromJSON(e.value):n.fromJSON(e.value);break}case"GPRasterData":case"GPRasterDataLayer":{const o=t.value.mapImage;e.value=o?j.fromJSON(o):f.fromJSON(e.value);break}case"GPField":e.value=l.fromJSON(e.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return e;case"GPMultiValue:GPDate":{const t=e.value;e.value=t.map((t=>new Date(t)));break}case"GPMultiValue:GPDataFile":e.value=e.value.map((t=>h.fromJSON(t)));break;case"GPMultiValue:GPLinearUnit":e.value=e.value.map((t=>d.fromJSON(t)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":e.value=e.value.map((t=>n.fromJSON(t)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":e.value=e.value.map((t=>t?j.fromJSON(t):f.fromJSON(e.value)));break;case"GPMultiValue:GPField":e.value=e.value.map((t=>l.fromJSON(t)))}return e}function P(t,o,e){for(const o in t){const e=t[o];Array.isArray(e)?t[o]=JSON.stringify(e.map((t=>P({item:t},!0).item))):e instanceof Date&&(t[o]=e.getTime())}return c(t,o,e)}var v;const D=new a({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let M=v=class extends i{constructor(t){super(t),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(t){const{jobId:o,sourceUrl:e}=this,{path:s}=u(e),r={...this.requestOptions,...t,query:{f:"json"}};this._clearTimer();return p(`${s}/jobs/${o}/cancel`,r).then((t=>{const o=v.fromJSON(t.data);return this.messages=o.messages,this.jobStatus=o.jobStatus,this}))}destroy(){clearInterval(this._timer)}checkJobStatus(t){const{path:o}=u(this.sourceUrl),e={...this.requestOptions,...t,query:{f:"json"}},s=`${o}/jobs/${this.jobId}`;return p(s,e).then((({data:t})=>{const o=v.fromJSON(t);return this.messages=o.messages,this.jobStatus=o.jobStatus,this}))}fetchResultData(t,o,e){o=y.from(o);const{returnFeatureCollection:s,returnM:r,returnZ:i,outSpatialReference:a}=o,{path:m}=u(this.sourceUrl),l=P({returnFeatureCollection:s||void 0,returnM:r||void 0,returnZ:i||void 0,outSR:a,returnType:"data",f:"json"},null),n={...this.requestOptions,...e,query:l},c=`${m}/jobs/${this.jobId}/results/${t}`;return p(c,n).then((t=>g(t.data)))}fetchResultImage(t,o,e){const{path:s}=u(this.sourceUrl),r=P({...o.toJSON(),f:"json"}),i={...this.requestOptions,...e,query:r},a=`${s}/jobs/${this.jobId}/results/${t}`;return p(a,i).then((t=>g(t.data)))}async fetchResultMapImageLayer(){const{path:t}=u(this.sourceUrl),o=t.indexOf("/GPServer/"),e=`${t.substring(0,o)}/MapServer/jobs/${this.jobId}`;return new(0,(await import("../../layers/MapImageLayer.js")).default)({url:e})}async waitForJobCompletion(t={}){const{interval:o=1e3,signal:r,statusCallback:i}=t;return new Promise(((t,a)=>{e(r,(()=>{this._clearTimer(),a(s())})),this._clearTimer();const p=setInterval((()=>{this._timer||a(s()),this.checkJobStatus(this.requestOptions).then((o=>{const{jobStatus:e}=o;switch(this.jobStatus=e,e){case"job-succeeded":this._clearTimer(),t(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":i&&i(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),a(this)}}))}),o);this._timer=p}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};t([o()],M.prototype,"jobId",void 0),t([o({json:{read:D.read}})],M.prototype,"jobStatus",void 0),t([o({type:[b]})],M.prototype,"messages",void 0),t([o()],M.prototype,"requestOptions",void 0),t([o({json:{write:!0}})],M.prototype,"sourceUrl",void 0),M=v=t([r("esri.tasks.support.JobInfo")],M);var G=M;export default G;export{k as c,g as d};
