"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1528],{"./dist/esm/ic-input-label_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_label:()=>InputLabel,ic_input_validation:()=>InputValidation});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-e8797e8d.js");const InputLabel=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.appearance="default",this.disabled=!1,this.for=void 0,this.helperText="",this.hideLabel=!1,this.label=void 0,this.readonly=!1,this.required=!1,this.status="",this.useLabelTag=!0}componentDidLoad(){(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Input Label")}render(){const{disabled,readonly,label,required,helperText,status,hideLabel,appearance,useLabelTag}=this,labelText=required?label+" *":label,labelContent=readonly||!useLabelTag?`${labelText}`:(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.for},labelText),id=(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.T)(this.for);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-input-label-disabled":disabled,"ic-input-label-readonly":readonly,"with-helper":""!==helperText}},!hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:{"readonly-label":readonly,"error-label":"error"===status&&!(readonly||disabled),dark:"dark"===appearance}},labelContent),""!==helperText&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:{helpertext:!0,"helpertext-normal":!disabled&&!readonly,"helpertext-readonly":readonly}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id},helperText)))}};InputLabel.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.ic-input-label-readonly{--ic-typography-color:var(--ic-color-text-tertiary)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs);padding-bottom:var(--ic-input-label-helpertext-padding, 0)}ic-input-label .helpertext-normal{--ic-typography-color:var(--ic-color-text-secondary)}ic-input-label .helpertext-readonly{--ic-typography-color:var(--ic-color-text-tertiary)}ic-input-label .readonly-label{--ic-typography-color:var(--ic-color-text-secondary)}ic-input-label .error-label{--ic-typography-color:var(--ic-status-error-default)}ic-input-label .dark{--ic-typography-color:var(--ic-architectural-white)}";const icon={[_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.F.Warning]:_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.X,[_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.F.Error]:_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.Y,[_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.F.Success]:_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.Q},InputValidation=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}componentDidLoad(){(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.message,propName:"message"}],"Input Validation")}render(){const displayIcon=""!==this.status?icon[this.status]:"",id=(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.U)(this.for);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-input-validation-${this.status}`]:""!==this.status,"ic-input-validation-full-width":this.fullWidth}},""!==displayIcon&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"status-icon":!0,[`icon-${this.status}`]:!0},innerHTML:displayIcon}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:"statustext"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-live":this.ariaLiveMode,id},this.message)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"validation-message-adornment"}))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};InputValidation.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.ic-input-validation-full-width{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success-default)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error-default)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning-default)}ic-input-validation .statustext{flex-grow:1}"}}]);