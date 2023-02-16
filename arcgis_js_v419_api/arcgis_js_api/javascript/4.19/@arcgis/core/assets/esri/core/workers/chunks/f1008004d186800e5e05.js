self.webpackChunkRemoteClient([52,62],{145:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(49),i=r(90);const n={inches:Object(i.f)(1,"meters","inches"),feet:Object(i.f)(1,"meters","feet"),"us-feet":Object(i.f)(1,"meters","us-feet"),yards:Object(i.f)(1,"meters","yards"),miles:Object(i.f)(1,"meters","miles"),"nautical-miles":Object(i.f)(1,"meters","nautical-miles"),millimeters:Object(i.f)(1,"meters","millimeters"),centimeters:Object(i.f)(1,"meters","centimeters"),decimeters:Object(i.f)(1,"meters","decimeters"),meters:Object(i.f)(1,"meters","meters"),kilometers:Object(i.f)(1,"meters","kilometers"),"decimal-degrees":1/Object(i.l)(1,"meters",a.b.radius)}},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(1);function a(e){}},175:function(e,t,r){"use strict";function a(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function i(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const r=t||n(e),a=e.valueUnit||"unknown";return"unknown"===r?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return a}))},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return m})),r.d(t,"f",(function(){return j})),r.d(t,"g",(function(){return d}));r(11),r(17),r(1),r(19),r(4),r(18),r(6);var a=r(0),i=(r(9),r(3),r(7),r(15),r(16),r(12),r(2),r(10),r(8),r(171)),n=(r(5),r(13),r(68),r(72),r(101),r(42),r(73),r(74),r(14),r(103),r(48),r(43),r(47),r(45),r(44),r(21),r(76),r(46),r(57),r(58),r(77),r(27),r(69),r(51),r(52),r(49),r(54),r(50),r(84),r(88),r(86),r(85),r(87),r(75),r(53),r(56),r(55)),o=(r(65),r(63),r(62),r(60),r(61),r(67),r(59),r(64),r(78),r(71),r(79),r(80),r(82),r(95),r(89),r(105),r(139),r(150),r(125),r(140),r(151),r(141),r(106),r(118),r(119),r(120),r(152),r(153),r(142),r(154),r(155),r(156),r(143),r(144),r(160),r(161),r(162),r(157),r(163),r(93),r(158),r(164),r(165),r(166),r(83),r(146),r(91),r(66),r(70),r(81),r(94),r(96),r(97),r(100),r(92),r(108),r(121),r(122),r(107),r(130),r(109),r(110),r(98),r(102),r(99),r(111),r(112),r(113),r(114),r(115),r(116),r(117),r(104),r(124),r(123),r(131),r(135),r(136),r(132),r(147),r(148),r(149),r(137),r(138),r(133),r(126),r(127),r(128),r(134),r(159),r(167),r(168)),l=r(175),s=(r(90),r(145));const c=a.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new o.a,p=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function b(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"color"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.ColorVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const o="number"==typeof t,l=o?null:t,s=l&&l.attributes;let u=o?t:null;const p=i.field,{ipData:d,hasExpression:b}=i.cache;let y=i.cache.compiledFunc;if(!p&&!b){const e=i.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(b){if(!Object(a.h)(r)||!Object(a.h)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),o=t.createExecContext(l,n);if(!y){const e=t.createSyntaxTree(i.valueExpression);y=t.createFunction(e),i.cache.compiledFunc=y}u=t.executeFunction(y,o)}else s&&(u=s[p]);const f=i.normalizationField,m=s?parseFloat(s[f]):void 0;if(null!=u&&(!f||o||!isNaN(m)&&0!==m)){isNaN(m)||o||(u/=m);const e=g(u,d);if(e){const t=e[0],o=e[1],l=t===o?i.stops[t].color:n.a.blendColors(i.stops[t].color,i.stops[o].color,e[2],Object(a.h)(r)?r.color:void 0);return new n.a(l)}}}function y(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"opacity"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.OpacityVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof t,o=n?null:t,l=o&&o.attributes;let s=n?t:null;const u=i.field,{ipData:p,hasExpression:d}=i.cache;let b=i.cache.compiledFunc;if(!u&&!d){const e=i.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof s)if(d){if(Object(a.c)(r)||Object(a.c)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),l=t.createExecContext(o,n);if(!b){const e=t.createSyntaxTree(i.valueExpression);b=t.createFunction(e),i.cache.compiledFunc=b}s=t.executeFunction(b,l)}else l&&(s=l[u]);const y=i.normalizationField,f=l?parseFloat(l[y]):void 0;if(null!=s&&(!y||n||!isNaN(f)&&0!==f)){isNaN(f)||n||(s/=f);const e=g(s,p);if(e){const t=e[0],r=e[1];if(t===r)return i.stops[t].opacity;{const a=i.stops[t].opacity;return a+(i.stops[r].opacity-a)*e[2]}}}}function f(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"rotation"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.RotationVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=i.axis||"heading",o="heading"===n&&"arithmetic"===i.rotationType?90:0,l="heading"===n&&"arithmetic"===i.rotationType?-1:1,s="number"==typeof t?null:t,u=s&&s.attributes,p=i.field,{hasExpression:d}=i.cache;let b=i.cache.compiledFunc,y=0;if(!p&&!d)return y;if(d){if(Object(a.c)(r)||Object(a.c)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),o=t.createExecContext(s,n);if(!b){const e=t.createSyntaxTree(i.valueExpression);b=t.createFunction(e),i.cache.compiledFunc=b}y=t.executeFunction(b,o)}else u&&(y=u[p]||0);return y="number"!=typeof y||isNaN(y)?null:o+l*y,y}function m(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"size"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.SizeVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=function(e,t,r,i,n){switch(t.transformationType){case"additive":return function(e,t,r,a){return e+(O(t.minSize,r,a)||t.minDataValue)}(e,t,r,i);case"constant":return function(e,t,r){const a=e.stops;let i=a&&a.length&&a[0].size;return null==i&&(i=e.minSize),O(i,t,r)}(t,r,i);case"clamped-linear":return function(e,t,r,i){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),o=O(t.minSize,r,i),l=O(t.maxSize,r,i),s=Object(a.h)(i)?i.shape:void 0;if(e<=t.minDataValue)return o;if(e>=t.maxDataValue)return l;if("area"===t.scaleBy&&s){const e="circle"===s,t=e?p*(o/2)**2:o*o,r=t+n*((e?p*(l/2)**2:l*l)-t);return e?2*Math.sqrt(r/p):Math.sqrt(r)}return o+n*(l-o)}(e,t,r,i);case"proportional":return function(e,t,r,i){const n=Object(a.h)(i)?i.shape:void 0,o=e/t.minDataValue,l=O(t.minSize,r,i),s=O(t.maxSize,r,i);let c=null;return c="circle"===n?2*Math.sqrt(o*(l/2)**2):"square"===n||"diamond"===n||"image"===n?Math.sqrt(o*l**2):o*l,h(c,l,s)}(e,t,r,i);case"stops":return function(e,t,r,a,i){const[n,o,l]=g(e,i);if(n===o)return O(t.stops[n].size,r,a);{const e=O(t.stops[n].size,r,a);return e+(O(t.stops[o].size,r,a)-e)*l}}(e,t,r,i,n);case"real-world-size":return function(e,t,r,i){const n=(Object(a.h)(i)&&i.resolution?i.resolution:1)*s.a[t.valueUnit],o=O(t.minSize,r,i),l=O(t.maxSize,r,i),{valueRepresentation:c}=t;let u=null;return u="area"===c?2*Math.sqrt(e/p)/n:"radius"===c||"distance"===c?2*e/n:e/n,h(u,o,l)}(e,t,r,i);case"identity":return e;case"unknown":return null}}(function(e,t,r){const i="number"==typeof t,n=i?null:t,o=n&&n.attributes;let s=i?t:null;const{isScaleDriven:u}=e.cache;let p=e.cache.compiledFunc;if(u){const t=Object(a.h)(r)?r.scale:void 0,i=Object(a.h)(r)?r.view:void 0;s=null==t||"3d"===i?function(e){let t=null,r=null;const a=e.stops;return a?(t=a[0].value,r=a[a.length-1].value):(t=e.minDataValue||0,r=e.maxDataValue||0),(t+r)/2}(e):t}else if(!i)switch(e.inputValueType){case"expression":{if(Object(a.c)(r)||Object(a.c)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const t={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},i=r.arcade.arcadeUtils,o=i.getViewInfo(t),l=i.createExecContext(n,o);if(!p){const t=i.createSyntaxTree(e.valueExpression);p=i.createFunction(t),e.cache.compiledFunc=p}s=i.executeFunction(p,l);break}case"field":o&&(s=o[e.field]);break;case"unknown":s=null}if(!Object(l.b)(s))return null;if(i||!e.normalizationField)return s;const d=o?parseFloat(o[e.normalizationField]):null;return Object(l.b)(d)&&0!==d?s/d:null}(i,t,r),i,t,r,i.cache.ipData);return null==n||isNaN(n)?0:n}function O(e,t,r){return null==e?null:Object(l.d)(e)?m(e,t,r):Object(l.b)(e)?e:null}function h(e,t,r){return Object(l.b)(r)&&e>r?r:Object(l.b)(t)&&e<t?t:e}function j(e,t,r){const{isScaleDriven:a}=e.cache;if(!(a&&"3d"===r||t))return null;const i={scale:t,view:r};let n=O(e.minSize,u,i),o=O(e.maxSize,u,i);if(null!=n||null!=o){if(n>o){const e=o;o=n,n=e}return{minSize:n,maxSize:o}}}function g(e,t){if(!t)return;let r=0,a=t.length-1;return t.some((t,i)=>e<t?(a=i,!0):(r=i,!1)),[r,a,(e-t[r])/(t[a]-t[r])]}function w(e,t,r){const a=["proportional","proportional","proportional"];for(const n of e){const e=n.useSymbolValue?"symbol-value":m(n,t,r);switch(n.axis){case"width":a[0]=e;break;case"depth":a[1]=e;break;case"height":a[2]=e;break;case"width-and-depth":a[0]=e,a[1]=e;break;case"all":case void 0:case null:a[0]=e,a[1]=e,a[2]=e;break;default:Object(i.a)(n.axis)}}return a}},218:function(e,t,r){"use strict";var a=r(11),i=(r(17),r(1)),n=(r(19),r(4),r(6),r(0),r(9),r(3),r(7)),o=(r(15),r(16),r(12),r(2),r(10),r(8),r(5),r(13)),l=r(42),s=(r(14),r(43)),c=r(44);r(21);const u=new s.a({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let p=class extends l.b{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=u.toJSON(e)}writePrototype(e,t){t.prototype=Object(i.g)(Object(i.b)(e),!0)}writeThumbnail(e,t){t.thumbnail=Object(i.g)(Object(i.b)(e))}};Object(a.a)([Object(n.d)({json:{write:!0}})],p.prototype,"name",void 0),Object(a.a)([Object(n.d)({json:{write:!0}})],p.prototype,"description",void 0),Object(a.a)([Object(n.d)({json:{read:u.read,write:u.write}})],p.prototype,"drawingTool",void 0),Object(a.a)([Object(c.a)("drawingTool")],p.prototype,"writeDrawingTool",null),Object(a.a)([Object(n.d)({json:{write:!0}})],p.prototype,"prototype",void 0),Object(a.a)([Object(c.a)("prototype")],p.prototype,"writePrototype",null),Object(a.a)([Object(n.d)({json:{write:!0}})],p.prototype,"thumbnail",void 0),Object(a.a)([Object(c.a)("thumbnail")],p.prototype,"writeThumbnail",null),p=Object(a.a)([Object(o.g)("esri.layers.support.FeatureTemplate")],p);var d=p;t.a=d},246:function(e,t,r){"use strict";var a=r(11),i=(r(17),r(1)),n=(r(19),r(4),r(6),r(0),r(9),r(3),r(7)),o=(r(15),r(16),r(12),r(2),r(10),r(8),r(5),r(13)),l=r(42),s=(r(14),r(43),r(47),r(45)),c=r(44),u=(r(21),r(78)),p=(r(71),r(79)),d=r(80),b=(r(82),r(218));let y=class extends l.b{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r in e)if(e.hasOwnProperty(r)){const a=e[r];switch(a.type){case"range":t[r]=d.a.fromJSON(a);break;case"codedValue":t[r]=u.a.fromJSON(a);break;case"inherited":t[r]=p.a.fromJSON(a)}}return t}writeDomains(e,t){const r={};for(const t in e)e.hasOwnProperty(t)&&(r[t]=e[t]&&e[t].toJSON());Object(i.g)(r),t.domains=r}readTemplates(e){return e&&e.map(e=>new b.a(e))}writeTemplates(e,t){t.templates=e&&e.map(e=>e.toJSON())}};Object(a.a)([Object(n.d)({json:{write:!0}})],y.prototype,"id",void 0),Object(a.a)([Object(n.d)({json:{write:!0}})],y.prototype,"name",void 0),Object(a.a)([Object(n.d)({json:{write:!0}})],y.prototype,"domains",void 0),Object(a.a)([Object(s.a)("domains")],y.prototype,"readDomains",null),Object(a.a)([Object(c.a)("domains")],y.prototype,"writeDomains",null),Object(a.a)([Object(n.d)({json:{write:!0}})],y.prototype,"templates",void 0),Object(a.a)([Object(s.a)("templates")],y.prototype,"readTemplates",null),Object(a.a)([Object(c.a)("templates")],y.prototype,"writeTemplates",null),y=Object(a.a)([Object(o.g)("esri.layers.support.FeatureType")],y);var f=y;t.a=f},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(11),i=(r(1),r(0),r(7)),n=(r(5),r(13));r(14),r(21);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return Object(a.a)([Object(i.d)({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=Object(a.a)([Object(n.g)("esri.layers.mixins.CustomParametersMixin")],t),t}},424:function(e,t,r){"use strict";r.r(t);var a=r(11),i=(r(17),r(1)),n=(r(19),r(4)),o=(r(18),r(6),r(0)),l=(r(9),r(3),r(7)),s=(r(15),r(16),r(12),r(2),r(10),r(8)),c=(r(171),r(5),r(13)),u=(r(68),r(72)),p=r(101),d=(r(42),r(73),r(74),r(181),r(14),r(103),r(48),r(43),r(47),r(45)),b=(r(338),r(44)),y=(r(21),r(76),r(46)),f=(r(57),r(58),r(77),r(27),r(69),r(51),r(52),r(49),r(54),r(50)),m=(r(84),r(88),r(86),r(85),r(87),r(75),r(186),r(187),r(174),r(53),r(200),r(247),r(223),r(56),r(55),r(65),r(63),r(62),r(60),r(61),r(67),r(59),r(64),r(78),r(71),r(79),r(80),r(82),r(95),r(89),r(105),r(139),r(150),r(125),r(140),r(151),r(141),r(106),r(118),r(119),r(120),r(152),r(153),r(142),r(154),r(155),r(156),r(143),r(144),r(160),r(161),r(162),r(157),r(163),r(93),r(158),r(164),r(165),r(166),r(83),r(146),r(91),r(66),r(70),r(81),r(94),r(96),r(97),r(100),r(92),r(108),r(121),r(122),r(107)),O=(r(130),r(109),r(110),r(98),r(102),r(99),r(111),r(112),r(113),r(114),r(115),r(116),r(117),r(104),r(124),r(123),r(131),r(135),r(136),r(132),r(147),r(148),r(149),r(137),r(138),r(133),r(126)),h=r(127),j=r(128),g=(r(134),r(159),r(167),r(168)),w=(r(190),r(184)),v=(r(191),r(208),r(220),r(221),r(205),r(206),r(210),r(214),r(226),r(217),r(231),r(232),r(233),r(234),r(227),r(228),r(175),r(90),r(145),r(189),r(236),r(215),r(207),r(245),r(241),r(242),r(225),r(248),r(238),r(239),r(243),r(216),r(201)),S=(r(198),r(222),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(172),r(169),r(209),r(178),r(188)),x=(r(20),r(204),r(173),r(267),r(255),r(283),r(183),r(284),r(280),r(285),r(281)),T=r(193),N=r(179),V=(r(180),r(176),r(22),r(23),r(195),r(237),r(328),r(310),r(319),r(253),r(278),r(289),r(290),r(291),r(292),r(293),r(294),r(302),r(329),r(339),r(224),r(250),r(170)),F=(r(182),r(277)),C=(r(249),r(203)),E=(r(254),r(192)),M=(r(229),r(194));r(235),r(269),r(303),r(304),r(268),r(276),r(219),r(256),r(320),r(218),r(246),r(321),r(211),r(340),r(322),r(341),r(342),r(212),r(282),r(270),r(257),r(197),r(213),r(251);const D=u.a.ofType(g.a);o.a.getLogger("esri.support.GraphicsCollection");let J=class extends D{constructor(e){super(e),this.on("before-add",e=>{e.item||e.preventDefault()}),this.on("after-add",e=>this._own(e.item)),this.on("after-remove",({item:e})=>{e.layer=null})}destroy(){this._unownAll()}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll())}_createNewInstance(e){return new D(e)}_ownAll(){this.items.forEach(e=>this._own(e))}_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_unownAll(){this.items.forEach(e=>this._unown(e))}_unown(e){e.layer===this.owner&&(e.layer=null)}};Object(a.a)([Object(l.d)()],J.prototype,"owner",null),J=Object(a.a)([Object(c.g)("esri.support.GraphicsCollection")],J);var L=J;let z=class extends(Object(C.a)(Object(M.a)(w.a))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new L,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};Object(a.a)([Object(l.d)({type:N.a})],z.prototype,"elevationInfo",void 0),Object(a.a)([Object(l.d)(((e="graphics")=>({type:J,cast:p.a,set(t){const r=Object(p.b)(t,this._get(e),J);r.owner=this,this._set(e,r)}}))())],z.prototype,"graphics",void 0),Object(a.a)([Object(l.d)({type:["show","hide"]})],z.prototype,"listMode",void 0),Object(a.a)([Object(l.d)()],z.prototype,"screenSizePerspectiveEnabled",void 0),Object(a.a)([Object(l.d)({readOnly:!0})],z.prototype,"type",void 0),Object(a.a)([Object(l.d)({constructOnly:!0})],z.prototype,"internal",void 0),z=Object(a.a)([Object(c.g)("esri.layers.GraphicsLayer")],z);var R=z,I=r(429);function _(e){return e.layers.some(e=>null!=e.layerDefinition.visibilityField)}const P=new V.a({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),k=new V.a({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let A=class extends R{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};Object(a.a)([Object(l.d)({readOnly:!0})],A.prototype,"sublayers",null),Object(a.a)([Object(l.d)()],A.prototype,"layer",void 0),Object(a.a)([Object(l.d)({readOnly:!0})],A.prototype,"visibilityMode",void 0),A=Object(a.a)([Object(c.g)("esri.layers.MapNotesLayer.MapNotesSublayer")],A);const G=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new O.a).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new m.a).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new h.a).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new h.a).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new j.a).toJSON()}];let U=class extends(Object(C.a)(Object(M.a)(Object(T.a)(Object(E.a)(Object(S.a)(w.a)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=y.f.WGS84,this.sublayers=new u.a(G.map(e=>new A({id:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!_(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!_(t))return null;const a=t.layers.map(e=>{const t=new F.default;return t.read(e,r),t});return new u.a({items:a})}readLegacyfeatureCollectionJSON(e,t){return _(t)?Object(i.b)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new f.b({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:y.f.WGS84});const r=y.f.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((e,t)=>{const r=t.layerDefinition.extent;return r?f.b.fromJSON(r).union(e):e},new f.b({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?y.f.fromJSON(t.layers[0].layerDefinition.spatialReference):y.f.WGS84}readSublayers(e,t,r){if(_(t))return null;const a=[];for(let e=0;e<t.layers.length;e++){var i;const{layerDefinition:r,featureSet:n}=t.layers[e],o=null!=(i=r.geometryType)?i:n.geometryType,l=G.find(e=>{var t,a,i;return o===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(a=t.renderer)||null==(i=a.symbol)?void 0:i.type)===e.identifyingSymbol.type});if(l){const e=new A({id:l.layerId,title:r.name,layer:this,graphics:n.features.map(({geometry:e,symbol:t,attributes:r,popupInfo:a})=>g.a.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:a}))});a.push(e)}}return new u.a(a)}writeSublayers(e,t,r,a){const{minScale:i,maxScale:l}=this;if(Object(o.c)(e))return;const c=e.some(e=>e.graphics.length>0);var u;if(!this.capabilities.operations.supportsMapNotesEditing)return void(c&&(null==a||null==(u=a.messages)||u.push(new s.a("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let d=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(Object(o.h)(e.geometry)){d=e.geometry.spatialReference.toJSON();break e}for(const t of G){const r=e.find(e=>t.layerId===e.id);this._writeMapNoteSublayer(p,r,t,i,l,d,a)}Object(n.c)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=Object(i.b)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(Object(o.c)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const a of r.graphics)if(Object(o.h)(a.geometry)){const r=a.geometry;e?Object(y.g)(r.spatialReference,e)||(Object(x.a)(r.spatialReference,e)||Object(x.d)()||await Object(x.f)(),a.geometry=Object(x.g)(r,e)):e=r.spatialReference,t.push(a)}const r=await Object(v.a)(t.map(e=>e.geometry));t.forEach((e,t)=>e.geometry=r[t])}_findSublayer(e){var t,r;return Object(o.c)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find(t=>t.id===e))?t:null}_writeMapNoteSublayer(e,t,r,a,n,l,s){const c=[];if(!Object(o.c)(t)){for(const e of t.graphics)this._writeMapNote(c,e,r.geometryType,s);this._normalizeObjectIds(c,P),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:Object(i.b)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:a,maxScale:n,objectIdField:"OBJECTID",fields:[P.toJSON(),k.toJSON()],spatialReference:l},featureSet:{features:c,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,a){if(Object(o.c)(t))return;const{geometry:i,symbol:n,popupTemplate:l}=t;if(Object(o.c)(i))return;var s,u;if(i.type!==r)return void(null==a||null==(s=a.messages)||s.push(new c.a("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(Object(o.c)(n))return void(null==a||null==(u=a.messages)||u.push(new c.a("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:i.toJSON(),symbol:n.toJSON()};Object(o.h)(l)&&(p.popupInfo=l.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let a=Object(I.a)(r,e)+1;const i=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||i.has(e[r]))&&(e[r]=a++),i.add(e[r])}}};Object(a.a)([Object(l.d)({readOnly:!0})],U.prototype,"capabilities",void 0),Object(a.a)([Object(d.a)(["portal-item","web-map"],"capabilities",["layers"])],U.prototype,"readCapabilities",null),Object(a.a)([Object(l.d)({readOnly:!0})],U.prototype,"featureCollections",void 0),Object(a.a)([Object(d.a)(["web-map","portal-item"],"featureCollections",["layers"])],U.prototype,"readFeatureCollections",null),Object(a.a)([Object(l.d)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],U.prototype,"featureCollectionJSON",void 0),Object(a.a)([Object(d.a)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],U.prototype,"readLegacyfeatureCollectionJSON",null),Object(a.a)([Object(l.d)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],U.prototype,"featureCollectionType",void 0),Object(a.a)([Object(l.d)({json:{write:!1}})],U.prototype,"fullExtent",void 0),Object(a.a)([Object(d.a)(["web-map","portal-item"],"fullExtent",["layers"])],U.prototype,"readFullExtent",null),Object(a.a)([Object(l.d)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],U.prototype,"legendEnabled",void 0),Object(a.a)([Object(l.d)({type:["show","hide"]})],U.prototype,"listMode",void 0),Object(a.a)([Object(l.d)({type:Number,nonNullable:!0,json:{write:!1}})],U.prototype,"minScale",void 0),Object(a.a)([Object(d.a)(["web-map","portal-item"],"minScale",["layers"])],U.prototype,"readMinScale",null),Object(a.a)([Object(l.d)({type:Number,nonNullable:!0,json:{write:!1}})],U.prototype,"maxScale",void 0),Object(a.a)([Object(d.a)(["web-map","portal-item"],"maxScale",["layers"])],U.prototype,"readMaxScale",null),Object(a.a)([Object(l.d)({readOnly:!0})],U.prototype,"multipointLayer",null),Object(a.a)([Object(l.d)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],U.prototype,"operationalLayerType",void 0),Object(a.a)([Object(l.d)({readOnly:!0})],U.prototype,"pointLayer",null),Object(a.a)([Object(l.d)({readOnly:!0})],U.prototype,"polygonLayer",null),Object(a.a)([Object(l.d)({readOnly:!0})],U.prototype,"polylineLayer",null),Object(a.a)([Object(l.d)({type:y.f})],U.prototype,"spatialReference",void 0),Object(a.a)([Object(d.a)(["web-map","portal-item"],"spatialReference",["layers"])],U.prototype,"readSpatialReference",null),Object(a.a)([Object(l.d)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],U.prototype,"sublayers",void 0),Object(a.a)([Object(d.a)("web-map","sublayers",["layers"])],U.prototype,"readSublayers",null),Object(a.a)([Object(b.a)("web-map","sublayers")],U.prototype,"writeSublayers",null),Object(a.a)([Object(l.d)({readOnly:!0})],U.prototype,"textLayer",null),Object(a.a)([Object(l.d)()],U.prototype,"title",void 0),Object(a.a)([Object(l.d)({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),U=Object(a.a)([Object(c.g)("esri.layers.MapNotesLayer")],U);var q=U;t.default=q},429:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const a=1;function i(e,t){let r=0;for(const i of t){var a;const t=null==(a=i.attributes)?void 0:a[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}});