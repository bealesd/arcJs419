// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Collection ../../../Graphic ../../layers/LayerView ./graphics/GraphicsView2D ./graphics/GraphicContainer ./LayerView2D".split(" "),
function(l,f,e,w,x,h,y,m,z,A,B,n,p,q,r,t,u){const v={remove(){},pause(){},resume(){}};e=function(k){function g(){return k.apply(this,arguments)||this}l._inheritsLoose(g,k);var c=g.prototype;c.initialize=function(){this.graphicsView=new r({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t(this.view.featuresTilingScheme)})};c.attach=function(){this.container.addChild(this.graphicsView.container);this.handles.add(this.layer.on("graphic-update",
this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")};c.detach=function(){this.container.removeAllChildren();this.graphicsView.destroy();this.handles.remove("graphicslayerview2d")};c.hitTest=function(a,b){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(a,b)};c.fetchPopupFeatures=async function(a){if(this.graphicsView)return this.graphicsView.searchFeatures(a).then(b=>b.filter(d=>!!d.popupTemplate))};c.update=function(a){this.graphicsView.processUpdate(a)};
c.moveStart=function(){};c.viewChange=function(){this.graphicsView.viewChange()};c.moveEnd=function(){};c.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating};c.highlight=function(a){let b;"number"===typeof a?b=[a]:a instanceof p?b=[a.uid]:Array.isArray(a)&&0<a.length?b="number"===typeof a[0]?a:a.map(d=>d&&d.uid):n.isCollection(a)&&(b=a.map(d=>d&&d.uid).toArray());b=b.filter(d=>null!=d);if(!b.length)return v;this.graphicsView.addHighlight(b);return{remove:()=>this.graphicsView.removeHighlight(b)}};
c.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)};return g}(u.LayerView2DMixin(q));f.__decorate([h.property()],e.prototype,"graphicsView",void 0);f.__decorate([h.property()],e.prototype,"updating",void 0);return e=f.__decorate([m.subclass("esri.views.2d.layers.GraphicsLayerView2D")],e)});