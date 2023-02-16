// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../support/elevationInfoUtils ./Settings ./SnappingAlgorithm ./snappingUtils ./candidates/ParallelLineSnappingCandidate ../support/viewUtils ../../support/geometry2dUtils".split(" "),function(y,D,E,z,F,q,A,u,k,G,v,w){u=function(B){function x(){return B.apply(this,arguments)||this}D._inheritsLoose(x,B);var r=x.prototype;r.snapNewVertex=function(d,a){var b=a.editGeometryOperations.data.components[0],
c=b.edges.length,e=b.vertices.length;const f=[];if(2>c)return f;const {view:g}=this,l=v.anyMapPointToScreenPoint(d,a.coordinateHelper,q.absoluteHeightElevationInfo,g);e=k.convertPointElevation(b.vertices[e-1].pos,g,a);const h=k.convertPointElevation(b.vertices[0].pos,g,a);c=b=b.edges[c-1];do{if(this.edgeExceedsShortLineThreshold(c,a)){const n=k.editEdgeToSnappingEdge(c,g,a);this._checkEdgeForParalleLines(n,e,d,l,a,f);this._checkEdgeForParalleLines(n,h,d,l,a,f)}c=c.leftVertex.leftEdge}while(c&&c!==
b);return f};r.snapExistingVertex=function(d,a){const b=[],c=E.unwrap(a.vertexHandle);var e=c.component;if(3>e.edges.length)return b;const {view:f}=this,g=v.anyMapPointToScreenPoint(d,a.coordinateHelper,q.absoluteHeightElevationInfo,f),l=c.leftEdge,h=c.rightEdge,n=e.vertices[0],H=k.convertPointElevation(n.pos,f,a),C=e.vertices[e.vertices.length-1],I=k.convertPointElevation(C.pos,f,a);let m=e=e.edges[0];do{if(m!==l&&m!==h&&this.edgeExceedsShortLineThreshold(m,a)){const t=k.editEdgeToSnappingEdge(m,
f,a);l&&this._checkEdgeForParalleLines(t,k.convertPointElevation(l.leftVertex.pos,f,a),d,g,a,b);h&&this._checkEdgeForParalleLines(t,k.convertPointElevation(h.rightVertex.pos,f,a),d,g,a,b);c===n?this._checkEdgeForParalleLines(t,I,d,g,a,b):c===C&&this._checkEdgeForParalleLines(t,H,d,g,a,b)}m=m.rightVertex.rightEdge}while(m&&m!==e);return b};r._checkEdgeForParalleLines=function(d,a,b,c,e,f){const g=d.left,l=d.right;w.projectPointToLine(p,a,g,l);if(!(z.squaredDistance(p,a)<A.defaults.parallelLineThreshold)){w.projectPointToLine(p,
b,g,l,a);var {coordinateHelper:h,pointer:n}=e;b=h.fromXYZ(p,h.getZ(b,0));k.squaredScreenDistance(c,v.anyMapPointToScreenPoint(b,h,q.absoluteHeightElevationInfo,this.view))<this.squaredProximityThreshold(n)&&!this._parallelToPreviousCandidate(d,f)&&f.push(new G.ParallelLineSnappingCandidate({coordinateHelper:h,referenceLine:d,lineStart:a,targetPoint:b,elevationInfo:h.hasZ()?q.absoluteHeightElevationInfo:null}))}};r._parallelToPreviousCandidate=function(d,a){const b=d.left,c=d.right;for(const e of a)if(w.projectPointToLine(p,
c,e.constraint.start,e.constraint.end,b),z.squaredDistance(p,c)<A.defaults.parallelLineThreshold)return e.addReferenceLine(d),!0;return!1};return x}(u.SnappingAlgorithm);const p=F.create();y.ParallelLineSnapper=u;Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});