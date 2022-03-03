(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{3101:function(e){"use strict";e.exports={primary:"#23272F","primary-dark":"rgba(255, 255, 255, 0.87)",secondary:"#404756","secondary-dark":"#EBECF0",link:"#3c873a","link-dark":"#68a063",syntax:"#EBECF0",wash:"#FFFFFF","wash-dark":"#181818",card:"#E2F3E2","card-dark":"#383838",highlight:"#E8EFE6","highlight-dark":"rgba(232,239,230,0.1)",border:"#EBECF0","border-dark":"#343A46","secondary-button":"#EBECF0","secondary-button-dark":"#404756","gray-95":"#16181D","gray-90":"#23272F","gray-80":"#343A46","gray-70":"#404756","gray-60":"#4E5769","gray-50":"#5E687E","gray-40":"#78839B","gray-30":"#99A1B3","gray-20":"#BCC1CD","gray-10":"#EBECF0","gray-5":"#F6F7F9","blue-60":"#045975","blue-50":"#087EA4","blue-40":"#149ECA","blue-30":"#58C4DC","blue-20":"#ABE2ED","blue-10":"#E6F7FF","blue-5":"#E6F6FA","yellow-60":"#B65700","yellow-50":"#C76A15","yellow-40":"#DB7D27","yellow-30":"#FABD62","yellow-20":"#FCDEB0","yellow-10":"#FDE7C7","yellow-5":"#FEF5E7","purple-60":"#2B3491","purple-50":"#575FB7","purple-40":"#6B75DB","purple-30":"#8891EC","purple-20":"#C3C8F5","purple-10":"#E7E9FB","purple-5":"#F3F4FD","green-60":"#2B6E62","green-50":"#388F7F","green-40":"#44AC99","green-30":"#7FCCBF","green-20":"#ABDED5","green-10":"#E5F5F2","green-5":"#F4FBF9","red-60":"#712D28","red-50":"#A6423A","red-40":"#C1554D","red-30":"#D07D77","red-20":"#E5B7B3","red-10":"#F2DBD9","red-5":"#FAF1F0","code-block":"#99a1b30f","gradient-blue":"#58C4DC",github:{highlight:"#fffbdd"}}},7033:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(4184),a=t.n(o),i=t(5879),l=t(7594),u=t.n(l),p=t(2202);function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(e){var r=e.children,t=e.className,o=void 0===t?"language-js":t,l=e.metastring,c=e.noMargin,d="/index."+o.substring(9),g=function(){if(!l)return[];var e=function(e){var r=/{([\d,-]+)}/.exec(e);if(!r)return[];return u()(r[1])}(l).map((function(e){return{className:"bg-github-highlight dark:bg-opacity-10",line:e}})),t=function(e,r){var t=/(\[\[.*\]\])/.exec(e);if(!t)return[];var n=r.split("\n");return JSON.parse(t[1]).map((function(e){var r=f(e,4),t=r[0],o=r[1],a=r[2],i=r[3],l=n[o-1],u=l.indexOf(a);if(u!==l.lastIndexOf(a)){if(void 0===i)throw Error("Found '"+a+"' twice. Specify fromIndex as the fourth value in the tuple.");u=l.indexOf(a,i)}if(-1===u)throw Error("Could not find: '"+a+"'");return{step:t,line:o,startColumn:u,endColumn:u+a.length}}))}(l,r).map((function(e){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}({},e,{elementAttributes:{"data-step":"".concat(e.step)},className:a()("code-step bg-opacity-10 dark:bg-opacity-20 relative rounded px-1 py-[1.5px] border-b-[2px] border-opacity-60",{"bg-blue-40 border-blue-40":1===e.step,"bg-yellow-40 border-yellow-40":2===e.step,"bg-green-40 border-green-40":3===e.step,"bg-purple-40 border-purple-40":4===e.step})})}));return e.concat(t)}();return(0,n.jsx)("div",{translate:"no",className:a()("rounded-lg h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg",!c&&"my-8"),children:(0,n.jsx)(i.oT,{customSetup:{entry:d,files:s({},d,{code:r.trimEnd()})},children:(0,n.jsx)(i.uR,{theme:p.d,children:(0,n.jsx)(i.Pw,{showLineNumbers:!1,decorators:g},r.trimEnd())})})})}},2202:function(e,r,t){"use strict";t.d(r,{d:function(){return a}});var n=t(1125),o=t.n(n),a={palette:{activeText:"inherit",defaultText:"inherit",inactiveText:"inherit",activeBackground:"inherit",defaultBackground:"inherit",inputBackground:"inherit",accent:"inherit",errorBackground:"inherit",errorForeground:"inherit"},syntax:{plain:"var(--theme-plain)",comment:"var(--theme-comment)",keyword:"var(--theme-keyword)",tag:"var(--theme-tag)",punctuation:"var(--theme-punctuation)",definition:"var(--theme-definition)",property:"var(--theme-property)",static:"var(--theme-static)",string:"var(--theme-string)"},typography:{bodyFont:o().theme.extend.fontFamily.sans.join(", "),monoFont:o().theme.extend.fontFamily.mono.join(", "),fontSize:o().theme.extend.fontSize.code,lineHeight:"24px"}}},1125:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=t(5874),l=t(3101);e.exports={content:["./src/components/**/*.{js,ts,jsx,tsx}","./src/pages/**/*.{js,ts,jsx,tsx}","./src/styles/**/*.{js,ts,jsx,tsx}"],darkMode:"class",theme:{screens:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},i.screens,{betterhover:{raw:"(hover: hover)"}}),boxShadow:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)","lg-dark":"0 0 0 1px rgba(255,255,255,.15), 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)","3xl":"0 35px 60px -15px rgba(0, 0, 0, 0.3)",inner:"inset 0 1px 4px 0 rgba(0, 0, 0, 0.05)",none:"none"},extend:{maxWidth:{xs:"21rem"},outline:{blue:["1px auto "+l.link,"3px"]},opacity:{8:"0.08"},fontFamily:{sans:["Optimistic Display","-apple-system"].concat(a(i.fontFamily.sans)),mono:['"Source Code Pro"'].concat(a(i.fontFamily.mono))},lineHeight:{base:"30px",large:"38px"},fontSize:{"6xl":"68px","5xl":"40px","4xl":"32px","3xl":"28px","2xl":"24px",xl:"20px",lg:"17px",base:"15px",sm:"13px",xs:"11px",code:"calc(1em - 20%)"},colors:l}},plugins:[]}},7594:function(e,r){function t(e){let r,t=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))t.push(parseInt(n,10));else if(r=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=r;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let r=n;r!==a;r+=e)t.push(r)}}return t}r.default=t,e.exports=t}}]);