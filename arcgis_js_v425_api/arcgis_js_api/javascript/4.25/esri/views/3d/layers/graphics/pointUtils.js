// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/mat4f64 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/coordsUtils ../../../../layers/graphics/dehydratedFeatures ./elevationAlignmentUtils ./graphicUtils ../../webgl-engine/lib/Object3D".split(" "),function(g,l,p,q,k,r,m,n,t,u,v){const d=q.create();g.createStageObjectForHUD=function(a,b,c,w,x,f,e,y){const z=c?c.length:0;var h=a.clippingExtent;k.projectPointToVector(b,
d,a.elevationProvider.spatialReference);if(l.isSome(h)&&!r.containsPoint(h,d))return null;k.projectPointToVector(b,d,a.renderCoordsHelper.spatialReference);h=a.localOriginFactory.getOrigin(d);f=new v.Object3D({castShadow:!1,metadata:{layerUid:f,graphicUid:e,usesVerticalDistanceToGround:!0}});for(e=0;e<z;e++)f.addGeometry(c[e],w[e],p.IDENTITY,h,y);a=t.applyElevationAlignmentForHUD(f,b,a.elevationProvider,a.renderCoordsHelper,x);return{object:f,sampledElevation:a}};g.extendPointGraphicElevationContext=
function(a,b,c){a=a.elevationContext;c=c.spatialReference;k.projectPointToVector(b,d,c);a.centerPointInElevationSR=n.makeDehydratedPoint(d[0],d[1],b.hasZ?d[2]:0,l.isSome(c)?c:null)};g.placePointOnGeometry=function(a){switch(a.type){case "point":return a;case "polygon":case "extent":return u.computeCentroid(a);case "polyline":var b=a.paths[0];if(!b||0===b.length)break;b=m.getPointOnPath(b,m.getPathLength(b)/2);return n.makeDehydratedPoint(b[0],b[1],b[2],a.spatialReference);case "mesh":return a.origin}return null};
Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});