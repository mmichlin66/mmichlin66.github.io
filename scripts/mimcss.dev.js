(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mimcss"] = factory();
	else
		root["mimcss"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/mimcssTypes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api/ColorAPI.js":
/*!*****************************!*\
  !*** ./lib/api/ColorAPI.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorFuncs = __webpack_require__(/*! ../styles/ColorFuncs */ "./lib/styles/ColorFuncs.js");
/**
 * Converts the color specified as red, green, blue separation values and an optional alpha
 * mask to a CSS color representation. Each color separation can be represented as a number with
 * the following meaning:
 *   - Integer number -255 to 255. Numbers beyond this range will be clamped. Negative numbers
 *     will be inverted.
 *   - Floating number -1.0 to 1.0 non-inclusive, which is multiplied by 100 treated as percentage.
 *     Floating numbers beyond this range will be rounded and treated as integer numbers. Negative
 *     numbers will be inverted.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * @param r Red separation value.
 * @param g Green separation value.
 * @param b Blue separation value.
 * @param a Optional alpha mask as a percentage value.
 */
function rgb(r, g, b, a) {
    return () => ColorFuncs.rgbToString(r, g, b, a);
}
exports.rgb = rgb;
/**
 * Converts the color specified as hue-saturation-lightness components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * The Hue component is treated as the CSS `<angle>` type. Numbers are considered degrees.
 *
 * The Saturation and Lightness components are treated as percentages:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Floating number 0 to 1 inclusive are multiplied by 100 and treated as percentage.
 *   - Integer or floating number 1 to 100 are treated as percentage. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped to 100.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * @param h Hue component as an angle value.
 * @param s Saturation component as a percentage value.
 * @param l Lightness component as a percentage value.
 * @param a Optional alpha mask as a percentage value.
 */
function hsl(h, s, l, a) {
    return () => ColorFuncs.hslToString(h, s, l, a);
}
exports.hsl = hsl;
/**
 * Converts the given color and the alpha mask to the CSS Color representation. This
 * method should be used when defining CSS color values in styleset properties.
 *
 * The color can be specified as a numeric value or as a string color name.
 *
 * The alpha mask is specified as a number:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Number 0 to 1 inclusive, which is treated as percentage.
 *   - Number 1 to 100 inclusive, which is treated as percentage.
 *   - Numbers greater than 100 are clamped to 100;
 *
 * @param c Color value as either a number or a named color
 * @param a Alpha channel value
 */
function alpha(c, a) {
    return () => ColorFuncs.colorWithAlphaToString(c, a);
}
exports.alpha = alpha;


/***/ }),

/***/ "./lib/api/ImageAPI.js":
/*!*****************************!*\
  !*** ./lib/api/ImageAPI.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorFuncs_1 = __webpack_require__(/*! ../styles/ColorFuncs */ "./lib/styles/ColorFuncs.js");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * The Gradient class implements the IGradient interface using property get accessor, whcih allows
 * createing a new instance of the approprient gradient interface. We need new instances, because
 * the functions implementing these callable interfaces keep optional parameters as properties of
 * the fucntion objects themselves.
 */
class Gradient {
    get linear() { return linearGradientFunc("linear-gradient"); }
    get repeatingLinear() { return linearGradientFunc("repeating-linear-gradient"); }
    get radial() { return radialGradientFunc("radial-gradient"); }
    get repeatingRadial() { return radialGradientFunc("repeating-radial-gradient"); }
    get conic() { return conicGradientFunc("conic-gradient"); }
    get repeatingConic() { return conicGradientFunc("repeating-conic-gradient"); }
}
/**
 * The gradient variable provides access to functions implementing the `<gradient>` CSS functions.
 */
exports.gradient = new Gradient();
/**
 * Returns an ImageProxy function representing the `cross-fade()` CSS function.
 */
function crossFade(...args) {
    return () => crossFadeToString(args);
}
exports.crossFade = crossFade;
/**
 * Function returning the ILinearGradient interface for either `liner-gradient` or
 * `repeating-liner-gradient` CSS functions.
 */
function linearGradientFunc(name) {
    let f = (...stopsOrHints) => () => linearGradientToString(name, stopsOrHints, f.angleParam);
    f.to = (angle) => {
        f.angleParam = angle;
        return f;
    };
    return f;
}
/**
 * Function returning the IRadialGradient interface for either `radial-gradient` or
 * `repeating-radial-gradient` CSS functions.
 */
function radialGradientFunc(name) {
    let f = (...stopsOrHints) => () => radialGradientToString(name, stopsOrHints, f.shapeParam, f.sizeParam, f.posParam);
    f.circle = (sizeOrExtent) => {
        f.shapeParam = "circle";
        f.sizeParam = sizeOrExtent;
        return f;
    };
    f.ellipse = (sizeOrExtent) => {
        f.shapeParam = "ellipse";
        f.sizeParam = sizeOrExtent;
        return f;
    };
    f.extent = (extent) => {
        f.sizeParam = extent;
        return f;
    };
    f.at = (pos) => {
        f.posParam = pos;
        return f;
    };
    return f;
}
/**
 * Function returning the IConicGradient interface for either `conic-gradient` or
 * `repeating-conic-gradient` CSS functions.
 */
function conicGradientFunc(name) {
    let f = (...stopsOrHints) => () => conicGradientToString(name, stopsOrHints, f.angleParam, f.posParam);
    f.from = (angle) => {
        f.angleParam = angle;
        return f;
    };
    f.at = (pos) => {
        f.posParam = pos;
        return f;
    };
    return f;
}
function linearGradientToString(name, stopsOrHints, angle) {
    let angleString = "";
    if (angle) {
        angleString = UtilFuncs_1.valueToString(angle, {
            fromNumber: UtilFuncs_1.CssAngleMath.convertFunc,
            fromString: v => /\d+.*/.test(v) ? v : "to " + v
        }) + ",";
    }
    return `${name}(${angleString}${gradientStopsOrHintsToString(stopsOrHints, UtilFuncs_1.CssPercentMath)})`;
}
function radialGradientToString(name, stopsOrHints, shape, sizeOrExtent, pos) {
    let shapeString = shape ? shape : "";
    let sizeOrExtentString = sizeOrExtent ? UtilFuncs_1.CssLengthMath.multiStyleToString(sizeOrExtent, " ") : "";
    let posString = pos ? `at ${UtilFuncs_1.positionToString(pos)}` : "";
    let whatAndWhere = shape || sizeOrExtentString || pos ? `${shapeString} ${sizeOrExtentString} ${posString},` : "";
    return `${name}(${whatAndWhere}${gradientStopsOrHintsToString(stopsOrHints, UtilFuncs_1.CssPercentMath)})`;
}
function conicGradientToString(name, stopsOrHints, angle, pos) {
    let angleString = angle ? `from ${UtilFuncs_1.CssAngleMath.styleToString(angle)}` : "";
    let posString = pos ? `at ${UtilFuncs_1.positionToString(pos)}` : "";
    let whatAndWhere = angle || pos ? `${angleString} ${posString},` : "";
    return `${name}(${whatAndWhere}${gradientStopsOrHintsToString(stopsOrHints, UtilFuncs_1.CssAngleMath)})`;
}
function crossFadeToString(args) {
    let paramsString = UtilFuncs_1.valueToString(args, {
        arrayItemFunc: crossFadeParamToString,
        arraySeparator: ","
    });
    return `cross-fade(${paramsString})`;
}
function gradientStopsOrHintsToString(val, mathClass) {
    return val.map(v => gradientStopOrHintToString(v, mathClass)).join(",");
}
function gradientStopOrHintToString(val, mathClass) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: ColorFuncs_1.colorToString,
        fromArray: v => v.length === 0 ? "" : v.length === 1 ? mathClass.styleToString(v[0]) :
            gradientColorAndLengthToString(v, mathClass)
    });
}
function gradientColorAndLengthToString(val, mathClass) {
    let secondStop = val.length > 2 ? mathClass.styleToString(val[2]) : "";
    return `${ColorFuncs_1.colorToString(val[0])} ${mathClass.styleToString(val[1])} ${secondStop}`;
}
function crossFadeParamToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => `${UtilFuncs_1.valueToString(v[0])},${UtilFuncs_1.CssPercentMath.styleToString(v[1])}`
    });
}


/***/ }),

/***/ "./lib/api/RuleAPI.js":
/*!****************************!*\
  !*** ./lib/api/RuleAPI.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RuleTypes = __webpack_require__(/*! ../rules/RuleTypes */ "./lib/rules/RuleTypes.js");
const RuleContainerFuncs = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
const StyleRules_1 = __webpack_require__(/*! ../rules/StyleRules */ "./lib/rules/StyleRules.js");
const AnimationRule_1 = __webpack_require__(/*! ../rules/AnimationRule */ "./lib/rules/AnimationRule.js");
const VarRule_1 = __webpack_require__(/*! ../rules/VarRule */ "./lib/rules/VarRule.js");
const CounterRules_1 = __webpack_require__(/*! ../rules/CounterRules */ "./lib/rules/CounterRules.js");
const MiscRules_1 = __webpack_require__(/*! ../rules/MiscRules */ "./lib/rules/MiscRules.js");
const GroupRules_1 = __webpack_require__(/*! ../rules/GroupRules */ "./lib/rules/GroupRules.js");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * Creates new abstract rule, which defines a styleset that can be extended by other style
 * rules. Abstract rules don't have selectors and are not inserted into DOM.
 */
function $abstract(style) {
    return new StyleRules_1.AbstractRule(style);
}
exports.$abstract = $abstract;
/**
 * Creates new class rule. The class name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another class rule. The function can be called without parameters just to "declare"
 * the class. Such class can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $class(style, nameOverride) {
    return new StyleRules_1.ClassRule(style, nameOverride);
}
exports.$class = $class;
/**
 * Creates new ID rule. The ID name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another ID rule. The function can be called without parameters just to "declare"
 * the ID. Such ID can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $id(style, nameOverride) {
    return new StyleRules_1.IDRule(style, nameOverride);
}
exports.$id = $id;
/**
 * Creates new selector rule. Selector can be specified as a string or via the selector function.
 */
function $style(selector, style) {
    return new StyleRules_1.SelectorRule(selector, style);
}
exports.$style = $style;
/**
 * Creates new animation rule. The animation name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another animation rule. The function can be called without parameters just to
 * "declare" the animation. Such animation can be later used either in conditional grouping rules
 * or in derived style definition classes.
 */
function $keyframes(frames, nameOverride) {
    return new AnimationRule_1.AnimationRule(frames, nameOverride);
}
exports.$keyframes = $keyframes;
/**
 * Creates new custom variable object that defines a custom CSS property. The variable name will
 * be created when the rule is processed as part of the style definition class. The name can be
 * also overridden by providing either an explicit name or another custom variable rule. The
 * function can be called without specifying the value just to "declare" the variable. Such
 * variable can be later used either in conditional grouping rules or in derived style definition
 * classes.
 */
function $var(template, propVal, nameOverride) {
    return new VarRule_1.VarRule(template, propVal, nameOverride);
}
exports.$var = $var;
/**
 * Creates new counter object. The counter name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another counter rule.
 */
function $counter(nameOverride) {
    return new CounterRules_1.CounterRule(nameOverride);
}
exports.$counter = $counter;
/**
 * Creates new import rule.
 */
function $import(url, mediaQuery, supportsQuery) {
    return new MiscRules_1.ImportRule(url, mediaQuery, supportsQuery);
}
exports.$import = $import;
/**
 * Creates new font-face rule.
 */
function $fontface(fontface) {
    return new MiscRules_1.FontFaceRule(fontface);
}
exports.$fontface = $fontface;
/**
 * Creates new namespace rule.
 */
function $namespace(namespace, prefix) {
    return new MiscRules_1.NamespaceRule(namespace, prefix);
}
exports.$namespace = $namespace;
/**
 * Creates new page rule.
 */
function $page(pseudoClass, style) {
    return new MiscRules_1.PageRule(pseudoClass, style);
}
exports.$page = $page;
/**
 * Creates new supports rule.
 */
function $supports(query, instanceOrClass) {
    return new GroupRules_1.SupportsRule(query, instanceOrClass);
}
exports.$supports = $supports;
/**
 * Creates new media rule.
 */
function $media(query, instanceOrClass) {
    return new GroupRules_1.MediaRule(query, instanceOrClass);
}
exports.$media = $media;
/**
 * Processes the given style definition class or instance and creates unique names for all named
 * entities. For a given style definition class only a single instance is created, no matter how
 * many times this function is invoked. However, if an instance, which has not yet been processed,
 * is passed, then a new set of unique names will be created for it.
 */
function $use(instanceOrClass) {
    return RuleContainerFuncs.processInstanceOrClass(instanceOrClass);
}
exports.$use = $use;
/**
 * Embeds the given style definition class into another style definition object. When activated,
 * the embedded object doesn't create its own `<style>` element but uses that of its owner. This
 * allows creating many small style definition classes instead of one huge one without incurring
 * the overhead of many `<style>` elements.
 *
 * Note that as opposed to the $use function, the $embed function always creates a new instance of
 * the given class and doesn't associate the class with the created instance. That means that if
 * a class is embedded into more than one "owner", two separate instances of each CSS rule will be
 * created with different unique names.
 */
function $embed(instanceOrClass) {
    // return definition instance without processing it. This is the indication that the defintion
    // will be embedded into another definition.
    return instanceOrClass instanceof RuleTypes.StyleDefinition
        ? instanceOrClass
        : new instanceOrClass();
}
exports.$embed = $embed;
/**
 * Activates the given style definition class or instance and inserts all its rules into DOM. If
 * the input object is not an instance but a class, which is not yet associated with an instance,
 * the instance is first created and processed. Note that each style definition instance maintains
 * a reference counter of how many times it was activated and deactivated. The rules are inserted
 * into DOM only upon first activation.
 */
function $activate(instanceOrClass) {
    return RuleContainerFuncs.activate(instanceOrClass);
}
exports.$activate = $activate;
/**
 * Deactivates the given style definition instance by removing its rules from DOM. Note that each
 * style definition instance maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes down to 0.
 */
function $deactivate(instance) {
    return RuleContainerFuncs.deactivate(instance);
}
exports.$deactivate = $deactivate;
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
function enableShortNames(enable, prefix) {
    return RuleContainerFuncs.enableShortNames(enable, prefix);
}
exports.enableShortNames = enableShortNames;
/**
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `class` property of an HTML element.
 * @param classes
 */
function classes(...classes) {
    return UtilFuncs_1.valueToString(classes, {
        arrayItemFunc: v => v instanceof StyleRules_1.ClassRule ? v.name : UtilFuncs_1.valueToString(v)
    });
}
exports.classes = classes;


/***/ }),

/***/ "./lib/api/StyleAPI.js":
/*!*****************************!*\
  !*** ./lib/api/StyleAPI.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * Returns a string representation of a selector. This function is a tag function and must be
 * invoked with the template string without parentheses.
 */
function selector(parts, ...params) {
    return () => UtilFuncs_1.templateStringToString(parts, params);
}
exports.selector = selector;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Styleset manipulation
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given value corresponding to the given style property to a CSS string.
 * @param stylePropName Style property name that determines how the value should be converted
 * to a CSS compliant string.
 * @param stylePropValue Value to convert.
 */
function getStylePropValue(stylePropName, stylePropValue) {
    return StyleFuncs_1.stylePropToString(stylePropName, stylePropValue, true);
}
exports.getStylePropValue = getStylePropValue;
/**
 * Sets values of the style properties from the given Styleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset Styleset object which provides values for style properties.
 */
function setElementStyle(elm, styleset) {
    if (!styleset)
        elm.removeAttribute("style");
    else {
        let elmStyle = elm.style;
        StyleFuncs_1.forAllPropsInStylset(styleset, (name, value) => { elmStyle.setProperty(UtilFuncs_1.camelToDash(name), value); });
    }
}
exports.setElementStyle = setElementStyle;
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset StringStyleset object which provides values for style properties.
 */
function setElementStringStyle(elm, styleset) {
    if (!styleset)
        elm.removeAttribute("style");
    else {
        let style = elm.style;
        for (let propName in styleset)
            style[propName] = styleset[propName];
    }
}
exports.setElementStringStyle = setElementStringStyle;
/**
 * Converts the given [[Styleset]] object into an object, where each Styleset's property is
 * converted to its string value.
 * @param styleset
 */
function stylesetToStringStyleset(styleset) {
    let res = {};
    StyleFuncs_1.forAllPropsInStylset(styleset, (name, value) => { res[name] = value; });
    return res;
}
exports.stylesetToStringStyleset = stylesetToStringStyleset;
/**
 * Compares two Styleset objects by converting style properties to strings and returns an object
 * that contains string values of properties that were new or have different values in the new
 * styleset and undefined values for properties that exist in the old styleset but don't exist
 * in the new one.
 * @param oldStyleset
 * @param newStyleset
 * @returns StringStyleset object with properties that have different values in the old and new
 * stylesets. Properties that existed in the old but don't exist in the new styleset, will have
 * their values set to undefined. If there is no differences between the two stylesets null is
 * returned.
 */
function diffStylesets(oldStyleset, newStyleset) {
    if (!oldStyleset && !newStyleset)
        return null;
    else if (!oldStyleset)
        return stylesetToStringStyleset(newStyleset);
    else if (!newStyleset)
        return stylesetToStringStyleset(oldStyleset);
    // first convert both stylesets to their string versions
    let oldStringStyleset = stylesetToStringStyleset(oldStyleset);
    let newStringStyleset = stylesetToStringStyleset(newStyleset);
    let updateVal = null;
    // loop over keys in the old style object and find those that are not in the new one. These
    // will be removed.
    for (let key in oldStringStyleset) {
        let newStringVal = newStringStyleset[key];
        if (newStringVal == null) {
            updateVal = updateVal || {};
            updateVal[key] = undefined;
        }
        else {
            let oldStringVal = oldStringStyleset[key];
            if (oldStringVal !== newStringVal) {
                updateVal = updateVal || {};
                updateVal[key] = newStringVal;
            }
        }
    }
    // loop over keys in the new style object and find those that are not in the old one. These
    // will be added.
    for (let key in newStringStyleset) {
        let oldStringVal = oldStringStyleset[key];
        if (oldStringVal == null) {
            updateVal = updateVal || {};
            updateVal[key] = newStringStyleset[key];
        }
    }
    return updateVal;
}
exports.diffStylesets = diffStylesets;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Filters
//
///////////////////////////////////////////////////////////////////////////////////////////////
// Helper function converting percent value to invocation of the given CSS function.
function percentFilter(name, amount) {
    return () => `${name}(${UtilFuncs_1.CssPercentMath.styleToString(amount)})`;
}
/**
 * Returns an FilterProxy function representing the `brightness()` CSS function.
 */
function brightness(amount) {
    return percentFilter("brightness", amount);
}
exports.brightness = brightness;
/**
 * Returns an FilterProxy function representing the `contrast()` CSS function.
 */
function contrast(amount) {
    return percentFilter("contrast", amount);
}
exports.contrast = contrast;
/**
 * Returns an FilterProxy function representing the `grayscale()` CSS function.
 */
function grayscale(amount) {
    return percentFilter("grayscale", amount);
}
exports.grayscale = grayscale;
/**
 * Returns an FilterProxy function representing the `invert()` CSS function.
 */
function invert(amount) {
    return percentFilter("invert", amount);
}
exports.invert = invert;
/**
 * Returns an FilterProxy function representing the `opacity()` CSS function.
 */
function opacity(amount) {
    return percentFilter("opacity", amount);
}
exports.opacity = opacity;
/**
 * Returns an FilterProxy function representing the `saturate()` CSS function.
 */
function saturate(amount) {
    return percentFilter("saturate", amount);
}
exports.saturate = saturate;
/**
 * Returns an FilterProxy function representing the `sepia()` CSS function.
 */
function sepia(amount) {
    return percentFilter("sepia", amount);
}
exports.sepia = sepia;
/**
 * Returns an FilterProxy function representing the `blur()` CSS function.
 */
function blur(radius) {
    return () => `blur(${UtilFuncs_1.CssLengthMath.styleToString(radius)})`;
}
exports.blur = blur;
/**
 * Returns an FilterProxy function representing the `dropShadow()` CSS function.
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow.
 * @param blur Value of the shadow's blurring. The default value is 1 pixel.
 * @param spread Value of the shadow's spreading. The default value is 0.
 * @param inset Flag indicating whether the shadow goes inside the shape. The default value is false.
 */
function dropShadow(x, y, color, blur, spread) {
    return () => `drop-shadow(${StyleFuncs_1.singleBoxShadow_fromObject({ x, y, color, blur, spread })})`;
}
exports.dropShadow = dropShadow;
/**
 * Returns an FilterProxy function representing the `hue-rotate()` CSS function.
 */
function hueRotate(amount) {
    return () => `hue-rotate(${UtilFuncs_1.CssPercentMath.styleToString(amount)})`;
}
exports.hueRotate = hueRotate;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Basic shapes
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an BasicShapeProxy function representing the `inset()` CSS function.
 */
function inset(offset, radius) {
    let r = radius != null ? "round " + StyleFuncs_1.borderRadiusToString(radius) : "";
    return () => `inset(${UtilFuncs_1.CssLengthMath.multiStyleToString(offset, " ")}${r})`;
}
exports.inset = inset;
/**
 * Returns an BasicShapeProxy function representing the `circle()` CSS function.
 */
function circle(center, position) {
    let c = center != null ? UtilFuncs_1.CssLengthMath.styleToString(center) : "";
    let pos = position != null ? " at " + UtilFuncs_1.positionToString(position) : "";
    return () => `circle(${c}${pos})`;
}
exports.circle = circle;
/**
 * Returns an BasicShapeProxy function representing the `ellipse()` CSS function.
 */
function ellipse(rx, ry, position) {
    let rxs = rx != null ? UtilFuncs_1.CssLengthMath.styleToString(rx) : "";
    let rys = ry != null ? " " + UtilFuncs_1.CssLengthMath.styleToString(ry) : "";
    let pos = position != null ? " at " + UtilFuncs_1.positionToString(position) : "";
    return () => `ellipse(${rxs}${rys}${pos})`;
}
exports.ellipse = ellipse;
/**
 * Returns an BasicShapeProxy function representing the `polygon()` CSS function.
 */
function polygon(pointOrRule, ...points) {
    return () => {
        let s = "polygon(";
        if (typeof pointOrRule === "string")
            s += pointOrRule + ",";
        else
            s += `${UtilFuncs_1.CssLengthMath.multiStyleToString(pointOrRule, " ")},`;
        s += points.map(pt => UtilFuncs_1.CssLengthMath.multiStyleToString(pt, " ")).join(",");
        return s + ")";
    };
}
exports.polygon = polygon;
/**
 * Returns an RayProxy function representing the `ray()` CSS function.
 */
function ray(angle, size, contain) {
    return () => {
        let angleString = UtilFuncs_1.CssAngleMath.styleToString(angle);
        let sizeString = size = !null ? "," + UtilFuncs_1.CssLengthMath.styleToString(size) : "";
        let containString = contain ? ",contain" : "";
        return `ray(${angleString}${sizeString}${containString})`;
    };
}
exports.ray = ray;
/**
 * Returns an BasicShapeProxy function representing the `polygon()` CSS function.
 */
function path(fillRule) {
    return new PathBuilder(fillRule);
}
exports.path = path;
/**
 * The IPathBuilder interface represents the object that accumulates path commands that are then
 * converted to a string parameter of the CSS `path()` function.
 */
class PathBuilder {
    constructor(fillRule) {
        this.buf = "path(";
        if (fillRule)
            this.buf += fillRule + ",";
        this.buf += "'";
    }
    // Returns the accumulated string
    valueToString() { return this.buf + "')"; }
    // Move-to command with absolute coordinates.
    items(command, ...items) {
        this.buf += " " + command;
        for (let item of items) {
            if (typeof item === "number")
                this.buf += " " + item;
            else {
                for (let subItem of item)
                    this.buf += " " + subItem;
            }
        }
        return this;
    }
    M(first, ...next) { return this.items("M", first, ...next); }
    m(first, ...next) { return this.items("m", first, ...next); }
    L(first, ...next) { return this.items("L", first, ...next); }
    l(first, ...next) { return this.items("l", first, ...next); }
    H(first, ...next) { return this.items("H", first, ...next); }
    h(first, ...next) { return this.items("h", first, ...next); }
    V(first, ...next) { return this.items("V", first, ...next); }
    v(first, ...next) { return this.items("v", first, ...next); }
    C(first, ...next) { return this.items("C", first, ...next); }
    c(first, ...next) { return this.items("c", first, ...next); }
    S(first, ...next) { return this.items("S", first, ...next); }
    s(first, ...next) { return this.items("s", first, ...next); }
    Q(first, ...next) { return this.items("Q", first, ...next); }
    q(first, ...next) { return this.items("q", first, ...next); }
    T(first, ...next) { return this.items("T", first, ...next); }
    t(first, ...next) { return this.items("t", first, ...next); }
    A(first, ...next) { return this.items("A", first, ...next); }
    a(first, ...next) { return this.items("a", first, ...next); }
    z() { this.buf += " z"; return this; }
}
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Transforms
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an TransformProxy function representing the `matrix()` CSS function.
 */
function matrix(a, b, c, d, tx, ty) {
    return () => `matrix(${UtilFuncs_1.arrayToString([a, b, c, d, tx, ty], undefined, ",")})`;
}
exports.matrix = matrix;
/**
 * Returns an TransformProxy function representing the `matrix3d()` CSS function.
 */
function matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
    return () => `matrix(${UtilFuncs_1.arrayToString([a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4], undefined, ",")})`;
}
exports.matrix3d = matrix3d;
/**
 * Returns an TransformProxy function representing the `perspective()` CSS function.
 */
function perspective(d) {
    return () => `perspective(${UtilFuncs_1.CssLengthMath.styleToString(d)})`;
}
exports.perspective = perspective;
/**
 * Returns an TransformProxy function representing the given CSS rotation function.
 */
function rotateImpl(name, a) {
    return () => `${name}(${UtilFuncs_1.CssAngleMath.styleToString(a)})`;
}
/**
 * Returns an TransformProxy function representing the `rotate()` CSS function.
 */
function rotate(a) {
    return rotateImpl("rotate", a);
}
exports.rotate = rotate;
/**
 * Returns an TransformProxy function representing the `rotateX()` CSS function.
 */
function rotateX(a) {
    return rotateImpl("rotateX", a);
}
exports.rotateX = rotateX;
/**
 * Returns an TransformProxy function representing the `rotateY()` CSS function.
 */
function rotateY(a) {
    return rotateImpl("rotateY", a);
}
exports.rotateY = rotateY;
/**
 * Returns an TransformProxy function representing the `rotateZ()` CSS function.
 */
function rotateZ(a) {
    return rotateImpl("rotateZ", a);
}
exports.rotateZ = rotateZ;
/**
 * Returns an TransformProxy function representing the `rotate3d()` CSS function.
 */
function rotate3d(x, y, z, a) {
    let v = [UtilFuncs_1.CssNumberMath.styleToString(x), UtilFuncs_1.CssNumberMath.styleToString(y),
        UtilFuncs_1.CssNumberMath.styleToString(z), UtilFuncs_1.CssAngleMath.styleToString(a)].join(",");
    return () => `rotate3d(${v})`;
}
exports.rotate3d = rotate3d;
/**
 * Returns an TransformProxy function representing the `scale()` CSS function.
 */
function scale(cx, sy) {
    return () => `scale(${UtilFuncs_1.CssNumberMath.styleToString(cx)}${sy != null ? "," + UtilFuncs_1.CssNumberMath.styleToString(sy) : ""})`;
}
exports.scale = scale;
/**
 * Returns an TransformProxy function representing the given scale CSS function.
 */
function scaleImpl(name, s) {
    return () => `${name}(${UtilFuncs_1.CssNumberMath.styleToString(s)})`;
}
/**
 * Returns an TransformProxy function representing the `scaleX()` CSS function.
 */
function scaleX(s) {
    return scaleImpl("scaleX", s);
}
exports.scaleX = scaleX;
/**
 * Returns an TransformProxy function representing the `scaleY()` CSS function.
 */
function scaleY(s) {
    return scaleImpl("scaleY", s);
}
exports.scaleY = scaleY;
/**
 * Returns an TransformProxy function representing the `scaleZ()` CSS function.
 */
function scaleZ(s) {
    return scaleImpl("scaleZ", s);
}
exports.scaleZ = scaleZ;
/**
 * Returns an TransformProxy function representing the `scale3d()` CSS function.
 */
function scale3d(sx, sy, sz) {
    let v = [UtilFuncs_1.CssNumberMath.styleToString(sx), UtilFuncs_1.CssNumberMath.styleToString(sy),
        UtilFuncs_1.CssNumberMath.styleToString(sz)].join(",");
    return () => `scale3d(${v})`;
}
exports.scale3d = scale3d;
/**
 * Returns an TransformProxy function representing the `skew()` CSS function.
 */
function skew(ax, ay) {
    return () => `skew(${UtilFuncs_1.CssAngleMath.styleToString(ax)}${ay != null ? "," + UtilFuncs_1.CssAngleMath.styleToString(ay) : ""})`;
}
exports.skew = skew;
/**
 * Returns an TransformProxy function representing the `skewX()` CSS function.
 */
function skewX(ax) {
    return () => `skewX(${UtilFuncs_1.CssAngleMath.styleToString(ax)})`;
}
exports.skewX = skewX;
/**
 * Returns an TransformProxy function representing the `skewY()` CSS function.
 */
function skewY(ay) {
    return () => `skewX(${UtilFuncs_1.CssAngleMath.styleToString(ay)})`;
}
exports.skewY = skewY;
/**
 * Returns an TransformProxy function representing the `translate()` CSS function.
 */
function translate(x, y) {
    return () => `translate(${UtilFuncs_1.CssLengthMath.styleToString(x)}${y != null ? "," + UtilFuncs_1.CssLengthMath.styleToString(y) : ""})`;
}
exports.translate = translate;
/**
 * Returns an TransformProxy function representing the given translate CSS function.
 */
function translateImpl(name, s) {
    return () => `${name}(${UtilFuncs_1.CssLengthMath.styleToString(s)})`;
}
/**
 * Returns an TransformProxy function representing the `translateX()` CSS function.
 */
function translateX(x) {
    return translateImpl("translateX", x);
}
exports.translateX = translateX;
/**
 * Returns an TransformProxy function representing the `translateY()` CSS function.
 */
function translateY(y) {
    return translateImpl("translateY", y);
}
exports.translateY = translateY;
/**
 * Returns an TransformProxy function representing the `translateZ()` CSS function.
 */
function translateZ(z) {
    return translateImpl("translateZ", z);
}
exports.translateZ = translateZ;
/**
 * Returns an TransformProxy function representing the `translate3d()` CSS function.
 */
function translate3d(x, y, z) {
    let v = [UtilFuncs_1.CssLengthMath.styleToString(x), UtilFuncs_1.CssLengthMath.styleToString(y),
        UtilFuncs_1.CssLengthMath.styleToString(z)].join(",");
    return () => `translate3d(${v})`;
}
exports.translate3d = translate3d;


/***/ }),

/***/ "./lib/api/UtilAPI.js":
/*!****************************!*\
  !*** ./lib/api/UtilAPI.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
/**
 * The Num object contains static methods that implement CSS mathematic functions on the `<number>`
 * CSS type. When arguments for these functions are of the number JavaScript type they are
 * converted to strings without appending any units to them.
 */
exports.Num = new UtilFuncs_1.CssNumberMath();
/**
 * The Len object contains static methods that implement CSS mathematic functions on the `<length>`
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
exports.Len = new UtilFuncs_1.CssLengthMath();
/**
 * The Angle object contains static methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
exports.Angle = new UtilFuncs_1.CssAngleMath();
/**
 * The Time object contains static methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
exports.Time = new UtilFuncs_1.CssTimeMath();
/**
 * The Resolution object contains static methods that implement CSS mathematic functions on the
 * `<resolution>` CSS type by appending a resolution unit suffix.
 * Integer numbers use "dpi"; floating point numbers use "dpcm".
 */
exports.Resolution = new UtilFuncs_1.CssResolutionMath();
/**
 * The Frequency object contains static methods that implement CSS mathematic functions on the
 * `<frequency>` CSS type by appending a frequency unit suffix.
 * Integer numbers use "Hz"; floating point numbers use "kHz".
 */
exports.Frequency = new UtilFuncs_1.CssFrequencyMath();
/**
 * The Percent object contains static methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type by appending a "%" unit suffix.
 */
exports.Percent = new UtilFuncs_1.CssPercentMath();
///////////////////////////////////////////////////////////////////////////////////////////////
//
// raw()
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a StringProxy function encapsulating the given string-like parameter. This function
 * allows specifying arbitrary text for properties whose type normally doesn't allow strings.
 * This is used as an "escape hatch" when a string value already exists and there is no sense
 * to convert it to a proper type. This function is a tag function and must be invoked with
 * the template string without parentheses.
 */
function raw(parts, ...params) {
    return () => UtilFuncs_1.templateStringToString(parts, params);
}
exports.raw = raw;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// usevar()
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a StringProxy function representing the invocation of the `var()` CSS function for
 * the given custom CSS property with optional fallbacks.
 */
function usevar(varObj, fallback) {
    return () => fallback
        ? `var(--${varObj.name},${StyleFuncs_1.stylePropToString(varObj.template, fallback, true)})`
        : `var(--${varObj.name})`;
}
exports.usevar = usevar;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// url()
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a UrlProxy function representing the CSS `url()` function. The string parameter
 * will be wrapped in a "url()" invocation. The function can also accept the IIDRule object to
 * create url(#element) invocation, whcih is often used to address SVG elements by their IDs.
 */
function url(val) {
    return () => `url(${UtilFuncs_1.valueToString(val)})`;
}
exports.url = url;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Counters
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a StringProxy function representing the CSS `counter()` function with additional
 * optional strings added after and/or before the counter.
 */
function counter(counterObj, style, textAfter, textBefore) {
    return () => {
        let styleString = style ? `,${UtilFuncs_1.valueToString(style)}` : "";
        let before = textBefore ? `"${UtilFuncs_1.valueToString(textBefore)}"` : "";
        let after = textAfter ? `"${UtilFuncs_1.valueToString(textAfter)}"` : "";
        return `${before} counter(${UtilFuncs_1.valueToString(counterObj)}${styleString}) ${after}`;
    };
}
exports.counter = counter;
/**
 * Returns a StringProxy function representing the CSS `countesr()` function with the given
 * separator string and additional optional strings added after and/or before the counter.
 */
function counters(counterObj, separator, style, textAfter, textBefore) {
    return () => {
        let sepString = separator ? `"${UtilFuncs_1.valueToString(separator)}"` : `"."`;
        let styleString = style ? `,${UtilFuncs_1.valueToString(style)}` : "";
        let before = textBefore ? `"${UtilFuncs_1.valueToString(textBefore)}"` : "";
        let after = textAfter ? `"${UtilFuncs_1.valueToString(textAfter)}"` : "";
        return `${before} counters(${UtilFuncs_1.valueToString(counterObj)},${sepString}${styleString}) ${after}`;
    };
}
exports.counters = counters;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// attr()
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the StringProxy function representing the `attr()` CSS function. It returns StringPropxy
 * and theoretically can be used in any style property; however, its use by browsers is currently
 * limited to the `content` property. Also no browser currently support type, units or fallback
 * values.
 */
function attr(attrName, typeOrUnit, fallback) {
    return () => `attr(${attrName}${typeOrUnit ? " " + typeOrUnit : ""}${fallback ? "," + fallback : ""})`;
}
exports.attr = attr;


/***/ }),

/***/ "./lib/mimcssTypes.js":
/*!****************************!*\
  !*** ./lib/mimcssTypes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimcss
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./styles/UtilTypes */ "./lib/styles/UtilTypes.js"));
__export(__webpack_require__(/*! ./styles/ColorTypes */ "./lib/styles/ColorTypes.js"));
__export(__webpack_require__(/*! ./rules/RuleTypes */ "./lib/rules/RuleTypes.js"));
__export(__webpack_require__(/*! ./api/UtilAPI */ "./lib/api/UtilAPI.js"));
__export(__webpack_require__(/*! ./api/ColorAPI */ "./lib/api/ColorAPI.js"));
__export(__webpack_require__(/*! ./api/ImageAPI */ "./lib/api/ImageAPI.js"));
__export(__webpack_require__(/*! ./api/StyleAPI */ "./lib/api/StyleAPI.js"));
__export(__webpack_require__(/*! ./api/RuleAPI */ "./lib/api/RuleAPI.js"));


/***/ }),

/***/ "./lib/rules/AnimationRule.js":
/*!************************************!*\
  !*** ./lib/rules/AnimationRule.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
const StyleRules_1 = __webpack_require__(/*! ./StyleRules */ "./lib/rules/StyleRules.js");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * The AnimationRule class describes a @keyframes CSS rule.
 */
class AnimationRule extends Rule_1.Rule {
    constructor(frames, nameOverride) {
        super();
        if (frames)
            this.frameRules = frames.map(frame => new AnimationFrameRule(frame[0], frame[1]));
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        [this.name, this.cssName] = Rule_1.createNames(owner, ruleName, this.nameOverride);
        for (let keyframeRule of this.frameRules)
            keyframeRule.process(owner, ruleName);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new AnimationRule(undefined, this.nameOverride);
        if (this.frameRules)
            newRule.frameRules = this.frameRules.map(frameRule => frameRule.clone());
        newRule.nameOverride = this.nameOverride;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (!this.frameRules)
            return;
        this.cssRule = Rule_1.Rule.addRuleToDOM(`@keyframes ${this.name} {}`, parent);
        let cssKeyframesRule = this.cssRule;
        for (let frameRule of this.frameRules) {
            try {
                cssKeyframesRule.appendRule(frameRule.toCssString());
                let cssRule = cssKeyframesRule.cssRules.item(cssKeyframesRule.cssRules.length - 1);
                if (cssRule)
                    frameRule.cssKeyframeRule = cssRule;
            }
            catch (x) {
                console.error("Cannot add CSS keyframe rule", x);
            }
        }
    }
    // This function is called to convert an object to a string. Animation rule returns its name.
    valueToString() {
        return this.name;
    }
}
exports.AnimationRule = AnimationRule;
/**
 * The AnimationFrameRule class represents a single keyframe clause in the animation rule.
 */
class AnimationFrameRule extends StyleRules_1.StyleRule {
    constructor(waypoint, styleset) {
        super(styleset);
        this.waypoint = waypoint;
    }
    // Creates a copy of the rule.
    cloneObject() {
        return new AnimationFrameRule(this.waypoint);
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return UtilFuncs_1.valueToString(this.waypoint, {
            fromNumber: v => v + "%",
            arrayItemFunc: v => UtilFuncs_1.valueToString(v, { fromNumber: v => v + "%" }),
            arraySeparator: ","
        });
    }
}


/***/ }),

/***/ "./lib/rules/CounterRules.js":
/*!***********************************!*\
  !*** ./lib/rules/CounterRules.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/**
 * The CounterRule class describes a named counter definition. Use this rule to create
 * counter objects that can be used in counter-increment, counter-reset and counter-set style
 * properties. No CSS rule is created for counters - they are needed only to provide type-safe
 * counter definitions.
 */
class CounterRule {
    constructor(nameOverride) {
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        this.container = container;
        [this.name] = Rule_1.createNames(owner, ruleName, this.nameOverride);
    }
    // Creates a copy of the rule.
    clone() {
        return new CounterRule(this.nameOverride);
    }
    // The valueToString function is used when the object is specified as a value of a style property.
    // We return the counter name.
    valueToString() {
        return this.name;
    }
    /** Name of the counter */
    get counterName() { return this.name; }
}
exports.CounterRule = CounterRule;


/***/ }),

/***/ "./lib/rules/GroupRules.js":
/*!*********************************!*\
  !*** ./lib/rules/GroupRules.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RuleContainer_1 = __webpack_require__(/*! ./RuleContainer */ "./lib/rules/RuleContainer.js");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
const MediaFuncs_1 = __webpack_require__(/*! ../styles/MediaFuncs */ "./lib/styles/MediaFuncs.js");
/**
 * The GroupRule class serves as a base class for all grouping CSS rules.
 */
class GroupRule extends Rule_1.Rule {
    constructor(instanceOrClass) {
        super();
        this.instanceOrClass = instanceOrClass;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        let instance = RuleContainer_1.processInstanceOrClass(this.instanceOrClass, owner.getDefinitionInstance());
        if (!instance)
            return;
        this.instance = instance;
        this.ruleContainer = RuleContainer_1.getContainerFromDefinition(instance);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (!this.ruleContainer)
            return;
        let selector = this.getGroupSelectorText();
        if (!selector)
            return;
        this.cssRule = Rule_1.Rule.addRuleToDOM(`${selector} {}`, parent);
        // insert sub-rules
        if (this.cssRule)
            this.ruleContainer.insertRules(this.cssRule);
    }
    // Clers the CSS rule object.
    clear() {
        super.clear();
        // clear sub-rules
        if (this.ruleContainer)
            this.ruleContainer.clearRules();
    }
    // Instance of the style definition class defining the rules under this grouping rule
    get rules() { return this.instance; }
}
exports.GroupRule = GroupRule;
/**
 * The SupportRule class describes a CSS @supports rule.
 */
class SupportsRule extends GroupRule {
    constructor(query, instanceOrClass) {
        super(instanceOrClass);
        this.query = query;
    }
    // Creates a copy of the rule.
    clone() {
        return new SupportsRule(this.query, this.instanceOrClass);
    }
    // Returns the selector string of this grouping rule.
    getGroupSelectorText() {
        // convert the query to its string form
        let queryString = StyleFuncs_1.supportsQueryToString(this.query);
        // determine whether the query is supported and if it is not, don't insert the rule
        return CSS.supports(queryString) ? `@supports ${queryString}` : null;
    }
}
exports.SupportsRule = SupportsRule;
/**
 * The MediaRule class describes a CSS @media rule.
 */
class MediaRule extends GroupRule {
    constructor(query, instanceOrClass) {
        super(instanceOrClass);
        this.query = query;
    }
    // Creates a copy of the rule.
    clone() {
        return new MediaRule(this.query, this.instanceOrClass);
    }
    // Returns the selector string of this grouping rule.
    getGroupSelectorText() {
        let queryString = typeof this.query === "string" ? this.query : MediaFuncs_1.mediaQueryToString(this.query);
        return `@media ${queryString}`;
    }
}
exports.MediaRule = MediaRule;


/***/ }),

/***/ "./lib/rules/MiscRules.js":
/*!********************************!*\
  !*** ./lib/rules/MiscRules.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FontFaceFuncs_1 = __webpack_require__(/*! ../styles/FontFaceFuncs */ "./lib/styles/FontFaceFuncs.js");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
const MediaFuncs_1 = __webpack_require__(/*! ../styles/MediaFuncs */ "./lib/styles/MediaFuncs.js");
const StyleRules_1 = __webpack_require__(/*! ./StyleRules */ "./lib/rules/StyleRules.js");
/**
 * The FontFaceRule class describes a @font-face CSS rule.
 */
class FontFaceRule extends Rule_1.Rule {
    constructor(fontface) {
        super();
        this.fontface = fontface;
    }
    // Creates a copy of the rule.
    clone() {
        return new FontFaceRule(this.fontface);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        this.cssRule = Rule_1.Rule.addRuleToDOM(`@font-face ${FontFaceFuncs_1.fontFaceToString(this.fontface)}`, parent);
    }
}
exports.FontFaceRule = FontFaceRule;
/**
 * The ImportRule class describes a CSS @import rule.
 */
class ImportRule extends Rule_1.Rule {
    constructor(url, mediaQuery, supportsQuery) {
        super();
        this.url = url;
        this.mediaQuery = mediaQuery;
        this.supportsQuery = supportsQuery;
    }
    // Creates a copy of the rule.
    clone() {
        return new ImportRule(this.url, this.mediaQuery, this.supportsQuery);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        let url;
        if (!this.url)
            return;
        else if (this.url.startsWith("url") || this.url.startsWith("\"") || this.url.startsWith("'"))
            url = this.url;
        else
            url = `url(${this.url})`;
        let supportsQueryString = !this.supportsQuery
            ? ""
            : typeof this.supportsQuery === "string"
                ? this.supportsQuery
                : StyleFuncs_1.supportsQueryToString(this.supportsQuery);
        if (supportsQueryString && !supportsQueryString.startsWith("supports"))
            supportsQueryString = `supports( ${supportsQueryString} )`;
        let mediaQueryString = !this.mediaQuery
            ? ""
            : typeof this.mediaQuery === "string"
                ? this.mediaQuery
                : MediaFuncs_1.mediaQueryToString(this.mediaQuery);
        this.cssRule = Rule_1.Rule.addRuleToDOM(`@import ${url} ${supportsQueryString} ${mediaQueryString}`, parent);
    }
}
exports.ImportRule = ImportRule;
/**
 * The PageRule class represents the CSS @page rule.
 */
class PageRule extends StyleRules_1.StyleRule {
    constructor(pseudoClass, style) {
        super(style);
        this.pseudoClass = pseudoClass;
    }
    // Creates a copy of the rule.
    cloneObject() {
        return new PageRule(this.pseudoClass);
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return `@page ${this.pseudoClass ? this.pseudoClass : ""}`;
    }
}
exports.PageRule = PageRule;
/**
 * The NamespaceRule class describes a CSS @namespace rule.
 */
class NamespaceRule extends Rule_1.Rule {
    constructor(namespace, prefix) {
        super();
        this.namespace = namespace;
        this.prefix = prefix;
    }
    // Creates a copy of the rule.
    clone() {
        return new NamespaceRule(this.namespace, this.prefix);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (!this.namespace)
            return;
        let url = this.namespace.startsWith("url(") ? this.namespace : `url(${this.namespace})`;
        this.cssRule = Rule_1.Rule.addRuleToDOM(`@namespace ${this.prefix ? this.prefix : ""} ${url}`, parent);
    }
}
exports.NamespaceRule = NamespaceRule;


/***/ }),

/***/ "./lib/rules/Rule.js":
/*!***************************!*\
  !*** ./lib/rules/Rule.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Rule class is used as a base class for all rules. As a parent of RuleContainer, the Rule
 * class is also an ancestor for Stylesheet; however, most of its the fields are undefined in
 * te Stylesheet instances.
 */
class Rule {
    // Processes the rule.
    process(owner, ruleName) {
        this.owner = owner;
        this.ruleName = ruleName;
    }
    // Inserts this rule into the given parent rule or stylesheet. This method is called when the
    // style definition class, to which this rule belongs, is activated.
    insert(parent) { }
    // Clers the CSS rule object. This method is called when the style definition class, to which
    // this rule belongs, is deactivated.
    clear() { this.cssRule = null; }
    // Inserts the given rule into the given parent rule or stylesheet.
    static addRuleToDOM(ruleText, parent) {
        try {
            let index = parent.insertRule(ruleText, parent.cssRules.length);
            return parent.cssRules[index];
        }
        catch (x) {
            console.error(`Cannot add CSS rule '${ruleText}'`, x);
            return null;
        }
    }
}
exports.Rule = Rule;
/** Creates scoped names based on the given parameters */
function createNames(owner, ruleName, nameOverride, cssPrefix) {
    if (!ruleName && !nameOverride)
        return ["", ""];
    let name = !nameOverride
        ? owner.getScopedRuleName(ruleName)
        : typeof nameOverride === "string"
            ? nameOverride
            : nameOverride.name;
    return !cssPrefix
        ? [name, name]
        : name.startsWith(cssPrefix)
            ? [name.substr(cssPrefix.length), name]
            : [name, cssPrefix + name];
}
exports.createNames = createNames;


/***/ }),

/***/ "./lib/rules/RuleContainer.js":
/*!************************************!*\
  !*** ./lib/rules/RuleContainer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RuleTypes_1 = __webpack_require__(/*! ./RuleTypes */ "./lib/rules/RuleTypes.js");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
const VarRule_1 = __webpack_require__(/*! ./VarRule */ "./lib/rules/VarRule.js");
const CounterRules_1 = __webpack_require__(/*! ./CounterRules */ "./lib/rules/CounterRules.js");
const MiscRules_1 = __webpack_require__(/*! ./MiscRules */ "./lib/rules/MiscRules.js");
// Define symbols that are used for keeping important information on the style definition
// instances that we don't want to be visible to developers.
/** Property on the style definition class pointing to the singlton instance. */
const symInstance = Symbol("definition");
/**
 * Property on the style definition instance pointing to the RuleContainer object that is
 * responsible for processing rules.
 */
const symRuleContainer = Symbol("ruleContainer");
/**
 * The RuleContainer class is a shadow structure that accompanies every processed style definition
 * object. Since StyleDefinition class is an exported class visible to developers, we don't want
 * to have a lot of functionality in it. The RuleContainer object is linked to the StyleDefinition
 * object via the [symRuleContainer] symbol. It contains all the functionality for parsing rule
 * definitions, name assignment and activation/deactivation.
 */
class RuleContainer {
    constructor(instance, name, embeddingContainer) {
        this.instance = instance;
        this.name = name;
        this.embeddingContainer = embeddingContainer;
        this.definitionClass = instance.constructor;
        this.owner = instance.owner;
        this.activationRefCount = 0;
        this.domStyleElm = null;
        this.process();
    }
    // Processes the properties of the style definition instance. This creates names for classes,
    // IDs, animations and custom variables.
    process() {
        // put reference to this container in the symbol property of the definition instance.
        this.instance[symRuleContainer] = this;
        // if the owner taken from the instance is null (that is, this is a top-level definition),
        // change our owner property to point to the instance itself
        if (!this.owner) {
            this.owner = this.instance;
            this.topLevelContainer = this;
        }
        else
            this.topLevelContainer = this.owner[symRuleContainer];
        // if our container is not the top-level container, prefix our name with the upper one
        if (!this.isTopLevel && this.topLevelContainer)
            this.name = `${this.topLevelContainer.name}_${this.name}`;
        this.imports = [];
        this.namespaces = [];
        this.vars = [];
        this.refs = [];
        this.otherRules = [];
        // loop over the properties of the definition object and process them.
        for (let propName in this.instance)
            this.processProperty(propName, this.instance[propName]);
    }
    // Processes the properties of the style definition instance. This creates names for classes,
    // IDs, animations and custom variables.
    processProperty(propName, propVal) {
        if (propVal instanceof RuleTypes_1.StyleDefinition)
            this.processReference(propVal);
        else if (propVal instanceof VarRule_1.VarRule)
            this.processVarRule(propName, propVal);
        else if (propVal instanceof CounterRules_1.CounterRule)
            this.processCounterRule(propName, propVal);
        else if (propVal instanceof Rule_1.Rule)
            this.processRule(propName, propVal);
        else if (Array.isArray(propVal))
            this.processArray(propVal);
    }
    // Processes reference to another style definition created by the $use function.
    processReference(ref) {
        // if the instance has not already been processed, process it and indicate that it is
        // embedded into our container because only definitions created with the $embed function
        // are not processed.
        processInstance(ref, this);
        this.refs.push(ref);
    }
    // Processes custom CSS property.
    processVarRule(propName, varObj) {
        // if the object is already assigned to a stylesheet, we create a clone of the
        // rule and assign it to our stylesheet.
        if (varObj.container)
            varObj = varObj.clone();
        varObj.process(this, this.topLevelContainer, propName);
        this.vars.push(varObj);
    }
    // Processes counter object.
    processCounterRule(propName, counter) {
        // if the object is already assigned to a stylesheet, we create a clone of the
        // rule and assign it to our stylesheet.
        if (counter.container)
            counter = counter.clone();
        counter.process(this, this.topLevelContainer, propName);
    }
    // Processes the given Rule-derived object.
    processRule(propName, rule) {
        // if the rule object is already processed as part of another instance, we create a clone
        // of the rule and set it to our instance.
        if (rule.owner) {
            if (propName)
                this.instance[propName] = rule = rule.clone();
            else {
                // TODO: support already used rules in an array
                return;
            }
        }
        rule.process(this.topLevelContainer, propName);
        if (rule instanceof MiscRules_1.ImportRule)
            this.imports.push(rule);
        else if (rule instanceof MiscRules_1.NamespaceRule)
            this.namespaces.push(rule);
        else
            this.otherRules.push(rule);
    }
    // Processes rules from the given array.
    processArray(propVals) {
        if (!propVals || propVals.length === 0)
            return;
        // loop over the properties of the definition object and process those that are rules.
        for (let propVal of propVals)
            this.processProperty(null, propVal);
    }
    /** Returns the instance of the stylesheet definition class */
    getDefinitionInstance() {
        return this.instance;
    }
    // Sets the given value for the custom CSS roperty with the given name.
    setCustomVarValue(name, value, important) {
        if (this.cssCustomVarStyleRule) {
            if (value != null)
                this.cssCustomVarStyleRule.style.setProperty(name, value, important ? "!important" : undefined);
            else
                this.cssCustomVarStyleRule.style.removeProperty(name);
        }
    }
    /**
     * Generates a globally unique CSS name for the given rule name unless this rule name already
     * exists either in a base class or in the chain of parent grouping rules.
     */
    getScopedRuleName(ruleName) {
        // if rule name was not specified, generate it uniquely; otherwise, check whether we
        // already have this rule name: if yes, return the already assigned name. If we didn't
        // find the name, try to find it in the base classes); if not found there, generate it
        // using this container's name and the rule name (note that depending on the mode, both
        // can be generated uniquely).
        if (!ruleName)
            return generateUniqueName();
        else if (ruleName in this.instance && "name" in this.instance[ruleName])
            return this.instance[ruleName].name;
        else {
            // find out if there is a rule with this name defined in a stylesheet instance created for
            // a class from the prototype chain of the style definition class.
            let existingName = findNameForRuleInPrototypeChain(this.definitionClass, ruleName);
            return existingName ? existingName : generateName(this.name, ruleName);
        }
    }
    /** Inserts all rules defined in this container to either the style sheet or grouping rule. */
    insertRules(parent) {
        // insert @import and @namespace rules as they must be before other rules. If the parent is a grouping
        // rule, don't insert @import and @namespace rules at all
        if (parent instanceof CSSStyleSheet) {
            this.imports && this.imports.forEach(rule => rule.insert(parent));
            this.namespaces && this.namespaces.forEach(rule => rule.insert(parent));
        }
        // activate referenced style definitions
        for (let ref of this.refs)
            ref[symRuleContainer].activate();
        // isert our custom variables in a ":root" rule
        if (this.vars.length > 0) {
            this.cssCustomVarStyleRule = Rule_1.Rule.addRuleToDOM(`:root {${this.vars.map(varObj => varObj.toCssString()).filter(v => v != null).join(";")}}`, parent);
        }
        // insert all other rules
        this.otherRules.forEach(rule => rule.insert(parent));
    }
    /** Clears all CSS rule objects defined in this container. */
    clearRules() {
        if (this.owner === this.instance) {
            this.imports && this.imports.forEach(rule => rule.clear());
            this.namespaces && this.namespaces.forEach(rule => rule.clear());
        }
        this.cssCustomVarStyleRule = null;
        this.otherRules.forEach(rule => rule.clear());
        // deactivate imported stylesheets
        for (let ref of this.refs)
            ref[symRuleContainer].deactivate();
    }
    /** Inserts this stylesheet into DOM. */
    activate() {
        if (++this.activationRefCount === 1) {
            // only the top-level not-embedded style definitions create the `<style>` element
            if (this.embeddingContainer)
                this.domStyleElm = this.embeddingContainer.domStyleElm;
            else if (this.isTopLevel) {
                this.domStyleElm = document.createElement("style");
                this.domStyleElm.id = this.name;
                document.head.appendChild(this.domStyleElm);
            }
            else
                this.domStyleElm = this.topLevelContainer.domStyleElm;
            this.insertRules(this.domStyleElm.sheet);
        }
    }
    /** Removes this stylesheet from DOM. */
    deactivate() {
        // guard from extra deactivate calls
        if (this.activationRefCount === 0)
            return;
        if (--this.activationRefCount === 0) {
            this.clearRules();
            // only the top-level style defiition creates the `<style>` element
            if (this.isTopLevel)
                this.domStyleElm.remove();
            this.domStyleElm = null;
        }
    }
    // Flag indicating whether this container is for the top-level style definition.
    get isTopLevel() { return this.owner === null || this.owner === this.instance; }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Name generation
//
///////////////////////////////////////////////////////////////////////////////////////////////////
// Flag indicating whether to use optimaized names for style elements (class names, animation
// names, etc.)
let useUniqueStyleNames = false;
// Prefix to use when generating unique style names. If undefined, a standard prefix "n" will
// be used.
let uniqueStyleNamesPrefix = "n";
// Next number to use when generating unique identifiers.
let nextUniqueID = 1;
/**
 * Generates name to use for the given rule from the given style sheet.
 */
function generateName(sheetName, ruleName) {
    return useUniqueStyleNames
        ? generateUniqueName(uniqueStyleNamesPrefix)
        : `${sheetName}_${ruleName}`;
}
/**
 * Generates a unique name, which can be used either for style element's ID or or class,
 * identifier or animation name. Names are generated using a simple incrementing number.
 */
function generateUniqueName(prefix) {
    return (prefix ? prefix : uniqueStyleNamesPrefix) + nextUniqueID++;
}
// Looks up a property with the given name in the prototype chain of the given style definition
// class. If found and if the property is a rule, then returns the name assigned for it.
function findNameForRuleInPrototypeChain(definitionClass, ruleName) {
    if (!definitionClass)
        return null;
    // loop over prototypes
    let baseClass = definitionClass;
    while ((baseClass = Object.getPrototypeOf(baseClass)) !== RuleTypes_1.StyleDefinition) {
        // check if the base class already has an associated instance; if yes, check whether
        // it hase a property with the given rule name. If yes, then use this rule's already
        // generated name (if exists).
        if (baseClass.hasOwnProperty(symInstance)) {
            let baseInst = baseClass[symInstance];
            if (baseInst && ruleName in baseInst && "name" in baseInst[ruleName])
                return baseInst[ruleName].name;
        }
    }
    return null;
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Processing functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Processes the given stylesheet definition class or instance and assigns names to its rules.
 * If the parameter is a style definition class we check whether there is an instance already
 * created for it as a class will have only a single associated instane no matter how many times
 * this function is called.
 *
 * If the parameter is an object (an instance of the StyleDefinition class) then we check whether
 * it has already been processed. If yes, we just return it back; if no, we assign new unique names
 * to its rules.
 */
function processInstanceOrClass(instanceOrClass, owner) {
    if (!instanceOrClass)
        return null;
    if (instanceOrClass instanceof RuleTypes_1.StyleDefinition) {
        processInstance(instanceOrClass);
        return instanceOrClass;
    }
    else {
        // check whether this definition class is already associated with an instance
        return instanceOrClass.hasOwnProperty(symInstance)
            ? instanceOrClass[symInstance]
            : processClass(instanceOrClass, owner);
    }
}
exports.processInstanceOrClass = processInstanceOrClass;
/**
 * Processes the given style definition class by creating its instance and associating a
 * rule container object with it. The class will be associated with the instance using the
 * Symbol property. The owner parameter is a reference to the top-level style defiition
 * object or null if the given class is itself a top-level class (that is, is not a class
 * that defines rules within nested grouping rules).
 * @param definitionClass
 * @param owner
 */
function processClass(definitionClass, owner) {
    // call the 'use' function for all the base classes so that rule names are generated. We
    // don't activate styles for these clases because derived classes will have all the
    // rules from all the base classes as their own and so these rules will be activated as
    // part of the derived class.
    let baseClass = definitionClass;
    while ((baseClass = Object.getPrototypeOf(baseClass)) !== RuleTypes_1.StyleDefinition)
        processClass(baseClass, owner);
    try {
        // create the instance of the definition class
        let instance = new definitionClass(owner);
        // get the name for our container
        let name = useUniqueStyleNames || !definitionClass.name
            ? generateUniqueName()
            : definitionClass.name;
        new RuleContainer(instance, name);
        definitionClass[symInstance] = instance;
        return instance;
    }
    catch (err) {
        console.error(`Error instantiating Style Definition Class '${definitionClass.name}'`, err);
        return null;
    }
}
/**
 * Processes the given stylesheet definition instance and assigns names to its rules. If the
 * instance has already been processed, we just return it back; if no, we assign new unique names
 * to its rules.
 */
function processInstance(instance, embeddingContainer) {
    // if the instance is already processed, just return it; in this case we ignore the
    // embeddingContainer parameter.
    let ruleContainer = instance[symRuleContainer];
    if (ruleContainer)
        return;
    // get the name for our container
    let name = generateUniqueName();
    if (!useUniqueStyleNames) {
        let definitionClass = instance.constructor;
        if (definitionClass.name)
            name += "_" + definitionClass.name;
    }
    // create container - this will associate the new container with the instance and process
    // the rules.
    new RuleContainer(instance, name, embeddingContainer);
}
exports.processInstance = processInstance;
/**
 * Returns rule container object associated with the given style definition object.
 */
function getContainerFromDefinition(definition) {
    return definition ? definition[symRuleContainer] : null;
}
exports.getContainerFromDefinition = getContainerFromDefinition;
/**
 * Activates the given style definition and inserts all its rules into DOM. If the input object is
 * not a style definition but a style definition class, obtain style definition by calling the $use
 * function. Note that each style definition object maintains a reference counter of how many times
 * it was activated and deactivated. The rules are inserted to DOM only when this reference counter
 * goes up to 1.
 */
function activate(instanceOrClass) {
    let instance = processInstanceOrClass(instanceOrClass);
    if (!instance)
        return null;
    let ruleContainer = instance[symRuleContainer];
    ruleContainer.activate();
    return instance;
}
exports.activate = activate;
/**
 * Deactivates the given style definition by removing its rules from DOM. Note that each style
 * definition object maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes down to 0.
 */
function deactivate(definition) {
    if (!definition)
        return;
    let ruleContainer = definition[symRuleContainer];
    if (ruleContainer)
        ruleContainer.deactivate();
}
exports.deactivate = deactivate;
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
function enableShortNames(enable, prefix) {
    useUniqueStyleNames = enable;
    uniqueStyleNamesPrefix = prefix ? prefix : "n";
}
exports.enableShortNames = enableShortNames;


/***/ }),

/***/ "./lib/rules/RuleTypes.js":
/*!********************************!*\
  !*** ./lib/rules/RuleTypes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Symbol that is used for the property in the StyleDefinition class that keeps reference to the
 * top-level style definition class. Developers can use this property to access rules in the
 * chain of nested grouping rules. We need to avoid enumerating this property when processing
 * the rules in the style definition object.
 */
exports.symOwner = Symbol("owner");
/**
 * The StyleDefinition class is a base for all classes that contain defininitions of CSS rules.
 * Use it the following way:
 *
 * ```typescript
 * class MyStyles extend StyleDefinition
 * {
 *     // 8px padding on regular devices
 *     defaultPadding = $var( "padding", 8)
 *
 *     ifNarrowDevice = $media( {maxWidth: 600 },
 *         class extends StyleDefinition<MyStyles>
 *         {
 *             // 4px padding on narrow devices
 *             defaultPadding = $var( "padding", Len.calc( "{0} / 2", this.owner.defaultPadding))
 *         }
 *     )
 * }
 * ```
 * @typeparam O Top-level style definition class, which is the owner of this class.
 */
class StyleDefinition {
    /**
     * Style definition classes are created directly only by the *styled components* - that is,
     * components that use different styles for each instance. Otherwise, style definition
     * class instances are created when either the [[$use]] or [[$activate]] function is called.
     * @param owner Reference to the top-level style definition class
     */
    constructor(owner = null) {
        this[exports.symOwner] = owner;
    }
    /**
     * Refers to the singleton instance of the style definition class which is the *owner* of
     * this style definition object. The owner is the top-level class in the chain of style
     * definition classes. Through this memeber, all rules and other memebers defined in the owner
     * definition class can be accessed.
     */
    get owner() { return this[exports.symOwner]; }
}
exports.StyleDefinition = StyleDefinition;


/***/ }),

/***/ "./lib/rules/StyleRules.js":
/*!*********************************!*\
  !*** ./lib/rules/StyleRules.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
const VarRule_1 = __webpack_require__(/*! ./VarRule */ "./lib/rules/VarRule.js");
const SelectorFuncs_1 = __webpack_require__(/*! ../styles/SelectorFuncs */ "./lib/styles/SelectorFuncs.js");
/**
 * The StyleRule class is used as a base class for rules that contain a style rule. This class
 * implements the parsing of the CombinedStyleset object.
 */
class StyleRule extends Rule_1.Rule {
    // The styleset can be an CombinedStyleset for many rules; however, for some it is just
    // of the Styleset type.
    constructor(styleset) {
        super();
        // Selector string cached after it is first obtained. Needed to not invoke getSelectorString
        // multiple times in the presence of dependent rules.
        this.cachedSelectorString = null;
        this.styleset = {};
        this.dependentRules = {};
        if (styleset)
            this.parseInputStyleset(styleset);
    }
    /**
     * Goes over properties in the given styleset and parses them into proper styleset, set of
     * important properties and dependent rules.
     */
    parseInputStyleset(inputStyleset) {
        // if we have parents, we first copy properties from them so that our own properties
        // can override them.
        if (inputStyleset["+"]) {
            // the value is a single StyleRule or an array of StyleRules to copy properties from
            let extendsPropVal = inputStyleset["+"];
            let parentRules;
            if (extendsPropVal instanceof StyleRule)
                parentRules = [extendsPropVal];
            else
                parentRules = extendsPropVal;
            // If we have parent rules, copy stylesets and dependent rules from them.
            if (parentRules && parentRules.length > 0) {
                parentRules.forEach(parent => {
                    this.styleset = StyleFuncs_1.mergeStylesets(this.styleset, parent.styleset);
                    this.copyDependentRulesFrom(parent);
                });
            }
        }
        // merge custom  properties
        StyleFuncs_1.mergeStylesetCustomProps(this.styleset, inputStyleset);
        for (let propName in inputStyleset) {
            // skip over already processed parents, important and custom properties
            if (propName === "+" || propName === "--")
                continue;
            let propVal = inputStyleset[propName];
            if (propName.startsWith(":")) {
                // if the value is an array, then this is an array of tuples representing
                // parameterised pseudo entities where the first element is the parameter value
                // (string) and the second the CombinedStyleset. Otherwise, the value is just an
                // CombinedStyleset.
                if (Array.isArray(propVal)) {
                    let tuples = propVal;
                    if (tuples.length > 0) {
                        this.dependentRules[propName] = tuples.map(tuple => new DependentRule(propName, tuple[0], tuple[1], this));
                    }
                }
                else
                    this.dependentRules[propName] = new DependentRule("&" + propName, undefined, propVal, this);
            }
            else if (propName === "&") {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    this.dependentRules[propName] = tuples.map(tuple => new DependentRule(tuple[0], undefined, tuple[1], this));
                }
            }
            else if (propName.startsWith("&")) {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    this.dependentRules[propName] = tuples.map(tuple => new DependentRule(() => propName + SelectorFuncs_1.selectorToString(tuple[0]), undefined, tuple[1], this));
                }
            }
            else if (propName.endsWith("&")) {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    this.dependentRules[propName] = tuples.map(tuple => new DependentRule(() => SelectorFuncs_1.selectorToString(tuple[0]) + propName, undefined, tuple[1], this));
                }
            }
            else {
                // this is a regular CSS property: copy the property value to our internal styleset
                this.styleset[propName] = propVal;
            }
        }
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        // if dependent rules exist, process them under the same container
        for (let propName in this.dependentRules) {
            let propVal = this.dependentRules[propName];
            if (Array.isArray(propVal) && propVal.length > 0)
                propVal.forEach((depRule) => depRule.process(owner, null));
            else
                propVal.process(owner, null);
        }
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        // this method is called on a newly created object so we don't have any properties in
        // our own styleset yet
        this.styleset = StyleFuncs_1.mergeStylesets(this.styleset, src.styleset);
        this.copyDependentRulesFrom(src);
    }
    // Copies dependent rules from another style rule object.
    copyDependentRulesFrom(src) {
        for (let propName in src.dependentRules) {
            let propVal = src.dependentRules[propName];
            if (Array.isArray(propVal) && propVal.length > 0) {
                let arr = this.dependentRules[propName];
                if (!arr)
                    this.dependentRules[propName] = arr = [];
                propVal.forEach((srcDepRule) => {
                    let newDepRule = srcDepRule.clone();
                    newDepRule.containingRule = this;
                    arr.push(newDepRule);
                });
            }
            else {
                let newDepRule = propVal.clone();
                newDepRule.containingRule = this;
                this.dependentRules[propName] = newDepRule;
            }
        }
    }
    // Converts the rule to CSS string representing the rule.
    toCssString() {
        if (this.cachedSelectorString == null)
            this.cachedSelectorString = this.getSelectorString();
        return `${this.cachedSelectorString} {${StyleFuncs_1.stylesetToString(this.styleset)}}`;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = this.cloneObject();
        newRule.copyFrom(this);
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (Object.keys(this.styleset).length > 0)
            this.cssRule = Rule_1.Rule.addRuleToDOM(this.toCssString(), parent);
        // if dependent rules exist, insert them under the same parent
        for (let propName in this.dependentRules) {
            let propVal = this.dependentRules[propName];
            if (Array.isArray(propVal) && propVal.length > 0)
                propVal.forEach((depRule) => depRule.insert(parent));
            else
                propVal.insert(parent);
        }
    }
    // Clers the CSS rule object.
    clear() {
        super.clear();
        // if dependent rules exist, clear them too
        for (let propName in this.dependentRules) {
            let propVal = this.dependentRules[propName];
            if (Array.isArray(propVal) && propVal.length > 0)
                propVal.forEach((depRule) => depRule.clear());
            else
                propVal.clear();
        }
    }
    /** CSS rule selector string */
    get selectorText() {
        if (this.cachedSelectorString == null)
            this.cachedSelectorString = this.getSelectorString();
        return this.cachedSelectorString;
    }
    /**
     * This function allows the object to particpate in "valueToString" serialization. Whenever
     * the StyleRule-derived object is encountered by the `UtilFunc.valueToString` function,
     * the rule's selector will be used.
     */
    valueToString() {
        return this.selectorText;
    }
    /**
     * Adds/replaces the value of the given CSS property in this rule.
     * @param name Name of the CSS property.
     * @param value New value of the CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     */
    setProp(name, value, important) {
        this.setPropInternal(name, value, important);
    }
    /**
     * Adds/replaces the value of the given custom CSS property in this rule.
     * @param varObj IVarRule object defining a custom CSS property.
     * @param varValue New value of the custom CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     */
    setCustomProp(varObj, value, important) {
        if (!varObj || !(varObj instanceof VarRule_1.VarRule))
            return;
        return this.setCustomPropInternal(varObj, value, important);
    }
    /**
     * Adds/replaces/removes the value of the given CSS property in this rule.
     */
    setPropInternal(name, value, important) {
        // first set/remove the value in our internal styleset object
        if (value == null)
            delete this.styleset[name];
        else
            this.styleset[name] = important ? { "!": value } : value;
        // second, if CSSRule alredy exists, set/remove the property value there
        if (!this.cssRule)
            return;
        if (value == null)
            this.cssRule.style.removeProperty(UtilFuncs_1.camelToDash(name));
        else
            this.cssRule.style.setProperty(UtilFuncs_1.camelToDash(name), StyleFuncs_1.stylePropToString(name, value, true), important ? "!important" : undefined);
    }
    /**
     * Adds/replaces/removes the value of the given custmom cSS property in this rule.
     */
    setCustomPropInternal(varObj, value, important) {
        // first set/remove the value in our internal styleset object
        let currCustomProps = this.styleset["--"];
        if (currCustomProps || value != null) {
            if (value == null) {
                if (currCustomProps.length > 0) {
                    let index = currCustomProps.findIndex(item => item[0] === varObj);
                    if (index >= 0) {
                        if (currCustomProps.length === 1)
                            this.styleset[""] = undefined;
                        else
                            currCustomProps.splice(index, 1);
                    }
                }
            }
            else {
                if (!currCustomProps)
                    this.styleset["--"] = currCustomProps = [[varObj, value]];
                else {
                    let index = currCustomProps.findIndex(item => item[0] === varObj);
                    if (index >= 0)
                        currCustomProps[index][1] = value;
                    else
                        currCustomProps.push([varObj, value]);
                }
            }
        }
        // second, if CSSRule alredy exists, set/remove the property value there
        if (!this.cssRule)
            return;
        if (value == null)
            this.cssRule.style.removeProperty(varObj.cssName);
        else
            this.cssRule.style.setProperty(varObj.cssName, StyleFuncs_1.stylePropToString(varObj.template, value, true), important ? "!important" : undefined);
    }
}
exports.StyleRule = StyleRule;
/**
 * The DependentRule class describes a styleset that depends on the containing style rule. This
 * is used for pseudo classes, pseudo elements, combinators and other selectors that combine the
 * containing rule's selector with additional selector items.
 */
class DependentRule extends StyleRule {
    // for regular selectors, pseudo classes and pseudo elements, the selector already contains
    // the ampersand and the selectorParam is undefined. For parameterized pseudo classes, psudo
    // elements and combinators, the selectorParam is defined and the selector is just the entity
    // name.
    constructor(selector, selectorParam, style, containingRule) {
        super(style);
        this.selector = selector;
        this.selectorParam = selectorParam;
        this.containingRule = containingRule;
    }
    // Creates a copy of the rule.
    cloneObject() {
        return new DependentRule(this.selector, this.selectorParam);
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        let parentSelector = this.containingRule.selectorText;
        if (this.selectorParam) {
            let selector = this.selector;
            return `${parentSelector}${selector}(${SelectorFuncs_1.pseudoEntityToString(selector, this.selectorParam)})`;
        }
        else {
            // convert selector to string.
            let selector = SelectorFuncs_1.selectorToString(this.selector);
            // if the selector string doesn't have any occurrences of the ampersand symbol, we
            // simply append the selector to the parent selector; otherwise, we replace all
            // occurrences of the ampersand symbol in the selector string with the selector
            // string of the parent rule.
            return selector.indexOf("&") < 0
                ? `${parentSelector}${selector}`
                : selector.replace(/&/g, parentSelector);
        }
    }
}
/**
 * The AbstractRule class describes a styleset that can only be used as a base for other style
 * rules.
 */
class AbstractRule extends StyleRule {
    constructor(style) {
        super(style);
    }
    // Creates a copy of the rule.
    cloneObject() {
        return new AbstractRule();
    }
    // Overrides the StyleRule's implementation to do nothing. No CSSStyleRule is created for
    // abstract rules.
    insert(parent) {
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return "";
    }
}
exports.AbstractRule = AbstractRule;
/**
 * The NamedStyleRule class is a base for style rule classes that are also named entities - such
 * as class rule and ID rule.
 */
class NamedStyleRule extends StyleRule {
    constructor(style, nameOverride) {
        super(style);
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        [this.name, this.cssName] = Rule_1.createNames(owner, ruleName, this.nameOverride, this.cssPrefix);
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return this.cssName;
    }
    // Implementation of the toString method returns the name of the rule (without the CSS prefix).
    toString() {
        return this.name;
    }
}
/**
 * The ClassRule class describes a styleset that applies to elements identified by a CSS class.
 */
class ClassRule extends NamedStyleRule {
    constructor(style, nameOverride) {
        super(style, nameOverride);
    }
    /** Name of the class prefixed with "." */
    get cssClassName() { return this.cssName; }
    // Creates a copy of the rule object.
    cloneObject() {
        return new ClassRule(undefined, this.nameOverride);
    }
    // Returns prefix that is put before the entity name to create a CSS name used in style rule
    // selectors.
    get cssPrefix() { return "."; }
}
exports.ClassRule = ClassRule;
/**
 * The IDRule class describes a styleset that applies to elements identified by an ID.
 */
class IDRule extends NamedStyleRule {
    constructor(style, nameOverride) {
        super(style, nameOverride);
    }
    /** Name of the element ID prefixed with "#" */
    get cssIDName() { return this.cssName; }
    // Creates a copy of the rule object.
    cloneObject() {
        return new IDRule(undefined, this.nameOverride);
    }
    // Returns prefix that is put before the entity name to create a CSS name used in style rule
    // selectors.
    get cssPrefix() { return "#"; }
}
exports.IDRule = IDRule;
/**
 * The SelectorRule type describes a styleset that applies to elements identified by a CSS selector.
 */
class SelectorRule extends StyleRule {
    constructor(selector, style) {
        super(style);
        this.selector = selector;
    }
    // Creates a copy of the rule.
    cloneObject() {
        return new SelectorRule(this.selector);
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return UtilFuncs_1.valueToString(this.selector);
    }
}
exports.SelectorRule = SelectorRule;


/***/ }),

/***/ "./lib/rules/VarRule.js":
/*!******************************!*\
  !*** ./lib/rules/VarRule.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/**
 * The VarRule class describes a custom CSS property. VarRule does not derive from the Rule
 * class because it is not a real CSS rule; however, in many aspects it repeats the Rule's
 * functionality. In particular it has the process function that allows it to obtain an actual
 * name, which will be used when defining and using this custom property in CSS.
 *
 * Note that while the type parameter K is a key of the ICssStyleset interface, the value is of
 * type IStileset[K], which is Extended<ICssStyleset[K]>. This allows specifying values that are
 * valid for the Extended roperty type.
 */
class VarRule {
    constructor(template, value, nameOverride) {
        this.template = template;
        this.value = value;
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        this.container = container;
        [this.name, this.cssName] = Rule_1.createNames(owner, ruleName, this.nameOverride, "--");
    }
    // Creates a copy of the rule.
    clone() {
        return new VarRule(this.template, this.value, this.nameOverride);
    }
    // Converts the rule to CSS string.
    toCssString() {
        return this.value == null ? null : `${this.cssName}: ${StyleFuncs_1.stylePropToString(this.template, this.value, true)}`;
    }
    // The valueToString function is used when the object is specified as a value of a style property.
    // We return the var(--name) expression.
    valueToString() {
        return `var(${this.cssName})`;
    }
    /**
     * Sets new value of this custom CSS property.
     * @param value New value for the CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     */
    setValue(value, important) {
        this.container.setCustomVarValue(this.cssName, value == null ? null : StyleFuncs_1.stylePropToString(this.template, value, true), important);
    }
}
exports.VarRule = VarRule;


/***/ }),

/***/ "./lib/styles/ColorFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/ColorFuncs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorTypes_1 = __webpack_require__(/*! ./ColorTypes */ "./lib/styles/ColorTypes.js");
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * Map of predefined color names by their numeric values. Only built-in color names will be in
 * this map - those named colors that are added using module augmentation will NOT reside in
 * this map. This is needed to convert the numeric color values set using the Color.brown
 * notation to their names when inserting CSS rules.
 */
let reversedColorMap = new Map();
// build Reversed Color Map
Object.entries(ColorTypes_1.Colors).forEach(([name, value]) => reversedColorMap.set(value, name));
/**
 * Converts color value from the numeric representation to the CSS color string.
 */
function colorNumberToString(val) {
    // if the number is negative, remember that fact and get the positive number
    let n = val < 0 ? -val : val;
    let isNegative = n !== val;
    // if the number has a floating point part, separate it into alpha channel
    let a = 0;
    if (!Number.isInteger(n)) {
        let k = Math.floor(n);
        // a = Math.round( (n - k) * 100);
        a = Math.round((n - k) * 255);
        n = k;
    }
    // If the number was negative we revert the color by negating all the bits. In any case,
    // we clear everything beyond the first three bytes.
    n = isNegative ? ~(0xFF000000 | n) : 0x00FFFFFF & n;
    if (a > 0)
        // return colorWithAlphaToString( n, a);
        // return rgbToString( (n & 0xFF0000) >> 16, (n & 0x00FF00) >> 8, n & 0x0000FF, a);
        return "#" + n.toString(16).padStart(6, "0") + a.toString(16).padStart(2, "0");
    else {
        // if we have a named color with the given value, return the color name
        let name = reversedColorMap.get(n);
        return name ? name : "#" + n.toString(16).padStart(6, "0");
    }
}
/**
 * Converts the color separation value to a CSS string. Separation are represented as a number
 * with the following meaning:
 *   - Integer number -255 to 255. Numbers beyond this range will be clamped. Negative numbers
 *     will be inverted.
 *   - Floating number -1.0 to 1.0 non-inclusive, which is multiplied by 100 treated as percentage.
 *     Floating numbers beyond this range will be rounded and treated as integer numbers. Negative
 *     numbers will be inverted.
 *
 * @param c Color separation value.
 */
function separationToString(c) {
    if (c !== 0 && c > -1 && c < 1) {
        // invert negative value
        if (c < 0)
            c = 1 + c;
        return Math.round(c * 100) + "%";
    }
    else {
        // clamp the value between -255 and 255
        c = c > 255 ? 255 : c < -255 ? -255 : c;
        if (!Number.isInteger(c))
            c = Math.round(c);
        // invert negative value
        if (c < 0)
            c = 255 + c;
        return c.toString();
    }
}
/**
 * Converts the alpha channel value to a CSS string. Alpha is represented as a number
 * with the following meaning:
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *   - Floating number 0 to 1 inclusive, which is multiplied by 100 and treated as percentage.
 *   - Integer or floating number 1 to 100, which is treated as percentage. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 */
function alphaToString(a) {
    // if alpha is null or undefined, set it to 1
    if (a == null)
        return "1";
    // negative and positive values of alpha are treated identically, so convert to positive
    if (a < 0)
        a = -a;
    // convert alpha to a number with absolute value less than 1 (if it is not yet). If alpha
    // is greater than 100, set it to 1; otherwise, 
    return (a > 100 ? 1 : a > 1 ? a / 100 : a).toFixed(2);
}
/**
 * Converts the color specified as red, green, blue separation values and an optional alpha
 * mask to a CSS color representation. Each color separation can be represented as a number with
 * the following meaning:
 *   - Integer number -255 to 255. Numbers beyond this range will be clamped. Negative numbers
 *     will be inverted.
 *   - Floating number -1.0 to 1.0 non-inclusive, which is multiplied by 100 treated as percentage.
 *     Floating numbers beyond this range will be rounded and treated as integer numbers. Negative
 *     numbers will be inverted.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * @param r Red separation value.
 * @param g Green separation value.
 * @param b Blue separation value.
 * @param a Optional alpha mask as a percentage value.
 */
function rgbToString(r, g, b, a) {
    return `rgba(${separationToString(r)},${separationToString(g)},${separationToString(b)},${alphaToString(a)})`;
}
exports.rgbToString = rgbToString;
/**
 * Converts a number representing either saturation or lightness in the HSL scheme to percentage:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Floating number 0 to 1 inclusive are multiplied by 100 and treated as percentage.
 *   - Integer or floating number 1 to 100 are treated as percentage. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped to 100.
 */
function colorPercentToString(n) {
    // negative and positive values are treated identically, so convert to positive
    if (n < 0)
        n = -n;
    // convert alpha to a number with absolute value less than 1 (if it is not yet). If alpha
    // is greater than 100, clamp it. 
    return (n > 100 ? 100 : Math.round(n <= 1 ? n * 100 : n)).toString() + "%";
}
/**
 * Converts the color specified as hue-saturation-lightness components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * The Hue component is treated as the CSS `<angle>` type. Numbers are considered degrees.
 *
 * The Saturation and Lightness components are treated as percentages:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Floating number 0 to 1 inclusive are multiplied by 100 and treated as percentage.
 *   - Integer or floating number 1 to 100 are treated as percentage. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped to 100.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * @param h Hue component as an angle value.
 * @param s Saturation component as a percentage value.
 * @param l Lightness component as a percentage value.
 * @param a Optional alpha mask as a percentage value.
 */
function hslToString(h, s, l, a) {
    return `hsla(${UtilFuncs_1.CssAngleMath.styleToString(h)},${colorPercentToString(s)},${colorPercentToString(l)},${alphaToString(a)})`;
}
exports.hslToString = hslToString;
/**
 * Converts the given color and the alpha mask to the CSS Color representation. This
 * method should be used when defining CSS color values in styleset properties.
 *
 * The color can be specified as a numeric value or as a string color name.
 *
 * The alpha mask is specified as a number:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Number 0 to 1 inclusive, which is treated as percentage.
 *   - Number 1 to 100 inclusive, which is treated as percentage.
 *   - Numbers greater than 100 are clamped to 100;
 *
 * @param c Color value as either a number or a named color
 * @param a Alpha channel value
 */
function colorWithAlphaToString(c, a) {
    // if the alpha is 0, return transparent color
    if (a === 0)
        return "#0000";
    // convert color to numeric value (if it's not a number yet). If the color was given as a
    // string that we cannot find in the Colors object, return pure white.
    let n = typeof c === "string" ? ColorTypes_1.Colors[c] : c;
    if (n == null)
        return "FFF";
    // negative and positive values of alpha are treated identically, so convert to positive
    if (a < 0)
        a = -a;
    // convert alpha to a number with absolute value less than 1 (if it is not yet). If alpha
    // is 1 or 100, then set it to 0 because 0 in the colorNumberToString means "no alpha".
    a = a === 1 || a >= 100 ? 0 : a > 1 ? a / 100 : a;
    // make the new alpha
    return colorNumberToString(n > 0 ? n + a : n - a);
}
exports.colorWithAlphaToString = colorWithAlphaToString;
/**
 * Converts color style value to the CSS time string. If a string value is in the Colors object we
 * need to get its number and convert it to the rgb[a]() function because it might be a custom
 * color name added via INamedColors module augmentation. For numeric values, we check if this is
 * one of the predefined colors and return its string representation
 */
function colorToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromString: v => ColorTypes_1.Colors[v] ? colorNumberToString(ColorTypes_1.Colors[v]) : v,
        fromNumber: colorNumberToString
    });
}
exports.colorToString = colorToString;


/***/ }),

/***/ "./lib/styles/ColorTypes.js":
/*!**********************************!*\
  !*** ./lib/styles/ColorTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module contains types for working with CSS colors.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Object whose property names are names of well-known colors and values correspond to the hexadecimal
 * representartion of the RGB separations (without an alpha mask).
 */
exports.Colors = {
    black: 0x000000,
    silver: 0xc0c0c0,
    gray: 0x808080,
    white: 0xffffff,
    maroon: 0x800000,
    red: 0xff0000,
    purple: 0x800080,
    fuchsia: 0xff00ff,
    green: 0x008000,
    lime: 0x00ff00,
    olive: 0x808000,
    yellow: 0xffff00,
    navy: 0x000080,
    blue: 0x0000ff,
    teal: 0x008080,
    aqua: 0x00ffff,
    orange: 0xffa500,
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    blanchedalmond: 0xffebcd,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    oldlace: 0xfdf5e6,
    olivedrab: 0x6b8e23,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    whitesmoke: 0xf5f5f5,
    yellowgreen: 0x9acd32,
    rebeccapurple: 0x663399,
};


/***/ }),

/***/ "./lib/styles/FontFaceFuncs.js":
/*!*************************************!*\
  !*** ./lib/styles/FontFaceFuncs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
const StyleFuncs_1 = __webpack_require__(/*! ./StyleFuncs */ "./lib/styles/StyleFuncs.js");
/**
 * Converts the given font face definition object to the CSS string
 */
function fontFaceToString(fontface) {
    if (!fontface || !fontface.fontFamily)
        return null;
    let s = "{";
    for (let propName in fontface) {
        s += `${UtilFuncs.camelToDash(propName)}:`;
        let propVal = fontface[propName];
        if (propName === "fontStretch")
            s += fontStretchToString(propVal);
        else if (propName === "fontStyle")
            s += fontStyleToString(propVal);
        else if (propName === "fontWeight")
            s += fontWeightToString(propVal);
        else if (propName === "src")
            s += fontSrcToString(propVal);
        else
            s += propVal;
        s += ";";
    }
    return s + "}";
}
exports.fontFaceToString = fontFaceToString;
function fontStretchToString(val) {
    return UtilFuncs.valueToString(val, {
        fromNumber: UtilFuncs.CssPercentMath.styleToString,
        arrayItemFunc: UtilFuncs.CssPercentMath.styleToString
    });
}
function fontStyleToString(val) {
    return UtilFuncs.valueToString(val, {
        fromNumber: v => `oblique ${UtilFuncs.CssAngleMath.styleToString(v)}`,
        fromArray: v => `oblique ${UtilFuncs.arrayToString(v, UtilFuncs.CssAngleMath.styleToString)}`
    });
}
function fontWeightToString(val) {
    return UtilFuncs.valueToString(val, {
        fromAny: UtilFuncs.CssNumberMath.styleToString
    });
}
function fontSrcToString(val) {
    return UtilFuncs.valueToString(val, {
        fromAny: fontSingleSrcToString,
        arraySeparator: ","
    });
}
function fontSingleSrcToString(val) {
    return StyleFuncs_1.objectToString(val, [
        ["local", v => `local(${v})`],
        ["url", v => `url(${v})`],
        ["format", v => `format(${fontFormatToString(v)})`]
    ]);
}
function fontFormatToString(val) {
    return UtilFuncs.valueToString(val, {
        fromString: v => `\"${v}\"`,
        arraySeparator: ","
    });
}


/***/ }),

/***/ "./lib/styles/MediaFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/MediaFuncs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
function aspectRatioToString(val) {
    return typeof val === "string" ? val : val[0] + "/" + val[1];
}
function lengthFeatureToString(val) {
    return typeof val === "string" ? val : val + "px";
}
function resolutionFeatureToString(val) {
    return typeof val === "string" ? val : val + "dpi";
}
/**
 * Converts the given media query object to the CSS media query string
 */
function mediaQueryToString(query) {
    if (!query)
        return null;
    else if (Array.isArray(query))
        return query.map((singleQuery) => singleMediaQueryToString(singleQuery)).join(", ");
    else
        return singleMediaQueryToString(query);
}
exports.mediaQueryToString = mediaQueryToString;
/**
 * Converts the given media query object to the CSS media query string
 */
function singleMediaQueryToString(query) {
    if (!query)
        return null;
    let mediaType = query.$mediaType;
    let only = query.$only;
    let negate = query.$negate;
    let items = [];
    if (mediaType)
        items.push((only ? "only " : "") + mediaType);
    for (let propName in query) {
        if (propName.startsWith("$"))
            continue;
        if (query[propName])
            items.push(`(${mediaFeatureToString(propName, query[propName])})`);
    }
    return `${negate ? "not " : ""}${items.join(" and ")}`;
}
exports.singleMediaQueryToString = singleMediaQueryToString;
/**
 * Converts the given media feature to the CSS media query string
 */
function mediaFeatureToString(featureName, propVal, valueOnly) {
    if (!featureName || propVal == null)
        return null;
    // find information object 
    let info = mediaFeatures[featureName];
    let realFeatureName = UtilFuncs.camelToDash(featureName);
    // if defaultValue is defined and the property value is equal to it, no value should be returned.
    let defaultValue = typeof info === "object" ? info.defaultValue : undefined;
    if (defaultValue !== undefined && propVal === defaultValue)
        return valueOnly ? "" : realFeatureName;
    let convert = typeof info === "function" ? info : typeof info === "object" ? info.convert : undefined;
    let isRange = typeof info === "boolean" ? info : typeof info === "object" ? info.isRange : undefined;
    if (isRange && !valueOnly && Array.isArray(propVal) && propVal.length === 2) {
        let s1 = mediaFeatureSingleValueToString(propVal[0], convert);
        let s2 = mediaFeatureSingleValueToString(propVal[1], convert);
        return `${s1} <= ${realFeatureName} <= ${s2}`;
    }
    else {
        let s = mediaFeatureSingleValueToString(propVal, convert);
        return valueOnly ? s : realFeatureName + ":" + s;
    }
}
exports.mediaFeatureToString = mediaFeatureToString;
function mediaFeatureSingleValueToString(propVal, convert) {
    if (propVal == null)
        return "";
    if (convert)
        return convert(propVal);
    else if (typeof propVal === "string")
        return propVal;
    else if (Array.isArray(propVal))
        return UtilFuncs.arrayToString(propVal);
    else
        return propVal.toString();
}
let mediaFeatures = {
    aspectRatio: aspectRatioToString,
    minAspectRatio: aspectRatioToString,
    maxAspectRatio: aspectRatioToString,
    color: { defaultValue: 0, isRange: true },
    colorIndex: { defaultValue: 0, isRange: true },
    height: { convert: lengthFeatureToString, isRange: true },
    minHeight: lengthFeatureToString,
    maxHeight: lengthFeatureToString,
    monochrome: { defaultValue: 0, isRange: true },
    resolution: { convert: resolutionFeatureToString, isRange: true },
    minResolution: resolutionFeatureToString,
    maxResolution: resolutionFeatureToString,
    width: { convert: lengthFeatureToString, isRange: true },
    minWidth: lengthFeatureToString,
    maxWidth: lengthFeatureToString,
};


/***/ }),

/***/ "./lib/styles/SelectorFuncs.js":
/*!*************************************!*\
  !*** ./lib/styles/SelectorFuncs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS selector.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given two-number tuple to a string in the form An+B.
 */
function nthTupleToString(val) {
    let v0 = UtilFuncs_1.valueToString(val[0]);
    let v1n = val[1];
    // the '!v1n' expression covers null, undefined and 0.
    let v1 = !v1n ? "" : v1n > 0 ? "+" + UtilFuncs_1.valueToString(v1n) : "-" + UtilFuncs_1.valueToString(-v1n);
    return `${v0}n${v1}`;
}
/**
 * Returns a string representation of a selector.
 */
function selectorToString(val) {
    return UtilFuncs_1.valueToString(val, {
        arraySeparator: ""
    });
}
exports.selectorToString = selectorToString;
/**
 * Returns a string representation of a parameterized pseudo entity.
 */
function pseudoEntityToString(entityName, val) {
    if (!entityName)
        return "";
    if (entityName.startsWith(":nth"))
        return UtilFuncs_1.valueToString(val, { fromArray: nthTupleToString });
    else
        return UtilFuncs_1.valueToString(val);
}
exports.pseudoEntityToString = pseudoEntityToString;


/***/ }),

/***/ "./lib/styles/StyleFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/StyleFuncs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
const ColorFuncs_1 = __webpack_require__(/*! ./ColorFuncs */ "./lib/styles/ColorFuncs.js");
function multiLengthToStringWithSpace(val) { return UtilFuncs_1.CssLengthMath.multiStyleToString(val, " "); }
function multiTimeToStringWithComma(val) { return UtilFuncs_1.CssTimeMath.multiStyleToString(val, ","); }
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for converting CSS property types to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function singleAnimation_fromObject(val) {
    return objectToString(val, [
        ["duration", UtilFuncs_1.CssTimeMath.styleToString],
        ["func", singleTimingFunction_fromStyle],
        ["delay", UtilFuncs_1.CssTimeMath.styleToString],
        ["count", UtilFuncs_1.CssNumberMath.styleToString],
        "direction",
        "mode",
        "state",
        "name"
    ]);
}
function singleAnimation_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromObject: singleAnimation_fromObject
    });
}
function timingFunctionToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: timingFunction_fromNumber,
        fromArray: timingFunction_fromArray
    });
}
function timingFunction_fromNumber(val) {
    return `steps(${val})`;
}
function timingFunction_fromArray(val) {
    return typeof val[0] === "number"
        ? singleTimingFunction_fromStyle(val)
        : UtilFuncs_1.arrayToString(val, singleTimingFunction_fromStyle, ",");
}
function singleTimingFunction_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: timingFunction_fromNumber,
        fromArray: v => {
            if (v.length < 3) {
                // this is steps function
/////////////////////////////
                if (v[0] <= 0)
                    console.error(`Number of steps in animation function must be greater than zero. You have: ${v[0]}`);
                else if (!Number.isInteger(v[0]))
                    console.error(`Number of steps in animation function must be an Integer. You have: ${v[0]}`);
//////////////////////////
                return `steps(${v[0]}${v.length === 2 ? "," + v[1] : ""})`;
            }
            else {
                // this is bezier function
/////////////////////////////
                if (v[0] < 0 || v[0] > 1 || v[2] < 0 || v[2] > 1)
                    console.error(`First and third parameters of cubic-bezier animation function must be between 0 and 1. You have ${v[0]} and ${v[2]}`);
//////////////////////////
                return `cubic-bezier(${v[0]},${v[1]},${v[2]},${v[3]})`;
            }
        }
    });
}
function singleBackground_fromObject(val) {
    return objectToString(val, [
        ["color", ColorFuncs_1.colorToString],
        "image",
        ["position", UtilFuncs_1.positionToString],
        ["size", multiLengthToStringWithSpace, "/"],
        "repeat",
        "attachment",
        "origin",
        "clip"
    ]);
}
function singleBackground_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: ColorFuncs_1.colorToString,
        fromObject: singleBackground_fromObject
    });
}
function singleBackgroundSize_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        fromArray: multiLengthToStringWithSpace
    });
}
/**
 * Converts border image style value to the CSS string.
 */
function borderImageToString(val) {
    // if width is specified, but slice is not, we need to set slice to the default 100% value;
    // if outset is specified but width is not. we need to set width to the default 1 value;
    let valCopy = Object.assign({}, val);
    if (val.slice == null && (val.width != null || val.outset != null))
        valCopy.slice = "100%";
    if (val.width == null && val.outset != null)
        valCopy.width = 1;
    return objectToString(valCopy, [
        "source",
        ["slice", "borderImageSlice"],
        ["width", null, "/"],
        ["outset", null, "/"],
        "repeat"
    ]);
}
/**
 * Converts border image slice style value to the CSS string.
 */
function borderImageSliceToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: UtilFuncs_1.unitlessOrPercentToString,
        arrayItemFunc: v => UtilFuncs_1.valueToString(v, {
            fromBool: () => "fill",
            fromNumber: UtilFuncs_1.unitlessOrPercentToString,
        })
    });
}
function singleBoxShadow_fromObject(val) {
    return objectToString(val, [
        ["inset", v => v ? "inset" : ""],
        ["x", UtilFuncs_1.CssLengthMath.styleToString],
        ["y", UtilFuncs_1.CssLengthMath.styleToString],
        ["blur", UtilFuncs_1.CssLengthMath.styleToString],
        ["spread", UtilFuncs_1.CssLengthMath.styleToString],
        ["color", ColorFuncs_1.colorToString]
    ]);
}
exports.singleBoxShadow_fromObject = singleBoxShadow_fromObject;
/**
 * Converts corner radius style value to the CSS string.
 */
function singleCornerRadiusToString(val) {
    return UtilFuncs_1.valueToString(val, {
        arrayItemFunc: UtilFuncs_1.CssLengthMath.styleToString,
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
/**
 * Converts border radius style value to the CSS string.
 */
function borderRadiusToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => {
            if (Array.isArray(v[0])) {
                // two MultiCornerRadius values
                let s = UtilFuncs_1.arrayToString(v[0], UtilFuncs_1.CssLengthMath.styleToString, " ");
                s += " / ";
                return s + UtilFuncs_1.arrayToString(v[1], UtilFuncs_1.CssLengthMath.styleToString, " ");
            }
            else {
                // single MultiCornerRadius value
                return UtilFuncs_1.arrayToString(v, UtilFuncs_1.CssLengthMath.styleToString, " ");
            }
        },
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
exports.borderRadiusToString = borderRadiusToString;
/**
 * Converts border side style value to the CSS string.
 */
function borderToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        fromArray: v => {
            let buf = [];
            if (v[0] != null)
                buf.push(UtilFuncs_1.CssLengthMath.styleToString(v[0]));
            if (v[1] != null)
                buf.push(UtilFuncs_1.valueToString(v[1]));
            if (v[2] != null)
                buf.push(ColorFuncs_1.colorToString(v[2]));
            return buf.join(" ");
        },
        fromAny: ColorFuncs_1.colorToString
    });
}
/**
 * Converts columns style to its CSS string value.
 */
function columnsToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => v[0] + " " + UtilFuncs_1.CssLengthMath.styleToString(v[1])
    });
}
/**
 * Converts cursor style to its CSS string value.
 */
function cursorToString(val) {
    // the value can be either a string or a function or an array. If it is an array,
    // if the first element is a function, then we need to use space as a separator (because
    // this is a URL with optional numbers for the hot spot); otherwise, we use comma as a
    // separator - because these are multiple cursor definitions.
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => {
            if (v.length === 0)
                return "";
            else if (v.length === 1)
                return UtilFuncs_1.valueToString(v);
            else if (typeof v[1] === "number")
                return UtilFuncs_1.valueToString(v, { arraySeparator: " " });
            else {
                return UtilFuncs_1.valueToString(v, {
                    arrayItemFunc: cursorToString,
                    arraySeparator: ","
                });
            }
        }
    });
}
/**
 * Converts flex style value to the CSS string.
 */
function flexToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => {
            if (v.length === 2)
                return v.join(" ");
            else
                return v[0] + " " + v[1] + " " + UtilFuncs_1.CssLengthMath.styleToString(v[2]);
        },
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
function font_fromObject(val) {
    return objectToString(val, [
        ["style", fontStyleToString],
        "variant",
        "weight",
        "stretch",
        ["size", UtilFuncs_1.CssLengthMath.styleToString],
        ["lineHeight", null, "/"],
        "family"
    ]);
}
function fontStyleToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: v => "oblique " + UtilFuncs_1.CssAngleMath.styleToString(v)
    });
}
function textDecoration_fromObject(val) {
    return objectToString(val, [
        "line",
        "style",
        ["color", ColorFuncs_1.colorToString],
        ["thickness", UtilFuncs_1.CssLengthMath.styleToString],
    ]);
}
function singleTransition_fromObject(val) {
    return objectToString(val, [
        ["property", UtilFuncs_1.camelToDash],
        ["duration", UtilFuncs_1.CssTimeMath.styleToString],
        ["func", singleTimingFunction_fromStyle],
        ["delay", UtilFuncs_1.CssTimeMath.styleToString]
    ]);
}
function singleTransition_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromObject: singleTransition_fromObject
    });
}
function offsetToString(val) {
    return objectToString(val, [
        ["position", "offsetPosition"],
        ["path", "offsetPath"],
        ["distance", "offsetDistance"],
        ["rotate", "offsetRotate"],
        ["anchor", "offsetAnchor", "/"],
    ]);
}
/**
 * Converts the given value to a CSS string using the info parameter to inform how the object's
 * properties should be converted to strings. The info parameter is an array of either strings
 * or two- or thre-element tuples. The only string and the first tuple element corresponds to a
 * property expected in the value object to be converted. Each property is converted according
 * to the following rules:
 * - If the array item is just a string, the corresponding value's property is converted using
 *   the valueToString function.
 * - If the second element is null or undefined, the corresponding value's property is converted using
 *   the valueToString function..
 * - If the second element is a string it is treated as a name of a longhand style property. The
 *   value's property is converted using the stylePropToString function for this longhand style
 *   property.
 * - If the second element is a function, it is used to convert the value's property.
 * - If a third element exists in the tuple it is treated as a prefix to be placed before the
 *   converted property value.
 *
 * The order of the names determines in which order the properties should be added to the string.
 */
function objectToString(val, info, separator = " ") {
    if (val == null)
        return "";
    else if (typeof val !== "object")
        return val.toString();
    let buf = [];
    info.forEach(nameOrTuple => {
        // get the name of the property in the value to be converted and the corresponding value;
        // if the properties value is not defined, skip it.
        let propName = typeof nameOrTuple === "string" ? nameOrTuple : nameOrTuple[0];
        let propVal = val[propName];
        if (propVal == null)
            return;
        // check whether we have a prefix
        let prefix = typeof nameOrTuple === "string" ? undefined : nameOrTuple[2];
        if (prefix)
            buf.push(prefix);
        let convertor = typeof nameOrTuple === "string" ? undefined : nameOrTuple[1];
        if (!convertor)
            buf.push(UtilFuncs_1.valueToString(propVal));
        else if (typeof convertor === "string")
            buf.push(stylePropToString(convertor, propVal, true));
        else
            buf.push(convertor(propVal));
    });
    return buf.join(separator);
}
exports.objectToString = objectToString;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for handling Stylesets.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Merges properties from the source styleset to the target styleset. All regular properties are
 * replaced. The "--" property gets special treatment because it is an array.
 * @param target
 * @param source
 * @returns Reference to the target styleset if not null or a new styleset otherwise.
 */
function mergeStylesets(target, source) {
    if (!source)
        return target ? target : {};
    // if target is not defined, create it as an empty object. This object will be returned after
    // properties from the source are copied to it.
    if (!target) {
        target = {};
        Object.assign(target, source);
        return target;
    }
    // check whether custom properties are defined. If not, we can just use the Object.assign function.
    let sourceCustomProps = source["--"];
    if (!sourceCustomProps) {
        Object.assign(target, source);
        return target;
    }
    // merge custom and important properties
    mergeStylesetCustomProps(target, source);
    // copy all other properties from the source
    for (let propName in source) {
        if (propName === "!" || propName === "--")
            continue;
        else
            target[propName] = source[propName];
    }
    return target;
}
exports.mergeStylesets = mergeStylesets;
/**
 * Merges "--" property from the source styleset to the target styleset.
 */
function mergeStylesetCustomProps(target, source) {
    // check whether custom properties and important properties are defined
    let sourceCustomProps = source["--"];
    if (!sourceCustomProps)
        return;
    // merge custom properties
    if (sourceCustomProps) {
        let targetCustomProps = target["--"];
        target["--"] = !targetCustomProps ? sourceCustomProps.slice() : targetCustomProps.concat(sourceCustomProps);
    }
}
exports.mergeStylesetCustomProps = mergeStylesetCustomProps;
/** Converts the given styleset to its string representation */
function stylesetToString(styleset) {
    if (!styleset)
        return "";
    let s = "";
    forAllPropsInStylset(styleset, (name, value, isCustom) => {
        if (isCustom)
            s += `${name}:${value};`;
        else
            s += `${UtilFuncs_1.camelToDash(name)}:${value};`;
    });
    return s;
}
exports.stylesetToString = stylesetToString;
/**
 * Extracts name and string values from the given custom CSS property definition.
 * @param customVal
 */
function getCustomPropNameAndValue(customVal) {
    if (!customVal)
        return [];
    let varName;
    let template;
    let value;
    if (customVal.length === 2) {
        varName = customVal[0].cssName;
        template = customVal[0].template;
        value = customVal[1];
    }
    else {
        varName = customVal[0];
        if (!varName)
            return [];
        else if (!varName.startsWith("--"))
            varName = "--" + varName;
        template = customVal[1];
        if (!varName || !template)
            return [];
        value = customVal[2];
    }
    return [varName, stylePropToString(template, value, true)];
}
exports.getCustomPropNameAndValue = getCustomPropNameAndValue;
/**
 * Converts the given style property to the CSS style string. Property name cn be in either
 * dash or camel form.
 * @param style
 */
function stylePropToString(propName, propVal, valueOnly) {
    if (!propName)
        return "";
    // find information object for the property
    let info = StylePropertyInfos[UtilFuncs_1.dashToCamel(propName)];
    // if the property value is an object with the "!" property, then the actual value is the
    // value of this property and we also need to set the "!important" flag
    let varValue = propVal;
    let impFlag = false;
    if (typeof propVal === "object" && "!" in propVal) {
        varValue = propVal["!"];
        impFlag = true;
    }
    let stringValue = !info
        ? UtilFuncs_1.valueToString(varValue)
        : typeof info === "object"
            ? UtilFuncs_1.valueToString(varValue, info)
            : info(varValue);
    if (!stringValue && !valueOnly)
        stringValue = "initial";
    if (impFlag)
        stringValue += " !important";
    return valueOnly ? stringValue : `${UtilFuncs_1.camelToDash(propName)}:${stringValue}`;
}
exports.stylePropToString = stylePropToString;
/**
 * For each property - regular and custom - in the given styleset invokes the appropriate
 * function that gets the property name and the value converted to string.
 * @param styleset
 * @param forProp
 * @param forCustomProp
 */
function forAllPropsInStylset(styleset, forProp) {
    for (let propName in styleset) {
        if (propName === "--") {
            // special handling of the "--" property, which is an array where each item is
            // a two-item or three-item array
            let propVal = styleset[propName];
            for (let customVal of propVal) {
                if (!customVal)
                    continue;
                let [varName, varValue] = getCustomPropNameAndValue(customVal);
                if (!varName)
                    continue;
                if (varValue == null)
                    varValue = "";
                forProp(varName, varValue, true);
            }
        }
        else {
            // get the string representation of the property
            forProp(propName, stylePropToString(propName, styleset[propName], true), false);
        }
    }
}
exports.forAllPropsInStylset = forAllPropsInStylset;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Registry of CSS properties that specifies how their values should be converted to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
// Helper object that is used to indicate that values in an array should be separated by comma.
// We use it many times in the stucture below.
let commaArraySeparator = { arraySeparator: "," };
/**
 * Map of property names to the StylePropertyInfo objects describing custom actions necessary to
 * convert the property value to the CSS-compliant string.
 */
const StylePropertyInfos = {
    animation: {
        fromObject: singleAnimation_fromObject,
        fromAny: singleAnimation_fromStyle,
        arraySeparator: ",",
    },
    animationDelay: multiTimeToStringWithComma,
    animationDuration: multiTimeToStringWithComma,
    animationIterationCount: commaArraySeparator,
    animationFillMode: commaArraySeparator,
    animationName: commaArraySeparator,
    animationPlayState: commaArraySeparator,
    animationTimingFunction: timingFunctionToString,
    background: {
        fromNumber: ColorFuncs_1.colorToString,
        fromObject: singleBackground_fromObject,
        fromAny: singleBackground_fromStyle,
        arrayItemFunc: singleBackground_fromStyle,
        arraySeparator: ",",
    },
    backgroundAttachment: commaArraySeparator,
    backgroundBlendMode: commaArraySeparator,
    backgroundClip: commaArraySeparator,
    backgroundColor: ColorFuncs_1.colorToString,
    backgroundOrigin: commaArraySeparator,
    backgroundPosition: v => UtilFuncs_1.multiPositionToString(v, ","),
    backgroundRepeat: commaArraySeparator,
    backgroundSize: {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        arrayItemFunc: singleBackgroundSize_fromStyle,
        arraySeparator: ","
    },
    baselineShift: UtilFuncs_1.CssLengthMath.styleToString,
    border: borderToString,
    borderBlockEnd: borderToString,
    borderBlockEndColor: ColorFuncs_1.colorToString,
    borderBlockEndWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderBlockStart: borderToString,
    borderBlockStartColor: ColorFuncs_1.colorToString,
    borderBlockStartWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderBottom: borderToString,
    borderBottomColor: ColorFuncs_1.colorToString,
    borderBottomLeftRadius: singleCornerRadiusToString,
    borderBottomRightRadius: singleCornerRadiusToString,
    borderBottomWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderColor: {
        arrayItemFunc: ColorFuncs_1.colorToString,
        fromAny: ColorFuncs_1.colorToString
    },
    borderImage: {
        fromObject: borderImageToString,
    },
    borderImageSlice: borderImageSliceToString,
    borderInlineEnd: borderToString,
    borderInlineEndColor: ColorFuncs_1.colorToString,
    borderInlineEndWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderInlineStart: borderToString,
    borderInlineStartColor: ColorFuncs_1.colorToString,
    borderInlineStartWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderLeft: borderToString,
    borderLeftColor: ColorFuncs_1.colorToString,
    borderLeftWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderRadius: borderRadiusToString,
    borderRight: borderToString,
    borderRightColor: ColorFuncs_1.colorToString,
    borderRightWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderSpacing: multiLengthToStringWithSpace,
    borderTop: borderToString,
    borderTopColor: ColorFuncs_1.colorToString,
    borderTopLeftRadius: singleCornerRadiusToString,
    borderTopRightRadius: singleCornerRadiusToString,
    borderTopWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderWidth: multiLengthToStringWithSpace,
    bottom: UtilFuncs_1.CssLengthMath.styleToString,
    boxShadow: {
        fromObject: singleBoxShadow_fromObject,
        arraySeparator: ",",
    },
    caretColor: ColorFuncs_1.colorToString,
    clip: {
        fromArray: v => `rect(${multiLengthToStringWithSpace(v)}`
    },
    color: ColorFuncs_1.colorToString,
    columnGap: UtilFuncs_1.CssLengthMath.styleToString,
    columnRule: borderToString,
    columnRuleColor: ColorFuncs_1.colorToString,
    columnRuleStyle: UtilFuncs_1.valueToString,
    columnRuleWidth: multiLengthToStringWithSpace,
    columns: columnsToString,
    columnWidth: UtilFuncs_1.CssLengthMath.styleToString,
    cursor: cursorToString,
    fill: ColorFuncs_1.colorToString,
    fillOpacity: UtilFuncs_1.CssPercentMath.styleToString,
    flex: flexToString,
    flexBasis: UtilFuncs_1.CssLengthMath.styleToString,
    floodColor: ColorFuncs_1.colorToString,
    font: {
        fromObject: font_fromObject
    },
    fontSize: UtilFuncs_1.CssLengthMath.styleToString,
    fontStyle: fontStyleToString,
    gap: multiLengthToStringWithSpace,
    gridColumnGap: UtilFuncs_1.CssLengthMath.styleToString,
    gridGap: multiLengthToStringWithSpace,
    gridRowGap: UtilFuncs_1.CssLengthMath.styleToString,
    height: UtilFuncs_1.CssLengthMath.styleToString,
    inlineSize: UtilFuncs_1.CssLengthMath.styleToString,
    left: UtilFuncs_1.CssLengthMath.styleToString,
    letterSpacing: UtilFuncs_1.CssLengthMath.styleToString,
    lightingColor: ColorFuncs_1.colorToString,
    margin: multiLengthToStringWithSpace,
    marginBlockEnd: UtilFuncs_1.CssLengthMath.styleToString,
    marginBlockStart: UtilFuncs_1.CssLengthMath.styleToString,
    marginBottom: UtilFuncs_1.CssLengthMath.styleToString,
    marginInlineEnd: UtilFuncs_1.CssLengthMath.styleToString,
    marginInlineStart: UtilFuncs_1.CssLengthMath.styleToString,
    marginLeft: UtilFuncs_1.CssLengthMath.styleToString,
    marginRight: UtilFuncs_1.CssLengthMath.styleToString,
    marginTop: UtilFuncs_1.CssLengthMath.styleToString,
    maxBlockSize: UtilFuncs_1.CssLengthMath.styleToString,
    maxHeight: UtilFuncs_1.CssLengthMath.styleToString,
    maxInlineSize: UtilFuncs_1.CssLengthMath.styleToString,
    maxWidth: UtilFuncs_1.CssLengthMath.styleToString,
    maxZoom: UtilFuncs_1.CssPercentMath.styleToString,
    minBlockSize: UtilFuncs_1.CssLengthMath.styleToString,
    minHeight: UtilFuncs_1.CssLengthMath.styleToString,
    minInlineSize: UtilFuncs_1.CssLengthMath.styleToString,
    minWidth: UtilFuncs_1.CssLengthMath.styleToString,
    minZoom: UtilFuncs_1.CssPercentMath.styleToString,
    objectPosition: UtilFuncs_1.positionToString,
    offset: offsetToString,
    offsetAnchor: UtilFuncs_1.positionToString,
    offsetDistance: UtilFuncs_1.CssLengthMath.styleToString,
    offsetPosition: UtilFuncs_1.positionToString,
    offsetRotate: {
        fromAny: UtilFuncs_1.CssAngleMath.styleToString
    },
    outline: borderToString,
    outlineColor: ColorFuncs_1.colorToString,
    outlineOffset: UtilFuncs_1.CssLengthMath.styleToString,
    outlineStyle: UtilFuncs_1.valueToString,
    padding: multiLengthToStringWithSpace,
    paddingBlockEnd: UtilFuncs_1.CssLengthMath.styleToString,
    paddingBlockStart: UtilFuncs_1.CssLengthMath.styleToString,
    paddingBottom: UtilFuncs_1.CssLengthMath.styleToString,
    paddingInlineEnd: UtilFuncs_1.CssLengthMath.styleToString,
    paddingInlineStart: UtilFuncs_1.CssLengthMath.styleToString,
    paddingLeft: UtilFuncs_1.CssLengthMath.styleToString,
    paddingRight: UtilFuncs_1.CssLengthMath.styleToString,
    paddingTop: UtilFuncs_1.CssLengthMath.styleToString,
    perspective: UtilFuncs_1.CssLengthMath.styleToString,
    perspectiveOrigin: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    quotes: {
        arrayItemFunc: v => `"${v}"`
    },
    right: UtilFuncs_1.CssLengthMath.styleToString,
    rowGap: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMargin: multiLengthToStringWithSpace,
    scrollMarginBlock: multiLengthToStringWithSpace,
    scrollMarginBlockEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginBlockStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginBottom: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginInline: multiLengthToStringWithSpace,
    scrollMarginInlineEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginInlineStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginLeft: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginRight: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginTop: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPadding: multiLengthToStringWithSpace,
    scrollPaddingBlock: multiLengthToStringWithSpace,
    scrollPaddingBlockEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingBlockStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingBottom: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingInline: multiLengthToStringWithSpace,
    scrollPaddingInlineEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingInlineStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingLeft: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingRight: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingTop: UtilFuncs_1.CssLengthMath.styleToString,
    shapeMargin: UtilFuncs_1.CssLengthMath.styleToString,
    stopColor: ColorFuncs_1.colorToString,
    tabSize: UtilFuncs_1.CssLengthMath.styleToString,
    textCombineUpright: {
        fromNumber: v => `digits ${v}`
    },
    textDecoration: {
        fromNumber: ColorFuncs_1.colorToString,
        fromObject: textDecoration_fromObject
    },
    textDecorationColor: ColorFuncs_1.colorToString,
    textDecorationThickness: UtilFuncs_1.CssLengthMath.styleToString,
    textEmphasis: {
        arrayItemFunc: ColorFuncs_1.colorToString
    },
    textEmphasisColor: ColorFuncs_1.colorToString,
    textIndent: {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        arrayItemFunc: UtilFuncs_1.CssLengthMath.styleToString
    },
    textShadow: {
        fromObject: singleBoxShadow_fromObject,
        arraySeparator: ",",
    },
    textSizeAdjust: UtilFuncs_1.CssPercentMath.styleToString,
    top: UtilFuncs_1.CssLengthMath.styleToString,
    transformOrigin: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    transition: {
        fromObject: singleTransition_fromObject,
        fromAny: singleTransition_fromStyle,
        arraySeparator: ",",
    },
    transitionDelay: {
        fromAny: UtilFuncs_1.CssTimeMath.styleToString,
        arraySeparator: ","
    },
    transitionDuration: {
        fromAny: UtilFuncs_1.CssTimeMath.styleToString,
        arraySeparator: ","
    },
    transitionTimingFunction: timingFunctionToString,
    translate: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    verticalAlign: {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString
    },
    width: UtilFuncs_1.CssLengthMath.styleToString,
    willChange: {
        fromString: UtilFuncs_1.camelToDash
    },
    wordSpacing: UtilFuncs_1.CssLengthMath.styleToString,
    zoom: UtilFuncs_1.CssPercentMath.styleToString,
    // special properties for IVarRule types
    "CssLength": UtilFuncs_1.CssLengthMath.styleToString,
    "CssAngle": UtilFuncs_1.CssAngleMath.styleToString,
    "CssTime": UtilFuncs_1.CssTimeMath.styleToString,
    "CssResolution": UtilFuncs_1.CssResolutionMath.styleToString,
    "CssFrequency": UtilFuncs_1.CssFrequencyMath.styleToString,
    "CssPercent": UtilFuncs_1.CssPercentMath.styleToString,
    "CssPosition": UtilFuncs_1.positionToString,
    "CssColor": ColorFuncs_1.colorToString,
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS supports query.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/** Converts the given supports query to its string representation */
function supportsQueryToString(query) {
    if (!query)
        return "";
    else if (typeof query === "string")
        return query;
    else if (Array.isArray(query))
        return query.map((singleQuery) => singleSupportsQueryToString(singleQuery)).join(" or ");
    else
        return singleSupportsQueryToString(query);
}
exports.supportsQueryToString = supportsQueryToString;
/** Converts the given supports query to its string representation */
function singleSupportsQueryToString(query) {
    if (!query)
        return "";
    else if (typeof query === "string")
        return query;
    let propNames = Object.keys(query).filter((propName) => propName != "$negate");
    if (propNames.length === 0)
        return "";
    let not = query.$negate ? "not" : "";
    return `${not} (${propNames.map((propName) => stylePropToString(propName, query[propName])).join(") and (")})`;
}
exports.singleSupportsQueryToString = singleSupportsQueryToString;


/***/ }),

/***/ "./lib/styles/UtilFuncs.js":
/*!*********************************!*\
  !*** ./lib/styles/UtilFuncs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Basics.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts dashe-case to camelCase, e.g. font-size to fontSize.
 * @param dash
 */
function dashToCamel(dash) {
    if (!dash)
        return dash;
    return dash.replace(/-([a-zA-Z])/g, (x, $1) => $1.toUpperCase());
}
exports.dashToCamel = dashToCamel;
/**
 * Converts camelCase to dash-case, e.g. fontSize to font-size.
 * @param camel
 */
function camelToDash(camel) {
    return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
exports.camelToDash = camelToDash;
/**
 * Converts a value of an arbitrary type to a single string. The optional options parameter
 * can define how specific types are converted.
 */
function valueToString(val, options) {
    if (!options) {
        // standard processing:
        // - null/undefined become empty string.
        // - call valueToString (proxy objects) if exist.
        // - function: call without parameters.
        // - everything else: call toString().
        if (val == null)
            return "";
        else if (typeof val === "string")
            return val;
        else if (Array.isArray(val))
            return arrayToString(val);
        else if (typeof val === "function")
            return val();
        else if (typeof val.valueToString === "function")
            return val.valueToString();
        else
            return val.toString();
    }
    else {
        // processing with options. For all types except null and string, if the type-specific
        // function is not defined, call fromAny if defined.
        if (val == null)
            return options.fromNull ? options.fromNull(val) : "";
        else if (typeof val === "string")
            return options.fromString ? options.fromString(val) : val;
        else if (typeof val === "number")
            return options.fromNumber ? options.fromNumber(val) : options.fromAny ? options.fromAny(val) : val.toString();
        else if (typeof val === "function")
            return valueToString(options.funcArgs ? val(...options.funcArgs) : val());
        else if (Array.isArray(val)) {
            if (options.fromArray)
                return options.fromArray(val);
            else {
                let separator = options.arraySeparator != null ? options.arraySeparator : " ";
                return arrayToString(val, options.arrayItemFunc || options.fromAny || undefined, separator);
            }
        }
        else if (typeof val === "object") {
            if (typeof val.valueToString === "function")
                return val.valueToString();
            else if (options.fromObject)
                return options.fromObject(val);
            else if (options.fromAny)
                return options.fromAny(val);
            else
                return val.toString();
        }
        else if (typeof val === "boolean")
            return options.fromBool ? options.fromBool(val) : options.fromAny ? options.fromAny(val) : val.toString();
        else if (options.fromAny)
            return options.fromAny(val);
        else
            return val.toString();
    }
}
exports.valueToString = valueToString;
/**
 * Converts an array of the given typeto a single string using the given separator.
 * Elements of the array are converted to strings using the given function.
 */
function arrayToString(val, func, separator = " ") {
    return !val || val.length === 0
        ? ""
        : val.filter(x => x != null).map(y => func ? func(y) : valueToString(y)).join(separator);
}
exports.arrayToString = arrayToString;
/**
 * The templateStringToString is a tag function helper that converts the template string with
 * parameters to a string using the given function to convert parameters.
 */
function templateStringToString(parts, params, convertFunc) {
    // number of parameters is always 1 less than the number of string parts
    let paramsLen = params.length;
    if (paramsLen === 0)
        return parts[0];
    let s = "";
    for (let i = 0; i < paramsLen; i++)
        s += parts[i] + (convertFunc ? convertFunc(params[i]) : valueToString(params[i]));
    // add the last part
    return s + parts[paramsLen];
}
exports.templateStringToString = templateStringToString;
/**
 * Converts a single numeric value to a CSS string optionally appending units that can be different
 * for integer and floating point numbers.
 * @param n Number to convert to string representation.
 * @param intUnit Units to append if the number is integer.
 * @param floatUnit Units to append if the number is floating point.
 */
function numberToString(n, intUnit = "", floatUint = "") {
    return Number.isInteger(n) ? n + intUnit : n + floatUint;
}
/**
 * Converts time style value to the CSS string.
 * @param val Number as a style property type.
 * @param convertFunc Function that converts a number to a string.
 */
function styleToString(val, convertFunc) {
    return valueToString(val, { fromNumber: convertFunc });
}
/**
 * Converts single CssNumber or array of CssNumber objects to the CSS string.
 * @param val Single- or multi-number style value.
 * @param convertFunc Function that converts a number to a string.
 * @param separator String to use to separate multiple values.
 */
function multiStyleToString(val, convertFunc, separator = " ") {
    return valueToString(val, {
        fromNumber: convertFunc,
        arrayItemFunc: v => styleToString(v, convertFunc),
        arraySeparator: separator
    });
}
/**
 * The mathFunc function returns one of the mathematic CSS function that accepts one or more
 * parameters whose type is derived from NumberBase<T>.
 */
function mathFunc(name, params, convertFunc) {
    return `${name}(${multiStyleToString(params, convertFunc, ",")})`;
}
/**
 * The calcFunc function returns the string representation of the calc() CSS function.
 */
function calcFunc(parts, params, convertFunc) {
    return `calc(${templateStringToString(parts, params, (v) => styleToString(v, convertFunc))})`;
}
/**
 * The unitFunc function returns string representation of the given number with the given units.
 */
function unitFunc(n, unit) {
    return n + unit;
}
/**
 * The NummberMath class contains methods that implement CSS mathematic functions on the
 * numeric CSS types. When arguments for these functions are of the number JavaScript type they
 * are converted to strings by calling a function specified in the constructor.
 */
class NumberMath {
    constructor(convertFunc) {
        this.convertFunc = convertFunc;
        this.numberToString = (n) => {
            return this.convertFunc(n);
        };
        this.styleToString = (val) => {
            return styleToString(val, this.convertFunc);
        };
        this.multiStyleToString = (val, separator = " ") => {
            return multiStyleToString(val, this.convertFunc, separator);
        };
    }
    min(...params) {
        return () => mathFunc("min", params, this.convertFunc);
    }
    max(...params) {
        return () => mathFunc("max", params, this.convertFunc);
    }
    clamp(min, pref, max) {
        return () => mathFunc("clamp", [min, pref, max], this.convertFunc);
    }
    calc(formulaParts, ...params) {
        return () => calcFunc(formulaParts, params, this.convertFunc);
    }
    percent(n) {
        return () => CssPercentMath.convertFunc(n);
    }
    unit(n, unit) {
        return () => unitFunc(n, unit);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Unitless number
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssNumberMath class contains methods that implement CSS mathematic functions on the
 * <number> CSS types.
 */
class CssNumberMath extends NumberMath {
    static convertFunc(n) { return n.toString(); }
    static styleToString(val) { return styleToString(val, CssNumberMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssNumberMath.convertFunc, separator); }
    constructor() { super(CssNumberMath.convertFunc); }
}
exports.CssNumberMath = CssNumberMath;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Percent
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssPercentMath class contains methods that implement CSS mathematic functions on the
 * <percent> CSS types.
 */
class CssPercentMath extends NumberMath {
    static convertFunc(n) { return (Number.isInteger(n) ? n : Math.round(n * 100)) + "%"; }
    static styleToString(val) { return styleToString(val, CssPercentMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssPercentMath.convertFunc, separator); }
    constructor() { super(CssPercentMath.convertFunc); }
}
exports.CssPercentMath = CssPercentMath;
/**
 * Converts the given number to string using the following rules:
 * - if the number is between -1 and 1 (non inclusive), multiplies the number and appends "%"
 * - otherwise, converts the number to string without appending any utints.
 */
function unitlessOrPercentToString(n) {
    return n >= 1 || n <= -1 ? n.toString() : Math.round(n * 100) + "%";
}
exports.unitlessOrPercentToString = unitlessOrPercentToString;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Length
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssLengthMath class contains methods that implement CSS mathematic functions on the
 * <length> CSS types.
 */
class CssLengthMath extends NumberMath {
    static convertFunc(n) { return numberToString(n, "px", "em"); }
    static styleToString(val) { return styleToString(val, CssLengthMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssLengthMath.convertFunc, separator); }
    constructor() { super(CssLengthMath.convertFunc); }
    minmax(min, max) {
        return () => mathFunc("minmax", [min, max], CssLengthMath.convertFunc);
    }
    Q(n) { return this.unit(n, "Q"); }
    ch(n) { return this.unit(n, "ch"); }
    cm(n) { return this.unit(n, "cm"); }
    em(n) { return this.unit(n, "em"); }
    ex(n) { return this.unit(n, "ex"); }
    ic(n) { return this.unit(n, "ic"); }
    in(n) { return this.unit(n, "in"); }
    lh(n) { return this.unit(n, "lh"); }
    mm(n) { return this.unit(n, "mm"); }
    pc(n) { return this.unit(n, "pc"); }
    pt(n) { return this.unit(n, "pt"); }
    px(n) { return this.unit(n, "px"); }
    vb(n) { return this.unit(n, "vb"); }
    vh(n) { return this.unit(n, "vh"); }
    vi(n) { return this.unit(n, "vi"); }
    vw(n) { return this.unit(n, "vw"); }
    rem(n) { return this.unit(n, "rem"); }
    rlh(n) { return this.unit(n, "rlh"); }
    vmax(n) { return this.unit(n, "vmax"); }
    vmin(n) { return this.unit(n, "vmin"); }
    fr(n) { return this.unit(n, "fr"); }
}
exports.CssLengthMath = CssLengthMath;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Angle
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssAngleMath class contains methods that implement CSS mathematic functions on the
 * <angle> CSS types.
 */
class CssAngleMath extends NumberMath {
    static convertFunc(n) { return numberToString(n, "deg", "turn"); }
    static styleToString(val) { return styleToString(val, CssAngleMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssAngleMath.convertFunc, separator); }
    constructor() { super(CssAngleMath.convertFunc); }
    deg(n) { return this.unit(n, "deg"); }
    rad(n) { return this.unit(n, "rad"); }
    grad(n) { return this.unit(n, "grad"); }
    turn(n) { return this.unit(n, "turn"); }
}
exports.CssAngleMath = CssAngleMath;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Time
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssTimeMath class contains methods that implement CSS mathematic functions on the
 * <time> CSS types.
 */
class CssTimeMath extends NumberMath {
    static convertFunc(n) { return numberToString(n, "ms", "s"); }
    static styleToString(val) { return styleToString(val, CssTimeMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssTimeMath.convertFunc, separator); }
    constructor() { super(CssTimeMath.convertFunc); }
    ms(n) { return this.unit(n, "ms"); }
    s(n) { return this.unit(n, "s"); }
}
exports.CssTimeMath = CssTimeMath;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Resolution
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssResolutionMath class contains methods that implement CSS mathematic functions on the
 * <resolution> CSS types.
 */
class CssResolutionMath extends NumberMath {
    static convertFunc(n) { return numberToString(n, "dpi", "x"); }
    static styleToString(val) { return styleToString(val, CssResolutionMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssResolutionMath.convertFunc, separator); }
    constructor() { super(CssResolutionMath.convertFunc); }
    /** Creates resolution value in DPI */
    dpi(n) { return this.unit(n, "dpi"); }
    /** Creates resolution value in DPCM */
    dpcm(n) { return this.unit(n, "dpcm"); }
    /** Creates resolution value in DPPX */
    dppx(n) { return this.unit(n, "dppx"); }
    /** Creates resolution value in DPPX */
    x(n) { return this.unit(n, "x"); }
}
exports.CssResolutionMath = CssResolutionMath;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Frequency
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssFrequencyMath class contains methods that implement CSS mathematic functions on the
 * <frequence> CSS types.
 */
class CssFrequencyMath extends NumberMath {
    static convertFunc(n) { return numberToString(n, "Hz", "kHz"); }
    static styleToString(val) { return styleToString(val, CssFrequencyMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssFrequencyMath.convertFunc, separator); }
    constructor() { super(CssFrequencyMath.convertFunc); }
    hz(n) { return this.unit(n, "Hz"); }
    khz(n) { return this.unit(n, "kHz"); }
}
exports.CssFrequencyMath = CssFrequencyMath;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Position
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts single position style value to the CSS string.
 */
function positionToString(val) {
    return valueToString(val, {
        fromNull: v => "",
        fromNumber: CssLengthMath.styleToString,
        fromArray: v => CssLengthMath.multiStyleToString(v, " ")
    });
}
exports.positionToString = positionToString;
/**
 * Converts multi-position style value to the CSS string.
 */
function multiPositionToString(val, separator) {
    return valueToString(val, {
        arrayItemFunc: positionToString,
        arraySeparator: separator
    });
}
exports.multiPositionToString = multiPositionToString;


/***/ }),

/***/ "./lib/styles/UtilTypes.js":
/*!*********************************!*\
  !*** ./lib/styles/UtilTypes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file contains basic types and functions used to define CSS property types.
 *
 * All CSS properties should accept string as the type of their value even if normally
 * they accept other types (e.g a set of string literals as `"red" | "green" | ...` for the
 * color) property. This is because in addition to their normal values any property
 * can use custom CSS property in the form `var(--propname)`. However, if we add string type
 * to the set of string literals (e.g. `"red" | "green" | string`), this throws off the
 * Intellisense and it doesn't prompt developers for the possible values. The IValueProxy
 * can be used instead of string and this solves the Intellisense issue.
 *
 * Another benefit of using functions is that they are
 * constructed at one time but the string generation occurs at another time. This allows
 * using these objects in the style definition classes. They can reference objects like
 * IVarRule that are not fully initialized yet. However, when the styles should be inserted
 * into DOM the initialization will have already occurred and the function will
 * return a correct string.
 *
 * Note that the proxy functions have a parameter that distinguishes them from
 * other proxy functions. This is because we want to distinguish between different CSS types,
 * so that a function used for one CSS type cannot be used for a different CSS type. For
 * example, the `calc()` function returns the NumberProxy function, while the
 * `linearIngradient()` function returns the ImageProxy function. Thus you cannot use the
 * 'calc()` function for image-based CSS properties and vice versa.
 */
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Web Namespaces.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The WebNamespaces class contains identifiers for the known Web-related namespaces.
 */
class WebNamespaces {
}
exports.WebNamespaces = WebNamespaces;
WebNamespaces.HTML = "http://www.w3.org/1999/xhtml";
WebNamespaces.SVG = "http://www.w3.org/2000/svg";
WebNamespaces.XLink = "http://www.w3.org/1999/xlink";
WebNamespaces.XML = "http://www.w3.org/XML/1998/namespace";
WebNamespaces.XMLNS = "http://www.w3.org/2000/xmlns/";
WebNamespaces.MathML = "http://www.w3.org/1998/Math/MathML";


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU3R5bGVBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9VdGlsQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ291bnRlclJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL01lZGlhRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TZWxlY3RvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLGlHQUFrRDtBQUlsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxTQUFnQixHQUFHLENBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVB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QUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7SUFFNUMsTUFBTSxDQUFFLEdBQXdCLEVBQUUsR0FBd0I7UUFFN0QsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sQ0FBQyxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDeEQ7QUF0Q0Qsc0NBc0NDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixRQUFRO0FBQ1IsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLFlBQWEsU0FBUSxVQUFxQjtJQUU1QyxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLGNBQWMsQ0FBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRixNQUFNLENBQUMsYUFBYSxDQUFFLEdBQXVCLElBQzlDLE9BQU8sYUFBYSxDQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBRSxHQUE0QixFQUFFLFNBQWlCLElBQzNFLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTdFLGdCQUFnQixLQUFLLENBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7SUFFM0MsR0FBRyxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1RDtBQWhCRCxvQ0FnQkM7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLE9BQU87QUFDUCxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILE1BQWEsV0FBWSxTQUFRLFVBQW9CO0lBRTFDLE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FBUyxJQUFZLE9BQU8sY0FBYyxDQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhGLE1BQU0sQ0FBQyxhQUFhLENBQUUsR0FBc0IsSUFDN0MsT0FBTyxhQUFhLENBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckQsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQTJCLEVBQUUsU0FBaUIsSUFDMUUsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUUsZ0JBQWdCLEtBQUssQ0FBRSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztJQUUxQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDdEQ7QUFkRCxrQ0FjQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsYUFBYTtBQUNiLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxVQUEwQjtJQUV0RCxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLGNBQWMsQ0FBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRixNQUFNLENBQUMsYUFBYSxDQUFFLEdBQTRCLElBQ25ELE9BQU8sYUFBYSxDQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0QsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQWlDLEVBQUUsU0FBaUIsSUFDaEYsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRixnQkFBZ0IsS0FBSyxDQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7SUFFdkQsc0NBQXNDO0lBQy9CLEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkQsdUNBQXVDO0lBQ2hDLElBQUksQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekQsdUNBQXVDO0lBQ2hDLElBQUksQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekQsdUNBQXVDO0lBQ2hDLENBQUMsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDdEQ7QUF2QkQsOENBdUJDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixZQUFZO0FBQ1osRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLGdCQUFpQixTQUFRLFVBQXlCO0lBRXBELE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FBUyxJQUFZLE9BQU8sY0FBYyxDQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxGLE1BQU0sQ0FBQyxhQUFhLENBQUUsR0FBMkIsSUFDbEQsT0FBTyxhQUFhLENBQUUsR0FBRyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxRCxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBZ0MsRUFBRSxTQUFpQixJQUMvRSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpGLGdCQUFnQixLQUFLLENBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztJQUUvQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDMUQ7QUFkRCw0Q0FjQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsV0FBVztBQUNYLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7O0dBRUc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBRSxHQUEwQjtJQUV4RCxPQUFPLGFBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNqQixVQUFVLEVBQUUsYUFBYSxDQUFDLGFBQWE7UUFDdkMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7S0FDNUQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDRDQU9DO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixxQkFBcUIsQ0FBRSxHQUErQixFQUFFLFNBQWlCO0lBRXJGLE9BQU8sYUFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLGNBQWMsRUFBRSxTQUFTO0tBQzVCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxzREFNQzs7Ozs7Ozs7Ozs7Ozs7QUNwbUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7O0FBc2hCSCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOztHQUVHO0FBQ0gsTUFBc0IsYUFBYTs7QUFBbkMsc0NBUUM7QUFOZ0Isa0JBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUN0QyxpQkFBRyxHQUFHLDRCQUE0QixDQUFDO0FBQ25DLG1CQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDdkMsaUJBQUcsR0FBRyxzQ0FBc0MsQ0FBQztBQUM3QyxtQkFBSyxHQUFHLCtCQUErQixDQUFDO0FBQ3hDLG9CQUFNLEdBQUcsb0NBQW9DLENBQUMiLCJmaWxlIjoibWltY3NzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW1jc3NUeXBlcy5qc1wiKTtcbiIsIu+7v2ltcG9ydCAqIGFzIENvbG9yVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIHdpdGhcclxuICogdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IENvbG9yVHlwZXMuQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5yZ2JUb1N0cmluZyggciwgZywgYiwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIGh1ZS1zYXR1cmF0aW9uLWxpZ2h0bmVzcyBjb21wb25lbnRzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBIdWUgY29tcG9uZW50IGlzIHRyZWF0ZWQgYXMgdGhlIENTUyBgPGFuZ2xlPmAgdHlwZS4gTnVtYmVycyBhcmUgY29uc2lkZXJlZCBkZWdyZWVzLlxyXG4gKiBcclxuICogVGhlIFNhdHVyYXRpb24gYW5kIExpZ2h0bmVzcyBjb21wb25lbnRzIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2VzOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlIGFyZSBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZCB0byAxMDAuXHJcbiAqXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSBoIEh1ZSBjb21wb25lbnQgYXMgYW4gYW5nbGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBzIFNhdHVyYXRpb24gY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGwgTGlnaHRuZXNzIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbCggaDogbnVtYmVyIHwgc3RyaW5nLCBzOiBudW1iZXIsIGw6IG51bWJlciwgYT86IG51bWJlcik6IENvbG9yVHlwZXMuQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5oc2xUb1N0cmluZyggaCwgcywgbCwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoIGM6IG51bWJlciB8IGtleW9mIENvbG9yVHlwZXMuSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBDb2xvclR5cGVzLkNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuY29sb3JXaXRoQWxwaGFUb1N0cmluZyggYywgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc0FuZ2xlLCBDc3NMZW5ndGh9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuICAgIEdyYWRpZW50U3RvcE9ySGludCwgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgQ3Jvc3NGYWRlUGFyYW0sIEltYWdlUHJveHksIFJhZGlhbEdyYWRpZW50U2hhcGUsIFJhZGlhbEdyYWRpZW50U2l6ZSwgXHJcbiAgICBJR3JhZGllbnQsIElMaW5lYXJHcmFkaWVudCwgSVJhZGlhbEdyYWRpZW50LCBJQ29uaWNHcmFkaWVudFxyXG59IGZyb20gXCIuLi9zdHlsZXMvSW1hZ2VUeXBlc1wiXHJcbmltcG9ydCB7Y29sb3JUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7dmFsdWVUb1N0cmluZywgSU51bWJlck1hdGhDbGFzcywgQ3NzQW5nbGVNYXRoLCBwb3NpdGlvblRvU3RyaW5nLCBDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHsgRXh0ZW50S2V5d29yZCB9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyYWRpZW50IGNsYXNzIGltcGxlbWVudHMgdGhlIElHcmFkaWVudCBpbnRlcmZhY2UgdXNpbmcgcHJvcGVydHkgZ2V0IGFjY2Vzc29yLCB3aGNpaCBhbGxvd3NcclxuICogY3JlYXRlaW5nIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBhcHByb3ByaWVudCBncmFkaWVudCBpbnRlcmZhY2UuIFdlIG5lZWQgbmV3IGluc3RhbmNlcywgYmVjYXVzZVxyXG4gKiB0aGUgZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGVzZSBjYWxsYWJsZSBpbnRlcmZhY2VzIGtlZXAgb3B0aW9uYWwgcGFyYW1ldGVycyBhcyBwcm9wZXJ0aWVzIG9mXHJcbiAqIHRoZSBmdWNudGlvbiBvYmplY3RzIHRoZW1zZWx2ZXMuXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudCBpbXBsZW1lbnRzIElHcmFkaWVudFxyXG57XHJcbiAgICBwdWJsaWMgZ2V0IGxpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcImxpbmVhci1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdMaW5lYXIoKTogSUxpbmVhckdyYWRpZW50IHsgcmV0dXJuIGxpbmVhckdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJhZGlhbC1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdSYWRpYWwoKTogSVJhZGlhbEdyYWRpZW50IHsgcmV0dXJuIHJhZGlhbEdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcImNvbmljLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0NvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1jb25pYy1ncmFkaWVudFwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JhZGllbnQgdmFyaWFibGUgcHJvdmlkZXMgYWNjZXNzIHRvIGZ1bmN0aW9ucyBpbXBsZW1lbnRpbmcgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGxldCBncmFkaWVudDogSUdyYWRpZW50ID0gbmV3IEdyYWRpZW50KCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlKCAuLi5hcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3MpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIElMaW5lYXJHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgbGluZXItZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctbGluZXItZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElMaW5lYXJHcmFkaWVudFxyXG57XHJcbiAgICBsZXQgZjogYW55ID0gKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVByb3h5ID0+XHJcbiAgICAgICAgKCkgPT4gbGluZWFyR3JhZGllbnRUb1N0cmluZyggbmFtZSwgc3RvcHNPckhpbnRzLCBmLmFuZ2xlUGFyYW0pO1xyXG5cclxuXHRmLnRvID0gKGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUpID0+IHtcclxuICAgICAgICBmLmFuZ2xlUGFyYW0gPSBhbmdsZTtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuICAgIFxyXG5cdHJldHVybiBmO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIElSYWRpYWxHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgcmFkaWFsLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudGAgQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50RnVuYyggbmFtZTogc3RyaW5nKTogSVJhZGlhbEdyYWRpZW50XHJcbntcclxuICAgIGxldCBmOiBhbnkgPSAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuc2hhcGVQYXJhbSwgZi5zaXplUGFyYW0sIGYucG9zUGFyYW0pO1xyXG5cclxuICAgIGYuY2lyY2xlID0gKHNpemVPckV4dGVudD86IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiY2lyY2xlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZWxsaXBzZSA9IChzaXplT3JFeHRlbnQ/OiBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiZWxsaXBzZVwiO1xyXG4gICAgICAgIGYuc2l6ZVBhcmFtID0gc2l6ZU9yRXh0ZW50O1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRmLmV4dGVudCA9IChleHRlbnQ6IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBleHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zOyByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSUNvbmljR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGNvbmljLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gY29uaWNHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElDb25pY0dyYWRpZW50XHJcbntcclxuICAgIGxldCBmOiBhbnkgPSAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5hbmdsZVBhcmFtLCBmLnBvc1BhcmFtKTtcclxuXHJcblx0Zi5mcm9tID0gKGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUpID0+IHtcclxuICAgICAgICBmLmFuZ2xlUGFyYW0gPSBhbmdsZTtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5hdCA9IChwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPikgPT4ge1xyXG4gICAgICAgIGYucG9zUGFyYW0gPSBwb3M7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdHJldHVybiBmO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogTGluZWFyR3JhZEFuZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgYW5nbGVTdHJpbmcgPSB2YWx1ZVRvU3RyaW5nKCBhbmdsZSwge1xyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsXHJcbiAgICAgICAgICAgIGZyb21TdHJpbmc6IHYgPT4gL1xcZCsuKi8udGVzdCh2KSA/IHYgOiBcInRvIFwiICsgdlxyXG4gICAgICAgIH0pICsgXCIsXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7YW5nbGVTdHJpbmd9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBzaGFwZTogUmFkaWFsR3JhZGllbnRTaGFwZSwgc2l6ZU9yRXh0ZW50OiBSYWRpYWxHcmFkaWVudFNpemUgfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPixcclxuICAgIHBvczogQ3NzUG9zaXRpb24pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgc2l6ZU9yRXh0ZW50U3RyaW5nID0gc2l6ZU9yRXh0ZW50ID8gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHNpemVPckV4dGVudCwgXCIgXCIpIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3NpdGlvblRvU3RyaW5nKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IHNpemVPckV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtzaXplT3JFeHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIHJldHVybiBgJHtuYW1lfSgke3doYXRBbmRXaGVyZX0ke2dyYWRpZW50U3RvcHNPckhpbnRzVG9TdHJpbmcoIHN0b3BzT3JIaW50cywgQ3NzUGVyY2VudE1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbmljR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgYW5nbGU/OiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvcz86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBhbmdsZSA/IGBmcm9tICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKX1gIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3NpdGlvblRvU3RyaW5nKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IGFuZ2xlIHx8IHBvcyA/IGAke2FuZ2xlU3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc0FuZ2xlTWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHZhbHVlVG9TdHJpbmcoIGFyZ3MsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIG1hdGhDbGFzczogSU51bWJlck1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsLm1hcCggdiA9PiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZyggdiwgbWF0aENsYXNzKSkuam9pbihcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogR3JhZGllbnRTdG9wT3JIaW50LFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB2Lmxlbmd0aCA9PT0gMCA/IFwiXCIgOiB2Lmxlbmd0aCA9PT0gMSA/IG1hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2WzBdKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZyggdiBhcyBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLCBtYXRoQ2xhc3MpXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudENvbG9yQW5kTGVuZ3RoVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogR3JhZGllbnRDb2xvckFuZExlbmd0aCxcclxuICAgIG1hdGhDbGFzczogSU51bWJlck1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2Vjb25kU3RvcCA9IHZhbC5sZW5ndGggPiAyID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsyXSkgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke2NvbG9yVG9TdHJpbmcodmFsWzBdKX0gJHttYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzFdKX0gJHtzZWNvbmRTdG9wfWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbHVlVG9TdHJpbmcodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBSdWxlVHlwZXMgZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSdWxlQ29udGFpbmVyRnVuY3MgZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7Q3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0UnVsZSwgQ2xhc3NSdWxlLCBJRFJ1bGUsIFNlbGVjdG9yUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1N0eWxlUnVsZXNcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuLi9ydWxlcy9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiXHJcbmltcG9ydCB7Q291bnRlclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9Db3VudGVyUnVsZXNcIjtcclxuaW1wb3J0IHtGb250RmFjZVJ1bGUsIEltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGUsIFBhZ2VSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGUsIE1lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyb3VwUnVsZXNcIlxyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBhYnN0cmFjdCBydWxlLCB3aGljaCBkZWZpbmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgYnkgb3RoZXIgc3R5bGVcclxuICogcnVsZXMuIEFic3RyYWN0IHJ1bGVzIGRvbid0IGhhdmUgc2VsZWN0b3JzIGFuZCBhcmUgbm90IGluc2VydGVkIGludG8gRE9NLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhYnN0cmFjdCggc3R5bGU6IFJ1bGVUeXBlcy5Db21iaW5lZFN0eWxlc2V0KTogUnVsZVR5cGVzLklTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBSdWxlVHlwZXMuQ29tYmluZWRTdHlsZXNldCxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUNsYXNzUnVsZSk6IFJ1bGVUeXBlcy5JQ2xhc3NSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBJRCBydWxlLiBUaGUgSUQgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBJRCBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgSUQuIFN1Y2ggSUQgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpZCggc3R5bGU/OiBSdWxlVHlwZXMuQ29tYmluZWRTdHlsZXNldCxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUlEUnVsZSk6IFJ1bGVUeXBlcy5JSURSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IElEUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzZWxlY3RvciBydWxlLiBTZWxlY3RvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgc3RyaW5nIG9yIHZpYSB0aGUgc2VsZWN0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN0eWxlKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlOiBSdWxlVHlwZXMuQ29tYmluZWRTdHlsZXNldCk6IFJ1bGVUeXBlcy5JU3R5bGVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBSdWxlVHlwZXMuQW5pbWF0aW9uRnJhbWVbXSxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUFuaW1hdGlvblJ1bGUpOiBSdWxlVHlwZXMuSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQW5pbWF0aW9uUnVsZSggZnJhbWVzLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY3VzdG9tIHZhcmlhYmxlIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBUaGUgdmFyaWFibGUgbmFtZSB3aWxsXHJcbiAqIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlXHJcbiAqIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjdXN0b20gdmFyaWFibGUgcnVsZS4gVGhlXHJcbiAqIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSB2YWx1ZSBqdXN0IHRvIFwiZGVjbGFyZVwiIHRoZSB2YXJpYWJsZS4gU3VjaFxyXG4gKiB2YXJpYWJsZSBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdGVtcGxhdGU6IEssIHByb3BWYWw/OiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRcdFx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgUnVsZVR5cGVzLklWYXJSdWxlPEs+KTogUnVsZVR5cGVzLklWYXJSdWxlPEs+XHJcbntcclxuXHRyZXR1cm4gbmV3IFZhclJ1bGUoIHRlbXBsYXRlLCBwcm9wVmFsLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY291bnRlciBvYmplY3QuIFRoZSBjb3VudGVyIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY291bnRlciBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjb3VudGVyKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUNvdW50ZXJSdWxlKTogUnVsZVR5cGVzLklDb3VudGVyUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSk6IFJ1bGVUeXBlcy5JSW1wb3J0UnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB1cmwsIG1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnkpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZm9udC1mYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGZvbnRmYWNlKCBmb250ZmFjZTogSUZvbnRGYWNlKTogUnVsZVR5cGVzLklGb250RmFjZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCBmb250ZmFjZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbmFtZXNwYWNlKCBuYW1lc3BhY2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogUnVsZVR5cGVzLklOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIG5hbWVzcGFjZSwgcHJlZml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcGFnZSggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpOiBSdWxlVHlwZXMuSVBhZ2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCBwc2V1ZG9DbGFzcywgc3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3VwcG9ydHM8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb248Tz4sIE8gZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPihcclxuXHRxdWVyeTogU3VwcG9ydHNRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgUnVsZVR5cGVzLklTdHlsZURlZmluaXRpb25DbGFzczxULE8+KTogUnVsZVR5cGVzLklTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgaW5zdGFuY2VPckNsYXNzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG1lZGlhPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbj4oXHJcblx0cXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPik6IFJ1bGVUeXBlcy5JTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IE1lZGlhUnVsZSggcXVlcnksIGluc3RhbmNlT3JDbGFzcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgY3JlYXRlcyB1bmlxdWUgbmFtZXMgZm9yIGFsbCBuYW1lZFxyXG4gKiBlbnRpdGllcy4gRm9yIGEgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvbmx5IGEgc2luZ2xlIGluc3RhbmNlIGlzIGNyZWF0ZWQsIG5vIG1hdHRlciBob3dcclxuICogbWFueSB0aW1lcyB0aGlzIGZ1bmN0aW9uIGlzIGludm9rZWQuIEhvd2V2ZXIsIGlmIGFuIGluc3RhbmNlLCB3aGljaCBoYXMgbm90IHlldCBiZWVuIHByb2Nlc3NlZCxcclxuICogaXMgcGFzc2VkLCB0aGVuIGEgbmV3IHNldCBvZiB1bmlxdWUgbmFtZXMgd2lsbCBiZSBjcmVhdGVkIGZvciBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPihcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFQgfCBSdWxlVHlwZXMuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdHJldHVybiBSdWxlQ29udGFpbmVyRnVuY3MucHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdGFuY2VPckNsYXNzKSBhcyBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbWJlZHMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW50byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LiBXaGVuIGFjdGl2YXRlZCxcclxuICogdGhlIGVtYmVkZGVkIG9iamVjdCBkb2Vzbid0IGNyZWF0ZSBpdHMgb3duIGA8c3R5bGU+YCBlbGVtZW50IGJ1dCB1c2VzIHRoYXQgb2YgaXRzIG93bmVyLiBUaGlzXHJcbiAqIGFsbG93cyBjcmVhdGluZyBtYW55IHNtYWxsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBpbnN0ZWFkIG9mIG9uZSBodWdlIG9uZSB3aXRob3V0IGluY3VycmluZ1xyXG4gKiB0aGUgb3ZlcmhlYWQgb2YgbWFueSBgPHN0eWxlPmAgZWxlbWVudHMuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgYXMgb3Bwb3NlZCB0byB0aGUgJHVzZSBmdW5jdGlvbiwgdGhlICRlbWJlZCBmdW5jdGlvbiBhbHdheXMgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZlxyXG4gKiB0aGUgZ2l2ZW4gY2xhc3MgYW5kIGRvZXNuJ3QgYXNzb2NpYXRlIHRoZSBjbGFzcyB3aXRoIHRoZSBjcmVhdGVkIGluc3RhbmNlLiBUaGF0IG1lYW5zIHRoYXQgaWZcclxuICogYSBjbGFzcyBpcyBlbWJlZGRlZCBpbnRvIG1vcmUgdGhhbiBvbmUgXCJvd25lclwiLCB0d28gc2VwYXJhdGUgaW5zdGFuY2VzIG9mIGVhY2ggQ1NTIHJ1bGUgd2lsbCBiZVxyXG4gKiBjcmVhdGVkIHdpdGggZGlmZmVyZW50IHVuaXF1ZSBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZW1iZWQ8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0Ly8gcmV0dXJuIGRlZmluaXRpb24gaW5zdGFuY2Ugd2l0aG91dCBwcm9jZXNzaW5nIGl0LiBUaGlzIGlzIHRoZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGRlZmludGlvblxyXG5cdC8vIHdpbGwgYmUgZW1iZWRkZWQgaW50byBhbm90aGVyIGRlZmluaXRpb24uXHJcblx0cmV0dXJuIGluc3RhbmNlT3JDbGFzcyBpbnN0YW5jZW9mIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb25cclxuXHRcdD8gaW5zdGFuY2VPckNsYXNzXHJcblx0XHQ6IG5ldyBpbnN0YW5jZU9yQ2xhc3MoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmXHJcbiAqIHRoZSBpbnB1dCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIGJ1dCBhIGNsYXNzLCB3aGljaCBpcyBub3QgeWV0IGFzc29jaWF0ZWQgd2l0aCBhbiBpbnN0YW5jZSxcclxuICogdGhlIGluc3RhbmNlIGlzIGZpcnN0IGNyZWF0ZWQgYW5kIHByb2Nlc3NlZC4gTm90ZSB0aGF0IGVhY2ggc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnNcclxuICogYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSBvbmx5IHVwb24gZmlyc3QgYWN0aXZhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWN0aXZhdGU8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5hY3RpdmF0ZSggaW5zdGFuY2VPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaFxyXG4gKiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kXHJcbiAqIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGRlYWN0aXZhdGUoIGluc3RhbmNlOiBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5kZWFjdGl2YXRlKCBpbnN0YW5jZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTaG9ydE5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHJldHVybiBSdWxlQ29udGFpbmVyRnVuY3MuZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlLCBwcmVmaXgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25jYXRlbmF0ZXMgdGhlIG5hbWVzIG9mIHRoZSBnaXZlbiBjbGFzc2VzIGludG8gYSBzaW5nbGUgc3RyaW5nIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIGFcclxuICogYGNsYXNzYCBwcm9wZXJ0eSBvZiBhbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBjbGFzc2VzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlcyggLi4uY2xhc3NlczogKFJ1bGVUeXBlcy5JQ2xhc3NSdWxlIHwgRXh0ZW5kZWQ8c3RyaW5nPilbXSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbHVlVG9TdHJpbmcoIGNsYXNzZXMsIHtcclxuXHRcdGFycmF5SXRlbUZ1bmM6IHYgPT4gdiBpbnN0YW5jZW9mIENsYXNzUnVsZSA/IHYubmFtZSA6IHZhbHVlVG9TdHJpbmcodilcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgQ3NzTGVuZ3RoLCBDc3NQZXJjZW50LCBDc3NBbmdsZSwgQ3NzTnVtYmVyLCBPbmVPckJveCwgQ3NzUG9pbnR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtTZWxlY3Rvckl0ZW0sIFNlbGVjdG9yUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFN0eWxlc2V0LCBGaWx0ZXJQcm94eSwgQmFzaWNTaGFwZVByb3h5LFxyXG5cdFRyYW5zZm9ybVByb3h5LCBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlLCBGaWxsUnVsZV9TdHlsZVR5cGUsIElQYXRoQnVpbGRlciwgUmF5UHJveHksXHJcblx0RXh0ZW50S2V5d29yZCwgRXh0ZW5kZWRTdHlsZXNldCwgU3RyaW5nU3R5bGVzZXRcclxufSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge1xyXG5cdHN0eWxlUHJvcFRvU3RyaW5nLCBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCwgYm9yZGVyUmFkaXVzVG9TdHJpbmcsIGZvckFsbFByb3BzSW5TdHlsc2V0XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aCwgYXJyYXlUb1N0cmluZywgQ3NzQW5nbGVNYXRoLCBDc3NOdW1iZXJNYXRoLCBwb3NpdGlvblRvU3RyaW5nLFxyXG5cdCB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nLFxyXG5cdCBjYW1lbFRvRGFzaFxyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuIFRoaXMgZnVuY3Rpb24gaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3QgYmVcclxuICogaW52b2tlZCB3aXRoIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvciggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IFNlbGVjdG9ySXRlbVtdKTogU2VsZWN0b3JQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0eWxlc2V0IG1hbmlwdWxhdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byBhIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BOYW1lIFN0eWxlIHByb3BlcnR5IG5hbWUgdGhhdCBkZXRlcm1pbmVzIGhvdyB0aGUgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZFxyXG4gKiB0byBhIENTUyBjb21wbGlhbnQgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVQcm9wVmFsdWUgVmFsdWUgdG8gY29udmVydC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZVByb3BWYWx1ZTxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIHN0eWxlUHJvcE5hbWU6IEssXHJcblx0c3R5bGVQcm9wVmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10pOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRyZXR1cm4gc3R5bGVQcm9wVG9TdHJpbmcoIHN0eWxlUHJvcE5hbWUsIHN0eWxlUHJvcFZhbHVlLCB0cnVlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0eWxlc2V0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWRcclxue1xyXG5cdGlmICghc3R5bGVzZXQpXHJcblx0XHRlbG0ucmVtb3ZlQXR0cmlidXRlKCBcInN0eWxlXCIpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgZWxtU3R5bGUgPSBlbG0uc3R5bGU7XHJcblx0XHRmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQsXHJcblx0XHRcdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHsgZWxtU3R5bGUuc2V0UHJvcGVydHkoIGNhbWVsVG9EYXNoKCBuYW1lKSwgdmFsdWUpIH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHJpbmdTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWRcclxue1xyXG5cdGlmICghc3R5bGVzZXQpXHJcblx0XHRlbG0ucmVtb3ZlQXR0cmlidXRlKCBcInN0eWxlXCIpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgc3R5bGUgPSAoZWxtIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG5cdFx0XHRzdHlsZVtwcm9wTmFtZV0gPSBzdHlsZXNldFtwcm9wTmFtZV07XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gW1tTdHlsZXNldF1dIG9iamVjdCBpbnRvIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBTdHlsZXNldCdzIHByb3BlcnR5IGlzXHJcbiAqIGNvbnZlcnRlZCB0byBpdHMgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBzdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldFxyXG57XHJcblx0bGV0IHJlczogU3RyaW5nU3R5bGVzZXQgPSB7fTtcclxuXHJcblx0Zm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0LFxyXG5cdFx0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4geyByZXNbbmFtZV0gPSB2YWx1ZSB9KTtcclxuXHJcblx0cmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgdHdvIFN0eWxlc2V0IG9iamVjdHMgYnkgY29udmVydGluZyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHN0cmluZ3MgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcbiAqIHRoYXQgY29udGFpbnMgc3RyaW5nIHZhbHVlcyBvZiBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBuZXcgb3IgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGluIHRoZSBuZXdcclxuICogc3R5bGVzZXQgYW5kIHVuZGVmaW5lZCB2YWx1ZXMgZm9yIHByb3BlcnRpZXMgdGhhdCBleGlzdCBpbiB0aGUgb2xkIHN0eWxlc2V0IGJ1dCBkb24ndCBleGlzdFxyXG4gKiBpbiB0aGUgbmV3IG9uZS5cclxuICogQHBhcmFtIG9sZFN0eWxlc2V0IFxyXG4gKiBAcGFyYW0gbmV3U3R5bGVzZXQgXHJcbiAqIEByZXR1cm5zIFN0cmluZ1N0eWxlc2V0IG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG9sZCBhbmQgbmV3XHJcbiAqIHN0eWxlc2V0cy4gUHJvcGVydGllcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIG9sZCBidXQgZG9uJ3QgZXhpc3QgaW4gdGhlIG5ldyBzdHlsZXNldCwgd2lsbCBoYXZlXHJcbiAqIHRoZWlyIHZhbHVlcyBzZXQgdG8gdW5kZWZpbmVkLiBJZiB0aGVyZSBpcyBubyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gc3R5bGVzZXRzIG51bGwgaXNcclxuICogcmV0dXJuZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZlN0eWxlc2V0cyggb2xkU3R5bGVzZXQ6IFN0eWxlc2V0LCBuZXdTdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldCB8IG51bGxcclxue1xyXG5cdGlmICghb2xkU3R5bGVzZXQgJiYgIW5ld1N0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIW9sZFN0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cdGVsc2UgaWYgKCFuZXdTdHlsZXNldClcclxuXHRcdHJldHVybiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG9sZFN0eWxlc2V0KTtcclxuXHJcblx0Ly8gZmlyc3QgY29udmVydCBib3RoIHN0eWxlc2V0cyB0byB0aGVpciBzdHJpbmcgdmVyc2lvbnNcclxuXHRsZXQgb2xkU3RyaW5nU3R5bGVzZXQgPVx0c3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBvbGRTdHlsZXNldCk7XHJcblx0bGV0IG5ld1N0cmluZ1N0eWxlc2V0ID1cdHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cclxuXHRsZXQgdXBkYXRlVmFsOiBTdHJpbmdTdHlsZXNldCB8IG51bGwgPSBudWxsO1xyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgb2xkIHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG5ldyBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBvbGRTdHJpbmdTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgbmV3U3RyaW5nVmFsID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChuZXdTdHJpbmdWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHR1cGRhdGVWYWxba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9sZFN0cmluZ1ZhbCA9IG9sZFN0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRcdGlmIChvbGRTdHJpbmdWYWwgIT09IG5ld1N0cmluZ1ZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IG5ld1N0cmluZ1ZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG5ldyBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBvbGQgb25lLiBUaGVzZVxyXG5cdC8vIHdpbGwgYmUgYWRkZWQuXHJcblx0Zm9yKCBsZXQga2V5IGluIG5ld1N0cmluZ1N0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGxldCBvbGRTdHJpbmdWYWwgPSBvbGRTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0aWYgKG9sZFN0cmluZ1ZhbCA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB1cGRhdGVWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRmlsdGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRpbmcgcGVyY2VudCB2YWx1ZSB0byBpbnZvY2F0aW9uIG9mIHRoZSBnaXZlbiBDU1MgZnVuY3Rpb24uXHJcbmZ1bmN0aW9uIHBlcmNlbnRGaWx0ZXIoIG5hbWU6IHN0cmluZywgYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGFtb3VudCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYnJpZ2h0bmVzcygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnJpZ2h0bmVzcyggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImJyaWdodG5lc3NcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjb250cmFzdCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udHJhc3QoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJjb250cmFzdFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGdyYXlzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JheXNjYWxlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiZ3JheXNjYWxlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaW52ZXJ0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJpbnZlcnRcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBvcGFjaXR5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwib3BhY2l0eVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNhdHVyYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXR1cmF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcInNhdHVyYXRlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2VwaWEoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcGlhKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2VwaWFcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBibHVyKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBibHVyKCByYWRpdXM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGJsdXIoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHJhZGl1cyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZHJvcFNoYWRvdygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSB4IEhvcml6b250YWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSB5IFZlcnRpY2FsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3Igb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGJsdXIgVmFsdWUgb2YgdGhlIHNoYWRvdydzIGJsdXJyaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxIHBpeGVsLlxyXG4gKiBAcGFyYW0gc3ByZWFkIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBzcHJlYWRpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXHJcbiAqIEBwYXJhbSBpbnNldCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2hhZG93IGdvZXMgaW5zaWRlIHRoZSBzaGFwZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHJvcFNoYWRvdyhcclxuICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHNwcmVhZD86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGBkcm9wLXNoYWRvdygke3NpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0KCB7IHgsIHksIGNvbG9yLCBibHVyLCBzcHJlYWR9KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBodWUtcm90YXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBodWVSb3RhdGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBodWUtcm90YXRlKCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyBzaGFwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnNldCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXQoIG9mZnNldDogRXh0ZW5kZWQ8T25lT3JCb3g8Q3NzTGVuZ3RoPj4sIHJhZGl1cz86IEV4dGVuZGVkPEJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogQmFzaWNTaGFwZVByb3h5XHJcbntcclxuXHRsZXQgciA9IHJhZGl1cyAhPSBudWxsID8gXCJyb3VuZCBcIiArIGJvcmRlclJhZGl1c1RvU3RyaW5nKCByYWRpdXMpIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgaW5zZXQoJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggb2Zmc2V0LCBcIiBcIil9JHtyfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgaXMgdXNlZCB0byBzcGVjaWZ5IGEgcmFkaXVzIGluIFtbY2lyY2xlXV0gYW5kIFtbZWxsaXBzZV1dIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNoYXBlUmFkaXVzID0gRXh0ZW5kZWQ8Q3NzTGVuZ3RoIHwgXCJjbG9zZXN0LXNpZGVcIiB8IFwiZmFydGhlc3Qtc2lkZVwiPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNpcmNsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlKCBjZW50ZXI/OiBTaGFwZVJhZGl1cywgcG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IGMgPSAgY2VudGVyICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoY2VudGVyKSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvc2l0aW9uVG9TdHJpbmcoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGNpcmNsZSgke2N9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGVsbGlwc2UoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2UoIHJ4PzogU2hhcGVSYWRpdXMsIHJ5PzogU2hhcGVSYWRpdXMsXHJcblx0cG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IHJ4cyA9ICByeCAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ4KSA6IFwiXCI7XHJcbiAgICBsZXQgcnlzID0gIHJ5ICE9IG51bGwgPyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhyeSkgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3NpdGlvblRvU3RyaW5nKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBlbGxpcHNlKCR7cnhzfSR7cnlzfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwb2x5Z29uKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKCBwb2ludE9yUnVsZTogQ3NzUG9pbnQgfCBGaWxsUnVsZV9TdHlsZVR5cGUsXHJcblx0Li4ucG9pbnRzOiBDc3NQb2ludFtdKTogQmFzaWNTaGFwZVByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgcyA9IFwicG9seWdvbihcIjtcclxuXHRcdGlmICh0eXBlb2YgcG9pbnRPclJ1bGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHMgKz0gcG9pbnRPclJ1bGUgKyBcIixcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cyArPSBgJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggcG9pbnRPclJ1bGUsIFwiIFwiKX0sYDtcclxuXHJcblx0XHRzICs9IHBvaW50cy5tYXAoIHB0ID0+IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBwdCwgXCIgXCIpKS5qb2luKFwiLFwiKTtcclxuXHJcblx0XHRyZXR1cm4gcyArIFwiKVwiO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gUmF5UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmF5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXkoIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4sIHNpemU/OiBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkIHwgQ3NzTGVuZ3RoPixcclxuXHRjb250YWluPzogYm9vbGVhbik6IFJheVByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgYW5nbGVTdHJpbmcgPSBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpO1xyXG5cdFx0bGV0IHNpemVTdHJpbmcgPSBzaXplID0hIG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggc2l6ZSkgOiBcIlwiO1xyXG5cdFx0bGV0IGNvbnRhaW5TdHJpbmcgPSBjb250YWluID8gXCIsY29udGFpblwiIDogXCJcIjtcclxuXHRcdHJldHVybiBgcmF5KCR7YW5nbGVTdHJpbmd9JHtzaXplU3RyaW5nfSR7Y29udGFpblN0cmluZ30pYDtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwb2x5Z29uKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoKCBmaWxsUnVsZT86IEZpbGxSdWxlX1N0eWxlVHlwZSk6IElQYXRoQnVpbGRlclxyXG57XHJcblx0cmV0dXJuIG5ldyBQYXRoQnVpbGRlciggZmlsbFJ1bGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhdGhCdWlsZGVyIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvYmplY3QgdGhhdCBhY2N1bXVsYXRlcyBwYXRoIGNvbW1hbmRzIHRoYXQgYXJlIHRoZW5cclxuICogY29udmVydGVkIHRvIGEgc3RyaW5nIHBhcmFtZXRlciBvZiB0aGUgQ1NTIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgUGF0aEJ1aWxkZXIgaW1wbGVtZW50cyBJUGF0aEJ1aWxkZXJcclxue1xyXG5cdHByaXZhdGUgYnVmOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5idWYgPSBcInBhdGgoXCI7XHJcblx0XHRpZiAoZmlsbFJ1bGUpXHJcblx0XHRcdHRoaXMuYnVmICs9IGZpbGxSdWxlICsgXCIsXCI7XHJcblxyXG5cdFx0dGhpcy5idWYgKz0gXCInXCI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCBzdHJpbmdcclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpIDogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYnVmICsgXCInKVwiOyB9XHJcblxyXG5cclxuXHRcclxuICAgIC8vIE1vdmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdHByaXZhdGUgaXRlbXMoIGNvbW1hbmQ6IHN0cmluZywgLi4uaXRlbXM6IChudW1iZXIgfCBudW1iZXJbXSlbXSk6IElQYXRoQnVpbGRlclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmICs9IFwiIFwiICsgY29tbWFuZDtcclxuXHJcblx0XHRmb3IoIGxldCBpdGVtIG9mIGl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodHlwZW9mIGl0ZW0gPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBpdGVtO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBzdWJJdGVtIG9mIGl0ZW0pXHJcblx0XHRcdFx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIHN1Ykl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBNKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJNXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIG0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIm1cIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBMKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJMXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImxcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBIKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJIXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImhcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBWKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJWXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIHYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInZcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBDKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJDXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBjKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJjXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgUyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJTXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBzKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInNcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBRKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIHEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwicVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlRcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgdCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwidFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIEEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiQVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgYSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJhXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgeigpIHsgdGhpcy5idWYgKz0gXCIgelwiOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRyYW5zZm9ybXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4KCBhOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdGQ6IEV4dGVuZGVkPENzc051bWJlcj4sIHR4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyYXlUb1N0cmluZyggW2EsIGIsIGMsIGQsIHR4LCB0eV0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeDNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgzZChcclxuXHRcdGExOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzE6IEV4dGVuZGVkPENzc051bWJlcj4sIGQxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTI6IEV4dGVuZGVkPENzc051bWJlcj4sIGIyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDI6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjM6IEV4dGVuZGVkPENzc051bWJlcj4sIGMzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGE0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGQ0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdCk6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyYXlUb1N0cmluZyggW2ExLCBiMSwgYzEsIGQxLCBhMiwgYjIsIGMyLCBkMiwgYTMsIGIzLCBjMywgZDMsIGE0LCBiNCwgYzQsIGQ0XSwgdW5kZWZpbmVkLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcGVyc3BlY3RpdmUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKCBkOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBwZXJzcGVjdGl2ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhkKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIENTUyByb3RhdGlvbiBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHJvdGF0ZUltcGwoIG5hbWU6IHN0cmluZywgYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVYXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVlcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWiggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWlwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlM2QoXHJcblx0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeiksIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgcm90YXRlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZSggY3g6IEV4dGVuZGVkPENzc051bWJlcj4sIHN5PzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUoJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoY3gpfSR7c3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBzY2FsZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWCggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVYXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVZKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVlcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVooIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWlwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTNkKCBzeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0c3o6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSxcclxuXHRcdENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3KCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBheT86IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tldygke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0ke2F5ICE9IG51bGwgPyBcIixcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1goKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdYKCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3WSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tld1koIGF5OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LCB5PzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgdHJhbnNsYXRlKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpfSR7eSAhPSBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gdHJhbnNsYXRlIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVYKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWFwiLCB4KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVZKCB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWVwiLCB5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVaKCB6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWlwiLCB6KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlM2QoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcblx0ejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCksIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSxcclxuXHRcdENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh6KV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG5cdElDc3NOdW1iZXJNYXRoLCBJQ3NzTGVuZ3RoTWF0aCwgSUNzc0FuZ2xlTWF0aCwgSUNzc1RpbWVNYXRoLCBJQ3NzUmVzb2x1dGlvbk1hdGgsXHJcblx0SUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NQZXJjZW50TWF0aCwgRXh0ZW5kZWQsIFN0cmluZ1Byb3h5LFxyXG5cdFVybFByb3h5LCBBdHRyVHlwZUtleXdvcmQsIEF0dHJVbml0S2V5d29yZFxyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NOdW1iZXJNYXRoLCBDc3NMZW5ndGhNYXRoLCBDc3NBbmdsZU1hdGgsIENzc1RpbWVNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCxcclxuXHRDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgdmFsdWVUb1N0cmluZywgdGVtcGxhdGVTdHJpbmdUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtJVmFyUnVsZSwgSUNvdW50ZXJSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7VmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bnVtYmVyPmBcclxuICogQ1NTIHR5cGUuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXkgYXJlXHJcbiAqIGNvbnZlcnRlZCB0byBzdHJpbmdzIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1bml0cyB0byB0aGVtLlxyXG4gKi9cclxuZXhwb3J0IGxldCBOdW06IElDc3NOdW1iZXJNYXRoID0gbmV3IENzc051bWJlck1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBMZW4gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxsZW5ndGg+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBsZW5ndGggdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJweFwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImVtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IExlbjogSUNzc0xlbmd0aE1hdGggPSBuZXcgQ3NzTGVuZ3RoTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuZ2xlIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8YW5nbGU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYW4gYW5nbGUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkZWdcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJ0dXJuXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEFuZ2xlOiBJQ3NzQW5nbGVNYXRoID0gbmV3IENzc0FuZ2xlTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRpbWUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDx0aW1lPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgdGltZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIm1zXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwic1wiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBUaW1lOiBJQ3NzVGltZU1hdGggPSBuZXcgQ3NzVGltZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZXNvbHV0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHJlc29sdXRpb24gdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkcGlcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJkcGNtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFJlc29sdXRpb246IElDc3NSZXNvbHV0aW9uTWF0aCA9IG5ldyBDc3NSZXNvbHV0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyZXF1ZW5jeSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGZyZXF1ZW5jeSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIkh6XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwia0h6XCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEZyZXF1ZW5jeTogSUNzc0ZyZXF1ZW5jeU1hdGggPSBuZXcgQ3NzRnJlcXVlbmN5TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBlcmNlbnQgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50YWdlPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgXCIlXCIgdW5pdCBzdWZmaXguXHJcbiAqL1xyXG5leHBvcnQgbGV0IFBlcmNlbnQ6IElDc3NQZXJjZW50TWF0aCA9IG5ldyBDc3NQZXJjZW50TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyByYXcoKVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBTdHJpbmdQcm94eSBmdW5jdGlvbiBlbmNhcHN1bGF0aW5nIHRoZSBnaXZlbiBzdHJpbmctbGlrZSBwYXJhbWV0ZXIuIFRoaXMgZnVuY3Rpb25cclxuICogYWxsb3dzIHNwZWNpZnlpbmcgYXJiaXRyYXJ5IHRleHQgZm9yIHByb3BlcnRpZXMgd2hvc2UgdHlwZSBub3JtYWxseSBkb2Vzbid0IGFsbG93IHN0cmluZ3MuXHJcbiAqIFRoaXMgaXMgdXNlZCBhcyBhbiBcImVzY2FwZSBoYXRjaFwiIHdoZW4gYSBzdHJpbmcgdmFsdWUgYWxyZWFkeSBleGlzdHMgYW5kIHRoZXJlIGlzIG5vIHNlbnNlXHJcbiAqIHRvIGNvbnZlcnQgaXQgdG8gYSBwcm9wZXIgdHlwZS4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZSBpbnZva2VkIHdpdGhcclxuICogdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhdyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IGFueVtdKTogU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIHVzZXZhcigpXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIFN0cmluZ1Byb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgaW52b2NhdGlvbiBvZiB0aGUgYHZhcigpYCBDU1MgZnVuY3Rpb24gZm9yXHJcbiAqIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IHdpdGggb3B0aW9uYWwgZmFsbGJhY2tzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgZmFsbGJhY2s/OiBWYXJWYWx1ZVR5cGU8Sz4pOiBTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gZmFsbGJhY2tcclxuICAgICAgICA/IGB2YXIoLS0ke3Zhck9iai5uYW1lfSwke3N0eWxlUHJvcFRvU3RyaW5nKCB2YXJPYmoudGVtcGxhdGUsIGZhbGxiYWNrLCB0cnVlKX0pYFxyXG4gICAgICAgIDogYHZhcigtLSR7dmFyT2JqLm5hbWV9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gdXJsKClcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgVXJsUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYHVybCgpYCBmdW5jdGlvbi4gVGhlIHN0cmluZyBwYXJhbWV0ZXJcclxuICogd2lsbCBiZSB3cmFwcGVkIGluIGEgXCJ1cmwoKVwiIGludm9jYXRpb24uIFRoZSBmdW5jdGlvbiBjYW4gYWxzbyBhY2NlcHQgdGhlIElJRFJ1bGUgb2JqZWN0IHRvXHJcbiAqIGNyZWF0ZSB1cmwoI2VsZW1lbnQpIGludm9jYXRpb24sIHdoY2loIGlzIG9mdGVuIHVzZWQgdG8gYWRkcmVzcyBTVkcgZWxlbWVudHMgYnkgdGhlaXIgSURzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVybCggdmFsOiBFeHRlbmRlZDxzdHJpbmcgfCBJSURSdWxlPik6IFVybFByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gYHVybCgke3ZhbHVlVG9TdHJpbmcodmFsKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb3VudGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBTdHJpbmdQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlcigpYCBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uYWxcclxuICogb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXIoIGNvdW50ZXJPYmo6IEV4dGVuZGVkPElDb3VudGVyUnVsZSB8IHN0cmluZz4sXHJcblx0c3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsdWVUb1N0cmluZyggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXIoJHt2YWx1ZVRvU3RyaW5nKGNvdW50ZXJPYmopfSR7c3R5bGVTdHJpbmd9KSAke2FmdGVyfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgU3RyaW5nUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYGNvdW50ZXNyKClgIGZ1bmN0aW9uIHdpdGggdGhlIGdpdmVuXHJcbiAqIHNlcGFyYXRvciBzdHJpbmcgYW5kIGFkZGl0aW9uYWwgb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXJzKCBjb3VudGVyT2JqOiBFeHRlbmRlZDxJQ291bnRlclJ1bGUgfCBzdHJpbmc+LFxyXG5cdHNlcGFyYXRvcjogRXh0ZW5kZWQ8c3RyaW5nPiwgc3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHNlcFN0cmluZyA9IHNlcGFyYXRvciA/IGBcIiR7dmFsdWVUb1N0cmluZyggc2VwYXJhdG9yKX1cImAgOiBgXCIuXCJgO1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsdWVUb1N0cmluZyggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXJzKCR7dmFsdWVUb1N0cmluZyhjb3VudGVyT2JqKX0sJHtzZXBTdHJpbmd9JHtzdHlsZVN0cmluZ30pICR7YWZ0ZXJ9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIGF0dHIoKVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBTdHJpbmdQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBhdHRyKClgIENTUyBmdW5jdGlvbi4gSXQgcmV0dXJucyBTdHJpbmdQcm9weHlcclxuICogYW5kIHRoZW9yZXRpY2FsbHkgY2FuIGJlIHVzZWQgaW4gYW55IHN0eWxlIHByb3BlcnR5OyBob3dldmVyLCBpdHMgdXNlIGJ5IGJyb3dzZXJzIGlzIGN1cnJlbnRseVxyXG4gKiBsaW1pdGVkIHRvIHRoZSBgY29udGVudGAgcHJvcGVydHkuIEFsc28gbm8gYnJvd3NlciBjdXJyZW50bHkgc3VwcG9ydCB0eXBlLCB1bml0cyBvciBmYWxsYmFja1xyXG4gKiB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXR0ciggYXR0ck5hbWU6IEV4dGVuZGVkPHN0cmluZz4sIHR5cGVPclVuaXQ/OiBFeHRlbmRlZDxBdHRyVHlwZUtleXdvcmQgfCBBdHRyVW5pdEtleXdvcmQ+LFxyXG5cdGZhbGxiYWNrPzogRXh0ZW5kZWQ8c3RyaW5nPik6IFN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYXR0cigke2F0dHJOYW1lfSR7dHlwZU9yVW5pdCA/IFwiIFwiICsgdHlwZU9yVW5pdCA6IFwiXCJ9JHtmYWxsYmFjayA/IFwiLFwiICsgZmFsbGJhY2sgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWNzc1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvQ29sb3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvSW1hZ2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1V0aWxBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0NvbG9yQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9JbWFnZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3R5bGVBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1J1bGVBUElcIjtcclxuIiwiaW1wb3J0IHtJQW5pbWF0aW9uUnVsZSwgQW5pbWF0aW9uRnJhbWUsIEFuaW1hdGlvbldheXBvaW50LCBBbmltYXRpb25TdHlsZXNldCwgSUFuaW1hdGlvbkZyYW1lUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBjcmVhdGVOYW1lc30gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVzXCI7XHJcbmltcG9ydCB7IHZhbHVlVG9TdHJpbmcgfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGtleWZyYW1lcyBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25SdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25SdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZyYW1lcz86IEFuaW1hdGlvbkZyYW1lW10sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKGZyYW1lcylcclxuXHRcdFx0dGhpcy5mcmFtZVJ1bGVzID0gZnJhbWVzLm1hcCggZnJhbWUgPT4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSggZnJhbWVbMF0sIGZyYW1lWzFdKSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRrZXlmcmFtZVJ1bGUucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEFuaW1hdGlvblJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBBbmltYXRpb25SdWxlKHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdFx0aWYgKHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0bmV3UnVsZS5mcmFtZVJ1bGVzID0gdGhpcy5mcmFtZVJ1bGVzLm1hcCggZnJhbWVSdWxlID0+IGZyYW1lUnVsZS5jbG9uZSgpIGFzIEFuaW1hdGlvbkZyYW1lUnVsZSk7XHJcblx0XHRuZXdSdWxlLm5hbWVPdmVycmlkZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAa2V5ZnJhbWVzICR7dGhpcy5uYW1lfSB7fWAsIHBhcmVudCkgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHJcblx0XHRsZXQgY3NzS2V5ZnJhbWVzUnVsZSA9IHRoaXMuY3NzUnVsZSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cdFx0Zm9yKCBsZXQgZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjc3NLZXlmcmFtZXNSdWxlLmFwcGVuZFJ1bGUoIGZyYW1lUnVsZS50b0Nzc1N0cmluZygpKVxyXG5cdFx0XHRcdGxldCBjc3NSdWxlID0gY3NzS2V5ZnJhbWVzUnVsZS5jc3NSdWxlcy5pdGVtKCAgY3NzS2V5ZnJhbWVzUnVsZS5jc3NSdWxlcy5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHRpZiAoY3NzUnVsZSlcclxuXHRcdFx0XHRcdGZyYW1lUnVsZS5jc3NLZXlmcmFtZVJ1bGUgPSBjc3NSdWxlIGFzIENTU0tleWZyYW1lUnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCh4KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJDYW5ub3QgYWRkIENTUyBrZXlmcmFtZSBydWxlXCIsIHgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBjb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy4gQW5pbWF0aW9uIHJ1bGUgcmV0dXJucyBpdHMgbmFtZS5cclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdHlsZSBydWxlcyByZXByZXNlbnRpbmcgYW5pbWF0aW9uIGZyYW1lcyAqL1xyXG5cdHB1YmxpYyBmcmFtZVJ1bGVzOiBBbmltYXRpb25GcmFtZVJ1bGVbXTtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lUnVsZSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIGtleWZyYW1lIGNsYXVzZSBpbiB0aGUgYW5pbWF0aW9uIHJ1bGUuXHJcbiAqL1xyXG5jbGFzcyBBbmltYXRpb25GcmFtZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uRnJhbWVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludCwgc3R5bGVzZXQ/OiBBbmltYXRpb25TdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy53YXlwb2ludCA9IHdheXBvaW50O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IEFuaW1hdGlvbkZyYW1lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCB0aGlzLndheXBvaW50KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB0aGlzLndheXBvaW50LCB7XHJcblx0XHRcdGZyb21OdW1iZXI6IHYgPT4gdiArIFwiJVwiLFxyXG5cdFx0XHRhcnJheUl0ZW1GdW5jOiB2ID0+IHZhbHVlVG9TdHJpbmcoIHYsIHsgZnJvbU51bWJlcjogdiA9PiB2ICsgXCIlXCIgfSksXHJcblx0XHRcdGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHB1YmxpYyB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQ7XHJcblxyXG5cdC8qKiBTT00ga2V5ZnJhbWUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDb3VudGVyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXJ9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb3VudGVyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBuYW1lZCBjb3VudGVyIGRlZmluaXRpb24uIFVzZSB0aGlzIHJ1bGUgdG8gY3JlYXRlXHJcbiAqIGNvdW50ZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIGluIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZVxyXG4gKiBwcm9wZXJ0aWVzLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBjb3VudGVycyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlXHJcbiAqIGNvdW50ZXIgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ291bnRlclJ1bGUgaW1wbGVtZW50cyBJQ291bnRlclJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKVxyXG5cdHtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcdFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ291bnRlclJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSBjb3VudGVyIG5hbWUuXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgY291bnRlciAqL1xyXG5cdHB1YmxpYyBnZXQgY291bnRlck5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZTtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MgYW5kIHdoaWNoIGhhc2UgdGhlIENTU1N0eWxlUnVsZSB0aHJvdWdoIHdoaWNoXHJcblx0Ly8gdGhlIHZhbHVlIG9mIHRoaXMgY3VzdG9tIHZhcmlhYmxlIGNhbiBiZSBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBTdHlsZURlZmluaXRpb24sIElHcm91cFJ1bGUsIElNZWRpYVJ1bGUsIElTdXBwb3J0c1J1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Z2V0Q29udGFpbmVyRnJvbURlZmluaXRpb24sIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3N9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0lSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5pbXBvcnQge21lZGlhUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JvdXBSdWxlIGNsYXNzIHNlcnZlcyBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBncm91cGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JvdXBSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmluc3RhbmNlT3JDbGFzcyA9IGluc3RhbmNlT3JDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIHRoaXMuaW5zdGFuY2VPckNsYXNzLCBvd25lci5nZXREZWZpbml0aW9uSW5zdGFuY2UoKSk7XHJcblx0XHRpZiAoIWluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5ydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbURlZmluaXRpb24oIGluc3RhbmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEdyb3VwU2VsZWN0b3JUZXh0KCk7XHJcblx0XHRpZiAoIXNlbGVjdG9yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGAke3NlbGVjdG9yfSB7fWAsIHBhcmVudCkgYXMgQ1NTR3JvdXBpbmdSdWxlO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5pbnNlcnRSdWxlcyggdGhpcy5jc3NSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBjbGVhciBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5jbGVhclJ1bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCBkZWZpbmVzIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciBmb3IgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIHJ1bGVDb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBkZWZpbmluZyB0aGUgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlXHJcblx0cHVibGljIGdldCBydWxlcygpOiBUIHsgcmV0dXJuIHRoaXMuaW5zdGFuY2UgYXMgVDsgfVxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTR3JvdXBpbmdSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN1cHBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxPPiwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJU3VwcG9ydHNSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VCxPPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlPFQsTz4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdC8vIGNvbnZlcnQgdGhlIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgZm9ybVxyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGUgcXVlcnkgaXMgc3VwcG9ydGVkIGFuZCBpZiBpdCBpcyBub3QsIGRvbid0IGluc2VydCB0aGUgcnVsZVxyXG5cdFx0cmV0dXJuIENTUy5zdXBwb3J0cyggcXVlcnlTdHJpbmcpID8gYEBzdXBwb3J0cyAke3F1ZXJ5U3RyaW5nfWAgOiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gc3VwcG9ydCBxdWVyeSBmb3IgdGhpcyBydWxlIGluIGEgc3RyaW5nIGZvcm0uXHJcblx0cHVibGljIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxPPiwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBNZWRpYVJ1bGU8VCxPPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWVkaWFSdWxlPFQsTz4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdGxldCBxdWVyeVN0cmluZyA9IHR5cGVvZiB0aGlzLnF1ZXJ5ID09PSBcInN0cmluZ1wiID8gdGhpcy5xdWVyeSA6IG1lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSk7XHJcblx0XHRyZXR1cm4gYEBtZWRpYSAke3F1ZXJ5U3RyaW5nfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lGb250RmFjZVJ1bGUsIElJbXBvcnRSdWxlLCBJUGFnZVJ1bGUsIElOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCB7Zm9udEZhY2VUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZUZ1bmNzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeSwgU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZXNcIjtcclxuaW1wb3J0IHtQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZvbnRGYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAZm9udC1mYWNlIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvbnRGYWNlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZvbnRmYWNlOiBJRm9udEZhY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmZvbnRmYWNlID0gZm9udGZhY2U7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogRm9udEZhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIHRoaXMuZm9udGZhY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBmb250LWZhY2UgJHtmb250RmFjZVRvU3RyaW5nKCB0aGlzLmZvbnRmYWNlKX1gLFxyXG5cdFx0XHRwYXJlbnQpIGFzIENTU0ZvbnRGYWNlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NGb250RmFjZVJ1bGU7XHJcblxyXG5cdC8vIE9iamVjdCBkZWZpbmluZyBmb250LWZhY2UgcHJvcGVydGllcy5cclxuXHRwdWJsaWMgZm9udGZhY2U6IElGb250RmFjZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEltcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbXBvcnRSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElJbXBvcnRSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnVybCA9IHVybDtcclxuXHRcdHRoaXMubWVkaWFRdWVyeSA9IG1lZGlhUXVlcnk7XHJcblx0XHR0aGlzLnN1cHBvcnRzUXVlcnkgPSBzdXBwb3J0c1F1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogSW1wb3J0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgSW1wb3J0UnVsZSggdGhpcy51cmwsIHRoaXMubWVkaWFRdWVyeSwgdGhpcy5zdXBwb3J0c1F1ZXJ5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHVybDtcclxuXHRcdGlmICghdGhpcy51cmwpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJ1cmxcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIlxcXCJcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIidcIikpXHJcblx0XHRcdHVybCA9IHRoaXMudXJsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR1cmwgPSBgdXJsKCR7dGhpcy51cmx9KWA7XHJcblxyXG5cdFx0bGV0IHN1cHBvcnRzUXVlcnlTdHJpbmcgPSAhdGhpcy5zdXBwb3J0c1F1ZXJ5XHJcblx0XHRcdD8gXCJcIlxyXG5cdFx0XHQ6IHR5cGVvZiB0aGlzLnN1cHBvcnRzUXVlcnkgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0XHQ/IHRoaXMuc3VwcG9ydHNRdWVyeVxyXG5cdFx0XHRcdDogc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cclxuXHRcdGlmIChzdXBwb3J0c1F1ZXJ5U3RyaW5nICYmICFzdXBwb3J0c1F1ZXJ5U3RyaW5nLnN0YXJ0c1dpdGgoIFwic3VwcG9ydHNcIikpXHJcblx0XHRzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gYHN1cHBvcnRzKCAke3N1cHBvcnRzUXVlcnlTdHJpbmd9IClgO1xyXG5cclxuXHRcdGxldCBtZWRpYVF1ZXJ5U3RyaW5nID0gIXRoaXMubWVkaWFRdWVyeVxyXG5cdFx0XHQ/IFwiXCJcclxuXHRcdFx0OiB0eXBlb2YgdGhpcy5tZWRpYVF1ZXJ5ID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0PyB0aGlzLm1lZGlhUXVlcnlcclxuXHRcdFx0XHQ6IG1lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5tZWRpYVF1ZXJ5KTtcclxuXHRcdFx0XHRcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGltcG9ydCAke3VybH0gJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSAke21lZGlhUXVlcnlTdHJpbmd9YCxcclxuXHRcdFx0cGFyZW50KSBhcyBDU1NJbXBvcnRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NJbXBvcnRSdWxlO1xyXG5cclxuXHQvLyBVUkwgdG8gaW1wb3J0IGZyb20uXHJcblx0cHVibGljIHVybDogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgc3VwcG9ydHMgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYWdlUnVsZSBjbGFzcyByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYWdlUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElQYWdlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcywgc3R5bGU/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5wc2V1ZG9DbGFzcyA9IHBzZXVkb0NsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogUGFnZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCB0aGlzLnBzZXVkb0NsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGBAcGFnZSAke3RoaXMucHNldWRvQ2xhc3MgPyB0aGlzLnBzZXVkb0NsYXNzIDogXCJcIn1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHBhZ2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NQYWdlUnVsZTtcclxuXHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRwdWJsaWMgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5hbWVzcGFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcclxuXHRcdHRoaXMucHJlZml4ID0gcHJlZml4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTmFtZXNwYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTmFtZXNwYWNlUnVsZSggdGhpcy5uYW1lc3BhY2UsIHRoaXMucHJlZml4KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLm5hbWVzcGFjZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCB1cmwgPSB0aGlzLm5hbWVzcGFjZS5zdGFydHNXaXRoKCBcInVybChcIikgPyB0aGlzLm5hbWVzcGFjZSA6IGB1cmwoJHt0aGlzLm5hbWVzcGFjZX0pYDtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQG5hbWVzcGFjZSAke3RoaXMucHJlZml4ID8gdGhpcy5wcmVmaXggOiBcIlwifSAke3VybH1gLFxyXG5cdFx0XHRwYXJlbnQpIGFzIENTU05hbWVzcGFjZVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbmFtZXNwYWNlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTTmFtZXNwYWNlUnVsZTtcclxuXHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJUnVsZSwgSU5hbWVkRW50aXR5LCBTdHlsZURlZmluaXRpb259IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgYWNjb21wYW5pZXMgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aFxyXG4gKiBhIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvKiogSW5zZXJ0cyBhbGwgcnVsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciB0byBlaXRoZXIgdGhlIHN0eWxlIHNoZWV0IG9yIGdyb3VwaW5nIHJ1bGUuICovXHJcblx0aW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRjbGVhclJ1bGVzKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBTZXRzIHRoZSBnaXZlbiB2YWx1ZSBmb3IgdGhlIGN1c3RvbSBDU1Mgcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLiAqL1xyXG5cdHNldEN1c3RvbVZhclZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUb3BMZXZlbFJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QgdGhhdCBcIm93bnNcIlxyXG4gKiB0aGUgcnVsZXMgdW5kZXIgdGhpcyBjb250YWluZXIuIEluIHBhcnRpY3VsYXIsIHRoZSBvd25lcidzIGpvYiBpcyB0byBnZW5lcmF0ZSBcInNjb3BlZFwiIHVuaXF1ZVxyXG4gKiBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvcExldmVsUnVsZUNvbnRhaW5lciBleHRlbmRzIElSdWxlQ29udGFpbmVyXHJcbntcclxuXHQvKiogR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZXNoZWV0ICovXHJcblx0Z2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgcnVsZXMuIEFzIGEgcGFyZW50IG9mIFJ1bGVDb250YWluZXIsIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGlzIGFsc28gYW4gYW5jZXN0b3IgZm9yIFN0eWxlc2hlZXQ7IGhvd2V2ZXIsIG1vc3Qgb2YgaXRzIHRoZSBmaWVsZHMgYXJlIHVuZGVmaW5lZCBpblxyXG4gKiB0ZSBTdHlsZXNoZWV0IGluc3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlIGltcGxlbWVudHMgSVJ1bGVcclxue1xyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMub3duZXIgPSBvd25lcjtcclxuXHRcdHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBjbG9uZSgpOiBSdWxlO1xyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQvLyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncywgaXMgYWN0aXZhdGVkLlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQge31cclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHRvIHdoaWNoXHJcblx0Ly8gdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGRlYWN0aXZhdGVkLlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHsgdGhpcy5jc3NSdWxlID0gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhlIGdpdmVuIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgc3RhdGljIGFkZFJ1bGVUb0RPTSggcnVsZVRleHQ6IHN0cmluZywgcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogQ1NTUnVsZSB8IG51bGxcclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGluZGV4ID0gcGFyZW50Lmluc2VydFJ1bGUoIHJ1bGVUZXh0LCBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoKTtcclxuXHRcdFx0cmV0dXJuIHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcblx0XHR9XHJcblx0XHRjYXRjaCggeClcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYENhbm5vdCBhZGQgQ1NTIHJ1bGUgJyR7cnVsZVRleHR9J2AsIHgpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdHlsZXNoZWV0IHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLiBUaGlzIGlzIFwidGhpc1wiIGZvciBTdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLiBUaGlzIGlzXHJcblx0Ly8gbnVsbCBmb3IgU3R5bGVzaGVldC5cclxuXHRwdWJsaWMgcnVsZU5hbWU6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cdC8vIENTU1J1bGUtZGVyaXZlZCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgYWN0dWFsbCBDU1MgcnVsZSBpbnNlcnRlZCBpbnRvXHJcblx0Ly8gdGhlIHN0eWxlcyBzaGVldCBvciB0aGUgcGFyZW50IHJ1bGUuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciBTdHlsZXNoZWV0IG9iamVjdHMuXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHNjb3BlZCBuYW1lcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXMoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5LFxyXG5cdGNzc1ByZWZpeD86IHN0cmluZyk6IFtzdHJpbmcsc3RyaW5nXVxyXG57XHJcblx0aWYgKCFydWxlTmFtZSAmJiAhbmFtZU92ZXJyaWRlKVxyXG5cdFx0cmV0dXJuIFtcIlwiLCBcIlwiXTtcclxuXHJcblx0bGV0IG5hbWUgPSAhbmFtZU92ZXJyaWRlXHJcblx0XHQ/IG93bmVyLmdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZSEpXHJcblx0XHQ6IHR5cGVvZiBuYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBuYW1lT3ZlcnJpZGVcclxuXHRcdFx0OiBuYW1lT3ZlcnJpZGUubmFtZTtcclxuXHJcblx0cmV0dXJuICFjc3NQcmVmaXhcclxuXHRcdD8gW25hbWUsbmFtZV1cclxuXHRcdDogbmFtZS5zdGFydHNXaXRoKCBjc3NQcmVmaXgpXHJcblx0XHRcdD8gW25hbWUuc3Vic3RyKCBjc3NQcmVmaXgubGVuZ3RoKSwgbmFtZV1cclxuXHRcdFx0OiBbbmFtZSwgY3NzUHJlZml4ICsgbmFtZV07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzc30gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCJcclxuaW1wb3J0IHtDb3VudGVyUnVsZX0gZnJvbSBcIi4vQ291bnRlclJ1bGVzXCI7XHJcbmltcG9ydCB7SW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZX0gZnJvbSBcIi4vTWlzY1J1bGVzXCJcclxuXHJcblxyXG5cclxuLy8gRGVmaW5lIHN5bWJvbHMgdGhhdCBhcmUgdXNlZCBmb3Iga2VlcGluZyBpbXBvcnRhbnQgaW5mb3JtYXRpb24gb24gdGhlIHN0eWxlIGRlZmluaXRpb25cclxuLy8gaW5zdGFuY2VzIHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBiZSB2aXNpYmxlIHRvIGRldmVsb3BlcnMuXHJcblxyXG4vKiogUHJvcGVydHkgb24gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgcG9pbnRpbmcgdG8gdGhlIHNpbmdsdG9uIGluc3RhbmNlLiAqL1xyXG5jb25zdCBzeW1JbnN0YW5jZSA9IFN5bWJvbChcImRlZmluaXRpb25cIik7XHJcblxyXG4vKipcclxuICogUHJvcGVydHkgb24gdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgcG9pbnRpbmcgdG8gdGhlIFJ1bGVDb250YWluZXIgb2JqZWN0IHRoYXQgaXNcclxuICogcmVzcG9uc2libGUgZm9yIHByb2Nlc3NpbmcgcnVsZXMuXHJcbiAqL1xyXG5jb25zdCBzeW1SdWxlQ29udGFpbmVyID0gU3ltYm9sKFwicnVsZUNvbnRhaW5lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlQ29udGFpbmVyIGNsYXNzIGlzIGEgc2hhZG93IHN0cnVjdHVyZSB0aGF0IGFjY29tcGFuaWVzIGV2ZXJ5IHByb2Nlc3NlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIG9iamVjdC4gU2luY2UgU3R5bGVEZWZpbml0aW9uIGNsYXNzIGlzIGFuIGV4cG9ydGVkIGNsYXNzIHZpc2libGUgdG8gZGV2ZWxvcGVycywgd2UgZG9uJ3Qgd2FudFxyXG4gKiB0byBoYXZlIGEgbG90IG9mIGZ1bmN0aW9uYWxpdHkgaW4gaXQuIFRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCBpcyBsaW5rZWQgdG8gdGhlIFN0eWxlRGVmaW5pdGlvblxyXG4gKiBvYmplY3QgdmlhIHRoZSBbc3ltUnVsZUNvbnRhaW5lcl0gc3ltYm9sLiBJdCBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHBhcnNpbmcgcnVsZVxyXG4gKiBkZWZpbml0aW9ucywgbmFtZSBhc3NpZ25tZW50IGFuZCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuICovXHJcbmNsYXNzIFJ1bGVDb250YWluZXIgaW1wbGVtZW50cyBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgbmFtZTogc3RyaW5nLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmVtYmVkZGluZ0NvbnRhaW5lciA9IGVtYmVkZGluZ0NvbnRhaW5lcjtcclxuXHJcblx0XHR0aGlzLmRlZmluaXRpb25DbGFzcyA9IGluc3RhbmNlLmNvbnN0cnVjdG9yIGFzIElTdHlsZURlZmluaXRpb25DbGFzcztcclxuXHRcdHRoaXMub3duZXIgPSBpbnN0YW5jZS5vd25lcjtcclxuXHJcblx0XHR0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9IDA7XHJcblx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3MoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2VzcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcHV0IHJlZmVyZW5jZSB0byB0aGlzIGNvbnRhaW5lciBpbiB0aGUgc3ltYm9sIHByb3BlcnR5IG9mIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdFx0dGhpcy5pbnN0YW5jZVtzeW1SdWxlQ29udGFpbmVyXSA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIG93bmVyIHRha2VuIGZyb20gdGhlIGluc3RhbmNlIGlzIG51bGwgKHRoYXQgaXMsIHRoaXMgaXMgYSB0b3AtbGV2ZWwgZGVmaW5pdGlvbiksXHJcblx0XHQvLyBjaGFuZ2Ugb3VyIG93bmVyIHByb3BlcnR5IHRvIHBvaW50IHRvIHRoZSBpbnN0YW5jZSBpdHNlbGZcclxuXHRcdGlmICghdGhpcy5vd25lcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5vd25lciA9IHRoaXMuaW5zdGFuY2U7XHJcblx0XHRcdHRoaXMudG9wTGV2ZWxDb250YWluZXIgPSB0aGlzO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnRvcExldmVsQ29udGFpbmVyID0gdGhpcy5vd25lcltzeW1SdWxlQ29udGFpbmVyXTtcclxuXHJcblx0XHQvLyBpZiBvdXIgY29udGFpbmVyIGlzIG5vdCB0aGUgdG9wLWxldmVsIGNvbnRhaW5lciwgcHJlZml4IG91ciBuYW1lIHdpdGggdGhlIHVwcGVyIG9uZVxyXG5cdFx0aWYgKCF0aGlzLmlzVG9wTGV2ZWwgJiYgdGhpcy50b3BMZXZlbENvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5uYW1lID0gYCR7dGhpcy50b3BMZXZlbENvbnRhaW5lci5uYW1lfV8ke3RoaXMubmFtZX1gO1xyXG5cclxuXHRcdHRoaXMuaW1wb3J0cyA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lc3BhY2VzID0gW107XHJcblx0XHR0aGlzLnZhcnMgPSBbXTtcclxuXHRcdHRoaXMucmVmcyA9IFtdO1xyXG5cdFx0dGhpcy5vdGhlclJ1bGVzID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aGVtLlxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUHJvcGVydHkoIHByb3BOYW1lLCB0aGlzLmluc3RhbmNlW3Byb3BOYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBjcmVhdGVzIG5hbWVzIGZvciBjbGFzc2VzLFxyXG5cdC8vIElEcywgYW5pbWF0aW9ucyBhbmQgY3VzdG9tIHZhcmlhYmxlcy5cclxuXHRwcml2YXRlIHByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFN0eWxlRGVmaW5pdGlvbilcclxuXHRcdFx0dGhpcy5wcm9jZXNzUmVmZXJlbmNlKCBwcm9wVmFsKVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFZhclJ1bGUpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1ZhclJ1bGUoIHByb3BOYW1lLCBwcm9wVmFsKVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIENvdW50ZXJSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NDb3VudGVyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzQXJyYXkoIHByb3BWYWwpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyByZWZlcmVuY2UgdG8gYW5vdGhlciBzdHlsZSBkZWZpbml0aW9uIGNyZWF0ZWQgYnkgdGhlICR1c2UgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBwcm9jZXNzUmVmZXJlbmNlKCByZWY6IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgaW5zdGFuY2UgaGFzIG5vdCBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCBwcm9jZXNzIGl0IGFuZCBpbmRpY2F0ZSB0aGF0IGl0IGlzXHJcblx0XHQvLyBlbWJlZGRlZCBpbnRvIG91ciBjb250YWluZXIgYmVjYXVzZSBvbmx5IGRlZmluaXRpb25zIGNyZWF0ZWQgd2l0aCB0aGUgJGVtYmVkIGZ1bmN0aW9uXHJcblx0XHQvLyBhcmUgbm90IHByb2Nlc3NlZC5cclxuXHRcdHByb2Nlc3NJbnN0YW5jZSggcmVmLCB0aGlzKTtcclxuXHRcdHRoaXMucmVmcy5wdXNoKCByZWYpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIHByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgdmFyT2JqOiBWYXJSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzdHlsZXNoZWV0LlxyXG5cdFx0aWYgKHZhck9iai5jb250YWluZXIpXHJcblx0XHRcdHZhck9iaiA9IHZhck9iai5jbG9uZSgpO1xyXG5cclxuXHRcdHZhck9iai5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblx0XHR0aGlzLnZhcnMucHVzaCggdmFyT2JqKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIGNvdW50ZXIgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc0NvdW50ZXJSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgY291bnRlcjogQ291bnRlclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAoY291bnRlci5jb250YWluZXIpXHJcblx0XHRcdGNvdW50ZXIgPSBjb3VudGVyLmNsb25lKCk7XHJcblxyXG5cdFx0Y291bnRlci5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gUnVsZS1kZXJpdmVkIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcnVsZTogUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgcnVsZSBvYmplY3QgaXMgYWxyZWFkeSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhbm90aGVyIGluc3RhbmNlLCB3ZSBjcmVhdGUgYSBjbG9uZVxyXG5cdFx0Ly8gb2YgdGhlIHJ1bGUgYW5kIHNldCBpdCB0byBvdXIgaW5zdGFuY2UuXHJcblx0XHRpZiAocnVsZS5vd25lcilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lKVxyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdID0gcnVsZSA9IHJ1bGUuY2xvbmUoKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gVE9ETzogc3VwcG9ydCBhbHJlYWR5IHVzZWQgcnVsZXMgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRydWxlLnByb2Nlc3MoIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHJcblx0XHRpZiAocnVsZSBpbnN0YW5jZW9mIEltcG9ydFJ1bGUpXHJcblx0XHRcdHRoaXMuaW1wb3J0cy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBOYW1lc3BhY2VSdWxlKVxyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMub3RoZXJSdWxlcy5wdXNoKCBydWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJ1bGVzIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc0FycmF5KCBwcm9wVmFsczogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wVmFscyB8fCBwcm9wVmFscy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRob3NlIHRoYXQgYXJlIHJ1bGVzLlxyXG5cdFx0Zm9yKCBsZXQgcHJvcFZhbCBvZiBwcm9wVmFscylcclxuXHRcdFx0dGhpcy5wcm9jZXNzUHJvcGVydHkoIG51bGwsIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdHB1YmxpYyBnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHNldEN1c3RvbVZhclZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodmFsdWUgIT0gbnVsbClcclxuXHRcdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggbmFtZSwgdmFsdWUsIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCBuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGVzIGEgZ2xvYmFsbHkgdW5pcXVlIENTUyBuYW1lIGZvciB0aGUgZ2l2ZW4gcnVsZSBuYW1lIHVubGVzcyB0aGlzIHJ1bGUgbmFtZSBhbHJlYWR5XHJcblx0ICogZXhpc3RzIGVpdGhlciBpbiBhIGJhc2UgY2xhc3Mgb3IgaW4gdGhlIGNoYWluIG9mIHBhcmVudCBncm91cGluZyBydWxlcy5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBpZiBydWxlIG5hbWUgd2FzIG5vdCBzcGVjaWZpZWQsIGdlbmVyYXRlIGl0IHVuaXF1ZWx5OyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgd2VcclxuXHRcdC8vIGFscmVhZHkgaGF2ZSB0aGlzIHJ1bGUgbmFtZTogaWYgeWVzLCByZXR1cm4gdGhlIGFscmVhZHkgYXNzaWduZWQgbmFtZS4gSWYgd2UgZGlkbid0XHJcblx0XHQvLyBmaW5kIHRoZSBuYW1lLCB0cnkgdG8gZmluZCBpdCBpbiB0aGUgYmFzZSBjbGFzc2VzKTsgaWYgbm90IGZvdW5kIHRoZXJlLCBnZW5lcmF0ZSBpdFxyXG5cdFx0Ly8gdXNpbmcgdGhpcyBjb250YWluZXIncyBuYW1lIGFuZCB0aGUgcnVsZSBuYW1lIChub3RlIHRoYXQgZGVwZW5kaW5nIG9uIHRoZSBtb2RlLCBib3RoXHJcblx0XHQvLyBjYW4gYmUgZ2VuZXJhdGVkIHVuaXF1ZWx5KS5cclxuXHRcdGlmICghcnVsZU5hbWUpXHJcblx0XHRcdHJldHVybiBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGVOYW1lIGluIHRoaXMuaW5zdGFuY2UgJiYgXCJuYW1lXCIgaW4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0pXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlW3J1bGVOYW1lXS5uYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIG91dCBpZiB0aGVyZSBpcyBhIHJ1bGUgd2l0aCB0aGlzIG5hbWUgZGVmaW5lZCBpbiBhIHN0eWxlc2hlZXQgaW5zdGFuY2UgY3JlYXRlZCBmb3JcclxuXHRcdFx0Ly8gYSBjbGFzcyBmcm9tIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuXHJcblx0XHRcdGxldCBleGlzdGluZ05hbWUgPSBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCB0aGlzLmRlZmluaXRpb25DbGFzcywgcnVsZU5hbWUpO1xyXG5cdFx0XHRyZXR1cm4gZXhpc3RpbmdOYW1lID8gZXhpc3RpbmdOYW1lIDogZ2VuZXJhdGVOYW1lKCB0aGlzLm5hbWUsIHJ1bGVOYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLiAqL1xyXG5cdHB1YmxpYyBpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGFzIHRoZXkgbXVzdCBiZSBiZWZvcmUgb3RoZXIgcnVsZXMuIElmIHRoZSBwYXJlbnQgaXMgYSBncm91cGluZ1xyXG5cdFx0Ly8gcnVsZSwgZG9uJ3QgaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXQgYWxsXHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltUnVsZUNvbnRhaW5lcl0uYWN0aXZhdGUoKTtcclxuXHJcblx0XHQvLyBpc2VydCBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT5cclxuXHRcdFx0XHR2YXJPYmoudG9Dc3NTdHJpbmcoKSkuZmlsdGVyKCB2ID0+IHYgIT0gbnVsbCkuam9pbihcIjtcIil9fWAsIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluc2VydCBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdHB1YmxpYyBjbGVhclJ1bGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5vd25lciA9PT0gdGhpcy5pbnN0YW5jZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cclxuXHRcdC8vIGRlYWN0aXZhdGUgaW1wb3J0ZWQgc3R5bGVzaGVldHNcclxuXHRcdGZvciggbGV0IHJlZiBvZiB0aGlzLnJlZnMpXHJcblx0XHRcdHJlZltzeW1SdWxlQ29udGFpbmVyXS5kZWFjdGl2YXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGVzaGVldCBpbnRvIERPTS4gKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICgrK3RoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgbm90LWVtYmVkZGVkIHN0eWxlIGRlZmluaXRpb25zIGNyZWF0ZSB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuZW1iZWRkaW5nQ29udGFpbmVyKVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSB0aGlzLmVtYmVkZGluZ0NvbnRhaW5lci5kb21TdHlsZUVsbTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbS5pZCA9IHRoaXMubmFtZTtcclxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLmRvbVN0eWxlRWxtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IHRoaXMudG9wTGV2ZWxDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblxyXG5cdFx0XHR0aGlzLmluc2VydFJ1bGVzKCB0aGlzLmRvbVN0eWxlRWxtIS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZXNoZWV0IGZyb20gRE9NLiAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBndWFyZCBmcm9tIGV4dHJhIGRlYWN0aXZhdGUgY2FsbHNcclxuXHRcdGlmICh0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICgtLXRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyUnVsZXMoKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpaXRpb24gY3JlYXRlcyB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtIS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGNvbnRhaW5lciBpcyBmb3IgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uLlxyXG5cdHByaXZhdGUgZ2V0IGlzVG9wTGV2ZWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm93bmVyID09PSBudWxsIHx8IHRoaXMub3duZXIgPT09IHRoaXMuaW5zdGFuY2UgfVxyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgcHJvY2Vzc2VkLlxyXG5cdHB1YmxpYyBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzXHJcblxyXG5cdC8vIE5hbWUgb2YgdGhpcyBjb250YWluZXIsIHdoaWNoLCBkZXBlbmRpbmcgb24gdGhlIG1vZGUsIGlzIGVpdGhlciB0YWtlbiBmcm9tIHRoZSBjbGFzc1xyXG5cdC8vIGRlZmluaXRpb24gbmFtZSBvciBnZW5lcmF0ZWQgdW5pcXVlbHkuXHJcblx0cHJpdmF0ZSBuYW1lOiBzdHJpbmdcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBncm91cGluZyBydWxlcyB0aGF0XHJcblx0Ly8gbGVhZCB0byB0aGlzIHJ1bGUgY29udGFpbmVyLiBGb3IgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb25zLCB0aGlzIHBvaW50cyB0byB0aGUgc2FtZVxyXG5cdC8vIHNpbmdsZXRvbiBkZWZpbml0aW9uIGluc3RhbmNlIGFzIHRoZSAnZGVmaW5pdGlvbicgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBvd25lcjogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIG93bmVyIHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBwb2ludHMgdG8gYHRoaXNgLiBOYW1lcyBmb3IgbmFtZWQgcnVsZXMgYXJlIGNyZWF0ZWQgdXNpbmcgdGhpcyBjb250YWluZXIuXHJcblx0cHJpdmF0ZSB0b3BMZXZlbENvbnRhaW5lcjogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgdGhhdCBpcyBlbWJlZGRpbmcgb3VyIGluc3RhbmNlXHJcblx0Ly8gKHRoYXQgaXMsIHRoZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIG91ciBjb250YWluZXIpLiBJZiBkZWZpbmVkLCB0aGlzIGNvbnRhaW5lcidzXHJcblx0Ly8gYDxzdHlsZT5gIGVsZW1lbnQgaXMgdXNlZCB0byBpbnNlcnQgQ1NTIHJ1bGVzIGludG8gaW5zdGVhZCBvZiB0b3BMZXZlbENvbnRhaW5lci5cclxuXHRwcml2YXRlIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIExpc3Qgb2YgcmVmZXJlbmNlcyB0byBvdGhlciBzdHlsZSBkZWZpbml0aW9ucyBjcmVhZWQgdmlhIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVmczogU3R5bGVEZWZpbml0aW9uW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQGltcG9ydCBydWxlc1xyXG5cdHByaXZhdGUgaW1wb3J0czogSW1wb3J0UnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBuYW1lc3BhY2UgcnVsZXNcclxuXHRwcml2YXRlIG5hbWVzcGFjZXM6IE5hbWVzcGFjZVJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBjdXN0b20gdmFyaWFibGUgcnVsZXMuXHJcblx0cHJpdmF0ZSB2YXJzOiBWYXJSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgcnVsZXMgdGhhdCBhcmUgbm90IGltcG9ydHMsIG5hbWVzcGFjZXMsIGN1c3RvbSB2YXJzLCByZWZlcmVuY2VzIG9yIGdyb3VwaW5nIHJ1bGVzLlxyXG5cdHByaXZhdGUgb3RoZXJSdWxlczogUnVsZVtdO1xyXG5cclxuXHQvLyBcIjpyb290XCIgcnVsZSB3aGVyZSBhbGwgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgYXJlIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBjc3NDdXN0b21WYXJTdHlsZVJ1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBlbGVtbnRcclxuXHRwdWJsaWMgZG9tU3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOYW1lIGdlbmVyYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1haXplZCBuYW1lcyBmb3Igc3R5bGUgZWxlbWVudHMgKGNsYXNzIG5hbWVzLCBhbmltYXRpb25cclxuLy8gbmFtZXMsIGV0Yy4pXHJcbmxldCB1c2VVbmlxdWVTdHlsZU5hbWVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4vLyBQcmVmaXggdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgc3R5bGUgbmFtZXMuIElmIHVuZGVmaW5lZCwgYSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbFxyXG4vLyBiZSB1c2VkLlxyXG5sZXQgdW5pcXVlU3R5bGVOYW1lc1ByZWZpeDogc3RyaW5nID0gXCJuXCI7XHJcblxyXG4vLyBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy5cclxubGV0IG5leHRVbmlxdWVJRDogbnVtYmVyID0gMTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGdpdmVuIHJ1bGUgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2hlZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hbWUoIHNoZWV0TmFtZTogc3RyaW5nLCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdXNlVW5pcXVlU3R5bGVOYW1lc1xyXG5cdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpXHJcblx0XHQ6IGAke3NoZWV0TmFtZX1fJHtydWxlTmFtZX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgbmFtZSwgd2hpY2ggY2FuIGJlIHVzZWQgZWl0aGVyIGZvciBzdHlsZSBlbGVtZW50J3MgSUQgb3Igb3IgY2xhc3MsXHJcbiAqIGlkZW50aWZpZXIgb3IgYW5pbWF0aW9uIG5hbWUuIE5hbWVzIGFyZSBnZW5lcmF0ZWQgdXNpbmcgYSBzaW1wbGUgaW5jcmVtZW50aW5nIG51bWJlci5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlTmFtZSggcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6IHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpICsgbmV4dFVuaXF1ZUlEKys7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTG9va3MgdXAgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb25cclxuLy8gY2xhc3MuIElmIGZvdW5kIGFuZCBpZiB0aGUgcHJvcGVydHkgaXMgYSBydWxlLCB0aGVuIHJldHVybnMgdGhlIG5hbWUgYXNzaWduZWQgZm9yIGl0LlxyXG5mdW5jdGlvbiBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcywgcnVsZU5hbWU6IHN0cmluZylcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbkNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBwcm90b3R5cGVzXHJcblx0bGV0IGJhc2VDbGFzcyA9IGRlZmluaXRpb25DbGFzcztcclxuXHR3aGlsZSggKGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggYmFzZUNsYXNzKSkgIT09IFN0eWxlRGVmaW5pdGlvbilcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgYmFzZSBjbGFzcyBhbHJlYWR5IGhhcyBhbiBhc3NvY2lhdGVkIGluc3RhbmNlOyBpZiB5ZXMsIGNoZWNrIHdoZXRoZXJcclxuXHRcdC8vIGl0IGhhc2UgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBydWxlIG5hbWUuIElmIHllcywgdGhlbiB1c2UgdGhpcyBydWxlJ3MgYWxyZWFkeVxyXG5cdFx0Ly8gZ2VuZXJhdGVkIG5hbWUgKGlmIGV4aXN0cykuXHJcblx0XHRpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHN5bUluc3RhbmNlKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGJhc2VJbnN0ID0gYmFzZUNsYXNzW3N5bUluc3RhbmNlXTtcclxuXHRcdFx0aWYgKGJhc2VJbnN0ICYmIHJ1bGVOYW1lIGluIGJhc2VJbnN0ICYmIFwibmFtZVwiIGluIGJhc2VJbnN0W3J1bGVOYW1lXSlcclxuXHRcdFx0XHRyZXR1cm4gYmFzZUluc3RbcnVsZU5hbWVdLm5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvY2Vzc2luZyBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGFzc2lnbnMgbmFtZXMgdG8gaXRzIHJ1bGVzLlxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3ZSBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGluc3RhbmNlIGFscmVhZHlcclxuICogY3JlYXRlZCBmb3IgaXQgYXMgYSBjbGFzcyB3aWxsIGhhdmUgb25seSBhIHNpbmdsZSBhc3NvY2lhdGVkIGluc3RhbmUgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzXHJcbiAqIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG4gKiBcclxuICogSWYgdGhlIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgKGFuIGluc3RhbmNlIG9mIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MpIHRoZW4gd2UgY2hlY2sgd2hldGhlclxyXG4gKiBpdCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZC4gSWYgeWVzLCB3ZSBqdXN0IHJldHVybiBpdCBiYWNrOyBpZiBubywgd2UgYXNzaWduIG5ldyB1bmlxdWUgbmFtZXNcclxuICogdG8gaXRzIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RhbmNlT3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdG93bmVyPzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcblx0aWYgKCFpbnN0YW5jZU9yQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0aWYgKGluc3RhbmNlT3JDbGFzcyBpbnN0YW5jZW9mIFN0eWxlRGVmaW5pdGlvbilcclxuXHR7XHJcblx0XHRwcm9jZXNzSW5zdGFuY2UoIGluc3RhbmNlT3JDbGFzcyk7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2VPckNsYXNzO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB0aGlzIGRlZmluaXRpb24gY2xhc3MgaXMgYWxyZWFkeSBhc3NvY2lhdGVkIHdpdGggYW4gaW5zdGFuY2VcclxuXHRcdHJldHVybiBpbnN0YW5jZU9yQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpXHJcblx0XHRcdD8gaW5zdGFuY2VPckNsYXNzW3N5bUluc3RhbmNlXVxyXG5cdFx0XHQ6IHByb2Nlc3NDbGFzcyggaW5zdGFuY2VPckNsYXNzLCBvd25lcik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgYnkgY3JlYXRpbmcgaXRzIGluc3RhbmNlIGFuZCBhc3NvY2lhdGluZyBhXHJcbiAqIHJ1bGUgY29udGFpbmVyIG9iamVjdCB3aXRoIGl0LiBUaGUgY2xhc3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGluc3RhbmNlIHVzaW5nIHRoZVxyXG4gKiBTeW1ib2wgcHJvcGVydHkuIFRoZSBvd25lciBwYXJhbWV0ZXIgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpaXRpb25cclxuICogb2JqZWN0IG9yIG51bGwgaWYgdGhlIGdpdmVuIGNsYXNzIGlzIGl0c2VsZiBhIHRvcC1sZXZlbCBjbGFzcyAodGhhdCBpcywgaXMgbm90IGEgY2xhc3NcclxuICogdGhhdCBkZWZpbmVzIHJ1bGVzIHdpdGhpbiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMpLlxyXG4gKiBAcGFyYW0gZGVmaW5pdGlvbkNsYXNzIFxyXG4gKiBAcGFyYW0gb3duZXIgXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ2xhc3MoIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdG93bmVyPzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcblx0Ly8gY2FsbCB0aGUgJ3VzZScgZnVuY3Rpb24gZm9yIGFsbCB0aGUgYmFzZSBjbGFzc2VzIHNvIHRoYXQgcnVsZSBuYW1lcyBhcmUgZ2VuZXJhdGVkLiBXZVxyXG5cdC8vIGRvbid0IGFjdGl2YXRlIHN0eWxlcyBmb3IgdGhlc2UgY2xhc2VzIGJlY2F1c2UgZGVyaXZlZCBjbGFzc2VzIHdpbGwgaGF2ZSBhbGwgdGhlXHJcblx0Ly8gcnVsZXMgZnJvbSBhbGwgdGhlIGJhc2UgY2xhc3NlcyBhcyB0aGVpciBvd24gYW5kIHNvIHRoZXNlIHJ1bGVzIHdpbGwgYmUgYWN0aXZhdGVkIGFzXHJcblx0Ly8gcGFydCBvZiB0aGUgZGVyaXZlZCBjbGFzcy5cclxuXHRsZXQgYmFzZUNsYXNzID0gZGVmaW5pdGlvbkNsYXNzO1xyXG5cdHdoaWxlKCAoYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKSAhPT0gU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0cHJvY2Vzc0NsYXNzKCBiYXNlQ2xhc3MsIG93bmVyKTtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIHRoZSBpbnN0YW5jZSBvZiB0aGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IGRlZmluaXRpb25DbGFzcyggb3duZXIpO1xyXG5cclxuXHRcdC8vIGdldCB0aGUgbmFtZSBmb3Igb3VyIGNvbnRhaW5lclxyXG5cdFx0bGV0IG5hbWUgPSB1c2VVbmlxdWVTdHlsZU5hbWVzIHx8ICFkZWZpbml0aW9uQ2xhc3MubmFtZVxyXG5cdFx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSgpXHJcblx0XHRcdDogZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblxyXG5cdFx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lKTtcclxuXHRcdGRlZmluaXRpb25DbGFzc1tzeW1JbnN0YW5jZV0gPSBpbnN0YW5jZTtcclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgaW5zdGFudGlhdGluZyBTdHlsZSBEZWZpbml0aW9uIENsYXNzICcke2RlZmluaXRpb25DbGFzcy5uYW1lfSdgLCBlcnIpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBpbnN0YW5jZSBhbmQgYXNzaWducyBuYW1lcyB0byBpdHMgcnVsZXMuIElmIHRoZVxyXG4gKiBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCwgd2UganVzdCByZXR1cm4gaXQgYmFjazsgaWYgbm8sIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXIpOiB2b2lkXHJcbntcclxuXHQvLyBpZiB0aGUgaW5zdGFuY2UgaXMgYWxyZWFkeSBwcm9jZXNzZWQsIGp1c3QgcmV0dXJuIGl0OyBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZVxyXG5cdC8vIGVtYmVkZGluZ0NvbnRhaW5lciBwYXJhbWV0ZXIuXHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBpbnN0YW5jZVtzeW1SdWxlQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRsZXQgbmFtZSA9IGdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdGlmICghdXNlVW5pcXVlU3R5bGVOYW1lcylcclxuXHR7XHJcblx0XHRsZXQgZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2UuY29uc3RydWN0b3I7XHJcblx0XHRpZiAoZGVmaW5pdGlvbkNsYXNzLm5hbWUpXHJcblx0XHRcdG5hbWUgKz0gXCJfXCIgKyBkZWZpbml0aW9uQ2xhc3MubmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIGNyZWF0ZSBjb250YWluZXIgLSB0aGlzIHdpbGwgYXNzb2NpYXRlIHRoZSBuZXcgY29udGFpbmVyIHdpdGggdGhlIGluc3RhbmNlIGFuZCBwcm9jZXNzXHJcblx0Ly8gdGhlIHJ1bGVzLlxyXG5cdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSwgZW1iZWRkaW5nQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBydWxlIGNvbnRhaW5lciBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250YWluZXJGcm9tRGVmaW5pdGlvbiggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogUnVsZUNvbnRhaW5lclxyXG57XHJcblx0cmV0dXJuIGRlZmluaXRpb24gPyBkZWZpbml0aW9uW3N5bVJ1bGVDb250YWluZXJdIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmIHRoZSBpbnB1dCBvYmplY3QgaXNcclxuICogbm90IGEgc3R5bGUgZGVmaW5pdGlvbiBidXQgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCBvYnRhaW4gc3R5bGUgZGVmaW5pdGlvbiBieSBjYWxsaW5nIHRoZSAkdXNlXHJcbiAqIGZ1bmN0aW9uLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lc1xyXG4gKiBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZCB0byBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXJcclxuICogZ29lcyB1cCB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0bGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdGFuY2VPckNsYXNzKSBhcyBUO1xyXG5cdGlmICghaW5zdGFuY2UpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBpbnN0YW5jZVtzeW1SdWxlQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdHJ1bGVDb250YWluZXIuYWN0aXZhdGUoKTtcclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlYWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGJ5IHJlbW92aW5nIGl0cyBydWxlcyBmcm9tIERPTS4gTm90ZSB0aGF0IGVhY2ggc3R5bGVcclxuICogZGVmaW5pdGlvbiBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmRcclxuICogZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlciBnb2VzIGRvd24gdG8gMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcbntcclxuXHRpZiAoIWRlZmluaXRpb24pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZGVmaW5pdGlvbltzeW1SdWxlQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdFx0cnVsZUNvbnRhaW5lci5kZWFjdGl2YXRlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTaG9ydE5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHVzZVVuaXF1ZVN0eWxlTmFtZXMgPSBlbmFibGU7XHJcblx0dW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IHByZWZpeCA/IHByZWZpeCA6IFwiblwiO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUN1c3RvbVZhciwgT25lT3JNYW55fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge0V4dGVuZGVkU3R5bGVzZXQsIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7XHJcblx0UHNldWRvRW50aXR5LCBDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzLCBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eVxyXG59IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwcm9wZXJ0aWVzIHVzZWQgaW4gdGhlIFtbQ29tYmluZWRTdHlsZXNldF1dIHdoaWNoIGFyZSB1c2VkIHRvIGRlZmluZSBkZXBlbmRlbnQgcnVsZXMgKi9cclxuZXhwb3J0IHR5cGUgU2VsZWN0b3JDb21iaW5hdG9yID0gXCImXCIgfCBcIiYsXCIgfCBcIiYgXCIgfCBcIiY+XCIgfCBcIiYrXCIgfCBcIiZ+XCIgfCBcIiwmXCIgfCBcIiAmXCIgfCBcIj4mXCIgfCBcIismXCIgfCBcIn4mXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29tYmluZWRTdHlsZXNldCB0eXBlIGV4dGVuZHMgdGhlIFN0eWxlc2V0IHR5cGUgd2l0aCBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBwcm92aWRlXHJcbiAqIGFkZGl0aW9uYWwgbWVhbmluZyB0byB0aGUgc3R5bGVzZXQgYW5kIGFsbG93IGJ1aWxkaW5nIGRlcGVuZGVudCBzdHlsZSBydWxlczpcclxuICogLSBUaGUgYCtgIHByb3BlcnR5IHNwZWNpZmllcyBvbmUgb3IgbW9yZSBwYXJlbnQgc3R5bGUgcnVsZXMuIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmdcclxuICogICBwYXJlbnQgcnVsZXMgdXNpbmcgYSBjb252ZW5pZW50IHN0eWxlLXByb3BlcnR5LWxpa2Ugbm90YXRpb24uXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIHBzZXVkbyBjbGFzcyBuYW1lcyAoZS5nLiBcIjpob3ZlclwiKSBvciBwc2V1ZG8gZWxlbWVudCBuYW1lcyAoZS5nLiBcIjo6YWZ0ZXJcIikuXHJcbiAqICAgVGhlc2UgcHJvcGVydGllcyBkZWZpbmUgYSBzdHlsZXNldCB0aGF0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHNlbGVjdG9yIG9idGFpbmVkIGJ5IHVzaW5nXHJcbiAqICAgdGhlIG9yaWdpbmFsIHN0eWxlc2V0J3Mgb3duZXIgZm9sbG93ZWQgYnkgdGhlIGdpdmVuIHBzZXVkbyBjbGFzcyBvciBwc2V1ZG8gZWxlbWVudC5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggbmFtZXMgb2YgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyAoZS5nLiBcIjpudGgtY2hpbGRcIikgb3IgcGFyYW1ldGVyaXplZFxyXG4gKiAgIHBzZXVkbyBlbGVtZW50cyAoZS5nLiBcIjo6c2xvdHRlZFwiKS4gVGhlc2UgcHJvcGVydGllcyBjb250YWluIGEgdHVwbGUsIHdoZXJlIHRoZSBmaXJzdFxyXG4gKiAgIGVsZW1lbnQgaXMgdGhlIHBhcmFtZXRlciBmb3IgdGhlIHNlbGVjdG9yIGFuZCB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgdGhlIHN0eWxlc2V0LlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIHRoZSBhbXBlcnNhbmQgc3ltYm9sICgnJicpIHRoYXQgY29udGFpbiBhcnJheXMgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIGVhY2hcclxuICogICBkZWZpbmluZyBhIHNlbGVjdG9yIGFuZCBhIHN0eWxlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBzZWxlY3Rvci4gU2VsZWN0b3JzIGNhbiB1c2UgdGhlXHJcbiAqICAgYW1wZXJzYW5kIHN5bWJvbCB0byByZWZlciB0byB0aGUgcGFyZW50IHN0eWxlIHNlbGVjdG9yLiBJZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpcyBub3QgdXNlZCxcclxuICogICB0aGUgc2VsZWN0b3Igd2lsbCBiZSBzaW1wbHkgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBzZWxlY3Rvci5cclxuICogXHJcbiAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBzdHlsZSBydWxlcyAoZS5nLiAkY2xhc3MpIGFjY2VwdCB0aGUgQ29tYmluZWRTdHlsZXNldCBhcyBhIHBhcmFtZXRlcixcclxuICogZm9yIGV4YW1wbGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIE15U3R5bGVzIGV4dGVuZHMgY3NzLlN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICBjbGFzczEgPSBjc3MuJGNsYXNzKHt9KVxyXG4gKiAgICAgY2xhc3MyID0gY3NzLiRjbGFzcyh7XHJcbiAqICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAqICAgICAgICAgXCI6aG92ZXJcIiA6IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiB9LFxyXG4gKiAgICAgICAgIFwiJlwiOiBbXHJcbiAqICAgICAgICAgICAgIFsgXCJsaSA+ICZcIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSBdLFxyXG4gKiAgICAgICAgICAgICBbIHRoaXMuY2xhc3MxLCB7IGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiB9IF1cclxuICogICAgICAgICBdXHJcbiAqICAgICB9KVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhpcyB3aWxsIHRyYW5zbGF0ZSB0byB0aGUgZm9sbG93aW5nIENTUyAoY2xhc3MgbmFtZSBpcyBhdXRvLWdlbmVyYXRlZCk6XHJcbiAqIFxyXG4gKiBgYGBjc3NcclxuICogLm0xMjMgeyBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlOyB9XHJcbiAqIC5tMTIzOmhvdmVyIHsgYmFja2dyb3VuZENvbG9yOiBncmV5OyB9XHJcbiAqIGxpID4gLm0xMjMgeyBiYWNrZ3JvdW5kQ29sb3I6IHllbGxvdzsgfVxyXG4gKiAubTEyMy5tMTIyIHsgYmFja2dyb3VuZENvbG9yOiBvcmFuZ2U7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21iaW5lZFN0eWxlc2V0ID0gU3R5bGVzZXQgJlxyXG5cdHsgXCIrXCI/OiBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdIH0gJlxyXG5cdHsgW0sgaW4gUHNldWRvRW50aXR5XT86IENvbWJpbmVkU3R5bGVzZXQgfSAmXHJcblx0eyBbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eV0/OiBbSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlbS10sIENvbWJpbmVkU3R5bGVzZXRdW10gfSAmXHJcblx0eyBbSyBpbiBTZWxlY3RvckNvbWJpbmF0b3JdPzogW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdIH07XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcyB0aGF0IGhhdmUgYSBuYW1lOyB0aGF0IGlzLFxyXG4gKiBjbGFzcywgSUQsIGtleWZyYW1lcyBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHJ1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGRlcGVuZGVudCBydWxlcyBvZiBhIHN0eWxlIHJ1bGVcclxuICovXHJcbmV4cG9ydCB0eXBlIERlcGVuZGVudFJ1bGVzID1cclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIGtleW9mIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XT86IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGluZyBydWxlIGluIGEgc3R5bGUgc2hlZXQuIFN0eWxlIHJ1bGVzIGNhbiBiZSB1c2VkXHJcbiAqIGFueXdoZXJlIHdoZXJlIHN0eWxlIHByb3BlcnRpZXMgY2FuIGJlIGRlZmluZWQ6IGNsYXNzIHJ1bGVzLCBJRCBydWxlcywgc2VsZWN0b3IgcnVsZXMsXHJcbiAqIGtleWZyYW1lcywgZXRjLiBTdHlsZVJ1bGUgZGVmaW5lcyBhIHN0eWxlc2V0IGFuZCBjYW4gb3B0aW9uYWxseSBwb2ludCB0byBvbmUgb3IgbW9yZSBzdHlsZSBydWxlc1xyXG4gKiBmcm9tIHdoaWNoIGl0IGluaGVyaXRzLiBBIHN0eWxlc2V0IGNvbWJpbmVzIGFsbCB0aGUgcHJvcGVydGllcyBmcm9tIGl0cyBvd24gcHJvcGVydHkgYmxvY2sgYXNcclxuICogd2VsbCBhcyBmcm9tIGFsbCBvZiBzdHlsZSBydWxlcyBpdCBpbmhlcml0ZXMgZnJvbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cmVhZG9ubHkgc2VsZWN0b3JUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIGN1c3RvbVZhciBJVmFyUnVsZSBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBjdXN0b21WYXI6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZFN0eWxlUnVsZSBpbnRlcmZhY2UgY29tYmluZXMgSVN0eWxlUnVsZSBhbmQgSU5hbWVkRW50aXR5IGludGVyZmFjZXMuIFRoaXMgaXMgdXNlZFxyXG4gKiBmb3IgY2xhc3MgYW5kIElEIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGNsYXNzIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc1J1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjbGFzcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cmVhZG9ubHkgY3NzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSURSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB3aGVyZSB0aGUgc2VsZWN0b3IgaXMgYSBzaW5nbGUgZWxlbWVudCBJRC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUlEUnVsZSBleHRlbmRzIElOYW1lZFN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGVsZW1lbnQgSUQgcHJlZml4ZWQgd2l0aCBcIiNcIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0lETmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uV2F5cG9pbnQgdHlwZSBkZWZpbmVzIGEgdHlwZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIHdheXBvaW50IGluIGFuXHJcbiAqIGFuaW1hdGlvbiBzZXF1ZW5jZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbldheXBvaW50ID0gT25lT3JNYW55PFwiZnJvbVwiIHwgXCJ0b1wiIHwgbnVtYmVyPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uU3R5bGVzIHR5cGUgZGVmaW5lcyBhIG9iamVjdCBjb250YWluaW5nIHN0eWxlIHByb3BlcnRpZXMgZm9yIGFuIGFuaW1hdGlvbiBmcmFtZS5cclxuICogU3R5bGVzZXRzIGZvciBrZXlmcmFtZXMgYWxsb3cgY3VzdG9tIHByb3BlcnRpZXMgKHZpYSBcIi0tXCIpLiBBbmltYXRpb24gc3R5bGVzZXQgY2FuIGV4dGVuZFxyXG4gKiBvdGhlciBzdHlsZSBydWxlczsgaG93ZXZlciwgYW55IGRlcGVuZGVudCBydWxlcyB3aWxsIGJlIGlnbm9yZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25TdHlsZXNldCA9IFN0eWxlc2V0ICYgeyBcIitcIj86IElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW10gfTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWUgdHlwZSBkZWZpbmVzIGEgc2luZ2xlIGtleWZyYW1lIHdpdGhpbiBhIEBrZXlmcmFtZXMgcnVsZS5cclxuICogVGhlIHdheXBvaW50IGNhbiBiZSBzcGVjaWZpZWQgYXMgXCJmcm9tXCIgb3IgXCJ0b1wiIHN0cmluZ3Mgb3IgYXMgYSBudW1iZXIgMCB0byAxMDAsIHdoaWNoIHdpbGwgYmVcclxuICogdXNlZCBhcyBhIHBlcmNlbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GcmFtZSA9IFtBbmltYXRpb25XYXlwb2ludCwgQW5pbWF0aW9uU3R5bGVzZXRdO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQW5pbWF0aW9uUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQGtleWZyYW1lcyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1ska2V5ZnJhbWVzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25SdWxlIGV4dGVuZHMgSVJ1bGUsIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0tleWZyYW1lc1J1bGUgfCBudWxsO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdHlsZSBydWxlcyByZXByZXNlbnRpbmcgYW5pbWF0aW9uIGZyYW1lcyAqL1xyXG5cdHJlYWRvbmx5IGZyYW1lUnVsZXM6IElBbmltYXRpb25GcmFtZVJ1bGVbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQW5pbWF0aW9uRnJhbWVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2luZ2xlIGZyYW1lIGluIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25GcmFtZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgKi9cclxuXHRyZWFkb25seSB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQ7XHJcblxyXG5cdC8qKiBTT00ga2V5ZnJhbWUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc0tleWZyYW1lUnVsZTogQ1NTS2V5ZnJhbWVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb24uXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyR2YXJdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gZXh0ZW5kcyBJTmFtZWRFbnRpdHksIElDdXN0b21WYXI8VmFyVmFsdWVUeXBlPEs+PlxyXG57XHJcblx0LyoqIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS4gKi9cclxuXHRyZWFkb25seSB0ZW1wbGF0ZTogSztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb3VudGVyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIG5hbWVkIGNvdW50ZXIgZGVmaW5pdGlvbi4gVXNlIHRoaXMgcnVsZSB0byBjcmVhdGVcclxuICogY291bnRlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgaW4gY291bnRlci1pbmNyZW1lbnQsIGNvdW50ZXItcmVzZXQgYW5kIGNvdW50ZXItc2V0IHN0eWxlXHJcbiAqIHByb3BlcnRpZXMuIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGNvdW50ZXJzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmVcclxuICogY291bnRlciBkZWZpbml0aW9ucy5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGNvdW50ZXJdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvdW50ZXJSdWxlIGV4dGVuZHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgY291bnRlciAqL1xyXG5cdHJlYWRvbmx5IGNvdW50ZXJOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIFRoZSBJQ291bnRlclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIEBjb3VudGVyLXN0eWxlIHJ1bGUuXHJcbi8vICAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRjb3VudGVyU3R5bGVdXSBmdW5jdGlvbi5cclxuLy8gICovXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSUNvdW50ZXJTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbi8vIHtcclxuLy8gXHQvKiogU09NIGNvdW50ZXItc3R5bGUgcnVsZSAqL1xyXG4vLyBcdHJlYWRvbmx5IGNzc1J1bGU6IENTU0NvdW50ZXJTdHlsZVJ1bGUgfCBudWxsO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUltcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRpbXBvcnRdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltcG9ydFJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ltcG9ydFJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZvbnRGYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBmb250LWZhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGZvbnRmYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb250RmFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ZvbnRGYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZXNwYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG5hbWVzcGFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZXNwYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU05hbWVzcGFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhZ2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHBhZ2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRyZWFkb25seSBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIHBhZ2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1BhZ2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU3ltYm9sIHRoYXQgaXMgdXNlZCBmb3IgdGhlIHByb3BlcnR5IGluIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgdGhhdCBrZWVwcyByZWZlcmVuY2UgdG8gdGhlXHJcbiAqIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBEZXZlbG9wZXJzIGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhY2Nlc3MgcnVsZXMgaW4gdGhlXHJcbiAqIGNoYWluIG9mIG5lc3RlZCBncm91cGluZyBydWxlcy4gV2UgbmVlZCB0byBhdm9pZCBlbnVtZXJhdGluZyB0aGlzIHByb3BlcnR5IHdoZW4gcHJvY2Vzc2luZ1xyXG4gKiB0aGUgcnVsZXMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN5bU93bmVyID0gU3ltYm9sKFwib3duZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzIGlzIGEgYmFzZSBmb3IgYWxsIGNsYXNzZXMgdGhhdCBjb250YWluIGRlZmluaW5pdGlvbnMgb2YgQ1NTIHJ1bGVzLlxyXG4gKiBVc2UgaXQgdGhlIGZvbGxvd2luZyB3YXk6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIE15U3R5bGVzIGV4dGVuZCBTdHlsZURlZmluaXRpb25cclxuICoge1xyXG4gKiAgICAgLy8gOHB4IHBhZGRpbmcgb24gcmVndWxhciBkZXZpY2VzXHJcbiAqICAgICBkZWZhdWx0UGFkZGluZyA9ICR2YXIoIFwicGFkZGluZ1wiLCA4KVxyXG4gKiBcclxuICogICAgIGlmTmFycm93RGV2aWNlID0gJG1lZGlhKCB7bWF4V2lkdGg6IDYwMCB9LFxyXG4gKiAgICAgICAgIGNsYXNzIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPE15U3R5bGVzPlxyXG4gKiAgICAgICAgIHtcclxuICogICAgICAgICAgICAgLy8gNHB4IHBhZGRpbmcgb24gbmFycm93IGRldmljZXNcclxuICogICAgICAgICAgICAgZGVmYXVsdFBhZGRpbmcgPSAkdmFyKCBcInBhZGRpbmdcIiwgTGVuLmNhbGMoIFwiezB9IC8gMlwiLCB0aGlzLm93bmVyLmRlZmF1bHRQYWRkaW5nKSlcclxuICogICAgICAgICB9XHJcbiAqICAgICApXHJcbiAqIH1cclxuICogYGBgXHJcbiAqIEB0eXBlcGFyYW0gTyBUb3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgd2hpY2ggaXMgdGhlIG93bmVyIG9mIHRoaXMgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVEZWZpbml0aW9uPE8gZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBTdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYXJlIGNyZWF0ZWQgZGlyZWN0bHkgb25seSBieSB0aGUgKnN0eWxlZCBjb21wb25lbnRzKiAtIHRoYXQgaXMsXHJcblx0ICogY29tcG9uZW50cyB0aGF0IHVzZSBkaWZmZXJlbnQgc3R5bGVzIGZvciBlYWNoIGluc3RhbmNlLiBPdGhlcndpc2UsIHN0eWxlIGRlZmluaXRpb25cclxuXHQgKiBjbGFzcyBpbnN0YW5jZXMgYXJlIGNyZWF0ZWQgd2hlbiBlaXRoZXIgdGhlIFtbJHVzZV1dIG9yIFtbJGFjdGl2YXRlXV0gZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSBvd25lciBSZWZlcmVuY2UgdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0ICovXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBvd25lcjogTyB8IG51bGwgPSBudWxsKVxyXG5cdHtcclxuXHRcdHRoaXNbc3ltT3duZXJdID0gb3duZXI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3aGljaCBpcyB0aGUgKm93bmVyKiBvZlxyXG5cdCAqIHRoaXMgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuIFRoZSBvd25lciBpcyB0aGUgdG9wLWxldmVsIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBzdHlsZVxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhyb3VnaCB0aGlzIG1lbWViZXIsIGFsbCBydWxlcyBhbmQgb3RoZXIgbWVtZWJlcnMgZGVmaW5lZCBpbiB0aGUgb3duZXJcclxuXHQgKiBkZWZpbml0aW9uIGNsYXNzIGNhbiBiZSBhY2Nlc3NlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG93bmVyKCk6IE8gfCBudWxsIHsgcmV0dXJuIHRoaXNbc3ltT3duZXJdOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFwiQ29uc3RydWN0b3JcIiBpbnRlcmZhY2UgZGVmaW5pbmcgaG93IHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBjYW4gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb248Tz4gPSBhbnksIE8gZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+XHJcbntcclxuXHQvKiogQWxsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBzaG91bGQgY29uZm9ybSB0byB0aGlzIGNvbnN0cnVjdG9yICovXHJcblx0bmV3KCBvd25lcj86IE8pOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyb3VwUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGdyb3VwaW5nIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JvdXBSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGRlZmluaW5nIHRoZSBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGVcclxuXHRyZWFkb25seSBydWxlczogVDtcclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTR3JvdXBpbmdSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdXBwb3J0c1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHN1cHBvcnRzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1lZGlhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbWVkaWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBDb21iaW5lZFN0eWxlc2V0LCBJVmFyUnVsZSwgRGVwZW5kZW50UnVsZXMsIElOYW1lZEVudGl0eSwgSUNsYXNzUnVsZSwgSUlEUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBDdXN0b21WYXJfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIGNyZWF0ZU5hbWVzfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7bWVyZ2VTdHlsZXNldHMsIHN0eWxlc2V0VG9TdHJpbmcsIHN0eWxlUHJvcFRvU3RyaW5nLCBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHN9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7dmFsdWVUb1N0cmluZywgY2FtZWxUb0Rhc2h9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiO1xyXG5pbXBvcnQge3BzZXVkb0VudGl0eVRvU3RyaW5nLCBzZWxlY3RvclRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgY29udGFpbiBhIHN0eWxlIHJ1bGUuIFRoaXMgY2xhc3NcclxuICogaW1wbGVtZW50cyB0aGUgcGFyc2luZyBvZiB0aGUgQ29tYmluZWRTdHlsZXNldCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFRoZSBzdHlsZXNldCBjYW4gYmUgYW4gQ29tYmluZWRTdHlsZXNldCBmb3IgbWFueSBydWxlczsgaG93ZXZlciwgZm9yIHNvbWUgaXQgaXMganVzdFxyXG5cdC8vIG9mIHRoZSBTdHlsZXNldCB0eXBlLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVzZXQgPSB7fTtcclxuXHRcdHRoaXMuZGVwZW5kZW50UnVsZXMgPSB7fTtcclxuXHJcblx0XHRpZiAoc3R5bGVzZXQpXHJcblx0XHRcdHRoaXMucGFyc2VJbnB1dFN0eWxlc2V0KCBzdHlsZXNldCBhcyBDb21iaW5lZFN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR29lcyBvdmVyIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuIHN0eWxlc2V0IGFuZCBwYXJzZXMgdGhlbSBpbnRvIHByb3BlciBzdHlsZXNldCwgc2V0IG9mXHJcblx0ICogaW1wb3J0YW50IHByb3BlcnRpZXMgYW5kIGRlcGVuZGVudCBydWxlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlSW5wdXRTdHlsZXNldCggaW5wdXRTdHlsZXNldDogQ29tYmluZWRTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB3ZSBoYXZlIHBhcmVudHMsIHdlIGZpcnN0IGNvcHkgcHJvcGVydGllcyBmcm9tIHRoZW0gc28gdGhhdCBvdXIgb3duIHByb3BlcnRpZXNcclxuXHRcdC8vIGNhbiBvdmVycmlkZSB0aGVtLlxyXG5cdFx0aWYgKGlucHV0U3R5bGVzZXRbXCIrXCJdKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB0aGUgdmFsdWUgaXMgYSBzaW5nbGUgU3R5bGVSdWxlIG9yIGFuIGFycmF5IG9mIFN0eWxlUnVsZXMgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cclxuXHRcdFx0bGV0IGV4dGVuZHNQcm9wVmFsID0gaW5wdXRTdHlsZXNldFtcIitcIl0gYXMgKFN0eWxlUnVsZSB8IFN0eWxlUnVsZVtdKTtcclxuXHRcdFx0bGV0IHBhcmVudFJ1bGVzOiBTdHlsZVJ1bGVbXTtcclxuXHRcdFx0aWYgKGV4dGVuZHNQcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVSdWxlKVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gW2V4dGVuZHNQcm9wVmFsXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gZXh0ZW5kc1Byb3BWYWw7XHJcblxyXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIHBhcmVudCBydWxlcywgY29weSBzdHlsZXNldHMgYW5kIGRlcGVuZGVudCBydWxlcyBmcm9tIHRoZW0uXHJcblx0XHRcdGlmIChwYXJlbnRSdWxlcyAmJiBwYXJlbnRSdWxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyZW50UnVsZXMuZm9yRWFjaCggcGFyZW50ID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBwYXJlbnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWVyZ2UgY3VzdG9tICBwcm9wZXJ0aWVzXHJcblx0XHRtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRoaXMuc3R5bGVzZXQsIGlucHV0U3R5bGVzZXQpO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIGlucHV0U3R5bGVzZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgb3ZlciBhbHJlYWR5IHByb2Nlc3NlZCBwYXJlbnRzLCBpbXBvcnRhbnQgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzXHJcblx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCIrXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBwcm9wVmFsID0gaW5wdXRTdHlsZXNldFtwcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiOlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGlzIGlzIGFuIGFycmF5IG9mIHR1cGxlcyByZXByZXNlbnRpbmdcclxuXHRcdFx0XHQvLyBwYXJhbWV0ZXJpc2VkIHBzZXVkbyBlbnRpdGllcyB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcGFyYW1ldGVyIHZhbHVlXHJcblx0XHRcdFx0Ly8gKHN0cmluZykgYW5kIHRoZSBzZWNvbmQgdGhlIENvbWJpbmVkU3R5bGVzZXQuIE90aGVyd2lzZSwgdGhlIHZhbHVlIGlzIGp1c3QgYW5cclxuXHRcdFx0XHQvLyBDb21iaW5lZFN0eWxlc2V0LlxyXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFthbnksIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdFx0cHJvcE5hbWUsIHR1cGxlWzBdLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ldyBEZXBlbmRlbnRSdWxlKCBcIiZcIiArIHByb3BOYW1lLCB1bmRlZmluZWQsXHJcblx0XHRcdFx0XHRcdHByb3BWYWwgYXMgQ29tYmluZWRTdHlsZXNldCwgdGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiJlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHR0dXBsZVswXSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0KCkgPT4gcHJvcE5hbWUgKyBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSksIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuZW5kc1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSkgKyBwcm9wTmFtZSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGlzIGlzIGEgcmVndWxhciBDU1MgcHJvcGVydHk6IGNvcHkgdGhlIHByb3BlcnR5IHZhbHVlIHRvIG91ciBpbnRlcm5hbCBzdHlsZXNldFxyXG5cdFx0XHRcdHRoaXMuc3R5bGVzZXRbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgcHJvY2VzcyB0aGVtIHVuZGVyIHRoZSBzYW1lIGNvbnRhaW5lclxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUucHJvY2Vzcyggb3duZXIsIG51bGwpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLnByb2Nlc3MoIG93bmVyLCBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHByb3RlY3RlZCBjb3B5RnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uIGEgbmV3bHkgY3JlYXRlZCBvYmplY3Qgc28gd2UgZG9uJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyBpblxyXG5cdFx0Ly8gb3VyIG93biBzdHlsZXNldCB5ZXRcclxuXHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgc3JjLnN0eWxlc2V0KTtcclxuXHRcdHRoaXMuY29weURlcGVuZGVudFJ1bGVzRnJvbSggc3JjKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGRlcGVuZGVudCBydWxlcyBmcm9tIGFub3RoZXIgc3R5bGUgcnVsZSBvYmplY3QuXHJcblx0cHJpdmF0ZSBjb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzcmMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gc3JjLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGFyciA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmICghYXJyKVxyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBhcnIgPSBbXTtcclxuXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoc3JjRGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IHNyY0RlcFJ1bGUuY2xvbmUoKSBhcyBEZXBlbmRlbnRSdWxlO1xyXG5cdFx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0XHRhcnIucHVzaCggbmV3RGVwUnVsZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld0RlcFJ1bGUgPSAocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBuZXdEZXBSdWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBydWxlLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiBgJHt0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nfSB7JHtzdHlsZXNldFRvU3RyaW5nKCB0aGlzLnN0eWxlc2V0KX19YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN0eWxlUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gdGhpcy5jbG9uZU9iamVjdCgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzZXQpLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCB0aGlzLnRvQ3NzU3RyaW5nKCksIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgaW5zZXJ0IHRoZW0gdW5kZXIgdGhlIHNhbWUgcGFyZW50XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuaW5zZXJ0KCBwYXJlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGNsZWFyIHRoZW0gdG9vXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5jbGVhcigpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsZWFyKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRwdWJsaWMgZ2V0IHNlbGVjdG9yVGV4dCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFsbG93cyB0aGUgb2JqZWN0IHRvIHBhcnRpY3BhdGUgaW4gXCJ2YWx1ZVRvU3RyaW5nXCIgc2VyaWFsaXphdGlvbi4gV2hlbmV2ZXJcclxuXHQgKiB0aGUgU3R5bGVSdWxlLWRlcml2ZWQgb2JqZWN0IGlzIGVuY291bnRlcmVkIGJ5IHRoZSBgVXRpbEZ1bmMudmFsdWVUb1N0cmluZ2AgZnVuY3Rpb24sXHJcblx0ICogdGhlIHJ1bGUncyBzZWxlY3RvciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0b3JUZXh0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IHN0eWxlIHJ1bGUgb2JqZWN0IG9mIHRoZSBwcm9wZXIgdHlwZSwgYnV0IHdpdGhvdXQgdGhlIHN0eWxlc2V0IGFuZCBkZXBlbmRlbnRcclxuXHQvLyBydWxlcy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY2xvbmVPYmplY3QoKTogU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0cHVibGljIHNldFByb3A8SyBleHRlbmRzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQ+KCBuYW1lOiBLLCB2YWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnNldFByb3BJbnRlcm5hbCggbmFtZSwgdmFsdWUsIGltcG9ydGFudCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gdmFyT2JqIElWYXJSdWxlIG9iamVjdCBkZWZpbmluZyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhclZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0cHVibGljIHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdmFyT2JqIHx8ICEodmFyT2JqIGluc3RhbmNlb2YgVmFyUnVsZSkpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5zZXRDdXN0b21Qcm9wSW50ZXJuYWwoIHZhck9iaiwgdmFsdWUsIGltcG9ydGFudCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMvcmVtb3ZlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZXRQcm9wSW50ZXJuYWwoIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0ZGVsZXRlIHRoaXMuc3R5bGVzZXRbbmFtZV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc3R5bGVzZXRbbmFtZV0gPSBpbXBvcnRhbnQgPyB7IFwiIVwiOiB2YWx1ZSB9IDogdmFsdWU7XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBpZiBDU1NSdWxlIGFscmVkeSBleGlzdHMsIHNldC9yZW1vdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRoZXJlXHJcblx0XHRpZiAoIXRoaXMuY3NzUnVsZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNzc1J1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIGNhbWVsVG9EYXNoKCBuYW1lKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggY2FtZWxUb0Rhc2goIG5hbWUpLFxyXG5cdFx0XHRcdHN0eWxlUHJvcFRvU3RyaW5nKCBuYW1lLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogdW5kZWZpbmVkKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIGNTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZXRDdXN0b21Qcm9wSW50ZXJuYWwoIHZhck9iajogVmFyUnVsZSwgdmFsdWU6IGFueSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRsZXQgY3VyckN1c3RvbVByb3BzID0gdGhpcy5zdHlsZXNldFtcIi0tXCJdIGFzIEN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuXHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMgfHwgdmFsdWUgIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoY3VyckN1c3RvbVByb3BzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gY3VyckN1c3RvbVByb3BzLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtWzBdID09PSB2YXJPYmopO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID09PSAxKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbXCJcIl0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VyckN1c3RvbVByb3BzKVxyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIi0tXCJdID0gY3VyckN1c3RvbVByb3BzID0gW1t2YXJPYmosIHZhbHVlXV07XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGN1cnJDdXN0b21Qcm9wcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbVswXSA9PT0gdmFyT2JqKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKVxyXG5cdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHNbaW5kZXhdWzFdID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wcy5wdXNoKCBbdmFyT2JqLCB2YWx1ZV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNlY29uZCwgaWYgQ1NTUnVsZSBhbHJlZHkgZXhpc3RzLCBzZXQvcmVtb3ZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0aGVyZVxyXG5cdFx0aWYgKCF0aGlzLmNzc1J1bGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0dGhpcy5jc3NSdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCB2YXJPYmouY3NzTmFtZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggdmFyT2JqLmNzc05hbWUsXHJcblx0XHRcdFx0c3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgdmFsdWUsIHRydWUpLCBpbXBvcnRhbnQgPyBcIiFpbXBvcnRhbnRcIiA6IHVuZGVmaW5lZClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1N0eWxlUnVsZTtcclxuXHJcblx0LyoqXHJcblx0ICogT2JqZWN0IGNvbnRhaW5pbmcgZGVwZW5kZW50IHJ1bGVzLiBQcm9wZXJ0eSBuYW1lcyBhcmUgdGFrZW4gZnJvbSBzcGVjaWFsIHByb3BlcnRpZXNcclxuXHQgKiBvZiB0aGUgQ29tYmluZWRTdHlsZXNldC4gVGhpcyBvYmplY3QgYWxsb3dzIGNhbGxlcnMgdG8gYWNjZXNzIGRlcGVuZGVudCBydWxlcyB0byBjaGFuZ2VcclxuXHQgKiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgcHJvZ3JhbW1hdGljYWxseS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvLyBSZXN1bHRhbnQgb2JqZWN0IGRlZmluaW5nIHByb3BlcnRpZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0cHJpdmF0ZSBzdHlsZXNldDogU3R5bGVzZXQ7XHJcblxyXG5cdC8vIFNlbGVjdG9yIHN0cmluZyBjYWNoZWQgYWZ0ZXIgaXQgaXMgZmlyc3Qgb2J0YWluZWQuIE5lZWRlZCB0byBub3QgaW52b2tlIGdldFNlbGVjdG9yU3RyaW5nXHJcblx0Ly8gbXVsdGlwbGUgdGltZXMgaW4gdGhlIHByZXNlbmNlIG9mIGRlcGVuZGVudCBydWxlcy5cclxuXHRwcml2YXRlIGNhY2hlZFNlbGVjdG9yU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERlcGVuZGVudFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBkZXBlbmRzIG9uIHRoZSBjb250YWluaW5nIHN0eWxlIHJ1bGUuIFRoaXNcclxuICogaXMgdXNlZCBmb3IgcHNldWRvIGNsYXNzZXMsIHBzZXVkbyBlbGVtZW50cywgY29tYmluYXRvcnMgYW5kIG90aGVyIHNlbGVjdG9ycyB0aGF0IGNvbWJpbmUgdGhlXHJcbiAqIGNvbnRhaW5pbmcgcnVsZSdzIHNlbGVjdG9yIHdpdGggYWRkaXRpb25hbCBzZWxlY3RvciBpdGVtcy5cclxuICovXHJcbmNsYXNzIERlcGVuZGVudFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdC8vIGZvciByZWd1bGFyIHNlbGVjdG9ycywgcHNldWRvIGNsYXNzZXMgYW5kIHBzZXVkbyBlbGVtZW50cywgdGhlIHNlbGVjdG9yIGFscmVhZHkgY29udGFpbnNcclxuXHQvLyB0aGUgYW1wZXJzYW5kIGFuZCB0aGUgc2VsZWN0b3JQYXJhbSBpcyB1bmRlZmluZWQuIEZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzLCBwc3Vkb1xyXG5cdC8vIGVsZW1lbnRzIGFuZCBjb21iaW5hdG9ycywgdGhlIHNlbGVjdG9yUGFyYW0gaXMgZGVmaW5lZCBhbmQgdGhlIHNlbGVjdG9yIGlzIGp1c3QgdGhlIGVudGl0eVxyXG5cdC8vIG5hbWUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHNlbGVjdG9yUGFyYW0/OiBhbnksIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCxcclxuXHRcdGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0XHR0aGlzLnNlbGVjdG9yUGFyYW0gPSBzZWxlY3RvclBhcmFtO1xyXG5cdFx0dGhpcy5jb250YWluaW5nUnVsZSA9IGNvbnRhaW5pbmdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogRGVwZW5kZW50UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRGVwZW5kZW50UnVsZSggdGhpcy5zZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHBhcmVudFNlbGVjdG9yID0gdGhpcy5jb250YWluaW5nUnVsZSEuc2VsZWN0b3JUZXh0O1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0b3JQYXJhbSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciBhcyBzdHJpbmc7XHJcblx0XHRcdHJldHVybiBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfSgke3BzZXVkb0VudGl0eVRvU3RyaW5nKCBzZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKX0pYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29udmVydCBzZWxlY3RvciB0byBzdHJpbmcuXHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHNlbGVjdG9yVG9TdHJpbmcoIHRoaXMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHNlbGVjdG9yIHN0cmluZyBkb2Vzbid0IGhhdmUgYW55IG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sLCB3ZVxyXG5cdFx0XHQvLyBzaW1wbHkgYXBwZW5kIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IHNlbGVjdG9yOyBvdGhlcndpc2UsIHdlIHJlcGxhY2UgYWxsXHJcblx0XHRcdC8vIG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sIGluIHRoZSBzZWxlY3RvciBzdHJpbmcgd2l0aCB0aGUgc2VsZWN0b3JcclxuXHRcdFx0Ly8gc3RyaW5nIG9mIHRoZSBwYXJlbnQgcnVsZS5cclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yLmluZGV4T2YoIFwiJlwiKSA8IDBcclxuXHRcdFx0XHQ/IGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9YFxyXG5cdFx0XHRcdDogc2VsZWN0b3IucmVwbGFjZSggLyYvZywgcGFyZW50U2VsZWN0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJ0aWFsIHNlbGVjdG9yIHRoYXQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWxlY3RvciAtIHVzZWQgZm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgYW5kIGVsZW1lbnRzLlxyXG5cdHByaXZhdGUgc2VsZWN0b3JQYXJhbT86IGFueTtcclxuXHJcblx0Ly8gUGFyZW50IHN0eWxlIHJ1bGUgb2Ygd2hpY2ggdGhpcyBydWxlIGlzIGRlcGVuZGVudC5cclxuXHRwdWJsaWMgY29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBYnN0cmFjdFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gb25seSBiZSB1c2VkIGFzIGEgYmFzZSBmb3Igb3RoZXIgc3R5bGVcclxuICogcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IEFic3RyYWN0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCk7XHJcblx0fVxyXG5cclxuXHQvLyBPdmVycmlkZXMgdGhlIFN0eWxlUnVsZSdzIGltcGxlbWVudGF0aW9uIHRvIGRvIG5vdGhpbmcuIE5vIENTU1N0eWxlUnVsZSBpcyBjcmVhdGVkIGZvclxyXG5cdC8vIGFic3RyYWN0IHJ1bGVzLlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lZFN0eWxlUnVsZSBjbGFzcyBpcyBhIGJhc2UgZm9yIHN0eWxlIHJ1bGUgY2xhc3NlcyB0aGF0IGFyZSBhbHNvIG5hbWVkIGVudGl0aWVzIC0gc3VjaFxyXG4gKiBhcyBjbGFzcyBydWxlIGFuZCBJRCBydWxlLlxyXG4gKi9cclxuYWJzdHJhY3QgY2xhc3MgTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5jc3NQcmVmaXgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIEltcGxlbWVudGF0aW9uIG9mIHRoZSB0b1N0cmluZyBtZXRob2QgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcnVsZSAod2l0aG91dCB0aGUgQ1NTIHByZWZpeCkuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJvdGVjdGVkIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElDbGFzc1J1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNsYXNzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0NsYXNzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiLlwiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSURSdWxlIGV4dGVuZHMgTmFtZWRTdHlsZVJ1bGUgaW1wbGVtZW50cyBJSURSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0lETmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogSURSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJRFJ1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiI1wiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RvclJ1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvclJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBTZWxlY3RvclJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBzZWxlY3RvciBvYmplY3QgZm9yIHRoaXMgcnVsZS5cclxuXHRwcml2YXRlIHNlbGVjdG9yOiBDc3NTZWxlY3RvcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lWYXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1ZhclZhbHVlVHlwZSwgVmFyVGVtcGxhdGVOYW1lfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVmFyUnVsZSBkb2VzIG5vdCBkZXJpdmUgZnJvbSB0aGUgUnVsZVxyXG4gKiBjbGFzcyBiZWNhdXNlIGl0IGlzIG5vdCBhIHJlYWwgQ1NTIHJ1bGU7IGhvd2V2ZXIsIGluIG1hbnkgYXNwZWN0cyBpdCByZXBlYXRzIHRoZSBSdWxlJ3NcclxuICogZnVuY3Rpb25hbGl0eS4gSW4gcGFydGljdWxhciBpdCBoYXMgdGhlIHByb2Nlc3MgZnVuY3Rpb24gdGhhdCBhbGxvd3MgaXQgdG8gb2J0YWluIGFuIGFjdHVhbFxyXG4gKiBuYW1lLCB3aGljaCB3aWxsIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBhbmQgdXNpbmcgdGhpcyBjdXN0b20gcHJvcGVydHkgaW4gQ1NTLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHdoaWxlIHRoZSB0eXBlIHBhcmFtZXRlciBLIGlzIGEga2V5IG9mIHRoZSBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLCB0aGUgdmFsdWUgaXMgb2ZcclxuICogdHlwZSBJU3RpbGVzZXRbS10sIHdoaWNoIGlzIEV4dGVuZGVkPElDc3NTdHlsZXNldFtLXT4uIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmcgdmFsdWVzIHRoYXQgYXJlXHJcbiAqIHZhbGlkIGZvciB0aGUgRXh0ZW5kZWQgcm9wZXJ0eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gaW1wbGVtZW50cyBJVmFyUnVsZTxLPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZTogSywgdmFsdWU/OiBWYXJWYWx1ZVR5cGU8Sz4sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+KVxyXG5cdHtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCItLVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFZhclJ1bGU8Sz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFZhclJ1bGU8Sz4odGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWUgPT0gbnVsbCA/IG51bGwgOiBgJHt0aGlzLmNzc05hbWV9OiAke3N0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZhbHVlLCB0cnVlKX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgdmFyKC0tbmFtZSkgZXhwcmVzc2lvbi5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIGB2YXIoJHt0aGlzLmNzc05hbWV9KWA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRWYWx1ZSggdmFsdWU6IFZhclZhbHVlVHlwZTxLPiwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDdXN0b21WYXJWYWx1ZSggdGhpcy5jc3NOYW1lLFxyXG5cdFx0XHR2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudClcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvLyAvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyAvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdC8vIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcblx0cHVibGljIHRlbXBsYXRlOiBLO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgdmFsdWU6IFZhclZhbHVlVHlwZTxLPjtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MgYW5kIHdoaWNoIGhhc2UgdGhlIENTU1N0eWxlUnVsZSB0aHJvdWdoIHdoaWNoXHJcblx0Ly8gdGhlIHZhbHVlIG9mIHRoaXMgY3VzdG9tIHZhcmlhYmxlIGNhbiBiZSBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SU5hbWVkQ29sb3JzLCBDc3NDb2xvciwgQ29sb3JzfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NBbmdsZU1hdGgsIHZhbHVlVG9TdHJpbmd9IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByZWRlZmluZWQgY29sb3IgbmFtZXMgYnkgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuIE9ubHkgYnVpbHQtaW4gY29sb3IgbmFtZXMgd2lsbCBiZSBpblxyXG4gKiB0aGlzIG1hcCAtIHRob3NlIG5hbWVkIGNvbG9ycyB0aGF0IGFyZSBhZGRlZCB1c2luZyBtb2R1bGUgYXVnbWVudGF0aW9uIHdpbGwgTk9UIHJlc2lkZSBpblxyXG4gKiB0aGlzIG1hcC4gVGhpcyBpcyBuZWVkZWQgdG8gY29udmVydCB0aGUgbnVtZXJpYyBjb2xvciB2YWx1ZXMgc2V0IHVzaW5nIHRoZSBDb2xvci5icm93blxyXG4gKiBub3RhdGlvbiB0byB0aGVpciBuYW1lcyB3aGVuIGluc2VydGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5sZXQgcmV2ZXJzZWRDb2xvck1hcCA9IG5ldyBNYXA8bnVtYmVyLHN0cmluZz4oKTtcclxuXHJcbi8vIGJ1aWxkIFJldmVyc2VkIENvbG9yIE1hcFxyXG5PYmplY3QuZW50cmllcyggQ29sb3JzKS5mb3JFYWNoKCAoW25hbWUsIHZhbHVlXSkgPT4gcmV2ZXJzZWRDb2xvck1hcC5zZXQoIHZhbHVlLCBuYW1lKSApO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIGNvbG9yIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGNvbG9yTnVtYmVyVG9TdHJpbmcoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHRoZSBudW1iZXIgaXMgbmVnYXRpdmUsIHJlbWVtYmVyIHRoYXQgZmFjdCBhbmQgZ2V0IHRoZSBwb3NpdGl2ZSBudW1iZXJcclxuICAgIGxldCBuID0gdmFsIDwgMCA/IC12YWwgOiB2YWw7XHJcbiAgICBsZXQgaXNOZWdhdGl2ZSA9IG4gIT09IHZhbDtcclxuXHJcbiAgICAvLyBpZiB0aGUgbnVtYmVyIGhhcyBhIGZsb2F0aW5nIHBvaW50IHBhcnQsIHNlcGFyYXRlIGl0IGludG8gYWxwaGEgY2hhbm5lbFxyXG4gICAgbGV0IGEgPSAwO1xyXG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG4pKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBrID0gTWF0aC5mbG9vcihuKTtcclxuICAgICAgICAvLyBhID0gTWF0aC5yb3VuZCggKG4gLSBrKSAqIDEwMCk7XHJcbiAgICAgICAgYSA9IE1hdGgucm91bmQoIChuIC0gaykgKiAyNTUpO1xyXG4gICAgICAgIG4gPSBrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBudW1iZXIgd2FzIG5lZ2F0aXZlIHdlIHJldmVydCB0aGUgY29sb3IgYnkgbmVnYXRpbmcgYWxsIHRoZSBiaXRzLiBJbiBhbnkgY2FzZSxcclxuICAgIC8vIHdlIGNsZWFyIGV2ZXJ5dGhpbmcgYmV5b25kIHRoZSBmaXJzdCB0aHJlZSBieXRlcy5cclxuICAgIG4gPSBpc05lZ2F0aXZlID8gfigweEZGMDAwMDAwIHwgbikgOiAweDAwRkZGRkZGICYgbjtcclxuXHJcbiAgICBpZiAoYSA+IDApXHJcbiAgICAgICAgLy8gcmV0dXJuIGNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIG4sIGEpO1xyXG4gICAgICAgIC8vIHJldHVybiByZ2JUb1N0cmluZyggKG4gJiAweEZGMDAwMCkgPj4gMTYsIChuICYgMHgwMEZGMDApID4+IDgsIG4gJiAweDAwMDBGRiwgYSk7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgbi50b1N0cmluZygxNikucGFkU3RhcnQoIDYsIFwiMFwiKSArIGEudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCAyLCBcIjBcIik7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVkIGNvbG9yIHdpdGggdGhlIGdpdmVuIHZhbHVlLCByZXR1cm4gdGhlIGNvbG9yIG5hbWVcclxuICAgICAgICBsZXQgbmFtZSA9IHJldmVyc2VkQ29sb3JNYXAuZ2V0KCBuKTtcclxuICAgICAgICByZXR1cm4gbmFtZSA/IG5hbWUgOiBcIiNcIiArIG4udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCA2LCBcIjBcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzZXBhcmF0aW9uIHZhbHVlIHRvIGEgQ1NTIHN0cmluZy4gU2VwYXJhdGlvbiBhcmUgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXJcclxuICogd2l0aCB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBJbnRlZ2VyIG51bWJlciAtMjU1IHRvIDI1NS4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuIE5lZ2F0aXZlIG51bWJlcnNcclxuICogICAgIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgLTEuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgICAgRmxvYXRpbmcgbnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIHJvdW5kZWQgYW5kIHRyZWF0ZWQgYXMgaW50ZWdlciBudW1iZXJzLiBOZWdhdGl2ZVxyXG4gKiAgICAgbnVtYmVycyB3aWxsIGJlIGludmVydGVkLlxyXG4gKiBcclxuICogQHBhcmFtIGMgQ29sb3Igc2VwYXJhdGlvbiB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIHNlcGFyYXRpb25Ub1N0cmluZyggYzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChjICE9PSAwICYmIGMgPiAtMSAmJiBjIDwgMSlcclxuICAgIHtcclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAxICsgYztcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoIGMgKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2xhbXAgdGhlIHZhbHVlIGJldHdlZW4gLTI1NSBhbmQgMjU1XHJcbiAgICAgICAgYyA9IGMgPiAyNTUgPyAyNTUgOiBjIDwgLTI1NSA/IC0yNTUgOiBjO1xyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoYykpXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLnJvdW5kKGMpO1xyXG5cclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAyNTUgKyBjO1xyXG5cclxuICAgICAgICByZXR1cm4gYy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSB0byBhIENTUyBzdHJpbmcuIEFscGhhIGlzIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICovXHJcbmZ1bmN0aW9uIGFscGhhVG9TdHJpbmcoIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgYWxwaGEgaXMgbnVsbCBvciB1bmRlZmluZWQsIHNldCBpdCB0byAxXHJcbiAgICBpZiAoYSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIjFcIjtcclxuXHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIG9mIGFscGhhIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgYSA9IC1hO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBzZXQgaXQgdG8gMTsgb3RoZXJ3aXNlLCBcclxuICAgIHJldHVybiAoYSA+IDEwMCA/IDEgOiBhID4gMSA/IGEgLyAxMDAgOiBhKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIHJlZCwgZ3JlZW4sIGJsdWUgc2VwYXJhdGlvbiB2YWx1ZXMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIEVhY2ggY29sb3Igc2VwYXJhdGlvbiBjYW4gYmUgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXIgd2l0aFxyXG4gKiB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBJbnRlZ2VyIG51bWJlciAtMjU1IHRvIDI1NS4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuIE5lZ2F0aXZlIG51bWJlcnNcclxuICogICAgIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgLTEuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgICAgRmxvYXRpbmcgbnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIHJvdW5kZWQgYW5kIHRyZWF0ZWQgYXMgaW50ZWdlciBudW1iZXJzLiBOZWdhdGl2ZVxyXG4gKiAgICAgbnVtYmVycyB3aWxsIGJlIGludmVydGVkLlxyXG4gKiBcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIHIgUmVkIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBnIEdyZWVuIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBiIEJsdWUgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9TdHJpbmcoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7c2VwYXJhdGlvblRvU3RyaW5nKCByKX0sJHtzZXBhcmF0aW9uVG9TdHJpbmcoIGcpfSwke3NlcGFyYXRpb25Ub1N0cmluZyggYil9LCR7YWxwaGFUb1N0cmluZyggYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHJlcHJlc2VudGluZyBlaXRoZXIgc2F0dXJhdGlvbiBvciBsaWdodG5lc3MgaW4gdGhlIEhTTCBzY2hlbWUgdG8gcGVyY2VudGFnZTpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sb3JQZXJjZW50VG9TdHJpbmcoIG46IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAobiA8IDApXHJcbiAgICAgICAgbiA9IC1uO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBjbGFtcCBpdC4gXHJcbiAgICByZXR1cm4gKG4gPiAxMDAgPyAxMDAgOiBNYXRoLnJvdW5kKG4gPD0gMSA/IG4gKiAxMDAgOiBuKSkudG9TdHJpbmcoKSArIFwiJVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIGh1ZS1zYXR1cmF0aW9uLWxpZ2h0bmVzcyBjb21wb25lbnRzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBIdWUgY29tcG9uZW50IGlzIHRyZWF0ZWQgYXMgdGhlIENTUyBgPGFuZ2xlPmAgdHlwZS4gTnVtYmVycyBhcmUgY29uc2lkZXJlZCBkZWdyZWVzLlxyXG4gKiBcclxuICogVGhlIFNhdHVyYXRpb24gYW5kIExpZ2h0bmVzcyBjb21wb25lbnRzIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2VzOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlIGFyZSBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZCB0byAxMDAuXHJcbiAqXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSBoIEh1ZSBjb21wb25lbnQgYXMgYW4gYW5nbGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBzIFNhdHVyYXRpb24gY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGwgTGlnaHRuZXNzIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvU3RyaW5nKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgaHNsYSgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGgpfSwke2NvbG9yUGVyY2VudFRvU3RyaW5nKHMpfSwke2NvbG9yUGVyY2VudFRvU3RyaW5nKGwpfSwke2FscGhhVG9TdHJpbmcoIGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JXaXRoQWxwaGFUb1N0cmluZyggYzogbnVtYmVyIHwga2V5b2YgSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgdGhlIGFscGhhIGlzIDAsIHJldHVybiB0cmFuc3BhcmVudCBjb2xvclxyXG4gICAgaWYgKGEgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIFwiIzAwMDBcIjtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGNvbG9yIHRvIG51bWVyaWMgdmFsdWUgKGlmIGl0J3Mgbm90IGEgbnVtYmVyIHlldCkuIElmIHRoZSBjb2xvciB3YXMgZ2l2ZW4gYXMgYVxyXG4gICAgLy8gc3RyaW5nIHRoYXQgd2UgY2Fubm90IGZpbmQgaW4gdGhlIENvbG9ycyBvYmplY3QsIHJldHVybiBwdXJlIHdoaXRlLlxyXG4gICAgbGV0IG4gPSB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IENvbG9yc1tjXSA6IGM7XHJcbiAgICBpZiAobiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIkZGRlwiO1xyXG5cclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgb2YgYWxwaGEgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChhIDwgMClcclxuICAgICAgICBhID0gLWE7XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIDEgb3IgMTAwLCB0aGVuIHNldCBpdCB0byAwIGJlY2F1c2UgMCBpbiB0aGUgY29sb3JOdW1iZXJUb1N0cmluZyBtZWFucyBcIm5vIGFscGhhXCIuXHJcbiAgICBhID0gYSA9PT0gMSB8fCBhID49IDEwMCA/IDAgOiBhID4gMSA/IGEgLyAxMDAgOiBhO1xyXG5cclxuICAgIC8vIG1ha2UgdGhlIG5ldyBhbHBoYVxyXG4gICAgcmV0dXJuIGNvbG9yTnVtYmVyVG9TdHJpbmcoIG4gPiAwID8gbiArIGEgOiBuIC0gYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuIElmIGEgc3RyaW5nIHZhbHVlIGlzIGluIHRoZSBDb2xvcnMgb2JqZWN0IHdlXHJcbiAqIG5lZWQgdG8gZ2V0IGl0cyBudW1iZXIgYW5kIGNvbnZlcnQgaXQgdG8gdGhlIHJnYlthXSgpIGZ1bmN0aW9uIGJlY2F1c2UgaXQgbWlnaHQgYmUgYSBjdXN0b21cclxuICogY29sb3IgbmFtZSBhZGRlZCB2aWEgSU5hbWVkQ29sb3JzIG1vZHVsZSBhdWdtZW50YXRpb24uIEZvciBudW1lcmljIHZhbHVlcywgd2UgY2hlY2sgaWYgdGhpcyBpc1xyXG4gKiBvbmUgb2YgdGhlIHByZWRlZmluZWQgY29sb3JzIGFuZCByZXR1cm4gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzQ29sb3I+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IENvbG9yc1t2XSA/IGNvbG9yTnVtYmVyVG9TdHJpbmcoIENvbG9yc1t2XSkgOiB2LFxyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yTnVtYmVyVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyB0eXBlcyBmb3Igd29ya2luZyB3aXRoIENTUyBjb2xvcnMuXHJcbiAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZENvbG9ycyBpbnRlcmZhY2UgbGlzdHMgdGhlIG5hbWVzIG9mIHN0YW5kYXJkIFdlYiBjb2xvcnMuIEl0IGlzIG5lZWRlZCB0byBhbGxvdyBkZXZlbG9wZXJzXHJcbiAqIHRvIGFkZCBuZXcgbmFtZWQgY29sb3JzIHRocm91Z2ggbW9kdWxlIGF1Z21lbnRhdGlvbiB0ZWNobmlxdWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZENvbG9yc1xyXG57XHJcbiAgICByZWFkb25seSBibGFjazogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWx2ZXI6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmF5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYXJvb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWQ6ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwdXJwbGU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmdWNoc2lhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3c6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZ5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVlOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0ZWFsOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2U6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbGljZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbnRpcXVld2hpdGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhbWFyaW5lOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhenVyZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiZWlnZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiaXNxdWU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibGFuY2hlZGFsbW9uZDogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVldmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBicm93bjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBidXJseXdvb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjYWRldGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaGFydHJldXNlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaG9jb2xhdGU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JhbDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JuZmxvd2VyYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3Juc2lsazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjcmltc29uOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjeWFuOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrYmx1ZTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrY3lhbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JheTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JleTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJra2hha2k6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrbWFnZW50YTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb2xpdmVncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JhbmdlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JjaGlkOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrcmVkOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2FsbW9uOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2VhZ3JlZW46ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVibHVlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmF5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmV5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwcGluazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwc2t5Ymx1ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmF5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmV5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkb2RnZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmaXJlYnJpY2s6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmbG9yYWx3aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmb3Jlc3RncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnYWluc2Jvcm86ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnaG9zdHdoaXRlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkZW5yb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbnllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmV5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob25leWRldzogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob3RwaW5rOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpYW5yZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpZ286ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpdm9yeTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBraGFraTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcmJsdXNoOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXduZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsZW1vbmNoaWZmb246ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGNvcmFsOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGN5YW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdvbGRlbnJvZHllbGxvdzogICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZWVuOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHBpbms6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNhbG1vbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNlYWdyZWVuOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNreWJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JheTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JleTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHN0ZWVsYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW5lbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYWdlbnRhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1ibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1vcmNoaWQ6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1wdXJwbGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zZWFncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zcHJpbmdncmVlbjogICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW10dXJxdW9pc2U6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW12aW9sZXRyZWQ6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaWRuaWdodGJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaW50Y3JlYW06ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaXN0eXJvc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtb2NjYXNpbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZham93aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGRsYWNlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZWRyYWI6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmNoaWQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldmlvbGV0cmVkOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYXBheWF3aGlwOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZWFjaHB1ZmY6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZXJ1OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwaW5rOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwbHVtOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwb3dkZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3N5YnJvd246ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3lhbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWRkbGVicm93bjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWxtb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYW5keWJyb3duOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFncmVlbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFzaGVsbDogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWVubmE6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBza3libHVlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbm93OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzcHJpbmdncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzdGVlbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0YW46ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0aGlzdGxlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0b21hdG86ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0dXJxdW9pc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB2aW9sZXQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGVhdDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZXNtb2tlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3dncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWJlY2NhcHVycGxlOiAgICAgICAgICBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb2xvclByb3h5IHR5cGUgcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSBvZiBDU1MgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgZm9yXHJcbiAqIHNwZWNpZnlpbmcgY29sb3JzLiBUaGlzIGludGVyZmFjZSBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlOiByZ2IoKSwgYWxwaGEoKSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JQcm94eSA9IChwPzogXCJjb2xvclwiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3lzdGVtQ29sb3JzIHR5cGUgZGVmaW5lcyBrZXl3b3JkcyBmb3Igc3lzdGVtIGNvbG9ycyB0aGF0IGFyZSB1c2VkIGluIGZvcmNlZC1jb2xvciBtb2RlXHJcbiAqIChidXQgY2FuIGJlIGFsc28gdXNlZCBpbiB0aGUgcmVndWxhciBtb2RlKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbUNvbG9ycyA9IFwiQWN0aXZlVGV4dFwiIHwgXCJCdXR0b25GYWNlXCIgfCBcIkJ1dHRvblRleHRcIiB8IFwiQ2FudmFzXCIgfCBcIkNhbnZhc1RleHRcIiB8XHJcbiAgICBcIkZpZWxkXCIgfCBcIkZpZWxkVGV4dFwiIHwgXCJHcmF5VGV4dFwiIHwgXCJIaWdobGlnaHRcIiB8IFwiSGlnaGxpZ2h0VGV4dFwiIHwgXCJMaW5rVGV4dFwiIHwgXCJWaXNpdGVkVGV4dFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBrZXl3b3JkczogYW55IHN0cmluZyB0aGF0IGlzIGEgbmFtZSBvZiBhIHByb3BlcnR5IGluIHRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlLlxyXG4gKiAtIG51bWJlcjpcclxuICogICAtIG5lZ2F0aXZlIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgaW52ZXJ0ZWQgY29sb3JzLlxyXG4gKiAgIC0gaW50ZWdlciBwYXJ0IG9mIHRoZSBudW1iZXIgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgLSBldmVyeXRoaW5nIGVsc2UgaXNcclxuICogICAgIGlnbm9yZWQuXHJcbiAqICAgLSBmbG9hdGluZyBwb2ludCBwYXJ0IG9mIHRoZSBudW1iZXIgaXMgdHJlYXRlZCBhcyBwZXJjZW50cyBvZiBhbHBoYSBjaGFubmVsLiBJZiB0aGVyZSBpcyBub1xyXG4gKiAgICAgZmxvYXRpbmcgcGFydCwgYWxwaGEgaXMgMS5cclxuICogLSBmdW5jdGlvbnM6IHJnYigpLCBoc2woKSwgYWxwaGEoKSBhcyB3ZWxsIGFzIGFueSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIENvbG9yUHJveHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc0NvbG9yID0gXCJ0cmFuc3BhcmVudFwiIHwgXCJjdXJyZW50Y29sb3JcIiB8IGtleW9mIElOYW1lZENvbG9ycyB8IG51bWJlciB8IENvbG9yUHJveHkgfCBTeXN0ZW1Db2xvcnM7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBPYmplY3Qgd2hvc2UgcHJvcGVydHkgbmFtZXMgYXJlIG5hbWVzIG9mIHdlbGwta25vd24gY29sb3JzIGFuZCB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgaGV4YWRlY2ltYWxcclxuICogcmVwcmVzZW50YXJ0aW9uIG9mIHRoZSBSR0Igc2VwYXJhdGlvbnMgKHdpdGhvdXQgYW4gYWxwaGEgbWFzaykuXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbG9yczogSU5hbWVkQ29sb3JzID1cclxue1xyXG4gICAgYmxhY2s6ICAgICAgICAgICAgICAgICAgMHgwMDAwMDAsXHJcbiAgICBzaWx2ZXI6ICAgICAgICAgICAgICAgICAweGMwYzBjMCxcclxuICAgIGdyYXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgd2hpdGU6ICAgICAgICAgICAgICAgICAgMHhmZmZmZmYsXHJcbiAgICBtYXJvb246ICAgICAgICAgICAgICAgICAweDgwMDAwMCxcclxuICAgIHJlZDogICAgICAgICAgICAgICAgICAgIDB4ZmYwMDAwLFxyXG4gICAgcHVycGxlOiAgICAgICAgICAgICAgICAgMHg4MDAwODAsXHJcbiAgICBmdWNoc2lhOiAgICAgICAgICAgICAgICAweGZmMDBmZixcclxuICAgIGdyZWVuOiAgICAgICAgICAgICAgICAgIDB4MDA4MDAwLFxyXG4gICAgbGltZTogICAgICAgICAgICAgICAgICAgMHgwMGZmMDAsXHJcbiAgICBvbGl2ZTogICAgICAgICAgICAgICAgICAweDgwODAwMCxcclxuICAgIHllbGxvdzogICAgICAgICAgICAgICAgIDB4ZmZmZjAwLFxyXG4gICAgbmF2eTogICAgICAgICAgICAgICAgICAgMHgwMDAwODAsXHJcbiAgICBibHVlOiAgICAgICAgICAgICAgICAgICAweDAwMDBmZixcclxuICAgIHRlYWw6ICAgICAgICAgICAgICAgICAgIDB4MDA4MDgwLFxyXG4gICAgYXF1YTogICAgICAgICAgICAgICAgICAgMHgwMGZmZmYsXHJcbiAgICBvcmFuZ2U6ICAgICAgICAgICAgICAgICAweGZmYTUwMCxcclxuICAgIGFsaWNlYmx1ZTogICAgICAgICAgICAgIDB4ZjBmOGZmLFxyXG4gICAgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgMHhmYWViZDcsXHJcbiAgICBhcXVhbWFyaW5lOiAgICAgICAgICAgICAweDdmZmZkNCxcclxuICAgIGF6dXJlOiAgICAgICAgICAgICAgICAgIDB4ZjBmZmZmLFxyXG4gICAgYmVpZ2U6ICAgICAgICAgICAgICAgICAgMHhmNWY1ZGMsXHJcbiAgICBiaXNxdWU6ICAgICAgICAgICAgICAgICAweGZmZTRjNCxcclxuICAgIGJsYW5jaGVkYWxtb25kOiAgICAgICAgIDB4ZmZlYmNkLFxyXG4gICAgYmx1ZXZpb2xldDogICAgICAgICAgICAgMHg4YTJiZTIsXHJcbiAgICBicm93bjogICAgICAgICAgICAgICAgICAweGE1MmEyYSxcclxuICAgIGJ1cmx5d29vZDogICAgICAgICAgICAgIDB4ZGViODg3LFxyXG4gICAgY2FkZXRibHVlOiAgICAgICAgICAgICAgMHg1ZjllYTAsXHJcbiAgICBjaGFydHJldXNlOiAgICAgICAgICAgICAweDdmZmYwMCxcclxuICAgIGNob2NvbGF0ZTogICAgICAgICAgICAgIDB4ZDI2OTFlLFxyXG4gICAgY29yYWw6ICAgICAgICAgICAgICAgICAgMHhmZjdmNTAsXHJcbiAgICBjb3JuZmxvd2VyYmx1ZTogICAgICAgICAweDY0OTVlZCxcclxuICAgIGNvcm5zaWxrOiAgICAgICAgICAgICAgIDB4ZmZmOGRjLFxyXG4gICAgY3JpbXNvbjogICAgICAgICAgICAgICAgMHhkYzE0M2MsXHJcbiAgICBjeWFuOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIGRhcmtibHVlOiAgICAgICAgICAgICAgIDB4MDAwMDhiLFxyXG4gICAgZGFya2N5YW46ICAgICAgICAgICAgICAgMHgwMDhiOGIsXHJcbiAgICBkYXJrZ29sZGVucm9kOiAgICAgICAgICAweGI4ODYwYixcclxuICAgIGRhcmtncmF5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2dyZWVuOiAgICAgICAgICAgICAgMHgwMDY0MDAsXHJcbiAgICBkYXJrZ3JleTogICAgICAgICAgICAgICAweGE5YTlhOSxcclxuICAgIGRhcmtraGFraTogICAgICAgICAgICAgIDB4YmRiNzZiLFxyXG4gICAgZGFya21hZ2VudGE6ICAgICAgICAgICAgMHg4YjAwOGIsXHJcbiAgICBkYXJrb2xpdmVncmVlbjogICAgICAgICAweDU1NmIyZixcclxuICAgIGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIDB4ZmY4YzAwLFxyXG4gICAgZGFya29yY2hpZDogICAgICAgICAgICAgMHg5OTMyY2MsXHJcbiAgICBkYXJrcmVkOiAgICAgICAgICAgICAgICAweDhiMDAwMCxcclxuICAgIGRhcmtzYWxtb246ICAgICAgICAgICAgIDB4ZTk5NjdhLFxyXG4gICAgZGFya3NlYWdyZWVuOiAgICAgICAgICAgMHg4ZmJjOGYsXHJcbiAgICBkYXJrc2xhdGVibHVlOiAgICAgICAgICAweDQ4M2Q4YixcclxuICAgIGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIDB4MmY0ZjRmLFxyXG4gICAgZGFya3NsYXRlZ3JleTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrdHVycXVvaXNlOiAgICAgICAgICAweDAwY2VkMSxcclxuICAgIGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIDB4OTQwMGQzLFxyXG4gICAgZGVlcHBpbms6ICAgICAgICAgICAgICAgMHhmZjE0OTMsXHJcbiAgICBkZWVwc2t5Ymx1ZTogICAgICAgICAgICAweDAwYmZmZixcclxuICAgIGRpbWdyYXk6ICAgICAgICAgICAgICAgIDB4Njk2OTY5LFxyXG4gICAgZGltZ3JleTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkb2RnZXJibHVlOiAgICAgICAgICAgICAweDFlOTBmZixcclxuICAgIGZpcmVicmljazogICAgICAgICAgICAgIDB4YjIyMjIyLFxyXG4gICAgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgMHhmZmZhZjAsXHJcbiAgICBmb3Jlc3RncmVlbjogICAgICAgICAgICAweDIyOGIyMixcclxuICAgIGdhaW5zYm9ybzogICAgICAgICAgICAgIDB4ZGNkY2RjLFxyXG4gICAgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgMHhmOGY4ZmYsXHJcbiAgICBnb2xkOiAgICAgICAgICAgICAgICAgICAweGZmZDcwMCxcclxuICAgIGdvbGRlbnJvZDogICAgICAgICAgICAgIDB4ZGFhNTIwLFxyXG4gICAgZ3JlZW55ZWxsb3c6ICAgICAgICAgICAgMHhhZGZmMmYsXHJcbiAgICBncmV5OiAgICAgICAgICAgICAgICAgICAweDgwODA4MCxcclxuICAgIGhvbmV5ZGV3OiAgICAgICAgICAgICAgIDB4ZjBmZmYwLFxyXG4gICAgaG90cGluazogICAgICAgICAgICAgICAgMHhmZjY5YjQsXHJcbiAgICBpbmRpYW5yZWQ6ICAgICAgICAgICAgICAweGNkNWM1YyxcclxuICAgIGluZGlnbzogICAgICAgICAgICAgICAgIDB4NGIwMDgyLFxyXG4gICAgaXZvcnk6ICAgICAgICAgICAgICAgICAgMHhmZmZmZjAsXHJcbiAgICBraGFraTogICAgICAgICAgICAgICAgICAweGYwZTY4YyxcclxuICAgIGxhdmVuZGVyOiAgICAgICAgICAgICAgIDB4ZTZlNmZhLFxyXG4gICAgbGF2ZW5kZXJibHVzaDogICAgICAgICAgMHhmZmYwZjUsXHJcbiAgICBsYXduZ3JlZW46ICAgICAgICAgICAgICAweDdjZmMwMCxcclxuICAgIGxlbW9uY2hpZmZvbjogICAgICAgICAgIDB4ZmZmYWNkLFxyXG4gICAgbGlnaHRibHVlOiAgICAgICAgICAgICAgMHhhZGQ4ZTYsXHJcbiAgICBsaWdodGNvcmFsOiAgICAgICAgICAgICAweGYwODA4MCxcclxuICAgIGxpZ2h0Y3lhbjogICAgICAgICAgICAgIDB4ZTBmZmZmLFxyXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgMHhmYWZhZDIsXHJcbiAgICBsaWdodGdyYXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIDB4OTBlZTkwLFxyXG4gICAgbGlnaHRncmV5OiAgICAgICAgICAgICAgMHhkM2QzZDMsXHJcbiAgICBsaWdodHBpbms6ICAgICAgICAgICAgICAweGZmYjZjMSxcclxuICAgIGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIDB4ZmZhMDdhLFxyXG4gICAgbGlnaHRzZWFncmVlbjogICAgICAgICAgMHgyMGIyYWEsXHJcbiAgICBsaWdodHNreWJsdWU6ICAgICAgICAgICAweDg3Y2VmYSxcclxuICAgIGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIDB4Nzc4ODk5LFxyXG4gICAgbGlnaHRzbGF0ZWdyZXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHN0ZWVsYmx1ZTogICAgICAgICAweGIwYzRkZSxcclxuICAgIGxpZ2h0eWVsbG93OiAgICAgICAgICAgIDB4ZmZmZmUwLFxyXG4gICAgbGltZWdyZWVuOiAgICAgICAgICAgICAgMHgzMmNkMzIsXHJcbiAgICBsaW5lbjogICAgICAgICAgICAgICAgICAweGZhZjBlNixcclxuICAgIG1hZ2VudGE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgbWVkaXVtYXF1YW1hcmluZTogICAgICAgMHg2NmNkYWEsXHJcbiAgICBtZWRpdW1ibHVlOiAgICAgICAgICAgICAweDAwMDBjZCxcclxuICAgIG1lZGl1bW9yY2hpZDogICAgICAgICAgIDB4YmE1NWQzLFxyXG4gICAgbWVkaXVtcHVycGxlOiAgICAgICAgICAgMHg5MzcwZGIsXHJcbiAgICBtZWRpdW1zZWFncmVlbjogICAgICAgICAweDNjYjM3MSxcclxuICAgIG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIDB4N2I2OGVlLFxyXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgMHgwMGZhOWEsXHJcbiAgICBtZWRpdW10dXJxdW9pc2U6ICAgICAgICAweDQ4ZDFjYyxcclxuICAgIG1lZGl1bXZpb2xldHJlZDogICAgICAgIDB4YzcxNTg1LFxyXG4gICAgbWlkbmlnaHRibHVlOiAgICAgICAgICAgMHgxOTE5NzAsXHJcbiAgICBtaW50Y3JlYW06ICAgICAgICAgICAgICAweGY1ZmZmYSxcclxuICAgIG1pc3R5cm9zZTogICAgICAgICAgICAgIDB4ZmZlNGUxLFxyXG4gICAgbW9jY2FzaW46ICAgICAgICAgICAgICAgMHhmZmU0YjUsXHJcbiAgICBuYXZham93aGl0ZTogICAgICAgICAgICAweGZmZGVhZCxcclxuICAgIG9sZGxhY2U6ICAgICAgICAgICAgICAgIDB4ZmRmNWU2LFxyXG4gICAgb2xpdmVkcmFiOiAgICAgICAgICAgICAgMHg2YjhlMjMsXHJcbiAgICBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICAweGZmNDUwMCxcclxuICAgIG9yY2hpZDogICAgICAgICAgICAgICAgIDB4ZGE3MGQ2LFxyXG4gICAgcGFsZWdvbGRlbnJvZDogICAgICAgICAgMHhlZWU4YWEsXHJcbiAgICBwYWxlZ3JlZW46ICAgICAgICAgICAgICAweDk4ZmI5OCxcclxuICAgIHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIDB4YWZlZWVlLFxyXG4gICAgcGFsZXZpb2xldHJlZDogICAgICAgICAgMHhkYjcwOTMsXHJcbiAgICBwYXBheWF3aGlwOiAgICAgICAgICAgICAweGZmZWZkNSxcclxuICAgIHBlYWNocHVmZjogICAgICAgICAgICAgIDB4ZmZkYWI5LFxyXG4gICAgcGVydTogICAgICAgICAgICAgICAgICAgMHhjZDg1M2YsXHJcbiAgICBwaW5rOiAgICAgICAgICAgICAgICAgICAweGZmYzBjYixcclxuICAgIHBsdW06ICAgICAgICAgICAgICAgICAgIDB4ZGRhMGRkLFxyXG4gICAgcG93ZGVyYmx1ZTogICAgICAgICAgICAgMHhiMGUwZTYsXHJcbiAgICByb3N5YnJvd246ICAgICAgICAgICAgICAweGJjOGY4ZixcclxuICAgIHJveWFsYmx1ZTogICAgICAgICAgICAgIDB4NDE2OWUxLFxyXG4gICAgc2FkZGxlYnJvd246ICAgICAgICAgICAgMHg4YjQ1MTMsXHJcbiAgICBzYWxtb246ICAgICAgICAgICAgICAgICAweGZhODA3MixcclxuICAgIHNhbmR5YnJvd246ICAgICAgICAgICAgIDB4ZjRhNDYwLFxyXG4gICAgc2VhZ3JlZW46ICAgICAgICAgICAgICAgMHgyZThiNTcsXHJcbiAgICBzZWFzaGVsbDogICAgICAgICAgICAgICAweGZmZjVlZSxcclxuICAgIHNpZW5uYTogICAgICAgICAgICAgICAgIDB4YTA1MjJkLFxyXG4gICAgc2t5Ymx1ZTogICAgICAgICAgICAgICAgMHg4N2NlZWIsXHJcbiAgICBzbGF0ZWJsdWU6ICAgICAgICAgICAgICAweDZhNWFjZCxcclxuICAgIHNsYXRlZ3JheTogICAgICAgICAgICAgIDB4NzA4MDkwLFxyXG4gICAgc2xhdGVncmV5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbm93OiAgICAgICAgICAgICAgICAgICAweGZmZmFmYSxcclxuICAgIHNwcmluZ2dyZWVuOiAgICAgICAgICAgIDB4MDBmZjdmLFxyXG4gICAgc3RlZWxibHVlOiAgICAgICAgICAgICAgMHg0NjgyYjQsXHJcbiAgICB0YW46ICAgICAgICAgICAgICAgICAgICAweGQyYjQ4YyxcclxuICAgIHRoaXN0bGU6ICAgICAgICAgICAgICAgIDB4ZDhiZmQ4LFxyXG4gICAgdG9tYXRvOiAgICAgICAgICAgICAgICAgMHhmZjYzNDcsXHJcbiAgICB0dXJxdW9pc2U6ICAgICAgICAgICAgICAweDQwZTBkMCxcclxuICAgIHZpb2xldDogICAgICAgICAgICAgICAgIDB4ZWU4MmVlLFxyXG4gICAgd2hlYXQ6ICAgICAgICAgICAgICAgICAgMHhmNWRlYjMsXHJcbiAgICB3aGl0ZXNtb2tlOiAgICAgICAgICAgICAweGY1ZjVmNSxcclxuICAgIHllbGxvd2dyZWVuOiAgICAgICAgICAgIDB4OWFjZDMyLFxyXG4gICAgcmViZWNjYXB1cnBsZTogICAgICAgICAgMHg2NjMzOTksXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIEZvbnRGYWNlVHlwZXMgZnJvbSBcIi4vRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCAqIGFzIFV0aWxGdW5jcyBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge29iamVjdFRvU3RyaW5nfSBmcm9tIFwiLi9TdHlsZUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZm9udCBmYWNlIGRlZmluaXRpb24gb2JqZWN0IHRvIHRoZSBDU1Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udEZhY2VUb1N0cmluZyggZm9udGZhY2U6IEZvbnRGYWNlVHlwZXMuSUZvbnRGYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0cmV0Y2hUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHJldGNoX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHlsZV9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLkNzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHYpfWAsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLmFycmF5VG9TdHJpbmcoIHYsIFV0aWxGdW5jcy5Dc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBVdGlsRnVuY3MuQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IGZvbnRTaW5nbGVTcmNUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTaW5nbGVTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wibG9jYWxcIiwgdiA9PiBgbG9jYWwoJHt2fSlgXSxcclxuICAgICAgICBbXCJ1cmxcIiwgdiA9PiBgdXJsKCR7dn0pYF0sXHJcbiAgICAgICAgW1wiZm9ybWF0XCIsIHYgPT4gYGZvcm1hdCgke2ZvbnRGb3JtYXRUb1N0cmluZyh2KX0pYF1cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRGb3JtYXRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBVdGlsRnVuY3MudmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBgXFxcIiR7dn1cXFwiYCxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIFV0aWxGdW5jcyBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQgKiBhcyBNZWRpYVR5cGVzIGZyb20gXCIuL01lZGlhVHlwZXNcIlxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhc3BlY3RSYXRpb1RvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuQXNwZWN0UmF0aW9GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbFswXSArIFwiL1wiICsgdmFsWzFdO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkxlbmd0aEZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJweFwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5SZXNvbHV0aW9uRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcImRwaVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbnR5cGUgY29udmVydEZ1bmNUeXBlPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSAodmFsOiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhRmVhdHVyZUluZm8gcmVwcmVzZW50cyBpbmZvcm1hdGlvbiB0aGF0IHdlIGtlZXAgZm9yIHN0eWxlIHByb3BlcnRpZXNcclxuICovXHJcbnR5cGUgTWVkaWFGZWF0dXJlSW5mbzxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gY29udmVydEZ1bmNUeXBlPEs+IHwgYm9vbGVhbiB8XHJcbiAgICB7XHJcbiAgICAgICAgLyoqIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgZnJvbSB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbiAgICAgICAgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZTxLPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgZGVmaW5lZCwgaW5kaWNhdGVzIHRoZSB2YWx1ZSwgd2hpY2ggd2Ugd2lsbCBub3QgcHV0IGludG8gQ1NTIHN0cmluZy4gVGhpcyBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICogbWVkaWEgZmVhdHVyZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGhvdXQgdGhlIHZhbHVlLCBlLmcuIGNvbG9yIG9yIGNvbG9yLWluZGV4LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmVhdHVyZSBpcyBhIFwicmFuZ2VcIiBmZWF0dXJlOyB0aGF0IGlzLCBjYW4gYmUgdXNlZCBpbiBhblxyXG4gICAgICAgICAqIGV4cHJlc3Npb24gKGEgPD0gZmVhdHVyZSA8PSBiKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLk1lZGlhUXVlcnkpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSlcclxuICAgICAgICByZXR1cm4gcXVlcnkubWFwKCAoc2luZ2xlUXVlcnkpID0+IHNpbmdsZU1lZGlhUXVlcnlUb1N0cmluZyggc2luZ2xlUXVlcnkpKS5qb2luKFwiLCBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZU1lZGlhUXVlcnlUb1N0cmluZyggcXVlcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogTWVkaWFUeXBlcy5TaW5nbGVNZWRpYVF1ZXJ5KTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIXF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBtZWRpYVR5cGUgPSBxdWVyeS4kbWVkaWFUeXBlO1xyXG4gICAgbGV0IG9ubHkgPSBxdWVyeS4kb25seTtcclxuICAgIGxldCBuZWdhdGUgPSBxdWVyeS4kbmVnYXRlO1xyXG5cclxuICAgIGxldCBpdGVtczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChtZWRpYVR5cGUpXHJcbiAgICAgICAgaXRlbXMucHVzaCggKG9ubHkgPyBcIm9ubHkgXCIgOiBcIlwiKSArIG1lZGlhVHlwZSk7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gcXVlcnkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCIkXCIpKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHF1ZXJ5W3Byb3BOYW1lXSlcclxuICAgICAgICAgICAgaXRlbXMucHVzaCggYCgke21lZGlhRmVhdHVyZVRvU3RyaW5nKCBwcm9wTmFtZSwgcXVlcnlbcHJvcE5hbWVdKX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25lZ2F0ZSA/IFwibm90IFwiIDogXCJcIn0ke2l0ZW1zLmpvaW4oXCIgYW5kIFwiKX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgZmVhdHVyZSB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRmVhdHVyZVRvU3RyaW5nKCBmZWF0dXJlTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnksIHZhbHVlT25seT86IGJvb2xlYW4pOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghZmVhdHVyZU5hbWUgfHwgcHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IFxyXG4gICAgbGV0IGluZm86IE1lZGlhRmVhdHVyZUluZm8gPSBtZWRpYUZlYXR1cmVzW2ZlYXR1cmVOYW1lXTtcclxuXHJcbiAgICBsZXQgcmVhbEZlYXR1cmVOYW1lID0gVXRpbEZ1bmNzLmNhbWVsVG9EYXNoKCBmZWF0dXJlTmFtZSk7XHJcblxyXG4gICAgLy8gaWYgZGVmYXVsdFZhbHVlIGlzIGRlZmluZWQgYW5kIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBlcXVhbCB0byBpdCwgbm8gdmFsdWUgc2hvdWxkIGJlIHJldHVybmVkLlxyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5kZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcFZhbCA9PT0gZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBcIlwiIDogcmVhbEZlYXR1cmVOYW1lO1xyXG5cclxuICAgIGxldCBjb252ZXJ0ID0gdHlwZW9mIGluZm8gPT09IFwiZnVuY3Rpb25cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uY29udmVydCA6IHVuZGVmaW5lZDtcclxuICAgIGxldCBpc1JhbmdlID0gdHlwZW9mIGluZm8gPT09IFwiYm9vbGVhblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5pc1JhbmdlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGlzUmFuZ2UgJiYgIXZhbHVlT25seSAmJiBBcnJheS5pc0FycmF5KCBwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICBsZXQgczEgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzBdLCBjb252ZXJ0KTtcclxuICAgICAgICBsZXQgczIgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzFdLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gYCR7czF9IDw9ICR7cmVhbEZlYXR1cmVOYW1lfSA8PSAke3MyfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gcyA6IHJlYWxGZWF0dXJlTmFtZSArIFwiOlwiICsgcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsOiBhbnksIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBpZiAoY29udmVydClcclxuICAgICAgICByZXR1cm4gY29udmVydCggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcHJvcFZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHByb3BWYWwpKVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MuYXJyYXlUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgbWVkaWFGZWF0dXJlczogeyBbSyBpbiBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldF0/OiBNZWRpYUZlYXR1cmVJbmZvPEs+IH0gPVxyXG57XHJcbiAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIG1pbkFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWF4QXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBjb2xvcjogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGNvbG9ySW5kZXg6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBoZWlnaHQ6IHsgY29udmVydDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5IZWlnaHQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heEhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbW9ub2Nocm9tZTogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIHJlc29sdXRpb246IHsgY29udmVydDogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluUmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsXHJcbiAgICB3aWR0aDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbldpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7dmFsdWVUb1N0cmluZ30gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc2VsZWN0b3IuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB0d28tbnVtYmVyIHR1cGxlIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtIEFuK0IuXHJcbiAqL1xyXG5mdW5jdGlvbiBudGhUdXBsZVRvU3RyaW5nKCB2YWw6IFtudW1iZXIsIG51bWJlcj9dKTogc3RyaW5nXHJcbntcclxuXHRsZXQgdjAgPSB2YWx1ZVRvU3RyaW5nKCB2YWxbMF0pO1xyXG5cdGxldCB2MW4gPSB2YWxbMV07XHJcblxyXG5cdC8vIHRoZSAnIXYxbicgZXhwcmVzc2lvbiBjb3ZlcnMgbnVsbCwgdW5kZWZpbmVkIGFuZCAwLlxyXG5cdGxldCB2MSA9ICF2MW4gPyBcIlwiIDogdjFuID4gMCA/IFwiK1wiICsgdmFsdWVUb1N0cmluZyggdjFuKSA6IFwiLVwiICsgdmFsdWVUb1N0cmluZyggLXYxbik7XHJcblxyXG5cdHJldHVybiBgJHt2MH1uJHt2MX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JUb1N0cmluZyggdmFsOiBDc3NTZWxlY3Rvcik6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG5cdFx0YXJyYXlTZXBhcmF0b3I6IFwiXCJcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcGFyYW1ldGVyaXplZCBwc2V1ZG8gZW50aXR5LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBzZXVkb0VudGl0eVRvU3RyaW5nKCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZhbDogYW55KTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWVudGl0eU5hbWUpXHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0aWYgKGVudGl0eU5hbWUuc3RhcnRzV2l0aCggXCI6bnRoXCIpKVxyXG5cdFx0cmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwgeyBmcm9tQXJyYXk6IG50aFR1cGxlVG9TdHJpbmcgfSk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbHVlVG9TdHJpbmcodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBTdHlsZVR5cGVzIGZyb20gXCIuL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0V4dGVuZGVkU3R5bGVzZXR9IGZyb20gXCIuL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0V4dGVuZGVkLCBDc3NSYWRpdXMsIE9uZU9yTWFueSwgQ3NzTXVsdGlMZW5ndGgsIENzc011bHRpVGltZX0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYW1lbFRvRGFzaCwgZGFzaFRvQ2FtZWwsIHZhbHVlVG9TdHJpbmcsIGFycmF5VG9TdHJpbmcsIElWYWx1ZUNvbnZlcnRPcHRpb25zLFxyXG4gICAgcG9zaXRpb25Ub1N0cmluZywgbXVsdGlQb3NpdGlvblRvU3RyaW5nLCBDc3NMZW5ndGhNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzTnVtYmVyTWF0aCxcclxuICAgIENzc0FuZ2xlTWF0aCwgQ3NzRnJlcXVlbmN5TWF0aCwgQ3NzUGVyY2VudE1hdGgsIENzc1Jlc29sdXRpb25NYXRoLCB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG59IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7Y29sb3JUb1N0cmluZ30gZnJvbSBcIi4vQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+KTogc3RyaW5nXHJcbnsgcmV0dXJuIENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiIFwiKTsgfVxyXG5cclxuZnVuY3Rpb24gbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG57IHJldHVybiBDc3NUaW1lTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgXCIsXCIpOyB9XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBDU1MgcHJvcGVydHkgdHlwZXMgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY291bnRcIiwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICBcIm5hbWVcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxPbmVPck1hbnk8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+Pik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlciggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBzdGVwcygke3ZhbH0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXkoIHZhbDogYW55W10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsIGFzIFN0eWxlVHlwZXMuVGltaW5nRnVuY3Rpb25fU2luZ2xlKVxyXG4gICAgICAgIDogYXJyYXlUb1N0cmluZyggdmFsLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUsIFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBzdGVwcyBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2WzBdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgc3RlcHMoJHt2WzBdfSR7di5sZW5ndGggPT09IDIgPyBcIixcIiArIHZbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPCAwIHx8IHZbMF0gPiAxIHx8IHZbMl0gPCAwIHx8IHZbMl0gPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4gWW91IGhhdmUgJHt2WzBdfSBhbmQgJHt2WzJdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dlswXX0sJHt2WzFdfSwke3ZbMl19LCR7dlszXX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkJhY2tncm91bmRfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgXCJpbWFnZVwiLFxyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIHBvc2l0aW9uVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInNpemVcIiwgbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSwgXCIvXCJdLFxyXG4gICAgICAgIFwicmVwZWF0XCIsXHJcbiAgICAgICAgXCJhdHRhY2htZW50XCIsXHJcbiAgICAgICAgXCJvcmlnaW5cIixcclxuICAgICAgICBcImNsaXBcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5CYWNrZ3JvdW5kX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5CYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VUb1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkJvcmRlckltYWdlX09iamVjdCk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB3aWR0aCBpcyBzcGVjaWZpZWQsIGJ1dCBzbGljZSBpcyBub3QsIHdlIG5lZWQgdG8gc2V0IHNsaWNlIHRvIHRoZSBkZWZhdWx0IDEwMCUgdmFsdWU7XHJcbiAgICAvLyBpZiBvdXRzZXQgaXMgc3BlY2lmaWVkIGJ1dCB3aWR0aCBpcyBub3QuIHdlIG5lZWQgdG8gc2V0IHdpZHRoIHRvIHRoZSBkZWZhdWx0IDEgdmFsdWU7XHJcbiAgICBsZXQgdmFsQ29weTogU3R5bGVUeXBlcy5Cb3JkZXJJbWFnZV9PYmplY3QgPSBPYmplY3QuYXNzaWduKCB7fSwgdmFsKTtcclxuICAgIGlmICh2YWwuc2xpY2UgPT0gbnVsbCAmJiAodmFsLndpZHRoICE9IG51bGwgfHwgdmFsLm91dHNldCAhPSBudWxsKSlcclxuICAgICAgICB2YWxDb3B5LnNsaWNlID0gXCIxMDAlXCI7XHJcbiAgICBpZiAodmFsLndpZHRoID09IG51bGwgJiYgdmFsLm91dHNldCAhPSBudWxsKVxyXG4gICAgICAgIHZhbENvcHkud2lkdGggPSAxO1xyXG5cclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsQ29weSwgW1xyXG4gICAgICAgIFwic291cmNlXCIsXHJcbiAgICAgICAgW1wic2xpY2VcIiwgXCJib3JkZXJJbWFnZVNsaWNlXCJdLFxyXG4gICAgICAgIFtcIndpZHRoXCIsIG51bGwsIFwiL1wiXSxcclxuICAgICAgICBbXCJvdXRzZXRcIixudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgXCJyZXBlYXRcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzbGljZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlU2xpY2VUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IHZhbHVlVG9TdHJpbmcoIHYsIHtcclxuICAgICAgICAgICAgZnJvbUJvb2w6ICgpID0+IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHZhbDogU3R5bGVUeXBlcy5Cb3hTaGFkb3dfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wiaW5zZXRcIiwgdiA9PiB2ID8gXCJpbnNldFwiIDogXCJcIl0sXHJcbiAgICAgICAgW1wieFwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInlcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJibHVyXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wic3ByZWFkXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb3JuZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmFkaXVzPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5Cb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggdlswXSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3byBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzID0gYXJyYXlUb1N0cmluZyggdlswXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBzICs9IFwiIC8gXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIGFycmF5VG9TdHJpbmcoIHZbMV0sIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gc2luZ2xlIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUb1N0cmluZyggdiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzaWRlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVyVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5Cb3JkZXJfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHZbMF0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMF0pKVxyXG5cclxuICAgICAgICAgICAgaWYgKHZbMV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWx1ZVRvU3RyaW5nKHZbMV0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2WzJdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggY29sb3JUb1N0cmluZyh2WzJdKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnVmLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbnMgc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5zVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5Db2x1bW5zX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB2WzBdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMV0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY3Vyc29yIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY3Vyc29yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5DdXJzb3JfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyB0aGUgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LiBJZiBpdCBpcyBhbiBhcnJheSxcclxuICAgIC8vIGlmIHRoZSBmaXJzdCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIHRoZW4gd2UgbmVlZCB0byB1c2Ugc3BhY2UgYXMgYSBzZXBhcmF0b3IgKGJlY2F1c2VcclxuICAgIC8vIHRoaXMgaXMgYSBVUkwgd2l0aCBvcHRpb25hbCBudW1iZXJzIGZvciB0aGUgaG90IHNwb3QpOyBvdGhlcndpc2UsIHdlIHVzZSBjb21tYSBhcyBhXHJcbiAgICAvLyBzZXBhcmF0b3IgLSBiZWNhdXNlIHRoZXNlIGFyZSBtdWx0aXBsZSBjdXJzb3IgZGVmaW5pdGlvbnMuXHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHYubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcodik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2WzFdID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHYsIHsgYXJyYXlTZXBhcmF0b3I6IFwiIFwifSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5SXRlbUZ1bmM6IGN1cnNvclRvU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxleFRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuRmxleF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LmpvaW4oIFwiIFwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbMF0gKyBcIiBcIiArIHZbMV0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsyXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRfZnJvbU9iamVjdCggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJzdHlsZVwiLCBmb250U3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJ2YXJpYW50XCIsXHJcbiAgICAgICAgXCJ3ZWlnaHRcIixcclxuICAgICAgICBcInN0cmV0Y2hcIixcclxuICAgICAgICBbXCJzaXplXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wibGluZUhlaWdodFwiLCBudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgXCJmYW1pbHlcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5Gb250X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gXCJvYmxpcXVlIFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIHYpXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuVGV4dERlY29yYXRpb25fU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFwibGluZVwiLFxyXG4gICAgICAgIFwic3R5bGVcIixcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXSxcclxuICAgICAgICBbXCJ0aGlja25lc3NcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcInByb3BlcnR5XCIsIGNhbWVsVG9EYXNoXSxcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRyYW5zaXRpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuVHJhbnNpdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9mZnNldFRvU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuT2Zmc2V0X1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIFwib2Zmc2V0UG9zaXRpb25cIl0sXHJcbiAgICAgICAgW1wicGF0aFwiLCBcIm9mZnNldFBhdGhcIl0sXHJcbiAgICAgICAgW1wiZGlzdGFuY2VcIiwgXCJvZmZzZXREaXN0YW5jZVwiXSxcclxuICAgICAgICBbXCJyb3RhdGVcIiwgXCJvZmZzZXRSb3RhdGVcIl0sXHJcbiAgICAgICAgW1wiYW5jaG9yXCIsIFwib2Zmc2V0QW5jaG9yXCIsIFwiL1wiXSxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgY29udmVydHMgaXQgdG8gc3RyaW5nICovXHJcbmV4cG9ydCB0eXBlIFRvU3RyaW5nRnVuYyA9ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBhIENTUyBzdHJpbmcgdXNpbmcgdGhlIGluZm8gcGFyYW1ldGVyIHRvIGluZm9ybSBob3cgdGhlIG9iamVjdCdzXHJcbiAqIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLiBUaGUgaW5mbyBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgZWl0aGVyIHN0cmluZ3NcclxuICogb3IgdHdvLSBvciB0aHJlLWVsZW1lbnQgdHVwbGVzLiBUaGUgb25seSBzdHJpbmcgYW5kIHRoZSBmaXJzdCB0dXBsZSBlbGVtZW50IGNvcnJlc3BvbmRzIHRvIGFcclxuICogcHJvcGVydHkgZXhwZWN0ZWQgaW4gdGhlIHZhbHVlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWQuIEVhY2ggcHJvcGVydHkgaXMgY29udmVydGVkIGFjY29yZGluZ1xyXG4gKiB0byB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIElmIHRoZSBhcnJheSBpdGVtIGlzIGp1c3QgYSBzdHJpbmcsIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nXHJcbiAqICAgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIG51bGwgb3IgdW5kZWZpbmVkLCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZ1xyXG4gKiAgIHRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uLi5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgYSBzdHJpbmcgaXQgaXMgdHJlYXRlZCBhcyBhIG5hbWUgb2YgYSBsb25naGFuZCBzdHlsZSBwcm9wZXJ0eS4gVGhlXHJcbiAqICAgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmcgdGhlIHN0eWxlUHJvcFRvU3RyaW5nIGZ1bmN0aW9uIGZvciB0aGlzIGxvbmdoYW5kIHN0eWxlXHJcbiAqICAgcHJvcGVydHkuXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIGl0IGlzIHVzZWQgdG8gY29udmVydCB0aGUgdmFsdWUncyBwcm9wZXJ0eS5cclxuICogLSBJZiBhIHRoaXJkIGVsZW1lbnQgZXhpc3RzIGluIHRoZSB0dXBsZSBpdCBpcyB0cmVhdGVkIGFzIGEgcHJlZml4IHRvIGJlIHBsYWNlZCBiZWZvcmUgdGhlXHJcbiAqICAgY29udmVydGVkIHByb3BlcnR5IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIG9yZGVyIG9mIHRoZSBuYW1lcyBkZXRlcm1pbmVzIGluIHdoaWNoIG9yZGVyIHRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKCB2YWw6IGFueSxcclxuICAgIGluZm86IChzdHJpbmcgfCBbc3RyaW5nLCBudWxsIHwgc3RyaW5nIHwgVG9TdHJpbmdGdW5jLCBzdHJpbmc/XSApW10sXHJcbiAgICBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG5cclxuICAgIGxldCBidWY6IChzdHJpbmcpW10gPSBbXTtcclxuICAgIGluZm8uZm9yRWFjaCggbmFtZU9yVHVwbGUgPT5cclxuICAgIHtcclxuICAgICAgICAvLyBnZXQgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IGluIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlO1xyXG4gICAgICAgIC8vIGlmIHRoZSBwcm9wZXJ0aWVzIHZhbHVlIGlzIG5vdCBkZWZpbmVkLCBza2lwIGl0LlxyXG4gICAgICAgIGxldCBwcm9wTmFtZSA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IG5hbWVPclR1cGxlIDogbmFtZU9yVHVwbGVbMF07XHJcbiAgICAgICAgbGV0IHByb3BWYWwgPSB2YWxbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB3ZSBoYXZlIGEgcHJlZml4XHJcbiAgICAgICAgbGV0IHByZWZpeCA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IG5hbWVPclR1cGxlWzJdO1xyXG4gICAgICAgIGlmIChwcmVmaXgpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBwcmVmaXgpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydG9yID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogbmFtZU9yVHVwbGVbMV07XHJcbiAgICAgICAgaWYgKCFjb252ZXJ0b3IpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWx1ZVRvU3RyaW5nKCBwcm9wVmFsKSk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbnZlcnRvciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgYnVmLnB1c2goIHN0eWxlUHJvcFRvU3RyaW5nKCBjb252ZXJ0b3IsIHByb3BWYWwsIHRydWUpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb252ZXJ0b3IoIHByb3BWYWwpKTtcclxuICAgIH0pO1xyXG5cclxuXHRyZXR1cm4gYnVmLmpvaW4oc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBoYW5kbGluZyBTdHlsZXNldHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LiBBbGwgcmVndWxhciBwcm9wZXJ0aWVzIGFyZVxyXG4gKiByZXBsYWNlZC4gVGhlIFwiLS1cIiBwcm9wZXJ0eSBnZXRzIHNwZWNpYWwgdHJlYXRtZW50IGJlY2F1c2UgaXQgaXMgYW4gYXJyYXkuXHJcbiAqIEBwYXJhbSB0YXJnZXQgXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0IGlmIG5vdCBudWxsIG9yIGEgbmV3IHN0eWxlc2V0IG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc2V0cyggdGFyZ2V0OiBTdHlsZVR5cGVzLlN0eWxlc2V0IHwgdW5kZWZpbmVkIHwgbnVsbCxcclxuICAgIHNvdXJjZTogU3R5bGVUeXBlcy5TdHlsZXNldCk6IFN0eWxlVHlwZXMuU3R5bGVzZXRcclxue1xyXG4gICAgaWYgKCFzb3VyY2UpXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCA/IHRhcmdldCA6IHt9O1xyXG5cclxuICAgIC8vIGlmIHRhcmdldCBpcyBub3QgZGVmaW5lZCwgY3JlYXRlIGl0IGFzIGFuIGVtcHR5IG9iamVjdC4gVGhpcyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBhZnRlclxyXG4gICAgLy8gcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2UgYXJlIGNvcGllZCB0byBpdC5cclxuICAgIGlmICghdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGRlZmluZWQuIElmIG5vdCwgd2UgY2FuIGp1c3QgdXNlIHRoZSBPYmplY3QuYXNzaWduIGZ1bmN0aW9uLlxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBhbmQgaW1wb3J0YW50IHByb3BlcnRpZXNcclxuICAgIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGFyZ2V0LCBzb3VyY2UpO1xyXG5cclxuICAgIC8vIGNvcHkgYWxsIG90aGVyIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlXHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc291cmNlKVxyXG5cdHtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiIVwiIHx8IHByb3BOYW1lID09PSBcIi0tXCIpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XHJcblx0fVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBcIi0tXCIgcHJvcGVydHkgZnJvbSB0aGUgc291cmNlIHN0eWxlc2V0IHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0YXJnZXQ6IFN0eWxlVHlwZXMuU3R5bGVzZXQsXHJcbiAgICBzb3VyY2U6IFN0eWxlVHlwZXMuU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEN1c3RvbVByb3BzID0gdGFyZ2V0W1wiLS1cIl07XHJcbiAgICAgICAgdGFyZ2V0W1wiLS1cIl0gPSAhdGFyZ2V0Q3VzdG9tUHJvcHMgPyBzb3VyY2VDdXN0b21Qcm9wcy5zbGljZSgpIDogdGFyZ2V0Q3VzdG9tUHJvcHMuY29uY2F0KCBzb3VyY2VDdXN0b21Qcm9wcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZXNldCB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvU3RyaW5nKCBzdHlsZXNldDogU3R5bGVUeXBlcy5TdHlsZXNldCk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXN0eWxlc2V0KVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuXHJcblx0Zm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0LCAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpc0N1c3RvbTogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmIChpc0N1c3RvbSlcclxuICAgICAgICAgICAgcyArPSBgJHtuYW1lfToke3ZhbHVlfTtgO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBgJHtjYW1lbFRvRGFzaChuYW1lKX06JHt2YWx1ZX07YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBuYW1lIGFuZCBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICogQHBhcmFtIGN1c3RvbVZhbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXN0b21Qcm9wTmFtZUFuZFZhbHVlKCBjdXN0b21WYWw6IFN0eWxlVHlwZXMuQ3VzdG9tVmFyX1N0eWxlVHlwZSk6IFtzdHJpbmc/LHN0cmluZz9dXHJcbntcclxuICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICBsZXQgdmFyTmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBsZXQgdmFsdWU6IGFueTtcclxuICAgIGlmIChjdXN0b21WYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSAoY3VzdG9tVmFsWzBdIGFzIFZhclJ1bGUpLmNzc05hbWU7XHJcbiAgICAgICAgdGVtcGxhdGUgPSBjdXN0b21WYWxbMF0udGVtcGxhdGU7XHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMV1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gY3VzdG9tVmFsWzBdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2UgaWYgKCF2YXJOYW1lLnN0YXJ0c1dpdGgoXCItLVwiKSlcclxuICAgICAgICAgICAgdmFyTmFtZSA9IFwiLS1cIiArIHZhck5hbWU7XHJcblxyXG4gICAgICAgIHRlbXBsYXRlID0gY3VzdG9tVmFsWzFdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSB8fCAhdGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFt2YXJOYW1lLCBzdHlsZVByb3BUb1N0cmluZyggdGVtcGxhdGUsIHZhbHVlLCB0cnVlKV07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZy4gUHJvcGVydHkgbmFtZSBjbiBiZSBpbiBlaXRoZXJcclxuICogZGFzaCBvciBjYW1lbCBmb3JtLlxyXG4gKiBAcGFyYW0gc3R5bGUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXByb3BOYW1lKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgcHJvcGVydHlcclxuICAgIGxldCBpbmZvOiBhbnkgPSBTdHlsZVByb3BlcnR5SW5mb3NbZGFzaFRvQ2FtZWwocHJvcE5hbWUpXTtcclxuXHJcbiAgICAvLyBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdGhlIFwiIVwiIHByb3BlcnR5LCB0aGVuIHRoZSBhY3R1YWwgdmFsdWUgaXMgdGhlXHJcbiAgICAvLyB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGFuZCB3ZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnXHJcbiAgICBsZXQgdmFyVmFsdWUgPSBwcm9wVmFsO1xyXG4gICAgbGV0IGltcEZsYWcgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJvYmplY3RcIiAmJiBcIiFcIiBpbiBwcm9wVmFsKVxyXG4gICAge1xyXG4gICAgICAgIHZhclZhbHVlID0gcHJvcFZhbFtcIiFcIl07XHJcbiAgICAgICAgaW1wRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBsZXQgc3RyaW5nVmFsdWUgPSAhaW5mb1xyXG4gICAgICAgID8gdmFsdWVUb1N0cmluZyggdmFyVmFsdWUpXHJcbiAgICAgICAgOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICA/IHZhbHVlVG9TdHJpbmcoIHZhclZhbHVlLCBpbmZvIGFzIElWYWx1ZUNvbnZlcnRPcHRpb25zKVxyXG4gICAgICAgICAgICA6IChpbmZvIGFzIFRvU3RyaW5nRnVuYykoIHZhclZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXN0cmluZ1ZhbHVlICYmICF2YWx1ZU9ubHkpXHJcbiAgICAgICAgc3RyaW5nVmFsdWUgPSBcImluaXRpYWxcIjtcclxuXHJcbiAgICBpZiAoaW1wRmxhZylcclxuICAgICAgICBzdHJpbmdWYWx1ZSArPSBcIiAhaW1wb3J0YW50XCI7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlT25seSA/IHN0cmluZ1ZhbHVlIDogYCR7Y2FtZWxUb0Rhc2goIHByb3BOYW1lKX06JHtzdHJpbmdWYWx1ZX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3IgZWFjaCBwcm9wZXJ0eSAtIHJlZ3VsYXIgYW5kIGN1c3RvbSAtIGluIHRoZSBnaXZlbiBzdHlsZXNldCBpbnZva2VzIHRoZSBhcHByb3ByaWF0ZVxyXG4gKiBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIHByb3BlcnR5IG5hbWUgYW5kIHRoZSB2YWx1ZSBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBmb3JQcm9wIFxyXG4gKiBAcGFyYW0gZm9yQ3VzdG9tUHJvcCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQ6IFN0eWxlVHlwZXMuU3R5bGVzZXQsXHJcbiAgICBmb3JQcm9wOiAobmFtZTogc3RyaW5nLCB2YWw6IGFueSwgaXNDdXN0b206IGJvb2xlYW4pID0+IHZvaWQpXHJcbntcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcblx0XHRpZiAocHJvcE5hbWUgPT09IFwiLS1cIilcclxuXHRcdHtcclxuXHRcdFx0Ly8gc3BlY2lhbCBoYW5kbGluZyBvZiB0aGUgXCItLVwiIHByb3BlcnR5LCB3aGljaCBpcyBhbiBhcnJheSB3aGVyZSBlYWNoIGl0ZW0gaXNcclxuXHRcdFx0Ly8gYSB0d28taXRlbSBvciB0aHJlZS1pdGVtIGFycmF5XHJcblx0XHRcdGxldCBwcm9wVmFsID0gc3R5bGVzZXRbcHJvcE5hbWVdIGFzIFN0eWxlVHlwZXMuQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG5cdFx0XHRmb3IoIGxldCBjdXN0b21WYWwgb2YgcHJvcFZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VzdG9tVmFsKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBbdmFyTmFtZSwgdmFyVmFsdWVdID0gZ2V0Q3VzdG9tUHJvcE5hbWVBbmRWYWx1ZSggY3VzdG9tVmFsKTtcclxuXHRcdFx0XHRpZiAoIXZhck5hbWUpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRpZiAodmFyVmFsdWUgPT0gbnVsbClcclxuXHRcdFx0XHRcdHZhclZhbHVlID0gXCJcIjtcclxuXHJcblx0XHRcdFx0Zm9yUHJvcCggdmFyTmFtZSwgdmFyVmFsdWUsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBmb3JQcm9wKCBwcm9wTmFtZSwgc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lLCBzdHlsZXNldFtwcm9wTmFtZV0sIHRydWUpLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZWdpc3RyeSBvZiBDU1MgcHJvcGVydGllcyB0aGF0IHNwZWNpZmllcyBob3cgdGhlaXIgdmFsdWVzIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBIZWxwZXIgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IHZhbHVlcyBpbiBhbiBhcnJheSBzaG91bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG4vLyBXZSB1c2UgaXQgbWFueSB0aW1lcyBpbiB0aGUgc3R1Y3R1cmUgYmVsb3cuXHJcbmxldCBjb21tYUFycmF5U2VwYXJhdG9yID0geyBhcnJheVNlcGFyYXRvcjogXCIsXCIgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byB0aGUgU3R5bGVQcm9wZXJ0eUluZm8gb2JqZWN0cyBkZXNjcmliaW5nIGN1c3RvbSBhY3Rpb25zIG5lY2Vzc2FyeSB0b1xyXG4gKiBjb252ZXJ0IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgQ1NTLWNvbXBsaWFudCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBTdHlsZVByb3BlcnR5SW5mb3M6IHsgW0sgaW4gU3R5bGVUeXBlcy5WYXJUZW1wbGF0ZU5hbWVdPzogKFRvU3RyaW5nRnVuYyB8IElWYWx1ZUNvbnZlcnRPcHRpb25zKSB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvbk5hbWU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRDbGlwOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdiA9PiBtdWx0aVBvc2l0aW9uVG9TdHJpbmcoIHYsIFwiLFwiKSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9LFxyXG4gICAgYmFzZWxpbmVTaGlmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrRW5kOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21XaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQ29sb3I6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZToge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IGJvcmRlckltYWdlVG9TdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2VTbGljZTogYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lRW5kOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgYm9yZGVyVG9wOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlclRvcENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJUb3BXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyV2lkdGg6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBib3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJveFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIixcclxuICAgIH0sXHJcblxyXG4gICAgY2FyZXRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGNsaXA6ICB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGByZWN0KCR7bXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSh2KX1gXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5HYXA6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGU6IGJvcmRlclRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVN0eWxlOiB2YWx1ZVRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgY29sdW1uczogY29sdW1uc1RvU3RyaW5nLFxyXG4gICAgY29sdW1uV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGN1cnNvcjogY3Vyc29yVG9TdHJpbmcsXHJcblxyXG4gICAgZmlsbDogY29sb3JUb1N0cmluZyxcclxuICAgIGZpbGxPcGFjaXR5OiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZmxleDogZmxleFRvU3RyaW5nLFxyXG4gICAgZmxleEJhc2lzOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBmbG9vZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgZm9udDoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IGZvbnRfZnJvbU9iamVjdFxyXG4gICAgfSxcclxuICAgIGZvbnRTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBmb250U3R5bGU6IGZvbnRTdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGdhcDogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGdyaWRDb2x1bW5HYXA6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGdyaWRHYXA6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBncmlkUm93R2FwOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgaGVpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgaW5saW5lU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGxlZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGxldHRlclNwYWNpbmc6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGxpZ2h0aW5nQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcblxyXG4gICAgbWFyZ2luOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgbWFyZ2luQmxvY2tFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbkJsb2NrU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbkJvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5JbmxpbmVTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpblRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4QmxvY2tTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhIZWlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heElubGluZVNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhab29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluQmxvY2tTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5IZWlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pbklubGluZVNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHRtaW5XaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluWm9vbTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBvYmplY3RQb3NpdGlvbjogcG9zaXRpb25Ub1N0cmluZyxcclxuICAgIG9mZnNldDogb2Zmc2V0VG9TdHJpbmcsXHJcbiAgICBvZmZzZXRBbmNob3I6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBvZmZzZXREaXN0YW5jZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgb2Zmc2V0UG9zaXRpb246IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBvZmZzZXRSb3RhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IGJvcmRlclRvU3RyaW5nLFxyXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgb3V0bGluZU9mZnNldDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgb3V0bGluZVN0eWxlOiB2YWx1ZVRvU3RyaW5nLFxyXG5cclxuICAgIHBhZGRpbmc6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBwYWRkaW5nQmxvY2tFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdCbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdMZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdUb3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBlcnNwZWN0aXZlOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICBxdW90ZXM6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IGBcIiR7dn1cImBcclxuICAgIH0sXHJcblxyXG4gICAgcmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIHNjcm9sbE1hcmdpbjogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpbkJvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpblRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZzogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9jazogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja0VuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdCb3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmU6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNoYXBlTWFyZ2luOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzdG9wQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcblxyXG4gICAgdGFiU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0OiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgZGlnaXRzICR7dn1gXHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb246IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRleHRFbXBoYXNpczoge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIHRleHRJbmRlbnQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0U2l6ZUFkanVzdDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbkRlbGF5OiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB3aWxsQ2hhbmdlOiB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogY2FtZWxUb0Rhc2hcclxuICAgIH0sXHJcbiAgICB3b3JkU3BhY2luZzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIHpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgLy8gc3BlY2lhbCBwcm9wZXJ0aWVzIGZvciBJVmFyUnVsZSB0eXBlc1xyXG4gICAgXCJDc3NMZW5ndGhcIjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NBbmdsZVwiOiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzVGltZVwiOiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NSZXNvbHV0aW9uXCI6IENzc1Jlc29sdXRpb25NYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyZXF1ZW5jeVwiOiBDc3NGcmVxdWVuY3lNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1BlcmNlbnRcIjogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUG9zaXRpb25cIjogcG9zaXRpb25Ub1N0cmluZyxcclxuICAgIFwiQ3NzQ29sb3JcIjogY29sb3JUb1N0cmluZyxcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzdXBwb3J0cyBxdWVyeS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN1cHBvcnRzIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnk6IFN0eWxlVHlwZXMuU3VwcG9ydHNRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHF1ZXJ5KSlcclxuICAgICAgICByZXR1cm4gcXVlcnkubWFwKCAoc2luZ2xlUXVlcnkpID0+IHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggc2luZ2xlUXVlcnkpKS5qb2luKFwiIG9yIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTdHlsZVR5cGVzLlNpbmdsZVN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcblxyXG4gICAgbGV0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKCBxdWVyeSkuZmlsdGVyKCAocHJvcE5hbWUpID0+IHByb3BOYW1lICE9IFwiJG5lZ2F0ZVwiKTtcclxuICAgIGlmIChwcm9wTmFtZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBub3QgPSBxdWVyeS4kbmVnYXRlID8gXCJub3RcIiA6IFwiXCI7XHJcbiAgICByZXR1cm4gIGAke25vdH0gKCR7cHJvcE5hbWVzLm1hcCggKHByb3BOYW1lKSA9PlxyXG4gICAgICAgIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSBhcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0LCBxdWVyeVtwcm9wTmFtZV0pKS5qb2luKCBcIikgYW5kIChcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBOdW1iZXJQcm94eSwgQ3NzTnVtYmVyLCBDc3NNdWx0aU51bWJlciwgSU51bWJlck1hdGgsXHJcbiAgICBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbiwgTnVtYmVyQmFzZSwgTXVsdGlOdW1iZXJCYXNlLFxyXG4gICAgQ3NzTGVuZ3RoLCBDc3NNdWx0aUxlbmd0aCwgQ3NzQW5nbGUsIENzc011bHRpQW5nbGUsIENzc1RpbWUsIENzc011bHRpVGltZSxcclxuICAgIENzc1Jlc29sdXRpb24sIENzc011bHRpUmVzb2x1dGlvbiwgQ3NzRnJlcXVlbmN5LCBDc3NNdWx0aUZyZXF1ZW5jeSxcclxuICAgIENzc1BlcmNlbnQsIENzc011bHRpUGVyY2VudCwgSUNzc0xlbmd0aE1hdGgsXHJcbiAgICBJQ3NzQW5nbGVNYXRoLCBJQ3NzUGVyY2VudE1hdGgsIElDc3NGcmVxdWVuY3lNYXRoLCBJQ3NzUmVzb2x1dGlvbk1hdGgsIElDc3NUaW1lTWF0aCxcclxuICAgIE51bWJlclR5cGUsIExlbmd0aFR5cGUsIFBlcmNlbnRUeXBlLCBBbmdsZVR5cGUsIFRpbWVUeXBlLCBSZXNvbHV0aW9uVHlwZSwgRnJlcXVlbmN5VHlwZVxyXG59IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpY3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRhc2hlLWNhc2UgdG8gY2FtZWxDYXNlLCBlLmcuIGZvbnQtc2l6ZSB0byBmb250U2l6ZS5cclxuICogQHBhcmFtIGRhc2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UsIGUuZy4gZm9udFNpemUgdG8gZm9udC1zaXplLlxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhbHVlQ29udmVydE9wdGlvbnMgaW50ZXJmYWNlIGRlZmluZXMgb3B0aW9uYWwgZnVuY3Rpb25zIHRoYXQgY29udmVydHZhbHVlcyBvZiBkaWZmZXJudFxyXG4gKiB0eXBlcyB0byBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVDb252ZXJ0T3B0aW9uc1xyXG57XHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgIGZyb21OdWxsPzogKCB2YWw6IG51bGwgfCB1bmRlZmluZWQpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBzdHJpbmcuIFRoaXMgYWxsb3dzIHRyYW5zZm9ybWluZyBvbmUgc3RyaW5nIHRvIGFub3RoZXIuXHJcbiAgICBmcm9tU3RyaW5nPzogKCB2YWw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgIGZyb21Cb29sPzogKHZhbDogYm9vbGVhbikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIG51bWJlclxyXG4gICAgZnJvbU51bWJlcj86ICh2YWw6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgZnJvbUFycmF5PzogKHZhbDogYW55W10pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gb2JqZWN0XHJcbiAgICBmcm9tT2JqZWN0PzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHR5cGUtc3BlY2lmaWMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWRcclxuICAgIGZyb21Bbnk/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgdG8gY29udmVydCBhcnJheSBpdGVtcyBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5SXRlbUZ1bmM/OiAodjogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gU2VwYXJhdG9yIGZvciBhcnJheSBpdGVtcyAtIHVzZWQgb25seSBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5U2VwYXJhdG9yPzogc3RyaW5nO1xyXG5cclxuICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZXNlIGFyZSBhcmd1bWVudHMgdG8gcGFzcyB3aGVuIGludm9raW5nIGl0XHJcbiAgICBmdW5jQXJncz86IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIG9mIGFuIGFyYml0cmFyeSB0eXBlIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhlIG9wdGlvbmFsIG9wdGlvbnMgcGFyYW1ldGVyXHJcbiAqIGNhbiBkZWZpbmUgaG93IHNwZWNpZmljIHR5cGVzIGFyZSBjb252ZXJ0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVUb1N0cmluZyggdmFsOiBhbnksIG9wdGlvbnM/OiBJVmFsdWVDb252ZXJ0T3B0aW9ucyk6IHN0cmluZ1xyXG57XHJcbiAgIGlmICghb3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICAvLyBzdGFuZGFyZCBwcm9jZXNzaW5nOlxyXG4gICAgICAgIC8vIC0gbnVsbC91bmRlZmluZWQgYmVjb21lIGVtcHR5IHN0cmluZy5cclxuICAgICAgICAvLyAtIGNhbGwgdmFsdWVUb1N0cmluZyAocHJveHkgb2JqZWN0cykgaWYgZXhpc3QuXHJcbiAgICAgICAgLy8gLSBmdW5jdGlvbjogY2FsbCB3aXRob3V0IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgLy8gLSBldmVyeXRoaW5nIGVsc2U6IGNhbGwgdG9TdHJpbmcoKS5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlUb1N0cmluZyggdmFsKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvY2Vzc2luZyB3aXRoIG9wdGlvbnMuIEZvciBhbGwgdHlwZXMgZXhjZXB0IG51bGwgYW5kIHN0cmluZywgaWYgdGhlIHR5cGUtc3BlY2lmaWNcclxuICAgICAgICAvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgY2FsbCBmcm9tQW55IGlmIGRlZmluZWQuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVsbCA/IG9wdGlvbnMuZnJvbU51bGwoIHZhbCkgOiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21TdHJpbmcgPyBvcHRpb25zLmZyb21TdHJpbmcoIHZhbCkgOiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bWJlciA/IG9wdGlvbnMuZnJvbU51bWJlciggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIG9wdGlvbnMuZnVuY0FyZ3MgPyB2YWwoIC4uLm9wdGlvbnMuZnVuY0FyZ3MpIDogdmFsKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZyb21BcnJheSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BcnJheSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gb3B0aW9ucy5hcnJheVNlcGFyYXRvciAhPSBudWxsID8gb3B0aW9ucy5hcnJheVNlcGFyYXRvciA6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5VG9TdHJpbmcoIHZhbCwgb3B0aW9ucy5hcnJheUl0ZW1GdW5jIHx8IG9wdGlvbnMuZnJvbUFueSB8fCB1bmRlZmluZWQsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21PYmplY3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tT2JqZWN0KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQm9vbCA/IG9wdGlvbnMuZnJvbUJvb2woIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIGFycmF5IG9mIHRoZSBnaXZlbiB0eXBldG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEVsZW1lbnRzIG9mIHRoZSBhcnJheSBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9TdHJpbmcoIHZhbDogYW55W10sIGZ1bmM/OiAodikgPT4gc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAhdmFsIHx8IHZhbC5sZW5ndGggPT09IDBcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IHZhbC5maWx0ZXIoIHggPT4geCAhPSBudWxsKS5tYXAoIHkgPT4gZnVuYyA/IGZ1bmMoeSkgOiB2YWx1ZVRvU3RyaW5nKCB5KSkuam9pbiggc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nIGlzIGEgdGFnIGZ1bmN0aW9uIGhlbHBlciB0aGF0IGNvbnZlcnRzIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aFxyXG4gKiBwYXJhbWV0ZXJzIHRvIGEgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBjb252ZXJ0IHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBwYXJhbXM6IGFueVtdLFxyXG4gICAgY29udmVydEZ1bmM/OiAoIHY6IGFueSkgPT4gc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIC8vIG51bWJlciBvZiBwYXJhbWV0ZXJzIGlzIGFsd2F5cyAxIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHN0cmluZyBwYXJ0c1xyXG4gICAgbGV0IHBhcmFtc0xlbiA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBpZiAocGFyYW1zTGVuID09PSAwKVxyXG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHBhcmFtc0xlbjsgaSsrKVxyXG4gICAgICAgIHMgKz0gcGFydHNbaV0gKyAoY29udmVydEZ1bmMgPyBjb252ZXJ0RnVuYyggcGFyYW1zW2ldKSA6IHZhbHVlVG9TdHJpbmcoIHBhcmFtc1tpXSkpO1xyXG5cclxuICAgIC8vIGFkZCB0aGUgbGFzdCBwYXJ0XHJcbiAgICByZXR1cm4gcyArIHBhcnRzW3BhcmFtc0xlbl07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWJlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIG9mIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnQgYSBudW1iZXIgdG8gYSBzdHJpbmcgKi9cclxudHlwZSBDb252ZXJ0TnVtYmVyRnVuY1R5cGUgPSAobjogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHNpbmdsZSBudW1lcmljIHZhbHVlIHRvIGEgQ1NTIHN0cmluZyBvcHRpb25hbGx5IGFwcGVuZGluZyB1bml0cyB0aGF0IGNhbiBiZSBkaWZmZXJlbnRcclxuICogZm9yIGludGVnZXIgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMuXHJcbiAqIEBwYXJhbSBuIE51bWJlciB0byBjb252ZXJ0IHRvIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICogQHBhcmFtIGludFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgaW50ZWdlci5cclxuICogQHBhcmFtIGZsb2F0VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBmbG9hdGluZyBwb2ludC5cclxuICovXHJcbmZ1bmN0aW9uIG51bWJlclRvU3RyaW5nKCBuOiBudW1iZXIsIGludFVuaXQ6IHN0cmluZyA9IFwiXCIsIGZsb2F0VWludDogc3RyaW5nID0gXCJcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgaW50VW5pdCA6IG4gKyBmbG9hdFVpbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aW1lIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE51bWJlciBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGUuXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgbnVtYmVyIHRvIGEgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc3R5bGVUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PixcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHsgZnJvbU51bWJlcjogY29udmVydEZ1bmN9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBDc3NOdW1iZXIgb3IgYXJyYXkgb2YgQ3NzTnVtYmVyIG9iamVjdHMgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlLSBvciBtdWx0aS1udW1iZXIgc3R5bGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgbnVtYmVyIHRvIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc2VwYXJhdG9yIFN0cmluZyB0byB1c2UgdG8gc2VwYXJhdGUgbXVsdGlwbGUgdmFsdWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gbXVsdGlTdHlsZVRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29udmVydEZ1bmMsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogdiA9PiBzdHlsZVRvU3RyaW5nKCB2LCBjb252ZXJ0RnVuYyksXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYXRoRnVuYyBmdW5jdGlvbiByZXR1cm5zIG9uZSBvZiB0aGUgbWF0aGVtYXRpYyBDU1MgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBvciBtb3JlXHJcbiAqIHBhcmFtZXRlcnMgd2hvc2UgdHlwZSBpcyBkZXJpdmVkIGZyb20gTnVtYmVyQmFzZTxUPi5cclxuICovXHJcbmZ1bmN0aW9uIG1hdGhGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBuYW1lOiBzdHJpbmcsIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgJHtuYW1lfSgke211bHRpU3R5bGVUb1N0cmluZyggcGFyYW1zLCBjb252ZXJ0RnVuYywgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgY2FsY0Z1bmMgZnVuY3Rpb24gcmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjYWxjKCkgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY0Z1bmM8VCBleHRlbmRzIHN0cmluZz4oIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBjYWxjKCR7dGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcywgKHY6IGFueSkgPT4gc3R5bGVUb1N0cmluZyggdiwgY29udmVydEZ1bmMpKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHVuaXRGdW5jIGZ1bmN0aW9uIHJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBudW1iZXIgd2l0aCB0aGUgZ2l2ZW4gdW5pdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiB1bml0RnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggbjogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gKyB1bml0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtbWJlck1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIEphdmFTY3JpcHQgdHlwZSB0aGV5XHJcbiAqIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBieSBjYWxsaW5nIGEgZnVuY3Rpb24gc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICovXHJcbmNsYXNzIE51bWJlck1hdGg8VCBleHRlbmRzIHN0cmluZz4gaW1wbGVtZW50cyBJTnVtYmVyTWF0aDxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggcHJvdGVjdGVkIGNvbnZlcnRGdW5jOiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG51bWJlclRvU3RyaW5nID0gKG46IG51bWJlcik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRGdW5jKCBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpU3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMsIHNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWluXCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWF4XCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYW1wKCBtaW46IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBwcmVmOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgbWF4OiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcImNsYW1wXCIsIFttaW4sIHByZWYsIG1heF0sIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYWxjRnVuYyggZm9ybXVsYVBhcnRzLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZXJjZW50KCBuOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bml0KCBuOiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHVuaXRGdW5jPFQ+KCBuLCB1bml0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOdW1iZXJNYXRoQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBcInN0YXRpY1wiIHNpZGUgb2YgY2xhc3NlcyBkZXJpdmVkIGZyb20gdGhlXHJcbiAqIE51bWJlck1hdGggY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJNYXRoQ2xhc3M8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgICBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nO1xyXG5cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICBuZXcoKTogSU51bWJlck1hdGg8VD47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVbml0bGVzcyBudW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc051bWJlck1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxudW1iZXI+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NOdW1iZXJNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxOdW1iZXJUeXBlPlxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbi50b1N0cmluZygpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc051bWJlcj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlOdW1iZXI+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1BlcmNlbnRNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cGVyY2VudD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1BlcmNlbnRNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxQZXJjZW50VHlwZT4gaW1wbGVtZW50cyBJQ3NzUGVyY2VudE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gKE51bWJlci5pc0ludGVnZXIobikgPyBuIDogTWF0aC5yb3VuZChuICogMTAwKSkgKyBcIiVcIjsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlQZXJjZW50Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIHRvIHN0cmluZyB1c2luZyB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIGlmIHRoZSBudW1iZXIgaXMgYmV0d2VlbiAtMSBhbmQgMSAobm9uIGluY2x1c2l2ZSksIG11bHRpcGxpZXMgdGhlIG51bWJlciBhbmQgYXBwZW5kcyBcIiVcIlxyXG4gKiAtIG90aGVyd2lzZSwgY29udmVydHMgdGhlIG51bWJlciB0byBzdHJpbmcgd2l0aG91dCBhcHBlbmRpbmcgYW55IHV0aW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nKCBuOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPj0gMSB8fCBuIDw9IC0xID8gbi50b1N0cmluZygpIDogTWF0aC5yb3VuZChuICogMTAwKSArIFwiJVwiO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIExlbmd0aFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTGVuZ3RoTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGxlbmd0aD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0xlbmd0aE1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPExlbmd0aFR5cGU+IGltcGxlbWVudHMgSUNzc0xlbmd0aE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcInB4XCIsIFwiZW1cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IE51bWJlclByb3h5PExlbmd0aFR5cGU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pbm1heFwiLCBbbWluLCBtYXhdLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiUVwiKTsgfVxyXG4gICAgcHVibGljIGNoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJjaFwiKTsgfVxyXG4gICAgcHVibGljIGNtKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJjbVwiKTsgfVxyXG4gICAgcHVibGljIGVtKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJlbVwiKTsgfVxyXG4gICAgcHVibGljIGV4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJleFwiKTsgfVxyXG4gICAgcHVibGljIGljKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJpY1wiKTsgfVxyXG4gICAgcHVibGljIGluKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJpblwiKTsgfVxyXG4gICAgcHVibGljIGxoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJsaFwiKTsgfVxyXG4gICAgcHVibGljIG1tKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJtbVwiKTsgfVxyXG4gICAgcHVibGljIHBjKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJwY1wiKTsgfVxyXG4gICAgcHVibGljIHB0KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJwdFwiKTsgfVxyXG4gICAgcHVibGljIHB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJweFwiKTsgfVxyXG4gICAgcHVibGljIHZiKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ2YlwiKTsgfVxyXG4gICAgcHVibGljIHZoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ2aFwiKTsgfVxyXG4gICAgcHVibGljIHZpKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ2aVwiKTsgfVxyXG4gICAgcHVibGljIHZ3KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ2d1wiKTsgfVxyXG4gICAgcHVibGljIHJlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicmVtXCIpOyB9XHJcbiAgICBwdWJsaWMgcmxoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJybGhcIik7IH1cclxuICAgIHB1YmxpYyB2bWF4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ2bWF4XCIpOyB9XHJcbiAgICBwdWJsaWMgdm1pbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidm1pblwiKTsgfVxyXG4gICAgcHVibGljIGZyKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJmclwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBBbmdsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzQW5nbGVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8YW5nbGU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NBbmdsZU1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPEFuZ2xlVHlwZT4gaW1wbGVtZW50cyBJQ3NzQW5nbGVNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJkZWdcIiwgXCJ0dXJuXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0FuZ2xlPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpQW5nbGU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBkZWcoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRlZ1wiKTsgfVxyXG4gICAgcHVibGljIHJhZCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicmFkXCIpOyB9XHJcbiAgICBwdWJsaWMgZ3JhZCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZ3JhZFwiKTsgfVxyXG4gICAgcHVibGljIHR1cm4oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInR1cm5cIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGltZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzVGltZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDx0aW1lPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzVGltZU1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFRpbWVUeXBlPiBpbXBsZW1lbnRzIElDc3NUaW1lTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwibXNcIiwgXCJzXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1RpbWU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVRpbWU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzVGltZU1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgbXMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcIm1zXCIpOyB9XHJcbiAgICBwdWJsaWMgcyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwic1wiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXNvbHV0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NSZXNvbHV0aW9uTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHJlc29sdXRpb24+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIE51bWJlck1hdGg8UmVzb2x1dGlvblR5cGU+IGltcGxlbWVudHMgSUNzc1Jlc29sdXRpb25NYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJkcGlcIiwgXCJ4XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1Jlc29sdXRpb24+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVJlc29sdXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQSSAqL1xyXG4gICAgcHVibGljIGRwaSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZHBpXCIpOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUENNICovXHJcbiAgICBwdWJsaWMgZHBjbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZHBjbVwiKTsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBQWCAqL1xyXG4gICAgcHVibGljIGRwcHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRwcHhcIik7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuICAgIHB1YmxpYyB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ4XCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZyZXF1ZW5jeVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzRnJlcXVlbmN5TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGZyZXF1ZW5jZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPEZyZXF1ZW5jeVR5cGU+IGltcGxlbWVudHMgSUNzc0ZyZXF1ZW5jeU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIkh6XCIsIFwia0h6XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0ZyZXF1ZW5jeT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmVxdWVuY3k+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIGh6KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJIelwiKTsgfVxyXG4gICAgcHVibGljIGtoeiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwia0h6XCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBwb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvblRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bGw6IHYgPT4gXCJcIixcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2LCBcIiBcIilcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlQb3NpdGlvblRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE11bHRpQ3NzUG9zaXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogcG9zaXRpb25Ub1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGJhc2ljIHR5cGVzIGFuZCBmdW5jdGlvbnMgdXNlZCB0byBkZWZpbmUgQ1NTIHByb3BlcnR5IHR5cGVzLlxyXG4gKiBcclxuICogQWxsIENTUyBwcm9wZXJ0aWVzIHNob3VsZCBhY2NlcHQgc3RyaW5nIGFzIHRoZSB0eXBlIG9mIHRoZWlyIHZhbHVlIGV2ZW4gaWYgbm9ybWFsbHlcclxuICogdGhleSBhY2NlcHQgb3RoZXIgdHlwZXMgKGUuZyBhIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgYXMgYFwicmVkXCIgfCBcImdyZWVuXCIgfCAuLi5gIGZvciB0aGVcclxuICogY29sb3IpIHByb3BlcnR5LiBUaGlzIGlzIGJlY2F1c2UgaW4gYWRkaXRpb24gdG8gdGhlaXIgbm9ybWFsIHZhbHVlcyBhbnkgcHJvcGVydHlcclxuICogY2FuIHVzZSBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoZSBmb3JtIGB2YXIoLS1wcm9wbmFtZSlgLiBIb3dldmVyLCBpZiB3ZSBhZGQgc3RyaW5nIHR5cGVcclxuICogdG8gdGhlIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgKGUuZy4gYFwicmVkXCIgfCBcImdyZWVuXCIgfCBzdHJpbmdgKSwgdGhpcyB0aHJvd3Mgb2ZmIHRoZVxyXG4gKiBJbnRlbGxpc2Vuc2UgYW5kIGl0IGRvZXNuJ3QgcHJvbXB0IGRldmVsb3BlcnMgZm9yIHRoZSBwb3NzaWJsZSB2YWx1ZXMuIFRoZSBJVmFsdWVQcm94eVxyXG4gKiBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHN0cmluZyBhbmQgdGhpcyBzb2x2ZXMgdGhlIEludGVsbGlzZW5zZSBpc3N1ZS5cclxuICogXHJcbiAqIEFub3RoZXIgYmVuZWZpdCBvZiB1c2luZyBmdW5jdGlvbnMgaXMgdGhhdCB0aGV5IGFyZVxyXG4gKiBjb25zdHJ1Y3RlZCBhdCBvbmUgdGltZSBidXQgdGhlIHN0cmluZyBnZW5lcmF0aW9uIG9jY3VycyBhdCBhbm90aGVyIHRpbWUuIFRoaXMgYWxsb3dzXHJcbiAqIHVzaW5nIHRoZXNlIG9iamVjdHMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhleSBjYW4gcmVmZXJlbmNlIG9iamVjdHMgbGlrZVxyXG4gKiBJVmFyUnVsZSB0aGF0IGFyZSBub3QgZnVsbHkgaW5pdGlhbGl6ZWQgeWV0LiBIb3dldmVyLCB3aGVuIHRoZSBzdHlsZXMgc2hvdWxkIGJlIGluc2VydGVkXHJcbiAqIGludG8gRE9NIHRoZSBpbml0aWFsaXphdGlvbiB3aWxsIGhhdmUgYWxyZWFkeSBvY2N1cnJlZCBhbmQgdGhlIGZ1bmN0aW9uIHdpbGxcclxuICogcmV0dXJuIGEgY29ycmVjdCBzdHJpbmcuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgdGhlIHByb3h5IGZ1bmN0aW9ucyBoYXZlIGEgcGFyYW1ldGVyIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGVtIGZyb21cclxuICogb3RoZXIgcHJveHkgZnVuY3Rpb25zLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVudCBDU1MgdHlwZXMsXHJcbiAqIHNvIHRoYXQgYSBmdW5jdGlvbiB1c2VkIGZvciBvbmUgQ1NTIHR5cGUgY2Fubm90IGJlIHVzZWQgZm9yIGEgZGlmZmVyZW50IENTUyB0eXBlLiBGb3JcclxuICogZXhhbXBsZSwgdGhlIGBjYWxjKClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIE51bWJlclByb3h5IGZ1bmN0aW9uLCB3aGlsZSB0aGVcclxuICogYGxpbmVhckluZ3JhZGllbnQoKWAgZnVuY3Rpb24gcmV0dXJucyB0aGUgSW1hZ2VQcm94eSBmdW5jdGlvbi4gVGh1cyB5b3UgY2Fubm90IHVzZSB0aGVcclxuICogJ2NhbGMoKWAgZnVuY3Rpb24gZm9yIGltYWdlLWJhc2VkIENTUyBwcm9wZXJ0aWVzIGFuZCB2aWNlIHZlcnNhLlxyXG4gKi9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYW55IENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdsb2JhbF9TdHlsZVR5cGUgPSBcImluaGVyaXRcIiB8IFwiaW5pdGlhbFwiIHwgXCJ1bnNldFwiIHwgXCJyZXZlcnRcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHJpbmdQcm94eSB0eXBlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcuIFRoaXMgZnVuY3Rpb24gaXMgcGFydCBvZiB0eXBlXHJcbiAqIGRlZmluaXRpb24gZm9yIGFsbCBDU1MgcHJvcGVydGllcyAtIGV2ZW4gZm9yIHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBgc3RyaW5nYCBhcyBwYXJ0IG9mIHRoZWlyXHJcbiAqIHR5cGUuXHJcbiAqIFxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJldHVybmVkIGZyb20gdGhlIGByYXcoKWAgZnVuY3Rpb24sIHdoaWNoIGFsbG93cyBieS1wYXNzaW5nIHRoZSBwcm9wZXJ0eVxyXG4gKiB0eXBpbmcgcnVsZXMgYW5kIHNwZWNpZnlpbmcgYSBzdHJpbmcgZGlyZWN0bHkuIFRoaXMgbWlnaHQgYmUgdXNlZnVsLCB3aGVuIGEgc3RyaW5nIHZhbHVlIGlzXHJcbiAqIG9idGFpbmVkIGZyb20gc29tZSBleHRlcm5hbCBjYWxjdWxhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHJpbmdQcm94eSA9IChwPzogXCJzdHJpbmdcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21WYXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgY3VzdG9tIHByb3BlcnR5IG9iamVjdCB3aXRoIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgbmVlZGVkIGJlY2F1c2UgZXZlcnkgc3R5bGUgcHJvcGVydHkgY2FuIGFjY2VwdCB2YWx1ZSBpbiB0aGUgZm9ybSBvZiB0aGUgdmFyKClcclxuICogQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFyPFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0c2V0VmFsdWUoIHZhbHVlOiBULCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGV4dGVuZHMgdGhlIGdpdmVuIHR5cGUgd2l0aCB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAtIElDdXN0b21WYXIgb2JqZWN0IHRoYXQgYWxsb3dzIHVzaW5nIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eS5cclxuICogLSBTdHJpbmdQcm94eSB0eXBlIHRoYXQgYWxsb3dzIHNwZWNpZnlpbmcgcmF3IHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkPFQ+ID0gVCB8IElDdXN0b21WYXI8VD4gfCBTdHJpbmdQcm94eSB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHR5cGUgb2YgcHJvcGVydHkgaW4gYW4gb2JqZWN0IHdpdGggYSBzaW5nbGUgXCIhXCIgcHJvcGVydHkuIFRoaXNcclxuICogdHlwZSBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3BlcnR5IHZhbHVlIG11c3QgYmUgZmxhZ2dlZCBhcyBcIiFpbXBvcnRhbnRcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEltcG9ydGFudFByb3A8VD4gPSB7IFwiIVwiOiBFeHRlbmRlZDxUPiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV4dGVuZGVkUHJvcCBleHRlbmRzIHRoZSBnaXZlbiBnZW5lcmljIHR5cGUgd2l0aCB0aGUgZm9sbG93aW5nIGVsZW1lbnRzOlxyXG4gKiAtIE9iamVjdCB3aXRoIGEgc2luZ2xlIHByb3BlcnR5IFwiIVwiLCB3aGljaCBpcyB1c2VkIHRvIG1hcmsgYSBwcm9wZXJ0eSBhcyBcIiFpbXBvcnRhbnRcIi5cclxuICogLSBHbG9iYWxfU3R5bGVUeXBlLCB3aGljaCBhbGxvd3MgYW55IHByb3BlcnR5IHRvIGJlIGFzc2lnbmVkIHRoZSBnbG9iYWwgdmFsdWVzIHN1Y2ggYXNcclxuICogICBcImluaXRpYWxcIiwgXCJpbmhlcml0XCIsIFwidW5zZXRcIiBhbmQgXCJyZXZlcnRcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkUHJvcDxUPiA9IEV4dGVuZGVkPFQ+IHwgSW1wb3J0YW50UHJvcDxUPiB8IEdsb2JhbF9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBwYWlyLWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDIgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yUGFpcjxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3gtbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gNCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JCb3g8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4/LCBFeHRlbmRlZDxUPj9dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIG9yIG1vcmUgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yTWFueTxUPiA9IFQgfCBFeHRlbmRlZDxUPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtZXJpYyB0eXBlcyBhcyBhIGJhc2lzIGZvciBoYW5kbGluZyBDU1MgPG51bWJlcj4sIDxsZW5ndGg+LCA8YW5nbGU+LCBldGMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGEgc3RyaW5nIHZhbHVlIGNhbiBiZSBhc3NpZ25lZCB0byBwcm9wZXJ0aWVzIG9mIHRoZSBDU1NcclxuICogbnVtZXJpYyB0eXBlcy4gVGhpcyBmdW5jdGlvbiBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlIG1pbigpLCBtYXgoKSBhbmQgY2FsYygpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyUHJveHk8VCBleHRlbmRzIHN0cmluZz4gPSAocD86IFQpID0+IHN0cmluZztcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmc+ID0gbnVtYmVyIHwgc3RyaW5nIHwgTnVtYmVyUHJveHk8VD47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IE9uZU9yTWFueTxOdW1iZXJCYXNlPFQ+PjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIHR5cGUsIHRoZXkgYXJlIGNvbnZlcnRlZFxyXG4gKiB0byBzdHJpbmdzIHVzaW5nIHRoZSBgbnVtYmVyVG9TdHJpbmdgIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlck1hdGg8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW4oKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjbGFtcCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2FsYygpIGZ1bmN0aW9uLiBUaGlzIG1ldGhvZCBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdFxyXG4gICAgICogYmUgaW52b2tlZCB3aXRoIGEgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAgICAgKi9cclxuICAgIGNhbGMoIGZvcm11bGFQYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxudW1iZXI+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBOdW1iZXIgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyVHlwZSA9IFwiTnVtYmVyXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlIC0gbm90ZSB0aGF0IGl0IGV4bHVkZXMgYHN0cmluZ2AgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTnVtYmVyID0gRXhjbHVkZTxOdW1iZXJCYXNlPE51bWJlclR5cGU+LHN0cmluZz47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aU51bWJlciA9IE9uZU9yTWFueTxDc3NOdW1iZXI+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bnVtYmVyPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTnVtYmVyTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPE51bWJlclR5cGU+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHBlcmNlbnQgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFVuaXRzID0gXCIlXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUGVyY2VudCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VHlwZSA9IFwiUGVyY2VudFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUGVyY2VudCA9IE51bWJlckJhc2U8UGVyY2VudFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUGVyY2VudCA9IE9uZU9yTWFueTxDc3NQZXJjZW50PjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRQcm94eSA9IE51bWJlclByb3h5PFBlcmNlbnRUeXBlPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZyYWN0aW9uTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1BlcmNlbnRNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8UGVyY2VudFR5cGU+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciB0byBhIHBlcmNlbnQgc3RyaW5nLiBOdW1iZXJzIGJldHdlZW4gLTEgYW5kIDEgYXJlIG11bHRpcGx5ZWQgYnkgMTAwLlxyXG4gICAgICovXHJcbiAgICBwZXJjZW50KCBuOiBudW1iZXIpOiBQZXJjZW50UHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGxlbmd0aD5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGxlbmd0aCAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhVbml0cyA9IFwiUVwiIHwgXCJjaFwiIHwgXCJjbVwiIHwgXCJlbVwiIHwgXCJleFwiIHwgXCJpY1wiIHwgXCJpblwiIHwgXCJsaFwiIHwgXCJtbVwiIHwgXCJwY1wiIHxcclxuICAgICAgICAgICAgICAgIFwicHRcIiB8IFwicHhcIiB8IFwidmJcIiB8IFwidmhcIiB8IFwidmlcIiB8IFwidndcIiB8IFwicmVtXCIgfCBcInJsaFwiIHwgXCJ2bWF4XCIgfCBcInZtaW5cIiB8IFwiZnJcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBMZW5ndGggdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVHlwZSA9IFwiTGVuZ3RoXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoID0gTnVtYmVyQmFzZTxMZW5ndGhUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpTGVuZ3RoID0gT25lT3JNYW55PENzc0xlbmd0aD47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by1mb3VyLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoQm94ID0gT25lT3JCb3g8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoUHJveHkgPSBOdW1iZXJQcm94eTxMZW5ndGhUeXBlPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0xlbmd0aE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGxlbmd0aD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0xlbmd0aE1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxMZW5ndGhUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1pbm1heCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IE51bWJlclByb3h5PExlbmd0aFR5cGU+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBxdWF0ZXJzIG9mIGFuIGluY2ggKi9cclxuICAgIFEoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjaCB1bml0cyAqL1xyXG4gICAgY2goIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYW50aW1ldGVycyAqL1xyXG4gICAgY20oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYWxjdWxhdGVkIGZvbnQtc2l6ZXMgb2YgdGhlIGVsZW1lbnQgKi9cclxuICAgIGVtKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaGVpZ2h0cyBvZiBsb3dlcmNhc2UgbGV0dGVyICd4JyBpbiB0aGUgZm9udCAqL1xyXG4gICAgZXgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpYyB1bml0cyAqL1xyXG4gICAgaWMoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpbmNoZXMgKi9cclxuICAgIGluKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSBlbGVtZW50ICovXHJcbiAgICBsaCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIG1pbGxpbWV0ZXJzICovXHJcbiAgICBtbSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpY2FzICovXHJcbiAgICBwYyggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBvaW50cyAqL1xyXG4gICAgcHQoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaXhlbHMgKi9cclxuICAgIHB4KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gICAgICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgYmxvY2sgYXhpcyAqL1xyXG4gICAgdmIoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG4gICAgdmgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAgICAgKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBpbmxpbmUgYXhpcyAqL1xyXG4gICAgdmkoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgd2lkdGggb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbiAgICB2dyggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGZvbnRzaXplcyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbiAgICByZW0oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG4gICAgcmxoKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIHNtYWxsZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuICAgIHZtYXgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgbGFyZ2VyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbiAgICB2bWluKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgZm9yIGZsZXggKi9cclxuICAgIGZyKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgaW50byBwZXJjZW50cy4gVmFsdWVzIGJldHdlZW4gLTEuMCBhbmQgMS4wIG5vbi1pbmNsdXNpdmUgYXJlXHJcbiAgICAgKiBtdWx0aXBsaWVkIGJ5IDEwMC5cclxuICAgICAqL1xyXG4gICAgcGVyY2VudCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgcG9pbnQgdXNpbmcgeCBhbmQgeSBjb29yZGluYXRlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc1BvaW50ID0gW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGFuZ2xlPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgYW5nbGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0cyA9IFwiZGVnXCIgfCBcInJhZFwiIHwgXCJncmFkXCIgfCBcInR1cm5cIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBBbmdsZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVR5cGUgPSBcIkFuZ2xlXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NBbmdsZSA9IE51bWJlckJhc2U8QW5nbGVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlBbmdsZSA9IE9uZU9yTWFueTxDc3NBbmdsZT47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVQcm94eSA9IE51bWJlclByb3h5PEFuZ2xlVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NBbmdsZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGFuZ2xlPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzQW5nbGVNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8QW5nbGVUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiBkZWdyZWVzICovXHJcbiAgICBkZWcoIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gcmFkaWFucyAqL1xyXG4gICAgcmFkKCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGdyYWRpYW5zICovXHJcbiAgICBncmFkKCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHR1cm5zICovXHJcbiAgICB0dXJuKCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciBpbnRvIHBlcmNlbnRzLiBWYWx1ZXMgYmV0d2VlbiAtMS4wIGFuZCAxLjAgbm9uLWluY2x1c2l2ZSBhcmVcclxuICAgICAqIG11bHRpcGxpZWQgYnkgMTAwLlxyXG4gICAgICovXHJcbiAgICBwZXJjZW50KCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDx0aW1lPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgdGltZSAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVW5pdHMgPSBcInNcIiB8IFwibXNcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBUaW1lIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFRpbWVUeXBlID0gXCJUaW1lXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NUaW1lID0gTnVtYmVyQmFzZTxUaW1lVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlUaW1lID0gT25lT3JNYW55PENzc1RpbWU+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBUaW1lUHJveHkgPSBOdW1iZXJQcm94eTxUaW1lVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NUaW1lTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8dGltZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1RpbWVNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8VGltZVR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICBtcyggbjogbnVtYmVyKTogVGltZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gc2Vjb25kcyAqL1xyXG4gICAgcyggbjogbnVtYmVyKTogVGltZVByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxyZXNvbHV0aW9uPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcmVzb2x1dGlvbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uVW5pdHMgPSBcImRwaVwiIHwgXCJkcGNtXCIgfCBcImRwcHhcIiB8IFwieFwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFJlc29sdXRpb24gdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblR5cGUgPSBcIlJlc29sdXRpb25cIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Jlc29sdXRpb24gPSBOdW1iZXJCYXNlPFJlc29sdXRpb25UeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVJlc29sdXRpb24gPSBPbmVPck1hbnk8Q3NzUmVzb2x1dGlvbj47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uUHJveHkgPSBOdW1iZXJQcm94eTxSZXNvbHV0aW9uVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NSZXNvbHV0aW9uTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1Jlc29sdXRpb25NYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8UmVzb2x1dGlvblR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBJICovXHJcbiAgICBkcGkoIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQQ00gKi9cclxuICAgIGRwY20oIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuICAgIGRwcHgoIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIFggKi9cclxuICAgIHgoIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8ZnJlcXVlbmN5PmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJlcXVlbmN5ICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVVuaXRzID0gXCJIelwiIHwgXCJrSHpcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBGcmVxdWVuY3kgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VHlwZSA9IFwiRnJlcXVlbmN5XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyZXF1ZW5jeSA9IE51bWJlckJhc2U8RnJlcXVlbmN5VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyZXF1ZW5jeSA9IE9uZU9yTWFueTxDc3NGcmVxdWVuY3k+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lQcm94eSA9IE51bWJlclByb3h5PEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzRnJlcXVlbmN5TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEZyZXF1ZW5jeVR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBIZXJ0eiAqL1xyXG4gICAgaHooIG46IG51bWJlcik6IEZyZXF1ZW5jeVByb3h5XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEtpbG8tSGVydHogKi9cclxuICAgIGtoeiggbjogbnVtYmVyKTogRnJlcXVlbmN5UHJveHlcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkID0gXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyBhIHNpbXBsZSAxIG9yIHR3byB2YWx1ZXMgYDxwb3NpdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIFNpbXBsZUNzc1Bvc2l0aW9uID0gSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBmdWxsIHVwIHRvIDQgdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb3NpdGlvbiA9IFNpbXBsZUNzc1Bvc2l0aW9uIHwgXHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmRdIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgbXVsdGlwbGUgYDxwb3NpdGlvbj5gIENTUyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUNzc1Bvc2l0aW9uID0gRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+W107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSYWRpdXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgY29ybmVyIHJhZGl1cyAqL1xyXG5leHBvcnQgdHlwZSBDc3NSYWRpdXMgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVSTHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBVcmxQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIENTUyB1cmwoKSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFVybFByb3h5ID0gKHA/OiBcInVybFwiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBhdHRyKCkgZnVuY3Rpb24gc3VwcG9ydFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJUeXBlS2V5d29yZCA9IFwic3RyaW5nXCIgfCBcImNvbG9yXCIgfCBcInVybFwiIHwgXCJpbnRlZ2VyXCIgfCBcIm51bWJlclwiIHwgXCJsZW5ndGhcIiB8IFwiYW5nbGVcIiB8IFwidGltZVwiIHwgXCJmcmVxdWVuY3lcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJVbml0S2V5d29yZCA9IFBlcmNlbnRVbml0cyB8IExlbmd0aFVuaXRzIHwgVGltZVVuaXRzIHwgQW5nbGVVbml0cyB8IFJlc29sdXRpb25Vbml0cyB8IEZyZXF1ZW5jeVVuaXRzO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gV2ViIE5hbWVzcGFjZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBXZWJOYW1lc3BhY2VzIGNsYXNzIGNvbnRhaW5zIGlkZW50aWZpZXJzIGZvciB0aGUga25vd24gV2ViLXJlbGF0ZWQgbmFtZXNwYWNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWJOYW1lc3BhY2VzXHJcbntcclxuXHRzdGF0aWMgcmVhZG9ubHkgSFRNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBTVkcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhMaW5rID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBNYXRoTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9