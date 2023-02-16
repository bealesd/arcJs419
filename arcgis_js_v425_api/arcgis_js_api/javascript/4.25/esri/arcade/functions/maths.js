// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/languageUtils","../../core/number"],function(p,d,q){function n(g,f,k){if("undefined"===typeof k||0===+k)return Math[g](f);f=+f;k=+k;if(isNaN(f)||"number"!==typeof k||0!==k%1)return NaN;f=f.toString().split("e");f=Math[g](+(f[0]+"e"+(f[1]?+f[1]-k:-k)));f=f.toString().split("e");return+(f[0]+"e"+(f[1]?+f[1]+k:k))}p.registerFunctions=function(g,f){function k(b,c,e){b=d.toNumber(b);return isNaN(b)?b:isNaN(c)||isNaN(e)||c>e?NaN:b<c?c:b>e?e:b}g.number=function(b,c){return f(b,
c,(e,h,a)=>{d.pcCheck(a,1,2,b,c);e=a[0];return d.isNumber(e)?e:null===e?0:d.isDate(e)||d.isBoolean(e)?Number(e):d.isArray(e)?NaN:""===e||void 0===e?Number(e):d.isString(e)?void 0!==a[1]?(a=d.multiReplace(a[1],"\u2030",""),a=d.multiReplace(a,"\u00a4",""),q.parse(e,{pattern:a})):Number(e.trim()):Number(e)})};g.abs=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.abs(d.toNumber(a[0]))})};g.acos=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.acos(d.toNumber(a[0]))})};
g.asin=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.asin(d.toNumber(a[0]))})};g.atan=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.atan(d.toNumber(a[0]))})};g.atan2=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,2,2,b,c);return Math.atan2(d.toNumber(a[0]),d.toNumber(a[1]))})};g.ceil=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,2,b,c);return 2===a.length?(e=d.toNumber(a[1]),isNaN(e)&&(e=0),n("ceil",d.toNumber(a[0]),-1*e)):Math.ceil(d.toNumber(a[0]))})};
g.round=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,2,b,c);return 2===a.length?(e=d.toNumber(a[1]),isNaN(e)&&(e=0),n("round",d.toNumber(a[0]),-1*e)):Math.round(d.toNumber(a[0]))})};g.floor=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,2,b,c);return 2===a.length?(e=d.toNumber(a[1]),isNaN(e)&&(e=0),n("floor",d.toNumber(a[0]),-1*e)):Math.floor(d.toNumber(a[0]))})};g.cos=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.cos(d.toNumber(a[0]))})};g.isnan=function(b,c){return f(b,
c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return"number"===typeof a[0]&&isNaN(a[0])})};g.exp=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.exp(d.toNumber(a[0]))})};g.log=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.log(d.toNumber(a[0]))})};g.pow=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,2,2,b,c);return d.toNumber(a[0])**d.toNumber(a[1])})};g.random=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,0,0,b,c);return Math.random()})};g.sin=function(b,c){return f(b,
c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.sin(d.toNumber(a[0]))})};g.sqrt=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.sqrt(d.toNumber(a[0]))})};g.tan=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return Math.tan(d.toNumber(a[0]))})};g.defaultvalue=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,2,2,b,c);return null===a[0]||""===a[0]||void 0===a[0]?a[1]:a[0]})};g.isempty=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return null===a[0]||""===a[0]||
void 0===a[0]?!0:!1})};g["boolean"]=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,1,1,b,c);return d.toBoolean(a[0])})};g.constrain=function(b,c){return f(b,c,(e,h,a)=>{d.pcCheck(a,3,3,b,c);e=d.toNumber(a[1]);h=d.toNumber(a[2]);if(d.isArray(a[0])){var l=[];for(var m of a[0])l.push(k(m,e,h));return l}if(d.isImmutableArray(a[0])){m=[];for(l=0;l<a[0].length();l++)m.push(k(a[0].get(l),e,h));return m}return k(a[0],e,h)})}};Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});