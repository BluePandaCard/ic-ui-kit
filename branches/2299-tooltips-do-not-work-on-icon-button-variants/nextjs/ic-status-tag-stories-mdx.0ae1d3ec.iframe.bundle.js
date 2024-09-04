"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[9223],{"../react/src/stories/ic-status-tag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,danger:()=>danger,default:()=>ic_status_tag_stories,defaultArgs:()=>defaultArgs,deprecatedAppearance:()=>deprecatedAppearance,deprecatedSmall:()=>deprecatedSmall,neutral:()=>neutral,playground:()=>playground,size:()=>size,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-status-tag\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute    | Description                                                                                                                                                                  | Type                                              | Default     |\n| -------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |\n| `announced`          | `announced`  | If `true`, role=\'status\' is added to the component and it will act as an \'aria-live\' region. Screen readers will announce changes to the `label`, but not the initial value. | `boolean`                                         | `false`     |\n| `appearance`         | `appearance` | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Use variant prop instead.<br/><br/>                                                    | `"filled" \\| "outlined"`                          | `undefined` |\n| `label` _(required)_ | `label`      | The content rendered within the status tag.                                                                                                                                  | `string`                                          | `undefined` |\n| `size`               | `size`       | The size of the status tag component.                                                                                                                                        | `"default" \\| "large" \\| "small"`                 | `"default"` |\n| `small`              | `small`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                          | `boolean`                                         | `false`     |\n| `status`             | `status`     | The colour of the status tag.                                                                                                                                                | `"danger" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `variant`            | `variant`    | The emphasis of the status tag.                                                                                                                                              | `"filled" \\| "outlined"`                          | `"filled"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-status-tag --\x3e ic-typography\n  style ic-status-tag fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const defaultArgs={announced:!1,label:"Status tag label",size:"default",status:"neutral",variant:"filled"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Status tag",component:components.JY}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Neutral",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.JY,{label:"Neutral",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Success",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success"}),(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Warning",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning"}),(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Danger",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger"}),(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Size",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"Small",variant:"outlined",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"default",size:"default"}),(0,jsx_runtime.jsx)(components.JY,{label:"default",variant:"outlined",size:"default"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",size:"large"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",variant:"outlined",size:"large"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Deprecated - small",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Small",small:!0}),(0,jsx_runtime.jsx)(components.JY,{label:"Small",variant:"outlined",small:!0})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---appearance",children:"Deprecated - appearance"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Deprecated - appearance",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.JY,{label:"Neutral",appearance:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{size:{options:["default","small","large"],control:{type:"inline-radio"}},status:{options:["neutral","success","warning","danger"],control:{type:"select"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(components.JY,{label:args.label,size:args.size,status:args.status,variant:args.variant,announced:args.announced})})})]})}const neutral=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.JY,{label:"Neutral",variant:"outlined"})]});neutral.storyName="Neutral",neutral.parameters={storySource:{source:'<IcStatusTag label="Neutral" />\n<IcStatusTag label="Neutral" variant="outlined" />'}};const success=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success"}),(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success",variant:"outlined"})]});success.storyName="Success",success.parameters={storySource:{source:'<IcStatusTag label="Success" status="success" />\n<IcStatusTag label="Success" status="success" variant="outlined" />'}};const warning=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning"}),(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning",variant:"outlined"})]});warning.storyName="Warning",warning.parameters={storySource:{source:'<IcStatusTag label="Warning" status="warning" />\n<IcStatusTag label="Warning" status="warning" variant="outlined" />'}};const danger=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger"}),(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger",variant:"outlined"})]});danger.storyName="Danger",danger.parameters={storySource:{source:'<IcStatusTag label="Danger" status="danger" />\n<IcStatusTag label="Danger" status="danger" variant="outlined" />'}};const size=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"Small",variant:"outlined",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"default",size:"default"}),(0,jsx_runtime.jsx)(components.JY,{label:"default",variant:"outlined",size:"default"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",size:"large"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",variant:"outlined",size:"large"})]});size.storyName="Size",size.parameters={storySource:{source:'<IcStatusTag label="Small" size="small" />\n<IcStatusTag label="Small" variant="outlined" size="small" />\n<IcStatusTag label="default" size="default" />\n<IcStatusTag label="default" variant="outlined" size="default" />\n<IcStatusTag label="large" size="large" />\n<IcStatusTag label="large" variant="outlined" size="large" />'}};const deprecatedSmall=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Small",small:!0}),(0,jsx_runtime.jsx)(components.JY,{label:"Small",variant:"outlined",small:!0})]});deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'<IcStatusTag label="Small" small />\n<IcStatusTag label="Small" variant="outlined" small />'}};const deprecatedAppearance=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.JY,{label:"Neutral",appearance:"outlined"})]});deprecatedAppearance.storyName="Deprecated - appearance",deprecatedAppearance.parameters={storySource:{source:'<IcStatusTag label="Neutral" />\n<IcStatusTag label="Neutral" appearance="outlined" />'}};const playground=args=>(0,jsx_runtime.jsx)(components.JY,{label:args.label,size:args.size,status:args.status,variant:args.variant,announced:args.announced});playground.storyName="Playground",playground.argTypes={size:{options:["default","small","large"],control:{type:"inline-radio"}},status:{options:["neutral","success","warning","danger"],control:{type:"select"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => <IcStatusTag label={args.label} size={args.size} status={args.status} variant={args.variant} announced={args.announced}></IcStatusTag>"},loki:{skip:!0}};const componentMeta={title:"Status tag",component:components.JY,tags:["stories-mdx"],includeStories:["neutral","success","warning","danger","size","deprecatedSmall","deprecatedAppearance","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_status_tag_stories=componentMeta,__namedExportsOrder=["defaultArgs","neutral","success","warning","danger","size","deprecatedSmall","deprecatedAppearance","playground"]}}]);