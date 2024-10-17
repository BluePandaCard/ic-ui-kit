/*! For license information please see ic-popover-menu-stories-mdx.ec09c84e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[5283],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-popover-menu.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_popover_menu_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,leftPlacement:()=>leftPlacement,playground:()=>playground,topPlacement:()=>topPlacement});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-popover-menu\n\nThis is a wrapper component to be placed around one or more ic-menu-item components.\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute    | Description                                                                                                                             | Type                             | Default     |\n| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |\n| `anchor`    | `anchor`     | The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu.                         | `string`                         | `undefined` |\n| `open`      | `open`       | If `true`, the popover menu will be displayed.                                                                                          | `boolean`                        | `undefined` |\n| `submenuId` | `submenu-id` | The unique identifier for a popover submenu.                                                                                            | `string`                         | `undefined` |\n| `theme`     | `theme`      | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"` | `"inherit"` |\n\n\n## Events\n\n| Event             | Description                              | Type                |\n| ----------------- | ---------------------------------------- | ------------------- |\n| `icPopoverClosed` | Emitted when the popover menu is closed. | `CustomEvent<void>` |\n\n\n## CSS Custom Properties\n\n| Name                   | Description                         |\n| ---------------------- | ----------------------------------- |\n| `--ic-z-index-popover` | z-index of popover menu.            |\n| `--max-height`         | Maximum height of the popover menu. |\n| `--popover-width`      | Default width of the popover menu.  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-menu-item](../ic-menu-item)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-popover-menu --\x3e ic-menu-item\n  ic-popover-menu --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-popover-menu fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_menu_item_readme_namespaceObject='# ic-menu-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute             | Description                                                                                                                                  | Type                                                                                                                                                                                     | Default     |\n| -------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `description`        | `description`         | The description displayed in the menu item, below the label.                                                                                 | `string`                                                                                                                                                                                 | `undefined` |\n| `disabled`           | `disabled`            | If `true`, the menu item will be in disabled state.                                                                                          | `boolean`                                                                                                                                                                                | `false`     |\n| `href`               | `href`                | The URL that the link points to. This will render the menu item as an "a" tag.                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`           | `hreflang`            | The human language of the linked URL.                                                                                                        | `string`                                                                                                                                                                                 | `undefined` |\n| `keyboardShortcut`   | `keyboard-shortcut`   | The label describing the keyboard shortcut for a menu item\'s action.                                                                         | `string`                                                                                                                                                                                 | `undefined` |\n| `label` _(required)_ | `label`               | The label to display in the menu item.                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy`     | `referrerpolicy`      | How much of the referrer to send when following the link.                                                                                    | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`                | `rel`                 | The relationship of the linked URL as space-separated link types.                                                                            | `string`                                                                                                                                                                                 | `undefined` |\n| `submenuTriggerFor`  | `submenu-trigger-for` | This references the popover menu instance that the menu item is a trigger for. If this prop is set, then the variant will always be default. | `string`                                                                                                                                                                                 | `undefined` |\n| `target`             | `target`              | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                          | `string`                                                                                                                                                                                 | `undefined` |\n| `variant`            | `variant`             | The variant of the menu item.                                                                                                                | `"default" \\| "destructive" \\| "toggle"`                                                                                                                                                 | `"default"` |\n\n\n## Slots\n\n| Slot     | Description                                                |\n| -------- | ---------------------------------------------------------- |\n| `"icon"` | Content will be placed to the left of the menu item label. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-popover-menu](../ic-popover-menu)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-popover-menu --\x3e ic-menu-item\n  style ic-menu-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_menu_group_readme_namespaceObject="# ic-menu-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property | Attribute | Description                                          | Type     | Default     |\n| -------- | --------- | ---------------------------------------------------- | -------- | ----------- |\n| `label`  | `label`   | The label to display as the title of the menu group. | `string` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-group --\x3e ic-typography\n  style ic-menu-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={open:!0,groupLabel:"View",description:"",disabled:!1,href:"/",keyboardShortcut:"Cmd + C",label:"Copy code",variant:"default",iconSlot:!0,theme:"inherit"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",svg:"svg",path:"path",div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Popover menu",component:components.Jo}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:ic_menu_item_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:ic_menu_group_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open},children:"Show/Hide popover"}),(0,jsx_runtime.jsxs)(components.Jo,{anchor:"button-1","aria-label":"popover",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Copy code",disabled:!0}),(0,jsx_runtime.jsxs)(components.XH,{label:"View",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find",submenuTriggerFor:"abc123"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc123",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find..."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find icons",children:(0,jsx_runtime.jsxs)(_components.svg,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)(_components.path,{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Show found results",variant:"toggle"})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-placement",children:"Left placement"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left placement",children:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(_components.div,{style:{marginLeft:"1000px"},children:[(0,jsx_runtime.jsx)(components.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open},children:"Show/Hide popover"}),(0,jsx_runtime.jsxs)(components.Jo,{anchor:"button-1","aria-label":"popover",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Copy code",disabled:!0}),(0,jsx_runtime.jsxs)(components.XH,{label:"View",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find",submenuTriggerFor:"abc123"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc123",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find..."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find icons",children:(0,jsx_runtime.jsxs)(_components.svg,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)(_components.path,{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Show found results",variant:"toggle"})]})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-placement",children:"Top placement"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Top placement",children:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(_components.div,{style:{marginTop:"540px"},children:[(0,jsx_runtime.jsx)(components.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open},children:"Show/Hide popover"}),(0,jsx_runtime.jsxs)(components.Jo,{anchor:"button-1","aria-label":"popover",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Copy code",disabled:!0}),(0,jsx_runtime.jsxs)(components.XH,{label:"View",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find",submenuTriggerFor:"abc123"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc123",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find..."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find icons",children:(0,jsx_runtime.jsxs)(_components.svg,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)(_components.path,{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Show found results",variant:"toggle"})]})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{variant:{options:["default","toggle","destructive"],control:{type:"radio"}},iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground",children:args=>(0,jsx_runtime.jsxs)(_components.div,{children:[(0,jsx_runtime.jsxs)(components.Jo,{ariaLabel:"popover",open:args.open,theme:args.theme,children:[(0,jsx_runtime.jsxs)(components.XH,{label:args.groupLabel,children:[(0,jsx_runtime.jsx)(components.Ns,{description:args.description,disabled:args.disabled,href:args.href,keyboardShortcut:args.keyboardShortcut,label:args.label,variant:args.variant,children:(0,jsx_runtime.jsxs)(_components.svg,{slot:args.iconSlot,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)(_components.path,{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",theme:args.theme,children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]})]})})})]})}const defaultStory=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open},children:"Show/Hide popover"}),(0,jsx_runtime.jsxs)(components.Jo,{anchor:"button-1","aria-label":"popover",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Copy code",disabled:!0}),(0,jsx_runtime.jsxs)(components.XH,{label:"View",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find",submenuTriggerFor:"abc123"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc123",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find..."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find icons",children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Show found results",variant:"toggle"})]})]});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'() => {\n  function buttonClick() {\n    document.querySelector("ic-popover-menu").open = !document.querySelector("ic-popover-menu").open;\n  }\n  return <>\n          <IcButton id="button-1" onClick={buttonClick}>\n            Show/Hide popover\n          </IcButton>\n          <IcPopoverMenu anchor="button-1" aria-label="popover">\n            <IcMenuItem label="Copy code" disabled />\n            <IcMenuGroup label="View">\n              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />\n              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n            </IcMenuGroup>\n            <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n          </IcPopoverMenu>\n          <IcPopoverMenu submenuId="abc">\n            <IcMenuItem label="Edit" />\n            <IcMenuItem label="Find" submenuTriggerFor="abc123" />\n            <IcMenuItem label="Delete" variant="destructive" />\n          </IcPopoverMenu>\n          <IcPopoverMenu submenuId="abc123">\n            <IcMenuItem label="Search the web" description="This will search the web to find the thing you are looking for." />\n            <IcMenuItem label="Find..." />\n            <IcMenuItem label="Find icons">\n              <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n              </svg>\n            </IcMenuItem>\n            <IcMenuItem label="Show found results" variant="toggle" />\n          </IcPopoverMenu>\n        </>;\n}'}};const leftPlacement=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{marginLeft:"1000px"},children:[(0,jsx_runtime.jsx)(components.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open},children:"Show/Hide popover"}),(0,jsx_runtime.jsxs)(components.Jo,{anchor:"button-1","aria-label":"popover",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Copy code",disabled:!0}),(0,jsx_runtime.jsxs)(components.XH,{label:"View",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find",submenuTriggerFor:"abc123"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc123",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find..."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find icons",children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Show found results",variant:"toggle"})]})]})});leftPlacement.storyName="Left placement",leftPlacement.parameters={storySource:{source:'() => {\n  function buttonClick() {\n    document.querySelector("ic-popover-menu").open = !document.querySelector("ic-popover-menu").open;\n  }\n  return <>\n          <div style={{\n      marginLeft: "1000px"\n    }}>\n            <IcButton id="button-1" onClick={buttonClick}>\n              Show/Hide popover\n            </IcButton>\n            <IcPopoverMenu anchor="button-1" aria-label="popover">\n              <IcMenuItem label="Copy code" disabled />\n              <IcMenuGroup label="View">\n                <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />\n                <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n              </IcMenuGroup>\n              <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n            </IcPopoverMenu>\n            <IcPopoverMenu submenuId="abc">\n              <IcMenuItem label="Edit" />\n              <IcMenuItem label="Find" submenuTriggerFor="abc123" />\n              <IcMenuItem label="Delete" variant="destructive" />\n            </IcPopoverMenu>\n            <IcPopoverMenu submenuId="abc123">\n              <IcMenuItem label="Search the web" description="This will search the web to find the thing you are looking for." />\n              <IcMenuItem label="Find..." />\n              <IcMenuItem label="Find icons">\n                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n                  <path d="M0 0h24v24H0V0z" fill="none" />\n                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n                </svg>\n              </IcMenuItem>\n              <IcMenuItem label="Show found results" variant="toggle" />\n            </IcPopoverMenu>\n          </div>\n        </>;\n}'}};const topPlacement=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{marginTop:"540px"},children:[(0,jsx_runtime.jsx)(components.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open},children:"Show/Hide popover"}),(0,jsx_runtime.jsxs)(components.Jo,{anchor:"button-1","aria-label":"popover",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Copy code",disabled:!0}),(0,jsx_runtime.jsxs)(components.XH,{label:"View",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find",submenuTriggerFor:"abc123"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc123",children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find..."}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find icons",children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Show found results",variant:"toggle"})]})]})});topPlacement.storyName="Top placement",topPlacement.parameters={storySource:{source:'() => {\n  function buttonClick() {\n    document.querySelector("ic-popover-menu").open = !document.querySelector("ic-popover-menu").open;\n  }\n  return <>\n          <div style={{\n      marginTop: "540px"\n    }}>\n            <IcButton id="button-1" onClick={buttonClick}>\n              Show/Hide popover\n            </IcButton>\n            <IcPopoverMenu anchor="button-1" aria-label="popover">\n              <IcMenuItem label="Copy code" disabled />\n              <IcMenuGroup label="View">\n                <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />\n                <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n              </IcMenuGroup>\n              <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n            </IcPopoverMenu>\n            <IcPopoverMenu submenuId="abc">\n              <IcMenuItem label="Edit" />\n              <IcMenuItem label="Find" submenuTriggerFor="abc123" />\n              <IcMenuItem label="Delete" variant="destructive" />\n            </IcPopoverMenu>\n            <IcPopoverMenu submenuId="abc123">\n              <IcMenuItem label="Search the web" description="This will search the web to find the thing you are looking for." />\n              <IcMenuItem label="Find..." />\n              <IcMenuItem label="Find icons">\n                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n                  <path d="M0 0h24v24H0V0z" fill="none" />\n                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n                </svg>\n              </IcMenuItem>\n              <IcMenuItem label="Show found results" variant="toggle" />\n            </IcPopoverMenu>\n          </div>\n        </>;\n}'}};const playground=args=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(components.Jo,{ariaLabel:"popover",open:args.open,theme:args.theme,children:[(0,jsx_runtime.jsxs)(components.XH,{label:args.groupLabel,children:[(0,jsx_runtime.jsx)(components.Ns,{description:args.description,disabled:args.disabled,href:args.href,keyboardShortcut:args.keyboardShortcut,label:args.label,variant:args.variant,children:(0,jsx_runtime.jsxs)("svg",{slot:args.iconSlot,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})}),(0,jsx_runtime.jsx)(components.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})]}),(0,jsx_runtime.jsx)(components.Ns,{label:"Actions",submenuTriggerFor:"abc"})]}),(0,jsx_runtime.jsxs)(components.Jo,{submenuId:"abc",theme:args.theme,children:[(0,jsx_runtime.jsx)(components.Ns,{label:"Edit"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Find"}),(0,jsx_runtime.jsx)(components.Ns,{label:"Delete",variant:"destructive"})]})]});playground.storyName="Playground",playground.argTypes={variant:{options:["default","toggle","destructive"],control:{type:"radio"}},iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <div>\n        <IcPopoverMenu ariaLabel="popover" open={args.open} theme={args.theme}>\n          <IcMenuGroup label={args.groupLabel}>\n            <IcMenuItem description={args.description} disabled={args.disabled} href={args.href} keyboardShortcut={args.keyboardShortcut} label={args.label} variant={args.variant}>\n              <svg slot={args.iconSlot} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n              </svg>\n            </IcMenuItem>\n            <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n          </IcMenuGroup>\n          <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n          </IcPopoverMenu>\n        <IcPopoverMenu submenuId="abc" theme={args.theme}>\n            <IcMenuItem label="Edit" />\n            <IcMenuItem label="Find" />\n            <IcMenuItem label="Delete" variant="destructive" />\n          </IcPopoverMenu>\n      </div>'},loki:{skip:!0}};const componentMeta={title:"Popover menu",component:components.Jo,tags:["stories-mdx"],includeStories:["defaultStory","leftPlacement","topPlacement","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_popover_menu_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","leftPlacement","topPlacement","playground"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);