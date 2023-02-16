// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/date ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../intl/date ../../intl/number".split(" "),function(p,d,q,c,f,x,r,t,u,k,l){var g;c=g=function(m){function h(a){a=m.call(this,a)||this;a.dateFormat=null;a.dateTimeFormatOptions=null;a.digitSeparator=
!1;a.places=null;return a}p._inheritsLoose(h,m);var e=h.prototype;e.clone=function(){return new g({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})};e.format=function(a){return this.dateFormat?k.formatDate(a,{...k.convertDateFormatToIntlOptions(this.dateFormat),...this.dateTimeFormatOptions}):l.formatNumber(a,l.convertNumberFormatToIntlOptions(this))};e.formatRasterPixelValue=function(a){if(a.includes("-"))return a;let b;return a.trim().includes(",")?(b=",",this._formatDelimitedString(a,
b,b+" ",this)):a.trim().includes(";")?(b=";",this._formatDelimitedString(a,b,b+" ",this)):a.trim().includes(" ")?this._formatDelimitedString(a," "," ",this):this.format(Number(a))};e._formatDelimitedString=function(a,b,n,v){return a&&b&&n&&v?a.trim().split(b).map(w=>this.format(Number(w))).join(n):a};return h}(c.JSONSupport);d.__decorate([t.enumeration(q.dictionary)],c.prototype,"dateFormat",void 0);d.__decorate([f.property({type:Object,json:{read:!1}})],c.prototype,"dateTimeFormatOptions",void 0);
d.__decorate([f.property({type:Boolean,json:{write:!0}})],c.prototype,"digitSeparator",void 0);d.__decorate([f.property({type:r.Integer,json:{write:!0}})],c.prototype,"places",void 0);return c=g=d.__decorate([u.subclass("esri.popup.support.FieldInfoFormat")],c)});