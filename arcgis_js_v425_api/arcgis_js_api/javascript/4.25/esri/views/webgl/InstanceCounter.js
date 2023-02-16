// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../support/AllocationTracer","./enums"],function(d,h,k,e){const g={RECORD_ALLOCATIONS:!1};let m=function(){function f(){this._current=[];this._max=[];for(this._allocations=new k.AllocationTracer(g.RECORD_ALLOCATIONS);this._current.length<e.ResourceType.COUNT;)this._current.push(0),this._max.push(0)}var c=f.prototype;c.resetMax=function(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)};c.increment=function(a,
b){const l=++this._current[a];this._max[a]=Math.max(l,this._max[a]);this._allocations.add(b)};c.decrement=function(a,b){--this._current[a];this._allocations.remove(b)};c.printResourceCount=function(){if(0<this.total){console.log("Live objects:");for(let a=0;a<e.ResourceType.COUNT;++a){const b=this._current[a];0<b&&console.log(`${e.ResourceType[a]}: ${b}`)}}this._allocations.print()};h._createClass(f,[{key:"max",get:function(){return this._max}},{key:"current",get:function(){return this._current}},
{key:"total",get:function(){return this.current.reduce((a,b)=>a+b,0)}}]);return f}();d.InstanceCounter=m;d.test=g;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});