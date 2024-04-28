/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text using the i18n package.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that provides block properties such as class names.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * WordPress component package for user interface elements.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */


/**
 * Loads CSS styles for the block in the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


// Get the plugin URL from localized data
const PLUGIN_URL = StaticBlockData.pluginUrl;

// Re-define the image paths using the dynamic plugin URL
const imagePaths = {
  spotify: `${PLUGIN_URL}/assets/desktop/spotify.svg`,
  applePodcasts: `${PLUGIN_URL}/assets/desktop/apple-podcast.svg`,
  googlePodcasts: `${PLUGIN_URL}/assets/desktop/google-podcasts.svg`,
  pocketCasts: `${PLUGIN_URL}/assets/desktop/pocket-casts.svg`,
  bgPatternDots: `${PLUGIN_URL}/assets/desktop/bg-pattern-dots.svg`
};

/**
 * The edit function renders the block structure within the Gutenberg editor.
 * This includes customizable content like RichText, image uploads, and Inspector controls.
 *
 * @param {Object} attributes - Block attributes, including text, images, and button text.
 * @param {Function} setAttributes - Function to update block attributes.
 *
 * @return {Element} JSX element representing the block in the editor.
 */
function Edit({
  attributes,
  setAttributes
}) {
  // Destructure block attributes
  const {
    title,
    description,
    buttonText,
    backgroundImage,
    logoImage
  } = attributes;

  /**
   * Prevents the default form submission behavior to avoid unwanted page refresh.
   *
   * @param {Event} event - The form submission event.
   */
  const preventDefaultSubmission = event => {
    event.preventDefault();
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
    className: "block-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Image")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      backgroundImage: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Background Image"))
  }), backgroundImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: backgroundImage,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Image Preview"),
    style: {
      width: "100%",
      marginTop: "10px"
    } // Simple preview styling
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      logoImage: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Logo Image"))
  }), logoImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: logoImage,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Logo Preview"),
    style: {
      width: "100%",
      marginTop: "10px"
    } // Preview styling
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "main__logo"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: logoImage,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Logo")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "main__hero-image",
    style: {
      backgroundImage: `url(${backgroundImage})`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "main__hero-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-content__heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    value: title,
    onChange: newTitle => setAttributes({
      title: newTitle
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-content__description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: description,
    onChange: newDescription => setAttributes({
      description: newDescription
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Description")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-content__request-form-brand"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    id: "hero_content__request-form",
    onSubmit: preventDefaultSubmission
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "request-form__email",
    type: "email",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Email Address")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "button",
    value: buttonText,
    onChange: newButtonText => setAttributes({
      buttonText: newButtonText
    }),
    multiline: false
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-content__brands-logo"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imagePaths.spotify,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spotify')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imagePaths.applePodcasts,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apple Podcasts')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imagePaths.googlePodcasts,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Google Podcasts')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imagePaths.pocketCasts,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pocket Casts')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imagePaths.bgPatternDots,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dot Patterns")
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




// Use the dynamic plugin URL provided by PHP
const PLUGIN_URL = StaticBlockData.pluginUrl;

// Define block attributes with dynamic paths
const blockAttributes = {
  title: {
    type: 'string',
    default: 'Publish your podcasts everywhere.'
  },
  description: {
    type: 'string',
    default: 'Upload your audio to Pod with a single click...'
  },
  buttonText: {
    type: 'string',
    default: 'Request Access'
  },
  backgroundImage: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/desktop/image-host.jpg` // Dynamic path
  },
  logoImage: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/desktop/logo.svg` // Dynamic path
  }
};

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: blockAttributes,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text using the i18n package.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook used to mark the block wrapper element.
 * It provides the necessary props, such as class names.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


// Get the plugin URL from localized data
const PLUGIN_URL = StaticBlockData.pluginUrl;

// Re-define the image paths using the dynamic plugin URL
const imagePaths = {
  spotify: `${PLUGIN_URL}/assets/desktop/spotify.svg`,
  applePodcasts: `${PLUGIN_URL}/assets/desktop/apple-podcast.svg`,
  googlePodcasts: `${PLUGIN_URL}/assets/desktop/google-podcasts.svg`,
  pocketCasts: `${PLUGIN_URL}/assets/desktop/pocket-casts.svg`,
  bgPatternDots: `${PLUGIN_URL}/assets/desktop/bg-pattern-dots.svg`
};

/**
 * This function describes how the block's attributes are combined into
 * the final markup. It defines the structure of the block when it's
 * rendered on the front end.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} attributes - Block attributes that are used to build the final output.
 * @return {Element} JSX element representing the saved state of the block.
 */
function Save({
  attributes
}) {
  // Destructure block attributes for easier access
  const {
    title,
    description,
    buttonText,
    backgroundImage,
    logoImage
  } = attributes;
  return (
    // Use block props to mark the block wrapper, including class names
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(),
      className: "block-container"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "main__logo"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: logoImage,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Logo")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "main__hero-image",
      style: {
        backgroundImage: `url(${backgroundImage})`
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "main__hero-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hero-content__heading"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h1",
      value: title
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hero-content__description"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: description
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hero-content__request-form-brand"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      id: "hero_content__request-form"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "request-form__email",
      type: "email",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Address')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "button",
      value: buttonText
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hero-content__brands-logo"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imagePaths.spotify,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spotify')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imagePaths.applePodcasts,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apple Podcasts')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imagePaths.googlePodcasts,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Google Podcasts')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imagePaths.pocketCasts,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pocket Casts')
    }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imagePaths.bgPatternDots,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dot Patterns')
    })))
  );
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/static-block","version":"0.1.0","title":"Static Block","category":"common","icon":"podio","description":"A custom Gutenberg static block for publishing frontend view of \'pod request\' page with fully customizable from backend UI.","example":{},"supports":{"html":false},"textdomain":"static-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 				var [chunkIds, fn, priority] = deferred[i];
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
/******/ 			"index": 0,
/******/ 			"./style-index": 0
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
/******/ 			var [chunkIds, moreModules, runtime] = data;
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkstatic_block"] = globalThis["webpackChunkstatic_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map