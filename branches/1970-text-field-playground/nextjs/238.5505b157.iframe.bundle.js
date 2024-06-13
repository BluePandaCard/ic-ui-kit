"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[238],{"../web-components/dist/esm/ic-radio-option.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_option:()=>RadioOption});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-5524955a.js"),RadioOption=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function RadioOption(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,RadioOption),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.icCheck=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icCheck",7),this.radioOptionSelect=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"radioOptionSelect",7),this.icSelectedChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icSelectedChange",7),this.defaultRadioValue="",this.hasAdditionalField=!1,this.skipFocus=!1,this.handleClick=function(){_this.disabled||(!1===_this.skipFocus&&_this.radioElement.focus(),_this.skipFocus=!1,_this.hasAdditionalField&&(_this.value=_this.el.querySelector("ic-text-field").value||_this.defaultRadioValue),_this.icCheck.emit({value:_this.value}),_this.radioOptionSelect.emit({value:_this.value}))},this.swallowClick=function(event){event.stopPropagation()},this.handleFormReset=function(){_this.skipFocus=!0,_this.selected=_this.initiallySelected},this.additionalFieldDisplay="static",this.disabled=!1,this.dynamicText="This selection requires additional answers",this.form=void 0,this.formaction=void 0,this.formenctype=void 0,this.formmethod=void 0,this.formnovalidate=void 0,this.formtarget=void 0,this.groupLabel=void 0,this.label=void 0,this.name=void 0,this.value=void 0,this.selected=!1,this.initiallySelected=this.selected}var _setTabIndex,_setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(RadioOption,[{key:"watchSelectedHandler",value:function watchSelectedHandler(){this.icSelectedChange.emit()}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.m)(this.el,this.handleFormReset)}},{key:"componentWillLoad",value:function componentWillLoad(){if((0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"additional-field")){this.hasAdditionalField=!0;var textField=this.el.querySelector("ic-text-field");textField&&(textField.hiddenInput=!1)}this.defaultRadioValue=this.value,(0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.l)(this.el,this.handleFormReset),(0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.j)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.value,propName:"value"}],"Radio Option")}},{key:"componentWillRender",value:function componentWillRender(){var hasSlot=(0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"additional-field");if(hasSlot&&!this.hasAdditionalField){this.hasAdditionalField=!0;var textField=this.el.querySelector("ic-text-field");textField&&(textField.hiddenInput=!1)}else!hasSlot&&this.hasAdditionalField&&(this.hasAdditionalField=!1)}},{key:"componentDidRender",value:function componentDidRender(){if("static"===this.additionalFieldDisplay){var textfield=this.el.querySelector("ic-text-field");this.selected?null==textfield||textfield.removeAttribute("disabled"):null==textfield||textfield.setAttribute("disabled","")}}},{key:"textfieldValueHandler",value:function textfieldValueHandler(event){this.selected&&(this.value=event.detail.value||this.defaultRadioValue,this.icCheck.emit({value:this.value}),this.radioOptionSelect.emit({value:this.value})),event.stopImmediatePropagation()}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){var _a;return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.radioElement)||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"setTabIndex",value:(_setTabIndex=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee2(value){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.radioElement.tabIndex=value;case 1:case"end":return _context2.stop()}}),_callee2,this)}))),function setTabIndex(_x){return _setTabIndex.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,additionalFieldDisplay=this.additionalFieldDisplay,disabled=this.disabled,dynamicText=this.dynamicText,form=this.form,formaction=this.formaction,formenctype=this.formenctype,formmethod=this.formmethod,formnovalidate=this.formnovalidate,formtarget=this.formtarget,groupLabel=this.groupLabel,handleClick=this.handleClick,hasAdditionalField=this.hasAdditionalField,label=this.label,name=this.name,selected=this.selected,swallowClick=this.swallowClick,value=this.value,id="ic-radio-option-".concat((0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.d)(label)||value,"-").concat(groupLabel);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{onClick:handleClick,class:{disabled}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"container",!0),"disabled",disabled)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("input",{role:"radio",tabindex:selected?"0":"-1",type:"radio",name,id,value,disabled:!!disabled||null,checked:selected,ref:function ref(el){return _this2.radioElement=el},form,formaction,formenctype,formmethod,formnovalidate,formtarget}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"checkmark"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{class:"radio-label",variant:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("label",{htmlFor:id},label))),hasAdditionalField&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{onClick:swallowClick,class:{"dynamic-container":!0,hidden:"dynamic"===additionalFieldDisplay&&!selected}},"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"branch-corner"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",null,"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"caption"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("p",{class:"dynamic-text"},dynamicText)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"additional-field-wrapper":"static"===additionalFieldDisplay}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"additional-field"})))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{selected:["watchSelectedHandler"]}}}]),RadioOption}());RadioOption.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}:host([additional-field-display="static"]) ::slotted(ic-text-field){margin-top:calc(var(--ic-space-sm) / 2);margin-left:var(--ic-space-xl)}:host(.disabled){color:var(--ic-architectural-200)}.container input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus)}.container{display:grid;grid-template-columns:min-content auto;position:relative;cursor:pointer;align-items:center;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs)}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-architectural-white);border:var(--ic-border-default);border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{background-color:var(--ic-action-default-bg-hover-no-alpha);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:var(--ic-border-width) solid var(--ic-action-default)}.container:active input~.checkmark{background-color:var(--ic-action-default-bg-active-no-alpha);border:var(--ic-border-width) solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark{background-color:var(--ic-action-default-bg-active);border:0.125rem solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark::after{background-color:var(--ic-action-default-active)}.container input:checked~.checkmark{border:0.125rem solid var(--ic-action-default)}.container input:checked:disabled~.checkmark{background-color:var(--ic-architectural-white);border:0.125rem solid var(--ic-architectural-200)}.container input:disabled~.checkmark{border:var(--ic-border-width) dashed var(--ic-architectural-200)}.container input:disabled~.checkmark::after{background:var(--ic-architectural-200)}.container:hover input:disabled~.checkmark{background-color:var(--ic-architectural-white);box-shadow:none;border:0.125rem solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-architectural-200)}.container .checkmark::after{content:"";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-action-default)}.radio-label{margin-left:var(--ic-space-md)}.additional-field-wrapper{margin-left:var(--ic-space-xs)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default);margin-left:calc(-1 * var(--ic-space-1px))}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-action-default);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.container input:checked~.checkmark,.container:active input:checked~.checkmark{border-color:Highlight}.container input:checked~.checkmark::after,.container:active input:checked~.checkmark::after{background-color:Highlight}.container input:disabled~.checkmark,.container input:checked:disabled~.checkmark{border-color:GrayText}.container input:disabled~.checkmark::after,.container:active input:disabled~.checkmark::after{background-color:GrayText}}'}}]);