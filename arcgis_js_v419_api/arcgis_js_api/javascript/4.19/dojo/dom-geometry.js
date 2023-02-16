//>>built
define(["./sniff","./_base/window","./dom","./dom-style"],function(m,n,l,h){function p(a,b,c,d,e,g){g=g||"px";a=a.style;isNaN(b)||(a.left=b+g);isNaN(c)||(a.top=c+g);0<=d&&(a.width=d+g);0<=e&&(a.height=e+g)}function q(a){return"button"==a.tagName.toLowerCase()||"input"==a.tagName.toLowerCase()&&"button"==(a.getAttribute("type")||"").toLowerCase()}function r(a){return"border-box"==f.boxModel||"table"==a.tagName.toLowerCase()||q(a)}function t(a){var b={x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,
left:0};try{var c=a.getBoundingClientRect()}catch(d){return b}return"undefined"===typeof c.left?b:c}var f={boxModel:"content-box"};m("ie")&&(f.boxModel="BackCompat"==document.compatMode?"border-box":"content-box");f.getPadExtents=function(a,b){a=l.byId(a);var c=b||h.getComputedStyle(a),d=h.toPixelValue;b=d(a,c.paddingLeft);var e=d(a,c.paddingTop),g=d(a,c.paddingRight);a=d(a,c.paddingBottom);return{l:b,t:e,r:g,b:a,w:b+g,h:e+a}};f.getBorderExtents=function(a,b){a=l.byId(a);var c=h.toPixelValue,d=b||
h.getComputedStyle(a);b="none"!=d.borderLeftStyle?c(a,d.borderLeftWidth):0;var e="none"!=d.borderTopStyle?c(a,d.borderTopWidth):0,g="none"!=d.borderRightStyle?c(a,d.borderRightWidth):0;a="none"!=d.borderBottomStyle?c(a,d.borderBottomWidth):0;return{l:b,t:e,r:g,b:a,w:b+g,h:e+a}};f.getPadBorderExtents=function(a,b){a=l.byId(a);var c=b||h.getComputedStyle(a);b=f.getPadExtents(a,c);a=f.getBorderExtents(a,c);return{l:b.l+a.l,t:b.t+a.t,r:b.r+a.r,b:b.b+a.b,w:b.w+a.w,h:b.h+a.h}};f.getMarginExtents=function(a,
b){a=l.byId(a);var c=b||h.getComputedStyle(a),d=h.toPixelValue;b=d(a,c.marginLeft);var e=d(a,c.marginTop),g=d(a,c.marginRight);a=d(a,c.marginBottom);return{l:b,t:e,r:g,b:a,w:b+g,h:e+a}};f.getMarginBox=function(a,b){a=l.byId(a);b=b||h.getComputedStyle(a);b=f.getMarginExtents(a,b);var c=a.offsetLeft-b.l,d=a.offsetTop-b.t,e=a.parentNode,g=h.toPixelValue;8==m("ie")&&e&&(e=h.getComputedStyle(e),c-="none"!=e.borderLeftStyle?g(a,e.borderLeftWidth):0,d-="none"!=e.borderTopStyle?g(a,e.borderTopWidth):0);return{l:c,
t:d,w:a.offsetWidth+b.w,h:a.offsetHeight+b.h}};f.getContentBox=function(a,b){a=l.byId(a);var c=b||h.getComputedStyle(a);b=a.clientWidth;var d=f.getPadExtents(a,c);var e=f.getBorderExtents(a,c);c=a.offsetLeft+d.l+e.l;var g=a.offsetTop+d.t+e.t;b?e=a.clientHeight:(b=a.offsetWidth-e.w,e=a.offsetHeight-e.h);if(8==m("ie")){var k=a.parentNode,u=h.toPixelValue;k&&(k=h.getComputedStyle(k),c-="none"!=k.borderLeftStyle?u(a,k.borderLeftWidth):0,g-="none"!=k.borderTopStyle?u(a,k.borderTopWidth):0)}return{l:c,
t:g,w:b-d.w,h:e-d.h}};f.setContentSize=function(a,b,c){a=l.byId(a);var d=b.w;b=b.h;r(a)&&(c=f.getPadBorderExtents(a,c),0<=d&&(d+=c.w),0<=b&&(b+=c.h));p(a,NaN,NaN,d,b)};var v={l:0,t:0,w:0,h:0};f.setMarginBox=function(a,b,c){a=l.byId(a);var d=c||h.getComputedStyle(a);c=b.w;var e=b.h,g=r(a)?v:f.getPadBorderExtents(a,d);d=f.getMarginExtents(a,d);if(m("webkit")&&q(a)){var k=a.style;0<=c&&!k.width&&(k.width="4px");0<=e&&!k.height&&(k.height="4px")}0<=c&&(c=Math.max(c-g.w-d.w,0));0<=e&&(e=Math.max(e-g.h-
d.h,0));p(a,b.l,b.t,c,e)};f.isBodyLtr=function(a){a=a||n.doc;return"ltr"==(n.body(a).dir||a.documentElement.dir||"ltr").toLowerCase()};f.docScroll=function(a){a=a||n.doc;var b=a.parentWindow||a.defaultView;return"pageXOffset"in b?{x:b.pageXOffset,y:b.pageYOffset}:(b=a.documentElement)&&{x:f.fixIeBiDiScrollLeft(b.scrollLeft||0,a),y:b.scrollTop||0}};f.getIeDocumentElementOffset=function(a){return{x:0,y:0}};f.fixIeBiDiScrollLeft=function(a,b){b=b||n.doc;var c=m("ie");if(c&&!f.isBodyLtr(b)){b=b.documentElement;
var d=n.global;6==c&&d.frameElement&&b.scrollHeight>b.clientHeight&&(a+=b.clientLeft);return 8>c?a+b.clientWidth-b.scrollWidth:-a}return a};f.position=function(a,b){a=l.byId(a);n.body(a.ownerDocument);var c=t(a);c={x:c.left,y:c.top,w:c.right-c.left,h:c.bottom-c.top};9>m("ie")&&(c.x-=0,c.y-=0);b&&(a=f.docScroll(a.ownerDocument),c.x+=a.x,c.y+=a.y);return c};f.getMarginSize=function(a,b){a=l.byId(a);b=f.getMarginExtents(a,b||h.getComputedStyle(a));a=t(a);return{w:a.right-a.left+b.w,h:a.bottom-a.top+
b.h}};f.normalizeEvent=function(a){"layerX"in a||(a.layerX=a.offsetX,a.layerY=a.offsetY);if(!("pageX"in a)){var b=a.target;b=b&&b.ownerDocument||document;var c=b.documentElement;a.pageX=a.clientX+f.fixIeBiDiScrollLeft(c.scrollLeft||0,b);a.pageY=a.clientY+(c.scrollTop||0)}};return f});