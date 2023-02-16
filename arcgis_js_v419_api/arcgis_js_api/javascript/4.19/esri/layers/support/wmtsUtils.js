// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../geometry/support/WKIDUnitConversion ../../geometry/SpatialReference ../../geometry/Point ../../geometry/Extent ../../geometry/projectionEllipsoid ./TileInfo".split(" "),function(z,H,B,I,C,J,K,L){function q(a,b){for(let d=0;d<b.childNodes.length;d++){const c=b.childNodes[d];if(c.nodeType===Node.ELEMENT_NODE&&c.nodeName===a)return c}return null}function v(a,b){const d=[];for(let c=0;c<b.childNodes.length;c++){const f=b.childNodes[c];f.nodeType===Node.ELEMENT_NODE&&
f.nodeName===a&&d.push(f)}return d}function w(a,b){const d=[];for(let c=0;c<b.childNodes.length;c++){const f=b.childNodes[c];f.nodeType===Node.ELEMENT_NODE&&f.nodeName===a&&d.push(f)}return d.map(c=>c.textContent)}function n(a,b){a.split("\x3e").forEach(d=>{b&&(b=q(d,b))});return b&&b.textContent}function x(a,b,d,c){let f;Array.prototype.slice.call(c.childNodes).some(e=>{if(-1<e.nodeName.indexOf(a)){var g=q(b,e);g=g&&g.textContent;if(g===d||d.split(":")&&d.split(":")[1]===g)return f=e,!0}return!1});
return f}function D(a,b){const d=[];var c=a.layerMap.get(b);if(c){var f=v("ResourceURL",c);c=v("Dimension",c);if(c.length){var e=n("Identifier",c[0]);var g=w("Default",c[0])||w("Value",c[0])}if(1<c.length){var l=n("Identifier",c[1]);var k=w("Default",c[1])||w("Value",c[1])}a.dimensionMap.set(b,{dimensions:g,dimensions2:k});f.forEach(p=>{let h=p.getAttribute("template");if("tile"===p.getAttribute("resourceType")){if(e&&g.length)if(-1<h.indexOf("{"+e+"}"))h=h.replace("{"+e+"}","{dimensionValue}");else{var m=
h.toLowerCase().indexOf("{"+e.toLowerCase()+"}");-1<m&&(h=h.substring(0,m)+"{dimensionValue}"+h.substring(m+e.length+2))}l&&k.length&&(-1<h.indexOf("{"+l+"}")?h=h.replace("{"+l+"}","{dimensionValue2}"):(m=h.toLowerCase().indexOf("{"+l.toLowerCase()+"}"),-1<m&&(h=h.substring(0,m)+"{dimensionValue2}"+h.substring(m+l.length+2))));d.push({template:h,format:p.getAttribute("format"),resourceType:"tile"})}});return d}}function M(a,b){return v("Style",a).map(d=>{var c=q("LegendURL",d),f=q("Keywords",d);f=
f&&w("Keyword",f);c=c&&c.getAttribute("xlink:href");b&&(c=c&&c.replace(/^http:/i,"https:"));return{abstract:n("Abstract",d),id:n("Identifier",d),isDefault:"true"===d.getAttribute("isDefault"),keywords:f,legendUrl:c,title:n("Title",d)}})}function N(a,b){return v("TileMatrixSetLink",a).map(d=>q("TileMatrixSet",d).textContent).map(d=>O(d,a,b))}function O(a,b,d){b=x("TileMatrixSetLink","TileMatrixSet",a,b);b=w("TileMatrix",b);const c=d.find(k=>{k=(k=q("Identifier",k))&&k.textContent;return k===a||a.split(":")&&
a.split(":")[1]===k?!0:!1});d=P(c);const f=d.spatialReference,e=f.wkid;var g=q("TileMatrix",c);g=[parseInt(n("TileWidth",g),10),parseInt(n("TileHeight",g),10)];const l=[];b.length?b.forEach((k,p)=>{k=x("TileMatrix","Identifier",k,c);l.push(E(k,e,p,a))}):v("TileMatrix",c).forEach((k,p)=>{l.push(E(k,e,p,a))});b=Q(c,d,g,l[0]);return{id:a,fullExtent:b.toJSON(),tileInfo:(new L({dpi:96,spatialReference:f,size:g,origin:d,lods:l})).toJSON()}}function P(a){let b=n("SupportedCRS",a);b&&(b=b.toLowerCase());
let d=parseInt(b.split(":").pop(),10);if(900913===d||3857===d)d=102100;let c=!1;if(-1<b.indexOf("crs84")||-1<b.indexOf("crs:84"))d=4326,c=!0;else if(-1<b.indexOf("crs83")||-1<b.indexOf("crs:83"))d=4269,c=!0;else if(-1<b.indexOf("crs27")||-1<b.indexOf("crs:27"))d=4267,c=!0;const f=new I({wkid:d});a=q("TileMatrix",a);var e=n("TopLeftCorner",a).split(" ");a=e[0].split("E").map(h=>Number(h));e=e[1].split("E").map(h=>Number(h));let g=a[0],l=e[0],k;1<a.length&&(g=a[0]*10**a[1]);1<e.length&&(l=e[0]*10**
e[1]);const p=c&&4326===d&&90===g&&-180===l;F.some((h,m)=>{const y=Number(b.split(":").pop());if(y>=h[0]&&y<=h[1]||4326===d&&(!c||p))return k=new C(l,g,f),!0;m===F.length-1&&(k=new C(g,l,f));return!1});return k}function Q(a,b,d,c){var f=q("BoundingBox",a);if(f){var e=n("LowerCorner",f).split(" ");var g=n("UpperCorner",f).split(" ")}e&&1<e.length&&g&&1<g.length?(a=parseFloat(e[0]),d=parseFloat(e[1]),e=parseFloat(g[0]),g=parseFloat(g[1])):(a=q("TileMatrix",a),e=parseFloat(n("MatrixWidth",a)),f=parseFloat(n("MatrixHeight",
a)),a=b.x,g=b.y,e=a+e*d[0]*c.resolution,d=g-f*d[1]*c.resolution);return new J(a,d,e,g,b.spatialReference)}function E(a,b,d,c){const f=n("Identifier",a);a=n("ScaleDenominator",a).split("E").map(e=>Number(e));a=1<a.length?a[0]*10**a[1]:a[0];b=G(b,a,c);return{level:d,levelValue:f,scale:1.058267716535433*a,resolution:b}}function G(a,b,d){a=B.hasOwnProperty(String(a))?B.values[B[a]]:"default028mm"===d?6370997*Math.PI/180:K.getReferenceEllipsoidFromWKID(a).metersPerDegree;return 7*b/25E3/a}const F=[[3819,
3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,
5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,
3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];z.getTileUrlFromResourceUrls=
function(a,b,d,c,f,e,g,l){var {dimensionMap:k}=a;a=D(a,b);const p=k.get(b).dimensions&&k.get(b).dimensions[0];b=k.get(b).dimensions2&&k.get(b).dimensions2[0];k="";if(a&&0<a.length){let h=null;a.some(m=>m.format===c?(h=m,!0):!1);h||(h=a[g%a.length]);k=h.template.replace(/\{Style\}/gi,f).replace(/\{TileMatrixSet\}/gi,d).replace(/\{TileMatrix\}/gi,e).replace(/\{TileRow\}/gi,""+g).replace(/\{TileCol\}/gi,""+l).replace(/\{dimensionValue\}/gi,p).replace(/\{dimensionValue2\}/gi,b)}return k};z.getTileUrlTemplateFromResourceUrls=
function(a,b,d,c){const {dimensionMap:f}=a;a=D(a,b);let e="";if(a&&0<a.length){const g=f.get(b).dimensions&&f.get(b).dimensions[0];b=f.get(b).dimensions2&&f.get(b).dimensions2[0];e=a[0].template;e.indexOf(".xxx")===e.length-4&&(e=e.slice(0,e.length-4));e=e.replace(/\{Style\}/gi,c);e=e.replace(/\{TileMatrixSet\}/gi,d);e=e.replace(/\{TileMatrix\}/gi,"{level}");e=e.replace(/\{TileRow\}/gi,"{row}");e=e.replace(/\{TileCol\}/gi,"{col}");e=e.replace(/\{dimensionValue\}/gi,g);e=e.replace(/\{dimensionValue2\}/gi,
b)}return e};z.parseCapabilities=function(a,b){var d,c;a=a.replace(/ows:/gi,"");var f=(new DOMParser).parseFromString(a,"text/xml").documentElement;const e=new Map;a=new Map;var g=q("Contents",f);if(!g)throw new H("wmtslayer:wmts-capabilities-xml-is-not-valid");var l=q("OperationsMetadata",f);l=null==l?void 0:l.querySelector("[name\x3d'GetTile']");l=(l=null==l?void 0:l.getElementsByTagName("Get"))&&Array.prototype.slice.call(l);const k=null!=(d=-1<(null==b?void 0:null==(c=b.url)?void 0:c.indexOf("https")))?
d:!1;let p=b.serviceMode,h,m=b&&b.url,y;l&&l.length&&l.some(r=>{const t=q("Constraint",r);if(!t||x("AllowedValues","Value",p,t))return m=r.attributes[0].nodeValue,!0;if(!t||x("AllowedValues","Value","RESTful",t)||x("AllowedValues","Value","REST",t))y=r.attributes[0].nodeValue;else if(!t||x("AllowedValues","Value","KVP",t))h=r.attributes[0].nodeValue;return!1});m||(y?(m=y,p="RESTful"):h?(m=h,p="KVP"):m=(b=q("ServiceMetadataURL",f))&&b.getAttribute("xlink:href"));b=m.indexOf("1.0.0/");-1===b&&"RESTful"===
p?m+="/":-1<b&&(m=m.substring(0,b));"KVP"===p&&(m+=-1<b?"":"?");k&&(m=m.replace(/^http:/i,"https:"));f=n("ServiceIdentification\x3eAccessConstraints",f);b=v("Layer",g);const R=v("TileMatrixSet",g);g=b.map(r=>{var t=n("Identifier",r);e.set(t,r);{const S=n("Abstract",r),T=w("Format",r);var u=q("WGS84BoundingBox",r);var A=u?n("LowerCorner",u).split(" "):["-180","-90"];u=u?n("UpperCorner",u).split(" "):["180","90"];A={xmin:parseFloat(A[0]),ymin:parseFloat(A[1]),xmax:parseFloat(u[0]),ymax:parseFloat(u[1]),
spatialReference:{wkid:4326}};u=M(r,k);const U=n("Title",r);r=N(r,R);t={id:t,fullExtent:A,description:S,formats:T,styles:u,title:U,tileMatrixSets:r}}return t});return{copyright:f,layers:g,tileUrl:m,serviceMode:p,layerMap:e,dimensionMap:a}};z.parseResourceInfo=function(a){a.layers.forEach(b=>{b.tileMatrixSets.forEach(d=>{const c=d.tileInfo;96!==c.dpi&&(c.lods.forEach(f=>{f.scale=96*f.scale/c.dpi;f.resolution=G(c.spatialReference.wkid,90.71428571428571*f.scale/96,d.id)}),c.dpi=96)})});return a};Object.defineProperty(z,
"__esModule",{value:!0})});