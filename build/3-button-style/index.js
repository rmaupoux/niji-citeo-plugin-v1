/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/3-button-style/edit.js":
/*!************************************!*\
  !*** ./src/3-button-style/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/3-button-style/editor.scss");






function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  // const { attributes: { number, title, chapterSign, alignment, textColor, backgroundColor, withRadius, radius }, setAttributes, className, isSelected } = props
  const {
    attributes,
    className,
    setAttributes
  } = props;
  const {
    number,
    title,
    chapterSign,
    alignment,
    textColor,
    backgroundColor,
    withRadius,
    radius
  } = attributes;

  // On ajoute notre classe personnalisée
  blockProps.className += ` bouton-style--${props.attributes.type || 'normal'}`;

  // La fonction qui met à jour la valeur
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, props.isSelected ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: props.attributes.alignment,
    onChange: alignment => props.setAttributes({
      alignment
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: "arrow-left",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gauche', 'new-gutenberg-block'),
    className: "new-gutenberg-block-toolbar-blue",
    onClick: () => props.setAttributes({
      type: 'gauche'
    }),
    isPressed: props.attributes.type == 'gauche'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: "arrow-right",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Droite', 'new-gutenberg-block'),
    className: "new-gutenberg-block-toolbar-blue",
    onClick: () => props.setAttributes({
      type: 'droite'
    }),
    isPressed: props.attributes.type == 'droite'
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'traduction'),
    colorSettings: [{
      value: backgroundColor,
      onChange: backgroundColor => setAttributes({
        backgroundColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background color', 'traduction')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Label', 'new-gutenberg-block'),
    value: props.attributes.text,
    onChange: text => props.setAttributes({
      text
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.URLInput, {
    value: props.attributes.url,
    onChange: (url, post) => props.setAttributes({
      url,
      text: post && post.title || props.attributes.text
    }),
    __nextHasNoMarginBottom: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: props.attributes.url,
    style: {
      // borderRadius: withRadius ? radius : null,
      backgroundColor: backgroundColor
    }
  }, props.attributes.text || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit link', 'new-gutenberg-block')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: props.attributes.url,
    style: {
      // borderRadius: withRadius ? radius : null,
      backgroundColor: backgroundColor
    }
  }, props.attributes.text || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit link', 'new-gutenberg-block'))));
}

/***/ }),

/***/ "./src/3-button-style/index.js":
/*!*************************************!*\
  !*** ./src/3-button-style/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/3-button-style/style.scss");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons.js */ "./src/icons.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/3-button-style/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/3-button-style/save.js");




