"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[5335],{"../canary-web-components/dist/esm/ic-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_chip:()=>Chip});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_c3494a07_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-c3494a07.js");__webpack_require__("../canary-web-components/dist/esm/types-f605c21c.js");const Chip=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.dismiss=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"dismiss",7),this.icDismiss=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDismiss",7),this.dismissAction=()=>{this.dismiss.emit(),this.icDismiss.emit()},this.mouseEnterHandler=()=>{this.hovered=!0},this.mouseLeaveHandler=()=>{this.hovered=!1},this.setChipColour=()=>{const colorRGBA=(0,_helpers_c3494a07_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.customColor);if(colorRGBA){const{r,g,b,a}=colorRGBA,foregroundColour=(299*r+587*g+114*b)/1e3>133.3505?"black":"white";this.el.setAttribute("style",`--chip-custom-color: rgba(${r}, ${g}, ${b}, ${a}); --chip-custom-foreground-color: var(--ic-architectural-${foregroundColour})`)}},this.hovered=!1,this.visible=!0,this.appearance=void 0,this.customColor=null,this.disabled=!1,this.dismissible=!1,this.label=void 0,this.size="default",this.transparentBackground=!0,this.variant="filled"}customColorHandler(){this.dismissible||this.setChipColour()}componentWillLoad(){(0,_helpers_c3494a07_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.disabled,this.el),this.dismissible||this.setChipColour(),"outline"===this.appearance&&(this.variant="outlined")}componentDidLoad(){(0,_helpers_c3494a07_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Chip")}handleClick(){this.visible=!this.visible}async setFocus(){var _a;null===(_a=this.el.shadowRoot.querySelector("button"))||void 0===_a||_a.focus()}render(){const{label,appearance,variant,size,dismissible,visible,disabled,hovered}=this;return visible&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{chip:!0,[`${appearance}`]:void 0!==appearance,[`${variant}`]:!0,[`${size}`]:!0,disabled,dismissible,hovered,"white-background":"outlined"===this.variant&&!this.transparentBackground}},(0,_helpers_c3494a07_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label","apply-vertical-margins":!1,class:"label"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,label)),dismissible&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-tooltip",{label:"Dismiss",target:"dismiss-icon",class:{"tooltip-disabled":disabled}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{id:"dismiss-icon",class:"dismiss-icon","aria-label":`Dismiss ${label} chip`,disabled,tabindex:disabled?-1:0,onClick:this.dismissAction,onMouseEnter:this.mouseEnterHandler,onMouseLeave:this.mouseLeaveHandler,innerHTML:'<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n'})),(0,_helpers_c3494a07_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge"}))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{customColor:["customColorHandler"]}}};Chip.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}.chip{display:flex;padding:var(--ic-space-xxs);font-size:0.875rem;border-radius:var(--ic-space-md);text-align:left;text-decoration:none;transition:var(--ic-easing-transition-fast);position:relative}.chip.small{padding:var(--ic-space-xxxs);border-radius:calc(var(--ic-space-md) - var(--ic-space-xxxs))}.chip.large{padding:var(--ic-space-xs);border-radius:calc(var(--ic-space-md) + var(--ic-space-xxs))}.label{padding:0 var(--ic-space-xs)}.chip.hovered:not(:focus-within){background-color:var(--ic-architectural-300)}.chip:focus-within{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);z-index:1}.chip.outline.hovered:not(:focus-within),.chip.outlined.hovered:not(:focus-within){background-color:var(--ic-action-dark-bg-hover)}ic-tooltip:focus-within{z-index:1}.filled{background-color:var(--chip-custom-color, var(--ic-architectural-200));color:var(--chip-custom-foreground-color, black);border:none}.filled.disabled{background-color:var(--ic-architectural-100)}.outline,.outlined{color:var(--ic-architectural-900);border:var(--ic-border-width) solid\n    var(--chip-custom-color, var(--ic-architectural-900));padding:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.outline.small,.outlined.small{padding:calc(var(--ic-space-xxxs) - var(--ic-space-1px))}.outline.large,.outlined.large{padding:calc(var(--ic-space-xs) - var(--ic-space-1px))}.outline.disabled,.outlined.disabled{border:var(--ic-border-disabled);background:none}.chip.disabled ic-typography{color:var(--ic-architectural-500)}.filled.disabled ic-typography{color:var(--ic-architectural-600)}.dismiss-icon{border:none;border-radius:50%;padding:0;background:none;cursor:pointer;margin:var(--ic-space-xxxs);height:calc(var(--ic-space-lg) - var(--ic-space-xxs));width:calc(var(--ic-space-lg) - var(--ic-space-xxs))}.dismiss-icon:focus{outline:var(--ic-hc-focus-outline)}.dismiss-icon[disabled]{pointer-events:none;color:var(--ic-architectural-200)}.icon{padding:var(--ic-space-xxxs);box-sizing:border-box}.icon,ic-tooltip{width:var(--ic-space-lg);height:var(--ic-space-lg)}.chip.disabled path,.chip.disabled ::slotted(svg){fill:var(--ic-architectural-200)}.chip.white-background{background-color:var(--ic-architectural-white)}.chip.white-background.hovered:not(:focus-within){background-color:var(--ic-action-dark-bg-hover-no-alpha) !important}@media (forced-colors: active){.chip{border:var(--ic-hc-border)}.filled.small{padding:calc(var(--ic-space-xxxs) - var(--ic-space-1px))}.filled{padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}.filled.large{padding:calc(var(--ic-space-xs) - var(--ic-space-1px))}.chip.disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.chip.disabled ic-typography{color:GrayText}.chip.disabled path,.chip.disabled ::slotted(svg){fill:GrayText}.chip:focus-within{outline:none;border-color:Highlight}}'}}]);