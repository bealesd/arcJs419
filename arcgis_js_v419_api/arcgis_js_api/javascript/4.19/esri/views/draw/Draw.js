// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../chunks/MultipointDrawAction ./PointDrawAction ./PolygonDrawAction ./PolylineDrawAction ./SegmentDrawAction".split(" "),function(k,d,b,u,v,f,w,l,x,
y,z,m,n,p,q,r,t){b=function(h){function g(){var c=h.apply(this,arguments)||this;c.activeAction=null;c.type="draw";c.view=null;return c}k._inheritsLoose(g,h);var e=g.prototype;e.destroy=function(){this.activeAction&&(this.activeAction.destroy(),this.activeAction=null)};e.create=function(c,a){this.reset();a={view:this.view,...a};switch(c){case "point":a.editGeometryType="point";this.activeAction=new p.PointDrawAction(a);break;case "polyline":a.editGeometryType="polyline";this.activeAction=new r.PolylineDrawAction(a);
break;case "multipoint":a.editGeometryType="polygon";this.activeAction=new n.MultipointDrawAction(a);break;case "polygon":a.editGeometryType="polygon";this.activeAction=new q.PolygonDrawAction(a);break;case "rectangle":case "circle":case "ellipse":case "triangle":a.editGeometryType="polygon",this.activeAction=new t.SegmentDrawAction(a)}return this.activeAction};e.complete=function(){this.activeAction&&this.activeAction.complete();this.activeAction=null};e.reset=function(){this.activeAction&&this.activeAction.destroy();
this.activeAction=null};return g}(m);d.__decorate([f.property()],b.prototype,"activeAction",void 0);d.__decorate([f.property({readOnly:!0})],b.prototype,"type",void 0);d.__decorate([f.property()],b.prototype,"view",void 0);return b=d.__decorate([l.subclass("esri.views.draw.Draw")],b)});