"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[1527],{"../web-components/dist/esm/ic-footer-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer_link:()=>FooterLink});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-1c9151ef.js");const FooterLink=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.deviceSize=_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.footerConfig={small:!1,grouped:!1},this.foregroundColor=(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.download=!1,this.href=null,this.hreflang=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}componentWillLoad(){this.footerConfig=this.inferConfig(this.el)}footerResizeHandler(){this.footerConfig=this.inferConfig(this.el)}footerThemeChangeHandler(ev){const theme=ev.detail;this.foregroundColor=theme.mode}inferConfig(e){return null!==e.parentElement?e.parentElement.classList.contains("ic-footer")?{small:e.parentElement.classList.contains("ic-footer-small"),grouped:e.parentElement.classList.contains("ic-footer-grouped")}:this.inferConfig(e.parentElement):{small:!1,grouped:!1}}render(){const{footerConfig,href,hreflang,referrerpolicy,rel,target,download}=this,{small,grouped}=footerConfig;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"footer-link":!0,[`footer-link-${grouped?"grouped":"ungrouped"}-${small?"small":"sparse"}`]:!0,[`footer-link-${this.foregroundColor}`]:!0},role:"listitem"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-link",{href,hreflang,referrerpolicy,rel,download:!1!==download?download:null,target},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};FooterLink.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.footer-link-ungrouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:2.5rem;--footer-link-margin-bottom:0}:host(.footer-link-ungrouped-small){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-small){--footer-link-margin-left:var(--ic-space-md);--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link){margin-left:var(--footer-link-margin-left);margin-right:var(--footer-link-margin-right);margin-bottom:var(--footer-link-margin-bottom)}.ic-link-open-in-new-icon{vertical-align:middle;margin-left:var(--ic-space-xxs)}.ic-link>.ic-link-open-in-new-icon{fill:var(--ic-color-hyperlink-default)}.ic-link-open-in-new-icon>svg{width:var(--ic-space-md);height:var(--ic-space-md);fill:currentcolor}.ic-link:visited>.ic-link-open-in-new-icon{fill:var(--ic-color-hyperlink-visited)}.ic-link.light:visited>.ic-link-open-in-new-icon{fill:var(--ic-color-hyperlink-contrast-visited)}:host(.breadcrumb-link) .ic-link{display:var(--breadcrumb-link-display);align-items:var(--breadcrumb-link-align-items);gap:var(--breadcrumb-link-gap)}:host(.breadcrumb-link) .ic-link ::slotted(.back-icon){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.breadcrumb-link.current-page) a,:host(.breadcrumb-link.current-page) ::slotted(a){font-weight:normal;color:inherit;text-decoration:none;display:flex;align-items:center}:host(.breadcrumb-link.current-page) .ic-link,:host(.breadcrumb-link.current-page) ::slotted(a:focus){outline:var(--ic-hc-focus-outline);text-decoration:none}:host(.breadcrumb-link.current-page) .ic-link:visited{color:var(--ic-color-text-primary)}:host(.footer-link-light) ::part(link),:host(.footer-link-dark) ::part(link){color:var(--ic-theme-text)}:host(.footer-link-light) ::slotted(svg),:host(.footer-link-dark) ::slotted(svg){fill:var(--ic-theme-text)}@media (forced-colors: active){:host(.footer-link-light) ::slotted(svg),:host(.footer-link-dark) ::slotted(svg){fill:currentcolor}}'}}]);