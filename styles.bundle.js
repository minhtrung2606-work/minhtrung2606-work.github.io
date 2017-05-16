webpackJsonp([2,4],{

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(480)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\n  24.00dp\t= 18.00px ldpi\n  15.00dp = 11.25px\n*/\n\n.primary-bg-color {\n  background-color: #009688;\n}\n\n.primary-color {\n  color: #009688;\n}\n\n.primary-color.in-primary-bg-color {\n  color: #ffffff;\n}\n\n.primary-text-color {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.secondary-text-color {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.full-vheight {\n  height: 100vh;\n}\n\n.full-vheight.with-header {\n  height: calc(100vh - 64px);\n}\n\n.full-height {\n  height: 100%;\n}\n\n.float-left {\n  float: left;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.full-width.with-left-nav {\n  width: calc(100% - 256px);\n}\n\n.container {\n  position: relative;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n}\n\n.flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;;\n}\n\n.flex-container.horizontal-center-alignment {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-container.vertical-center-alignment {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.flex-container.hv-center-alignment {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.flex-container.in-column {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.auto-margin-left {\n  margin-left: auto;\n}\n\n.left-nav {\n  max-width: 300px;\n  width: 224px;\n  padding: 0 16px;\n  position: fixed;\n}\n\n.left-nav.with-right-divider {\n  border-right: thin solid rgba(0, 0, 0, 0.12);\n  width: 223px;\n}\n\n.left-nav-header,\n.left-nav-footer {\n  height: 56px;\n}\n\n.left-nav-footer.with-top-divider {\n  height: 55px;\n  border-top: thin solid rgba(0, 0, 0, 0.12);\n}\n\n.left-nav-container {\n  height: calc(100% - (56px * 2));\n}\n\n.todo-item-divider {\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.todo-item {\n  padding: 8px;\n}\n\n.todo-item-wrapper.selected .todo-item {\n  background-color: #cbcdd0;\n}\n\n.todo-item.done .content-list-item {\n  text-decoration: line-through;\n}\n\n.todo-item.done .title,\n.todo-item.done .sub-heading {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.left-nav-list-item {\n  position: relative;\n  height: 72px;\n}\n\n.circle-checkbox {\n  width: 40px;\n  height: 40px;\n  background-color: rgba(0, 0, 0, 0.38);\n  border-radius: 100%;\n  position: relative;\n  transition: box-shadow 250ms;\n}\n\n.circle-checkbox:hover {\n  cursor: pointer;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.38);\n}\n\n.circle-checkbox .check-mark {\n  font-size: 0px;\n}\n\n.circle-checkbox.checked {\n  background-color: #009688;\n}\n\n.circle-checkbox.checked:hover {\n  cursor: pointer;\n  box-shadow: 0 0 0 1px #009688;\n}\n\n.circle-checkbox.checked .check-mark {\n  color: rgba(255, 255, 255, 1);\n  font-size: 32px;\n  -webkit-animation: checkbox-checked-font-size 250ms;\n          animation: checkbox-checked-font-size 250ms;\n  -webkit-animation-delay: 100ms;\n          animation-delay: 100ms;\n}\n\n.left-aligned-list-item {\n  width: 56px;\n  height: 100%;\n}\n\n.content-list-item {\n  width: calc(100% - 56px);\n  height: 100%;\n}\n\n.left-nav .content-list-item:hover {\n  cursor: pointer;\n}\n\n.left-nav-input {\n  height: 32px;\n  width: 100%;\n  border-radius: 2px;\n  outline: none;\n  border: thin solid rgba(0, 0, 0, 0.54);\n  padding: 0 8px;\n  transition: box-shadow 250ms;\n}\n\n.left-nav-input:focus,\n.left-nav-input:hover {\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.38);\n}\n\n.search-group {\n  position: relative;\n}\n\n.search-group input {\n  padding-left: 48px;\n}\n\n.search-group::after {\n  content: '\\26B2';\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n  top: calc((100% - 29px) / 2);\n  left: 16px;\n  position: absolute;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.touchable-target {\n  height: 48px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.ghost-button {\n  height: 36px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: thin solid #009688;\n  color: #009688;\n  padding: 0 16px;\n  border-radius: 2px;\n  position: relative;\n  transition: box-shadow 250ms;\n}\n\n.ghost-button.without-border {\n  border-color: transparent;\n}\n\n.ghost-button.in-dark-bg {\n  border: thin solid #ffffff;\n  color: #ffffff;\n}\n\n.ghost-button.disabled {\n  cursor: not-allowed;\n}\n\n.ghost-button:hover {\n  cursor: pointer;\n  box-shadow: 0 0 0 1px #009688;\n}\n\n.ghost-button.in-dark-bg:hover {\n  box-shadow: 0 0 0 1px #ffffff;\n  cursor: pointer;\n}\n\n.header {\n  height: 64px;\n  top: 0;\n}\n\n.title {\n  font-size: 18px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.sub-heading {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.title.in-dark-bg {\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n}\n\n.sub-heading.in-dark-bg {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.main-content {\n  padding-left: 72px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  padding-right: 16px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.main-content.full-width.with-left-nav {\n  width: calc(100% - 256px - 72px - 16px);\n  margin-left: 256px;\n}\n\n.form-group {\n  margin-bottom: 24px;\n}\n\n.form-group > label {\n  display: inline-block;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\n.form-group p {\n  margin-top: 0px;\n}\n\n.form-group p.with-border {\n  padding: 24px 16px;\n  border: thin solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n}\n\n.form-group-container .form-group:last-child {\n  margin-bottom: 0;\n}\n\n.y-scrollable {\n  overflow-y: auto;\n}\n\n.detail-content .title {\n  font-size: 32px;\n}\n\n.form-group.button-bar .button {\n  margin-right: 4px;\n}\n\n.form-group.button-bar .button:last-child {\n  margin-right: 0;\n}\n\n.text-ellipsis {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n@-webkit-keyframes checkbox-checked-font-size {\n  0%   {font-size: 32px;}\n  50%  {font-size: 64px;}\n  100% {font-size: 32px;}\n}\n\n@keyframes checkbox-checked-font-size {\n  0%   {font-size: 32px;}\n  50%  {font-size: 64px;}\n  100% {font-size: 32px;}\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 480:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[484]);
//# sourceMappingURL=styles.bundle.js.map