(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mimurl"] = factory();
	else
		root["mimurl"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mimurlTypes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actual.ts":
/*!***********************!*\
  !*** ./src/actual.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Parses the given URL
function parseURL(url) {
    let parsedURL = {};
    // find protocol
    let hostnameIndex;
    let protocolSeparatorIndex = url.indexOf("://");
    if (protocolSeparatorIndex === 0)
        return null;
    else if (protocolSeparatorIndex > 0) {
        parsedURL.protocol = url.substr(0, protocolSeparatorIndex);
        hostnameIndex = protocolSeparatorIndex + 3;
    }
    else
        hostnameIndex = url[0] === '/' ? -1 : 0;
    let nextSearchIndexStart = hostnameIndex < 0 ? 0 : hostnameIndex;
    let colonIndex = url.indexOf(':', nextSearchIndexStart);
    let slashIndex = url.indexOf('/', nextSearchIndexStart);
    let questionIndex = url.indexOf('?', nextSearchIndexStart);
    let hashIndex = url.indexOf('#', nextSearchIndexStart);
    if (hostnameIndex >= 0) {
        if (colonIndex > 0)
            parsedURL.hostname = url.substr(hostnameIndex, colonIndex - hostnameIndex).split('.');
        else if (slashIndex > 0)
            parsedURL.hostname = url.substr(hostnameIndex, slashIndex - hostnameIndex).split('.');
        else if (questionIndex > 0)
            parsedURL.hostname = url.substr(hostnameIndex, questionIndex - hostnameIndex).split('.');
        else if (hashIndex > 0)
            parsedURL.hostname = url.substr(hostnameIndex, hashIndex - hostnameIndex).split('.');
        else
            parsedURL.hostname = url.substr(hostnameIndex).split('.');
        for (let i = 0; i < parsedURL.hostname.length; i++)
            parsedURL.hostname[i] = decodeURIComponent(parsedURL.hostname[i]);
    }
    if (colonIndex > 0) {
        if (slashIndex > 0)
            parsedURL.port = url.substr(colonIndex + 1, slashIndex - colonIndex - 1);
        else if (questionIndex > 0)
            parsedURL.port = url.substr(colonIndex + 1, questionIndex - colonIndex - 1);
        else if (hashIndex > 0)
            parsedURL.port = url.substr(colonIndex + 1, hashIndex - colonIndex - 1);
        else
            parsedURL.port = url.substr(colonIndex + 1);
    }
    // slash can be the first character if there is no hostname
    if (slashIndex >= 0) {
        if (questionIndex > 0)
            parsedURL.path = url.substr(slashIndex + 1, questionIndex - slashIndex - 1).split('/');
        else if (hashIndex > 0)
            parsedURL.path = url.substr(slashIndex + 1, hashIndex - slashIndex - 1).split('/');
        else
            parsedURL.path = url.substr(slashIndex + 1).split('/');
        for (let i = 0; i < parsedURL.path.length; i++)
            parsedURL.path[i] = decodeURIComponent(parsedURL.path[i]);
    }
    if (questionIndex > 0) {
        parsedURL.query = {};
        let searchString;
        if (hashIndex > 0)
            searchString = url.substr(questionIndex + 1, hashIndex - questionIndex - 1);
        else
            searchString = url.substr(questionIndex + 1);
        let params = searchString.split('&');
        for (let param of params) {
            let arr = param.split('=');
            if (arr.length === 2) {
                let name = decodeURIComponent(arr[0]);
                let val = decodeURIComponent(arr[1]);
                if (name in parsedURL.query)
                    parsedURL.query[name].push(val);
                else
                    parsedURL.query[name] = [val];
            }
        }
    }
    if (hashIndex > 0)
        parsedURL.hash = decodeURIComponent(url.substr(hashIndex + 1));
    return parsedURL;
}
exports.parseURL = parseURL;


/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file contains the public API of the URL Parsing and Matching library 'mimurl'.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  The UrlPart enumeration provides values distinguishing URL parts.
 */
var EUrlPart;
(function (EUrlPart) {
    EUrlPart[EUrlPart["Protocol"] = 0] = "Protocol";
    EUrlPart[EUrlPart["Hostname"] = 1] = "Hostname";
    EUrlPart[EUrlPart["Port"] = 2] = "Port";
    EUrlPart[EUrlPart["Path"] = 3] = "Path";
    EUrlPart[EUrlPart["Query"] = 4] = "Query";
    EUrlPart[EUrlPart["Hash"] = 5] = "Hash";
})(EUrlPart = exports.EUrlPart || (exports.EUrlPart = {}));
/**
 * The FieldFormat class defines possible field formats.
 */
var FieldFormat;
(function (FieldFormat) {
    /** Field value can be arbitrary string */
    FieldFormat[FieldFormat["String"] = 0] = "String";
    /** Field value must be convertable to an integer number */
    FieldFormat[FieldFormat["Integer"] = 1] = "Integer";
    /** Field value must be convertable to a real number */
    FieldFormat[FieldFormat["Float"] = 2] = "Float";
    /** Field value must be convertable to a Boolean number */
    FieldFormat[FieldFormat["Bool"] = 3] = "Bool";
})(FieldFormat = exports.FieldFormat || (exports.FieldFormat = {}));
const actual = __webpack_require__(/*! ./actual */ "./src/actual.ts");
const parser = __webpack_require__(/*! ./parser */ "./src/parser.ts");
const matcher = __webpack_require__(/*! ./matcher */ "./src/matcher.ts");
/**
 * Parses the given URL
 * @param s URL string to be parsed.
 */
function parseURL(s) {
    return actual.parseURL(s);
}
exports.parseURL = parseURL;
/**
 * Parses the given URL pattern
 * @param s URL pattern string to be parsed.
 */
function parseUrlPattern(s) {
    return parser.parsePattern(s);
}
exports.parseUrlPattern = parseUrlPattern;
/**
 * Matches the given URL against URL pattern string.
 * @param url Either unparsed URL string or [[IParsedActualURL]] object
 * @param pattern Either unparsed URL pattern string or [[IParsedUrlPattern]] object
 */
function match(url, pattern) {
    return matcher.match(url, pattern);
}
exports.match = match;


/***/ }),

/***/ "./src/matcher.ts":
/*!************************!*\
  !*** ./src/matcher.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api = __webpack_require__(/*! ./api */ "./src/api.ts");
