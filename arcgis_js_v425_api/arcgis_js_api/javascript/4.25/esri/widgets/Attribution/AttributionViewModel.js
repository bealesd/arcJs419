// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/asyncUtils ../../core/Collection ../../core/HandleOwner ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/contains ../../geometry/support/webMercatorUtils ../../geometry/SpatialReference".split(" "),function(u,t,q,A,x,B,v,w,G,H,C,D,y,E){function z(f,g){return f&&
"copyright"in f&&(!g||"function"===typeof f.originOf&&"user"===f.originOf("copyright"))}function F(f,g){return f.length!==g.length||f.some((k,c)=>k.text!==g[c].text)}function r(f,g,k){k&&g&&(f.find(c=>c.layerView===g&&c.text===k)||f.push({text:k,layerView:g}))}const m=[];q=function(f){function g(c){var a=f.call(this,c)||this;a._clear=()=>{a._fetchedAttributionData.clear();a._pendingAttributions.clear();a.handles.remove("suspension");a.notifyChange("state")};a._pendingAttributions=new Set;a._fetchedAttributionData=
new Map;a.items=new x;a.view=null;a._allLayerViewsChange=b=>{a.handles.remove("suspension");const d=a.get("view.allLayerViews");d&&a.handles.add(d.map(e=>v.watch(()=>[e.suspended,e.layer?.attributionVisible],()=>a._updateAttributionItems())),"suspension");b&&b.removed&&b.removed.forEach(e=>{a._pendingAttributions.delete(e);a._fetchedAttributionData.delete(e)});a._updateAttributionItems()};a.handles.add([v.on(()=>a.view?.allLayerViews,"change",b=>a._allLayerViewsChange(b),{onListenerAdd:()=>a._allLayerViewsChange(),
onListenerRemove:a._clear}),v.when(()=>!0===a.view?.stationary,()=>a._updateAttributionItems())]);return a}u._inheritsLoose(g,f);var k=g.prototype;k.destroy=function(){this.view=null;this._fetchedAttributionData.clear();this._pendingAttributions.clear();this.items.removeAll()};k._updateAttributionItems=function(){const c=this.get("view.allLayerViews");m.length=0;c?(c.forEach(a=>{if(!a.suspended&&a.layer?.attributionVisible){var b=a.layer;if(z(b,"user"))r(m,a,b.copyright);else if(b.hasAttributionData)if(this._fetchedAttributionData.has(a)){var d=
this._fetchedAttributionData.get(a);d?r(m,a,this._getDynamicAttribution(d,this.view,b)):z(b)&&r(m,a,b.copyright)}else this._fetchAttributionData(a);else(d=b.get("portalItem.accessInformation"))?r(m,a,d):r(m,a,b.copyright)}}),F(this.items,m)&&(this.items.removeAll(),this.items.addMany(m)),m.length=0,this.notifyChange("state")):this._clear()};k._fetchAttributionData=function(){var c=u._asyncToGenerator(function*(a){if(!this._pendingAttributions.has(a)){this._pendingAttributions.add(a);var b=yield A.result(a.layer.fetchAttributionData());
this._pendingAttributions.has(a)&&(b=b.ok?this._createContributionIndex(b.value,"bing-maps"===a.layer.type):null,this._pendingAttributions.delete(a),this._fetchedAttributionData.set(a,b));this._updateAttributionItems()}});return function(a){return c.apply(this,arguments)}}();k._createContributionIndex=function(c,a){c=c.contributors;const b={};if(!c)return b;for(let p=0;p<c.length;p++){const l=c[p];var d=l.coverageAreas;if(!d)return;for(const h of d){var e=h.bbox,n=h.zoomMin-(a&&h.zoomMin?1:0);d=h.zoomMax-
(a&&h.zoomMax?1:0);for(e={extent:y.geographicToWebMercator({xmin:e[1],ymin:e[0],xmax:e[3],ymax:e[2],spatialReference:E.WGS84}),attribution:l.attribution||"",score:null!=h.score?h.score:100,id:p};n<=d;n++)b[n]=b[n]||[],b[n].push(e)}}b.maxKey=Math.max.apply(null,Object.keys(b));return b};k._getDynamicAttribution=function(c,a,b){const {extent:d,scale:e}=a;b=b.tileInfo.scaleToZoom(e);b=Math.min(c.maxKey,Math.round(b));if(!d||null==b||-1>=b)return"";c=c[b];const n=y.project(d.center.clone().normalize(),
a.spatialReference),p={};return c?c.filter(l=>{const h=!p[l.id]&&n&&D.extentContainsPoint(l.extent,n);h&&(p[l.id]=!0);return h}).sort((l,h)=>h.score-l.score||l.objectId-h.objectId).map(l=>l.attribution).join(", "):""};u._createClass(g,[{key:"state",get:function(){return this.get("view.ready")?0<this._pendingAttributions.size?"loading":"ready":"disabled"}}]);return g}(B.HandleOwner);t.__decorate([w.property({readOnly:!0,type:x})],q.prototype,"items",void 0);t.__decorate([w.property({readOnly:!0})],
q.prototype,"state",null);t.__decorate([w.property()],q.prototype,"view",void 0);return q=t.__decorate([C.subclass("esri.widgets.Attribution.AttributionViewModel")],q)});