!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("$",[],e):"object"==typeof exports?exports.$=e():t.$=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){"function"!=typeof Object.assign&&(Object.assign=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(0);function u(t){return!!t&&(t instanceof HTMLCollection||t instanceof NodeList)}(0,((r=i)&&r.__esModule?r:{default:r}).default)();var c=[];function f(t){if(t){if(t instanceof f)return t;this.selector=t;var e,n,r=t.nodeType,o=[];9===r?o=[t]:1===r?o=[t]:u(t)||t instanceof Array?o=t:"string"==typeof t&&(0===(t=t.replace("/\n/mg","").trim()).indexOf("<")?(e=t,n=void 0,(n=document.createElement("div")).innerHTML=e,o=n.children):o=function(t){var e=document.querySelectorAll(t);return u(e)?e:[e]}(t));var i=o.length;if(!i)return this;var c=void 0;for(c=0;c<i;c++)this[c]=o[c];this.length=i}}function s(t){return new f(t)}f.prototype={constructor:f,forEach:function(t){var e=void 0;for(e=0;e<this.length;e++){var n=this[e];if(!1===t.call(n,n,e))break}return this},clone:function(t){var e=[];return this.forEach(function(n){e.push(n.cloneNode(!!t))}),s(e)},get:function(t){var e=this.length;return t>=e&&(t%=e),s(this[t])},first:function(){return this.get(0)},last:function(){var t=this.length;return this.get(t-1)},on:function(t,e,n){n||(n=e,e=null);var r=[];return r=t.split(/\s+/),this.forEach(function(t){r.forEach(function(r){r&&(c.push({elem:t,type:r,fn:n}),e?t.addEventListener(r,function(t){var r=t.target;r.matches(e)&&n.call(r,t)}):t.addEventListener(r,n))})})},off:function(t,e){return this.forEach(function(n){n.removeEventListener(t,e)})},attr:function(t,e){return null==e?this[0].getAttribute(t):this.forEach(function(n){n.setAttribute(t,e)})},addClass:function(t){return t?this.forEach(function(e){var n=void 0;e.className?((n=(n=e.className.split(/\s/)).filter(function(t){return!!t.trim()})).indexOf(t)<0&&n.push(t),e.className=n.join(" ")):e.className=t}):this},removeClass:function(t){return t?this.forEach(function(e){var n=void 0;e.className&&(n=(n=e.className.split(/\s/)).filter(function(e){return!(!(e=e.trim())||e===t)}),e.className=n.join(" "))}):this},css:function(t,e){function n(t){return t=t.replace(/-([a-z])/gi,function(t,e){return e.toUpperCase()})}if("string"==typeof t&&void 0===e)return t=n(t),this[0].style[t];switch(void 0===t?"undefined":o(t)){case"object":this.forEach(function(e){Object.keys(t).forEach(function(r){r=n(r),e.style[r]=t[r]})});break;case"string":this.forEach(function(r){t=n(t),r.style[t]=e})}return this},show:function(){return this.css("display","block")},hide:function(){return this.css("display","none")},children:function(){var t=this[0];return t?s(t.children):null},childNodes:function(){var t=this[0];return t?s(t.childNodes):null},append:function(t){return this.forEach(function(e){t.forEach(function(t){e.appendChild(t)})})},remove:function(){return this.forEach(function(t){if(t.remove)t.remove();else{var e=t.parentElement;e&&e.removeChild(t)}})},isContain:function(t){var e=this[0],n=t[0];return e.contains(n)},getSizeData:function(){return this[0].getBoundingClientRect()},getNodeName:function(){return this[0].nodeName},find:function(t){return s(this[0].querySelectorAll(t))},text:function(t){if(t)return this.forEach(function(e){e.textContent?e.textContent=t:e.innerHTML=t});var e=this[0];return e.textContent?e.textContent:e.innerHTML.replace(/<.*?>/g,function(){return""})},html:function(t){var e=this[0];return null==t?e.innerHTML:(e.innerHTML=t,this)},val:function(){return this[0].value.trim()},focus:function(){return this.forEach(function(t){t.focus()})},parent:function(){return s(this[0].parentElement)},equal:function(t){return 1===t.nodeType?this[0]===t:this[0]===t[0]},insertBefore:function(t){var e=s(t)[0];return e?this.forEach(function(t){e.parentNode.insertBefore(t,e)}):this},insertAfter:function(t){var e=s(t)[0];return e?this.forEach(function(t){var n=e.parentNode;n.lastChild===e?n.appendChild(t):n.insertBefore(t,e.nextSibling)}):this},siblings:function(){var t=this[0],e=this[0].parentNode;return s(Array.prototype.filter.call(e.children,function(e){return e!==t}))},prev:function(){return s(this[0].previousElementSibling)},next:function(){return s(this[0].nextElementSibling)},closest:function(t){for(var e=this[0],n=e.matches;e;){if(n.call(e,t))return s(e);e=e.parentElement}},parentUntil:function(t,e){var n=this[0],r=[],o=n.matches;for(n=n.parentElement;n&&!o.call(n,t);)e?o.call(n,e)&&r.push(n):r.push(n),n=n.parentElement;return s(r)},hasClass:function(t){return-1!==this[0].className.indexOf(t)}},s.offAll=function(){c.forEach(function(t){var e=t.elem,n=t.type,r=t.fn;e.removeEventListener(n,r)})},e.default=s}]).default});