// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./BarChartMediaInfo ./ColumnChartMediaInfo ./Content ./ImageMediaInfo ./LineChartMediaInfo ./PieChartMediaInfo ./support/mediaInfoTypes".split(" "),function(l,d,m,e,c,n,p,q,r,t,u,v,w,x,y){var f;
c=f=function(k){function g(a){a=k.call(this,a)||this;a.activeMediaInfoIndex=null;a.attributes=null;a.description=null;a.mediaInfos=null;a.title=null;a.type="media";return a}l._inheritsLoose(g,k);var h=g.prototype;h.readMediaInfos=function(a){return a&&a.map(b=>{if("image"===b.type)return v.fromJSON(b);if("barchart"===b.type)return r.fromJSON(b);if("columnchart"===b.type)return t.fromJSON(b);if("linechart"===b.type)return w.fromJSON(b);if("piechart"===b.type)return x.fromJSON(b)}).filter(Boolean)};
h.writeMediaInfos=function(a,b){b.mediaInfos=a&&a.map(z=>z.toJSON())};h.clone=function(){return new f(m.clone({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))};return g}(u);d.__decorate([e.property()],c.prototype,"activeMediaInfoIndex",void 0);d.__decorate([e.property({type:Object,json:{write:!0}})],c.prototype,"attributes",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,
"description",void 0);d.__decorate([e.property({types:[y.types]})],c.prototype,"mediaInfos",void 0);d.__decorate([n.reader("mediaInfos")],c.prototype,"readMediaInfos",null);d.__decorate([q.writer("mediaInfos")],c.prototype,"writeMediaInfos",null);d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,"title",void 0);d.__decorate([e.property({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0);return c=f=d.__decorate([p.subclass("esri.popup.content.MediaContent")],
c)});