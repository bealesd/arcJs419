// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../webgl/Program ../../../../webgl/BufferObject ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ../../../../webgl/Renderbuffer ../../../../webgl/FramebufferObject ../../../../webgl/ProgramCache ../../../../webgl/RenderingContext ../../../../webgl/ShaderCompiler ./Programs".split(" "),function(k,n,p,q,r,t,u,v,w,c){return function(){function h(){this._programByKey=new Map}var f=h.prototype;f.dispose=function(){this._programByKey.forEach(b=>b.dispose());this._programByKey.clear()};
f.getMaterialProgram=function(b,a,d){const g=a.key<<2|this._getMaterialOptionsValue(a.type,d);if(this._programByKey.has(g))return this._programByKey.get(g);var e=this._getProgramTemplate(a.type);({shaders:e}=e);const {vertexShader:l,fragmentShader:m}=e(d);d=a.getShaderHeader();e=a.getShaderMain();d=l.replace("#pragma header",d).replace("#pragma main",e);b=new k(b,d,m,a.getAttributeLocations());this._programByKey.set(g,b);return b};f._getMaterialOptionsValue=function(b,a){switch(b){case 0:return(a.pattern?
1:0)<<1|(a.id?1:0);case 1:return(a.pattern?1:0)<<1|(a.id?1:0);case 2:return a.id?1:0;case 3:return(a.pattern?1:0)<<1|(a.id?1:0);case 4:return(a.sdf?1:0)<<1|(a.id?1:0);case 5:return a.id?1:0;case 6:return a.id?1:0;default:return 0}};f._getProgramTemplate=function(b){switch(b){case 0:return c.background;case 5:return c.circle;case 1:return c.fill;case 4:return c.icon;case 3:return c.line;case 2:return c.outline;case 6:return c.text;default:return null}};return h}()});