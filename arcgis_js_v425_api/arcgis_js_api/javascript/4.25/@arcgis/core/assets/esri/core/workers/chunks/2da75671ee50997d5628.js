"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4017],{40167:(e,t,r)=>{r.d(t,{A:()=>V,B:()=>A,C:()=>U,D:()=>z,E:()=>k,F:()=>q,G:()=>G,H:()=>W,I:()=>Z,J:()=>D,a:()=>d,b:()=>h,c:()=>_,d:()=>p,e:()=>g,f:()=>S,g:()=>B,h:()=>T,i:()=>b,j:()=>m,k:()=>l,l:()=>E,m:()=>O,n:()=>L,o:()=>Y,p:()=>I,q:()=>j,r:()=>M,s:()=>F,t:()=>x,u:()=>w,v:()=>C,w:()=>R,x:()=>P,y:()=>v,z:()=>N});var n=r(47880),s=r(72836),f=r(82426);class i{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=9;class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<16;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=16;class o{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.stride=n,this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=1;class y{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,n.s)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=2;class c{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,s.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;class a{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,f.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=4;class l extends o{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class p extends y{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class d extends c{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class h extends a{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class B extends i{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class T extends i{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class b extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class m extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class E extends o{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class g extends y{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class A extends c{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class S extends a{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f64";class O extends o{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class M extends y{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class w extends c{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class _ extends a{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class L extends o{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class P extends y{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class C extends c{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class F extends a{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u16";class x extends o{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u32";class R extends y{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class v extends c{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class N extends a{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class Y extends o{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class I extends y{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class V extends c{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class U extends a{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class z extends o{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class j extends y{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class k extends c{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class q extends a{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class G extends o{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class W extends y{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class Z extends c{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i32";class D extends a{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32"},34987:(e,t,r)=>{r.d(t,{a:()=>y,b:()=>a,c:()=>u,d:()=>c,f:()=>o});var n=r(82426),s=r(35861),f=r(45087),i=r(72836);function u(e=l){return[e[0],e[1],e[2],e[3]]}function o(e,t,r=u()){return(0,i.c)(r,e),r[3]=t,r}function y(e,t,r=u()){return(0,s.s)(p,e,a(e)),(0,s.s)(d,t,a(t)),(0,s.m)(p,d,p),f=r,i=(0,n.r)((0,s.g)(r,p)),f[3]=i,f;var f,i}function c(e){return e}function a(e){return(0,n.d)(e[3])}const l=[0,0,1,0],p=(0,f.c)(),d=(0,f.c)();u()},84017:(e,t,r)=>{r.d(t,{M:()=>w,a:()=>C,b:()=>P,c:()=>x,g:()=>L,i:()=>_,u:()=>F});var n,s=r(71252),f=r(53785),i=r(16912),u=r(65775),o=r(57532),y=r(26923),c=r(1623),a=r(95587),l=r(29768),p=r(12047),d=r(34250),h=(r(76506),r(91306),r(17533)),B=r(35861),T=r(45087),b=r(72836),m=r(91597),E=r(34987),g=r(40167),A=r(79641),S=r(84661);let O=n=class extends p.wq{constructor(e){super(e),this.origin=(0,b.d)(),this.translation=(0,b.d)(),this.rotation=(0,E.c)(),this.scale=(0,b.f)(1,1,1),this.geographic=!0}get localMatrix(){const e=(0,o.c)();return(0,B.s)(M,(0,E.d)(this.rotation),(0,E.b)(this.rotation)),(0,u.b)(e,M,this.translation,this.scale),e}get localMatrixInverse(){return(0,u.c)((0,o.c)(),this.localMatrix)}applyLocal(e,t){return(0,b.e)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,b.e)(t,e,this.localMatrixInverse)}project(e,t){const r=new Float64Array(e.length),n=g.B.fromTypedArray(r),s=g.B.fromTypedArray(e);if(this.geographic){const e=(0,a.c)(t),f=(0,o.c)();return(0,c.Bm)(t,this.origin,f,e),(0,u.m)(f,f,this.localMatrix),(0,A.t)(n,s,f),(0,c.CM)(r,e,0,r,t,0,r.length/3),r}const{localMatrix:f,origin:i}=this;(0,u.e)(f,o.I)?(0,A.c)(n,s):(0,A.t)(n,s,f);for(let e=0;e<r.length;e+=3)r[e+0]+=i[0],r[e+1]+=i[1],r[e+2]+=i[2];return r}getOriginPoint(e){const[t,r,n]=this.origin;return new m.Z({x:t,y:r,z:n,spatialReference:e})}equals(e){return(0,s.i)(e)&&this.geographic===e.geographic&&(0,b.j)(this.origin,e.origin)&&(0,u.d)(this.localMatrix,e.localMatrix)}clone(){const e={origin:(0,b.k)(this.origin),translation:(0,b.k)(this.translation),rotation:(0,E.c)(this.rotation),scale:(0,b.k)(this.scale),geographic:this.geographic};return new n(e)}};(0,l._)([(0,d.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"origin",void 0),(0,l._)([(0,d.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"translation",void 0),(0,l._)([(0,d.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"rotation",void 0),(0,l._)([(0,d.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"scale",void 0),(0,l._)([(0,d.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],O.prototype,"geographic",void 0),(0,l._)([(0,d.Cb)()],O.prototype,"localMatrix",null),(0,l._)([(0,d.Cb)()],O.prototype,"localMatrixInverse",null),O=n=(0,l._)([(0,h.j)("esri.geometry.support.MeshTransform")],O);const M=(0,T.c)(),w=O;function _(e,t){return e.isGeographic||e.isWebMercator&&(t?.geographic??!0)}function L(e,t,r){return _(t.spatialReference,r)?function(e,t,r){const n=t.spatialReference,f=N(t,r,I),i=new Float64Array(e.position.length),u=function(e,t,r,n){(0,A.t)(g.B.fromTypedArray(n),g.B.fromTypedArray(e),t);const s=new Float64Array(e.length);return(0,S.c)(n,s,r)}(e.position,f,n,i),o=(0,y.n)(U,f),c=function(e,t,r,n,f){if((0,s.a)(r))return null;const i=new Float32Array(r.length);return(0,A.a)(g.a.fromTypedArray(i),g.a.fromTypedArray(r),n),(0,S.d)(i,e,t,f,i),i}(u,i,e.normal,o,n),a=function(e,t,r,n,f){if((0,s.a)(r))return null;const i=new Float32Array(r.length);(0,A.a)(g.a.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),g.a.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n);for(let e=3;e<i.length;e+=4)i[e]=r[e];return(0,S.e)(i,e,t,f,i),i}(u,i,e.tangent,o,n);return{position:u,normal:c,tangent:a}}(e,t,r):function(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z||0,{horizontal:o,vertical:y}=Y(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e+0]=s[e+0]*o+f,n[e+1]=s[e+1]*o+i,n[e+2]=s[e+2]*y+u;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function P(e,t,r){const{position:n,normal:f,tangent:i}=e;if((0,s.a)(t))return{position:n,normal:f,tangent:i};const u=t.localMatrix;return L({position:(0,S.t)(n,new Float64Array(n.length),u),normal:(0,s.i)(f)?(0,S.f)(f,new Float32Array(f.length),u):null,tangent:(0,s.i)(i)?(0,S.g)(i,new Float32Array(i.length),u):null},t.getOriginPoint(r),{geographic:t.geographic})}function C(e,t,r){if(r?.useTransform){const{position:n,normal:s,tangent:f}=e;return{vertexAttributes:{position:n,normal:s,tangent:f},transform:new w({origin:[t.x,t.y,t.z??0],geographic:_(t.spatialReference,r)})}}return{vertexAttributes:L(e,t,r),transform:null}}function F(e,t,r){return _(t.spatialReference,r)?v(e,t,r):R(e,t,r)}function x(e,t,r,n){if((0,s.a)(t))return F(e,r,n);const f=P(e,t,r.spatialReference);return r.equals(t.getOriginPoint(r.spatialReference))?R(f,r,n):_(r.spatialReference,n)?v(f,r,n):R(f,r,n)}function R(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z||0,{horizontal:o,vertical:y}=Y(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e+0]=(s[e+0]-f)/o,n[e+1]=(s[e+1]-i)/o,n[e+2]=(s[e+2]-u)/y;return{position:n,normal:e.normal,tangent:e.tangent}}function v(e,t,r){const n=t.spatialReference;N(t,r,I);const f=(0,u.c)(V,I),i=new Float64Array(e.position.length),o=function(e,t,r,n){const s=(0,S.p)(e,t,n),f=g.B.fromTypedArray(s),i=new Float64Array(s.length),u=g.B.fromTypedArray(i);return(0,A.t)(u,f,r),i}(e.position,n,f,i),c=(0,y.n)(U,f),a=function(e,t,r,n,f){if((0,s.a)(e))return null;const i=(0,S.a)(e,t,r,n,new Float32Array(e.length)),u=g.a.fromTypedArray(i);return(0,A.a)(u,u,f),i}(e.normal,e.position,i,n,c),l=function(e,t,r,n,f){if((0,s.a)(e))return null;const i=(0,S.b)(e,t,r,n,new Float32Array(e.length)),u=g.a.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return(0,A.a)(u,u,f),i}(e.tangent,e.position,i,n,c);return{position:o,normal:a,tangent:l}}function N(e,t,r){(0,c.Bm)(e.spatialReference,[e.x,e.y,e.z||0],r,(0,a.c)(e.spatialReference));const{horizontal:n,vertical:s}=Y(t?t.unit:null,e.spatialReference);return(0,u.g)(r,r,[n,n,s]),r}function Y(e,t){if((0,s.a)(e))return z;const r=t.isGeographic?1:(0,f.e)(t),n=t.isGeographic?1:(0,f.g)(t),i=(0,f.c)(1,e,"meters");return{horizontal:i*r,vertical:i*n}}const I=(0,o.c)(),V=(0,o.c)(),U=(0,i.c)(),z={horizontal:1,vertical:1}},26923:(e,t,r)=>{r.d(t,{f:()=>s,i:()=>o,m:()=>i,n:()=>u,t:()=>f});var n=r(29794);function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function f(e,t){if(e===t){const r=t[1],n=t[2],s=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=s}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function i(e,t,r){const n=t[0],s=t[1],f=t[2],i=t[3],u=t[4],o=t[5],y=t[6],c=t[7],a=t[8],l=r[0],p=r[1],d=r[2],h=r[3],B=r[4],T=r[5],b=r[6],m=r[7],E=r[8];return e[0]=l*n+p*i+d*y,e[1]=l*s+p*u+d*c,e[2]=l*f+p*o+d*a,e[3]=h*n+B*i+T*y,e[4]=h*s+B*u+T*c,e[5]=h*f+B*o+T*a,e[6]=b*n+m*i+E*y,e[7]=b*s+m*u+E*c,e[8]=b*f+m*o+E*a,e}function u(e,t){const r=t[0],n=t[1],s=t[2],f=t[3],i=t[4],u=t[5],o=t[6],y=t[7],c=t[8],a=t[9],l=t[10],p=t[11],d=t[12],h=t[13],B=t[14],T=t[15],b=r*u-n*i,m=r*o-s*i,E=r*y-f*i,g=n*o-s*u,A=n*y-f*u,S=s*y-f*o,O=c*h-a*d,M=c*B-l*d,w=c*T-p*d,_=a*B-l*h,L=a*T-p*h,P=l*T-p*B;let C=b*P-m*L+E*_+g*w-A*M+S*O;return C?(C=1/C,e[0]=(u*P-o*L+y*_)*C,e[1]=(o*w-i*P-y*M)*C,e[2]=(i*L-u*w+y*O)*C,e[3]=(s*L-n*P-f*_)*C,e[4]=(r*P-s*w+f*M)*C,e[5]=(n*w-r*L-f*O)*C,e[6]=(h*S-B*A+T*g)*C,e[7]=(B*E-d*S-T*m)*C,e[8]=(d*A-h*E+T*b)*C,e):null}function o(e){const t=(0,n.g)(),r=e[0],s=e[1],f=e[2],i=e[3],u=e[4],o=e[5],y=e[6],c=e[7],a=e[8];return Math.abs(1-(r*r+i*i+y*y))<=t&&Math.abs(1-(s*s+u*u+c*c))<=t&&Math.abs(1-(f*f+o*o+a*a))<=t}},16912:(e,t,r)=>{function n(){return[1,0,0,0,1,0,0,0,1]}function s(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>s,c:()=>n})},57532:(e,t,r)=>{function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function f(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>i,a:()=>f,b:()=>s,c:()=>n});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},84661:(e,t,r)=>{r.d(t,{a:()=>B,b:()=>S,c:()=>m,d:()=>T,e:()=>O,f:()=>g,g:()=>A,p:()=>b,t:()=>E});var n=r(92143),s=r(71252),f=r(26923),i=r(16912),u=r(57532),o=r(72836),y=r(1623),c=r(95587),a=r(60947),l=r(35132),p=r(40167),d=r(79641);const h=n.L.getLogger("esri.geometry.support.meshUtils.normalProjection");function B(e,t,r,n,s){return w(n)?(M(L.TO_PCPF,p.a.fromTypedArray(e),p.B.fromTypedArray(t),p.B.fromTypedArray(r),n,p.a.fromTypedArray(s)),s):(h.error("Cannot convert spatial reference to PCPF"),s)}function T(e,t,r,n,s){return w(n)?(M(L.FROM_PCPF,p.a.fromTypedArray(e),p.B.fromTypedArray(t),p.B.fromTypedArray(r),n,p.a.fromTypedArray(s)),s):(h.error("Cannot convert to spatial reference from PCPF"),s)}function b(e,t,r){return(0,y.CM)(e,t,0,r,(0,c.c)(t),0,e.length/3),r}function m(e,t,r){return(0,y.CM)(e,(0,c.c)(r),0,t,r,0,e.length/3),t}function E(e,t,r){if((0,s.a)(e))return t;const n=p.B.fromTypedArray(e),f=p.B.fromTypedArray(t);return(0,d.t)(f,n,r),t}function g(e,t,r){if((0,s.a)(e))return t;(0,f.n)(R,r);const n=p.a.fromTypedArray(e),i=p.a.fromTypedArray(t);return(0,d.a)(i,n,R),(0,f.i)(R)||(0,d.n)(i,i),t}function A(e,t,r){if((0,s.a)(e))return t;(0,f.n)(R,r);const n=p.a.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),i=p.a.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if((0,d.a)(i,n,R),(0,f.i)(R)||(0,d.n)(i,i),e!==t)for(let r=3;r<e.length;r+=4)t[r]=e[r];return t}function S(e,t,r,n,s){if(!w(n))return h.error("Cannot convert spatial reference to PCPF"),s;M(L.TO_PCPF,p.a.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),p.B.fromTypedArray(t),p.B.fromTypedArray(r),n,p.a.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function O(e,t,r,n,s){if(!w(n))return h.error("Cannot convert to spatial reference from PCPF"),s;M(L.FROM_PCPF,p.a.fromTypedArray(e,16),p.B.fromTypedArray(t),p.B.fromTypedArray(r),n,p.a.fromTypedArray(s,16));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function M(e,t,r,n,s,i){if(!t)return;const u=r.count,a=(0,c.c)(s);if(_(s))for(let r=0;r<u;r++)n.getVec(r,C),t.getVec(r,F),(0,y.Bm)(a,C,x,a),(0,f.f)(R,x),e===L.FROM_PCPF&&(0,f.t)(R,R),(0,o.t)(F,F,R),i.setVec(r,F);else for(let s=0;s<u;s++){n.getVec(s,C),t.getVec(s,F),(0,y.Bm)(a,C,x,a),(0,f.f)(R,x);const u=(0,l.mZ)(r.get(s,1));let c=Math.cos(u);e===L.TO_PCPF&&(c=1/c),R[0]*=c,R[1]*=c,R[2]*=c,R[3]*=c,R[4]*=c,R[5]*=c,e===L.FROM_PCPF&&(0,f.t)(R,R),(0,o.t)(F,F,R),(0,o.n)(F,F),i.setVec(s,F)}return i}function w(e){return _(e)||function(e){return e.isWebMercator}(e)}function _(e){return e.isWGS84||(0,a.m)(e)||(0,a.f)(e)||(0,a.h)(e)}var L,P;(P=L||(L={}))[P.TO_PCPF=0]="TO_PCPF",P[P.FROM_PCPF=1]="FROM_PCPF";const C=(0,o.d)(),F=(0,o.d)(),x=(0,u.c)(),R=(0,i.c)()},35861:(e,t,r)=>{r.d(t,{c:()=>o,e:()=>c,f:()=>y,g:()=>i,m:()=>u,s:()=>f});var n=r(72836),s=r(29794);function f(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function i(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>(0,s.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function u(e,t,r){const n=t[0],s=t[1],f=t[2],i=t[3],u=r[0],o=r[1],y=r[2],c=r[3];return e[0]=n*c+i*u+s*y-f*o,e[1]=s*c+i*o+f*u-n*y,e[2]=f*c+i*y+n*o-s*u,e[3]=i*c-n*u-s*o-f*y,e}function o(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function y(e,t,r,n){const s=.5*Math.PI/180;t*=s,r*=s,n*=s;const f=Math.sin(t),i=Math.cos(t),u=Math.sin(r),o=Math.cos(r),y=Math.sin(n),c=Math.cos(n);return e[0]=f*o*c-i*u*y,e[1]=i*u*c+f*o*y,e[2]=i*o*y-f*u*c,e[3]=i*o*c+f*u*y,e}const c=r(82426).e;(0,n.d)(),(0,n.f)(1,0,0),(0,n.f)(0,1,0)},45087:(e,t,r)=>{function n(){return[0,0,0,1]}function s(e){return[e[0],e[1],e[2],e[3]]}function f(e,t){return new Float64Array(e,t,4)}r.d(t,{I:()=>i,a:()=>f,b:()=>s,c:()=>n});const i=[0,0,0,1]},47880:(e,t,r)=>{function n(e,t,r){return e[0]=t,e[1]=r,e}function s(e,t){const r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)}function f(e,t,r){const n=t[0],s=t[1];return e[0]=r[0]*n+r[2]*s+r[4],e[1]=r[1]*n+r[3]*s+r[5],e}r.d(t,{d:()=>s,s:()=>n,t:()=>f}),r(29794)},79641:(e,t,r)=>{r.d(t,{a:()=>f,b:()=>o,c:()=>y,f:()=>c,m:()=>n,n:()=>u,s:()=>i,t:()=>s});const n=r(92143).L.getLogger("esri.views.3d.support.buffer.math");function s(e,t,r){if(e.count!==t.count)return void n.error("source and destination buffers need to have the same number of elements");const s=e.count,f=r[0],i=r[1],u=r[2],o=r[4],y=r[5],c=r[6],a=r[8],l=r[9],p=r[10],d=r[12],h=r[13],B=r[14],T=e.typedBuffer,b=e.typedBufferStride,m=t.typedBuffer,E=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*b,r=e*E,n=m[r],s=m[r+1],g=m[r+2];T[t]=f*n+o*s+a*g+d,T[t+1]=i*n+y*s+l*g+h,T[t+2]=u*n+c*s+p*g+B}}function f(e,t,r){if(e.count!==t.count)return void n.error("source and destination buffers need to have the same number of elements");const s=e.count,f=r[0],i=r[1],u=r[2],o=r[3],y=r[4],c=r[5],a=r[6],l=r[7],p=r[8],d=e.typedBuffer,h=e.typedBufferStride,B=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*h,r=e*T,n=B[r],s=B[r+1],b=B[r+2];d[t]=f*n+o*s+a*b,d[t+1]=i*n+y*s+l*b,d[t+2]=u*n+c*s+p*b}}function i(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,f=e.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*f,n=e*u;s[t]=r*i[n],s[t+1]=r*i[n+1],s[t+2]=r*i[n+2]}}function u(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,s=e.typedBufferStride,f=t.typedBuffer,i=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*s,r=e*i,u=f[r],o=f[r+1],y=f[r+2],c=u*u+o*o+y*y;if(c>0){const e=1/Math.sqrt(c);n[t]=e*u,n[t+1]=e*o,n[t+2]=e*y}}}function o(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,f=e.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*f,n=e*u;s[t]=i[n]>>r,s[t+1]=i[n+1]>>r,s[t+2]=i[n+2]>>r}}function y(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,f=t.typedBuffer,i=t.typedBufferStride,u=r?r.count:t.count;let o=(r&&r.dstIndex?r.dstIndex:0)*s,y=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<u;++e)n[o]=f[y],n[o+1]=f[y+1],n[o+2]=f[y+2],o+=s,y+=i}function c(e,t,r,n,s){const f=e.typedBuffer,i=e.typedBufferStride,u=s?.count??e.count;let o=(s?.dstIndex??0)*i;for(let e=0;e<u;++e)f[o]=t,f[o+1]=r,f[o+2]=n,o+=i}}}]);