(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/index.mdx":function(e,n,t){"use strict";t.r(n);var i=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/react/index.js"),u=t.n(r),o=t("./node_modules/@mdx-js/react/dist/index.es.js"),c=t("./node_modules/docz/dist/index.esm.js"),l=t("./node_modules/classnames/index.js"),s=t.n(l);function b(e){return"0"===e?0:parseInt(e.replace(/^0/,""),10)}function m(e){return e<10?"0".concat(e):"".concat(e)}function p(e,n,t){var i=b(e);if(Number.isNaN(i))return"00";var a=i+t;return m(a<0?n:a>n?0:a)}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"parseNumStr",filename:"src\\utils\\time-format-number.ts"}}),m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"formatNumValue",filename:"src\\utils\\time-format-number.ts"}}),p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"add",filename:"src\\utils\\time-format-number.ts"}});var d="--";"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EMPTY_VALUE",filename:"src\\constants.ts"}});var j=/^[0-9]$/;"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NUMBER_REGEXP",filename:"src\\constants.ts"}});var O="ArrowUp";"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"KEY_ARROW_UP",filename:"src\\constants.ts"}});var f="ArrowDown";"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"KEY_ARROW_DOWN",filename:"src\\constants.ts"}});var _="Tab";"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"KEY_TAB",filename:"src\\constants.ts"}});var g="ArrowLeft";"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"KEY_ARROW_LEFT",filename:"src\\constants.ts"}});var v="ArrowRight";"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"KEY_ARROW_RIGHT",filename:"src\\constants.ts"}});var y="Backspace";"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"KEY_BACKSPACE",filename:"src\\constants.ts"}});var N="Delete";function h(e,n,t){if(Number.isNaN(b(e)))return parseInt(t,10);var i=b(e)===n||10*b(e.substr(1))>n?t:"".concat(e.substring(1)).concat(t);return Math.min(n,b(i))}"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"KEY_DELETE",filename:"src\\constants.ts"}});var T=h;h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getNextTimeValue",filename:"src\\utils\\getNextTimeValue.ts"}});var x=u.a.forwardRef(function(e,n){var t=e.value,i=e.onChange,o=e.onKeyDown,c=e.onInputEnd,l=e.onFocus,s=e.onBlur,g=e.max,v=Object(a.a)(e,["value","onChange","onKeyDown","onInputEnd","onFocus","onBlur","max"]),h=Object(r.useRef)(0),x=function(e){i(p(t,g,e))};function I(){h.current=0,c&&c()}return u.a.createElement("input",Object.assign({"data-testid":"timeNumberInput",className:"sinoui-time-input__number-input",onKeyDown:function(e){var n,a=e.key;a!==_&&(e.stopPropagation(),e.preventDefault()),j.test(a)?(((n=T(t,g,a))<10&&10*n>g||n>=g)&&I(),i(m(Math.min(g,n))),Number.isNaN(b(t))?h.current=1:1===h.current?I():h.current=1):a===O?x(1):a===f?x(-1):a!==y&&a!==N||i(d),o&&o(e)},onBlur:function(e){h.current=0,s&&s(e)},onFocus:l,ref:n,value:t,readOnly:!0},v))}),I=x;function C(e){return m(Number.isNaN(b(e))?0:b(e))}function E(e){if(e){var n=e.split(":"),t=Object(i.a)(n,2),a=t[0],r=t[1];return[C(a),C(r)]}return[d,d]}"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NumberInput",filename:"src\\NumberInput.tsx"}}),E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"parseTimeStr",filename:"src\\utils\\parseTimeStr.ts"}});var P=t("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),F=t("./node_modules/sinoui-components/styles/index.js"),S=t("./node_modules/sinoui-components/TextInput/index.js");function k(){var e=Object(P.a)(["\n  display: inline-flex;\n  flex-direction: row;\n  font-size: 1rem;\n  font-family: monospace;\n  align-items: center;\n  height: 32px;\n\n  color: ",";\n\n  .sinoui-time-input-text-content {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n  .sinoui-time-input__number-input {\n    display: inline-block;\n    padding: 2px;\n    line-height: 1.5em;\n    cursor: default;\n    caret-color: transparent;\n    outline: transparent;\n    border: none;\n    background: transparent;\n    width: 1.2em;\n    color: inherit;\n    transition: background-color 0.3s;\n    font-size: inherit;\n  }\n\n  .sinoui-time-input__number-input:focus {\n    background-color: #b5d5ff;\n  }\n\n  .sinoui-time-input__clear-action {\n    visibility: hidden;\n\n    color: ",";\n    font-weight: 700;\n    height: 1rem;\n    width: 1rem;\n  }\n\n  .sinoui-time-input__actions {\n    visibility: hidden;\n\n    width: 20px;\n    height: 30px;\n    background-color: ",";\n    font-size: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    color: ",";\n  }\n\n  .sinoui-time-input__actions > * {\n    transition: background-color 0.3s;\n  }\n\n  ","\n\n  &:hover .sinoui-time-input__actions,\n  &.sinoui-time-input-contains-value:hover .sinoui-time-input__clear-action {\n    visibility: visible;\n  }\n\n  .sinoui-time-input__actions > *:hover {\n    background-color: #e5e2e2;\n  }\n"]);return k=function(){return e},e}var w=Object(F.c)(S.a)(k(),function(e){return e.theme.palette.text.primary},function(e){return e.theme.palette.primary[500]},function(e){return e.theme.palette.background.appBar},function(e){return e.theme.palette.text.primary},function(e){return e.focused&&"\n    & .sinoui-time-input__actions,\n    &.sinoui-time-input-contains-value .sinoui-time-input__clear-action {\n      visibility: visible;\n    }\n  "}),R=w;"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TimeInputWrapper",filename:"src\\TimeInputWrapper.tsx"}});var D=t("./node_modules/sinoui-components/BaseButton/index.js"),A=t("./node_modules/react-icons/md/index.esm.js");var L=u.a.memo(function(e){var n=e.handleClear,t=e.handleUp,i=e.handleDown;return u.a.createElement(u.a.Fragment,null,u.a.createElement(D.a,{"data-testid":"timeInputClearAction",className:"sinoui-time-input__clear-action",onClick:n},u.a.createElement(A.a,null)),u.a.createElement("div",{className:"sinoui-time-input__actions"},u.a.createElement(D.a,{className:"sinoui-time-input__up-action",onClick:t,"data-testid":"timeInputUpAction"},u.a.createElement(A.b,null)),u.a.createElement(D.a,{className:"sinoui-time-input__down-action",onClick:i,"data-testid":"timeInputDownAction"},u.a.createElement(A.c,null))))});function B(e){var n=e.value,t=e.onChange,a=e.className,o=e.style,c=e.readOnly,l=e.disabled,b=e.error,m=e.onFocus,j=e.onBlur,O=e.id,f=e.name,_=Object(r.useState)(function(){return E(n)[0]}),y=Object(i.a)(_,2),N=y[0],h=y[1],T=Object(r.useState)(function(){return E(n)[1]}),x=Object(i.a)(T,2),C=x[0],P=x[1],F=Object(r.useState)(!1),S=Object(i.a)(F,2),k=S[0],w=S[1],D=Object(r.useRef)(null),A=Object(r.useRef)(null),B=Object(r.useRef)(!1),K=Object(r.useRef)(-1),V=Object(r.useRef)([N,C]);Object(r.useEffect)(function(){var e=E(n),t=Object(i.a)(e,2),a=t[0],r=t[1];h(a),P(r),V.current=[a,r]},[n]);var U=Object(r.useCallback)(function(){D.current&&D.current.focus()},[]),M=Object(r.useCallback)(function(){A.current&&A.current.focus()},[]),W=Object(r.useCallback)(function(e,n){var i=e!==d&&n!==d,a=e===d&&n===d;h(e),P(n),V.current=[e,n],(i||a)&&t&&t(a?"":"".concat(e,":").concat(n))},[t]),Y=Object(r.useCallback)(function(){U(),W(d,d)},[U,W]),q=Object(r.useCallback)(function(e){"hour"===(B.current?"minute":"hour")?(W(p(V.current[0],23,e),V.current[1]),U()):(W(V.current[0],p(V.current[1],59,e)),M())},[W,U,M]),z=Object(r.useCallback)(function(){q(1)},[q]),X=Object(r.useCallback)(function(){q(-1)},[q]);return c||l?u.a.createElement(R,{className:s()("sinoui-time-input",a,{"sinoui-time-input-contains-value":N!==d||C!==d}),disabled:l,readOnly:c,"data-testid":"timeInput",error:b},u.a.createElement("div",{className:"sinoui-time-input-text-content"},N,":",C)):u.a.createElement(R,{"data-testid":"timeInput",className:s()("sinoui-time-input",a,{"sinoui-time-input-contains-value":N!==d||C!==d}),style:o,focused:k,onFocus:function(e){clearTimeout(K.current);var n=e.target;n===D.current&&(B.current=!1),n===A.current&&(B.current=!0),k||(w(!0),m&&m(e))},onBlur:function(e){clearTimeout(K.current),j&&e.persist(),K.current=setTimeout(function(){w(!1),B.current=!1,j&&j(e)},100)},error:b},u.a.createElement(I,{value:N,onChange:function(e){return W(e,C)},max:23,onInputEnd:function(){M()},onKeyDown:function(e){e.key===v&&M()},ref:D,name:f,id:O}),u.a.createElement("span",null,":"),u.a.createElement(I,{value:C,max:59,ref:A,onChange:function(e){return W(N,e)},onKeyDown:function(e){e.key===g&&U()},name:f}),u.a.createElement(L,{handleClear:Y,handleUp:z,handleDown:X}))}"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src\\TimeInput.tsx"}});var K=B;B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TimeInput",filename:"src\\TimeInput.tsx"}});var V=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function U(){var e=Object(P.a)(["\n  &&& {\n    color: green;\n  }\n"]);return U=function(){return e},e}var M=Object(V.c)(K)(U()),W=M;"undefined"!==typeof M&&M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CustomStyleTimeInput",filename:"docs\\src\\CustomStyleTimeInput.ts"}}),t.d(n,"default",function(){return z});var Y={},q="wrapper";function z(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(q,Object.assign({},Y,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u65f6\u95f4\u8f93\u5165\u6846-timeinput"},"\u65f6\u95f4\u8f93\u5165\u6846 ",Object(o.b)("inlineCode",{parentName:"h1"},"TimeInput")),Object(o.b)("p",null,"\u7528\u4e8e\u8f93\u5165\u65f6\u95f4\u7684\u952e\u76d8\u53cb\u597d\u7684 React \u7ec4\u4ef6\u3002 ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/sinouiincubator/time-input"}),"\u6e90\u7801"),"\u3001 ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/sinouiincubator/time-input/issues"}),"issue")),Object(o.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add @sinouiincubator/time-input\n")),Object(o.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport TimeInput from '@sinouiincubator/time-input';\n\nfunction Demo() {\n  const [value, setValue] = useState('12:34');\n\n  return <TimeInput value={value} onChange={setValue} />;\n}\n")),Object(o.b)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),Object(o.b)(c.c,{__position:0,__code:"() => {\n  const [value, setValue] = useState('12:34')\n  return <TimeInput value={value} onChange={setValue} />\n}",__scope:{props:this?this.props:t,useState:r.useState,Playground:c.c,Props:c.d,TimeInput:K,CustomStyleTimeInput:W},mdxType:"Playground"},function(){var e=Object(r.useState)("12:34"),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(o.b)(K,{value:t,onChange:a,mdxType:"TimeInput"})}),Object(o.b)("p",null,"\u5bf9\u6bd4\u4e00\u4e0b\u539f\u751f\u65f6\u95f4\u5143\u7d20\uff08\u5728 Chrome \u4e2d\u67e5\u770b\uff09\uff1a"),Object(o.b)(c.c,{__position:1,__code:'<input type="time" value="12:34" />',__scope:{props:this?this.props:t,useState:r.useState,Playground:c.c,Props:c.d,TimeInput:K,CustomStyleTimeInput:W},mdxType:"Playground"},Object(o.b)("input",{type:"time",value:"12:34"})),Object(o.b)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"UI \u4e0e Chrome \u7684 ",Object(o.b)("inlineCode",{parentName:"li"},'<input type="time" />')," \u4e00\u81f4\u3002"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 IE 11+ \u548c\u73b0\u4ee3\u6d4f\u89c8\u5668\u3002"),Object(o.b)("li",{parentName:"ul"},"\u952e\u76d8\u53cb\u597d",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8f93\u5165\u65f6\u95f4"),Object(o.b)("li",{parentName:"ul"},"\u4e0a\u3001\u4e0b\u65b9\u5411\u952e\u8c03\u6574\u65f6\u95f4"),Object(o.b)("li",{parentName:"ul"},"\u5de6\u3001\u53f3\u548c tab \u952e\u5728\u5c0f\u65f6\u548c\u5206\u949f\u8f93\u5165\u6846\u4e4b\u95f4\u5207\u6362"),Object(o.b)("li",{parentName:"ul"},"\u5220\u9664\uff08Delete\uff09\u3001\u56de\u683c\uff08Backspace\uff09\u952e\u6e05\u9664\u65f6\u95f4"))),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u6e05\u9664\u3001\u4e0a\u8c03\u3001\u4e0b\u8c03\u65f6\u95f4\u7684\u6309\u94ae"),Object(o.b)("li",{parentName:"ul"},"100% \u6d4b\u8bd5\u8986\u76d6\u7387"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u6837\u5f0f"),Object(o.b)("li",{parentName:"ul"},"\u6613\u4e8e\u4e0e",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://jaredpalmer.com/formik/"}),"Formik"),"\u3001",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://sinoui.github.io/sinoui-forms-library/"}),"@sinoui/rx-form-state"),"\u7b49\u8868\u5355\u5e93\u96c6\u6210")),Object(o.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(o.b)(c.d,{of:K,mdxType:"Props"}),Object(o.b)("h2",{id:"\u8f93\u5165\u6846\u72b6\u6001"},"\u8f93\u5165\u6846\u72b6\u6001"),Object(o.b)("p",null,"\u65f6\u95f4\u8f93\u5165\u6846\u9664\u4e86\u6b63\u5e38\u6001\u4e4b\u5916\uff0c\u8fd8\u652f\u6301\u53ea\u8bfb\uff08 readOnly \uff09\u3001\u4e0d\u53ef\u7528\uff08 disabled \uff09\u3001\u6821\u9a8c\u9519\u8bef\uff08 error \uff09\u4e09\u79cd UI \u72b6\u6001\u3002\u6548\u679c\u5982\u4e0b\u6240\u793a\u3002"),Object(o.b)("h3",{id:"normal"},"Normal"),Object(o.b)(K,{value:"12:00",mdxType:"TimeInput"}),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<TimeInput value="12:00" />\n')),Object(o.b)("h3",{id:"readonly"},"readOnly"),Object(o.b)(K,{value:"12:00",readOnly:!0,mdxType:"TimeInput"}),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<TimeInput value="12:00" readOnly />\n')),Object(o.b)("h3",{id:"disabled"},"disabled"),Object(o.b)(K,{value:"12:00",disabled:!0,mdxType:"TimeInput"}),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<TimeInput value="12:00" disabled />\n')),Object(o.b)("h3",{id:"error"},"error"),Object(o.b)(K,{value:"12:00",error:!0,mdxType:"TimeInput"}),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<TimeInput value="12:00" error />\n')),Object(o.b)("h2",{id:"\u65f6\u95f4\u503c"},"\u65f6\u95f4\u503c"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"TimeInput")," \u5904\u7406\u7684\u503c\u662f\u5f62\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"02:12")," \u8fd9\u6837\u7684\u65f6\u95f4\uff0c\u76ee\u524d\u53ea\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"24")," \u5c0f\u65f6\u5236\uff0c\u4e0d\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"12")," \u5c0f\u65f6\u5236\u7684\u65f6\u95f4\u683c\u5f0f\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u9650\u5236\uff1a\u5982\u679c\u8f93\u5165\u6846\u4e2d\u7684\u65f6\u95f4\u6ca1\u6709\u8f93\u5165\u5b8c\u6574\uff0c\u5219\u4e0d\u4f1a\u5411\u5916\u53d1\u9001\u503c\u53d8\u66f4\u4e8b\u4ef6\uff0c\u5373\u4e0d\u4f1a\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," \u5c5e\u6027\uff0c\u53ea\u6709\u5f53\u8f93\u5165\u4e86\u5b8c\u6574\u7684\u65f6\u95f4\uff0c\u624d\u4f1a\u5411\u5916\u53d1\u9001\u503c\u53d8\u66f4\u4e8b\u4ef6\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u91cd\u70b9\uff1a\u4e0d\u5efa\u8bae\u6307\u5b9a ",Object(o.b)("inlineCode",{parentName:"p"},"''"),"\uff0c\u5e94\u6307\u5b9a ",Object(o.b)("inlineCode",{parentName:"p"},"'00:00'")," \u8fd9\u6837\u7684\u9ed8\u8ba4\u503c\u3002")),Object(o.b)("p",null,"\u6307\u5b9a ",Object(o.b)("inlineCode",{parentName:"p"},"''")," \u7684\u60c5\u51b5\uff1a"),Object(o.b)(c.c,{__position:7,__code:"() => {\n  const [value, setValue] = useState('')\n  return (\n    <>\n      <TimeInput value={value} onChange={setValue} />\n      <div>\u8f93\u5165\u7684\u65f6\u95f4\u503c\uff1a{value}</div>\n    </>\n  )\n}",__scope:{props:this?this.props:t,useState:r.useState,Playground:c.c,Props:c.d,TimeInput:K,CustomStyleTimeInput:W},mdxType:"Playground"},function(){var e=Object(r.useState)(""),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(o.b)(u.a.Fragment,null,Object(o.b)(K,{value:t,onChange:a,mdxType:"TimeInput"}),Object(o.b)("div",null,"\u8f93\u5165\u7684\u65f6\u95f4\u503c\uff1a",t))}),Object(o.b)("p",null,"\u6307\u5b9a\u6709\u6548\u65f6\u95f4\u503c\u7684\u60c5\u51b5\uff1a"),Object(o.b)(c.c,{__position:8,__code:"() => {\n  const [value, setValue] = useState('00:00')\n  return (\n    <>\n      <TimeInput value={value} onChange={setValue} />\n      <div>\u8f93\u5165\u7684\u65f6\u95f4\u503c\uff1a{value}</div>\n    </>\n  )\n}",__scope:{props:this?this.props:t,useState:r.useState,Playground:c.c,Props:c.d,TimeInput:K,CustomStyleTimeInput:W},mdxType:"Playground"},function(){var e=Object(r.useState)("00:00"),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(o.b)(u.a.Fragment,null,Object(o.b)(K,{value:t,onChange:a,mdxType:"TimeInput"}),Object(o.b)("div",null,"\u8f93\u5165\u7684\u65f6\u95f4\u503c\uff1a",t))}),Object(o.b)("h2",{id:"\u4e0e-sinouiforms-\u96c6\u6210"},"\u4e0e ",Object(o.b)("inlineCode",{parentName:"h2"},"@sinoui/forms")," \u96c6\u6210"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@sinoui/forms")," \u91c7\u7528 ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://jaredpalmer.com/formik/"}),"Formik")," \u4f5c\u4e3a\u72b6\u6001\u7ba1\u7406\u7684\u5e93\u3002 ",Object(o.b)("inlineCode",{parentName:"p"},"TimeInput")," \u53ef\u4ee5\u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"@sinoui/forms")," \u96c6\u6210\u4f7f\u7528\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("p",null,"\u5148\u5b9a\u4e49",Object(o.b)("inlineCode",{parentName:"p"},"TimeInputField"),"\u7ec4\u4ef6\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Field } from '@sinoui/forms';\nimport TimeInput from '@sinouiincubator/time-input';\n\nexport default function TimeInputField(props) {\n  return <Field component={TimeInput} {...props} />;\n}\n")),Object(o.b)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"TimeInputField"),"\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport Form, { FormItem, Label } from '@sinoui/forms';\nimport TimeInputField from './TimeInputField';\n\nfunction Demo() {\n  return (\n    <Form>\n      <FormItem>\n        <Label>\u65f6\u95f4</Label>\n        <TimeInputField name=\"startTime\" />\n      </FormItem>\n      <FormItem>\n        <Label>\u7ed3\u675f\u65f6\u95f4</Label>\n        <TimeInputField name=\"endTime\" />\n      </FormItem>\n    </Form>\n  );\n}\n")),Object(o.b)("h2",{id:"\u4e0e-sinouirx-form-state-\u96c6\u6210"},"\u4e0e ",Object(o.b)("inlineCode",{parentName:"h2"},"@sinoui/rx-form-state")," \u96c6\u6210"),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://sinoui.github.io/sinoui-forms-library/"}),"@sinoui/rx-form-state"),"\u662f\u9ad8\u6027\u80fd\u8868\u5355\u72b6\u6001\u7ba1\u7406\u5e93\u3002",Object(o.b)("inlineCode",{parentName:"p"},"TimeInput")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"@sinoui/rx-form-state")," \u7684\u96c6\u6210\u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"@sinoui/forms")," \u7c7b\u4f3c\u3002\u5982\u4e0b\u793a\u4f8b\uff1a"),Object(o.b)("p",null,"\u5148\u5b9a\u4e49",Object(o.b)("inlineCode",{parentName:"p"},"TimeInputField"),"\u7ec4\u4ef6\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Field } from '@sinoui/sinoui-components-forms';\nimport TimeInput from '@sinouiincubator/time-input';\n\nexport default function TimeInputField(props) {\n  return <Field component={TimeInput} {...props} />;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Form, FormItem, Label } from '@sinoui/sinoui-components-forms';\nimport TimeInputField from './TimeInputField';\n\nfunction Demo() {\n  return (\n    <Form>\n      <FormItem>\n        <Label>\u65f6\u95f4</Label>\n        <TimeInputField name=\"startTime\" />\n      </FormItem>\n      <FormItem>\n        <Label>\u7ed3\u675f\u65f6\u95f4</Label>\n        <TimeInputField name=\"endTime\" />\n      </FormItem>\n    </Form>\n  );\n}\n")),Object(o.b)("h2",{id:"\u6837\u5f0f\u5b9a\u5236"},"\u6837\u5f0f\u5b9a\u5236"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"TimeInput")," \u652f\u6301\u591a\u79cd\u65b9\u5f0f\u8bbe\u5b9a\u6837\u5f0f\uff0c\u5305\u62ec\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"style")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"className")),Object(o.b)("li",{parentName:"ul"},"styled-components")),Object(o.b)("p",null,"\u53ef\u4ee5\u53c2\u8003 ",Object(o.b)("inlineCode",{parentName:"p"},"TimeInput")," \u7684 DOM \u7ed3\u6784\u5b9a\u5236 ",Object(o.b)("inlineCode",{parentName:"p"},"TimeInput")," \u5185\u90e8\u5143\u7d20\u7684\u6837\u5f0f\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"div.sinoui-time-input\n|__ input.sinoui-time-input__number-input \u5c0f\u65f6\u8f93\u5165\u6846\n|__ input.sinoui-time-input__number-input \u5206\u949f\u8f93\u5165\u6846\n|__ button.sinoui-time-input__clear-action \u6e05\u7a7a\u503c\u6309\u94ae\n|__ div.sinoui-time-input__actions\n  |__ button.sinoui-time-input__up-action \u5411\u4e0a\u6309\u94ae\n  |__ button.sinoui-time-input__down-action \u5411\u4e0b\u6309\u94ae\n")),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u5b57\u4f53\u989c\u8272\u5b9a\u5236\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"green"),"\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const CustomTimeInput = styled(TimeInput)`\n  &&& {\n    color: green;\n  }\n`;\n")),Object(o.b)(c.c,{__position:9,__code:"<CustomStyleTimeInput />",__scope:{props:this?this.props:t,useState:r.useState,Playground:c.c,Props:c.d,TimeInput:K,CustomStyleTimeInput:W},mdxType:"Playground"},Object(o.b)(W,{mdxType:"CustomStyleTimeInput"})))}z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\index.mdx"}}),z.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-index.c87a040c25d72d4ef9b9.js.map