"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[6751],{"../web-components/dist/esm/ic-toast-region.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toast_region:()=>ToastRegion});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),ToastRegion=function(){function ToastRegion(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,ToastRegion),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.pendingVisibility=[],this.showToast=function(toast){var visibleToasts=Array.from(document.querySelectorAll("ic-toast")).filter((function(el){return"none"!==window.getComputedStyle(el).display}));-1===visibleToasts.indexOf(toast)&&visibleToasts.length<=0&&toast.setVisible().then((function(res){return _this.previouslyFocused=res})),visibleToasts.length>0&&_this.pendingVisibility.push(toast)},this.openToast=void 0}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.A)(ToastRegion,[{key:"watchOpenToastHandler",value:function watchOpenToastHandler(newValue){void 0!==this.openToast&&(this.showToast(newValue),this.openToast=void 0)}},{key:"handleDismissedToast",value:function handleDismissedToast(){var _a,_this2=this;this.pendingVisibility.length>0?(this.pendingVisibility[0].setVisible().then((function(res){return _this2.previouslyFocused=res})),this.pendingVisibility.shift()):this.previouslyFocused&&"setFocus"in this.previouslyFocused?this.previouslyFocused.setFocus():null===(_a=this.previouslyFocused)||void 0===_a||_a.focus()}},{key:"render",value:function render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{openToast:["watchOpenToastHandler"]}}}]),ToastRegion}()}}]);