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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/mimurlTypes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/actual.js":
/*!***********************!*\
  !*** ./lib/actual.js ***!
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
        throw new Error("URL cannot start from '://'");
    else if (protocolSeparatorIndex > 0) {
        parsedURL.protocol = url.substr(0, protocolSeparatorIndex);
        if (!isValidProtocol(parsedURL.protocol))
            throw new Error(`Protocol '${parsedURL.protocol}' contains invalid characters`);
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
        for (let i = 0; i < parsedURL.hostname.length; i++) {
            let segment = parsedURL.hostname[i];
            if (!isValidHostnameSegment(segment))
                throw new Error(`Hostname segment '${segment}' contains invalid characters`);
        }
    }
    if (colonIndex > 0) {
        let port;
        if (slashIndex > 0)
            port = url.substr(colonIndex + 1, slashIndex - colonIndex - 1);
        else if (questionIndex > 0)
            port = url.substr(colonIndex + 1, questionIndex - colonIndex - 1);
        else if (hashIndex > 0)
            port = url.substr(colonIndex + 1, hashIndex - colonIndex - 1);
        else
            port = url.substr(colonIndex + 1);
        if (!isValidPort(port))
            throw new Error(`Port '${port}' contains non-numerical characters`);
        parsedURL.port = Number(port);
    }
    // slash can be the first character if there is no hostname
    if (slashIndex >= 0) {
        if (questionIndex > 0)
            parsedURL.path = url.substr(slashIndex + 1, questionIndex - slashIndex - 1).split('/');
        else if (hashIndex > 0)
            parsedURL.path = url.substr(slashIndex + 1, hashIndex - slashIndex - 1).split('/');
        else
            parsedURL.path = url.substr(slashIndex + 1).split('/');
        for (let i = 0; i < parsedURL.path.length; i++) {
            let segment = parsedURL.path[i];
            if (!isValidSegment(segment))
                throw new Error(`Path segment '${segment}' contains invalid characters`);
            try {
                segment = decodeURIComponent(segment);
            }
            catch (err) {
                throw new Error(`Path segment '${segment}' cannot be URL-decoded. Error: ${err.message}`);
            }
            parsedURL.path[i] = segment;
        }
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
            if (!param)
                throw new Error(`Invalid stucture of query string URL part`);
            let arr = param.split('=');
            let name;
            let value;
            if (arr.length > 2)
                throw new Error(`Query string parameter '${param}' has more than one '=' symbol`);
            if (arr.length < 2) {
                name = param;
                value = undefined;
            }
            else {
                name = arr[0];
                value = arr[1];
            }
            if (!isValidQueryParamName(this.name))
                throw new Error(`Query string parameter name '${name}' contains invalid character`);
            if (value) {
                if (!isValidSegment(value))
                    throw new Error(`Value '${value}' of query string parameter '${name}' contains invalid characters`);
                try {
                    value = decodeURIComponent(value);
                }
                catch (err) {
                    throw new Error(`Value '${value}' of query string parameter '${name}' cannot be URL-decoded. Error: ${err.message}`);
                }
            }
            if (name in parsedURL.query)
                parsedURL.query[name].push(value);
            else
                parsedURL.query[name] = [value];
        }
    }
    if (hashIndex > 0) {
        let value = url.substr(hashIndex + 1);
        if (!isValidSegment(value))
            throw new Error(`Value '${value}' of hash URL part contains invalid characters`);
        try {
            parsedURL.hash = decodeURIComponent(value);
        }
        catch (err) {
            throw new Error(`Value '${value}' of hash URL part cannot be URL-decoded. Error: ${err.message}`);
        }
    }
    return parsedURL;
}
exports.parseURL = parseURL;
/**
 * Determines whether the given string is a valid protocol URL part. To be valid, it must
 * be alpha-numeric.
 * @param s
 */
function isValidProtocol(s) {
    return /^[a-z0-9]+$/i.test(s);
}
/**
 * Determines whether the given string is a valid segment in the hostname URL part. To be valid,
 * it must be alpha-numeric or underscore '_' or dash '-'.
 * @param s
 */
function isValidHostnameSegment(s) {
    return /^[a-z0-9_\-]+$/i.test(s);
}
/**
 * Determines whether the given string is a valid port URL part. To be valid, it must
 * be numeric.
 * @param s
 */
function isValidPort(s) {
    return /^\d+$/i.test(s);
}
/**
 * Determines whether the given string is a valid segment in path, query string or hash URL part.
 * To be valid, it must be alpha-numeric or undescore '_' or dash '-' or percent sign '%' (for
 * URL-encoded characters).
 * @param s
 */
function isValidSegment(s) {
    return /^[a-z0-9_\-\.%]+$/i.test(s);
}
/**
 * Determines whether the given string is a valid name of a query string parameter.
 * To be valid, it must be alpha-numeric or undescore '_' or dash '-'.
 * @param s
 */
function isValidQueryParamName(s) {
    return /^[a-z0-9_\-]+$/i.test(s);
}


/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file contains the public API of the URL Parsing and Matching library 'mimurl'.
 *
 * To read about mimurl features
 * <a href="https://mmichlin66.github.io/mimurl/about.html" target="_top">please visit here</a>.
 *
 * To play with mimurl pattern parsing and URL matching capabilities
 * <a href="https://mmichlin66.github.io/mimurl/playground.html" target="_top">please visit here</a>.
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
const actual = __webpack_require__(/*! ./actual */ "./lib/actual.js");
const parser = __webpack_require__(/*! ./parser */ "./lib/parser.js");
const matcher = __webpack_require__(/*! ./matcher */ "./lib/matcher.js");
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

/***/ "./lib/matcher.js":
/*!************************!*\
  !*** ./lib/matcher.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api = __webpack_require__(/*! ./api */ "./lib/api.js");
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
    if (typeof actualSegment === "number")
        actualSegment = actualSegment.toString();
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
                // clear temporary fields that might have been filled by the previous (failed)
                // call to tryMatchMultipleSegments.
                tempFields = {};
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

/***/ "./lib/mimurlTypes.js":
/*!****************************!*\
  !*** ./lib/mimurlTypes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimurl
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./api */ "./lib/api.js"));


/***/ }),

