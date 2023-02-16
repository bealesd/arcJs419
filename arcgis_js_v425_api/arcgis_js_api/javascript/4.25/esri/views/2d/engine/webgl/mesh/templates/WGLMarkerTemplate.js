// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../chunks/mat2df32 ../../../../../../chunks/vec2f32 ../../../../../../symbols/cim/enums ../../color ../../definitions ../../enums ../../number ../../materialKey/MaterialKey ./util ./WGLBaseMarkerTemplate ./WGLMeshTemplate".split(" "),function(G,H,l,I,J,u,x,q,K,p,L,v,M,N){return function(F){function r(a,c,k,e,g,d,h,f,n,z,A,B,C,D,m,E,y,w,t,O,P,Q,R){var b=F.call(this)||
this;b.angle=e;b.height=h;b.width=d;b.xOffset=c*t;b.yOffset=k*t;b._markerPlacement=O;b._effects=P;b._anchorX=E;b._anchorY=y;b._minMaxZoom=p.i1616to32(Math.round(Q*q.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(R*q.MIN_MAX_ZOOM_PRECISION_FACTOR));c=(D===u.Alignment.MAP?q.BITSET_MARKER_ALIGNMENT_MAP:q.BITSET_MARKER_ALIGNMENT_SCREEN)|(A?q.BITSET_GENERIC_LOCK_COLOR:0)|(C?q.BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE:0)|(B?q.BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY:0);k=m&&m.sdf;a=L.MarkerMaterialKey.load(a);
a.sdf=k;a.pattern=!0;a.textureBinding=m.textureBinding;b._materialKey=a.data;b._fillColor=g;b._outlineColor=n;b._sizeOutlineWidth=p.i8888to32(Math.round(Math.min(Math.sqrt(128*d),255)),Math.round(Math.min(Math.sqrt(128*h),255)),Math.round(Math.min(Math.sqrt(128*z),255)),Math.round(Math.min(Math.sqrt(128*f),255)));g=m.rect.x+q.SPRITE_PADDING;f=m.rect.y+q.SPRITE_PADDING;n=g+m.width;m=f+m.height;b._offsets.xUpperLeft=g;b._offsets.yUpperLeft=f;b._offsets.xUpperRight=n;b._offsets.yUpperRight=f;b._offsets.xBottomLeft=
g;b._offsets.yBottomLeft=m;b._offsets.xBottomRight=n;b._offsets.yBottomRight=m;a.symbologyType===K.WGLSymbologyType.PIE_CHART?(b._texUpperLeft=p.i1616to32(0,1),b._texUpperRight=p.i1616to32(1,1),b._texBottomLeft=p.i1616to32(0,0),b._texBottomRight=p.i1616to32(1,0)):(b._texUpperLeft=p.i1616to32(g,f),b._texUpperRight=p.i1616to32(n,f),b._texBottomLeft=p.i1616to32(g,m),b._texBottomRight=p.i1616to32(n,m));d=d*w*t;h=h*w*t;b._bitestAndDistRatio=p.i1616to32(c,Math.round(64*w));b._computedWidth=d;b._computedHeight=
h;d=J.create();h=I.create();b._applyTransformation(h,d);return b}G._inheritsLoose(r,F);r.fromCIMMarker=function(a,c,k){const e=a.size,g=(c&&c.width||1)/(c&&c.height||1)*a.scaleX;var d=a.scaleSymbolsProportionally&&a.frameHeight?e/a.frameHeight:1;let h=x.premultiplyAlphaRGBA(a.color);const f=x.premultiplyAlphaRGBA(a.outlineColor),n=l.pt2px(e),z=n*g,A=l.pt2px(a.offsetX||0),B=l.pt2px(a.offsetY||0);d*=l.pt2px(a.outlineWidth||0);const C=a.alignment||u.Alignment.SCREEN,D=l.pt2px(a.referenceSize),[m,E]=
v.getMinMaxZoom(a.scaleInfo,k);c.sdf||0!==h||(h=-1);k=a.rotation||0;a.rotateClockwise||(k=-k);let y=0,w=0;const t=a.anchorPoint;t&&(a.isAbsoluteAnchorPoint?e&&(y=t.x/(e*g),w=t.y/e):(y=t.x,w=t.y));c=new r(a.materialKey,A,B,k,h,z,n,D,f,d,a.colorLocked,a.scaleSymbolsProportionally,!1,C,c,y,w,a.sizeRatio,H.unwrapOr(a.scaleFactor,1),a.markerPlacement,a.effects,m,E);c._vertexBoundsScaleX=a.maxVVSize?a.maxVVSize/z:1;c._vertexBoundsScaleY=a.maxVVSize?a.maxVVSize/n:1;return c};r.fromPictureMarker=function(a,
c){const k=Math.round(l.pt2px(a.width)),e=Math.round(l.pt2px(a.height)),g=q.PICTURE_FILL_COLOR,d=Math.round(l.pt2px(a.xoffset||0)),h=Math.round(l.pt2px(a.yoffset||0));c=new r(a.materialKey,d,h,a.angle,g,k,e,e,0,0,!1,!1,!1,u.Alignment.SCREEN,c,0,0,1,1,null,null,v.DEFAULT_MIN_ZOOM,v.DEFAULT_MAX_ZOOM);c._vertexBoundsScaleX=a.maxVVSize?a.maxVVSize/a.width:1;c._vertexBoundsScaleY=a.maxVVSize?a.maxVVSize/a.height:1;return c};r.fromSimpleMarker=function(a,c){const k=x.premultiplyAlphaRGBAArray(a.color),
e=Math.round(l.pt2px(a.size)),g=Math.round(l.pt2px(a.xoffset||0)),d=Math.round(l.pt2px(a.yoffset||0)),h=a.style;var f=a.outline;const n=(f&&f.color&&x.premultiplyAlphaRGBAArray(f.color))|0;f=(f&&f.width&&Math.round(l.pt2px(f.width)))|0;c=new r(a.materialKey,g,d,a.angle,k,e,e,e,n,f,!1,!1,"esriSMSCross"===h||"esriSMSX"===h,u.Alignment.SCREEN,c,0,0,1.96875,1,null,null,v.DEFAULT_MIN_ZOOM,v.DEFAULT_MAX_ZOOM);c.boundsType="esriSMSCircle"===h?"circle":"square";c._vertexBoundsScaleX=a.maxVVSize?a.maxVVSize/
a.size:1;c._vertexBoundsScaleY=a.maxVVSize?a.maxVVSize/a.size:1;return c};r.fromLineSymbolMarker=function(a,c){const k=x.premultiplyAlphaRGBAArray(a.color),e=Math.round(l.pt2px(6*a.lineWidth)),g="cross"===a.style||"x"===a.style;switch(a.placement){case "begin-end":var d=u.ExtremityPlacement.Both;break;case "begin":d=u.ExtremityPlacement.JustBegin;break;case "end":d=u.ExtremityPlacement.JustEnd;break;default:d=u.ExtremityPlacement.None}d={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,
extremityPlacement:d,offsetAlongLine:0};c=new r(a.materialKey,0,0,0,k,e,e,e/6,k,g?Math.round(l.pt2px(a.lineWidth)):0,!1,!1,g,u.Alignment.MAP,c,0,0,1.96875,1,d,null,v.DEFAULT_MIN_ZOOM,v.DEFAULT_MAX_ZOOM);c.boundsType="circle"===a.style?"circle":"square";return c};return r}(M(N))});