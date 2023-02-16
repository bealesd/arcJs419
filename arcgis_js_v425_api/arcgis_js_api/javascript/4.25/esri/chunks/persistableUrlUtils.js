// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../core/maybe","../core/urlUtils"],function(f,n,e){function h(b,a){var d=a&&a.url&&a.url.path;b&&d&&(b=e.makeAbsolute(b,d,{preserveProtocolRelative:!0}),a.portalItem&&a.readResourcePaths&&(d=e.makeRelative(b,a.portalItem.itemUrl),null!=d&&v.test(d)&&a.readResourcePaths.push(a.portalItem.resourceFromPath(d).path)));return k(b,a&&a.portal)}function l(b,a,d=f.MarkKeep.YES){if(null==b)return b;!e.isAbsolute(b)&&a&&a.blockedRelativeUrls&&a.blockedRelativeUrls.push(b);let c=e.makeAbsolute(b);
if(a){var g=a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.rootPath||a.url&&a.url.path;g&&(g=k(g,a.portal),c=e.makeRelative(k(c,a.portal),g,g),null!=c&&c!==b&&a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.writtenUrls.push(c))}c=m(c,a?.portal);e.isAbsolute(c)&&(c=e.normalize(c));a?.resources&&a?.portalItem&&!e.isAbsolute(c)&&!e.isDataProtocol(c)&&d===f.MarkKeep.YES&&a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(c),compress:!1});return c}function p(b,a,d){return h(b,d)}function q(b,
a,d,c){b=l(b,c);void 0!==b&&(a[d]=b)}function r(b){return(b?.match(t)??null)?.[1]??null}function u(b){b=b?.match(t)??null;if(null==b)return null;b=b[2];const a=b.lastIndexOf("/");if(-1===a){const {path:g,extension:w}=e.splitPathExtension(b);return{prefix:null,filename:g,extension:n.unwrap(w)}}const {path:d,extension:c}=e.splitPathExtension(b.slice(a+1));return{prefix:b.slice(0,a),filename:d,extension:n.unwrap(c)}}function m(b,a){return a&&!a.isPortal&&a.urlKey&&a.customBaseUrl?e.changeDomain(b,`${a.urlKey}.${a.customBaseUrl}`,
a.portalHostname):b}function k(b,a){if(!a||a.isPortal||!a.urlKey||!a.customBaseUrl)return b;const d=`${a.urlKey}.${a.customBaseUrl}`,c=e.getAppUrl();return e.hasSameOrigin(c,`${c.scheme}://${d}`)?e.changeDomain(b,a.portalHostname,d):e.changeDomain(b,d,a.portalHostname)}const t=/\/items\/([^\/]+)\/resources\/(.*)/,v=/^\.\/resources\//;f.MarkKeep=void 0;(function(b){b[b.YES=0]="YES";b[b.NO=1]="NO"})(f.MarkKeep||(f.MarkKeep={}));const x=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:h,
toJSON:l,read:p,write:q,itemIdFromResourceUrl:r,prefixAndFilenameFromResourceUrl:u,ensureMainOnlineDomain:m,get MarkKeep(){return f.MarkKeep}},Symbol.toStringTag,{value:"Module"}));f.ensureMainOnlineDomain=m;f.fromJSON=h;f.itemIdFromResourceUrl=r;f.persistableUrlUtils=x;f.prefixAndFilenameFromResourceUrl=u;f.read=p;f.toJSON=l;f.write=q});