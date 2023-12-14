"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8536],{"./dist/esm/ic-tab-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_group:()=>TabGroup});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_813020f1_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-813020f1.js"),_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-24f6e762.js"),_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-b2398b37.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var TabGroup=function(){function TabGroup(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabGroup),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.appearance="dark",this.contextId="default",this.inline=!1,this.label=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabGroup,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.label,propName:"label"}],"Tab Group")}},{key:"render",value:function render(){var _class,appearance=this.appearance,label=this.label;return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_813020f1_js__WEBPACK_IMPORTED_MODULE_7__.H,{role:"tablist","aria-label":label,class:(_class={},_class.light=appearance===_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_9__.I.Light,_class.inline=this.inline,_class)},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-horizontal-scroll",{appearance:appearance===_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark?_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_9__.I.Default:appearance,"focus-trigger":"tabFocus"},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"tabs-container"},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null))))}}],[{key:"delegatesFocus",get:function get(){return!0}}]),TabGroup}();TabGroup.style=":host{--border-bottom-color:var(--ic-architectural-300);display:block;margin-bottom:var(--ic-space-md);border-bottom:var(--ic-border-default)}:host(.inline){margin-bottom:0;border-bottom:none}.light{border-bottom:var(--ic-border-width) solid var(--ic-architectural-white)}.tabs-container{display:flex;flex-direction:row}.tabs-container::-webkit-scrollbar{display:none}"}}]);