// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/PerformanceSampler ../../../../core/time ../../../../core/accessorSupport/utils ../../../webgl/TimerPool".split(" "),function(d,k,e,g,f,l,m){d.PerformanceCategory=void 0;(function(a){a.OVERLAY="overlay";a.PREPARE="prepare";a.SHADOW_MAP="shadow map";a.LINEAR_DEPTH="linear depth";a.ACCUMULATED_SHADOWS="accumulated shadows";a.NORMALS="normals";a.OBJECT_AND_LAYER_ID_COLOR="object/layer id color";a.SSAO=
"SSAO";a.OPAQUE="opaque";a.OPAQUE_EDGES="opaque edges";a.VOXEL="voxel";a.TRANSPARENT="transparent";a.TRANSPARENT_EDGES="transparent edges";a.HUD_VISIBILITY="HUD visibility";a.TRANSPARENT_TERRAIN="transparent terrain";a.ENVIRONMENT="environment";a.LASER_LINE="laser line";a.OCCLUDED="occluded";a.ANTIALIASING="antialiasing";a.HIGHLIGHTS="highlights";a.HUD_OCCLUDED="HUD occluded";a.HUD_NOT_OCCLUDED="HUD not occluded";a.FINISH="finish"})(d.PerformanceCategory||(d.PerformanceCategory={}));let p=function(){function a(b){this._rctx=
b;this._startTimeStampCPU=f.Milliseconds(0);this._lastTimeStampCPU=f.Milliseconds(0);this._totalCPUTime=new g("Total");this._cpuTimeSamplers=new Map(Object.values(d.PerformanceCategory).map(c=>[c,new g(c)]));this._enableGPUTimer=0;this._totalGPUTime=new g("GPU");this._gpuTimeSamplers=new Map(Object.values(d.PerformanceCategory).map(c=>[c,new g(c)]));this._totalTime=f.Milliseconds(0);this._totalFrameCount=0}var h=a.prototype;h.enableGPUPerformanceInfo=function(){if(e.isNone(this._gpuTimerPool)){const b=
[...Object.values(d.PerformanceCategory),"Total"];this._gpuTimerPool=m.createElapsedTimerPool(this._rctx,b)}if(e.isNone(this._gpuTimerPool))return{hasGPUTimerSupport:!1,remove:()=>{}};++this._enableGPUTimer;return{hasGPUTimerSupport:!0,remove:l.once(()=>{--this._enableGPUTimer;0===this._enableGPUTimer&&(this._gpuTimerPool=e.disposeMaybe(this._gpuTimerPool))})}};h.startFrame=function(){this._startTimeStampCPU=this._lastTimeStampCPU=f.Milliseconds(performance.now());e.isSome(this._gpuTimerPool)&&this._gpuTimerPool.start()};
h.advance=function(b){var c=f.Milliseconds(performance.now());this._cpuTimeSamplers.get(b).record(c-this._lastTimeStampCPU);this._lastTimeStampCPU=c;e.isSome(this._gpuTimerPool)&&(c=this._gpuTimerPool.stop(b),this._gpuTimeSamplers.get(b).record(c),this._gpuTimerPool.start())};h.finishFrame=function(){if(e.isSome(this._gpuTimerPool)){var b=this._gpuTimerPool.stop(d.PerformanceCategory.FINISH);this._gpuTimeSamplers.get(d.PerformanceCategory.FINISH).record(b)}b=f.Milliseconds(performance.now()-this._startTimeStampCPU);
this._totalTime=f.Milliseconds(this._totalTime+b);this._totalCPUTime.record(b);e.isSome(this._gpuTimerPool)&&this._totalGPUTime.record(this.gpuTimeSamplers.reduce((c,n)=>c+(n.last||0),0));++this._totalFrameCount};k._createClass(a,[{key:"totalCPUTimeSampler",get:function(){return this._totalCPUTime}},{key:"cpuTimeSamplers",get:function(){return Array.from(this._cpuTimeSamplers.values())}},{key:"totalGPUTimeSampler",get:function(){return this._totalGPUTime}},{key:"gpuTimeSamplers",get:function(){return Array.from(this._gpuTimeSamplers.values())}},
{key:"gpuSamplingEnabled",get:function(){return e.isSome(this._gpuTimerPool)}},{key:"totalTime",get:function(){return this._totalTime}},{key:"totalFrameCount",get:function(){return this._totalFrameCount}},{key:"elapsedTime",get:function(){return f.Milliseconds(performance.now()-this._startTimeStampCPU)}}]);return a}();d.RendererPerformanceInfo=p;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});