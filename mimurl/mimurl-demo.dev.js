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
            this.pattern = e.target.value.trim();
            this.update();
        };
        this.onUrlChange = (e) => {
            this.url = e.target.value.trim();
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
            let fieldValueAsString = fieldValue === undefined
                ? "undefined" : fieldValue === null
                ? "null" : isNaN(fieldValue)
                ? "NaN" : JSON.stringify(fieldValue);
            fieldRows.push(mim.jsx("tr", null,
                mim.jsx("td", null,
                    mim.jsx("pre", null, fieldName)),
                mim.jsx("td", null,
                    mim.jsx("pre", null, this.renderFieldValue(fields[fieldName])))));
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
    renderFieldValue(fieldValue) {
        if (fieldValue === undefined)
            return mim.jsx("span", { style: { color: "blue" } }, "undefined");
        else if (fieldValue === null)
            return mim.jsx("span", { style: { color: "blue" } }, "null");
        else if (typeof fieldValue === "string")
            return mim.jsx("span", { style: { color: "green" } }, `\"${fieldValue}\"`);
        else if (typeof fieldValue === "number") {
            if (isNaN(fieldValue))
                return mim.jsx("span", { style: { color: "blue" } }, "NaN");
            else
                return mim.jsx("span", { style: { color: "red" } }, fieldValue);
        }
        else if (typeof fieldValue === "boolean")
            return mim.jsx("span", { style: { color: "blue" } }, `${fieldValue}`);
        else if (Array.isArray(fieldValue)) {
            return mim.jsx(mim.Placeholder, null,
                mim.jsx("span", { style: { color: "blue" } }, "["),
                fieldValue.map((item, index) => mim.jsx(mim.Placeholder, null,
                    index > 0 && mim.jsx("span", { style: { color: "black" } }, ", "),
                    this.renderFieldValue(item))),
                mim.jsx("span", { style: { color: "blue" } }, "]"));
            // let arr = [];
            // arr.push(<span style={{color:"blue"}}>[</span>);
            // for( let i = 0; i < fieldValue.length; i++)
            // {
            // 	if (i > 0)
            // 		arr.push( <span style={{color:"black"}}>, </span>);
            // 	arr.push( this.renderFieldValue( fieldValue[i]));
            // }
            // arr.push(<span style={{color:"blue"}}>]</span>);
            // return arr;
        }
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
        for (let field of segment.fields) {
            let hasDefaultValue = false;
            if (field.format === mimurl.FieldFormat.String && field.defaultValue !== "")
                hasDefaultValue = true;
            else if (field.format === mimurl.FieldFormat.Integer && !isNaN(field.defaultValue))
                hasDefaultValue = true;
            else if (field.format === mimurl.FieldFormat.Float && !isNaN(field.defaultValue))
                hasDefaultValue = true;
            else if (field.format === mimurl.FieldFormat.Boolean && field.defaultValue !== undefined)
                hasDefaultValue = true;
            fieldSpans.push(mim.jsx("span", null,
                field.name,
                field.isOptional && "?",
                ": ",
                mimurl.FieldFormat[field.format],
                hasDefaultValue && " = ",
                hasDefaultValue && this.renderFieldValue(field.defaultValue)));
        }
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

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
__webpack_require__(/*! ./main.css */ "./src/main.css");
const MainForm_1 = __webpack_require__(/*! ./MainForm */ "./src/MainForm.tsx");
// this function is called from body.onload
this.mimurlDemoMain = function (appRoot) {
    mim.mount(new MainForm_1.MainForm(), appRoot);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbkZvcm0uY3NzPzliOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbWJsXCIsXCJjb21tb25qczJcIjpcIm1pbWJsXCIsXCJjb21tb25qc1wiOlwibWltYmxcIixcImFtZFwiOlwibWltYmxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FB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QUMsUUFBUSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QztZQUNELE9BQU8sR0FBRyxFQUNWO2dCQUNDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO2FBQzNCO1NBQ0Q7UUFFRCw0QkFBNEI7UUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUFBLENBQUM7Q0FDRjtBQTFVRCw0QkEwVUM7Ozs7Ozs7Ozs7OztBQ2hWRCx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0Esb0VBQTZCO0FBQzdCLHdGQUF3RjtBQUN4Rix3REFBb0I7QUFDcEIsK0VBQW9DO0FBSXBDLDJDQUEyQztBQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsT0FBb0I7SUFFbkQsR0FBRyxDQUFDLEtBQUssQ0FBRSxJQUFJLG1CQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNaRCxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJtaW11cmwtZGVtby5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW1ibFwiLCBcIm1pbXVybFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpIDogZmFjdG9yeShyb290W1wibWltYmxcIl0sIHJvb3RbXCJtaW11cmxcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c3hcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCI7XHJcbmltcG9ydCBcIi4vTWFpbkZvcm0uY3NzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluRm9ybSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHBhdHRlcm46IHN0cmluZztcclxuXHR1cmw6IHN0cmluZztcclxuXHRydWxlcjE6IHN0cmluZztcclxuXHRydWxlcjI6IHN0cmluZ1xyXG5cdHBhdHRlcm5QYXJzaW5nRXJyb3I6IEVycm9yO1xyXG5cdHBhcnNlZFBhdHRlcm46IG1pbXVybC5JUGFyc2VkVXJsUGF0dGVybjtcclxuXHRwYXR0ZXJuQ29tcGlsYXRpb25FcnJvcjogRXJyb3I7XHJcblx0dXJsUGFyc2luZ0Vycm9yOiBFcnJvcjtcclxuXHRwYXJzZWRVcmw6IG1pbXVybC5JUGFyc2VkQWN0dWFsVVJMO1xyXG5cdG1hdGNoUmVzdWx0OiBtaW11cmwuSVVybFBhdHRlcm5NYXRjaFJlc3VsdDtcclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdFx0PHAgc3R5bGU9e3ttYXJnaW46XCI0cHhcIn19PkVudGVyIFVSTCBwYXR0ZXJuIGFuZCBVUkwuIFBhcnNpbmcgYW5kIG1hdGNoaW5nIHJlc3VsdHMgd2lsbCBiZSBkaXNwbGF5ZWQgYmVsb3cuPC9wPlxyXG5cdFx0XHR7dGhpcy5yZW5kZXJGb3JtKCl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4gJiYgdGhpcy5wYXJzZWRVcmwgJiYgdGhpcy5yZW5kZXJNYXRjaFJlc3VsdCgpfVxyXG5cdFx0XHR7dGhpcy5wYXR0ZXJuICYmIHRoaXMucGF0dGVybi5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrXCI+XHJcblx0XHRcdFx0XHQ8aDM+VVJMIFBhdHRlcm48L2gzPlxyXG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyU3RyaW5nV2l0aFJ1bGVycyggdGhpcy5wYXR0ZXJuKX1cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJQYXR0ZXJuUGFyc2luZ1Jlc3VsdCgpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHR9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyRm9ybSgpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwibGF5b3V0XCI+XHJcblx0XHRcdDxjb2xncm91cD5cclxuXHRcdFx0XHQ8Y29sIHN0eWxlPXt7dGV4dEFsaWduOlwicmlnaHRcIiwgdmVydGljYWxBbGlnbjpcImNlbnRlclwifX0vPlxyXG5cdFx0XHRcdDxjb2wgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIiwgd2lkdGg6IFwiMTAwJVwifX0vPlxyXG5cdFx0XHQ8L2NvbGdyb3VwPlxyXG5cdFx0XHQ8dHI+XHJcblx0XHRcdFx0PHRkPlBhdHRlcm46PC90ZD5cclxuXHRcdFx0XHQ8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGlucHV0PXt0aGlzLm9uUGF0dGVybkNoYW5nZX0gLz48L3RkPlxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0XHQ8dHI+XHJcblx0XHRcdFx0PHRkPlVSTDo8L3RkPlxyXG5cdFx0XHRcdDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gaW5wdXQ9e3RoaXMub25VcmxDaGFuZ2V9IC8+PC90ZD5cclxuXHRcdFx0PC90cj5cclxuXHRcdDwvdGFibGU+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlck1hdGNoUmVzdWx0KCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cclxuXHRcdFx0PGgzPk1hdGNoIFJlc3VsdDwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtYXRjaFJlc3VsdFwiPlxyXG5cdFx0XHRcdHshdGhpcy5tYXRjaFJlc3VsdC5zdWNjZXNzICYmXHJcblx0XHRcdFx0XHQ8bWltLlBsYWNlaG9sZGVyPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1hdGNoUmVzdWx0SWNvblwiIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57XCJcXHUyNjM5XCJ9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJNYXRjaFJlc3VsdEVycm9ycyggdGhpcy5tYXRjaFJlc3VsdC5lcnJvcnMpfVxyXG5cdFx0XHRcdFx0PC9taW0uUGxhY2Vob2xkZXI+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHt0aGlzLm1hdGNoUmVzdWx0LnN1Y2Nlc3MgJiZcclxuXHRcdFx0XHRcdDxtaW0uUGxhY2Vob2xkZXI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWF0Y2hSZXN1bHRJY29uXCIgc3R5bGU9e3tjb2xvcjogXCJncmVlblwifX0+e1wiXFx1MjYzQVwifTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyTWF0Y2hSZXN1bHRGaWVsZHMoIHRoaXMubWF0Y2hSZXN1bHQuZmllbGRzKX1cclxuXHRcdFx0XHRcdDwvbWltLlBsYWNlaG9sZGVyPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHRGaWVsZHMoIGZpZWxkczogbWltdXJsLkZpZWxkQmFnKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGZpZWxkUm93czogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IGZpZWxkTmFtZSBpbiBmaWVsZHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBmaWVsZFZhbHVlID0gZmllbGRzW2ZpZWxkTmFtZV07XHJcblx0XHRcdGxldCBmaWVsZFZhbHVlQXNTdHJpbmcgPSBmaWVsZFZhbHVlID09PSB1bmRlZmluZWRcclxuXHRcdFx0XHRcdD8gXCJ1bmRlZmluZWRcIiA6IGZpZWxkVmFsdWUgPT09IG51bGxcclxuXHRcdFx0XHRcdD8gXCJudWxsXCIgOiBpc05hTihmaWVsZFZhbHVlIGFzIG51bWJlcilcclxuXHRcdFx0XHRcdD8gXCJOYU5cIiA6IEpTT04uc3RyaW5naWZ5KCBmaWVsZFZhbHVlKTtcclxuXHRcdFx0ZmllbGRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHQ8dGQ+PHByZT57ZmllbGROYW1lfTwvcHJlPjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxwcmU+e3RoaXMucmVuZGVyRmllbGRWYWx1ZShmaWVsZHNbZmllbGROYW1lXSl9PC9wcmU+PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChmaWVsZFJvd3MubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDx0YWJsZSBjbGFzcz1cImRhdGFcIj5cclxuXHRcdFx0XHQ8dHI+PHRoPkZpZWxkPC90aD48dGg+VmFsdWU8L3RoPjwvdHI+XHJcblx0XHRcdFx0e2ZpZWxkUm93c31cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIDxwPk5vIGZpZWxkcyB3ZXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBVUkw8L3A+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckZpZWxkVmFsdWUoIGZpZWxkVmFsdWU6IG1pbXVybC5GaWVsZFZhbHVlVHlwZSk6IGFueVxyXG5cdHtcclxuXHRcdGlmIChmaWVsZFZhbHVlID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+dW5kZWZpbmVkPC9zcGFuPjtcclxuXHRcdGVsc2UgaWYgKGZpZWxkVmFsdWUgPT09IG51bGwpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+bnVsbDwvc3Bhbj47XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJncmVlblwifX0+e2BcXFwiJHtmaWVsZFZhbHVlfVxcXCJgfTwvc3Bhbj47XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJudW1iZXJcIilcclxuXHRcdHtcclxuXHRcdFx0aWYgKGlzTmFOKGZpZWxkVmFsdWUgYXMgbnVtYmVyKSlcclxuXHRcdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pk5hTjwvc3Bhbj47XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcInJlZFwifX0+e2ZpZWxkVmFsdWV9PC9zcGFuPjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBmaWVsZFZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT57YCR7ZmllbGRWYWx1ZX1gfTwvc3Bhbj47XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBmaWVsZFZhbHVlKSlcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDxtaW0uUGxhY2Vob2xkZXI+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pls8L3NwYW4+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZmllbGRWYWx1ZS5tYXAoIChpdGVtLCBpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0PG1pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0XHRcdFx0XHR7aW5kZXggPiAwICYmIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+LCA8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckZpZWxkVmFsdWUoIGl0ZW0pfVxyXG5cdFx0XHRcdFx0XHQ8L21pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pl08L3NwYW4+XHJcblx0XHRcdDwvbWltLlBsYWNlaG9sZGVyPlxyXG5cclxuXHRcdFx0Ly8gbGV0IGFyciA9IFtdO1xyXG5cdFx0XHQvLyBhcnIucHVzaCg8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+Wzwvc3Bhbj4pO1xyXG5cdFx0XHQvLyBmb3IoIGxldCBpID0gMDsgaSA8IGZpZWxkVmFsdWUubGVuZ3RoOyBpKyspXHJcblx0XHRcdC8vIHtcclxuXHRcdFx0Ly8gXHRpZiAoaSA+IDApXHJcblx0XHRcdC8vIFx0XHRhcnIucHVzaCggPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT4sIDwvc3Bhbj4pO1xyXG5cclxuXHRcdFx0Ly8gXHRhcnIucHVzaCggdGhpcy5yZW5kZXJGaWVsZFZhbHVlKCBmaWVsZFZhbHVlW2ldKSk7XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0Ly8gYXJyLnB1c2goPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pl08L3NwYW4+KTtcclxuXHRcdFx0Ly8gcmV0dXJuIGFycjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHRFcnJvcnMoIGVycm9yczogc3RyaW5nW10pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cIm1hdGNoUmVzdWx0RXJyb3JzXCI+XHJcblx0XHRcdHtlcnJvcnMubWFwKCAoZXJyb3I6IHN0cmluZykgPT4gPHNwYW4+e2Vycm9yfTwvc3Bhbj4pfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJQYXR0ZXJuUGFyc2luZ1Jlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cInBhdHRlcm5QYXJzaW5nXCI+XHJcblx0XHRcdHt0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IgJiZcclxuXHRcdFx0XHQ8bWltLlBsYWNlaG9sZGVyPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwYXR0ZXJuUGFyc2luZ0ljb25cIiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e1wiXFx1MjYzOVwifTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLCBwYWRkaW5nTGVmdDpcIjhweFwifX0+e3RoaXMucGF0dGVyblBhcnNpbmdFcnJvci5tZXNzYWdlfTwvc3Bhbj5cclxuXHRcdFx0XHQ8L21pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuICYmXHJcblx0XHRcdFx0PG1pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicGF0dGVyblBhcnNpbmdJY29uXCIgc3R5bGU9e3tjb2xvcjogXCJncmVlblwifX0+e1wiXFx1MjYzQVwifTwvc3Bhbj5cclxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm4oKX1cclxuXHRcdFx0XHQ8L21pbS5QbGFjZWhvbGRlcj5cclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm4oKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IHBhcnRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgcGFydCBvZiB0aGlzLnBhcnNlZFBhdHRlcm4ucGFydHMpXHJcblx0XHR7XHJcblx0XHRcdGlmICghcGFydClcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBwYXJ0TmFtZSA9IG1pbXVybC5FVXJsUGFydFtwYXJ0LnVybFBhcnRdO1xyXG5cdFx0XHRsZXQgc2VnbWVudHMgPSBwYXJ0LmdldFNlZ21lbnRzKCk7XHJcblx0XHRcdGlmIChzZWdtZW50cy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGZpcnN0U2VnbWVudCA9IHNlZ21lbnRzWzBdO1xyXG5cdFx0XHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHRcdDx0ZCByb3dzcGFuPXtzZWdtZW50cy5sZW5ndGh9PntwYXJ0TmFtZX08L3RkPlxyXG5cdFx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBmaXJzdFNlZ21lbnQubG9jYXRpb24uc3RhcnQsIGZpcnN0U2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIGZpcnN0U2VnbWVudC5sb2NhdGlvbil9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57Zmlyc3RTZWdtZW50LnJlZ0V4cH08L3RkPlxyXG5cdFx0XHRcdFx0PHRkPnt0aGlzLnJlbmRlclBhcnNlZFNlZ21lbnRGaWVsZHMoIGZpcnN0U2VnbWVudCl9PC90ZD5cclxuXHRcdFx0XHQ8L3RyPik7XHJcblxyXG5cdFx0XHRcdGZvciggbGV0IGkgPSAxOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcclxuXHRcdFx0XHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBzZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBzZWdtZW50LmxvY2F0aW9uLmxlbmd0aCl9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e3NlZ21lbnQucmVnRXhwfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50KX08L3RkPlxyXG5cdFx0XHRcdFx0PC90cj4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9XCJkYXRhXCI+XHJcblx0XHRcdDx0cj48dGg+UGFydDwvdGg+PHRoPlNlZ21lbnQ8L3RoPjx0aD5Mb2NhdGlvbjwvdGg+PHRoPlJlZ0V4cDwvdGg+PHRoPkZpZWxkczwvdGg+PC90cj5cclxuXHRcdFx0e3BhcnRSb3dzfVxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0TG9jYXRpb25TdHJpbmcoIGxvY2F0aW9uOiBtaW11cmwuUGFyc2VkTG9jYXRpb24pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7bG9jYXRpb24uc3RhcnR9IC0gJHtsb2NhdGlvbi5zdGFydCArIGxvY2F0aW9uLmxlbmd0aCAtIDF9ICgke2xvY2F0aW9uLmxlbmd0aH0pYDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudDogbWltdXJsLklQYXJzZWRTZWdtZW50KTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGZpZWxkU3BhbnM6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBmaWVsZCBvZiBzZWdtZW50LmZpZWxkcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGhhc0RlZmF1bHRWYWx1ZSA9IGZhbHNlO1xyXG5cdFx0XHRpZiAoZmllbGQuZm9ybWF0ID09PSBtaW11cmwuRmllbGRGb3JtYXQuU3RyaW5nICYmIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gXCJcIilcclxuXHRcdFx0XHRoYXNEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5JbnRlZ2VyICYmICFpc05hTihmaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyKSlcclxuXHRcdFx0XHRoYXNEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5GbG9hdCAmJiAhaXNOYU4oZmllbGQuZGVmYXVsdFZhbHVlIGFzIG51bWJlcikpXHJcblx0XHRcdFx0aGFzRGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAoZmllbGQuZm9ybWF0ID09PSBtaW11cmwuRmllbGRGb3JtYXQuQm9vbGVhbiAmJiBmaWVsZC5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRoYXNEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmllbGRTcGFucy5wdXNoKCA8c3Bhbj5cclxuXHRcdFx0XHR7ZmllbGQubmFtZX1cclxuXHRcdFx0XHR7ZmllbGQuaXNPcHRpb25hbCAmJiBcIj9cIn1cclxuXHRcdFx0XHR7XCI6IFwifVxyXG5cdFx0XHRcdHttaW11cmwuRmllbGRGb3JtYXRbZmllbGQuZm9ybWF0XX1cclxuXHRcdFx0XHR7aGFzRGVmYXVsdFZhbHVlICYmIFwiID0gXCJ9XHJcblx0XHRcdFx0e2hhc0RlZmF1bHRWYWx1ZSAmJiB0aGlzLnJlbmRlckZpZWxkVmFsdWUoIGZpZWxkLmRlZmF1bHRWYWx1ZSl9XHJcblx0XHRcdDwvc3Bhbj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwicGFyc2VkU2VnbWVudEZpZWxkc1wiPlxyXG5cdFx0XHR7ZmllbGRTcGFuc31cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyUGF0dGVybkNvbXBpbGF0aW9uRXJyb3IoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyQ29tcGlsZWRQYXR0ZXJuKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9XCJkYXRhXCI+XHJcblx0XHQ8L3RhYmxlPlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCBzOiBzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cInN0cmluZ1dpdGhSdWxlcnNcIj5cclxuXHRcdFx0PHByZSBjbGFzcz1cInJ1bGVyc1wiPlxyXG5cdFx0XHRcdHt0aGlzLnJ1bGVyMX08YnIvPlxyXG5cdFx0XHRcdHt0aGlzLnJ1bGVyMn1cclxuXHRcdFx0PC9wcmU+XHJcblx0XHRcdDxwcmUgY2xhc3M9XCJwYXR0ZXJuXCI+e3N9PC9wcmU+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25QYXR0ZXJuQ2hhbmdlID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5wYXR0ZXJuID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnRyaW0oKTtcclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBvblVybENoYW5nZSA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMudXJsID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnRyaW0oKTtcclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSB1cGRhdGUoKVxyXG5cdHtcclxuXHRcdC8vIGNsZWFudXAgY3VycmVudCBkYXRhXHJcblx0XHR0aGlzLnJ1bGVyMSA9IFwiXCI7XHJcblx0XHR0aGlzLnJ1bGVyMiA9IFwiXCI7XHJcblx0XHR0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcnNlZFBhdHRlcm4gPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhdHRlcm5Db21waWxhdGlvbkVycm9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy51cmxQYXJzaW5nRXJyb3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcnNlZFVybCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMubWF0Y2hSZXN1bHQgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0aWYgKHRoaXMucGF0dGVybiAmJiB0aGlzLnBhdHRlcm4ubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIHJ1bGVyIHN0cmluZ3NcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdHRlcm4ubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgaUFzU3RyaW5nID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRcdGxldCByID0gaSAlIDEwO1xyXG5cdFx0XHRcdHRoaXMucnVsZXIxICs9IHIgPT09IDAgPyBpQXNTdHJpbmcgOiByID49IGlBc1N0cmluZy5sZW5ndGggPyBcIiBcIiA6IFwiXCI7XHJcblx0XHRcdFx0dGhpcy5ydWxlcjIgKz0gci50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBwYXJzZSBVUkwgcGF0dGVyblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IG1pbXVybC5wYXJzZVVybFBhdHRlcm4oIHRoaXMucGF0dGVybik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBhcnNlIFVSTFxyXG5cdFx0aWYgKHRoaXMudXJsICYmIHRoaXMudXJsLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXJzZWRVcmwgPSBtaW11cmwucGFyc2VVUkwoIHRoaXMudXJsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy51cmxQYXJzaW5nRXJyb3IgPSBlcnI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtYXRjaCBVUkwgYWdhaW5zdCBwYXR0ZXJuXHJcblx0XHRpZiAodGhpcy5wYXJzZWRQYXR0ZXJuICYmIHRoaXMucGFyc2VkVXJsKVxyXG5cdFx0XHR0aGlzLm1hdGNoUmVzdWx0ID0gbWltdXJsLm1hdGNoKCB0aGlzLnBhcnNlZFVybCwgdGhpcy5wYXJzZWRQYXR0ZXJuKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fTtcclxufVxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCI7XHJcbmltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuLy8gaW1wb3J0IHtQb3B1cCwgRGlhbG9nLCBEaWFsb2dCdXR0b24sIE1zZ0JveCwgTXNnQm94QnV0dG9ucywgTXNnQm94SWNvbn0gZnJvbSBcIm1pbWNsXCI7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IHtNYWluRm9ybX0gZnJvbSBcIi4vTWFpbkZvcm1cIjtcclxuXHJcblxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBib2R5Lm9ubG9hZFxyXG50aGlzLm1pbXVybERlbW9NYWluID0gZnVuY3Rpb24oIGFwcFJvb3Q6IEhUTUxFbGVtZW50KVxyXG57XHJcblx0bWltLm1vdW50KCBuZXcgTWFpbkZvcm0oKSwgYXBwUm9vdCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fOyJdLCJzb3VyY2VSb290IjoiIn0=