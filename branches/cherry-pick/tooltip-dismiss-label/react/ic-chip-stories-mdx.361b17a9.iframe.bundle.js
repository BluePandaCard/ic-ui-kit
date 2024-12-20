(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4940],{"./src/stories/ic-chip.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AGGrid:()=>AGGrid,UserIcon:()=>UserIcon,__namedExportsOrder:()=>__namedExportsOrder,customColour:()=>customColour,default:()=>ic_chip_stories,defaultArgs:()=>defaultArgs,disabled:()=>disabled,dismissible:()=>dismissible,inAnAgGrid:()=>inAnAgGrid,outlined:()=>outlined,playground:()=>playground,staticStory:()=>staticStory,withoutIcons:()=>withoutIcons});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),index_esm=__webpack_require__("./node_modules/ag-grid-react/dist/package/index.esm.mjs"),components=(__webpack_require__("./node_modules/ag-grid-community/styles/ag-grid.css"),__webpack_require__("./node_modules/ag-grid-community/styles/ag-theme-quartz.css"),__webpack_require__("./src/components.ts"));const readme_namespaceObject='# ic-chip\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                | Attribute                | Description                                                                                                                                                                          | Type                                                    | Default     |\n| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ----------- |\n| `customColor`           | `custom-color`           | The custom chip colour. This will override the theme colour. Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".                        | ``#${string}` \\| `rgb(${string})` \\| `rgba(${string})`` | `null`      |\n| `disabled`              | `disabled`               | If `true`, the chip will appear disabled.                                                                                                                                            | `boolean`                                               | `false`     |\n| `dismissLabel`          | `dismiss-label`          | The text in the dismiss button tooltip and aria label.                                                                                                                               | `string`                                                | `"Dismiss"` |\n| `dismissible`           | `dismissible`            | If `true`, the chip will have a close button at the end to dismiss it.                                                                                                               | `boolean`                                               | `false`     |\n| `label` _(required)_    | `label`                  | The text rendered within the chip.                                                                                                                                                   | `string`                                                | `undefined` |\n| `size`                  | `size`                   | The size of the chip.                                                                                                                                                                | `"large" \\| "medium" \\| "small"`                        | `"medium"`  |\n| `theme`                 | `theme`                  | Sets the chip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component. Setting the "customColor" prop will override this. | `"dark" \\| "inherit" \\| "light"`                        | `"inherit"` |\n| `transparentBackground` | `transparent-background` | If `true`, the outlined variant of chip will have a transparent background rather than the theme defined color.                                                                      | `boolean`                                               | `true`      |\n| `variant`               | `variant`                | The emphasis of the chip.                                                                                                                                                            | `"filled" \\| "outlined"`                                | `"filled"`  |\n\n\n## Events\n\n| Event       | Description                                  | Type                |\n| ----------- | -------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the chip. | `CustomEvent<void>` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the chip.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                           |\n| --------- | ----------------------------------------------------- |\n| `"badge"` | Badge component overlaying the top right of the chip. |\n| `"icon"`  | Content will be rendered at the start of the chip.    |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-tooltip](../ic-tooltip)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-chip --\x3e ic-typography\n  ic-chip --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-chip fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UserIcon=()=>{const _components=Object.assign({svg:"svg",path:"path"},(0,lib.RP)());return(0,jsx_runtime.jsx)(_components.svg,{slot:"icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-label":"account",children:(0,jsx_runtime.jsx)(_components.path,{d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"})})},AGGrid=()=>{const _components=Object.assign({div:"div"},(0,lib.RP)()),colDefs=[{field:"firstName"},{field:"lastName"},{field:"jobTitle",cellRenderer:params=>(0,jsx_runtime.jsx)(components.XQ,{label:params.value})},{field:"age"}];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(_components.div,{className:"ag-theme-quartz",children:(0,jsx_runtime.jsx)(index_esm.W6,{rowData:[{firstName:"Joe",lastName:"Bloggs",jobTitle:"Developer",age:30},{firstName:"Sarah",lastName:"Smith",jobTitle:"Analyst",age:28},{firstName:"Mark",lastName:"Owens",jobTitle:"Team Lead",age:45},{firstName:"Naomi",lastName:"Thomas",jobTitle:"Senior Software Architect",age:32},{firstName:"Luke",lastName:"Ashford",jobTitle:"Junior Developer",age:18}],columnDefs:colDefs,domLayout:"autoHeight"})})})},defaultArgs={customColor:null,disabled:!1,dismissible:!1,label:"Chip label",size:"medium",theme:"inherit",transparentBackground:!0,variant:"filled",badgeSlot:"badge"};function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Chip",component:components.XQ}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"static",children:"Static"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Static",children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"outlined",children:"Outlined"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Outlined",children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dismissible",children:"Dismissible"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Dismissible",children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"without-icons",children:"Without icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Without icons",children:[(0,jsx_runtime.jsx)(components.XQ,{label:"Label"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",dismissible:!0}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined",dismissible:!0})]})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"custom-colour",children:"Custom colour"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Custom colour",children:[(0,jsx_runtime.jsx)(components.XQ,{label:"Label",customColor:"#F8C8DC",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined",customColor:"#F8C8DC",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined",transparentBackground:!1,customColor:"#F8C8DC",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"in-an-ag-grid",children:"In an AG Grid"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"In an AG Grid",children:(0,jsx_runtime.jsx)(AGGrid,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{customColor:{control:{type:"text"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}},badgeSlot:{options:["badge",""],control:{type:"select"}}},name:"Playground",children:args=>(0,jsx_runtime.jsxs)(components.XQ,{label:args.label,customColor:args.customColor,dismissible:args.dismissible,disabled:args.disabled,size:args.size,theme:args.theme,variant:args.variant,transparentBackground:args.transparentBackground,children:[(0,jsx_runtime.jsx)(UserIcon,{}),(0,jsx_runtime.jsx)(components.E3,{label:"1",slot:args.badgeSlot,variant:"success",position:"near"})]})})})]})}const staticStory=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]});staticStory.storyName="Static",staticStory.parameters={storySource:{source:'<div style={{\n  "display": "flex",\n  "flex-direction": "column"\n}}><div style={{\n    "background-color": "white",\n    "padding": "8px"\n  }}><IcTheme theme="light"><IcTypography variant="body">{"Light"}</IcTypography><IcChip label="Small" size="small"><UserIcon /></IcChip><IcChip label="Medium"><UserIcon /></IcChip><IcChip label="Large" size="large"><UserIcon /></IcChip></IcTheme></div><div style={{\n    "background-color": "black",\n    "padding": "8px"\n  }}><IcTheme theme="dark"><IcTypography variant="body">{"Dark"}</IcTypography><IcChip label="Small" size="small"><UserIcon /></IcChip><IcChip label="Medium"><UserIcon /></IcChip><IcChip label="Large" size="large"><UserIcon /></IcChip></IcTheme></div></div>'}};const outlined=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]});outlined.storyName="Outlined",outlined.parameters={storySource:{source:'<div style={{\n  "display": "flex",\n  "flex-direction": "column"\n}}><div style={{\n    "background-color": "white",\n    "padding": "8px"\n  }}><IcTheme theme="light"><IcTypography variant="body">{"Light"}</IcTypography><IcChip label="Small" size="small" variant="outlined"><UserIcon /></IcChip><IcChip label="Medium" variant="outlined"><UserIcon /></IcChip><IcChip label="Large" size="large" variant="outlined"><UserIcon /></IcChip></IcTheme></div><div style={{\n    "background-color": "black",\n    "padding": "8px"\n  }}><IcTheme theme="dark"><IcTypography variant="body">{"Dark"}</IcTypography><IcChip label="Small" size="small" variant="outlined"><UserIcon /></IcChip><IcChip label="Medium" variant="outlined"><UserIcon /></IcChip><IcChip label="Large" size="large" variant="outlined"><UserIcon /></IcChip></IcTheme></div></div>'}};const dismissible=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]});dismissible.storyName="Dismissible",dismissible.parameters={storySource:{source:'<div style={{\n  "display": "flex",\n  "flex-direction": "column"\n}}><div style={{\n    "background-color": "white",\n    "padding": "8px"\n  }}><IcTheme theme="light"><IcTypography variant="body">{"Light"}</IcTypography><IcChip label="Small" size="small" dismissible><UserIcon /></IcChip><IcChip label="Medium" dismissible><UserIcon /></IcChip><IcChip label="Large" size="large" dismissible><UserIcon /></IcChip><IcChip label="Small" size="small" variant="outlined" dismissible><UserIcon /></IcChip><IcChip label="Medium" variant="outlined" dismissible><UserIcon /></IcChip><IcChip label="Large" size="large" variant="outlined" dismissible><UserIcon /></IcChip></IcTheme></div><div style={{\n    "background-color": "black",\n    "padding": "8px"\n  }}><IcTheme theme="dark"><IcTypography variant="body">{"Dark"}</IcTypography><IcChip label="Small" size="small" dismissible><UserIcon /></IcChip><IcChip label="Medium" dismissible><UserIcon /></IcChip><IcChip label="Large" size="large" dismissible><UserIcon /></IcChip><IcChip label="Small" size="small" variant="outlined" dismissible><UserIcon /></IcChip><IcChip label="Medium" variant="outlined" dismissible><UserIcon /></IcChip><IcChip label="Large" size="large" variant="outlined" dismissible><UserIcon /></IcChip></IcTheme></div></div>'}};const disabled=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex","flex-direction":"column"},children:[(0,jsx_runtime.jsx)("div",{style:{"background-color":"white",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"light",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Light"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})}),(0,jsx_runtime.jsx)("div",{style:{"background-color":"black",padding:"8px"},children:(0,jsx_runtime.jsxs)(components.S3,{theme:"dark",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"Dark"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Small",size:"small",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Medium",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Large",size:"large",variant:"outlined",dismissible:!0,disabled:!0,children:(0,jsx_runtime.jsx)(UserIcon,{})})]})})]});disabled.storyName="Disabled",disabled.parameters={storySource:{source:'<div style={{\n  "display": "flex",\n  "flex-direction": "column"\n}}><div style={{\n    "background-color": "white",\n    "padding": "8px"\n  }}><IcTheme theme="light"><IcTypography variant="body">{"Light"}</IcTypography><IcChip label="Small" size="small" dismissible disabled><UserIcon /></IcChip><IcChip label="Medium" dismissible disabled><UserIcon /></IcChip><IcChip label="Large" size="large" dismissible disabled><UserIcon /></IcChip><IcChip label="Small" size="small" variant="outlined" dismissible disabled><UserIcon /></IcChip><IcChip label="Medium" variant="outlined" dismissible disabled><UserIcon /></IcChip><IcChip label="Large" size="large" variant="outlined" dismissible disabled><UserIcon /></IcChip></IcTheme></div><div style={{\n    "background-color": "black",\n    "padding": "8px"\n  }}><IcTheme theme="dark"><IcTypography variant="body">{"Dark"}</IcTypography><IcChip label="Small" size="small" dismissible disabled><UserIcon /></IcChip><IcChip label="Medium" dismissible disabled><UserIcon /></IcChip><IcChip label="Large" size="large" dismissible disabled><UserIcon /></IcChip><IcChip label="Small" size="small" variant="outlined" dismissible disabled><UserIcon /></IcChip><IcChip label="Medium" variant="outlined" dismissible disabled><UserIcon /></IcChip><IcChip label="Large" size="large" variant="outlined" dismissible disabled><UserIcon /></IcChip></IcTheme></div></div>'}};const withoutIcons=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.XQ,{label:"Label"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined"}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",dismissible:!0}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined",dismissible:!0})]});withoutIcons.storyName="Without icons",withoutIcons.parameters={storySource:{source:'<IcChip label="Label" />\n<IcChip label="Label" variant="outlined" />\n<IcChip label="Label" dismissible />\n<IcChip label="Label" variant="outlined" dismissible />'}};const customColour=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.XQ,{label:"Label",customColor:"#F8C8DC",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined",customColor:"#F8C8DC",children:(0,jsx_runtime.jsx)(UserIcon,{})}),(0,jsx_runtime.jsx)(components.XQ,{label:"Label",variant:"outlined",transparentBackground:!1,customColor:"#F8C8DC",children:(0,jsx_runtime.jsx)(UserIcon,{})})]});customColour.storyName="Custom colour",customColour.parameters={storySource:{source:'<IcChip label="Label" customColor="#F8C8DC"><UserIcon /></IcChip>\n<IcChip label="Label" variant="outlined" customColor="#F8C8DC"><UserIcon /></IcChip>\n<IcChip label="Label" variant="outlined" transparentBackground={false} customColor="#F8C8DC"><UserIcon /></IcChip>'}};const inAnAgGrid=()=>(0,jsx_runtime.jsx)(AGGrid,{});inAnAgGrid.storyName="In an AG Grid",inAnAgGrid.parameters={storySource:{source:"<AGGrid />"}};const playground=args=>(0,jsx_runtime.jsxs)(components.XQ,{label:args.label,customColor:args.customColor,dismissible:args.dismissible,disabled:args.disabled,size:args.size,theme:args.theme,variant:args.variant,transparentBackground:args.transparentBackground,children:[(0,jsx_runtime.jsx)(UserIcon,{}),(0,jsx_runtime.jsx)(components.E3,{label:"1",slot:args.badgeSlot,variant:"success",position:"near"})]});playground.storyName="Playground",playground.argTypes={customColor:{control:{type:"text"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}},badgeSlot:{options:["badge",""],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <IcChip label={args.label} customColor={args.customColor} dismissible={args.dismissible} disabled={args.disabled} size={args.size} theme={args.theme} variant={args.variant} transparentBackground={args.transparentBackground}>\n        <UserIcon />\n        <IcBadge label="1" slot={args.badgeSlot} variant="success" position="near" />\n      </IcChip>'},loki:{skip:!0}};const componentMeta={title:"Chip",component:components.XQ,tags:["stories-mdx"],includeStories:["staticStory","outlined","dismissible","disabled","withoutIcons","customColour","inAnAgGrid","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_chip_stories=componentMeta,__namedExportsOrder=["UserIcon","AGGrid","defaultArgs","staticStory","outlined","dismissible","disabled","withoutIcons","customColour","inAnAgGrid","playground"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);