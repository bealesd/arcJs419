// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../geometry/SpatialReference ../../../geometry/Point ../../../geometry/Extent ../../../geometry ../../../tasks/support/FeatureSet ../TileInfo ../RasterInfo ../RasterStorageInfo ./BaseRaster ./DBFParser ../rasterTransforms/utils".split(" "),
function(K,z,t,L,Z,aa,G,ba,M,A,ca,da,ea,N,H,O,fa,P,Q,R,S,T,U,I){const n=new Map;n.set("int16","esriFieldTypeSmallInteger");n.set("int32","esriFieldTypeInteger");n.set("int64","esriFieldTypeInteger");n.set("float32","esriFieldTypeSingle");n.set("float64","esriFieldTypeDouble");n.set("text","esriFieldTypeString");t=function(J){function B(){var a=J.apply(this,arguments)||this;a.storageInfo=null;a.datasetFormat="CRF";return a}K._inheritsLoose(B,J);var l=B.prototype;l.open=async function(a){await this.init();
({data:a}=await this.request(this.url+"/conf.json",{signal:null==a?void 0:a.signal}));if(!this._validateHeader(a))throw new A("cloudraster:open","Invalid or unsupported conf.json.");this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const {storageInfo:b,rasterInfo:c}=this._parseHeader(a);"thematic"===c.dataType&&(a=await this._fetchAuxiliaryInformation(),c.attributeTable=a);this._set("storageInfo",b);this._set("rasterInfo",c);this.ioConfig.retryCount=this.ioConfig.retryCount||0};l.fetchRawTile=
async function(a,b,c,d={}){a=this.rasterInfo.storageInfo.maximumPyramidLevel-a;if(0>a)return null;a=this._buildCacheFilePath(a,b,c,d.multidimensionalDefinition);b=this._getIndexRecordFromBundle(b,c);c=await this.request(a,{range:{from:0,to:this.storageInfo.headerSize-1},responseType:"array-buffer",signal:d.signal});if(!c)return null;c=new Uint8Array(c.data);b=this._getTileEndAndContentType(c,b);return 0===b.recordSize?null:(d=await this.request(a,{range:{from:b.position,to:b.position+b.recordSize},
responseType:"array-buffer",signal:d.signal}))?this.decodePixelBlock(d.data,{width:this.rasterInfo.storageInfo.tileInfo.size[0],height:this.rasterInfo.storageInfo.tileInfo.size[1],planes:null,pixelType:null}):null};l._validateHeader=function(a){const b="origin extent geodataXform LODInfos blockWidth blockHeight bandCount pixelType pixelSizeX pixelSizeY format packetSize".split(" ");return a&&"RasterInfo"===a.type&&!b.some(c=>!a[c])};l._parseHeader=function(a){var b,c;const d="u1 u2 u4 u8 s8 u16 s16 u32 s32 f32 f64".split(" ")[a.pixelType],
{bandCount:g,histograms:h,colormap:m,blockWidth:u,blockHeight:v,firstPyramidLevel:V,maximumPyramidLevel:C}=a,W=a.statistics&&a.statistics.map(r=>({min:r.min,max:r.max,avg:r.mean,stddev:r.standardDeviation,median:r.median,mode:r.mode}));var e=a.extent.spatialReference,p=null==(b=a.geodataXform)?void 0:b.spatialReference;b=new N(null!=e&&e.wkid||null!=e&&e.wkt?e:p);e=new O({xmin:a.extent.xmin,ymin:a.extent.ymin,xmax:a.extent.xmax,ymax:a.extent.ymax,spatialReference:b});p=new H({x:a.pixelSizeX,y:a.pixelSizeY,
spatialReference:b});const w=Math.round((e.xmax-e.xmin)/p.x),x=Math.round((e.ymax-e.ymin)/p.y),y=this._parseTransform(a.geodataXform),X=y?e:null;y&&(e=y.forwardTransform(e),p.x=(e.xmax-e.xmin)/w,p.y=(e.ymax-e.ymin)/x);const Y=null!=(c=a.properties)?c:{};var D=a.format.toLowerCase().replace("cache/","");c=new H(a.origin.x,a.origin.y,b);let E,f;if(m&&m.colors)for(E=[],f=0;f<m.colors.length;f++){var k=m.colors[f];var q=m.values?m.values[f]:f;E.push([q,k&255,k<<16>>>24,k<<8>>>24,k>>>24])}k=a.LODInfos;
q=[];for(f=0;f<k.levels.length;f++)q.push({level:k.levels[f],resolution:k.resolutions[f],scale:96/.0254*k.resolutions[f]});k=new Q({dpi:96,lods:q,format:D,origin:c,size:[u,v],spatialReference:b});D={recordSize:8,packetSize:a.packetSize,headerSize:a.packetSize*a.packetSize*8+64};q=[{maxCol:Math.ceil(w/u)-1,maxRow:Math.ceil(x/v)-1,minCol:0,minRow:0}];let F=2;if(0<C)for(f=0;f<C;f++)q.push({maxCol:Math.ceil(w/F/u)-1,maxRow:Math.ceil(x/F/v)-1,minCol:0,minRow:0}),F*=2;a=new R({width:w,height:x,pixelType:d,
bandCount:g,extent:e,nativeExtent:X,transform:y,spatialReference:b,pixelSize:p,keyProperties:Y,statistics:W,histograms:h,multidimensionalInfo:a.mdInfo,colormap:E,storageInfo:new S({blockWidth:u,blockHeight:v,pyramidBlockWidth:u,pyramidBlockHeight:v,origin:c,tileInfo:k,firstPyramidLevel:V,maximumPyramidLevel:C,blockBoundary:q})});return{storageInfo:D,rasterInfo:a}};l._parseTransform=function(a){var b,c;if(!I.isTransformSupported(a))throw new A("cloudraster:open","the data contains unsupported geodata transform types");
a=I.readTransform(a);if("identity"===a.type)return null;if(null==(b=a.forwardCoefficients)||!b.length||null==(c=a.inverseCoefficients)||!c.length)throw new A("cloudraster:open","the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");return a};l._fetchAuxiliaryInformation=async function(a){var b=this.request(this.url+"/conf.vat.json",{signal:a}).then(d=>d.data).catch(()=>null);a=this.request(this.url+"/conf.vat.dbf",{responseType:"array-buffer",
signal:a}).then(d=>d.data).catch(()=>null);b=await Promise.all([b,a]);let c;if(b[0]){a=b[0].fields;const d=b[0].values;if(a&&d){a=a.map(h=>({type:"OID"===h.name?"esriFieldTypeOID":n.get(h.type),name:h.name,alias:h.alias||h.name}));const g=d.map(h=>({attributes:h}));a&&d&&(c={fields:a,features:g})}}!c&&b[1]&&(c=U.parse(b[1]).recordSet);return P.fromJSON(c)};l._buildCacheFilePath=function(a,b,c,d){var g=this.storageInfo.packetSize;c=Math.floor(c/g)*g;b="R"+this._toHexString4(Math.floor(b/g)*g)+"C"+
this._toHexString4(c);g="L";g=10<=a?g+a.toString():g+("0"+a.toString());({multidimensionalInfo:a}=this.rasterInfo);const h=null==d?void 0:d[0];if(!L.isSome(a)||!h)return`${this.url}/_alllayers/${g}/${b}.bundle`;d=a.variables.filter(m=>m.name===h.variableName)[0].dimensions[0].values.indexOf(h.values[0]).toString(16);a=4-d.length;for(c=0;c<a;c++)d="0"+d;return`${this.url}/_alllayers/${h.variableName}/${"S"+d}/${g}/${b}.bundle`};l._getIndexRecordFromBundle=function(a,b){const c=this.storageInfo.packetSize;
a=a%c*c+b%c;if(0>a)throw"Invalid level / row / col";return a*this.storageInfo.recordSize+64};l._getTileEndAndContentType=function(a,b){a=a.subarray(b,b+8);b=0;let c;for(c=0;5>c;c++)b|=(a[c]&255)<<8*c;const d=b&0xffffffffff;b=0;for(c=5;8>c;c++)b|=(a[c]&255)<<8*(c-5);return{position:d,recordSize:b&0xffffffffff}};l._toHexString4=function(a){a=a.toString(16);if(4!==a.length){let b=4-a.length;for(;0<b--;)a="0"+a}return a};return B}(T);z.__decorate([G.property({readOnly:!0})],t.prototype,"storageInfo",
void 0);z.__decorate([G.property({type:String,json:{write:!0}})],t.prototype,"datasetFormat",void 0);return t=z.__decorate([M.subclass("esri.layers.support.rasterDatasets.CloudRaster")],t)});