// Matches the given URL against URL pattern string.
function match(url, pattern) {
    if (!url)
        throw new Error("URL cannot be null or empty string");
    if (!pattern)
        throw new Error("Pattern cannot be null or empty string");
    if (typeof url === "string") {
        if (typeof pattern === "string")
            return matchParsed(api.parseURL(url), api.parseUrlPattern(pattern));
        else
            return matchParsed(api.parseURL(url), pattern);
    }
    else {
        if (typeof pattern === "string")
            return matchParsed(url, api.parseUrlPattern(pattern));
        else
            return matchParsed(url, pattern);
    }
}
exports.match = match;
// Matches the given URL against already parsed URL pattern.
function matchParsed(parsedURL, parsedPattern) {
    if (!parsedURL)
        throw new Error("URL cannot be null");
    if (!parsedPattern)
        throw new Error("parsedPattern cannot be null");
    // prepare object for match result
    let matchResult = new UrlPatternMatchResult();
    matchResult.parsedURL = parsedURL;
    matchResult.fields = {};
    let errors = [];
    try {
        // compare part by part
        let error = matchSingleSegment(api.EUrlPart.Protocol, parsedURL.protocol, parsedPattern.protocol ? parsedPattern.protocol.segment : null, matchResult.fields);
        if (error)
            errors.push(error);
        error = matchMultipleSegments(api.EUrlPart.Hostname, parsedURL.hostname, parsedPattern.hostname ? parsedPattern.hostname.segments : null, matchResult.fields);
        if (error)
            errors.push(error);
        error = matchSingleSegment(api.EUrlPart.Port, parsedURL.port, parsedPattern.port ? parsedPattern.port.segment : null, matchResult.fields);
        if (error)
            errors.push(error);
        error = matchMultipleSegments(api.EUrlPart.Path, parsedURL.path, parsedPattern.path ? parsedPattern.path.segments : null, matchResult.fields);
        if (error)
            errors.push(error);
        error = matchQueryString(parsedURL.query, parsedPattern.query, matchResult.fields);
        if (error)
            errors.push(error);
        error = matchSingleSegment(api.EUrlPart.Hash, parsedURL.hash, parsedPattern.hash ? parsedPattern.hash.segment : null, matchResult.fields);
        if (error)
            errors.push(error);
    }
    catch (err) {
        errors.push(err.message);
    }
    // if we have errors, put them into the result object
    if (errors.length > 0)
        matchResult.errors = errors;
    return matchResult;
}
exports.matchParsed = matchParsed;
// Matches the given string against the given compiled segment. Fields will be added
// to the given result object.
function matchSingleSegment(urlPart, actualSegment, parsedSegment, fields) {
    // if compiled segment is NOT provided, then actual segment must be empty
    if (!parsedSegment) {
        if (actualSegment)
            return `URL part '${api.EUrlPart[urlPart]}' contains segment '${actualSegment}' that doesn't exist in the pattern`;
        else
            return null;
    }
    // if actual segment is empty and compiled segment is mandatory, there is no match; if string
    // is empty and compiled segment is optional, there is match;
    if (!actualSegment) {
        if (parsedSegment.isOptional)
            return null;
        else
            return `URL part '${api.EUrlPart[urlPart]}' doesn't have a segment corresponding ` +
                `to a mandatory pattern segment '${parsedSegment.tokenSting}'`;
    }
    return tryMatchSingleSegment(actualSegment, parsedSegment, fields)
        ? null
        : `URL segment '${actualSegment}' in part '${api.EUrlPart[urlPart]}' doesn't match ` +
            `pattern segment '${parsedSegment.tokenSting}'`;
}
// Tries to match actual segment to the compiled segment. If there is a macth, returns a non-null
// object with field values (if no fields found, returns an empty object). If there is no match
// returns null.
function tryMatchSingleSegment(actualSegment, parsedSegment, fields) {
    // perform regular expression match - note that the matching part (index 0 of the result) should
    // match our string exactly so that no extra characters are found before or after the match.
    let execResult = parsedSegment.regExp.exec(actualSegment);
    if (!execResult || execResult[0] !== actualSegment)
        return false;
    // check whether we have any fields
    for (let parsedField of parsedSegment.fields) {
        // check whether regular expression result has this index and get the value
        if (parsedField.index >= execResult.length) {
            console.error(`BUG: Field index not found in patter's regular expression execution result`);
            return false;
        }
        let value = convertFieldValue(parsedField, execResult[parsedField.index]);
        if (!parsedField.isArray)
            fields[parsedField.name] = value;
        else {
            let arr = fields[parsedField.name];
            if (arr === undefined) {
                arr = [];
                fields[parsedField.name] = arr;
            }
            arr.push(value);
        }
    }
    return true;
}
// Matches the given string array against the given compiled segment array. Fields will be added
// to the given result object.
function matchMultipleSegments(urlPart, actualSegments, parsedSegments, fields) {
    if (!actualSegments && !parsedSegments)
        return null;
    else if (!actualSegments)
        return `URL doesn't have part '${api.EUrlPart[urlPart]}' that exists in the pattern`;
    else if (!parsedSegments)
        return `URL has part '${api.EUrlPart[urlPart]}' that doesn't exist in the pattern`;
    // For each parsed segment we create a compiled segment except in one case: for "one or more"
    // parsed segments we create two compiled segment - one single mandatory and one multi and
    // optional.
    let compiledSegments = [];
    for (let parsedSegment of parsedSegments) {
        if (parsedSegment.isMulti && !parsedSegment.isOptional) {
            compiledSegments.push(new CompiledSegment(parsedSegment, false));
            compiledSegments.push(new CompiledSegment(parsedSegment, true));
        }
        else
            compiledSegments.push(new CompiledSegment(parsedSegment, parsedSegment.isOptional));
    }
    // call recursive function that will return the object with field values if there is a match
    // or null if there is not.
    if (tryMatchMultipleSegments(actualSegments, 0, compiledSegments, 0, fields))
        return null;
    else
        return `URL part '${api.EUrlPart[urlPart]}' doesn't match the pattern`;
}
// Tries to match actual segments to the pattern starting from the given index in each array. If
// there is a macth, returns a non-null object with field values (if no fields found, returns an
// empty object). If there is no match returns null.
function tryMatchMultipleSegments(actualSegments, actualStartIndex, compiledSegments, compiledStartIndex, fields) {
    // loop over compiled segments. If the segment is mandatory, we compare it to the actual
    // segment and if there is no match, the matching fails. If the segment is optional, we call
    // this function recursively starting from the next compiled segment. If this call returns
    // null (no match), then we map the actual segment to the compiled segment and advance the
    // indices.
    let actualCurrIndex = actualStartIndex;
    let compiledCurrIndex = compiledStartIndex;
    while (compiledCurrIndex < compiledSegments.length && actualCurrIndex < actualSegments.length) {
        let compiledSegment = compiledSegments[compiledCurrIndex];
        let actualSegment = actualSegments[actualCurrIndex];
        if (!compiledSegment.isOptional) {
            // compare mandatory segment with the actual one
            if (tryMatchSingleSegment(actualSegment, compiledSegment.parsedSegment, fields)) {
                compiledCurrIndex++;
                actualCurrIndex++;
            }
            else
                return false;
        }
        else {
            // recursively call this function passing the next compiled segment index
            let tempFields = {};
            if (tryMatchMultipleSegments(actualSegments, actualCurrIndex, compiledSegments, compiledCurrIndex + 1, tempFields)) {
                // there is a match
                mergeFields(fields, tempFields);
                return true;
            }
            else {
                // compare this segment with the actual one
                if (tryMatchSingleSegment(actualSegment, compiledSegment.parsedSegment, tempFields)) {
                    // copy field values and advance the actual index
                    mergeFields(fields, tempFields);
                    actualCurrIndex++;
                    // advance the compiled index only if this field is a singular one
                    if (!compiledSegment.parsedSegment.isMulti)
                        compiledCurrIndex++;
                }
                else
                    return false;
            }
        }
    }
    // we are here if either compile segments or actual segments or both are exhosted. If both
    // are exhosted, there is a match. If compiled are exhosted but actual are not, there is no
    // match. If actual are exhosted but compiled are not, there is match only if all the
    // remaining compiled segments are optional.
    if (compiledCurrIndex === compiledSegments.length && actualCurrIndex === actualSegments.length)
        return true;
    else if (compiledCurrIndex === compiledSegments.length)
        return false;
    else {
        for (let i = compiledCurrIndex; i < compiledSegments.length; i++) {
            let compiledSegment = compiledSegments[i];
            if (!compiledSegment.isOptional)
                return false;
        }
        return true;
    }
}
// Matches the given string object against the given compiled query string. Fields will be added
// to the given result object.
function matchQueryString(actualQuery, parsedQuery, fields) {
    if (!parsedQuery)
        return null;
    else if (!actualQuery) {
        if (Object.keys(parsedQuery.parsedQSPs).length === 0)
            return null;
        else
            return `URL doesn't have query string parameters specified in the pattern`;
    }
    // go over query string parameters specified in the patter. If there is any non-optional
    // parameter that doesn't exist in the actual URL, we fail the match.
    for (let qspName in parsedQuery.parsedQSPs) {
        if (actualQuery[qspName] === undefined)
            return `URL doesn't have query string parameter '${qspName}'`;
    }
    // go over query string parameters in the actual URL
    for (let qspName in actualQuery) {
        // find this name in the pattern. If the pattern doesn't specify this parameter and the
        // pattern doesn't allow for extra parameters, then there is no match. Otherwise, this
        // parameter is simply ignored.
        let parsedSegment = parsedQuery.parsedQSPs[qspName].segment;
        if (!parsedSegment) {
            if (!parsedQuery.allowExtraQueryParams)
                return `URL has query string parameter '${qspName}' that is not specified in the pattern`;
        }
        else {
            // for singular segment the parameter must be present only once
            let qspValues = actualQuery[qspName];
            if (!parsedSegment.isMulti && qspValues.length > 1)
                return `URL has multiple values for query string parameter '${qspName}' while pattern doesn't specify it as multi`;
            for (let qspValue of qspValues) {
                if (!tryMatchSingleSegment(qspValue, parsedSegment, fields))
                    return `URL's query string parameter '${qspName}' doesn't match that specified in the pattern`;
            }
        }
    }
    return null;
}
// Merges field values from the source object to the target one.
function mergeFields(target, source) {
    for (let fieldName in source) {
        let sourceVal = source[fieldName];
        let targetVal = target[fieldName];
        if (targetVal === undefined)
            target[fieldName] = sourceVal;
        else {
            // both source and target values must be arrays
            let sourceArr = sourceVal;
            let targetArr = targetVal;
            for (let sourceItem of sourceArr)
                targetArr.push(sourceItem);
        }
    }
}
// Returns field value converted to the required format
function convertFieldValue(parsedField, stringValue) {
    switch (parsedField.format) {
        case api.FieldFormat.String:
            return stringValue;
        case api.FieldFormat.Integer:
            {
                let n = parseInt(stringValue);
                return isNaN(n) ? stringValue : n;
            }
        case api.FieldFormat.Float:
            {
                let f = parseFloat(stringValue);
                return isNaN(f) ? stringValue : f;
            }
        case api.FieldFormat.Bool:
            {
                let v = stringValue.toLowerCase();
                if (v === "true" || v === "t" || v === "yes" || v === "y" || v === "1")
                    return true;
                else if (v === "false" || v === "f" || v === "no" || v === "n" || v === "0")
                    return false;
                else
                    return stringValue;
            }
        default:
            return stringValue;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The CompiledSegment interface represents a regular expression that should be compared to a
// segment from the actual URL part. Compiled segment contains the regular expression and a flag
// indicating whether this segment is optional.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class CompiledSegment {
    constructor(parsedSegment, isOptional) {
        this.parsedSegment = parsedSegment;
        this.isOptional = isOptional;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The UrlPatternMatchResult class describes the result of matching a URL to a pattern.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class UrlPatternMatchResult {
    /** Flag indicating whether the match was successul */
    get success() { return !this.errors || this.errors.length === 0; }
}


/***/ }),

/***/ "./src/mimurlTypes.ts":
/*!****************************!*\
  !*** ./src/mimurlTypes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimurl
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./api */ "./src/api.ts"));


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api = __webpack_require__(/*! ./api */ "./src/api.ts");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Parser's entry function.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function parsePattern(patternString) {
    // initialize global variables
    g_patternString = patternString;
    g_patternStringLength = 0;
    g_currIndex = 0;
    g_currChar = '';
    if (!patternString)
        throw new UrlPatternParsingException("URL pattern cannot be empty");
    g_patternStringLength = patternString.length;
    g_currChar = patternString[0];
    // Create the top-level parsing object and run the parsing process.
    let parsedPattern = new ParsedUrlPattern();
    parsedPattern.parse();
    return parsedPattern;
}
exports.parsePattern = parsePattern;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Define "global" variables that will be available to all objects in this module
//
///////////////////////////////////////////////////////////////////////////////////////////////////
// Pattern string being parsed
let g_patternString;
// Length of the pattern string
let g_patternStringLength;
// Index of the character in the pattern string that the parser is currently working with.
let g_currIndex;
// Character in the pattern string under the current index.
let g_currChar;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Define "global" functions that will be available to all objects in this module
//
///////////////////////////////////////////////////////////////////////////////////////////////////
// Determines if we reached the end of the pattern.
function g_isEnd() {
    return g_currIndex >= g_patternStringLength;
}
// Throws exception if we reached the end of the pattern.
function g_checkEnd() {
    if (g_currIndex === g_patternStringLength)
        throw new UrlPatternParsingException(`Invalid URL pattern end`);
}
// Moves the given number of characters from the current position.
function g_move(d = 1) {
    if (g_currIndex <= g_patternStringLength - d) {
        g_currIndex += d;
        g_currChar = g_patternString[g_currIndex];
        return true;
    }
    else {
        g_currIndex = g_patternStringLength;
        return false;
    }
}
// Moves to the given position in the buffer.
function g_moveTo(i) {
    g_currIndex = i;
    if (g_currIndex < g_patternStringLength) {
        g_currChar = g_patternString[g_currIndex];
        return true;
    }
    else
        return false;
}
// Determines whether the given character is a delimiter that cannot be used as text within URL
function g_isDelimiter(c) {
    return "!@#$%^&*()+=[]{}:;\"'<>,.?/|\\`~".indexOf(c) >= 0;
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedUrlPattern class is the top-level object describing the result of URL parsing.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedUrlPattern {
    // Protocol URL part.
    get protocol() { return this.parts[api.EUrlPart.Protocol]; }
    // Hostname URL part.
    get hostname() { return this.parts[api.EUrlPart.Hostname]; }
    // Port URL part.
    get port() { return this.parts[api.EUrlPart.Port]; }
    // Path URL part.
    get path() { return this.parts[api.EUrlPart.Path]; }
    // Query String URL part.
    get query() { return this.parts[api.EUrlPart.Query]; }
    // Hash URL part.
    get hash() { return this.parts[api.EUrlPart.Hash]; }
    constructor() {
        this.patternString = g_patternString;
        this.parts = [];
    }
    // Parses the entire URL pattern part by part
    parse() {
        // loop of parsing URL parts
        for (let part = this.findFirstUrlPart(); part !== null; part = part.getNextUrlPart()) {
            part.parse();
            this.parts[part.urlPart] = part;
            if (g_isEnd())
                break;
        }
    }
    // Determines the first URL part the parser will be working on.
    findFirstUrlPart() {
        if (g_currChar === "/") {
            if (g_patternStringLength > 1 && g_patternString[1] === "/") {
                g_move(2);
                return new ParsedHostname();
            }
            else {
                g_move();
                return new ParsedPath();
            }
        }
        else {
            let index = g_patternString.indexOf("://");
            if (index > 0)
                return new ParsedProtocol();
            else if (index < 0)
                return new ParsedHostname();
            else
                throw new UrlPatternParsingException("URL pattern cannot start from '://'");
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedToken is a base class that contains information common to all parsed URL parts.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedToken {
    constructor() {
        this.location = { start: g_currIndex, length: 0 };
    }
    finalize() {
        this.location.length = g_currIndex - this.location.start;
        this.tokenSting = g_patternString.substr(this.location.start, this.location.length);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedUrlPart is a base class that contains information common to all parsed URL parts.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedUrlPart extends ParsedToken {
    constructor(urlPart, caseSensitive) {
        super();
        this.urlPart = urlPart;
        this.caseSensitive = caseSensitive;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedSingleSegmentUrlPart interface contains information that is common for URL parts that
// define a single segment: protocol, port and hash.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedSingleSegmentUrlPart extends ParsedUrlPart {
    constructor(urlPart, caseSensitive) {
        super(urlPart, caseSensitive);
    }
    parse() {
        let segment = new ParsedSegment();
        segment.parse(this.getSegmentEndCharacters(), false, this.caseSensitive);
        this.segment = segment;
        this.finalize();
    }
    // Returns array of segments in this part.
    getSegments() { return [this.segment]; }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedMultiSegmentUrlPart class contains information that is common for URL parts that
// can define multiple segments: hostname and path.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedMultiSegmentUrlPart extends ParsedUrlPart {
    constructor(urlPart, caseSensitive) {
        super(urlPart, caseSensitive);
        this.segments = [];
    }
    parse() {
        let partEndCharacters = this.getPartEndCharacters();
        // parse segments until the current character is the end of the URL part
        while (!g_isEnd()) {
            let segment = new ParsedSegment();
            segment.parse(this.getSegmentEndCharacters(), true, this.caseSensitive);
            this.segments.push(segment);
            if (partEndCharacters.indexOf(g_currChar) >= 0)
                break;
            else
                g_move();
        }
        this.finalize();
    }
    // Returns array of segments in this part.
    getSegments() { return this.segments; }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedProtocol class contains information that allows matching URL protocol.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedProtocol extends ParsedSingleSegmentUrlPart {
    constructor() { super(api.EUrlPart.Protocol, false); }
    getSegmentEndCharacters() { return ":"; }
    getNextUrlPart() {
        if (g_currChar === ":" && g_currIndex + 2 < g_patternStringLength &&
            g_patternString[g_currIndex + 1] === "/" && g_patternString[g_currIndex + 2] === "/") {
            g_move(3);
            g_checkEnd();
            let part = new ParsedHostname();
            return part;
        }
        else
            throw new UrlPatternParsingException(`Invalid characters after protocol part`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedHostname class contains information that allows matching URL hostname.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedHostname extends ParsedMultiSegmentUrlPart {
    constructor() { super(api.EUrlPart.Hostname, false); }
    getSegmentEndCharacters() { return ".:/?#"; }
    getPartEndCharacters() { return ":/?#"; }
    getNextUrlPart() {
        if (g_currChar === ':') {
            g_move();
            g_checkEnd();
            return new ParsedPort();
        }
        else if (g_currChar === '/') {
            g_move();
            g_checkEnd();
            return new ParsedPath();
        }
        else if (g_currChar === '?') {
            g_move();
            g_checkEnd();
            return new ParsedQueryString();
        }
        else if (g_currChar === '#') {
            g_move();
            g_checkEnd();
            return new ParsedHash();
        }
        else
            throw new UrlPatternParsingException(`Invalid character ${g_currChar} after hostname segment`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedPort class contains information that allows matching URL port.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedPort extends ParsedSingleSegmentUrlPart {
    constructor() { super(api.EUrlPart.Port, false); }
    getSegmentEndCharacters() { return "/?#"; }
    getNextUrlPart() {
        if (g_currChar === '/') {
            g_move();
            g_checkEnd();
            return new ParsedPath();
        }
        else if (g_currChar === '?') {
            g_move();
            g_checkEnd();
            return new ParsedQueryString();
        }
        else if (g_currChar === '#') {
            g_move();
            g_checkEnd();
            return new ParsedHash();
        }
        else
            throw new UrlPatternParsingException(`Invalid character ${g_currChar} after port part`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedPath class contains information that allows matching URL path.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedPath extends ParsedMultiSegmentUrlPart {
    constructor() { super(api.EUrlPart.Path, true); }
    getSegmentEndCharacters() { return "/?#"; }
    getPartEndCharacters() { return "?#"; }
    getNextUrlPart() {
        if (g_currChar === '?') {
            g_move();
            g_checkEnd();
            return new ParsedQueryString();
        }
        else if (g_currChar === '#') {
            g_move();
            g_checkEnd();
            return new ParsedHash();
        }
        else
            throw new UrlPatternParsingException(`Invalid character after path segment`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedQueryString class contains information that allows matching query string parameters.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedQueryString extends ParsedUrlPart {
    constructor() {
        super(api.EUrlPart.Query, true);
        this.parsedQSPs = {};
        this.allowExtraQueryParams = true;
    }
    parse() {
        // parse segments until the current character is the end of the URL part
        while (!g_isEnd() && g_currChar !== '#') {
            if (g_currChar === '!') {
                // special case for disabling matching with extra query string parameters
                this.allowExtraQueryParams = false;
                g_move();
            }
            else {
                let qsp = new ParsedQSP();
                qsp.parse();
                if (qsp.name in this.parsedQSPs)
                    throw new UrlPatternParsingException(`Query string parameter ${qsp.name} appears more than once`);
                else
                    this.parsedQSPs[qsp.name] = qsp;
                if (g_currChar === '&')
                    g_move();
            }
        }
        this.finalize();
    }
    getNextUrlPart() {
        if (g_currChar === '#') {
            g_move();
            g_checkEnd();
            return new ParsedHash();
        }
        else
            throw new UrlPatternParsingException(`Invalid character after query string segment`);
    }
    // Returns array of segments in this part.
    getSegments() {
        let segments = [];
        // loop over query string parameters
        for (let qspName in this.parsedQSPs)
            segments.push(this.parsedQSPs[qspName].segment);
        return segments;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedHash class contains information that allows matching URL hash.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedHash extends ParsedSingleSegmentUrlPart {
    constructor() { super(api.EUrlPart.Hash, true); }
    getSegmentEndCharacters() { return ""; }
    getNextUrlPart() {
        return null;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedQSP class contains information about matching a single query string parameter.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedQSP extends ParsedToken {
    constructor() {
        super();
        this.name = "";
    }
    parse() {
        // get parameter name
        while (!g_isEnd() && "=&#".indexOf(g_currChar) < 0) {
            this.name += g_currChar;
            g_move();
        }
        g_checkEnd();
        if (!this.name)
            throw new UrlPatternParsingException(`Query string parameter doesn't have name`);
        if (g_currChar !== '=')
            throw new UrlPatternParsingException(`Query string parameter doesn't have value`);
        g_move();
        g_checkEnd();
        let segment = new ParsedSegment();
        segment.parse("&#", true, true);
        this.segment = segment;
        this.finalize();
    }
    isNameEndCharacter(c) {
        return "=&#".indexOf(c) >= 0;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedSegment class defines a single segment in a URL pattern that can be matched to one
// or more parts of an actual URL. Each segment can have zero or more fields defined in it.
// A field is defined either with or without a name. Unnamed fields are also called
// anonymous and they are associated with an index. When the URL pattern is parsed into segments,
// the anonymous fields are numbered sequentially accross multiple segments. That means that
// indexes do not restart for each segment and thus indexes for a segment's fields may not
// start from zero.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedSegment extends ParsedToken {
    constructor() {
        super();
        this.isOptional = false;
        this.isMulti = false;
        this.fields = [];
    }
    parse(segmentEndChars, isPotentiallyMulti, caseSensitive) {
        // analyze the first character in the segment and if it was a special character that
        // determines the segments optional and multi flags, move to the next character.
        if (this.analizeFirstChar(segmentEndChars, isPotentiallyMulti))
            g_move();
        // match pattern of the segment consisting of elements each of which is either text or
        // regular expression or field
        let matchPattern = [];
        // parse tokens in the segment (text, regexp, fields) until either we reach the end of
        // the entire URL pattern or we encounter a segment delimiter
        while (!g_isEnd() && segmentEndChars.indexOf(g_currChar) < 0) {
            let token;
            if (g_currChar === '{') {
                g_move();
                let field = new ParsedField();
                field.parse(segmentEndChars);
                token = field;
            }
            else if (g_currChar === '(') {
                g_move();
                let regExp = new ParsedRegExp();
                regExp.parse();
                token = regExp;
            }
            else {
                let text = new ParsedText();
                text.parse(segmentEndChars + "{(");
                token = text;
            }
            matchPattern.push(token);
        }
        this.generateRegExp(matchPattern, caseSensitive);
        this.finalize();
    }
    // Analizes the first character in the segment and returns true if it is a special character
    // that determines whether the segment is optional and whether it is "multi".
    analizeFirstChar(segmentEndChars, isPotentiallyMulti) {
        switch (g_currChar) {
            case '?':
                this.isOptional = true;
                return true;
            case '!': return true;
            case '*':
                {
                    if (!isPotentiallyMulti)
                        throw new UrlPatternParsingException(`Single-segement URL part cannot have segment starting from '*'`);
                    this.isOptional = this.isMulti = true;
                    return true;
                }
            case '+':
                {
                    if (!isPotentiallyMulti)
                        throw new UrlPatternParsingException(`Single-segement URL part cannot have segment starting from '+'`);
                    this.isMulti = true;
                    return true;
                }
            default:
                {
                    if (segmentEndChars.indexOf(g_currChar) >= 0)
                        throw new UrlPatternParsingException(`Empty segment encountered`);
                    else
                        return false;
                }
        }
    }
    // Creates regular expression describing the segment.
    generateRegExp(matchPattern, caseSensitive) {
        // 1-based index of the RegExp capturing group. We need to count capturing groups in
        // order to later get values of named and anonymous fields.
        let nextCapturingGroupIndex = 1;
        let regExpString = "";
        if (matchPattern.length === 0)
            regExpString += ".+";
        else {
            for (let token of matchPattern) {
                if (token instanceof ParsedText)
                    regExpString += token.content;
                else if (token instanceof ParsedRegExp) {
                    regExpString += "(" + token.content + ")";
                    nextCapturingGroupIndex += 1 + token.capturingGroupQty;
                }
                else // if (token instanceof ParsedField)
                 {
                    token.isArray = this.isMulti;
                    token.index = nextCapturingGroupIndex;
                    this.fields.push(token);
                    regExpString += this.generateRegExpSectionForField(token);
                    nextCapturingGroupIndex++;
                    if (token.matchPattern)
                        nextCapturingGroupIndex += 1 + token.matchPattern.capturingGroupQty;
                }
            }
        }
        this.regExp = new RegExp(regExpString, caseSensitive ? "" : "i");
    }
    // Returns a string with the regular expression group for the given field.
    generateRegExpSectionForField(parsedField) {
        let s = "(";
        if (parsedField.matchPattern && parsedField.matchPattern.content) {
            s += `(${parsedField.matchPattern.content})`;
            if (parsedField.isOptional)
                s += "?";
        }
        else if (parsedField.isOptional)
            s += ".*";
        else
            s += ".+";
        s += ")";
        return s;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedText class defines a single text section within a segment.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedText extends ParsedToken {
    constructor() {
        super();
        this.content = "";
    }
    parse(textEndChars) {
        while (!g_isEnd() && textEndChars.indexOf(g_currChar) < 0) {
            this.content += g_currChar;
            g_move();
        }
        this.finalize();
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedRegExp class defines a single regular expression section within a segment or
// field.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedRegExp extends ParsedToken {
    constructor() {
        super();
        this.content = "";
        this.capturingGroupQty = 0;
    }
    parse() {
        // Stack of opening and closing characters (parenthesis, brackets and curly braces) for
        // parsing regular expressions section. Regular expression section stops when we encounter
        // character ')' and this stack is empty.
        let stack = [];
        while (!g_isEnd()) {
            let currChar = g_currChar;
            if (currChar === ')') {
                if (stack.length === 0) {
                    this.finalize();
                    g_move();
                    return;
                }
                else if (stack.pop() === '(')
                    g_move();
                else
                    throw new UrlPatternParsingException(`Invalid open/close characters in regular expression`);
            }
            else if (currChar === '}') {
                if (stack.pop() === '{')
                    g_move();
                else
                    throw new UrlPatternParsingException(`Invalid open/close characters in regular expression`);
            }
            else if (currChar === ']') {
                if (stack.pop() === '[')
                    g_move();
                else
                    throw new UrlPatternParsingException(`Invalid open/close characters in regular expression`);
            }
            else if ("({[".indexOf(currChar) >= 0) {
                if (currChar === '(')
                    this.capturingGroupQty++;
                stack.push(currChar);
                g_move();
            }
            else if (currChar === '\\') {
                this.content += currChar;
                g_move();
                g_checkEnd();
                currChar = g_currChar;
                g_move();
            }
            else
                g_move();
            this.content += currChar;
        }
        // we end up here only if the URL pattern ended while within unfinished regular expression
        throw new UrlPatternParsingException(`Invalid URL pattern end within regular expression`);
    }
    finalize() {
        if (!this.content)
            throw new UrlPatternParsingException(`Empty regular expression`);
        super.finalize();
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedField class defines a single field within a segment.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedField extends ParsedToken {
    constructor() {
        super();
        this.isOptional = false;
        this.name = "";
        this.format = api.FieldFormat.String;
        this.matchPattern = null;
    }
    parse(segmentEndChars) {
        // first check whether this field is optional
        if (g_currChar === '?') {
            this.isOptional = true;
            g_move();
        }
        // loop over characters in the field name
        while (!g_isEnd()) {
            if (segmentEndChars.indexOf(g_currChar) >= 0)
                throw new UrlPatternParsingException(`Field doesn't have closing '}'`);
            //else if (non-acceptable-char-in-field-name)
            //	throw new UrlPatternParsingException( `Invalid character within field`);
            else if (g_currChar === '}' || g_currChar === '(' || g_currChar === '%')
                break;
            else {
                this.name += g_currChar;
                g_move();
            }
        }
        if (this.name.length === 0)
            throw new UrlPatternParsingException(`Field must have name`);
        g_checkEnd();
        if (g_currChar === '%') {
            g_move();
            g_checkEnd();
            let formatChar = g_currChar;
            if (formatChar === 'i') {
                this.format = api.FieldFormat.Integer;
                g_move();
            }
            else if (formatChar === 'f') {
                this.format = api.FieldFormat.Float;
                g_move();
            }
            else if (formatChar === 'b') {
                this.format = api.FieldFormat.Bool;
                g_move();
            }
            else
                throw new UrlPatternParsingException(`Invalid character within field format`);
        }
        g_checkEnd();
        if (g_currChar === '(') {
            g_move();
            let regExp = new ParsedRegExp();
            regExp.parse();
            this.matchPattern = regExp;
        }
        g_checkEnd();
        if (g_currChar === '}') {
            this.finalize();
            g_move();
        }
        else
            throw new UrlPatternParsingException(`Invalid character within field`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The IUrlPatternParsingException interface represents an error that occurred during parsing of
// a URL pattern.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class UrlPatternParsingException extends Error {
    constructor(message) {
        super();
        this.pos = g_currIndex;
        this.message = `Error at position ${this.pos}\n${message}`;
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW11cmwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbXVybC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW11cmwvLi9zcmMvYWN0dWFsLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21pbXVybFR5cGVzLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSx1QkFBdUI7QUFDdkIsU0FBZ0IsUUFBUSxD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LElBQUksWUFBWSxFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7U0FDM0I7UUFFRCxVQUFVLEVBQUUsQ0FBQztRQUViLElBQUksVUFBVSxLQUFLLEdBQUcsRUFDdEI7WUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsTUFBTSxFQUFFLENBQUM7U0FDVDs7WUFFQSxNQUFNLElBQUksMEJBQTBCLENBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0Q7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGdHQUFnRztBQUNoRyxpQkFBaUI7QUFDakIsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFNLDBCQUEyQixTQUFRLEtBQUs7SUFLN0MsWUFBYSxPQUFlO1FBRTNCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsSUFBSSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0NBQ0QiLCJmaWxlIjoibWltdXJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltdXJsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbXVybFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbXVybFR5cGVzLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL2FwaVwiXHJcblxyXG5cclxuXHJcbi8vIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVSTCggdXJsOiBzdHJpbmcpOiBhcGkuSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0bGV0IHBhcnNlZFVSTDogYXBpLklQYXJzZWRBY3R1YWxVUkwgPSB7fTtcclxuXHJcblx0Ly8gZmluZCBwcm90b2NvbFxyXG5cdGxldCBob3N0bmFtZUluZGV4OiBudW1iZXI7XHJcblx0bGV0IHByb3RvY29sU2VwYXJhdG9ySW5kZXggPSB1cmwuaW5kZXhPZiggXCI6Ly9cIik7XHJcblx0aWYgKHByb3RvY29sU2VwYXJhdG9ySW5kZXggPT09IDApXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmIChwcm90b2NvbFNlcGFyYXRvckluZGV4ID4gMClcclxuXHR7XHJcblx0XHRwYXJzZWRVUkwucHJvdG9jb2wgPSB1cmwuc3Vic3RyKCAwLCBwcm90b2NvbFNlcGFyYXRvckluZGV4KTtcclxuXHRcdGhvc3RuYW1lSW5kZXggPSBwcm90b2NvbFNlcGFyYXRvckluZGV4ICsgMztcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0aG9zdG5hbWVJbmRleCA9IHVybFswXSA9PT0gJy8nID8gLTEgOiAwO1xyXG5cclxuXHRsZXQgbmV4dFNlYXJjaEluZGV4U3RhcnQgPSBob3N0bmFtZUluZGV4IDwgMCA/IDAgOiBob3N0bmFtZUluZGV4O1x0XHJcblx0bGV0IGNvbG9uSW5kZXggPSB1cmwuaW5kZXhPZiggJzonLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblx0bGV0IHNsYXNoSW5kZXggPSB1cmwuaW5kZXhPZiggJy8nLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblx0bGV0IHF1ZXN0aW9uSW5kZXggPSB1cmwuaW5kZXhPZiggJz8nLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblx0bGV0IGhhc2hJbmRleCA9IHVybC5pbmRleE9mKCAnIycsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHJcblx0aWYgKGhvc3RuYW1lSW5kZXggPj0gMClcclxuXHR7XHJcblx0XHRpZiAoY29sb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIGNvbG9uSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2UgaWYgKHNsYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBzbGFzaEluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlIGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgcXVlc3Rpb25JbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZSBpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgaGFzaEluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgcGFyc2VkVVJMLmhvc3RuYW1lLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWVbaV0gPSBkZWNvZGVVUklDb21wb25lbnQoIHBhcnNlZFVSTC5ob3N0bmFtZVtpXSk7XHJcblx0fVxyXG5cclxuXHRpZiAoY29sb25JbmRleCA+IDApXHJcblx0e1xyXG5cdFx0aWYgKHNsYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxLCBzbGFzaEluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZSBpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEsIHF1ZXN0aW9uSW5kZXggLSBjb2xvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlIGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxLCBoYXNoSW5kZXggLSBjb2xvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcnNlZFVSTC5wb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEpO1xyXG5cdH1cclxuXHJcblx0Ly8gc2xhc2ggY2FuIGJlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaWYgdGhlcmUgaXMgbm8gaG9zdG5hbWVcclxuXHRpZiAoc2xhc2hJbmRleCA+PSAwKVxyXG5cdHtcclxuXHRcdGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBhdGggPSB1cmwuc3Vic3RyKCBzbGFzaEluZGV4ICsgMSwgcXVlc3Rpb25JbmRleCAtIHNsYXNoSW5kZXggLSAxKS5zcGxpdCggJy8nKTtcclxuXHRcdGVsc2UgaWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEsIGhhc2hJbmRleCAtIHNsYXNoSW5kZXggLSAxKS5zcGxpdCggJy8nKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyc2VkVVJMLnBhdGggPSB1cmwuc3Vic3RyKCBzbGFzaEluZGV4ICsgMSkuc3BsaXQoICcvJyk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBwYXJzZWRVUkwucGF0aC5sZW5ndGg7IGkrKylcclxuXHRcdFx0cGFyc2VkVVJMLnBhdGhbaV0gPSBkZWNvZGVVUklDb21wb25lbnQoIHBhcnNlZFVSTC5wYXRoW2ldKTtcclxuXHR9XHJcblxyXG5cdGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHR7XHJcblx0XHRwYXJzZWRVUkwucXVlcnkgPSB7fTtcclxuXHRcdGxldCBzZWFyY2hTdHJpbmc6IHN0cmluZztcclxuXHRcdGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRzZWFyY2hTdHJpbmcgPSB1cmwuc3Vic3RyKCBxdWVzdGlvbkluZGV4ICsgMSwgaGFzaEluZGV4IC0gcXVlc3Rpb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzZWFyY2hTdHJpbmcgPSB1cmwuc3Vic3RyKCBxdWVzdGlvbkluZGV4ICsgMSk7XHJcblxyXG5cdFx0bGV0IHBhcmFtcyA9IHNlYXJjaFN0cmluZy5zcGxpdCggJyYnKTtcclxuXHRcdGZvciggbGV0IHBhcmFtIG9mIHBhcmFtcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGFyciA9IHBhcmFtLnNwbGl0KCAnPScpO1xyXG5cdFx0XHRpZiAoYXJyLmxlbmd0aCA9PT0gMilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KCBhcnJbMF0pO1xyXG5cdFx0XHRcdGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoIGFyclsxXSk7XHJcblx0XHRcdFx0aWYgKG5hbWUgaW4gcGFyc2VkVVJMLnF1ZXJ5KVxyXG5cdFx0XHRcdFx0cGFyc2VkVVJMLnF1ZXJ5W25hbWVdLnB1c2goIHZhbCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cGFyc2VkVVJMLnF1ZXJ5W25hbWVdID0gW3ZhbF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdHBhcnNlZFVSTC5oYXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KCB1cmwuc3Vic3RyKCBoYXNoSW5kZXggKyAxKSk7XHJcblxyXG5cdHJldHVybiBwYXJzZWRVUkw7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgcHVibGljIEFQSSBvZiB0aGUgVVJMIFBhcnNpbmcgYW5kIE1hdGNoaW5nIGxpYnJhcnkgJ21pbXVybCcuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBQYXJzZWRBY3R1YWxVUkwgY2xhc3MgY29udGFpbnMgVVJMIHBhcnRzIHBhcnNlZCBvdXQgb2YgdGhlIFVSTCBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRBY3R1YWxVUkxcclxue1xyXG5cdC8qKiBQcm90b2NvbCBVUkwgcGFydCAqL1xyXG5cdHByb3RvY29sPzogc3RyaW5nO1xyXG5cclxuXHQvKiogSG9zdG5hbWUgVVJMIHBhcnQgYXMgYXJyYXkgb2YgaG9zdG5hbWUgc2VnbWVudHM6IGUuZy4gYFtcInd3d1wiLCBcImFiY1wiLCBcImNvbVwiXWAgKi9cclxuXHRob3N0bmFtZT86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogUG9ydCBVUkwgcGFydCAqL1xyXG5cdHBvcnQ/OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBQYXRoIFVSTCBwYXJ0IGFzIGFycmF5IG9mIHBhdGggc2VnbWVudHM6IGUuZy4gYFtcInVzZXJcIiwgXCJwcm9maWxlXCIsIFwib3B0aW9uc1wiXWAgKi9cclxuXHRwYXRoPzogc3RyaW5nW107XHJcblxyXG5cdC8qKiBRdWVyeSBzdHJpbmcgVVJMIHBhcnQgYXMgYSBtYXAgb2YgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgdG8gdGhlIGFycmF5cyBvZiB0aGVpciB2YWx1ZXMgKi9cclxuXHRxdWVyeT86IHsgW1A6IHN0cmluZ106IHN0cmluZ1tdIH07XHJcblxyXG5cdC8qKiBIYXNoIChmcmFnbWVudCkgVVJMIHBhcnQgKi9cclxuXHRoYXNoPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVGhlIFVybFBhcnQgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGRpc3Rpbmd1aXNoaW5nIFVSTCBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVVcmxQYXJ0IHsgUHJvdG9jb2wsIEhvc3RuYW1lLCBQb3J0LCBQYXRoLCBRdWVyeSwgSGFzaCB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFVybFBhdHRlcm4gaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHRvcC1sZXZlbCBvYmplY3QgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIFVSTFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0LyoqIE9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGZvciB3aGljaCB0aGlzIG9iamVjdCB3YXMgY3JlYXRlZC4gKi9cclxuXHRwYXR0ZXJuU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBQcm90b2NvbCBVUkwgcGFydC4gKi9cclxuXHRwcm90b2NvbDogSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogSG9zdG5hbWUgVVJMIHBhcnQuICovXHJcblx0aG9zdG5hbWU6IElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUG9ydCBVUkwgcGFydC4gKi9cclxuXHRwb3J0OiBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBQYXRoIFVSTCBwYXJ0LiAqL1xyXG5cdHBhdGg6IElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUXVlcnkgU3RyaW5nIFVSTCBwYXJ0LiAqL1xyXG5cdHF1ZXJ5OiBJUGFyc2VkUXVlcnlTdHJpbmc7XHJcblxyXG5cdC8qKiBIYXNoIFVSTCBwYXJ0LiAqL1xyXG5cdGhhc2g6IElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIEFycmF5IG9mIFVSTCBwYXJ0LiBJbmRleGVzIGFyZSB2YWx1ZXMgZnJvbSB0aGUgVXJsUGFydCBlbnVtZXJhdGlvbi4gKi9cclxuXHRwYXJ0czogSVBhcnNlZFVybFBhcnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhcnNlZExvY2F0aW9uIHR5cGUgZGVmaW5lcyBob3cgZGlmZmVyZW50IHNlY3Rpb24gb2YgdGhlIFVSTCBwYXR0ZXJuIGNhbiBiZSBsb2NhdGVkIGluIHRoZVxyXG4gKiBvcmlnaW5hbCBwYXR0ZXJuIHN0cmluZy4gTG9jYXRpb24gaXMgZGVmaW5lZCB1c2luZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZSB0aGUgc2VjdGlvblxyXG4gKiBiZWdpbnMgYW5kIGl0cyBsZW5ndGguXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQYXJzZWRMb2NhdGlvbiA9IHsgc3RhcnQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkVG9rZW4gaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKipcclxuXHQgKiBMb2NhdGlvbiBvZiB0aGUgcGFydCBpbiB0aGUgb3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgY29udGFpbmluZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZVxyXG5cdCAqIHRoZSBwYXJ0IGJlZ2lucyBhbmQgaXRzIGxlbmd0aC5cclxuXHQgKi9cclxuXHRsb2NhdGlvbjogUGFyc2VkTG9jYXRpb247XHJcblxyXG5cdC8qKiBDb250ZW50IG9mIHRoZSB0b2tlbiAqL1xyXG5cdHRva2VuU3Rpbmc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRVcmxQYXJ0IGlzIGEgYmFzZSBpbnRlcmZhY2UgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRVcmxQYXJ0IGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gKi9cclxuXHR1cmxQYXJ0OiBFVXJsUGFydDtcclxuXHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wYXJpc29uIG9mIHRoaXMgcGFydCBzaG9sZCBiZSBjYXNlLXNlbnNpdGl2ZSBvciBub3QuICovXHJcblx0Y2FzZVNlbnNpdGl2ZTogYm9vbGVhbjtcclxuXHJcblx0LyoqIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LiAqL1xyXG5cdGdldFNlZ21lbnRzKCk6IElQYXJzZWRTZWdtZW50W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbiAqIGRlZmluZSBhIHNpbmdsZSBzZWdtZW50OiBwcm90b2NvbCwgcG9ydCBhbmQgaGFzaC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLiAqL1xyXG5cdHNlZ21lbnQ6IElQYXJzZWRTZWdtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4gKiBjYW4gZGVmaW5lIG11bHRpcGxlIHNlZ21lbnRzOiBob3N0bmFtZSBhbmQgcGF0aC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBJUGFyc2VkVXJsUGFydFxyXG57XHJcblx0LyoqIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuICovXHJcblx0c2VnbWVudHM6IElQYXJzZWRTZWdtZW50W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkUXVlcnlTdHJpbmcgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIHF1ZXJ5IHN0cmluZ1xyXG4gKiBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkUXVlcnlTdHJpbmcgZXh0ZW5kcyBJUGFyc2VkVXJsUGFydFxyXG57XHJcblx0LyoqIFF1ZXJ5IHN0cmluZyBkZWZpbmVzIG9uZSBzZWdlbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS4gKi9cclxuXHRwYXJzZWRRU1BzOiB7IFtQOiBzdHJpbmddOiBJUGFyc2VkUVNQIH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIG5vdCBzcGVjaWZpZWQgZXhwbGljaXRseSBpbiB0aGUgcGF0dGVyblxyXG5cdCAqIHdpbGwgYmUgYWxsb3dlZCB3aGVuIHBhcnNpbmcgYWN0dWFsIFVSTHMuXHJcblx0ICovXHJcblx0YWxsb3dFeHRyYVF1ZXJ5UGFyYW1zOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFFTUCBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgbWF0Y2hpbmcgYSBzaW5nbGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFFTUCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgbmFtZS4gKi9cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBRdWVyeSBTdHJpbmcgZGVmaW5lcyBvbmUgc2VnZW1lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuICovXHJcblx0c2VnbWVudDogSVBhcnNlZFNlZ21lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkU2VnbWVudCBpbnRlcmZhY2UgZGVmaW5lcyBhIHNpbmdsZSBzZWdtZW50IGluIGEgVVJMIHBhdHRlcm4gdGhhdCBjYW4gYmUgbWF0Y2hlZCB0b1xyXG4gKiBvbmUgb3IgbW9yZSBwYXJ0cyBvZiBhbiBhY3R1YWwgVVJMLiBFYWNoIHNlZ21lbnQgY2FuIGhhdmUgemVybyBvciBtb3JlIGZpZWxkcyBkZWZpbmVkIGluIGl0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkU2VnbWVudCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsICovXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgY2FuIGJlIHJlcGVhdGVkIG11dGlwbGUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIGJvdGhcclxuXHQgKiBvcHRpb25hbCBhbmQgbXVsdGkgY2FuIGJlIHJlcGVhdGVkIHplcm8gb3IgbW9yZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgbm90IG9wdGlvbmFsIGJ1dFxyXG5cdCAqIG11bHRpIGNhbiBiZSByZXBlYXRlZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuXHQgKi9cclxuXHRpc011bHRpOiBib29sZWFuO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZmllbGRzIGRlZmluZWQgaW4gdGhpcyBzZWdtZW50LiAqL1xyXG5cdGZpZWxkczogSVBhcnNlZEZpZWxkW107XHJcblxyXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIHNlZ21lbnQncyBtYXRjaCBwYXR0ZXJuLlxyXG5cdHJlZ0V4cDogUmVnRXhwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZEZpZWxkIGludGVyZmFjZSBkZWZpbmVzIGEgc2luZ2xlIGZpZWxkIHdpdGhpbiBhIHNlZ21lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRGaWVsZCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmaWVsZCBpcyBvcHRpb25hbCAqL1xyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBmaWVsZCAqL1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEZpZWxkIGZvcm1hdCAqL1xyXG5cdGZvcm1hdDogRmllbGRGb3JtYXQ7XHJcblxyXG5cdC8vIC8qKiBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGRlc2NyaWJpbmcgdGhlIG1hdGNoaW5nIHBhdHRlcm4gZm9yIHRoZSBmaWVsZCAqL1xyXG5cdC8vIG1hdGNoUGF0dGVybjogSVBhcnNlZFJlZ0V4cDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIHZhbHVlIGlzIGFuIGFycmF5LiBUaGlzIGlzIHRydWUgZm9yIGZpZWxkcyB0aGF0IGNhbiBhcHBlYXJcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgVVJMIHBhcnQuXHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYXB0dXJpbmcgZ3JvdXAgY29ycmVzcG9uZGluZyB0byB0aGUgZmllbGQgd2l0aGluIHRoZVxyXG5cdC8vIHNlZ21lbnQuXHJcblx0aW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZpZWxkRm9ybWF0IGNsYXNzIGRlZmluZXMgcG9zc2libGUgZmllbGQgZm9ybWF0cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEZpZWxkRm9ybWF0XHJcbntcclxuXHQvKiogRmllbGQgdmFsdWUgY2FuIGJlIGFyYml0cmFyeSBzdHJpbmcgKi9cclxuXHRTdHJpbmcsXHJcblxyXG5cdC8qKiBGaWVsZCB2YWx1ZSBtdXN0IGJlIGNvbnZlcnRhYmxlIHRvIGFuIGludGVnZXIgbnVtYmVyICovXHJcblx0SW50ZWdlcixcclxuXHJcblx0LyoqIEZpZWxkIHZhbHVlIG11c3QgYmUgY29udmVydGFibGUgdG8gYSByZWFsIG51bWJlciAqL1xyXG5cdEZsb2F0LFxyXG5cclxuXHQvKiogRmllbGQgdmFsdWUgbXVzdCBiZSBjb252ZXJ0YWJsZSB0byBhIEJvb2xlYW4gbnVtYmVyICovXHJcblx0Qm9vbCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBlcnJvciB0aGF0IG9jY3VycmVkIGR1cmluZyBwYXJzaW5nIG9mXHJcbiAqIGEgVVJMIHBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yXHJcbntcclxuXHQvKiogSW5kZXggaW4gdGhlIHBhdHRlcm4gc3RyaW5nIGF0IHdoaWNoIHRoZWVycm9yIG9jY3VycmVkLiAqL1xyXG5cdHBvczogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTdXBwb3J0ZWQgcHJpbWl0aXZlIHR5cGVzIG9mIGZpZWxkIHZhbHVlcyAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVGaWVsZFZhbHVlVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblxyXG4vKiogVHlwZXMgb2YgZmllbGRzIHdpdGggbXVsdGlwbGUgdmFsdWVzICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRmllbGRWYWx1ZVR5cGUgPSBTaW5nbGVGaWVsZFZhbHVlVHlwZVtdO1xyXG5cclxuLyoqIEZpZWxkIHZhbHVlIHR5cGUsIHdoaWNoIGNhbiBiZSBlaXRoZXIgc2luZ2UgdmFsdWUgb3IgbXVsdGlwbGUgdmFsdWUgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGaWVsZFZhbHVlVHlwZSA9IFNpbmdsZUZpZWxkVmFsdWVUeXBlIHwgTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHJcbi8qKiBPYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIGFyZSBmaWVsZCBuYW1lcyBhbmQgdmFsdWVzIGFyZSBmaWVsZCB2YWx1ZXMuICovXHJcbmV4cG9ydCB0eXBlIEZpZWxkQmFnID0geyBbUDpzdHJpbmddOiBGaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBhbiBhY3R1YWwgVVJMIGFnYWluc3RcclxuICogdGhlIFVSTCBwYXR0ZXJuLiBUaGUgcmVzdWx0IGNvbnRhaW5zIHZhbHVlcyBvZiBuYW1lZCBhbmQgaW5kZXhlZCBmaWVsZHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbWF0Y2ggd2FzIHN1Y2Nlc3N1bCAqL1xyXG5cdHN1Y2Nlc3M6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBQYXJzZWQgYWN0dWFsIFVSTCAqL1xyXG5cdHBhcnNlZFVSTDogSVBhcnNlZEFjdHVhbFVSTDtcclxuXHJcblx0LyoqIEVycm9yIG1lc3NhZ2VzIGluIGNhc2UgdGhlIG1hdGNoIHdhcyBub3Qgc3VjY2Vzc2Z1bCAqL1xyXG5cdGVycm9ycz86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogRmllbGQgbmFtZXMgYW5kIHZhbHVlcyAqL1xyXG5cdGZpZWxkcz86IEZpZWxkQmFnO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFjdHVhbCBmcm9tIFwiLi9hY3R1YWxcIjtcclxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCIuL3BhcnNlclwiO1xyXG5pbXBvcnQgKiBhcyBtYXRjaGVyIGZyb20gXCIuL21hdGNoZXJcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMIFxyXG4gKiBAcGFyYW0gcyBVUkwgc3RyaW5nIHRvIGJlIHBhcnNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVSTCggczogc3RyaW5nKTogSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0cmV0dXJuIGFjdHVhbC5wYXJzZVVSTCggcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgdGhlIGdpdmVuIFVSTCBwYXR0ZXJuXHJcbiAqIEBwYXJhbSBzIFVSTCBwYXR0ZXJuIHN0cmluZyB0byBiZSBwYXJzZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmxQYXR0ZXJuKCBzOiBzdHJpbmcpOiBJUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0cmV0dXJuIHBhcnNlci5wYXJzZVBhdHRlcm4oIHMpO1xyXG59XHJcblxyXG4vKipcclxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gVVJMIGFnYWluc3QgVVJMIHBhdHRlcm4gc3RyaW5nLlxyXG4gKiBAcGFyYW0gdXJsIEVpdGhlciB1bnBhcnNlZCBVUkwgc3RyaW5nIG9yIFtbSVBhcnNlZEFjdHVhbFVSTF1dIG9iamVjdFxyXG4gKiBAcGFyYW0gcGF0dGVybiBFaXRoZXIgdW5wYXJzZWQgVVJMIHBhdHRlcm4gc3RyaW5nIG9yIFtbSVBhcnNlZFVybFBhdHRlcm5dXSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCggdXJsOiBzdHJpbmcgfCBJUGFyc2VkQWN0dWFsVVJMLCBwYXR0ZXJuOiBzdHJpbmcgfCBJUGFyc2VkVXJsUGF0dGVybik6IElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdHJldHVybiBtYXRjaGVyLm1hdGNoKCB1cmwsIHBhdHRlcm4pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBVUkwgcGF0dGVybiBzdHJpbmcuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCggdXJsOiBzdHJpbmcgfCBhcGkuSVBhcnNlZEFjdHVhbFVSTCwgcGF0dGVybjogc3RyaW5nIHwgYXBpLklQYXJzZWRVcmxQYXR0ZXJuKTogYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdGlmICghdXJsKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlVSTCBjYW5ub3QgYmUgbnVsbCBvciBlbXB0eSBzdHJpbmdcIik7XHJcblx0aWYgKCFwYXR0ZXJuKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlBhdHRlcm4gY2Fubm90IGJlIG51bGwgb3IgZW1wdHkgc3RyaW5nXCIpO1xyXG5cclxuXHRpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggYXBpLnBhcnNlVVJMKCB1cmwpLCBhcGkucGFyc2VVcmxQYXR0ZXJuKCBwYXR0ZXJuKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggYXBpLnBhcnNlVVJMKCB1cmwpLCBwYXR0ZXJuKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCB1cmwsIGFwaS5wYXJzZVVybFBhdHRlcm4oIHBhdHRlcm4pKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCB1cmwsIHBhdHRlcm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBhbHJlYWR5IHBhcnNlZCBVUkwgcGF0dGVybi5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFyc2VkKCBwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMLCBwYXJzZWRQYXR0ZXJuOiBhcGkuSVBhcnNlZFVybFBhdHRlcm4pOiBhcGkuSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0aWYgKCFwYXJzZWRVUkwpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiVVJMIGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cdGlmICghcGFyc2VkUGF0dGVybilcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJwYXJzZWRQYXR0ZXJuIGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cclxuXHQvLyBwcmVwYXJlIG9iamVjdCBmb3IgbWF0Y2ggcmVzdWx0XHJcblx0bGV0IG1hdGNoUmVzdWx0ID0gbmV3IFVybFBhdHRlcm5NYXRjaFJlc3VsdCgpO1xyXG5cdG1hdGNoUmVzdWx0LnBhcnNlZFVSTCA9IHBhcnNlZFVSTDtcclxuXHRtYXRjaFJlc3VsdC5maWVsZHMgPSB7fTtcclxuXHRsZXQgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHQvLyBjb21wYXJlIHBhcnQgYnkgcGFydFxyXG5cdFx0bGV0IGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuUHJvdG9jb2wsIHBhcnNlZFVSTC5wcm90b2NvbCxcclxuXHRcdFx0IFx0XHRcdHBhcnNlZFBhdHRlcm4ucHJvdG9jb2wgPyBwYXJzZWRQYXR0ZXJuLnByb3RvY29sLnNlZ21lbnQgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhcGkuRVVybFBhcnQuSG9zdG5hbWUsIHBhcnNlZFVSTC5ob3N0bmFtZSxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5ob3N0bmFtZSA/IHBhcnNlZFBhdHRlcm4uaG9zdG5hbWUuc2VnbWVudHMgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuUG9ydCwgcGFyc2VkVVJMLnBvcnQsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4ucG9ydCA/IHBhcnNlZFBhdHRlcm4ucG9ydC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoTXVsdGlwbGVTZWdtZW50cyggYXBpLkVVcmxQYXJ0LlBhdGgsIHBhcnNlZFVSTC5wYXRoLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLnBhdGggPyBwYXJzZWRQYXR0ZXJuLnBhdGguc2VnbWVudHMgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hRdWVyeVN0cmluZyggcGFyc2VkVVJMLnF1ZXJ5LCBwYXJzZWRQYXR0ZXJuLnF1ZXJ5LCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuSGFzaCwgcGFyc2VkVVJMLmhhc2gsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4uaGFzaCA/IHBhcnNlZFBhdHRlcm4uaGFzaC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRlcnJvcnMucHVzaCggZXJyLm1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBlcnJvcnMsIHB1dCB0aGVtIGludG8gdGhlIHJlc3VsdCBvYmplY3RcclxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApXHJcblx0XHRtYXRjaFJlc3VsdC5lcnJvcnMgPSBlcnJvcnM7XHJcblxyXG5cdHJldHVybiBtYXRjaFJlc3VsdDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBzdHJpbmcgYWdhaW5zdCB0aGUgZ2l2ZW4gY29tcGlsZWQgc2VnbWVudC4gRmllbGRzIHdpbGwgYmUgYWRkZWRcclxuLy8gdG8gdGhlIGdpdmVuIHJlc3VsdCBvYmplY3QuXHJcbmZ1bmN0aW9uIG1hdGNoU2luZ2xlU2VnbWVudCggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBhY3R1YWxTZWdtZW50OiBzdHJpbmcsIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCxcclxuXHRcdFx0XHQgZmllbGRzOiBhcGkuRmllbGRCYWcpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHQvLyBpZiBjb21waWxlZCBzZWdtZW50IGlzIE5PVCBwcm92aWRlZCwgdGhlbiBhY3R1YWwgc2VnbWVudCBtdXN0IGJlIGVtcHR5XHJcblx0aWYgKCFwYXJzZWRTZWdtZW50KVxyXG5cdHtcclxuXHRcdGlmIChhY3R1YWxTZWdtZW50KVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGNvbnRhaW5zIHNlZ21lbnQgJyR7YWN0dWFsU2VnbWVudH0nIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgcGF0dGVybmA7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgYWN0dWFsIHNlZ21lbnQgaXMgZW1wdHkgYW5kIGNvbXBpbGVkIHNlZ21lbnQgaXMgbWFuZGF0b3J5LCB0aGVyZSBpcyBubyBtYXRjaDsgaWYgc3RyaW5nXHJcblx0Ly8gaXMgZW1wdHkgYW5kIGNvbXBpbGVkIHNlZ21lbnQgaXMgb3B0aW9uYWwsIHRoZXJlIGlzIG1hdGNoO1xyXG5cdGlmICghYWN0dWFsU2VnbWVudClcclxuXHR7XHJcblx0XHRpZiAocGFyc2VkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGBVUkwgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBkb2Vzbid0IGhhdmUgYSBzZWdtZW50IGNvcnJlc3BvbmRpbmcgYCArXHJcblx0XHRcdFx0XHRgdG8gYSBtYW5kYXRvcnkgcGF0dGVybiBzZWdtZW50ICcke3BhcnNlZFNlZ21lbnQudG9rZW5TdGluZ30nYDtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQsIHBhcnNlZFNlZ21lbnQsIGZpZWxkcylcclxuXHRcdD8gbnVsbFxyXG5cdFx0OiBgVVJMIHNlZ21lbnQgJyR7YWN0dWFsU2VnbWVudH0nIGluIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgZG9lc24ndCBtYXRjaCBgICtcclxuXHRcdFx0YHBhdHRlcm4gc2VnbWVudCAnJHtwYXJzZWRTZWdtZW50LnRva2VuU3Rpbmd9J2A7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHJpZXMgdG8gbWF0Y2ggYWN0dWFsIHNlZ21lbnQgdG8gdGhlIGNvbXBpbGVkIHNlZ21lbnQuIElmIHRoZXJlIGlzIGEgbWFjdGgsIHJldHVybnMgYSBub24tbnVsbFxyXG4vLyBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMgKGlmIG5vIGZpZWxkcyBmb3VuZCwgcmV0dXJucyBhbiBlbXB0eSBvYmplY3QpLiBJZiB0aGVyZSBpcyBubyBtYXRjaFxyXG4vLyByZXR1cm5zIG51bGwuXHJcbmZ1bmN0aW9uIHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudDogc3RyaW5nLCBwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQsXHJcblx0ZmllbGRzOiBhcGkuRmllbGRCYWcpOiBib29sZWFuXHJcbntcclxuXHQvLyBwZXJmb3JtIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaCAtIG5vdGUgdGhhdCB0aGUgbWF0Y2hpbmcgcGFydCAoaW5kZXggMCBvZiB0aGUgcmVzdWx0KSBzaG91bGRcclxuXHQvLyBtYXRjaCBvdXIgc3RyaW5nIGV4YWN0bHkgc28gdGhhdCBubyBleHRyYSBjaGFyYWN0ZXJzIGFyZSBmb3VuZCBiZWZvcmUgb3IgYWZ0ZXIgdGhlIG1hdGNoLlxyXG5cdGxldCBleGVjUmVzdWx0ID0gcGFyc2VkU2VnbWVudC5yZWdFeHAuZXhlYyggYWN0dWFsU2VnbWVudCk7XHJcblx0aWYgKCFleGVjUmVzdWx0IHx8IGV4ZWNSZXN1bHRbMF0gIT09IGFjdHVhbFNlZ21lbnQpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdC8vIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBhbnkgZmllbGRzXHJcblx0Zm9yKCBsZXQgcGFyc2VkRmllbGQgb2YgcGFyc2VkU2VnbWVudC5maWVsZHMpXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciByZWd1bGFyIGV4cHJlc3Npb24gcmVzdWx0IGhhcyB0aGlzIGluZGV4IGFuZCBnZXQgdGhlIHZhbHVlXHJcblx0XHRpZiAocGFyc2VkRmllbGQuaW5kZXggPj0gZXhlY1Jlc3VsdC5sZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoYEJVRzogRmllbGQgaW5kZXggbm90IGZvdW5kIGluIHBhdHRlcidzIHJlZ3VsYXIgZXhwcmVzc2lvbiBleGVjdXRpb24gcmVzdWx0YCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdmFsdWUgPSBjb252ZXJ0RmllbGRWYWx1ZSggcGFyc2VkRmllbGQsIGV4ZWNSZXN1bHRbcGFyc2VkRmllbGQuaW5kZXhdKTtcclxuXHRcdGlmICghcGFyc2VkRmllbGQuaXNBcnJheSlcclxuXHRcdFx0ZmllbGRzW3BhcnNlZEZpZWxkLm5hbWVdID0gdmFsdWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBhcnIgPSBmaWVsZHNbcGFyc2VkRmllbGQubmFtZV0gYXMgYXBpLk11bHRpRmllbGRWYWx1ZVR5cGU7XHJcblx0XHRcdGlmIChhcnIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFyciA9IFtdO1xyXG5cdFx0XHRcdGZpZWxkc1twYXJzZWRGaWVsZC5uYW1lXSA9IGFycjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXJyLnB1c2goIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIHN0cmluZyBhcnJheSBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBzZWdtZW50IGFycmF5LiBGaWVsZHMgd2lsbCBiZSBhZGRlZFxyXG4vLyB0byB0aGUgZ2l2ZW4gcmVzdWx0IG9iamVjdC5cclxuZnVuY3Rpb24gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGFjdHVhbFNlZ21lbnRzOiBzdHJpbmdbXSwgcGFyc2VkU2VnbWVudHM6IGFwaS5JUGFyc2VkU2VnbWVudFtdLFxyXG5cdGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0aWYgKCFhY3R1YWxTZWdtZW50cyAmJiAhcGFyc2VkU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghYWN0dWFsU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IGhhdmUgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyB0aGF0IGV4aXN0cyBpbiB0aGUgcGF0dGVybmA7XHJcblx0ZWxzZSBpZiAoIXBhcnNlZFNlZ21lbnRzKVxyXG5cdFx0cmV0dXJuIGBVUkwgaGFzIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBwYXR0ZXJuYDtcclxuXHJcblx0Ly8gRm9yIGVhY2ggcGFyc2VkIHNlZ21lbnQgd2UgY3JlYXRlIGEgY29tcGlsZWQgc2VnbWVudCBleGNlcHQgaW4gb25lIGNhc2U6IGZvciBcIm9uZSBvciBtb3JlXCJcclxuXHQvLyBwYXJzZWQgc2VnbWVudHMgd2UgY3JlYXRlIHR3byBjb21waWxlZCBzZWdtZW50IC0gb25lIHNpbmdsZSBtYW5kYXRvcnkgYW5kIG9uZSBtdWx0aSBhbmRcclxuXHQvLyBvcHRpb25hbC5cclxuXHRsZXQgY29tcGlsZWRTZWdtZW50czogQ29tcGlsZWRTZWdtZW50W10gPSBbXTtcclxuXHRmb3IoIGxldCBwYXJzZWRTZWdtZW50IG9mIHBhcnNlZFNlZ21lbnRzKVxyXG5cdHtcclxuXHRcdGlmIChwYXJzZWRTZWdtZW50LmlzTXVsdGkgJiYgIXBhcnNlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdHtcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCBmYWxzZSkpO1xyXG5cdFx0XHRjb21waWxlZFNlZ21lbnRzLnB1c2goIG5ldyBDb21waWxlZFNlZ21lbnQoIHBhcnNlZFNlZ21lbnQsIHRydWUpKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCBwYXJzZWRTZWdtZW50LmlzT3B0aW9uYWwpKTtcclxuXHR9XHJcblxyXG5cdC8vIGNhbGwgcmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXR1cm4gdGhlIG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcyBpZiB0aGVyZSBpcyBhIG1hdGNoXHJcblx0Ly8gb3IgbnVsbCBpZiB0aGVyZSBpcyBub3QuXHJcblx0aWYgKHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cyggYWN0dWFsU2VnbWVudHMsIDAsIGNvbXBpbGVkU2VnbWVudHMsIDAsIGZpZWxkcykpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGRvZXNuJ3QgbWF0Y2ggdGhlIHBhdHRlcm5gO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRyaWVzIHRvIG1hdGNoIGFjdHVhbCBzZWdtZW50cyB0byB0aGUgcGF0dGVybiBzdGFydGluZyBmcm9tIHRoZSBnaXZlbiBpbmRleCBpbiBlYWNoIGFycmF5LiBJZlxyXG4vLyB0aGVyZSBpcyBhIG1hY3RoLCByZXR1cm5zIGEgbm9uLW51bGwgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzIChpZiBubyBmaWVsZHMgZm91bmQsIHJldHVybnMgYW5cclxuLy8gZW1wdHkgb2JqZWN0KS4gSWYgdGhlcmUgaXMgbm8gbWF0Y2ggcmV0dXJucyBudWxsLlxyXG5mdW5jdGlvbiB0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzOiBzdHJpbmdbXSwgYWN0dWFsU3RhcnRJbmRleDogbnVtYmVyLFxyXG5cdFx0XHRcdGNvbXBpbGVkU2VnbWVudHM6IENvbXBpbGVkU2VnbWVudFtdLCBjb21waWxlZFN0YXJ0SW5kZXg6IG51bWJlcixcclxuXHRcdFx0XHRmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGxvb3Agb3ZlciBjb21waWxlZCBzZWdtZW50cy4gSWYgdGhlIHNlZ21lbnQgaXMgbWFuZGF0b3J5LCB3ZSBjb21wYXJlIGl0IHRvIHRoZSBhY3R1YWxcclxuXHQvLyBzZWdtZW50IGFuZCBpZiB0aGVyZSBpcyBubyBtYXRjaCwgdGhlIG1hdGNoaW5nIGZhaWxzLiBJZiB0aGUgc2VnbWVudCBpcyBvcHRpb25hbCwgd2UgY2FsbFxyXG5cdC8vIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZlbHkgc3RhcnRpbmcgZnJvbSB0aGUgbmV4dCBjb21waWxlZCBzZWdtZW50LiBJZiB0aGlzIGNhbGwgcmV0dXJuc1xyXG5cdC8vIG51bGwgKG5vIG1hdGNoKSwgdGhlbiB3ZSBtYXAgdGhlIGFjdHVhbCBzZWdtZW50IHRvIHRoZSBjb21waWxlZCBzZWdtZW50IGFuZCBhZHZhbmNlIHRoZVxyXG5cdC8vIGluZGljZXMuXHJcblx0bGV0IGFjdHVhbEN1cnJJbmRleCA9IGFjdHVhbFN0YXJ0SW5kZXg7XHJcblx0bGV0IGNvbXBpbGVkQ3VyckluZGV4ID0gY29tcGlsZWRTdGFydEluZGV4O1xyXG5cdHdoaWxlKCBjb21waWxlZEN1cnJJbmRleCA8IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoICYmIGFjdHVhbEN1cnJJbmRleCA8IGFjdHVhbFNlZ21lbnRzLmxlbmd0aClcclxuXHR7XHJcblx0XHRsZXQgY29tcGlsZWRTZWdtZW50ID0gY29tcGlsZWRTZWdtZW50c1tjb21waWxlZEN1cnJJbmRleF07XHJcblx0XHRsZXQgYWN0dWFsU2VnbWVudCA9IGFjdHVhbFNlZ21lbnRzW2FjdHVhbEN1cnJJbmRleF07XHJcblx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb21wYXJlIG1hbmRhdG9yeSBzZWdtZW50IHdpdGggdGhlIGFjdHVhbCBvbmVcclxuXHRcdFx0aWYgKHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQsIGZpZWxkcykpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb21waWxlZEN1cnJJbmRleCsrO1xyXG5cdFx0XHRcdGFjdHVhbEN1cnJJbmRleCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBwYXNzaW5nIHRoZSBuZXh0IGNvbXBpbGVkIHNlZ21lbnQgaW5kZXhcclxuXHRcdFx0bGV0IHRlbXBGaWVsZHM6IGFwaS5GaWVsZEJhZyA9IHt9XHJcblx0XHRcdGlmICh0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzLCBhY3R1YWxDdXJySW5kZXgsXHJcblx0XHRcdFx0Y29tcGlsZWRTZWdtZW50cywgY29tcGlsZWRDdXJySW5kZXggKyAxLCB0ZW1wRmllbGRzKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoZXJlIGlzIGEgbWF0Y2hcclxuXHRcdFx0XHRtZXJnZUZpZWxkcyggZmllbGRzLCB0ZW1wRmllbGRzKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjb21wYXJlIHRoaXMgc2VnbWVudCB3aXRoIHRoZSBhY3R1YWwgb25lXHJcblx0XHRcdFx0aWYgKHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQsIHRlbXBGaWVsZHMpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNvcHkgZmllbGQgdmFsdWVzIGFuZCBhZHZhbmNlIHRoZSBhY3R1YWwgaW5kZXhcclxuXHRcdFx0XHRcdG1lcmdlRmllbGRzKCBmaWVsZHMsIHRlbXBGaWVsZHMpO1xyXG5cdFx0XHRcdFx0YWN0dWFsQ3VyckluZGV4Kys7XHJcblxyXG5cdFx0XHRcdFx0Ly8gYWR2YW5jZSB0aGUgY29tcGlsZWQgaW5kZXggb25seSBpZiB0aGlzIGZpZWxkIGlzIGEgc2luZ3VsYXIgb25lXHJcblx0XHRcdFx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5wYXJzZWRTZWdtZW50LmlzTXVsdGkpXHJcblx0XHRcdFx0XHRcdGNvbXBpbGVkQ3VyckluZGV4Kys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gd2UgYXJlIGhlcmUgaWYgZWl0aGVyIGNvbXBpbGUgc2VnbWVudHMgb3IgYWN0dWFsIHNlZ21lbnRzIG9yIGJvdGggYXJlIGV4aG9zdGVkLiBJZiBib3RoXHJcblx0Ly8gYXJlIGV4aG9zdGVkLCB0aGVyZSBpcyBhIG1hdGNoLiBJZiBjb21waWxlZCBhcmUgZXhob3N0ZWQgYnV0IGFjdHVhbCBhcmUgbm90LCB0aGVyZSBpcyBub1xyXG5cdC8vIG1hdGNoLiBJZiBhY3R1YWwgYXJlIGV4aG9zdGVkIGJ1dCBjb21waWxlZCBhcmUgbm90LCB0aGVyZSBpcyBtYXRjaCBvbmx5IGlmIGFsbCB0aGVcclxuXHQvLyByZW1haW5pbmcgY29tcGlsZWQgc2VnbWVudHMgYXJlIG9wdGlvbmFsLlxyXG5cdGlmIChjb21waWxlZEN1cnJJbmRleCA9PT0gY29tcGlsZWRTZWdtZW50cy5sZW5ndGggJiYgYWN0dWFsQ3VyckluZGV4ID09PSBhY3R1YWxTZWdtZW50cy5sZW5ndGgpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChjb21waWxlZEN1cnJJbmRleCA9PT0gY29tcGlsZWRTZWdtZW50cy5sZW5ndGgpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSBjb21waWxlZEN1cnJJbmRleDsgaSA8IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb21waWxlZFNlZ21lbnQgPSBjb21waWxlZFNlZ21lbnRzW2ldO1xyXG5cdFx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gc3RyaW5nIG9iamVjdCBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBxdWVyeSBzdHJpbmcuIEZpZWxkcyB3aWxsIGJlIGFkZGVkXHJcbi8vIHRvIHRoZSBnaXZlbiByZXN1bHQgb2JqZWN0LlxyXG5mdW5jdGlvbiBtYXRjaFF1ZXJ5U3RyaW5nKCBhY3R1YWxRdWVyeTogeyBbUDogc3RyaW5nXTogc3RyaW5nW10gfSwgcGFyc2VkUXVlcnk6IGFwaS5JUGFyc2VkUXVlcnlTdHJpbmcsXHJcblx0XHRcdFx0IGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0aWYgKCFwYXJzZWRRdWVyeSlcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKCFhY3R1YWxRdWVyeSlcclxuXHR7XHJcblx0XHRpZiAoT2JqZWN0LmtleXMoIHBhcnNlZFF1ZXJ5LnBhcnNlZFFTUHMpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBgVVJMIGRvZXNuJ3QgaGF2ZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdH1cclxuXHJcblx0Ly8gZ28gb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlci4gSWYgdGhlcmUgaXMgYW55IG5vbi1vcHRpb25hbFxyXG5cdC8vIHBhcmFtZXRlciB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFjdHVhbCBVUkwsIHdlIGZhaWwgdGhlIG1hdGNoLlxyXG5cdGZvciggbGV0IHFzcE5hbWUgaW4gcGFyc2VkUXVlcnkucGFyc2VkUVNQcylcclxuXHR7XHJcblx0XHRpZiAoYWN0dWFsUXVlcnlbcXNwTmFtZV0gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIGBVUkwgZG9lc24ndCBoYXZlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nYDtcclxuXHR9XHJcblxyXG5cdC8vIGdvIG92ZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgaW4gdGhlIGFjdHVhbCBVUkxcclxuXHRmb3IoIGxldCBxc3BOYW1lIGluIGFjdHVhbFF1ZXJ5KVxyXG5cdHtcclxuXHRcdC8vIGZpbmQgdGhpcyBuYW1lIGluIHRoZSBwYXR0ZXJuLiBJZiB0aGUgcGF0dGVybiBkb2Vzbid0IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIgYW5kIHRoZVxyXG5cdFx0Ly8gcGF0dGVybiBkb2Vzbid0IGFsbG93IGZvciBleHRyYSBwYXJhbWV0ZXJzLCB0aGVuIHRoZXJlIGlzIG5vIG1hdGNoLiBPdGhlcndpc2UsIHRoaXNcclxuXHRcdC8vIHBhcmFtZXRlciBpcyBzaW1wbHkgaWdub3JlZC5cclxuXHRcdGxldCBwYXJzZWRTZWdtZW50ID0gcGFyc2VkUXVlcnkucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50O1xyXG5cdFx0aWYgKCFwYXJzZWRTZWdtZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXBhcnNlZFF1ZXJ5LmFsbG93RXh0cmFRdWVyeVBhcmFtcylcclxuXHRcdFx0XHRyZXR1cm4gYFVSTCBoYXMgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfScgdGhhdCBpcyBub3Qgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZm9yIHNpbmd1bGFyIHNlZ21lbnQgdGhlIHBhcmFtZXRlciBtdXN0IGJlIHByZXNlbnQgb25seSBvbmNlXHJcblx0XHRcdGxldCBxc3BWYWx1ZXMgPSBhY3R1YWxRdWVyeVtxc3BOYW1lXTtcclxuXHRcdFx0aWYgKCFwYXJzZWRTZWdtZW50LmlzTXVsdGkgJiYgcXNwVmFsdWVzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0cmV0dXJuIGBVUkwgaGFzIG11bHRpcGxlIHZhbHVlcyBmb3IgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfScgd2hpbGUgcGF0dGVybiBkb2Vzbid0IHNwZWNpZnkgaXQgYXMgbXVsdGlgO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgcXNwVmFsdWUgb2YgcXNwVmFsdWVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCF0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIHFzcFZhbHVlLCBwYXJzZWRTZWdtZW50LCBmaWVsZHMpKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGBVUkwncyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyBkb2Vzbid0IG1hdGNoIHRoYXQgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWVyZ2VzIGZpZWxkIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0IHRvIHRoZSB0YXJnZXQgb25lLlxyXG5mdW5jdGlvbiBtZXJnZUZpZWxkcyggdGFyZ2V0OiB7IFtQOiBzdHJpbmddOiBhcGkuRmllbGRWYWx1ZVR5cGUgfSwgc291cmNlOiB7IFtQOiBzdHJpbmddOiBhcGkuRmllbGRWYWx1ZVR5cGUgfSk6IHZvaWRcclxue1xyXG5cdGZvciggbGV0IGZpZWxkTmFtZSBpbiBzb3VyY2UpXHJcblx0e1xyXG5cdFx0bGV0IHNvdXJjZVZhbCA9IHNvdXJjZVtmaWVsZE5hbWVdO1xyXG5cdFx0bGV0IHRhcmdldFZhbCA9IHRhcmdldFtmaWVsZE5hbWVdO1xyXG5cdFx0aWYgKHRhcmdldFZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0YXJnZXRbZmllbGROYW1lXSA9IHNvdXJjZVZhbDtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gYm90aCBzb3VyY2UgYW5kIHRhcmdldCB2YWx1ZXMgbXVzdCBiZSBhcnJheXNcclxuXHRcdFx0bGV0IHNvdXJjZUFyciA9IHNvdXJjZVZhbCBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0bGV0IHRhcmdldEFyciA9IHRhcmdldFZhbCBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0Zm9yKCBsZXQgc291cmNlSXRlbSBvZiBzb3VyY2VBcnIpXHJcblx0XHRcdFx0dGFyZ2V0QXJyLnB1c2goIHNvdXJjZUl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIGZpZWxkIHZhbHVlIGNvbnZlcnRlZCB0byB0aGUgcmVxdWlyZWQgZm9ybWF0XHJcbmZ1bmN0aW9uIGNvbnZlcnRGaWVsZFZhbHVlKCBwYXJzZWRGaWVsZDogYXBpLklQYXJzZWRGaWVsZCwgc3RyaW5nVmFsdWU6IHN0cmluZyk6IGFwaS5TaW5nbGVGaWVsZFZhbHVlVHlwZVxyXG57XHJcblx0c3dpdGNoKCBwYXJzZWRGaWVsZC5mb3JtYXQpXHJcblx0e1xyXG5cdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuU3RyaW5nOlxyXG5cdFx0XHRyZXR1cm4gc3RyaW5nVmFsdWU7XHJcblxyXG5cdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuSW50ZWdlcjpcclxuXHRcdHtcclxuXHRcdFx0bGV0IG4gPSBwYXJzZUludCggc3RyaW5nVmFsdWUpO1xyXG5cdFx0XHRyZXR1cm4gaXNOYU4oIG4pID8gc3RyaW5nVmFsdWUgOiBuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkZsb2F0OlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZiA9IHBhcnNlRmxvYXQoIHN0cmluZ1ZhbHVlKTtcclxuXHRcdFx0cmV0dXJuIGlzTmFOKCBmKSA/IHN0cmluZ1ZhbHVlIDogZjtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5Cb29sOlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IHN0cmluZ1ZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmICh2ID09PSBcInRydWVcIiB8fCB2ID09PSBcInRcIiB8fCB2ID09PSBcInllc1wiIHx8IHYgPT09IFwieVwiIHx8IHYgPT09IFwiMVwiKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmICh2ID09PSBcImZhbHNlXCIgfHwgdiA9PT0gXCJmXCIgfHwgdiA9PT0gXCJub1wiIHx8IHYgPT09IFwiblwiIHx8IHYgPT09IFwiMFwiKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBzdHJpbmdWYWx1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RyaW5nVmFsdWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ29tcGlsZWRTZWdtZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgc2hvdWxkIGJlIGNvbXBhcmVkIHRvIGFcclxuLy8gc2VnbWVudCBmcm9tIHRoZSBhY3R1YWwgVVJMIHBhcnQuIENvbXBpbGVkIHNlZ21lbnQgY29udGFpbnMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBmbGFnXHJcbi8vIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHNlZ21lbnQgaXMgb3B0aW9uYWwuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBDb21waWxlZFNlZ21lbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcGFyc2VkIHNlZ21lbnQgb2JqZWN0LlxyXG5cdHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBzZWdtZW50IGlzIG9wdGlvbmFsLiBGb3IgZWFjaCBcIm9uZS1vci1tb3JlXCIgcGFyc2VkIHNlZ2VtZW50c1xyXG5cdC8vIHdlIGNyZWF0ZSB0d28gY29tcGlsZWQgc2VnbWVudHM6IHRoZSBmaXJzdCBpcyBtYW5kYXRvcnkgYW5kIHRoZSBzZWNvbmQgaXMgb3B0aW9uYWwuIFRoYXQnc1xyXG5cdC8vIHdoeSB3ZSBoYXZlIHRoaWUgaXNPcHRpb25hbCBmbGFnIGhlcmUuXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCwgaXNPcHRpb25hbDogYm9vbGVhbilcclxuXHR7XHJcblx0XHR0aGlzLnBhcnNlZFNlZ21lbnQgPSBwYXJzZWRTZWdtZW50O1xyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gaXNPcHRpb25hbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgY2xhc3MgZGVzY3JpYmVzIHRoZSByZXN1bHQgb2YgbWF0Y2hpbmcgYSBVUkwgdG8gYSBwYXR0ZXJuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVXJsUGF0dGVybk1hdGNoUmVzdWx0IGltcGxlbWVudHMgYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbWF0Y2ggd2FzIHN1Y2Nlc3N1bCAqL1xyXG5cdHB1YmxpYyBnZXQgc3VjY2VzcygpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmVycm9ycyB8fCB0aGlzLmVycm9ycy5sZW5ndGggPT09IDA7IH1cclxuXHJcblx0LyoqIFBhcnNlZCBhY3R1YWwgVVJMICovXHJcblx0cGFyc2VkVVJMOiBhcGkuSVBhcnNlZEFjdHVhbFVSTDtcclxuXHJcblx0LyoqIEVycm9yIG9iamVjdCBpbiBjYXNlIHRoZSBtYXRjaCB3YXMgbm90IHN1Y2Nlc3NmdWwgKi9cclxuXHRwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIEZpZWxkIG5hbWVzIGFuZCB2YWx1ZXMgKi9cclxuXHRwdWJsaWMgZmllbGRzOiBhcGkuRmllbGRCYWc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltdXJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGlcIjtcclxuIiwiaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL2FwaVwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQYXJzZXIncyBlbnRyeSBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhdHRlcm4oIHBhdHRlcm5TdHJpbmc6IHN0cmluZyk6IGFwaS5JUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0Ly8gaW5pdGlhbGl6ZSBnbG9iYWwgdmFyaWFibGVzXHJcblx0Z19wYXR0ZXJuU3RyaW5nID0gcGF0dGVyblN0cmluZztcclxuXHRnX3BhdHRlcm5TdHJpbmdMZW5ndGggPSAwO1xyXG5cdGdfY3VyckluZGV4ID0gMDtcclxuXHRnX2N1cnJDaGFyID0gJyc7XHJcblxyXG5cdGlmICghcGF0dGVyblN0cmluZylcclxuXHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggXCJVUkwgcGF0dGVybiBjYW5ub3QgYmUgZW1wdHlcIik7XHJcblxyXG5cdGdfcGF0dGVyblN0cmluZ0xlbmd0aCA9IHBhdHRlcm5TdHJpbmcubGVuZ3RoO1xyXG5cdGdfY3VyckNoYXIgPSBwYXR0ZXJuU3RyaW5nWzBdO1xyXG5cclxuXHQvLyBDcmVhdGUgdGhlIHRvcC1sZXZlbCBwYXJzaW5nIG9iamVjdCBhbmQgcnVuIHRoZSBwYXJzaW5nIHByb2Nlc3MuXHJcblx0bGV0IHBhcnNlZFBhdHRlcm4gPSBuZXcgUGFyc2VkVXJsUGF0dGVybigpO1xyXG5cdHBhcnNlZFBhdHRlcm4ucGFyc2UoKTtcclxuXHRyZXR1cm4gcGFyc2VkUGF0dGVybjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5lIFwiZ2xvYmFsXCIgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gYWxsIG9iamVjdHMgaW4gdGhpcyBtb2R1bGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQYXR0ZXJuIHN0cmluZyBiZWluZyBwYXJzZWRcclxubGV0IGdfcGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuLy8gTGVuZ3RoIG9mIHRoZSBwYXR0ZXJuIHN0cmluZ1xyXG5sZXQgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4vLyBJbmRleCBvZiB0aGUgY2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuIHN0cmluZyB0aGF0IHRoZSBwYXJzZXIgaXMgY3VycmVudGx5IHdvcmtpbmcgd2l0aC5cclxubGV0IGdfY3VyckluZGV4OiBudW1iZXI7XHJcblxyXG4vLyBDaGFyYWN0ZXIgaW4gdGhlIHBhdHRlcm4gc3RyaW5nIHVuZGVyIHRoZSBjdXJyZW50IGluZGV4LlxyXG5sZXQgZ19jdXJyQ2hhcjogc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5lIFwiZ2xvYmFsXCIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gYWxsIG9iamVjdHMgaW4gdGhpcyBtb2R1bGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBEZXRlcm1pbmVzIGlmIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi5cclxuZnVuY3Rpb24gZ19pc0VuZCgpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gZ19jdXJySW5kZXggPj0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRocm93cyBleGNlcHRpb24gaWYgd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLlxyXG5mdW5jdGlvbiBnX2NoZWNrRW5kKCk6IHZvaWRcclxue1xyXG5cdGlmIChnX2N1cnJJbmRleCA9PT0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoKVxyXG5cdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBVUkwgcGF0dGVybiBlbmRgKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNb3ZlcyB0aGUgZ2l2ZW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuZnVuY3Rpb24gZ19tb3ZlKCBkOiBudW1iZXIgPSAxKTogYm9vbGVhblxyXG57XHJcblx0aWYgKGdfY3VyckluZGV4IDw9IGdfcGF0dGVyblN0cmluZ0xlbmd0aCAtIGQpXHJcblx0e1xyXG5cdFx0Z19jdXJySW5kZXggKz0gZDtcclxuXHRcdGdfY3VyckNoYXIgPSBnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRnX2N1cnJJbmRleCA9IGdfcGF0dGVyblN0cmluZ0xlbmd0aDtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgdG8gdGhlIGdpdmVuIHBvc2l0aW9uIGluIHRoZSBidWZmZXIuXHJcbmZ1bmN0aW9uIGdfbW92ZVRvKCBpOiBudW1iZXIpOiBib29sZWFuXHJcbntcclxuXHRnX2N1cnJJbmRleCA9IGk7XHJcblx0aWYgKGdfY3VyckluZGV4IDwgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoKVxyXG5cdHtcclxuXHRcdGdfY3VyckNoYXIgPSBnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGNoYXJhY3RlciBpcyBhIGRlbGltaXRlciB0aGF0IGNhbm5vdCBiZSB1c2VkIGFzIHRleHQgd2l0aGluIFVSTFxyXG5mdW5jdGlvbiBnX2lzRGVsaW1pdGVyKCBjOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCIhQCMkJV4mKigpKz1bXXt9OjtcXFwiJzw+LC4/L3xcXFxcYH5cIi5pbmRleE9mKGMpID49IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRVcmxQYXR0ZXJuIGNsYXNzIGlzIHRoZSB0b3AtbGV2ZWwgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHJlc3VsdCBvZiBVUkwgcGFyc2luZy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFVybFBhdHRlcm4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdC8vIE9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGZvciB3aGljaCB0aGlzIG9iamVjdCB3YXMgY3JlYXRlZC5cclxuXHRwdWJsaWMgcGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuXHQvLyBQcm90b2NvbCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHByb3RvY29sKCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlByb3RvY29sXSBhcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIEhvc3RuYW1lIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgaG9zdG5hbWUoKTogYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5Ib3N0bmFtZV0gYXMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIFBvcnQgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBwb3J0KCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlBvcnRdIGFzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUGF0aCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHBhdGgoKTogYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5QYXRoXSBhcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUXVlcnkgU3RyaW5nIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcXVlcnkoKTogYXBpLklQYXJzZWRRdWVyeVN0cmluZ1xyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUXVlcnldIGFzIFBhcnNlZFF1ZXJ5U3RyaW5nIH1cclxuXHJcblx0Ly8gSGFzaCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IGhhc2goKTogYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuSGFzaF0gYXMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBBcnJheSBvZiBVUkwgcGFydC4gSW5kZXhlcyBhcmUgdmFsdWVzIGZyb20gdGhlIFVybFBhcnQgZW51bWVyYXRpb24uXHJcblx0cHVibGljIHBhcnRzOiBQYXJzZWRVcmxQYXJ0W107XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHRoaXMucGF0dGVyblN0cmluZyA9IGdfcGF0dGVyblN0cmluZztcclxuXHRcdHRoaXMucGFydHMgPSBbXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyc2VzIHRoZSBlbnRpcmUgVVJMIHBhdHRlcm4gcGFydCBieSBwYXJ0XHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBsb29wIG9mIHBhcnNpbmcgVVJMIHBhcnRzXHJcblx0XHRmb3IoIGxldCBwYXJ0ID0gdGhpcy5maW5kRmlyc3RVcmxQYXJ0KCk7IHBhcnQgIT09IG51bGw7IHBhcnQgPSBwYXJ0LmdldE5leHRVcmxQYXJ0KCkpXHJcblx0XHR7XHJcblx0XHRcdHBhcnQucGFyc2UoKTtcclxuXHRcdFx0dGhpcy5wYXJ0c1twYXJ0LnVybFBhcnRdID0gcGFydDtcclxuXHRcdFx0aWYgKGdfaXNFbmQoKSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB0aGUgZmlyc3QgVVJMIHBhcnQgdGhlIHBhcnNlciB3aWxsIGJlIHdvcmtpbmcgb24uXHJcblx0cHJpdmF0ZSBmaW5kRmlyc3RVcmxQYXJ0KCk6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gXCIvXCIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChnX3BhdHRlcm5TdHJpbmdMZW5ndGggPiAxICYmIGdfcGF0dGVyblN0cmluZ1sxXSA9PT0gXCIvXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoMik7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIb3N0bmFtZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkUGF0aCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IGdfcGF0dGVyblN0cmluZy5pbmRleE9mKCBcIjovL1wiKTtcclxuXHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFByb3RvY29sKCk7XHJcblx0XHRcdGVsc2UgaWYgKGluZGV4IDwgMClcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIFwiVVJMIHBhdHRlcm4gY2Fubm90IHN0YXJ0IGZyb20gJzovLydcIik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVG9rZW4gaXMgYSBiYXNlIGNsYXNzIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFRva2VuXHJcbntcclxuXHQvLyBMb2NhdGlvbiBvZiB0aGUgcGFydCBpbiB0aGUgb3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgY29udGFpbmluZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZVxyXG5cdC8vIHRoZSBwYXJ0IGJlZ2lucyBhbmQgaXRzIGxlbmd0aC5cclxuXHRsb2NhdGlvbjogeyBzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciB9O1xyXG5cclxuXHQvKiogQ29udGVudCBvZiB0aGUgdG9rZW4gKi9cclxuXHR0b2tlblN0aW5nOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLmxvY2F0aW9uID0geyBzdGFydDogZ19jdXJySW5kZXgsIGxlbmd0aDogMCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpbmFsaXplKClcclxuXHR7XHJcblx0XHR0aGlzLmxvY2F0aW9uLmxlbmd0aCA9IGdfY3VyckluZGV4IC0gdGhpcy5sb2NhdGlvbi5zdGFydDtcclxuXHRcdHRoaXMudG9rZW5TdGluZyA9IGdfcGF0dGVyblN0cmluZy5zdWJzdHIoIHRoaXMubG9jYXRpb24uc3RhcnQsIHRoaXMubG9jYXRpb24ubGVuZ3RoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRVcmxQYXJ0IGlzIGEgYmFzZSBjbGFzcyB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkVXJsUGFydFxyXG57XHJcblx0Ly8gVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy5cclxuXHR1cmxQYXJ0OiBhcGkuRVVybFBhcnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wYXJpc29uIG9mIHRoaXMgcGFydCBzaG9sZCBiZSBjYXNlLXNlbnNpdGl2ZSBvciBub3QuXHJcblx0Y2FzZVNlbnNpdGl2ZTogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudXJsUGFydCA9IHVybFBhcnQ7XHJcblx0XHR0aGlzLmNhc2VTZW5zaXRpdmUgPSBjYXNlU2Vuc2l0aXZlO1xyXG5cdH1cclxuXHJcblx0Ly8gUGFyc2VzIHRoaXMgdG9rZW5cclxuXHRwdWJsaWMgYWJzdHJhY3QgcGFyc2UoKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyBhbmQgY3JhdGVzIGlmIG5lY2Vzc2FyeSB0aGUgbmV4dCBVUkwgcGFydCBiYXNlZCBvbiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnQ7XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbi8vIGRlZmluZSBhIHNpbmdsZSBzZWdtZW50OiBwcm90b2NvbCwgcG9ydCBhbmQgaGFzaC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgUGFyc2VkVXJsUGFydCBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdC8vIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuXHJcblx0c2VnbWVudDogUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlciggdXJsUGFydCwgY2FzZVNlbnNpdGl2ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdHNlZ21lbnQucGFyc2UoIHRoaXMuZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKSwgZmFsc2UsIHRoaXMuY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHR0aGlzLnNlZ21lbnQgPSBzZWdtZW50O1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXSB7IHJldHVybiBbdGhpcy5zZWdtZW50XTsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVyLCB3aGljaCBpbmRpY2F0ZSBzZWdtZW50IGVuZCBmb3IgdGhlIGdpdmVuIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4vLyBjYW4gZGVmaW5lIG11bHRpcGxlIHNlZ21lbnRzOiBob3N0bmFtZSBhbmQgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHNlZ21lbnRzOiBQYXJzZWRTZWdtZW50W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVybFBhcnQsIGNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5zZWdtZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcGFydEVuZENoYXJhY3RlcnMgPSB0aGlzLmdldFBhcnRFbmRDaGFyYWN0ZXJzKCk7XHJcblxyXG5cdFx0Ly8gcGFyc2Ugc2VnbWVudHMgdW50aWwgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzIHRoZSBlbmQgb2YgdGhlIFVSTCBwYXJ0XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0XHRzZWdtZW50LnBhcnNlKCB0aGlzLmdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCksIHRydWUsIHRoaXMuY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHRcdHRoaXMuc2VnbWVudHMucHVzaCggc2VnbWVudCk7XHJcblx0XHRcdGlmIChwYXJ0RW5kQ2hhcmFjdGVycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXSB7IHJldHVybiB0aGlzLnNlZ21lbnRzOyB9XHJcblxyXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjb250YWlucyBjaGFyYWN0ZXIsIHdoaWNoIGluZGljYXRlIHNlZ21lbnQgZW5kIGZvciB0aGUgZ2l2ZW4gVVJMIHBhcnQuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZztcclxuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFByb3RvY29sIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwcm90b2NvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFByb3RvY29sIGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0LlByb3RvY29sLCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIjpcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gXCI6XCIgJiYgZ19jdXJySW5kZXggKyAyIDwgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoICYmXHJcblx0XHRcdGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleCsxXSA9PT0gXCIvXCIgJiYgZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4KzJdID09PSBcIi9cIilcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKDMpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdGxldCBwYXJ0ID0gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdHJldHVybiBwYXJ0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlcnMgYWZ0ZXIgcHJvdG9jb2wgcGFydGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEhvc3RuYW1lIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBob3N0bmFtZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEhvc3RuYW1lIGV4dGVuZHMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuSG9zdG5hbWUsIGZhbHNlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLjovPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0UGFydEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiOi8/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnOicpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUG9ydCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJy8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFBhdGgoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJHtnX2N1cnJDaGFyfSBhZnRlciBob3N0bmFtZSBzZWdtZW50YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUG9ydCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcG9ydC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFBvcnQgZXh0ZW5kcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuUG9ydCwgZmFsc2UpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCIvPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJy8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFBhdGgoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJHtnX2N1cnJDaGFyfSBhZnRlciBwb3J0IHBhcnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQYXRoIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwYXRoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUGF0aCBleHRlbmRzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0LlBhdGgsIHRydWUpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCIvPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0UGFydEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFF1ZXJ5U3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciBhZnRlciBwYXRoIHNlZ21lbnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRRdWVyeVN0cmluZyBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFF1ZXJ5U3RyaW5nIGV4dGVuZHMgUGFyc2VkVXJsUGFydCBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkUXVlcnlTdHJpbmdcclxue1xyXG5cdC8vIFF1ZXJ5IHN0cmluZyBkZWZpbmVzIG9uZSBzZWdlbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS5cclxuXHRwYXJzZWRRU1BzOiB7IFtQOiBzdHJpbmddOiBhcGkuSVBhcnNlZFFTUCB9O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBub3Qgc3BlY2lmaWVkIGV4cGxpY2l0bHkgaW4gdGhlIHBhdHRlcm5cclxuXHQvLyB3aWxsIGJlIGFsbG93ZWQgd2hlbiBwYXJzaW5nIGFjdHVhbCBVUkxzLlxyXG5cdGFsbG93RXh0cmFRdWVyeVBhcmFtczogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBhcGkuRVVybFBhcnQuUXVlcnksIHRydWUpO1xyXG5cclxuXHRcdHRoaXMucGFyc2VkUVNQcyA9IHt9O1xyXG5cdFx0dGhpcy5hbGxvd0V4dHJhUXVlcnlQYXJhbXMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwYXJzZSBzZWdtZW50cyB1bnRpbCB0aGUgY3VycmVudCBjaGFyYWN0ZXIgaXMgdGhlIGVuZCBvZiB0aGUgVVJMIHBhcnRcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIGdfY3VyckNoYXIgIT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdfY3VyckNoYXIgPT09ICchJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHNwZWNpYWwgY2FzZSBmb3IgZGlzYWJsaW5nIG1hdGNoaW5nIHdpdGggZXh0cmEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcclxuXHRcdFx0XHR0aGlzLmFsbG93RXh0cmFRdWVyeVBhcmFtcyA9IGZhbHNlO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBxc3AgPSBuZXcgUGFyc2VkUVNQKCk7XHJcblx0XHRcdFx0cXNwLnBhcnNlKCk7XHJcblx0XHRcdFx0aWYgKHFzcC5uYW1lIGluIHRoaXMucGFyc2VkUVNQcylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJHtxc3AubmFtZX0gYXBwZWFycyBtb3JlIHRoYW4gb25jZWApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VkUVNQc1txc3AubmFtZV0gPSBxc3A7XHJcblxyXG5cdFx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAnJicpXHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciBhZnRlciBxdWVyeSBzdHJpbmcgc2VnbWVudGApO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXVxyXG5cdHtcclxuXHRcdGxldCBzZWdtZW50czogUGFyc2VkU2VnbWVudFtdID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXHJcblx0XHRmb3IoIGxldCBxc3BOYW1lIGluIHRoaXMucGFyc2VkUVNQcylcclxuXHRcdFx0c2VnbWVudHMucHVzaCggdGhpcy5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQgYXMgUGFyc2VkU2VnbWVudCk7XHJcblxyXG5cdFx0cmV0dXJuIHNlZ21lbnRzO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEhhc2ggY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIGhhc2guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRIYXNoIGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0Lkhhc2gsIHRydWUpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRRU1AgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgbWF0Y2hpbmcgYSBzaW5nbGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFFTUCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRRU1Bcclxue1xyXG5cdC8vIFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgbmFtZS5cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFF1ZXJ5IFN0cmluZyBkZWZpbmVzIG9uZSBzZWdlbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS5cclxuXHRzZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHBhcmFtZXRlciBuYW1lXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiBcIj0mI1wiLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5uYW1lICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdGlmICghdGhpcy5uYW1lKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGRvZXNuJ3QgaGF2ZSBuYW1lYCk7XHJcblxyXG5cdFx0aWYgKGdfY3VyckNoYXIgIT09ICc9JylcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBkb2Vzbid0IGhhdmUgdmFsdWVgKTtcclxuXHJcblx0XHRnX21vdmUoKTtcclxuXHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdHNlZ21lbnQucGFyc2UoIFwiJiNcIiwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNlZ21lbnQgPSBzZWdtZW50O1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpc05hbWVFbmRDaGFyYWN0ZXIoIGM6IHN0cmluZylcclxuXHR7XHJcblx0XHRyZXR1cm4gXCI9JiNcIi5pbmRleE9mKCBjKSA+PSAwO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFNlZ21lbnQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSBzZWdtZW50IGluIGEgVVJMIHBhdHRlcm4gdGhhdCBjYW4gYmUgbWF0Y2hlZCB0byBvbmVcclxuLy8gb3IgbW9yZSBwYXJ0cyBvZiBhbiBhY3R1YWwgVVJMLiBFYWNoIHNlZ21lbnQgY2FuIGhhdmUgemVybyBvciBtb3JlIGZpZWxkcyBkZWZpbmVkIGluIGl0LlxyXG4vLyBBIGZpZWxkIGlzIGRlZmluZWQgZWl0aGVyIHdpdGggb3Igd2l0aG91dCBhIG5hbWUuIFVubmFtZWQgZmllbGRzIGFyZSBhbHNvIGNhbGxlZFxyXG4vLyBhbm9ueW1vdXMgYW5kIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCBhbiBpbmRleC4gV2hlbiB0aGUgVVJMIHBhdHRlcm4gaXMgcGFyc2VkIGludG8gc2VnbWVudHMsXHJcbi8vIHRoZSBhbm9ueW1vdXMgZmllbGRzIGFyZSBudW1iZXJlZCBzZXF1ZW50aWFsbHkgYWNjcm9zcyBtdWx0aXBsZSBzZWdtZW50cy4gVGhhdCBtZWFucyB0aGF0XHJcbi8vIGluZGV4ZXMgZG8gbm90IHJlc3RhcnQgZm9yIGVhY2ggc2VnbWVudCBhbmQgdGh1cyBpbmRleGVzIGZvciBhIHNlZ21lbnQncyBmaWVsZHMgbWF5IG5vdFxyXG4vLyBzdGFydCBmcm9tIHplcm8uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRTZWdtZW50IGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFNlZ21lbnRcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgY2FuIGJlIHJlcGVhdGVkIG11dGlwbGUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIGJvdGhcclxuXHQvLyBvcHRpb25hbCBhbmQgbXVsdGkgY2FuIGJlIHJlcGVhdGVkIHplcm8gb3IgbW9yZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgbm90IG9wdGlvbmFsIGJ1dFxyXG5cdC8vIG11bHRpIGNhbiBiZSByZXBlYXRlZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuXHRpc011bHRpOiBib29sZWFuO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZmllbGRzLiAqL1xyXG5cdGZpZWxkczogUGFyc2VkRmllbGRbXTtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc2VnbWVudCdzIG1hdGNoIHBhdHRlcm4uXHJcblx0cmVnRXhwOiBSZWdFeHA7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNPcHRpb25hbCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc011bHRpID0gZmFsc2U7XHJcblx0XHR0aGlzLmZpZWxkcyA9IFtdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcGFyc2UoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nLCBpc1BvdGVudGlhbGx5TXVsdGk6IGJvb2xlYW4sIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gYW5hbHl6ZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBzZWdtZW50IGFuZCBpZiBpdCB3YXMgYSBzcGVjaWFsIGNoYXJhY3RlciB0aGF0XHJcblx0XHQvLyBkZXRlcm1pbmVzIHRoZSBzZWdtZW50cyBvcHRpb25hbCBhbmQgbXVsdGkgZmxhZ3MsIG1vdmUgdG8gdGhlIG5leHQgY2hhcmFjdGVyLlxyXG5cdFx0aWYgKHRoaXMuYW5hbGl6ZUZpcnN0Q2hhciggc2VnbWVudEVuZENoYXJzLCBpc1BvdGVudGlhbGx5TXVsdGkpKVxyXG5cdFx0XHRnX21vdmUoKTtcclxuXHJcblx0XHQvLyBtYXRjaCBwYXR0ZXJuIG9mIHRoZSBzZWdtZW50IGNvbnNpc3Rpbmcgb2YgZWxlbWVudHMgZWFjaCBvZiB3aGljaCBpcyBlaXRoZXIgdGV4dCBvclxyXG5cdFx0Ly8gcmVndWxhciBleHByZXNzaW9uIG9yIGZpZWxkXHJcblx0XHRsZXQgbWF0Y2hQYXR0ZXJuOiAoUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwKVtdID0gW107XHJcblxyXG5cdFx0Ly8gcGFyc2UgdG9rZW5zIGluIHRoZSBzZWdtZW50ICh0ZXh0LCByZWdleHAsIGZpZWxkcykgdW50aWwgZWl0aGVyIHdlIHJlYWNoIHRoZSBlbmQgb2ZcclxuXHRcdC8vIHRoZSBlbnRpcmUgVVJMIHBhdHRlcm4gb3Igd2UgZW5jb3VudGVyIGEgc2VnbWVudCBkZWxpbWl0ZXJcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA8IDApXHJcblx0XHR7XHJcblx0XHRcdGxldCB0b2tlbjogUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwO1xyXG5cdFx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJ3snKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0bGV0IGZpZWxkID0gbmV3IFBhcnNlZEZpZWxkKCk7XHJcblx0XHRcdFx0ZmllbGQucGFyc2UoIHNlZ21lbnRFbmRDaGFycyk7XHJcblx0XHRcdFx0dG9rZW4gPSBmaWVsZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnKCcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRsZXQgcmVnRXhwID0gbmV3IFBhcnNlZFJlZ0V4cCgpO1xyXG5cdFx0XHRcdHJlZ0V4cC5wYXJzZSgpO1xyXG5cdFx0XHRcdHRva2VuID0gcmVnRXhwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCB0ZXh0ID0gbmV3IFBhcnNlZFRleHQoKTtcclxuXHRcdFx0XHR0ZXh0LnBhcnNlKCBzZWdtZW50RW5kQ2hhcnMgKyBcInsoXCIpO1xyXG5cdFx0XHRcdHRva2VuID0gdGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0Y2hQYXR0ZXJuLnB1c2goIHRva2VuKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdlbmVyYXRlUmVnRXhwKCBtYXRjaFBhdHRlcm4sIGNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBbmFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBzZWdtZW50IGFuZCByZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBzcGVjaWFsIGNoYXJhY3RlclxyXG5cdC8vIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsIGFuZCB3aGV0aGVyIGl0IGlzIFwibXVsdGlcIi5cclxuXHRwcml2YXRlIGFuYWxpemVGaXJzdENoYXIoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nLCBpc1BvdGVudGlhbGx5TXVsdGk6IGJvb2xlYW4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBnX2N1cnJDaGFyKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlICc/JzogdGhpcy5pc09wdGlvbmFsID0gdHJ1ZTsgcmV0dXJuIHRydWU7XHJcblx0XHRcdGNhc2UgJyEnOiByZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdGNhc2UgJyonOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFpc1BvdGVudGlhbGx5TXVsdGkpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBTaW5nbGUtc2VnZW1lbnQgVVJMIHBhcnQgY2Fubm90IGhhdmUgc2VnbWVudCBzdGFydGluZyBmcm9tICcqJ2ApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzTXVsdGkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjYXNlICcrJzpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghaXNQb3RlbnRpYWxseU11bHRpKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgU2luZ2xlLXNlZ2VtZW50IFVSTCBwYXJ0IGNhbm5vdCBoYXZlIHNlZ21lbnQgc3RhcnRpbmcgZnJvbSAnKydgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5pc011bHRpID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzZWdtZW50RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEVtcHR5IHNlZ21lbnQgZW5jb3VudGVyZWRgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyByZWd1bGFyIGV4cHJlc3Npb24gZGVzY3JpYmluZyB0aGUgc2VnbWVudC5cclxuXHRwcml2YXRlIGdlbmVyYXRlUmVnRXhwKCBtYXRjaFBhdHRlcm46IChQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHApW10sXHJcblx0XHRcdFx0XHRjYXNlU2Vuc2l0aXZlOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIDEtYmFzZWQgaW5kZXggb2YgdGhlIFJlZ0V4cCBjYXB0dXJpbmcgZ3JvdXAuIFdlIG5lZWQgdG8gY291bnQgY2FwdHVyaW5nIGdyb3VwcyBpblxyXG5cdFx0Ly8gb3JkZXIgdG8gbGF0ZXIgZ2V0IHZhbHVlcyBvZiBuYW1lZCBhbmQgYW5vbnltb3VzIGZpZWxkcy5cclxuXHRcdGxldCBuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCA9IDE7XHJcblxyXG5cdFx0bGV0IHJlZ0V4cFN0cmluZyA9IFwiXCI7XHJcblx0XHRpZiAobWF0Y2hQYXR0ZXJuLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmVnRXhwU3RyaW5nICs9IFwiLitcIjtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdG9rZW4gb2YgbWF0Y2hQYXR0ZXJuKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHRva2VuIGluc3RhbmNlb2YgUGFyc2VkVGV4dClcclxuXHRcdFx0XHRcdHJlZ0V4cFN0cmluZyArPSB0b2tlbi5jb250ZW50O1xyXG5cdFx0XHRcdGVsc2UgaWYgKHRva2VuIGluc3RhbmNlb2YgUGFyc2VkUmVnRXhwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJlZ0V4cFN0cmluZyArPSBcIihcIiArIHRva2VuLmNvbnRlbnQgKyBcIilcIjtcclxuXHRcdFx0XHRcdG5leHRDYXB0dXJpbmdHcm91cEluZGV4ICs9IDEgKyB0b2tlbi5jYXB0dXJpbmdHcm91cFF0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSAvLyBpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRGaWVsZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0b2tlbi5pc0FycmF5ID0gdGhpcy5pc011bHRpO1xyXG5cdFx0XHRcdFx0dG9rZW4uaW5kZXggPSBuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleDtcclxuXHRcdFx0XHRcdHRoaXMuZmllbGRzLnB1c2goIHRva2VuKTtcclxuXHRcdFx0XHRcdHJlZ0V4cFN0cmluZyArPSB0aGlzLmdlbmVyYXRlUmVnRXhwU2VjdGlvbkZvckZpZWxkKCB0b2tlbik7XHJcblx0XHRcdFx0XHRuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCsrO1xyXG5cdFx0XHRcdFx0aWYgKHRva2VuLm1hdGNoUGF0dGVybilcclxuXHRcdFx0XHRcdFx0bmV4dENhcHR1cmluZ0dyb3VwSW5kZXggKz0gMSArIHRva2VuLm1hdGNoUGF0dGVybi5jYXB0dXJpbmdHcm91cFF0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlZ0V4cCA9IG5ldyBSZWdFeHAoIHJlZ0V4cFN0cmluZywgY2FzZVNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgd2l0aCB0aGUgcmVndWxhciBleHByZXNzaW9uIGdyb3VwIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcblx0cHJpdmF0ZSBnZW5lcmF0ZVJlZ0V4cFNlY3Rpb25Gb3JGaWVsZCggcGFyc2VkRmllbGQ6IFBhcnNlZEZpZWxkKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcIihcIjtcclxuXHRcdGlmIChwYXJzZWRGaWVsZC5tYXRjaFBhdHRlcm4gJiYgcGFyc2VkRmllbGQubWF0Y2hQYXR0ZXJuLmNvbnRlbnQpXHJcblx0XHR7XHJcblx0XHRcdHMgKz0gYCgke3BhcnNlZEZpZWxkLm1hdGNoUGF0dGVybi5jb250ZW50fSlgO1xyXG5cdFx0XHRpZiAocGFyc2VkRmllbGQuaXNPcHRpb25hbClcclxuXHRcdFx0XHRzICs9IFwiP1wiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocGFyc2VkRmllbGQuaXNPcHRpb25hbClcclxuXHRcdFx0cyArPSBcIi4qXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHMgKz0gXCIuK1wiO1xyXG5cclxuXHRcdHMgKz0gXCIpXCI7XHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRUZXh0IGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgdGV4dCBzZWN0aW9uIHdpdGhpbiBhIHNlZ21lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRUZXh0IGV4dGVuZHMgUGFyc2VkVG9rZW5cclxue1xyXG5cdC8vIFRleHQgc2VjdGlvbiBzdHJpbmdcclxuXHRjb250ZW50OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdHBhcnNlKCB0ZXh0RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiB0ZXh0RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgKz0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFJlZ0V4cCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzZWN0aW9uIHdpdGhpbiBhIHNlZ21lbnQgb3JcclxuLy8gZmllbGQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRSZWdFeHAgZXh0ZW5kcyBQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHN0cmluZ1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGNhcHR1cmluZyBncm91cHMgd2l0aGluIHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuXHRjYXB0dXJpbmdHcm91cFF0eTogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY29udGVudCA9IFwiXCI7XHJcblx0XHR0aGlzLmNhcHR1cmluZ0dyb3VwUXR5ID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gU3RhY2sgb2Ygb3BlbmluZyBhbmQgY2xvc2luZyBjaGFyYWN0ZXJzIChwYXJlbnRoZXNpcywgYnJhY2tldHMgYW5kIGN1cmx5IGJyYWNlcykgZm9yXHJcblx0XHQvLyBwYXJzaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgc2VjdGlvbi4gUmVndWxhciBleHByZXNzaW9uIHNlY3Rpb24gc3RvcHMgd2hlbiB3ZSBlbmNvdW50ZXJcclxuXHRcdC8vIGNoYXJhY3RlciAnKScgYW5kIHRoaXMgc3RhY2sgaXMgZW1wdHkuXHJcblx0XHRsZXQgc3RhY2s6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXJyQ2hhciA9IGdfY3VyckNoYXI7XHJcblx0XHRcdGlmIChjdXJyQ2hhciA9PT0gJyknKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoc3RhY2sucG9wKCkgPT09ICcoJylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgb3Blbi9jbG9zZSBjaGFyYWN0ZXJzIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnfScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICd7JylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgb3Blbi9jbG9zZSBjaGFyYWN0ZXJzIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnXScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICdbJylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgb3Blbi9jbG9zZSBjaGFyYWN0ZXJzIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKFwiKHtbXCIuaW5kZXhPZiggY3VyckNoYXIpID49IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoY3VyckNoYXIgPT09ICcoJylcclxuXHRcdFx0XHRcdHRoaXMuY2FwdHVyaW5nR3JvdXBRdHkrKztcclxuXHJcblx0XHRcdFx0c3RhY2sucHVzaCggY3VyckNoYXIpO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnXFxcXCcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnQgKz0gY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRcdGN1cnJDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLmNvbnRlbnQgKz0gY3VyckNoYXI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gd2UgZW5kIHVwIGhlcmUgb25seSBpZiB0aGUgVVJMIHBhdHRlcm4gZW5kZWQgd2hpbGUgd2l0aGluIHVuZmluaXNoZWQgcmVndWxhciBleHByZXNzaW9uXHJcblx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIFVSTCBwYXR0ZXJuIGVuZCB3aXRoaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluYWxpemUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jb250ZW50KVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBFbXB0eSByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHJcblx0XHRzdXBlci5maW5hbGl6ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEZpZWxkIGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgZmllbGQgd2l0aGluIGEgc2VnbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEZpZWxkIGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZEZpZWxkXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgaXMgb3B0aW9uYWxcclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBmaWVsZC5cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIEZpZWxkIEZpZWxkRm9ybWF0XHJcblx0Zm9ybWF0OiBhcGkuRmllbGRGb3JtYXQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmaWVsZCB2YWx1ZSBpcyBhbiBhcnJheS4gVGhpcyBpcyB0cnVlIGZvciBmaWVsZHMgdGhhdCBjYW4gYXBwZWFyXHJcblx0Ly8gbXVsdGlwbGUgdGltZXMgaW4gdGhlIFVSTCBwYXJ0LlxyXG5cdGlzQXJyYXk6IGJvb2xlYW47XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY2FwdHVyaW5nIGdyb3VwIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGZpZWxkIHdpdGhpbiB0aGVcclxuXHQvLyBzZWdtZW50LlxyXG5cdGluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcgZGVzY3JpYmluZyB0aGUgbWF0Y2hpbmcgcGF0dGVybiBmb3IgdGhlIGZpZWxkXHJcblx0bWF0Y2hQYXR0ZXJuOiBQYXJzZWRSZWdFeHA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNPcHRpb25hbCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJcIjtcclxuXHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LlN0cmluZztcclxuXHRcdHRoaXMubWF0Y2hQYXR0ZXJuID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmlyc3QgY2hlY2sgd2hldGhlciB0aGlzIGZpZWxkIGlzIG9wdGlvbmFsXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmlzT3B0aW9uYWwgPSB0cnVlO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgY2hhcmFjdGVycyBpbiB0aGUgZmllbGQgbmFtZVxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGlmIChzZWdtZW50RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCBkb2Vzbid0IGhhdmUgY2xvc2luZyAnfSdgKTtcclxuXHRcdFx0Ly9lbHNlIGlmIChub24tYWNjZXB0YWJsZS1jaGFyLWluLWZpZWxkLW5hbWUpXHJcblx0XHRcdC8vXHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gZmllbGRgKTtcclxuXHRcdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJ30nIHx8IGdfY3VyckNoYXIgPT09ICcoJyB8fCBnX2N1cnJDaGFyID09PSAnJScpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubmFtZSArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubmFtZS5sZW5ndGggPT09IDApXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkIG11c3QgaGF2ZSBuYW1lYCk7XHJcblxyXG5cdFx0Z19jaGVja0VuZCgpO1xyXG5cclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnJScpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpXHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHJcblx0XHRcdGxldCBmb3JtYXRDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0aWYgKGZvcm1hdENoYXIgPT09ICdpJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LkludGVnZXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZm9ybWF0Q2hhciA9PT0gJ2YnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuRmxvYXQ7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZm9ybWF0Q2hhciA9PT0gJ2InKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuQm9vbDtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIGZpZWxkIGZvcm1hdGApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdfY2hlY2tFbmQoKTtcclxuXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJygnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0bGV0IHJlZ0V4cCA9IG5ldyBQYXJzZWRSZWdFeHAoKTtcclxuXHRcdFx0cmVnRXhwLnBhcnNlKCk7XHJcblx0XHRcdHRoaXMubWF0Y2hQYXR0ZXJuID0gcmVnRXhwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdfY2hlY2tFbmQoKTtcclxuXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJ30nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gZmllbGRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXJyb3IgdGhhdCBvY2N1cnJlZCBkdXJpbmcgcGFyc2luZyBvZlxyXG4vLyBhIFVSTCBwYXR0ZXJuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciBpbXBsZW1lbnRzIGFwaS5JVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb25cclxue1xyXG5cdC8vIEluZGV4IGluIHRoZSBwYXR0ZXJuIHN0cmluZyBhdCB3aGljaCB0aGVlcnJvciBvY2N1cnJlZC5cclxuXHRwb3M6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoIG1lc3NhZ2U6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5wb3MgPSBnX2N1cnJJbmRleDtcclxuXHRcdHRoaXMubWVzc2FnZSA9IGBFcnJvciBhdCBwb3NpdGlvbiAke3RoaXMucG9zfVxcbiR7bWVzc2FnZX1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9