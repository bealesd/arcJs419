// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/vec3f64 ../../../chunks/vec3 ../support/mathUtils ../../../chunks/frustum".split(" "),function(n,p,f,g,q,d){function h(e,c,a){e.origin=c;e.endpoint=a;q.directionFromTo(e.direction,c,a)}let m=function(){function e(a){this.renderCoordsHelper=a;this.frustum=d.create();this._points=d.createPoints();this.lines=Array(12);this.origin=f.create();this.direction=f.create();this._altitude=null;for(a=0;12>a;a++)this.lines[a]={origin:null,
direction:f.create(),endpoint:null}}var c=e.prototype;c.update=function(a){d.fromMatrix(a.viewMatrix,a.projectionMatrix,this.frustum,this._points);g.copy(this.origin,a.eye);g.copy(this.direction,a.viewForward);this._altitude=this.renderCoordsHelper.getAltitude(this.origin);this.updateLines()};c.updatePoints=function(a){for(let b=0;b<this._points.length;b++)g.copy(this._points[b],a[b]);d.computePlanes(this.frustum,this._points);this.updateLines()};c.intersectsSphere=function(a){return d.intersectsSphere(this.frustum,
a)};c.intersectsRay=function(a){return d.intersectsRay(this.frustum,a)};c.intersectsLineSegment=function(a,b){return d.intersectsLineSegment(this.frustum,a,b)};c.intersectsPoint=function(a){return d.intersectsPoint(this.frustum,a)};c.updateLines=function(){const a=this._points;for(let b=0;4>b;b++){const k=b,l=b+4;h(this.lines[b],a[k],a[l]);h(this.lines[b+4],a[k],3===b?a[0]:a[k+1]);h(this.lines[b+8],a[l],3===b?a[4]:a[l+1])}};p._createClass(e,[{key:"planes",get:function(){return this.frustum}},{key:"points",
get:function(){return this._points}},{key:"mutablePoints",get:function(){return this._points}},{key:"altitude",get:function(){return this._altitude}}]);return e}();m.planePointIndices=d.planePointIndices;m.nearFarLineIndices=[[0,4],[1,5],[2,6],[3,7]];n.Frustum=m;Object.defineProperty(n,"__esModule",{value:!0})});