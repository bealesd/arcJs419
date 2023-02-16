// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../PixelBlock"],function(r,u,l){function I(a){a=a.map(c=>c.mask).filter(c=>u.isSome(c));if(0===a.length)return null;const e=a[0].length,b=new Uint8Array(e);if(1===a.length)return b.set(a[0]),b;let f=a[0],d;for(let c=1;c<a.length;c++){d=a[c];for(let g=0;g<e;g++)b[g]=f[g]|d[g];f=d}return b}function J(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]+d[c];return b}function K(a,e,b){[a]=a;e=l.createEmptyBand("f32",
a.length);e.set(a);return e}function L(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]-d[c];return b}function M(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]*d[c];return b}function v(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=0===d[c]?0:f[c]/d[c];return b}function N(a,e,b){return v(a,e,"f32")}function O(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,
a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=0===d[c]?0:Math.floor(f[c]/d[c]);return b}function P(a,e,b,f){[a]=a;const d=a.length;b=l.createEmptyBand(b,d);for(let c=0;c<d;c++)if(!e||e[c])b[c]=f(a[c]);return b}function Q(a,e,b,f){const [d,c]=a;a=d.length;b=l.createEmptyBand(b,a);for(let g=0;g<a;g++)if(!e||e[g])b[g]=f(d[g],c[g]);return b}function R(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]&d[c];return b}function w(a,e,b){const [f,d]=a;a=f.length;b=
l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]<<d[c];return b}function S(a,e,b){[a]=a;const f=a.length;b=l.createEmptyBand(b,f);for(let d=0;d<f;d++)if(!e||e[d])b[d]=~a[d];return b}function T(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]|d[c];return b}function U(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]>>d[c];return b}function V(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,
a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]^d[c];return b}function W(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]&&d[c]?1:0;return b}function X(a,e,b){[a]=a;const f=a.length;b=l.createEmptyBand(b,f);for(let d=0;d<f;d++)if(!e||e[d])b[d]=a[d]?0:1;return b}function Y(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]||d[c]?1:0;return b}function Z(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,
a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=(f[c]?1:0)^(d[c]?1:0);return b}function aa(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]===d[c]?1:0;return b}function x(a,e,b,f){[a]=a;const d=a.length;b=l.createEmptyBand(b,d);for(let c=0;c<d;c++)if(!e||e[c])b[c]=f**a[c];return b}function ba(a,e,b){return x(a,e,b,10)}function ca(a,e,b){return x(a,e,b,2)}function da(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=
f[c]>d[c]?1:0;return b}function ea(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]>=d[c]?1:0;return b}function fa(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]<d[c]?1:0;return b}function ha(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]<=d[c]?1:0;return b}function ia(a,e,b){[a]=a;a=a.length;b=l.createEmptyBand(b,a);if(!e)return b;for(let f=0;f<
a;f++)b[f]=e[f]?0:1;return b}function ja(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]%d[c];return b}function ka(a,e,b){[a]=a;const f=a.length;b=l.createEmptyBand(b,f);for(let d=0;d<f;d++)if(!e||e[d])b[d]=-a[d];return b}function la(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!e||e[c])b[c]=f[c]===d[c]?0:1;return b}function ma(a,e,b){const [f,d]=a;a=f.length;b=l.createEmptyBand(b,a);const c=new Uint8Array(a);for(let g=
0;g<a;g++)null!=e&&!e[g]||0!==f[g]||(b[g]=d[g],c[g]=255);return{band:b,mask:c}}function na(a,e,b){const [f,d,c]=a;a=f.length;b=l.createEmptyBand(b,a);for(let g=0;g<a;g++)if(!e||e[g])b[g]=f[g]?d[g]:c[g];return b}function y(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;const c=d.length;b=l.createEmptyBand(b,c);b.set(d);for(d=0;d<c;d++)if(!e||e[d])for(let g=1;g<f;g++){const k=a[g];b[d]<k[d]&&(b[d]=k[d])}return b}function z(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;const c=d.length;
b=l.createEmptyBand(b,c);b.set(d);for(d=0;d<c;d++)if(!e||e[d])for(let g=1;g<f;g++){const k=a[g];b[d]>k[d]&&(b[d]=k[d])}return b}function A(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;const c=d.length;b=l.createEmptyBand(b,c);b.set(d);for(d=0;d<c;d++)if(!e||e[d]){let g=b[d];for(let k=1;k<f;k++){const m=a[k];b[d]<m[d]&&(b[d]=m[d]);g>m[d]&&(g=m[d])}b[d]-=g}return b}function B(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;const c=d.length;b=l.createEmptyBand(b,c);b.set(d);for(d=0;d<c;d++)if(!e||
e[d]){for(let g=1;g<f;g++)b[d]+=a[g][d];b[d]/=f}return b}function C(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;const c=d.length;b=l.createEmptyBand(b,c);b.set(d);for(d=0;d<c;d++)if(!e||e[d])for(let g=1;g<f;g++)b[d]+=a[g][d];return b}function D(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;d=d.length;b=l.createEmptyBand(b,d);for(let k=0;k<d;k++)if(!e||e[k]){const m=new Float32Array(f);let p=0;for(var c=0;c<f;c++){var g=a[c];p+=g[k];m[c]=g[k]}p/=f;c=0;for(g=0;g<f;g++)c+=(m[g]-p)*m[g]-
p;b[k]=Math.sqrt(c/f-1)}return b}function E(a,e,b){const f=a.length;if(2>f)return a[0];const d=Math.floor(f/2);var [c]=a;c=c.length;b=l.createEmptyBand(b,c);const g=new Float32Array(f);for(let k=0;k<c;k++)if(!e||e[k]){for(let m=0;m<f;m++)g[m]=a[m][k];g.sort();b[k]=g[d]}return b}function F(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;d=d.length;b=l.createEmptyBand(b,d);const c=new Map;for(let k=0;k<d;k++)if(!e||e[k]){c.clear();let m;for(var g=0;g<f;g++)m=a[g][k],c.set(m,c.has(m)?c.get(m)+1:
1);let p=g=0;for(const q of c.keys())g=c.get(q),g>p&&(p=g,m=q);b[k]=m}return b}function G(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;d=d.length;b=l.createEmptyBand(b,d);const c=new Map;for(let k=0;k<d;k++)if(!e||e[k]){c.clear();let m;for(var g=0;g<f;g++)m=a[g][k],c.set(m,c.has(m)?c.get(m)+1:1);g=0;let p=a.length;for(const q of c.keys())g=c.get(q),g<p&&(p=g,m=q);b[k]=m}return b}function H(a,e,b){const f=a.length;if(2>f)return a[0];var [d]=a;d=d.length;b=l.createEmptyBand(b,d);const c=new Set;
for(let g=0;g<d;g++)if(!e||e[g]){c.clear();let k;for(let m=0;m<f;m++)k=a[m][g],c.add(k);b[g]=c.size}return b}function oa(a,e,b){return F(a,null,b)}function pa(a,e,b){return G(a,null,b)}function qa(a,e,b){return H(a,null,b)}function ra(a,e,b){return y(a,null,b)}function sa(a,e,b){return z(a,null,b)}function ta(a,e,b){return D(a,null,b)}function ua(a,e,b){return C(a,null,b)}function va(a,e,b){return B(a,null,b)}function wa(a,e,b){return E(a,null,b)}function xa(a,e,b){return A(a,null,b)}r.LocalOperator=
void 0;(function(a){a[a.Plus=1]="Plus";a[a.Minus=2]="Minus";a[a.Times=3]="Times";a[a.SquareRoot=4]="SquareRoot";a[a.Power=5]="Power";a[a.ACos=6]="ACos";a[a.ASin=7]="ASin";a[a.ATan=8]="ATan";a[a.ATanH=9]="ATanH";a[a.Abs=10]="Abs";a[a.BitwiseAnd=11]="BitwiseAnd";a[a.BitwiseLeftShift=12]="BitwiseLeftShift";a[a.BitwiseNot=13]="BitwiseNot";a[a.BitwiseOr=14]="BitwiseOr";a[a.BitwiseRightShift=15]="BitwiseRightShift";a[a.BitwiseXOr=16]="BitwiseXOr";a[a.BooleanAnd=17]="BooleanAnd";a[a.BooleanNot=18]="BooleanNot";
a[a.BooleanOr=19]="BooleanOr";a[a.BooleanXOr=20]="BooleanXOr";a[a.Cos=21]="Cos";a[a.CosH=22]="CosH";a[a.Divide=23]="Divide";a[a.EqualTo=24]="EqualTo";a[a.Exp=25]="Exp";a[a.Exp10=26]="Exp10";a[a.Exp2=27]="Exp2";a[a.GreaterThan=28]="GreaterThan";a[a.GreaterThanEqual=29]="GreaterThanEqual";a[a.Int=30]="Int";a[a.IsNull=31]="IsNull";a[a.Float=32]="Float";a[a.LessThan=33]="LessThan";a[a.LessThanEqual=34]="LessThanEqual";a[a.Ln=35]="Ln";a[a.Log10=36]="Log10";a[a.Log2=37]="Log2";a[a.Majority=38]="Majority";
a[a.Max=39]="Max";a[a.Mean=40]="Mean";a[a.Med=41]="Med";a[a.Min=42]="Min";a[a.Minority=43]="Minority";a[a.Mod=44]="Mod";a[a.Negate=45]="Negate";a[a.NotEqual=46]="NotEqual";a[a.Range=47]="Range";a[a.RoundDown=48]="RoundDown";a[a.RoundUp=49]="RoundUp";a[a.SetNull=50]="SetNull";a[a.Sin=51]="Sin";a[a.SinH=52]="SinH";a[a.Square=53]="Square";a[a.Std=54]="Std";a[a.Sum=55]="Sum";a[a.Tan=56]="Tan";a[a.TanH=57]="TanH";a[a.Variety=58]="Variety";a[a.ACosH=59]="ACosH";a[a.ASinH=60]="ASinH";a[a.ATan2=61]="ATan2";
a[a.FloatDivide=64]="FloatDivide";a[a.FloorDivide=65]="FloorDivide";a[a.MajorityIgnoreNoData=66]="MajorityIgnoreNoData";a[a.MaxIgnoreNoData=67]="MaxIgnoreNoData";a[a.MeanIgnoreNoData=68]="MeanIgnoreNoData";a[a.MedIgnoreNoData=69]="MedIgnoreNoData";a[a.MinIgnoreNoData=70]="MinIgnoreNoData";a[a.MinorityIgnoreNoData=71]="MinorityIgnoreNoData";a[a.RangeIgnoreNoData=72]="RangeIgnoreNoData";a[a.StdIgnoreNoData=73]="StdIgnoreNoData";a[a.SumIgnoreNoData=74]="SumIgnoreNoData";a[a.VarietyIgnoreNoData=75]="VarietyIgnoreNoData";
a[a.Con=76]="Con"})(r.LocalOperator||(r.LocalOperator={}));const n=new Map,t=new Map,h=new Map;r.local=function(a,e,b={}){n.size||(n.set(4,Math.sqrt),n.set(6,Math.acos),n.set(7,Math.asin),n.set(8,Math.atan),n.set(9,Math.atanh),n.set(10,Math.abs),n.set(21,Math.cos),n.set(22,Math.cosh),n.set(25,Math.exp),n.set(30,Math.floor),n.set(35,Math.log),n.set(36,Math.log10),n.set(37,Math.log2),n.set(48,Math.floor),n.set(49,Math.ceil),n.set(51,Math.sin),n.set(52,Math.sinh),n.set(56,Math.tan),n.set(57,Math.tanh),
n.set(59,Math.acosh),n.set(60,Math.asinh),n.set(65,Math.floor),t.set(5,Math.pow),t.set(61,Math.atan2),h.set(1,J),h.set(2,L),h.set(3,M),h.set(11,R),h.set(12,w),h.set(12,w),h.set(13,S),h.set(14,T),h.set(15,U),h.set(16,V),h.set(17,W),h.set(18,X),h.set(19,Y),h.set(20,Z),h.set(23,v),h.set(24,aa),h.set(26,ba),h.set(27,ca),h.set(28,da),h.set(29,ea),h.set(31,ia),h.set(32,K),h.set(33,fa),h.set(34,ha),h.set(44,ja),h.set(45,ka),h.set(46,la),h.set(64,N),h.set(65,O),h.set(76,na),h.set(38,F),h.set(39,y),h.set(40,
B),h.set(41,E),h.set(42,z),h.set(43,G),h.set(47,A),h.set(54,D),h.set(55,C),h.set(58,H),h.set(66,oa),h.set(67,ra),h.set(68,va),h.set(69,wa),h.set(70,sa),h.set(71,pa),h.set(72,xa),h.set(73,ta),h.set(74,ua),h.set(75,qa));const f=u.unwrap(I(a)),{processAsMultiband:d,outputPixelType:c="f32"}=b,g=d?a[0].pixels.length:1;b=[];for(let m=0;m<g;m++){const p=a.map(ya=>ya.pixels[m]);let q;if(e===r.LocalOperator.SetNull){var k=ma(p,f,c);q=k.band;k=k.mask}else h.has(e)?q=h.get(e)(p,f,c):n.has(e)?q=P(p,f,c,n.get(e)):
t.has(e)&&(q=Q(p,f,c,t.get(e)));if(null==q)return null;b.push(q)}k||e===r.LocalOperator.IsNull||(k=f);a=a[0];return new l({width:a.width,height:a.height,pixelType:c,mask:k,pixels:b})};r.operandsCount=[0,2,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,999,999,999,999,999,999,2,1,2,999,1,1,1,1,1,1,999,999,1,1,999,1,1,2,2,2,999,999,999,999,999,999,999,999,999,999,3];Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});