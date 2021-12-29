var outsideClick;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.add = add;
var started = false;
var items = [];

function generateElementFromString(element) {
    return document.querySelector(element);
}

function mountElementBeforeAdd(element) {
    if (typeof element === 'string') {
        return generateElementFromString(element);
    }
    if (element instanceof Element || element instanceof Document) {
        return element;
    }
    throw new Error('Element must be a string or a DOM element');
}

function addNewItem(_ref) {
    var element = _ref.element,
        clickOutMethod = _ref.clickOutMethod,
        clickInMethod = _ref.clickInMethod;

    items.push({ element: element, clickOutMethod: clickOutMethod, clickInMethod: clickInMethod });
}

function getParentsElements(element, parents) {
    parents = parents || [element];
    var parent = element.parentElement;
    if (parent) {
        parents.push(parent);
        return getParentsElements(parent, parents);
    }
    return parents;
}

function handleClickOndocument(event) {
    var parentsElements = getParentsElements(event.target);
    var nonClickedItems = items.filter(function (item) {
        if (item.clickOutMethod === undefined) {
            return false;
        }
        if (item.elmAction && parentsElements.includes(item.elmAction)) {
            return false;
        }
        return parentsElements.includes(item.element) === false;
    });
    nonClickedItems.forEach(function (item) {
        return item.clickOutMethod();
    });
    var clickedItems = items.filter(function (item) {
        if (item.clickInMethod === undefined) {
            return false;
        }
        if (item.elmAction && parentsElements.includes(item.elmAction)) {
            return true;
        }
        return parentsElements.includes(item.element);
    });
    clickedItems.forEach(function (item) {
        return item.clickInMethod();
    });
}

function registerClickOnDocument() {
    if (started) {
        return;
    }
    started = true;
    document && document.addEventListener('click', function (event) {
        return handleClickOndocument(event);
    });
}

function add(element) {
    var clickOutMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var clickInMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    registerClickOnDocument();
    element = mountElementBeforeAdd(element);
    addNewItem({ element: element, clickOutMethod: clickOutMethod, clickInMethod: clickInMethod });
};
})();

outsideClick = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTcEIsR0FBVCxDQUFhSSxPQUFiLEVBQW1FO0FBQUEsUUFBN0NRLGNBQTZDLHVFQUE1QixJQUE0QjtBQUFBLFFBQXRCQyxhQUFzQix1RUFBTixJQUFNOztBQUN0RWtCO0FBQ0EzQixjQUFVRyxzQkFBc0JILE9BQXRCLENBQVY7QUFDQU8sZUFBVyxFQUFFUCxnQkFBRixFQUFXUSw4QkFBWCxFQUEyQkMsNEJBQTNCLEVBQVg7QUFDSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3V0c2lkZUNsaWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzdGFydGVkID0gZmFsc2U7XG5jb25zdCBpdGVtcyA9IFtdO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUVsZW1lbnRGcm9tU3RyaW5nKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbW91bnRFbGVtZW50QmVmb3JlQWRkKGVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUVsZW1lbnRGcm9tU3RyaW5nKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbXVzdCBiZSBhIHN0cmluZyBvciBhIERPTSBlbGVtZW50Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0l0ZW0oeyBlbGVtZW50LCBjbGlja091dE1ldGhvZCwgY2xpY2tJbk1ldGhvZCB9KSB7XG4gICAgaXRlbXMucHVzaCh7IGVsZW1lbnQsIGNsaWNrT3V0TWV0aG9kLCBjbGlja0luTWV0aG9kIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzRWxlbWVudHMoZWxlbWVudCwgcGFyZW50cykge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzIHx8IFtlbGVtZW50XTtcbiAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHNFbGVtZW50cyhwYXJlbnQsIHBhcmVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tPbmRvY3VtZW50KGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50c0VsZW1lbnRzID0gZ2V0UGFyZW50c0VsZW1lbnRzKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3Qgbm9uQ2xpY2tlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5jbGlja091dE1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uZWxtQWN0aW9uICYmIHBhcmVudHNFbGVtZW50cy5pbmNsdWRlcyhpdGVtLmVsbUFjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyZW50c0VsZW1lbnRzLmluY2x1ZGVzKGl0ZW0uZWxlbWVudCkgPT09IGZhbHNlO1xuICAgIH0pO1xuICAgIG5vbkNsaWNrZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGlja091dE1ldGhvZCgpKTtcbiAgICBjb25zdCBjbGlja2VkSXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmNsaWNrSW5NZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmVsbUFjdGlvbiAmJiBwYXJlbnRzRWxlbWVudHMuaW5jbHVkZXMoaXRlbS5lbG1BY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyZW50c0VsZW1lbnRzLmluY2x1ZGVzKGl0ZW0uZWxlbWVudCk7XG4gICAgfSk7XG4gICAgY2xpY2tlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsaWNrSW5NZXRob2QoKSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2tPbkRvY3VtZW50KCkge1xuICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRlZCA9IHRydWU7XG4gICAgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGhhbmRsZUNsaWNrT25kb2N1bWVudChldmVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGVsZW1lbnQsIGNsaWNrT3V0TWV0aG9kID0gbnVsbCwgY2xpY2tJbk1ldGhvZCA9IG51bGwpIHtcbiAgICByZWdpc3RlckNsaWNrT25Eb2N1bWVudCgpO1xuICAgIGVsZW1lbnQgPSBtb3VudEVsZW1lbnRCZWZvcmVBZGQoZWxlbWVudCk7XG4gICAgYWRkTmV3SXRlbSh7IGVsZW1lbnQsIGNsaWNrT3V0TWV0aG9kLCBjbGlja0luTWV0aG9kIH0pO1xufTtcblxuIl0sIm5hbWVzIjpbImFkZCIsInN0YXJ0ZWQiLCJpdGVtcyIsImdlbmVyYXRlRWxlbWVudEZyb21TdHJpbmciLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW91bnRFbGVtZW50QmVmb3JlQWRkIiwiRWxlbWVudCIsIkRvY3VtZW50IiwiRXJyb3IiLCJhZGROZXdJdGVtIiwiY2xpY2tPdXRNZXRob2QiLCJjbGlja0luTWV0aG9kIiwicHVzaCIsImdldFBhcmVudHNFbGVtZW50cyIsInBhcmVudHMiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiaGFuZGxlQ2xpY2tPbmRvY3VtZW50IiwiZXZlbnQiLCJwYXJlbnRzRWxlbWVudHMiLCJ0YXJnZXQiLCJub25DbGlja2VkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwidW5kZWZpbmVkIiwiZWxtQWN0aW9uIiwiaW5jbHVkZXMiLCJmb3JFYWNoIiwiY2xpY2tlZEl0ZW1zIiwicmVnaXN0ZXJDbGlja09uRG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==