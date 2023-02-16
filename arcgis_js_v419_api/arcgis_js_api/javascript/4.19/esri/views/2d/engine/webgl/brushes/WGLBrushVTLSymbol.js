// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ../../../../../chunks/vec2f32 ../../vectorTiles/decluttering/config ../number ../enums ./WGLBrush ../GeometryUtils".split(" "),function(H,N,I,A,J,K,O,D,E,L){const P=1/65536;E=function(M){function F(){var d=M.apply(this,arguments)||this;d._iconProgramOptions={id:!1,sdf:!1};d._sdfProgramOptions={id:!1};d._spritesTextureSize=J.create();return d}N._inheritsLoose(F,M);var u=F.prototype;u.dispose=function(){};
u.drawMany=function(d,a){const {drawPhase:h,styleLayerUID:k}=d,f=d.styleLayer;let b;h===D.WGLDrawPhase.HITTEST&&(b=O.u32to4Xu8(k+1));this._drawIcons(d,f,a,b);this._drawText(d,f,a,b)};u._drawIcons=function(d,a,h,k){const {context:f,displayLevel:b,drawPhase:p,painter:m,state:t,styleLayerUID:v}=d,q=a.iconMaterial;var g=m.vectorTilesMaterialManager,w=!1;for(var n of h)if(n.layerData.has(v)){var e=n.layerData.get(v);if(0<e.iconPerPageElementsMap.size){w=!0;break}}if(w){w=a.getPaintValue("icon-translate",
b);n=a.getPaintValue("icon-translate-anchor",b);var c=a.getLayoutValue("icon-rotation-alignment",b);2===c&&(c=0===a.getLayoutValue("symbol-placement",b)?1:0);var x=0===c;x=a.getLayoutValue("icon-keep-upright",b)&&x;var B=e.isIconSDF;e=p===D.WGLDrawPhase.HITTEST;var z=this._iconProgramOptions;z.id=e;z.sdf=B;g=g.getMaterialProgram(f,q,z);f.bindProgram(g);g.setUniformMatrix3fv("u_displayViewMat3",0===c?t.displayViewMat3:t.displayMat3);g.setUniformMatrix3fv("u_displayMat3",1===n?t.displayMat3:t.displayViewMat3);
g.setUniform2fv("u_iconTranslation",w);g.setUniform1f("u_depth",a.z);g.setUniform1f("u_mapRotation",L.degToByte(t.rotation));g.setUniform1f("u_keepUpright",x?1:0);g.setUniform1f("u_level",10*b);g.setUniform1i("u_texture",A.VTL_TEXTURE_BINDING_UNIT_SPRITES);g.setUniform1f("u_fadeDuration",K.FADE_DURATION/1E3);e&&g.setUniform4fv("u_id",k);k=-1;for(const r of h)if(r.layerData.has(v)&&(r.key.level!==k&&(k=r.key.level,q.setDataUniforms(g,b,a,k)),e=r.layerData.get(v),0!==e.iconPerPageElementsMap.size&&
(e.prepareForRendering(f),e.updateOpacityInfo(),h=e.iconVertexArrayObject,!I.isNone(h)))){f.bindVAO(h);g.setUniformMatrix3fv("u_dvsMat3",r.transforms.dvs);g.setUniform1f("u_time",(performance.now()-e.lastOpacityUpdate)/1E3);for(const [G,C]of e.iconPerPageElementsMap)this._renderIconRange(d,g,C,G,r)}}};u._renderIconRange=function(d,a,h,k,f){const {context:b,spriteMosaic:p}=d;this._spritesTextureSize[0]=p.getWidth(k)/4;this._spritesTextureSize[1]=p.getHeight(k)/4;a.setUniform2fv("u_mosaicSize",this._spritesTextureSize);
p.bind(b,9729,k,A.VTL_TEXTURE_BINDING_UNIT_SPRITES);b.setStencilTestEnabled(!0);b.setStencilFunction(516,255,255);b.setStencilWriteMask(0);b.drawElements(4,h[1],5125,Uint32Array.BYTES_PER_ELEMENT*h[0]);f.triangleCount+=h[1]/3};u._drawText=function(d,a,h,k){const {context:f,displayLevel:b,drawPhase:p,glyphMosaic:m,painter:t,pixelRatio:v,state:q,styleLayerUID:g}=d;d=a.textMaterial;const w=t.vectorTilesMaterialManager;var n=!1;for(var e of h)if(e.layerData.has(g)){var c=e.layerData.get(g);if(0<c.glyphPerPageElementsMap.size){n=
!0;break}}if(n&&(c=a.getPaintProperty("text-opacity"),!c||c.isDataDriven||0!==c.getValue(b))){c=a.getPaintProperty("text-color");var x=!c||c.isDataDriven||0<c.getValue(b)[3];c=a.getPaintProperty("text-halo-width");e=a.getPaintProperty("text-halo-color");var B=(!c||c.isDataDriven||0<c.getValue(b))&&(!e||e.isDataDriven||0<e.getValue(b)[3]);if(x||B){c=a.getLayoutValue("text-rotation-alignment",b);2===c&&(c=0===a.getLayoutValue("symbol-placement",b)?1:0);e=0===c;e=a.getLayoutValue("text-keep-upright",
b)&&e;n=p===D.WGLDrawPhase.HITTEST;var z=.8*3/v;this._glyphTextureSize||(this._glyphTextureSize=J.fromValues(m.width/4,m.height/4));var r=a.getPaintValue("text-translate",b),G=a.getPaintValue("text-translate-anchor",b),C=this._sdfProgramOptions;C.id=n;var l=w.getMaterialProgram(f,d,C);f.bindProgram(l);l.setUniformMatrix3fv("u_displayViewMat3",0===c?q.displayViewMat3:q.displayMat3);l.setUniformMatrix3fv("u_displayMat3",1===G?q.displayMat3:q.displayViewMat3);l.setUniform2fv("u_textTranslation",r);l.setUniform1f("u_depth",
a.z+P);l.setUniform2fv("u_mosaicSize",this._glyphTextureSize);l.setUniform1f("u_mapRotation",L.degToByte(q.rotation));l.setUniform1f("u_keepUpright",e?1:0);l.setUniform1f("u_level",10*b);l.setUniform1i("u_texture",A.VTL_TEXTURE_BINDING_UNIT_GLYPHS);l.setUniform1f("u_antialiasingWidth",z);l.setUniform1f("u_fadeDuration",K.FADE_DURATION/1E3);n&&l.setUniform4fv("u_id",k);k=-1;for(const y of h)y.layerData.has(g)&&(y.key.level!==k&&(k=y.key.level,d.setDataUniforms(l,b,a,k)),c=y.layerData.get(g),0!==c.glyphPerPageElementsMap.size&&
(c.prepareForRendering(f),c.updateOpacityInfo(),h=c.textVertexArrayObject,I.isNone(h)||(f.bindVAO(h),l.setUniformMatrix3fv("u_dvsMat3",y.transforms.dvs),f.setStencilTestEnabled(!0),f.setStencilFunction(516,255,255),f.setStencilWriteMask(0),h=(performance.now()-c.lastOpacityUpdate)/1E3,l.setUniform1f("u_time",h),c.glyphPerPageElementsMap.forEach((Q,R)=>{this._renderGlyphRange(f,Q,R,m,l,B,x,y)}))))}}};u._renderGlyphRange=function(d,a,h,k,f,b,p,m){k.bind(d,9729,h,A.VTL_TEXTURE_BINDING_UNIT_GLYPHS);b&&
(f.setUniform1f("u_halo",1),d.drawElements(4,a[1],5125,Uint32Array.BYTES_PER_ELEMENT*a[0]),m.triangleCount+=a[1]/3);p&&(f.setUniform1f("u_halo",0),d.drawElements(4,a[1],5125,Uint32Array.BYTES_PER_ELEMENT*a[0]),m.triangleCount+=a[1]/3)};return F}(E);H.WGLBrushVTLSymbol=E;Object.defineProperty(H,"__esModule",{value:!0})});