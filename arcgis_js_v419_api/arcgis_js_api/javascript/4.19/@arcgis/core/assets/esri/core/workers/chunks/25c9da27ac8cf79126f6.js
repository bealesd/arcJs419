self.webpackChunkRemoteClient([16],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=new(n(43).a)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c}));const i=[252,146,31,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},c={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0),r=n(12),s=n(286);class a{constructor(e=9,t){this.compareMinX=c,this.compareMinY=d,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),_.prune(),x.prune(),I.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const i=this.toBBox;if(y(e,n))for(b.clear();n;){for(let r=0,s=n.children.length;r<s;r++){const s=n.children[r],a=n.leaf?i(s):s;y(e,a)&&(n.leaf?t(s):p(e,a)?this._all(s,t):b.push(s))}n=b.pop()}}collides(e){let t=this.data;const n=this.toBBox;if(!y(e,t))return!1;for(b.clear();t;){for(let i=0,r=t.children.length;i<r;i++){const r=t.children[i],s=t.leaf?n(r):r;if(y(e,s)){if(t.leaf||p(e,s))return!0;b.push(r)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new S([]),this}remove(e){if(!e)return this;let t,n=this.data,s=null,a=0,o=!1;const l=this.toBBox(e);for(x.clear(),I.clear();n||x.length>0;){var u;if(n||(n=Object(i.b)(x.pop()),s=x.data[x.length-1],a=null!=(u=I.pop())?u:0,o=!0),n.leaf&&(t=Object(r.h)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),x.push(n),this._condense(x),this;o||n.leaf||!p(n,l)?s?(a++,n=s.children[a],o=!1):n=null:(x.push(n),I.push(a),a=0,s=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(_.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else _.pushArray(n.children);n=null!=(i=_.pop())?i:null}}_build(e,t,n,i){const r=n-t+1;let s=this._maxEntries;if(r<=s){const i=new S(e.slice(t,n+1));return o(i,this.toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(s)),s=Math.ceil(r/s**(i-1)));const a=new w([]);a.height=i;const l=Math.ceil(r/s),u=l*Math.ceil(Math.sqrt(s));g(e,t,n,u,this.compareMinX);for(let r=t;r<=n;r+=u){const t=Math.min(r+u-1,n);g(e,r,t,l,this.compareMinY);for(let n=r;n<=t;n+=l){const r=Math.min(n+l-1,t);a.children.push(this._build(e,n,r,i-1))}}return o(a,this.toBBox),a}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,a=1/0;for(let o=0,l=t.children.length;o<l;o++){const l=t.children[o],u=h(l),c=(r=e,s=l,(Math.max(s.maxX,r.maxX)-Math.min(s.minX,r.minX))*(Math.max(s.maxY,r.maxY)-Math.min(s.minY,r.minY))-u);c<a?(a=c,i=u<i?u:i,n=l):c===a&&u<i&&(i=u,n=l)}t=n||t.children[0]}var r,s;return t}_insert(e,t,n){const i=this.toBBox,r=n?e:i(e);x.clear();const s=this._chooseSubtree(r,this.data,t,x);for(s.children.push(e),u(s,r);t>=0&&x.data[t].children.length>this._maxEntries;)this._split(x,t),t--;this._adjustParentBBoxes(r,x,t)}_split(e,t){const n=e.data[t],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);const s=this._chooseSplitIndex(n,r,i);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(s,n.children.length-s),l=n.leaf?new S(a):new w(a);l.height=n.height,o(n,this.toBBox),o(l,this.toBBox),t?e.data[t-1].children.push(l):this._splitRoot(n,l)}_splitRoot(e,t){this.data=new w([e,t]),this.data.height=e.height+1,o(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let i,r,s;i=r=1/0;for(let a=t;a<=n-t;a++){const t=l(e,0,a,this.toBBox),o=l(e,a,n,this.toBBox),u=m(t,o),c=h(t)+h(o);u<i?(i=u,s=a,r=c<r?c:r):u===i&&c<r&&(r=c,s=a)}return s}_chooseSplitAxis(e,t,n){const i=e.leaf?this.compareMinX:c,r=e.leaf?this.compareMinY:d;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,r)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const r=this.toBBox,s=l(e,0,t,r),a=l(e,n-t,n,r);let o=f(s)+f(a);for(let i=t;i<n-t;i++){const t=e.children[i];u(s,e.leaf?r(t):t),o+=f(s)}for(let i=n-t-1;i>=t;i--){const t=e.children[i];u(a,e.leaf?r(t):t),o+=f(a)}return o}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)u(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],s=i.children;s.splice(Object(r.h)(s,n,s.length,i.indexHint),1)}else this.clear();else o(n,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function o(e,t){l(e,0,e.children.length,t,e)}function l(e,t,n,i,r){r||(r=new S([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s,a=t;a<n;a++)s=e.children[a],u(r,e.leaf?i(s):s);return r}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function d(e,t){return e.minY-t.minY}function h(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),r=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,r-n)*Math.max(0,s-i)}function p(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function y(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function g(e,t,n,r,a){const o=[t,n];for(;o.length;){const t=Object(i.b)(o.pop()),n=Object(i.b)(o.pop());if(t-n<=r)continue;const l=n+Math.ceil((t-n)/r/2)*r;Object(s.a)(e,l,n,t,a),o.push(n,l,l,t)}}const b=new r.a,_=new r.a,x=new r.a,I=new r.a({deallocator:void 0});class v extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new r.j}}class S extends v{constructor(e){super(),this.children=e,this.leaf=!0}}class w extends v{constructor(e){super(),this.children=e,this.leaf=!1}}},334:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(199),r=n(272);const s={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new i.b(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(r.a)(new i.c,e.geometry,t.hasZ,t.hasM)),e.centroid)}},343:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}));var i=n(1),r=n(219);function s(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?r.d:"esriGeometryPolyline"===e?r.a:r.b}}}function a(e,t){if(Object(i.i)("csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[t]:null,...e})}}function o(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(i.b)(e)}}]}},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var i=n(1),r=n(0),s=n(8),a=n(68),o=n(183),l=n(196),u=n(252),c=n(313),d=n(334);const h={minX:0,minY:0,maxX:0,maxY:0};class f{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new c.a(9,Object(i.i)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((n,i)=>{e[t++]=i}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,n){h.minX=t[0],h.minY=t[1],h.maxX=t[2],h.maxY=t[3],e.search(h,n)}(this._index,e,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}class m{constructor(e){this.geometryInfo=e,this._boundsStore=new f,this._featuresById=new Map,this._markedIds=new Set,this.events=new a.a,this.featureAdapter=d.a}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(o.c)(o.a);return this._featuresById.forEach(t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(Object(u.a)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.a("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let i;if(this._markedIds.add(t),n?(e.displayId=n.displayId,i=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(r.h)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);i=Object(l.f)(i||Object(o.c)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,i),this._featuresById.set(t,e)}_remove(e){return Object(r.h)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m}));var i=n(46),r=n(89);class s{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function o(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function u(e){return new l(e)}const c=new Set;function d(e,t,n,i,s=!1,a){c.clear();for(const t in i){const l=e.get(t);if(!l)continue;const u=i[t],d=h(l,u);if(d!==u&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:l,originalValue:u,sanitizedValue:d}}),c.add(l.name),l&&(s||l.editable)){const e=Object(r.n)(l,d);if(e)return o(Object(r.o)(e,l,d));n[l.name]=d}}for(const e of t)if(!c.has(e.name))return o(`missing required field "${e.name}"`);return null}function h(e,t){let n=t;return"string"==typeof t&&Object(r.k)(e)?n=parseFloat(t):null!=t&&Object(r.l)(e)&&"string"!=typeof t&&(n=String(t)),Object(r.m)(n)}let f;function m(e,t){if(!e||!Object(i.l)(t))return e;if("rings"in e||"paths"in e){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function p(e,t){!Object(i.l)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return f||(f=await Promise.all([n.e(7),n.e(13)]).then(n.bind(null,372)).then((function(e){return e.g})),f)}()}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(7),r=n(43);function s(e,t={ignoreUnknown:!0}){const n=e instanceof r.a?e:new r.a(e,t),s={type:null!=t&&t.ignoreUnknown?n.apiValues:String,readOnly:null==t?void 0:t.readOnly,json:{type:n.jsonValues,read:(null==t||!t.readOnly)&&{reader:n.read},write:{writer:n.write}}};return void 0!==(null==t?void 0:t.default)&&(s.json.default=t.default),Object(i.d)(s)}},71:function(e,t,n){"use strict";var i=n(11),r=(n(17),n(1),n(19),n(4),n(6),n(0),n(9),n(3),n(7)),s=(n(15),n(16),n(12),n(2),n(10),n(8),n(5),n(13)),a=n(42),o=(n(14),n(43)),l=n(47);n(21);const u=new o.a({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends a.b{constructor(e){super(e),this.name=null,this.type=null}};Object(i.a)([Object(r.d)({type:String,json:{write:!0}})],c.prototype,"name",void 0),Object(i.a)([Object(l.a)(u)],c.prototype,"type",void 0),c=Object(i.a)([Object(s.g)("esri.layers.support.Domain")],c);var d=c;t.a=d},78:function(e,t,n){"use strict";var i,r=n(11),s=(n(17),n(1)),a=(n(19),n(4),n(6),n(0),n(9),n(3),n(7)),o=(n(15),n(16),n(12),n(2),n(10),n(8),n(5),n(13)),l=n(42),u=(n(14),n(43),n(47)),c=(n(21),n(71));let d=i=class extends l.b{constructor(e){super(e),this.name=null,this.code=null}clone(){return new i({name:this.name,code:this.code})}};Object(r.a)([Object(a.d)({type:String,json:{write:!0}})],d.prototype,"name",void 0),Object(r.a)([Object(a.d)({type:[String,Number],json:{write:!0}})],d.prototype,"code",void 0),d=i=Object(r.a)([Object(o.g)("esri.layers.support.CodedValue")],d);var h,f=d;let m=h=class extends c.a{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some(e=>(String(e.code)===n&&(t=e.name),!!t))}return t}clone(){return new h({codedValues:Object(s.b)(this.codedValues),name:this.name})}};Object(r.a)([Object(a.d)({type:[f],json:{write:!0}})],m.prototype,"codedValues",void 0),Object(r.a)([Object(u.a)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=h=Object(r.a)([Object(o.g)("esri.layers.support.CodedValueDomain")],m);var p=m;t.a=p},79:function(e,t,n){"use strict";var i,r=n(11),s=(n(17),n(1),n(19),n(4),n(6),n(0),n(9),n(3),n(7),n(15),n(16),n(12),n(2),n(10),n(8),n(5),n(13)),a=(n(42),n(14),n(43),n(47)),o=(n(21),n(71));let l=i=class extends o.a{constructor(e){super(e),this.type="inherited"}clone(){return new i}};Object(r.a)([Object(a.a)({inherited:"inherited"})],l.prototype,"type",void 0),l=i=Object(r.a)([Object(s.g)("esri.layers.support.InheritedDomain")],l);var u=l;t.a=u},80:function(e,t,n){"use strict";var i,r=n(11),s=(n(17),n(1),n(19),n(4),n(6),n(0),n(9),n(3),n(7)),a=(n(15),n(16),n(12),n(2),n(10),n(8),n(5),n(13)),o=(n(42),n(14),n(43),n(47)),l=(n(21),n(71));let u=i=class extends l.a{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new i({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};Object(r.a)([Object(s.d)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],u.prototype,"maxValue",void 0),Object(r.a)([Object(s.d)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],u.prototype,"minValue",void 0),Object(r.a)([Object(o.a)({range:"range"})],u.prototype,"type",void 0),u=i=Object(r.a)([Object(a.g)("esri.layers.support.RangeDomain")],u);var c=u;t.a=c},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u}));n(1);var i,r,s=n(78),a=n(71),o=n(79),l=n(80);function u(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,r="range"in e?e.range[1]:e.maxValue;if(+t<n||+t>r)return i.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(e=>null==e||e.code!==t))return i.INVALID_CODED_VALUE}return null}(r=i||(i={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",r.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";const c={key:"type",base:a.a,typeMap:{range:l.a,"coded-value":s.a,inherited:o.a}};function d(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}function h(e){if(!e||!e.type)return null;switch(e.type){case"range":return l.a.fromJSON(e);case"codedValue":return s.a.fromJSON(e);case"inherited":return o.a.fromJSON(e)}return null}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return x})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return T})),n.d(t,"l",(function(){return V})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return A})),n.d(t,"o",(function(){return G}));n(11),n(17),n(1),n(19);var i=n(4),r=(n(6),n(0),n(9),n(3),n(7),n(15),n(16),n(12),n(2),n(10),n(8),n(5),n(13),n(42),n(14),n(48),n(43),n(47),n(45),n(44),n(21),n(46),n(51),n(52),n(49),n(54),n(50),n(65),n(63),n(62),n(60),n(61),n(67),n(59),n(64),n(78),n(71),n(79),n(80),n(82)),s=n(95);const a=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],o=["field","normalizationField"];function l(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(u(a,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)u(o,e,t)}function u(e,t,n){if(e)for(const r of e){const e=Object(i.b)(r,t),s=e&&"function"!=typeof e&&p(n,e);s&&Object(i.c)(r,s.name,t)}}function c(e,t){if(null!=e&&null!=t)if("startField"in e){const n=p(t,e.startField),i=p(t,e.endField);e.startField=n&&n.name||null,e.endField=i&&i.name||null}else{const n=p(t,e.startTimeField),i=p(t,e.endTimeField);e.startTimeField=n&&n.name||null,e.endTimeField=i&&i.name||null}}const d=new Set;function h(e,t){return e&&t?(d.clear(),f(d,e,t),Array.from(d).sort()):[]}function f(e,t,n){if(n)if(t&&t.length)if(n.includes("*"))for(const{name:n}of t)e.add(n);else for(const i of n)m(e,t,i);else{if(n.includes("*"))return e.clear(),void e.add("*");for(const t of n)e.add(t)}}function m(e,t,n){if(t&&t.length){const i=p(t,n);i&&e.add(i.name)}else"string"==typeof n&&e.add(n)}function p(e,t){if("string"!=typeof t)return null;if(null!=e){t=t.toLowerCase();for(const n of e)if(n&&n.name.toLowerCase()===t)return n}return null}function y(e,t){if(!e||!t||"string"!=typeof t)return!1;t=t.toLowerCase();for(const n of e)if(n&&n.name.toLowerCase()===t)return!0;return!1}async function g(e,t,n){if(!n)return;const{arcadeUtils:i}=await Object(s.e)(),r=i.extractFieldNames(n);for(const n of r)m(e,t,n)}function b({displayField:e,fields:t}){return e||(t&&t.length?_(t,"name-or-title")||_(t,"unique-identifier")||_(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function _(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name;return null}function x(e){const t=e.defaultValue;return void 0!==t&&j(e,t)?t:e.nullable?null:void 0}function I(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function v(e){return null===e||I(e)}const S="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function w(e){return null===e||S(e)}function F(e){return null!=e&&"string"==typeof e}function O(e){return null===e||F(e)}function B(){return!0}function j(e,t){let n;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?w:S;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?v:I;break;case"string":case"esriFieldTypeString":n=e.nullable?O:F;break;default:n=B}return 1===arguments.length?n:n(t)}const M=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function T(e){return null!=e&&M.has(e.type)}function V(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var X,Y;function L(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function A(e,t){return e.nullable&&null===t?null:T(e)&&!function(e,t){const n="string"==typeof e?E(e):e;return!!n&&(n.isInteger?S(t)&&t>=n.min&&t<=n.max:t>=n.min&&t<=n.max)}(e.type,Number(t))?X.OUT_OF_RANGE:j(e,t)?e.domain?Object(r.e)(e.domain,t):null:Y.INVALID_TYPE}function E(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return N;case"esriFieldTypeInteger":case"integer":return D;case"esriFieldTypeSingle":case"single":return $;case"esriFieldTypeDouble":case"double":return C}}(X||(X={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(Y||(Y={}));const N={min:-32768,max:32767,isInteger:!0},D={min:-2147483648,max:2147483647,isInteger:!0},$={min:-34e37,max:12e37,isInteger:!1},C={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function G(e,t,n){switch(e){case r.a.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case r.a.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case Y.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case X.OUT_OF_RANGE:{const{min:e,max:i}=E(t.type);return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${i}`}}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return a}));var i=n(0),r=n(46);n(64);let s;async function a(){return s||(s=(async()=>{const e=await n.e(63).then(n.bind(null,300)).then((function(e){return e.aq}));return await e.arcade.load(),{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),s}const o=(e,t,n)=>c.create(e,t,n,null,["$feature"]),l=(e,t,n)=>c.create(e,t,n,null,["$feature","$view"]),u=(e,t,n,i)=>c.create(e,t,n,i,["$feature","$view"]);class c{constructor(e,t,n,i,r,s,a,o){this.script=e,this.evaluate=r,this.fields=a,this._syntaxTree=i,this._arcade=t,this._arcadeDictionary=n,this._arcadeFeature=s,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,s,o,l){const{arcade:u,Feature:d,Dictionary:h}=await a(),f=r.f.fromJSON(t),m=u.parseScript(e,l),p=o.reduce((e,t)=>({...e,[t]:null}),{});let y=null;Object(i.h)(s)&&(y=new h(s),y.immutable=!0,p.$config=null);const g=u.scriptUsesGeometryEngine(m)&&u.enableGeometrySupport(),b=u.scriptUsesFeatureSet(m)&&u.enableFeatureSetSupport(),_=u.scriptIsAsync(m)&&u.enableAsyncSupport(),x={vars:p,spatialReference:f,useAsync:!!_},I=new h;I.immutable=!1,I.setField("scale",0);const v=u.compileScript(m,x);return await Promise.all([g,b,_]),new c(e,u,h,m,e=>("$view"in e&&e.$view&&(I.setField("scale",e.$view.scale),e.$view=I),y&&(e.$config=y),v({vars:e,spatialReference:f})),new d,n,f)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)}}}});