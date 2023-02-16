// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/string ../../core/promiseUtils ../../geometry/support/jsonUtils ../../core/screenUtils ../support/Symbol3DAnchorPosition2D ../../request ./utils ../support/cimSymbolUtils ./cimAnalyzer ./Rasterizer ./TextRasterizer".split(" "),function(B,Q,R,D,t,S,T,q,U,F,V,W){function X(l){return(l?Object.keys(l):[]).map(r=>({name:r,alias:r,type:"string"===typeof l[r]?"esriFieldTypeString":"esriFieldTypeDouble"}))}function Y(l){if(!(l&&l.data&&l.data.symbol))return null;switch(l.data.symbol.type){case "CIMPointSymbol":case "CIMTextSymbol":return"esriGeometryPoint";
case "CIMLineSymbol":return"esriGeometryPolyline";case "CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function C(l,r,a,b){if("function"===typeof l.materialHash){const e=l.materialHash;r=e(r,a,b);l=F.analyzeCIMResource(l.cim,l.materialOverrides)}else r=l.materialHash,l=l.cim;return{analyzedCIM:l,hash:r}}(function(l){l.Legend="legend";l.Preview="preview"})(B.GeometryStyle||(B.GeometryStyle={}));const E=(l,r,a)=>l&&l.targetSize?a?l.targetSize/t.pt2px(Math.max(a.frame.xmax-a.frame.xmin,
a.frame.ymax-a.frame.ymin)):l.targetSize/r.referenceSize:l&&l.scaleFactor?l.scaleFactor:1,G={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,
0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};let Z=function(){function l(a,b){this._spatialReference=a;this._avoidSDF=b;this._resourceCache=new Map;this._rasterizer=new V;this._textRasterizer=new W.TextRasterizer;this._pictureMarkerCache=new Map}var r=l.prototype;r.rasterizeCIMSymbolAsync=async function(a,b,e,f,c,k,g,d){f=f||(b?null!=b.centroid?
"esriGeometryPolygon":D.getJsonType(b.geometry):null)||Y(a);a=await this.analyzeCIMSymbol(a,b?X(b.attributes):null,e,f,d);return this.rasterizeCIMSymbol(a,b,f,c,k,g)};r.analyzeCIMSymbol=async function(a,b,e,f,c){const k=[];await F.analyzeCIMSymbol(a.data,b?{geometryType:f,spatialReference:this._spatialReference,fields:b}:null,k,this._avoidSDF);R.throwIfAborted(c);let g;for(const d of k){if("CIMPictureMarker"===d.cim.type||"CIMPictureFill"===d.cim.type||"CIMPictureStroke"===d.cim.type)g||(g=[]),g.push(this.fetchPictureMarkerResource(d,
c));e&&"text"===d.type&&"string"===typeof d.text&&-1<d.text.indexOf("[")&&(d.text=q.createLabelOverrideFunction(e,d.text,d.cim.textCase))}g&&await Promise.all(g);return k};r.fetchPictureMarkerResource=async function(a,b){const e=a.materialHash;this._pictureMarkerCache.get(e)||(a=(await T(a.cim.url,{responseType:"image",signal:b&&b.signal})).data,this._pictureMarkerCache.set(e,a))};r.rasterizeCIMSymbol=function(a,b,e,f,c,k){const g=[];for(const h of a){f&&"function"===typeof f.scaleFactor&&(f.scaleFactor=
f.scaleFactor(b,c,k));a=this._getRasterizedResource(h,b,e,f,c,k);if(!a)continue;let n=0,m=a.anchorX||0,p=a.anchorY||0,x=!1,u=0;var d=0;if("esriGeometryPoint"===e)if(d=E(f,h,null),u=q.evaluateValueOrFunction(h.offsetX,b,c,k)*d||0,d=q.evaluateValueOrFunction(h.offsetY,b,c,k)*d||0,"marker"===h.type)n=q.evaluateValueOrFunction(h.rotation,b,c,k)||0,x=h.rotateClockwise?h.rotateClockwise:!1;else if("text"===h.type){n=q.evaluateValueOrFunction(h.angle,b,c,k)||0;if(void 0!==h.horizontalAlignment)switch(h.horizontalAlignment){case "left":m=
-.5;break;case "right":m=.5;break;default:m=0}if(void 0!==h.verticalAlignment)switch(h.verticalAlignment){case "top":p=.5;break;case "bottom":p=-.5;break;case "baseline":p=-.25;break;default:p=0}}null!=a&&g.push({angle:n,rotateClockWise:x,anchorX:m,anchorY:p,offsetX:u,offsetY:d,rasterizedResource:a})}return this.getSymbolImage(g)};r.getSymbolImage=function(a){const b=document.createElement("canvas"),e=b.getContext("2d");var f=0,c=0,k=0,g=0,d=[];for(var h=0;h<a.length;h++){var n=a[h],m=n.rasterizedResource;
if(!m)continue;var p=m.size,x=n.offsetX;const H=n.offsetY,I=n.anchorX,J=n.anchorY,K=n.rotateClockWise||!1;n=n.angle;var u=t.pt2px(x)-p[0]*(.5+I);let y=t.pt2px(H)-p[1]*(.5+J),A=u+p[0];var w=y+p[1];if(n){K&&(n=-n);var v=Math.sin(n*Math.PI/180);const z=Math.cos(n*Math.PI/180);p=u*z-y*v;const L=u*v+y*z,M=u*z-w*v,N=u*v+w*z,O=A*z-w*v;w=A*v+w*z;const P=A*z-y*v;v=A*v+y*z;u=Math.min(p,M,O,P);y=Math.min(L,N,w,v);A=Math.max(p,M,O,P);w=Math.max(L,N,w,v)}f=u<f?u:f;c=y<c?y:c;k=A>k?A:k;g=w>g?w:g;u=e.createImageData(m.size[0],
m.size[1]);u.data.set(new Uint8ClampedArray(m.image.buffer));d.push({offsetX:x,offsetY:H,rotateClockwise:K,angle:n,rasterizedImage:u,anchorX:I,anchorY:J})}b.width=k-f;b.height=g-c;a=-f;for(f=0;f<d.length;f++)c=d[f],k=this._imageDataToCanvas(c.rasterizedImage),h=a-c.rasterizedImage.width*(.5+c.anchorX),m=g-c.rasterizedImage.height*(.5-c.anchorY),c.angle?(x=(360-c.angle)*Math.PI/180,e.save(),e.translate(t.pt2px(c.offsetX),-t.pt2px(c.offsetY)),e.translate(a,g),e.rotate(x),e.translate(-a,-g),e.drawImage(k,
h,m),e.restore()):e.drawImage(k,h+t.pt2px(c.offsetX),m-t.pt2px(c.offsetY));d=new S["default"]({x:a/b.width-.5,y:g/b.height-.5});return{imageData:0!==b.width&&0!==b.height?e.getImageData(0,0,b.width,b.height):e.createImageData(1,1),anchorPosition:d}};r._imageDataToCanvas=function(a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const b=this._imageDataCanvas,e=b.getContext("2d");b.width=a.width;b.height=a.height;e.putImageData(a,0,0);return b};r._imageTo32Array=function(a,
b,e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const f=this._imageDataCanvas,c=f.getContext("2d");f.width=b;f.height=e;c.drawImage(a,0,0,b,e);return new Uint32Array(c.getImageData(0,0,b,e).data.buffer)};r._getRasterizedResource=function(a,b,e,f,c,k){if("esriGeometryPolyline"===e||"esriGeometryPolygon"===e){var g=f&&f.style?f.style:B.GeometryStyle.Legend;g="esriGeometryPolyline"===e?G.stroke[g]:G.fill[g];if("line"===a.type)if("CIMSolidStroke"===a.cim.type){({analyzedCIM:d,
hash:h}=C(a,b,c,k));var d=this._embedCIMLayerInVectorMarker(d,g)}else{if("CIMPictureStroke"===a.cim.type){var h=q.evaluateValueOrFunction(a.width,b,c,k);const {image:n,width:m,height:p}=this._getPictureResource(a,h);return this._rasterizePictureResource(a,n,m,p,g,h)}return null}else if("marker"===a.type)if("CIMPictureMarker"!==a.cim.type&&"CIMVectorMarker"===a.cim.type)a.cim.offsetX=q.evaluateValueOrFunction(a.offsetX,b,c,k),a.cim.offsetY=q.evaluateValueOrFunction(a.offsetY,b,c,k),a.cim.rotation=
q.evaluateValueOrFunction(a.rotation,b,c,k),a.cim.markerPlacement=a.markerPlacement,{analyzedCIM:d}=C(a,b,c,k),h=Q.numericHash(JSON.stringify(d)).toString(),d=this._embedCIMLayerInVectorMarker(d,g);else return null;else{if("text"===a.type)return null;if("fill"===a.type){if("CIMHatchFill"===a.cim.type||"CIMVectorMarker"===a.cim.type||"CIMPictureMarker"===a.cim.type||"CIMPictureFill"===a.cim.type)return h=a.cim.size||a.cim.height,"CIMPictureMarker"===a.cim.type||"CIMPictureFill"===a.cim.type?{image:h,
width:b,height:c}=this._getPictureResource(a,h):({analyzedCIM:d,hash:h}=C(a,b,c,k),c=this._rasterizer.rasterizeJSONResource(d,1,this._avoidSDF),h=c.image,b=c.size[0],c=c.size[1]),this._rasterizePictureResource(a,h,b,c,g,null);if("CIMSolidFill"===a.cim.type)({analyzedCIM:d,hash:h}=C(a,b,c,k)),d=this._embedCIMLayerInVectorMarker(d,g);else return null}}}else{if("text"===a.type)return g=this._rasterizeTextResource(a,b,f,c,k);({analyzedCIM:d,hash:h}=C(a,b,c,k));g=E(f,a,null);if("CIMPictureMarker"===a.cim.type){g*=
q.evaluateValueOrFunction(a.size,b,c,k);const {image:n,width:m,height:p}=this._getPictureResource(a,g);return g={image:n,size:[m,p],sdf:!1,simplePattern:!1,anchorX:a.anchorPoint?a.anchorPoint.x:0,anchorY:a.anchorPoint?a.anchorPoint.y:0}}U.scaleCIMMarker(d,g,{preserveOutlineWidth:!1})}h+=e;f&&(h+=JSON.stringify(f));a=this._resourceCache;if(a.has(h))return a.get(h);g=this._rasterizer.rasterizeJSONResource(d,window.devicePixelRatio||1,this._avoidSDF);a.set(h,g);return g};r._rasterizeTextResource=function(a,
b,e,f,c){var k=E(e,a,null);e=q.evaluateValueOrFunction(a.text,b,f,c);if(!e||0===e.length)return null;const g=q.evaluateValueOrFunction(a.fontName,b,f,c),d=q.evaluateValueOrFunction(a.style,b,f,c),h=q.evaluateValueOrFunction(a.weight,b,f,c),n=q.evaluateValueOrFunction(a.decoration,b,f,c);k*=q.evaluateValueOrFunction(a.size,b,f,c);const m=q.evaluateValueOrFunction(a.horizontalAlignment,b,f,c),p=q.evaluateValueOrFunction(a.verticalAlignment,b,f,c),x=q.colorToArray(q.evaluateValueOrFunction(a.color,b,
f,c)),u=q.colorToArray(q.evaluateValueOrFunction(a.outlineColor,b,f,c));a=q.evaluateValueOrFunction(a.outlineSize,b,f,c);return this._textRasterizer.rasterizeText(e,{color:x,size:k,horizontalAlignment:m,verticalAlignment:p,font:{family:g,style:d,weight:h,decoration:n},halo:{size:a||0,color:u,style:d},pixelRatio:1,premultiplyColors:!this._avoidSDF})};r._rasterizePictureResource=function(a,b,e,f,c,k){const g=document.createElement("canvas");var d=g.getContext("2d");g.height=t.pt2px(Math.max(Math.abs(c.frame.ymax-
c.frame.ymin),k));g.width=t.pt2px(Math.abs(c.frame.xmax-c.frame.xmin));e=d.createImageData(e,f);e.data.set(new Uint8ClampedArray(b.buffer));b=this._imageDataToCanvas(e);b=d.createPattern(b,"repeat");e=Math.cos((-a.cim.rotation||0)*Math.PI/180);f=Math.sin((-a.cim.rotation||0)*Math.PI/180);b.setTransform({m11:e,m12:f,m21:-f,m22:e,m41:t.pt2px(a.cim.offsetX)||0,m42:t.pt2px(a.cim.offsetY)||0});a=c.canvasPaths;let h,n;if(D.isPolygon(a)){var m=a.rings;d.fillStyle=b;h=d.fill;n=["evenodd"]}else D.isPolyline(a)&&
(m=a.paths,d.strokeStyle=b,d.lineWidth=k,h=d.stroke,m[0][0][1]=g.height/2,m[0][1][1]=g.height/2);d.beginPath();for(const p of m)if(k=p?p.length:0,1<k){m=p[0];d.moveTo(t.pt2px(m[0]),t.pt2px(m[1]));for(a=1;a<k;++a)m=p[a],d.lineTo(t.pt2px(m[0]),t.pt2px(m[1]));d.closePath()}h.apply(d,n);d=d.getImageData(0,0,g.width,g.height);d=new Uint8Array(d.data);return{size:[g.width,g.height],image:new Uint32Array(d.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}};r._getPictureResource=function(a,b){a=this._pictureMarkerCache.get(a.materialHash);
if(!a)return null;const e=a.height/a.width,f=b?1<e?t.pt2px(b):t.pt2px(b)/e:a.width;b=b?1<e?t.pt2px(b)*e:t.pt2px(b):a.height;return{image:this._imageTo32Array(a,f,b),width:f,height:b}};r._embedCIMLayerInVectorMarker=function(a,b){const e=D.isPolygon(b.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:b.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:b.geometry,symbol:{type:e,symbolLayers:[a]}}]}};return l}();B.CIMSymbolRasterizer=Z;Object.defineProperty(B,"__esModule",
{value:!0})});