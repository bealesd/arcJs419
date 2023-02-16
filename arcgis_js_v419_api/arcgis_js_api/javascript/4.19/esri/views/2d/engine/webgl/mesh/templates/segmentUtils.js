// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/maybe","./util"],function(u,M,K,y){function E(c){return c.length-1}function F(c){let e=0;for(let a=0;a<E(c);a++)e+=L(c,a);return e}function L(c,e,a=1){const [b,d]=c[e+1];return Math.sqrt(b*b+d*d)*a}function G(c,e,a,b,d){if(!(a<e)){var m=b.clone().seek(a/2);K.isNone(m)||(c(m.clone(),a,d),a=(a-e)/2,m=K.unwrap(m.seek(e/2)),G(c,e,a,b,d+1),G(c,e,a,m,d+1))}}let H=function(){function c(a,b,d,m,g){this._segments=
a;this._index=b;this._distance=d;this._xStart=m;this._yStart=g;this._done=!1}c.create=function(a){return new c(a,0,0,a[0][0],a[0][1])};var e=c.prototype;e.clone=function(){return new c(this._segments,this._index,this._distance,this.xStart,this.yStart)};e.equals=function(a){return this._index===a._index||a._index===this._index-1&&(0===this._distance||1===a._distance)||a._index===this._index+1&&(1===this._distance||0===a._distance)};e.leq=function(a){return this._index<a._index||this._index===a._index&&
this._distance<=a._distance};e.geq=function(a){return this._index>a._index||this._index===a._index&&this._distance>=a._distance};e.hasPrev=function(){return 0<=this._index-1};e.hasNext=function(){return this._index+1<E(this._segments)};e.next=function(){if(!this.hasNext())return null;this._xStart+=this.dx;this._yStart+=this.dy;this._distance=0;this._index+=1;return this};e.prev=function(){if(!this.hasPrev())return this._done=!0,null;--this._index;this._xStart-=this.dx;this._yStart-=this.dy;this._distance=
1;return this};e._seekBackwards=function(a,b){var d=this.backwardLength;if(a<=d)return this._distance=(d-a)/this.length,this;for(d=this.backwardLength;this.prev();){if(d+this.length>a)return this._seekBackwards(a-d);d+=this.length}this._distance=0;return b?this:null};e.seek=function(a,b=!1){if(0>a)return this._seekBackwards(Math.abs(a),b);if(a<=this.remainingLength)return this._distance=(this.backwardLength+a)/this.length,this;let d=this.remainingLength;for(;this.next();){if(d+this.length>a)return this.seek(a-
d,b);d+=this.length}this._distance=1;return b?this:null};M._createClass(c,[{key:"_segment",get:function(){return this._segments[this._index+1]}},{key:"angle",get:function(){const a=this.dy;let b=Math.acos((0*a+-1*-this.dx)/(1*this.length));0<a&&(b=2*Math.PI-b);return b}},{key:"xStart",get:function(){return this._xStart}},{key:"yStart",get:function(){return this._yStart}},{key:"x",get:function(){return this.xStart+this.distance*this.dx}},{key:"y",get:function(){return this.yStart+this.distance*this.dy}},
{key:"dx",get:function(){return this._segment[0]}},{key:"dy",get:function(){return this._segment[1]}},{key:"xMidpoint",get:function(){return this.xStart+.5*this.dx}},{key:"yMidpoint",get:function(){return this.yStart+.5*this.dy}},{key:"xEnd",get:function(){return this.xStart+this.dx}},{key:"yEnd",get:function(){return this.yStart+this.dy}},{key:"length",get:function(){const {dx:a,dy:b}=this;return Math.sqrt(a*a+b*b)}},{key:"remainingLength",get:function(){return this.length*(1-this._distance)}},{key:"backwardLength",
get:function(){return this.length*this._distance}},{key:"distance",get:function(){return this._distance}},{key:"done",get:function(){return this._done}}]);return c}();u.SegmentCursor=H;u.pathDivide=function(c,e,a){const b=F(c);c=H.create(c);const d=b/2,m=Math.floor((b-e)/2/e);c.seek(d-m*e);for(let g=-m;g<=m;g++)512>c.x&&0<=c.x&&512>c.y&&0<=c.y&&a(c.clone(),g,d+g*e,b),c.seek(e)};u.pathLength=F;u.pathSubdivide=function(c,e,a){G(a,e,F(c),H.create(c),0)};u.segmentAt=function(c,e){return c[e+1]};u.segmentCount=
E;u.segmentLength=L;u.smoothPaths=function(c,e){for(let C=0;C<c.length;C++){var a=c[C];const v=[];v.push(a[0]);for(var b=1;b<a.length;b++){let [h,f]=v[b-1];h+=a[b][0];f+=a[b][1];v.push([h,f])}a:{a=v;b=e;if(0>=b)break a;const h=a.length;if(3>h)break a;const f=[];var d=0;f.push(0);for(var m=1;m<h;m++)d+=y.dist(a[m],a[m-1]),f.push(d);b=Math.min(b,.2*d);d=[];d.push(a[0][0]);d.push(a[0][1]);m=a[h-1][0];const I=a[h-1][1];var g=y.sub([0,0],a[0],a[1]);y.normalize(g);a[0][0]+=b*g[0];a[0][1]+=b*g[1];y.sub(g,
a[h-1],a[h-2]);y.normalize(g);a[h-1][0]+=b*g[0];a[h-1][1]+=b*g[1];for(g=1;g<h;g++)f[g]+=b;f[h-1]+=b;g=.5*b;for(let n=1;n<h-1;n++){let x=0,J=0,D=0;for(var k=n-1;0<=k&&!(f[k+1]<f[n]-g);k--){var q=g+f[k+1]-f[n],p=f[k+1]-f[k],l=f[n]-f[k]<g?1:q/p;if(1E-6>Math.abs(l))break;var t=l*l,z=l*q-.5*t*p,w=l*p/b,r=a[k+1],A=a[k][0]-r[0],B=a[k][1]-r[1];x+=w/z*(r[0]*l*q+.5*t*(q*A-p*r[0])-t*l*p*A/3);J+=w/z*(r[1]*l*q+.5*t*(q*B-p*r[1])-t*l*p*B/3);D+=w}for(k=n+1;k<h&&!(f[k-1]>f[n]+g);k++){q=g-f[k-1]+f[n];p=f[k]-f[k-1];
l=f[k]-f[n]<g?1:q/p;if(1E-6>Math.abs(l))break;t=l*l;z=l*q-.5*t*p;w=l*p/b;r=a[k-1];A=a[k][0]-r[0];B=a[k][1]-r[1];x+=w/z*(r[0]*l*q+.5*t*(q*A-p*r[0])-t*l*p*A/3);J+=w/z*(r[1]*l*q+.5*t*(q*B-p*r[1])-t*l*p*B/3);D+=w}d.push(x/D);d.push(J/D)}d.push(m);d.push(I);for(let n=0,x=0;n<h;n++)a[n][0]=d[x++],a[n][1]=d[x++]}a=[];a.push(v[0]);for(b=1;b<v.length;b++){const [h,f]=v[b-1],[I,n]=v[b];a.push([Math.round(I-h),Math.round(n-f)])}c[C]=a}return c};Object.defineProperty(u,"__esModule",{value:!0})});