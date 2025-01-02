"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7370],{"../web-components/dist/esm/ic-status-tag.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_status_tag:()=>StatusTag});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-638db391.js");const StatusTag=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.announced=!1,this.label=void 0,this.size="medium",this.status="neutral",this.theme="inherit",this.uppercase=!0,this.variant="filled"}componentDidLoad(){(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Status Tag")}render(){const{label,status,variant,size,announced,theme,uppercase}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-theme-${theme}`]:"inherit"!==theme},role:announced?"status":null,"aria-label":"Status"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",{class:{tag:!0,[`${variant}-${status}`]:!0,outlined:"outlined"===variant,[`${size}`]:!0}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:uppercase?"label-uppercase":"label","apply-vertical-margins":!1},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,label))))}};StatusTag.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}.tag{padding:var(--ic-space-xxs) var(--ic-space-sm);font-size:0.875rem;border-radius:var(--ic-space-md);display:inline-block;min-width:2.5rem;text-align:center;--ic-typography-color:var(--ic-status-tag-text)}.small{padding:var(--ic-space-xxxs) var(--ic-space-sm);border-radius:calc(var(--ic-space-md) - var(--ic-space-xxxs))}.large{padding:var(--ic-space-xs) var(--ic-space-sm);border-radius:calc(var(--ic-space-md) + var(--ic-space-xxs))}.filled-neutral{background-color:var(--ic-status-tag-neutral)}.filled-success{background-color:var(--ic-status-tag-success)}.filled-warning{background-color:var(--ic-status-tag-warning);--ic-typography-color:var(--ic-status-tag-text-inverted)}.filled-danger{background-color:var(--ic-status-tag-error)}.outlined{padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))\n    calc(var(--ic-space-sm) - var(--ic-space-1px))}.outlined.small{padding:var(--ic-space-1px) calc(var(--ic-space-sm) - var(--ic-space-1px))}.outlined.large{padding:calc(var(--ic-space-xs) - var(--ic-space-1px))\n    calc(var(--ic-space-sm) - var(--ic-space-1px))}.outlined-neutral{background-color:var(--ic-status-tag-outlined-background-neutral);border:var(--ic-border-width) solid var(--ic-status-tag-outlined-neutral);--ic-typography-color:var(--ic-status-tag-text-inverted)}.outlined-success{background-color:var(--ic-status-tag-outlined-background-success);border:var(--ic-border-width) solid var(--ic-status-tag-outlined-success);--ic-typography-color:var(--ic-status-tag-text-inverted)}.outlined-warning{background-color:var(--ic-status-tag-outlined-background-warning);border:var(--ic-border-width) solid var(--ic-status-tag-outlined-warning);--ic-typography-color:var(--ic-status-tag-text-inverted)}.outlined-danger{background-color:var(--ic-status-tag-outlined-background-error);border:var(--ic-border-width) solid var(--ic-status-tag-outlined-error);--ic-typography-color:var(--ic-status-tag-text-inverted)}@media (forced-colors: active){.tag{border:var(--ic-border-hc);-ms-high-contrast-adjust:none;forced-color-adjust:none}}'}}]);