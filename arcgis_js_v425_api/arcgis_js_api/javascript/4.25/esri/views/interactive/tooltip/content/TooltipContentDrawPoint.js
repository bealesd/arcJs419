// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,f,g,t,u,v,w,x,h,c,k,l,y,d){var m=`${c.CONTENT} ${`${c.CONTENT}--draw-point`}`;
a.TooltipContentDrawPoint=function(e){function b(){return e.apply(this,arguments)||this}f._inheritsLoose(b,e);b.prototype.render=function(){const {elevation:n,tooltipOptions:p}=this.info,{visibleElements:q}=p,r=this._messagesTooltip.sketch;return d.tsx("div",{class:m},q.elevation&&d.tsx(l.TooltipField,{title:r.elevation,value:this._formatVerticalLength(n)}))};return b}(k.TooltipContent);a.TooltipContentDrawPoint=g.__decorate([h.subclass("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],
a.TooltipContentDrawPoint);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});