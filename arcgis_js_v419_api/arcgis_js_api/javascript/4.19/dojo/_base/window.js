//>>built
define(["./kernel","./lang","../sniff"],function(a,n,f){var c={global:a.global,doc:a.global.document||null,body:function(b){b=b||a.doc;return b.body||b.getElementsByTagName("body")[0]},setContext:function(b,d){a.global=c.global=b;a.doc=c.doc=d},withGlobal:function(b,d,e,h){var k=a.global;try{return a.global=c.global=b,c.withDoc.call(null,b.document,d,e,h)}finally{a.global=c.global=k}},withDoc:function(b,d,e,h){var k=c.doc,p=f("ie"),g,l;try{a.doc=c.doc=b;a.isQuirks=0;if(f("ie")&&(l=b.parentWindow)&&
l.navigator){var m=parseFloat(l.navigator.appVersion.split("MSIE ")[1])||void 0;(g=b.documentMode)&&5!=g&&Math.floor(m)!=g&&(m=g);a.isIE=f.add("ie",m,!0,!0)}e&&"string"==typeof d&&(d=e[d]);return d.apply(e,h||[])}finally{a.doc=c.doc=k,a.isQuirks=0,a.isIE=f.add("ie",p,!0,!0)}}};n.mixin(a,c);return c});