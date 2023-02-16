// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../symbols ../../../renderers/support/numberUtils ../../../symbols/support/cimSymbolUtils ../../../symbols/support/utils ./utils ../../support/widgetUtils ../../../support/themeUtils ../../../symbols/SimpleMarkerSymbol ../../../symbols/SimpleLineSymbol".split(" "),function(K,A,v,S,L,r,T,E,M,ha,U,V,W){function X(a,b){const c=a.length-1;return a.map((e,g)=>M.createStopLabel(e,g,c,b))}function F(){F=v._asyncToGenerator(function*(a,
b,c,e,g,l,d){var f=b.legendOptions;f=f&&f.customValues;const h=d||(yield Y(a,c));d=null!=b.minSize&&null!=b.maxSize;c=b.stops&&1<b.stops.length;var m=!!b.target;if(h&&(f||d||c&&!m)){var n=E.isVolumetricSymbol(h),k=null,t=d=null;d=n&&!c?r.round([b.minDataValue,b.maxDataValue]):f||(yield Z(b,h,e,g));f=a?.authoringInfo;var y=(m="univariate-color-size"===f?.type)&&"above-and-below"===f?.univariateTheme;!d&&c&&(d=b.stops.map(p=>p.value),k=b.stops.some(p=>!!p.label),"flow"===a.type&&(d=r.round(d)),k&&(t=
b.stops.map(p=>p.label)));n&&2<d?.length&&!y&&(d=[d[0],d[d.length-1]]);if(!d)return null;m&&5!==d?.length&&(d=N({minSize:d[0],maxSize:d[d.length-1]}));var B=n?aa(a,d):null,C=E.getSymbolOutlineSize(h),D=k?null:X(d,l);return(yield Promise.all(d.map(function(){var p=v._asyncToGenerator(function*(z,q){const u=n?B[q]:yield w(b,h,z,e,g),da=ba(y&&"class-breaks"===a.type?ca(a,q):h,u);return{value:z,symbol:da,label:k?t[q]:D[q],size:u,outlineSize:C}});return function(z,q){return p.apply(this,arguments)}}()))).reverse()}});
return F.apply(this,arguments)}function aa(a,b){a=a?.authoringInfo;const c="univariate-color-size"===a?.type;let e=[12,30];if(c){const g=b[0],l=b[b.length-1];e=b.map(d=>12+(d-g)/(l-g)*18)}c&&"below"===a?.univariateTheme&&e.reverse();return e}function ca(a,b){const c=a.classBreakInfos,e=c.length;b=2>e||!(2<=b)?c[0].symbol.clone():c[e-1].symbol.clone();a.visualVariables.some(g=>"color"===g.type)&&(b.type.includes("3d")?O(b):P(b));return b}function Y(a,b){return G.apply(this,arguments)}function G(){G=
v._asyncToGenerator(function*(a,b){if("flow"===a.type)return M.getSymbolForFlowRenderer(a,b);if("pie-chart"===a.type)return new V({color:null,outline:a.outline?.width?a.outline:new W});let c=null,e=null;"simple"===a.type?c=a.symbol:"class-breaks"===a.type?(c=(a=a.classBreakInfos)&&a[0]&&a[0].symbol,e=1<a.length):"unique-value"===a.type&&(c=(a=a.uniqueValueInfos)&&a[0]&&a[0].symbol,e=1<a.length);if(!c||ea(c))return null;c=c.clone();if(b||e)c.type.includes("3d")?O(c):P(c);return c});return G.apply(this,
arguments)}function ea(a){return a?L.isSymbol3D(a)?a.symbolLayers?a.symbolLayers.some(b=>b&&"fill"===b.type):!1:a.type.includes("fill"):!1}function O(a){"line-3d"===a.type?a.symbolLayers.forEach(b=>{b.material={color:x}}):a.symbolLayers.forEach(b=>{"icon"!==b.type||b.resource&&b.resource.href?b.material={color:Q}:(b.material={color:R},b.outline={color:x,size:1.5})})}function P(a){const b=U.isDarkTheme();if("cim"===a.type)T.applyCIMSymbolColor(a,new S(Q));else if(a.type.includes("line"))a.color=x;
else if(a.color=b?x:R,"simple-marker"===a.type)a.outline?"#ffffff"===a.outline?.color?.toHex()&&(a.outline.color=x):a.outline={color:x,width:1.5}}function Z(a,b,c,e){return H.apply(this,arguments)}function H(){H=v._asyncToGenerator(function*(a,b,c,e){const g=(yield new Promise((f,h)=>K(["../../../renderers/visualVariables/support/visualVariableUtils"],f,h))).getSizeRangeAtScale(a,c,e),l=g&&N(g);if(g||l){var d=l.map(f=>{const h=g.minSize,m=g.maxSize,n=a.minDataValue,k=a.maxDataValue;return f<=h?n:
f>=m?k:(f-h)/(m-h)*(k-n)+n});d=r.round(d);for(let f=1;f<d.length-1;f++){const h=yield fa(a,b,d[f],d[f-1],c,e);h&&(d[f]=h[0],l[f]=h[1])}return d}});return H.apply(this,arguments)}function N(a){const b=a.minSize;a=(a.maxSize-b)/4;const c=[];for(let e=0;5>e;e++)c.push(b+a*e);return c}function fa(a,b,c,e,g,l){return I.apply(this,arguments)}function I(){I=v._asyncToGenerator(function*(a,b,c,e,g,l){const d=yield w(a,b,c,g,l);e=yield w(a,b,e,g,l);var f=r.numDigits(c),h=f.fractional,m=f.integer;let n=f=null;
0<c&&1>c&&(f=10**h,c*=f,m=r.numDigits(c).integer);for(h=m-1;0<=h;h--){var k=10**h;m=Math.floor(c/k)*k;k*=Math.ceil(c/k);null!=f&&(m/=f,k/=f);let t=(m+k)/2;[,t]=r.round([m,t,k],{indexes:[1]});const y=yield w(a,b,m,g,l),B=yield w(a,b,k,g,l),C=yield w(a,b,t,g,l),D=r.percentChange(d,y,e,null),p=r.percentChange(d,B,e,null),z=r.percentChange(d,C,e,null);let q=20>=D.previous,u=20>=p.previous;q&&u&&(D.previous<=p.previous?(q=!0,u=!1):(u=!0,q=!1));q?n=[m,y]:u?n=[k,B]:20>=z.previous&&(n=[t,C]);if(n)break}return n});
return I.apply(this,arguments)}function w(a,b,c,e,g){return J.apply(this,arguments)}function J(){J=v._asyncToGenerator(function*(a,b,c,e,g){const {getSize:l}=yield new Promise((d,f)=>K(["../../../renderers/visualVariables/support/visualVariableUtils"],d,f));return l(a,c,{scale:e,view:g,shape:"simple-marker"===b.type?b.style:null})});return J.apply(this,arguments)}function ba(a,b){a=a.clone();if(L.isSymbol3D(a))E.isVolumetricSymbol(a)||a.symbolLayers.forEach(c=>{"fill"!==c.type&&(c.size=b)});else if("esri.symbols.SimpleMarkerSymbol"===
a.declaredClass)a.size=b;else if("esri.symbols.PictureMarkerSymbol"===a.declaredClass){const c=a.width,e=a.height;a.height=b;a.width=c/e*b}else"esri.symbols.SimpleLineSymbol"===a.declaredClass?a.width=b:"esri.symbols.TextSymbol"===a.declaredClass&&a.font&&(a.font.size=b);return a}const R=[255,255,255],Q=[200,200,200],x=[128,128,128];A.REAL_WORLD_MAX_SIZE=30;A.REAL_WORLD_MIN_SIZE=12;A.getRampStops=function(a,b,c,e,g,l,d){return F.apply(this,arguments)};Object.defineProperties(A,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});