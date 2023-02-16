// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/screenUtils"],function(q,w){q.euclideanDistance=function(b,a){const f=a.x-b.x;b=a.y-b.y;return Math.sqrt(f*f+b*b)};q.fitCircleLSQ=function(b,a){a?(a.radius=0,a.center.x=0,a.center.y=0):a={radius:0,center:w.createScreenPoint()};if(0===b.length)return a;if(1===b.length)return a.center.x=b[0].x,a.center.y=b[0].y,a;if(2===b.length){const [c,d]=b,[k,l]=[d.x-c.x,d.y-c.y];a.radius=Math.sqrt(k*k+l*l)/2;a.center.x=(c.x+d.x)/2;a.center.y=(c.y+d.y)/2;return a}let f=0,r=0;for(a=
0;a<b.length;a++)f+=b[a].x,r+=b[a].y;f/=b.length;r/=b.length;var n=b.map(c=>c.x-f),t=b.map(c=>c.y-r);let v=a=0;var u=0,p=0,e=0,m=0,g=0;for(var h=0;h<n.length;h++){const c=n[h],d=t[h],k=c*c,l=d*d;a+=k;v+=l;u+=c*d;p+=k*c;e+=l*d;m+=c*l;g+=d*k}n=a;t=u;h=v;p=.5*(p+m);e=.5*(e+g);g=n*h-u*t;m=(p*h-e*t)/g;e=(n*e-u*p)/g;g=w.createScreenPoint(m+f,e+r);return{radius:Math.sqrt(m*m+e*e+(a+v)/b.length),center:g}};q.manhattanDistance=function(b,a){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y)};Object.defineProperty(q,
"__esModule",{value:!0})});