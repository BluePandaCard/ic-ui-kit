"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[3593],{"../canary-web-components/dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-b5f64263.js");__webpack_require__("../canary-web-components/dist/esm/types-f605c21c.js");const Theme=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.themeChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"themeChange",7),this.checkThemeColorContrast=()=>{(0,_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__.H)()<_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__.J&&(0,_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__.H)()>_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=()=>{if(null!==this.color){let colorRGBA=null;const firstChar=this.color.slice(0,1);"#"===firstChar?colorRGBA=(0,_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.color):"r"===firstChar.toLowerCase()&&(colorRGBA=(0,_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.color)),this.setThemeRGBA(colorRGBA)}},this.setThemeRGBA=colorRGBA=>{if(null!==colorRGBA){const root=document.documentElement;root.style.setProperty("--ic-theme-primary-r",colorRGBA.r.toString()),root.style.setProperty("--ic-theme-primary-g",colorRGBA.g.toString()),root.style.setProperty("--ic-theme-primary-b",colorRGBA.b.toString()),root.style.setProperty("--ic-theme-primary-a",colorRGBA.a.toString()),this.checkThemeColorContrast();const foregroundColor=(0,_helpers_b5f64263_js__WEBPACK_IMPORTED_MODULE_1__.u)();this.themeChange.emit({mode:foregroundColor,color:colorRGBA})}},this.color=null}watchColorPropHandler(){this.setThemeColor()}componentWillLoad(){this.setThemeColor()}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,null)}static get watchers(){return{color:["watchColorPropHandler"]}}}}}]);