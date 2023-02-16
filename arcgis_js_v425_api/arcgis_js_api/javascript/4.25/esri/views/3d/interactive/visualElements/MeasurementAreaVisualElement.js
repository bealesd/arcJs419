// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f64 ./Object3DVisualElement ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Material ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/CheckerBoardMaterial".split(" "),function(n,p,e,x,y,z,A,q,f,r,m,B,t,g,C){m=function(u){function h(a){var b=
u.call(this,a)||this;b._checkerBoardMaterial=null;b._renderOccluded=t.RenderOccludedFlag.OccludeAndTransparent;b._geometry=null;b._size=z.fromValues(1,1);b._color1=r.fromValues(1,.5,0,.5);b._color2=r.fromValues(1,1,1,.5);b.applyProps(a);return b}p._inheritsLoose(h,u);var c=h.prototype;c._updateMaterial=function(){e.isSome(this._checkerBoardMaterial)&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})};c.createExternalResources=
function(){this._checkerBoardMaterial=new C.CheckerBoardMaterial({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:t.RenderOccludedFlag.OccludeAndTransparent})};c.destroyExternalResources=function(){this._checkerBoardMaterial=null};c.forEachExternalMaterial=function(a){e.isSome(this._checkerBoardMaterial)&&a(this._checkerBoardMaterial)};c.createGeometries=function(a){if(!e.isNone(this._geometry)&&!e.isNone(this._checkerBoardMaterial)){var b=
D;x.getTranslation(b,this.transform);var d=this._geometry,v=[],k=q.create();d.position.forEach(l=>{A.subtract(k,l,b);v.push(k[0],k[1],k[2])});var w=[];d.uv.forEach(l=>{w.push(l[0],l[1])});d=new B.Geometry([[g.VertexAttribute.POSITION,{size:3,data:v,exclusive:!0}],[g.VertexAttribute.UV0,{size:2,data:w,exclusive:!0}]],[[g.VertexAttribute.POSITION,d.triangleIndices],[g.VertexAttribute.UV0,d.triangleIndices]]);a.addGeometry(d,this._checkerBoardMaterial)}};c._geometryChanged=function(){this.recreateGeometry()};
p._createClass(h,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this._geometryChanged()}},{key:"size",get:function(){return this._size},set:function(a){y.copy(this._size,a);this._updateMaterial()}},{key:"color1",get:function(){return this._color1},set:function(a){f.exactEquals(a,this._color1)||(f.copy(this._color1,
a),this._updateMaterial())}},{key:"color2",get:function(){return this._color2},set:function(a){f.exactEquals(a,this._color2)||(f.copy(this._color2,a),this._updateMaterial())}}]);return h}(m.Object3DVisualElement);const D=q.create();n.MeasurementAreaVisualElement=m;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});