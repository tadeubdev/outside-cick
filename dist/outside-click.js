/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nexports[\"default\"] = function () {\n    if (!started) {\n        started = true;\n        registerClickOnDocument();\n    }\n    return {\n        add: function add(element) {\n            var clickOutMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n            var clickInMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n            var finalElement = null;\n            if (typeof element === 'string') {\n                finalElement = generateElementFromString(element);\n            } else if (element instanceof Element || element instanceof Document) {\n                finalElement = element;\n            }\n            items.push({\n                element: finalElement,\n                clickOutMethod: clickOutMethod,\n                clickInMethod: clickInMethod\n            });\n        }\n    };\n};\n\nvar started = false;\nvar items = [];\n\nfunction generateElementFromString(element) {\n    return document.querySelector(element);\n}\n\nfunction getParentsElements(element, parents) {\n    parents = parents || [element];\n    var parent = element.parentElement;\n    if (parent) {\n        parents.push(parent);\n        return getParentsElements(parent, parents);\n    }\n    return parents;\n}\n\nfunction handleClickOndocument(event) {\n    var parentsElements = getParentsElements(event.target);\n    var nonClickedItems = items.filter(function (item) {\n        if (item.clickOutMethod === undefined) {\n            return false;\n        }\n        if (item.elmAction && parentsElements.includes(item.elmAction)) {\n            return false;\n        }\n        return parentsElements.includes(item.element) === false;\n    });\n    nonClickedItems.forEach(function (item) {\n        return item.clickOutMethod();\n    });\n    var clickedItems = items.filter(function (item) {\n        if (item.clickInMethod === undefined) {\n            return false;\n        }\n        if (item.elmAction && parentsElements.includes(item.elmAction)) {\n            return true;\n        }\n        return parentsElements.includes(item.element);\n    });\n    clickedItems.forEach(function (item) {\n        return item.clickInMethod();\n    });\n}\n\nfunction registerClickOnDocument() {\n    document.addEventListener('click', function (event) {\n        return handleClickOndocument(event);\n    });\n}\n\n;\n\n//# sourceURL=webpack://OutsideClick/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__);
/******/ 	window.OutsideClick = __webpack_exports__["default"];
/******/ 	
/******/ })()
;