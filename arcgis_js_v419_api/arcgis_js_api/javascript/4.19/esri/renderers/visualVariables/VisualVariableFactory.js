// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/Warning ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ./ColorVariable ./OpacityVariable ./RotationVariable ./SizeVariable".split(" "),function(m,n,f,r,G,t,u,v,w,H,I,J,x,y,z,A,B){const C=r.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),
D={color:y,size:B,opacity:z,rotation:A},E=new u.JSONMap({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),F=/^\[([^\]]+)\]$/i;f=function(p){function g(){var a=p.apply(this,arguments)||this;a.colorVariables=null;a.opacityVariables=null;a.rotationVariables=null;a.sizeVariables=null;return a}m._inheritsLoose(g,p);var h=g.prototype;h.readVariables=function(a,b,c){const {rotationExpression:d,rotationType:k}=b;if(b=(b=d&&d.match(F))&&b[1])a||(a=[]),a.push({type:"rotationInfo",
rotationType:k,field:b});if(a)return a.map(l=>{var e=E.read(l.type);const q=D[e];q||(C.warn(`Unknown variable type: ${e}`),c&&c.messages&&c.messages.push(new v("visual-variable:unsupported",`visualVariable of type '${e}' is not supported`,{definition:l,context:c})));e=new q;e.read(l,c);return e})};h.writeVariables=function(a,b){const c=[];for(const d of a)(a=d.toJSON(b))&&c.push(a);return c};h._resetVariables=function(){this.colorVariables=[];this.opacityVariables=[];this.rotationVariables=[];this.sizeVariables=
[]};m._createClass(g,[{key:"visualVariables",set:function(a){this._resetVariables();if((a=a&&a.filter(c=>!!c))&&a.length){for(var b of a)switch(b.type){case "color":this.colorVariables.push(b);break;case "opacity":this.opacityVariables.push(b);break;case "rotation":this.rotationVariables.push(b);break;case "size":this.sizeVariables.push(b)}this.sizeVariables.length&&this.sizeVariables.some(c=>!!c.target)&&a.sort((c,d)=>{let k=null;return k=c.target===d.target?0:c.target?1:-1});for(b=0;b<a.length;b++)a[b].index=
b}this._set("visualVariables",a)}}]);return g}(x);n.__decorate([t.property()],f.prototype,"visualVariables",null);return f=n.__decorate([w.subclass("esri.renderers.visualVariables.VisualVariableFactory")],f)});