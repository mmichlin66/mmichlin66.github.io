(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mimbl"), require("mimurl"));
	else if(typeof define === 'function' && define.amd)
		define(["mimbl", "mimurl"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mimbl"), require("mimurl")) : factory(root["mimbl"], root["mimurl"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_mimbl__, __WEBPACK_EXTERNAL_MODULE_mimurl__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MainForm.css":
/*!**************************!*\
  !*** ./src/MainForm.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/MainForm.tsx":
/*!**************************!*\
  !*** ./src/MainForm.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mim = __importStar(__webpack_require__(/*! mimbl */ "mimbl"));
const mimurl = __importStar(__webpack_require__(/*! mimurl */ "mimurl"));
__webpack_require__(/*! ./MainForm.css */ "./src/MainForm.css");
class MainForm extends mim.Component {
    constructor() {
        super(...arguments);
        this.onPatternChange = (e) => {
            this.pattern = e.target.value;
            this.update();
        };
        this.onUrlChange = (e) => {
            this.url = e.target.value;
            this.update();
        };
    }
    render() {
        return mim.jsx("div", null,
            mim.jsx("p", { style: { margin: "4px" } }, "Enter URL pattern and URL. Parsing and matching results will be displayed below."),
            this.renderForm(),
            this.parsedPattern && this.parsedUrl && this.renderMatchResult(),
            this.pattern && this.pattern.length > 0 &&
                mim.jsx("div", { class: "block" },
                    mim.jsx("h3", null, "URL Pattern"),
                    this.renderStringWithRulers(this.pattern),
                    mim.jsx("br", null),
                    this.renderPatternParsingResult()));
    }
    renderForm() {
        return mim.jsx("table", { class: "layout" },
            mim.jsx("colgroup", null,
                mim.jsx("col", { style: { textAlign: "right", verticalAlign: "center" } }),
                mim.jsx("col", { style: { textAlign: "left", verticalAlign: "middle", width: "100%" } })),
            mim.jsx("tr", null,
                mim.jsx("td", null, "Pattern:"),
                mim.jsx("td", null,
                    mim.jsx("input", { type: "text", style: { width: "100%" }, input: this.onPatternChange }))),
            mim.jsx("tr", null,
                mim.jsx("td", null, "URL:"),
                mim.jsx("td", null,
                    mim.jsx("input", { type: "text", style: { width: "100%" }, input: this.onUrlChange }))));
    }
    renderMatchResult() {
        return mim.jsx("div", { class: "block" },
            mim.jsx("h3", null, "Match Result"),
            mim.jsx("div", { class: "matchResult" },
                !this.matchResult.success &&
                    mim.jsx(mim.Placeholder, null,
                        mim.jsx("span", { class: "matchResultIcon", style: { color: "red" } }, "\u2639"),
                        this.renderMatchResultErrors(this.matchResult.errors)),
                this.matchResult.success &&
                    mim.jsx(mim.Placeholder, null,
                        mim.jsx("span", { class: "matchResultIcon", style: { color: "green" } }, "\u263A"),
                        this.renderMatchResultFields(this.matchResult.fields))));
    }
    renderMatchResultFields(fields) {
        let fieldRows = [];
        for (let fieldName in fields) {
            let fieldValue = fields[fieldName];
            fieldRows.push(mim.jsx("tr", null,
                mim.jsx("td", null,
                    mim.jsx("pre", null, fieldName)),
                mim.jsx("td", null,
                    mim.jsx("pre", null, JSON.stringify(fieldValue)))));
        }
        if (fieldRows.length > 0) {
            return mim.jsx("table", { class: "data" },
                mim.jsx("tr", null,
                    mim.jsx("th", null, "Field"),
                    mim.jsx("th", null, "Value")),
                fieldRows);
        }
        else
            return mim.jsx("p", null, "No fields were extracted from the URL");
    }
    renderMatchResultErrors(errors) {
        return mim.jsx("div", { class: "matchResultErrors" }, errors.map((error) => mim.jsx("span", null, error)));
    }
    renderPatternParsingResult() {
        return mim.jsx("div", { class: "patternParsing" },
            this.patternParsingError &&
                mim.jsx(mim.Placeholder, null,
                    mim.jsx("span", { class: "patternParsingIcon", style: { color: "red" } }, "\u2639"),
                    mim.jsx("span", { style: { verticalAlign: "middle", paddingLeft: "8px" } }, this.patternParsingError.message)),
            this.parsedPattern &&
                mim.jsx(mim.Placeholder, null,
                    mim.jsx("span", { class: "patternParsingIcon", style: { color: "green" } }, "\u263A"),
                    this.renderParsedPattern()));
    }
    renderParsedPattern() {
        let partRows = [];
        for (let part of this.parsedPattern.parts) {
            if (!part)
                continue;
            let partName = mimurl.EUrlPart[part.urlPart];
            let segments = part.getSegments();
            if (segments.length > 0) {
                let firstSegment = segments[0];
                partRows.push(mim.jsx("tr", null,
                    mim.jsx("td", { rowspan: segments.length }, partName),
                    mim.jsx("td", null, this.pattern.substr(firstSegment.location.start, firstSegment.location.length)),
                    mim.jsx("td", null, this.getLocationString(firstSegment.location)),
                    mim.jsx("td", null, firstSegment.regExp),
                    mim.jsx("td", null, this.renderParsedSegmentFields(firstSegment))));
                for (let i = 1; i < segments.length; i++) {
                    let segment = segments[i];
                    partRows.push(mim.jsx("tr", null,
                        mim.jsx("td", null, this.pattern.substr(segment.location.start, segment.location.length)),
                        mim.jsx("td", null, this.getLocationString(segment.location)),
                        mim.jsx("td", null, segment.regExp),
                        mim.jsx("td", null, this.renderParsedSegmentFields(segment))));
                }
            }
        }
        return mim.jsx("table", { class: "data" },
            mim.jsx("tr", null,
                mim.jsx("th", null, "Part"),
                mim.jsx("th", null, "Segment"),
                mim.jsx("th", null, "Location"),
                mim.jsx("th", null, "RegExp"),
                mim.jsx("th", null, "Fields")),
            partRows);
    }
    getLocationString(location) {
        return `${location.start} - ${location.start + location.length - 1} (${location.length})`;
    }
    renderParsedSegmentFields(segment) {
        let fieldSpans = [];
        for (let field of segment.fields)
            fieldSpans.push(mim.jsx("span", null,
                field.name,
                ": ",
                mimurl.FieldFormat[field.format]));
        return mim.jsx("div", { class: "parsedSegmentFields" }, fieldSpans);
    }
    renderPatternCompilationError() {
        return mim.jsx("div", null);
    }
    renderCompiledPattern() {
        return mim.jsx("table", { class: "data" });
    }
    renderStringWithRulers(s) {
        return mim.jsx("div", { class: "stringWithRulers" },
            mim.jsx("pre", { class: "rulers" },
                this.ruler1,
                mim.jsx("br", null),
                this.ruler2),
            mim.jsx("pre", { class: "pattern" }, s));
    }
    update() {
        // cleanup current data
        this.ruler1 = "";
        this.ruler2 = "";
        this.patternParsingError = undefined;
        this.parsedPattern = undefined;
        this.patternCompilationError = undefined;
        this.urlParsingError = undefined;
        this.parsedUrl = undefined;
        this.matchResult = undefined;
        if (this.pattern && this.pattern.length > 0) {
            // create ruler strings
            for (let i = 0; i < this.pattern.length; i++) {
                let iAsString = i.toString();
                let r = i % 10;
                this.ruler1 += r === 0 ? iAsString : r >= iAsString.length ? " " : "";
                this.ruler2 += r.toString();
            }
            // parse URL pattern
            try {
                this.parsedPattern = mimurl.parseUrlPattern(this.pattern);
            }
            catch (err) {
                this.patternParsingError = err;
            }
        }
        // parse URL
        if (this.url && this.url.length > 0) {
            try {
                this.parsedUrl = mimurl.parseURL(this.url);
            }
            catch (err) {
                this.urlParsingError = err;
            }
        }
        // match URL against pattern
        if (this.parsedPattern && this.parsedUrl)
            this.matchResult = mimurl.match(this.parsedUrl, this.parsedPattern);
        this.updateMe();
    }
    ;
}
exports.MainForm = MainForm;


/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mim = __importStar(__webpack_require__(/*! mimbl */ "mimbl"));
// import {Popup, Dialog, DialogButton, MsgBox, MsgBoxButtons, MsgBoxIcon} from "mimcl";
const MainForm_1 = __webpack_require__(/*! ./MainForm */ "./src/MainForm.tsx");
// this function is called from body.onload
window.main = function () {
    mim.mount(new MainForm_1.MainForm());
};


/***/ }),

