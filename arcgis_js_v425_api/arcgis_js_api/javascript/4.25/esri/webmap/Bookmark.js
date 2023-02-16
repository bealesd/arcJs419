// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../TimeExtent ../Viewpoint ../core/Error ../core/Identifiable ../core/JSONSupport ../core/lang ../core/Logger ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/ensureType ../webdoc/support/SlideThumbnail".split(" "),function(r,c,v,t,w,b,
x,y,u,g,h,z,A,B,C,D,k){var q;b=q=function(e){function l(a){a=e.call(this,a)||this;a.name=null;a.thumbnail=new k.SlideThumbnail;a.timeExtent=null;return a}r._inheritsLoose(l,e);var m=l.prototype;m.castThumbnail=function(a){return"string"===typeof a?new k.SlideThumbnail({url:a}):D.ensureType(k.SlideThumbnail,a)};m.readViewpoint=function(a,d){const {extent:f,viewpoint:n}=d;return t.fromJSON(n||{targetGeometry:f})};m.writeViewpoint=function(a,d,f,n){if(a){var {targetGeometry:p}=a;g.isSome(p)&&"extent"!==
p.type?n?.messages?n.messages.push(new w("property:unsupported","Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.")):u.getLogger(this.declaredClass).error("Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent."):(g.isSome(p)&&(d.extent=p.toJSON()),d[f]=a.toJSON())}};m.clone=function(){return new q(y.clone({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))};r._createClass(l,
[{key:"viewpoint",set:function(a){const {targetGeometry:d,scale:f}=a;g.isSome(d)&&"point"===d.type&&g.isNone(f)&&u.getLogger(this.declaredClass).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",a);this._set("viewpoint",a)}}]);return l}(b.IdentifiableMixin(x.JSONSupport));c.__decorate([h.property({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],b.prototype,"name",void 0);c.__decorate([h.property({type:k.SlideThumbnail,json:{write:{overridePolicy(e){return{enabled:!(!e||
!e.url)}}}}})],b.prototype,"thumbnail",void 0);c.__decorate([z.cast("thumbnail")],b.prototype,"castThumbnail",null);c.__decorate([h.property({type:v,json:{write:!0}})],b.prototype,"timeExtent",void 0);c.__decorate([h.property({type:t,nonNullable:!0,json:{write:!0}})],b.prototype,"viewpoint",null);c.__decorate([A.reader("viewpoint",["extent","viewpoint"])],b.prototype,"readViewpoint",null);c.__decorate([C.writer("viewpoint")],b.prototype,"writeViewpoint",null);return b=q=c.__decorate([B.subclass("esri.webmap.Bookmark")],
b)});