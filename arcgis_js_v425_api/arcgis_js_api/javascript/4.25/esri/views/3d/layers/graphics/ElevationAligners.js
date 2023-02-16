// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ./elevationAlignmentUtils ./graphicUtils ../../support/debugFlags ../../support/ElevationProvider ../../webgl-engine/lib/VertexAttribute".split(" "),function(u,H,I,D,E,w,A,v,J,x,K,B){function F(b,c,g,d){let f=!1;const h=g.spatialReference;var n=b.geometry,a=b.getShaderTransformation();b=c.requiresSampledElevationInfo;p[0]=a[12];
p[1]=a[13];p[2]=a[14];n.invalidateBoundingInfo();var r=n.getMutableAttribute(B.VertexAttribute.POSITION);a=r.data;var m=n.vertexAttributes.get(B.VertexAttribute.MAPPOS).data;n=r.size;r=a.length/n;m=new K.SamplePosition(m,h);let e=0,y=0;for(let z=0;z<r;z++){t[0]=a[e];t[1]=a[e+1];t[2]=a[e+2];v.evaluateElevationInfoAtPoint(m,g,c,d,k);b&&(y+=k.sampledElevation);if(x.TESTS_DISABLE_OPTIMIZATIONS)a[e]=m.array[m.offset],a[e+1]=m.array[m.offset+1],a[e+2]=k.z,A.projectBuffer(a,h,e,a,d.spatialReference,e,1),
a[e]-=p[0],a[e+1]-=p[1],a[e+2]-=p[2],f=!0;else{l[0]=a[e]+p[0];l[1]=a[e+1]+p[1];l[2]=a[e+2]+p[2];d.setAltitude(l,k.z);a[e]=l[0]-p[0];a[e+1]=l[1]-p[1];a[e+2]=l[2]-p[2];const C=.01/d.unitInMeters;if(Math.abs(t[0]-a[e])>=C||Math.abs(t[1]-a[e+1])>=C||Math.abs(t[2]-a[e+2])>=C)f=!0}e+=n;m.offset+=3}return{update:f,averageGeometrySampledElevation:y/r}}const L=D.create(),l=w.create(),p=w.create(),t=w.create(),q=D.create(),G=w.create(),k=new v.SampleElevationInfo;u.perLodInstanceElevationAligner=function(b,
c,g,d){var f=b.graphics3DSymbolLayer.lodRenderer;if(H.isNone(f))return 0;const h=c.centerPointInElevationSR;v.evaluateElevationInfoAtPoint(h,g,c,d,k);c="absolute-height"!==c.mode?k.sampledElevation:0;f=f.instanceData;b=b.instanceIndex;f.getGlobalTransform(b,q);g=E.set(G,q[12],q[13],q[14]);x.TESTS_DISABLE_OPTIMIZATIONS?(l[0]=h.x,l[1]=h.y,l[2]=k.z,A.computeTranslationToOriginAndRotation(h.spatialReference,l,q,d.spatialReference)&&f.setGlobalTransform(b,q)):d.setAltitudeOfTransformation(k.z,q);d=.01/
d.unitInMeters;(x.TESTS_DISABLE_OPTIMIZATIONS||Math.abs(q[12]-g[0])>=d||Math.abs(q[13]-g[1])>=d||Math.abs(q[14]-g[2])>=d)&&f.setGlobalTransform(b,q);return c};u.perObjectElevationAligner=function(b,c,g,d){b=b.stageObject;const f=c.centerPointInElevationSR;let h=0;b.metadata.usesVerticalDistanceToGround?(v.evaluateElevationInfoAtPoint(f,g,c,d,k),J.updateVertexAttributeAuxpos1w(b,k.verticalDistanceToGround),h=k.sampledElevation):(v.evaluateElevationInfoAtPoint(f,g,c,d,k),"absolute-height"!==c.mode&&
(h=k.sampledElevation));c=I.copy(L,b.transformation);g=E.set(G,c[12],c[13],c[14]);x.TESTS_DISABLE_OPTIMIZATIONS?(l[0]=f.x,l[1]=f.y,l[2]=k.z,A.computeTranslationToOriginAndRotation(f.spatialReference,l,c,d.spatialReference)&&(b.transformation=c)):d.setAltitudeOfTransformation(k.z,c);d=.01/d.unitInMeters;if(Math.abs(c[12]-g[0])>=d||Math.abs(c[13]-g[1])>=d||Math.abs(c[14]-g[2])>=d)b.transformation=c;return h};u.perVertexElevationAligner=function(b,c,g,d){b=b.stageObject;const f=b.geometryRecords;let h=
0;for(const n of f){const {update:a,averageGeometrySampledElevation:r}=F(n,c,g,d);h+=r;a&&b.geometryVertexAttrsUpdated(n)}return h/f.length};u.sharedGeometryElevationAligner=function(b,c,g,d){b=b.stageObject;const f=b.geometryRecords;if(0===f.length)return 0;let h=0,n=null,a=0,r=!1;for(const m of f){const e=m.geometry.vertexAttributes.get(B.VertexAttribute.POSITION);if(e!==n){const {update:y,averageGeometrySampledElevation:z}=F(m,c,g,d);a=z;n=e;r=y}r&&b.geometryVertexAttrsUpdated(m);h+=a}return h/
f.length};Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});