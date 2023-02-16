// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/languageUtils"],function(h,d){function m(b){let a=0;for(let c=0;c<b.length;c++)a+=b[c];return a/b.length}function n(b){const a=m(b);let c=0;for(let f=0;f<b.length;f++)c+=(a-b[f])**2;return c/b.length}h.calculateStat=function(b,a,c=1E3){switch(b.toLowerCase()){case "distinct":a:{b=[];const f={},k=[];for(let g=0;g<a.length;g++){if(void 0!==a[g]&&null!==a[g]&&a[g]!==d.voidOperation){const e=a[g];if(d.isNumber(e)||d.isString(e))void 0===f[e]&&(b.push(e),f[e]=1);else{let p=
!1;for(let l=0;l<k.length;l++)!0===d.equalityTest(k[l],e)&&(p=!0);!1===p&&(k.push(e),b.push(e))}}if(b.length>=c&&-1!==c){a=b;break a}}a=b}return a;case "avg":case "mean":return m(d.toNumberArray(a));case "min":return Math.min.apply(Math,d.toNumberArray(a));case "sum":a=d.toNumberArray(a);c=0;for(b=0;b<a.length;b++)c+=a[b];return a=c;case "max":return Math.max.apply(Math,d.toNumberArray(a));case "stdev":case "stddev":return Math.sqrt(n(d.toNumberArray(a)));case "var":case "variance":return n(d.toNumberArray(a));
case "count":return a.length}return 0};h.decodeStatType=function(b){switch(b.toLowerCase()){case "distinct":return"distinct";case "avg":case "mean":return"avg";case "min":return"min";case "sum":return"sum";case "max":return"max";case "stdev":case "stddev":return"stddev";case "var":case "variance":return"var";case "count":return"count"}return""};Object.defineProperty(h,"__esModule",{value:!0})});