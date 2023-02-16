// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/floatRGBA","../../core/mathUtils"],function(n,q,r){n.rasterizeDash=function(e,a){var f="Butt"===a,b="Square"===a;a=!f&&!b;1===e.length%2&&(e=[...e,...e]);var c=0;for(var d of e)c+=d;d=Math.round(15.5*c);c=new Float32Array(31*d);let l=0,k=0,g=.5,p=!0;for(var m of e){l=k;for(k+=15.5*m;g<=k;){for(e=.5;31>e;){const h=a?(e-15.5)*(e-15.5):Math.abs(e-15.5);c[(e-.5)*d+g-.5]=p?f?Math.max(Math.max(l+7.75-g,h),Math.max(g-k+7.75,h)):h:a?Math.min((g-l)*(g-l)+h,(g-k)*(g-k)+h):b?Math.min(Math.max(g-
l,h),Math.max(k-g,h)):Math.min(Math.max(g-l+7.75,h),Math.max(k+7.75-g,h));e++}g++}p=!p}f=c.length;m=new Uint8Array(4*f);for(b=0;b<f;++b)q.packFloatRGBA((a?Math.sqrt(c[b]):c[b])/15.5,m,4*b);return[m,d,31]};n.rasterizeSimpleFill=function(e,a,f){f=r.nextPowerOfTwo(Math.ceil(f));var b="vertical"===a||"horizontal"===a||"cross"===a||"esriSFSCross"===a||"esriSFSVertical"===a||"esriSFSHorizontal"===a?8*f:16*f;const c=2*f;e.width=b;e.height=b;const d=e.getContext("2d");d.strokeStyle="#FFFFFF";d.lineWidth=
f;d.beginPath();if("vertical"===a||"cross"===a||"esriSFSCross"===a||"esriSFSVertical"===a)d.moveTo(b/2,-c),d.lineTo(b/2,b+c);if("horizontal"===a||"cross"===a||"esriSFSCross"===a||"esriSFSHorizontal"===a)d.moveTo(-c,b/2),d.lineTo(b+c,b/2);if("forward-diagonal"===a||"diagonal-cross"===a||"esriSFSDiagonalCross"===a||"esriSFSForwardDiagonal"===a)d.moveTo(-c,-c),d.lineTo(b+c,b+c),d.moveTo(b-c,-c),d.lineTo(b+c,c),d.moveTo(-c,b-c),d.lineTo(c,b+c);if("backward-diagonal"===a||"diagonal-cross"===a||"esriSFSBackwardDiagonal"===
a||"esriSFSDiagonalCross"===a)d.moveTo(b+c,-c),d.lineTo(-c,b+c),d.moveTo(c,-c),d.lineTo(-c,c),d.moveTo(b+c,b-c),d.lineTo(b-c,b+c);d.stroke();a=d.getImageData(0,0,e.width,e.height);a=new Uint8Array(a.data);for(b=0;b<a.length;b+=4)f=a[b+3]/255,a[b]*=f,a[b+1]*=f,a[b+2]*=f;return[a,e.width,e.height]};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});