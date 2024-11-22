"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4702],{"./src/stories/ic-link.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DailyTippers:()=>DailyTippers,HomePage:()=>HomePage,__namedExportsOrder:()=>__namedExportsOrder,dark:()=>dark,default:()=>ic_link_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,light:()=>light,playground:()=>playground,withIcon:()=>withIcon,withReactRouter:()=>withReactRouter});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-link\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                                                                      | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `appearance`     | `appearance`     | The appearance of the link, e.g. dark, light, or default.                                                                                                                        | `"dark" \\| "default" \\| "light"`                                                                                                                                                         | `"default"` |\n| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                                                                                                         | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`           | `href`           | The URL that the link points to.                                                                                                                                                 | `string`                                                                                                                                                                                 | `null`      |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                                                            | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                                                                        | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                                                                | `string`                                                                                                                                                                                 | `undefined` |\n| `showIcon`       | `show-icon`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. The \'open in new tab/window\' icon will display automatically if target="_blank".<br/><br/> | `boolean`                                                                                                                                                                                | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                                                              | `string`                                                                                                                                                                                 | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the link.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-breadcrumb](../ic-breadcrumb)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb --\x3e ic-link\n  style ic-link fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HomePage=()=>(0,jsx_runtime.jsxs)(components.vU,{children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:"Hi there!"}),(0,jsx_runtime.jsx)(components.Cu,{children:"This example is demonstrating the link component with React Router"})]}),DailyTippers=()=>(0,jsx_runtime.jsxs)(components.vU,{children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:"Daily tippers"}),(0,jsx_runtime.jsx)(components.Cu,{children:"Lorem ipsum doloe sit amet, consectetur adipiscing"})]}),defaultArgs={appearance:"default",href:"/",target:"",download:!1};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Link",component:components.D9}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",href:"/",children:(0,jsx_runtime.jsx)(components.D9,{href:"/",children:"This is a link"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With icon",children:(0,jsx_runtime.jsx)(components.D9,{href:"/",showIcon:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"This is a link"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark",children:"Dark"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Dark",children:(0,jsx_runtime.jsx)(components.D9,{href:"/",appearance:"dark",showIcon:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"This is a link"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsx)(components.D9,{href:"/",appearance:"light",showIcon:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"This is a link"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"react-router",children:"React Router"}),"\n","\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"With React Router",decorators:[Story=>(0,jsx_runtime.jsx)(react_router_dist.fS,{initialEntries:["/"],children:(0,jsx_runtime.jsx)(Story,{})})],children:[(0,jsx_runtime.jsx)(components.D9,{style:{paddingRight:"var(--ic-space-xs)"},children:(0,jsx_runtime.jsx)(react_router_dom_dist.k2,{to:"/",slot:"router-item",children:(0,jsx_runtime.jsx)(_components.p,{children:"Home"})})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.k2,{to:"/daily-tippers",slot:"router-item",children:(0,jsx_runtime.jsx)(_components.p,{children:"Daily Tippers"})})}),(0,jsx_runtime.jsxs)(react_router_dist.BV,{children:[(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/",element:(0,jsx_runtime.jsx)(HomePage,{})}),(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/daily-tippers",element:(0,jsx_runtime.jsx)(DailyTippers,{})})]})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{appearance:{options:["default","light","dark"],control:{type:"radio"}},target:{options:["_blank","_self","_parent","_top",""],control:{type:"radio"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"light"==args.appearance?"black":""},children:(0,jsx_runtime.jsx)(components.D9,{href:args.href,appearance:args.appearance,target:args.target,download:!0===args.download,children:"This is a link"})})})})]})}const defaultStory=()=>(0,jsx_runtime.jsx)(components.D9,{href:"/",children:"This is a link"});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<IcLink href="/">{"This is a link"}</IcLink>'}};const withIcon=()=>(0,jsx_runtime.jsx)(components.D9,{href:"/",showIcon:!0,children:(0,jsx_runtime.jsx)("p",{children:"This is a link"})});withIcon.storyName="With icon",withIcon.parameters={storySource:{source:'<IcLink href="/" showIcon><p>{"This is a link"}</p></IcLink>'}};const dark=()=>(0,jsx_runtime.jsx)(components.D9,{href:"/",appearance:"dark",showIcon:!0,children:(0,jsx_runtime.jsx)("p",{children:"This is a link"})});dark.storyName="Dark",dark.parameters={storySource:{source:'<IcLink href="/" appearance="dark" showIcon><p>{"This is a link"}</p></IcLink>'}};const light=()=>(0,jsx_runtime.jsx)(components.D9,{href:"/",appearance:"light",showIcon:!0,children:(0,jsx_runtime.jsx)("p",{children:"This is a link"})});light.storyName="Light",light.parameters={storySource:{source:'<IcLink href="/" appearance="light" showIcon><p>{"This is a link"}</p></IcLink>'},backgrounds:{default:"dark"}};const withReactRouter=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.D9,{style:{paddingRight:"var(--ic-space-xs)"},children:(0,jsx_runtime.jsx)(react_router_dom_dist.k2,{to:"/",slot:"router-item",children:(0,jsx_runtime.jsx)("p",{children:"Home"})})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.k2,{to:"/daily-tippers",slot:"router-item",children:(0,jsx_runtime.jsx)("p",{children:"Daily Tippers"})})}),(0,jsx_runtime.jsxs)(react_router_dist.BV,{children:[(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/",element:(0,jsx_runtime.jsx)(HomePage,{})}),(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/daily-tippers",element:(0,jsx_runtime.jsx)(DailyTippers,{})})]})]});withReactRouter.storyName="With React Router",withReactRouter.parameters={storySource:{source:'<IcLink style={{\n  paddingRight: "var(--ic-space-xs)"\n}}><NavLink to="/" slot="router-item"><p>{"Home"}</p></NavLink></IcLink>\n<IcLink><NavLink to="/daily-tippers" slot="router-item"><p>{"Daily Tippers"}</p></NavLink></IcLink>\n<Routes><Route path="/" element={<HomePage />} /><Route path="/daily-tippers" element={<DailyTippers />} /></Routes>'}},withReactRouter.decorators=[Story=>(0,jsx_runtime.jsx)(react_router_dist.fS,{initialEntries:["/"],children:(0,jsx_runtime.jsx)(Story,{})})];const playground=args=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"light"==args.appearance?"black":""},children:(0,jsx_runtime.jsx)(components.D9,{href:args.href,appearance:args.appearance,target:args.target,download:!0===args.download,children:"This is a link"})});playground.storyName="Playground",playground.argTypes={appearance:{options:["default","light","dark"],control:{type:"radio"}},target:{options:["_blank","_self","_parent","_top",""],control:{type:"radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <div style={{\n  backgroundColor: args.appearance == "light" ? "black" : ""\n}}>\n          <IcLink href={args.href} appearance={args.appearance} target={args.target} download={args.download === true}>This is a link</IcLink>\n        </div>'},loki:{skip:!0}};const componentMeta={title:"Link",component:components.D9,tags:["stories-mdx"],includeStories:["defaultStory","withIcon","dark","light","withReactRouter","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_link_stories=componentMeta,__namedExportsOrder=["HomePage","DailyTippers","defaultArgs","defaultStory","withIcon","dark","light","withReactRouter","playground"]}}]);