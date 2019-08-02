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
                throw new UrlPatternParsingException(`Invalid character within field format`);
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
            throw new UrlPatternParsingException(`Invalid character within field`);
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
            this.defaultValue = parseInt(s);
            if (isNaN(this.defaultValue))
                throw new UrlPatternParsingException(`Default value of Integer field ${this.name} cannot be converted to Integer`);
        }
        else if (this.format === api.FieldFormat.Float) {
            this.defaultValue = parseFloat(s);
            if (isNaN(this.defaultValue))
                throw new UrlPatternParsingException(`Default value of Float field ${this.name} cannot be converted to Float`);
        }
        else if (this.format === api.FieldFormat.Boolean) {
            let v = s.toLowerCase();
            if (v === "true" || v === "t" || v === "yes" || v === "y" || v === "1")
                this.defaultValue = true;
            else if (v === "false" || v === "f" || v === "no" || v === "n" || v === "0")
                this.defaultValue = false;
            else
                throw new UrlPatternParsingException(`Default value of Boolean field ${this.name} cannot be converted to Boolean`);
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
        this.message = `Error at position ${this.pos}\n${message}`;
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW11cmwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbXVybC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW11cmwvLi9zcmMvYWN0dWFsLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21pbXVybFR5cGVzLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSx1QkFBdUI7QUFDdkIsU0FBZ0IsUUFBUSxD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LENBQUM7U0FDakg7YUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQ2hEO1lBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLE1BQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDckUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDMUUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7O2dCQUUxQixNQUFNLElBQUksMEJBQTBCLENBQUUsa0NBQWtDLElBQUksQ0FBQyxJQUFJLGlDQUFpQyxDQUFDLENBQUM7U0FDckg7O1lBRUEsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNEO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixnR0FBZ0c7QUFDaEcsaUJBQWlCO0FBQ2pCLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsTUFBTSwwQkFBMkIsU0FBUSxLQUFLO0lBSzdDLFlBQWEsT0FBZTtRQUUzQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLElBQUksQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFLENBQUM7SUFDNUQsQ0FBQztDQUNEIiwiZmlsZSI6Im1pbXVybC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW11cmxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltdXJsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltdXJsVHlwZXMudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vYXBpXCJcclxuXHJcblxyXG5cclxuLy8gUGFyc2VzIHRoZSBnaXZlbiBVUkxcclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVVJMKCB1cmw6IHN0cmluZyk6IGFwaS5JUGFyc2VkQWN0dWFsVVJMXHJcbntcclxuXHRsZXQgcGFyc2VkVVJMOiBhcGkuSVBhcnNlZEFjdHVhbFVSTCA9IHt9O1xyXG5cclxuXHQvLyBmaW5kIHByb3RvY29sXHJcblx0bGV0IGhvc3RuYW1lSW5kZXg6IG51bWJlcjtcclxuXHRsZXQgcHJvdG9jb2xTZXBhcmF0b3JJbmRleCA9IHVybC5pbmRleE9mKCBcIjovL1wiKTtcclxuXHRpZiAocHJvdG9jb2xTZXBhcmF0b3JJbmRleCA9PT0gMClcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sU2VwYXJhdG9ySW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdHBhcnNlZFVSTC5wcm90b2NvbCA9IHVybC5zdWJzdHIoIDAsIHByb3RvY29sU2VwYXJhdG9ySW5kZXgpO1xyXG5cdFx0aG9zdG5hbWVJbmRleCA9IHByb3RvY29sU2VwYXJhdG9ySW5kZXggKyAzO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRob3N0bmFtZUluZGV4ID0gdXJsWzBdID09PSAnLycgPyAtMSA6IDA7XHJcblxyXG5cdGxldCBuZXh0U2VhcmNoSW5kZXhTdGFydCA9IGhvc3RuYW1lSW5kZXggPCAwID8gMCA6IGhvc3RuYW1lSW5kZXg7XHRcclxuXHRsZXQgY29sb25JbmRleCA9IHVybC5pbmRleE9mKCAnOicsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHRsZXQgc2xhc2hJbmRleCA9IHVybC5pbmRleE9mKCAnLycsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHRsZXQgcXVlc3Rpb25JbmRleCA9IHVybC5pbmRleE9mKCAnPycsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHRsZXQgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoICcjJywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cclxuXHRpZiAoaG9zdG5hbWVJbmRleCA+PSAwKVxyXG5cdHtcclxuXHRcdGlmIChjb2xvbkluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgY29sb25JbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZSBpZiAoc2xhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIHNsYXNoSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2UgaWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBxdWVzdGlvbkluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlIGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBoYXNoSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBwYXJzZWRVUkwuaG9zdG5hbWUubGVuZ3RoOyBpKyspXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZVtpXSA9IGRlY29kZVVSSUNvbXBvbmVudCggcGFyc2VkVVJMLmhvc3RuYW1lW2ldKTtcclxuXHR9XHJcblxyXG5cdGlmIChjb2xvbkluZGV4ID4gMClcclxuXHR7XHJcblx0XHRpZiAoc2xhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEsIHNsYXNoSW5kZXggLSBjb2xvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlIGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgcXVlc3Rpb25JbmRleCAtIGNvbG9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2UgaWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEsIGhhc2hJbmRleCAtIGNvbG9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyc2VkVVJMLnBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSk7XHJcblx0fVxyXG5cclxuXHQvLyBzbGFzaCBjYW4gYmUgdGhlIGZpcnN0IGNoYXJhY3RlciBpZiB0aGVyZSBpcyBubyBob3N0bmFtZVxyXG5cdGlmIChzbGFzaEluZGV4ID49IDApXHJcblx0e1xyXG5cdFx0aWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aCA9IHVybC5zdWJzdHIoIHNsYXNoSW5kZXggKyAxLCBxdWVzdGlvbkluZGV4IC0gc2xhc2hJbmRleCAtIDEpLnNwbGl0KCAnLycpO1xyXG5cdFx0ZWxzZSBpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBhdGggPSB1cmwuc3Vic3RyKCBzbGFzaEluZGV4ICsgMSwgaGFzaEluZGV4IC0gc2xhc2hJbmRleCAtIDEpLnNwbGl0KCAnLycpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aCA9IHVybC5zdWJzdHIoIHNsYXNoSW5kZXggKyAxKS5zcGxpdCggJy8nKTtcclxuXHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHBhcnNlZFVSTC5wYXRoLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aFtpXSA9IGRlY29kZVVSSUNvbXBvbmVudCggcGFyc2VkVVJMLnBhdGhbaV0pO1xyXG5cdH1cclxuXHJcblx0aWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdHBhcnNlZFVSTC5xdWVyeSA9IHt9O1xyXG5cdFx0bGV0IHNlYXJjaFN0cmluZzogc3RyaW5nO1xyXG5cdFx0aWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHNlYXJjaFN0cmluZyA9IHVybC5zdWJzdHIoIHF1ZXN0aW9uSW5kZXggKyAxLCBoYXNoSW5kZXggLSBxdWVzdGlvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHNlYXJjaFN0cmluZyA9IHVybC5zdWJzdHIoIHF1ZXN0aW9uSW5kZXggKyAxKTtcclxuXHJcblx0XHRsZXQgcGFyYW1zID0gc2VhcmNoU3RyaW5nLnNwbGl0KCAnJicpO1xyXG5cdFx0Zm9yKCBsZXQgcGFyYW0gb2YgcGFyYW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYXJyID0gcGFyYW0uc3BsaXQoICc9Jyk7XHJcblx0XHRcdGlmIChhcnIubGVuZ3RoID09PSAyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoIGFyclswXSk7XHJcblx0XHRcdFx0bGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudCggYXJyWzFdKTtcclxuXHRcdFx0XHRpZiAobmFtZSBpbiBwYXJzZWRVUkwucXVlcnkpXHJcblx0XHRcdFx0XHRwYXJzZWRVUkwucXVlcnlbbmFtZV0ucHVzaCggdmFsKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRwYXJzZWRVUkwucXVlcnlbbmFtZV0gPSBbdmFsXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0cGFyc2VkVVJMLmhhc2ggPSBkZWNvZGVVUklDb21wb25lbnQoIHVybC5zdWJzdHIoIGhhc2hJbmRleCArIDEpKTtcclxuXHJcblx0cmV0dXJuIHBhcnNlZFVSTDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBwdWJsaWMgQVBJIG9mIHRoZSBVUkwgUGFyc2luZyBhbmQgTWF0Y2hpbmcgbGlicmFyeSAnbWltdXJsJy5cclxuICovXHJcblxyXG4vKipcclxuICogVGhlIFBhcnNlZEFjdHVhbFVSTCBjbGFzcyBjb250YWlucyBVUkwgcGFydHMgcGFyc2VkIG91dCBvZiB0aGUgVVJMIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0LyoqIFByb3RvY29sIFVSTCBwYXJ0ICovXHJcblx0cHJvdG9jb2w/OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBIb3N0bmFtZSBVUkwgcGFydCBhcyBhcnJheSBvZiBob3N0bmFtZSBzZWdtZW50czogZS5nLiBgW1wid3d3XCIsIFwiYWJjXCIsIFwiY29tXCJdYCAqL1xyXG5cdGhvc3RuYW1lPzogc3RyaW5nW107XHJcblxyXG5cdC8qKiBQb3J0IFVSTCBwYXJ0ICovXHJcblx0cG9ydD86IHN0cmluZztcclxuXHJcblx0LyoqIFBhdGggVVJMIHBhcnQgYXMgYXJyYXkgb2YgcGF0aCBzZWdtZW50czogZS5nLiBgW1widXNlclwiLCBcInByb2ZpbGVcIiwgXCJvcHRpb25zXCJdYCAqL1xyXG5cdHBhdGg/OiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIFF1ZXJ5IHN0cmluZyBVUkwgcGFydCBhcyBhIG1hcCBvZiBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyB0byB0aGUgYXJyYXlzIG9mIHRoZWlyIHZhbHVlcyAqL1xyXG5cdHF1ZXJ5PzogeyBbUDogc3RyaW5nXTogc3RyaW5nW10gfTtcclxuXHJcblx0LyoqIEhhc2ggKGZyYWdtZW50KSBVUkwgcGFydCAqL1xyXG5cdGhhc2g/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgVXJsUGFydCBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgZGlzdGluZ3Vpc2hpbmcgVVJMIHBhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVVybFBhcnQgeyBQcm90b2NvbCwgSG9zdG5hbWUsIFBvcnQsIFBhdGgsIFF1ZXJ5LCBIYXNoIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkVXJsUGF0dGVybiBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgdG9wLWxldmVsIG9iamVjdCBkZXNjcmliaW5nIHRoZSByZXN1bHQgb2YgVVJMXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHQvKiogT3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgZm9yIHdoaWNoIHRoaXMgb2JqZWN0IHdhcyBjcmVhdGVkLiAqL1xyXG5cdHBhdHRlcm5TdHJpbmc6IHN0cmluZztcclxuXHJcblx0LyoqIFByb3RvY29sIFVSTCBwYXJ0LiAqL1xyXG5cdHByb3RvY29sOiBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBIb3N0bmFtZSBVUkwgcGFydC4gKi9cclxuXHRob3N0bmFtZTogSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBQb3J0IFVSTCBwYXJ0LiAqL1xyXG5cdHBvcnQ6IElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIFBhdGggVVJMIHBhcnQuICovXHJcblx0cGF0aDogSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBRdWVyeSBTdHJpbmcgVVJMIHBhcnQuICovXHJcblx0cXVlcnk6IElQYXJzZWRRdWVyeVN0cmluZztcclxuXHJcblx0LyoqIEhhc2ggVVJMIHBhcnQuICovXHJcblx0aGFzaDogSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogQXJyYXkgb2YgVVJMIHBhcnQuIEluZGV4ZXMgYXJlIHZhbHVlcyBmcm9tIHRoZSBVcmxQYXJ0IGVudW1lcmF0aW9uLiAqL1xyXG5cdHBhcnRzOiBJUGFyc2VkVXJsUGFydFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFyc2VkTG9jYXRpb24gdHlwZSBkZWZpbmVzIGhvdyBkaWZmZXJlbnQgc2VjdGlvbiBvZiB0aGUgVVJMIHBhdHRlcm4gY2FuIGJlIGxvY2F0ZWQgaW4gdGhlXHJcbiAqIG9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nLiBMb2NhdGlvbiBpcyBkZWZpbmVkIHVzaW5nIHRoZSB6ZXJvLWJhc2VkIGluZGV4IHdoZXJlIHRoZSBzZWN0aW9uXHJcbiAqIGJlZ2lucyBhbmQgaXRzIGxlbmd0aC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFBhcnNlZExvY2F0aW9uID0geyBzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRUb2tlbiBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKlxyXG5cdCAqIExvY2F0aW9uIG9mIHRoZSBwYXJ0IGluIHRoZSBvcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBjb250YWluaW5nIHRoZSB6ZXJvLWJhc2VkIGluZGV4IHdoZXJlXHJcblx0ICogdGhlIHBhcnQgYmVnaW5zIGFuZCBpdHMgbGVuZ3RoLlxyXG5cdCAqL1xyXG5cdGxvY2F0aW9uOiBQYXJzZWRMb2NhdGlvbjtcclxuXHJcblx0LyoqIENvbnRlbnQgb2YgdGhlIHRva2VuICovXHJcblx0dG9rZW5TdGluZzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFVybFBhcnQgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFVybFBhcnQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLiAqL1xyXG5cdHVybFBhcnQ6IEVVcmxQYXJ0O1xyXG5cclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbXBhcmlzb24gb2YgdGhpcyBwYXJ0IHNob2xkIGJlIGNhc2Utc2Vuc2l0aXZlIG9yIG5vdC4gKi9cclxuXHRjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xyXG5cclxuXHQvKiogUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuICovXHJcblx0Z2V0U2VnbWVudHMoKTogSVBhcnNlZFNlZ21lbnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuICogZGVmaW5lIGEgc2luZ2xlIHNlZ21lbnQ6IHByb3RvY29sLCBwb3J0IGFuZCBoYXNoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBJUGFyc2VkVXJsUGFydFxyXG57XHJcblx0LyoqIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuICovXHJcblx0c2VnbWVudDogSVBhcnNlZFNlZ21lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbiAqIGNhbiBkZWZpbmUgbXVsdGlwbGUgc2VnbWVudHM6IGhvc3RuYW1lIGFuZCBwYXRoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCBleHRlbmRzIElQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvKiogVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gKi9cclxuXHRzZWdtZW50czogSVBhcnNlZFNlZ21lbnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRRdWVyeVN0cmluZyBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgcXVlcnkgc3RyaW5nXHJcbiAqIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRRdWVyeVN0cmluZyBleHRlbmRzIElQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvKiogUXVlcnkgc3RyaW5nIGRlZmluZXMgb25lIHNlZ2VtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLiAqL1xyXG5cdHBhcnNlZFFTUHM6IHsgW1A6IHN0cmluZ106IElQYXJzZWRRU1AgfTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgbm90IHNwZWNpZmllZCBleHBsaWNpdGx5IGluIHRoZSBwYXR0ZXJuXHJcblx0ICogd2lsbCBiZSBhbGxvd2VkIHdoZW4gcGFyc2luZyBhY3R1YWwgVVJMcy5cclxuXHQgKi9cclxuXHRhbGxvd0V4dHJhUXVlcnlQYXJhbXM6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkUVNQIGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBtYXRjaGluZyBhIHNpbmdsZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkUVNQIGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBuYW1lLiAqL1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFF1ZXJ5IFN0cmluZyBkZWZpbmVzIG9uZSBzZWdlbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS4gKi9cclxuXHRzZWdtZW50OiBJUGFyc2VkU2VnbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRTZWdtZW50IGludGVyZmFjZSBkZWZpbmVzIGEgc2luZ2xlIHNlZ21lbnQgaW4gYSBVUkwgcGF0dGVybiB0aGF0IGNhbiBiZSBtYXRjaGVkIHRvXHJcbiAqIG9uZSBvciBtb3JlIHBhcnRzIG9mIGFuIGFjdHVhbCBVUkwuIEVhY2ggc2VnbWVudCBjYW4gaGF2ZSB6ZXJvIG9yIG1vcmUgZmllbGRzIGRlZmluZWQgaW4gaXQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRTZWdtZW50IGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWwgKi9cclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBjYW4gYmUgcmVwZWF0ZWQgbXV0aXBsZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgYm90aFxyXG5cdCAqIG9wdGlvbmFsIGFuZCBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgemVybyBvciBtb3JlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBub3Qgb3B0aW9uYWwgYnV0XHJcblx0ICogbXVsdGkgY2FuIGJlIHJlcGVhdGVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG5cdCAqL1xyXG5cdGlzTXVsdGk6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBBcnJheSBvZiBmaWVsZHMgZGVmaW5lZCBpbiB0aGlzIHNlZ21lbnQuICovXHJcblx0ZmllbGRzOiBJUGFyc2VkRmllbGRbXTtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc2VnbWVudCdzIG1hdGNoIHBhdHRlcm4uXHJcblx0cmVnRXhwOiBSZWdFeHA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkRmllbGQgaW50ZXJmYWNlIGRlZmluZXMgYSBzaW5nbGUgZmllbGQgd2l0aGluIGEgc2VnbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZEZpZWxkIGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIGlzIG9wdGlvbmFsICovXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGZpZWxkICovXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogRmllbGQgZm9ybWF0ICovXHJcblx0Zm9ybWF0OiBGaWVsZEZvcm1hdDtcclxuXHJcblx0LyoqIE9wdGlvbmFsIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGZpZWxkICovXHJcblx0ZGVmYXVsdFZhbHVlPzogRmllbGRWYWx1ZVR5cGU7XHJcblxyXG5cdC8vIC8qKiBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGRlc2NyaWJpbmcgdGhlIG1hdGNoaW5nIHBhdHRlcm4gZm9yIHRoZSBmaWVsZCAqL1xyXG5cdC8vIG1hdGNoUGF0dGVybjogSVBhcnNlZFJlZ0V4cDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIHZhbHVlIGlzIGFuIGFycmF5LiBUaGlzIGlzIHRydWUgZm9yIGZpZWxkcyB0aGF0IGNhbiBhcHBlYXJcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgVVJMIHBhcnQuXHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYXB0dXJpbmcgZ3JvdXAgY29ycmVzcG9uZGluZyB0byB0aGUgZmllbGQgd2l0aGluIHRoZVxyXG5cdC8vIHNlZ21lbnQuXHJcblx0aW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZpZWxkRm9ybWF0IGNsYXNzIGRlZmluZXMgcG9zc2libGUgZmllbGQgZm9ybWF0cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEZpZWxkRm9ybWF0XHJcbntcclxuXHQvKiogRmllbGQgdmFsdWUgY2FuIGJlIGFyYml0cmFyeSBzdHJpbmcgKi9cclxuXHRTdHJpbmcsXHJcblxyXG5cdC8qKiBGaWVsZCB2YWx1ZSBtdXN0IGJlIGNvbnZlcnRhYmxlIHRvIGFuIGludGVnZXIgbnVtYmVyICovXHJcblx0SW50ZWdlcixcclxuXHJcblx0LyoqIEZpZWxkIHZhbHVlIG11c3QgYmUgY29udmVydGFibGUgdG8gYSByZWFsIG51bWJlciAqL1xyXG5cdEZsb2F0LFxyXG5cclxuXHQvKiogRmllbGQgdmFsdWUgbXVzdCBiZSBjb252ZXJ0YWJsZSB0byBhIEJvb2xlYW4gbnVtYmVyICovXHJcblx0Qm9vbGVhbixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBlcnJvciB0aGF0IG9jY3VycmVkIGR1cmluZyBwYXJzaW5nIG9mXHJcbiAqIGEgVVJMIHBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yXHJcbntcclxuXHQvKiogSW5kZXggaW4gdGhlIHBhdHRlcm4gc3RyaW5nIGF0IHdoaWNoIHRoZWVycm9yIG9jY3VycmVkLiAqL1xyXG5cdHBvczogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTdXBwb3J0ZWQgcHJpbWl0aXZlIHR5cGVzIG9mIGZpZWxkIHZhbHVlcyAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVGaWVsZFZhbHVlVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblxyXG4vKiogVHlwZXMgb2YgZmllbGRzIHdpdGggbXVsdGlwbGUgdmFsdWVzICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRmllbGRWYWx1ZVR5cGUgPSBTaW5nbGVGaWVsZFZhbHVlVHlwZVtdO1xyXG5cclxuLyoqIEZpZWxkIHZhbHVlIHR5cGUsIHdoaWNoIGNhbiBiZSBlaXRoZXIgc2luZ2UgdmFsdWUgb3IgbXVsdGlwbGUgdmFsdWUgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGaWVsZFZhbHVlVHlwZSA9IFNpbmdsZUZpZWxkVmFsdWVUeXBlIHwgTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHJcbi8qKiBPYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIGFyZSBmaWVsZCBuYW1lcyBhbmQgdmFsdWVzIGFyZSBmaWVsZCB2YWx1ZXMuICovXHJcbmV4cG9ydCB0eXBlIEZpZWxkQmFnID0geyBbUDpzdHJpbmddOiBGaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBhbiBhY3R1YWwgVVJMIGFnYWluc3RcclxuICogdGhlIFVSTCBwYXR0ZXJuLiBUaGUgcmVzdWx0IGNvbnRhaW5zIHZhbHVlcyBvZiBuYW1lZCBhbmQgaW5kZXhlZCBmaWVsZHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbWF0Y2ggd2FzIHN1Y2Nlc3N1bCAqL1xyXG5cdHN1Y2Nlc3M6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBQYXJzZWQgYWN0dWFsIFVSTCAqL1xyXG5cdHBhcnNlZFVSTDogSVBhcnNlZEFjdHVhbFVSTDtcclxuXHJcblx0LyoqIEVycm9yIG1lc3NhZ2VzIGluIGNhc2UgdGhlIG1hdGNoIHdhcyBub3Qgc3VjY2Vzc2Z1bCAqL1xyXG5cdGVycm9ycz86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogRmllbGQgbmFtZXMgYW5kIHZhbHVlcyAqL1xyXG5cdGZpZWxkcz86IEZpZWxkQmFnO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFjdHVhbCBmcm9tIFwiLi9hY3R1YWxcIjtcclxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCIuL3BhcnNlclwiO1xyXG5pbXBvcnQgKiBhcyBtYXRjaGVyIGZyb20gXCIuL21hdGNoZXJcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMIFxyXG4gKiBAcGFyYW0gcyBVUkwgc3RyaW5nIHRvIGJlIHBhcnNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVSTCggczogc3RyaW5nKTogSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0cmV0dXJuIGFjdHVhbC5wYXJzZVVSTCggcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgdGhlIGdpdmVuIFVSTCBwYXR0ZXJuXHJcbiAqIEBwYXJhbSBzIFVSTCBwYXR0ZXJuIHN0cmluZyB0byBiZSBwYXJzZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmxQYXR0ZXJuKCBzOiBzdHJpbmcpOiBJUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0cmV0dXJuIHBhcnNlci5wYXJzZVBhdHRlcm4oIHMpO1xyXG59XHJcblxyXG4vKipcclxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gVVJMIGFnYWluc3QgVVJMIHBhdHRlcm4gc3RyaW5nLlxyXG4gKiBAcGFyYW0gdXJsIEVpdGhlciB1bnBhcnNlZCBVUkwgc3RyaW5nIG9yIFtbSVBhcnNlZEFjdHVhbFVSTF1dIG9iamVjdFxyXG4gKiBAcGFyYW0gcGF0dGVybiBFaXRoZXIgdW5wYXJzZWQgVVJMIHBhdHRlcm4gc3RyaW5nIG9yIFtbSVBhcnNlZFVybFBhdHRlcm5dXSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCggdXJsOiBzdHJpbmcgfCBJUGFyc2VkQWN0dWFsVVJMLCBwYXR0ZXJuOiBzdHJpbmcgfCBJUGFyc2VkVXJsUGF0dGVybik6IElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdHJldHVybiBtYXRjaGVyLm1hdGNoKCB1cmwsIHBhdHRlcm4pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBVUkwgcGF0dGVybiBzdHJpbmcuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCggdXJsOiBzdHJpbmcgfCBhcGkuSVBhcnNlZEFjdHVhbFVSTCwgcGF0dGVybjogc3RyaW5nIHwgYXBpLklQYXJzZWRVcmxQYXR0ZXJuKTogYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdGlmICghdXJsKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlVSTCBjYW5ub3QgYmUgbnVsbCBvciBlbXB0eSBzdHJpbmdcIik7XHJcblx0aWYgKCFwYXR0ZXJuKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlBhdHRlcm4gY2Fubm90IGJlIG51bGwgb3IgZW1wdHkgc3RyaW5nXCIpO1xyXG5cclxuXHRpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggYXBpLnBhcnNlVVJMKCB1cmwpLCBhcGkucGFyc2VVcmxQYXR0ZXJuKCBwYXR0ZXJuKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggYXBpLnBhcnNlVVJMKCB1cmwpLCBwYXR0ZXJuKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCB1cmwsIGFwaS5wYXJzZVVybFBhdHRlcm4oIHBhdHRlcm4pKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCB1cmwsIHBhdHRlcm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBhbHJlYWR5IHBhcnNlZCBVUkwgcGF0dGVybi5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFyc2VkKCBwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMLCBwYXJzZWRQYXR0ZXJuOiBhcGkuSVBhcnNlZFVybFBhdHRlcm4pOiBhcGkuSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0aWYgKCFwYXJzZWRVUkwpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiVVJMIGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cdGlmICghcGFyc2VkUGF0dGVybilcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJwYXJzZWRQYXR0ZXJuIGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cclxuXHQvLyBwcmVwYXJlIG9iamVjdCBmb3IgbWF0Y2ggcmVzdWx0XHJcblx0bGV0IG1hdGNoUmVzdWx0ID0gbmV3IFVybFBhdHRlcm5NYXRjaFJlc3VsdCgpO1xyXG5cdG1hdGNoUmVzdWx0LnBhcnNlZFVSTCA9IHBhcnNlZFVSTDtcclxuXHRtYXRjaFJlc3VsdC5maWVsZHMgPSB7fTtcclxuXHRsZXQgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHQvLyBjb21wYXJlIHBhcnQgYnkgcGFydFxyXG5cdFx0bGV0IGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuUHJvdG9jb2wsIHBhcnNlZFVSTC5wcm90b2NvbCxcclxuXHRcdFx0IFx0XHRcdHBhcnNlZFBhdHRlcm4ucHJvdG9jb2wgPyBwYXJzZWRQYXR0ZXJuLnByb3RvY29sLnNlZ21lbnQgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhcGkuRVVybFBhcnQuSG9zdG5hbWUsIHBhcnNlZFVSTC5ob3N0bmFtZSxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5ob3N0bmFtZSA/IHBhcnNlZFBhdHRlcm4uaG9zdG5hbWUuc2VnbWVudHMgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuUG9ydCwgcGFyc2VkVVJMLnBvcnQsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4ucG9ydCA/IHBhcnNlZFBhdHRlcm4ucG9ydC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoTXVsdGlwbGVTZWdtZW50cyggYXBpLkVVcmxQYXJ0LlBhdGgsIHBhcnNlZFVSTC5wYXRoLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLnBhdGggPyBwYXJzZWRQYXR0ZXJuLnBhdGguc2VnbWVudHMgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hRdWVyeVN0cmluZyggcGFyc2VkVVJMLnF1ZXJ5LCBwYXJzZWRQYXR0ZXJuLnF1ZXJ5LCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuSGFzaCwgcGFyc2VkVVJMLmhhc2gsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4uaGFzaCA/IHBhcnNlZFBhdHRlcm4uaGFzaC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRlcnJvcnMucHVzaCggZXJyLm1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBlcnJvcnMsIHB1dCB0aGVtIGludG8gdGhlIHJlc3VsdCBvYmplY3RcclxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApXHJcblx0XHRtYXRjaFJlc3VsdC5lcnJvcnMgPSBlcnJvcnM7XHJcblxyXG5cdHJldHVybiBtYXRjaFJlc3VsdDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBzdHJpbmcgYWdhaW5zdCB0aGUgZ2l2ZW4gY29tcGlsZWQgc2VnbWVudC4gRmllbGRzIHdpbGwgYmUgYWRkZWRcclxuLy8gdG8gdGhlIGdpdmVuIHJlc3VsdCBvYmplY3QuXHJcbmZ1bmN0aW9uIG1hdGNoU2luZ2xlU2VnbWVudCggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBhY3R1YWxTZWdtZW50OiBzdHJpbmcsIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCxcclxuXHRcdFx0XHQgZmllbGRzOiBhcGkuRmllbGRCYWcpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHQvLyBpZiBjb21waWxlZCBzZWdtZW50IGlzIE5PVCBwcm92aWRlZCwgdGhlbiBhY3R1YWwgc2VnbWVudCBtdXN0IGJlIGVtcHR5XHJcblx0aWYgKCFwYXJzZWRTZWdtZW50KVxyXG5cdHtcclxuXHRcdGlmIChhY3R1YWxTZWdtZW50KVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGNvbnRhaW5zIHNlZ21lbnQgJyR7YWN0dWFsU2VnbWVudH0nIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgcGF0dGVybmA7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgYWN0dWFsIHNlZ21lbnQgaXMgZW1wdHkgYW5kIGNvbXBpbGVkIHNlZ21lbnQgaXMgbWFuZGF0b3J5LCB0aGVyZSBpcyBubyBtYXRjaDsgaWYgc3RyaW5nXHJcblx0Ly8gaXMgZW1wdHkgYW5kIGNvbXBpbGVkIHNlZ21lbnQgaXMgb3B0aW9uYWwsIHRoZXJlIGlzIG1hdGNoO1xyXG5cdGlmICghYWN0dWFsU2VnbWVudClcclxuXHR7XHJcblx0XHRpZiAocGFyc2VkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGBVUkwgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBkb2Vzbid0IGhhdmUgYSBzZWdtZW50IGNvcnJlc3BvbmRpbmcgYCArXHJcblx0XHRcdFx0XHRgdG8gYSBtYW5kYXRvcnkgcGF0dGVybiBzZWdtZW50ICcke3BhcnNlZFNlZ21lbnQudG9rZW5TdGluZ30nYDtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQsIHBhcnNlZFNlZ21lbnQsIGZpZWxkcylcclxuXHRcdD8gbnVsbFxyXG5cdFx0OiBgVVJMIHNlZ21lbnQgJyR7YWN0dWFsU2VnbWVudH0nIGluIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgZG9lc24ndCBtYXRjaCBgICtcclxuXHRcdFx0YHBhdHRlcm4gc2VnbWVudCAnJHtwYXJzZWRTZWdtZW50LnRva2VuU3Rpbmd9J2A7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHJpZXMgdG8gbWF0Y2ggYWN0dWFsIHNlZ21lbnQgdG8gdGhlIGNvbXBpbGVkIHNlZ21lbnQuIElmIHRoZXJlIGlzIGEgbWFjdGgsIHJldHVybnMgYSBub24tbnVsbFxyXG4vLyBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMgKGlmIG5vIGZpZWxkcyBmb3VuZCwgcmV0dXJucyBhbiBlbXB0eSBvYmplY3QpLiBJZiB0aGVyZSBpcyBubyBtYXRjaFxyXG4vLyByZXR1cm5zIG51bGwuXHJcbmZ1bmN0aW9uIHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudDogc3RyaW5nLCBwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQsXHJcblx0ZmllbGRzOiBhcGkuRmllbGRCYWcpOiBib29sZWFuXHJcbntcclxuXHQvLyBwZXJmb3JtIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaCAtIG5vdGUgdGhhdCB0aGUgbWF0Y2hpbmcgcGFydCAoaW5kZXggMCBvZiB0aGUgcmVzdWx0KSBzaG91bGRcclxuXHQvLyBtYXRjaCBvdXIgc3RyaW5nIGV4YWN0bHkgc28gdGhhdCBubyBleHRyYSBjaGFyYWN0ZXJzIGFyZSBmb3VuZCBiZWZvcmUgb3IgYWZ0ZXIgdGhlIG1hdGNoLlxyXG5cdGxldCBleGVjUmVzdWx0ID0gcGFyc2VkU2VnbWVudC5yZWdFeHAuZXhlYyggYWN0dWFsU2VnbWVudCk7XHJcblx0aWYgKCFleGVjUmVzdWx0IHx8IGV4ZWNSZXN1bHRbMF0gIT09IGFjdHVhbFNlZ21lbnQpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdC8vIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBhbnkgZmllbGRzXHJcblx0Zm9yKCBsZXQgcGFyc2VkRmllbGQgb2YgcGFyc2VkU2VnbWVudC5maWVsZHMpXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciByZWd1bGFyIGV4cHJlc3Npb24gcmVzdWx0IGhhcyB0aGlzIGluZGV4IGFuZCBnZXQgdGhlIHZhbHVlXHJcblx0XHRpZiAocGFyc2VkRmllbGQuaW5kZXggPj0gZXhlY1Jlc3VsdC5sZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoYEJVRzogRmllbGQgaW5kZXggbm90IGZvdW5kIGluIHBhdHRlcidzIHJlZ3VsYXIgZXhwcmVzc2lvbiBleGVjdXRpb24gcmVzdWx0YCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdmFsdWUgPSBjb252ZXJ0RmllbGRWYWx1ZSggcGFyc2VkRmllbGQsIGV4ZWNSZXN1bHRbcGFyc2VkRmllbGQuaW5kZXhdKTtcclxuXHRcdGlmICghcGFyc2VkRmllbGQuaXNBcnJheSlcclxuXHRcdFx0ZmllbGRzW3BhcnNlZEZpZWxkLm5hbWVdID0gdmFsdWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBhcnIgPSBmaWVsZHNbcGFyc2VkRmllbGQubmFtZV0gYXMgYXBpLk11bHRpRmllbGRWYWx1ZVR5cGU7XHJcblx0XHRcdGlmIChhcnIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFyciA9IFtdO1xyXG5cdFx0XHRcdGZpZWxkc1twYXJzZWRGaWVsZC5uYW1lXSA9IGFycjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXJyLnB1c2goIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIHN0cmluZyBhcnJheSBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBzZWdtZW50IGFycmF5LiBGaWVsZHMgd2lsbCBiZSBhZGRlZFxyXG4vLyB0byB0aGUgZ2l2ZW4gcmVzdWx0IG9iamVjdC5cclxuZnVuY3Rpb24gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGFjdHVhbFNlZ21lbnRzOiBzdHJpbmdbXSwgcGFyc2VkU2VnbWVudHM6IGFwaS5JUGFyc2VkU2VnbWVudFtdLFxyXG5cdGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0aWYgKCFhY3R1YWxTZWdtZW50cyAmJiAhcGFyc2VkU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghYWN0dWFsU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IGhhdmUgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyB0aGF0IGV4aXN0cyBpbiB0aGUgcGF0dGVybmA7XHJcblx0ZWxzZSBpZiAoIXBhcnNlZFNlZ21lbnRzKVxyXG5cdFx0cmV0dXJuIGBVUkwgaGFzIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBwYXR0ZXJuYDtcclxuXHJcblx0Ly8gRm9yIGVhY2ggcGFyc2VkIHNlZ21lbnQgd2UgY3JlYXRlIGEgY29tcGlsZWQgc2VnbWVudCBleGNlcHQgaW4gb25lIGNhc2U6IGZvciBcIm9uZSBvciBtb3JlXCJcclxuXHQvLyBwYXJzZWQgc2VnbWVudHMgd2UgY3JlYXRlIHR3byBjb21waWxlZCBzZWdtZW50IC0gb25lIHNpbmdsZSBtYW5kYXRvcnkgYW5kIG9uZSBtdWx0aSBhbmRcclxuXHQvLyBvcHRpb25hbC5cclxuXHRsZXQgY29tcGlsZWRTZWdtZW50czogQ29tcGlsZWRTZWdtZW50W10gPSBbXTtcclxuXHRmb3IoIGxldCBwYXJzZWRTZWdtZW50IG9mIHBhcnNlZFNlZ21lbnRzKVxyXG5cdHtcclxuXHRcdGlmIChwYXJzZWRTZWdtZW50LmlzTXVsdGkgJiYgIXBhcnNlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdHtcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCBmYWxzZSkpO1xyXG5cdFx0XHRjb21waWxlZFNlZ21lbnRzLnB1c2goIG5ldyBDb21waWxlZFNlZ21lbnQoIHBhcnNlZFNlZ21lbnQsIHRydWUpKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCBwYXJzZWRTZWdtZW50LmlzT3B0aW9uYWwpKTtcclxuXHR9XHJcblxyXG5cdC8vIGNhbGwgcmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXR1cm4gdGhlIG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcyBpZiB0aGVyZSBpcyBhIG1hdGNoXHJcblx0Ly8gb3IgbnVsbCBpZiB0aGVyZSBpcyBub3QuXHJcblx0aWYgKHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cyggYWN0dWFsU2VnbWVudHMsIDAsIGNvbXBpbGVkU2VnbWVudHMsIDAsIGZpZWxkcykpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGRvZXNuJ3QgbWF0Y2ggdGhlIHBhdHRlcm5gO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRyaWVzIHRvIG1hdGNoIGFjdHVhbCBzZWdtZW50cyB0byB0aGUgcGF0dGVybiBzdGFydGluZyBmcm9tIHRoZSBnaXZlbiBpbmRleCBpbiBlYWNoIGFycmF5LiBJZlxyXG4vLyB0aGVyZSBpcyBhIG1hY3RoLCByZXR1cm5zIGEgbm9uLW51bGwgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzIChpZiBubyBmaWVsZHMgZm91bmQsIHJldHVybnMgYW5cclxuLy8gZW1wdHkgb2JqZWN0KS4gSWYgdGhlcmUgaXMgbm8gbWF0Y2ggcmV0dXJucyBudWxsLlxyXG5mdW5jdGlvbiB0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzOiBzdHJpbmdbXSwgYWN0dWFsU3RhcnRJbmRleDogbnVtYmVyLFxyXG5cdFx0XHRcdGNvbXBpbGVkU2VnbWVudHM6IENvbXBpbGVkU2VnbWVudFtdLCBjb21waWxlZFN0YXJ0SW5kZXg6IG51bWJlcixcclxuXHRcdFx0XHRmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGxvb3Agb3ZlciBjb21waWxlZCBzZWdtZW50cy4gSWYgdGhlIHNlZ21lbnQgaXMgbWFuZGF0b3J5LCB3ZSBjb21wYXJlIGl0IHRvIHRoZSBhY3R1YWxcclxuXHQvLyBzZWdtZW50IGFuZCBpZiB0aGVyZSBpcyBubyBtYXRjaCwgdGhlIG1hdGNoaW5nIGZhaWxzLiBJZiB0aGUgc2VnbWVudCBpcyBvcHRpb25hbCwgd2UgY2FsbFxyXG5cdC8vIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZlbHkgc3RhcnRpbmcgZnJvbSB0aGUgbmV4dCBjb21waWxlZCBzZWdtZW50LiBJZiB0aGlzIGNhbGwgcmV0dXJuc1xyXG5cdC8vIG51bGwgKG5vIG1hdGNoKSwgdGhlbiB3ZSBtYXAgdGhlIGFjdHVhbCBzZWdtZW50IHRvIHRoZSBjb21waWxlZCBzZWdtZW50IGFuZCBhZHZhbmNlIHRoZVxyXG5cdC8vIGluZGljZXMuXHJcblx0bGV0IGFjdHVhbEN1cnJJbmRleCA9IGFjdHVhbFN0YXJ0SW5kZXg7XHJcblx0bGV0IGNvbXBpbGVkQ3VyckluZGV4ID0gY29tcGlsZWRTdGFydEluZGV4O1xyXG5cdHdoaWxlKCBjb21waWxlZEN1cnJJbmRleCA8IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoICYmIGFjdHVhbEN1cnJJbmRleCA8IGFjdHVhbFNlZ21lbnRzLmxlbmd0aClcclxuXHR7XHJcblx0XHRsZXQgY29tcGlsZWRTZWdtZW50ID0gY29tcGlsZWRTZWdtZW50c1tjb21waWxlZEN1cnJJbmRleF07XHJcblx0XHRsZXQgYWN0dWFsU2VnbWVudCA9IGFjdHVhbFNlZ21lbnRzW2FjdHVhbEN1cnJJbmRleF07XHJcblx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb21wYXJlIG1hbmRhdG9yeSBzZWdtZW50IHdpdGggdGhlIGFjdHVhbCBvbmVcclxuXHRcdFx0aWYgKHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQsIGZpZWxkcykpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb21waWxlZEN1cnJJbmRleCsrO1xyXG5cdFx0XHRcdGFjdHVhbEN1cnJJbmRleCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBwYXNzaW5nIHRoZSBuZXh0IGNvbXBpbGVkIHNlZ21lbnQgaW5kZXhcclxuXHRcdFx0bGV0IHRlbXBGaWVsZHM6IGFwaS5GaWVsZEJhZyA9IHt9XHJcblx0XHRcdGlmICh0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzLCBhY3R1YWxDdXJySW5kZXgsXHJcblx0XHRcdFx0Y29tcGlsZWRTZWdtZW50cywgY29tcGlsZWRDdXJySW5kZXggKyAxLCB0ZW1wRmllbGRzKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoZXJlIGlzIGEgbWF0Y2hcclxuXHRcdFx0XHRtZXJnZUZpZWxkcyggZmllbGRzLCB0ZW1wRmllbGRzKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjb21wYXJlIHRoaXMgc2VnbWVudCB3aXRoIHRoZSBhY3R1YWwgb25lXHJcblx0XHRcdFx0aWYgKHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQsIHRlbXBGaWVsZHMpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNvcHkgZmllbGQgdmFsdWVzIGFuZCBhZHZhbmNlIHRoZSBhY3R1YWwgaW5kZXhcclxuXHRcdFx0XHRcdG1lcmdlRmllbGRzKCBmaWVsZHMsIHRlbXBGaWVsZHMpO1xyXG5cdFx0XHRcdFx0YWN0dWFsQ3VyckluZGV4Kys7XHJcblxyXG5cdFx0XHRcdFx0Ly8gYWR2YW5jZSB0aGUgY29tcGlsZWQgaW5kZXggb25seSBpZiB0aGlzIGZpZWxkIGlzIGEgc2luZ3VsYXIgb25lXHJcblx0XHRcdFx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5wYXJzZWRTZWdtZW50LmlzTXVsdGkpXHJcblx0XHRcdFx0XHRcdGNvbXBpbGVkQ3VyckluZGV4Kys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gd2UgYXJlIGhlcmUgaWYgZWl0aGVyIGNvbXBpbGUgc2VnbWVudHMgb3IgYWN0dWFsIHNlZ21lbnRzIG9yIGJvdGggYXJlIGV4aG9zdGVkLiBJZiBib3RoXHJcblx0Ly8gYXJlIGV4aG9zdGVkLCB0aGVyZSBpcyBhIG1hdGNoLiBJZiBjb21waWxlZCBhcmUgZXhob3N0ZWQgYnV0IGFjdHVhbCBhcmUgbm90LCB0aGVyZSBpcyBub1xyXG5cdC8vIG1hdGNoLiBJZiBhY3R1YWwgYXJlIGV4aG9zdGVkIGJ1dCBjb21waWxlZCBhcmUgbm90LCB0aGVyZSBpcyBtYXRjaCBvbmx5IGlmIGFsbCB0aGVcclxuXHQvLyByZW1haW5pbmcgY29tcGlsZWQgc2VnbWVudHMgYXJlIG9wdGlvbmFsLlxyXG5cdGlmIChjb21waWxlZEN1cnJJbmRleCA9PT0gY29tcGlsZWRTZWdtZW50cy5sZW5ndGggJiYgYWN0dWFsQ3VyckluZGV4ID09PSBhY3R1YWxTZWdtZW50cy5sZW5ndGgpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChjb21waWxlZEN1cnJJbmRleCA9PT0gY29tcGlsZWRTZWdtZW50cy5sZW5ndGgpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSBjb21waWxlZEN1cnJJbmRleDsgaSA8IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb21waWxlZFNlZ21lbnQgPSBjb21waWxlZFNlZ21lbnRzW2ldO1xyXG5cdFx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gc3RyaW5nIG9iamVjdCBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBxdWVyeSBzdHJpbmcuIEZpZWxkcyB3aWxsIGJlIGFkZGVkXHJcbi8vIHRvIHRoZSBnaXZlbiByZXN1bHQgb2JqZWN0LlxyXG5mdW5jdGlvbiBtYXRjaFF1ZXJ5U3RyaW5nKCBhY3R1YWxRdWVyeTogeyBbUDogc3RyaW5nXTogc3RyaW5nW10gfSwgcGFyc2VkUXVlcnk6IGFwaS5JUGFyc2VkUXVlcnlTdHJpbmcsXHJcblx0XHRcdFx0IGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0aWYgKCFwYXJzZWRRdWVyeSlcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKCFhY3R1YWxRdWVyeSlcclxuXHR7XHJcblx0XHRpZiAoT2JqZWN0LmtleXMoIHBhcnNlZFF1ZXJ5LnBhcnNlZFFTUHMpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBgVVJMIGRvZXNuJ3QgaGF2ZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdH1cclxuXHJcblx0Ly8gZ28gb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlci4gSWYgdGhlcmUgaXMgYW55IG5vbi1vcHRpb25hbFxyXG5cdC8vIHBhcmFtZXRlciB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFjdHVhbCBVUkwsIHdlIGZhaWwgdGhlIG1hdGNoLlxyXG5cdGZvciggbGV0IHFzcE5hbWUgaW4gcGFyc2VkUXVlcnkucGFyc2VkUVNQcylcclxuXHR7XHJcblx0XHRpZiAoYWN0dWFsUXVlcnlbcXNwTmFtZV0gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIGBVUkwgZG9lc24ndCBoYXZlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nYDtcclxuXHR9XHJcblxyXG5cdC8vIGdvIG92ZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgaW4gdGhlIGFjdHVhbCBVUkxcclxuXHRmb3IoIGxldCBxc3BOYW1lIGluIGFjdHVhbFF1ZXJ5KVxyXG5cdHtcclxuXHRcdC8vIGZpbmQgdGhpcyBuYW1lIGluIHRoZSBwYXR0ZXJuLiBJZiB0aGUgcGF0dGVybiBkb2Vzbid0IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIgYW5kIHRoZVxyXG5cdFx0Ly8gcGF0dGVybiBkb2Vzbid0IGFsbG93IGZvciBleHRyYSBwYXJhbWV0ZXJzLCB0aGVuIHRoZXJlIGlzIG5vIG1hdGNoLiBPdGhlcndpc2UsIHRoaXNcclxuXHRcdC8vIHBhcmFtZXRlciBpcyBzaW1wbHkgaWdub3JlZC5cclxuXHRcdGxldCBwYXJzZWRTZWdtZW50ID0gcGFyc2VkUXVlcnkucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50O1xyXG5cdFx0aWYgKCFwYXJzZWRTZWdtZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXBhcnNlZFF1ZXJ5LmFsbG93RXh0cmFRdWVyeVBhcmFtcylcclxuXHRcdFx0XHRyZXR1cm4gYFVSTCBoYXMgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfScgdGhhdCBpcyBub3Qgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZm9yIHNpbmd1bGFyIHNlZ21lbnQgdGhlIHBhcmFtZXRlciBtdXN0IGJlIHByZXNlbnQgb25seSBvbmNlXHJcblx0XHRcdGxldCBxc3BWYWx1ZXMgPSBhY3R1YWxRdWVyeVtxc3BOYW1lXTtcclxuXHRcdFx0aWYgKCFwYXJzZWRTZWdtZW50LmlzTXVsdGkgJiYgcXNwVmFsdWVzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0cmV0dXJuIGBVUkwgaGFzIG11bHRpcGxlIHZhbHVlcyBmb3IgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfScgd2hpbGUgcGF0dGVybiBkb2Vzbid0IHNwZWNpZnkgaXQgYXMgbXVsdGlgO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgcXNwVmFsdWUgb2YgcXNwVmFsdWVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCF0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIHFzcFZhbHVlLCBwYXJzZWRTZWdtZW50LCBmaWVsZHMpKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGBVUkwncyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyBkb2Vzbid0IG1hdGNoIHRoYXQgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWVyZ2VzIGZpZWxkIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0IHRvIHRoZSB0YXJnZXQgb25lLlxyXG5mdW5jdGlvbiBtZXJnZUZpZWxkcyggdGFyZ2V0OiB7IFtQOiBzdHJpbmddOiBhcGkuRmllbGRWYWx1ZVR5cGUgfSwgc291cmNlOiB7IFtQOiBzdHJpbmddOiBhcGkuRmllbGRWYWx1ZVR5cGUgfSk6IHZvaWRcclxue1xyXG5cdGZvciggbGV0IGZpZWxkTmFtZSBpbiBzb3VyY2UpXHJcblx0e1xyXG5cdFx0bGV0IHNvdXJjZVZhbCA9IHNvdXJjZVtmaWVsZE5hbWVdO1xyXG5cdFx0bGV0IHRhcmdldFZhbCA9IHRhcmdldFtmaWVsZE5hbWVdO1xyXG5cdFx0aWYgKHRhcmdldFZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0YXJnZXRbZmllbGROYW1lXSA9IHNvdXJjZVZhbDtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gYm90aCBzb3VyY2UgYW5kIHRhcmdldCB2YWx1ZXMgbXVzdCBiZSBhcnJheXNcclxuXHRcdFx0bGV0IHNvdXJjZUFyciA9IHNvdXJjZVZhbCBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0bGV0IHRhcmdldEFyciA9IHRhcmdldFZhbCBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0Zm9yKCBsZXQgc291cmNlSXRlbSBvZiBzb3VyY2VBcnIpXHJcblx0XHRcdFx0dGFyZ2V0QXJyLnB1c2goIHNvdXJjZUl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIGZpZWxkIHZhbHVlIGNvbnZlcnRlZCB0byB0aGUgcmVxdWlyZWQgZm9ybWF0XHJcbmZ1bmN0aW9uIGNvbnZlcnRGaWVsZFZhbHVlKCBwYXJzZWRGaWVsZDogYXBpLklQYXJzZWRGaWVsZCwgc3RyaW5nVmFsdWU6IHN0cmluZyk6IGFwaS5TaW5nbGVGaWVsZFZhbHVlVHlwZVxyXG57XHJcblx0aWYgKCFzdHJpbmdWYWx1ZSlcclxuXHRcdHJldHVybiBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgYXBpLlNpbmdsZUZpZWxkVmFsdWVUeXBlO1xyXG5cclxuXHRzd2l0Y2goIHBhcnNlZEZpZWxkLmZvcm1hdClcclxuXHR7XHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5JbnRlZ2VyOlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IE51bWJlciggc3RyaW5nVmFsdWUpO1xyXG5cdFx0XHRyZXR1cm4gaXNOYU4odikgfHwgIU51bWJlci5pc0ludGVnZXIodikgPyBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyIDogdjtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5GbG9hdDpcclxuXHRcdHtcclxuXHRcdFx0bGV0IHYgPSBOdW1iZXIoIHN0cmluZ1ZhbHVlKTtcclxuXHRcdFx0cmV0dXJuIGlzTmFOKHYpID8gcGFyc2VkRmllbGQuZGVmYXVsdFZhbHVlIGFzIG51bWJlciA6IHY7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuQm9vbGVhbjpcclxuXHRcdHtcclxuXHRcdFx0bGV0IHYgPSBzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAodiA9PT0gXCJ0cnVlXCIgfHwgdiA9PT0gXCJ0XCIgfHwgdiA9PT0gXCJ5ZXNcIiB8fCB2ID09PSBcInlcIiB8fCB2ID09PSBcIjFcIilcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAodiA9PT0gXCJmYWxzZVwiIHx8IHYgPT09IFwiZlwiIHx8IHYgPT09IFwibm9cIiB8fCB2ID09PSBcIm5cIiB8fCB2ID09PSBcIjBcIilcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VkRmllbGQuZGVmYXVsdFZhbHVlIGFzIGJvb2xlYW47XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0cmluZ1ZhbHVlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBpbGVkU2VnbWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IHNob3VsZCBiZSBjb21wYXJlZCB0byBhXHJcbi8vIHNlZ21lbnQgZnJvbSB0aGUgYWN0dWFsIFVSTCBwYXJ0LiBDb21waWxlZCBzZWdtZW50IGNvbnRhaW5zIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gYW5kIGEgZmxhZ1xyXG4vLyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBzZWdtZW50IGlzIG9wdGlvbmFsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgQ29tcGlsZWRTZWdtZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHBhcnNlZCBzZWdtZW50IG9iamVjdC5cclxuXHRwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgc2VnbWVudCBpcyBvcHRpb25hbC4gRm9yIGVhY2ggXCJvbmUtb3ItbW9yZVwiIHBhcnNlZCBzZWdlbWVudHNcclxuXHQvLyB3ZSBjcmVhdGUgdHdvIGNvbXBpbGVkIHNlZ21lbnRzOiB0aGUgZmlyc3QgaXMgbWFuZGF0b3J5IGFuZCB0aGUgc2Vjb25kIGlzIG9wdGlvbmFsLiBUaGF0J3NcclxuXHQvLyB3aHkgd2UgaGF2ZSB0aGllIGlzT3B0aW9uYWwgZmxhZyBoZXJlLlxyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQsIGlzT3B0aW9uYWw6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0dGhpcy5wYXJzZWRTZWdtZW50ID0gcGFyc2VkU2VnbWVudDtcclxuXHRcdHRoaXMuaXNPcHRpb25hbCA9IGlzT3B0aW9uYWw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVXJsUGF0dGVybk1hdGNoUmVzdWx0IGNsYXNzIGRlc2NyaWJlcyB0aGUgcmVzdWx0IG9mIG1hdGNoaW5nIGEgVVJMIHRvIGEgcGF0dGVybi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFVybFBhdHRlcm5NYXRjaFJlc3VsdCBpbXBsZW1lbnRzIGFwaS5JVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG1hdGNoIHdhcyBzdWNjZXNzdWwgKi9cclxuXHRwdWJsaWMgZ2V0IHN1Y2Nlc3MoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5lcnJvcnMgfHwgdGhpcy5lcnJvcnMubGVuZ3RoID09PSAwOyB9XHJcblxyXG5cdC8qKiBQYXJzZWQgYWN0dWFsIFVSTCAqL1xyXG5cdHBhcnNlZFVSTDogYXBpLklQYXJzZWRBY3R1YWxVUkw7XHJcblxyXG5cdC8qKiBFcnJvciBvYmplY3QgaW4gY2FzZSB0aGUgbWF0Y2ggd2FzIG5vdCBzdWNjZXNzZnVsICovXHJcblx0cHVibGljIGVycm9yczogc3RyaW5nW107XHJcblxyXG5cdC8qKiBGaWVsZCBuYW1lcyBhbmQgdmFsdWVzICovXHJcblx0cHVibGljIGZpZWxkczogYXBpLkZpZWxkQmFnO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbXVybFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpXCI7XHJcbiIsImltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGFyc2VyJ3MgZW50cnkgZnVuY3Rpb24uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXR0ZXJuKCBwYXR0ZXJuU3RyaW5nOiBzdHJpbmcpOiBhcGkuSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdC8vIGluaXRpYWxpemUgZ2xvYmFsIHZhcmlhYmxlc1xyXG5cdGdfcGF0dGVyblN0cmluZyA9IHBhdHRlcm5TdHJpbmc7XHJcblx0Z19wYXR0ZXJuU3RyaW5nTGVuZ3RoID0gMDtcclxuXHRnX2N1cnJJbmRleCA9IDA7XHJcblx0Z19jdXJyQ2hhciA9ICcnO1xyXG5cclxuXHRpZiAoIXBhdHRlcm5TdHJpbmcpXHJcblx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIFwiVVJMIHBhdHRlcm4gY2Fubm90IGJlIGVtcHR5XCIpO1xyXG5cclxuXHRnX3BhdHRlcm5TdHJpbmdMZW5ndGggPSBwYXR0ZXJuU3RyaW5nLmxlbmd0aDtcclxuXHRnX2N1cnJDaGFyID0gcGF0dGVyblN0cmluZ1swXTtcclxuXHJcblx0Ly8gQ3JlYXRlIHRoZSB0b3AtbGV2ZWwgcGFyc2luZyBvYmplY3QgYW5kIHJ1biB0aGUgcGFyc2luZyBwcm9jZXNzLlxyXG5cdGxldCBwYXJzZWRQYXR0ZXJuID0gbmV3IFBhcnNlZFVybFBhdHRlcm4oKTtcclxuXHRwYXJzZWRQYXR0ZXJuLnBhcnNlKCk7XHJcblx0cmV0dXJuIHBhcnNlZFBhdHRlcm47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluZSBcImdsb2JhbFwiIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIHRvIGFsbCBvYmplY3RzIGluIHRoaXMgbW9kdWxlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gUGF0dGVybiBzdHJpbmcgYmVpbmcgcGFyc2VkXHJcbmxldCBnX3BhdHRlcm5TdHJpbmc6IHN0cmluZztcclxuXHJcbi8vIExlbmd0aCBvZiB0aGUgcGF0dGVybiBzdHJpbmdcclxubGV0IGdfcGF0dGVyblN0cmluZ0xlbmd0aDogbnVtYmVyO1xyXG5cclxuLy8gSW5kZXggb2YgdGhlIGNoYXJhY3RlciBpbiB0aGUgcGF0dGVybiBzdHJpbmcgdGhhdCB0aGUgcGFyc2VyIGlzIGN1cnJlbnRseSB3b3JraW5nIHdpdGguXHJcbmxldCBnX2N1cnJJbmRleDogbnVtYmVyO1xyXG5cclxuLy8gQ2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuIHN0cmluZyB1bmRlciB0aGUgY3VycmVudCBpbmRleC5cclxubGV0IGdfY3VyckNoYXI6IHN0cmluZztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluZSBcImdsb2JhbFwiIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIHRvIGFsbCBvYmplY3RzIGluIHRoaXMgbW9kdWxlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gRGV0ZXJtaW5lcyBpZiB3ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uXHJcbmZ1bmN0aW9uIGdfaXNFbmQoKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIGdfY3VyckluZGV4ID49IGdfcGF0dGVyblN0cmluZ0xlbmd0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUaHJvd3MgZXhjZXB0aW9uIGlmIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi5cclxuZnVuY3Rpb24gZ19jaGVja0VuZCgpOiB2b2lkXHJcbntcclxuXHRpZiAoZ19jdXJySW5kZXggPT09IGdfcGF0dGVyblN0cmluZ0xlbmd0aClcclxuXHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgVVJMIHBhdHRlcm4gZW5kYCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgdGhlIGdpdmVuIG51bWJlciBvZiBjaGFyYWN0ZXJzIGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb24uXHJcbmZ1bmN0aW9uIGdfbW92ZSggZDogbnVtYmVyID0gMSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChnX2N1cnJJbmRleCA8PSBnX3BhdHRlcm5TdHJpbmdMZW5ndGggLSBkKVxyXG5cdHtcclxuXHRcdGdfY3VyckluZGV4ICs9IGQ7XHJcblx0XHRnX2N1cnJDaGFyID0gZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4XTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Z19jdXJySW5kZXggPSBnX3BhdHRlcm5TdHJpbmdMZW5ndGg7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIHRvIHRoZSBnaXZlbiBwb3NpdGlvbiBpbiB0aGUgYnVmZmVyLlxyXG5mdW5jdGlvbiBnX21vdmVUbyggaTogbnVtYmVyKTogYm9vbGVhblxyXG57XHJcblx0Z19jdXJySW5kZXggPSBpO1xyXG5cdGlmIChnX2N1cnJJbmRleCA8IGdfcGF0dGVyblN0cmluZ0xlbmd0aClcclxuXHR7XHJcblx0XHRnX2N1cnJDaGFyID0gZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4XTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBjaGFyYWN0ZXIgaXMgYSBkZWxpbWl0ZXIgdGhhdCBjYW5ub3QgYmUgdXNlZCBhcyB0ZXh0IHdpdGhpbiBVUkxcclxuZnVuY3Rpb24gZ19pc0RlbGltaXRlciggYzogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwiIUAjJCVeJiooKSs9W117fTo7XFxcIic8PiwuPy98XFxcXGB+XCIuaW5kZXhPZihjKSA+PSAwO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVXJsUGF0dGVybiBjbGFzcyBpcyB0aGUgdG9wLWxldmVsIG9iamVjdCBkZXNjcmliaW5nIHRoZSByZXN1bHQgb2YgVVJMIHBhcnNpbmcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRVcmxQYXR0ZXJuIGltcGxlbWVudHMgYXBpLklQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHQvLyBPcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBmb3Igd2hpY2ggdGhpcyBvYmplY3Qgd2FzIGNyZWF0ZWQuXHJcblx0cHVibGljIHBhdHRlcm5TdHJpbmc6IHN0cmluZztcclxuXHJcblx0Ly8gUHJvdG9jb2wgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBwcm90b2NvbCgpOiBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5Qcm90b2NvbF0gYXMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBIb3N0bmFtZSBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IGhvc3RuYW1lKCk6IGFwaS5JUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuSG9zdG5hbWVdIGFzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBQb3J0IFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcG9ydCgpOiBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5Qb3J0XSBhcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIFBhdGggVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBwYXRoKCk6IGFwaS5JUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUGF0aF0gYXMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIFF1ZXJ5IFN0cmluZyBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHF1ZXJ5KCk6IGFwaS5JUGFyc2VkUXVlcnlTdHJpbmdcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlF1ZXJ5XSBhcyBQYXJzZWRRdWVyeVN0cmluZyB9XHJcblxyXG5cdC8vIEhhc2ggVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBoYXNoKCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0Lkhhc2hdIGFzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gQXJyYXkgb2YgVVJMIHBhcnQuIEluZGV4ZXMgYXJlIHZhbHVlcyBmcm9tIHRoZSBVcmxQYXJ0IGVudW1lcmF0aW9uLlxyXG5cdHB1YmxpYyBwYXJ0czogUGFyc2VkVXJsUGFydFtdO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLnBhdHRlcm5TdHJpbmcgPSBnX3BhdHRlcm5TdHJpbmc7XHJcblx0XHR0aGlzLnBhcnRzID0gW107XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcnNlcyB0aGUgZW50aXJlIFVSTCBwYXR0ZXJuIHBhcnQgYnkgcGFydFxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gbG9vcCBvZiBwYXJzaW5nIFVSTCBwYXJ0c1xyXG5cdFx0Zm9yKCBsZXQgcGFydCA9IHRoaXMuZmluZEZpcnN0VXJsUGFydCgpOyBwYXJ0ICE9PSBudWxsOyBwYXJ0ID0gcGFydC5nZXROZXh0VXJsUGFydCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRwYXJ0LnBhcnNlKCk7XHJcblx0XHRcdHRoaXMucGFydHNbcGFydC51cmxQYXJ0XSA9IHBhcnQ7XHJcblx0XHRcdGlmIChnX2lzRW5kKCkpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgdGhlIGZpcnN0IFVSTCBwYXJ0IHRoZSBwYXJzZXIgd2lsbCBiZSB3b3JraW5nIG9uLlxyXG5cdHByaXZhdGUgZmluZEZpcnN0VXJsUGFydCgpOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09IFwiL1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoID4gMSAmJiBnX3BhdHRlcm5TdHJpbmdbMV0gPT09IFwiL1wiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Z19tb3ZlKDIpO1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkSG9zdG5hbWUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFBhdGgoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBnX3BhdHRlcm5TdHJpbmcuaW5kZXhPZiggXCI6Ly9cIik7XHJcblx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQcm90b2NvbCgpO1xyXG5cdFx0XHRlbHNlIGlmIChpbmRleCA8IDApXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIb3N0bmFtZSgpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBcIlVSTCBwYXR0ZXJuIGNhbm5vdCBzdGFydCBmcm9tICc6Ly8nXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFRva2VuIGlzIGEgYmFzZSBjbGFzcyB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gTG9jYXRpb24gb2YgdGhlIHBhcnQgaW4gdGhlIG9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHplcm8tYmFzZWQgaW5kZXggd2hlcmVcclxuXHQvLyB0aGUgcGFydCBiZWdpbnMgYW5kIGl0cyBsZW5ndGguXHJcblx0bG9jYXRpb246IHsgc3RhcnQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIgfTtcclxuXHJcblx0LyoqIENvbnRlbnQgb2YgdGhlIHRva2VuICovXHJcblx0dG9rZW5TdGluZzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5sb2NhdGlvbiA9IHsgc3RhcnQ6IGdfY3VyckluZGV4LCBsZW5ndGg6IDAgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBmaW5hbGl6ZSgpXHJcblx0e1xyXG5cdFx0dGhpcy5sb2NhdGlvbi5sZW5ndGggPSBnX2N1cnJJbmRleCAtIHRoaXMubG9jYXRpb24uc3RhcnQ7XHJcblx0XHR0aGlzLnRva2VuU3RpbmcgPSBnX3BhdHRlcm5TdHJpbmcuc3Vic3RyKCB0aGlzLmxvY2F0aW9uLnN0YXJ0LCB0aGlzLmxvY2F0aW9uLmxlbmd0aCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVXJsUGFydCBpcyBhIGJhc2UgY2xhc3MgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRVcmxQYXJ0IGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8vIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuXHJcblx0dXJsUGFydDogYXBpLkVVcmxQYXJ0O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcGFyaXNvbiBvZiB0aGlzIHBhcnQgc2hvbGQgYmUgY2FzZS1zZW5zaXRpdmUgb3Igbm90LlxyXG5cdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnVybFBhcnQgPSB1cmxQYXJ0O1xyXG5cdFx0dGhpcy5jYXNlU2Vuc2l0aXZlID0gY2FzZVNlbnNpdGl2ZTtcclxuXHR9XHJcblxyXG5cdC8vIFBhcnNlcyB0aGlzIHRva2VuXHJcblx0cHVibGljIGFic3RyYWN0IHBhcnNlKCk6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgYW5kIGNyYXRlcyBpZiBuZWNlc3NhcnkgdGhlIG5leHQgVVJMIHBhcnQgYmFzZWQgb24gdGhlIGN1cnJlbnQgY2hhcmFjdGVyXHJcblx0cHVibGljIGFic3RyYWN0IGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0O1xyXG5cclxuXHQvLyBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0U2VnbWVudHMoKTogUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4vLyBkZWZpbmUgYSBzaW5nbGUgc2VnbWVudDogcHJvdG9jb2wsIHBvcnQgYW5kIGhhc2guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBleHRlbmRzIFBhcnNlZFVybFBhcnQgaW1wbGVtZW50cyBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHNlZ21lbnQ6IFBhcnNlZFNlZ21lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVybFBhcnQsIGNhc2VTZW5zaXRpdmUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgc2VnbWVudCA9IG5ldyBQYXJzZWRTZWdtZW50KCk7XHJcblx0XHRzZWdtZW50LnBhcnNlKCB0aGlzLmdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCksIGZhbHNlLCB0aGlzLmNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5zZWdtZW50ID0gc2VnbWVudDtcclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W10geyByZXR1cm4gW3RoaXMuc2VnbWVudF07IH1cclxuXHJcblx0Ly8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNvbnRhaW5zIGNoYXJhY3Rlciwgd2hpY2ggaW5kaWNhdGUgc2VnbWVudCBlbmQgZm9yIHRoZSBnaXZlbiBVUkwgcGFydC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuLy8gY2FuIGRlZmluZSBtdWx0aXBsZSBzZWdtZW50czogaG9zdG5hbWUgYW5kIHBhdGguXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgUGFyc2VkVXJsUGFydCBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Ly8gVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy5cclxuXHRzZWdtZW50czogUGFyc2VkU2VnbWVudFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB1cmxQYXJ0LCBjYXNlU2Vuc2l0aXZlKTtcclxuXHRcdHRoaXMuc2VnbWVudHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHBhcnRFbmRDaGFyYWN0ZXJzID0gdGhpcy5nZXRQYXJ0RW5kQ2hhcmFjdGVycygpO1xyXG5cclxuXHRcdC8vIHBhcnNlIHNlZ21lbnRzIHVudGlsIHRoZSBjdXJyZW50IGNoYXJhY3RlciBpcyB0aGUgZW5kIG9mIHRoZSBVUkwgcGFydFxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdFx0c2VnbWVudC5wYXJzZSggdGhpcy5nZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpLCB0cnVlLCB0aGlzLmNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0XHR0aGlzLnNlZ21lbnRzLnB1c2goIHNlZ21lbnQpO1xyXG5cdFx0XHRpZiAocGFydEVuZENoYXJhY3RlcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W10geyByZXR1cm4gdGhpcy5zZWdtZW50czsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVyLCB3aGljaCBpbmRpY2F0ZSBzZWdtZW50IGVuZCBmb3IgdGhlIGdpdmVuIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRQYXJ0RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQcm90b2NvbCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcHJvdG9jb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRQcm90b2NvbCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5Qcm90b2NvbCwgZmFsc2UpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCI6XCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09IFwiOlwiICYmIGdfY3VyckluZGV4ICsgMiA8IGdfcGF0dGVyblN0cmluZ0xlbmd0aCAmJlxyXG5cdFx0XHRnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXgrMV0gPT09IFwiL1wiICYmIGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleCsyXSA9PT0gXCIvXCIpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgzKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRsZXQgcGFydCA9IG5ldyBQYXJzZWRIb3N0bmFtZSgpO1xyXG5cdFx0XHRyZXR1cm4gcGFydDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXJzIGFmdGVyIHByb3RvY29sIHBhcnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRIb3N0bmFtZSBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgaG9zdG5hbWUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRIb3N0bmFtZSBleHRlbmRzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0Lkhvc3RuYW1lLCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIi46Lz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIjovPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJzonKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFBvcnQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcvJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQYXRoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUXVlcnlTdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICR7Z19jdXJyQ2hhcn0gYWZ0ZXIgaG9zdG5hbWUgc2VnbWVudGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFBvcnQgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIHBvcnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRQb3J0IGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0LlBvcnQsIGZhbHNlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICcvJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQYXRoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUXVlcnlTdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICR7Z19jdXJyQ2hhcn0gYWZ0ZXIgcG9ydCBwYXJ0YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUGF0aCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFBhdGggZXh0ZW5kcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5QYXRoLCB0cnVlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIj8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgYWZ0ZXIgcGF0aCBzZWdtZW50YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUXVlcnlTdHJpbmcgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRRdWVyeVN0cmluZyBleHRlbmRzIFBhcnNlZFVybFBhcnQgaW1wbGVtZW50cyBhcGkuSVBhcnNlZFF1ZXJ5U3RyaW5nXHJcbntcclxuXHQvLyBRdWVyeSBzdHJpbmcgZGVmaW5lcyBvbmUgc2VnbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS5cclxuXHRwYXJzZWRRU1BzOiB7IFtQOiBzdHJpbmddOiBhcGkuSVBhcnNlZFFTUCB9O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBub3Qgc3BlY2lmaWVkIGV4cGxpY2l0bHkgaW4gdGhlIHBhdHRlcm5cclxuXHQvLyB3aWxsIGJlIGFsbG93ZWQgd2hlbiBwYXJzaW5nIGFjdHVhbCBVUkxzLlxyXG5cdGFsbG93RXh0cmFRdWVyeVBhcmFtczogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBhcGkuRVVybFBhcnQuUXVlcnksIHRydWUpO1xyXG5cclxuXHRcdHRoaXMucGFyc2VkUVNQcyA9IHt9O1xyXG5cdFx0dGhpcy5hbGxvd0V4dHJhUXVlcnlQYXJhbXMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwYXJzZSBzZWdtZW50cyB1bnRpbCB0aGUgY3VycmVudCBjaGFyYWN0ZXIgaXMgdGhlIGVuZCBvZiB0aGUgVVJMIHBhcnRcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIGdfY3VyckNoYXIgIT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdfY3VyckNoYXIgPT09ICchJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHNwZWNpYWwgY2FzZSBmb3IgZGlzYWJsaW5nIG1hdGNoaW5nIHdpdGggZXh0cmEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcclxuXHRcdFx0XHR0aGlzLmFsbG93RXh0cmFRdWVyeVBhcmFtcyA9IGZhbHNlO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBxc3AgPSBuZXcgUGFyc2VkUVNQKCk7XHJcblx0XHRcdFx0cXNwLnBhcnNlKCk7XHJcblx0XHRcdFx0aWYgKHFzcC5uYW1lIGluIHRoaXMucGFyc2VkUVNQcylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJHtxc3AubmFtZX0gYXBwZWFycyBtb3JlIHRoYW4gb25jZWApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VkUVNQc1txc3AubmFtZV0gPSBxc3A7XHJcblxyXG5cdFx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAnJicpXHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciBhZnRlciBxdWVyeSBzdHJpbmcgc2VnbWVudGApO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXVxyXG5cdHtcclxuXHRcdGxldCBzZWdtZW50czogUGFyc2VkU2VnbWVudFtdID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXHJcblx0XHRmb3IoIGxldCBxc3BOYW1lIGluIHRoaXMucGFyc2VkUVNQcylcclxuXHRcdFx0c2VnbWVudHMucHVzaCggdGhpcy5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQgYXMgUGFyc2VkU2VnbWVudCk7XHJcblxyXG5cdFx0cmV0dXJuIHNlZ21lbnRzO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEhhc2ggY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIGhhc2guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRIYXNoIGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0Lkhhc2gsIHRydWUpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRRU1AgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgbWF0Y2hpbmcgYSBzaW5nbGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFFTUCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRRU1Bcclxue1xyXG5cdC8vIFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgbmFtZS5cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFF1ZXJ5IFN0cmluZyBkZWZpbmVzIG9uZSBzZWdtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLlxyXG5cdHNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcGFyYW1ldGVyIG5hbWVcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIFwiPSYjXCIuaW5kZXhPZiggZ19jdXJyQ2hhcikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm5hbWUgKz0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0aWYgKCF0aGlzLm5hbWUpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgZG9lc24ndCBoYXZlIG5hbWVgKTtcclxuXHJcblx0XHRpZiAoZ19jdXJyQ2hhciAhPT0gJz0nKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGRvZXNuJ3QgaGF2ZSB2YWx1ZWApO1xyXG5cclxuXHRcdGdfbW92ZSgpO1xyXG5cdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0c2VnbWVudC5wYXJzZSggXCImI1wiLCB0cnVlLCB0cnVlKTtcclxuXHRcdHRoaXMuc2VnbWVudCA9IHNlZ21lbnQ7XHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGlzTmFtZUVuZENoYXJhY3RlciggYzogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHJldHVybiBcIj0mI1wiLmluZGV4T2YoIGMpID49IDA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkU2VnbWVudCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHNlZ21lbnQgaW4gYSBVUkwgcGF0dGVybiB0aGF0IGNhbiBiZSBtYXRjaGVkIHRvIG9uZVxyXG4vLyBvciBtb3JlIHBhcnRzIG9mIGFuIGFjdHVhbCBVUkwuIEVhY2ggc2VnbWVudCBjYW4gaGF2ZSB6ZXJvIG9yIG1vcmUgZmllbGRzIGRlZmluZWQgaW4gaXQuXHJcbi8vIEEgZmllbGQgaXMgZGVmaW5lZCBlaXRoZXIgd2l0aCBvciB3aXRob3V0IGEgbmFtZS4gVW5uYW1lZCBmaWVsZHMgYXJlIGFsc28gY2FsbGVkXHJcbi8vIGFub255bW91cyBhbmQgdGhleSBhcmUgYXNzb2NpYXRlZCB3aXRoIGFuIGluZGV4LiBXaGVuIHRoZSBVUkwgcGF0dGVybiBpcyBwYXJzZWQgaW50byBzZWdtZW50cyxcclxuLy8gdGhlIGFub255bW91cyBmaWVsZHMgYXJlIG51bWJlcmVkIHNlcXVlbnRpYWxseSBhY2Nyb3NzIG11bHRpcGxlIHNlZ21lbnRzLiBUaGF0IG1lYW5zIHRoYXRcclxuLy8gaW5kZXhlcyBkbyBub3QgcmVzdGFydCBmb3IgZWFjaCBzZWdtZW50IGFuZCB0aHVzIGluZGV4ZXMgZm9yIGEgc2VnbWVudCdzIGZpZWxkcyBtYXkgbm90XHJcbi8vIHN0YXJ0IGZyb20gemVyby5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFNlZ21lbnQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkU2VnbWVudFxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWxcclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBjYW4gYmUgcmVwZWF0ZWQgbXV0aXBsZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgYm90aFxyXG5cdC8vIG9wdGlvbmFsIGFuZCBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgemVybyBvciBtb3JlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBub3Qgb3B0aW9uYWwgYnV0XHJcblx0Ly8gbXVsdGkgY2FuIGJlIHJlcGVhdGVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG5cdGlzTXVsdGk6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBBcnJheSBvZiBmaWVsZHMuICovXHJcblx0ZmllbGRzOiBQYXJzZWRGaWVsZFtdO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzZWdtZW50J3MgbWF0Y2ggcGF0dGVybi5cclxuXHRyZWdFeHA6IFJlZ0V4cDtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzTXVsdGkgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmllbGRzID0gW107XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBwYXJzZSggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcsIGlzUG90ZW50aWFsbHlNdWx0aTogYm9vbGVhbiwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhbmFseXplIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIHNlZ21lbnQgYW5kIGlmIGl0IHdhcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHRoYXRcclxuXHRcdC8vIGRldGVybWluZXMgdGhlIHNlZ21lbnRzIG9wdGlvbmFsIGFuZCBtdWx0aSBmbGFncywgbW92ZSB0byB0aGUgbmV4dCBjaGFyYWN0ZXIuXHJcblx0XHRpZiAodGhpcy5hbmFsaXplRmlyc3RDaGFyKCBzZWdtZW50RW5kQ2hhcnMsIGlzUG90ZW50aWFsbHlNdWx0aSkpXHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cclxuXHRcdC8vIG1hdGNoIHBhdHRlcm4gb2YgdGhlIHNlZ21lbnQgY29uc2lzdGluZyBvZiBlbGVtZW50cyBlYWNoIG9mIHdoaWNoIGlzIGVpdGhlciB0ZXh0IG9yXHJcblx0XHQvLyByZWd1bGFyIGV4cHJlc3Npb24gb3IgZmllbGRcclxuXHRcdGxldCBtYXRjaFBhdHRlcm46IChQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHApW10gPSBbXTtcclxuXHJcblx0XHQvLyBwYXJzZSB0b2tlbnMgaW4gdGhlIHNlZ21lbnQgKHRleHQsIHJlZ2V4cCwgZmllbGRzKSB1bnRpbCBlaXRoZXIgd2UgcmVhY2ggdGhlIGVuZCBvZlxyXG5cdFx0Ly8gdGhlIGVudGlyZSBVUkwgcGF0dGVybiBvciB3ZSBlbmNvdW50ZXIgYSBzZWdtZW50IGRlbGltaXRlclxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHRva2VuOiBQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHA7XHJcblx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAneycpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRsZXQgZmllbGQgPSBuZXcgUGFyc2VkRmllbGQoKTtcclxuXHRcdFx0XHRmaWVsZC5wYXJzZSggc2VnbWVudEVuZENoYXJzKTtcclxuXHRcdFx0XHR0b2tlbiA9IGZpZWxkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcoJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGxldCByZWdFeHAgPSBuZXcgUGFyc2VkUmVnRXhwKCk7XHJcblx0XHRcdFx0cmVnRXhwLnBhcnNlKCk7XHJcblx0XHRcdFx0dG9rZW4gPSByZWdFeHA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHRleHQgPSBuZXcgUGFyc2VkVGV4dCgpO1xyXG5cdFx0XHRcdHRleHQucGFyc2UoIHNlZ21lbnRFbmRDaGFycyArIFwieyhcIik7XHJcblx0XHRcdFx0dG9rZW4gPSB0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRjaFBhdHRlcm4ucHVzaCggdG9rZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2VuZXJhdGVSZWdFeHAoIG1hdGNoUGF0dGVybiwgY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFuYWxpemVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIHNlZ21lbnQgYW5kIHJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyXHJcblx0Ly8gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWwgYW5kIHdoZXRoZXIgaXQgaXMgXCJtdWx0aVwiLlxyXG5cdHByaXZhdGUgYW5hbGl6ZUZpcnN0Q2hhciggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcsIGlzUG90ZW50aWFsbHlNdWx0aTogYm9vbGVhbik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzd2l0Y2goIGdfY3VyckNoYXIpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgJz8nOiB0aGlzLmlzT3B0aW9uYWwgPSB0cnVlOyByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0Y2FzZSAnISc6IHJldHVybiB0cnVlO1xyXG5cclxuXHRcdFx0Y2FzZSAnKic6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWlzUG90ZW50aWFsbHlNdWx0aSlcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFNpbmdsZS1zZWdtZW50IFVSTCBwYXJ0IGNhbm5vdCBzdGFydCBmcm9tICcqJ2ApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzTXVsdGkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjYXNlICcrJzpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghaXNQb3RlbnRpYWxseU11bHRpKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgU2luZ2xlLXNlZ21lbnQgVVJMIHBhcnQgY2Fubm90IHN0YXJ0IGZyb20gJysnYCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNNdWx0aSA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBFbXB0eSBzZWdtZW50IGVuY291bnRlcmVkYCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgcmVndWxhciBleHByZXNzaW9uIGRlc2NyaWJpbmcgdGhlIHNlZ21lbnQuXHJcblx0cHJpdmF0ZSBnZW5lcmF0ZVJlZ0V4cCggbWF0Y2hQYXR0ZXJuOiAoUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwKVtdLFxyXG5cdFx0XHRcdFx0Y2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyAxLWJhc2VkIGluZGV4IG9mIHRoZSBSZWdFeHAgY2FwdHVyaW5nIGdyb3VwLiBXZSBuZWVkIHRvIGNvdW50IGNhcHR1cmluZyBncm91cHMgaW5cclxuXHRcdC8vIG9yZGVyIHRvIGxhdGVyIGdldCB2YWx1ZXMgb2YgbmFtZWQgYW5kIGFub255bW91cyBmaWVsZHMuXHJcblx0XHRsZXQgbmV4dENhcHR1cmluZ0dyb3VwSW5kZXggPSAxO1xyXG5cclxuXHRcdGxldCByZWdFeHBTdHJpbmcgPSBcIlwiO1xyXG5cdFx0aWYgKG1hdGNoUGF0dGVybi5sZW5ndGggPT09IDApXHJcblx0XHRcdHJlZ0V4cFN0cmluZyArPSBcIi4rXCI7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHRva2VuIG9mIG1hdGNoUGF0dGVybilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlZFRleHQpXHJcblx0XHRcdFx0XHRyZWdFeHBTdHJpbmcgKz0gdG9rZW4uY29udGVudDtcclxuXHRcdFx0XHRlbHNlIGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlZFJlZ0V4cClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZWdFeHBTdHJpbmcgKz0gXCIoXCIgKyB0b2tlbi5jb250ZW50ICsgXCIpXCI7XHJcblx0XHRcdFx0XHRuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCArPSAxICsgdG9rZW4uY2FwdHVyaW5nR3JvdXBRdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgLy8gaWYgKHRva2VuIGluc3RhbmNlb2YgUGFyc2VkRmllbGQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dG9rZW4uaXNBcnJheSA9IHRoaXMuaXNNdWx0aTtcclxuXHRcdFx0XHRcdHRva2VuLmluZGV4ID0gbmV4dENhcHR1cmluZ0dyb3VwSW5kZXg7XHJcblx0XHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKCB0b2tlbik7XHJcblx0XHRcdFx0XHRyZWdFeHBTdHJpbmcgKz0gdGhpcy5nZW5lcmF0ZVJlZ0V4cFNlY3Rpb25Gb3JGaWVsZCggdG9rZW4pO1xyXG5cdFx0XHRcdFx0bmV4dENhcHR1cmluZ0dyb3VwSW5kZXgrKztcclxuXHRcdFx0XHRcdGlmICh0b2tlbi5tYXRjaFBhdHRlcm4pXHJcblx0XHRcdFx0XHRcdG5leHRDYXB0dXJpbmdHcm91cEluZGV4ICs9IDEgKyB0b2tlbi5tYXRjaFBhdHRlcm4uY2FwdHVyaW5nR3JvdXBRdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5yZWdFeHAgPSBuZXcgUmVnRXhwKCByZWdFeHBTdHJpbmcsIGNhc2VTZW5zaXRpdmUgPyBcIlwiIDogXCJpXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBncm91cCBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG5cdHByaXZhdGUgZ2VuZXJhdGVSZWdFeHBTZWN0aW9uRm9yRmllbGQoIHBhcnNlZEZpZWxkOiBQYXJzZWRGaWVsZCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBzID0gXCIoXCI7XHJcblx0XHRpZiAocGFyc2VkRmllbGQubWF0Y2hQYXR0ZXJuICYmIHBhcnNlZEZpZWxkLm1hdGNoUGF0dGVybi5jb250ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRzICs9IGAoJHtwYXJzZWRGaWVsZC5tYXRjaFBhdHRlcm4uY29udGVudH0pYDtcclxuXHRcdFx0aWYgKHBhcnNlZEZpZWxkLmlzT3B0aW9uYWwpXHJcblx0XHRcdFx0cyArPSBcIj9cIjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHBhcnNlZEZpZWxkLmlzT3B0aW9uYWwpXHJcblx0XHRcdHMgKz0gXCIuKlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IFwiLitcIjtcclxuXHJcblx0XHRzICs9IFwiKVwiO1xyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVGV4dCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHRleHQgc2VjdGlvbiB3aXRoaW4gYSBzZWdtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkVGV4dCBleHRlbmRzIFBhcnNlZFRva2VuXHJcbntcclxuXHQvLyBUZXh0IHNlY3Rpb24gc3RyaW5nXHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY29udGVudCA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwYXJzZSggdGV4dEVuZENoYXJzOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiB0ZXh0RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHRzICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHRleHQgbWlnaHQgaGF2ZSBiZWVuIFVSTCBlbmNvZGVkXHJcblx0XHR0aGlzLmNvbnRlbnQgPSBkZWNvZGVVUklDb21wb25lbnQocyk7XHJcblxyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFJlZ0V4cCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzZWN0aW9uIHdpdGhpbiBhIHNlZ21lbnQgb3JcclxuLy8gZmllbGQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRSZWdFeHAgZXh0ZW5kcyBQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHN0cmluZ1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGNhcHR1cmluZyBncm91cHMgd2l0aGluIHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuXHRjYXB0dXJpbmdHcm91cFF0eTogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY29udGVudCA9IFwiXCI7XHJcblx0XHR0aGlzLmNhcHR1cmluZ0dyb3VwUXR5ID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gU3RhY2sgb2Ygb3BlbmluZyBhbmQgY2xvc2luZyBjaGFyYWN0ZXJzIChwYXJlbnRoZXNpcywgYnJhY2tldHMgYW5kIGN1cmx5IGJyYWNlcykgZm9yXHJcblx0XHQvLyBwYXJzaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgc2VjdGlvbi4gUmVndWxhciBleHByZXNzaW9uIHNlY3Rpb24gc3RvcHMgd2hlbiB3ZSBlbmNvdW50ZXJcclxuXHRcdC8vIGNoYXJhY3RlciAnKScgYW5kIHRoaXMgc3RhY2sgaXMgZW1wdHkuXHJcblx0XHRsZXQgc3RhY2s6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXJyQ2hhciA9IGdfY3VyckNoYXI7XHJcblx0XHRcdGlmIChjdXJyQ2hhciA9PT0gJyknKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoc3RhY2sucG9wKCkgPT09ICcoJylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgb3Blbi9jbG9zZSBjaGFyYWN0ZXJzIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnfScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICd7JylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgb3Blbi9jbG9zZSBjaGFyYWN0ZXJzIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnXScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICdbJylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgb3Blbi9jbG9zZSBjaGFyYWN0ZXJzIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKFwiKHtbXCIuaW5kZXhPZiggY3VyckNoYXIpID49IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoY3VyckNoYXIgPT09ICcoJylcclxuXHRcdFx0XHRcdHRoaXMuY2FwdHVyaW5nR3JvdXBRdHkrKztcclxuXHJcblx0XHRcdFx0c3RhY2sucHVzaCggY3VyckNoYXIpO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnXFxcXCcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnQgKz0gY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRcdGN1cnJDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLmNvbnRlbnQgKz0gY3VyckNoYXI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gd2UgZW5kIHVwIGhlcmUgb25seSBpZiB0aGUgVVJMIHBhdHRlcm4gZW5kZWQgd2hpbGUgd2l0aGluIHVuZmluaXNoZWQgcmVndWxhciBleHByZXNzaW9uXHJcblx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIFVSTCBwYXR0ZXJuIGVuZCB3aXRoaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluYWxpemUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jb250ZW50KVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBFbXB0eSByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHJcblx0XHRzdXBlci5maW5hbGl6ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEZpZWxkIGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgZmllbGQgd2l0aGluIGEgc2VnbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEZpZWxkIGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZEZpZWxkXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgaXMgb3B0aW9uYWxcclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBmaWVsZC5cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIEZpZWxkIEZpZWxkRm9ybWF0XHJcblx0Zm9ybWF0OiBhcGkuRmllbGRGb3JtYXQ7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBkZWZhdWx0IHZhbHVlIG9mIHRoZSBmaWVsZCAqL1xyXG5cdGRlZmF1bHRWYWx1ZTogYXBpLkZpZWxkVmFsdWVUeXBlO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgdmFsdWUgaXMgYW4gYXJyYXkuIFRoaXMgaXMgdHJ1ZSBmb3IgZmllbGRzIHRoYXQgY2FuIGFwcGVhclxyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBVUkwgcGFydC5cclxuXHRpc0FycmF5OiBib29sZWFuO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNhcHR1cmluZyBncm91cCBjb3JyZXNwb25kaW5nIHRvIHRoZSBmaWVsZCB3aXRoaW4gdGhlXHJcblx0Ly8gc2VnbWVudC5cclxuXHRpbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGRlc2NyaWJpbmcgdGhlIG1hdGNoaW5nIHBhdHRlcm4gZm9yIHRoZSBmaWVsZFxyXG5cdG1hdGNoUGF0dGVybjogUGFyc2VkUmVnRXhwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmlzT3B0aW9uYWwgPSBmYWxzZTtcclxuXHRcdHRoaXMubmFtZSA9IFwiXCI7XHJcblx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5TdHJpbmc7XHJcblx0XHR0aGlzLm1hdGNoUGF0dGVybiA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpcnN0IGNoZWNrIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBvcHRpb25hbFxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pc09wdGlvbmFsID0gdHJ1ZTtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGNoYXJhY3RlcnMgaW4gdGhlIGZpZWxkIG5hbWVcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblx0XHRcdGVsc2UgaWYgKFwifSglPVwiLmluZGV4T2YoZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Ly9lbHNlIGlmIChub24tYWNjZXB0YWJsZS1jaGFyLWluLWZpZWxkLW5hbWUpXHJcblx0XHRcdC8vXHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gZmllbGRgKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5uYW1lICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5uYW1lLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgbXVzdCBoYXZlIG5hbWVgKTtcclxuXHJcblx0XHRnX2NoZWNrRW5kKCk7XHJcblxyXG5cdFx0Ly8gZmllbGQgbWF5IGRlZmluZSBmb3JtYXRcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnJScpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpXHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHJcblx0XHRcdGxldCBmb3JtYXRDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0aWYgKGZvcm1hdENoYXIgPT09ICdpJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LkludGVnZXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZm9ybWF0Q2hhciA9PT0gJ2YnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuRmxvYXQ7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZm9ybWF0Q2hhciA9PT0gJ2InKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuQm9vbGVhbjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIGZpZWxkIGZvcm1hdGApO1xyXG5cclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpZWxkIG1heSBoYXZlIHJlZ3VsYXIgZXhwcmVzc2lvblxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICcoJylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJlZ0V4cCA9IG5ldyBQYXJzZWRSZWdFeHAoKTtcclxuXHRcdFx0cmVnRXhwLnBhcnNlKCk7XHJcblx0XHRcdHRoaXMubWF0Y2hQYXR0ZXJuID0gcmVnRXhwO1xyXG5cclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpZWxkIG1heSBoYXZlIGRlZmF1bHQgdmFsdWU6IGluIHRoaXMgY2FzZSBpdCBiZWNvbWVzIG9wdGlvbmFsXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJz0nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmlzT3B0aW9uYWwgPSB0cnVlO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0dGhpcy5wYXJzZURlZmF1bHRWYWx1ZSggc2VnbWVudEVuZENoYXJzKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0c3dpdGNoKCB0aGlzLmZvcm1hdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkludGVnZXI6IHRoaXMuZGVmYXVsdFZhbHVlID0gTmFOOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5GbG9hdDogdGhpcy5kZWZhdWx0VmFsdWUgPSBOYU47IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkJvb2xlYW46IHRoaXMuZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkOyBicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OiB0aGlzLmRlZmF1bHRWYWx1ZSA9IFwiXCI7IGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICd9JylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIGZpZWxkYCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlRGVmYXVsdFZhbHVlKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblx0XHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICd9JylcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Ly9lbHNlIGlmIChub24tYWNjZXB0YWJsZS1jaGFyLWluLWZpZWxkLW5hbWUpXHJcblx0XHRcdC8vXHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gZmllbGRgKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cyArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGVtcHR5IGFuZCBpZiBmaWVsZCBmb3JtYXQgaXMgc2V0IHRvIGEgbm9uLXN0cmluZ1xyXG5cdFx0Ly8gYWxzbyBjaGVjayB3aGV0aGVyIGl0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gdGhlYXQgZm9ybWF0LlxyXG5cdFx0aWYgKCFzKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCBkZWZhdWx0IHZhbHVlIGNhbm5vdCBiZSBlbXB0eWApO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIFVSTCBlbmNvZGVkXHJcblx0XHRzID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xyXG5cclxuXHRcdGlmICh0aGlzLmZvcm1hdCA9PT0gYXBpLkZpZWxkRm9ybWF0LkludGVnZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gcGFyc2VJbnQoIHMpO1xyXG5cdFx0XHRpZiAoaXNOYU4oIHRoaXMuZGVmYXVsdFZhbHVlKSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBEZWZhdWx0IHZhbHVlIG9mIEludGVnZXIgZmllbGQgJHt0aGlzLm5hbWV9IGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gSW50ZWdlcmApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5mb3JtYXQgPT09IGFwaS5GaWVsZEZvcm1hdC5GbG9hdClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBwYXJzZUZsb2F0KCBzKTtcclxuXHRcdFx0aWYgKGlzTmFOKCB0aGlzLmRlZmF1bHRWYWx1ZSkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRGVmYXVsdCB2YWx1ZSBvZiBGbG9hdCBmaWVsZCAke3RoaXMubmFtZX0gY2Fubm90IGJlIGNvbnZlcnRlZCB0byBGbG9hdGApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5mb3JtYXQgPT09IGFwaS5GaWVsZEZvcm1hdC5Cb29sZWFuKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IHMudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKHYgPT09IFwidHJ1ZVwiIHx8IHYgPT09IFwidFwiIHx8IHYgPT09IFwieWVzXCIgfHwgdiA9PT0gXCJ5XCIgfHwgdiA9PT0gXCIxXCIpXHJcblx0XHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmICh2ID09PSBcImZhbHNlXCIgfHwgdiA9PT0gXCJmXCIgfHwgdiA9PT0gXCJub1wiIHx8IHYgPT09IFwiblwiIHx8IHYgPT09IFwiMFwiKVxyXG5cdFx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBEZWZhdWx0IHZhbHVlIG9mIEJvb2xlYW4gZmllbGQgJHt0aGlzLm5hbWV9IGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gQm9vbGVhbmApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IHM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGVycm9yIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHBhcnNpbmcgb2ZcclxuLy8gYSBVUkwgcGF0dGVybi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3IgaW1wbGVtZW50cyBhcGkuSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uXHJcbntcclxuXHQvLyBJbmRleCBpbiB0aGUgcGF0dGVybiBzdHJpbmcgYXQgd2hpY2ggdGhlZXJyb3Igb2NjdXJyZWQuXHJcblx0cG9zOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMucG9zID0gZ19jdXJySW5kZXg7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBgRXJyb3IgYXQgcG9zaXRpb24gJHt0aGlzLnBvc31cXG4ke21lc3NhZ2V9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==