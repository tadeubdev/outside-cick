(()=>{"use strict";var n={};(()=>{n.default=function(){return t||(t=!0,document.addEventListener("click",(function(n){return function(n){var t=i(n.target);e.filter((function(n){return!(void 0===n.clickOutMethod||n.elmAction&&t.includes(n.elmAction)||!1!==t.includes(n.element))})).forEach((function(n){return n.clickOutMethod()})),e.filter((function(n){return void 0!==n.clickInMethod&&(!(!n.elmAction||!t.includes(n.elmAction))||t.includes(n.element))})).forEach((function(n){return n.clickInMethod()}))}(n)}))),{add:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=null;"string"==typeof n?u=c(n):(n instanceof Element||n instanceof Document)&&(u=n),e.push({element:u,clickOutMethod:t,clickInMethod:i})}}};var t=!1,e=[];function c(n){return document.querySelector(n)}function i(n,t){t=t||[n];var e=n.parentElement;return e?(t.push(e),i(e,t)):t}})(),window.OutsideClick=n.default})();