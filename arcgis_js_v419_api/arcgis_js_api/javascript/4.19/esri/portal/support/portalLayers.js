// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/maybe ../../core/Error ../../request ../PortalItem ./portalItemUtils ../../layers/support/lazyLayerLoader".split(" "),function(h,r,t,u,l,m,v){function n(a){switch(a.type){case "Map Service":return w(a);case "Feature Service":return x(a);case "Feature Collection":return y(a);case "Scene Service":return z(a);case "Image Service":return A(a);case "Stream Service":return{className:"StreamLayer"};case "Vector Tile Service":return{className:"VectorTileLayer"};case "KML":return{className:"KMLLayer"};
case "WMTS":return{className:"WMTSLayer"};case "WMS":return{className:"WMSLayer"};default:return Promise.reject(new t("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type}))}}function B(a){return(0,v.layerLookupMap[a.className])().then(b=>({constructor:b,properties:a.properties}))}function w(a){return C(a).then(b=>b?{className:"TileLayer"}:{className:"MapImageLayer"})}function x(a){return p(a).then(b=>{if("object"===typeof b){const d={};null!=b.id&&(d.layerId=b.id);return{className:"FeatureLayer",
properties:d}}return{className:"GroupLayer"}})}function z(a){return p(a).then(b=>{if("object"===typeof b){const d={};null!=b.id?(d.layerId=b.id,b=`${a.url}/layers/${b.id}`):b=a.url;if(Array.isArray(a.typeKeywords)&&0<a.typeKeywords.length){const c={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const e of Object.keys(c))if(-1!==a.typeKeywords.indexOf(e))return{className:c[e]}}return g(b).then(c=>{let e=
"SceneLayer";const f={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};c&&c.layerType&&f[c.layerType]&&(e=f[c.layerType]);return{className:e,properties:d}})}return{className:"GroupLayer"}})}async function y(a){await a.load();if(m.hasTypeKeyword(a,"Map Notes"))return{className:"MapNotesLayer"};if(m.hasTypeKeyword(a,"Route Layer"))return{className:"RouteLayer"};a=await a.fetchData();return 1===k(a)?{className:"FeatureLayer"}:
{className:"GroupLayer"}}async function A(a){var b,d,c;await a.load();const e=null!=(b=null==(d=a.typeKeywords)?void 0:d.map(f=>f.toLowerCase()))?b:[];if(-1<e.indexOf("elevation 3d layer"))return{className:"ElevationLayer"};if(-1<e.indexOf("tiled imagery"))return{className:"ImageryTileLayer"};b=await a.fetchData();b=null==b?void 0:b.layerType;return"ArcGISTiledImageServiceLayer"===b?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===b?{className:"ImageryLayer"}:"map"===(null==(c=(await g(a.url)).cacheType)?
void 0:c.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function C(a){return g(a.url).then(b=>b.tileInfo)}function p(a){return!a.url||a.url.match(/\/\d+$/)?Promise.resolve({}):a.load().then(()=>a.fetchData()).then(b=>0<k(b)?q(b):g(a.url).then(q))}function q(a){return 1===k(a)?{id:r.unwrap(D(a))}:!1}function D(a){const b=a.layers;return b&&b.length?b[0].id:(a=a.tables)&&a.length?a[0].id:null}function k(a){var b,d,c,e;const f=null!=(b=null==a?void 0:null==(d=a.layers)?void 0:
d.length)?b:0;a=null!=(c=null==a?void 0:null==(e=a.tables)?void 0:e.length)?c:0;return f+a}function g(a){return u(a,{responseType:"json",query:{f:"json"}}).then(b=>b.data)}h.fromItem=function(a){!a.portalItem||a.portalItem instanceof l||(a={...a,portalItem:new l(a.portalItem)});return a.portalItem.load().then(n).then(B).then(b=>Promise.resolve(new b.constructor({portalItem:a.portalItem,...b.properties})))};h.selectLayerClassPath=n;Object.defineProperty(h,"__esModule",{value:!0})});