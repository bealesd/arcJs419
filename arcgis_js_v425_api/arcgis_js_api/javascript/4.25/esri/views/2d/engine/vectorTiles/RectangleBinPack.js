// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../webgl/Rect"],function(l,d){return function(){function g(b,c){this._height=this._width=0;this._free=[];this._width=b;this._height=c;this._free.push(new d(0,0,b,c))}var h=g.prototype;h.allocate=function(b,c){if(b>this._width||c>this._height)return new d;let a=null,k=-1;for(let f=0;f<this._free.length;++f){const e=this._free[f];b<=e.width&&c<=e.height&&(null===a||e.y<=a.y&&e.x<=a.x)&&(a=e,k=f)}if(null===a)return new d;this._free.splice(k,1);
a.width<a.height?(a.width>b&&this._free.push(new d(a.x+b,a.y,a.width-b,c)),a.height>c&&this._free.push(new d(a.x,a.y+c,a.width,a.height-c))):(a.width>b&&this._free.push(new d(a.x+b,a.y,a.width-b,a.height)),a.height>c&&this._free.push(new d(a.x,a.y+c,b,a.height-c)));return new d(a.x,a.y,b,c)};h.release=function(b){for(let c=0;c<this._free.length;++c){const a=this._free[c];if(a.y===b.y&&a.height===b.height&&a.x+a.width===b.x)a.width+=b.width;else if(a.x===b.x&&a.width===b.width&&a.y+a.height===b.y)a.height+=
b.height;else if(b.y===a.y&&b.height===a.height&&b.x+b.width===a.x)a.x=b.x,a.width+=b.width;else if(b.x===a.x&&b.width===a.width&&b.y+b.height===a.y)a.y=b.y,a.height+=b.height;else continue;this._free.splice(c,1);this.release(b)}this._free.push(b)};l._createClass(g,[{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}}]);return g}()});