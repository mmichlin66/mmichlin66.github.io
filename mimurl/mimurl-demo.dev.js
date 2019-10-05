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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbkZvcm0uY3NzPzliOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbWJsXCIsXCJjb21tb25qczJcIjpcIm1pbWJsXCIsXCJjb21tb25qc1wiOlwibWltYmxcIixcImFtZFwiOlwibWltYmxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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QUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztDQUNGO0FBdGZELDRCQXNmQzs7Ozs7Ozs7Ozs7O0FDNWZELHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvRUFBNkI7QUFDN0Isd0RBQW9CO0FBQ3BCLCtFQUFvQztBQUlwQywyQ0FBMkM7QUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLE9BQW9CO0lBRW5ELEdBQUcsQ0FBQyxLQUFLLENBQUUsSUFBSSxtQkFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoibWltdXJsLWRlbW8uZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltYmxcIiwgXCJtaW11cmxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKSA6IGZhY3Rvcnkocm9vdFtcIm1pbWJsXCJdLCByb290W1wibWltdXJsXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW11cmxfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHN4XCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQgKiBhcyBtaW11cmwgZnJvbSBcIm1pbXVybFwiO1xyXG5pbXBvcnQgXCIuL01haW5Gb3JtLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbkZvcm0gZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwYXR0ZXJuOiBzdHJpbmc7XHJcblx0cGF0dGVyblJ1bGVyMTogc3RyaW5nO1xyXG5cdHBhdHRlcm5SdWxlcjI6IHN0cmluZ1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdHVybFJ1bGVyMTogc3RyaW5nO1xyXG5cdHVybFJ1bGVyMjogc3RyaW5nXHJcblx0cGF0dGVyblBhcnNpbmdFcnJvcjogRXJyb3I7XHJcblx0cGFyc2VkUGF0dGVybjogbWltdXJsLklQYXJzZWRVcmxQYXR0ZXJuO1xyXG5cdHVybFBhcnNpbmdFcnJvcjogRXJyb3I7XHJcblx0cGFyc2VkVXJsOiBtaW11cmwuSVBhcnNlZEFjdHVhbFVSTDtcclxuXHRtYXRjaFJlc3VsdDogbWltdXJsLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQ7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNYWluIHJlbmRlciBtZXRob2RcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMTJweFwifX0+XHJcblx0XHRcdDxoMj5VUkwgUGFyc2luZyBhbmQgTWF0Y2hpbmc8L2gyPlxyXG5cclxuXHRcdFx0PHA+VGhpcyBwYWdlIGRlbW9uc3RyYXRlcyB0aGUgY2FwYWJpbGl0aWVzIG9mIHRoZSA8Yj5taW11cmw8L2I+IGxpYnJhcnlcclxuXHRcdFx0Zm9yIFVSTCBwYXJzaW5nIGFuZCBtYXRjaGluZy4gRW50ZXIgVVJMIHBhdHRlcm4gYW5kIFVSTC4gUGFyc2luZyBhbmQgbWF0Y2hpbmcgcmVzdWx0cyB3aWxsXHJcblx0XHRcdGJlIGRpc3BsYXllZCBiZWxvdy48L3A+XHJcblxyXG5cdFx0XHR7dGhpcy5yZW5kZXJGb3JtKCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlck1hdGNoUmVzdWx0KCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlclVybFBhdHRlcm4oKX1cclxuXHRcdFx0e3RoaXMucmVuZGVyQWN0dWFsVXJsKCl9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5wdXQgZmllbGRzIGZybyBVUkwgcGF0dGVybiBhbmQgYWN0dWFsIFVSTFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyRm9ybSgpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwibGF5b3V0XCI+XHJcblx0XHRcdDxjb2xncm91cD5cclxuXHRcdFx0XHQ8Y29sIHN0eWxlPXt7dGV4dEFsaWduOlwicmlnaHRcIiwgdmVydGljYWxBbGlnbjpcImNlbnRlclwifX0vPlxyXG5cdFx0XHRcdDxjb2wgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIiwgd2lkdGg6IFwiMTAwJVwifX0vPlxyXG5cdFx0XHQ8L2NvbGdyb3VwPlxyXG5cdFx0XHQ8dHI+XHJcblx0XHRcdFx0PHRkPlBhdHRlcm46PC90ZD5cclxuXHRcdFx0XHQ8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGlucHV0PXt0aGlzLm9uUGF0dGVybkNoYW5nZX0gLz48L3RkPlxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0XHQ8dHI+XHJcblx0XHRcdFx0PHRkPlVSTDo8L3RkPlxyXG5cdFx0XHRcdDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gaW5wdXQ9e3RoaXMub25VcmxDaGFuZ2V9IC8+PC90ZD5cclxuXHRcdFx0PC90cj5cclxuXHRcdDwvdGFibGU+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBhcmVhIHdpdGggdGhlIG1hdGNoaW5nIHJlc3VsdHNcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlck1hdGNoUmVzdWx0KCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBjb250ZW50OiBhbnk7XHJcblx0XHRpZiAoIXRoaXMucGFyc2VkUGF0dGVybiB8fCAhdGhpcy5wYXJzZWRVcmwpXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8cCBjbGFzcz1cImRlc2NyXCI+V2hlbiB5b3UgdHlwZSBhIHZhbGlkIHBhdHRlcm4gYW5kIFVSTCwgdGhpcyBhcmVhIHdpbGwgc2hvdyB0aGUgbWF0Y2hpbmcgcmVzdWx0czwvcD47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICghdGhpcy5tYXRjaFJlc3VsdC5zdWNjZXNzKVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdEljb25cIiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e1wiXFx1MjYzOVwifTwvc3Bhbj5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJNYXRjaFJlc3VsdEVycm9ycyggdGhpcy5tYXRjaFJlc3VsdC5lcnJvcnMpfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD5cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJyZXN1bHRJY29uXCIgc3R5bGU9e3tjb2xvcjogXCJncmVlblwifX0+e1wiXFx1MjYzQVwifTwvc3Bhbj5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJNYXRjaFJlc3VsdEZpZWxkcyggdGhpcy5tYXRjaFJlc3VsdC5maWVsZHMpfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cImJsb2NrXCI+XHJcblx0XHRcdDxoMz5NYXRjaCBSZXN1bHQ8L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWF0Y2hBcmVhXCI+e2NvbnRlbnR9PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgZmllbGQgdmFsdWVzIG9idGFpbmVkIGR1cmluZyBtYXRjaGluZy5cclxuXHQgKiBAcGFyYW0gZmllbGRzIFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHRhYmxlIHJvd3MgLSBvbmUgcm93IHBlciBmaWVsZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlck1hdGNoUmVzdWx0RmllbGRzKCBmaWVsZHM6IG1pbXVybC5GaWVsZEJhZyk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBmaWVsZFJvd3M6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBmaWVsZE5hbWUgaW4gZmllbGRzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZmllbGRWYWx1ZSA9IGZpZWxkc1tmaWVsZE5hbWVdO1xyXG5cdFx0XHRsZXQgZmllbGRWYWx1ZUFzU3RyaW5nID0gZmllbGRWYWx1ZSA9PT0gdW5kZWZpbmVkXHJcblx0XHRcdFx0XHQ/IFwidW5kZWZpbmVkXCIgOiBmaWVsZFZhbHVlID09PSBudWxsXHJcblx0XHRcdFx0XHQ/IFwibnVsbFwiIDogaXNOYU4oZmllbGRWYWx1ZSBhcyBudW1iZXIpXHJcblx0XHRcdFx0XHQ/IFwiTmFOXCIgOiBKU09OLnN0cmluZ2lmeSggZmllbGRWYWx1ZSk7XHJcblx0XHRcdGZpZWxkUm93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPjxwcmU+e2ZpZWxkTmFtZX08L3ByZT48L3RkPlxyXG5cdFx0XHRcdDx0ZD48cHJlPnt0aGlzLnJlbmRlckZpZWxkVmFsdWUoZmllbGRzW2ZpZWxkTmFtZV0pfTwvcHJlPjwvdGQ+XHJcblx0XHRcdDwvdHI+KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZmllbGRSb3dzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiA8dGFibGUgY2xhc3M9XCJkYXRhXCI+XHJcblx0XHRcdFx0PHRyPjx0aD5GaWVsZDwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG5cdFx0XHRcdHtmaWVsZFJvd3N9XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiA8cD5ObyBmaWVsZHMgd2VyZSBleHRyYWN0ZWQgZnJvbSB0aGUgVVJMPC9wPlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBmaWVsZCB2YWx1ZShzKSBhY2NvcmRpbmcgdG8gaXRzIHR5cGUgYW5kIHdpdGggYXBwcm9wcmlhdGUgc3R5bGVzLlxyXG5cdCAqIEBwYXJhbSBmaWVsZFZhbHVlIFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyRmllbGRWYWx1ZSggZmllbGRWYWx1ZTogbWltdXJsLkZpZWxkVmFsdWVUeXBlKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKGZpZWxkVmFsdWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT51bmRlZmluZWQ8L3NwYW4+O1xyXG5cdFx0ZWxzZSBpZiAoZmllbGRWYWx1ZSA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT5udWxsPC9zcGFuPjtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBmaWVsZFZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImdyZWVuXCJ9fT57YFxcXCIke2ZpZWxkVmFsdWV9XFxcImB9PC9zcGFuPjtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBmaWVsZFZhbHVlID09PSBcIm51bWJlclwiKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoaXNOYU4oZmllbGRWYWx1ZSBhcyBudW1iZXIpKVxyXG5cdFx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+TmFOPC9zcGFuPjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwicmVkXCJ9fT57ZmllbGRWYWx1ZX08L3NwYW4+O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGZpZWxkVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19PntgJHtmaWVsZFZhbHVlfWB9PC9zcGFuPjtcclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIGZpZWxkVmFsdWUpKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+Wzwvc3Bhbj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmaWVsZFZhbHVlLm1hcCggKGl0ZW0sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0XHQ8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdHtpbmRleCA+IDAgJiYgPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT4sIDwvc3Bhbj59XHJcblx0XHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyRmllbGRWYWx1ZSggaXRlbSl9XHJcblx0XHRcdFx0XHRcdDwvbWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+XTwvc3Bhbj5cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIG9uZSBvciBtb3JlIGVycm9ycyByZWNlaXZlZCBkdXJpbmcgdGhlIG1hdGNoaW5nLlxyXG5cdCAqIEBwYXJhbSBlcnJvcnMgXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJNYXRjaFJlc3VsdEVycm9ycyggZXJyb3JzOiBzdHJpbmdbXSk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwibWF0Y2hSZXN1bHRFcnJvcnNcIj5cclxuXHRcdFx0e2Vycm9ycy5tYXAoIChlcnJvcjogc3RyaW5nKSA9PiA8c3Bhbj57ZXJyb3J9PC9zcGFuPil9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHRcclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBhcmVhIHdpdGggdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYXJzZWQgVVJMIHBhdHRlcm5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclVybFBhdHRlcm4oKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICghdGhpcy5wYXR0ZXJuIHx8IHRoaXMucGF0dGVybi5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8cCBjbGFzcz1cImRlc2NyXCI+V2hlbiB5b3UgdHlwZSBhIHBhdHRlcm4sIHRoaXMgYXJlYSB3aWxsIHNob3cgaG93IGl0IGlzIHBhcnNlZDwvcD47XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlclN0cmluZ1dpdGhSdWxlcnMoIHRoaXMucGF0dGVybiwgdGhpcy5wYXR0ZXJuUnVsZXIxLCB0aGlzLnBhdHRlcm5SdWxlcjIpfVxyXG5cdFx0XHRcdDxociBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sb3I6IFwiYnJvd25cIiwgYm9yZGVyV2lkdGg6IFwiMC41cHhcIn19Lz5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJQYXR0ZXJuUGFyc2luZ1Jlc3VsdCgpfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxyXG5cdFx0XHQ8aDM+VVJMIFBhdHRlcm48L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFyc2luZ0FyZWFcIj57Y29udGVudH08L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIFVSTCBwYXR0ZXJuIHBhcnNpbmcgcmVzdWx0OiBlaXRoZXIgdGhlIHN1Y2Nlc3NmbGx5IHBhcnNlZCBwYXR0ZXJuIG9yIHRoZVxyXG5cdCAqIHBhcnNpbmcgZXJyb3IuXHJcblx0ICovXHRcclxuXHRwcml2YXRlIHJlbmRlclBhdHRlcm5QYXJzaW5nUmVzdWx0KCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBpY29uQ29sb3IgPSB0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IgPyBcInJlZFwiIDogXCJncmVlblwiO1xyXG5cdFx0bGV0IGljb25Db2RlID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID8gXCJcXHUyNjM5XCIgOiBcIlxcdTI2M0FcIjtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3JcclxuXHRcdFx0PyA8c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIiwgcGFkZGluZ0xlZnQ6XCI4cHhcIn19Pnt0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IubWVzc2FnZX08L3NwYW4+XHJcblx0XHRcdDogdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuKCk7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJwYXJzaW5nUmVzdWx0XCI+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwicmVzdWx0SWNvblwiIHN0eWxlPXt7Y29sb3I6IGljb25Db2xvcn19PntpY29uQ29kZX08L3NwYW4+XHJcblx0XHRcdHtyZXN1bHR9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIHN1Y2Nlc3NmdWxseSBwYXJzZWQgVVJMIHBhdHRlcm4uXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRQYXR0ZXJuKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9XCJkYXRhXCI+XHJcblx0XHRcdDx0cj48dGg+UGFydDwvdGg+PHRoPlNlZ21lbnQ8L3RoPjx0aD5Mb2NhdGlvbjwvdGg+PHRoPlJlZ0V4cDwvdGg+PHRoPkZpZWxkczwvdGg+PC90cj5cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybi5wcm90b2NvbCAmJiB0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggXCJQcm90b2NvbFwiLCB0aGlzLnBhcnNlZFBhdHRlcm4ucHJvdG9jb2wuZ2V0U2VnbWVudHMoKSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4uaG9zdG5hbWUgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiSG9zdG5hbWVcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLmhvc3RuYW1lLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLnBvcnQgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiUG9ydFwiLCB0aGlzLnBhcnNlZFBhdHRlcm4ucG9ydC5nZXRTZWdtZW50cygpKX1cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybi5wYXRoICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIlBhdGhcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnBhdGguZ2V0U2VnbWVudHMoKSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucXVlcnkgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuUXVlcnkoIHRoaXMucGFyc2VkUGF0dGVybi5xdWVyeSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4uaGFzaCAmJiB0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggXCJIYXNoXCIsIHRoaXMucGFyc2VkUGF0dGVybi5oYXNoLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgb25lIG9yIG1vcmUgc2VnZW1lbnRzIGZyb20gdGhlIGdpdmVuIG5hbWVkIFVSTCBwYXJ0IG9mIHRoZSBVUkwgcGF0dGVyblxyXG5cdCAqIEBwYXJhbSB1cmxQYXJ0TmFtZSBcclxuXHQgKiBAcGFyYW0gc2VnbWVudHMgXHJcblx0ICogQHJldHVybnMgYXJyYXkgb2YgdGFibGUgcm93cyAtIG9uZSBwZXIgZWFjaCBzZWdtZW50LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCB1cmxQYXJ0TmFtZTogc3RyaW5nLCBzZWdtZW50czogbWltdXJsLklQYXJzZWRTZWdtZW50W10pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoIXNlZ21lbnRzIHx8IHNlZ21lbnRzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcnRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0bGV0IGZpcnN0U2VnbWVudCA9IHNlZ21lbnRzWzBdO1xyXG5cdFx0cGFydFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHQ8dGQgcm93c3Bhbj17c2VnbWVudHMubGVuZ3RofT57dXJsUGFydE5hbWV9PC90ZD5cclxuXHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBmaXJzdFNlZ21lbnQubG9jYXRpb24uc3RhcnQsIGZpcnN0U2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5nZXRMb2NhdGlvblN0cmluZyggZmlyc3RTZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHQ8dGQ+e2ZpcnN0U2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0PHRkPnt0aGlzLnJlbmRlclBhcnNlZFNlZ21lbnRGaWVsZHMoIGZpcnN0U2VnbWVudCl9PC90ZD5cclxuXHRcdDwvdHI+KTtcclxuXHJcblx0XHRmb3IoIGxldCBpID0gMTsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBzZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBzZWdtZW50LmxvY2F0aW9uLmxlbmd0aCl9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIHNlZ21lbnQubG9jYXRpb24pfTwvdGQ+XHJcblx0XHRcdFx0PHRkPntzZWdtZW50LnJlZ0V4cH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50KX08L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRSb3dzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBpbmZvcm1hdGlvbiBhYm91dCBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBwYXJzZWQgZnJvbSB0aGUgVVJMIHBhdHRlcm5cclxuXHQgKiBAcGFyYW0gcXVlcnkgXHJcblx0ICogQHJldHVybnMgYXJyYXkgb2Ygcm93cyAtIG9uZSBwZXIgcXVlcnkgc3RyaW5nICBwYXJhbWV0ZXJcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm5RdWVyeSggcXVlcnk6IG1pbXVybC5JUGFyc2VkUXVlcnlTdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoIXF1ZXJ5IHx8IE9iamVjdC5rZXlzKCBxdWVyeS5wYXJzZWRRU1BzKS5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJ0Um93czogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IHFzcE5hbWUgaW4gcXVlcnkucGFyc2VkUVNQcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBxdWVyeS5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQ7XHJcblx0XHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHQ8dGQ+e2BRdWVyeSBbJHtxc3BOYW1lfV1gfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBzZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBzZWdtZW50LmxvY2F0aW9uLmxlbmd0aCl9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIHNlZ21lbnQubG9jYXRpb24pfTwvdGQ+XHJcblx0XHRcdFx0PHRkPntzZWdtZW50LnJlZ0V4cH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50KX08L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRSb3dzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGxvY2F0aW9uIHdpdGhpbiB0aGUgcGFyc2VkIHN0cmluZy5cclxuXHQgKiBAcGFyYW0gbG9jYXRpb24gXHJcblx0ICogQHJldHVybnMgU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBsb2NhdGlvbiBpbiB0aGUgZm9ybWF0IFwic3RhcnQgLSBlbmQgKGxlbmd0aClcIlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZ2V0TG9jYXRpb25TdHJpbmcoIGxvY2F0aW9uOiBtaW11cmwuUGFyc2VkTG9jYXRpb24pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7bG9jYXRpb24uc3RhcnR9IC0gJHtsb2NhdGlvbi5zdGFydCArIGxvY2F0aW9uLmxlbmd0aCAtIDF9ICgke2xvY2F0aW9uLmxlbmd0aH0pYDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgZmllbGRzIGluIHRoZSBnaXZlbiBzZWdtZW50cy5cclxuXHQgKiBAcGFyYW0gc2VnbWVudCBcclxuXHQgKiBAcmV0dXJucyA8ZGl2PiBlbGVtZW50IHJlcHJlc2VudGluZyBhIHZlcnRpY2FsIGJveCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGVhY2ggZmllbGRcclxuXHQgKiBvbiBhIHNlcGFyYXRlIHJvdy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFNlZ21lbnRGaWVsZHMoIHNlZ21lbnQ6IG1pbXVybC5JUGFyc2VkU2VnbWVudCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBmaWVsZFNwYW5zOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgZmllbGQgb2Ygc2VnbWVudC5maWVsZHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBoYXNEZWZhdWx0VmFsdWUgPSBmYWxzZTtcclxuXHRcdFx0aWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LlN0cmluZyAmJiBmaWVsZC5kZWZhdWx0VmFsdWUgIT09IFwiXCIpXHJcblx0XHRcdFx0aGFzRGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAoZmllbGQuZm9ybWF0ID09PSBtaW11cmwuRmllbGRGb3JtYXQuSW50ZWdlciAmJiAhaXNOYU4oZmllbGQuZGVmYXVsdFZhbHVlIGFzIG51bWJlcikpXHJcblx0XHRcdFx0aGFzRGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAoZmllbGQuZm9ybWF0ID09PSBtaW11cmwuRmllbGRGb3JtYXQuRmxvYXQgJiYgIWlzTmFOKGZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIpKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkJvb2xlYW4gJiYgZmllbGQuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aGFzRGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZpZWxkU3BhbnMucHVzaCggPHNwYW4+XHJcblx0XHRcdFx0e2ZpZWxkLm5hbWV9XHJcblx0XHRcdFx0e2ZpZWxkLmlzT3B0aW9uYWwgJiYgXCI/XCJ9XHJcblx0XHRcdFx0e1wiOiBcIn1cclxuXHRcdFx0XHR7bWltdXJsLkZpZWxkRm9ybWF0W2ZpZWxkLmZvcm1hdF19XHJcblx0XHRcdFx0e2hhc0RlZmF1bHRWYWx1ZSAmJiBcIiA9IFwifVxyXG5cdFx0XHRcdHtoYXNEZWZhdWx0VmFsdWUgJiYgdGhpcy5yZW5kZXJGaWVsZFZhbHVlKCBmaWVsZC5kZWZhdWx0VmFsdWUpfVxyXG5cdFx0XHQ8L3NwYW4+KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz1cInBhcnNlZFNlZ21lbnRGaWVsZHNcIj5cclxuXHRcdFx0e2ZpZWxkU3BhbnN9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBhcmVhIHdpdGggdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYXJzZWQgYWN0dWFsIFVSTFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyQWN0dWFsVXJsKCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBjb250ZW50OiBhbnk7XHJcblx0XHRpZiAoIXRoaXMudXJsIHx8IHRoaXMudXJsLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxwIGNsYXNzPVwiZGVzY3JcIj5XaGVuIHlvdSB0eXBlIGEgVVJMLCB0aGlzIGFyZWEgd2lsbCBzaG93IGhvdyBpdCBpcyBwYXJzZWQ8L3A+O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCB0aGlzLnVybCwgdGhpcy51cmxSdWxlcjEsIHRoaXMudXJsUnVsZXIyKX1cclxuXHRcdFx0XHQ8aHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGJvcmRlckNvbG9yOiBcImJyb3duXCIsIGJvcmRlcldpZHRoOiBcIjAuNXB4XCJ9fS8+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyVXJsUGFyc2luZ1Jlc3VsdCgpfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxyXG5cdFx0XHQ8aDM+QWN0dWFsIFVSTDwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwYXJzaW5nQXJlYVwiPntjb250ZW50fTwvZGl2PlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgYWN0dWFsIFVSTCBwYXJzaW5nIHJlc3VsdDogZWl0aGVyIHRoZSBzdWNjZXNzZmxseSBwYXJzZWQgVVJMIG9yIHRoZSBwYXJzaW5nIGVycm9yLlxyXG5cdCAqL1x0XHJcblx0cHJpdmF0ZSByZW5kZXJVcmxQYXJzaW5nUmVzdWx0KCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBpY29uQ29sb3IgPSB0aGlzLnVybFBhcnNpbmdFcnJvciA/IFwicmVkXCIgOiBcImdyZWVuXCI7XHJcblx0XHRsZXQgaWNvbkNvZGUgPSB0aGlzLnVybFBhcnNpbmdFcnJvciA/IFwiXFx1MjYzOVwiIDogXCJcXHUyNjNBXCI7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy51cmxQYXJzaW5nRXJyb3JcclxuXHRcdFx0PyA8c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIiwgcGFkZGluZ0xlZnQ6XCI4cHhcIn19Pnt0aGlzLnVybFBhcnNpbmdFcnJvci5tZXNzYWdlfTwvc3Bhbj5cclxuXHRcdFx0OiB0aGlzLnJlbmRlclBhcnNlZFVybCgpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPVwicGFyc2luZ1Jlc3VsdFwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdEljb25cIiBzdHlsZT17e2NvbG9yOiBpY29uQ29sb3J9fT57aWNvbkNvZGV9PC9zcGFuPlxyXG5cdFx0XHR7cmVzdWx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBzdWNjZXNzZnVsbHkgcGFyc2VkIFVSTC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFVybCgpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPVwiZGF0YVwiPlxyXG5cdFx0XHQ8dHI+PHRoPlBhcnQ8L3RoPjx0aD5Db250ZW50PC90aD48L3RyPlxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucHJvdG9jb2wgJiYgPHRyPjx0ZD5Qcm90b2NvbDwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5wcm90b2NvbH08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwuaG9zdG5hbWUgJiYgPHRyPjx0ZD5Ib3N0bmFtZTwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5ob3N0bmFtZS5qb2luKFwiLlwiKX08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucG9ydCAmJiA8dHI+PHRkPlBvcnQ8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwucG9ydH08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucGF0aCAmJiA8dHI+PHRkPlBhdGg8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwucGF0aC5qb2luKFwiL1wiKX08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucXVlcnkgJiYgdGhpcy5yZW5kZXJQYXJzZWRBY3R1YWxRdWVyeSggdGhpcy5wYXJzZWRVcmwucXVlcnkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwuaGFzaCAmJiA8dHI+PHRkPkhhc2g8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwuaGFzaH08L3RkPjwvdHI+fVxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgcGFyc2VkIGZyb20gdGhlIFVSTFxyXG5cdCAqIEBwYXJhbSBxdWVyeSBcclxuXHQgKiBAcmV0dXJucyBhcnJheSBvZiByb3dzIC0gb25lIHBlciBxdWVyeSBzdHJpbmcgIHBhcmFtZXRlclxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkQWN0dWFsUXVlcnkoIHF1ZXJ5OiB7IFtQOiBzdHJpbmddOiBzdHJpbmdbXSB9KTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFxdWVyeSB8fCBPYmplY3Qua2V5cyggcXVlcnkpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcnRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgcXNwTmFtZSBpbiBxdWVyeSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHFzcFZhbHVlcyA9IHF1ZXJ5W3FzcE5hbWVdO1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPntgUXVlcnkgWyR7cXNwTmFtZX1dYH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57cXNwVmFsdWVzLm1hcCggKHFzcFZhbHVlKSA9PiA8ZGl2Pntxc3BWYWx1ZSA/IHFzcFZhbHVlIDogXCI8ZW1wdHk+XCJ9PC9kaXY+KX08L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRSb3dzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCBzOiBzdHJpbmcsIHJ1bGVyMTogc3RyaW5nLCBydWxlcjI6c3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXY+XHJcblx0XHRcdDxwcmUgY2xhc3M9XCJydWxlcnNcIj57cnVsZXIxfTxici8+e3J1bGVyMn08L3ByZT5cclxuXHRcdFx0PHByZSBjbGFzcz1cInN0cmluZ1wiPntzfTwvcHJlPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUGF0dGVybkNoYW5nZShlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGF0dGVybiA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZS50cmltKCk7XHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblVybENoYW5nZShlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudXJsID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnRyaW0oKTtcclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgdGhlIFVSTCBwYXR0ZXJuIGFuZCB0aGUgYWN0dWFsIFVSTCAoaWYgZXhpc3QpIGFuZCBpbnZva2VzIG1hdGNoaW5nLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGJ1aWxkcyBpbnRlcm5hbCBzdHJ1Y3R1cmVzLCB3aGljaCBhcmUgdGhlbiByZXByZXNlbnRlZCBpbiB0aGUgVUkuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGUoKVxyXG5cdHtcclxuXHRcdC8vIGNsZWFudXAgY3VycmVudCBkYXRhXHJcblx0XHR0aGlzLnBhdHRlcm5SdWxlcjEgPSBcIlwiO1xyXG5cdFx0dGhpcy5wYXR0ZXJuUnVsZXIyID0gXCJcIjtcclxuXHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMudXJsUnVsZXIxID0gXCJcIjtcclxuXHRcdHRoaXMudXJsUnVsZXIyID0gXCJcIjtcclxuXHRcdHRoaXMudXJsUGFyc2luZ0Vycm9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wYXJzZWRVcmwgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLm1hdGNoUmVzdWx0ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdHRlcm4gJiYgdGhpcy5wYXR0ZXJuLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSBydWxlciBzdHJpbmdzXHJcblx0XHRcdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy5wYXR0ZXJuLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGlBc1N0cmluZyA9IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRsZXQgciA9IGkgJSAxMDtcclxuXHRcdFx0XHR0aGlzLnBhdHRlcm5SdWxlcjEgKz0gciA9PT0gMCA/IGlBc1N0cmluZyA6IHIgPj0gaUFzU3RyaW5nLmxlbmd0aCA/IFwiIFwiIDogXCJcIjtcclxuXHRcdFx0XHR0aGlzLnBhdHRlcm5SdWxlcjIgKz0gci50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBwYXJzZSBVUkwgcGF0dGVyblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VkUGF0dGVybiA9IG1pbXVybC5wYXJzZVVybFBhdHRlcm4oIHRoaXMucGF0dGVybik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA9IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBhcnNlIFVSTFxyXG5cdFx0aWYgKHRoaXMudXJsICYmIHRoaXMudXJsLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSBydWxlciBzdHJpbmdzXHJcblx0XHRcdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy51cmwubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgaUFzU3RyaW5nID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRcdGxldCByID0gaSAlIDEwO1xyXG5cdFx0XHRcdHRoaXMudXJsUnVsZXIxICs9IHIgPT09IDAgPyBpQXNTdHJpbmcgOiByID49IGlBc1N0cmluZy5sZW5ndGggPyBcIiBcIiA6IFwiXCI7XHJcblx0XHRcdFx0dGhpcy51cmxSdWxlcjIgKz0gci50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VkVXJsID0gbWltdXJsLnBhcnNlVVJMKCB0aGlzLnVybCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudXJsUGFyc2luZ0Vycm9yID0gZXJyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWF0Y2ggVVJMIGFnYWluc3QgcGF0dGVyblxyXG5cdFx0aWYgKHRoaXMucGFyc2VkUGF0dGVybiAmJiB0aGlzLnBhcnNlZFVybClcclxuXHRcdFx0dGhpcy5tYXRjaFJlc3VsdCA9IG1pbXVybC5tYXRjaCggdGhpcy5wYXJzZWRVcmwsIHRoaXMucGFyc2VkUGF0dGVybik7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IHtNYWluRm9ybX0gZnJvbSBcIi4vTWFpbkZvcm1cIjtcclxuXHJcblxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBib2R5Lm9ubG9hZFxyXG50aGlzLm1pbXVybERlbW9NYWluID0gZnVuY3Rpb24oIGFwcFJvb3Q6IEhUTUxFbGVtZW50KVxyXG57XHJcblx0bWltLm1vdW50KCBuZXcgTWFpbkZvcm0oKSwgYXBwUm9vdCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fOyJdLCJzb3VyY2VSb290IjoiIn0=