// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","./BaseBucket"],function(k,q){return function(l){function g(a,c,b,d){a=l.call(this,a,c)||this;a.type=4;a._circleVertexBuffer=b;a._circleIndexBuffer=d;return a}k._inheritsLoose(g,l);var m=g.prototype;m.processFeatures=function(a){const c=this._circleVertexBuffer,b=this._circleIndexBuffer;this._circleIndexStart=3*b.index;this._circleIndexCount=0;const d=this.layer,r=this.zoom;a&&a.setExtent(this.layerExtent);for(const n of this._features){var e=
n.getGeometry(a);if(!e)continue;const h=d.circleMaterial.encodeAttributes(n,r,d);for(const p of e)if(p)for(const f of p)e=c.index,c.add(f.x,f.y,0,0,h),c.add(f.x,f.y,0,1,h),c.add(f.x,f.y,1,0,h),c.add(f.x,f.y,1,1,h),b.add(e+0,e+1,e+2),b.add(e+1,e+2,e+3),this._circleIndexCount+=6}};m.serialize=function(){var a=6+this.layerUIDs.length;a+=this._circleVertexBuffer.array.length;a+=this._circleIndexBuffer.array.length;a=new Uint32Array(a);var c=new Int32Array(a.buffer);let b=0;a[b++]=this.type;a[b++]=this.layerUIDs.length;
for(var d=0;d<this.layerUIDs.length;d++)a[b++]=this.layerUIDs[d];a[b++]=this._circleIndexStart;a[b++]=this._circleIndexCount;a[b++]=this._circleVertexBuffer.array.length;for(d=0;d<this._circleVertexBuffer.array.length;d++)c[b++]=this._circleVertexBuffer.array[d];a[b++]=this._circleIndexBuffer.array.length;for(c=0;c<this._circleIndexBuffer.array.length;c++)a[b++]=this._circleIndexBuffer.array[c];return a.buffer};k._createClass(g,[{key:"circleIndexStart",get:function(){return this._circleIndexStart}},
{key:"circleIndexCount",get:function(){return this._circleIndexCount}}]);return g}(q)});