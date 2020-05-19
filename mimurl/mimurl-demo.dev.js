(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mimbl"), require("mimcss"), require("mimurl"));
	else if(typeof define === 'function' && define.amd)
		define(["mimbl", "mimcss", "mimurl"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mimbl"), require("mimcss"), require("mimurl")) : factory(root["mimbl"], root["mimcss"], root["mimurl"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_mimbl__, __WEBPACK_EXTERNAL_MODULE_mimcss__, __WEBPACK_EXTERNAL_MODULE_mimurl__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/MainForm.js":
/*!*************************!*\
  !*** ./lib/MainForm.js ***!
  \*************************/
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
const styles_1 = __webpack_require__(/*! ./styles */ "./lib/styles.js");
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
        return mim.jsx("table", { class: styles_1.styles.layout.name },
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
            content = mim.jsx("p", { class: styles_1.styles.descr.name }, "When you type a valid pattern and URL, this area will show the matching results");
        }
        else if (!this.matchResult.success) {
            content = mim.jsx(mim.Fragment, null,
                mim.jsx("span", { class: styles_1.styles.resultIcon.name, style: { color: "red" } }, "\u2639"),
                this.renderMatchResultErrors(this.matchResult.errors));
        }
        else {
            content = mim.jsx(mim.Fragment, null,
                mim.jsx("span", { class: styles_1.styles.resultIcon.name, style: { color: "green" } }, "\u263A"),
                this.renderMatchResultFields(this.matchResult.fields));
        }
        return mim.jsx("div", { class: styles_1.styles.block.name },
            mim.jsx("h3", null, "Match Result"),
            mim.jsx("div", { class: styles_1.styles.matchArea.name }, content));
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
            return mim.jsx("table", { class: styles_1.styles.data.name },
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
        return mim.jsx("div", { class: styles_1.styles.matchResultErrors.name }, errors.map((error) => mim.jsx("span", null, error)));
    }
    /**
     * Renders the area with the information about the parsed URL pattern
     */
    renderUrlPattern() {
        let content;
        if (!this.pattern || this.pattern.length === 0) {
            content = mim.jsx("p", { class: styles_1.styles.descr.name }, "When you type a pattern, this area will show how it is parsed");
        }
        else {
            content = mim.jsx(mim.Fragment, null,
                this.renderStringWithRulers(this.pattern, this.patternRuler1, this.patternRuler2),
                mim.jsx("hr", { style: { width: "100%", borderColor: "brown", borderWidth: "0.5px" } }),
                this.renderPatternParsingResult());
        }
        return mim.jsx("div", { class: styles_1.styles.block.name },
            mim.jsx("h3", null, "URL Pattern"),
            mim.jsx("div", { class: styles_1.styles.parsingArea.name }, content));
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
        return mim.jsx("div", { class: styles_1.styles.parsingResult.name },
            mim.jsx("span", { class: styles_1.styles.resultIcon.name, style: { color: iconColor } }, iconCode),
            result);
    }
    /**
     * Renders the successfully parsed URL pattern.
     */
    renderParsedPattern() {
        return mim.jsx("table", { class: styles_1.styles.data.name },
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
        return mim.jsx("div", { class: styles_1.styles.parsedSegmentFields.name }, fieldSpans);
    }
    /**
     * Renders the area with the information about the parsed actual URL
     */
    renderActualUrl() {
        let content;
        if (!this.url || this.url.length === 0) {
            content = mim.jsx("p", { class: styles_1.styles.descr.name }, "When you type a URL, this area will show how it is parsed");
        }
        else {
            content = mim.jsx(mim.Fragment, null,
                this.renderStringWithRulers(this.url, this.urlRuler1, this.urlRuler2),
                mim.jsx("hr", { style: { width: "100%", borderColor: "brown", borderWidth: "0.5px" } }),
                this.renderUrlParsingResult());
        }
        return mim.jsx("div", { class: styles_1.styles.block.name },
            mim.jsx("h3", null, "Actual URL"),
            mim.jsx("div", { class: styles_1.styles.parsingArea.name }, content));
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
        return mim.jsx("div", { class: styles_1.styles.parsingResult.name },
            mim.jsx("span", { class: styles_1.styles.resultIcon.name, style: { color: iconColor } }, iconCode),
            result);
    }
    /**
     * Renders the successfully parsed URL.
     */
    renderParsedUrl() {
        return mim.jsx("table", { class: styles_1.styles.data.name },
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
            mim.jsx("pre", { class: styles_1.styles.rulers.name },
                ruler1,
                mim.jsx("br", null),
                ruler2),
            mim.jsx("pre", { class: styles_1.styles.string.name }, s));
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

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
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
const MainForm_1 = __webpack_require__(/*! ./MainForm */ "./lib/MainForm.js");
// this function is called from body.onload
this.mimurlDemoMain = function (appRoot) {
    mim.mount(new MainForm_1.MainForm(), appRoot);
};


/***/ }),

/***/ "./lib/styles.js":
/*!***********************!*\
  !*** ./lib/styles.js ***!
  \***********************/
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
const css = __importStar(__webpack_require__(/*! mimcss */ "mimcss"));
//////////////
///////////////////////////
//////////
class Styles extends css.StyleDefinition {
    constructor() {
        super(...arguments);
        this.init = [
            css.$style("*", {
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                fontSize: 12,
                boxSizing: "border-box",
            }),
            css.$style("html", { height: "100%" }),
            css.$style("body", { height: "100%", margin: 0 }),
            css.$style("pre", { fontFamily: "'Courier New', Courier, monospace", margin: 0 }),
        ];
        this.layout = css.$class({});
        this.data = css.$class({});
        this.table = css.$style("table", {
            "&": [
                [this.layout, {
                        border: "none", width: "100%",
                        "& ": [["tr", {
                                    border: "none",
                                    "& ": [["td", { border: "none", padding: 4 }]] // table.layout tr td
                                }]]
                    }],
                [this.data, {
                        border: [1, "solid", "grey"], borderCollapse: "collapse",
                        "&": [
                            ["& th, & td", {
                                    border: "1px solid grey",
                                    textAlign: "left",
                                    verticalAlign: "center",
                                    padding: 4
                                }],
                        ]
                    }],
            ]
        });
        this.block = css.$class({ marginTop: 8 });
        this.descr = css.$class({});
        this.p = css.$style("p", {
            "&": [
                [this.descr, { marginLeft: "1em", marginRight: "1em" }],
            ]
        });
        this.matchArea = css.$class({
            border: "1px solid brown",
            padding: 2,
            backgroundColor: "beige",
            overflowX: "auto",
            display: "flex",
            flexDirection: "row",
        });
        this.resultIcon = css.$class({
            fontSize: 48,
            textAlign: "center",
            verticalAlign: "middle",
        });
        this.matchResultErrors = css.$class({
            padding: 4,
            display: "flex",
            flexDirection: "column"
        });
        this.rulers = css.$class({
            color: "blue",
            margin: 0,
        });
        this.string = css.$class({
            color: "green",
        });
        this.parsingArea = css.$class({
            border: "1px solid brown",
            padding: 2,
            backgroundColor: "beige",
            overflowX: "auto",
            display: "flex",
            flexDirection: "column",
        });
        this.parsingResult = css.$class({
            display: "flex",
            flexDirection: "row",
        });
        this.parsedSegmentFields = css.$class({
            display: "flex",
            flexDirection: "column",
        });
    }
}
exports.styles = css.$activate(Styles);


/***/ }),

/***/ "mimbl":
/*!**************************************************************************************!*\
  !*** external {"root":"mimbl","commonjs2":"mimbl","commonjs":"mimbl","amd":"mimbl"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimbl__;

/***/ }),

