// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/BidiText ../../../core/screenUtils ../engine/webgl/alignmentUtils ../engine/webgl/definitions ../engine/webgl/mesh/templates/shapingUtils".split(" "),function(e,k,p,d,l,m,q){function n(a,c,b){return f.apply(this,arguments)}function f(){f=k._asyncToGenerator(function*(a,c,b){const r=l.getXAnchorDirection("center"),t=l.getYAnchorDirection("middle");b=c.textureManager.rasterizeItem(a.toJSON(),window.devicePixelRatio||1,null,b);[,
c]=p.bidiText(a.text);b=(yield b).glyphMosaicItems;return q.shapeGlyphs(b,c,{angle:a.angle??0,xOffset:d.pt2px(a.xoffset??0),yOffset:d.pt2px(a.yoffset??0),lineHeight:m.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,a.lineHeight),maxLineWidth:Math.max(32,Math.min(d.pt2px(a.lineWidth),512)),decoration:a.font.decoration,scale:Math.min(Math.round(d.pt2px(a.font.size)),127)/m.GLYPH_SIZE,hAlign:r,vAlign:t,isCIM:!1}).boundsT});return f.apply(this,arguments)}function g(){g=k._asyncToGenerator(function*(a,c,b){return h(a,
c,b)});return g.apply(this,arguments)}let h=n;e.getTextBounds=function(a,c,b){return g.apply(this,arguments)};e.test={stubGetTextBounds:a=>h=a,restoreGetTextBounds:()=>h=n};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});