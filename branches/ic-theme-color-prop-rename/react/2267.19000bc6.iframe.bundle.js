"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2267],{"../web-components/dist/esm/ic-horizontal-scroll.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_horizontal_scroll:()=>HorizontalScroll});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-638db391.js");const HorizontalScroll=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.buttonStateSet=!1,this.focusHandler=event=>{this.itemFocusHandler(Array.from(this.items).indexOf(event.target))},this.resizeObserverCallback=()=>{this.el.clientWidth>=this.itemsContainerEl.scrollWidth?this.itemOverflow=!1:this.itemOverflow=(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.S)(this.itemsContainerEl),this.itemOverflow&&(this.lastItemVisible=this.itemsContainerEl.offsetWidth+this.itemsContainerEl.scrollLeft>=this.itemsContainerEl.scrollWidth)},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.resizeObserverCallback()})),this.resizeObserver.observe(this.itemsContainerEl)},this.scrollLeft=()=>{this.scrollItemIntoView(this.getCurrentLeftItem()-1)},this.scrollRight=()=>{this.scrollItemIntoView(this.getCurrentLeftItem()+1)},this.longScrollRight=()=>{this.scrollRight(),this.scrollDelay=window.setTimeout(this.longScrollRight,200)},this.longScrollLeft=()=>{this.scrollLeft(),this.scrollDelay=window.setTimeout(this.longScrollLeft,200)},this.leftArrowMouseDownHandler=e=>{e.preventDefault(),this.scrollDelay=window.setTimeout(this.longScrollLeft,200)},this.rightArrowMouseDownHandler=e=>{e.preventDefault(),this.scrollDelay=window.setTimeout(this.longScrollRight,200)},this.arrowMouseUpHandler=()=>{window.clearTimeout(this.scrollDelay)},this.getCurrentLeftItem=()=>{const index=this.itemOffsets.findIndex((el=>el>Math.round(this.itemsContainerEl.scrollLeft)));return index<0?0:index},this.scrollHandler=()=>{window.clearTimeout(this.isScrolling),this.isScrolling=window.setTimeout(this.scrollStopped,50)},this.scrollStopped=()=>{const scrollLeft=Math.round(this.itemsContainerEl.scrollLeft);!1===this.buttonStateSet&&(this.firstItemVisible=0===scrollLeft,this.lastItemVisible=this.itemsContainerEl.offsetWidth+scrollLeft>=this.itemsContainerEl.scrollWidth),this.buttonStateSet=!1},this.firstItemVisible=!0,this.itemOverflow=!1,this.lastItemVisible=!1,this.appearance="default",this.monochrome=!1,this.theme="inherit",this.focusTrigger="focus"}componentWillLoad(){this.itemsContainerEl=this.el.children[0],this.itemsContainerEl.addEventListener("scroll",this.scrollHandler),this.items=(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.z)(this.itemsContainerEl),this.items.forEach((item=>{item.addEventListener&&item.addEventListener(this.focusTrigger,this.focusHandler)}))}componentDidLoad(){let runningTotal=0;this.itemOffsets=this.items.map((item=>(runningTotal+=item.offsetWidth,runningTotal))),(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver);const scrollArrows=Array.from(this.el.shadowRoot.querySelectorAll("div"));["mouseup","mouseleave"].forEach((event=>{scrollArrows.forEach((arrow=>arrow.addEventListener(event,this.arrowMouseUpHandler)))}))}disconnectedCallback(){var _a,_b;void 0!==this.resizeObserver&&this.resizeObserver.disconnect();const scrollArrows=Array.from(this.el.shadowRoot.querySelectorAll("div"));["mouseup","mouseleave"].forEach((event=>{scrollArrows.forEach((arrow=>arrow.removeEventListener(event,this.arrowMouseUpHandler)))})),null===(_a=this.items)||void 0===_a||_a.forEach((item=>{item.removeEventListener&&item.removeEventListener(this.focusTrigger,this.focusHandler)})),null===(_b=this.itemsContainerEl)||void 0===_b||_b.removeEventListener("scroll",this.scrollHandler)}async scrollItemIntoView(itemPosition){this.firstItemVisible=itemPosition<=0;const newScrollPos=itemPosition<=0?0:this.itemOffsets[itemPosition-1];this.lastItemVisible=this.itemsContainerEl.offsetWidth+newScrollPos>=this.itemsContainerEl.scrollWidth,this.buttonStateSet=!0,this.itemsContainerEl.scrollLeft=newScrollPos}itemFocusHandler(itemPosition){this.itemOverflow&&this.scrollItemIntoView(itemPosition)}render(){const{firstItemVisible,lastItemVisible,itemOverflow}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-horizontal-scroll-visible":itemOverflow,"ic-horizontal-scroll-dark":this.appearance===_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark,"ic-horizontal-scroll-light":this.appearance===_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.I.Light,[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-hidden":"true",class:{"scroll-container-left":!0,hidden:!itemOverflow,disabled:firstItemVisible},role:"tab"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{class:"scroll-arrow",variant:"icon-tertiary","aria-label":"Scroll left",theme:"light"===this.theme||"inherit"===this.theme?"dark":"light",monochrome:this.monochrome,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M13.0875 6.175L11.9125 5L6.91251 10L11.9125 15L13.0875 13.825L9.27084 10L13.0875 6.175Z"/>\n</svg>',disabled:firstItemVisible,tabindex:"-1",onClick:this.scrollLeft,onMouseDown:this.leftArrowMouseDownHandler}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"scroll-splitter-left"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-hidden":"true",class:{"scroll-container-right":!0,hidden:!itemOverflow,disabled:lastItemVisible},role:"tab"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"scroll-splitter-right"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{class:"scroll-arrow",variant:"icon-tertiary","aria-label":"Scroll right",theme:"light"===this.theme||"inherit"===this.theme?"dark":"light",monochrome:this.monochrome,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M8.08748 5L6.91248 6.175L10.7291 10L6.91248 13.825L8.08748 15L13.0875 10L8.08748 5Z"/>\n</svg>',disabled:lastItemVisible,tabindex:"-1",onClick:this.scrollRight,onMouseDown:this.rightArrowMouseDownHandler})))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};HorizontalScroll.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--border-bottom-color:var(--ic-architectural-300);--splitter-color:var(--ic-architectural-100);display:flex;max-width:100%}:host(.ic-horizontal-scroll-light){--splitter-color:var(--ic-color-keyline-lighten)}:host(.ic-horizontal-scroll-dark){--splitter-color:var(--ic-color-keyline-darken)}::slotted(*){overflow-x:scroll;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;margin:calc(var(--ic-space-xs) * -1) !important;padding:var(--ic-space-xs) !important}:host(.ic-horizontal-scroll-visible) ::slotted(*){margin:calc(var(--ic-space-xs) * -1) 0 !important;padding:var(--ic-space-xs) !important}.tabs-container::-webkit-scrollbar{display:none}.scroll-container-left,.scroll-container-right{display:flex}.scroll-container-left{margin-left:var(--ic-space-xxs)}.scroll-container-right{margin-right:var(--ic-space-xxs)}.hidden{display:none}.scroll-arrow{margin:var(--ic-space-xxs) 0}.disabled .ic-tooltip-container{display:none !important}.scroll-splitter-left,.scroll-splitter-right{display:flex;height:var(--ic-space-lg);width:var(--ic-space-1px);margin-top:var(--ic-space-xs);border-radius:var(--ic-space-1px);background-color:var(--splitter-color)}.scroll-splitter-left{margin-left:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.scroll-splitter-right{margin-right:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.disabled .scroll-splitter-left,.disabled .scroll-splitter-right{background-color:transparent}:host(.ic-horizontal-scroll-dark) .disabled ic-button>svg,:host(.ic-horizontal-scroll-light) .disabled ic-button>svg{color:var(--splitter-color) !important}'}}]);