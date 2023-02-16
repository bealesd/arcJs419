// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../lib/AutoDisposable ../lib/GLMaterial ./internal/MaterialUtil ../lib/Material ./internal/DefaultBufferWriter ../shaders/SlicePlaneMaterialTechnique".split(" "),function(f,g,m,n,p,q,h,k,r){let y=function(d){function b(a){return d.call(this,a,t)||this}g._inheritsLoose(b,d);var c=b.prototype;c.intersect=function(a,e,z,u,v,w,x){return q.intersectTriangleGeometry(a,e,u,v,w,void 0,x)};c.createBufferWriter=function(){return new k.DefaultBufferWriter(k.PositionUVLayout)};
c.getGLMaterial=function(a){return 0===a.output?new l(a):void 0};return b}(h.Material),l=function(d){function b(a){a=d.call(this,a)||this;a.technique=new r.SlicePlaneMaterialTechnique(a.techniqueRep.constructionContext,null);a.updateParameters();return a}g._inheritsLoose(b,d);var c=b.prototype;c.updateParameters=function(){};c.beginSlot=function(a){return 8===a};c.bind=function(a,e){a.bindProgram(this.technique.program);this.technique.bindPass(a,this.material.params,e)};return b}(p);m.__decorate([n.autoDispose()],
l.prototype,"technique",void 0);const t={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4,...h.materialParametersDefaults};f.SlicePlaneMaterial=y;Object.defineProperty(f,"__esModule",{value:!0})});