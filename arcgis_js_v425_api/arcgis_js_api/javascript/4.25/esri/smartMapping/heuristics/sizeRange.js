// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/has ../../core/Error ../../core/maybe ../../core/screenUtils ../../geometry/support/scaleUtils ../../renderers/visualVariables/SizeVariable ./scaleRange ../support/binningUtils ../support/adapters/support/layerUtils".split(" "),function(x,T,l,y,m,D,n,E,F,q){function G(a){return t.apply(this,arguments)}function t(){t=x._asyncToGenerator(function*(a){var {view:b}=a;if(!(a&&b&&a.layer))throw new l("size-range:missing-parameters","'view' and 'layer' parameters are required");
a.forBinning&&F.verifyBinningParams(a,"size-range");const {layer:f,...d}=a,c=a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes,e=q.createLayerAdapter(f,c,a.forBinning);a={layerAdapter:e,...d};if(!e)throw new l("size-range:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));yield b.when();b=y.isSome(a.signal)?{signal:a.signal}:null;yield e.load(b);b=e.geometryType;if("point"!==b&&"multipoint"!==b&&"polyline"!==b&&"polygon"!==b)throw new l("size-range:not-supported",
`sizeRange is not supported for geometryType: ${b}`);return a});return t.apply(this,arguments)}function z(a,b){({view:a}=a);const f=b.minScale||1E8;b=a.constraints&&"effectiveLODs"in a.constraints&&a.constraints.effectiveLODs||H;a=[];for(var d in b)if(!(b[d].scale>f)){d=Number(d);d=[d-3,d,d+3,d+6];for(const c of d)-1<c&&c<b.length&&a.push(b[c].scale);break}return a.sort((c,e)=>c-e)}function I(a,b){const {view:f,layerAdapter:d}=a;var c=d.fullExtent;a=d.minScale||1128.497176;const e=d.maxScale||5.91657527591555E8,
u=b.minScale||0;b=b.maxScale||0;c=y.isSome(c)?D.getScale(f,c):0;c=c<a&&c>e?c:0;return{scales:[a,e,u,b,c].map(Math.round).sort((h,k)=>h-k).filter((h,k,p)=>!!h&&p.indexOf(h)===k).filter((h,k,p)=>k?5<Math.abs(h-p[k-1]):!0),fullExtentScale:c}}function J(a,b){const {minScale:f,maxScale:d}=b;a=z(a,{minScale:f,maxScale:d});if(!a.length)throw new l("scale-range:insufficient-info","not enough scale values");return{minSize:new n({valueExpression:"$view.scale",stops:a.map((c,e)=>({value:c,size:m.px2pt(K[e])}))}),
maxSize:new n({valueExpression:"$view.scale",stops:a.map((c,e)=>({value:c,size:m.px2pt(L[e])}))})}}function M(a,b){const {minScale:f,maxScale:d}=b;a=z(a,{minScale:f,maxScale:d});if(!a.length)throw new l("scale-range:insufficient-info","not enough scale values");return{minSize:new n({valueExpression:"$view.scale",stops:a.map((c,e)=>({value:c,size:m.px2pt(N[e])}))}),maxSize:new n({valueExpression:"$view.scale",stops:a.map((c,e)=>({value:c,size:m.px2pt(O[e])}))})}}function P(a,b){const {spatialStatistics:f,
minScale:d,maxScale:c}=b;if(!("avgSize"in f&&f.avgSize))throw new l("size-range:insufficient-info","average polygon size is invalid");const e=f.avgSize,{resolution:u,scale:h}=a.view,k=u/h,{scales:p,fullExtentScale:Q}=I(a,{minScale:d,maxScale:c}),A=[],B=[];p.forEach((v,r)=>{var g=Math.ceil(Math.ceil(e/(k*v))/4);4>g?g=4:16<g&&(g=16);const C=5*g,{min:R,max:S}={min:g,max:50>C?50:C};g=p.indexOf(Q);r=-1<g&&r>g?2:1;A.push({value:v,size:m.px2pt(R/r)});B.push({value:v,size:m.px2pt(S/r)})});a=new n({valueExpression:"$view.scale",
stops:A});b=new n({valueExpression:"$view.scale",stops:B});return{minSize:a,maxSize:b}}function w(){w=x._asyncToGenerator(function*(a){a=yield G(a);const {view:b,layerAdapter:f,signal:d}=a,c=yield E({layer:f,view:b,signal:d});switch(f.geometryType){case "point":case "multipoint":return J(a,c);case "polyline":return M(a,c);case "polygon":return P(a,c)}return null});return w.apply(this,arguments)}const K=[10,8,4,2],L=[100,100,60,30],N=[2,1,.75,.5],O=[32,18,12,6],H=[{level:0,resolution:156543.03392800014,
scale:5.91657527591555E8},{level:1,resolution:78271.51696399994,scale:2.95828763795777E8},{level:2,resolution:39135.75848200009,scale:1.47914381897889E8},{level:3,resolution:19567.87924099992,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.992452562495,scale:4622324.434309},{level:8,resolution:611.4962262813797,scale:2311162.217155},
{level:9,resolution:305.74811314055756,scale:1155581.108577},{level:10,resolution:152.87405657041106,scale:577790.554289},{level:11,resolution:76.43702828507324,scale:288895.277144},{level:12,resolution:38.21851414253662,scale:144447.638572},{level:13,resolution:19.10925707126831,scale:72223.819286},{level:14,resolution:9.554628535634155,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.388657133974685,scale:9027.977411},{level:17,resolution:1.1943285668550503,
scale:4513.988705},{level:18,resolution:.5971642835598172,scale:2256.994353},{level:19,resolution:.29858214164761665,scale:1128.497176}];return function(a){return w.apply(this,arguments)}});