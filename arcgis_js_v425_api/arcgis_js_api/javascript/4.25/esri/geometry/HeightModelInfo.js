// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/arrayUtils ../core/jsonMap ../core/JSONSupport ../core/unitUtils ../core/Warning ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer".split(" "),function(w,e,d,r,x,t,u,p,q,m,y,z){function v(h,g){return new u("height-unit:unsupported",`Height unit of value '${h}' is not supported`,
g)}var k;const n=r.strict()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"});q=n.jsonValues.slice();d.removeUnordered(q,"orthometric");const l=r.strict()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards",
"indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});d=k=function(h){function g(a){a=h.call(this,a)||this;a.heightModel="gravity-related-height";a.heightUnit="meters";a.vertCRS=null;return a}w._inheritsLoose(g,h);var f=g.prototype;f.writeHeightModel=function(a,b,c){return n.write(a,b,c)};f.readHeightModel=function(a,b,c){if(b=n.read(a))return b;if(c&&
c.messages){b=c.messages;var A=b.push;a=new u("height-model:unsupported",`Height model of value '${a}' is not supported`,{context:c});A.call(b,a)}return null};f.readHeightUnit=function(a,b,c){if(b=l.read(a))return b;c&&c.messages&&c.messages.push(v(a,{context:c}));return null};f.readHeightUnitService=function(a,b,c){if(b=t.unitFromRESTJSON(a)||l.read(a))return b;c&&c.messages&&c.messages.push(v(a,{context:c}));return null};f.readVertCRS=function(a,b){return b.vertCRS||b.ellipsoid||b.geoid};f.clone=
function(){return new k({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})};f.equals=function(a){return a?this===a?!0:this.heightModel===a.heightModel&&this.heightUnit===a.heightUnit&&this.vertCRS===a.vertCRS:!1};g.deriveUnitFromSR=function(a,b){b=t.getVerticalUnitStringForSR(b);return new k({heightModel:a.heightModel,heightUnit:b,vertCRS:a.vertCRS})};f.write=function(a,b){b={origin:"web-scene",...b};return h.prototype.write.call(this,a,b)};g.fromJSON=function(a){if(!a)return null;
const b=new k;b.read(a,{origin:"web-scene"});return b};return g}(x.JSONSupport);e.__decorate([p.property({type:n.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:q,default:"ellipsoidal"}}}})],d.prototype,"heightModel",void 0);e.__decorate([z.writer("web-scene","heightModel")],d.prototype,"writeHeightModel",null);e.__decorate([m.reader(["web-scene","service"],"heightModel")],d.prototype,"readHeightModel",null);e.__decorate([p.property({type:l.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:l.jsonValues,
write:l.write}}}})],d.prototype,"heightUnit",void 0);e.__decorate([m.reader("web-scene","heightUnit")],d.prototype,"readHeightUnit",null);e.__decorate([m.reader("service","heightUnit")],d.prototype,"readHeightUnitService",null);e.__decorate([p.property({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],d.prototype,"vertCRS",void 0);e.__decorate([m.reader("service","vertCRS",["vertCRS","ellipsoid","geoid"])],d.prototype,"readVertCRS",null);return d=k=e.__decorate([y.subclass("esri.geometry.HeightModelInfo")],
d)});