/***/ "./lib/parser.js":
/*!***********************!*\
  !*** ./lib/parser.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api = __webpack_require__(/*! ./api */ "./lib/api.js");
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
function g_checkEnd(reason) {
    if (g_currIndex === g_patternStringLength) {
        let msg = "Unexpected end of URL pattern";
        if (reason)
            msg += ": " + reason;
        throw new UrlPatternParsingException(msg);
    }
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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ParsedUrlPattern class is the top-level object describing the result of URL parsing.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ParsedUrlPattern {
    constructor() {
        this.patternString = g_patternString;
        this.parts = [];
    }
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
            g_checkEnd("Port cannot be empty");
            return new ParsedPort();
        }
        else if (g_currChar === '/') {
            g_move();
            return g_isEnd() ? null : new ParsedPath();
        }
        else if (g_currChar === '?') {
            g_move();
            return g_isEnd() ? null : new ParsedQueryString();
        }
        else if (g_currChar === '#') {
            g_move();
            return g_isEnd() ? null : new ParsedHash();
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
            return g_isEnd() ? null : new ParsedPath();
        }
        else if (g_currChar === '?') {
            g_move();
            return g_isEnd() ? null : new ParsedQueryString();
        }
        else if (g_currChar === '#') {
            g_move();
            return g_isEnd() ? null : new ParsedHash();
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
            return g_isEnd() ? null : new ParsedQueryString();
        }
        else if (g_currChar === '#') {
            g_move();
            return g_isEnd() ? null : new ParsedHash();
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
            return g_isEnd() ? null : new ParsedHash();
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
        if (!this.name)
            throw new UrlPatternParsingException(`Query string parameter doesn't have name`);
        else if (!isValidQueryParamName(this.name))
            throw new UrlPatternParsingException(`Query string parameter name '${this.name}' contains invalid character`);
        if (g_isEnd() || g_currChar !== '=')
            throw new UrlPatternParsingException(`Query string parameter '${this.name}' must be followed by '='`);
        g_move();
        g_checkEnd(`Query string parameter '${this.name}' doesn't have value`);
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
                let field = new ParsedField();
                field.parse(segmentEndChars);
                token = field;
            }
            else if (g_currChar === '(') {
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
                        throw new UrlPatternParsingException(`Single-value segment URL part cannot start from '*'`);
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
        let s = "";
        if (parsedField.matchPattern && parsedField.matchPattern.content) {
            s += parsedField.matchPattern.content;
            if (parsedField.isOptional)
                s += "?";
        }
        else if (parsedField.isOptional)
            s += "(.*)";
        else
            s += "(.+)";
        // s += ")";
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
        if (!isValidTextToken(s))
            throw new UrlPatternParsingException(`Text token '${s}' contains invalid characters`);
        // text might have been URL encoded
        try {
            this.content = decodeURIComponent(s);
        }
        catch (err) {
            throw new UrlPatternParsingException(`Text token '${s}' cannot be URL-decoded. Error: ${err.message}`);
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
    /**
     * Parses regular expression. This method is called when the current character is '('
     */
    parse() {
        // Stack of opening and closing characters (parenthesis, brackets and curly braces) for
        // parsing regular expressions section. Regular expression section stops when we encounter
        // character ')' and this stack is empty.
        let stack = [];
        while (!g_isEnd()) {
            let currChar = g_currChar;
            if (currChar === ')') {
                if (stack.pop() === '(') {
                    g_move();
                    if (stack.length === 0) {
                        this.content += currChar;
                        this.finalize();
                        return;
                    }
                }
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
                g_checkEnd(`In the Regexp '${this.content}', the escape character '\\' must be followed by another character`);
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
    /**
     * Parses regulafield. This method is called when the current character is '{'
     */
    parse(segmentEndChars) {
        // skip '{'
        g_move();
        g_checkEnd(`A field must define a name`);
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
            else {
                this.name += g_currChar;
                g_move();
            }
        }
        if (this.name.length === 0)
            throw new UrlPatternParsingException(`Field must have name`);
        else if (!isValidFieldName(this.name))
            throw new UrlPatternParsingException(`Field name '${this.name}' contains invalid characters`);
        g_checkEnd(`Field '${this.name}' doesn't have closing '}'`);
        // field may define format
        if (g_currChar === '%') {
            g_move();
            g_checkEnd(`Field '${this.name}' doesn't specify format after '%'`);
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
                throw new UrlPatternParsingException(`Field '${this.name}' has invalid format character '${g_currChar}'`);
            g_checkEnd(`Field '${this.name}' doesn't have closing '}'`);
        }
        // field may have regular expression
        if (g_currChar === '(') {
            let regExp = new ParsedRegExp();
            regExp.parse();
            this.matchPattern = regExp;
            g_checkEnd(`Field '${this.name}' doesn't have closing '}'`);
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
            throw new UrlPatternParsingException(`Field '${this.name}' has invalid character '${g_currChar}'`);
    }
    parseDefaultValue(segmentEndChars) {
        let s = "";
        while (!g_isEnd()) {
            if (segmentEndChars.indexOf(g_currChar) >= 0)
                throw new UrlPatternParsingException(`Field '${this.name}' doesn't have closing '}'`);
            else if (g_currChar === '}')
                break;
            else {
                s += g_currChar;
                g_move();
            }
        }
        // check whether the default value is empty and if field format is set to a non-string
        // also check whether it can be converted to theat format.
        if (!s)
            throw new UrlPatternParsingException(`Field '${this.name}' default value cannot be empty`);
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
/**
 * Determines whether the given string is a valid text token in a segement. To be valid, it must
 * be alpha-numeric or undescore '_' or dash '-' or dor '.' or percent sign '%' (for URL-encoded characters).
 * @param s
 */
function isValidTextToken(s) {
    return /^[a-z0-9_\-\.%]+$/i.test(s);
}
/**
 * Determines whether the given string is a valid field name. To be valid, it must start from the
 * the alpha-numeric or undescore '_' character and be followed by optional alpha-numeric or
 * undescore '_' or dash '-' characters.
 * @param s
 */
function isValidFieldName(s) {
    return /^[a-z_][a-z0-9_]*$/i.test(s);
}
/**
 * Determines whether the given string is a valid name of a query string parameter.
 * To be valid, it must be alpha-numeric or undescore '_' or dash '-'.
 * @param s
 */
function isValidQueryParamName(s) {
    return /^[a-z0-9_\-]+$/i.test(s);
}
/**
 * Determines whether the given character is a delimiter that cannot be used as text within URL
 * @param c
 */
function g_isDelimiter(c) {
    return "!@#$%^&*()+=[]{}:;\"'<>,.?/|\\`~".indexOf(c) >= 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW11cmwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbXVybC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW11cmwvLi9zcmMvYWN0dWFsLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21pbXVybFR5cGVzLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSx1QkFBdUI7QUFDdkIsU0FBZ0IsUUFBUSxD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OztnQkFFMUIsTUFBTSxJQUFJLDBCQUEwQixDQUFFLHFCQUFxQixDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxDQUFDO1NBQzlIOztZQUVBLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRDtBQUtEOzs7O0dBSUc7QUFDSCxTQUFTLGdCQUFnQixDQUFFLENBQVM7SUFFbkMsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUlEOzs7OztHQUtHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBRSxDQUFTO0lBRW5DLE9BQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBUyxxQkFBcUIsQ0FBRSxDQUFTO0lBRXhDLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFTLGFBQWEsQ0FBRSxDQUFTO0lBRWhDLE9BQU8sa0NBQWtDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixnR0FBZ0c7QUFDaEcsaUJBQWlCO0FBQ2pCLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsTUFBTSwwQkFBMkIsU0FBUSxLQUFLO0lBSzdDLFlBQWEsT0FBZTtRQUUzQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLElBQUksQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFLENBQUM7SUFDNUQsQ0FBQztDQUNEIiwiZmlsZSI6Im1pbXVybC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW11cmxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltdXJsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvbWltdXJsVHlwZXMuanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vYXBpXCJcclxuXHJcblxyXG5cclxuLy8gUGFyc2VzIHRoZSBnaXZlbiBVUkxcclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVVJMKCB1cmw6IHN0cmluZyk6IGFwaS5JUGFyc2VkQWN0dWFsVVJMXHJcbntcclxuXHRsZXQgcGFyc2VkVVJMOiBhcGkuSVBhcnNlZEFjdHVhbFVSTCA9IHt9O1xyXG5cclxuXHQvLyBmaW5kIHByb3RvY29sXHJcblx0bGV0IGhvc3RuYW1lSW5kZXg6IG51bWJlcjtcclxuXHRsZXQgcHJvdG9jb2xTZXBhcmF0b3JJbmRleCA9IHVybC5pbmRleE9mKCBcIjovL1wiKTtcclxuXHRpZiAocHJvdG9jb2xTZXBhcmF0b3JJbmRleCA9PT0gMClcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJVUkwgY2Fubm90IHN0YXJ0IGZyb20gJzovLydcIik7XHJcblx0ZWxzZSBpZiAocHJvdG9jb2xTZXBhcmF0b3JJbmRleCA+IDApXHJcblx0e1xyXG5cdFx0cGFyc2VkVVJMLnByb3RvY29sID0gdXJsLnN1YnN0ciggMCwgcHJvdG9jb2xTZXBhcmF0b3JJbmRleCk7XHJcblx0XHRpZiAoIWlzVmFsaWRQcm90b2NvbCggcGFyc2VkVVJMLnByb3RvY29sKSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgUHJvdG9jb2wgJyR7cGFyc2VkVVJMLnByb3RvY29sfScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzYCk7XHJcblxyXG5cdFx0aG9zdG5hbWVJbmRleCA9IHByb3RvY29sU2VwYXJhdG9ySW5kZXggKyAzO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRob3N0bmFtZUluZGV4ID0gdXJsWzBdID09PSAnLycgPyAtMSA6IDA7XHJcblxyXG5cdGxldCBuZXh0U2VhcmNoSW5kZXhTdGFydCA9IGhvc3RuYW1lSW5kZXggPCAwID8gMCA6IGhvc3RuYW1lSW5kZXg7XHRcclxuXHRsZXQgY29sb25JbmRleCA9IHVybC5pbmRleE9mKCAnOicsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHRsZXQgc2xhc2hJbmRleCA9IHVybC5pbmRleE9mKCAnLycsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHRsZXQgcXVlc3Rpb25JbmRleCA9IHVybC5pbmRleE9mKCAnPycsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHRsZXQgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoICcjJywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cclxuXHRpZiAoaG9zdG5hbWVJbmRleCA+PSAwKVxyXG5cdHtcclxuXHRcdGlmIChjb2xvbkluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgY29sb25JbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZSBpZiAoc2xhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIHNsYXNoSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2UgaWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBxdWVzdGlvbkluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlIGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBoYXNoSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBwYXJzZWRVUkwuaG9zdG5hbWUubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWdtZW50ID0gcGFyc2VkVVJMLmhvc3RuYW1lW2ldO1xyXG5cdFx0XHRpZiAoIWlzVmFsaWRIb3N0bmFtZVNlZ21lbnQoIHNlZ21lbnQpKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYEhvc3RuYW1lIHNlZ21lbnQgJyR7c2VnbWVudH0nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc2ApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGNvbG9uSW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdGxldCBwb3J0OiBzdHJpbmc7XHJcblx0XHRpZiAoc2xhc2hJbmRleCA+IDApXHJcblx0XHRcdHBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgc2xhc2hJbmRleCAtIGNvbG9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2UgaWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdFx0XHRwb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEsIHF1ZXN0aW9uSW5kZXggLSBjb2xvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlIGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEsIGhhc2hJbmRleCAtIGNvbG9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxKTtcclxuXHJcblx0XHRpZiAoIWlzVmFsaWRQb3J0KCBwb3J0KSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgUG9ydCAnJHtwb3J0fScgY29udGFpbnMgbm9uLW51bWVyaWNhbCBjaGFyYWN0ZXJzYCk7XHJcblxyXG5cdFx0cGFyc2VkVVJMLnBvcnQgPSBOdW1iZXIocG9ydCk7XHJcblx0fVxyXG5cclxuXHQvLyBzbGFzaCBjYW4gYmUgdGhlIGZpcnN0IGNoYXJhY3RlciBpZiB0aGVyZSBpcyBubyBob3N0bmFtZVxyXG5cdGlmIChzbGFzaEluZGV4ID49IDApXHJcblx0e1xyXG5cdFx0aWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aCA9IHVybC5zdWJzdHIoIHNsYXNoSW5kZXggKyAxLCBxdWVzdGlvbkluZGV4IC0gc2xhc2hJbmRleCAtIDEpLnNwbGl0KCAnLycpO1xyXG5cdFx0ZWxzZSBpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBhdGggPSB1cmwuc3Vic3RyKCBzbGFzaEluZGV4ICsgMSwgaGFzaEluZGV4IC0gc2xhc2hJbmRleCAtIDEpLnNwbGl0KCAnLycpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aCA9IHVybC5zdWJzdHIoIHNsYXNoSW5kZXggKyAxKS5zcGxpdCggJy8nKTtcclxuXHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHBhcnNlZFVSTC5wYXRoLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VnbWVudCA9IHBhcnNlZFVSTC5wYXRoW2ldO1xyXG5cdFx0XHRpZiAoIWlzVmFsaWRTZWdtZW50KCBzZWdtZW50KSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBQYXRoIHNlZ21lbnQgJyR7c2VnbWVudH0nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc2ApO1xyXG5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWdtZW50ID0gZGVjb2RlVVJJQ29tcG9uZW50KCBzZWdtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgUGF0aCBzZWdtZW50ICcke3NlZ21lbnR9JyBjYW5ub3QgYmUgVVJMLWRlY29kZWQuIEVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aFtpXSA9IHNlZ21lbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0e1xyXG5cdFx0cGFyc2VkVVJMLnF1ZXJ5ID0ge307XHJcblx0XHRsZXQgc2VhcmNoU3RyaW5nOiBzdHJpbmc7XHJcblx0XHRpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0c2VhcmNoU3RyaW5nID0gdXJsLnN1YnN0ciggcXVlc3Rpb25JbmRleCArIDEsIGhhc2hJbmRleCAtIHF1ZXN0aW9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0c2VhcmNoU3RyaW5nID0gdXJsLnN1YnN0ciggcXVlc3Rpb25JbmRleCArIDEpO1xyXG5cclxuXHRcdGxldCBwYXJhbXMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoICcmJyk7XHJcblx0XHRmb3IoIGxldCBwYXJhbSBvZiBwYXJhbXMpXHJcblx0XHR7XHJcblx0XHRcdGlmICghcGFyYW0pXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgSW52YWxpZCBzdHVjdHVyZSBvZiBxdWVyeSBzdHJpbmcgVVJMIHBhcnRgKTtcclxuXHJcblx0XHRcdGxldCBhcnIgPSBwYXJhbS5zcGxpdCggJz0nKTtcclxuXHRcdFx0bGV0IG5hbWU6IHN0cmluZztcclxuXHRcdFx0bGV0IHZhbHVlOiBzdHJpbmc7XHJcblx0XHRcdGlmIChhcnIubGVuZ3RoID4gMilcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3BhcmFtfScgaGFzIG1vcmUgdGhhbiBvbmUgJz0nIHN5bWJvbGApO1xyXG5cclxuXHRcdFx0aWYgKGFyci5sZW5ndGggPCAyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZSA9IHBhcmFtO1xyXG5cdFx0XHRcdHZhbHVlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWUgPSBhcnJbMF07XHJcblx0XHRcdFx0dmFsdWUgPSBhcnJbMV07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghaXNWYWxpZFF1ZXJ5UGFyYW1OYW1lKCB0aGlzLm5hbWUpKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgbmFtZSAnJHtuYW1lfScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJgKTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghaXNWYWxpZFNlZ21lbnQoIHZhbHVlKSlcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYFZhbHVlICcke3ZhbHVlfScgb2YgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtuYW1lfScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzYCk7XHJcblxyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KCB2YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgVmFsdWUgJyR7dmFsdWV9JyBvZiBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke25hbWV9JyBjYW5ub3QgYmUgVVJMLWRlY29kZWQuIEVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5hbWUgaW4gcGFyc2VkVVJMLnF1ZXJ5KVxyXG5cdFx0XHRcdHBhcnNlZFVSTC5xdWVyeVtuYW1lXS5wdXNoKCB2YWx1ZSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRwYXJzZWRVUkwucXVlcnlbbmFtZV0gPSBbdmFsdWVdO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdGxldCB2YWx1ZSA9IHVybC5zdWJzdHIoIGhhc2hJbmRleCArIDEpO1xyXG5cdFx0aWYgKCFpc1ZhbGlkU2VnbWVudCggdmFsdWUpKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBWYWx1ZSAnJHt2YWx1ZX0nIG9mIGhhc2ggVVJMIHBhcnQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzYCk7XHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHBhcnNlZFVSTC5oYXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBWYWx1ZSAnJHt2YWx1ZX0nIG9mIGhhc2ggVVJMIHBhcnQgY2Fubm90IGJlIFVSTC1kZWNvZGVkLiBFcnJvcjogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdH1cclxufVxyXG5cclxuXHRyZXR1cm4gcGFyc2VkVVJMO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIHByb3RvY29sIFVSTCBwYXJ0LiBUbyBiZSB2YWxpZCwgaXQgbXVzdFxyXG4gKiBiZSBhbHBoYS1udW1lcmljLlxyXG4gKiBAcGFyYW0gc1xyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZFByb3RvY29sKCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15bYS16MC05XSskL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBzZWdtZW50IGluIHRoZSBob3N0bmFtZSBVUkwgcGFydC4gVG8gYmUgdmFsaWQsXHJcbiAqIGl0IG11c3QgYmUgYWxwaGEtbnVtZXJpYyBvciB1bmRlcnNjb3JlICdfJyBvciBkYXNoICctJy5cclxuICogQHBhcmFtIHNcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRIb3N0bmFtZVNlZ21lbnQoIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlthLXowLTlfXFwtXSskL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBwb3J0IFVSTCBwYXJ0LiBUbyBiZSB2YWxpZCwgaXQgbXVzdFxyXG4gKiBiZSBudW1lcmljLlxyXG4gKiBAcGFyYW0gc1xyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZFBvcnQoIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlxcZCskL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBzZWdtZW50IGluIHBhdGgsIHF1ZXJ5IHN0cmluZyBvciBoYXNoIFVSTCBwYXJ0LlxyXG4gKiBUbyBiZSB2YWxpZCwgaXQgbXVzdCBiZSBhbHBoYS1udW1lcmljIG9yIHVuZGVzY29yZSAnXycgb3IgZGFzaCAnLScgb3IgcGVyY2VudCBzaWduICclJyAoZm9yXHJcbiAqIFVSTC1lbmNvZGVkIGNoYXJhY3RlcnMpLlxyXG4gKiBAcGFyYW0gc1xyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZFNlZ21lbnQoIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlthLXowLTlfXFwtXFwuJV0rJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgbmFtZSBvZiBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIuXHJcbiAqIFRvIGJlIHZhbGlkLCBpdCBtdXN0IGJlIGFscGhhLW51bWVyaWMgb3IgdW5kZXNjb3JlICdfJyBvciBkYXNoICctJy5cclxuICogQHBhcmFtIHNcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRRdWVyeVBhcmFtTmFtZSggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eW2EtejAtOV9cXC1dKyQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIHB1YmxpYyBBUEkgb2YgdGhlIFVSTCBQYXJzaW5nIGFuZCBNYXRjaGluZyBsaWJyYXJ5ICdtaW11cmwnLlxyXG4gKlxyXG4gKiBUbyByZWFkIGFib3V0IG1pbXVybCBmZWF0dXJlc1xyXG4gKiA8YSBocmVmPVwiaHR0cHM6Ly9tbWljaGxpbjY2LmdpdGh1Yi5pby9taW11cmwvYWJvdXQuaHRtbFwiIHRhcmdldD1cIl90b3BcIj5wbGVhc2UgdmlzaXQgaGVyZTwvYT4uXHJcbiAqXHJcbiAqIFRvIHBsYXkgd2l0aCBtaW11cmwgcGF0dGVybiBwYXJzaW5nIGFuZCBVUkwgbWF0Y2hpbmcgY2FwYWJpbGl0aWVzXHJcbiAqIDxhIGhyZWY9XCJodHRwczovL21taWNobGluNjYuZ2l0aHViLmlvL21pbXVybC9wbGF5Z3JvdW5kLmh0bWxcIiB0YXJnZXQ9XCJfdG9wXCI+cGxlYXNlIHZpc2l0IGhlcmU8L2E+LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFyc2VkQWN0dWFsVVJMIGNsYXNzIGNvbnRhaW5zIFVSTCBwYXJ0cyBwYXJzZWQgb3V0IG9mIHRoZSBVUkwgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkQWN0dWFsVVJMXHJcbntcclxuXHQvKiogUHJvdG9jb2wgVVJMIHBhcnQgKi9cclxuXHRwcm90b2NvbD86IHN0cmluZztcclxuXHJcblx0LyoqIEhvc3RuYW1lIFVSTCBwYXJ0IGFzIGFycmF5IG9mIGhvc3RuYW1lIHNlZ21lbnRzOiBlLmcuIGBbXCJ3d3dcIiwgXCJhYmNcIiwgXCJjb21cIl1gICovXHJcblx0aG9zdG5hbWU/OiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIFBvcnQgVVJMIHBhcnQgKi9cclxuXHRwb3J0PzogbnVtYmVyO1xyXG5cclxuXHQvKiogUGF0aCBVUkwgcGFydCBhcyBhcnJheSBvZiBwYXRoIHNlZ21lbnRzOiBlLmcuIGBbXCJ1c2VyXCIsIFwiMTIzXCIsIFwicHJvZmlsZVwiXWAgKi9cclxuXHRwYXRoPzogc3RyaW5nW107XHJcblxyXG5cdC8qKiBRdWVyeSBzdHJpbmcgVVJMIHBhcnQgYXMgYSBtYXAgb2YgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgdG8gdGhlIGFycmF5cyBvZiB0aGVpciB2YWx1ZXMgKi9cclxuXHRxdWVyeT86IHsgW1A6IHN0cmluZ106IHN0cmluZ1tdIH07XHJcblxyXG5cdC8qKiBIYXNoIChmcmFnbWVudCkgVVJMIHBhcnQgKi9cclxuXHRoYXNoPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVGhlIFVybFBhcnQgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGRpc3Rpbmd1aXNoaW5nIFVSTCBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVVcmxQYXJ0IHsgUHJvdG9jb2wsIEhvc3RuYW1lLCBQb3J0LCBQYXRoLCBRdWVyeSwgSGFzaCB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFVybFBhdHRlcm4gaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHRvcC1sZXZlbCBvYmplY3QgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIFVSTFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0LyoqIE9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGZvciB3aGljaCB0aGlzIG9iamVjdCB3YXMgY3JlYXRlZC4gKi9cclxuXHRwYXR0ZXJuU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBQcm90b2NvbCBVUkwgcGFydC4gKi9cclxuXHRwcm90b2NvbDogSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogSG9zdG5hbWUgVVJMIHBhcnQuICovXHJcblx0aG9zdG5hbWU6IElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUG9ydCBVUkwgcGFydC4gKi9cclxuXHRwb3J0OiBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBQYXRoIFVSTCBwYXJ0LiAqL1xyXG5cdHBhdGg6IElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUXVlcnkgU3RyaW5nIFVSTCBwYXJ0LiAqL1xyXG5cdHF1ZXJ5OiBJUGFyc2VkUXVlcnlTdHJpbmc7XHJcblxyXG5cdC8qKiBIYXNoIFVSTCBwYXJ0LiAqL1xyXG5cdGhhc2g6IElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIEFycmF5IG9mIFVSTCBwYXJ0LiBJbmRleGVzIGFyZSB2YWx1ZXMgZnJvbSB0aGUgVXJsUGFydCBlbnVtZXJhdGlvbi4gKi9cclxuXHRwYXJ0czogSVBhcnNlZFVybFBhcnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhcnNlZExvY2F0aW9uIHR5cGUgZGVmaW5lcyBob3cgZGlmZmVyZW50IHNlY3Rpb24gb2YgdGhlIFVSTCBwYXR0ZXJuIGNhbiBiZSBsb2NhdGVkIGluIHRoZVxyXG4gKiBvcmlnaW5hbCBwYXR0ZXJuIHN0cmluZy4gTG9jYXRpb24gaXMgZGVmaW5lZCB1c2luZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZSB0aGUgc2VjdGlvblxyXG4gKiBiZWdpbnMgYW5kIGl0cyBsZW5ndGguXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQYXJzZWRMb2NhdGlvbiA9IHsgc3RhcnQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkVG9rZW4gaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKipcclxuXHQgKiBMb2NhdGlvbiBvZiB0aGUgcGFydCBpbiB0aGUgb3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgY29udGFpbmluZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZVxyXG5cdCAqIHRoZSBwYXJ0IGJlZ2lucyBhbmQgaXRzIGxlbmd0aC5cclxuXHQgKi9cclxuXHRsb2NhdGlvbjogUGFyc2VkTG9jYXRpb247XHJcblxyXG5cdC8qKiBDb250ZW50IG9mIHRoZSB0b2tlbiAqL1xyXG5cdHRva2VuU3Rpbmc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRVcmxQYXJ0IGlzIGEgYmFzZSBpbnRlcmZhY2UgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRVcmxQYXJ0IGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gKi9cclxuXHR1cmxQYXJ0OiBFVXJsUGFydDtcclxuXHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wYXJpc29uIG9mIHRoaXMgcGFydCBzaG9sZCBiZSBjYXNlLXNlbnNpdGl2ZSBvciBub3QuICovXHJcblx0Y2FzZVNlbnNpdGl2ZTogYm9vbGVhbjtcclxuXHJcblx0LyoqIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LiAqL1xyXG5cdGdldFNlZ21lbnRzKCk6IElQYXJzZWRTZWdtZW50W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbiAqIGRlZmluZSBhIHNpbmdsZSBzZWdtZW50OiBwcm90b2NvbCwgcG9ydCBhbmQgaGFzaC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLiAqL1xyXG5cdHNlZ21lbnQ6IElQYXJzZWRTZWdtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4gKiBjYW4gZGVmaW5lIG11bHRpcGxlIHNlZ21lbnRzOiBob3N0bmFtZSBhbmQgcGF0aC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBJUGFyc2VkVXJsUGFydFxyXG57XHJcblx0LyoqIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuICovXHJcblx0c2VnbWVudHM6IElQYXJzZWRTZWdtZW50W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkUXVlcnlTdHJpbmcgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIHF1ZXJ5IHN0cmluZ1xyXG4gKiBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkUXVlcnlTdHJpbmcgZXh0ZW5kcyBJUGFyc2VkVXJsUGFydFxyXG57XHJcblx0LyoqIFF1ZXJ5IHN0cmluZyBkZWZpbmVzIG9uZSBzZWdlbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS4gKi9cclxuXHRwYXJzZWRRU1BzOiB7IFtQOiBzdHJpbmddOiBJUGFyc2VkUVNQIH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIG5vdCBzcGVjaWZpZWQgZXhwbGljaXRseSBpbiB0aGUgcGF0dGVyblxyXG5cdCAqIHdpbGwgYmUgYWxsb3dlZCB3aGVuIHBhcnNpbmcgYWN0dWFsIFVSTHMuXHJcblx0ICovXHJcblx0YWxsb3dFeHRyYVF1ZXJ5UGFyYW1zOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFFTUCBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgbWF0Y2hpbmcgYSBzaW5nbGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFFTUCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgbmFtZS4gKi9cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBRdWVyeSBTdHJpbmcgZGVmaW5lcyBvbmUgc2VnZW1lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuICovXHJcblx0c2VnbWVudDogSVBhcnNlZFNlZ21lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkU2VnbWVudCBpbnRlcmZhY2UgZGVmaW5lcyBhIHNpbmdsZSBzZWdtZW50IGluIGEgVVJMIHBhdHRlcm4gdGhhdCBjYW4gYmUgbWF0Y2hlZCB0b1xyXG4gKiBvbmUgb3IgbW9yZSBwYXJ0cyBvZiBhbiBhY3R1YWwgVVJMLiBFYWNoIHNlZ21lbnQgY2FuIGhhdmUgemVybyBvciBtb3JlIGZpZWxkcyBkZWZpbmVkIGluIGl0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkU2VnbWVudCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsICovXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgY2FuIGJlIHJlcGVhdGVkIG11dGlwbGUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIGJvdGhcclxuXHQgKiBvcHRpb25hbCBhbmQgbXVsdGkgY2FuIGJlIHJlcGVhdGVkIHplcm8gb3IgbW9yZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgbm90IG9wdGlvbmFsIGJ1dFxyXG5cdCAqIG11bHRpIGNhbiBiZSByZXBlYXRlZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuXHQgKi9cclxuXHRpc011bHRpOiBib29sZWFuO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZmllbGRzIGRlZmluZWQgaW4gdGhpcyBzZWdtZW50LiAqL1xyXG5cdGZpZWxkczogSVBhcnNlZEZpZWxkW107XHJcblxyXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIHNlZ21lbnQncyBtYXRjaCBwYXR0ZXJuLlxyXG5cdHJlZ0V4cDogUmVnRXhwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZEZpZWxkIGludGVyZmFjZSBkZWZpbmVzIGEgc2luZ2xlIGZpZWxkIHdpdGhpbiBhIHNlZ21lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRGaWVsZCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmaWVsZCBpcyBvcHRpb25hbCAqL1xyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBmaWVsZCAqL1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEZpZWxkIGZvcm1hdCAqL1xyXG5cdGZvcm1hdDogRmllbGRGb3JtYXQ7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBkZWZhdWx0IHZhbHVlIG9mIHRoZSBmaWVsZCAqL1xyXG5cdGRlZmF1bHRWYWx1ZT86IEZpZWxkVmFsdWVUeXBlO1xyXG5cclxuXHQvLyAvKiogUmVndWxhciBleHByZXNzaW9uIHN0cmluZyBkZXNjcmliaW5nIHRoZSBtYXRjaGluZyBwYXR0ZXJuIGZvciB0aGUgZmllbGQgKi9cclxuXHQvLyBtYXRjaFBhdHRlcm46IElQYXJzZWRSZWdFeHA7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmaWVsZCB2YWx1ZSBpcyBhbiBhcnJheS4gVGhpcyBpcyB0cnVlIGZvciBmaWVsZHMgdGhhdCBjYW4gYXBwZWFyXHJcblx0Ly8gbXVsdGlwbGUgdGltZXMgaW4gdGhlIFVSTCBwYXJ0LlxyXG5cdGlzQXJyYXk6IGJvb2xlYW47XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY2FwdHVyaW5nIGdyb3VwIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGZpZWxkIHdpdGhpbiB0aGVcclxuXHQvLyBzZWdtZW50LlxyXG5cdGluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGaWVsZEZvcm1hdCBjbGFzcyBkZWZpbmVzIHBvc3NpYmxlIGZpZWxkIGZvcm1hdHMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBGaWVsZEZvcm1hdFxyXG57XHJcblx0LyoqIEZpZWxkIHZhbHVlIGNhbiBiZSBhcmJpdHJhcnkgc3RyaW5nICovXHJcblx0U3RyaW5nLFxyXG5cclxuXHQvKiogRmllbGQgdmFsdWUgbXVzdCBiZSBjb252ZXJ0YWJsZSB0byBhbiBpbnRlZ2VyIG51bWJlciAqL1xyXG5cdEludGVnZXIsXHJcblxyXG5cdC8qKiBGaWVsZCB2YWx1ZSBtdXN0IGJlIGNvbnZlcnRhYmxlIHRvIGEgcmVhbCBudW1iZXIgKi9cclxuXHRGbG9hdCxcclxuXHJcblx0LyoqIEZpZWxkIHZhbHVlIG11c3QgYmUgY29udmVydGFibGUgdG8gYSBCb29sZWFuIG51bWJlciAqL1xyXG5cdEJvb2xlYW4sXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXJyb3IgdGhhdCBvY2N1cnJlZCBkdXJpbmcgcGFyc2luZyBvZlxyXG4gKiBhIFVSTCBwYXR0ZXJuLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gZXh0ZW5kcyBFcnJvclxyXG57XHJcblx0LyoqIEluZGV4IGluIHRoZSBwYXR0ZXJuIHN0cmluZyBhdCB3aGljaCB0aGVlcnJvciBvY2N1cnJlZC4gKi9cclxuXHRwb3M6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogU3VwcG9ydGVkIHByaW1pdGl2ZSB0eXBlcyBvZiBmaWVsZCB2YWx1ZXMgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlRmllbGRWYWx1ZVR5cGUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xyXG5cclxuLyoqIFR5cGVzIG9mIGZpZWxkcyB3aXRoIG11bHRpcGxlIHZhbHVlcyAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUZpZWxkVmFsdWVUeXBlID0gU2luZ2xlRmllbGRWYWx1ZVR5cGVbXTtcclxuXHJcbi8qKiBGaWVsZCB2YWx1ZSB0eXBlLCB3aGljaCBjYW4gYmUgZWl0aGVyIHNpbmdlIHZhbHVlIG9yIG11bHRpcGxlIHZhbHVlIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgRmllbGRWYWx1ZVR5cGUgPSBTaW5nbGVGaWVsZFZhbHVlVHlwZSB8IE11bHRpRmllbGRWYWx1ZVR5cGU7XHJcblxyXG4vKiogT2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyB3aG9zZSBuYW1lcyBhcmUgZmllbGQgbmFtZXMgYW5kIHZhbHVlcyBhcmUgZmllbGQgdmFsdWVzLiAqL1xyXG5leHBvcnQgdHlwZSBGaWVsZEJhZyA9IHsgW1A6c3RyaW5nXTogRmllbGRWYWx1ZVR5cGUgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVXJsUGF0dGVybk1hdGNoUmVzdWx0IGludGVyZmFjZSByZXByZXNlbnRzIHRoZSByZXN1bHQgb2YgbWF0Y2hpbmcgYW4gYWN0dWFsIFVSTCBhZ2FpbnN0XHJcbiAqIHRoZSBVUkwgcGF0dGVybi4gVGhlIHJlc3VsdCBjb250YWlucyB2YWx1ZXMgb2YgbmFtZWQgYW5kIGluZGV4ZWQgZmllbGRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG1hdGNoIHdhcyBzdWNjZXNzdWwgKi9cclxuXHRzdWNjZXNzOiBib29sZWFuO1xyXG5cclxuXHQvKiogUGFyc2VkIGFjdHVhbCBVUkwgKi9cclxuXHRwYXJzZWRVUkw6IElQYXJzZWRBY3R1YWxVUkw7XHJcblxyXG5cdC8qKiBFcnJvciBtZXNzYWdlcyBpbiBjYXNlIHRoZSBtYXRjaCB3YXMgbm90IHN1Y2Nlc3NmdWwgKi9cclxuXHRlcnJvcnM/OiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIEZpZWxkIG5hbWVzIGFuZCB2YWx1ZXMgKi9cclxuXHRmaWVsZHM/OiBGaWVsZEJhZztcclxufVxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhY3R1YWwgZnJvbSBcIi4vYWN0dWFsXCI7XHJcbmltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiLi9wYXJzZXJcIjtcclxuaW1wb3J0ICogYXMgbWF0Y2hlciBmcm9tIFwiLi9tYXRjaGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgdGhlIGdpdmVuIFVSTCBcclxuICogQHBhcmFtIHMgVVJMIHN0cmluZyB0byBiZSBwYXJzZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVUkwoIHM6IHN0cmluZyk6IElQYXJzZWRBY3R1YWxVUkxcclxue1xyXG5cdHJldHVybiBhY3R1YWwucGFyc2VVUkwoIHMpO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIHRoZSBnaXZlbiBVUkwgcGF0dGVyblxyXG4gKiBAcGFyYW0gcyBVUkwgcGF0dGVybiBzdHJpbmcgdG8gYmUgcGFyc2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsUGF0dGVybiggczogc3RyaW5nKTogSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdHJldHVybiBwYXJzZXIucGFyc2VQYXR0ZXJuKCBzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hdGNoZXMgdGhlIGdpdmVuIFVSTCBhZ2FpbnN0IFVSTCBwYXR0ZXJuIHN0cmluZy5cclxuICogQHBhcmFtIHVybCBFaXRoZXIgdW5wYXJzZWQgVVJMIHN0cmluZyBvciBbW0lQYXJzZWRBY3R1YWxVUkxdXSBvYmplY3RcclxuICogQHBhcmFtIHBhdHRlcm4gRWl0aGVyIHVucGFyc2VkIFVSTCBwYXR0ZXJuIHN0cmluZyBvciBbW0lQYXJzZWRVcmxQYXR0ZXJuXV0gb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goIHVybDogc3RyaW5nIHwgSVBhcnNlZEFjdHVhbFVSTCwgcGF0dGVybjogc3RyaW5nIHwgSVBhcnNlZFVybFBhdHRlcm4pOiBJVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHRyZXR1cm4gbWF0Y2hlci5tYXRjaCggdXJsLCBwYXR0ZXJuKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vYXBpXCJcclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gVVJMIGFnYWluc3QgVVJMIHBhdHRlcm4gc3RyaW5nLlxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goIHVybDogc3RyaW5nIHwgYXBpLklQYXJzZWRBY3R1YWxVUkwsIHBhdHRlcm46IHN0cmluZyB8IGFwaS5JUGFyc2VkVXJsUGF0dGVybik6IGFwaS5JVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHRpZiAoIXVybClcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJVUkwgY2Fubm90IGJlIG51bGwgb3IgZW1wdHkgc3RyaW5nXCIpO1xyXG5cdGlmICghcGF0dGVybilcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJQYXR0ZXJuIGNhbm5vdCBiZSBudWxsIG9yIGVtcHR5IHN0cmluZ1wiKTtcclxuXHJcblx0aWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIGFwaS5wYXJzZVVSTCggdXJsKSwgYXBpLnBhcnNlVXJsUGF0dGVybiggcGF0dGVybikpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIGFwaS5wYXJzZVVSTCggdXJsKSwgcGF0dGVybik7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggdXJsLCBhcGkucGFyc2VVcmxQYXR0ZXJuKCBwYXR0ZXJuKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggdXJsLCBwYXR0ZXJuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gVVJMIGFnYWluc3QgYWxyZWFkeSBwYXJzZWQgVVJMIHBhdHRlcm4uXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFBhcnNlZCggcGFyc2VkVVJMOiBhcGkuSVBhcnNlZEFjdHVhbFVSTCwgcGFyc2VkUGF0dGVybjogYXBpLklQYXJzZWRVcmxQYXR0ZXJuKTogYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdGlmICghcGFyc2VkVVJMKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlVSTCBjYW5ub3QgYmUgbnVsbFwiKTtcclxuXHRpZiAoIXBhcnNlZFBhdHRlcm4pXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwicGFyc2VkUGF0dGVybiBjYW5ub3QgYmUgbnVsbFwiKTtcclxuXHJcblx0Ly8gcHJlcGFyZSBvYmplY3QgZm9yIG1hdGNoIHJlc3VsdFxyXG5cdGxldCBtYXRjaFJlc3VsdCA9IG5ldyBVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQoKTtcclxuXHRtYXRjaFJlc3VsdC5wYXJzZWRVUkwgPSBwYXJzZWRVUkw7XHJcblx0bWF0Y2hSZXN1bHQuZmllbGRzID0ge307XHJcblx0bGV0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0Ly8gY29tcGFyZSBwYXJ0IGJ5IHBhcnRcclxuXHRcdGxldCBlcnJvciA9IG1hdGNoU2luZ2xlU2VnbWVudCggYXBpLkVVcmxQYXJ0LlByb3RvY29sLCBwYXJzZWRVUkwucHJvdG9jb2wsXHJcblx0XHRcdCBcdFx0XHRwYXJzZWRQYXR0ZXJuLnByb3RvY29sID8gcGFyc2VkUGF0dGVybi5wcm90b2NvbC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoTXVsdGlwbGVTZWdtZW50cyggYXBpLkVVcmxQYXJ0Lkhvc3RuYW1lLCBwYXJzZWRVUkwuaG9zdG5hbWUsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4uaG9zdG5hbWUgPyBwYXJzZWRQYXR0ZXJuLmhvc3RuYW1lLnNlZ21lbnRzIDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoU2luZ2xlU2VnbWVudCggYXBpLkVVcmxQYXJ0LlBvcnQsIHBhcnNlZFVSTC5wb3J0LFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLnBvcnQgPyBwYXJzZWRQYXR0ZXJuLnBvcnQuc2VnbWVudCA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaE11bHRpcGxlU2VnbWVudHMoIGFwaS5FVXJsUGFydC5QYXRoLCBwYXJzZWRVUkwucGF0aCxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5wYXRoID8gcGFyc2VkUGF0dGVybi5wYXRoLnNlZ21lbnRzIDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoUXVlcnlTdHJpbmcoIHBhcnNlZFVSTC5xdWVyeSwgcGFyc2VkUGF0dGVybi5xdWVyeSwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoU2luZ2xlU2VnbWVudCggYXBpLkVVcmxQYXJ0Lkhhc2gsIHBhcnNlZFVSTC5oYXNoLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLmhhc2ggPyBwYXJzZWRQYXR0ZXJuLmhhc2guc2VnbWVudCA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0ZXJyb3JzLnB1c2goIGVyci5tZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdC8vIGlmIHdlIGhhdmUgZXJyb3JzLCBwdXQgdGhlbSBpbnRvIHRoZSByZXN1bHQgb2JqZWN0XHJcblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKVxyXG5cdFx0bWF0Y2hSZXN1bHQuZXJyb3JzID0gZXJyb3JzO1xyXG5cclxuXHRyZXR1cm4gbWF0Y2hSZXN1bHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gc3RyaW5nIGFnYWluc3QgdGhlIGdpdmVuIGNvbXBpbGVkIHNlZ21lbnQuIEZpZWxkcyB3aWxsIGJlIGFkZGVkXHJcbi8vIHRvIHRoZSBnaXZlbiByZXN1bHQgb2JqZWN0LlxyXG5mdW5jdGlvbiBtYXRjaFNpbmdsZVNlZ21lbnQoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgYWN0dWFsU2VnbWVudDogc3RyaW5nIHwgbnVtYmVyLCBwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQsXHJcblx0XHRcdFx0IGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0aWYgKHR5cGVvZiBhY3R1YWxTZWdtZW50ID09PSBcIm51bWJlclwiKVxyXG5cdFx0YWN0dWFsU2VnbWVudCA9IGFjdHVhbFNlZ21lbnQudG9TdHJpbmcoKTtcclxuXHJcblx0Ly8gaWYgY29tcGlsZWQgc2VnbWVudCBpcyBOT1QgcHJvdmlkZWQsIHRoZW4gYWN0dWFsIHNlZ21lbnQgbXVzdCBiZSBlbXB0eVxyXG5cdGlmICghcGFyc2VkU2VnbWVudClcclxuXHR7XHJcblx0XHRpZiAoYWN0dWFsU2VnbWVudClcclxuXHRcdFx0cmV0dXJuIGBVUkwgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBjb250YWlucyBzZWdtZW50ICcke2FjdHVhbFNlZ21lbnR9JyB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIGlmIGFjdHVhbCBzZWdtZW50IGlzIGVtcHR5IGFuZCBjb21waWxlZCBzZWdtZW50IGlzIG1hbmRhdG9yeSwgdGhlcmUgaXMgbm8gbWF0Y2g7IGlmIHN0cmluZ1xyXG5cdC8vIGlzIGVtcHR5IGFuZCBjb21waWxlZCBzZWdtZW50IGlzIG9wdGlvbmFsLCB0aGVyZSBpcyBtYXRjaDtcclxuXHRpZiAoIWFjdHVhbFNlZ21lbnQpXHJcblx0e1xyXG5cdFx0aWYgKHBhcnNlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBgVVJMIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgZG9lc24ndCBoYXZlIGEgc2VnbWVudCBjb3JyZXNwb25kaW5nIGAgK1xyXG5cdFx0XHRcdFx0YHRvIGEgbWFuZGF0b3J5IHBhdHRlcm4gc2VnbWVudCAnJHtwYXJzZWRTZWdtZW50LnRva2VuU3Rpbmd9J2A7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50LCBwYXJzZWRTZWdtZW50LCBmaWVsZHMpXHJcblx0XHQ/IG51bGxcclxuXHRcdDogYFVSTCBzZWdtZW50ICcke2FjdHVhbFNlZ21lbnR9JyBpbiBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGRvZXNuJ3QgbWF0Y2ggYCArXHJcblx0XHRcdGBwYXR0ZXJuIHNlZ21lbnQgJyR7cGFyc2VkU2VnbWVudC50b2tlblN0aW5nfSdgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRyaWVzIHRvIG1hdGNoIGFjdHVhbCBzZWdtZW50IHRvIHRoZSBjb21waWxlZCBzZWdtZW50LiBJZiB0aGVyZSBpcyBhIG1hY3RoLCByZXR1cm5zIGEgbm9uLW51bGxcclxuLy8gb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzIChpZiBubyBmaWVsZHMgZm91bmQsIHJldHVybnMgYW4gZW1wdHkgb2JqZWN0KS4gSWYgdGhlcmUgaXMgbm8gbWF0Y2hcclxuLy8gcmV0dXJucyBudWxsLlxyXG5mdW5jdGlvbiB0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQ6IHN0cmluZywgcGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50LFxyXG5cdGZpZWxkczogYXBpLkZpZWxkQmFnKTogYm9vbGVhblxyXG57XHJcblx0Ly8gcGVyZm9ybSByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2ggLSBub3RlIHRoYXQgdGhlIG1hdGNoaW5nIHBhcnQgKGluZGV4IDAgb2YgdGhlIHJlc3VsdCkgc2hvdWxkXHJcblx0Ly8gbWF0Y2ggb3VyIHN0cmluZyBleGFjdGx5IHNvIHRoYXQgbm8gZXh0cmEgY2hhcmFjdGVycyBhcmUgZm91bmQgYmVmb3JlIG9yIGFmdGVyIHRoZSBtYXRjaC5cclxuXHRsZXQgZXhlY1Jlc3VsdCA9IHBhcnNlZFNlZ21lbnQucmVnRXhwLmV4ZWMoIGFjdHVhbFNlZ21lbnQpO1xyXG5cdGlmICghZXhlY1Jlc3VsdCB8fCBleGVjUmVzdWx0WzBdICE9PSBhY3R1YWxTZWdtZW50KVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGhhdmUgYW55IGZpZWxkc1xyXG5cdGZvciggbGV0IHBhcnNlZEZpZWxkIG9mIHBhcnNlZFNlZ21lbnQuZmllbGRzKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgcmVndWxhciBleHByZXNzaW9uIHJlc3VsdCBoYXMgdGhpcyBpbmRleCBhbmQgZ2V0IHRoZSB2YWx1ZVxyXG5cdFx0aWYgKHBhcnNlZEZpZWxkLmluZGV4ID49IGV4ZWNSZXN1bHQubGVuZ3RoKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGBCVUc6IEZpZWxkIGluZGV4IG5vdCBmb3VuZCBpbiBwYXR0ZXIncyByZWd1bGFyIGV4cHJlc3Npb24gZXhlY3V0aW9uIHJlc3VsdGApO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHZhbHVlID0gY29udmVydEZpZWxkVmFsdWUoIHBhcnNlZEZpZWxkLCBleGVjUmVzdWx0W3BhcnNlZEZpZWxkLmluZGV4XSk7XHJcblx0XHRpZiAoIXBhcnNlZEZpZWxkLmlzQXJyYXkpXHJcblx0XHRcdGZpZWxkc1twYXJzZWRGaWVsZC5uYW1lXSA9IHZhbHVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYXJyID0gZmllbGRzW3BhcnNlZEZpZWxkLm5hbWVdIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRpZiAoYXJyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnIgPSBbXTtcclxuXHRcdFx0XHRmaWVsZHNbcGFyc2VkRmllbGQubmFtZV0gPSBhcnI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFyci5wdXNoKCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBzdHJpbmcgYXJyYXkgYWdhaW5zdCB0aGUgZ2l2ZW4gY29tcGlsZWQgc2VnbWVudCBhcnJheS4gRmllbGRzIHdpbGwgYmUgYWRkZWRcclxuLy8gdG8gdGhlIGdpdmVuIHJlc3VsdCBvYmplY3QuXHJcbmZ1bmN0aW9uIG1hdGNoTXVsdGlwbGVTZWdtZW50cyggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBhY3R1YWxTZWdtZW50czogc3RyaW5nW10sIHBhcnNlZFNlZ21lbnRzOiBhcGkuSVBhcnNlZFNlZ21lbnRbXSxcclxuXHRmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdGlmICghYWN0dWFsU2VnbWVudHMgJiYgIXBhcnNlZFNlZ21lbnRzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIWFjdHVhbFNlZ21lbnRzKVxyXG5cdFx0cmV0dXJuIGBVUkwgZG9lc24ndCBoYXZlIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgdGhhdCBleGlzdHMgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdGVsc2UgaWYgKCFwYXJzZWRTZWdtZW50cylcclxuXHRcdHJldHVybiBgVVJMIGhhcyBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgcGF0dGVybmA7XHJcblxyXG5cdC8vIEZvciBlYWNoIHBhcnNlZCBzZWdtZW50IHdlIGNyZWF0ZSBhIGNvbXBpbGVkIHNlZ21lbnQgZXhjZXB0IGluIG9uZSBjYXNlOiBmb3IgXCJvbmUgb3IgbW9yZVwiXHJcblx0Ly8gcGFyc2VkIHNlZ21lbnRzIHdlIGNyZWF0ZSB0d28gY29tcGlsZWQgc2VnbWVudCAtIG9uZSBzaW5nbGUgbWFuZGF0b3J5IGFuZCBvbmUgbXVsdGkgYW5kXHJcblx0Ly8gb3B0aW9uYWwuXHJcblx0bGV0IGNvbXBpbGVkU2VnbWVudHM6IENvbXBpbGVkU2VnbWVudFtdID0gW107XHJcblx0Zm9yKCBsZXQgcGFyc2VkU2VnbWVudCBvZiBwYXJzZWRTZWdtZW50cylcclxuXHR7XHJcblx0XHRpZiAocGFyc2VkU2VnbWVudC5pc011bHRpICYmICFwYXJzZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHR7XHJcblx0XHRcdGNvbXBpbGVkU2VnbWVudHMucHVzaCggbmV3IENvbXBpbGVkU2VnbWVudCggcGFyc2VkU2VnbWVudCwgZmFsc2UpKTtcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCB0cnVlKSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbXBpbGVkU2VnbWVudHMucHVzaCggbmV3IENvbXBpbGVkU2VnbWVudCggcGFyc2VkU2VnbWVudCwgcGFyc2VkU2VnbWVudC5pc09wdGlvbmFsKSk7XHJcblx0fVxyXG5cclxuXHQvLyBjYWxsIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIHRoZSBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMgaWYgdGhlcmUgaXMgYSBtYXRjaFxyXG5cdC8vIG9yIG51bGwgaWYgdGhlcmUgaXMgbm90LlxyXG5cdGlmICh0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzLCAwLCBjb21waWxlZFNlZ21lbnRzLCAwLCBmaWVsZHMpKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGBVUkwgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBkb2Vzbid0IG1hdGNoIHRoZSBwYXR0ZXJuYDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUcmllcyB0byBtYXRjaCBhY3R1YWwgc2VnbWVudHMgdG8gdGhlIHBhdHRlcm4gc3RhcnRpbmcgZnJvbSB0aGUgZ2l2ZW4gaW5kZXggaW4gZWFjaCBhcnJheS4gSWZcclxuLy8gdGhlcmUgaXMgYSBtYWN0aCwgcmV0dXJucyBhIG5vbi1udWxsIG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcyAoaWYgbm8gZmllbGRzIGZvdW5kLCByZXR1cm5zIGFuXHJcbi8vIGVtcHR5IG9iamVjdCkuIElmIHRoZXJlIGlzIG5vIG1hdGNoIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gdHJ5TWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhY3R1YWxTZWdtZW50czogc3RyaW5nW10sIGFjdHVhbFN0YXJ0SW5kZXg6IG51bWJlcixcclxuXHRcdFx0XHRjb21waWxlZFNlZ21lbnRzOiBDb21waWxlZFNlZ21lbnRbXSwgY29tcGlsZWRTdGFydEluZGV4OiBudW1iZXIsXHJcblx0XHRcdFx0ZmllbGRzOiBhcGkuRmllbGRCYWcpOiBib29sZWFuXHJcbntcclxuXHQvLyBsb29wIG92ZXIgY29tcGlsZWQgc2VnbWVudHMuIElmIHRoZSBzZWdtZW50IGlzIG1hbmRhdG9yeSwgd2UgY29tcGFyZSBpdCB0byB0aGUgYWN0dWFsXHJcblx0Ly8gc2VnbWVudCBhbmQgaWYgdGhlcmUgaXMgbm8gbWF0Y2gsIHRoZSBtYXRjaGluZyBmYWlscy4gSWYgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWwsIHdlIGNhbGxcclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IHN0YXJ0aW5nIGZyb20gdGhlIG5leHQgY29tcGlsZWQgc2VnbWVudC4gSWYgdGhpcyBjYWxsIHJldHVybnNcclxuXHQvLyBudWxsIChubyBtYXRjaCksIHRoZW4gd2UgbWFwIHRoZSBhY3R1YWwgc2VnbWVudCB0byB0aGUgY29tcGlsZWQgc2VnbWVudCBhbmQgYWR2YW5jZSB0aGVcclxuXHQvLyBpbmRpY2VzLlxyXG5cdGxldCBhY3R1YWxDdXJySW5kZXggPSBhY3R1YWxTdGFydEluZGV4O1xyXG5cdGxldCBjb21waWxlZEN1cnJJbmRleCA9IGNvbXBpbGVkU3RhcnRJbmRleDtcclxuXHR3aGlsZSggY29tcGlsZWRDdXJySW5kZXggPCBjb21waWxlZFNlZ21lbnRzLmxlbmd0aCAmJiBhY3R1YWxDdXJySW5kZXggPCBhY3R1YWxTZWdtZW50cy5sZW5ndGgpXHJcblx0e1xyXG5cdFx0bGV0IGNvbXBpbGVkU2VnbWVudCA9IGNvbXBpbGVkU2VnbWVudHNbY29tcGlsZWRDdXJySW5kZXhdO1xyXG5cdFx0bGV0IGFjdHVhbFNlZ21lbnQgPSBhY3R1YWxTZWdtZW50c1thY3R1YWxDdXJySW5kZXhdO1xyXG5cdFx0aWYgKCFjb21waWxlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29tcGFyZSBtYW5kYXRvcnkgc2VnbWVudCB3aXRoIHRoZSBhY3R1YWwgb25lXHJcblx0XHRcdGlmICh0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQsIGNvbXBpbGVkU2VnbWVudC5wYXJzZWRTZWdtZW50LCBmaWVsZHMpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29tcGlsZWRDdXJySW5kZXgrKztcclxuXHRcdFx0XHRhY3R1YWxDdXJySW5kZXgrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gcGFzc2luZyB0aGUgbmV4dCBjb21waWxlZCBzZWdtZW50IGluZGV4XHJcblx0XHRcdGxldCB0ZW1wRmllbGRzOiBhcGkuRmllbGRCYWcgPSB7fVxyXG5cdFx0XHRpZiAodHJ5TWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhY3R1YWxTZWdtZW50cywgYWN0dWFsQ3VyckluZGV4LFxyXG5cdFx0XHRcdGNvbXBpbGVkU2VnbWVudHMsIGNvbXBpbGVkQ3VyckluZGV4ICsgMSwgdGVtcEZpZWxkcykpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGVyZSBpcyBhIG1hdGNoXHJcblx0XHRcdFx0bWVyZ2VGaWVsZHMoIGZpZWxkcywgdGVtcEZpZWxkcyk7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2xlYXIgdGVtcG9yYXJ5IGZpZWxkcyB0aGF0IG1pZ2h0IGhhdmUgYmVlbiBmaWxsZWQgYnkgdGhlIHByZXZpb3VzIChmYWlsZWQpXHJcblx0XHRcdFx0Ly8gY2FsbCB0byB0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMuXHJcblx0XHRcdFx0dGVtcEZpZWxkcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvLyBjb21wYXJlIHRoaXMgc2VnbWVudCB3aXRoIHRoZSBhY3R1YWwgb25lXHJcblx0XHRcdFx0aWYgKHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQsIHRlbXBGaWVsZHMpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNvcHkgZmllbGQgdmFsdWVzIGFuZCBhZHZhbmNlIHRoZSBhY3R1YWwgaW5kZXhcclxuXHRcdFx0XHRcdG1lcmdlRmllbGRzKCBmaWVsZHMsIHRlbXBGaWVsZHMpO1xyXG5cdFx0XHRcdFx0YWN0dWFsQ3VyckluZGV4Kys7XHJcblxyXG5cdFx0XHRcdFx0Ly8gYWR2YW5jZSB0aGUgY29tcGlsZWQgaW5kZXggb25seSBpZiB0aGlzIGZpZWxkIGlzIGEgc2luZ3VsYXIgb25lXHJcblx0XHRcdFx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5wYXJzZWRTZWdtZW50LmlzTXVsdGkpXHJcblx0XHRcdFx0XHRcdGNvbXBpbGVkQ3VyckluZGV4Kys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gd2UgYXJlIGhlcmUgaWYgZWl0aGVyIGNvbXBpbGUgc2VnbWVudHMgb3IgYWN0dWFsIHNlZ21lbnRzIG9yIGJvdGggYXJlIGV4aG9zdGVkLiBJZiBib3RoXHJcblx0Ly8gYXJlIGV4aG9zdGVkLCB0aGVyZSBpcyBhIG1hdGNoLiBJZiBjb21waWxlZCBhcmUgZXhob3N0ZWQgYnV0IGFjdHVhbCBhcmUgbm90LCB0aGVyZSBpcyBub1xyXG5cdC8vIG1hdGNoLiBJZiBhY3R1YWwgYXJlIGV4aG9zdGVkIGJ1dCBjb21waWxlZCBhcmUgbm90LCB0aGVyZSBpcyBtYXRjaCBvbmx5IGlmIGFsbCB0aGVcclxuXHQvLyByZW1haW5pbmcgY29tcGlsZWQgc2VnbWVudHMgYXJlIG9wdGlvbmFsLlxyXG5cdGlmIChjb21waWxlZEN1cnJJbmRleCA9PT0gY29tcGlsZWRTZWdtZW50cy5sZW5ndGggJiYgYWN0dWFsQ3VyckluZGV4ID09PSBhY3R1YWxTZWdtZW50cy5sZW5ndGgpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChjb21waWxlZEN1cnJJbmRleCA9PT0gY29tcGlsZWRTZWdtZW50cy5sZW5ndGgpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSBjb21waWxlZEN1cnJJbmRleDsgaSA8IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb21waWxlZFNlZ21lbnQgPSBjb21waWxlZFNlZ21lbnRzW2ldO1xyXG5cdFx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gc3RyaW5nIG9iamVjdCBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBxdWVyeSBzdHJpbmcuIEZpZWxkcyB3aWxsIGJlIGFkZGVkXHJcbi8vIHRvIHRoZSBnaXZlbiByZXN1bHQgb2JqZWN0LlxyXG5mdW5jdGlvbiBtYXRjaFF1ZXJ5U3RyaW5nKCBhY3R1YWxRdWVyeTogeyBbUDogc3RyaW5nXTogc3RyaW5nW10gfSwgcGFyc2VkUXVlcnk6IGFwaS5JUGFyc2VkUXVlcnlTdHJpbmcsXHJcblx0XHRcdFx0IGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0aWYgKCFwYXJzZWRRdWVyeSlcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKCFhY3R1YWxRdWVyeSlcclxuXHR7XHJcblx0XHRpZiAoT2JqZWN0LmtleXMoIHBhcnNlZFF1ZXJ5LnBhcnNlZFFTUHMpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBgVVJMIGRvZXNuJ3QgaGF2ZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdH1cclxuXHJcblx0Ly8gZ28gb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlci4gSWYgdGhlcmUgaXMgYW55IG5vbi1vcHRpb25hbFxyXG5cdC8vIHBhcmFtZXRlciB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFjdHVhbCBVUkwsIHdlIGZhaWwgdGhlIG1hdGNoLlxyXG5cdGZvciggbGV0IHFzcE5hbWUgaW4gcGFyc2VkUXVlcnkucGFyc2VkUVNQcylcclxuXHR7XHJcblx0XHRpZiAoYWN0dWFsUXVlcnlbcXNwTmFtZV0gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIGBVUkwgZG9lc24ndCBoYXZlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nYDtcclxuXHR9XHJcblxyXG5cdC8vIGdvIG92ZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgaW4gdGhlIGFjdHVhbCBVUkxcclxuXHRmb3IoIGxldCBxc3BOYW1lIGluIGFjdHVhbFF1ZXJ5KVxyXG5cdHtcclxuXHRcdC8vIGZpbmQgdGhpcyBuYW1lIGluIHRoZSBwYXR0ZXJuLiBJZiB0aGUgcGF0dGVybiBkb2Vzbid0IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIgYW5kIHRoZVxyXG5cdFx0Ly8gcGF0dGVybiBkb2Vzbid0IGFsbG93IGZvciBleHRyYSBwYXJhbWV0ZXJzLCB0aGVuIHRoZXJlIGlzIG5vIG1hdGNoLiBPdGhlcndpc2UsIHRoaXNcclxuXHRcdC8vIHBhcmFtZXRlciBpcyBzaW1wbHkgaWdub3JlZC5cclxuXHRcdGxldCBwYXJzZWRTZWdtZW50ID0gcGFyc2VkUXVlcnkucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50O1xyXG5cdFx0aWYgKCFwYXJzZWRTZWdtZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXBhcnNlZFF1ZXJ5LmFsbG93RXh0cmFRdWVyeVBhcmFtcylcclxuXHRcdFx0XHRyZXR1cm4gYFVSTCBoYXMgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfScgdGhhdCBpcyBub3Qgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZm9yIHNpbmd1bGFyIHNlZ21lbnQgdGhlIHBhcmFtZXRlciBtdXN0IGJlIHByZXNlbnQgb25seSBvbmNlXHJcblx0XHRcdGxldCBxc3BWYWx1ZXMgPSBhY3R1YWxRdWVyeVtxc3BOYW1lXTtcclxuXHRcdFx0aWYgKCFwYXJzZWRTZWdtZW50LmlzTXVsdGkgJiYgcXNwVmFsdWVzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0cmV0dXJuIGBVUkwgaGFzIG11bHRpcGxlIHZhbHVlcyBmb3IgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfScgd2hpbGUgcGF0dGVybiBkb2Vzbid0IHNwZWNpZnkgaXQgYXMgbXVsdGlgO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgcXNwVmFsdWUgb2YgcXNwVmFsdWVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCF0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIHFzcFZhbHVlLCBwYXJzZWRTZWdtZW50LCBmaWVsZHMpKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGBVUkwncyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyBkb2Vzbid0IG1hdGNoIHRoYXQgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWVyZ2VzIGZpZWxkIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0IHRvIHRoZSB0YXJnZXQgb25lLlxyXG5mdW5jdGlvbiBtZXJnZUZpZWxkcyggdGFyZ2V0OiB7IFtQOiBzdHJpbmddOiBhcGkuRmllbGRWYWx1ZVR5cGUgfSwgc291cmNlOiB7IFtQOiBzdHJpbmddOiBhcGkuRmllbGRWYWx1ZVR5cGUgfSk6IHZvaWRcclxue1xyXG5cdGZvciggbGV0IGZpZWxkTmFtZSBpbiBzb3VyY2UpXHJcblx0e1xyXG5cdFx0bGV0IHNvdXJjZVZhbCA9IHNvdXJjZVtmaWVsZE5hbWVdO1xyXG5cdFx0bGV0IHRhcmdldFZhbCA9IHRhcmdldFtmaWVsZE5hbWVdO1xyXG5cdFx0aWYgKHRhcmdldFZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0YXJnZXRbZmllbGROYW1lXSA9IHNvdXJjZVZhbDtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gYm90aCBzb3VyY2UgYW5kIHRhcmdldCB2YWx1ZXMgbXVzdCBiZSBhcnJheXNcclxuXHRcdFx0bGV0IHNvdXJjZUFyciA9IHNvdXJjZVZhbCBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0bGV0IHRhcmdldEFyciA9IHRhcmdldFZhbCBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0Zm9yKCBsZXQgc291cmNlSXRlbSBvZiBzb3VyY2VBcnIpXHJcblx0XHRcdFx0dGFyZ2V0QXJyLnB1c2goIHNvdXJjZUl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIGZpZWxkIHZhbHVlIGNvbnZlcnRlZCB0byB0aGUgcmVxdWlyZWQgZm9ybWF0XHJcbmZ1bmN0aW9uIGNvbnZlcnRGaWVsZFZhbHVlKCBwYXJzZWRGaWVsZDogYXBpLklQYXJzZWRGaWVsZCwgc3RyaW5nVmFsdWU6IHN0cmluZyk6IGFwaS5TaW5nbGVGaWVsZFZhbHVlVHlwZVxyXG57XHJcblx0aWYgKCFzdHJpbmdWYWx1ZSlcclxuXHRcdHJldHVybiBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgYXBpLlNpbmdsZUZpZWxkVmFsdWVUeXBlO1xyXG5cclxuXHRzd2l0Y2goIHBhcnNlZEZpZWxkLmZvcm1hdClcclxuXHR7XHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5JbnRlZ2VyOlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IE51bWJlciggc3RyaW5nVmFsdWUpO1xyXG5cdFx0XHRyZXR1cm4gaXNOYU4odikgfHwgIU51bWJlci5pc0ludGVnZXIodikgPyBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyIDogdjtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5GbG9hdDpcclxuXHRcdHtcclxuXHRcdFx0bGV0IHYgPSBOdW1iZXIoIHN0cmluZ1ZhbHVlKTtcclxuXHRcdFx0cmV0dXJuIGlzTmFOKHYpID8gcGFyc2VkRmllbGQuZGVmYXVsdFZhbHVlIGFzIG51bWJlciA6IHY7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuQm9vbGVhbjpcclxuXHRcdHtcclxuXHRcdFx0bGV0IHYgPSBzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAodiA9PT0gXCJ0cnVlXCIgfHwgdiA9PT0gXCJ0XCIgfHwgdiA9PT0gXCJ5ZXNcIiB8fCB2ID09PSBcInlcIiB8fCB2ID09PSBcIjFcIilcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAodiA9PT0gXCJmYWxzZVwiIHx8IHYgPT09IFwiZlwiIHx8IHYgPT09IFwibm9cIiB8fCB2ID09PSBcIm5cIiB8fCB2ID09PSBcIjBcIilcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VkRmllbGQuZGVmYXVsdFZhbHVlIGFzIGJvb2xlYW47XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0cmluZ1ZhbHVlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBpbGVkU2VnbWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IHNob3VsZCBiZSBjb21wYXJlZCB0byBhXHJcbi8vIHNlZ21lbnQgZnJvbSB0aGUgYWN0dWFsIFVSTCBwYXJ0LiBDb21waWxlZCBzZWdtZW50IGNvbnRhaW5zIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gYW5kIGEgZmxhZ1xyXG4vLyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBzZWdtZW50IGlzIG9wdGlvbmFsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgQ29tcGlsZWRTZWdtZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHBhcnNlZCBzZWdtZW50IG9iamVjdC5cclxuXHRwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgc2VnbWVudCBpcyBvcHRpb25hbC4gRm9yIGVhY2ggXCJvbmUtb3ItbW9yZVwiIHBhcnNlZCBzZWdlbWVudHNcclxuXHQvLyB3ZSBjcmVhdGUgdHdvIGNvbXBpbGVkIHNlZ21lbnRzOiB0aGUgZmlyc3QgaXMgbWFuZGF0b3J5IGFuZCB0aGUgc2Vjb25kIGlzIG9wdGlvbmFsLiBUaGF0J3NcclxuXHQvLyB3aHkgd2UgaGF2ZSB0aGllIGlzT3B0aW9uYWwgZmxhZyBoZXJlLlxyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQsIGlzT3B0aW9uYWw6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0dGhpcy5wYXJzZWRTZWdtZW50ID0gcGFyc2VkU2VnbWVudDtcclxuXHRcdHRoaXMuaXNPcHRpb25hbCA9IGlzT3B0aW9uYWw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVXJsUGF0dGVybk1hdGNoUmVzdWx0IGNsYXNzIGRlc2NyaWJlcyB0aGUgcmVzdWx0IG9mIG1hdGNoaW5nIGEgVVJMIHRvIGEgcGF0dGVybi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFVybFBhdHRlcm5NYXRjaFJlc3VsdCBpbXBsZW1lbnRzIGFwaS5JVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG1hdGNoIHdhcyBzdWNjZXNzdWwgKi9cclxuXHRwdWJsaWMgZ2V0IHN1Y2Nlc3MoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5lcnJvcnMgfHwgdGhpcy5lcnJvcnMubGVuZ3RoID09PSAwOyB9XHJcblxyXG5cdC8qKiBQYXJzZWQgYWN0dWFsIFVSTCAqL1xyXG5cdHBhcnNlZFVSTDogYXBpLklQYXJzZWRBY3R1YWxVUkw7XHJcblxyXG5cdC8qKiBFcnJvciBvYmplY3QgaW4gY2FzZSB0aGUgbWF0Y2ggd2FzIG5vdCBzdWNjZXNzZnVsICovXHJcblx0cHVibGljIGVycm9yczogc3RyaW5nW107XHJcblxyXG5cdC8qKiBGaWVsZCBuYW1lcyBhbmQgdmFsdWVzICovXHJcblx0cHVibGljIGZpZWxkczogYXBpLkZpZWxkQmFnO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbXVybFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpXCI7XHJcbiIsIu+7v2ltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGFyc2VyJ3MgZW50cnkgZnVuY3Rpb24uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXR0ZXJuKCBwYXR0ZXJuU3RyaW5nOiBzdHJpbmcpOiBhcGkuSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdC8vIGluaXRpYWxpemUgZ2xvYmFsIHZhcmlhYmxlc1xyXG5cdGdfcGF0dGVyblN0cmluZyA9IHBhdHRlcm5TdHJpbmc7XHJcblx0Z19wYXR0ZXJuU3RyaW5nTGVuZ3RoID0gMDtcclxuXHRnX2N1cnJJbmRleCA9IDA7XHJcblx0Z19jdXJyQ2hhciA9ICcnO1xyXG5cclxuXHRpZiAoIXBhdHRlcm5TdHJpbmcpXHJcblx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIFwiVVJMIHBhdHRlcm4gY2Fubm90IGJlIGVtcHR5XCIpO1xyXG5cclxuXHRnX3BhdHRlcm5TdHJpbmdMZW5ndGggPSBwYXR0ZXJuU3RyaW5nLmxlbmd0aDtcclxuXHRnX2N1cnJDaGFyID0gcGF0dGVyblN0cmluZ1swXTtcclxuXHJcblx0Ly8gQ3JlYXRlIHRoZSB0b3AtbGV2ZWwgcGFyc2luZyBvYmplY3QgYW5kIHJ1biB0aGUgcGFyc2luZyBwcm9jZXNzLlxyXG5cdGxldCBwYXJzZWRQYXR0ZXJuID0gbmV3IFBhcnNlZFVybFBhdHRlcm4oKTtcclxuXHRwYXJzZWRQYXR0ZXJuLnBhcnNlKCk7XHJcblx0cmV0dXJuIHBhcnNlZFBhdHRlcm47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluZSBcImdsb2JhbFwiIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIHRvIGFsbCBvYmplY3RzIGluIHRoaXMgbW9kdWxlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gUGF0dGVybiBzdHJpbmcgYmVpbmcgcGFyc2VkXHJcbmxldCBnX3BhdHRlcm5TdHJpbmc6IHN0cmluZztcclxuXHJcbi8vIExlbmd0aCBvZiB0aGUgcGF0dGVybiBzdHJpbmdcclxubGV0IGdfcGF0dGVyblN0cmluZ0xlbmd0aDogbnVtYmVyO1xyXG5cclxuLy8gSW5kZXggb2YgdGhlIGNoYXJhY3RlciBpbiB0aGUgcGF0dGVybiBzdHJpbmcgdGhhdCB0aGUgcGFyc2VyIGlzIGN1cnJlbnRseSB3b3JraW5nIHdpdGguXHJcbmxldCBnX2N1cnJJbmRleDogbnVtYmVyO1xyXG5cclxuLy8gQ2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuIHN0cmluZyB1bmRlciB0aGUgY3VycmVudCBpbmRleC5cclxubGV0IGdfY3VyckNoYXI6IHN0cmluZztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluZSBcImdsb2JhbFwiIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIHRvIGFsbCBvYmplY3RzIGluIHRoaXMgbW9kdWxlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gRGV0ZXJtaW5lcyBpZiB3ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uXHJcbmZ1bmN0aW9uIGdfaXNFbmQoKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIGdfY3VyckluZGV4ID49IGdfcGF0dGVyblN0cmluZ0xlbmd0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUaHJvd3MgZXhjZXB0aW9uIGlmIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi5cclxuZnVuY3Rpb24gZ19jaGVja0VuZCggcmVhc29uPzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0aWYgKGdfY3VyckluZGV4ID09PSBnX3BhdHRlcm5TdHJpbmdMZW5ndGgpXHJcblx0e1xyXG5cdFx0bGV0IG1zZyA9IFwiVW5leHBlY3RlZCBlbmQgb2YgVVJMIHBhdHRlcm5cIjtcclxuXHRcdGlmIChyZWFzb24pXHJcblx0XHRcdG1zZyArPSBcIjogXCIgKyByZWFzb247XHJcblx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIG1zZyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIHRoZSBnaXZlbiBudW1iZXIgb2YgY2hhcmFjdGVycyBmcm9tIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxyXG5mdW5jdGlvbiBnX21vdmUoIGQ6IG51bWJlciA9IDEpOiBib29sZWFuXHJcbntcclxuXHRpZiAoZ19jdXJySW5kZXggPD0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoIC0gZClcclxuXHR7XHJcblx0XHRnX2N1cnJJbmRleCArPSBkO1xyXG5cdFx0Z19jdXJyQ2hhciA9IGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleF07XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGdfY3VyckluZGV4ID0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNb3ZlcyB0byB0aGUgZ2l2ZW4gcG9zaXRpb24gaW4gdGhlIGJ1ZmZlci5cclxuZnVuY3Rpb24gZ19tb3ZlVG8oIGk6IG51bWJlcik6IGJvb2xlYW5cclxue1xyXG5cdGdfY3VyckluZGV4ID0gaTtcclxuXHRpZiAoZ19jdXJySW5kZXggPCBnX3BhdHRlcm5TdHJpbmdMZW5ndGgpXHJcblx0e1xyXG5cdFx0Z19jdXJyQ2hhciA9IGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleF07XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVXJsUGF0dGVybiBjbGFzcyBpcyB0aGUgdG9wLWxldmVsIG9iamVjdCBkZXNjcmliaW5nIHRoZSByZXN1bHQgb2YgVVJMIHBhcnNpbmcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRVcmxQYXR0ZXJuIGltcGxlbWVudHMgYXBpLklQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHQvLyBPcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBmb3Igd2hpY2ggdGhpcyBvYmplY3Qgd2FzIGNyZWF0ZWQuXHJcblx0cHVibGljIHBhdHRlcm5TdHJpbmc6IHN0cmluZztcclxuXHJcblx0Ly8gUHJvdG9jb2wgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBwcm90b2NvbCgpOiBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5Qcm90b2NvbF0gYXMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBIb3N0bmFtZSBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IGhvc3RuYW1lKCk6IGFwaS5JUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuSG9zdG5hbWVdIGFzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBQb3J0IFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcG9ydCgpOiBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5Qb3J0XSBhcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIFBhdGggVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBwYXRoKCk6IGFwaS5JUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUGF0aF0gYXMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIFF1ZXJ5IFN0cmluZyBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHF1ZXJ5KCk6IGFwaS5JUGFyc2VkUXVlcnlTdHJpbmdcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlF1ZXJ5XSBhcyBQYXJzZWRRdWVyeVN0cmluZyB9XHJcblxyXG5cdC8vIEhhc2ggVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBoYXNoKCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0Lkhhc2hdIGFzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gQXJyYXkgb2YgVVJMIHBhcnQuIEluZGV4ZXMgYXJlIHZhbHVlcyBmcm9tIHRoZSBVcmxQYXJ0IGVudW1lcmF0aW9uLlxyXG5cdHB1YmxpYyBwYXJ0czogUGFyc2VkVXJsUGFydFtdO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLnBhdHRlcm5TdHJpbmcgPSBnX3BhdHRlcm5TdHJpbmc7XHJcblx0XHR0aGlzLnBhcnRzID0gW107XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcnNlcyB0aGUgZW50aXJlIFVSTCBwYXR0ZXJuIHBhcnQgYnkgcGFydFxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gbG9vcCBvZiBwYXJzaW5nIFVSTCBwYXJ0c1xyXG5cdFx0Zm9yKCBsZXQgcGFydCA9IHRoaXMuZmluZEZpcnN0VXJsUGFydCgpOyBwYXJ0ICE9PSBudWxsOyBwYXJ0ID0gcGFydC5nZXROZXh0VXJsUGFydCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRwYXJ0LnBhcnNlKCk7XHJcblx0XHRcdHRoaXMucGFydHNbcGFydC51cmxQYXJ0XSA9IHBhcnQ7XHJcblx0XHRcdGlmIChnX2lzRW5kKCkpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgdGhlIGZpcnN0IFVSTCBwYXJ0IHRoZSBwYXJzZXIgd2lsbCBiZSB3b3JraW5nIG9uLlxyXG5cdHByaXZhdGUgZmluZEZpcnN0VXJsUGFydCgpOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09IFwiL1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoID4gMSAmJiBnX3BhdHRlcm5TdHJpbmdbMV0gPT09IFwiL1wiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Z19tb3ZlKDIpO1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkSG9zdG5hbWUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFBhdGgoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBnX3BhdHRlcm5TdHJpbmcuaW5kZXhPZiggXCI6Ly9cIik7XHJcblx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQcm90b2NvbCgpO1xyXG5cdFx0XHRlbHNlIGlmIChpbmRleCA8IDApXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIb3N0bmFtZSgpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBcIlVSTCBwYXR0ZXJuIGNhbm5vdCBzdGFydCBmcm9tICc6Ly8nXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFRva2VuIGlzIGEgYmFzZSBjbGFzcyB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gTG9jYXRpb24gb2YgdGhlIHBhcnQgaW4gdGhlIG9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHplcm8tYmFzZWQgaW5kZXggd2hlcmVcclxuXHQvLyB0aGUgcGFydCBiZWdpbnMgYW5kIGl0cyBsZW5ndGguXHJcblx0bG9jYXRpb246IHsgc3RhcnQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIgfTtcclxuXHJcblx0LyoqIENvbnRlbnQgb2YgdGhlIHRva2VuICovXHJcblx0dG9rZW5TdGluZzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5sb2NhdGlvbiA9IHsgc3RhcnQ6IGdfY3VyckluZGV4LCBsZW5ndGg6IDAgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBmaW5hbGl6ZSgpXHJcblx0e1xyXG5cdFx0dGhpcy5sb2NhdGlvbi5sZW5ndGggPSBnX2N1cnJJbmRleCAtIHRoaXMubG9jYXRpb24uc3RhcnQ7XHJcblx0XHR0aGlzLnRva2VuU3RpbmcgPSBnX3BhdHRlcm5TdHJpbmcuc3Vic3RyKCB0aGlzLmxvY2F0aW9uLnN0YXJ0LCB0aGlzLmxvY2F0aW9uLmxlbmd0aCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVXJsUGFydCBpcyBhIGJhc2UgY2xhc3MgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRVcmxQYXJ0IGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8vIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuXHJcblx0dXJsUGFydDogYXBpLkVVcmxQYXJ0O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcGFyaXNvbiBvZiB0aGlzIHBhcnQgc2hvbGQgYmUgY2FzZS1zZW5zaXRpdmUgb3Igbm90LlxyXG5cdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnVybFBhcnQgPSB1cmxQYXJ0O1xyXG5cdFx0dGhpcy5jYXNlU2Vuc2l0aXZlID0gY2FzZVNlbnNpdGl2ZTtcclxuXHR9XHJcblxyXG5cdC8vIFBhcnNlcyB0aGlzIHRva2VuXHJcblx0cHVibGljIGFic3RyYWN0IHBhcnNlKCk6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgYW5kIGNyYXRlcyBpZiBuZWNlc3NhcnkgdGhlIG5leHQgVVJMIHBhcnQgYmFzZWQgb24gdGhlIGN1cnJlbnQgY2hhcmFjdGVyXHJcblx0cHVibGljIGFic3RyYWN0IGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0O1xyXG5cclxuXHQvLyBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0U2VnbWVudHMoKTogUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4vLyBkZWZpbmUgYSBzaW5nbGUgc2VnbWVudDogcHJvdG9jb2wsIHBvcnQgYW5kIGhhc2guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBleHRlbmRzIFBhcnNlZFVybFBhcnQgaW1wbGVtZW50cyBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHNlZ21lbnQ6IFBhcnNlZFNlZ21lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVybFBhcnQsIGNhc2VTZW5zaXRpdmUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgc2VnbWVudCA9IG5ldyBQYXJzZWRTZWdtZW50KCk7XHJcblx0XHRzZWdtZW50LnBhcnNlKCB0aGlzLmdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCksIGZhbHNlLCB0aGlzLmNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5zZWdtZW50ID0gc2VnbWVudDtcclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W10geyByZXR1cm4gW3RoaXMuc2VnbWVudF07IH1cclxuXHJcblx0Ly8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNvbnRhaW5zIGNoYXJhY3Rlciwgd2hpY2ggaW5kaWNhdGUgc2VnbWVudCBlbmQgZm9yIHRoZSBnaXZlbiBVUkwgcGFydC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuLy8gY2FuIGRlZmluZSBtdWx0aXBsZSBzZWdtZW50czogaG9zdG5hbWUgYW5kIHBhdGguXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgUGFyc2VkVXJsUGFydCBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Ly8gVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy5cclxuXHRzZWdtZW50czogUGFyc2VkU2VnbWVudFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB1cmxQYXJ0LCBjYXNlU2Vuc2l0aXZlKTtcclxuXHRcdHRoaXMuc2VnbWVudHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHBhcnRFbmRDaGFyYWN0ZXJzID0gdGhpcy5nZXRQYXJ0RW5kQ2hhcmFjdGVycygpO1xyXG5cclxuXHRcdC8vIHBhcnNlIHNlZ21lbnRzIHVudGlsIHRoZSBjdXJyZW50IGNoYXJhY3RlciBpcyB0aGUgZW5kIG9mIHRoZSBVUkwgcGFydFxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdFx0c2VnbWVudC5wYXJzZSggdGhpcy5nZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpLCB0cnVlLCB0aGlzLmNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0XHR0aGlzLnNlZ21lbnRzLnB1c2goIHNlZ21lbnQpO1xyXG5cdFx0XHRpZiAocGFydEVuZENoYXJhY3RlcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W10geyByZXR1cm4gdGhpcy5zZWdtZW50czsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVyLCB3aGljaCBpbmRpY2F0ZSBzZWdtZW50IGVuZCBmb3IgdGhlIGdpdmVuIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRQYXJ0RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQcm90b2NvbCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcHJvdG9jb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRQcm90b2NvbCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5Qcm90b2NvbCwgZmFsc2UpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCI6XCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09IFwiOlwiICYmIGdfY3VyckluZGV4ICsgMiA8IGdfcGF0dGVyblN0cmluZ0xlbmd0aCAmJlxyXG5cdFx0XHRnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXgrMV0gPT09IFwiL1wiICYmIGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleCsyXSA9PT0gXCIvXCIpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgzKTtcclxuXHRcdFx0Z19jaGVja0VuZCgpO1xyXG5cdFx0XHRsZXQgcGFydCA9IG5ldyBQYXJzZWRIb3N0bmFtZSgpO1xyXG5cdFx0XHRyZXR1cm4gcGFydDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXJzIGFmdGVyIHByb3RvY29sIHBhcnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRIb3N0bmFtZSBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgaG9zdG5hbWUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRIb3N0bmFtZSBleHRlbmRzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0Lkhvc3RuYW1lLCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIi46Lz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIjovPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJzonKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0Z19jaGVja0VuZCggXCJQb3J0IGNhbm5vdCBiZSBlbXB0eVwiKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQb3J0KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnLycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRQYXRoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfScgYWZ0ZXIgaG9zdG5hbWUgc2VnbWVudGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFBvcnQgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIHBvcnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRQb3J0IGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0LlBvcnQsIGZhbHNlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICcvJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZFBhdGgoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZFF1ZXJ5U3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICcke2dfY3VyckNoYXJ9JyBhZnRlciBwb3J0IHBhcnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQYXRoIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwYXRoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUGF0aCBleHRlbmRzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0LlBhdGgsIHRydWUpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCIvPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0UGFydEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkUXVlcnlTdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nIGFmdGVyIHBhdGggc2VnbWVudGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFF1ZXJ5U3RyaW5nIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUXVlcnlTdHJpbmcgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRRdWVyeVN0cmluZ1xyXG57XHJcblx0Ly8gUXVlcnkgc3RyaW5nIGRlZmluZXMgb25lIHNlZ21lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuXHJcblx0cGFyc2VkUVNQczogeyBbUDogc3RyaW5nXTogYXBpLklQYXJzZWRRU1AgfTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgbm90IHNwZWNpZmllZCBleHBsaWNpdGx5IGluIHRoZSBwYXR0ZXJuXHJcblx0Ly8gd2lsbCBiZSBhbGxvd2VkIHdoZW4gcGFyc2luZyBhY3R1YWwgVVJMcy5cclxuXHRhbGxvd0V4dHJhUXVlcnlQYXJhbXM6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlciggYXBpLkVVcmxQYXJ0LlF1ZXJ5LCB0cnVlKTtcclxuXHJcblx0XHR0aGlzLnBhcnNlZFFTUHMgPSB7fTtcclxuXHRcdHRoaXMuYWxsb3dFeHRyYVF1ZXJ5UGFyYW1zID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcGFyc2Ugc2VnbWVudHMgdW50aWwgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzIHRoZSBlbmQgb2YgdGhlIFVSTCBwYXJ0XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiBnX2N1cnJDaGFyICE9PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAnIScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBzcGVjaWFsIGNhc2UgZm9yIGRpc2FibGluZyBtYXRjaGluZyB3aXRoIGV4dHJhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXHJcblx0XHRcdFx0dGhpcy5hbGxvd0V4dHJhUXVlcnlQYXJhbXMgPSBmYWxzZTtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcXNwID0gbmV3IFBhcnNlZFFTUCgpO1xyXG5cdFx0XHRcdHFzcC5wYXJzZSgpO1xyXG5cdFx0XHRcdGlmIChxc3AubmFtZSBpbiB0aGlzLnBhcnNlZFFTUHMpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcC5uYW1lfScgYXBwZWFycyBtb3JlIHRoYW4gb25jZWApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VkUVNQc1txc3AubmFtZV0gPSBxc3A7XHJcblxyXG5cdFx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAnJicpXHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICcke2dfY3VyckNoYXJ9JyBhZnRlciBxdWVyeSBzdHJpbmcgc2VnbWVudGApO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXVxyXG5cdHtcclxuXHRcdGxldCBzZWdtZW50czogUGFyc2VkU2VnbWVudFtdID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXHJcblx0XHRmb3IoIGxldCBxc3BOYW1lIGluIHRoaXMucGFyc2VkUVNQcylcclxuXHRcdFx0c2VnbWVudHMucHVzaCggdGhpcy5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQgYXMgUGFyc2VkU2VnbWVudCk7XHJcblxyXG5cdFx0cmV0dXJuIHNlZ21lbnRzO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEhhc2ggY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIGhhc2guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRIYXNoIGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0Lkhhc2gsIHRydWUpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRRU1AgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgbWF0Y2hpbmcgYSBzaW5nbGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFFTUCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRRU1Bcclxue1xyXG5cdC8vIFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgbmFtZS5cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFF1ZXJ5IFN0cmluZyBkZWZpbmVzIG9uZSBzZWdtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLlxyXG5cdHNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcGFyYW1ldGVyIG5hbWVcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIFwiPSYjXCIuaW5kZXhPZiggZ19jdXJyQ2hhcikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm5hbWUgKz0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLm5hbWUpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgZG9lc24ndCBoYXZlIG5hbWVgKTtcclxuXHRcdGVsc2UgaWYgKCFpc1ZhbGlkUXVlcnlQYXJhbU5hbWUoIHRoaXMubmFtZSkpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgbmFtZSAnJHt0aGlzLm5hbWV9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcmApO1xyXG5cclxuXHRcdGlmIChnX2lzRW5kKCkgfHwgZ19jdXJyQ2hhciAhPT0gJz0nKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3RoaXMubmFtZX0nIG11c3QgYmUgZm9sbG93ZWQgYnkgJz0nYCk7XHJcblxyXG5cdFx0Z19tb3ZlKCk7XHJcblx0XHRnX2NoZWNrRW5kKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHt0aGlzLm5hbWV9JyBkb2Vzbid0IGhhdmUgdmFsdWVgKTtcclxuXHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdHNlZ21lbnQucGFyc2UoIFwiJiNcIiwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNlZ21lbnQgPSBzZWdtZW50O1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpc05hbWVFbmRDaGFyYWN0ZXIoIGM6IHN0cmluZylcclxuXHR7XHJcblx0XHRyZXR1cm4gXCI9JiNcIi5pbmRleE9mKCBjKSA+PSAwO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFNlZ21lbnQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSBzZWdtZW50IGluIGEgVVJMIHBhdHRlcm4gdGhhdCBjYW4gYmUgbWF0Y2hlZCB0byBvbmVcclxuLy8gb3IgbW9yZSBwYXJ0cyBvZiBhbiBhY3R1YWwgVVJMLiBFYWNoIHNlZ21lbnQgY2FuIGhhdmUgemVybyBvciBtb3JlIGZpZWxkcyBkZWZpbmVkIGluIGl0LlxyXG4vLyBBIGZpZWxkIGlzIGRlZmluZWQgZWl0aGVyIHdpdGggb3Igd2l0aG91dCBhIG5hbWUuIFVubmFtZWQgZmllbGRzIGFyZSBhbHNvIGNhbGxlZFxyXG4vLyBhbm9ueW1vdXMgYW5kIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCBhbiBpbmRleC4gV2hlbiB0aGUgVVJMIHBhdHRlcm4gaXMgcGFyc2VkIGludG8gc2VnbWVudHMsXHJcbi8vIHRoZSBhbm9ueW1vdXMgZmllbGRzIGFyZSBudW1iZXJlZCBzZXF1ZW50aWFsbHkgYWNjcm9zcyBtdWx0aXBsZSBzZWdtZW50cy4gVGhhdCBtZWFucyB0aGF0XHJcbi8vIGluZGV4ZXMgZG8gbm90IHJlc3RhcnQgZm9yIGVhY2ggc2VnbWVudCBhbmQgdGh1cyBpbmRleGVzIGZvciBhIHNlZ21lbnQncyBmaWVsZHMgbWF5IG5vdFxyXG4vLyBzdGFydCBmcm9tIHplcm8uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRTZWdtZW50IGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFNlZ21lbnRcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgY2FuIGJlIHJlcGVhdGVkIG11dGlwbGUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIGJvdGhcclxuXHQvLyBvcHRpb25hbCBhbmQgbXVsdGkgY2FuIGJlIHJlcGVhdGVkIHplcm8gb3IgbW9yZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgbm90IG9wdGlvbmFsIGJ1dFxyXG5cdC8vIG11bHRpIGNhbiBiZSByZXBlYXRlZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuXHRpc011bHRpOiBib29sZWFuO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZmllbGRzLiAqL1xyXG5cdGZpZWxkczogUGFyc2VkRmllbGRbXTtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc2VnbWVudCdzIG1hdGNoIHBhdHRlcm4uXHJcblx0cmVnRXhwOiBSZWdFeHA7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNPcHRpb25hbCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc011bHRpID0gZmFsc2U7XHJcblx0XHR0aGlzLmZpZWxkcyA9IFtdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcGFyc2UoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nLCBpc1BvdGVudGlhbGx5TXVsdGk6IGJvb2xlYW4sIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gYW5hbHl6ZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBzZWdtZW50IGFuZCBpZiBpdCB3YXMgYSBzcGVjaWFsIGNoYXJhY3RlciB0aGF0XHJcblx0XHQvLyBkZXRlcm1pbmVzIHRoZSBzZWdtZW50cyBvcHRpb25hbCBhbmQgbXVsdGkgZmxhZ3MsIG1vdmUgdG8gdGhlIG5leHQgY2hhcmFjdGVyLlxyXG5cdFx0aWYgKHRoaXMuYW5hbGl6ZUZpcnN0Q2hhciggc2VnbWVudEVuZENoYXJzLCBpc1BvdGVudGlhbGx5TXVsdGkpKVxyXG5cdFx0XHRnX21vdmUoKTtcclxuXHJcblx0XHQvLyBtYXRjaCBwYXR0ZXJuIG9mIHRoZSBzZWdtZW50IGNvbnNpc3Rpbmcgb2YgZWxlbWVudHMgZWFjaCBvZiB3aGljaCBpcyBlaXRoZXIgdGV4dCBvclxyXG5cdFx0Ly8gcmVndWxhciBleHByZXNzaW9uIG9yIGZpZWxkXHJcblx0XHRsZXQgbWF0Y2hQYXR0ZXJuOiAoUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwKVtdID0gW107XHJcblxyXG5cdFx0Ly8gcGFyc2UgdG9rZW5zIGluIHRoZSBzZWdtZW50ICh0ZXh0LCByZWdleHAsIGZpZWxkcykgdW50aWwgZWl0aGVyIHdlIHJlYWNoIHRoZSBlbmQgb2ZcclxuXHRcdC8vIHRoZSBlbnRpcmUgVVJMIHBhdHRlcm4gb3Igd2UgZW5jb3VudGVyIGEgc2VnbWVudCBkZWxpbWl0ZXJcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA8IDApXHJcblx0XHR7XHJcblx0XHRcdGxldCB0b2tlbjogUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwO1xyXG5cdFx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJ3snKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGZpZWxkID0gbmV3IFBhcnNlZEZpZWxkKCk7XHJcblx0XHRcdFx0ZmllbGQucGFyc2UoIHNlZ21lbnRFbmRDaGFycyk7XHJcblx0XHRcdFx0dG9rZW4gPSBmaWVsZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnKCcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcmVnRXhwID0gbmV3IFBhcnNlZFJlZ0V4cCgpO1xyXG5cdFx0XHRcdHJlZ0V4cC5wYXJzZSgpO1xyXG5cdFx0XHRcdHRva2VuID0gcmVnRXhwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCB0ZXh0ID0gbmV3IFBhcnNlZFRleHQoKTtcclxuXHRcdFx0XHR0ZXh0LnBhcnNlKCBzZWdtZW50RW5kQ2hhcnMgKyBcInsoXCIpO1xyXG5cdFx0XHRcdHRva2VuID0gdGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0Y2hQYXR0ZXJuLnB1c2goIHRva2VuKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdlbmVyYXRlUmVnRXhwKCBtYXRjaFBhdHRlcm4sIGNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBbmFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBzZWdtZW50IGFuZCByZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBzcGVjaWFsIGNoYXJhY3RlclxyXG5cdC8vIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsIGFuZCB3aGV0aGVyIGl0IGlzIFwibXVsdGlcIi5cclxuXHRwcml2YXRlIGFuYWxpemVGaXJzdENoYXIoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nLCBpc1BvdGVudGlhbGx5TXVsdGk6IGJvb2xlYW4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBnX2N1cnJDaGFyKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlICc/JzogdGhpcy5pc09wdGlvbmFsID0gdHJ1ZTsgcmV0dXJuIHRydWU7XHJcblx0XHRcdGNhc2UgJyEnOiByZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdGNhc2UgJyonOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFpc1BvdGVudGlhbGx5TXVsdGkpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBTaW5nbGUtdmFsdWUgc2VnbWVudCBVUkwgcGFydCBjYW5ub3Qgc3RhcnQgZnJvbSAnKidgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc011bHRpID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2FzZSAnKyc6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWlzUG90ZW50aWFsbHlNdWx0aSlcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFNpbmdsZS1zZWdtZW50IFVSTCBwYXJ0IGNhbm5vdCBzdGFydCBmcm9tICcrJ2ApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmlzTXVsdGkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRW1wdHkgc2VnbWVudCBlbmNvdW50ZXJlZGApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBkZXNjcmliaW5nIHRoZSBzZWdtZW50LlxyXG5cdHByaXZhdGUgZ2VuZXJhdGVSZWdFeHAoIG1hdGNoUGF0dGVybjogKFBhcnNlZFRleHQgfCBQYXJzZWRGaWVsZCB8IFBhcnNlZFJlZ0V4cClbXSxcclxuXHRcdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gMS1iYXNlZCBpbmRleCBvZiB0aGUgUmVnRXhwIGNhcHR1cmluZyBncm91cC4gV2UgbmVlZCB0byBjb3VudCBjYXB0dXJpbmcgZ3JvdXBzIGluXHJcblx0XHQvLyBvcmRlciB0byBsYXRlciBnZXQgdmFsdWVzIG9mIG5hbWVkIGFuZCBhbm9ueW1vdXMgZmllbGRzLlxyXG5cdFx0bGV0IG5leHRDYXB0dXJpbmdHcm91cEluZGV4ID0gMTtcclxuXHJcblx0XHRsZXQgcmVnRXhwU3RyaW5nID0gXCJcIjtcclxuXHRcdGlmIChtYXRjaFBhdHRlcm4ubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZWdFeHBTdHJpbmcgKz0gXCIuK1wiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB0b2tlbiBvZiBtYXRjaFBhdHRlcm4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRUZXh0KVxyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IHRva2VuLmNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRSZWdFeHApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IFwiKFwiICsgdG9rZW4uY29udGVudCArIFwiKVwiO1xyXG5cdFx0XHRcdFx0bmV4dENhcHR1cmluZ0dyb3VwSW5kZXggKz0gMSArIHRva2VuLmNhcHR1cmluZ0dyb3VwUXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIC8vIGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlZEZpZWxkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRva2VuLmlzQXJyYXkgPSB0aGlzLmlzTXVsdGk7XHJcblx0XHRcdFx0XHR0b2tlbi5pbmRleCA9IG5leHRDYXB0dXJpbmdHcm91cEluZGV4O1xyXG5cdFx0XHRcdFx0dGhpcy5maWVsZHMucHVzaCggdG9rZW4pO1xyXG5cdFx0XHRcdFx0cmVnRXhwU3RyaW5nICs9IHRoaXMuZ2VuZXJhdGVSZWdFeHBTZWN0aW9uRm9yRmllbGQoIHRva2VuKTtcclxuXHRcdFx0XHRcdG5leHRDYXB0dXJpbmdHcm91cEluZGV4Kys7XHJcblx0XHRcdFx0XHRpZiAodG9rZW4ubWF0Y2hQYXR0ZXJuKVxyXG5cdFx0XHRcdFx0XHRuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCArPSAxICsgdG9rZW4ubWF0Y2hQYXR0ZXJuLmNhcHR1cmluZ0dyb3VwUXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVnRXhwID0gbmV3IFJlZ0V4cCggcmVnRXhwU3RyaW5nLCBjYXNlU2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gZ3JvdXAgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuXHRwcml2YXRlIGdlbmVyYXRlUmVnRXhwU2VjdGlvbkZvckZpZWxkKCBwYXJzZWRGaWVsZDogUGFyc2VkRmllbGQpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRpZiAocGFyc2VkRmllbGQubWF0Y2hQYXR0ZXJuICYmIHBhcnNlZEZpZWxkLm1hdGNoUGF0dGVybi5jb250ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRzICs9IHBhcnNlZEZpZWxkLm1hdGNoUGF0dGVybi5jb250ZW50O1xyXG5cdFx0XHRpZiAocGFyc2VkRmllbGQuaXNPcHRpb25hbClcclxuXHRcdFx0XHRzICs9IFwiP1wiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocGFyc2VkRmllbGQuaXNPcHRpb25hbClcclxuXHRcdFx0cyArPSBcIiguKilcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cyArPSBcIiguKylcIjtcclxuXHJcblx0XHQvLyBzICs9IFwiKVwiO1xyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVGV4dCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHRleHQgc2VjdGlvbiB3aXRoaW4gYSBzZWdtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkVGV4dCBleHRlbmRzIFBhcnNlZFRva2VuXHJcbntcclxuXHQvLyBUZXh0IHNlY3Rpb24gc3RyaW5nXHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY29udGVudCA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwYXJzZSggdGV4dEVuZENoYXJzOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiB0ZXh0RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHRzICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghaXNWYWxpZFRleHRUb2tlbiggcykpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFRleHQgdG9rZW4gJyR7c30nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc2ApO1xyXG5cclxuXHRcdC8vIHRleHQgbWlnaHQgaGF2ZSBiZWVuIFVSTCBlbmNvZGVkXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgVGV4dCB0b2tlbiAnJHtzfScgY2Fubm90IGJlIFVSTC1kZWNvZGVkLiBFcnJvcjogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUmVnRXhwIGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgcmVndWxhciBleHByZXNzaW9uIHNlY3Rpb24gd2l0aGluIGEgc2VnbWVudCBvclxyXG4vLyBmaWVsZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFJlZ0V4cCBleHRlbmRzIFBhcnNlZFRva2VuXHJcbntcclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nXHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgY2FwdHVyaW5nIGdyb3VwcyB3aXRoaW4gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvblxyXG5cdGNhcHR1cmluZ0dyb3VwUXR5OiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gXCJcIjtcclxuXHRcdHRoaXMuY2FwdHVyaW5nR3JvdXBRdHkgPSAwO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIHJlZ3VsYXIgZXhwcmVzc2lvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzICcoJ1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gU3RhY2sgb2Ygb3BlbmluZyBhbmQgY2xvc2luZyBjaGFyYWN0ZXJzIChwYXJlbnRoZXNpcywgYnJhY2tldHMgYW5kIGN1cmx5IGJyYWNlcykgZm9yXHJcblx0XHQvLyBwYXJzaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgc2VjdGlvbi4gUmVndWxhciBleHByZXNzaW9uIHNlY3Rpb24gc3RvcHMgd2hlbiB3ZSBlbmNvdW50ZXJcclxuXHRcdC8vIGNoYXJhY3RlciAnKScgYW5kIHRoaXMgc3RhY2sgaXMgZW1wdHkuXHJcblx0XHRsZXQgc3RhY2s6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXJyQ2hhciA9IGdfY3VyckNoYXI7XHJcblx0XHRcdGlmIChjdXJyQ2hhciA9PT0gJyknKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHN0YWNrLnBvcCgpID09PSAnKCcpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0XHRpZiAoc3RhY2subGVuZ3RoID09PSAwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgKz0gY3VyckNoYXI7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBOb24tbWF0Y2hpbmcgY2hhcmFjdGVyICcke2N1cnJDaGFyfScgaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY3VyckNoYXIgPT09ICd9JylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzdGFjay5wb3AoKSA9PT0gJ3snKVxyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgTm9uLW1hdGNoaW5nIGNoYXJhY3RlciAnJHtjdXJyQ2hhcn0nIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnXScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICdbJylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYE5vbi1tYXRjaGluZyBjaGFyYWN0ZXIgJyR7Y3VyckNoYXJ9JyBpbiByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChcIih7W1wiLmluZGV4T2YoIGN1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGN1cnJDaGFyID09PSAnKCcpXHJcblx0XHRcdFx0XHR0aGlzLmNhcHR1cmluZ0dyb3VwUXR5Kys7XHJcblxyXG5cdFx0XHRcdHN0YWNrLnB1c2goIGN1cnJDaGFyKTtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjdXJyQ2hhciA9PT0gJ1xcXFwnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50ICs9IGN1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGdfY2hlY2tFbmQoIGBJbiB0aGUgUmVnZXhwICcke3RoaXMuY29udGVudH0nLCB0aGUgZXNjYXBlIGNoYXJhY3RlciAnXFxcXCcgbXVzdCBiZSBmb2xsb3dlZCBieSBhbm90aGVyIGNoYXJhY3RlcmApO1xyXG5cdFx0XHRcdGN1cnJDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLmNvbnRlbnQgKz0gY3VyckNoYXI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gd2UgZW5kIHVwIGhlcmUgb25seSBpZiB0aGUgVVJMIHBhdHRlcm4gZW5kZWQgd2hpbGUgd2l0aGluIHVuZmluaXNoZWQgcmVndWxhciBleHByZXNzaW9uXHJcblx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIFVSTCBwYXR0ZXJuIGVuZCB3aXRoaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluYWxpemUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jb250ZW50KVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBFbXB0eSByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHJcblx0XHRzdXBlci5maW5hbGl6ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEZpZWxkIGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgZmllbGQgd2l0aGluIGEgc2VnbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEZpZWxkIGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZEZpZWxkXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgaXMgb3B0aW9uYWxcclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBmaWVsZC5cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIEZpZWxkIEZpZWxkRm9ybWF0XHJcblx0Zm9ybWF0OiBhcGkuRmllbGRGb3JtYXQ7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBkZWZhdWx0IHZhbHVlIG9mIHRoZSBmaWVsZCAqL1xyXG5cdGRlZmF1bHRWYWx1ZTogYXBpLkZpZWxkVmFsdWVUeXBlO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgdmFsdWUgaXMgYW4gYXJyYXkuIFRoaXMgaXMgdHJ1ZSBmb3IgZmllbGRzIHRoYXQgY2FuIGFwcGVhclxyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBVUkwgcGFydC5cclxuXHRpc0FycmF5OiBib29sZWFuO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNhcHR1cmluZyBncm91cCBjb3JyZXNwb25kaW5nIHRvIHRoZSBmaWVsZCB3aXRoaW4gdGhlXHJcblx0Ly8gc2VnbWVudC5cclxuXHRpbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGRlc2NyaWJpbmcgdGhlIG1hdGNoaW5nIHBhdHRlcm4gZm9yIHRoZSBmaWVsZFxyXG5cdG1hdGNoUGF0dGVybjogUGFyc2VkUmVnRXhwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmlzT3B0aW9uYWwgPSBmYWxzZTtcclxuXHRcdHRoaXMubmFtZSA9IFwiXCI7XHJcblx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5TdHJpbmc7XHJcblx0XHR0aGlzLm1hdGNoUGF0dGVybiA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgcmVndWxhZmllbGQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjdXJyZW50IGNoYXJhY3RlciBpcyAneydcclxuXHQgKi9cclxuXHRwdWJsaWMgcGFyc2UoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHNraXAgJ3snXHJcblx0XHRnX21vdmUoKTtcclxuXHRcdGdfY2hlY2tFbmQoIGBBIGZpZWxkIG11c3QgZGVmaW5lIGEgbmFtZWApO1xyXG5cclxuXHRcdC8vIGZpcnN0IGNoZWNrIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBvcHRpb25hbFxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pc09wdGlvbmFsID0gdHJ1ZTtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGNoYXJhY3RlcnMgaW4gdGhlIGZpZWxkIG5hbWVcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblx0XHRcdGVsc2UgaWYgKFwifSglPVwiLmluZGV4T2YoZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5uYW1lICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5uYW1lLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgbXVzdCBoYXZlIG5hbWVgKTtcclxuXHRcdGVsc2UgaWYgKCFpc1ZhbGlkRmllbGROYW1lKCB0aGlzLm5hbWUpKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCBuYW1lICcke3RoaXMubmFtZX0nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc2ApO1xyXG5cclxuXHRcdGdfY2hlY2tFbmQoIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBkb2Vzbid0IGhhdmUgY2xvc2luZyAnfSdgKTtcclxuXHJcblx0XHQvLyBmaWVsZCBtYXkgZGVmaW5lIGZvcm1hdFxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICclJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKClcclxuXHRcdFx0Z19jaGVja0VuZCggYEZpZWxkICcke3RoaXMubmFtZX0nIGRvZXNuJ3Qgc3BlY2lmeSBmb3JtYXQgYWZ0ZXIgJyUnYCk7XHJcblxyXG5cdFx0XHRsZXQgZm9ybWF0Q2hhciA9IGdfY3VyckNoYXI7XHJcblx0XHRcdGlmIChmb3JtYXRDaGFyID09PSAnaScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5JbnRlZ2VyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGZvcm1hdENoYXIgPT09ICdmJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LkZsb2F0O1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGZvcm1hdENoYXIgPT09ICdiJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LkJvb2xlYW47XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkICcke3RoaXMubmFtZX0nIGhhcyBpbnZhbGlkIGZvcm1hdCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nYCk7XHJcblxyXG5cdFx0XHRnX2NoZWNrRW5kKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmllbGQgbWF5IGhhdmUgcmVndWxhciBleHByZXNzaW9uXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJygnKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcmVnRXhwID0gbmV3IFBhcnNlZFJlZ0V4cCgpO1xyXG5cdFx0XHRyZWdFeHAucGFyc2UoKTtcclxuXHRcdFx0dGhpcy5tYXRjaFBhdHRlcm4gPSByZWdFeHA7XHJcblxyXG5cdFx0XHRnX2NoZWNrRW5kKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmllbGQgbWF5IGhhdmUgZGVmYXVsdCB2YWx1ZTogaW4gdGhpcyBjYXNlIGl0IGJlY29tZXMgb3B0aW9uYWxcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnPScpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaXNPcHRpb25hbCA9IHRydWU7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR0aGlzLnBhcnNlRGVmYXVsdFZhbHVlKCBzZWdtZW50RW5kQ2hhcnMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRzd2l0Y2goIHRoaXMuZm9ybWF0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuSW50ZWdlcjogdGhpcy5kZWZhdWx0VmFsdWUgPSBOYU47IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkZsb2F0OiB0aGlzLmRlZmF1bHRWYWx1ZSA9IE5hTjsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuQm9vbGVhbjogdGhpcy5kZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQ7IGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6IHRoaXMuZGVmYXVsdFZhbHVlID0gXCJcIjsgYnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJ30nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBoYXMgaW52YWxpZCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nYCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlRGVmYXVsdFZhbHVlKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblx0XHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICd9JylcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cyArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGVtcHR5IGFuZCBpZiBmaWVsZCBmb3JtYXQgaXMgc2V0IHRvIGEgbm9uLXN0cmluZ1xyXG5cdFx0Ly8gYWxzbyBjaGVjayB3aGV0aGVyIGl0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gdGhlYXQgZm9ybWF0LlxyXG5cdFx0aWYgKCFzKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBkZWZhdWx0IHZhbHVlIGNhbm5vdCBiZSBlbXB0eWApO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIFVSTCBlbmNvZGVkXHJcblx0XHRzID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xyXG5cclxuXHRcdGlmICh0aGlzLmZvcm1hdCA9PT0gYXBpLkZpZWxkRm9ybWF0LkludGVnZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKCBzKTtcclxuXHRcdFx0aWYgKGlzTmFOKCB0aGlzLmRlZmF1bHRWYWx1ZSkgfHwgIU51bWJlci5pc0ludGVnZXIoIHRoaXMuZGVmYXVsdFZhbHVlKSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBEZWZhdWx0IHZhbHVlICcke3N9JyBvZiBJbnRlZ2VyIGZpZWxkICcke3RoaXMubmFtZX0nIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gSW50ZWdlcmApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5mb3JtYXQgPT09IGFwaS5GaWVsZEZvcm1hdC5GbG9hdClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIoIHMpO1xyXG5cdFx0XHRpZiAoaXNOYU4oIHRoaXMuZGVmYXVsdFZhbHVlKSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBEZWZhdWx0IHZhbHVlIG9mICcke3N9JyBGbG9hdCBmaWVsZCAnJHt0aGlzLm5hbWV9JyBjYW5ub3QgYmUgY29udmVydGVkIHRvIEZsb2F0YCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmZvcm1hdCA9PT0gYXBpLkZpZWxkRm9ybWF0LkJvb2xlYW4pXHJcblx0XHR7XHJcblx0XHRcdGxldCB2ID0gcy50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAodiA9PT0gXCJ0cnVlXCIgfHwgdiA9PT0gXCJ0XCIgfHwgdiA9PT0gXCJ5ZXNcIiB8fCB2ID09PSBcInlcIiB8fCB2ID09PSBcIjFcIilcclxuXHRcdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHYgPT09IFwiZmFsc2VcIiB8fCB2ID09PSBcImZcIiB8fCB2ID09PSBcIm5vXCIgfHwgdiA9PT0gXCJuXCIgfHwgdiA9PT0gXCIwXCIpXHJcblx0XHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYERlZmF1bHQgdmFsdWUgb2YgJyR7c30nIEJvb2xlYW4gZmllbGQgJyR7dGhpcy5uYW1lfScgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBCb29sZWFuYCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gcztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIHRleHQgdG9rZW4gaW4gYSBzZWdlbWVudC4gVG8gYmUgdmFsaWQsIGl0IG11c3RcclxuICogYmUgYWxwaGEtbnVtZXJpYyBvciB1bmRlc2NvcmUgJ18nIG9yIGRhc2ggJy0nIG9yIGRvciAnLicgb3IgcGVyY2VudCBzaWduICclJyAoZm9yIFVSTC1lbmNvZGVkIGNoYXJhY3RlcnMpLlxyXG4gKiBAcGFyYW0gc1xyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZFRleHRUb2tlbiggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eW2EtejAtOV9cXC1cXC4lXSskL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBmaWVsZCBuYW1lLiBUbyBiZSB2YWxpZCwgaXQgbXVzdCBzdGFydCBmcm9tIHRoZVxyXG4gKiB0aGUgYWxwaGEtbnVtZXJpYyBvciB1bmRlc2NvcmUgJ18nIGNoYXJhY3RlciBhbmQgYmUgZm9sbG93ZWQgYnkgb3B0aW9uYWwgYWxwaGEtbnVtZXJpYyBvclxyXG4gKiB1bmRlc2NvcmUgJ18nIG9yIGRhc2ggJy0nIGNoYXJhY3RlcnMuXHJcbiAqIEBwYXJhbSBzIFxyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZEZpZWxkTmFtZSggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eW2Etel9dW2EtejAtOV9dKiQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIG5hbWUgb2YgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyLlxyXG4gKiBUbyBiZSB2YWxpZCwgaXQgbXVzdCBiZSBhbHBoYS1udW1lcmljIG9yIHVuZGVzY29yZSAnXycgb3IgZGFzaCAnLScuXHJcbiAqIEBwYXJhbSBzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUXVlcnlQYXJhbU5hbWUoIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlthLXowLTlfXFwtXSskL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBjaGFyYWN0ZXIgaXMgYSBkZWxpbWl0ZXIgdGhhdCBjYW5ub3QgYmUgdXNlZCBhcyB0ZXh0IHdpdGhpbiBVUkxcclxuICogQHBhcmFtIGMgXHJcbiAqL1xyXG5mdW5jdGlvbiBnX2lzRGVsaW1pdGVyKCBjOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCIhQCMkJV4mKigpKz1bXXt9OjtcXFwiJzw+LC4/L3xcXFxcYH5cIi5pbmRleE9mKGMpID49IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXJyb3IgdGhhdCBvY2N1cnJlZCBkdXJpbmcgcGFyc2luZyBvZlxyXG4vLyBhIFVSTCBwYXR0ZXJuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciBpbXBsZW1lbnRzIGFwaS5JVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb25cclxue1xyXG5cdC8vIEluZGV4IGluIHRoZSBwYXR0ZXJuIHN0cmluZyBhdCB3aGljaCB0aGVlcnJvciBvY2N1cnJlZC5cclxuXHRwb3M6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoIG1lc3NhZ2U6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5wb3MgPSBnX2N1cnJJbmRleDtcclxuXHRcdHRoaXMubWVzc2FnZSA9IGBFcnJvciBhdCBwb3NpdGlvbiAke3RoaXMucG9zfTogJHttZXNzYWdlfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=