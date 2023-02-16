// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../renderers/support/AuthoringInfo ../../renderers/support/ClassBreakInfo ../../renderers/visualVariables/support/SizeStop ../../renderers/visualVariables/support/visualVariableUtils ./color ./size ./support/utils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/support/aboveAndBelowUtils ../../symbols/support/cimSymbolUtils ../../symbols/support/Symbol3DMaterial".split(" "),
function(w,r,n,F,Q,G,p,u,H,x,v,I,J,q,R,S,T){function U(a){return y.apply(this,arguments)}function y(){y=r._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new n("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new n("univariate-colorsize-visual-variables:missing-parameters","View is required when 'valueExpression' is specified");
if("above-and-below"===a.theme&&a.sizeOptions?.sizeOptimizationEnabled)throw new n("univariate-colorsize-visual-variables:invalid-parameters","sizeOptimizationEnabled cannot be true for 'above-and-below' theme");a.forBinning&&I.verifyBinningParams(a,"univariate-colorsize-visual-variables");const b={...a};var c=a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes;a=q.createLayerAdapter(b.layer,c,a.forBinning);b.layer=a;b.theme=b.theme||b.colorOptions?.theme?b.theme:"high-to-low";if("90-10"===
b.theme)throw new n("univariate-colorsize-visual-variables:not-supported","Only 'high-to-low', 'above-and-below', 'above', 'below' themes are supported.");if(!a)throw new n("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));c=F.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);c=yield J.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=v.verifyBasicFieldValidity(a,
c,"univariate-colorsize-visual-variables:invalid-parameters"))throw a;return b});return y.apply(this,arguments)}function V(a){return z.apply(this,arguments)}function z(){z=r._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new n("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new n("univariate-colorsize-continuous-renderer:missing-parameters",
"View is required when 'valueExpression' is specified");a.forBinning&&I.verifyBinningParams(a,"univariate-colorsize-continuous-renderer");const b={...a};b.symbolType=b.symbolType||"2d";b.colorOptions||(b.colorOptions={});b.colorOptions.isContinuous=b.colorOptions.isContinuous??!1;var c=a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes;a=q.createLayerAdapter(b.layer,c,a.forBinning);b.layer=a;if(!a)throw new n("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+
q.getLayerTypeLabels(c).join(", "));c=F.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);if("above-and-below"===b.theme&&b.symbolOptions){if(b.symbolType.includes("3d-volumetric"))throw new n("univariate-colorsize-continuous-renderer:invalid-parameters","'symbolOptions' is applicable for '2d' and '3d-flat' 'symbolType' only");if("point"!==a.geometryType&&"polygon"!==a.geometryType)throw new n("univariate-colorsize-continuous-renderer:invalid-parameters","'symbolOptions' only apply to layers with 'point' or 'polygon' geometryType");
}c=yield J.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=v.verifyBasicFieldValidity(a,c,"univariate-colorsize-continuous-renderer:invalid-parameters"))throw a;return b});return z.apply(this,arguments)}function K(a,b){"type"in a&&"cim"===a.type?S.applyCIMSymbolColor(a,b):"type"in a&&a.type.includes("3d")?a.symbolLayers.forEach(c=>{"material"in c&&"color"in c.material&&(c.material?c.material.color=b:c.material=new T.Symbol3DMaterial({color:b}))}):
"color"in a&&(a.color=b)}function L(a,b,c=!0){const d=b?.authoringInfo?.clone(),e=b.size.visualVariables.map(g=>g.clone());c?e.push(b.color.visualVariable.clone()):d.visualVariables=d.visualVariables.filter(g=>"size"===g.type);e.push(...a.visualVariables.filter(g=>"target"in g&&"outline"===g.target).map(g=>g.clone()));a.authoringInfo=d;a.visualVariables=e}function W(a,b,c,d){return A.apply(this,arguments)}function A(){A=r._asyncToGenerator(function*(a,b,c,d){const e=b[0];b=b[1];const g=Math.round((b-
e)/2)+e,h=a.clone();h.stops=[new p({value:c[0],size:b}),new p({value:c[1],size:g}),new p({value:c[2],size:e}),new p({value:c[3],size:g}),new p({value:c[4],size:b})];a.stops=[new p({value:d[0],size:u.getSize(h,d[0])}),new p({value:d[1],size:u.getSize(h,d[1])}),new p({value:d[2],size:u.getSize(h,d[2])}),new p({value:d[3],size:u.getSize(h,d[3])}),new p({value:d[4],size:u.getSize(h,d[4])})]});return A.apply(this,arguments)}function X(a,b,c,d){return B.apply(this,arguments)}function B(){B=r._asyncToGenerator(function*(a,
b,c,d){a=a.find(h=>"width-and-depth"!==h.axis&&!h.target);const e="number"===typeof a?.minSize?a?.minSize:null,g="number"===typeof a?.maxSize?a?.maxSize:null;if(null!=a?.minDataValue&&null!=e&&null!=g)if(d)if("above-and-below"===d){a.minDataValue=null;a.maxDataValue=null;a.minSize=null;a.maxSize=null;d=v.createStopValuesForAboveBelow(c);const h=v.clampAboveAndBelowStopValues(d,c);yield W(a,[e,g],d,h);b.stops.forEach((f,l)=>f.value=h[l])}else{const {minDataValue:h,maxDataValue:f}=a,l=v.createDefaultStopValues(h,
f,5);b.stops.forEach((m,k)=>m.value=l[k]);a.minDataValue=l[0];a.maxDataValue=l[l.length-1]}else a.minDataValue=b.stops[0].value,a.maxDataValue=b.stops[b.stops.length-1].value});return B.apply(this,arguments)}function M(a){return C.apply(this,arguments)}function C(){C=r._asyncToGenerator(function*(a){a=yield U(a);var b=H.createVisualVariable,c={...a},d=c.colorOptions,e=c.theme||d?.theme,g=c.legendOptions||c.colorOptions?.legendOptions;delete c.sizeOptions;delete c.colorOptions;b=yield b.call(H,{...c,
...d,statistics:c.statistics,theme:e,legendOptions:g});const {visualVariable:h,statistics:f}=b;c=x.createVisualVariables;d={...a};const {sizeOptions:l,theme:m}=d;e=d.legendOptions||d.sizeOptions?.legendOptions;delete d.sizeOptions;delete d.colorOptions;var k=yield c.call(x,{...d,...l,statistics:f||d.statistics,theme:"above-and-below"===m?null:m,legendOptions:e}),t=k.visualVariables;yield X(t,h,f,a.theme);c=k.basemapId;d=k.basemapTheme;e=b.defaultValuesUsed;g={visualVariable:h,colorScheme:b.colorScheme};
t={visualVariables:t,sizeScheme:k.sizeScheme};const {theme:N,minValue:Y,maxValue:Z}=a;a=b.authoringInfo.visualVariables[0].clone();k=k.authoringInfo.visualVariables[0].clone();"above-and-below"===N&&(b=b.visualVariable.stops,a.minSliderValue=k.minSliderValue=Y??b[0].value,a.maxSliderValue=k.maxSliderValue=Z??b[b.length-1].value,k.theme="above-and-below");a=new Q({type:"univariate-color-size",univariateTheme:N,visualVariables:[a,k]});return{basemapId:c,basemapTheme:d,statistics:f,defaultValuesUsed:e,
color:g,size:t,authoringInfo:a}});return C.apply(this,arguments)}function D(){D=r._asyncToGenerator(function*(a){return O(a)});return D.apply(this,arguments)}function O(a){return E.apply(this,arguments)}function E(){E=r._asyncToGenerator(function*(a){a=yield V(a);var b=x.createContinuousRenderer,c={...a},d={...c.sizeOptions};delete c.sizeOptions;delete c.colorOptions;delete d.sizeOptimizationEnabled;const {renderer:e,statistics:g,defaultValuesUsed:h}=yield b.call(x,{...c,...d});b={...a};c=b.symbolType;
d=c.includes("3d-volumetric");delete b.symbolType;delete b.defaultSymbolEnabled;if(b.worldScale=d)b.sizeOptions={...b.sizeOptions},b.sizeOptions.axis="3d-volumetric-uniform"===c?"all":"height";b.statistics=g;b=yield M(b);if("above-and-below"===a.theme){var f=a.symbolOptions,l=a.layer;c=f?.symbols?"custom":f?.symbolStyle;var m=a.colorOptions?.isContinuous;L(e,b,m);if(c||!m){({stops:d}=b.size.visualVariables[0]);l=l.geometryType;!f?.symbolStyle&&!f?.symbols||"point"!==l&&"polygon"!==l?(f=e.classBreakInfos[0].symbol,
f={above:f.clone(),below:f.clone()}):f=f.symbols||R.getAboveAndBelowSymbols(f.symbolStyle);const {above:k,below:t}=f;m||(m=b.color.colorScheme.colors,f=m[0],K(k,m[m.length-1]),K(t,f));e.classBreakInfos=[new G({minValue:-P,maxValue:d[2].value,symbol:t}),new G({minValue:d[2].value,maxValue:P,symbol:k})];c&&(e.authoringInfo.univariateSymbolStyle=c)}}else L(e,b);return{renderer:e,statistics:g,defaultValuesUsed:h,color:a.colorOptions?.isContinuous||"above-and-below"!==a.theme?b.color:null,size:b.size,
basemapId:b.basemapId,basemapTheme:b.basemapTheme}});return E.apply(this,arguments)}const P=2**53-1;w.createContinuousRenderer=function(a){return D.apply(this,arguments)};w.createRenderer=O;w.createVisualVariables=M;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});