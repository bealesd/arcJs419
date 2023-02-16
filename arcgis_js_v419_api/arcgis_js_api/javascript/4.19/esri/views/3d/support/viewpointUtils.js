// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../core/has ../../../core/maybe ../../../core/Error ../../../core/promiseUtils ../../../geometry/SpatialReference ../../../geometry/Geometry ../../../geometry/support/webMercatorUtils ../../../geometry/Point ../../../geometry/Extent ../../../geometry ../../../Graphic ../../../core/asyncUtils ../../../chunks/vec3f64 ../../../chunks/vec3 ./mathUtils ../../../Camera ../../../Viewpoint ../../../geometry/support/aaBoundingRect ../../../geometry/projection ../../../chunks/mat3f64 ../../../chunks/mat4f64 ../../../chunks/mat3 ../../../geometry/support/aaBoundingBox ./ElevationProvider ./geometryUtils ../camera/intersectionUtils ./cameraUtils".split(" "),
function(x,ua,n,J,fa,K,ha,w,C,ia,va,ja,V,D,m,W,X,L,Y,u,ka,la,Z,q,aa,ma,z,h){function M(a){return 360-W.cyclicalDeg.normalize(a)}function A(a){return W.cyclicalDeg.normalize(360-a)}function E(a){n.isSome(a)&&a.resolver&&a.resolver.reject();return null}function ba(a,b,c,d=null){if(!b)return E(d);var e=a.spatialReference||K.WGS84;if(n.isSome(b.camera)){a=b.get("camera.position.spatialReference");if(!w.canProject(a,e))return E(d);b=b.camera.clone();a.equals(e)||(b.position=w.project(b.position,e));a=
b;n.isSome(d)&&d.resolver&&d.resolver.resolve(a);return a}if(n.isNone(b.targetGeometry))return E(d);var f=b.get("targetGeometry.spatialReference");if(f&&!w.canProject(f,e))return E(d);e=h.internalToExternal(a,a.state.camera);f=1;null!=b.rotation&&(e.heading=M(b.rotation),f=0);null!=c&&(e.tilt=c);if("point"===b.targetGeometry.type){const g=b.targetGeometry;c=b.targetGeometry.clone();b=null!=b.scale?h.scaleToDistance(a,b.scale,g.latitude):a.state.camera.distance;return h.fromCenterDistance(a,c,b,e,
f,d)}return h.fromExtent(a,b.targetGeometry.extent,e.heading,e.tilt,f,d)}function N(a,b){return null==b.scale&&null!=b.zoom?h.zoomToScale(a,b.zoom):b.scale}function O(a,b){let c=!1;null!=b.heading?(a.heading=b.heading,c=!0):null!=b.rotation&&(a.heading=M(b.rotation),c=!0);null!=b.tilt&&(a.tilt=b.tilt,c=!0);null!=b.fov&&(a.fov=b.fov);return c}function P(a,b,c,d){const e=a.spatialReference||K.WGS84;b=n.isSome(b)?b:h.externalToInternal(a,c);if(n.isNone(b))return d;d.targetGeometry=u.projectVectorToPoint(b.center,
a.renderSpatialReference,e);d.scale=h.computeScale(a,b);d.rotation=A(c.heading);d.camera=c;return d}function F(a,b,c){if(b){if(!w.canProject(b.spatialReference,a.spatialReference))throw new J("viewpointutils:incompatible-spatialreference",`Spatial reference (${b.spatialReference?b.spatialReference.wkid:"unknown"}) is incompatible with the view (${a.spatialReference.wkid})`,{geometry:b});var d=[];if(!b.hasZ&&a.basemapTerrain){switch(b.type){case "point":var e=b;break;case "multipoint":case "polyline":case "mesh":e=
b.extent.center;break;case "extent":e=b.center;break;case "polygon":e=b.centroid}e&&w.canProject(e,a.basemapTerrain.spatialReference)?k[2]=n.unwrapOr(aa.getElevationAtPoint(a.elevationProvider,e),0):k[2]=0}(0,na[b.type])(b,g=>{d.push(g[0],g[1],g[2])},k);var f=d.length/3;if(0!==f&&(e=Array(d.length),u.projectBuffer(d,b.spatialReference,0,e,a.spatialReference,0,f)))for(b.hasZ&&(c.hasZ=!0),a=0;a<e.length;a+=3)b.hasZ?(k[0]=e[a+0],k[1]=e[a+1],k[2]=e[a+2]):(k[0]=e[a+0],k[1]=e[a+1]),q.expandWithVec3(c.boundingBox,
k)}}async function oa(a,b,c,d){const e=await V.result(a.whenViewForGraphic(b));if(!1!==e.ok&&!n.isNone(e.value)&&"whenGraphicBounds"in e.value)if(c=await V.result(e.value.whenGraphicBounds(b,{minDemResolution:c})),!1===c.ok)F(a,b.geometry,d);else{var {screenSpaceObjects:f,boundingBox:g}=c.value;q.expandWithAABB(d.boundingBox,g);f&&f.forEach(l=>{d.screenSpaceObjects.push(l)});isFinite(g[2])&&(d.hasZ=!0)}else F(a,b.geometry,d)}async function ca(a,b,c,d){if(Array.isArray(b)&&2===b.length){const e=b[0],
f=b[1];if("number"===typeof e&&"number"===typeof f){p.x=e;p.y=f;p.z=void 0;p.spatialReference=a.spatialReference.isGeographic?a.spatialReference:K.WGS84;F(a,p,d);return}}b&&"function"===typeof b.map?await fa.eachAlways(b.map(e=>ca(a,e,c,d))):b instanceof ha?F(a,b,d):b instanceof ja&&await oa(a,b,c,d)}async function pa(a,b,c,d,e){if(n.isSome(b.camera))return da(a,b.camera,e);e.scale=b.scale;e.rotation=b.rotation;e.targetGeometry=n.isSome(b.targetGeometry)?b.targetGeometry.clone():null;e.camera=null;
null!=c.heading?e.rotation=A(c.heading):null!=c.rotation&&(e.rotation=c.rotation);b=N(a,c);null!=b&&(e.scale=b);d=new h.AsyncContext(d);ba(a,e,c.tilt,d);e.camera=await d.resolver.promise;return e}function da(a,b,c){const d=a.spatialReference,e=b.position.spatialReference;if(!w.canProject(e,d))return null;b=b.clone();b.fov=a.camera.fov;e.equals(d)||(b.position=w.project(b.position,d));return P(a,null,b,c)}async function Q(a,b,c,d,e,f){if(n.isNone(c))throw new J("createfromcenter","invalid point");
f.targetGeometry=c.clone();const g=z.cameraOnContentAlongViewDirection(a);if(b.position)return c=f.targetGeometry,e=a.renderSpatialReference,u.projectPointToVector(b.position,G,e),u.projectPointToVector(c,R,e),f.targetGeometry=new C(c),d.position=new C(b.position),m.subtract(H,R,G),h.directionToHeadingTilt(a,G,H,g.up,d),f.scale=h.distanceToScale(a,m.distance(G,R),f.targetGeometry.latitude),f.rotation=A(d.heading),f.camera=d,f;if(b.zoomFactor){var l=g.distance/b.zoomFactor;const t=m.scale(k,g.viewForward,
-l);m.add(g.eye,g.center,t);g.markViewDirty();f.scale=h.distanceToScale(a,l,c.latitude)}h.internalToExternal(a,g,d);l=O(d,b)?0:1;b.zoomFactor||(f.scale=N(a,b),null==f.scale&&(u.projectPointToVector(c,k,a.renderSpatialReference),ma.frustum.intersectsPoint(g.frustum,k)?f.scale=h.distanceToScale(a,m.distance(g.eye,k),c.latitude):f.scale=h.computeScale(a,g)),b=new h.AsyncContext(e),h.fromCenterScale(a,f.targetGeometry,f.scale,d,l,b),f.camera=await b.resolver.promise);return f}async function qa(a,b,c,
d,e){var f=z.cameraOnContentAlongViewDirection(a);f=u.projectVectorToPoint(f.center,a.renderSpatialReference,a.spatialReference);return Q(a,b,f,c,d,e)}async function ra(a,b,c,d,e,f){f.targetGeometry=c.clone();const g=z.cameraOnContentAlongViewDirection(a);h.internalToExternal(a,g,d);b=O(d,b)?0:1;e=new h.AsyncContext(e);h.fromExtent(a,c,d.heading,d.tilt,b,e);f.camera=await e.resolver.promise;return f}async function sa(a,b,c,d,e,f,g,l){l.targetGeometry=c.clone();const t=z.cameraOnContentAlongViewDirection(a);
var r=0;c.hasZ?r=c.z:a.basemapTerrain&&(r=n.unwrap(aa.getElevationAtPoint(a.elevationProvider,c)));m.set(k,c.x,c.y,r);u.computeLinearTransformation(a.spatialReference,k,ea,a.renderSpatialReference);Z.fromMat4(I,ea);Z.transpose(I,I);q.empty(B);c=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];for(var y=0;y<c.length;y++){const S=c[y];let T=d[S[2]];isFinite(T)||(T=r);m.set(k,d[S[0]],d[S[1]],T);u.projectVectorToVector(k,a.spatialReference,k,a.renderSpatialReference);q.expandWithVec3(B,
m.transformMat3(k,k,I))}d=q.width(B);r=q.height(B);c=q.depth(B);y=1/Math.tan(t.fovY/2);e=Math.max(.5*Math.sqrt(d*d+c*c)*Math.max(y,1/Math.tan(t.fovX/2))+.5*r,.5*r*y+.5*Math.max(d,c))/e;h.internalToExternal(a,t,f);b=O(f,b)?0:1;l.scale=h.distanceToScale(a,e,l.targetGeometry.latitude);g=new h.AsyncContext(g);h.fromCenterScale(a,l.targetGeometry,l.scale,f,b,g);l.camera=await g.resolver.promise;return l}function v(a){a&&n.isSome(a.camera)&&(a.rotation=A(a.camera.heading));return a}const k=D.create(),ea=
la.create(),I=ka.create(),B=q.create(),ta=Y.create(),H=D.create(),G=D.create(),R=D.create(),U={heading:0,tilt:0},p=new C,na={point(a,b,c){c[0]=a.x;c[1]=a.y;a.hasZ&&(c[2]=a.z);b(c)},polygon(a,b,c){const d=a.hasZ;for(let e=0;e<a.rings.length;e++){const f=a.rings[e];for(let g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],d&&(c[2]=f[g][2]),b(c)}},polyline(a,b,c){const d=a.hasZ;for(let e=0;e<a.paths.length;e++){const f=a.paths[e];for(let g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],d&&(c[2]=f[g][2]),b(c)}},
multipoint(a,b,c){const d=a.points;a=a.hasZ;for(let e=0;e<d.length;e++)c[0]=d[e][0],c[1]=d[e][1],a&&(c[2]=d[e][2]),b(c)},extent(a,b,c){a.hasZ?(b(m.set(c,a.xmin,a.ymin,a.zmin)),b(m.set(c,a.xmax,a.ymin,a.zmin)),b(m.set(c,a.xmin,a.ymax,a.zmin)),b(m.set(c,a.xmax,a.ymax,a.zmin)),b(m.set(c,a.xmin,a.ymin,a.zmax)),b(m.set(c,a.xmax,a.ymin,a.zmax)),b(m.set(c,a.xmin,a.ymax,a.zmax)),b(m.set(c,a.xmax,a.ymax,a.zmax))):(b(m.set(c,a.xmin,a.ymin,c[2])),b(m.set(c,a.xmax,a.ymin,c[2])),b(m.set(c,a.xmin,a.ymax,c[2])),
b(m.set(c,a.xmax,a.ymax,c[2])))},mesh(a,b,c){if(a=a.vertexAttributes&&a.vertexAttributes.position)for(let d=0;d<a.length;d+=3)b(m.set(c,a[d+0],a[d+1],a[d+2]))}};x.create=async function(a,b,c){if(b&&a.spatialReference){var d={target:null};if("declaredClass"in b||Array.isArray(b))d.target=b;else{for(var e in b)d[e]=b[e];b.center&&!d.target&&(d.target=b.center)}b=d}else b=null;if(!b)throw new J("viewpointutils-create:no-target","Missing target for creating viewpoint");d=new X({fov:a.camera.fov});e=new L({camera:d});
if(b.target instanceof L)return a=await pa(a,b.target,b,c,e),v(a);if(b.target instanceof X)return v(da(a,b.target,e));var f=null!=b.scale||null!=b.zoom;if(b.target instanceof ia){var g=b.target.xmin===b.target.xmax||b.target.ymin===b.target.ymax;return f||g?v(await Q(a,b,b.target.center,d,c,e)):v(await ra(a,b,b.target,d,c,e))}g={boundingBox:q.empty(),hasZ:!1,screenSpaceObjects:[]};var l=f?h.scaleToResolution(a,N(a,b)):void 0;await ca(a,b.target,l,g);if(isFinite(g.boundingBox[0])){q.center(g.boundingBox,
k);p.x=k[0];p.y=k[1];p.z=k[2];p.spatialReference=a.spatialReference;isFinite(p.z)&&g.hasZ?l=q.isPoint(g.boundingBox):(p.z=void 0,l=Y.isPoint(q.toRect(g.boundingBox,ta)));if(f||l)return v(await Q(a,b,p,d,c,e));f=g.screenSpaceObjects;if(f.length){l=Number.NEGATIVE_INFINITY;for(let t=0;t<f.length;t++){const r=f[t].screenSpaceBoundingRect;l=Math.max(l,Math.abs(r[0]),Math.abs(r[1]),Math.abs(r[2]),Math.abs(r[3]))}f=.66-l/Math.min(a.width,a.height)*2}else f=.66;return v(await sa(a,b,p,g.boundingBox,f,d,
c,e))}return b.position?(c=z.cameraOnContentAlongViewDirection(a),m.copy(H,c.viewForward),h.directionToHeadingTilt(a,c.eye,H,c.up,U),d.position=new C(b.position),d.heading=null!=b.heading?b.heading:U.heading,d.tilt=null!=b.tilt?b.tilt:U.tilt,a=P(a,null,d,e),v(a)):v(await qa(a,b,d,c,e))};x.fromCamera=function(a,b,c=null){n.isNone(c)&&(c=new L);return P(a,null,b.clone(),c)};x.headingToRotation=A;x.rotationToHeading=M;x.toCamera=ba;Object.defineProperty(x,"__esModule",{value:!0})});