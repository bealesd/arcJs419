/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import s from"../config.js";import{i as t}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import{getFilename as i}from"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as l}from"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import m from"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../chunks/Identifiable.js";import p from"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import n from"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import a from"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import y from"../symbols/SimpleFillSymbol.js";import c from"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import u from"./Layer.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as j}from"../chunks/MultiOriginJSONSupport.js";import{O as h}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import{i as b,b as S,u as d}from"../chunks/commonProperties2.js";import{B as k}from"../chunks/BlendLayer.js";import{P as f}from"../chunks/PortalLayer.js";import{R as g}from"../chunks/RefreshableLayer.js";import{S as v}from"../chunks/ScaleRangeLayer.js";const D=["atom","xml"],L={base:p,key:"type",typeMap:{"simple-line":n},errorContext:"symbol"},P={base:p,key:"type",typeMap:{"picture-marker":a,"simple-marker":c},errorContext:"symbol"},U={base:p,key:"type",typeMap:{"simple-fill":y},errorContext:"symbol"};let R=class extends(k(g(h(f(v(j(u))))))){constructor(...o){super(...o),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(o,s){return"string"==typeof o?{url:o,...s}:o}get title(){const o=this._get("title");return o&&"defaults"!==this.originOf("title")?o:this.url?i(this.url,D)||"GeoRSS":o||""}set title(o){this._set("title",o)}readFeatureCollections(o,s){return s.featureCollection.layers.forEach((o=>{const s=o.layerDefinition.drawingInfo.renderer.symbol;s&&"esriSFS"===s.type&&s.outline&&-1!==s.outline.style.indexOf("esriSFS")&&(s.outline.style="esriSLSSolid")})),s.featureCollection.layers}load(o){const s=t(o)?o.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},o).then((()=>this._fetchService(s)),(()=>this._fetchService(s)))),Promise.resolve(this)}async _fetchService(o){const{data:t}=await m(s.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:o});this.read(t,{origin:"service"})}};o([r()],R.prototype,"description",void 0),o([r({json:{origins:{service:{read:{source:"name",reader:o=>o||void 0}}}}})],R.prototype,"title",null),o([r()],R.prototype,"featureCollections",void 0),o([l("service","featureCollections",["featureCollection.layers"])],R.prototype,"readFeatureCollections",null),o([r(b)],R.prototype,"id",void 0),o([r(S)],R.prototype,"legendEnabled",void 0),o([r({types:L,json:{write:!0}})],R.prototype,"lineSymbol",void 0),o([r({type:["show","hide"]})],R.prototype,"listMode",void 0),o([r({types:P,json:{write:!0}})],R.prototype,"pointSymbol",void 0),o([r({types:U,json:{write:!0}})],R.prototype,"polygonSymbol",void 0),o([r({type:["GeoRSS"]})],R.prototype,"operationalLayerType",void 0),o([r()],R.prototype,"outSpatialReference",void 0),o([r(d)],R.prototype,"url",void 0),o([r({readOnly:!0,json:{read:!1},value:"geo-rss"})],R.prototype,"type",void 0),R=o([e("esri.layers.GeoRSSLayer")],R);var C=R;export default C;
