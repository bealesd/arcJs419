/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{i as o}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import{aliasOf as e}from"../../core/accessorSupport/decorators/aliasOf.js";import{cast as i}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import p from"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../core/Handles.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/jsonUtils.js";import m from"../../renderers/support/ClassBreakInfo.js";import"../../core/watchUtils.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/domUtils.js";import{s as l}from"../../chunks/widgetUtils.js";import"../../chunks/projector.js";import{m as n}from"../../chunks/messageBundle.js";import{j as a}from"../../chunks/index.js";import"../Widget.js";import"../../chunks/numberUtils.js";import"../../chunks/utils7.js";import"../Slider/SliderViewModel.js";import"../../chunks/ResizeObserver.js";import"../Slider.js";import"../Histogram/HistogramViewModel.js";import"../Histogram.js";import{getFillFromColor as c}from"./support/utils.js";import{SmartMappingSliderBase as u}from"./SmartMappingSliderBase.js";import"./SmartMappingSliderViewModel.js";import j from"./ClassedSizeSlider/ClassedSizeSliderViewModel.js";var d;const h="esri-classed-size-slider",y="esri-classed-size-slider__ramp",b="esri-classed-size-slider__slider-container",k="esri-classed-size-slider__histogram-container",g="esri-widget",S="esri-widget--panel",f="esri-disabled",C={trackFillColor:new p([149,149,149]),trackBackgroundColor:new p([224,224,224])};let M=d=class extends u{constructor(s,o){super(s,o),this._rampNode=null,this.breaks=null,this.label=void 0,this.messages=null,this.style={...C},this.viewModel=new j}castStyle(s){return{...C,...s}}static fromRendererResult(s,o){const{renderer:{classBreakInfos:r}}=s,t=r.map((s=>{const o=s.symbol;let r;switch(o.type){case"simple-line":r=o.width;break;case"simple-marker":r=o.size;break;case"picture-marker":r=o.height}return{min:s.minValue,max:s.maxValue,size:r}}));return new d({breaks:t,histogramConfig:{bins:o?o.bins:[]}})}updateClassBreakInfos(s){const o=this.breaks;if(o.length===s.length)return s.map(((s,r)=>{const t=s.symbol;switch(t.type){case"simple-line":t.width=o[r].size;break;case"simple-marker":t.size=o[r].size;break;case"picture-marker":{const s=o[r].size,e=t.width,i=t.height;t.height=s,t.width=s/i*e;break}}return new m({minValue:o[r].min,maxValue:o[r].max,symbol:t})}));console.error(`Number of input breakInfos must match number of slider breaks: ${o.length}`)}updateFromRendererResult(s,o){const{renderer:{classBreakInfos:r}}=s,t=r.map((s=>{const o=s.symbol;let r;switch(o.type){case"simple-line":r=o.width;break;case"simple-marker":r=o.size;break;case"picture-marker":r=o.height}return{min:s.minValue,max:s.maxValue,size:r}}));this.set({breaks:t}),null!=o&&o.bins&&(this.histogramConfig.bins=o.bins)}render(){const{state:s,label:o}=this,r="disabled"===s,t=this.classes(h,g,S,{[f]:r});return a("div",{"aria-label":o,class:t},r?null:this.renderContent(this.renderRamp(),b,k))}renderRamp(){const{style:{trackBackgroundColor:s}}=this;return a("div",{afterCreate:l,bind:this,class:y,"data-node-ref":"_rampNode"},a("svg",{xmlns:"http://www.w3.org/2000/svg"},a("rect",{x:"0",y:"0",fill:c(s),height:"100%",width:"100%"}),this.renderPath()))}renderPath(){if(!this._rampNode)return;const{offsetHeight:s=0,offsetWidth:r=0}=this._rampNode;if(!o(s)||!o(r))return;const{breaks:t,viewModel:{max:e,min:i},style:{trackFillColor:p}}=this,m=e-i,l=r/t.length,n=t.map((o=>s-Math.round((o.min-i)/m*s)+1)).reverse(),u=t[0].size>t[t.length-1].size||!1;let j=u?l:r,d=`M${j} 0 `;return n.forEach(((s,o)=>{const t=l*(o+1);d+=`L${j} ${s} `,j=u?l+t:r-t,d+=`L${j} ${s} `})),d+=`L0 ${s} L0 ${s} L0 0 Z`,a("path",{d,fill:c(p)})}};s([e("viewModel.breaks")],M.prototype,"breaks",void 0),s([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],M.prototype,"label",void 0),s([r(),n("esri/widgets/smartMapping/ClassedSizeSlider/t9n/ClassedSizeSlider")],M.prototype,"messages",void 0),s([r()],M.prototype,"style",void 0),s([i("style")],M.prototype,"castStyle",null),s([r()],M.prototype,"viewModel",void 0),M=d=s([t("esri.widgets.smartMapping.ClassedSizeSlider")],M);var w=M;export default w;