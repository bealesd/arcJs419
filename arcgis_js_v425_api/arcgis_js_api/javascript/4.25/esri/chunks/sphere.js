// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../core/has ../core/Logger ../core/mathUtils ../core/maybe ./mat4 ./vec3 ./vec3f64 ./vec4 ./vec4f64 ../geometry/support/Axis ../geometry/support/ray ../geometry/support/vector ../geometry/support/vectorStacks".split(" "),function(e,r,S,t,T,U,d,l,V,u,n,W,X,k){function p(){return u.create()}function v(a,b=p()){return V.copy(b,a)}function D(a,b){return u.fromValues(a[0],a[1],a[2],b)}function E(a){return a}function F(a){a[0]=a[1]=a[2]=a[3]=0}function G(a,b){a[0]=a[1]=a[2]=0;a[3]=b;return a}
function H(a){return a[3]}function I(a){return a}function J(a,b,c,f){return u.fromValues(a,b,c,f)}function K(a,b,c){a!==c&&d.copy(c,a);c[3]=a[3]+b;return c}function L(a,b,c){S.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported");return a===c?c:v(a,c)}function m(a,b,c){if(T.isNone(b))return!1;const {origin:f,direction:g}=b;var h=Y;h[0]=f[0]-a[0];h[1]=f[1]-a[1];h[2]=f[2]-a[2];b=g[0]*g[0]+g[1]*g[1]+g[2]*g[2];if(0===b)return!1;const q=2*(g[0]*h[0]+g[1]*h[1]+g[2]*h[2]);
a=q*q-4*b*(h[0]*h[0]+h[1]*h[1]+h[2]*h[2]-a[3]*a[3]);if(0>a)return!1;h=Math.sqrt(a);a=(-q-h)/(2*b);b=(-q+h)/(2*b);if(0>a||b<a&&0<b)a=b;if(0>a)return!1;c&&(c[0]=f[0]+g[0]*a,c[1]=f[1]+g[1]*a,c[2]=f[2]+g[2]*a);return!0}function M(a,b){return m(a,b,null)}function N(a,b,c){if(m(a,b,c))return c;a=w(a,b,k.sv3d.get());d.add(c,b.origin,d.scale(k.sv3d.get(),b.direction,d.distance(b.origin,a)/d.length(b.direction)));return c}function w(a,b,c){const f=k.sv3d.get(),g=k.sm4d.get();d.cross(f,b.origin,b.direction);
const h=a[3];d.cross(c,f,b.origin);d.scale(c,c,1/d.length(c)*h);a=x(a,b.origin);b=X.angle(b.origin,c);U.fromRotation(g,b+a,f);d.transformMat4(c,c,g);return c}function O(a,b,c){if(m(a,b,c))return c;W.closestPoint(b,a,c);return y(a,c,c)}function y(a,b,c){b=d.subtract(k.sv3d.get(),b,a);b=d.scale(k.sv3d.get(),b,a[3]/d.length(b));return d.add(c,b,a)}function P(a,b){b=d.subtract(k.sv3d.get(),b,a);b=d.squaredLength(b);return Math.sqrt(Math.abs(b-a[3]*a[3]))}function x(a,b){b=d.subtract(k.sv3d.get(),b,a);
b=d.length(b);a=a[3];return t.acosClamped(a/(a+Math.abs(a-b)))}function z(a,b,c,f){a=d.subtract(A,b,a);switch(c){case n.Axis.X:return c=t.cartesianToSpherical(a,A)[2],d.set(f,-Math.sin(c),Math.cos(c),0);case n.Axis.Y:return a=t.cartesianToSpherical(a,A),c=a[1],a=a[2],b=Math.sin(c),d.set(f,-b*Math.cos(a),-b*Math.sin(a),Math.cos(c));case n.Axis.Z:return d.normalize(f,a)}}function B(a,b){b=d.subtract(C,b,a);return d.length(b)-a[3]}function Q(a,b,c,f){const g=B(a,b);a=z(a,b,n.Axis.Z,C);c=d.scale(C,a,
c-g);return d.add(f,b,c)}function R(a,b){b=d.squaredDistance(a,b);a=a[3];return b<=a*a}const Y=l.create(),A=l.create(),C=l.create();r=p();l=Object.freeze(Object.defineProperty({__proto__:null,create:p,copy:v,fromCenterAndRadius:D,wrap:E,clear:F,fromRadius:G,getRadius:H,getCenter:I,fromValues:J,elevate:K,setExtent:L,intersectRay:m,intersectsRay:M,intersectRayClosestSilhouette:N,closestPointOnSilhouette:w,closestPoint:O,projectPoint:y,distanceToSilhouette:P,angleToSilhouette:x,axisAt:z,altitudeAt:B,
setAltitudeAt:Q,containsPoint:R,tmpSphere:r},Symbol.toStringTag,{value:"Module"}));e.altitudeAt=B;e.angleToSilhouette=x;e.axisAt=z;e.clear=F;e.closestPoint=O;e.closestPointOnSilhouette=w;e.containsPoint=R;e.copy=v;e.create=p;e.distanceToSilhouette=P;e.elevate=K;e.fromCenterAndRadius=D;e.fromRadius=G;e.fromValues=J;e.getCenter=I;e.getRadius=H;e.intersectRay=m;e.intersectRayClosestSilhouette=N;e.intersectsRay=M;e.projectPoint=y;e.setAltitudeAt=Q;e.setExtent=L;e.sphere=l;e.tmpSphere=r;e.wrap=E});