// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../support/buffer/BufferView","../Util","./BackedBufferObject"],function(h,m,g,f,n){let k=function(d){this.modelOriginHi=d.getField("modelOriginHi",g.BufferViewVec3f);this.modelOriginLo=d.getField("modelOriginLo",g.BufferViewVec3f);this.model=d.getField("model",g.BufferViewMat3f);this.modelNormal=d.getField("modelNormal",g.BufferViewMat3f);this.color=d.getField("instanceColor",g.BufferViewVec4f);this.featureAttribute=d.getField("instanceFeatureAttribute",
g.BufferViewVec4f)},p=function(){function d(a,b){this._tailIndex=this._headIndex=0;this._captureFirstIndex=!0;this._updating=!1;this._prevHeadIndex=0;this._resized=!1;this._rctx=a;this._instanceBufferLayout=b;this._elementSize=b.stride;this._capacity=1}var c=d.prototype;c.destroy=function(){this._buffer&&this._buffer.destroy()};c.reset=function(){this._tailIndex=this._headIndex=0;this._firstIndex=null};c.startUpdateCylce=function(){this._captureFirstIndex=!0};c.beginUpdate=function(){f.assert(!this._updating,
"already updating");this._updating=!0;this._prevHeadIndex=this._headIndex};c.endUpdate=function(){f.assert(this._updating,"not updating");this.size<.3*this.capacity&&this.shrink();this._resized?(this._buffer.transferAll(),this._resized=!1):this.transferRange(this._prevHeadIndex,this._headIndex);this._updating=!1};c.allocateHead=function(){f.assert(this._updating,"not updating");this.isFull&&this.grow();const a=this.headIndex;this._captureFirstIndex&&(this._firstIndex=a,this._captureFirstIndex=!1);
this.incrementHead();f.assert(this._headIndex!==this._tailIndex,"invalid pointers");return a};c.freeTail=function(){f.assert(this._updating,"not updating");f.assert(0<this.size,"invalid size");const a=this._tailIndex===this._firstIndex;this.incrementTail();a&&(this._firstIndex=this._tailIndex)};c.grow=function(){this.resize(Math.max(1024,Math.floor(2*this._capacity)))};c.shrink=function(){this.resize(Math.max(1024,Math.floor(.5*this._capacity)))};c.resize=function(a){f.assert(this._updating,"not updating");
if(a!==this._capacity){var b=new n(this._rctx,this._elementSize,a);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const e=this.size,l=this.compactInstances(b);f.assert(l===e,"invalid compaction");this._buffer.destroy();this._tailIndex=0;this._headIndex=l;this._prevHeadIndex=0}this._resized=!0;this._capacity=a;this._buffer=b;this._view=new k(this._instanceBufferLayout.createView(this._buffer.array))}};c.compactInstances=function(a){const b=
this._headIndex,e=this._tailIndex;return e<b?(this._buffer.copyRange(e,b,a),b-e):e>b?(this._buffer.copyRange(e,this._capacity,a),0<b&&this._buffer.copyRange(0,b,a,this._capacity-e),b+(this._capacity-e)):0};c.incrementHead=function(a=1){this._headIndex=(this._headIndex+a)%this._capacity};c.incrementTail=function(a=1){this._tailIndex=(this._tailIndex+a)%this._capacity};c.transferRange=function(a,b){a<b?this._buffer.transferRange(a,b):a>b&&(0<b&&this._buffer.transferRange(0,b),this._buffer.transferRange(a,
this._capacity))};m._createClass(d,[{key:"buffer",get:function(){return this._buffer.buffer}},{key:"view",get:function(){return this._view}},{key:"capacity",get:function(){return this._capacity}},{key:"size",get:function(){const a=this._headIndex,b=this._tailIndex;return a>=b?a-b:a+this._capacity-b}},{key:"isEmpty",get:function(){return this._headIndex===this._tailIndex}},{key:"isFull",get:function(){return this._tailIndex===(this._headIndex+1)%this._capacity}},{key:"headIndex",get:function(){return this._headIndex}},
{key:"tailIndex",get:function(){return this._tailIndex}},{key:"firstIndex",get:function(){return this._firstIndex}},{key:"memoryUsage",get:function(){return this._buffer?this._buffer.memoryUsage:{cpu:0,gpu:0}}}]);return d}();h.RenderInstanceData=p;h.RenderInstanceDataView=k;Object.defineProperty(h,"__esModule",{value:!0})});