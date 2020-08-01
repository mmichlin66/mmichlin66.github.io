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

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainForm = void 0;
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

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
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

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
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
exports.styles = css.activate(Styles);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbkZvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1jc3NcIixcImNvbW1vbmpzMlwiOlwibWltY3NzXCIsXCJjb21tb25qc1wiOlwibWltY3NzXCIsXCJhbWRcIjpcIm1pbWNzc1wifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibWltdXJsXCIsXCJjb21tb25qczJcIjpcIm1pbXVybFwiLFwiY29tbW9uanNcIjpcIm1pbXVybFwiLFwiYW1kXCI6XCJtaW11cmxcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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LEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNuQixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxDQUFDO1NBQ1QsQ0FBQztRQUVGLFdBQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ25CLEtBQUssRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUVGLGdCQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN4QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsZUFBZSxFQUFFLE9BQU87WUFDeEIsU0FBUyxFQUFFLE1BQU07WUFDakIsT0FBTyxFQUFFLE1BQU07WUFDZixhQUFhLEVBQUUsUUFBUTtTQUN2QixDQUFDO1FBRUYsa0JBQWEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsYUFBYSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztRQUVGLHdCQUFtQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDaEMsT0FBTyxFQUFFLE1BQU07WUFDZixhQUFhLEVBQUUsUUFBUTtTQUN2QixDQUFDO0lBR0gsQ0FBQztDQUFBO0FBSVUsY0FBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUUsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3RIMUMsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoibWltdXJsLWRlbW8uZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW1jc3NcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltYmxcIiwgXCJtaW1jc3NcIiwgXCJtaW11cmxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltY3NzXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKSA6IGZhY3Rvcnkocm9vdFtcIm1pbWJsXCJdLCByb290W1wibWltY3NzXCJdLCByb290W1wibWltdXJsXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW11cmxfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL21haW4uanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCI7XHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCJtaW1jc3NcIjtcclxuaW1wb3J0IHtzdHlsZXN9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbkZvcm0gZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwYXR0ZXJuOiBzdHJpbmc7XHJcblx0cGF0dGVyblJ1bGVyMTogc3RyaW5nO1xyXG5cdHBhdHRlcm5SdWxlcjI6IHN0cmluZ1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdHVybFJ1bGVyMTogc3RyaW5nO1xyXG5cdHVybFJ1bGVyMjogc3RyaW5nXHJcblx0cGF0dGVyblBhcnNpbmdFcnJvcjogRXJyb3I7XHJcblx0cGFyc2VkUGF0dGVybjogbWltdXJsLklQYXJzZWRVcmxQYXR0ZXJuO1xyXG5cdHVybFBhcnNpbmdFcnJvcjogRXJyb3I7XHJcblx0cGFyc2VkVXJsOiBtaW11cmwuSVBhcnNlZEFjdHVhbFVSTDtcclxuXHRtYXRjaFJlc3VsdDogbWltdXJsLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQ7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNYWluIHJlbmRlciBtZXRob2RcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMTJweFwifX0+XHJcblx0XHRcdDxoMj5VUkwgUGFyc2luZyBhbmQgTWF0Y2hpbmc8L2gyPlxyXG5cclxuXHRcdFx0PHA+VGhpcyBwYWdlIGRlbW9uc3RyYXRlcyB0aGUgY2FwYWJpbGl0aWVzIG9mIHRoZSA8Yj5taW11cmw8L2I+IGxpYnJhcnlcclxuXHRcdFx0Zm9yIFVSTCBwYXJzaW5nIGFuZCBtYXRjaGluZy4gRW50ZXIgVVJMIHBhdHRlcm4gYW5kIFVSTC4gUGFyc2luZyBhbmQgbWF0Y2hpbmcgcmVzdWx0cyB3aWxsXHJcblx0XHRcdGJlIGRpc3BsYXllZCBiZWxvdy48L3A+XHJcblxyXG5cdFx0XHR7dGhpcy5yZW5kZXJGb3JtKCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlck1hdGNoUmVzdWx0KCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlclVybFBhdHRlcm4oKX1cclxuXHRcdFx0e3RoaXMucmVuZGVyQWN0dWFsVXJsKCl9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5wdXQgZmllbGRzIGZybyBVUkwgcGF0dGVybiBhbmQgYWN0dWFsIFVSTFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyRm9ybSgpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzPXtzdHlsZXMubGF5b3V0Lm5hbWV9PlxyXG5cdFx0XHQ8Y29sZ3JvdXA+XHJcblx0XHRcdFx0PGNvbCBzdHlsZT17e3RleHRBbGlnbjpcInJpZ2h0XCIsIHZlcnRpY2FsQWxpZ246XCJjZW50ZXJcIn19Lz5cclxuXHRcdFx0XHQ8Y29sIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLCB2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsIHdpZHRoOiBcIjEwMCVcIn19Lz5cclxuXHRcdFx0PC9jb2xncm91cD5cclxuXHRcdFx0PHRyPlxyXG5cdFx0XHRcdDx0ZD5QYXR0ZXJuOjwvdGQ+XHJcblx0XHRcdFx0PHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBpbnB1dD17dGhpcy5vblBhdHRlcm5DaGFuZ2V9IC8+PC90ZD5cclxuXHRcdFx0PC90cj5cclxuXHRcdFx0PHRyPlxyXG5cdFx0XHRcdDx0ZD5VUkw6PC90ZD5cclxuXHRcdFx0XHQ8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGlucHV0PXt0aGlzLm9uVXJsQ2hhbmdlfSAvPjwvdGQ+XHJcblx0XHRcdDwvdHI+XHJcblx0XHQ8L3RhYmxlPlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgYXJlYSB3aXRoIHRoZSBtYXRjaGluZyByZXN1bHRzXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJNYXRjaFJlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55O1xyXG5cdFx0aWYgKCF0aGlzLnBhcnNlZFBhdHRlcm4gfHwgIXRoaXMucGFyc2VkVXJsKVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50ID0gPHAgY2xhc3M9e3N0eWxlcy5kZXNjci5uYW1lfT5XaGVuIHlvdSB0eXBlIGEgdmFsaWQgcGF0dGVybiBhbmQgVVJMLCB0aGlzIGFyZWEgd2lsbCBzaG93IHRoZSBtYXRjaGluZyByZXN1bHRzPC9wPjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCF0aGlzLm1hdGNoUmVzdWx0LnN1Y2Nlc3MpXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPXtzdHlsZXMucmVzdWx0SWNvbi5uYW1lfSBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e1wiXFx1MjYzOVwifTwvc3Bhbj5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJNYXRjaFJlc3VsdEVycm9ycyggdGhpcy5tYXRjaFJlc3VsdC5lcnJvcnMpfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD5cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9e3N0eWxlcy5yZXN1bHRJY29uLm5hbWV9IHN0eWxlPXt7Y29sb3I6IFwiZ3JlZW5cIn19PntcIlxcdTI2M0FcIn08L3NwYW4+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyTWF0Y2hSZXN1bHRGaWVsZHMoIHRoaXMubWF0Y2hSZXN1bHQuZmllbGRzKX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3N0eWxlcy5ibG9jay5uYW1lfT5cclxuXHRcdFx0PGgzPk1hdGNoIFJlc3VsdDwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3M9e3N0eWxlcy5tYXRjaEFyZWEubmFtZX0+e2NvbnRlbnR9PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgZmllbGQgdmFsdWVzIG9idGFpbmVkIGR1cmluZyBtYXRjaGluZy5cclxuXHQgKiBAcGFyYW0gZmllbGRzIFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHRhYmxlIHJvd3MgLSBvbmUgcm93IHBlciBmaWVsZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlck1hdGNoUmVzdWx0RmllbGRzKCBmaWVsZHM6IG1pbXVybC5GaWVsZEJhZyk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBmaWVsZFJvd3M6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBmaWVsZE5hbWUgaW4gZmllbGRzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZmllbGRWYWx1ZSA9IGZpZWxkc1tmaWVsZE5hbWVdO1xyXG5cdFx0XHRsZXQgZmllbGRWYWx1ZUFzU3RyaW5nID0gZmllbGRWYWx1ZSA9PT0gdW5kZWZpbmVkXHJcblx0XHRcdFx0XHQ/IFwidW5kZWZpbmVkXCIgOiBmaWVsZFZhbHVlID09PSBudWxsXHJcblx0XHRcdFx0XHQ/IFwibnVsbFwiIDogaXNOYU4oZmllbGRWYWx1ZSBhcyBudW1iZXIpXHJcblx0XHRcdFx0XHQ/IFwiTmFOXCIgOiBKU09OLnN0cmluZ2lmeSggZmllbGRWYWx1ZSk7XHJcblx0XHRcdGZpZWxkUm93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPjxwcmU+e2ZpZWxkTmFtZX08L3ByZT48L3RkPlxyXG5cdFx0XHRcdDx0ZD48cHJlPnt0aGlzLnJlbmRlckZpZWxkVmFsdWUoZmllbGRzW2ZpZWxkTmFtZV0pfTwvcHJlPjwvdGQ+XHJcblx0XHRcdDwvdHI+KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZmllbGRSb3dzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiA8dGFibGUgY2xhc3M9e3N0eWxlcy5kYXRhLm5hbWV9PlxyXG5cdFx0XHRcdDx0cj48dGg+RmllbGQ8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuXHRcdFx0XHR7ZmllbGRSb3dzfVxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gPHA+Tm8gZmllbGRzIHdlcmUgZXh0cmFjdGVkIGZyb20gdGhlIFVSTDwvcD5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgZmllbGQgdmFsdWUocykgYWNjb3JkaW5nIHRvIGl0cyB0eXBlIGFuZCB3aXRoIGFwcHJvcHJpYXRlIHN0eWxlcy5cclxuXHQgKiBAcGFyYW0gZmllbGRWYWx1ZSBcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlckZpZWxkVmFsdWUoIGZpZWxkVmFsdWU6IG1pbXVybC5GaWVsZFZhbHVlVHlwZSk6IGFueVxyXG5cdHtcclxuXHRcdGlmIChmaWVsZFZhbHVlID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+dW5kZWZpbmVkPC9zcGFuPjtcclxuXHRcdGVsc2UgaWYgKGZpZWxkVmFsdWUgPT09IG51bGwpXHJcblx0XHRcdHJldHVybiA8c3BhbiBzdHlsZT17e2NvbG9yOlwiYmx1ZVwifX0+bnVsbDwvc3Bhbj47XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJncmVlblwifX0+e2BcXFwiJHtmaWVsZFZhbHVlfVxcXCJgfTwvc3Bhbj47XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gXCJudW1iZXJcIilcclxuXHRcdHtcclxuXHRcdFx0aWYgKGlzTmFOKGZpZWxkVmFsdWUgYXMgbnVtYmVyKSlcclxuXHRcdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pk5hTjwvc3Bhbj47XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gPHNwYW4gc3R5bGU9e3tjb2xvcjpcInJlZFwifX0+e2ZpZWxkVmFsdWV9PC9zcGFuPjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBmaWVsZFZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0cmV0dXJuIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT57YCR7ZmllbGRWYWx1ZX1gfTwvc3Bhbj47XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBmaWVsZFZhbHVlKSlcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pls8L3NwYW4+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZmllbGRWYWx1ZS5tYXAoIChpdGVtLCBpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0PG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHR7aW5kZXggPiAwICYmIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+LCA8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckZpZWxkVmFsdWUoIGl0ZW0pfVxyXG5cdFx0XHRcdFx0XHQ8L21pbS5GcmFnbWVudD5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pl08L3NwYW4+XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBvbmUgb3IgbW9yZSBlcnJvcnMgcmVjZWl2ZWQgZHVyaW5nIHRoZSBtYXRjaGluZy5cclxuXHQgKiBAcGFyYW0gZXJyb3JzIFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyTWF0Y2hSZXN1bHRFcnJvcnMoIGVycm9yczogc3RyaW5nW10pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17c3R5bGVzLm1hdGNoUmVzdWx0RXJyb3JzLm5hbWV9PlxyXG5cdFx0XHR7ZXJyb3JzLm1hcCggKGVycm9yOiBzdHJpbmcpID0+IDxzcGFuPntlcnJvcn08L3NwYW4+KX1cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFyZWEgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhcnNlZCBVUkwgcGF0dGVyblxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyVXJsUGF0dGVybigpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55O1xyXG5cdFx0aWYgKCF0aGlzLnBhdHRlcm4gfHwgdGhpcy5wYXR0ZXJuLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudCA9IDxwIGNsYXNzPXtzdHlsZXMuZGVzY3IubmFtZX0+V2hlbiB5b3UgdHlwZSBhIHBhdHRlcm4sIHRoaXMgYXJlYSB3aWxsIHNob3cgaG93IGl0IGlzIHBhcnNlZDwvcD47XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlclN0cmluZ1dpdGhSdWxlcnMoIHRoaXMucGF0dGVybiwgdGhpcy5wYXR0ZXJuUnVsZXIxLCB0aGlzLnBhdHRlcm5SdWxlcjIpfVxyXG5cdFx0XHRcdDxociBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sb3I6IFwiYnJvd25cIiwgYm9yZGVyV2lkdGg6IFwiMC41cHhcIn19Lz5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJQYXR0ZXJuUGFyc2luZ1Jlc3VsdCgpfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3N0eWxlcy5ibG9jay5uYW1lfT5cclxuXHRcdFx0PGgzPlVSTCBQYXR0ZXJuPC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz17c3R5bGVzLnBhcnNpbmdBcmVhLm5hbWV9Pntjb250ZW50fTwvZGl2PlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgVVJMIHBhdHRlcm4gcGFyc2luZyByZXN1bHQ6IGVpdGhlciB0aGUgc3VjY2Vzc2ZsbHkgcGFyc2VkIHBhdHRlcm4gb3IgdGhlXHJcblx0ICogcGFyc2luZyBlcnJvci5cclxuXHQgKi9cdFxyXG5cdHByaXZhdGUgcmVuZGVyUGF0dGVyblBhcnNpbmdSZXN1bHQoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGljb25Db2xvcjogQ3NzQ29sb3IgPSB0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IgPyBcInJlZFwiIDogXCJncmVlblwiO1xyXG5cdFx0bGV0IGljb25Db2RlID0gdGhpcy5wYXR0ZXJuUGFyc2luZ0Vycm9yID8gXCJcXHUyNjM5XCIgOiBcIlxcdTI2M0FcIjtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3JcclxuXHRcdFx0PyA8c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIiwgcGFkZGluZ0xlZnQ6XCI4cHhcIn19Pnt0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IubWVzc2FnZX08L3NwYW4+XHJcblx0XHRcdDogdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuKCk7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3N0eWxlcy5wYXJzaW5nUmVzdWx0Lm5hbWV9PlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz17c3R5bGVzLnJlc3VsdEljb24ubmFtZX0gc3R5bGU9e3tjb2xvcjogaWNvbkNvbG9yfX0+e2ljb25Db2RlfTwvc3Bhbj5cclxuXHRcdFx0e3Jlc3VsdH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgc3VjY2Vzc2Z1bGx5IHBhcnNlZCBVUkwgcGF0dGVybi5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm4oKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzcz17c3R5bGVzLmRhdGEubmFtZX0+XHJcblx0XHRcdDx0cj48dGg+UGFydDwvdGg+PHRoPlNlZ21lbnQ8L3RoPjx0aD5Mb2NhdGlvbjwvdGg+PHRoPlJlZ0V4cDwvdGg+PHRoPkZpZWxkczwvdGg+PC90cj5cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybi5wcm90b2NvbCAmJiB0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggXCJQcm90b2NvbFwiLCB0aGlzLnBhcnNlZFBhdHRlcm4ucHJvdG9jb2wuZ2V0U2VnbWVudHMoKSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4uaG9zdG5hbWUgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiSG9zdG5hbWVcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLmhvc3RuYW1lLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0XHR7dGhpcy5wYXJzZWRQYXR0ZXJuLnBvcnQgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuU2VnbWVudHMoIFwiUG9ydFwiLCB0aGlzLnBhcnNlZFBhdHRlcm4ucG9ydC5nZXRTZWdtZW50cygpKX1cclxuXHRcdFx0e3RoaXMucGFyc2VkUGF0dGVybi5wYXRoICYmIHRoaXMucmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCBcIlBhdGhcIiwgdGhpcy5wYXJzZWRQYXR0ZXJuLnBhdGguZ2V0U2VnbWVudHMoKSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4ucXVlcnkgJiYgdGhpcy5yZW5kZXJQYXJzZWRQYXR0ZXJuUXVlcnkoIHRoaXMucGFyc2VkUGF0dGVybi5xdWVyeSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFBhdHRlcm4uaGFzaCAmJiB0aGlzLnJlbmRlclBhcnNlZFBhdHRlcm5TZWdtZW50cyggXCJIYXNoXCIsIHRoaXMucGFyc2VkUGF0dGVybi5oYXNoLmdldFNlZ21lbnRzKCkpfVxyXG5cdFx0PC90YWJsZT5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgb25lIG9yIG1vcmUgc2VnZW1lbnRzIGZyb20gdGhlIGdpdmVuIG5hbWVkIFVSTCBwYXJ0IG9mIHRoZSBVUkwgcGF0dGVyblxyXG5cdCAqIEBwYXJhbSB1cmxQYXJ0TmFtZSBcclxuXHQgKiBAcGFyYW0gc2VnbWVudHMgXHJcblx0ICogQHJldHVybnMgYXJyYXkgb2YgdGFibGUgcm93cyAtIG9uZSBwZXIgZWFjaCBzZWdtZW50LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcmVuZGVyUGFyc2VkUGF0dGVyblNlZ21lbnRzKCB1cmxQYXJ0TmFtZTogc3RyaW5nLCBzZWdtZW50czogbWltdXJsLklQYXJzZWRTZWdtZW50W10pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoIXNlZ21lbnRzIHx8IHNlZ21lbnRzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcnRSb3dzOiBhbnlbXSA9IFtdO1xyXG5cdFx0bGV0IGZpcnN0U2VnbWVudCA9IHNlZ21lbnRzWzBdO1xyXG5cdFx0cGFydFJvd3MucHVzaCggPHRyPlxyXG5cdFx0XHQ8dGQgcm93c3Bhbj17c2VnbWVudHMubGVuZ3RofT57dXJsUGFydE5hbWV9PC90ZD5cclxuXHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBmaXJzdFNlZ21lbnQubG9jYXRpb24uc3RhcnQsIGZpcnN0U2VnbWVudC5sb2NhdGlvbi5sZW5ndGgpfTwvdGQ+XHJcblx0XHRcdDx0ZD57dGhpcy5nZXRMb2NhdGlvblN0cmluZyggZmlyc3RTZWdtZW50LmxvY2F0aW9uKX08L3RkPlxyXG5cdFx0XHQ8dGQ+e2ZpcnN0U2VnbWVudC5yZWdFeHB9PC90ZD5cclxuXHRcdFx0PHRkPnt0aGlzLnJlbmRlclBhcnNlZFNlZ21lbnRGaWVsZHMoIGZpcnN0U2VnbWVudCl9PC90ZD5cclxuXHRcdDwvdHI+KTtcclxuXHJcblx0XHRmb3IoIGxldCBpID0gMTsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xyXG5cdFx0XHRwYXJ0Um93cy5wdXNoKCA8dHI+XHJcblx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBzZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBzZWdtZW50LmxvY2F0aW9uLmxlbmd0aCl9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIHNlZ21lbnQubG9jYXRpb24pfTwvdGQ+XHJcblx0XHRcdFx0PHRkPntzZWdtZW50LnJlZ0V4cH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50KX08L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRSb3dzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBpbmZvcm1hdGlvbiBhYm91dCBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBwYXJzZWQgZnJvbSB0aGUgVVJMIHBhdHRlcm5cclxuXHQgKiBAcGFyYW0gcXVlcnkgXHJcblx0ICogQHJldHVybnMgYXJyYXkgb2Ygcm93cyAtIG9uZSBwZXIgcXVlcnkgc3RyaW5nICBwYXJhbWV0ZXJcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFBhdHRlcm5RdWVyeSggcXVlcnk6IG1pbXVybC5JUGFyc2VkUXVlcnlTdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoIXF1ZXJ5IHx8IE9iamVjdC5rZXlzKCBxdWVyeS5wYXJzZWRRU1BzKS5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJ0Um93czogYW55W10gPSBbXTtcclxuXHRcdGZvciggbGV0IHFzcE5hbWUgaW4gcXVlcnkucGFyc2VkUVNQcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBxdWVyeS5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQ7XHJcblx0XHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHQ8dGQ+e2BRdWVyeSBbJHtxc3BOYW1lfV1gfTwvdGQ+XHJcblx0XHRcdFx0PHRkPnt0aGlzLnBhdHRlcm4uc3Vic3RyKCBzZWdtZW50LmxvY2F0aW9uLnN0YXJ0LCBzZWdtZW50LmxvY2F0aW9uLmxlbmd0aCl9PC90ZD5cclxuXHRcdFx0XHQ8dGQ+e3RoaXMuZ2V0TG9jYXRpb25TdHJpbmcoIHNlZ21lbnQubG9jYXRpb24pfTwvdGQ+XHJcblx0XHRcdFx0PHRkPntzZWdtZW50LnJlZ0V4cH08L3RkPlxyXG5cdFx0XHRcdDx0ZD57dGhpcy5yZW5kZXJQYXJzZWRTZWdtZW50RmllbGRzKCBzZWdtZW50KX08L3RkPlxyXG5cdFx0XHQ8L3RyPik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRSb3dzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGxvY2F0aW9uIHdpdGhpbiB0aGUgcGFyc2VkIHN0cmluZy5cclxuXHQgKiBAcGFyYW0gbG9jYXRpb24gXHJcblx0ICogQHJldHVybnMgU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBsb2NhdGlvbiBpbiB0aGUgZm9ybWF0IFwic3RhcnQgLSBlbmQgKGxlbmd0aClcIlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZ2V0TG9jYXRpb25TdHJpbmcoIGxvY2F0aW9uOiBtaW11cmwuUGFyc2VkTG9jYXRpb24pOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7bG9jYXRpb24uc3RhcnR9IC0gJHtsb2NhdGlvbi5zdGFydCArIGxvY2F0aW9uLmxlbmd0aCAtIDF9ICgke2xvY2F0aW9uLmxlbmd0aH0pYDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgaW5mb3JtYXRpb24gYWJvdXQgZmllbGRzIGluIHRoZSBnaXZlbiBzZWdtZW50cy5cclxuXHQgKiBAcGFyYW0gc2VnbWVudCBcclxuXHQgKiBAcmV0dXJucyA8ZGl2PiBlbGVtZW50IHJlcHJlc2VudGluZyBhIHZlcnRpY2FsIGJveCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGVhY2ggZmllbGRcclxuXHQgKiBvbiBhIHNlcGFyYXRlIHJvdy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlclBhcnNlZFNlZ21lbnRGaWVsZHMoIHNlZ21lbnQ6IG1pbXVybC5JUGFyc2VkU2VnbWVudCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBmaWVsZFNwYW5zOiBhbnlbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgZmllbGQgb2Ygc2VnbWVudC5maWVsZHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBoYXNEZWZhdWx0VmFsdWUgPSBmYWxzZTtcclxuXHRcdFx0aWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LlN0cmluZyAmJiBmaWVsZC5kZWZhdWx0VmFsdWUgIT09IFwiXCIpXHJcblx0XHRcdFx0aGFzRGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAoZmllbGQuZm9ybWF0ID09PSBtaW11cmwuRmllbGRGb3JtYXQuSW50ZWdlciAmJiAhaXNOYU4oZmllbGQuZGVmYXVsdFZhbHVlIGFzIG51bWJlcikpXHJcblx0XHRcdFx0aGFzRGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAoZmllbGQuZm9ybWF0ID09PSBtaW11cmwuRmllbGRGb3JtYXQuRmxvYXQgJiYgIWlzTmFOKGZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIpKVxyXG5cdFx0XHRcdGhhc0RlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKGZpZWxkLmZvcm1hdCA9PT0gbWltdXJsLkZpZWxkRm9ybWF0LkJvb2xlYW4gJiYgZmllbGQuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aGFzRGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZpZWxkU3BhbnMucHVzaCggPHNwYW4+XHJcblx0XHRcdFx0e2ZpZWxkLm5hbWV9XHJcblx0XHRcdFx0e2ZpZWxkLmlzT3B0aW9uYWwgJiYgXCI/XCJ9XHJcblx0XHRcdFx0e1wiOiBcIn1cclxuXHRcdFx0XHR7bWltdXJsLkZpZWxkRm9ybWF0W2ZpZWxkLmZvcm1hdF19XHJcblx0XHRcdFx0e2hhc0RlZmF1bHRWYWx1ZSAmJiBcIiA9IFwifVxyXG5cdFx0XHRcdHtoYXNEZWZhdWx0VmFsdWUgJiYgdGhpcy5yZW5kZXJGaWVsZFZhbHVlKCBmaWVsZC5kZWZhdWx0VmFsdWUpfVxyXG5cdFx0XHQ8L3NwYW4+KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17c3R5bGVzLnBhcnNlZFNlZ21lbnRGaWVsZHMubmFtZX0+XHJcblx0XHRcdHtmaWVsZFNwYW5zfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgYXJlYSB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFyc2VkIGFjdHVhbCBVUkxcclxuXHQgKi9cclxuXHRwcml2YXRlIHJlbmRlckFjdHVhbFVybCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55O1xyXG5cdFx0aWYgKCF0aGlzLnVybCB8fCB0aGlzLnVybC5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8cCBjbGFzcz17c3R5bGVzLmRlc2NyLm5hbWV9PldoZW4geW91IHR5cGUgYSBVUkwsIHRoaXMgYXJlYSB3aWxsIHNob3cgaG93IGl0IGlzIHBhcnNlZDwvcD47XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQgPSA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlclN0cmluZ1dpdGhSdWxlcnMoIHRoaXMudXJsLCB0aGlzLnVybFJ1bGVyMSwgdGhpcy51cmxSdWxlcjIpfVxyXG5cdFx0XHRcdDxociBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sb3I6IFwiYnJvd25cIiwgYm9yZGVyV2lkdGg6IFwiMC41cHhcIn19Lz5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJVcmxQYXJzaW5nUmVzdWx0KCl9XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17c3R5bGVzLmJsb2NrLm5hbWV9PlxyXG5cdFx0XHQ8aDM+QWN0dWFsIFVSTDwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3M9e3N0eWxlcy5wYXJzaW5nQXJlYS5uYW1lfT57Y29udGVudH08L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGFjdHVhbCBVUkwgcGFyc2luZyByZXN1bHQ6IGVpdGhlciB0aGUgc3VjY2Vzc2ZsbHkgcGFyc2VkIFVSTCBvciB0aGUgcGFyc2luZyBlcnJvci5cclxuXHQgKi9cdFxyXG5cdHByaXZhdGUgcmVuZGVyVXJsUGFyc2luZ1Jlc3VsdCgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgaWNvbkNvbG9yOiBDc3NDb2xvciA9IHRoaXMudXJsUGFyc2luZ0Vycm9yID8gXCJyZWRcIiA6IFwiZ3JlZW5cIjtcclxuXHRcdGxldCBpY29uQ29kZSA9IHRoaXMudXJsUGFyc2luZ0Vycm9yID8gXCJcXHUyNjM5XCIgOiBcIlxcdTI2M0FcIjtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnVybFBhcnNpbmdFcnJvclxyXG5cdFx0XHQ/IDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLCBwYWRkaW5nTGVmdDpcIjhweFwifX0+e3RoaXMudXJsUGFyc2luZ0Vycm9yLm1lc3NhZ2V9PC9zcGFuPlxyXG5cdFx0XHQ6IHRoaXMucmVuZGVyUGFyc2VkVXJsKCk7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3N0eWxlcy5wYXJzaW5nUmVzdWx0Lm5hbWV9PlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz17c3R5bGVzLnJlc3VsdEljb24ubmFtZX0gc3R5bGU9e3tjb2xvcjogaWNvbkNvbG9yfX0+e2ljb25Db2RlfTwvc3Bhbj5cclxuXHRcdFx0e3Jlc3VsdH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgc3VjY2Vzc2Z1bGx5IHBhcnNlZCBVUkwuXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRVcmwoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzcz17c3R5bGVzLmRhdGEubmFtZX0+XHJcblx0XHRcdDx0cj48dGg+UGFydDwvdGg+PHRoPkNvbnRlbnQ8L3RoPjwvdHI+XHJcblx0XHRcdHt0aGlzLnBhcnNlZFVybC5wcm90b2NvbCAmJiA8dHI+PHRkPlByb3RvY29sPC90ZD48dGQ+e3RoaXMucGFyc2VkVXJsLnByb3RvY29sfTwvdGQ+PC90cj59XHJcblx0XHRcdHt0aGlzLnBhcnNlZFVybC5ob3N0bmFtZSAmJiA8dHI+PHRkPkhvc3RuYW1lPC90ZD48dGQ+e3RoaXMucGFyc2VkVXJsLmhvc3RuYW1lLmpvaW4oXCIuXCIpfTwvdGQ+PC90cj59XHJcblx0XHRcdHt0aGlzLnBhcnNlZFVybC5wb3J0ICYmIDx0cj48dGQ+UG9ydDwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5wb3J0fTwvdGQ+PC90cj59XHJcblx0XHRcdHt0aGlzLnBhcnNlZFVybC5wYXRoICYmIDx0cj48dGQ+UGF0aDwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5wYXRoLmpvaW4oXCIvXCIpfTwvdGQ+PC90cj59XHJcblx0XHRcdHt0aGlzLnBhcnNlZFVybC5xdWVyeSAmJiB0aGlzLnJlbmRlclBhcnNlZEFjdHVhbFF1ZXJ5KCB0aGlzLnBhcnNlZFVybC5xdWVyeSl9XHJcblx0XHRcdHt0aGlzLnBhcnNlZFVybC5oYXNoICYmIDx0cj48dGQ+SGFzaDwvdGQ+PHRkPnt0aGlzLnBhcnNlZFVybC5oYXNofTwvdGQ+PC90cj59XHJcblx0XHQ8L3RhYmxlPlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBpbmZvcm1hdGlvbiBhYm91dCBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBwYXJzZWQgZnJvbSB0aGUgVVJMXHJcblx0ICogQHBhcmFtIHF1ZXJ5IFxyXG5cdCAqIEByZXR1cm5zIGFycmF5IG9mIHJvd3MgLSBvbmUgcGVyIHF1ZXJ5IHN0cmluZyAgcGFyYW1ldGVyXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZW5kZXJQYXJzZWRBY3R1YWxRdWVyeSggcXVlcnk6IHsgW1A6IHN0cmluZ106IHN0cmluZ1tdIH0pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoIXF1ZXJ5IHx8IE9iamVjdC5rZXlzKCBxdWVyeSkubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgcGFydFJvd3M6IGFueVtdID0gW107XHJcblx0XHRmb3IoIGxldCBxc3BOYW1lIGluIHF1ZXJ5KVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcXNwVmFsdWVzID0gcXVlcnlbcXNwTmFtZV07XHJcblx0XHRcdHBhcnRSb3dzLnB1c2goIDx0cj5cclxuXHRcdFx0XHQ8dGQ+e2BRdWVyeSBbJHtxc3BOYW1lfV1gfTwvdGQ+XHJcblx0XHRcdFx0PHRkPntxc3BWYWx1ZXMubWFwKCAocXNwVmFsdWUpID0+IDxkaXY+e3FzcFZhbHVlID8gcXNwVmFsdWUgOiBcIjxlbXB0eT5cIn08L2Rpdj4pfTwvdGQ+XHJcblx0XHRcdDwvdHI+KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcGFydFJvd3M7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlclN0cmluZ1dpdGhSdWxlcnMoIHM6IHN0cmluZywgcnVsZXIxOiBzdHJpbmcsIHJ1bGVyMjpzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdFx0PHByZSBjbGFzcz17c3R5bGVzLnJ1bGVycy5uYW1lfT57cnVsZXIxfTxici8+e3J1bGVyMn08L3ByZT5cclxuXHRcdFx0PHByZSBjbGFzcz17c3R5bGVzLnN0cmluZy5uYW1lfT57c308L3ByZT5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblBhdHRlcm5DaGFuZ2UoZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhdHRlcm4gPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudHJpbSgpO1xyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25VcmxDaGFuZ2UoZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVybCA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZS50cmltKCk7XHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIHRoZSBVUkwgcGF0dGVybiBhbmQgdGhlIGFjdHVhbCBVUkwgKGlmIGV4aXN0KSBhbmQgaW52b2tlcyBtYXRjaGluZy4gVGhpcyBtZXRob2RcclxuXHQgKiBidWlsZHMgaW50ZXJuYWwgc3RydWN0dXJlcywgd2hpY2ggYXJlIHRoZW4gcmVwcmVzZW50ZWQgaW4gdGhlIFVJLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdXBkYXRlKClcclxuXHR7XHJcblx0XHQvLyBjbGVhbnVwIGN1cnJlbnQgZGF0YVxyXG5cdFx0dGhpcy5wYXR0ZXJuUnVsZXIxID0gXCJcIjtcclxuXHRcdHRoaXMucGF0dGVyblJ1bGVyMiA9IFwiXCI7XHJcblx0XHR0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcnNlZFBhdHRlcm4gPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnVybFJ1bGVyMSA9IFwiXCI7XHJcblx0XHR0aGlzLnVybFJ1bGVyMiA9IFwiXCI7XHJcblx0XHR0aGlzLnVybFBhcnNpbmdFcnJvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyc2VkVXJsID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5tYXRjaFJlc3VsdCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRpZiAodGhpcy5wYXR0ZXJuICYmIHRoaXMucGF0dGVybi5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjcmVhdGUgcnVsZXIgc3RyaW5nc1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHRoaXMucGF0dGVybi5sZW5ndGg7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBpQXNTdHJpbmcgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0bGV0IHIgPSBpICUgMTA7XHJcblx0XHRcdFx0dGhpcy5wYXR0ZXJuUnVsZXIxICs9IHIgPT09IDAgPyBpQXNTdHJpbmcgOiByID49IGlBc1N0cmluZy5sZW5ndGggPyBcIiBcIiA6IFwiXCI7XHJcblx0XHRcdFx0dGhpcy5wYXR0ZXJuUnVsZXIyICs9IHIudG9TdHJpbmcoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcGFyc2UgVVJMIHBhdHRlcm5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnBhcnNlZFBhdHRlcm4gPSBtaW11cmwucGFyc2VVcmxQYXR0ZXJuKCB0aGlzLnBhdHRlcm4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnBhdHRlcm5QYXJzaW5nRXJyb3IgPSBlcnI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBwYXJzZSBVUkxcclxuXHRcdGlmICh0aGlzLnVybCAmJiB0aGlzLnVybC5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjcmVhdGUgcnVsZXIgc3RyaW5nc1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHRoaXMudXJsLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGlBc1N0cmluZyA9IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRsZXQgciA9IGkgJSAxMDtcclxuXHRcdFx0XHR0aGlzLnVybFJ1bGVyMSArPSByID09PSAwID8gaUFzU3RyaW5nIDogciA+PSBpQXNTdHJpbmcubGVuZ3RoID8gXCIgXCIgOiBcIlwiO1xyXG5cdFx0XHRcdHRoaXMudXJsUnVsZXIyICs9IHIudG9TdHJpbmcoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnBhcnNlZFVybCA9IG1pbXVybC5wYXJzZVVSTCggdGhpcy51cmwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnVybFBhcnNpbmdFcnJvciA9IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1hdGNoIFVSTCBhZ2FpbnN0IHBhdHRlcm5cclxuXHRcdGlmICh0aGlzLnBhcnNlZFBhdHRlcm4gJiYgdGhpcy5wYXJzZWRVcmwpXHJcblx0XHRcdHRoaXMubWF0Y2hSZXN1bHQgPSBtaW11cmwubWF0Y2goIHRoaXMucGFyc2VkVXJsLCB0aGlzLnBhcnNlZFBhdHRlcm4pO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQge01haW5Gb3JtfSBmcm9tIFwiLi9NYWluRm9ybVwiO1xyXG5cclxuXHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmcm9tIGJvZHkub25sb2FkXHJcbnRoaXMubWltdXJsRGVtb01haW4gPSBmdW5jdGlvbiggYXBwUm9vdDogSFRNTEVsZW1lbnQpXHJcbntcclxuXHRtaW0ubW91bnQoIG5ldyBNYWluRm9ybSgpLCBhcHBSb290KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIm1pbWNzc1wiO1xyXG5cclxuXHJcblxyXG4vLy8gI2lmICFERUJVR1xyXG5jc3MuZW5hYmxlU2hvcnROYW1lcyggdHJ1ZSk7XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuY2xhc3MgU3R5bGVzIGV4dGVuZHMgY3NzLlN0eWxlRGVmaW5pdGlvblxyXG57XHJcblx0aW5pdCA9IFtcclxuXHRcdGNzcy4kc3R5bGUoIFwiKlwiLCB7XHJcblx0XHRcdGZvbnRGYW1pbHk6IFwiVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFNpemU6IDEyLFxyXG5cdFx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0fSksXHJcblxyXG5cdFx0Y3NzLiRzdHlsZSggXCJodG1sXCIsIHsgaGVpZ2h0OiBcIjEwMCVcIiB9KSxcclxuXHJcblx0XHRjc3MuJHN0eWxlKCBcImJvZHlcIiwgeyBoZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW46IDAgfSksXHJcblxyXG5cdFx0Y3NzLiRzdHlsZSggXCJwcmVcIiwgeyBmb250RmFtaWx5OiBcIidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZVwiLCBtYXJnaW46IDAgfSksXHJcblx0XVxyXG5cclxuXHRsYXlvdXQgPSBjc3MuJGNsYXNzKHt9KVxyXG5cdGRhdGEgPSBjc3MuJGNsYXNzKHt9KVxyXG5cclxuXHR0YWJsZSA9IGNzcy4kc3R5bGUoIFwidGFibGVcIiwge1xyXG5cdFx0XCImXCI6IFtcclxuXHRcdFx0W3RoaXMubGF5b3V0LCB7XHQvLyB0YWJsZS5sYXlvdXRcclxuXHRcdFx0XHRib3JkZXI6IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XCImIFwiOiBbW1widHJcIiwge1x0Ly8gdGFibGUubGF5b3V0IHRyXHJcblx0XHRcdFx0XHRib3JkZXI6IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XCImIFwiOiBbW1widGRcIiwgeyBib3JkZXI6IFwibm9uZVwiLCBwYWRkaW5nOiA0IH1dXVx0Ly8gdGFibGUubGF5b3V0IHRyIHRkXHJcblx0XHRcdFx0fV1dXHJcblx0XHRcdH1dLFxyXG5cclxuXHRcdFx0W3RoaXMuZGF0YSwge1x0Ly8gdGFibGUuZGF0YVxyXG5cdFx0XHRcdGJvcmRlcjogWzEsIFwic29saWRcIiwgXCJncmV5XCJdLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLFxyXG5cdFx0XHRcdFwiJlwiOiBbXHJcblx0XHRcdFx0XHRbXCImIHRoLCAmIHRkXCIsIHtcdC8vIHRhYmxlLmRhdGEgdGgsIHRhYmxlLmRhdGEgdGRcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcblx0XHRcdFx0XHRcdHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcblx0XHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDRcclxuXHRcdFx0XHRcdH1dLFxyXG5cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1dLFxyXG5cdFx0XVxyXG5cdH0pXHJcblxyXG5cdGJsb2NrID0gY3NzLiRjbGFzcyh7IG1hcmdpblRvcDogOCB9KVxyXG5cclxuXHRkZXNjciA9IGNzcy4kY2xhc3Moe30pXHJcblxyXG5cdHAgPSBjc3MuJHN0eWxlKCBcInBcIiwge1xyXG5cdFx0XCImXCI6IFtcclxuXHRcdFx0W3RoaXMuZGVzY3IsIHsgbWFyZ2luTGVmdDogXCIxZW1cIiwgbWFyZ2luUmlnaHQ6IFwiMWVtXCIgfV0sXHJcblx0XHRdXHJcblx0fSlcclxuXHJcblx0bWF0Y2hBcmVhID0gY3NzLiRjbGFzcyh7XHJcblx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIGJyb3duXCIsXHJcblx0XHRwYWRkaW5nOiAyLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcImJlaWdlXCIsXHJcblx0XHRvdmVyZmxvd1g6IFwiYXV0b1wiLFxyXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG5cdH0pXHJcblxyXG5cdHJlc3VsdEljb24gPSBjc3MuJGNsYXNzKHtcclxuXHRcdGZvbnRTaXplOiA0OCxcclxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcblx0fSlcclxuXHRcclxuXHRtYXRjaFJlc3VsdEVycm9ycyA9IGNzcy4kY2xhc3Moe1xyXG5cdFx0cGFkZGluZzogNCxcclxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG5cdH0pXHJcblxyXG5cdHJ1bGVycyA9IGNzcy4kY2xhc3Moe1xyXG5cdFx0Y29sb3I6IFwiYmx1ZVwiLFxyXG5cdFx0bWFyZ2luOiAwLFxyXG5cdH0pXHJcblx0XHJcblx0c3RyaW5nID0gY3NzLiRjbGFzcyh7XHJcblx0XHRjb2xvcjogXCJncmVlblwiLFxyXG5cdH0pXHJcblx0XHJcblx0cGFyc2luZ0FyZWEgPSBjc3MuJGNsYXNzKHtcclxuXHRcdGJvcmRlcjogXCIxcHggc29saWQgYnJvd25cIixcclxuXHRcdHBhZGRpbmc6IDIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmVpZ2VcIixcclxuXHRcdG92ZXJmbG93WDogXCJhdXRvXCIsXHJcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0fSlcclxuXHRcclxuXHRwYXJzaW5nUmVzdWx0ID0gY3NzLiRjbGFzcyh7XHJcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcblx0fSlcclxuXHRcclxuXHRwYXJzZWRTZWdtZW50RmllbGRzID0gY3NzLiRjbGFzcyh7XHJcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0fSlcclxuXHRcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IHN0eWxlcyA9IGNzcy5hY3RpdmF0ZSggU3R5bGVzKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltY3NzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fOyJdLCJzb3VyY2VSb290IjoiIn0=