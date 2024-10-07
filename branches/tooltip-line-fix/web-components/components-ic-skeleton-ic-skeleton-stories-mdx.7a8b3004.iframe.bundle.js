/*! For license information please see components-ic-skeleton-ic-skeleton-stories-mdx.7a8b3004.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9501],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-skeleton/ic-skeleton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,circle:()=>circle,default:()=>ic_skeleton_stories,defaultArgs:()=>defaultArgs,example:()=>example,light:()=>light,playground:()=>playground,rectangle:()=>rectangle,text:()=>ic_skeleton_stories_text});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-skeleton\n\nWhen using the skeleton component, an aria-live level should be applied to the parent element of the skeleton and the element that it is\nrepresenting so that any changes, such as the real element replacing the skeleton placeholder, are announced to assistive technology like screen readers. The recommendation is to use aria-live="polite" over aria-live="recommended" unless changes are critically important. \n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute    | Description                                         | Type                                | Default       |\n| ------------ | ------------ | --------------------------------------------------- | ----------------------------------- | ------------- |\n| `appearance` | `appearance` | The appearance of the skeleton.                     | `"default" \\| "light"`              | `"default"`   |\n| `variant`    | `variant`    | The variant of the skeleton that will be displayed. | `"circle" \\| "rectangle" \\| "text"` | `"rectangle"` |\n\n\n----------------------------------------------\n\n\n';__webpack_require__("./src/components/ic-typography/readme.md");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={appearance:"default",variant:"rectangle"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Skeleton",component:"ic-skeleton"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"rectangle",children:"Rectangle"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Rectangle",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-typography variant="h4">Default</ic-typography>
      <ic-skeleton></ic-skeleton>
      <ic-typography variant="h4">Inherited from child</ic-typography>
      <ic-skeleton
        ><div style="height:200px;width:450px;">Test text</div></ic-skeleton
      >
      <ic-typography variant="h4"
        >Height and width set with styles</ic-typography
      >
      <ic-skeleton style="height:200px;width:200px;"></ic-skeleton>
      <ic-typography variant="h4">Height set with styles</ic-typography>
      <ic-skeleton style="height:75px;"></ic-skeleton>
      <ic-typography variant="h4">Width set with styles</ic-typography>
      <ic-skeleton style="width:450px;"></ic-skeleton>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circle",children:"Circle"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circle",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-skeleton variant="circle" />`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text",children:"Text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Text",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-typography variant="h1">h1</ic-typography>
      <ic-typography variant="h1"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h2">h2</ic-typography>
      <ic-typography variant="h2"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h3">h3</ic-typography>
      <ic-typography variant="h3"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h4">h4</ic-typography>
      <ic-typography variant="h4"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="subtitle-large">subtitle-large</ic-typography>
      <ic-typography variant="subtitle-large"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="subtitle-small">subtitle-small</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="body">body</ic-typography>
      <ic-typography variant="body"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption">caption</ic-typography>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label">label</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption-uppercase"
        >caption uppercase</ic-typography
      >
      <ic-typography variant="caption-uppercase"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label-uppercase">label uppercase</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"example",children:"Example"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Example",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-skeleton variant="circle" height="20"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton></ic-skeleton>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-skeleton
        variant="circle"
        height="20"
        appearance="light"
      ></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text" appearance="light"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton appearance="light"></ic-skeleton>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{appearance:{options:["default","light"],control:{type:"inline-radio"}},variant:{options:["rectangle","circle","text"],control:{type:"radio"}}},name:"Playground",children:args=>lit_html.qy` <div>
        <ic-skeleton
          appearance=${args.appearance}
          variant=${args.variant}
          style="height: ${"circle"==args.variant?"20px":""};width:${"circle"==args.variant?"20px":""};"
        ></ic-skeleton>
      </div>`})})]})}const rectangle=()=>lit_html.qy` <ic-typography variant="h4">Default</ic-typography>
      <ic-skeleton></ic-skeleton>
      <ic-typography variant="h4">Inherited from child</ic-typography>
      <ic-skeleton
        ><div style="height:200px;width:450px;">Test text</div></ic-skeleton
      >
      <ic-typography variant="h4"
        >Height and width set with styles</ic-typography
      >
      <ic-skeleton style="height:200px;width:200px;"></ic-skeleton>
      <ic-typography variant="h4">Height set with styles</ic-typography>
      <ic-skeleton style="height:75px;"></ic-skeleton>
      <ic-typography variant="h4">Width set with styles</ic-typography>
      <ic-skeleton style="width:450px;"></ic-skeleton>`;rectangle.storyName="Rectangle",rectangle.parameters={storySource:{source:'html` <ic-typography variant="h4">Default</ic-typography>\n      <ic-skeleton></ic-skeleton>\n      <ic-typography variant="h4">Inherited from child</ic-typography>\n      <ic-skeleton\n        ><div style="height:200px;width:450px;">Test text</div></ic-skeleton\n      >\n      <ic-typography variant="h4"\n        >Height and width set with styles</ic-typography\n      >\n      <ic-skeleton style="height:200px;width:200px;"></ic-skeleton>\n      <ic-typography variant="h4">Height set with styles</ic-typography>\n      <ic-skeleton style="height:75px;"></ic-skeleton>\n      <ic-typography variant="h4">Width set with styles</ic-typography>\n      <ic-skeleton style="width:450px;"></ic-skeleton>`'},loki:{skip:!0}};const circle=()=>lit_html.qy`<ic-skeleton variant="circle" />`;circle.storyName="Circle",circle.parameters={storySource:{source:'html`<ic-skeleton variant="circle" />`'},loki:{skip:!0}};const ic_skeleton_stories_text=()=>lit_html.qy` <ic-typography variant="h1">h1</ic-typography>
      <ic-typography variant="h1"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h2">h2</ic-typography>
      <ic-typography variant="h2"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h3">h3</ic-typography>
      <ic-typography variant="h3"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h4">h4</ic-typography>
      <ic-typography variant="h4"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="subtitle-large">subtitle-large</ic-typography>
      <ic-typography variant="subtitle-large"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="subtitle-small">subtitle-small</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="body">body</ic-typography>
      <ic-typography variant="body"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption">caption</ic-typography>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label">label</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption-uppercase"
        >caption uppercase</ic-typography
      >
      <ic-typography variant="caption-uppercase"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label-uppercase">label uppercase</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>`;ic_skeleton_stories_text.storyName="Text",ic_skeleton_stories_text.parameters={storySource:{source:'html` <ic-typography variant="h1">h1</ic-typography>\n      <ic-typography variant="h1"><ic-skeleton variant="text" /></ic-typography>\n      <ic-typography variant="h2">h2</ic-typography>\n      <ic-typography variant="h2"><ic-skeleton variant="text" /></ic-typography>\n      <ic-typography variant="h3">h3</ic-typography>\n      <ic-typography variant="h3"><ic-skeleton variant="text" /></ic-typography>\n      <ic-typography variant="h4">h4</ic-typography>\n      <ic-typography variant="h4"><ic-skeleton variant="text" /></ic-typography>\n      <ic-typography variant="subtitle-large">subtitle-large</ic-typography>\n      <ic-typography variant="subtitle-large"\n        ><ic-skeleton variant="text"\n      /></ic-typography>\n      <ic-typography variant="subtitle-small">subtitle-small</ic-typography>\n      <ic-typography variant="subtitle-small"\n        ><ic-skeleton variant="text"\n      /></ic-typography>\n      <ic-typography variant="body">body</ic-typography>\n      <ic-typography variant="body"\n        ><ic-skeleton variant="text"\n      /></ic-typography>\n      <ic-typography variant="caption">caption</ic-typography>\n      <ic-typography variant="caption"\n        ><ic-skeleton variant="text"\n      /></ic-typography>\n      <ic-typography variant="label">label</ic-typography>\n      <ic-typography variant="subtitle-small"\n        ><ic-skeleton variant="text"\n      /></ic-typography>\n      <ic-typography variant="caption-uppercase"\n        >caption uppercase</ic-typography\n      >\n      <ic-typography variant="caption-uppercase"\n        ><ic-skeleton variant="text"\n      /></ic-typography>\n      <ic-typography variant="label-uppercase">label uppercase</ic-typography>\n      <ic-typography variant="subtitle-small"\n        ><ic-skeleton variant="text"\n      /></ic-typography>`'},loki:{skip:!0}};const example=()=>lit_html.qy` <ic-skeleton variant="circle" height="20"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton></ic-skeleton>`;example.storyName="Example",example.parameters={storySource:{source:'html` <ic-skeleton variant="circle" height="20"></ic-skeleton>\n      <div style="height:8px"></div>\n      <ic-typography variant="caption"\n        ><ic-skeleton variant="text"\n      /></ic-typography>\n      <div style="height:8px"></div>\n      <ic-skeleton></ic-skeleton>`'},loki:{skip:!0}};const light=()=>lit_html.qy` <ic-skeleton
        variant="circle"
        height="20"
        appearance="light"
      ></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text" appearance="light"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton appearance="light"></ic-skeleton>`;light.storyName="Light",light.parameters={storySource:{source:'html` <ic-skeleton\n        variant="circle"\n        height="20"\n        appearance="light"\n      ></ic-skeleton>\n      <div style="height:8px"></div>\n      <ic-typography variant="caption"\n        ><ic-skeleton variant="text" appearance="light"\n      /></ic-typography>\n      <div style="height:8px"></div>\n      <ic-skeleton appearance="light"></ic-skeleton>`'},loki:{skip:!0}};const playground=args=>lit_html.qy` <div>
        <ic-skeleton
          appearance=${args.appearance}
          variant=${args.variant}
          style="height: ${"circle"==args.variant?"20px":""};width:${"circle"==args.variant?"20px":""};"
        ></ic-skeleton>
      </div>`;playground.storyName="Playground",playground.argTypes={appearance:{options:["default","light"],control:{type:"inline-radio"}},variant:{options:["rectangle","circle","text"],control:{type:"radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html` <div>\n        <ic-skeleton\n          appearance=${args.appearance}\n          variant=${args.variant}\n          style="height: ${args.variant == "circle" ? "20px" : ""};width:${args.variant == "circle" ? "20px" : ""};"\n        ></ic-skeleton>\n      </div>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Skeleton",tags:["stories-mdx"],includeStories:["rectangle","circle","text","example","light","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_skeleton_stories=componentMeta,__namedExportsOrder=["defaultArgs","rectangle","circle","text","example","light","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ic-typography/readme.md":module=>{"use strict";module.exports='# ic-typography\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property               | Attribute                | Description                                                                                                                                                                           | Type                                                                                                                                                                                                                                   | Default     |\n| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `applyVerticalMargins` | `apply-vertical-margins` | If `true`, appropriate top and bottom margins will be applied to the typography.                                                                                                      | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `bold`                 | `bold`                   | If `true`, the typography will have a bold font weight. Note: This will have no impact on variants that already use an equivalent or higher font weight (h1, h2, and subtitle-large). | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `italic`               | `italic`                 | If `true`, the typography will have an italic font style.                                                                                                                             | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `maxLines`             | `max-lines`              | The number of lines to display before truncating the text, only used for the \'body\' variant.                                                                                          | `number`                                                                                                                                                                                                                               | `undefined` |\n| `strikethrough`        | `strikethrough`          | If `true`, the typography will have a line through it.                                                                                                                                | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `theme`                | `theme`                  | Sets the text color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                                                                       | `"inherit"` |\n| `underline`            | `underline`              | If `true`, the typography will have a line under it.                                                                                                                                  | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `variant`              | `variant`                | The ICDS typography style to use.                                                                                                                                                     | `"badge" \\| "badge-small" \\| "body" \\| "caption" \\| "caption-uppercase" \\| "code-extra-small" \\| "code-large" \\| "code-small" \\| "h1" \\| "h2" \\| "h3" \\| "h4" \\| "label" \\| "label-uppercase" \\| "subtitle-large" \\| "subtitle-small"` | `"body"`    |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-accordion](../ic-accordion)\n - [ic-accordion-group](../ic-accordion-group)\n - [ic-alert](../ic-alert)\n - [ic-badge](../ic-badge)\n - [ic-card-vertical](../ic-card-vertical)\n - [ic-checkbox](../ic-checkbox)\n - [ic-chip](../ic-chip)\n - [ic-classification-banner](../ic-classification-banner)\n - [ic-data-list](../ic-data-list)\n - [ic-data-row](../ic-data-row)\n - [ic-dialog](../ic-dialog)\n - [ic-empty-state](../ic-empty-state)\n - [ic-footer](../ic-footer)\n - [ic-footer-link-group](../ic-footer-link-group)\n - [ic-hero](../ic-hero)\n - [ic-input-label](../ic-input-label)\n - [ic-input-validation](../ic-input-validation)\n - [ic-loading-indicator](../ic-loading-indicator)\n - [ic-menu](../ic-menu)\n - [ic-menu-group](../ic-menu-group)\n - [ic-menu-item](../ic-menu-item)\n - [ic-navigation-group](../ic-navigation-group)\n - [ic-navigation-item](../ic-navigation-item)\n - [ic-navigation-menu](../ic-navigation-menu)\n - [ic-page-header](../ic-page-header)\n - [ic-pagination-item](../ic-pagination-item)\n - [ic-popover-menu](../ic-popover-menu)\n - [ic-radio-option](../ic-radio-option)\n - [ic-select](../ic-select)\n - [ic-side-navigation](../ic-side-navigation)\n - [ic-status-tag](../ic-status-tag)\n - [ic-step](../ic-step)\n - [ic-switch](../ic-switch)\n - [ic-tab](../ic-tab)\n - [ic-text-field](../ic-text-field)\n - [ic-toast](../ic-toast)\n - [ic-tooltip](../ic-tooltip)\n - [ic-top-navigation](../ic-top-navigation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-accordion --\x3e ic-typography\n  ic-accordion-group --\x3e ic-typography\n  ic-alert --\x3e ic-typography\n  ic-badge --\x3e ic-typography\n  ic-card-vertical --\x3e ic-typography\n  ic-checkbox --\x3e ic-typography\n  ic-chip --\x3e ic-typography\n  ic-classification-banner --\x3e ic-typography\n  ic-data-list --\x3e ic-typography\n  ic-data-row --\x3e ic-typography\n  ic-dialog --\x3e ic-typography\n  ic-empty-state --\x3e ic-typography\n  ic-footer --\x3e ic-typography\n  ic-footer-link-group --\x3e ic-typography\n  ic-hero --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  ic-menu --\x3e ic-typography\n  ic-menu-group --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-navigation-group --\x3e ic-typography\n  ic-navigation-item --\x3e ic-typography\n  ic-navigation-menu --\x3e ic-typography\n  ic-page-header --\x3e ic-typography\n  ic-pagination-item --\x3e ic-typography\n  ic-popover-menu --\x3e ic-typography\n  ic-radio-option --\x3e ic-typography\n  ic-select --\x3e ic-typography\n  ic-side-navigation --\x3e ic-typography\n  ic-status-tag --\x3e ic-typography\n  ic-step --\x3e ic-typography\n  ic-switch --\x3e ic-typography\n  ic-tab --\x3e ic-typography\n  ic-text-field --\x3e ic-typography\n  ic-toast --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-top-navigation --\x3e ic-typography\n  style ic-typography fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-skeleton-ic-skeleton-stories-mdx.7a8b3004.iframe.bundle.js.map