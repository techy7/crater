/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.sass":
/*!************************!*\
  !*** ./css/style.sass ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: semicolons aren't allowed in the indented syntax.\\n  ╷\\n2 │ @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');\\n  │                                                                                                                          ^\\n  ╵\\n  css/style.sass 2:122  root stylesheet\\n    at /Users/arwinabatayo/Projects/Techy7/crater/public/g-squared-test/wp-content/themes/my-theme/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/arwinabatayo/Projects/Techy7/crater/public/g-squared-test/wp-content/themes/my-theme/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/arwinabatayo/Projects/Techy7/crater/public/g-squared-test/wp-content/themes/my-theme/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/arwinabatayo/Projects/Techy7/crater/public/g-squared-test/wp-content/themes/my-theme/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at /Users/arwinabatayo/Projects/Techy7/crater/public/g-squared-test/wp-content/themes/my-theme/node_modules/sass-loader/dist/index.js:62:7\\n    at Function.call$2 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:90950:16)\\n    at _render_closure1.call$2 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:79870:12)\\n    at _RootZone.runBinary$3$3 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:27175:18)\\n    at _FutureListener.handleError$1 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25703:19)\\n    at _Future__propagateToListeners_handleError.call$0 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:26000:49)\\n    at Object._Future__propagateToListeners (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:4539:77)\\n    at _Future._completeError$2 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25833:9)\\n    at _AsyncAwaitCompleter.completeError$2 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25176:12)\\n    at Object._asyncRethrow (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:4288:17)\\n    at /Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:13184:20\\n    at _wrapJsFunctionForAsync_closure.$protected (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:4313:15)\\n    at _wrapJsFunctionForAsync_closure.call$2 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25197:12)\\n    at _awaitOnObject_closure0.call$2 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25189:25)\\n    at _RootZone.runBinary$3$3 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:27175:18)\\n    at _FutureListener.handleError$1 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25703:19)\\n    at _Future__propagateToListeners_handleError.call$0 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:26000:49)\\n    at Object._Future__propagateToListeners (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:4539:77)\\n    at _Future._completeError$2 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25833:9)\\n    at _Future__asyncCompleteError_closure.call$0 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25922:18)\\n    at Object._microtaskLoop (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:4590:24)\\n    at StaticClosure._startMicrotaskLoop (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:4596:11)\\n    at _AsyncRun__scheduleImmediateJsOverride_internalCallback.call$0 (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:25087:21)\\n    at invokeClosure (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:1397:26)\\n    at Immediate.<anonymous> (/Users/arwinabatayo/Projects/Techy7/crater/node_modules/sass/sass.dart.js:1418:18)\\n    at processImmediate (node:internal/timers:464:21)\");\n\n//# sourceURL=webpack:///./css/style.sass?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.sass */ \"./css/style.sass\");\n/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });