// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry","../../../../Viewpoint","../../ViewState","../../../../geometry/Point"],function(k,l,t,u,v){l=function(){function m(){this._renderParams={context:null,drawPhase:1,state:new u({viewpoint:new t({targetGeometry:new v(0,0),scale:1,rotation:0}),size:[256,256]}),stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerUID:-1,painter:null,glyphMosaic:null,spriteMosaic:null,profiler:null,renderingOptions:null,
requestRender:null,allowDelayedRender:!1,deltaTime:-1,timeline:null,time:0,hasClipping:!1,blendMode:null,dataUploadCounter:0,effects:null,inFadeTransition:!1,requireFBO:!1}}var n=m.prototype;n.dispose=function(){this._renderParams=null};n.render=function(p,c,d,e,w,b,f,q,h,g){const r=b.adjustLevel(c[0]),a=this._renderParams;a.context=p;a.painter=e;a.glyphMosaic=e.glyphMosaic;a.spriteMosaic=e.spriteMosaic;a.pixelRatio=g;a.displayLevel=r;a.requiredLevel=r;g=b.getScale(c[0]);const [x,y]=b.getShift(c,
f*g);c=.125*f*g/h;b=d.transforms.dvs;b[0]=c;b[4]=-c;b[6]=-1-x-q[0]*f*2;b[7]=1+y+(1-q[1])*f*2-2;a.state.size[0]=h;a.state.size[1]=h;d.stage||d.attachWithContext(p);d.triangleCount=0;e.drawTile(a,d,w)};return m}();k.VectorTileRendererHelper3D=l;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});