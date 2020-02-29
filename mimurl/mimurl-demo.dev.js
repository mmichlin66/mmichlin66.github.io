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
    onPatternChange(e) {
        this.pattern = e.target.value.trim();
        this.update();
    }
    onUrlChange(e) {
        this.url = e.target.value.trim();
        this.update();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbkZvcm0uY3NzPzliOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbWJsXCIsXCJjb21tb25qczJcIjpcIm1pbWJsXCIsXCJjb21tb25qc1wiOlwibWltYmxcIixcImFtZFwiOlwibWltYmxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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SUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFBQSxDQUFDO0NBQ0Y7QUF0ZkQsNEJBc2ZDOzs7Ozs7Ozs7Ozs7QUM3ZkQsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLG9FQUE2QjtBQUM3Qix3REFBb0I7QUFDcEIsK0VBQW9DO0FBSXBDLDJDQUEyQztBQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsT0FBb0I7SUFFbkQsR0FBRyxDQUFDLEtBQUssQ0FBRSxJQUFJLG1CQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNWRCxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJtaW11cmwtZGVtby5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW1ibFwiLCBcIm1pbXVybFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpIDogZmFjdG9yeShyb290W1wibWltYmxcIl0sIHJvb3RbXCJtaW11cmxcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c3hcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCI7XHJcbmltcG9ydCB7Q29sb3JfU3R5bGVUeXBlfSBmcm9tIFwibWltY3NzXCI7XHJcbmltcG9ydCBcIi4vTWFpbkZvcm0uY3NzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluRm9ybSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHBhdHRlcm46IHN0cmluZztcclxuXHRwYXR0ZXJuUnVsZXIxOiBzdHJpbmc7XHJcblx0cGF0dGVyblJ1bGVyMjogc3RyaW5nXHJcblx0dXJsOiBzdHJpbmc7XHJcblx0dXJsUnVsZXIxOiBzdHJpbmc7XHJcblx0dXJsUnVsZXIyOiBzdHJpbmdcclxuXHRwYXR0ZXJuUGFyc2luZ0Vycm9yOiBFcnJvcjtcclxuXHRwYXJzZWRQYXR0ZXJuOiBtaW11cmwuSVBhcnNlZFVybFBhdHRlcm47XHJcblx0dXJsUGFyc2luZ0Vycm9yOiBFcnJvcjtcclxuXHRwYXJzZWRVcmw6IG1pbXVybC5JUGFyc2VkQWN0dWFsVVJMO1xyXG5cdG1hdGNoUmVzdWx0OiBtaW11cmwuSVVybFBhdHRlcm5NYXRjaFJlc3VsdDtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE1haW4gcmVuZGVyIG1ldGhvZFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3ttYXJnaW46XCIxMnB4XCJ9fT5cclxuXHRcdFx0PGgyPlVSTCBQYXJzaW5nIGFuZCBNYXRjaGluZzwvaDI+XHJcblxyXG5cdFx0XHQ8cD5UaGlzIHBhZ2UgZGVtb25zdHJhdGVzIHRoZSBjYXBhYmlsaXRpZXMgb2YgdGhlIDxiPm1pbXVybDwvYj4gbGlicmFyeVxyXG5cdFx0XHRmb3IgVVJMIHBhcnNpbmcgYW5kIG1hdGNoaW5nLiBFbnRlciBVUkwgcGF0dGVybiBhbmQgVVJMLiBQYXJzaW5nIGFuZCBtYXRjaGluZyByZXN1bHRzIHdpbGxcclxuXHRcdFx0YmUgZGlzcGxheWVkIGJlbG93LjwvcD5cclxuXHJcblx0XHRcdHt0aGlzLnJlbmRlckZvcm0oKX1cclxuXHRcdFx0e3RoaXMucmVuZGVyTWF0Y2hSZXN1bHQoKX1cclxuXHRcdFx0e3RoaXMucmVuZGVyVXJsUGF0dGVybigpfVxyXG5cdFx0XHR7dGhpcy5yZW5kZXJBY3R1YWxVcmwoKX1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBpbnB1dCBmaWVsZHMgZnJvIFVSTCBwYXR0ZXJuIGFuZCBhY3R1YWwgVVJMXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJGb3JtKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9XCJsYXlvdXRcIj5cclxuXHRcdFx0PGNvbGdyb3VwPlxyXG5cdFx0XHRcdDxjb2wgc3R5bGU9e3t0ZXh0QWxpZ246XCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOlwiY2VudGVyXCJ9fS8+XHJcblx0XHRcdFx0PGNvbCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIiwgdmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLCB3aWR0aDogXCIxMDAlXCJ9fS8+XHJcblx0XHRcdDwvY29sZ3JvdXA+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHQ8dGQ+UGF0dGVybjo8L3RkPlxyXG5cdFx0XHRcdDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gaW5wdXQ9e3RoaXMub25QYXR0ZXJuQ2hhbmdlfSAvPjwvdGQ+XHJcblx0XHRcdDwvdHI+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHQ8dGQ+VVJMOjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBpbnB1dD17dGhpcy5vblVybENoYW5nZX0gLz48L3RkPlxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFyZWEgd2l0aCB0aGUgbWF0Y2hpbmcgcmVzdWx0c1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHQoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICghdGhpcy5wYXJzZWRQYXR0ZXJuIHx8ICF0aGlzLnBhcnNlZFVybClcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxwIGNsYXNzPVwiZGVzY3JcIj5XaGVuIHlvdSB0eXBlIGEgdmFsaWQgcGF0dGVybiBhbmQgVVJMLCB0aGlzIGFyZWEgd2lsbCBzaG93IHRoZSBtYXRjaGluZyByZXN1bHRzPC9wPjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCF0aGlzLm1hdGNoUmVzdWx0LnN1Y2Nlc3MpXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwicmVzdWx0SWNvblwiIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57XCJcXHUyNjM5XCJ9PC9zcGFuPlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlck1hdGNoUmVzdWx0RXJyb3JzKCB0aGlzLm1hdGNoUmVzdWx0LmVycm9ycyl9XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PlxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdEljb25cIiBzdHlsZT17e2NvbG9yOiBcImdyZWVuXCJ9fT57XCJcXHUyNjNBXCJ9PC9zcGFuPlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlck1hdGNoUmVzdWx0RmllbGRzKCB0aGlzLm1hdGNoUmVzdWx0LmZpZWxkcyl9XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PlxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cclxuXHRcdFx0PGgzPk1hdGNoIFJlc3VsdDwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtYXRjaEFyZWFcIj57Y29udGVudH08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBpbmZvcm1hdGlvbiBhYm91dCBmaWVsZCB2YWx1ZXMgb2J0YWluZWQgZHVyaW5nIG1hdGNoaW5nLlxyXG5cdCAqIEBwYXJhbSBmaWVsZHMgXHJcblx0ICogQHJldHVybnMgYXJyYXkgb2YgdGFibGUgcm93cyAtIG9uZSByb3cgcGVyIGZpZWxkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHRGaWVsZHMoIGZpZWxkczogbWltdXJsLkZpZWxkQmFnKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGZpZWxkUm93czogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IGZpZWxkTmFtZSBpbiBmaWVsZHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBmaWVsZFZhbHVlID0gZmllbGRzW2ZpZWxkTmFtZV07XHJcblx0XHRcdGxldCBmaWVsZFZhbHVlQXNTdHJpbmcgPSBmaWVsZFZhbHVlID09PSB1bmRlZmluZWRcclxuXHRcdFx0XHRcdD8gXCJ1bmRlZmluZWRcIiA6IGZpZWxkVmFsdWUgPT09IG51bGxcclxuXHRcdFx0XHRcdD8gXCJudWxsXCIgOiBpc05hTihmaWVsZFZhbHVlIGFzIG51bWJlcilcclxuXHRcdFx0XHRcdD8gXCJOYU5cIiA6IEpTT04uc3RyaW5naWZ5KCBmaWVsZFZhbHVlKTtcclxuXHRcdFx0ZmllbGRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHQ8dGQ+PHByZT57ZmllbGROYW1lfTwvcHJlPjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxwcmU+e3RoaXMucmVuZGVyRmllbGRWYWx1ZShmaWVsZHNbZmllbGROYW1lXSl9PC9wcmU+PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChmaWVsZFJvd3MubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDx0YWJsZSBjbGFzcz1cImRhdGFcIj5cclxuXHRcdFx0XHQ8dHI+PHRoPkZpZWxkPC90aD48dGg+VmFsdWU8L3RoPjwvdHI+XHJcblx0XHRcdFx0e2ZpZWxkUm93c31cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIDxwPk5vIGZpZWxkcyB3ZXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBVUkw8L3A+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGZpZWxkIHZhbHVlKHMpIGFjY29yZGluZyB0byBpdHMgdHlwZSBhbmQgd2l0aCBhcHByb3ByaWF0ZSBzdHlsZXMuXHJcblx0ICogQHBhcmFtIGZpZWxkVmFsdWUgXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJGaWVsZFZhbHVlKCBmaWVsZFZhbHVlOiBtaW11cmwuRmllbGRWYWx1ZVR5cGUpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoZmllbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19PnVuZGVmaW5lZDwvc3Bhbj47XHJcblx0XHRlbHNlIGlmIChmaWVsZFZhbHVlID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pm51bGw8L3NwYW4+O1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGZpZWxkVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIn19PntgXFxcIiR7ZmllbGRWYWx1ZX1cXFwiYH08L3NwYW4+O1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGZpZWxkVmFsdWUgPT09IFwibnVtYmVyXCIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChpc05hTihmaWVsZFZhbHVlIGFzIG51bWJlcikpXHJcblx0XHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT5OYU48L3NwYW4+O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJyZWRcIn19PntmaWVsZFZhbHVlfTwvc3Bhbj47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+e2Ake2ZpZWxkVmFsdWV9YH08L3NwYW4+O1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggZmllbGRWYWx1ZSkpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT5bPC9zcGFuPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZpZWxkVmFsdWUubWFwKCAoaXRlbSwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0e2luZGV4ID4gMCAmJiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PiwgPC9zcGFuPn1cclxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJGaWVsZFZhbHVlKCBpdGVtKX1cclxuXHRcdFx0XHRcdFx0PC9taW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT5dPC9zcGFuPlxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgb25lIG9yIG1vcmUgZXJyb3JzIHJlY2VpdmVkIGR1cmluZyB0aGUgbWF0Y2hpbmcuXHJcblx0ICogQHBhcmFtIGVycm9ycyBcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlck1hdGNoUmVzdWx0RXJyb3JzKCBlcnJvcnM6IHN0cmluZ1tdKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJtYXRjaFJlc3VsdEVycm9yc1wiPlxyXG5cdFx0XHR7ZXJyb3JzLm1hcCggKGVycm9yOiBzdHJpbmcpID0+IDxzcGFuPntlcnJvcn08L3NwYW4+KX1cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFyZWEgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhcnNlZCBVUkwgcGF0dGVyblxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyVXJsUGF0dGVybigpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55O1xyXG5cdFx0aWYgKCF0aGlzLnBhdHRlcm4gfHwgdGhpcy5wYXR0ZXJuLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxwIGNsYXNzPVwiZGVzY3JcIj5XaGVuIHlvdSB0eXBlIGEgcGF0dGVybiwgdGhpcyBhcmVhIHdpbGwgc2hvdyBob3cgaXQgaXMgcGFyc2VkPC9wPjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyU3RyaW5nV2l0aFJ1bGVycyggdGhpcy5wYXR0ZXJuLCB0aGlzLnBhdHRlcm5SdWxlcjEsIHRoaXMucGF0dGVyblJ1bGVyMil9XHJcblx0XHRcdFx0PGhyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBib3JkZXJDb2xvcjogXCJicm93blwiLCBib3JkZXJXaWR0aDogXCIwLjVweFwifX0vPlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlclBhdHRlcm5QYXJzaW5nUmVzdWx0KCl9XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cImJsb2NrXCI+XHJcblx0XHRcdDxoMz5VUkwgUGF0dGVybjwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwYXJzaW5nQXJlYVwiPntjb250ZW50fTwvZGl2PlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgVVJMIHBhdHRlcm4gcGFyc2luZyByZXN1bHQ6IGVpdGhlciB0aGUgc3VjY2Vzc2ZsbHkgcGFyc2VkIHBhdHRlcm4gb3IgdGhlXHJcblx0ICogcGFyc2luZyBlcnJvci5cclxuXHQgKi9cdFxyXG5cdHByaXZhdGUgcmVuZGVyUGF0dGVyblBhcnNpbmdSZXN1bHQoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGljb25Db2xvcjogQ29sb3JfU3R5bGVUeXBlID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID8gXCJyZWRcIiA6IFwiZ3JlZW5cIjtcclxuXHRcdGxldCBpY29uQ29kZSA9IHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA/IFwiXFx1MjYzOVwiIDogXCJcXHUyNjNBXCI7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yXHJcblx0XHRcdD8gPHNwYW4gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsIHBhZGRpbmdMZWZ0OlwiOHB4XCJ9fT57dGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yLm1lc3NhZ2V9PC9zcGFuPlxyXG5cdFx0XHQ6IHRoaXMucmVuZGVyUGFyc2VkUGF0dGVybigpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwicGFyc2luZ1Jlc3VsdFwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdEljb25cIiBzdHlsZT17e2NvbG9yOiBpY29uQ29sb3J9fT57aWNvbkNvZGV9PC9zcGFuPlxyXG5cdFx0XHR7cmVzdWx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBzdWNjZXNzZnVsbHkgcGFyc2VkIFVSTCBwYXR0ZXJuLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkUGF0dGVybigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwiZGF0YVwiPlxyXG5cdFx0XHQ8dHI+PHRoPlBhcnQ8L3RoPjx0aD5TZWdtZW50PC90aD48dGg+TG9jYXRpb248L3RoPjx0aD5SZWdFeHA8L3RoPjx0aD5GaWVsZHM8L3RoPjwvdHI+XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucHJvdG9jb2wgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiUHJvdG9jb2xcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnByb3RvY29sLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLmhvc3RuYW1lICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIkhvc3RuYW1lXCIsIHRoaXMucGFyc2VkUGF0dGVybi5ob3N0bmFtZS5nZXRTZWdtZW50cygpKX1cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybi5wb3J0ICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIlBvcnRcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnBvcnQuZ2V0U2VnbWVudHMoKSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucGF0aCAmJiB0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggXCJQYXRoXCIsIHRoaXMucGFyc2VkUGF0dGVybi5wYXRoLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLnF1ZXJ5ICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblF1ZXJ5KCB0aGlzLnBhcnNlZFBhdHRlcm4ucXVlcnkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLmhhc2ggJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiSGFzaFwiLCB0aGlzLnBhcnNlZFBhdHRlcm4uaGFzaC5nZXRTZWdtZW50cygpKX1cclxuXHRcdDwvdGFibGU+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IG9uZSBvciBtb3JlIHNlZ2VtZW50cyBmcm9tIHRoZSBnaXZlbiBuYW1lZCBVUkwgcGFydCBvZiB0aGUgVVJMIHBhdHRlcm5cclxuXHQgKiBAcGFyYW0gdXJsUGFydE5hbWUgXHJcblx0ICogQHBhcmFtIHNlZ21lbnRzIFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHRhYmxlIHJvd3MgLSBvbmUgcGVyIGVhY2ggc2VnbWVudC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggdXJsUGFydE5hbWU6IHN0cmluZywgc2VnbWVudHM6IG1pbXVybC5JUGFyc2VkU2VnbWVudFtdKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFzZWdtZW50cyB8fCBzZWdtZW50cy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJ0Um93czogYW55W10gPSBbXTtcclxuXHRcdGxldCBmaXJzdFNlZ21lbnQgPSBzZWdtZW50c1swXTtcclxuXHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0PHRkIHJvd3NwYW49e3NlZ21lbnRzLmxlbmd0aH0+e3VybFBhcnROYW1lfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggZmlyc3RTZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBmaXJzdFNlZ21lbnQubG9jYXRpb24ubGVuZ3RoKX08L3RkPlxyXG5cdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIGZpcnN0U2VnbWVudC5sb2NhdGlvbil9PC90ZD5cclxuXHRcdFx0PHRkPntmaXJzdFNlZ21lbnQucmVnRXhwfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBmaXJzdFNlZ21lbnQpfTwvdGQ+XHJcblx0XHQ8L3RyPik7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcclxuXHRcdFx0cGFydFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggc2VnbWVudC5sb2NhdGlvbi5zdGFydCwgc2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdDx0ZD57c2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMucmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudCl9PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJ0Um93cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgcGFyc2VkIGZyb20gdGhlIFVSTCBwYXR0ZXJuXHJcblx0ICogQHBhcmFtIHF1ZXJ5IFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHJvd3MgLSBvbmUgcGVyIHF1ZXJ5IHN0cmluZyAgcGFyYW1ldGVyXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRQYXR0ZXJuUXVlcnkoIHF1ZXJ5OiBtaW11cmwuSVBhcnNlZFF1ZXJ5U3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFxdWVyeSB8fCBPYmplY3Qua2V5cyggcXVlcnkucGFyc2VkUVNQcykubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgcGFydFJvd3M6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBxc3BOYW1lIGluIHF1ZXJ5LnBhcnNlZFFTUHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWdtZW50ID0gcXVlcnkucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50O1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPntgUXVlcnkgWyR7cXNwTmFtZX1dYH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggc2VnbWVudC5sb2NhdGlvbi5zdGFydCwgc2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdDx0ZD57c2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMucmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudCl9PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJ0Um93cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBsb2NhdGlvbiB3aXRoaW4gdGhlIHBhcnNlZCBzdHJpbmcuXHJcblx0ICogQHBhcmFtIGxvY2F0aW9uIFxyXG5cdCAqIEByZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gbG9jYXRpb24gaW4gdGhlIGZvcm1hdCBcInN0YXJ0IC0gZW5kIChsZW5ndGgpXCJcclxuXHQgKi9cclxuXHRwcml2YXRlIGdldExvY2F0aW9uU3RyaW5nKCBsb2NhdGlvbjogbWltdXJsLlBhcnNlZExvY2F0aW9uKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke2xvY2F0aW9uLnN0YXJ0fSAtICR7bG9jYXRpb24uc3RhcnQgKyBsb2NhdGlvbi5sZW5ndGggLSAxfSAoJHtsb2NhdGlvbi5sZW5ndGh9KWA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IGZpZWxkcyBpbiB0aGUgZ2l2ZW4gc2VnbWVudHMuXHJcblx0ICogQHBhcmFtIHNlZ21lbnQgXHJcblx0ICogQHJldHVybnMgPGRpdj4gZWxlbWVudCByZXByZXNlbnRpbmcgYSB2ZXJ0aWNhbCBib3ggd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIGZpZWxkXHJcblx0ICogb24gYSBzZXBhcmF0ZSByb3cuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50OiBtaW11cmwuSVBhcnNlZFNlZ21lbnQpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZmllbGRTcGFuczogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IGZpZWxkIG9mIHNlZ21lbnQuZmllbGRzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaGFzRGVmYXVsdFZhbHVlID0gZmFsc2U7XHJcblx0XHRcdGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5TdHJpbmcgJiYgZmllbGQuZGVmYXVsdFZhbHVlICE9PSBcIlwiKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkludGVnZXIgJiYgIWlzTmFOKGZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIpKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkZsb2F0ICYmICFpc05hTihmaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyKSlcclxuXHRcdFx0XHRoYXNEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5Cb29sZWFuICYmIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRmaWVsZFNwYW5zLnB1c2goIDxzcGFuPlxyXG5cdFx0XHRcdHtmaWVsZC5uYW1lfVxyXG5cdFx0XHRcdHtmaWVsZC5pc09wdGlvbmFsICYmIFwiP1wifVxyXG5cdFx0XHRcdHtcIjogXCJ9XHJcblx0XHRcdFx0e21pbXVybC5GaWVsZEZvcm1hdFtmaWVsZC5mb3JtYXRdfVxyXG5cdFx0XHRcdHtoYXNEZWZhdWx0VmFsdWUgJiYgXCIgPSBcIn1cclxuXHRcdFx0XHR7aGFzRGVmYXVsdFZhbHVlICYmIHRoaXMucmVuZGVyRmllbGRWYWx1ZSggZmllbGQuZGVmYXVsdFZhbHVlKX1cclxuXHRcdFx0PC9zcGFuPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJwYXJzZWRTZWdtZW50RmllbGRzXCI+XHJcblx0XHRcdHtmaWVsZFNwYW5zfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgYXJlYSB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFyc2VkIGFjdHVhbCBVUkxcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlckFjdHVhbFVybCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55O1xyXG5cdFx0aWYgKCF0aGlzLnVybCB8fCB0aGlzLnVybC5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8cCBjbGFzcz1cImRlc2NyXCI+V2hlbiB5b3UgdHlwZSBhIFVSTCwgdGhpcyBhcmVhIHdpbGwgc2hvdyBob3cgaXQgaXMgcGFyc2VkPC9wPjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyU3RyaW5nV2l0aFJ1bGVycyggdGhpcy51cmwsIHRoaXMudXJsUnVsZXIxLCB0aGlzLnVybFJ1bGVyMil9XHJcblx0XHRcdFx0PGhyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBib3JkZXJDb2xvcjogXCJicm93blwiLCBib3JkZXJXaWR0aDogXCIwLjVweFwifX0vPlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlclVybFBhcnNpbmdSZXN1bHQoKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cclxuXHRcdFx0PGgzPkFjdHVhbCBVUkw8L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFyc2luZ0FyZWFcIj57Y29udGVudH08L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFjdHVhbCBVUkwgcGFyc2luZyByZXN1bHQ6IGVpdGhlciB0aGUgc3VjY2Vzc2ZsbHkgcGFyc2VkIFVSTCBvciB0aGUgcGFyc2luZyBlcnJvci5cclxuXHQgKi9cdFxyXG5cdHByaXZhdGUgcmVuZGVyVXJsUGFyc2luZ1Jlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgaWNvbkNvbG9yOiBDb2xvcl9TdHlsZVR5cGUgPSB0aGlzLnVybFBhcnNpbmdFcnJvciA/IFwicmVkXCIgOiBcImdyZWVuXCI7XHJcblx0XHRsZXQgaWNvbkNvZGUgPSB0aGlzLnVybFBhcnNpbmdFcnJvciA/IFwiXFx1MjYzOVwiIDogXCJcXHUyNjNBXCI7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy51cmxQYXJzaW5nRXJyb3JcclxuXHRcdFx0PyA8c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIiwgcGFkZGluZ0xlZnQ6XCI4cHhcIn19Pnt0aGlzLnVybFBhcnNpbmdFcnJvci5tZXNzYWdlfTwvc3Bhbj5cclxuXHRcdFx0OiB0aGlzLnJlbmRlclBhcnNlZFVybCgpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwicGFyc2luZ1Jlc3VsdFwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdEljb25cIiBzdHlsZT17e2NvbG9yOiBpY29uQ29sb3J9fT57aWNvbkNvZGV9PC9zcGFuPlxyXG5cdFx0XHR7cmVzdWx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBzdWNjZXNzZnVsbHkgcGFyc2VkIFVSTC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFVybCgpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwiZGF0YVwiPlxyXG5cdFx0XHQ8dHI+PHRoPlBhcnQ8L3RoPjx0aD5Db250ZW50PC90aD48L3RyPlxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucHJvdG9jb2wgJiYgPHRyPjx0ZD5Qcm90b2NvbDwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5wcm90b2NvbH08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwuaG9zdG5hbWUgJiYgPHRyPjx0ZD5Ib3N0bmFtZTwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5ob3N0bmFtZS5qb2luKFwiLlwiKX08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucG9ydCAmJiA8dHI+PHRkPlBvcnQ8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwucG9ydH08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucGF0aCAmJiA8dHI+PHRkPlBhdGg8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwucGF0aC5qb2luKFwiL1wiKX08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucXVlcnkgJiYgdGhpcy5yZW5kZXJQYXJzZWRBY3R1YWxRdWVyeSggdGhpcy5wYXJzZWRVcmwucXVlcnkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwuaGFzaCAmJiA8dHI+PHRkPkhhc2g8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwuaGFzaH08L3RkPjwvdHI+fVxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgcGFyc2VkIGZyb20gdGhlIFVSTFxyXG5cdCAqIEBwYXJhbSBxdWVyeSBcclxuXHQgKiBAcmV0dXJucyBhcnJheSBvZiByb3dzIC0gb25lIHBlciBxdWVyeSBzdHJpbmcgIHBhcmFtZXRlclxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkQWN0dWFsUXVlcnkoIHF1ZXJ5OiB7IFtQOiBzdHJpbmddOiBzdHJpbmdbXSB9KTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFxdWVyeSB8fCBPYmplY3Qua2V5cyggcXVlcnkpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcnRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgcXNwTmFtZSBpbiBxdWVyeSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHFzcFZhbHVlcyA9IHF1ZXJ5W3FzcE5hbWVdO1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPntgUXVlcnkgWyR7cXNwTmFtZX1dYH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57cXNwVmFsdWVzLm1hcCggKHFzcFZhbHVlKSA9PiA8ZGl2Pntxc3BWYWx1ZSA/IHFzcFZhbHVlIDogXCI8ZW1wdHk+XCJ9PC9kaXY+KX08L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRSb3dzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCBzOiBzdHJpbmcsIHJ1bGVyMTogc3RyaW5nLCBydWxlcjI6c3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXY+XHJcblx0XHRcdDxwcmUgY2xhc3M9XCJydWxlcnNcIj57cnVsZXIxfTxici8+e3J1bGVyMn08L3ByZT5cclxuXHRcdFx0PHByZSBjbGFzcz1cInN0cmluZ1wiPntzfTwvcHJlPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUGF0dGVybkNoYW5nZShlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGF0dGVybiA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZS50cmltKCk7XHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblVybENoYW5nZShlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudXJsID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnRyaW0oKTtcclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgdGhlIFVSTCBwYXR0ZXJuIGFuZCB0aGUgYWN0dWFsIFVSTCAoaWYgZXhpc3QpIGFuZCBpbnZva2VzIG1hdGNoaW5nLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGJ1aWxkcyBpbnRlcm5hbCBzdHJ1Y3R1cmVzLCB3aGljaCBhcmUgdGhlbiByZXByZXNlbnRlZCBpbiB0aGUgVUkuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGUoKVxyXG5cdHtcclxuXHRcdC8vIGNsZWFudXAgY3VycmVudCBkYXRhXHJcblx0XHR0aGlzLnBhdHRlcm5SdWxlcjEgPSBcIlwiO1xyXG5cdFx0dGhpcy5wYXR0ZXJuUnVsZXIyID0gXCJcIjtcclxuXHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMudXJsUnVsZXIxID0gXCJcIjtcclxuXHRcdHRoaXMudXJsUnVsZXIyID0gXCJcIjtcclxuXHRcdHRoaXMudXJsUGFyc2luZ0Vycm9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wYXJzZWRVcmwgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLm1hdGNoUmVzdWx0ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdHRlcm4gJiYgdGhpcy5wYXR0ZXJuLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSBydWxlciBzdHJpbmdzXHJcblx0XHRcdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy5wYXR0ZXJuLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGlBc1N0cmluZyA9IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRsZXQgciA9IGkgJSAxMDtcclxuXHRcdFx0XHR0aGlzLnBhdHRlcm5SdWxlcjEgKz0gciA9PT0gMCA/IGlBc1N0cmluZyA6IHIgPj0gaUFzU3RyaW5nLmxlbmd0aCA/IFwiIFwiIDogXCJcIjtcclxuXHRcdFx0XHR0aGlzLnBhdHRlcm5SdWxlcjIgKz0gci50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBwYXJzZSBVUkwgcGF0dGVyblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IG1pbXVybC5wYXJzZVVybFBhdHRlcm4oIHRoaXMucGF0dGVybik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBhcnNlIFVSTFxyXG5cdFx0aWYgKHRoaXMudXJsICYmIHRoaXMudXJsLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSBydWxlciBzdHJpbmdzXHJcblx0XHRcdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy51cmwubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgaUFzU3RyaW5nID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRcdGxldCByID0gaSAlIDEwO1xyXG5cdFx0XHRcdHRoaXMudXJsUnVsZXIxICs9IHIgPT09IDAgPyBpQXNTdHJpbmcgOiByID49IGlBc1N0cmluZy5sZW5ndGggPyBcIiBcIiA6IFwiXCI7XHJcblx0XHRcdFx0dGhpcy51cmxSdWxlcjIgKz0gci50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VkVXJsID0gbWltdXJsLnBhcnNlVVJMKCB0aGlzLnVybCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudXJsUGFyc2luZ0Vycm9yID0gZXJyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWF0Y2ggVVJMIGFnYWluc3QgcGF0dGVyblxyXG5cdFx0aWYgKHRoaXMucGFyc2VkUGF0dGVybiAmJiB0aGlzLnBhcnNlZFVybClcclxuXHRcdFx0dGhpcy5tYXRjaFJlc3VsdCA9IG1pbXVybC5tYXRjaCggdGhpcy5wYXJzZWRVcmwsIHRoaXMucGFyc2VkUGF0dGVybik7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IHtNYWluRm9ybX0gZnJvbSBcIi4vTWFpbkZvcm1cIjtcclxuXHJcblxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBib2R5Lm9ubG9hZFxyXG50aGlzLm1pbXVybERlbW9NYWluID0gZnVuY3Rpb24oIGFwcFJvb3Q6IEhUTUxFbGVtZW50KVxyXG57XHJcblx0bWltLm1vdW50KCBuZXcgTWFpbkZvcm0oKSwgYXBwUm9vdCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fOyJdLCJzb3VyY2VSb290IjoiIn0=