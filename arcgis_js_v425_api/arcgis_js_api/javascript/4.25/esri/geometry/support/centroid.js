// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./coordsUtils"],function(q,w){function y(a,f){if(!a||!a.length)return null;const b=[],k=[],e=f?[Infinity,-Infinity,Infinity,-Infinity,Infinity,-Infinity]:[Infinity,-Infinity,Infinity,-Infinity];for(let l=0,d=a.length;l<d;l++){const c=B(a[l],f,e);c&&k.push(c)}k.sort((l,d)=>{let c=l[2]-d[2];0===c&&f&&(c=l[4]-d[4]);return c});k.length&&(b[0]=k[0][0],b[1]=k[0][1],f&&(b[2]=k[0][3]),b[0]<e[0]||b[0]>e[1]||b[1]<e[2]||b[1]>e[3]||f&&(b[2]<e[4]||b[2]>e[5]))&&(b.length=0);if(!b.length)if(a=
a[0]&&a[0].length?C(a[0],f):null)b[0]=a[0],b[1]=a[1],f&&2<a.length&&(b[2]=a[2]);else return null;return b}function B(a,f,b){let k=0,e=0,l=0,d=0,c=0;const g=a.length?a[0][0]:0,p=a.length?a[0][1]:0,n=a.length&&f?a[0][2]:0;for(let x=0;x<a.length;x++){var h=a[x],m=a[(x+1)%a.length];const [t,u,v]=h;var r=t-g;const D=u-p,[F,G,H]=m,z=F-g,E=G-p,A=r*E-z*D;d+=A;k+=(r+z)*A;e+=(D+E)*A;f&&2<h.length&&2<m.length&&(h=v-n,m=H-n,r=r*m-z*h,l+=(h+m)*r,c+=r);t<b[0]&&(b[0]=t);t>b[1]&&(b[1]=t);u<b[2]&&(b[2]=u);u>b[3]&&
(b[3]=u);f&&(v<b[4]&&(b[4]=v),v>b[5]&&(b[5]=v))}0<d&&(d*=-1);0<c&&(c*=-1);if(!d)return null;d*=.5;c*=.5;a=[k/(6*d)+g,e/(6*d)+p,d];f&&(b[4]===b[5]||0===c?(a[3]=(b[4]+b[5])/2,a[4]=0):(a[3]=l/(6*c)+n,a[4]=c));return a}function C(a,f){const b=f?[0,0,0]:[0,0],k=f?[0,0,0]:[0,0];let e=0,l=0,d=0,c=0;for(let p=0,n=a.length;p<n-1;p++){var g=a[p];const h=a[p+1];if(g&&h){b[0]=g[0];b[1]=g[1];k[0]=h[0];k[1]=h[1];f&&2<g.length&&2<h.length&&(b[2]=g[2],k[2]=h[2]);const m=w.getLength(b,k);m&&(e+=m,g=w.getMidpoint(g,
h),l+=m*g[0],d+=m*g[1],f&&2<g.length&&(c+=m*g[2]))}}return 0<e?f?[l/e,d/e,c/e]:[l/e,d/e]:a.length?a[0]:null}const I=1/3;q.extentCentroid=function(a){return a?a.hasZ?[a.xmax-a.xmin/2,a.ymax-a.ymin/2,a.zmax-a.zmin/2]:[a.xmax-a.xmin/2,a.ymax-a.ymin/2]:null};q.lineCentroid=C;q.polygonCentroid=function(a){return a?y(a.rings,a.hasZ??!1):null};q.ringCentroid=B;q.ringsCentroid=y;q.weightedAreaCentroid=function(a){if(!a||!a.rings)return null;({rings:a}=a);let f=0;for(var b=0;b<a.length;b++)f+=w.getRingArea(a[b]);
if(1E-6>f)return y(a,!1);b=[0,0];const k=a[0][0];for(let g=0;g<a.length;g++)a:{let p=void 0;var e=b,l=k,d=a[g];if(!e||!d||3>d.length)break a;var c=d[0];const n=[0,0],h=[d[1][0]-c[0],d[1][1]-c[1]];for(let m=2;m<d.length;m++)n[0]=d[m][0]-c[0],n[1]=d[m][1]-c[1],p=.5*I*(n[0]*h[1]-n[1]*h[0]),e[0]+=p*(h[0]+n[0]),e[1]+=p*(h[1]+n[1]),h[0]=n[0],h[1]=n[1];d=w.getRingArea(d);c=[c[0],c[1]];c[0]-=l[0];c[1]-=l[1];c[0]*=d;c[1]*=d;e[0]+=c[0];e[1]+=c[1]}b[0]*=1/f;b[1]*=1/f;b[0]+=k[0];b[1]+=k[1];return b};Object.defineProperties(q,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});