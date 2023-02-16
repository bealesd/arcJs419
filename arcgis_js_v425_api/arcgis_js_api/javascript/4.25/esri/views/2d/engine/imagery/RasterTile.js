// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/mat3f32","./RasterBitmap","../webgl/TiledDisplayObject"],function(g,h,k,n,f){f=function(d){function e(a,p,q,r,l,m,t=null){var b=d.call(this,a,p,q,r,l,m)||this;b.bitmap=new n.RasterBitmap(t,null,null);b.bitmap.coordScale=[l,m];b.bitmap.once("isReady",()=>b.ready());return b}h._inheritsLoose(e,d);var c=e.prototype;c.destroy=function(){d.prototype.destroy.call(this);this.bitmap.destroy();this.stage=this.bitmap=null};
c.setTransform=function(a){d.prototype.setTransform.call(this,a);this.bitmap.transforms.dvs=this.transforms.dvs};c._createTransforms=function(){return{dvs:k.create(),tileMat3:k.create()}};c.onAttach=function(){this.bitmap.stage=this.stage};c.onDetach=function(){this.bitmap.stage=null};h._createClass(e,[{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(a){this.bitmap.stencilRef=a}}]);return e}(f.TiledDisplayObject);g.RasterTile=f;Object.defineProperties(g,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});