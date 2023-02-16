/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as t,b as e}from"./Logger.js";import{P as s}from"../core/scheduling.js";class n{constructor(){this._queue=new s,this._last=null,this.remove=()=>{}}get done(){return 0===this._queue.length&&(!this._last||this._last.isLeaf)}resetOne(t){this._queue.clear(),this._queue.push(t),this._last=null}reset(e=null){this._queue.clear(),t(e)&&this._queue.pushArray(e),this._last=null}skipSubtree(){this._last=null}next(){return this._last&&!this._last.isLeaf&&this._queue.pushArray(this._last.children),this._last=this._queue.pop(),this._last}}class r{constructor(){this.q=new s}get done(){return 0===this.q.length}reset(t){if(this.q.clear(),t){this.q.pushArray(t);for(let t=0;t<this.q.length;++t){const e=this.q.data[t];e.isLeaf||this.q.pushArray(e.children)}}}next(){return this.q.pop()}}function i(t){return t?t.lij.toString():"null"}function l(t,e){if(Array.isArray(t))for(let s=0;s<t.length;s++)a(t[s],e);else a(t,e)}function a(t,e){if(e(t),!t.isLeaf)for(const s of t.children)a(s,e)}function u(t,s,n){if(e(s))return!1;const r=s.fullExtent,i=t.extent;if(n){if(i[0]<r.xmin||i[1]<r.ymin||i[2]>r.xmax||i[3]>r.ymax)return!1}else if(r.xmin>i[2]||r.ymin>i[3]||r.xmax<i[0]||r.ymax<i[1])return!1;const l=t.surface.tilingScheme.levels[t.lij[0]].scale;return!(s.minScale>0&&l>1.00000001*s.minScale)&&!(s.maxScale>0&&l<.99999999*s.maxScale)}function o(t,e){e.sort(((e,s)=>h(e,s,t)))}function h(t,e,s){const n=t.screenDepth,r=e.screenDepth;return n<r?-s:n>r?s:0}function c(t,e){const s=new Map;t.forAll((t=>s.set(t,t.distanceToSquared(e)))),t.sort(((t,e)=>s.get(t)-s.get(e)))}function f(t,e,s){let n=1,r=0,i=0;for(;t!==e;)if(n*=.5,r*=.5,i*=.5,1&t.lij[2]&&(r+=.5),0==(1&t.lij[1])&&(i+=.5),null==(t=t.parent))throw new Error("tile was not a descendant of upsampleTile");s.init(e,r,i,n)}function p(t){for(let e=0;e<t.length;e++){const s=t[e],n=s.parent;if(n)for(let t=0;t<4;t++){const e=n.children[t];if(e&&e!==s&&e.loadable)return!0}}return!1}function m(t,e){if(!t||!e||t[0]===e[0])return!1;const s=t[0]<e[0],n=s?t:e,r=s?e:t,i=1<<r[0]-n[0];return Math.floor(r[1]/i)===n[1]&&Math.floor(r[2]/i)===n[2]}export{n as I,l as a,h as b,f as c,r as d,c as e,u as f,m as g,p as h,o as s,i as t};
