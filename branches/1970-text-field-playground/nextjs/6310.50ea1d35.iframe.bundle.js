"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[6310],{"../web-components/dist/esm/ic-accordion-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_accordion_group:()=>AccordionGroup});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-5524955a.js"),accordionGroupIds=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),0),AccordionGroup=function(){function AccordionGroup(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,AccordionGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.accordionGroupId="ic-accordion-group-".concat(accordionGroupIds++),this.handleExpanded=function(){_this.areAllAccordionsOpen?(_this.expanded=!1,_this.accordions.forEach((function(acc){acc.expanded=_this.expanded}))):(_this.expanded=!0,_this.accordions.forEach((function(acc){acc.expanded=_this.expanded}))),_this.setExpandedToAreAllAccordionsOpen()},this.linkAccordions=function(){_this.accordions.forEach((function(accordion){accordion.setAttribute("context-id",_this.accordionGroupId)}))},this.setExpandedToAreAllAccordionsOpen=function(){_this.areAllAccordionsOpen=_this.accordions.every((function(accordion){return!!accordion.expanded}))},this.accordionOpenBtnText=function(){return _this.areAllAccordionsOpen?"Hide all":"See all"},this.accordions=void 0,this.areAllAccordionsOpen=void 0,this.accessibleButtonLabel="accordions",this.appearance="default",this.expanded=!1,this.groupTitle="",this.singleExpansion=!1,this.size="default"}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(AccordionGroup,[{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this,accordionDirectChildren=this.el.children;this.accordions=Array.from(accordionDirectChildren).filter((function(child){return"IC-ACCORDION"===child.tagName})),this.linkAccordions(),this.accordions.forEach((function(acc){acc.appearance=_this2.appearance})),this.accordions.forEach((function(acc){acc.size=_this2.size})),this.expanded?(this.accordions.forEach((function(acc){acc.expanded=!0})),this.setExpandedToAreAllAccordionsOpen()):(this.setExpandedToAreAllAccordionsOpen(),this.expanded=this.areAllAccordionsOpen)}},{key:"handleAccordionClicked",value:function handleAccordionClicked(event){this.singleExpansion?this.accordions.forEach((function(acc){acc.expanded&&event.detail.id!==acc.id&&(acc.expanded=!1)})):this.setExpandedToAreAllAccordionsOpen()}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:(this.singleExpansion?this.accordions[0]:this.allButtonEl).setFocus();case 2:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _this3=this,appearance=this.appearance,size=this.size,groupTitle=this.groupTitle,singleExpansion=this.singleExpansion,accessibleButtonLabel=this.accessibleButtonLabel;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{"context-id":this.accordionGroupId,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"".concat(appearance),!0),"".concat(size),!0),"accordion-group",!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"group-title-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"h4"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("h3",null,(0,_helpers_5524955a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"group-title")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"group-title"}):groupTitle)),!singleExpansion&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{ref:function ref(el){return _this3.allButtonEl=el},appearance:"light"===appearance?"light":"default",onClick:this.handleExpanded,variant:"tertiary","aria-label":"".concat(this.accordionOpenBtnText()," ").concat(accessibleButtonLabel)},this.accordionOpenBtnText())),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}]),AccordionGroup}();AccordionGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}.group-title-container{padding:var(--ic-space-xs);display:flex;justify-content:space-between;align-items:center}:host(.small) .group-title-container{padding:var(--ic-space-xxs) var(--ic-space-xs)}:host(.large) .group-title-container{padding:var(--ic-space-sm) var(--ic-space-xs)}:host(.light){color:var(--ic-architectural-white)}:host(.accordion-group.dark) ::slotted(ic-accordion){color:var(--ic-architectural-white)}'}}]);