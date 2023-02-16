// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2f64 ../../../chunks/vec2 ./snappingUtils ./SnappingAlgorithm ../../support/geometry2dUtils ./candidates/RightAngleTriangleSnappingCandidate".split(" "),function(n,t,u,p,q,h,k,v,w){k=function(r){function l(){return r.apply(this,arguments)||this}t._inheritsLoose(l,r);var m=l.prototype;m.snapNewVertex=function(d,c){const b=c.geometry.editGeometry.components[0],a=[],e=b.vertices.length;if("polygon"!==c.geometry.type||
2>e)return a;this._processCandidateProposal(b.vertices[0].pos,b.vertices[e-1].pos,d,c,a);return a};m.snapExistingVertex=function(d,c){const b=[],a=u.unwrap(c.vertexHandle),e=a.component;if(2>e.edges.length||"polyline"===c.geometry.type&&(0===a.index||a.index===e.vertices.length-1))return b;this._processCandidateProposal(a.left.left.pos,a.right.right.pos,d,c,b);return b};m._processCandidateProposal=function(d,c,b,a,e){if(this.exceedsShortLineThreshold(d,c,a)){var f=q.lerp(p.create(),d,c,.5),g=.5*q.distance(d,
c);g=v.projectPointToCircle(p.create(),b,f,g);f=a.coordinateHelper;g=f.fromXYZ(g,f.getZ(b,0));b=h.anyMapPointToScreenPoint(b,f,a.elevationInfo,this.view);h.squareDistance(b,h.anyMapPointToScreenPoint(g,f,a.elevationInfo,this.view))<this.squaredProximityTreshold(a.pointer)&&e.push(new w.RightAngleTriangleSnappingCandidate({coordinateHelper:f,targetPoint:g,point1:d,point2:c}))}};return l}(k.SnappingAlgorithm);n.RightAngleTriangleSnapper=k;Object.defineProperty(n,"__esModule",{value:!0})});