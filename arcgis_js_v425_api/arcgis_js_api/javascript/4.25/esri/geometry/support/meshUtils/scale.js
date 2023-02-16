// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../../projection ../../projectionEllipsoid ./geographicUtils ./projection".split(" "),function(u,y,e,k,l,t,z,A,m){function v(b,g,a=l.ZEROS){if(b)for(let d=0;d<b.length;d+=3){for(var c=0;3>c;c++)n[c]=b[d+c]-a[c];k.scale(n,n,g);for(c=0;3>c;c++)b[d+c]=n[c]+a[c]}}const w=y.getLogger("esri.geometry.support.meshUtils.scale"),n=l.create(),x=l.create(),f=l.create();u.scale=function(b,g,a){if(b.vertexAttributes&&
b.vertexAttributes.position){var c=b.spatialReference;if(e.isSome(b.transform))null!=a?.geographic&&a.geographic!==b.transform.geographic&&w.warn(`Specifying the 'geographic' parameter (${a.geographic}) different from the Mesh transform setting (${b.transform.geographic}) is not supported`),a=a?.origin??b.transform.getOriginPoint(c),b=b.transform,a=k.set(n,a.x,a.y,a.z),a=k.subtract(n,a,b.origin),b.applyLocalInverse(a,x),g=k.scale(l.create(),b.scale,g),b.scale=g,b.applyLocalInverse(a,a),k.subtract(a,
a,x),b.translation=k.add(l.create(),b.translation,a);else{c=A.isGeographicMesh(b.spatialReference,a);a=a&&a.origin||b.origin;if(c){c=a;a=b.spatialReference;var d=z.getSphericalPCPF(a);t.projectPointToVector(c,f,d)||t.projectPointToVector(b.origin,f,d);c=b.vertexAttributes.position;d=b.vertexAttributes.normal;const p=b.vertexAttributes.tangent,h=new Float64Array(c.length),q=e.isSome(d)?new Float32Array(d.length):null,r=e.isSome(p)?new Float32Array(p.length):null;m.projectToPCPF(c,a,h);e.isSome(d)&&
e.isSome(q)&&m.projectNormalToPCPF(d,c,h,a,q);e.isSome(p)&&e.isSome(r)&&m.projectTangentToPCPF(p,c,h,a,r);v(h,g,f);m.projectFromPCPF(h,c,a);e.isSome(d)&&e.isSome(q)&&m.projectNormalFromPCPF(q,c,h,a,d);e.isSome(p)&&e.isSome(r)&&m.projectTangentFromPCPF(r,c,h,a,p)}else t.projectPointToVector(a,f,b.spatialReference)||(c=b.origin,f[0]=c.x,f[1]=c.y,f[2]=c.z,w.error(`Failed to project specified origin (wkid:${a.spatialReference.wkid}) to mesh spatial reference (wkid:${b.spatialReference.wkid}).`)),v(b.vertexAttributes.position,
g,f);b.vertexAttributesChanged()}}};Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});