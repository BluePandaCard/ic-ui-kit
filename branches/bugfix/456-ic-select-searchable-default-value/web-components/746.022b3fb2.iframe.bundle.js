"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[746],{"./dist/esm/ic-tab-panel.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_panel:()=>TabPanel});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-1500de1f.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var TabPanel=function(){function TabPanel(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabPanel),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.contextId="default",this.tabPosition=void 0,this.panelId=void 0,this.selectedTab=void 0,this.appearance="dark"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabPanel,[{key:"render",value:function render(){var _class,panelId=this.panelId,selectedTab=this.selectedTab,appearance=this.appearance;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class["ic-tab-panel-light"]=appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_8__.I.Light,_class),role:"tabpanel",hidden:void 0===panelId||void 0===selectedTab||!(panelId===selectedTab)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null)))}},{key:"host",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),TabPanel}();TabPanel.style=":host{display:block}:host(.ic-tab-panel-light){color:white}:host([hidden]){display:none}"},"./dist/esm/types-dd515332.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>IcInformationStatus}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);