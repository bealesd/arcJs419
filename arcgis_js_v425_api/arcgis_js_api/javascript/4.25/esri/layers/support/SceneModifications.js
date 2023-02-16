// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/Collection ../../core/JSONSupport ../../core/maybe ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./SceneModification".split(" "),function(k,l,r,e,t,u,v,w,z,A,x,h){var f;e=f=function(m){function g(a){a=m.call(this,a)||this;a.url=null;return a}k._inheritsLoose(g,m);var n=g.prototype;
n.clone=function(){return new f({url:this.url,items:this.items.map(a=>a.clone())})};n.toJSON=function(a){return this.toArray().map(b=>b.toJSON(a)).filter(b=>!!b.geometry)};g.fromJSON=function(a,b){const c=new f;for(const d of a)c.add(h.fromJSON(d,b));return c};g.fromUrl=function(){var a=k._asyncToGenerator(function*(b,c,d){const y={url:v.urlToObject(b),origin:"service"};d=yield r(b,{responseType:"json",signal:u.get(d,"signal")});c=c.toJSON();const p=[];for(const q of d.data)p.push(h.fromJSON({...q,
geometry:{...q.geometry,spatialReference:c}},y));return new f({url:b,items:p})});return function(b,c,d){return a.apply(this,arguments)}}();return g}(t.JSONSupportMixin(e.ofType(h)));l.__decorate([w.property({type:String})],e.prototype,"url",void 0);return e=f=l.__decorate([x.subclass("esri.layers.support.SceneModifications")],e)});