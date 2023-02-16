// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../geometry/SpatialReference ../geometry/Extent ../geometry ../portal/PortalItem ./support/TileInfo ./WebTileLayer".split(" "),function(f,b,a,q,r,c,t,h,u,v,w,k,l,x,m,n,p){a=function(g){function e(...d){d=g.call(this,
...d)||this;d.portalItem=null;d.isReference=null;d.subDomains=["a","b","c"];d.fullExtent=new l(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,k.WebMercator);d.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png";d.operationalLayerType="OpenStreetMap";d.type="open-street-map";d.copyright="Map data \x26copy; OpenStreetMap contributors, CC-BY-SA";return d}f._inheritsLoose(e,g);f._createClass(e,[{key:"refreshInterval",get:function(){return 0}}]);return e}(p);
b.__decorate([c.property({type:m,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"portalItem",void 0);b.__decorate([c.property({type:Boolean,json:{read:!1,write:!1}})],a.prototype,"isReference",void 0);b.__decorate([c.property({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"refreshInterval",null);b.__decorate([c.property({type:n,json:{write:!1}})],a.prototype,"tileInfo",void 0);b.__decorate([c.property({type:["show",
"hide"]})],a.prototype,"listMode",void 0);b.__decorate([c.property({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"subDomains",void 0);b.__decorate([c.property({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"fullExtent",void 0);b.__decorate([c.property({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"urlTemplate",void 0);b.__decorate([c.property({type:["OpenStreetMap"]})],a.prototype,"operationalLayerType",void 0);b.__decorate([c.property({json:{read:!1}})],a.prototype,"type",void 0);
b.__decorate([c.property({json:{read:!1,write:!1}})],a.prototype,"copyright",void 0);b.__decorate([c.property({json:{read:!1,write:!1}})],a.prototype,"wmtsInfo",void 0);return a=b.__decorate([h.subclass("esri.layers.OpenStreetMapLayer")],a)});