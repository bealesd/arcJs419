// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../Color ./Symbol3DLayer".split(" "),function(l,c,b,m,t,n,f,p,q,u,v,w,k,r){var g;b=g=function(d){function e(a){a=d.call(this,a)||this;a.color=h.clone();a.type="water";
a.waterbodySize="medium";a.waveDirection=null;a.waveStrength="moderate";return a}l._inheritsLoose(e,d);e.prototype.clone=function(){return new g({color:m.clone(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})};return e}(r);c.__decorate([f.property({type:k,nonNullable:!0,json:{type:[n.Integer],write:(d,e,a)=>e[a]=d.toArray(1),default:()=>h.clone(),defaultEquals:d=>d.toCss(!0)===h.toCss(!0)}})],b.prototype,"color",void 0);c.__decorate([p.enumeration({Water:"water"},
{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([f.property({type:["small","medium","large"],json:{write:!0,default:"medium"}})],b.prototype,"waterbodySize",void 0);c.__decorate([f.property({type:Number,json:{write:!0,default:null}})],b.prototype,"waveDirection",void 0);c.__decorate([f.property({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],b.prototype,"waveStrength",void 0);b=g=c.__decorate([q.subclass("esri.symbols.WaterSymbol3DLayer")],b);const h=new k([0,
119,190]);return b});