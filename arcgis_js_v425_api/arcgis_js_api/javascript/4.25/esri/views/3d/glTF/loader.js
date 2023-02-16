// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/mat4f64 ./DefaultErrorContext ./LoaderResult ./internal/Resource ../../webgl/enums".split(" "),function(z,u,v,H,I,A,J,p){function x(){x=u._asyncToGenerator(function*(g,a,d={},k=!0){const b=yield J.GLTFResource.load(g,w,a,d),e=`gltf_${K++}`,f={lods:[],materials:new Map,textures:new Map,meta:L(b)};g=!(!b.json.asset.extras||"symbolResource"!==b.json.asset.extras.ESRI_type);const q=new Map;yield M(b,function(){var n=
u._asyncToGenerator(function*(c,l,m,B){const C=q.get(m)??0;q.set(m,C+1);var r=void 0!==c.mode?c.mode:p.PrimitiveType.TRIANGLES,t=r===p.PrimitiveType.TRIANGLES||r===p.PrimitiveType.TRIANGLE_STRIP||r===p.PrimitiveType.TRIANGLE_FAN?r:null;if(v.isNone(t))w.warnUnsupported("Unsupported primitive mode ("+p.PrimitiveType[r]+"). Skipping primitive.");else if(b.hasPositions(c)){r=b.getPositionData(c,d);var N=b.getMaterial(c,d,k),D=b.hasNormals(c)?b.getNormalData(c,d):null,E=b.hasTangents(c)?b.getTangentData(c,
d):null,F=b.hasTextureCoordinates(c)?b.getTextureCoordinates(c,d):null,G=b.hasVertexColors(c)?b.getVertexColors(c,d):null;c=b.getIndexData(c,d);l={transform:H.clone(l),attributes:{position:yield r,normal:D?yield D:null,texCoord0:F?yield F:null,color:G?yield G:null,tangent:E?yield E:null},indices:yield c,primitiveType:t,material:O(f,yield N,e)};t=null;v.isSome(f.meta)&&v.isSome(f.meta.ESRI_lod)&&"screenSpaceRadius"===f.meta.ESRI_lod.metric&&(t=f.meta.ESRI_lod.thresholds[m]);f.lods[m]=f.lods[m]||{parts:[],
name:B,lodThreshold:t};f.lods[m].parts[C]=l}else w.warn("Skipping primitive without POSITION vertex attribute.")});return function(c,l,m,B){return n.apply(this,arguments)}}());for(var h of f.lods)h.parts=h.parts.filter(n=>!!n);h=yield b.getLoadedBuffersSize();return{model:f,meta:{isEsriSymbolResource:g,uri:b.uri},customMeta:{},size:h}});return x.apply(this,arguments)}function L(g){let a=null;g.json.nodes.forEach(d=>{d=d.extras;v.isSome(d)&&(d.ESRI_proxyEllipsoid||d.ESRI_lod)&&(a=d)});return a}function M(g,
a){return y.apply(this,arguments)}function y(){y=u._asyncToGenerator(function*(g,a){function d(h,n){return k.apply(this,arguments)}function k(){k=u._asyncToGenerator(function*(h,n){const c=b.nodes[h];h=g.getNodeTransform(h);w.warnUnsupportedIf(null!=c.weights,"Morph targets are not supported.");if(null!=c.mesh){const l=b.meshes[c.mesh];for(const m of l.primitives)q.push(a(m,h,n,l.name))}for(const l of c.children||[])q.push(d(l,n))});return k.apply(this,arguments)}const b=g.json;var e=b.scenes[b.scene||
0].nodes;const f=1<e.length,q=[];for(const h of e)e=b.nodes[h],q.push(d(h,0)),e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)&&!f&&e.extensions.MSFT_lod.ids.forEach((n,c)=>d(n,c+1));yield Promise.all(q)});return y.apply(this,arguments)}function O(g,a,d){const k=e=>{const f=`${d}_tex_${e&&e.id}${e&&e.name?"_"+e.name:""}`;e&&!g.textures.has(f)&&(e=A.makeTextureSource(e.data,{wrap:{s:e.wrapS,t:e.wrapT},mipmap:P.includes(e.minFilter),noUnpackFlip:!0}),g.textures.set(f,e));
return f},b=`${d}_mat_${a.id}_${a.name}`;g.materials.has(b)||(a=A.makeMaterialParameters({color:[a.color[0],a.color[1],a.color[2]],opacity:a.color[3],alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,colorMixMode:a.ESRI_externalColorMixMode,textureColor:a.colorTexture?k(a.colorTexture):void 0,textureNormal:a.normalTexture?k(a.normalTexture):void 0,textureOcclusion:a.occlusionTexture?k(a.occlusionTexture):void 0,textureEmissive:a.emissiveTexture?k(a.emissiveTexture):void 0,
textureMetallicRoughness:a.metallicRoughnessTexture?k(a.metallicRoughnessTexture):void 0,emissiveFactor:[a.emissiveFactor[0],a.emissiveFactor[1],a.emissiveFactor[2]],colorTextureTransform:a.colorTextureTransform,normalTextureTransform:a.normalTextureTransform,occlusionTextureTransform:a.occlusionTextureTransform,emissiveTextureTransform:a.emissiveTextureTransform,metallicRoughnessTextureTransform:a.metallicRoughnessTextureTransform,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor}),
g.materials.set(b,a));return b}let K=0;const w=new I.DefaultErrorContext,P=[p.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,p.TextureSamplingMode.LINEAR_MIPMAP_NEAREST];z.loadGLTF=function(g,a){return x.apply(this,arguments)};Object.defineProperties(z,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});