// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Slider/SliderViewModel ./support/utils".split(" "),function(u,h,f,k,g,z,x,y,v){g=function(w){function t(a){var b=w.call(this,a)||this;b._initialStopValues=[];b._max=null;b._min=null;b.hasTimeData=!1;b.inputFormatFunction=(d,c)=>"max"===c?b.getUnzoomedMax().toString():
"min"===c?b.getUnzoomedMin().toString():d.toString();b.inputParseFunction=null;b.labelFormatFunction=d=>{if(b.hasTimeData)return v.formatDateLabel(d);const {max:c,min:e,precision:l}=u._assertThisInitialized(b);return v.formatNumberLabel(parseFloat(d.toFixed(10<c-e?2:l)))};b.thumbsConstrained=!1;b.zoomingEnabled=!0;return b}u._inheritsLoose(t,w);var m=t.prototype;m.getStopIndexFromValueIndex=function(a){const {stops:b}=this,d=this.values[a];return 0===a?d<=this.values[1]?0:b.length-1:1===a?this.values[0]>=
d?0:b.length-1:null};m.getStopChanges=function(a,b){const d=this.stops;a=this.getStopIndexFromValueIndex(a);const c=this.getValuesFromStops();c[a]=b;const [e,l]=[c[0],c[c.length-1]].sort((q,n)=>q>n?1:-1),r=l-e,p=d.length-1;return c.map((q,n)=>({index:n,value:this.toPrecision(e+n*r/p)}))};m.setValue=function(a,b){const {max:d,min:c,values:e}=this,l=e[a];isNaN(b)||l===b||b>d||b<c||(e[a]=this.toPrecision(b),this._set("values",[...e]),a=e.slice().sort((r,p)=>r>p?1:-1),a=v.getStopChanges(a[0],a[a.length-
1],this._initialStopValues),this.updateStops(a),this.updateBreaks(),this.notifyChange("labels"))};m.getValuesFromStops=function(a){return(a||this.stops)?.map(b=>b.hasOwnProperty("ratio")?b.ratio:b.value)};m.updateBreaks=function(){const {breaks:a,values:b}=this;a?.length&&b.slice().sort((d,c)=>d>c?1:-1).forEach((d,c)=>{a[c].max=d;f.isSome(a[c+1])&&(a[c+1].min=d)})};m.updateBreakMax=function(a){const {breaks:b,max:d,min:c}=this;!isNaN(a)&&d!==a&&f.isSome(c)&&a>c&&b?.length&&(b[b.length-1].max=a)};
m.updateBreakMin=function(a){const {breaks:b,max:d,min:c}=this;!isNaN(a)&&c!==a&&f.isSome(d)&&a<d&&b?.length&&(b[0].min=a)};m.updateStops=function(a){const {stops:b}=this,d=this.getValuesFromStops();if(d?.length){for(const c of a)d[c.index]=c.value;b.forEach((c,e)=>{c.hasOwnProperty("ratio")?c.ratio=d[e]:c.value=d[e]})}};m.getUnzoomedMax=function(){return this.zoomOptions&&f.isSome(this._max)?this._max:this.max};m.getUnzoomedMin=function(){return this.zoomOptions&&f.isSome(this._min)?this._min:this.min};
m._storeZoomMax=function(a,b){this._max=b;this.setMax(a)};m._storeZoomMin=function(a,b){this._min=b;this.setMin(a)};u._createClass(t,[{key:"breaks",set:function(a){this._set("breaks",a);this.notifyChange("max");this.notifyChange("min")}},{key:"stops",set:function(a){if(a?.length){const {max:b,min:d}=this,c=this.getValuesFromStops(a),e={};f.isSome(d)&&c.some(l=>l<d)&&(e.min=Math.min(...c));f.isSome(b)&&c.some(l=>l>b)&&(e.max=Math.max(...c));this.set({...e});this._initialStopValues=c}else this._initialStopValues=
null;this._set("stops",a||null);this.notifyChange("values")}},{key:"labels",get:function(){var {values:a}=this;a=a&&a.length?a.map((c,e)=>this.getLabelForValue(c,"value",e)):[];const b=this.getUnzoomedMax(),d=this.getUnzoomedMin();return{max:this.getLabelForValue(b,"max"),min:this.getLabelForValue(d,"min"),values:a}}},{key:"max",get:function(){const {breaks:a}=this;return a?.length?a[a.length-1].max:this.max},set:function(a){var {zoomOptions:b}=this;if(b&&f.isSome(b.max)){const d=this.values;let c=
b.max;a<c&&(c=a,b.max=a);if(d&&d.length)for(b=0;b<d.length;b++)a<d[b]&&this.setValue(b,a);this._storeZoomMax(c,a)}else this.updateBreakMax(a),this.setMax(a);this.notifyChange("labels")}},{key:"min",get:function(){const {breaks:a}=this;return a?.length?a[0].min:this.min},set:function(a){var {zoomOptions:b}=this;if(b&&f.isSome(b.min)){const d=this.values;let c=b.min;a>c&&(c=a,b.min=a);if(d&&d.length)for(b=0;b<d.length;b++)a>d[b]&&this.setValue(b,a);this._storeZoomMin(c,a)}else this.updateBreakMin(a),
this.setMin(a);this.notifyChange("labels")}},{key:"state",get:function(){const {max:a,min:b,values:d}=this;return f.isSome(a)&&f.isSome(b)&&0<d.length?"ready":"disabled"}},{key:"values",get:function(){const {breaks:a,stops:b}=this;if(!a&&!b)return[];if(a?.length){var d=a.map(c=>c.max);d.pop();return d}if(2>b?.length)return[];d=this.getValuesFromStops();return[d[0],d[d.length-1]]}},{key:"zoomOptions",set:function(a){const {zoomingEnabled:b,zoomOptions:d}=this;if(b){if(d){var c=f.isSome(this._max)?
this._max:this.max;const e=f.isSome(this._min)?this._min:this.min;if(a){const {max:l,min:r}=a,p=f.isSome(l),q=f.isSome(r),n=p?a.max:c;c=p?c:null;this._storeZoomMin(q?a.min:e,q?e:null);this._storeZoomMax(n,c)}else this.setMax(c),this.setMin(e),this._max=this._min=null}else if(a){const {max:e,min:l}=a;f.isSome(l)&&this._storeZoomMin(a.min,this.min);f.isSome(e)&&this._storeZoomMax(a.max,this.max)}this._set("zoomOptions",a);this.notifyChange("max");this.notifyChange("min")}}}]);return t}(y);h.__decorate([k.property()],
g.prototype,"breaks",null);h.__decorate([k.property()],g.prototype,"stops",null);h.__decorate([k.property()],g.prototype,"hasTimeData",void 0);h.__decorate([k.property()],g.prototype,"inputFormatFunction",void 0);h.__decorate([k.property()],g.prototype,"inputParseFunction",void 0);h.__decorate([k.property()],g.prototype,"labelFormatFunction",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"labels",null);h.__decorate([k.property()],g.prototype,"max",null);h.__decorate([k.property()],g.prototype,
"min",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"state",null);h.__decorate([k.property()],g.prototype,"thumbsConstrained",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"values",null);h.__decorate([k.property()],g.prototype,"zoomingEnabled",void 0);h.__decorate([k.property()],g.prototype,"zoomOptions",null);return g=h.__decorate([x.subclass("esri.widgets.smartMapping.SmartMappingSliderViewModel")],g)});