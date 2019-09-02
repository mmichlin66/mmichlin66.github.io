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
    /**
     * Main render method
     */
    render() {
        return mim.jsx("div", { style: { margin: "12px" } },
            mim.jsx("h2", null, "URL Parsing and Matching"),
            mim.jsx("p", null,
                "This page demonstrates the capabilities of the ",
                mim.jsx("b", null, "mimurl"),
                " library for URL parsing and matching. Enter URL pattern and URL. Parsing and matching results will be displayed below."),
            this.renderForm(),
            this.renderMatchResult(),
            this.renderUrlPattern(),
            this.renderActualUrl());
    }
    /**
     * Renders input fields fro URL pattern and actual URL
     */
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
    /**
     * Renders the area with the matching results
     */
    renderMatchResult() {
        let content;
        if (!this.parsedPattern || !this.parsedUrl) {
            content = mim.jsx("p", { class: "descr" }, "When you type a valid pattern and URL, this area will show the matching results");
        }
        else if (!this.matchResult.success) {
            content = mim.jsx(mim.Fragment, null,
                mim.jsx("span", { class: "resultIcon", style: { color: "red" } }, "\u2639"),
                this.renderMatchResultErrors(this.matchResult.errors));
        }
        else {
            content = mim.jsx(mim.Fragment, null,
                mim.jsx("span", { class: "resultIcon", style: { color: "green" } }, "\u263A"),
                this.renderMatchResultFields(this.matchResult.fields));
        }
        return mim.jsx("div", { class: "block" },
            mim.jsx("h3", null, "Match Result"),
            mim.jsx("div", { class: "matchArea" }, content));
    }
    /**
     * Renders information about field values obtained during matching.
     * @param fields
     * @returns array of table rows - one row per field.
     */
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
    /**
     * Renders field value(s) according to its type and with appropriate styles.
     * @param fieldValue
     */
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
            return mim.jsx(mim.Fragment, null,
                mim.jsx("span", { style: { color: "blue" } }, "["),
                fieldValue.map((item, index) => mim.jsx(mim.Fragment, null,
                    index > 0 && mim.jsx("span", { style: { color: "black" } }, ", "),
                    this.renderFieldValue(item))),
                mim.jsx("span", { style: { color: "blue" } }, "]"));
        }
    }
    /**
     * Renders one or more errors received during the matching.
     * @param errors
     */
    renderMatchResultErrors(errors) {
        return mim.jsx("div", { class: "matchResultErrors" }, errors.map((error) => mim.jsx("span", null, error)));
    }
    /**
     * Renders the area with the information about the parsed URL pattern
     */
    renderUrlPattern() {
        let content;
        if (!this.pattern || this.pattern.length === 0) {
            content = mim.jsx("p", { class: "descr" }, "When you type a pattern, this area will show how it is parsed");
        }
        else {
            content = mim.jsx(mim.Fragment, null,
                this.renderStringWithRulers(this.pattern, this.patternRuler1, this.patternRuler2),
                mim.jsx("hr", { style: { width: "100%", borderColor: "brown", borderWidth: "0.5px" } }),
                this.renderPatternParsingResult());
        }
        return mim.jsx("div", { class: "block" },
            mim.jsx("h3", null, "URL Pattern"),
            mim.jsx("div", { class: "parsingArea" }, content));
    }
    /**
     * Renders the URL pattern parsing result: either the successflly parsed pattern or the
     * parsing error.
     */
    renderPatternParsingResult() {
        let iconColor = this.patternParsingError ? "red" : "green";
        let iconCode = this.patternParsingError ? "\u2639" : "\u263A";
        let result = this.patternParsingError
            ? mim.jsx("span", { style: { verticalAlign: "middle", paddingLeft: "8px" } }, this.patternParsingError.message)
            : this.renderParsedPattern();
        return mim.jsx("div", { class: "parsingResult" },
            mim.jsx("span", { class: "resultIcon", style: { color: iconColor } }, iconCode),
            result);
    }
    /**
     * Renders the successfully parsed URL pattern.
     */
    renderParsedPattern() {
        return mim.jsx("table", { class: "data" },
            mim.jsx("tr", null,
                mim.jsx("th", null, "Part"),
                mim.jsx("th", null, "Segment"),
                mim.jsx("th", null, "Location"),
                mim.jsx("th", null, "RegExp"),
                mim.jsx("th", null, "Fields")),
            this.parsedPattern.protocol && this.renderParsedPatternSegments("Protocol", this.parsedPattern.protocol.getSegments()),
            this.parsedPattern.hostname && this.renderParsedPatternSegments("Hostname", this.parsedPattern.hostname.getSegments()),
            this.parsedPattern.port && this.renderParsedPatternSegments("Port", this.parsedPattern.port.getSegments()),
            this.parsedPattern.path && this.renderParsedPatternSegments("Path", this.parsedPattern.path.getSegments()),
            this.parsedPattern.query && this.renderParsedPatternQuery(this.parsedPattern.query),
            this.parsedPattern.hash && this.renderParsedPatternSegments("Hash", this.parsedPattern.hash.getSegments()));
    }
    /**
     * Renders information about one or more segements from the given named URL part of the URL pattern
     * @param urlPartName
     * @param segments
     * @returns array of table rows - one per each segment.
     */
    renderParsedPatternSegments(urlPartName, segments) {
        if (!segments || segments.length === 0)
            return null;
        let partRows = [];
        let firstSegment = segments[0];
        partRows.push(mim.jsx("tr", null,
            mim.jsx("td", { rowspan: segments.length }, urlPartName),
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
        return partRows;
    }
    /**
     * Renders information about query string parameters parsed from the URL pattern
     * @param query
     * @returns array of rows - one per query string  parameter
     */
    renderParsedPatternQuery(query) {
        if (!query || Object.keys(query.parsedQSPs).length === 0)
            return null;
        let partRows = [];
        for (let qspName in query.parsedQSPs) {
            let segment = query.parsedQSPs[qspName].segment;
            partRows.push(mim.jsx("tr", null,
                mim.jsx("td", null, `Query [${qspName}]`),
                mim.jsx("td", null, this.pattern.substr(segment.location.start, segment.location.length)),
                mim.jsx("td", null, this.getLocationString(segment.location)),
                mim.jsx("td", null, segment.regExp),
                mim.jsx("td", null, this.renderParsedSegmentFields(segment))));
        }
        return partRows;
    }
    /**
     * Returns string representation of the given location within the parsed string.
     * @param location
     * @returns String representation of the given location in the format "start - end (length)"
     */
    getLocationString(location) {
        return `${location.start} - ${location.start + location.length - 1} (${location.length})`;
    }
    /**
     * Renders information about fields in the given segments.
     * @param segment
     * @returns <div> element representing a vertical box with information about each field
     * on a separate row.
     */
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
    /**
     * Renders the area with the information about the parsed actual URL
     */
    renderActualUrl() {
        let content;
        if (!this.url || this.url.length === 0) {
            content = mim.jsx("p", { class: "descr" }, "When you type a URL, this area will show how it is parsed");
        }
        else {
            content = mim.jsx(mim.Fragment, null,
                this.renderStringWithRulers(this.url, this.urlRuler1, this.urlRuler2),
                mim.jsx("hr", { style: { width: "100%", borderColor: "brown", borderWidth: "0.5px" } }),
                this.renderUrlParsingResult());
        }
        return mim.jsx("div", { class: "block" },
            mim.jsx("h3", null, "Actual URL"),
            mim.jsx("div", { class: "parsingArea" }, content));
    }
    /**
     * Renders the actual URL parsing result: either the successflly parsed URL or the parsing error.
     */
    renderUrlParsingResult() {
        let iconColor = this.urlParsingError ? "red" : "green";
        let iconCode = this.urlParsingError ? "\u2639" : "\u263A";
        let result = this.urlParsingError
            ? mim.jsx("span", { style: { verticalAlign: "middle", paddingLeft: "8px" } }, this.urlParsingError.message)
            : this.renderParsedUrl();
        return mim.jsx("div", { class: "parsingResult" },
            mim.jsx("span", { class: "resultIcon", style: { color: iconColor } }, iconCode),
            result);
    }
    /**
     * Renders the successfully parsed URL.
     */
    renderParsedUrl() {
        return mim.jsx("table", { class: "data" },
            mim.jsx("tr", null,
                mim.jsx("th", null, "Part"),
                mim.jsx("th", null, "Content")),
            this.parsedUrl.protocol && mim.jsx("tr", null,
                mim.jsx("td", null, "Protocol"),
                mim.jsx("td", null, this.parsedUrl.protocol)),
            this.parsedUrl.hostname && mim.jsx("tr", null,
                mim.jsx("td", null, "Hostname"),
                mim.jsx("td", null, this.parsedUrl.hostname.join("."))),
            this.parsedUrl.port && mim.jsx("tr", null,
                mim.jsx("td", null, "Port"),
                mim.jsx("td", null, this.parsedUrl.port)),
            this.parsedUrl.path && mim.jsx("tr", null,
                mim.jsx("td", null, "Path"),
                mim.jsx("td", null, this.parsedUrl.path.join("/"))),
            this.parsedUrl.query && this.renderParsedActualQuery(this.parsedUrl.query),
            this.parsedUrl.hash && mim.jsx("tr", null,
                mim.jsx("td", null, "Hash"),
                mim.jsx("td", null, this.parsedUrl.hash)));
    }
    /**
     * Renders information about query string parameters parsed from the URL
     * @param query
     * @returns array of rows - one per query string  parameter
     */
    renderParsedActualQuery(query) {
        if (!query || Object.keys(query).length === 0)
            return null;
        let partRows = [];
        for (let qspName in query) {
            let qspValues = query[qspName];
            partRows.push(mim.jsx("tr", null,
                mim.jsx("td", null, `Query [${qspName}]`),
                mim.jsx("td", null, qspValues.map((qspValue) => mim.jsx("div", null, qspValue ? qspValue : "<empty>")))));
        }
        return partRows;
    }
    renderStringWithRulers(s, ruler1, ruler2) {
        return mim.jsx("div", null,
            mim.jsx("pre", { class: "rulers" },
                ruler1,
                mim.jsx("br", null),
                ruler2),
            mim.jsx("pre", { class: "string" }, s));
    }
    /**
     * Parses the URL pattern and the actual URL (if exist) and invokes matching. This method
     * builds internal structures, which are then represented in the UI.
     */
    update() {
        // cleanup current data
        this.patternRuler1 = "";
        this.patternRuler2 = "";
        this.patternParsingError = undefined;
        this.parsedPattern = undefined;
        this.urlRuler1 = "";
        this.urlRuler2 = "";
        this.urlParsingError = undefined;
        this.parsedUrl = undefined;
        this.matchResult = undefined;
        if (this.pattern && this.pattern.length > 0) {
            // create ruler strings
            for (let i = 0; i < this.pattern.length; i++) {
                let iAsString = i.toString();
                let r = i % 10;
                this.patternRuler1 += r === 0 ? iAsString : r >= iAsString.length ? " " : "";
                this.patternRuler2 += r.toString();
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
            // create ruler strings
            for (let i = 0; i < this.url.length; i++) {
                let iAsString = i.toString();
                let r = i % 10;
                this.urlRuler1 += r === 0 ? iAsString : r >= iAsString.length ? " " : "";
                this.urlRuler2 += r.toString();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbkZvcm0uY3NzPzliOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbWJsXCIsXCJjb21tb25qczJcIjpcIm1pbWJsXCIsXCJjb21tb25qc1wiOlwibWltYmxcIixcImFtZFwiOlwibWltYmxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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QUksQ0FBQyxTQUFTO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUFBLENBQUM7Q0FDRjtBQXRmRCw0QkFzZkM7Ozs7Ozs7Ozs7OztBQzVmRCx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsb0VBQTZCO0FBQzdCLHdEQUFvQjtBQUNwQiwrRUFBb0M7QUFJcEMsMkNBQTJDO0FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxPQUFvQjtJQUVuRCxHQUFHLENBQUMsS0FBSyxDQUFFLElBQUksbUJBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZELG1EOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6Im1pbXVybC1kZW1vLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWJsXCIsIFwibWltdXJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJtaW1ibFwiXSwgcm9vdFtcIm1pbXVybFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzeFwiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0ICogYXMgbWltdXJsIGZyb20gXCJtaW11cmxcIjtcclxuaW1wb3J0IFwiLi9NYWluRm9ybS5jc3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Gb3JtIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cGF0dGVybjogc3RyaW5nO1xyXG5cdHBhdHRlcm5SdWxlcjE6IHN0cmluZztcclxuXHRwYXR0ZXJuUnVsZXIyOiBzdHJpbmdcclxuXHR1cmw6IHN0cmluZztcclxuXHR1cmxSdWxlcjE6IHN0cmluZztcclxuXHR1cmxSdWxlcjI6IHN0cmluZ1xyXG5cdHBhdHRlcm5QYXJzaW5nRXJyb3I6IEVycm9yO1xyXG5cdHBhcnNlZFBhdHRlcm46IG1pbXVybC5JUGFyc2VkVXJsUGF0dGVybjtcclxuXHR1cmxQYXJzaW5nRXJyb3I6IEVycm9yO1xyXG5cdHBhcnNlZFVybDogbWltdXJsLklQYXJzZWRBY3R1YWxVUkw7XHJcblx0bWF0Y2hSZXN1bHQ6IG1pbXVybC5JVXJsUGF0dGVybk1hdGNoUmVzdWx0O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWFpbiByZW5kZXIgbWV0aG9kXHJcblx0ICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17e21hcmdpbjpcIjEycHhcIn19PlxyXG5cdFx0XHQ8aDI+VVJMIFBhcnNpbmcgYW5kIE1hdGNoaW5nPC9oMj5cclxuXHJcblx0XHRcdDxwPlRoaXMgcGFnZSBkZW1vbnN0cmF0ZXMgdGhlIGNhcGFiaWxpdGllcyBvZiB0aGUgPGI+bWltdXJsPC9iPiBsaWJyYXJ5XHJcblx0XHRcdGZvciBVUkwgcGFyc2luZyBhbmQgbWF0Y2hpbmcuIEVudGVyIFVSTCBwYXR0ZXJuIGFuZCBVUkwuIFBhcnNpbmcgYW5kIG1hdGNoaW5nIHJlc3VsdHMgd2lsbFxyXG5cdFx0XHRiZSBkaXNwbGF5ZWQgYmVsb3cuPC9wPlxyXG5cclxuXHRcdFx0e3RoaXMucmVuZGVyRm9ybSgpfVxyXG5cdFx0XHR7dGhpcy5yZW5kZXJNYXRjaFJlc3VsdCgpfVxyXG5cdFx0XHR7dGhpcy5yZW5kZXJVcmxQYXR0ZXJuKCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlckFjdHVhbFVybCgpfVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGlucHV0IGZpZWxkcyBmcm8gVVJMIHBhdHRlcm4gYW5kIGFjdHVhbCBVUkxcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlckZvcm0oKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzcz1cImxheW91dFwiPlxyXG5cdFx0XHQ8Y29sZ3JvdXA+XHJcblx0XHRcdFx0PGNvbCBzdHlsZT17e3RleHRBbGlnbjpcInJpZ2h0XCIsIHZlcnRpY2FsQWxpZ246XCJjZW50ZXJcIn19Lz5cclxuXHRcdFx0XHQ8Y29sIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLCB2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsIHdpZHRoOiBcIjEwMCVcIn19Lz5cclxuXHRcdFx0PC9jb2xncm91cD5cclxuXHRcdFx0PHRyPlxyXG5cdFx0XHRcdDx0ZD5QYXR0ZXJuOjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBpbnB1dD17dGhpcy5vblBhdHRlcm5DaGFuZ2V9IC8+PC90ZD5cclxuXHRcdFx0PC90cj5cclxuXHRcdFx0PHRyPlxyXG5cdFx0XHRcdDx0ZD5VUkw6PC90ZD5cclxuXHRcdFx0XHQ8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGlucHV0PXt0aGlzLm9uVXJsQ2hhbmdlfSAvPjwvdGQ+XHJcblx0XHRcdDwvdHI+XHJcblx0XHQ8L3RhYmxlPlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgYXJlYSB3aXRoIHRoZSBtYXRjaGluZyByZXN1bHRzXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJNYXRjaFJlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55O1xyXG5cdFx0aWYgKCF0aGlzLnBhcnNlZFBhdHRlcm4gfHwgIXRoaXMucGFyc2VkVXJsKVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPHAgY2xhc3M9XCJkZXNjclwiPldoZW4geW91IHR5cGUgYSB2YWxpZCBwYXR0ZXJuIGFuZCBVUkwsIHRoaXMgYXJlYSB3aWxsIHNob3cgdGhlIG1hdGNoaW5nIHJlc3VsdHM8L3A+O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIXRoaXMubWF0Y2hSZXN1bHQuc3VjY2VzcylcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJyZXN1bHRJY29uXCIgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19PntcIlxcdTI2MzlcIn08L3NwYW4+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyTWF0Y2hSZXN1bHRFcnJvcnMoIHRoaXMubWF0Y2hSZXN1bHQuZXJyb3JzKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwicmVzdWx0SWNvblwiIHN0eWxlPXt7Y29sb3I6IFwiZ3JlZW5cIn19PntcIlxcdTI2M0FcIn08L3NwYW4+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyTWF0Y2hSZXN1bHRGaWVsZHMoIHRoaXMubWF0Y2hSZXN1bHQuZmllbGRzKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxyXG5cdFx0XHQ8aDM+TWF0Y2ggUmVzdWx0PC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1hdGNoQXJlYVwiPntjb250ZW50fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IGZpZWxkIHZhbHVlcyBvYnRhaW5lZCBkdXJpbmcgbWF0Y2hpbmcuXHJcblx0ICogQHBhcmFtIGZpZWxkcyBcclxuXHQgKiBAcmV0dXJucyBhcnJheSBvZiB0YWJsZSByb3dzIC0gb25lIHJvdyBwZXIgZmllbGQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJNYXRjaFJlc3VsdEZpZWxkcyggZmllbGRzOiBtaW11cmwuRmllbGRCYWcpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZmllbGRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgZmllbGROYW1lIGluIGZpZWxkcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGZpZWxkVmFsdWUgPSBmaWVsZHNbZmllbGROYW1lXTtcclxuXHRcdFx0bGV0IGZpZWxkVmFsdWVBc1N0cmluZyA9IGZpZWxkVmFsdWUgPT09IHVuZGVmaW5lZFxyXG5cdFx0XHRcdFx0PyBcInVuZGVmaW5lZFwiIDogZmllbGRWYWx1ZSA9PT0gbnVsbFxyXG5cdFx0XHRcdFx0PyBcIm51bGxcIiA6IGlzTmFOKGZpZWxkVmFsdWUgYXMgbnVtYmVyKVxyXG5cdFx0XHRcdFx0PyBcIk5hTlwiIDogSlNPTi5zdHJpbmdpZnkoIGZpZWxkVmFsdWUpO1xyXG5cdFx0XHRmaWVsZFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHRcdDx0ZD48cHJlPntmaWVsZE5hbWV9PC9wcmU+PC90ZD5cclxuXHRcdFx0XHQ8dGQ+PHByZT57dGhpcy5yZW5kZXJGaWVsZFZhbHVlKGZpZWxkc1tmaWVsZE5hbWVdKX08L3ByZT48L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGZpZWxkUm93cy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwiZGF0YVwiPlxyXG5cdFx0XHRcdDx0cj48dGg+RmllbGQ8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuXHRcdFx0XHR7ZmllbGRSb3dzfVxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gPHA+Tm8gZmllbGRzIHdlcmUgZXh0cmFjdGVkIGZyb20gdGhlIFVSTDwvcD5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgZmllbGQgdmFsdWUocykgYWNjb3JkaW5nIHRvIGl0cyB0eXBlIGFuZCB3aXRoIGFwcHJvcHJpYXRlIHN0eWxlcy5cclxuXHQgKiBAcGFyYW0gZmllbGRWYWx1ZSBcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlckZpZWxkVmFsdWUoIGZpZWxkVmFsdWU6IG1pbXVybC5GaWVsZFZhbHVlVHlwZSk6IGFueVxyXG5cdHtcclxuXHRcdGlmIChmaWVsZFZhbHVlID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+dW5kZWZpbmVkPC9zcGFuPjtcclxuXHRcdGVsc2UgaWYgKGZpZWxkVmFsdWUgPT09IG51bGwpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+bnVsbDwvc3Bhbj47XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJncmVlblwifX0+e2BcXFwiJHtmaWVsZFZhbHVlfVxcXCJgfTwvc3Bhbj47XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJudW1iZXJcIilcclxuXHRcdHtcclxuXHRcdFx0aWYgKGlzTmFOKGZpZWxkVmFsdWUgYXMgbnVtYmVyKSlcclxuXHRcdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pk5hTjwvc3Bhbj47XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcInJlZFwifX0+e2ZpZWxkVmFsdWV9PC9zcGFuPjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBmaWVsZFZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT57YCR7ZmllbGRWYWx1ZX1gfTwvc3Bhbj47XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBmaWVsZFZhbHVlKSlcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pls8L3NwYW4+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZmllbGRWYWx1ZS5tYXAoIChpdGVtLCBpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0PG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHR7aW5kZXggPiAwICYmIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+LCA8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckZpZWxkVmFsdWUoIGl0ZW0pfVxyXG5cdFx0XHRcdFx0XHQ8L21pbS5GcmFnbWVudD5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pl08L3NwYW4+XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBvbmUgb3IgbW9yZSBlcnJvcnMgcmVjZWl2ZWQgZHVyaW5nIHRoZSBtYXRjaGluZy5cclxuXHQgKiBAcGFyYW0gZXJyb3JzIFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHRFcnJvcnMoIGVycm9yczogc3RyaW5nW10pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cIm1hdGNoUmVzdWx0RXJyb3JzXCI+XHJcblx0XHRcdHtlcnJvcnMubWFwKCAoZXJyb3I6IHN0cmluZykgPT4gPHNwYW4+e2Vycm9yfTwvc3Bhbj4pfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0XHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgYXJlYSB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFyc2VkIFVSTCBwYXR0ZXJuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJVcmxQYXR0ZXJuKCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBjb250ZW50OiBhbnk7XHJcblx0XHRpZiAoIXRoaXMucGF0dGVybiB8fCB0aGlzLnBhdHRlcm4ubGVuZ3RoID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPHAgY2xhc3M9XCJkZXNjclwiPldoZW4geW91IHR5cGUgYSBwYXR0ZXJuLCB0aGlzIGFyZWEgd2lsbCBzaG93IGhvdyBpdCBpcyBwYXJzZWQ8L3A+O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCB0aGlzLnBhdHRlcm4sIHRoaXMucGF0dGVyblJ1bGVyMSwgdGhpcy5wYXR0ZXJuUnVsZXIyKX1cclxuXHRcdFx0XHQ8aHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGJvcmRlckNvbG9yOiBcImJyb3duXCIsIGJvcmRlcldpZHRoOiBcIjAuNXB4XCJ9fS8+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyUGF0dGVyblBhcnNpbmdSZXN1bHQoKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cclxuXHRcdFx0PGgzPlVSTCBQYXR0ZXJuPC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBhcnNpbmdBcmVhXCI+e2NvbnRlbnR9PC9kaXY+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBVUkwgcGF0dGVybiBwYXJzaW5nIHJlc3VsdDogZWl0aGVyIHRoZSBzdWNjZXNzZmxseSBwYXJzZWQgcGF0dGVybiBvciB0aGVcclxuXHQgKiBwYXJzaW5nIGVycm9yLlxyXG5cdCAqL1x0XHJcblx0cHJpdmF0ZSByZW5kZXJQYXR0ZXJuUGFyc2luZ1Jlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgaWNvbkNvbG9yID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID8gXCJyZWRcIiA6IFwiZ3JlZW5cIjtcclxuXHRcdGxldCBpY29uQ29kZSA9IHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA/IFwiXFx1MjYzOVwiIDogXCJcXHUyNjNBXCI7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yXHJcblx0XHRcdD8gPHNwYW4gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsIHBhZGRpbmdMZWZ0OlwiOHB4XCJ9fT57dGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yLm1lc3NhZ2V9PC9zcGFuPlxyXG5cdFx0XHQ6IHRoaXMucmVuZGVyUGFyc2VkUGF0dGVybigpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwicGFyc2luZ1Jlc3VsdFwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdEljb25cIiBzdHlsZT17e2NvbG9yOiBpY29uQ29sb3J9fT57aWNvbkNvZGV9PC9zcGFuPlxyXG5cdFx0XHR7cmVzdWx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBzdWNjZXNzZnVsbHkgcGFyc2VkIFVSTCBwYXR0ZXJuLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkUGF0dGVybigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwiZGF0YVwiPlxyXG5cdFx0XHQ8dHI+PHRoPlBhcnQ8L3RoPjx0aD5TZWdtZW50PC90aD48dGg+TG9jYXRpb248L3RoPjx0aD5SZWdFeHA8L3RoPjx0aD5GaWVsZHM8L3RoPjwvdHI+XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucHJvdG9jb2wgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiUHJvdG9jb2xcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnByb3RvY29sLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLmhvc3RuYW1lICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIkhvc3RuYW1lXCIsIHRoaXMucGFyc2VkUGF0dGVybi5ob3N0bmFtZS5nZXRTZWdtZW50cygpKX1cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybi5wb3J0ICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIlBvcnRcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnBvcnQuZ2V0U2VnbWVudHMoKSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucGF0aCAmJiB0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggXCJQYXRoXCIsIHRoaXMucGFyc2VkUGF0dGVybi5wYXRoLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLnF1ZXJ5ICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblF1ZXJ5KCB0aGlzLnBhcnNlZFBhdHRlcm4ucXVlcnkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLmhhc2ggJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiSGFzaFwiLCB0aGlzLnBhcnNlZFBhdHRlcm4uaGFzaC5nZXRTZWdtZW50cygpKX1cclxuXHRcdDwvdGFibGU+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IG9uZSBvciBtb3JlIHNlZ2VtZW50cyBmcm9tIHRoZSBnaXZlbiBuYW1lZCBVUkwgcGFydCBvZiB0aGUgVVJMIHBhdHRlcm5cclxuXHQgKiBAcGFyYW0gdXJsUGFydE5hbWUgXHJcblx0ICogQHBhcmFtIHNlZ21lbnRzIFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHRhYmxlIHJvd3MgLSBvbmUgcGVyIGVhY2ggc2VnbWVudC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggdXJsUGFydE5hbWU6IHN0cmluZywgc2VnbWVudHM6IG1pbXVybC5JUGFyc2VkU2VnbWVudFtdKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFzZWdtZW50cyB8fCBzZWdtZW50cy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJ0Um93czogYW55W10gPSBbXTtcclxuXHRcdGxldCBmaXJzdFNlZ21lbnQgPSBzZWdtZW50c1swXTtcclxuXHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0PHRkIHJvd3NwYW49e3NlZ21lbnRzLmxlbmd0aH0+e3VybFBhcnROYW1lfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggZmlyc3RTZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBmaXJzdFNlZ21lbnQubG9jYXRpb24ubGVuZ3RoKX08L3RkPlxyXG5cdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIGZpcnN0U2VnbWVudC5sb2NhdGlvbil9PC90ZD5cclxuXHRcdFx0PHRkPntmaXJzdFNlZ21lbnQucmVnRXhwfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBmaXJzdFNlZ21lbnQpfTwvdGQ+XHJcblx0XHQ8L3RyPik7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcclxuXHRcdFx0cGFydFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggc2VnbWVudC5sb2NhdGlvbi5zdGFydCwgc2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdDx0ZD57c2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMucmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudCl9PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJ0Um93cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgcGFyc2VkIGZyb20gdGhlIFVSTCBwYXR0ZXJuXHJcblx0ICogQHBhcmFtIHF1ZXJ5IFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHJvd3MgLSBvbmUgcGVyIHF1ZXJ5IHN0cmluZyAgcGFyYW1ldGVyXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRQYXR0ZXJuUXVlcnkoIHF1ZXJ5OiBtaW11cmwuSVBhcnNlZFF1ZXJ5U3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFxdWVyeSB8fCBPYmplY3Qua2V5cyggcXVlcnkucGFyc2VkUVNQcykubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgcGFydFJvd3M6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBxc3BOYW1lIGluIHF1ZXJ5LnBhcnNlZFFTUHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWdtZW50ID0gcXVlcnkucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50O1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPntgUXVlcnkgWyR7cXNwTmFtZX1dYH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggc2VnbWVudC5sb2NhdGlvbi5zdGFydCwgc2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdDx0ZD57c2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMucmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudCl9PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJ0Um93cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBsb2NhdGlvbiB3aXRoaW4gdGhlIHBhcnNlZCBzdHJpbmcuXHJcblx0ICogQHBhcmFtIGxvY2F0aW9uIFxyXG5cdCAqIEByZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gbG9jYXRpb24gaW4gdGhlIGZvcm1hdCBcInN0YXJ0IC0gZW5kIChsZW5ndGgpXCJcclxuXHQgKi9cclxuXHRwcml2YXRlIGdldExvY2F0aW9uU3RyaW5nKCBsb2NhdGlvbjogbWltdXJsLlBhcnNlZExvY2F0aW9uKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke2xvY2F0aW9uLnN0YXJ0fSAtICR7bG9jYXRpb24uc3RhcnQgKyBsb2NhdGlvbi5sZW5ndGggLSAxfSAoJHtsb2NhdGlvbi5sZW5ndGh9KWA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IGZpZWxkcyBpbiB0aGUgZ2l2ZW4gc2VnbWVudHMuXHJcblx0ICogQHBhcmFtIHNlZ21lbnQgXHJcblx0ICogQHJldHVybnMgPGRpdj4gZWxlbWVudCByZXByZXNlbnRpbmcgYSB2ZXJ0aWNhbCBib3ggd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIGZpZWxkXHJcblx0ICogb24gYSBzZXBhcmF0ZSByb3cuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50OiBtaW11cmwuSVBhcnNlZFNlZ21lbnQpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZmllbGRTcGFuczogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IGZpZWxkIG9mIHNlZ21lbnQuZmllbGRzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaGFzRGVmYXVsdFZhbHVlID0gZmFsc2U7XHJcblx0XHRcdGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5TdHJpbmcgJiYgZmllbGQuZGVmYXVsdFZhbHVlICE9PSBcIlwiKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkludGVnZXIgJiYgIWlzTmFOKGZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIpKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkZsb2F0ICYmICFpc05hTihmaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyKSlcclxuXHRcdFx0XHRoYXNEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5Cb29sZWFuICYmIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRmaWVsZFNwYW5zLnB1c2goIDxzcGFuPlxyXG5cdFx0XHRcdHtmaWVsZC5uYW1lfVxyXG5cdFx0XHRcdHtmaWVsZC5pc09wdGlvbmFsICYmIFwiP1wifVxyXG5cdFx0XHRcdHtcIjogXCJ9XHJcblx0XHRcdFx0e21pbXVybC5GaWVsZEZvcm1hdFtmaWVsZC5mb3JtYXRdfVxyXG5cdFx0XHRcdHtoYXNEZWZhdWx0VmFsdWUgJiYgXCIgPSBcIn1cclxuXHRcdFx0XHR7aGFzRGVmYXVsdFZhbHVlICYmIHRoaXMucmVuZGVyRmllbGRWYWx1ZSggZmllbGQuZGVmYXVsdFZhbHVlKX1cclxuXHRcdFx0PC9zcGFuPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJwYXJzZWRTZWdtZW50RmllbGRzXCI+XHJcblx0XHRcdHtmaWVsZFNwYW5zfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgYXJlYSB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFyc2VkIGFjdHVhbCBVUkxcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlckFjdHVhbFVybCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55O1xyXG5cdFx0aWYgKCF0aGlzLnVybCB8fCB0aGlzLnVybC5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8cCBjbGFzcz1cImRlc2NyXCI+V2hlbiB5b3UgdHlwZSBhIFVSTCwgdGhpcyBhcmVhIHdpbGwgc2hvdyBob3cgaXQgaXMgcGFyc2VkPC9wPjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyU3RyaW5nV2l0aFJ1bGVycyggdGhpcy51cmwsIHRoaXMudXJsUnVsZXIxLCB0aGlzLnVybFJ1bGVyMil9XHJcblx0XHRcdFx0PGhyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBib3JkZXJDb2xvcjogXCJicm93blwiLCBib3JkZXJXaWR0aDogXCIwLjVweFwifX0vPlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlclVybFBhcnNpbmdSZXN1bHQoKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cclxuXHRcdFx0PGgzPkFjdHVhbCBVUkw8L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFyc2luZ0FyZWFcIj57Y29udGVudH08L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFjdHVhbCBVUkwgcGFyc2luZyByZXN1bHQ6IGVpdGhlciB0aGUgc3VjY2Vzc2ZsbHkgcGFyc2VkIFVSTCBvciB0aGUgcGFyc2luZyBlcnJvci5cclxuXHQgKi9cdFxyXG5cdHByaXZhdGUgcmVuZGVyVXJsUGFyc2luZ1Jlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgaWNvbkNvbG9yID0gdGhpcy51cmxQYXJzaW5nRXJyb3IgPyBcInJlZFwiIDogXCJncmVlblwiO1xyXG5cdFx0bGV0IGljb25Db2RlID0gdGhpcy51cmxQYXJzaW5nRXJyb3IgPyBcIlxcdTI2MzlcIiA6IFwiXFx1MjYzQVwiO1xyXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXMudXJsUGFyc2luZ0Vycm9yXHJcblx0XHRcdD8gPHNwYW4gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsIHBhZGRpbmdMZWZ0OlwiOHB4XCJ9fT57dGhpcy51cmxQYXJzaW5nRXJyb3IubWVzc2FnZX08L3NwYW4+XHJcblx0XHRcdDogdGhpcy5yZW5kZXJQYXJzZWRVcmwoKTtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cInBhcnNpbmdSZXN1bHRcIj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJyZXN1bHRJY29uXCIgc3R5bGU9e3tjb2xvcjogaWNvbkNvbG9yfX0+e2ljb25Db2RlfTwvc3Bhbj5cclxuXHRcdFx0e3Jlc3VsdH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgc3VjY2Vzc2Z1bGx5IHBhcnNlZCBVUkwuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRVcmwoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzcz1cImRhdGFcIj5cclxuXHRcdFx0PHRyPjx0aD5QYXJ0PC90aD48dGg+Q29udGVudDwvdGg+PC90cj5cclxuXHRcdFx0e3RoaXMucGFyc2VkVXJsLnByb3RvY29sICYmIDx0cj48dGQ+UHJvdG9jb2w8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwucHJvdG9jb2x9PC90ZD48L3RyPn1cclxuXHRcdFx0e3RoaXMucGFyc2VkVXJsLmhvc3RuYW1lICYmIDx0cj48dGQ+SG9zdG5hbWU8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwuaG9zdG5hbWUuam9pbihcIi5cIil9PC90ZD48L3RyPn1cclxuXHRcdFx0e3RoaXMucGFyc2VkVXJsLnBvcnQgJiYgPHRyPjx0ZD5Qb3J0PC90ZD48dGQ+e3RoaXMucGFyc2VkVXJsLnBvcnR9PC90ZD48L3RyPn1cclxuXHRcdFx0e3RoaXMucGFyc2VkVXJsLnBhdGggJiYgPHRyPjx0ZD5QYXRoPC90ZD48dGQ+e3RoaXMucGFyc2VkVXJsLnBhdGguam9pbihcIi9cIil9PC90ZD48L3RyPn1cclxuXHRcdFx0e3RoaXMucGFyc2VkVXJsLnF1ZXJ5ICYmIHRoaXMucmVuZGVyUGFyc2VkQWN0dWFsUXVlcnkoIHRoaXMucGFyc2VkVXJsLnF1ZXJ5KX1cclxuXHRcdFx0e3RoaXMucGFyc2VkVXJsLmhhc2ggJiYgPHRyPjx0ZD5IYXNoPC90ZD48dGQ+e3RoaXMucGFyc2VkVXJsLmhhc2h9PC90ZD48L3RyPn1cclxuXHRcdDwvdGFibGU+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHBhcnNlZCBmcm9tIHRoZSBVUkxcclxuXHQgKiBAcGFyYW0gcXVlcnkgXHJcblx0ICogQHJldHVybnMgYXJyYXkgb2Ygcm93cyAtIG9uZSBwZXIgcXVlcnkgc3RyaW5nICBwYXJhbWV0ZXJcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZEFjdHVhbFF1ZXJ5KCBxdWVyeTogeyBbUDogc3RyaW5nXTogc3RyaW5nW10gfSk6IGFueVxyXG5cdHtcclxuXHRcdGlmICghcXVlcnkgfHwgT2JqZWN0LmtleXMoIHF1ZXJ5KS5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJ0Um93czogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IHFzcE5hbWUgaW4gcXVlcnkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBxc3BWYWx1ZXMgPSBxdWVyeVtxc3BOYW1lXTtcclxuXHRcdFx0cGFydFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHRcdDx0ZD57YFF1ZXJ5IFske3FzcE5hbWV9XWB9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3FzcFZhbHVlcy5tYXAoIChxc3BWYWx1ZSkgPT4gPGRpdj57cXNwVmFsdWUgPyBxc3BWYWx1ZSA6IFwiPGVtcHR5PlwifTwvZGl2Pil9PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJ0Um93cztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyU3RyaW5nV2l0aFJ1bGVycyggczogc3RyaW5nLCBydWxlcjE6IHN0cmluZywgcnVsZXIyOnN0cmluZyk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHQ8cHJlIGNsYXNzPVwicnVsZXJzXCI+e3J1bGVyMX08YnIvPntydWxlcjJ9PC9wcmU+XHJcblx0XHRcdDxwcmUgY2xhc3M9XCJzdHJpbmdcIj57c308L3ByZT5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblBhdHRlcm5DaGFuZ2UgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnBhdHRlcm4gPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudHJpbSgpO1xyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIG9uVXJsQ2hhbmdlID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy51cmwgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudHJpbSgpO1xyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgdGhlIFVSTCBwYXR0ZXJuIGFuZCB0aGUgYWN0dWFsIFVSTCAoaWYgZXhpc3QpIGFuZCBpbnZva2VzIG1hdGNoaW5nLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGJ1aWxkcyBpbnRlcm5hbCBzdHJ1Y3R1cmVzLCB3aGljaCBhcmUgdGhlbiByZXByZXNlbnRlZCBpbiB0aGUgVUkuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGUoKVxyXG5cdHtcclxuXHRcdC8vIGNsZWFudXAgY3VycmVudCBkYXRhXHJcblx0XHR0aGlzLnBhdHRlcm5SdWxlcjEgPSBcIlwiO1xyXG5cdFx0dGhpcy5wYXR0ZXJuUnVsZXIyID0gXCJcIjtcclxuXHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMudXJsUnVsZXIxID0gXCJcIjtcclxuXHRcdHRoaXMudXJsUnVsZXIyID0gXCJcIjtcclxuXHRcdHRoaXMudXJsUGFyc2luZ0Vycm9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wYXJzZWRVcmwgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLm1hdGNoUmVzdWx0ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdHRlcm4gJiYgdGhpcy5wYXR0ZXJuLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSBydWxlciBzdHJpbmdzXHJcblx0XHRcdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy5wYXR0ZXJuLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGlBc1N0cmluZyA9IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRsZXQgciA9IGkgJSAxMDtcclxuXHRcdFx0XHR0aGlzLnBhdHRlcm5SdWxlcjEgKz0gciA9PT0gMCA/IGlBc1N0cmluZyA6IHIgPj0gaUFzU3RyaW5nLmxlbmd0aCA/IFwiIFwiIDogXCJcIjtcclxuXHRcdFx0XHR0aGlzLnBhdHRlcm5SdWxlcjIgKz0gci50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBwYXJzZSBVUkwgcGF0dGVyblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IG1pbXVybC5wYXJzZVVybFBhdHRlcm4oIHRoaXMucGF0dGVybik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBhcnNlIFVSTFxyXG5cdFx0aWYgKHRoaXMudXJsICYmIHRoaXMudXJsLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSBydWxlciBzdHJpbmdzXHJcblx0XHRcdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy51cmwubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgaUFzU3RyaW5nID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRcdGxldCByID0gaSAlIDEwO1xyXG5cdFx0XHRcdHRoaXMudXJsUnVsZXIxICs9IHIgPT09IDAgPyBpQXNTdHJpbmcgOiByID49IGlBc1N0cmluZy5sZW5ndGggPyBcIiBcIiA6IFwiXCI7XHJcblx0XHRcdFx0dGhpcy51cmxSdWxlcjIgKz0gci50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VkVXJsID0gbWltdXJsLnBhcnNlVVJMKCB0aGlzLnVybCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudXJsUGFyc2luZ0Vycm9yID0gZXJyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWF0Y2ggVVJMIGFnYWluc3QgcGF0dGVyblxyXG5cdFx0aWYgKHRoaXMucGFyc2VkUGF0dGVybiAmJiB0aGlzLnBhcnNlZFVybClcclxuXHRcdFx0dGhpcy5tYXRjaFJlc3VsdCA9IG1pbXVybC5tYXRjaCggdGhpcy5wYXJzZWRVcmwsIHRoaXMucGFyc2VkUGF0dGVybik7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IHtNYWluRm9ybX0gZnJvbSBcIi4vTWFpbkZvcm1cIjtcclxuXHJcblxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBib2R5Lm9ubG9hZFxyXG50aGlzLm1pbXVybERlbW9NYWluID0gZnVuY3Rpb24oIGFwcFJvb3Q6IEhUTUxFbGVtZW50KVxyXG57XHJcblx0bWltLm1vdW50KCBuZXcgTWFpbkZvcm0oKSwgYXBwUm9vdCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fOyJdLCJzb3VyY2VSb290IjoiIn0=