/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import t from"../core/Evented.js";import{h as i}from"./object.js";import{q as e}from"./quickselect.js";import{A as n}from"./ArrayPool.js";import s from"../geometry/Extent.js";import{c as r}from"./aaBoundingRect.js";import{Q as h}from"../rest/support/Query.js";import{T as o}from"./TileKey2.js";import{a}from"./TileInfoView.js";function l(t,i){if(!(this instanceof l))return new l(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function m(t,i,e){if(!e)return i.indexOf(t);for(var n=0;n<i.length;n++)if(e(t,i[n]))return n;return-1}function c(t,i){u(t,0,t.children.length,i,t)}function u(t,i,e,n,s){s||(s=Y(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(var r,h=i;h<e;h++)r=t.children[h],d(s,t.leaf?n(r):r);return s}function d(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function f(t,i){return t.minX-i.minX}function x(t,i){return t.minY-i.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function g(t){return t.maxX-t.minX+(t.maxY-t.minY)}function _(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function X(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function Y(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function v(t,i,n,s,r){for(var h,o=[i,n];o.length;)(n=o.pop())-(i=o.pop())<=s||(h=i+Math.ceil((n-i)/s/2)*s,e(t,h,i,n,r),o.push(i,h,h,n))}l.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,e=[],n=this.toBBox;if(!X(t,i))return e;for(var s,r,h,o,a=[];i;){for(s=0,r=i.children.length;s<r;s++)h=i.children[s],X(t,o=i.leaf?n(h):h)&&(i.leaf?e.push(h):_(t,o)?this._all(h,e):a.push(h));i=a.pop()}return e},collides:function(t){var i=this.data,e=this.toBBox;if(!X(t,i))return!1;for(var n,s,r,h,o=[];i;){for(n=0,s=i.children.length;n<s;n++)if(r=i.children[n],X(t,h=i.leaf?e(r):r)){if(i.leaf||_(t,h))return!0;o.push(r)}i=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,e=t.length;i<e;i++)this.insert(t[i]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var s=this.data;this.data=n,n=s}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=Y([]),this},remove:function(t,i){if(!t)return this;for(var e,n,s,r,h=this.data,o=this.toBBox(t),a=[],l=[];h||a.length;){if(h||(h=a.pop(),n=a[a.length-1],e=l.pop(),r=!0),h.leaf&&-1!==(s=m(t,h.children,i)))return h.children.splice(s,1),a.push(h),this._condense(a),this;r||h.leaf||!_(h,o)?n?(e++,h=n.children[e],r=!1):h=null:(a.push(h),l.push(e),e=0,n=h,h=h.children[0])}return this},toBBox:function(t){return t},compareMinX:f,compareMinY:x,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var e=[];t;)t.leaf?i.push.apply(i,t.children):e.push.apply(e,t.children),t=e.pop();return i},_build:function(t,i,e,n){var s,r=e-i+1,h=this._maxEntries;if(r<=h)return c(s=Y(t.slice(i,e+1)),this.toBBox),s;n||(n=Math.ceil(Math.log(r)/Math.log(h)),h=Math.ceil(r/Math.pow(h,n-1))),(s=Y([])).leaf=!1,s.height=n;var o,a,l,m,u=Math.ceil(r/h),d=u*Math.ceil(Math.sqrt(h));for(v(t,i,e,d,this.compareMinX),o=i;o<=e;o+=d)for(v(t,o,l=Math.min(o+d-1,e),u,this.compareMinY),a=o;a<=l;a+=u)m=Math.min(a+u-1,l),s.children.push(this._build(t,a,m,n-1));return c(s,this.toBBox),s},_chooseSubtree:function(t,i,e,n){for(var s,r,h,o,a,l,m,c,u,d;n.push(i),!i.leaf&&n.length-1!==e;){for(m=c=1/0,s=0,r=i.children.length;s<r;s++)a=p(h=i.children[s]),u=t,d=h,(l=(Math.max(d.maxX,u.maxX)-Math.min(d.minX,u.minX))*(Math.max(d.maxY,u.maxY)-Math.min(d.minY,u.minY))-a)<c?(c=l,m=a<m?a:m,o=h):l===c&&a<m&&(m=a,o=h);i=o||i.children[0]}return i},_insert:function(t,i,e){var n=this.toBBox,s=e?t:n(t),r=[],h=this._chooseSubtree(s,this.data,i,r);for(h.children.push(t),d(h,s);i>=0&&r[i].children.length>this._maxEntries;)this._split(r,i),i--;this._adjustParentBBoxes(s,r,i)},_split:function(t,i){var e=t[i],n=e.children.length,s=this._minEntries;this._chooseSplitAxis(e,s,n);var r=this._chooseSplitIndex(e,s,n),h=Y(e.children.splice(r,e.children.length-r));h.height=e.height,h.leaf=e.leaf,c(e,this.toBBox),c(h,this.toBBox),i?t[i-1].children.push(h):this._splitRoot(e,h)},_splitRoot:function(t,i){this.data=Y([t,i]),this.data.height=t.height+1,this.data.leaf=!1,c(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,e){var n,s,r,h,o,a,l,m,c,d,f,x,g,_;for(a=l=1/0,n=i;n<=e-i;n++)c=s=u(t,0,n,this.toBBox),d=r=u(t,n,e,this.toBBox),f=Math.max(c.minX,d.minX),x=Math.max(c.minY,d.minY),g=Math.min(c.maxX,d.maxX),_=Math.min(c.maxY,d.maxY),h=Math.max(0,g-f)*Math.max(0,_-x),o=p(s)+p(r),h<a?(a=h,m=n,l=o<l?o:l):h===a&&o<l&&(l=o,m=n);return m},_chooseSplitAxis:function(t,i,e){var n=t.leaf?this.compareMinX:f,s=t.leaf?this.compareMinY:x;this._allDistMargin(t,i,e,n)<this._allDistMargin(t,i,e,s)&&t.children.sort(n)},_allDistMargin:function(t,i,e,n){t.children.sort(n);var s,r,h=this.toBBox,o=u(t,0,i,h),a=u(t,e-i,e,h),l=g(o)+g(a);for(s=i;s<e-i;s++)r=t.children[s],d(o,t.leaf?h(r):r),l+=g(o);for(s=e-i-1;s>=i;s--)r=t.children[s],d(a,t.leaf?h(r):r),l+=g(a);return l},_adjustParentBBoxes:function(t,i,e){for(var n=e;n>=0;n--)d(i[n],t)},_condense:function(t){for(var i,e=t.length-1;e>=0;e--)0===t[e].children.length?e>0?(i=t[e-1].children).splice(i.indexOf(t[e]),1):this.clear():c(t[e],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};class M{constructor(t,i){this.key=new o(0,0,0,0),this.bounds=r(),this.objectIds=new Set,this.key.set(i);const e=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=e.resolution,this.scale=e.scale,this.level=e.level}get id(){return this.key.id}get extent(){return s.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createChildTiles(){const t=this.key.getChildKeys(),i=n.acquire();for(let e=0;e<t.length;e++)i[e]=new M(this.tileInfoView,t[e]);return i}getQuantizationParameters(){return h.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}const B={added:[],removed:[]},b=new Set,w=new o(0,0,0,0);class y extends t{constructor(t){super(),this._tiles=new Map,this._index=l(9,i("esri-csp-restrictions")?t=>({minX:t.bounds[0],minY:t.bounds[1],maxX:t.bounds[2],maxY:t.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this.tiles=[],this.tileScheme=t}destroy(){this.clear()}clear(){this.tiles.length=0,this._tiles.clear(),this._index.clear()}has(t){return this._tiles.has(t)}get(t){return this._tiles.get(t)}boundsIntersections(t){return this._index.search({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]})}updateTiles(t){const i={added:[],removed:[]};for(const e of t.added)if(!this.has(e)){const t=new M(this.tileScheme,e);this._tiles.set(e,t),this._index.insert(t),i.added.push(t)}for(const e of t.removed)if(this.has(e)){const t=this.get(e);this._tiles.delete(e),this._index.remove(t),i.removed.push(t)}this.tiles.length=0,this._tiles.forEach((t=>this.tiles.push(t))),(i.added.length||i.removed.length)&&this.emit("update",i)}setViewState(t){const i=this.tileScheme.getTileCoverage(t,0);if(!i)return;const{spans:e,lodInfo:n}=i,{level:s}=n;if(e.length>0)for(const{row:t,colFrom:i,colTo:r}of e)for(let e=i;e<=r;e++){const i=w.set(s,t,n.normalizeCol(e),n.getWorldForColumn(e)).id;if(b.add(i),!this.has(i)){const t=new M(this.tileScheme,i);this._tiles.set(i,t),this._index.insert(t),this.tiles.push(t),B.added.push(t)}}for(let t=this.tiles.length-1;t>=0;t--){const i=this.tiles[t];b.has(i.id)||(this._tiles.delete(i.id),this.tiles.splice(t,1),this._index.remove(i),B.removed.push(i))}(B.added.length||B.removed.length)&&this.emit("update",B),a.pool.release(i),b.clear(),B.added.length=0,B.removed.length=0}}export{y as T,l as r};
