// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/PooledArray ../../../../core/promiseUtils ./depthRange ./RenderSlot".split(" "),function(f,m,n,g,p,h){let t=function(){function e(a){this._context=a;this._renderPlugins=new n;this._slots=[];for(a=0;a<h.RenderSlot.MAX_SLOTS;++a)this._slots[a]=[]}var d=e.prototype;d.add=function(a,b,c){const k=()=>{if(c?.aborted)throw b.uninitializeRenderContext(),g.createAbortError();this._renderPlugins.push(b);for(const q of a)this._slots[q].push(b);
this._context.requestRender()},l=b.initializeRenderContext(this._context,c);if(g.isPromiseLike(l))return l.then(k);k()};d.remove=function(a){if(null!=this._renderPlugins.removeUnordered(a)){for(let b=0;b<this._slots.length;++b)this._slots[b]=this._slots[b].filter(c=>c!==a);a.uninitializeRenderContext();this._context.requestRender()}};d.prepareRender=function(){this._renderPlugins.forAll(a=>{a.prepareRender&&a.prepareRender(this._context.renderContext)})};d.updateAnimation=function(a){let b=!1;this._renderPlugins.forAll(c=>
{c.updateAnimation&&(b=c.updateAnimation(a)||b)});return b};d.render=function(){const a=[];this._slots[this._context.renderContext.bindParameters.slot].filter(b=>{if(!b.canRender)return!1;if("prepareTechnique"in b)return(b=b.prepareTechnique(this._context.renderContext))?(a.push(b),!0):!1;a.push(null);return!0}).forEach((b,c)=>b.render(this._context.renderContext,a[c]))};d.queryDepthRange=function(a){const b=r;b.near=Infinity;b.far=-Infinity;this._renderPlugins.forAll(c=>{c.queryDepthRange&&(c=c.queryDepthRange(a))&&
p.union(b,c,b)});return b};m._createClass(e,[{key:"needsTransparentPass",get:function(){return this._renderPlugins.some(a=>a.needsTransparentPass)}},{key:"needsHighlight",get:function(){return this._renderPlugins.some(a=>a.needsHighlight)}},{key:"needsLinearDepth",get:function(){return this._renderPlugins.some(a=>a.needsLinearDepth)}},{key:"needsLaserlineWithContrastControl",get:function(){const a=this._slots[h.RenderSlot.LASERLINES_CONTRAST_CONTROL];return!!a&&0<a.length}},{key:"renderOccludedFlags",
get:function(){return this._renderPlugins.reduce((a,b)=>a|b.renderOccludedFlags,0)}}]);return e}();const r={near:0,far:0};f.RenderPluginManager=t;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});