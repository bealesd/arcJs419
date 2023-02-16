// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/maybe ../../geometry/support/spatialReferenceUtils ../../geometry/SpatialReference ../../geometry/Geometry ../../geometry/support/Ellipsoid ../../geometry/support/webMercatorUtils ../../geometry/Point ../../geometry/Extent ../../core/Collection ../../chunks/common ../../core/unitUtils ../../Viewpoint ../../chunks/vec2f64 ../../chunks/vec2 ../../chunks/mat2d ../../chunks/mat2df64".split(" "),function(k,z,H,ca,da,D,v,I,Q,ea,w,R,J,n,g,t,E){function S(a,b,c,d){return d&&c&&
!d.equals(c)&&v.canProject(d,c)&&d.isWebMercator?(d.isWebMercator?(c=b[1],89.99999<c?c=89.99999:-89.99999>c&&(c=-89.99999),c=Math.sin(w.toRadian(c)),a=g.set(a,w.toRadian(b[0])*D.earth.radius,.5*D.earth.radius*Math.log((1+c)/(1-c)))):(c=w.toDegree(b[0]/D.earth.radius),a=g.set(a,c-360*Math.floor((c+180)/360),w.toDegree(.5*Math.PI-2*Math.atan(Math.exp(-1*b[1]/D.earth.radius))))),a):g.copy(a,b)}function F(a){return a.wkid?a:a.spatialReference||ca.WGS84}function A(a,b){return b.type?g.set(a,b.x,b.y):g.copy(a,
b)}function y(a,b){return Math.max(a.width/b[0],a.height/b[1])*T(a.spatialReference)}async function B(a,b,c,d){if(!a||Array.isArray(a)&&!a.length)return null;ea.isCollection(a)&&(a=a.toArray());if(Array.isArray(a)&&a.length&&"object"===typeof a[0]){var e=a.every(p=>"attributes"in p);var f=a.some(p=>!p.geometry),m=a;if(e&&f&&b&&b.allLayerViews){e=new Map;for(var q of a)a=q.layer,f=e.get(a)||[],m=q.attributes[a.objectIdField],null!=m&&f.push(m),e.set(a,f);const p=[];e.forEach((r,U)=>{const V=b.allLayerViews.find(C=>
C.layer.id===U.id);if("queryFeatures"in V){const C=U.createQuery();C.objectIds=r;C.returnGeometry=!0;p.push(V.queryFeatures(C))}});q=await Promise.all(p);a=[];for(var h of q)if(h&&h.features&&h.features.length)for(var l of h.features)z.isSome(l.geometry)&&a.push(l.geometry);m=a}for(const p of m)d=await B(p,b,c,d);return d}if(Array.isArray(a)&&2===a.length&&"number"===typeof a[0]&&"number"===typeof a[1])e=new I(a);else if(a instanceof da)e=a;else if("geometry"in a)if(a.geometry)e=a.geometry;else if(a.layer){const p=
a.layer;h=b.allLayerViews.find(r=>r.layer.id===p.id);"queryFeatures"in h&&(l=p.createQuery(),l.objectIds=[a.attributes[p.objectIdField]],l.returnGeometry=!0,h=await h.queryFeatures(l),e=z.get(h,"features",0,"geometry"))}if(z.isNone(e))return null;h="point"===e.type?new Q({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference}):e.extent;if(!h)return null;l=v.canProject(h,c);if(!h.spatialReference.equals(c)&&l)h=v.project(h,c);else if(!l)return null;return d=d?d.union(h):h.clone()}
function fa(a){if(a&&(!Array.isArray(a)||"number"!==typeof a[0])&&("object"===typeof a||Array.isArray(a)&&"object"===typeof a[0])){if("layer"in a&&a.layer&&a.layer.minScale&&a.layer.maxScale){var b=a.layer;return{min:b.minScale,max:b.maxScale}}if(Array.isArray(a)&&a.length&&a.every(c=>"layer"in c)){let c=b=0;for(const d of a)(a=d.layer)&&a.minScale&&a.maxScale&&(b=a.minScale<b?a.minScale:b,c=a.maxScale>c?a.maxScale:c);return b&&c?{min:b,max:c}:null}}}async function W(a,b){if(!a||!b)return new J({targetGeometry:new I,
scale:0,rotation:0});let c=b.spatialReference;const {constraints:d,padding:e,viewpoint:f,size:m}=b,q=[e?m[0]-e.left-e.right:m[0],e?m[1]-e.top-e.bottom:m[1]];let h=null;a instanceof J?h=a:a.viewpoint?h=a.viewpoint:a.target&&"esri.Viewpoint"===a.target.declaredClass&&(h=a.target);let l=null;if(h&&h.targetGeometry)l=h.targetGeometry;else if(a instanceof Q)l=a;else if(a||a&&("center"in a||"extent"in a||"target"in a))l=await B(a.center,b,c)||await B(a.extent,b,c)||await B(a.target,b,c)||await B(a,b,c);
!l&&f&&f.targetGeometry?l=f.targetGeometry:!l&&b.extent&&(l=b.extent);var p=F(l);c||(c=F(b.spatialReference||b.extent||l));if(!v.canProject(l,c)&&p&&!p.equals(c))return null;var r=A(n.create(),l.center?l.center:l);p=new I(S(r,r,p,c),c);r=null;r=h&&z.isSome(h.targetGeometry)&&"point"===h.targetGeometry.type?h.scale:a.hasOwnProperty("scale")&&a.scale?a.scale:a.hasOwnProperty("zoom")&&-1!==a.zoom&&d&&d.effectiveLODs?d.zoomToScale(a.zoom):Array.isArray(l)||"point"===l.type||"extent"===l.type&&0===l.width&&
0===l.height?b.extent&&v.canProject(b.extent,c)?y(v.project(b.extent,c),q):b.extent?y(b.extent,q):f.scale:v.canProject(l.extent,c)?y(v.project(l.extent,c),q):y(l.extent,q);if(b=fa(a))b.min&&b.min>r?r=b.min:b.max&&b.max<r&&(r=b.max);b=0;h?b=h.rotation:a.hasOwnProperty("rotation")?b=a.rotation:f&&(b=f.rotation);a=new J({targetGeometry:p,scale:r,rotation:b});d&&(a=d.fit(a),d.constrainByGeometry(a),d.rotationEnabled||(a.rotation=b));return a}function u(a,b){const c=a.targetGeometry,d=b.targetGeometry;
c.x=d.x;c.y=d.y;c.spatialReference=d.spatialReference;a.scale=b.scale;a.rotation=b.rotation;return a}function X(a,b,c){return c?g.set(a,.5*(b[0]-c.right+c.left),.5*(b[1]-c.bottom+c.top)):g.scale(a,b,.5)}function ha(a,b,c,d){K(a,b,c,d);return t.invert(a,a)}function x(a){var b=a.scale;a=a.targetGeometry;a=z.isSome(a)&&H.isValid(a.spatialReference)?1/(39.37*R.getMetersPerUnitForSR(a.spatialReference)*96):1;return b*a}function T(a){return H.isValid(a)?39.37*R.getMetersPerUnitForSR(a)*96:1}function Y(a){return a.isWrappable?
(a=H.getInfo(a),a.valid[1]-a.valid[0]):0}const ia=180/Math.PI,ja=function(){const a=n.create();return function(b,c,d){const e=c.targetGeometry;A(a,e);c=.5*x(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=e.spatialReference;return b}}(),L=function(){const a=n.create();return function(b,c,d){return g.sub(b,g.scale(b,c,.5),X(a,c,d))}}(),M=function(){const a=E.create(),b=n.create();return function(c,d,e,f){const m=x(d);d=w.toRadian(d.rotation)||0;g.set(b,
m,m);t.fromScaling(a,b);t.rotate(a,a,d);t.translate(a,a,L(b,e,f));t.translate(a,a,[0,f.top-f.bottom]);return g.set(c,a[4],a[5])}}(),N=function(){const a=n.create(),b=n.create(),c=n.create();return function(d,e,f,m,q,h){g.negate(a,e);g.scale(b,f,.5*h);g.set(c,1/m*h,-1/m*h);t.identity(d);t.translate(d,d,b);q&&t.rotate(d,d,q);t.scale(d,d,c);t.translate(d,d,a);return d}}(),K=function(){const a=n.create();return function(b,c,d,e){const f=x(c),m=w.toRadian(c.rotation)||0;A(a,c.targetGeometry);return N(b,
a,d,f,m,e)}}(),ka=function(){const a=n.create();return function(b,c,d,e){const f=x(c);A(a,c.targetGeometry);return N(b,a,d,f,0,e)}}(),la=function(){const a=n.create(),b=n.create(),c=[0,0,0];return function(d,e,f){g.subtract(a,d,e);g.normalize(a,a);g.subtract(b,d,f);g.normalize(b,b);g.cross(c,a,b);d=Math.acos(g.dot(a,b)/(g.length(a)*g.length(b)))*ia;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}(),ma=function(){const a=n.create();return function(b,c,d,e){const f=b.targetGeometry;u(b,c);M(a,c,d,e);f.x+=
a[0];f.y+=a[1];return b}}(),na=function(){const a=n.create();return function(b,c,d,e){const f=b.targetGeometry;u(b,c);M(a,c,d,e);f.x-=a[0];f.y-=a[1];return b}}(),Z=function(){const a=n.create();return function(b,c,d){u(b,c);c=b.targetGeometry;const e=F(d),f=F(c);A(a,d);S(a,a,e,f);c.x=a[0];c.y=a[1];return b}}(),oa=function(){const a=n.create();return function(b,c,d,e,f){f||(f="center");g.sub(a,d,e);g.scale(a,a,.5);d=a[0];e=a[1];switch(f){case "center":g.set(a,0,0);break;case "left":g.set(a,-d,0);break;
case "top":g.set(a,0,e);break;case "right":g.set(a,d,0);break;case "bottom":g.set(a,0,-e);break;case "top-left":g.set(a,-d,e);break;case "bottom-left":g.set(a,-d,-e);break;case "top-right":g.set(a,d,e);break;case "bottom-right":g.set(a,d,-e)}G(b,c,a);return b}}(),aa=function(){const a=n.create();return function(b,c,d,e,f){u(b,c);isNaN(d)||0===d||(O(a,e,c,f),b.scale=c.scale*d,P(a,a,b,f),G(b,b,g.set(a,a[0]-e[0],e[1]-a[1])));return b}}(),ba=function(){const a=n.create();return function(b,c,d,e,f,m){u(b,
c);isNaN(d)||0===d||(O(a,f,c,m),b.scale=c.scale*d,b.rotation+=e,P(a,a,b,m),G(b,b,g.set(a,a[0]-f[0],f[1]-a[1])));return b}}(),pa=function(){const a=n.create(),b=n.create();return function(c,d,e,f,m,q,h){L(b,q,h);g.add(a,m,b);return f?ba(c,d,e,f,a,q):aa(c,d,e,a,q)}}(),O=function(){const a=E.create();return function(b,c,d,e){return g.transformMat2d(b,c,ha(a,d,e,1))}}(),P=function(){const a=E.create();return function(b,c,d,e){return g.transformMat2d(b,c,K(a,d,e,1))}}(),G=function(){const a=n.create(),
b=E.create();return function(c,d,e){u(c,d);const f=x(d),m=c.targetGeometry;t.fromRotation(b,w.toRadian(d.rotation)||0);t.scale(b,b,n.fromValues(f,f));g.transformMat2d(a,e,b);m.x+=a[0];m.y+=a[1];return c}}();k.addPadding=ma;k.angleBetween=la;k.centerAt=Z;k.copy=u;k.create=W;k.createAsync=function(a,b){return W(a,b)};k.extentToScale=y;k.getAnchor=X;k.getExtent=ja;k.getMatrix=N;k.getOuterSize=function(a,b,c){var d=w.toRadian(b.rotation)||0;b=Math.abs(Math.cos(d));d=Math.abs(Math.sin(d));return g.set(a,
Math.round(c[1]*d+c[0]*b),Math.round(c[1]*b+c[0]*d))};k.getPaddingMapTranslation=M;k.getPaddingScreenTranslation=L;k.getResolution=x;k.getResolutionToScaleFactor=T;k.getTransform=K;k.getTransformNoRotation=ka;k.getWorldScreenWidth=function(a,b){return Math.round(Y(a)/b)};k.getWorldWidth=Y;k.padAndScaleAndRotateBy=pa;k.pixelSize=function(a){return x(a)};k.removePadding=na;k.resize=oa;k.rotateBy=function(a,b,c){u(a,b);a.rotation+=c;return a};k.rotateTo=function(a,b,c){u(a,b);a.rotation=c;return a};
k.scaleAndRotateBy=ba;k.scaleBy=aa;k.scaleTo=function(a,b,c){u(a,b);a.scale=c;return a};k.setExtent=function(a,b,c,d,e){Z(a,b,c.center);a.scale=y(c,d);e&&e.constraints&&e.constraints.constrain(a);return a};k.toMap=O;k.toScreen=P;k.translateBy=G;Object.defineProperty(k,"__esModule",{value:!0})});