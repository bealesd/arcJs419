// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/maybe ../../../../../chunks/mat4 ../../../../../geometry/support/buffer/BufferView ../../lib/Util ../../lib/VertexAttribute".split(" "),function(v,S,K,y,z,x){function L(g,c,a,d){const b=a.typedBuffer;a=a.typedBufferStride;const f=g.length;d*=a;for(let e=0;e<f;++e){const h=2*g[e];b[d]=c[h];b[d+1]=c[h+1];d+=a}}function H(g,c,a,d,b){const f=a.typedBuffer;a=a.typedBufferStride;const e=g.length;d*=a;if(null==b||1===b)for(b=0;b<e;++b){var h=3*g[b];f[d]=c[h];f[d+1]=c[h+
1];f[d+2]=c[h+2];d+=a}else for(h=0;h<e;++h){const k=3*g[h];for(let u=0;u<b;++u)f[d]=c[k],f[d+1]=c[k+1],f[d+2]=c[k+2],d+=a}}function M(g,c,a,d,b=1){const f=a.typedBuffer;a=a.typedBufferStride;const e=g.length;d*=a;if(1===b)for(b=0;b<e;++b){var h=4*g[b];f[d]=c[h];f[d+1]=c[h+1];f[d+2]=c[h+2];f[d+3]=c[h+3];d+=a}else for(h=0;h<e;++h){const k=4*g[h];for(let u=0;u<b;++u)f[d]=c[k],f[d+1]=c[k+1],f[d+2]=c[k+2],f[d+3]=c[k+3],d+=a}}function N(g,c,a,d,b,f=1){if(a){var e=d.typedBuffer;d=d.typedBufferStride;var h=
g.length,k=a[0],u=a[1],A=a[2],B=a[4],C=a[5],D=a[6],E=a[8],F=a[9],G=a[10],r=a[12],p=a[13],l=a[14];b*=d;var m=0,q=0,n=0;a=O(a)?t=>{m=c[t]+r;q=c[t+1]+p;n=c[t+2]+l}:t=>{const w=c[t],I=c[t+1];t=c[t+2];m=k*w+B*I+E*t+r;q=u*w+C*I+F*t+p;n=A*w+D*I+G*t+l};if(1===f)for(f=0;f<h;++f)a(3*g[f]),e[b]=m,e[b+1]=q,e[b+2]=n,b+=d;else for(let t=0;t<h;++t){a(3*g[t]);for(let w=0;w<f;++w)e[b]=m,e[b+1]=q,e[b+2]=n,b+=d}}else H(g,c,d,b,f)}function P(g,c,a,d,b,f=1){if(a){var e=d.typedBuffer;d=d.typedBufferStride;var h=g.length,
k=a[0],u=a[1],A=a[2],B=a[4],C=a[5],D=a[6],E=a[8],F=a[9],G=a[10],r=!K.isOrthoNormal(a);b*=d;var p=0,l=0,m=0;a=O(a)?n=>{p=c[n];l=c[n+1];m=c[n+2]}:n=>{const t=c[n],w=c[n+1];n=c[n+2];p=k*t+B*w+E*n;l=u*t+C*w+F*n;m=A*t+D*w+G*n};if(1===f)if(r)for(f=0;f<h;++f)a(3*g[f]),r=p*p+l*l+m*m,.999999>r&&1E-6<r?(r=1/Math.sqrt(r),e[b]=p*r,e[b+1]=l*r,e[b+2]=m*r):(e[b]=p,e[b+1]=l,e[b+2]=m),b+=d;else for(f=0;f<h;++f)a(3*g[f]),e[b]=p,e[b+1]=l,e[b+2]=m,b+=d;else for(let n=0;n<h;++n){a(3*g[n]);if(r){var q=p*p+l*l+m*m;.999999>
q&&1E-6<q&&(q=1/Math.sqrt(q),p*=q,l*=q,m*=q)}for(q=0;q<f;++q)e[b]=p,e[b+1]=l,e[b+2]=m,b+=d}}else H(g,c,d,b,f)}function Q(g,c,a,d,b,f=1){if(a){var e=d.typedBuffer;d=d.typedBufferStride;var h=g.length,k=a[0],u=a[1],A=a[2],B=a[4],C=a[5],D=a[6],E=a[8],F=a[9],G=a[10];a=!K.isOrthoNormal(a);b*=d;if(1===f)for(f=0;f<h;++f){var r=4*g[f],p=c[r],l=c[r+1],m=c[r+2];r=c[r+3];var q=k*p+B*l+E*m,n=u*p+C*l+F*m;p=A*p+D*l+G*m;a&&(l=q*q+n*n+p*p,.999999>l&&1E-6<l&&(l=1/Math.sqrt(l),q*=l,n*=l,p*=l));e[b]=q;e[b+1]=n;e[b+
2]=p;e[b+3]=r;b+=d}else for(r=0;r<h;++r){q=4*g[r];l=c[q];m=c[q+1];const t=c[q+2];q=c[q+3];n=k*l+B*m+E*t;p=u*l+C*m+F*t;l=A*l+D*m+G*t;a&&(m=n*n+p*p+l*l,.999999>m&&1E-6<m&&(m=1/Math.sqrt(m),n*=m,p*=m,l*=m));for(m=0;m<f;++m)e[b]=n,e[b+1]=p,e[b+2]=l,e[b+3]=q,b+=d}}else M(g,c,d,b,f)}function J(g,c,a,d,b,f=1){var e=d.typedBuffer,h=d.typedBufferStride,k=g.length;b*=h;if(a===c.length&&4===a)for(e[b]=c[0],e[b+1]=c[1],e[b+2]=c[2],e[b+3]=c[3],g=new Uint32Array(d.typedBuffer.buffer,d.start),h/=4,b/=4,c=g[b],b+=
h,k*=f,e=1;e<k;++e)g[b]=c,b+=h;else if(1===f)if(4===a)for(f=0;f<k;++f)a=4*g[f],e[b]=c[a],e[b+1]=c[a+1],e[b+2]=c[a+2],e[b+3]=c[a+3],b+=h;else for(f=0;f<k;++f)a=3*g[f],e[b]=c[a],e[b+1]=c[a+1],e[b+2]=c[a+2],e[b+3]=255,b+=h;else if(4===a)for(a=0;a<k;++a){d=4*g[a];for(var u=0;u<f;++u)e[b]=c[d],e[b+1]=c[d+1],e[b+2]=c[d+2],e[b+3]=c[d+3],b+=h}else for(a=0;a<k;++a)for(d=3*g[a],u=0;u<f;++u)e[b]=c[d],e[b+1]=c[d+1],e[b+2]=c[d+2],e[b+3]=255,b+=h}function R(g,c,a,d,b=1){const f=c.typedBuffer;c=c.typedBufferStride;
d*=c;if(1===b)for(b=0;b<a;++b)f[d]=g[0],f[d+1]=g[1],f[d+2]=g[2],f[d+3]=g[3],d+=c;else for(let e=0;e<a;++e)for(let h=0;h<b;++h)f[d]=g[0],f[d+1]=g[1],f[d+2]=g[2],f[d+3]=g[3],d+=c}function O(g){return 1===g[0]&&0===g[1]&&0===g[2]&&0===g[4]&&1===g[5]&&0===g[6]&&0===g[8]&&0===g[9]&&1===g[10]}v.writeBufferFloat=function(g,c,a,d,b=1){const f=a.typedBuffer;a=a.typedBufferStride;const e=g.length;d*=a;if(1===b)for(b=0;b<e;++b)f[d]=c[g[b]],d+=a;else for(let h=0;h<e;++h){const k=c[g[h]];for(let u=0;u<b;u++)f[d]=
k,d+=a}};v.writeBufferMat3f=function(g,c,a,d){const b=a.typedBuffer;a=a.typedBufferStride;const f=g.length;d*=a;for(let e=0;e<f;++e){const h=9*g[e];for(let k=0;9>k;++k)b[d+k]=c[h+k];d+=a}};v.writeBufferMat4f=function(g,c,a,d){const b=a.typedBuffer;a=a.typedBufferStride;const f=g.length;d*=a;for(let e=0;e<f;++e){const h=16*g[e];for(let k=0;16>k;++k)b[d+k]=c[h+k];d+=a}};v.writeBufferVec2=L;v.writeBufferVec3=H;v.writeBufferVec4=M;v.writeColor=J;v.writeDefaultAttributes=function(g,c,a,d,b,f){for(const k of c.fieldNames){c=
g.vertexAttributes.get(k);var e=g.indices.get(k);if(c&&e)switch(k){case x.VertexAttribute.POSITION:z.assert(3===c.size);var h=b.getField(k,y.BufferViewVec3f);h&&N(e,c.data,a,h,f);break;case x.VertexAttribute.NORMAL:z.assert(3===c.size);(h=b.getField(k,y.BufferViewVec3f))&&P(e,c.data,d,h,f);break;case x.VertexAttribute.UV0:z.assert(2===c.size);(h=b.getField(k,y.BufferViewVec2f))&&L(e,c.data,h,f);break;case x.VertexAttribute.COLOR:z.assert(3===c.size||4===c.size);(h=b.getField(k,y.BufferViewVec4u8))&&
J(e,c.data,c.size,h,f);break;case x.VertexAttribute.SYMBOLCOLOR:z.assert(3===c.size||4===c.size);(h=b.getField(k,y.BufferViewVec4u8))&&J(e,c.data,c.size,h,f);break;case x.VertexAttribute.TANGENT:z.assert(4===c.size),(h=b.getField(k,y.BufferViewVec4f))&&Q(e,c.data,d,h,f)}else k===x.VertexAttribute.OBJECTANDLAYERIDCOLOR&&S.isSome(g.objectAndLayerIdColor)&&4===g.objectAndLayerIdColor.length&&(c=g.indices.get(x.VertexAttribute.POSITION))&&(c=c.length,e=b.getField(k,y.BufferViewVec4u8),R(g.objectAndLayerIdColor,
e,c,f))}};v.writeNormal=P;v.writeObjectAndLayerIdColor=R;v.writePosition=N;v.writeTangent=Q;Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});