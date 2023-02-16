// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../../core/arrayUtils","../../../../../core/maybe","../enums"],function(q,n,r){return function(){function p(a,b){this.brushes=a;this.name=b.name;this.drawPhase=b.drawPhase||r.WGLDrawPhase.MAP;this._targetFn=b.target;this.effects=b.effects||[];this.enableDefaultDraw=b.enableDefaultDraw??(()=>!0)}var k=p.prototype;k.render=function(a){const {context:b,profiler:c}=a,d=this._targetFn();var f=this.drawPhase&a.drawPhase;c.recordPassStart(this.name);if(f){this.enableDefaultDraw()&&this._doRender(a,
d);c.recordPassEnd();for(const e of this.effects){if(!e.enable())continue;f=e.apply;const g=e.args&&e.args(),h=b.getViewport(),l=b.getBoundFramebufferObject(),m=a.passOptions;this._bindEffect(a,f,g);this._doRender(a,d,f.defines);this._drawAndUnbindEffect(a,f,h,l,m,g)}}};k._doRender=function(a,b,c){if(!n.isNone(b)){var {profiler:d,context:f}=a;for(const e of this.brushes){d.recordBrushStart(e.name);if(n.isSome(e.brushEffect)){const g=f.getViewport(),h=f.getBoundFramebufferObject(),l=a.passOptions;
this._bindEffect(a,e.brushEffect);this._drawWithBrush(e,a,b,c);this._drawAndUnbindEffect(a,e.brushEffect,g,h,l)}else this._drawWithBrush(e,a,b,c);d.recordBrushEnd()}}};k._drawWithBrush=function(a,b,c,d){q.isArrayLike(c)?(a.prepareState(b,d),a.drawMany(b,c,d)):c.visible&&(a.prepareState(b,d),a.draw(b,c,d))};k._bindEffect=function(a,b,c){const {profiler:d}=a;d.recordPassStart(this.name+"."+b.name);b.bind(a,c);b=b.createOptions(a,c);a.passOptions=b};k._drawAndUnbindEffect=function(a,b,c,d,f,e){const {profiler:g,
context:h}=a;a.passOptions=f;g.recordBrushStart(b.name);b.draw(a,e);b.unbind(a,e);h.bindFramebuffer(d);const {x:l,y:m,width:t,height:u}=c;h.setViewport(l,m,t,u);g.recordBrushEnd();g.recordPassEnd()};return p}()});