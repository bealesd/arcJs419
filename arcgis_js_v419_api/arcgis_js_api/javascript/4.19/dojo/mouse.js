//>>built
define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(m,n,c,p,q){function f(a,g){var l=function(d,b){return n(d,a,function(e){if(g)return g(e,b);if(!p.isDescendant(e.relatedTarget,d))return b.call(this,e)})};l.bubble=function(d){return f(a,function(b,e){var h=d(b.target),k=b.relatedTarget;if(h&&h!=(k&&1==k.nodeType&&d(k)))return e.call(h,b)})};return l}c={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(a,g){return a.button==g},isLeft:function(a){return 0==a.button},isMiddle:function(a){return 1==
a.button},isRight:function(a){return 2==a.button}};m.mouseButtons=c;return{_eventHandler:f,enter:f("mouseover"),leave:f("mouseout"),wheel:"mousewheel",isLeft:c.isLeft,isMiddle:c.isMiddle,isRight:c.isRight}});