"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8254],{"./dist/esm/ic-classification-banner.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_classification_banner:()=>ClassificationBanner});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js");const classificationText={default:"protective marking not set",official:"official","official-sensitive":"official sensitive",secret:"secret","top-secret":"top secret"},ClassificationBanner=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.additionalSelectors="",this.classification="default",this.country="uk",this.inline=!1,this.upTo=!1}render(){const{inline,upTo}=this;let{country,additionalSelectors,classification}=this;return country||(country=""),additionalSelectors||(additionalSelectors=""),(!classification||classification&&!classificationText[classification])&&(classification="default"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{inline}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("banner",{"aria-label":"Protective marking",class:{"classification-banner":!0,[`${classification}`]:classification}},"default"!==classification?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"offscreen"},"The protective marking of this page is:"," "):null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption-uppercase"},"default"===classification?classificationText[classification]:`${upTo?"up to":""} \n               ${country} \n               ${classificationText[classification]} \n               ${additionalSelectors}`)))}};ClassificationBanner.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;left:0;bottom:0;width:100%;height:var(--ic-space-lg);z-index:var(--ic-z-index-classification-banner)}:host(.inline){position:static;left:auto;bottom:auto}.classification-banner{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:var(--ic-space-xxxs) var(--ic-space-md)}.default{background-color:var(--ic-classification-not-set);color:var(--ic-classification-not-set-foreground)}.official,.official-sensitive{background-color:var(--ic-classification-official);color:var(--ic-classification-official-foreground)}.secret{background-color:var(--ic-classification-secret);color:var(--ic-classification-secret-foreground)}.top-secret{background-color:var(--ic-classification-top-secret);color:var(--ic-classification-top-secret-foreground)}.offscreen{position:absolute;left:-9999px;background-color:#fff;color:#000;text-transform:none}@media (forced-colors: active){.classification-banner{border:var(--ic-hc-border)}}'}}]);