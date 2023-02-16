/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{i as s}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import o from"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import{fetchMessageBundle as t,substitute as r}from"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../Basemap.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import{numericTypes as e}from"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import i from"../../popup/support/FieldInfoFormat.js";import p from"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import m from"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import l from"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../chunks/basemapUtils.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/utils5.js";import"../../chunks/MD5.js";import"../../chunks/numberUtils.js";import"../../chunks/utils7.js";import"../../chunks/utils6.js";import{g as n,c as a,a as u,b as c}from"../../chunks/clusterUtils.js";import{i as j}from"../../chunks/clusterUtils2.js";function y(s){const{fieldName:o,label:t,type:r}=s,m=e.indexOf(r)>-1,l=new p({fieldName:o,label:t,visible:!0,format:m?{places:"integer"===r||"small-integer"===r?0:2,digitSeparator:!0}:null});return"date"===r&&(l.format=new i({dateFormat:"short-date-short-time"})),l}function b(s,o){const t=o.getField(s);return t&&(t.alias||t.name)}function d(s,o,t){const{attributeInfo:e,statisticType:i}=o,{field:p,normalizationField:m}=e;let l,n="";if("avg"===i?l=m?t.clusters.avgNormFieldLabel:t.clusters.avgFieldLabel:"type"===i&&(l=t.clusters.predominantFieldLabel),l){const o=e.valueExpression?e.valueExpressionTitle:b(p,s),t=m&&b(m,s);n=r(l,{fieldLabel:o||"",normFieldLabel:t||""})}return n}function h(s,o,t,e){const{attributeInfo:i,statisticType:p}=o,{field:m,normalizationField:l}=i;let n,a="";if("avg"===p?n=l?e.clusters.avgNormFieldSummary:e.clusters.avgFieldSummary:"type"===p&&(n=e.clusters.predominantFieldSummary),n){const o=i.valueExpression?i.valueExpressionTitle:b(m,s),e=l&&b(l,s);a=r(n,{fieldLabel:o||"",normFieldLabel:e||"",fieldValue:"{"+t+"}"})}return a}async function k(s){const{layer:t,renderer:r}=s;await t.load();const e=r||t.renderer;if(!j(e))throw new o("clusters-popup:invalid-parameters","'renderer' is not valid");return{layer:t,renderer:e}}async function f(o){const[{renderer:e,layer:i},p]=await Promise.all([k(o),t("esri/smartMapping/t9n/smartMapping")]),b=await async function(s,o){if(!j(o))return null;const e=n(s,o),i=await t("esri/smartMapping/t9n/smartMapping"),p=i.clusters.predominantNoneValue,b="unique-value"===o.type?o.uniqueValueInfos:[],k=[],f=[],S=[];k.push(r(i.clusters.countSummary,{count:`{${a}}`})),f.push(y({fieldName:a,label:i.clusters.numFeatures,type:"integer"}));for(const o of e){const{statisticType:t,attributeInfo:r}=o,e=u(r,t),l=d(s,o,i);if("avg"===t)k.push(h(s,o,e,i)),f.push(y({fieldName:e,label:l,type:"double"}));else if("type"===t){const t=`expression/${e}`;k.push(h(s,o,t,i)),S.push(new m({name:e,title:l,returnType:"string",expression:c(b,e,p)})),f.push(y({fieldName:t}))}}return new l({fieldInfos:f,expressionInfos:S,content:k.join("<br/><br/>"),title:i.clusters.clusterPopupTitle})}(i,e);let f=null;return s(b)?(f={name:"clusters",title:p.clusters.templateTitle,value:b},{primaryTemplate:f,secondaryTemplates:[]}):null}export{f as getTemplates};