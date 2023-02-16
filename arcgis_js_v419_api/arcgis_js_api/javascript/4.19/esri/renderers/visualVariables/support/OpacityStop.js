// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/JSONSupport ../../../webdoc/support/opacityUtils".split(" "),
function(m,c,b,v,n,d,w,p,q,r,x,y,z,t,k){var e;b=e=function(l){function f(a){a=l.call(this,a)||this;a.label=null;a.opacity=null;a.value=null;return a}m._inheritsLoose(f,l);var g=f.prototype;g.readOpacity=function(a,h){return k.transparencyToOpacity(h.transparency)};g.writeOpacity=function(a,h,u){h[u]=k.opacityToTransparency(a)};g.clone=function(){return new e({label:this.label,opacity:this.opacity,value:this.value})};return f}(t.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],
b.prototype,"label",void 0);c.__decorate([d.property({type:Number,json:{type:n.Integer,write:{target:"transparency"}}})],b.prototype,"opacity",void 0);c.__decorate([p.reader("opacity",["transparency"])],b.prototype,"readOpacity",null);c.__decorate([r.writer("opacity")],b.prototype,"writeOpacity",null);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"value",void 0);return b=e=c.__decorate([q.subclass("esri.renderers.visualVariables.support.OpacityStop")],b)});