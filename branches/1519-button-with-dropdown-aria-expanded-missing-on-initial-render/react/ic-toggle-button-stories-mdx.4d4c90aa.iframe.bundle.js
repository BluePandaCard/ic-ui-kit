/*! For license information please see ic-toggle-button-stories-mdx.4d4c90aa.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[5834],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-toggle-button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,appearanceDark:()=>appearanceDark,appearanceLight:()=>appearanceLight,checked:()=>checked,default:()=>ic_toggle_button_stories,defaultStory:()=>defaultStory,disabled:()=>disabled,fullWidth:()=>fullWidth,iconOnly:()=>iconOnly,iconRight:()=>iconRight,iconTop:()=>iconTop,loading:()=>loading,sizes:()=>sizes,withBadge:()=>withBadge,withIcon:()=>withIcon});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-toggle-button\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute          | Description                                                                                                              | Type                              | Default     |\n| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ----------- |\n| `accessibleLabel` | `accessible-label` | The accessible label that will be applied to the toggle button. This is required for the icon variant of toggle buttons. | `string`                          | `undefined` |\n| `appearance`      | `appearance`       | The appearance of the toggle button.                                                                                     | `"dark" \\| "default" \\| "light"`  | `"default"` |\n| `disabled`        | `disabled`         | If `true`, the toggle button will be in disabled state.                                                                  | `boolean`                         | `false`     |\n| `fullWidth`       | `full-width`       | If `true`, the toggle button will fill the width of the container.                                                       | `boolean`                         | `false`     |\n| `iconPlacement`   | `icon-placement`   | The placement of the icon in relation to the toggle button label.                                                        | `"left" \\| "right" \\| "top"`      | `undefined` |\n| `label`           | `label`            | The label to display in the toggle button. This is required for the default variant of toggle buttons.                   | `string`                          | `undefined` |\n| `loading`         | `loading`          | If `true`, the toggle button will be in loading state.                                                                   | `boolean`                         | `false`     |\n| `size`            | `size`             | The size of the toggle button to be displayed.                                                                           | `"default" \\| "large" \\| "small"` | `"default"` |\n| `toggleChecked`   | `toggle-checked`   | If `true`, the toggle button will be in a checked state.                                                                 | `boolean`                         | `false`     |\n| `variant`         | `variant`          | The variant of the toggle button.                                                                                        | `"default" \\| "icon"`             | `"default"` |\n\n\n## Events\n\n| Event             | Description                                   | Type                                 |\n| ----------------- | --------------------------------------------- | ------------------------------------ |\n| `icToggleChecked` | Emitted when the user clicks a toggle button. | `CustomEvent<{ checked: boolean; }>` |\n\n\n## Slots\n\n| Slot      | Description                                                    |\n| --------- | -------------------------------------------------------------- |\n| `"badge"` | Badge component overlaying the top right of the toggle button. |\n| `"icon"`  | Content will be displayed alongside the toggle button label.   |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-toggle-button --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-toggle-button fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var slottedSVG=__webpack_require__("./src/react-component-lib/slottedSVG.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Toggle button",component:components.xt}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",onIcToggleChecked:event=>console.log(event.detail.checked)})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checked",children:"Checked"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Checked",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",toggleChecked:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",disabled:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With icon",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Sizes",children:[(0,jsx_runtime.jsx)("div",{style:{padding:"6px"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",size:"small"})}),(0,jsx_runtime.jsx)("div",{style:{padding:"6px"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",size:"default"})}),(0,jsx_runtime.jsx)("div",{style:{padding:"6px"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",size:"large"})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-badge",children:"With badge"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With badge",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",children:(0,jsx_runtime.jsx)(components.S$,{textLabel:"1",slot:"badge",variant:"success"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance-dark",children:"Appearance dark"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Appearance dark",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",appearance:"dark"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance-light",children:"Appearance light"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Appearance light",children:(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34",padding:"6px",width:"fit-content"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",appearance:"light"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full width",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",fullWidth:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"loading",children:"Loading"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Loading",children:[(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",loading:!0}),(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",loading:!0,toggleChecked:!0})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-only",children:"Icon only"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Icon only",children:[(0,jsx_runtime.jsx)(components.xt,{variant:"icon",accessibleLabel:"Refresh the page",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.xt,{variant:"icon",accessibleLabel:"Refresh the page",disabled:!0,children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-right",children:"Icon right"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon right",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",iconPlacement:"right",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",slot:"icon",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-top",children:"Icon top"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon top",children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",iconPlacement:"top",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",slot:"icon",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})})})})]})}const defaultStory=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",onIcToggleChecked:event=>console.log(event.detail.checked)});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<IcToggleButton label="Toggle" onIcToggleChecked={event => console.log(event.detail.checked)} />'}};const checked=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",toggleChecked:!0});checked.storyName="Checked",checked.parameters={storySource:{source:'<IcToggleButton label="Toggle" toggleChecked />'}};const disabled=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",disabled:!0});disabled.storyName="Disabled",disabled.parameters={storySource:{source:'<IcToggleButton label="Toggle" disabled />'}};const withIcon=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})});withIcon.storyName="With icon",withIcon.parameters={storySource:{source:'<IcToggleButton label="Toggle"><SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></SlottedSVG></IcToggleButton>'}};const sizes=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:{padding:"6px"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",size:"small"})}),(0,jsx_runtime.jsx)("div",{style:{padding:"6px"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",size:"default"})}),(0,jsx_runtime.jsx)("div",{style:{padding:"6px"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",size:"large"})})]});sizes.storyName="Sizes",sizes.parameters={storySource:{source:'<div style={{\n  padding: "6px"\n}}><IcToggleButton label="Toggle" size="small" /></div>\n<div style={{\n  padding: "6px"\n}}><IcToggleButton label="Toggle" size="default" /></div>\n<div style={{\n  padding: "6px"\n}}><IcToggleButton label="Toggle" size="large" /></div>'}};const withBadge=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",children:(0,jsx_runtime.jsx)(components.S$,{textLabel:"1",slot:"badge",variant:"success"})});withBadge.storyName="With badge",withBadge.parameters={storySource:{source:'<IcToggleButton label="Toggle"><IcBadge textLabel="1" slot="badge" variant="success" /></IcToggleButton>'}};const appearanceDark=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",appearance:"dark"});appearanceDark.storyName="Appearance dark",appearanceDark.parameters={storySource:{source:'<IcToggleButton label="Toggle" appearance="dark" />'}};const appearanceLight=()=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34",padding:"6px",width:"fit-content"},children:(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",appearance:"light"})});appearanceLight.storyName="Appearance light",appearanceLight.parameters={storySource:{source:'<div style={{\n  backgroundColor: "#2c2f34",\n  padding: "6px",\n  width: "fit-content"\n}}><IcToggleButton label="Toggle" appearance="light" /></div>'}};const fullWidth=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",fullWidth:!0});fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'<IcToggleButton label="Toggle" fullWidth />'}};const loading=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",loading:!0}),(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",loading:!0,toggleChecked:!0})]});loading.storyName="Loading",loading.parameters={storySource:{source:'<IcToggleButton label="Toggle" loading />\n<IcToggleButton label="Toggle" loading toggleChecked />'}};const iconOnly=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.xt,{variant:"icon",accessibleLabel:"Refresh the page",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.xt,{variant:"icon",accessibleLabel:"Refresh the page",disabled:!0,children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})})]});iconOnly.storyName="Icon only",iconOnly.parameters={storySource:{source:'<IcToggleButton variant="icon" accessibleLabel="Refresh the page"><SlottedSVG xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></SlottedSVG></IcToggleButton>\n<IcToggleButton variant="icon" accessibleLabel="Refresh the page" disabled><SlottedSVG xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></SlottedSVG></IcToggleButton>'}};const iconRight=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",iconPlacement:"right",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",slot:"icon",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})});iconRight.storyName="Icon right",iconRight.parameters={storySource:{source:'<IcToggleButton label="Toggle" iconPlacement="right"><SlottedSVG xmlns="http://www.w3.org/2000/svg" slot="icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></SlottedSVG></IcToggleButton>'}};const iconTop=()=>(0,jsx_runtime.jsx)(components.xt,{label:"Toggle",iconPlacement:"top",children:(0,jsx_runtime.jsxs)(slottedSVG.y,{xmlns:"http://www.w3.org/2000/svg",slot:"icon",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})});iconTop.storyName="Icon top",iconTop.parameters={storySource:{source:'<IcToggleButton label="Toggle" iconPlacement="top"><SlottedSVG xmlns="http://www.w3.org/2000/svg" slot="icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></SlottedSVG></IcToggleButton>'}};const componentMeta={title:"Toggle button",component:components.xt,tags:["stories-mdx"],includeStories:["defaultStory","checked","disabled","withIcon","sizes","withBadge","appearanceDark","appearanceLight","fullWidth","loading","iconOnly","iconRight","iconTop"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_toggle_button_stories=componentMeta,__namedExportsOrder=["defaultStory","checked","disabled","withIcon","sizes","withBadge","appearanceDark","appearanceLight","fullWidth","loading","iconOnly","iconRight","iconTop"]},"./src/react-component-lib/slottedSVG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>SlottedSVG});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={xmlns:"http://www.w3.org/2000/svg"};function slot(){let name=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{ref:e=>e?e.setAttribute("slot",name):null}}const SlottedSVG=_ref=>{let{path,slot:slotName,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{...slot(slotName),...props,...defaultProps,children:[!!path&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:path}),children]})};SlottedSVG.displayName="SlottedSVG";try{SlottedSVG.displayName="SlottedSVG",SlottedSVG.__docgenInfo={description:"",displayName:"SlottedSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-component-lib/slottedSVG.tsx#SlottedSVG"]={docgenInfo:SlottedSVG.__docgenInfo,name:"SlottedSVG",path:"src/react-component-lib/slottedSVG.tsx#SlottedSVG"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);