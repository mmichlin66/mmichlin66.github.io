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
    FieldFormat[FieldFormat["Boolean"] = 3] = "Boolean";
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
    if (!stringValue)
        return parsedField.defaultValue;
    switch (parsedField.format) {
        case api.FieldFormat.Integer:
            {
                let v = Number(stringValue);
                return isNaN(v) || !Number.isInteger(v) ? parsedField.defaultValue : v;
            }
        case api.FieldFormat.Float:
            {
                let v = Number(stringValue);
                return isNaN(v) ? parsedField.defaultValue : v;
            }
        case api.FieldFormat.Boolean:
            {
                let v = stringValue.toLowerCase();
                if (v === "true" || v === "t" || v === "yes" || v === "y" || v === "1")
                    return true;
                else if (v === "false" || v === "f" || v === "no" || v === "n" || v === "0")
                    return false;
                else
                    return parsedField.defaultValue;
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
            throw new UrlPatternParsingException(`Invalid character '${g_currChar}' after hostname segment`);
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
            throw new UrlPatternParsingException(`Invalid character '${g_currChar}' after port part`);
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
            throw new UrlPatternParsingException(`Invalid character '${g_currChar}' after path segment`);
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
                    throw new UrlPatternParsingException(`Query string parameter '${qsp.name}' appears more than once`);
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
            throw new UrlPatternParsingException(`Invalid character '${g_currChar}' after query string segment`);
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
                        throw new UrlPatternParsingException(`Single-segment URL part cannot start from '*'`);
                    this.isOptional = this.isMulti = true;
                    return true;
                }
            case '+':
                {
                    if (!isPotentiallyMulti)
                        throw new UrlPatternParsingException(`Single-segment URL part cannot start from '+'`);
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
        let s = "";
        while (!g_isEnd() && textEndChars.indexOf(g_currChar) < 0) {
            s += g_currChar;
            g_move();
        }
        // text might have been URL encoded
        this.content = decodeURIComponent(s);
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
                    throw new UrlPatternParsingException(`Non-matching character '${currChar}' in regular expression`);
            }
            else if (currChar === '}') {
                if (stack.pop() === '{')
                    g_move();
                else
                    throw new UrlPatternParsingException(`Non-matching character '${currChar}' in regular expression`);
            }
            else if (currChar === ']') {
                if (stack.pop() === '[')
                    g_move();
                else
                    throw new UrlPatternParsingException(`Non-matching character '${currChar}' in regular expression`);
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
            else if ("}(%=".indexOf(g_currChar) >= 0)
                break;
            //else if (non-acceptable-char-in-field-name)
            //	throw new UrlPatternParsingException( `Invalid character within field`);
            else {
                this.name += g_currChar;
                g_move();
            }
        }
        if (this.name.length === 0)
            throw new UrlPatternParsingException(`Field must have name`);
        g_checkEnd();
        // field may define format
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
                this.format = api.FieldFormat.Boolean;
                g_move();
            }
            else
                throw new UrlPatternParsingException(`Invalid character '${g_currChar}' within field format`);
            g_checkEnd();
        }
        // field may have regular expression
        if (g_currChar === '(') {
            let regExp = new ParsedRegExp();
            regExp.parse();
            this.matchPattern = regExp;
            g_checkEnd();
        }
        // field may have default value: in this case it becomes optional
        if (g_currChar === '=') {
            this.isOptional = true;
            g_move();
            this.parseDefaultValue(segmentEndChars);
        }
        else {
            switch (this.format) {
                case api.FieldFormat.Integer:
                    this.defaultValue = NaN;
                    break;
                case api.FieldFormat.Float:
                    this.defaultValue = NaN;
                    break;
                case api.FieldFormat.Boolean:
                    this.defaultValue = undefined;
                    break;
                default:
                    this.defaultValue = "";
                    break;
            }
        }
        if (g_currChar === '}') {
            this.finalize();
            g_move();
        }
        else
            throw new UrlPatternParsingException(`Invalid character '${g_currChar}' within field`);
    }
    parseDefaultValue(segmentEndChars) {
        let s = "";
        while (!g_isEnd()) {
            if (segmentEndChars.indexOf(g_currChar) >= 0)
                throw new UrlPatternParsingException(`Field doesn't have closing '}'`);
            else if (g_currChar === '}')
                break;
            //else if (non-acceptable-char-in-field-name)
            //	throw new UrlPatternParsingException( `Invalid character within field`);
            else {
                s += g_currChar;
                g_move();
            }
        }
        // check whether the default value is empty and if field format is set to a non-string
        // also check whether it can be converted to theat format.
        if (!s)
            throw new UrlPatternParsingException(`Field default value cannot be empty`);
        // default value might have been URL encoded
        s = decodeURIComponent(s);
        if (this.format === api.FieldFormat.Integer) {
            this.defaultValue = Number(s);
            if (isNaN(this.defaultValue) || !Number.isInteger(this.defaultValue))
                throw new UrlPatternParsingException(`Default value '${s}' of Integer field '${this.name}' cannot be converted to Integer`);
        }
        else if (this.format === api.FieldFormat.Float) {
            this.defaultValue = Number(s);
            if (isNaN(this.defaultValue))
                throw new UrlPatternParsingException(`Default value of '${s}' Float field '${this.name}' cannot be converted to Float`);
        }
        else if (this.format === api.FieldFormat.Boolean) {
            let v = s.toLowerCase();
            if (v === "true" || v === "t" || v === "yes" || v === "y" || v === "1")
                this.defaultValue = true;
            else if (v === "false" || v === "f" || v === "no" || v === "n" || v === "0")
                this.defaultValue = false;
            else
                throw new UrlPatternParsingException(`Default value of '${s}' Boolean field '${this.name}' cannot be converted to Boolean`);
        }
        else
            this.defaultValue = s;
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
        this.message = `Error at position ${this.pos}: ${message}`;
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW11cmwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbXVybC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW11cmwvLi9zcmMvYWN0dWFsLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21pbXVybFR5cGVzLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSx1QkFBdUI7QUFDdkIsU0FBZ0IsUUFBUSxD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QkFBcUIsSUFBSSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0NBQ0QiLCJmaWxlIjoibWltdXJsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbXVybFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW11cmxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW11cmxUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLyBQYXJzZXMgdGhlIGdpdmVuIFVSTFxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVUkwoIHVybDogc3RyaW5nKTogYXBpLklQYXJzZWRBY3R1YWxVUkxcclxue1xyXG5cdGxldCBwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMID0ge307XHJcblxyXG5cdC8vIGZpbmQgcHJvdG9jb2xcclxuXHRsZXQgaG9zdG5hbWVJbmRleDogbnVtYmVyO1xyXG5cdGxldCBwcm90b2NvbFNlcGFyYXRvckluZGV4ID0gdXJsLmluZGV4T2YoIFwiOi8vXCIpO1xyXG5cdGlmIChwcm90b2NvbFNlcGFyYXRvckluZGV4ID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAocHJvdG9jb2xTZXBhcmF0b3JJbmRleCA+IDApXHJcblx0e1xyXG5cdFx0cGFyc2VkVVJMLnByb3RvY29sID0gdXJsLnN1YnN0ciggMCwgcHJvdG9jb2xTZXBhcmF0b3JJbmRleCk7XHJcblx0XHRob3N0bmFtZUluZGV4ID0gcHJvdG9jb2xTZXBhcmF0b3JJbmRleCArIDM7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdGhvc3RuYW1lSW5kZXggPSB1cmxbMF0gPT09ICcvJyA/IC0xIDogMDtcclxuXHJcblx0bGV0IG5leHRTZWFyY2hJbmRleFN0YXJ0ID0gaG9zdG5hbWVJbmRleCA8IDAgPyAwIDogaG9zdG5hbWVJbmRleDtcdFxyXG5cdGxldCBjb2xvbkluZGV4ID0gdXJsLmluZGV4T2YoICc6JywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBzbGFzaEluZGV4ID0gdXJsLmluZGV4T2YoICcvJywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBxdWVzdGlvbkluZGV4ID0gdXJsLmluZGV4T2YoICc/JywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZiggJyMnLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblxyXG5cdGlmIChob3N0bmFtZUluZGV4ID49IDApXHJcblx0e1xyXG5cdFx0aWYgKGNvbG9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBjb2xvbkluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlIGlmIChzbGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgc2xhc2hJbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZSBpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIHF1ZXN0aW9uSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2UgaWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIGhhc2hJbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHBhcnNlZFVSTC5ob3N0bmFtZS5sZW5ndGg7IGkrKylcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lW2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KCBwYXJzZWRVUkwuaG9zdG5hbWVbaV0pO1xyXG5cdH1cclxuXHJcblx0aWYgKGNvbG9uSW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdGlmIChzbGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgc2xhc2hJbmRleCAtIGNvbG9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2UgaWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxLCBxdWVzdGlvbkluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZSBpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgaGFzaEluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJzZWRVUkwucG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxKTtcclxuXHR9XHJcblxyXG5cdC8vIHNsYXNoIGNhbiBiZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGlmIHRoZXJlIGlzIG5vIGhvc3RuYW1lXHJcblx0aWYgKHNsYXNoSW5kZXggPj0gMClcclxuXHR7XHJcblx0XHRpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEsIHF1ZXN0aW9uSW5kZXggLSBzbGFzaEluZGV4IC0gMSkuc3BsaXQoICcvJyk7XHJcblx0XHRlbHNlIGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aCA9IHVybC5zdWJzdHIoIHNsYXNoSW5kZXggKyAxLCBoYXNoSW5kZXggLSBzbGFzaEluZGV4IC0gMSkuc3BsaXQoICcvJyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEpLnNwbGl0KCAnLycpO1xyXG5cclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgcGFyc2VkVVJMLnBhdGgubGVuZ3RoOyBpKyspXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoW2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KCBwYXJzZWRVUkwucGF0aFtpXSk7XHJcblx0fVxyXG5cclxuXHRpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0e1xyXG5cdFx0cGFyc2VkVVJMLnF1ZXJ5ID0ge307XHJcblx0XHRsZXQgc2VhcmNoU3RyaW5nOiBzdHJpbmc7XHJcblx0XHRpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0c2VhcmNoU3RyaW5nID0gdXJsLnN1YnN0ciggcXVlc3Rpb25JbmRleCArIDEsIGhhc2hJbmRleCAtIHF1ZXN0aW9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0c2VhcmNoU3RyaW5nID0gdXJsLnN1YnN0ciggcXVlc3Rpb25JbmRleCArIDEpO1xyXG5cclxuXHRcdGxldCBwYXJhbXMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoICcmJyk7XHJcblx0XHRmb3IoIGxldCBwYXJhbSBvZiBwYXJhbXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBhcnIgPSBwYXJhbS5zcGxpdCggJz0nKTtcclxuXHRcdFx0aWYgKGFyci5sZW5ndGggPT09IDIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCggYXJyWzBdKTtcclxuXHRcdFx0XHRsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KCBhcnJbMV0pO1xyXG5cdFx0XHRcdGlmIChuYW1lIGluIHBhcnNlZFVSTC5xdWVyeSlcclxuXHRcdFx0XHRcdHBhcnNlZFVSTC5xdWVyeVtuYW1lXS5wdXNoKCB2YWwpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHBhcnNlZFVSTC5xdWVyeVtuYW1lXSA9IFt2YWxdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRwYXJzZWRVUkwuaGFzaCA9IGRlY29kZVVSSUNvbXBvbmVudCggdXJsLnN1YnN0ciggaGFzaEluZGV4ICsgMSkpO1xyXG5cclxuXHRyZXR1cm4gcGFyc2VkVVJMO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIHB1YmxpYyBBUEkgb2YgdGhlIFVSTCBQYXJzaW5nIGFuZCBNYXRjaGluZyBsaWJyYXJ5ICdtaW11cmwnLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFyc2VkQWN0dWFsVVJMIGNsYXNzIGNvbnRhaW5zIFVSTCBwYXJ0cyBwYXJzZWQgb3V0IG9mIHRoZSBVUkwgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkQWN0dWFsVVJMXHJcbntcclxuXHQvKiogUHJvdG9jb2wgVVJMIHBhcnQgKi9cclxuXHRwcm90b2NvbD86IHN0cmluZztcclxuXHJcblx0LyoqIEhvc3RuYW1lIFVSTCBwYXJ0IGFzIGFycmF5IG9mIGhvc3RuYW1lIHNlZ21lbnRzOiBlLmcuIGBbXCJ3d3dcIiwgXCJhYmNcIiwgXCJjb21cIl1gICovXHJcblx0aG9zdG5hbWU/OiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIFBvcnQgVVJMIHBhcnQgKi9cclxuXHRwb3J0Pzogc3RyaW5nO1xyXG5cclxuXHQvKiogUGF0aCBVUkwgcGFydCBhcyBhcnJheSBvZiBwYXRoIHNlZ21lbnRzOiBlLmcuIGBbXCJ1c2VyXCIsIFwicHJvZmlsZVwiLCBcIm9wdGlvbnNcIl1gICovXHJcblx0cGF0aD86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogUXVlcnkgc3RyaW5nIFVSTCBwYXJ0IGFzIGEgbWFwIG9mIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHRvIHRoZSBhcnJheXMgb2YgdGhlaXIgdmFsdWVzICovXHJcblx0cXVlcnk/OiB7IFtQOiBzdHJpbmddOiBzdHJpbmdbXSB9O1xyXG5cclxuXHQvKiogSGFzaCAoZnJhZ21lbnQpIFVSTCBwYXJ0ICovXHJcblx0aGFzaD86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFRoZSBVcmxQYXJ0IGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyBkaXN0aW5ndWlzaGluZyBVUkwgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFVXJsUGFydCB7IFByb3RvY29sLCBIb3N0bmFtZSwgUG9ydCwgUGF0aCwgUXVlcnksIEhhc2ggfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRVcmxQYXR0ZXJuIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSB0b3AtbGV2ZWwgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHJlc3VsdCBvZiBVUkxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdC8qKiBPcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBmb3Igd2hpY2ggdGhpcyBvYmplY3Qgd2FzIGNyZWF0ZWQuICovXHJcblx0cGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuXHQvKiogUHJvdG9jb2wgVVJMIHBhcnQuICovXHJcblx0cHJvdG9jb2w6IElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIEhvc3RuYW1lIFVSTCBwYXJ0LiAqL1xyXG5cdGhvc3RuYW1lOiBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIFBvcnQgVVJMIHBhcnQuICovXHJcblx0cG9ydDogSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUGF0aCBVUkwgcGFydC4gKi9cclxuXHRwYXRoOiBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIFF1ZXJ5IFN0cmluZyBVUkwgcGFydC4gKi9cclxuXHRxdWVyeTogSVBhcnNlZFF1ZXJ5U3RyaW5nO1xyXG5cclxuXHQvKiogSGFzaCBVUkwgcGFydC4gKi9cclxuXHRoYXNoOiBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBBcnJheSBvZiBVUkwgcGFydC4gSW5kZXhlcyBhcmUgdmFsdWVzIGZyb20gdGhlIFVybFBhcnQgZW51bWVyYXRpb24uICovXHJcblx0cGFydHM6IElQYXJzZWRVcmxQYXJ0W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYXJzZWRMb2NhdGlvbiB0eXBlIGRlZmluZXMgaG93IGRpZmZlcmVudCBzZWN0aW9uIG9mIHRoZSBVUkwgcGF0dGVybiBjYW4gYmUgbG9jYXRlZCBpbiB0aGVcclxuICogb3JpZ2luYWwgcGF0dGVybiBzdHJpbmcuIExvY2F0aW9uIGlzIGRlZmluZWQgdXNpbmcgdGhlIHplcm8tYmFzZWQgaW5kZXggd2hlcmUgdGhlIHNlY3Rpb25cclxuICogYmVnaW5zIGFuZCBpdHMgbGVuZ3RoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUGFyc2VkTG9jYXRpb24gPSB7IHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFRva2VuIGlzIGEgYmFzZSBpbnRlcmZhY2UgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqXHJcblx0ICogTG9jYXRpb24gb2YgdGhlIHBhcnQgaW4gdGhlIG9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHplcm8tYmFzZWQgaW5kZXggd2hlcmVcclxuXHQgKiB0aGUgcGFydCBiZWdpbnMgYW5kIGl0cyBsZW5ndGguXHJcblx0ICovXHJcblx0bG9jYXRpb246IFBhcnNlZExvY2F0aW9uO1xyXG5cclxuXHQvKiogQ29udGVudCBvZiB0aGUgdG9rZW4gKi9cclxuXHR0b2tlblN0aW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkVXJsUGFydCBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVXJsUGFydCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuICovXHJcblx0dXJsUGFydDogRVVybFBhcnQ7XHJcblxyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcGFyaXNvbiBvZiB0aGlzIHBhcnQgc2hvbGQgYmUgY2FzZS1zZW5zaXRpdmUgb3Igbm90LiAqL1xyXG5cdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC4gKi9cclxuXHRnZXRTZWdtZW50cygpOiBJUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4gKiBkZWZpbmUgYSBzaW5nbGUgc2VnbWVudDogcHJvdG9jb2wsIHBvcnQgYW5kIGhhc2guXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBleHRlbmRzIElQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvKiogVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gKi9cclxuXHRzZWdtZW50OiBJUGFyc2VkU2VnbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuICogY2FuIGRlZmluZSBtdWx0aXBsZSBzZWdtZW50czogaG9zdG5hbWUgYW5kIHBhdGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLiAqL1xyXG5cdHNlZ21lbnRzOiBJUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFF1ZXJ5U3RyaW5nIGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBxdWVyeSBzdHJpbmdcclxuICogcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFF1ZXJ5U3RyaW5nIGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBRdWVyeSBzdHJpbmcgZGVmaW5lcyBvbmUgc2VnZW1lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuICovXHJcblx0cGFyc2VkUVNQczogeyBbUDogc3RyaW5nXTogSVBhcnNlZFFTUCB9O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBub3Qgc3BlY2lmaWVkIGV4cGxpY2l0bHkgaW4gdGhlIHBhdHRlcm5cclxuXHQgKiB3aWxsIGJlIGFsbG93ZWQgd2hlbiBwYXJzaW5nIGFjdHVhbCBVUkxzLlxyXG5cdCAqL1xyXG5cdGFsbG93RXh0cmFRdWVyeVBhcmFtczogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRRU1AgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IG1hdGNoaW5nIGEgc2luZ2xlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRRU1AgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIG5hbWUuICovXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogUXVlcnkgU3RyaW5nIGRlZmluZXMgb25lIHNlZ2VtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLiAqL1xyXG5cdHNlZ21lbnQ6IElQYXJzZWRTZWdtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFNlZ21lbnQgaW50ZXJmYWNlIGRlZmluZXMgYSBzaW5nbGUgc2VnbWVudCBpbiBhIFVSTCBwYXR0ZXJuIHRoYXQgY2FuIGJlIG1hdGNoZWQgdG9cclxuICogb25lIG9yIG1vcmUgcGFydHMgb2YgYW4gYWN0dWFsIFVSTC4gRWFjaCBzZWdtZW50IGNhbiBoYXZlIHplcm8gb3IgbW9yZSBmaWVsZHMgZGVmaW5lZCBpbiBpdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFNlZ21lbnQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBpcyBvcHRpb25hbCAqL1xyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGNhbiBiZSByZXBlYXRlZCBtdXRpcGxlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBib3RoXHJcblx0ICogb3B0aW9uYWwgYW5kIG11bHRpIGNhbiBiZSByZXBlYXRlZCB6ZXJvIG9yIG1vcmUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIG5vdCBvcHRpb25hbCBidXRcclxuXHQgKiBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgb25lIG9yIG1vcmUgdGltZXMuXHJcblx0ICovXHJcblx0aXNNdWx0aTogYm9vbGVhbjtcclxuXHJcblx0LyoqIEFycmF5IG9mIGZpZWxkcyBkZWZpbmVkIGluIHRoaXMgc2VnbWVudC4gKi9cclxuXHRmaWVsZHM6IElQYXJzZWRGaWVsZFtdO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzZWdtZW50J3MgbWF0Y2ggcGF0dGVybi5cclxuXHRyZWdFeHA6IFJlZ0V4cDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRGaWVsZCBpbnRlcmZhY2UgZGVmaW5lcyBhIHNpbmdsZSBmaWVsZCB3aXRoaW4gYSBzZWdtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkRmllbGQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgaXMgb3B0aW9uYWwgKi9cclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgZmllbGQgKi9cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBGaWVsZCBmb3JtYXQgKi9cclxuXHRmb3JtYXQ6IEZpZWxkRm9ybWF0O1xyXG5cclxuXHQvKiogT3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgZmllbGQgKi9cclxuXHRkZWZhdWx0VmFsdWU/OiBGaWVsZFZhbHVlVHlwZTtcclxuXHJcblx0Ly8gLyoqIFJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcgZGVzY3JpYmluZyB0aGUgbWF0Y2hpbmcgcGF0dGVybiBmb3IgdGhlIGZpZWxkICovXHJcblx0Ly8gbWF0Y2hQYXR0ZXJuOiBJUGFyc2VkUmVnRXhwO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgdmFsdWUgaXMgYW4gYXJyYXkuIFRoaXMgaXMgdHJ1ZSBmb3IgZmllbGRzIHRoYXQgY2FuIGFwcGVhclxyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBVUkwgcGFydC5cclxuXHRpc0FycmF5OiBib29sZWFuO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNhcHR1cmluZyBncm91cCBjb3JyZXNwb25kaW5nIHRvIHRoZSBmaWVsZCB3aXRoaW4gdGhlXHJcblx0Ly8gc2VnbWVudC5cclxuXHRpbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRmllbGRGb3JtYXQgY2xhc3MgZGVmaW5lcyBwb3NzaWJsZSBmaWVsZCBmb3JtYXRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRmllbGRGb3JtYXRcclxue1xyXG5cdC8qKiBGaWVsZCB2YWx1ZSBjYW4gYmUgYXJiaXRyYXJ5IHN0cmluZyAqL1xyXG5cdFN0cmluZyxcclxuXHJcblx0LyoqIEZpZWxkIHZhbHVlIG11c3QgYmUgY29udmVydGFibGUgdG8gYW4gaW50ZWdlciBudW1iZXIgKi9cclxuXHRJbnRlZ2VyLFxyXG5cclxuXHQvKiogRmllbGQgdmFsdWUgbXVzdCBiZSBjb252ZXJ0YWJsZSB0byBhIHJlYWwgbnVtYmVyICovXHJcblx0RmxvYXQsXHJcblxyXG5cdC8qKiBGaWVsZCB2YWx1ZSBtdXN0IGJlIGNvbnZlcnRhYmxlIHRvIGEgQm9vbGVhbiBudW1iZXIgKi9cclxuXHRCb29sZWFuLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGVycm9yIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHBhcnNpbmcgb2ZcclxuICogYSBVUkwgcGF0dGVybi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Jcclxue1xyXG5cdC8qKiBJbmRleCBpbiB0aGUgcGF0dGVybiBzdHJpbmcgYXQgd2hpY2ggdGhlZXJyb3Igb2NjdXJyZWQuICovXHJcblx0cG9zOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFN1cHBvcnRlZCBwcmltaXRpdmUgdHlwZXMgb2YgZmllbGQgdmFsdWVzICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUZpZWxkVmFsdWVUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxuXHJcbi8qKiBUeXBlcyBvZiBmaWVsZHMgd2l0aCBtdWx0aXBsZSB2YWx1ZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlGaWVsZFZhbHVlVHlwZSA9IFNpbmdsZUZpZWxkVmFsdWVUeXBlW107XHJcblxyXG4vKiogRmllbGQgdmFsdWUgdHlwZSwgd2hpY2ggY2FuIGJlIGVpdGhlciBzaW5nZSB2YWx1ZSBvciBtdWx0aXBsZSB2YWx1ZSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEZpZWxkVmFsdWVUeXBlID0gU2luZ2xlRmllbGRWYWx1ZVR5cGUgfCBNdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cclxuLyoqIE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgd2hvc2UgbmFtZXMgYXJlIGZpZWxkIG5hbWVzIGFuZCB2YWx1ZXMgYXJlIGZpZWxkIHZhbHVlcy4gKi9cclxuZXhwb3J0IHR5cGUgRmllbGRCYWcgPSB7IFtQOnN0cmluZ106IEZpZWxkVmFsdWVUeXBlIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVVybFBhdHRlcm5NYXRjaFJlc3VsdCBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgcmVzdWx0IG9mIG1hdGNoaW5nIGFuIGFjdHVhbCBVUkwgYWdhaW5zdFxyXG4gKiB0aGUgVVJMIHBhdHRlcm4uIFRoZSByZXN1bHQgY29udGFpbnMgdmFsdWVzIG9mIG5hbWVkIGFuZCBpbmRleGVkIGZpZWxkcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBtYXRjaCB3YXMgc3VjY2Vzc3VsICovXHJcblx0c3VjY2VzczogYm9vbGVhbjtcclxuXHJcblx0LyoqIFBhcnNlZCBhY3R1YWwgVVJMICovXHJcblx0cGFyc2VkVVJMOiBJUGFyc2VkQWN0dWFsVVJMO1xyXG5cclxuXHQvKiogRXJyb3IgbWVzc2FnZXMgaW4gY2FzZSB0aGUgbWF0Y2ggd2FzIG5vdCBzdWNjZXNzZnVsICovXHJcblx0ZXJyb3JzPzogc3RyaW5nW107XHJcblxyXG5cdC8qKiBGaWVsZCBuYW1lcyBhbmQgdmFsdWVzICovXHJcblx0ZmllbGRzPzogRmllbGRCYWc7XHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYWN0dWFsIGZyb20gXCIuL2FjdHVhbFwiO1xyXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCAqIGFzIG1hdGNoZXIgZnJvbSBcIi4vbWF0Y2hlclwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUGFyc2VzIHRoZSBnaXZlbiBVUkwgXHJcbiAqIEBwYXJhbSBzIFVSTCBzdHJpbmcgdG8gYmUgcGFyc2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVVJMKCBzOiBzdHJpbmcpOiBJUGFyc2VkQWN0dWFsVVJMXHJcbntcclxuXHRyZXR1cm4gYWN0dWFsLnBhcnNlVVJMKCBzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMIHBhdHRlcm5cclxuICogQHBhcmFtIHMgVVJMIHBhdHRlcm4gc3RyaW5nIHRvIGJlIHBhcnNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVybFBhdHRlcm4oIHM6IHN0cmluZyk6IElQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHRyZXR1cm4gcGFyc2VyLnBhcnNlUGF0dGVybiggcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBVUkwgcGF0dGVybiBzdHJpbmcuXHJcbiAqIEBwYXJhbSB1cmwgRWl0aGVyIHVucGFyc2VkIFVSTCBzdHJpbmcgb3IgW1tJUGFyc2VkQWN0dWFsVVJMXV0gb2JqZWN0XHJcbiAqIEBwYXJhbSBwYXR0ZXJuIEVpdGhlciB1bnBhcnNlZCBVUkwgcGF0dGVybiBzdHJpbmcgb3IgW1tJUGFyc2VkVXJsUGF0dGVybl1dIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKCB1cmw6IHN0cmluZyB8IElQYXJzZWRBY3R1YWxVUkwsIHBhdHRlcm46IHN0cmluZyB8IElQYXJzZWRVcmxQYXR0ZXJuKTogSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0cmV0dXJuIG1hdGNoZXIubWF0Y2goIHVybCwgcGF0dGVybik7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL2FwaVwiXHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIFVSTCBhZ2FpbnN0IFVSTCBwYXR0ZXJuIHN0cmluZy5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKCB1cmw6IHN0cmluZyB8IGFwaS5JUGFyc2VkQWN0dWFsVVJMLCBwYXR0ZXJuOiBzdHJpbmcgfCBhcGkuSVBhcnNlZFVybFBhdHRlcm4pOiBhcGkuSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0aWYgKCF1cmwpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiVVJMIGNhbm5vdCBiZSBudWxsIG9yIGVtcHR5IHN0cmluZ1wiKTtcclxuXHRpZiAoIXBhdHRlcm4pXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiUGF0dGVybiBjYW5ub3QgYmUgbnVsbCBvciBlbXB0eSBzdHJpbmdcIik7XHJcblxyXG5cdGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKVxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCBhcGkucGFyc2VVUkwoIHVybCksIGFwaS5wYXJzZVVybFBhdHRlcm4oIHBhdHRlcm4pKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCBhcGkucGFyc2VVUkwoIHVybCksIHBhdHRlcm4pO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIHVybCwgYXBpLnBhcnNlVXJsUGF0dGVybiggcGF0dGVybikpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIHVybCwgcGF0dGVybik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIFVSTCBhZ2FpbnN0IGFscmVhZHkgcGFyc2VkIFVSTCBwYXR0ZXJuLlxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQYXJzZWQoIHBhcnNlZFVSTDogYXBpLklQYXJzZWRBY3R1YWxVUkwsIHBhcnNlZFBhdHRlcm46IGFwaS5JUGFyc2VkVXJsUGF0dGVybik6IGFwaS5JVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHRpZiAoIXBhcnNlZFVSTClcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJVUkwgY2Fubm90IGJlIG51bGxcIik7XHJcblx0aWYgKCFwYXJzZWRQYXR0ZXJuKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcInBhcnNlZFBhdHRlcm4gY2Fubm90IGJlIG51bGxcIik7XHJcblxyXG5cdC8vIHByZXBhcmUgb2JqZWN0IGZvciBtYXRjaCByZXN1bHRcclxuXHRsZXQgbWF0Y2hSZXN1bHQgPSBuZXcgVXJsUGF0dGVybk1hdGNoUmVzdWx0KCk7XHJcblx0bWF0Y2hSZXN1bHQucGFyc2VkVVJMID0gcGFyc2VkVVJMO1xyXG5cdG1hdGNoUmVzdWx0LmZpZWxkcyA9IHt9O1xyXG5cdGxldCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdC8vIGNvbXBhcmUgcGFydCBieSBwYXJ0XHJcblx0XHRsZXQgZXJyb3IgPSBtYXRjaFNpbmdsZVNlZ21lbnQoIGFwaS5FVXJsUGFydC5Qcm90b2NvbCwgcGFyc2VkVVJMLnByb3RvY29sLFxyXG5cdFx0XHQgXHRcdFx0cGFyc2VkUGF0dGVybi5wcm90b2NvbCA/IHBhcnNlZFBhdHRlcm4ucHJvdG9jb2wuc2VnbWVudCA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaE11bHRpcGxlU2VnbWVudHMoIGFwaS5FVXJsUGFydC5Ib3N0bmFtZSwgcGFyc2VkVVJMLmhvc3RuYW1lLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLmhvc3RuYW1lID8gcGFyc2VkUGF0dGVybi5ob3N0bmFtZS5zZWdtZW50cyA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaFNpbmdsZVNlZ21lbnQoIGFwaS5FVXJsUGFydC5Qb3J0LCBwYXJzZWRVUkwucG9ydCxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5wb3J0ID8gcGFyc2VkUGF0dGVybi5wb3J0LnNlZ21lbnQgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhcGkuRVVybFBhcnQuUGF0aCwgcGFyc2VkVVJMLnBhdGgsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4ucGF0aCA/IHBhcnNlZFBhdHRlcm4ucGF0aC5zZWdtZW50cyA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaFF1ZXJ5U3RyaW5nKCBwYXJzZWRVUkwucXVlcnksIHBhcnNlZFBhdHRlcm4ucXVlcnksIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaFNpbmdsZVNlZ21lbnQoIGFwaS5FVXJsUGFydC5IYXNoLCBwYXJzZWRVUkwuaGFzaCxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5oYXNoID8gcGFyc2VkUGF0dGVybi5oYXNoLnNlZ21lbnQgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGVycm9ycy5wdXNoKCBlcnIubWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB3ZSBoYXZlIGVycm9ycywgcHV0IHRoZW0gaW50byB0aGUgcmVzdWx0IG9iamVjdFxyXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMClcclxuXHRcdG1hdGNoUmVzdWx0LmVycm9ycyA9IGVycm9ycztcclxuXHJcblx0cmV0dXJuIG1hdGNoUmVzdWx0O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIHN0cmluZyBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBzZWdtZW50LiBGaWVsZHMgd2lsbCBiZSBhZGRlZFxyXG4vLyB0byB0aGUgZ2l2ZW4gcmVzdWx0IG9iamVjdC5cclxuZnVuY3Rpb24gbWF0Y2hTaW5nbGVTZWdtZW50KCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGFjdHVhbFNlZ21lbnQ6IHN0cmluZywgcGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50LFxyXG5cdFx0XHRcdCBmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdC8vIGlmIGNvbXBpbGVkIHNlZ21lbnQgaXMgTk9UIHByb3ZpZGVkLCB0aGVuIGFjdHVhbCBzZWdtZW50IG11c3QgYmUgZW1wdHlcclxuXHRpZiAoIXBhcnNlZFNlZ21lbnQpXHJcblx0e1xyXG5cdFx0aWYgKGFjdHVhbFNlZ21lbnQpXHJcblx0XHRcdHJldHVybiBgVVJMIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgY29udGFpbnMgc2VnbWVudCAnJHthY3R1YWxTZWdtZW50fScgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBpZiBhY3R1YWwgc2VnbWVudCBpcyBlbXB0eSBhbmQgY29tcGlsZWQgc2VnbWVudCBpcyBtYW5kYXRvcnksIHRoZXJlIGlzIG5vIG1hdGNoOyBpZiBzdHJpbmdcclxuXHQvLyBpcyBlbXB0eSBhbmQgY29tcGlsZWQgc2VnbWVudCBpcyBvcHRpb25hbCwgdGhlcmUgaXMgbWF0Y2g7XHJcblx0aWYgKCFhY3R1YWxTZWdtZW50KVxyXG5cdHtcclxuXHRcdGlmIChwYXJzZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGRvZXNuJ3QgaGF2ZSBhIHNlZ21lbnQgY29ycmVzcG9uZGluZyBgICtcclxuXHRcdFx0XHRcdGB0byBhIG1hbmRhdG9yeSBwYXR0ZXJuIHNlZ21lbnQgJyR7cGFyc2VkU2VnbWVudC50b2tlblN0aW5nfSdgO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgcGFyc2VkU2VnbWVudCwgZmllbGRzKVxyXG5cdFx0PyBudWxsXHJcblx0XHQ6IGBVUkwgc2VnbWVudCAnJHthY3R1YWxTZWdtZW50fScgaW4gcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBkb2Vzbid0IG1hdGNoIGAgK1xyXG5cdFx0XHRgcGF0dGVybiBzZWdtZW50ICcke3BhcnNlZFNlZ21lbnQudG9rZW5TdGluZ30nYDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUcmllcyB0byBtYXRjaCBhY3R1YWwgc2VnbWVudCB0byB0aGUgY29tcGlsZWQgc2VnbWVudC4gSWYgdGhlcmUgaXMgYSBtYWN0aCwgcmV0dXJucyBhIG5vbi1udWxsXHJcbi8vIG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcyAoaWYgbm8gZmllbGRzIGZvdW5kLCByZXR1cm5zIGFuIGVtcHR5IG9iamVjdCkuIElmIHRoZXJlIGlzIG5vIG1hdGNoXHJcbi8vIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gdHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50OiBzdHJpbmcsIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCxcclxuXHRmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IGJvb2xlYW5cclxue1xyXG5cdC8vIHBlcmZvcm0gcmVndWxhciBleHByZXNzaW9uIG1hdGNoIC0gbm90ZSB0aGF0IHRoZSBtYXRjaGluZyBwYXJ0IChpbmRleCAwIG9mIHRoZSByZXN1bHQpIHNob3VsZFxyXG5cdC8vIG1hdGNoIG91ciBzdHJpbmcgZXhhY3RseSBzbyB0aGF0IG5vIGV4dHJhIGNoYXJhY3RlcnMgYXJlIGZvdW5kIGJlZm9yZSBvciBhZnRlciB0aGUgbWF0Y2guXHJcblx0bGV0IGV4ZWNSZXN1bHQgPSBwYXJzZWRTZWdtZW50LnJlZ0V4cC5leGVjKCBhY3R1YWxTZWdtZW50KTtcclxuXHRpZiAoIWV4ZWNSZXN1bHQgfHwgZXhlY1Jlc3VsdFswXSAhPT0gYWN0dWFsU2VnbWVudClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0Ly8gY2hlY2sgd2hldGhlciB3ZSBoYXZlIGFueSBmaWVsZHNcclxuXHRmb3IoIGxldCBwYXJzZWRGaWVsZCBvZiBwYXJzZWRTZWdtZW50LmZpZWxkcylcclxuXHR7XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHJlZ3VsYXIgZXhwcmVzc2lvbiByZXN1bHQgaGFzIHRoaXMgaW5kZXggYW5kIGdldCB0aGUgdmFsdWVcclxuXHRcdGlmIChwYXJzZWRGaWVsZC5pbmRleCA+PSBleGVjUmVzdWx0Lmxlbmd0aClcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihgQlVHOiBGaWVsZCBpbmRleCBub3QgZm91bmQgaW4gcGF0dGVyJ3MgcmVndWxhciBleHByZXNzaW9uIGV4ZWN1dGlvbiByZXN1bHRgKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB2YWx1ZSA9IGNvbnZlcnRGaWVsZFZhbHVlKCBwYXJzZWRGaWVsZCwgZXhlY1Jlc3VsdFtwYXJzZWRGaWVsZC5pbmRleF0pO1xyXG5cdFx0aWYgKCFwYXJzZWRGaWVsZC5pc0FycmF5KVxyXG5cdFx0XHRmaWVsZHNbcGFyc2VkRmllbGQubmFtZV0gPSB2YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGFyciA9IGZpZWxkc1twYXJzZWRGaWVsZC5uYW1lXSBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0aWYgKGFyciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXJyID0gW107XHJcblx0XHRcdFx0ZmllbGRzW3BhcnNlZEZpZWxkLm5hbWVdID0gYXJyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhcnIucHVzaCggdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gc3RyaW5nIGFycmF5IGFnYWluc3QgdGhlIGdpdmVuIGNvbXBpbGVkIHNlZ21lbnQgYXJyYXkuIEZpZWxkcyB3aWxsIGJlIGFkZGVkXHJcbi8vIHRvIHRoZSBnaXZlbiByZXN1bHQgb2JqZWN0LlxyXG5mdW5jdGlvbiBtYXRjaE11bHRpcGxlU2VnbWVudHMoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgYWN0dWFsU2VnbWVudHM6IHN0cmluZ1tdLCBwYXJzZWRTZWdtZW50czogYXBpLklQYXJzZWRTZWdtZW50W10sXHJcblx0ZmllbGRzOiBhcGkuRmllbGRCYWcpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRpZiAoIWFjdHVhbFNlZ21lbnRzICYmICFwYXJzZWRTZWdtZW50cylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKCFhY3R1YWxTZWdtZW50cylcclxuXHRcdHJldHVybiBgVVJMIGRvZXNuJ3QgaGF2ZSBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIHRoYXQgZXhpc3RzIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRlbHNlIGlmICghcGFyc2VkU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gYFVSTCBoYXMgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHBhdHRlcm5gO1xyXG5cclxuXHQvLyBGb3IgZWFjaCBwYXJzZWQgc2VnbWVudCB3ZSBjcmVhdGUgYSBjb21waWxlZCBzZWdtZW50IGV4Y2VwdCBpbiBvbmUgY2FzZTogZm9yIFwib25lIG9yIG1vcmVcIlxyXG5cdC8vIHBhcnNlZCBzZWdtZW50cyB3ZSBjcmVhdGUgdHdvIGNvbXBpbGVkIHNlZ21lbnQgLSBvbmUgc2luZ2xlIG1hbmRhdG9yeSBhbmQgb25lIG11bHRpIGFuZFxyXG5cdC8vIG9wdGlvbmFsLlxyXG5cdGxldCBjb21waWxlZFNlZ21lbnRzOiBDb21waWxlZFNlZ21lbnRbXSA9IFtdO1xyXG5cdGZvciggbGV0IHBhcnNlZFNlZ21lbnQgb2YgcGFyc2VkU2VnbWVudHMpXHJcblx0e1xyXG5cdFx0aWYgKHBhcnNlZFNlZ21lbnQuaXNNdWx0aSAmJiAhcGFyc2VkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0e1xyXG5cdFx0XHRjb21waWxlZFNlZ21lbnRzLnB1c2goIG5ldyBDb21waWxlZFNlZ21lbnQoIHBhcnNlZFNlZ21lbnQsIGZhbHNlKSk7XHJcblx0XHRcdGNvbXBpbGVkU2VnbWVudHMucHVzaCggbmV3IENvbXBpbGVkU2VnbWVudCggcGFyc2VkU2VnbWVudCwgdHJ1ZSkpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb21waWxlZFNlZ21lbnRzLnB1c2goIG5ldyBDb21waWxlZFNlZ21lbnQoIHBhcnNlZFNlZ21lbnQsIHBhcnNlZFNlZ21lbnQuaXNPcHRpb25hbCkpO1xyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCByZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiB0aGUgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzIGlmIHRoZXJlIGlzIGEgbWF0Y2hcclxuXHQvLyBvciBudWxsIGlmIHRoZXJlIGlzIG5vdC5cclxuXHRpZiAodHJ5TWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhY3R1YWxTZWdtZW50cywgMCwgY29tcGlsZWRTZWdtZW50cywgMCwgZmllbGRzKSlcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBgVVJMIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgZG9lc24ndCBtYXRjaCB0aGUgcGF0dGVybmA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHJpZXMgdG8gbWF0Y2ggYWN0dWFsIHNlZ21lbnRzIHRvIHRoZSBwYXR0ZXJuIHN0YXJ0aW5nIGZyb20gdGhlIGdpdmVuIGluZGV4IGluIGVhY2ggYXJyYXkuIElmXHJcbi8vIHRoZXJlIGlzIGEgbWFjdGgsIHJldHVybnMgYSBub24tbnVsbCBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMgKGlmIG5vIGZpZWxkcyBmb3VuZCwgcmV0dXJucyBhblxyXG4vLyBlbXB0eSBvYmplY3QpLiBJZiB0aGVyZSBpcyBubyBtYXRjaCByZXR1cm5zIG51bGwuXHJcbmZ1bmN0aW9uIHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cyggYWN0dWFsU2VnbWVudHM6IHN0cmluZ1tdLCBhY3R1YWxTdGFydEluZGV4OiBudW1iZXIsXHJcblx0XHRcdFx0Y29tcGlsZWRTZWdtZW50czogQ29tcGlsZWRTZWdtZW50W10sIGNvbXBpbGVkU3RhcnRJbmRleDogbnVtYmVyLFxyXG5cdFx0XHRcdGZpZWxkczogYXBpLkZpZWxkQmFnKTogYm9vbGVhblxyXG57XHJcblx0Ly8gbG9vcCBvdmVyIGNvbXBpbGVkIHNlZ21lbnRzLiBJZiB0aGUgc2VnbWVudCBpcyBtYW5kYXRvcnksIHdlIGNvbXBhcmUgaXQgdG8gdGhlIGFjdHVhbFxyXG5cdC8vIHNlZ21lbnQgYW5kIGlmIHRoZXJlIGlzIG5vIG1hdGNoLCB0aGUgbWF0Y2hpbmcgZmFpbHMuIElmIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsLCB3ZSBjYWxsXHJcblx0Ly8gdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBzdGFydGluZyBmcm9tIHRoZSBuZXh0IGNvbXBpbGVkIHNlZ21lbnQuIElmIHRoaXMgY2FsbCByZXR1cm5zXHJcblx0Ly8gbnVsbCAobm8gbWF0Y2gpLCB0aGVuIHdlIG1hcCB0aGUgYWN0dWFsIHNlZ21lbnQgdG8gdGhlIGNvbXBpbGVkIHNlZ21lbnQgYW5kIGFkdmFuY2UgdGhlXHJcblx0Ly8gaW5kaWNlcy5cclxuXHRsZXQgYWN0dWFsQ3VyckluZGV4ID0gYWN0dWFsU3RhcnRJbmRleDtcclxuXHRsZXQgY29tcGlsZWRDdXJySW5kZXggPSBjb21waWxlZFN0YXJ0SW5kZXg7XHJcblx0d2hpbGUoIGNvbXBpbGVkQ3VyckluZGV4IDwgY29tcGlsZWRTZWdtZW50cy5sZW5ndGggJiYgYWN0dWFsQ3VyckluZGV4IDwgYWN0dWFsU2VnbWVudHMubGVuZ3RoKVxyXG5cdHtcclxuXHRcdGxldCBjb21waWxlZFNlZ21lbnQgPSBjb21waWxlZFNlZ21lbnRzW2NvbXBpbGVkQ3VyckluZGV4XTtcclxuXHRcdGxldCBhY3R1YWxTZWdtZW50ID0gYWN0dWFsU2VnbWVudHNbYWN0dWFsQ3VyckluZGV4XTtcclxuXHRcdGlmICghY29tcGlsZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbXBhcmUgbWFuZGF0b3J5IHNlZ21lbnQgd2l0aCB0aGUgYWN0dWFsIG9uZVxyXG5cdFx0XHRpZiAodHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50LCBjb21waWxlZFNlZ21lbnQucGFyc2VkU2VnbWVudCwgZmllbGRzKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbXBpbGVkQ3VyckluZGV4Kys7XHJcblx0XHRcdFx0YWN0dWFsQ3VyckluZGV4Kys7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIHBhc3NpbmcgdGhlIG5leHQgY29tcGlsZWQgc2VnbWVudCBpbmRleFxyXG5cdFx0XHRsZXQgdGVtcEZpZWxkczogYXBpLkZpZWxkQmFnID0ge31cclxuXHRcdFx0aWYgKHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cyggYWN0dWFsU2VnbWVudHMsIGFjdHVhbEN1cnJJbmRleCxcclxuXHRcdFx0XHRjb21waWxlZFNlZ21lbnRzLCBjb21waWxlZEN1cnJJbmRleCArIDEsIHRlbXBGaWVsZHMpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdGhlcmUgaXMgYSBtYXRjaFxyXG5cdFx0XHRcdG1lcmdlRmllbGRzKCBmaWVsZHMsIHRlbXBGaWVsZHMpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNvbXBhcmUgdGhpcyBzZWdtZW50IHdpdGggdGhlIGFjdHVhbCBvbmVcclxuXHRcdFx0XHRpZiAodHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50LCBjb21waWxlZFNlZ21lbnQucGFyc2VkU2VnbWVudCwgdGVtcEZpZWxkcykpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gY29weSBmaWVsZCB2YWx1ZXMgYW5kIGFkdmFuY2UgdGhlIGFjdHVhbCBpbmRleFxyXG5cdFx0XHRcdFx0bWVyZ2VGaWVsZHMoIGZpZWxkcywgdGVtcEZpZWxkcyk7XHJcblx0XHRcdFx0XHRhY3R1YWxDdXJySW5kZXgrKztcclxuXHJcblx0XHRcdFx0XHQvLyBhZHZhbmNlIHRoZSBjb21waWxlZCBpbmRleCBvbmx5IGlmIHRoaXMgZmllbGQgaXMgYSBzaW5ndWxhciBvbmVcclxuXHRcdFx0XHRcdGlmICghY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQuaXNNdWx0aSlcclxuXHRcdFx0XHRcdFx0Y29tcGlsZWRDdXJySW5kZXgrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyB3ZSBhcmUgaGVyZSBpZiBlaXRoZXIgY29tcGlsZSBzZWdtZW50cyBvciBhY3R1YWwgc2VnbWVudHMgb3IgYm90aCBhcmUgZXhob3N0ZWQuIElmIGJvdGhcclxuXHQvLyBhcmUgZXhob3N0ZWQsIHRoZXJlIGlzIGEgbWF0Y2guIElmIGNvbXBpbGVkIGFyZSBleGhvc3RlZCBidXQgYWN0dWFsIGFyZSBub3QsIHRoZXJlIGlzIG5vXHJcblx0Ly8gbWF0Y2guIElmIGFjdHVhbCBhcmUgZXhob3N0ZWQgYnV0IGNvbXBpbGVkIGFyZSBub3QsIHRoZXJlIGlzIG1hdGNoIG9ubHkgaWYgYWxsIHRoZVxyXG5cdC8vIHJlbWFpbmluZyBjb21waWxlZCBzZWdtZW50cyBhcmUgb3B0aW9uYWwuXHJcblx0aWYgKGNvbXBpbGVkQ3VyckluZGV4ID09PSBjb21waWxlZFNlZ21lbnRzLmxlbmd0aCAmJiBhY3R1YWxDdXJySW5kZXggPT09IGFjdHVhbFNlZ21lbnRzLmxlbmd0aClcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdGVsc2UgaWYgKGNvbXBpbGVkQ3VyckluZGV4ID09PSBjb21waWxlZFNlZ21lbnRzLmxlbmd0aClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IGNvbXBpbGVkQ3VyckluZGV4OyBpIDwgY29tcGlsZWRTZWdtZW50cy5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGNvbXBpbGVkU2VnbWVudCA9IGNvbXBpbGVkU2VnbWVudHNbaV07XHJcblx0XHRcdGlmICghY29tcGlsZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBzdHJpbmcgb2JqZWN0IGFnYWluc3QgdGhlIGdpdmVuIGNvbXBpbGVkIHF1ZXJ5IHN0cmluZy4gRmllbGRzIHdpbGwgYmUgYWRkZWRcclxuLy8gdG8gdGhlIGdpdmVuIHJlc3VsdCBvYmplY3QuXHJcbmZ1bmN0aW9uIG1hdGNoUXVlcnlTdHJpbmcoIGFjdHVhbFF1ZXJ5OiB7IFtQOiBzdHJpbmddOiBzdHJpbmdbXSB9LCBwYXJzZWRRdWVyeTogYXBpLklQYXJzZWRRdWVyeVN0cmluZyxcclxuXHRcdFx0XHQgZmllbGRzOiBhcGkuRmllbGRCYWcpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRpZiAoIXBhcnNlZFF1ZXJ5KVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIWFjdHVhbFF1ZXJ5KVxyXG5cdHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyggcGFyc2VkUXVlcnkucGFyc2VkUVNQcykubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGBVUkwgZG9lc24ndCBoYXZlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0aGUgcGF0dGVybmA7XHJcblx0fVxyXG5cclxuXHQvLyBnbyBvdmVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0aGUgcGF0dGVyLiBJZiB0aGVyZSBpcyBhbnkgbm9uLW9wdGlvbmFsXHJcblx0Ly8gcGFyYW1ldGVyIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgYWN0dWFsIFVSTCwgd2UgZmFpbCB0aGUgbWF0Y2guXHJcblx0Zm9yKCBsZXQgcXNwTmFtZSBpbiBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzKVxyXG5cdHtcclxuXHRcdGlmIChhY3R1YWxRdWVyeVtxc3BOYW1lXSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IGhhdmUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfSdgO1xyXG5cdH1cclxuXHJcblx0Ly8gZ28gb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBpbiB0aGUgYWN0dWFsIFVSTFxyXG5cdGZvciggbGV0IHFzcE5hbWUgaW4gYWN0dWFsUXVlcnkpXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGlzIG5hbWUgaW4gdGhlIHBhdHRlcm4uIElmIHRoZSBwYXR0ZXJuIGRvZXNuJ3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciBhbmQgdGhlXHJcblx0XHQvLyBwYXR0ZXJuIGRvZXNuJ3QgYWxsb3cgZm9yIGV4dHJhIHBhcmFtZXRlcnMsIHRoZW4gdGhlcmUgaXMgbm8gbWF0Y2guIE90aGVyd2lzZSwgdGhpc1xyXG5cdFx0Ly8gcGFyYW1ldGVyIGlzIHNpbXBseSBpZ25vcmVkLlxyXG5cdFx0bGV0IHBhcnNlZFNlZ21lbnQgPSBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQ7XHJcblx0XHRpZiAoIXBhcnNlZFNlZ21lbnQpXHJcblx0XHR7XHJcblx0XHRcdGlmICghcGFyc2VkUXVlcnkuYWxsb3dFeHRyYVF1ZXJ5UGFyYW1zKVxyXG5cdFx0XHRcdHJldHVybiBgVVJMIGhhcyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyB0aGF0IGlzIG5vdCBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmb3Igc2luZ3VsYXIgc2VnbWVudCB0aGUgcGFyYW1ldGVyIG11c3QgYmUgcHJlc2VudCBvbmx5IG9uY2VcclxuXHRcdFx0bGV0IHFzcFZhbHVlcyA9IGFjdHVhbFF1ZXJ5W3FzcE5hbWVdO1xyXG5cdFx0XHRpZiAoIXBhcnNlZFNlZ21lbnQuaXNNdWx0aSAmJiBxc3BWYWx1ZXMubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRyZXR1cm4gYFVSTCBoYXMgbXVsdGlwbGUgdmFsdWVzIGZvciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyB3aGlsZSBwYXR0ZXJuIGRvZXNuJ3Qgc3BlY2lmeSBpdCBhcyBtdWx0aWA7XHJcblxyXG5cdFx0XHRmb3IoIGxldCBxc3BWYWx1ZSBvZiBxc3BWYWx1ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIXRyeU1hdGNoU2luZ2xlU2VnbWVudCggcXNwVmFsdWUsIHBhcnNlZFNlZ21lbnQsIGZpZWxkcykpXHJcblx0XHRcdFx0XHRyZXR1cm4gYFVSTCdzIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nIGRvZXNuJ3QgbWF0Y2ggdGhhdCBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNZXJnZXMgZmllbGQgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBvYmplY3QgdG8gdGhlIHRhcmdldCBvbmUuXHJcbmZ1bmN0aW9uIG1lcmdlRmllbGRzKCB0YXJnZXQ6IHsgW1A6IHN0cmluZ106IGFwaS5GaWVsZFZhbHVlVHlwZSB9LCBzb3VyY2U6IHsgW1A6IHN0cmluZ106IGFwaS5GaWVsZFZhbHVlVHlwZSB9KTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgZmllbGROYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcblx0XHRsZXQgc291cmNlVmFsID0gc291cmNlW2ZpZWxkTmFtZV07XHJcblx0XHRsZXQgdGFyZ2V0VmFsID0gdGFyZ2V0W2ZpZWxkTmFtZV07XHJcblx0XHRpZiAodGFyZ2V0VmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRhcmdldFtmaWVsZE5hbWVdID0gc291cmNlVmFsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBib3RoIHNvdXJjZSBhbmQgdGFyZ2V0IHZhbHVlcyBtdXN0IGJlIGFycmF5c1xyXG5cdFx0XHRsZXQgc291cmNlQXJyID0gc291cmNlVmFsIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRsZXQgdGFyZ2V0QXJyID0gdGFyZ2V0VmFsIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRmb3IoIGxldCBzb3VyY2VJdGVtIG9mIHNvdXJjZUFycilcclxuXHRcdFx0XHR0YXJnZXRBcnIucHVzaCggc291cmNlSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgZmllbGQgdmFsdWUgY29udmVydGVkIHRvIHRoZSByZXF1aXJlZCBmb3JtYXRcclxuZnVuY3Rpb24gY29udmVydEZpZWxkVmFsdWUoIHBhcnNlZEZpZWxkOiBhcGkuSVBhcnNlZEZpZWxkLCBzdHJpbmdWYWx1ZTogc3RyaW5nKTogYXBpLlNpbmdsZUZpZWxkVmFsdWVUeXBlXHJcbntcclxuXHRpZiAoIXN0cmluZ1ZhbHVlKVxyXG5cdFx0cmV0dXJuIHBhcnNlZEZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBhcGkuU2luZ2xlRmllbGRWYWx1ZVR5cGU7XHJcblxyXG5cdHN3aXRjaCggcGFyc2VkRmllbGQuZm9ybWF0KVxyXG5cdHtcclxuXHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkludGVnZXI6XHJcblx0XHR7XHJcblx0XHRcdGxldCB2ID0gTnVtYmVyKCBzdHJpbmdWYWx1ZSk7XHJcblx0XHRcdHJldHVybiBpc05hTih2KSB8fCAhTnVtYmVyLmlzSW50ZWdlcih2KSA/IHBhcnNlZEZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIgOiB2O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkZsb2F0OlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IE51bWJlciggc3RyaW5nVmFsdWUpO1xyXG5cdFx0XHRyZXR1cm4gaXNOYU4odikgPyBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyIDogdjtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5Cb29sZWFuOlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IHN0cmluZ1ZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmICh2ID09PSBcInRydWVcIiB8fCB2ID09PSBcInRcIiB8fCB2ID09PSBcInllc1wiIHx8IHYgPT09IFwieVwiIHx8IHYgPT09IFwiMVwiKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmICh2ID09PSBcImZhbHNlXCIgfHwgdiA9PT0gXCJmXCIgfHwgdiA9PT0gXCJub1wiIHx8IHYgPT09IFwiblwiIHx8IHYgPT09IFwiMFwiKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgYm9vbGVhbjtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RyaW5nVmFsdWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ29tcGlsZWRTZWdtZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgc2hvdWxkIGJlIGNvbXBhcmVkIHRvIGFcclxuLy8gc2VnbWVudCBmcm9tIHRoZSBhY3R1YWwgVVJMIHBhcnQuIENvbXBpbGVkIHNlZ21lbnQgY29udGFpbnMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBmbGFnXHJcbi8vIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHNlZ21lbnQgaXMgb3B0aW9uYWwuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBDb21waWxlZFNlZ21lbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcGFyc2VkIHNlZ21lbnQgb2JqZWN0LlxyXG5cdHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBzZWdtZW50IGlzIG9wdGlvbmFsLiBGb3IgZWFjaCBcIm9uZS1vci1tb3JlXCIgcGFyc2VkIHNlZ2VtZW50c1xyXG5cdC8vIHdlIGNyZWF0ZSB0d28gY29tcGlsZWQgc2VnbWVudHM6IHRoZSBmaXJzdCBpcyBtYW5kYXRvcnkgYW5kIHRoZSBzZWNvbmQgaXMgb3B0aW9uYWwuIFRoYXQnc1xyXG5cdC8vIHdoeSB3ZSBoYXZlIHRoaWUgaXNPcHRpb25hbCBmbGFnIGhlcmUuXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCwgaXNPcHRpb25hbDogYm9vbGVhbilcclxuXHR7XHJcblx0XHR0aGlzLnBhcnNlZFNlZ21lbnQgPSBwYXJzZWRTZWdtZW50O1xyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gaXNPcHRpb25hbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgY2xhc3MgZGVzY3JpYmVzIHRoZSByZXN1bHQgb2YgbWF0Y2hpbmcgYSBVUkwgdG8gYSBwYXR0ZXJuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVXJsUGF0dGVybk1hdGNoUmVzdWx0IGltcGxlbWVudHMgYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbWF0Y2ggd2FzIHN1Y2Nlc3N1bCAqL1xyXG5cdHB1YmxpYyBnZXQgc3VjY2VzcygpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmVycm9ycyB8fCB0aGlzLmVycm9ycy5sZW5ndGggPT09IDA7IH1cclxuXHJcblx0LyoqIFBhcnNlZCBhY3R1YWwgVVJMICovXHJcblx0cGFyc2VkVVJMOiBhcGkuSVBhcnNlZEFjdHVhbFVSTDtcclxuXHJcblx0LyoqIEVycm9yIG9iamVjdCBpbiBjYXNlIHRoZSBtYXRjaCB3YXMgbm90IHN1Y2Nlc3NmdWwgKi9cclxuXHRwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIEZpZWxkIG5hbWVzIGFuZCB2YWx1ZXMgKi9cclxuXHRwdWJsaWMgZmllbGRzOiBhcGkuRmllbGRCYWc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltdXJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGlcIjtcclxuIiwiaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL2FwaVwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQYXJzZXIncyBlbnRyeSBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhdHRlcm4oIHBhdHRlcm5TdHJpbmc6IHN0cmluZyk6IGFwaS5JUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0Ly8gaW5pdGlhbGl6ZSBnbG9iYWwgdmFyaWFibGVzXHJcblx0Z19wYXR0ZXJuU3RyaW5nID0gcGF0dGVyblN0cmluZztcclxuXHRnX3BhdHRlcm5TdHJpbmdMZW5ndGggPSAwO1xyXG5cdGdfY3VyckluZGV4ID0gMDtcclxuXHRnX2N1cnJDaGFyID0gJyc7XHJcblxyXG5cdGlmICghcGF0dGVyblN0cmluZylcclxuXHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggXCJVUkwgcGF0dGVybiBjYW5ub3QgYmUgZW1wdHlcIik7XHJcblxyXG5cdGdfcGF0dGVyblN0cmluZ0xlbmd0aCA9IHBhdHRlcm5TdHJpbmcubGVuZ3RoO1xyXG5cdGdfY3VyckNoYXIgPSBwYXR0ZXJuU3RyaW5nWzBdO1xyXG5cclxuXHQvLyBDcmVhdGUgdGhlIHRvcC1sZXZlbCBwYXJzaW5nIG9iamVjdCBhbmQgcnVuIHRoZSBwYXJzaW5nIHByb2Nlc3MuXHJcblx0bGV0IHBhcnNlZFBhdHRlcm4gPSBuZXcgUGFyc2VkVXJsUGF0dGVybigpO1xyXG5cdHBhcnNlZFBhdHRlcm4ucGFyc2UoKTtcclxuXHRyZXR1cm4gcGFyc2VkUGF0dGVybjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5lIFwiZ2xvYmFsXCIgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gYWxsIG9iamVjdHMgaW4gdGhpcyBtb2R1bGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQYXR0ZXJuIHN0cmluZyBiZWluZyBwYXJzZWRcclxubGV0IGdfcGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuLy8gTGVuZ3RoIG9mIHRoZSBwYXR0ZXJuIHN0cmluZ1xyXG5sZXQgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4vLyBJbmRleCBvZiB0aGUgY2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuIHN0cmluZyB0aGF0IHRoZSBwYXJzZXIgaXMgY3VycmVudGx5IHdvcmtpbmcgd2l0aC5cclxubGV0IGdfY3VyckluZGV4OiBudW1iZXI7XHJcblxyXG4vLyBDaGFyYWN0ZXIgaW4gdGhlIHBhdHRlcm4gc3RyaW5nIHVuZGVyIHRoZSBjdXJyZW50IGluZGV4LlxyXG5sZXQgZ19jdXJyQ2hhcjogc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5lIFwiZ2xvYmFsXCIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gYWxsIG9iamVjdHMgaW4gdGhpcyBtb2R1bGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBEZXRlcm1pbmVzIGlmIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi5cclxuZnVuY3Rpb24gZ19pc0VuZCgpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gZ19jdXJySW5kZXggPj0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRocm93cyBleGNlcHRpb24gaWYgd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLlxyXG5mdW5jdGlvbiBnX2NoZWNrRW5kKCk6IHZvaWRcclxue1xyXG5cdGlmIChnX2N1cnJJbmRleCA9PT0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoKVxyXG5cdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBVUkwgcGF0dGVybiBlbmRgKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNb3ZlcyB0aGUgZ2l2ZW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuZnVuY3Rpb24gZ19tb3ZlKCBkOiBudW1iZXIgPSAxKTogYm9vbGVhblxyXG57XHJcblx0aWYgKGdfY3VyckluZGV4IDw9IGdfcGF0dGVyblN0cmluZ0xlbmd0aCAtIGQpXHJcblx0e1xyXG5cdFx0Z19jdXJySW5kZXggKz0gZDtcclxuXHRcdGdfY3VyckNoYXIgPSBnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRnX2N1cnJJbmRleCA9IGdfcGF0dGVyblN0cmluZ0xlbmd0aDtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgdG8gdGhlIGdpdmVuIHBvc2l0aW9uIGluIHRoZSBidWZmZXIuXHJcbmZ1bmN0aW9uIGdfbW92ZVRvKCBpOiBudW1iZXIpOiBib29sZWFuXHJcbntcclxuXHRnX2N1cnJJbmRleCA9IGk7XHJcblx0aWYgKGdfY3VyckluZGV4IDwgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoKVxyXG5cdHtcclxuXHRcdGdfY3VyckNoYXIgPSBnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGNoYXJhY3RlciBpcyBhIGRlbGltaXRlciB0aGF0IGNhbm5vdCBiZSB1c2VkIGFzIHRleHQgd2l0aGluIFVSTFxyXG5mdW5jdGlvbiBnX2lzRGVsaW1pdGVyKCBjOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCIhQCMkJV4mKigpKz1bXXt9OjtcXFwiJzw+LC4/L3xcXFxcYH5cIi5pbmRleE9mKGMpID49IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRVcmxQYXR0ZXJuIGNsYXNzIGlzIHRoZSB0b3AtbGV2ZWwgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHJlc3VsdCBvZiBVUkwgcGFyc2luZy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFVybFBhdHRlcm4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdC8vIE9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGZvciB3aGljaCB0aGlzIG9iamVjdCB3YXMgY3JlYXRlZC5cclxuXHRwdWJsaWMgcGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuXHQvLyBQcm90b2NvbCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHByb3RvY29sKCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlByb3RvY29sXSBhcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIEhvc3RuYW1lIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgaG9zdG5hbWUoKTogYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5Ib3N0bmFtZV0gYXMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIFBvcnQgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBwb3J0KCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlBvcnRdIGFzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUGF0aCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHBhdGgoKTogYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5QYXRoXSBhcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUXVlcnkgU3RyaW5nIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcXVlcnkoKTogYXBpLklQYXJzZWRRdWVyeVN0cmluZ1xyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUXVlcnldIGFzIFBhcnNlZFF1ZXJ5U3RyaW5nIH1cclxuXHJcblx0Ly8gSGFzaCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IGhhc2goKTogYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuSGFzaF0gYXMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBBcnJheSBvZiBVUkwgcGFydC4gSW5kZXhlcyBhcmUgdmFsdWVzIGZyb20gdGhlIFVybFBhcnQgZW51bWVyYXRpb24uXHJcblx0cHVibGljIHBhcnRzOiBQYXJzZWRVcmxQYXJ0W107XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHRoaXMucGF0dGVyblN0cmluZyA9IGdfcGF0dGVyblN0cmluZztcclxuXHRcdHRoaXMucGFydHMgPSBbXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyc2VzIHRoZSBlbnRpcmUgVVJMIHBhdHRlcm4gcGFydCBieSBwYXJ0XHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBsb29wIG9mIHBhcnNpbmcgVVJMIHBhcnRzXHJcblx0XHRmb3IoIGxldCBwYXJ0ID0gdGhpcy5maW5kRmlyc3RVcmxQYXJ0KCk7IHBhcnQgIT09IG51bGw7IHBhcnQgPSBwYXJ0LmdldE5leHRVcmxQYXJ0KCkpXHJcblx0XHR7XHJcblx0XHRcdHBhcnQucGFyc2UoKTtcclxuXHRcdFx0dGhpcy5wYXJ0c1twYXJ0LnVybFBhcnRdID0gcGFydDtcclxuXHRcdFx0aWYgKGdfaXNFbmQoKSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB0aGUgZmlyc3QgVVJMIHBhcnQgdGhlIHBhcnNlciB3aWxsIGJlIHdvcmtpbmcgb24uXHJcblx0cHJpdmF0ZSBmaW5kRmlyc3RVcmxQYXJ0KCk6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gXCIvXCIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChnX3BhdHRlcm5TdHJpbmdMZW5ndGggPiAxICYmIGdfcGF0dGVyblN0cmluZ1sxXSA9PT0gXCIvXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoMik7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIb3N0bmFtZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkUGF0aCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IGdfcGF0dGVyblN0cmluZy5pbmRleE9mKCBcIjovL1wiKTtcclxuXHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFByb3RvY29sKCk7XHJcblx0XHRcdGVsc2UgaWYgKGluZGV4IDwgMClcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIFwiVVJMIHBhdHRlcm4gY2Fubm90IHN0YXJ0IGZyb20gJzovLydcIik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVG9rZW4gaXMgYSBiYXNlIGNsYXNzIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFRva2VuXHJcbntcclxuXHQvLyBMb2NhdGlvbiBvZiB0aGUgcGFydCBpbiB0aGUgb3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgY29udGFpbmluZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZVxyXG5cdC8vIHRoZSBwYXJ0IGJlZ2lucyBhbmQgaXRzIGxlbmd0aC5cclxuXHRsb2NhdGlvbjogeyBzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciB9O1xyXG5cclxuXHQvKiogQ29udGVudCBvZiB0aGUgdG9rZW4gKi9cclxuXHR0b2tlblN0aW5nOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLmxvY2F0aW9uID0geyBzdGFydDogZ19jdXJySW5kZXgsIGxlbmd0aDogMCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpbmFsaXplKClcclxuXHR7XHJcblx0XHR0aGlzLmxvY2F0aW9uLmxlbmd0aCA9IGdfY3VyckluZGV4IC0gdGhpcy5sb2NhdGlvbi5zdGFydDtcclxuXHRcdHRoaXMudG9rZW5TdGluZyA9IGdfcGF0dGVyblN0cmluZy5zdWJzdHIoIHRoaXMubG9jYXRpb24uc3RhcnQsIHRoaXMubG9jYXRpb24ubGVuZ3RoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRVcmxQYXJ0IGlzIGEgYmFzZSBjbGFzcyB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkVXJsUGFydFxyXG57XHJcblx0Ly8gVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy5cclxuXHR1cmxQYXJ0OiBhcGkuRVVybFBhcnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wYXJpc29uIG9mIHRoaXMgcGFydCBzaG9sZCBiZSBjYXNlLXNlbnNpdGl2ZSBvciBub3QuXHJcblx0Y2FzZVNlbnNpdGl2ZTogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudXJsUGFydCA9IHVybFBhcnQ7XHJcblx0XHR0aGlzLmNhc2VTZW5zaXRpdmUgPSBjYXNlU2Vuc2l0aXZlO1xyXG5cdH1cclxuXHJcblx0Ly8gUGFyc2VzIHRoaXMgdG9rZW5cclxuXHRwdWJsaWMgYWJzdHJhY3QgcGFyc2UoKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyBhbmQgY3JhdGVzIGlmIG5lY2Vzc2FyeSB0aGUgbmV4dCBVUkwgcGFydCBiYXNlZCBvbiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnQ7XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbi8vIGRlZmluZSBhIHNpbmdsZSBzZWdtZW50OiBwcm90b2NvbCwgcG9ydCBhbmQgaGFzaC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgUGFyc2VkVXJsUGFydCBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdC8vIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuXHJcblx0c2VnbWVudDogUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlciggdXJsUGFydCwgY2FzZVNlbnNpdGl2ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdHNlZ21lbnQucGFyc2UoIHRoaXMuZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKSwgZmFsc2UsIHRoaXMuY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHR0aGlzLnNlZ21lbnQgPSBzZWdtZW50O1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXSB7IHJldHVybiBbdGhpcy5zZWdtZW50XTsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVyLCB3aGljaCBpbmRpY2F0ZSBzZWdtZW50IGVuZCBmb3IgdGhlIGdpdmVuIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4vLyBjYW4gZGVmaW5lIG11bHRpcGxlIHNlZ21lbnRzOiBob3N0bmFtZSBhbmQgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHNlZ21lbnRzOiBQYXJzZWRTZWdtZW50W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVybFBhcnQsIGNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5zZWdtZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcGFydEVuZENoYXJhY3RlcnMgPSB0aGlzLmdldFBhcnRFbmRDaGFyYWN0ZXJzKCk7XHJcblxyXG5cdFx0Ly8gcGFyc2Ugc2VnbWVudHMgdW50aWwgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzIHRoZSBlbmQgb2YgdGhlIFVSTCBwYXJ0XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0XHRzZWdtZW50LnBhcnNlKCB0aGlzLmdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCksIHRydWUsIHRoaXMuY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHRcdHRoaXMuc2VnbWVudHMucHVzaCggc2VnbWVudCk7XHJcblx0XHRcdGlmIChwYXJ0RW5kQ2hhcmFjdGVycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXSB7IHJldHVybiB0aGlzLnNlZ21lbnRzOyB9XHJcblxyXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjb250YWlucyBjaGFyYWN0ZXIsIHdoaWNoIGluZGljYXRlIHNlZ21lbnQgZW5kIGZvciB0aGUgZ2l2ZW4gVVJMIHBhcnQuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZztcclxuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFByb3RvY29sIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwcm90b2NvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFByb3RvY29sIGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0LlByb3RvY29sLCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIjpcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gXCI6XCIgJiYgZ19jdXJySW5kZXggKyAyIDwgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoICYmXHJcblx0XHRcdGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleCsxXSA9PT0gXCIvXCIgJiYgZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4KzJdID09PSBcIi9cIilcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKDMpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdGxldCBwYXJ0ID0gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdHJldHVybiBwYXJ0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlcnMgYWZ0ZXIgcHJvdG9jb2wgcGFydGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEhvc3RuYW1lIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBob3N0bmFtZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEhvc3RuYW1lIGV4dGVuZHMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuSG9zdG5hbWUsIGZhbHNlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLjovPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0UGFydEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiOi8/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnOicpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUG9ydCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJy8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFBhdGgoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nIGFmdGVyIGhvc3RuYW1lIHNlZ21lbnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQb3J0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwb3J0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUG9ydCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5Qb3J0LCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIi8/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnLycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUGF0aCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFF1ZXJ5U3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfScgYWZ0ZXIgcG9ydCBwYXJ0YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUGF0aCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFBhdGggZXh0ZW5kcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5QYXRoLCB0cnVlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIj8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nIGFmdGVyIHBhdGggc2VnbWVudGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFF1ZXJ5U3RyaW5nIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUXVlcnlTdHJpbmcgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRRdWVyeVN0cmluZ1xyXG57XHJcblx0Ly8gUXVlcnkgc3RyaW5nIGRlZmluZXMgb25lIHNlZ21lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuXHJcblx0cGFyc2VkUVNQczogeyBbUDogc3RyaW5nXTogYXBpLklQYXJzZWRRU1AgfTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgbm90IHNwZWNpZmllZCBleHBsaWNpdGx5IGluIHRoZSBwYXR0ZXJuXHJcblx0Ly8gd2lsbCBiZSBhbGxvd2VkIHdoZW4gcGFyc2luZyBhY3R1YWwgVVJMcy5cclxuXHRhbGxvd0V4dHJhUXVlcnlQYXJhbXM6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlciggYXBpLkVVcmxQYXJ0LlF1ZXJ5LCB0cnVlKTtcclxuXHJcblx0XHR0aGlzLnBhcnNlZFFTUHMgPSB7fTtcclxuXHRcdHRoaXMuYWxsb3dFeHRyYVF1ZXJ5UGFyYW1zID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcGFyc2Ugc2VnbWVudHMgdW50aWwgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzIHRoZSBlbmQgb2YgdGhlIFVSTCBwYXJ0XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiBnX2N1cnJDaGFyICE9PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAnIScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBzcGVjaWFsIGNhc2UgZm9yIGRpc2FibGluZyBtYXRjaGluZyB3aXRoIGV4dHJhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXHJcblx0XHRcdFx0dGhpcy5hbGxvd0V4dHJhUXVlcnlQYXJhbXMgPSBmYWxzZTtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcXNwID0gbmV3IFBhcnNlZFFTUCgpO1xyXG5cdFx0XHRcdHFzcC5wYXJzZSgpO1xyXG5cdFx0XHRcdGlmIChxc3AubmFtZSBpbiB0aGlzLnBhcnNlZFFTUHMpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcC5uYW1lfScgYXBwZWFycyBtb3JlIHRoYW4gb25jZWApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VkUVNQc1txc3AubmFtZV0gPSBxc3A7XHJcblxyXG5cdFx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAnJicpXHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfScgYWZ0ZXIgcXVlcnkgc3RyaW5nIHNlZ21lbnRgKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W11cclxuXHR7XHJcblx0XHRsZXQgc2VnbWVudHM6IFBhcnNlZFNlZ21lbnRbXSA9IFtdO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xyXG5cdFx0Zm9yKCBsZXQgcXNwTmFtZSBpbiB0aGlzLnBhcnNlZFFTUHMpXHJcblx0XHRcdHNlZ21lbnRzLnB1c2goIHRoaXMucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50IGFzIFBhcnNlZFNlZ21lbnQpO1xyXG5cclxuXHRcdHJldHVybiBzZWdtZW50cztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRIYXNoIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBoYXNoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkSGFzaCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5IYXNoLCB0cnVlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUVNQIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IG1hdGNoaW5nIGEgc2luZ2xlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRRU1AgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkUVNQXHJcbntcclxuXHQvLyBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIG5hbWUuXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBRdWVyeSBTdHJpbmcgZGVmaW5lcyBvbmUgc2VnbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS5cclxuXHRzZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHBhcmFtZXRlciBuYW1lXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiBcIj0mI1wiLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5uYW1lICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdGlmICghdGhpcy5uYW1lKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGRvZXNuJ3QgaGF2ZSBuYW1lYCk7XHJcblxyXG5cdFx0aWYgKGdfY3VyckNoYXIgIT09ICc9JylcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBkb2Vzbid0IGhhdmUgdmFsdWVgKTtcclxuXHJcblx0XHRnX21vdmUoKTtcclxuXHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdHNlZ21lbnQucGFyc2UoIFwiJiNcIiwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNlZ21lbnQgPSBzZWdtZW50O1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpc05hbWVFbmRDaGFyYWN0ZXIoIGM6IHN0cmluZylcclxuXHR7XHJcblx0XHRyZXR1cm4gXCI9JiNcIi5pbmRleE9mKCBjKSA+PSAwO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFNlZ21lbnQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSBzZWdtZW50IGluIGEgVVJMIHBhdHRlcm4gdGhhdCBjYW4gYmUgbWF0Y2hlZCB0byBvbmVcclxuLy8gb3IgbW9yZSBwYXJ0cyBvZiBhbiBhY3R1YWwgVVJMLiBFYWNoIHNlZ21lbnQgY2FuIGhhdmUgemVybyBvciBtb3JlIGZpZWxkcyBkZWZpbmVkIGluIGl0LlxyXG4vLyBBIGZpZWxkIGlzIGRlZmluZWQgZWl0aGVyIHdpdGggb3Igd2l0aG91dCBhIG5hbWUuIFVubmFtZWQgZmllbGRzIGFyZSBhbHNvIGNhbGxlZFxyXG4vLyBhbm9ueW1vdXMgYW5kIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCBhbiBpbmRleC4gV2hlbiB0aGUgVVJMIHBhdHRlcm4gaXMgcGFyc2VkIGludG8gc2VnbWVudHMsXHJcbi8vIHRoZSBhbm9ueW1vdXMgZmllbGRzIGFyZSBudW1iZXJlZCBzZXF1ZW50aWFsbHkgYWNjcm9zcyBtdWx0aXBsZSBzZWdtZW50cy4gVGhhdCBtZWFucyB0aGF0XHJcbi8vIGluZGV4ZXMgZG8gbm90IHJlc3RhcnQgZm9yIGVhY2ggc2VnbWVudCBhbmQgdGh1cyBpbmRleGVzIGZvciBhIHNlZ21lbnQncyBmaWVsZHMgbWF5IG5vdFxyXG4vLyBzdGFydCBmcm9tIHplcm8uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRTZWdtZW50IGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFNlZ21lbnRcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgY2FuIGJlIHJlcGVhdGVkIG11dGlwbGUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIGJvdGhcclxuXHQvLyBvcHRpb25hbCBhbmQgbXVsdGkgY2FuIGJlIHJlcGVhdGVkIHplcm8gb3IgbW9yZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgbm90IG9wdGlvbmFsIGJ1dFxyXG5cdC8vIG11bHRpIGNhbiBiZSByZXBlYXRlZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuXHRpc011bHRpOiBib29sZWFuO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZmllbGRzLiAqL1xyXG5cdGZpZWxkczogUGFyc2VkRmllbGRbXTtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc2VnbWVudCdzIG1hdGNoIHBhdHRlcm4uXHJcblx0cmVnRXhwOiBSZWdFeHA7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNPcHRpb25hbCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc011bHRpID0gZmFsc2U7XHJcblx0XHR0aGlzLmZpZWxkcyA9IFtdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcGFyc2UoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nLCBpc1BvdGVudGlhbGx5TXVsdGk6IGJvb2xlYW4sIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gYW5hbHl6ZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBzZWdtZW50IGFuZCBpZiBpdCB3YXMgYSBzcGVjaWFsIGNoYXJhY3RlciB0aGF0XHJcblx0XHQvLyBkZXRlcm1pbmVzIHRoZSBzZWdtZW50cyBvcHRpb25hbCBhbmQgbXVsdGkgZmxhZ3MsIG1vdmUgdG8gdGhlIG5leHQgY2hhcmFjdGVyLlxyXG5cdFx0aWYgKHRoaXMuYW5hbGl6ZUZpcnN0Q2hhciggc2VnbWVudEVuZENoYXJzLCBpc1BvdGVudGlhbGx5TXVsdGkpKVxyXG5cdFx0XHRnX21vdmUoKTtcclxuXHJcblx0XHQvLyBtYXRjaCBwYXR0ZXJuIG9mIHRoZSBzZWdtZW50IGNvbnNpc3Rpbmcgb2YgZWxlbWVudHMgZWFjaCBvZiB3aGljaCBpcyBlaXRoZXIgdGV4dCBvclxyXG5cdFx0Ly8gcmVndWxhciBleHByZXNzaW9uIG9yIGZpZWxkXHJcblx0XHRsZXQgbWF0Y2hQYXR0ZXJuOiAoUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwKVtdID0gW107XHJcblxyXG5cdFx0Ly8gcGFyc2UgdG9rZW5zIGluIHRoZSBzZWdtZW50ICh0ZXh0LCByZWdleHAsIGZpZWxkcykgdW50aWwgZWl0aGVyIHdlIHJlYWNoIHRoZSBlbmQgb2ZcclxuXHRcdC8vIHRoZSBlbnRpcmUgVVJMIHBhdHRlcm4gb3Igd2UgZW5jb3VudGVyIGEgc2VnbWVudCBkZWxpbWl0ZXJcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA8IDApXHJcblx0XHR7XHJcblx0XHRcdGxldCB0b2tlbjogUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwO1xyXG5cdFx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJ3snKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0bGV0IGZpZWxkID0gbmV3IFBhcnNlZEZpZWxkKCk7XHJcblx0XHRcdFx0ZmllbGQucGFyc2UoIHNlZ21lbnRFbmRDaGFycyk7XHJcblx0XHRcdFx0dG9rZW4gPSBmaWVsZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnKCcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRsZXQgcmVnRXhwID0gbmV3IFBhcnNlZFJlZ0V4cCgpO1xyXG5cdFx0XHRcdHJlZ0V4cC5wYXJzZSgpO1xyXG5cdFx0XHRcdHRva2VuID0gcmVnRXhwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCB0ZXh0ID0gbmV3IFBhcnNlZFRleHQoKTtcclxuXHRcdFx0XHR0ZXh0LnBhcnNlKCBzZWdtZW50RW5kQ2hhcnMgKyBcInsoXCIpO1xyXG5cdFx0XHRcdHRva2VuID0gdGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0Y2hQYXR0ZXJuLnB1c2goIHRva2VuKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdlbmVyYXRlUmVnRXhwKCBtYXRjaFBhdHRlcm4sIGNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBbmFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBzZWdtZW50IGFuZCByZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBzcGVjaWFsIGNoYXJhY3RlclxyXG5cdC8vIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsIGFuZCB3aGV0aGVyIGl0IGlzIFwibXVsdGlcIi5cclxuXHRwcml2YXRlIGFuYWxpemVGaXJzdENoYXIoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nLCBpc1BvdGVudGlhbGx5TXVsdGk6IGJvb2xlYW4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBnX2N1cnJDaGFyKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlICc/JzogdGhpcy5pc09wdGlvbmFsID0gdHJ1ZTsgcmV0dXJuIHRydWU7XHJcblx0XHRcdGNhc2UgJyEnOiByZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdGNhc2UgJyonOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFpc1BvdGVudGlhbGx5TXVsdGkpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBTaW5nbGUtc2VnbWVudCBVUkwgcGFydCBjYW5ub3Qgc3RhcnQgZnJvbSAnKidgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc011bHRpID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2FzZSAnKyc6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWlzUG90ZW50aWFsbHlNdWx0aSlcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFNpbmdsZS1zZWdtZW50IFVSTCBwYXJ0IGNhbm5vdCBzdGFydCBmcm9tICcrJ2ApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmlzTXVsdGkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRW1wdHkgc2VnbWVudCBlbmNvdW50ZXJlZGApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBkZXNjcmliaW5nIHRoZSBzZWdtZW50LlxyXG5cdHByaXZhdGUgZ2VuZXJhdGVSZWdFeHAoIG1hdGNoUGF0dGVybjogKFBhcnNlZFRleHQgfCBQYXJzZWRGaWVsZCB8IFBhcnNlZFJlZ0V4cClbXSxcclxuXHRcdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gMS1iYXNlZCBpbmRleCBvZiB0aGUgUmVnRXhwIGNhcHR1cmluZyBncm91cC4gV2UgbmVlZCB0byBjb3VudCBjYXB0dXJpbmcgZ3JvdXBzIGluXHJcblx0XHQvLyBvcmRlciB0byBsYXRlciBnZXQgdmFsdWVzIG9mIG5hbWVkIGFuZCBhbm9ueW1vdXMgZmllbGRzLlxyXG5cdFx0bGV0IG5leHRDYXB0dXJpbmdHcm91cEluZGV4ID0gMTtcclxuXHJcblx0XHRsZXQgcmVnRXhwU3RyaW5nID0gXCJcIjtcclxuXHRcdGlmIChtYXRjaFBhdHRlcm4ubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZWdFeHBTdHJpbmcgKz0gXCIuK1wiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB0b2tlbiBvZiBtYXRjaFBhdHRlcm4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRUZXh0KVxyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IHRva2VuLmNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRSZWdFeHApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IFwiKFwiICsgdG9rZW4uY29udGVudCArIFwiKVwiO1xyXG5cdFx0XHRcdFx0bmV4dENhcHR1cmluZ0dyb3VwSW5kZXggKz0gMSArIHRva2VuLmNhcHR1cmluZ0dyb3VwUXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIC8vIGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlZEZpZWxkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRva2VuLmlzQXJyYXkgPSB0aGlzLmlzTXVsdGk7XHJcblx0XHRcdFx0XHR0b2tlbi5pbmRleCA9IG5leHRDYXB0dXJpbmdHcm91cEluZGV4O1xyXG5cdFx0XHRcdFx0dGhpcy5maWVsZHMucHVzaCggdG9rZW4pO1xyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IHRoaXMuZ2VuZXJhdGVSZWdFeHBTZWN0aW9uRm9yRmllbGQoIHRva2VuKTtcclxuXHRcdFx0XHRcdG5leHRDYXB0dXJpbmdHcm91cEluZGV4Kys7XHJcblx0XHRcdFx0XHRpZiAodG9rZW4ubWF0Y2hQYXR0ZXJuKVxyXG5cdFx0XHRcdFx0XHRuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCArPSAxICsgdG9rZW4ubWF0Y2hQYXR0ZXJuLmNhcHR1cmluZ0dyb3VwUXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVnRXhwID0gbmV3IFJlZ0V4cCggcmVnRXhwU3RyaW5nLCBjYXNlU2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gZ3JvdXAgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuXHRwcml2YXRlIGdlbmVyYXRlUmVnRXhwU2VjdGlvbkZvckZpZWxkKCBwYXJzZWRGaWVsZDogUGFyc2VkRmllbGQpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcyA9IFwiKFwiO1xyXG5cdFx0aWYgKHBhcnNlZEZpZWxkLm1hdGNoUGF0dGVybiAmJiBwYXJzZWRGaWVsZC5tYXRjaFBhdHRlcm4uY29udGVudClcclxuXHRcdHtcclxuXHRcdFx0cyArPSBgKCR7cGFyc2VkRmllbGQubWF0Y2hQYXR0ZXJuLmNvbnRlbnR9KWA7XHJcblx0XHRcdGlmIChwYXJzZWRGaWVsZC5pc09wdGlvbmFsKVxyXG5cdFx0XHRcdHMgKz0gXCI/XCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChwYXJzZWRGaWVsZC5pc09wdGlvbmFsKVxyXG5cdFx0XHRzICs9IFwiLipcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cyArPSBcIi4rXCI7XHJcblxyXG5cdFx0cyArPSBcIilcIjtcclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFRleHQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSB0ZXh0IHNlY3Rpb24gd2l0aGluIGEgc2VnbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFRleHQgZXh0ZW5kcyBQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gVGV4dCBzZWN0aW9uIHN0cmluZ1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoIHRleHRFbmRDaGFyczogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgdGV4dEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0cyArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB0ZXh0IG1pZ2h0IGhhdmUgYmVlbiBVUkwgZW5jb2RlZFxyXG5cdFx0dGhpcy5jb250ZW50ID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRSZWdFeHAgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSByZWd1bGFyIGV4cHJlc3Npb24gc2VjdGlvbiB3aXRoaW4gYSBzZWdtZW50IG9yXHJcbi8vIGZpZWxkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUmVnRXhwIGV4dGVuZHMgUGFyc2VkVG9rZW5cclxue1xyXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdcclxuXHRjb250ZW50OiBzdHJpbmc7XHJcblxyXG5cdC8vIE51bWJlciBvZiBjYXB0dXJpbmcgZ3JvdXBzIHdpdGhpbiB0aGUgcmVndWxhciBleHByZXNzaW9uXHJcblx0Y2FwdHVyaW5nR3JvdXBRdHk6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBcIlwiO1xyXG5cdFx0dGhpcy5jYXB0dXJpbmdHcm91cFF0eSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFN0YWNrIG9mIG9wZW5pbmcgYW5kIGNsb3NpbmcgY2hhcmFjdGVycyAocGFyZW50aGVzaXMsIGJyYWNrZXRzIGFuZCBjdXJseSBicmFjZXMpIGZvclxyXG5cdFx0Ly8gcGFyc2luZyByZWd1bGFyIGV4cHJlc3Npb25zIHNlY3Rpb24uIFJlZ3VsYXIgZXhwcmVzc2lvbiBzZWN0aW9uIHN0b3BzIHdoZW4gd2UgZW5jb3VudGVyXHJcblx0XHQvLyBjaGFyYWN0ZXIgJyknIGFuZCB0aGlzIHN0YWNrIGlzIGVtcHR5LlxyXG5cdFx0bGV0IHN0YWNrOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VyckNoYXIgPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRpZiAoY3VyckNoYXIgPT09ICcpJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPT09IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHN0YWNrLnBvcCgpID09PSAnKCcpXHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBOb24tbWF0Y2hpbmcgY2hhcmFjdGVyICcke2N1cnJDaGFyfScgaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY3VyckNoYXIgPT09ICd9JylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzdGFjay5wb3AoKSA9PT0gJ3snKVxyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgTm9uLW1hdGNoaW5nIGNoYXJhY3RlciAnJHtjdXJyQ2hhcn0nIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnXScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICdbJylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYE5vbi1tYXRjaGluZyBjaGFyYWN0ZXIgJyR7Y3VyckNoYXJ9JyBpbiByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChcIih7W1wiLmluZGV4T2YoIGN1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGN1cnJDaGFyID09PSAnKCcpXHJcblx0XHRcdFx0XHR0aGlzLmNhcHR1cmluZ0dyb3VwUXR5Kys7XHJcblxyXG5cdFx0XHRcdHN0YWNrLnB1c2goIGN1cnJDaGFyKTtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjdXJyQ2hhciA9PT0gJ1xcXFwnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50ICs9IGN1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0XHRjdXJyQ2hhciA9IGdfY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5jb250ZW50ICs9IGN1cnJDaGFyO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHdlIGVuZCB1cCBoZXJlIG9ubHkgaWYgdGhlIFVSTCBwYXR0ZXJuIGVuZGVkIHdoaWxlIHdpdGhpbiB1bmZpbmlzaGVkIHJlZ3VsYXIgZXhwcmVzc2lvblxyXG5cdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBVUkwgcGF0dGVybiBlbmQgd2l0aGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpbmFsaXplKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29udGVudClcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRW1wdHkgcmVndWxhciBleHByZXNzaW9uYCk7XHJcblxyXG5cdFx0c3VwZXIuZmluYWxpemUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRGaWVsZCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIGZpZWxkIHdpdGhpbiBhIHNlZ21lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRGaWVsZCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRGaWVsZFxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIGlzIG9wdGlvbmFsXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgZmllbGQuXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBGaWVsZCBGaWVsZEZvcm1hdFxyXG5cdGZvcm1hdDogYXBpLkZpZWxkRm9ybWF0O1xyXG5cclxuXHQvKiogT3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgZmllbGQgKi9cclxuXHRkZWZhdWx0VmFsdWU6IGFwaS5GaWVsZFZhbHVlVHlwZTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIHZhbHVlIGlzIGFuIGFycmF5LiBUaGlzIGlzIHRydWUgZm9yIGZpZWxkcyB0aGF0IGNhbiBhcHBlYXJcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgVVJMIHBhcnQuXHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYXB0dXJpbmcgZ3JvdXAgY29ycmVzcG9uZGluZyB0byB0aGUgZmllbGQgd2l0aGluIHRoZVxyXG5cdC8vIHNlZ21lbnQuXHJcblx0aW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHN0cmluZyBkZXNjcmliaW5nIHRoZSBtYXRjaGluZyBwYXR0ZXJuIGZvciB0aGUgZmllbGRcclxuXHRtYXRjaFBhdHRlcm46IFBhcnNlZFJlZ0V4cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gZmFsc2U7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlwiO1xyXG5cdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuU3RyaW5nO1xyXG5cdFx0dGhpcy5tYXRjaFBhdHRlcm4gPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBjaGVjayB3aGV0aGVyIHRoaXMgZmllbGQgaXMgb3B0aW9uYWxcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaXNPcHRpb25hbCA9IHRydWU7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBjaGFyYWN0ZXJzIGluIHRoZSBmaWVsZCBuYW1lXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkIGRvZXNuJ3QgaGF2ZSBjbG9zaW5nICd9J2ApO1xyXG5cdFx0XHRlbHNlIGlmIChcIn0oJT1cIi5pbmRleE9mKGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vZWxzZSBpZiAobm9uLWFjY2VwdGFibGUtY2hhci1pbi1maWVsZC1uYW1lKVxyXG5cdFx0XHQvL1x0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIGZpZWxkYCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubmFtZSArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubmFtZS5sZW5ndGggPT09IDApXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkIG11c3QgaGF2ZSBuYW1lYCk7XHJcblxyXG5cdFx0Z19jaGVja0VuZCgpO1xyXG5cclxuXHRcdC8vIGZpZWxkIG1heSBkZWZpbmUgZm9ybWF0XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJyUnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKVxyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblxyXG5cdFx0XHRsZXQgZm9ybWF0Q2hhciA9IGdfY3VyckNoYXI7XHJcblx0XHRcdGlmIChmb3JtYXRDaGFyID09PSAnaScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5JbnRlZ2VyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGZvcm1hdENoYXIgPT09ICdmJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LkZsb2F0O1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGZvcm1hdENoYXIgPT09ICdiJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LkJvb2xlYW47XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICcke2dfY3VyckNoYXJ9JyB3aXRoaW4gZmllbGQgZm9ybWF0YCk7XHJcblxyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmllbGQgbWF5IGhhdmUgcmVndWxhciBleHByZXNzaW9uXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJygnKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcmVnRXhwID0gbmV3IFBhcnNlZFJlZ0V4cCgpO1xyXG5cdFx0XHRyZWdFeHAucGFyc2UoKTtcclxuXHRcdFx0dGhpcy5tYXRjaFBhdHRlcm4gPSByZWdFeHA7XHJcblxyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmllbGQgbWF5IGhhdmUgZGVmYXVsdCB2YWx1ZTogaW4gdGhpcyBjYXNlIGl0IGJlY29tZXMgb3B0aW9uYWxcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnPScpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaXNPcHRpb25hbCA9IHRydWU7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR0aGlzLnBhcnNlRGVmYXVsdFZhbHVlKCBzZWdtZW50RW5kQ2hhcnMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRzd2l0Y2goIHRoaXMuZm9ybWF0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuSW50ZWdlcjogdGhpcy5kZWZhdWx0VmFsdWUgPSBOYU47IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkZsb2F0OiB0aGlzLmRlZmF1bHRWYWx1ZSA9IE5hTjsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuQm9vbGVhbjogdGhpcy5kZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQ7IGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6IHRoaXMuZGVmYXVsdFZhbHVlID0gXCJcIjsgYnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJ30nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfScgd2l0aGluIGZpZWxkYCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlRGVmYXVsdFZhbHVlKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblx0XHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICd9JylcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Ly9lbHNlIGlmIChub24tYWNjZXB0YWJsZS1jaGFyLWluLWZpZWxkLW5hbWUpXHJcblx0XHRcdC8vXHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gZmllbGRgKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cyArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGVtcHR5IGFuZCBpZiBmaWVsZCBmb3JtYXQgaXMgc2V0IHRvIGEgbm9uLXN0cmluZ1xyXG5cdFx0Ly8gYWxzbyBjaGVjayB3aGV0aGVyIGl0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gdGhlYXQgZm9ybWF0LlxyXG5cdFx0aWYgKCFzKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCBkZWZhdWx0IHZhbHVlIGNhbm5vdCBiZSBlbXB0eWApO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIFVSTCBlbmNvZGVkXHJcblx0XHRzID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xyXG5cclxuXHRcdGlmICh0aGlzLmZvcm1hdCA9PT0gYXBpLkZpZWxkRm9ybWF0LkludGVnZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKCBzKTtcclxuXHRcdFx0aWYgKGlzTmFOKCB0aGlzLmRlZmF1bHRWYWx1ZSkgfHwgIU51bWJlci5pc0ludGVnZXIoIHRoaXMuZGVmYXVsdFZhbHVlKSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBEZWZhdWx0IHZhbHVlICcke3N9JyBvZiBJbnRlZ2VyIGZpZWxkICcke3RoaXMubmFtZX0nIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gSW50ZWdlcmApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5mb3JtYXQgPT09IGFwaS5GaWVsZEZvcm1hdC5GbG9hdClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIoIHMpO1xyXG5cdFx0XHRpZiAoaXNOYU4oIHRoaXMuZGVmYXVsdFZhbHVlKSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBEZWZhdWx0IHZhbHVlIG9mICcke3N9JyBGbG9hdCBmaWVsZCAnJHt0aGlzLm5hbWV9JyBjYW5ub3QgYmUgY29udmVydGVkIHRvIEZsb2F0YCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmZvcm1hdCA9PT0gYXBpLkZpZWxkRm9ybWF0LkJvb2xlYW4pXHJcblx0XHR7XHJcblx0XHRcdGxldCB2ID0gcy50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAodiA9PT0gXCJ0cnVlXCIgfHwgdiA9PT0gXCJ0XCIgfHwgdiA9PT0gXCJ5ZXNcIiB8fCB2ID09PSBcInlcIiB8fCB2ID09PSBcIjFcIilcclxuXHRcdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHYgPT09IFwiZmFsc2VcIiB8fCB2ID09PSBcImZcIiB8fCB2ID09PSBcIm5vXCIgfHwgdiA9PT0gXCJuXCIgfHwgdiA9PT0gXCIwXCIpXHJcblx0XHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYERlZmF1bHQgdmFsdWUgb2YgJyR7c30nIEJvb2xlYW4gZmllbGQgJyR7dGhpcy5uYW1lfScgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBCb29sZWFuYCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gcztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXJyb3IgdGhhdCBvY2N1cnJlZCBkdXJpbmcgcGFyc2luZyBvZlxyXG4vLyBhIFVSTCBwYXR0ZXJuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciBpbXBsZW1lbnRzIGFwaS5JVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb25cclxue1xyXG5cdC8vIEluZGV4IGluIHRoZSBwYXR0ZXJuIHN0cmluZyBhdCB3aGljaCB0aGVlcnJvciBvY2N1cnJlZC5cclxuXHRwb3M6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoIG1lc3NhZ2U6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5wb3MgPSBnX2N1cnJJbmRleDtcclxuXHRcdHRoaXMubWVzc2FnZSA9IGBFcnJvciBhdCBwb3NpdGlvbiAke3RoaXMucG9zfTogJHttZXNzYWdlfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=