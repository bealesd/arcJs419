// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../Graphic ../../../symbols ../../../core/maybe ../../../geometry/Polygon ../../../symbols/FillSymbol3DLayer ../../../symbols/PolygonSymbol3D ../../../geometry/Point ../../../symbols/PointSymbol3D ../../../symbols/IconSymbol3DLayer ../../../symbols/TextSymbol3DLayer".split(" "),function(e,h,f,k,l,q,r,t,m,n,u,p){h=function(){function c(a,b,g=""){this.graphics=a;this._symbol=new n({symbolLayers:[new u({material:{color:b},outline:{color:[255,255,255],size:1},resource:{primitive:"circle"}}),
new p({text:g,halo:{color:"white",size:1/.75},material:{color:b},size:12})]})}var d=c.prototype;d.show=function(a,b){l.isNone(b)||(this.hide(),a=new m({x:a[0],y:a[1],z:a[2],spatialReference:b}),this._graphic=new f({geometry:a,symbol:this._symbol}),this.graphics.add(this._graphic))};d.hide=function(){l.isSome(this._graphic)&&(this.graphics.remove(this._graphic),this._graphic=null)};return c}();k=function(){function c(a,b,g=""){this.graphics=a;this._graphics=[];this._outline=new t({symbolLayers:[new r({material:{color:[0,
0,0,0]},outline:{color:b,size:2}})]});this._text=new n({symbolLayers:[new p({text:g,halo:{color:"white",size:1/.75},material:{color:b},size:12})]})}var d=c.prototype;d.show=function(a){this.hide();const b=new m({x:a.xmin,y:a.ymin,z:a.zmax,spatialReference:a.spatialReference});this._graphics.push(new f({geometry:q.fromExtent(a),symbol:this._outline}));this._graphics.push(new f({geometry:b,symbol:this._text}));this.graphics.addMany(this._graphics)};d.hide=function(){this.graphics.removeMany(this._graphics);
this._graphics.length=0};return c}();e.ExtentGraphics=k;e.PointGraphics=h;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});