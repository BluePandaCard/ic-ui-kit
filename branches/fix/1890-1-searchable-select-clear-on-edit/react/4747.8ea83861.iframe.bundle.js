"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4747],{"../web-components/dist/esm/OpenInNew-cdeed5ce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>OpenInNew});const OpenInNew='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>'},"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-navigation-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_item:()=>NavigationItem});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-e594bfc6.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js"),_OpenInNew_cdeed5ce_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/OpenInNew-cdeed5ce.js");const NavigationItem=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.childBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"childBlur",7),this.navItemClicked=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"navItemClicked",7),this.isInitialRender=!0,this.hostMutationObserver=null,this.ANIMATION_DURATION=parseInt((0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.y)("--ic-transition-duration-slow"))||0,this.ARIA_LABEL_STRING="aria-label",this.displayDefaultNavigationItem=(href,hreflang,target,rel,referrerpolicy,download,label)=>{const variant=this.isTopNavChild||this.inTopNavSideMenu?"body":"label",ChevronIconComponent=this.expandable&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{svg:!0},innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__.C}),IconComponent=this.el.querySelector('[slot="icon"]')&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"}),(0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge"}));return""!==href?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href,target,rel,hreflang,referrerPolicy:referrerpolicy,download:!1!==download?download:null,class:"link",ref:el=>this.itemEl=el,part:"link","aria-label":this.ariaLabel?this.ariaLabel:null},IconComponent,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant},label),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"chevron-container"},ChevronIconComponent),"_blank"===target&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"open-in-new-icon",innerHTML:_OpenInNew_cdeed5ce_js__WEBPACK_IMPORTED_MODULE_3__.O})):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{tabindex:"0",class:"link",ref:el=>this.itemEl=el},IconComponent,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant},label),ChevronIconComponent)},this.topNavResizedHandler=({detail})=>{var _a;const{size}=detail;size!==this.deviceSize&&(this.deviceSize=size,this.inTopNavSideMenu=size<=((null===(_a=this.parentEl)||void 0===_a?void 0:_a.customMobileBreakpoint)||_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.D.L))},this.sideNavExpandHandler=({detail})=>{const{sideNavExpanded,sideNavMobile}=detail;this.sideNavExpanded=sideNavExpanded,this.isSideNavMobile=sideNavMobile,this.sideNavToggleTooltip(!(sideNavExpanded||sideNavMobile))},this.handleBlur=({relatedTarget})=>{null!==relatedTarget&&"IC-NAVIGATION-ITEM"===relatedTarget.tagName||this.childBlur.emit()},this.handleClick=()=>{this.navItemClicked.emit()},this.hostMutationCallback=mutationList=>{let forceComponentUpdate=!1;mutationList.forEach((({attributeName})=>{attributeName===this.ARIA_LABEL_STRING&&(this.ariaLabel=this.el.getAttribute(attributeName),forceComponentUpdate=!0)})),forceComponentUpdate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.generateTooltipLabel=()=>this.label?this.label:this.navigationSlot?this.navigationSlot.textContent:this.el.children[0]?this.el.children[0].textContent:"",this.renderNavigationItemContent=()=>this.label?this.displayDefaultNavigationItem(this.href,this.hreflang,this.target,this.rel,this.referrerpolicy,this.download,this.label):this.navigationSlot?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"navigation-item"}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.sideNavToggleTooltip=showTooltip=>{const tooltip=this.el.shadowRoot.querySelector("ic-tooltip");let timer;tooltip&&(showTooltip?(tooltip.displayTooltip(!1),timer=setTimeout((()=>{tooltip.classList.add("tooltip-navigation-item-side-nav-collapsed")}),this.ANIMATION_DURATION)):(clearTimeout(timer),tooltip.classList.remove("tooltip-navigation-item-side-nav-collapsed")))},this.deviceSize=_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.focusStyle=(0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.inTopNavSideMenu=!1,this.isSideNavMobile=!1,this.isTopNavChild=!1,this.navigationType=void 0,this.parentEl=void 0,this.sideNavExpanded=!1,this.ariaLabel="",this.collapsedIconLabel=!1,this.displayNavigationTooltip=!1,this.download=!1,this.expandable=!1,this.href="",this.hreflang=void 0,this.label=void 0,this.rel=void 0,this.referrerpolicy=void 0,this.selected=!1,this.target=void 0,this.theme="inherit"}disconnectedCallback(){var _a;"side"===this.navigationType?this.parentEl.removeEventListener("icSideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.removeEventListener("icTopNavResized",this.topNavResizedHandler),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){var _a,_b;const{navType,parent}=(0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el);this.navigationType=navType,this.parentEl=parent,this.deviceSize=(0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.e)(),this.sideNavExpanded=(null===(_a=this.parentEl)||void 0===_a?void 0:_a.classList.contains("sm-expanded"))||(null===(_b=this.parentEl)||void 0===_b?void 0:_b.classList.contains("xs-menu-open")),"side"===this.navigationType?this.parentEl.addEventListener("icSideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&(this.parentEl.addEventListener("icTopNavResized",this.topNavResizedHandler),"IC-NAVIGATION-GROUP"===this.el.parentElement.tagName&&(this.isTopNavChild=!0),this.deviceSize<=this.parentEl.customMobileBreakpoint&&(this.inTopNavSideMenu=!0)),this.navigationSlot=this.el.querySelector('[slot="navigation-item"]'),this.navigationSlot&&(this.navigationSlot.ariaLabel=this.navigationSlot.textContent.trim()),this.el.hasAttribute(this.ARIA_LABEL_STRING)&&(this.ariaLabel=this.el.getAttribute(this.ARIA_LABEL_STRING))}componentDidLoad(){this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0})}componentDidUpdate(){this.isInitialRender=!1}brandChangeHandler({detail}){this.focusStyle=detail.mode}async setFocus(){var _a;null===(_a=this.itemEl)||void 0===_a||_a.focus()}render(){const{inTopNavSideMenu,isTopNavChild,selected}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"navigation-item":!0,"navigation-item-top-nav":!inTopNavSideMenu&&"top"===this.navigationType,"navigation-item-top-nav-child-selected":isTopNavChild&&!inTopNavSideMenu&&selected,[this.focusStyle]:!inTopNavSideMenu&&!isTopNavChild||"side"===this.navigationType&&isTopNavChild,"navigation-item-selected":!isTopNavChild&&selected,"navigation-item-side-menu":inTopNavSideMenu,"navigation-item-side-menu-selected":inTopNavSideMenu&&selected,"navigation-item-top-nav-child":isTopNavChild&&!inTopNavSideMenu,"navigation-item-page-header":"page-header"===this.navigationType,"with-transition":!this.isInitialRender,"navigation-item-side-nav":"side"===this.navigationType,"navigation-item-side-nav-collapsed":(!this.sideNavExpanded||this.displayNavigationTooltip)&&"side"===this.navigationType,"navigation-item-side-nav-collapsed-with-label":!this.sideNavExpanded&&"side"===this.navigationType&&this.collapsedIconLabel&&!this.isSideNavMobile,expandable:this.expandable,[`ic-theme-${this.theme}`]:"inherit"!==this.theme},onBlur:isTopNavChild&&!inTopNavSideMenu?this.handleBlur:null,onClick:this.handleClick,"aria-current":selected?"page":null,role:"listitem"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-tooltip",{label:this.generateTooltipLabel(),target:"navigation-item",placement:"right",class:{"tooltip-navigation-item":!0,"tooltip-navigation-item-side-nav-collapsed":this.displayNavigationTooltip&&"side"===this.navigationType,"tooltip-long-label-navigation-item-side-nav-expanded":this.el.hasAttribute("[display-navigation-tooltip = 'true']")}},this.renderNavigationItemContent()))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavigationItem.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--navigation-link-colour:var(--ic-brand-text-color)}:host(:focus-within){z-index:var(--ic-z-index-navigation-item)}svg{width:var(--ic-space-xl);fill:var(--ic-brand-text-color)}.svg{margin-left:auto}.chevron-container svg,.chevron-container .svg{width:var(--ic-space-lg);height:var(--ic-space-lg)}.chevron-container{flex-grow:1}:host(.expandable.navigation-item) .link,:host(.expandable.navigation-item) ::slotted(a){padding-right:0}:host(.navigation-item) .link,:host(.navigation-item) ::slotted(a){height:calc(100% - var(--ic-space-xxs));width:-moz-fit-content;width:fit-content;color:var(--navigation-link-colour);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md) var(--ic-space-xxs);text-decoration:none;transition:var(--ic-easing-transition-fast);position:relative;white-space:nowrap}:host(.navigation-item) ::slotted(a){height:100%;font:var(--ic-font-label) !important;letter-spacing:var(--ic-font-letter-spacing-0pt025) !important;padding:0 var(--ic-space-md) !important}:host(.navigation-item-selected) .link::after,:host(.navigation-item-selected) ::slotted(a.active)::after,:host(.navigation-item-top-nav) ::slotted(a.active)::after{content:"";height:0.25rem;width:100%;position:absolute;bottom:0;background-color:var(--ic-top-navigation-theme)}:host(.navigation-item-selected.navigation-item-page-header) ::slotted(a.active)::after,:host(.navigation-item-selected.navigation-item-page-header) .link::after,:host(.navigation-item.navigation-item-page-header) ::slotted(a.active)::after,:host(.navigation-item-top-nav-child) ::slotted(a.active)::after{content:none}:host(.navigation-item-side-menu-selected) .link,:host(.navigation-item-side-menu) ::slotted(a.active),:host(.navigation-item-top-nav-child) ::slotted(a.active){box-shadow:none}:host(.navigation-item) .link:hover:not(:focus){background-color:var(--ic-brand-hover);cursor:pointer}:host(.navigation-item:not(.navigation-item-page-header,.navigation-item-side-menu)) ::slotted(a:hover:not(:focus)){background-color:var(--ic-brand-hover) !important}:host(.navigation-item:not(.navigation-item-top-nav-child,.navigation-item-side-menu,.navigation-item-top-nav-child-selected .navigation-item-side-menu-selected)) .focus-indicator:focus-within{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius)}:host(.navigation-item) .link:focus,:host(.navigation-item) ::slotted(a:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item-selected) .link:focus,:host(.navigation-item) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item-selected.dark) .link:focus,:host(.navigation-item.dark) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item) .link:active:not(:focus),:host(.navigation-item) ::slotted(a:active:not(:focus)){background-color:var(--ic-brand-active)}:host(.navigation-item-side-menu) .link,:host(.navigation-item-side-menu) ::slotted(a){min-height:2.5rem;height:auto;width:100%;box-sizing:border-box;color:var(--ic-top-navigation-nav-item);--ic-typography-color:var(--ic-top-navigation-nav-item);display:flex;align-items:center;justify-content:flex-start;text-decoration:none;text-wrap:wrap;white-space:normal;transition:box-shadow var(--ic-transition-duration-fast),\n    border-radius var(--ic-transition-duration-fast)}:host(.navigation-item-side-menu) ::slotted(a){font:var(--ic-font-body) !important;letter-spacing:var(--ic-font-letter-spacing-0pt005) !important;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast)}:host(.navigation-item-side-menu) .link:hover:not(:focus){background-color:var(--ic-top-navigation-nav-item-hover)}:host(.navigation-item-side-menu) ::slotted(a:hover:not(:focus)){background-color:var(--ic-top-navigation-nav-item-hover) !important}:host(.navigation-item-side-menu) .focus-indicator:focus-within{box-shadow:none}:host(.navigation-item-side-menu) .link:focus,:host(.navigation-item-side-menu) ::slotted(a:focus){box-shadow:var(--ic-border-focus-inset) !important;width:auto;border-radius:var(--ic-border-radius-inset) !important}:host(.navigation-item-side-menu-selected) .link,:host(.navigation-item-side-menu-selected) ::slotted(a){transition:box-shadow var(--ic-easing-transition-slow),\n    background-color var(--ic-easing-transition-slow)}:host(.navigation-item-side-menu-selected) .link:focus,:host(.navigation-item-side-menu) ::slotted(a.active:focus),:host(.navigation-item-top-nav-child) ::slotted(a.active:focus){margin-left:var(--ic-space-xs) !important;padding-left:var(--ic-space-xs) !important}:host(.navigation-item-top-nav-child) .link,:host(.navigation-item-top-nav-child) ::slotted(a){height:2.5rem;width:-moz-fit-content;width:fit-content;min-width:9.063rem;color:var(--ic-top-navigation-nav-item);display:flex;align-items:center;justify-content:flex-start;padding:0 var(--ic-space-md) !important;text-decoration:none;position:relative;transition:box-shadow var(--ic-transition-duration-fast),\n    border-radius var(--ic-transition-duration-slow)}:host(.navigation-item-top-nav-child) ::slotted(a){font:var(--ic-font-body) !important;letter-spacing:var(--ic-font-letter-spacing-0pt005) !important}:host(.navigation-item-top-nav-child) .link:hover:not(:focus){background-color:var(--ic-top-navigation-nav-item-hover) !important}:host(.navigation-item-top-nav-child) ::slotted(a:hover):not(:focus){background-color:var(--ic-top-navigation-nav-item-hover) !important}:host(.navigation-item-top-nav-child) .link:focus,:host(.navigation-item-top-nav-child) ::slotted(a:focus){z-index:1;outline:var(--ic-hc-focus-outline);border-radius:var(--ic-border-radius-inset);box-shadow:var(--ic-border-focus-inset);transition:border-radius 0s, box-shadow var(--ic-transition-duration-fast)}:host(.navigation-item-top-nav-child) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset)}:host(.navigation-item-side-menu) .link:active:not(:focus){background-color:var(--ic-top-navigation-nav-item-pressed)}:host(.navigation-item-top-nav-child) .link:active:not(:focus),:host(.navigation-item-top-nav-child) ::slotted(a:active):not(:focus){outline:var(--ic-hc-focus-outline);background-color:var(--ic-top-navigation-nav-item-pressed)}:host(.navigation-item-top-nav-child) ::slotted(a:active):not(:focus),:host(.navigation-item-side-menu) ::slotted(a:active):not(:focus){background-color:var(--ic-top-navigation-nav-item-pressed) !important}:host(.navigation-item-side-menu-selected) *,:host(.navigation-item-top-nav-child-selected) *,:host(.navigation-item-side-menu) ::slotted(a.active),:host(.navigation-item-top-nav-child) ::slotted(a.active){font-weight:700 !important}:host(.navigation-item-top-nav-child) ::slotted(a.active)::before,:host(.navigation-item-top-nav-child-selected) .link::before,:host(.navigation-item-side-menu-selected) .link::before,:host(.navigation-item-side-menu) ::slotted(a.active)::before,:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before{content:"";position:absolute;left:0;width:var(--ic-space-xs);height:inherit;min-height:2.5rem;background-color:var(--ic-top-navigation-nav-item-banner);transition:left 0s}:host(.navigation-item-top-nav-child-selected) .link::before,:host(.navigation-item-side-menu-selected) .link::before,:host(.navigation-item-side-menu-selected) .link:focus::before{margin-top:0.25rem}:host(.navigation-item-top-nav-child-selected) .link:focus{margin-left:var(--ic-space-xs);margin-right:calc(-1 * var(--ic-space-xs));padding-left:var(--ic-space-xs) !important}:host(.navigation-item-top-nav-child-selected) .link:focus::before{left:calc(-1 * var(--ic-space-xs));z-index:1}:host(.navigation-item-side-menu-selected) .link::before,:host(.navigation-item-side-menu) ::slotted(a.active)::before,:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before{z-index:1}:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before,:host(.navigation-item-top-nav-child) ::slotted(a.active:focus)::before{left:calc(-1 * var(--ic-space-xs))}:host(.navigation-item-side-menu-selected) .link::after{display:none}:host(.navigation-item-side-nav-collapsed) .link{height:100%}:host(.navigation-item-side-nav-collapsed) ::slotted(svg),:host(.navigation-item-side-nav-collapsed-with-label) ::slotted(svg){margin:auto;pointer-events:none}:host(.navigation-item-side-nav-collapsed) .icon,:host(.navigation-item-side-nav-collapsed-with-label) .icon,:host(.navigation-item-side-nav-collapsed-with-label) ic-typography{align-items:center;padding:0;margin:auto 0;width:-moz-fit-content;width:fit-content;pointer-events:none}:host(.navigation-item-side-nav-collapsed-with-label) ic-typography{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:center}:host(.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:flex;flex-direction:column;height:-moz-fit-content;height:fit-content;padding:var(--ic-space-xs) !important;gap:var(--ic-space-xxs)}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) ::slotted(a){height:auto !important;gap:0;width:auto;padding:var(--ic-space-xs) !important}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:block;text-align:center}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link ic-typography{opacity:1;min-width:-moz-min-content;min-width:min-content}:host(.navigation-item-side-nav-collapsed) svg,:host(.navigation-item-side-nav-collapsed-with-label) svg{display:none}::slotted(svg){fill:var(--ic-brand-text-color);height:var(--ic-space-lg);width:var(--ic-space-lg);margin-left:var(--ic-space-md)}.icon{height:1.5rem;width:var(--ic-space-xxl);margin-left:calc(-1 * var(--ic-space-md));flex:0 1 0%;position:relative}.icon>::slotted(*){margin-left:var(--ic-space-md) !important}:host(.navigation-item-side-nav-collapsed) .icon>::slotted(*){margin:auto !important}:host(.navigation-item-side-nav) .link,:host(.navigation-item-side-nav) ::slotted(a){height:var(--navigation-item-height, 4rem);min-height:var(--navigation-item-min-height);width:var(--navigation-item-width, auto);justify-content:var(--navigation-item-justify-content);display:flex;gap:var(--ic-space-xs);box-sizing:border-box;color:var(--navigation-item-child-color) !important;text-decoration:none !important;white-space:nowrap;padding:0 var(--ic-space-md);text-wrap:wrap}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a){height:var(--navigation-item-child-height);width:var(--navigation-group-width);color:var(--navigation-item-child-color) !important;display:flex;gap:0.625rem;box-sizing:border-box;min-width:0;transition:box-shadow var(--ic-easing-transition-fast);text-decoration:none !important;white-space:nowrap}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link:focus,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a:focus){box-shadow:var(--ic-border-focus-dark)}:host(.navigation-item-side-nav.navigation-item-side-menu) .link:active{background-color:var(--navigation-item-child-active)}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link:active,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a:active){background-color:var(--navigation-item-child-active)}:host(.navigation-item-side-nav) a.link ic-typography,:host(.navigation-item-side-nav.navigation-item-top-nav-child) a.link ic-typography,:host(.navigation-item-side-nav) div.link ic-typography,:host(.navigation-item-side-nav.navigation-item-top-nav-child) div.link ic-typography,.navigation-item-side-nav-slotted-text{opacity:var(--navigation-item-label-opacity);transition:opacity var(--ic-easing-transition-slow);white-space:wrap;text-overflow:ellipsis;overflow:hidden}:host(.navigation-item-side-nav.navigation-item-selected) .link,:host(.navigation-item-side-nav.navigation-item) ::slotted(a.active){box-shadow:inset 0.313rem 0 0 var(--ic-brand-text-color)}:host(.navigation-item-side-nav.navigation-item-selected) .link::before,:host(.navigation-item-side-nav) ::slotted(a.active)::before{content:"";display:block;position:absolute;inset:0 0 0 0.313rem;border-radius:0.688rem !important;transition:var(--ic-easing-transition-slow)}:host(.navigation-item-side-nav.navigation-item-selected) .link:focus::before,:host(.navigation-item-side-nav) ::slotted(a.active:focus)::before{box-shadow:var(--ic-border-focus-inset)}:host(:not(.navigation-item-side-nav-collapsed).navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link{opacity:var(--navigation-item-label-opacity);height:auto}:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) ::slotted(a){min-width:var(--navigation-group-item-min-width);padding:var(--ic-space-xs) !important;height:auto;gap:0}:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:block}:host(.navigation-item-side-nav.navigation-item-selected) .link::after,:host(.navigation-item-side-nav) ::slotted(a.active)::after{display:none}:host(.navigation-item-side-nav.navigation-item) .link:focus,:host(.navigation-item-side-nav.navigation-item) ::slotted(a:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.navigation-item-side-nav.navigation-item-selected) .link:focus,:host(.navigation-item-side-nav) ::slotted(a.active:focus){margin:0 auto;box-shadow:inset 0.313rem 0 0 var(--ic-brand-text-color);border-radius:0}:host(.navigation-item-side-nav.navigation-item) .link:hover:not(:focus){background-color:var(--ic-brand-hover) !important}:host(.navigation-item-page-header).link,:host(.navigation-item-page-header) a,:host(.navigation-item-page-header) ::slotted(a){height:2.5rem !important;color:var(--ic-color-text-primary) !important;transition:all var(--ic-easing-transition-fast) !important;box-shadow:rgba(23 89 188 / 0%) !important}:host(.navigation-item-page-header.navigation-item-selected) .link::after,:host(.navigation-item-page-header) ::slotted(a.active)::after{content:" " !important;position:absolute;bottom:0;left:0;right:0;height:var(--ic-space-xxs);background-color:var(--ic-action-default) !important}:host(.navigation-item-page-header) .link:hover,:host(.navigation-item-page-header) ::slotted(.link:hover),:host(.navigation-item-page-header) ::slotted(a:hover),:host(.navigation-item-page-header) .link:hover:not(:focus){background-color:var(--ic-action-default-bg-hover) !important;cursor:pointer}:host(.navigation-item-page-header) .link:focus,:host(.navigation-item-page-header) ::slotted(a:focus){box-shadow:var(--ic-border-focus)}:host(.navigation-item-page-header) .link:active,:host(.navigation-item-page-header) ::slotted(a:active){background-color:var(--ic-action-default-bg-pressed) !important}:host(.navigation-item-page-header.navigation-item-selected) .link:focus::after,:host(.navigation-item-page-header) ::slotted(a.active:focus)::after{border-bottom-left-radius:var(--ic-border-radius);border-bottom-right-radius:var(--ic-border-radius)}:host(.navigation-item-page-header.navigation-item-selected.with-transition) .link,:host(.navigation-item-page-header.navigation-item-selected.with-transition) ::slotted(a.active){transition:all var(--ic-easing-transition-fast),\n    border-color var(--ic-transition-duration-fast)}:host(.navigation-item-page-header) ::slotted(a.active)::before,:host(.navigation-item-page-header) ::slotted(a.active:focus)::before,:host(.navigation-item-page-header.navigation-item-selected) .link:focus::before{display:none}.open-in-new-icon{flex:1}.open-in-new-icon svg{margin-top:var(--ic-space-xxs);padding-left:var(--ic-space-xxs)}:host(.navigation-item-side-nav) .open-in-new-icon{margin-left:calc(-1 * var(--ic-space-xs))}:host(.navigation-item-top-nav) .open-in-new-icon svg,:host(.navigation-item-page-header) .open-in-new-icon svg,:host(.navigation-item-side-nav) .open-in-new-icon svg{height:0.875rem;width:0.875rem}:host(.navigation-item-side-menu) .open-in-new-icon svg,:host(.navigation-item-top-nav-child) .open-in-new-icon svg{height:var(--ic-space-md);width:var(--ic-space-md)}:host(.navigation-item-page-header) .open-in-new-icon svg,:host(.navigation-item-top-nav-child) .open-in-new-icon svg,:host(.navigation-item-side-menu) .open-in-new-icon svg{fill:var(--ic-color-text-primary)}@media (forced-colors: active){.open-in-new-icon svg{fill:currentcolor}}'}}]);