// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../core/accessorSupport/ensureType","../../Color","../../core/screenUtils","../../webdoc/support/opacityUtils"],function(c,d,e,f,g){const h={type:Number,cast:f.toPt,json:{write:!0}},k={type:[Number],cast(a){return null!=a?a:Array.isArray(a)?a.map(f.toPt):null},json:{read:!1,write:!1}};c.colorAndTransparencyProperty={type:e,json:{type:[d.Integer],default:null,read:{source:["color","transparency"],reader:function(a,b){a=null!=b.transparency?g.transparencyToOpacity(b.transparency):
1;return(b=b.color)&&Array.isArray(b)?new e([b[0]||0,b[1]||0,b[2]||0,a]):null}},write:{target:{color:{type:[d.Integer]},transparency:{type:d.Integer}},writer:function(a,b){b.color=a.toJSON().slice(0,3);a=g.opacityToTransparency(a.a);0!==a&&(b.transparency=a)}}}};c.screenSizeProperty=h;c.stipplePatternProperty=k;Object.defineProperty(c,"__esModule",{value:!0})});