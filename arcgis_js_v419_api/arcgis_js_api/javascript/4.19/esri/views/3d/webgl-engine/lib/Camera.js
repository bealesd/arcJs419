// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/mathUtils ../../../../core/screenUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../support/mathUtils ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2f64 ../../../../chunks/vec4f64 ../../../../chunks/vec2 ../../../../chunks/vec4 ../../../../chunks/vector ../../support/geometryUtils ./Util".split(" "),function(C,w,n,x,h,e,D,k,p,E,q,A,l,F,r,t){let G=function(){function u(a=
null,b=null,d=null){this._viewUp=h.create();this._viewForward=h.create();this._viewRight=h.create();this._ray=r.ray.createWrapper();this._viewport=q.fromValues(0,0,1,1);this._padding=q.fromValues(0,0,0,0);this._fov=55/180*Math.PI;this._nearFar=E.fromValues(1,1E3);this._viewDirty=!0;this._viewMatrix=p.create();this._projectionDirty=!0;this._projectionMatrix=p.create();this._viewProjectionDirty=!0;this._viewProjectionMatrix=p.create();this._viewInverseTransposeMatrixDirty=!0;this._viewInverseTransposeMatrix=
p.create();this._frustumDirty=!0;this._frustum=r.frustum.create();this._fullViewport=q.create();this.pixelRatio=1;this.relativeElevation=0;this._eye=w.isSome(a)?h.clone(a):h.create();this._center=w.isSome(b)?h.clone(b):h.create();this._up=w.isSome(d)?h.clone(d):h.fromValues(0,0,1)}var f=u.prototype;f.depthNDCToWorld=function(a){return 2*this.near*this.far/(this.far+this.near-(2*a-1)*(this.far-this.near))};f.copyFrom=function(a){e.copy(this._eye,a._eye);e.copy(this._center,a._center);e.copy(this._up,
a._up);l.copy(this._viewport,a._viewport);l.copy(this._padding,a._padding);A.copy(this._nearFar,a._nearFar);this._fov=a._fov;this.relativeElevation=a.relativeElevation;this._viewDirty=a._viewDirty;this._viewDirty||(k.copy(this._viewMatrix,a._viewMatrix),e.copy(this._viewRight,a._viewRight),e.copy(this._viewUp,a._viewUp),e.copy(this._viewForward,a._viewForward));a._projectionDirty?this._projectionDirty=!0:(k.copy(this._projectionMatrix,a._projectionMatrix),this._projectionDirty=!1);this._viewProjectionDirty=
!0;this._frustumDirty=a._frustumDirty;this._frustumDirty||(r.frustum.copy(a._frustum,this._frustum),this._frustumDirty=!1);a._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(k.copy(this._viewInverseTransposeMatrix,a._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1);l.copy(this._fullViewport,a._fullViewport);this.pixelRatio=a.pixelRatio;return this};f.copyViewFrom=function(a){this.eye=a.eye;this.center=a.center;this.up=a.up};f.clone=function(){return(new u).copyFrom(this)};
f.equals=function(a){return e.exactEquals(this._eye,a._eye)&&e.exactEquals(this._center,a._center)&&e.exactEquals(this._up,a._up)&&l.exactEquals(this._viewport,a._viewport)&&l.exactEquals(this._padding,a._padding)&&A.exactEquals(this._nearFar,a._nearFar)&&this._fov===a._fov&&this.pixelRatio===a.pixelRatio&&this.relativeElevation===a.relativeElevation};f.almostEquals=function(a){if(this.pixelRatio!==a.pixelRatio||.001<=Math.abs(a.fov-this._fov))return!1;const b=1-1E-10;e.sub(g,a.eye,a.center);e.sub(y,
this._eye,this._center);const d=e.dot(g,y),m=e.sqrLen(g),B=e.sqrLen(y);return d*d>=b*m*B&&e.sqrDist(a.eye,this._eye)<2.5E-7*Math.max(m,B)&&.5>l.squaredDistance(a.padding,this._padding)&&.5>l.squaredDistance(a.viewport,this._viewport)};f.markViewDirty=function(){this._viewProjectionDirty=this._frustumDirty=this._viewDirty=!0};f.computeRenderPixelSizeAt=function(a){return this.computeRenderPixelSizeAtDist(this.viewDirectionDistance(a))};f.computeRenderPixelSizeAtDist=function(a){return a*this.perRenderPixelRatio};
f.computeScreenPixelSizeAt=function(a){return this.computeScreenPixelSizeAtDist(this.viewDirectionDistance(a))};f.viewDirectionDistance=function(a){return Math.abs(F.projectPointSignedLength(this.viewForward,e.subtract(g,a,this._eye)))};f.computeScreenPixelSizeAtDist=function(a){return a*this.perScreenPixelRatio};f.computeDistanceFromRadius=function(a,b){return a/Math.tan(Math.min(this.fovX,this.fovY)/(2*(b||1)))};f.getScreenCenter=function(a=x.createScreenPointArray()){a[0]=(this.padding[3]+this.width/
2)/this.pixelRatio;a[1]=(this.padding[0]+this.height/2)/this.pixelRatio;return a};f.getRenderCenter=function(a,b=.5,d=.5){a||(a=x.createRenderScreenPointArray3());a[0]=this.padding[3]+this.width*b;a[1]=this.padding[2]+this.height*d;2<a.length&&(a[2]=.5);return a};f.setGLViewport=function(a){const b=this.viewport,d=this.padding;a.setViewport(b[0]-d[3],b[1]-d[2],b[2]+d[1]+d[3],b[3]+d[0]+d[2])};f.applyProjection=function(a,b,d=!1){a!==c&&e.copy(c,a);c[3]=1;d&&(b[2]=-c[2]);l.transformMat4(c,c,this.projectionMatrix);
e.scale(c,c,1/Math.abs(c[3]));a=this.fullViewport;b[0]=n.lerp(0,a[0]+a[2],.5+.5*c[0]);b[1]=n.lerp(0,a[1]+a[3],.5+.5*c[1]);d||(b[2]=.5*(c[2]+1));return b};f.projectToScreen=function(a,b){this.projectToRenderScreen(a,z);return this.renderToScreen(z,b)};f.projectToRenderScreen=function(a,b){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=1;l.transformMat4(c,c,this.viewProjectionMatrix);if(0===c[3])return null;e.scale(c,c,1/Math.abs(c[3]));a=this.fullViewport;"x"in b?(b.x=n.lerp(0,a[0]+a[2],.5+.5*c[0]),b.y=n.lerp(0,
a[1]+a[3],.5+.5*c[1])):(b[0]=n.lerp(0,a[0]+a[2],.5+.5*c[0]),b[1]=n.lerp(0,a[1]+a[3],.5+.5*c[1]),2<b.length&&(b[2]=.5*(c[2]+1)));return b};f.unprojectFromScreen=function(a,b){return this.unprojectFromRenderScreen(this.screenToRender(a,z),b)};f.unprojectFromRenderScreen=function(a,b){k.multiply(v,this.projectionMatrix,this.viewMatrix);if(!k.invert(v,v))return null;const d=this.fullViewport;c[0]=2*(a[0]-d[0])/d[2]-1;c[1]=2*(a[1]-d[1])/d[3]-1;c[2]=2*a[2]-1;c[3]=1;l.transformMat4(c,c,v);if(0===c[3])return null;
b[0]=c[0]/c[3];b[1]=c[1]/c[3];b[2]=c[2]/c[3];return b};f.constrainWindowSize=function(a,b,d,m=1){a*=this.pixelRatio;b*=this.pixelRatio;return[Math.max(a-d*m/2,0),Math.max(this.fullHeight-b-d/2,0),d*m- -Math.min(a-d*m/2,0)- -Math.min(this.fullWidth-a-d*m/2,0),d- -Math.min(this.fullHeight-b-d/2,0)- -Math.min(b-d/2,0)]};f.computeUp=function(a){1===a?this.computeUpGlobal():this.computeUpLocal()};f.screenToRender=function(a,b){const d=this.fullHeight-a[1]*this.pixelRatio;b[0]=a[0]*this.pixelRatio;b[1]=
d;return b};f.renderToScreen=function(a,b){const d=(this.fullHeight-a[1])/this.pixelRatio;b[0]=a[0]/this.pixelRatio;b[1]=d;return b};f.computeUpGlobal=function(){e.subtract(g,this.center,this.eye);const a=e.length(this.center);1>a?(e.set(this.up,0,0,1),this.markViewDirty()):Math.abs(e.dot(g,this.center))>.9999*e.length(g)*a||(e.cross(this.up,g,this.center),e.cross(this.up,this.up,g),e.normalize(this.up,this.up),this.markViewDirty())};f.computeUpLocal=function(){D.directionFromTo(g,this.eye,this.center);
.9999>=Math.abs(g[2])&&(e.scale(g,g,g[2]),e.set(this.up,-g[0],-g[1],1-g[2]),e.normalize(this.up,this.up),this.markViewDirty())};f._compareAndSetView=function(a,b){e.exactEquals(a,b)||(e.copy(b,a),this._viewProjectionDirty=this._frustumDirty=this._viewDirty=!0)};f._recomputeFrustum=function(){this._frustumDirty&&(r.frustum.fromMatrix(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)};f._ensureViewClean=function(){this._viewDirty&&(k.lookAt(this._viewMatrix,this._eye,this._center,
this._up),e.set(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),e.set(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),e.set(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)};C._createClass(u,[{key:"eye",get:function(){return this._eye},set:function(a){this._compareAndSetView(a,this._eye)}},{key:"center",get:function(){return this._center},set:function(a){this._compareAndSetView(a,
this._center)}},{key:"ray",get:function(){this._ray.origin=this.eye;this._ray.direction||(this._ray.direction=h.create());e.subtract(this._ray.direction,this.center,this.eye);return this._ray}},{key:"up",get:function(){return this._up},set:function(a){this._compareAndSetView(a,this._up)}},{key:"viewMatrix",get:function(){this._ensureViewClean();return this._viewMatrix},set:function(a){k.copy(this._viewMatrix,a);this._viewDirty=!1;this._frustumDirty=this._viewProjectionDirty=this._viewInverseTransposeMatrixDirty=
!0}},{key:"viewForward",get:function(){this._ensureViewClean();return this._viewForward}},{key:"viewUp",get:function(){this._ensureViewClean();return this._viewUp}},{key:"viewRight",get:function(){this._ensureViewClean();return this._viewRight}},{key:"nearFar",get:function(){return this._nearFar}},{key:"near",get:function(){return this._nearFar[0]},set:function(a){this._nearFar[0]!==a&&(this._nearFar[0]=a,this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0)}},{key:"far",get:function(){return this._nearFar[1]},
set:function(a){this._nearFar[1]!==a&&(this._nearFar[1]=a,this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0)}},{key:"viewport",get:function(){return this._viewport},set:function(a){this.x=a[0];this.y=a[1];this.width=a[2];this.height=a[3]}},{key:"x",get:function(){return this._viewport[0]},set:function(a){a+=this._padding[3];this._viewport[0]!==a&&(this._viewport[0]=a,this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0)}},{key:"y",get:function(){return this._viewport[1]},
set:function(a){a+=this._padding[2];this._viewport[1]!==a&&(this._viewport[1]=a,this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0)}},{key:"width",get:function(){return this._viewport[2]},set:function(a){this._viewport[2]!==a&&(this._viewport[2]=a,this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0)}},{key:"height",get:function(){return this._viewport[3]},set:function(a){this._viewport[3]!==a&&(this._viewport[3]=a,this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=
!0)}},{key:"fullWidth",get:function(){return this._viewport[2]+this._padding[1]+this._padding[3]},set:function(a){this.width=a-(this._padding[1]+this._padding[3])}},{key:"fullHeight",get:function(){return this._viewport[3]+this._padding[0]+this._padding[2]},set:function(a){this.height=a-(this._padding[0]+this._padding[2])}},{key:"fullViewport",get:function(){this._fullViewport[0]=this._viewport[0]-this._padding[3];this._fullViewport[1]=this._viewport[1]-this._padding[2];this._fullViewport[2]=this.fullWidth;
this._fullViewport[3]=this.fullHeight;return this._fullViewport}},{key:"aspect",get:function(){return this.width/this.height}},{key:"padding",get:function(){return this._padding},set:function(a){if(this._padding[0]!==a[0]||this._padding[1]!==a[1]||this._padding[2]!==a[2]||this._padding[3]!==a[3])this._viewport[0]+=a[3]-this._padding[3],this._viewport[1]+=a[2]-this._padding[2],this._viewport[2]-=a[1]+a[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=a[0]+a[2]-(this._padding[0]+this._padding[2]),
l.copy(this._padding,a),this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0}},{key:"viewProjectionMatrix",get:function(){this._viewProjectionDirty&&(k.multiply(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1);return this._viewProjectionMatrix}},{key:"projectionMatrix",get:function(){if(this._projectionDirty){const a=this.width,b=this.height,d=this.near*Math.tan(this.fovY/2),m=d*this.aspect;k.frustum(this._projectionMatrix,-m*(1+2*this._padding[3]/
a),m*(1+2*this._padding[1]/a),-d*(1+2*this._padding[2]/b),d*(1+2*this._padding[0]/b),this.near,this.far);this._projectionDirty=!1}return this._projectionMatrix},set:function(a){k.copy(this._projectionMatrix,a);this._projectionDirty=!1;this._frustumDirty=this._viewProjectionDirty=!0}},{key:"fov",get:function(){return this._fov},set:function(a){this._fov=a;this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0}},{key:"fovX",get:function(){return t.fovd2fovx(this._fov,this.width,this.height)},
set:function(a){this._fov=t.fovx2fovd(a,this.width,this.height);this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0}},{key:"fovY",get:function(){return t.fovd2fovy(this._fov,this.width,this.height)},set:function(a){this._fov=t.fovy2fovd(a,this.width,this.height);this._frustumDirty=this._viewProjectionDirty=this._projectionDirty=!0}},{key:"distance",get:function(){return e.distance(this._center,this._eye)}},{key:"frustum",get:function(){this._recomputeFrustum();return this._frustum}},
{key:"viewInverseTransposeMatrix",get:function(){if(this._viewInverseTransposeMatrixDirty||this._viewDirty)k.invert(this._viewInverseTransposeMatrix,this.viewMatrix),k.transpose(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1;return this._viewInverseTransposeMatrix}},{key:"perRenderPixelRatio",get:function(){return Math.tan(this.fovX/2)/(this.width/2)}},{key:"perScreenPixelRatio",get:function(){return this.perRenderPixelRatio*this.pixelRatio}},
{key:"aboveGround",get:function(){return this.relativeElevation&&0<=this.relativeElevation}}]);return u}();const c=q.create(),v=p.create(),g=h.create(),y=h.create(),z=x.createRenderScreenPointArray3();return G});