// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(f,b,a,d,k,l,h){a=function(g){function e(c){return g.call(this,c)||this}f._inheritsLoose(e,g);f._createClass(e,[{key:"editedBookmark",get:function(){const {bookmark:c}=this;return c?this._get("editedBookmark")||c.clone():null}},{key:"state",
get:function(){return this._get("state")},set:function(c){this.loading=this.validationState=void 0;this._set("state",c)}}]);return e}(a);b.__decorate([d.property()],a.prototype,"bookmark",void 0);b.__decorate([d.property({readOnly:!0})],a.prototype,"editedBookmark",null);b.__decorate([d.property()],a.prototype,"state",null);b.__decorate([d.property()],a.prototype,"validationState",void 0);b.__decorate([d.property()],a.prototype,"loading",void 0);return a=b.__decorate([h.subclass("esri.widgets.Bookmarks.UserState")],
a)});