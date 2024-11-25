"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[2708],{"./dist/esm/helpers-1e2516ae.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>isEmptyString,b:()=>addDataToPosition,c:()=>checkSlotInChildMutations,d:()=>dynamicDebounce,e:()=>getSlotElements,f:()=>checkResizeObserver,g:()=>getThemeFromContext,h:()=>IcDayNames,i:()=>isSlotUsed,j:()=>IcDateInputMonths,k:()=>IcWeekDays,l:()=>IcShortDayNames,m:()=>isPropDefined,n:()=>getInputDescribedByText,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>removeFormResetListener,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>addFormResetListener,u:()=>isNumeric,v:()=>IcInformationStatus,w:()=>renderHiddenInput,x:()=>capitalize});const IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcThemeForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},dynamicDebounce=(func,getDelay)=>{let timer;return(...args)=>{const delay=getDelay();clearTimeout(timer),timer=setTimeout(func,delay,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getThemeFromContext=(el,themeFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcThemeForegroundEnum.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)?IcThemeForegroundEnum.Dark:IcThemeForegroundEnum.Light:themeFromEvent}return IcThemeForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:slot.tagName?[slot]:null}return null===slot?null:[slot]};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),checkSlotInChildMutations=(addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)},addDataToPosition=(dataObject,newKeys,newValue)=>{const newData={},newIndexes=newKeys.map((key=>key.index));let controlledIndex=0;return Object.keys(dataObject).forEach((dataKey=>{newIndexes.includes(controlledIndex)&&(newData[newKeys[newIndexes.indexOf(controlledIndex)].key]=newValue,controlledIndex++),newData[dataKey]=dataObject[dataKey],controlledIndex++})),newData}},"./dist/esm/ic-tree-view.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tree_view:()=>TreeView});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-1e2516ae.js");let treeViewIds=0;const TreeView=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.treeViewId="ic-tree-view-"+treeViewIds++,this.treeItemTag="IC-TREE-ITEM",this.hostMutationObserver=null,this.handleKeyDown=event=>{var _a;const focussedChild=this.treeItems.indexOf(this.treeItems.filter((el=>el===document.activeElement))[0]),expanded=null===(_a=this.treeItems[focussedChild])||void 0===_a?void 0:_a.expanded;switch(event.key){case"ArrowDown":this.treeItems[this.getNextItemToSelect(focussedChild,!0)].setFocus(),focussedChild!==this.treeItems.length-1&&event.preventDefault();break;case"ArrowUp":this.treeItems[this.getNextItemToSelect(focussedChild,!1)].setFocus(),0!==focussedChild&&event.preventDefault();break;case"ArrowRight":this.treeItems[focussedChild].isParent&&!expanded?(this.treeItems[focussedChild].expanded=!0,this.treeItems[focussedChild].hasParentExpanded=!0,this.treeItems[focussedChild].updateAriaLabel()):this.treeItems[focussedChild].isParent&&expanded&&this.treeItems[focussedChild].children[0].setFocus(),event.preventDefault();break;case"ArrowLeft":this.treeItems[focussedChild].isParent&&expanded?(this.treeItems[focussedChild].expanded=!1,this.treeItems[focussedChild].hasParentExpanded=!1,this.treeItems[focussedChild].updateAriaLabel()):this.treeItems[focussedChild].parentElement.tagName===this.treeItemTag&&this.treeItems[focussedChild].parentElement.setFocus(),event.preventDefault()}},this.getNextItemToSelect=(currentItem,movingDown)=>{const numItems=this.treeItems.length-1;currentItem<1&&(currentItem=0);let nextItem=movingDown?currentItem+1:currentItem-1;nextItem<0?nextItem=0:nextItem>numItems&&(nextItem=numItems);const maxAttempts=numItems+1;let attempts=0;for(;attempts<maxAttempts;){if(nextItem<0||nextItem>numItems)return currentItem;if(!this.treeItems[nextItem].disabled&&(this.treeItems[nextItem].parentElement.tagName!==this.treeItemTag||this.treeItems[nextItem].parentElement.expanded))return nextItem;if(nextItem===numItems&&this.treeItems[nextItem].disabled)return currentItem;nextItem=movingDown?nextItem+1:nextItem-1,attempts++}return currentItem},this.linkTreeItems=()=>{this.treeItems.forEach((treeItem=>{treeItem.setAttribute("context-id",this.treeViewId)}))},this.setTreeItems=()=>{this.treeItems=this.getAllTreeItems(this.el),this.linkTreeItems()},this.addSlotChangeListener=()=>{this.el.addEventListener("slotchange",this.setTreeItems)},this.truncateTreeViewHeading=()=>{const typographyEl=this.el.shadowRoot.querySelector(".tree-view-header"),tooltip=null==typographyEl?void 0:typographyEl.closest("ic-tooltip"),headingContainer=this.el.shadowRoot.querySelector(".heading-area-container");if((null==typographyEl?void 0:typographyEl.scrollHeight)>(null==headingContainer?void 0:headingContainer.clientHeight)&&(typographyEl.classList.add("ic-text-overflow"),!tooltip)){const tooltipEl=document.createElement("ic-tooltip");tooltipEl.setAttribute("target",this.el.id),tooltipEl.setAttribute("label",typographyEl.textContent),tooltipEl.classList.add("ic-tooltip-overflow"),tooltipEl.setAttribute("placement","right"),headingContainer.appendChild(tooltipEl),tooltipEl.appendChild(typographyEl)}},this.hostMutationCallback=mutationList=>{mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,"icon")))&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.isHeadingDefined=()=>(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.heading)&&null!==this.heading,this.hasHeadingAreaContent=()=>(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")||this.isHeadingDefined()||(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon"),this.treeItems=void 0,this.focusInset=!1,this.heading="",this.size="medium",this.theme="inherit"}watchFocusInsetHandler(){this.treeItems.forEach((treeItem=>{treeItem.focusInset=this.focusInset}))}watchSizeHandler(){this.treeItems.forEach((treeItem=>{treeItem.size=this.size}))}watchThemeHandler(){this.treeItems.forEach((treeItem=>{treeItem.theme=this.theme}))}disconnectedCallback(){var _a,_b;null===(_a=this.el)||void 0===_a||_a.removeEventListener("slotchange",this.setTreeItems),null===(_b=this.hostMutationObserver)||void 0===_b||_b.disconnect()}componentDidLoad(){this.setTreeItems(),this.watchSizeHandler(),this.watchFocusInsetHandler(),this.watchThemeHandler(),setTimeout((()=>{this.truncateTreeViewHeading()}),100),this.addSlotChangeListener(),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}handleTreeItemSelected(event){this.treeItems.forEach((treeItem=>{treeItem.selected&&treeItem.id!==event.detail.id&&(treeItem.selected=!1)}))}getAllTreeItems(element){const treeItems=[],collectTreeItems=el=>{Array.from(el.children).forEach((child=>{child.tagName===this.treeItemTag&&treeItems.push(child),collectTreeItems(child)}))};return collectTreeItems(element),treeItems}render(){const{heading,size,theme}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{"context-id":this.treeViewId,class:{[`ic-tree-view-${size}`]:"medium"!==size,[`ic-theme-${theme}`]:"inherit"!==theme},onKeyDown:this.handleKeyDown,"aria-label":this.isHeadingDefined()?heading:null},this.hasHeadingAreaContent()&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading-area-container"},(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-large",class:"tree-view-header"},(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"}):heading)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{focusInset:["watchFocusInsetHandler"],size:["watchSizeHandler"],theme:["watchThemeHandler"]}}};TreeView.style=':host{display:block;width:var(--tree-view-width, 100%);background-color:var(--ic-tree-view-background)}:host .heading-area-container{border-bottom:var(--ic-space-1px) solid var(--ic-tree-view-divider);display:flex;align-items:center;height:calc(var(--ic-space-xl) + var(--ic-space-xs) - var(--ic-space-1px));padding:0 var(--ic-space-xs);--ic-typography-color:var(--ic-tree-view-text)}:host(.ic-tree-view-small) .heading-area-container{height:calc(var(--ic-space-xl) - var(--ic-space-1px))}:host(.ic-tree-view-large) .heading-area-container{height:calc(var(--ic-space-xxl) - var(--ic-space-1px))}.icon-container{width:var(--ic-space-lg);height:var(--ic-space-lg);margin:0 var(--ic-space-xs) 0 0}:host(.ic-tree-view-small) .icon-container{margin:0 var(--ic-space-xxs) 0 0}.ic-text-overflow{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ic-tooltip-overflow{overflow:hidden}::slotted([slot="icon"]){fill:var(--ic-tree-view-icon)}@media (forced-colors: active){::slotted([slot="icon"]){fill:currentcolor}}'}}]);