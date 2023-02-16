// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./has"],function(d,n){function e(a,b,c){return 0===a?0:a*h[b]/h[c]}const h={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5,days:864E5,weeks:6048E5,months:26784E5,years:31536E6,decades:31536E7,centuries:31536E8},k={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",
setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};d.convertTime=e;d.makeUTCTime=function(a,b,c="milliseconds"){b=new Date(e(b,c,"milliseconds"));b.setUTCFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate());
return b};d.offsetDate=function(a,b,c){a=new Date(a.getTime());if(b&&c){const {getter:f,setter:l,multiplier:m}=k[c];if("months"===c){c=a.getFullYear();var g=a.getMonth()+b;c=new Date(c,g+1,1);c.setDate(0);c=c.getDate();a.getDate()>c&&a.setDate(c)}a[l](a[f]()+b*m)}return a};d.offsetDateUTC=function(a,b,c="milliseconds"){a=a.getTime();b=e(b,c,"milliseconds");return new Date(a+b)};d.resetUTCDate=function(a,b){a=new Date(a.getTime());a.setUTCFullYear(b.getFullYear(),b.getMonth(),b.getDate());return a};
d.timeSinceUTCMidnight=function(a,b="milliseconds"){const c=e(a.getUTCHours(),"hours","milliseconds"),g=e(a.getUTCMinutes(),"minutes","milliseconds"),f=e(a.getUTCSeconds(),"seconds","milliseconds");a=a.getUTCMilliseconds();return e(c+g+f+a,"milliseconds",b)};d.truncateDate=function(a,b){switch(b){case "milliseconds":return new Date(a.getTime());case "seconds":return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds());case "minutes":return new Date(a.getFullYear(),
a.getMonth(),a.getDate(),a.getHours(),a.getMinutes());case "hours":return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours());case "days":return new Date(a.getFullYear(),a.getMonth(),a.getDate());case "weeks":return new Date(a.getFullYear(),a.getMonth(),a.getDate()-a.getDay());case "months":return new Date(a.getFullYear(),a.getMonth(),1);case "years":return new Date(a.getFullYear(),0,1);case "decades":return new Date(a.getFullYear()-a.getFullYear()%10,0,1);case "centuries":return new Date(a.getFullYear()-
a.getFullYear()%100,0,1);default:return new Date}};d.truncateLocalTime=function(a){const b=new Date(0);b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0);b.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate());return b};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});