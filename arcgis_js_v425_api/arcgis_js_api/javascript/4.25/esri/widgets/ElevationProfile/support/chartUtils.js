// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../intl ../../../core/arrayUtils ../../../core/handleUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/unitFormatUtils ../../../core/unitUtils ../css ./constants ./intlUtils ./niceScale ../../support/chartUtils ../../support/widgetUtils ../../../support/themeUtils ../../../intl/substitute ../../../intl/number".split(" "),function(x,L,ma,M,w,l,N,y,B,O,u,P,Q,R,z,S,T,U){function A(){A=L._asyncToGenerator(function*(a){const c=
yield R.loadChartsModule(),{am4core:b,am4charts:f}=c;N.throwIfAborted(a.abortOptions);var {options:d}=b;d.minPolylineStep=.5;d.autoSetClassName=!0;d.animationsEnabled=!1;var e=S.isDarkTheme();d=e?V:C;e&&b.useTheme(c.am4themes_dark);const g=b.create(a.container,f.XYChart);g.arrangeTooltips=!1;g.preloader.disabled=!0;g.zoomOutButton.disabled=!0;e=z.isRTL(a.container);g.rtl=e;g.padding(d.paddingTop,e?d.paddingLeft:d.paddingRight,d.paddingBottom,e?d.paddingRight:d.paddingLeft);e=g.plotContainer.background;
e.strokeWidth=0;e.strokeOpacity=0;e.stroke=null;e=g.xAxes.push(new f.ValueAxis);const k=g.yAxes.push(new f.ValueAxis),h={params:a,amCharts4Index:c,amChart:g,xAxis:e,yAxis:k,series:new Map,data:null,messages:null,theme:d,zooming:!1,pointerIsOver:!1};g.cursor=W(h);X(h);Y(h);Z(h);const n=[aa(h,a.onRangeChange),ba(h,a.onCursorPositionChange),ca(h)];let m=null,r=!1;const p=()=>{l.isNone(m)||("undefined"!==typeof window&&"cancelIdleCallback"in window?window.cancelIdleCallback(m):clearTimeout(m),m=null)};
return{...h,destroy(){r=!0;p();w.handlesGroup(n).remove();g.dispose()},update(q){if(q.data!==h.data||q.messages!==h.messages)if(p(),!r){var v=()=>{r||(m=null,da(h,q))};m="undefined"!==typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(v,{timeout:30}):setTimeout(v,30)}},zoomOut(){r||(h.yAxis.zoom({start:0,end:1},!1,!0),h.xAxis.zoom({start:0,end:1},!1,!0))}}});return A.apply(this,arguments)}function W(a){a=new a.amCharts4Index.am4charts.XYCursor;a.trackable=!0;a.lineY.disabled=
!0;a.behavior="zoomXY";return a}function X(a){const c=a.theme,b=a.amChart.tooltip,{am4core:f}=a.amCharts4Index;b.id="series-tooltip";b.fitPointerToBounds=!0;b.pointerOrientation="vertical";b.zIndex=-1;b.getFillFromObject=!1;b.label.fontSize=c.seriesTooltipFontSize;b.label.fill=f.color(c.seriesTooltipLabelColor);b.label.padding(c.seriesTooltipPaddingVertical,c.seriesTooltipPaddingHorizontal,c.seriesTooltipPaddingVertical,c.seriesTooltipPaddingHorizontal);b.background.cornerRadius=c.tooltipBorderRadius;
b.background.stroke=null;b.background.fill=f.color(c.seriesTooltipBackgroundColor);b.background.padding(0,0,0,0);b.adapter.add("dy",()=>c.seriesTooltipSpacing*(0>=b.background.pointerY?1:-1));z.isRTL(a.params.container)&&(b.label.textAlign="middle")}function Y(a){const {xAxis:c,theme:b}=a,{am4core:f}=a.amCharts4Index;c.numberFormatter=D(a,"distance");c.strictMinMax=!0;c.cursorTooltipEnabled=!1;c.title.visible=!1;a=c.renderer;a.line.visible=!1;a.minGridDistance=b.xAxisMinGridDistance;a.minLabelPosition=
b.xAxisMinLabelPosition;a.maxLabelPosition=b.xAxisMaxLabelPosition;a.fontWeight=b.axisFontWeight;a.fontSize=b.axisFontSize;a.baseGrid.disabled=!0;var d=a.labels.template;d.fontSize=b.axisLabelsFontSize;d.fontWeight=b.axisLabelsFontWeight;d.fill=f.color(b.axisLabelsColor);d.paddingTop=b.xAxisLabelsSpacing;d.horizontalCenter="left";d.paddingLeft=0;d=c.tooltip;d.id="axis-tooltip";d.background.fill=f.color(b.axisTooltipBackgroundColor);d.background.stroke=null;d.background.padding(0,0,0,0);d.label.fontSize=
b.axisTooltipFontSize;d.label.fill=f.color(b.axisTooltipLabelColor);d.label.padding(b.axisTooltipPaddingTop,b.axisTooltipPaddingHorizontal,b.axisTooltipPaddingBottom,b.axisTooltipPaddingHorizontal);a=a.grid.template;a.strokeOpacity=1;a.stroke=f.color(b.axisGridStroke)}function Z(a){const {yAxis:c,theme:b}=a,{am4core:f}=a.amCharts4Index;c.numberFormatter=D(a,"elevation");c.title.visible=!1;c.cursorTooltipEnabled=!1;c.strictMinMax=!0;c.baseValue=u.getConfig().noDataValue;const d=c.renderer;d.inside=
!0;d.line.opacity=0;d.line.visible=!1;d.minGridDistance=b.yAxisMinGridDistance;d.minLabelPosition=b.yAxisMinLabelPosition;d.maxLabelPosition=b.yAxisMaxLabelPosition;d.fontWeight=b.axisFontWeight;d.fontSize=b.axisFontSize;d.baseGrid.disabled=!0;const e=d.labels.template;e.fontSize=b.axisLabelsFontSize;e.fontWeight=b.axisLabelsFontWeight;e.fill=f.color(b.axisLabelsColor);e.verticalCenter="bottom";e.paddingLeft=b.yAxisLabelSpacing;e.paddingBottom=0;const g=d.grid.template;g.strokeOpacity=1;g.stroke=
f.color(b.axisGridStroke);z.isRTL(a.params.container)&&(d.opposite=!0,e.textAlign="middle",e.paddingLeft=0,e.paddingRight=b.yAxisLabelSpacing)}function da(a,{data:c,messages:b}){var {htmlContainer:f}=a.amChart;if(f){var d=l.isSome(c)&&c.refined;a.amChart.cursor.disabled=!d;f.classList.toggle(O.CHART_CSS.cursorEnabled,d);f=a.data!==c;d=l.applySome(a.data,e=>e.effectiveUnits)!==l.applySome(c,e=>e.effectiveUnits);a.data=c;a.messages=b;f&&(ea(a),fa(a));d&&(a.yAxis.invalidateLabels(),a.xAxis.invalidateLabels());
t(a)}}function ea(a){const {xAxis:c,yAxis:b}=a,{minX:f,maxX:d,minY:e,maxY:g}=E({data:a.data,pixelWidth:c.pixelWidth,pixelHeight:b.pixelHeight});c.min=f;c.max=d;b.min=e;b.max=g}function E({data:a,pixelWidth:c,pixelHeight:b}){if(l.isNone(a))return F;var f=a.statistics;const d=l.applySome(f,h=>h.maxDistance);let e=l.applySome(f,h=>h.minElevation);var g=l.applySome(f,h=>h.maxElevation);if(l.isNone(d)||l.isNone(e)||l.isNone(g))return F;f=Math.max(d-0,.001);let k=Math.max(g-e,.001);g=a.effectiveUnits;a.dynamicElevationRange&&
(g=B.convertUnit(f,g.distance,g.elevation),k=Math.max(k,g/u.getConfig().maxChartRatio));e-=.02*k;g=e+k+.02*k;[e,g]=Q.niceScale(e,g,10);k=g-e;return a.uniformScaling?G({data:a,bounds:{minX:0,maxX:d,minY:e,maxY:g},pixelWidth:c,pixelHeight:b,centered:!0}):{minX:0,maxX:0+f,minY:e,maxY:e+k}}function G({data:a,bounds:c,pixelWidth:b,pixelHeight:f,centered:d}){if(l.isNone(a))return c;let {minX:e,maxX:g,minY:k,maxY:h}=c;c=g-e;a=a.effectiveUnits;b=B.convertUnit(h-k,a.elevation,a.distance)/f/(c/b);1<=b?[e,g]=
H([e,g],b,d):[k,h]=H([k,h],1/b,d);return{minX:e,maxX:g,minY:k,maxY:h}}function H([a,c],b,f){b*=c-a;return f?(a=(a+c)/2-b/2,[a,a+b]):[a,a+b]}function fa(a){const {amChart:c,data:b}=a;if(l.isNone(b)||0===b.lines.length)c.series.clear();else{var f=new Map,d=new Set(c.series.values),e=b.lines.length;for(let g=0;g<e;g++){const k=b.lines[g];let h=a.series.get(k.id);h?(l.applySome(h.fill,m=>d.delete(m)),d.delete(h.line)):(h=ha(a,k),l.applySome(h.fill,m=>c.series.push(m)),c.series.push(h.line));f.set(h.id,
h);const n=e-g-1;l.applySome(h.fill,m=>m.zIndex=n);h.line.zIndex=e+n;ia(a,h,k)}a.series=f;for(const g of d)c.series.removeValue(g)}}function ia(a,{line:c,fill:b},f){const {theme:d}=a;({am4core:a}=a.amCharts4Index);const {r:e,g,b:k,a:h}=f.color,n=a.color({r:e,g,b:k,a:h}),m=l.unwrapOr(f.samples,[]),r=0<m.length;c.stroke=n;c.visible=r;l.applySome(b,p=>{p.visible=r;p.fill=n.lighten(d.seriesFillLighten)});f=m.length;a=c.data;if(a.length===f){let p=!1;for(let q=0;q<f;++q){const v=a[q],I=m[q];p=p||l.isSome(v.elevation)!==
l.isSome(I.elevation);ja(v,I)}p?(c.invalidateData(),l.applySome(b,q=>q.invalidateData())):(c.invalidateRawData(),l.applySome(b,q=>q.invalidateRawData()))}else c.data=m,l.applySome(b,p=>p.data=m)}function ja(a,c){a.x=c.x;a.y=c.y;a.z=c.z;a.distance=c.distance;a.elevation=c.elevation}function ha(a,c){const {id:b}=c,f=J(a,`${"line"}-${b}`);f.strokeWidth=c.chartStrokeWidth;f.dy=c.chartStrokeOffsetY;let d=null;c.chartFillEnabled&&(d=J(a,`${"fill"}-${b}`),d.fillOpacity=1);return{id:b,line:f,fill:d}}function J(a,
c){a=new a.amCharts4Index.am4charts.LineSeries;a.id=c;a.showOnInit=!1;a.simplifiedProcessing=!0;a.minDistance=.5;a.excludeFromTotal=!0;a.clickable=!1;a.contextMenuDisabled=!0;a.cursorHoverEnabled=!1;a.cursorTooltipEnabled=!1;a.connect=!1;a.fill=null;a.stroke=null;a.dataFields.valueX="distance";a.dataFields.valueY="elevation";return a}function aa(a,c){const {amChart:b,xAxis:f,yAxis:d}=a;let e=!1;const g=()=>{const {data:n}=a;if(e&&!l.isNone(n)&&n.uniformScaling){e=!1;var {minX:m,maxX:r,minY:p,maxY:q}=
G({data:a.data,bounds:{minX:f.minZoomed,maxX:f.maxZoomed,minY:d.minZoomed,maxY:d.maxZoomed},pixelWidth:f.pixelWidth,pixelHeight:d.pixelHeight,centered:!0});f.zoomToValues(m,r,!0);d.zoomToValues(p,q,!0);b.validate();t(a)}},k=()=>{c(a.xAxis.zoomFactor,a.yAxis.zoomFactor)},h=[b.events.on("down",()=>{a.zooming=!0;t(a)}),b.events.on("up",()=>{a.zooming=!1;t(a)}),b.cursor.events.on("zoomended",()=>{e=!0}),f.events.on("startendchanged",g),d.events.on("startendchanged",g),f.events.on("rangechangeended",k),
d.events.on("rangechangeended",k)];return w.makeHandle(()=>{h.forEach(n=>n.dispose())})}function ca({xAxis:a,yAxis:c}){const b=d=>()=>{d.renderer.grid.each(e=>{e.visible="none"!==e.dataItem.label.dom.getAttribute("display")})},f=[a.events.on("rangechangeended",b(a)),a.events.on("validated",b(a)),c.events.on("rangechangeended",b(c)),c.events.on("validated",b(c))];return w.makeHandle(()=>{f.forEach(d=>d.dispose())})}function ba(a,c){const {amChart:b,xAxis:f,yAxis:d}=a,{cursor:e,events:g}=b,k=()=>{a.pointerIsOver=
!1;t(a);c(null,null)},h=[e.events.on("cursorpositionchanged",()=>{if(a.pointerIsOver){t(a);var n=f.toAxisPosition(e.xPosition),m=d.toAxisPosition(e.yPosition);c(n,m)}}),g.on("over",()=>{a.pointerIsOver=!0;t(a)}),g.on("out",k),g.on("blur",k)];return w.makeHandle(()=>{h.forEach(n=>n.dispose())})}function t(a){const {amChart:c,xAxis:b,data:f,theme:d,zooming:e,pointerIsOver:g}=a;a.amChart.tooltip.hide();a.xAxis.hideTooltip();if(g&&!e&&!l.isNone(f)&&f.refined){var k=ka(a);if(l.isSome(k)){const {cursor:n,
tooltip:m}=c;n.show(0);n.validate();m.text=k.text;m.show(0);m.validate();m.pointerOrientation=30>k.y-m.contentHeight-d.seriesTooltipSpacing?"up":"down";m.pointTo(k,!0);m.validate();k=b.tooltip;{const {data:r,messages:p}=a;if(l.isNone(r)||l.isNone(p))a="";else{var h=r.lines[0];a=h?K(a,h):null;h=u.getConfig().formatPrecision;a=l.isSome(a)?y.formatDecimal(p,a.distance,r.effectiveUnits.distance,h):"-"}}k.text=a;k.show(0);k.validate()}}}function ka(a){const {amChart:c,yAxis:b,data:f}=a;if(l.isNone(f))return null;
const d=f.lines.map(n=>({line:n,y:l.applySome(K(a,n),m=>m.elevation)})).sort(la),e=d.length?d[0].y:null;if(l.isNone(e))return null;const g=c.cursor,k=b.measuredHeight,h=k+c.pixelPaddingTop;return{text:d.map(({y:n,line:m})=>{{const {data:p,messages:q}=a;if(l.isNone(p)||l.isNone(q))m="";else{var r=u.getConfig().formatPrecision;n=T.substitute(q.chartTooltip,{name:P.getTranslatedLineTitle(m,q),elevation:l.isSome(n)?y.formatDecimal(q,n,p.effectiveUnits.elevation,r):u.NOT_AVAILABLE});m=`[${m.color.toHex()}]\u25cf[/] ${n}`}}return m}).join("\n"),
x:g.point.x+g.parent.pixelX+c.pixelPaddingLeft,y:h-b.valueToPosition(e)*k}}function la({y:a},{y:c}){return l.isNone(a)?1:l.isNone(c)?-1:c-a}function D(a,c){const b=a.xAxis.numberFormatter.clone();b.format=(f,d,e)=>{const {messages:g,data:k}=a;return l.isNone(g)||l.isNone(k)||"string"===typeof f?"":`${U.formatNumber(f,{maximumFractionDigits:e})} ${y.unitName(g,k.effectiveUnits[c],"abbr")}`};return b}function K({amChart:a,xAxis:c},b){b=l.unwrapOr(b.samples,[]);if(0===b.length)return null;a=c.toAxisPosition(a.cursor.xPosition);
c=c.positionToValue(a);return M.binaryFindClosest(b,c,f=>f.distance)}const C={sideSpacing:15,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,axisFontSize:9,axisFontWeight:"400",axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:"#a9a9a9",axisTooltipFontSize:12,axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",axisTooltipPaddingTop:3,axisTooltipPaddingBottom:3,axisTooltipPaddingHorizontal:4,xAxisMinGridDistance:50,xAxisLabelsSpacing:6,
xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:4,yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:"#f8f8f8",seriesTooltipLabelColor:"#323232",seriesFillLighten:.9,seriesTooltipSpacing:6,seriesTooltipPaddingVertical:4,seriesTooltipPaddingHorizontal:4,tooltipBorderRadius:0},V={...C,axisGridStroke:"#323232",axisLabelsColor:"#a9a9a9",axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",
seriesTooltipBackgroundColor:"#323232",seriesTooltipLabelColor:"#f8f8f8",seriesFillLighten:-.75},F={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};x.createChart=function(a){return A.apply(this,arguments)};x.getAdjustedBounds=E;Object.defineProperties(x,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});