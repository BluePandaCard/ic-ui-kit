"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[7264],{"../web-components/dist/esm/ic-tab-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_group:()=>TabGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_7bf8c67f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-7bf8c67f.js");const TabGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.inline=!1,this.label=void 0,this.monochrome=!1,this.theme="inherit"}componentDidLoad(){(0,_helpers_7bf8c67f_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Tab Group")}render(){const{theme,label,monochrome}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tablist","aria-label":label,class:{"ic-tab-group-inline":this.inline,[`ic-theme-${theme}`]:"inherit"!==theme,"ic-tab-group-monochrome":monochrome}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-horizontal-scroll",{theme:this.theme,"focus-trigger":"tabFocus",monochrome:this.monochrome},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tabs-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}static get delegatesFocus(){return!0}};TabGroup.style=":host{display:block;margin-bottom:var(--ic-space-md);border-bottom:var(--ic-space-1px) solid var(--ic-tab-bottom-border)}:host(.ic-tab-group-monochrome){border-bottom:var(--ic-space-1px) solid\n    var(--ic-tab-bottom-border-monochrome)}:host(.ic-tab-group-inline){margin-bottom:0;border-bottom:none}.tabs-container{display:flex;flex-direction:row}.tabs-container::-webkit-scrollbar{display:none}:host ic-horizontal-scroll{--splitter-color:var(--ic-tab-divider)}:host(.ic-tab-group-monochrome) ic-horizontal-scroll{--splitter-color:var(--ic-tab-divider-monochrome)}"}}]);