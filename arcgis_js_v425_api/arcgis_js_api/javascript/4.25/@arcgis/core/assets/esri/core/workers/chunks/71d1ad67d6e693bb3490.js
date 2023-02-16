"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6733],{48027:(e,t,n)=>{n.d(t,{Z:()=>f});var r,i,l=n(54174),a=n(82426),o=n(71252),s=n(91306);function u(e){return(0,a.c)((0,s.n)(e),0,255)}function c(e,t,n){return e=Number(e),isNaN(e)?n:e<t?t:e>n?n:e}n(72836),n(29794),n(71552),n(76506),n(92143),n(31450),n(40642);class d{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,n,r=new d){return r.r=Math.round(e.r+(t.r-e.r)*n),r.g=Math.round(e.g+(t.g-e.g)*n),r.b=Math.round(e.b+(t.b-e.b)*n),r.a=e.a+(t.a-e.a)*n,r._sanitize()}static fromRgb(e,t){const n=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(n){const e=n[2].split(/\s*,\s*/),r=n[1];if("rgb"===r&&3===e.length||"rgba"===r&&4===e.length){const n=e[0];if("%"===n.charAt(n.length-1)){const n=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(n[3]=parseFloat(e[3])),d.fromArray(n,t)}return d.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===r&&3===e.length||"hsla"===r&&4===e.length)return d.fromArray((0,l.h)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new d){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const n=4===e.length?4:8,r=(1<<n)-1;let i=Number("0x"+e.substr(1));return isNaN(i)?null:(["b","g","r"].forEach((e=>{const l=i&r;i>>=n,t[e]=4===n?17*l:l})),t.a=1,t)}static fromArray(e,t=new d){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const n=(0,l.i)(e)?(0,l.g)(e):null;return n&&d.fromArray(n,t)||d.fromRgb(e,t)||d.fromHex(e,t)}static fromJSON(e){return e&&new d([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,o.i)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,o.i)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?d.fromString(e,this):Array.isArray(e)?d.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof d||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${n.length<2?"0"+n:n}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=d.AlphaMode.ALWAYS){const t=u(this.r),n=u(this.g),r=u(this.b);return e===d.AlphaMode.ALWAYS||1!==this.a?[t,n,r,u(255*this.a)]:[t,n,r]}clone(){return new d(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return(0,o.i)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(c(this.r,0,255)),this.g=Math.round(c(this.g,0,255)),this.b=Math.round(c(this.b,0,255)),this.a=c(this.a,0,1),this}_set(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a=r}}d.prototype.declaredClass="esri.Color",r=d||(d={}),(i=r.AlphaMode||(r.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const f=d},60217:(e,t,n)=>{n.d(t,{A:()=>m,a:()=>d,b:()=>c,c:()=>f,l:()=>u}),n(74569);var r=n(60991),i=n(92143),l=n(71252),a=n(60947);const o=i.L.getLogger("esri.support.arcadeOnDemand");let s;function u(){return s||(s=(async()=>{const e=await Promise.all([n.e(9157),n.e(9900),n.e(4056)]).then(n.bind(n,94056)).then((e=>e.aw));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),s}const c=(e,t,n)=>m.create(e,t,n,null,["$feature"]),d=(e,t,n)=>m.create(e,t,n,null,["$feature","$view"]),f=(e,t,n,r)=>m.create(e,t,n,r,["$feature","$view"]);class m{constructor(e,t,n,r,i,l,a,o){this.script=e,this.evaluate=i;const s=Array.isArray(a)?a:a.fields;this.fields=s,this._syntaxTree=r,this._arcade=t,this._arcadeDictionary=n,this._arcadeFeature=l,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,i,s,c){const{arcade:d,Feature:f,Dictionary:p}=await u(),h=a.Z.fromJSON(t);let y=null;try{y=d.parseScript(e,c)}catch(t){return o.error(new r.Z("arcade-bad-expression","Failed to parse arcade script",{script:e,error:t})),null}const g=s.reduce(((e,t)=>({...e,[t]:null})),{});let b=null;(0,l.i)(i)&&(b=new p(i),b.immutable=!0,g.$config=null);const v=d.scriptUsesGeometryEngine(y),F=v&&d.enableGeometrySupport(),w=d.scriptUsesFeatureSet(y)&&d.enableFeatureSetSupport(),S=d.scriptIsAsync(y),V=S&&d.enableAsyncSupport(),_={vars:g,spatialReference:h,useAsync:!!V};await Promise.all([F,w,V]);const x=new Set;await d.loadDependentModules(x,y,null,S,v);const N=new p;N.immutable=!1,N.setField("scale",0);const C=d.compileScript(y,_);return new m(e,d,p,y,(e=>("$view"in e&&e.$view&&(N.setField("scale",e.$view.scale),e.$view=N),b&&(e.$config=b),C({vars:e,spatialReference:h}))),new f,n,h)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}},63683:(e,t,n)=>{n.d(t,{f:()=>o,t:()=>a});var r=n(94479),i=n(45702),l=n(51127);const a={key:"type",base:i.Z,typeMap:{algorithmic:r.Z,multipart:l.Z}};function o(e){return e&&e.type?"algorithmic"===e.type?r.Z.fromJSON(e):"multipart"===e.type?l.Z.fromJSON(e):null:null}},54174:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>a,g:()=>l,h:()=>s,i:()=>i});const r={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function i(e){return r[e]||r[e.toLowerCase()]}function l(e){return r[e]??r[e.toLowerCase()]}function a(e){return[...l(e)]}function o(e,t,n){n<0&&++n,n>1&&--n;const r=6*n;return r<1?e+(t-e)*r:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e}function s(e,t,n,r=1){const i=(e%360+360)%360/360,l=n<=.5?n*(t+1):n+t-n*t,a=2*n-l;return[Math.round(255*o(a,l,i+1/3)),Math.round(255*o(a,l,i)),Math.round(255*o(a,l,i-1/3)),r]}function u(e){const t=e.length>5,n=t?8:4,r=(1<<n)-1,i=t?1:17,l=t?9===e.length:5===e.length;let a=Number("0x"+e.substr(1));if(isNaN(a))return null;const o=[0,0,0,1];let s;return l&&(s=a&r,a>>=n,o[3]=i*s/255),s=a&r,a>>=n,o[2]=i*s,s=a&r,a>>=n,o[1]=i*s,s=a&r,a>>=n,o[0]=i*s,o}},59465:(e,t,n)=>{n.d(t,{e:()=>l});var r=n(57251),i=n(34250);function l(e,t={}){const n=e instanceof r.J?e:new r.J(e,t),l={type:t?.ignoreUnknown??1?n.apiValues:String,json:{type:n.jsonValues,read:!t?.readOnly&&{reader:n.read},write:{writer:n.write}}};return void 0!==t?.readOnly&&(l.readOnly=!!t.readOnly),void 0!==t?.default&&(l.json.default=t.default),void 0!==t?.name&&(l.json.name=t.name),(0,i.Cb)(l)}},66774:(e,t,n)=>{n.d(t,{C:()=>g,c:()=>F});var r=n(29768),i=n(57251),l=n(34250),a=(n(76506),n(91306),n(17533)),o=n(12047),s=n(63683),u=n(30776),c=n(92143);const d=new i.J({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let f=class extends o.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,r._)([(0,l.Cb)({type:u.Z,json:{write:!0}})],f.prototype,"baseSymbol",void 0),(0,r._)([(0,l.Cb)({types:s.t,json:{read:{reader:s.f},write:!0}})],f.prototype,"colorRamp",void 0),(0,r._)([(0,l.Cb)({json:{read:d.read,write:d.write}})],f.prototype,"type",void 0),f=(0,r._)([(0,a.j)("esri.rest.support.ClassificationDefinition")],f);const m=f,p=new i.J({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),h=new i.J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let y=class extends m{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,r._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"breakCount",void 0),(0,r._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"classificationField",void 0),(0,r._)([(0,l.Cb)({type:String,json:{read:p.read,write:p.write}})],y.prototype,"classificationMethod",void 0),(0,r._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"normalizationField",void 0),(0,r._)([(0,l.Cb)({json:{read:h.read,write:h.write}})],y.prototype,"normalizationType",void 0),(0,r._)([(0,l.Cb)({value:null,json:{write:!0}})],y.prototype,"standardDeviationInterval",null),(0,r._)([(0,l.Cb)({value:null,json:{write:!0}})],y.prototype,"definedInterval",null),(0,r._)([(0,l.Cb)()],y.prototype,"type",void 0),y=(0,r._)([(0,a.j)("esri.rest.support.ClassBreaksDefinition")],y);const g=y,b=c.L.getLogger("esri.rest.support.generateRendererUtils");function v(e,t){return Number(e.toFixed(t))}function F(e){const{normalizationTotal:t}=e,n=function(e){const t=e.definition,{classificationMethod:n,breakCount:r,normalizationType:i,definedInterval:l}=t,a=[];let o=e.values;if(0===o.length)return[];o=o.sort(((e,t)=>e-t));const s=o[0],u=o[o.length-1];if("equal-interval"===n)if(o.length>=r){const e=(u-s)/r;let t=s;for(let n=1;n<r;n++){const r=v(s+n*e,6);a.push({minValue:t,maxValue:r,label:w(t,r,i)}),t=r}a.push({minValue:t,maxValue:u,label:w(t,u,i)})}else o.forEach((e=>{a.push({minValue:e,maxValue:e,label:w(e,e,i)})}));else if("natural-breaks"===n){const t=function(e){const t=[],n=[];let r=Number.MIN_VALUE,i=1,l=-1;for(let a=0;a<e.length;a++){const o=e[a];o===r?(i++,n[l]=i):null!==o&&(t.push(o),r=o,i=1,n.push(i),l++)}return{uniqueValues:t,valueFrequency:n}}(o),n=e.valueFrequency||t.valueFrequency,l=function(e,t,n){const r=e.length,i=[];n>r&&(n=r);for(let e=0;e<n;e++)i.push(Math.round(e*r/n-1));i.push(r-1);let l=S(i,e,t,n);return function(e,t,n,r,i,l){let a=0,o=0,s=0,u=0,c=!0;for(let d=0;d<2&&c;d++){0===d&&(c=!1);for(let d=0;d<l-1;d++)for(;n[d+1]+1!==n[d+2];){n[d+1]=n[d+1]+1;const l=V(d,n,r,i);s=l.sbMean,a=l.sbSdcm;const f=V(d+1,n,r,i);if(u=f.sbMean,o=f.sbSdcm,!(a+o<t[d]+t[d+1])){n[d+1]=n[d+1]-1;break}t[d]=a,t[d+1]=o,e[d]=s,e[d+1]=u,c=!0}for(let d=l-1;d>0;d--)for(;n[d]!==n[d-1]+1;){n[d]=n[d]-1;const l=V(d-1,n,r,i);s=l.sbMean,a=l.sbSdcm;const f=V(d,n,r,i);if(u=f.sbMean,o=f.sbSdcm,!(a+o<t[d-1]+t[d])){n[d]=n[d]+1;break}t[d-1]=a,t[d]=o,e[d-1]=s,e[d]=u,c=!0}}return c}(l.mean,l.sdcm,i,e,t,n)&&(l=S(i,e,t,n)),i}(t.uniqueValues,n,r);let c=s;for(let e=1;e<r;e++)if(t.uniqueValues.length>e){const n=v(t.uniqueValues[l[e]],6);a.push({minValue:c,maxValue:n,label:w(c,n,i)}),c=n}a.push({minValue:c,maxValue:u,label:w(c,u,i)})}else if("quantile"===n)if(o.length>=r&&s!==u){let e=s,t=Math.ceil(o.length/r),n=0;for(let l=1;l<r;l++){let s=t+n-1;s>o.length&&(s=o.length-1),s<0&&(s=0),a.push({minValue:e,maxValue:o[s],label:w(e,o[s],i)}),e=o[s],n+=t,t=Math.ceil((o.length-n)/(r-l))}a.push({minValue:e,maxValue:u,label:w(e,u,i)})}else{let e=-1;for(let t=0;t<o.length;t++){const n=o[t];n!==e&&(e=n,a.push({minValue:e,maxValue:n,label:w(e,n,i)}),e=n)}}else if("standard-deviation"===n){const e=function(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/=e.length,t}(o),t=function(e,t){let n=0;for(let r=0;r<e.length;r++){const i=e[r];n+=(i-t)*(i-t)}return n/=e.length,Math.sqrt(n)}(o,e);if(0===t)a.push({minValue:o[0],maxValue:o[0],label:w(o[0],o[0],i)});else{const n=function(e,t,n,r,i){let l=Math.max(r-e,t-r)/i/n;return l=l>=1?1:l>=.5?.5:.25,l}(s,u,r,e,t),l=n*t;let o=0,c=s;for(let t=r;t>=1;t--){const n=v(e-(t-.5)*l,6);a.push({minValue:c,maxValue:n,label:w(c,n,i)}),c=n,o++}let d=v(e+.5*l,6);a.push({minValue:c,maxValue:d,label:w(c,d,i)}),c=d,o++;for(let t=1;t<=r;t++)d=o===2*r?u:v(e+(t+.5)*l,6),a.push({minValue:c,maxValue:d,label:w(c,d,i)}),c=d,o++}}else if("defined-interval"===n){if(!l)return a;const e=o[0],t=o[o.length-1],n=Math.ceil((t-e)/l);let r=e;for(let t=1;t<n;t++){const n=v(e+t*l,6);a.push({minValue:r,maxValue:n,label:w(r,n,i)}),r=n}a.push({minValue:r,maxValue:t,label:w(r,t,i)})}return a}(e);return{classBreaks:n,normalizationTotal:t}}function w(e,t,n){let r=null;return r=e===t?n&&"percent-of-total"===n?e+"%":e.toString():n&&"percent-of-total"===n?e+"% - "+t+"%":e+" - "+t,r}function S(e,t,n,r){let i=[],l=[],a=[],o=0;const s=[],u=[];for(let i=0;i<r;i++){const r=V(i,e,t,n);s.push(r.sbMean),u.push(r.sbSdcm),o+=u[i]}let c,d=o,f=!0;for(;f||o<d;){f=!1,i=[];for(let t=0;t<r;t++)i.push(e[t]);for(let n=0;n<r;n++)for(let i=e[n]+1;i<=e[n+1];i++)if(c=t[i],n>0&&i!==e[n+1]&&Math.abs(c-s[n])>Math.abs(c-s[n-1]))e[n]=i;else if(n<r-1&&e[n]!==i-1&&Math.abs(c-s[n])>Math.abs(c-s[n+1])){e[n+1]=i-1;break}d=o,o=0,l=[],a=[];for(let i=0;i<r;i++){l.push(s[i]),a.push(u[i]);const r=V(i,e,t,n);s[i]=r.sbMean,u[i]=r.sbSdcm,o+=u[i]}}if(o>d){for(let t=0;t<r;t++)e[t]=i[t],s[t]=l[t],u[t]=a[t];o=d}return{mean:s,sdcm:u}}function V(e,t,n,r){let i=0,l=0;for(let a=t[e]+1;a<=t[e+1];a++){const e=r[a];i+=n[a]*e,l+=e}l<=0&&b.warn("Exception in Natural Breaks calculation");const a=i/l;let o=0;for(let i=t[e]+1;i<=t[e+1];i++)o+=r[i]*(n[i]-a)**2;return{sbMean:a,sbSdcm:o}}},71435:(e,t,n)=>{n.d(t,{a:()=>h,b:()=>m,c:()=>p,q:()=>f,t:()=>o,u:()=>y});var r=n(71252);n(32422);const i=(e,t,n)=>[t,n],l=(e,t,n)=>[t,n,e[2]],a=(e,t,n)=>[t,n,e[2],e[3]];function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,r.i)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function s({scale:e,translate:t},n){return n*e[0]+t[0]}function u({scale:e,translate:t},n){return t[1]-n*e[1]}function c(e,t,n){const r=new Array(n.length);if(!n.length)return r;const[i,l]=e.scale;let a=s(e,n[0][0]),o=u(e,n[0][1]);r[0]=t(n[0],a,o);for(let e=1;e<n.length;e++){const s=n[e];a+=s[0]*i,o-=s[1]*l,r[e]=t(s,a,o)}return r}function d(e,t,n){const r=new Array(n.length);for(let i=0;i<n.length;i++)r[i]=c(e,t,n[i]);return r}function f(e,t,n,r,i){return t.x=function({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}(e,n.x),t.y=function({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}(e,n.y),t!==n&&(r&&(t.z=n.z),i&&(t.m=n.m)),t}function m(e,t,n,o,s){return(0,r.i)(n)&&(t.points=function(e,t,n,r){return c(e,n?r?a:l:r?l:i,t)}(e,n.points,o,s)),t}function p(e,t,n,i,l){return(0,r.a)(n)||(t.x=s(e,n.x),t.y=u(e,n.y),t!==n&&(i&&(t.z=n.z),l&&(t.m=n.m))),t}function h(e,t,n,o,s){return(0,r.i)(n)&&(t.rings=function(e,t,n,r){return d(e,n?r?a:l:r?l:i,t)}(e,n.rings,o,s)),t}function y(e,t,n,o,s){return(0,r.i)(n)&&(t.paths=function(e,t,n,r){return d(e,n?r?a:l:r?l:i,t)}(e,n.paths,o,s)),t}},22781:(e,t,n)=>{n.d(t,{f:()=>i,t:()=>l});var r=n(57251);const i=(0,r.s)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),l=(0,r.s)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},59565:(e,t,n)=>{n.d(t,{b:()=>o,c:()=>b,d:()=>v,e:()=>u,f:()=>c,h:()=>y,i:()=>s,j:()=>F,k:()=>S,l:()=>f,m:()=>d,p:()=>h,r:()=>w});var r=n(66774);const i=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,l=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),a=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function o(e){return null==e||"string"==typeof e&&!e?"<Null>":e}function s(e){const t=null!=e.normalizationField||null!=e.normalizationType,n=null!=e.minValue||null!=e.maxValue,r=!!e.sqlExpression&&e.supportsSQLExpression;return!t&&!n&&!r}function u(e){const t=e.returnDistinct?[...new Set(e.values)]:e.values,n=t.filter((e=>null!=e)).length,r={count:n};return e.supportsNullCount&&(r.nullcount=t.length-n),e.percentileParams&&(r.median=d(t,e.percentileParams)),r}function c(e){const{values:t,useSampleStdDev:n,supportsNullCount:r}=e;let i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,a=null,o=null,s=null,u=null,c=0;const f=null==e.minValue?-1/0:e.minValue,m=null==e.maxValue?1/0:e.maxValue;for(const e of t)Number.isFinite(e)?e>=f&&e<=m&&(a+=e,i=Math.min(i,e),l=Math.max(l,e),c++):"string"==typeof e&&c++;if(c&&null!=a){o=a/c;let e=0;for(const n of t)Number.isFinite(n)&&n>=f&&n<=m&&(e+=(n-o)**2);u=n?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else i=null,l=null;const p={avg:o,count:c,max:l,min:i,stddev:s,sum:a,variance:u};return r&&(p.nullcount=t.length-c),e.percentileParams&&(p.median=d(t,e.percentileParams)),p}function d(e,t){const{fieldType:n,value:r,orderBy:i,isDiscrete:l}=t,a=f(n,"desc"===i);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,t)=>a(e,t)))).length)return null;if(r<=0)return e[0];if(r>=1)return e[e.length-1];const o=(e.length-1)*r,s=Math.floor(o),u=s+1,c=o%1,d=e[s],m=e[u];return u>=e.length||l||"string"==typeof d||"string"==typeof m?d:d*(1-c)+m*c}function f(e,t){const n=t?1:-1,r=function(e){return e?(e,t)=>t-e:(e,t)=>e-t}(t),i=m(t);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...l].includes(e))return(e,t)=>"number"==typeof e&&"number"==typeof t?r(e,t):"string"==typeof e&&"string"==typeof t?i(e,t):n;if("esriFieldTypeDate"===e)return(e,t)=>{const i=new Date(e).getTime(),l=new Date(t).getTime();return isNaN(i)||isNaN(l)?n:r(i,l)};if(l.has(e))return(e,t)=>r(e,t);if("esriFieldTypeString"===e)return(e,t)=>i(e,t);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=m(t);return(t,n)=>e(p(t),p(n))}return t?(e,t)=>1:(e,t)=>-1}function m(e){return e?(e,t)=>(e=e?.toUpperCase(),t=t?.toUpperCase(),e>t?-1:e<t?1:0):(e,t)=>(e=e?.toUpperCase(),t=t?.toUpperCase(),e<t?-1:e>t?1:0)}function p(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function h(e,t){let n;for(n in e)a.includes(n)&&(Number.isFinite(e[n])||(e[n]=null));return t?(["avg","stddev","variance"].forEach((t=>{null!=e[t]&&(e[t]=Math.ceil(e[t]))})),e):e}function y(e){const t={};for(let n of e)(null==n||"string"==typeof n&&""===n.trim())&&(n=null),null==t[n]?t[n]={count:1,data:n}:t[n].count++;return{count:t}}function g(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function b(e,t,n,r){const i=e.count,l=[];if(n&&t){const e=[],n=g(t[0]);for(const i of n)if(t[1]){const n=g(t[1]);for(const l of n)if(t[2]){const n=g(t[2]);for(const t of n)e.push(`${o(i)}${r}${o(l)}${r}${o(t)}`)}else e.push(`${o(i)}${r}${o(l)}`)}else e.push(i);for(const t of e)i.hasOwnProperty(t)||(i[t]={data:t,count:0})}for(const e in i){const t=i[e];l.push({value:t.data,count:t.count,label:t.label})}return{uniqueValueInfos:l}}function v(e,t,n,r){let i=null;switch(t){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(r)&&0!==r&&(i=e/r*100);break;case"field":Number.isFinite(n)&&0!==n&&(i=e/n);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}function F(e,t){const n=function(e){const t=e.field,n=e.classificationMethod||"equal-interval",i=e.normalizationType,l=e.normalizationField,a=new r.C;return a.classificationField=t,a.breakCount=e.breakCount,a.classificationMethod=n,a.standardDeviationInterval="standard-deviation"===n?e.standardDeviationInterval||1:void 0,a.normalizationType=i,a.normalizationField="field"===i?l:void 0,a}({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||5});return e=function(e,t,n){return t=t??-1/0,n=n??1/0,e.filter((e=>Number.isFinite(e)&&e>=t&&e<=n))}(e,t.minValue,t.maxValue),(0,r.c)({definition:n,values:e,normalizationTotal:t.normalizationTotal})}function w(e,t){let n=e.classBreaks;const r=n.length,l=n[0].minValue,a=n[r-1].maxValue,o="standard-deviation"===t,s=i;return n=n.map((e=>{const t=e.label,n={minValue:e.minValue,maxValue:e.maxValue,label:t};if(o&&t){const e=t.match(s).map((e=>+e.trim()));2===e.length?(n.minStdDev=e[0],n.maxStdDev=e[1],e[0]<0&&e[1]>0&&(n.hasAvg=!0)):1===e.length&&(t.includes("<")?(n.minStdDev=null,n.maxStdDev=e[0]):t.includes(">")&&(n.minStdDev=e[0],n.maxStdDev=null))}return n})),{minValue:l,maxValue:a,classBreakInfos:n,normalizationTotal:e.normalizationTotal}}function S(e,t){const{min:n,max:r,intervals:i}=function(e,t){const{field:n,classificationMethod:r,standardDeviationInterval:i,normalizationType:l,normalizationField:a,normalizationTotal:o,minValue:u,maxValue:d}=t,f=t.numBins||10;let m=null,p=null,h=null;if(r&&"equal-interval"!==r||l){const{classBreaks:t}=F(e,{field:n,normalizationType:l,normalizationField:a,normalizationTotal:o,classificationMethod:r,standardDeviationInterval:i,minValue:u,maxValue:d,numClasses:f});m=t[0].minValue,p=t[t.length-1].maxValue,h=t.map((e=>[e.minValue,e.maxValue]))}else{if(null!=u&&null!=d)m=u,p=d;else{const t=c({values:e,minValue:u,maxValue:d,useSampleStdDev:!l,supportsNullCount:s({normalizationType:l,normalizationField:a,minValue:u,maxValue:d})});m=t.min,p=t.max}h=function(e,t,n){const r=(t-e)/n,i=[];let l,a=e;for(let e=1;e<=n;e++)l=a+r,l=Number(l.toFixed(16)),i.push([a,e===n?t:l]),a=l;return i}(m,p,f)}return{min:m,max:p,intervals:h}}(e,t),l=i.map(((e,t)=>({minValue:i[t][0],maxValue:i[t][1],count:0})));for(const t of e)if(null!=t&&t>=n&&t<=r){const e=V(i,t);e>-1&&l[e].count++}return{bins:l,minValue:n,maxValue:r,normalizationTotal:t.normalizationTotal}}function V(e,t){let n=-1;for(let r=e.length-1;r>=0;r--)if(t>=e[r][0]){n=r;break}return n}},74569:(e,t,n)=>{n.d(t,{qM:()=>c});var r=n(91306),i=n(21801),l=n(73796),a=n(84069),o=n(91597),s=n(44567),u=n(92896);n(60947),n(22781),n(32422),n(71552),n(76506),n(92143),n(31450),n(40642),n(34250),n(60474),n(66396),n(86656),n(60991),n(17533),n(6540),n(35132),n(89623),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406),n(97714),n(2906),n(86787),n(98380),n(57251);const c={base:l.Z,key:"type",typeMap:{extent:i.Z,multipoint:a.Z,point:o.Z,polyline:u.Z,polygon:s.Z}};(0,r.a)(c)},32422:(e,t,n)=>{n.d(t,{Ji:()=>y,YX:()=>c,aW:()=>d,im:()=>h,l9:()=>m,oU:()=>p,q9:()=>b,wp:()=>f});var r=n(71252),i=n(21801),l=n(73796),a=n(84069),o=n(91597),s=n(44567),u=n(92896);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function d(e){return void 0!==e.points}function f(e){return void 0!==e.x&&void 0!==e.y}function m(e){return void 0!==e.paths}function p(e){return void 0!==e.rings}function h(e){return(0,r.a)(e)?null:e instanceof l.Z?e:f(e)?o.Z.fromJSON(e):m(e)?u.Z.fromJSON(e):p(e)?s.Z.fromJSON(e):d(e)?a.Z.fromJSON(e):c(e)?i.Z.fromJSON(e):null}function y(e){return e?f(e)?"esriGeometryPoint":m(e)?"esriGeometryPolyline":p(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":d(e)?"esriGeometryMultipoint":null:null}n(40642),n(71552),n(76506),n(34250),n(92143),n(31450),n(91306),n(60474),n(66396),n(86656),n(60991),n(17533),n(6540),n(60947),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406),n(2906),n(35132),n(89623),n(97714),n(86787),n(98380);const g={esriGeometryPoint:o.Z,esriGeometryPolyline:u.Z,esriGeometryPolygon:s.Z,esriGeometryEnvelope:i.Z,esriGeometryMultipoint:a.Z};function b(e){return e&&g[e]||null}},14249:(e,t,n)=>{n.d(t,{AB:()=>S,CH:()=>C,Ec:()=>Q,H7:()=>q,Lk:()=>V,O5:()=>x,Pz:()=>U,Q0:()=>F,Qc:()=>R,UF:()=>b,YN:()=>y,gd:()=>w,io:()=>_,os:()=>T,q6:()=>m,qN:()=>G,v5:()=>E,vP:()=>W}),n(60991);var r,i,l=n(71252),a=n(71552),o=n(60217);n(76506),n(92143),n(31450),n(40642),n(74569),n(91306),n(21801),n(34250),n(60474),n(66396),n(86656),n(17533),n(6540),n(73796),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406),n(97714),n(60947),n(2906),n(91597),n(86787),n(35132),n(89623),n(84069),n(44567),n(98380),n(92896),n(22781),n(57251),n(32422),(i=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";const s=/^([0-9])/,u=/[^A-Za-z0-9_\u0080-\uffff]/g,c=/_{2,}/g,d=/^_/,f=/_$/;function m(e){return e?e.trim().replace(u,"_").replace(c,"_").replace(d,"").replace(f,"").replace(s,"F$1"):null}const p=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],h=["field","normalizationField"];function y(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(g(p,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)g(h,e,t)}function g(e,t,n){if(e)for(const r of e){const e=(0,a.g)(r,t),i=e&&"function"!=typeof e&&n.get(e);i&&(0,a.s)(r,i.name,t)}}function b(e,t){if(null!=e&&t?.fields?.length)if("startField"in e){const n=t.get(e.startField),r=t.get(e.endField);e.startField=n?.name??null,e.endField=r?.name??null}else{const n=t.get(e.startTimeField),r=t.get(e.endTimeField);e.startTimeField=n?.name??null,e.endTimeField=r?.name??null}}const v=new Set;function F(e,t){return e&&t?(v.clear(),w(v,e,t),Array.from(v).sort()):[]}function w(e,t,n){if(n)if(t?.fields?.length)if(n.includes("*"))for(const{name:n}of t.fields)e.add(n);else for(const r of n)S(e,t,r);else{if(n.includes("*"))return e.clear(),void e.add("*");for(const t of n)null!=t&&e.add(t)}}function S(e,t,n){if("string"==typeof n)if(t){const r=t.get(n);r&&e.add(r.name)}else e.add(n)}function V(e,t){return(0,l.a)(t)||(0,l.a)(e)?[]:t.includes("*")?(e.fields??[]).map((e=>e.name)):t}async function _(e,t,n){if(!n)return;const{arcadeUtils:r}=await(0,o.l)(),i=r.extractFieldNames(n,t?.fields?.map((e=>e.name)));for(const n of i)S(e,t,n)}function x({displayField:e,fields:t}){return e||(t&&t.length?N(t,"name-or-title")||N(t,"unique-identifier")||N(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.includes("name")||e.includes("title"))return t.name}return null}(t):null)}function N(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name;return null}function C(e){if(!e)return[];const t="editFieldsInfo"in e&&e.editFieldsInfo;return t?F(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}function T(e){const t=e.defaultValue;return void 0!==t&&O(e,t)?t:e.nullable?null:void 0}function k(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function M(e){return null===e||k(e)}const I="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function A(e){return null===e||I(e)}function D(e){return null!=e&&"string"==typeof e}function z(e){return null===e||D(e)}function L(){return!0}function O(e,t){let n;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?A:I;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?M:k;break;case"string":case"esriFieldTypeString":n=e.nullable?z:D;break;default:n=L}return 1===arguments.length?n:n(t)}const E=["integer","small-integer","single","double"],$=new Set([...E,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function q(e){return null!=e&&$.has(e.type)}function G(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var Z,P;function U(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function R(e,t){return e.nullable&&null===t?null:q(e)&&!function(e,t){const n="string"==typeof e?j(e):e;if(!n)return!1;const r=n.min,i=n.max;return n.isInteger?I(t)&&t>=r&&t<=i:t>=r&&t<=i}(e.type,Number(t))?Z.OUT_OF_RANGE:O(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(null!=n&&+t<n||null!=i&&+t>i)return r.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==t)))return r.INVALID_CODED_VALUE}return null}(e.domain,t):null:P.INVALID_TYPE}function j(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return J;case"esriFieldTypeInteger":case"integer":return B;case"esriFieldTypeSingle":case"single":return Y;case"esriFieldTypeDouble":case"double":return H}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(Z||(Z={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(P||(P={}));const J={min:-32768,max:32767,isInteger:!0},B={min:-2147483648,max:2147483647,isInteger:!0},Y={min:-34e37,max:12e37,isInteger:!1},H={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function W(e,t,n){switch(e){case r.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case r.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case P.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case Z.OUT_OF_RANGE:{const{min:e,max:r}=j(t.type);return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`}}}function Q(e){return["raster.itempixelvalue","raster.servicepixelvalue"].some((t=>e.toLowerCase().startsWith(t)))}},94479:(e,t,n)=>{n.d(t,{Z:()=>m});var r,i=n(29768),l=n(48027),a=n(76506),o=n(34250),s=n(91306),u=n(59465),c=n(17533),d=n(45702);n(54174),n(82426),n(72836),n(29794),n(71552),n(92143),n(31450),n(40642),n(60474),n(66396),n(86656),n(60991),n(57251),n(6540),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406);let f=r=class extends d.Z{constructor(e){super(e),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new r({fromColor:(0,a.d9)(this.fromColor),toColor:(0,a.d9)(this.toColor),algorithm:this.algorithm})}};(0,i._)([(0,u.e)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],f.prototype,"algorithm",void 0),(0,i._)([(0,o.Cb)({type:l.Z,json:{type:[s.I],write:!0}})],f.prototype,"fromColor",void 0),(0,i._)([(0,o.Cb)({type:l.Z,json:{type:[s.I],write:!0}})],f.prototype,"toColor",void 0),(0,i._)([(0,o.Cb)({type:["algorithmic"]})],f.prototype,"type",void 0),f=r=(0,i._)([(0,c.j)("esri.rest.support.AlgorithmicColorRamp")],f);const m=f},45702:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(29768),i=n(12047),l=n(34250),a=(n(76506),n(91306),n(17533));n(21972),n(60474),n(66396),n(86656),n(71552),n(92143),n(31450),n(40642),n(91055),n(6540),n(19657),n(6906),n(50406),n(60991);let o=class extends i.wq{constructor(e){super(e),this.type=null}};(0,r._)([(0,l.Cb)({readOnly:!0,json:{read:!1,write:!0}})],o.prototype,"type",void 0),o=(0,r._)([(0,a.j)("esri.rest.support.ColorRamp")],o);const s=o},51127:(e,t,n)=>{n.d(t,{Z:()=>d});var r,i=n(29768),l=n(76506),a=n(34250),o=(n(91306),n(17533)),s=n(94479),u=n(45702);n(92143),n(31450),n(71552),n(40642),n(60474),n(66396),n(86656),n(60991),n(6540),n(48027),n(54174),n(82426),n(72836),n(29794),n(59465),n(57251),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406);let c=r=class extends u.Z{constructor(e){super(e),this.colorRamps=null,this.type="multipart"}clone(){return new r({colorRamps:(0,l.d9)(this.colorRamps)})}};(0,i._)([(0,a.Cb)({type:[s.Z],json:{write:!0}})],c.prototype,"colorRamps",void 0),(0,i._)([(0,a.Cb)({type:["multipart"]})],c.prototype,"type",void 0),c=r=(0,i._)([(0,o.j)("esri.rest.support.MultipartColorRamp")],c);const d=c},30776:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(29768),i=n(48027),l=n(57251),a=n(12047),o=n(34250),s=(n(76506),n(91306),n(97714)),u=n(17533);n(54174),n(82426),n(72836),n(29794),n(71552),n(21972),n(60474),n(66396),n(86656),n(92143),n(31450),n(40642),n(91055),n(6540),n(19657),n(6906),n(50406),n(60991);const c=new l.J({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let d=0,f=class extends a.wq{constructor(e){super(e),this.id="sym"+d++,this.type=null,this.color=new i.Z([0,0,0,1])}readColor(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e}async collectRequiredFields(e,t){}hash(){return JSON.stringify(this.toJSON())}clone(){}};(0,r._)([(0,o.Cb)({type:c.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:c.write}}})],f.prototype,"type",void 0),(0,r._)([(0,o.Cb)({type:i.Z,json:{write:{allowNull:!0}}})],f.prototype,"color",void 0),(0,r._)([(0,s.r)("color")],f.prototype,"readColor",null),f=(0,r._)([(0,u.j)("esri.symbols.Symbol")],f);const m=f}}]);