// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./label2 ./form ./observers ./interactive ./icon".split(" "),function(h,c,k,e,n,p,q){function f(a){return"CALCITE-OPTION"===a.tagName}function l(){"undefined"!==typeof customElements&&["calcite-select","calcite-icon"].forEach(a=>{switch(a){case "calcite-select":customElements.get(a)||customElements.define(a,m);break;case "calcite-icon":customElements.get(a)||q.defineCustomElement()}})}const m=c.proxyCustomElement(class extends c.H{constructor(){super();this.__registerHost();
this.__attachShadow();this.calciteSelectChange=c.createEvent(this,"calciteSelectChange",6);this.required=this.disabled=!1;this.scale="m";this.value=null;this.width="auto";this.componentToNativeEl=new Map;this.mutationObserver=n.createObserver("mutation",()=>this.populateInternalSelect());this.handleInternalSelectChange=()=>{this.selectFromNativeOption(this.selectEl.selectedOptions[0]);requestAnimationFrame(()=>this.emitChangeEvent())};this.populateInternalSelect=()=>{const a=Array.from(this.el.children).filter(b=>
"CALCITE-OPTION"===b.tagName||"CALCITE-OPTION-GROUP"===b.tagName);this.clearInternalSelect();a.forEach(b=>{var d;return null===(d=this.selectEl)||void 0===d?void 0:d.append(this.toNativeElement(b))})};this.storeSelectRef=a=>{this.selectEl=a;this.populateInternalSelect();this.selectFromNativeOption(this.selectEl.selectedOptions[0])};this.emitChangeEvent=()=>{this.calciteSelectChange.emit()}}valueHandler(a){this.el.querySelectorAll("calcite-option").forEach(b=>b.selected=b.value===a)}selectedOptionHandler(a){this.value=
null===a||void 0===a?void 0:a.value}connectedCallback(){var a;const {el:b}=this;null===(a=this.mutationObserver)||void 0===a?void 0:a.observe(b,{subtree:!0,childList:!0});k.connectLabel(this);e.connectForm(this)}disconnectedCallback(){var a;null===(a=this.mutationObserver)||void 0===a?void 0:a.disconnect();k.disconnectLabel(this);e.disconnectForm(this)}componentDidLoad(){var a,b;e.afterConnectDefaultValueSet(this,null!==(b=null===(a=this.selectedOption)||void 0===a?void 0:a.value)&&void 0!==b?b:"")}componentDidRender(){p.updateHostInteraction(this)}async setFocus(){c.focusElement(this.selectEl)}handleOptionOrGroupChange(a){a.stopPropagation();
a=a.target;const b=this.componentToNativeEl.get(a);b&&(this.updateNativeElement(a,b),f(a)&&a.selected&&(this.deselectAllExcept(a),this.selectedOption=a))}onLabelClick(){this.setFocus()}updateNativeElement(a,b){b.disabled=a.disabled;b.label=a.label;f(a)&&(b.selected=a.selected,b.value=a.value,b.innerText=a.label)}clearInternalSelect(){this.componentToNativeEl.forEach(a=>a.remove());this.componentToNativeEl.clear()}selectFromNativeOption(a){if(a){var b;this.componentToNativeEl.forEach((d,g)=>{f(g)&&
d===a&&(g.selected=!0,b=g,this.deselectAllExcept(g))});b&&(this.selectedOption=b)}}toNativeElement(a){if(f(a)){const b=document.createElement("option");this.updateNativeElement(a,b);this.componentToNativeEl.set(a,b);return b}if("CALCITE-OPTION-GROUP"===a.tagName){const b=document.createElement("optgroup");this.updateNativeElement(a,b);Array.from(a.children).forEach(d=>{d=this.toNativeElement(d);b.append(d);this.componentToNativeEl.set(a,d)});this.componentToNativeEl.set(a,b);return b}throw Error("unsupported element child provided");
}deselectAllExcept(a){this.el.querySelectorAll("calcite-option").forEach(b=>{b!==a&&(b.selected=!1)})}renderChevron(){return c.h("div",{class:"icon-container"},c.h("calcite-icon",{class:"icon",icon:"chevron-down",scale:"s"}))}render(){return c.h(c.Fragment,null,c.h("select",{"aria-label":this.label,class:"select",disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},c.h("slot",null)),this.renderChevron(),c.h(e.HiddenFormInputSlot,{component:this}))}get el(){return this}static get watchers(){return{value:["valueHandler"],
selectedOption:["selectedOptionHandler"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale\x3ds]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale\x3ds]) .icon-container{padding-inline:0.5rem}:host([scale\x3dm]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale\x3dm]) .icon-container{padding-inline:0.75rem}:host([scale\x3dl]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale\x3dl]) .icon-container{padding-inline:1rem}:host([width\x3dauto]){inline-size:auto}:host([width\x3dhalf]){inline-size:50%}:host([width\x3dfull]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:inherit;color:var(--calcite-ui-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}select:disabled{border-color:var(--calcite-ui-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:transparent;color:var(--calcite-ui-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},
[1,"calcite-select",{disabled:[516],label:[1],name:[513],required:[516],scale:[513],value:[1025],selectedOption:[1040],width:[513],setFocus:[64]},[[0,"calciteInternalOptionChange","handleOptionOrGroupChange"],[0,"calciteInternalOptionGroupChange","handleOptionOrGroupChange"]]]);l();h.CalciteSelect=m;h.defineCustomElement=l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});