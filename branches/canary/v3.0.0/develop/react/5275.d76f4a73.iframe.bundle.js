"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[5275],{"../canary-web-components/dist/esm/check-icon-f2346e76.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Check});const Check='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" fill="currentColor"/>\n</svg>\n'},"../canary-web-components/dist/esm/chevron-icon-875b7af2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../canary-web-components/dist/esm/ic-menu-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_menu_item:()=>MenuItem});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-fcc7a364.js"),_check_icon_f2346e76_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../canary-web-components/dist/esm/check-icon-f2346e76.js"),_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../canary-web-components/dist/esm/chevron-icon-875b7af2.js");const MenuItem=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.childBlur=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"childBlur",7),this.handleMenuItemClick=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"handleMenuItemClick",7),this.icToggleChecked=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icToggleChecked",7),this.triggerPopoverMenuInstance=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"triggerPopoverMenuInstance",7),this.handleClick=e=>{(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuTriggerFor)?this.triggerPopoverMenuInstance.emit():"toggle"===this.variant&&(e.preventDefault(),this.checked=!this.checked,this.icToggleChecked.emit({checked:this.checked})),this.handleMenuItemClick.emit(this.el)},this.getMenuItemAriaLabel=()=>{let ariaLabel=this.label;(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.description)&&(ariaLabel=`${ariaLabel}, ${this.description}`),(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.keyboardShortcutLabel)&&(ariaLabel=`${ariaLabel}, ${this.keyboardShortcutLabel}`),"destructive"===this.variant&&(ariaLabel=`${ariaLabel}, destructive`),(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuTriggerFor)&&(ariaLabel=`${ariaLabel}, triggers submenu`),this.el.classList.contains("ic-popover-submenu-back-button")&&(ariaLabel="Go back to parent menu");const parentEl=this.el.parentElement;return"IC-MENU-GROUP"===parentEl.tagName&&parentEl.label?`${ariaLabel}, ${parentEl.label} menu group`:ariaLabel},this.checked=!1,this.description=void 0,this.disabled=!1,this.href=void 0,this.hreflang=void 0,this.keyboardShortcutLabel=void 0,this.label=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.submenuTriggerFor=void 0,this.target=void 0,this.variant="default"}watchDisabledHandler(){(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentWillLoad(){(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuTriggerFor)&&"default"!==this.variant&&(this.variant="default"),(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Menu Item")}handleHostClick(e){this.disabled&&e.stopImmediatePropagation()}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-menu-item-disabled":this.disabled}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{role:"toggle"===this.variant?"menuitemcheckbox":"menuitem","aria-disabled":`${this.disabled}`,"aria-checked":"toggle"===this.variant?this.checked?"true":"false":void 0},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{fullWidth:!0,variant:"tertiary",onClick:this.handleClick,href:(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.href),hreflang:(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.hreflang),target:(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.target),rel:(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.rel),referrerpolicy:void 0!==this.referrerpolicy?this.referrerpolicy:null,"aria-disabled":`${this.disabled}`,"aria-label":this.getMenuItemAriaLabel(),"aria-haspopup":!(!(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuTriggerFor)&&!this.el.classList.contains("ic-popover-submenu-back-button"))&&"menu"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"focus-border"},(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"icon"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)((()=>(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-item-info"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-labels"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"menu-item-label"},this.label),this.keyboardShortcutLabel&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:"shortcut"},this.keyboardShortcutLabel)),this.description&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"menu-item-description",variant:"caption"},this.description))),null),"toggle"===this.variant&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"check-icon":!0,hide:!this.checked},"aria-hidden":"true",innerHTML:_check_icon_f2346e76_js__WEBPACK_IMPORTED_MODULE_2__.C}),(0,_helpers_fcc7a364_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuTriggerFor)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"submenu-icon":!0},"aria-hidden":"true",innerHTML:_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__.C})))))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"]}}};MenuItem.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}li{list-style:none;padding:0}:host ::part(button){color:var(--ic-popover-menu-item-check);padding:calc(var(--ic-space-xxxs) / 2);display:flex;align-items:flex-start;gap:var(--ic-space-xs);border-radius:0;min-height:2.5rem;height:auto}.focus-border{display:flex;align-items:flex-start;gap:var(--ic-space-xs);border-radius:var(--ic-border-radius);margin:calc(var(--ic-space-xxxs) / 2);padding:var(--ic-space-xxs);border:var(--ic-space-xxxs) dashed transparent;--icon-height:auto}:host(.ic-menu-item-disabled) ::part(button){color:var(--ic-popover-menu-item-check-disabled) !important;--ic-typography-color:var(--ic-popover-menu-item-check-disabled) !important;pointer-events:none}:host(.ic-menu-item-disabled) .menu-item-label,:host(.ic-menu-item-disabled) .shortcut,:host(.ic-menu-item-disabled) .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-label-disabled) !important}:host([variant="destructive"]) ::part(button){color:var(--ic-popover-menu-destructive-item-icon);--ic-typography-color:var(--ic-popover-menu-destructive-item-label)}:host ::part(button):hover{background-color:var(--ic-popover-background-hover)}:host ::part(button):focus-visible,:host ::part(button):focus{color:var(--ic-popover-menu-item-icon-focused);--ic-typography-color:purple;background-color:var(--ic-popover-background-focus);box-shadow:none}:host(.ic-menu-item-disabled) ::part(button):focus-visible,:host(.ic-menu-item-disabled) ::part(button):focus{color:var(--ic-popover-menu-item-icon-disabled) !important;--ic-typography-color:orange !important}:host([variant="destructive"]) ::part(button):focus-visible,:host([variant="destructive"]) ::part(button):focus{background-color:var(--ic-popover-destructive-background-focus)}ic-button:focus-within .menu-item-label,ic-button:focus-within .shortcut,ic-button:focus-within .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-label-focused)}:host(.ic-menu-item-disabled) ic-button:focus-within .focus-border{border-color:var(--ic-popover-menu-border)}:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-label,:host(.ic-menu-item-disabled) ic-button:focus-within .shortcut,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-label-disabled) !important}:host ::part(button):active{background-color:var(--ic-popover-background-pressed);color:var(--ic-popover-menu-item-label) !important;--ic-typography-color:var(--ic-popover-menu-item-label) !important}:host([variant="destructive"]) ::part(button):active{background-color:var(--ic-popover-background-pressed);color:var(--ic-popover-menu-destructive-item-label) !important;--ic-typography-color:var(\n    --ic-popover-menu-destructive-item-label\n  ) !important}.menu-item-info{display:flex;flex-direction:column;flex:1;align-items:baseline;white-space:pre-line;text-align:left}.menu-labels{display:flex;align-items:baseline;gap:var(--ic-space-xs)}.menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-description)}.shortcut{--ic-typography-color:var(--ic-popover-menu-item-shortcut);display:flex;flex:min-content}:host([variant="destructive"]) .menu-item-label{text-transform:uppercase;font-weight:600;letter-spacing:0.025em}ic-button:active .menu-item-label{--ic-typography-color:var(--ic-popover-menu-item-label)}ic-button:active .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-description)}ic-button:active .shortcut{--ic-typography-color:var(--ic-popover-menu-item-shortcut)}:host([variant="destructive"]) ic-button:active .menu-item-label{--ic-typography-color:var(\n    --ic-popover-menu-destructive-item-label\n  ) !important}.icon,.check-icon,.submenu-icon,.icon ::slotted(svg),.check-icon svg,.submenu-icon svg{width:var(--ic-space-lg);height:var(--ic-space-lg)}.check-icon.hide{visibility:hidden}@media (forced-colors: active){:host ::part(button){border:canvas}:host ::part(button):focus-visible{outline:var(--ic-space-xxxs) solid transparent}.focus-border{border-color:canvas}:host(.ic-menu-item-disabled) ic-button:focus-within .focus-border{border-color:GrayText}:host(.ic-menu-item-disabled) .menu-item-info,:host(.ic-menu-item-disabled) .menu-item-label,:host(.ic-menu-item-disabled) .shortcut,:host(.ic-menu-item-disabled) .menu-item-description,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-info,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-label,:host(.ic-menu-item-disabled) ic-button:focus-within .shortcut,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-description{--ic-typography-color:GrayText !important}:host(.ic-menu-item-disabled) ::part(button):focus-visible,:host(.ic-menu-item-disabled) ::part(button):focus{outline-color:GrayText !important}}'}}]);