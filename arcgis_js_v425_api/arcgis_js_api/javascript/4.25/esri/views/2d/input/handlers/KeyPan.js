// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],function(k,m,f){f=function(l){function g(b,c,d){var a=l.call(this,!0)||this;a.view=b;a.keys=c;a._pressed=!1;a._keyMap={[c.left]:"left",[c.right]:"right",[c.up]:"up",[c.down]:"down"};a.registerIncoming("key-down",d,h=>a._handleKeyDown(h));a.registerIncoming("key-up",d,h=>a._handleKeyUp(h));a.registerIncoming("blur",d,()=>a._handleBlur());return a}m._inheritsLoose(g,l);var e=g.prototype;e._handleKeyDown=
function(b){b.data.repeat||this._handleKey(b,!0)};e._handleKeyUp=function(b){this._handleKey(b,!1)};e._handleBlur=function(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())};e._handleKey=function(b,c){const d=this._keyMap[b.data.key];if(this._pressed=null!=d){if(c)switch(this.view.mapViewNavigation.begin(),d){case "left":this.view.mapViewNavigation.continousPanLeft();break;case "right":this.view.mapViewNavigation.continousPanRight();break;case "up":this.view.mapViewNavigation.continousPanUp();
break;case "down":this.view.mapViewNavigation.continousPanDown()}else this._pressed=!1,this.view.mapViewNavigation.stop();b.stopPropagation()}};return g}(f.InputHandler);k.KeyPan=f;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});