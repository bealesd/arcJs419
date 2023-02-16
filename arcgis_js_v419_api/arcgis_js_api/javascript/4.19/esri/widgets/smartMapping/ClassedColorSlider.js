// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/aliasOf ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../renderers/support/ClassBreakInfo ../support/widgetUtils ../support/decorators/messageBundle ../../chunks/index ./SmartMappingSliderBase ./ClassedColorSlider/ClassedColorSliderViewModel".split(" "),
function(p,g,d,x,y,l,q,z,r,A,B,C,t,D,u,f,v,w){var m;d=m=function(n){function h(a,b){a=n.call(this,a,b)||this;a._bgFillId=null;a._rampFillId=null;a.breaks=null;a.label=void 0;a.messages=null;a.viewModel=new w;a._bgFillId=`${a.id}-bg-fill`;a._rampFillId=`${a.id}-linear-gradient`;return a}p._inheritsLoose(h,n);h.fromRendererResult=function(a,b){({renderer:{classBreakInfos:a}}=a);a=a.map(c=>({min:c.minValue,max:c.maxValue,color:c.symbol.color}));return new m({breaks:a,histogramConfig:{bins:b?b.bins:[]}})};
var k=h.prototype;k.updateClassBreakInfos=function(a){const b=this.breaks;if(b.length!==a.length)console.error(`Number of input breakInfos must match number of slider breaks: ${b.length}`);else return a.map((c,e)=>{c=c.symbol;c.color=b[e].color;return new t({minValue:b[e].min,maxValue:b[e].max,symbol:c})})};k.updateFromRendererResult=function(a,b){({renderer:{classBreakInfos:a}}=a);a=a.map(c=>({min:c.minValue,max:c.maxValue,color:c.symbol.color}));this.set({breaks:a});null!=b&&b.bins&&(this.histogramConfig.bins=
b.bins)};k.render=function(){const {state:a,label:b}=this,c="disabled"===a,e=this.classes("esri-classed-color-slider","esri-widget","esri-widget--panel",{["esri-disabled"]:c});return f.jsx("div",{"aria-label":b,class:e},c?null:this.renderContent(this.renderRamp(),"esri-classed-color-slider__slider-container","esri-classed-color-slider__histogram-container"))};k.renderRamp=function(){const {_bgFillId:a,_rampFillId:b,viewModel:c}=this,e=c.getStopInfo();return f.jsx("div",{class:"esri-classed-color-slider__ramp"},
f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg"},f.jsx("defs",null,this.renderRampFillDefinition(b,e),this.renderBackgroundFillDefinition(a)),f.jsx("rect",{x:"0",y:"0",fill:`url(#${a})`,height:"100%",width:"100%"}),f.jsx("rect",{x:"0",y:"0",fill:`url(#${b})`,height:"100%",width:"100%"})))};return h}(v.SmartMappingSliderBase);g.__decorate([q.aliasOf("viewModel.breaks")],d.prototype,"breaks",void 0);g.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],d.prototype,"label",
void 0);g.__decorate([l.property(),u.messageBundle("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")],d.prototype,"messages",void 0);g.__decorate([l.property()],d.prototype,"viewModel",void 0);return d=m=g.__decorate([r.subclass("esri.widgets.smartMapping.ClassedColorSlider")],d)});