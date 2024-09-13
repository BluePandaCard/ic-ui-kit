"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[3643],{"./dist/esm/ic-tab-context.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_context:()=>TabContext});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/types-f605c21c.js");const TabContext=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icTabSelect=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icTabSelect",3),this.newTabPanels=[],this.newTabs=[],this.linkTabs=()=>{this.tabs.forEach(((tab,index)=>{const tabId=`ic-tab-${index}-context-${this.contextId}`,tabPanelId=`ic-tab-panel-${index}-context-${this.contextId}`,shared=`ic-tab--${index}-context-${this.contextId}`;tab.setAttribute("id",tabId),tab.tabId=shared,tab.tabPosition=index,tab.setAttribute("aria-controls",tabPanelId),tab.setAttribute("context-id",this.contextId),this.tabGroup.setAttribute("context-id",this.contextId),this.tabPanels[index].setAttribute("id",tabPanelId),this.tabPanels[index].panelId=shared,this.tabPanels[index].tabPosition=index,this.tabPanels[index].setAttribute("aria-labelledby",tabId),this.tabPanels[index].setAttribute("context-id",this.contextId),this.appearance===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.I.Light&&(tab.appearance=this.appearance,this.tabPanels[index].appearance=this.appearance)})),this.appearance===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.I.Light&&(this.tabGroup.appearance=this.appearance)},this.getChildren=()=>{this.tabGroup=this.el.querySelector("ic-tab-group"),this.tabs=Array.from(this.tabGroup.querySelectorAll("ic-tab")),this.tabPanels=Array.from(this.el.children).filter((child=>"IC-TAB-PANEL"===child.tagName)),this.enabledTabs=this.getEnabledTabs()},this.keydownHandler=event=>{"automatic"===this.activationType?this.handleKeyBoardNavAutomatic(event):this.handleKeyBoardNavManual(event)},this.attachEventListeners=()=>{this.tabGroup.addEventListener("keydown",this.keydownHandler)},this.setControlledMode=()=>{void 0!==this.selectedTabIndex&&(this.controlledMode=!0,this.selectedTab=this.selectedTabIndex)},this.setInitialTab=()=>{if(this.controlledMode)this.selectedTab=this.selectedTabIndex,this.focusedTabIndex=this.selectedTabIndex;else{const firstEnabledTabIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[0].tabId));this.selectedTab=firstEnabledTabIndex,this.focusedTabIndex=firstEnabledTabIndex}},this.configureTabs=()=>{this.enabledTabs.forEach((tab=>{tab.selected=tab.tabPosition===this.selectedTab})),this.tabPanels.forEach((tabPanel=>{tabPanel.selectedTab=this.tabs[this.selectedTab].tabId}))},this.getEnabledTabs=()=>Array.from(this.tabs).filter((child=>!child.disabled)),this.getIndexOfEnabledTab=allTabsIndex=>this.enabledTabs.findIndex((tab=>tab.tabId===this.tabs[allTabsIndex].tabId)),this.keyboardSelectTab=enabledTabIndex=>{const newIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[enabledTabIndex].tabId));this.enabledTabs[enabledTabIndex].focus(),this.controlledMode?this.icTabSelect.emit({tabIndex:newIndex,tabLabel:this.el.querySelectorAll("ic-tab")[newIndex].textContent.trim()}):this.selectedTab=newIndex},this.keyboardFocusTab=enabledTabIndex=>{const newIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[enabledTabIndex].tabId));this.enabledTabs[enabledTabIndex].focus(),this.focusedTabIndex=newIndex},this.handleKeyBoardNavAutomatic=event=>{const key=event.key,enabledTabIndex=this.getIndexOfEnabledTab(this.selectedTab);let preventDefault=!0;switch(key){case"Home":this.keyboardSelectTab(0);break;case"End":this.keyboardSelectTab(this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<this.enabledTabs.length-1?this.keyboardSelectTab(enabledTabIndex+1):this.keyboardSelectTab(0);break;case"ArrowLeft":enabledTabIndex>0?this.keyboardSelectTab(enabledTabIndex-1):this.keyboardSelectTab(this.enabledTabs.length-1);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.handleKeyBoardNavManual=event=>{const key=event.key,enabledTabIndex=this.getIndexOfEnabledTab(this.focusedTabIndex);let preventDefault=!0;switch(key){case"Home":this.keyboardFocusTab(0);break;case"End":this.keyboardFocusTab(this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<this.enabledTabs.length-1?this.keyboardFocusTab(enabledTabIndex+1):this.keyboardFocusTab(0);break;case"ArrowLeft":enabledTabIndex>0?this.keyboardFocusTab(enabledTabIndex-1):this.keyboardFocusTab(this.enabledTabs.length-1);break;case"Enter":case" ":this.keyboardSelectTab(this.focusedTabIndex);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.selectedTab=void 0,this.activationType="automatic",this.appearance="dark",this.contextId="default",this.selectedTabIndex=void 0}watchAppearanceHandler(){this.tabs.forEach(((tab,index)=>{tab.appearance=this.appearance,this.tabPanels[index].appearance=this.appearance})),this.tabGroup.appearance=this.appearance}updateSelectedTab(newValue){this.selectedTab=newValue}componentDidLoad(){this.setControlledMode(),this.getChildren(),this.linkTabs(),this.attachEventListeners(),this.setInitialTab(),this.configureTabs()}componentWillUpdate(){this.configureTabs()}disconnectedCallback(){this.tabGroup.removeEventListener("keydown",this.keydownHandler)}tabClickHandler(event){void 0===this.selectedTabIndex&&event.detail.contextId===this.contextId&&(this.selectedTab=event.detail.position),this.icTabSelect.emit({tabIndex:event.detail.position,tabLabel:this.el.querySelectorAll("ic-tab")[event.detail.position].textContent.trim()}),event.stopImmediatePropagation()}tabCreatedHandler(ev){this.tabs&&this.tabPanels&&((ev.detail.setFocus?this.newTabs:this.newTabPanels).push(ev.detail),this.newTabs.length===this.newTabPanels.length&&(this.tabs.push(...this.newTabs),this.tabPanels.push(...this.newTabPanels),this.enabledTabs=this.getEnabledTabs(),this.linkTabs(),this.newTabs=[],this.newTabPanels=[]))}tabEnabledHandler(){this.enabledTabs=this.getEnabledTabs()}async tabRemovedHandler(hadFocus){this.getChildren(),this.enabledTabs=this.getEnabledTabs(),this.linkTabs(),this.tabs[this.selectedTab]&&this.tabPanels[this.selectedTab]?(this.tabs[this.selectedTab].selected=!0,this.tabPanels[this.selectedTab].selectedTab=this.tabs[this.selectedTab].tabId):this.setInitialTab(),hadFocus&&this.tabs[this.selectedTab].setFocus()}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{appearance:["watchAppearanceHandler"],selectedTabIndex:["updateSelectedTab"]}}}},"./dist/esm/types-f605c21c.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>IcInformationStatus}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);