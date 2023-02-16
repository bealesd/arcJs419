/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{d as e,u as i,v as t,w as s,N as r}from"./mathUtils.js";import{c as l}from"./aaBoundingRect.js";import n from"../core/Error.js";import{i as o,a,u as h}from"./maybe.js";import{e as c}from"./unitUtils.js";import m from"../geometry/Extent.js";import{canProjectToWGS84ComparableLonLat as u}from"../geometry/projection.js";import p,{f as g,h as f}from"../geometry/SpatialReference.js";import{x2lon as x,y2lat as v}from"../geometry/support/webMercatorUtils.js";import M from"../layers/support/TileInfo.js";class d{constructor(e){const i=d.checkUnsupported(e);if(o(i))throw i;const t=h(e);this.spatialReference=t.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=u(this.spatialReference)||g(this.spatialReference)||f(this.spatialReference),this.origin=[t.origin.x,t.origin.y],this.pixelSize=t.size[0],this.dpi=t.dpi;const s=t.lods.reduce(((e,i,t)=>(i.level<e.min&&(e.min=i.level,e.minIndex=t),e.max=Math.max(e.max,i.level),e)),{min:1/0,minIndex:0,max:-1/0}),r=t.lods[s.minIndex],l=2**r.level;let n=r.resolution*l,a=r.scale*l;this.levels=new Array(s.max+1);for(let e=0;e<this.levels.length;e++)this.levels[e]={resolution:n,scale:a,tileSize:[n*t.size[0],n*t.size[1]]},n/=2,a/=2}clone(){return new d(this.toTileInfo())}toTileInfo(){return new M({dpi:this.dpi,origin:{x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference},size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map(((e,i)=>({level:i,scale:e.scale,resolution:e.resolution})))})}getExtent(e,i,t,s){const r=this.levels[e],l=r.tileSize[0],n=r.tileSize[1];s[0]=this.origin[0]+t*l,s[2]=this.origin[0]+(t+1)*l,s[3]=this.origin[1]-i*n,s[1]=this.origin[1]-(i+1)*n}convertExtentToRadians(i,t){this._isWebMercator?(t[0]=x(i[0]),t[1]=v(i[1]),t[2]=x(i[2]),t[3]=v(i[3])):this._isGCS&&(t[0]=e(i[0]),t[1]=e(i[1]),t[2]=e(i[2]),t[3]=e(i[3]))}getExtentGeometry(e,i,t,s=new m){return this.getExtent(e,i,t,S),s.spatialReference=this.spatialReference,s.xmin=S[0],s.ymin=S[1],s.xmax=S[2],s.ymax=S[3],s.zmin=void 0,s.zmax=void 0,s}ensureMaxLod(e){if(null==e)return!1;let i=!1;for(;this.levels.length<=e;){const e=this.levels[this.levels.length-1],t=e.resolution/2;this.levels.push({resolution:t,scale:e.scale/2,tileSize:[t*this.pixelSize,t*this.pixelSize]}),i=!0}return i}capMaxLod(e){this.levels.length>e+1&&(this.levels.length=e+1)}getMaxLod(){return this.levels.length-1}scaleAtLevel(e){return this.levels[0].scale/2**e}levelAtScale(e){const i=this.levels[0].scale;return e>=i?0:Math.log(i/e)*Math.LOG2E}resolutionAtLevel(e){return this.levels[0].resolution/2**e}compatibleWith(e){if(!(e instanceof d)){if(d.checkUnsupported(e))return!1;e=new d(e)}if(!e.spatialReference.equals(this.spatialReference))return!1;if(e.pixelSize!==this.pixelSize)return!1;const t=Math.min(this.levels.length,e.levels.length)-1,s=this.levels[t].resolution;let r=.5*s;return!(!i(e.origin[0],this.origin[0],r)||!i(e.origin[1],this.origin[1],r))&&(r=.5*s/2**t/this.pixelSize*12,i(s,e.levels[t].resolution,r))}rootTilesInExtent(e,i=null,t=1/0){const s=new Array,r=this.levels[0].tileSize;if(a(e)||0===r[0]||0===r[1])return s;d.computeRowColExtent(e,r,this.origin,S);let l=S[1],n=S[3],h=S[0],c=S[2];const m=c-h,u=n-l;if(m*u>t){const e=Math.floor(Math.sqrt(t));u>e&&(l=l+Math.floor(.5*u)-Math.floor(.5*e),n=l+e),m>e&&(h=h+Math.floor(.5*m)-Math.floor(.5*e),c=h+e)}for(let e=l;e<n;e++)for(let i=h;i<c;i++)s.push([0,e,i]);return o(i)&&(i[0]=this.origin[0]+h*r[0],i[1]=this.origin[1]-n*r[1],i[2]=this.origin[0]+c*r[0],i[3]=this.origin[1]-l*r[1]),s}static computeRowColExtent(e,i,t,s){const r=.001*(e[2]-e[0]+(e[3]-e[1]));s[0]=Math.max(0,Math.floor((e[0]+r-t[0])/i[0])),s[2]=Math.max(0,Math.ceil((e[2]-r-t[0])/i[0])),s[1]=Math.max(0,Math.floor((t[1]-e[3]+r)/i[1])),s[3]=Math.max(0,Math.ceil((t[1]-e[1]-r)/i[1]))}static isPowerOfTwo(e){const i=e.lods,s=i[0].resolution*2**i[0].level;return!i.some((e=>!t(e.resolution,s/2**e.level)))}static hasGapInLevels(e){const i=e.lods.map((e=>e.level));i.sort(((e,i)=>e-i));for(let e=1;e<i.length;e++)if(i[e]!==i[0]+e)return!0;return!1}static tileSizeSupported(e){const i=e.size[1];return i===e.size[0]&&0==(i&i-1)&&i>=128&&i<=512}static hasOriginPerLODs(e){const i=e.origin;return e.lods.some((e=>null!=e.origin&&(e.origin[0]!==i.x||e.origin[1]!==i.y)))}static getMissingTileInfoError(){return new n("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}static checkUnsupported(e){return a(e)?w():e.lods.length<1?new n("tilingscheme:generic","Tiling scheme must have at least one level"):d.isPowerOfTwo(e)?d.hasGapInLevels(e)?new n("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):d.tileSizeSupported(e)?d.hasOriginPerLODs(e)?new n("tilingscheme:multiple-origin","Tiling scheme levels must not have their own origin"):null:new n("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new n("tilingscheme:power-of-two","Tiling scheme must be power of two")}static fromExtent(e,i){const t=e[2]-e[0],s=e[3]-e[1],r=c(i),l=1.2*Math.max(t,s),n=256,o=new d(new M({size:[n,n],origin:{x:e[0]-.5*(l-t),y:e[3]+.5*(l-s)},lods:[{level:0,resolution:l/n,scale:1/(n/96*.0254/(l*r))}],spatialReference:i}));return o.ensureMaxLod(20),o}static makeWebMercatorAuxiliarySphere(e){const i=new d(d.WebMercatorAuxiliarySphereTileInfo);return i.ensureMaxLod(e),i}static makeGCSWithTileSize(e,i=256,t=16){const s=256/i,r=new d(new M({size:[i,i],origin:{x:-180,y:90,spatialReference:e},spatialReference:e,lods:[{level:0,resolution:.703125*s,scale:295497598.570834*s}]}));return r.ensureMaxLod(t),r}get test(){return{isWebMercator:this._isWebMercator,isGCS:this._isGCS}}}function w(){return new n("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}d.WebMercatorAuxiliarySphereTileInfo=new M({size:[256,256],origin:{x:-20037508.342787,y:20037508.342787,spatialReference:p.WebMercator},spatialReference:p.WebMercator,lods:[{level:0,resolution:156543.03392800014,scale:591657527.591555}]}),d.WebMercatorAuxiliarySphere=d.makeWebMercatorAuxiliarySphere(19);const S=l(),z=64,y=512,R=2.5,b=s(r/10),T=4,W=l();d.WebMercatorAuxiliarySphere.getExtent(0,0,0,W);const E=l([-180,-90,180,90]),L="Cannot extend surface to encompass all layers because it would result in too many root tiles.",I="Surface extent is too large for tile resolution at level 0.",j=e=>e<4?3:4;export{b as E,E as G,z as M,T as P,d as T,W,y as a,j as b,L as c,I as d,R as e,w as g};