/***/ "mimbl":
/*!**************************************************************************************!*\
  !*** external {"root":"mimbl","commonjs2":"mimbl","commonjs":"mimbl","amd":"mimbl"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimbl__;

/***/ }),

/***/ "mimurl":
/*!******************************************************************************************!*\
  !*** external {"root":"mimurl","commonjs2":"mimurl","commonjs":"mimurl","amd":"mimurl"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimurl__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbkZvcm0uY3NzPzliOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbWJsXCIsXCJjb21tb25qczJcIjpcIm1pbWJsXCIsXCJjb21tb25qc1wiOlwibWltYmxcIixcImFtZFwiOlwibWltYmxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtB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QSxDQUFDO0NBQ0Y7QUFyUUQsNEJBcVFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVFELG9FQUE2QjtBQUM3Qix3RkFBd0Y7QUFDeEYsK0VBQW9DO0FBSXBDLDJDQUEyQztBQUMxQyxNQUFjLENBQUMsSUFBSSxHQUFHO0lBRXRCLEdBQUcsQ0FBQyxLQUFLLENBQUUsSUFBSSxtQkFBUSxFQUFFLENBQUMsQ0FBQztBQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7QUNYRCxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJtaW11cmwtZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWJsXCIsIFwibWltdXJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJtaW1ibFwiXSwgcm9vdFtcIm1pbXVybFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzeFwiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0ICogYXMgbWltdXJsIGZyb20gXCJtaW11cmxcIjtcclxuaW1wb3J0IFwiLi9NYWluRm9ybS5jc3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Gb3JtIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cGF0dGVybjogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdHJ1bGVyMTogc3RyaW5nO1xyXG5cdHJ1bGVyMjogc3RyaW5nXHJcblx0cGF0dGVyblBhcnNpbmdFcnJvcjogRXJyb3I7XHJcblx0cGFyc2VkUGF0dGVybjogbWltdXJsLklQYXJzZWRVcmxQYXR0ZXJuO1xyXG5cdHBhdHRlcm5Db21waWxhdGlvbkVycm9yOiBFcnJvcjtcclxuXHR1cmxQYXJzaW5nRXJyb3I6IEVycm9yO1xyXG5cdHBhcnNlZFVybDogbWltdXJsLklQYXJzZWRBY3R1YWxVUkw7XHJcblx0bWF0Y2hSZXN1bHQ6IG1pbXVybC5JVXJsUGF0dGVybk1hdGNoUmVzdWx0O1xyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHQ8cCBzdHlsZT17e21hcmdpbjpcIjRweFwifX0+RW50ZXIgVVJMIHBhdHRlcm4gYW5kIFVSTC4gUGFyc2luZyBhbmQgbWF0Y2hpbmcgcmVzdWx0cyB3aWxsIGJlIGRpc3BsYXllZCBiZWxvdy48L3A+XHJcblx0XHRcdHt0aGlzLnJlbmRlckZvcm0oKX1cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybiAmJiB0aGlzLnBhcnNlZFVybCAmJiB0aGlzLnJlbmRlck1hdGNoUmVzdWx0KCl9XHJcblx0XHRcdHt0aGlzLnBhdHRlcm4gJiYgdGhpcy5wYXR0ZXJuLmxlbmd0aCA+IDAgJiZcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cclxuXHRcdFx0XHRcdDxoMz5VUkwgUGF0dGVybjwvaDM+XHJcblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCB0aGlzLnBhdHRlcm4pfVxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlclBhdHRlcm5QYXJzaW5nUmVzdWx0KCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJGb3JtKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9XCJsYXlvdXRcIj5cclxuXHRcdFx0PGNvbGdyb3VwPlxyXG5cdFx0XHRcdDxjb2wgc3R5bGU9e3t0ZXh0QWxpZ246XCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOlwiY2VudGVyXCJ9fS8+XHJcblx0XHRcdFx0PGNvbCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIiwgdmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLCB3aWR0aDogXCIxMDAlXCJ9fS8+XHJcblx0XHRcdDwvY29sZ3JvdXA+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHQ8dGQ+UGF0dGVybjo8L3RkPlxyXG5cdFx0XHRcdDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gaW5wdXQ9e3RoaXMub25QYXR0ZXJuQ2hhbmdlfSAvPjwvdGQ+XHJcblx0XHRcdDwvdHI+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHQ8dGQ+VVJMOjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBpbnB1dD17dGhpcy5vblVybENoYW5nZX0gLz48L3RkPlxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHQoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxyXG5cdFx0XHQ8aDM+TWF0Y2ggUmVzdWx0PC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1hdGNoUmVzdWx0XCI+XHJcblx0XHRcdFx0eyF0aGlzLm1hdGNoUmVzdWx0LnN1Y2Nlc3MgJiZcclxuXHRcdFx0XHRcdDxtaW0uUGxhY2Vob2xkZXI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWF0Y2hSZXN1bHRJY29uXCIgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19PntcIlxcdTI2MzlcIn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlck1hdGNoUmVzdWx0RXJyb3JzKCB0aGlzLm1hdGNoUmVzdWx0LmVycm9ycyl9XHJcblx0XHRcdFx0XHQ8L21pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0e3RoaXMubWF0Y2hSZXN1bHQuc3VjY2VzcyAmJlxyXG5cdFx0XHRcdFx0PG1pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtYXRjaFJlc3VsdEljb25cIiBzdHlsZT17e2NvbG9yOiBcImdyZWVuXCJ9fT57XCJcXHUyNjNBXCJ9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJNYXRjaFJlc3VsdEZpZWxkcyggdGhpcy5tYXRjaFJlc3VsdC5maWVsZHMpfVxyXG5cdFx0XHRcdFx0PC9taW0uUGxhY2Vob2xkZXI+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJNYXRjaFJlc3VsdEZpZWxkcyggZmllbGRzOiBtaW11cmwuRmllbGRCYWcpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZmllbGRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgZmllbGROYW1lIGluIGZpZWxkcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGZpZWxkVmFsdWUgPSBmaWVsZHNbZmllbGROYW1lXTtcclxuXHRcdFx0ZmllbGRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHQ8dGQ+PHByZT57ZmllbGROYW1lfTwvcHJlPjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxwcmU+e0pTT04uc3RyaW5naWZ5KCBmaWVsZFZhbHVlKX08L3ByZT48L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGZpZWxkUm93cy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwiZGF0YVwiPlxyXG5cdFx0XHRcdDx0cj48dGg+RmllbGQ8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuXHRcdFx0XHR7ZmllbGRSb3dzfVxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gPHA+Tm8gZmllbGRzIHdlcmUgZXh0cmFjdGVkIGZyb20gdGhlIFVSTDwvcD5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHRFcnJvcnMoIGVycm9yczogc3RyaW5nW10pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cIm1hdGNoUmVzdWx0RXJyb3JzXCI+XHJcblx0XHRcdHtlcnJvcnMubWFwKCAoZXJyb3I6IHN0cmluZykgPT4gPHNwYW4+e2Vycm9yfTwvc3Bhbj4pfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJQYXR0ZXJuUGFyc2luZ1Jlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cInBhdHRlcm5QYXJzaW5nXCI+XHJcblx0XHRcdHt0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IgJiZcclxuXHRcdFx0XHQ8bWltLlBsYWNlaG9sZGVyPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwYXR0ZXJuUGFyc2luZ0ljb25cIiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e1wiXFx1MjYzOVwifTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLCBwYWRkaW5nTGVmdDpcIjhweFwifX0+e3RoaXMucGF0dGVyblBhcnNpbmdFcnJvci5tZXNzYWdlfTwvc3Bhbj5cclxuXHRcdFx0XHQ8L21pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuICYmXHJcblx0XHRcdFx0PG1pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicGF0dGVyblBhcnNpbmdJY29uXCIgc3R5bGU9e3tjb2xvcjogXCJncmVlblwifX0+e1wiXFx1MjYzQVwifTwvc3Bhbj5cclxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm4oKX1cclxuXHRcdFx0XHQ8L21pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm4oKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IHBhcnRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgcGFydCBvZiB0aGlzLnBhcnNlZFBhdHRlcm4ucGFydHMpXHJcblx0XHR7XHJcblx0XHRcdGlmICghcGFydClcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBwYXJ0TmFtZSA9IG1pbXVybC5FVXJsUGFydFtwYXJ0LnVybFBhcnRdO1xyXG5cdFx0XHRsZXQgc2VnbWVudHMgPSBwYXJ0LmdldFNlZ21lbnRzKCk7XHJcblx0XHRcdGlmIChzZWdtZW50cy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGZpcnN0U2VnbWVudCA9IHNlZ21lbnRzWzBdO1xyXG5cdFx0XHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHRcdDx0ZCByb3dzcGFuPXtzZWdtZW50cy5sZW5ndGh9PntwYXJ0TmFtZX08L3RkPlxyXG5cdFx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBmaXJzdFNlZ21lbnQubG9jYXRpb24uc3RhcnQsIGZpcnN0U2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIGZpcnN0U2VnbWVudC5sb2NhdGlvbil9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57Zmlyc3RTZWdtZW50LnJlZ0V4cH08L3RkPlxyXG5cdFx0XHRcdFx0PHRkPnt0aGlzLnJlbmRlclBhcnNlZFNlZ21lbnRGaWVsZHMoIGZpcnN0U2VnbWVudCl9PC90ZD5cclxuXHRcdFx0XHQ8L3RyPik7XHJcblxyXG5cdFx0XHRcdGZvciggbGV0IGkgPSAxOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcclxuXHRcdFx0XHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBzZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBzZWdtZW50LmxvY2F0aW9uLmxlbmd0aCl9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e3NlZ21lbnQucmVnRXhwfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50KX08L3RkPlxyXG5cdFx0XHRcdFx0PC90cj4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9XCJkYXRhXCI+XHJcblx0XHRcdDx0cj48dGg+UGFydDwvdGg+PHRoPlNlZ21lbnQ8L3RoPjx0aD5Mb2NhdGlvbjwvdGg+PHRoPlJlZ0V4cDwvdGg+PHRoPkZpZWxkczwvdGg+PC90cj5cclxuXHRcdFx0e3BhcnRSb3dzfVxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0TG9jYXRpb25TdHJpbmcoIGxvY2F0aW9uOiBtaW11cmwuUGFyc2VkTG9jYXRpb24pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7bG9jYXRpb24uc3RhcnR9IC0gJHtsb2NhdGlvbi5zdGFydCArIGxvY2F0aW9uLmxlbmd0aCAtIDF9ICgke2xvY2F0aW9uLmxlbmd0aH0pYDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudDogbWltdXJsLklQYXJzZWRTZWdtZW50KTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGZpZWxkU3BhbnM6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBmaWVsZCBvZiBzZWdtZW50LmZpZWxkcylcclxuXHRcdFx0ZmllbGRTcGFucy5wdXNoKCA8c3Bhbj57ZmllbGQubmFtZX06IHttaW11cmwuRmllbGRGb3JtYXRbZmllbGQuZm9ybWF0XX08L3NwYW4+KTtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cInBhcnNlZFNlZ21lbnRGaWVsZHNcIj5cclxuXHRcdFx0e2ZpZWxkU3BhbnN9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlclBhdHRlcm5Db21waWxhdGlvbkVycm9yKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckNvbXBpbGVkUGF0dGVybigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwiZGF0YVwiPlxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyU3RyaW5nV2l0aFJ1bGVycyggczogc3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJzdHJpbmdXaXRoUnVsZXJzXCI+XHJcblx0XHRcdDxwcmUgY2xhc3M9XCJydWxlcnNcIj5cclxuXHRcdFx0XHR7dGhpcy5ydWxlcjF9PGJyLz5cclxuXHRcdFx0XHR7dGhpcy5ydWxlcjJ9XHJcblx0XHRcdDwvcHJlPlxyXG5cdFx0XHQ8cHJlIGNsYXNzPVwicGF0dGVyblwiPntzfTwvcHJlPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUGF0dGVybkNoYW5nZSA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMucGF0dGVybiA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBvblVybENoYW5nZSA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMudXJsID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIHVwZGF0ZSgpXHJcblx0e1xyXG5cdFx0Ly8gY2xlYW51cCBjdXJyZW50IGRhdGFcclxuXHRcdHRoaXMucnVsZXIxID0gXCJcIjtcclxuXHRcdHRoaXMucnVsZXIyID0gXCJcIjtcclxuXHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGF0dGVybkNvbXBpbGF0aW9uRXJyb3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnVybFBhcnNpbmdFcnJvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyc2VkVXJsID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5tYXRjaFJlc3VsdCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRpZiAodGhpcy5wYXR0ZXJuICYmIHRoaXMucGF0dGVybi5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjcmVhdGUgcnVsZXIgc3RyaW5nc1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHRoaXMucGF0dGVybi5sZW5ndGg7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBpQXNTdHJpbmcgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0bGV0IHIgPSBpICUgMTA7XHJcblx0XHRcdFx0dGhpcy5ydWxlcjEgKz0gciA9PT0gMCA/IGlBc1N0cmluZyA6IHIgPj0gaUFzU3RyaW5nLmxlbmd0aCA/IFwiIFwiIDogXCJcIjtcclxuXHRcdFx0XHR0aGlzLnJ1bGVyMiArPSByLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHBhcnNlIFVSTCBwYXR0ZXJuXHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXJzZWRQYXR0ZXJuID0gbWltdXJsLnBhcnNlVXJsUGF0dGVybiggdGhpcy5wYXR0ZXJuKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID0gZXJyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcGFyc2UgVVJMXHJcblx0XHRpZiAodGhpcy51cmwgJiYgdGhpcy51cmwubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnBhcnNlZFVybCA9IG1pbXVybC5wYXJzZVVSTCggdGhpcy51cmwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnVybFBhcnNpbmdFcnJvciA9IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1hdGNoIFVSTCBhZ2FpbnN0IHBhdHRlcm5cclxuXHRcdGlmICh0aGlzLnBhcnNlZFBhdHRlcm4gJiYgdGhpcy5wYXJzZWRVcmwpXHJcblx0XHRcdHRoaXMubWF0Y2hSZXN1bHQgPSBtaW11cmwubWF0Y2goIHRoaXMucGFyc2VkVXJsLCB0aGlzLnBhcnNlZFBhdHRlcm4pO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltdXJsIGZyb20gXCJtaW11cmxcIjtcclxuaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG4vLyBpbXBvcnQge1BvcHVwLCBEaWFsb2csIERpYWxvZ0J1dHRvbiwgTXNnQm94LCBNc2dCb3hCdXR0b25zLCBNc2dCb3hJY29ufSBmcm9tIFwibWltY2xcIjtcclxuaW1wb3J0IHtNYWluRm9ybX0gZnJvbSBcIi4vTWFpbkZvcm1cIjtcclxuXHJcblxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBib2R5Lm9ubG9hZFxyXG4od2luZG93IGFzIGFueSkubWFpbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdG1pbS5tb3VudCggbmV3IE1haW5Gb3JtKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW11cmxfXzsiXSwic291cmNlUm9vdCI6IiJ9