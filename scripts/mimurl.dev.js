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

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file contains the public API of the URL Parsing and Matching library 'mimurl'.
 *
 * To read about mimurl features
 * <a href="https://mmichlin66.github.io/mimurl/mimurlAbout.html" target="_top">please visit here</a>.
 *
 * To play with mimurl pattern parsing and URL matching capabilities
 * <a href="https://mmichlin66.github.io/mimurl/mimurlDemo.html" target="_top">please visit here</a>.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW11cmwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbXVybC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW11cmwvLi9zcmMvYWN0dWFsLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltdXJsLy4vc3JjL21pbXVybFR5cGVzLnRzIiwid2VicGFjazovL21pbXVybC8uL3NyYy9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSx1QkFBdUI7QUFDdkIsU0FBZ0IsUUFBUSxD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Z0JBRTFCLE1BQU0sSUFBSSwwQkFBMEIsQ0FBRSxxQkFBcUIsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksa0NBQWtDLENBQUMsQ0FBQztTQUM5SDs7WUFFQSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Q7QUFLRDs7OztHQUlHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBRSxDQUFTO0lBRW5DLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFJRDs7Ozs7R0FLRztBQUNILFNBQVMsZ0JBQWdCLENBQUUsQ0FBUztJQUVuQyxPQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQVMscUJBQXFCLENBQUUsQ0FBUztJQUV4QyxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBUyxhQUFhLENBQUUsQ0FBUztJQUVoQyxPQUFPLGtDQUFrQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsZ0dBQWdHO0FBQ2hHLGlCQUFpQjtBQUNqQixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQU0sMEJBQTJCLFNBQVEsS0FBSztJQUs3QyxZQUFhLE9BQWU7UUFFM0IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixJQUFJLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxDQUFDO0lBQzVELENBQUM7Q0FDRCIsImZpbGUiOiJtaW11cmwuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltdXJsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbXVybFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbXVybFR5cGVzLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL2FwaVwiXHJcblxyXG5cclxuXHJcbi8vIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVSTCggdXJsOiBzdHJpbmcpOiBhcGkuSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0bGV0IHBhcnNlZFVSTDogYXBpLklQYXJzZWRBY3R1YWxVUkwgPSB7fTtcclxuXHJcblx0Ly8gZmluZCBwcm90b2NvbFxyXG5cdGxldCBob3N0bmFtZUluZGV4OiBudW1iZXI7XHJcblx0bGV0IHByb3RvY29sU2VwYXJhdG9ySW5kZXggPSB1cmwuaW5kZXhPZiggXCI6Ly9cIik7XHJcblx0aWYgKHByb3RvY29sU2VwYXJhdG9ySW5kZXggPT09IDApXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiVVJMIGNhbm5vdCBzdGFydCBmcm9tICc6Ly8nXCIpO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sU2VwYXJhdG9ySW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdHBhcnNlZFVSTC5wcm90b2NvbCA9IHVybC5zdWJzdHIoIDAsIHByb3RvY29sU2VwYXJhdG9ySW5kZXgpO1xyXG5cdFx0aWYgKCFpc1ZhbGlkUHJvdG9jb2woIHBhcnNlZFVSTC5wcm90b2NvbCkpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggYFByb3RvY29sICcke3BhcnNlZFVSTC5wcm90b2NvbH0nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc2ApO1xyXG5cclxuXHRcdGhvc3RuYW1lSW5kZXggPSBwcm90b2NvbFNlcGFyYXRvckluZGV4ICsgMztcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0aG9zdG5hbWVJbmRleCA9IHVybFswXSA9PT0gJy8nID8gLTEgOiAwO1xyXG5cclxuXHRsZXQgbmV4dFNlYXJjaEluZGV4U3RhcnQgPSBob3N0bmFtZUluZGV4IDwgMCA/IDAgOiBob3N0bmFtZUluZGV4O1x0XHJcblx0bGV0IGNvbG9uSW5kZXggPSB1cmwuaW5kZXhPZiggJzonLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblx0bGV0IHNsYXNoSW5kZXggPSB1cmwuaW5kZXhPZiggJy8nLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblx0bGV0IHF1ZXN0aW9uSW5kZXggPSB1cmwuaW5kZXhPZiggJz8nLCBuZXh0U2VhcmNoSW5kZXhTdGFydCk7XHJcblx0bGV0IGhhc2hJbmRleCA9IHVybC5pbmRleE9mKCAnIycsIG5leHRTZWFyY2hJbmRleFN0YXJ0KTtcclxuXHJcblx0aWYgKGhvc3RuYW1lSW5kZXggPj0gMClcclxuXHR7XHJcblx0XHRpZiAoY29sb25JbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgsIGNvbG9uSW5kZXggLSBob3N0bmFtZUluZGV4KS5zcGxpdCggJy4nKTtcclxuXHRcdGVsc2UgaWYgKHNsYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwYXJzZWRVUkwuaG9zdG5hbWUgPSB1cmwuc3Vic3RyKCBob3N0bmFtZUluZGV4LCBzbGFzaEluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlIGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgcXVlc3Rpb25JbmRleCAtIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cdFx0ZWxzZSBpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLmhvc3RuYW1lID0gdXJsLnN1YnN0ciggaG9zdG5hbWVJbmRleCwgaGFzaEluZGV4IC0gaG9zdG5hbWVJbmRleCkuc3BsaXQoICcuJyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcnNlZFVSTC5ob3N0bmFtZSA9IHVybC5zdWJzdHIoIGhvc3RuYW1lSW5kZXgpLnNwbGl0KCAnLicpO1xyXG5cclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgcGFyc2VkVVJMLmhvc3RuYW1lLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VnbWVudCA9IHBhcnNlZFVSTC5ob3N0bmFtZVtpXTtcclxuXHRcdFx0aWYgKCFpc1ZhbGlkSG9zdG5hbWVTZWdtZW50KCBzZWdtZW50KSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBIb3N0bmFtZSBzZWdtZW50ICcke3NlZ21lbnR9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChjb2xvbkluZGV4ID4gMClcclxuXHR7XHJcblx0XHRsZXQgcG9ydDogc3RyaW5nO1xyXG5cdFx0aWYgKHNsYXNoSW5kZXggPiAwKVxyXG5cdFx0XHRwb3J0ID0gdXJsLnN1YnN0ciggY29sb25JbmRleCArIDEsIHNsYXNoSW5kZXggLSBjb2xvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlIGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHRcdFx0cG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxLCBxdWVzdGlvbkluZGV4IC0gY29sb25JbmRleCAtIDEpO1xyXG5cdFx0ZWxzZSBpZiAoaGFzaEluZGV4ID4gMClcclxuXHRcdFx0cG9ydCA9IHVybC5zdWJzdHIoIGNvbG9uSW5kZXggKyAxLCBoYXNoSW5kZXggLSBjb2xvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBvcnQgPSB1cmwuc3Vic3RyKCBjb2xvbkluZGV4ICsgMSk7XHJcblxyXG5cdFx0aWYgKCFpc1ZhbGlkUG9ydCggcG9ydCkpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggYFBvcnQgJyR7cG9ydH0nIGNvbnRhaW5zIG5vbi1udW1lcmljYWwgY2hhcmFjdGVyc2ApO1xyXG5cclxuXHRcdHBhcnNlZFVSTC5wb3J0ID0gTnVtYmVyKHBvcnQpO1xyXG5cdH1cclxuXHJcblx0Ly8gc2xhc2ggY2FuIGJlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaWYgdGhlcmUgaXMgbm8gaG9zdG5hbWVcclxuXHRpZiAoc2xhc2hJbmRleCA+PSAwKVxyXG5cdHtcclxuXHRcdGlmIChxdWVzdGlvbkluZGV4ID4gMClcclxuXHRcdFx0cGFyc2VkVVJMLnBhdGggPSB1cmwuc3Vic3RyKCBzbGFzaEluZGV4ICsgMSwgcXVlc3Rpb25JbmRleCAtIHNsYXNoSW5kZXggLSAxKS5zcGxpdCggJy8nKTtcclxuXHRcdGVsc2UgaWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHBhcnNlZFVSTC5wYXRoID0gdXJsLnN1YnN0ciggc2xhc2hJbmRleCArIDEsIGhhc2hJbmRleCAtIHNsYXNoSW5kZXggLSAxKS5zcGxpdCggJy8nKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyc2VkVVJMLnBhdGggPSB1cmwuc3Vic3RyKCBzbGFzaEluZGV4ICsgMSkuc3BsaXQoICcvJyk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBwYXJzZWRVUkwucGF0aC5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlZ21lbnQgPSBwYXJzZWRVUkwucGF0aFtpXTtcclxuXHRcdFx0aWYgKCFpc1ZhbGlkU2VnbWVudCggc2VnbWVudCkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgUGF0aCBzZWdtZW50ICcke3NlZ21lbnR9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNgKTtcclxuXHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VnbWVudCA9IGRlY29kZVVSSUNvbXBvbmVudCggc2VnbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYFBhdGggc2VnbWVudCAnJHtzZWdtZW50fScgY2Fubm90IGJlIFVSTC1kZWNvZGVkLiBFcnJvcjogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGFyc2VkVVJMLnBhdGhbaV0gPSBzZWdtZW50O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKHF1ZXN0aW9uSW5kZXggPiAwKVxyXG5cdHtcclxuXHRcdHBhcnNlZFVSTC5xdWVyeSA9IHt9O1xyXG5cdFx0bGV0IHNlYXJjaFN0cmluZzogc3RyaW5nO1xyXG5cdFx0aWYgKGhhc2hJbmRleCA+IDApXHJcblx0XHRcdHNlYXJjaFN0cmluZyA9IHVybC5zdWJzdHIoIHF1ZXN0aW9uSW5kZXggKyAxLCBoYXNoSW5kZXggLSBxdWVzdGlvbkluZGV4IC0gMSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHNlYXJjaFN0cmluZyA9IHVybC5zdWJzdHIoIHF1ZXN0aW9uSW5kZXggKyAxKTtcclxuXHJcblx0XHRsZXQgcGFyYW1zID0gc2VhcmNoU3RyaW5nLnNwbGl0KCAnJicpO1xyXG5cdFx0Zm9yKCBsZXQgcGFyYW0gb2YgcGFyYW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXBhcmFtKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYEludmFsaWQgc3R1Y3R1cmUgb2YgcXVlcnkgc3RyaW5nIFVSTCBwYXJ0YCk7XHJcblxyXG5cdFx0XHRsZXQgYXJyID0gcGFyYW0uc3BsaXQoICc9Jyk7XHJcblx0XHRcdGxldCBuYW1lOiBzdHJpbmc7XHJcblx0XHRcdGxldCB2YWx1ZTogc3RyaW5nO1xyXG5cdFx0XHRpZiAoYXJyLmxlbmd0aCA+IDIpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtwYXJhbX0nIGhhcyBtb3JlIHRoYW4gb25lICc9JyBzeW1ib2xgKTtcclxuXHJcblx0XHRcdGlmIChhcnIubGVuZ3RoIDwgMilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWUgPSBwYXJhbTtcclxuXHRcdFx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lID0gYXJyWzBdO1xyXG5cdFx0XHRcdHZhbHVlID0gYXJyWzFdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzVmFsaWRRdWVyeVBhcmFtTmFtZSggdGhpcy5uYW1lKSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIG5hbWUgJyR7bmFtZX0nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyYCk7XHJcblxyXG5cdFx0XHRpZiAodmFsdWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWlzVmFsaWRTZWdtZW50KCB2YWx1ZSkpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBWYWx1ZSAnJHt2YWx1ZX0nIG9mIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7bmFtZX0nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc2ApO1xyXG5cclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCggdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYFZhbHVlICcke3ZhbHVlfScgb2YgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtuYW1lfScgY2Fubm90IGJlIFVSTC1kZWNvZGVkLiBFcnJvcjogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuYW1lIGluIHBhcnNlZFVSTC5xdWVyeSlcclxuXHRcdFx0XHRwYXJzZWRVUkwucXVlcnlbbmFtZV0ucHVzaCggdmFsdWUpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cGFyc2VkVVJMLnF1ZXJ5W25hbWVdID0gW3ZhbHVlXTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRpZiAoaGFzaEluZGV4ID4gMClcclxuXHR7XHJcblx0XHRsZXQgdmFsdWUgPSB1cmwuc3Vic3RyKCBoYXNoSW5kZXggKyAxKTtcclxuXHRcdGlmICghaXNWYWxpZFNlZ21lbnQoIHZhbHVlKSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgVmFsdWUgJyR7dmFsdWV9JyBvZiBoYXNoIFVSTCBwYXJ0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc2ApO1xyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRwYXJzZWRVUkwuaGFzaCA9IGRlY29kZVVSSUNvbXBvbmVudCggdmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgVmFsdWUgJyR7dmFsdWV9JyBvZiBoYXNoIFVSTCBwYXJ0IGNhbm5vdCBiZSBVUkwtZGVjb2RlZC4gRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHR9XHJcbn1cclxuXHJcblx0cmV0dXJuIHBhcnNlZFVSTDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBwcm90b2NvbCBVUkwgcGFydC4gVG8gYmUgdmFsaWQsIGl0IG11c3RcclxuICogYmUgYWxwaGEtbnVtZXJpYy5cclxuICogQHBhcmFtIHNcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRQcm90b2NvbCggczogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIC9eW2EtejAtOV0rJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgc2VnbWVudCBpbiB0aGUgaG9zdG5hbWUgVVJMIHBhcnQuIFRvIGJlIHZhbGlkLFxyXG4gKiBpdCBtdXN0IGJlIGFscGhhLW51bWVyaWMgb3IgdW5kZXJzY29yZSAnXycgb3IgZGFzaCAnLScuXHJcbiAqIEBwYXJhbSBzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkSG9zdG5hbWVTZWdtZW50KCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15bYS16MC05X1xcLV0rJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgcG9ydCBVUkwgcGFydC4gVG8gYmUgdmFsaWQsIGl0IG11c3RcclxuICogYmUgbnVtZXJpYy5cclxuICogQHBhcmFtIHNcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRQb3J0KCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15cXGQrJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgc2VnbWVudCBpbiBwYXRoLCBxdWVyeSBzdHJpbmcgb3IgaGFzaCBVUkwgcGFydC5cclxuICogVG8gYmUgdmFsaWQsIGl0IG11c3QgYmUgYWxwaGEtbnVtZXJpYyBvciB1bmRlc2NvcmUgJ18nIG9yIGRhc2ggJy0nIG9yIHBlcmNlbnQgc2lnbiAnJScgKGZvclxyXG4gKiBVUkwtZW5jb2RlZCBjaGFyYWN0ZXJzKS5cclxuICogQHBhcmFtIHNcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRTZWdtZW50KCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15bYS16MC05X1xcLVxcLiVdKyQvaS50ZXN0KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIG5hbWUgb2YgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyLlxyXG4gKiBUbyBiZSB2YWxpZCwgaXQgbXVzdCBiZSBhbHBoYS1udW1lcmljIG9yIHVuZGVzY29yZSAnXycgb3IgZGFzaCAnLScuXHJcbiAqIEBwYXJhbSBzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUXVlcnlQYXJhbU5hbWUoIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlthLXowLTlfXFwtXSskL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBwdWJsaWMgQVBJIG9mIHRoZSBVUkwgUGFyc2luZyBhbmQgTWF0Y2hpbmcgbGlicmFyeSAnbWltdXJsJy5cclxuICpcclxuICogVG8gcmVhZCBhYm91dCBtaW11cmwgZmVhdHVyZXNcclxuICogPGEgaHJlZj1cImh0dHBzOi8vbW1pY2hsaW42Ni5naXRodWIuaW8vbWltdXJsL21pbXVybEFib3V0Lmh0bWxcIiB0YXJnZXQ9XCJfdG9wXCI+cGxlYXNlIHZpc2l0IGhlcmU8L2E+LlxyXG4gKlxyXG4gKiBUbyBwbGF5IHdpdGggbWltdXJsIHBhdHRlcm4gcGFyc2luZyBhbmQgVVJMIG1hdGNoaW5nIGNhcGFiaWxpdGllc1xyXG4gKiA8YSBocmVmPVwiaHR0cHM6Ly9tbWljaGxpbjY2LmdpdGh1Yi5pby9taW11cmwvbWltdXJsRGVtby5odG1sXCIgdGFyZ2V0PVwiX3RvcFwiPnBsZWFzZSB2aXNpdCBoZXJlPC9hPi5cclxuICovXHJcblxyXG4vKipcclxuICogVGhlIFBhcnNlZEFjdHVhbFVSTCBjbGFzcyBjb250YWlucyBVUkwgcGFydHMgcGFyc2VkIG91dCBvZiB0aGUgVVJMIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZEFjdHVhbFVSTFxyXG57XHJcblx0LyoqIFByb3RvY29sIFVSTCBwYXJ0ICovXHJcblx0cHJvdG9jb2w/OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBIb3N0bmFtZSBVUkwgcGFydCBhcyBhcnJheSBvZiBob3N0bmFtZSBzZWdtZW50czogZS5nLiBgW1wid3d3XCIsIFwiYWJjXCIsIFwiY29tXCJdYCAqL1xyXG5cdGhvc3RuYW1lPzogc3RyaW5nW107XHJcblxyXG5cdC8qKiBQb3J0IFVSTCBwYXJ0ICovXHJcblx0cG9ydD86IG51bWJlcjtcclxuXHJcblx0LyoqIFBhdGggVVJMIHBhcnQgYXMgYXJyYXkgb2YgcGF0aCBzZWdtZW50czogZS5nLiBgW1widXNlclwiLCBcIjEyM1wiLCBcInByb2ZpbGVcIl1gICovXHJcblx0cGF0aD86IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogUXVlcnkgc3RyaW5nIFVSTCBwYXJ0IGFzIGEgbWFwIG9mIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHRvIHRoZSBhcnJheXMgb2YgdGhlaXIgdmFsdWVzICovXHJcblx0cXVlcnk/OiB7IFtQOiBzdHJpbmddOiBzdHJpbmdbXSB9O1xyXG5cclxuXHQvKiogSGFzaCAoZnJhZ21lbnQpIFVSTCBwYXJ0ICovXHJcblx0aGFzaD86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFRoZSBVcmxQYXJ0IGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyBkaXN0aW5ndWlzaGluZyBVUkwgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFVXJsUGFydCB7IFByb3RvY29sLCBIb3N0bmFtZSwgUG9ydCwgUGF0aCwgUXVlcnksIEhhc2ggfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRVcmxQYXR0ZXJuIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSB0b3AtbGV2ZWwgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHJlc3VsdCBvZiBVUkxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFVybFBhdHRlcm5cclxue1xyXG5cdC8qKiBPcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBmb3Igd2hpY2ggdGhpcyBvYmplY3Qgd2FzIGNyZWF0ZWQuICovXHJcblx0cGF0dGVyblN0cmluZzogc3RyaW5nO1xyXG5cclxuXHQvKiogUHJvdG9jb2wgVVJMIHBhcnQuICovXHJcblx0cHJvdG9jb2w6IElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIEhvc3RuYW1lIFVSTCBwYXJ0LiAqL1xyXG5cdGhvc3RuYW1lOiBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIFBvcnQgVVJMIHBhcnQuICovXHJcblx0cG9ydDogSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0O1xyXG5cclxuXHQvKiogUGF0aCBVUkwgcGFydC4gKi9cclxuXHRwYXRoOiBJUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydDtcclxuXHJcblx0LyoqIFF1ZXJ5IFN0cmluZyBVUkwgcGFydC4gKi9cclxuXHRxdWVyeTogSVBhcnNlZFF1ZXJ5U3RyaW5nO1xyXG5cclxuXHQvKiogSGFzaCBVUkwgcGFydC4gKi9cclxuXHRoYXNoOiBJUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQ7XHJcblxyXG5cdC8qKiBBcnJheSBvZiBVUkwgcGFydC4gSW5kZXhlcyBhcmUgdmFsdWVzIGZyb20gdGhlIFVybFBhcnQgZW51bWVyYXRpb24uICovXHJcblx0cGFydHM6IElQYXJzZWRVcmxQYXJ0W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYXJzZWRMb2NhdGlvbiB0eXBlIGRlZmluZXMgaG93IGRpZmZlcmVudCBzZWN0aW9uIG9mIHRoZSBVUkwgcGF0dGVybiBjYW4gYmUgbG9jYXRlZCBpbiB0aGVcclxuICogb3JpZ2luYWwgcGF0dGVybiBzdHJpbmcuIExvY2F0aW9uIGlzIGRlZmluZWQgdXNpbmcgdGhlIHplcm8tYmFzZWQgaW5kZXggd2hlcmUgdGhlIHNlY3Rpb25cclxuICogYmVnaW5zIGFuZCBpdHMgbGVuZ3RoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUGFyc2VkTG9jYXRpb24gPSB7IHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFRva2VuIGlzIGEgYmFzZSBpbnRlcmZhY2UgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqXHJcblx0ICogTG9jYXRpb24gb2YgdGhlIHBhcnQgaW4gdGhlIG9yaWdpbmFsIHBhdHRlcm4gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHplcm8tYmFzZWQgaW5kZXggd2hlcmVcclxuXHQgKiB0aGUgcGFydCBiZWdpbnMgYW5kIGl0cyBsZW5ndGguXHJcblx0ICovXHJcblx0bG9jYXRpb246IFBhcnNlZExvY2F0aW9uO1xyXG5cclxuXHQvKiogQ29udGVudCBvZiB0aGUgdG9rZW4gKi9cclxuXHR0b2tlblN0aW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyc2VkVXJsUGFydCBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkVXJsUGFydCBleHRlbmRzIElQYXJzZWRUb2tlblxyXG57XHJcblx0LyoqIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuICovXHJcblx0dXJsUGFydDogRVVybFBhcnQ7XHJcblxyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcGFyaXNvbiBvZiB0aGlzIHBhcnQgc2hvbGQgYmUgY2FzZS1zZW5zaXRpdmUgb3Igbm90LiAqL1xyXG5cdGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC4gKi9cclxuXHRnZXRTZWdtZW50cygpOiBJUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgaXMgY29tbW9uIGZvciBVUkwgcGFydHMgdGhhdFxyXG4gKiBkZWZpbmUgYSBzaW5nbGUgc2VnbWVudDogcHJvdG9jb2wsIHBvcnQgYW5kIGhhc2guXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCBleHRlbmRzIElQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvKiogVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gKi9cclxuXHRzZWdtZW50OiBJUGFyc2VkU2VnbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuICogY2FuIGRlZmluZSBtdWx0aXBsZSBzZWdtZW50czogaG9zdG5hbWUgYW5kIHBhdGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLiAqL1xyXG5cdHNlZ21lbnRzOiBJUGFyc2VkU2VnbWVudFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFF1ZXJ5U3RyaW5nIGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBxdWVyeSBzdHJpbmdcclxuICogcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFF1ZXJ5U3RyaW5nIGV4dGVuZHMgSVBhcnNlZFVybFBhcnRcclxue1xyXG5cdC8qKiBRdWVyeSBzdHJpbmcgZGVmaW5lcyBvbmUgc2VnZW1lbnQgcGVyIGVhY2ggcGFyYW1ldGVyIG5hbWUuICovXHJcblx0cGFyc2VkUVNQczogeyBbUDogc3RyaW5nXTogSVBhcnNlZFFTUCB9O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyBub3Qgc3BlY2lmaWVkIGV4cGxpY2l0bHkgaW4gdGhlIHBhdHRlcm5cclxuXHQgKiB3aWxsIGJlIGFsbG93ZWQgd2hlbiBwYXJzaW5nIGFjdHVhbCBVUkxzLlxyXG5cdCAqL1xyXG5cdGFsbG93RXh0cmFRdWVyeVBhcmFtczogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRRU1AgaW50ZXJmYWNlIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IG1hdGNoaW5nIGEgc2luZ2xlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRRU1AgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIG5hbWUuICovXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogUXVlcnkgU3RyaW5nIGRlZmluZXMgb25lIHNlZ2VtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLiAqL1xyXG5cdHNlZ21lbnQ6IElQYXJzZWRTZWdtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcnNlZFNlZ21lbnQgaW50ZXJmYWNlIGRlZmluZXMgYSBzaW5nbGUgc2VnbWVudCBpbiBhIFVSTCBwYXR0ZXJuIHRoYXQgY2FuIGJlIG1hdGNoZWQgdG9cclxuICogb25lIG9yIG1vcmUgcGFydHMgb2YgYW4gYWN0dWFsIFVSTC4gRWFjaCBzZWdtZW50IGNhbiBoYXZlIHplcm8gb3IgbW9yZSBmaWVsZHMgZGVmaW5lZCBpbiBpdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlZFNlZ21lbnQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBpcyBvcHRpb25hbCAqL1xyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGNhbiBiZSByZXBlYXRlZCBtdXRpcGxlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBib3RoXHJcblx0ICogb3B0aW9uYWwgYW5kIG11bHRpIGNhbiBiZSByZXBlYXRlZCB6ZXJvIG9yIG1vcmUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIG5vdCBvcHRpb25hbCBidXRcclxuXHQgKiBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgb25lIG9yIG1vcmUgdGltZXMuXHJcblx0ICovXHJcblx0aXNNdWx0aTogYm9vbGVhbjtcclxuXHJcblx0LyoqIEFycmF5IG9mIGZpZWxkcyBkZWZpbmVkIGluIHRoaXMgc2VnbWVudC4gKi9cclxuXHRmaWVsZHM6IElQYXJzZWRGaWVsZFtdO1xyXG5cclxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzZWdtZW50J3MgbWF0Y2ggcGF0dGVybi5cclxuXHRyZWdFeHA6IFJlZ0V4cDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJzZWRGaWVsZCBpbnRlcmZhY2UgZGVmaW5lcyBhIHNpbmdsZSBmaWVsZCB3aXRoaW4gYSBzZWdtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkRmllbGQgZXh0ZW5kcyBJUGFyc2VkVG9rZW5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgaXMgb3B0aW9uYWwgKi9cclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgZmllbGQgKi9cclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBGaWVsZCBmb3JtYXQgKi9cclxuXHRmb3JtYXQ6IEZpZWxkRm9ybWF0O1xyXG5cclxuXHQvKiogT3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgZmllbGQgKi9cclxuXHRkZWZhdWx0VmFsdWU/OiBGaWVsZFZhbHVlVHlwZTtcclxuXHJcblx0Ly8gLyoqIFJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcgZGVzY3JpYmluZyB0aGUgbWF0Y2hpbmcgcGF0dGVybiBmb3IgdGhlIGZpZWxkICovXHJcblx0Ly8gbWF0Y2hQYXR0ZXJuOiBJUGFyc2VkUmVnRXhwO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmllbGQgdmFsdWUgaXMgYW4gYXJyYXkuIFRoaXMgaXMgdHJ1ZSBmb3IgZmllbGRzIHRoYXQgY2FuIGFwcGVhclxyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBVUkwgcGFydC5cclxuXHRpc0FycmF5OiBib29sZWFuO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNhcHR1cmluZyBncm91cCBjb3JyZXNwb25kaW5nIHRvIHRoZSBmaWVsZCB3aXRoaW4gdGhlXHJcblx0Ly8gc2VnbWVudC5cclxuXHRpbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRmllbGRGb3JtYXQgY2xhc3MgZGVmaW5lcyBwb3NzaWJsZSBmaWVsZCBmb3JtYXRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRmllbGRGb3JtYXRcclxue1xyXG5cdC8qKiBGaWVsZCB2YWx1ZSBjYW4gYmUgYXJiaXRyYXJ5IHN0cmluZyAqL1xyXG5cdFN0cmluZyxcclxuXHJcblx0LyoqIEZpZWxkIHZhbHVlIG11c3QgYmUgY29udmVydGFibGUgdG8gYW4gaW50ZWdlciBudW1iZXIgKi9cclxuXHRJbnRlZ2VyLFxyXG5cclxuXHQvKiogRmllbGQgdmFsdWUgbXVzdCBiZSBjb252ZXJ0YWJsZSB0byBhIHJlYWwgbnVtYmVyICovXHJcblx0RmxvYXQsXHJcblxyXG5cdC8qKiBGaWVsZCB2YWx1ZSBtdXN0IGJlIGNvbnZlcnRhYmxlIHRvIGEgQm9vbGVhbiBudW1iZXIgKi9cclxuXHRCb29sZWFuLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGVycm9yIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHBhcnNpbmcgb2ZcclxuICogYSBVUkwgcGF0dGVybi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Jcclxue1xyXG5cdC8qKiBJbmRleCBpbiB0aGUgcGF0dGVybiBzdHJpbmcgYXQgd2hpY2ggdGhlZXJyb3Igb2NjdXJyZWQuICovXHJcblx0cG9zOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFN1cHBvcnRlZCBwcmltaXRpdmUgdHlwZXMgb2YgZmllbGQgdmFsdWVzICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUZpZWxkVmFsdWVUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxuXHJcbi8qKiBUeXBlcyBvZiBmaWVsZHMgd2l0aCBtdWx0aXBsZSB2YWx1ZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlGaWVsZFZhbHVlVHlwZSA9IFNpbmdsZUZpZWxkVmFsdWVUeXBlW107XHJcblxyXG4vKiogRmllbGQgdmFsdWUgdHlwZSwgd2hpY2ggY2FuIGJlIGVpdGhlciBzaW5nZSB2YWx1ZSBvciBtdWx0aXBsZSB2YWx1ZSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEZpZWxkVmFsdWVUeXBlID0gU2luZ2xlRmllbGRWYWx1ZVR5cGUgfCBNdWx0aUZpZWxkVmFsdWVUeXBlO1xyXG5cclxuLyoqIE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgd2hvc2UgbmFtZXMgYXJlIGZpZWxkIG5hbWVzIGFuZCB2YWx1ZXMgYXJlIGZpZWxkIHZhbHVlcy4gKi9cclxuZXhwb3J0IHR5cGUgRmllbGRCYWcgPSB7IFtQOnN0cmluZ106IEZpZWxkVmFsdWVUeXBlIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVVybFBhdHRlcm5NYXRjaFJlc3VsdCBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgcmVzdWx0IG9mIG1hdGNoaW5nIGFuIGFjdHVhbCBVUkwgYWdhaW5zdFxyXG4gKiB0aGUgVVJMIHBhdHRlcm4uIFRoZSByZXN1bHQgY29udGFpbnMgdmFsdWVzIG9mIG5hbWVkIGFuZCBpbmRleGVkIGZpZWxkcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBtYXRjaCB3YXMgc3VjY2Vzc3VsICovXHJcblx0c3VjY2VzczogYm9vbGVhbjtcclxuXHJcblx0LyoqIFBhcnNlZCBhY3R1YWwgVVJMICovXHJcblx0cGFyc2VkVVJMOiBJUGFyc2VkQWN0dWFsVVJMO1xyXG5cclxuXHQvKiogRXJyb3IgbWVzc2FnZXMgaW4gY2FzZSB0aGUgbWF0Y2ggd2FzIG5vdCBzdWNjZXNzZnVsICovXHJcblx0ZXJyb3JzPzogc3RyaW5nW107XHJcblxyXG5cdC8qKiBGaWVsZCBuYW1lcyBhbmQgdmFsdWVzICovXHJcblx0ZmllbGRzPzogRmllbGRCYWc7XHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYWN0dWFsIGZyb20gXCIuL2FjdHVhbFwiO1xyXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCAqIGFzIG1hdGNoZXIgZnJvbSBcIi4vbWF0Y2hlclwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUGFyc2VzIHRoZSBnaXZlbiBVUkwgXHJcbiAqIEBwYXJhbSBzIFVSTCBzdHJpbmcgdG8gYmUgcGFyc2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVVJMKCBzOiBzdHJpbmcpOiBJUGFyc2VkQWN0dWFsVVJMXHJcbntcclxuXHRyZXR1cm4gYWN0dWFsLnBhcnNlVVJMKCBzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gVVJMIHBhdHRlcm5cclxuICogQHBhcmFtIHMgVVJMIHBhdHRlcm4gc3RyaW5nIHRvIGJlIHBhcnNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVybFBhdHRlcm4oIHM6IHN0cmluZyk6IElQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHRyZXR1cm4gcGFyc2VyLnBhcnNlUGF0dGVybiggcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXRjaGVzIHRoZSBnaXZlbiBVUkwgYWdhaW5zdCBVUkwgcGF0dGVybiBzdHJpbmcuXHJcbiAqIEBwYXJhbSB1cmwgRWl0aGVyIHVucGFyc2VkIFVSTCBzdHJpbmcgb3IgW1tJUGFyc2VkQWN0dWFsVVJMXV0gb2JqZWN0XHJcbiAqIEBwYXJhbSBwYXR0ZXJuIEVpdGhlciB1bnBhcnNlZCBVUkwgcGF0dGVybiBzdHJpbmcgb3IgW1tJUGFyc2VkVXJsUGF0dGVybl1dIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKCB1cmw6IHN0cmluZyB8IElQYXJzZWRBY3R1YWxVUkwsIHBhdHRlcm46IHN0cmluZyB8IElQYXJzZWRVcmxQYXR0ZXJuKTogSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0cmV0dXJuIG1hdGNoZXIubWF0Y2goIHVybCwgcGF0dGVybik7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL2FwaVwiXHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIFVSTCBhZ2FpbnN0IFVSTCBwYXR0ZXJuIHN0cmluZy5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKCB1cmw6IHN0cmluZyB8IGFwaS5JUGFyc2VkQWN0dWFsVVJMLCBwYXR0ZXJuOiBzdHJpbmcgfCBhcGkuSVBhcnNlZFVybFBhdHRlcm4pOiBhcGkuSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0aWYgKCF1cmwpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiVVJMIGNhbm5vdCBiZSBudWxsIG9yIGVtcHR5IHN0cmluZ1wiKTtcclxuXHRpZiAoIXBhdHRlcm4pXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiUGF0dGVybiBjYW5ub3QgYmUgbnVsbCBvciBlbXB0eSBzdHJpbmdcIik7XHJcblxyXG5cdGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKVxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCBhcGkucGFyc2VVUkwoIHVybCksIGFwaS5wYXJzZVVybFBhdHRlcm4oIHBhdHRlcm4pKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG1hdGNoUGFyc2VkKCBhcGkucGFyc2VVUkwoIHVybCksIHBhdHRlcm4pO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIHVybCwgYXBpLnBhcnNlVXJsUGF0dGVybiggcGF0dGVybikpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbWF0Y2hQYXJzZWQoIHVybCwgcGF0dGVybik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIFVSTCBhZ2FpbnN0IGFscmVhZHkgcGFyc2VkIFVSTCBwYXR0ZXJuLlxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQYXJzZWQoIHBhcnNlZFVSTDogYXBpLklQYXJzZWRBY3R1YWxVUkwsIHBhcnNlZFBhdHRlcm46IGFwaS5JUGFyc2VkVXJsUGF0dGVybik6IGFwaS5JVXJsUGF0dGVybk1hdGNoUmVzdWx0XHJcbntcclxuXHRpZiAoIXBhcnNlZFVSTClcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJVUkwgY2Fubm90IGJlIG51bGxcIik7XHJcblx0aWYgKCFwYXJzZWRQYXR0ZXJuKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcInBhcnNlZFBhdHRlcm4gY2Fubm90IGJlIG51bGxcIik7XHJcblxyXG5cdC8vIHByZXBhcmUgb2JqZWN0IGZvciBtYXRjaCByZXN1bHRcclxuXHRsZXQgbWF0Y2hSZXN1bHQgPSBuZXcgVXJsUGF0dGVybk1hdGNoUmVzdWx0KCk7XHJcblx0bWF0Y2hSZXN1bHQucGFyc2VkVVJMID0gcGFyc2VkVVJMO1xyXG5cdG1hdGNoUmVzdWx0LmZpZWxkcyA9IHt9O1xyXG5cdGxldCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdC8vIGNvbXBhcmUgcGFydCBieSBwYXJ0XHJcblx0XHRsZXQgZXJyb3IgPSBtYXRjaFNpbmdsZVNlZ21lbnQoIGFwaS5FVXJsUGFydC5Qcm90b2NvbCwgcGFyc2VkVVJMLnByb3RvY29sLFxyXG5cdFx0XHQgXHRcdFx0cGFyc2VkUGF0dGVybi5wcm90b2NvbCA/IHBhcnNlZFBhdHRlcm4ucHJvdG9jb2wuc2VnbWVudCA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaE11bHRpcGxlU2VnbWVudHMoIGFwaS5FVXJsUGFydC5Ib3N0bmFtZSwgcGFyc2VkVVJMLmhvc3RuYW1lLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWRQYXR0ZXJuLmhvc3RuYW1lID8gcGFyc2VkUGF0dGVybi5ob3N0bmFtZS5zZWdtZW50cyA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaFNpbmdsZVNlZ21lbnQoIGFwaS5FVXJsUGFydC5Qb3J0LCBwYXJzZWRVUkwucG9ydCxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5wb3J0ID8gcGFyc2VkUGF0dGVybi5wb3J0LnNlZ21lbnQgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cclxuXHRcdGVycm9yID0gbWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhcGkuRVVybFBhcnQuUGF0aCwgcGFyc2VkVVJMLnBhdGgsXHJcblx0XHRcdFx0XHRcdHBhcnNlZFBhdHRlcm4ucGF0aCA/IHBhcnNlZFBhdHRlcm4ucGF0aC5zZWdtZW50cyA6IG51bGwsIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaFF1ZXJ5U3RyaW5nKCBwYXJzZWRVUkwucXVlcnksIHBhcnNlZFBhdHRlcm4ucXVlcnksIG1hdGNoUmVzdWx0LmZpZWxkcyk7XHJcblx0XHRpZiAoZXJyb3IpXHJcblx0XHRcdGVycm9ycy5wdXNoKCBlcnJvcik7XHJcblxyXG5cdFx0ZXJyb3IgPSBtYXRjaFNpbmdsZVNlZ21lbnQoIGFwaS5FVXJsUGFydC5IYXNoLCBwYXJzZWRVUkwuaGFzaCxcclxuXHRcdFx0XHRcdFx0cGFyc2VkUGF0dGVybi5oYXNoID8gcGFyc2VkUGF0dGVybi5oYXNoLnNlZ21lbnQgOiBudWxsLCBtYXRjaFJlc3VsdC5maWVsZHMpO1xyXG5cdFx0aWYgKGVycm9yKVxyXG5cdFx0XHRlcnJvcnMucHVzaCggZXJyb3IpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGVycm9ycy5wdXNoKCBlcnIubWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB3ZSBoYXZlIGVycm9ycywgcHV0IHRoZW0gaW50byB0aGUgcmVzdWx0IG9iamVjdFxyXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMClcclxuXHRcdG1hdGNoUmVzdWx0LmVycm9ycyA9IGVycm9ycztcclxuXHJcblx0cmV0dXJuIG1hdGNoUmVzdWx0O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIHN0cmluZyBhZ2FpbnN0IHRoZSBnaXZlbiBjb21waWxlZCBzZWdtZW50LiBGaWVsZHMgd2lsbCBiZSBhZGRlZFxyXG4vLyB0byB0aGUgZ2l2ZW4gcmVzdWx0IG9iamVjdC5cclxuZnVuY3Rpb24gbWF0Y2hTaW5nbGVTZWdtZW50KCB1cmxQYXJ0OiBhcGkuRVVybFBhcnQsIGFjdHVhbFNlZ21lbnQ6IHN0cmluZyB8IG51bWJlciwgcGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50LFxyXG5cdFx0XHRcdCBmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdGlmICh0eXBlb2YgYWN0dWFsU2VnbWVudCA9PT0gXCJudW1iZXJcIilcclxuXHRcdGFjdHVhbFNlZ21lbnQgPSBhY3R1YWxTZWdtZW50LnRvU3RyaW5nKCk7XHJcblxyXG5cdC8vIGlmIGNvbXBpbGVkIHNlZ21lbnQgaXMgTk9UIHByb3ZpZGVkLCB0aGVuIGFjdHVhbCBzZWdtZW50IG11c3QgYmUgZW1wdHlcclxuXHRpZiAoIXBhcnNlZFNlZ21lbnQpXHJcblx0e1xyXG5cdFx0aWYgKGFjdHVhbFNlZ21lbnQpXHJcblx0XHRcdHJldHVybiBgVVJMIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgY29udGFpbnMgc2VnbWVudCAnJHthY3R1YWxTZWdtZW50fScgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBwYXR0ZXJuYDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBpZiBhY3R1YWwgc2VnbWVudCBpcyBlbXB0eSBhbmQgY29tcGlsZWQgc2VnbWVudCBpcyBtYW5kYXRvcnksIHRoZXJlIGlzIG5vIG1hdGNoOyBpZiBzdHJpbmdcclxuXHQvLyBpcyBlbXB0eSBhbmQgY29tcGlsZWQgc2VnbWVudCBpcyBvcHRpb25hbCwgdGhlcmUgaXMgbWF0Y2g7XHJcblx0aWYgKCFhY3R1YWxTZWdtZW50KVxyXG5cdHtcclxuXHRcdGlmIChwYXJzZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIGRvZXNuJ3QgaGF2ZSBhIHNlZ21lbnQgY29ycmVzcG9uZGluZyBgICtcclxuXHRcdFx0XHRcdGB0byBhIG1hbmRhdG9yeSBwYXR0ZXJuIHNlZ21lbnQgJyR7cGFyc2VkU2VnbWVudC50b2tlblN0aW5nfSdgO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRyeU1hdGNoU2luZ2xlU2VnbWVudCggYWN0dWFsU2VnbWVudCwgcGFyc2VkU2VnbWVudCwgZmllbGRzKVxyXG5cdFx0PyBudWxsXHJcblx0XHQ6IGBVUkwgc2VnbWVudCAnJHthY3R1YWxTZWdtZW50fScgaW4gcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyBkb2Vzbid0IG1hdGNoIGAgK1xyXG5cdFx0XHRgcGF0dGVybiBzZWdtZW50ICcke3BhcnNlZFNlZ21lbnQudG9rZW5TdGluZ30nYDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUcmllcyB0byBtYXRjaCBhY3R1YWwgc2VnbWVudCB0byB0aGUgY29tcGlsZWQgc2VnbWVudC4gSWYgdGhlcmUgaXMgYSBtYWN0aCwgcmV0dXJucyBhIG5vbi1udWxsXHJcbi8vIG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcyAoaWYgbm8gZmllbGRzIGZvdW5kLCByZXR1cm5zIGFuIGVtcHR5IG9iamVjdCkuIElmIHRoZXJlIGlzIG5vIG1hdGNoXHJcbi8vIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gdHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50OiBzdHJpbmcsIHBhcnNlZFNlZ21lbnQ6IGFwaS5JUGFyc2VkU2VnbWVudCxcclxuXHRmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IGJvb2xlYW5cclxue1xyXG5cdC8vIHBlcmZvcm0gcmVndWxhciBleHByZXNzaW9uIG1hdGNoIC0gbm90ZSB0aGF0IHRoZSBtYXRjaGluZyBwYXJ0IChpbmRleCAwIG9mIHRoZSByZXN1bHQpIHNob3VsZFxyXG5cdC8vIG1hdGNoIG91ciBzdHJpbmcgZXhhY3RseSBzbyB0aGF0IG5vIGV4dHJhIGNoYXJhY3RlcnMgYXJlIGZvdW5kIGJlZm9yZSBvciBhZnRlciB0aGUgbWF0Y2guXHJcblx0bGV0IGV4ZWNSZXN1bHQgPSBwYXJzZWRTZWdtZW50LnJlZ0V4cC5leGVjKCBhY3R1YWxTZWdtZW50KTtcclxuXHRpZiAoIWV4ZWNSZXN1bHQgfHwgZXhlY1Jlc3VsdFswXSAhPT0gYWN0dWFsU2VnbWVudClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0Ly8gY2hlY2sgd2hldGhlciB3ZSBoYXZlIGFueSBmaWVsZHNcclxuXHRmb3IoIGxldCBwYXJzZWRGaWVsZCBvZiBwYXJzZWRTZWdtZW50LmZpZWxkcylcclxuXHR7XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHJlZ3VsYXIgZXhwcmVzc2lvbiByZXN1bHQgaGFzIHRoaXMgaW5kZXggYW5kIGdldCB0aGUgdmFsdWVcclxuXHRcdGlmIChwYXJzZWRGaWVsZC5pbmRleCA+PSBleGVjUmVzdWx0Lmxlbmd0aClcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihgQlVHOiBGaWVsZCBpbmRleCBub3QgZm91bmQgaW4gcGF0dGVyJ3MgcmVndWxhciBleHByZXNzaW9uIGV4ZWN1dGlvbiByZXN1bHRgKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB2YWx1ZSA9IGNvbnZlcnRGaWVsZFZhbHVlKCBwYXJzZWRGaWVsZCwgZXhlY1Jlc3VsdFtwYXJzZWRGaWVsZC5pbmRleF0pO1xyXG5cdFx0aWYgKCFwYXJzZWRGaWVsZC5pc0FycmF5KVxyXG5cdFx0XHRmaWVsZHNbcGFyc2VkRmllbGQubmFtZV0gPSB2YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGFyciA9IGZpZWxkc1twYXJzZWRGaWVsZC5uYW1lXSBhcyBhcGkuTXVsdGlGaWVsZFZhbHVlVHlwZTtcclxuXHRcdFx0aWYgKGFyciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXJyID0gW107XHJcblx0XHRcdFx0ZmllbGRzW3BhcnNlZEZpZWxkLm5hbWVdID0gYXJyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhcnIucHVzaCggdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWF0Y2hlcyB0aGUgZ2l2ZW4gc3RyaW5nIGFycmF5IGFnYWluc3QgdGhlIGdpdmVuIGNvbXBpbGVkIHNlZ21lbnQgYXJyYXkuIEZpZWxkcyB3aWxsIGJlIGFkZGVkXHJcbi8vIHRvIHRoZSBnaXZlbiByZXN1bHQgb2JqZWN0LlxyXG5mdW5jdGlvbiBtYXRjaE11bHRpcGxlU2VnbWVudHMoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgYWN0dWFsU2VnbWVudHM6IHN0cmluZ1tdLCBwYXJzZWRTZWdtZW50czogYXBpLklQYXJzZWRTZWdtZW50W10sXHJcblx0ZmllbGRzOiBhcGkuRmllbGRCYWcpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRpZiAoIWFjdHVhbFNlZ21lbnRzICYmICFwYXJzZWRTZWdtZW50cylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKCFhY3R1YWxTZWdtZW50cylcclxuXHRcdHJldHVybiBgVVJMIGRvZXNuJ3QgaGF2ZSBwYXJ0ICcke2FwaS5FVXJsUGFydFt1cmxQYXJ0XX0nIHRoYXQgZXhpc3RzIGluIHRoZSBwYXR0ZXJuYDtcclxuXHRlbHNlIGlmICghcGFyc2VkU2VnbWVudHMpXHJcblx0XHRyZXR1cm4gYFVSTCBoYXMgcGFydCAnJHthcGkuRVVybFBhcnRbdXJsUGFydF19JyB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHBhdHRlcm5gO1xyXG5cclxuXHQvLyBGb3IgZWFjaCBwYXJzZWQgc2VnbWVudCB3ZSBjcmVhdGUgYSBjb21waWxlZCBzZWdtZW50IGV4Y2VwdCBpbiBvbmUgY2FzZTogZm9yIFwib25lIG9yIG1vcmVcIlxyXG5cdC8vIHBhcnNlZCBzZWdtZW50cyB3ZSBjcmVhdGUgdHdvIGNvbXBpbGVkIHNlZ21lbnQgLSBvbmUgc2luZ2xlIG1hbmRhdG9yeSBhbmQgb25lIG11bHRpIGFuZFxyXG5cdC8vIG9wdGlvbmFsLlxyXG5cdGxldCBjb21waWxlZFNlZ21lbnRzOiBDb21waWxlZFNlZ21lbnRbXSA9IFtdO1xyXG5cdGZvciggbGV0IHBhcnNlZFNlZ21lbnQgb2YgcGFyc2VkU2VnbWVudHMpXHJcblx0e1xyXG5cdFx0aWYgKHBhcnNlZFNlZ21lbnQuaXNNdWx0aSAmJiAhcGFyc2VkU2VnbWVudC5pc09wdGlvbmFsKVxyXG5cdFx0e1xyXG5cdFx0XHRjb21waWxlZFNlZ21lbnRzLnB1c2goIG5ldyBDb21waWxlZFNlZ21lbnQoIHBhcnNlZFNlZ21lbnQsIGZhbHNlKSk7XHJcblx0XHRcdGNvbXBpbGVkU2VnbWVudHMucHVzaCggbmV3IENvbXBpbGVkU2VnbWVudCggcGFyc2VkU2VnbWVudCwgdHJ1ZSkpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb21waWxlZFNlZ21lbnRzLnB1c2goIG5ldyBDb21waWxlZFNlZ21lbnQoIHBhcnNlZFNlZ21lbnQsIHBhcnNlZFNlZ21lbnQuaXNPcHRpb25hbCkpO1xyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCByZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiB0aGUgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzIGlmIHRoZXJlIGlzIGEgbWF0Y2hcclxuXHQvLyBvciBudWxsIGlmIHRoZXJlIGlzIG5vdC5cclxuXHRpZiAodHJ5TWF0Y2hNdWx0aXBsZVNlZ21lbnRzKCBhY3R1YWxTZWdtZW50cywgMCwgY29tcGlsZWRTZWdtZW50cywgMCwgZmllbGRzKSlcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBgVVJMIHBhcnQgJyR7YXBpLkVVcmxQYXJ0W3VybFBhcnRdfScgZG9lc24ndCBtYXRjaCB0aGUgcGF0dGVybmA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHJpZXMgdG8gbWF0Y2ggYWN0dWFsIHNlZ21lbnRzIHRvIHRoZSBwYXR0ZXJuIHN0YXJ0aW5nIGZyb20gdGhlIGdpdmVuIGluZGV4IGluIGVhY2ggYXJyYXkuIElmXHJcbi8vIHRoZXJlIGlzIGEgbWFjdGgsIHJldHVybnMgYSBub24tbnVsbCBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMgKGlmIG5vIGZpZWxkcyBmb3VuZCwgcmV0dXJucyBhblxyXG4vLyBlbXB0eSBvYmplY3QpLiBJZiB0aGVyZSBpcyBubyBtYXRjaCByZXR1cm5zIG51bGwuXHJcbmZ1bmN0aW9uIHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cyggYWN0dWFsU2VnbWVudHM6IHN0cmluZ1tdLCBhY3R1YWxTdGFydEluZGV4OiBudW1iZXIsXHJcblx0XHRcdFx0Y29tcGlsZWRTZWdtZW50czogQ29tcGlsZWRTZWdtZW50W10sIGNvbXBpbGVkU3RhcnRJbmRleDogbnVtYmVyLFxyXG5cdFx0XHRcdGZpZWxkczogYXBpLkZpZWxkQmFnKTogYm9vbGVhblxyXG57XHJcblx0Ly8gbG9vcCBvdmVyIGNvbXBpbGVkIHNlZ21lbnRzLiBJZiB0aGUgc2VnbWVudCBpcyBtYW5kYXRvcnksIHdlIGNvbXBhcmUgaXQgdG8gdGhlIGFjdHVhbFxyXG5cdC8vIHNlZ21lbnQgYW5kIGlmIHRoZXJlIGlzIG5vIG1hdGNoLCB0aGUgbWF0Y2hpbmcgZmFpbHMuIElmIHRoZSBzZWdtZW50IGlzIG9wdGlvbmFsLCB3ZSBjYWxsXHJcblx0Ly8gdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBzdGFydGluZyBmcm9tIHRoZSBuZXh0IGNvbXBpbGVkIHNlZ21lbnQuIElmIHRoaXMgY2FsbCByZXR1cm5zXHJcblx0Ly8gbnVsbCAobm8gbWF0Y2gpLCB0aGVuIHdlIG1hcCB0aGUgYWN0dWFsIHNlZ21lbnQgdG8gdGhlIGNvbXBpbGVkIHNlZ21lbnQgYW5kIGFkdmFuY2UgdGhlXHJcblx0Ly8gaW5kaWNlcy5cclxuXHRsZXQgYWN0dWFsQ3VyckluZGV4ID0gYWN0dWFsU3RhcnRJbmRleDtcclxuXHRsZXQgY29tcGlsZWRDdXJySW5kZXggPSBjb21waWxlZFN0YXJ0SW5kZXg7XHJcblx0d2hpbGUoIGNvbXBpbGVkQ3VyckluZGV4IDwgY29tcGlsZWRTZWdtZW50cy5sZW5ndGggJiYgYWN0dWFsQ3VyckluZGV4IDwgYWN0dWFsU2VnbWVudHMubGVuZ3RoKVxyXG5cdHtcclxuXHRcdGxldCBjb21waWxlZFNlZ21lbnQgPSBjb21waWxlZFNlZ21lbnRzW2NvbXBpbGVkQ3VyckluZGV4XTtcclxuXHRcdGxldCBhY3R1YWxTZWdtZW50ID0gYWN0dWFsU2VnbWVudHNbYWN0dWFsQ3VyckluZGV4XTtcclxuXHRcdGlmICghY29tcGlsZWRTZWdtZW50LmlzT3B0aW9uYWwpXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbXBhcmUgbWFuZGF0b3J5IHNlZ21lbnQgd2l0aCB0aGUgYWN0dWFsIG9uZVxyXG5cdFx0XHRpZiAodHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBhY3R1YWxTZWdtZW50LCBjb21waWxlZFNlZ21lbnQucGFyc2VkU2VnbWVudCwgZmllbGRzKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbXBpbGVkQ3VyckluZGV4Kys7XHJcblx0XHRcdFx0YWN0dWFsQ3VyckluZGV4Kys7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIHBhc3NpbmcgdGhlIG5leHQgY29tcGlsZWQgc2VnbWVudCBpbmRleFxyXG5cdFx0XHRsZXQgdGVtcEZpZWxkczogYXBpLkZpZWxkQmFnID0ge31cclxuXHRcdFx0aWYgKHRyeU1hdGNoTXVsdGlwbGVTZWdtZW50cyggYWN0dWFsU2VnbWVudHMsIGFjdHVhbEN1cnJJbmRleCxcclxuXHRcdFx0XHRjb21waWxlZFNlZ21lbnRzLCBjb21waWxlZEN1cnJJbmRleCArIDEsIHRlbXBGaWVsZHMpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdGhlcmUgaXMgYSBtYXRjaFxyXG5cdFx0XHRcdG1lcmdlRmllbGRzKCBmaWVsZHMsIHRlbXBGaWVsZHMpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNsZWFyIHRlbXBvcmFyeSBmaWVsZHMgdGhhdCBtaWdodCBoYXZlIGJlZW4gZmlsbGVkIGJ5IHRoZSBwcmV2aW91cyAoZmFpbGVkKVxyXG5cdFx0XHRcdC8vIGNhbGwgdG8gdHJ5TWF0Y2hNdWx0aXBsZVNlZ21lbnRzLlxyXG5cdFx0XHRcdHRlbXBGaWVsZHMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly8gY29tcGFyZSB0aGlzIHNlZ21lbnQgd2l0aCB0aGUgYWN0dWFsIG9uZVxyXG5cdFx0XHRcdGlmICh0cnlNYXRjaFNpbmdsZVNlZ21lbnQoIGFjdHVhbFNlZ21lbnQsIGNvbXBpbGVkU2VnbWVudC5wYXJzZWRTZWdtZW50LCB0ZW1wRmllbGRzKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjb3B5IGZpZWxkIHZhbHVlcyBhbmQgYWR2YW5jZSB0aGUgYWN0dWFsIGluZGV4XHJcblx0XHRcdFx0XHRtZXJnZUZpZWxkcyggZmllbGRzLCB0ZW1wRmllbGRzKTtcclxuXHRcdFx0XHRcdGFjdHVhbEN1cnJJbmRleCsrO1xyXG5cclxuXHRcdFx0XHRcdC8vIGFkdmFuY2UgdGhlIGNvbXBpbGVkIGluZGV4IG9ubHkgaWYgdGhpcyBmaWVsZCBpcyBhIHNpbmd1bGFyIG9uZVxyXG5cdFx0XHRcdFx0aWYgKCFjb21waWxlZFNlZ21lbnQucGFyc2VkU2VnbWVudC5pc011bHRpKVxyXG5cdFx0XHRcdFx0XHRjb21waWxlZEN1cnJJbmRleCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHdlIGFyZSBoZXJlIGlmIGVpdGhlciBjb21waWxlIHNlZ21lbnRzIG9yIGFjdHVhbCBzZWdtZW50cyBvciBib3RoIGFyZSBleGhvc3RlZC4gSWYgYm90aFxyXG5cdC8vIGFyZSBleGhvc3RlZCwgdGhlcmUgaXMgYSBtYXRjaC4gSWYgY29tcGlsZWQgYXJlIGV4aG9zdGVkIGJ1dCBhY3R1YWwgYXJlIG5vdCwgdGhlcmUgaXMgbm9cclxuXHQvLyBtYXRjaC4gSWYgYWN0dWFsIGFyZSBleGhvc3RlZCBidXQgY29tcGlsZWQgYXJlIG5vdCwgdGhlcmUgaXMgbWF0Y2ggb25seSBpZiBhbGwgdGhlXHJcblx0Ly8gcmVtYWluaW5nIGNvbXBpbGVkIHNlZ21lbnRzIGFyZSBvcHRpb25hbC5cclxuXHRpZiAoY29tcGlsZWRDdXJySW5kZXggPT09IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoICYmIGFjdHVhbEN1cnJJbmRleCA9PT0gYWN0dWFsU2VnbWVudHMubGVuZ3RoKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAoY29tcGlsZWRDdXJySW5kZXggPT09IGNvbXBpbGVkU2VnbWVudHMubGVuZ3RoKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gY29tcGlsZWRDdXJySW5kZXg7IGkgPCBjb21waWxlZFNlZ21lbnRzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29tcGlsZWRTZWdtZW50ID0gY29tcGlsZWRTZWdtZW50c1tpXTtcclxuXHRcdFx0aWYgKCFjb21waWxlZFNlZ21lbnQuaXNPcHRpb25hbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hdGNoZXMgdGhlIGdpdmVuIHN0cmluZyBvYmplY3QgYWdhaW5zdCB0aGUgZ2l2ZW4gY29tcGlsZWQgcXVlcnkgc3RyaW5nLiBGaWVsZHMgd2lsbCBiZSBhZGRlZFxyXG4vLyB0byB0aGUgZ2l2ZW4gcmVzdWx0IG9iamVjdC5cclxuZnVuY3Rpb24gbWF0Y2hRdWVyeVN0cmluZyggYWN0dWFsUXVlcnk6IHsgW1A6IHN0cmluZ106IHN0cmluZ1tdIH0sIHBhcnNlZFF1ZXJ5OiBhcGkuSVBhcnNlZFF1ZXJ5U3RyaW5nLFxyXG5cdFx0XHRcdCBmaWVsZHM6IGFwaS5GaWVsZEJhZyk6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdGlmICghcGFyc2VkUXVlcnkpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghYWN0dWFsUXVlcnkpXHJcblx0e1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKCBwYXJzZWRRdWVyeS5wYXJzZWRRU1BzKS5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gYFVSTCBkb2Vzbid0IGhhdmUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuYDtcclxuXHR9XHJcblxyXG5cdC8vIGdvIG92ZXIgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXIuIElmIHRoZXJlIGlzIGFueSBub24tb3B0aW9uYWxcclxuXHQvLyBwYXJhbWV0ZXIgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBhY3R1YWwgVVJMLCB3ZSBmYWlsIHRoZSBtYXRjaC5cclxuXHRmb3IoIGxldCBxc3BOYW1lIGluIHBhcnNlZFF1ZXJ5LnBhcnNlZFFTUHMpXHJcblx0e1xyXG5cdFx0aWYgKGFjdHVhbFF1ZXJ5W3FzcE5hbWVdID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBgVVJMIGRvZXNuJ3QgaGF2ZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyICcke3FzcE5hbWV9J2A7XHJcblx0fVxyXG5cclxuXHQvLyBnbyBvdmVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIGluIHRoZSBhY3R1YWwgVVJMXHJcblx0Zm9yKCBsZXQgcXNwTmFtZSBpbiBhY3R1YWxRdWVyeSlcclxuXHR7XHJcblx0XHQvLyBmaW5kIHRoaXMgbmFtZSBpbiB0aGUgcGF0dGVybi4gSWYgdGhlIHBhdHRlcm4gZG9lc24ndCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyIGFuZCB0aGVcclxuXHRcdC8vIHBhdHRlcm4gZG9lc24ndCBhbGxvdyBmb3IgZXh0cmEgcGFyYW1ldGVycywgdGhlbiB0aGVyZSBpcyBubyBtYXRjaC4gT3RoZXJ3aXNlLCB0aGlzXHJcblx0XHQvLyBwYXJhbWV0ZXIgaXMgc2ltcGx5IGlnbm9yZWQuXHJcblx0XHRsZXQgcGFyc2VkU2VnbWVudCA9IHBhcnNlZFF1ZXJ5LnBhcnNlZFFTUHNbcXNwTmFtZV0uc2VnbWVudDtcclxuXHRcdGlmICghcGFyc2VkU2VnbWVudClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFwYXJzZWRRdWVyeS5hbGxvd0V4dHJhUXVlcnlQYXJhbXMpXHJcblx0XHRcdFx0cmV0dXJuIGBVUkwgaGFzIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nIHRoYXQgaXMgbm90IHNwZWNpZmllZCBpbiB0aGUgcGF0dGVybmA7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGZvciBzaW5ndWxhciBzZWdtZW50IHRoZSBwYXJhbWV0ZXIgbXVzdCBiZSBwcmVzZW50IG9ubHkgb25jZVxyXG5cdFx0XHRsZXQgcXNwVmFsdWVzID0gYWN0dWFsUXVlcnlbcXNwTmFtZV07XHJcblx0XHRcdGlmICghcGFyc2VkU2VnbWVudC5pc011bHRpICYmIHFzcFZhbHVlcy5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdHJldHVybiBgVVJMIGhhcyBtdWx0aXBsZSB2YWx1ZXMgZm9yIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7cXNwTmFtZX0nIHdoaWxlIHBhdHRlcm4gZG9lc24ndCBzcGVjaWZ5IGl0IGFzIG11bHRpYDtcclxuXHJcblx0XHRcdGZvciggbGV0IHFzcFZhbHVlIG9mIHFzcFZhbHVlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghdHJ5TWF0Y2hTaW5nbGVTZWdtZW50KCBxc3BWYWx1ZSwgcGFyc2VkU2VnbWVudCwgZmllbGRzKSlcclxuXHRcdFx0XHRcdHJldHVybiBgVVJMJ3MgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3BOYW1lfScgZG9lc24ndCBtYXRjaCB0aGF0IHNwZWNpZmllZCBpbiB0aGUgcGF0dGVybmA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIE1lcmdlcyBmaWVsZCB2YWx1ZXMgZnJvbSB0aGUgc291cmNlIG9iamVjdCB0byB0aGUgdGFyZ2V0IG9uZS5cclxuZnVuY3Rpb24gbWVyZ2VGaWVsZHMoIHRhcmdldDogeyBbUDogc3RyaW5nXTogYXBpLkZpZWxkVmFsdWVUeXBlIH0sIHNvdXJjZTogeyBbUDogc3RyaW5nXTogYXBpLkZpZWxkVmFsdWVUeXBlIH0pOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBmaWVsZE5hbWUgaW4gc291cmNlKVxyXG5cdHtcclxuXHRcdGxldCBzb3VyY2VWYWwgPSBzb3VyY2VbZmllbGROYW1lXTtcclxuXHRcdGxldCB0YXJnZXRWYWwgPSB0YXJnZXRbZmllbGROYW1lXTtcclxuXHRcdGlmICh0YXJnZXRWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGFyZ2V0W2ZpZWxkTmFtZV0gPSBzb3VyY2VWYWw7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGJvdGggc291cmNlIGFuZCB0YXJnZXQgdmFsdWVzIG11c3QgYmUgYXJyYXlzXHJcblx0XHRcdGxldCBzb3VyY2VBcnIgPSBzb3VyY2VWYWwgYXMgYXBpLk11bHRpRmllbGRWYWx1ZVR5cGU7XHJcblx0XHRcdGxldCB0YXJnZXRBcnIgPSB0YXJnZXRWYWwgYXMgYXBpLk11bHRpRmllbGRWYWx1ZVR5cGU7XHJcblx0XHRcdGZvciggbGV0IHNvdXJjZUl0ZW0gb2Ygc291cmNlQXJyKVxyXG5cdFx0XHRcdHRhcmdldEFyci5wdXNoKCBzb3VyY2VJdGVtKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyBmaWVsZCB2YWx1ZSBjb252ZXJ0ZWQgdG8gdGhlIHJlcXVpcmVkIGZvcm1hdFxyXG5mdW5jdGlvbiBjb252ZXJ0RmllbGRWYWx1ZSggcGFyc2VkRmllbGQ6IGFwaS5JUGFyc2VkRmllbGQsIHN0cmluZ1ZhbHVlOiBzdHJpbmcpOiBhcGkuU2luZ2xlRmllbGRWYWx1ZVR5cGVcclxue1xyXG5cdGlmICghc3RyaW5nVmFsdWUpXHJcblx0XHRyZXR1cm4gcGFyc2VkRmllbGQuZGVmYXVsdFZhbHVlIGFzIGFwaS5TaW5nbGVGaWVsZFZhbHVlVHlwZTtcclxuXHJcblx0c3dpdGNoKCBwYXJzZWRGaWVsZC5mb3JtYXQpXHJcblx0e1xyXG5cdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuSW50ZWdlcjpcclxuXHRcdHtcclxuXHRcdFx0bGV0IHYgPSBOdW1iZXIoIHN0cmluZ1ZhbHVlKTtcclxuXHRcdFx0cmV0dXJuIGlzTmFOKHYpIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKHYpID8gcGFyc2VkRmllbGQuZGVmYXVsdFZhbHVlIGFzIG51bWJlciA6IHY7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBhcGkuRmllbGRGb3JtYXQuRmxvYXQ6XHJcblx0XHR7XHJcblx0XHRcdGxldCB2ID0gTnVtYmVyKCBzdHJpbmdWYWx1ZSk7XHJcblx0XHRcdHJldHVybiBpc05hTih2KSA/IHBhcnNlZEZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBudW1iZXIgOiB2O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkJvb2xlYW46XHJcblx0XHR7XHJcblx0XHRcdGxldCB2ID0gc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKHYgPT09IFwidHJ1ZVwiIHx8IHYgPT09IFwidFwiIHx8IHYgPT09IFwieWVzXCIgfHwgdiA9PT0gXCJ5XCIgfHwgdiA9PT0gXCIxXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHYgPT09IFwiZmFsc2VcIiB8fCB2ID09PSBcImZcIiB8fCB2ID09PSBcIm5vXCIgfHwgdiA9PT0gXCJuXCIgfHwgdiA9PT0gXCIwXCIpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlZEZpZWxkLmRlZmF1bHRWYWx1ZSBhcyBib29sZWFuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdHJpbmdWYWx1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDb21waWxlZFNlZ21lbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBzaG91bGQgYmUgY29tcGFyZWQgdG8gYVxyXG4vLyBzZWdtZW50IGZyb20gdGhlIGFjdHVhbCBVUkwgcGFydC4gQ29tcGlsZWQgc2VnbWVudCBjb250YWlucyB0aGUgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIGZsYWdcclxuLy8gaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgc2VnbWVudCBpcyBvcHRpb25hbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIENvbXBpbGVkU2VnbWVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwYXJzZWQgc2VnbWVudCBvYmplY3QuXHJcblx0cGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHNlZ21lbnQgaXMgb3B0aW9uYWwuIEZvciBlYWNoIFwib25lLW9yLW1vcmVcIiBwYXJzZWQgc2VnZW1lbnRzXHJcblx0Ly8gd2UgY3JlYXRlIHR3byBjb21waWxlZCBzZWdtZW50czogdGhlIGZpcnN0IGlzIG1hbmRhdG9yeSBhbmQgdGhlIHNlY29uZCBpcyBvcHRpb25hbC4gVGhhdCdzXHJcblx0Ly8gd2h5IHdlIGhhdmUgdGhpZSBpc09wdGlvbmFsIGZsYWcgaGVyZS5cclxuXHRpc09wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyc2VkU2VnbWVudDogYXBpLklQYXJzZWRTZWdtZW50LCBpc09wdGlvbmFsOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHRoaXMucGFyc2VkU2VnbWVudCA9IHBhcnNlZFNlZ21lbnQ7XHJcblx0XHR0aGlzLmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFVybFBhdHRlcm5NYXRjaFJlc3VsdCBjbGFzcyBkZXNjcmliZXMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBhIFVSTCB0byBhIHBhdHRlcm4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBVcmxQYXR0ZXJuTWF0Y2hSZXN1bHQgaW1wbGVtZW50cyBhcGkuSVVybFBhdHRlcm5NYXRjaFJlc3VsdFxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBtYXRjaCB3YXMgc3VjY2Vzc3VsICovXHJcblx0cHVibGljIGdldCBzdWNjZXNzKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuZXJyb3JzIHx8IHRoaXMuZXJyb3JzLmxlbmd0aCA9PT0gMDsgfVxyXG5cclxuXHQvKiogUGFyc2VkIGFjdHVhbCBVUkwgKi9cclxuXHRwYXJzZWRVUkw6IGFwaS5JUGFyc2VkQWN0dWFsVVJMO1xyXG5cclxuXHQvKiogRXJyb3Igb2JqZWN0IGluIGNhc2UgdGhlIG1hdGNoIHdhcyBub3Qgc3VjY2Vzc2Z1bCAqL1xyXG5cdHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xyXG5cclxuXHQvKiogRmllbGQgbmFtZXMgYW5kIHZhbHVlcyAqL1xyXG5cdHB1YmxpYyBmaWVsZHM6IGFwaS5GaWVsZEJhZztcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW11cmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaVwiO1xyXG4iLCJpbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vYXBpXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBhcnNlcidzIGVudHJ5IGZ1bmN0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGF0dGVybiggcGF0dGVyblN0cmluZzogc3RyaW5nKTogYXBpLklQYXJzZWRVcmxQYXR0ZXJuXHJcbntcclxuXHQvLyBpbml0aWFsaXplIGdsb2JhbCB2YXJpYWJsZXNcclxuXHRnX3BhdHRlcm5TdHJpbmcgPSBwYXR0ZXJuU3RyaW5nO1xyXG5cdGdfcGF0dGVyblN0cmluZ0xlbmd0aCA9IDA7XHJcblx0Z19jdXJySW5kZXggPSAwO1xyXG5cdGdfY3VyckNoYXIgPSAnJztcclxuXHJcblx0aWYgKCFwYXR0ZXJuU3RyaW5nKVxyXG5cdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBcIlVSTCBwYXR0ZXJuIGNhbm5vdCBiZSBlbXB0eVwiKTtcclxuXHJcblx0Z19wYXR0ZXJuU3RyaW5nTGVuZ3RoID0gcGF0dGVyblN0cmluZy5sZW5ndGg7XHJcblx0Z19jdXJyQ2hhciA9IHBhdHRlcm5TdHJpbmdbMF07XHJcblxyXG5cdC8vIENyZWF0ZSB0aGUgdG9wLWxldmVsIHBhcnNpbmcgb2JqZWN0IGFuZCBydW4gdGhlIHBhcnNpbmcgcHJvY2Vzcy5cclxuXHRsZXQgcGFyc2VkUGF0dGVybiA9IG5ldyBQYXJzZWRVcmxQYXR0ZXJuKCk7XHJcblx0cGFyc2VkUGF0dGVybi5wYXJzZSgpO1xyXG5cdHJldHVybiBwYXJzZWRQYXR0ZXJuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbmUgXCJnbG9iYWxcIiB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSB0byBhbGwgb2JqZWN0cyBpbiB0aGlzIG1vZHVsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIFBhdHRlcm4gc3RyaW5nIGJlaW5nIHBhcnNlZFxyXG5sZXQgZ19wYXR0ZXJuU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4vLyBMZW5ndGggb2YgdGhlIHBhdHRlcm4gc3RyaW5nXHJcbmxldCBnX3BhdHRlcm5TdHJpbmdMZW5ndGg6IG51bWJlcjtcclxuXHJcbi8vIEluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgaW4gdGhlIHBhdHRlcm4gc3RyaW5nIHRoYXQgdGhlIHBhcnNlciBpcyBjdXJyZW50bHkgd29ya2luZyB3aXRoLlxyXG5sZXQgZ19jdXJySW5kZXg6IG51bWJlcjtcclxuXHJcbi8vIENoYXJhY3RlciBpbiB0aGUgcGF0dGVybiBzdHJpbmcgdW5kZXIgdGhlIGN1cnJlbnQgaW5kZXguXHJcbmxldCBnX2N1cnJDaGFyOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbmUgXCJnbG9iYWxcIiBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSB0byBhbGwgb2JqZWN0cyBpbiB0aGlzIG1vZHVsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIERldGVybWluZXMgaWYgd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLlxyXG5mdW5jdGlvbiBnX2lzRW5kKCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBnX2N1cnJJbmRleCA+PSBnX3BhdHRlcm5TdHJpbmdMZW5ndGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhyb3dzIGV4Y2VwdGlvbiBpZiB3ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uXHJcbmZ1bmN0aW9uIGdfY2hlY2tFbmQoIHJlYXNvbj86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdGlmIChnX2N1cnJJbmRleCA9PT0gZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoKVxyXG5cdHtcclxuXHRcdGxldCBtc2cgPSBcIlVuZXhwZWN0ZWQgZW5kIG9mIFVSTCBwYXR0ZXJuXCI7XHJcblx0XHRpZiAocmVhc29uKVxyXG5cdFx0XHRtc2cgKz0gXCI6IFwiICsgcmVhc29uO1xyXG5cdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBtc2cpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNb3ZlcyB0aGUgZ2l2ZW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuZnVuY3Rpb24gZ19tb3ZlKCBkOiBudW1iZXIgPSAxKTogYm9vbGVhblxyXG57XHJcblx0aWYgKGdfY3VyckluZGV4IDw9IGdfcGF0dGVyblN0cmluZ0xlbmd0aCAtIGQpXHJcblx0e1xyXG5cdFx0Z19jdXJySW5kZXggKz0gZDtcclxuXHRcdGdfY3VyckNoYXIgPSBnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRnX2N1cnJJbmRleCA9IGdfcGF0dGVyblN0cmluZ0xlbmd0aDtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgdG8gdGhlIGdpdmVuIHBvc2l0aW9uIGluIHRoZSBidWZmZXIuXHJcbmZ1bmN0aW9uIGdfbW92ZVRvKCBpOiBudW1iZXIpOiBib29sZWFuXHJcbntcclxuXHRnX2N1cnJJbmRleCA9IGk7XHJcblx0aWYgKGdfY3VyckluZGV4IDwgZ19wYXR0ZXJuU3RyaW5nTGVuZ3RoKVxyXG5cdHtcclxuXHRcdGdfY3VyckNoYXIgPSBnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFVybFBhdHRlcm4gY2xhc3MgaXMgdGhlIHRvcC1sZXZlbCBvYmplY3QgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIFVSTCBwYXJzaW5nLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkVXJsUGF0dGVybiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkVXJsUGF0dGVyblxyXG57XHJcblx0Ly8gT3JpZ2luYWwgcGF0dGVybiBzdHJpbmcgZm9yIHdoaWNoIHRoaXMgb2JqZWN0IHdhcyBjcmVhdGVkLlxyXG5cdHB1YmxpYyBwYXR0ZXJuU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdC8vIFByb3RvY29sIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcHJvdG9jb2woKTogYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUHJvdG9jb2xdIGFzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gSG9zdG5hbWUgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBob3N0bmFtZSgpOiBhcGkuSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0Lkhvc3RuYW1lXSBhcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0IH1cclxuXHJcblx0Ly8gUG9ydCBVUkwgcGFydC5cclxuXHRwdWJsaWMgZ2V0IHBvcnQoKTogYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG5cdFx0eyByZXR1cm4gdGhpcy5wYXJ0c1thcGkuRVVybFBhcnQuUG9ydF0gYXMgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBQYXRoIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgcGF0aCgpOiBhcGkuSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxuXHRcdHsgcmV0dXJuIHRoaXMucGFydHNbYXBpLkVVcmxQYXJ0LlBhdGhdIGFzIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgfVxyXG5cclxuXHQvLyBRdWVyeSBTdHJpbmcgVVJMIHBhcnQuXHJcblx0cHVibGljIGdldCBxdWVyeSgpOiBhcGkuSVBhcnNlZFF1ZXJ5U3RyaW5nXHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5RdWVyeV0gYXMgUGFyc2VkUXVlcnlTdHJpbmcgfVxyXG5cclxuXHQvLyBIYXNoIFVSTCBwYXJ0LlxyXG5cdHB1YmxpYyBnZXQgaGFzaCgpOiBhcGkuSVBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcblx0XHR7IHJldHVybiB0aGlzLnBhcnRzW2FwaS5FVXJsUGFydC5IYXNoXSBhcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydCB9XHJcblxyXG5cdC8vIEFycmF5IG9mIFVSTCBwYXJ0LiBJbmRleGVzIGFyZSB2YWx1ZXMgZnJvbSB0aGUgVXJsUGFydCBlbnVtZXJhdGlvbi5cclxuXHRwdWJsaWMgcGFydHM6IFBhcnNlZFVybFBhcnRbXTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5wYXR0ZXJuU3RyaW5nID0gZ19wYXR0ZXJuU3RyaW5nO1xyXG5cdFx0dGhpcy5wYXJ0cyA9IFtdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJzZXMgdGhlIGVudGlyZSBVUkwgcGF0dGVybiBwYXJ0IGJ5IHBhcnRcclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb2YgcGFyc2luZyBVUkwgcGFydHNcclxuXHRcdGZvciggbGV0IHBhcnQgPSB0aGlzLmZpbmRGaXJzdFVybFBhcnQoKTsgcGFydCAhPT0gbnVsbDsgcGFydCA9IHBhcnQuZ2V0TmV4dFVybFBhcnQoKSlcclxuXHRcdHtcclxuXHRcdFx0cGFydC5wYXJzZSgpO1xyXG5cdFx0XHR0aGlzLnBhcnRzW3BhcnQudXJsUGFydF0gPSBwYXJ0O1xyXG5cdFx0XHRpZiAoZ19pc0VuZCgpKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHRoZSBmaXJzdCBVUkwgcGFydCB0aGUgcGFyc2VyIHdpbGwgYmUgd29ya2luZyBvbi5cclxuXHRwcml2YXRlIGZpbmRGaXJzdFVybFBhcnQoKTogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSBcIi9cIilcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdfcGF0dGVyblN0cmluZ0xlbmd0aCA+IDEgJiYgZ19wYXR0ZXJuU3RyaW5nWzFdID09PSBcIi9cIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGdfbW92ZSgyKTtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhcnNlZEhvc3RuYW1lKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQYXJzZWRQYXRoKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGluZGV4ID0gZ19wYXR0ZXJuU3RyaW5nLmluZGV4T2YoIFwiOi8vXCIpO1xyXG5cdFx0XHRpZiAoaW5kZXggPiAwKVxyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkUHJvdG9jb2woKTtcclxuXHRcdFx0ZWxzZSBpZiAoaW5kZXggPCAwKVxyXG5cdFx0XHRcdHJldHVybiBuZXcgUGFyc2VkSG9zdG5hbWUoKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggXCJVUkwgcGF0dGVybiBjYW5ub3Qgc3RhcnQgZnJvbSAnOi8vJ1wiKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRUb2tlbiBpcyBhIGJhc2UgY2xhc3MgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBjb21tb24gdG8gYWxsIHBhcnNlZCBVUkwgcGFydHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hYnN0cmFjdCBjbGFzcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkVG9rZW5cclxue1xyXG5cdC8vIExvY2F0aW9uIG9mIHRoZSBwYXJ0IGluIHRoZSBvcmlnaW5hbCBwYXR0ZXJuIHN0cmluZyBjb250YWluaW5nIHRoZSB6ZXJvLWJhc2VkIGluZGV4IHdoZXJlXHJcblx0Ly8gdGhlIHBhcnQgYmVnaW5zIGFuZCBpdHMgbGVuZ3RoLlxyXG5cdGxvY2F0aW9uOiB7IHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyIH07XHJcblxyXG5cdC8qKiBDb250ZW50IG9mIHRoZSB0b2tlbiAqL1xyXG5cdHRva2VuU3Rpbmc6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHRoaXMubG9jYXRpb24gPSB7IHN0YXJ0OiBnX2N1cnJJbmRleCwgbGVuZ3RoOiAwIH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluYWxpemUoKVxyXG5cdHtcclxuXHRcdHRoaXMubG9jYXRpb24ubGVuZ3RoID0gZ19jdXJySW5kZXggLSB0aGlzLmxvY2F0aW9uLnN0YXJ0O1xyXG5cdFx0dGhpcy50b2tlblN0aW5nID0gZ19wYXR0ZXJuU3RyaW5nLnN1YnN0ciggdGhpcy5sb2NhdGlvbi5zdGFydCwgdGhpcy5sb2NhdGlvbi5sZW5ndGgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFVybFBhcnQgaXMgYSBiYXNlIGNsYXNzIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gY29tbW9uIHRvIGFsbCBwYXJzZWQgVVJMIHBhcnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkVXJsUGFydCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRVcmxQYXJ0XHJcbntcclxuXHQvLyBVUkwgcGFydCB0aGlzIG9iamVjdCByZXByZXNlbnRzLlxyXG5cdHVybFBhcnQ6IGFwaS5FVXJsUGFydDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbXBhcmlzb24gb2YgdGhpcyBwYXJ0IHNob2xkIGJlIGNhc2Utc2Vuc2l0aXZlIG9yIG5vdC5cclxuXHRjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy51cmxQYXJ0ID0gdXJsUGFydDtcclxuXHRcdHRoaXMuY2FzZVNlbnNpdGl2ZSA9IGNhc2VTZW5zaXRpdmU7XHJcblx0fVxyXG5cclxuXHQvLyBQYXJzZXMgdGhpcyB0b2tlblxyXG5cdHB1YmxpYyBhYnN0cmFjdCBwYXJzZSgpOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIGFuZCBjcmF0ZXMgaWYgbmVjZXNzYXJ5IHRoZSBuZXh0IFVSTCBwYXJ0IGJhc2VkIG9uIHRoZSBjdXJyZW50IGNoYXJhY3RlclxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydDtcclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBzZWdtZW50cyBpbiB0aGlzIHBhcnQuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlZ21lbnRzKCk6IFBhcnNlZFNlZ21lbnRbXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0IGludGVyZmFjZSBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGlzIGNvbW1vbiBmb3IgVVJMIHBhcnRzIHRoYXRcclxuLy8gZGVmaW5lIGEgc2luZ2xlIHNlZ21lbnQ6IHByb3RvY29sLCBwb3J0IGFuZCBoYXNoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkU2luZ2xlU2VnbWVudFVybFBhcnQgZXh0ZW5kcyBQYXJzZWRVcmxQYXJ0IGltcGxlbWVudHMgYXBpLklQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Ly8gVVJMIHBhcnQgdGhpcyBvYmplY3QgcmVwcmVzZW50cy5cclxuXHRzZWdtZW50OiBQYXJzZWRTZWdtZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvciggdXJsUGFydDogYXBpLkVVcmxQYXJ0LCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB1cmxQYXJ0LCBjYXNlU2Vuc2l0aXZlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHNlZ21lbnQgPSBuZXcgUGFyc2VkU2VnbWVudCgpO1xyXG5cdFx0c2VnbWVudC5wYXJzZSggdGhpcy5nZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpLCBmYWxzZSwgdGhpcy5jYXNlU2Vuc2l0aXZlKTtcclxuXHRcdHRoaXMuc2VnbWVudCA9IHNlZ21lbnQ7XHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudHMoKTogUGFyc2VkU2VnbWVudFtdIHsgcmV0dXJuIFt0aGlzLnNlZ21lbnRdOyB9XHJcblxyXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjb250YWlucyBjaGFyYWN0ZXIsIHdoaWNoIGluZGljYXRlIHNlZ21lbnQgZW5kIGZvciB0aGUgZ2l2ZW4gVVJMIHBhcnQuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZE11bHRpU2VnbWVudFVybFBhcnQgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBpcyBjb21tb24gZm9yIFVSTCBwYXJ0cyB0aGF0XHJcbi8vIGNhbiBkZWZpbmUgbXVsdGlwbGUgc2VnbWVudHM6IGhvc3RuYW1lIGFuZCBwYXRoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYWJzdHJhY3QgY2xhc3MgUGFyc2VkTXVsdGlTZWdtZW50VXJsUGFydCBleHRlbmRzIFBhcnNlZFVybFBhcnQgaW1wbGVtZW50cyBhcGkuSVBhcnNlZE11bHRpU2VnbWVudFVybFBhcnRcclxue1xyXG5cdC8vIFVSTCBwYXJ0IHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuXHJcblx0c2VnbWVudHM6IFBhcnNlZFNlZ21lbnRbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHVybFBhcnQ6IGFwaS5FVXJsUGFydCwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlciggdXJsUGFydCwgY2FzZVNlbnNpdGl2ZSk7XHJcblx0XHR0aGlzLnNlZ21lbnRzID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBwYXJ0RW5kQ2hhcmFjdGVycyA9IHRoaXMuZ2V0UGFydEVuZENoYXJhY3RlcnMoKTtcclxuXHJcblx0XHQvLyBwYXJzZSBzZWdtZW50cyB1bnRpbCB0aGUgY3VycmVudCBjaGFyYWN0ZXIgaXMgdGhlIGVuZCBvZiB0aGUgVVJMIHBhcnRcclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VnbWVudCA9IG5ldyBQYXJzZWRTZWdtZW50KCk7XHJcblx0XHRcdHNlZ21lbnQucGFyc2UoIHRoaXMuZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKSwgdHJ1ZSwgdGhpcy5jYXNlU2Vuc2l0aXZlKTtcclxuXHRcdFx0dGhpcy5zZWdtZW50cy5wdXNoKCBzZWdtZW50KTtcclxuXHRcdFx0aWYgKHBhcnRFbmRDaGFyYWN0ZXJzLmluZGV4T2YoIGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIGFycmF5IG9mIHNlZ21lbnRzIGluIHRoaXMgcGFydC5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudHMoKTogUGFyc2VkU2VnbWVudFtdIHsgcmV0dXJuIHRoaXMuc2VnbWVudHM7IH1cclxuXHJcblx0Ly8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNvbnRhaW5zIGNoYXJhY3Rlciwgd2hpY2ggaW5kaWNhdGUgc2VnbWVudCBlbmQgZm9yIHRoZSBnaXZlbiBVUkwgcGFydC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0UGFydEVuZENoYXJhY3RlcnMoKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUHJvdG9jb2wgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIHByb3RvY29sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUHJvdG9jb2wgZXh0ZW5kcyBQYXJzZWRTaW5nbGVTZWdtZW50VXJsUGFydFxyXG57XHJcblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCBhcGkuRVVybFBhcnQuUHJvdG9jb2wsIGZhbHNlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiOlwiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSBcIjpcIiAmJiBnX2N1cnJJbmRleCArIDIgPCBnX3BhdHRlcm5TdHJpbmdMZW5ndGggJiZcclxuXHRcdFx0Z19wYXR0ZXJuU3RyaW5nW2dfY3VyckluZGV4KzFdID09PSBcIi9cIiAmJiBnX3BhdHRlcm5TdHJpbmdbZ19jdXJySW5kZXgrMl0gPT09IFwiL1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoMyk7XHJcblx0XHRcdGdfY2hlY2tFbmQoKTtcclxuXHRcdFx0bGV0IHBhcnQgPSBuZXcgUGFyc2VkSG9zdG5hbWUoKTtcclxuXHRcdFx0cmV0dXJuIHBhcnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVycyBhZnRlciBwcm90b2NvbCBwYXJ0YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkSG9zdG5hbWUgY2xhc3MgY29udGFpbnMgaW5mb3JtYXRpb24gdGhhdCBhbGxvd3MgbWF0Y2hpbmcgVVJMIGhvc3RuYW1lLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkSG9zdG5hbWUgZXh0ZW5kcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5Ib3N0bmFtZSwgZmFsc2UpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRTZWdtZW50RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCIuOi8/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXRQYXJ0RW5kQ2hhcmFjdGVycygpOiBzdHJpbmcgeyByZXR1cm4gXCI6Lz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc6JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdGdfY2hlY2tFbmQoIFwiUG9ydCBjYW5ub3QgYmUgZW1wdHlcIik7XHJcblx0XHRcdHJldHVybiBuZXcgUGFyc2VkUG9ydCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJy8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkUGF0aCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJz8nKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkUXVlcnlTdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGdfY3VyckNoYXIgPT09ICcjJylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZEhhc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBjaGFyYWN0ZXIgJyR7Z19jdXJyQ2hhcn0nIGFmdGVyIGhvc3RuYW1lIHNlZ21lbnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRQb3J0IGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBwb3J0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkUG9ydCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5Qb3J0LCBmYWxzZSk7IH1cclxuXHJcblx0cHVibGljIGdldFNlZ21lbnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIi8/I1wiOyB9XHJcblxyXG5cdHB1YmxpYyBnZXROZXh0VXJsUGFydCgpIDogUGFyc2VkVXJsUGFydFxyXG5cdHtcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnLycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRQYXRoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRRdWVyeVN0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfScgYWZ0ZXIgcG9ydCBwYXJ0YCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUGF0aCBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBVUkwgcGF0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFBhdGggZXh0ZW5kcyBQYXJzZWRNdWx0aVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5QYXRoLCB0cnVlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiLz8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldFBhcnRFbmRDaGFyYWN0ZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIj8jXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICc/JylcclxuXHRcdHtcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdHJldHVybiBnX2lzRW5kKCkgPyBudWxsIDogbmV3IFBhcnNlZFF1ZXJ5U3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnIycpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZ19pc0VuZCgpID8gbnVsbCA6IG5ldyBQYXJzZWRIYXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEludmFsaWQgY2hhcmFjdGVyICcke2dfY3VyckNoYXJ9JyBhZnRlciBwYXRoIHNlZ21lbnRgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRRdWVyeVN0cmluZyBjbGFzcyBjb250YWlucyBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBtYXRjaGluZyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFF1ZXJ5U3RyaW5nIGV4dGVuZHMgUGFyc2VkVXJsUGFydCBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkUXVlcnlTdHJpbmdcclxue1xyXG5cdC8vIFF1ZXJ5IHN0cmluZyBkZWZpbmVzIG9uZSBzZWdtZW50IHBlciBlYWNoIHBhcmFtZXRlciBuYW1lLlxyXG5cdHBhcnNlZFFTUHM6IHsgW1A6IHN0cmluZ106IGFwaS5JUGFyc2VkUVNQIH07XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIG5vdCBzcGVjaWZpZWQgZXhwbGljaXRseSBpbiB0aGUgcGF0dGVyblxyXG5cdC8vIHdpbGwgYmUgYWxsb3dlZCB3aGVuIHBhcnNpbmcgYWN0dWFsIFVSTHMuXHJcblx0YWxsb3dFeHRyYVF1ZXJ5UGFyYW1zOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGFwaS5FVXJsUGFydC5RdWVyeSwgdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy5wYXJzZWRRU1BzID0ge307XHJcblx0XHR0aGlzLmFsbG93RXh0cmFRdWVyeVBhcmFtcyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHBhcnNlIHNlZ21lbnRzIHVudGlsIHRoZSBjdXJyZW50IGNoYXJhY3RlciBpcyB0aGUgZW5kIG9mIHRoZSBVUkwgcGFydFxyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgZ19jdXJyQ2hhciAhPT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJyEnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gc3BlY2lhbCBjYXNlIGZvciBkaXNhYmxpbmcgbWF0Y2hpbmcgd2l0aCBleHRyYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xyXG5cdFx0XHRcdHRoaXMuYWxsb3dFeHRyYVF1ZXJ5UGFyYW1zID0gZmFsc2U7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHFzcCA9IG5ldyBQYXJzZWRRU1AoKTtcclxuXHRcdFx0XHRxc3AucGFyc2UoKTtcclxuXHRcdFx0XHRpZiAocXNwLm5hbWUgaW4gdGhpcy5wYXJzZWRRU1BzKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHtxc3AubmFtZX0nIGFwcGVhcnMgbW9yZSB0aGFuIG9uY2VgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlZFFTUHNbcXNwLm5hbWVdID0gcXNwO1xyXG5cclxuXHRcdFx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJyYnKVxyXG5cdFx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TmV4dFVybFBhcnQoKSA6IFBhcnNlZFVybFBhcnRcclxuXHR7XHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJyMnKVxyXG5cdFx0e1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0cmV0dXJuIGdfaXNFbmQoKSA/IG51bGwgOiBuZXcgUGFyc2VkSGFzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBJbnZhbGlkIGNoYXJhY3RlciAnJHtnX2N1cnJDaGFyfScgYWZ0ZXIgcXVlcnkgc3RyaW5nIHNlZ21lbnRgKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygc2VnbWVudHMgaW4gdGhpcyBwYXJ0LlxyXG5cdHB1YmxpYyBnZXRTZWdtZW50cygpOiBQYXJzZWRTZWdtZW50W11cclxuXHR7XHJcblx0XHRsZXQgc2VnbWVudHM6IFBhcnNlZFNlZ21lbnRbXSA9IFtdO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xyXG5cdFx0Zm9yKCBsZXQgcXNwTmFtZSBpbiB0aGlzLnBhcnNlZFFTUHMpXHJcblx0XHRcdHNlZ21lbnRzLnB1c2goIHRoaXMucGFyc2VkUVNQc1txc3BOYW1lXS5zZWdtZW50IGFzIFBhcnNlZFNlZ21lbnQpO1xyXG5cclxuXHRcdHJldHVybiBzZWdtZW50cztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRIYXNoIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIG1hdGNoaW5nIFVSTCBoYXNoLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkSGFzaCBleHRlbmRzIFBhcnNlZFNpbmdsZVNlZ21lbnRVcmxQYXJ0XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIGFwaS5FVXJsUGFydC5IYXNoLCB0cnVlKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0U2VnbWVudEVuZENoYXJhY3RlcnMoKTogc3RyaW5nIHsgcmV0dXJuIFwiXCI7IH1cclxuXHJcblx0cHVibGljIGdldE5leHRVcmxQYXJ0KCkgOiBQYXJzZWRVcmxQYXJ0XHJcblx0e1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUGFyc2VkUVNQIGNsYXNzIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IG1hdGNoaW5nIGEgc2luZ2xlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRRU1AgZXh0ZW5kcyBQYXJzZWRUb2tlbiBpbXBsZW1lbnRzIGFwaS5JUGFyc2VkUVNQXHJcbntcclxuXHQvLyBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIG5hbWUuXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBRdWVyeSBTdHJpbmcgZGVmaW5lcyBvbmUgc2VnbWVudCBwZXIgZWFjaCBwYXJhbWV0ZXIgbmFtZS5cclxuXHRzZWdtZW50OiBhcGkuSVBhcnNlZFNlZ21lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHBhcmFtZXRlciBuYW1lXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiBcIj0mI1wiLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5uYW1lICs9IGdfY3VyckNoYXI7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5uYW1lKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGRvZXNuJ3QgaGF2ZSBuYW1lYCk7XHJcblx0XHRlbHNlIGlmICghaXNWYWxpZFF1ZXJ5UGFyYW1OYW1lKCB0aGlzLm5hbWUpKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBRdWVyeSBzdHJpbmcgcGFyYW1ldGVyIG5hbWUgJyR7dGhpcy5uYW1lfScgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJgKTtcclxuXHJcblx0XHRpZiAoZ19pc0VuZCgpIHx8IGdfY3VyckNoYXIgIT09ICc9JylcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgUXVlcnkgc3RyaW5nIHBhcmFtZXRlciAnJHt0aGlzLm5hbWV9JyBtdXN0IGJlIGZvbGxvd2VkIGJ5ICc9J2ApO1xyXG5cclxuXHRcdGdfbW92ZSgpO1xyXG5cdFx0Z19jaGVja0VuZCggYFF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgJyR7dGhpcy5uYW1lfScgZG9lc24ndCBoYXZlIHZhbHVlYCk7XHJcblx0XHRsZXQgc2VnbWVudCA9IG5ldyBQYXJzZWRTZWdtZW50KCk7XHJcblx0XHRzZWdtZW50LnBhcnNlKCBcIiYjXCIsIHRydWUsIHRydWUpO1xyXG5cdFx0dGhpcy5zZWdtZW50ID0gc2VnbWVudDtcclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNOYW1lRW5kQ2hhcmFjdGVyKCBjOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiPSYjXCIuaW5kZXhPZiggYykgPj0gMDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRTZWdtZW50IGNsYXNzIGRlZmluZXMgYSBzaW5nbGUgc2VnbWVudCBpbiBhIFVSTCBwYXR0ZXJuIHRoYXQgY2FuIGJlIG1hdGNoZWQgdG8gb25lXHJcbi8vIG9yIG1vcmUgcGFydHMgb2YgYW4gYWN0dWFsIFVSTC4gRWFjaCBzZWdtZW50IGNhbiBoYXZlIHplcm8gb3IgbW9yZSBmaWVsZHMgZGVmaW5lZCBpbiBpdC5cclxuLy8gQSBmaWVsZCBpcyBkZWZpbmVkIGVpdGhlciB3aXRoIG9yIHdpdGhvdXQgYSBuYW1lLiBVbm5hbWVkIGZpZWxkcyBhcmUgYWxzbyBjYWxsZWRcclxuLy8gYW5vbnltb3VzIGFuZCB0aGV5IGFyZSBhc3NvY2lhdGVkIHdpdGggYW4gaW5kZXguIFdoZW4gdGhlIFVSTCBwYXR0ZXJuIGlzIHBhcnNlZCBpbnRvIHNlZ21lbnRzLFxyXG4vLyB0aGUgYW5vbnltb3VzIGZpZWxkcyBhcmUgbnVtYmVyZWQgc2VxdWVudGlhbGx5IGFjY3Jvc3MgbXVsdGlwbGUgc2VnbWVudHMuIFRoYXQgbWVhbnMgdGhhdFxyXG4vLyBpbmRleGVzIGRvIG5vdCByZXN0YXJ0IGZvciBlYWNoIHNlZ21lbnQgYW5kIHRodXMgaW5kZXhlcyBmb3IgYSBzZWdtZW50J3MgZmllbGRzIG1heSBub3RcclxuLy8gc3RhcnQgZnJvbSB6ZXJvLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgUGFyc2VkU2VnbWVudCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRTZWdtZW50XHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2VnbWVudCBpcyBvcHRpb25hbFxyXG5cdGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzZWdtZW50IGNhbiBiZSByZXBlYXRlZCBtdXRpcGxlIHRpbWVzLiBTZWdtZW50cyB0aGF0IGFyZSBib3RoXHJcblx0Ly8gb3B0aW9uYWwgYW5kIG11bHRpIGNhbiBiZSByZXBlYXRlZCB6ZXJvIG9yIG1vcmUgdGltZXMuIFNlZ21lbnRzIHRoYXQgYXJlIG5vdCBvcHRpb25hbCBidXRcclxuXHQvLyBtdWx0aSBjYW4gYmUgcmVwZWF0ZWQgb25lIG9yIG1vcmUgdGltZXMuXHJcblx0aXNNdWx0aTogYm9vbGVhbjtcclxuXHJcblx0LyoqIEFycmF5IG9mIGZpZWxkcy4gKi9cclxuXHRmaWVsZHM6IFBhcnNlZEZpZWxkW107XHJcblxyXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIHNlZ21lbnQncyBtYXRjaCBwYXR0ZXJuLlxyXG5cdHJlZ0V4cDogUmVnRXhwO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCApXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmlzT3B0aW9uYWwgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNNdWx0aSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5maWVsZHMgPSBbXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHBhcnNlKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZywgaXNQb3RlbnRpYWxseU11bHRpOiBib29sZWFuLCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGFuYWx5emUgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgc2VnbWVudCBhbmQgaWYgaXQgd2FzIGEgc3BlY2lhbCBjaGFyYWN0ZXIgdGhhdFxyXG5cdFx0Ly8gZGV0ZXJtaW5lcyB0aGUgc2VnbWVudHMgb3B0aW9uYWwgYW5kIG11bHRpIGZsYWdzLCBtb3ZlIHRvIHRoZSBuZXh0IGNoYXJhY3Rlci5cclxuXHRcdGlmICh0aGlzLmFuYWxpemVGaXJzdENoYXIoIHNlZ21lbnRFbmRDaGFycywgaXNQb3RlbnRpYWxseU11bHRpKSlcclxuXHRcdFx0Z19tb3ZlKCk7XHJcblxyXG5cdFx0Ly8gbWF0Y2ggcGF0dGVybiBvZiB0aGUgc2VnbWVudCBjb25zaXN0aW5nIG9mIGVsZW1lbnRzIGVhY2ggb2Ygd2hpY2ggaXMgZWl0aGVyIHRleHQgb3JcclxuXHRcdC8vIHJlZ3VsYXIgZXhwcmVzc2lvbiBvciBmaWVsZFxyXG5cdFx0bGV0IG1hdGNoUGF0dGVybjogKFBhcnNlZFRleHQgfCBQYXJzZWRGaWVsZCB8IFBhcnNlZFJlZ0V4cClbXSA9IFtdO1xyXG5cclxuXHRcdC8vIHBhcnNlIHRva2VucyBpbiB0aGUgc2VnbWVudCAodGV4dCwgcmVnZXhwLCBmaWVsZHMpIHVudGlsIGVpdGhlciB3ZSByZWFjaCB0aGUgZW5kIG9mXHJcblx0XHQvLyB0aGUgZW50aXJlIFVSTCBwYXR0ZXJuIG9yIHdlIGVuY291bnRlciBhIHNlZ21lbnQgZGVsaW1pdGVyXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSAmJiBzZWdtZW50RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdG9rZW46IFBhcnNlZFRleHQgfCBQYXJzZWRGaWVsZCB8IFBhcnNlZFJlZ0V4cDtcclxuXHRcdFx0aWYgKGdfY3VyckNoYXIgPT09ICd7JylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBmaWVsZCA9IG5ldyBQYXJzZWRGaWVsZCgpO1xyXG5cdFx0XHRcdGZpZWxkLnBhcnNlKCBzZWdtZW50RW5kQ2hhcnMpO1xyXG5cdFx0XHRcdHRva2VuID0gZmllbGQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZ19jdXJyQ2hhciA9PT0gJygnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHJlZ0V4cCA9IG5ldyBQYXJzZWRSZWdFeHAoKTtcclxuXHRcdFx0XHRyZWdFeHAucGFyc2UoKTtcclxuXHRcdFx0XHR0b2tlbiA9IHJlZ0V4cDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdGV4dCA9IG5ldyBQYXJzZWRUZXh0KCk7XHJcblx0XHRcdFx0dGV4dC5wYXJzZSggc2VnbWVudEVuZENoYXJzICsgXCJ7KFwiKTtcclxuXHRcdFx0XHR0b2tlbiA9IHRleHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdGNoUGF0dGVybi5wdXNoKCB0b2tlbik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZW5lcmF0ZVJlZ0V4cCggbWF0Y2hQYXR0ZXJuLCBjYXNlU2Vuc2l0aXZlKTtcclxuXHRcdHRoaXMuZmluYWxpemUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQW5hbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgc2VnbWVudCBhbmQgcmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgc3BlY2lhbCBjaGFyYWN0ZXJcclxuXHQvLyB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgc2VnbWVudCBpcyBvcHRpb25hbCBhbmQgd2hldGhlciBpdCBpcyBcIm11bHRpXCIuXHJcblx0cHJpdmF0ZSBhbmFsaXplRmlyc3RDaGFyKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZywgaXNQb3RlbnRpYWxseU11bHRpOiBib29sZWFuKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN3aXRjaCggZ19jdXJyQ2hhcilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSAnPyc6IHRoaXMuaXNPcHRpb25hbCA9IHRydWU7IHJldHVybiB0cnVlO1xyXG5cdFx0XHRjYXNlICchJzogcmV0dXJuIHRydWU7XHJcblxyXG5cdFx0XHRjYXNlICcqJzpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghaXNQb3RlbnRpYWxseU11bHRpKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgU2luZ2xlLXZhbHVlIHNlZ21lbnQgVVJMIHBhcnQgY2Fubm90IHN0YXJ0IGZyb20gJyonYCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNPcHRpb25hbCA9IHRoaXMuaXNNdWx0aSA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNhc2UgJysnOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFpc1BvdGVudGlhbGx5TXVsdGkpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBTaW5nbGUtc2VnbWVudCBVUkwgcGFydCBjYW5ub3Qgc3RhcnQgZnJvbSAnKydgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5pc011bHRpID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzZWdtZW50RW5kQ2hhcnMuaW5kZXhPZiggZ19jdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEVtcHR5IHNlZ21lbnQgZW5jb3VudGVyZWRgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyByZWd1bGFyIGV4cHJlc3Npb24gZGVzY3JpYmluZyB0aGUgc2VnbWVudC5cclxuXHRwcml2YXRlIGdlbmVyYXRlUmVnRXhwKCBtYXRjaFBhdHRlcm46IChQYXJzZWRUZXh0IHwgUGFyc2VkRmllbGQgfCBQYXJzZWRSZWdFeHApW10sXHJcblx0XHRcdFx0XHRjYXNlU2Vuc2l0aXZlOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIDEtYmFzZWQgaW5kZXggb2YgdGhlIFJlZ0V4cCBjYXB0dXJpbmcgZ3JvdXAuIFdlIG5lZWQgdG8gY291bnQgY2FwdHVyaW5nIGdyb3VwcyBpblxyXG5cdFx0Ly8gb3JkZXIgdG8gbGF0ZXIgZ2V0IHZhbHVlcyBvZiBuYW1lZCBhbmQgYW5vbnltb3VzIGZpZWxkcy5cclxuXHRcdGxldCBuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCA9IDE7XHJcblxyXG5cdFx0bGV0IHJlZ0V4cFN0cmluZyA9IFwiXCI7XHJcblx0XHRpZiAobWF0Y2hQYXR0ZXJuLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmVnRXhwU3RyaW5nICs9IFwiLitcIjtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdG9rZW4gb2YgbWF0Y2hQYXR0ZXJuKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHRva2VuIGluc3RhbmNlb2YgUGFyc2VkVGV4dClcclxuXHRcdFx0XHRcdHJlZ0V4cFN0cmluZyArPSB0b2tlbi5jb250ZW50O1xyXG5cdFx0XHRcdGVsc2UgaWYgKHRva2VuIGluc3RhbmNlb2YgUGFyc2VkUmVnRXhwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJlZ0V4cFN0cmluZyArPSBcIihcIiArIHRva2VuLmNvbnRlbnQgKyBcIilcIjtcclxuXHRcdFx0XHRcdG5leHRDYXB0dXJpbmdHcm91cEluZGV4ICs9IDEgKyB0b2tlbi5jYXB0dXJpbmdHcm91cFF0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSAvLyBpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWRGaWVsZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0b2tlbi5pc0FycmF5ID0gdGhpcy5pc011bHRpO1xyXG5cdFx0XHRcdFx0dG9rZW4uaW5kZXggPSBuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleDtcclxuXHRcdFx0XHRcdHRoaXMuZmllbGRzLnB1c2goIHRva2VuKTtcclxuXHRcdFx0XHRcdHJlZ0V4cFN0cmluZyArPSB0aGlzLmdlbmVyYXRlUmVnRXhwU2VjdGlvbkZvckZpZWxkKCB0b2tlbik7XHJcblx0XHRcdFx0XHRuZXh0Q2FwdHVyaW5nR3JvdXBJbmRleCsrO1xyXG5cdFx0XHRcdFx0aWYgKHRva2VuLm1hdGNoUGF0dGVybilcclxuXHRcdFx0XHRcdFx0bmV4dENhcHR1cmluZ0dyb3VwSW5kZXggKz0gMSArIHRva2VuLm1hdGNoUGF0dGVybi5jYXB0dXJpbmdHcm91cFF0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlZ0V4cCA9IG5ldyBSZWdFeHAoIHJlZ0V4cFN0cmluZywgY2FzZVNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgd2l0aCB0aGUgcmVndWxhciBleHByZXNzaW9uIGdyb3VwIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcblx0cHJpdmF0ZSBnZW5lcmF0ZVJlZ0V4cFNlY3Rpb25Gb3JGaWVsZCggcGFyc2VkRmllbGQ6IFBhcnNlZEZpZWxkKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0aWYgKHBhcnNlZEZpZWxkLm1hdGNoUGF0dGVybiAmJiBwYXJzZWRGaWVsZC5tYXRjaFBhdHRlcm4uY29udGVudClcclxuXHRcdHtcclxuXHRcdFx0cyArPSBwYXJzZWRGaWVsZC5tYXRjaFBhdHRlcm4uY29udGVudDtcclxuXHRcdFx0aWYgKHBhcnNlZEZpZWxkLmlzT3B0aW9uYWwpXHJcblx0XHRcdFx0cyArPSBcIj9cIjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHBhcnNlZEZpZWxkLmlzT3B0aW9uYWwpXHJcblx0XHRcdHMgKz0gXCIoLiopXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHMgKz0gXCIoLispXCI7XHJcblxyXG5cdFx0Ly8gcyArPSBcIilcIjtcclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFRleHQgY2xhc3MgZGVmaW5lcyBhIHNpbmdsZSB0ZXh0IHNlY3Rpb24gd2l0aGluIGEgc2VnbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFBhcnNlZFRleHQgZXh0ZW5kcyBQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gVGV4dCBzZWN0aW9uIHN0cmluZ1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoIHRleHRFbmRDaGFyczogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cdFx0d2hpbGUoICFnX2lzRW5kKCkgJiYgdGV4dEVuZENoYXJzLmluZGV4T2YoIGdfY3VyckNoYXIpIDwgMClcclxuXHRcdHtcclxuXHRcdFx0cyArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIWlzVmFsaWRUZXh0VG9rZW4oIHMpKVxyXG5cdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBUZXh0IHRva2VuICcke3N9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNgKTtcclxuXHJcblx0XHQvLyB0ZXh0IG1pZ2h0IGhhdmUgYmVlbiBVUkwgZW5jb2RlZFxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGRlY29kZVVSSUNvbXBvbmVudChzKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYFRleHQgdG9rZW4gJyR7c30nIGNhbm5vdCBiZSBVUkwtZGVjb2RlZC4gRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBhcnNlZFJlZ0V4cCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzZWN0aW9uIHdpdGhpbiBhIHNlZ21lbnQgb3JcclxuLy8gZmllbGQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRSZWdFeHAgZXh0ZW5kcyBQYXJzZWRUb2tlblxyXG57XHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHN0cmluZ1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGNhcHR1cmluZyBncm91cHMgd2l0aGluIHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuXHRjYXB0dXJpbmdHcm91cFF0eTogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY29udGVudCA9IFwiXCI7XHJcblx0XHR0aGlzLmNhcHR1cmluZ0dyb3VwUXR5ID0gMDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBhcnNlcyByZWd1bGFyIGV4cHJlc3Npb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjdXJyZW50IGNoYXJhY3RlciBpcyAnKCdcclxuXHQgKi9cclxuXHRwdWJsaWMgcGFyc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFN0YWNrIG9mIG9wZW5pbmcgYW5kIGNsb3NpbmcgY2hhcmFjdGVycyAocGFyZW50aGVzaXMsIGJyYWNrZXRzIGFuZCBjdXJseSBicmFjZXMpIGZvclxyXG5cdFx0Ly8gcGFyc2luZyByZWd1bGFyIGV4cHJlc3Npb25zIHNlY3Rpb24uIFJlZ3VsYXIgZXhwcmVzc2lvbiBzZWN0aW9uIHN0b3BzIHdoZW4gd2UgZW5jb3VudGVyXHJcblx0XHQvLyBjaGFyYWN0ZXIgJyknIGFuZCB0aGlzIHN0YWNrIGlzIGVtcHR5LlxyXG5cdFx0bGV0IHN0YWNrOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRcdHdoaWxlKCAhZ19pc0VuZCgpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VyckNoYXIgPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRpZiAoY3VyckNoYXIgPT09ICcpJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChzdGFjay5wb3AoKSA9PT0gJygnKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb250ZW50ICs9IGN1cnJDaGFyO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZpbmFsaXplKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgTm9uLW1hdGNoaW5nIGNoYXJhY3RlciAnJHtjdXJyQ2hhcn0nIGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGN1cnJDaGFyID09PSAnfScpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3RhY2sucG9wKCkgPT09ICd7JylcclxuXHRcdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYE5vbi1tYXRjaGluZyBjaGFyYWN0ZXIgJyR7Y3VyckNoYXJ9JyBpbiByZWd1bGFyIGV4cHJlc3Npb25gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjdXJyQ2hhciA9PT0gJ10nKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHN0YWNrLnBvcCgpID09PSAnWycpXHJcblx0XHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBOb24tbWF0Y2hpbmcgY2hhcmFjdGVyICcke2N1cnJDaGFyfScgaW4gcmVndWxhciBleHByZXNzaW9uYCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoXCIoe1tcIi5pbmRleE9mKCBjdXJyQ2hhcikgPj0gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChjdXJyQ2hhciA9PT0gJygnKVxyXG5cdFx0XHRcdFx0dGhpcy5jYXB0dXJpbmdHcm91cFF0eSsrO1xyXG5cclxuXHRcdFx0XHRzdGFjay5wdXNoKCBjdXJyQ2hhcik7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY3VyckNoYXIgPT09ICdcXFxcJylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY29udGVudCArPSBjdXJyQ2hhcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0XHRnX2NoZWNrRW5kKCBgSW4gdGhlIFJlZ2V4cCAnJHt0aGlzLmNvbnRlbnR9JywgdGhlIGVzY2FwZSBjaGFyYWN0ZXIgJ1xcXFwnIG11c3QgYmUgZm9sbG93ZWQgYnkgYW5vdGhlciBjaGFyYWN0ZXJgKTtcclxuXHRcdFx0XHRjdXJyQ2hhciA9IGdfY3VyckNoYXI7XHJcblx0XHRcdFx0Z19tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5jb250ZW50ICs9IGN1cnJDaGFyO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHdlIGVuZCB1cCBoZXJlIG9ubHkgaWYgdGhlIFVSTCBwYXR0ZXJuIGVuZGVkIHdoaWxlIHdpdGhpbiB1bmZpbmlzaGVkIHJlZ3VsYXIgZXhwcmVzc2lvblxyXG5cdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgSW52YWxpZCBVUkwgcGF0dGVybiBlbmQgd2l0aGluIHJlZ3VsYXIgZXhwcmVzc2lvbmApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpbmFsaXplKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29udGVudClcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRW1wdHkgcmVndWxhciBleHByZXNzaW9uYCk7XHJcblxyXG5cdFx0c3VwZXIuZmluYWxpemUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQYXJzZWRGaWVsZCBjbGFzcyBkZWZpbmVzIGEgc2luZ2xlIGZpZWxkIHdpdGhpbiBhIHNlZ21lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBQYXJzZWRGaWVsZCBleHRlbmRzIFBhcnNlZFRva2VuIGltcGxlbWVudHMgYXBpLklQYXJzZWRGaWVsZFxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIGlzIG9wdGlvbmFsXHJcblx0aXNPcHRpb25hbDogYm9vbGVhbjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgZmllbGQuXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBGaWVsZCBGaWVsZEZvcm1hdFxyXG5cdGZvcm1hdDogYXBpLkZpZWxkRm9ybWF0O1xyXG5cclxuXHQvKiogT3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgZmllbGQgKi9cclxuXHRkZWZhdWx0VmFsdWU6IGFwaS5GaWVsZFZhbHVlVHlwZTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZpZWxkIHZhbHVlIGlzIGFuIGFycmF5LiBUaGlzIGlzIHRydWUgZm9yIGZpZWxkcyB0aGF0IGNhbiBhcHBlYXJcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgVVJMIHBhcnQuXHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYXB0dXJpbmcgZ3JvdXAgY29ycmVzcG9uZGluZyB0byB0aGUgZmllbGQgd2l0aGluIHRoZVxyXG5cdC8vIHNlZ21lbnQuXHJcblx0aW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uIHN0cmluZyBkZXNjcmliaW5nIHRoZSBtYXRjaGluZyBwYXR0ZXJuIGZvciB0aGUgZmllbGRcclxuXHRtYXRjaFBhdHRlcm46IFBhcnNlZFJlZ0V4cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc09wdGlvbmFsID0gZmFsc2U7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlwiO1xyXG5cdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuU3RyaW5nO1xyXG5cdFx0dGhpcy5tYXRjaFBhdHRlcm4gPSBudWxsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIHJlZ3VsYWZpZWxkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY3VycmVudCBjaGFyYWN0ZXIgaXMgJ3snXHJcblx0ICovXHJcblx0cHVibGljIHBhcnNlKCBzZWdtZW50RW5kQ2hhcnM6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBza2lwICd7J1xyXG5cdFx0Z19tb3ZlKCk7XHJcblx0XHRnX2NoZWNrRW5kKCBgQSBmaWVsZCBtdXN0IGRlZmluZSBhIG5hbWVgKTtcclxuXHJcblx0XHQvLyBmaXJzdCBjaGVjayB3aGV0aGVyIHRoaXMgZmllbGQgaXMgb3B0aW9uYWxcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnPycpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaXNPcHRpb25hbCA9IHRydWU7XHJcblx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBjaGFyYWN0ZXJzIGluIHRoZSBmaWVsZCBuYW1lXHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkIGRvZXNuJ3QgaGF2ZSBjbG9zaW5nICd9J2ApO1xyXG5cdFx0XHRlbHNlIGlmIChcIn0oJT1cIi5pbmRleE9mKGdfY3VyckNoYXIpID49IDApXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubmFtZSArPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubmFtZS5sZW5ndGggPT09IDApXHJcblx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkIG11c3QgaGF2ZSBuYW1lYCk7XHJcblx0XHRlbHNlIGlmICghaXNWYWxpZEZpZWxkTmFtZSggdGhpcy5uYW1lKSlcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgbmFtZSAnJHt0aGlzLm5hbWV9JyBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNgKTtcclxuXHJcblx0XHRnX2NoZWNrRW5kKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgZG9lc24ndCBoYXZlIGNsb3NpbmcgJ30nYCk7XHJcblxyXG5cdFx0Ly8gZmllbGQgbWF5IGRlZmluZSBmb3JtYXRcclxuXHRcdGlmIChnX2N1cnJDaGFyID09PSAnJScpXHJcblx0XHR7XHJcblx0XHRcdGdfbW92ZSgpXHJcblx0XHRcdGdfY2hlY2tFbmQoIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBkb2Vzbid0IHNwZWNpZnkgZm9ybWF0IGFmdGVyICclJ2ApO1xyXG5cclxuXHRcdFx0bGV0IGZvcm1hdENoYXIgPSBnX2N1cnJDaGFyO1xyXG5cdFx0XHRpZiAoZm9ybWF0Q2hhciA9PT0gJ2knKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBhcGkuRmllbGRGb3JtYXQuSW50ZWdlcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChmb3JtYXRDaGFyID09PSAnZicpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5GbG9hdDtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChmb3JtYXRDaGFyID09PSAnYicpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmZvcm1hdCA9IGFwaS5GaWVsZEZvcm1hdC5Cb29sZWFuO1xyXG5cdFx0XHRcdGdfbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBGaWVsZCAnJHt0aGlzLm5hbWV9JyBoYXMgaW52YWxpZCBmb3JtYXQgY2hhcmFjdGVyICcke2dfY3VyckNoYXJ9J2ApO1xyXG5cclxuXHRcdFx0Z19jaGVja0VuZCggYEZpZWxkICcke3RoaXMubmFtZX0nIGRvZXNuJ3QgaGF2ZSBjbG9zaW5nICd9J2ApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpZWxkIG1heSBoYXZlIHJlZ3VsYXIgZXhwcmVzc2lvblxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICcoJylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJlZ0V4cCA9IG5ldyBQYXJzZWRSZWdFeHAoKTtcclxuXHRcdFx0cmVnRXhwLnBhcnNlKCk7XHJcblx0XHRcdHRoaXMubWF0Y2hQYXR0ZXJuID0gcmVnRXhwO1xyXG5cclxuXHRcdFx0Z19jaGVja0VuZCggYEZpZWxkICcke3RoaXMubmFtZX0nIGRvZXNuJ3QgaGF2ZSBjbG9zaW5nICd9J2ApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpZWxkIG1heSBoYXZlIGRlZmF1bHQgdmFsdWU6IGluIHRoaXMgY2FzZSBpdCBiZWNvbWVzIG9wdGlvbmFsXHJcblx0XHRpZiAoZ19jdXJyQ2hhciA9PT0gJz0nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmlzT3B0aW9uYWwgPSB0cnVlO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0dGhpcy5wYXJzZURlZmF1bHRWYWx1ZSggc2VnbWVudEVuZENoYXJzKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0c3dpdGNoKCB0aGlzLmZvcm1hdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkludGVnZXI6IHRoaXMuZGVmYXVsdFZhbHVlID0gTmFOOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIGFwaS5GaWVsZEZvcm1hdC5GbG9hdDogdGhpcy5kZWZhdWx0VmFsdWUgPSBOYU47IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgYXBpLkZpZWxkRm9ybWF0LkJvb2xlYW46IHRoaXMuZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkOyBicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OiB0aGlzLmRlZmF1bHRWYWx1ZSA9IFwiXCI7IGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGdfY3VyckNoYXIgPT09ICd9JylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5maW5hbGl6ZSgpO1xyXG5cdFx0XHRnX21vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgaGFzIGludmFsaWQgY2hhcmFjdGVyICcke2dfY3VyckNoYXJ9J2ApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZURlZmF1bHRWYWx1ZSggc2VnbWVudEVuZENoYXJzOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHR3aGlsZSggIWdfaXNFbmQoKSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHNlZ21lbnRFbmRDaGFycy5pbmRleE9mKCBnX2N1cnJDaGFyKSA+PSAwKVxyXG5cdFx0XHRcdHRocm93IG5ldyBVcmxQYXR0ZXJuUGFyc2luZ0V4Y2VwdGlvbiggYEZpZWxkICcke3RoaXMubmFtZX0nIGRvZXNuJ3QgaGF2ZSBjbG9zaW5nICd9J2ApO1xyXG5cdFx0XHRlbHNlIGlmIChnX2N1cnJDaGFyID09PSAnfScpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHMgKz0gZ19jdXJyQ2hhcjtcclxuXHRcdFx0XHRnX21vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdFxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBlbXB0eSBhbmQgaWYgZmllbGQgZm9ybWF0IGlzIHNldCB0byBhIG5vbi1zdHJpbmdcclxuXHRcdC8vIGFsc28gY2hlY2sgd2hldGhlciBpdCBjYW4gYmUgY29udmVydGVkIHRvIHRoZWF0IGZvcm1hdC5cclxuXHRcdGlmICghcylcclxuXHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRmllbGQgJyR7dGhpcy5uYW1lfScgZGVmYXVsdCB2YWx1ZSBjYW5ub3QgYmUgZW1wdHlgKTtcclxuXHJcblx0XHQvLyBkZWZhdWx0IHZhbHVlIG1pZ2h0IGhhdmUgYmVlbiBVUkwgZW5jb2RlZFxyXG5cdFx0cyA9IGRlY29kZVVSSUNvbXBvbmVudChzKTtcclxuXHJcblx0XHRpZiAodGhpcy5mb3JtYXQgPT09IGFwaS5GaWVsZEZvcm1hdC5JbnRlZ2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IE51bWJlciggcyk7XHJcblx0XHRcdGlmIChpc05hTiggdGhpcy5kZWZhdWx0VmFsdWUpIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKCB0aGlzLmRlZmF1bHRWYWx1ZSkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRGVmYXVsdCB2YWx1ZSAnJHtzfScgb2YgSW50ZWdlciBmaWVsZCAnJHt0aGlzLm5hbWV9JyBjYW5ub3QgYmUgY29udmVydGVkIHRvIEludGVnZXJgKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZm9ybWF0ID09PSBhcGkuRmllbGRGb3JtYXQuRmxvYXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKCBzKTtcclxuXHRcdFx0aWYgKGlzTmFOKCB0aGlzLmRlZmF1bHRWYWx1ZSkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uKCBgRGVmYXVsdCB2YWx1ZSBvZiAnJHtzfScgRmxvYXQgZmllbGQgJyR7dGhpcy5uYW1lfScgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBGbG9hdGApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5mb3JtYXQgPT09IGFwaS5GaWVsZEZvcm1hdC5Cb29sZWFuKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdiA9IHMudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKHYgPT09IFwidHJ1ZVwiIHx8IHYgPT09IFwidFwiIHx8IHYgPT09IFwieWVzXCIgfHwgdiA9PT0gXCJ5XCIgfHwgdiA9PT0gXCIxXCIpXHJcblx0XHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmICh2ID09PSBcImZhbHNlXCIgfHwgdiA9PT0gXCJmXCIgfHwgdiA9PT0gXCJub1wiIHx8IHYgPT09IFwiblwiIHx8IHYgPT09IFwiMFwiKVxyXG5cdFx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgVXJsUGF0dGVyblBhcnNpbmdFeGNlcHRpb24oIGBEZWZhdWx0IHZhbHVlIG9mICcke3N9JyBCb29sZWFuIGZpZWxkICcke3RoaXMubmFtZX0nIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gQm9vbGVhbmApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IHM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCB0ZXh0IHRva2VuIGluIGEgc2VnZW1lbnQuIFRvIGJlIHZhbGlkLCBpdCBtdXN0XHJcbiAqIGJlIGFscGhhLW51bWVyaWMgb3IgdW5kZXNjb3JlICdfJyBvciBkYXNoICctJyBvciBkb3IgJy4nIG9yIHBlcmNlbnQgc2lnbiAnJScgKGZvciBVUkwtZW5jb2RlZCBjaGFyYWN0ZXJzKS5cclxuICogQHBhcmFtIHNcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRUZXh0VG9rZW4oIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlthLXowLTlfXFwtXFwuJV0rJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgZmllbGQgbmFtZS4gVG8gYmUgdmFsaWQsIGl0IG11c3Qgc3RhcnQgZnJvbSB0aGVcclxuICogdGhlIGFscGhhLW51bWVyaWMgb3IgdW5kZXNjb3JlICdfJyBjaGFyYWN0ZXIgYW5kIGJlIGZvbGxvd2VkIGJ5IG9wdGlvbmFsIGFscGhhLW51bWVyaWMgb3JcclxuICogdW5kZXNjb3JlICdfJyBvciBkYXNoICctJyBjaGFyYWN0ZXJzLlxyXG4gKiBAcGFyYW0gcyBcclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRGaWVsZE5hbWUoIHM6IHN0cmluZyk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAvXlthLXpfXVthLXowLTlfXSokL2kudGVzdChzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBuYW1lIG9mIGEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlci5cclxuICogVG8gYmUgdmFsaWQsIGl0IG11c3QgYmUgYWxwaGEtbnVtZXJpYyBvciB1bmRlc2NvcmUgJ18nIG9yIGRhc2ggJy0nLlxyXG4gKiBAcGFyYW0gc1xyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZFF1ZXJ5UGFyYW1OYW1lKCBzOiBzdHJpbmcpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gL15bYS16MC05X1xcLV0rJC9pLnRlc3Qocyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGlzIGEgZGVsaW1pdGVyIHRoYXQgY2Fubm90IGJlIHVzZWQgYXMgdGV4dCB3aXRoaW4gVVJMXHJcbiAqIEBwYXJhbSBjIFxyXG4gKi9cclxuZnVuY3Rpb24gZ19pc0RlbGltaXRlciggYzogc3RyaW5nKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwiIUAjJCVeJiooKSs9W117fTo7XFxcIic8PiwuPy98XFxcXGB+XCIuaW5kZXhPZihjKSA+PSAwO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGVycm9yIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHBhcnNpbmcgb2ZcclxuLy8gYSBVUkwgcGF0dGVybi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3IgaW1wbGVtZW50cyBhcGkuSVVybFBhdHRlcm5QYXJzaW5nRXhjZXB0aW9uXHJcbntcclxuXHQvLyBJbmRleCBpbiB0aGUgcGF0dGVybiBzdHJpbmcgYXQgd2hpY2ggdGhlZXJyb3Igb2NjdXJyZWQuXHJcblx0cG9zOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMucG9zID0gZ19jdXJySW5kZXg7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBgRXJyb3IgYXQgcG9zaXRpb24gJHt0aGlzLnBvc306ICR7bWVzc2FnZX1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9