(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/readme.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/emotion/dist/index.es.js"),r=a("./node_modules/react/index.js"),o=a.n(r),m=a("./node_modules/@mdx-js/tag/dist/index.js"),l=a("./node_modules/docz/dist/index.m.js"),i=a("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),s=a("./node_modules/string-mask/src/string-mask.js"),c=a.n(s);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function g(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=g(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e)))._state=null,a._del=!1,a._handleChange=function(e){var n=e.target.value,t=e.target,r=n.length>a.props.value.length,o=a._del,m=a.props.value===a.props.format(n);a.setState({value:n,local:!0},function(){var e=t.selectionStart,l=a.props.refuse||/[^\d]+/g,i=n.substr(0,e).replace(l,"");if(a._state={input:t,before:i,op:r,di:o&&m,del:o},a.props.replace&&a.props.replace(a.props.value)&&r&&!m){for(var s=-1,c=0;c!==i.length;++c)s=Math.max(s,n.indexOf(i[c],s+1));var u=n.substr(s+1).replace(l,"")[0];s=n.indexOf(u,s+1),n="".concat(n.substr(0,s)).concat(n.substr(s+1))}a.props.onChange(a.props.format(n))})},a._hKD=function(e){"Delete"===e.code&&(a._del=!0)},a._hKU=function(e){"Delete"===e.code&&(a._del=!1)},a.state={value:e.value,local:!1},a}var a,t,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r["Component"]),a=n,o=[{key:"getDerivedStateFromProps",value:function(e,n){return{value:n.local?n.value:e.value,local:!1}}}],(t=[{key:"render",value:function(){var e=this._handleChange,n=this.state.value;return(0,this.props.children)({value:n,onChange:e})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._hKD),document.removeEventListener("keyup",this._hKU)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._hKD),document.addEventListener("keyup",this._hKU)}},{key:"componentDidUpdate",value:function(){var e=this._state;if(e){for(var n=this.state.value,a=-1,t=0;t!==e.before.length;++t)a=Math.max(a,n.indexOf(e.before[t],a+1));if(this.props.replace&&(e.op||e.del&&!e.di))for(;n[a+1]&&(this.props.refuse||/[^\d]+/).test(n[a+1]);)a+=1;e.input.selectionStart=e.input.selectionEnd=a+1+(e.di?1:0)}this._state=null}}])&&p(a.prototype,t),o&&p(a,o),n}();function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],t=!0,r=!1,o=void 0;try{for(var m,l=e[Symbol.iterator]();!(t=(m=l.next()).done)&&(a.push(m.value),!n||a.length!==n);t=!0);}catch(e){r=!0,o=e}finally{try{t||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}h.__docgenInfo={description:"",methods:[{name:"_handleChange",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticInputEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticInputEvent<HTMLInputElement>",alias:"SyntheticInputEvent"}}],returns:null},{name:"_hKD",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"_hKU",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"getDerivedStateFromProps",docblock:null,modifiers:["static"],params:[{name:"props",type:{name:"signature",type:"object",raw:"{|\n  value: string,\n  onChange: string => void,\n  format: (str: string) => string,\n  replace?: string => boolean,\n  refuse?: RegExp,\n  children: ({\n    value: string,\n    onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n  }) => React.Node,\n|}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"string => void",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"void"}},required:!0}},{key:"format",value:{name:"signature",type:"function",raw:"(str: string) => string",signature:{arguments:[{name:"str",type:{name:"string"}}],return:{name:"string"}},required:!0}},{key:"replace",value:{name:"signature",type:"function",raw:"string => boolean",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"boolean"}},required:!1}},{key:"refuse",value:{name:"RegExp",required:!1}},{key:"children",value:{name:"signature",type:"function",raw:"({\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}) => React.Node",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(evt: SyntheticInputEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"evt",type:{name:"SyntheticInputEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticInputEvent<HTMLInputElement>"}}],return:{name:"void"}},required:!0}}]}}}],return:{name:"ReactNode",raw:"React.Node"}},required:!0}}]},alias:"Props"}},{name:"state",type:{name:"signature",type:"object",raw:"{|\n  value: string,\n  local: boolean,\n|}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"local",value:{name:"boolean",required:!0}}]},alias:"State"}}],returns:null}],displayName:"Rifm",props:{value:{flowType:{name:"string"},required:!0,description:""},onChange:{flowType:{name:"signature",type:"function",raw:"string => void",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"void"}}},required:!0,description:""},format:{flowType:{name:"signature",type:"function",raw:"(str: string) => string",signature:{arguments:[{name:"str",type:{name:"string"}}],return:{name:"string"}}},required:!0,description:""},replace:{flowType:{name:"signature",type:"function",raw:"string => boolean",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"boolean"}}},required:!1,description:""},refuse:{flowType:{name:"RegExp"},required:!1,description:""},children:{flowType:{name:"signature",type:"function",raw:"({\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}) => React.Node",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(evt: SyntheticInputEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"evt",type:{name:"SyntheticInputEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticInputEvent<HTMLInputElement>"}}],return:{name:"void"}},required:!0}}]}}}],return:{name:"ReactNode",raw:"React.Node"}}},required:!0,description:""}}};var v=function(e){var n=parseInt(e.replace(/[^\d]+/gi,""),10);return n?n.toLocaleString("en"):""},y=function(e){var n=e.replace(/[^\d-]+/gi,"");if("-"===n)return"-";var a=parseInt(n,10);return a?a.toLocaleString("en"):""},E=function(e){var n=e.replace(/[^\d.]+/gi,""),a=n.length>2?-1===n.indexOf(".")?"".concat(n.substr(0,n.length-2),".").concat(n.substr(-2)):"".concat(n.split(".")[0],".").concat(n.split(".")[1].substr(0,2)):n,t=parseFloat(a);return t?t.toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2}):""},b=function(e,n){var a=e.replace(/[^\d.]+/gi,""),t=f(a.split("."),2),r=t[0],o=t[1],m=function(e,n){return e.substr(0,n-0)}(void 0===o?"":o,2),l=m?"".concat(r,".").concat(m):(a.length,a),i=parseFloat(l),s=i.toLocaleString("de-CH",{minimumFractionDigits:0,maximumFractionDigits:2}),c=f(s.split("."),2)[1],u=void 0===c?"":c;return Number.isNaN(i)?"":s+(!0===n?"":(0===u.length&&a.indexOf(".")>-1?".":"")+(u.length<2&&m.length>u.length?m.substring(u.length,2):""))},_=function(e){return e.replace(/[^\d]+/gi,"").split("").reduce(function(e,n,a){return(2===a||4===a?"".concat(e,"-").concat(n):"".concat(e).concat(n)).substr(0,10)},"")},F=function(e){var n=e.replace(/[^\d]+/gi,"").split("").reduce(function(e,n,a){return(2===a||4===a?"".concat(e,"-").concat(n):"".concat(e).concat(n)).substr(0,10)},"");return 0===n.length?n:"".concat(n).concat("__-__-____".substr(n.length))},M=new(a("./node_modules/libphonenumber-js/index.es6.js").a)("US"),T=function(e){var n=e.replace(/[^\d]+/gi,"").substr(0,10),a=M.input(n);return M.reset(),a},C=a("./node_modules/@material-ui/core/TextField/index.js"),N=a.n(C);function x(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components,a=x(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"rifm---react-input-format--mask"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#rifm---react-input-format--mask"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"RIFM - React Input Format & Mask"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Is a tiny (\u2248 650-750b) component to transform any input component\ninto formatted or masked input."),o.a.createElement("div",{"data-run":void Object(t.injectGlobal)("\n    .react-prism {\n      overflow-x: auto;\n    }\n  ")}),o.a.createElement(m.MDXTag,{name:"p",components:n},"In all examples:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/renatorib/react-powerplug/blob/master/docs/components/Value.md"}},"Value"),"\nfrom react-powerplug is used as State management Component.")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},"formatters is placed ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/istarkov/rifm/blob/master/docs/format.js"}},"here")))),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"simple-input-number-format"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#simple-input-number-format"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Simple input number format"),o.a.createElement(l.d,{__position:1,__code:"<Value initial={''}>\n  {text => (\n    <Rifm value={text.value} onChange={text.set} format={numberFormat}>\n      {({ value, onChange }) => (\n        <>\n          Int{' '}\n          <input\n            maxLength=\"20\"\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{value:e.value,onChange:e.set,format:v},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Int"," ",o.a.createElement("input",{maxLength:"20",value:n,onChange:a,className:Object(t.css)({textAlign:"right"}),type:"tel"}))})})),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// numberFormat from example above\nconst numberFormat = (str: string) => {\n  const r = parseInt(str.replace(/[^\\d]+/gi, ''), 10);\n  return r ? r.toLocaleString('en') : '';\n};\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"to prevent parseInt overflow you can use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"maxLength")," on input field\nor write your own numberFormat."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"input-number-format-with-fractional-part"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#input-number-format-with-fractional-part"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Input number format with fractional part"),o.a.createElement(l.d,{__position:2,__code:"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^\\d.]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={currencyFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Float{' '}\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{refuse:/[^\\d.]/gi,value:e.value,onChange:e.set,format:E},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Float"," ",o.a.createElement("input",{value:n,onChange:a,className:Object(t.css)({textAlign:"right"}),type:"tel"}))})})),o.a.createElement(m.MDXTag,{name:"p",components:n},"By default all non digit symbols are refused to enter,\nproperty ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refuse"),' allows you to change this behaviour.\nIn later example "." is also added to ',o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refuse")," so input will accept ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"."),"\nand allows you to split numbers."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"input-number-format-with-variable-fractional-part"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#input-number-format-with-variable-fractional-part"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Input number format with variable fractional part"),o.a.createElement(l.d,{__position:3,__code:"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^\\d.]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={currencyFormat2}\n    >\n      {({ value, onChange }) => (\n        <>\n          Float{' '}\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            type=\"tel\"\n            onBlur={() => text.set(currencyFormat2(value, true))}\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{refuse:/[^\\d.]/gi,value:e.value,onChange:e.set,format:b},function(n){var a=n.value,r=n.onChange;return o.a.createElement(o.a.Fragment,null,"Float"," ",o.a.createElement("input",{value:a,onChange:r,className:Object(t.css)({textAlign:"right"}),type:"tel",onBlur:function(){return e.set(b(a,!0))}}))})})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/istarkov/rifm/blob/master/docs/format.js"}},"currencyFormat and other formatters source")),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"material-ui"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#material-ui"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Material UI"),o.a.createElement(m.MDXTag,{name:"p",components:n},"It can work with 3rd party Inputs without pain"),o.a.createElement(l.d,{__position:4,__code:"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^\\d.]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={currencyFormat}\n    >\n      {({ value, onChange }) => (\n        <TextField\n          value={value}\n          label={'Float'}\n          onChange={onChange}\n          className={css({ input: { textAlign: 'right' } })}\n          type=\"tel\"\n        />\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{refuse:/[^\\d.]/gi,value:e.value,onChange:e.set,format:E},function(e){var n=e.value,a=e.onChange;return o.a.createElement(N.a,{value:n,label:"Float",onChange:a,className:Object(t.css)({input:{textAlign:"right"}}),type:"tel"})})})),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"masked-date-input"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-date-input"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked date input"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Mask mostly the same as format, the difference that at some moment\nwhen you enter symbols replace operation used instead of insert\nfor example when field value reached maximum length"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"replace")," to inform field to use replace operation"),o.a.createElement(l.d,{__position:5,__code:"<Value initial={'18-08-1978'}>\n  {text => (\n    <Rifm\n      replace={v => v.length >= 10}\n      value={text.value}\n      onChange={text.set}\n      format={dateFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Date{' '}\n          <input\n            placeholder=\"dd-mm-yyyy\"\n            value={value}\n            onChange={onChange}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:"18-08-1978"},function(e){return o.a.createElement(h,{replace:function(e){return e.length>=10},value:e.value,onChange:e.set,format:_},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Date"," ",o.a.createElement("input",{placeholder:"dd-mm-yyyy",value:n,onChange:a,type:"tel"}))})})),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"masked-date-input-2"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-date-input-2"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked date input 2"),o.a.createElement(l.d,{__position:6,__code:"<Value initial={''}>\n  {text => (\n    <Rifm\n      replace={v => v.substr(9, 10) !== '_'}\n      refuse={/[^\\d_]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={dateFormatSym}\n    >\n      {({ value, onChange }) => (\n        <>\n          Date{' '}\n          <input\n            placeholder=\"__-__-____\"\n            value={value}\n            onChange={onChange}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{replace:function(e){return"_"!==e.substr(9,10)},refuse:/[^\\d_]/gi,value:e.value,onChange:e.set,format:F},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Date"," ",o.a.createElement("input",{placeholder:"__-__-____",value:n,onChange:a,type:"tel"}))})})),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"string-mask-input"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#string-mask-input"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"String-mask input"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Example of usage with ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/the-darc/string-mask"}},"string-mask")),o.a.createElement(l.d,{__position:7,__code:"<Value initial={''}>\n  {v => (\n    <Rifm\n      replace={v => v.length >= 10}\n      value={v.value}\n      onChange={v.set}\n      format={str => {\n        const mask = new StringMask('0000-0000-0000-0000')\n        const r = str.replace(/[^\\d]+/gi, '')\n        return mask.apply(r)\n      }}\n    >\n      {({ value, onChange }) => <input onChange={onChange} value={value} />}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{replace:function(e){return e.length>=10},value:e.value,onChange:e.set,format:function(e){var n=new c.a("0000-0000-0000-0000"),a=e.replace(/[^\\d]+/gi,"");return n.apply(a)}},function(e){var n=e.value,a=e.onChange;return o.a.createElement("input",{onChange:a,value:n})})})),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"masked-phone-input"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-phone-input"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked Phone Input"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Example of usage with\n",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/catamphetamine/libphonenumber-js"}},"libphonenumber-js")," formatter"),o.a.createElement(l.d,{__position:8,__code:"<Value initial={''}>\n  {text => (\n    <Rifm\n      replace={v => v.length >= 14}\n      value={text.value}\n      onChange={text.set}\n      format={formatPhone}\n    >\n      {({ value, onChange }) => (\n        <>\n          Phone +1 <input value={value} onChange={onChange} type=\"tel\" />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{replace:function(e){return e.length>=14},value:e.value,onChange:e.set,format:T},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Phone"," ","+1"," ",o.a.createElement("input",{value:n,onChange:a,type:"tel"}))})})),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"react-async-ready"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#react-async-ready"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"React async ready"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Check that it will work with new async React ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://reactjs.org/docs/strict-mode.html"}},"see strict-mode")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"format-async-ready"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#format-async-ready"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Format Async Ready"),o.a.createElement(l.d,{__position:9,__code:"<React.StrictMode>\n  <Value initial={''}>\n    {text => (\n      <Rifm\n        refuse={/[^\\d.]/gi}\n        value={text.value}\n        onChange={text.set}\n        format={currencyFormat}\n      >\n        {({ value, onChange }) => (\n          <>\n            Format{' '}\n            <input\n              value={value}\n              onChange={onChange}\n              className={css({ textAlign: 'right' })}\n              type=\"tel\"\n            />\n          </>\n        )}\n      </Rifm>\n    )}\n  </Value>\n</React.StrictMode>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{refuse:/[^\\d.]/gi,value:e.value,onChange:e.set,format:E},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Format"," ",o.a.createElement("input",{value:n,onChange:a,className:Object(t.css)({textAlign:"right"}),type:"tel"}))})}))),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"mask-async-ready"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#mask-async-ready"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Mask Async Ready"),o.a.createElement(l.d,{__position:10,__code:"<React.StrictMode>\n  <Value initial={'18-08-1978'}>\n    {text => (\n      <Rifm\n        replace={v => v.length >= 10}\n        value={text.value}\n        onChange={text.set}\n        format={dateFormat}\n      >\n        {({ value, onChange }) => (\n          <>\n            Parse{' '}\n            <input\n              placeholder=\"dd-mm-yyyy\"\n              value={value}\n              onChange={onChange}\n              type=\"tel\"\n            />\n          </>\n        )}\n      </Rifm>\n    )}\n  </Value>\n</React.StrictMode>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{initial:"18-08-1978"},function(e){return o.a.createElement(h,{replace:function(e){return e.length>=10},value:e.value,onChange:e.set,format:_},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Parse"," ",o.a.createElement("input",{placeholder:"dd-mm-yyyy",value:n,onChange:a,type:"tel"}))})}))),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"negative-numbers"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#negative-numbers"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Negative numbers"),o.a.createElement(l.d,{__position:11,__code:"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^\\d-]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={negNumberFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Int{' '}\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            // type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>",__scope:{props:a,Value:i.a,StringMask:c.a,Rifm:h,numberFormat:v,negNumberFormat:y,currencyFormat:E,currencyFormat2:b,dateFormat:_,dateFormatSym:F,formatPhone:T,TextField:N.a,css:t.css,injectGlobal:t.injectGlobal}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(h,{refuse:/[^\\d-]/gi,value:e.value,onChange:e.set,format:y},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Int"," ",o.a.createElement("input",{value:n,onChange:a,className:Object(t.css)({textAlign:"right"})}))})})))}}}]);