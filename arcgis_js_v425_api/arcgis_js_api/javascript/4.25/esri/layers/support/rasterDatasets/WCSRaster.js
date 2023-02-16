// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../ogc/crsUtils ../DimensionalDefinition ./BaseRaster ./multipartParser ./wcsCapabilitiesParser ./wcsCoverageParser ../rasterFormats/RasterCodec ../rasterFunctions/pixelUtils ../../../geometry/Extent".split(" "),
function(D,I,E,C,K,B,M,J,aa,ba,P,Q,R,S,T,U,N,V,W,X){const Y=["nearest neighbor","bilinear","bicubic"],Z=["nearest","linear","cubic"];E=function(O){function L(){var a=O.apply(this,arguments)||this;a.datasetFormat="WCSServer";return a}D._inheritsLoose(L,O);var z=L.prototype;z.open=function(){var a=D._asyncToGenerator(function*(b){yield this.init();b=b?.signal;var d=yield this._getCapabilities(b);this.capabilities=d;if(!this.version){var c=d.capabilitiesVersion?.slice(0,3);this.version="2.0"===c||"1.1"===
c||"1.0"===c?d.capabilitiesVersion:c=d.supportedVersions.find(h=>"2.0.1"===h)||d.supportedVersions.find(h=>"2.0"===h.slice(0,3))||d.supportedVersions.find(h=>"1.1"===h.slice(0,3))||d.supportedVersions.find(h=>"1.0"===h.slice(0,3))||"1.0.0"}c=d.coverages.filter(h=>null==h.coverageSubType||""===h.coverageSubType||h.coverageSubType?.toLowerCase().startsWith("rectifiedgrid"));null==this.coverageId&&(this.coverageId=c[0].id);c=c.find(h=>h.id===this.coverageId);if(null==c)throw new C("wcsraster-open",`the coverageId ${this.coverageId} does not exist in capabilities`);
this.coverageInfo=(yield this._describeCoverage(b))[0];"2.0"===this.version.slice(0,3)&&(this.coverageInfo.lonLatEnvelope=c.lonLatEnvelope,this.coverageInfo.supportedInterpolations=N.standardizeInterpolations(d.supportedInterpolations));this.datasetName=this.coverageInfo.title;({rasterInfo:d}=this.coverageInfo);this.createRemoteDatasetStorageInfo(d,512,512);this._set("rasterInfo",d);if(null==d.spatialReference)throw new C("wcsraster-open",`coverage without spatial referernce is not supported: ${this.coverageId}`);
const {pixelType:f,bandCount:e}=yield this._getPixelTypeAndBandCount(b);d.pixelType=f;1===d.bandCount&&1<e&&(d.bandCount=e);this.updateTileInfo()});return function(b){return a.apply(this,arguments)}}();z.fetchRawTile=function(){var a=D._asyncToGenerator(function*(b,d,c,f={}){if(this.isBlockOutside(b,d,c))return null;const {nativePixelSize:e,spatialReference:h}=this.rasterInfo;var n=2**b,g=e.x*n;const v=e.y*n,{blockWidth:l,blockHeight:m}=this.getBlockWidthHeight(b);({origin:b}=this.rasterInfo.storageInfo.tileInfo);
const q=this.getTileExtent({x:g,y:v},d,c,b,h,[l,m]),w=this.rasterInfo.extent,u=q.xmax>w.xmax,r=q.ymin<w.ymin;d=u||r;let k=q;c=l;b=m;d&&(k=q.clone().intersection(w),B.isSome(k)&&(u&&(c=Math.floor((k.xmax-k.xmin)/g),k.xmax=k.xmin+g*c),r&&(b=Math.floor((k.ymax-k.ymin)/v),k.ymin=k.ymax-v*b)));if(B.isNone(k)||1>=c||1>=b)return null;n=yield this._getCoverage(k,c,b,n,f);if(!n)return null;({coverageDescription:g}=this.coverageInfo);let {noDataValue:A,multidimensionalInfo:x}=this.rasterInfo;({multidimensionalDefinition:f}=
f);if(B.isSome(x)&&B.isSome(f)&&f.length){const t=f[0].variableName;"2.0"===g.version?A=g.rangeType[0].find(p=>p.name===t)?.nilValue:"1.1"===g.version&&(A=g.range.find(p=>p.identifier===t)?.nullValues)}if((f=yield this.decodePixelBlock(n,{width:c,height:b,planes:null,pixelType:null,noDataValue:Array.isArray(A)?A[0]:A}))&&(f.width!==c||f.height!==b))throw new C("wcsraster-fetch",`the reponse has unexpected dimension width: ${f.width}, height: {pixelBlock.height}`);return d?W.clip(f,{x:0,y:0},{width:m,
height:m}):f});return function(b,d,c){return a.apply(this,arguments)}}();z._getCapabilities=function(){var a=D._asyncToGenerator(function*(b){const d={service:"WCS",request:"GetCapabilities"};this.version&&(d.version=this.version,d.acceptVersions=this.version);try{const {data:c}=yield this.request(this.url,{query:d,responseType:"xml",signal:b});return U.parseCapabilities(c)}catch(c){if(!M.isAbortError(c))throw new C("wcslayer:open","wcs capabilities is not valid or supported");throw c;}});return function(b){return a.apply(this,
arguments)}}();z._describeCoverage=function(){var a=D._asyncToGenerator(function*(b){const d={service:"WCS",request:"DescribeCoverage",version:this.version},c=this.version?.slice(0,3);"1.0"===c?d.coverage=this.coverageId:"1.1"===c?d.identifiers=this.coverageId:"2.0"===c&&(d.coverageId=this.coverageId);try{const {data:f}=yield this.request(this.url,{query:d,responseType:"xml",signal:b});return N.parseCoverages(f,this.version)}catch(f){if(!M.isAbortError(f))throw new C("wcslayer:open","wcs coverage description is not valid or supported");
throw f;}});return function(b){return a.apply(this,arguments)}}();z._getPixelTypeAndBandCount=function(){var a=D._asyncToGenerator(function*(b){const {pixelSize:d,extent:c,multidimensionalInfo:f}=this.rasterInfo;var e=c.center;e=new X({xmin:e.x-d.x,xmax:e.x+d.x,ymin:e.y-d.y,ymax:e.y+d.y,spatialReference:c.spatialReference});let h=[];if(B.isSome(f)){const m=f.variables[0];h=[];m.dimensions.forEach(q=>{h.push(new R({variableName:m.name,dimensionName:q.name,values:q.hasRegularIntervals?q.extent[0]:q.values?.[0],
isSlice:!0}))})}var {coverageDescription:n}=this.coverageInfo;b={interpolation:"nearest",multidimensionalDefinition:h,signal:B.unwrap(b)};({version:n}=n);const {ioConfig:g}=this,v="2.0"===n&&null==g.allowAnyMediaType||"1.1"===n&&null==g.use2GridOffsets;try{var l=yield this._getCoverage(e,2,2,1,b,!0)}catch(m){if(!v)throw m;if("1.1"===n)if(m.details?.isResolutionMismatch)g.use2GridOffsets=!0;else throw m;}!l&&v&&("2.0"===n&&(g.allowAnyMediaType=!0),(l=yield this._getCoverage(e,2,2,1,b))&&K.getLogger(this.declaredClass).warn("wcsraster:getcoverage",
"response is not a supported multipart/related mediaType with inline tiff,  switching to compability mode"));if(!l)throw new C("wcsraster-open","unable to determine pixel type");l=yield this.decodePixelBlock(l,{width:2,height:2,planes:null,pixelType:null});return{pixelType:l.pixelType,bandCount:l.getPlaneCount()??0}});return function(b){return a.apply(this,arguments)}}();z._getCoverage=function(){var a=D._asyncToGenerator(function*(b,d,c,f,e,h=!1){const {coverageDescription:n}=this.coverageInfo;var {version:g}=
n;b="2.0"===g?this._getCoverage201Parameters(b,d,c,f,e,n):"1.1"===g?this._getCoverage110Parameters(b,d,c,e,n):this._getCoverage100Parameters(b,d,c,e);e="2.0"===g?yield this.request(this._constructWCS201Url(b),{signal:e.signal,responseType:"array-buffer"}):yield this.request(this.url,{query:b,signal:e.signal,responseType:"array-buffer"});if("1.0"===g)return e.data;if("2.0"===g&&!1!==this.ioConfig.allowAnyMediaType&&"tiff"===V.getFormat(e.data))return h&&(this.ioConfig.allowAnyMediaType=!0,K.getLogger(this.declaredClass).warn("wcsraster:getcoverage",
"response is not a supported multipart/related mediaType with inline tiff,  switching to compability mode")),e.data;g=T.parse(e);if(g.isMultipart&&g.data)return g=g.data.find(v=>v.contentType?.toLowerCase().includes("image")&&null!=v.contentData),h&&"base64"===g?.contentTransferEncoding&&K.getLogger(this.declaredClass).warn("wcsraster:getcoverage","response is base64 encoded which may impact layer display performance"),g?.contentData;g=new Uint8Array(e.data,0,Math.min(e.data.byteLength,2E3));g=(h=
String.fromCharCode.apply(null,g).toLowerCase().includes("exception"))&&String.fromCharCode.apply(null,g).includes("A non-zero RESX/RESY or WIDTH/HEIGHT is required but neither was provided");if(h)throw new C("wcsraster:getcoverage","server returns an exception",{isResolutionMismatch:g});throw new C("wcsraster:getcoverage","response is not a supported multipart mediaType with inline tiff");});return function(b,d,c,f,e){return a.apply(this,arguments)}}();z._getInterpolationIndex=function(a){return a&&
this.coverageInfo.supportedInterpolations?.includes(a)?"nearest"===a?0:"bilinear"===a?1:"cubic"===a?2:0:0};z._getCoverage100Parameters=function(a,b,d,c){const f=`${a.xmin},${a.ymin},${a.xmax},${a.ymax}`;a=a.spatialReference.wkid;const e=(this.coverageInfo.supportedFormats||[]).find(m=>m.toLowerCase().includes("tiff"))||"GEOTIFF",{bandIds:h,interpolation:n}=c;var g=this._getInterpolationIndex(n);const v=h?h.map(m=>this.coverageInfo.bandNames[m]):null;g=Y[g];({multidimensionalDefinition:c}=c);let l;
B.isSome(c)&&B.isSome(this.rasterInfo.multidimensionalInfo)&&(c=c.find(m=>"StdTime"===m.dimensionName)?.values)&&0<c.length&&(c[0]instanceof Array&&(c=c[0]),l=c.map(m=>this._convertToISOTime(m)).join(","));return{service:"WCS",request:"GetCoverage",version:this.version,coverage:this.coverageId,format:e,crs:`EPSG:${a}`,bbox:f,width:b,height:d,time:l,interpolation:g,band:v?.join(",")}};z._getCoverage110Parameters=function(a,b,d,c,f){const {multidimensionalDefinition:e,bandIds:h,interpolation:n}=c;c=
a.spatialReference.wkid;const g=`urn:ogc:def:crs:EPSG::${c}`,v=(this.coverageInfo.supportedFormats||[]).find(x=>x.toLowerCase().includes("tiff"))||"image/tiff";var l=this._getInterpolationIndex(n);l=Z[l];const m=null==n||0===this.coverageInfo.supportedInterpolations?.indexOf(n);var q=f.domain.spatialDomain,w=q.origin.x<=q.envelope.xmin&&q.origin.y<=q.envelope.ymin,u=a.width/b,r=a.height/d*(w?1:-1);d=w?[a.xmin,a.ymin]:[a.xmin,a.ymax];d=(b=q.useEPSGAxis&&Q.isAxesOrderReversedForWkid(c))?`${d[1]},${d[0]}`:
`${d[0]},${d[1]}`;q=this.ioConfig.use2GridOffsets;q=b?q?`${r},${u}`:`${r},0,0,${u}`:q?`${u},${r}`:`${u},0,0,${r}`;w=u/2;u=a.xmin+w;w=a.xmax-w;var k=Math.abs(r)/2;r=a.ymin+k;a=a.ymax-k;a=b?`${r},${u},${a},${w},${g}`:`${u},${r},${w},${a},${g}`;b=(b=f.range.find(x=>x.axis.some(t=>t.identifier.toLowerCase().includes("band"))))&&l&&h?m?`${b.identifier}[${b.axis[0].identifier}[${h.join(",")}]]`:`${b.identifier}:${l}[${b.axis[0].identifier}[${h.join(",")}]]`:null;let A;if(B.isSome(e)&&e.length)for(r=0;r<
e.length;r++){u=e[r].values;const x=e[r].dimensionName.toLowerCase(),t=e[r].variableName.toLowerCase();0<u.length&&(u[0]instanceof Array&&(u=u[0]),"stdtime"===x?A=u.map(p=>this._convertToISOTime(p)).join(","):(w=f.range.find(p=>p.identifier.toLowerCase()===t))&&(k=w.axis.find(p=>p.identifier.toLowerCase()===x))&&(b=m?w.identifier+"["+k.identifier+"["+u.join(",")+"]]":w.identifier+":"+l+"["+k.identifier+"["+u.join(",")+"]]"))}return{service:"WCS",request:"GetCoverage",version:this.version,identifier:this.coverageId,
format:v,crs:`EPSG:${c}`,boundingbox:a,gridCS:"urn:ogc:def:cs:OGC:0.0:Grid2dSquareCS",gridType:"urn:ogc:def:method:WCS:1.1:2dGridIn2dCrs",gridOrigin:d,gridOffsets:q,gridBaseCRS:g,timeSequence:A,rangeSubset:b}};z._convertToISOTime=function(a,b=!1){return(b?new Date(864E5*(a-25569)):new Date(a)).toISOString()};z._getCoverage201Parameters=function(a,b,d,c,f,e){const {multidimensionalDefinition:h,interpolation:n}=f;var g=this._getInterpolationIndex(n);let v=null;var {supportedInterpolations:l}=this.capabilities;
if(l?.length)switch(g){case 0:v=l.find(y=>y.toLowerCase().includes("nearest"));break;case 1:v=l.find(y=>y.toLowerCase().includes("linear"));break;case 2:v=l.find(y=>y.toLowerCase().includes("cubic")||y.toLowerCase().includes("quadratic"))}g=(this.coverageInfo.supportedFormats||[]).find(y=>y.toLowerCase().includes("tiff"))||"image/tiff";const {bandNames:m}=this.coverageInfo,{boundedBy:q,domainSet:w,rangeType:u}=e;var r=q.isEastFirst?0:1,{axisLabels:k}=q;l=k[r];r=k[1-r];const A=`http://www.opengis.net/def/crs/EPSG/0/${a.spatialReference.wkid}`,
x=[];x.push(`${l}(${a.xmin},${a.xmax})`);x.push(`${r}(${a.ymin},${a.ymax})`);a=[];if(2<k.length)for(var t=2;t<k.length;t++){var p=w.origin[t];if(k[t].toLowerCase().includes("time")){let y=p.toString();q.uomLabels?.[t].toLowerCase().includes("ole")&&(a.push(k[t]),y=this._convertToISOTime(p,!0));x.push(k[t]+",http://www.opengis.net("+y+")")}else x.push(k[t]+",http://www.opengis.net("+p+")")}a=null;if(B.isSome(h)&&h.length){const y=[];u.forEach(F=>F.forEach(G=>y.push(G.name)));f=[];for(let F=0;F<h.length;F++){const G=
k.find(H=>H===h[F].dimensionName);t=y.find(H=>H===h[F].variableName);f.includes(t)||f.push(t);G&&(p=h[F].values,0<p.length&&(Array.isArray(p[0])&&(p=p[0]),t="",t=G.toLowerCase().includes("time")?p.map(H=>this._convertToISOTime(H)).join(","):p.join(","),p=x.findIndex(H=>0===H.indexOf(G+",http://www.opengis.net")),-1===p&&x.push(G+",http://www.opengis.net("+t+")"),-1===p||x[p].includes("("+t+")")||x.splice(p,1,G+",http://www.opengis.net("+t+")")))}f.length&&(a=f.join(","))}else 2<=m?.length&&(a=(f.bandIds?
f.bandIds.map(y=>m[y]):m).join(","));k=x.join("\x26subset\x3d");e=!e.domainSet.hasSameAxisLabelsAsBoundedBy&&!1!==this.ioConfig.allowScaleFactor;return{service:"WCS",request:"GetCoverage",version:this.version,coverageId:this.coverageId,rangesubset:a,interpolation:v,scaleSize:e?null:`${l}(${b}),${r}(${d})`,scaleFactor:e?1/c:null,subset:k,format:g,mediaType:this.ioConfig.allowAnyMediaType?null:"multipart/related",outputcrs:A,subsettingcrs:A}};z._constructWCS201Url=function(a){const b={...this.ioConfig.customFetchParameters,
...a},d=[];Object.keys(b).forEach(f=>{const e=b[f];null!=e&&("subset"!==f?d.push(`${f}=${encodeURIComponent(e)}`):e.split("\x26subset\x3d").forEach(h=>{h&&d.push(`subset=${encodeURIComponent(h)}`)}))});a=encodeURI(this.url);const c=d.join("\x26");return`${a}?${c}`};return L}(S);I.__decorate([J.property({type:String,json:{write:!0}})],E.prototype,"datasetFormat",void 0);I.__decorate([J.property()],E.prototype,"tileType",void 0);I.__decorate([J.property({type:String,json:{write:!0}})],E.prototype,"version",
void 0);I.__decorate([J.property({type:String,json:{write:!0}})],E.prototype,"coverageId",void 0);return E=I.__decorate([P.subclass("esri.layers.support.rasterDatasets.WCSRaster")],E)});