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
 * @param s
 */
function parseURL(s) {
    return actual.parseURL(s);
}
exports.parseURL = parseURL;
/**
 * Parses the given URL pattern
 * @param s
 */
function parseUrlPattern(s) {
    return parser.parsePattern(s);
}
exports.parseUrlPattern = parseUrlPattern;
/**
 * Matches the given URL against URL pattern string.
 * @param url
 * @param patternString
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
            return `URL doesn't query string parameters specified in the pattern`;
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
        segment.parse(this.getSegmentEndCharacters(), false, this.isCaseSensitive());
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
            segment.parse(this.getSegmentEndCharacters(), true, this.isCaseSensitive());
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
    // Determines whether this URL part should be parsed case-sensitively.
    isCaseSensitive() { return false; }
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
    // Determines whether this URL part should be parsed case-sensitively.
    isCaseSensitive() { return false; }
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
    // Determines whether this URL part should be parsed case-sensitively.
    isCaseSensitive() { return false; }
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
    // Determines whether this URL part should be parsed case-sensitively.
    isCaseSensitive() { return true; }
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
            }
        }
        this.finalize();
    }
    // Determines whether this URL part should be parsed case-sensitively.
    isCaseSensitive() { return true; }
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
    // Determines whether this URL part should be parsed case-sensitively.
    isCaseSensitive() { return true; }
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
        else {
            g_move();
            g_checkEnd();
            let segment = new ParsedSegment();
            segment.parse("&#", true, true);
            this.segment = segment;
            this.finalize();
            if (g_currChar = '&')
                g_move();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW11cmwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbXVybC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW11cmwvLi9zcmMvYWN0dWFsLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21pbXVybFR5cGVzLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSx1QkFBdUI7QUFDdkIsU0FBZ0IsUUFBUSxD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YWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbXVybFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW11cmxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW11cmxUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLyBQYXJzZXMgdGhlIGdpdmVuIFVSTFxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVUkwoIHVybDogc3RyaW5nKTogYXBpLklQYXJzZWRBY3R1YWxVUkxcclxue1xyXG5cdGxldCBwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMID0ge307XHJcblxyXG5cdC8vIGZpbmQgcHJvdG9jb2xcclxuXHRsZXQgaG9zdG5hbWVJbmRleDogbnVtYmVyO1xyXG5cdGxldCBwcm90b2NvbFNlcGFyYXRvckluZGV4ID0gdXJsLmluZGV4T2YoIFwiOi8vXCIpO1xyXG5cdGlmIChwcm90b2NvbFNlcGFyYXRvckluZGV4ID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAocHJvdG9jb2xTZXBhcmF0b3JJbmRleCA+IDApXHJcblx0e1xyXG5cdFx0cGFyc2VkVVJMLnByb3RvY29sID0gdXJsLnN1YnN0ciggMCwgcHJvdG9jb2xTZXBhcmF0b3JJbmRleCk7XHJcblx0XHRob3N0bmFtZUluZGV4ID0gcHJvdG9jb2xTZXBhcmF0b3JJbmRleCArIDM7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdGhvc3RuYW1lSW5kZXggPSB1cmxbMF0gPT09ICcvJyA/IC0xIDogMDtcclxuXHJcblx0bGV0IG5leHRTZWFyY2hJbmRleFN0YXJ0ID0gaG9zdG5hbWVJbmRleCA8IDAgPyAwIDogaG9zdG5hbWVJbmRleDtcdFxyXG5cdGxldCBjb2xvbkluZGV4ID0gdXJsLmluZGV4T2YoICc6JywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBzbGFzaEluZGV4ID0gdXJsLmluZGV4T2YoICcvJywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBxdWVzdGlvbkluZGV4ID0gdXJsLmluZGV4T2YoICc/JywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZiggJyMnLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblxyXG5cdGlmIChob3N0bmFtZUluZGV4ID49IDApXHJcblx0e1xyXG5cdFx0aWYgKGNvbG9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBjb2xvbkluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlIGlmIChzbGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgc2xhc2hJbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZSBpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIHF1ZXN0aW9uSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2UgaWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIGhhc2hJbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHBhcnNlZFVSTC5ob3N0bmFtZS5sZW5ndGg7IGkrKylcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lW2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KCBwYXJzZWRVUkwuaG9zdG5hbWVbaV0pO1xyXG5cdH1cclxuXHJcblx0aWYgKGNvbG9uSW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdGlmIChzbGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgc2xhc2hJbmRleCAtIGNvbG9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2UgaWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxLCBxdWVzdGlvbkluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZSBpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgaGFzaEluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJzZWRVUkwucG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxKTtcclxuXHR9XHJcblxyXG5cdC8vIHNsYXNoIGNhbiBiZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGlmIHRoZXJlIGlzIG5vIGhvc3RuYW1lXHJcblx0aWYgKHNsYXNoSW5kZXggPj0gMClcclxuXHR7XHJcblx0XHRpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEsIHF1ZXN0aW9uSW5kZXggLSBzbGFzaEluZGV4IC0gMSkuc3BsaXQoICcvJyk7XHJcblx0XHRlbHNlIGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aCA9IHVybC5zdWJzdHIoIHNsYXNoSW5kZXggKyAxLCBoYXNoSW5kZXggLSBzbGFzaEluZGV4IC0gMSkuc3BsaXQoICcvJyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEpLnNwbGl0KCAnLycpO1xyXG5cclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgcGFyc2VkVVJMLnBhdGgubGVuZ3RoOyBpKyspXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoW2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KCBwYXJzZWRVUkwucGF0aFtpXSk7XHJcblx0fVxyXG5cclxuXHRpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0e1xyXG5cdFx0cGFyc2VkVVJMLnF1ZXJ5ID0ge307XHJcblx0XHRsZXQgc2VhcmNoU3RyaW5nOiBzdHJpbmc7XHJcblx0XHRpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0c2VhcmNoU3RyaW5nID0gdXJsLnN1YnN0ciggcXVlc3Rpb25JbmRleCArIDEsIGhhc2hJbmRleCAtIHF1ZXN0aW9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0c2VhcmNoU3RyaW5nID0gdXJsLnN1YnN0ciggcXVlc3Rpb25JbmRleCArIDEpO1xyXG5cclxuXHRcdGxldCBwYXJhbXMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoICcmJyk7XHJcblx0XHRmb3IoIGxldCBwYXJhbSBvZiBwYXJhbXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBhcnIgPSBwYXJhbS5zcGxpdCggJz0nKTtcclxuXHRcdFx0aWYgKGFyci5sZW5ndGggPT09IDIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCggYXJyWzBdKTtcclxuXHRcdFx0XHRsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KCBhcnJbMV0pO1xyXG5cdFx0XHRcdGlmIChuYW1lIGluIHBhcnNlZFVSTC5xdWVyeSlcclxuXHRcdFx0XHRcdHBhcnNlZFVSTC5xdWVyeVtuYW1lXS5wdXNoKCB2YWwpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHBhcnNlZFVSTC5xdWVyeVtuYW1lXSA9IFt2YWxdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRwYXJzZWRVUkwuaGFzaCA9IGRlY29kZVVSSUNvbXBvbmVudCggdXJsLnN1YnN0ciggaGFzaEluZGV4ICsgMSkpO1xyXG5cclxuXHRyZXR1cm4gcGFyc2VkVVJMO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGUgUGFyc2VkQWN0dWFsVVJMIGNsYXNzIGNvbnRhaW5zIFVSTCBwYXJ0cyBwYXJzZWQgb3V0IG9mIHRoZSBVUkwgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkQWN0dWFsVVJMXHJcbntcclxuXHRwcm90b2NvbD86IHN0cmluZztcclxuXHRob3N0bmFtZT86IHN0cmluZ1tdO1xyXG5cdHBvcnQ/OiBzdHJpbmc7XHJcblx0cGF0aD86IHN0cmluZ1tdO1xyXG5cdHF1ZXJ5PzogeyBbUDogc3RyaW5nXTogc3RyaW5nW10gfTtcclxuXHRoYXNoPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVGhlIFVybFBhcnQgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGRpc3Rpbmd1aXNoaW5nIFVSTCBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVVcmxQYXJ0IHsgUHJvdG9jb2wsIEhvc3RuYW1lLCBQb3J0LCBQYXRoLCBRdWVyeSwgSGFzaCB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFVybFBhdHRlcm4gaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHRvcC1sZXZlbCBvYmplY3QgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIFVSTFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0LyoqIE9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGZvciB3aGljaCB0aGlzIG9iamVjdCB3YXMgY3JlYXRlZC4gKi9cclxuXHRwYXR0ZXJuU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBQcm90b2NvbCBVUkwgcGFydC4gKi9cclxuXHRwcm90b2NvbDogSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogSG9zdG5hbWUgVVJMIHBhcnQuICovXHJcblx0aG9zdG5hbWU6IElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUG9ydCBVUkwgcGFydC4gKi9cclxuXHRwb3J0OiBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBQYXRoIFVSTCBwYXJ0LiAqL1xyXG5cdHBhdGg6IElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUXVlcnkgU3RyaW5nIFVSTCBwYXJ0LiAqL1xyXG5cdHF1ZXJ5OiBJUGFyc2VkUXVlcnlTdHJpbmc7XHJcblxyXG5cdC8qKiBIYXNoIFVSTCBwYXJ0LiAqL1xyXG5cdGhhc2g6IElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIEFycmF5IG9mIFVSTCBwYXJ0LiBJbmRleGVzIGFyZSB2YWx1ZXMgZnJvbSB0aGUgVXJsUGFydCBlbnVtZXJhdGlvbi4gKi9cclxuXHRwYXJ0czogSVBhcnNlZFVybFBhcnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhcnNlZExvY2F0aW9uIHR5cGUgZGVmaW5lcyBob3cgZGlmZmVyZW50IHNlY3Rpb24gb2YgdGhlIFVSTCBwYXR0ZXJuIGNhbiBiZSBsb2NhdGVkIGluIHRoZVxyXG4gKiBvcmlnaW5hbCBwYXR0ZXJuIHN0cmluZy4gTG9jYXRpb24gaXMgZGVmaW5lZCB1c2luZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZSB0aGUgc2VjdGlvblxyXG4gKiAgYmVnaW5zIGFuZCBpdHMgbGVuZ3RoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUGFyc2VkTG9jYXRpb24gPSB7IHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFRva2VuIGlzIGEgYmFzZSBpbnRlcmZhY2UgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqXHJcblx0ICogTG9jYXRpb24gb2YgdGhlIHBhcnQgaW4gdGhlIG9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHplcm8tYmFzZWQgaW5kZXggd2hlcmVcclxuXHQgKiB0aGUgcGFydCBiZWdpbnMgYW5kIGl0cyBsZW5ndGguXHJcblx0ICovXHJcblx0bG9jYXRpb246IFBhcnNlZExvY2F0aW9uO1xyXG5cclxuXHQvKiogQ29udGVudCBvZiB0aGUgdG9rZW4gKi9cclxuXHR0b2tlblN0aW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkVXJsUGFydCBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVXJsUGFydCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuICovXHJcblx0dXJsUGFydDogRVVybFBhcnQ7XHJcblxyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcGFyaXNvbiBvZiB0aGlzIHBhcnQgc2hvbGQgYmUgY2FzZS1zZW5zaXRpdmUgb3Igbm90LiAqL1xyXG5cdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC4gKi9cclxuXHRnZXRTZWdtZW50cygpOiBJUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4gKiBkZWZpbmUgYSBzaW5nbGUgc2VnbWVudDogcHJvdG9jb2wsIHBvcnQgYW5kIGhhc2guXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBleHRlbmRzIElQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvKiogVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gKi9cclxuXHRzZWdtZW50OiBJUGFyc2VkU2VnbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuICogY2FuIGRlZmluZSBtdWx0aXBsZSBzZWdtZW50czogaG9zdG5hbWUgYW5kIHBhdGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLiAqL1xyXG5cdHNlZ21lbnRzOiBJUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFF1ZXJ5U3RyaW5nIGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBxdWVyeSBzdHJpbmdcclxuICogcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFF1ZXJ5U3RyaW5nIGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBRdWVyeSBzdHJpbmcgZGVmaW5lcyBvbmUgc2VnZW1lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuICovXHJcblx0cGFyc2VkUVNQczogeyBbUDogc3RyaW5nXTogSVBhcnNlZFFTUCB9O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBub3Qgc3BlY2lmaWVkIGV4cGxpY2l0bHkgaW4gdGhlIHBhdHRlcm5cclxuXHQgKiB3aWxsIGJlIGFsbG93ZWQgd2hlbiBwYXJzaW5nIGFjdHVhbCBVUkxzLlxyXG5cdCAqL1xyXG5cdGFsbG93RXh0cmFRdWVyeVBhcmFtczogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRRU1AgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IG1hdGNoaW5nIGEgc2luZ2xlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRRU1AgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIG5hbWUuICovXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogUXVlcnkgU3RyaW5nIGRlZmluZXMgb25lIHNlZ2VtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLiAqL1xyXG5cdHNlZ21lbnQ6IElQYXJzZWRTZWdtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFNlZ21lbnQgaW50ZXJmYWNlIGRlZmluZXMgYSBzaW5nbGUgc2VnbWVudCBpbiBhIFVSTCBwYXR0ZXJuIHRoYXQgY2FuIGJlIG1hdGNoZWQgdG9cclxuICogb25lIG9yIG1vcmUgcGFydHMgb2YgYW4gYWN0dWFsIFVSTC4gRWFjaCBzZWdtZW50IGNhbiBoYXZlIHplcm8gb3IgbW9yZSBmaWVsZHMgZGVmaW5lZCBpbiBpdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFNlZ21lbnQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBpcyBvcHRpb25hbCAqL1xyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGNhbiBiZSByZXBlYXRlZCBtdXRpcGxlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBib3RoXHJcblx0ICogb3B0aW9uYWwgYW5kIG11bHRpIGNhbiBiZSByZXBlYXRlZCB6ZXJvIG9yIG1vcmUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIG5vdCBvcHRpb25hbCBidXRcclxuXHQgKiBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgb25lIG9yIG1vcmUgdGltZXMuXHJcblx0ICovXHJcblx0aXNNdWx0aTogYm9vbGVhbjtcclxuXHJcblx0LyoqIEFycmF5IG9mIGZpZWxkcy4gKi9cclxuXHRmaWVsZHM6IElQYXJzZWRGaWVsZFtdO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzZWdtZW50J3MgbWF0Y2ggcGF0dGVybi5cclxuXHRyZWdFeHA6IFJlZ0V4cDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRGaWVsZCBpbnRlcmZhY2UgZGVmaW5lcyBhIHNpbmdsZSBmaWVsZCB3aXRoaW4gYSBzZWdtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkRmllbGQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgaXMgb3B0aW9uYWwgKi9cclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgZmllbGQgKi9cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBGaWVsZCBGaWVsZEZvcm1hdCAqL1xyXG5cdGZvcm1hdDogRmllbGRGb3JtYXQ7XHJcblxyXG5cdC8vIC8qKiBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGRlc2NyaWJpbmcgdGhlIG1hdGNoaW5nIHBhdHRlcm4gZm9yIHRoZSBmaWVsZCAqL1xyXG5cdC8vIG1hdGNoUGF0dGVybjogSVBhcnNlZFJlZ0V4cDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIHZhbHVlIGlzIGFuIGFycmF5LiBUaGlzIGlzIHRydWUgZm9yIGZpZWxkcyB0aGF0IGNhbiBhcHBlYXJcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgVVJMIHBhcnQuXHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYXB0dXJpbmcgZ3JvdXAgY29ycmVzcG9uZGluZyB0byB0aGUgZmllbGQgd2l0aGluIHRoZVxyXG5cdC8vIHNlZ21lbnQuXHJcblx0aW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZpZWxkRm9ybWF0IGNsYXNzIGRlZmluZXMgcG9zc2libGUgZmllbGQgZm9ybWF0cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEZpZWxkRm9ybWF0XHJcbntcclxuXHQvKiogRmllbGQgdmFsdWUgY2FuIGJlIGFyYml0cmFyeSBzdHJpbmcgKi9cclxuXHRTdHJpbmcsXHJcblxyXG5cdC8qKiBGaWVsZCB2YWx1ZSBtdXN0IGJlIGNvbnZlcnRhYmxlIHRvIGFuIGludGVnZXIgbnVtYmVyICovXHJcblx0SW50ZWdlcixcclxuXHJcblx0LyoqIEZpZWxkIHZhbHVlIG11c3QgYmUgY29udmVydGFibGUgdG8gYSByZWFsIG51bWJlciAqL1xyXG5cdEZsb2F0LFxyXG5cclxuXHQvKiogRmllbGQgdmFsdWUgbXVzdCBiZSBjb252ZXJ0YWJsZSB0byBhIEJvb2xlYW4gbnVtYmVyICovXHJcblx0Qm9vbCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBlcnJvciB0aGF0IG9jY3VycmVkIGR1cmluZyBwYXJzaW5nIG9mXHJcbiAqIGEgVVJMIHBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yXHJcbntcclxuXHQvKiogSW5kZXggaW4gdGhlIHBhdHRlcm4gc3RyaW5nIGF0IHdoaWNoIHRoZWVycm9yIG9jY3VycmVkLiAqL1xyXG5cdHBvczogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTdXBwb3J0ZWQgcHJpbWl0aXZlIHR5cGVzIG9mIGZpZWxkIHZhbHVlcyAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVGaWVsZFZhbHVlVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblxyXG4vKiogVHlwZXMgb2YgZmllbGRzIHdpdGggbXVsdGlwbGUgdmFsdWVzICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRmllbGRWYWx1ZVR5cGUgPSBTaW5nbGVGaWVsZFZhbHVlVHlwZVtdO1xyXG5cclxuLyoqIEZpZWxkIHZhbHVlIHR5cGUsIHdoaWNoIGNhbiBiZSBlaXRoZXIgc2luZ2UgdmFsdWUgb3IgbXVsdGlwbGUgdmFsdWUgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGaWVsZFZhbHVlVHlwZSA9IFNpbmdsZUZpZWxkVmFsdWVUeXBlIHwgTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHJcbi8qKiBPYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIGFyZSBmaWVsZCBuYW1lcyBhbmQgdmFsdWVzIGFyZSBmaWVsZCB2YWx1ZXMuICovXHJcbmV4cG9ydCB0eXBlIEZpZWxkQmFnID0geyBbUDpzdHJpbmddOiBGaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBhbiBhY3R1YWwgVVJMIGFnYWluc3RcclxuICogdGhlIFVSTCBwYXR0ZXJuLiBUaGUgcmVzdWx0IGNvbnRhaW5zIHZhbHVlcyBvZiBuYW1lZCBhbmQgaW5kZXhlZCBmaWVsZHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbWF0Y2ggd2FzIHN1Y2Nlc3N1bCAqL1xyXG5cdHN1Y2Nlc3M6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBQYXJzZWQgYWN0dWFsIFVSTCAqL1xyXG5cdHBhcnNlZFVSTDogSVBhcnNlZEFjdHVhbFVSTDtcclxuXHJcblx0LyoqIEVycm9yIG1lc3NhZ2VzIGluIGNhc2UgdGhlIG1hdGNoIHdhcyBub3Qgc3VjY2Vzc2Z1bCAqL1xyXG5cdGVycm9ycz86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogRmllbGQgbmFtZXMgYW5kIHZhbHVlcyAqL1xyXG5cdGZpZWxkcz86IEZpZWxkQmFnO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFjdHVhbCBmcm9tIFwiLi9hY3R1YWxcIjtcclxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCIuL3BhcnNlclwiO1xyXG5pbXBvcnQgKiBhcyBtYXRjaGVyIGZyb20gXCIuL21hdGNoZXJcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMIFxyXG4gKiBAcGFyYW0gcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVSTCggczogc3RyaW5nKTogSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0cmV0dXJuIGFjdHVhbC5wYXJzZVVSTCggcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgdGhlIGdpdmVuIFVSTCBwYXR0ZXJuXHJcbiAqIEBwYXJhbSBzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsUGF0dGVybiggczogc3RyaW5nKTogSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdHJldHVybiBwYXJzZXIucGFyc2VQYXR0ZXJuKCBzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hdGNoZXMgdGhlIGdpdmVuIFVSTCBhZ2FpbnN0IFVSTCBwYXR0ZXJuIHN0cmluZy5cclxuICogQHBhcmFtIHVybCBcclxuICogQHBhcmFtIHBhdHRlcm5TdHJpbmcgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goIHVybDogc3RyaW5nIHwgSVBhcnNlZEFjdHVhbFVSTCwgcGF0dGVybjogc3RyaW5nIHwgSVBhcnNlZFVybFBhdHRlcm4pOiBJVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHRyZXR1cm4gbWF0Y2hlci5tYXRjaCggdXJsLCBwYXR0ZXJuKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vYXBpXCJcclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gVVJMIGFnYWluc3QgVVJMIHBhdHRlcm4gc3RyaW5nLlxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goIHVybDogc3RyaW5nIHwgYXBpLklQYXJzZWRBY3R1YWxVUkwsIHBhdHRlcm46IHN0cmluZyB8IGFwaS5JUGFyc2VkVXJsUGF0dGVybik6IGFwaS5JVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHRpZiAoIXVybClcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJVUkwgY2Fubm90IGJlIG51bGwgb3IgZW1wdHkgc3RyaW5nXCIpO1xyXG5cdGlmICghcGF0dGVybilcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJQYXR0ZXJuIGNhbm5vdCBiZSBudWxsIG9yIGVtcHR5IHN0cmluZ1wiKTtcclxuXHJcblx0aWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIGFwaS5wYXJzZVVSTCggdXJsKSwgYXBpLnBhcnNlVXJsUGF0dGVybiggcGF0dGVybikpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIGFwaS5wYXJzZVVSTCggdXJsKSwgcGF0dGVybik7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggdXJsLCBhcGkucGFyc2VVcmxQYXR0ZXJuKCBwYXR0ZXJuKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggdXJsLCBwYXR0ZXJuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gVVJMIGFnYWluc3QgYWxyZWFkeSBwYXJzZWQgVVJMIHBhdHRlcm4uXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFBhcnNlZCggcGFyc2VkVVJMOiBhcGkuSVBhcnNlZEFjdHVhbFVSTCwgcGFyc2VkUGF0dGVybjogYXBpLklQYXJzZWRVcmxQYXR0ZXJuKTogYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdGlmICghcGFyc2VkVVJMKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlVSTCBjYW5ub3QgYmUgbnVsbFwiKTtcclxuXHRpZiAoIXBhcnNlZFBhdHRlcm4pXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwicGFyc2VkUGF0dGVybiBjYW5ub3QgYmUgbnVsbFwiKTtcclxuXHJcblx0Ly8gcHJlcGFyZSBvYmplY3QgZm9yIG1hdGNoIHJlc3VsdFxyXG5cdGxldCBtYXRjaFJlc3VsdCA9IG5ldyBVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQoKTtcclxuXHRtYXRjaFJlc3VsdC5wYXJzZWRVUkwgPSBwYXJzZWRVUkw7XHJcblx0bWF0Y2hSZXN1bHQuZmllbGRzID0ge307XHJcblx0bGV0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0Ly8gY29tcGFyZSBwYXJ0IGJ5IHBhcnRcclxuXHRcdGxldCBlcnJvciA9IG1hdGNoU2luZ2xlU2VnbWVudCggYXBpLkVVcmxQYXJ0LlByb3RvY29sLCBwYXJzZWRVUkwucHJvdG9jb2wsXHJcblx0XHRcdCBcdFx0XHRwYXJzZWRQYXR0ZXJuLnByb3RvY29sID8gcGFyc2VkUGF0dGVybi5wcm90b2NvbC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoTXVsdGlwbGVTZWdtZW50cyggYXBpLkVVcmxQYXJ0Lkhvc3RuYW1lLCBwYXJzZWRVUkwuaG9zdG5hbWUsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4uaG9zdG5hbWUgPyBwYXJzZWRQYXR0ZXJuLmhvc3RuYW1lLnNlZ21lbnRzIDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoU2luZ2xlU2VnbWVudCggYXBpLkVVcmxQYXJ0LlBvcnQsIHBhcnNlZFVSTC5wb3J0LFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLnBvcnQgPyBwYXJzZWRQYXR0ZXJuLnBvcnQuc2VnbWVudCA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaE11bHRpcGxlU2VnbWVudHMoIGFwaS5FVXJsUGFydC5QYXRoLCBwYXJzZWRVUkwucGF0aCxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5wYXRoID8gcGFyc2VkUGF0dGVybi5wYXRoLnNlZ21lbnRzIDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoUXVlcnlTdHJpbmcoIHBhcnNlZFVSTC5xdWVyeSwgcGFyc2VkUGF0dGVybi5xdWVyeSwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoU2luZ2xlU2VnbWVudCggYXBpLkVVcmxQYXJ0Lkhhc2gsIHBhcnNlZFVSTC5oYXNoLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLmhhc2ggPyBwYXJzZWRQYXR0ZXJuLmhhc2guc2VnbWVudCA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0ZXJyb3JzLnB1c2goIGVyci5tZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdC8vIGlmIHdlIGhhdmUgZXJyb3JzLCBwdXQgdGhlbSBpbnRvIHRoZSByZXN1bHQgb2JqZWN0XHJcblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKVxyXG5cdFx0bWF0Y2hSZXN1bHQuZXJyb3JzID0gZXJyb3JzO1xyXG5cclxuXHRyZXR1cm4gbWF0Y2hSZXN1bHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gc3RyaW5nIGFnYWluc3QgdGhlIGdpdmVuIGNvbXBpbGVkIHNlZ21lbnQuIEZpZWxkcyB3aWxsIGJlIGFkZGVkXHJcbi8vIHRvIHRoZSBnaXZlbiByZXN1bHQgb2JqZWN0LlxyXG5mdW5jdGlvbiBtYXRjaFNpbmdsZVNlZ21lbnQoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgYWN0dWFsU2VnbWVudDogc3RyaW5nLCBwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQsXHJcblx0XHRcdFx0IGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0Ly8gaWYgY29tcGlsZWQgc2VnbWVudCBpcyBOT1QgcHJvdmlkZWQsIHRoZW4gYWN0dWFsIHNlZ21lbnQgbXVzdCBiZSBlbXB0eVxyXG5cdGlmICghcGFyc2VkU2VnbWVudClcclxuXHR7XHJcblx0XHRpZiAoYWN0dWFsU2VnbWVudClcclxuXHRcdFx0cmV0dXJuIGBVUkwgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBjb250YWlucyBzZWdtZW50ICcke2FjdHVhbFNlZ21lbnR9JyB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIGlmIGFjdHVhbCBzZWdtZW50IGlzIGVtcHR5IGFuZCBjb21waWxlZCBzZWdtZW50IGlzIG1hbmRhdG9yeSwgdGhlcmUgaXMgbm8gbWF0Y2g7IGlmIHN0cmluZ1xyXG5cdC8vIGlzIGVtcHR5IGFuZCBjb21waWxlZCBzZWdtZW50IGlzIG9wdGlvbmFsLCB0aGVyZSBpcyBtYXRjaDtcclxuXHRpZiAoIWFjdHVhbFNlZ21lbnQpXHJcblx0e1xyXG5cdFx0aWYgKHBhcnNlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBgVVJMIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgZG9lc24ndCBoYXZlIGEgc2VnbWVudCBjb3JyZXNwb25kaW5nIGAgK1xyXG5cdFx0XHRcdFx0YHRvIGEgbWFuZGF0b3J5IHBhdHRlcm4gc2VnbWVudCAnJHtwYXJzZWRTZWdtZW50LnRva2VuU3Rpbmd9J2A7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50LCBwYXJzZWRTZWdtZW50LCBmaWVsZHMpXHJcblx0XHQ/IG51bGxcclxuXHRcdDogYFVSTCBzZWdtZW50ICcke2FjdHVhbFNlZ21lbnR9JyBpbiBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGRvZXNuJ3QgbWF0Y2ggYCArXHJcblx0XHRcdGBwYXR0ZXJuIHNlZ21lbnQgJyR7cGFyc2VkU2VnbWVudC50b2tlblN0aW5nfSdgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRyaWVzIHRvIG1hdGNoIGFjdHVhbCBzZWdtZW50IHRvIHRoZSBjb21waWxlZCBzZWdtZW50LiBJZiB0aGVyZSBpcyBhIG1hY3RoLCByZXR1cm5zIGEgbm9uLW51bGxcclxuLy8gb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzIChpZiBubyBmaWVsZHMgZm91bmQsIHJldHVybnMgYW4gZW1wdHkgb2JqZWN0KS4gSWYgdGhlcmUgaXMgbm8gbWF0Y2hcclxuLy8gcmV0dXJucyBudWxsLlxyXG5mdW5jdGlvbiB0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQ6IHN0cmluZywgcGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50LFxyXG5cdGZpZWxkczogYXBpLkZpZWxkQmFnKTogYm9vbGVhblxyXG57XHJcblx0Ly8gcGVyZm9ybSByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2ggLSBub3RlIHRoYXQgdGhlIG1hdGNoaW5nIHBhcnQgKGluZGV4IDAgb2YgdGhlIHJlc3VsdCkgc2hvdWxkXHJcblx0Ly8gbWF0Y2ggb3VyIHN0cmluZyBleGFjdGx5IHNvIHRoYXQgbm8gZXh0cmEgY2hhcmFjdGVycyBhcmUgZm91bmQgYmVmb3JlIG9yIGFmdGVyIHRoZSBtYXRjaC5cclxuXHRsZXQgZXhlY1Jlc3VsdCA9IHBhcnNlZFNlZ21lbnQucmVnRXhwLmV4ZWMoIGFjdHVhbFNlZ21lbnQpO1xyXG5cdGlmICghZXhlY1Jlc3VsdCB8fCBleGVjUmVzdWx0WzBdICE9PSBhY3R1YWxTZWdtZW50KVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGhhdmUgYW55IGZpZWxkc1xyXG5cdGZvciggbGV0IHBhcnNlZEZpZWxkIG9mIHBhcnNlZFNlZ21lbnQuZmllbGRzKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgcmVndWxhciBleHByZXNzaW9uIHJlc3VsdCBoYXMgdGhpcyBpbmRleCBhbmQgZ2V0IHRoZSB2YWx1ZVxyXG5cdFx0aWYgKHBhcnNlZEZpZWxkLmluZGV4ID49IGV4ZWNSZXN1bHQubGVuZ3RoKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGBCVUc6IEZpZWxkIGluZGV4IG5vdCBmb3VuZCBpbiBwYXR0ZXIncyByZWd1bGFyIGV4cHJlc3Npb24gZXhlY3V0aW9uIHJlc3VsdGApO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHZhbHVlID0gY29udmVydEZpZWxkVmFsdWUoIHBhcnNlZEZpZWxkLCBleGVjUmVzdWx0W3BhcnNlZEZpZWxkLmluZGV4XSk7XHJcblx0XHRpZiAoIXBhcnNlZEZpZWxkLmlzQXJyYXkpXHJcblx0XHRcdGZpZWxkc1twYXJzZWRGaWVsZC5uYW1lXSA9IHZhbHVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYXJyID0gZmllbGRzW3BhcnNlZEZpZWxkLm5hbWVdIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRpZiAoYXJyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnIgPSBbXTtcclxuXHRcdFx0XHRmaWVsZHNbcGFyc2VkRmllbGQubmFtZV0gPSBhcnI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFyci5wdXNoKCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBzdHJpbmcgYXJyYXkgYWdhaW5zdCB0aGUgZ2l2ZW4gY29tcGlsZWQgc2VnbWVudCBhcnJheS4gRmllbGRzIHdpbGwgYmUgYWRkZWRcclxuLy8gdG8gdGhlIGdpdmVuIHJlc3VsdCBvYmplY3QuXHJcbmZ1bmN0aW9uIG1hdGNoTXVsdGlwbGVTZWdtZW50cyggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBhY3R1YWxTZWdtZW50czogc3RyaW5nW10sIHBhcnNlZFNlZ21lbnRzOiBhcGkuSVBhcnNlZFNlZ21lbnRbXSxcclxuXHRmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdGlmICghYWN0dWFsU2VnbWVudHMgJiYgIXBhcnNlZFNlZ21lbnRzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIWFjdHVhbFNlZ21lbnRzKVxyXG5cdFx0cmV0dXJuIGBVUkwgZG9lc24ndCBoYXZlIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgdGhhdCBleGlzdHMgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdGVsc2UgaWYgKCFwYXJzZWRTZWdtZW50cylcclxuXHRcdHJldHVybiBgVVJMIGhhcyBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgcGF0dGVybmA7XHJcblxyXG5cdC8vIEZvciBlYWNoIHBhcnNlZCBzZWdtZW50IHdlIGNyZWF0ZSBhIGNvbXBpbGVkIHNlZ21lbnQgZXhjZXB0IGluIG9uZSBjYXNlOiBmb3IgXCJvbmUgb3IgbW9yZVwiXHJcblx0Ly8gcGFyc2VkIHNlZ21lbnRzIHdlIGNyZWF0ZSB0d28gY29tcGlsZWQgc2VnbWVudCAtIG9uZSBzaW5nbGUgbWFuZGF0b3J5IGFuZCBvbmUgbXVsdGkgYW5kXHJcblx0Ly8gb3B0aW9uYWwuXHJcblx0bGV0IGNvbXBpbGVkU2VnbWVudHM6IENvbXBpbGVkU2VnbWVudFtdID0gW107XHJcblx0Zm9yKCBsZXQgcGFyc2VkU2VnbWVudCBvZiBwYXJzZWRTZWdtZW50cylcclxuXHR7XHJcblx0XHRpZiAocGFyc2VkU2VnbWVudC5pc011bHRpICYmICFwYXJzZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHR7XHJcblx0XHRcdGNvbXBpbGVkU2VnbWVudHMucHVzaCggbmV3IENvbXBpbGVkU2VnbWVudCggcGFyc2VkU2VnbWVudCwgZmFsc2UpKTtcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCB0cnVlKSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbXBpbGVkU2VnbWVudHMucHVzaCggbmV3IENvbXBpbGVkU2VnbWVudCggcGFyc2VkU2VnbWVudCwgcGFyc2VkU2VnbWVudC5pc09wdGlvbmFsKSk7XHJcblx0fVxyXG5cclxuXHQvLyBjYWxsIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIHRoZSBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMgaWYgdGhlcmUgaXMgYSBtYXRjaFxyXG5cdC8vIG9yIG51bGwgaWYgdGhlcmUgaXMgbm90LlxyXG5cdGlmICh0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzLCAwLCBjb21waWxlZFNlZ21lbnRzLCAwLCBmaWVsZHMpKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGBVUkwgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBkb2Vzbid0IG1hdGNoIHRoZSBwYXR0ZXJuYDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUcmllcyB0byBtYXRjaCBhY3R1YWwgc2VnbWVudHMgdG8gdGhlIHBhdHRlcm4gc3RhcnRpbmcgZnJvbSB0aGUgZ2l2ZW4gaW5kZXggaW4gZWFjaCBhcnJheS4gSWZcclxuLy8gdGhlcmUgaXMgYSBtYWN0aCwgcmV0dXJucyBhIG5vbi1udWxsIG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcyAoaWYgbm8gZmllbGRzIGZvdW5kLCByZXR1cm5zIGFuXHJcbi8vIGVtcHR5IG9iamVjdCkuIElmIHRoZXJlIGlzIG5vIG1hdGNoIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gdHJ5TWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhY3R1YWxTZWdtZW50czogc3RyaW5nW10sIGFjdHVhbFN0YXJ0SW5kZXg6IG51bWJlcixcclxuXHRcdFx0XHRjb21waWxlZFNlZ21lbnRzOiBDb21waWxlZFNlZ21lbnRbXSwgY29tcGlsZWRTdGFydEluZGV4OiBudW1iZXIsXHJcblx0XHRcdFx0ZmllbGRzOiBhcGkuRmllbGRCYWcpOiBib29sZWFuXHJcbntcclxuXHQvLyBsb29wIG92ZXIgY29tcGlsZWQgc2VnbWVudHMuIElmIHRoZSBzZWdtZW50IGlzIG1hbmRhdG9yeSwgd2UgY29tcGFyZSBpdCB0byB0aGUgYWN0dWFsXHJcblx0Ly8gc2VnbWVudCBhbmQgaWYgdGhlcmUgaXMgbm8gbWF0Y2gsIHRoZSBtYXRjaGluZyBmYWlscy4gSWYgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWwsIHdlIGNhbGxcclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IHN0YXJ0aW5nIGZyb20gdGhlIG5leHQgY29tcGlsZWQgc2VnbWVudC4gSWYgdGhpcyBjYWxsIHJldHVybnNcclxuXHQvLyBudWxsIChubyBtYXRjaCksIHRoZW4gd2UgbWFwIHRoZSBhY3R1YWwgc2VnbWVudCB0byB0aGUgY29tcGlsZWQgc2VnbWVudCBhbmQgYWR2YW5jZSB0aGVcclxuXHQvLyBpbmRpY2VzLlxyXG5cdGxldCBhY3R1YWxDdXJySW5kZXggPSBhY3R1YWxTdGFydEluZGV4O1xyXG5cdGxldCBjb21waWxlZEN1cnJJbmRleCA9IGNvbXBpbGVkU3RhcnRJbmRleDtcclxuXHR3aGlsZSggY29tcGlsZWRDdXJySW5kZXggPCBjb21waWxlZFNlZ21lbnRzLmxlbmd0aCAmJiBhY3R1YWxDdXJySW5kZXggPCBhY3R1YWxTZWdtZW50cy5sZW5ndGgpXHJcblx0e1xyXG5cdFx0bGV0IGNvbXBpbGVkU2VnbWVudCA9IGNvbXBpbGVkU2VnbWVudHNbY29tcGlsZWRDdXJySW5kZXhdO1xyXG5cdFx0bGV0IGFjdHVhbFNlZ21lbnQgPSBhY3R1YWxTZWdtZW50c1thY3R1YWxDdXJySW5kZXhdO1xyXG5cdFx0aWYgKCFjb21waWxlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29tcGFyZSBtYW5kYXRvcnkgc2VnbWVudCB3aXRoIHRoZSBhY3R1YWwgb25lXHJcblx0XHRcdGlmICh0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQsIGNvbXBpbGVkU2VnbWVudC5wYXJzZWRTZWdtZW50LCBmaWVsZHMpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29tcGlsZWRDdXJySW5kZXgrKztcclxuXHRcdFx0XHRhY3R1YWxDdXJySW5kZXgrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gcGFzc2luZyB0aGUgbmV4dCBjb21waWxlZCBzZWdtZW50IGluZGV4XHJcblx0XHRcdGxldCB0ZW1wRmllbGRzOiBhcGkuRmllbGRCYWcgPSB7fVxyXG5cdFx0XHRpZiAodHJ5TWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhY3R1YWxTZWdtZW50cywgYWN0dWFsQ3VyckluZGV4LFxyXG5cdFx0XHRcdGNvbXBpbGVkU2VnbWVudHMsIGNvbXBpbGVkQ3VyckluZGV4ICsgMSwgdGVtcEZpZWxkcykpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGVyZSBpcyBhIG1hdGNoXHJcblx0XHRcdFx0bWVyZ2VGaWVsZHMoIGZpZWxkcywgdGVtcEZpZWxkcyk7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY29tcGFyZSB0aGlzIHNlZ21lbnQgd2l0aCB0aGUgYWN0dWFsIG9uZVxyXG5cdFx0XHRcdGlmICh0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQsIGNvbXBpbGVkU2VnbWVudC5wYXJzZWRTZWdtZW50LCB0ZW1wRmllbGRzKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjb3B5IGZpZWxkIHZhbHVlcyBhbmQgYWR2YW5jZSB0aGUgYWN0dWFsIGluZGV4XHJcblx0XHRcdFx0XHRtZXJnZUZpZWxkcyggZmllbGRzLCB0ZW1wRmllbGRzKTtcclxuXHRcdFx0XHRcdGFjdHVhbEN1cnJJbmRleCsrO1xyXG5cclxuXHRcdFx0XHRcdC8vIGFkdmFuY2UgdGhlIGNvbXBpbGVkIGluZGV4IG9ubHkgaWYgdGhpcyBmaWVsZCBpcyBhIHNpbmd1bGFyIG9uZVxyXG5cdFx0XHRcdFx0aWYgKCFjb21waWxlZFNlZ21lbnQucGFyc2VkU2VnbWVudC5pc011bHRpKVxyXG5cdFx0XHRcdFx0XHRjb21waWxlZEN1cnJJbmRleCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHdlIGFyZSBoZXJlIGlmIGVpdGhlciBjb21waWxlIHNlZ21lbnRzIG9yIGFjdHVhbCBzZWdtZW50cyBvciBib3RoIGFyZSBleGhvc3RlZC4gSWYgYm90aFxyXG5cdC8vIGFyZSBleGhvc3RlZCwgdGhlcmUgaXMgYSBtYXRjaC4gSWYgY29tcGlsZWQgYXJlIGV4aG9zdGVkIGJ1dCBhY3R1YWwgYXJlIG5vdCwgdGhlcmUgaXMgbm9cclxuXHQvLyBtYXRjaC4gSWYgYWN0dWFsIGFyZSBleGhvc3RlZCBidXQgY29tcGlsZWQgYXJlIG5vdCwgdGhlcmUgaXMgbWF0Y2ggb25seSBpZiBhbGwgdGhlXHJcblx0Ly8gcmVtYWluaW5nIGNvbXBpbGVkIHNlZ21lbnRzIGFyZSBvcHRpb25hbC5cclxuXHRpZiAoY29tcGlsZWRDdXJySW5kZXggPT09IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoICYmIGFjdHVhbEN1cnJJbmRleCA9PT0gYWN0dWFsU2VnbWVudHMubGVuZ3RoKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAoY29tcGlsZWRDdXJySW5kZXggPT09IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gY29tcGlsZWRDdXJySW5kZXg7IGkgPCBjb21waWxlZFNlZ21lbnRzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29tcGlsZWRTZWdtZW50ID0gY29tcGlsZWRTZWdtZW50c1tpXTtcclxuXHRcdFx0aWYgKCFjb21waWxlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIHN0cmluZyBvYmplY3QgYWdhaW5zdCB0aGUgZ2l2ZW4gY29tcGlsZWQgcXVlcnkgc3RyaW5nLiBGaWVsZHMgd2lsbCBiZSBhZGRlZFxyXG4vLyB0byB0aGUgZ2l2ZW4gcmVzdWx0IG9iamVjdC5cclxuZnVuY3Rpb24gbWF0Y2hRdWVyeVN0cmluZyggYWN0dWFsUXVlcnk6IHsgW1A6IHN0cmluZ106IHN0cmluZ1tdIH0sIHBhcnNlZFF1ZXJ5OiBhcGkuSVBhcnNlZFF1ZXJ5U3RyaW5nLFxyXG5cdFx0XHRcdCBmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdGlmICghcGFyc2VkUXVlcnkpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghYWN0dWFsUXVlcnkpXHJcblx0e1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKCBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzKS5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0aGUgcGF0dGVybmA7XHJcblx0fVxyXG5cclxuXHQvLyBnbyBvdmVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0aGUgcGF0dGVyLiBJZiB0aGVyZSBpcyBhbnkgbm9uLW9wdGlvbmFsXHJcblx0Ly8gcGFyYW1ldGVyIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgYWN0dWFsIFVSTCwgd2UgZmFpbCB0aGUgbWF0Y2guXHJcblx0Zm9yKCBsZXQgcXNwTmFtZSBpbiBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzKVxyXG5cdHtcclxuXHRcdGlmIChhY3R1YWxRdWVyeVtxc3BOYW1lXSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IGhhdmUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfSdgO1xyXG5cdH1cclxuXHJcblx0Ly8gZ28gb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBpbiB0aGUgYWN0dWFsIFVSTFxyXG5cdGZvciggbGV0IHFzcE5hbWUgaW4gYWN0dWFsUXVlcnkpXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGlzIG5hbWUgaW4gdGhlIHBhdHRlcm4uIElmIHRoZSBwYXR0ZXJuIGRvZXNuJ3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciBhbmQgdGhlXHJcblx0XHQvLyBwYXR0ZXJuIGRvZXNuJ3QgYWxsb3cgZm9yIGV4dHJhIHBhcmFtZXRlcnMsIHRoZW4gdGhlcmUgaXMgbm8gbWF0Y2guIE90aGVyd2lzZSwgdGhpc1xyXG5cdFx0Ly8gcGFyYW1ldGVyIGlzIHNpbXBseSBpZ25vcmVkLlxyXG5cdFx0bGV0IHBhcnNlZFNlZ21lbnQgPSBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQ7XHJcblx0XHRpZiAoIXBhcnNlZFNlZ21lbnQpXHJcblx0XHR7XHJcblx0XHRcdGlmICghcGFyc2VkUXVlcnkuYWxsb3dFeHRyYVF1ZXJ5UGFyYW1zKVxyXG5cdFx0XHRcdHJldHVybiBgVVJMIGhhcyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyB0aGF0IGlzIG5vdCBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmb3Igc2luZ3VsYXIgc2VnbWVudCB0aGUgcGFyYW1ldGVyIG11c3QgYmUgcHJlc2VudCBvbmx5IG9uY2VcclxuXHRcdFx0bGV0IHFzcFZhbHVlcyA9IGFjdHVhbFF1ZXJ5W3FzcE5hbWVdO1xyXG5cdFx0XHRpZiAoIXBhcnNlZFNlZ21lbnQuaXNNdWx0aSAmJiBxc3BWYWx1ZXMubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRyZXR1cm4gYFVSTCBoYXMgbXVsdGlwbGUgdmFsdWVzIGZvciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyB3aGlsZSBwYXR0ZXJuIGRvZXNuJ3Qgc3BlY2lmeSBpdCBhcyBtdWx0aWA7XHJcblxyXG5cdFx0XHRmb3IoIGxldCBxc3BWYWx1ZSBvZiBxc3BWYWx1ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIXRyeU1hdGNoU2luZ2xlU2VnbWVudCggcXNwVmFsdWUsIHBhcnNlZFNlZ21lbnQsIGZpZWxkcykpXHJcblx0XHRcdFx0XHRyZXR1cm4gYFVSTCdzIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nIGRvZXNuJ3QgbWF0Y2ggdGhhdCBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNZXJnZXMgZmllbGQgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBvYmplY3QgdG8gdGhlIHRhcmdldCBvbmUuXHJcbmZ1bmN0aW9uIG1lcmdlRmllbGRzKCB0YXJnZXQ6IHsgW1A6IHN0cmluZ106IGFwaS5GaWVsZFZhbHVlVHlwZSB9LCBzb3VyY2U6IHsgW1A6IHN0cmluZ106IGFwaS5GaWVsZFZhbHVlVHlwZSB9KTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgZmllbGROYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcblx0XHRsZXQgc291cmNlVmFsID0gc291cmNlW2ZpZWxkTmFtZV07XHJcblx0XHRsZXQgdGFyZ2V0VmFsID0gdGFyZ2V0W2ZpZWxkTmFtZV07XHJcblx0XHRpZiAodGFyZ2V0VmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRhcmdldFtmaWVsZE5hbWVdID0gc291cmNlVmFsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBib3RoIHNvdXJjZSBhbmQgdGFyZ2V0IHZhbHVlcyBtdXN0IGJlIGFycmF5c1xyXG5cdFx0XHRsZXQgc291cmNlQXJyID0gc291cmNlVmFsIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRsZXQgdGFyZ2V0QXJyID0gdGFyZ2V0VmFsIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRmb3IoIGxldCBzb3VyY2VJdGVtIG9mIHNvdXJjZUFycilcclxuXHRcdFx0XHR0YXJnZXRBcnIucHVzaCggc291cmNlSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgZmllbGQgdmFsdWUgY29udmVydGVkIHRvIHRoZSByZXF1aXJlZCBmb3JtYXRcclxuZnVuY3Rpb24gY29udmVydEZpZWxkVmFsdWUoIHBhcnNlZEZpZWxkOiBhcGkuSVBhcnNlZEZpZWxkLCBzdHJpbmdWYWx1ZTogc3RyaW5nKTogYXBpLlNpbmdsZUZpZWxkVmFsdWVUeXBlXHJcbntcclxuXHRzd2l0Y2goIHBhcnNlZEZpZWxkLmZvcm1hdClcclxuXHR7XHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5TdHJpbmc6XHJcblx0XHRcdHJldHVybiBzdHJpbmdWYWx1ZTtcclxuXHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5JbnRlZ2VyOlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbiA9IHBhcnNlSW50KCBzdHJpbmdWYWx1ZSk7XHJcblx0XHRcdHJldHVybiBpc05hTiggbikgPyBzdHJpbmdWYWx1ZSA6IG47XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuRmxvYXQ6XHJcblx0XHR7XHJcblx0XHRcdGxldCBmID0gcGFyc2VGbG9hdCggc3RyaW5nVmFsdWUpO1xyXG5cdFx0XHRyZXR1cm4gaXNOYU4oIGYpID8gc3RyaW5nVmFsdWUgOiBmO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkJvb2w6XHJcblx0XHR7XHJcblx0XHRcdGxldCB2ID0gc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKHYgPT09IFwidHJ1ZVwiIHx8IHYgPT09IFwidFwiIHx8IHYgPT09IFwieWVzXCIgfHwgdiA9PT0gXCJ5XCIgfHwgdiA9PT0gXCIxXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHYgPT09IFwiZmFsc2VcIiB8fCB2ID09PSBcImZcIiB8fCB2ID09PSBcIm5vXCIgfHwgdiA9PT0gXCJuXCIgfHwgdiA9PT0gXCIwXCIpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHN0cmluZ1ZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdHJpbmdWYWx1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDb21waWxlZFNlZ21lbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBzaG91bGQgYmUgY29tcGFyZWQgdG8gYVxyXG4vLyBzZWdtZW50IGZyb20gdGhlIGFjdHVhbCBVUkwgcGFydC4gQ29tcGlsZWQgc2VnbWVudCBjb250YWlucyB0aGUgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIGZsYWdcclxuLy8gaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgc2VnbWVudCBpcyBvcHRpb25hbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIENvbXBpbGVkU2VnbWVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwYXJzZWQgc2VnbWVudCBvYmplY3QuXHJcblx0cGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHNlZ21lbnQgaXMgb3B0aW9uYWwuIEZvciBlYWNoIFwib25lLW9yLW1vcmVcIiBwYXJzZWQgc2VnZW1lbnRzXHJcblx0Ly8gd2UgY3JlYXRlIHR3byBjb21waWxlZCBzZWdtZW50czogdGhlIGZpcnN0IGlzIG1hbmRhdG9yeSBhbmQgdGhlIHNlY29uZCBpcyBvcHRpb25hbC4gVGhhdCdzXHJcblx0Ly8gd2h5IHdlIGhhdmUgdGhpZSBpc09wdGlvbmFsIGZsYWcgaGVyZS5cclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50LCBpc09wdGlvbmFsOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHRoaXMucGFyc2VkU2VnbWVudCA9IHBhcnNlZFNlZ21lbnQ7XHJcblx0XHR0aGlzLmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFVybFBhdHRlcm5NYXRjaFJlc3VsdCBjbGFzcyBkZXNjcmliZXMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBhIFVSTCB0byBhIHBhdHRlcm4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgaW1wbGVtZW50cyBhcGkuSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBtYXRjaCB3YXMgc3VjY2Vzc3VsICovXHJcblx0cHVibGljIGdldCBzdWNjZXNzKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuZXJyb3JzIHx8IHRoaXMuZXJyb3JzLmxlbmd0aCA9PT0gMDsgfVxyXG5cclxuXHQvKiogUGFyc2VkIGFjdHVhbCBVUkwgKi9cclxuXHRwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMO1xyXG5cclxuXHQvKiogRXJyb3Igb2JqZWN0IGluIGNhc2UgdGhlIG1hdGNoIHdhcyBub3Qgc3VjY2Vzc2Z1bCAqL1xyXG5cdHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogRmllbGQgbmFtZXMgYW5kIHZhbHVlcyAqL1xyXG5cdHB1YmxpYyBmaWVsZHM6IGFwaS5GaWVsZEJhZztcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW11cmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaVwiO1xyXG4iLCJpbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vYXBpXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBhcnNlcidzIGVudHJ5IGZ1bmN0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGF0dGVybiggcGF0dGVyblN0cmluZzogc3RyaW5nKTogYXBpLklQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHQvLyBpbml0aWFsaXplIGdsb2JhbCB2YXJpYWJsZXNcclxuXHRnX3BhdHRlcm5TdHJpbmcgPSBwYXR0ZXJuU3RyaW5nO1xyXG5cdGdfcGF0dGVyblN0cmluZ0xlbmd0aCA9IDA7XHJcblx0Z19jdXJySW5kZXggPSAwO1xyXG5cdGdfY3VyckNoYXIgPSAnJztcclxuXHJcblx0aWYgKCFwYXR0ZXJuU3RyaW5nKVxyXG5cdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBcIlVSTCBwYXR0ZXJuIGNhbm5vdCBiZSBlbXB0eVwiKTtcclxuXHJcblx0Z19wYXR0ZXJuU3RyaW5nTGVuZ3RoID0gcGF0dGVyblN0cmluZy5sZW5ndGg7XHJcblx0Z19jdXJyQ2hhciA9IHBhdHRlcm5TdHJpbmdbMF07XHJcblxyXG5cdC8vIENyZWF0ZSB0aGUgdG9wLWxldmVsIHBhcnNpbmcgb2JqZWN0IGFuZCBydW4gdGhlIHBhcnNpbmcgcHJvY2Vzcy5cclxuXHRsZXQgcGFyc2VkUGF0dGVybiA9IG5ldyBQYXJzZWRVcmxQYXR0ZXJuKCk7XHJcblx0cGFyc2VkUGF0dGVybi5wYXJzZSgpO1xyXG5cdHJldHVybiBwYXJzZWRQYXR0ZXJuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbmUgXCJnbG9iYWxcIiB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSB0byBhbGwgb2JqZWN0cyBpbiB0aGlzIG1vZHVsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIFBhdHRlcm4gc3RyaW5nIGJlaW5nIHBhcnNlZFxyXG5sZXQgZ19wYXR0ZXJuU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4vLyBMZW5ndGggb2YgdGhlIHBhdHRlcm4gc3RyaW5nXHJcbmxldCBnX3BhdHRlcm5TdHJpbmdMZW5ndGg6IG51bWJlcjtcclxuXHJcbi8vIEluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgaW4gdGhlIHBhdHRlcm4gc3RyaW5nIHRoYXQgdGhlIHBhcnNlciBpcyBjdXJyZW50bHkgd29ya2luZyB3aXRoLlxyXG5sZXQgZ19jdXJySW5kZXg6IG51bWJlcjtcclxuXHJcbi8vIENoYXJhY3RlciBpbiB0aGUgcGF0dGVybiBzdHJpbmcgdW5kZXIgdGhlIGN1cnJlbnQgaW5kZXguXHJcbmxldCBnX2N1cnJDaGFyOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbmUgXCJnbG9iYWxcIiBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSB0byBhbGwgb2JqZWN0cyBpbiB0aGlzIG1vZHVsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIERldGVybWluZXMgaWYgd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLlxyXG5mdW5jdGlvbiBnX2lzRW5kKCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBnX2N1cnJJbmRleCA+PSBnX3BhdHRlcm5TdHJpbmdMZW5ndGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhyb3dzIGV4Y2VwdGlvbiBpZiB3ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uXHJcbmZ1bmN0aW9uIGdfY2hlY2tFbmQoKTogdm9pZFxyXG57XHJcblx0aWYgKGdfY3VyckluZGV4ID09PSBnX3BhdHRlcm5TdHJpbmdMZW5ndGgpXHJcblx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIFVSTCBwYXR0ZXJuIGVuZGApO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIHRoZSBnaXZlbiBudW1iZXIgb2YgY2hhcmFjdGVycyBmcm9tIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxyXG5mdW5jdGlvbiBnX21vdmUoIGQ6IG51bWJlciA9IDEpOiBib29sZWFuXHJcbntcclxuXHRpZiAoZ19jdXJySW5kZXggPD0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoIC0gZClcclxuXHR7XHJcblx0XHRnX2N1cnJJbmRleCArPSBkO1xyXG5cdFx0Z19jdXJyQ2hhciA9IGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleF07XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGdfY3VyckluZGV4ID0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNb3ZlcyB0byB0aGUgZ2l2ZW4gcG9zaXRpb24gaW4gdGhlIGJ1ZmZlci5cclxuZnVuY3Rpb24gZ19tb3ZlVG8oIGk6IG51bWJlcik6IGJvb2xlYW5cclxue1xyXG5cdGdfY3VyckluZGV4ID0gaTtcclxuXHRpZiAoZ19jdXJySW5kZXggPCBnX3BhdHRlcm5TdHJpbmdMZW5ndGgpXHJcblx0e1xyXG5cdFx0Z19jdXJyQ2hhciA9IGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleF07XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGlzIGEgZGVsaW1pdGVyIHRoYXQgY2Fubm90IGJlIHVzZWQgYXMgdGV4dCB3aXRoaW4gVVJMXHJcbmZ1bmN0aW9uIGdfaXNEZWxpbWl0ZXIoIGM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBcIiFAIyQlXiYqKCkrPVtde306O1xcXCInPD4sLj8vfFxcXFxgflwiLmluZGV4T2YoYykgPj0gMDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFVybFBhdHRlcm4gY2xhc3MgaXMgdGhlIHRvcC1sZXZlbCBvYmplY3QgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIFVSTCBwYXJzaW5nLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkVXJsUGF0dGVybiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0Ly8gT3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgZm9yIHdoaWNoIHRoaXMgb2JqZWN0IHdhcyBjcmVhdGVkLlxyXG5cdHB1YmxpYyBwYXR0ZXJuU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdC8vIFByb3RvY29sIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcHJvdG9jb2woKTogYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUHJvdG9jb2xdIGFzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gSG9zdG5hbWUgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBob3N0bmFtZSgpOiBhcGkuSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0Lkhvc3RuYW1lXSBhcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUG9ydCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHBvcnQoKTogYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUG9ydF0gYXMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBQYXRoIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcGF0aCgpOiBhcGkuSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlBhdGhdIGFzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBRdWVyeSBTdHJpbmcgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBxdWVyeSgpOiBhcGkuSVBhcnNlZFF1ZXJ5U3RyaW5nXHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5RdWVyeV0gYXMgUGFyc2VkUXVlcnlTdHJpbmcgfVxyXG5cclxuXHQvLyBIYXNoIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgaGFzaCgpOiBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5IYXNoXSBhcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIEFycmF5IG9mIFVSTCBwYXJ0LiBJbmRleGVzIGFyZSB2YWx1ZXMgZnJvbSB0aGUgVXJsUGFydCBlbnVtZXJhdGlvbi5cclxuXHRwdWJsaWMgcGFydHM6IFBhcnNlZFVybFBhcnRbXTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5wYXR0ZXJuU3RyaW5nID0gZ19wYXR0ZXJuU3RyaW5nO1xyXG5cdFx0dGhpcy5wYXJ0cyA9IFtdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJzZXMgdGhlIGVudGlyZSBVUkwgcGF0dGVybiBwYXJ0IGJ5IHBhcnRcclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb2YgcGFyc2luZyBVUkwgcGFydHNcclxuXHRcdGZvciggbGV0IHBhcnQgPSB0aGlzLmZpbmRGaXJzdFVybFBhcnQoKTsgcGFydCAhPT0gbnVsbDsgcGFydCA9IHBhcnQuZ2V0TmV4dFVybFBhcnQoKSlcclxuXHRcdHtcclxuXHRcdFx0cGFydC5wYXJzZSgpO1xyXG5cdFx0XHR0aGlzLnBhcnRzW3BhcnQudXJsUGFydF0gPSBwYXJ0O1xyXG5cdFx0XHRpZiAoZ19pc0VuZCgpKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHRoZSBmaXJzdCBVUkwgcGFydCB0aGUgcGFyc2VyIHdpbGwgYmUgd29ya2luZyBvbi5cclxuXHRwcml2YXRlIGZpbmRGaXJzdFVybFBhcnQoKTogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSBcIi9cIilcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdfcGF0dGVyblN0cmluZ0xlbmd0aCA+IDEgJiYgZ19wYXR0ZXJuU3RyaW5nWzFdID09PSBcIi9cIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGdfbW92ZSgyKTtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQYXRoKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGluZGV4ID0gZ19wYXR0ZXJuU3RyaW5nLmluZGV4T2YoIFwiOi8vXCIpO1xyXG5cdFx0XHRpZiAoaW5kZXggPiAwKVxyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkUHJvdG9jb2woKTtcclxuXHRcdFx0ZWxzZSBpZiAoaW5kZXggPCAwKVxyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkSG9zdG5hbWUoKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggXCJVUkwgcGF0dGVybiBjYW5ub3Qgc3RhcnQgZnJvbSAnOi8vJ1wiKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRUb2tlbiBpcyBhIGJhc2UgY2xhc3MgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkVG9rZW5cclxue1xyXG5cdC8vIExvY2F0aW9uIG9mIHRoZSBwYXJ0IGluIHRoZSBvcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBjb250YWluaW5nIHRoZSB6ZXJvLWJhc2VkIGluZGV4IHdoZXJlXHJcblx0Ly8gdGhlIHBhcnQgYmVnaW5zIGFuZCBpdHMgbGVuZ3RoLlxyXG5cdGxvY2F0aW9uOiB7IHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyIH07XHJcblxyXG5cdC8qKiBDb250ZW50IG9mIHRoZSB0b2tlbiAqL1xyXG5cdHRva2VuU3Rpbmc6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHRoaXMubG9jYXRpb24gPSB7IHN0YXJ0OiBnX2N1cnJJbmRleCwgbGVuZ3RoOiAwIH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluYWxpemUoKVxyXG5cdHtcclxuXHRcdHRoaXMubG9jYXRpb24ubGVuZ3RoID0gZ19jdXJySW5kZXggLSB0aGlzLmxvY2F0aW9uLnN0YXJ0O1xyXG5cdFx0dGhpcy50b2tlblN0aW5nID0gZ19wYXR0ZXJuU3RyaW5nLnN1YnN0ciggdGhpcy5sb2NhdGlvbi5zdGFydCwgdGhpcy5sb2NhdGlvbi5sZW5ndGgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFVybFBhcnQgaXMgYSBiYXNlIGNsYXNzIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkVXJsUGFydCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHVybFBhcnQ6IGFwaS5FVXJsUGFydDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbXBhcmlzb24gb2YgdGhpcyBwYXJ0IHNob2xkIGJlIGNhc2Utc2Vuc2l0aXZlIG9yIG5vdC5cclxuXHRjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy51cmxQYXJ0ID0gdXJsUGFydDtcclxuXHRcdHRoaXMuY2FzZVNlbnNpdGl2ZSA9IGNhc2VTZW5zaXRpdmU7XHJcblx0fVxyXG5cclxuXHQvLyBQYXJzZXMgdGhpcyB0b2tlblxyXG5cdHB1YmxpYyBhYnN0cmFjdCBwYXJzZSgpOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBVUkwgcGFydCBzaG91bGQgYmUgcGFyc2VkIGNhc2Utc2Vuc2l0aXZlbHkuXHJcblx0cHVibGljIGFic3RyYWN0IGlzQ2FzZVNlbnNpdGl2ZSgpOiBib29sZWFuO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIGFuZCBjcmF0ZXMgaWYgbmVjZXNzYXJ5IHRoZSBuZXh0IFVSTCBwYXJ0IGJhc2VkIG9uIHRoZSBjdXJyZW50IGNoYXJhY3RlclxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydDtcclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuLy8gZGVmaW5lIGEgc2luZ2xlIHNlZ21lbnQ6IHByb3RvY29sLCBwb3J0IGFuZCBoYXNoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Ly8gVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy5cclxuXHRzZWdtZW50OiBQYXJzZWRTZWdtZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvciggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB1cmxQYXJ0LCBjYXNlU2Vuc2l0aXZlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0c2VnbWVudC5wYXJzZSggdGhpcy5nZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpLCBmYWxzZSwgdGhpcy5pc0Nhc2VTZW5zaXRpdmUoKSk7XHJcblx0XHR0aGlzLnNlZ21lbnQgPSBzZWdtZW50O1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXSB7IHJldHVybiBbdGhpcy5zZWdtZW50XTsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVyLCB3aGljaCBpbmRpY2F0ZSBzZWdtZW50IGVuZCBmb3IgdGhlIGdpdmVuIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4vLyBjYW4gZGVmaW5lIG11bHRpcGxlIHNlZ21lbnRzOiBob3N0bmFtZSBhbmQgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHNlZ21lbnRzOiBQYXJzZWRTZWdtZW50W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVybFBhcnQsIGNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5zZWdtZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcGFydEVuZENoYXJhY3RlcnMgPSB0aGlzLmdldFBhcnRFbmRDaGFyYWN0ZXJzKCk7XHJcblxyXG5cdFx0Ly8gcGFyc2Ugc2VnbWVudHMgdW50aWwgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzIHRoZSBlbmQgb2YgdGhlIFVSTCBwYXJ0XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0XHRzZWdtZW50LnBhcnNlKCB0aGlzLmdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCksIHRydWUsIHRoaXMuaXNDYXNlU2Vuc2l0aXZlKCkpO1xyXG5cdFx0XHR0aGlzLnNlZ21lbnRzLnB1c2goIHNlZ21lbnQpO1xyXG5cdFx0XHRpZiAocGFydEVuZENoYXJhY3RlcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W10geyByZXR1cm4gdGhpcy5zZWdtZW50czsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVyLCB3aGljaCBpbmRpY2F0ZSBzZWdtZW50IGVuZCBmb3IgdGhlIGdpdmVuIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRQYXJ0RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQcm90b2NvbCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcHJvdG9jb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRQcm90b2NvbCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5Qcm90b2NvbCwgZmFsc2UpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCI6XCI7IH1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgVVJMIHBhcnQgc2hvdWxkIGJlIHBhcnNlZCBjYXNlLXNlbnNpdGl2ZWx5LlxyXG5cdHB1YmxpYyBpc0Nhc2VTZW5zaXRpdmUoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gXCI6XCIgJiYgZ19jdXJySW5kZXggKyAyIDwgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoICYmXHJcblx0XHRcdGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleCsxXSA9PT0gXCIvXCIgJiYgZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4KzJdID09PSBcIi9cIilcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKDMpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdGxldCBwYXJ0ID0gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdHJldHVybiBwYXJ0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlcnMgYWZ0ZXIgcHJvdG9jb2wgcGFydGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEhvc3RuYW1lIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBob3N0bmFtZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEhvc3RuYW1lIGV4dGVuZHMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuSG9zdG5hbWUsIGZhbHNlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLjovPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0UGFydEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiOi8/I1wiOyB9XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGlzIFVSTCBwYXJ0IHNob3VsZCBiZSBwYXJzZWQgY2FzZS1zZW5zaXRpdmVseS5cclxuXHRwdWJsaWMgaXNDYXNlU2Vuc2l0aXZlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc6JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQb3J0KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnLycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUGF0aCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFF1ZXJ5U3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAke2dfY3VyckNoYXJ9IGFmdGVyIGhvc3RuYW1lIHNlZ21lbnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQb3J0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwb3J0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUG9ydCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5Qb3J0LCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIi8/I1wiOyB9XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGlzIFVSTCBwYXJ0IHNob3VsZCBiZSBwYXJzZWQgY2FzZS1zZW5zaXRpdmVseS5cclxuXHRwdWJsaWMgaXNDYXNlU2Vuc2l0aXZlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICcvJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQYXRoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUXVlcnlTdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICR7Z19jdXJyQ2hhcn0gYWZ0ZXIgcG9ydCBwYXJ0YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUGF0aCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFBhdGggZXh0ZW5kcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5QYXRoLCB0cnVlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIj8jXCI7IH1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgVVJMIHBhcnQgc2hvdWxkIGJlIHBhcnNlZCBjYXNlLXNlbnNpdGl2ZWx5LlxyXG5cdHB1YmxpYyBpc0Nhc2VTZW5zaXRpdmUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUXVlcnlTdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyIGFmdGVyIHBhdGggc2VnbWVudGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFF1ZXJ5U3RyaW5nIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUXVlcnlTdHJpbmcgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRRdWVyeVN0cmluZ1xyXG57XHJcblx0Ly8gUXVlcnkgc3RyaW5nIGRlZmluZXMgb25lIHNlZ2VtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLlxyXG5cdHBhcnNlZFFTUHM6IHsgW1A6IHN0cmluZ106IGFwaS5JUGFyc2VkUVNQIH07XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIG5vdCBzcGVjaWZpZWQgZXhwbGljaXRseSBpbiB0aGUgcGF0dGVyblxyXG5cdC8vIHdpbGwgYmUgYWxsb3dlZCB3aGVuIHBhcnNpbmcgYWN0dWFsIFVSTHMuXHJcblx0YWxsb3dFeHRyYVF1ZXJ5UGFyYW1zOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGFwaS5FVXJsUGFydC5RdWVyeSwgdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy5wYXJzZWRRU1BzID0ge307XHJcblx0XHR0aGlzLmFsbG93RXh0cmFRdWVyeVBhcmFtcyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHBhcnNlIHNlZ21lbnRzIHVudGlsIHRoZSBjdXJyZW50IGNoYXJhY3RlciBpcyB0aGUgZW5kIG9mIHRoZSBVUkwgcGFydFxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgZ19jdXJyQ2hhciAhPT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJyEnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gc3BlY2lhbCBjYXNlIGZvciBkaXNhYmxpbmcgbWF0Y2hpbmcgd2l0aCBleHRyYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xyXG5cdFx0XHRcdHRoaXMuYWxsb3dFeHRyYVF1ZXJ5UGFyYW1zID0gZmFsc2U7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHFzcCA9IG5ldyBQYXJzZWRRU1AoKTtcclxuXHRcdFx0XHRxc3AucGFyc2UoKTtcclxuXHRcdFx0XHRpZiAocXNwLm5hbWUgaW4gdGhpcy5wYXJzZWRRU1BzKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciAke3FzcC5uYW1lfSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlYCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZWRRU1BzW3FzcC5uYW1lXSA9IHFzcDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGlzIFVSTCBwYXJ0IHNob3VsZCBiZSBwYXJzZWQgY2FzZS1zZW5zaXRpdmVseS5cclxuXHRwdWJsaWMgaXNDYXNlU2Vuc2l0aXZlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgYWZ0ZXIgcXVlcnkgc3RyaW5nIHNlZ21lbnRgKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W11cclxuXHR7XHJcblx0XHRsZXQgc2VnbWVudHM6IFBhcnNlZFNlZ21lbnRbXSA9IFtdO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xyXG5cdFx0Zm9yKCBsZXQgcXNwTmFtZSBpbiB0aGlzLnBhcnNlZFFTUHMpXHJcblx0XHRcdHNlZ21lbnRzLnB1c2goIHRoaXMucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50IGFzIFBhcnNlZFNlZ21lbnQpO1xyXG5cclxuXHRcdHJldHVybiBzZWdtZW50cztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRIYXNoIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBoYXNoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkSGFzaCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5IYXNoLCB0cnVlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiXCI7IH1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgVVJMIHBhcnQgc2hvdWxkIGJlIHBhcnNlZCBjYXNlLXNlbnNpdGl2ZWx5LlxyXG5cdHB1YmxpYyBpc0Nhc2VTZW5zaXRpdmUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFFTUCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBtYXRjaGluZyBhIHNpbmdsZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUVNQIGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFFTUFxyXG57XHJcblx0Ly8gUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBuYW1lLlxyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gUXVlcnkgU3RyaW5nIGRlZmluZXMgb25lIHNlZ2VtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLlxyXG5cdHNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcGFyYW1ldGVyIG5hbWVcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIFwiPSYjXCIuaW5kZXhPZiggZ19jdXJyQ2hhcikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm5hbWUgKz0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0aWYgKCF0aGlzLm5hbWUpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgZG9lc24ndCBoYXZlIG5hbWVgKTtcclxuXHJcblx0XHRpZiAoZ19jdXJyQ2hhciAhPT0gJz0nKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGRvZXNuJ3QgaGF2ZSB2YWx1ZWApO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRsZXQgc2VnbWVudCA9IG5ldyBQYXJzZWRTZWdtZW50KCk7XHJcblx0XHRcdHNlZ21lbnQucGFyc2UoIFwiJiNcIiwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuc2VnbWVudCA9IHNlZ21lbnQ7XHJcblx0XHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHRcdFx0aWYgKGdfY3VyckNoYXIgPSAnJicpXHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGlzTmFtZUVuZENoYXJhY3RlciggYzogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHJldHVybiBcIj0mI1wiLmluZGV4T2YoIGMpID49IDA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkU2VnbWVudCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHNlZ21lbnQgaW4gYSBVUkwgcGF0dGVybiB0aGF0IGNhbiBiZSBtYXRjaGVkIHRvIG9uZVxyXG4vLyBvciBtb3JlIHBhcnRzIG9mIGFuIGFjdHVhbCBVUkwuIEVhY2ggc2VnbWVudCBjYW4gaGF2ZSB6ZXJvIG9yIG1vcmUgZmllbGRzIGRlZmluZWQgaW4gaXQuXHJcbi8vIEEgZmllbGQgaXMgZGVmaW5lZCBlaXRoZXIgd2l0aCBvciB3aXRob3V0IGEgbmFtZS4gVW5uYW1lZCBmaWVsZHMgYXJlIGFsc28gY2FsbGVkXHJcbi8vIGFub255bW91cyBhbmQgdGhleSBhcmUgYXNzb2NpYXRlZCB3aXRoIGFuIGluZGV4LiBXaGVuIHRoZSBVUkwgcGF0dGVybiBpcyBwYXJzZWQgaW50byBzZWdtZW50cyxcclxuLy8gdGhlIGFub255bW91cyBmaWVsZHMgYXJlIG51bWJlcmVkIHNlcXVlbnRpYWxseSBhY2Nyb3NzIG11bHRpcGxlIHNlZ21lbnRzLiBUaGF0IG1lYW5zIHRoYXRcclxuLy8gaW5kZXhlcyBkbyBub3QgcmVzdGFydCBmb3IgZWFjaCBzZWdtZW50IGFuZCB0aHVzIGluZGV4ZXMgZm9yIGEgc2VnbWVudCdzIGZpZWxkcyBtYXkgbm90XHJcbi8vIHN0YXJ0IGZyb20gemVyby5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFNlZ21lbnQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkU2VnbWVudFxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWxcclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBjYW4gYmUgcmVwZWF0ZWQgbXV0aXBsZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgYm90aFxyXG5cdC8vIG9wdGlvbmFsIGFuZCBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgemVybyBvciBtb3JlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBub3Qgb3B0aW9uYWwgYnV0XHJcblx0Ly8gbXVsdGkgY2FuIGJlIHJlcGVhdGVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG5cdGlzTXVsdGk6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBBcnJheSBvZiBmaWVsZHMuICovXHJcblx0ZmllbGRzOiBQYXJzZWRGaWVsZFtdO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzZWdtZW50J3MgbWF0Y2ggcGF0dGVybi5cclxuXHRyZWdFeHA6IFJlZ0V4cDtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzTXVsdGkgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmllbGRzID0gW107XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBwYXJzZSggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcsIGlzUG90ZW50aWFsbHlNdWx0aTogYm9vbGVhbiwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhbmFseXplIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIHNlZ21lbnQgYW5kIGlmIGl0IHdhcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHRoYXRcclxuXHRcdC8vIGRldGVybWluZXMgdGhlIHNlZ21lbnRzIG9wdGlvbmFsIGFuZCBtdWx0aSBmbGFncywgbW92ZSB0byB0aGUgbmV4dCBjaGFyYWN0ZXIuXHJcblx0XHRpZiAodGhpcy5hbmFsaXplRmlyc3RDaGFyKCBzZWdtZW50RW5kQ2hhcnMsIGlzUG90ZW50aWFsbHlNdWx0aSkpXHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cclxuXHRcdC8vIG1hdGNoIHBhdHRlcm4gb2YgdGhlIHNlZ21lbnQgY29uc2lzdGluZyBvZiBlbGVtZW50cyBlYWNoIG9mIHdoaWNoIGlzIGVpdGhlciB0ZXh0IG9yXHJcblx0XHQvLyByZWd1bGFyIGV4cHJlc3Npb24gb3IgZmllbGRcclxuXHRcdGxldCBtYXRjaFBhdHRlcm46IChQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHApW10gPSBbXTtcclxuXHJcblx0XHQvLyBwYXJzZSB0b2tlbnMgaW4gdGhlIHNlZ21lbnQgKHRleHQsIHJlZ2V4cCwgZmllbGRzKSB1bnRpbCBlaXRoZXIgd2UgcmVhY2ggdGhlIGVuZCBvZlxyXG5cdFx0Ly8gdGhlIGVudGlyZSBVUkwgcGF0dGVybiBvciB3ZSBlbmNvdW50ZXIgYSBzZWdtZW50IGRlbGltaXRlclxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHRva2VuOiBQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHA7XHJcblx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAneycpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRsZXQgZmllbGQgPSBuZXcgUGFyc2VkRmllbGQoKTtcclxuXHRcdFx0XHRmaWVsZC5wYXJzZSggc2VnbWVudEVuZENoYXJzKTtcclxuXHRcdFx0XHR0b2tlbiA9IGZpZWxkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcoJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGxldCByZWdFeHAgPSBuZXcgUGFyc2VkUmVnRXhwKCk7XHJcblx0XHRcdFx0cmVnRXhwLnBhcnNlKCk7XHJcblx0XHRcdFx0dG9rZW4gPSByZWdFeHA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHRleHQgPSBuZXcgUGFyc2VkVGV4dCgpO1xyXG5cdFx0XHRcdHRleHQucGFyc2UoIHNlZ21lbnRFbmRDaGFycyArIFwieyhcIik7XHJcblx0XHRcdFx0dG9rZW4gPSB0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRjaFBhdHRlcm4ucHVzaCggdG9rZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2VuZXJhdGVSZWdFeHAoIG1hdGNoUGF0dGVybiwgY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFuYWxpemVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIHNlZ21lbnQgYW5kIHJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyXHJcblx0Ly8gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWwgYW5kIHdoZXRoZXIgaXQgaXMgXCJtdWx0aVwiLlxyXG5cdHByaXZhdGUgYW5hbGl6ZUZpcnN0Q2hhciggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcsIGlzUG90ZW50aWFsbHlNdWx0aTogYm9vbGVhbik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzd2l0Y2goIGdfY3VyckNoYXIpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgJz8nOiB0aGlzLmlzT3B0aW9uYWwgPSB0cnVlOyByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0Y2FzZSAnISc6IHJldHVybiB0cnVlO1xyXG5cclxuXHRcdFx0Y2FzZSAnKic6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWlzUG90ZW50aWFsbHlNdWx0aSlcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFNpbmdsZS1zZWdlbWVudCBVUkwgcGFydCBjYW5ub3QgaGF2ZSBzZWdtZW50IHN0YXJ0aW5nIGZyb20gJyonYCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNPcHRpb25hbCA9IHRoaXMuaXNNdWx0aSA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNhc2UgJysnOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFpc1BvdGVudGlhbGx5TXVsdGkpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBTaW5nbGUtc2VnZW1lbnQgVVJMIHBhcnQgY2Fubm90IGhhdmUgc2VnbWVudCBzdGFydGluZyBmcm9tICcrJ2ApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmlzTXVsdGkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRW1wdHkgc2VnbWVudCBlbmNvdW50ZXJlZGApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBkZXNjcmliaW5nIHRoZSBzZWdtZW50LlxyXG5cdHByaXZhdGUgZ2VuZXJhdGVSZWdFeHAoIG1hdGNoUGF0dGVybjogKFBhcnNlZFRleHQgfCBQYXJzZWRGaWVsZCB8IFBhcnNlZFJlZ0V4cClbXSxcclxuXHRcdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gMS1iYXNlZCBpbmRleCBvZiB0aGUgUmVnRXhwIGNhcHR1cmluZyBncm91cC4gV2UgbmVlZCB0byBjb3VudCBjYXB0dXJpbmcgZ3JvdXBzIGluXHJcblx0XHQvLyBvcmRlciB0byBsYXRlciBnZXQgdmFsdWVzIG9mIG5hbWVkIGFuZCBhbm9ueW1vdXMgZmllbGRzLlxyXG5cdFx0bGV0IG5leHRDYXB0dXJpbmdHcm91cEluZGV4ID0gMTtcclxuXHJcblx0XHRsZXQgcmVnRXhwU3RyaW5nID0gXCJcIjtcclxuXHRcdGlmIChtYXRjaFBhdHRlcm4ubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZWdFeHBTdHJpbmcgKz0gXCIuK1wiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB0b2tlbiBvZiBtYXRjaFBhdHRlcm4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRUZXh0KVxyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IHRva2VuLmNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRSZWdFeHApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IFwiKFwiICsgdG9rZW4uY29udGVudCArIFwiKVwiO1xyXG5cdFx0XHRcdFx0bmV4dENhcHR1cmluZ0dyb3VwSW5kZXggKz0gMSArIHRva2VuLmNhcHR1cmluZ0dyb3VwUXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIC8vIGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlZEZpZWxkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRva2VuLmlzQXJyYXkgPSB0aGlzLmlzTXVsdGk7XHJcblx0XHRcdFx0XHR0b2tlbi5pbmRleCA9IG5leHRDYXB0dXJpbmdHcm91cEluZGV4O1xyXG5cdFx0XHRcdFx0dGhpcy5maWVsZHMucHVzaCggdG9rZW4pO1xyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IHRoaXMuZ2VuZXJhdGVSZWdFeHBTZWN0aW9uRm9yRmllbGQoIHRva2VuKTtcclxuXHRcdFx0XHRcdG5leHRDYXB0dXJpbmdHcm91cEluZGV4Kys7XHJcblx0XHRcdFx0XHRpZiAodG9rZW4ubWF0Y2hQYXR0ZXJuKVxyXG5cdFx0XHRcdFx0XHRuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCArPSAxICsgdG9rZW4ubWF0Y2hQYXR0ZXJuLmNhcHR1cmluZ0dyb3VwUXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVnRXhwID0gbmV3IFJlZ0V4cCggcmVnRXhwU3RyaW5nLCBjYXNlU2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gZ3JvdXAgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuXHRwcml2YXRlIGdlbmVyYXRlUmVnRXhwU2VjdGlvbkZvckZpZWxkKCBwYXJzZWRGaWVsZDogUGFyc2VkRmllbGQpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcyA9IFwiKFwiO1xyXG5cdFx0aWYgKHBhcnNlZEZpZWxkLm1hdGNoUGF0dGVybiAmJiBwYXJzZWRGaWVsZC5tYXRjaFBhdHRlcm4uY29udGVudClcclxuXHRcdHtcclxuXHRcdFx0cyArPSBgKCR7cGFyc2VkRmllbGQubWF0Y2hQYXR0ZXJuLmNvbnRlbnR9KWA7XHJcblx0XHRcdGlmIChwYXJzZWRGaWVsZC5pc09wdGlvbmFsKVxyXG5cdFx0XHRcdHMgKz0gXCI/XCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChwYXJzZWRGaWVsZC5pc09wdGlvbmFsKVxyXG5cdFx0XHRzICs9IFwiLipcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cyArPSBcIi4rXCI7XHJcblxyXG5cdFx0cyArPSBcIilcIjtcclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFRleHQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSB0ZXh0IHNlY3Rpb24gd2l0aGluIGEgc2VnbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFRleHQgZXh0ZW5kcyBQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gVGV4dCBzZWN0aW9uIHN0cmluZ1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoIHRleHRFbmRDaGFyczogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIHRleHRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA8IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUmVnRXhwIGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgcmVndWxhciBleHByZXNzaW9uIHNlY3Rpb24gd2l0aGluIGEgc2VnbWVudCBvclxyXG4vLyBmaWVsZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFJlZ0V4cCBleHRlbmRzIFBhcnNlZFRva2VuXHJcbntcclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nXHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgY2FwdHVyaW5nIGdyb3VwcyB3aXRoaW4gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvblxyXG5cdGNhcHR1cmluZ0dyb3VwUXR5OiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gXCJcIjtcclxuXHRcdHRoaXMuY2FwdHVyaW5nR3JvdXBRdHkgPSAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBTdGFjayBvZiBvcGVuaW5nIGFuZCBjbG9zaW5nIGNoYXJhY3RlcnMgKHBhcmVudGhlc2lzLCBicmFja2V0cyBhbmQgY3VybHkgYnJhY2VzKSBmb3JcclxuXHRcdC8vIHBhcnNpbmcgcmVndWxhciBleHByZXNzaW9ucyBzZWN0aW9uLiBSZWd1bGFyIGV4cHJlc3Npb24gc2VjdGlvbiBzdG9wcyB3aGVuIHdlIGVuY291bnRlclxyXG5cdFx0Ly8gY2hhcmFjdGVyICcpJyBhbmQgdGhpcyBzdGFjayBpcyBlbXB0eS5cclxuXHRcdGxldCBzdGFjazogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1cnJDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0aWYgKGN1cnJDaGFyID09PSAnKScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2subGVuZ3RoID09PSAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChzdGFjay5wb3AoKSA9PT0gJygnKVxyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBvcGVuL2Nsb3NlIGNoYXJhY3RlcnMgaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY3VyckNoYXIgPT09ICd9JylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzdGFjay5wb3AoKSA9PT0gJ3snKVxyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBvcGVuL2Nsb3NlIGNoYXJhY3RlcnMgaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY3VyckNoYXIgPT09ICddJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzdGFjay5wb3AoKSA9PT0gJ1snKVxyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBvcGVuL2Nsb3NlIGNoYXJhY3RlcnMgaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoXCIoe1tcIi5pbmRleE9mKCBjdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChjdXJyQ2hhciA9PT0gJygnKVxyXG5cdFx0XHRcdFx0dGhpcy5jYXB0dXJpbmdHcm91cFF0eSsrO1xyXG5cclxuXHRcdFx0XHRzdGFjay5wdXNoKCBjdXJyQ2hhcik7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY3VyckNoYXIgPT09ICdcXFxcJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY29udGVudCArPSBjdXJyQ2hhcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdFx0Y3VyckNoYXIgPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMuY29udGVudCArPSBjdXJyQ2hhcjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBlbmQgdXAgaGVyZSBvbmx5IGlmIHRoZSBVUkwgcGF0dGVybiBlbmRlZCB3aGlsZSB3aXRoaW4gdW5maW5pc2hlZCByZWd1bGFyIGV4cHJlc3Npb25cclxuXHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgVVJMIHBhdHRlcm4gZW5kIHdpdGhpbiByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBmaW5hbGl6ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbnRlbnQpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEVtcHR5IHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cclxuXHRcdHN1cGVyLmZpbmFsaXplKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkRmllbGQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSBmaWVsZCB3aXRoaW4gYSBzZWdtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkRmllbGQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkRmllbGRcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmaWVsZCBpcyBvcHRpb25hbFxyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGZpZWxkLlxyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gRmllbGQgRmllbGRGb3JtYXRcclxuXHRmb3JtYXQ6IGFwaS5GaWVsZEZvcm1hdDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIHZhbHVlIGlzIGFuIGFycmF5LiBUaGlzIGlzIHRydWUgZm9yIGZpZWxkcyB0aGF0IGNhbiBhcHBlYXJcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgVVJMIHBhcnQuXHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYXB0dXJpbmcgZ3JvdXAgY29ycmVzcG9uZGluZyB0byB0aGUgZmllbGQgd2l0aGluIHRoZVxyXG5cdC8vIHNlZ21lbnQuXHJcblx0aW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHN0cmluZyBkZXNjcmliaW5nIHRoZSBtYXRjaGluZyBwYXR0ZXJuIGZvciB0aGUgZmllbGRcclxuXHRtYXRjaFBhdHRlcm46IFBhcnNlZFJlZ0V4cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gZmFsc2U7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlwiO1xyXG5cdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuU3RyaW5nO1xyXG5cdFx0dGhpcy5tYXRjaFBhdHRlcm4gPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBjaGVjayB3aGV0aGVyIHRoaXMgZmllbGQgaXMgb3B0aW9uYWxcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaXNPcHRpb25hbCA9IHRydWU7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBjaGFyYWN0ZXJzIGluIHRoZSBmaWVsZCBuYW1lXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkIGRvZXNuJ3QgaGF2ZSBjbG9zaW5nICd9J2ApO1xyXG5cdFx0XHQvL2Vsc2UgaWYgKG5vbi1hY2NlcHRhYmxlLWNoYXItaW4tZmllbGQtbmFtZSlcclxuXHRcdFx0Ly9cdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBmaWVsZGApO1xyXG5cdFx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnfScgfHwgZ19jdXJyQ2hhciA9PT0gJygnIHx8IGdfY3VyckNoYXIgPT09ICclJylcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5uYW1lICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5uYW1lLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgbXVzdCBoYXZlIG5hbWVgKTtcclxuXHJcblx0XHRnX2NoZWNrRW5kKCk7XHJcblxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICclJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKClcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cclxuXHRcdFx0bGV0IGZvcm1hdENoYXIgPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRpZiAoZm9ybWF0Q2hhciA9PT0gJ2knKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuSW50ZWdlcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChmb3JtYXRDaGFyID09PSAnZicpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5GbG9hdDtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChmb3JtYXRDaGFyID09PSAnYicpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5Cb29sO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gZmllbGQgZm9ybWF0YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z19jaGVja0VuZCgpO1xyXG5cclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnKCcpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRsZXQgcmVnRXhwID0gbmV3IFBhcnNlZFJlZ0V4cCgpO1xyXG5cdFx0XHRyZWdFeHAucGFyc2UoKTtcclxuXHRcdFx0dGhpcy5tYXRjaFBhdHRlcm4gPSByZWdFeHA7XHJcblx0XHR9XHJcblxyXG5cdFx0Z19jaGVja0VuZCgpO1xyXG5cclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnfScpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBmaWVsZGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBlcnJvciB0aGF0IG9jY3VycmVkIGR1cmluZyBwYXJzaW5nIG9mXHJcbi8vIGEgVVJMIHBhdHRlcm4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yIGltcGxlbWVudHMgYXBpLklVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvblxyXG57XHJcblx0Ly8gSW5kZXggaW4gdGhlIHBhdHRlcm4gc3RyaW5nIGF0IHdoaWNoIHRoZWVycm9yIG9jY3VycmVkLlxyXG5cdHBvczogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbWVzc2FnZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnBvcyA9IGdfY3VyckluZGV4O1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gYEVycm9yIGF0IHBvc2l0aW9uICR7dGhpcy5wb3N9XFxuJHttZXNzYWdlfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=