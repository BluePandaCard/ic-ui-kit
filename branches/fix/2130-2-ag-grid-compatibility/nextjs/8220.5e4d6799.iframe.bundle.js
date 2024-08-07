"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[8220],{"../web-components/dist/esm/ic-toggle-button-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toggle_button_group:()=>ToggleButtonGroup});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),ToggleButtonGroup=function(){function ToggleButtonGroup(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,ToggleButtonGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.keyListener=function(ev){_this.lastKeyPressed={key:ev.key,shift:ev.shiftKey}},this.setSlottedAria=function(el){var btn=el.shadowRoot.querySelector("ic-button").shadowRoot.querySelector("button"),aria=btn.getAttribute("aria-label");aria+=", ",aria+=_this.accessibleLabel,btn.setAttribute("aria-label",aria)},this.handleHostFocus=function(ev){if(_this.loading||_this.disabled)return null;var el=ev.target,relEl=ev.relatedTarget,toggleButtons=Array.from(el.querySelectorAll("ic-toggle-button"));if((toggleButtons.every((function(el){return!el.toggleChecked}))||"single"!==_this.selectType)&&!1===_this.lastKeyPressed.shift||toggleButtons.every((function(el){return!el.toggleChecked}))&&!0===_this.lastKeyPressed.shift&&"IC-TOGGLE-BUTTON-GROUP"==relEl.tagName)toggleButtons[0].focus();else if(!1===_this.lastKeyPressed.shift||!0===_this.lastKeyPressed.shift&&"IC-TOGGLE-BUTTON-GROUP"==relEl.tagName){var toggledButton=toggleButtons.filter((function(el){return el.toggleChecked}));toggledButton[0].focus()}},this.handleKeyDown=function(event){var toggleButtonOptions=_this.getAllToggleButtons(),focussedChild=toggleButtonOptions.indexOf(toggleButtonOptions.filter((function(el){return el===document.activeElement}))[0]);switch(event.key){case"ArrowDown":case"ArrowRight":"auto"===_this.selectMethod?_this.proxySelectHandler(toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!0)]):toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!0)].focus();break;case"ArrowUp":case"ArrowLeft":"auto"===_this.selectMethod?_this.proxySelectHandler(toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!1)]):toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!1)].focus()}},this.getNextItemToSelect=function(currentItem,movingDown){var toggleButtonOptions=_this.getAllToggleButtons(),numToggles=toggleButtonOptions.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numToggles:nextItem>numToggles&&(nextItem=0),toggleButtonOptions[nextItem].disabled&&(nextItem=_this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.lastKeyPressed={key:null,shift:!1},this.accessibleLabel="Toggle button group",this.appearance="default",this.disabled=!1,this.fullWidth=!1,this.iconPlacement=void 0,this.loading=!1,this.selectMethod="manual",this.selectType="single",this.size="default",this.variant="default"}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.A)(ToggleButtonGroup,[{key:"selectHandler",value:function selectHandler(ev,tabTarget){var allToggles=this.getAllToggleButtons(),clickedToggle=ev.target;if(tabTarget&&tabTarget.focus(),"single"===this.selectType)clickedToggle||(clickedToggle=tabTarget),allToggles.forEach((function(el){el.id!==clickedToggle.id&&el.toggleChecked&&(el.toggleChecked=!1)})),this.icChange.emit({toggleChecked:ev.detail.toggleChecked,selectedOption:clickedToggle});else{var toggledOptions=this.getAllToggleButtons().filter((function(el){return el.toggleChecked&&!el.disabled}));this.icChange.emit({toggleChecked:toggledOptions.map((function(opt){return opt.toggleChecked})),toggledOptions:toggledOptions.map((function(opt){return{toggleButton:opt}})),selectedOption:clickedToggle})}}},{key:"componentWillLoad",value:function componentWillLoad(){"multi"===this.selectType&&(this.selectMethod="manual"),document.addEventListener("keydown",this.keyListener)}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;this.getAllToggleButtons().forEach((function(el,i){_this2.setSlottedAria(el),el.size=_this2.size,el.loading=_this2.loading,el.iconPlacement=_this2.iconPlacement,!el.disabled&&(el.disabled=_this2.disabled),el.appearance=_this2.appearance,el.variant=_this2.variant,el.fullWidth=_this2.fullWidth,el.id=i.toString(),el.tabIndex=-1,el.addEventListener("keydown",(function(ev){_this2.handleKeyDown(ev)})),el.classList.add("expand-toggle-group-child")}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){document.removeEventListener("keydown",this.keyListener)}},{key:"proxySelectHandler",value:function proxySelectHandler(toggle){toggle.toggleChecked=!0;var customEv=new CustomEvent("icToggleChecked",{detail:{toggleChecked:toggle.toggleChecked}});this.selectHandler(customEv,toggle)}},{key:"getAllToggleButtons",value:function getAllToggleButtons(){return Array.from(this.el.querySelectorAll("ic-toggle-button"))}},{key:"render",value:function render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"group","aria-label":this.accessibleLabel,"aria-disabled":this.disabled?"true":"false",tabindex:0,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.A)({},"full-width",this.fullWidth),"loading",this.loading),"disabled",this.disabled),"".concat(this.appearance),!0),onFocus:this.handleHostFocus},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}]),ToggleButtonGroup}();ToggleButtonGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:root{display:block}:host{display:flex;flex-direction:row;width:-moz-fit-content;width:fit-content;min-width:-moz-min-content;min-width:min-content;border:var(--ic-border-width) solid var(--ic-action-default);border-radius:var(--ic-border-radius)}:host(.full-width){width:100%;max-width:100%}:host(.loading){min-width:-moz-max-content;min-width:max-content}:host(:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}::slotted(ic-toggle-button){flex-grow:1;width:-moz-min-content;width:min-content;--toggle-button-border:none}::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid var(--ic-action-default)}:host(.disabled){border:var(--ic-border-disabled);pointer-events:none}:host(.disabled) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-disabled)}:host(.dark){border:var(--ic-border-width) solid var(--ic-action-dark)}:host(.dark) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid var(--ic-action-dark)}:host(.light) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid var(--ic-action-light)}:host(.light){border:var(--ic-border-width) solid var(--ic-action-light)}'}}]);