/***/ "mimcss":
/*!******************************************************************************************!*\
  !*** external {"root":"mimcss","commonjs2":"mimcss","commonjs":"mimcss","amd":"mimcss"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimcss__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbkZvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1jc3NcIixcImNvbW1vbmpzMlwiOlwibWltY3NzXCIsXCJjb21tb25qc1wiOlwibWltY3NzXCIsXCJhbWRcIjpcIm1pbWNzc1wifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibWltdXJsXCIsXCJjb21tb25qczJcIjpcIm1pbXVybFwiLFwiY29tbW9uanNcIjpcIm1pbXVybFwiLFwiYW1kXCI6XCJtaW11cmxcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsb0VBQTZCO0FBQzdCLHlFQUFpQztBQUVqQyx3RUFBZ0M7QUFJaEMsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFNBQVM7SUFlMUM7O09BRUc7SUFDSSxNQUFNO1FBRVosT0FBTyxpQkFBSyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDO1lBQ2pDLCtDQUFpQztZQUVqQzs7Z0JBQWtELDRCQUFhOzBJQUV4QztZQUV0QixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUNsQjtJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNLLFVBQVU7UUFFakIsT0FBTyxtQkFBTyxLQUFLLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3RDO2dCQUNDLGlCQUFLLEtBQUssRUFBRSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFDLFFBQVEsRUFBQyxHQUFHO2dCQUMxRCxpQkFBSyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxHQUFHLENBQzlEO1lBQ1g7Z0JBQ0MsK0JBQWlCO2dCQUNqQjtvQkFBSSxtQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBSSxDQUFLLENBQzlFO1lBQ0w7Z0JBQ0MsMkJBQWE7Z0JBQ2I7b0JBQUksbUJBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUksQ0FBSyxDQUMxRSxDQUNFO0lBQ1QsQ0FBQztJQUVEOztPQUVHO0lBQ0ssaUJBQWlCO1FBRXhCLElBQUksT0FBWSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFDMUM7WUFDQyxPQUFPLEdBQUcsZUFBRyxLQUFLLEVBQUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLHNGQUFxRixDQUFDO1NBQzNIO2FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUNsQztZQUNDLE9BQU8sR0FBRyxRQUFDLEdBQUcsQ0FBQyxRQUFRO2dCQUN0QixrQkFBTSxLQUFLLEVBQUUsZUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxJQUFHLFFBQVEsQ0FBUTtnQkFDNUUsSUFBSSxDQUFDLHVCQUF1QixDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQ3pDO1NBQ2Y7YUFFRDtZQUNDLE9BQU8sR0FBRyxRQUFDLEdBQUcsQ0FBQyxRQUFRO2dCQUN0QixrQkFBTSxLQUFLLEVBQUUsZUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxJQUFHLFFBQVEsQ0FBUTtnQkFDOUUsSUFBSSxDQUFDLHVCQUF1QixDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQ3pDO1NBQ2Y7UUFFRCxPQUFPLGlCQUFLLEtBQUssRUFBRSxlQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDbkMsbUNBQXFCO1lBQ3JCLGlCQUFLLEtBQUssRUFBRSxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksSUFBRyxPQUFPLENBQU8sQ0FDN0M7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHVCQUF1QixDQUFFLE1BQXVCO1FBRXZELElBQUksU0FBUyxHQUFVLEVBQUUsQ0FBQztRQUMxQixLQUFLLElBQUksU0FBUyxJQUFJLE1BQU0sRUFDNUI7WUFDQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLEtBQUssU0FBUztnQkFDL0MsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUk7Z0JBQ25DLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFvQixDQUFDO2dCQUN0QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3hDLFNBQVMsQ0FBQyxJQUFJLENBQUU7Z0JBQ2Y7b0JBQUkscUJBQU0sU0FBUyxDQUFPLENBQUs7Z0JBQy9CO29CQUFJLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBTyxDQUFLLENBQzFELENBQUMsQ0FBQztTQUNQO1FBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDeEI7WUFDQyxPQUFPLG1CQUFPLEtBQUssRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQ3BDO29CQUFJLDRCQUFjO29CQUFBLDRCQUFjLENBQUs7Z0JBQ3BDLFNBQVMsQ0FDSDtTQUNSOztZQUVBLE9BQU8sMkRBQTRDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSyxnQkFBZ0IsQ0FBRSxVQUFpQztRQUUxRCxJQUFJLFVBQVUsS0FBSyxTQUFTO1lBQzNCLE9BQU8sa0JBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxnQkFBa0IsQ0FBQzthQUNqRCxJQUFJLFVBQVUsS0FBSyxJQUFJO1lBQzNCLE9BQU8sa0JBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxXQUFhLENBQUM7YUFDNUMsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRO1lBQ3RDLE9BQU8sa0JBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxJQUFHLEtBQUssVUFBVSxJQUFJLENBQVEsQ0FBQzthQUM5RCxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFDdkM7WUFDQyxJQUFJLEtBQUssQ0FBQyxVQUFvQixDQUFDO2dCQUM5QixPQUFPLGtCQUFNLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsVUFBWSxDQUFDOztnQkFFL0MsT0FBTyxrQkFBTSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUcsVUFBVSxDQUFRLENBQUM7U0FDeEQ7YUFDSSxJQUFJLE9BQU8sVUFBVSxLQUFLLFNBQVM7WUFDdkMsT0FBTyxrQkFBTSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLElBQUcsR0FBRyxVQUFVLEVBQUUsQ0FBUSxDQUFDO2FBQ3pELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUMsRUFDbkM7WUFDQyxPQUFPLFFBQUMsR0FBRyxDQUFDLFFBQVE7Z0JBQ25CLGtCQUFNLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsUUFBVTtnQkFFcEMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUMvQixRQUFDLEdBQUcsQ0FBQyxRQUFRO29CQUNYLEtBQUssR0FBRyxDQUFDLElBQUksa0JBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxTQUFXO29CQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUUsSUFBSSxDQUFDLENBQ2YsQ0FDZjtnQkFFRixrQkFBTSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFFBQVUsQ0FDdkI7U0FDZjtJQUNGLENBQUM7SUFFRDs7O09BR0c7SUFDSyx1QkFBdUIsQ0FBRSxNQUFnQjtRQUVoRCxPQUFPLGlCQUFLLEtBQUssRUFBRSxlQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUM5QyxNQUFNLENBQUMsR0FBRyxDQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxzQkFBTyxLQUFLLENBQVEsQ0FBQyxDQUNoRCxDQUFDO0lBQ1IsQ0FBQztJQUdEOztPQUVHO0lBQ0ssZ0JBQWdCO1FBRXZCLElBQUksT0FBWSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDOUM7WUFDQyxPQUFPLEdBQUcsZUFBRyxLQUFLLEVBQUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLG9FQUFtRSxDQUFDO1NBQ3pHO2FBRUQ7WUFDQyxPQUFPLEdBQUcsUUFBQyxHQUFHLENBQUMsUUFBUTtnQkFDckIsSUFBSSxDQUFDLHNCQUFzQixDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNuRixnQkFBSSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBQyxHQUFHO2dCQUN4RSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FDcEIsQ0FBQztTQUNoQjtRQUVELE9BQU8saUJBQUssS0FBSyxFQUFFLGVBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNuQyxrQ0FBb0I7WUFDcEIsaUJBQUssS0FBSyxFQUFFLGVBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFHLE9BQU8sQ0FBTyxDQUMvQyxDQUFDO0lBQ1IsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDBCQUEwQjtRQUVqQyxJQUFJLFNBQVMsR0FBYSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDOUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjtZQUNwQyxDQUFDLENBQUMsa0JBQU0sS0FBSyxFQUFFLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUMsS0FBSyxFQUFDLElBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBUTtZQUNyRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFOUIsT0FBTyxpQkFBSyxLQUFLLEVBQUUsZUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJO1lBQzNDLGtCQUFNLEtBQUssRUFBRSxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLElBQUcsUUFBUSxDQUFRO1lBQ2hGLE1BQU0sQ0FDRjtJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNLLG1CQUFtQjtRQUUxQixPQUFPLG1CQUFPLEtBQUssRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDcEM7Z0JBQUksMkJBQWE7Z0JBQUEsOEJBQWdCO2dCQUFBLCtCQUFpQjtnQkFBQSw2QkFBZTtnQkFBQSw2QkFBZSxDQUFLO1lBQ3BGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQywyQkFBMkIsQ0FBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2SCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsMkJBQTJCLENBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQywyQkFBMkIsQ0FBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQywyQkFBMkIsQ0FBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDckc7SUFDVCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSywyQkFBMkIsQ0FBRSxXQUFtQixFQUFFLFFBQWlDO1FBRTFGLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1FBRWIsSUFBSSxRQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixRQUFRLENBQUMsSUFBSSxDQUFFO1lBQ2QsZ0JBQUksT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUcsV0FBVyxDQUFNO1lBQ2hELG9CQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQU07WUFDMUYsb0JBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBTTtZQUN6RCxvQkFBSyxZQUFZLENBQUMsTUFBTSxDQUFNO1lBQzlCLG9CQUFLLElBQUksQ0FBQyx5QkFBeUIsQ0FBRSxZQUFZLENBQUMsQ0FBTSxDQUNwRCxDQUFDLENBQUM7UUFFUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDeEM7WUFDQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsUUFBUSxDQUFDLElBQUksQ0FBRTtnQkFDZCxvQkFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFNO2dCQUNoRixvQkFBSyxJQUFJLENBQUMsaUJBQWlCLENBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFNO2dCQUNwRCxvQkFBSyxPQUFPLENBQUMsTUFBTSxDQUFNO2dCQUN6QixvQkFBSyxJQUFJLENBQUMseUJBQXlCLENBQUUsT0FBTyxDQUFDLENBQU0sQ0FDL0MsQ0FBQyxDQUFDO1NBQ1A7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHdCQUF3QixDQUFFLEtBQWdDO1FBRWpFLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDeEQsT0FBTyxJQUFJLENBQUM7UUFFYixJQUFJLFFBQVEsR0FBVSxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsVUFBVSxFQUNwQztZQUNDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ2hELFFBQVEsQ0FBQyxJQUFJLENBQUU7Z0JBQ2Qsb0JBQUssVUFBVSxPQUFPLEdBQUcsQ0FBTTtnQkFDL0Isb0JBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBTTtnQkFDaEYsb0JBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBTTtnQkFDcEQsb0JBQUssT0FBTyxDQUFDLE1BQU0sQ0FBTTtnQkFDekIsb0JBQUssSUFBSSxDQUFDLHlCQUF5QixDQUFFLE9BQU8sQ0FBQyxDQUFNLENBQy9DLENBQUMsQ0FBQztTQUNQO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxpQkFBaUIsQ0FBRSxRQUErQjtRQUV6RCxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssTUFBTSxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUMzRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyx5QkFBeUIsQ0FBRSxPQUE4QjtRQUVoRSxJQUFJLFVBQVUsR0FBVSxFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxFQUNoQztZQUNDLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxFQUFFO2dCQUMxRSxlQUFlLEdBQUcsSUFBSSxDQUFDO2lCQUNuQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQXNCLENBQUM7Z0JBQzNGLGVBQWUsR0FBRyxJQUFJLENBQUM7aUJBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBc0IsQ0FBQztnQkFDekYsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUztnQkFDdkYsZUFBZSxHQUFHLElBQUksQ0FBQztZQUV4QixVQUFVLENBQUMsSUFBSSxDQUFFO2dCQUNmLEtBQUssQ0FBQyxJQUFJO2dCQUNWLEtBQUssQ0FBQyxVQUFVLElBQUksR0FBRztnQkFDdkIsSUFBSTtnQkFDSixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLGVBQWUsSUFBSSxLQUFLO2dCQUN4QixlQUFlLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FDeEQsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLGlCQUFLLEtBQUssRUFBRSxlQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUNoRCxVQUFVLENBQ04sQ0FBQztJQUNSLENBQUM7SUFFRDs7T0FFRztJQUNLLGVBQWU7UUFFdEIsSUFBSSxPQUFZLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN0QztZQUNDLE9BQU8sR0FBRyxlQUFHLEtBQUssRUFBRSxlQUFNLENBQUMsS0FBSyxDQUFDLElBQUksZ0VBQStELENBQUM7U0FDckc7YUFFRDtZQUNDLE9BQU8sR0FBRyxRQUFDLEdBQUcsQ0FBQyxRQUFRO2dCQUNyQixJQUFJLENBQUMsc0JBQXNCLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZFLGdCQUFJLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFDLEdBQUc7Z0JBQ3hFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUNoQixDQUFDO1NBQ2hCO1FBRUQsT0FBTyxpQkFBSyxLQUFLLEVBQUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ25DLGlDQUFtQjtZQUNuQixpQkFBSyxLQUFLLEVBQUUsZUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUcsT0FBTyxDQUFPLENBQy9DLENBQUM7SUFDUixDQUFDO0lBRUQ7O09BRUc7SUFDSyxzQkFBc0I7UUFFN0IsSUFBSSxTQUFTLEdBQWEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDakUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDMUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWU7WUFDaEMsQ0FBQyxDQUFDLGtCQUFNLEtBQUssRUFBRSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLEtBQUssRUFBQyxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFRO1lBQ2pHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFMUIsT0FBTyxpQkFBSyxLQUFLLEVBQUUsZUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJO1lBQzNDLGtCQUFNLEtBQUssRUFBRSxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLElBQUcsUUFBUSxDQUFRO1lBQ2hGLE1BQU0sQ0FDRjtJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNLLGVBQWU7UUFFdEIsT0FBTyxtQkFBTyxLQUFLLEVBQUUsZUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3BDO2dCQUFJLDJCQUFhO2dCQUFBLDhCQUFnQixDQUFLO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJO2dCQUFJLCtCQUFpQjtnQkFBQSxvQkFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBTSxDQUFLO1lBQ3ZGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJO2dCQUFJLCtCQUFpQjtnQkFBQSxvQkFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQU0sQ0FBSztZQUNqRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSTtnQkFBSSwyQkFBYTtnQkFBQSxvQkFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBTSxDQUFLO1lBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJO2dCQUFJLDJCQUFhO2dCQUFBLG9CQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBTSxDQUFLO1lBQ3JGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSTtnQkFBSSwyQkFBYTtnQkFBQSxvQkFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBTSxDQUFLLENBQ3JFO0lBQ1QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyx1QkFBdUIsQ0FBRSxLQUFnQztRQUVoRSxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDN0MsT0FBTyxJQUFJLENBQUM7UUFFYixJQUFJLFFBQVEsR0FBVSxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLE9BQU8sSUFBSSxLQUFLLEVBQ3pCO1lBQ0MsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUU7Z0JBQ2Qsb0JBQUssVUFBVSxPQUFPLEdBQUcsQ0FBTTtnQkFDL0Isb0JBQUssU0FBUyxDQUFDLEdBQUcsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMscUJBQU0sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBTyxDQUFDLENBQU0sQ0FDakYsQ0FBQyxDQUFDO1NBQ1A7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDO0lBRU8sc0JBQXNCLENBQUUsQ0FBUyxFQUFFLE1BQWMsRUFBRSxNQUFhO1FBRXZFLE9BQU87WUFDTixpQkFBSyxLQUFLLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUFHLE1BQU07Z0JBQUMsbUJBQUs7Z0JBQUMsTUFBTSxDQUFPO1lBQzNELGlCQUFLLEtBQUssRUFBRSxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBRyxDQUFDLENBQU8sQ0FDcEM7SUFDUCxDQUFDO0lBRU8sZUFBZSxDQUFDLENBQWE7UUFFcEMsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLFdBQVcsQ0FBQyxDQUFhO1FBRWhDLElBQUksQ0FBQyxHQUFHLEdBQUksQ0FBQyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7SUFDSyxNQUFNO1FBRWIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFFN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDM0M7WUFDQyx1QkFBdUI7WUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM1QztnQkFDQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkM7WUFFRCxvQkFBb0I7WUFDcEIsSUFDQTtnQkFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsT0FBTyxHQUFHLEVBQ1Y7Z0JBQ0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQzthQUMvQjtTQUNEO1FBRUQsWUFBWTtRQUNaLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ25DO1lBQ0MsdUJBQXVCO1lBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDeEM7Z0JBQ0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9CO1lBRUQsSUFDQTtnQkFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsT0FBTyxHQUFHLEVBQ1Y7Z0JBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7YUFDM0I7U0FDRDtRQUVELDRCQUE0QjtRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztDQUNGO0FBdGZELDRCQXNmQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdmRCxvRUFBNkI7QUFDN0IsOEVBQW9DO0FBSXBDLDJDQUEyQztBQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsT0FBb0I7SUFFbkQsR0FBRyxDQUFDLEtBQUssQ0FBRSxJQUFJLG1CQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQsc0VBQThCO0FBSTlCLGNBQWM7QUFDZCxHQUFHLENBQUMsZ0JBQWdCLENBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUIsVUFBVTtBQUlWLE1BQU0sTUFBTyxTQUFRLEdBQUcsQ0FBQyxlQUFlO0lBQXhDOztRQUVDLFNBQUksR0FBRztZQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFO2dCQUNoQixVQUFVLEVBQUUscUNBQXFDO2dCQUNqRCxRQUFRLEVBQUUsRUFBRTtnQkFDWixTQUFTLEVBQUUsWUFBWTthQUN2QixDQUFDO1lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFFdkMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUVsRCxHQUFHLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDbEY7UUFFRCxXQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLE9BQU8sRUFBRTtZQUM1QixHQUFHLEVBQUU7Z0JBQ0osQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNiLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU07d0JBQzdCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO29DQUNiLE1BQU0sRUFBRSxNQUFNO29DQUNkLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtpQ0FDcEUsQ0FBQyxDQUFDO3FCQUNILENBQUM7Z0JBRUYsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNYLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFFLFVBQVU7d0JBQ3hELEdBQUcsRUFBRTs0QkFDSixDQUFDLFlBQVksRUFBRTtvQ0FDZCxNQUFNLEVBQUUsZ0JBQWdCO29DQUN4QixTQUFTLEVBQUUsTUFBTTtvQ0FDakIsYUFBYSxFQUFFLFFBQVE7b0NBQ3ZCLE9BQU8sRUFBRSxDQUFDO2lDQUNWLENBQUM7eUJBRUY7cUJBQ0QsQ0FBQzthQUNGO1NBQ0QsQ0FBQztRQUVGLFVBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRXBDLFVBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUV0QixNQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxHQUFHLEVBQUU7WUFDcEIsR0FBRyxFQUFFO2dCQUNKLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3ZEO1NBQ0QsQ0FBQztRQUVGLGNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3RCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLENBQUM7WUFDVixlQUFlLEVBQUUsT0FBTztZQUN4QixTQUFTLEVBQUUsTUFBTTtZQUNqQixPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixlQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN2QixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxRQUFRO1lBQ25CLGFBQWEsRUFBRSxRQUFRO1NBQ3ZCLENBQUM7UUFFRixzQkFBaUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLE1BQU07WUFDZixhQUFhLEVBQUUsUUFBUTtTQUN2QixDQUFDO1FBRUYsV0FBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDbkIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsQ0FBQztTQUNULENBQUM7UUFFRixXQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNuQixLQUFLLEVBQUUsT0FBTztTQUNkLENBQUM7UUFFRixnQkFBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDeEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsQ0FBQztZQUNWLGVBQWUsRUFBRSxPQUFPO1lBQ3hCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsYUFBYSxFQUFFLFFBQVE7U0FDdkIsQ0FBQztRQUVGLGtCQUFhLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMxQixPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRix3QkFBbUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxNQUFNO1lBQ2YsYUFBYSxFQUFFLFFBQVE7U0FDdkIsQ0FBQztJQUdILENBQUM7Q0FBQTtBQUlVLGNBQU0sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN0SDNDLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6Im1pbXVybC1kZW1vLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltY3NzXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWJsXCIsIFwibWltY3NzXCIsIFwibWltdXJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbWNzc1wiKSwgcmVxdWlyZShcIm1pbXVybFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJtaW1ibFwiXSwgcm9vdFtcIm1pbWNzc1wiXSwgcm9vdFtcIm1pbXVybFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltY3NzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9tYWluLmpzXCIpO1xuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQgKiBhcyBtaW11cmwgZnJvbSBcIm1pbXVybFwiO1xyXG5pbXBvcnQge0Nzc0NvbG9yfSBmcm9tIFwibWltY3NzXCI7XHJcbmltcG9ydCB7c3R5bGVzfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Gb3JtIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cGF0dGVybjogc3RyaW5nO1xyXG5cdHBhdHRlcm5SdWxlcjE6IHN0cmluZztcclxuXHRwYXR0ZXJuUnVsZXIyOiBzdHJpbmdcclxuXHR1cmw6IHN0cmluZztcclxuXHR1cmxSdWxlcjE6IHN0cmluZztcclxuXHR1cmxSdWxlcjI6IHN0cmluZ1xyXG5cdHBhdHRlcm5QYXJzaW5nRXJyb3I6IEVycm9yO1xyXG5cdHBhcnNlZFBhdHRlcm46IG1pbXVybC5JUGFyc2VkVXJsUGF0dGVybjtcclxuXHR1cmxQYXJzaW5nRXJyb3I6IEVycm9yO1xyXG5cdHBhcnNlZFVybDogbWltdXJsLklQYXJzZWRBY3R1YWxVUkw7XHJcblx0bWF0Y2hSZXN1bHQ6IG1pbXVybC5JVXJsUGF0dGVybk1hdGNoUmVzdWx0O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWFpbiByZW5kZXIgbWV0aG9kXHJcblx0ICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17e21hcmdpbjpcIjEycHhcIn19PlxyXG5cdFx0XHQ8aDI+VVJMIFBhcnNpbmcgYW5kIE1hdGNoaW5nPC9oMj5cclxuXHJcblx0XHRcdDxwPlRoaXMgcGFnZSBkZW1vbnN0cmF0ZXMgdGhlIGNhcGFiaWxpdGllcyBvZiB0aGUgPGI+bWltdXJsPC9iPiBsaWJyYXJ5XHJcblx0XHRcdGZvciBVUkwgcGFyc2luZyBhbmQgbWF0Y2hpbmcuIEVudGVyIFVSTCBwYXR0ZXJuIGFuZCBVUkwuIFBhcnNpbmcgYW5kIG1hdGNoaW5nIHJlc3VsdHMgd2lsbFxyXG5cdFx0XHRiZSBkaXNwbGF5ZWQgYmVsb3cuPC9wPlxyXG5cclxuXHRcdFx0e3RoaXMucmVuZGVyRm9ybSgpfVxyXG5cdFx0XHR7dGhpcy5yZW5kZXJNYXRjaFJlc3VsdCgpfVxyXG5cdFx0XHR7dGhpcy5yZW5kZXJVcmxQYXR0ZXJuKCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlckFjdHVhbFVybCgpfVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGlucHV0IGZpZWxkcyBmcm8gVVJMIHBhdHRlcm4gYW5kIGFjdHVhbCBVUkxcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlckZvcm0oKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzcz17c3R5bGVzLmxheW91dC5uYW1lfT5cclxuXHRcdFx0PGNvbGdyb3VwPlxyXG5cdFx0XHRcdDxjb2wgc3R5bGU9e3t0ZXh0QWxpZ246XCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOlwiY2VudGVyXCJ9fS8+XHJcblx0XHRcdFx0PGNvbCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIiwgdmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLCB3aWR0aDogXCIxMDAlXCJ9fS8+XHJcblx0XHRcdDwvY29sZ3JvdXA+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHQ8dGQ+UGF0dGVybjo8L3RkPlxyXG5cdFx0XHRcdDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gaW5wdXQ9e3RoaXMub25QYXR0ZXJuQ2hhbmdlfSAvPjwvdGQ+XHJcblx0XHRcdDwvdHI+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHQ8dGQ+VVJMOjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBpbnB1dD17dGhpcy5vblVybENoYW5nZX0gLz48L3RkPlxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFyZWEgd2l0aCB0aGUgbWF0Y2hpbmcgcmVzdWx0c1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHQoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICghdGhpcy5wYXJzZWRQYXR0ZXJuIHx8ICF0aGlzLnBhcnNlZFVybClcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxwIGNsYXNzPXtzdHlsZXMuZGVzY3IubmFtZX0+V2hlbiB5b3UgdHlwZSBhIHZhbGlkIHBhdHRlcm4gYW5kIFVSTCwgdGhpcyBhcmVhIHdpbGwgc2hvdyB0aGUgbWF0Y2hpbmcgcmVzdWx0czwvcD47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICghdGhpcy5tYXRjaFJlc3VsdC5zdWNjZXNzKVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz17c3R5bGVzLnJlc3VsdEljb24ubmFtZX0gc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19PntcIlxcdTI2MzlcIn08L3NwYW4+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyTWF0Y2hSZXN1bHRFcnJvcnMoIHRoaXMubWF0Y2hSZXN1bHQuZXJyb3JzKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPXtzdHlsZXMucmVzdWx0SWNvbi5uYW1lfSBzdHlsZT17e2NvbG9yOiBcImdyZWVuXCJ9fT57XCJcXHUyNjNBXCJ9PC9zcGFuPlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlck1hdGNoUmVzdWx0RmllbGRzKCB0aGlzLm1hdGNoUmVzdWx0LmZpZWxkcyl9XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PlxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXtzdHlsZXMuYmxvY2submFtZX0+XHJcblx0XHRcdDxoMz5NYXRjaCBSZXN1bHQ8L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPXtzdHlsZXMubWF0Y2hBcmVhLm5hbWV9Pntjb250ZW50fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IGZpZWxkIHZhbHVlcyBvYnRhaW5lZCBkdXJpbmcgbWF0Y2hpbmcuXHJcblx0ICogQHBhcmFtIGZpZWxkcyBcclxuXHQgKiBAcmV0dXJucyBhcnJheSBvZiB0YWJsZSByb3dzIC0gb25lIHJvdyBwZXIgZmllbGQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJNYXRjaFJlc3VsdEZpZWxkcyggZmllbGRzOiBtaW11cmwuRmllbGRCYWcpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZmllbGRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgZmllbGROYW1lIGluIGZpZWxkcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGZpZWxkVmFsdWUgPSBmaWVsZHNbZmllbGROYW1lXTtcclxuXHRcdFx0bGV0IGZpZWxkVmFsdWVBc1N0cmluZyA9IGZpZWxkVmFsdWUgPT09IHVuZGVmaW5lZFxyXG5cdFx0XHRcdFx0PyBcInVuZGVmaW5lZFwiIDogZmllbGRWYWx1ZSA9PT0gbnVsbFxyXG5cdFx0XHRcdFx0PyBcIm51bGxcIiA6IGlzTmFOKGZpZWxkVmFsdWUgYXMgbnVtYmVyKVxyXG5cdFx0XHRcdFx0PyBcIk5hTlwiIDogSlNPTi5zdHJpbmdpZnkoIGZpZWxkVmFsdWUpO1xyXG5cdFx0XHRmaWVsZFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHRcdDx0ZD48cHJlPntmaWVsZE5hbWV9PC9wcmU+PC90ZD5cclxuXHRcdFx0XHQ8dGQ+PHByZT57dGhpcy5yZW5kZXJGaWVsZFZhbHVlKGZpZWxkc1tmaWVsZE5hbWVdKX08L3ByZT48L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGZpZWxkUm93cy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPXtzdHlsZXMuZGF0YS5uYW1lfT5cclxuXHRcdFx0XHQ8dHI+PHRoPkZpZWxkPC90aD48dGg+VmFsdWU8L3RoPjwvdHI+XHJcblx0XHRcdFx0e2ZpZWxkUm93c31cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIDxwPk5vIGZpZWxkcyB3ZXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBVUkw8L3A+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGZpZWxkIHZhbHVlKHMpIGFjY29yZGluZyB0byBpdHMgdHlwZSBhbmQgd2l0aCBhcHByb3ByaWF0ZSBzdHlsZXMuXHJcblx0ICogQHBhcmFtIGZpZWxkVmFsdWUgXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJGaWVsZFZhbHVlKCBmaWVsZFZhbHVlOiBtaW11cmwuRmllbGRWYWx1ZVR5cGUpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoZmllbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19PnVuZGVmaW5lZDwvc3Bhbj47XHJcblx0XHRlbHNlIGlmIChmaWVsZFZhbHVlID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pm51bGw8L3NwYW4+O1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGZpZWxkVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIn19PntgXFxcIiR7ZmllbGRWYWx1ZX1cXFwiYH08L3NwYW4+O1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGZpZWxkVmFsdWUgPT09IFwibnVtYmVyXCIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChpc05hTihmaWVsZFZhbHVlIGFzIG51bWJlcikpXHJcblx0XHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT5OYU48L3NwYW4+O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJyZWRcIn19PntmaWVsZFZhbHVlfTwvc3Bhbj47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+e2Ake2ZpZWxkVmFsdWV9YH08L3NwYW4+O1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggZmllbGRWYWx1ZSkpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT5bPC9zcGFuPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZpZWxkVmFsdWUubWFwKCAoaXRlbSwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0e2luZGV4ID4gMCAmJiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PiwgPC9zcGFuPn1cclxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJGaWVsZFZhbHVlKCBpdGVtKX1cclxuXHRcdFx0XHRcdFx0PC9taW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT5dPC9zcGFuPlxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgb25lIG9yIG1vcmUgZXJyb3JzIHJlY2VpdmVkIGR1cmluZyB0aGUgbWF0Y2hpbmcuXHJcblx0ICogQHBhcmFtIGVycm9ycyBcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlck1hdGNoUmVzdWx0RXJyb3JzKCBlcnJvcnM6IHN0cmluZ1tdKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3N0eWxlcy5tYXRjaFJlc3VsdEVycm9ycy5uYW1lfT5cclxuXHRcdFx0e2Vycm9ycy5tYXAoIChlcnJvcjogc3RyaW5nKSA9PiA8c3Bhbj57ZXJyb3J9PC9zcGFuPil9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHRcclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBhcmVhIHdpdGggdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYXJzZWQgVVJMIHBhdHRlcm5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclVybFBhdHRlcm4oKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICghdGhpcy5wYXR0ZXJuIHx8IHRoaXMucGF0dGVybi5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8cCBjbGFzcz17c3R5bGVzLmRlc2NyLm5hbWV9PldoZW4geW91IHR5cGUgYSBwYXR0ZXJuLCB0aGlzIGFyZWEgd2lsbCBzaG93IGhvdyBpdCBpcyBwYXJzZWQ8L3A+O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCB0aGlzLnBhdHRlcm4sIHRoaXMucGF0dGVyblJ1bGVyMSwgdGhpcy5wYXR0ZXJuUnVsZXIyKX1cclxuXHRcdFx0XHQ8aHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGJvcmRlckNvbG9yOiBcImJyb3duXCIsIGJvcmRlcldpZHRoOiBcIjAuNXB4XCJ9fS8+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyUGF0dGVyblBhcnNpbmdSZXN1bHQoKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXtzdHlsZXMuYmxvY2submFtZX0+XHJcblx0XHRcdDxoMz5VUkwgUGF0dGVybjwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3M9e3N0eWxlcy5wYXJzaW5nQXJlYS5uYW1lfT57Y29udGVudH08L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIFVSTCBwYXR0ZXJuIHBhcnNpbmcgcmVzdWx0OiBlaXRoZXIgdGhlIHN1Y2Nlc3NmbGx5IHBhcnNlZCBwYXR0ZXJuIG9yIHRoZVxyXG5cdCAqIHBhcnNpbmcgZXJyb3IuXHJcblx0ICovXHRcclxuXHRwcml2YXRlIHJlbmRlclBhdHRlcm5QYXJzaW5nUmVzdWx0KCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBpY29uQ29sb3I6IENzc0NvbG9yID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID8gXCJyZWRcIiA6IFwiZ3JlZW5cIjtcclxuXHRcdGxldCBpY29uQ29kZSA9IHRoaXMucGF0dGVyblBhcnNpbmdFcnJvciA/IFwiXFx1MjYzOVwiIDogXCJcXHUyNjNBXCI7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yXHJcblx0XHRcdD8gPHNwYW4gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsIHBhZGRpbmdMZWZ0OlwiOHB4XCJ9fT57dGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yLm1lc3NhZ2V9PC9zcGFuPlxyXG5cdFx0XHQ6IHRoaXMucmVuZGVyUGFyc2VkUGF0dGVybigpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXtzdHlsZXMucGFyc2luZ1Jlc3VsdC5uYW1lfT5cclxuXHRcdFx0PHNwYW4gY2xhc3M9e3N0eWxlcy5yZXN1bHRJY29uLm5hbWV9IHN0eWxlPXt7Y29sb3I6IGljb25Db2xvcn19PntpY29uQ29kZX08L3NwYW4+XHJcblx0XHRcdHtyZXN1bHR9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIHN1Y2Nlc3NmdWxseSBwYXJzZWQgVVJMIHBhdHRlcm4uXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRQYXR0ZXJuKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9e3N0eWxlcy5kYXRhLm5hbWV9PlxyXG5cdFx0XHQ8dHI+PHRoPlBhcnQ8L3RoPjx0aD5TZWdtZW50PC90aD48dGg+TG9jYXRpb248L3RoPjx0aD5SZWdFeHA8L3RoPjx0aD5GaWVsZHM8L3RoPjwvdHI+XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucHJvdG9jb2wgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiUHJvdG9jb2xcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnByb3RvY29sLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLmhvc3RuYW1lICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIkhvc3RuYW1lXCIsIHRoaXMucGFyc2VkUGF0dGVybi5ob3N0bmFtZS5nZXRTZWdtZW50cygpKX1cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybi5wb3J0ICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIlBvcnRcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnBvcnQuZ2V0U2VnbWVudHMoKSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucGF0aCAmJiB0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggXCJQYXRoXCIsIHRoaXMucGFyc2VkUGF0dGVybi5wYXRoLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLnF1ZXJ5ICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblF1ZXJ5KCB0aGlzLnBhcnNlZFBhdHRlcm4ucXVlcnkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLmhhc2ggJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiSGFzaFwiLCB0aGlzLnBhcnNlZFBhdHRlcm4uaGFzaC5nZXRTZWdtZW50cygpKX1cclxuXHRcdDwvdGFibGU+XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IG9uZSBvciBtb3JlIHNlZ2VtZW50cyBmcm9tIHRoZSBnaXZlbiBuYW1lZCBVUkwgcGFydCBvZiB0aGUgVVJMIHBhdHRlcm5cclxuXHQgKiBAcGFyYW0gdXJsUGFydE5hbWUgXHJcblx0ICogQHBhcmFtIHNlZ21lbnRzIFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHRhYmxlIHJvd3MgLSBvbmUgcGVyIGVhY2ggc2VnbWVudC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggdXJsUGFydE5hbWU6IHN0cmluZywgc2VnbWVudHM6IG1pbXVybC5JUGFyc2VkU2VnbWVudFtdKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFzZWdtZW50cyB8fCBzZWdtZW50cy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJ0Um93czogYW55W10gPSBbXTtcclxuXHRcdGxldCBmaXJzdFNlZ21lbnQgPSBzZWdtZW50c1swXTtcclxuXHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0PHRkIHJvd3NwYW49e3NlZ21lbnRzLmxlbmd0aH0+e3VybFBhcnROYW1lfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggZmlyc3RTZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBmaXJzdFNlZ21lbnQubG9jYXRpb24ubGVuZ3RoKX08L3RkPlxyXG5cdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIGZpcnN0U2VnbWVudC5sb2NhdGlvbil9PC90ZD5cclxuXHRcdFx0PHRkPntmaXJzdFNlZ21lbnQucmVnRXhwfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBmaXJzdFNlZ21lbnQpfTwvdGQ+XHJcblx0XHQ8L3RyPik7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcclxuXHRcdFx0cGFydFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggc2VnbWVudC5sb2NhdGlvbi5zdGFydCwgc2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdDx0ZD57c2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMucmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudCl9PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJ0Um93cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgcGFyc2VkIGZyb20gdGhlIFVSTCBwYXR0ZXJuXHJcblx0ICogQHBhcmFtIHF1ZXJ5IFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHJvd3MgLSBvbmUgcGVyIHF1ZXJ5IHN0cmluZyAgcGFyYW1ldGVyXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRQYXR0ZXJuUXVlcnkoIHF1ZXJ5OiBtaW11cmwuSVBhcnNlZFF1ZXJ5U3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFxdWVyeSB8fCBPYmplY3Qua2V5cyggcXVlcnkucGFyc2VkUVNQcykubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgcGFydFJvd3M6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBxc3BOYW1lIGluIHF1ZXJ5LnBhcnNlZFFTUHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWdtZW50ID0gcXVlcnkucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50O1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPntgUXVlcnkgWyR7cXNwTmFtZX1dYH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5wYXR0ZXJuLnN1YnN0ciggc2VnbWVudC5sb2NhdGlvbi5zdGFydCwgc2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLmdldExvY2F0aW9uU3RyaW5nKCBzZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHRcdDx0ZD57c2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMucmVuZGVyUGFyc2VkU2VnbWVudEZpZWxkcyggc2VnbWVudCl9PC90ZD5cclxuXHRcdFx0PC90cj4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJ0Um93cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBsb2NhdGlvbiB3aXRoaW4gdGhlIHBhcnNlZCBzdHJpbmcuXHJcblx0ICogQHBhcmFtIGxvY2F0aW9uIFxyXG5cdCAqIEByZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gbG9jYXRpb24gaW4gdGhlIGZvcm1hdCBcInN0YXJ0IC0gZW5kIChsZW5ndGgpXCJcclxuXHQgKi9cclxuXHRwcml2YXRlIGdldExvY2F0aW9uU3RyaW5nKCBsb2NhdGlvbjogbWltdXJsLlBhcnNlZExvY2F0aW9uKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke2xvY2F0aW9uLnN0YXJ0fSAtICR7bG9jYXRpb24uc3RhcnQgKyBsb2NhdGlvbi5sZW5ndGggLSAxfSAoJHtsb2NhdGlvbi5sZW5ndGh9KWA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IGZpZWxkcyBpbiB0aGUgZ2l2ZW4gc2VnbWVudHMuXHJcblx0ICogQHBhcmFtIHNlZ21lbnQgXHJcblx0ICogQHJldHVybnMgPGRpdj4gZWxlbWVudCByZXByZXNlbnRpbmcgYSB2ZXJ0aWNhbCBib3ggd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIGZpZWxkXHJcblx0ICogb24gYSBzZXBhcmF0ZSByb3cuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50OiBtaW11cmwuSVBhcnNlZFNlZ21lbnQpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZmllbGRTcGFuczogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IGZpZWxkIG9mIHNlZ21lbnQuZmllbGRzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaGFzRGVmYXVsdFZhbHVlID0gZmFsc2U7XHJcblx0XHRcdGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5TdHJpbmcgJiYgZmllbGQuZGVmYXVsdFZhbHVlICE9PSBcIlwiKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkludGVnZXIgJiYgIWlzTmFOKGZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIpKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkZsb2F0ICYmICFpc05hTihmaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyKSlcclxuXHRcdFx0XHRoYXNEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChmaWVsZC5mb3JtYXQgPT09IG1pbXVybC5GaWVsZEZvcm1hdC5Cb29sZWFuICYmIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRmaWVsZFNwYW5zLnB1c2goIDxzcGFuPlxyXG5cdFx0XHRcdHtmaWVsZC5uYW1lfVxyXG5cdFx0XHRcdHtmaWVsZC5pc09wdGlvbmFsICYmIFwiP1wifVxyXG5cdFx0XHRcdHtcIjogXCJ9XHJcblx0XHRcdFx0e21pbXVybC5GaWVsZEZvcm1hdFtmaWVsZC5mb3JtYXRdfVxyXG5cdFx0XHRcdHtoYXNEZWZhdWx0VmFsdWUgJiYgXCIgPSBcIn1cclxuXHRcdFx0XHR7aGFzRGVmYXVsdFZhbHVlICYmIHRoaXMucmVuZGVyRmllbGRWYWx1ZSggZmllbGQuZGVmYXVsdFZhbHVlKX1cclxuXHRcdFx0PC9zcGFuPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3N0eWxlcy5wYXJzZWRTZWdtZW50RmllbGRzLm5hbWV9PlxyXG5cdFx0XHR7ZmllbGRTcGFuc31cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFyZWEgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhcnNlZCBhY3R1YWwgVVJMXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJBY3R1YWxVcmwoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICghdGhpcy51cmwgfHwgdGhpcy51cmwubGVuZ3RoID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPHAgY2xhc3M9e3N0eWxlcy5kZXNjci5uYW1lfT5XaGVuIHlvdSB0eXBlIGEgVVJMLCB0aGlzIGFyZWEgd2lsbCBzaG93IGhvdyBpdCBpcyBwYXJzZWQ8L3A+O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCB0aGlzLnVybCwgdGhpcy51cmxSdWxlcjEsIHRoaXMudXJsUnVsZXIyKX1cclxuXHRcdFx0XHQ8aHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGJvcmRlckNvbG9yOiBcImJyb3duXCIsIGJvcmRlcldpZHRoOiBcIjAuNXB4XCJ9fS8+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyVXJsUGFyc2luZ1Jlc3VsdCgpfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3N0eWxlcy5ibG9jay5uYW1lfT5cclxuXHRcdFx0PGgzPkFjdHVhbCBVUkw8L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPXtzdHlsZXMucGFyc2luZ0FyZWEubmFtZX0+e2NvbnRlbnR9PC9kaXY+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBhY3R1YWwgVVJMIHBhcnNpbmcgcmVzdWx0OiBlaXRoZXIgdGhlIHN1Y2Nlc3NmbGx5IHBhcnNlZCBVUkwgb3IgdGhlIHBhcnNpbmcgZXJyb3IuXHJcblx0ICovXHRcclxuXHRwcml2YXRlIHJlbmRlclVybFBhcnNpbmdSZXN1bHQoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGljb25Db2xvcjogQ3NzQ29sb3IgPSB0aGlzLnVybFBhcnNpbmdFcnJvciA/IFwicmVkXCIgOiBcImdyZWVuXCI7XHJcblx0XHRsZXQgaWNvbkNvZGUgPSB0aGlzLnVybFBhcnNpbmdFcnJvciA/IFwiXFx1MjYzOVwiIDogXCJcXHUyNjNBXCI7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy51cmxQYXJzaW5nRXJyb3JcclxuXHRcdFx0PyA8c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIiwgcGFkZGluZ0xlZnQ6XCI4cHhcIn19Pnt0aGlzLnVybFBhcnNpbmdFcnJvci5tZXNzYWdlfTwvc3Bhbj5cclxuXHRcdFx0OiB0aGlzLnJlbmRlclBhcnNlZFVybCgpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXtzdHlsZXMucGFyc2luZ1Jlc3VsdC5uYW1lfT5cclxuXHRcdFx0PHNwYW4gY2xhc3M9e3N0eWxlcy5yZXN1bHRJY29uLm5hbWV9IHN0eWxlPXt7Y29sb3I6IGljb25Db2xvcn19PntpY29uQ29kZX08L3NwYW4+XHJcblx0XHRcdHtyZXN1bHR9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIHN1Y2Nlc3NmdWxseSBwYXJzZWQgVVJMLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkVXJsKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dGFibGUgY2xhc3M9e3N0eWxlcy5kYXRhLm5hbWV9PlxyXG5cdFx0XHQ8dHI+PHRoPlBhcnQ8L3RoPjx0aD5Db250ZW50PC90aD48L3RyPlxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucHJvdG9jb2wgJiYgPHRyPjx0ZD5Qcm90b2NvbDwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5wcm90b2NvbH08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwuaG9zdG5hbWUgJiYgPHRyPjx0ZD5Ib3N0bmFtZTwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5ob3N0bmFtZS5qb2luKFwiLlwiKX08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucG9ydCAmJiA8dHI+PHRkPlBvcnQ8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwucG9ydH08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucGF0aCAmJiA8dHI+PHRkPlBhdGg8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwucGF0aC5qb2luKFwiL1wiKX08L3RkPjwvdHI+fVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwucXVlcnkgJiYgdGhpcy5yZW5kZXJQYXJzZWRBY3R1YWxRdWVyeSggdGhpcy5wYXJzZWRVcmwucXVlcnkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRVcmwuaGFzaCAmJiA8dHI+PHRkPkhhc2g8L3RkPjx0ZD57dGhpcy5wYXJzZWRVcmwuaGFzaH08L3RkPjwvdHI+fVxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgcGFyc2VkIGZyb20gdGhlIFVSTFxyXG5cdCAqIEBwYXJhbSBxdWVyeSBcclxuXHQgKiBAcmV0dXJucyBhcnJheSBvZiByb3dzIC0gb25lIHBlciBxdWVyeSBzdHJpbmcgIHBhcmFtZXRlclxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkQWN0dWFsUXVlcnkoIHF1ZXJ5OiB7IFtQOiBzdHJpbmddOiBzdHJpbmdbXSB9KTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCFxdWVyeSB8fCBPYmplY3Qua2V5cyggcXVlcnkpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcnRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgcXNwTmFtZSBpbiBxdWVyeSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHFzcFZhbHVlcyA9IHF1ZXJ5W3FzcE5hbWVdO1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPntgUXVlcnkgWyR7cXNwTmFtZX1dYH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57cXNwVmFsdWVzLm1hcCggKHFzcFZhbHVlKSA9PiA8ZGl2Pntxc3BWYWx1ZSA/IHFzcFZhbHVlIDogXCI8ZW1wdHk+XCJ9PC9kaXY+KX08L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRSb3dzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJTdHJpbmdXaXRoUnVsZXJzKCBzOiBzdHJpbmcsIHJ1bGVyMTogc3RyaW5nLCBydWxlcjI6c3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXY+XHJcblx0XHRcdDxwcmUgY2xhc3M9e3N0eWxlcy5ydWxlcnMubmFtZX0+e3J1bGVyMX08YnIvPntydWxlcjJ9PC9wcmU+XHJcblx0XHRcdDxwcmUgY2xhc3M9e3N0eWxlcy5zdHJpbmcubmFtZX0+e3N9PC9wcmU+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25QYXR0ZXJuQ2hhbmdlKGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wYXR0ZXJuID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnRyaW0oKTtcclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uVXJsQ2hhbmdlKGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51cmwgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudHJpbSgpO1xyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBhcnNlcyB0aGUgVVJMIHBhdHRlcm4gYW5kIHRoZSBhY3R1YWwgVVJMIChpZiBleGlzdCkgYW5kIGludm9rZXMgbWF0Y2hpbmcuIFRoaXMgbWV0aG9kXHJcblx0ICogYnVpbGRzIGludGVybmFsIHN0cnVjdHVyZXMsIHdoaWNoIGFyZSB0aGVuIHJlcHJlc2VudGVkIGluIHRoZSBVSS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHVwZGF0ZSgpXHJcblx0e1xyXG5cdFx0Ly8gY2xlYW51cCBjdXJyZW50IGRhdGFcclxuXHRcdHRoaXMucGF0dGVyblJ1bGVyMSA9IFwiXCI7XHJcblx0XHR0aGlzLnBhdHRlcm5SdWxlcjIgPSBcIlwiO1xyXG5cdFx0dGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wYXJzZWRQYXR0ZXJuID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy51cmxSdWxlcjEgPSBcIlwiO1xyXG5cdFx0dGhpcy51cmxSdWxlcjIgPSBcIlwiO1xyXG5cdFx0dGhpcy51cmxQYXJzaW5nRXJyb3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcnNlZFVybCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMubWF0Y2hSZXN1bHQgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0aWYgKHRoaXMucGF0dGVybiAmJiB0aGlzLnBhdHRlcm4ubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIHJ1bGVyIHN0cmluZ3NcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdHRlcm4ubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgaUFzU3RyaW5nID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRcdGxldCByID0gaSAlIDEwO1xyXG5cdFx0XHRcdHRoaXMucGF0dGVyblJ1bGVyMSArPSByID09PSAwID8gaUFzU3RyaW5nIDogciA+PSBpQXNTdHJpbmcubGVuZ3RoID8gXCIgXCIgOiBcIlwiO1xyXG5cdFx0XHRcdHRoaXMucGF0dGVyblJ1bGVyMiArPSByLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHBhcnNlIFVSTCBwYXR0ZXJuXHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXJzZWRQYXR0ZXJuID0gbWltdXJsLnBhcnNlVXJsUGF0dGVybiggdGhpcy5wYXR0ZXJuKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID0gZXJyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcGFyc2UgVVJMXHJcblx0XHRpZiAodGhpcy51cmwgJiYgdGhpcy51cmwubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIHJ1bGVyIHN0cmluZ3NcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnVybC5sZW5ndGg7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBpQXNTdHJpbmcgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0bGV0IHIgPSBpICUgMTA7XHJcblx0XHRcdFx0dGhpcy51cmxSdWxlcjEgKz0gciA9PT0gMCA/IGlBc1N0cmluZyA6IHIgPj0gaUFzU3RyaW5nLmxlbmd0aCA/IFwiIFwiIDogXCJcIjtcclxuXHRcdFx0XHR0aGlzLnVybFJ1bGVyMiArPSByLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXJzZWRVcmwgPSBtaW11cmwucGFyc2VVUkwoIHRoaXMudXJsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy51cmxQYXJzaW5nRXJyb3IgPSBlcnI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtYXRjaCBVUkwgYWdhaW5zdCBwYXR0ZXJuXHJcblx0XHRpZiAodGhpcy5wYXJzZWRQYXR0ZXJuICYmIHRoaXMucGFyc2VkVXJsKVxyXG5cdFx0XHR0aGlzLm1hdGNoUmVzdWx0ID0gbWltdXJsLm1hdGNoKCB0aGlzLnBhcnNlZFVybCwgdGhpcy5wYXJzZWRQYXR0ZXJuKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fTtcclxufVxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0IHtNYWluRm9ybX0gZnJvbSBcIi4vTWFpbkZvcm1cIjtcclxuXHJcblxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBib2R5Lm9ubG9hZFxyXG50aGlzLm1pbXVybERlbW9NYWluID0gZnVuY3Rpb24oIGFwcFJvb3Q6IEhUTUxFbGVtZW50KVxyXG57XHJcblx0bWltLm1vdW50KCBuZXcgTWFpbkZvcm0oKSwgYXBwUm9vdCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgY3NzIGZyb20gXCJtaW1jc3NcIjtcclxuXHJcblxyXG5cclxuLy8vICNpZiAhREVCVUdcclxuY3NzLmVuYWJsZVNob3J0TmFtZXMoIHRydWUpO1xyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbmNsYXNzIFN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxue1xyXG5cdGluaXQgPSBbXHJcblx0XHRjc3MuJHN0eWxlKCBcIipcIiwge1xyXG5cdFx0XHRmb250RmFtaWx5OiBcIlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRTaXplOiAxMixcclxuXHRcdFx0Ym94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuXHRcdH0pLFxyXG5cclxuXHRcdGNzcy4kc3R5bGUoIFwiaHRtbFwiLCB7IGhlaWdodDogXCIxMDAlXCIgfSksXHJcblxyXG5cdFx0Y3NzLiRzdHlsZSggXCJib2R5XCIsIHsgaGVpZ2h0OiBcIjEwMCVcIiwgbWFyZ2luOiAwIH0pLFxyXG5cclxuXHRcdGNzcy4kc3R5bGUoIFwicHJlXCIsIHsgZm9udEZhbWlseTogXCInQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2VcIiwgbWFyZ2luOiAwIH0pLFxyXG5cdF1cclxuXHJcblx0bGF5b3V0ID0gY3NzLiRjbGFzcyh7fSlcclxuXHRkYXRhID0gY3NzLiRjbGFzcyh7fSlcclxuXHJcblx0dGFibGUgPSBjc3MuJHN0eWxlKCBcInRhYmxlXCIsIHtcclxuXHRcdFwiJlwiOiBbXHJcblx0XHRcdFt0aGlzLmxheW91dCwge1x0Ly8gdGFibGUubGF5b3V0XHJcblx0XHRcdFx0Ym9yZGVyOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFwiJiBcIjogW1tcInRyXCIsIHtcdC8vIHRhYmxlLmxheW91dCB0clxyXG5cdFx0XHRcdFx0Ym9yZGVyOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFwiJiBcIjogW1tcInRkXCIsIHsgYm9yZGVyOiBcIm5vbmVcIiwgcGFkZGluZzogNCB9XV1cdC8vIHRhYmxlLmxheW91dCB0ciB0ZFxyXG5cdFx0XHRcdH1dXVxyXG5cdFx0XHR9XSxcclxuXHJcblx0XHRcdFt0aGlzLmRhdGEsIHtcdC8vIHRhYmxlLmRhdGFcclxuXHRcdFx0XHRib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiZ3JleVwiXSwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcclxuXHRcdFx0XHRcIiZcIjogW1xyXG5cdFx0XHRcdFx0W1wiJiB0aCwgJiB0ZFwiLCB7XHQvLyB0YWJsZS5kYXRhIHRoLCB0YWJsZS5kYXRhIHRkXHJcblx0XHRcdFx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG5cdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0XHJcblx0XHRcdFx0XHR9XSxcclxuXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XSxcclxuXHRcdF1cclxuXHR9KVxyXG5cclxuXHRibG9jayA9IGNzcy4kY2xhc3MoeyBtYXJnaW5Ub3A6IDggfSlcclxuXHJcblx0ZGVzY3IgPSBjc3MuJGNsYXNzKHt9KVxyXG5cclxuXHRwID0gY3NzLiRzdHlsZSggXCJwXCIsIHtcclxuXHRcdFwiJlwiOiBbXHJcblx0XHRcdFt0aGlzLmRlc2NyLCB7IG1hcmdpbkxlZnQ6IFwiMWVtXCIsIG1hcmdpblJpZ2h0OiBcIjFlbVwiIH1dLFxyXG5cdFx0XVxyXG5cdH0pXHJcblxyXG5cdG1hdGNoQXJlYSA9IGNzcy4kY2xhc3Moe1xyXG5cdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBicm93blwiLFxyXG5cdFx0cGFkZGluZzogMixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJiZWlnZVwiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImF1dG9cIixcclxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0ZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuXHR9KVxyXG5cclxuXHRyZXN1bHRJY29uID0gY3NzLiRjbGFzcyh7XHJcblx0XHRmb250U2l6ZTogNDgsXHJcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG5cdH0pXHJcblx0XHJcblx0bWF0Y2hSZXN1bHRFcnJvcnMgPSBjc3MuJGNsYXNzKHtcclxuXHRcdHBhZGRpbmc6IDQsXHJcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcclxuXHR9KVxyXG5cclxuXHRydWxlcnMgPSBjc3MuJGNsYXNzKHtcclxuXHRcdGNvbG9yOiBcImJsdWVcIixcclxuXHRcdG1hcmdpbjogMCxcclxuXHR9KVxyXG5cdFxyXG5cdHN0cmluZyA9IGNzcy4kY2xhc3Moe1xyXG5cdFx0Y29sb3I6IFwiZ3JlZW5cIixcclxuXHR9KVxyXG5cdFxyXG5cdHBhcnNpbmdBcmVhID0gY3NzLiRjbGFzcyh7XHJcblx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIGJyb3duXCIsXHJcblx0XHRwYWRkaW5nOiAyLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcImJlaWdlXCIsXHJcblx0XHRvdmVyZmxvd1g6IFwiYXV0b1wiLFxyXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdH0pXHJcblx0XHJcblx0cGFyc2luZ1Jlc3VsdCA9IGNzcy4kY2xhc3Moe1xyXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG5cdH0pXHJcblx0XHJcblx0cGFyc2VkU2VnbWVudEZpZWxkcyA9IGNzcy4kY2xhc3Moe1xyXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdH0pXHJcblx0XHJcblx0XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCBzdHlsZXMgPSBjc3MuJGFjdGl2YXRlKCBTdHlsZXMpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX187Il0sInNvdXJjZVJvb3QiOiIifQ==