// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/lang ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/ray".split(" "),function(a,l,c,m,n,e,p,d,v,q,r,t,u){var f;a.LineOfSightIntersectionResult=
f=function(h){function g(b){return h.call(this,b)||this}l._inheritsLoose(g,h);var k=g.prototype;k.clone=function(){return new f({type:this.type,id:e.clone(this.id),mapPoint:e.clone(this.mapPoint),renderPoint:t.clone(this.renderPoint),normal:e.clone(this.normal),ray:e.clone(this.ray),graphic:this.graphic})};k.equals=function(b){return this.type===b.type&&this.id===b.id&&p.equalsMaybe(this.mapPoint,b.mapPoint)&&r.equals(this.renderPoint,b.renderPoint)&&n.equals(this.normal,b.normal)&&u.equals(this.ray,
b.ray)&&this.graphic===b.graphic};return g}(m);c.__decorate([d.property()],a.LineOfSightIntersectionResult.prototype,"type",void 0);c.__decorate([d.property({constructOnly:!0})],a.LineOfSightIntersectionResult.prototype,"id",void 0);c.__decorate([d.property({constructOnly:!0})],a.LineOfSightIntersectionResult.prototype,"mapPoint",void 0);c.__decorate([d.property({constructOnly:!0})],a.LineOfSightIntersectionResult.prototype,"renderPoint",void 0);c.__decorate([d.property({constructOnly:!0})],a.LineOfSightIntersectionResult.prototype,
"normal",void 0);c.__decorate([d.property({constructOnly:!0})],a.LineOfSightIntersectionResult.prototype,"graphic",void 0);c.__decorate([d.property({constructOnly:!0})],a.LineOfSightIntersectionResult.prototype,"ray",void 0);a.LineOfSightIntersectionResult=f=c.__decorate([q.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],a.LineOfSightIntersectionResult);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});