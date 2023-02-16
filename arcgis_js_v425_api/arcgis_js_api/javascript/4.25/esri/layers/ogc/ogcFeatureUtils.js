// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../../core/Error ../../core/Logger ../../core/maybe ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../graphics/featureConversionUtils ../graphics/OptimizedFeatureSet ../graphics/sources/geojson/geojson ../graphics/sources/support/clientSideDefaults ../support/FieldsIndex ../support/fieldType ../../geometry/SpatialReference".split(" "),function(m,t,ka,u,r,R,h,S,O,A,T,B,U,V,W,v){function C(){C=
t._asyncToGenerator(function*(a,b,c={},e=5){var {links:f}=a;f=p(f,"items","application/geo+json")||p(f,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(h.isNone(f))throw new r("ogc-feature-layer:missing-items-page","Missing items url");({data:c}=yield u(f.href,{signal:c.signal,query:{limit:e,...c.customParameters,token:c.apiKey},headers:{accept:"application/geo+json"}}));yield B.validateGeoJSON(c);const g=B.inferLayerProperties(c,{geometryType:b.geometryType});c=b.fields||
g.fields||[];e=null!=b.hasZ?b.hasZ:g.hasZ;f=g.geometryType;const q=b.objectIdField||g.objectIdFieldName||"OBJECTID";b=b.timeInfo;var l=c.find(({name:w})=>w===q);if(l)l.editable=!1,l.nullable=!1;else{if(!g.objectIdFieldType)throw new r("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");c.unshift({name:q,alias:q,type:"number"===g.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}q!==g.objectIdFieldName&&(l=c.find(({name:w})=>
w===g.objectIdFieldName))&&(l.type="esriFieldTypeInteger");c===g.fields&&0<g.unknownFields.length&&y.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:g.unknownFields}});for(var d of c){null==d.name&&(d.name=d.alias);null==d.alias&&(d.alias=d.name);"esriFieldTypeOID"!==d.type&&"esriFieldTypeGlobalID"!==d.type&&(d.editable=null==d.editable?!0:!!d.editable,d.nullable=null==d.nullable?!0:!!d.nullable);
if(!d.name)throw new r("ogc-feature-layer:invalid-field-name","field name is missing",{field:d});if(!W.kebabDict.jsonValues.includes(d.type))throw new r("ogc-feature-layer:invalid-field-type",`invalid type for field "${d.name}"`,{field:d});}b&&(d=new V(c),b.startTimeField&&((l=d.get(b.startTimeField))?(b.startTimeField=l.name,l.type="esriFieldTypeDate"):b.startTimeField=null),b.endTimeField&&((l=d.get(b.endTimeField))?(b.endTimeField=l.name,l.type="esriFieldTypeDate"):b.endTimeField=null),b.trackIdField&&
((d=d.get(b.trackIdField))?b.trackIdField=d.name:(b.trackIdField=null,y.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:b}}))),b.startTimeField||b.endTimeField||(y.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:b}}),b=null));d=f?U.createDrawingInfo(f):null;a=X(a);return{drawingInfo:d,extent:a,geometryType:f,fields:c,hasZ:!!e,objectIdField:q,timeInfo:b}});return C.apply(this,
arguments)}function D(){D=t._asyncToGenerator(function*(a,b={}){({links:a}=a);a=p(a,"data","application/json")||p(a,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(h.isNone(a))throw new r("ogc-feature-layer:missing-collections-page","Missing collections url");const {apiKey:c,customParameters:e,signal:f}=b;({data:b}=yield u(a.href,{signal:f,headers:{accept:"application/json"},query:{...e,token:c}}));return b});return D.apply(this,arguments)}function E(){E=t._asyncToGenerator(function*(a,
b={}){({links:a}=a);a=p(a,"conformance","application/json")||p(a,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(h.isNone(a))throw new r("ogc-feature-layer:missing-conformance-page","Missing conformance url");const {apiKey:c,customParameters:e,signal:f}=b;({data:b}=yield u(a.href,{signal:f,headers:{accept:"application/json"},query:{...e,token:c}}));return b});return E.apply(this,arguments)}function F(){F=t._asyncToGenerator(function*(a,b={}){const {apiKey:c,customParameters:e,
signal:f}=b;({data:a}=yield u(a,{signal:f,headers:{accept:"application/json"},query:{...e,token:c}}));return a});return F.apply(this,arguments)}function G(){G=t._asyncToGenerator(function*(a,b={}){a=p(a.links,"service-desc","application/vnd.oai.openapi+json;version\x3d3.0");if(h.isNone(a))return y.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const {apiKey:c,customParameters:e,signal:f}=b;({data:b}=yield u(a.href,{signal:f,headers:{accept:"application/vnd.oai.openapi+json;version\x3d3.0"},
query:{...e,token:c}}));return b});return G.apply(this,arguments)}function H(){H=t._asyncToGenerator(function*(a,b,c){a=yield P(a,b,c);return A.convertToFeatureSet(a)});return H.apply(this,arguments)}function P(a,b,c){return I.apply(this,arguments)}function I(){I=t._asyncToGenerator(function*(a,b,c){const {collection:e,layerDefinition:f,maxRecordCount:g,queryParameters:{apiKey:q,customParameters:l},spatialReference:d,supportedCrs:w}=a;({links:a}=e);var k=p(a,"items","application/geo+json")||p(a,"http://www.opengis.net/def/rel/ogc/1.0/items",
"application/geo+json");if(h.isNone(k))throw new r("ogc-feature-layer:missing-items-page","Missing items url");const {geometry:Y,num:Z,start:J,timeExtent:aa,where:ba}=b;if(b.objectIds)throw new r("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");a=v.fromJSON(d);b=h.unwrapOr(b.outSpatialReference,a);a=b.isWGS84?null:Q(b,w);var z=ca(Y,w);const ea=da(aa),ha=fa(ba);({data:k}=yield u(k.href,{...c,query:{...l,...z,crs:a,datetime:ea,query:ha,limit:Z??(null!=
J&&void 0!==J?10:g),startindex:J,token:q},headers:{accept:"application/geo+json"}}));c=!1;k.links&&(c=!!k.links.find(ia=>"next"===ia.rel));!c&&Number.isInteger(k.numberMatched)&&Number.isInteger(k.numberReturned)&&(c=k.numberReturned<k.numberMatched);const {fields:ja,geometryType:K,hasZ:L,objectIdField:M}=f;k=B.createOptimizedFeatures(k,{geometryType:K,hasZ:L,objectIdField:M});if(!a&&b.isWebMercator)for(var x of k)h.isSome(x.geometry)&&(z=A.convertToGeometry(x.geometry,K,L,!1),z.spatialReference=
v.WGS84,x.geometry=A.convertFromGeometry(O.project(z,b)));for(var n of k)n.objectId=n.attributes[M];x=a||!a&&b.isWebMercator?b.toJSON():S.WGS84;n=new T;n.exceededTransferLimit=c;n.features=k;n.fields=ja;n.geometryType=K;n.hasZ=L;n.objectIdFieldName=M;n.spatialReference=x;return n});return I.apply(this,arguments)}function Q(a,b){const {isWebMercator:c,wkid:e}=a;return e?(a=c?b[3857]??b[102100]??b[102113]??b[900913]:b[a.wkid])?`${"http://www.opengis.net/def/crs/"}${a}`:null:null}function N(a){if(h.isNone(a))return"";
const {xmin:b,ymin:c,xmax:e,ymax:f}=a;return`${b},${c},${e},${f}`}function da(a){if(h.isNone(a))return null;const {start:b,end:c}=a;return`${h.isSome(b)?b.toISOString():".."}/${h.isSome(c)?c.toISOString():".."}`}function fa(a){return h.isNone(a)||!a||"1\x3d1"===a?null:a}function ca(a,b){if(!h.isSome(a)||"extent"!==a.type)return null;const {spatialReference:c}=a;if(!c||c.isWGS84)return{bbox:N(a)};b=Q(c,b);return h.isSome(b)?{bbox:N(a),"bbox-crs":b}:c.isWebMercator?{bbox:N(O.project(a,v.WGS84))}:null}
function X(a){a=a.extent?.spatial;if(!a)return null;var b=a.bbox[0],c=4===b.length;a=b[0];const e=b[1],f=c?void 0:b[2],g=c?b[2]:b[3],q=c?b[3]:b[4];b=c?void 0:b[5];c=v.WGS84.toJSON();return{xmin:a,ymin:e,xmax:g,ymax:q,zmin:f,zmax:b,spatialReference:c}}function p(a,b,c){return a.find(e=>e.rel===b&&e.type===c)||a.find(e=>e.rel===b&&!e.type)}const y=R.getLogger("esri.layers.graphics.sources.ogcfeature");m.crsDefault="http://www.opengis.net/def/crs/OGC/1.3/CRS84";m.crsPrefix="http://www.opengis.net/def/crs/";
m.getCollectionDefinition=function(a,b){return C.apply(this,arguments)};m.getServerCollections=function(a){return D.apply(this,arguments)};m.getServerConformance=function(a){return E.apply(this,arguments)};m.getServerLandingPage=function(a){return F.apply(this,arguments)};m.getServerOpenApi=function(a){return G.apply(this,arguments)};m.getSpatialReferenceWkid=function(a){a=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(a)?.groups;if(!a)return null;const {authority:b,
code:c}=a;switch(b.toLowerCase()){case "ogc":switch(c.toLowerCase()){case "crs27":return v.GCS_NAD_1927.wkid;case "crs83":return 4269;case "crs84":case "crs84h":return v.WGS84.wkid;default:return null}case "esri":case "epsg":return a=Number.parseInt(c,10),Number.isNaN(a)?null:a;default:return null}};m.queryFeatureSetJSON=function(a,b,c){return H.apply(this,arguments)};m.queryOptimizedFeatureSet=P;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});