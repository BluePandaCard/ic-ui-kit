"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[4196],{"../web-components/dist/esm/ic-radio-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_group:()=>RadioGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-e8797e8d.js");const RadioGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.resizeObserver=null,this.ADDITIONAL_FIELD="additional-field",this.RADIO_HORIZONTAL="horizontal",this.RADIO_VERTICAL="vertical",this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.checkOrientation()})),this.resizeObserver.observe(this.el)},this.handleKeyDown=event=>{switch(event.key){case"ArrowDown":case"ArrowRight":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!0)].click(),event.preventDefault();break;case"ArrowUp":case"ArrowLeft":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!1)].click(),event.preventDefault()}},this.getNextItemToSelect=(currentItem,movingDown)=>{const numRadios=this.radioOptions.length-1;currentItem<1&&(currentItem=0);let nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numRadios:nextItem>numRadios&&(nextItem=0),this.radioOptions[nextItem].disabled&&(nextItem=this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.addSlotChangeListener=()=>{this.radioContainer.addEventListener("slotchange",this.setRadioOptions)},this.setFirstRadioOptionTabIndex=value=>{this.radioOptions[0].setTabIndex(value)},this.setRadioOptions=()=>{this.selectedChild=-1,this.checkedValue="",this.radioOptions=Array.from(this.el.querySelectorAll("ic-radio-option")),this.radioOptions.length>0&&(this.radioOptions.forEach(((radioOption,index)=>{radioOption.selected||(radioOption.selected=this.checkedValue===radioOption.value),radioOption.name=this.name,radioOption.groupLabel=this.label,radioOption.selected&&(this.selectedChild=index,this.checkedValue=radioOption.value),this.disabled&&(radioOption.disabled=!0)})),this.setFirstRadioOptionTabIndex(this.selectedChild>0?-1:0),this.initialOrientation===this.RADIO_HORIZONTAL&&void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.radioOptions[0],this.ADDITIONAL_FIELD)||(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.radioOptions[1],this.ADDITIONAL_FIELD)))&&(this.currentOrientation=this.RADIO_VERTICAL))},this.checkedValue="",this.currentOrientation=void 0,this.initialOrientation=void 0,this.selectedChild=-1,this.disabled=!1,this.helperText=void 0,this.hideLabel=!1,this.label=void 0,this.name=void 0,this.orientation="vertical",this.required=!1,this.size="medium",this.validationStatus="",this.validationText="",this.theme="inherit"}watchDisabledHandler(newValue){this.radioOptions.forEach((radioOption=>radioOption.disabled=newValue))}orientationChangeHandler(){this.initialOrientation=this.orientation,this.checkOrientation()}watchThemeHandler(newValue){this.radioOptions.forEach((radioOption=>radioOption.theme=newValue))}disconnectedCallback(){var _a,_b;null===(_a=this.resizeObserver)||void 0===_a||_a.disconnect(),null===(_b=this.radioContainer)||void 0===_b||_b.removeEventListener("slotchange",this.setRadioOptions)}componentWillLoad(){(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),this.orientationChangeHandler(),this.currentOrientation=this.initialOrientation}componentDidLoad(){this.setRadioOptions(),(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.addSlotChangeListener(),(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group"),this.watchThemeHandler(this.theme)}selectHandler({detail,target}){var _a;this.checkedValue=detail.value;const selectedOption=target;this.icChange.emit({value:this.checkedValue,selectedOption:{radio:selectedOption,textFieldValue:null===(_a=null==selectedOption?void 0:selectedOption.querySelector("ic-text-field"))||void 0===_a?void 0:_a.value}}),void 0!==this.radioOptions&&(this.radioOptions.forEach(((radioOption,index)=>{radioOption.selected=selectedOption===radioOption,radioOption.selected&&(this.selectedChild=index)})),this.setFirstRadioOptionTabIndex(this.selectedChild>0?-1:0))}changeHandler(){const selectedOption=this.radioOptions.findIndex((radioOption=>radioOption.selected));selectedOption<0&&(this.setFirstRadioOptionTabIndex(0),this.selectedChild=selectedOption)}checkOrientation(){var _a,_b;if(this.initialOrientation===this.RADIO_HORIZONTAL){let totalWidth=0;Array.isArray(this.radioOptions)&&this.radioOptions.length>0?this.radioOptions.forEach((({clientWidth},i,arr)=>{totalWidth+=clientWidth,i<arr.length-1&&(totalWidth+=40)})):totalWidth=0,this.initialOrientation==this.RADIO_HORIZONTAL&&(void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.radioOptions[0],this.ADDITIONAL_FIELD)||(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.radioOptions[1],this.ADDITIONAL_FIELD)))||totalWidth>=(null===(_a=this.radioContainer)||void 0===_a?void 0:_a.clientWidth)?this.currentOrientation=this.RADIO_VERTICAL:totalWidth<(null===(_b=this.radioContainer)||void 0===_b?void 0:_b.clientWidth)&&(this.currentOrientation=this.RADIO_HORIZONTAL))}}render(){const{currentOrientation,disabled,handleKeyDown,helperText,hideLabel,label,required,size,validationStatus,validationText,theme}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{onKeyDown:handleKeyDown,class:{"ic-radio-group-small":"small"===size,[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{role:"radiogroup","aria-label":`${label}${required?", required":""}`},!hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{class:{[`${validationStatus}`]:!0,disabled},label,helperText,required,disabled}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"radio-buttons-container":!0,horizontal:currentOrientation===this.RADIO_HORIZONTAL},ref:el=>this.radioContainer=el},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.p)(validationStatus,disabled)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{ariaLiveMode:"polite",status:validationStatus,message:validationText}))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],orientation:["orientationChangeHandler"],theme:["watchThemeHandler"]}}};RadioGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-text-color:var(--ic-radio-button-input-field-label);--ic-input-label-helper-text-color:var(\n    --ic-radio-button-input-field-subtitle\n  );--ic-input-validation-status-text-color:var(--ic-radio-button-state-text);--ic-input-validation-error:var(--ic-radio-button-state-icon-error)}ic-input-label.error{--ic-input-label-text-color:var(--ic-radio-button-input-field-label-error)}ic-input-label.disabled{--ic-input-label-text-color:var(\n    --ic-radio-button-input-field-label-disabled\n  );--ic-input-label-helper-text-color:var(\n    --ic-radio-button-input-field-subtitle-disabled\n  )}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.ic-radio-group-small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.ic-radio-group-small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}:host .radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.ic-radio-group-small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host .radio-buttons-container.horizontal{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-radio-group-small) .radio-buttons-container.horizontal{gap:var(--ic-space-xl)}'}}]);