/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('niji-citeo-plugin/url', {
  icon: (_icons_js__WEBPACK_IMPORTED_MODULE_3___default().icon5),
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/3-button-style/save.js":
/*!************************************!*\
  !*** ./src/3-button-style/save.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save(props) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  blockProps.className += ` bouton-style--${props.attributes.type || 'normal'}`;
  const {
    attributes: {
      number,
      text,
      title,
      chapterSign,
      alignment,
      textColor,
      backgroundColor,
      withRadius,
      radius,
      url
    },
    setAttributes,
    className,
    isSelected
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: props.attributes.url,
    title: "Bonjour",
    style: {
      // borderRadius: withRadius ? radius : null,
      backgroundColor: backgroundColor
    }
  }, props.attributes.text));
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ (() => {

const {
  createElement
} = wp.element;
const blockIcons = {};
blockIcons.icon4 = createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 43.2 43.2"
}, createElement('defs', null, createElement('style', null, '.cls-2{fill:#fff}')), createElement('g', {
  id: "Calque_1"
}, createElement('path', {
  style: {
    fill: "#00d034"
  },
  d: "M0 0h43.2v43.2H0z"
}), createElement('path', {
  className: "cls-2",
  d: "M19.6 24.2s0 .1-.1.1-.2 0-.4-.2-.4-.2-.4-.2c-.7.5-1.6.7-2.6.7s-2.1-.4-2.8-1.3c-.7-.8-1.1-1.8-1.1-3s.3-2.2 1-3c.7-.9 1.7-1.3 2.9-1.3s1.2.1 1.7.4 1 .7 1.3 1.2v.2c0 .1-.1.2-.4.5s-.4.5-.5.5-.2-.1-.4-.4c-.2-.3-.5-.5-.7-.7-.4-.2-.7-.4-1.1-.4-.7 0-1.3.3-1.8.9-.4.6-.6 1.2-.6 2s.2 1.4.7 2c.5.6 1.1.9 1.8.9s1.4-.2 2-.6v-2.2c0-.3 0 0 .1 0h1.2s.1 0 .1.2v1.2c0 .6 0 1.3.1 2.3ZM25.9 19.2v5.2c0 .3 0 .1-.1.2h-1.2c-.8 0 0-.1 0-.4v-.4c-.7.6-1.3.8-1.9.8s-1.4-.3-1.7-.9c-.2-.4-.3-1.1-.3-2.1s0-1.7.2-2.3c0-.2 0-.2.2-.2h1c.1 0 .1 0 .1.1V21.6c0 .7 0 1.1.1 1.4.2.4.5.6 1.1.6s.5-.1.9-.4c.4-.3.5-.5.6-.7v-3.1c0-1.8 0-.3.2-.3h1c.1 0 .2 0 .2.2ZM30.4 23.4v.9h-.1c-.3.2-.8.2-1.5.2s-1.4-.4-1.4-1.2v-3c0-.3 0-.2-.2-.3h-.4s-.1-.2-.1-.5v-.4c0-.2 0-.2.2-.2h.3c.2 0 .3 0 .3-.2v-1.4c0-.3 0-.4.2-.4s.4 0 1.1.2c0 0 .1 0 .1.1v1.6c0 .2 0 .2.2.2h1.4v1c0 .1 0 .1-.2.1h-1.4c-.1 0 0 .1 0 .3v2.8c0 .2.3.3.6.3h1c.1 0 0 0 0 .1Z"
})));
blockIcons.icon5 = createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 43.2 43.2"
}, createElement('defs', null, createElement('style', null, '.cls-2{fill:#fff}')), createElement('g', {
  id: "Calque_1"
}, createElement('path', {
  style: {
    fill: "#00d034"
  },
  d: "M0 0h43.2v43.2H0z"
}), createElement('path', {
  className: "cls-2",
  d: "M19.6 24.2s0 .1-.1.1-.2 0-.4-.2-.4-.2-.4-.2c-.7.5-1.6.7-2.6.7s-2.1-.4-2.8-1.3c-.7-.8-1.1-1.8-1.1-3s.3-2.2 1-3c.7-.9 1.7-1.3 2.9-1.3s1.2.1 1.7.4 1 .7 1.3 1.2v.2c0 .1-.1.2-.4.5s-.4.5-.5.5-.2-.1-.4-.4c-.2-.3-.5-.5-.7-.7-.4-.2-.7-.4-1.1-.4-.7 0-1.3.3-1.8.9-.4.6-.6 1.2-.6 2s.2 1.4.7 2c.5.6 1.1.9 1.8.9s1.4-.2 2-.6v-2.2c0-.3 0 0 .1 0h1.2s.1 0 .1.2v1.2c0 .6 0 1.3.1 2.3ZM25.9 19.2v5.2c0 .3 0 .1-.1.2h-1.2c-.8 0 0-.1 0-.4v-.4c-.7.6-1.3.8-1.9.8s-1.4-.3-1.7-.9c-.2-.4-.3-1.1-.3-2.1s0-1.7.2-2.3c0-.2 0-.2.2-.2h1c.1 0 .1 0 .1.1V21.6c0 .7 0 1.1.1 1.4.2.4.5.6 1.1.6s.5-.1.9-.4c.4-.3.5-.5.6-.7v-3.1c0-1.8 0-.3.2-.3h1c.1 0 .2 0 .2.2ZM30.4 23.4v.9h-.1c-.3.2-.8.2-1.5.2s-1.4-.4-1.4-1.2v-3c0-.3 0-.2-.2-.3h-.4s-.1-.2-.1-.5v-.4c0-.2 0-.2.2-.2h.3c.2 0 .3 0 .3-.2v-1.4c0-.3 0-.4.2-.4s.4 0 1.1.2c0 0 .1 0 .1.1v1.6c0 .2 0 .2.2.2h1.4v1c0 .1 0 .1-.2.1h-1.4c-.1 0 0 .1 0 .3v2.8c0 .2.3.3.6.3h1c.1 0 0 0 0 .1Z"
})));

// Répétez le même processus pour blockIcons.icon5

/***/ }),

/***/ "./src/3-button-style/editor.scss":
/*!****************************************!*\
  !*** ./src/3-button-style/editor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/3-button-style/style.scss":
/*!***************************************!*\
  !*** ./src/3-button-style/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"3-button-style/index": 0,
/******/ 			"3-button-style/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkniji_citeo_plugin"] = self["webpackChunkniji_citeo_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["3-button-style/style-index"], () => (__webpack_require__("./src/3-button-style/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map