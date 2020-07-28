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
        angleString = UtilFuncs_1.val2str(angle, {
            fromNumber: UtilFuncs_1.CssAngleMath.convertFunc,
            fromString: v => /\d+.*/.test(v) ? v : "to " + v
        }) + ",";
    }
    return `${name}(${angleString}${gradientStopsOrHintsToString(stopsOrHints, UtilFuncs_1.CssPercentMath)})`;
}
function radialGradientToString(name, stopsOrHints, shape, sizeOrExtent, pos) {
    let shapeString = shape ? shape : "";
    let sizeOrExtentString = sizeOrExtent ? UtilFuncs_1.CssLengthMath.multiStyleToString(sizeOrExtent, " ") : "";
    let posString = pos ? `at ${UtilFuncs_1.pos2str(pos)}` : "";
    let whatAndWhere = shape || sizeOrExtentString || pos ? `${shapeString} ${sizeOrExtentString} ${posString},` : "";
    return `${name}(${whatAndWhere}${gradientStopsOrHintsToString(stopsOrHints, UtilFuncs_1.CssPercentMath)})`;
}
function conicGradientToString(name, stopsOrHints, angle, pos) {
    let angleString = angle ? `from ${UtilFuncs_1.CssAngleMath.styleToString(angle)}` : "";
    let posString = pos ? `at ${UtilFuncs_1.pos2str(pos)}` : "";
    let whatAndWhere = angle || pos ? `${angleString} ${posString},` : "";
    return `${name}(${whatAndWhere}${gradientStopsOrHintsToString(stopsOrHints, UtilFuncs_1.CssAngleMath)})`;
}
function crossFadeToString(args) {
    let paramsString = UtilFuncs_1.val2str(args, {
        arrFunc: crossFadeParamToString,
        arrSep: ","
    });
    return `cross-fade(${paramsString})`;
}
function gradientStopsOrHintsToString(val, mathClass) {
    return val.map(v => gradientStopOrHintToString(v, mathClass)).join(",");
}
function gradientStopOrHintToString(val, mathClass) {
    return UtilFuncs_1.val2str(val, {
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
    return UtilFuncs_1.val2str(val, {
        fromArray: v => `${UtilFuncs_1.val2str(v[0])},${UtilFuncs_1.CssPercentMath.styleToString(v[1])}`
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
const RuleTypes_1 = __webpack_require__(/*! ../rules/RuleTypes */ "./lib/rules/RuleTypes.js");
const RuleContainer_1 = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
const StyleRules_1 = __webpack_require__(/*! ../rules/StyleRules */ "./lib/rules/StyleRules.js");
const AnimationRule_1 = __webpack_require__(/*! ../rules/AnimationRule */ "./lib/rules/AnimationRule.js");
const VarRule_1 = __webpack_require__(/*! ../rules/VarRule */ "./lib/rules/VarRule.js");
const CounterRules_1 = __webpack_require__(/*! ../rules/CounterRules */ "./lib/rules/CounterRules.js");
const GridRules_1 = __webpack_require__(/*! ../rules/GridRules */ "./lib/rules/GridRules.js");
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
 * Creates new grid line object. The line name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid line rule.
 */
function $gridline(nameOverride, isStartEndOrNone) {
    return new GridRules_1.GridLineRule(nameOverride, isStartEndOrNone);
}
exports.$gridline = $gridline;
/**
 * Creates new grid area object. The area name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid area rule.
 */
function $gridarea(nameOverride) {
    return new GridRules_1.GridAreaRule(nameOverride);
}
exports.$gridarea = $gridarea;
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
function $supports(query, instOrClass) {
    return new GroupRules_1.SupportsRule(query, instOrClass);
}
exports.$supports = $supports;
/**
 * Creates new media rule.
 */
function $media(query, instOrClass) {
    return new GroupRules_1.MediaRule(query, instOrClass);
}
exports.$media = $media;
/**
 * Processes the given style definition class or instance and creates unique names for all named
 * entities. For a given style definition class only a single instance is created, no matter how
 * many times this function is invoked. However, if an instance, which has not yet been processed,
 * is passed, then a new set of unique names will be created for it.
 */
function $use(instOrClass) {
    return RuleContainer_1.processInstanceOrClass(instOrClass);
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
function $embed(instOrClass) {
    // return definition instance without processing it. This is the indication that the defintion
    // will be embedded into another definition.
    return instOrClass instanceof RuleTypes_1.StyleDefinition ? instOrClass : new instOrClass();
}
exports.$embed = $embed;
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
function enableShortNames(enable, prefix) {
    return RuleContainer_1.s_enableShortNames(enable, prefix);
}
exports.enableShortNames = enableShortNames;
/**
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `class` property of an HTML element.
 * @param classes
 */
function classes(...classes) {
    return UtilFuncs_1.val2str(classes, {
        arrFunc: v => v instanceof StyleRules_1.ClassRule ? v.name : UtilFuncs_1.val2str(v)
    });
}
exports.classes = classes;


/***/ }),

/***/ "./lib/api/SchedulingAPI.js":
/*!**********************************!*\
  !*** ./lib/api/SchedulingAPI.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RuleContainer_1 = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
const Scheduling_1 = __webpack_require__(/*! ../rules/Scheduling */ "./lib/rules/Scheduling.js");
/**
 * Activates the given style definition class or instance and inserts all its rules into DOM. If
 * the input object is not an instance but a class, which is not yet associated with an instance,
 * the instance is first created and processed. Note that each style definition instance maintains
 * a reference counter of how many times it was activated and deactivated. The rules are inserted
 * into DOM only upon first activation.
 */
function activate(instanceOrClass, schedulerType) {
    let instance = RuleContainer_1.processInstanceOrClass(instanceOrClass);
    if (instance)
        Scheduling_1.s_scheduleCall((activator) => activator.activate(instance), schedulerType);
    return instance;
}
exports.activate = activate;
/**
 * Deactivates the given style definition instance by removing its rules from DOM. Note that each
 * style definition instance maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes down to 0.
 */
function deactivate(instance, schedulerType) {
    Scheduling_1.s_scheduleCall((activator) => activator.deactivate(instance), schedulerType);
}
exports.deactivate = deactivate;
/**
 * Writes to DOM all style changes caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
function forceDOMUpdate(schedulerType) {
    Scheduling_1.s_scheduleCall((activator) => activator.forceDOMUpdate(), schedulerType);
}
exports.forceDOMUpdate = forceDOMUpdate;
/**
 * Removes all scheduled activations caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
function cancelDOMUpdate(schedulerType) {
    Scheduling_1.s_scheduleCall((activator) => activator.cancelDOMUpdate(), schedulerType);
}
exports.cancelDOMUpdate = cancelDOMUpdate;
/**
 * Sets the default scheduler type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduler type parameter. Returns the type of
 * the previous default scheduler or 0 if an error occurs (e.g. the given scheduler type ID is not
 * registered).
 */
function setDefaultSchedulerType(schedulerType) {
    return Scheduling_1.s_setDefaultSchedulerType(schedulerType);
}
exports.setDefaultSchedulerType = setDefaultSchedulerType;
/**
 * Returns the default scheduler type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduler type parameter.
 */
function getDefaultSchedulerType() {
    return Scheduling_1.s_getDefaultSchedulerType();
}
exports.getDefaultSchedulerType = getDefaultSchedulerType;
/**
 * Registers the given scheduler object and returns the scheduler type identifier, which
 * should be used when calling activate and deactivate functions.
 */
function registerScheduler(scheduler) {
    return Scheduling_1.s_registerScheduler(scheduler);
}
exports.registerScheduler = registerScheduler;
/**
 * Unregisters a scheduler object with the given scheduler type identifier.
 */
function unregisterScheduler(id) {
    return Scheduling_1.s_unregisterScheduler(id);
}
exports.unregisterScheduler = unregisterScheduler;


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
const Scheduling_1 = __webpack_require__(/*! ../rules/Scheduling */ "./lib/rules/Scheduling.js");
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
function setElementStyle(elm, styleset, schedulerType) {
    setElementStringStyle(elm, styleset ? stylesetToStringStyleset(styleset) : null, schedulerType);
}
exports.setElementStyle = setElementStyle;
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset StringStyleset object which provides values for style properties.
 */
function setElementStringStyle(elm, styleset, schedulerType) {
    Scheduling_1.s_scheduleStylePropertyUpdate(elm, null, styleset, false, schedulerType);
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
 * Returns an IFilterProxy function representing the `brightness()` CSS function.
 */
function brightness(amount) {
    return percentFilter("brightness", amount);
}
exports.brightness = brightness;
/**
 * Returns an IFilterProxy function representing the `contrast()` CSS function.
 */
function contrast(amount) {
    return percentFilter("contrast", amount);
}
exports.contrast = contrast;
/**
 * Returns an IFilterProxy function representing the `grayscale()` CSS function.
 */
function grayscale(amount) {
    return percentFilter("grayscale", amount);
}
exports.grayscale = grayscale;
/**
 * Returns an IFilterProxy function representing the `invert()` CSS function.
 */
function invert(amount) {
    return percentFilter("invert", amount);
}
exports.invert = invert;
/**
 * Returns an IFilterProxy function representing the `opacity()` CSS function.
 */
function opacity(amount) {
    return percentFilter("opacity", amount);
}
exports.opacity = opacity;
/**
 * Returns an IFilterProxy function representing the `saturate()` CSS function.
 */
function saturate(amount) {
    return percentFilter("saturate", amount);
}
exports.saturate = saturate;
/**
 * Returns an IFilterProxy function representing the `sepia()` CSS function.
 */
function sepia(amount) {
    return percentFilter("sepia", amount);
}
exports.sepia = sepia;
/**
 * Returns an IFilterProxy function representing the `blur()` CSS function.
 */
function blur(radius) {
    return () => `blur(${UtilFuncs_1.CssLengthMath.styleToString(radius)})`;
}
exports.blur = blur;
/**
 * Returns an IFilterProxy function representing the `dropShadow()` CSS function.
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
 * Returns an IFilterProxy function representing the `hue-rotate()` CSS function.
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
 * Returns an IBasicShapeProxy function representing the `inset()` CSS function.
 */
function inset(offset, radius) {
    let r = radius != null ? "round " + StyleFuncs_1.borderRadiusToString(radius) : "";
    return () => `inset(${UtilFuncs_1.CssLengthMath.multiStyleToString(offset, " ")}${r})`;
}
exports.inset = inset;
/**
 * Returns an IBasicShapeProxy function representing the `circle()` CSS function.
 */
function circle(center, position) {
    let c = center != null ? UtilFuncs_1.CssLengthMath.styleToString(center) : "";
    let pos = position != null ? " at " + UtilFuncs_1.pos2str(position) : "";
    return () => `circle(${c}${pos})`;
}
exports.circle = circle;
/**
 * Returns an IBasicShapeProxy function representing the `ellipse()` CSS function.
 */
function ellipse(rx, ry, position) {
    let rxs = rx != null ? UtilFuncs_1.CssLengthMath.styleToString(rx) : "";
    let rys = ry != null ? " " + UtilFuncs_1.CssLengthMath.styleToString(ry) : "";
    let pos = position != null ? " at " + UtilFuncs_1.pos2str(position) : "";
    return () => `ellipse(${rxs}${rys}${pos})`;
}
exports.ellipse = ellipse;
/**
 * Returns an IBasicShapeProxy function representing the `polygon()` CSS function.
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
 * Returns an IRayProxy function representing the `ray()` CSS function.
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
 * Returns an IPathBuilder interface that allows building a CSS path.
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
 * Returns an ITransformProxy function representing the `matrix()` CSS function.
 */
function matrix(a, b, c, d, tx, ty) {
    return () => `matrix(${UtilFuncs_1.arr2str([a, b, c, d, tx, ty], undefined, ",")})`;
}
exports.matrix = matrix;
/**
 * Returns an ITransformProxy function representing the `matrix3d()` CSS function.
 */
function matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
    return () => `matrix(${UtilFuncs_1.arr2str([a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4], undefined, ",")})`;
}
exports.matrix3d = matrix3d;
/**
 * Returns an ITransformProxy function representing the `perspective()` CSS function.
 */
function perspective(d) {
    return () => `perspective(${UtilFuncs_1.CssLengthMath.styleToString(d)})`;
}
exports.perspective = perspective;
/**
 * Returns an ITransformProxy function representing the given CSS rotation function.
 */
function rotateImpl(name, a) {
    return () => `${name}(${UtilFuncs_1.CssAngleMath.styleToString(a)})`;
}
/**
 * Returns an ITransformProxy function representing the `rotate()` CSS function.
 */
function rotate(a) {
    return rotateImpl("rotate", a);
}
exports.rotate = rotate;
/**
 * Returns an ITransformProxy function representing the `rotateX()` CSS function.
 */
function rotateX(a) {
    return rotateImpl("rotateX", a);
}
exports.rotateX = rotateX;
/**
 * Returns an ITransformProxy function representing the `rotateY()` CSS function.
 */
function rotateY(a) {
    return rotateImpl("rotateY", a);
}
exports.rotateY = rotateY;
/**
 * Returns an ITransformProxy function representing the `rotateZ()` CSS function.
 */
function rotateZ(a) {
    return rotateImpl("rotateZ", a);
}
exports.rotateZ = rotateZ;
/**
 * Returns an ITransformProxy function representing the `rotate3d()` CSS function.
 */
function rotate3d(x, y, z, a) {
    let v = [UtilFuncs_1.CssNumberMath.styleToString(x), UtilFuncs_1.CssNumberMath.styleToString(y),
        UtilFuncs_1.CssNumberMath.styleToString(z), UtilFuncs_1.CssAngleMath.styleToString(a)].join(",");
    return () => `rotate3d(${v})`;
}
exports.rotate3d = rotate3d;
/**
 * Returns an ITransformProxy function representing the `scale()` CSS function.
 */
function scale(cx, sy) {
    return () => `scale(${UtilFuncs_1.CssNumberMath.styleToString(cx)}${sy != null ? "," + UtilFuncs_1.CssNumberMath.styleToString(sy) : ""})`;
}
exports.scale = scale;
/**
 * Returns an ITransformProxy function representing the given scale CSS function.
 */
function scaleImpl(name, s) {
    return () => `${name}(${UtilFuncs_1.CssNumberMath.styleToString(s)})`;
}
/**
 * Returns an ITransformProxy function representing the `scaleX()` CSS function.
 */
function scaleX(s) {
    return scaleImpl("scaleX", s);
}
exports.scaleX = scaleX;
/**
 * Returns an ITransformProxy function representing the `scaleY()` CSS function.
 */
function scaleY(s) {
    return scaleImpl("scaleY", s);
}
exports.scaleY = scaleY;
/**
 * Returns an ITransformProxy function representing the `scaleZ()` CSS function.
 */
function scaleZ(s) {
    return scaleImpl("scaleZ", s);
}
exports.scaleZ = scaleZ;
/**
 * Returns an ITransformProxy function representing the `scale3d()` CSS function.
 */
function scale3d(sx, sy, sz) {
    let v = [UtilFuncs_1.CssNumberMath.styleToString(sx), UtilFuncs_1.CssNumberMath.styleToString(sy),
        UtilFuncs_1.CssNumberMath.styleToString(sz)].join(",");
    return () => `scale3d(${v})`;
}
exports.scale3d = scale3d;
/**
 * Returns an ITransformProxy function representing the `skew()` CSS function.
 */
function skew(ax, ay) {
    return () => `skew(${UtilFuncs_1.CssAngleMath.styleToString(ax)}${ay != null ? "," + UtilFuncs_1.CssAngleMath.styleToString(ay) : ""})`;
}
exports.skew = skew;
/**
 * Returns an ITransformProxy function representing the `skewX()` CSS function.
 */
function skewX(ax) {
    return () => `skewX(${UtilFuncs_1.CssAngleMath.styleToString(ax)})`;
}
exports.skewX = skewX;
/**
 * Returns an ITransformProxy function representing the `skewY()` CSS function.
 */
function skewY(ay) {
    return () => `skewX(${UtilFuncs_1.CssAngleMath.styleToString(ay)})`;
}
exports.skewY = skewY;
/**
 * Returns an ITransformProxy function representing the `translate()` CSS function.
 */
function translate(x, y) {
    return () => `translate(${UtilFuncs_1.CssLengthMath.styleToString(x)}${y != null ? "," + UtilFuncs_1.CssLengthMath.styleToString(y) : ""})`;
}
exports.translate = translate;
/**
 * Returns an ITransformProxy function representing the given translate CSS function.
 */
function translateImpl(name, s) {
    return () => `${name}(${UtilFuncs_1.CssLengthMath.styleToString(s)})`;
}
/**
 * Returns an ITransformProxy function representing the `translateX()` CSS function.
 */
function translateX(x) {
    return translateImpl("translateX", x);
}
exports.translateX = translateX;
/**
 * Returns an ITransformProxy function representing the `translateY()` CSS function.
 */
function translateY(y) {
    return translateImpl("translateY", y);
}
exports.translateY = translateY;
/**
 * Returns an ITransformProxy function representing the `translateZ()` CSS function.
 */
function translateZ(z) {
    return translateImpl("translateZ", z);
}
exports.translateZ = translateZ;
/**
 * Returns an ITransformProxy function representing the `translate3d()` CSS function.
 */
function translate3d(x, y, z) {
    let v = [UtilFuncs_1.CssLengthMath.styleToString(x), UtilFuncs_1.CssLengthMath.styleToString(y),
        UtilFuncs_1.CssLengthMath.styleToString(z)].join(",");
    return () => `translate3d(${v})`;
}
exports.translate3d = translate3d;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Grid functions
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an IFitContentProxy function representing the `fit-content()` CSS function.
 */
function fitContent(size) {
    return () => `fit-content(${UtilFuncs_1.CssLengthMath.styleToString(size)})`;
}
exports.fitContent = fitContent;
/**
 * Returns an IMinMaxProxy function representing the `minmax()` CSS function.
 */
function minmax(min, max) {
    let options = { fromNumber: UtilFuncs_1.CssLengthMath.convertFunc };
    return () => `minmax(${UtilFuncs_1.val2str(min, options)},${UtilFuncs_1.val2str(max, options)})`;
}
exports.minmax = minmax;
/**
 * Returns an IRepeatProxy function representing the `repeat()` CSS function.
 */
function repeat(count, ...tracks) {
    // return () => `repeat(${val2str(count)},${stylePropToString( "gridTemplateRows", tracks, true)})`;
    return () => `repeat(${UtilFuncs_1.val2str(count)},${UtilFuncs_1.val2str(tracks, { arrFunc: StyleFuncs_1.gridTrackToString })})`;
}
exports.repeat = repeat;
/**
 * Returns an ISpanProxy function representing the span expression for grid layouts. If the first
 * parameter is a number, the second parameter (if defined) must be a name; if the first parameter
 * is a name, the second parameter (if defined) must be a number.
 */
function span(countOrName, nameOrCount) {
    let firstElm = UtilFuncs_1.val2str(countOrName);
    let secondElm = nameOrCount ? UtilFuncs_1.val2str(nameOrCount) : "";
    return () => `span ${firstElm} ${secondElm}`;
}
exports.span = span;


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
 * The Percent object contains static methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type by appending a "%" unit suffix.
 */
exports.Percent = new UtilFuncs_1.CssPercentMath();
/** Creates percent value */
function percent(n) { return () => n + "%"; }
exports.percent = percent;
/**
 * The Len object contains static methods that implement CSS mathematic functions on the `<length>`
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
exports.Len = new UtilFuncs_1.CssLengthMath();
/** Creates length value in quarters of an inch */
function Q(n) { return () => n + "Q"; }
exports.Q = Q;
/** Creates length value in ch units */
function ch(n) { return () => n + "ch"; }
exports.ch = ch;
/** Creates length value in cantimeters */
function cm(n) { return () => n + "cm"; }
exports.cm = cm;
/** Creates length value in calculated font-sizes of the element */
function em(n) { return () => n + "em"; }
exports.em = em;
/** Creates length value in heights of lowercase letter 'x' in the font */
function ex(n) { return () => n + "ex"; }
exports.ex = ex;
/** Creates length value in ic units */
function ic(n) { return () => n + "ic"; }
exports.ic = ic;
/** Creates length value in inches */
function inch(n) { return () => n + "in"; }
exports.inch = inch;
/** Creates length value in line-heights of the element */
function lh(n) { return () => n + "lh"; }
exports.lh = lh;
/** Creates length value in millimeters */
function mm(n) { return () => n + "mm"; }
exports.mm = mm;
/** Creates length value in picas */
function pc(n) { return () => n + "pc"; }
exports.pc = pc;
/** Creates length value in points */
function pt(n) { return () => n + "pt"; }
exports.pt = pt;
/** Creates length value in pixels */
function px(n) { return () => n + "px"; }
exports.px = px;
/** Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s block axis */
function vb(n) { return () => n + "vb"; }
exports.vb = vb;
/** Creates length value in 1% of the height of the viewport's initial containing block */
function vh(n) { return () => n + "vh"; }
exports.vh = vh;
/** Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s inline axis */
function vi(n) { return () => n + "vi"; }
exports.vi = vi;
/** Creates length value in 1% of the width of the viewport's initial containing block */
function vw(n) { return () => n + "vw"; }
exports.vw = vw;
/** Creates length value in fontsizes of the root element (<html>) */
function rem(n) { return () => n + "rem"; }
exports.rem = rem;
/** Creates length value in line-heights of the root element (<html>) */
function rlh(n) { return () => n + "rlh"; }
exports.rlh = rlh;
/** Creates length value in the units which are a smaller value between vw and vh */
function vmax(n) { return () => n + "vmax"; }
exports.vmax = vmax;
/** Creates length value in the units which are a larger value between vw and vh */
function vmin(n) { return () => n + "vmin"; }
exports.vmin = vmin;
/** Creates length value for flex */
function fr(n) { return () => n + "fr"; }
exports.fr = fr;
/**
 * The Angle object contains static methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
exports.Angle = new UtilFuncs_1.CssAngleMath();
/** Creates angle value in degrees */
function deg(n) { return () => n + "deg"; }
exports.deg = deg;
/** Creates angle value in radians */
function rad(n) { return () => n + "rad"; }
exports.rad = rad;
/** Creates angle value in gradians */
function grad(n) { return () => n + "grad"; }
exports.grad = grad;
/** Creates angle value in turns */
function turn(n) { return () => n + "turn"; }
exports.turn = turn;
/**
 * The Time object contains static methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
exports.Time = new UtilFuncs_1.CssTimeMath();
/** Creates time value in milliseconds */
function ms(n) { return () => n + "ms"; }
exports.ms = ms;
/** Creates time value in seconds */
function s(n) { return () => n + "s"; }
exports.s = s;
/**
 * The Resolution object contains static methods that implement CSS mathematic functions on the
 * `<resolution>` CSS type by appending a resolution unit suffix.
 * Integer numbers use "dpi"; floating point numbers use "dpcm".
 */
exports.Resolution = new UtilFuncs_1.CssResolutionMath();
/** Creates resolution value in DPI */
function dpi(n) { return () => n + "dpi"; }
exports.dpi = dpi;
/** Creates resolution value in DPCM */
function dpcm(n) { return () => n + "dpcm"; }
exports.dpcm = dpcm;
/** Creates resolution value in DPPX */
function dppx(n) { return () => n + "dppx"; }
exports.dppx = dppx;
/** Creates resolution value in X */
function x(n) { return () => n + "x"; }
exports.x = x;
/**
 * The Frequency object contains static methods that implement CSS mathematic functions on the
 * `<frequency>` CSS type by appending a frequency unit suffix.
 * Integer numbers use "Hz"; floating point numbers use "kHz".
 */
exports.Frequency = new UtilFuncs_1.CssFrequencyMath();
/** Creates frequency value in Hertz */
function hz(n) { return () => n + "hz"; }
exports.hz = hz;
/** Creates frequency value in Kilo-Hertz */
function khz(n) { return () => n + "khz"; }
exports.khz = khz;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// utility functions
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a function encapsulating the given string-like parameter. This function
 * allows specifying arbitrary text for properties whose type normally doesn't allow strings.
 * This is used as an "escape hatch" when a string value already exists and there is no sense
 * to convert it to a proper type. This function is a tag function and must be invoked with
 * the template string without parentheses.
 */
function raw(parts, ...params) {
    return () => UtilFuncs_1.templateStringToString(parts, params);
}
exports.raw = raw;
/**
 * Returns a function representing the invocation of the `var()` CSS function for
 * the given custom CSS property with optional fallbacks.
 */
function usevar(varObj, fallback) {
    return () => fallback
        ? `var(--${varObj.name},${StyleFuncs_1.stylePropToString(varObj.template, fallback, true)})`
        : `var(--${varObj.name})`;
}
exports.usevar = usevar;
/**
 * Returns a function representing the CSS `url()` function. The string parameter
 * will be wrapped in a "url()" invocation. The function can also accept the IIDRule object to
 * create url(#element) invocation, which is often used to address SVG elements by their IDs.
 */
function url(val) {
    return () => `url(${UtilFuncs_1.val2str(val)})`;
}
exports.url = url;
/**
 * Returns a function representing the `attr()` CSS function. It returns IStringProxy
 * and theoretically can be used in any style property; however, its use by browsers is currently
 * limited to the `content` property. Also no browser currently support type, units or fallback
 * values.
 */
function attr(attrName, typeOrUnit, fallback) {
    return () => `attr(${attrName}${typeOrUnit ? " " + typeOrUnit : ""}${fallback ? "," + fallback : ""})`;
}
exports.attr = attr;
/**
 * Returns a function representing a string in quotation marks.
 */
function quoted(val) {
    return () => `"${UtilFuncs_1.val2str(val)}"`;
}
exports.quoted = quoted;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Counters
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a function representing the CSS `counter()` function with additional
 * optional strings added after and/or before the counter.
 */
function counter(counterObj, style, textAfter, textBefore) {
    return () => {
        let styleString = style ? `,${UtilFuncs_1.val2str(style)}` : "";
        let before = textBefore ? `"${UtilFuncs_1.val2str(textBefore)}"` : "";
        let after = textAfter ? `"${UtilFuncs_1.val2str(textAfter)}"` : "";
        return `${before} counter(${UtilFuncs_1.val2str(counterObj)}${styleString}) ${after}`;
    };
}
exports.counter = counter;
/**
 * Returns a function representing the CSS `countesr()` function with the given
 * separator string and additional optional strings added after and/or before the counter.
 */
function counters(counterObj, separator, style, textAfter, textBefore) {
    return () => {
        let sepString = separator ? `"${UtilFuncs_1.val2str(separator)}"` : `"."`;
        let styleString = style ? `,${UtilFuncs_1.val2str(style)}` : "";
        let before = textBefore ? `"${UtilFuncs_1.val2str(textBefore)}"` : "";
        let after = textAfter ? `"${UtilFuncs_1.val2str(textAfter)}"` : "";
        return `${before} counters(${UtilFuncs_1.val2str(counterObj)},${sepString}${styleString}) ${after}`;
    };
}
exports.counters = counters;


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
__export(__webpack_require__(/*! ./api/SchedulingAPI */ "./lib/api/SchedulingAPI.js"));


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
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name, this.cssName] = Rule_1.createNames(ownerContainer, ruleName, this.nameOverride);
        for (let keyframeRule of this.frameRules)
            keyframeRule.process(container, ownerContainer, ruleName);
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
        return UtilFuncs_1.val2str(this.waypoint, {
            fromNumber: v => v + "%",
            arrFunc: v => UtilFuncs_1.val2str(v, { fromNumber: v => v + "%" }),
            arrSep: ","
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
class CounterRule extends Rule_1.RuleLike {
    constructor(nameOverride) {
        super();
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name] = Rule_1.createNames(ownerContainer, ruleName, this.nameOverride);
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

/***/ "./lib/rules/GridRules.js":
/*!********************************!*\
  !*** ./lib/rules/GridRules.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/**
 * The GridLineRule class describes a named grid line definition. No CSS rule is created for grid
 * lines - they are needed only to provide type-safe grid line definitions.
 */
class GridLineRule extends Rule_1.RuleLike {
    // if the nameOverride is an area rule object, the isStartEndOrNone flag is always defined
    // because this constructor can only be invoked for the start and end lines of the GridAreaRule
    // object.
    constructor(nameOverride, isStartEndOrNone) {
        super();
        this.nameOverride = nameOverride;
        this.isStartEndOrNone = isStartEndOrNone;
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        let nameOverride = this.nameOverride;
        if (nameOverride instanceof GridLineRule) {
            this.name = nameOverride.name;
            this.isStartEndOrNone = nameOverride.isStartEndOrNone;
            this.areaName = nameOverride.areaName;
        }
        else if (nameOverride instanceof GridAreaRule) {
            this.name = nameOverride.name + (this.isStartEndOrNone ? "-start" : "-end");
            this.areaName = nameOverride.name;
        }
        else {
            [this.name] = Rule_1.createNames(ownerContainer, ruleName, this.nameOverride);
            // if the obtained name doesn't have "-start" or "-end" but the isStartEndOrNone flag is
            // defined (that is, it is either start or end line), we need to append the suffix. If the
            // obtained name already has "-start" or "-end" and the isStartEndOrNone flag is not
            // defined, we set this flag to either true or false depending on the suffix. Note that if
            // the nameOverride is an area rule object, the isStartEndOrNone flag is always defined.
            let nameHasStart = this.name.endsWith("-start");
            let nameHasEnd = this.name.endsWith("-end");
            if (nameHasStart) {
                this.isStartEndOrNone = true;
                this.areaName = this.name.substr(0, this.name.length - "-start".length);
            }
            else if (nameHasEnd) {
                this.isStartEndOrNone = false;
                this.areaName = this.name.substr(0, this.name.length - "-end".length);
            }
            else if (this.isStartEndOrNone === true) {
                this.areaName = this.name;
                this.name += "-start";
            }
            else if (this.isStartEndOrNone === false) {
                this.areaName = this.name;
                this.name += "-end";
            }
        }
    }
    // Creates a copy of the rule.
    clone() {
        return new GridLineRule(this.nameOverride, this.isStartEndOrNone);
    }
    // The valueToString function is used when the object is specified as a value of a style property.
    // We return the line name.
    valueToString() {
        return this.name;
    }
}
exports.GridLineRule = GridLineRule;
/**
 * The GridAreaRule class describes a named grid area definition. No CSS rule is created for grid
 * areas - they are needed only to provide type-safe grid area definitions.
 */
class GridAreaRule extends Rule_1.RuleLike {
    // if the nameOverride is an area rule object, the isStartEndOrNone flag is always defined
    // because this constructor can only be invoked for the start and end lines of the GridAreaRule
    // object.
    constructor(nameOverride) {
        super();
        this.nameOverride = nameOverride;
        // create line rules
        this.startLine = new GridLineRule(this, true);
        this.endLine = new GridLineRule(this, false);
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name] = Rule_1.createNames(ownerContainer, ruleName, this.nameOverride);
        // process line rules
        this.startLine.process(container, ownerContainer, null);
        this.endLine.process(container, ownerContainer, null);
    }
    // Creates a copy of the rule.
    clone() {
        return new GridAreaRule(this.nameOverride);
    }
    // The valueToString function is used when the object is specified as a value of a style property.
    // We return the line name.
    valueToString() {
        return this.name;
    }
}
exports.GridAreaRule = GridAreaRule;


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
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        // container to which our groupng rule belongs becomes the parent container for the
        // style definition instance
        let instance = RuleContainer_1.processInstanceOrClass(this.instanceOrClass, container.getDefinitionInstance());
        if (!instance)
            return;
        this.instance = instance;
        this.ruleContainer = RuleContainer_1.getContainerFromInstance(instance);
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
    /** Flag indicated whether the browser supports this rule's query */
    get isSupported() {
        return CSS.supports(StyleFuncs_1.supportsQueryToString(this.query));
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
        return `@media ${MediaFuncs_1.mediaQueryToString(this.query)}`;
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
        let supportsQueryString = !this.supportsQuery ? "" : StyleFuncs_1.supportsQueryToString(this.supportsQuery);
        if (supportsQueryString && !supportsQueryString.startsWith("supports"))
            supportsQueryString = `supports( ${supportsQueryString} )`;
        let mediaQueryString = !this.mediaQuery ? "" : MediaFuncs_1.mediaQueryToString(this.mediaQuery);
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
 * The RuleLike abstract class is a base for all "rules" defined in the style definition classes -
 * whether they correspond to real CssRules (and thus derive from the Rule class) or not (such as
 * counters, grid lines and grid areas).
 */
class RuleLike {
    // Processes the rule.
    process(container, ownerContainer, ruleName) {
        this.container = container;
        this.ownerContainer = ownerContainer;
        this.ruleName = ruleName;
    }
}
exports.RuleLike = RuleLike;
/**
 * The Rule class is used as a base class for all rules. As a parent of RuleContainer, the Rule
 * class is also an ancestor for Stylesheet; however, most of its the fields are undefined in
 * te Stylesheet instances.
 */
class Rule extends RuleLike {
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
function createNames(ownerContainer, ruleName, nameOverride, cssPrefix) {
    if (!ruleName && !nameOverride)
        return ["", ""];
    let name = !nameOverride
        ? ownerContainer.getScopedRuleName(ruleName)
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
const MiscRules_1 = __webpack_require__(/*! ./MiscRules */ "./lib/rules/MiscRules.js");
const Scheduling_1 = __webpack_require__(/*! ./Scheduling */ "./lib/rules/Scheduling.js");
// Define symbols that are used for keeping important information on the style definition
// instances that we don't want to be visible to developers.
/** Property on the style definition class pointing to the singlton instance. */
const symInstance = Symbol("definition");
/**
 * Property on the style definition instance pointing to the RuleContainer object that is
 * responsible for processing rules.
 */
const symContainer = Symbol("container");
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
        this.parent = instance.$parent;
        this.owner = instance.$owner;
        this.activationRefCount = 0;
        this.domStyleElm = null;
        this.process();
    }
    // Processes the properties of the style definition instance. This creates names for classes,
    // IDs, animations and custom variables.
    process() {
        // put reference to this container in the symbol property of the definition instance.
        this.instance[symContainer] = this;
        // get containers for the parent and owner style definition
        if (this.parent)
            this.parent[symContainer];
        if (this.owner)
            this.topLevelContainer = this.owner[symContainer];
        // if our container has parent container, prefix our name with the upper one
        if (this.parentContainer)
            this.name = `${this.parentContainer.name}_${this.name}`;
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
        else if (propVal instanceof Rule_1.Rule)
            this.processRule(propName, propVal);
        else if (propVal instanceof Rule_1.RuleLike)
            this.processRuleLike(propName, propVal);
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
    processRuleLike(propName, ruleLike) {
        // if the object is already assigned to a stylesheet, we create a clone of the
        // rule and assign it to our stylesheet.
        if (ruleLike.container)
            ruleLike = ruleLike.clone();
        ruleLike.process(this, this.topLevelContainer, propName);
    }
    // Processes the given Rule-derived object.
    processRule(propName, rule) {
        // if the rule object is already processed as part of another instance, we create a clone
        // of the rule and set it to our instance.
        if (rule.ownerContainer) {
            if (propName)
                this.instance[propName] = rule = rule.clone();
            else {
                // TODO: support already used rules in an array
                return;
            }
        }
        rule.process(this, this.topLevelContainer, propName);
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
    setCustomVarValue(name, value, important, schedulerType) {
        if (this.cssCustomVarStyleRule)
            Scheduling_1.s_scheduleStylePropertyUpdate(this.cssCustomVarStyleRule, name, value, important, schedulerType);
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
            ref[symContainer].activate();
        // isert our custom variables in a ":root" rule
        if (this.vars.length > 0) {
            this.cssCustomVarStyleRule = Rule_1.Rule.addRuleToDOM(`:root {${this.vars.map(varObj => varObj.toCssString()).filter(v => v != null).join(";")}}`, parent);
        }
        // insert all other rules
        this.otherRules.forEach(rule => rule.insert(parent));
    }
    /** Clears all CSS rule objects defined in this container. */
    clearRules() {
        // import and namespace rules can only exist in the top-level style definition class
        if (this.isTopLevel) {
            this.imports && this.imports.forEach(rule => rule.clear());
            this.namespaces && this.namespaces.forEach(rule => rule.clear());
        }
        this.cssCustomVarStyleRule = null;
        this.otherRules.forEach(rule => rule.clear());
        // deactivate imported stylesheets
        for (let ref of this.refs)
            ref[symContainer].deactivate();
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
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
function s_enableShortNames(enable, prefix) {
    s_useUniqueStyleNames = enable;
    s_uniqueStyleNamesPrefix = prefix ? prefix : "n";
}
exports.s_enableShortNames = s_enableShortNames;
/**
 * Flag indicating whether to use optimized names for style elements (classes,  animations, etc.)
 * By default this flag is true in the Release build of the library and false in the Debug build.
 */
let s_useUniqueStyleNames = true;
/////////////
s_useUniqueStyleNames = false;
//////////
/**
 * Prefix to use when generating unique style names. If undefined, a standard prefix "n" will be used.
 */
let s_uniqueStyleNamesPrefix = "n";
/** Next number to use when generating unique identifiers. */
let s_nextUniqueID = 1;
/**
 * Generates name to use for the given rule from the given style sheet.
 */
function generateName(sheetName, ruleName) {
    return s_useUniqueStyleNames
        ? generateUniqueName(s_uniqueStyleNamesPrefix)
        : `${sheetName}_${ruleName}`;
}
/**
 * Generates a unique name, which can be used either for style element's ID or or class,
 * identifier or animation name. Names are generated using a simple incrementing number.
 */
function generateUniqueName(prefix) {
    return (prefix ? prefix : s_uniqueStyleNamesPrefix) + s_nextUniqueID++;
}
// Looks up a property with the given name in the prototype chain of the given style definition
// class. If found and if the property is a rule, then returns the name assigned for it.
function findNameForRuleInPrototypeChain(definitionClass, ruleName) {
    if (!definitionClass)
        return null;
    // loop over prototypes
    for (let baseClass = Object.getPrototypeOf(definitionClass); baseClass !== RuleTypes_1.StyleDefinition; baseClass = Object.getPrototypeOf(baseClass)) {
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
function processInstanceOrClass(instOrClass, parent) {
    if (!instOrClass)
        return null;
    // instOrClass has type "object" if it is an instance and "function" if it is a class
    if (typeof instOrClass === "object") {
        processInstance(instOrClass);
        return instOrClass;
    }
    else {
        // check whether this definition class is already associated with an instance
        return instOrClass.hasOwnProperty(symInstance)
            ? instOrClass[symInstance]
            : processClass(instOrClass, parent);
    }
}
exports.processInstanceOrClass = processInstanceOrClass;
/**
 * Processes the given style definition class by creating its instance and associating a
 * rule container object with it. The class will be associated with the instance using the
 * Symbol property. The owner parameter is a reference to the top-level style defiition
 * object or null if the given class is itself a top-level class (that is, is not a class
 * that defines rules within nested grouping rules).
 */
function processClass(definitionClass, parent) {
    // process all the base classes so that rule names are generated. We don't activate styles
    // for these classes because derived classes will have all the rules from all the base classes
    // as their own and so these rules will be activated as part of the derived class.
    for (let baseClass = Object.getPrototypeOf(definitionClass); baseClass !== RuleTypes_1.StyleDefinition; baseClass = Object.getPrototypeOf(baseClass)) {
        processClass(baseClass, parent);
    }
    try {
        // create the instance of the definition class
        let instance = new definitionClass(parent);
        // get the name for our container
        let name = s_useUniqueStyleNames || !definitionClass.name
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
 * Processes the given style definition instance and assigns names to its rules. If the
 * instance has already been processed, we do nothing; otherwise, we assign new unique names
 * to its rules.
 */
function processInstance(instance, embeddingContainer) {
    // if the instance is already processed, just return; in this case we ignore the
    // embeddingContainer parameter.
    let ruleContainer = instance[symContainer];
    if (ruleContainer)
        return;
    // get the name for our container
    let name = generateUniqueName();
    if (!s_useUniqueStyleNames) {
        let definitionClass = instance.constructor;
        if (definitionClass.name)
            name += "_" + definitionClass.name;
    }
    // create container - this will associate the new container with the instance and process
    // the rules.
    new RuleContainer(instance, name, embeddingContainer);
}
/**
 * Returns rule container object associated with the given style definition object.
 */
function getContainerFromInstance(instance) {
    return instance ? instance[symContainer] : null;
}
exports.getContainerFromInstance = getContainerFromInstance;
/**
 * Activates the given style definition and inserts all its rules into DOM. If the input object is
 * not a style definition but a style definition class, obtain style definition by calling the $use
 * function. Note that each style definition object maintains a reference counter of how many times
 * it was activated and deactivated. The rules are inserted to DOM only when this reference counter
 * goes up to 1.
 */
function activateInstance(instance, count) {
    let ruleContainer = getContainerFromInstance(instance);
    if (ruleContainer) {
        for (let i = 0; i < count; i++)
            ruleContainer.activate();
    }
}
exports.activateInstance = activateInstance;
/**
 * Deactivates the given style definition by removing its rules from DOM. Note that each style
 * definition object maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes down to 0.
 */
function deactivateInstance(instance, count) {
    let ruleContainer = getContainerFromInstance(instance);
    if (ruleContainer) {
        for (let i = 0; i < count; i++)
            ruleContainer.deactivate();
    }
}
exports.deactivateInstance = deactivateInstance;


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
 * Symbol that is used by the `$parent` property in the StyleDefinition class that keeps reference
 * to the parnt style definition class. Developers can use this property to access rules in
 * the chain of nested grouping rules. We need this symbol to avoid enumerating the `$parent`
 * property when processing the rules in the style definition object.
 */
const symParent = Symbol("parent");
/**
 * Symbol that is used by the `$owner` property in the StyleDefinition class that keeps reference
 * to the top-level style definition class. Developers can use this property to access rules in
 * the chain of nested grouping rules. We need this symbol to avoid enumerating the `$owner`
 * property when processing the rules in the style definition object.
 */
const symOwner = Symbol("owner");
/**
 * The StyleDefinition class is a base for all classes that contain defininitions of CSS rules.
 * @typeparam P Parent style definition class. Parent of top-lvel class is null.
 * @typeparam O Top-level style definition class, which is the owner of this class. The top-level
 * class is its own owner.
 */
class StyleDefinition {
    /**
     * Style definition classes are created directly only by the *styled components* - that is,
     * components that use different styles for each instance. Otherwise, style definition
     * class instances are created when either the [[$use]] or [[activate]] function is called.
     * @param parent Reference to the parent style definition class
     */
    constructor(parent) {
        this[symParent] = parent;
        // Owner is taken from the parent class; a top-level class is its own owner.
        this[symOwner] = parent ? parent.$owner : this;
    }
    /**
     * Refers to the instance of the style definition class which is the parnt of this style
     * definition object in the chain of style definition classes. Through this member, all rules
     * and other members defined in the parent definition class can be accessed.
     */
    get $parent() { return this[symOwner]; }
    /**
     * Refers to the instance of the style definition class which is the owner of
     * this style definition object. The owner is the top-level class in the chain of style
     * definition classes. Through this member, all rules and other members defined in the owner
     * definition class can be accessed.
     */
    get $owner() { return this[symOwner]; }
}
exports.StyleDefinition = StyleDefinition;


/***/ }),

/***/ "./lib/rules/Scheduling.js":
/*!*********************************!*\
  !*** ./lib/rules/Scheduling.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RuleContainer_1 = __webpack_require__(/*! ./RuleContainer */ "./lib/rules/RuleContainer.js");
/**
 * Set the value of either a single property or a set of properties in the given
 * CSS style object.
 */
function updateStyleProperty(ruleOrElm, name, value, important) {
    if (!name && value == null) {
        if (ruleOrElm instanceof CSSStyleRule)
            ruleOrElm.cssText = "";
        else
            ruleOrElm.removeAttribute("style");
    }
    else if (name) {
        if (value == null)
            ruleOrElm.style.removeProperty(name);
        else
            ruleOrElm.style.setProperty(name, value, important ? "!important" : undefined);
    }
    else {
        let styleset = value;
        for (let propName in styleset)
            ruleOrElm.style[propName] = styleset[propName];
    }
}
/**
 * The SynchronousActivator class represents the synchronous activation mechanism, which writes
 * style changes to the DOM when the activate and deactivate functions are called.
 */
class SynchronousActivator {
    /**
     * Instructs to activate the given style definition instance. This method is called when the
     * activate function is called for this activation mechanism.
     * @param definition
     */
    activate(definition) {
        RuleContainer_1.activateInstance(definition, 1);
    }
    /**
     * Instructs to deactivate the given style definition instance. This method is called when the
     * deactivate function is called for this activation mechanism.
     * @param definition
     */
    deactivate(definition) {
        RuleContainer_1.deactivateInstance(definition, 1);
    }
    /**
     * Instructs to set the value of either a single property or a set of properties in the given
     * CSS style object.
     */
    setStyleProperty(ruleOrElm, name, value, important) {
        updateStyleProperty(ruleOrElm, name, value, important);
    }
    /**
     * Performs activation/deactivation for all style definitions accumulated since the last
     * activation/deactivation. This method is called when the forceDOMUpdate function is called
     * for this activation mechanism.
     */
    forceDOMUpdate() { }
    /**
     * Cancel activation/deactivation for all style definitions accumulated since the last
     * activation/deactivation. This method is called when the cancelDOMUpdate function is called
     * for this activation mechanism.
     */
    cancelDOMUpdate() { }
}
/**
 * The SchedulingActivator class keeps a map of StyleDefinition instances that are scheduled for
 * activation or deactivation. Each instance is mapped to a refernce count, which is incremented
 * upon the activate calls and decremented upon the deactivate calls. When the doActivation
 * method is called The style definition will be either activated or deactivated based on whether
 * the reference count is positive or negative.
 */
class SchedulingActivator {
    constructor(scheduler) {
        // Map of style definition class instances to the reference count of activation/deactivation.
        this.definitions = new Map();
        // Array of style property values to be set/removed.
        this.props = [];
        if (scheduler) {
            scheduler.init(() => this.doDOMUpdate());
            this.scheduler = scheduler;
        }
    }
    /**
     * Instructs to activate the given style definition instance.
     */
    activate(definition) {
        let refCount = this.definitions.get(definition) || 0;
        if (refCount === -1) {
            this.definitions.delete(definition);
            if (this.definitions.size === 0 && this.props.length === 0)
                this.scheduler && this.scheduler.cancelDOMUpdate();
        }
        else {
            if (this.definitions.size === 0 && this.props.length === 0)
                this.scheduler && this.scheduler.scheduleDOMUpdate();
            this.definitions.set(definition, ++refCount);
        }
    }
    /**
     * Instructs to deactivate the given style definition instance.
     */
    deactivate(definition) {
        let refCount = this.definitions.get(definition) || 0;
        if (refCount === 1) {
            this.definitions.delete(definition);
            if (this.definitions.size === 0 && this.props.length === 0)
                this.scheduler && this.scheduler.cancelDOMUpdate();
        }
        else {
            if (this.definitions.size === 0 && this.props.length === 0)
                this.scheduler && this.scheduler.scheduleDOMUpdate();
            this.definitions.set(definition, --refCount);
        }
    }
    /**
     * Instructs to set the value of either a single property or a set of properties in the given
     * CSS style object.
     */
    setStyleProperty(ruleOrElm, name, value, important) {
        if (this.definitions.size === 0 && this.props.length === 0)
            this.scheduler && this.scheduler.scheduleDOMUpdate();
        this.props.push({ ruleOrElm, name, value, important });
    }
    /**
     * Performs activation/deactivation for all style definitions in our internal map.
     */
    forceDOMUpdate() {
        if (this.definitions.size > 0 || this.props.length > 0) {
            this.doDOMUpdate();
            this.scheduler && this.scheduler.cancelDOMUpdate();
        }
    }
    /**
     * Cancel activation/deactivation for all style definitions accumulated since the last
     * activation/deactivation.
     */
    cancelDOMUpdate() {
        if (this.definitions.size > 0 || this.props.length > 0) {
            this.clearActivation();
            this.scheduler && this.scheduler.cancelDOMUpdate();
        }
    }
    /**
     * Performs activation/deactivation and property set operations accumulated internally. This
     * method should be used by the derived classes when scheduled activations should be performed.
     */
    doDOMUpdate() {
        // activate/deactivate style definitions
        this.definitions.forEach((refCount, definition) => {
            if (refCount > 0)
                RuleContainer_1.activateInstance(definition, refCount);
            else
                RuleContainer_1.deactivateInstance(definition, -refCount);
        });
        this.definitions.clear();
        // update style properties
        this.props.forEach(prop => updateStyleProperty(prop.ruleOrElm, prop.name, prop.value, prop.important));
        this.props = [];
    }
    /**
     * Clears all activation/deactivation data for all style definitions accumulated since the last
     * activation/deactivation.
     */
    clearActivation() {
        this.definitions.clear();
        this.props = [];
    }
}
exports.SchedulingActivator = SchedulingActivator;
/**
 * The AnimationFrameScheduler implements scheduling using animation frames.
 */
class AnimationFrameScheduler {
    constructor() {
        // Handle returned by requestAnimationFrame function.
        this.requestHandle = 0;
        /**
         * Is invoked when animation frame should be executed.
         */
        this.onAnimationFrame = () => {
            this.requestHandle = 0;
            this.doDOMUpdate();
        };
    }
    /**
     * Initializes the scheduler object and provides the callback that should be invoked when the
     * scheduler decides to make changes to the DOM.
     */
    init(doDOMUpdate) {
        this.doDOMUpdate = doDOMUpdate;
    }
    /**
     * Is invoked when the scheduler needs to schedule its callback or event.
     */
    scheduleDOMUpdate() {
        this.requestHandle = requestAnimationFrame(this.onAnimationFrame);
    }
    /**
     * Is invoked when the scheduler needs to cancels its scheduled callback or event.
     */
    cancelDOMUpdate() {
        if (this.requestHandle > 0) {
            cancelAnimationFrame(this.requestHandle);
            this.requestHandle = 0;
        }
    }
}
/**
 * Schedules the update of the value of the given CSS property in the given rule.
 */
function s_scheduleStylePropertyUpdate(ruleOrElm, name, value, important, schedulerType) {
    s_scheduleCall((activator) => activator.setStyleProperty(ruleOrElm, name, value, important), schedulerType);
}
exports.s_scheduleStylePropertyUpdate = s_scheduleStylePropertyUpdate;
/**
 * Schedules calling of the given function using the given scheduler type.
 */
function s_scheduleCall(func, schedulerType) {
    let activator = schedulerType == null ? s_defaultActivator : s_registeredActivators.get(schedulerType);
    if (activator)
        func(activator);
}
exports.s_scheduleCall = s_scheduleCall;
/**
 * Returns the current default scheduler type.
 */
function s_getDefaultSchedulerType() {
    return s_defaultSchedulerType;
}
exports.s_getDefaultSchedulerType = s_getDefaultSchedulerType;
/**
 * Sets the default scheduling type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduling parameter. Returns the type of the
 * previous default activator or 0 if an error occurs (e.g. the given scheduler type ID is not
 * registered).
 */
function s_setDefaultSchedulerType(schedulerType) {
    // check that the given number is in our map of registered activators
    let activator = s_registeredActivators.get(schedulerType);
    if (!activator)
        return 0;
    let prevSchedulerType = s_defaultSchedulerType;
    s_defaultSchedulerType = schedulerType;
    s_defaultActivator = activator;
    return prevSchedulerType;
}
exports.s_setDefaultSchedulerType = s_setDefaultSchedulerType;
/**
 * Registers the given scheduler object and returns the scheduler type identifier, which
 * should be used when calling activate and deactivate functions.
 */
function s_registerScheduler(scheduler) {
    // get the registration ID for this scheduler
    let id = s_nextCustomSchedulerType++;
    s_registeredActivators.set(id, new SchedulingActivator(scheduler));
    return id;
}
exports.s_registerScheduler = s_registerScheduler;
/**
 * Unregisters a scheduler object with the given scheduler type identifier.
 */
function s_unregisterScheduler(id) {
    if (id >= s_firstCustomSchedulerType) {
        s_registeredActivators.delete(id);
        // if the deleted scheduler was our default one, we set the default to SYNC
        if (s_defaultSchedulerType === id) {
            s_defaultSchedulerType = 1 /* Sync */;
            s_defaultActivator = s_synchronousActivator;
        }
    }
}
exports.s_unregisterScheduler = s_unregisterScheduler;
/**
 * Current default scheduler. This scheduler will be used if scheduler type is not explicitly
 * specified in calls such as activate or IStyleRule.setProp.
 */
let s_defaultSchedulerType = 1 /* Sync */;
/**
 * Synchronous activator instance.
 */
let s_synchronousActivator = new SynchronousActivator();
/**
 * Current default activator. This activator will be used if scheduler type is not explicitly
 * specified in calls such as activate or IStyleRule.setProp.
 */
let s_defaultActivator = s_synchronousActivator;
/**
 * Scheduler type identifier to be assigned to the first custom scheduler to be registered.
 * All custom scheduler identifiers are greater or equal to this number.
 */
const s_firstCustomSchedulerType = 1001;
/**
 * Scheduler type identifier to be assigned to the next custom scheduler to be registered.
 */
let s_nextCustomSchedulerType = s_firstCustomSchedulerType;
/**
 * Map of registered built-in and custom activators.
 */
let s_registeredActivators = new Map();
/**
 * Register built-in and custom activators.
 */
s_registeredActivators.set(1 /* Sync */, s_synchronousActivator);
s_registeredActivators.set(2 /* AnimationFrame */, new SchedulingActivator(new AnimationFrameScheduler()));
s_registeredActivators.set(3 /* Manual */, new SchedulingActivator());


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
const Scheduling_1 = __webpack_require__(/*! ./Scheduling */ "./lib/rules/Scheduling.js");
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
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        // if dependent rules exist, process them under the same container
        for (let propName in this.dependentRules) {
            let propVal = this.dependentRules[propName];
            if (Array.isArray(propVal) && propVal.length > 0)
                propVal.forEach((depRule) => depRule.process(container, ownerContainer, null));
            else
                propVal.process(container, ownerContainer, null);
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
     * @param schedulerType ID of a registered scheduler type that is used to write the property
     * value to the DOM. If undefined, the current default scheduler will be used.
     */
    setProp(name, value, important, schedulerType) {
        // first set/remove the value in our internal styleset object
        if (value == null)
            delete this.styleset[name];
        else
            this.styleset[name] = important ? { "!": value } : value;
        // second, if CSSRule alredy exists, set/remove the property value there
        if (this.cssRule) {
            Scheduling_1.s_scheduleStylePropertyUpdate(this.cssRule, UtilFuncs_1.camelToDash(name), value == null ? null : StyleFuncs_1.stylePropToString(name, value, true), important, schedulerType);
        }
    }
    /**
     * Adds/replaces the value of the given custom CSS property in this rule.
     * @param varObj IVarRule object defining a custom CSS property.
     * @param varValue New value of the custom CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     * @param schedulerType ID of a registered scheduler type that is used to write the property
     * value to the DOM. If undefined, the current default scheduler will be used.
     */
    setCustomProp(varObj, value, important, schedulerType) {
        if (!varObj || !(varObj instanceof VarRule_1.VarRule))
            return;
        // first set/remove the value in our internal styleset object
        let currCustomProps = this.styleset["--"];
        if (currCustomProps || value != null) {
            if (value == null) {
                if (currCustomProps.length > 0) {
                    let index = currCustomProps.findIndex(item => item[0] === varObj);
                    if (index >= 0) {
                        if (currCustomProps.length === 1)
                            this.styleset["--"] = undefined;
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
        if (this.cssRule) {
            Scheduling_1.s_scheduleStylePropertyUpdate(this.cssRule, varObj.cssName, value == null ? null : StyleFuncs_1.stylePropToString(varObj.template, value, true), important, schedulerType);
        }
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
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name, this.cssName] = Rule_1.createNames(ownerContainer, ruleName, this.nameOverride, this.cssPrefix);
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
        return UtilFuncs_1.val2str(this.selector);
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
class VarRule extends Rule_1.RuleLike {
    constructor(template, value, nameOverride) {
        super();
        this.template = template;
        this.value = value;
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name, this.cssName] = Rule_1.createNames(ownerContainer, ruleName, this.nameOverride, "--");
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
     * @param schedulerType ID of a registered scheduler type that is used to write the property
     * value to the DOM. If undefined, the current default scheduler will be used.
     */
    setValue(value, important, schedulerType) {
        this.container.setCustomVarValue(this.cssName, value == null ? null : StyleFuncs_1.stylePropToString(this.template, value, true), important, schedulerType);
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
    return UtilFuncs_1.val2str(val, {
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
;
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
const StyleFuncs_1 = __webpack_require__(/*! ./StyleFuncs */ "./lib/styles/StyleFuncs.js");
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * Converts the given font face definition object to the CSS string
 */
function fontFaceToString(fontface) {
    if (!fontface || !fontface.fontFamily)
        return null;
    let s = "{";
    for (let propName in fontface) {
        s += `${UtilFuncs_1.camelToDash(propName)}:`;
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
    return UtilFuncs_1.val2str(val, {
        fromNumber: UtilFuncs_1.CssPercentMath.styleToString,
        arrFunc: UtilFuncs_1.CssPercentMath.styleToString
    });
}
function fontStyleToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromNumber: v => `oblique ${UtilFuncs_1.CssAngleMath.styleToString(v)}`,
        fromArray: v => `oblique ${UtilFuncs_1.arr2str(v, UtilFuncs_1.CssAngleMath.styleToString)}`
    });
}
function fontWeightToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromAny: UtilFuncs_1.CssNumberMath.styleToString
    });
}
function fontSrcToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromAny: fontSingleSrcToString,
        arrSep: ","
    });
}
function fontSingleSrcToString(val) {
    return StyleFuncs_1.obj2str(val, [
        ["local", v => `local(${v})`],
        ["url", v => `url(${v})`],
        ["format", v => `format(${fontFormatToString(v)})`]
    ]);
}
function fontFormatToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromString: v => `\"${v}\"`,
        arrSep: ","
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
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
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
    return UtilFuncs_1.val2str(query, {
        fromAny: singleMediaQueryToString,
        arrSep: ","
    });
}
exports.mediaQueryToString = mediaQueryToString;
/**
 * Converts the given media query object to the CSS media query string
 */
function singleMediaQueryToString(query) {
    if (!query)
        return "";
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
    let realFeatureName = UtilFuncs_1.camelToDash(featureName);
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
        return UtilFuncs_1.arr2str(propVal);
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
    let v0 = UtilFuncs_1.val2str(val[0]);
    let v1n = val[1];
    // the '!v1n' expression covers null, undefined and 0.
    let v1 = !v1n ? "" : v1n > 0 ? "+" + UtilFuncs_1.val2str(v1n) : "-" + UtilFuncs_1.val2str(-v1n);
    return `${v0}n${v1}`;
}
/**
 * Returns a string representation of a selector.
 */
function selectorToString(val) {
    return UtilFuncs_1.val2str(val, {
        arrSep: ""
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
        return UtilFuncs_1.val2str(val, { fromArray: nthTupleToString });
    else
        return UtilFuncs_1.val2str(val);
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
    return obj2str(val, [
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
    return UtilFuncs_1.val2str(val, {
        fromObj: singleAnimation_fromObject
    });
}
function timingFunctionToString(val) {
    return UtilFuncs_1.val2str(val, {
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
        : UtilFuncs_1.arr2str(val, singleTimingFunction_fromStyle, ",");
}
function singleTimingFunction_fromStyle(val) {
    return UtilFuncs_1.val2str(val, {
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
    return obj2str(val, [
        ["color", ColorFuncs_1.colorToString],
        "image",
        ["position", UtilFuncs_1.pos2str],
        ["size", multiLengthToStringWithSpace, "/"],
        "repeat",
        "attachment",
        "origin",
        "clip"
    ]);
}
function singleBackground_fromStyle(val) {
    return UtilFuncs_1.val2str(val, {
        fromNumber: ColorFuncs_1.colorToString,
        fromObj: singleBackground_fromObject
    });
}
function singleBackgroundSize_fromStyle(val) {
    return UtilFuncs_1.val2str(val, {
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
    return obj2str(valCopy, [
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
    return UtilFuncs_1.val2str(val, {
        fromNumber: UtilFuncs_1.unitlessOrPercentToString,
        arrFunc: v => UtilFuncs_1.val2str(v, {
            fromBool: () => "fill",
            fromNumber: UtilFuncs_1.unitlessOrPercentToString,
        })
    });
}
function singleBoxShadow_fromObject(val) {
    return obj2str(val, [
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
    return UtilFuncs_1.val2str(val, {
        arrFunc: UtilFuncs_1.CssLengthMath.styleToString,
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
/**
 * Converts border radius style value to the CSS string.
 */
function borderRadiusToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromArray: v => {
            if (Array.isArray(v[0])) {
                // two MultiCornerRadius values
                let s = UtilFuncs_1.arr2str(v[0], UtilFuncs_1.CssLengthMath.styleToString, " ");
                s += " / ";
                return s + UtilFuncs_1.arr2str(v[1], UtilFuncs_1.CssLengthMath.styleToString, " ");
            }
            else {
                // single MultiCornerRadius value
                return UtilFuncs_1.arr2str(v, UtilFuncs_1.CssLengthMath.styleToString, " ");
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
    return UtilFuncs_1.val2str(val, {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        fromArray: v => {
            let buf = [];
            if (v[0] != null)
                buf.push(UtilFuncs_1.CssLengthMath.styleToString(v[0]));
            if (v[1] != null)
                buf.push(UtilFuncs_1.val2str(v[1]));
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
    return UtilFuncs_1.val2str(val, {
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
    return UtilFuncs_1.val2str(val, {
        fromArray: v => {
            if (v.length === 0)
                return "";
            else if (v.length === 1)
                return UtilFuncs_1.val2str(v);
            else if (typeof v[1] === "number")
                return UtilFuncs_1.val2str(v, { arrSep: " " });
            else {
                return UtilFuncs_1.val2str(v, {
                    arrFunc: cursorToString,
                    arrSep: ","
                });
            }
        }
    });
}
/**
 * Converts flex style value to the CSS string.
 */
function flexToString(val) {
    return UtilFuncs_1.val2str(val, {
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
    return obj2str(val, [
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
    return UtilFuncs_1.val2str(val, {
        fromNumber: v => "oblique " + UtilFuncs_1.CssAngleMath.styleToString(v)
    });
}
function gridTemplateAreasToString(val) {
    // val can be array of functions (IQuotedProxy[]) or arrays (GridTemplateArea_Definition[])
    return UtilFuncs_1.val2str(val, {
        fromArray: v => {
            if (v.length === 0)
                return "";
            else if (typeof v[0] === "function")
                return UtilFuncs_1.arr2str(v);
            else
                return createGridTemplateAreasFromDefinitions(v);
        }
    });
}
/**
 * Converts the array of GridTemplateArea_Definition objects to a string that is suitable for
 * the grid-template-areas format.
 */
function createGridTemplateAreasFromDefinitions(defs) {
    // calculate total size of the matrix from the areas' sizes
    let rowCount = 0, colCount = 0;
    for (let def of defs) {
        rowCount = Math.max(rowCount, def[3]);
        colCount = Math.max(colCount, def[4]);
    }
    if (rowCount === 0 || colCount === 0)
        return "";
    // create array of rows where every element is an array of cells
    let matrix = new Array(rowCount);
    for (let i = 0; i < rowCount; i++)
        matrix[i] = new Array(colCount);
    // go over definitions and fill the appropriate places in the cells with area names
    for (let def of defs) {
        let name = UtilFuncs_1.val2str(def[0]);
        for (let i = def[1]; i <= def[3]; i++) {
            for (let j = def[2]; j <= def[4]; j++)
                matrix[i - 1][j - 1] = name;
        }
    }
    // go over our matrix and for every row create a quoted string. Since our cell arrays may be
    // sparse, use dot for the undefined cells
    let s = "";
    for (let i = 0; i < rowCount; i++) {
        let rowNames = [];
        for (let j = 0; j < rowCount; j++) {
            let name = matrix[i][j];
            rowNames.push(name ? name : ".");
        }
        s += `"${rowNames.join(" ")}"\n`;
    }
    return s;
}
function gridTrackToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromNumber: v => UtilFuncs_1.CssLengthMath.styleToString(v),
        fromArray: v => `[${UtilFuncs_1.arr2str(v)}]`
    });
}
exports.gridTrackToString = gridTrackToString;
function gridAxisToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromNumber: v => UtilFuncs_1.CssLengthMath.styleToString(v),
        arrFunc: gridTrackToString
    });
}
function markerStyleToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromObj: v => `url(#${val.name})`
    });
}
function rotateToString(val) {
    return UtilFuncs_1.val2str(val, {
        fromArray: v => {
            if (v.length === 2)
                return `${v[0]} ${UtilFuncs_1.CssAngleMath.styleToString(v[1])}`;
            else
                return `${v[0]} ${v[1]} ${v[2]} ${UtilFuncs_1.CssAngleMath.styleToString(v[3])}`;
        }
    });
}
function textDecoration_fromObject(val) {
    return obj2str(val, [
        "line",
        "style",
        ["color", ColorFuncs_1.colorToString],
        ["thickness", UtilFuncs_1.CssLengthMath.styleToString],
    ]);
}
function singleTransition_fromObject(val) {
    return obj2str(val, [
        ["property", UtilFuncs_1.camelToDash],
        ["duration", UtilFuncs_1.CssTimeMath.styleToString],
        ["func", singleTimingFunction_fromStyle],
        ["delay", UtilFuncs_1.CssTimeMath.styleToString]
    ]);
}
function singleTransition_fromStyle(val) {
    return UtilFuncs_1.val2str(val, {
        fromObj: singleTransition_fromObject
    });
}
function offsetToString(val) {
    return obj2str(val, [
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
function obj2str(val, info, separator = " ") {
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
            buf.push(UtilFuncs_1.val2str(propVal));
        else if (typeof convertor === "string")
            buf.push(stylePropToString(convertor, propVal, true));
        else
            buf.push(convertor(propVal));
    });
    return buf.join(separator);
}
exports.obj2str = obj2str;
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
 * Converts the given style property to the CSS style string. Property name can be in either
 * dash or camel form.
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
        ? UtilFuncs_1.val2str(varValue)
        : typeof info === "object"
            ? UtilFuncs_1.val2str(varValue, info)
            : typeof info === "number"
                ? valueToStringByWellKnownFunc(varValue, info)
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
/**
 * Converts the given value to string using a well-known function indicated by the given
 * enumeration value.
 * @param val
 * @param funcType
 */
function valueToStringByWellKnownFunc(val, funcType) {
    switch (funcType) {
        case 1 /* Length */: return UtilFuncs_1.CssLengthMath.styleToString(val);
        case 2 /* MultiLengthWithSpace */: return multiLengthToStringWithSpace(val);
        case 3 /* Color */: return ColorFuncs_1.colorToString(val);
        case 4 /* Border */: return borderToString(val);
        case 5 /* Position */: return UtilFuncs_1.pos2str(val);
        case 6 /* CornerRadius */: return singleCornerRadiusToString(val);
        default: return "";
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Registry of CSS properties that specifies how their values should be converted to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
// Helper object that is used to indicate that values in an array should be separated by a comma.
// We use it many times in the stucture below.
let commaArraySeparator = { arrSep: "," };
// Helper object that is used to indicate that values in an array should be separated by a slash.
// We use it many times in the stucture below.
let slashArraySeparator = { arrSep: "/" };
/**
 * Map of property names to the StylePropertyInfo objects describing custom actions necessary to
 * convert the property value to the CSS-compliant string.
 */
const StylePropertyInfos = {
    animation: {
        fromObj: singleAnimation_fromObject,
        fromAny: singleAnimation_fromStyle,
        arrSep: ",",
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
        fromObj: singleBackground_fromObject,
        fromAny: singleBackground_fromStyle,
        arrFunc: singleBackground_fromStyle,
        arrSep: ",",
    },
    backgroundAttachment: commaArraySeparator,
    backgroundBlendMode: commaArraySeparator,
    backgroundClip: commaArraySeparator,
    backgroundColor: 3 /* Color */,
    backgroundOrigin: commaArraySeparator,
    backgroundPosition: v => UtilFuncs_1.multiPos2str(v, ","),
    backgroundRepeat: commaArraySeparator,
    backgroundSize: {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        arrFunc: singleBackgroundSize_fromStyle,
        arrSep: ","
    },
    baselineShift: 1 /* Length */,
    border: 4 /* Border */,
    borderBlockEnd: 4 /* Border */,
    borderBlockEndColor: 3 /* Color */,
    borderBlockEndWidth: 1 /* Length */,
    borderBlockStart: 4 /* Border */,
    borderBlockStartColor: 3 /* Color */,
    borderBlockStartWidth: 1 /* Length */,
    borderBottom: 4 /* Border */,
    borderBottomColor: 3 /* Color */,
    borderBottomLeftRadius: 6 /* CornerRadius */,
    borderBottomRightRadius: 6 /* CornerRadius */,
    borderBottomWidth: 1 /* Length */,
    borderColor: {
        arrFunc: ColorFuncs_1.colorToString,
        fromAny: ColorFuncs_1.colorToString
    },
    borderImage: {
        fromObj: borderImageToString,
    },
    borderImageSlice: borderImageSliceToString,
    borderInlineEnd: 4 /* Border */,
    borderInlineEndColor: 3 /* Color */,
    borderInlineEndWidth: 1 /* Length */,
    borderInlineStart: 4 /* Border */,
    borderInlineStartColor: 3 /* Color */,
    borderInlineStartWidth: 1 /* Length */,
    borderLeft: 4 /* Border */,
    borderLeftColor: 3 /* Color */,
    borderLeftWidth: 1 /* Length */,
    borderRadius: borderRadiusToString,
    borderRight: 4 /* Border */,
    borderRightColor: 3 /* Color */,
    borderRightWidth: 1 /* Length */,
    borderSpacing: 2 /* MultiLengthWithSpace */,
    borderTop: 4 /* Border */,
    borderTopColor: 3 /* Color */,
    borderTopLeftRadius: 6 /* CornerRadius */,
    borderTopRightRadius: 6 /* CornerRadius */,
    borderTopWidth: 1 /* Length */,
    borderWidth: 2 /* MultiLengthWithSpace */,
    bottom: 1 /* Length */,
    boxShadow: {
        fromObj: singleBoxShadow_fromObject,
        arrSep: ",",
    },
    caretColor: 3 /* Color */,
    clip: {
        fromArray: v => `rect(${multiLengthToStringWithSpace(v)}`
    },
    color: 3 /* Color */,
    columnGap: 1 /* Length */,
    columnRule: 4 /* Border */,
    columnRuleColor: 3 /* Color */,
    columnRuleWidth: 2 /* MultiLengthWithSpace */,
    columns: columnsToString,
    columnWidth: 1 /* Length */,
    cursor: cursorToString,
    fill: 3 /* Color */,
    fillOpacity: UtilFuncs_1.CssPercentMath.styleToString,
    flex: flexToString,
    flexBasis: 1 /* Length */,
    floodColor: 3 /* Color */,
    font: {
        fromObj: font_fromObject
    },
    fontSize: 1 /* Length */,
    fontStyle: fontStyleToString,
    gap: 2 /* MultiLengthWithSpace */,
    gridColumnGap: 1 /* Length */,
    gridGap: 2 /* MultiLengthWithSpace */,
    gridRowGap: 1 /* Length */,
    gridArea: slashArraySeparator,
    gridAutoColumns: gridAxisToString,
    gridAutoRows: gridAxisToString,
    gridColumn: slashArraySeparator,
    gridRow: slashArraySeparator,
    gridTemplateAreas: gridTemplateAreasToString,
    gridTemplateColumns: gridAxisToString,
    gridTemplateRows: gridAxisToString,
    height: 1 /* Length */,
    inlineSize: 1 /* Length */,
    left: 1 /* Length */,
    letterSpacing: 1 /* Length */,
    lightingColor: 3 /* Color */,
    margin: 2 /* MultiLengthWithSpace */,
    marginBlockEnd: 1 /* Length */,
    marginBlockStart: 1 /* Length */,
    marginBottom: 1 /* Length */,
    marginInlineEnd: 1 /* Length */,
    marginInlineStart: 1 /* Length */,
    marginLeft: 1 /* Length */,
    marginRight: 1 /* Length */,
    marginTop: 1 /* Length */,
    markerEnd: markerStyleToString,
    markerMid: markerStyleToString,
    markerStart: markerStyleToString,
    maxBlockSize: 1 /* Length */,
    maxHeight: 1 /* Length */,
    maxInlineSize: 1 /* Length */,
    maxWidth: 1 /* Length */,
    minBlockSize: 1 /* Length */,
    minHeight: 1 /* Length */,
    minInlineSize: 1 /* Length */,
    minWidth: 1 /* Length */,
    objectPosition: 5 /* Position */,
    offset: offsetToString,
    offsetAnchor: 5 /* Position */,
    offsetDistance: 1 /* Length */,
    offsetPosition: 5 /* Position */,
    offsetRotate: {
        fromAny: UtilFuncs_1.CssAngleMath.styleToString
    },
    outline: 4 /* Border */,
    outlineColor: 3 /* Color */,
    outlineOffset: 1 /* Length */,
    padding: 2 /* MultiLengthWithSpace */,
    paddingBlockEnd: 1 /* Length */,
    paddingBlockStart: 1 /* Length */,
    paddingBottom: 1 /* Length */,
    paddingInlineEnd: 1 /* Length */,
    paddingInlineStart: 1 /* Length */,
    paddingLeft: 1 /* Length */,
    paddingRight: 1 /* Length */,
    paddingTop: 1 /* Length */,
    perspective: 1 /* Length */,
    perspectiveOrigin: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    quotes: {
        arrFunc: v => `"${v}"`
    },
    right: 1 /* Length */,
    rotate: rotateToString,
    rowGap: 1 /* Length */,
    scrollbarColor: {
        arrFunc: ColorFuncs_1.colorToString
    },
    scrollMargin: 2 /* MultiLengthWithSpace */,
    scrollMarginBlock: 2 /* MultiLengthWithSpace */,
    scrollMarginBlockEnd: 1 /* Length */,
    scrollMarginBlockStart: 1 /* Length */,
    scrollMarginBottom: 1 /* Length */,
    scrollMarginInline: 2 /* MultiLengthWithSpace */,
    scrollMarginInlineEnd: 1 /* Length */,
    scrollMarginInlineStart: 1 /* Length */,
    scrollMarginLeft: 1 /* Length */,
    scrollMarginRight: 1 /* Length */,
    scrollMarginTop: 1 /* Length */,
    scrollPadding: 2 /* MultiLengthWithSpace */,
    scrollPaddingBlock: 2 /* MultiLengthWithSpace */,
    scrollPaddingBlockEnd: 1 /* Length */,
    scrollPaddingBlockStart: 1 /* Length */,
    scrollPaddingBottom: 1 /* Length */,
    scrollPaddingInline: 2 /* MultiLengthWithSpace */,
    scrollPaddingInlineEnd: 1 /* Length */,
    scrollPaddingInlineStart: 1 /* Length */,
    scrollPaddingLeft: 1 /* Length */,
    scrollPaddingRight: 1 /* Length */,
    scrollPaddingTop: 1 /* Length */,
    shapeMargin: 1 /* Length */,
    stopColor: 3 /* Color */,
    stroke: 3 /* Color */,
    tabSize: 1 /* Length */,
    textCombineUpright: {
        fromNumber: v => `digits ${v}`
    },
    textDecoration: {
        fromNumber: ColorFuncs_1.colorToString,
        fromObj: textDecoration_fromObject
    },
    textDecorationColor: 3 /* Color */,
    textDecorationThickness: 1 /* Length */,
    textEmphasis: {
        arrFunc: ColorFuncs_1.colorToString
    },
    textEmphasisColor: 3 /* Color */,
    textIndent: {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        arrFunc: UtilFuncs_1.CssLengthMath.styleToString
    },
    textShadow: {
        fromObj: singleBoxShadow_fromObject,
        arrSep: ",",
    },
    textSizeAdjust: UtilFuncs_1.CssPercentMath.styleToString,
    top: 1 /* Length */,
    transformOrigin: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    transition: {
        fromObj: singleTransition_fromObject,
        fromAny: singleTransition_fromStyle,
        arrSep: ",",
    },
    transitionDelay: {
        fromAny: UtilFuncs_1.CssTimeMath.styleToString,
        arrSep: ","
    },
    transitionDuration: {
        fromAny: UtilFuncs_1.CssTimeMath.styleToString,
        arrSep: ","
    },
    transitionTimingFunction: timingFunctionToString,
    translate: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    verticalAlign: {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString
    },
    width: 1 /* Length */,
    willChange: {
        fromString: UtilFuncs_1.camelToDash
    },
    wordSpacing: 1 /* Length */,
    zoom: UtilFuncs_1.CssPercentMath.styleToString,
    // special properties for IVarRule types
    "CssLength": 1 /* Length */,
    "CssAngle": UtilFuncs_1.CssAngleMath.styleToString,
    "CssTime": UtilFuncs_1.CssTimeMath.styleToString,
    "CssResolution": UtilFuncs_1.CssResolutionMath.styleToString,
    "CssFrequency": UtilFuncs_1.CssFrequencyMath.styleToString,
    "CssPercent": UtilFuncs_1.CssPercentMath.styleToString,
    "CssPosition": 5 /* Position */,
    "CssColor": 3 /* Color */,
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
function val2str(val, options) {
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
            return arr2str(val);
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
            return val2str(options.funcArgs ? val(...options.funcArgs) : val());
        else if (Array.isArray(val)) {
            if (options.fromArray)
                return options.fromArray(val);
            else {
                let separator = options.arrSep != null ? options.arrSep : " ";
                return arr2str(val, options.arrFunc || options.fromAny || undefined, separator);
            }
        }
        else if (typeof val === "object") {
            if (typeof val.valueToString === "function")
                return val.valueToString();
            else if (options.fromObj)
                return options.fromObj(val);
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
exports.val2str = val2str;
/**
 * Converts an array of the given typeto a single string using the given separator.
 * Elements of the array are converted to strings using the given function.
 */
function arr2str(val, func, separator = " ") {
    return !val || val.length === 0
        ? ""
        : val.filter(x => x != null).map(y => func ? func(y) : val2str(y)).join(separator);
}
exports.arr2str = arr2str;
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
        s += parts[i] + (convertFunc ? convertFunc(params[i]) : val2str(params[i]));
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
function numberBaseToString(val, convertFunc) {
    return val2str(val, { fromNumber: convertFunc });
}
/**
 * Converts single CssNumber or array of CssNumber objects to the CSS string.
 * @param val Single- or multi-number style value.
 * @param convertFunc Function that converts a number to a string.
 * @param separator String to use to separate multiple values.
 */
function multiStyleToString(val, convertFunc, separator = " ") {
    return val2str(val, {
        fromNumber: convertFunc,
        arrFunc: v => numberBaseToString(v, convertFunc),
        arrSep: separator
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
    return `calc(${templateStringToString(parts, params, (v) => numberBaseToString(v, convertFunc))})`;
}
/**
 * The NummberBaseMath class contains methods that implement CSS mathematic functions on the
 * numeric CSS types. When arguments for these functions are of the number JavaScript type they
 * are converted to strings by calling a function specified in the constructor.
 */
class NumberBaseMath {
    constructor(convertFunc) {
        this.convertFunc = convertFunc;
        this.numberToString = (n) => {
            return this.convertFunc(n);
        };
        this.styleToString = (val) => {
            return numberBaseToString(val, this.convertFunc);
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
class CssNumberMath extends NumberBaseMath {
    static convertFunc(n) { return n.toString(); }
    static styleToString(val) { return numberBaseToString(val, CssNumberMath.convertFunc); }
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
class CssPercentMath extends NumberBaseMath {
    static convertFunc(n) { return (Number.isInteger(n) ? n : Math.round(n * 100)) + "%"; }
    static styleToString(val) { return numberBaseToString(val, CssPercentMath.convertFunc); }
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
class CssLengthMath extends NumberBaseMath {
    static convertFunc(n) { return numberToString(n, "px", "em"); }
    static styleToString(val) { return numberBaseToString(val, CssLengthMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssLengthMath.convertFunc, separator); }
    constructor() { super(CssLengthMath.convertFunc); }
    minmax(min, max) {
        return () => mathFunc("minmax", [min, max], CssLengthMath.convertFunc);
    }
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
class CssAngleMath extends NumberBaseMath {
    static convertFunc(n) { return numberToString(n, "deg", "turn"); }
    static styleToString(val) { return numberBaseToString(val, CssAngleMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssAngleMath.convertFunc, separator); }
    constructor() { super(CssAngleMath.convertFunc); }
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
class CssTimeMath extends NumberBaseMath {
    static convertFunc(n) { return numberToString(n, "ms", "s"); }
    static styleToString(val) { return numberBaseToString(val, CssTimeMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssTimeMath.convertFunc, separator); }
    constructor() { super(CssTimeMath.convertFunc); }
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
class CssResolutionMath extends NumberBaseMath {
    static convertFunc(n) { return numberToString(n, "dpi", "x"); }
    static styleToString(val) { return numberBaseToString(val, CssResolutionMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssResolutionMath.convertFunc, separator); }
    constructor() { super(CssResolutionMath.convertFunc); }
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
class CssFrequencyMath extends NumberBaseMath {
    static convertFunc(n) { return numberToString(n, "Hz", "kHz"); }
    static styleToString(val) { return numberBaseToString(val, CssFrequencyMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssFrequencyMath.convertFunc, separator); }
    constructor() { super(CssFrequencyMath.convertFunc); }
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
function pos2str(val) {
    return val2str(val, {
        fromNull: v => "",
        fromNumber: CssLengthMath.styleToString,
        fromArray: v => CssLengthMath.multiStyleToString(v, " ")
    });
}
exports.pos2str = pos2str;
/**
 * Converts multi-position style value to the CSS string.
 */
function multiPos2str(val, separator) {
    return val2str(val, {
        arrFunc: pos2str,
        arrSep: separator
    });
}
exports.multiPos2str = multiPos2str;


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
;
;
;
;
;
;
;
;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU2NoZWR1bGluZ0FQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1N0eWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvVXRpbEFQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvbWltY3NzVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0FuaW1hdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0NvdW50ZXJSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JpZFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2NoZWR1bGluZy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL01lZGlhRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TZWxlY3RvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtE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QUFDO0FBTkQsb0NBTUM7Ozs7Ozs7Ozs7Ozs7O0FDbmlCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHOztBQXdLK0QsQ0FBQztBQTZCQyxDQUFDO0FBc0NILENBQUM7QUFpQ0gsQ0FBQztBQStCSCxDQUFDO0FBK0JXLENBQUM7QUErQkgsQ0FBQztBQWtFZixDQUFDO0FBZ0IzRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOztHQUVHO0FBQ0gsTUFBc0IsYUFBYTs7QUFBbkMsc0NBUUM7QUFOZ0Isa0JBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUN0QyxpQkFBRyxHQUFHLDRCQUE0QixDQUFDO0FBQ25DLG1CQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDdkMsaUJBQUcsR0FBRyxzQ0FBc0MsQ0FBQztBQUM3QyxtQkFBSyxHQUFHLCtCQUErQixDQUFDO0FBQ3hDLG9CQUFNLEdBQUcsb0NBQW9DLENBQUMiLCJmaWxlIjoibWltY3NzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW1jc3NUeXBlcy5qc1wiKTtcbiIsIu+7v2ltcG9ydCAqIGFzIENvbG9yVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIHdpdGhcclxuICogdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MucmdiVG9TdHJpbmcoIHIsIGcsIGIsIGEpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyBodWUtc2F0dXJhdGlvbi1saWdodG5lc3MgY29tcG9uZW50cyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3JcclxuICogdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgSHVlIGNvbXBvbmVudCBpcyB0cmVhdGVkIGFzIHRoZSBDU1MgYDxhbmdsZT5gIHR5cGUuIE51bWJlcnMgYXJlIGNvbnNpZGVyZWQgZGVncmVlcy5cclxuICogXHJcbiAqIFRoZSBTYXR1cmF0aW9uIGFuZCBMaWdodG5lc3MgY29tcG9uZW50cyBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlczpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKlxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gaCBIdWUgY29tcG9uZW50IGFzIGFuIGFuZ2xlIHZhbHVlLlxyXG4gKiBAcGFyYW0gcyBTYXR1cmF0aW9uIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyLCBsOiBudW1iZXIsIGE/OiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmhzbFRvU3RyaW5nKCBoLCBzLCBsLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgdGhlIGFscGhhIG1hc2sgdG8gdGhlIENTUyBDb2xvciByZXByZXNlbnRhdGlvbi4gVGhpc1xyXG4gKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3IgdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIG51bWVyaWMgdmFsdWUgb3IgYXMgYSBzdHJpbmcgY29sb3IgbmFtZS5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGlzIHNwZWNpZmllZCBhcyBhIG51bWJlcjpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVyIDEgdG8gMTAwIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVycyBncmVhdGVyIHRoYW4gMTAwIGFyZSBjbGFtcGVkIHRvIDEwMDtcclxuICogXHJcbiAqIEBwYXJhbSBjIENvbG9yIHZhbHVlIGFzIGVpdGhlciBhIG51bWJlciBvciBhIG5hbWVkIGNvbG9yXHJcbiAqIEBwYXJhbSBhIEFscGhhIGNoYW5uZWwgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgQ29sb3JUeXBlcy5JTmFtZWRDb2xvcnMsIGE6IG51bWJlcik6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuY29sb3JXaXRoQWxwaGFUb1N0cmluZyggYywgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc0FuZ2xlLCBDc3NMZW5ndGh9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuICAgIEdyYWRpZW50U3RvcE9ySGludCwgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgQ3Jvc3NGYWRlUGFyYW0sIElJbWFnZVByb3h5LCBSYWRpYWxHcmFkaWVudFNoYXBlLCBSYWRpYWxHcmFkaWVudFNpemUsIFxyXG4gICAgSUdyYWRpZW50LCBJTGluZWFyR3JhZGllbnQsIElSYWRpYWxHcmFkaWVudCwgSUNvbmljR3JhZGllbnRcclxufSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlVHlwZXNcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge3ZhbDJzdHIsIElOdW1iZXJCYXNlTWF0aENsYXNzLCBDc3NBbmdsZU1hdGgsIHBvczJzdHIsIENzc1BlcmNlbnRNYXRoLCBDc3NMZW5ndGhNYXRofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQgeyBFeHRlbnRLZXl3b3JkIH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JhZGllbnQgY2xhc3MgaW1wbGVtZW50cyB0aGUgSUdyYWRpZW50IGludGVyZmFjZSB1c2luZyBwcm9wZXJ0eSBnZXQgYWNjZXNzb3IsIHdoY2loIGFsbG93c1xyXG4gKiBjcmVhdGVpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGFwcHJvcHJpZW50IGdyYWRpZW50IGludGVyZmFjZS4gV2UgbmVlZCBuZXcgaW5zdGFuY2VzLCBiZWNhdXNlXHJcbiAqIHRoZSBmdW5jdGlvbnMgaW1wbGVtZW50aW5nIHRoZXNlIGNhbGxhYmxlIGludGVyZmFjZXMga2VlcCBvcHRpb25hbCBwYXJhbWV0ZXJzIGFzIHByb3BlcnRpZXMgb2ZcclxuICogdGhlIGZ1Y250aW9uIG9iamVjdHMgdGhlbXNlbHZlcy5cclxuICovXHJcbmNsYXNzIEdyYWRpZW50IGltcGxlbWVudHMgSUdyYWRpZW50XHJcbntcclxuICAgIHB1YmxpYyBnZXQgbGluZWFyKCk6IElMaW5lYXJHcmFkaWVudCB7IHJldHVybiBsaW5lYXJHcmFkaWVudEZ1bmMoIFwibGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0xpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgcmFkaWFsKCk6IElSYWRpYWxHcmFkaWVudCB7IHJldHVybiByYWRpYWxHcmFkaWVudEZ1bmMoIFwicmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ1JhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgY29uaWMoKTogSUNvbmljR3JhZGllbnQgeyByZXR1cm4gY29uaWNHcmFkaWVudEZ1bmMoIFwiY29uaWMtZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgcmVwZWF0aW5nQ29uaWMoKTogSUNvbmljR3JhZGllbnQgeyByZXR1cm4gY29uaWNHcmFkaWVudEZ1bmMoIFwicmVwZWF0aW5nLWNvbmljLWdyYWRpZW50XCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBncmFkaWVudCB2YXJpYWJsZSBwcm92aWRlcyBhY2Nlc3MgdG8gZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgbGV0IGdyYWRpZW50OiBJR3JhZGllbnQgPSBuZXcgR3JhZGllbnQoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjcm9zcy1mYWRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcm9zc0ZhZGUoIC4uLmFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBJSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3MpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIElMaW5lYXJHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgbGluZXItZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctbGluZXItZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElMaW5lYXJHcmFkaWVudFxyXG57XHJcbiAgICBsZXQgZjogYW55ID0gKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eSA9PlxyXG4gICAgICAgICgpID0+IGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5hbmdsZVBhcmFtKTtcclxuXHJcblx0Zi50byA9IChhbmdsZTogTGluZWFyR3JhZEFuZ2xlKSA9PiB7XHJcbiAgICAgICAgZi5hbmdsZVBhcmFtID0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcbiAgICBcclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJUmFkaWFsR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYHJhZGlhbC1ncmFkaWVudGAgb3JcclxuICogYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElSYWRpYWxHcmFkaWVudFxyXG57XHJcbiAgICBsZXQgZjogYW55ID0gKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eSA9PlxyXG4gICAgICAgICgpID0+IHJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5zaGFwZVBhcmFtLCBmLnNpemVQYXJhbSwgZi5wb3NQYXJhbSk7XHJcblxyXG4gICAgZi5jaXJjbGUgPSAoc2l6ZU9yRXh0ZW50PzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaGFwZVBhcmFtID0gXCJjaXJjbGVcIjtcclxuICAgICAgICBmLnNpemVQYXJhbSA9IHNpemVPckV4dGVudDtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5lbGxpcHNlID0gKHNpemVPckV4dGVudD86IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XSB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaGFwZVBhcmFtID0gXCJlbGxpcHNlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZXh0ZW50ID0gKGV4dGVudDogRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pID0+IHtcclxuICAgICAgICBmLnNpemVQYXJhbSA9IGV4dGVudDtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5hdCA9IChwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPikgPT4ge1xyXG4gICAgICAgIGYucG9zUGFyYW0gPSBwb3M7IHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJQ29uaWNHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgY29uaWMtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctY29uaWMtZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb25pY0dyYWRpZW50RnVuYyggbmFtZTogc3RyaW5nKTogSUNvbmljR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5hbmdsZVBhcmFtLCBmLnBvc1BhcmFtKTtcclxuXHJcblx0Zi5mcm9tID0gKGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUpID0+IHtcclxuICAgICAgICBmLmFuZ2xlUGFyYW0gPSBhbmdsZTtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5hdCA9IChwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPikgPT4ge1xyXG4gICAgICAgIGYucG9zUGFyYW0gPSBwb3M7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdHJldHVybiBmO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogTGluZWFyR3JhZEFuZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgYW5nbGVTdHJpbmcgPSB2YWwyc3RyKCBhbmdsZSwge1xyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsXHJcbiAgICAgICAgICAgIGZyb21TdHJpbmc6IHYgPT4gL1xcZCsuKi8udGVzdCh2KSA/IHYgOiBcInRvIFwiICsgdlxyXG4gICAgICAgIH0pICsgXCIsXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7YW5nbGVTdHJpbmd9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBzaGFwZTogUmFkaWFsR3JhZGllbnRTaGFwZSwgc2l6ZU9yRXh0ZW50OiBSYWRpYWxHcmFkaWVudFNpemUgfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPixcclxuICAgIHBvczogQ3NzUG9zaXRpb24pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgc2l6ZU9yRXh0ZW50U3RyaW5nID0gc2l6ZU9yRXh0ZW50ID8gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHNpemVPckV4dGVudCwgXCIgXCIpIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3Myc3RyKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IHNpemVPckV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtzaXplT3JFeHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIHJldHVybiBgJHtuYW1lfSgke3doYXRBbmRXaGVyZX0ke2dyYWRpZW50U3RvcHNPckhpbnRzVG9TdHJpbmcoIHN0b3BzT3JIaW50cywgQ3NzUGVyY2VudE1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbmljR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgYW5nbGU/OiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvcz86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBhbmdsZSA/IGBmcm9tICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKX1gIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3Myc3RyKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IGFuZ2xlIHx8IHBvcyA/IGAke2FuZ2xlU3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc0FuZ2xlTWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHZhbDJzdHIoIGFyZ3MsIHtcclxuICAgICAgICBhcnJGdW5jOiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGBjcm9zcy1mYWRlKCR7cGFyYW1zU3RyaW5nfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50U3RvcHNPckhpbnRzVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJCYXNlTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwubWFwKCB2ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCB2LCBtYXRoQ2xhc3MpKS5qb2luKFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnQsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJCYXNlTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB2Lmxlbmd0aCA9PT0gMCA/IFwiXCIgOiB2Lmxlbmd0aCA9PT0gMSA/IG1hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2WzBdKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZyggdiBhcyBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLCBtYXRoQ2xhc3MpXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudENvbG9yQW5kTGVuZ3RoVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogR3JhZGllbnRDb2xvckFuZExlbmd0aCxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNlY29uZFN0b3AgPSB2YWwubGVuZ3RoID4gMiA/IG1hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMl0pIDogXCJcIjtcclxuICAgIHJldHVybiBgJHtjb2xvclRvU3RyaW5nKHZhbFswXSl9ICR7bWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsxXSl9ICR7c2Vjb25kU3RvcH1gO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyb3NzRmFkZVBhcmFtVG9TdHJpbmcoIHZhbDogQ3Jvc3NGYWRlUGFyYW0pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgJHt2YWwyc3RyKHZbMF0pfSwke0Nzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcodlsxXSl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIENvbWJpbmVkU3R5bGVzZXQsIElTdHlsZVJ1bGUsIElDbGFzc1J1bGUsIElJRFJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBJQW5pbWF0aW9uUnVsZSwgSVZhclJ1bGUsXHJcbiAgICBJQ291bnRlclJ1bGUsIElHcmlkTGluZVJ1bGUsIElHcmlkQXJlYVJ1bGUsIElJbXBvcnRSdWxlLCBJRm9udEZhY2VSdWxlLCBJTmFtZXNwYWNlUnVsZSxcclxuICAgIElQYWdlUnVsZSwgU3R5bGVEZWZpbml0aW9uLCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIElTdXBwb3J0c1J1bGUsIElNZWRpYVJ1bGVcclxufSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7cHJvY2Vzc0luc3RhbmNlT3JDbGFzcywgc19lbmFibGVTaG9ydE5hbWVzfSBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7Q3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0UnVsZSwgQ2xhc3NSdWxlLCBJRFJ1bGUsIFNlbGVjdG9yUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1N0eWxlUnVsZXNcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuLi9ydWxlcy9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiXHJcbmltcG9ydCB7Q291bnRlclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9Db3VudGVyUnVsZXNcIjtcclxuaW1wb3J0IHtHcmlkTGluZVJ1bGUsIEdyaWRBcmVhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyaWRSdWxlc1wiO1xyXG5pbXBvcnQge0ZvbnRGYWNlUnVsZSwgSW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZSwgUGFnZVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9NaXNjUnVsZXNcIlxyXG5pbXBvcnQge1N1cHBvcnRzUnVsZSwgTWVkaWFSdWxlfSBmcm9tIFwiLi4vcnVsZXMvR3JvdXBSdWxlc1wiXHJcbmltcG9ydCB7dmFsMnN0cn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFic3RyYWN0IHJ1bGUsIHdoaWNoIGRlZmluZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBiZSBleHRlbmRlZCBieSBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy4gQWJzdHJhY3QgcnVsZXMgZG9uJ3QgaGF2ZSBzZWxlY3RvcnMgYW5kIGFyZSBub3QgaW5zZXJ0ZWQgaW50byBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFic3RyYWN0KCBzdHlsZTogQ29tYmluZWRTdHlsZXNldCk6IElTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDbGFzc1J1bGUpOiBJQ2xhc3NSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBJRCBydWxlLiBUaGUgSUQgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBJRCBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgSUQuIFN1Y2ggSUQgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpZCggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElJRFJ1bGUpOiBJSURSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IElEUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzZWxlY3RvciBydWxlLiBTZWxlY3RvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgc3RyaW5nIG9yIHZpYSB0aGUgc2VsZWN0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN0eWxlKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlOiBDb21iaW5lZFN0eWxlc2V0KTogSVN0eWxlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBTZWxlY3RvclJ1bGUoIHNlbGVjdG9yLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBhbmltYXRpb24gcnVsZS4gVGhlIGFuaW1hdGlvbiBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGFuaW1hdGlvbiBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0b1xyXG4gKiBcImRlY2xhcmVcIiB0aGUgYW5pbWF0aW9uLiBTdWNoIGFuaW1hdGlvbiBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXNcclxuICogb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGtleWZyYW1lcyggZnJhbWVzPzogQW5pbWF0aW9uRnJhbWVbXSxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZSk6IElBbmltYXRpb25SdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEFuaW1hdGlvblJ1bGUoIGZyYW1lcywgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGN1c3RvbSB2YXJpYWJsZSBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVGhlIHZhcmlhYmxlIG5hbWUgd2lsbFxyXG4gKiBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZVxyXG4gKiBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY3VzdG9tIHZhcmlhYmxlIHJ1bGUuIFRoZVxyXG4gKiBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgdmFsdWUganVzdCB0byBcImRlY2xhcmVcIiB0aGUgdmFyaWFibGUuIFN1Y2hcclxuICogdmFyaWFibGUgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHRlbXBsYXRlOiBLLCBwcm9wVmFsPzogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0XHRcdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+KTogSVZhclJ1bGU8Sz5cclxue1xyXG5cdHJldHVybiBuZXcgVmFyUnVsZSggdGVtcGxhdGUsIHByb3BWYWwsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjb3VudGVyIG9iamVjdC4gVGhlIGNvdW50ZXIgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjb3VudGVyIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNvdW50ZXIoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZSk6IElDb3VudGVyUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGdyaWQgbGluZSBvYmplY3QuIFRoZSBsaW5lIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgZ3JpZCBsaW5lIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGdyaWRsaW5lKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZExpbmVSdWxlLFxyXG4gICAgaXNTdGFydEVuZE9yTm9uZT86IGJvb2xlYW4pOiBJR3JpZExpbmVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEdyaWRMaW5lUnVsZSggbmFtZU92ZXJyaWRlLCBpc1N0YXJ0RW5kT3JOb25lKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGdyaWQgYXJlYSBvYmplY3QuIFRoZSBhcmVhIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgZ3JpZCBhcmVhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGdyaWRhcmVhKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZEFyZWFSdWxlKTogSUdyaWRBcmVhUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBHcmlkQXJlYVJ1bGUoIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBpbXBvcnQgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaW1wb3J0KCB1cmw6IHN0cmluZywgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnksXHJcblx0c3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpOiBJSW1wb3J0UnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB1cmwsIG1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnkpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZm9udC1mYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGZvbnRmYWNlKCBmb250ZmFjZTogSUZvbnRGYWNlKTogSUZvbnRGYWNlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIGZvbnRmYWNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRuYW1lc3BhY2UoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBJTmFtZXNwYWNlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCBuYW1lc3BhY2UsIHByZWZpeCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHBhZ2UoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KTogSVBhZ2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCBwc2V1ZG9DbGFzcywgc3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3VwcG9ydHM8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LFxyXG4gICAgaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBJU3VwcG9ydHNSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IFN1cHBvcnRzUnVsZSggcXVlcnksIGluc3RPckNsYXNzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG1lZGlhPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuICAgIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cmV0dXJuIG5ldyBNZWRpYVJ1bGUoIHF1ZXJ5LCBpbnN0T3JDbGFzcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgY3JlYXRlcyB1bmlxdWUgbmFtZXMgZm9yIGFsbCBuYW1lZFxyXG4gKiBlbnRpdGllcy4gRm9yIGEgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvbmx5IGEgc2luZ2xlIGluc3RhbmNlIGlzIGNyZWF0ZWQsIG5vIG1hdHRlciBob3dcclxuICogbWFueSB0aW1lcyB0aGlzIGZ1bmN0aW9uIGlzIGludm9rZWQuIEhvd2V2ZXIsIGlmIGFuIGluc3RhbmNlLCB3aGljaCBoYXMgbm90IHlldCBiZWVuIHByb2Nlc3NlZCxcclxuICogaXMgcGFzc2VkLCB0aGVuIGEgbmV3IHNldCBvZiB1bmlxdWUgbmFtZXMgd2lsbCBiZSBjcmVhdGVkIGZvciBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHRyZXR1cm4gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3MpIGFzIFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVtYmVkcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbnRvIGFub3RoZXIgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuIFdoZW4gYWN0aXZhdGVkLFxyXG4gKiB0aGUgZW1iZWRkZWQgb2JqZWN0IGRvZXNuJ3QgY3JlYXRlIGl0cyBvd24gYDxzdHlsZT5gIGVsZW1lbnQgYnV0IHVzZXMgdGhhdCBvZiBpdHMgb3duZXIuIFRoaXNcclxuICogYWxsb3dzIGNyZWF0aW5nIG1hbnkgc21hbGwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGluc3RlYWQgb2Ygb25lIGh1Z2Ugb25lIHdpdGhvdXQgaW5jdXJyaW5nXHJcbiAqIHRoZSBvdmVyaGVhZCBvZiBtYW55IGA8c3R5bGU+YCBlbGVtZW50cy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCBhcyBvcHBvc2VkIHRvIHRoZSAkdXNlIGZ1bmN0aW9uLCB0aGUgJGVtYmVkIGZ1bmN0aW9uIGFsd2F5cyBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mXHJcbiAqIHRoZSBnaXZlbiBjbGFzcyBhbmQgZG9lc24ndCBhc3NvY2lhdGUgdGhlIGNsYXNzIHdpdGggdGhlIGNyZWF0ZWQgaW5zdGFuY2UuIFRoYXQgbWVhbnMgdGhhdCBpZlxyXG4gKiBhIGNsYXNzIGlzIGVtYmVkZGVkIGludG8gbW9yZSB0aGFuIG9uZSBcIm93bmVyXCIsIHR3byBzZXBhcmF0ZSBpbnN0YW5jZXMgb2YgZWFjaCBDU1MgcnVsZSB3aWxsIGJlXHJcbiAqIGNyZWF0ZWQgd2l0aCBkaWZmZXJlbnQgdW5pcXVlIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRlbWJlZDxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0Ly8gcmV0dXJuIGRlZmluaXRpb24gaW5zdGFuY2Ugd2l0aG91dCBwcm9jZXNzaW5nIGl0LiBUaGlzIGlzIHRoZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGRlZmludGlvblxyXG5cdC8vIHdpbGwgYmUgZW1iZWRkZWQgaW50byBhbm90aGVyIGRlZmluaXRpb24uXHJcblx0cmV0dXJuIGluc3RPckNsYXNzIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uID8gaW5zdE9yQ2xhc3MgOiBuZXcgaW5zdE9yQ2xhc3MoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVNob3J0TmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0cmV0dXJuIHNfZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlLCBwcmVmaXgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25jYXRlbmF0ZXMgdGhlIG5hbWVzIG9mIHRoZSBnaXZlbiBjbGFzc2VzIGludG8gYSBzaW5nbGUgc3RyaW5nIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIGFcclxuICogYGNsYXNzYCBwcm9wZXJ0eSBvZiBhbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBjbGFzc2VzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlcyggLi4uY2xhc3NlczogKElDbGFzc1J1bGUgfCBFeHRlbmRlZDxzdHJpbmc+KVtdKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdmFsMnN0ciggY2xhc3Nlcywge1xyXG5cdFx0YXJyRnVuYzogdiA9PiB2IGluc3RhbmNlb2YgQ2xhc3NSdWxlID8gdi5uYW1lIDogdmFsMnN0cih2KVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U3R5bGVEZWZpbml0aW9uLCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIElTY2hlZHVsZXJ9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtwcm9jZXNzSW5zdGFuY2VPckNsYXNzfSBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1xyXG4gICAgc19zY2hlZHVsZUNhbGwsIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUsIHNfZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUsXHJcbiAgICBJQWN0aXZhdG9yLCBzX3JlZ2lzdGVyU2NoZWR1bGVyLCBzX3VucmVnaXN0ZXJTY2hlZHVsZXJcclxufSBmcm9tIFwiLi4vcnVsZXMvU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmXHJcbiAqIHRoZSBpbnB1dCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIGJ1dCBhIGNsYXNzLCB3aGljaCBpcyBub3QgeWV0IGFzc29jaWF0ZWQgd2l0aCBhbiBpbnN0YW5jZSxcclxuICogdGhlIGluc3RhbmNlIGlzIGZpcnN0IGNyZWF0ZWQgYW5kIHByb2Nlc3NlZC4gTm90ZSB0aGF0IGVhY2ggc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnNcclxuICogYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSBvbmx5IHVwb24gZmlyc3QgYWN0aXZhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPihcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4sXHJcblx0c2NoZWR1bGVyVHlwZT86IG51bWJlcik6IFQgfCBudWxsXHJcbntcclxuXHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcblx0aWYgKGluc3RhbmNlKVxyXG5cdFx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5hY3RpdmF0ZSggaW5zdGFuY2UpLCBzY2hlZHVsZXJUeXBlKTtcclxuXHJcblx0cmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmRcclxuICogZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlciBnb2VzIGRvd24gdG8gMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5kZWFjdGl2YXRlKCBpbnN0YW5jZSksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgdG8gRE9NIGFsbCBzdHlsZSBjaGFuZ2VzIGNhdXNlZCBieSB0aGUgY2FsbHMgdG8gdGhlIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9uc1xyXG4gKiBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdCBhY3RpdmF0aW9uIG9mIHRoZSBnaXZlbiBzY2hlZHVsaW5nIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VET01VcGRhdGUoIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmZvcmNlRE9NVXBkYXRlKCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFsbCBzY2hlZHVsZWQgYWN0aXZhdGlvbnMgY2F1c2VkIGJ5IHRoZSBjYWxscyB0byB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zXHJcbiAqIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0IGFjdGl2YXRpb24gb2YgdGhlIGdpdmVuIHNjaGVkdWxpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxET01VcGRhdGUoIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmNhbmNlbERPTVVwZGF0ZSgpLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgYnkgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHRoYXQgYXJlXHJcbiAqIGNhbGxlZCB3aXRob3V0IGV4cGxpY2l0bHkgcHJvdmlkaW5nIHZhbHVlIHRvIHRoZSBzY2hlZHVsZXIgdHlwZSBwYXJhbWV0ZXIuIFJldHVybnMgdGhlIHR5cGUgb2ZcclxuICogdGhlIHByZXZpb3VzIGRlZmF1bHQgc2NoZWR1bGVyIG9yIDAgaWYgYW4gZXJyb3Igb2NjdXJzIChlLmcuIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBJRCBpcyBub3RcclxuICogcmVnaXN0ZXJlZCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGU6IG51bWJlcik6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxlciB0eXBlIHBhcmFtZXRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGVyVHlwZSgpOiBudW1iZXJcclxue1xyXG5cdHJldHVybiBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciwgd2hpY2hcclxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNjaGVkdWxlciggc2NoZWR1bGVyOiBJU2NoZWR1bGVyKTogbnVtYmVyXHJcbntcclxuICAgIHJldHVybiBzX3JlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBVbnJlZ2lzdGVycyBhIHNjaGVkdWxlciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZDogbnVtYmVyKTogdm9pZFxyXG57XHJcbiAgICByZXR1cm4gc191bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc0xlbmd0aCwgQ3NzUGVyY2VudCwgQ3NzQW5nbGUsIENzc051bWJlciwgT25lT3JCb3gsIENzc1BvaW50fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7U2VsZWN0b3JJdGVtLCBJU2VsZWN0b3JQcm94eX0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7XHJcblx0U3R5bGVzZXQsIEV4dGVuZGVkU3R5bGVzZXQsIFN0cmluZ1N0eWxlc2V0LCBFeHRlbnRLZXl3b3JkLCBJRmlsdGVyUHJveHksIElCYXNpY1NoYXBlUHJveHksXHJcblx0SVRyYW5zZm9ybVByb3h5LCBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlLCBGaWxsUnVsZV9TdHlsZVR5cGUsIElQYXRoQnVpbGRlciwgSVJheVByb3h5LFxyXG5cdElGaXRDb250ZW50UHJveHksIElSZXBlYXRQcm94eSwgSU1pbk1heFByb3h5LCBHcmlkVHJhY2tTaXplLCBHcmlkVHJhY2ssIElTcGFuUHJveHksIEdyaWRMaW5lQ291bnRPck5hbWVcclxufSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge1xyXG5cdHN0eWxlUHJvcFRvU3RyaW5nLCBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCwgYm9yZGVyUmFkaXVzVG9TdHJpbmcsIGZvckFsbFByb3BzSW5TdHlsc2V0LCBncmlkVHJhY2tUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7XHJcblx0Q3NzUGVyY2VudE1hdGgsIENzc0xlbmd0aE1hdGgsIGFycjJzdHIsIENzc0FuZ2xlTWF0aCwgQ3NzTnVtYmVyTWF0aCwgcG9zMnN0cixcclxuXHR0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nLCB2YWwyc3RyXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4uL3J1bGVzL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3Rvci4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZVxyXG4gKiBpbnZva2VkIHdpdGggdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yKCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogU2VsZWN0b3JJdGVtW10pOiBJU2VsZWN0b3JQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0eWxlc2V0IG1hbmlwdWxhdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byBhIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BOYW1lIFN0eWxlIHByb3BlcnR5IG5hbWUgdGhhdCBkZXRlcm1pbmVzIGhvdyB0aGUgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZFxyXG4gKiB0byBhIENTUyBjb21wbGlhbnQgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVQcm9wVmFsdWUgVmFsdWUgdG8gY29udmVydC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZVByb3BWYWx1ZTxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIHN0eWxlUHJvcE5hbWU6IEssXHJcblx0c3R5bGVQcm9wVmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiBzdHlsZVByb3BUb1N0cmluZyggc3R5bGVQcm9wTmFtZSwgc3R5bGVQcm9wVmFsdWUsIHRydWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3R5bGVzZXQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG5cdHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtLCBzdHlsZXNldCA/IHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldChzdHlsZXNldCkgOiBudWxsLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHJpbmdTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuXHRzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcbiAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggZWxtLCBudWxsLCBzdHlsZXNldCwgZmFsc2UsIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gW1tTdHlsZXNldF1dIG9iamVjdCBpbnRvIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBTdHlsZXNldCdzIHByb3BlcnR5IGlzXHJcbiAqIGNvbnZlcnRlZCB0byBpdHMgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBzdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldFxyXG57XHJcblx0bGV0IHJlczogU3RyaW5nU3R5bGVzZXQgPSB7fTtcclxuXHJcblx0Zm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0LFxyXG5cdFx0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4geyByZXNbbmFtZV0gPSB2YWx1ZSB9KTtcclxuXHJcblx0cmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgdHdvIFN0eWxlc2V0IG9iamVjdHMgYnkgY29udmVydGluZyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHN0cmluZ3MgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcbiAqIHRoYXQgY29udGFpbnMgc3RyaW5nIHZhbHVlcyBvZiBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBuZXcgb3IgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGluIHRoZSBuZXdcclxuICogc3R5bGVzZXQgYW5kIHVuZGVmaW5lZCB2YWx1ZXMgZm9yIHByb3BlcnRpZXMgdGhhdCBleGlzdCBpbiB0aGUgb2xkIHN0eWxlc2V0IGJ1dCBkb24ndCBleGlzdFxyXG4gKiBpbiB0aGUgbmV3IG9uZS5cclxuICogQHBhcmFtIG9sZFN0eWxlc2V0IFxyXG4gKiBAcGFyYW0gbmV3U3R5bGVzZXQgXHJcbiAqIEByZXR1cm5zIFN0cmluZ1N0eWxlc2V0IG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG9sZCBhbmQgbmV3XHJcbiAqIHN0eWxlc2V0cy4gUHJvcGVydGllcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIG9sZCBidXQgZG9uJ3QgZXhpc3QgaW4gdGhlIG5ldyBzdHlsZXNldCwgd2lsbCBoYXZlXHJcbiAqIHRoZWlyIHZhbHVlcyBzZXQgdG8gdW5kZWZpbmVkLiBJZiB0aGVyZSBpcyBubyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gc3R5bGVzZXRzIG51bGwgaXNcclxuICogcmV0dXJuZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZlN0eWxlc2V0cyggb2xkU3R5bGVzZXQ6IFN0eWxlc2V0LCBuZXdTdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldCB8IG51bGxcclxue1xyXG5cdGlmICghb2xkU3R5bGVzZXQgJiYgIW5ld1N0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIW9sZFN0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cdGVsc2UgaWYgKCFuZXdTdHlsZXNldClcclxuXHRcdHJldHVybiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG9sZFN0eWxlc2V0KTtcclxuXHJcblx0Ly8gZmlyc3QgY29udmVydCBib3RoIHN0eWxlc2V0cyB0byB0aGVpciBzdHJpbmcgdmVyc2lvbnNcclxuXHRsZXQgb2xkU3RyaW5nU3R5bGVzZXQgPVx0c3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBvbGRTdHlsZXNldCk7XHJcblx0bGV0IG5ld1N0cmluZ1N0eWxlc2V0ID1cdHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cclxuXHRsZXQgdXBkYXRlVmFsOiBTdHJpbmdTdHlsZXNldCB8IG51bGwgPSBudWxsO1xyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgb2xkIHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG5ldyBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBvbGRTdHJpbmdTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgbmV3U3RyaW5nVmFsID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChuZXdTdHJpbmdWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHR1cGRhdGVWYWxba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9sZFN0cmluZ1ZhbCA9IG9sZFN0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRcdGlmIChvbGRTdHJpbmdWYWwgIT09IG5ld1N0cmluZ1ZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IG5ld1N0cmluZ1ZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG5ldyBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBvbGQgb25lLiBUaGVzZVxyXG5cdC8vIHdpbGwgYmUgYWRkZWQuXHJcblx0Zm9yKCBsZXQga2V5IGluIG5ld1N0cmluZ1N0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGxldCBvbGRTdHJpbmdWYWwgPSBvbGRTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0aWYgKG9sZFN0cmluZ1ZhbCA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB1cGRhdGVWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRmlsdGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRpbmcgcGVyY2VudCB2YWx1ZSB0byBpbnZvY2F0aW9uIG9mIHRoZSBnaXZlbiBDU1MgZnVuY3Rpb24uXHJcbmZ1bmN0aW9uIHBlcmNlbnRGaWx0ZXIoIG5hbWU6IHN0cmluZywgYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBicmlnaHRuZXNzKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBicmlnaHRuZXNzKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImJyaWdodG5lc3NcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY29udHJhc3QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyYXN0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImNvbnRyYXN0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGdyYXlzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JheXNjYWxlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImdyYXlzY2FsZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnZlcnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVydCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJpbnZlcnRcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgb3BhY2l0eSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3BhY2l0eSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJvcGFjaXR5XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNhdHVyYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXR1cmF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzYXR1cmF0ZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzZXBpYSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwaWEoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2VwaWFcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYmx1cigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmx1ciggcmFkaXVzOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYmx1cigke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggcmFkaXVzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZHJvcFNoYWRvdygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSB4IEhvcml6b250YWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSB5IFZlcnRpY2FsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3Igb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGJsdXIgVmFsdWUgb2YgdGhlIHNoYWRvdydzIGJsdXJyaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxIHBpeGVsLlxyXG4gKiBAcGFyYW0gc3ByZWFkIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBzcHJlYWRpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXHJcbiAqIEBwYXJhbSBpbnNldCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2hhZG93IGdvZXMgaW5zaWRlIHRoZSBzaGFwZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHJvcFNoYWRvdyhcclxuICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHNwcmVhZD86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBgZHJvcC1zaGFkb3coJHtzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggeyB4LCB5LCBjb2xvciwgYmx1ciwgc3ByZWFkfSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGh1ZS1yb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh1ZVJvdGF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBodWUtcm90YXRlKCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyBzaGFwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaW5zZXQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2V0KCBvZmZzZXQ6IEV4dGVuZGVkPE9uZU9yQm94PENzc0xlbmd0aD4+LCByYWRpdXM/OiBFeHRlbmRlZDxCb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdGxldCByID0gcmFkaXVzICE9IG51bGwgPyBcInJvdW5kIFwiICsgYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHJhZGl1cykgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBpbnNldCgke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBvZmZzZXQsIFwiIFwiKX0ke3J9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgYSByYWRpdXMgaW4gW1tjaXJjbGVdXSBhbmQgW1tlbGxpcHNlXV0gZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSYWRpdXMgPSBFeHRlbmRlZDxDc3NMZW5ndGggfCBcImNsb3Nlc3Qtc2lkZVwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNpcmNsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlKCBjZW50ZXI/OiBTaGFwZVJhZGl1cywgcG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBJQmFzaWNTaGFwZVByb3h5XHJcbntcclxuICAgIGxldCBjID0gIGNlbnRlciAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKGNlbnRlcikgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3Myc3RyKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBjaXJjbGUoJHtjfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZWxsaXBzZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzZSggcng/OiBTaGFwZVJhZGl1cywgcnk/OiBTaGFwZVJhZGl1cyxcclxuXHRwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IHJ4cyA9ICByeCAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ4KSA6IFwiXCI7XHJcbiAgICBsZXQgcnlzID0gIHJ5ICE9IG51bGwgPyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhyeSkgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3Myc3RyKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBlbGxpcHNlKCR7cnhzfSR7cnlzfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcG9seWdvbigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbiggcG9pbnRPclJ1bGU6IENzc1BvaW50IHwgRmlsbFJ1bGVfU3R5bGVUeXBlLFxyXG5cdC4uLnBvaW50czogQ3NzUG9pbnRbXSk6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzID0gXCJwb2x5Z29uKFwiO1xyXG5cdFx0aWYgKHR5cGVvZiBwb2ludE9yUnVsZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cyArPSBwb2ludE9yUnVsZSArIFwiLFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IGAke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBwb2ludE9yUnVsZSwgXCIgXCIpfSxgO1xyXG5cclxuXHRcdHMgKz0gcG9pbnRzLm1hcCggcHQgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHB0LCBcIiBcIikpLmpvaW4oXCIsXCIpO1xyXG5cclxuXHRcdHJldHVybiBzICsgXCIpXCI7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUmF5UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmF5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXkoIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4sIHNpemU/OiBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkIHwgQ3NzTGVuZ3RoPixcclxuXHRjb250YWluPzogYm9vbGVhbik6IElSYXlQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IGFuZ2xlU3RyaW5nID0gQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKTtcclxuXHRcdGxldCBzaXplU3RyaW5nID0gc2l6ZSA9ISBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHNpemUpIDogXCJcIjtcclxuXHRcdGxldCBjb250YWluU3RyaW5nID0gY29udGFpbiA/IFwiLGNvbnRhaW5cIiA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYHJheSgke2FuZ2xlU3RyaW5nfSR7c2l6ZVN0cmluZ30ke2NvbnRhaW5TdHJpbmd9KWA7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUGF0aEJ1aWxkZXIgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIGJ1aWxkaW5nIGEgQ1NTIHBhdGguXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGF0aCggZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGUpOiBJUGF0aEJ1aWxkZXJcclxue1xyXG5cdHJldHVybiBuZXcgUGF0aEJ1aWxkZXIoIGZpbGxSdWxlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXRoQnVpbGRlciBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgb2JqZWN0IHRoYXQgYWNjdW11bGF0ZXMgcGF0aCBjb21tYW5kcyB0aGF0IGFyZSB0aGVuXHJcbiAqIGNvbnZlcnRlZCB0byBhIHN0cmluZyBwYXJhbWV0ZXIgb2YgdGhlIENTUyBgcGF0aCgpYCBmdW5jdGlvbi5cclxuICovXHJcbmNsYXNzIFBhdGhCdWlsZGVyIGltcGxlbWVudHMgSVBhdGhCdWlsZGVyXHJcbntcclxuXHRwcml2YXRlIGJ1Zjogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZpbGxSdWxlPzogRmlsbFJ1bGVfU3R5bGVUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuYnVmID0gXCJwYXRoKFwiO1xyXG5cdFx0aWYgKGZpbGxSdWxlKVxyXG5cdFx0XHR0aGlzLmJ1ZiArPSBmaWxsUnVsZSArIFwiLFwiO1xyXG5cclxuXHRcdHRoaXMuYnVmICs9IFwiJ1wiO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgc3RyaW5nXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKSA6IHN0cmluZyB7IHJldHVybiB0aGlzLmJ1ZiArIFwiJylcIjsgfVxyXG5cclxuXHJcblx0XHJcbiAgICAvLyBNb3ZlLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRwcml2YXRlIGl0ZW1zKCBjb21tYW5kOiBzdHJpbmcsIC4uLml0ZW1zOiAobnVtYmVyIHwgbnVtYmVyW10pW10pOiBJUGF0aEJ1aWxkZXJcclxuXHR7XHJcblx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIGNvbW1hbmQ7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaXRlbSBvZiBpdGVtcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBpdGVtID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdHRoaXMuYnVmICs9IFwiIFwiICsgaXRlbTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgc3ViSXRlbSBvZiBpdGVtKVxyXG5cdFx0XHRcdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBzdWJJdGVtO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgTSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiTVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBtKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJtXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgTCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiTFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBsKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJsXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgSCggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiSFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBoKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJoXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgViggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiVlwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyB2KCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJ2XCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgQyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiQ1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgYyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiY1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiU1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgcyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJzXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgUSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJRXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBxKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBUKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJUXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIHQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInRcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBBKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIkFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIGEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiYVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIHooKSB7IHRoaXMuYnVmICs9IFwiIHpcIjsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmFuc2Zvcm1zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWF0cml4KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgoIGE6IEV4dGVuZGVkPENzc051bWJlcj4sIGI6IEV4dGVuZGVkPENzc051bWJlcj4sIGM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0ZDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHg6IEV4dGVuZGVkPENzc051bWJlcj4sIHR5OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyMnN0ciggW2EsIGIsIGMsIGQsIHR4LCB0eV0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4M2QoXHJcblx0XHRhMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjE6IEV4dGVuZGVkPENzc051bWJlcj4sIGMxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGEyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzI6IEV4dGVuZGVkPENzc051bWJlcj4sIGQyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTM6IEV4dGVuZGVkPENzc051bWJlcj4sIGIzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGM0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHQpOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnIyc3RyKCBbYTEsIGIxLCBjMSwgZDEsIGEyLCBiMiwgYzIsIGQyLCBhMywgYjMsIGMzLCBkMywgYTQsIGI0LCBjNCwgZDRdLCB1bmRlZmluZWQsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcGVyc3BlY3RpdmUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKCBkOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgcGVyc3BlY3RpdmUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoZCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gQ1NTIHJvdGF0aW9uIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gcm90YXRlSW1wbCggbmFtZTogc3RyaW5nLCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWFwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWSggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVlcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVooIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVaXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlM2QoXHJcblx0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHkpLFxyXG5cdFx0Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHopLCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHJvdGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKCBjeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k/OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUoJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoY3gpfSR7c3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gc2NhbGUgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gc2NhbGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWCggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWFwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVkoIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVlcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVaKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVaXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTNkKCBzeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0c3o6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeCksIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3opXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXcoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXcoIGF4OiBFeHRlbmRlZDxDc3NBbmdsZT4sIGF5PzogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tldygke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0ke2F5ICE9IG51bGwgPyBcIixcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WCggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3WSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tld1koIGF5OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk/OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgdHJhbnNsYXRlKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpfSR7eSAhPSBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHRyYW5zbGF0ZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVYKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVhcIiwgeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVkoIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWVwiLCB5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWiggejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVaXCIsIHopO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlM2QoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcblx0ejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gR3JpZCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaXRDb250ZW50UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZml0LWNvbnRlbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpdENvbnRlbnQoIHNpemU6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRml0Q29udGVudFByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgZml0LWNvbnRlbnQoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoc2l6ZSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSU1pbk1heFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1pbm1heCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWlubWF4KCBtaW46IEdyaWRUcmFja1NpemUsIG1heDogR3JpZFRyYWNrU2l6ZSk6IElNaW5NYXhQcm94eVxyXG57XHJcbiAgICBsZXQgb3B0aW9ucyA9IHsgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyB9O1xyXG4gICAgcmV0dXJuICgpID0+IGBtaW5tYXgoJHt2YWwyc3RyKCBtaW4sIG9wdGlvbnMpfSwke3ZhbDJzdHIoIG1heCwgb3B0aW9ucyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVJlcGVhdFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJlcGVhdCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KCBjb3VudDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiB8IFwiYXV0by1maWxsXCIgfCBcImF1dG8tZmlsbFwiLFxyXG4gICAgLi4udHJhY2tzOiBHcmlkVHJhY2tbXSk6IElSZXBlYXRQcm94eVxyXG57XHJcbiAgICAvLyByZXR1cm4gKCkgPT4gYHJlcGVhdCgke3ZhbDJzdHIoY291bnQpfSwke3N0eWxlUHJvcFRvU3RyaW5nKCBcImdyaWRUZW1wbGF0ZVJvd3NcIiwgdHJhY2tzLCB0cnVlKX0pYDtcclxuICAgIHJldHVybiAoKSA9PiBgcmVwZWF0KCR7dmFsMnN0cihjb3VudCl9LCR7dmFsMnN0ciggdHJhY2tzLCB7IGFyckZ1bmM6IGdyaWRUcmFja1RvU3RyaW5nIH0pfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElTcGFuUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBzcGFuIGV4cHJlc3Npb24gZm9yIGdyaWQgbGF5b3V0cy4gSWYgdGhlIGZpcnN0XHJcbiAqIHBhcmFtZXRlciBpcyBhIG51bWJlciwgdGhlIHNlY29uZCBwYXJhbWV0ZXIgKGlmIGRlZmluZWQpIG11c3QgYmUgYSBuYW1lOyBpZiB0aGUgZmlyc3QgcGFyYW1ldGVyXHJcbiAqIGlzIGEgbmFtZSwgdGhlIHNlY29uZCBwYXJhbWV0ZXIgKGlmIGRlZmluZWQpIG11c3QgYmUgYSBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiggY291bnRPck5hbWU6IEV4dGVuZGVkPEdyaWRMaW5lQ291bnRPck5hbWU+LFxyXG4gICAgbmFtZU9yQ291bnQ/OiBFeHRlbmRlZDxHcmlkTGluZUNvdW50T3JOYW1lPik6IElTcGFuUHJveHlcclxue1xyXG4gICAgbGV0IGZpcnN0RWxtID0gdmFsMnN0cihjb3VudE9yTmFtZSk7XHJcbiAgICBsZXQgc2Vjb25kRWxtID0gbmFtZU9yQ291bnQgPyB2YWwyc3RyKCBuYW1lT3JDb3VudCkgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBzcGFuICR7Zmlyc3RFbG19ICR7c2Vjb25kRWxtfWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuXHRJQ3NzTnVtYmVyTWF0aCwgSUNzc0xlbmd0aE1hdGgsIElDc3NBbmdsZU1hdGgsIElDc3NUaW1lTWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLFxyXG4gICAgSUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NQZXJjZW50TWF0aCwgRXh0ZW5kZWQsIElTdHJpbmdQcm94eSwgSVVybFByb3h5LFxyXG4gICAgQXR0clR5cGVLZXl3b3JkLCBBdHRyVW5pdEtleXdvcmQsIElMZW5ndGhQcm94eSwgSVBlcmNlbnRQcm94eSwgSUFuZ2xlUHJveHksXHJcbiAgICBJVGltZVByb3h5LCBJUmVzb2x1dGlvblByb3h5LCBJRnJlcXVlbmN5UHJveHksIElRdW90ZWRQcm94eVxyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NOdW1iZXJNYXRoLCBDc3NMZW5ndGhNYXRoLCBDc3NBbmdsZU1hdGgsIENzc1RpbWVNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCxcclxuXHRDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgdmFsMnN0ciwgdGVtcGxhdGVTdHJpbmdUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtJVmFyUnVsZSwgSUNvdW50ZXJSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7VmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bnVtYmVyPmBcclxuICogQ1NTIHR5cGUuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXkgYXJlXHJcbiAqIGNvbnZlcnRlZCB0byBzdHJpbmdzIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1bml0cyB0byB0aGVtLlxyXG4gKi9cclxuZXhwb3J0IGxldCBOdW06IElDc3NOdW1iZXJNYXRoID0gbmV3IENzc051bWJlck1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQZXJjZW50IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudGFnZT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIFwiJVwiIHVuaXQgc3VmZml4LlxyXG4gKi9cclxuZXhwb3J0IGxldCBQZXJjZW50OiBJQ3NzUGVyY2VudE1hdGggPSBuZXcgQ3NzUGVyY2VudE1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgcGVyY2VudCB2YWx1ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudCggbjogbnVtYmVyKTogSVBlcmNlbnRQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCIlXCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBMZW4gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxsZW5ndGg+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBsZW5ndGggdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJweFwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImVtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IExlbjogSUNzc0xlbmd0aE1hdGggPSBuZXcgQ3NzTGVuZ3RoTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcXVhcnRlcnMgb2YgYW4gaW5jaCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIlFcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNoIHVuaXRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImNoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYW50aW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY20oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJjbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2FsY3VsYXRlZCBmb250LXNpemVzIG9mIHRoZSBlbGVtZW50ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImVtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBoZWlnaHRzIG9mIGxvd2VyY2FzZSBsZXR0ZXIgJ3gnIGluIHRoZSBmb250ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImV4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpYyB1bml0cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaWMoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJpY1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaW5jaGVzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiaW5cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgZWxlbWVudCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJsaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbWlsbGltZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1tKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwibW1cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpY2FzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYyggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInBjXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwb2ludHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHB0KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicHRcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpeGVscyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJweFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBibG9jayBheGlzICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YiggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZiXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2aFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBpbmxpbmUgYXhpcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmkoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2aVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdncoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2d1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gZm9udHNpemVzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJlbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJsaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJsaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIHNtYWxsZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZtYXgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2bWF4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgbGFyZ2VyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2bWluKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidm1pblwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgZm9yIGZsZXggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZyKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZnJcIjsgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5nbGUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxhbmdsZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhbiBhbmdsZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRlZ1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInR1cm5cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgQW5nbGU6IElDc3NBbmdsZU1hdGggPSBuZXcgQ3NzQW5nbGVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGRlZ3JlZXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZyggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZGVnXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHJhZGlhbnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZCggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicmFkXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGdyYWRpYW5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmFkKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJncmFkXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHR1cm5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0dXJuKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ0dXJuXCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUaW1lIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8dGltZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHRpbWUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJtc1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInNcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgVGltZTogSUNzc1RpbWVNYXRoID0gbmV3IENzc1RpbWVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gbWlsbGlzZWNvbmRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtcyggbjogbnVtYmVyKTogSVRpbWVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJtc1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyB0aW1lIHZhbHVlIGluIHNlY29uZHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHMoIG46IG51bWJlcik6IElUaW1lUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwic1wiOyB9XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZXNvbHV0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHJlc29sdXRpb24gdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkcGlcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJkcGNtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFJlc29sdXRpb246IElDc3NSZXNvbHV0aW9uTWF0aCA9IG5ldyBDc3NSZXNvbHV0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQSSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHBpKCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRwaVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQQ00gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwY20oIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBjbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwcHgoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBweFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIFggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHgoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwieFwiOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnJlcXVlbmN5IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgZnJlcXVlbmN5IHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiSHpcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJrSHpcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgRnJlcXVlbmN5OiBJQ3NzRnJlcXVlbmN5TWF0aCA9IG5ldyBDc3NGcmVxdWVuY3lNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBIZXJ0eiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHooIG46IG51bWJlcik6IElGcmVxdWVuY3lQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJoelwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gS2lsby1IZXJ0eiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ga2h6KCBuOiBudW1iZXIpOiBJRnJlcXVlbmN5UHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwia2h6XCI7IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gZW5jYXBzdWxhdGluZyB0aGUgZ2l2ZW4gc3RyaW5nLWxpa2UgcGFyYW1ldGVyLiBUaGlzIGZ1bmN0aW9uXHJcbiAqIGFsbG93cyBzcGVjaWZ5aW5nIGFyYml0cmFyeSB0ZXh0IGZvciBwcm9wZXJ0aWVzIHdob3NlIHR5cGUgbm9ybWFsbHkgZG9lc24ndCBhbGxvdyBzdHJpbmdzLlxyXG4gKiBUaGlzIGlzIHVzZWQgYXMgYW4gXCJlc2NhcGUgaGF0Y2hcIiB3aGVuIGEgc3RyaW5nIHZhbHVlIGFscmVhZHkgZXhpc3RzIGFuZCB0aGVyZSBpcyBubyBzZW5zZVxyXG4gKiB0byBjb252ZXJ0IGl0IHRvIGEgcHJvcGVyIHR5cGUuIFRoaXMgZnVuY3Rpb24gaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3QgYmUgaW52b2tlZCB3aXRoXHJcbiAqIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBhbnlbXSk6IElTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGludm9jYXRpb24gb2YgdGhlIGB2YXIoKWAgQ1NTIGZ1bmN0aW9uIGZvclxyXG4gKiB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSB3aXRoIG9wdGlvbmFsIGZhbGxiYWNrcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2V2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIGZhbGxiYWNrPzogVmFyVmFsdWVUeXBlPEs+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBmYWxsYmFja1xyXG4gICAgICAgID8gYHZhcigtLSR7dmFyT2JqLm5hbWV9LCR7c3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgZmFsbGJhY2ssIHRydWUpfSlgXHJcbiAgICAgICAgOiBgdmFyKC0tJHt2YXJPYmoubmFtZX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGB1cmwoKWAgZnVuY3Rpb24uIFRoZSBzdHJpbmcgcGFyYW1ldGVyXHJcbiAqIHdpbGwgYmUgd3JhcHBlZCBpbiBhIFwidXJsKClcIiBpbnZvY2F0aW9uLiBUaGUgZnVuY3Rpb24gY2FuIGFsc28gYWNjZXB0IHRoZSBJSURSdWxlIG9iamVjdCB0b1xyXG4gKiBjcmVhdGUgdXJsKCNlbGVtZW50KSBpbnZvY2F0aW9uLCB3aGljaCBpcyBvZnRlbiB1c2VkIHRvIGFkZHJlc3MgU1ZHIGVsZW1lbnRzIGJ5IHRoZWlyIElEcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmwoIHZhbDogRXh0ZW5kZWQ8c3RyaW5nIHwgSUlEUnVsZT4pOiBJVXJsUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBgdXJsKCR7dmFsMnN0cih2YWwpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYXR0cigpYCBDU1MgZnVuY3Rpb24uIEl0IHJldHVybnMgSVN0cmluZ1Byb3h5XHJcbiAqIGFuZCB0aGVvcmV0aWNhbGx5IGNhbiBiZSB1c2VkIGluIGFueSBzdHlsZSBwcm9wZXJ0eTsgaG93ZXZlciwgaXRzIHVzZSBieSBicm93c2VycyBpcyBjdXJyZW50bHlcclxuICogbGltaXRlZCB0byB0aGUgYGNvbnRlbnRgIHByb3BlcnR5LiBBbHNvIG5vIGJyb3dzZXIgY3VycmVudGx5IHN1cHBvcnQgdHlwZSwgdW5pdHMgb3IgZmFsbGJhY2tcclxuICogdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dHIoIGF0dHJOYW1lOiBFeHRlbmRlZDxzdHJpbmc+LCB0eXBlT3JVbml0PzogRXh0ZW5kZWQ8QXR0clR5cGVLZXl3b3JkIHwgQXR0clVuaXRLZXl3b3JkPixcclxuXHRmYWxsYmFjaz86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBhdHRyKCR7YXR0ck5hbWV9JHt0eXBlT3JVbml0ID8gXCIgXCIgKyB0eXBlT3JVbml0IDogXCJcIn0ke2ZhbGxiYWNrID8gXCIsXCIgKyBmYWxsYmFjayA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYSBzdHJpbmcgaW4gcXVvdGF0aW9uIG1hcmtzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlZCggdmFsOiBhbnkpOiBJUXVvdGVkUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBcIiR7dmFsMnN0cih2YWwpfVwiYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb3VudGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlcigpYCBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uYWxcclxuICogb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXIoIGNvdW50ZXJPYmo6IEV4dGVuZGVkPElDb3VudGVyUnVsZSB8IHN0cmluZz4sXHJcblx0c3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzdHlsZVN0cmluZyA9IHN0eWxlID8gYCwke3ZhbDJzdHIoIHN0eWxlKX1gIDogXCJcIjtcclxuXHRcdGxldCBiZWZvcmUgPSB0ZXh0QmVmb3JlID8gYFwiJHt2YWwyc3RyKCB0ZXh0QmVmb3JlKX1cImAgOiBcIlwiO1xyXG5cdFx0bGV0IGFmdGVyID0gdGV4dEFmdGVyID8gYFwiJHt2YWwyc3RyKCB0ZXh0QWZ0ZXIpfVwiYCA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYCR7YmVmb3JlfSBjb3VudGVyKCR7dmFsMnN0cihjb3VudGVyT2JqKX0ke3N0eWxlU3RyaW5nfSkgJHthZnRlcn1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGBjb3VudGVzcigpYCBmdW5jdGlvbiB3aXRoIHRoZSBnaXZlblxyXG4gKiBzZXBhcmF0b3Igc3RyaW5nIGFuZCBhZGRpdGlvbmFsIG9wdGlvbmFsIHN0cmluZ3MgYWRkZWQgYWZ0ZXIgYW5kL29yIGJlZm9yZSB0aGUgY291bnRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVycyggY291bnRlck9iajogRXh0ZW5kZWQ8SUNvdW50ZXJSdWxlIHwgc3RyaW5nPixcclxuXHRzZXBhcmF0b3I6IEV4dGVuZGVkPHN0cmluZz4sIHN0eWxlPzogRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LFxyXG5cdHRleHRBZnRlcj86IEV4dGVuZGVkPHN0cmluZz4sIHRleHRCZWZvcmU/OiBFeHRlbmRlZDxzdHJpbmc+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgc2VwU3RyaW5nID0gc2VwYXJhdG9yID8gYFwiJHt2YWwyc3RyKCBzZXBhcmF0b3IpfVwiYCA6IGBcIi5cImA7XHJcblx0XHRsZXQgc3R5bGVTdHJpbmcgPSBzdHlsZSA/IGAsJHt2YWwyc3RyKCBzdHlsZSl9YCA6IFwiXCI7XHJcblx0XHRsZXQgYmVmb3JlID0gdGV4dEJlZm9yZSA/IGBcIiR7dmFsMnN0ciggdGV4dEJlZm9yZSl9XCJgIDogXCJcIjtcclxuXHRcdGxldCBhZnRlciA9IHRleHRBZnRlciA/IGBcIiR7dmFsMnN0ciggdGV4dEFmdGVyKX1cImAgOiBcIlwiO1xyXG5cdFx0cmV0dXJuIGAke2JlZm9yZX0gY291bnRlcnMoJHt2YWwyc3RyKGNvdW50ZXJPYmopfSwke3NlcFN0cmluZ30ke3N0eWxlU3RyaW5nfSkgJHthZnRlcn1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jc3NcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0NvbG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ltYWdlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9Db2xvckFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSW1hZ2VBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N0eWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9SdWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TY2hlZHVsaW5nQVBJXCI7XHJcbiIsImltcG9ydCB7SUFuaW1hdGlvblJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBBbmltYXRpb25XYXlwb2ludCwgQW5pbWF0aW9uU3R5bGVzZXQsIElBbmltYXRpb25GcmFtZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZXNcIjtcclxuaW1wb3J0IHsgdmFsMnN0ciB9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAa2V5ZnJhbWVzIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZnJhbWVzPzogQW5pbWF0aW9uRnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoZnJhbWVzKVxyXG5cdFx0XHR0aGlzLmZyYW1lUnVsZXMgPSBmcmFtZXMubWFwKCBmcmFtZSA9PiBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCBmcmFtZVswXSwgZnJhbWVbMV0pKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRrZXlmcmFtZVJ1bGUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQW5pbWF0aW9uUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFuaW1hdGlvblJ1bGUodW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0XHRpZiAodGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRuZXdSdWxlLmZyYW1lUnVsZXMgPSB0aGlzLmZyYW1lUnVsZXMubWFwKCBmcmFtZVJ1bGUgPT4gZnJhbWVSdWxlLmNsb25lKCkgYXMgQW5pbWF0aW9uRnJhbWVSdWxlKTtcclxuXHRcdG5ld1J1bGUubmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBrZXlmcmFtZXMgJHt0aGlzLm5hbWV9IHt9YCwgcGFyZW50KSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cclxuXHRcdGxldCBjc3NLZXlmcmFtZXNSdWxlID0gdGhpcy5jc3NSdWxlIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblx0XHRmb3IoIGxldCBmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNzc0tleWZyYW1lc1J1bGUuYXBwZW5kUnVsZSggZnJhbWVSdWxlLnRvQ3NzU3RyaW5nKCkpXHJcblx0XHRcdFx0bGV0IGNzc1J1bGUgPSBjc3NLZXlmcmFtZXNSdWxlLmNzc1J1bGVzLml0ZW0oICBjc3NLZXlmcmFtZXNSdWxlLmNzc1J1bGVzLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdGlmIChjc3NSdWxlKVxyXG5cdFx0XHRcdFx0ZnJhbWVSdWxlLmNzc0tleWZyYW1lUnVsZSA9IGNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVSdWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKHgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcIkNhbm5vdCBhZGQgQ1NTIGtleWZyYW1lIHJ1bGVcIiwgeClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGNvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLiBBbmltYXRpb24gcnVsZSByZXR1cm5zIGl0cyBuYW1lLlxyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblx0XHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN0eWxlIHJ1bGVzIHJlcHJlc2VudGluZyBhbmltYXRpb24gZnJhbWVzICovXHJcblx0cHVibGljIGZyYW1lUnVsZXM6IEFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWVSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUga2V5ZnJhbWUgY2xhdXNlIGluIHRoZSBhbmltYXRpb24gcnVsZS5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25GcmFtZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50LCBzdHlsZXNldD86IEFuaW1hdGlvblN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZXNldCk7XHJcblx0XHR0aGlzLndheXBvaW50ID0gd2F5cG9pbnQ7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQW5pbWF0aW9uRnJhbWVSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIHRoaXMud2F5cG9pbnQpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHRoaXMud2F5cG9pbnQsIHtcclxuXHRcdFx0ZnJvbU51bWJlcjogdiA9PiB2ICsgXCIlXCIsXHJcblx0XHRcdGFyckZ1bmM6IHYgPT4gdmFsMnN0ciggdiwgeyBmcm9tTnVtYmVyOiB2ID0+IHYgKyBcIiVcIiB9KSxcclxuXHRcdFx0YXJyU2VwOiBcIixcIlxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHB1YmxpYyB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQ7XHJcblxyXG5cdC8qKiBTT00ga2V5ZnJhbWUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDb3VudGVyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ291bnRlclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvdW50ZXJSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJQ291bnRlclJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0XHRbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IENvdW50ZXJSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgY291bnRlciBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50ZXJOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJR3JpZExpbmVSdWxlLCBJR3JpZEFyZWFSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2V9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcmlkTGluZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgZ3JpZCBsaW5lIGRlZmluaXRpb24uIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGdyaWRcclxuICogbGluZXMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZSBncmlkIGxpbmUgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZExpbmVSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJR3JpZExpbmVSdWxlXHJcbntcclxuICAgIC8vIGlmIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZFxyXG4gICAgLy8gYmVjYXVzZSB0aGlzIGNvbnN0cnVjdG9yIGNhbiBvbmx5IGJlIGludm9rZWQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIGxpbmVzIG9mIHRoZSBHcmlkQXJlYVJ1bGVcclxuICAgIC8vIG9iamVjdC5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRMaW5lUnVsZSB8IElHcmlkQXJlYVJ1bGUsIGlzU3RhcnRFbmRPck5vbmU/OiBib29sZWFuKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IGlzU3RhcnRFbmRPck5vbmU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIGxldCBuYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuICAgICAgICBpZiAobmFtZU92ZXJyaWRlIGluc3RhbmNlb2YgR3JpZExpbmVSdWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZU92ZXJyaWRlLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IG5hbWVPdmVycmlkZS5pc1N0YXJ0RW5kT3JOb25lO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gbmFtZU92ZXJyaWRlLmFyZWFOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lT3ZlcnJpZGUgaW5zdGFuY2VvZiBHcmlkQXJlYVJ1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lT3ZlcnJpZGUubmFtZSArICh0aGlzLmlzU3RhcnRFbmRPck5vbmUgPyBcIi1zdGFydFwiIDogXCItZW5kXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gbmFtZU92ZXJyaWRlLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIG9idGFpbmVkIG5hbWUgZG9lc24ndCBoYXZlIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIgYnV0IHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXNcclxuICAgICAgICAgICAgLy8gZGVmaW5lZCAodGhhdCBpcywgaXQgaXMgZWl0aGVyIHN0YXJ0IG9yIGVuZCBsaW5lKSwgd2UgbmVlZCB0byBhcHBlbmQgdGhlIHN1ZmZpeC4gSWYgdGhlXHJcbiAgICAgICAgICAgIC8vIG9idGFpbmVkIG5hbWUgYWxyZWFkeSBoYXMgXCItc3RhcnRcIiBvciBcIi1lbmRcIiBhbmQgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBub3RcclxuICAgICAgICAgICAgLy8gZGVmaW5lZCwgd2Ugc2V0IHRoaXMgZmxhZyB0byBlaXRoZXIgdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gdGhlIHN1ZmZpeC4gTm90ZSB0aGF0IGlmXHJcbiAgICAgICAgICAgIC8vIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZC5cclxuICAgICAgICAgICAgbGV0IG5hbWVIYXNTdGFydCA9IHRoaXMubmFtZS5lbmRzV2l0aChcIi1zdGFydFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWVIYXNFbmQgPSB0aGlzLm5hbWUuZW5kc1dpdGgoXCItZW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAobmFtZUhhc1N0YXJ0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZS5zdWJzdHIoIDAsIHRoaXMubmFtZS5sZW5ndGggLSBcIi1zdGFydFwiLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZUhhc0VuZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lLnN1YnN0ciggMCwgdGhpcy5uYW1lLmxlbmd0aCAtIFwiLWVuZFwiLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID09PSB0cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lICs9IFwiLXN0YXJ0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID09PSBmYWxzZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSArPSBcIi1lbmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEdyaWRMaW5lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5pc1N0YXJ0RW5kT3JOb25lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGxpbmUgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxpbmUgaXMgYSBzdGFydCBvciBlbmQgbGluZSBvZiBhIGdyaWQgYXJlYS4gVGhlIHZhbHVlIGlzIHRydWVcclxuICAgICAqIGlmIHRoaXMgaXMgdGhlIHN0YXJ0IGxpbmU7IGZhbHNlIGlmIHRoaXMgaXMgdGhlIGVuZCBsaW5lOyBhbmQgdW5kZWZpbmVkIGlmIHRoZSBsaW5lIGlzXHJcbiAgICAgKiBub3QgcmVsYXRlZCB0byBhbnkgYXJlYS5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBpc1N0YXJ0RW5kT3JOb25lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgZ3JpZCBhcmVhIG9mIHdoaWNoIHRoZSBsaW5lIGlzIGVpdGhlciBhIHN0YXJ0IG9yIGFuIGVuZCBsaW5lLiBJdCBpcyBkZWZpbmVkXHJcbiAgICAgKiBvbmx5IGlmIHRoZSBsaW5lIG5hbWUgZW5kcyB3aXRoIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgYXJlYU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUgfCBJR3JpZEFyZWFSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JpZEFyZWFSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGdyaWQgYXJlYSBkZWZpbml0aW9uLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBncmlkXHJcbiAqIGFyZWFzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmUgZ3JpZCBhcmVhIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRBcmVhUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUdyaWRBcmVhUnVsZVxyXG57XHJcbiAgICAvLyBpZiB0aGUgbmFtZU92ZXJyaWRlIGlzIGFuIGFyZWEgcnVsZSBvYmplY3QsIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgYWx3YXlzIGRlZmluZWRcclxuICAgIC8vIGJlY2F1c2UgdGhpcyBjb25zdHJ1Y3RvciBjYW4gb25seSBiZSBpbnZva2VkIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBsaW5lcyBvZiB0aGUgR3JpZEFyZWFSdWxlXHJcbiAgICAvLyBvYmplY3QuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGUpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5lIHJ1bGVzXHJcbiAgICAgICAgdGhpcy5zdGFydExpbmUgPSBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVuZExpbmUgPSBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIGxpbmUgcnVsZXNcclxuICAgICAgICB0aGlzLnN0YXJ0TGluZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuICAgICAgICB0aGlzLmVuZExpbmUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBHcmlkQXJlYVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEdyaWRBcmVhUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgbGluZSBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFN0YXJ0IGxpbmUgb2YgdGhlIGFyZWEuICovXHJcblx0cHVibGljIHN0YXJ0TGluZTogR3JpZExpbmVSdWxlO1xyXG5cclxuICAgIC8qKiBFbmQgbGluZSBvZiB0aGUgYXJlYSBhcmVhLiAqL1xyXG5cdHB1YmxpYyBlbmRMaW5lOiBHcmlkTGluZVJ1bGU7XHJcblxyXG4gICAgLy8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZEFyZWFSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBTdHlsZURlZmluaXRpb24sIElHcm91cFJ1bGUsIElNZWRpYVJ1bGUsIElTdXBwb3J0c1J1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Z2V0Q29udGFpbmVyRnJvbUluc3RhbmNlLCBwcm9jZXNzSW5zdGFuY2VPckNsYXNzfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZX0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyb3VwUnVsZSBjbGFzcyBzZXJ2ZXMgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgZ3JvdXBpbmcgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyb3VwUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZU9yQ2xhc3MgPSBpbnN0YW5jZU9yQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICAvLyBjb250YWluZXIgdG8gd2hpY2ggb3VyIGdyb3VwbmcgcnVsZSBiZWxvbmdzIGJlY29tZXMgdGhlIHBhcmVudCBjb250YWluZXIgZm9yIHRoZVxyXG4gICAgICAgIC8vIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2VcclxuXHRcdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIHRoaXMuaW5zdGFuY2VPckNsYXNzLCBjb250YWluZXIuZ2V0RGVmaW5pdGlvbkluc3RhbmNlKCkpO1xyXG5cdFx0aWYgKCFpbnN0YW5jZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMucnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0R3JvdXBTZWxlY3RvclRleHQoKTtcclxuXHRcdGlmICghc2VsZWN0b3IpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYCR7c2VsZWN0b3J9IHt9YCwgcGFyZW50KSBhcyBDU1NHcm91cGluZ1J1bGU7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmluc2VydFJ1bGVzKCB0aGlzLmNzc1J1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGNsZWFyIHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmNsZWFyUnVsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHB1YmxpYyBnZXQgcnVsZXMoKTogVCB7IHJldHVybiB0aGlzLmluc3RhbmNlIGFzIFQ7IH1cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0dyb3VwaW5nUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCBkZWZpbmVzIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciBmb3IgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIHJ1bGVDb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3VwcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IFN1cHBvcnRzUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VD5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFN1cHBvcnRzUnVsZTxUPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0Ly8gY29udmVydCB0aGUgcXVlcnkgdG8gaXRzIHN0cmluZyBmb3JtXHJcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBxdWVyeSBpcyBzdXBwb3J0ZWQgYW5kIGlmIGl0IGlzIG5vdCwgZG9uJ3QgaW5zZXJ0IHRoZSBydWxlXHJcblx0XHRyZXR1cm4gQ1NTLnN1cHBvcnRzKCBxdWVyeVN0cmluZykgPyBgQHN1cHBvcnRzICR7cXVlcnlTdHJpbmd9YCA6IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBGbGFnIGluZGljYXRlZCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcnVsZSdzIHF1ZXJ5ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzU3VwcG9ydGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gIENTUy5zdXBwb3J0cyggc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KSk7XHJcbiAgICB9XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBzdXBwb3J0IHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHJpdmF0ZSBxdWVyeTogU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWFSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE1lZGlhUnVsZTxUPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWVkaWFSdWxlPFQ+KCB0aGlzLnF1ZXJ5LCB0aGlzLmluc3RhbmNlT3JDbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHRyZXR1cm4gYEBtZWRpYSAke21lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUZvbnRGYWNlUnVsZSwgSUltcG9ydFJ1bGUsIElQYWdlUnVsZSwgSU5hbWVzcGFjZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtmb250RmFjZVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQge1BhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRm9udEZhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBmb250LWZhY2UgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9udEZhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElGb250RmFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZm9udGZhY2U6IElGb250RmFjZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZm9udGZhY2UgPSBmb250ZmFjZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBGb250RmFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggdGhpcy5mb250ZmFjZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGZvbnQtZmFjZSAke2ZvbnRGYWNlVG9TdHJpbmcoIHRoaXMuZm9udGZhY2UpfWAsXHJcblx0XHRcdHBhcmVudCkgYXMgQ1NTRm9udEZhY2VSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0ZvbnRGYWNlUnVsZTtcclxuXHJcblx0Ly8gT2JqZWN0IGRlZmluaW5nIGZvbnQtZmFjZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBmb250ZmFjZTogSUZvbnRGYWNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1wb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltcG9ydFJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUltcG9ydFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdXJsOiBzdHJpbmcsIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudXJsID0gdXJsO1xyXG5cdFx0dGhpcy5tZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeTtcclxuXHRcdHRoaXMuc3VwcG9ydHNRdWVyeSA9IHN1cHBvcnRzUXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB0aGlzLnVybCwgdGhpcy5tZWRpYVF1ZXJ5LCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHRpZiAoIXRoaXMudXJsKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmICh0aGlzLnVybC5zdGFydHNXaXRoKFwidXJsXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJcXFwiXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCInXCIpKVxyXG5cdFx0XHR1cmwgPSB0aGlzLnVybDtcclxuXHRcdGVsc2VcclxuXHRcdFx0dXJsID0gYHVybCgke3RoaXMudXJsfSlgO1xyXG5cclxuXHRcdGxldCBzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gIXRoaXMuc3VwcG9ydHNRdWVyeSA/IFwiXCIgOiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblx0XHRpZiAoc3VwcG9ydHNRdWVyeVN0cmluZyAmJiAhc3VwcG9ydHNRdWVyeVN0cmluZy5zdGFydHNXaXRoKCBcInN1cHBvcnRzXCIpKVxyXG5cdFx0ICAgIHN1cHBvcnRzUXVlcnlTdHJpbmcgPSBgc3VwcG9ydHMoICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gKWA7XHJcblxyXG5cdFx0bGV0IG1lZGlhUXVlcnlTdHJpbmcgPSAhdGhpcy5tZWRpYVF1ZXJ5ID8gXCJcIiA6IG1lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5tZWRpYVF1ZXJ5KTtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGltcG9ydCAke3VybH0gJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSAke21lZGlhUXVlcnlTdHJpbmd9YCxcclxuXHRcdFx0cGFyZW50KSBhcyBDU1NJbXBvcnRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NJbXBvcnRSdWxlO1xyXG5cclxuXHQvLyBVUkwgdG8gaW1wb3J0IGZyb20uXHJcblx0cHVibGljIHVybDogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgc3VwcG9ydHMgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYWdlUnVsZSBjbGFzcyByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYWdlUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElQYWdlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcywgc3R5bGU/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5wc2V1ZG9DbGFzcyA9IHBzZXVkb0NsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogUGFnZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCB0aGlzLnBzZXVkb0NsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGBAcGFnZSAke3RoaXMucHNldWRvQ2xhc3MgPyB0aGlzLnBzZXVkb0NsYXNzIDogXCJcIn1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHBhZ2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NQYWdlUnVsZTtcclxuXHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRwdWJsaWMgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5hbWVzcGFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcclxuXHRcdHRoaXMucHJlZml4ID0gcHJlZml4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTmFtZXNwYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTmFtZXNwYWNlUnVsZSggdGhpcy5uYW1lc3BhY2UsIHRoaXMucHJlZml4KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLm5hbWVzcGFjZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCB1cmwgPSB0aGlzLm5hbWVzcGFjZS5zdGFydHNXaXRoKCBcInVybChcIikgPyB0aGlzLm5hbWVzcGFjZSA6IGB1cmwoJHt0aGlzLm5hbWVzcGFjZX0pYDtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQG5hbWVzcGFjZSAke3RoaXMucHJlZml4ID8gdGhpcy5wcmVmaXggOiBcIlwifSAke3VybH1gLFxyXG5cdFx0XHRwYXJlbnQpIGFzIENTU05hbWVzcGFjZVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbmFtZXNwYWNlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTTmFtZXNwYWNlUnVsZTtcclxuXHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJUnVsZSwgSU5hbWVkRW50aXR5LCBTdHlsZURlZmluaXRpb259IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgYWNjb21wYW5pZXMgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aFxyXG4gKiBhIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvKiogSW5zZXJ0cyBhbGwgcnVsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciB0byBlaXRoZXIgdGhlIHN0eWxlIHNoZWV0IG9yIGdyb3VwaW5nIHJ1bGUuICovXHJcblx0aW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRjbGVhclJ1bGVzKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBTZXRzIHRoZSBnaXZlbiB2YWx1ZSBmb3IgdGhlIGN1c3RvbSBDU1Mgcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLiAqL1xyXG5cdHNldEN1c3RvbVZhclZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUb3BMZXZlbFJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QgdGhhdCBcIm93bnNcIlxyXG4gKiB0aGUgcnVsZXMgdW5kZXIgdGhpcyBjb250YWluZXIuIEluIHBhcnRpY3VsYXIsIHRoZSBvd25lcidzIGpvYiBpcyB0byBnZW5lcmF0ZSBcInNjb3BlZFwiIHVuaXF1ZVxyXG4gKiBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvcExldmVsUnVsZUNvbnRhaW5lciBleHRlbmRzIElSdWxlQ29udGFpbmVyXHJcbntcclxuXHQvKiogR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZXNoZWV0ICovXHJcblx0Z2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlTGlrZSBhYnN0cmFjdCBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBcInJ1bGVzXCIgZGVmaW5lZCBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIC1cclxuICogd2hldGhlciB0aGV5IGNvcnJlc3BvbmQgdG8gcmVhbCBDc3NSdWxlcyAoYW5kIHRodXMgZGVyaXZlIGZyb20gdGhlIFJ1bGUgY2xhc3MpIG9yIG5vdCAoc3VjaCBhc1xyXG4gKiBjb3VudGVycywgZ3JpZCBsaW5lcyBhbmQgZ3JpZCBhcmVhcykuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUnVsZUxpa2Vcclxue1xyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcdHRoaXMub3duZXJDb250YWluZXIgPSBvd25lckNvbnRhaW5lcjtcclxuXHRcdHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBjbG9uZSgpOiBSdWxlTGlrZTtcclxuXHJcblx0Ly8gQ29udGFpbmVyIGF0IHRoZSB0b3Agb2YgdGhlIGNoYWluIG9mIGNvbnRhaW5lcnMgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuXHJcblx0cHVibGljIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgY2FuXHJcblx0Ly8gYmUgbnVsbCBmb3IgcnVsZXMgbm90IGNyZWF0ZWQgdmlhIGFzc2lnbm1lbnQgdG8gc3R5bGUgZGVmaW5pdGlvbiBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBydWxlTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuXHJcblx0cHVibGljIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgcnVsZXMuIEFzIGEgcGFyZW50IG9mIFJ1bGVDb250YWluZXIsIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGlzIGFsc28gYW4gYW5jZXN0b3IgZm9yIFN0eWxlc2hlZXQ7IGhvd2V2ZXIsIG1vc3Qgb2YgaXRzIHRoZSBmaWVsZHMgYXJlIHVuZGVmaW5lZCBpblxyXG4gKiB0ZSBTdHlsZXNoZWV0IGluc3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJUnVsZVxyXG57XHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGU7XHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdC8vIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBhY3RpdmF0ZWQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZCB7fVxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2hcclxuXHQvLyB0aGlzIHJ1bGUgYmVsb25ncywgaXMgZGVhY3RpdmF0ZWQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWQgeyB0aGlzLmNzc1J1bGUgPSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgZ2l2ZW4gcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkUnVsZVRvRE9NKCBydWxlVGV4dDogc3RyaW5nLCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlIHwgbnVsbFxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCB4KVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgQ2Fubm90IGFkZCBDU1MgcnVsZSAnJHtydWxlVGV4dH0nYCwgeClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENTU1J1bGUtZGVyaXZlZCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgYWN0dWFsbCBDU1MgcnVsZSBpbnNlcnRlZCBpbnRvXHJcblx0Ly8gdGhlIHN0eWxlcyBzaGVldCBvciB0aGUgcGFyZW50IHJ1bGUuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciBTdHlsZXNoZWV0IG9iamVjdHMuXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHNjb3BlZCBuYW1lcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5LFxyXG5cdGNzc1ByZWZpeD86IHN0cmluZyk6IFtzdHJpbmcsc3RyaW5nXVxyXG57XHJcblx0aWYgKCFydWxlTmFtZSAmJiAhbmFtZU92ZXJyaWRlKVxyXG5cdFx0cmV0dXJuIFtcIlwiLCBcIlwiXTtcclxuXHJcblx0bGV0IG5hbWUgPSAhbmFtZU92ZXJyaWRlXHJcblx0XHQ/IG93bmVyQ29udGFpbmVyLmdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZSEpXHJcblx0XHQ6IHR5cGVvZiBuYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBuYW1lT3ZlcnJpZGVcclxuXHRcdFx0OiBuYW1lT3ZlcnJpZGUubmFtZTtcclxuXHJcblx0cmV0dXJuICFjc3NQcmVmaXhcclxuXHRcdD8gW25hbWUsbmFtZV1cclxuXHRcdDogbmFtZS5zdGFydHNXaXRoKCBjc3NQcmVmaXgpXHJcblx0XHRcdD8gW25hbWUuc3Vic3RyKCBjc3NQcmVmaXgubGVuZ3RoKSwgbmFtZV1cclxuXHRcdFx0OiBbbmFtZSwgY3NzUHJlZml4ICsgbmFtZV07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzc30gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZX0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiXHJcbmltcG9ydCB7SW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZX0gZnJvbSBcIi4vTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vLyBEZWZpbmUgc3ltYm9scyB0aGF0IGFyZSB1c2VkIGZvciBrZWVwaW5nIGltcG9ydGFudCBpbmZvcm1hdGlvbiBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZSBkb24ndCB3YW50IHRvIGJlIHZpc2libGUgdG8gZGV2ZWxvcGVycy5cclxuXHJcbi8qKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBwb2ludGluZyB0byB0aGUgc2luZ2x0b24gaW5zdGFuY2UuICovXHJcbmNvbnN0IHN5bUluc3RhbmNlID0gU3ltYm9sKFwiZGVmaW5pdGlvblwiKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBwb2ludGluZyB0byB0aGUgUnVsZUNvbnRhaW5lciBvYmplY3QgdGhhdCBpc1xyXG4gKiByZXNwb25zaWJsZSBmb3IgcHJvY2Vzc2luZyBydWxlcy5cclxuICovXHJcbmNvbnN0IHN5bUNvbnRhaW5lciA9IFN5bWJvbChcImNvbnRhaW5lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlQ29udGFpbmVyIGNsYXNzIGlzIGEgc2hhZG93IHN0cnVjdHVyZSB0aGF0IGFjY29tcGFuaWVzIGV2ZXJ5IHByb2Nlc3NlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIG9iamVjdC4gU2luY2UgU3R5bGVEZWZpbml0aW9uIGNsYXNzIGlzIGFuIGV4cG9ydGVkIGNsYXNzIHZpc2libGUgdG8gZGV2ZWxvcGVycywgd2UgZG9uJ3Qgd2FudFxyXG4gKiB0byBoYXZlIGEgbG90IG9mIGZ1bmN0aW9uYWxpdHkgaW4gaXQuIFRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCBpcyBsaW5rZWQgdG8gdGhlIFN0eWxlRGVmaW5pdGlvblxyXG4gKiBvYmplY3QgdmlhIHRoZSBbc3ltUnVsZUNvbnRhaW5lcl0gc3ltYm9sLiBJdCBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHBhcnNpbmcgcnVsZVxyXG4gKiBkZWZpbml0aW9ucywgbmFtZSBhc3NpZ25tZW50IGFuZCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuICovXHJcbmNsYXNzIFJ1bGVDb250YWluZXIgaW1wbGVtZW50cyBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgbmFtZTogc3RyaW5nLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmVtYmVkZGluZ0NvbnRhaW5lciA9IGVtYmVkZGluZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvciBhcyBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBpbnN0YW5jZS4kcGFyZW50O1xyXG5cdFx0dGhpcy5vd25lciA9IGluc3RhbmNlLiRvd25lcjtcclxuXHJcblx0XHR0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9IDA7XHJcblx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3MoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2VzcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcHV0IHJlZmVyZW5jZSB0byB0aGlzIGNvbnRhaW5lciBpbiB0aGUgc3ltYm9sIHByb3BlcnR5IG9mIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdFx0dGhpcy5pbnN0YW5jZVtzeW1Db250YWluZXJdID0gdGhpcztcclxuXHJcblx0XHQvLyBnZXQgY29udGFpbmVycyBmb3IgdGhlIHBhcmVudCBhbmQgb3duZXIgc3R5bGUgZGVmaW5pdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHRpZiAodGhpcy5vd25lcilcclxuXHRcdFx0dGhpcy50b3BMZXZlbENvbnRhaW5lciA9IHRoaXMub3duZXJbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHQvLyBpZiBvdXIgY29udGFpbmVyIGhhcyBwYXJlbnQgY29udGFpbmVyLCBwcmVmaXggb3VyIG5hbWUgd2l0aCB0aGUgdXBwZXIgb25lXHJcblx0XHRpZiAodGhpcy5wYXJlbnRDb250YWluZXIpXHJcblx0XHRcdHRoaXMubmFtZSA9IGAke3RoaXMucGFyZW50Q29udGFpbmVyLm5hbWV9XyR7dGhpcy5uYW1lfWA7XHJcblxyXG5cdFx0dGhpcy5pbXBvcnRzID0gW107XHJcblx0XHR0aGlzLm5hbWVzcGFjZXMgPSBbXTtcclxuXHRcdHRoaXMudmFycyA9IFtdO1xyXG5cdFx0dGhpcy5yZWZzID0gW107XHJcblx0XHR0aGlzLm90aGVyUnVsZXMgPSBbXTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRoZW0uXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWUsIHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSZWZlcmVuY2UoIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgVmFyUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzVmFyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGVMaWtlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlTGlrZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NBcnJheSggcHJvcFZhbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJlZmVyZW5jZSB0byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gY3JlYXRlZCBieSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHByb2Nlc3NSZWZlcmVuY2UoIHJlZjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBpbnN0YW5jZSBoYXMgbm90IGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHByb2Nlc3MgaXQgYW5kIGluZGljYXRlIHRoYXQgaXQgaXNcclxuXHRcdC8vIGVtYmVkZGVkIGludG8gb3VyIGNvbnRhaW5lciBiZWNhdXNlIG9ubHkgZGVmaW5pdGlvbnMgY3JlYXRlZCB3aXRoIHRoZSAkZW1iZWQgZnVuY3Rpb25cclxuXHRcdC8vIGFyZSBub3QgcHJvY2Vzc2VkLlxyXG5cdFx0cHJvY2Vzc0luc3RhbmNlKCByZWYsIHRoaXMpO1xyXG5cdFx0dGhpcy5yZWZzLnB1c2goIHJlZik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1ZhclJ1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCB2YXJPYmo6IFZhclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAodmFyT2JqLmNvbnRhaW5lcilcclxuXHRcdFx0dmFyT2JqID0gdmFyT2JqLmNsb25lKCk7XHJcblxyXG5cdFx0dmFyT2JqLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHRcdHRoaXMudmFycy5wdXNoKCB2YXJPYmopO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY291bnRlciBvYmplY3QuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUnVsZUxpa2UoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlTGlrZTogUnVsZUxpa2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAocnVsZUxpa2UuY29udGFpbmVyKVxyXG4gICAgICAgICAgICBydWxlTGlrZSA9IHJ1bGVMaWtlLmNsb25lKCk7XHJcblxyXG4gICAgICAgIHJ1bGVMaWtlLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBSdWxlLWRlcml2ZWQgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1J1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlOiBSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGFub3RoZXIgaW5zdGFuY2UsIHdlIGNyZWF0ZSBhIGNsb25lXHJcblx0XHQvLyBvZiB0aGUgcnVsZSBhbmQgc2V0IGl0IHRvIG91ciBpbnN0YW5jZS5cclxuXHRcdGlmIChydWxlLm93bmVyQ29udGFpbmVyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUpXHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0gPSBydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBUT0RPOiBzdXBwb3J0IGFscmVhZHkgdXNlZCBydWxlcyBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJ1bGUucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cclxuXHRcdGlmIChydWxlIGluc3RhbmNlb2YgSW1wb3J0UnVsZSlcclxuXHRcdFx0dGhpcy5pbXBvcnRzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIE5hbWVzcGFjZVJ1bGUpXHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5vdGhlclJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcnVsZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzQXJyYXkoIHByb3BWYWxzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BWYWxzIHx8IHByb3BWYWxzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBwcm9wVmFsIG9mIHByb3BWYWxzKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggbnVsbCwgcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0cHVibGljIGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb25cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgc2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBhIGdsb2JhbGx5IHVuaXF1ZSBDU1MgbmFtZSBmb3IgdGhlIGdpdmVuIHJ1bGUgbmFtZSB1bmxlc3MgdGhpcyBydWxlIG5hbWUgYWxyZWFkeVxyXG5cdCAqIGV4aXN0cyBlaXRoZXIgaW4gYSBiYXNlIGNsYXNzIG9yIGluIHRoZSBjaGFpbiBvZiBwYXJlbnQgZ3JvdXBpbmcgcnVsZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gaWYgcnVsZSBuYW1lIHdhcyBub3Qgc3BlY2lmaWVkLCBnZW5lcmF0ZSBpdCB1bmlxdWVseTsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHdlXHJcblx0XHQvLyBhbHJlYWR5IGhhdmUgdGhpcyBydWxlIG5hbWU6IGlmIHllcywgcmV0dXJuIHRoZSBhbHJlYWR5IGFzc2lnbmVkIG5hbWUuIElmIHdlIGRpZG4ndFxyXG5cdFx0Ly8gZmluZCB0aGUgbmFtZSwgdHJ5IHRvIGZpbmQgaXQgaW4gdGhlIGJhc2UgY2xhc3Nlcyk7IGlmIG5vdCBmb3VuZCB0aGVyZSwgZ2VuZXJhdGUgaXRcclxuXHRcdC8vIHVzaW5nIHRoaXMgY29udGFpbmVyJ3MgbmFtZSBhbmQgdGhlIHJ1bGUgbmFtZSAobm90ZSB0aGF0IGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgYm90aFxyXG5cdFx0Ly8gY2FuIGJlIGdlbmVyYXRlZCB1bmlxdWVseSkuXHJcblx0XHRpZiAoIXJ1bGVOYW1lKVxyXG5cdFx0XHRyZXR1cm4gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlIGlmIChydWxlTmFtZSBpbiB0aGlzLmluc3RhbmNlICYmIFwibmFtZVwiIGluIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0ubmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCBvdXQgaWYgdGhlcmUgaXMgYSBydWxlIHdpdGggdGhpcyBuYW1lIGRlZmluZWQgaW4gYSBzdHlsZXNoZWV0IGluc3RhbmNlIGNyZWF0ZWQgZm9yXHJcblx0XHRcdC8vIGEgY2xhc3MgZnJvbSB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG5cdFx0XHRsZXQgZXhpc3RpbmdOYW1lID0gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggdGhpcy5kZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lKTtcclxuXHRcdFx0cmV0dXJuIGV4aXN0aW5nTmFtZSA/IGV4aXN0aW5nTmFtZSA6IGdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRwdWJsaWMgaW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWN0aXZhdGUgcmVmZXJlbmNlZCBzdHlsZSBkZWZpbml0aW9uc1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uYWN0aXZhdGUoKTtcclxuXHJcblx0XHQvLyBpc2VydCBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT5cclxuXHRcdFx0XHR2YXJPYmoudG9Dc3NTdHJpbmcoKSkuZmlsdGVyKCB2ID0+IHYgIT0gbnVsbCkuam9pbihcIjtcIil9fWAsIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluc2VydCBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdHB1YmxpYyBjbGVhclJ1bGVzKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgLy8gaW1wb3J0IGFuZCBuYW1lc3BhY2UgcnVsZXMgY2FuIG9ubHkgZXhpc3QgaW4gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblxyXG5cdFx0Ly8gZGVhY3RpdmF0ZSBpbXBvcnRlZCBzdHlsZXNoZWV0c1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyB0aGlzIHN0eWxlc2hlZXQgaW50byBET00uICovXHJcblx0cHVibGljIGFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoKyt0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIG5vdC1lbWJlZGRlZCBzdHlsZSBkZWZpbml0aW9ucyBjcmVhdGUgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmVtYmVkZGluZ0NvbnRhaW5lcilcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gdGhpcy5lbWJlZGRpbmdDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0uaWQgPSB0aGlzLm5hbWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5kb21TdHlsZUVsbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSB0aGlzLnRvcExldmVsQ29udGFpbmVyLmRvbVN0eWxlRWxtO1xyXG5cclxuXHRcdFx0dGhpcy5pbnNlcnRSdWxlcyggdGhpcy5kb21TdHlsZUVsbSEuc2hlZXQgYXMgQ1NTU3R5bGVTaGVldCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoaXMgc3R5bGVzaGVldCBmcm9tIERPTS4gKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ3VhcmQgZnJvbSBleHRyYSBkZWFjdGl2YXRlIGNhbGxzXHJcblx0XHRpZiAodGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoLS10aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhclJ1bGVzKCk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uIGNyZWF0ZXMgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSEucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBjb250YWluZXIgaXMgZm9yIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbi5cclxuXHRwcml2YXRlIGdldCBpc1RvcExldmVsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vd25lciA9PT0gbnVsbCB8fCB0aGlzLm93bmVyID09PSB0aGlzLmluc3RhbmNlIH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoaXMgY29udGFpbmVyIHByb2Nlc3NlZC5cclxuXHRwdWJsaWMgaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoaXMgY29udGFpbmVyIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YuXHJcblx0cHJpdmF0ZSBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzc1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoaXMgY29udGFpbmVyLCB3aGljaCwgZGVwZW5kaW5nIG9uIHRoZSBtb2RlLCBpcyBlaXRoZXIgdGFrZW4gZnJvbSB0aGUgY2xhc3NcclxuXHQvLyBkZWZpbml0aW9uIG5hbWUgb3IgZ2VuZXJhdGVkIHVuaXF1ZWx5LlxyXG5cdHByaXZhdGUgbmFtZTogc3RyaW5nXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbiB0aGUgY2hhaW4gb2YgZ3JvdXBpbmcgcnVsZXMgdGhhdFxyXG5cdC8vIGxlYWQgdG8gdGhpcyBydWxlIGNvbnRhaW5lci4gRm9yIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9ucywgdGhpcyBpcyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBwYXJlbnQ/OiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRoYXQgYmVsb25ncyB0byB0aGUgcGFyZW50IHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBwYXJlbnRDb250YWluZXI/OiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgcG9pbnRzIHRvIHRoZSBzYW1lXHJcblx0Ly8gc2luZ2xldG9uIGRlZmluaXRpb24gaW5zdGFuY2UgYXMgdGhlICdpbnN0YW5jZScgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBvd25lcjogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIG93bmVyIHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBwb2ludHMgdG8gYHRoaXNgLiBOYW1lcyBmb3IgbmFtZWQgcnVsZXMgYXJlIGNyZWF0ZWQgdXNpbmcgdGhpcyBjb250YWluZXIuXHJcblx0cHJpdmF0ZSB0b3BMZXZlbENvbnRhaW5lcjogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgdGhhdCBpcyBlbWJlZGRpbmcgb3VyIGluc3RhbmNlXHJcblx0Ly8gKHRoYXQgaXMsIHRoZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIG91ciBjb250YWluZXIpLiBJZiBkZWZpbmVkLCB0aGlzIGNvbnRhaW5lcidzXHJcblx0Ly8gYDxzdHlsZT5gIGVsZW1lbnQgaXMgdXNlZCB0byBpbnNlcnQgQ1NTIHJ1bGVzIGludG8gaW5zdGVhZCBvZiB0b3BMZXZlbENvbnRhaW5lci5cclxuXHRwcml2YXRlIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIExpc3Qgb2YgcmVmZXJlbmNlcyB0byBvdGhlciBzdHlsZSBkZWZpbml0aW9ucyBjcmVhZWQgdmlhIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVmczogU3R5bGVEZWZpbml0aW9uW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQGltcG9ydCBydWxlc1xyXG5cdHByaXZhdGUgaW1wb3J0czogSW1wb3J0UnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBuYW1lc3BhY2UgcnVsZXNcclxuXHRwcml2YXRlIG5hbWVzcGFjZXM6IE5hbWVzcGFjZVJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBjdXN0b20gdmFyaWFibGUgcnVsZXMuXHJcblx0cHJpdmF0ZSB2YXJzOiBWYXJSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgcnVsZXMgdGhhdCBhcmUgbm90IGltcG9ydHMsIG5hbWVzcGFjZXMsIGN1c3RvbSB2YXJzLCByZWZlcmVuY2VzIG9yIGdyb3VwaW5nIHJ1bGVzLlxyXG5cdHByaXZhdGUgb3RoZXJSdWxlczogUnVsZVtdO1xyXG5cclxuXHQvLyBcIjpyb290XCIgcnVsZSB3aGVyZSBhbGwgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgYXJlIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBjc3NDdXN0b21WYXJTdHlsZVJ1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBlbGVtbnRcclxuXHRwdWJsaWMgZG9tU3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOYW1lIGdlbmVyYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRzX3VzZVVuaXF1ZVN0eWxlTmFtZXMgPSBlbmFibGU7XHJcblx0c191bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gcHJlZml4ID8gcHJlZml4IDogXCJuXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgbmFtZXMgZm9yIHN0eWxlIGVsZW1lbnRzIChjbGFzc2VzLCAgYW5pbWF0aW9ucywgZXRjLilcclxuICogQnkgZGVmYXVsdCB0aGlzIGZsYWcgaXMgdHJ1ZSBpbiB0aGUgUmVsZWFzZSBidWlsZCBvZiB0aGUgbGlicmFyeSBhbmQgZmFsc2UgaW4gdGhlIERlYnVnIGJ1aWxkLlxyXG4gKi9cclxubGV0IHNfdXNlVW5pcXVlU3R5bGVOYW1lczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4vLy8gI2lmIERFQlVHXHJcbnNfdXNlVW5pcXVlU3R5bGVOYW1lcyA9IGZhbHNlO1xyXG4vLy8gI2VuZGlmXHJcblxyXG4vKipcclxuICogUHJlZml4IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIHN0eWxlIG5hbWVzLiBJZiB1bmRlZmluZWQsIGEgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICovXHJcbmxldCBzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXggPSBcIm5cIjtcclxuXHJcbi8qKiBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy4gKi9cclxubGV0IHNfbmV4dFVuaXF1ZUlEID0gMTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGdpdmVuIHJ1bGUgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2hlZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hbWUoIHNoZWV0TmFtZTogc3RyaW5nLCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gc191c2VVbmlxdWVTdHlsZU5hbWVzXHJcblx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSggc191bmlxdWVTdHlsZU5hbWVzUHJlZml4KVxyXG5cdFx0OiBgJHtzaGVldE5hbWV9XyR7cnVsZU5hbWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgdW5pcXVlIG5hbWUsIHdoaWNoIGNhbiBiZSB1c2VkIGVpdGhlciBmb3Igc3R5bGUgZWxlbWVudCdzIElEIG9yIG9yIGNsYXNzLFxyXG4gKiBpZGVudGlmaWVyIG9yIGFuaW1hdGlvbiBuYW1lLiBOYW1lcyBhcmUgZ2VuZXJhdGVkIHVzaW5nIGEgc2ltcGxlIGluY3JlbWVudGluZyBudW1iZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHByZWZpeD86IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiBzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpICsgc19uZXh0VW5pcXVlSUQrKztcclxufVxyXG5cclxuXHJcblxyXG4vLyBMb29rcyB1cCBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBjbGFzcy4gSWYgZm91bmQgYW5kIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHJ1bGUsIHRoZW4gcmV0dXJucyB0aGUgbmFtZSBhc3NpZ25lZCBmb3IgaXQuXHJcbmZ1bmN0aW9uIGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBydWxlTmFtZTogc3RyaW5nKVxyXG57XHJcblx0aWYgKCFkZWZpbml0aW9uQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIHByb3RvdHlwZXNcclxuICAgIGZvciggbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZGVmaW5pdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgYmFzZUNsYXNzICE9PSBTdHlsZURlZmluaXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGJhc2VDbGFzcykpXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgdGhlIGJhc2UgY2xhc3MgYWxyZWFkeSBoYXMgYW4gYXNzb2NpYXRlZCBpbnN0YW5jZTsgaWYgeWVzLCBjaGVjayB3aGV0aGVyXHJcblx0XHQvLyBpdCBoYXNlIGEgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gcnVsZSBuYW1lLiBJZiB5ZXMsIHRoZW4gdXNlIHRoaXMgcnVsZSdzIGFscmVhZHlcclxuXHRcdC8vIGdlbmVyYXRlZCBuYW1lIChpZiBleGlzdHMpLlxyXG5cdFx0aWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBiYXNlSW5zdCA9IGJhc2VDbGFzc1tzeW1JbnN0YW5jZV07XHJcblx0XHRcdGlmIChiYXNlSW5zdCAmJiBydWxlTmFtZSBpbiBiYXNlSW5zdCAmJiBcIm5hbWVcIiBpbiBiYXNlSW5zdFtydWxlTmFtZV0pXHJcblx0XHRcdFx0cmV0dXJuIGJhc2VJbnN0W3J1bGVOYW1lXS5uYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb2Nlc3NpbmcgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBhc3NpZ25zIG5hbWVzIHRvIGl0cyBydWxlcy5cclxuICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgd2UgY2hlY2sgd2hldGhlciB0aGVyZSBpcyBhbiBpbnN0YW5jZSBhbHJlYWR5XHJcbiAqIGNyZWF0ZWQgZm9yIGl0IGFzIGEgY2xhc3Mgd2lsbCBoYXZlIG9ubHkgYSBzaW5nbGUgYXNzb2NpYXRlZCBpbnN0YW5lIG5vIG1hdHRlciBob3cgbWFueSB0aW1lc1xyXG4gKiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICogXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IChhbiBpbnN0YW5jZSBvZiB0aGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzKSB0aGVuIHdlIGNoZWNrIHdoZXRoZXJcclxuICogaXQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQuIElmIHllcywgd2UganVzdCByZXR1cm4gaXQgYmFjazsgaWYgbm8sIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdHBhcmVudD86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG5cdGlmICghaW5zdE9yQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gaW5zdE9yQ2xhc3MgaGFzIHR5cGUgXCJvYmplY3RcIiBpZiBpdCBpcyBhbiBpbnN0YW5jZSBhbmQgXCJmdW5jdGlvblwiIGlmIGl0IGlzIGEgY2xhc3NcclxuXHRpZiAodHlwZW9mIGluc3RPckNsYXNzID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdHByb2Nlc3NJbnN0YW5jZSggaW5zdE9yQ2xhc3MpO1xyXG5cdFx0cmV0dXJuIGluc3RPckNsYXNzO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB0aGlzIGRlZmluaXRpb24gY2xhc3MgaXMgYWxyZWFkeSBhc3NvY2lhdGVkIHdpdGggYW4gaW5zdGFuY2VcclxuXHRcdHJldHVybiBpbnN0T3JDbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSlcclxuXHRcdFx0PyBpbnN0T3JDbGFzc1tzeW1JbnN0YW5jZV1cclxuXHRcdFx0OiBwcm9jZXNzQ2xhc3MoIGluc3RPckNsYXNzLCBwYXJlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGJ5IGNyZWF0aW5nIGl0cyBpbnN0YW5jZSBhbmQgYXNzb2NpYXRpbmcgYVxyXG4gKiBydWxlIGNvbnRhaW5lciBvYmplY3Qgd2l0aCBpdC4gVGhlIGNsYXNzIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnN0YW5jZSB1c2luZyB0aGVcclxuICogU3ltYm9sIHByb3BlcnR5LiBUaGUgb3duZXIgcGFyYW1ldGVyIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uXHJcbiAqIG9iamVjdCBvciBudWxsIGlmIHRoZSBnaXZlbiBjbGFzcyBpcyBpdHNlbGYgYSB0b3AtbGV2ZWwgY2xhc3MgKHRoYXQgaXMsIGlzIG5vdCBhIGNsYXNzXHJcbiAqIHRoYXQgZGVmaW5lcyBydWxlcyB3aXRoaW4gbmVzdGVkIGdyb3VwaW5nIHJ1bGVzKS5cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NDbGFzcyggZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcblx0cGFyZW50PzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcbiAgICAvLyBwcm9jZXNzIGFsbCB0aGUgYmFzZSBjbGFzc2VzIHNvIHRoYXQgcnVsZSBuYW1lcyBhcmUgZ2VuZXJhdGVkLiBXZSBkb24ndCBhY3RpdmF0ZSBzdHlsZXNcclxuICAgIC8vIGZvciB0aGVzZSBjbGFzc2VzIGJlY2F1c2UgZGVyaXZlZCBjbGFzc2VzIHdpbGwgaGF2ZSBhbGwgdGhlIHJ1bGVzIGZyb20gYWxsIHRoZSBiYXNlIGNsYXNzZXNcclxuICAgIC8vIGFzIHRoZWlyIG93biBhbmQgc28gdGhlc2UgcnVsZXMgd2lsbCBiZSBhY3RpdmF0ZWQgYXMgcGFydCBvZiB0aGUgZGVyaXZlZCBjbGFzcy5cclxuICAgIGZvciggbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZGVmaW5pdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgYmFzZUNsYXNzICE9PSBTdHlsZURlZmluaXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGJhc2VDbGFzcykpXHJcbiAgICB7XHJcblx0XHRwcm9jZXNzQ2xhc3MoIGJhc2VDbGFzcywgcGFyZW50KTtcclxuICAgIH1cclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIHRoZSBpbnN0YW5jZSBvZiB0aGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IGRlZmluaXRpb25DbGFzcyggcGFyZW50KTtcclxuXHJcblx0XHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRcdGxldCBuYW1lID0gc191c2VVbmlxdWVTdHlsZU5hbWVzIHx8ICFkZWZpbml0aW9uQ2xhc3MubmFtZVxyXG5cdFx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSgpXHJcblx0XHRcdDogZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblxyXG5cdFx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lKTtcclxuXHRcdGRlZmluaXRpb25DbGFzc1tzeW1JbnN0YW5jZV0gPSBpbnN0YW5jZTtcclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgaW5zdGFudGlhdGluZyBTdHlsZSBEZWZpbml0aW9uIENsYXNzICcke2RlZmluaXRpb25DbGFzcy5uYW1lfSdgLCBlcnIpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgYW5kIGFzc2lnbnMgbmFtZXMgdG8gaXRzIHJ1bGVzLiBJZiB0aGVcclxuICogaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHdlIGRvIG5vdGhpbmc7IG90aGVyd2lzZSwgd2UgYXNzaWduIG5ldyB1bmlxdWUgbmFtZXNcclxuICogdG8gaXRzIHJ1bGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKTogdm9pZFxyXG57XHJcblx0Ly8gaWYgdGhlIGluc3RhbmNlIGlzIGFscmVhZHkgcHJvY2Vzc2VkLCBqdXN0IHJldHVybjsgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVcclxuXHQvLyBlbWJlZGRpbmdDb250YWluZXIgcGFyYW1ldGVyLlxyXG5cdGxldCBydWxlQ29udGFpbmVyID0gaW5zdGFuY2Vbc3ltQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRsZXQgbmFtZSA9IGdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdGlmICghc191c2VVbmlxdWVTdHlsZU5hbWVzKVxyXG5cdHtcclxuXHRcdGxldCBkZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvcjtcclxuXHRcdGlmIChkZWZpbml0aW9uQ2xhc3MubmFtZSlcclxuXHRcdFx0bmFtZSArPSBcIl9cIiArIGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gY3JlYXRlIGNvbnRhaW5lciAtIHRoaXMgd2lsbCBhc3NvY2lhdGUgdGhlIG5ldyBjb250YWluZXIgd2l0aCB0aGUgaW5zdGFuY2UgYW5kIHByb2Nlc3NcclxuXHQvLyB0aGUgcnVsZXMuXHJcblx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lLCBlbWJlZGRpbmdDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHJ1bGUgY29udGFpbmVyIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbik6IFJ1bGVDb250YWluZXJcclxue1xyXG5cdHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlW3N5bUNvbnRhaW5lcl0gOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWYgdGhlIGlucHV0IG9iamVjdCBpc1xyXG4gKiBub3QgYSBzdHlsZSBkZWZpbml0aW9uIGJ1dCBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIG9idGFpbiBzdHlsZSBkZWZpbml0aW9uIGJ5IGNhbGxpbmcgdGhlICR1c2VcclxuICogZnVuY3Rpb24uIE5vdGUgdGhhdCBlYWNoIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzXHJcbiAqIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkIHRvIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlclxyXG4gKiBnb2VzIHVwIHRvIDEuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY291bnQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxyXG5cdFx0XHRydWxlQ29udGFpbmVyLmFjdGl2YXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kXHJcbiAqIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUluc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspXHJcblx0XHRcdHJ1bGVDb250YWluZXIuZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lDdXN0b21WYXIsIE9uZU9yTWFueX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFBzZXVkb0VudGl0eSwgQ3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzcywgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHJvcGVydGllcyB1c2VkIGluIHRoZSBbW0NvbWJpbmVkU3R5bGVzZXRdXSB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgZGVwZW5kZW50IHJ1bGVzICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yQ29tYmluYXRvciA9IFwiJlwiIHwgXCImLFwiIHwgXCImIFwiIHwgXCImPlwiIHwgXCImK1wiIHwgXCImflwiIHwgXCIsJlwiIHwgXCIgJlwiIHwgXCI+JlwiIHwgXCIrJlwiIHwgXCJ+JlwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbWJpbmVkU3R5bGVzZXQgdHlwZSBleHRlbmRzIHRoZSBTdHlsZXNldCB0eXBlIHdpdGggY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgcHJvdmlkZVxyXG4gKiBhZGRpdGlvbmFsIG1lYW5pbmcgdG8gdGhlIHN0eWxlc2V0IGFuZCBhbGxvdyBidWlsZGluZyBkZXBlbmRlbnQgc3R5bGUgcnVsZXM6XHJcbiAqIC0gVGhlIGArYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBwc2V1ZG8gY2xhc3MgbmFtZXMgKGUuZy4gXCI6aG92ZXJcIikgb3IgcHNldWRvIGVsZW1lbnQgbmFtZXMgKGUuZy4gXCI6OmFmdGVyXCIpLlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIG5hbWVzIG9mIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgKGUuZy4gXCI6bnRoLWNoaWxkXCIpIG9yIHBhcmFtZXRlcml6ZWRcclxuICogICBwc2V1ZG8gZWxlbWVudHMgKGUuZy4gXCI6OnNsb3R0ZWRcIikuIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBhIHR1cGxlLCB3aGVyZSB0aGUgZmlyc3RcclxuICogICBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgZm9yIHRoZSBzZWxlY3RvciBhbmQgdGhlIHNlY29uZCBlbGVtZW50IGlzIHRoZSBzdHlsZXNldC5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCB0aGUgYW1wZXJzYW5kIHN5bWJvbCAoJyYnKSB0aGF0IGNvbnRhaW4gYXJyYXlzIG9mIHR3by1lbGVtZW50IHR1cGxlcyBlYWNoXHJcbiAqICAgZGVmaW5pbmcgYSBzZWxlY3RvciBhbmQgYSBzdHlsZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgc2VsZWN0b3IuIFNlbGVjdG9ycyBjYW4gdXNlIHRoZVxyXG4gKiAgIGFtcGVyc2FuZCBzeW1ib2wgdG8gcmVmZXIgdG8gdGhlIHBhcmVudCBzdHlsZSBzZWxlY3Rvci4gSWYgdGhlIGFtcGVyc2FuZCBzeW1ib2wgaXMgbm90IHVzZWQsXHJcbiAqICAgdGhlIHNlbGVjdG9yIHdpbGwgYmUgc2ltcGx5IGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcbiAqIFxyXG4gKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gc3R5bGUgcnVsZXMgKGUuZy4gJGNsYXNzKSBhY2NlcHQgdGhlIENvbWJpbmVkU3R5bGVzZXQgYXMgYSBwYXJhbWV0ZXIsXHJcbiAqIGZvciBleGFtcGxlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxuICoge1xyXG4gKiAgICAgY2xhc3MxID0gY3NzLiRjbGFzcyh7fSlcclxuICogICAgIGNsYXNzMiA9IGNzcy4kY2xhc3Moe1xyXG4gKiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gKiAgICAgICAgIFwiOmhvdmVyXCIgOiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIgfSxcclxuICogICAgICAgICBcIiZcIjogW1xyXG4gKiAgICAgICAgICAgICBbIFwibGkgPiAmXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiIH0gXSxcclxuICogICAgICAgICAgICAgWyB0aGlzLmNsYXNzMSwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIgfSBdXHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgfSlcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgd2lsbCB0cmFuc2xhdGUgdG8gdGhlIGZvbGxvd2luZyBDU1MgKGNsYXNzIG5hbWUgaXMgYXV0by1nZW5lcmF0ZWQpOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB3aGl0ZTsgfVxyXG4gKiAubTEyMzpob3ZlciB7IGJhY2tncm91bmRDb2xvcjogZ3JleTsgfVxyXG4gKiBsaSA+IC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3c7IH1cclxuICogLm0xMjMubTEyMiB7IGJhY2tncm91bmRDb2xvcjogb3JhbmdlOyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tYmluZWRTdHlsZXNldCA9IFN0eWxlc2V0ICZcclxuXHR7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBDb21iaW5lZFN0eWxlc2V0IH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHldPzogW0lQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5W0tdLCBDb21iaW5lZFN0eWxlc2V0XVtdIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMgdGhhdCBoYXZlIGEgbmFtZTsgdGhhdCBpcyxcclxuICogY2xhc3MsIElELCBrZXlmcmFtZXMgYW5kIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3RydWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBkZXBlbmRlbnQgcnVsZXMgb2YgYSBzdHlsZSBydWxlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEZXBlbmRlbnRSdWxlcyA9XHJcblx0eyBbSyBpbiBQc2V1ZG9FbnRpdHldPzogSVN0eWxlUnVsZSB9ICZcclxuXHR7IFtLIGluIFNlbGVjdG9yQ29tYmluYXRvcl0/OiBJU3R5bGVSdWxlW10gfSAmXHJcblx0eyBbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlW10gfTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxpbmcgcnVsZSBpbiBhIHN0eWxlIHNoZWV0LiBTdHlsZSBydWxlcyBjYW4gYmUgdXNlZFxyXG4gKiBhbnl3aGVyZSB3aGVyZSBzdHlsZSBwcm9wZXJ0aWVzIGNhbiBiZSBkZWZpbmVkOiBjbGFzcyBydWxlcywgSUQgcnVsZXMsIHNlbGVjdG9yIHJ1bGVzLFxyXG4gKiBrZXlmcmFtZXMsIGV0Yy4gU3R5bGVSdWxlIGRlZmluZXMgYSBzdHlsZXNldCBhbmQgY2FuIG9wdGlvbmFsbHkgcG9pbnQgdG8gb25lIG9yIG1vcmUgc3R5bGUgcnVsZXNcclxuICogZnJvbSB3aGljaCBpdCBpbmhlcml0cy4gQSBzdHlsZXNldCBjb21iaW5lcyBhbGwgdGhlIHByb3BlcnRpZXMgZnJvbSBpdHMgb3duIHByb3BlcnR5IGJsb2NrIGFzXHJcbiAqIHdlbGwgYXMgZnJvbSBhbGwgb2Ygc3R5bGUgcnVsZXMgaXQgaW5oZXJpdGVzIGZyb20uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3R5bGVSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHJlYWRvbmx5IHNlbGVjdG9yVGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBPYmplY3QgY29udGFpbmluZyBkZXBlbmRlbnQgcnVsZXMuIFByb3BlcnR5IG5hbWVzIGFyZSB0YWtlbiBmcm9tIHNwZWNpYWwgcHJvcGVydGllc1xyXG5cdCAqIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBUaGlzIG9iamVjdCBhbGxvd3MgY2FsbGVycyB0byBhY2Nlc3MgZGVwZW5kZW50IHJ1bGVzIHRvIGNoYW5nZVxyXG5cdCAqIHN0eWxlIHByb3BlcnR5IHZhbHVlcyBwcm9ncmFtbWF0aWNhbGx5LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG1vbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBjdXN0b21WYXIgSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBjdXN0b21WYXI6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0aW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRTdHlsZVJ1bGUgaW50ZXJmYWNlIGNvbWJpbmVzIElTdHlsZVJ1bGUgYW5kIElOYW1lZEVudGl0eSBpbnRlcmZhY2VzLiBUaGlzIGlzIHVzZWRcclxuICogZm9yIGNsYXNzIGFuZCBJRCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHdoZXJlIHRoZSBzZWxlY3RvciBpcyBhIHNpbmdsZSBjbGFzcyBuYW1lLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NSdWxlIGV4dGVuZHMgSU5hbWVkU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgY2xhc3MgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0NsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUlEUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGVsZW1lbnQgSUQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJRFJ1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRyZWFkb25seSBjc3NJRE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbldheXBvaW50IHR5cGUgZGVmaW5lcyBhIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSB3YXlwb2ludCBpbiBhblxyXG4gKiBhbmltYXRpb24gc2VxdWVuY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25XYXlwb2ludCA9IE9uZU9yTWFueTxcImZyb21cIiB8IFwidG9cIiB8IG51bWJlcj47XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblN0eWxlcyB0eXBlIGRlZmluZXMgYSBvYmplY3QgY29udGFpbmluZyBzdHlsZSBwcm9wZXJ0aWVzIGZvciBhbiBhbmltYXRpb24gZnJhbWUuXHJcbiAqIFN0eWxlc2V0cyBmb3Iga2V5ZnJhbWVzIGFsbG93IGN1c3RvbSBwcm9wZXJ0aWVzICh2aWEgXCItLVwiKS4gQW5pbWF0aW9uIHN0eWxlc2V0IGNhbiBleHRlbmRcclxuICogb3RoZXIgc3R5bGUgcnVsZXM7IGhvd2V2ZXIsIGFueSBkZXBlbmRlbnQgcnVsZXMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3R5bGVzZXQgPSBTdHlsZXNldCAmIHsgXCIrXCI/OiBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdIH07XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lIHR5cGUgZGVmaW5lcyBhIHNpbmdsZSBrZXlmcmFtZSB3aXRoaW4gYSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIFRoZSB3YXlwb2ludCBjYW4gYmUgc3BlY2lmaWVkIGFzIFwiZnJvbVwiIG9yIFwidG9cIiBzdHJpbmdzIG9yIGFzIGEgbnVtYmVyIDAgdG8gMTAwLCB3aGljaCB3aWxsIGJlXHJcbiAqIHVzZWQgYXMgYSBwZXJjZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRnJhbWUgPSBbQW5pbWF0aW9uV2F5cG9pbnQsIEFuaW1hdGlvblN0eWxlc2V0XTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvblJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGtleWZyYW1lc11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRyZWFkb25seSBmcmFtZVJ1bGVzOiBJQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvbkZyYW1lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNpbmdsZSBmcmFtZSBpbiB0aGUgQGtleWZyYW1lcyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50ICovXHJcblx0cmVhZG9ubHkgd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50O1xyXG5cclxuXHQvKiogU09NIGtleWZyYW1lIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdmFyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYXJSdWxlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+IGV4dGVuZHMgSU5hbWVkRW50aXR5LCBJQ3VzdG9tVmFyPFZhclZhbHVlVHlwZTxLPj5cclxue1xyXG5cdC8qKiBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuICovXHJcblx0cmVhZG9ubHkgdGVtcGxhdGU6IEs7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ291bnRlclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBuYW1lZCBjb3VudGVyIGRlZmluaXRpb24uIFVzZSB0aGlzIHJ1bGUgdG8gY3JlYXRlXHJcbiAqIGNvdW50ZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIGluIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZVxyXG4gKiBwcm9wZXJ0aWVzLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBjb3VudGVycyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlXHJcbiAqIGNvdW50ZXIgZGVmaW5pdGlvbnMuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRjb3VudGVyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudGVyUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRyZWFkb25seSBjb3VudGVyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAY291bnRlci1zdHlsZSBydWxlLlxyXG4vLyAgKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlclN0eWxlXV0gZnVuY3Rpb24uXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElDb3VudGVyU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGUsIElOYW1lZEVudGl0eVxyXG4vLyB7XHJcbi8vIFx0LyoqIFNPTSBjb3VudGVyLXN0eWxlIHJ1bGUgKi9cclxuLy8gXHRyZWFkb25seSBjc3NSdWxlOiBDU1NDb3VudGVyU3R5bGVSdWxlIHwgbnVsbDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJbXBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skaW1wb3J0XV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbXBvcnRSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gaW1wb3J0IHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NJbXBvcnRSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElGb250RmFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAZm9udC1mYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRmb250ZmFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9udEZhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NGb250RmFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVzcGFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRuYW1lc3BhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gbmFtZXNwYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NOYW1lc3BhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYWdlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRwYWdlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cmVhZG9ubHkgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NQYWdlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JpZExpbmVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZGVmaW5pdGlvbiBvZiBhIG5hbWVkIGdyaWQgbGluZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGdyaWRsaW5lXV0gZnVuY3Rpb24gb3IgY3JlYXRlZFxyXG4gKiB3aGVuIGEgZ3JpZCBhcmVhIGlzIGRlZmluZWQgdXNpbmcgdGhlIFtbJGdyaWRhcmVhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkTGluZVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGluZSBpcyBhIHN0YXJ0IG9yIGVuZCBsaW5lIG9mIGEgZ3JpZCBhcmVhLiBUaGUgdmFsdWUgaXMgdHJ1ZVxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgc3RhcnQgbGluZTsgZmFsc2UgaWYgdGhpcyBpcyB0aGUgZW5kIGxpbmU7IGFuZCB1bmRlZmluZWQgaWYgdGhlIGxpbmUgaXNcclxuICAgICAqIG5vdCByZWxhdGVkIHRvIGFueSBhcmVhLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGdyaWQgYXJlYSBvZiB3aGljaCB0aGUgbGluZSBpcyBlaXRoZXIgYSBzdGFydCBvciBhbiBlbmQgbGluZS4gSXQgaXMgZGVmaW5lZFxyXG4gICAgICogb25seSBpZiB0aGUgbGluZSBuYW1lIGVuZHMgd2l0aCBcIi1zdGFydFwiIG9yIFwiLWVuZFwiLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBhcmVhTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyaWRBcmVhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRlZmluaXRpb24gb2YgYSBuYW1lZCBncmlkIGFyZS4gR3JpZCBhcmVhIHJ1bGVcclxuICogZGVmaW5lcyB0d28gbGluZSBydWxlczogZm9yIGl0cyBzdGFydCBhbmQgZW5kIGxpbmVzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZ3JpZGFyZWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRBcmVhUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcbiAgICAvKiogU3RhcnQgbGluZSBvZiB0aGUgYXJlYS4gKi9cclxuICAgIHJlYWRvbmx5IHN0YXJ0TGluZTogSUdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvKiogRW5kIGxpbmUgb2YgdGhlIGFyZWEuICovXHJcbiAgICByZWFkb25seSBlbmRMaW5lOiBJR3JpZExpbmVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBgJHBhcmVudGAgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZVxyXG4gKiB0byB0aGUgcGFybnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gRGV2ZWxvcGVycyBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYWNjZXNzIHJ1bGVzIGluXHJcbiAqIHRoZSBjaGFpbiBvZiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMuIFdlIG5lZWQgdGhpcyBzeW1ib2wgdG8gYXZvaWQgZW51bWVyYXRpbmcgdGhlIGAkcGFyZW50YFxyXG4gKiBwcm9wZXJ0eSB3aGVuIHByb2Nlc3NpbmcgdGhlIHJ1bGVzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmNvbnN0IHN5bVBhcmVudCA9IFN5bWJvbChcInBhcmVudFwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbCB0aGF0IGlzIHVzZWQgYnkgdGhlIGAkb3duZXJgIHByb3BlcnR5IGluIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgdGhhdCBrZWVwcyByZWZlcmVuY2VcclxuICogdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBEZXZlbG9wZXJzIGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhY2Nlc3MgcnVsZXMgaW5cclxuICogdGhlIGNoYWluIG9mIG5lc3RlZCBncm91cGluZyBydWxlcy4gV2UgbmVlZCB0aGlzIHN5bWJvbCB0byBhdm9pZCBlbnVtZXJhdGluZyB0aGUgYCRvd25lcmBcclxuICogcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBzeW1Pd25lciA9IFN5bWJvbChcIm93bmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBjbGFzc2VzIHRoYXQgY29udGFpbiBkZWZpbmluaXRpb25zIG9mIENTUyBydWxlcy5cclxuICogQHR5cGVwYXJhbSBQIFBhcmVudCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBQYXJlbnQgb2YgdG9wLWx2ZWwgY2xhc3MgaXMgbnVsbC5cclxuICogQHR5cGVwYXJhbSBPIFRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBjbGFzcy4gVGhlIHRvcC1sZXZlbFxyXG4gKiBjbGFzcyBpcyBpdHMgb3duIG93bmVyLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlRGVmaW5pdGlvbjxQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFyZSBjcmVhdGVkIGRpcmVjdGx5IG9ubHkgYnkgdGhlICpzdHlsZWQgY29tcG9uZW50cyogLSB0aGF0IGlzLFxyXG5cdCAqIGNvbXBvbmVudHMgdGhhdCB1c2UgZGlmZmVyZW50IHN0eWxlcyBmb3IgZWFjaCBpbnN0YW5jZS4gT3RoZXJ3aXNlLCBzdHlsZSBkZWZpbml0aW9uXHJcblx0ICogY2xhc3MgaW5zdGFuY2VzIGFyZSBjcmVhdGVkIHdoZW4gZWl0aGVyIHRoZSBbWyR1c2VdXSBvciBbW2FjdGl2YXRlXV0gZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSBwYXJlbnQgUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcGFyZW50PzogUClcclxuXHR7XHJcblx0XHR0aGlzW3N5bVBhcmVudF0gPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIC8vIE93bmVyIGlzIHRha2VuIGZyb20gdGhlIHBhcmVudCBjbGFzczsgYSB0b3AtbGV2ZWwgY2xhc3MgaXMgaXRzIG93biBvd25lci5cclxuXHRcdHRoaXNbc3ltT3duZXJdID0gcGFyZW50ID8gcGFyZW50LiRvd25lciA6IHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBwYXJudCBvZiB0aGlzIHN0eWxlXHJcbiAgICAgKiBkZWZpbml0aW9uIG9iamVjdCBpbiB0aGUgY2hhaW4gb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLiBUaHJvdWdoIHRoaXMgbWVtYmVyLCBhbGwgcnVsZXNcclxuICAgICAqIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIHBhcmVudCBkZWZpbml0aW9uIGNsYXNzIGNhbiBiZSBhY2Nlc3NlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0ICRwYXJlbnQoKTogUCB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBvd25lciBvZlxyXG5cdCAqIHRoaXMgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuIFRoZSBvd25lciBpcyB0aGUgdG9wLWxldmVsIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBzdHlsZVxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhyb3VnaCB0aGlzIG1lbWJlciwgYWxsIHJ1bGVzIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIG93bmVyXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCAkb3duZXIoKTogTyB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZURlZmluaXRpb25DbGFzczxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPFAsTz4gPSBhbnksXHJcbiAgICBQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqIEFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldyggcGFyZW50PzogUCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JvdXBSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZ3JvdXBpbmcgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHJlYWRvbmx5IHJ1bGVzOiBUO1xyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3VwcG9ydHNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRlZCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcnVsZSdzIHF1ZXJ5ICovXHJcbiAgICByZWFkb25seSBpc1N1cHBvcnRlZDogYm9vbGVhbjtcclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNZWRpYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbWVkaWEgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG1lZGlhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGVyVHlwZSBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgdXNlZCB0byBkZWZpbmUgaG93IHRoZSBjYWxscyB0byB0aGVcclxuICogYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHNjaGVkdWxlIHRoZSB3cml0aW5nIG9mIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFNjaGVkdWxlclR5cGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFN5bmNocm9ub3VzIGFjdGl2YXRpb24gLSBzdHlsZSBkZWZpbml0aW9ucyBhcmUgd3JpdHRlbiB0byB0aGUgRE9NIHVwb24gdGhlIGFjdGl2YXRlXHJcblx0ICogYW5kIGRlYWN0aXZhdGUgY2FsbHMuXHJcblx0ICovXHJcblx0U3luYyA9IDEsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIG5leHQgYW5pbWF0aW9uXHJcblx0ICogZnJhbWUgYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0QW5pbWF0aW9uRnJhbWUsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIGNhbGwgdG8gdGhlXHJcblx0ICogZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0TWFudWFsLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNjaGVkdWxlciBpbnRlcmZhY2Ugc2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IGN1c3RvbSBzY2hlZHVsZXJzLiBJdHMgbWV0aG9kcyBhcmUgaW52b2tlZFxyXG4gKiBieSB0aGUgYWN0aXZhdGlvbiBpbmZyYXN0cnVjdHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzY2hlZHVsZXIgb2JqZWN0IGFuZCBwcm92aWRlcyB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZVxyXG4gICAgICogc2NoZWR1bGVyIGRlY2lkZXMgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKTtcclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufSIsImltcG9ydCB7U2NoZWR1bGVyVHlwZSwgU3R5bGVEZWZpbml0aW9uLCBJU2NoZWR1bGVyfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHthY3RpdmF0ZUluc3RhbmNlLCBkZWFjdGl2YXRlSW5zdGFuY2V9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtTdHJpbmdTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFjdGl2YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgcmVzcG9uc2libGUgZm9yIGEgY2VydGFpbiB0eXBlIG9mIGFjdGl2YXRpb25cclxuICogbWVjaGFuaXNtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aXZhdG9yXHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGRlYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBzZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gICAgICogQ1NTIHN0eWxlIG9iamVjdC5cclxuXHQgKi9cclxuICAgIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0Zm9yY2VET01VcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbERPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICogQ1NTIHN0eWxlIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcbntcclxuICAgIGlmICghbmFtZSAmJiB2YWx1ZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChydWxlT3JFbG0gaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5jc3NUZXh0ID0gXCJcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIChydWxlT3JFbG0gYXMgYW55IGFzIEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggbmFtZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlIGFzIHN0cmluZywgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHlsZXNldCA9IHZhbHVlIGFzIFN0cmluZ1N0eWxlc2V0O1xyXG4gICAgICAgIGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGVbcHJvcE5hbWVdID0gc3R5bGVzZXRbcHJvcE5hbWVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3luY2hyb25vdXNBY3RpdmF0b3IgY2xhc3MgcmVwcmVzZW50cyB0aGUgc3luY2hyb25vdXMgYWN0aXZhdGlvbiBtZWNoYW5pc20sIHdoaWNoIHdyaXRlc1xyXG4gKiBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00gd2hlbiB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXHJcbiAqL1xyXG5jbGFzcyBTeW5jaHJvbm91c0FjdGl2YXRvciBpbXBsZW1lbnRzIElBY3RpdmF0b3Jcclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqIEBwYXJhbSBkZWZpbml0aW9uXHJcblx0ICovXHJcblx0cHVibGljIGFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0YWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogZGVhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICogQHBhcmFtIGRlZmluaXRpb25cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGRlYWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gc2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICAgICAqIENTUyBzdHlsZSBvYmplY3QuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsIG5hbWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBmb3JjZURPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZm9yY2VET01VcGRhdGUoKTogdm9pZCB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZCB7fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIG9iamVjdHMgdGhhdCBhcmUgdXNlZCBieSB0aGUgU2NoZWR1bGluZ0FjdGl2YXRvciBjbGFzcyBmb3Igc2V0dGluZyBwcm9wZXJ0eSB2YWx1ZXMuXHJcbiAqIFdoZW4gYm90aCBuYW1lIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGFyZSBudWxsLCB0aGUgc3R5bGUgd2lsbCBiZSBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nXHJcbiAqIGVmZmVjdGl2ZWx5IHJlbW92aW5nIGFsbCBzdHlsZXMgZnJvbSB0aGUgZWxlbWVudCBvciB0aGUgcnVsZS5cclxuICovXHJcbmludGVyZmFjZSBTY2hlZHVsZWRTdHlsZVByb3BWYWx1ZVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBTdHlsZSBvYmplY3QgaW4gd2hpY2ggdG8gc2V0IHRoZSBwcm9wZXJ0eSB2YWx1ZS4gVGhlIHN0eWxlIG9iamVjdCBjYW4gYmVsb25nIHRvIGVpdGhlciBhXHJcbiAgICAgKiBzdHlsZSBydWxlZSBvciB0byBhbiBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuXHRydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBEYXNoZS1jYXNlZCBwcm9wZXJ0eSBuYW1lIGlmIHNldHRpbmcgYSB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvciBudWxsIGlmIHNldHRpbmcgdmFsdWVzXHJcbiAgICAgKiBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0bmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBQcm9wZXJ0eSB2YWx1ZSBpZiBzZXR0aW5nIGEgdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBTdHJpbmdTdHlsZXNldCBvYmplY3QgaWYgc2V0dGluZ1xyXG4gICAgICogdmFsdWVzIG9mIG11bHRpcGxlIHByb3BlcnRpZXMuIElmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgaXQgaXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG5cdHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgbWFya2VkIFwiIWltcG9ydGFudFwiLiBUaGlzIGZsYWcgaXMgaWdub3JlZFxyXG4gICAgICogd2hlbiBzZXR0aW5nIHZhbHVlcyBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0aW1wb3J0YW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxpbmdBY3RpdmF0b3IgY2xhc3Mga2VlcHMgYSBtYXAgb2YgU3R5bGVEZWZpbml0aW9uIGluc3RhbmNlcyB0aGF0IGFyZSBzY2hlZHVsZWQgZm9yXHJcbiAqIGFjdGl2YXRpb24gb3IgZGVhY3RpdmF0aW9uLiBFYWNoIGluc3RhbmNlIGlzIG1hcHBlZCB0byBhIHJlZmVybmNlIGNvdW50LCB3aGljaCBpcyBpbmNyZW1lbnRlZFxyXG4gKiB1cG9uIHRoZSBhY3RpdmF0ZSBjYWxscyBhbmQgZGVjcmVtZW50ZWQgdXBvbiB0aGUgZGVhY3RpdmF0ZSBjYWxscy4gV2hlbiB0aGUgZG9BY3RpdmF0aW9uXHJcbiAqIG1ldGhvZCBpcyBjYWxsZWQgVGhlIHN0eWxlIGRlZmluaXRpb24gd2lsbCBiZSBlaXRoZXIgYWN0aXZhdGVkIG9yIGRlYWN0aXZhdGVkIGJhc2VkIG9uIHdoZXRoZXJcclxuICogdGhlIHJlZmVyZW5jZSBjb3VudCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsaW5nQWN0aXZhdG9yIGltcGxlbWVudHMgSUFjdGl2YXRvclxyXG57XHJcbiAgICAvLyBNYXAgb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbnN0YW5jZXMgdG8gdGhlIHJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25zID0gbmV3IE1hcDxTdHlsZURlZmluaXRpb24sbnVtYmVyPigpO1xyXG5cclxuICAgIC8vIEFycmF5IG9mIHN0eWxlIHByb3BlcnR5IHZhbHVlcyB0byBiZSBzZXQvcmVtb3ZlZC5cclxuICAgIHByaXZhdGUgcHJvcHM6IFNjaGVkdWxlZFN0eWxlUHJvcFZhbHVlW10gPSBbXTtcclxuICAgIFxyXG4gICAgLy8gb3B0aW9uYWwgc2NoZWR1bGVyIG9iamVjdFxyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHNjaGVkdWxlcj86IElTY2hlZHVsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHNjaGVkdWxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlci5pbml0KCAoKSA9PiB0aGlzLmRvRE9NVXBkYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5kZWxldGUoIGRlZmluaXRpb24pO1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGVET01VcGRhdGUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5zZXQoIGRlZmluaXRpb24sICsrcmVmQ291bnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLmRlbGV0ZSggZGVmaW5pdGlvbik7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuc2V0KCBkZWZpbml0aW9uLCAtLXJlZkNvdW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIHNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAgICAgKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5wdXNoKHsgcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50IH0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGluIG91ciBpbnRlcm5hbCBtYXAuXHJcblx0ICovXHJcblx0cHVibGljIGZvcmNlRE9NVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID4gMCB8fCB0aGlzLnByb3BzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcbiAgICAgICAgICAgIHRoaXMuZG9ET01VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbmNlbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA+IDAgfHwgdGhpcy5wcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyQWN0aXZhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5kIHByb3BlcnR5IHNldCBvcGVyYXRpb25zIGFjY3VtdWxhdGVkIGludGVybmFsbHkuIFRoaXNcclxuICAgICAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCBieSB0aGUgZGVyaXZlZCBjbGFzc2VzIHdoZW4gc2NoZWR1bGVkIGFjdGl2YXRpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIGFjdGl2YXRlL2RlYWN0aXZhdGUgc3R5bGUgZGVmaW5pdGlvbnNcclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuZm9yRWFjaCggKHJlZkNvdW50OiBudW1iZXIsIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbikgPT5cclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlZkNvdW50ID4gMClcclxuXHRcdFx0XHRhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCByZWZDb3VudCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkZWFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIC1yZWZDb3VudCk7XHJcblx0XHR9KVxyXG5cclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdHRoaXMucHJvcHMuZm9yRWFjaCggcHJvcCA9PiB1cGRhdGVTdHlsZVByb3BlcnR5KCBwcm9wLnJ1bGVPckVsbSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlLCBwcm9wLmltcG9ydGFudCkpO1xyXG5cdFx0dGhpcy5wcm9wcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcnMgYWxsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGRhdGEgZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY2xlYXJBY3RpdmF0aW9uKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBbXTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVNjaGVkdWxlciBpbXBsZW1lbnRzIHNjaGVkdWxpbmcgdXNpbmcgYW5pbWF0aW9uIGZyYW1lcy5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIGltcGxlbWVudHMgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBIYW5kbGUgcmV0dXJuZWQgYnkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVxdWVzdEhhbmRsZSA9IDA7XHJcblxyXG4gICAgLy8gQ2FsbGJhY2sgdG8gY2FsbCB0byB3cml0ZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSA9IGRvRE9NVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2NoZWR1bGVET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKHRoaXMucmVxdWVzdEhhbmRsZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlcXVlc3RIYW5kbGUpO1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIGFuaW1hdGlvbiBmcmFtZSBzaG91bGQgYmUgZXhlY3V0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBvbkFuaW1hdGlvbkZyYW1lID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0dGhpcy5kb0RPTVVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2NoZWR1bGVzIHRoZSB1cGRhdGUgb2YgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhlIGdpdmVuIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLFxyXG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbCwgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsXHJcbiAgICBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+XHJcblx0XHRhY3RpdmF0b3Iuc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50KSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlcyBjYWxsaW5nIG9mIHRoZSBnaXZlbiBmdW5jdGlvbiB1c2luZyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZUNhbGwoIGZ1bmM6IChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IHZvaWQsIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgYWN0aXZhdG9yID0gc2NoZWR1bGVyVHlwZSA9PSBudWxsID8gc19kZWZhdWx0QWN0aXZhdG9yIDogc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5nZXQoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgaWYgKGFjdGl2YXRvcilcclxuXHRcdGZ1bmMoIGFjdGl2YXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfZGVmYXVsdFNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGRlZmF1bHQgc2NoZWR1bGluZyB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxpbmcgcGFyYW1ldGVyLiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZVxyXG4gKiBwcmV2aW91cyBkZWZhdWx0IGFjdGl2YXRvciBvciAwIGlmIGFuIGVycm9yIG9jY3VycyAoZS5nLiB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgSUQgaXMgbm90XHJcbiAqIHJlZ2lzdGVyZWQpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGU6IG51bWJlcik6IG51bWJlclxyXG57XHJcbiAgICAvLyBjaGVjayB0aGF0IHRoZSBnaXZlbiBudW1iZXIgaXMgaW4gb3VyIG1hcCBvZiByZWdpc3RlcmVkIGFjdGl2YXRvcnNcclxuICAgIGxldCBhY3RpdmF0b3IgPSBzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLmdldCggc2NoZWR1bGVyVHlwZSk7XHJcblx0aWYgKCFhY3RpdmF0b3IpXHJcblx0XHRyZXR1cm4gMDtcclxuXHJcblx0bGV0IHByZXZTY2hlZHVsZXJUeXBlID0gc19kZWZhdWx0U2NoZWR1bGVyVHlwZTtcclxuICAgIHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPSBzY2hlZHVsZXJUeXBlO1xyXG4gICAgc19kZWZhdWx0QWN0aXZhdG9yID0gYWN0aXZhdG9yO1xyXG5cdHJldHVybiBwcmV2U2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzY2hlZHVsZXIgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLCB3aGljaFxyXG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcjogSVNjaGVkdWxlcik6IG51bWJlclxyXG57XHJcblx0Ly8gZ2V0IHRoZSByZWdpc3RyYXRpb24gSUQgZm9yIHRoaXMgc2NoZWR1bGVyXHJcblx0bGV0IGlkID0gc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZSsrO1xyXG5cdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBpZCwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoIHNjaGVkdWxlcikpO1xyXG5cdHJldHVybiBpZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlcnMgYSBzY2hlZHVsZXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc191bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0aWYgKGlkID49IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlKVxyXG5cdHtcclxuXHRcdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuZGVsZXRlKCBpZCk7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGRlbGV0ZWQgc2NoZWR1bGVyIHdhcyBvdXIgZGVmYXVsdCBvbmUsIHdlIHNldCB0aGUgZGVmYXVsdCB0byBTWU5DXHJcbiAgICAgICAgaWYgKHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPT09IGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19kZWZhdWx0U2NoZWR1bGVyVHlwZSA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuICAgICAgICAgICAgc19kZWZhdWx0QWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyLiBUaGlzIHNjaGVkdWxlciB3aWxsIGJlIHVzZWQgaWYgc2NoZWR1bGVyIHR5cGUgaXMgbm90IGV4cGxpY2l0bHlcclxuICogc3BlY2lmaWVkIGluIGNhbGxzIHN1Y2ggYXMgYWN0aXZhdGUgb3IgSVN0eWxlUnVsZS5zZXRQcm9wLlxyXG4gKi9cclxubGV0IHNfZGVmYXVsdFNjaGVkdWxlclR5cGU6IG51bWJlciA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuXHJcbi8qKlxyXG4gKiBTeW5jaHJvbm91cyBhY3RpdmF0b3IgaW5zdGFuY2UuXHJcbiAqL1xyXG5sZXQgc19zeW5jaHJvbm91c0FjdGl2YXRvciA9IG5ldyBTeW5jaHJvbm91c0FjdGl2YXRvcigpO1xyXG5cclxuLyoqXHJcbiAqIEN1cnJlbnQgZGVmYXVsdCBhY3RpdmF0b3IuIFRoaXMgYWN0aXZhdG9yIHdpbGwgYmUgdXNlZCBpZiBzY2hlZHVsZXIgdHlwZSBpcyBub3QgZXhwbGljaXRseVxyXG4gKiBzcGVjaWZpZWQgaW4gY2FsbHMgc3VjaCBhcyBhY3RpdmF0ZSBvciBJU3R5bGVSdWxlLnNldFByb3AuXHJcbiAqL1xyXG5sZXQgc19kZWZhdWx0QWN0aXZhdG9yOiBJQWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBmaXJzdCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqIEFsbCBjdXN0b20gc2NoZWR1bGVyIGlkZW50aWZpZXJzIGFyZSBncmVhdGVyIG9yIGVxdWFsIHRvIHRoaXMgbnVtYmVyLlxyXG4gKi9cclxuY29uc3Qgc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU6IG51bWJlciA9IDEwMDE7XHJcblxyXG4vKipcclxuICogU2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciB0byBiZSBhc3NpZ25lZCB0byB0aGUgbmV4dCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5sZXQgc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZTogbnVtYmVyID0gc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcmVnaXN0ZXJlZCBidWlsdC1pbiBhbmQgY3VzdG9tIGFjdGl2YXRvcnMuXHJcbiAqL1xyXG5sZXQgc19yZWdpc3RlcmVkQWN0aXZhdG9ycyA9IG5ldyBNYXA8bnVtYmVyLElBY3RpdmF0b3I+KCk7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgYnVpbHQtaW4gYW5kIGN1c3RvbSBhY3RpdmF0b3JzLlxyXG4gKi9cclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuU3luYywgc19zeW5jaHJvbm91c0FjdGl2YXRvcik7XHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLkFuaW1hdGlvbkZyYW1lLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvciggbmV3IEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKCkpKTtcclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuTWFudWFsLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvcigpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBDb21iaW5lZFN0eWxlc2V0LCBJVmFyUnVsZSwgRGVwZW5kZW50UnVsZXMsIElOYW1lZEVudGl0eSwgSUNsYXNzUnVsZSwgSUlEUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBDdXN0b21WYXJfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIGNyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge21lcmdlU3R5bGVzZXRzLCBzdHlsZXNldFRvU3RyaW5nLCBzdHlsZVByb3BUb1N0cmluZywgbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge3ZhbDJzdHIsIGNhbWVsVG9EYXNofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuL1ZhclJ1bGVcIjtcclxuaW1wb3J0IHtwc2V1ZG9FbnRpdHlUb1N0cmluZywgc2VsZWN0b3JUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvckZ1bmNzXCI7XHJcbmltcG9ydCB7c19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGV9IGZyb20gXCIuL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgY29udGFpbiBhIHN0eWxlIHJ1bGUuIFRoaXMgY2xhc3NcclxuICogaW1wbGVtZW50cyB0aGUgcGFyc2luZyBvZiB0aGUgQ29tYmluZWRTdHlsZXNldCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFRoZSBzdHlsZXNldCBjYW4gYmUgYW4gQ29tYmluZWRTdHlsZXNldCBmb3IgbWFueSBydWxlczsgaG93ZXZlciwgZm9yIHNvbWUgaXQgaXMganVzdFxyXG5cdC8vIG9mIHRoZSBTdHlsZXNldCB0eXBlLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVzZXQgPSB7fTtcclxuXHRcdHRoaXMuZGVwZW5kZW50UnVsZXMgPSB7fTtcclxuXHJcblx0XHRpZiAoc3R5bGVzZXQpXHJcblx0XHRcdHRoaXMucGFyc2VJbnB1dFN0eWxlc2V0KCBzdHlsZXNldCBhcyBDb21iaW5lZFN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR29lcyBvdmVyIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuIHN0eWxlc2V0IGFuZCBwYXJzZXMgdGhlbSBpbnRvIHByb3BlciBzdHlsZXNldCwgc2V0IG9mXHJcblx0ICogaW1wb3J0YW50IHByb3BlcnRpZXMgYW5kIGRlcGVuZGVudCBydWxlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlSW5wdXRTdHlsZXNldCggaW5wdXRTdHlsZXNldDogQ29tYmluZWRTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB3ZSBoYXZlIHBhcmVudHMsIHdlIGZpcnN0IGNvcHkgcHJvcGVydGllcyBmcm9tIHRoZW0gc28gdGhhdCBvdXIgb3duIHByb3BlcnRpZXNcclxuXHRcdC8vIGNhbiBvdmVycmlkZSB0aGVtLlxyXG5cdFx0aWYgKGlucHV0U3R5bGVzZXRbXCIrXCJdKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB0aGUgdmFsdWUgaXMgYSBzaW5nbGUgU3R5bGVSdWxlIG9yIGFuIGFycmF5IG9mIFN0eWxlUnVsZXMgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cclxuXHRcdFx0bGV0IGV4dGVuZHNQcm9wVmFsID0gaW5wdXRTdHlsZXNldFtcIitcIl0gYXMgKFN0eWxlUnVsZSB8IFN0eWxlUnVsZVtdKTtcclxuXHRcdFx0bGV0IHBhcmVudFJ1bGVzOiBTdHlsZVJ1bGVbXTtcclxuXHRcdFx0aWYgKGV4dGVuZHNQcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVSdWxlKVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gW2V4dGVuZHNQcm9wVmFsXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gZXh0ZW5kc1Byb3BWYWw7XHJcblxyXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIHBhcmVudCBydWxlcywgY29weSBzdHlsZXNldHMgYW5kIGRlcGVuZGVudCBydWxlcyBmcm9tIHRoZW0uXHJcblx0XHRcdGlmIChwYXJlbnRSdWxlcyAmJiBwYXJlbnRSdWxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyZW50UnVsZXMuZm9yRWFjaCggcGFyZW50ID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBwYXJlbnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWVyZ2UgY3VzdG9tICBwcm9wZXJ0aWVzXHJcblx0XHRtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRoaXMuc3R5bGVzZXQsIGlucHV0U3R5bGVzZXQpO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIGlucHV0U3R5bGVzZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgb3ZlciBhbHJlYWR5IHByb2Nlc3NlZCBwYXJlbnRzLCBpbXBvcnRhbnQgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzXHJcblx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCIrXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBwcm9wVmFsID0gaW5wdXRTdHlsZXNldFtwcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiOlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGlzIGlzIGFuIGFycmF5IG9mIHR1cGxlcyByZXByZXNlbnRpbmdcclxuXHRcdFx0XHQvLyBwYXJhbWV0ZXJpc2VkIHBzZXVkbyBlbnRpdGllcyB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcGFyYW1ldGVyIHZhbHVlXHJcblx0XHRcdFx0Ly8gKHN0cmluZykgYW5kIHRoZSBzZWNvbmQgdGhlIENvbWJpbmVkU3R5bGVzZXQuIE90aGVyd2lzZSwgdGhlIHZhbHVlIGlzIGp1c3QgYW5cclxuXHRcdFx0XHQvLyBDb21iaW5lZFN0eWxlc2V0LlxyXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFthbnksIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdFx0cHJvcE5hbWUsIHR1cGxlWzBdLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ldyBEZXBlbmRlbnRSdWxlKCBcIiZcIiArIHByb3BOYW1lLCB1bmRlZmluZWQsXHJcblx0XHRcdFx0XHRcdHByb3BWYWwgYXMgQ29tYmluZWRTdHlsZXNldCwgdGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiJlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHR0dXBsZVswXSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0KCkgPT4gcHJvcE5hbWUgKyBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSksIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuZW5kc1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSkgKyBwcm9wTmFtZSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGlzIGlzIGEgcmVndWxhciBDU1MgcHJvcGVydHk6IGNvcHkgdGhlIHByb3BlcnR5IHZhbHVlIHRvIG91ciBpbnRlcm5hbCBzdHlsZXNldFxyXG5cdFx0XHRcdHRoaXMuc3R5bGVzZXRbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBwcm9jZXNzIHRoZW0gdW5kZXIgdGhlIHNhbWUgY29udGFpbmVyXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHByb3RlY3RlZCBjb3B5RnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uIGEgbmV3bHkgY3JlYXRlZCBvYmplY3Qgc28gd2UgZG9uJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyBpblxyXG5cdFx0Ly8gb3VyIG93biBzdHlsZXNldCB5ZXRcclxuXHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgc3JjLnN0eWxlc2V0KTtcclxuXHRcdHRoaXMuY29weURlcGVuZGVudFJ1bGVzRnJvbSggc3JjKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGRlcGVuZGVudCBydWxlcyBmcm9tIGFub3RoZXIgc3R5bGUgcnVsZSBvYmplY3QuXHJcblx0cHJpdmF0ZSBjb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzcmMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gc3JjLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGFyciA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmICghYXJyKVxyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBhcnIgPSBbXTtcclxuXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoc3JjRGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IHNyY0RlcFJ1bGUuY2xvbmUoKSBhcyBEZXBlbmRlbnRSdWxlO1xyXG5cdFx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0XHRhcnIucHVzaCggbmV3RGVwUnVsZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld0RlcFJ1bGUgPSAocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBuZXdEZXBSdWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBydWxlLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiBgJHt0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nfSB7JHtzdHlsZXNldFRvU3RyaW5nKCB0aGlzLnN0eWxlc2V0KX19YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN0eWxlUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gdGhpcy5jbG9uZU9iamVjdCgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzZXQpLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCB0aGlzLnRvQ3NzU3RyaW5nKCksIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgaW5zZXJ0IHRoZW0gdW5kZXIgdGhlIHNhbWUgcGFyZW50XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuaW5zZXJ0KCBwYXJlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGNsZWFyIHRoZW0gdG9vXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5jbGVhcigpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsZWFyKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRwdWJsaWMgZ2V0IHNlbGVjdG9yVGV4dCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFsbG93cyB0aGUgb2JqZWN0IHRvIHBhcnRpY3BhdGUgaW4gXCJ2YWx1ZVRvU3RyaW5nXCIgc2VyaWFsaXphdGlvbi4gV2hlbmV2ZXJcclxuXHQgKiB0aGUgU3R5bGVSdWxlLWRlcml2ZWQgb2JqZWN0IGlzIGVuY291bnRlcmVkIGJ5IHRoZSBgVXRpbEZ1bmMudmFsdWVUb1N0cmluZ2AgZnVuY3Rpb24sXHJcblx0ICogdGhlIHJ1bGUncyBzZWxlY3RvciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0b3JUZXh0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IHN0eWxlIHJ1bGUgb2JqZWN0IG9mIHRoZSBwcm9wZXIgdHlwZSwgYnV0IHdpdGhvdXQgdGhlIHN0eWxlc2V0IGFuZCBkZXBlbmRlbnRcclxuXHQvLyBydWxlcy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY2xvbmVPYmplY3QoKTogU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sXHJcbiAgICAgICAgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0ZGVsZXRlIHRoaXMuc3R5bGVzZXRbbmFtZV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc3R5bGVzZXRbbmFtZV0gPSBpbXBvcnRhbnQgPyB7IFwiIVwiOiB2YWx1ZSBhcyBhbnkgfSA6IHZhbHVlIGFzIGFueTtcclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcbiAgICAgICAge1xyXG5cdFx0ICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc1J1bGUsIGNhbWVsVG9EYXNoKCBuYW1lKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIG5hbWUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gdmFyT2JqIElWYXJSdWxlIG9iamVjdCBkZWZpbmluZyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhclZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0Q3VzdG9tUHJvcDxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgdmFsdWU6IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF2YXJPYmogfHwgISh2YXJPYmogaW5zdGFuY2VvZiBWYXJSdWxlKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGZpcnN0IHNldC9yZW1vdmUgdGhlIHZhbHVlIGluIG91ciBpbnRlcm5hbCBzdHlsZXNldCBvYmplY3RcclxuXHRcdGxldCBjdXJyQ3VzdG9tUHJvcHMgPSB0aGlzLnN0eWxlc2V0W1wiLS1cIl0gYXMgQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG5cdFx0aWYgKGN1cnJDdXN0b21Qcm9wcyB8fCB2YWx1ZSAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBjdXJyQ3VzdG9tUHJvcHMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW1bMF0gPT09IHZhck9iaik7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKGN1cnJDdXN0b21Qcm9wcy5sZW5ndGggPT09IDEpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIi0tXCJdID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWN1cnJDdXN0b21Qcm9wcylcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbXCItLVwiXSA9IGN1cnJDdXN0b21Qcm9wcyA9IFtbdmFyT2JqLCB2YWx1ZV1dO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBjdXJyQ3VzdG9tUHJvcHMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW1bMF0gPT09IHZhck9iaik7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMClcclxuXHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzW2luZGV4XVsxXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHMucHVzaCggW3Zhck9iaiwgdmFsdWVdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggdGhpcy5jc3NSdWxlLCB2YXJPYmouY3NzTmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgdmFsdWUsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cHVibGljIGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0Ly8gUmVzdWx0YW50IG9iamVjdCBkZWZpbmluZyBwcm9wZXJ0aWVzIHRvIGJlIGluc2VydGVkIGludG8gRE9NLlxyXG5cdHByaXZhdGUgc3R5bGVzZXQ6IFN0eWxlc2V0O1xyXG5cclxuXHQvLyBTZWxlY3RvciBzdHJpbmcgY2FjaGVkIGFmdGVyIGl0IGlzIGZpcnN0IG9idGFpbmVkLiBOZWVkZWQgdG8gbm90IGludm9rZSBnZXRTZWxlY3RvclN0cmluZ1xyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBwcmVzZW5jZSBvZiBkZXBlbmRlbnQgcnVsZXMuXHJcblx0cHJpdmF0ZSBjYWNoZWRTZWxlY3RvclN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBEZXBlbmRlbnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgZGVwZW5kcyBvbiB0aGUgY29udGFpbmluZyBzdHlsZSBydWxlLiBUaGlzXHJcbiAqIGlzIHVzZWQgZm9yIHBzZXVkbyBjbGFzc2VzLCBwc2V1ZG8gZWxlbWVudHMsIGNvbWJpbmF0b3JzIGFuZCBvdGhlciBzZWxlY3RvcnMgdGhhdCBjb21iaW5lIHRoZVxyXG4gKiBjb250YWluaW5nIHJ1bGUncyBzZWxlY3RvciB3aXRoIGFkZGl0aW9uYWwgc2VsZWN0b3IgaXRlbXMuXHJcbiAqL1xyXG5jbGFzcyBEZXBlbmRlbnRSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHQvLyBmb3IgcmVndWxhciBzZWxlY3RvcnMsIHBzZXVkbyBjbGFzc2VzIGFuZCBwc2V1ZG8gZWxlbWVudHMsIHRoZSBzZWxlY3RvciBhbHJlYWR5IGNvbnRhaW5zXHJcblx0Ly8gdGhlIGFtcGVyc2FuZCBhbmQgdGhlIHNlbGVjdG9yUGFyYW0gaXMgdW5kZWZpbmVkLiBGb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcywgcHN1ZG9cclxuXHQvLyBlbGVtZW50cyBhbmQgY29tYmluYXRvcnMsIHRoZSBzZWxlY3RvclBhcmFtIGlzIGRlZmluZWQgYW5kIHRoZSBzZWxlY3RvciBpcyBqdXN0IHRoZSBlbnRpdHlcclxuXHQvLyBuYW1lLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzZWxlY3RvclBhcmFtPzogYW55LCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsXHJcblx0XHRjb250YWluaW5nUnVsZT86IFN0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdFx0dGhpcy5zZWxlY3RvclBhcmFtID0gc2VsZWN0b3JQYXJhbTtcclxuXHRcdHRoaXMuY29udGFpbmluZ1J1bGUgPSBjb250YWluaW5nUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IERlcGVuZGVudFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IERlcGVuZGVudFJ1bGUoIHRoaXMuc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHRoaXMuY29udGFpbmluZ1J1bGUhLnNlbGVjdG9yVGV4dDtcclxuXHRcdGlmICh0aGlzLnNlbGVjdG9yUGFyYW0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgYXMgc3RyaW5nO1xyXG5cdFx0XHRyZXR1cm4gYCR7cGFyZW50U2VsZWN0b3J9JHtzZWxlY3Rvcn0oJHtwc2V1ZG9FbnRpdHlUb1N0cmluZyggc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSl9KWA7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnZlcnQgc2VsZWN0b3IgdG8gc3RyaW5nLlxyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSBzZWxlY3RvclRvU3RyaW5nKCB0aGlzLnNlbGVjdG9yKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBzZWxlY3RvciBzdHJpbmcgZG9lc24ndCBoYXZlIGFueSBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCwgd2VcclxuXHRcdFx0Ly8gc2ltcGx5IGFwcGVuZCB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBzZWxlY3Rvcjsgb3RoZXJ3aXNlLCB3ZSByZXBsYWNlIGFsbFxyXG5cdFx0XHQvLyBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpbiB0aGUgc2VsZWN0b3Igc3RyaW5nIHdpdGggdGhlIHNlbGVjdG9yXHJcblx0XHRcdC8vIHN0cmluZyBvZiB0aGUgcGFyZW50IHJ1bGUuXHJcblx0XHRcdHJldHVybiBzZWxlY3Rvci5pbmRleE9mKCBcIiZcIikgPCAwXHJcblx0XHRcdFx0PyBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfWBcclxuXHRcdFx0XHQ6IHNlbGVjdG9yLnJlcGxhY2UoIC8mL2csIHBhcmVudFNlbGVjdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFydGlhbCBzZWxlY3RvciB0aGF0IHNob3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgcGFyZW50IHNlbGVjdG9yLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG5cclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VsZWN0b3IgLSB1c2VkIGZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGFuZCBlbGVtZW50cy5cclxuXHRwcml2YXRlIHNlbGVjdG9yUGFyYW0/OiBhbnk7XHJcblxyXG5cdC8vIFBhcmVudCBzdHlsZSBydWxlIG9mIHdoaWNoIHRoaXMgcnVsZSBpcyBkZXBlbmRlbnQuXHJcblx0cHVibGljIGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQWJzdHJhY3RSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGJhc2UgZm9yIG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBYnN0cmFjdFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFic3RyYWN0UnVsZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gT3ZlcnJpZGVzIHRoZSBTdHlsZVJ1bGUncyBpbXBsZW1lbnRhdGlvbiB0byBkbyBub3RoaW5nLiBObyBDU1NTdHlsZVJ1bGUgaXMgY3JlYXRlZCBmb3JcclxuXHQvLyBhYnN0cmFjdCBydWxlcy5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZWRTdHlsZVJ1bGUgY2xhc3MgaXMgYSBiYXNlIGZvciBzdHlsZSBydWxlIGNsYXNzZXMgdGhhdCBhcmUgYWxzbyBuYW1lZCBlbnRpdGllcyAtIHN1Y2hcclxuICogYXMgY2xhc3MgcnVsZSBhbmQgSUQgcnVsZS5cclxuICovXHJcbmFic3RyYWN0IGNsYXNzIE5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5jc3NQcmVmaXgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIEltcGxlbWVudGF0aW9uIG9mIHRoZSB0b1N0cmluZyBtZXRob2QgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcnVsZSAod2l0aG91dCB0aGUgQ1NTIHByZWZpeCkuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJvdGVjdGVkIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElDbGFzc1J1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNsYXNzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0NsYXNzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiLlwiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSURSdWxlIGV4dGVuZHMgTmFtZWRTdHlsZVJ1bGUgaW1wbGVtZW50cyBJSURSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0lETmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogSURSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJRFJ1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiI1wiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RvclJ1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvclJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBTZWxlY3RvclJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsMnN0ciggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBzZWxlY3RvciBvYmplY3QgZm9yIHRoaXMgcnVsZS5cclxuXHRwcml2YXRlIHNlbGVjdG9yOiBDc3NTZWxlY3RvcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lWYXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1ZhclZhbHVlVHlwZSwgVmFyVGVtcGxhdGVOYW1lfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2V9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuIFZhclJ1bGUgZG9lcyBub3QgZGVyaXZlIGZyb20gdGhlIFJ1bGVcclxuICogY2xhc3MgYmVjYXVzZSBpdCBpcyBub3QgYSByZWFsIENTUyBydWxlOyBob3dldmVyLCBpbiBtYW55IGFzcGVjdHMgaXQgcmVwZWF0cyB0aGUgUnVsZSdzXHJcbiAqIGZ1bmN0aW9uYWxpdHkuIEluIHBhcnRpY3VsYXIgaXQgaGFzIHRoZSBwcm9jZXNzIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIGl0IHRvIG9idGFpbiBhbiBhY3R1YWxcclxuICogbmFtZSwgd2hpY2ggd2lsbCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgYW5kIHVzaW5nIHRoaXMgY3VzdG9tIHByb3BlcnR5IGluIENTUy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSB0aGUgdHlwZSBwYXJhbWV0ZXIgSyBpcyBhIGtleSBvZiB0aGUgSUNzc1N0eWxlc2V0IGludGVyZmFjZSwgdGhlIHZhbHVlIGlzIG9mXHJcbiAqIHR5cGUgSVN0aWxlc2V0W0tdLCB3aGljaCBpcyBFeHRlbmRlZDxJQ3NzU3R5bGVzZXRbS10+LiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nIHZhbHVlcyB0aGF0IGFyZVxyXG4gKiB2YWxpZCBmb3IgdGhlIEV4dGVuZGVkIHJvcGVydHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYXJSdWxlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+IGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJVmFyUnVsZTxLPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZTogSywgdmFsdWU/OiBWYXJWYWx1ZVR5cGU8Sz4sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+KVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCItLVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFZhclJ1bGU8Sz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFZhclJ1bGU8Sz4odGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWUgPT0gbnVsbCA/IG51bGwgOiBgJHt0aGlzLmNzc05hbWV9OiAke3N0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZhbHVlLCB0cnVlKX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgdmFyKC0tbmFtZSkgZXhwcmVzc2lvbi5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIGB2YXIoJHt0aGlzLmNzc05hbWV9KWA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldFZhbHVlKCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnNldEN1c3RvbVZhclZhbHVlKCB0aGlzLmNzc05hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHZhbHVlLCB0cnVlKSxcclxuICAgICAgICAgICAgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKVxyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8vIC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIC8vIG51bGwgZm9yIFN0eWxlc2hlZXQuXHJcblx0Ly8gcHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRwdWJsaWMgdGVtcGxhdGU6IEs7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+O1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SU5hbWVkQ29sb3JzLCBDc3NDb2xvciwgQ29sb3JzfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NBbmdsZU1hdGgsIHZhbDJzdHJ9IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByZWRlZmluZWQgY29sb3IgbmFtZXMgYnkgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuIE9ubHkgYnVpbHQtaW4gY29sb3IgbmFtZXMgd2lsbCBiZSBpblxyXG4gKiB0aGlzIG1hcCAtIHRob3NlIG5hbWVkIGNvbG9ycyB0aGF0IGFyZSBhZGRlZCB1c2luZyBtb2R1bGUgYXVnbWVudGF0aW9uIHdpbGwgTk9UIHJlc2lkZSBpblxyXG4gKiB0aGlzIG1hcC4gVGhpcyBpcyBuZWVkZWQgdG8gY29udmVydCB0aGUgbnVtZXJpYyBjb2xvciB2YWx1ZXMgc2V0IHVzaW5nIHRoZSBDb2xvci5icm93blxyXG4gKiBub3RhdGlvbiB0byB0aGVpciBuYW1lcyB3aGVuIGluc2VydGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5sZXQgcmV2ZXJzZWRDb2xvck1hcCA9IG5ldyBNYXA8bnVtYmVyLHN0cmluZz4oKTtcclxuXHJcbi8vIGJ1aWxkIFJldmVyc2VkIENvbG9yIE1hcFxyXG5PYmplY3QuZW50cmllcyggQ29sb3JzKS5mb3JFYWNoKCAoW25hbWUsIHZhbHVlXSkgPT4gcmV2ZXJzZWRDb2xvck1hcC5zZXQoIHZhbHVlLCBuYW1lKSApO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIGNvbG9yIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGNvbG9yTnVtYmVyVG9TdHJpbmcoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHRoZSBudW1iZXIgaXMgbmVnYXRpdmUsIHJlbWVtYmVyIHRoYXQgZmFjdCBhbmQgZ2V0IHRoZSBwb3NpdGl2ZSBudW1iZXJcclxuICAgIGxldCBuID0gdmFsIDwgMCA/IC12YWwgOiB2YWw7XHJcbiAgICBsZXQgaXNOZWdhdGl2ZSA9IG4gIT09IHZhbDtcclxuXHJcbiAgICAvLyBpZiB0aGUgbnVtYmVyIGhhcyBhIGZsb2F0aW5nIHBvaW50IHBhcnQsIHNlcGFyYXRlIGl0IGludG8gYWxwaGEgY2hhbm5lbFxyXG4gICAgbGV0IGEgPSAwO1xyXG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG4pKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBrID0gTWF0aC5mbG9vcihuKTtcclxuICAgICAgICAvLyBhID0gTWF0aC5yb3VuZCggKG4gLSBrKSAqIDEwMCk7XHJcbiAgICAgICAgYSA9IE1hdGgucm91bmQoIChuIC0gaykgKiAyNTUpO1xyXG4gICAgICAgIG4gPSBrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBudW1iZXIgd2FzIG5lZ2F0aXZlIHdlIHJldmVydCB0aGUgY29sb3IgYnkgbmVnYXRpbmcgYWxsIHRoZSBiaXRzLiBJbiBhbnkgY2FzZSxcclxuICAgIC8vIHdlIGNsZWFyIGV2ZXJ5dGhpbmcgYmV5b25kIHRoZSBmaXJzdCB0aHJlZSBieXRlcy5cclxuICAgIG4gPSBpc05lZ2F0aXZlID8gfigweEZGMDAwMDAwIHwgbikgOiAweDAwRkZGRkZGICYgbjtcclxuXHJcbiAgICBpZiAoYSA+IDApXHJcbiAgICAgICAgLy8gcmV0dXJuIGNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIG4sIGEpO1xyXG4gICAgICAgIC8vIHJldHVybiByZ2JUb1N0cmluZyggKG4gJiAweEZGMDAwMCkgPj4gMTYsIChuICYgMHgwMEZGMDApID4+IDgsIG4gJiAweDAwMDBGRiwgYSk7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgbi50b1N0cmluZygxNikucGFkU3RhcnQoIDYsIFwiMFwiKSArIGEudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCAyLCBcIjBcIik7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVkIGNvbG9yIHdpdGggdGhlIGdpdmVuIHZhbHVlLCByZXR1cm4gdGhlIGNvbG9yIG5hbWVcclxuICAgICAgICBsZXQgbmFtZSA9IHJldmVyc2VkQ29sb3JNYXAuZ2V0KCBuKTtcclxuICAgICAgICByZXR1cm4gbmFtZSA/IG5hbWUgOiBcIiNcIiArIG4udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCA2LCBcIjBcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzZXBhcmF0aW9uIHZhbHVlIHRvIGEgQ1NTIHN0cmluZy4gU2VwYXJhdGlvbiBhcmUgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXJcclxuICogd2l0aCB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBJbnRlZ2VyIG51bWJlciAtMjU1IHRvIDI1NS4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuIE5lZ2F0aXZlIG51bWJlcnNcclxuICogICAgIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgLTEuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgICAgRmxvYXRpbmcgbnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIHJvdW5kZWQgYW5kIHRyZWF0ZWQgYXMgaW50ZWdlciBudW1iZXJzLiBOZWdhdGl2ZVxyXG4gKiAgICAgbnVtYmVycyB3aWxsIGJlIGludmVydGVkLlxyXG4gKiBcclxuICogQHBhcmFtIGMgQ29sb3Igc2VwYXJhdGlvbiB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIHNlcGFyYXRpb25Ub1N0cmluZyggYzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChjICE9PSAwICYmIGMgPiAtMSAmJiBjIDwgMSlcclxuICAgIHtcclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAxICsgYztcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoIGMgKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2xhbXAgdGhlIHZhbHVlIGJldHdlZW4gLTI1NSBhbmQgMjU1XHJcbiAgICAgICAgYyA9IGMgPiAyNTUgPyAyNTUgOiBjIDwgLTI1NSA/IC0yNTUgOiBjO1xyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoYykpXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLnJvdW5kKGMpO1xyXG5cclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAyNTUgKyBjO1xyXG5cclxuICAgICAgICByZXR1cm4gYy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSB0byBhIENTUyBzdHJpbmcuIEFscGhhIGlzIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICovXHJcbmZ1bmN0aW9uIGFscGhhVG9TdHJpbmcoIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgYWxwaGEgaXMgbnVsbCBvciB1bmRlZmluZWQsIHNldCBpdCB0byAxXHJcbiAgICBpZiAoYSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIjFcIjtcclxuXHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIG9mIGFscGhhIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgYSA9IC1hO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBzZXQgaXQgdG8gMTsgb3RoZXJ3aXNlLCBcclxuICAgIHJldHVybiAoYSA+IDEwMCA/IDEgOiBhID4gMSA/IGEgLyAxMDAgOiBhKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIHJlZCwgZ3JlZW4sIGJsdWUgc2VwYXJhdGlvbiB2YWx1ZXMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIEVhY2ggY29sb3Igc2VwYXJhdGlvbiBjYW4gYmUgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXIgd2l0aFxyXG4gKiB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBJbnRlZ2VyIG51bWJlciAtMjU1IHRvIDI1NS4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuIE5lZ2F0aXZlIG51bWJlcnNcclxuICogICAgIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgLTEuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgICAgRmxvYXRpbmcgbnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIHJvdW5kZWQgYW5kIHRyZWF0ZWQgYXMgaW50ZWdlciBudW1iZXJzLiBOZWdhdGl2ZVxyXG4gKiAgICAgbnVtYmVycyB3aWxsIGJlIGludmVydGVkLlxyXG4gKiBcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIHIgUmVkIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBnIEdyZWVuIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBiIEJsdWUgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9TdHJpbmcoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7c2VwYXJhdGlvblRvU3RyaW5nKCByKX0sJHtzZXBhcmF0aW9uVG9TdHJpbmcoIGcpfSwke3NlcGFyYXRpb25Ub1N0cmluZyggYil9LCR7YWxwaGFUb1N0cmluZyggYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHJlcHJlc2VudGluZyBlaXRoZXIgc2F0dXJhdGlvbiBvciBsaWdodG5lc3MgaW4gdGhlIEhTTCBzY2hlbWUgdG8gcGVyY2VudGFnZTpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sb3JQZXJjZW50VG9TdHJpbmcoIG46IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAobiA8IDApXHJcbiAgICAgICAgbiA9IC1uO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBjbGFtcCBpdC4gXHJcbiAgICByZXR1cm4gKG4gPiAxMDAgPyAxMDAgOiBNYXRoLnJvdW5kKG4gPD0gMSA/IG4gKiAxMDAgOiBuKSkudG9TdHJpbmcoKSArIFwiJVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIGh1ZS1zYXR1cmF0aW9uLWxpZ2h0bmVzcyBjb21wb25lbnRzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBIdWUgY29tcG9uZW50IGlzIHRyZWF0ZWQgYXMgdGhlIENTUyBgPGFuZ2xlPmAgdHlwZS4gTnVtYmVycyBhcmUgY29uc2lkZXJlZCBkZWdyZWVzLlxyXG4gKiBcclxuICogVGhlIFNhdHVyYXRpb24gYW5kIExpZ2h0bmVzcyBjb21wb25lbnRzIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2VzOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlIGFyZSBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZCB0byAxMDAuXHJcbiAqXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSBoIEh1ZSBjb21wb25lbnQgYXMgYW4gYW5nbGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBzIFNhdHVyYXRpb24gY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGwgTGlnaHRuZXNzIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvU3RyaW5nKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgaHNsYSgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGgpfSwke2NvbG9yUGVyY2VudFRvU3RyaW5nKHMpfSwke2NvbG9yUGVyY2VudFRvU3RyaW5nKGwpfSwke2FscGhhVG9TdHJpbmcoIGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JXaXRoQWxwaGFUb1N0cmluZyggYzogbnVtYmVyIHwga2V5b2YgSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgdGhlIGFscGhhIGlzIDAsIHJldHVybiB0cmFuc3BhcmVudCBjb2xvclxyXG4gICAgaWYgKGEgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIFwiIzAwMDBcIjtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGNvbG9yIHRvIG51bWVyaWMgdmFsdWUgKGlmIGl0J3Mgbm90IGEgbnVtYmVyIHlldCkuIElmIHRoZSBjb2xvciB3YXMgZ2l2ZW4gYXMgYVxyXG4gICAgLy8gc3RyaW5nIHRoYXQgd2UgY2Fubm90IGZpbmQgaW4gdGhlIENvbG9ycyBvYmplY3QsIHJldHVybiBwdXJlIHdoaXRlLlxyXG4gICAgbGV0IG4gPSB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IENvbG9yc1tjXSA6IGM7XHJcbiAgICBpZiAobiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIkZGRlwiO1xyXG5cclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgb2YgYWxwaGEgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChhIDwgMClcclxuICAgICAgICBhID0gLWE7XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIDEgb3IgMTAwLCB0aGVuIHNldCBpdCB0byAwIGJlY2F1c2UgMCBpbiB0aGUgY29sb3JOdW1iZXJUb1N0cmluZyBtZWFucyBcIm5vIGFscGhhXCIuXHJcbiAgICBhID0gYSA9PT0gMSB8fCBhID49IDEwMCA/IDAgOiBhID4gMSA/IGEgLyAxMDAgOiBhO1xyXG5cclxuICAgIC8vIG1ha2UgdGhlIG5ldyBhbHBoYVxyXG4gICAgcmV0dXJuIGNvbG9yTnVtYmVyVG9TdHJpbmcoIG4gPiAwID8gbiArIGEgOiBuIC0gYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuIElmIGEgc3RyaW5nIHZhbHVlIGlzIGluIHRoZSBDb2xvcnMgb2JqZWN0IHdlXHJcbiAqIG5lZWQgdG8gZ2V0IGl0cyBudW1iZXIgYW5kIGNvbnZlcnQgaXQgdG8gdGhlIHJnYlthXSgpIGZ1bmN0aW9uIGJlY2F1c2UgaXQgbWlnaHQgYmUgYSBjdXN0b21cclxuICogY29sb3IgbmFtZSBhZGRlZCB2aWEgSU5hbWVkQ29sb3JzIG1vZHVsZSBhdWdtZW50YXRpb24uIEZvciBudW1lcmljIHZhbHVlcywgd2UgY2hlY2sgaWYgdGhpcyBpc1xyXG4gKiBvbmUgb2YgdGhlIHByZWRlZmluZWQgY29sb3JzIGFuZCByZXR1cm4gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzQ29sb3I+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IENvbG9yc1t2XSA/IGNvbG9yTnVtYmVyVG9TdHJpbmcoIENvbG9yc1t2XSkgOiB2LFxyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yTnVtYmVyVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyB0eXBlcyBmb3Igd29ya2luZyB3aXRoIENTUyBjb2xvcnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSUdlbmVyaWNQcm94eSB9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZENvbG9ycyBpbnRlcmZhY2UgbGlzdHMgdGhlIG5hbWVzIG9mIHN0YW5kYXJkIFdlYiBjb2xvcnMuIEl0IGlzIG5lZWRlZCB0byBhbGxvdyBkZXZlbG9wZXJzXHJcbiAqIHRvIGFkZCBuZXcgbmFtZWQgY29sb3JzIHRocm91Z2ggbW9kdWxlIGF1Z21lbnRhdGlvbiB0ZWNobmlxdWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZENvbG9yc1xyXG57XHJcbiAgICByZWFkb25seSBibGFjazogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWx2ZXI6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmF5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYXJvb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWQ6ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwdXJwbGU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmdWNoc2lhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3c6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZ5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVlOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0ZWFsOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2U6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbGljZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbnRpcXVld2hpdGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhbWFyaW5lOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhenVyZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiZWlnZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiaXNxdWU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibGFuY2hlZGFsbW9uZDogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVldmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBicm93bjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBidXJseXdvb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjYWRldGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaGFydHJldXNlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaG9jb2xhdGU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JhbDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JuZmxvd2VyYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3Juc2lsazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjcmltc29uOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjeWFuOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrYmx1ZTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrY3lhbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JheTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JleTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJra2hha2k6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrbWFnZW50YTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb2xpdmVncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JhbmdlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JjaGlkOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrcmVkOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2FsbW9uOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2VhZ3JlZW46ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVibHVlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmF5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmV5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwcGluazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwc2t5Ymx1ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmF5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmV5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkb2RnZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmaXJlYnJpY2s6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmbG9yYWx3aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmb3Jlc3RncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnYWluc2Jvcm86ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnaG9zdHdoaXRlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkZW5yb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbnllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmV5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob25leWRldzogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob3RwaW5rOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpYW5yZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpZ286ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpdm9yeTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBraGFraTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcmJsdXNoOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXduZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsZW1vbmNoaWZmb246ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGNvcmFsOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGN5YW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdvbGRlbnJvZHllbGxvdzogICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZWVuOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHBpbms6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNhbG1vbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNlYWdyZWVuOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNreWJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JheTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JleTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHN0ZWVsYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW5lbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYWdlbnRhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1ibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1vcmNoaWQ6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1wdXJwbGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zZWFncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zcHJpbmdncmVlbjogICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW10dXJxdW9pc2U6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW12aW9sZXRyZWQ6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaWRuaWdodGJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaW50Y3JlYW06ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaXN0eXJvc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtb2NjYXNpbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZham93aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGRsYWNlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZWRyYWI6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmNoaWQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldmlvbGV0cmVkOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYXBheWF3aGlwOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZWFjaHB1ZmY6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZXJ1OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwaW5rOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwbHVtOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwb3dkZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3N5YnJvd246ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3lhbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWRkbGVicm93bjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWxtb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYW5keWJyb3duOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFncmVlbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFzaGVsbDogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWVubmE6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBza3libHVlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbm93OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzcHJpbmdncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzdGVlbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0YW46ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0aGlzdGxlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0b21hdG86ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0dXJxdW9pc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB2aW9sZXQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGVhdDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZXNtb2tlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3dncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWJlY2NhcHVycGxlOiAgICAgICAgICBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29sb3JQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSBvZiBDU1MgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgZm9yXHJcbiAqIHNwZWNpZnlpbmcgY29sb3JzLiBUaGlzIGludGVyZmFjZSBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlOiByZ2IoKSwgYWxwaGEoKSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sb3JQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJjb2xvclwiPiB7fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTeXN0ZW1Db2xvcnMgdHlwZSBkZWZpbmVzIGtleXdvcmRzIGZvciBzeXN0ZW0gY29sb3JzIHRoYXQgYXJlIHVzZWQgaW4gZm9yY2VkLWNvbG9yIG1vZGVcclxuICogKGJ1dCBjYW4gYmUgYWxzbyB1c2VkIGluIHRoZSByZWd1bGFyIG1vZGUpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3lzdGVtQ29sb3JzID0gXCJBY3RpdmVUZXh0XCIgfCBcIkJ1dHRvbkZhY2VcIiB8IFwiQnV0dG9uVGV4dFwiIHwgXCJDYW52YXNcIiB8IFwiQ2FudmFzVGV4dFwiIHxcclxuICAgIFwiRmllbGRcIiB8IFwiRmllbGRUZXh0XCIgfCBcIkdyYXlUZXh0XCIgfCBcIkhpZ2hsaWdodFwiIHwgXCJIaWdobGlnaHRUZXh0XCIgfCBcIkxpbmtUZXh0XCIgfCBcIlZpc2l0ZWRUZXh0XCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgY29sb3IuIENvbG9yIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAtIGtleXdvcmRzOiBhbnkgc3RyaW5nIHRoYXQgaXMgYSBuYW1lIG9mIGEgcHJvcGVydHkgaW4gdGhlIElOYW1lZENvbG9ycyBpbnRlcmZhY2UuXHJcbiAqIC0gbnVtYmVyOlxyXG4gKiAgIC0gbmVnYXRpdmUgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBpbnZlcnRlZCBjb2xvcnMuXHJcbiAqICAgLSBpbnRlZ2VyIHBhcnQgb2YgdGhlIG51bWJlciBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAweEZGRkZGRiAtIGV2ZXJ5dGhpbmcgZWxzZSBpc1xyXG4gKiAgICAgaWdub3JlZC5cclxuICogICAtIGZsb2F0aW5nIHBvaW50IHBhcnQgb2YgdGhlIG51bWJlciBpcyB0cmVhdGVkIGFzIHBlcmNlbnRzIG9mIGFscGhhIGNoYW5uZWwuIElmIHRoZXJlIGlzIG5vXHJcbiAqICAgICBmbG9hdGluZyBwYXJ0LCBhbHBoYSBpcyAxLlxyXG4gKiAtIGZ1bmN0aW9uczogcmdiKCksIGhzbCgpLCBhbHBoYSgpIGFzIHdlbGwgYXMgYW55IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgSUNvbG9yUHJveHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc0NvbG9yID0gXCJ0cmFuc3BhcmVudFwiIHwgXCJjdXJyZW50Y29sb3JcIiB8IGtleW9mIElOYW1lZENvbG9ycyB8IG51bWJlciB8IElDb2xvclByb3h5IHwgU3lzdGVtQ29sb3JzO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogT2JqZWN0IHdob3NlIHByb3BlcnR5IG5hbWVzIGFyZSBuYW1lcyBvZiB3ZWxsLWtub3duIGNvbG9ycyBhbmQgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGhleGFkZWNpbWFsXHJcbiAqIHJlcHJlc2VudGFydGlvbiBvZiB0aGUgUkdCIHNlcGFyYXRpb25zICh3aXRob3V0IGFuIGFscGhhIG1hc2spLlxyXG4gKi9cclxuZXhwb3J0IGxldCBDb2xvcnM6IElOYW1lZENvbG9ycyA9XHJcbntcclxuICAgIGJsYWNrOiAgICAgICAgICAgICAgICAgIDB4MDAwMDAwLFxyXG4gICAgc2lsdmVyOiAgICAgICAgICAgICAgICAgMHhjMGMwYzAsXHJcbiAgICBncmF5OiAgICAgICAgICAgICAgICAgICAweDgwODA4MCxcclxuICAgIHdoaXRlOiAgICAgICAgICAgICAgICAgIDB4ZmZmZmZmLFxyXG4gICAgbWFyb29uOiAgICAgICAgICAgICAgICAgMHg4MDAwMDAsXHJcbiAgICByZWQ6ICAgICAgICAgICAgICAgICAgICAweGZmMDAwMCxcclxuICAgIHB1cnBsZTogICAgICAgICAgICAgICAgIDB4ODAwMDgwLFxyXG4gICAgZnVjaHNpYTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBncmVlbjogICAgICAgICAgICAgICAgICAweDAwODAwMCxcclxuICAgIGxpbWU6ICAgICAgICAgICAgICAgICAgIDB4MDBmZjAwLFxyXG4gICAgb2xpdmU6ICAgICAgICAgICAgICAgICAgMHg4MDgwMDAsXHJcbiAgICB5ZWxsb3c6ICAgICAgICAgICAgICAgICAweGZmZmYwMCxcclxuICAgIG5hdnk6ICAgICAgICAgICAgICAgICAgIDB4MDAwMDgwLFxyXG4gICAgYmx1ZTogICAgICAgICAgICAgICAgICAgMHgwMDAwZmYsXHJcbiAgICB0ZWFsOiAgICAgICAgICAgICAgICAgICAweDAwODA4MCxcclxuICAgIGFxdWE6ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgb3JhbmdlOiAgICAgICAgICAgICAgICAgMHhmZmE1MDAsXHJcbiAgICBhbGljZWJsdWU6ICAgICAgICAgICAgICAweGYwZjhmZixcclxuICAgIGFudGlxdWV3aGl0ZTogICAgICAgICAgIDB4ZmFlYmQ3LFxyXG4gICAgYXF1YW1hcmluZTogICAgICAgICAgICAgMHg3ZmZmZDQsXHJcbiAgICBhenVyZTogICAgICAgICAgICAgICAgICAweGYwZmZmZixcclxuICAgIGJlaWdlOiAgICAgICAgICAgICAgICAgIDB4ZjVmNWRjLFxyXG4gICAgYmlzcXVlOiAgICAgICAgICAgICAgICAgMHhmZmU0YzQsXHJcbiAgICBibGFuY2hlZGFsbW9uZDogICAgICAgICAweGZmZWJjZCxcclxuICAgIGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIDB4OGEyYmUyLFxyXG4gICAgYnJvd246ICAgICAgICAgICAgICAgICAgMHhhNTJhMmEsXHJcbiAgICBidXJseXdvb2Q6ICAgICAgICAgICAgICAweGRlYjg4NyxcclxuICAgIGNhZGV0Ymx1ZTogICAgICAgICAgICAgIDB4NWY5ZWEwLFxyXG4gICAgY2hhcnRyZXVzZTogICAgICAgICAgICAgMHg3ZmZmMDAsXHJcbiAgICBjaG9jb2xhdGU6ICAgICAgICAgICAgICAweGQyNjkxZSxcclxuICAgIGNvcmFsOiAgICAgICAgICAgICAgICAgIDB4ZmY3ZjUwLFxyXG4gICAgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgMHg2NDk1ZWQsXHJcbiAgICBjb3Juc2lsazogICAgICAgICAgICAgICAweGZmZjhkYyxcclxuICAgIGNyaW1zb246ICAgICAgICAgICAgICAgIDB4ZGMxNDNjLFxyXG4gICAgY3lhbjogICAgICAgICAgICAgICAgICAgMHgwMGZmZmYsXHJcbiAgICBkYXJrYmx1ZTogICAgICAgICAgICAgICAweDAwMDA4YixcclxuICAgIGRhcmtjeWFuOiAgICAgICAgICAgICAgIDB4MDA4YjhiLFxyXG4gICAgZGFya2dvbGRlbnJvZDogICAgICAgICAgMHhiODg2MGIsXHJcbiAgICBkYXJrZ3JheTogICAgICAgICAgICAgICAweGE5YTlhOSxcclxuICAgIGRhcmtncmVlbjogICAgICAgICAgICAgIDB4MDA2NDAwLFxyXG4gICAgZGFya2dyZXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJra2hha2k6ICAgICAgICAgICAgICAweGJkYjc2YixcclxuICAgIGRhcmttYWdlbnRhOiAgICAgICAgICAgIDB4OGIwMDhiLFxyXG4gICAgZGFya29saXZlZ3JlZW46ICAgICAgICAgMHg1NTZiMmYsXHJcbiAgICBkYXJrb3JhbmdlOiAgICAgICAgICAgICAweGZmOGMwMCxcclxuICAgIGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIDB4OTkzMmNjLFxyXG4gICAgZGFya3JlZDogICAgICAgICAgICAgICAgMHg4YjAwMDAsXHJcbiAgICBkYXJrc2FsbW9uOiAgICAgICAgICAgICAweGU5OTY3YSxcclxuICAgIGRhcmtzZWFncmVlbjogICAgICAgICAgIDB4OGZiYzhmLFxyXG4gICAgZGFya3NsYXRlYmx1ZTogICAgICAgICAgMHg0ODNkOGIsXHJcbiAgICBkYXJrc2xhdGVncmF5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIDB4MmY0ZjRmLFxyXG4gICAgZGFya3R1cnF1b2lzZTogICAgICAgICAgMHgwMGNlZDEsXHJcbiAgICBkYXJrdmlvbGV0OiAgICAgICAgICAgICAweDk0MDBkMyxcclxuICAgIGRlZXBwaW5rOiAgICAgICAgICAgICAgIDB4ZmYxNDkzLFxyXG4gICAgZGVlcHNreWJsdWU6ICAgICAgICAgICAgMHgwMGJmZmYsXHJcbiAgICBkaW1ncmF5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRpbWdyZXk6ICAgICAgICAgICAgICAgIDB4Njk2OTY5LFxyXG4gICAgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgMHgxZTkwZmYsXHJcbiAgICBmaXJlYnJpY2s6ICAgICAgICAgICAgICAweGIyMjIyMixcclxuICAgIGZsb3JhbHdoaXRlOiAgICAgICAgICAgIDB4ZmZmYWYwLFxyXG4gICAgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgMHgyMjhiMjIsXHJcbiAgICBnYWluc2Jvcm86ICAgICAgICAgICAgICAweGRjZGNkYyxcclxuICAgIGdob3N0d2hpdGU6ICAgICAgICAgICAgIDB4ZjhmOGZmLFxyXG4gICAgZ29sZDogICAgICAgICAgICAgICAgICAgMHhmZmQ3MDAsXHJcbiAgICBnb2xkZW5yb2Q6ICAgICAgICAgICAgICAweGRhYTUyMCxcclxuICAgIGdyZWVueWVsbG93OiAgICAgICAgICAgIDB4YWRmZjJmLFxyXG4gICAgZ3JleTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICBob25leWRldzogICAgICAgICAgICAgICAweGYwZmZmMCxcclxuICAgIGhvdHBpbms6ICAgICAgICAgICAgICAgIDB4ZmY2OWI0LFxyXG4gICAgaW5kaWFucmVkOiAgICAgICAgICAgICAgMHhjZDVjNWMsXHJcbiAgICBpbmRpZ286ICAgICAgICAgICAgICAgICAweDRiMDA4MixcclxuICAgIGl2b3J5OiAgICAgICAgICAgICAgICAgIDB4ZmZmZmYwLFxyXG4gICAga2hha2k6ICAgICAgICAgICAgICAgICAgMHhmMGU2OGMsXHJcbiAgICBsYXZlbmRlcjogICAgICAgICAgICAgICAweGU2ZTZmYSxcclxuICAgIGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIDB4ZmZmMGY1LFxyXG4gICAgbGF3bmdyZWVuOiAgICAgICAgICAgICAgMHg3Y2ZjMDAsXHJcbiAgICBsZW1vbmNoaWZmb246ICAgICAgICAgICAweGZmZmFjZCxcclxuICAgIGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIDB4YWRkOGU2LFxyXG4gICAgbGlnaHRjb3JhbDogICAgICAgICAgICAgMHhmMDgwODAsXHJcbiAgICBsaWdodGN5YW46ICAgICAgICAgICAgICAweGUwZmZmZixcclxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIDB4ZmFmYWQyLFxyXG4gICAgbGlnaHRncmF5OiAgICAgICAgICAgICAgMHhkM2QzZDMsXHJcbiAgICBsaWdodGdyZWVuOiAgICAgICAgICAgICAweDkwZWU5MCxcclxuICAgIGxpZ2h0Z3JleTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRwaW5rOiAgICAgICAgICAgICAgMHhmZmI2YzEsXHJcbiAgICBsaWdodHNhbG1vbjogICAgICAgICAgICAweGZmYTA3YSxcclxuICAgIGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIDB4MjBiMmFhLFxyXG4gICAgbGlnaHRza3libHVlOiAgICAgICAgICAgMHg4N2NlZmEsXHJcbiAgICBsaWdodHNsYXRlZ3JheTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIDB4Nzc4ODk5LFxyXG4gICAgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgMHhiMGM0ZGUsXHJcbiAgICBsaWdodHllbGxvdzogICAgICAgICAgICAweGZmZmZlMCxcclxuICAgIGxpbWVncmVlbjogICAgICAgICAgICAgIDB4MzJjZDMyLFxyXG4gICAgbGluZW46ICAgICAgICAgICAgICAgICAgMHhmYWYwZTYsXHJcbiAgICBtYWdlbnRhOiAgICAgICAgICAgICAgICAweGZmMDBmZixcclxuICAgIG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIDB4NjZjZGFhLFxyXG4gICAgbWVkaXVtYmx1ZTogICAgICAgICAgICAgMHgwMDAwY2QsXHJcbiAgICBtZWRpdW1vcmNoaWQ6ICAgICAgICAgICAweGJhNTVkMyxcclxuICAgIG1lZGl1bXB1cnBsZTogICAgICAgICAgIDB4OTM3MGRiLFxyXG4gICAgbWVkaXVtc2VhZ3JlZW46ICAgICAgICAgMHgzY2IzNzEsXHJcbiAgICBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgICAweDdiNjhlZSxcclxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIDB4MDBmYTlhLFxyXG4gICAgbWVkaXVtdHVycXVvaXNlOiAgICAgICAgMHg0OGQxY2MsXHJcbiAgICBtZWRpdW12aW9sZXRyZWQ6ICAgICAgICAweGM3MTU4NSxcclxuICAgIG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIDB4MTkxOTcwLFxyXG4gICAgbWludGNyZWFtOiAgICAgICAgICAgICAgMHhmNWZmZmEsXHJcbiAgICBtaXN0eXJvc2U6ICAgICAgICAgICAgICAweGZmZTRlMSxcclxuICAgIG1vY2Nhc2luOiAgICAgICAgICAgICAgIDB4ZmZlNGI1LFxyXG4gICAgbmF2YWpvd2hpdGU6ICAgICAgICAgICAgMHhmZmRlYWQsXHJcbiAgICBvbGRsYWNlOiAgICAgICAgICAgICAgICAweGZkZjVlNixcclxuICAgIG9saXZlZHJhYjogICAgICAgICAgICAgIDB4NmI4ZTIzLFxyXG4gICAgb3JhbmdlcmVkOiAgICAgICAgICAgICAgMHhmZjQ1MDAsXHJcbiAgICBvcmNoaWQ6ICAgICAgICAgICAgICAgICAweGRhNzBkNixcclxuICAgIHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIDB4ZWVlOGFhLFxyXG4gICAgcGFsZWdyZWVuOiAgICAgICAgICAgICAgMHg5OGZiOTgsXHJcbiAgICBwYWxldHVycXVvaXNlOiAgICAgICAgICAweGFmZWVlZSxcclxuICAgIHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIDB4ZGI3MDkzLFxyXG4gICAgcGFwYXlhd2hpcDogICAgICAgICAgICAgMHhmZmVmZDUsXHJcbiAgICBwZWFjaHB1ZmY6ICAgICAgICAgICAgICAweGZmZGFiOSxcclxuICAgIHBlcnU6ICAgICAgICAgICAgICAgICAgIDB4Y2Q4NTNmLFxyXG4gICAgcGluazogICAgICAgICAgICAgICAgICAgMHhmZmMwY2IsXHJcbiAgICBwbHVtOiAgICAgICAgICAgICAgICAgICAweGRkYTBkZCxcclxuICAgIHBvd2RlcmJsdWU6ICAgICAgICAgICAgIDB4YjBlMGU2LFxyXG4gICAgcm9zeWJyb3duOiAgICAgICAgICAgICAgMHhiYzhmOGYsXHJcbiAgICByb3lhbGJsdWU6ICAgICAgICAgICAgICAweDQxNjllMSxcclxuICAgIHNhZGRsZWJyb3duOiAgICAgICAgICAgIDB4OGI0NTEzLFxyXG4gICAgc2FsbW9uOiAgICAgICAgICAgICAgICAgMHhmYTgwNzIsXHJcbiAgICBzYW5keWJyb3duOiAgICAgICAgICAgICAweGY0YTQ2MCxcclxuICAgIHNlYWdyZWVuOiAgICAgICAgICAgICAgIDB4MmU4YjU3LFxyXG4gICAgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgMHhmZmY1ZWUsXHJcbiAgICBzaWVubmE6ICAgICAgICAgICAgICAgICAweGEwNTIyZCxcclxuICAgIHNreWJsdWU6ICAgICAgICAgICAgICAgIDB4ODdjZWViLFxyXG4gICAgc2xhdGVibHVlOiAgICAgICAgICAgICAgMHg2YTVhY2QsXHJcbiAgICBzbGF0ZWdyYXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNsYXRlZ3JleTogICAgICAgICAgICAgIDB4NzA4MDkwLFxyXG4gICAgc25vdzogICAgICAgICAgICAgICAgICAgMHhmZmZhZmEsXHJcbiAgICBzcHJpbmdncmVlbjogICAgICAgICAgICAweDAwZmY3ZixcclxuICAgIHN0ZWVsYmx1ZTogICAgICAgICAgICAgIDB4NDY4MmI0LFxyXG4gICAgdGFuOiAgICAgICAgICAgICAgICAgICAgMHhkMmI0OGMsXHJcbiAgICB0aGlzdGxlOiAgICAgICAgICAgICAgICAweGQ4YmZkOCxcclxuICAgIHRvbWF0bzogICAgICAgICAgICAgICAgIDB4ZmY2MzQ3LFxyXG4gICAgdHVycXVvaXNlOiAgICAgICAgICAgICAgMHg0MGUwZDAsXHJcbiAgICB2aW9sZXQ6ICAgICAgICAgICAgICAgICAweGVlODJlZSxcclxuICAgIHdoZWF0OiAgICAgICAgICAgICAgICAgIDB4ZjVkZWIzLFxyXG4gICAgd2hpdGVzbW9rZTogICAgICAgICAgICAgMHhmNWY1ZjUsXHJcbiAgICB5ZWxsb3dncmVlbjogICAgICAgICAgICAweDlhY2QzMixcclxuICAgIHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIDB4NjYzMzk5LFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBGb250RmFjZVR5cGVzIGZyb20gXCIuL0ZvbnRGYWNlVHlwZXNcIlxyXG5pbXBvcnQge29iajJzdHJ9IGZyb20gXCIuL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHtjYW1lbFRvRGFzaCwgdmFsMnN0ciwgQ3NzUGVyY2VudE1hdGgsIENzc0FuZ2xlTWF0aCwgYXJyMnN0ciwgQ3NzTnVtYmVyTWF0aH0gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZm9udCBmYWNlIGRlZmluaXRpb24gb2JqZWN0IHRvIHRoZSBDU1Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udEZhY2VUb1N0cmluZyggZm9udGZhY2U6IEZvbnRGYWNlVHlwZXMuSUZvbnRGYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfTpgO1xyXG4gICAgICAgIGxldCBwcm9wVmFsID0gZm9udGZhY2VbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3RyZXRjaFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHJldGNoVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcImZvbnRTdHlsZVwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHlsZVRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250V2VpZ2h0XCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFdlaWdodFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJzcmNcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3JjVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBwcm9wVmFsO1xyXG5cclxuICAgICAgICBzICs9IFwiO1wiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHMgKyBcIn1cIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3RyZXRjaFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0cmV0Y2hfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFyckZ1bmM6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0eWxlX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgb2JsaXF1ZSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHYpfWAsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBvYmxpcXVlICR7YXJyMnN0ciggdiwgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcpfWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRXZWlnaHRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRXZWlnaHRfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBmb250U2luZ2xlU3JjVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFNpbmdsZVNyY1RvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImxvY2FsXCIsIHYgPT4gYGxvY2FsKCR7dn0pYF0sXHJcbiAgICAgICAgW1widXJsXCIsIHYgPT4gYHVybCgke3Z9KWBdLFxyXG4gICAgICAgIFtcImZvcm1hdFwiLCB2ID0+IGBmb3JtYXQoJHtmb250Rm9ybWF0VG9TdHJpbmcodil9KWBdXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250Rm9ybWF0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBgXFxcIiR7dn1cXFwiYCxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBNZWRpYVR5cGVzIGZyb20gXCIuL01lZGlhVHlwZXNcIlxyXG5pbXBvcnQge3ZhbDJzdHIsIGNhbWVsVG9EYXNoLCBhcnIyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXNwZWN0UmF0aW9Ub1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkFzcGVjdFJhdGlvRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWxbMF0gKyBcIi9cIiArIHZhbFsxXTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5MZW5ndGhGZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwicHhcIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuUmVzb2x1dGlvbkZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJkcGlcIjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG50eXBlIGNvbnZlcnRGdW5jVHlwZTxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gKHZhbDogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS10pID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYUZlYXR1cmVJbmZvIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gdGhhdCB3ZSBrZWVwIGZvciBzdHlsZSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG50eXBlIE1lZGlhRmVhdHVyZUluZm88SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9IGNvbnZlcnRGdW5jVHlwZTxLPiB8IGJvb2xlYW4gfFxyXG4gICAge1xyXG4gICAgICAgIC8qKiBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGZyb20gdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG4gICAgICAgIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGU8Sz47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIGRlZmluZWQsIGluZGljYXRlcyB0aGUgdmFsdWUsIHdoaWNoIHdlIHdpbGwgbm90IHB1dCBpbnRvIENTUyBzdHJpbmcuIFRoaXMgaXMgbmVlZGVkIGZvclxyXG4gICAgICAgICAqIG1lZGlhIGZlYXR1cmVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRob3V0IHRoZSB2YWx1ZSwgZS5nLiBjb2xvciBvciBjb2xvci1pbmRleC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZlYXR1cmUgaXMgYSBcInJhbmdlXCIgZmVhdHVyZTsgdGhhdCBpcywgY2FuIGJlIHVzZWQgaW4gYW5cclxuICAgICAgICAgKiBleHByZXNzaW9uIChhIDw9IGZlYXR1cmUgPD0gYikuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFUeXBlcy5NZWRpYVF1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCBxdWVyeSwge1xyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZU1lZGlhUXVlcnlUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogTWVkaWFUeXBlcy5TaW5nbGVNZWRpYVF1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IG1lZGlhVHlwZSA9IHF1ZXJ5LiRtZWRpYVR5cGU7XHJcbiAgICBsZXQgb25seSA9IHF1ZXJ5LiRvbmx5O1xyXG4gICAgbGV0IG5lZ2F0ZSA9IHF1ZXJ5LiRuZWdhdGU7XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG1lZGlhVHlwZSlcclxuICAgICAgICBpdGVtcy5wdXNoKCAob25seSA/IFwib25seSBcIiA6IFwiXCIpICsgbWVkaWFUeXBlKTtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBxdWVyeSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiRcIikpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlbcHJvcE5hbWVdKVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCBgKCR7bWVkaWFGZWF0dXJlVG9TdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmVnYXRlID8gXCJub3QgXCIgOiBcIlwifSR7aXRlbXMuam9pbihcIiBhbmQgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBmZWF0dXJlIHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGZWF0dXJlVG9TdHJpbmcoIGZlYXR1cmVOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmZWF0dXJlTmFtZSB8fCBwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgXHJcbiAgICBsZXQgaW5mbzogTWVkaWFGZWF0dXJlSW5mbyA9IG1lZGlhRmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xyXG5cclxuICAgIGxldCByZWFsRmVhdHVyZU5hbWUgPSBjYW1lbFRvRGFzaCggZmVhdHVyZU5hbWUpO1xyXG5cclxuICAgIC8vIGlmIGRlZmF1bHRWYWx1ZSBpcyBkZWZpbmVkIGFuZCB0aGUgcHJvcGVydHkgdmFsdWUgaXMgZXF1YWwgdG8gaXQsIG5vIHZhbHVlIHNob3VsZCBiZSByZXR1cm5lZC5cclxuICAgIGxldCBkZWZhdWx0VmFsdWUgPSB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uZGVmYXVsdFZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BWYWwgPT09IGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gXCJcIiA6IHJlYWxGZWF0dXJlTmFtZTtcclxuXHJcbiAgICBsZXQgY29udmVydCA9IHR5cGVvZiBpbmZvID09PSBcImZ1bmN0aW9uXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmNvbnZlcnQgOiB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaXNSYW5nZSA9IHR5cGVvZiBpbmZvID09PSBcImJvb2xlYW5cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uaXNSYW5nZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChpc1JhbmdlICYmICF2YWx1ZU9ubHkgJiYgQXJyYXkuaXNBcnJheSggcHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMxID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFswXSwgY29udmVydCk7XHJcbiAgICAgICAgbGV0IHMyID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFsxXSwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3MxfSA8PSAke3JlYWxGZWF0dXJlTmFtZX0gPD0gJHtzMn1gO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbCwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IHMgOiByZWFsRmVhdHVyZU5hbWUgKyBcIjpcIiArIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbDogYW55LCBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgaWYgKGNvbnZlcnQpXHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnQoIHByb3BWYWwpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWw7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBwcm9wVmFsKSlcclxuICAgICAgICByZXR1cm4gYXJyMnN0ciggcHJvcFZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgbWVkaWFGZWF0dXJlczogeyBbSyBpbiBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldF0/OiBNZWRpYUZlYXR1cmVJbmZvPEs+IH0gPVxyXG57XHJcbiAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIG1pbkFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWF4QXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBjb2xvcjogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGNvbG9ySW5kZXg6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBoZWlnaHQ6IHsgY29udmVydDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5IZWlnaHQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heEhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbW9ub2Nocm9tZTogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIHJlc29sdXRpb246IHsgY29udmVydDogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluUmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsXHJcbiAgICB3aWR0aDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbldpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7dmFsMnN0cn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc2VsZWN0b3IuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB0d28tbnVtYmVyIHR1cGxlIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtIEFuK0IuXHJcbiAqL1xyXG5mdW5jdGlvbiBudGhUdXBsZVRvU3RyaW5nKCB2YWw6IFtudW1iZXIsIG51bWJlcj9dKTogc3RyaW5nXHJcbntcclxuXHRsZXQgdjAgPSB2YWwyc3RyKCB2YWxbMF0pO1xyXG5cdGxldCB2MW4gPSB2YWxbMV07XHJcblxyXG5cdC8vIHRoZSAnIXYxbicgZXhwcmVzc2lvbiBjb3ZlcnMgbnVsbCwgdW5kZWZpbmVkIGFuZCAwLlxyXG5cdGxldCB2MSA9ICF2MW4gPyBcIlwiIDogdjFuID4gMCA/IFwiK1wiICsgdmFsMnN0ciggdjFuKSA6IFwiLVwiICsgdmFsMnN0ciggLXYxbik7XHJcblxyXG5cdHJldHVybiBgJHt2MH1uJHt2MX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JUb1N0cmluZyggdmFsOiBDc3NTZWxlY3Rvcik6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG5cdFx0YXJyU2VwOiBcIlwiXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHBhcmFtZXRlcml6ZWQgcHNldWRvIGVudGl0eS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9FbnRpdHlUb1N0cmluZyggZW50aXR5TmFtZTogc3RyaW5nLCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFlbnRpdHlOYW1lKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdGlmIChlbnRpdHlOYW1lLnN0YXJ0c1dpdGgoIFwiOm50aFwiKSlcclxuXHRcdHJldHVybiB2YWwyc3RyKCB2YWwsIHsgZnJvbUFycmF5OiBudGhUdXBsZVRvU3RyaW5nIH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiB2YWwyc3RyKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkU3R5bGVzZXQsIEFuaW1hdGlvbl9TaW5nbGUsIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSwgQmFja2dyb3VuZF9TaW5nbGUsIEJhY2tncm91bmRTaXplX1NpbmdsZSxcclxuICAgIEJvcmRlckltYWdlX09iamVjdCwgQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGUsIEJveFNoYWRvd19TaW5nbGUsIEJvcmRlclJhZGl1c19TdHlsZVR5cGUsXHJcbiAgICBCb3JkZXJfU3R5bGVUeXBlLCBDb2x1bW5zX1N0eWxlVHlwZSwgQ3Vyc29yX1N0eWxlVHlwZSwgRmxleF9TdHlsZVR5cGUsIEZvbnRfU3R5bGVUeXBlLFxyXG4gICAgR3JpZFRlbXBsYXRlQXJlYXNfU3R5bGVUeXBlLCBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZSwgTWFya2VyX1N0eWxlVHlwZSwgUm90YXRlX1N0eWxlVHlwZSxcclxuICAgIFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZSwgVHJhbnNpdGlvbl9TaW5nbGUsIE9mZnNldF9TdHlsZVR5cGUsIFN0eWxlc2V0LCBDdXN0b21WYXJfU3R5bGVUeXBlLFxyXG4gICAgVmFyVGVtcGxhdGVOYW1lLCBTdXBwb3J0c1F1ZXJ5LCBTaW5nbGVTdXBwb3J0c1F1ZXJ5LCBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb24sIEdyaWRUcmFja1xyXG59IGZyb20gXCIuL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0V4dGVuZGVkLCBDc3NSYWRpdXMsIE9uZU9yTWFueSwgQ3NzTXVsdGlMZW5ndGgsIENzc011bHRpVGltZX0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYW1lbFRvRGFzaCwgZGFzaFRvQ2FtZWwsIHZhbDJzdHIsIGFycjJzdHIsIElWYWx1ZUNvbnZlcnRPcHRpb25zLFxyXG4gICAgcG9zMnN0ciwgbXVsdGlQb3Myc3RyLCBDc3NMZW5ndGhNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzTnVtYmVyTWF0aCxcclxuICAgIENzc0FuZ2xlTWF0aCwgQ3NzRnJlcXVlbmN5TWF0aCwgQ3NzUGVyY2VudE1hdGgsIENzc1Jlc29sdXRpb25NYXRoLCB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG59IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7Y29sb3JUb1N0cmluZ30gZnJvbSBcIi4vQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCI7XHJcbmltcG9ydCB7SUlEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPik6IHN0cmluZ1xyXG57IHJldHVybiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBcIiBcIik7IH1cclxuXHJcbmZ1bmN0aW9uIG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4pOiBzdHJpbmdcclxueyByZXR1cm4gQ3NzVGltZU1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiLFwiKTsgfVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgZm9yIGNvbnZlcnRpbmcgQ1NTIHByb3BlcnR5IHR5cGVzIHRvIHN0cmluZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QoIHZhbDogQW5pbWF0aW9uX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImNvdW50XCIsIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIixcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcInN0YXRlXCIsXHJcbiAgICAgICAgXCJuYW1lXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUFuaW1hdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QW5pbWF0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE9uZU9yTWFueTxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+Pik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlciggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBzdGVwcygke3ZhbH0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXkoIHZhbDogYW55W10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsIGFzIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSlcclxuICAgICAgICA6IGFycjJzdHIoIHZhbCwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlLCBcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHN0ZXBzIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2WzBdIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uIFlvdSBoYXZlOiAke3ZbMF19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIoIHZbMF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGFuIEludGVnZXIuIFlvdSBoYXZlOiAke3ZbMF19YCk7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBzdGVwcygke3ZbMF19JHt2Lmxlbmd0aCA9PT0gMiA/IFwiLFwiICsgdlsxXSA6IFwiXCJ9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlemllciBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8IDAgfHwgdlswXSA+IDEgfHwgdlsyXSA8IDAgfHwgdlsyXSA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBGaXJzdCBhbmQgdGhpcmQgcGFyYW1ldGVycyBvZiBjdWJpYy1iZXppZXIgYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxLiBZb3UgaGF2ZSAke3ZbMF19IGFuZCAke3ZbMl19YCk7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjdWJpYy1iZXppZXIoJHt2WzBdfSwke3ZbMV19LCR7dlsyXX0sJHt2WzNdfSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0KCB2YWw6IEJhY2tncm91bmRfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXSxcclxuICAgICAgICBcImltYWdlXCIsXHJcbiAgICAgICAgW1wicG9zaXRpb25cIiwgcG9zMnN0cl0sXHJcbiAgICAgICAgW1wic2l6ZVwiLCBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLCBcIi9cIl0sXHJcbiAgICAgICAgXCJyZXBlYXRcIixcclxuICAgICAgICBcImF0dGFjaG1lbnRcIixcclxuICAgICAgICBcIm9yaWdpblwiLFxyXG4gICAgICAgIFwiY2xpcFwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxCYWNrZ3JvdW5kX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QmFja2dyb3VuZFNpemVfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlVG9TdHJpbmcoIHZhbDogQm9yZGVySW1hZ2VfT2JqZWN0KTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHdpZHRoIGlzIHNwZWNpZmllZCwgYnV0IHNsaWNlIGlzIG5vdCwgd2UgbmVlZCB0byBzZXQgc2xpY2UgdG8gdGhlIGRlZmF1bHQgMTAwJSB2YWx1ZTtcclxuICAgIC8vIGlmIG91dHNldCBpcyBzcGVjaWZpZWQgYnV0IHdpZHRoIGlzIG5vdC4gd2UgbmVlZCB0byBzZXQgd2lkdGggdG8gdGhlIGRlZmF1bHQgMSB2YWx1ZTtcclxuICAgIGxldCB2YWxDb3B5OiBCb3JkZXJJbWFnZV9PYmplY3QgPSBPYmplY3QuYXNzaWduKCB7fSwgdmFsKTtcclxuICAgIGlmICh2YWwuc2xpY2UgPT0gbnVsbCAmJiAodmFsLndpZHRoICE9IG51bGwgfHwgdmFsLm91dHNldCAhPSBudWxsKSlcclxuICAgICAgICB2YWxDb3B5LnNsaWNlID0gXCIxMDAlXCI7XHJcbiAgICBpZiAodmFsLndpZHRoID09IG51bGwgJiYgdmFsLm91dHNldCAhPSBudWxsKVxyXG4gICAgICAgIHZhbENvcHkud2lkdGggPSAxO1xyXG5cclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWxDb3B5LCBbXHJcbiAgICAgICAgXCJzb3VyY2VcIixcclxuICAgICAgICBbXCJzbGljZVwiLCBcImJvcmRlckltYWdlU2xpY2VcIl0sXHJcbiAgICAgICAgW1wid2lkdGhcIiwgbnVsbCwgXCIvXCJdLFxyXG4gICAgICAgIFtcIm91dHNldFwiLG51bGwsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHNsaWNlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxuICAgICAgICBhcnJGdW5jOiB2ID0+IHZhbDJzdHIoIHYsIHtcclxuICAgICAgICAgICAgZnJvbUJvb2w6ICgpID0+IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHZhbDogQm94U2hhZG93X1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiaW5zZXRcIiwgdiA9PiB2ID8gXCJpbnNldFwiIDogXCJcIl0sXHJcbiAgICAgICAgW1wieFwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInlcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJibHVyXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wic3ByZWFkXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb3JuZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmFkaXVzPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgYXJyRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Qm9yZGVyUmFkaXVzX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHZbMF0pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0d28gTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGFycjJzdHIoIHZbMF0sIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgcyArPSBcIiAvIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBhcnIyc3RyKCB2WzFdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHNpbmdsZSBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHYsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgc2lkZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodlswXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlswXSkpXHJcblxyXG4gICAgICAgICAgICBpZiAodlsxXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbDJzdHIodlsxXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZbMl0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb2xvclRvU3RyaW5nKHZbMl0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWYuam9pbihcIiBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtbnNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDb2x1bW5zX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB2WzBdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMV0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY3Vyc29yIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY3Vyc29yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3Vyc29yX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgLy8gdGhlIHZhbHVlIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiBvciBhbiBhcnJheS4gSWYgaXQgaXMgYW4gYXJyYXksXHJcbiAgICAvLyBpZiB0aGUgZmlyc3QgZWxlbWVudCBpcyBhIGZ1bmN0aW9uLCB0aGVuIHdlIG5lZWQgdG8gdXNlIHNwYWNlIGFzIGEgc2VwYXJhdG9yIChiZWNhdXNlXHJcbiAgICAvLyB0aGlzIGlzIGEgVVJMIHdpdGggb3B0aW9uYWwgbnVtYmVycyBmb3IgdGhlIGhvdCBzcG90KTsgb3RoZXJ3aXNlLCB3ZSB1c2UgY29tbWEgYXMgYVxyXG4gICAgLy8gc2VwYXJhdG9yIC0gYmVjYXVzZSB0aGVzZSBhcmUgbXVsdGlwbGUgY3Vyc29yIGRlZmluaXRpb25zLlxyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2Lmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKHYpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdlsxXSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCB2LCB7IGFyclNlcDogXCIgXCJ9KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCB2LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyRnVuYzogY3Vyc29yVG9TdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxleFRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEZsZXhfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5qb2luKCBcIiBcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB2WzBdICsgXCIgXCIgKyB2WzFdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMl0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250X2Zyb21PYmplY3QoIHZhbDogYW55KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJzdHlsZVwiLCBmb250U3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJ2YXJpYW50XCIsXHJcbiAgICAgICAgXCJ3ZWlnaHRcIixcclxuICAgICAgICBcInN0cmV0Y2hcIixcclxuICAgICAgICBbXCJzaXplXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wibGluZUhlaWdodFwiLCBudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgXCJmYW1pbHlcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Rm9udF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IFwib2JsaXF1ZSBcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCB2KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JpZFRlbXBsYXRlQXJlYXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHZhbCBjYW4gYmUgYXJyYXkgb2YgZnVuY3Rpb25zIChJUXVvdGVkUHJveHlbXSkgb3IgYXJyYXlzIChHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb25bXSlcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUdyaWRUZW1wbGF0ZUFyZWFzRnJvbURlZmluaXRpb25zKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgYXJyYXkgb2YgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uIG9iamVjdHMgdG8gYSBzdHJpbmcgdGhhdCBpcyBzdWl0YWJsZSBmb3JcclxuICogdGhlIGdyaWQtdGVtcGxhdGUtYXJlYXMgZm9ybWF0LlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlR3JpZFRlbXBsYXRlQXJlYXNGcm9tRGVmaW5pdGlvbnMoIGRlZnM6IEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbltdKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBzaXplIG9mIHRoZSBtYXRyaXggZnJvbSB0aGUgYXJlYXMnIHNpemVzXHJcbiAgICBsZXQgcm93Q291bnQgPSAwLCBjb2xDb3VudCA9IDA7XHJcbiAgICBmb3IoIGxldCBkZWYgb2YgZGVmcylcclxuICAgIHtcclxuICAgICAgICByb3dDb3VudCA9IE1hdGgubWF4KCByb3dDb3VudCwgZGVmWzNdKTtcclxuICAgICAgICBjb2xDb3VudCA9IE1hdGgubWF4KCBjb2xDb3VudCwgZGVmWzRdKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm93Q291bnQgPT09IDAgfHwgY29sQ291bnQgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIHJvd3Mgd2hlcmUgZXZlcnkgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBjZWxsc1xyXG4gICAgbGV0IG1hdHJpeCA9IG5ldyBBcnJheTxzdHJpbmdbXT4ocm93Q291bnQpO1xyXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG4gICAgICAgIG1hdHJpeFtpXSA9IG5ldyBBcnJheTxzdHJpbmc+KGNvbENvdW50KTtcclxuXHJcbiAgICAvLyBnbyBvdmVyIGRlZmluaXRpb25zIGFuZCBmaWxsIHRoZSBhcHByb3ByaWF0ZSBwbGFjZXMgaW4gdGhlIGNlbGxzIHdpdGggYXJlYSBuYW1lc1xyXG4gICAgZm9yKCBsZXQgZGVmIG9mIGRlZnMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB2YWwyc3RyKCBkZWZbMF0pO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSBkZWZbMV07IGkgPD0gZGVmWzNdOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoIGxldCBqID0gZGVmWzJdOyBqIDw9IGRlZls0XTsgaisrKVxyXG4gICAgICAgICAgICAgICAgbWF0cml4W2ktMV1bai0xXSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdvIG92ZXIgb3VyIG1hdHJpeCBhbmQgZm9yIGV2ZXJ5IHJvdyBjcmVhdGUgYSBxdW90ZWQgc3RyaW5nLiBTaW5jZSBvdXIgY2VsbCBhcnJheXMgbWF5IGJlXHJcbiAgICAvLyBzcGFyc2UsIHVzZSBkb3QgZm9yIHRoZSB1bmRlZmluZWQgY2VsbHNcclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKylcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93TmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yKCBsZXQgaiA9IDA7IGogPCByb3dDb3VudDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBtYXRyaXhbaV1bal07XHJcbiAgICAgICAgICAgIHJvd05hbWVzLnB1c2goIG5hbWUgPyBuYW1lIDogXCIuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzICs9IGBcIiR7cm93TmFtZXMuam9pbihcIiBcIil9XCJcXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmlkVHJhY2tUb1N0cmluZyggdmFsOiBHcmlkVHJhY2spOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2KSxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYFske2FycjJzdHIodil9XWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyaWRBeGlzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8R3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdiksXHJcbiAgICAgICAgYXJyRnVuYzogZ3JpZFRyYWNrVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1hcmtlclN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TWFya2VyX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHYgPT4gYHVybCgjJHsodmFsIGFzIElJRFJ1bGUpLm5hbWV9KWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZVRvU3RyaW5nKCB2YWw6Um90YXRlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZbMF19ICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodlsxXSl9YDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZbMF19ICR7dlsxXX0gJHt2WzJdfSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHZbM10pfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25fU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgXCJsaW5lXCIsXHJcbiAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInRoaWNrbmVzc1wiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEV4dGVuZGVkPFRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wicHJvcGVydHlcIiwgY2FtZWxUb0Rhc2hdLFxyXG4gICAgICAgIFtcImR1cmF0aW9uXCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImZ1bmNcIiwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlXSxcclxuICAgICAgICBbXCJkZWxheVwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8VHJhbnNpdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9mZnNldFRvU3RyaW5nKCB2YWw6IE9mZnNldF9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIFwib2Zmc2V0UG9zaXRpb25cIl0sXHJcbiAgICAgICAgW1wicGF0aFwiLCBcIm9mZnNldFBhdGhcIl0sXHJcbiAgICAgICAgW1wiZGlzdGFuY2VcIiwgXCJvZmZzZXREaXN0YW5jZVwiXSxcclxuICAgICAgICBbXCJyb3RhdGVcIiwgXCJvZmZzZXRSb3RhdGVcIl0sXHJcbiAgICAgICAgW1wiYW5jaG9yXCIsIFwib2Zmc2V0QW5jaG9yXCIsIFwiL1wiXSxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgY29udmVydHMgaXQgdG8gc3RyaW5nICovXHJcbmV4cG9ydCB0eXBlIFRvU3RyaW5nRnVuYyA9ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBhIENTUyBzdHJpbmcgdXNpbmcgdGhlIGluZm8gcGFyYW1ldGVyIHRvIGluZm9ybSBob3cgdGhlIG9iamVjdCdzXHJcbiAqIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLiBUaGUgaW5mbyBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgZWl0aGVyIHN0cmluZ3NcclxuICogb3IgdHdvLSBvciB0aHJlLWVsZW1lbnQgdHVwbGVzLiBUaGUgb25seSBzdHJpbmcgYW5kIHRoZSBmaXJzdCB0dXBsZSBlbGVtZW50IGNvcnJlc3BvbmRzIHRvIGFcclxuICogcHJvcGVydHkgZXhwZWN0ZWQgaW4gdGhlIHZhbHVlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWQuIEVhY2ggcHJvcGVydHkgaXMgY29udmVydGVkIGFjY29yZGluZ1xyXG4gKiB0byB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIElmIHRoZSBhcnJheSBpdGVtIGlzIGp1c3QgYSBzdHJpbmcsIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nXHJcbiAqICAgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIG51bGwgb3IgdW5kZWZpbmVkLCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZ1xyXG4gKiAgIHRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uLi5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgYSBzdHJpbmcgaXQgaXMgdHJlYXRlZCBhcyBhIG5hbWUgb2YgYSBsb25naGFuZCBzdHlsZSBwcm9wZXJ0eS4gVGhlXHJcbiAqICAgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmcgdGhlIHN0eWxlUHJvcFRvU3RyaW5nIGZ1bmN0aW9uIGZvciB0aGlzIGxvbmdoYW5kIHN0eWxlXHJcbiAqICAgcHJvcGVydHkuXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIGl0IGlzIHVzZWQgdG8gY29udmVydCB0aGUgdmFsdWUncyBwcm9wZXJ0eS5cclxuICogLSBJZiBhIHRoaXJkIGVsZW1lbnQgZXhpc3RzIGluIHRoZSB0dXBsZSBpdCBpcyB0cmVhdGVkIGFzIGEgcHJlZml4IHRvIGJlIHBsYWNlZCBiZWZvcmUgdGhlXHJcbiAqICAgY29udmVydGVkIHByb3BlcnR5IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIG9yZGVyIG9mIHRoZSBuYW1lcyBkZXRlcm1pbmVzIGluIHdoaWNoIG9yZGVyIHRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iajJzdHIoIHZhbDogYW55LFxyXG4gICAgaW5mbzogKHN0cmluZyB8IFtzdHJpbmcsIG51bGwgfCBzdHJpbmcgfCBUb1N0cmluZ0Z1bmMsIHN0cmluZz9dIClbXSxcclxuICAgIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgbGV0IGJ1ZjogKHN0cmluZylbXSA9IFtdO1xyXG4gICAgaW5mby5mb3JFYWNoKCBuYW1lT3JUdXBsZSA9PlxyXG4gICAge1xyXG4gICAgICAgIC8vIGdldCB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgaW4gdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWU7XHJcbiAgICAgICAgLy8gaWYgdGhlIHByb3BlcnRpZXMgdmFsdWUgaXMgbm90IGRlZmluZWQsIHNraXAgaXQuXHJcbiAgICAgICAgbGV0IHByb3BOYW1lID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gbmFtZU9yVHVwbGUgOiBuYW1lT3JUdXBsZVswXTtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHdlIGhhdmUgYSBwcmVmaXhcclxuICAgICAgICBsZXQgcHJlZml4ID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogbmFtZU9yVHVwbGVbMl07XHJcbiAgICAgICAgaWYgKHByZWZpeClcclxuICAgICAgICAgICAgYnVmLnB1c2goIHByZWZpeCk7XHJcblxyXG4gICAgICAgIGxldCBjb252ZXJ0b3IgPSB0eXBlb2YgbmFtZU9yVHVwbGUgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBuYW1lT3JUdXBsZVsxXTtcclxuICAgICAgICBpZiAoIWNvbnZlcnRvcilcclxuICAgICAgICAgICAgYnVmLnB1c2goIHZhbDJzdHIoIHByb3BWYWwpKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29udmVydG9yID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICBidWYucHVzaCggc3R5bGVQcm9wVG9TdHJpbmcoIGNvbnZlcnRvciwgcHJvcFZhbCwgdHJ1ZSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgYnVmLnB1c2goIGNvbnZlcnRvciggcHJvcFZhbCkpO1xyXG4gICAgfSk7XHJcblxyXG5cdHJldHVybiBidWYuam9pbihzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgZm9yIGhhbmRsaW5nIFN0eWxlc2V0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogTWVyZ2VzIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIHN0eWxlc2V0IHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQuIEFsbCByZWd1bGFyIHByb3BlcnRpZXMgYXJlXHJcbiAqIHJlcGxhY2VkLiBUaGUgXCItLVwiIHByb3BlcnR5IGdldHMgc3BlY2lhbCB0cmVhdG1lbnQgYmVjYXVzZSBpdCBpcyBhbiBhcnJheS5cclxuICogQHBhcmFtIHRhcmdldCBcclxuICogQHBhcmFtIHNvdXJjZSBcclxuICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQgaWYgbm90IG51bGwgb3IgYSBuZXcgc3R5bGVzZXQgb3RoZXJ3aXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzZXRzKCB0YXJnZXQ6IFN0eWxlc2V0IHwgdW5kZWZpbmVkIHwgbnVsbCxcclxuICAgIHNvdXJjZTogU3R5bGVzZXQpOiBTdHlsZXNldFxyXG57XHJcbiAgICBpZiAoIXNvdXJjZSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0ID8gdGFyZ2V0IDoge307XHJcblxyXG4gICAgLy8gaWYgdGFyZ2V0IGlzIG5vdCBkZWZpbmVkLCBjcmVhdGUgaXQgYXMgYW4gZW1wdHkgb2JqZWN0LiBUaGlzIG9iamVjdCB3aWxsIGJlIHJldHVybmVkIGFmdGVyXHJcbiAgICAvLyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBhcmUgY29waWVkIHRvIGl0LlxyXG4gICAgaWYgKCF0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbiggdGFyZ2V0LCBzb3VyY2UpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgd2hldGhlciBjdXN0b20gcHJvcGVydGllcyBhcmUgZGVmaW5lZC4gSWYgbm90LCB3ZSBjYW4ganVzdCB1c2UgdGhlIE9iamVjdC5hc3NpZ24gZnVuY3Rpb24uXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbiggdGFyZ2V0LCBzb3VyY2UpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWVyZ2UgY3VzdG9tIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllc1xyXG4gICAgbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0YXJnZXQsIHNvdXJjZSk7XHJcblxyXG4gICAgLy8gY29weSBhbGwgb3RoZXIgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2VcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzb3VyY2UpXHJcblx0e1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCIhXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogTWVyZ2VzIFwiLS1cIiBwcm9wZXJ0eSBmcm9tIHRoZSBzb3VyY2Ugc3R5bGVzZXQgdG8gdGhlIHRhcmdldCBzdHlsZXNldC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRhcmdldDogU3R5bGVzZXQsXHJcbiAgICBzb3VyY2U6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllcyBhcmUgZGVmaW5lZFxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gcHJvcGVydGllc1xyXG4gICAgaWYgKHNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXRDdXN0b21Qcm9wcyA9IHRhcmdldFtcIi0tXCJdO1xyXG4gICAgICAgIHRhcmdldFtcIi0tXCJdID0gIXRhcmdldEN1c3RvbVByb3BzID8gc291cmNlQ3VzdG9tUHJvcHMuc2xpY2UoKSA6IHRhcmdldEN1c3RvbVByb3BzLmNvbmNhdCggc291cmNlQ3VzdG9tUHJvcHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGVzZXQgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZyggc3R5bGVzZXQ6IFN0eWxlc2V0KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghc3R5bGVzZXQpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG5cclxuXHRmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQsIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGlzQ3VzdG9tOiBib29sZWFuKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tKVxyXG4gICAgICAgICAgICBzICs9IGAke25hbWV9OiR7dmFsdWV9O2A7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzICs9IGAke2NhbWVsVG9EYXNoKG5hbWUpfToke3ZhbHVlfTtgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3RzIG5hbWUgYW5kIHN0cmluZyB2YWx1ZXMgZnJvbSB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBAcGFyYW0gY3VzdG9tVmFsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1c3RvbVByb3BOYW1lQW5kVmFsdWUoIGN1c3RvbVZhbDogQ3VzdG9tVmFyX1N0eWxlVHlwZSk6IFtzdHJpbmc/LHN0cmluZz9dXHJcbntcclxuICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICBsZXQgdmFyTmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBsZXQgdmFsdWU6IGFueTtcclxuICAgIGlmIChjdXN0b21WYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSAoY3VzdG9tVmFsWzBdIGFzIFZhclJ1bGUpLmNzc05hbWU7XHJcbiAgICAgICAgdGVtcGxhdGUgPSBjdXN0b21WYWxbMF0udGVtcGxhdGU7XHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMV1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gY3VzdG9tVmFsWzBdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2UgaWYgKCF2YXJOYW1lLnN0YXJ0c1dpdGgoXCItLVwiKSlcclxuICAgICAgICAgICAgdmFyTmFtZSA9IFwiLS1cIiArIHZhck5hbWU7XHJcblxyXG4gICAgICAgIHRlbXBsYXRlID0gY3VzdG9tVmFsWzFdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSB8fCAhdGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFt2YXJOYW1lLCBzdHlsZVByb3BUb1N0cmluZyggdGVtcGxhdGUsIHZhbHVlLCB0cnVlKV07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZy4gUHJvcGVydHkgbmFtZSBjYW4gYmUgaW4gZWl0aGVyXHJcbiAqIGRhc2ggb3IgY2FtZWwgZm9ybS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBwcm9wZXJ0eVxyXG4gICAgbGV0IGluZm86IGFueSA9IFN0eWxlUHJvcGVydHlJbmZvc1tkYXNoVG9DYW1lbChwcm9wTmFtZSldO1xyXG5cclxuICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgXCIhXCIgcHJvcGVydHksIHRoZW4gdGhlIGFjdHVhbCB2YWx1ZSBpcyB0aGVcclxuICAgIC8vIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgYW5kIHdlIGFsc28gbmVlZCB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWdcclxuICAgIGxldCB2YXJWYWx1ZSA9IHByb3BWYWw7XHJcbiAgICBsZXQgaW1wRmxhZyA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcIm9iamVjdFwiICYmIFwiIVwiIGluIHByb3BWYWwpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyVmFsdWUgPSBwcm9wVmFsW1wiIVwiXTtcclxuICAgICAgICBpbXBGbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyaW5nVmFsdWUgPSAhaW5mb1xyXG4gICAgICAgID8gdmFsMnN0ciggdmFyVmFsdWUpXHJcbiAgICAgICAgOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICA/IHZhbDJzdHIoIHZhclZhbHVlLCBpbmZvIGFzIElWYWx1ZUNvbnZlcnRPcHRpb25zKVxyXG4gICAgICAgICAgICA6IHR5cGVvZiBpbmZvID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICA/IHZhbHVlVG9TdHJpbmdCeVdlbGxLbm93bkZ1bmMoIHZhclZhbHVlLCBpbmZvKVxyXG4gICAgICAgICAgICAgICAgOiAoaW5mbyBhcyBUb1N0cmluZ0Z1bmMpKCB2YXJWYWx1ZSk7XHJcblxyXG4gICAgaWYgKCFzdHJpbmdWYWx1ZSAmJiAhdmFsdWVPbmx5KVxyXG4gICAgICAgIHN0cmluZ1ZhbHVlID0gXCJpbml0aWFsXCI7XHJcblxyXG4gICAgaWYgKGltcEZsYWcpXHJcbiAgICAgICAgc3RyaW5nVmFsdWUgKz0gXCIgIWltcG9ydGFudFwiO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzdHJpbmdWYWx1ZSA6IGAke2NhbWVsVG9EYXNoKCBwcm9wTmFtZSl9OiR7c3RyaW5nVmFsdWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRm9yIGVhY2ggcHJvcGVydHkgLSByZWd1bGFyIGFuZCBjdXN0b20gLSBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgaW52b2tlcyB0aGUgYXBwcm9wcmlhdGVcclxuICogZnVuY3Rpb24gdGhhdCBnZXRzIHRoZSBwcm9wZXJ0eSBuYW1lIGFuZCB0aGUgdmFsdWUgY29udmVydGVkIHRvIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlc2V0IFxyXG4gKiBAcGFyYW0gZm9yUHJvcCBcclxuICogQHBhcmFtIGZvckN1c3RvbVByb3AgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0OiBTdHlsZXNldCxcclxuICAgIGZvclByb3A6IChuYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nLCBpc0N1c3RvbTogYm9vbGVhbikgPT4gdm9pZClcclxue1xyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIi0tXCIgcHJvcGVydHksIHdoaWNoIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggaXRlbSBpc1xyXG5cdFx0XHQvLyBhIHR3by1pdGVtIG9yIHRocmVlLWl0ZW0gYXJyYXlcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzdHlsZXNldFtwcm9wTmFtZV0gYXMgQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG5cdFx0XHRmb3IoIGxldCBjdXN0b21WYWwgb2YgcHJvcFZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VzdG9tVmFsKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBbdmFyTmFtZSwgdmFyVmFsdWVdID0gZ2V0Q3VzdG9tUHJvcE5hbWVBbmRWYWx1ZSggY3VzdG9tVmFsKTtcclxuXHRcdFx0XHRpZiAoIXZhck5hbWUpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRpZiAodmFyVmFsdWUgPT0gbnVsbClcclxuXHRcdFx0XHRcdHZhclZhbHVlID0gXCJcIjtcclxuXHJcblx0XHRcdFx0Zm9yUHJvcCggdmFyTmFtZSwgdmFyVmFsdWUsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBmb3JQcm9wKCBwcm9wTmFtZSwgc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lLCBzdHlsZXNldFtwcm9wTmFtZV0sIHRydWUpLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBOdW1lcmljIGlkZW50aWZpZXJzIGNvcnJlc3BvbmRpbmcgdG8gd2VsbCBrbm93biBmdW5jdGlvbnMgdXNlZCB0byBjb252ZXJ0IHN0eWxlIHByb3BlcnR5IHZhbHVlc1xyXG4gKiB0byBzdHJpbmdzLiBUaGlzIGlzIHVzZWQgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBvYmplY3QgdXNlZCBmb3IgbWFwcGluZyBzdHlsZSBwcm9wZXJ0aWVzIHRvXHJcbiAqIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxyXG4gKiBcclxuICogTm90ZSEhITogdGhlIHZhbHVlcyBpbiB0aGUgZW51bWVyYXRpb24gY2Fubm90IGJlIGNoYW5nZWQgLSBvdGhlcndpc2UsIGl0IHdpbGwgbm90IGJlIGJhY2t3YXJkc1xyXG4gKiBjb21wYXRpYmxlLiBBbGwgbmV3IHZhbHVlcyBtdXN0IGJlIGFwcGVuZGVkIGF0IHRoZSBlbmQuXHJcbiAqL1xyXG5jb25zdCBlbnVtIFdlbGxLbm93bkZ1bmNcclxue1xyXG4gICAgTGVuZ3RoID0gMSxcclxuICAgIE11bHRpTGVuZ3RoV2l0aFNwYWNlID0gMixcclxuICAgIENvbG9yID0gMyxcclxuICAgIEJvcmRlciA9IDQsXHJcbiAgICBQb3NpdGlvbiA9IDUsXHJcbiAgICBDb3JuZXJSYWRpdXMgPSA2LFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nIHVzaW5nIGEgd2VsbC1rbm93biBmdW5jdGlvbiBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuXHJcbiAqIGVudW1lcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gdmFsIFxyXG4gKiBAcGFyYW0gZnVuY1R5cGUgXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWx1ZVRvU3RyaW5nQnlXZWxsS25vd25GdW5jKCB2YWw6IGFueSwgZnVuY1R5cGU6IFdlbGxLbm93bkZ1bmMpOiBzdHJpbmdcclxue1xyXG4gICAgc3dpdGNoKCBmdW5jVHlwZSlcclxuICAgIHtcclxuICAgICAgICBjYXNlIFdlbGxLbm93bkZ1bmMuTGVuZ3RoOiByZXR1cm4gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2YWwpO1xyXG4gICAgICAgIGNhc2UgV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZTogcmV0dXJuIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UoIHZhbCk7XHJcbiAgICAgICAgY2FzZSBXZWxsS25vd25GdW5jLkNvbG9yOiByZXR1cm4gY29sb3JUb1N0cmluZyggdmFsKTtcclxuICAgICAgICBjYXNlIFdlbGxLbm93bkZ1bmMuQm9yZGVyOiByZXR1cm4gYm9yZGVyVG9TdHJpbmcoIHZhbCk7XHJcbiAgICAgICAgY2FzZSBXZWxsS25vd25GdW5jLlBvc2l0aW9uOiByZXR1cm4gcG9zMnN0ciggdmFsKTtcclxuICAgICAgICBjYXNlIFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzOiByZXR1cm4gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcoIHZhbCk7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZWdpc3RyeSBvZiBDU1MgcHJvcGVydGllcyB0aGF0IHNwZWNpZmllcyBob3cgdGhlaXIgdmFsdWVzIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBIZWxwZXIgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IHZhbHVlcyBpbiBhbiBhcnJheSBzaG91bGQgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuXHJcbi8vIFdlIHVzZSBpdCBtYW55IHRpbWVzIGluIHRoZSBzdHVjdHVyZSBiZWxvdy5cclxubGV0IGNvbW1hQXJyYXlTZXBhcmF0b3IgPSB7IGFyclNlcDogXCIsXCIgfTtcclxuXHJcbi8vIEhlbHBlciBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdmFsdWVzIGluIGFuIGFycmF5IHNob3VsZCBiZSBzZXBhcmF0ZWQgYnkgYSBzbGFzaC5cclxuLy8gV2UgdXNlIGl0IG1hbnkgdGltZXMgaW4gdGhlIHN0dWN0dXJlIGJlbG93LlxyXG5sZXQgc2xhc2hBcnJheVNlcGFyYXRvciA9IHsgYXJyU2VwOiBcIi9cIiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBWYXJUZW1wbGF0ZU5hbWVdPzogKFdlbGxLbm93bkZ1bmMgfCBUb1N0cmluZ0Z1bmMgfCBJVmFsdWVDb252ZXJ0T3B0aW9ucykgfSA9XHJcbntcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0LFxyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZUFuaW1hdGlvbl9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICBhbmltYXRpb25EZWxheTogbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJGdW5jOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRDbGlwOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdiA9PiBtdWx0aVBvczJzdHIoIHYsIFwiLFwiKSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJGdW5jOiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSxcclxuICAgIGJhc2VsaW5lU2hpZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckJvdHRvbTogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyQ29sb3I6IHtcclxuICAgICAgICBhcnJGdW5jOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZToge1xyXG4gICAgICAgIGZyb21PYmo6IGJvcmRlckltYWdlVG9TdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2VTbGljZTogYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlcklubGluZVN0YXJ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyTGVmdDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJMZWZ0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlclNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBib3JkZXJUb3A6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyVG9wQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlclRvcFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlcldpZHRoOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgYm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJveFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmV0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBjbGlwOiAge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgcmVjdCgke211bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2Uodil9YFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY29sdW1uR2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGNvbHVtblJ1bGU6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgY29sdW1uUnVsZUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgY29sdW1uczogY29sdW1uc1RvU3RyaW5nLFxyXG4gICAgY29sdW1uV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgY3Vyc29yOiBjdXJzb3JUb1N0cmluZyxcclxuXHJcbiAgICBmaWxsOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgZmlsbE9wYWNpdHk6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBmbGV4OiBmbGV4VG9TdHJpbmcsXHJcbiAgICBmbGV4QmFzaXM6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZmxvb2RDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGZvbnQ6IHtcclxuICAgICAgICBmcm9tT2JqOiBmb250X2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBmb250U3R5bGU6IGZvbnRTdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGdhcDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGdyaWRDb2x1bW5HYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZ3JpZEdhcDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGdyaWRSb3dHYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZ3JpZEFyZWE6IHNsYXNoQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBncmlkQXV0b0NvbHVtbnM6IGdyaWRBeGlzVG9TdHJpbmcsXHJcbiAgICBncmlkQXV0b1Jvd3M6IGdyaWRBeGlzVG9TdHJpbmcsXHJcbiAgICBncmlkQ29sdW1uOiBzbGFzaEFycmF5U2VwYXJhdG9yLFxyXG4gICAgZ3JpZFJvdzogc2xhc2hBcnJheVNlcGFyYXRvcixcclxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiBncmlkVGVtcGxhdGVBcmVhc1RvU3RyaW5nLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogZ3JpZEF4aXNUb1N0cmluZyxcclxuICAgIGdyaWRUZW1wbGF0ZVJvd3M6IGdyaWRBeGlzVG9TdHJpbmcsXHJcblxyXG4gICAgaGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBpbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBsZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGxldHRlclNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbGlnaHRpbmdDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuXHJcbiAgICBtYXJnaW46IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBtYXJnaW5CbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbkJvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5JbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5SaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5Ub3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFya2VyRW5kOiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFya2VyTWlkOiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFya2VyU3RhcnQ6IG1hcmtlclN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhCbG9ja1NpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4SGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1heElubGluZVNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWluQmxvY2tTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1pbkhlaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtaW5JbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHRtaW5XaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgb2JqZWN0UG9zaXRpb246IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXQ6IG9mZnNldFRvU3RyaW5nLFxyXG4gICAgb2Zmc2V0QW5jaG9yOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgb2Zmc2V0RGlzdGFuY2U6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgb2Zmc2V0UG9zaXRpb246IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXRSb3RhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgb3V0bGluZUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgb3V0bGluZU9mZnNldDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgcGFkZGluZzogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHBhZGRpbmdCbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdMZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdSaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBlcnNwZWN0aXZlOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHF1b3Rlczoge1xyXG4gICAgICAgIGFyckZ1bmM6IHYgPT4gYFwiJHt2fVwiYFxyXG4gICAgfSxcclxuXHJcbiAgICByaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICByb3RhdGU6IHJvdGF0ZVRvU3RyaW5nLFxyXG4gICAgcm93R2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBzY3JvbGxiYXJDb2xvcjoge1xyXG4gICAgICAgIGFyckZ1bmM6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBzY3JvbGxNYXJnaW46IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZTogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5MZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpblJpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpblRvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdCb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZTogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdSaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNoYXBlTWFyZ2luOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHN0b3BDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHN0cm9rZTogV2VsbEtub3duRnVuYy5Db2xvcixcclxuXHJcbiAgICB0YWJTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRleHRDb21iaW5lVXByaWdodDoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gYGRpZ2l0cyAke3Z9YFxyXG4gICAgfSxcclxuICAgIHRleHREZWNvcmF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqOiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRleHRFbXBoYXNpczoge1xyXG4gICAgICAgIGFyckZ1bmM6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHRleHRJbmRlbnQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dFNpemVBZGp1c3Q6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0b3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25EZWxheToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHdpbGxDaGFuZ2U6IHtcclxuICAgICAgICBmcm9tU3RyaW5nOiBjYW1lbFRvRGFzaFxyXG4gICAgfSxcclxuICAgIHdvcmRTcGFjaW5nOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICB6b29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIC8vIHNwZWNpYWwgcHJvcGVydGllcyBmb3IgSVZhclJ1bGUgdHlwZXNcclxuICAgIFwiQ3NzTGVuZ3RoXCI6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgXCJDc3NBbmdsZVwiOiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzVGltZVwiOiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NSZXNvbHV0aW9uXCI6IENzc1Jlc29sdXRpb25NYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyZXF1ZW5jeVwiOiBDc3NGcmVxdWVuY3lNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1BlcmNlbnRcIjogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUG9zaXRpb25cIjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIFwiQ3NzQ29sb3JcIjogV2VsbEtub3duRnVuYy5Db2xvcixcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzdXBwb3J0cyBxdWVyeS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN1cHBvcnRzIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnk6IFN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiBvciBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU2luZ2xlU3VwcG9ydHNRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBxdWVyeTtcclxuXHJcbiAgICBsZXQgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoIHF1ZXJ5KS5maWx0ZXIoIChwcm9wTmFtZSkgPT4gcHJvcE5hbWUgIT0gXCIkbmVnYXRlXCIpO1xyXG4gICAgaWYgKHByb3BOYW1lcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IG5vdCA9IHF1ZXJ5LiRuZWdhdGUgPyBcIm5vdFwiIDogXCJcIjtcclxuICAgIHJldHVybiAgYCR7bm90fSAoJHtwcm9wTmFtZXMubWFwKCAocHJvcE5hbWUpID0+XHJcbiAgICAgICAgc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lIGFzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQsIHF1ZXJ5W3Byb3BOYW1lXSkpLmpvaW4oIFwiKSBhbmQgKFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgRXh0ZW5kZWQsIElHZW5lcmljUHJveHksIENzc051bWJlciwgQ3NzTXVsdGlOdW1iZXIsIElOdW1iZXJCYXNlTWF0aCxcclxuICAgIENzc1Bvc2l0aW9uLCBNdWx0aUNzc1Bvc2l0aW9uLCBOdW1iZXJCYXNlLCBNdWx0aU51bWJlckJhc2UsXHJcbiAgICBDc3NMZW5ndGgsIENzc011bHRpTGVuZ3RoLCBDc3NBbmdsZSwgQ3NzTXVsdGlBbmdsZSwgQ3NzVGltZSwgQ3NzTXVsdGlUaW1lLFxyXG4gICAgQ3NzUmVzb2x1dGlvbiwgQ3NzTXVsdGlSZXNvbHV0aW9uLCBDc3NGcmVxdWVuY3ksIENzc011bHRpRnJlcXVlbmN5LFxyXG4gICAgQ3NzUGVyY2VudCwgQ3NzTXVsdGlQZXJjZW50LCBJQ3NzTGVuZ3RoTWF0aCxcclxuICAgIElDc3NBbmdsZU1hdGgsIElDc3NQZXJjZW50TWF0aCwgSUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NSZXNvbHV0aW9uTWF0aCwgSUNzc1RpbWVNYXRoLFxyXG4gICAgTnVtYmVyVHlwZSwgTGVuZ3RoVHlwZSwgUGVyY2VudFR5cGUsIEFuZ2xlVHlwZSwgVGltZVR5cGUsIFJlc29sdXRpb25UeXBlLCBGcmVxdWVuY3lUeXBlXHJcbn0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZGFzaGUtY2FzZSB0byBjYW1lbENhc2UsIGUuZy4gZm9udC1zaXplIHRvIGZvbnRTaXplLlxyXG4gKiBAcGFyYW0gZGFzaFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZSwgZS5nLiBmb250U2l6ZSB0byBmb250LXNpemUuXHJcbiAqIEBwYXJhbSBjYW1lbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKCBjYW1lbDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gY2FtZWwucmVwbGFjZSggLyhbYS16QS1aXSkoPz1bQS1aXSkvZywgJyQxLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVmFsdWVDb252ZXJ0T3B0aW9ucyBpbnRlcmZhY2UgZGVmaW5lcyBvcHRpb25hbCBmdW5jdGlvbnMgdGhhdCBjb252ZXJ0dmFsdWVzIG9mIGRpZmZlcm50XHJcbiAqIHR5cGVzIHRvIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZUNvbnZlcnRPcHRpb25zXHJcbntcclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgZnJvbU51bGw/OiAoIHZhbDogbnVsbCB8IHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIHN0cmluZy4gVGhpcyBhbGxvd3MgdHJhbnNmb3JtaW5nIG9uZSBzdHJpbmcgdG8gYW5vdGhlci5cclxuICAgIGZyb21TdHJpbmc/OiAoIHZhbDogc3RyaW5nKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgYm9vbGVhblxyXG4gICAgZnJvbUJvb2w/OiAodmFsOiBib29sZWFuKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgbnVtYmVyXHJcbiAgICBmcm9tTnVtYmVyPzogKHZhbDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGFuIGFycmF5XHJcbiAgICBmcm9tQXJyYXk/OiAodmFsOiBhbnlbXSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgIGZyb21PYmo/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdHlwZS1zcGVjaWZpYyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZFxyXG4gICAgZnJvbUFueT86ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCB0byBjb252ZXJ0IGFycmF5IGl0ZW1zIGlmIGZyb21BcnJheSBpcyBub3QgZGVmaW5lZFxyXG4gICAgYXJyRnVuYz86ICh2OiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBTZXBhcmF0b3IgZm9yIGFycmF5IGl0ZW1zIC0gdXNlZCBvbmx5IGlmIGZyb21BcnJheSBpcyBub3QgZGVmaW5lZFxyXG4gICAgYXJyU2VwPzogc3RyaW5nO1xyXG5cclxuICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZXNlIGFyZSBhcmd1bWVudHMgdG8gcGFzcyB3aGVuIGludm9raW5nIGl0XHJcbiAgICBmdW5jQXJncz86IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIG9mIGFuIGFyYml0cmFyeSB0eXBlIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhlIG9wdGlvbmFsIG9wdGlvbnMgcGFyYW1ldGVyXHJcbiAqIGNhbiBkZWZpbmUgaG93IHNwZWNpZmljIHR5cGVzIGFyZSBjb252ZXJ0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsMnN0ciggdmFsOiBhbnksIG9wdGlvbnM/OiBJVmFsdWVDb252ZXJ0T3B0aW9ucyk6IHN0cmluZ1xyXG57XHJcbiAgIGlmICghb3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICAvLyBzdGFuZGFyZCBwcm9jZXNzaW5nOlxyXG4gICAgICAgIC8vIC0gbnVsbC91bmRlZmluZWQgYmVjb21lIGVtcHR5IHN0cmluZy5cclxuICAgICAgICAvLyAtIGNhbGwgdmFsdWVUb1N0cmluZyAocHJveHkgb2JqZWN0cykgaWYgZXhpc3QuXHJcbiAgICAgICAgLy8gLSBmdW5jdGlvbjogY2FsbCB3aXRob3V0IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgLy8gLSBldmVyeXRoaW5nIGVsc2U6IGNhbGwgdG9TdHJpbmcoKS5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdmFsKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvY2Vzc2luZyB3aXRoIG9wdGlvbnMuIEZvciBhbGwgdHlwZXMgZXhjZXB0IG51bGwgYW5kIHN0cmluZywgaWYgdGhlIHR5cGUtc3BlY2lmaWNcclxuICAgICAgICAvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgY2FsbCBmcm9tQW55IGlmIGRlZmluZWQuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVsbCA/IG9wdGlvbnMuZnJvbU51bGwoIHZhbCkgOiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21TdHJpbmcgPyBvcHRpb25zLmZyb21TdHJpbmcoIHZhbCkgOiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bWJlciA/IG9wdGlvbnMuZnJvbU51bWJlciggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIoIG9wdGlvbnMuZnVuY0FyZ3MgPyB2YWwoIC4uLm9wdGlvbnMuZnVuY0FyZ3MpIDogdmFsKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZyb21BcnJheSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BcnJheSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gb3B0aW9ucy5hcnJTZXAgIT0gbnVsbCA/IG9wdGlvbnMuYXJyU2VwIDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdmFsLCBvcHRpb25zLmFyckZ1bmMgfHwgb3B0aW9ucy5mcm9tQW55IHx8IHVuZGVmaW5lZCwgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwudmFsdWVUb1N0cmluZyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbU9iailcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21PYmooIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbUFueSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21Cb29sID8gb3B0aW9ucy5mcm9tQm9vbCggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbUFueSlcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW4gYXJyYXkgb2YgdGhlIGdpdmVuIHR5cGV0byBhIHNpbmdsZSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIHNlcGFyYXRvci5cclxuICogRWxlbWVudHMgb2YgdGhlIGFycmF5IGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXJyMnN0ciggdmFsOiBhbnlbXSwgZnVuYz86ICh2KSA9PiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuICF2YWwgfHwgdmFsLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gXCJcIlxyXG4gICAgICAgIDogdmFsLmZpbHRlciggeCA9PiB4ICE9IG51bGwpLm1hcCggeSA9PiBmdW5jID8gZnVuYyh5KSA6IHZhbDJzdHIoIHkpKS5qb2luKCBzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcgaXMgYSB0YWcgZnVuY3Rpb24gaGVscGVyIHRoYXQgY29udmVydHMgdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRoXHJcbiAqIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIGNvbnZlcnQgcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogYW55W10sXHJcbiAgICBjb252ZXJ0RnVuYz86ICggdjogYW55KSA9PiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gbnVtYmVyIG9mIHBhcmFtZXRlcnMgaXMgYWx3YXlzIDEgbGVzcyB0aGFuIHRoZSBudW1iZXIgb2Ygc3RyaW5nIHBhcnRzXHJcbiAgICBsZXQgcGFyYW1zTGVuID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGlmIChwYXJhbXNMZW4gPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcGFyYW1zTGVuOyBpKyspXHJcbiAgICAgICAgcyArPSBwYXJ0c1tpXSArIChjb252ZXJ0RnVuYyA/IGNvbnZlcnRGdW5jKCBwYXJhbXNbaV0pIDogdmFsMnN0ciggcGFyYW1zW2ldKSk7XHJcblxyXG4gICAgLy8gYWRkIHRoZSBsYXN0IHBhcnRcclxuICAgIHJldHVybiBzICsgcGFydHNbcGFyYW1zTGVuXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgb2YgZnVuY3Rpb25zIHRoYXQgY29udmVydCBhIG51bWJlciB0byBhIHN0cmluZyAqL1xyXG50eXBlIENvbnZlcnROdW1iZXJGdW5jVHlwZSA9IChuOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nIG9wdGlvbmFsbHkgYXBwZW5kaW5nIHVuaXRzIHRoYXQgY2FuIGJlIGRpZmZlcmVudFxyXG4gKiBmb3IgaW50ZWdlciBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycy5cclxuICogQHBhcmFtIG4gTnVtYmVyIHRvIGNvbnZlcnQgdG8gc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gKiBAcGFyYW0gaW50VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBpbnRlZ2VyLlxyXG4gKiBAcGFyYW0gZmxvYXRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGZsb2F0aW5nIHBvaW50LlxyXG4gKi9cclxuZnVuY3Rpb24gbnVtYmVyVG9TdHJpbmcoIG46IG51bWJlciwgaW50VW5pdDogc3RyaW5nID0gXCJcIiwgZmxvYXRVaW50OiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG4pID8gIG4gKyBpbnRVbml0IDogbiArIGZsb2F0VWludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTnVtYmVyIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBudW1iZXJCYXNlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7IGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgQ3NzTnVtYmVyIG9yIGFycmF5IG9mIENzc051bWJlciBvYmplY3RzIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZS0gb3IgbXVsdGktbnVtYmVyIHN0eWxlIHZhbHVlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICogQHBhcmFtIHNlcGFyYXRvciBTdHJpbmcgdG8gdXNlIHRvIHNlcGFyYXRlIG11bHRpcGxlIHZhbHVlcy5cclxuICovXHJcbmZ1bmN0aW9uIG11bHRpU3R5bGVUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LFxyXG4gICAgICAgICAgICAgICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jLFxyXG4gICAgICAgIGFyckZ1bmM6IHYgPT4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2LCBjb252ZXJ0RnVuYyksXHJcbiAgICAgICAgYXJyU2VwOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWF0aEZ1bmMgZnVuY3Rpb24gcmV0dXJucyBvbmUgb2YgdGhlIG1hdGhlbWF0aWMgQ1NTIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgb3IgbW9yZVxyXG4gKiBwYXJhbWV0ZXJzIHdob3NlIHR5cGUgaXMgZGVyaXZlZCBmcm9tIE51bWJlckJhc2U8VD4uXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXRoRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggbmFtZTogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHttdWx0aVN0eWxlVG9TdHJpbmcoIHBhcmFtcywgY29udmVydEZ1bmMsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIGNhbGNGdW5jIGZ1bmN0aW9uIHJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY2FsYygpIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGNGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgY2FsYygke3RlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMsICh2OiBhbnkpID0+IG51bWJlckJhc2VUb1N0cmluZyggdiwgY29udmVydEZ1bmMpKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bW1iZXJCYXNlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogbnVtZXJpYyBDU1MgdHlwZXMuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXlcclxuICogYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbiBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVyQmFzZU1hdGg8VCBleHRlbmRzIHN0cmluZz4gaW1wbGVtZW50cyBJTnVtYmVyQmFzZU1hdGg8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBjb252ZXJ0RnVuYzogQ29udmVydE51bWJlckZ1bmNUeXBlKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBudW1iZXJUb1N0cmluZyA9IChuOiBudW1iZXIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RnVuYyggbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpU3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMsIHNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5cIiwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF4KCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1heFwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcImNsYW1wXCIsIFttaW4sIHByZWYsIG1heF0sIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGNGdW5jKCBmb3JtdWxhUGFydHMsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aENsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgXCJzdGF0aWNcIiBzaWRlIG9mIGNsYXNzZXMgZGVyaXZlZCBmcm9tIHRoZVxyXG4gKiBOdW1iZXJNYXRoIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyQmFzZU1hdGhDbGFzczxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBzdHJpbmc7XHJcblxyXG4gICAgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIG5ldygpOiBJTnVtYmVyQmFzZU1hdGg8VD47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVbml0bGVzcyBudW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc051bWJlck1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxudW1iZXI+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NOdW1iZXJNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8TnVtYmVyVHlwZT5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlOdW1iZXI+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1BlcmNlbnRNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cGVyY2VudD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1BlcmNlbnRNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8UGVyY2VudFR5cGU+IGltcGxlbWVudHMgSUNzc1BlcmNlbnRNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIChOdW1iZXIuaXNJbnRlZ2VyKG4pID8gbiA6IE1hdGgucm91bmQobiAqIDEwMCkpICsgXCIlXCI7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlQZXJjZW50Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIHRvIHN0cmluZyB1c2luZyB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIGlmIHRoZSBudW1iZXIgaXMgYmV0d2VlbiAtMSBhbmQgMSAobm9uIGluY2x1c2l2ZSksIG11bHRpcGxpZXMgdGhlIG51bWJlciBhbmQgYXBwZW5kcyBcIiVcIlxyXG4gKiAtIG90aGVyd2lzZSwgY29udmVydHMgdGhlIG51bWJlciB0byBzdHJpbmcgd2l0aG91dCBhcHBlbmRpbmcgYW55IHV0aW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nKCBuOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPj0gMSB8fCBuIDw9IC0xID8gbi50b1N0cmluZygpIDogTWF0aC5yb3VuZChuICogMTAwKSArIFwiJVwiO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIExlbmd0aFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTGVuZ3RoTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGxlbmd0aD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0xlbmd0aE1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxMZW5ndGhUeXBlPiBpbXBsZW1lbnRzIElDc3NMZW5ndGhNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJweFwiLCBcImVtXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElHZW5lcmljUHJveHk8TGVuZ3RoVHlwZT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWlubWF4XCIsIFttaW4sIG1heF0sIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBBbmdsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzQW5nbGVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8YW5nbGU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NBbmdsZU1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxBbmdsZVR5cGU+IGltcGxlbWVudHMgSUNzc0FuZ2xlTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZGVnXCIsIFwidHVyblwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpQW5nbGU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaW1lXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NUaW1lTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHRpbWU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NUaW1lTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFRpbWVUeXBlPiBpbXBsZW1lbnRzIElDc3NUaW1lTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwibXNcIiwgXCJzXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1RpbWU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXNvbHV0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NSZXNvbHV0aW9uTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHJlc29sdXRpb24+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFJlc29sdXRpb25UeXBlPiBpbXBsZW1lbnRzIElDc3NSZXNvbHV0aW9uTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZHBpXCIsIFwieFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVJlc29sdXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJlcXVlbmN5XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NGcmVxdWVuY3lNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8ZnJlcXVlbmNlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPEZyZXF1ZW5jeVR5cGU+IGltcGxlbWVudHMgSUNzc0ZyZXF1ZW5jeU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIkh6XCIsIFwia0h6XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0ZyZXF1ZW5jeT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyZXF1ZW5jeT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIHBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvczJzdHIoIHZhbDogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVsbDogdiA9PiBcIlwiLFxyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHYsIFwiIFwiKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvczJzdHIoIHZhbDogRXh0ZW5kZWQ8TXVsdGlDc3NQb3NpdGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBhcnJGdW5jOiBwb3Myc3RyLFxyXG4gICAgICAgIGFyclNlcDogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGJhc2ljIHR5cGVzIGFuZCBmdW5jdGlvbnMgdXNlZCB0byBkZWZpbmUgQ1NTIHByb3BlcnR5IHR5cGVzLlxyXG4gKiBcclxuICogQWxsIENTUyBwcm9wZXJ0aWVzIHNob3VsZCBhY2NlcHQgc3RyaW5nIGFzIHRoZSB0eXBlIG9mIHRoZWlyIHZhbHVlIGV2ZW4gaWYgbm9ybWFsbHlcclxuICogdGhleSBhY2NlcHQgb3RoZXIgdHlwZXMgKGUuZyBhIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgYXMgYFwicmVkXCIgfCBcImdyZWVuXCIgfCAuLi5gIGZvciB0aGVcclxuICogY29sb3IpIHByb3BlcnR5LiBUaGlzIGlzIGJlY2F1c2UgaW4gYWRkaXRpb24gdG8gdGhlaXIgbm9ybWFsIHZhbHVlcyBhbnkgcHJvcGVydHlcclxuICogY2FuIHVzZSBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoZSBmb3JtIGB2YXIoLS1wcm9wbmFtZSlgLiBIb3dldmVyLCBpZiB3ZSBhZGQgc3RyaW5nIHR5cGVcclxuICogdG8gdGhlIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgKGUuZy4gYFwicmVkXCIgfCBcImdyZWVuXCIgfCBzdHJpbmdgKSwgdGhpcyB0aHJvd3Mgb2ZmIHRoZVxyXG4gKiBJbnRlbGxpc2Vuc2UgYW5kIGl0IGRvZXNuJ3QgcHJvbXB0IGRldmVsb3BlcnMgZm9yIHRoZSBwb3NzaWJsZSB2YWx1ZXMuIFRoZSBJVmFsdWVQcm94eVxyXG4gKiBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHN0cmluZyBhbmQgdGhpcyBzb2x2ZXMgdGhlIEludGVsbGlzZW5zZSBpc3N1ZS5cclxuICogXHJcbiAqIEFub3RoZXIgYmVuZWZpdCBvZiB1c2luZyBmdW5jdGlvbnMgaXMgdGhhdCB0aGV5IGFyZVxyXG4gKiBjb25zdHJ1Y3RlZCBhdCBvbmUgdGltZSBidXQgdGhlIHN0cmluZyBnZW5lcmF0aW9uIG9jY3VycyBhdCBhbm90aGVyIHRpbWUuIFRoaXMgYWxsb3dzXHJcbiAqIHVzaW5nIHRoZXNlIG9iamVjdHMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhleSBjYW4gcmVmZXJlbmNlIG9iamVjdHMgbGlrZVxyXG4gKiBJVmFyUnVsZSB0aGF0IGFyZSBub3QgZnVsbHkgaW5pdGlhbGl6ZWQgeWV0LiBIb3dldmVyLCB3aGVuIHRoZSBzdHlsZXMgc2hvdWxkIGJlIGluc2VydGVkXHJcbiAqIGludG8gRE9NIHRoZSBpbml0aWFsaXphdGlvbiB3aWxsIGhhdmUgYWxyZWFkeSBvY2N1cnJlZCBhbmQgdGhlIGZ1bmN0aW9uIHdpbGxcclxuICogcmV0dXJuIGEgY29ycmVjdCBzdHJpbmcuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgdGhlIHByb3h5IGZ1bmN0aW9ucyBoYXZlIGEgcGFyYW1ldGVyIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGVtIGZyb21cclxuICogb3RoZXIgcHJveHkgZnVuY3Rpb25zLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVudCBDU1MgdHlwZXMsXHJcbiAqIHNvIHRoYXQgYSBmdW5jdGlvbiB1c2VkIGZvciBvbmUgQ1NTIHR5cGUgY2Fubm90IGJlIHVzZWQgZm9yIGEgZGlmZmVyZW50IENTUyB0eXBlLiBGb3JcclxuICogZXhhbXBsZSwgdGhlIGBjYWxjKClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIE51bWJlclByb3h5IGZ1bmN0aW9uLCB3aGlsZSB0aGVcclxuICogYGxpbmVhckluZ3JhZGllbnQoKWAgZnVuY3Rpb24gcmV0dXJucyB0aGUgSW1hZ2VQcm94eSBmdW5jdGlvbi4gVGh1cyB5b3UgY2Fubm90IHVzZSB0aGVcclxuICogJ2NhbGMoKWAgZnVuY3Rpb24gZm9yIGltYWdlLWJhc2VkIENTUyBwcm9wZXJ0aWVzIGFuZCB2aWNlIHZlcnNhLlxyXG4gKi9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYW55IENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdsb2JhbF9TdHlsZVR5cGUgPSBcImluaGVyaXRcIiB8IFwiaW5pdGlhbFwiIHwgXCJ1bnNldFwiIHwgXCJyZXZlcnRcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR2VuZXJpY1Byb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGEgY2FsbGFibGUgaW50ZXJmYWNlIGltcGxlbWVudGVkIHVzaW5nIGZ1bmN0aW9ucyB0aGF0XHJcbiAqIGFjY2VwdCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgb2YgYSBnZW5lcmljIHR5cGUgYW5kIHJldHVybiBhIHN0cmluZy4gVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCBhcyBhXHJcbiAqIGJhc2UgZm9yIHByb3h5IGludGVyZmFjZXMgZGVmaW5pbmcgdHlwZXMgYWNjZXB0YWJsZSBieSBjZXJ0YWluIHN0eWxlIHByb3BlcnRpZXMuIFRoZSB0eXBlXHJcbiAqIHBhcmFtZXRlciBoZWxwcyBkaWZmZXJlbnRpYXRlIHRoZXNlIGludGVyZmFjZXMgc28gdGhhdCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gb25lXHJcbiAqIHR5cGUgb2Ygc3R5bGUgcHJvcGVydGllcyAoZS5nLiBcInRyYW5zZm9ybVwiKSBjYW5ub3QgYmUgYXNzaWduZWQgdG8gYW4gaW5jb21wYXRpYmxlIHN0eWxlIHByb3BlcnR5XHJcbiAqIChlLmcuIGNsaXAtcGF0aCkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHZW5lcmljUHJveHk8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgKHA/OiBUKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0cmluZ1Byb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIHBhcnRcclxuICogb2YgdHlwZSBkZWZpbml0aW9uIGZvciBhbGwgQ1NTIHByb3BlcnRpZXMgLSBldmVuIGZvciB0aG9zZSB0aGF0IGRvbid0IGhhdmUgYHN0cmluZ2AgYXMgcGFydCBvZlxyXG4gKiB0aGVpciB0eXBlLlxyXG4gKiBcclxuICogVGhpcyBmdW5jdGlvbiBpcyByZXR1cm5lZCBmcm9tIHRoZSBgcmF3KClgIGZ1bmN0aW9uLCB3aGljaCBhbGxvd3MgYnktcGFzc2luZyB0aGUgcHJvcGVydHlcclxuICogdHlwaW5nIHJ1bGVzIGFuZCBzcGVjaWZ5aW5nIGEgc3RyaW5nIGRpcmVjdGx5LiBUaGlzIG1pZ2h0IGJlIHVzZWZ1bCwgd2hlbiBhIHN0cmluZyB2YWx1ZSBpc1xyXG4gKiBvYnRhaW5lZCBmcm9tIHNvbWUgZXh0ZXJuYWwgY2FsY3VsYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3RyaW5nUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwic3RyaW5nXCI+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbVZhciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgb2JqZWN0IHdpdGggdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBuZWVkZWQgYmVjYXVzZSBldmVyeSBzdHlsZSBwcm9wZXJ0eSBjYW4gYWNjZXB0IHZhbHVlIGluIHRoZSBmb3JtIG9mIHRoZSB2YXIoKVxyXG4gKiBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYXI8VCA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHNldFZhbHVlKCB2YWx1ZTogVCwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBleHRlbmRzIHRoZSBnaXZlbiB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBJQ3VzdG9tVmFyIGludGVyZmFjZSB0aGF0IGFsbG93cyB1c2luZyBhIENTUyBjdXN0b20gcHJvcGVydHkuXHJcbiAqIC0gSVN0cmluZ1Byb3h5IGludGVyZmFjZSB0aGF0IGFsbG93cyBzcGVjaWZ5aW5nIHJhdyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZDxUPiA9IFQgfCBJQ3VzdG9tVmFyPFQ+IHwgSVN0cmluZ1Byb3h5IHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgdHlwZSBvZiBwcm9wZXJ0eSBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBcIiFcIiBwcm9wZXJ0eS4gVGhpc1xyXG4gKiB0eXBlIGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBmbGFnZ2VkIGFzIFwiIWltcG9ydGFudFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSW1wb3J0YW50UHJvcDxUPiA9IHsgXCIhXCI6IEV4dGVuZGVkPFQ+IH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRQcm9wIGV4dGVuZHMgdGhlIGdpdmVuIGdlbmVyaWMgdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgZWxlbWVudHM6XHJcbiAqIC0gT2JqZWN0IHdpdGggYSBzaW5nbGUgcHJvcGVydHkgXCIhXCIsIHdoaWNoIGlzIHVzZWQgdG8gbWFyayBhIHByb3BlcnR5IGFzIFwiIWltcG9ydGFudFwiLlxyXG4gKiAtIEdsb2JhbF9TdHlsZVR5cGUsIHdoaWNoIGFsbG93cyBhbnkgcHJvcGVydHkgdG8gYmUgYXNzaWduZWQgdGhlIGdsb2JhbCB2YWx1ZXMgc3VjaCBhc1xyXG4gKiAgIFwiaW5pdGlhbFwiLCBcImluaGVyaXRcIiwgXCJ1bnNldFwiIGFuZCBcInJldmVydFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRQcm9wPFQ+ID0gRXh0ZW5kZWQ8VD4gfCBJbXBvcnRhbnRQcm9wPFQ+IHwgR2xvYmFsX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIHBhaXItbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gMiB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JQYWlyPFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJveC1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byA0IHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPckJveDxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPj8sIEV4dGVuZGVkPFQ+P107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgb3IgbW9yZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JNYW55PFQ+ID0gVCB8IEV4dGVuZGVkPFQ+W107XHJcblxyXG4vKipcclxuICogVGhlIElRdW90ZWRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGEgc3RyaW5nIGluIHF1b3RhdGlvbiBtYXJrc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUXVvdGVkUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwicXVvdGVkXCI+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1lcmljIHR5cGVzIGFzIGEgYmFzaXMgZm9yIGhhbmRsaW5nIENTUyA8bnVtYmVyPiwgPGxlbmd0aD4sIDxhbmdsZT4sIGV0Yy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IG51bWJlciB8IHN0cmluZyB8IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IE9uZU9yTWFueTxOdW1iZXJCYXNlPFQ+PjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyQmFzZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciB0eXBlLCB0aGV5IGFyZSBjb252ZXJ0ZWRcclxuICogdG8gc3RyaW5ncyB1c2luZyB0aGUgYG51bWJlclRvU3RyaW5nYCBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJCYXNlTWF0aDxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1pbigpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWluKCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjbGFtcCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjYWxjKCkgZnVuY3Rpb24uIFRoaXMgbWV0aG9kIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0XHJcbiAgICAgKiBiZSBpbnZva2VkIHdpdGggYSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICAgICAqL1xyXG4gICAgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bnVtYmVyPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTnVtYmVyIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE51bWJlclR5cGUgPSBcIk51bWJlclwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAtIG5vdGUgdGhhdCBpdCBleGx1ZGVzIGBzdHJpbmdgICovXHJcbmV4cG9ydCB0eXBlIENzc051bWJlciA9IEV4Y2x1ZGU8TnVtYmVyQmFzZTxOdW1iZXJUeXBlPixzdHJpbmc+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlOdW1iZXIgPSBPbmVPck1hbnk8Q3NzTnVtYmVyPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PE51bWJlclR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bnVtYmVyPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTnVtYmVyTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxOdW1iZXJUeXBlPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBwZXJjZW50ICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRVbml0cyA9IFwiJVwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFBlcmNlbnQgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFR5cGUgPSBcIlBlcmNlbnRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1BlcmNlbnQgPSBOdW1iZXJCYXNlPFBlcmNlbnRUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVBlcmNlbnQgPSBPbmVPck1hbnk8Q3NzUGVyY2VudD47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlcmNlbnRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8UGVyY2VudFR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUGVyY2VudE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHBlcmNlbnQ+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NQZXJjZW50TWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxQZXJjZW50VHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxsZW5ndGg+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBsZW5ndGggKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVW5pdHMgPSBcIlFcIiB8IFwiY2hcIiB8IFwiY21cIiB8IFwiZW1cIiB8IFwiZXhcIiB8IFwiaWNcIiB8IFwiaW5cIiB8IFwibGhcIiB8IFwibW1cIiB8IFwicGNcIiB8XHJcbiAgICAgICAgICAgICAgICBcInB0XCIgfCBcInB4XCIgfCBcInZiXCIgfCBcInZoXCIgfCBcInZpXCIgfCBcInZ3XCIgfCBcInJlbVwiIHwgXCJybGhcIiB8IFwidm1heFwiIHwgXCJ2bWluXCIgfCBcImZyXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTGVuZ3RoIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFR5cGUgPSBcIkxlbmd0aFwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aCA9IE51bWJlckJhc2U8TGVuZ3RoVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUxlbmd0aCA9IE9uZU9yTWFueTxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tMi1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aFBhaXIgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLTQtcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGhCb3ggPSBPbmVPckJveDxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxlbmd0aFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxMZW5ndGhUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0xlbmd0aE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGxlbmd0aD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0xlbmd0aE1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8TGVuZ3RoVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW5tYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJTGVuZ3RoUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGFuZ2xlPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgYW5nbGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0cyA9IFwiZGVnXCIgfCBcInJhZFwiIHwgXCJncmFkXCIgfCBcInR1cm5cIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBBbmdsZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVR5cGUgPSBcIkFuZ2xlXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NBbmdsZSA9IE51bWJlckJhc2U8QW5nbGVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlBbmdsZSA9IE9uZU9yTWFueTxDc3NBbmdsZT47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmdsZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxBbmdsZVR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzQW5nbGVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxhbmdsZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0FuZ2xlTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxBbmdsZVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8dGltZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHRpbWUgKi9cclxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gXCJzXCIgfCBcIm1zXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgVGltZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVHlwZSA9IFwiVGltZVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzVGltZSA9IE51bWJlckJhc2U8VGltZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpVGltZSA9IE9uZU9yTWFueTxDc3NUaW1lPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFRpbWVUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1RpbWVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDx0aW1lPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzVGltZU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8VGltZVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8cmVzb2x1dGlvbj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHJlc29sdXRpb24gKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblVuaXRzID0gXCJkcGlcIiB8IFwiZHBjbVwiIHwgXCJkcHB4XCIgfCBcInhcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBSZXNvbHV0aW9uIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25UeXBlID0gXCJSZXNvbHV0aW9uXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NSZXNvbHV0aW9uID0gTnVtYmVyQmFzZTxSZXNvbHV0aW9uVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlSZXNvbHV0aW9uID0gT25lT3JNYW55PENzc1Jlc29sdXRpb24+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvbHV0aW9uUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFJlc29sdXRpb25UeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1Jlc29sdXRpb25NYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8UmVzb2x1dGlvblR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8ZnJlcXVlbmN5PmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJlcXVlbmN5ICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVVuaXRzID0gXCJIelwiIHwgXCJrSHpcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBGcmVxdWVuY3kgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VHlwZSA9IFwiRnJlcXVlbmN5XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyZXF1ZW5jeSA9IE51bWJlckJhc2U8RnJlcXVlbmN5VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyZXF1ZW5jeSA9IE9uZU9yTWFueTxDc3NGcmVxdWVuY3k+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZyZXF1ZW5jeVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxGcmVxdWVuY3lUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0ZyZXF1ZW5jeU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8RnJlcXVlbmN5VHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIHBvaW50IHVzaW5nIHggYW5kIHkgY29vcmRpbmF0ZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb2ludCA9IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCA9IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgYSBzaW1wbGUgMSBvciB0d28gdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBTaW1wbGVDc3NQb3NpdGlvbiA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgZnVsbCB1cCB0byA0IHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9zaXRpb24gPSBTaW1wbGVDc3NQb3NpdGlvbiB8IFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkXSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIG11bHRpcGxlIGA8cG9zaXRpb24+YCBDU1MgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlDc3NQb3NpdGlvbiA9IEV4dGVuZGVkPENzc1Bvc2l0aW9uPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmFkaXVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIGNvcm5lciByYWRpdXMgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmFkaXVzID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVUkxzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVVybFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgQ1NTIHVybCgpIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVXJsUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwidXJsXCI+IHt9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpIGZ1bmN0aW9uIHN1cHBvcnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVHlwZUtleXdvcmQgPSBcInN0cmluZ1wiIHwgXCJjb2xvclwiIHwgXCJ1cmxcIiB8IFwiaW50ZWdlclwiIHwgXCJudW1iZXJcIiB8IFwibGVuZ3RoXCIgfCBcImFuZ2xlXCIgfCBcInRpbWVcIiB8IFwiZnJlcXVlbmN5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVW5pdEtleXdvcmQgPSBQZXJjZW50VW5pdHMgfCBMZW5ndGhVbml0cyB8IFRpbWVVbml0cyB8IEFuZ2xlVW5pdHMgfCBSZXNvbHV0aW9uVW5pdHMgfCBGcmVxdWVuY3lVbml0cztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFdlYiBOYW1lc3BhY2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2ViTmFtZXNwYWNlcyBjbGFzcyBjb250YWlucyBpZGVudGlmaWVycyBmb3IgdGhlIGtub3duIFdlYi1yZWxhdGVkIG5hbWVzcGFjZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2ViTmFtZXNwYWNlc1xyXG57XHJcblx0c3RhdGljIHJlYWRvbmx5IEhUTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTGluayA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUwgPSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgTWF0aE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==