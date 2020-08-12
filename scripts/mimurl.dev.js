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
exports.parseURL = void 0;
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
exports.match = exports.parseUrlPattern = exports.parseURL = exports.FieldFormat = exports.EUrlPart = void 0;
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
exports.matchParsed = exports.match = void 0;
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./api */ "./lib/api.js"), exports);


/***/ }),

/***/ "./lib/parser.js":
/*!***********************!*\
  !*** ./lib/parser.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePattern = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW11cmwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbXVybC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW11cmwvLi9zcmMvYWN0dWFsLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21pbXVybFR5cGVzLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUEsdUJBQXVCO0FBQ3ZCLFNBQWdCLFFBQVEs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RyxLQUFLLENBQUM7O2dCQUUxQixNQUFNLElBQUksMEJBQTBCLENBQUUscUJBQXFCLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLGtDQUFrQyxDQUFDLENBQUM7U0FDOUg7O1lBRUEsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNEO0FBS0Q7Ozs7R0FJRztBQUNILFNBQVMsZ0JBQWdCLENBQUUsQ0FBUztJQUVuQyxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGdCQUFnQixDQUFFLENBQVM7SUFFbkMsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFTLHFCQUFxQixDQUFFLENBQVM7SUFFeEMsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsYUFBYSxDQUFFLENBQVM7SUFFaEMsT0FBTyxrQ0FBa0MsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGdHQUFnRztBQUNoRyxpQkFBaUI7QUFDakIsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFNLDBCQUEyQixTQUFRLEtBQUs7SUFLN0MsWUFBYSxPQUFlO1FBRTNCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsSUFBSSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0NBQ0QiLCJmaWxlIjoibWltdXJsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbXVybFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW11cmxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW11cmxUeXBlcy5qc1wiKTtcbiIsIu+7v2ltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLyBQYXJzZXMgdGhlIGdpdmVuIFVSTFxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVUkwoIHVybDogc3RyaW5nKTogYXBpLklQYXJzZWRBY3R1YWxVUkxcclxue1xyXG5cdGxldCBwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMID0ge307XHJcblxyXG5cdC8vIGZpbmQgcHJvdG9jb2xcclxuXHRsZXQgaG9zdG5hbWVJbmRleDogbnVtYmVyO1xyXG5cdGxldCBwcm90b2NvbFNlcGFyYXRvckluZGV4ID0gdXJsLmluZGV4T2YoIFwiOi8vXCIpO1xyXG5cdGlmIChwcm90b2NvbFNlcGFyYXRvckluZGV4ID09PSAwKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlVSTCBjYW5ub3Qgc3RhcnQgZnJvbSAnOi8vJ1wiKTtcclxuXHRlbHNlIGlmIChwcm90b2NvbFNlcGFyYXRvckluZGV4ID4gMClcclxuXHR7XHJcblx0XHRwYXJzZWRVUkwucHJvdG9jb2wgPSB1cmwuc3Vic3RyKCAwLCBwcm90b2NvbFNlcGFyYXRvckluZGV4KTtcclxuXHRcdGlmICghaXNWYWxpZFByb3RvY29sKCBwYXJzZWRVUkwucHJvdG9jb2wpKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBQcm90b2NvbCAnJHtwYXJzZWRVUkwucHJvdG9jb2x9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNgKTtcclxuXHJcblx0XHRob3N0bmFtZUluZGV4ID0gcHJvdG9jb2xTZXBhcmF0b3JJbmRleCArIDM7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdGhvc3RuYW1lSW5kZXggPSB1cmxbMF0gPT09ICcvJyA/IC0xIDogMDtcclxuXHJcblx0bGV0IG5leHRTZWFyY2hJbmRleFN0YXJ0ID0gaG9zdG5hbWVJbmRleCA8IDAgPyAwIDogaG9zdG5hbWVJbmRleDtcdFxyXG5cdGxldCBjb2xvbkluZGV4ID0gdXJsLmluZGV4T2YoICc6JywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBzbGFzaEluZGV4ID0gdXJsLmluZGV4T2YoICcvJywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBxdWVzdGlvbkluZGV4ID0gdXJsLmluZGV4T2YoICc/JywgbmV4dFNlYXJjaEluZGV4U3RhcnQpO1xyXG5cdGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZiggJyMnLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblxyXG5cdGlmIChob3N0bmFtZUluZGV4ID49IDApXHJcblx0e1xyXG5cdFx0aWYgKGNvbG9uSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBjb2xvbkluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlIGlmIChzbGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgc2xhc2hJbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZSBpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIHF1ZXN0aW9uSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2UgaWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIGhhc2hJbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHBhcnNlZFVSTC5ob3N0bmFtZS5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBwYXJzZWRVUkwuaG9zdG5hbWVbaV07XHJcblx0XHRcdGlmICghaXNWYWxpZEhvc3RuYW1lU2VnbWVudCggc2VnbWVudCkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgSG9zdG5hbWUgc2VnbWVudCAnJHtzZWdtZW50fScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzYCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoY29sb25JbmRleCA+IDApXHJcblx0e1xyXG5cdFx0bGV0IHBvcnQ6IHN0cmluZztcclxuXHRcdGlmIChzbGFzaEluZGV4ID4gMClcclxuXHRcdFx0cG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxLCBzbGFzaEluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZSBpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgcXVlc3Rpb25JbmRleCAtIGNvbG9uSW5kZXggLSAxKTtcclxuXHRcdGVsc2UgaWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSwgaGFzaEluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEpO1xyXG5cclxuXHRcdGlmICghaXNWYWxpZFBvcnQoIHBvcnQpKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBQb3J0ICcke3BvcnR9JyBjb250YWlucyBub24tbnVtZXJpY2FsIGNoYXJhY3RlcnNgKTtcclxuXHJcblx0XHRwYXJzZWRVUkwucG9ydCA9IE51bWJlcihwb3J0KTtcclxuXHR9XHJcblxyXG5cdC8vIHNsYXNoIGNhbiBiZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGlmIHRoZXJlIGlzIG5vIGhvc3RuYW1lXHJcblx0aWYgKHNsYXNoSW5kZXggPj0gMClcclxuXHR7XHJcblx0XHRpZiAocXVlc3Rpb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEsIHF1ZXN0aW9uSW5kZXggLSBzbGFzaEluZGV4IC0gMSkuc3BsaXQoICcvJyk7XHJcblx0XHRlbHNlIGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwucGF0aCA9IHVybC5zdWJzdHIoIHNsYXNoSW5kZXggKyAxLCBoYXNoSW5kZXggLSBzbGFzaEluZGV4IC0gMSkuc3BsaXQoICcvJyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEpLnNwbGl0KCAnLycpO1xyXG5cclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgcGFyc2VkVVJMLnBhdGgubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWdtZW50ID0gcGFyc2VkVVJMLnBhdGhbaV07XHJcblx0XHRcdGlmICghaXNWYWxpZFNlZ21lbnQoIHNlZ21lbnQpKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYFBhdGggc2VnbWVudCAnJHtzZWdtZW50fScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzYCk7XHJcblxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlZ21lbnQgPSBkZWNvZGVVUklDb21wb25lbnQoIHNlZ21lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBQYXRoIHNlZ21lbnQgJyR7c2VnbWVudH0nIGNhbm5vdCBiZSBVUkwtZGVjb2RlZC4gRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoW2ldID0gc2VnbWVudDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHR7XHJcblx0XHRwYXJzZWRVUkwucXVlcnkgPSB7fTtcclxuXHRcdGxldCBzZWFyY2hTdHJpbmc6IHN0cmluZztcclxuXHRcdGlmIChoYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRzZWFyY2hTdHJpbmcgPSB1cmwuc3Vic3RyKCBxdWVzdGlvbkluZGV4ICsgMSwgaGFzaEluZGV4IC0gcXVlc3Rpb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzZWFyY2hTdHJpbmcgPSB1cmwuc3Vic3RyKCBxdWVzdGlvbkluZGV4ICsgMSk7XHJcblxyXG5cdFx0bGV0IHBhcmFtcyA9IHNlYXJjaFN0cmluZy5zcGxpdCggJyYnKTtcclxuXHRcdGZvciggbGV0IHBhcmFtIG9mIHBhcmFtcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFwYXJhbSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBJbnZhbGlkIHN0dWN0dXJlIG9mIHF1ZXJ5IHN0cmluZyBVUkwgcGFydGApO1xyXG5cclxuXHRcdFx0bGV0IGFyciA9IHBhcmFtLnNwbGl0KCAnPScpO1xyXG5cdFx0XHRsZXQgbmFtZTogc3RyaW5nO1xyXG5cdFx0XHRsZXQgdmFsdWU6IHN0cmluZztcclxuXHRcdFx0aWYgKGFyci5sZW5ndGggPiAyKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cGFyYW19JyBoYXMgbW9yZSB0aGFuIG9uZSAnPScgc3ltYm9sYCk7XHJcblxyXG5cdFx0XHRpZiAoYXJyLmxlbmd0aCA8IDIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lID0gcGFyYW07XHJcblx0XHRcdFx0dmFsdWUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZSA9IGFyclswXTtcclxuXHRcdFx0XHR2YWx1ZSA9IGFyclsxXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpc1ZhbGlkUXVlcnlQYXJhbU5hbWUoIHRoaXMubmFtZSkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBuYW1lICcke25hbWV9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcmApO1xyXG5cclxuXHRcdFx0aWYgKHZhbHVlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFpc1ZhbGlkU2VnbWVudCggdmFsdWUpKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgVmFsdWUgJyR7dmFsdWV9JyBvZiBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke25hbWV9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNgKTtcclxuXHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoIHZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBWYWx1ZSAnJHt2YWx1ZX0nIG9mIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7bmFtZX0nIGNhbm5vdCBiZSBVUkwtZGVjb2RlZC4gRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmFtZSBpbiBwYXJzZWRVUkwucXVlcnkpXHJcblx0XHRcdFx0cGFyc2VkVVJMLnF1ZXJ5W25hbWVdLnB1c2goIHZhbHVlKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcnNlZFVSTC5xdWVyeVtuYW1lXSA9IFt2YWx1ZV07XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGhhc2hJbmRleCA+IDApXHJcblx0e1xyXG5cdFx0bGV0IHZhbHVlID0gdXJsLnN1YnN0ciggaGFzaEluZGV4ICsgMSk7XHJcblx0XHRpZiAoIWlzVmFsaWRTZWdtZW50KCB2YWx1ZSkpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggYFZhbHVlICcke3ZhbHVlfScgb2YgaGFzaCBVUkwgcGFydCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNgKTtcclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0cGFyc2VkVVJMLmhhc2ggPSBkZWNvZGVVUklDb21wb25lbnQoIHZhbHVlKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggYFZhbHVlICcke3ZhbHVlfScgb2YgaGFzaCBVUkwgcGFydCBjYW5ub3QgYmUgVVJMLWRlY29kZWQuIEVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0fVxyXG59XHJcblxyXG5cdHJldHVybiBwYXJzZWRVUkw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgcHJvdG9jb2wgVVJMIHBhcnQuIFRvIGJlIHZhbGlkLCBpdCBtdXN0XHJcbiAqIGJlIGFscGhhLW51bWVyaWMuXHJcbiAqIEBwYXJhbSBzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUHJvdG9jb2woIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlthLXowLTldKyQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIHNlZ21lbnQgaW4gdGhlIGhvc3RuYW1lIFVSTCBwYXJ0LiBUbyBiZSB2YWxpZCxcclxuICogaXQgbXVzdCBiZSBhbHBoYS1udW1lcmljIG9yIHVuZGVyc2NvcmUgJ18nIG9yIGRhc2ggJy0nLlxyXG4gKiBAcGFyYW0gc1xyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZEhvc3RuYW1lU2VnbWVudCggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eW2EtejAtOV9cXC1dKyQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIHBvcnQgVVJMIHBhcnQuIFRvIGJlIHZhbGlkLCBpdCBtdXN0XHJcbiAqIGJlIG51bWVyaWMuXHJcbiAqIEBwYXJhbSBzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUG9ydCggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eXFxkKyQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIHNlZ21lbnQgaW4gcGF0aCwgcXVlcnkgc3RyaW5nIG9yIGhhc2ggVVJMIHBhcnQuXHJcbiAqIFRvIGJlIHZhbGlkLCBpdCBtdXN0IGJlIGFscGhhLW51bWVyaWMgb3IgdW5kZXNjb3JlICdfJyBvciBkYXNoICctJyBvciBwZXJjZW50IHNpZ24gJyUnIChmb3JcclxuICogVVJMLWVuY29kZWQgY2hhcmFjdGVycykuXHJcbiAqIEBwYXJhbSBzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkU2VnbWVudCggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eW2EtejAtOV9cXC1cXC4lXSskL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBuYW1lIG9mIGEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlci5cclxuICogVG8gYmUgdmFsaWQsIGl0IG11c3QgYmUgYWxwaGEtbnVtZXJpYyBvciB1bmRlc2NvcmUgJ18nIG9yIGRhc2ggJy0nLlxyXG4gKiBAcGFyYW0gc1xyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZFF1ZXJ5UGFyYW1OYW1lKCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15bYS16MC05X1xcLV0rJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgcHVibGljIEFQSSBvZiB0aGUgVVJMIFBhcnNpbmcgYW5kIE1hdGNoaW5nIGxpYnJhcnkgJ21pbXVybCcuXHJcbiAqXHJcbiAqIFRvIHJlYWQgYWJvdXQgbWltdXJsIGZlYXR1cmVzXHJcbiAqIDxhIGhyZWY9XCJodHRwczovL21taWNobGluNjYuZ2l0aHViLmlvL21pbXVybC9hYm91dC5odG1sXCIgdGFyZ2V0PVwiX3RvcFwiPnBsZWFzZSB2aXNpdCBoZXJlPC9hPi5cclxuICpcclxuICogVG8gcGxheSB3aXRoIG1pbXVybCBwYXR0ZXJuIHBhcnNpbmcgYW5kIFVSTCBtYXRjaGluZyBjYXBhYmlsaXRpZXNcclxuICogPGEgaHJlZj1cImh0dHBzOi8vbW1pY2hsaW42Ni5naXRodWIuaW8vbWltdXJsL3BsYXlncm91bmQuaHRtbFwiIHRhcmdldD1cIl90b3BcIj5wbGVhc2UgdmlzaXQgaGVyZTwvYT4uXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBQYXJzZWRBY3R1YWxVUkwgY2xhc3MgY29udGFpbnMgVVJMIHBhcnRzIHBhcnNlZCBvdXQgb2YgdGhlIFVSTCBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRBY3R1YWxVUkxcclxue1xyXG5cdC8qKiBQcm90b2NvbCBVUkwgcGFydCAqL1xyXG5cdHByb3RvY29sPzogc3RyaW5nO1xyXG5cclxuXHQvKiogSG9zdG5hbWUgVVJMIHBhcnQgYXMgYXJyYXkgb2YgaG9zdG5hbWUgc2VnbWVudHM6IGUuZy4gYFtcInd3d1wiLCBcImFiY1wiLCBcImNvbVwiXWAgKi9cclxuXHRob3N0bmFtZT86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogUG9ydCBVUkwgcGFydCAqL1xyXG5cdHBvcnQ/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBQYXRoIFVSTCBwYXJ0IGFzIGFycmF5IG9mIHBhdGggc2VnbWVudHM6IGUuZy4gYFtcInVzZXJcIiwgXCIxMjNcIiwgXCJwcm9maWxlXCJdYCAqL1xyXG5cdHBhdGg/OiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIFF1ZXJ5IHN0cmluZyBVUkwgcGFydCBhcyBhIG1hcCBvZiBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyB0byB0aGUgYXJyYXlzIG9mIHRoZWlyIHZhbHVlcyAqL1xyXG5cdHF1ZXJ5PzogeyBbUDogc3RyaW5nXTogc3RyaW5nW10gfTtcclxuXHJcblx0LyoqIEhhc2ggKGZyYWdtZW50KSBVUkwgcGFydCAqL1xyXG5cdGhhc2g/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgVXJsUGFydCBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgZGlzdGluZ3Vpc2hpbmcgVVJMIHBhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVVybFBhcnQgeyBQcm90b2NvbCwgSG9zdG5hbWUsIFBvcnQsIFBhdGgsIFF1ZXJ5LCBIYXNoIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkVXJsUGF0dGVybiBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgdG9wLWxldmVsIG9iamVjdCBkZXNjcmliaW5nIHRoZSByZXN1bHQgb2YgVVJMXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHQvKiogT3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgZm9yIHdoaWNoIHRoaXMgb2JqZWN0IHdhcyBjcmVhdGVkLiAqL1xyXG5cdHBhdHRlcm5TdHJpbmc6IHN0cmluZztcclxuXHJcblx0LyoqIFByb3RvY29sIFVSTCBwYXJ0LiAqL1xyXG5cdHByb3RvY29sOiBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBIb3N0bmFtZSBVUkwgcGFydC4gKi9cclxuXHRob3N0bmFtZTogSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBQb3J0IFVSTCBwYXJ0LiAqL1xyXG5cdHBvcnQ6IElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIFBhdGggVVJMIHBhcnQuICovXHJcblx0cGF0aDogSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBRdWVyeSBTdHJpbmcgVVJMIHBhcnQuICovXHJcblx0cXVlcnk6IElQYXJzZWRRdWVyeVN0cmluZztcclxuXHJcblx0LyoqIEhhc2ggVVJMIHBhcnQuICovXHJcblx0aGFzaDogSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogQXJyYXkgb2YgVVJMIHBhcnQuIEluZGV4ZXMgYXJlIHZhbHVlcyBmcm9tIHRoZSBVcmxQYXJ0IGVudW1lcmF0aW9uLiAqL1xyXG5cdHBhcnRzOiBJUGFyc2VkVXJsUGFydFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFyc2VkTG9jYXRpb24gdHlwZSBkZWZpbmVzIGhvdyBkaWZmZXJlbnQgc2VjdGlvbiBvZiB0aGUgVVJMIHBhdHRlcm4gY2FuIGJlIGxvY2F0ZWQgaW4gdGhlXHJcbiAqIG9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nLiBMb2NhdGlvbiBpcyBkZWZpbmVkIHVzaW5nIHRoZSB6ZXJvLWJhc2VkIGluZGV4IHdoZXJlIHRoZSBzZWN0aW9uXHJcbiAqIGJlZ2lucyBhbmQgaXRzIGxlbmd0aC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFBhcnNlZExvY2F0aW9uID0geyBzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRUb2tlbiBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKlxyXG5cdCAqIExvY2F0aW9uIG9mIHRoZSBwYXJ0IGluIHRoZSBvcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBjb250YWluaW5nIHRoZSB6ZXJvLWJhc2VkIGluZGV4IHdoZXJlXHJcblx0ICogdGhlIHBhcnQgYmVnaW5zIGFuZCBpdHMgbGVuZ3RoLlxyXG5cdCAqL1xyXG5cdGxvY2F0aW9uOiBQYXJzZWRMb2NhdGlvbjtcclxuXHJcblx0LyoqIENvbnRlbnQgb2YgdGhlIHRva2VuICovXHJcblx0dG9rZW5TdGluZzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFVybFBhcnQgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFVybFBhcnQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLiAqL1xyXG5cdHVybFBhcnQ6IEVVcmxQYXJ0O1xyXG5cclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbXBhcmlzb24gb2YgdGhpcyBwYXJ0IHNob2xkIGJlIGNhc2Utc2Vuc2l0aXZlIG9yIG5vdC4gKi9cclxuXHRjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xyXG5cclxuXHQvKiogUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuICovXHJcblx0Z2V0U2VnbWVudHMoKTogSVBhcnNlZFNlZ21lbnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuICogZGVmaW5lIGEgc2luZ2xlIHNlZ21lbnQ6IHByb3RvY29sLCBwb3J0IGFuZCBoYXNoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBJUGFyc2VkVXJsUGFydFxyXG57XHJcblx0LyoqIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuICovXHJcblx0c2VnbWVudDogSVBhcnNlZFNlZ21lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbiAqIGNhbiBkZWZpbmUgbXVsdGlwbGUgc2VnbWVudHM6IGhvc3RuYW1lIGFuZCBwYXRoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCBleHRlbmRzIElQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvKiogVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gKi9cclxuXHRzZWdtZW50czogSVBhcnNlZFNlZ21lbnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRRdWVyeVN0cmluZyBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgcXVlcnkgc3RyaW5nXHJcbiAqIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRRdWVyeVN0cmluZyBleHRlbmRzIElQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvKiogUXVlcnkgc3RyaW5nIGRlZmluZXMgb25lIHNlZ2VtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLiAqL1xyXG5cdHBhcnNlZFFTUHM6IHsgW1A6IHN0cmluZ106IElQYXJzZWRRU1AgfTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgbm90IHNwZWNpZmllZCBleHBsaWNpdGx5IGluIHRoZSBwYXR0ZXJuXHJcblx0ICogd2lsbCBiZSBhbGxvd2VkIHdoZW4gcGFyc2luZyBhY3R1YWwgVVJMcy5cclxuXHQgKi9cclxuXHRhbGxvd0V4dHJhUXVlcnlQYXJhbXM6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkUVNQIGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBtYXRjaGluZyBhIHNpbmdsZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkUVNQIGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBuYW1lLiAqL1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFF1ZXJ5IFN0cmluZyBkZWZpbmVzIG9uZSBzZWdlbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS4gKi9cclxuXHRzZWdtZW50OiBJUGFyc2VkU2VnbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRTZWdtZW50IGludGVyZmFjZSBkZWZpbmVzIGEgc2luZ2xlIHNlZ21lbnQgaW4gYSBVUkwgcGF0dGVybiB0aGF0IGNhbiBiZSBtYXRjaGVkIHRvXHJcbiAqIG9uZSBvciBtb3JlIHBhcnRzIG9mIGFuIGFjdHVhbCBVUkwuIEVhY2ggc2VnbWVudCBjYW4gaGF2ZSB6ZXJvIG9yIG1vcmUgZmllbGRzIGRlZmluZWQgaW4gaXQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRTZWdtZW50IGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWwgKi9cclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBjYW4gYmUgcmVwZWF0ZWQgbXV0aXBsZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgYm90aFxyXG5cdCAqIG9wdGlvbmFsIGFuZCBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgemVybyBvciBtb3JlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBub3Qgb3B0aW9uYWwgYnV0XHJcblx0ICogbXVsdGkgY2FuIGJlIHJlcGVhdGVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG5cdCAqL1xyXG5cdGlzTXVsdGk6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBBcnJheSBvZiBmaWVsZHMgZGVmaW5lZCBpbiB0aGlzIHNlZ21lbnQuICovXHJcblx0ZmllbGRzOiBJUGFyc2VkRmllbGRbXTtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc2VnbWVudCdzIG1hdGNoIHBhdHRlcm4uXHJcblx0cmVnRXhwOiBSZWdFeHA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkRmllbGQgaW50ZXJmYWNlIGRlZmluZXMgYSBzaW5nbGUgZmllbGQgd2l0aGluIGEgc2VnbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZEZpZWxkIGV4dGVuZHMgSVBhcnNlZFRva2VuXHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIGlzIG9wdGlvbmFsICovXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGZpZWxkICovXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogRmllbGQgZm9ybWF0ICovXHJcblx0Zm9ybWF0OiBGaWVsZEZvcm1hdDtcclxuXHJcblx0LyoqIE9wdGlvbmFsIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGZpZWxkICovXHJcblx0ZGVmYXVsdFZhbHVlPzogRmllbGRWYWx1ZVR5cGU7XHJcblxyXG5cdC8vIC8qKiBSZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGRlc2NyaWJpbmcgdGhlIG1hdGNoaW5nIHBhdHRlcm4gZm9yIHRoZSBmaWVsZCAqL1xyXG5cdC8vIG1hdGNoUGF0dGVybjogSVBhcnNlZFJlZ0V4cDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIHZhbHVlIGlzIGFuIGFycmF5LiBUaGlzIGlzIHRydWUgZm9yIGZpZWxkcyB0aGF0IGNhbiBhcHBlYXJcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgVVJMIHBhcnQuXHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYXB0dXJpbmcgZ3JvdXAgY29ycmVzcG9uZGluZyB0byB0aGUgZmllbGQgd2l0aGluIHRoZVxyXG5cdC8vIHNlZ21lbnQuXHJcblx0aW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZpZWxkRm9ybWF0IGNsYXNzIGRlZmluZXMgcG9zc2libGUgZmllbGQgZm9ybWF0cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEZpZWxkRm9ybWF0XHJcbntcclxuXHQvKiogRmllbGQgdmFsdWUgY2FuIGJlIGFyYml0cmFyeSBzdHJpbmcgKi9cclxuXHRTdHJpbmcsXHJcblxyXG5cdC8qKiBGaWVsZCB2YWx1ZSBtdXN0IGJlIGNvbnZlcnRhYmxlIHRvIGFuIGludGVnZXIgbnVtYmVyICovXHJcblx0SW50ZWdlcixcclxuXHJcblx0LyoqIEZpZWxkIHZhbHVlIG11c3QgYmUgY29udmVydGFibGUgdG8gYSByZWFsIG51bWJlciAqL1xyXG5cdEZsb2F0LFxyXG5cclxuXHQvKiogRmllbGQgdmFsdWUgbXVzdCBiZSBjb252ZXJ0YWJsZSB0byBhIEJvb2xlYW4gbnVtYmVyICovXHJcblx0Qm9vbGVhbixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBlcnJvciB0aGF0IG9jY3VycmVkIGR1cmluZyBwYXJzaW5nIG9mXHJcbiAqIGEgVVJMIHBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yXHJcbntcclxuXHQvKiogSW5kZXggaW4gdGhlIHBhdHRlcm4gc3RyaW5nIGF0IHdoaWNoIHRoZWVycm9yIG9jY3VycmVkLiAqL1xyXG5cdHBvczogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTdXBwb3J0ZWQgcHJpbWl0aXZlIHR5cGVzIG9mIGZpZWxkIHZhbHVlcyAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVGaWVsZFZhbHVlVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblxyXG4vKiogVHlwZXMgb2YgZmllbGRzIHdpdGggbXVsdGlwbGUgdmFsdWVzICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRmllbGRWYWx1ZVR5cGUgPSBTaW5nbGVGaWVsZFZhbHVlVHlwZVtdO1xyXG5cclxuLyoqIEZpZWxkIHZhbHVlIHR5cGUsIHdoaWNoIGNhbiBiZSBlaXRoZXIgc2luZ2UgdmFsdWUgb3IgbXVsdGlwbGUgdmFsdWUgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGaWVsZFZhbHVlVHlwZSA9IFNpbmdsZUZpZWxkVmFsdWVUeXBlIHwgTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHJcbi8qKiBPYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIGFyZSBmaWVsZCBuYW1lcyBhbmQgdmFsdWVzIGFyZSBmaWVsZCB2YWx1ZXMuICovXHJcbmV4cG9ydCB0eXBlIEZpZWxkQmFnID0geyBbUDpzdHJpbmddOiBGaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBhbiBhY3R1YWwgVVJMIGFnYWluc3RcclxuICogdGhlIFVSTCBwYXR0ZXJuLiBUaGUgcmVzdWx0IGNvbnRhaW5zIHZhbHVlcyBvZiBuYW1lZCBhbmQgaW5kZXhlZCBmaWVsZHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbWF0Y2ggd2FzIHN1Y2Nlc3N1bCAqL1xyXG5cdHN1Y2Nlc3M6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBQYXJzZWQgYWN0dWFsIFVSTCAqL1xyXG5cdHBhcnNlZFVSTDogSVBhcnNlZEFjdHVhbFVSTDtcclxuXHJcblx0LyoqIEVycm9yIG1lc3NhZ2VzIGluIGNhc2UgdGhlIG1hdGNoIHdhcyBub3Qgc3VjY2Vzc2Z1bCAqL1xyXG5cdGVycm9ycz86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogRmllbGQgbmFtZXMgYW5kIHZhbHVlcyAqL1xyXG5cdGZpZWxkcz86IEZpZWxkQmFnO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFjdHVhbCBmcm9tIFwiLi9hY3R1YWxcIjtcclxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCIuL3BhcnNlclwiO1xyXG5pbXBvcnQgKiBhcyBtYXRjaGVyIGZyb20gXCIuL21hdGNoZXJcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMIFxyXG4gKiBAcGFyYW0gcyBVUkwgc3RyaW5nIHRvIGJlIHBhcnNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVSTCggczogc3RyaW5nKTogSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0cmV0dXJuIGFjdHVhbC5wYXJzZVVSTCggcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgdGhlIGdpdmVuIFVSTCBwYXR0ZXJuXHJcbiAqIEBwYXJhbSBzIFVSTCBwYXR0ZXJuIHN0cmluZyB0byBiZSBwYXJzZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmxQYXR0ZXJuKCBzOiBzdHJpbmcpOiBJUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0cmV0dXJuIHBhcnNlci5wYXJzZVBhdHRlcm4oIHMpO1xyXG59XHJcblxyXG4vKipcclxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gVVJMIGFnYWluc3QgVVJMIHBhdHRlcm4gc3RyaW5nLlxyXG4gKiBAcGFyYW0gdXJsIEVpdGhlciB1bnBhcnNlZCBVUkwgc3RyaW5nIG9yIFtbSVBhcnNlZEFjdHVhbFVSTF1dIG9iamVjdFxyXG4gKiBAcGFyYW0gcGF0dGVybiBFaXRoZXIgdW5wYXJzZWQgVVJMIHBhdHRlcm4gc3RyaW5nIG9yIFtbSVBhcnNlZFVybFBhdHRlcm5dXSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCggdXJsOiBzdHJpbmcgfCBJUGFyc2VkQWN0dWFsVVJMLCBwYXR0ZXJuOiBzdHJpbmcgfCBJUGFyc2VkVXJsUGF0dGVybik6IElVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdHJldHVybiBtYXRjaGVyLm1hdGNoKCB1cmwsIHBhdHRlcm4pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBVUkwgcGF0dGVybiBzdHJpbmcuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCggdXJsOiBzdHJpbmcgfCBhcGkuSVBhcnNlZEFjdHVhbFVSTCwgcGF0dGVybjogc3RyaW5nIHwgYXBpLklQYXJzZWRVcmxQYXR0ZXJuKTogYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdGlmICghdXJsKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlVSTCBjYW5ub3QgYmUgbnVsbCBvciBlbXB0eSBzdHJpbmdcIik7XHJcblx0aWYgKCFwYXR0ZXJuKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIlBhdHRlcm4gY2Fubm90IGJlIG51bGwgb3IgZW1wdHkgc3RyaW5nXCIpO1xyXG5cclxuXHRpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggYXBpLnBhcnNlVVJMKCB1cmwpLCBhcGkucGFyc2VVcmxQYXR0ZXJuKCBwYXR0ZXJuKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBtYXRjaFBhcnNlZCggYXBpLnBhcnNlVVJMKCB1cmwpLCBwYXR0ZXJuKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCB1cmwsIGFwaS5wYXJzZVVybFBhdHRlcm4oIHBhdHRlcm4pKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCB1cmwsIHBhdHRlcm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBhbHJlYWR5IHBhcnNlZCBVUkwgcGF0dGVybi5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFyc2VkKCBwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMLCBwYXJzZWRQYXR0ZXJuOiBhcGkuSVBhcnNlZFVybFBhdHRlcm4pOiBhcGkuSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0aWYgKCFwYXJzZWRVUkwpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiVVJMIGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cdGlmICghcGFyc2VkUGF0dGVybilcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJwYXJzZWRQYXR0ZXJuIGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cclxuXHQvLyBwcmVwYXJlIG9iamVjdCBmb3IgbWF0Y2ggcmVzdWx0XHJcblx0bGV0IG1hdGNoUmVzdWx0ID0gbmV3IFVybFBhdHRlcm5NYXRjaFJlc3VsdCgpO1xyXG5cdG1hdGNoUmVzdWx0LnBhcnNlZFVSTCA9IHBhcnNlZFVSTDtcclxuXHRtYXRjaFJlc3VsdC5maWVsZHMgPSB7fTtcclxuXHRsZXQgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHQvLyBjb21wYXJlIHBhcnQgYnkgcGFydFxyXG5cdFx0bGV0IGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuUHJvdG9jb2wsIHBhcnNlZFVSTC5wcm90b2NvbCxcclxuXHRcdFx0IFx0XHRcdHBhcnNlZFBhdHRlcm4ucHJvdG9jb2wgPyBwYXJzZWRQYXR0ZXJuLnByb3RvY29sLnNlZ21lbnQgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhcGkuRVVybFBhcnQuSG9zdG5hbWUsIHBhcnNlZFVSTC5ob3N0bmFtZSxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5ob3N0bmFtZSA/IHBhcnNlZFBhdHRlcm4uaG9zdG5hbWUuc2VnbWVudHMgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuUG9ydCwgcGFyc2VkVVJMLnBvcnQsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4ucG9ydCA/IHBhcnNlZFBhdHRlcm4ucG9ydC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHJcblx0XHRlcnJvciA9IG1hdGNoTXVsdGlwbGVTZWdtZW50cyggYXBpLkVVcmxQYXJ0LlBhdGgsIHBhcnNlZFVSTC5wYXRoLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLnBhdGggPyBwYXJzZWRQYXR0ZXJuLnBhdGguc2VnbWVudHMgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hRdWVyeVN0cmluZyggcGFyc2VkVVJMLnF1ZXJ5LCBwYXJzZWRQYXR0ZXJuLnF1ZXJ5LCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hTaW5nbGVTZWdtZW50KCBhcGkuRVVybFBhcnQuSGFzaCwgcGFyc2VkVVJMLmhhc2gsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4uaGFzaCA/IHBhcnNlZFBhdHRlcm4uaGFzaC5zZWdtZW50IDogbnVsbCwgbWF0Y2hSZXN1bHQuZmllbGRzKTtcclxuXHRcdGlmIChlcnJvcilcclxuXHRcdFx0ZXJyb3JzLnB1c2goIGVycm9yKTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRlcnJvcnMucHVzaCggZXJyLm1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBlcnJvcnMsIHB1dCB0aGVtIGludG8gdGhlIHJlc3VsdCBvYmplY3RcclxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApXHJcblx0XHRtYXRjaFJlc3VsdC5lcnJvcnMgPSBlcnJvcnM7XHJcblxyXG5cdHJldHVybiBtYXRjaFJlc3VsdDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBzdHJpbmcgYWdhaW5zdCB0aGUgZ2l2ZW4gY29tcGlsZWQgc2VnbWVudC4gRmllbGRzIHdpbGwgYmUgYWRkZWRcclxuLy8gdG8gdGhlIGdpdmVuIHJlc3VsdCBvYmplY3QuXHJcbmZ1bmN0aW9uIG1hdGNoU2luZ2xlU2VnbWVudCggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBhY3R1YWxTZWdtZW50OiBzdHJpbmcgfCBudW1iZXIsIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCxcclxuXHRcdFx0XHQgZmllbGRzOiBhcGkuRmllbGRCYWcpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRpZiAodHlwZW9mIGFjdHVhbFNlZ21lbnQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRhY3R1YWxTZWdtZW50ID0gYWN0dWFsU2VnbWVudC50b1N0cmluZygpO1xyXG5cclxuXHQvLyBpZiBjb21waWxlZCBzZWdtZW50IGlzIE5PVCBwcm92aWRlZCwgdGhlbiBhY3R1YWwgc2VnbWVudCBtdXN0IGJlIGVtcHR5XHJcblx0aWYgKCFwYXJzZWRTZWdtZW50KVxyXG5cdHtcclxuXHRcdGlmIChhY3R1YWxTZWdtZW50KVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGNvbnRhaW5zIHNlZ21lbnQgJyR7YWN0dWFsU2VnbWVudH0nIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgcGF0dGVybmA7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgYWN0dWFsIHNlZ21lbnQgaXMgZW1wdHkgYW5kIGNvbXBpbGVkIHNlZ21lbnQgaXMgbWFuZGF0b3J5LCB0aGVyZSBpcyBubyBtYXRjaDsgaWYgc3RyaW5nXHJcblx0Ly8gaXMgZW1wdHkgYW5kIGNvbXBpbGVkIHNlZ21lbnQgaXMgb3B0aW9uYWwsIHRoZXJlIGlzIG1hdGNoO1xyXG5cdGlmICghYWN0dWFsU2VnbWVudClcclxuXHR7XHJcblx0XHRpZiAocGFyc2VkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGBVUkwgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBkb2Vzbid0IGhhdmUgYSBzZWdtZW50IGNvcnJlc3BvbmRpbmcgYCArXHJcblx0XHRcdFx0XHRgdG8gYSBtYW5kYXRvcnkgcGF0dGVybiBzZWdtZW50ICcke3BhcnNlZFNlZ21lbnQudG9rZW5TdGluZ30nYDtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQsIHBhcnNlZFNlZ21lbnQsIGZpZWxkcylcclxuXHRcdD8gbnVsbFxyXG5cdFx0OiBgVVJMIHNlZ21lbnQgJyR7YWN0dWFsU2VnbWVudH0nIGluIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgZG9lc24ndCBtYXRjaCBgICtcclxuXHRcdFx0YHBhdHRlcm4gc2VnbWVudCAnJHtwYXJzZWRTZWdtZW50LnRva2VuU3Rpbmd9J2A7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHJpZXMgdG8gbWF0Y2ggYWN0dWFsIHNlZ21lbnQgdG8gdGhlIGNvbXBpbGVkIHNlZ21lbnQuIElmIHRoZXJlIGlzIGEgbWFjdGgsIHJldHVybnMgYSBub24tbnVsbFxyXG4vLyBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMgKGlmIG5vIGZpZWxkcyBmb3VuZCwgcmV0dXJucyBhbiBlbXB0eSBvYmplY3QpLiBJZiB0aGVyZSBpcyBubyBtYXRjaFxyXG4vLyByZXR1cm5zIG51bGwuXHJcbmZ1bmN0aW9uIHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudDogc3RyaW5nLCBwYXJzZWRTZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQsXHJcblx0ZmllbGRzOiBhcGkuRmllbGRCYWcpOiBib29sZWFuXHJcbntcclxuXHQvLyBwZXJmb3JtIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaCAtIG5vdGUgdGhhdCB0aGUgbWF0Y2hpbmcgcGFydCAoaW5kZXggMCBvZiB0aGUgcmVzdWx0KSBzaG91bGRcclxuXHQvLyBtYXRjaCBvdXIgc3RyaW5nIGV4YWN0bHkgc28gdGhhdCBubyBleHRyYSBjaGFyYWN0ZXJzIGFyZSBmb3VuZCBiZWZvcmUgb3IgYWZ0ZXIgdGhlIG1hdGNoLlxyXG5cdGxldCBleGVjUmVzdWx0ID0gcGFyc2VkU2VnbWVudC5yZWdFeHAuZXhlYyggYWN0dWFsU2VnbWVudCk7XHJcblx0aWYgKCFleGVjUmVzdWx0IHx8IGV4ZWNSZXN1bHRbMF0gIT09IGFjdHVhbFNlZ21lbnQpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdC8vIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBhbnkgZmllbGRzXHJcblx0Zm9yKCBsZXQgcGFyc2VkRmllbGQgb2YgcGFyc2VkU2VnbWVudC5maWVsZHMpXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciByZWd1bGFyIGV4cHJlc3Npb24gcmVzdWx0IGhhcyB0aGlzIGluZGV4IGFuZCBnZXQgdGhlIHZhbHVlXHJcblx0XHRpZiAocGFyc2VkRmllbGQuaW5kZXggPj0gZXhlY1Jlc3VsdC5sZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoYEJVRzogRmllbGQgaW5kZXggbm90IGZvdW5kIGluIHBhdHRlcidzIHJlZ3VsYXIgZXhwcmVzc2lvbiBleGVjdXRpb24gcmVzdWx0YCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdmFsdWUgPSBjb252ZXJ0RmllbGRWYWx1ZSggcGFyc2VkRmllbGQsIGV4ZWNSZXN1bHRbcGFyc2VkRmllbGQuaW5kZXhdKTtcclxuXHRcdGlmICghcGFyc2VkRmllbGQuaXNBcnJheSlcclxuXHRcdFx0ZmllbGRzW3BhcnNlZEZpZWxkLm5hbWVdID0gdmFsdWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBhcnIgPSBmaWVsZHNbcGFyc2VkRmllbGQubmFtZV0gYXMgYXBpLk11bHRpRmllbGRWYWx1ZVR5cGU7XHJcblx0XHRcdGlmIChhcnIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFyciA9IFtdO1xyXG5cdFx0XHRcdGZpZWxkc1twYXJzZWRGaWVsZC5uYW1lXSA9IGFycjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXJyLnB1c2goIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIHN0cmluZyBhcnJheSBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBzZWdtZW50IGFycmF5LiBGaWVsZHMgd2lsbCBiZSBhZGRlZFxyXG4vLyB0byB0aGUgZ2l2ZW4gcmVzdWx0IG9iamVjdC5cclxuZnVuY3Rpb24gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGFjdHVhbFNlZ21lbnRzOiBzdHJpbmdbXSwgcGFyc2VkU2VnbWVudHM6IGFwaS5JUGFyc2VkU2VnbWVudFtdLFxyXG5cdGZpZWxkczogYXBpLkZpZWxkQmFnKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcblx0aWYgKCFhY3R1YWxTZWdtZW50cyAmJiAhcGFyc2VkU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghYWN0dWFsU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IGhhdmUgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyB0aGF0IGV4aXN0cyBpbiB0aGUgcGF0dGVybmA7XHJcblx0ZWxzZSBpZiAoIXBhcnNlZFNlZ21lbnRzKVxyXG5cdFx0cmV0dXJuIGBVUkwgaGFzIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBwYXR0ZXJuYDtcclxuXHJcblx0Ly8gRm9yIGVhY2ggcGFyc2VkIHNlZ21lbnQgd2UgY3JlYXRlIGEgY29tcGlsZWQgc2VnbWVudCBleGNlcHQgaW4gb25lIGNhc2U6IGZvciBcIm9uZSBvciBtb3JlXCJcclxuXHQvLyBwYXJzZWQgc2VnbWVudHMgd2UgY3JlYXRlIHR3byBjb21waWxlZCBzZWdtZW50IC0gb25lIHNpbmdsZSBtYW5kYXRvcnkgYW5kIG9uZSBtdWx0aSBhbmRcclxuXHQvLyBvcHRpb25hbC5cclxuXHRsZXQgY29tcGlsZWRTZWdtZW50czogQ29tcGlsZWRTZWdtZW50W10gPSBbXTtcclxuXHRmb3IoIGxldCBwYXJzZWRTZWdtZW50IG9mIHBhcnNlZFNlZ21lbnRzKVxyXG5cdHtcclxuXHRcdGlmIChwYXJzZWRTZWdtZW50LmlzTXVsdGkgJiYgIXBhcnNlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdHtcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCBmYWxzZSkpO1xyXG5cdFx0XHRjb21waWxlZFNlZ21lbnRzLnB1c2goIG5ldyBDb21waWxlZFNlZ21lbnQoIHBhcnNlZFNlZ21lbnQsIHRydWUpKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29tcGlsZWRTZWdtZW50cy5wdXNoKCBuZXcgQ29tcGlsZWRTZWdtZW50KCBwYXJzZWRTZWdtZW50LCBwYXJzZWRTZWdtZW50LmlzT3B0aW9uYWwpKTtcclxuXHR9XHJcblxyXG5cdC8vIGNhbGwgcmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXR1cm4gdGhlIG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcyBpZiB0aGVyZSBpcyBhIG1hdGNoXHJcblx0Ly8gb3IgbnVsbCBpZiB0aGVyZSBpcyBub3QuXHJcblx0aWYgKHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cyggYWN0dWFsU2VnbWVudHMsIDAsIGNvbXBpbGVkU2VnbWVudHMsIDAsIGZpZWxkcykpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGRvZXNuJ3QgbWF0Y2ggdGhlIHBhdHRlcm5gO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRyaWVzIHRvIG1hdGNoIGFjdHVhbCBzZWdtZW50cyB0byB0aGUgcGF0dGVybiBzdGFydGluZyBmcm9tIHRoZSBnaXZlbiBpbmRleCBpbiBlYWNoIGFycmF5LiBJZlxyXG4vLyB0aGVyZSBpcyBhIG1hY3RoLCByZXR1cm5zIGEgbm9uLW51bGwgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzIChpZiBubyBmaWVsZHMgZm91bmQsIHJldHVybnMgYW5cclxuLy8gZW1wdHkgb2JqZWN0KS4gSWYgdGhlcmUgaXMgbm8gbWF0Y2ggcmV0dXJucyBudWxsLlxyXG5mdW5jdGlvbiB0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzOiBzdHJpbmdbXSwgYWN0dWFsU3RhcnRJbmRleDogbnVtYmVyLFxyXG5cdFx0XHRcdGNvbXBpbGVkU2VnbWVudHM6IENvbXBpbGVkU2VnbWVudFtdLCBjb21waWxlZFN0YXJ0SW5kZXg6IG51bWJlcixcclxuXHRcdFx0XHRmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGxvb3Agb3ZlciBjb21waWxlZCBzZWdtZW50cy4gSWYgdGhlIHNlZ21lbnQgaXMgbWFuZGF0b3J5LCB3ZSBjb21wYXJlIGl0IHRvIHRoZSBhY3R1YWxcclxuXHQvLyBzZWdtZW50IGFuZCBpZiB0aGVyZSBpcyBubyBtYXRjaCwgdGhlIG1hdGNoaW5nIGZhaWxzLiBJZiB0aGUgc2VnbWVudCBpcyBvcHRpb25hbCwgd2UgY2FsbFxyXG5cdC8vIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZlbHkgc3RhcnRpbmcgZnJvbSB0aGUgbmV4dCBjb21waWxlZCBzZWdtZW50LiBJZiB0aGlzIGNhbGwgcmV0dXJuc1xyXG5cdC8vIG51bGwgKG5vIG1hdGNoKSwgdGhlbiB3ZSBtYXAgdGhlIGFjdHVhbCBzZWdtZW50IHRvIHRoZSBjb21waWxlZCBzZWdtZW50IGFuZCBhZHZhbmNlIHRoZVxyXG5cdC8vIGluZGljZXMuXHJcblx0bGV0IGFjdHVhbEN1cnJJbmRleCA9IGFjdHVhbFN0YXJ0SW5kZXg7XHJcblx0bGV0IGNvbXBpbGVkQ3VyckluZGV4ID0gY29tcGlsZWRTdGFydEluZGV4O1xyXG5cdHdoaWxlKCBjb21waWxlZEN1cnJJbmRleCA8IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoICYmIGFjdHVhbEN1cnJJbmRleCA8IGFjdHVhbFNlZ21lbnRzLmxlbmd0aClcclxuXHR7XHJcblx0XHRsZXQgY29tcGlsZWRTZWdtZW50ID0gY29tcGlsZWRTZWdtZW50c1tjb21waWxlZEN1cnJJbmRleF07XHJcblx0XHRsZXQgYWN0dWFsU2VnbWVudCA9IGFjdHVhbFNlZ21lbnRzW2FjdHVhbEN1cnJJbmRleF07XHJcblx0XHRpZiAoIWNvbXBpbGVkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb21wYXJlIG1hbmRhdG9yeSBzZWdtZW50IHdpdGggdGhlIGFjdHVhbCBvbmVcclxuXHRcdFx0aWYgKHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQsIGZpZWxkcykpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb21waWxlZEN1cnJJbmRleCsrO1xyXG5cdFx0XHRcdGFjdHVhbEN1cnJJbmRleCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBwYXNzaW5nIHRoZSBuZXh0IGNvbXBpbGVkIHNlZ21lbnQgaW5kZXhcclxuXHRcdFx0bGV0IHRlbXBGaWVsZHM6IGFwaS5GaWVsZEJhZyA9IHt9XHJcblx0XHRcdGlmICh0cnlNYXRjaE11bHRpcGxlU2VnbWVudHMoIGFjdHVhbFNlZ21lbnRzLCBhY3R1YWxDdXJySW5kZXgsXHJcblx0XHRcdFx0Y29tcGlsZWRTZWdtZW50cywgY29tcGlsZWRDdXJySW5kZXggKyAxLCB0ZW1wRmllbGRzKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoZXJlIGlzIGEgbWF0Y2hcclxuXHRcdFx0XHRtZXJnZUZpZWxkcyggZmllbGRzLCB0ZW1wRmllbGRzKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjbGVhciB0ZW1wb3JhcnkgZmllbGRzIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIGZpbGxlZCBieSB0aGUgcHJldmlvdXMgKGZhaWxlZClcclxuXHRcdFx0XHQvLyBjYWxsIHRvIHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cy5cclxuXHRcdFx0XHR0ZW1wRmllbGRzID0ge307XHJcblxyXG5cdFx0XHRcdC8vIGNvbXBhcmUgdGhpcyBzZWdtZW50IHdpdGggdGhlIGFjdHVhbCBvbmVcclxuXHRcdFx0XHRpZiAodHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50LCBjb21waWxlZFNlZ21lbnQucGFyc2VkU2VnbWVudCwgdGVtcEZpZWxkcykpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gY29weSBmaWVsZCB2YWx1ZXMgYW5kIGFkdmFuY2UgdGhlIGFjdHVhbCBpbmRleFxyXG5cdFx0XHRcdFx0bWVyZ2VGaWVsZHMoIGZpZWxkcywgdGVtcEZpZWxkcyk7XHJcblx0XHRcdFx0XHRhY3R1YWxDdXJySW5kZXgrKztcclxuXHJcblx0XHRcdFx0XHQvLyBhZHZhbmNlIHRoZSBjb21waWxlZCBpbmRleCBvbmx5IGlmIHRoaXMgZmllbGQgaXMgYSBzaW5ndWxhciBvbmVcclxuXHRcdFx0XHRcdGlmICghY29tcGlsZWRTZWdtZW50LnBhcnNlZFNlZ21lbnQuaXNNdWx0aSlcclxuXHRcdFx0XHRcdFx0Y29tcGlsZWRDdXJySW5kZXgrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyB3ZSBhcmUgaGVyZSBpZiBlaXRoZXIgY29tcGlsZSBzZWdtZW50cyBvciBhY3R1YWwgc2VnbWVudHMgb3IgYm90aCBhcmUgZXhob3N0ZWQuIElmIGJvdGhcclxuXHQvLyBhcmUgZXhob3N0ZWQsIHRoZXJlIGlzIGEgbWF0Y2guIElmIGNvbXBpbGVkIGFyZSBleGhvc3RlZCBidXQgYWN0dWFsIGFyZSBub3QsIHRoZXJlIGlzIG5vXHJcblx0Ly8gbWF0Y2guIElmIGFjdHVhbCBhcmUgZXhob3N0ZWQgYnV0IGNvbXBpbGVkIGFyZSBub3QsIHRoZXJlIGlzIG1hdGNoIG9ubHkgaWYgYWxsIHRoZVxyXG5cdC8vIHJlbWFpbmluZyBjb21waWxlZCBzZWdtZW50cyBhcmUgb3B0aW9uYWwuXHJcblx0aWYgKGNvbXBpbGVkQ3VyckluZGV4ID09PSBjb21waWxlZFNlZ21lbnRzLmxlbmd0aCAmJiBhY3R1YWxDdXJySW5kZXggPT09IGFjdHVhbFNlZ21lbnRzLmxlbmd0aClcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdGVsc2UgaWYgKGNvbXBpbGVkQ3VyckluZGV4ID09PSBjb21waWxlZFNlZ21lbnRzLmxlbmd0aClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IGNvbXBpbGVkQ3VyckluZGV4OyBpIDwgY29tcGlsZWRTZWdtZW50cy5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGNvbXBpbGVkU2VnbWVudCA9IGNvbXBpbGVkU2VnbWVudHNbaV07XHJcblx0XHRcdGlmICghY29tcGlsZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXRjaGVzIHRoZSBnaXZlbiBzdHJpbmcgb2JqZWN0IGFnYWluc3QgdGhlIGdpdmVuIGNvbXBpbGVkIHF1ZXJ5IHN0cmluZy4gRmllbGRzIHdpbGwgYmUgYWRkZWRcclxuLy8gdG8gdGhlIGdpdmVuIHJlc3VsdCBvYmplY3QuXHJcbmZ1bmN0aW9uIG1hdGNoUXVlcnlTdHJpbmcoIGFjdHVhbFF1ZXJ5OiB7IFtQOiBzdHJpbmddOiBzdHJpbmdbXSB9LCBwYXJzZWRRdWVyeTogYXBpLklQYXJzZWRRdWVyeVN0cmluZyxcclxuXHRcdFx0XHQgZmllbGRzOiBhcGkuRmllbGRCYWcpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRpZiAoIXBhcnNlZFF1ZXJ5KVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIWFjdHVhbFF1ZXJ5KVxyXG5cdHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyggcGFyc2VkUXVlcnkucGFyc2VkUVNQcykubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGBVUkwgZG9lc24ndCBoYXZlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0aGUgcGF0dGVybmA7XHJcblx0fVxyXG5cclxuXHQvLyBnbyBvdmVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0aGUgcGF0dGVyLiBJZiB0aGVyZSBpcyBhbnkgbm9uLW9wdGlvbmFsXHJcblx0Ly8gcGFyYW1ldGVyIHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgYWN0dWFsIFVSTCwgd2UgZmFpbCB0aGUgbWF0Y2guXHJcblx0Zm9yKCBsZXQgcXNwTmFtZSBpbiBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzKVxyXG5cdHtcclxuXHRcdGlmIChhY3R1YWxRdWVyeVtxc3BOYW1lXSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IGhhdmUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfSdgO1xyXG5cdH1cclxuXHJcblx0Ly8gZ28gb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBpbiB0aGUgYWN0dWFsIFVSTFxyXG5cdGZvciggbGV0IHFzcE5hbWUgaW4gYWN0dWFsUXVlcnkpXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGlzIG5hbWUgaW4gdGhlIHBhdHRlcm4uIElmIHRoZSBwYXR0ZXJuIGRvZXNuJ3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciBhbmQgdGhlXHJcblx0XHQvLyBwYXR0ZXJuIGRvZXNuJ3QgYWxsb3cgZm9yIGV4dHJhIHBhcmFtZXRlcnMsIHRoZW4gdGhlcmUgaXMgbm8gbWF0Y2guIE90aGVyd2lzZSwgdGhpc1xyXG5cdFx0Ly8gcGFyYW1ldGVyIGlzIHNpbXBseSBpZ25vcmVkLlxyXG5cdFx0bGV0IHBhcnNlZFNlZ21lbnQgPSBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzW3FzcE5hbWVdLnNlZ21lbnQ7XHJcblx0XHRpZiAoIXBhcnNlZFNlZ21lbnQpXHJcblx0XHR7XHJcblx0XHRcdGlmICghcGFyc2VkUXVlcnkuYWxsb3dFeHRyYVF1ZXJ5UGFyYW1zKVxyXG5cdFx0XHRcdHJldHVybiBgVVJMIGhhcyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyB0aGF0IGlzIG5vdCBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmb3Igc2luZ3VsYXIgc2VnbWVudCB0aGUgcGFyYW1ldGVyIG11c3QgYmUgcHJlc2VudCBvbmx5IG9uY2VcclxuXHRcdFx0bGV0IHFzcFZhbHVlcyA9IGFjdHVhbFF1ZXJ5W3FzcE5hbWVdO1xyXG5cdFx0XHRpZiAoIXBhcnNlZFNlZ21lbnQuaXNNdWx0aSAmJiBxc3BWYWx1ZXMubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRyZXR1cm4gYFVSTCBoYXMgbXVsdGlwbGUgdmFsdWVzIGZvciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9JyB3aGlsZSBwYXR0ZXJuIGRvZXNuJ3Qgc3BlY2lmeSBpdCBhcyBtdWx0aWA7XHJcblxyXG5cdFx0XHRmb3IoIGxldCBxc3BWYWx1ZSBvZiBxc3BWYWx1ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIXRyeU1hdGNoU2luZ2xlU2VnbWVudCggcXNwVmFsdWUsIHBhcnNlZFNlZ21lbnQsIGZpZWxkcykpXHJcblx0XHRcdFx0XHRyZXR1cm4gYFVSTCdzIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nIGRvZXNuJ3QgbWF0Y2ggdGhhdCBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm5gO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBNZXJnZXMgZmllbGQgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBvYmplY3QgdG8gdGhlIHRhcmdldCBvbmUuXHJcbmZ1bmN0aW9uIG1lcmdlRmllbGRzKCB0YXJnZXQ6IHsgW1A6IHN0cmluZ106IGFwaS5GaWVsZFZhbHVlVHlwZSB9LCBzb3VyY2U6IHsgW1A6IHN0cmluZ106IGFwaS5GaWVsZFZhbHVlVHlwZSB9KTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgZmllbGROYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcblx0XHRsZXQgc291cmNlVmFsID0gc291cmNlW2ZpZWxkTmFtZV07XHJcblx0XHRsZXQgdGFyZ2V0VmFsID0gdGFyZ2V0W2ZpZWxkTmFtZV07XHJcblx0XHRpZiAodGFyZ2V0VmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRhcmdldFtmaWVsZE5hbWVdID0gc291cmNlVmFsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBib3RoIHNvdXJjZSBhbmQgdGFyZ2V0IHZhbHVlcyBtdXN0IGJlIGFycmF5c1xyXG5cdFx0XHRsZXQgc291cmNlQXJyID0gc291cmNlVmFsIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRsZXQgdGFyZ2V0QXJyID0gdGFyZ2V0VmFsIGFzIGFwaS5NdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cdFx0XHRmb3IoIGxldCBzb3VyY2VJdGVtIG9mIHNvdXJjZUFycilcclxuXHRcdFx0XHR0YXJnZXRBcnIucHVzaCggc291cmNlSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgZmllbGQgdmFsdWUgY29udmVydGVkIHRvIHRoZSByZXF1aXJlZCBmb3JtYXRcclxuZnVuY3Rpb24gY29udmVydEZpZWxkVmFsdWUoIHBhcnNlZEZpZWxkOiBhcGkuSVBhcnNlZEZpZWxkLCBzdHJpbmdWYWx1ZTogc3RyaW5nKTogYXBpLlNpbmdsZUZpZWxkVmFsdWVUeXBlXHJcbntcclxuXHRpZiAoIXN0cmluZ1ZhbHVlKVxyXG5cdFx0cmV0dXJuIHBhcnNlZEZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBhcGkuU2luZ2xlRmllbGRWYWx1ZVR5cGU7XHJcblxyXG5cdHN3aXRjaCggcGFyc2VkRmllbGQuZm9ybWF0KVxyXG5cdHtcclxuXHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkludGVnZXI6XHJcblx0XHR7XHJcblx0XHRcdGxldCB2ID0gTnVtYmVyKCBzdHJpbmdWYWx1ZSk7XHJcblx0XHRcdHJldHVybiBpc05hTih2KSB8fCAhTnVtYmVyLmlzSW50ZWdlcih2KSA/IHBhcnNlZEZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIgOiB2O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkZsb2F0OlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IE51bWJlciggc3RyaW5nVmFsdWUpO1xyXG5cdFx0XHRyZXR1cm4gaXNOYU4odikgPyBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgbnVtYmVyIDogdjtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5Cb29sZWFuOlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IHN0cmluZ1ZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmICh2ID09PSBcInRydWVcIiB8fCB2ID09PSBcInRcIiB8fCB2ID09PSBcInllc1wiIHx8IHYgPT09IFwieVwiIHx8IHYgPT09IFwiMVwiKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmICh2ID09PSBcImZhbHNlXCIgfHwgdiA9PT0gXCJmXCIgfHwgdiA9PT0gXCJub1wiIHx8IHYgPT09IFwiblwiIHx8IHYgPT09IFwiMFwiKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBwYXJzZWRGaWVsZC5kZWZhdWx0VmFsdWUgYXMgYm9vbGVhbjtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RyaW5nVmFsdWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ29tcGlsZWRTZWdtZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgc2hvdWxkIGJlIGNvbXBhcmVkIHRvIGFcclxuLy8gc2VnbWVudCBmcm9tIHRoZSBhY3R1YWwgVVJMIHBhcnQuIENvbXBpbGVkIHNlZ21lbnQgY29udGFpbnMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBmbGFnXHJcbi8vIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHNlZ21lbnQgaXMgb3B0aW9uYWwuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBDb21waWxlZFNlZ21lbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcGFyc2VkIHNlZ21lbnQgb2JqZWN0LlxyXG5cdHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBzZWdtZW50IGlzIG9wdGlvbmFsLiBGb3IgZWFjaCBcIm9uZS1vci1tb3JlXCIgcGFyc2VkIHNlZ2VtZW50c1xyXG5cdC8vIHdlIGNyZWF0ZSB0d28gY29tcGlsZWQgc2VnbWVudHM6IHRoZSBmaXJzdCBpcyBtYW5kYXRvcnkgYW5kIHRoZSBzZWNvbmQgaXMgb3B0aW9uYWwuIFRoYXQnc1xyXG5cdC8vIHdoeSB3ZSBoYXZlIHRoaWUgaXNPcHRpb25hbCBmbGFnIGhlcmUuXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCwgaXNPcHRpb25hbDogYm9vbGVhbilcclxuXHR7XHJcblx0XHR0aGlzLnBhcnNlZFNlZ21lbnQgPSBwYXJzZWRTZWdtZW50O1xyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gaXNPcHRpb25hbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgY2xhc3MgZGVzY3JpYmVzIHRoZSByZXN1bHQgb2YgbWF0Y2hpbmcgYSBVUkwgdG8gYSBwYXR0ZXJuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVXJsUGF0dGVybk1hdGNoUmVzdWx0IGltcGxlbWVudHMgYXBpLklVcmxQYXR0ZXJuTWF0Y2hSZXN1bHRcclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbWF0Y2ggd2FzIHN1Y2Nlc3N1bCAqL1xyXG5cdHB1YmxpYyBnZXQgc3VjY2VzcygpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmVycm9ycyB8fCB0aGlzLmVycm9ycy5sZW5ndGggPT09IDA7IH1cclxuXHJcblx0LyoqIFBhcnNlZCBhY3R1YWwgVVJMICovXHJcblx0cGFyc2VkVVJMOiBhcGkuSVBhcnNlZEFjdHVhbFVSTDtcclxuXHJcblx0LyoqIEVycm9yIG9iamVjdCBpbiBjYXNlIHRoZSBtYXRjaCB3YXMgbm90IHN1Y2Nlc3NmdWwgKi9cclxuXHRwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcclxuXHJcblx0LyoqIEZpZWxkIG5hbWVzIGFuZCB2YWx1ZXMgKi9cclxuXHRwdWJsaWMgZmllbGRzOiBhcGkuRmllbGRCYWc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltdXJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGlcIjtcclxuIiwi77u/aW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL2FwaVwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQYXJzZXIncyBlbnRyeSBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhdHRlcm4oIHBhdHRlcm5TdHJpbmc6IHN0cmluZyk6IGFwaS5JUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0Ly8gaW5pdGlhbGl6ZSBnbG9iYWwgdmFyaWFibGVzXHJcblx0Z19wYXR0ZXJuU3RyaW5nID0gcGF0dGVyblN0cmluZztcclxuXHRnX3BhdHRlcm5TdHJpbmdMZW5ndGggPSAwO1xyXG5cdGdfY3VyckluZGV4ID0gMDtcclxuXHRnX2N1cnJDaGFyID0gJyc7XHJcblxyXG5cdGlmICghcGF0dGVyblN0cmluZylcclxuXHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggXCJVUkwgcGF0dGVybiBjYW5ub3QgYmUgZW1wdHlcIik7XHJcblxyXG5cdGdfcGF0dGVyblN0cmluZ0xlbmd0aCA9IHBhdHRlcm5TdHJpbmcubGVuZ3RoO1xyXG5cdGdfY3VyckNoYXIgPSBwYXR0ZXJuU3RyaW5nWzBdO1xyXG5cclxuXHQvLyBDcmVhdGUgdGhlIHRvcC1sZXZlbCBwYXJzaW5nIG9iamVjdCBhbmQgcnVuIHRoZSBwYXJzaW5nIHByb2Nlc3MuXHJcblx0bGV0IHBhcnNlZFBhdHRlcm4gPSBuZXcgUGFyc2VkVXJsUGF0dGVybigpO1xyXG5cdHBhcnNlZFBhdHRlcm4ucGFyc2UoKTtcclxuXHRyZXR1cm4gcGFyc2VkUGF0dGVybjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5lIFwiZ2xvYmFsXCIgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gYWxsIG9iamVjdHMgaW4gdGhpcyBtb2R1bGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQYXR0ZXJuIHN0cmluZyBiZWluZyBwYXJzZWRcclxubGV0IGdfcGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuLy8gTGVuZ3RoIG9mIHRoZSBwYXR0ZXJuIHN0cmluZ1xyXG5sZXQgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4vLyBJbmRleCBvZiB0aGUgY2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuIHN0cmluZyB0aGF0IHRoZSBwYXJzZXIgaXMgY3VycmVudGx5IHdvcmtpbmcgd2l0aC5cclxubGV0IGdfY3VyckluZGV4OiBudW1iZXI7XHJcblxyXG4vLyBDaGFyYWN0ZXIgaW4gdGhlIHBhdHRlcm4gc3RyaW5nIHVuZGVyIHRoZSBjdXJyZW50IGluZGV4LlxyXG5sZXQgZ19jdXJyQ2hhcjogc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5lIFwiZ2xvYmFsXCIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gYWxsIG9iamVjdHMgaW4gdGhpcyBtb2R1bGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBEZXRlcm1pbmVzIGlmIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi5cclxuZnVuY3Rpb24gZ19pc0VuZCgpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gZ19jdXJySW5kZXggPj0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRocm93cyBleGNlcHRpb24gaWYgd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLlxyXG5mdW5jdGlvbiBnX2NoZWNrRW5kKCByZWFzb24/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRpZiAoZ19jdXJySW5kZXggPT09IGdfcGF0dGVyblN0cmluZ0xlbmd0aClcclxuXHR7XHJcblx0XHRsZXQgbXNnID0gXCJVbmV4cGVjdGVkIGVuZCBvZiBVUkwgcGF0dGVyblwiO1xyXG5cdFx0aWYgKHJlYXNvbilcclxuXHRcdFx0bXNnICs9IFwiOiBcIiArIHJlYXNvbjtcclxuXHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggbXNnKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgdGhlIGdpdmVuIG51bWJlciBvZiBjaGFyYWN0ZXJzIGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb24uXHJcbmZ1bmN0aW9uIGdfbW92ZSggZDogbnVtYmVyID0gMSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChnX2N1cnJJbmRleCA8PSBnX3BhdHRlcm5TdHJpbmdMZW5ndGggLSBkKVxyXG5cdHtcclxuXHRcdGdfY3VyckluZGV4ICs9IGQ7XHJcblx0XHRnX2N1cnJDaGFyID0gZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4XTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Z19jdXJySW5kZXggPSBnX3BhdHRlcm5TdHJpbmdMZW5ndGg7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIHRvIHRoZSBnaXZlbiBwb3NpdGlvbiBpbiB0aGUgYnVmZmVyLlxyXG5mdW5jdGlvbiBnX21vdmVUbyggaTogbnVtYmVyKTogYm9vbGVhblxyXG57XHJcblx0Z19jdXJySW5kZXggPSBpO1xyXG5cdGlmIChnX2N1cnJJbmRleCA8IGdfcGF0dGVyblN0cmluZ0xlbmd0aClcclxuXHR7XHJcblx0XHRnX2N1cnJDaGFyID0gZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4XTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRVcmxQYXR0ZXJuIGNsYXNzIGlzIHRoZSB0b3AtbGV2ZWwgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHJlc3VsdCBvZiBVUkwgcGFyc2luZy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFVybFBhdHRlcm4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdC8vIE9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGZvciB3aGljaCB0aGlzIG9iamVjdCB3YXMgY3JlYXRlZC5cclxuXHRwdWJsaWMgcGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuXHQvLyBQcm90b2NvbCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHByb3RvY29sKCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlByb3RvY29sXSBhcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIEhvc3RuYW1lIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgaG9zdG5hbWUoKTogYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5Ib3N0bmFtZV0gYXMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIFBvcnQgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBwb3J0KCk6IGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlBvcnRdIGFzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUGF0aCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHBhdGgoKTogYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5QYXRoXSBhcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUXVlcnkgU3RyaW5nIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcXVlcnkoKTogYXBpLklQYXJzZWRRdWVyeVN0cmluZ1xyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUXVlcnldIGFzIFBhcnNlZFF1ZXJ5U3RyaW5nIH1cclxuXHJcblx0Ly8gSGFzaCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IGhhc2goKTogYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuSGFzaF0gYXMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBBcnJheSBvZiBVUkwgcGFydC4gSW5kZXhlcyBhcmUgdmFsdWVzIGZyb20gdGhlIFVybFBhcnQgZW51bWVyYXRpb24uXHJcblx0cHVibGljIHBhcnRzOiBQYXJzZWRVcmxQYXJ0W107XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHRoaXMucGF0dGVyblN0cmluZyA9IGdfcGF0dGVyblN0cmluZztcclxuXHRcdHRoaXMucGFydHMgPSBbXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyc2VzIHRoZSBlbnRpcmUgVVJMIHBhdHRlcm4gcGFydCBieSBwYXJ0XHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBsb29wIG9mIHBhcnNpbmcgVVJMIHBhcnRzXHJcblx0XHRmb3IoIGxldCBwYXJ0ID0gdGhpcy5maW5kRmlyc3RVcmxQYXJ0KCk7IHBhcnQgIT09IG51bGw7IHBhcnQgPSBwYXJ0LmdldE5leHRVcmxQYXJ0KCkpXHJcblx0XHR7XHJcblx0XHRcdHBhcnQucGFyc2UoKTtcclxuXHRcdFx0dGhpcy5wYXJ0c1twYXJ0LnVybFBhcnRdID0gcGFydDtcclxuXHRcdFx0aWYgKGdfaXNFbmQoKSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB0aGUgZmlyc3QgVVJMIHBhcnQgdGhlIHBhcnNlciB3aWxsIGJlIHdvcmtpbmcgb24uXHJcblx0cHJpdmF0ZSBmaW5kRmlyc3RVcmxQYXJ0KCk6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gXCIvXCIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChnX3BhdHRlcm5TdHJpbmdMZW5ndGggPiAxICYmIGdfcGF0dGVyblN0cmluZ1sxXSA9PT0gXCIvXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRnX21vdmUoMik7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRIb3N0bmFtZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkUGF0aCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IGdfcGF0dGVyblN0cmluZy5pbmRleE9mKCBcIjovL1wiKTtcclxuXHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFByb3RvY29sKCk7XHJcblx0XHRcdGVsc2UgaWYgKGluZGV4IDwgMClcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIFwiVVJMIHBhdHRlcm4gY2Fubm90IHN0YXJ0IGZyb20gJzovLydcIik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkVG9rZW4gaXMgYSBiYXNlIGNsYXNzIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFRva2VuXHJcbntcclxuXHQvLyBMb2NhdGlvbiBvZiB0aGUgcGFydCBpbiB0aGUgb3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgY29udGFpbmluZyB0aGUgemVyby1iYXNlZCBpbmRleCB3aGVyZVxyXG5cdC8vIHRoZSBwYXJ0IGJlZ2lucyBhbmQgaXRzIGxlbmd0aC5cclxuXHRsb2NhdGlvbjogeyBzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciB9O1xyXG5cclxuXHQvKiogQ29udGVudCBvZiB0aGUgdG9rZW4gKi9cclxuXHR0b2tlblN0aW5nOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLmxvY2F0aW9uID0geyBzdGFydDogZ19jdXJySW5kZXgsIGxlbmd0aDogMCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpbmFsaXplKClcclxuXHR7XHJcblx0XHR0aGlzLmxvY2F0aW9uLmxlbmd0aCA9IGdfY3VyckluZGV4IC0gdGhpcy5sb2NhdGlvbi5zdGFydDtcclxuXHRcdHRoaXMudG9rZW5TdGluZyA9IGdfcGF0dGVyblN0cmluZy5zdWJzdHIoIHRoaXMubG9jYXRpb24uc3RhcnQsIHRoaXMubG9jYXRpb24ubGVuZ3RoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRVcmxQYXJ0IGlzIGEgYmFzZSBjbGFzcyB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgcGFyc2VkIFVSTCBwYXJ0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkVXJsUGFydFxyXG57XHJcblx0Ly8gVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy5cclxuXHR1cmxQYXJ0OiBhcGkuRVVybFBhcnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wYXJpc29uIG9mIHRoaXMgcGFydCBzaG9sZCBiZSBjYXNlLXNlbnNpdGl2ZSBvciBub3QuXHJcblx0Y2FzZVNlbnNpdGl2ZTogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudXJsUGFydCA9IHVybFBhcnQ7XHJcblx0XHR0aGlzLmNhc2VTZW5zaXRpdmUgPSBjYXNlU2Vuc2l0aXZlO1xyXG5cdH1cclxuXHJcblx0Ly8gUGFyc2VzIHRoaXMgdG9rZW5cclxuXHRwdWJsaWMgYWJzdHJhY3QgcGFyc2UoKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyBhbmQgY3JhdGVzIGlmIG5lY2Vzc2FyeSB0aGUgbmV4dCBVUkwgcGFydCBiYXNlZCBvbiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnQ7XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBpbnRlcmZhY2UgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbi8vIGRlZmluZSBhIHNpbmdsZSBzZWdtZW50OiBwcm90b2NvbCwgcG9ydCBhbmQgaGFzaC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgUGFyc2VkVXJsUGFydCBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdC8vIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuXHJcblx0c2VnbWVudDogUGFyc2VkU2VnbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlciggdXJsUGFydCwgY2FzZVNlbnNpdGl2ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzZWdtZW50ID0gbmV3IFBhcnNlZFNlZ21lbnQoKTtcclxuXHRcdHNlZ21lbnQucGFyc2UoIHRoaXMuZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKSwgZmFsc2UsIHRoaXMuY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHR0aGlzLnNlZ21lbnQgPSBzZWdtZW50O1xyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXSB7IHJldHVybiBbdGhpcy5zZWdtZW50XTsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVyLCB3aGljaCBpbmRpY2F0ZSBzZWdtZW50IGVuZCBmb3IgdGhlIGdpdmVuIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4vLyBjYW4gZGVmaW5lIG11bHRpcGxlIHNlZ21lbnRzOiBob3N0bmFtZSBhbmQgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFic3RyYWN0IGNsYXNzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHNlZ21lbnRzOiBQYXJzZWRTZWdtZW50W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVybFBhcnQsIGNhc2VTZW5zaXRpdmUpO1xyXG5cdFx0dGhpcy5zZWdtZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcGFydEVuZENoYXJhY3RlcnMgPSB0aGlzLmdldFBhcnRFbmRDaGFyYWN0ZXJzKCk7XHJcblxyXG5cdFx0Ly8gcGFyc2Ugc2VnbWVudHMgdW50aWwgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzIHRoZSBlbmQgb2YgdGhlIFVSTCBwYXJ0XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0XHRzZWdtZW50LnBhcnNlKCB0aGlzLmdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCksIHRydWUsIHRoaXMuY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHRcdHRoaXMuc2VnbWVudHMucHVzaCggc2VnbWVudCk7XHJcblx0XHRcdGlmIChwYXJ0RW5kQ2hhcmFjdGVycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXSB7IHJldHVybiB0aGlzLnNlZ21lbnRzOyB9XHJcblxyXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjb250YWlucyBjaGFyYWN0ZXIsIHdoaWNoIGluZGljYXRlIHNlZ21lbnQgZW5kIGZvciB0aGUgZ2l2ZW4gVVJMIHBhcnQuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZztcclxuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFByb3RvY29sIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwcm90b2NvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFByb3RvY29sIGV4dGVuZHMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlciggYXBpLkVVcmxQYXJ0LlByb3RvY29sLCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIjpcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gXCI6XCIgJiYgZ19jdXJySW5kZXggKyAyIDwgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoICYmXHJcblx0XHRcdGdfcGF0dGVyblN0cmluZ1tnX2N1cnJJbmRleCsxXSA9PT0gXCIvXCIgJiYgZ19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4KzJdID09PSBcIi9cIilcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKDMpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCk7XHJcblx0XHRcdGxldCBwYXJ0ID0gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdHJldHVybiBwYXJ0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlcnMgYWZ0ZXIgcHJvdG9jb2wgcGFydGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZEhvc3RuYW1lIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBob3N0bmFtZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEhvc3RuYW1lIGV4dGVuZHMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuSG9zdG5hbWUsIGZhbHNlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLjovPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0UGFydEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiOi8/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnOicpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRnX2NoZWNrRW5kKCBcIlBvcnQgY2Fubm90IGJlIGVtcHR5XCIpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBhcnNlZFBvcnQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcvJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZFBhdGgoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZFF1ZXJ5U3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICcke2dfY3VyckNoYXJ9JyBhZnRlciBob3N0bmFtZSBzZWdtZW50YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUG9ydCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcG9ydC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFBvcnQgZXh0ZW5kcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuUG9ydCwgZmFsc2UpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCIvPyNcIjsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJy8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkUGF0aCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkUXVlcnlTdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nIGFmdGVyIHBvcnQgcGFydGApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFBhdGggY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIHBhdGguXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRQYXRoIGV4dGVuZHMgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuUGF0aCwgdHJ1ZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIi8/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRQYXJ0RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCI/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfScgYWZ0ZXIgcGF0aCBzZWdtZW50YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUXVlcnlTdHJpbmcgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRRdWVyeVN0cmluZyBleHRlbmRzIFBhcnNlZFVybFBhcnQgaW1wbGVtZW50cyBhcGkuSVBhcnNlZFF1ZXJ5U3RyaW5nXHJcbntcclxuXHQvLyBRdWVyeSBzdHJpbmcgZGVmaW5lcyBvbmUgc2VnbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS5cclxuXHRwYXJzZWRRU1BzOiB7IFtQOiBzdHJpbmddOiBhcGkuSVBhcnNlZFFTUCB9O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBub3Qgc3BlY2lmaWVkIGV4cGxpY2l0bHkgaW4gdGhlIHBhdHRlcm5cclxuXHQvLyB3aWxsIGJlIGFsbG93ZWQgd2hlbiBwYXJzaW5nIGFjdHVhbCBVUkxzLlxyXG5cdGFsbG93RXh0cmFRdWVyeVBhcmFtczogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBhcGkuRVVybFBhcnQuUXVlcnksIHRydWUpO1xyXG5cclxuXHRcdHRoaXMucGFyc2VkUVNQcyA9IHt9O1xyXG5cdFx0dGhpcy5hbGxvd0V4dHJhUXVlcnlQYXJhbXMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwYXJzZSBzZWdtZW50cyB1bnRpbCB0aGUgY3VycmVudCBjaGFyYWN0ZXIgaXMgdGhlIGVuZCBvZiB0aGUgVVJMIHBhcnRcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIGdfY3VyckNoYXIgIT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdfY3VyckNoYXIgPT09ICchJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHNwZWNpYWwgY2FzZSBmb3IgZGlzYWJsaW5nIG1hdGNoaW5nIHdpdGggZXh0cmEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcclxuXHRcdFx0XHR0aGlzLmFsbG93RXh0cmFRdWVyeVBhcmFtcyA9IGZhbHNlO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBxc3AgPSBuZXcgUGFyc2VkUVNQKCk7XHJcblx0XHRcdFx0cXNwLnBhcnNlKCk7XHJcblx0XHRcdFx0aWYgKHFzcC5uYW1lIGluIHRoaXMucGFyc2VkUVNQcylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwLm5hbWV9JyBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlYCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZWRRU1BzW3FzcC5uYW1lXSA9IHFzcDtcclxuXHJcblx0XHRcdFx0aWYgKGdfY3VyckNoYXIgPT09ICcmJylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nIGFmdGVyIHF1ZXJ5IHN0cmluZyBzZWdtZW50YCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudHMoKTogUGFyc2VkU2VnbWVudFtdXHJcblx0e1xyXG5cdFx0bGV0IHNlZ21lbnRzOiBQYXJzZWRTZWdtZW50W10gPSBbXTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcclxuXHRcdGZvciggbGV0IHFzcE5hbWUgaW4gdGhpcy5wYXJzZWRRU1BzKVxyXG5cdFx0XHRzZWdtZW50cy5wdXNoKCB0aGlzLnBhcnNlZFFTUHNbcXNwTmFtZV0uc2VnbWVudCBhcyBQYXJzZWRTZWdtZW50KTtcclxuXHJcblx0XHRyZXR1cm4gc2VnbWVudHM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkSGFzaCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgaGFzaC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZEhhc2ggZXh0ZW5kcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuSGFzaCwgdHJ1ZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIlwiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFFTUCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBtYXRjaGluZyBhIHNpbmdsZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUVNQIGV4dGVuZHMgUGFyc2VkVG9rZW4gaW1wbGVtZW50cyBhcGkuSVBhcnNlZFFTUFxyXG57XHJcblx0Ly8gUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBuYW1lLlxyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gUXVlcnkgU3RyaW5nIGRlZmluZXMgb25lIHNlZ21lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuXHJcblx0c2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwYXJhbWV0ZXIgbmFtZVxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgXCI9JiNcIi5pbmRleE9mKCBnX2N1cnJDaGFyKSA8IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubmFtZSArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMubmFtZSlcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBkb2Vzbid0IGhhdmUgbmFtZWApO1xyXG5cdFx0ZWxzZSBpZiAoIWlzVmFsaWRRdWVyeVBhcmFtTmFtZSggdGhpcy5uYW1lKSlcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciBuYW1lICcke3RoaXMubmFtZX0nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyYCk7XHJcblxyXG5cdFx0aWYgKGdfaXNFbmQoKSB8fCBnX2N1cnJDaGFyICE9PSAnPScpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7dGhpcy5uYW1lfScgbXVzdCBiZSBmb2xsb3dlZCBieSAnPSdgKTtcclxuXHJcblx0XHRnX21vdmUoKTtcclxuXHRcdGdfY2hlY2tFbmQoIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3RoaXMubmFtZX0nIGRvZXNuJ3QgaGF2ZSB2YWx1ZWApO1xyXG5cdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0c2VnbWVudC5wYXJzZSggXCImI1wiLCB0cnVlLCB0cnVlKTtcclxuXHRcdHRoaXMuc2VnbWVudCA9IHNlZ21lbnQ7XHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGlzTmFtZUVuZENoYXJhY3RlciggYzogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHJldHVybiBcIj0mI1wiLmluZGV4T2YoIGMpID49IDA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkU2VnbWVudCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHNlZ21lbnQgaW4gYSBVUkwgcGF0dGVybiB0aGF0IGNhbiBiZSBtYXRjaGVkIHRvIG9uZVxyXG4vLyBvciBtb3JlIHBhcnRzIG9mIGFuIGFjdHVhbCBVUkwuIEVhY2ggc2VnbWVudCBjYW4gaGF2ZSB6ZXJvIG9yIG1vcmUgZmllbGRzIGRlZmluZWQgaW4gaXQuXHJcbi8vIEEgZmllbGQgaXMgZGVmaW5lZCBlaXRoZXIgd2l0aCBvciB3aXRob3V0IGEgbmFtZS4gVW5uYW1lZCBmaWVsZHMgYXJlIGFsc28gY2FsbGVkXHJcbi8vIGFub255bW91cyBhbmQgdGhleSBhcmUgYXNzb2NpYXRlZCB3aXRoIGFuIGluZGV4LiBXaGVuIHRoZSBVUkwgcGF0dGVybiBpcyBwYXJzZWQgaW50byBzZWdtZW50cyxcclxuLy8gdGhlIGFub255bW91cyBmaWVsZHMgYXJlIG51bWJlcmVkIHNlcXVlbnRpYWxseSBhY2Nyb3NzIG11bHRpcGxlIHNlZ21lbnRzLiBUaGF0IG1lYW5zIHRoYXRcclxuLy8gaW5kZXhlcyBkbyBub3QgcmVzdGFydCBmb3IgZWFjaCBzZWdtZW50IGFuZCB0aHVzIGluZGV4ZXMgZm9yIGEgc2VnbWVudCdzIGZpZWxkcyBtYXkgbm90XHJcbi8vIHN0YXJ0IGZyb20gemVyby5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFNlZ21lbnQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkU2VnbWVudFxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWxcclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBjYW4gYmUgcmVwZWF0ZWQgbXV0aXBsZSB0aW1lcy4gU2VnbWVudHMgdGhhdCBhcmUgYm90aFxyXG5cdC8vIG9wdGlvbmFsIGFuZCBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgemVybyBvciBtb3JlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBub3Qgb3B0aW9uYWwgYnV0XHJcblx0Ly8gbXVsdGkgY2FuIGJlIHJlcGVhdGVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG5cdGlzTXVsdGk6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBBcnJheSBvZiBmaWVsZHMuICovXHJcblx0ZmllbGRzOiBQYXJzZWRGaWVsZFtdO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzZWdtZW50J3MgbWF0Y2ggcGF0dGVybi5cclxuXHRyZWdFeHA6IFJlZ0V4cDtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzTXVsdGkgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmllbGRzID0gW107XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBwYXJzZSggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcsIGlzUG90ZW50aWFsbHlNdWx0aTogYm9vbGVhbiwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhbmFseXplIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIHNlZ21lbnQgYW5kIGlmIGl0IHdhcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHRoYXRcclxuXHRcdC8vIGRldGVybWluZXMgdGhlIHNlZ21lbnRzIG9wdGlvbmFsIGFuZCBtdWx0aSBmbGFncywgbW92ZSB0byB0aGUgbmV4dCBjaGFyYWN0ZXIuXHJcblx0XHRpZiAodGhpcy5hbmFsaXplRmlyc3RDaGFyKCBzZWdtZW50RW5kQ2hhcnMsIGlzUG90ZW50aWFsbHlNdWx0aSkpXHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cclxuXHRcdC8vIG1hdGNoIHBhdHRlcm4gb2YgdGhlIHNlZ21lbnQgY29uc2lzdGluZyBvZiBlbGVtZW50cyBlYWNoIG9mIHdoaWNoIGlzIGVpdGhlciB0ZXh0IG9yXHJcblx0XHQvLyByZWd1bGFyIGV4cHJlc3Npb24gb3IgZmllbGRcclxuXHRcdGxldCBtYXRjaFBhdHRlcm46IChQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHApW10gPSBbXTtcclxuXHJcblx0XHQvLyBwYXJzZSB0b2tlbnMgaW4gdGhlIHNlZ21lbnQgKHRleHQsIHJlZ2V4cCwgZmllbGRzKSB1bnRpbCBlaXRoZXIgd2UgcmVhY2ggdGhlIGVuZCBvZlxyXG5cdFx0Ly8gdGhlIGVudGlyZSBVUkwgcGF0dGVybiBvciB3ZSBlbmNvdW50ZXIgYSBzZWdtZW50IGRlbGltaXRlclxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHRva2VuOiBQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHA7XHJcblx0XHRcdGlmIChnX2N1cnJDaGFyID09PSAneycpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgZmllbGQgPSBuZXcgUGFyc2VkRmllbGQoKTtcclxuXHRcdFx0XHRmaWVsZC5wYXJzZSggc2VnbWVudEVuZENoYXJzKTtcclxuXHRcdFx0XHR0b2tlbiA9IGZpZWxkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcoJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCByZWdFeHAgPSBuZXcgUGFyc2VkUmVnRXhwKCk7XHJcblx0XHRcdFx0cmVnRXhwLnBhcnNlKCk7XHJcblx0XHRcdFx0dG9rZW4gPSByZWdFeHA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHRleHQgPSBuZXcgUGFyc2VkVGV4dCgpO1xyXG5cdFx0XHRcdHRleHQucGFyc2UoIHNlZ21lbnRFbmRDaGFycyArIFwieyhcIik7XHJcblx0XHRcdFx0dG9rZW4gPSB0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRjaFBhdHRlcm4ucHVzaCggdG9rZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2VuZXJhdGVSZWdFeHAoIG1hdGNoUGF0dGVybiwgY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFuYWxpemVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIHNlZ21lbnQgYW5kIHJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyXHJcblx0Ly8gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNlZ21lbnQgaXMgb3B0aW9uYWwgYW5kIHdoZXRoZXIgaXQgaXMgXCJtdWx0aVwiLlxyXG5cdHByaXZhdGUgYW5hbGl6ZUZpcnN0Q2hhciggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcsIGlzUG90ZW50aWFsbHlNdWx0aTogYm9vbGVhbik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzd2l0Y2goIGdfY3VyckNoYXIpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgJz8nOiB0aGlzLmlzT3B0aW9uYWwgPSB0cnVlOyByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0Y2FzZSAnISc6IHJldHVybiB0cnVlO1xyXG5cclxuXHRcdFx0Y2FzZSAnKic6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWlzUG90ZW50aWFsbHlNdWx0aSlcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFNpbmdsZS12YWx1ZSBzZWdtZW50IFVSTCBwYXJ0IGNhbm5vdCBzdGFydCBmcm9tICcqJ2ApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzTXVsdGkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjYXNlICcrJzpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghaXNQb3RlbnRpYWxseU11bHRpKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgU2luZ2xlLXNlZ21lbnQgVVJMIHBhcnQgY2Fubm90IHN0YXJ0IGZyb20gJysnYCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNNdWx0aSA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc2VnbWVudEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBFbXB0eSBzZWdtZW50IGVuY291bnRlcmVkYCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgcmVndWxhciBleHByZXNzaW9uIGRlc2NyaWJpbmcgdGhlIHNlZ21lbnQuXHJcblx0cHJpdmF0ZSBnZW5lcmF0ZVJlZ0V4cCggbWF0Y2hQYXR0ZXJuOiAoUGFyc2VkVGV4dCB8IFBhcnNlZEZpZWxkIHwgUGFyc2VkUmVnRXhwKVtdLFxyXG5cdFx0XHRcdFx0Y2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyAxLWJhc2VkIGluZGV4IG9mIHRoZSBSZWdFeHAgY2FwdHVyaW5nIGdyb3VwLiBXZSBuZWVkIHRvIGNvdW50IGNhcHR1cmluZyBncm91cHMgaW5cclxuXHRcdC8vIG9yZGVyIHRvIGxhdGVyIGdldCB2YWx1ZXMgb2YgbmFtZWQgYW5kIGFub255bW91cyBmaWVsZHMuXHJcblx0XHRsZXQgbmV4dENhcHR1cmluZ0dyb3VwSW5kZXggPSAxO1xyXG5cclxuXHRcdGxldCByZWdFeHBTdHJpbmcgPSBcIlwiO1xyXG5cdFx0aWYgKG1hdGNoUGF0dGVybi5sZW5ndGggPT09IDApXHJcblx0XHRcdHJlZ0V4cFN0cmluZyArPSBcIi4rXCI7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHRva2VuIG9mIG1hdGNoUGF0dGVybilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlZFRleHQpXHJcblx0XHRcdFx0XHRyZWdFeHBTdHJpbmcgKz0gdG9rZW4uY29udGVudDtcclxuXHRcdFx0XHRlbHNlIGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlZFJlZ0V4cClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZWdFeHBTdHJpbmcgKz0gXCIoXCIgKyB0b2tlbi5jb250ZW50ICsgXCIpXCI7XHJcblx0XHRcdFx0XHRuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCArPSAxICsgdG9rZW4uY2FwdHVyaW5nR3JvdXBRdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgLy8gaWYgKHRva2VuIGluc3RhbmNlb2YgUGFyc2VkRmllbGQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dG9rZW4uaXNBcnJheSA9IHRoaXMuaXNNdWx0aTtcclxuXHRcdFx0XHRcdHRva2VuLmluZGV4ID0gbmV4dENhcHR1cmluZ0dyb3VwSW5kZXg7XHJcblx0XHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKCB0b2tlbik7XHJcblx0XHRcdFx0XHRyZWdFeHBTdHJpbmcgKz0gdGhpcy5nZW5lcmF0ZVJlZ0V4cFNlY3Rpb25Gb3JGaWVsZCggdG9rZW4pO1xyXG5cdFx0XHRcdFx0bmV4dENhcHR1cmluZ0dyb3VwSW5kZXgrKztcclxuXHRcdFx0XHRcdGlmICh0b2tlbi5tYXRjaFBhdHRlcm4pXHJcblx0XHRcdFx0XHRcdG5leHRDYXB0dXJpbmdHcm91cEluZGV4ICs9IDEgKyB0b2tlbi5tYXRjaFBhdHRlcm4uY2FwdHVyaW5nR3JvdXBRdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5yZWdFeHAgPSBuZXcgUmVnRXhwKCByZWdFeHBTdHJpbmcsIGNhc2VTZW5zaXRpdmUgPyBcIlwiIDogXCJpXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBncm91cCBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG5cdHByaXZhdGUgZ2VuZXJhdGVSZWdFeHBTZWN0aW9uRm9yRmllbGQoIHBhcnNlZEZpZWxkOiBQYXJzZWRGaWVsZCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdGlmIChwYXJzZWRGaWVsZC5tYXRjaFBhdHRlcm4gJiYgcGFyc2VkRmllbGQubWF0Y2hQYXR0ZXJuLmNvbnRlbnQpXHJcblx0XHR7XHJcblx0XHRcdHMgKz0gcGFyc2VkRmllbGQubWF0Y2hQYXR0ZXJuLmNvbnRlbnQ7XHJcblx0XHRcdGlmIChwYXJzZWRGaWVsZC5pc09wdGlvbmFsKVxyXG5cdFx0XHRcdHMgKz0gXCI/XCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChwYXJzZWRGaWVsZC5pc09wdGlvbmFsKVxyXG5cdFx0XHRzICs9IFwiKC4qKVwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IFwiKC4rKVwiO1xyXG5cclxuXHRcdC8vIHMgKz0gXCIpXCI7XHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRUZXh0IGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgdGV4dCBzZWN0aW9uIHdpdGhpbiBhIHNlZ21lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRUZXh0IGV4dGVuZHMgUGFyc2VkVG9rZW5cclxue1xyXG5cdC8vIFRleHQgc2VjdGlvbiBzdHJpbmdcclxuXHRjb250ZW50OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdHBhcnNlKCB0ZXh0RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpICYmIHRleHRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA8IDApXHJcblx0XHR7XHJcblx0XHRcdHMgKz0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFpc1ZhbGlkVGV4dFRva2VuKCBzKSlcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgVGV4dCB0b2tlbiAnJHtzfScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzYCk7XHJcblxyXG5cdFx0Ly8gdGV4dCBtaWdodCBoYXZlIGJlZW4gVVJMIGVuY29kZWRcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBkZWNvZGVVUklDb21wb25lbnQocyk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBUZXh0IHRva2VuICcke3N9JyBjYW5ub3QgYmUgVVJMLWRlY29kZWQuIEVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRSZWdFeHAgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSByZWd1bGFyIGV4cHJlc3Npb24gc2VjdGlvbiB3aXRoaW4gYSBzZWdtZW50IG9yXHJcbi8vIGZpZWxkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUmVnRXhwIGV4dGVuZHMgUGFyc2VkVG9rZW5cclxue1xyXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdcclxuXHRjb250ZW50OiBzdHJpbmc7XHJcblxyXG5cdC8vIE51bWJlciBvZiBjYXB0dXJpbmcgZ3JvdXBzIHdpdGhpbiB0aGUgcmVndWxhciBleHByZXNzaW9uXHJcblx0Y2FwdHVyaW5nR3JvdXBRdHk6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBcIlwiO1xyXG5cdFx0dGhpcy5jYXB0dXJpbmdHcm91cFF0eSA9IDA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgcmVndWxhciBleHByZXNzaW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY3VycmVudCBjaGFyYWN0ZXIgaXMgJygnXHJcblx0ICovXHJcblx0cHVibGljIHBhcnNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBTdGFjayBvZiBvcGVuaW5nIGFuZCBjbG9zaW5nIGNoYXJhY3RlcnMgKHBhcmVudGhlc2lzLCBicmFja2V0cyBhbmQgY3VybHkgYnJhY2VzKSBmb3JcclxuXHRcdC8vIHBhcnNpbmcgcmVndWxhciBleHByZXNzaW9ucyBzZWN0aW9uLiBSZWd1bGFyIGV4cHJlc3Npb24gc2VjdGlvbiBzdG9wcyB3aGVuIHdlIGVuY291bnRlclxyXG5cdFx0Ly8gY2hhcmFjdGVyICcpJyBhbmQgdGhpcyBzdGFjayBpcyBlbXB0eS5cclxuXHRcdGxldCBzdGFjazogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1cnJDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0aWYgKGN1cnJDaGFyID09PSAnKScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICcoJylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPT09IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29udGVudCArPSBjdXJyQ2hhcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYE5vbi1tYXRjaGluZyBjaGFyYWN0ZXIgJyR7Y3VyckNoYXJ9JyBpbiByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjdXJyQ2hhciA9PT0gJ30nKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHN0YWNrLnBvcCgpID09PSAneycpXHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBOb24tbWF0Y2hpbmcgY2hhcmFjdGVyICcke2N1cnJDaGFyfScgaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY3VyckNoYXIgPT09ICddJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzdGFjay5wb3AoKSA9PT0gJ1snKVxyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgTm9uLW1hdGNoaW5nIGNoYXJhY3RlciAnJHtjdXJyQ2hhcn0nIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKFwiKHtbXCIuaW5kZXhPZiggY3VyckNoYXIpID49IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoY3VyckNoYXIgPT09ICcoJylcclxuXHRcdFx0XHRcdHRoaXMuY2FwdHVyaW5nR3JvdXBRdHkrKztcclxuXHJcblx0XHRcdFx0c3RhY2sucHVzaCggY3VyckNoYXIpO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnXFxcXCcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnQgKz0gY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0Z19jaGVja0VuZCggYEluIHRoZSBSZWdleHAgJyR7dGhpcy5jb250ZW50fScsIHRoZSBlc2NhcGUgY2hhcmFjdGVyICdcXFxcJyBtdXN0IGJlIGZvbGxvd2VkIGJ5IGFub3RoZXIgY2hhcmFjdGVyYCk7XHJcblx0XHRcdFx0Y3VyckNoYXIgPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMuY29udGVudCArPSBjdXJyQ2hhcjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBlbmQgdXAgaGVyZSBvbmx5IGlmIHRoZSBVUkwgcGF0dGVybiBlbmRlZCB3aGlsZSB3aXRoaW4gdW5maW5pc2hlZCByZWd1bGFyIGV4cHJlc3Npb25cclxuXHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgVVJMIHBhdHRlcm4gZW5kIHdpdGhpbiByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBmaW5hbGl6ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbnRlbnQpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEVtcHR5IHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cclxuXHRcdHN1cGVyLmZpbmFsaXplKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkRmllbGQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSBmaWVsZCB3aXRoaW4gYSBzZWdtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkRmllbGQgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkRmllbGRcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmaWVsZCBpcyBvcHRpb25hbFxyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGZpZWxkLlxyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gRmllbGQgRmllbGRGb3JtYXRcclxuXHRmb3JtYXQ6IGFwaS5GaWVsZEZvcm1hdDtcclxuXHJcblx0LyoqIE9wdGlvbmFsIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGZpZWxkICovXHJcblx0ZGVmYXVsdFZhbHVlOiBhcGkuRmllbGRWYWx1ZVR5cGU7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmaWVsZCB2YWx1ZSBpcyBhbiBhcnJheS4gVGhpcyBpcyB0cnVlIGZvciBmaWVsZHMgdGhhdCBjYW4gYXBwZWFyXHJcblx0Ly8gbXVsdGlwbGUgdGltZXMgaW4gdGhlIFVSTCBwYXJ0LlxyXG5cdGlzQXJyYXk6IGJvb2xlYW47XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY2FwdHVyaW5nIGdyb3VwIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGZpZWxkIHdpdGhpbiB0aGVcclxuXHQvLyBzZWdtZW50LlxyXG5cdGluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcgZGVzY3JpYmluZyB0aGUgbWF0Y2hpbmcgcGF0dGVybiBmb3IgdGhlIGZpZWxkXHJcblx0bWF0Y2hQYXR0ZXJuOiBQYXJzZWRSZWdFeHA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNPcHRpb25hbCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJcIjtcclxuXHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LlN0cmluZztcclxuXHRcdHRoaXMubWF0Y2hQYXR0ZXJuID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBhcnNlcyByZWd1bGFmaWVsZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzICd7J1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBwYXJzZSggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gc2tpcCAneydcclxuXHRcdGdfbW92ZSgpO1xyXG5cdFx0Z19jaGVja0VuZCggYEEgZmllbGQgbXVzdCBkZWZpbmUgYSBuYW1lYCk7XHJcblxyXG5cdFx0Ly8gZmlyc3QgY2hlY2sgd2hldGhlciB0aGlzIGZpZWxkIGlzIG9wdGlvbmFsXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmlzT3B0aW9uYWwgPSB0cnVlO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgY2hhcmFjdGVycyBpbiB0aGUgZmllbGQgbmFtZVxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGlmIChzZWdtZW50RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCBkb2Vzbid0IGhhdmUgY2xvc2luZyAnfSdgKTtcclxuXHRcdFx0ZWxzZSBpZiAoXCJ9KCU9XCIuaW5kZXhPZihnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm5hbWUgKz0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLm5hbWUubGVuZ3RoID09PSAwKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCBtdXN0IGhhdmUgbmFtZWApO1xyXG5cdFx0ZWxzZSBpZiAoIWlzVmFsaWRGaWVsZE5hbWUoIHRoaXMubmFtZSkpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkIG5hbWUgJyR7dGhpcy5uYW1lfScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzYCk7XHJcblxyXG5cdFx0Z19jaGVja0VuZCggYEZpZWxkICcke3RoaXMubmFtZX0nIGRvZXNuJ3QgaGF2ZSBjbG9zaW5nICd9J2ApO1xyXG5cclxuXHRcdC8vIGZpZWxkIG1heSBkZWZpbmUgZm9ybWF0XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJyUnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKVxyXG5cdFx0XHRnX2NoZWNrRW5kKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgZG9lc24ndCBzcGVjaWZ5IGZvcm1hdCBhZnRlciAnJSdgKTtcclxuXHJcblx0XHRcdGxldCBmb3JtYXRDaGFyID0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0aWYgKGZvcm1hdENoYXIgPT09ICdpJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gYXBpLkZpZWxkRm9ybWF0LkludGVnZXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZm9ybWF0Q2hhciA9PT0gJ2YnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuRmxvYXQ7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZm9ybWF0Q2hhciA9PT0gJ2InKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuQm9vbGVhbjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgaGFzIGludmFsaWQgZm9ybWF0IGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfSdgKTtcclxuXHJcblx0XHRcdGdfY2hlY2tFbmQoIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBkb2Vzbid0IGhhdmUgY2xvc2luZyAnfSdgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmaWVsZCBtYXkgaGF2ZSByZWd1bGFyIGV4cHJlc3Npb25cclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnKCcpXHJcblx0XHR7XHJcblx0XHRcdGxldCByZWdFeHAgPSBuZXcgUGFyc2VkUmVnRXhwKCk7XHJcblx0XHRcdHJlZ0V4cC5wYXJzZSgpO1xyXG5cdFx0XHR0aGlzLm1hdGNoUGF0dGVybiA9IHJlZ0V4cDtcclxuXHJcblx0XHRcdGdfY2hlY2tFbmQoIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBkb2Vzbid0IGhhdmUgY2xvc2luZyAnfSdgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmaWVsZCBtYXkgaGF2ZSBkZWZhdWx0IHZhbHVlOiBpbiB0aGlzIGNhc2UgaXQgYmVjb21lcyBvcHRpb25hbFxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc9JylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pc09wdGlvbmFsID0gdHJ1ZTtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHRoaXMucGFyc2VEZWZhdWx0VmFsdWUoIHNlZ21lbnRFbmRDaGFycyk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHN3aXRjaCggdGhpcy5mb3JtYXQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5JbnRlZ2VyOiB0aGlzLmRlZmF1bHRWYWx1ZSA9IE5hTjsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuRmxvYXQ6IHRoaXMuZGVmYXVsdFZhbHVlID0gTmFOOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5Cb29sZWFuOiB0aGlzLmRlZmF1bHRWYWx1ZSA9IHVuZGVmaW5lZDsgYnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDogdGhpcy5kZWZhdWx0VmFsdWUgPSBcIlwiOyBicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnfScpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkICcke3RoaXMubmFtZX0nIGhhcyBpbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfSdgKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VEZWZhdWx0VmFsdWUoIHNlZ21lbnRFbmRDaGFyczogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkpXHJcblx0XHR7XHJcblx0XHRcdGlmIChzZWdtZW50RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBkb2Vzbid0IGhhdmUgY2xvc2luZyAnfSdgKTtcclxuXHRcdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJ30nKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGRlZmF1bHQgdmFsdWUgaXMgZW1wdHkgYW5kIGlmIGZpZWxkIGZvcm1hdCBpcyBzZXQgdG8gYSBub24tc3RyaW5nXHJcblx0XHQvLyBhbHNvIGNoZWNrIHdoZXRoZXIgaXQgY2FuIGJlIGNvbnZlcnRlZCB0byB0aGVhdCBmb3JtYXQuXHJcblx0XHRpZiAoIXMpXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkICcke3RoaXMubmFtZX0nIGRlZmF1bHQgdmFsdWUgY2Fubm90IGJlIGVtcHR5YCk7XHJcblxyXG5cdFx0Ly8gZGVmYXVsdCB2YWx1ZSBtaWdodCBoYXZlIGJlZW4gVVJMIGVuY29kZWRcclxuXHRcdHMgPSBkZWNvZGVVUklDb21wb25lbnQocyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZm9ybWF0ID09PSBhcGkuRmllbGRGb3JtYXQuSW50ZWdlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIoIHMpO1xyXG5cdFx0XHRpZiAoaXNOYU4oIHRoaXMuZGVmYXVsdFZhbHVlKSB8fCAhTnVtYmVyLmlzSW50ZWdlciggdGhpcy5kZWZhdWx0VmFsdWUpKVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYERlZmF1bHQgdmFsdWUgJyR7c30nIG9mIEludGVnZXIgZmllbGQgJyR7dGhpcy5uYW1lfScgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBJbnRlZ2VyYCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmZvcm1hdCA9PT0gYXBpLkZpZWxkRm9ybWF0LkZsb2F0KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IE51bWJlciggcyk7XHJcblx0XHRcdGlmIChpc05hTiggdGhpcy5kZWZhdWx0VmFsdWUpKVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYERlZmF1bHQgdmFsdWUgb2YgJyR7c30nIEZsb2F0IGZpZWxkICcke3RoaXMubmFtZX0nIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gRmxvYXRgKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZm9ybWF0ID09PSBhcGkuRmllbGRGb3JtYXQuQm9vbGVhbilcclxuXHRcdHtcclxuXHRcdFx0bGV0IHYgPSBzLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmICh2ID09PSBcInRydWVcIiB8fCB2ID09PSBcInRcIiB8fCB2ID09PSBcInllc1wiIHx8IHYgPT09IFwieVwiIHx8IHYgPT09IFwiMVwiKVxyXG5cdFx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAodiA9PT0gXCJmYWxzZVwiIHx8IHYgPT09IFwiZlwiIHx8IHYgPT09IFwibm9cIiB8fCB2ID09PSBcIm5cIiB8fCB2ID09PSBcIjBcIilcclxuXHRcdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRGVmYXVsdCB2YWx1ZSBvZiAnJHtzfScgQm9vbGVhbiBmaWVsZCAnJHt0aGlzLm5hbWV9JyBjYW5ub3QgYmUgY29udmVydGVkIHRvIEJvb2xlYW5gKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBzO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgdGV4dCB0b2tlbiBpbiBhIHNlZ2VtZW50LiBUbyBiZSB2YWxpZCwgaXQgbXVzdFxyXG4gKiBiZSBhbHBoYS1udW1lcmljIG9yIHVuZGVzY29yZSAnXycgb3IgZGFzaCAnLScgb3IgZG9yICcuJyBvciBwZXJjZW50IHNpZ24gJyUnIChmb3IgVVJMLWVuY29kZWQgY2hhcmFjdGVycykuXHJcbiAqIEBwYXJhbSBzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkVGV4dFRva2VuKCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15bYS16MC05X1xcLVxcLiVdKyQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIGZpZWxkIG5hbWUuIFRvIGJlIHZhbGlkLCBpdCBtdXN0IHN0YXJ0IGZyb20gdGhlXHJcbiAqIHRoZSBhbHBoYS1udW1lcmljIG9yIHVuZGVzY29yZSAnXycgY2hhcmFjdGVyIGFuZCBiZSBmb2xsb3dlZCBieSBvcHRpb25hbCBhbHBoYS1udW1lcmljIG9yXHJcbiAqIHVuZGVzY29yZSAnXycgb3IgZGFzaCAnLScgY2hhcmFjdGVycy5cclxuICogQHBhcmFtIHMgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkRmllbGROYW1lKCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15bYS16X11bYS16MC05X10qJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgbmFtZSBvZiBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIuXHJcbiAqIFRvIGJlIHZhbGlkLCBpdCBtdXN0IGJlIGFscGhhLW51bWVyaWMgb3IgdW5kZXNjb3JlICdfJyBvciBkYXNoICctJy5cclxuICogQHBhcmFtIHNcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRRdWVyeVBhcmFtTmFtZSggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eW2EtejAtOV9cXC1dKyQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGNoYXJhY3RlciBpcyBhIGRlbGltaXRlciB0aGF0IGNhbm5vdCBiZSB1c2VkIGFzIHRleHQgd2l0aGluIFVSTFxyXG4gKiBAcGFyYW0gYyBcclxuICovXHJcbmZ1bmN0aW9uIGdfaXNEZWxpbWl0ZXIoIGM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBcIiFAIyQlXiYqKCkrPVtde306O1xcXCInPD4sLj8vfFxcXFxgflwiLmluZGV4T2YoYykgPj0gMDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBlcnJvciB0aGF0IG9jY3VycmVkIGR1cmluZyBwYXJzaW5nIG9mXHJcbi8vIGEgVVJMIHBhdHRlcm4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yIGltcGxlbWVudHMgYXBpLklVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvblxyXG57XHJcblx0Ly8gSW5kZXggaW4gdGhlIHBhdHRlcm4gc3RyaW5nIGF0IHdoaWNoIHRoZWVycm9yIG9jY3VycmVkLlxyXG5cdHBvczogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbWVzc2FnZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnBvcyA9IGdfY3VyckluZGV4O1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gYEVycm9yIGF0IHBvc2l0aW9uICR7dGhpcy5wb3N9OiAke21lc3NhZ2V9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==