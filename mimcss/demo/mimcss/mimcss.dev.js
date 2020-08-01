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
exports.alpha = exports.hsl = exports.rgb = void 0;
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
exports.crossFade = exports.gradient = void 0;
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
        arrItemFunc: crossFadeParamToString,
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
exports.serializeToCSS = exports.createCssSerializer = exports.classes = exports.enableShortNames = exports.$embed = exports.$use = exports.$media = exports.$supports = exports.$page = exports.$namespace = exports.$fontface = exports.$import = exports.$gridarea = exports.$gridline = exports.$counter = exports.$var = exports.$keyframes = exports.$style = exports.$id = exports.$class = exports.$abstract = void 0;
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
        arrItemFunc: v => v instanceof StyleRules_1.ClassRule ? v.name : UtilFuncs_1.val2str(v)
    });
}
exports.classes = classes;
/**
 * Creates a new ICssSerializer object that allows adding style definition classes
 * and instances and serializing them to a string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
function createCssSerializer() {
    return new CssSerializer();
}
exports.createCssSerializer = createCssSerializer;
/**
 * Serializes one or more style definition classes and instances and returns their CSS string
 * representation. This can be used for server-side rendering when the resultant string can be
 * set as the content of a `<style>` element.
 */
function serializeToCSS(arg1, ...args) {
    let serializer = new CssSerializer();
    serializer.add(arg1);
    if (args.length > 0)
        args.forEach(instOrClass => serializer.add(instOrClass));
    return serializer.serialize();
}
exports.serializeToCSS = serializeToCSS;
/**
 * The StyleSerializer class allows adding style definition classes and objects
 * and serializing them to a single string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
class CssSerializer {
    constructor() {
        // Set of style definition instances. This is needed to not add style definitions more than once
        this.instances = new Set();
    }
    /**
     * Adds style definition class or instance.
     */
    add(instOrClass) {
        let instance = RuleContainer_1.processInstanceOrClass(instOrClass);
        if (!instance || this.instances.has(instance))
            return;
        this.instances.add(instance);
    }
    /**
     * Returns concatenated string representation of all CSS rules added to the context.
     */
    serialize() {
        let ctx = new RuleSerializationContext();
        this.instances.forEach(instance => ctx.addStyleDefinition(instance));
        return ctx.topLevelBuf + ctx.nonTopLevelBuf;
    }
}
/**
 * The StyleSerializer class allows adding style definition classes and objects
 * and serializing them to a single string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
class RuleSerializationContext {
    constructor() {
        // String buffer that accumulates top-level rule texts.
        this.topLevelBuf = "";
        // String buffer that accumulates non-top-level rule texts.
        this.nonTopLevelBuf = "";
        // Set of style definition instances that were already serialized in this context.
        this.instances = new Set();
    }
    // Adds rule text
    addRuleText(s, isTopLevelRule) {
        if (isTopLevelRule)
            this.topLevelBuf += s + "\n";
        else
            this.nonTopLevelBuf += s + "\n";
    }
    // Adds rule text
    addStyleDefinition(instance) {
        if (!this.instances.has(instance)) {
            this.instances.add(instance);
            RuleContainer_1.serializeInstance(instance, this);
        }
    }
}


/***/ }),

/***/ "./lib/api/SchedulingAPI.js":
/*!**********************************!*\
  !*** ./lib/api/SchedulingAPI.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unregisterScheduler = exports.registerScheduler = exports.getDefaultSchedulerType = exports.setDefaultSchedulerType = exports.cancelDOMUpdate = exports.forceDOMUpdate = exports.deactivate = exports.activate = void 0;
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
exports.span = exports.repeat = exports.minmax = exports.fitContent = exports.translate3d = exports.translateZ = exports.translateY = exports.translateX = exports.translate = exports.skewY = exports.skewX = exports.skew = exports.scale3d = exports.scaleZ = exports.scaleY = exports.scaleX = exports.scale = exports.rotate3d = exports.rotateZ = exports.rotateY = exports.rotateX = exports.rotate = exports.perspective = exports.matrix3d = exports.matrix = exports.path = exports.ray = exports.polygon = exports.ellipse = exports.circle = exports.inset = exports.hueRotate = exports.dropShadow = exports.blur = exports.sepia = exports.saturate = exports.opacity = exports.invert = exports.grayscale = exports.contrast = exports.brightness = exports.diffStylesets = exports.stylesetToStringStyleset = exports.setElementStringStyle = exports.setElementStyle = exports.getStylePropValue = exports.selector = void 0;
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
    return () => `repeat(${UtilFuncs_1.val2str(count)},${UtilFuncs_1.val2str(tracks, { arrItemFunc: StyleFuncs_1.gridTrackToString })})`;
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
exports.counters = exports.counter = exports.quoted = exports.attr = exports.url = exports.usevar = exports.raw = exports.khz = exports.hz = exports.Frequency = exports.x = exports.dppx = exports.dpcm = exports.dpi = exports.Resolution = exports.s = exports.ms = exports.Time = exports.turn = exports.grad = exports.rad = exports.deg = exports.Angle = exports.fr = exports.vmin = exports.vmax = exports.rlh = exports.rem = exports.vw = exports.vi = exports.vh = exports.vb = exports.px = exports.pt = exports.pc = exports.mm = exports.lh = exports.inch = exports.ic = exports.ex = exports.em = exports.cm = exports.ch = exports.Q = exports.Len = exports.percent = exports.Percent = exports.Num = void 0;
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
__exportStar(__webpack_require__(/*! ./styles/UtilTypes */ "./lib/styles/UtilTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./styles/ColorTypes */ "./lib/styles/ColorTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./styles/ImageTypes */ "./lib/styles/ImageTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./styles/StyleTypes */ "./lib/styles/StyleTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./styles/SelectorTypes */ "./lib/styles/SelectorTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./styles/MediaTypes */ "./lib/styles/MediaTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./styles/FontFaceTypes */ "./lib/styles/FontFaceTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./rules/RuleTypes */ "./lib/rules/RuleTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./api/UtilAPI */ "./lib/api/UtilAPI.js"), exports);
__exportStar(__webpack_require__(/*! ./api/ColorAPI */ "./lib/api/ColorAPI.js"), exports);
__exportStar(__webpack_require__(/*! ./api/ImageAPI */ "./lib/api/ImageAPI.js"), exports);
__exportStar(__webpack_require__(/*! ./api/StyleAPI */ "./lib/api/StyleAPI.js"), exports);
__exportStar(__webpack_require__(/*! ./api/RuleAPI */ "./lib/api/RuleAPI.js"), exports);
__exportStar(__webpack_require__(/*! ./api/SchedulingAPI */ "./lib/api/SchedulingAPI.js"), exports);


/***/ }),

/***/ "./lib/rules/AnimationRule.js":
/*!************************************!*\
  !*** ./lib/rules/AnimationRule.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationRule = void 0;
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
    // Serializes this rule to a string.
    serialize(ctx) {
        if (!this.frameRules)
            return;
        ctx.addRuleText(`@keyframes ${this.name} {`);
        for (let frameRule of this.frameRules)
            ctx.addRuleText(frameRule.toCssString());
        ctx.addRuleText("}");
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
            arrItemFunc: v => UtilFuncs_1.val2str(v, { fromNumber: v => v + "%" }),
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
exports.CounterRule = void 0;
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
exports.GridAreaRule = exports.GridLineRule = void 0;
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
exports.MediaRule = exports.SupportsRule = exports.GroupRule = void 0;
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
    // Serializes this rule to a string.
    serialize(ctx) {
        if (!this.ruleContainer)
            return;
        let selector = this.getGroupSelectorText();
        if (!selector)
            return;
        ctx.addRuleText(`${selector} {`);
        // insert sub-rules
        this.ruleContainer.serializeRules(ctx);
        ctx.addRuleText("}");
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
exports.PageRule = exports.FontFaceRule = exports.NamespaceRule = exports.ImportRule = void 0;
const FontFaceFuncs_1 = __webpack_require__(/*! ../styles/FontFaceFuncs */ "./lib/styles/FontFaceFuncs.js");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
const MediaFuncs_1 = __webpack_require__(/*! ../styles/MediaFuncs */ "./lib/styles/MediaFuncs.js");
const StyleRules_1 = __webpack_require__(/*! ./StyleRules */ "./lib/rules/StyleRules.js");
/**
 * The MiscRule class serves as a base class for simple rules.
 */
class MiscRule extends Rule_1.Rule {
    constructor(isTopLevelRule) {
        super();
        this.isTopLevelRule = isTopLevelRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        this.cssRule = Rule_1.Rule.addRuleToDOM(this.getRuleText(), parent);
    }
    // Serializes this rule to a string.
    serialize(ctx) {
        ctx.addRuleText(this.getRuleText(), this.isTopLevelRule);
    }
}
/**
 * The ImportRule class describes a CSS @import rule.
 */
class ImportRule extends MiscRule {
    constructor(url, mediaQuery, supportsQuery) {
        // this is a top-level rule
        super(true);
        this.url = url;
        this.mediaQuery = mediaQuery;
        this.supportsQuery = supportsQuery;
    }
    // Creates a copy of the rule.
    clone() {
        return new ImportRule(this.url, this.mediaQuery, this.supportsQuery);
    }
    // Returns CSS string for this rule.
    getRuleText() {
        let url;
        if (this.url.startsWith("url") || this.url.startsWith("\"") || this.url.startsWith("'"))
            url = this.url;
        else
            url = `url(${this.url})`;
        let supportsQueryString = !this.supportsQuery ? "" : StyleFuncs_1.supportsQueryToString(this.supportsQuery);
        if (supportsQueryString && !supportsQueryString.startsWith("supports"))
            supportsQueryString = `supports( ${supportsQueryString} )`;
        let mediaQueryString = !this.mediaQuery ? "" : MediaFuncs_1.mediaQueryToString(this.mediaQuery);
        return `@import ${url} ${supportsQueryString} ${mediaQueryString}`;
    }
}
exports.ImportRule = ImportRule;
/**
 * The NamespaceRule class describes a CSS @namespace rule.
 */
class NamespaceRule extends MiscRule {
    constructor(namespace, prefix) {
        // this is a top-level rule
        super(true);
        this.namespace = namespace;
        this.prefix = prefix;
    }
    // Creates a copy of the rule.
    clone() {
        return new NamespaceRule(this.namespace, this.prefix);
    }
    // Returns CSS string for this rule.
    getRuleText() {
        let url = this.namespace.startsWith("url(") ? this.namespace : `url(${this.namespace})`;
        return `@namespace ${this.prefix ? this.prefix : ""} ${url}`;
    }
}
exports.NamespaceRule = NamespaceRule;
/**
 * The FontFaceRule class describes a @font-face CSS rule.
 */
class FontFaceRule extends MiscRule {
    constructor(fontface) {
        super();
        this.fontface = fontface;
    }
    // Creates a copy of the rule.
    clone() {
        return new FontFaceRule(this.fontface);
    }
    // Returns CSS string for this rule.
    getRuleText() {
        return `@font-face ${FontFaceFuncs_1.fontFaceToString(this.fontface)}`;
    }
}
exports.FontFaceRule = FontFaceRule;
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


/***/ }),

/***/ "./lib/rules/Rule.js":
/*!***************************!*\
  !*** ./lib/rules/Rule.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createNames = exports.Rule = exports.RuleLike = void 0;
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
exports.serializeInstance = exports.deactivateInstance = exports.activateInstance = exports.getContainerFromInstance = exports.processInstanceOrClass = exports.s_enableShortNames = void 0;
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
    /** Writes all rules recursively to the given string. */
    serializeRules(ctx) {
        // insert @import and @namespace rules as they must be before other rules. If the parent is a grouping
        // rule, don't insert @import and @namespace rules at all
        if (this.isTopLevel) {
            this.imports && this.imports.forEach(rule => rule.serialize(ctx));
            this.namespaces && this.namespaces.forEach(rule => rule.serialize(ctx));
        }
        // activate referenced style definitions
        for (let ref of this.refs)
            ctx.addStyleDefinition(ref);
        // serialize our custom variables in a ":root" rule
        if (this.vars.length > 0) {
            ctx.addRuleText(`:root {${this.vars.map(varObj => varObj.toCssString()).filter(v => v != null).join(";")}}`);
        }
        // serialize all other rules
        this.otherRules.forEach(rule => rule.serialize(ctx));
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
/**
 * Serializes the given style definition to the given string.
 */
function serializeInstance(instance, ctx) {
    let ruleContainer = getContainerFromInstance(instance);
    if (ruleContainer)
        ruleContainer.serializeRules(ctx);
}
exports.serializeInstance = serializeInstance;


/***/ }),

/***/ "./lib/rules/RuleTypes.js":
/*!********************************!*\
  !*** ./lib/rules/RuleTypes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleDefinition = void 0;
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
exports.s_unregisterScheduler = exports.s_registerScheduler = exports.s_setDefaultSchedulerType = exports.s_getDefaultSchedulerType = exports.s_scheduleCall = exports.s_scheduleStylePropertyUpdate = exports.SchedulingActivator = void 0;
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
exports.SelectorRule = exports.IDRule = exports.ClassRule = exports.AbstractRule = exports.StyleRule = void 0;
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
    // Serializes this rule to a string.
    serialize(ctx) {
        if (Object.keys(this.styleset).length > 0)
            ctx.addRuleText(this.toCssString());
        // if dependent rules exist, insert them under the same parent
        for (let propName in this.dependentRules) {
            let propVal = this.dependentRules[propName];
            if (Array.isArray(propVal) && propVal.length > 0)
                propVal.forEach((depRule) => depRule.serialize(ctx));
            else
                propVal.serialize(ctx);
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
exports.VarRule = void 0;
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
exports.colorToString = exports.colorWithAlphaToString = exports.hslToString = exports.rgbToString = void 0;
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
exports.Colors = void 0;
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
exports.fontFaceToString = void 0;
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
        arrItemFunc: UtilFuncs_1.CssPercentMath.styleToString
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

/***/ "./lib/styles/FontFaceTypes.js":
/*!*************************************!*\
  !*** ./lib/styles/FontFaceTypes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./lib/styles/ImageTypes.js":
/*!**********************************!*\
  !*** ./lib/styles/ImageTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module contains types used to define CSS `<image>` type and related functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
;


/***/ }),

/***/ "./lib/styles/MediaFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/MediaFuncs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaFeatureToString = exports.singleMediaQueryToString = exports.mediaQueryToString = void 0;
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

/***/ "./lib/styles/MediaTypes.js":
/*!**********************************!*\
  !*** ./lib/styles/MediaTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./lib/styles/SelectorFuncs.js":
/*!*************************************!*\
  !*** ./lib/styles/SelectorFuncs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudoEntityToString = exports.selectorToString = void 0;
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

/***/ "./lib/styles/SelectorTypes.js":
/*!*************************************!*\
  !*** ./lib/styles/SelectorTypes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;


/***/ }),

/***/ "./lib/styles/StyleFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/StyleFuncs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.singleSupportsQueryToString = exports.supportsQueryToString = exports.forAllPropsInStylset = exports.stylePropToString = exports.getCustomPropNameAndValue = exports.stylesetToString = exports.mergeStylesetCustomProps = exports.mergeStylesets = exports.obj2str = exports.gridTrackToString = exports.borderRadiusToString = exports.singleBoxShadow_fromObject = void 0;
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
const ColorFuncs_1 = __webpack_require__(/*! ./ColorFuncs */ "./lib/styles/ColorFuncs.js");
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
        arrItemFunc: v => UtilFuncs_1.val2str(v, {
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
        arrItemFunc: UtilFuncs_1.CssLengthMath.styleToString,
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
                    arrItemFunc: cursorToString,
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
        arrItemFunc: gridTrackToString
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
// Helper function converts the given multi-length value to string. If the value is an array, the
// items will be separated by space.
function multiLengthToStringWithSpace(val) {
    return UtilFuncs_1.CssLengthMath.multiStyleToString(val, " ");
}
// Helper function converts the given multi-time value to string. If the value is an array, the
// items will be separated by comma.
function multiTimeToStringWithComma(val) {
    return UtilFuncs_1.CssTimeMath.multiStyleToString(val, ",");
}
// Helper function converts the given value to string. If the value is an array, the items will be
// separated by comma.
function arrayToStringWithComma(val) {
    return UtilFuncs_1.val2str(val, { arrSep: "," });
}
;
// Helper function converts the given value to string. If the value is an array, the items will be
// separated by slash.
function arrayToStringWithSlash(val) {
    return UtilFuncs_1.val2str(val, { arrSep: "/" });
}
;
/**
 * Converts the given value to string using a well-known function indicated by the given
 * enumeration value.
 * @param val
 * @param funcType
 */
function valueToStringByWellKnownFunc(val, funcType) {
    let func = funcType === 1 /* Length */ ? UtilFuncs_1.CssLengthMath.styleToString :
        funcType === 2 /* Color */ ? ColorFuncs_1.colorToString :
            funcType === 3 /* Border */ ? borderToString :
                funcType === 4 /* Position */ ? UtilFuncs_1.pos2str :
                    funcType === 5 /* CornerRadius */ ? singleCornerRadiusToString :
                        funcType === 6 /* MultiLengthWithSpace */ ? multiLengthToStringWithSpace :
                            funcType === 7 /* MultiTimeWithComma */ ? multiTimeToStringWithComma :
                                funcType === 8 /* ArrayWithComma */ ? arrayToStringWithComma :
                                    funcType === 9 /* ArrayWithSlash */ ? arrayToStringWithSlash :
                                        funcType === 10 /* GridAxis */ ? gridAxisToString :
                                            null;
    return func ? func(val) : "";
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Registry of CSS properties that specifies how their values should be converted to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
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
    animationDelay: 7 /* MultiTimeWithComma */,
    animationDuration: 7 /* MultiTimeWithComma */,
    animationIterationCount: 8 /* ArrayWithComma */,
    animationFillMode: 8 /* ArrayWithComma */,
    animationName: 8 /* ArrayWithComma */,
    animationPlayState: 8 /* ArrayWithComma */,
    animationTimingFunction: timingFunctionToString,
    background: {
        fromNumber: ColorFuncs_1.colorToString,
        fromObj: singleBackground_fromObject,
        fromAny: singleBackground_fromStyle,
        arrItemFunc: singleBackground_fromStyle,
        arrSep: ",",
    },
    backgroundAttachment: 8 /* ArrayWithComma */,
    backgroundBlendMode: 8 /* ArrayWithComma */,
    backgroundClip: 8 /* ArrayWithComma */,
    backgroundColor: 2 /* Color */,
    backgroundOrigin: 8 /* ArrayWithComma */,
    backgroundPosition: v => UtilFuncs_1.multiPos2str(v, ","),
    backgroundRepeat: 8 /* ArrayWithComma */,
    backgroundSize: {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        arrItemFunc: singleBackgroundSize_fromStyle,
        arrSep: ","
    },
    baselineShift: 1 /* Length */,
    border: 3 /* Border */,
    borderBlockEnd: 3 /* Border */,
    borderBlockEndColor: 2 /* Color */,
    borderBlockEndWidth: 1 /* Length */,
    borderBlockStart: 3 /* Border */,
    borderBlockStartColor: 2 /* Color */,
    borderBlockStartWidth: 1 /* Length */,
    borderBottom: 3 /* Border */,
    borderBottomColor: 2 /* Color */,
    borderBottomLeftRadius: 5 /* CornerRadius */,
    borderBottomRightRadius: 5 /* CornerRadius */,
    borderBottomWidth: 1 /* Length */,
    borderColor: {
        fromAny: ColorFuncs_1.colorToString
    },
    borderImage: {
        fromObj: borderImageToString,
    },
    borderImageSlice: borderImageSliceToString,
    borderInlineEnd: 3 /* Border */,
    borderInlineEndColor: 2 /* Color */,
    borderInlineEndWidth: 1 /* Length */,
    borderInlineStart: 3 /* Border */,
    borderInlineStartColor: 2 /* Color */,
    borderInlineStartWidth: 1 /* Length */,
    borderLeft: 3 /* Border */,
    borderLeftColor: 2 /* Color */,
    borderLeftWidth: 1 /* Length */,
    borderRadius: borderRadiusToString,
    borderRight: 3 /* Border */,
    borderRightColor: 2 /* Color */,
    borderRightWidth: 1 /* Length */,
    borderSpacing: 6 /* MultiLengthWithSpace */,
    borderTop: 3 /* Border */,
    borderTopColor: 2 /* Color */,
    borderTopLeftRadius: 5 /* CornerRadius */,
    borderTopRightRadius: 5 /* CornerRadius */,
    borderTopWidth: 1 /* Length */,
    borderWidth: 6 /* MultiLengthWithSpace */,
    bottom: 1 /* Length */,
    boxShadow: {
        fromObj: singleBoxShadow_fromObject,
        arrSep: ",",
    },
    caretColor: 2 /* Color */,
    clip: {
        fromArray: v => `rect(${multiLengthToStringWithSpace(v)}`
    },
    color: 2 /* Color */,
    columnGap: 1 /* Length */,
    columnRule: 3 /* Border */,
    columnRuleColor: 2 /* Color */,
    columnRuleWidth: 6 /* MultiLengthWithSpace */,
    columns: columnsToString,
    columnWidth: 1 /* Length */,
    cursor: cursorToString,
    fill: 2 /* Color */,
    fillOpacity: UtilFuncs_1.CssPercentMath.styleToString,
    flex: flexToString,
    flexBasis: 1 /* Length */,
    floodColor: 2 /* Color */,
    font: {
        fromObj: font_fromObject
    },
    fontSize: 1 /* Length */,
    fontStyle: fontStyleToString,
    gap: 6 /* MultiLengthWithSpace */,
    gridColumnGap: 1 /* Length */,
    gridGap: 6 /* MultiLengthWithSpace */,
    gridRowGap: 1 /* Length */,
    gridArea: 9 /* ArrayWithSlash */,
    gridAutoColumns: 10 /* GridAxis */,
    gridAutoRows: 10 /* GridAxis */,
    gridColumn: 9 /* ArrayWithSlash */,
    gridRow: 9 /* ArrayWithSlash */,
    gridTemplateAreas: gridTemplateAreasToString,
    gridTemplateColumns: 10 /* GridAxis */,
    gridTemplateRows: 10 /* GridAxis */,
    height: 1 /* Length */,
    inlineSize: 1 /* Length */,
    left: 1 /* Length */,
    letterSpacing: 1 /* Length */,
    lightingColor: 2 /* Color */,
    margin: 6 /* MultiLengthWithSpace */,
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
    objectPosition: 4 /* Position */,
    offset: offsetToString,
    offsetAnchor: 4 /* Position */,
    offsetDistance: 1 /* Length */,
    offsetPosition: 4 /* Position */,
    offsetRotate: {
        fromAny: UtilFuncs_1.CssAngleMath.styleToString
    },
    outline: 3 /* Border */,
    outlineColor: 2 /* Color */,
    outlineOffset: 1 /* Length */,
    padding: 6 /* MultiLengthWithSpace */,
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
        arrItemFunc: v => `"${v}"`
    },
    right: 1 /* Length */,
    rotate: rotateToString,
    rowGap: 1 /* Length */,
    scrollbarColor: {
        arrItemFunc: ColorFuncs_1.colorToString
    },
    scrollMargin: 6 /* MultiLengthWithSpace */,
    scrollMarginBlock: 6 /* MultiLengthWithSpace */,
    scrollMarginBlockEnd: 1 /* Length */,
    scrollMarginBlockStart: 1 /* Length */,
    scrollMarginBottom: 1 /* Length */,
    scrollMarginInline: 6 /* MultiLengthWithSpace */,
    scrollMarginInlineEnd: 1 /* Length */,
    scrollMarginInlineStart: 1 /* Length */,
    scrollMarginLeft: 1 /* Length */,
    scrollMarginRight: 1 /* Length */,
    scrollMarginTop: 1 /* Length */,
    scrollPadding: 6 /* MultiLengthWithSpace */,
    scrollPaddingBlock: 6 /* MultiLengthWithSpace */,
    scrollPaddingBlockEnd: 1 /* Length */,
    scrollPaddingBlockStart: 1 /* Length */,
    scrollPaddingBottom: 1 /* Length */,
    scrollPaddingInline: 6 /* MultiLengthWithSpace */,
    scrollPaddingInlineEnd: 1 /* Length */,
    scrollPaddingInlineStart: 1 /* Length */,
    scrollPaddingLeft: 1 /* Length */,
    scrollPaddingRight: 1 /* Length */,
    scrollPaddingTop: 1 /* Length */,
    shapeMargin: 1 /* Length */,
    stopColor: 2 /* Color */,
    stroke: 2 /* Color */,
    tabSize: 1 /* Length */,
    textCombineUpright: {
        fromNumber: v => `digits ${v}`
    },
    textDecoration: {
        fromNumber: ColorFuncs_1.colorToString,
        fromObj: textDecoration_fromObject
    },
    textDecorationColor: 2 /* Color */,
    textDecorationThickness: 1 /* Length */,
    textEmphasis: {
        fromAny: ColorFuncs_1.colorToString
    },
    textEmphasisColor: 2 /* Color */,
    textIndent: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
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
    transitionDelay: 7 /* MultiTimeWithComma */,
    transitionDuration: 7 /* MultiTimeWithComma */,
    transitionTimingFunction: timingFunctionToString,
    translate: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    verticalAlign: 1 /* Length */,
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
    "CssPosition": 4 /* Position */,
    "CssColor": 2 /* Color */,
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS supports query.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/** Converts the given supports query to its string representation */
function supportsQueryToString(query) {
    return UtilFuncs_1.val2str(query, {
        fromAny: singleSupportsQueryToString,
        arrSep: " or "
    });
}
exports.supportsQueryToString = supportsQueryToString;
/** Converts the given supports query to its string representation */
function singleSupportsQueryToString(query) {
    return UtilFuncs_1.val2str(query, {
        fromObj: (v) => {
            let propNames = Object.keys(v).filter((propName) => propName != "$negate");
            if (propNames.length === 0)
                return "";
            let not = v.$negate ? "not" : "";
            return `${not} (${propNames.map((propName) => stylePropToString(propName, query[propName])).join(") and (")})`;
        }
    });
}
exports.singleSupportsQueryToString = singleSupportsQueryToString;


/***/ }),

/***/ "./lib/styles/StyleTypes.js":
/*!**********************************!*\
  !*** ./lib/styles/StyleTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
;
;
;


/***/ }),

/***/ "./lib/styles/UtilFuncs.js":
/*!*********************************!*\
  !*** ./lib/styles/UtilFuncs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.multiPos2str = exports.pos2str = exports.CssFrequencyMath = exports.CssResolutionMath = exports.CssTimeMath = exports.CssAngleMath = exports.CssLengthMath = exports.unitlessOrPercentToString = exports.CssPercentMath = exports.CssNumberMath = exports.templateStringToString = exports.arr2str = exports.val2str = exports.camelToDash = exports.dashToCamel = void 0;
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
                return arr2str(val, options.arrItemFunc || options.fromAny || undefined, separator);
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
        arrItemFunc: v => numberBaseToString(v, convertFunc),
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
        arrItemFunc: pos2str,
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
exports.WebNamespaces = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU2NoZWR1bGluZ0FQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1N0eWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvVXRpbEFQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvbWltY3NzVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0FuaW1hdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0NvdW50ZXJSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JpZFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2NoZWR1bGluZy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ltYWdlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9NZWRpYUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU2VsZWN0b3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxpR0FBa0Q7QUFJbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0gsU0FBZ0IsR0FBRyxDQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVU7SUFFNUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFIRCxrQkFHQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxDQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVTtJQUVyRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELGtCQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxTQUFnQixLQUFLLENBQUUsQ0FBeUMsRUFBRSxDQUFTO0lBRXZFLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBSEQsc0JBR0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUQsbUdBQW1EO0FBQ25ELGdHQUF3SDtBQUt4SDs7Ozs7R0FLRztBQUNILE1BQU0sUUFBUTtJQUVWLElBQVcsTUFBTSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQVcsZUFBZSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLElBQVcsTUFBTSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQVcsZUFBZSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLElBQVcsS0FBSyxLQUFxQixPQUFPLGlCQUFpQixDQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLElBQVcsY0FBYyxLQUFxQixPQUFPLGlCQUFpQixDQUFFLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pHO0FBSUQ7O0dBRUc7QUFDUSxnQkFBUSxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7QUFJaEQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsR0FBRyxJQUFzQjtJQUVoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFIRCw4QkFHQztBQUlEOzs7R0FHRztBQUNILFNBQVMsa0JBQWtCLENBQUUsSUFBWTtJQUVyQyxJQUFJLENBQUMsR0FBUSxDQUFDLEdBQUcsWUFBa0MsRUFBZSxFQUFFLENBQ2hFLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXZFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7UUFDM0IsQ0FBQyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUosT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBRSxJQUFZO0lBRXJDLElBQUksQ0FBQyxHQUFRLENBQUMsR0FBRyxZQUFrQyxFQUFlLEVBQUUsQ0FDaEUsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTdGLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUE0RCxFQUFFLEVBQUU7UUFDeEUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDeEIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDM0IsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUosQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLFlBQW1GLEVBQUUsRUFBRTtRQUM3RixDQUFDLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN6QixDQUFDLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUMzQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFSixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBK0IsRUFBRSxFQUFFO1FBQ3hDLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUEwQixFQUFFLEVBQUU7UUFDL0IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUosT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBRSxJQUFZO0lBRXBDLElBQUksQ0FBQyxHQUFRLENBQUMsR0FBRyxZQUFrQyxFQUFlLEVBQUUsQ0FDaEUsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsRixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFO1FBQzdCLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUEwQixFQUFFLEVBQUU7UUFDL0IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDakIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUosT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBSUQsU0FBUyxzQkFBc0IsQ0FBRSxJQUFZLEVBQUUsWUFBa0MsRUFDN0UsS0FBdUI7SUFFdkIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksS0FBSyxFQUNUO1FBQ0ksV0FBVyxHQUFHLG1CQUFPLENBQUUsS0FBSyxFQUFFO1lBQzFCLFVBQVUsRUFBRSx3QkFBWSxDQUFDLFdBQVc7WUFDcEMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztTQUNuRCxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLEdBQUcsSUFBSSxJQUFJLFdBQVcsR0FBRyw0QkFBNEIsQ0FBRSxZQUFZLEVBQUUsMEJBQWMsQ0FBQyxHQUFHLENBQUM7QUFDbkcsQ0FBQztBQUlELFNBQVMsc0JBQXNCLENBQUUsSUFBWSxFQUFFLFlBQWtDLEVBQzdFLEtBQTBCLEVBQUUsWUFBMEQsRUFDdEYsR0FBZ0I7SUFFaEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyQyxJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMseUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sbUJBQU8sQ0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakQsSUFBSSxZQUFZLEdBQUcsS0FBSyxJQUFJLGtCQUFrQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLElBQUksa0JBQWtCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsSCxPQUFPLEdBQUcsSUFBSSxJQUFJLFlBQVksR0FBRyw0QkFBNEIsQ0FBRSxZQUFZLEVBQUUsMEJBQWMsQ0FBQyxHQUFHLENBQUM7QUFDcEcsQ0FBQztBQUlELFNBQVMscUJBQXFCLENBQUUsSUFBWSxFQUFFLFlBQWtDLEVBQzVFLEtBQTBCLEVBQUUsR0FBMkI7SUFFdkQsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLHdCQUFZLENBQUMsYUFBYSxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sbUJBQU8sQ0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakQsSUFBSSxZQUFZLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxPQUFPLEdBQUcsSUFBSSxJQUFJLFlBQVksR0FBRyw0QkFBNEIsQ0FBRSxZQUFZLEVBQUUsd0JBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEcsQ0FBQztBQUlELFNBQVMsaUJBQWlCLENBQUUsSUFBc0I7SUFFOUMsSUFBSSxZQUFZLEdBQUcsbUJBQU8sQ0FBRSxJQUFJLEVBQUU7UUFDOUIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxNQUFNLEVBQUUsR0FBRztLQUNkLENBQUM7SUFFRixPQUFPLGNBQWMsWUFBWSxHQUFHLENBQUM7QUFDekMsQ0FBQztBQUlELFNBQVMsNEJBQTRCLENBQW9CLEdBQXlCLEVBQzlFLFNBQWtDO0lBRWxDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBSUQsU0FBUywwQkFBMEIsQ0FBb0IsR0FBdUIsRUFDMUUsU0FBa0M7SUFFbEMsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsMEJBQWE7UUFDekIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSw4QkFBOEIsQ0FBRSxDQUEyQixFQUFFLFNBQVMsQ0FBQztLQUMxRixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyw4QkFBOEIsQ0FBb0IsR0FBMkIsRUFDbEYsU0FBa0M7SUFFbEMsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RSxPQUFPLEdBQUcsMEJBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ3hGLENBQUM7QUFJRCxTQUFTLHNCQUFzQixDQUFFLEdBQW1CO0lBRWhELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLDBCQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQzNFLENBQUMsQ0FBQztBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTkQsOEZBSTRCO0FBQzVCLDBHQUFxRztBQU1yRyxpR0FBaUY7QUFDakYsMEdBQW9EO0FBQ3BELHdGQUF3QztBQUN4Qyx1R0FBa0Q7QUFDbEQsOEZBQThEO0FBQzlELDhGQUFvRjtBQUNwRixpR0FBMkQ7QUFDM0QsZ0dBQTRDO0FBSzVDOzs7R0FHRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxLQUF1QjtJQUVqRCxPQUFPLElBQUkseUJBQVksQ0FBRSxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBSEQsOEJBR0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixNQUFNLENBQUUsS0FBd0IsRUFDL0MsWUFBa0M7SUFFbEMsT0FBTyxJQUFJLHNCQUFTLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFKRCx3QkFJQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxLQUF3QixFQUM1QyxZQUErQjtJQUUvQixPQUFPLElBQUksbUJBQU0sQ0FBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUpELGtCQUlDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsUUFBcUIsRUFBRSxLQUF1QjtJQUVyRSxPQUFPLElBQUkseUJBQVksQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHdCQUdDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLE1BQXlCLEVBQ3BELFlBQXNDO0lBRXRDLE9BQU8sSUFBSSw2QkFBYSxDQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSkQsZ0NBSUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsSUFBSSxDQUE2QixRQUFXLEVBQUUsT0FBeUIsRUFDbkYsWUFBbUM7SUFFdEMsT0FBTyxJQUFJLGlCQUFPLENBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBSkQsb0JBSUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLFlBQW9DO0lBRTdELE9BQU8sSUFBSSwwQkFBVyxDQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIRCw0QkFHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUUsWUFBcUMsRUFDNUQsZ0JBQTBCO0lBRTdCLE9BQU8sSUFBSSx3QkFBWSxDQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFKRCw4QkFJQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUUsWUFBcUM7SUFFL0QsT0FBTyxJQUFJLHdCQUFZLENBQUUsWUFBWSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUhELDhCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsR0FBVyxFQUFFLFVBQWdDLEVBQ3JFLGFBQXNDO0lBRXRDLE9BQU8sSUFBSSxzQkFBVSxDQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUpELDBCQUlDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsUUFBbUI7SUFFN0MsT0FBTyxJQUFJLHdCQUFZLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUhELDhCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsU0FBaUIsRUFBRSxNQUFlO0lBRTdELE9BQU8sSUFBSSx5QkFBYSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsZ0NBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxXQUE2QixFQUFFLEtBQWdCO0lBRXJFLE9BQU8sSUFBSSxvQkFBUSxDQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBSEQsc0JBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBNkIsS0FBb0IsRUFDdEUsV0FBeUM7SUFFNUMsT0FBTyxJQUFJLHlCQUFZLENBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFKRCw4QkFJQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUE2QixLQUEwQixFQUN6RSxXQUF5QztJQUU1QyxPQUFPLElBQUksc0JBQVMsQ0FBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUpELHdCQUlDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixJQUFJLENBQTZCLFdBQXlDO0lBRXpGLE9BQU8sc0NBQXNCLENBQUUsV0FBVyxDQUFNLENBQUM7QUFDbEQsQ0FBQztBQUhELG9CQUdDO0FBSUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLE1BQU0sQ0FBNkIsV0FBeUM7SUFFM0YsOEZBQThGO0lBQzlGLDRDQUE0QztJQUM1QyxPQUFPLFdBQVcsWUFBWSwyQkFBZSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUM7QUFDakYsQ0FBQztBQUxELHdCQUtDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsTUFBZSxFQUFFLE1BQWU7SUFFakUsT0FBTyxrQ0FBa0IsQ0FBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUhELDRDQUdDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxHQUFHLE9BQTBDO0lBRXJFLE9BQU8sbUJBQU8sQ0FBRSxPQUFPLEVBQUU7UUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLHNCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzlELENBQUMsQ0FBQztBQUNKLENBQUM7QUFMRCwwQkFLQztBQXdCRDs7OztHQUlHO0FBQ0gsU0FBZ0IsbUJBQW1CO0lBRS9CLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBSEQsa0RBR0M7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLElBQTZDLEVBQ3pFLEdBQUcsSUFBaUQ7SUFFcEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNyQyxVQUFVLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUvRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBVEQsd0NBU0M7QUFJRDs7OztHQUlHO0FBQ0gsTUFBTSxhQUFhO0lBQW5CO1FBd0JJLGdHQUFnRztRQUNoRyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFDM0MsQ0FBQztJQXhCRzs7T0FFRztJQUNJLEdBQUcsQ0FBRSxXQUFvRDtRQUU1RCxJQUFJLFFBQVEsR0FBRyxzQ0FBc0IsQ0FBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxPQUFPO1FBRVgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUVaLElBQUksR0FBRyxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ2hELENBQUM7Q0FJSjtBQUlEOzs7O0dBSUc7QUFDSCxNQUFNLHdCQUF3QjtJQUE5QjtRQXFCSSx1REFBdUQ7UUFDaEQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFeEIsMkRBQTJEO1FBQ3BELG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRTNCLGtGQUFrRjtRQUMxRSxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFDbkQsQ0FBQztJQTNCRyxpQkFBaUI7SUFDVixXQUFXLENBQUUsQ0FBUyxFQUFFLGNBQXdCO1FBRW5ELElBQUksY0FBYztZQUNkLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzs7WUFFN0IsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpQkFBaUI7SUFDVixrQkFBa0IsQ0FBRSxRQUF5QjtRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLEVBQ2xDO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUIsaUNBQWlCLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztDQVVKOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFdELDBHQUE4RDtBQUM5RCxpR0FHNkI7QUFJN0I7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsUUFBUSxDQUN2QixlQUE2QyxFQUM3QyxhQUFzQjtJQUV0QixJQUFJLFFBQVEsR0FBRyxzQ0FBc0IsQ0FBRSxlQUFlLENBQU0sQ0FBQztJQUM3RCxJQUFJLFFBQVE7UUFDWCwyQkFBYyxDQUFFLENBQUMsU0FBcUIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBRSxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUUxRixPQUFPLFFBQVEsQ0FBQztBQUNqQixDQUFDO0FBVEQsNEJBU0M7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLFFBQXlCLEVBQUUsYUFBc0I7SUFFNUUsMkJBQWMsQ0FBRSxDQUFDLFNBQXFCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUUsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDNUYsQ0FBQztBQUhELGdDQUdDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLGFBQXNCO0lBRXJELDJCQUFjLENBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDdkYsQ0FBQztBQUhELHdDQUdDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsZUFBZSxDQUFFLGFBQXNCO0lBRXRELDJCQUFjLENBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEYsQ0FBQztBQUhELDBDQUdDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQix1QkFBdUIsQ0FBRSxhQUFxQjtJQUU3RCxPQUFPLHNDQUF5QixDQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFIRCwwREFHQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLHVCQUF1QjtJQUV0QyxPQUFPLHNDQUF5QixFQUFFLENBQUM7QUFDcEMsQ0FBQztBQUhELDBEQUdDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUUsU0FBcUI7SUFFcEQsT0FBTyxnQ0FBbUIsQ0FBRSxTQUFTLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsOENBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLG1CQUFtQixDQUFFLEVBQVU7SUFFM0MsT0FBTyxrQ0FBcUIsQ0FBRSxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBSEQsa0RBR0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0QsbUdBRTZCO0FBQzdCLGdHQUc2QjtBQUM3QixpR0FBa0U7QUFJbEU7OztHQUdHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLEtBQTJCLEVBQUUsR0FBRyxNQUFzQjtJQUUvRSxPQUFPLEdBQUcsRUFBRSxDQUFDLGtDQUFzQixDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBSEQsNEJBR0M7QUFJRCwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLHdCQUF3QjtBQUN4QixFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GOzs7OztHQUtHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQW9DLGFBQWdCLEVBQ3BGLGNBQW1DO0lBRW5DLE9BQU8sOEJBQWlCLENBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBSkQsOENBSUM7QUFJRDs7Ozs7R0FLRztBQUNILFNBQWdCLGVBQWUsQ0FBRSxHQUFnQixFQUFFLFFBQXFDLEVBQ3ZGLGFBQXNCO0lBRW5CLHFCQUFxQixDQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDckcsQ0FBQztBQUpELDBDQUlDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixxQkFBcUIsQ0FBRSxHQUFnQixFQUFFLFFBQTJDLEVBQ25HLGFBQXNCO0lBRW5CLDBDQUE2QixDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBSkQsc0RBSUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0Isd0JBQXdCLENBQUUsUUFBa0I7SUFFM0QsSUFBSSxHQUFHLEdBQW1CLEVBQUUsQ0FBQztJQUU3QixpQ0FBb0IsQ0FBRSxRQUFRLEVBQzdCLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUUvRCxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFSRCw0REFRQztBQUlEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFFLFdBQXFCLEVBQUUsV0FBcUI7SUFFMUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVc7UUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDUixJQUFJLENBQUMsV0FBVztRQUNwQixPQUFPLHdCQUF3QixDQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzFDLElBQUksQ0FBQyxXQUFXO1FBQ3BCLE9BQU8sd0JBQXdCLENBQUUsV0FBVyxDQUFDLENBQUM7SUFFL0Msd0RBQXdEO0lBQ3hELElBQUksaUJBQWlCLEdBQUcsd0JBQXdCLENBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsSUFBSSxpQkFBaUIsR0FBRyx3QkFBd0IsQ0FBRSxXQUFXLENBQUMsQ0FBQztJQUUvRCxJQUFJLFNBQVMsR0FBMEIsSUFBSSxDQUFDO0lBRTVDLDJGQUEyRjtJQUMzRixtQkFBbUI7SUFDbkIsS0FBSyxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsRUFDakM7UUFDQyxJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQ3hCO1lBQ0MsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDNUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUVEO1lBQ0MsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxZQUFZLEtBQUssWUFBWSxFQUNqQztnQkFDQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQzthQUM5QjtTQUNEO0tBQ0Q7SUFFRCwyRkFBMkY7SUFDM0YsaUJBQWlCO0lBQ2pCLEtBQUssSUFBSSxHQUFHLElBQUksaUJBQWlCLEVBQ2pDO1FBQ0MsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxZQUFZLElBQUksSUFBSSxFQUN4QjtZQUNDLFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO1lBQzVCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QztLQUNEO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQztBQWpERCxzQ0FpREM7QUFJRCwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLFVBQVU7QUFDVixFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GLG9GQUFvRjtBQUNwRixTQUFTLGFBQWEsQ0FBRSxJQUFZLEVBQUUsTUFBNEI7SUFFOUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSwwQkFBYyxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ3JFLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxNQUE0QjtJQUVwRCxPQUFPLGFBQWEsQ0FBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixRQUFRLENBQUUsTUFBNEI7SUFFbEQsT0FBTyxhQUFhLENBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFIRCw0QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFFLE1BQTRCO0lBRW5ELE9BQU8sYUFBYSxDQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSEQsOEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxNQUE0QjtJQUVoRCxPQUFPLGFBQWEsQ0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsTUFBNEI7SUFFakQsT0FBTyxhQUFhLENBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFIRCwwQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLE1BQTRCO0lBRWxELE9BQU8sYUFBYSxDQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsNEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxNQUE0QjtJQUUvQyxPQUFPLGFBQWEsQ0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHNCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixJQUFJLENBQUUsTUFBMkI7SUFFN0MsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLHlCQUFhLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDakUsQ0FBQztBQUhELG9CQUdDO0FBSUQ7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixVQUFVLENBQ3RCLENBQXNCLEVBQ3RCLENBQXNCLEVBQ3RCLEtBQTBCLEVBQzFCLElBQTBCLEVBQzFCLE1BQTRCO0lBRS9CLE9BQU8sR0FBRyxFQUFFLENBQUMsZUFBZSx1Q0FBMEIsQ0FBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxHQUFHLENBQUM7QUFDMUYsQ0FBQztBQVJELGdDQVFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsTUFBMEI7SUFFakQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxjQUFjLDBCQUFjLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDeEUsQ0FBQztBQUhELDhCQUdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixlQUFlO0FBQ2YsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxNQUFxQyxFQUFFLE1BQXlDO0lBRXRHLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpQ0FBb0IsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BFLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyx5QkFBYSxDQUFDLGtCQUFrQixDQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNoRixDQUFDO0FBSkQsc0JBSUM7QUFXRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxNQUFvQixFQUFFLFFBQWdDO0lBRTFFLElBQUksQ0FBQyxHQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLG1CQUFPLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLENBQUM7QUFMRCx3QkFLQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEVBQWdCLEVBQUUsRUFBZ0IsRUFDMUQsUUFBZ0M7SUFFN0IsSUFBSSxHQUFHLEdBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxJQUFJLEdBQUcsR0FBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxJQUFJLEdBQUcsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsbUJBQU8sQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9DLENBQUM7QUFQRCwwQkFPQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLFdBQTBDLEVBQ2xFLEdBQUcsTUFBa0I7SUFFckIsT0FBTyxHQUFHLEVBQUU7UUFFWCxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDbkIsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRO1lBQ2xDLENBQUMsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDOztZQUV2QixDQUFDLElBQUksR0FBRyx5QkFBYSxDQUFDLGtCQUFrQixDQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRWhFLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMseUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0UsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNILENBQUM7QUFmRCwwQkFlQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsR0FBRyxDQUFFLEtBQXlCLEVBQUUsSUFBMEMsRUFDekYsT0FBaUI7SUFFakIsT0FBTyxHQUFHLEVBQUU7UUFFWCxJQUFJLFdBQVcsR0FBRyx3QkFBWSxDQUFDLGFBQWEsQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLFVBQVUsR0FBRyxJQUFJLEdBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyx5QkFBYSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlFLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUMsT0FBTyxPQUFPLFdBQVcsR0FBRyxVQUFVLEdBQUcsYUFBYSxHQUFHLENBQUM7SUFDM0QsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQVZELGtCQVVDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixJQUFJLENBQUUsUUFBNkI7SUFFbEQsT0FBTyxJQUFJLFdBQVcsQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsb0JBR0M7QUFJRDs7O0dBR0c7QUFDSCxNQUFNLFdBQVc7SUFJaEIsWUFBb0IsUUFBNkI7UUFFaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDbkIsSUFBSSxRQUFRO1lBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpQ0FBaUM7SUFDMUIsYUFBYSxLQUFjLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBSXhELDZDQUE2QztJQUN4QyxLQUFLLENBQUUsT0FBZSxFQUFFLEdBQUcsS0FBNEI7UUFFOUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBRTFCLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUN0QjtZQUNDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtnQkFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO2lCQUV4QjtnQkFDQyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUk7b0JBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUMzQjtTQUNEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sQ0FBQyxDQUFFLEtBQXNCLEVBQUUsR0FBRyxJQUF1QixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RyxDQUFDLENBQUUsS0FBc0IsRUFBRSxHQUFHLElBQXVCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQyxDQUFFLEtBQXNCLEVBQUUsR0FBRyxJQUF1QixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRHLENBQUMsQ0FBRSxLQUFhLEVBQUUsR0FBRyxJQUFjLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQyxDQUFFLEtBQWEsRUFBRSxHQUFHLElBQWMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRixDQUFDLENBQUUsS0FBYSxFQUFFLEdBQUcsSUFBYyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBRSxLQUFhLEVBQUUsR0FBRyxJQUFjLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEYsQ0FBQyxDQUFFLEtBQWtELEVBQzNELEdBQUcsSUFBbUQsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDLENBQUUsS0FBa0QsRUFDM0QsR0FBRyxJQUFtRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlGLENBQUMsQ0FBRSxLQUFvQyxFQUM3QyxHQUFHLElBQXFDLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQyxDQUFFLEtBQW9DLEVBQzdDLEdBQUcsSUFBcUMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoRixDQUFDLENBQUUsS0FBb0MsRUFDN0MsR0FBRyxJQUFxQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBRSxLQUFvQyxFQUM3QyxHQUFHLElBQXFDLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEYsQ0FBQyxDQUFFLEtBQXNCLEVBQUUsR0FBRyxJQUF1QixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RyxDQUFDLENBQUUsS0FBbUQsRUFDNUQsR0FBRyxJQUFvRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUMsQ0FBRSxLQUFtRCxFQUM1RCxHQUFHLElBQW9ELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0YsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQzdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixhQUFhO0FBQ2IsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFzQixFQUFFLENBQXNCLEVBQUUsQ0FBc0IsRUFDN0YsQ0FBc0IsRUFBRSxFQUF1QixFQUFFLEVBQXVCO0lBRXJFLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxtQkFBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUM3RSxDQUFDO0FBSkQsd0JBSUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLFFBQVEsQ0FDdEIsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDbEcsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDbEcsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDbEcsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUI7SUFHaEcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLG1CQUFPLENBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN6SCxDQUFDO0FBUkQsNEJBUUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxDQUFzQjtJQUUvQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGVBQWUseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNsRSxDQUFDO0FBSEQsa0NBR0M7QUFJRDs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFFLElBQVksRUFBRSxDQUFxQjtJQUVwRCxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLHdCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDN0QsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLENBQXFCO0lBRXpDLE9BQU8sVUFBVSxDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSEQsd0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxDQUFxQjtJQUUxQyxPQUFPLFVBQVUsQ0FBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUhELDBCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsQ0FBcUI7SUFFMUMsT0FBTyxVQUFVLENBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFIRCwwQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLENBQXFCO0lBRTFDLE9BQU8sVUFBVSxDQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSEQsMEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFFBQVEsQ0FDdkIsQ0FBc0IsRUFBRSxDQUFzQixFQUFFLENBQXNCLEVBQ3RFLENBQXFCO0lBRXJCLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLHdCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztBQUNsQyxDQUFDO0FBUEQsNEJBT0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxFQUF1QixFQUFFLEVBQXdCO0lBRXBFLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ3ZILENBQUM7QUFIRCxzQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxTQUFTLENBQUUsSUFBWSxFQUFFLENBQXNCO0lBRXBELE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUkseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM5RCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsQ0FBc0I7SUFFMUMsT0FBTyxTQUFTLENBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx3QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLENBQXNCO0lBRTFDLE9BQU8sU0FBUyxDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsd0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFzQjtJQUUxQyxPQUFPLFNBQVMsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUN4RSxFQUF1QjtJQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUN4RSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDakMsQ0FBQztBQU5ELDBCQU1DO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixJQUFJLENBQUUsRUFBc0IsRUFBRSxFQUF1QjtJQUVqRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsd0JBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNwSCxDQUFDO0FBSEQsb0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxFQUFzQjtJQUV6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsd0JBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUM1RCxDQUFDO0FBSEQsc0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxFQUFzQjtJQUV6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsd0JBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUM1RCxDQUFDO0FBSEQsc0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxDQUFzQixFQUFFLENBQXVCO0lBRXRFLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ3hILENBQUM7QUFIRCw4QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxhQUFhLENBQUUsSUFBWSxFQUFFLENBQXNCO0lBRXhELE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUkseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM5RCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsQ0FBc0I7SUFFOUMsT0FBTyxhQUFhLENBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxnQ0FHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLENBQXNCO0lBRTlDLE9BQU8sYUFBYSxDQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsZ0NBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxDQUFzQjtJQUU5QyxPQUFPLGFBQWEsQ0FBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixXQUFXLENBQUUsQ0FBc0IsRUFBRSxDQUFzQixFQUMxRSxDQUFzQjtJQUV0QixJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0RSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxPQUFPLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDckMsQ0FBQztBQU5ELGtDQU1DO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxJQUF5QjtJQUVqRCxPQUFPLEdBQUcsRUFBRSxDQUFDLGVBQWUseUJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNyRSxDQUFDO0FBSEQsZ0NBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxHQUFrQixFQUFFLEdBQWtCO0lBRTFELElBQUksT0FBTyxHQUFHLEVBQUUsVUFBVSxFQUFFLHlCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLG1CQUFPLENBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLG1CQUFPLENBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDL0UsQ0FBQztBQUpELHdCQUlDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsS0FBc0QsRUFDMUUsR0FBRyxNQUFtQjtJQUV0QixvR0FBb0c7SUFDcEcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLG1CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksbUJBQU8sQ0FBRSxNQUFNLEVBQUUsRUFBRSxXQUFXLEVBQUUsOEJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDckcsQ0FBQztBQUxELHdCQUtDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLElBQUksQ0FBRSxXQUEwQyxFQUM1RCxXQUEyQztJQUUzQyxJQUFJLFFBQVEsR0FBRyxtQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsbUJBQU8sQ0FBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pELE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxRQUFRLElBQUksU0FBUyxFQUFFLENBQUM7QUFDakQsQ0FBQztBQU5ELG9CQU1DOzs7Ozs7Ozs7Ozs7Ozs7O0FDbndCRCxnR0FHNEI7QUFHNUIsbUdBQXVEO0FBSXZEOzs7O0dBSUc7QUFDUSxXQUFHLEdBQW1CLElBQUkseUJBQWEsRUFBRSxDQUFDO0FBSXJEOzs7R0FHRztBQUNRLGVBQU8sR0FBb0IsSUFBSSwwQkFBYyxFQUFFLENBQUM7QUFJM0QsNEJBQTRCO0FBQzVCLFNBQWdCLE9BQU8sQ0FBRSxDQUFTLElBQW1CLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBNUUsMEJBQTRFO0FBSTVFOzs7O0dBSUc7QUFDUSxXQUFHLEdBQW1CLElBQUkseUJBQWEsRUFBRSxDQUFDO0FBSXJELGtEQUFrRDtBQUNsRCxTQUFnQixDQUFDLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQXJFLGNBQXFFO0FBRXJFLHVDQUF1QztBQUN2QyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSwwQ0FBMEM7QUFDMUMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUsbUVBQW1FO0FBQ25FLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLDBFQUEwRTtBQUMxRSxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSx1Q0FBdUM7QUFDdkMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUscUNBQXFDO0FBQ3JDLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBekUsb0JBQXlFO0FBRXpFLDBEQUEwRDtBQUMxRCxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSwwQ0FBMEM7QUFDMUMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUsb0NBQW9DO0FBQ3BDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLHFDQUFxQztBQUNyQyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSxxQ0FBcUM7QUFDckMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkU7c0NBQ3NDO0FBQ3RDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLDBGQUEwRjtBQUMxRixTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RTt1Q0FDdUM7QUFDdkMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUseUZBQXlGO0FBQ3pGLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLHFFQUFxRTtBQUNyRSxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQXpFLGtCQUF5RTtBQUV6RSx3RUFBd0U7QUFDeEUsU0FBZ0IsR0FBRyxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUF6RSxrQkFBeUU7QUFFekUsb0ZBQW9GO0FBQ3BGLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBM0Usb0JBQTJFO0FBRTNFLG1GQUFtRjtBQUNuRixTQUFnQixJQUFJLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQTNFLG9CQUEyRTtBQUUzRSxvQ0FBb0M7QUFDcEMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFHdkU7Ozs7R0FJRztBQUNRLGFBQUssR0FBa0IsSUFBSSx3QkFBWSxFQUFFLENBQUM7QUFJckQscUNBQXFDO0FBQ3JDLFNBQWdCLEdBQUcsQ0FBRSxDQUFTLElBQWlCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFBeEUsa0JBQXdFO0FBRXhFLHFDQUFxQztBQUNyQyxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFpQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQXhFLGtCQUF3RTtBQUV4RSxzQ0FBc0M7QUFDdEMsU0FBZ0IsSUFBSSxDQUFFLENBQVMsSUFBaUIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUExRSxvQkFBMEU7QUFFMUUsbUNBQW1DO0FBQ25DLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQWlCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBMUUsb0JBQTBFO0FBSTFFOzs7O0dBSUc7QUFDUSxZQUFJLEdBQWlCLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBSWxELHlDQUF5QztBQUN6QyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFnQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXJFLGdCQUFxRTtBQUVyRSxvQ0FBb0M7QUFDcEMsU0FBZ0IsQ0FBQyxDQUFFLENBQVMsSUFBZ0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFuRSxjQUFtRTtBQUduRTs7OztHQUlHO0FBQ1Esa0JBQVUsR0FBdUIsSUFBSSw2QkFBaUIsRUFBRSxDQUFDO0FBSXBFLHNDQUFzQztBQUN0QyxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFzQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQTdFLGtCQUE2RTtBQUU3RSx1Q0FBdUM7QUFDdkMsU0FBZ0IsSUFBSSxDQUFFLENBQVMsSUFBc0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUEvRSxvQkFBK0U7QUFFL0UsdUNBQXVDO0FBQ3ZDLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQXNCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBL0Usb0JBQStFO0FBRS9FLG9DQUFvQztBQUNwQyxTQUFnQixDQUFDLENBQUUsQ0FBUyxJQUFzQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQXpFLGNBQXlFO0FBSXpFOzs7O0dBSUc7QUFDUSxpQkFBUyxHQUFzQixJQUFJLDRCQUFnQixFQUFFLENBQUM7QUFJakUsdUNBQXVDO0FBQ3ZDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQXFCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBMUUsZ0JBQTBFO0FBRTFFLDRDQUE0QztBQUM1QyxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFxQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQTVFLGtCQUE0RTtBQUk1RSwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GOzs7Ozs7R0FNRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxLQUEyQixFQUFFLEdBQUcsTUFBYTtJQUU5RCxPQUFPLEdBQUcsRUFBRSxDQUFDLGtDQUFzQixDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBSEQsa0JBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixNQUFNLENBQTZCLE1BQW1CLEVBQUUsUUFBMEI7SUFFOUYsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRO1FBQ2pCLENBQUMsQ0FBQyxTQUFTLE1BQU0sQ0FBQyxJQUFJLElBQUksOEJBQWlCLENBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7UUFDaEYsQ0FBQyxDQUFDLFNBQVMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQ2xDLENBQUM7QUFMRCx3QkFLQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixHQUFHLENBQUUsR0FBK0I7SUFFbkQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLG1CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNyQyxDQUFDO0FBSEQsa0JBR0M7QUFJRDs7Ozs7R0FLRztBQUNILFNBQWdCLElBQUksQ0FBRSxRQUEwQixFQUFFLFVBQXdELEVBQ3pHLFFBQTJCO0lBRXhCLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUMzRyxDQUFDO0FBSkQsb0JBSUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxHQUFRO0lBRTVCLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckMsQ0FBQztBQUhELHdCQUdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixXQUFXO0FBQ1gsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7O0dBR0c7QUFDSCxTQUFnQixPQUFPLENBQUUsVUFBMkMsRUFDbkUsS0FBeUMsRUFDekMsU0FBNEIsRUFBRSxVQUE2QjtJQUUzRCxPQUFPLEdBQUcsRUFBRTtRQUVYLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBTyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFPLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hELE9BQU8sR0FBRyxNQUFNLFlBQVksbUJBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDM0UsQ0FBQztBQUNGLENBQUM7QUFYRCwwQkFXQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLFFBQVEsQ0FBRSxVQUEyQyxFQUNwRSxTQUEyQixFQUFFLEtBQXlDLEVBQ3RFLFNBQTRCLEVBQUUsVUFBNkI7SUFFM0QsT0FBTyxHQUFHLEVBQUU7UUFFWCxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFPLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBTyxDQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEQsT0FBTyxHQUFHLE1BQU0sYUFBYSxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsR0FBRyxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDekYsQ0FBQztBQUNGLENBQUM7QUFaRCw0QkFZQzs7Ozs7Ozs7Ozs7Ozs7QUM5U0QsOEJBQThCOzs7Ozs7Ozs7Ozs7QUFFOUIsa0dBQW1DO0FBQ25DLG9HQUFvQztBQUNwQyxvR0FBb0M7QUFDcEMsb0dBQW9DO0FBQ3BDLDBHQUF1QztBQUN2QyxvR0FBb0M7QUFDcEMsMEdBQXVDO0FBQ3ZDLGdHQUFrQztBQUNsQyx3RkFBOEI7QUFDOUIsMEZBQStCO0FBQy9CLDBGQUErQjtBQUMvQiwwRkFBK0I7QUFDL0Isd0ZBQThCO0FBQzlCLG9HQUFvQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RwQyx3RUFBMkc7QUFDM0csMEZBQXVDO0FBQ3ZDLGdHQUE4QztBQUk5Qzs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLFdBQUk7SUFFdEMsWUFBb0IsTUFBeUIsRUFBRSxZQUFzQztRQUVwRixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksTUFBTTtZQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQWdCO1FBRWxHLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGtCQUFXLENBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEYsS0FBSyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVTtZQUN2QyxZQUFZLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUF3QixDQUFDLENBQUM7UUFDakcsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixPQUFPO1FBRVIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLGNBQWMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLE1BQU0sQ0FBcUIsQ0FBQztRQUU1RixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUEyQixDQUFDO1FBQ3hELEtBQUssSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFDckM7WUFDQyxJQUNBO2dCQUNDLGdCQUFnQixDQUFDLFVBQVUsQ0FBRSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JELElBQUksT0FBTyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckYsSUFBSSxPQUFPO29CQUNWLFNBQVMsQ0FBQyxlQUFlLEdBQUcsT0FBMEIsQ0FBQzthQUN4RDtZQUNELE9BQU0sQ0FBQyxFQUNQO2dCQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Q7SUFDRixDQUFDO0lBR0Qsb0NBQW9DO0lBQzFCLFNBQVMsQ0FBRSxHQUE4QjtRQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsT0FBTztRQUVSLEdBQUcsQ0FBQyxXQUFXLENBQUUsY0FBYyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUU5QyxLQUFLLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQ3BDLEdBQUcsQ0FBQyxXQUFXLENBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFDLEdBQUcsQ0FBQyxXQUFXLENBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUlKLDZGQUE2RjtJQUN0RixhQUFhO1FBRW5CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBMkJEO0FBaEhELHNDQWdIQztBQUlEOztHQUVHO0FBQ0gsTUFBTSxrQkFBbUIsU0FBUSxzQkFBUztJQUV6QyxZQUFvQixRQUEyQixFQUFFLFFBQTRCO1FBRTVFLEtBQUssQ0FBRSxRQUFRLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLFdBQVc7UUFFakIsT0FBTyxJQUFJLGtCQUFrQixDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsK0NBQStDO0lBQ3hDLGlCQUFpQjtRQUV2QixPQUFPLG1CQUFPLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM5QixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUN4QixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBTyxDQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUMzRCxNQUFNLEVBQUUsR0FBRztTQUNYLENBQUM7SUFDSCxDQUFDO0NBT0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkQsd0VBQXFGO0FBSXJGOzs7OztHQUtHO0FBQ0gsTUFBYSxXQUFZLFNBQVEsZUFBUTtJQUV4QyxZQUFvQixZQUFvQztRQUVqRCxLQUFLLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUF1QjtRQUVuRyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQVcsQ0FBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksV0FBVyxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsa0dBQWtHO0lBQ2xHLDhCQUE4QjtJQUNwQixhQUFhO1FBRXRCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNmLENBQUM7SUFXSiwwQkFBMEI7SUFDMUIsSUFBVyxXQUFXLEtBQWEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztDQUt0RDtBQWpERCxrQ0FpREM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREQsd0VBQXFGO0FBSXJGOzs7R0FHRztBQUNILE1BQWEsWUFBYSxTQUFRLGVBQVE7SUFFdEMsMEZBQTBGO0lBQzFGLCtGQUErRjtJQUMvRixVQUFVO0lBQ1YsWUFBb0IsWUFBcUQsRUFBRSxnQkFBMEI7UUFFakcsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEQsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRW5HLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUksWUFBWSxZQUFZLFlBQVksRUFDeEM7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7U0FDekM7YUFDSSxJQUFJLFlBQVksWUFBWSxZQUFZLEVBQzdDO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztTQUNyQzthQUVEO1lBQ0ksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQVcsQ0FBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV4RSx3RkFBd0Y7WUFDeEYsMEZBQTBGO1lBQzFGLG9GQUFvRjtZQUNwRiwwRkFBMEY7WUFDMUYsd0ZBQXdGO1lBQ3hGLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksWUFBWSxFQUNoQjtnQkFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUU7aUJBQ0ksSUFBSSxVQUFVLEVBQ25CO2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxRTtpQkFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQ3ZDO2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7YUFDekI7aUJBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxFQUN4QztnQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO2FBQ3ZCO1NBQ0o7SUFDUixDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksWUFBWSxDQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlELGtHQUFrRztJQUNsRywyQkFBMkI7SUFDakIsYUFBYTtRQUV0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0NBMkJKO0FBM0dELG9DQTJHQztBQUlEOzs7R0FHRztBQUNILE1BQWEsWUFBYSxTQUFRLGVBQVE7SUFFdEMsMEZBQTBGO0lBQzFGLCtGQUErRjtJQUMvRixVQUFVO0lBQ1YsWUFBb0IsWUFBcUM7UUFFckQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUVqQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRW5HLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBVyxDQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXhFLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFlBQVksQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUlELGtHQUFrRztJQUNsRywyQkFBMkI7SUFDakIsYUFBYTtRQUV0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0NBb0JKO0FBaEVELG9DQWdFQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNMRCxtR0FBZ0Y7QUFDaEYsd0VBQThGO0FBQzlGLG1HQUEyRDtBQUczRCxtR0FBd0Q7QUFJeEQ7O0dBRUc7QUFDSCxNQUFzQixTQUFxQyxTQUFRLFdBQUk7SUFFdEUsWUFBb0IsZUFBNkM7UUFFaEUsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF5QixFQUFFLGNBQXNDLEVBQUUsUUFBZ0I7UUFFbEcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLG1GQUFtRjtRQUNuRiw0QkFBNEI7UUFDbEMsSUFBSSxRQUFRLEdBQUcsc0NBQXNCLENBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRO1lBQ1osT0FBTztRQUVSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsd0NBQXdCLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ3RCLE9BQU87UUFFUixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUTtZQUNaLE9BQU87UUFFUixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQUksQ0FBQyxZQUFZLENBQUUsR0FBRyxRQUFRLEtBQUssRUFBRSxNQUFNLENBQW9CLENBQUM7UUFFL0UsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU87WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlELG9DQUFvQztJQUMxQixTQUFTLENBQUUsR0FBOEI7UUFFbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ3RCLE9BQU87UUFFUixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUTtZQUNaLE9BQU87UUFFUixHQUFHLENBQUMsV0FBVyxDQUFFLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUVsQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUUsR0FBRyxDQUFDLENBQUM7UUFFeEMsR0FBRyxDQUFDLFdBQVcsQ0FBRSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBU0osNkJBQTZCO0lBQ3RCLEtBQUs7UUFFWCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFJRCxxRkFBcUY7SUFDckYsSUFBVyxLQUFLLEtBQVEsT0FBTyxJQUFJLENBQUMsUUFBYSxDQUFDLENBQUMsQ0FBQztDQWFwRDtBQWpHRCw4QkFpR0M7QUFJRDs7R0FFRztBQUNILE1BQWEsWUFBd0MsU0FBUSxTQUFZO0lBRXhFLFlBQW9CLEtBQW9CLEVBQUUsZUFBNkM7UUFFdEYsS0FBSyxDQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxZQUFZLENBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUlELHFEQUFxRDtJQUMzQyxvQkFBb0I7UUFFN0IsdUNBQXVDO1FBQ3ZDLElBQUksV0FBVyxHQUFHLGtDQUFxQixDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRCxtRkFBbUY7UUFDbkYsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkUsQ0FBQztJQUlELG9FQUFvRTtJQUNqRSxJQUFXLFdBQVc7UUFFbEIsT0FBUSxHQUFHLENBQUMsUUFBUSxDQUFFLGtDQUFxQixDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FPSjtBQTFDRCxvQ0EwQ0M7QUFJRDs7R0FFRztBQUNILE1BQWEsU0FBcUMsU0FBUSxTQUFZO0lBRXJFLFlBQW9CLEtBQTBCLEVBQUUsZUFBNkM7UUFFNUYsS0FBSyxDQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxTQUFTLENBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUlELHFEQUFxRDtJQUMzQyxvQkFBb0I7UUFFN0IsT0FBTyxVQUFVLCtCQUFrQixDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3BELENBQUM7Q0FTRDtBQWhDRCw4QkFnQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUQsNEdBQXdEO0FBQ3hELHdFQUF1RDtBQUd2RCxtR0FBMkQ7QUFDM0QsbUdBQXdEO0FBQ3hELDBGQUF1QztBQUt2Qzs7R0FFRztBQUNILE1BQWUsUUFBNEIsU0FBUSxXQUFJO0lBRXRELFlBQW9CLGNBQXdCO1FBRTNDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUVELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLENBQU0sQ0FBQztJQUNwRSxDQUFDO0lBRUQsb0NBQW9DO0lBQzFCLFNBQVMsQ0FBRSxHQUE4QjtRQUVsRCxHQUFHLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQVdKO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxRQUF1QjtJQUV0RCxZQUFvQixHQUFXLEVBQUUsVUFBZ0MsRUFBRSxhQUFzQztRQUVsRywyQkFBMkI7UUFDakMsS0FBSyxDQUFFLElBQUksQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksVUFBVSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELG9DQUFvQztJQUN2QixXQUFXO1FBRXZCLElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3RGLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOztZQUVmLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUUxQixJQUFJLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQ0FBcUIsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEcsSUFBSSxtQkFBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBRSxVQUFVLENBQUM7WUFDbkUsbUJBQW1CLEdBQUcsYUFBYSxtQkFBbUIsSUFBSSxDQUFDO1FBRS9ELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLCtCQUFrQixDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRixPQUFPLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDakUsQ0FBQztDQVVKO0FBM0NELGdDQTJDQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsUUFBMEI7SUFFNUQsWUFBb0IsU0FBaUIsRUFBRSxNQUFlO1FBRS9DLDJCQUEyQjtRQUNqQyxLQUFLLENBQUUsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksYUFBYSxDQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxvQ0FBb0M7SUFDdkIsV0FBVztRQUV2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUM7UUFDekYsT0FBTyxjQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0NBUUo7QUE5QkQsc0NBOEJDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFlBQWEsU0FBUSxRQUF5QjtJQUUxRCxZQUFvQixRQUFtQjtRQUV0QyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxZQUFZLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxvQ0FBb0M7SUFDdkIsV0FBVztRQUV2QixPQUFPLGNBQWMsZ0NBQWdCLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQztDQUlKO0FBdkJELG9DQXVCQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsc0JBQVM7SUFFdEMsWUFBb0IsV0FBNkIsRUFBRSxLQUFnQjtRQUVsRSxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLFdBQVc7UUFFakIsT0FBTyxJQUFJLFFBQVEsQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzVELENBQUM7Q0FPRDtBQXpCRCw0QkF5QkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUQ7Ozs7R0FJRztBQUNILE1BQXNCLFFBQVE7SUFFN0Isc0JBQXNCO0lBQ2YsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUF1QjtRQUVuRyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0NBY0Q7QUF0QkQsNEJBc0JDO0FBSUQ7Ozs7R0FJRztBQUNILE1BQXNCLElBQUssU0FBUSxRQUFRO0lBUzFDLDZGQUE2RjtJQUM3RixxQ0FBcUM7SUFDOUIsS0FBSyxLQUFXLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQU83QyxtRUFBbUU7SUFDNUQsTUFBTSxDQUFDLFlBQVksQ0FBRSxRQUFnQixFQUFFLE1BQXVDO1FBRXBGLElBQ0E7WUFDQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sQ0FBQyxFQUNSO1lBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSx3QkFBd0IsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDO0NBT0Q7QUF0Q0Qsb0JBc0NDO0FBSUQseURBQXlEO0FBQ3pELFNBQWdCLFdBQVcsQ0FBRSxjQUFzQyxFQUFFLFFBQXVCLEVBQUUsWUFBb0MsRUFDakksU0FBa0I7SUFFbEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFlBQVk7UUFDN0IsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVqQixJQUFJLElBQUksR0FBRyxDQUFDLFlBQVk7UUFDdkIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBRSxRQUFTLENBQUM7UUFDOUMsQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFFBQVE7WUFDakMsQ0FBQyxDQUFDLFlBQVk7WUFDZCxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUV0QixPQUFPLENBQUMsU0FBUztRQUNoQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUUsU0FBUyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFqQkQsa0NBaUJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEpELHVGQUFrRTtBQUNsRSx3RUFBd0Y7QUFDeEYsaUZBQWlDO0FBQ2pDLHVGQUFxRDtBQUNyRCwwRkFBMkQ7QUFJM0QseUZBQXlGO0FBQ3pGLDREQUE0RDtBQUU1RCxnRkFBZ0Y7QUFDaEYsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDOzs7R0FHRztBQUNILE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUl6Qzs7Ozs7O0dBTUc7QUFDSCxNQUFNLGFBQWE7SUFFbEIsWUFBYSxRQUF5QixFQUFFLElBQVksRUFBRSxrQkFBa0M7UUFFdkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBRXZDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLFdBQW9DLENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUU3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLHdDQUF3QztJQUNoQyxPQUFPO1FBRWQscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRW5DLDJEQUEyRDtRQUNyRCxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQ2IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkQsNEVBQTRFO1FBQzVFLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsc0VBQXNFO1FBQ3RFLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVE7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFJRCw2RkFBNkY7SUFDN0Ysd0NBQXdDO0lBQ2hDLGVBQWUsQ0FBRSxRQUF1QixFQUFFLE9BQVk7UUFFN0QsSUFBSSxPQUFPLFlBQVksMkJBQWU7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFFLE9BQU8sQ0FBQzthQUMzQixJQUFJLE9BQU8sWUFBWSxpQkFBTztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDbkMsSUFBSSxPQUFPLFlBQVksV0FBSTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNqQyxJQUFJLE9BQU8sWUFBWSxlQUFRO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUNwQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUUsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFJRCxnRkFBZ0Y7SUFDeEUsZ0JBQWdCLENBQUUsR0FBb0I7UUFFN0MscUZBQXFGO1FBQ3JGLHdGQUF3RjtRQUN4RixxQkFBcUI7UUFDckIsZUFBZSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBSUQsaUNBQWlDO0lBQ3pCLGNBQWMsQ0FBRSxRQUF1QixFQUFFLE1BQWU7UUFFL0QsOEVBQThFO1FBQzlFLHdDQUF3QztRQUN4QyxJQUFJLE1BQU0sQ0FBQyxTQUFTO1lBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFekIsTUFBTSxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFJRCw0QkFBNEI7SUFDcEIsZUFBZSxDQUFFLFFBQXVCLEVBQUUsUUFBa0I7UUFFbkUsOEVBQThFO1FBQzlFLHdDQUF3QztRQUN4QyxJQUFJLFFBQVEsQ0FBQyxTQUFTO1lBQ1osUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoQyxRQUFRLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUlELDJDQUEyQztJQUNuQyxXQUFXLENBQUUsUUFBdUIsRUFBRSxJQUFVO1FBRXZELHlGQUF5RjtRQUN6RiwwQ0FBMEM7UUFDMUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN2QjtZQUNDLElBQUksUUFBUTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBRS9DO2dCQUNDLCtDQUErQztnQkFDL0MsT0FBTzthQUNQO1NBQ0Q7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFdEQsSUFBSSxJQUFJLFlBQVksc0JBQVU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7YUFDckIsSUFBSSxJQUFJLFlBQVkseUJBQWE7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7O1lBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFJRCx3Q0FBd0M7SUFDaEMsWUFBWSxDQUFFLFFBQWU7UUFFcEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDckMsT0FBTztRQUVSLHNGQUFzRjtRQUN0RixLQUFLLElBQUksT0FBTyxJQUFJLFFBQVE7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxxQkFBcUI7UUFFM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFJRCx1RUFBdUU7SUFDaEUsaUJBQWlCLENBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxTQUFtQixFQUFFLGFBQXNCO1FBRWpHLElBQUksSUFBSSxDQUFDLHFCQUFxQjtZQUNwQiwwQ0FBNkIsQ0FBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUlEOzs7T0FHRztJQUNJLGlCQUFpQixDQUFFLFFBQWdCO1FBRXpDLG9GQUFvRjtRQUNwRixzRkFBc0Y7UUFDdEYsc0ZBQXNGO1FBQ3RGLHVGQUF1RjtRQUN2Riw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFFBQVE7WUFDWixPQUFPLGtCQUFrQixFQUFFLENBQUM7YUFDeEIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDdEUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUVyQztZQUNDLDBGQUEwRjtZQUMxRixrRUFBa0U7WUFDbEUsSUFBSSxZQUFZLEdBQUcsK0JBQStCLENBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRixPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4RTtJQUNGLENBQUM7SUFJRCw4RkFBOEY7SUFDdkYsV0FBVyxDQUFFLE1BQXVDO1FBRTFELHNHQUFzRztRQUN0Ryx5REFBeUQ7UUFDekQsSUFBSSxNQUFNLFlBQVksYUFBYSxFQUNuQztZQUNDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELHdDQUF3QztRQUN4QyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQ3hCLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5QiwrQ0FBK0M7UUFDL0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3hCO1lBQ0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFdBQUksQ0FBQyxZQUFZLENBQUUsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUNqRixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFpQixDQUFDO1NBQ3JGO1FBRUQseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsVUFBVTtRQUVWLG9GQUFvRjtRQUMxRixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ25CO1lBQ0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUUvQyxrQ0FBa0M7UUFDbEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUN4QixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUlELHdDQUF3QztJQUNqQyxRQUFRO1FBRWQsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLEVBQ25DO1lBQ0MsaUZBQWlGO1lBQ2pGLElBQUksSUFBSSxDQUFDLGtCQUFrQjtnQkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2lCQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ3hCO2dCQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzdDOztnQkFFQSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7WUFFdkQsSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsV0FBWSxDQUFDLEtBQXNCLENBQUMsQ0FBQztTQUM1RDtJQUNGLENBQUM7SUFJRCx3Q0FBd0M7SUFDakMsVUFBVTtRQUVoQixvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQztZQUNoQyxPQUFPO1FBRVIsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLEVBQ25DO1lBQ0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRWxCLG1FQUFtRTtZQUNuRSxJQUFJLElBQUksQ0FBQyxVQUFVO2dCQUNsQixJQUFJLENBQUMsV0FBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztJQUlELHdEQUF3RDtJQUNqRCxjQUFjLENBQUUsR0FBOEI7UUFFcEQsc0dBQXNHO1FBQ3RHLHlEQUF5RDtRQUN6RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ25CO1lBQ0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsd0NBQXdDO1FBQ2xDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUk7WUFDckIsR0FBRyxDQUFDLGtCQUFrQixDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDeEI7WUFDQyxHQUFHLENBQUMsV0FBVyxDQUFFLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoSDtRQUVELDRCQUE0QjtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSUQsZ0ZBQWdGO0lBQ2hGLElBQVksVUFBVSxLQUFjLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7Q0EyRGhHO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7Ozs7O0dBTUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBRSxNQUFlLEVBQUUsTUFBZTtJQUVuRSxxQkFBcUIsR0FBRyxNQUFNLENBQUM7SUFDL0Isd0JBQXdCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNsRCxDQUFDO0FBSkQsZ0RBSUM7QUFJRDs7O0dBR0c7QUFDSCxJQUFJLHFCQUFxQixHQUFZLElBQUksQ0FBQztBQUUxQyxhQUFhO0FBQ2IscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQzlCLFVBQVU7QUFFVjs7R0FFRztBQUNILElBQUksd0JBQXdCLEdBQUcsR0FBRyxDQUFDO0FBRW5DLDZEQUE2RDtBQUM3RCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFJdkI7O0dBRUc7QUFDSCxTQUFTLFlBQVksQ0FBRSxTQUFpQixFQUFFLFFBQWdCO0lBRXpELE9BQU8scUJBQXFCO1FBQzNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBRSx3QkFBd0IsQ0FBQztRQUMvQyxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksUUFBUSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsa0JBQWtCLENBQUUsTUFBZTtJQUUzQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUM7QUFDeEUsQ0FBQztBQUlELCtGQUErRjtBQUMvRix3RkFBd0Y7QUFDeEYsU0FBUywrQkFBK0IsQ0FBRSxlQUFzQyxFQUFFLFFBQWdCO0lBRWpHLElBQUksQ0FBQyxlQUFlO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBRWIsdUJBQXVCO0lBQ3BCLEtBQUssSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBRSxlQUFlLENBQUMsRUFDcEQsU0FBUyxLQUFLLDJCQUFlLEVBQ3pCLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFFLFNBQVMsQ0FBQyxFQUM1RDtRQUNDLG9GQUFvRjtRQUNwRixvRkFBb0Y7UUFDcEYsOEJBQThCO1FBQzlCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFDekM7WUFDQyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxNQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDbkUsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0tBQ0Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLHNCQUFzQixDQUFFLFdBQW9ELEVBQzNGLE1BQXdCO0lBRXhCLElBQUksQ0FBQyxXQUFXO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFFYixxRkFBcUY7SUFDckYsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQ25DO1FBQ0MsZUFBZSxDQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sV0FBVyxDQUFDO0tBQ25CO1NBRUQ7UUFDQyw2RUFBNkU7UUFDN0UsT0FBTyxXQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUM3QyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUMxQixDQUFDLENBQUMsWUFBWSxDQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN0QztBQUNGLENBQUM7QUFuQkQsd0RBbUJDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxZQUFZLENBQUUsZUFBc0MsRUFDNUQsTUFBd0I7SUFFckIsMEZBQTBGO0lBQzFGLDhGQUE4RjtJQUM5RixrRkFBa0Y7SUFDbEYsS0FBSyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFFLGVBQWUsQ0FBQyxFQUNwRCxTQUFTLEtBQUssMkJBQWUsRUFDekIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUUsU0FBUyxDQUFDLEVBQ3pEO1FBQ0YsWUFBWSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM5QjtJQUVKLElBQ0E7UUFDQyw4Q0FBOEM7UUFDOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUMsaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxHQUFHLHFCQUFxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUk7WUFDeEQsQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQ3RCLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhCLElBQUksYUFBYSxDQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLE9BQU8sUUFBUSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxHQUFHLEVBQ1Y7UUFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLCtDQUErQyxlQUFlLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUYsT0FBTyxJQUFJLENBQUM7S0FDWjtBQUNGLENBQUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBUyxlQUFlLENBQUUsUUFBeUIsRUFBRSxrQkFBa0M7SUFFdEYsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztJQUNoQyxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFrQixDQUFDO0lBQzVELElBQUksYUFBYTtRQUNoQixPQUFPO0lBRVIsaUNBQWlDO0lBQ2pDLElBQUksSUFBSSxHQUFHLGtCQUFrQixFQUFFLENBQUM7SUFDaEMsSUFBSSxDQUFDLHFCQUFxQixFQUMxQjtRQUNDLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxlQUFlLENBQUMsSUFBSTtZQUN2QixJQUFJLElBQUksR0FBRyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7S0FDcEM7SUFFRCx5RkFBeUY7SUFDekYsYUFBYTtJQUNiLElBQUksYUFBYSxDQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQix3QkFBd0IsQ0FBRSxRQUF5QjtJQUVsRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDakQsQ0FBQztBQUhELDREQUdDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsUUFBeUIsRUFBRSxLQUFhO0lBRXpFLElBQUksYUFBYSxHQUFHLHdCQUF3QixDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELElBQUksYUFBYSxFQUNqQjtRQUNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzdCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQjtBQUNGLENBQUM7QUFSRCw0Q0FRQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBRSxRQUF5QixFQUFFLEtBQWE7SUFFM0UsSUFBSSxhQUFhLEdBQUcsd0JBQXdCLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsSUFBSSxhQUFhLEVBQ2pCO1FBQ0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDN0IsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQzVCO0FBQ0YsQ0FBQztBQVJELGdEQVFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixpQkFBaUIsQ0FBRSxRQUF5QixFQUFFLEdBQThCO0lBRTNGLElBQUksYUFBYSxHQUFHLHdCQUF3QixDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELElBQUksYUFBYTtRQUNiLGFBQWEsQ0FBQyxjQUFjLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUxELDhDQUtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdFNEOzs7OztHQUtHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBSW5DOzs7OztHQUtHO0FBQ0gsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBSWpDOzs7OztHQUtHO0FBQ0gsTUFBc0IsZUFBZTtJQUVwQzs7Ozs7T0FLRztJQUNILFlBQW9CLE1BQVU7UUFFN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUVuQiw0RUFBNEU7UUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBVyxPQUFPLEtBQW9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5RDs7Ozs7T0FLRztJQUNILElBQVcsTUFBTSxLQUFvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDN0Q7QUE5QkQsMENBOEJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdmFELG1HQUFxRTtBQStDckU7OztHQUdHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBRSxTQUErQyxFQUFFLElBQW1CLEVBQzlGLEtBQXNDLEVBQUUsU0FBbUI7SUFFM0QsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxFQUMxQjtRQUNJLElBQUksU0FBUyxZQUFZLFlBQVk7WUFDakMsU0FBUyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O1lBRXRCLFNBQTRCLENBQUMsZUFBZSxDQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO1NBQ0ksSUFBSSxJQUFJLEVBQ2I7UUFDSSxJQUFJLEtBQUssSUFBSSxJQUFJO1lBQ2IsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLENBQUM7O1lBRXRDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFFLElBQUksRUFBRSxLQUFlLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2pHO1NBRUQ7UUFDSSxJQUFJLFFBQVEsR0FBRyxLQUF1QixDQUFDO1FBQ3ZDLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUTtZQUN6QixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN0RDtBQUNMLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxNQUFNLG9CQUFvQjtJQUV6Qjs7OztPQUlHO0lBQ0ksUUFBUSxDQUFFLFVBQTJCO1FBRTNDLGdDQUFnQixDQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFVBQVUsQ0FBRSxVQUEyQjtRQUU3QyxrQ0FBa0IsQ0FBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLGdCQUFnQixDQUFFLFNBQStDLEVBQUUsSUFBbUIsRUFDekYsS0FBc0MsRUFBRSxTQUFtQjtRQUUzRCxtQkFBbUIsQ0FBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGNBQWMsS0FBVSxDQUFDO0lBRWhDOzs7O09BSUc7SUFDSSxlQUFlLEtBQVUsQ0FBQztDQUNqQztBQXNDRDs7Ozs7O0dBTUc7QUFDSCxNQUFhLG1CQUFtQjtJQWE1QixZQUFhLFNBQXNCO1FBWG5DLDZGQUE2RjtRQUN4RixnQkFBVyxHQUFHLElBQUksR0FBRyxFQUEwQixDQUFDO1FBRXJELG9EQUFvRDtRQUM1QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztRQVMxQyxJQUFJLFNBQVMsRUFDYjtZQUNJLFNBQVMsQ0FBQyxJQUFJLENBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBSUo7O09BRUc7SUFDSSxRQUFRLENBQUUsVUFBMkI7UUFFM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUNuQjtZQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNwRDthQUVEO1lBQ0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUM7SUFDRixDQUFDO0lBSUQ7O09BRUc7SUFDSSxVQUFVLENBQUUsVUFBMkI7UUFFN0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksUUFBUSxLQUFLLENBQUMsRUFDbEI7WUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDaEU7YUFFRDtZQUNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRWxFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQztJQUlEOzs7T0FHRztJQUNPLGdCQUFnQixDQUFFLFNBQStDLEVBQUUsSUFBbUIsRUFDekYsS0FBc0MsRUFBRSxTQUFtQjtRQUVqRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRS9ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSUQ7O09BRUc7SUFDSSxjQUFjO1FBRXBCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdEQ7WUFDVSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVEO0lBQ0YsQ0FBQztJQUlEOzs7T0FHRztJQUNJLGVBQWU7UUFFckIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN0RDtZQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1RDtJQUNGLENBQUM7SUFJRDs7O09BR0c7SUFDSyxXQUFXO1FBRVosd0NBQXdDO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFFLENBQUMsUUFBZ0IsRUFBRSxVQUEyQixFQUFFLEVBQUU7WUFFM0UsSUFBSSxRQUFRLEdBQUcsQ0FBQztnQkFDZixnQ0FBZ0IsQ0FBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7O2dCQUV4QyxrQ0FBa0IsQ0FBRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5CLDBCQUEwQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUlKOzs7T0FHRztJQUNLLGVBQWU7UUFFaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0Q7QUFuSkQsa0RBbUpDO0FBSUQ7O0dBRUc7QUFDSCxNQUFNLHVCQUF1QjtJQUE3QjtRQUVJLHFEQUFxRDtRQUNoRCxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQW9DMUI7O1dBRUc7UUFDSyxxQkFBZ0IsR0FBRyxHQUFTLEVBQUU7WUFFckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDRixDQUFDO0lBdENHOzs7T0FHRztJQUNJLElBQUksQ0FBRSxXQUF1QjtRQUVoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUo7O09BRUc7SUFDTyxpQkFBaUI7UUFFMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDaEUsQ0FBQztJQUVKOztPQUVHO0lBQ08sZUFBZTtRQUV4QixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUMxQjtZQUNDLG9CQUFvQixDQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNDLENBQUM7Q0FXSjtBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsNkJBQTZCLENBQUUsU0FBK0MsRUFDMUYsSUFBbUIsRUFBRSxLQUFzQyxFQUMzRCxTQUFtQixFQUFFLGFBQXNCO0lBRTlDLGNBQWMsQ0FBRSxDQUFDLFNBQXFCLEVBQUUsRUFBRSxDQUN6QyxTQUFTLENBQUMsZ0JBQWdCLENBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDakYsQ0FBQztBQU5ELHNFQU1DO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixjQUFjLENBQUUsSUFBcUMsRUFBRSxhQUFzQjtJQUU1RixJQUFJLFNBQVMsR0FBRyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3JHLElBQUksU0FBUztRQUNmLElBQUksQ0FBRSxTQUFTLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBTEQsd0NBS0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLHlCQUF5QjtJQUV4QyxPQUFPLHNCQUFzQixDQUFDO0FBQy9CLENBQUM7QUFIRCw4REFHQztBQUlEOzs7OztHQUtHO0FBQ0gsU0FBZ0IseUJBQXlCLENBQUUsYUFBcUI7SUFFNUQscUVBQXFFO0lBQ3JFLElBQUksU0FBUyxHQUFHLHNCQUFzQixDQUFDLEdBQUcsQ0FBRSxhQUFhLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUMsU0FBUztRQUNiLE9BQU8sQ0FBQyxDQUFDO0lBRVYsSUFBSSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztJQUM1QyxzQkFBc0IsR0FBRyxhQUFhLENBQUM7SUFDdkMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLE9BQU8saUJBQWlCLENBQUM7QUFDMUIsQ0FBQztBQVhELDhEQVdDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQUUsU0FBcUI7SUFFekQsNkNBQTZDO0lBQzdDLElBQUksRUFBRSxHQUFHLHlCQUF5QixFQUFFLENBQUM7SUFDckMsc0JBQXNCLENBQUMsR0FBRyxDQUFFLEVBQUUsRUFBRSxJQUFJLG1CQUFtQixDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDckUsT0FBTyxFQUFFLENBQUM7QUFDWCxDQUFDO0FBTkQsa0RBTUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLHFCQUFxQixDQUFFLEVBQVU7SUFFaEQsSUFBSSxFQUFFLElBQUksMEJBQTBCLEVBQ3BDO1FBQ0Msc0JBQXNCLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRW5DLDJFQUEyRTtRQUNyRSxJQUFJLHNCQUFzQixLQUFLLEVBQUUsRUFDakM7WUFDSSxzQkFBc0IsZUFBcUIsQ0FBQztZQUM1QyxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQztTQUMvQztLQUNQO0FBQ0YsQ0FBQztBQWJELHNEQWFDO0FBSUQ7OztHQUdHO0FBQ0gsSUFBSSxzQkFBc0IsZUFBNkIsQ0FBQztBQUV4RDs7R0FFRztBQUNILElBQUksc0JBQXNCLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBRXhEOzs7R0FHRztBQUNILElBQUksa0JBQWtCLEdBQWUsc0JBQXNCLENBQUM7QUFFNUQ7OztHQUdHO0FBQ0gsTUFBTSwwQkFBMEIsR0FBVyxJQUFJLENBQUM7QUFFaEQ7O0dBRUc7QUFDSCxJQUFJLHlCQUF5QixHQUFXLDBCQUEwQixDQUFDO0FBSW5FOztHQUVHO0FBQ0gsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQztBQUUxRDs7R0FFRztBQUNILHNCQUFzQixDQUFDLEdBQUcsZUFBc0Isc0JBQXNCLENBQUMsQ0FBQztBQUN4RSxzQkFBc0IsQ0FBQyxHQUFHLHlCQUFnQyxJQUFJLG1CQUFtQixDQUFFLElBQUksdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkgsc0JBQXNCLENBQUMsR0FBRyxpQkFBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6ZjdFLHdFQUE0RztBQUM1RyxtR0FBa0g7QUFDbEgsZ0dBQXlEO0FBQ3pELGlGQUFrQztBQUNsQyw0R0FBK0U7QUFDL0UsMEZBQTJEO0FBSTNEOzs7R0FHRztBQUNILE1BQXNCLFNBQVUsU0FBUSxXQUFJO0lBRTNDLHVGQUF1RjtJQUN2Rix3QkFBd0I7SUFDeEIsWUFBb0IsUUFBbUI7UUFFdEMsS0FBSyxFQUFFLENBQUM7UUF1WFQsNEZBQTRGO1FBQzVGLHFEQUFxRDtRQUM3Qyx5QkFBb0IsR0FBa0IsSUFBSSxDQUFDO1FBdlhsRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUV6QixJQUFJLFFBQVE7WUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUUsUUFBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFJRDs7O09BR0c7SUFDSyxrQkFBa0IsQ0FBRSxhQUErQjtRQUUxRCxvRkFBb0Y7UUFDcEYscUJBQXFCO1FBQ3JCLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUN0QjtZQUNDLG9GQUFvRjtZQUNwRixJQUFJLGNBQWMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUE4QixDQUFDO1lBQ3JFLElBQUksV0FBd0IsQ0FBQztZQUM3QixJQUFJLGNBQWMsWUFBWSxTQUFTO2dCQUN0QyxXQUFXLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Z0JBRS9CLFdBQVcsR0FBRyxjQUFjLENBQUM7WUFFOUIseUVBQXlFO1lBQ3pFLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN6QztnQkFDQyxXQUFXLENBQUMsT0FBTyxDQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUU3QixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUFjLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxzQkFBc0IsQ0FBRSxNQUFNLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDSDtTQUNEO1FBRUQsMkJBQTJCO1FBQzNCLHFDQUF3QixDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFeEQsS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEVBQ2xDO1lBQ0MsdUVBQXVFO1lBQ3ZFLElBQUksUUFBUSxLQUFLLEdBQUcsSUFBSSxRQUFRLEtBQUssSUFBSTtnQkFDeEMsU0FBUztZQUVWLElBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQzVCO2dCQUNDLHlFQUF5RTtnQkFDekUsK0VBQStFO2dCQUMvRSxnRkFBZ0Y7Z0JBQ2hGLG9CQUFvQjtnQkFDcEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUMxQjtvQkFDQyxJQUFJLE1BQU0sR0FBRyxPQUFvQyxDQUFDO29CQUNsRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQjt3QkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FDckUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0Q7O29CQUVBLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxTQUFTLEVBQzNFLE9BQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckM7aUJBQ0ksSUFBSSxRQUFRLEtBQUssR0FBRyxFQUN6QjtnQkFDQyxxRUFBcUU7Z0JBQ3JFLElBQUksTUFBTSxHQUFHLE9BQTRDLENBQUM7Z0JBQzFELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JCO29CQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxDQUNyRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNEO2lCQUNJLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDakM7Z0JBQ0MscUVBQXFFO2dCQUNyRSxJQUFJLE1BQU0sR0FBRyxPQUE0QyxDQUFDO2dCQUMxRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQjtvQkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FDckUsR0FBRyxFQUFFLENBQUMsUUFBUSxHQUFHLGdDQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDM0U7YUFDRDtpQkFDSSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQy9CO2dCQUNDLHFFQUFxRTtnQkFDckUsSUFBSSxNQUFNLEdBQUcsT0FBNEMsQ0FBQztnQkFDMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDckI7b0JBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQ3JFLEdBQUcsRUFBRSxDQUFDLGdDQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzNFO2FBQ0Q7aUJBRUQ7Z0JBQ0MsbUZBQW1GO2dCQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRXpHLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxrRUFBa0U7UUFDbEUsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN4QztZQUNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQXNCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkFFL0YsT0FBeUIsQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RTtJQUNGLENBQUM7SUFJRCxpREFBaUQ7SUFDdkMsUUFBUSxDQUFFLEdBQWM7UUFFakMscUZBQXFGO1FBQ3JGLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUFjLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHNCQUFzQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFJRCx5REFBeUQ7SUFDakQsc0JBQXNCLENBQUUsR0FBYztRQUU3QyxLQUFLLElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQ3ZDO1lBQ0MsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2hEO2dCQUNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHO29CQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFFMUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLFVBQXlCLEVBQUUsRUFBRTtvQkFFOUMsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBbUIsQ0FBQztvQkFDckQsVUFBVSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2FBQ0g7aUJBRUQ7Z0JBQ0MsSUFBSSxVQUFVLEdBQUksT0FBeUIsQ0FBQyxLQUFLLEVBQW1CLENBQUM7Z0JBQ3JFLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUMzQztTQUNEO0lBQ0YsQ0FBQztJQUlELHlEQUF5RDtJQUNsRCxXQUFXO1FBRWpCLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUk7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRELE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEtBQUssNkJBQWdCLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDN0UsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQUksQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sQ0FBaUIsQ0FBQztRQUUvRSw4REFBOEQ7UUFDOUQsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN4QztZQUNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQXNCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXJFLE9BQXlCLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQztJQUlELDZCQUE2QjtJQUN0QixLQUFLO1FBRVgsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsMkNBQTJDO1FBQzNDLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDeEM7WUFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs7Z0JBRTdELE9BQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEM7SUFDRixDQUFDO0lBSUQsb0NBQW9DO0lBQzFCLFNBQVMsQ0FBRSxHQUE4QjtRQUVsRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFdEMsOERBQThEO1FBQzlELEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDeEM7WUFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7O2dCQUVyRSxPQUF5QixDQUFDLFNBQVMsQ0FBRSxHQUFHLENBQUMsQ0FBQztTQUM1QztJQUNDLENBQUM7SUFJSiwrQkFBK0I7SUFDL0IsSUFBVyxZQUFZO1FBRXRCLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUk7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ2xDLENBQUM7SUFJRDs7OztPQUlHO0lBQ0ksYUFBYTtRQUVuQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQWFEOzs7Ozs7O09BT0c7SUFDTyxPQUFPLENBQW9DLElBQU8sRUFBRSxLQUEwQixFQUNqRixTQUFtQixFQUFFLGFBQXNCO1FBRWpELDZEQUE2RDtRQUM3RCxJQUFJLEtBQUssSUFBSSxJQUFJO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFZLENBQUM7UUFFeEUsd0VBQXdFO1FBQ3hFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDVjtZQUNGLDBDQUE2QixDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsdUJBQVcsQ0FBRSxJQUFJLENBQUMsRUFDckQsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4QkFBaUIsQ0FBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMvRjtJQUNSLENBQUM7SUFJRDs7Ozs7OztPQU9HO0lBQ0ksYUFBYSxDQUE2QixNQUFtQixFQUFFLEtBQXNCLEVBQzNGLFNBQW1CLEVBQUUsYUFBc0I7UUFFM0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLGlCQUFPLENBQUM7WUFDMUMsT0FBTztRQUVSLDZEQUE2RDtRQUM3RCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBMEIsQ0FBQztRQUNuRSxJQUFJLGVBQWUsSUFBSSxLQUFLLElBQUksSUFBSSxFQUNwQztZQUNDLElBQUksS0FBSyxJQUFJLElBQUksRUFDakI7Z0JBQ0MsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDOUI7b0JBQ0MsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUNkO3dCQUNDLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDOzRCQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7NEJBRWhDLGVBQWUsQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNuQztpQkFDRDthQUNEO2lCQUVEO2dCQUNDLElBQUksQ0FBQyxlQUFlO29CQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBRTNEO29CQUNDLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7b0JBQ25FLElBQUksS0FBSyxJQUFJLENBQUM7d0JBQ2IsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzs7d0JBRWxDLGVBQWUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDeEM7YUFDRDtTQUNEO1FBRUQsd0VBQXdFO1FBQ3hFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDVjtZQUNJLDBDQUE2QixDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDdkQsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4QkFBaUIsQ0FBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFDdkUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2pDO0lBQ1IsQ0FBQztDQW9CRDtBQWhZRCw4QkFnWUM7QUFJRDs7OztHQUlHO0FBQ0gsTUFBTSxhQUFjLFNBQVEsU0FBUztJQUVwQywyRkFBMkY7SUFDM0YsNEZBQTRGO0lBQzVGLDZGQUE2RjtJQUM3RixRQUFRO0lBQ1IsWUFBb0IsUUFBcUIsRUFBRSxhQUFtQixFQUFFLEtBQXdCLEVBQ3ZGLGNBQTBCO1FBRTFCLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsV0FBVztRQUVqQixPQUFPLElBQUksYUFBYSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFJRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFlLENBQUMsWUFBWSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLGFBQWEsRUFDdEI7WUFDQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBa0IsQ0FBQztZQUN2QyxPQUFPLEdBQUcsY0FBYyxHQUFHLFFBQVEsSUFBSSxvQ0FBb0IsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7U0FDOUY7YUFFRDtZQUNDLDhCQUE4QjtZQUM5QixJQUFJLFFBQVEsR0FBRyxnQ0FBZ0IsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEQsa0ZBQWtGO1lBQ2xGLCtFQUErRTtZQUMvRSwrRUFBK0U7WUFDL0UsNkJBQTZCO1lBQzdCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsR0FBRyxjQUFjLEdBQUcsUUFBUSxFQUFFO2dCQUNoQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDO0NBWUQ7QUFJRDs7O0dBR0c7QUFDSCxNQUFhLFlBQWEsU0FBUSxTQUFTO0lBRTFDLFlBQW9CLEtBQXdCO1FBRTNDLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsV0FBVztRQUVqQixPQUFPLElBQUksWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHlGQUF5RjtJQUN6RixrQkFBa0I7SUFDWCxNQUFNLENBQUUsTUFBdUM7SUFFdEQsQ0FBQztJQUVELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0Q7QUF4QkQsb0NBd0JDO0FBSUQ7OztHQUdHO0FBQ0gsTUFBZSxjQUFlLFNBQVEsU0FBUztJQUU5QyxZQUFvQixLQUF3QixFQUFFLFlBQW9DO1FBRWpGLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUFnQjtRQUVsRyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxrQkFBVyxDQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrRkFBK0Y7SUFDeEYsUUFBUTtRQUVkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBdUJEO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFNBQVUsU0FBUSxjQUFjO0lBRTVDLFlBQW9CLEtBQXdCLEVBQUUsWUFBb0M7UUFFakYsS0FBSyxDQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQTBDO0lBQzFDLElBQVcsWUFBWSxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFMUQscUNBQXFDO0lBQzlCLFdBQVc7UUFFakIsT0FBTyxJQUFJLFNBQVMsQ0FBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw0RkFBNEY7SUFDNUYsYUFBYTtJQUNiLElBQWMsU0FBUyxLQUFhLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNqRDtBQW5CRCw4QkFtQkM7QUFJRDs7R0FFRztBQUNILE1BQWEsTUFBTyxTQUFRLGNBQWM7SUFFekMsWUFBb0IsS0FBd0IsRUFBRSxZQUFvQztRQUVqRixLQUFLLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsSUFBVyxTQUFTLEtBQWEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV2RCxxQ0FBcUM7SUFDOUIsV0FBVztRQUVqQixPQUFPLElBQUksTUFBTSxDQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDRGQUE0RjtJQUM1RixhQUFhO0lBQ2IsSUFBYyxTQUFTLEtBQWEsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ2pEO0FBbkJELHdCQW1CQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsU0FBUztJQUUxQyxZQUFvQixRQUFxQixFQUFFLEtBQXdCO1FBRWxFLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsV0FBVztRQUVqQixPQUFPLElBQUksWUFBWSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0NBQStDO0lBQ3hDLGlCQUFpQjtRQUV2QixPQUFPLG1CQUFPLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FJRDtBQXRCRCxvQ0FzQkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1bkJELG1HQUFzRDtBQUN0RCx3RUFBcUY7QUFJckY7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxPQUF5QyxTQUFRLGVBQVE7SUFFckUsWUFBb0IsUUFBVyxFQUFFLEtBQXVCLEVBQUUsWUFBbUM7UUFFdEYsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF5QixFQUFFLGNBQXNDLEVBQUUsUUFBdUI7UUFFekcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsa0JBQVcsQ0FBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLE9BQU8sQ0FBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFJRCxtQ0FBbUM7SUFDNUIsV0FBVztRQUVqQixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyw4QkFBaUIsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM5RyxDQUFDO0lBSUQsa0dBQWtHO0lBQ2xHLHdDQUF3QztJQUM5QixhQUFhO1FBRXRCLE9BQU8sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUlKOzs7Ozs7T0FNRztJQUNJLFFBQVEsQ0FBRSxLQUFzQixFQUFFLFNBQW1CLEVBQUUsYUFBc0I7UUFFbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUNwQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDhCQUFpQixDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUNyRSxTQUFTLEVBQUUsYUFBYSxDQUFDO0lBQ3BDLENBQUM7Q0ErQkQ7QUF6RkQsMEJBeUZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUdELDJGQUEyRDtBQUMzRCx3RkFBaUQ7QUFLakQ7Ozs7O0dBS0c7QUFDSCxJQUFJLGdCQUFnQixHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO0FBRWhELDJCQUEyQjtBQUMzQixNQUFNLENBQUMsT0FBTyxDQUFFLG1CQUFNLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBRSxDQUFDO0FBSXpGOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBRSxHQUFXO0lBRXJDLDRFQUE0RTtJQUM1RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzdCLElBQUksVUFBVSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7SUFFM0IsMEVBQTBFO0lBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUN4QjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsa0NBQWtDO1FBQ2xDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDVDtJQUVELHdGQUF3RjtJQUN4RixvREFBb0Q7SUFDcEQsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUVwRCxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ0wsd0NBQXdDO1FBQ3hDLG1GQUFtRjtRQUNuRixPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBRXJGO1FBQ0ksdUVBQXVFO1FBQ3ZFLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9EO0FBQ0wsQ0FBQztBQUlEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxTQUFTLGtCQUFrQixDQUFFLENBQVM7SUFFbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUM5QjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ0wsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNyQztTQUVEO1FBQ0ksdUNBQXVDO1FBQ3ZDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDTCxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVoQixPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN2QjtBQUNMLENBQUM7QUFJRDs7Ozs7OztHQU9HO0FBQ0gsU0FBUyxhQUFhLENBQUUsQ0FBVTtJQUU5Qiw2Q0FBNkM7SUFDN0MsSUFBSSxDQUFDLElBQUksSUFBSTtRQUNULE9BQU8sR0FBRyxDQUFDO0lBRWYsd0ZBQXdGO0lBQ3hGLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFWCx5RkFBeUY7SUFDekYsZ0RBQWdEO0lBQ2hELE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVU7SUFFcEUsT0FBTyxRQUFRLGtCQUFrQixDQUFFLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFFLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFFLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3RILENBQUM7QUFIRCxrQ0FHQztBQUlEOzs7Ozs7R0FNRztBQUNILFNBQVMsb0JBQW9CLENBQUUsQ0FBUztJQUVwQywrRUFBK0U7SUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVYLHlGQUF5RjtJQUN6RixrQ0FBa0M7SUFDbEMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUMvRSxDQUFDO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLENBQWtCLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVO0lBRTdFLE9BQU8sUUFBUSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUMvSCxDQUFDO0FBSEQsa0NBR0M7QUFJRDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILFNBQWdCLHNCQUFzQixDQUFFLENBQThCLEVBQUUsQ0FBUztJQUU3RSw4Q0FBOEM7SUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNQLE9BQU8sT0FBTyxDQUFDO0lBRW5CLHlGQUF5RjtJQUN6RixzRUFBc0U7SUFDdEUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDLElBQUksSUFBSTtRQUNULE9BQU8sS0FBSyxDQUFDO0lBRWpCLHdGQUF3RjtJQUN4RixJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRVgseUZBQXlGO0lBQ3pGLHVGQUF1RjtJQUN2RixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRCxxQkFBcUI7SUFDckIsT0FBTyxtQkFBbUIsQ0FBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQXRCRCx3REFzQkM7QUFJRDs7Ozs7R0FLRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxHQUF1QjtJQUVsRCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFFLG1CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxVQUFVLEVBQUUsbUJBQW1CO0tBQ2xDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxzQ0FNQzs7Ozs7Ozs7Ozs7Ozs7QUM1UEQ7O0dBRUc7OztBQXdLMkQsQ0FBQztBQTRCL0Q7OztHQUdHO0FBQ1EsY0FBTSxHQUNqQjtJQUNJLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsR0FBRyxFQUFxQixRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxPQUFPLEVBQWlCLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxPQUFPLEVBQWlCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsb0JBQW9CLEVBQUksUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxZQUFZLEVBQVksUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLGdCQUFnQixFQUFRLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsZUFBZSxFQUFTLFFBQVE7SUFDaEMsaUJBQWlCLEVBQU8sUUFBUTtJQUNoQyxlQUFlLEVBQVMsUUFBUTtJQUNoQyxlQUFlLEVBQVMsUUFBUTtJQUNoQyxZQUFZLEVBQVksUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxHQUFHLEVBQXFCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0NBQ25DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVkYsMkZBQXFDO0FBQ3JDLHdGQUF1RztBQUl2Rzs7R0FFRztBQUNILFNBQWdCLGdCQUFnQixDQUFFLFFBQWlDO0lBRS9ELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtRQUNqQyxPQUFPLElBQUksQ0FBQztJQUVoQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFFWixLQUFLLElBQUksUUFBUSxJQUFJLFFBQVEsRUFDN0I7UUFDSSxDQUFDLElBQUksR0FBRyx1QkFBVyxDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxLQUFLLGFBQWE7WUFDMUIsQ0FBQyxJQUFJLG1CQUFtQixDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDLElBQUksUUFBUSxLQUFLLFdBQVc7WUFDN0IsQ0FBQyxJQUFJLGlCQUFpQixDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDLElBQUksUUFBUSxLQUFLLFlBQVk7WUFDOUIsQ0FBQyxJQUFJLGtCQUFrQixDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDLElBQUksUUFBUSxLQUFLLEtBQUs7WUFDdkIsQ0FBQyxJQUFJLGVBQWUsQ0FBRSxPQUFPLENBQUMsQ0FBQzs7WUFFL0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQztRQUVqQixDQUFDLElBQUksR0FBRztLQUNYO0lBRUQsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ25CLENBQUM7QUExQkQsNENBMEJDO0FBSUQsU0FBUyxtQkFBbUIsQ0FBRSxHQUEyQztJQUVyRSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSwwQkFBYyxDQUFDLGFBQWE7UUFDeEMsV0FBVyxFQUFFLDBCQUFjLENBQUMsYUFBYTtLQUM1QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxpQkFBaUIsQ0FBRSxHQUF5QztJQUVqRSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsd0JBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDM0QsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxtQkFBTyxDQUFFLENBQUMsRUFBRSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0tBQ3ZFLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGtCQUFrQixDQUFFLEdBQTBDO0lBRW5FLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxlQUFlLENBQUUsR0FBdUM7SUFFN0QsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLE1BQU0sRUFBRSxHQUFHO0tBQ2QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMscUJBQXFCLENBQUUsR0FBaUM7SUFFN0QsT0FBTyxvQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDN0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ3RELENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGtCQUFrQixDQUFFLEdBQWlDO0lBRTFELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDM0IsTUFBTSxFQUFFLEdBQUc7S0FDZCxDQUFDLENBQUM7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZEOztHQUVHOztBQVkyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYi9ELHdGQUEwRDtBQUkxRCxTQUFTLG1CQUFtQixDQUFFLEdBQXNDO0lBRWhFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFJRCxTQUFTLHFCQUFxQixDQUFFLEdBQWlDO0lBRTdELE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDdEQsQ0FBQztBQUlELFNBQVMseUJBQXlCLENBQUUsR0FBcUM7SUFFckUsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN2RCxDQUFDO0FBZ0NEOztHQUVHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUUsS0FBcUM7SUFFckUsT0FBTyxtQkFBTyxDQUFFLEtBQUssRUFBRTtRQUNuQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLE1BQU0sRUFBRSxHQUFHO0tBQ2QsQ0FBQztBQUNOLENBQUM7QUFORCxnREFNQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0Isd0JBQXdCLENBQUUsS0FBa0M7SUFFeEUsSUFBSSxDQUFDLEtBQUs7UUFDTixPQUFPLEVBQUUsQ0FBQztJQUVkLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDakMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN2QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBRTNCLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUN6QixJQUFJLFNBQVM7UUFDVCxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBRW5ELEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUMxQjtRQUNJLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsU0FBUztRQUViLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNmLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxvQkFBb0IsQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVFO0lBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQzNELENBQUM7QUF2QkQsNERBdUJDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixvQkFBb0IsQ0FBRSxXQUFtQixFQUFFLE9BQVksRUFBRSxTQUFtQjtJQUV4RixJQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBRWhCLDJCQUEyQjtJQUMzQixJQUFJLElBQUksR0FBcUIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXhELElBQUksZUFBZSxHQUFHLHVCQUFXLENBQUUsV0FBVyxDQUFDLENBQUM7SUFFaEQsaUdBQWlHO0lBQ2pHLElBQUksWUFBWSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVFLElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssWUFBWTtRQUN0RCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFFNUMsSUFBSSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RHLElBQUksT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRyxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUM1RTtRQUNJLElBQUksRUFBRSxHQUFHLCtCQUErQixDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvRCxJQUFJLEVBQUUsR0FBRywrQkFBK0IsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0QsT0FBTyxHQUFHLEVBQUUsT0FBTyxlQUFlLE9BQU8sRUFBRSxFQUFFLENBQUM7S0FDakQ7U0FFRDtRQUNJLElBQUksQ0FBQyxHQUFHLCtCQUErQixDQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUNwRDtBQUNMLENBQUM7QUE1QkQsb0RBNEJDO0FBSUQsU0FBUywrQkFBK0IsQ0FBRSxPQUFZLEVBQUUsT0FBeUI7SUFFN0UsSUFBSSxPQUFPLElBQUksSUFBSTtRQUNmLE9BQU8sRUFBRSxDQUFDO0lBRWQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxPQUFPLENBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO1FBQ2hDLE9BQU8sT0FBTyxDQUFDO1NBQ2QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBQztRQUM1QixPQUFPLG1CQUFPLENBQUUsT0FBTyxDQUFDLENBQUM7O1FBRXpCLE9BQU8sT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2xDLENBQUM7QUFJRCxJQUFJLGFBQWEsR0FDakI7SUFDSSxXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkMsY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDekMsVUFBVSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3pELFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDOUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDakUsYUFBYSxFQUFFLHlCQUF5QjtJQUN4QyxhQUFhLEVBQUUseUJBQXlCO0lBQ3hDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3hELFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0Ysd0ZBQW9DO0FBSXBDLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsZ0JBQWdCO0FBQ2hCLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7O0dBRUc7QUFDSCxTQUFTLGdCQUFnQixDQUFFLEdBQXNCO0lBRWhELElBQUksRUFBRSxHQUFHLG1CQUFPLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpCLHNEQUFzRDtJQUN0RCxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsbUJBQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLG1CQUFPLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUxRSxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLGdCQUFnQixDQUFFLEdBQWdCO0lBRWpELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxFQUFFLEVBQUU7S0FDVixDQUFDO0FBQ0gsQ0FBQztBQUxELDRDQUtDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixvQkFBb0IsQ0FBRSxVQUFrQixFQUFFLEdBQVE7SUFFakUsSUFBSSxDQUFDLFVBQVU7UUFDZCxPQUFPLEVBQUUsQ0FBQztJQUVYLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBRSxNQUFNLENBQUM7UUFDakMsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7O1FBRXRELE9BQU8sbUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBVEQsb0RBU0M7Ozs7Ozs7Ozs7Ozs7OztBQzFDbUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyRSx3RkFJb0I7QUFDcEIsMkZBQTJDO0FBTTNDLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsMERBQTBEO0FBQzFELEVBQUU7QUFDRixtR0FBbUc7QUFFbkcsU0FBUywwQkFBMEIsQ0FBRSxHQUFxQjtJQUV0RCxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsQ0FBQyxVQUFVLEVBQUUsdUJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdkMsQ0FBQyxNQUFNLEVBQUUsOEJBQThCLENBQUM7UUFDeEMsQ0FBQyxPQUFPLEVBQUUsdUJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDcEMsQ0FBQyxPQUFPLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUM7UUFDdEMsV0FBVztRQUNYLE1BQU07UUFDTixPQUFPO1FBQ1AsTUFBTTtLQUNULENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLHlCQUF5QixDQUFFLEdBQStCO0lBRS9ELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsT0FBTyxFQUFFLDBCQUEwQjtLQUN0QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxzQkFBc0IsQ0FBRSxHQUErQztJQUU1RSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSx5QkFBeUI7UUFDckMsU0FBUyxFQUFFLHdCQUF3QjtLQUN0QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyx5QkFBeUIsQ0FBRSxHQUFXO0lBRTNDLE9BQU8sU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUMzQixDQUFDO0FBSUQsU0FBUyx3QkFBd0IsQ0FBRSxHQUFVO0lBRXpDLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUTtRQUM3QixDQUFDLENBQUMsOEJBQThCLENBQUUsR0FBNEIsQ0FBQztRQUMvRCxDQUFDLENBQUMsbUJBQU8sQ0FBRSxHQUFHLEVBQUUsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUlELFNBQVMsOEJBQThCLENBQUUsR0FBb0M7SUFFekUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUVYLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2hCO2dCQUNJLHlCQUF5QjtnQkFFekIsYUFBYTtnQkFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNULE9BQU8sQ0FBQyxLQUFLLENBQUUsOEVBQThFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3BHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBRSx1RUFBdUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEcsVUFBVTtnQkFFVixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQzthQUM5RDtpQkFFRDtnQkFDSSwwQkFBMEI7Z0JBRTFCLGFBQWE7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBRSxtR0FBbUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlJLFVBQVU7Z0JBRVYsT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDMUQ7UUFDTCxDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsMkJBQTJCLENBQUUsR0FBc0I7SUFFeEQsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLENBQUMsT0FBTyxFQUFFLDBCQUFhLENBQUM7UUFDeEIsT0FBTztRQUNQLENBQUMsVUFBVSxFQUFFLG1CQUFPLENBQUM7UUFDckIsQ0FBQyxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsR0FBRyxDQUFDO1FBQzNDLFFBQVE7UUFDUixZQUFZO1FBQ1osUUFBUTtRQUNSLE1BQU07S0FDVCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUywwQkFBMEIsQ0FBRSxHQUFnQztJQUVqRSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSwwQkFBYTtRQUN6QixPQUFPLEVBQUUsMkJBQTJCO0tBQ3ZDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLDhCQUE4QixDQUFFLEdBQW9DO0lBRXpFLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLHlCQUFhLENBQUMsYUFBYTtRQUN2QyxTQUFTLEVBQUUsNEJBQTRCO0tBQzFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsbUJBQW1CLENBQUUsR0FBdUI7SUFFakQsMkZBQTJGO0lBQzNGLHdGQUF3RjtJQUN4RixJQUFJLE9BQU8sR0FBdUIsTUFBTSxDQUFDLE1BQU0sQ0FBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUQsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQzNCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRXRCLE9BQU8sT0FBTyxDQUFFLE9BQU8sRUFBRTtRQUNyQixRQUFRO1FBQ1IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7UUFDN0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUNwQixDQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ3BCLFFBQVE7S0FDWCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLHdCQUF3QixDQUFFLEdBQXlDO0lBRXhFLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLHFDQUF5QjtRQUNyQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBTyxDQUFFLENBQUMsRUFBRTtZQUMxQixRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUscUNBQXlCO1NBQ3hDLENBQUM7S0FDTCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBZ0IsMEJBQTBCLENBQUUsR0FBcUI7SUFFN0QsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoQyxDQUFDLEdBQUcsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQztRQUNsQyxDQUFDLEdBQUcsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQztRQUNsQyxDQUFDLE1BQU0sRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxDQUFDLFFBQVEsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxDQUFDLE9BQU8sRUFBRSwwQkFBYSxDQUFDO0tBQzNCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCxnRUFVQztBQUlEOztHQUVHO0FBQ0gsU0FBUywwQkFBMEIsQ0FBRSxHQUF3QjtJQUV6RCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFdBQVcsRUFBRSx5QkFBYSxDQUFDLGFBQWE7UUFDeEMsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixvQkFBb0IsQ0FBRSxHQUFxQztJQUV2RSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUVYLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEI7Z0JBQ0ksK0JBQStCO2dCQUMvQixJQUFJLENBQUMsR0FBRyxtQkFBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSx5QkFBYSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxJQUFJLEtBQUssQ0FBQztnQkFDWCxPQUFPLENBQUMsR0FBRyxtQkFBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSx5QkFBYSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMvRDtpQkFFRDtnQkFDSSxpQ0FBaUM7Z0JBQ2pDLE9BQU8sbUJBQU8sQ0FBRSxDQUFDLEVBQUUseUJBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDeEQ7UUFDTCxDQUFDO1FBQ0QsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBcEJELG9EQW9CQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQUUsR0FBK0I7SUFFcEQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUseUJBQWEsQ0FBQyxhQUFhO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUVYLElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO2dCQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTtnQkFDWixHQUFHLENBQUMsSUFBSSxDQUFFLG1CQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU3QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO2dCQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUUsMEJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5DLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsT0FBTyxFQUFFLDBCQUFhO0tBQ3pCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFFLEdBQWdDO0lBRXRELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyx5QkFBYSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEUsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQUUsR0FBK0I7SUFFcEQsaUZBQWlGO0lBQ2pGLHdGQUF3RjtJQUN4RixzRkFBc0Y7SUFDdEYsNkRBQTZEO0lBQzdELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLENBQUM7aUJBQ1QsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ25CLE9BQU8sbUJBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakIsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO2dCQUM3QixPQUFPLG1CQUFPLENBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2lCQUV0QztnQkFDSSxPQUFPLG1CQUFPLENBQUUsQ0FBQyxFQUFFO29CQUNmLFdBQVcsRUFBRSxjQUFjO29CQUMzQixNQUFNLEVBQUUsR0FBRztpQkFDZCxDQUFDO2FBQ0w7UUFDTCxDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUUsR0FBNkI7SUFFaEQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFFWCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDZCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLENBQUM7O2dCQUVwQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyx5QkFBYSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBQ0QsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxlQUFlLENBQUUsR0FBUTtJQUU5QixPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7UUFDNUIsU0FBUztRQUNULFFBQVE7UUFDUixTQUFTO1FBQ1QsQ0FBQyxNQUFNLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUM7UUFDckMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUN6QixRQUFRO0tBQ1gsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsaUJBQWlCLENBQUUsR0FBNkI7SUFFckQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsd0JBQVksQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDO0tBQy9ELENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLHlCQUF5QixDQUFFLEdBQTBDO0lBRTFFLDJGQUEyRjtJQUMzRixPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxDQUFDO2lCQUNULElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVTtnQkFDL0IsT0FBTyxtQkFBTyxDQUFFLENBQUMsQ0FBQyxDQUFDOztnQkFFbkIsT0FBTyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsc0NBQXNDLENBQUUsSUFBbUM7SUFFaEYsMkRBQTJEO0lBQzNELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUNwQjtRQUNJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFFRCxJQUFJLFFBQVEsS0FBSyxDQUFDLElBQUksUUFBUSxLQUFLLENBQUM7UUFDaEMsT0FBTyxFQUFFLENBQUM7SUFFZCxnRUFBZ0U7SUFDaEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQVcsUUFBUSxDQUFDLENBQUM7SUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFTLFFBQVEsQ0FBQyxDQUFDO0lBRTVDLG1GQUFtRjtJQUNuRixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFDcEI7UUFDSSxJQUFJLElBQUksR0FBRyxtQkFBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ3JDO1lBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMvQjtLQUNKO0lBRUQsNEZBQTRGO0lBQzVGLDBDQUEwQztJQUMxQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUNqQztRQUNJLElBQUksUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUNqQztZQUNJLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDcEM7UUFFRCxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7S0FDcEM7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFJRCxTQUFnQixpQkFBaUIsQ0FBRSxHQUFjO0lBRTdDLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMseUJBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksbUJBQU8sQ0FBQyxDQUFDLENBQUMsR0FBRztLQUNwQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsOENBTUM7QUFJRCxTQUFTLGdCQUFnQixDQUFFLEdBQXlDO0lBRWhFLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMseUJBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDO1FBQ2hELFdBQVcsRUFBRSxpQkFBaUI7S0FDakMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsbUJBQW1CLENBQUUsR0FBK0I7SUFFekQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFTLEdBQWUsQ0FBQyxJQUFJLEdBQUc7S0FDakQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsY0FBYyxDQUFFLEdBQW9CO0lBRXpDLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ2QsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztnQkFFckQsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLHdCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0UsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxTQUFTLHlCQUF5QixDQUFFLEdBQXVDO0lBRXZFLE9BQU8sT0FBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixNQUFNO1FBQ04sT0FBTztRQUNQLENBQUMsT0FBTyxFQUFFLDBCQUFhLENBQUM7UUFDeEIsQ0FBQyxXQUFXLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUM7S0FDN0MsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsMkJBQTJCLENBQUUsR0FBZ0M7SUFFbEUsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLENBQUMsVUFBVSxFQUFFLHVCQUFXLENBQUM7UUFDekIsQ0FBQyxVQUFVLEVBQUUsdUJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdkMsQ0FBQyxNQUFNLEVBQUUsOEJBQThCLENBQUM7UUFDeEMsQ0FBQyxPQUFPLEVBQUUsdUJBQVcsQ0FBQyxhQUFhLENBQUM7S0FDdkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsMEJBQTBCLENBQUUsR0FBZ0M7SUFFakUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixPQUFPLEVBQUUsMkJBQTJCO0tBQ3ZDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGNBQWMsQ0FBRSxHQUFxQjtJQUUxQyxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDOUIsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO1FBQ3RCLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQzlCLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQztRQUMxQixDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDO0tBQ2xDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFVRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEdBQVEsRUFDN0IsSUFBbUUsRUFDbkUsWUFBb0IsR0FBRztJQUV2QixJQUFJLEdBQUcsSUFBSSxJQUFJO1FBQ1gsT0FBTyxFQUFFLENBQUM7U0FDVCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDNUIsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFMUIsSUFBSSxHQUFHLEdBQWUsRUFBRSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUUsV0FBVyxDQUFDLEVBQUU7UUFFeEIseUZBQXlGO1FBQ3pGLG1EQUFtRDtRQUNuRCxJQUFJLFFBQVEsR0FBRyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2YsT0FBTztRQUVYLGlDQUFpQztRQUNqQyxJQUFJLE1BQU0sR0FBRyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEIsSUFBSSxTQUFTLEdBQUcsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUztZQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUUsbUJBQU8sQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzVCLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUTtZQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFFLGlCQUFpQixDQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFeEQsR0FBRyxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVOLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBbENELDBCQWtDQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysb0NBQW9DO0FBQ3BDLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLE1BQW1DLEVBQy9ELE1BQWdCO0lBRWhCLElBQUksQ0FBQyxNQUFNO1FBQ1AsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWhDLDZGQUE2RjtJQUM3RiwrQ0FBK0M7SUFDL0MsSUFBSSxDQUFDLE1BQU0sRUFDWDtRQUNJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsTUFBTSxDQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQixPQUFPLE1BQU0sQ0FBQztLQUNqQjtJQUVELG1HQUFtRztJQUNuRyxJQUFJLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0IsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCx3Q0FBd0M7SUFDeEMsd0JBQXdCLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTFDLDRDQUE0QztJQUMvQyxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sRUFDM0I7UUFDTyxJQUFJLFFBQVEsS0FBSyxHQUFHLElBQUksUUFBUSxLQUFLLElBQUk7WUFDckMsU0FBUzs7WUFFVCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlDO0lBRUUsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQXBDRCx3Q0FvQ0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLHdCQUF3QixDQUFFLE1BQWdCLEVBQ3RELE1BQWdCO0lBRWhCLHVFQUF1RTtJQUN2RSxJQUFJLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUMsaUJBQWlCO1FBQ2xCLE9BQU87SUFFWCwwQkFBMEI7SUFDMUIsSUFBSSxpQkFBaUIsRUFDckI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBRSxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2hIO0FBQ0wsQ0FBQztBQWRELDREQWNDO0FBSUQsK0RBQStEO0FBQy9ELFNBQWdCLGdCQUFnQixDQUFFLFFBQWtCO0lBRWhELElBQUksQ0FBQyxRQUFRO1FBQ1QsT0FBTyxFQUFFLENBQUM7SUFFZCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFZCxvQkFBb0IsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLFFBQWlCLEVBQVEsRUFBRTtRQUNsRixJQUFJLFFBQVE7WUFDUixDQUFDLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLENBQUM7O1lBRXpCLENBQUMsSUFBSSxHQUFHLHVCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFmRCw0Q0FlQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLHlCQUF5QixDQUFFLFNBQThCO0lBRXJFLElBQUksQ0FBQyxTQUFTO1FBQ1YsT0FBTyxFQUFFLENBQUM7SUFFZCxJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLFFBQWdCLENBQUM7SUFDckIsSUFBSSxLQUFVLENBQUM7SUFDZixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUMxQjtRQUNJLE9BQU8sR0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFhLENBQUMsT0FBTyxDQUFDO1FBQzVDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCO1NBRUQ7UUFDSSxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPO1lBQ1IsT0FBTyxFQUFFLENBQUM7YUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDOUIsT0FBTyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7UUFFN0IsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUNyQixPQUFPLEVBQUUsQ0FBQztRQUVkLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEI7SUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBOUJELDhEQThCQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLGlCQUFpQixDQUFFLFFBQWdCLEVBQUUsT0FBWSxFQUFFLFNBQW1CO0lBRWxGLElBQUksQ0FBQyxRQUFRO1FBQ1QsT0FBTyxFQUFFLENBQUM7SUFFZCwyQ0FBMkM7SUFDM0MsSUFBSSxJQUFJLEdBQVEsa0JBQWtCLENBQUMsdUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTFELHlGQUF5RjtJQUN6Rix1RUFBdUU7SUFDdkUsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNwQixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxHQUFHLElBQUksT0FBTyxFQUNqRDtRQUNJLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyxHQUFHLElBQUksQ0FBQztLQUNsQjtJQUVELElBQUksV0FBVyxHQUFHLENBQUMsSUFBSTtRQUNuQixDQUFDLENBQUMsbUJBQU8sQ0FBRSxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7WUFDdEIsQ0FBQyxDQUFDLG1CQUFPLENBQUUsUUFBUSxFQUFFLElBQTRCLENBQUM7WUFDbEQsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQ3RCLENBQUMsQ0FBQyw0QkFBNEIsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO2dCQUMvQyxDQUFDLENBQUUsSUFBcUIsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUVoRCxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsU0FBUztRQUMxQixXQUFXLEdBQUcsU0FBUyxDQUFDO0lBRTVCLElBQUksT0FBTztRQUNQLFdBQVcsSUFBSSxhQUFhLENBQUM7SUFFakMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyx1QkFBVyxDQUFFLFFBQVEsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQ2hGLENBQUM7QUFqQ0QsOENBaUNDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUUsUUFBa0IsRUFDcEQsT0FBK0Q7SUFFbEUsS0FBSyxJQUFJLFFBQVEsSUFBSSxRQUFRLEVBQzdCO1FBQ0MsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUNyQjtZQUNDLDhFQUE4RTtZQUM5RSxpQ0FBaUM7WUFDakMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBMEIsQ0FBQztZQUMxRCxLQUFLLElBQUksU0FBUyxJQUFJLE9BQU8sRUFDN0I7Z0JBQ0MsSUFBSSxDQUFDLFNBQVM7b0JBQ2IsU0FBUztnQkFFVixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLHlCQUF5QixDQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsT0FBTztvQkFDWCxTQUFTO2dCQUNWLElBQUksUUFBUSxJQUFJLElBQUk7b0JBQ25CLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBRWYsT0FBTyxDQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbEM7U0FDRDthQUVEO1lBQ0MsZ0RBQWdEO1lBQ3ZDLE9BQU8sQ0FBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzRjtLQUNEO0FBQ0YsQ0FBQztBQTlCRCxvREE4QkM7QUFJRCxpR0FBaUc7QUFDakcsb0NBQW9DO0FBQ3BDLFNBQVMsNEJBQTRCLENBQUUsR0FBNkI7SUFFaEUsT0FBTyx5QkFBYSxDQUFDLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsK0ZBQStGO0FBQy9GLG9DQUFvQztBQUNwQyxTQUFTLDBCQUEwQixDQUFFLEdBQTJCO0lBRTVELE9BQU8sdUJBQVcsQ0FBQyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUVELGtHQUFrRztBQUNsRyxzQkFBc0I7QUFDdEIsU0FBUyxzQkFBc0IsQ0FBRSxHQUFRO0lBRXJDLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBQUEsQ0FBQztBQUVGLGtHQUFrRztBQUNsRyxzQkFBc0I7QUFDdEIsU0FBUyxzQkFBc0IsQ0FBRSxHQUFRO0lBRXJDLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBQUEsQ0FBQztBQTRCRjs7Ozs7R0FLRztBQUNILFNBQVMsNEJBQTRCLENBQUUsR0FBUSxFQUFFLFFBQXVCO0lBRXBFLElBQUksSUFBSSxHQUNKLFFBQVEsbUJBQXlCLENBQUMsQ0FBQyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakUsUUFBUSxrQkFBd0IsQ0FBQyxDQUFDLENBQUMsMEJBQWEsQ0FBQyxDQUFDO1lBQ2xELFFBQVEsbUJBQXlCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwRCxRQUFRLHFCQUEyQixDQUFDLENBQUMsQ0FBQyxtQkFBTyxDQUFDLENBQUM7b0JBQy9DLFFBQVEseUJBQStCLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7d0JBQ3RFLFFBQVEsaUNBQXVDLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7NEJBQ2hGLFFBQVEsK0JBQXFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0NBQzVFLFFBQVEsMkJBQWlDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0NBQ3BFLFFBQVEsMkJBQWlDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7d0NBQ3BFLFFBQVEsc0JBQTJCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7NENBQ3hELElBQUksQ0FBQztJQUVULE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNqQyxDQUFDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiw2RkFBNkY7QUFDN0YsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFNLGtCQUFrQixHQUN4QjtJQUNJLFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0QsY0FBYyw0QkFBa0M7SUFDaEQsaUJBQWlCLDRCQUFrQztJQUNuRCx1QkFBdUIsd0JBQThCO0lBQ3JELGlCQUFpQix3QkFBOEI7SUFDL0MsYUFBYSx3QkFBOEI7SUFDM0Msa0JBQWtCLHdCQUE4QjtJQUNoRCx1QkFBdUIsRUFBRSxzQkFBc0I7SUFFL0MsVUFBVSxFQUFFO1FBQ1IsVUFBVSxFQUFFLDBCQUFhO1FBQ3pCLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLE1BQU0sRUFBRSxHQUFHO0tBQ2Q7SUFDRCxvQkFBb0Isd0JBQThCO0lBQ2xELG1CQUFtQix3QkFBOEI7SUFDakQsY0FBYyx3QkFBOEI7SUFDNUMsZUFBZSxlQUFxQjtJQUNwQyxnQkFBZ0Isd0JBQThCO0lBQzlDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsd0JBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzlDLGdCQUFnQix3QkFBOEI7SUFDOUMsY0FBYyxFQUFFO1FBQ1osVUFBVSxFQUFFLHlCQUFhLENBQUMsYUFBYTtRQUN2QyxXQUFXLEVBQUUsOEJBQThCO1FBQzNDLE1BQU0sRUFBRSxHQUFHO0tBQ2Q7SUFDRCxhQUFhLGdCQUFzQjtJQUNuQyxNQUFNLGdCQUFzQjtJQUM1QixjQUFjLGdCQUFzQjtJQUNwQyxtQkFBbUIsZUFBcUI7SUFDeEMsbUJBQW1CLGdCQUFzQjtJQUN6QyxnQkFBZ0IsZ0JBQXNCO0lBQ3RDLHFCQUFxQixlQUFxQjtJQUMxQyxxQkFBcUIsZ0JBQXNCO0lBQzNDLFlBQVksZ0JBQXNCO0lBQ2xDLGlCQUFpQixlQUFxQjtJQUN0QyxzQkFBc0Isc0JBQTRCO0lBQ2xELHVCQUF1QixzQkFBNEI7SUFDbkQsaUJBQWlCLGdCQUFzQjtJQUN2QyxXQUFXLEVBQUU7UUFDVCxPQUFPLEVBQUUsMEJBQWE7S0FDekI7SUFDRCxXQUFXLEVBQUU7UUFDVCxPQUFPLEVBQUUsbUJBQW1CO0tBQy9CO0lBQ0QsZ0JBQWdCLEVBQUUsd0JBQXdCO0lBQzFDLGVBQWUsZ0JBQXNCO0lBQ3JDLG9CQUFvQixlQUFxQjtJQUN6QyxvQkFBb0IsZ0JBQXNCO0lBQzFDLGlCQUFpQixnQkFBc0I7SUFDdkMsc0JBQXNCLGVBQXFCO0lBQzNDLHNCQUFzQixnQkFBc0I7SUFDNUMsVUFBVSxnQkFBc0I7SUFDaEMsZUFBZSxlQUFxQjtJQUNwQyxlQUFlLGdCQUFzQjtJQUNyQyxZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLFdBQVcsZ0JBQXNCO0lBQ2pDLGdCQUFnQixlQUFxQjtJQUNyQyxnQkFBZ0IsZ0JBQXNCO0lBQ3RDLGFBQWEsOEJBQW9DO0lBQ2pELFNBQVMsZ0JBQXNCO0lBQy9CLGNBQWMsZUFBcUI7SUFDbkMsbUJBQW1CLHNCQUE0QjtJQUMvQyxvQkFBb0Isc0JBQTRCO0lBQ2hELGNBQWMsZ0JBQXNCO0lBQ3BDLFdBQVcsOEJBQW9DO0lBQy9DLE1BQU0sZ0JBQXNCO0lBQzVCLFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUVELFVBQVUsZUFBcUI7SUFDL0IsSUFBSSxFQUFHO1FBQ0gsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUM1RDtJQUNELEtBQUssZUFBcUI7SUFDMUIsU0FBUyxnQkFBc0I7SUFDL0IsVUFBVSxnQkFBc0I7SUFDaEMsZUFBZSxlQUFxQjtJQUNwQyxlQUFlLDhCQUFvQztJQUNuRCxPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLGdCQUFzQjtJQUNqQyxNQUFNLEVBQUUsY0FBYztJQUV0QixJQUFJLGVBQXFCO0lBQ3pCLFdBQVcsRUFBRSwwQkFBYyxDQUFDLGFBQWE7SUFDekMsSUFBSSxFQUFFLFlBQVk7SUFDbEIsU0FBUyxnQkFBc0I7SUFDL0IsVUFBVSxlQUFxQjtJQUMvQixJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsZUFBZTtLQUMzQjtJQUNELFFBQVEsZ0JBQXNCO0lBQzlCLFNBQVMsRUFBRSxpQkFBaUI7SUFFNUIsR0FBRyw4QkFBb0M7SUFDdkMsYUFBYSxnQkFBc0I7SUFDbkMsT0FBTyw4QkFBb0M7SUFDM0MsVUFBVSxnQkFBc0I7SUFDaEMsUUFBUSx3QkFBOEI7SUFDdEMsZUFBZSxtQkFBd0I7SUFDdkMsWUFBWSxtQkFBd0I7SUFDcEMsVUFBVSx3QkFBOEI7SUFDeEMsT0FBTyx3QkFBOEI7SUFDckMsaUJBQWlCLEVBQUUseUJBQXlCO0lBQzVDLG1CQUFtQixtQkFBd0I7SUFDM0MsZ0JBQWdCLG1CQUF3QjtJQUV4QyxNQUFNLGdCQUFzQjtJQUU1QixVQUFVLGdCQUFzQjtJQUVoQyxJQUFJLGdCQUFzQjtJQUMxQixhQUFhLGdCQUFzQjtJQUNuQyxhQUFhLGVBQXFCO0lBRWxDLE1BQU0sOEJBQW9DO0lBQzFDLGNBQWMsZ0JBQXNCO0lBQ3BDLGdCQUFnQixnQkFBc0I7SUFDdEMsWUFBWSxnQkFBc0I7SUFDbEMsZUFBZSxnQkFBc0I7SUFDckMsaUJBQWlCLGdCQUFzQjtJQUN2QyxVQUFVLGdCQUFzQjtJQUNoQyxXQUFXLGdCQUFzQjtJQUNqQyxTQUFTLGdCQUFzQjtJQUMvQixTQUFTLEVBQUUsbUJBQW1CO0lBQzlCLFNBQVMsRUFBRSxtQkFBbUI7SUFDOUIsV0FBVyxFQUFFLG1CQUFtQjtJQUNoQyxZQUFZLGdCQUFzQjtJQUNsQyxTQUFTLGdCQUFzQjtJQUMvQixhQUFhLGdCQUFzQjtJQUNuQyxRQUFRLGdCQUFzQjtJQUM5QixZQUFZLGdCQUFzQjtJQUNsQyxTQUFTLGdCQUFzQjtJQUMvQixhQUFhLGdCQUFzQjtJQUN0QyxRQUFRLGdCQUFzQjtJQUUzQixjQUFjLGtCQUF3QjtJQUN0QyxNQUFNLEVBQUUsY0FBYztJQUN0QixZQUFZLGtCQUF3QjtJQUNwQyxjQUFjLGdCQUFzQjtJQUNwQyxjQUFjLGtCQUF3QjtJQUN0QyxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsd0JBQVksQ0FBQyxhQUFhO0tBQ3RDO0lBQ0QsT0FBTyxnQkFBc0I7SUFDN0IsWUFBWSxlQUFxQjtJQUNqQyxhQUFhLGdCQUFzQjtJQUVuQyxPQUFPLDhCQUFvQztJQUMzQyxlQUFlLGdCQUFzQjtJQUNyQyxpQkFBaUIsZ0JBQXNCO0lBQ3ZDLGFBQWEsZ0JBQXNCO0lBQ25DLGdCQUFnQixnQkFBc0I7SUFDdEMsa0JBQWtCLGdCQUFzQjtJQUN4QyxXQUFXLGdCQUFzQjtJQUNqQyxZQUFZLGdCQUFzQjtJQUNsQyxVQUFVLGdCQUFzQjtJQUNoQyxXQUFXLGdCQUFzQjtJQUNqQyxpQkFBaUIsRUFBRTtRQUNmLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkM7SUFFRCxNQUFNLEVBQUU7UUFDSixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRztLQUM3QjtJQUVELEtBQUssZ0JBQXNCO0lBQzNCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE1BQU0sZ0JBQXNCO0lBRTVCLGNBQWMsRUFBRTtRQUNaLFdBQVcsRUFBRSwwQkFBYTtLQUM3QjtJQUNELFlBQVksOEJBQW9DO0lBQ2hELGlCQUFpQiw4QkFBb0M7SUFDckQsb0JBQW9CLGdCQUFzQjtJQUMxQyxzQkFBc0IsZ0JBQXNCO0lBQzVDLGtCQUFrQixnQkFBc0I7SUFDeEMsa0JBQWtCLDhCQUFvQztJQUN0RCxxQkFBcUIsZ0JBQXNCO0lBQzNDLHVCQUF1QixnQkFBc0I7SUFDN0MsZ0JBQWdCLGdCQUFzQjtJQUN0QyxpQkFBaUIsZ0JBQXNCO0lBQ3ZDLGVBQWUsZ0JBQXNCO0lBQ3JDLGFBQWEsOEJBQW9DO0lBQ2pELGtCQUFrQiw4QkFBb0M7SUFDdEQscUJBQXFCLGdCQUFzQjtJQUMzQyx1QkFBdUIsZ0JBQXNCO0lBQzdDLG1CQUFtQixnQkFBc0I7SUFDekMsbUJBQW1CLDhCQUFvQztJQUN2RCxzQkFBc0IsZ0JBQXNCO0lBQzVDLHdCQUF3QixnQkFBc0I7SUFDOUMsaUJBQWlCLGdCQUFzQjtJQUN2QyxrQkFBa0IsZ0JBQXNCO0lBQ3hDLGdCQUFnQixnQkFBc0I7SUFDdEMsV0FBVyxnQkFBc0I7SUFDakMsU0FBUyxlQUFxQjtJQUM5QixNQUFNLGVBQXFCO0lBRTNCLE9BQU8sZ0JBQXNCO0lBQzdCLGtCQUFrQixFQUFFO1FBQ2hCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0tBQ2pDO0lBQ0QsY0FBYyxFQUFFO1FBQ1osVUFBVSxFQUFFLDBCQUFhO1FBQ3pCLE9BQU8sRUFBRSx5QkFBeUI7S0FDckM7SUFDRCxtQkFBbUIsZUFBcUI7SUFDeEMsdUJBQXVCLGdCQUFzQjtJQUM3QyxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsMEJBQWE7S0FDekI7SUFDRCxpQkFBaUIsZUFBcUI7SUFDdEMsVUFBVSxFQUFFO1FBQ1IsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QztJQUNELFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNELGNBQWMsRUFBRSwwQkFBYyxDQUFDLGFBQWE7SUFDNUMsR0FBRyxnQkFBc0I7SUFDekIsZUFBZSxFQUFFO1FBQ2IsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QztJQUNELFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0QsZUFBZSw0QkFBa0M7SUFDakQsa0JBQWtCLDRCQUFrQztJQUNwRCx3QkFBd0IsRUFBRSxzQkFBc0I7SUFDaEQsU0FBUyxFQUFFO1FBQ1AsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QztJQUVELGFBQWEsZ0JBQXNCO0lBRW5DLEtBQUssZ0JBQXNCO0lBQzNCLFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRSx1QkFBVztLQUMxQjtJQUNELFdBQVcsZ0JBQXNCO0lBRWpDLElBQUksRUFBRSwwQkFBYyxDQUFDLGFBQWE7SUFFbEMsd0NBQXdDO0lBQ3hDLFdBQVcsZ0JBQXNCO0lBQ2pDLFVBQVUsRUFBRSx3QkFBWSxDQUFDLGFBQWE7SUFDdEMsU0FBUyxFQUFFLHVCQUFXLENBQUMsYUFBYTtJQUNwQyxlQUFlLEVBQUUsNkJBQWlCLENBQUMsYUFBYTtJQUNoRCxjQUFjLEVBQUUsNEJBQWdCLENBQUMsYUFBYTtJQUM5QyxZQUFZLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO0lBQzFDLGFBQWEsa0JBQXdCO0lBQ3JDLFVBQVUsZUFBcUI7Q0FDbEMsQ0FBQztBQUlGLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysc0JBQXNCO0FBQ3RCLEVBQUU7QUFDRixtR0FBbUc7QUFFbkcscUVBQXFFO0FBQ3JFLFNBQWdCLHFCQUFxQixDQUFFLEtBQW9CO0lBRXZELE9BQU8sbUJBQU8sQ0FBRSxLQUFLLEVBQUU7UUFDbkIsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxNQUFNLEVBQUUsTUFBTTtLQUNqQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsc0RBTUM7QUFJRCxxRUFBcUU7QUFDckUsU0FBZ0IsMkJBQTJCLENBQUUsS0FBMEI7SUFFbkUsT0FBTyxtQkFBTyxDQUFFLEtBQUssRUFBRTtRQUNuQixPQUFPLEVBQUUsQ0FBQyxDQUE0QyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQztZQUM3RSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDdEIsT0FBTyxFQUFFLENBQUM7WUFFZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxPQUFRLEdBQUcsR0FBRyxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUMzQyxpQkFBaUIsQ0FBRSxRQUFrQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDckcsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFiRCxrRUFhQzs7Ozs7Ozs7Ozs7Ozs7O0FDbUQrRCxDQUFDO0FBTVEsQ0FBQztBQVdoQixDQUFDO0FBS1csQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3p0Q3ZFLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsVUFBVTtBQUNWLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLElBQVk7SUFFeEMsSUFBSSxDQUFDLElBQUk7UUFDUixPQUFPLElBQUksQ0FBQztJQUViLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBTkQsa0NBTUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUUsS0FBYTtJQUV4QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckUsQ0FBQztBQUhELGtDQUdDO0FBMkNEOzs7R0FHRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxHQUFRLEVBQUUsT0FBOEI7SUFFOUQsSUFBSSxDQUFDLE9BQU8sRUFDWDtRQUNJLHVCQUF1QjtRQUN2Qix3Q0FBd0M7UUFDeEMsaURBQWlEO1FBQ2pELHVDQUF1QztRQUN2QyxzQ0FBc0M7UUFDdEMsSUFBSSxHQUFHLElBQUksSUFBSTtZQUNYLE9BQU8sRUFBRSxDQUFDO2FBQ1QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQzVCLE9BQU8sR0FBRyxDQUFDO2FBQ1YsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN2QixPQUFPLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQzthQUNwQixJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVU7WUFDOUIsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUNaLElBQUksT0FBTyxHQUFHLENBQUMsYUFBYSxLQUFLLFVBQVU7WUFDNUMsT0FBTyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7O1lBRTNCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzdCO1NBRUQ7UUFDSSxzRkFBc0Y7UUFDdEYsb0RBQW9EO1FBQ3BELElBQUksR0FBRyxJQUFJLElBQUk7WUFDWCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUNyRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFDNUIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDMUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQzVCLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9HLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVTtZQUM5QixPQUFPLE9BQU8sQ0FBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDckUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUMzQjtZQUNJLElBQUksT0FBTyxDQUFDLFNBQVM7Z0JBQ2pCLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBRSxHQUFHLENBQUMsQ0FBQztpQkFFbkM7Z0JBQ0ksSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDOUQsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDeEY7U0FDSjthQUNJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUNoQztZQUNJLElBQUksT0FBTyxHQUFHLENBQUMsYUFBYSxLQUFLLFVBQVU7Z0JBQ3ZDLE9BQU8sR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUMxQixJQUFJLE9BQU8sQ0FBQyxPQUFPO2dCQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUM7aUJBQzVCLElBQUksT0FBTyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQzs7Z0JBRTdCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO2FBQ0ksSUFBSSxPQUFPLEdBQUcsS0FBSyxTQUFTO1lBQzdCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNHLElBQUksT0FBTyxDQUFDLE9BQU87WUFDcEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDOztZQUU3QixPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM3QjtBQUNMLENBQUM7QUE5REQsMEJBOERDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEdBQVUsRUFBRSxJQUFvQixFQUFFLFlBQW9CLEdBQUc7SUFFOUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEVBQUU7UUFDSixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQy9GLENBQUM7QUFMRCwwQkFLQztBQUtEOzs7R0FHRztBQUNILFNBQWdCLHNCQUFzQixDQUFFLEtBQTJCLEVBQUUsTUFBYSxFQUM5RSxXQUFpQztJQUVqQyx3RUFBd0U7SUFDeEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QixJQUFJLFNBQVMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUU7UUFDOUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRixvQkFBb0I7SUFDcEIsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFkRCx3REFjQztBQWVEOzs7Ozs7R0FNRztBQUNILFNBQVMsY0FBYyxDQUFFLENBQVMsRUFBRSxVQUFrQixFQUFFLEVBQUUsWUFBb0IsRUFBRTtJQUU1RSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDOUQsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLGtCQUFrQixDQUFvQixHQUE0QixFQUN2RSxXQUFtQztJQUVuQyxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGtCQUFrQixDQUFvQixHQUFpQyxFQUNoRSxXQUFtQyxFQUFFLFlBQW9CLEdBQUc7SUFFeEUsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFFLENBQUMsRUFBRSxXQUFXLENBQUM7UUFDckQsTUFBTSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsUUFBUSxDQUFvQixJQUFZLEVBQUUsTUFBaUMsRUFDaEYsV0FBbUM7SUFFbkMsT0FBTyxHQUFHLElBQUksSUFBSSxrQkFBa0IsQ0FBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDdkUsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxRQUFRLENBQW9CLEtBQTJCLEVBQUUsTUFBaUMsRUFDL0YsV0FBbUM7SUFFbkMsT0FBTyxRQUFRLHNCQUFzQixDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDOUcsQ0FBQztBQUlEOzs7O0dBSUc7QUFDSCxNQUFNLGNBQWM7SUFFaEIsWUFBdUIsV0FBa0M7UUFBbEMsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBSWxELG1CQUFjLEdBQUcsQ0FBQyxDQUFTLEVBQVUsRUFBRTtZQUUxQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVNLGtCQUFhLEdBQUcsQ0FBQyxHQUE0QixFQUFVLEVBQUU7WUFFNUQsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFTSx1QkFBa0IsR0FBRyxDQUFDLEdBQWlDLEVBQUUsWUFBb0IsR0FBRyxFQUFVLEVBQUU7WUFFL0YsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBZkQsQ0FBQztJQWlCTSxHQUFHLENBQUUsR0FBRyxNQUFpQztRQUU1QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sR0FBRyxDQUFFLEdBQUcsTUFBaUM7UUFFNUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLEtBQUssQ0FBRSxHQUE0QixFQUFFLElBQTZCLEVBQUUsR0FBNEI7UUFFbkcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLElBQUksQ0FBRSxZQUFrQyxFQUFFLEdBQUcsTUFBaUM7UUFFakYsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNKO0FBc0JELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsY0FBMEI7SUFFbEQsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFTLElBQVksT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9ELE1BQU0sQ0FBQyxhQUFhLENBQUUsR0FBd0IsSUFDL0MsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RCxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBNkIsRUFBRSxTQUFpQixJQUM1RSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5RSxnQkFBZ0IsS0FBSyxDQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO0NBQ3REO0FBWEQsc0NBV0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLFVBQVU7QUFDVixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILE1BQWEsY0FBZSxTQUFRLGNBQTJCO0lBRXBELE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FBUyxJQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFOUQsTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUF5QixJQUNoRCxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTdELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBRSxHQUE4QixFQUFFLFNBQWlCLElBQzdFLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9FLGdCQUFnQixLQUFLLENBQUUsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7Q0FDdkQ7QUFaRCx3Q0FZQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQix5QkFBeUIsQ0FBRSxDQUFTO0lBRWhELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3hFLENBQUM7QUFIRCw4REFHQztBQUdELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsU0FBUztBQUNULEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsY0FBMEI7SUFFbEQsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFTLElBQVksT0FBTyxjQUFjLENBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakYsTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUF3QixJQUMvQyxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBRSxHQUE2QixFQUFFLFNBQWlCLElBQzVFLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlFLGdCQUFnQixLQUFLLENBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7SUFFNUMsTUFBTSxDQUFFLEdBQXdCLEVBQUUsR0FBd0I7UUFFN0QsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0o7QUFoQkQsc0NBZ0JDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixRQUFRO0FBQ1IsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLFlBQWEsU0FBUSxjQUF5QjtJQUVoRCxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLGNBQWMsQ0FBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRixNQUFNLENBQUMsYUFBYSxDQUFFLEdBQXVCLElBQzlDLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0QsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQTRCLEVBQUUsU0FBaUIsSUFDM0UsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0UsZ0JBQWdCLEtBQUssQ0FBRSxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztDQUNyRDtBQVhELG9DQVdDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixPQUFPO0FBQ1AsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLFdBQVksU0FBUSxjQUF3QjtJQUU5QyxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLGNBQWMsQ0FBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoRixNQUFNLENBQUMsYUFBYSxDQUFFLEdBQXNCLElBQzdDLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUQsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQTJCLEVBQUUsU0FBaUIsSUFDMUUsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUUsZ0JBQWdCLEtBQUssQ0FBRSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztDQUNwRDtBQVhELGtDQVdDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixhQUFhO0FBQ2IsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLGlCQUFrQixTQUFRLGNBQThCO0lBRTFELE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FBUyxJQUFZLE9BQU8sY0FBYyxDQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpGLE1BQU0sQ0FBQyxhQUFhLENBQUUsR0FBNEIsSUFDbkQsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBRSxHQUFpQyxFQUFFLFNBQWlCLElBQ2hGLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEYsZ0JBQWdCLEtBQUssQ0FBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO0NBQzFEO0FBWEQsOENBV0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLFlBQVk7QUFDWixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsY0FBNkI7SUFFeEQsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFTLElBQVksT0FBTyxjQUFjLENBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEYsTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUEyQixJQUNsRCxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0QsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQWdDLEVBQUUsU0FBaUIsSUFDL0UsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRixnQkFBZ0IsS0FBSyxDQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7Q0FDekQ7QUFYRCw0Q0FXQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsV0FBVztBQUNYLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsR0FBMEI7SUFFL0MsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDakIsVUFBVSxFQUFFLGFBQWEsQ0FBQyxhQUFhO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0tBQzVELENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCwwQkFPQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFFLEdBQStCLEVBQUUsU0FBaUI7SUFFNUUsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLE1BQU0sRUFBRSxTQUFTO0tBQ3BCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxvQ0FNQzs7Ozs7Ozs7Ozs7Ozs7QUNuaUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7OztBQXdLK0QsQ0FBQztBQTZCQyxDQUFDO0FBc0NILENBQUM7QUFpQ0gsQ0FBQztBQStCSCxDQUFDO0FBK0JXLENBQUM7QUErQkgsQ0FBQztBQWtFZixDQUFDO0FBZ0IzRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOztHQUVHO0FBQ0gsTUFBc0IsYUFBYTs7QUFBbkMsc0NBUUM7QUFOZ0Isa0JBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUN0QyxpQkFBRyxHQUFHLDRCQUE0QixDQUFDO0FBQ25DLG1CQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDdkMsaUJBQUcsR0FBRyxzQ0FBc0MsQ0FBQztBQUM3QyxtQkFBSyxHQUFHLCtCQUErQixDQUFDO0FBQ3hDLG9CQUFNLEdBQUcsb0NBQW9DLENBQUMiLCJmaWxlIjoibWltY3NzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW1jc3NUeXBlcy5qc1wiKTtcbiIsIu+7v2ltcG9ydCAqIGFzIENvbG9yVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIHdpdGhcclxuICogdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MucmdiVG9TdHJpbmcoIHIsIGcsIGIsIGEpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyBodWUtc2F0dXJhdGlvbi1saWdodG5lc3MgY29tcG9uZW50cyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3JcclxuICogdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgSHVlIGNvbXBvbmVudCBpcyB0cmVhdGVkIGFzIHRoZSBDU1MgYDxhbmdsZT5gIHR5cGUuIE51bWJlcnMgYXJlIGNvbnNpZGVyZWQgZGVncmVlcy5cclxuICogXHJcbiAqIFRoZSBTYXR1cmF0aW9uIGFuZCBMaWdodG5lc3MgY29tcG9uZW50cyBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlczpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKlxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gaCBIdWUgY29tcG9uZW50IGFzIGFuIGFuZ2xlIHZhbHVlLlxyXG4gKiBAcGFyYW0gcyBTYXR1cmF0aW9uIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyLCBsOiBudW1iZXIsIGE/OiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmhzbFRvU3RyaW5nKCBoLCBzLCBsLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgdGhlIGFscGhhIG1hc2sgdG8gdGhlIENTUyBDb2xvciByZXByZXNlbnRhdGlvbi4gVGhpc1xyXG4gKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3IgdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIG51bWVyaWMgdmFsdWUgb3IgYXMgYSBzdHJpbmcgY29sb3IgbmFtZS5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGlzIHNwZWNpZmllZCBhcyBhIG51bWJlcjpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVyIDEgdG8gMTAwIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVycyBncmVhdGVyIHRoYW4gMTAwIGFyZSBjbGFtcGVkIHRvIDEwMDtcclxuICogXHJcbiAqIEBwYXJhbSBjIENvbG9yIHZhbHVlIGFzIGVpdGhlciBhIG51bWJlciBvciBhIG5hbWVkIGNvbG9yXHJcbiAqIEBwYXJhbSBhIEFscGhhIGNoYW5uZWwgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgQ29sb3JUeXBlcy5JTmFtZWRDb2xvcnMsIGE6IG51bWJlcik6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuY29sb3JXaXRoQWxwaGFUb1N0cmluZyggYywgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc0FuZ2xlLCBDc3NMZW5ndGh9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuICAgIEdyYWRpZW50U3RvcE9ySGludCwgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgQ3Jvc3NGYWRlUGFyYW0sIElJbWFnZVByb3h5LCBSYWRpYWxHcmFkaWVudFNoYXBlLCBSYWRpYWxHcmFkaWVudFNpemUsIFxyXG4gICAgSUdyYWRpZW50LCBJTGluZWFyR3JhZGllbnQsIElSYWRpYWxHcmFkaWVudCwgSUNvbmljR3JhZGllbnRcclxufSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlVHlwZXNcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge3ZhbDJzdHIsIElOdW1iZXJCYXNlTWF0aENsYXNzLCBDc3NBbmdsZU1hdGgsIHBvczJzdHIsIENzc1BlcmNlbnRNYXRoLCBDc3NMZW5ndGhNYXRofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQgeyBFeHRlbnRLZXl3b3JkIH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JhZGllbnQgY2xhc3MgaW1wbGVtZW50cyB0aGUgSUdyYWRpZW50IGludGVyZmFjZSB1c2luZyBwcm9wZXJ0eSBnZXQgYWNjZXNzb3IsIHdoY2loIGFsbG93c1xyXG4gKiBjcmVhdGVpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGFwcHJvcHJpZW50IGdyYWRpZW50IGludGVyZmFjZS4gV2UgbmVlZCBuZXcgaW5zdGFuY2VzLCBiZWNhdXNlXHJcbiAqIHRoZSBmdW5jdGlvbnMgaW1wbGVtZW50aW5nIHRoZXNlIGNhbGxhYmxlIGludGVyZmFjZXMga2VlcCBvcHRpb25hbCBwYXJhbWV0ZXJzIGFzIHByb3BlcnRpZXMgb2ZcclxuICogdGhlIGZ1Y250aW9uIG9iamVjdHMgdGhlbXNlbHZlcy5cclxuICovXHJcbmNsYXNzIEdyYWRpZW50IGltcGxlbWVudHMgSUdyYWRpZW50XHJcbntcclxuICAgIHB1YmxpYyBnZXQgbGluZWFyKCk6IElMaW5lYXJHcmFkaWVudCB7IHJldHVybiBsaW5lYXJHcmFkaWVudEZ1bmMoIFwibGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0xpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgcmFkaWFsKCk6IElSYWRpYWxHcmFkaWVudCB7IHJldHVybiByYWRpYWxHcmFkaWVudEZ1bmMoIFwicmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ1JhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgY29uaWMoKTogSUNvbmljR3JhZGllbnQgeyByZXR1cm4gY29uaWNHcmFkaWVudEZ1bmMoIFwiY29uaWMtZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgcmVwZWF0aW5nQ29uaWMoKTogSUNvbmljR3JhZGllbnQgeyByZXR1cm4gY29uaWNHcmFkaWVudEZ1bmMoIFwicmVwZWF0aW5nLWNvbmljLWdyYWRpZW50XCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBncmFkaWVudCB2YXJpYWJsZSBwcm92aWRlcyBhY2Nlc3MgdG8gZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgbGV0IGdyYWRpZW50OiBJR3JhZGllbnQgPSBuZXcgR3JhZGllbnQoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjcm9zcy1mYWRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcm9zc0ZhZGUoIC4uLmFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBJSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3MpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIElMaW5lYXJHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgbGluZXItZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctbGluZXItZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElMaW5lYXJHcmFkaWVudFxyXG57XHJcbiAgICBsZXQgZjogYW55ID0gKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eSA9PlxyXG4gICAgICAgICgpID0+IGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5hbmdsZVBhcmFtKTtcclxuXHJcblx0Zi50byA9IChhbmdsZTogTGluZWFyR3JhZEFuZ2xlKSA9PiB7XHJcbiAgICAgICAgZi5hbmdsZVBhcmFtID0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcbiAgICBcclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJUmFkaWFsR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYHJhZGlhbC1ncmFkaWVudGAgb3JcclxuICogYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElSYWRpYWxHcmFkaWVudFxyXG57XHJcbiAgICBsZXQgZjogYW55ID0gKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eSA9PlxyXG4gICAgICAgICgpID0+IHJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5zaGFwZVBhcmFtLCBmLnNpemVQYXJhbSwgZi5wb3NQYXJhbSk7XHJcblxyXG4gICAgZi5jaXJjbGUgPSAoc2l6ZU9yRXh0ZW50PzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaGFwZVBhcmFtID0gXCJjaXJjbGVcIjtcclxuICAgICAgICBmLnNpemVQYXJhbSA9IHNpemVPckV4dGVudDtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5lbGxpcHNlID0gKHNpemVPckV4dGVudD86IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XSB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaGFwZVBhcmFtID0gXCJlbGxpcHNlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZXh0ZW50ID0gKGV4dGVudDogRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pID0+IHtcclxuICAgICAgICBmLnNpemVQYXJhbSA9IGV4dGVudDtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5hdCA9IChwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPikgPT4ge1xyXG4gICAgICAgIGYucG9zUGFyYW0gPSBwb3M7IHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJQ29uaWNHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgY29uaWMtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctY29uaWMtZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb25pY0dyYWRpZW50RnVuYyggbmFtZTogc3RyaW5nKTogSUNvbmljR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5hbmdsZVBhcmFtLCBmLnBvc1BhcmFtKTtcclxuXHJcblx0Zi5mcm9tID0gKGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUpID0+IHtcclxuICAgICAgICBmLmFuZ2xlUGFyYW0gPSBhbmdsZTtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5hdCA9IChwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPikgPT4ge1xyXG4gICAgICAgIGYucG9zUGFyYW0gPSBwb3M7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdHJldHVybiBmO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogTGluZWFyR3JhZEFuZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgYW5nbGVTdHJpbmcgPSB2YWwyc3RyKCBhbmdsZSwge1xyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsXHJcbiAgICAgICAgICAgIGZyb21TdHJpbmc6IHYgPT4gL1xcZCsuKi8udGVzdCh2KSA/IHYgOiBcInRvIFwiICsgdlxyXG4gICAgICAgIH0pICsgXCIsXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7YW5nbGVTdHJpbmd9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBzaGFwZTogUmFkaWFsR3JhZGllbnRTaGFwZSwgc2l6ZU9yRXh0ZW50OiBSYWRpYWxHcmFkaWVudFNpemUgfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPixcclxuICAgIHBvczogQ3NzUG9zaXRpb24pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgc2l6ZU9yRXh0ZW50U3RyaW5nID0gc2l6ZU9yRXh0ZW50ID8gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHNpemVPckV4dGVudCwgXCIgXCIpIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3Myc3RyKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IHNpemVPckV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtzaXplT3JFeHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIHJldHVybiBgJHtuYW1lfSgke3doYXRBbmRXaGVyZX0ke2dyYWRpZW50U3RvcHNPckhpbnRzVG9TdHJpbmcoIHN0b3BzT3JIaW50cywgQ3NzUGVyY2VudE1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbmljR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgYW5nbGU/OiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvcz86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBhbmdsZSA/IGBmcm9tICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKX1gIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3Myc3RyKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IGFuZ2xlIHx8IHBvcyA/IGAke2FuZ2xlU3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc0FuZ2xlTWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHZhbDJzdHIoIGFyZ3MsIHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBgY3Jvc3MtZmFkZSgke3BhcmFtc1N0cmluZ30pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsLm1hcCggdiA9PiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZyggdiwgbWF0aENsYXNzKSkuam9pbihcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogR3JhZGllbnRTdG9wT3JIaW50LFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gdi5sZW5ndGggPT09IDAgPyBcIlwiIDogdi5sZW5ndGggPT09IDEgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdlswXSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudENvbG9yQW5kTGVuZ3RoVG9TdHJpbmcoIHYgYXMgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgbWF0aENsYXNzKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJCYXNlTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzZWNvbmRTdG9wID0gdmFsLmxlbmd0aCA+IDIgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzJdKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7Y29sb3JUb1N0cmluZyh2YWxbMF0pfSAke21hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMV0pfSAke3NlY29uZFN0b3B9YDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nKCB2YWw6IENyb3NzRmFkZVBhcmFtKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYCR7dmFsMnN0cih2WzBdKX0sJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKHZbMV0pfWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBDb21iaW5lZFN0eWxlc2V0LCBJU3R5bGVSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlLCBBbmltYXRpb25GcmFtZSwgSUFuaW1hdGlvblJ1bGUsIElWYXJSdWxlLFxyXG4gICAgSUNvdW50ZXJSdWxlLCBJR3JpZExpbmVSdWxlLCBJR3JpZEFyZWFSdWxlLCBJSW1wb3J0UnVsZSwgSUZvbnRGYWNlUnVsZSwgSU5hbWVzcGFjZVJ1bGUsXHJcbiAgICBJUGFnZVJ1bGUsIFN0eWxlRGVmaW5pdGlvbiwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBJU3VwcG9ydHNSdWxlLCBJTWVkaWFSdWxlXHJcbn0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge3Byb2Nlc3NJbnN0YW5jZU9yQ2xhc3MsIHNfZW5hYmxlU2hvcnROYW1lcywgc2VyaWFsaXplSW5zdGFuY2V9IGZyb20gXCIuLi9ydWxlcy9SdWxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeSwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIlxyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RSdWxlLCBDbGFzc1J1bGUsIElEUnVsZSwgU2VsZWN0b3JSdWxlfSBmcm9tIFwiLi4vcnVsZXMvU3R5bGVSdWxlc1wiXHJcbmltcG9ydCB7QW5pbWF0aW9uUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0FuaW1hdGlvblJ1bGVcIlxyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCJcclxuaW1wb3J0IHtDb3VudGVyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0NvdW50ZXJSdWxlc1wiO1xyXG5pbXBvcnQge0dyaWRMaW5lUnVsZSwgR3JpZEFyZWFSdWxlfSBmcm9tIFwiLi4vcnVsZXMvR3JpZFJ1bGVzXCI7XHJcbmltcG9ydCB7Rm9udEZhY2VSdWxlLCBJbXBvcnRSdWxlLCBOYW1lc3BhY2VSdWxlLCBQYWdlUnVsZX0gZnJvbSBcIi4uL3J1bGVzL01pc2NSdWxlc1wiXHJcbmltcG9ydCB7U3VwcG9ydHNSdWxlLCBNZWRpYVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9Hcm91cFJ1bGVzXCJcclxuaW1wb3J0IHt2YWwyc3RyfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQgeyBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFic3RyYWN0IHJ1bGUsIHdoaWNoIGRlZmluZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBiZSBleHRlbmRlZCBieSBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy4gQWJzdHJhY3QgcnVsZXMgZG9uJ3QgaGF2ZSBzZWxlY3RvcnMgYW5kIGFyZSBub3QgaW5zZXJ0ZWQgaW50byBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFic3RyYWN0KCBzdHlsZTogQ29tYmluZWRTdHlsZXNldCk6IElTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDbGFzc1J1bGUpOiBJQ2xhc3NSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBJRCBydWxlLiBUaGUgSUQgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBJRCBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgSUQuIFN1Y2ggSUQgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpZCggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElJRFJ1bGUpOiBJSURSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IElEUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzZWxlY3RvciBydWxlLiBTZWxlY3RvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgc3RyaW5nIG9yIHZpYSB0aGUgc2VsZWN0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN0eWxlKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlOiBDb21iaW5lZFN0eWxlc2V0KTogSVN0eWxlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBTZWxlY3RvclJ1bGUoIHNlbGVjdG9yLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBhbmltYXRpb24gcnVsZS4gVGhlIGFuaW1hdGlvbiBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGFuaW1hdGlvbiBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0b1xyXG4gKiBcImRlY2xhcmVcIiB0aGUgYW5pbWF0aW9uLiBTdWNoIGFuaW1hdGlvbiBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXNcclxuICogb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGtleWZyYW1lcyggZnJhbWVzPzogQW5pbWF0aW9uRnJhbWVbXSxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZSk6IElBbmltYXRpb25SdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEFuaW1hdGlvblJ1bGUoIGZyYW1lcywgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGN1c3RvbSB2YXJpYWJsZSBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVGhlIHZhcmlhYmxlIG5hbWUgd2lsbFxyXG4gKiBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZVxyXG4gKiBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY3VzdG9tIHZhcmlhYmxlIHJ1bGUuIFRoZVxyXG4gKiBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgdmFsdWUganVzdCB0byBcImRlY2xhcmVcIiB0aGUgdmFyaWFibGUuIFN1Y2hcclxuICogdmFyaWFibGUgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHRlbXBsYXRlOiBLLCBwcm9wVmFsPzogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0XHRcdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+KTogSVZhclJ1bGU8Sz5cclxue1xyXG5cdHJldHVybiBuZXcgVmFyUnVsZSggdGVtcGxhdGUsIHByb3BWYWwsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjb3VudGVyIG9iamVjdC4gVGhlIGNvdW50ZXIgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjb3VudGVyIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNvdW50ZXIoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZSk6IElDb3VudGVyUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGdyaWQgbGluZSBvYmplY3QuIFRoZSBsaW5lIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgZ3JpZCBsaW5lIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGdyaWRsaW5lKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZExpbmVSdWxlLFxyXG4gICAgaXNTdGFydEVuZE9yTm9uZT86IGJvb2xlYW4pOiBJR3JpZExpbmVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEdyaWRMaW5lUnVsZSggbmFtZU92ZXJyaWRlLCBpc1N0YXJ0RW5kT3JOb25lKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGdyaWQgYXJlYSBvYmplY3QuIFRoZSBhcmVhIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgZ3JpZCBhcmVhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGdyaWRhcmVhKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZEFyZWFSdWxlKTogSUdyaWRBcmVhUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBHcmlkQXJlYVJ1bGUoIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBpbXBvcnQgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaW1wb3J0KCB1cmw6IHN0cmluZywgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnksXHJcblx0c3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpOiBJSW1wb3J0UnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB1cmwsIG1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnkpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZm9udC1mYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGZvbnRmYWNlKCBmb250ZmFjZTogSUZvbnRGYWNlKTogSUZvbnRGYWNlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIGZvbnRmYWNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRuYW1lc3BhY2UoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBJTmFtZXNwYWNlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCBuYW1lc3BhY2UsIHByZWZpeCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHBhZ2UoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KTogSVBhZ2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCBwc2V1ZG9DbGFzcywgc3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3VwcG9ydHM8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LFxyXG4gICAgaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBJU3VwcG9ydHNSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IFN1cHBvcnRzUnVsZSggcXVlcnksIGluc3RPckNsYXNzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG1lZGlhPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuICAgIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cmV0dXJuIG5ldyBNZWRpYVJ1bGUoIHF1ZXJ5LCBpbnN0T3JDbGFzcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgY3JlYXRlcyB1bmlxdWUgbmFtZXMgZm9yIGFsbCBuYW1lZFxyXG4gKiBlbnRpdGllcy4gRm9yIGEgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvbmx5IGEgc2luZ2xlIGluc3RhbmNlIGlzIGNyZWF0ZWQsIG5vIG1hdHRlciBob3dcclxuICogbWFueSB0aW1lcyB0aGlzIGZ1bmN0aW9uIGlzIGludm9rZWQuIEhvd2V2ZXIsIGlmIGFuIGluc3RhbmNlLCB3aGljaCBoYXMgbm90IHlldCBiZWVuIHByb2Nlc3NlZCxcclxuICogaXMgcGFzc2VkLCB0aGVuIGEgbmV3IHNldCBvZiB1bmlxdWUgbmFtZXMgd2lsbCBiZSBjcmVhdGVkIGZvciBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHRyZXR1cm4gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3MpIGFzIFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVtYmVkcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbnRvIGFub3RoZXIgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuIFdoZW4gYWN0aXZhdGVkLFxyXG4gKiB0aGUgZW1iZWRkZWQgb2JqZWN0IGRvZXNuJ3QgY3JlYXRlIGl0cyBvd24gYDxzdHlsZT5gIGVsZW1lbnQgYnV0IHVzZXMgdGhhdCBvZiBpdHMgb3duZXIuIFRoaXNcclxuICogYWxsb3dzIGNyZWF0aW5nIG1hbnkgc21hbGwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGluc3RlYWQgb2Ygb25lIGh1Z2Ugb25lIHdpdGhvdXQgaW5jdXJyaW5nXHJcbiAqIHRoZSBvdmVyaGVhZCBvZiBtYW55IGA8c3R5bGU+YCBlbGVtZW50cy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCBhcyBvcHBvc2VkIHRvIHRoZSAkdXNlIGZ1bmN0aW9uLCB0aGUgJGVtYmVkIGZ1bmN0aW9uIGFsd2F5cyBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mXHJcbiAqIHRoZSBnaXZlbiBjbGFzcyBhbmQgZG9lc24ndCBhc3NvY2lhdGUgdGhlIGNsYXNzIHdpdGggdGhlIGNyZWF0ZWQgaW5zdGFuY2UuIFRoYXQgbWVhbnMgdGhhdCBpZlxyXG4gKiBhIGNsYXNzIGlzIGVtYmVkZGVkIGludG8gbW9yZSB0aGFuIG9uZSBcIm93bmVyXCIsIHR3byBzZXBhcmF0ZSBpbnN0YW5jZXMgb2YgZWFjaCBDU1MgcnVsZSB3aWxsIGJlXHJcbiAqIGNyZWF0ZWQgd2l0aCBkaWZmZXJlbnQgdW5pcXVlIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRlbWJlZDxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0Ly8gcmV0dXJuIGRlZmluaXRpb24gaW5zdGFuY2Ugd2l0aG91dCBwcm9jZXNzaW5nIGl0LiBUaGlzIGlzIHRoZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGRlZmludGlvblxyXG5cdC8vIHdpbGwgYmUgZW1iZWRkZWQgaW50byBhbm90aGVyIGRlZmluaXRpb24uXHJcblx0cmV0dXJuIGluc3RPckNsYXNzIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uID8gaW5zdE9yQ2xhc3MgOiBuZXcgaW5zdE9yQ2xhc3MoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVNob3J0TmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0cmV0dXJuIHNfZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlLCBwcmVmaXgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25jYXRlbmF0ZXMgdGhlIG5hbWVzIG9mIHRoZSBnaXZlbiBjbGFzc2VzIGludG8gYSBzaW5nbGUgc3RyaW5nIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIGFcclxuICogYGNsYXNzYCBwcm9wZXJ0eSBvZiBhbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBjbGFzc2VzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlcyggLi4uY2xhc3NlczogKElDbGFzc1J1bGUgfCBFeHRlbmRlZDxzdHJpbmc+KVtdKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdmFsMnN0ciggY2xhc3Nlcywge1xyXG5cdFx0YXJySXRlbUZ1bmM6IHYgPT4gdiBpbnN0YW5jZW9mIENsYXNzUnVsZSA/IHYubmFtZSA6IHZhbDJzdHIodilcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdHlsZVNlcmlhbGl6YXRpb25Db250ZXh0IGludGVyZmFjZSBhbGxvd3MgYWRkaW5nIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgb2JqZWN0c1xyXG4gKiBhbmQgc2VyaWFsaXppbmcgdGhlbSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuXHJcbiAqIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZSBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1NlcmlhbGl6ZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIGFkZCggaW5zdE9yQ2xhc3M6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGNvbmNhdGVuYXRlZCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYWxsIENTUyBydWxlcyBhZGRlZCB0byB0aGUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgc2VyaWFsaXplKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBJQ3NzU2VyaWFsaXplciBvYmplY3QgdGhhdCBhbGxvd3MgYWRkaW5nIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlc1xyXG4gKiBhbmQgaW5zdGFuY2VzIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3NzU2VyaWFsaXplcigpOiBJQ3NzU2VyaWFsaXplclxyXG57XHJcbiAgICByZXR1cm4gbmV3IENzc1NlcmlhbGl6ZXIoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2VyaWFsaXplcyBvbmUgb3IgbW9yZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIGluc3RhbmNlcyBhbmQgcmV0dXJucyB0aGVpciBDU1Mgc3RyaW5nXHJcbiAqIHJlcHJlc2VudGF0aW9uLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlbiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmVcclxuICogc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplVG9DU1MoIGFyZzE6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuICAgIC4uLmFyZ3M6IChTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MpW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNlcmlhbGl6ZXIgPSBuZXcgQ3NzU2VyaWFsaXplcigpO1xyXG4gICAgc2VyaWFsaXplci5hZGQoIGFyZzEpO1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcclxuICAgICAgICBhcmdzLmZvckVhY2goIGluc3RPckNsYXNzID0+IHNlcmlhbGl6ZXIuYWRkKCBpbnN0T3JDbGFzcykpO1xyXG5cclxuICAgIHJldHVybiBzZXJpYWxpemVyLnNlcmlhbGl6ZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTZXJpYWxpemVyIGNsYXNzIGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBvYmplY3RzXHJcbiAqIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuY2xhc3MgQ3NzU2VyaWFsaXplciBpbXBsZW1lbnRzIElDc3NTZXJpYWxpemVyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RPckNsYXNzKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlIHx8IHRoaXMuaW5zdGFuY2VzLmhhcyhpbnN0YW5jZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuYWRkKCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGNvbmNhdGVuYXRlZCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYWxsIENTUyBydWxlcyBhZGRlZCB0byB0aGUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgY3R4ID0gbmV3IFJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goIGluc3RhbmNlID0+IGN0eC5hZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlKSk7XHJcbiAgICAgICAgcmV0dXJuIGN0eC50b3BMZXZlbEJ1ZiArIGN0eC5ub25Ub3BMZXZlbEJ1ZjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgb2Ygc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZXMuIFRoaXMgaXMgbmVlZGVkIHRvIG5vdCBhZGQgc3R5bGUgZGVmaW5pdGlvbnMgbW9yZSB0aGFuIG9uY2VcclxuICAgIGluc3RhbmNlcyA9IG5ldyBTZXQ8U3R5bGVEZWZpbml0aW9uPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTZXJpYWxpemVyIGNsYXNzIGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBvYmplY3RzXHJcbiAqIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuY2xhc3MgUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0IGltcGxlbWVudHMgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dFxyXG57XHJcbiAgICAvLyBBZGRzIHJ1bGUgdGV4dFxyXG4gICAgcHVibGljIGFkZFJ1bGVUZXh0KCBzOiBzdHJpbmcsIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoaXNUb3BMZXZlbFJ1bGUpXHJcbiAgICAgICAgICAgIHRoaXMudG9wTGV2ZWxCdWYgKz0gcyArIFwiXFxuXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vblRvcExldmVsQnVmICs9IHMgKyBcIlxcblwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBwdWJsaWMgYWRkU3R5bGVEZWZpbml0aW9uKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXMuaGFzKCBpbnN0YW5jZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5hZGQoIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgc2VyaWFsaXplSW5zdGFuY2UoIGluc3RhbmNlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RyaW5nIGJ1ZmZlciB0aGF0IGFjY3VtdWxhdGVzIHRvcC1sZXZlbCBydWxlIHRleHRzLlxyXG4gICAgcHVibGljIHRvcExldmVsQnVmID0gXCJcIjtcclxuXHJcbiAgICAvLyBTdHJpbmcgYnVmZmVyIHRoYXQgYWNjdW11bGF0ZXMgbm9uLXRvcC1sZXZlbCBydWxlIHRleHRzLlxyXG4gICAgcHVibGljIG5vblRvcExldmVsQnVmID0gXCJcIjtcclxuXHJcbiAgICAvLyBTZXQgb2Ygc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZXMgdGhhdCB3ZXJlIGFscmVhZHkgc2VyaWFsaXplZCBpbiB0aGlzIGNvbnRleHQuXHJcbiAgICBwcml2YXRlIGluc3RhbmNlcyA9IG5ldyBTZXQ8U3R5bGVEZWZpbml0aW9uPigpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U3R5bGVEZWZpbml0aW9uLCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIElTY2hlZHVsZXJ9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtwcm9jZXNzSW5zdGFuY2VPckNsYXNzfSBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1xyXG4gICAgc19zY2hlZHVsZUNhbGwsIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUsIHNfZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUsXHJcbiAgICBJQWN0aXZhdG9yLCBzX3JlZ2lzdGVyU2NoZWR1bGVyLCBzX3VucmVnaXN0ZXJTY2hlZHVsZXJcclxufSBmcm9tIFwiLi4vcnVsZXMvU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmXHJcbiAqIHRoZSBpbnB1dCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIGJ1dCBhIGNsYXNzLCB3aGljaCBpcyBub3QgeWV0IGFzc29jaWF0ZWQgd2l0aCBhbiBpbnN0YW5jZSxcclxuICogdGhlIGluc3RhbmNlIGlzIGZpcnN0IGNyZWF0ZWQgYW5kIHByb2Nlc3NlZC4gTm90ZSB0aGF0IGVhY2ggc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnNcclxuICogYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSBvbmx5IHVwb24gZmlyc3QgYWN0aXZhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPihcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4sXHJcblx0c2NoZWR1bGVyVHlwZT86IG51bWJlcik6IFQgfCBudWxsXHJcbntcclxuXHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcblx0aWYgKGluc3RhbmNlKVxyXG5cdFx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5hY3RpdmF0ZSggaW5zdGFuY2UpLCBzY2hlZHVsZXJUeXBlKTtcclxuXHJcblx0cmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmRcclxuICogZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlciBnb2VzIGRvd24gdG8gMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5kZWFjdGl2YXRlKCBpbnN0YW5jZSksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgdG8gRE9NIGFsbCBzdHlsZSBjaGFuZ2VzIGNhdXNlZCBieSB0aGUgY2FsbHMgdG8gdGhlIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9uc1xyXG4gKiBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdCBhY3RpdmF0aW9uIG9mIHRoZSBnaXZlbiBzY2hlZHVsaW5nIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VET01VcGRhdGUoIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmZvcmNlRE9NVXBkYXRlKCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFsbCBzY2hlZHVsZWQgYWN0aXZhdGlvbnMgY2F1c2VkIGJ5IHRoZSBjYWxscyB0byB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zXHJcbiAqIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0IGFjdGl2YXRpb24gb2YgdGhlIGdpdmVuIHNjaGVkdWxpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxET01VcGRhdGUoIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmNhbmNlbERPTVVwZGF0ZSgpLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgYnkgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHRoYXQgYXJlXHJcbiAqIGNhbGxlZCB3aXRob3V0IGV4cGxpY2l0bHkgcHJvdmlkaW5nIHZhbHVlIHRvIHRoZSBzY2hlZHVsZXIgdHlwZSBwYXJhbWV0ZXIuIFJldHVybnMgdGhlIHR5cGUgb2ZcclxuICogdGhlIHByZXZpb3VzIGRlZmF1bHQgc2NoZWR1bGVyIG9yIDAgaWYgYW4gZXJyb3Igb2NjdXJzIChlLmcuIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBJRCBpcyBub3RcclxuICogcmVnaXN0ZXJlZCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGU6IG51bWJlcik6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxlciB0eXBlIHBhcmFtZXRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGVyVHlwZSgpOiBudW1iZXJcclxue1xyXG5cdHJldHVybiBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciwgd2hpY2hcclxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNjaGVkdWxlciggc2NoZWR1bGVyOiBJU2NoZWR1bGVyKTogbnVtYmVyXHJcbntcclxuICAgIHJldHVybiBzX3JlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBVbnJlZ2lzdGVycyBhIHNjaGVkdWxlciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZDogbnVtYmVyKTogdm9pZFxyXG57XHJcbiAgICByZXR1cm4gc191bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc0xlbmd0aCwgQ3NzUGVyY2VudCwgQ3NzQW5nbGUsIENzc051bWJlciwgT25lT3JCb3gsIENzc1BvaW50fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7U2VsZWN0b3JJdGVtLCBJU2VsZWN0b3JQcm94eX0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7XHJcblx0U3R5bGVzZXQsIEV4dGVuZGVkU3R5bGVzZXQsIFN0cmluZ1N0eWxlc2V0LCBFeHRlbnRLZXl3b3JkLCBJRmlsdGVyUHJveHksIElCYXNpY1NoYXBlUHJveHksXHJcblx0SVRyYW5zZm9ybVByb3h5LCBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlLCBGaWxsUnVsZV9TdHlsZVR5cGUsIElQYXRoQnVpbGRlciwgSVJheVByb3h5LFxyXG5cdElGaXRDb250ZW50UHJveHksIElSZXBlYXRQcm94eSwgSU1pbk1heFByb3h5LCBHcmlkVHJhY2tTaXplLCBHcmlkVHJhY2ssIElTcGFuUHJveHksIEdyaWRMaW5lQ291bnRPck5hbWVcclxufSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge1xyXG5cdHN0eWxlUHJvcFRvU3RyaW5nLCBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCwgYm9yZGVyUmFkaXVzVG9TdHJpbmcsIGZvckFsbFByb3BzSW5TdHlsc2V0LCBncmlkVHJhY2tUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7XHJcblx0Q3NzUGVyY2VudE1hdGgsIENzc0xlbmd0aE1hdGgsIGFycjJzdHIsIENzc0FuZ2xlTWF0aCwgQ3NzTnVtYmVyTWF0aCwgcG9zMnN0cixcclxuXHR0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nLCB2YWwyc3RyXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4uL3J1bGVzL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3Rvci4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZVxyXG4gKiBpbnZva2VkIHdpdGggdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yKCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogU2VsZWN0b3JJdGVtW10pOiBJU2VsZWN0b3JQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0eWxlc2V0IG1hbmlwdWxhdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byBhIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BOYW1lIFN0eWxlIHByb3BlcnR5IG5hbWUgdGhhdCBkZXRlcm1pbmVzIGhvdyB0aGUgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZFxyXG4gKiB0byBhIENTUyBjb21wbGlhbnQgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVQcm9wVmFsdWUgVmFsdWUgdG8gY29udmVydC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZVByb3BWYWx1ZTxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIHN0eWxlUHJvcE5hbWU6IEssXHJcblx0c3R5bGVQcm9wVmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiBzdHlsZVByb3BUb1N0cmluZyggc3R5bGVQcm9wTmFtZSwgc3R5bGVQcm9wVmFsdWUsIHRydWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3R5bGVzZXQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG5cdHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtLCBzdHlsZXNldCA/IHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldChzdHlsZXNldCkgOiBudWxsLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHJpbmdTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuXHRzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcbiAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggZWxtLCBudWxsLCBzdHlsZXNldCwgZmFsc2UsIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gW1tTdHlsZXNldF1dIG9iamVjdCBpbnRvIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBTdHlsZXNldCdzIHByb3BlcnR5IGlzXHJcbiAqIGNvbnZlcnRlZCB0byBpdHMgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBzdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldFxyXG57XHJcblx0bGV0IHJlczogU3RyaW5nU3R5bGVzZXQgPSB7fTtcclxuXHJcblx0Zm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0LFxyXG5cdFx0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4geyByZXNbbmFtZV0gPSB2YWx1ZSB9KTtcclxuXHJcblx0cmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgdHdvIFN0eWxlc2V0IG9iamVjdHMgYnkgY29udmVydGluZyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHN0cmluZ3MgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcbiAqIHRoYXQgY29udGFpbnMgc3RyaW5nIHZhbHVlcyBvZiBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBuZXcgb3IgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGluIHRoZSBuZXdcclxuICogc3R5bGVzZXQgYW5kIHVuZGVmaW5lZCB2YWx1ZXMgZm9yIHByb3BlcnRpZXMgdGhhdCBleGlzdCBpbiB0aGUgb2xkIHN0eWxlc2V0IGJ1dCBkb24ndCBleGlzdFxyXG4gKiBpbiB0aGUgbmV3IG9uZS5cclxuICogQHBhcmFtIG9sZFN0eWxlc2V0IFxyXG4gKiBAcGFyYW0gbmV3U3R5bGVzZXQgXHJcbiAqIEByZXR1cm5zIFN0cmluZ1N0eWxlc2V0IG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG9sZCBhbmQgbmV3XHJcbiAqIHN0eWxlc2V0cy4gUHJvcGVydGllcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIG9sZCBidXQgZG9uJ3QgZXhpc3QgaW4gdGhlIG5ldyBzdHlsZXNldCwgd2lsbCBoYXZlXHJcbiAqIHRoZWlyIHZhbHVlcyBzZXQgdG8gdW5kZWZpbmVkLiBJZiB0aGVyZSBpcyBubyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gc3R5bGVzZXRzIG51bGwgaXNcclxuICogcmV0dXJuZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZlN0eWxlc2V0cyggb2xkU3R5bGVzZXQ6IFN0eWxlc2V0LCBuZXdTdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldCB8IG51bGxcclxue1xyXG5cdGlmICghb2xkU3R5bGVzZXQgJiYgIW5ld1N0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIW9sZFN0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cdGVsc2UgaWYgKCFuZXdTdHlsZXNldClcclxuXHRcdHJldHVybiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG9sZFN0eWxlc2V0KTtcclxuXHJcblx0Ly8gZmlyc3QgY29udmVydCBib3RoIHN0eWxlc2V0cyB0byB0aGVpciBzdHJpbmcgdmVyc2lvbnNcclxuXHRsZXQgb2xkU3RyaW5nU3R5bGVzZXQgPVx0c3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBvbGRTdHlsZXNldCk7XHJcblx0bGV0IG5ld1N0cmluZ1N0eWxlc2V0ID1cdHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cclxuXHRsZXQgdXBkYXRlVmFsOiBTdHJpbmdTdHlsZXNldCB8IG51bGwgPSBudWxsO1xyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgb2xkIHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG5ldyBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBvbGRTdHJpbmdTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgbmV3U3RyaW5nVmFsID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChuZXdTdHJpbmdWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHR1cGRhdGVWYWxba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9sZFN0cmluZ1ZhbCA9IG9sZFN0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRcdGlmIChvbGRTdHJpbmdWYWwgIT09IG5ld1N0cmluZ1ZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IG5ld1N0cmluZ1ZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG5ldyBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBvbGQgb25lLiBUaGVzZVxyXG5cdC8vIHdpbGwgYmUgYWRkZWQuXHJcblx0Zm9yKCBsZXQga2V5IGluIG5ld1N0cmluZ1N0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGxldCBvbGRTdHJpbmdWYWwgPSBvbGRTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0aWYgKG9sZFN0cmluZ1ZhbCA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB1cGRhdGVWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRmlsdGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRpbmcgcGVyY2VudCB2YWx1ZSB0byBpbnZvY2F0aW9uIG9mIHRoZSBnaXZlbiBDU1MgZnVuY3Rpb24uXHJcbmZ1bmN0aW9uIHBlcmNlbnRGaWx0ZXIoIG5hbWU6IHN0cmluZywgYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBicmlnaHRuZXNzKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBicmlnaHRuZXNzKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImJyaWdodG5lc3NcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY29udHJhc3QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyYXN0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImNvbnRyYXN0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGdyYXlzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JheXNjYWxlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImdyYXlzY2FsZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnZlcnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVydCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJpbnZlcnRcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgb3BhY2l0eSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3BhY2l0eSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJvcGFjaXR5XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNhdHVyYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXR1cmF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzYXR1cmF0ZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzZXBpYSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwaWEoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2VwaWFcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYmx1cigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmx1ciggcmFkaXVzOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYmx1cigke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggcmFkaXVzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZHJvcFNoYWRvdygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSB4IEhvcml6b250YWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSB5IFZlcnRpY2FsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3Igb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGJsdXIgVmFsdWUgb2YgdGhlIHNoYWRvdydzIGJsdXJyaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxIHBpeGVsLlxyXG4gKiBAcGFyYW0gc3ByZWFkIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBzcHJlYWRpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXHJcbiAqIEBwYXJhbSBpbnNldCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2hhZG93IGdvZXMgaW5zaWRlIHRoZSBzaGFwZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHJvcFNoYWRvdyhcclxuICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHNwcmVhZD86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBgZHJvcC1zaGFkb3coJHtzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggeyB4LCB5LCBjb2xvciwgYmx1ciwgc3ByZWFkfSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGh1ZS1yb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh1ZVJvdGF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBodWUtcm90YXRlKCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyBzaGFwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaW5zZXQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2V0KCBvZmZzZXQ6IEV4dGVuZGVkPE9uZU9yQm94PENzc0xlbmd0aD4+LCByYWRpdXM/OiBFeHRlbmRlZDxCb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdGxldCByID0gcmFkaXVzICE9IG51bGwgPyBcInJvdW5kIFwiICsgYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHJhZGl1cykgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBpbnNldCgke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBvZmZzZXQsIFwiIFwiKX0ke3J9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgYSByYWRpdXMgaW4gW1tjaXJjbGVdXSBhbmQgW1tlbGxpcHNlXV0gZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSYWRpdXMgPSBFeHRlbmRlZDxDc3NMZW5ndGggfCBcImNsb3Nlc3Qtc2lkZVwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNpcmNsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlKCBjZW50ZXI/OiBTaGFwZVJhZGl1cywgcG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBJQmFzaWNTaGFwZVByb3h5XHJcbntcclxuICAgIGxldCBjID0gIGNlbnRlciAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKGNlbnRlcikgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3Myc3RyKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBjaXJjbGUoJHtjfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZWxsaXBzZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzZSggcng/OiBTaGFwZVJhZGl1cywgcnk/OiBTaGFwZVJhZGl1cyxcclxuXHRwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IHJ4cyA9ICByeCAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ4KSA6IFwiXCI7XHJcbiAgICBsZXQgcnlzID0gIHJ5ICE9IG51bGwgPyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhyeSkgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3Myc3RyKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBlbGxpcHNlKCR7cnhzfSR7cnlzfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcG9seWdvbigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbiggcG9pbnRPclJ1bGU6IENzc1BvaW50IHwgRmlsbFJ1bGVfU3R5bGVUeXBlLFxyXG5cdC4uLnBvaW50czogQ3NzUG9pbnRbXSk6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzID0gXCJwb2x5Z29uKFwiO1xyXG5cdFx0aWYgKHR5cGVvZiBwb2ludE9yUnVsZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cyArPSBwb2ludE9yUnVsZSArIFwiLFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IGAke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBwb2ludE9yUnVsZSwgXCIgXCIpfSxgO1xyXG5cclxuXHRcdHMgKz0gcG9pbnRzLm1hcCggcHQgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHB0LCBcIiBcIikpLmpvaW4oXCIsXCIpO1xyXG5cclxuXHRcdHJldHVybiBzICsgXCIpXCI7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUmF5UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmF5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXkoIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4sIHNpemU/OiBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkIHwgQ3NzTGVuZ3RoPixcclxuXHRjb250YWluPzogYm9vbGVhbik6IElSYXlQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IGFuZ2xlU3RyaW5nID0gQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKTtcclxuXHRcdGxldCBzaXplU3RyaW5nID0gc2l6ZSA9ISBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHNpemUpIDogXCJcIjtcclxuXHRcdGxldCBjb250YWluU3RyaW5nID0gY29udGFpbiA/IFwiLGNvbnRhaW5cIiA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYHJheSgke2FuZ2xlU3RyaW5nfSR7c2l6ZVN0cmluZ30ke2NvbnRhaW5TdHJpbmd9KWA7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUGF0aEJ1aWxkZXIgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIGJ1aWxkaW5nIGEgQ1NTIHBhdGguXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGF0aCggZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGUpOiBJUGF0aEJ1aWxkZXJcclxue1xyXG5cdHJldHVybiBuZXcgUGF0aEJ1aWxkZXIoIGZpbGxSdWxlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXRoQnVpbGRlciBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgb2JqZWN0IHRoYXQgYWNjdW11bGF0ZXMgcGF0aCBjb21tYW5kcyB0aGF0IGFyZSB0aGVuXHJcbiAqIGNvbnZlcnRlZCB0byBhIHN0cmluZyBwYXJhbWV0ZXIgb2YgdGhlIENTUyBgcGF0aCgpYCBmdW5jdGlvbi5cclxuICovXHJcbmNsYXNzIFBhdGhCdWlsZGVyIGltcGxlbWVudHMgSVBhdGhCdWlsZGVyXHJcbntcclxuXHRwcml2YXRlIGJ1Zjogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZpbGxSdWxlPzogRmlsbFJ1bGVfU3R5bGVUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuYnVmID0gXCJwYXRoKFwiO1xyXG5cdFx0aWYgKGZpbGxSdWxlKVxyXG5cdFx0XHR0aGlzLmJ1ZiArPSBmaWxsUnVsZSArIFwiLFwiO1xyXG5cclxuXHRcdHRoaXMuYnVmICs9IFwiJ1wiO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgc3RyaW5nXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKSA6IHN0cmluZyB7IHJldHVybiB0aGlzLmJ1ZiArIFwiJylcIjsgfVxyXG5cclxuXHJcblx0XHJcbiAgICAvLyBNb3ZlLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRwcml2YXRlIGl0ZW1zKCBjb21tYW5kOiBzdHJpbmcsIC4uLml0ZW1zOiAobnVtYmVyIHwgbnVtYmVyW10pW10pOiBJUGF0aEJ1aWxkZXJcclxuXHR7XHJcblx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIGNvbW1hbmQ7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaXRlbSBvZiBpdGVtcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBpdGVtID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdHRoaXMuYnVmICs9IFwiIFwiICsgaXRlbTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgc3ViSXRlbSBvZiBpdGVtKVxyXG5cdFx0XHRcdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBzdWJJdGVtO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgTSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiTVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBtKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJtXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgTCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiTFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBsKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJsXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgSCggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiSFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBoKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJoXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgViggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiVlwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyB2KCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJ2XCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgQyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiQ1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgYyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiY1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiU1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgcyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJzXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgUSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJRXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBxKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBUKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJUXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIHQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInRcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBBKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIkFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIGEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiYVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIHooKSB7IHRoaXMuYnVmICs9IFwiIHpcIjsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmFuc2Zvcm1zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWF0cml4KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgoIGE6IEV4dGVuZGVkPENzc051bWJlcj4sIGI6IEV4dGVuZGVkPENzc051bWJlcj4sIGM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0ZDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHg6IEV4dGVuZGVkPENzc051bWJlcj4sIHR5OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyMnN0ciggW2EsIGIsIGMsIGQsIHR4LCB0eV0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4M2QoXHJcblx0XHRhMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjE6IEV4dGVuZGVkPENzc051bWJlcj4sIGMxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGEyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzI6IEV4dGVuZGVkPENzc051bWJlcj4sIGQyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTM6IEV4dGVuZGVkPENzc051bWJlcj4sIGIzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGM0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHQpOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnIyc3RyKCBbYTEsIGIxLCBjMSwgZDEsIGEyLCBiMiwgYzIsIGQyLCBhMywgYjMsIGMzLCBkMywgYTQsIGI0LCBjNCwgZDRdLCB1bmRlZmluZWQsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcGVyc3BlY3RpdmUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKCBkOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgcGVyc3BlY3RpdmUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoZCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gQ1NTIHJvdGF0aW9uIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gcm90YXRlSW1wbCggbmFtZTogc3RyaW5nLCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWFwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWSggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVlcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVooIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVaXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlM2QoXHJcblx0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHkpLFxyXG5cdFx0Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHopLCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHJvdGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKCBjeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k/OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUoJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoY3gpfSR7c3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gc2NhbGUgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gc2NhbGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWCggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWFwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVkoIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVlcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVaKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVaXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTNkKCBzeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0c3o6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeCksIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3opXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXcoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXcoIGF4OiBFeHRlbmRlZDxDc3NBbmdsZT4sIGF5PzogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tldygke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0ke2F5ICE9IG51bGwgPyBcIixcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WCggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3WSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tld1koIGF5OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk/OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgdHJhbnNsYXRlKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpfSR7eSAhPSBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHRyYW5zbGF0ZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVYKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVhcIiwgeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVkoIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWVwiLCB5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWiggejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVaXCIsIHopO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlM2QoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcblx0ejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gR3JpZCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaXRDb250ZW50UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZml0LWNvbnRlbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpdENvbnRlbnQoIHNpemU6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRml0Q29udGVudFByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgZml0LWNvbnRlbnQoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoc2l6ZSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSU1pbk1heFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1pbm1heCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWlubWF4KCBtaW46IEdyaWRUcmFja1NpemUsIG1heDogR3JpZFRyYWNrU2l6ZSk6IElNaW5NYXhQcm94eVxyXG57XHJcbiAgICBsZXQgb3B0aW9ucyA9IHsgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyB9O1xyXG4gICAgcmV0dXJuICgpID0+IGBtaW5tYXgoJHt2YWwyc3RyKCBtaW4sIG9wdGlvbnMpfSwke3ZhbDJzdHIoIG1heCwgb3B0aW9ucyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVJlcGVhdFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJlcGVhdCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KCBjb3VudDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiB8IFwiYXV0by1maWxsXCIgfCBcImF1dG8tZmlsbFwiLFxyXG4gICAgLi4udHJhY2tzOiBHcmlkVHJhY2tbXSk6IElSZXBlYXRQcm94eVxyXG57XHJcbiAgICAvLyByZXR1cm4gKCkgPT4gYHJlcGVhdCgke3ZhbDJzdHIoY291bnQpfSwke3N0eWxlUHJvcFRvU3RyaW5nKCBcImdyaWRUZW1wbGF0ZVJvd3NcIiwgdHJhY2tzLCB0cnVlKX0pYDtcclxuICAgIHJldHVybiAoKSA9PiBgcmVwZWF0KCR7dmFsMnN0cihjb3VudCl9LCR7dmFsMnN0ciggdHJhY2tzLCB7IGFyckl0ZW1GdW5jOiBncmlkVHJhY2tUb1N0cmluZyB9KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJU3BhblByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgc3BhbiBleHByZXNzaW9uIGZvciBncmlkIGxheW91dHMuIElmIHRoZSBmaXJzdFxyXG4gKiBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIHRoZSBzZWNvbmQgcGFyYW1ldGVyIChpZiBkZWZpbmVkKSBtdXN0IGJlIGEgbmFtZTsgaWYgdGhlIGZpcnN0IHBhcmFtZXRlclxyXG4gKiBpcyBhIG5hbWUsIHRoZSBzZWNvbmQgcGFyYW1ldGVyIChpZiBkZWZpbmVkKSBtdXN0IGJlIGEgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oIGNvdW50T3JOYW1lOiBFeHRlbmRlZDxHcmlkTGluZUNvdW50T3JOYW1lPixcclxuICAgIG5hbWVPckNvdW50PzogRXh0ZW5kZWQ8R3JpZExpbmVDb3VudE9yTmFtZT4pOiBJU3BhblByb3h5XHJcbntcclxuICAgIGxldCBmaXJzdEVsbSA9IHZhbDJzdHIoY291bnRPck5hbWUpO1xyXG4gICAgbGV0IHNlY29uZEVsbSA9IG5hbWVPckNvdW50ID8gdmFsMnN0ciggbmFtZU9yQ291bnQpIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgc3BhbiAke2ZpcnN0RWxtfSAke3NlY29uZEVsbX1gO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcblx0SUNzc051bWJlck1hdGgsIElDc3NMZW5ndGhNYXRoLCBJQ3NzQW5nbGVNYXRoLCBJQ3NzVGltZU1hdGgsIElDc3NSZXNvbHV0aW9uTWF0aCxcclxuICAgIElDc3NGcmVxdWVuY3lNYXRoLCBJQ3NzUGVyY2VudE1hdGgsIEV4dGVuZGVkLCBJU3RyaW5nUHJveHksIElVcmxQcm94eSxcclxuICAgIEF0dHJUeXBlS2V5d29yZCwgQXR0clVuaXRLZXl3b3JkLCBJTGVuZ3RoUHJveHksIElQZXJjZW50UHJveHksIElBbmdsZVByb3h5LFxyXG4gICAgSVRpbWVQcm94eSwgSVJlc29sdXRpb25Qcm94eSwgSUZyZXF1ZW5jeVByb3h5LCBJUXVvdGVkUHJveHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcblx0Q3NzTnVtYmVyTWF0aCwgQ3NzTGVuZ3RoTWF0aCwgQ3NzQW5nbGVNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzUmVzb2x1dGlvbk1hdGgsXHJcblx0Q3NzRnJlcXVlbmN5TWF0aCwgQ3NzUGVyY2VudE1hdGgsIHZhbDJzdHIsIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmdcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7SVZhclJ1bGUsIElDb3VudGVyUnVsZSwgSUlEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge1ZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3R5bGVQcm9wVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPG51bWJlcj5gXHJcbiAqIENTUyB0eXBlLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIEphdmFTY3JpcHQgdHlwZSB0aGV5IGFyZVxyXG4gKiBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB3aXRob3V0IGFwcGVuZGluZyBhbnkgdW5pdHMgdG8gdGhlbS5cclxuICovXHJcbmV4cG9ydCBsZXQgTnVtOiBJQ3NzTnVtYmVyTWF0aCA9IG5ldyBDc3NOdW1iZXJNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGVyY2VudCBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHBlcmNlbnRhZ2U+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBcIiVcIiB1bml0IHN1ZmZpeC5cclxuICovXHJcbmV4cG9ydCBsZXQgUGVyY2VudDogSUNzc1BlcmNlbnRNYXRoID0gbmV3IENzc1BlcmNlbnRNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHBlcmNlbnQgdmFsdWUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnQoIG46IG51bWJlcik6IElQZXJjZW50UHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiJVwiOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTGVuIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bGVuZ3RoPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgbGVuZ3RoIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwicHhcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJlbVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBMZW46IElDc3NMZW5ndGhNYXRoID0gbmV3IENzc0xlbmd0aE1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHF1YXJ0ZXJzIG9mIGFuIGluY2ggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFEoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJRXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjaCB1bml0cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2goIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJjaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2FudGltZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNtKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiY21cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNhbGN1bGF0ZWQgZm9udC1zaXplcyBvZiB0aGUgZWxlbWVudCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW0oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJlbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaGVpZ2h0cyBvZiBsb3dlcmNhc2UgbGV0dGVyICd4JyBpbiB0aGUgZm9udCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJleFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaWMgdW5pdHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGljKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiaWNcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGluY2hlcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5jaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImluXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIGVsZW1lbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwibGhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIG1pbGxpbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIm1tXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaWNhcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGMoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJwY1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcG9pbnRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwdCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInB0XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaXhlbHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHB4KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicHhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBzaXplIG9mIHRoZSBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2ssIGluIHRoZSBkaXJlY3Rpb25cclxuICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgYmxvY2sgYXhpcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmIoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2YlwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidmhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBzaXplIG9mIHRoZSBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2ssIGluIHRoZSBkaXJlY3Rpb25cclxuICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgaW5saW5lIGF4aXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZpKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidmlcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSB3aWR0aCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZ3KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidndcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGZvbnRzaXplcyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW0oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJyZW1cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbmV4cG9ydCBmdW5jdGlvbiBybGgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJybGhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBzbWFsbGVyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2bWF4KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidm1heFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIGxhcmdlciB2YWx1ZSBiZXR3ZWVuIHZ3IGFuZCB2aCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdm1pbiggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZtaW5cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGZvciBmbGV4ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmciggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImZyXCI7IH1cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuZ2xlIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8YW5nbGU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYW4gYW5nbGUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkZWdcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJ0dXJuXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEFuZ2xlOiBJQ3NzQW5nbGVNYXRoID0gbmV3IENzc0FuZ2xlTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiBkZWdyZWVzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWcoIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRlZ1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiByYWRpYW5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYWQoIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJhZFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiBncmFkaWFucyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JhZCggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZ3JhZFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiB0dXJucyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHVybiggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidHVyblwiOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGltZSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPHRpbWU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSB0aW1lIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwibXNcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJzXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFRpbWU6IElDc3NUaW1lTWF0aCA9IG5ldyBDc3NUaW1lTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyB0aW1lIHZhbHVlIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXMoIG46IG51bWJlcik6IElUaW1lUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwibXNcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBzZWNvbmRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzKCBuOiBudW1iZXIpOiBJVGltZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInNcIjsgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUmVzb2x1dGlvbiBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSByZXNvbHV0aW9uIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZHBpXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZHBjbVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBSZXNvbHV0aW9uOiBJQ3NzUmVzb2x1dGlvbk1hdGggPSBuZXcgQ3NzUmVzb2x1dGlvbk1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUEkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwaSggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkcGlcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUENNICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcGNtKCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRwY21cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUFBYICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcHB4KCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRwcHhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBYICovXHJcbmV4cG9ydCBmdW5jdGlvbiB4KCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInhcIjsgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyZXF1ZW5jeSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGZyZXF1ZW5jeSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIkh6XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwia0h6XCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEZyZXF1ZW5jeTogSUNzc0ZyZXF1ZW5jeU1hdGggPSBuZXcgQ3NzRnJlcXVlbmN5TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gSGVydHogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh6KCBuOiBudW1iZXIpOiBJRnJlcXVlbmN5UHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiaHpcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEtpbG8tSGVydHogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGtoeiggbjogbnVtYmVyKTogSUZyZXF1ZW5jeVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImtoelwiOyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIHV0aWxpdHkgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIGVuY2Fwc3VsYXRpbmcgdGhlIGdpdmVuIHN0cmluZy1saWtlIHBhcmFtZXRlci4gVGhpcyBmdW5jdGlvblxyXG4gKiBhbGxvd3Mgc3BlY2lmeWluZyBhcmJpdHJhcnkgdGV4dCBmb3IgcHJvcGVydGllcyB3aG9zZSB0eXBlIG5vcm1hbGx5IGRvZXNuJ3QgYWxsb3cgc3RyaW5ncy5cclxuICogVGhpcyBpcyB1c2VkIGFzIGFuIFwiZXNjYXBlIGhhdGNoXCIgd2hlbiBhIHN0cmluZyB2YWx1ZSBhbHJlYWR5IGV4aXN0cyBhbmQgdGhlcmUgaXMgbm8gc2Vuc2VcclxuICogdG8gY29udmVydCBpdCB0byBhIHByb3BlciB0eXBlLiBUaGlzIGZ1bmN0aW9uIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0IGJlIGludm9rZWQgd2l0aFxyXG4gKiB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmF3KCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogYW55W10pOiBJU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBpbnZvY2F0aW9uIG9mIHRoZSBgdmFyKClgIENTUyBmdW5jdGlvbiBmb3JcclxuICogdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgd2l0aCBvcHRpb25hbCBmYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNldmFyPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB2YXJPYmo6IElWYXJSdWxlPEs+LCBmYWxsYmFjaz86IFZhclZhbHVlVHlwZTxLPik6IElTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gZmFsbGJhY2tcclxuICAgICAgICA/IGB2YXIoLS0ke3Zhck9iai5uYW1lfSwke3N0eWxlUHJvcFRvU3RyaW5nKCB2YXJPYmoudGVtcGxhdGUsIGZhbGxiYWNrLCB0cnVlKX0pYFxyXG4gICAgICAgIDogYHZhcigtLSR7dmFyT2JqLm5hbWV9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgdXJsKClgIGZ1bmN0aW9uLiBUaGUgc3RyaW5nIHBhcmFtZXRlclxyXG4gKiB3aWxsIGJlIHdyYXBwZWQgaW4gYSBcInVybCgpXCIgaW52b2NhdGlvbi4gVGhlIGZ1bmN0aW9uIGNhbiBhbHNvIGFjY2VwdCB0aGUgSUlEUnVsZSBvYmplY3QgdG9cclxuICogY3JlYXRlIHVybCgjZWxlbWVudCkgaW52b2NhdGlvbiwgd2hpY2ggaXMgb2Z0ZW4gdXNlZCB0byBhZGRyZXNzIFNWRyBlbGVtZW50cyBieSB0aGVpciBJRHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXJsKCB2YWw6IEV4dGVuZGVkPHN0cmluZyB8IElJRFJ1bGU+KTogSVVybFByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gYHVybCgke3ZhbDJzdHIodmFsKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGF0dHIoKWAgQ1NTIGZ1bmN0aW9uLiBJdCByZXR1cm5zIElTdHJpbmdQcm94eVxyXG4gKiBhbmQgdGhlb3JldGljYWxseSBjYW4gYmUgdXNlZCBpbiBhbnkgc3R5bGUgcHJvcGVydHk7IGhvd2V2ZXIsIGl0cyB1c2UgYnkgYnJvd3NlcnMgaXMgY3VycmVudGx5XHJcbiAqIGxpbWl0ZWQgdG8gdGhlIGBjb250ZW50YCBwcm9wZXJ0eS4gQWxzbyBubyBicm93c2VyIGN1cnJlbnRseSBzdXBwb3J0IHR5cGUsIHVuaXRzIG9yIGZhbGxiYWNrXHJcbiAqIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRyKCBhdHRyTmFtZTogRXh0ZW5kZWQ8c3RyaW5nPiwgdHlwZU9yVW5pdD86IEV4dGVuZGVkPEF0dHJUeXBlS2V5d29yZCB8IEF0dHJVbml0S2V5d29yZD4sXHJcblx0ZmFsbGJhY2s/OiBFeHRlbmRlZDxzdHJpbmc+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYXR0cigke2F0dHJOYW1lfSR7dHlwZU9yVW5pdCA/IFwiIFwiICsgdHlwZU9yVW5pdCA6IFwiXCJ9JHtmYWxsYmFjayA/IFwiLFwiICsgZmFsbGJhY2sgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIGEgc3RyaW5nIGluIHF1b3RhdGlvbiBtYXJrcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBxdW90ZWQoIHZhbDogYW55KTogSVF1b3RlZFByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgXCIke3ZhbDJzdHIodmFsKX1cImA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ291bnRlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYGNvdW50ZXIoKWAgZnVuY3Rpb24gd2l0aCBhZGRpdGlvbmFsXHJcbiAqIG9wdGlvbmFsIHN0cmluZ3MgYWRkZWQgYWZ0ZXIgYW5kL29yIGJlZm9yZSB0aGUgY291bnRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVyKCBjb3VudGVyT2JqOiBFeHRlbmRlZDxJQ291bnRlclJ1bGUgfCBzdHJpbmc+LFxyXG5cdHN0eWxlPzogRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LFxyXG5cdHRleHRBZnRlcj86IEV4dGVuZGVkPHN0cmluZz4sIHRleHRCZWZvcmU/OiBFeHRlbmRlZDxzdHJpbmc+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgc3R5bGVTdHJpbmcgPSBzdHlsZSA/IGAsJHt2YWwyc3RyKCBzdHlsZSl9YCA6IFwiXCI7XHJcblx0XHRsZXQgYmVmb3JlID0gdGV4dEJlZm9yZSA/IGBcIiR7dmFsMnN0ciggdGV4dEJlZm9yZSl9XCJgIDogXCJcIjtcclxuXHRcdGxldCBhZnRlciA9IHRleHRBZnRlciA/IGBcIiR7dmFsMnN0ciggdGV4dEFmdGVyKX1cImAgOiBcIlwiO1xyXG5cdFx0cmV0dXJuIGAke2JlZm9yZX0gY291bnRlcigke3ZhbDJzdHIoY291bnRlck9iail9JHtzdHlsZVN0cmluZ30pICR7YWZ0ZXJ9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlc3IoKWAgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW5cclxuICogc2VwYXJhdG9yIHN0cmluZyBhbmQgYWRkaXRpb25hbCBvcHRpb25hbCBzdHJpbmdzIGFkZGVkIGFmdGVyIGFuZC9vciBiZWZvcmUgdGhlIGNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlcnMoIGNvdW50ZXJPYmo6IEV4dGVuZGVkPElDb3VudGVyUnVsZSB8IHN0cmluZz4sXHJcblx0c2VwYXJhdG9yOiBFeHRlbmRlZDxzdHJpbmc+LCBzdHlsZT86IEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPixcclxuXHR0ZXh0QWZ0ZXI/OiBFeHRlbmRlZDxzdHJpbmc+LCB0ZXh0QmVmb3JlPzogRXh0ZW5kZWQ8c3RyaW5nPik6IElTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHNlcFN0cmluZyA9IHNlcGFyYXRvciA/IGBcIiR7dmFsMnN0ciggc2VwYXJhdG9yKX1cImAgOiBgXCIuXCJgO1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsMnN0ciggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbDJzdHIoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbDJzdHIoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXJzKCR7dmFsMnN0cihjb3VudGVyT2JqKX0sJHtzZXBTdHJpbmd9JHtzdHlsZVN0cmluZ30pICR7YWZ0ZXJ9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltY3NzXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Db2xvclR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9JbWFnZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvVXRpbEFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvQ29sb3JBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0ltYWdlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TdHlsZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvUnVsZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU2NoZWR1bGluZ0FQSVwiO1xyXG4iLCJpbXBvcnQge0lBbmltYXRpb25SdWxlLCBBbmltYXRpb25GcmFtZSwgQW5pbWF0aW9uV2F5cG9pbnQsIEFuaW1hdGlvblN0eWxlc2V0LCBJQW5pbWF0aW9uRnJhbWVSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIGNyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVzXCI7XHJcbmltcG9ydCB7IHZhbDJzdHIgfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGtleWZyYW1lcyBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25SdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25SdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZyYW1lcz86IEFuaW1hdGlvbkZyYW1lW10sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKGZyYW1lcylcclxuXHRcdFx0dGhpcy5mcmFtZVJ1bGVzID0gZnJhbWVzLm1hcCggZnJhbWUgPT4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSggZnJhbWVbMF0sIGZyYW1lWzFdKSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0a2V5ZnJhbWVSdWxlLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEFuaW1hdGlvblJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBBbmltYXRpb25SdWxlKHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdFx0aWYgKHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0bmV3UnVsZS5mcmFtZVJ1bGVzID0gdGhpcy5mcmFtZVJ1bGVzLm1hcCggZnJhbWVSdWxlID0+IGZyYW1lUnVsZS5jbG9uZSgpIGFzIEFuaW1hdGlvbkZyYW1lUnVsZSk7XHJcblx0XHRuZXdSdWxlLm5hbWVPdmVycmlkZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAa2V5ZnJhbWVzICR7dGhpcy5uYW1lfSB7fWAsIHBhcmVudCkgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHJcblx0XHRsZXQgY3NzS2V5ZnJhbWVzUnVsZSA9IHRoaXMuY3NzUnVsZSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cdFx0Zm9yKCBsZXQgZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjc3NLZXlmcmFtZXNSdWxlLmFwcGVuZFJ1bGUoIGZyYW1lUnVsZS50b0Nzc1N0cmluZygpKVxyXG5cdFx0XHRcdGxldCBjc3NSdWxlID0gY3NzS2V5ZnJhbWVzUnVsZS5jc3NSdWxlcy5pdGVtKCAgY3NzS2V5ZnJhbWVzUnVsZS5jc3NSdWxlcy5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHRpZiAoY3NzUnVsZSlcclxuXHRcdFx0XHRcdGZyYW1lUnVsZS5jc3NLZXlmcmFtZVJ1bGUgPSBjc3NSdWxlIGFzIENTU0tleWZyYW1lUnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCh4KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJDYW5ub3QgYWRkIENTUyBrZXlmcmFtZSBydWxlXCIsIHgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmICghdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBgQGtleWZyYW1lcyAke3RoaXMubmFtZX0ge2ApO1xyXG5cclxuXHRcdGZvciggbGV0IGZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdGN0eC5hZGRSdWxlVGV4dCggZnJhbWVSdWxlLnRvQ3NzU3RyaW5nKCkpXHJcbiAgICAgICAgXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIFwifVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBjb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy4gQW5pbWF0aW9uIHJ1bGUgcmV0dXJucyBpdHMgbmFtZS5cclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdHlsZSBydWxlcyByZXByZXNlbnRpbmcgYW5pbWF0aW9uIGZyYW1lcyAqL1xyXG5cdHB1YmxpYyBmcmFtZVJ1bGVzOiBBbmltYXRpb25GcmFtZVJ1bGVbXTtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lUnVsZSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIGtleWZyYW1lIGNsYXVzZSBpbiB0aGUgYW5pbWF0aW9uIHJ1bGUuXHJcbiAqL1xyXG5jbGFzcyBBbmltYXRpb25GcmFtZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uRnJhbWVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludCwgc3R5bGVzZXQ/OiBBbmltYXRpb25TdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy53YXlwb2ludCA9IHdheXBvaW50O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IEFuaW1hdGlvbkZyYW1lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCB0aGlzLndheXBvaW50KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB2YWwyc3RyKCB0aGlzLndheXBvaW50LCB7XHJcblx0XHRcdGZyb21OdW1iZXI6IHYgPT4gdiArIFwiJVwiLFxyXG5cdFx0XHRhcnJJdGVtRnVuYzogdiA9PiB2YWwyc3RyKCB2LCB7IGZyb21OdW1iZXI6IHYgPT4gdiArIFwiJVwiIH0pLFxyXG5cdFx0XHRhcnJTZXA6IFwiLFwiXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50ICovXHJcblx0cHVibGljIHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludDtcclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZSBydWxlICovXHJcblx0cHVibGljIGNzc0tleWZyYW1lUnVsZTogQ1NTS2V5ZnJhbWVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUNvdW50ZXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2V9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb3VudGVyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBuYW1lZCBjb3VudGVyIGRlZmluaXRpb24uIFVzZSB0aGlzIHJ1bGUgdG8gY3JlYXRlXHJcbiAqIGNvdW50ZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIGluIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZVxyXG4gKiBwcm9wZXJ0aWVzLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBjb3VudGVycyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlXHJcbiAqIGNvdW50ZXIgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ291bnRlclJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElDb3VudGVyUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGUpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHRcdFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ291bnRlclJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSBjb3VudGVyIG5hbWUuXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgY291bnRlciAqL1xyXG5cdHB1YmxpYyBnZXQgY291bnRlck5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lHcmlkTGluZVJ1bGUsIElHcmlkQXJlYVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyaWRMaW5lUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBuYW1lZCBncmlkIGxpbmUgZGVmaW5pdGlvbi4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgZ3JpZFxyXG4gKiBsaW5lcyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlIGdyaWQgbGluZSBkZWZpbml0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkTGluZVJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElHcmlkTGluZVJ1bGVcclxue1xyXG4gICAgLy8gaWYgdGhlIG5hbWVPdmVycmlkZSBpcyBhbiBhcmVhIHJ1bGUgb2JqZWN0LCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIGFsd2F5cyBkZWZpbmVkXHJcbiAgICAvLyBiZWNhdXNlIHRoaXMgY29uc3RydWN0b3IgY2FuIG9ubHkgYmUgaW52b2tlZCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgbGluZXMgb2YgdGhlIEdyaWRBcmVhUnVsZVxyXG4gICAgLy8gb2JqZWN0LlxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZExpbmVSdWxlIHwgSUdyaWRBcmVhUnVsZSwgaXNTdGFydEVuZE9yTm9uZT86IGJvb2xlYW4pXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gaXNTdGFydEVuZE9yTm9uZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcbiAgICAgICAgbGV0IG5hbWVPdmVycmlkZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG4gICAgICAgIGlmIChuYW1lT3ZlcnJpZGUgaW5zdGFuY2VvZiBHcmlkTGluZVJ1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lT3ZlcnJpZGUubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gbmFtZU92ZXJyaWRlLmlzU3RhcnRFbmRPck5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSBuYW1lT3ZlcnJpZGUuYXJlYU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5hbWVPdmVycmlkZSBpbnN0YW5jZW9mIEdyaWRBcmVhUnVsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVPdmVycmlkZS5uYW1lICsgKHRoaXMuaXNTdGFydEVuZE9yTm9uZSA/IFwiLXN0YXJ0XCIgOiBcIi1lbmRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSBuYW1lT3ZlcnJpZGUubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW3RoaXMubmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgb2J0YWluZWQgbmFtZSBkb2Vzbid0IGhhdmUgXCItc3RhcnRcIiBvciBcIi1lbmRcIiBidXQgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpc1xyXG4gICAgICAgICAgICAvLyBkZWZpbmVkICh0aGF0IGlzLCBpdCBpcyBlaXRoZXIgc3RhcnQgb3IgZW5kIGxpbmUpLCB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgc3VmZml4LiBJZiB0aGVcclxuICAgICAgICAgICAgLy8gb2J0YWluZWQgbmFtZSBhbHJlYWR5IGhhcyBcIi1zdGFydFwiIG9yIFwiLWVuZFwiIGFuZCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIG5vdFxyXG4gICAgICAgICAgICAvLyBkZWZpbmVkLCB3ZSBzZXQgdGhpcyBmbGFnIHRvIGVpdGhlciB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB0aGUgc3VmZml4LiBOb3RlIHRoYXQgaWZcclxuICAgICAgICAgICAgLy8gdGhlIG5hbWVPdmVycmlkZSBpcyBhbiBhcmVhIHJ1bGUgb2JqZWN0LCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIGFsd2F5cyBkZWZpbmVkLlxyXG4gICAgICAgICAgICBsZXQgbmFtZUhhc1N0YXJ0ID0gdGhpcy5uYW1lLmVuZHNXaXRoKFwiLXN0YXJ0XCIpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZUhhc0VuZCA9IHRoaXMubmFtZS5lbmRzV2l0aChcIi1lbmRcIik7XHJcbiAgICAgICAgICAgIGlmIChuYW1lSGFzU3RhcnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lLnN1YnN0ciggMCwgdGhpcy5uYW1lLmxlbmd0aCAtIFwiLXN0YXJ0XCIubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lSGFzRW5kKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWUuc3Vic3RyKCAwLCB0aGlzLm5hbWUubGVuZ3RoIC0gXCItZW5kXCIubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RhcnRFbmRPck5vbmUgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgKz0gXCItc3RhcnRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RhcnRFbmRPck5vbmUgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lICs9IFwiLWVuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogR3JpZExpbmVSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBHcmlkTGluZVJ1bGUoIHRoaXMubmFtZU92ZXJyaWRlLCB0aGlzLmlzU3RhcnRFbmRPck5vbmUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgbGluZSBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGluZSBpcyBhIHN0YXJ0IG9yIGVuZCBsaW5lIG9mIGEgZ3JpZCBhcmVhLiBUaGUgdmFsdWUgaXMgdHJ1ZVxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgc3RhcnQgbGluZTsgZmFsc2UgaWYgdGhpcyBpcyB0aGUgZW5kIGxpbmU7IGFuZCB1bmRlZmluZWQgaWYgdGhlIGxpbmUgaXNcclxuICAgICAqIG5vdCByZWxhdGVkIHRvIGFueSBhcmVhLlxyXG4gICAgICovXHJcblx0cHVibGljIGlzU3RhcnRFbmRPck5vbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBncmlkIGFyZWEgb2Ygd2hpY2ggdGhlIGxpbmUgaXMgZWl0aGVyIGEgc3RhcnQgb3IgYW4gZW5kIGxpbmUuIEl0IGlzIGRlZmluZWRcclxuICAgICAqIG9ubHkgaWYgdGhlIGxpbmUgbmFtZSBlbmRzIHdpdGggXCItc3RhcnRcIiBvciBcIi1lbmRcIi5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBhcmVhTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRMaW5lUnVsZSB8IElHcmlkQXJlYVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcmlkQXJlYVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgZ3JpZCBhcmVhIGRlZmluaXRpb24uIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGdyaWRcclxuICogYXJlYXMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZSBncmlkIGFyZWEgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZEFyZWFSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJR3JpZEFyZWFSdWxlXHJcbntcclxuICAgIC8vIGlmIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZFxyXG4gICAgLy8gYmVjYXVzZSB0aGlzIGNvbnN0cnVjdG9yIGNhbiBvbmx5IGJlIGludm9rZWQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIGxpbmVzIG9mIHRoZSBHcmlkQXJlYVJ1bGVcclxuICAgIC8vIG9iamVjdC5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRBcmVhUnVsZSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGxpbmUgcnVsZXNcclxuICAgICAgICB0aGlzLnN0YXJ0TGluZSA9IG5ldyBHcmlkTGluZVJ1bGUoIHRoaXMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZW5kTGluZSA9IG5ldyBHcmlkTGluZVJ1bGUoIHRoaXMsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcbiAgICAgICAgW3RoaXMubmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG4gICAgICAgIC8vIHByb2Nlc3MgbGluZSBydWxlc1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaW5lLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuZW5kTGluZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEdyaWRBcmVhUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgR3JpZEFyZWFSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSBsaW5lIG5hbWUuXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogU3RhcnQgbGluZSBvZiB0aGUgYXJlYS4gKi9cclxuXHRwdWJsaWMgc3RhcnRMaW5lOiBHcmlkTGluZVJ1bGU7XHJcblxyXG4gICAgLyoqIEVuZCBsaW5lIG9mIHRoZSBhcmVhIGFyZWEuICovXHJcblx0cHVibGljIGVuZExpbmU6IEdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIFN0eWxlRGVmaW5pdGlvbiwgSUdyb3VwUnVsZSwgSU1lZGlhUnVsZSwgSVN1cHBvcnRzUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtnZXRDb250YWluZXJGcm9tSW5zdGFuY2UsIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3N9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0lSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5pbXBvcnQge21lZGlhUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JvdXBSdWxlIGNsYXNzIHNlcnZlcyBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBncm91cGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JvdXBSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmluc3RhbmNlT3JDbGFzcyA9IGluc3RhbmNlT3JDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnRhaW5lciB0byB3aGljaCBvdXIgZ3JvdXBuZyBydWxlIGJlbG9uZ3MgYmVjb21lcyB0aGUgcGFyZW50IGNvbnRhaW5lciBmb3IgdGhlXHJcbiAgICAgICAgLy8gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZVxyXG5cdFx0bGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggdGhpcy5pbnN0YW5jZU9yQ2xhc3MsIGNvbnRhaW5lci5nZXREZWZpbml0aW9uSW5zdGFuY2UoKSk7XHJcblx0XHRpZiAoIWluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5ydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5nZXRHcm91cFNlbGVjdG9yVGV4dCgpO1xyXG5cdFx0aWYgKCFzZWxlY3RvcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgJHtzZWxlY3Rvcn0ge31gLCBwYXJlbnQpIGFzIENTU0dyb3VwaW5nUnVsZTtcclxuXHJcblx0XHQvLyBpbnNlcnQgc3ViLXJ1bGVzXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG5cdFx0XHR0aGlzLnJ1bGVDb250YWluZXIuaW5zZXJ0UnVsZXMoIHRoaXMuY3NzUnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKCF0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEdyb3VwU2VsZWN0b3JUZXh0KCk7XHJcblx0XHRpZiAoIXNlbGVjdG9yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBgJHtzZWxlY3Rvcn0ge2ApO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdHRoaXMucnVsZUNvbnRhaW5lci5zZXJpYWxpemVSdWxlcyggY3R4KTtcclxuXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIFwifVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGNsZWFyIHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmNsZWFyUnVsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHB1YmxpYyBnZXQgcnVsZXMoKTogVCB7IHJldHVybiB0aGlzLmluc3RhbmNlIGFzIFQ7IH1cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0dyb3VwaW5nUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCBkZWZpbmVzIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciBmb3IgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIHJ1bGVDb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3VwcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IFN1cHBvcnRzUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VD5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFN1cHBvcnRzUnVsZTxUPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0Ly8gY29udmVydCB0aGUgcXVlcnkgdG8gaXRzIHN0cmluZyBmb3JtXHJcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBxdWVyeSBpcyBzdXBwb3J0ZWQgYW5kIGlmIGl0IGlzIG5vdCwgZG9uJ3QgaW5zZXJ0IHRoZSBydWxlXHJcblx0XHRyZXR1cm4gQ1NTLnN1cHBvcnRzKCBxdWVyeVN0cmluZykgPyBgQHN1cHBvcnRzICR7cXVlcnlTdHJpbmd9YCA6IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBGbGFnIGluZGljYXRlZCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcnVsZSdzIHF1ZXJ5ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzU3VwcG9ydGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gIENTUy5zdXBwb3J0cyggc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KSk7XHJcbiAgICB9XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBzdXBwb3J0IHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHJpdmF0ZSBxdWVyeTogU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWFSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE1lZGlhUnVsZTxUPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWVkaWFSdWxlPFQ+KCB0aGlzLnF1ZXJ5LCB0aGlzLmluc3RhbmNlT3JDbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHRyZXR1cm4gYEBtZWRpYSAke21lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUZvbnRGYWNlUnVsZSwgSUltcG9ydFJ1bGUsIElQYWdlUnVsZSwgSU5hbWVzcGFjZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtmb250RmFjZVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGUsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQge1BhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWlzY1J1bGUgY2xhc3Mgc2VydmVzIGFzIGEgYmFzZSBjbGFzcyBmb3Igc2ltcGxlIHJ1bGVzLlxyXG4gKi9cclxuYWJzdHJhY3QgY2xhc3MgTWlzY1J1bGU8VCBleHRlbmRzIENTU1J1bGU+IGV4dGVuZHMgUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBpc1RvcExldmVsUnVsZT86IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaXNUb3BMZXZlbFJ1bGUgPSBpc1RvcExldmVsUnVsZTtcclxuXHR9XHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCB0aGlzLmdldFJ1bGVUZXh0KCksIHBhcmVudCkgYXMgVDtcclxuXHR9XHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCB0aGlzLmdldFJ1bGVUZXh0KCksIHRoaXMuaXNUb3BMZXZlbFJ1bGUpO1xyXG4gICAgfVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRSdWxlVGV4dCgpOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogVDtcclxuXHJcbiAgICAvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJ1bGUgY2FuIG9ubHkgYmUgYXQgdGhlIHRvcC1sZXZlbCBvZiBzdHlsZXNoZWV0cyAoZS5nLiBAaW1wb3J0XHJcbiAgICAvLyBhbmQgQG5hbWVzcGFjZSkuXHJcbiAgICBwcml2YXRlIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEltcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbXBvcnRSdWxlIGV4dGVuZHMgTWlzY1J1bGU8Q1NTSW1wb3J0UnVsZT4gaW1wbGVtZW50cyBJSW1wb3J0UnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB1cmw6IHN0cmluZywgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5KVxyXG5cdHtcclxuICAgICAgICAvLyB0aGlzIGlzIGEgdG9wLWxldmVsIHJ1bGVcclxuXHRcdHN1cGVyKCB0cnVlKTtcclxuXHJcblx0XHR0aGlzLnVybCA9IHVybDtcclxuXHRcdHRoaXMubWVkaWFRdWVyeSA9IG1lZGlhUXVlcnk7XHJcblx0XHR0aGlzLnN1cHBvcnRzUXVlcnkgPSBzdXBwb3J0c1F1ZXJ5O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEltcG9ydFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHRoaXMudXJsLCB0aGlzLm1lZGlhUXVlcnksIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBnZXRSdWxlVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdGxldCB1cmw6IHN0cmluZztcclxuXHRcdGlmICh0aGlzLnVybC5zdGFydHNXaXRoKFwidXJsXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJcXFwiXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCInXCIpKVxyXG5cdFx0XHR1cmwgPSB0aGlzLnVybDtcclxuXHRcdGVsc2VcclxuXHRcdFx0dXJsID0gYHVybCgke3RoaXMudXJsfSlgO1xyXG5cclxuXHRcdGxldCBzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gIXRoaXMuc3VwcG9ydHNRdWVyeSA/IFwiXCIgOiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblx0XHRpZiAoc3VwcG9ydHNRdWVyeVN0cmluZyAmJiAhc3VwcG9ydHNRdWVyeVN0cmluZy5zdGFydHNXaXRoKCBcInN1cHBvcnRzXCIpKVxyXG5cdFx0ICAgIHN1cHBvcnRzUXVlcnlTdHJpbmcgPSBgc3VwcG9ydHMoICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gKWA7XHJcblxyXG5cdFx0bGV0IG1lZGlhUXVlcnlTdHJpbmcgPSAhdGhpcy5tZWRpYVF1ZXJ5ID8gXCJcIiA6IG1lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5tZWRpYVF1ZXJ5KTtcclxuXHRcdHJldHVybiBgQGltcG9ydCAke3VybH0gJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSAke21lZGlhUXVlcnlTdHJpbmd9YDtcclxuICAgIH1cclxuXHJcblx0Ly8gVVJMIHRvIGltcG9ydCBmcm9tLlxyXG5cdHB1YmxpYyB1cmw6IHN0cmluZztcclxuXHJcblx0Ly8gT3B0aW9uYWwgbWVkaWEgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHN1cHBvcnRzIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZXNwYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBNaXNjUnVsZTxDU1NOYW1lc3BhY2VSdWxlPiBpbXBsZW1lbnRzIElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpXHJcblx0e1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSB0b3AtbGV2ZWwgcnVsZVxyXG5cdFx0c3VwZXIoIHRydWUpO1xyXG5cclxuXHRcdHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xyXG5cdFx0dGhpcy5wcmVmaXggPSBwcmVmaXg7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTmFtZXNwYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTmFtZXNwYWNlUnVsZSggdGhpcy5uYW1lc3BhY2UsIHRoaXMucHJlZml4KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGdldFJ1bGVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0bGV0IHVybCA9IHRoaXMubmFtZXNwYWNlLnN0YXJ0c1dpdGgoIFwidXJsKFwiKSA/IHRoaXMubmFtZXNwYWNlIDogYHVybCgke3RoaXMubmFtZXNwYWNlfSlgO1xyXG5cdFx0cmV0dXJuIGBAbmFtZXNwYWNlICR7dGhpcy5wcmVmaXggPyB0aGlzLnByZWZpeCA6IFwiXCJ9ICR7dXJsfWA7XHJcbiAgICB9XHJcblxyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRm9udEZhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBmb250LWZhY2UgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9udEZhY2VSdWxlIGV4dGVuZHMgTWlzY1J1bGU8Q1NTRm9udEZhY2VSdWxlPiBpbXBsZW1lbnRzIElGb250RmFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZm9udGZhY2U6IElGb250RmFjZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZm9udGZhY2UgPSBmb250ZmFjZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBGb250RmFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggdGhpcy5mb250ZmFjZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBnZXRSdWxlVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiBgQGZvbnQtZmFjZSAke2ZvbnRGYWNlVG9TdHJpbmcoIHRoaXMuZm9udGZhY2UpfWA7XHJcbiAgICB9XHJcblxyXG5cdC8vIE9iamVjdCBkZWZpbmluZyBmb250LWZhY2UgcHJvcGVydGllcy5cclxuXHRwdWJsaWMgZm9udGZhY2U6IElGb250RmFjZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhZ2VSdWxlIGNsYXNzIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhZ2VSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVBhZ2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnBzZXVkb0NsYXNzID0gcHNldWRvQ2xhc3M7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogUGFnZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCB0aGlzLnBzZXVkb0NsYXNzKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgQHBhZ2UgJHt0aGlzLnBzZXVkb0NsYXNzID8gdGhpcy5wc2V1ZG9DbGFzcyA6IFwiXCJ9YDtcclxuXHR9XHJcblxyXG5cdC8qKiBTT00gcGFnZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1BhZ2VSdWxlO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHB1YmxpYyBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVJ1bGUsIElOYW1lZEVudGl0eSwgU3R5bGVEZWZpbml0aW9ufSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW50ZXJmYWNlIGtlZXBzIGluZm9ybWF0aW9uIGR1cmluZyBzZXJpYWxpemF0aW9uIG9mIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0XHJcbntcclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBhZGRSdWxlVGV4dCggczogc3RyaW5nLCBpc1RvcExldmVsUnVsZT86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBhZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgYWNjb21wYW5pZXMgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aFxyXG4gKiBhIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvKiogSW5zZXJ0cyBhbGwgcnVsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciB0byBlaXRoZXIgdGhlIHN0eWxlIHNoZWV0IG9yIGdyb3VwaW5nIHJ1bGUuICovXHJcblx0aW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRjbGVhclJ1bGVzKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBXcml0ZXMgYWxsIHJ1bGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBnaXZlbiBzdHJpbmcuICovXHJcblx0c2VyaWFsaXplUnVsZXMoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuICovXHJcblx0c2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRvcExldmVsUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCB0aGF0IFwib3duc1wiXHJcbiAqIHRoZSBydWxlcyB1bmRlciB0aGlzIGNvbnRhaW5lci4gSW4gcGFydGljdWxhciwgdGhlIG93bmVyJ3Mgam9iIGlzIHRvIGdlbmVyYXRlIFwic2NvcGVkXCIgdW5pcXVlXHJcbiAqIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGV4dGVuZHMgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBHZW5lcmF0ZXMgYSBuYW1lLCB3aGljaCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGlzIHN0eWxlc2hlZXQgKi9cclxuXHRnZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVMaWtlIGFic3RyYWN0IGNsYXNzIGlzIGEgYmFzZSBmb3IgYWxsIFwicnVsZXNcIiBkZWZpbmVkIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgLVxyXG4gKiB3aGV0aGVyIHRoZXkgY29ycmVzcG9uZCB0byByZWFsIENzc1J1bGVzIChhbmQgdGh1cyBkZXJpdmUgZnJvbSB0aGUgUnVsZSBjbGFzcykgb3Igbm90IChzdWNoIGFzXHJcbiAqIGNvdW50ZXJzLCBncmlkIGxpbmVzIGFuZCBncmlkIGFyZWFzKS5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlTGlrZVxyXG57XHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0dGhpcy5vd25lckNvbnRhaW5lciA9IG93bmVyQ29udGFpbmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGVMaWtlO1xyXG5cclxuXHQvLyBDb250YWluZXIgYXQgdGhlIHRvcCBvZiB0aGUgY2hhaW4gb2YgY29udGFpbmVycyB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy5cclxuXHRwdWJsaWMgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBjYW5cclxuXHQvLyBiZSBudWxsIGZvciBydWxlcyBub3QgY3JlYXRlZCB2aWEgYXNzaWdubWVudCB0byBzdHlsZSBkZWZpbml0aW9uIHByb3BlcnRpZXMuXHJcblx0cHVibGljIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy5cclxuXHRwdWJsaWMgY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBydWxlcy4gQXMgYSBwYXJlbnQgb2YgUnVsZUNvbnRhaW5lciwgdGhlIFJ1bGVcclxuICogY2xhc3MgaXMgYWxzbyBhbiBhbmNlc3RvciBmb3IgU3R5bGVzaGVldDsgaG93ZXZlciwgbW9zdCBvZiBpdHMgdGhlIGZpZWxkcyBhcmUgdW5kZWZpbmVkIGluXHJcbiAqIHRlIFN0eWxlc2hlZXQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElSdWxlXHJcbntcclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogUnVsZTtcclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0Ly8gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGFjdGl2YXRlZC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2hcclxuXHQvLyB0aGlzIHJ1bGUgYmVsb25ncywgaXMgZGVhY3RpdmF0ZWQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWQgeyB0aGlzLmNzc1J1bGUgPSBudWxsOyB9XHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgZ2l2ZW4gcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkUnVsZVRvRE9NKCBydWxlVGV4dDogc3RyaW5nLCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlIHwgbnVsbFxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCB4KVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgQ2Fubm90IGFkZCBDU1MgcnVsZSAnJHtydWxlVGV4dH0nYCwgeClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENTU1J1bGUtZGVyaXZlZCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgYWN0dWFsbCBDU1MgcnVsZSBpbnNlcnRlZCBpbnRvXHJcblx0Ly8gdGhlIHN0eWxlcyBzaGVldCBvciB0aGUgcGFyZW50IHJ1bGUuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciBTdHlsZXNoZWV0IG9iamVjdHMuXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHNjb3BlZCBuYW1lcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5LFxyXG5cdGNzc1ByZWZpeD86IHN0cmluZyk6IFtzdHJpbmcsc3RyaW5nXVxyXG57XHJcblx0aWYgKCFydWxlTmFtZSAmJiAhbmFtZU92ZXJyaWRlKVxyXG5cdFx0cmV0dXJuIFtcIlwiLCBcIlwiXTtcclxuXHJcblx0bGV0IG5hbWUgPSAhbmFtZU92ZXJyaWRlXHJcblx0XHQ/IG93bmVyQ29udGFpbmVyLmdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZSEpXHJcblx0XHQ6IHR5cGVvZiBuYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBuYW1lT3ZlcnJpZGVcclxuXHRcdFx0OiBuYW1lT3ZlcnJpZGUubmFtZTtcclxuXHJcblx0cmV0dXJuICFjc3NQcmVmaXhcclxuXHRcdD8gW25hbWUsbmFtZV1cclxuXHRcdDogbmFtZS5zdGFydHNXaXRoKCBjc3NQcmVmaXgpXHJcblx0XHRcdD8gW25hbWUuc3Vic3RyKCBjc3NQcmVmaXgubGVuZ3RoKSwgbmFtZV1cclxuXHRcdFx0OiBbbmFtZSwgY3NzUHJlZml4ICsgbmFtZV07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzc30gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZSwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiXHJcbmltcG9ydCB7SW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZX0gZnJvbSBcIi4vTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vLyBEZWZpbmUgc3ltYm9scyB0aGF0IGFyZSB1c2VkIGZvciBrZWVwaW5nIGltcG9ydGFudCBpbmZvcm1hdGlvbiBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZSBkb24ndCB3YW50IHRvIGJlIHZpc2libGUgdG8gZGV2ZWxvcGVycy5cclxuXHJcbi8qKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBwb2ludGluZyB0byB0aGUgc2luZ2x0b24gaW5zdGFuY2UuICovXHJcbmNvbnN0IHN5bUluc3RhbmNlID0gU3ltYm9sKFwiZGVmaW5pdGlvblwiKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBwb2ludGluZyB0byB0aGUgUnVsZUNvbnRhaW5lciBvYmplY3QgdGhhdCBpc1xyXG4gKiByZXNwb25zaWJsZSBmb3IgcHJvY2Vzc2luZyBydWxlcy5cclxuICovXHJcbmNvbnN0IHN5bUNvbnRhaW5lciA9IFN5bWJvbChcImNvbnRhaW5lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlQ29udGFpbmVyIGNsYXNzIGlzIGEgc2hhZG93IHN0cnVjdHVyZSB0aGF0IGFjY29tcGFuaWVzIGV2ZXJ5IHByb2Nlc3NlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIG9iamVjdC4gU2luY2UgU3R5bGVEZWZpbml0aW9uIGNsYXNzIGlzIGFuIGV4cG9ydGVkIGNsYXNzIHZpc2libGUgdG8gZGV2ZWxvcGVycywgd2UgZG9uJ3Qgd2FudFxyXG4gKiB0byBoYXZlIGEgbG90IG9mIGZ1bmN0aW9uYWxpdHkgaW4gaXQuIFRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCBpcyBsaW5rZWQgdG8gdGhlIFN0eWxlRGVmaW5pdGlvblxyXG4gKiBvYmplY3QgdmlhIHRoZSBbc3ltUnVsZUNvbnRhaW5lcl0gc3ltYm9sLiBJdCBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHBhcnNpbmcgcnVsZVxyXG4gKiBkZWZpbml0aW9ucywgbmFtZSBhc3NpZ25tZW50IGFuZCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuICovXHJcbmNsYXNzIFJ1bGVDb250YWluZXIgaW1wbGVtZW50cyBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgbmFtZTogc3RyaW5nLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmVtYmVkZGluZ0NvbnRhaW5lciA9IGVtYmVkZGluZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvciBhcyBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBpbnN0YW5jZS4kcGFyZW50O1xyXG5cdFx0dGhpcy5vd25lciA9IGluc3RhbmNlLiRvd25lcjtcclxuXHJcblx0XHR0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9IDA7XHJcblx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3MoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2VzcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcHV0IHJlZmVyZW5jZSB0byB0aGlzIGNvbnRhaW5lciBpbiB0aGUgc3ltYm9sIHByb3BlcnR5IG9mIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdFx0dGhpcy5pbnN0YW5jZVtzeW1Db250YWluZXJdID0gdGhpcztcclxuXHJcblx0XHQvLyBnZXQgY29udGFpbmVycyBmb3IgdGhlIHBhcmVudCBhbmQgb3duZXIgc3R5bGUgZGVmaW5pdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHRpZiAodGhpcy5vd25lcilcclxuXHRcdFx0dGhpcy50b3BMZXZlbENvbnRhaW5lciA9IHRoaXMub3duZXJbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHQvLyBpZiBvdXIgY29udGFpbmVyIGhhcyBwYXJlbnQgY29udGFpbmVyLCBwcmVmaXggb3VyIG5hbWUgd2l0aCB0aGUgdXBwZXIgb25lXHJcblx0XHRpZiAodGhpcy5wYXJlbnRDb250YWluZXIpXHJcblx0XHRcdHRoaXMubmFtZSA9IGAke3RoaXMucGFyZW50Q29udGFpbmVyLm5hbWV9XyR7dGhpcy5uYW1lfWA7XHJcblxyXG5cdFx0dGhpcy5pbXBvcnRzID0gW107XHJcblx0XHR0aGlzLm5hbWVzcGFjZXMgPSBbXTtcclxuXHRcdHRoaXMudmFycyA9IFtdO1xyXG5cdFx0dGhpcy5yZWZzID0gW107XHJcblx0XHR0aGlzLm90aGVyUnVsZXMgPSBbXTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRoZW0uXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWUsIHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSZWZlcmVuY2UoIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgVmFyUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzVmFyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGVMaWtlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlTGlrZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NBcnJheSggcHJvcFZhbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJlZmVyZW5jZSB0byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gY3JlYXRlZCBieSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHByb2Nlc3NSZWZlcmVuY2UoIHJlZjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBpbnN0YW5jZSBoYXMgbm90IGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHByb2Nlc3MgaXQgYW5kIGluZGljYXRlIHRoYXQgaXQgaXNcclxuXHRcdC8vIGVtYmVkZGVkIGludG8gb3VyIGNvbnRhaW5lciBiZWNhdXNlIG9ubHkgZGVmaW5pdGlvbnMgY3JlYXRlZCB3aXRoIHRoZSAkZW1iZWQgZnVuY3Rpb25cclxuXHRcdC8vIGFyZSBub3QgcHJvY2Vzc2VkLlxyXG5cdFx0cHJvY2Vzc0luc3RhbmNlKCByZWYsIHRoaXMpO1xyXG5cdFx0dGhpcy5yZWZzLnB1c2goIHJlZik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1ZhclJ1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCB2YXJPYmo6IFZhclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAodmFyT2JqLmNvbnRhaW5lcilcclxuXHRcdFx0dmFyT2JqID0gdmFyT2JqLmNsb25lKCk7XHJcblxyXG5cdFx0dmFyT2JqLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHRcdHRoaXMudmFycy5wdXNoKCB2YXJPYmopO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY291bnRlciBvYmplY3QuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUnVsZUxpa2UoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlTGlrZTogUnVsZUxpa2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAocnVsZUxpa2UuY29udGFpbmVyKVxyXG4gICAgICAgICAgICBydWxlTGlrZSA9IHJ1bGVMaWtlLmNsb25lKCk7XHJcblxyXG4gICAgICAgIHJ1bGVMaWtlLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBSdWxlLWRlcml2ZWQgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1J1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlOiBSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGFub3RoZXIgaW5zdGFuY2UsIHdlIGNyZWF0ZSBhIGNsb25lXHJcblx0XHQvLyBvZiB0aGUgcnVsZSBhbmQgc2V0IGl0IHRvIG91ciBpbnN0YW5jZS5cclxuXHRcdGlmIChydWxlLm93bmVyQ29udGFpbmVyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUpXHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0gPSBydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBUT0RPOiBzdXBwb3J0IGFscmVhZHkgdXNlZCBydWxlcyBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJ1bGUucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cclxuXHRcdGlmIChydWxlIGluc3RhbmNlb2YgSW1wb3J0UnVsZSlcclxuXHRcdFx0dGhpcy5pbXBvcnRzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIE5hbWVzcGFjZVJ1bGUpXHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5vdGhlclJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcnVsZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzQXJyYXkoIHByb3BWYWxzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BWYWxzIHx8IHByb3BWYWxzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBwcm9wVmFsIG9mIHByb3BWYWxzKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggbnVsbCwgcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0cHVibGljIGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb25cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgc2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBhIGdsb2JhbGx5IHVuaXF1ZSBDU1MgbmFtZSBmb3IgdGhlIGdpdmVuIHJ1bGUgbmFtZSB1bmxlc3MgdGhpcyBydWxlIG5hbWUgYWxyZWFkeVxyXG5cdCAqIGV4aXN0cyBlaXRoZXIgaW4gYSBiYXNlIGNsYXNzIG9yIGluIHRoZSBjaGFpbiBvZiBwYXJlbnQgZ3JvdXBpbmcgcnVsZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gaWYgcnVsZSBuYW1lIHdhcyBub3Qgc3BlY2lmaWVkLCBnZW5lcmF0ZSBpdCB1bmlxdWVseTsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHdlXHJcblx0XHQvLyBhbHJlYWR5IGhhdmUgdGhpcyBydWxlIG5hbWU6IGlmIHllcywgcmV0dXJuIHRoZSBhbHJlYWR5IGFzc2lnbmVkIG5hbWUuIElmIHdlIGRpZG4ndFxyXG5cdFx0Ly8gZmluZCB0aGUgbmFtZSwgdHJ5IHRvIGZpbmQgaXQgaW4gdGhlIGJhc2UgY2xhc3Nlcyk7IGlmIG5vdCBmb3VuZCB0aGVyZSwgZ2VuZXJhdGUgaXRcclxuXHRcdC8vIHVzaW5nIHRoaXMgY29udGFpbmVyJ3MgbmFtZSBhbmQgdGhlIHJ1bGUgbmFtZSAobm90ZSB0aGF0IGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgYm90aFxyXG5cdFx0Ly8gY2FuIGJlIGdlbmVyYXRlZCB1bmlxdWVseSkuXHJcblx0XHRpZiAoIXJ1bGVOYW1lKVxyXG5cdFx0XHRyZXR1cm4gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlIGlmIChydWxlTmFtZSBpbiB0aGlzLmluc3RhbmNlICYmIFwibmFtZVwiIGluIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0ubmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCBvdXQgaWYgdGhlcmUgaXMgYSBydWxlIHdpdGggdGhpcyBuYW1lIGRlZmluZWQgaW4gYSBzdHlsZXNoZWV0IGluc3RhbmNlIGNyZWF0ZWQgZm9yXHJcblx0XHRcdC8vIGEgY2xhc3MgZnJvbSB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG5cdFx0XHRsZXQgZXhpc3RpbmdOYW1lID0gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggdGhpcy5kZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lKTtcclxuXHRcdFx0cmV0dXJuIGV4aXN0aW5nTmFtZSA/IGV4aXN0aW5nTmFtZSA6IGdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRwdWJsaWMgaW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWN0aXZhdGUgcmVmZXJlbmNlZCBzdHlsZSBkZWZpbml0aW9uc1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uYWN0aXZhdGUoKTtcclxuXHJcblx0XHQvLyBpc2VydCBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT5cclxuXHRcdFx0XHR2YXJPYmoudG9Dc3NTdHJpbmcoKSkuZmlsdGVyKCB2ID0+IHYgIT0gbnVsbCkuam9pbihcIjtcIil9fWAsIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluc2VydCBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdHB1YmxpYyBjbGVhclJ1bGVzKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgLy8gaW1wb3J0IGFuZCBuYW1lc3BhY2UgcnVsZXMgY2FuIG9ubHkgZXhpc3QgaW4gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblxyXG5cdFx0Ly8gZGVhY3RpdmF0ZSBpbXBvcnRlZCBzdHlsZXNoZWV0c1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyB0aGlzIHN0eWxlc2hlZXQgaW50byBET00uICovXHJcblx0cHVibGljIGFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoKyt0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIG5vdC1lbWJlZGRlZCBzdHlsZSBkZWZpbml0aW9ucyBjcmVhdGUgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmVtYmVkZGluZ0NvbnRhaW5lcilcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gdGhpcy5lbWJlZGRpbmdDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0uaWQgPSB0aGlzLm5hbWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5kb21TdHlsZUVsbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSB0aGlzLnRvcExldmVsQ29udGFpbmVyLmRvbVN0eWxlRWxtO1xyXG5cclxuXHRcdFx0dGhpcy5pbnNlcnRSdWxlcyggdGhpcy5kb21TdHlsZUVsbSEuc2hlZXQgYXMgQ1NTU3R5bGVTaGVldCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoaXMgc3R5bGVzaGVldCBmcm9tIERPTS4gKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ3VhcmQgZnJvbSBleHRyYSBkZWFjdGl2YXRlIGNhbGxzXHJcblx0XHRpZiAodGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoLS10aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhclJ1bGVzKCk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uIGNyZWF0ZXMgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSEucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFdyaXRlcyBhbGwgcnVsZXMgcmVjdXJzaXZlbHkgdG8gdGhlIGdpdmVuIHN0cmluZy4gKi9cclxuXHRwdWJsaWMgc2VyaWFsaXplUnVsZXMoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcbiAgICAgICAgZm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuICAgICAgICAgICAgY3R4LmFkZFN0eWxlRGVmaW5pdGlvbiggcmVmKTtcclxuXHJcblx0XHQvLyBzZXJpYWxpemUgb3VyIGN1c3RvbSB2YXJpYWJsZXMgaW4gYSBcIjpyb290XCIgcnVsZVxyXG5cdFx0aWYgKHRoaXMudmFycy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguYWRkUnVsZVRleHQoIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT4gdmFyT2JqLnRvQ3NzU3RyaW5nKCkpLmZpbHRlciggdiA9PiB2ICE9IG51bGwpLmpvaW4oXCI7XCIpfX1gKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZXJpYWxpemUgYWxsIG90aGVyIHJ1bGVzXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLnNlcmlhbGl6ZSggY3R4KSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgY29udGFpbmVyIGlzIGZvciB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24uXHJcblx0cHJpdmF0ZSBnZXQgaXNUb3BMZXZlbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3duZXIgPT09IG51bGwgfHwgdGhpcy5vd25lciA9PT0gdGhpcy5pbnN0YW5jZSB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBwcm9jZXNzZWQuXHJcblx0cHVibGljIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBjcmVhdGVzIGFuIGluc3RhbmNlIG9mLlxyXG5cdHByaXZhdGUgZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3NcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGlzIGNvbnRhaW5lciwgd2hpY2gsIGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgaXMgZWl0aGVyIHRha2VuIGZyb20gdGhlIGNsYXNzXHJcblx0Ly8gZGVmaW5pdGlvbiBuYW1lIG9yIGdlbmVyYXRlZCB1bmlxdWVseS5cclxuXHRwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgcGFyZW50IHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgaXMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgcGFyZW50PzogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIHBhcmVudCBzdHlsZSBkZWZpbnRpb24uIElmIG91ciBjb250YWluZXIgaXMgdG9wLWxldmVsLFxyXG5cdC8vIHRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgcGFyZW50Q29udGFpbmVyPzogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBncm91cGluZyBydWxlcyB0aGF0XHJcblx0Ly8gbGVhZCB0byB0aGlzIHJ1bGUgY29udGFpbmVyLiBGb3IgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb25zLCB0aGlzIHBvaW50cyB0byB0aGUgc2FtZVxyXG5cdC8vIHNpbmdsZXRvbiBkZWZpbml0aW9uIGluc3RhbmNlIGFzIHRoZSAnaW5zdGFuY2UnIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgb3duZXI6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdGhhdCBiZWxvbmdzIHRvIHRoZSBvd25lciBzdHlsZSBkZWZpbnRpb24uIElmIG91ciBjb250YWluZXIgaXMgdG9wLWxldmVsLFxyXG5cdC8vIHRoaXMgcHJvcGVydHkgcG9pbnRzIHRvIGB0aGlzYC4gTmFtZXMgZm9yIG5hbWVkIHJ1bGVzIGFyZSBjcmVhdGVkIHVzaW5nIHRoaXMgY29udGFpbmVyLlxyXG5cdHByaXZhdGUgdG9wTGV2ZWxDb250YWluZXI6IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBjb3JyZXNwb25kaW5nIHRvIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIHRoYXQgaXMgZW1iZWRkaW5nIG91ciBpbnN0YW5jZVxyXG5cdC8vICh0aGF0IGlzLCB0aGUgaW5zdGFuY2UgY29ycmVzcG9uZGluZyB0byBvdXIgY29udGFpbmVyKS4gSWYgZGVmaW5lZCwgdGhpcyBjb250YWluZXInc1xyXG5cdC8vIGA8c3R5bGU+YCBlbGVtZW50IGlzIHVzZWQgdG8gaW5zZXJ0IENTUyBydWxlcyBpbnRvIGluc3RlYWQgb2YgdG9wTGV2ZWxDb250YWluZXIuXHJcblx0cHJpdmF0ZSBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBMaXN0IG9mIHJlZmVyZW5jZXMgdG8gb3RoZXIgc3R5bGUgZGVmaW5pdGlvbnMgY3JlYWVkIHZpYSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHJlZnM6IFN0eWxlRGVmaW5pdGlvbltdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBpbXBvcnQgcnVsZXNcclxuXHRwcml2YXRlIGltcG9ydHM6IEltcG9ydFJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBAbmFtZXNwYWNlIHJ1bGVzXHJcblx0cHJpdmF0ZSBuYW1lc3BhY2VzOiBOYW1lc3BhY2VSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgY3VzdG9tIHZhcmlhYmxlIHJ1bGVzLlxyXG5cdHByaXZhdGUgdmFyczogVmFyUnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIHJ1bGVzIHRoYXQgYXJlIG5vdCBpbXBvcnRzLCBuYW1lc3BhY2VzLCBjdXN0b20gdmFycywgcmVmZXJlbmNlcyBvciBncm91cGluZyBydWxlcy5cclxuXHRwcml2YXRlIG90aGVyUnVsZXM6IFJ1bGVbXTtcclxuXHJcblx0Ly8gXCI6cm9vdFwiIHJ1bGUgd2hlcmUgYWxsIGN1c3RvbSBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIGFyZSBkZWZpbmVkLlxyXG5cdHByaXZhdGUgY3NzQ3VzdG9tVmFyU3R5bGVSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgY291bnQgb2YgYWN0aXZhdGlvbiByZXF1ZXN0cy5cclxuXHRwcml2YXRlIGFjdGl2YXRpb25SZWZDb3VudDogbnVtYmVyO1xyXG5cclxuXHQvLyBET00gc3R5bGUgZWxlbW50XHJcblx0cHVibGljIGRvbVN0eWxlRWxtOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTmFtZSBnZW5lcmF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2VuYWJsZVNob3J0TmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0c191c2VVbmlxdWVTdHlsZU5hbWVzID0gZW5hYmxlO1xyXG5cdHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IHByZWZpeCA/IHByZWZpeCA6IFwiblwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIG5hbWVzIGZvciBzdHlsZSBlbGVtZW50cyAoY2xhc3NlcywgIGFuaW1hdGlvbnMsIGV0Yy4pXHJcbiAqIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHRydWUgaW4gdGhlIFJlbGVhc2UgYnVpbGQgb2YgdGhlIGxpYnJhcnkgYW5kIGZhbHNlIGluIHRoZSBEZWJ1ZyBidWlsZC5cclxuICovXHJcbmxldCBzX3VzZVVuaXF1ZVN0eWxlTmFtZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuLy8vICNpZiBERUJVR1xyXG5zX3VzZVVuaXF1ZVN0eWxlTmFtZXMgPSBmYWxzZTtcclxuLy8vICNlbmRpZlxyXG5cclxuLyoqXHJcbiAqIFByZWZpeCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBzdHlsZSBuYW1lcy4gSWYgdW5kZWZpbmVkLCBhIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqL1xyXG5sZXQgc191bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gXCJuXCI7XHJcblxyXG4vKiogTmV4dCBudW1iZXIgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgaWRlbnRpZmllcnMuICovXHJcbmxldCBzX25leHRVbmlxdWVJRCA9IDE7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgbmFtZSB0byB1c2UgZm9yIHRoZSBnaXZlbiBydWxlIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNoZWV0LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKCBzaGVldE5hbWU6IHN0cmluZywgcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHNfdXNlVW5pcXVlU3R5bGVOYW1lc1xyXG5cdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeClcclxuXHRcdDogYCR7c2hlZXROYW1lfV8ke3J1bGVOYW1lfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBuYW1lLCB3aGljaCBjYW4gYmUgdXNlZCBlaXRoZXIgZm9yIHN0eWxlIGVsZW1lbnQncyBJRCBvciBvciBjbGFzcyxcclxuICogaWRlbnRpZmllciBvciBhbmltYXRpb24gbmFtZS4gTmFtZXMgYXJlIGdlbmVyYXRlZCB1c2luZyBhIHNpbXBsZSBpbmNyZW1lbnRpbmcgbnVtYmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVOYW1lKCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiAocHJlZml4ID8gcHJlZml4IDogc191bmlxdWVTdHlsZU5hbWVzUHJlZml4KSArIHNfbmV4dFVuaXF1ZUlEKys7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTG9va3MgdXAgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb25cclxuLy8gY2xhc3MuIElmIGZvdW5kIGFuZCBpZiB0aGUgcHJvcGVydHkgaXMgYSBydWxlLCB0aGVuIHJldHVybnMgdGhlIG5hbWUgYXNzaWduZWQgZm9yIGl0LlxyXG5mdW5jdGlvbiBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcywgcnVsZU5hbWU6IHN0cmluZylcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbkNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBwcm90b3R5cGVzXHJcbiAgICBmb3IoIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGRlZmluaXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIGJhc2VDbGFzcyAhPT0gU3R5bGVEZWZpbml0aW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBiYXNlIGNsYXNzIGFscmVhZHkgaGFzIGFuIGFzc29jaWF0ZWQgaW5zdGFuY2U7IGlmIHllcywgY2hlY2sgd2hldGhlclxyXG5cdFx0Ly8gaXQgaGFzZSBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIHJ1bGUgbmFtZS4gSWYgeWVzLCB0aGVuIHVzZSB0aGlzIHJ1bGUncyBhbHJlYWR5XHJcblx0XHQvLyBnZW5lcmF0ZWQgbmFtZSAoaWYgZXhpc3RzKS5cclxuXHRcdGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYmFzZUluc3QgPSBiYXNlQ2xhc3Nbc3ltSW5zdGFuY2VdO1xyXG5cdFx0XHRpZiAoYmFzZUluc3QgJiYgcnVsZU5hbWUgaW4gYmFzZUluc3QgJiYgXCJuYW1lXCIgaW4gYmFzZUluc3RbcnVsZU5hbWVdKVxyXG5cdFx0XHRcdHJldHVybiBiYXNlSW5zdFtydWxlTmFtZV0ubmFtZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm9jZXNzaW5nIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgYXNzaWducyBuYW1lcyB0byBpdHMgcnVsZXMuXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdlIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gaW5zdGFuY2UgYWxyZWFkeVxyXG4gKiBjcmVhdGVkIGZvciBpdCBhcyBhIGNsYXNzIHdpbGwgaGF2ZSBvbmx5IGEgc2luZ2xlIGFzc29jaWF0ZWQgaW5zdGFuZSBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXNcclxuICogdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAqIFxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCAoYW4gaW5zdGFuY2Ugb2YgdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcykgdGhlbiB3ZSBjaGVjayB3aGV0aGVyXHJcbiAqIGl0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBJZiB5ZXMsIHdlIGp1c3QgcmV0dXJuIGl0IGJhY2s7IGlmIG5vLCB3ZSBhc3NpZ24gbmV3IHVuaXF1ZSBuYW1lc1xyXG4gKiB0byBpdHMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3M6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuXHRwYXJlbnQ/OiBTdHlsZURlZmluaXRpb24pOiBTdHlsZURlZmluaXRpb24gfCBudWxsXHJcbntcclxuXHRpZiAoIWluc3RPckNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGluc3RPckNsYXNzIGhhcyB0eXBlIFwib2JqZWN0XCIgaWYgaXQgaXMgYW4gaW5zdGFuY2UgYW5kIFwiZnVuY3Rpb25cIiBpZiBpdCBpcyBhIGNsYXNzXHJcblx0aWYgKHR5cGVvZiBpbnN0T3JDbGFzcyA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRwcm9jZXNzSW5zdGFuY2UoIGluc3RPckNsYXNzKTtcclxuXHRcdHJldHVybiBpbnN0T3JDbGFzcztcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBkZWZpbml0aW9uIGNsYXNzIGlzIGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIGFuIGluc3RhbmNlXHJcblx0XHRyZXR1cm4gaW5zdE9yQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpXHJcblx0XHRcdD8gaW5zdE9yQ2xhc3Nbc3ltSW5zdGFuY2VdXHJcblx0XHRcdDogcHJvY2Vzc0NsYXNzKCBpbnN0T3JDbGFzcywgcGFyZW50KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBieSBjcmVhdGluZyBpdHMgaW5zdGFuY2UgYW5kIGFzc29jaWF0aW5nIGFcclxuICogcnVsZSBjb250YWluZXIgb2JqZWN0IHdpdGggaXQuIFRoZSBjbGFzcyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5zdGFuY2UgdXNpbmcgdGhlXHJcbiAqIFN5bWJvbCBwcm9wZXJ0eS4gVGhlIG93bmVyIHBhcmFtZXRlciBpcyBhIHJlZmVyZW5jZSB0byB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvblxyXG4gKiBvYmplY3Qgb3IgbnVsbCBpZiB0aGUgZ2l2ZW4gY2xhc3MgaXMgaXRzZWxmIGEgdG9wLWxldmVsIGNsYXNzICh0aGF0IGlzLCBpcyBub3QgYSBjbGFzc1xyXG4gKiB0aGF0IGRlZmluZXMgcnVsZXMgd2l0aGluIG5lc3RlZCBncm91cGluZyBydWxlcykuXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ2xhc3MoIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdHBhcmVudD86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG4gICAgLy8gcHJvY2VzcyBhbGwgdGhlIGJhc2UgY2xhc3NlcyBzbyB0aGF0IHJ1bGUgbmFtZXMgYXJlIGdlbmVyYXRlZC4gV2UgZG9uJ3QgYWN0aXZhdGUgc3R5bGVzXHJcbiAgICAvLyBmb3IgdGhlc2UgY2xhc3NlcyBiZWNhdXNlIGRlcml2ZWQgY2xhc3NlcyB3aWxsIGhhdmUgYWxsIHRoZSBydWxlcyBmcm9tIGFsbCB0aGUgYmFzZSBjbGFzc2VzXHJcbiAgICAvLyBhcyB0aGVpciBvd24gYW5kIHNvIHRoZXNlIHJ1bGVzIHdpbGwgYmUgYWN0aXZhdGVkIGFzIHBhcnQgb2YgdGhlIGRlcml2ZWQgY2xhc3MuXHJcbiAgICBmb3IoIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGRlZmluaXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIGJhc2VDbGFzcyAhPT0gU3R5bGVEZWZpbml0aW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKVxyXG4gICAge1xyXG5cdFx0cHJvY2Vzc0NsYXNzKCBiYXNlQ2xhc3MsIHBhcmVudCk7XHJcbiAgICB9XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBkZWZpbml0aW9uQ2xhc3MoIHBhcmVudCk7XHJcblxyXG5cdFx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0XHRsZXQgbmFtZSA9IHNfdXNlVW5pcXVlU3R5bGVOYW1lcyB8fCAhZGVmaW5pdGlvbkNsYXNzLm5hbWVcclxuXHRcdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoKVxyXG5cdFx0XHQ6IGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cclxuXHRcdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSk7XHJcblx0XHRkZWZpbml0aW9uQ2xhc3Nbc3ltSW5zdGFuY2VdID0gaW5zdGFuY2U7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgU3R5bGUgRGVmaW5pdGlvbiBDbGFzcyAnJHtkZWZpbml0aW9uQ2xhc3MubmFtZX0nYCwgZXJyKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIGFuZCBhc3NpZ25zIG5hbWVzIHRvIGl0cyBydWxlcy4gSWYgdGhlXHJcbiAqIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCB3ZSBkbyBub3RoaW5nOyBvdGhlcndpc2UsIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcik6IHZvaWRcclxue1xyXG5cdC8vIGlmIHRoZSBpbnN0YW5jZSBpcyBhbHJlYWR5IHByb2Nlc3NlZCwganVzdCByZXR1cm47IGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlXHJcblx0Ly8gZW1iZWRkaW5nQ29udGFpbmVyIHBhcmFtZXRlci5cclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGluc3RhbmNlW3N5bUNvbnRhaW5lcl0gYXMgUnVsZUNvbnRhaW5lcjtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0bGV0IG5hbWUgPSBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRpZiAoIXNfdXNlVW5pcXVlU3R5bGVOYW1lcylcclxuXHR7XHJcblx0XHRsZXQgZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2UuY29uc3RydWN0b3I7XHJcblx0XHRpZiAoZGVmaW5pdGlvbkNsYXNzLm5hbWUpXHJcblx0XHRcdG5hbWUgKz0gXCJfXCIgKyBkZWZpbml0aW9uQ2xhc3MubmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIGNyZWF0ZSBjb250YWluZXIgLSB0aGlzIHdpbGwgYXNzb2NpYXRlIHRoZSBuZXcgY29udGFpbmVyIHdpdGggdGhlIGluc3RhbmNlIGFuZCBwcm9jZXNzXHJcblx0Ly8gdGhlIHJ1bGVzLlxyXG5cdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSwgZW1iZWRkaW5nQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBydWxlIGNvbnRhaW5lciBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiBSdWxlQ29udGFpbmVyXHJcbntcclxuXHRyZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZVtzeW1Db250YWluZXJdIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmIHRoZSBpbnB1dCBvYmplY3QgaXNcclxuICogbm90IGEgc3R5bGUgZGVmaW5pdGlvbiBidXQgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCBvYnRhaW4gc3R5bGUgZGVmaW5pdGlvbiBieSBjYWxsaW5nIHRoZSAkdXNlXHJcbiAqIGZ1bmN0aW9uLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lc1xyXG4gKiBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZCB0byBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXJcclxuICogZ29lcyB1cCB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdFx0cnVsZUNvbnRhaW5lci5hY3RpdmF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZVxyXG4gKiBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY291bnQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxyXG5cdFx0XHRydWxlQ29udGFpbmVyLmRlYWN0aXZhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gdG8gdGhlIGdpdmVuIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG57XHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHQgICAgcnVsZUNvbnRhaW5lci5zZXJpYWxpemVSdWxlcyggY3R4KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lDdXN0b21WYXIsIE9uZU9yTWFueX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFBzZXVkb0VudGl0eSwgQ3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzcywgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHJvcGVydGllcyB1c2VkIGluIHRoZSBbW0NvbWJpbmVkU3R5bGVzZXRdXSB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgZGVwZW5kZW50IHJ1bGVzICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yQ29tYmluYXRvciA9IFwiJlwiIHwgXCImLFwiIHwgXCImIFwiIHwgXCImPlwiIHwgXCImK1wiIHwgXCImflwiIHwgXCIsJlwiIHwgXCIgJlwiIHwgXCI+JlwiIHwgXCIrJlwiIHwgXCJ+JlwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbWJpbmVkU3R5bGVzZXQgdHlwZSBleHRlbmRzIHRoZSBTdHlsZXNldCB0eXBlIHdpdGggY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgcHJvdmlkZVxyXG4gKiBhZGRpdGlvbmFsIG1lYW5pbmcgdG8gdGhlIHN0eWxlc2V0IGFuZCBhbGxvdyBidWlsZGluZyBkZXBlbmRlbnQgc3R5bGUgcnVsZXM6XHJcbiAqIC0gVGhlIGArYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBwc2V1ZG8gY2xhc3MgbmFtZXMgKGUuZy4gXCI6aG92ZXJcIikgb3IgcHNldWRvIGVsZW1lbnQgbmFtZXMgKGUuZy4gXCI6OmFmdGVyXCIpLlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIG5hbWVzIG9mIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgKGUuZy4gXCI6bnRoLWNoaWxkXCIpIG9yIHBhcmFtZXRlcml6ZWRcclxuICogICBwc2V1ZG8gZWxlbWVudHMgKGUuZy4gXCI6OnNsb3R0ZWRcIikuIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBhIHR1cGxlLCB3aGVyZSB0aGUgZmlyc3RcclxuICogICBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgZm9yIHRoZSBzZWxlY3RvciBhbmQgdGhlIHNlY29uZCBlbGVtZW50IGlzIHRoZSBzdHlsZXNldC5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCB0aGUgYW1wZXJzYW5kIHN5bWJvbCAoJyYnKSB0aGF0IGNvbnRhaW4gYXJyYXlzIG9mIHR3by1lbGVtZW50IHR1cGxlcyBlYWNoXHJcbiAqICAgZGVmaW5pbmcgYSBzZWxlY3RvciBhbmQgYSBzdHlsZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgc2VsZWN0b3IuIFNlbGVjdG9ycyBjYW4gdXNlIHRoZVxyXG4gKiAgIGFtcGVyc2FuZCBzeW1ib2wgdG8gcmVmZXIgdG8gdGhlIHBhcmVudCBzdHlsZSBzZWxlY3Rvci4gSWYgdGhlIGFtcGVyc2FuZCBzeW1ib2wgaXMgbm90IHVzZWQsXHJcbiAqICAgdGhlIHNlbGVjdG9yIHdpbGwgYmUgc2ltcGx5IGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcbiAqIFxyXG4gKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gc3R5bGUgcnVsZXMgKGUuZy4gJGNsYXNzKSBhY2NlcHQgdGhlIENvbWJpbmVkU3R5bGVzZXQgYXMgYSBwYXJhbWV0ZXIsXHJcbiAqIGZvciBleGFtcGxlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxuICoge1xyXG4gKiAgICAgY2xhc3MxID0gY3NzLiRjbGFzcyh7fSlcclxuICogICAgIGNsYXNzMiA9IGNzcy4kY2xhc3Moe1xyXG4gKiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gKiAgICAgICAgIFwiOmhvdmVyXCIgOiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIgfSxcclxuICogICAgICAgICBcIiZcIjogW1xyXG4gKiAgICAgICAgICAgICBbIFwibGkgPiAmXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiIH0gXSxcclxuICogICAgICAgICAgICAgWyB0aGlzLmNsYXNzMSwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIgfSBdXHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgfSlcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgd2lsbCB0cmFuc2xhdGUgdG8gdGhlIGZvbGxvd2luZyBDU1MgKGNsYXNzIG5hbWUgaXMgYXV0by1nZW5lcmF0ZWQpOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB3aGl0ZTsgfVxyXG4gKiAubTEyMzpob3ZlciB7IGJhY2tncm91bmRDb2xvcjogZ3JleTsgfVxyXG4gKiBsaSA+IC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3c7IH1cclxuICogLm0xMjMubTEyMiB7IGJhY2tncm91bmRDb2xvcjogb3JhbmdlOyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tYmluZWRTdHlsZXNldCA9IFN0eWxlc2V0ICZcclxuXHR7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBDb21iaW5lZFN0eWxlc2V0IH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHldPzogW0lQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5W0tdLCBDb21iaW5lZFN0eWxlc2V0XVtdIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMgdGhhdCBoYXZlIGEgbmFtZTsgdGhhdCBpcyxcclxuICogY2xhc3MsIElELCBrZXlmcmFtZXMgYW5kIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3RydWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBkZXBlbmRlbnQgcnVsZXMgb2YgYSBzdHlsZSBydWxlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEZXBlbmRlbnRSdWxlcyA9XHJcblx0eyBbSyBpbiBQc2V1ZG9FbnRpdHldPzogSVN0eWxlUnVsZSB9ICZcclxuXHR7IFtLIGluIFNlbGVjdG9yQ29tYmluYXRvcl0/OiBJU3R5bGVSdWxlW10gfSAmXHJcblx0eyBbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlW10gfTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxpbmcgcnVsZSBpbiBhIHN0eWxlIHNoZWV0LiBTdHlsZSBydWxlcyBjYW4gYmUgdXNlZFxyXG4gKiBhbnl3aGVyZSB3aGVyZSBzdHlsZSBwcm9wZXJ0aWVzIGNhbiBiZSBkZWZpbmVkOiBjbGFzcyBydWxlcywgSUQgcnVsZXMsIHNlbGVjdG9yIHJ1bGVzLFxyXG4gKiBrZXlmcmFtZXMsIGV0Yy4gU3R5bGVSdWxlIGRlZmluZXMgYSBzdHlsZXNldCBhbmQgY2FuIG9wdGlvbmFsbHkgcG9pbnQgdG8gb25lIG9yIG1vcmUgc3R5bGUgcnVsZXNcclxuICogZnJvbSB3aGljaCBpdCBpbmhlcml0cy4gQSBzdHlsZXNldCBjb21iaW5lcyBhbGwgdGhlIHByb3BlcnRpZXMgZnJvbSBpdHMgb3duIHByb3BlcnR5IGJsb2NrIGFzXHJcbiAqIHdlbGwgYXMgZnJvbSBhbGwgb2Ygc3R5bGUgcnVsZXMgaXQgaW5oZXJpdGVzIGZyb20uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3R5bGVSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHJlYWRvbmx5IHNlbGVjdG9yVGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBPYmplY3QgY29udGFpbmluZyBkZXBlbmRlbnQgcnVsZXMuIFByb3BlcnR5IG5hbWVzIGFyZSB0YWtlbiBmcm9tIHNwZWNpYWwgcHJvcGVydGllc1xyXG5cdCAqIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBUaGlzIG9iamVjdCBhbGxvd3MgY2FsbGVycyB0byBhY2Nlc3MgZGVwZW5kZW50IHJ1bGVzIHRvIGNoYW5nZVxyXG5cdCAqIHN0eWxlIHByb3BlcnR5IHZhbHVlcyBwcm9ncmFtbWF0aWNhbGx5LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG1vbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBjdXN0b21WYXIgSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBjdXN0b21WYXI6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0aW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRTdHlsZVJ1bGUgaW50ZXJmYWNlIGNvbWJpbmVzIElTdHlsZVJ1bGUgYW5kIElOYW1lZEVudGl0eSBpbnRlcmZhY2VzLiBUaGlzIGlzIHVzZWRcclxuICogZm9yIGNsYXNzIGFuZCBJRCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHdoZXJlIHRoZSBzZWxlY3RvciBpcyBhIHNpbmdsZSBjbGFzcyBuYW1lLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NSdWxlIGV4dGVuZHMgSU5hbWVkU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgY2xhc3MgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0NsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUlEUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGVsZW1lbnQgSUQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJRFJ1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRyZWFkb25seSBjc3NJRE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbldheXBvaW50IHR5cGUgZGVmaW5lcyBhIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSB3YXlwb2ludCBpbiBhblxyXG4gKiBhbmltYXRpb24gc2VxdWVuY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25XYXlwb2ludCA9IE9uZU9yTWFueTxcImZyb21cIiB8IFwidG9cIiB8IG51bWJlcj47XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblN0eWxlcyB0eXBlIGRlZmluZXMgYSBvYmplY3QgY29udGFpbmluZyBzdHlsZSBwcm9wZXJ0aWVzIGZvciBhbiBhbmltYXRpb24gZnJhbWUuXHJcbiAqIFN0eWxlc2V0cyBmb3Iga2V5ZnJhbWVzIGFsbG93IGN1c3RvbSBwcm9wZXJ0aWVzICh2aWEgXCItLVwiKS4gQW5pbWF0aW9uIHN0eWxlc2V0IGNhbiBleHRlbmRcclxuICogb3RoZXIgc3R5bGUgcnVsZXM7IGhvd2V2ZXIsIGFueSBkZXBlbmRlbnQgcnVsZXMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3R5bGVzZXQgPSBTdHlsZXNldCAmIHsgXCIrXCI/OiBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdIH07XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lIHR5cGUgZGVmaW5lcyBhIHNpbmdsZSBrZXlmcmFtZSB3aXRoaW4gYSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIFRoZSB3YXlwb2ludCBjYW4gYmUgc3BlY2lmaWVkIGFzIFwiZnJvbVwiIG9yIFwidG9cIiBzdHJpbmdzIG9yIGFzIGEgbnVtYmVyIDAgdG8gMTAwLCB3aGljaCB3aWxsIGJlXHJcbiAqIHVzZWQgYXMgYSBwZXJjZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRnJhbWUgPSBbQW5pbWF0aW9uV2F5cG9pbnQsIEFuaW1hdGlvblN0eWxlc2V0XTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvblJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGtleWZyYW1lc11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRyZWFkb25seSBmcmFtZVJ1bGVzOiBJQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvbkZyYW1lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNpbmdsZSBmcmFtZSBpbiB0aGUgQGtleWZyYW1lcyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50ICovXHJcblx0cmVhZG9ubHkgd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50O1xyXG5cclxuXHQvKiogU09NIGtleWZyYW1lIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdmFyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYXJSdWxlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+IGV4dGVuZHMgSU5hbWVkRW50aXR5LCBJQ3VzdG9tVmFyPFZhclZhbHVlVHlwZTxLPj5cclxue1xyXG5cdC8qKiBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuICovXHJcblx0cmVhZG9ubHkgdGVtcGxhdGU6IEs7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ291bnRlclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBuYW1lZCBjb3VudGVyIGRlZmluaXRpb24uIFVzZSB0aGlzIHJ1bGUgdG8gY3JlYXRlXHJcbiAqIGNvdW50ZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIGluIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZVxyXG4gKiBwcm9wZXJ0aWVzLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBjb3VudGVycyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlXHJcbiAqIGNvdW50ZXIgZGVmaW5pdGlvbnMuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRjb3VudGVyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudGVyUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRyZWFkb25seSBjb3VudGVyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAY291bnRlci1zdHlsZSBydWxlLlxyXG4vLyAgKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlclN0eWxlXV0gZnVuY3Rpb24uXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElDb3VudGVyU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGUsIElOYW1lZEVudGl0eVxyXG4vLyB7XHJcbi8vIFx0LyoqIFNPTSBjb3VudGVyLXN0eWxlIHJ1bGUgKi9cclxuLy8gXHRyZWFkb25seSBjc3NSdWxlOiBDU1NDb3VudGVyU3R5bGVSdWxlIHwgbnVsbDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJbXBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skaW1wb3J0XV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbXBvcnRSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gaW1wb3J0IHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NJbXBvcnRSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElGb250RmFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAZm9udC1mYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRmb250ZmFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9udEZhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NGb250RmFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVzcGFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRuYW1lc3BhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gbmFtZXNwYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NOYW1lc3BhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYWdlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRwYWdlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cmVhZG9ubHkgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NQYWdlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JpZExpbmVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZGVmaW5pdGlvbiBvZiBhIG5hbWVkIGdyaWQgbGluZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGdyaWRsaW5lXV0gZnVuY3Rpb24gb3IgY3JlYXRlZFxyXG4gKiB3aGVuIGEgZ3JpZCBhcmVhIGlzIGRlZmluZWQgdXNpbmcgdGhlIFtbJGdyaWRhcmVhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkTGluZVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGluZSBpcyBhIHN0YXJ0IG9yIGVuZCBsaW5lIG9mIGEgZ3JpZCBhcmVhLiBUaGUgdmFsdWUgaXMgdHJ1ZVxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgc3RhcnQgbGluZTsgZmFsc2UgaWYgdGhpcyBpcyB0aGUgZW5kIGxpbmU7IGFuZCB1bmRlZmluZWQgaWYgdGhlIGxpbmUgaXNcclxuICAgICAqIG5vdCByZWxhdGVkIHRvIGFueSBhcmVhLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGdyaWQgYXJlYSBvZiB3aGljaCB0aGUgbGluZSBpcyBlaXRoZXIgYSBzdGFydCBvciBhbiBlbmQgbGluZS4gSXQgaXMgZGVmaW5lZFxyXG4gICAgICogb25seSBpZiB0aGUgbGluZSBuYW1lIGVuZHMgd2l0aCBcIi1zdGFydFwiIG9yIFwiLWVuZFwiLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBhcmVhTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyaWRBcmVhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRlZmluaXRpb24gb2YgYSBuYW1lZCBncmlkIGFyZS4gR3JpZCBhcmVhIHJ1bGVcclxuICogZGVmaW5lcyB0d28gbGluZSBydWxlczogZm9yIGl0cyBzdGFydCBhbmQgZW5kIGxpbmVzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZ3JpZGFyZWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRBcmVhUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcbiAgICAvKiogU3RhcnQgbGluZSBvZiB0aGUgYXJlYS4gKi9cclxuICAgIHJlYWRvbmx5IHN0YXJ0TGluZTogSUdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvKiogRW5kIGxpbmUgb2YgdGhlIGFyZWEuICovXHJcbiAgICByZWFkb25seSBlbmRMaW5lOiBJR3JpZExpbmVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBgJHBhcmVudGAgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZVxyXG4gKiB0byB0aGUgcGFybnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gRGV2ZWxvcGVycyBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYWNjZXNzIHJ1bGVzIGluXHJcbiAqIHRoZSBjaGFpbiBvZiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMuIFdlIG5lZWQgdGhpcyBzeW1ib2wgdG8gYXZvaWQgZW51bWVyYXRpbmcgdGhlIGAkcGFyZW50YFxyXG4gKiBwcm9wZXJ0eSB3aGVuIHByb2Nlc3NpbmcgdGhlIHJ1bGVzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmNvbnN0IHN5bVBhcmVudCA9IFN5bWJvbChcInBhcmVudFwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbCB0aGF0IGlzIHVzZWQgYnkgdGhlIGAkb3duZXJgIHByb3BlcnR5IGluIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgdGhhdCBrZWVwcyByZWZlcmVuY2VcclxuICogdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBEZXZlbG9wZXJzIGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhY2Nlc3MgcnVsZXMgaW5cclxuICogdGhlIGNoYWluIG9mIG5lc3RlZCBncm91cGluZyBydWxlcy4gV2UgbmVlZCB0aGlzIHN5bWJvbCB0byBhdm9pZCBlbnVtZXJhdGluZyB0aGUgYCRvd25lcmBcclxuICogcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBzeW1Pd25lciA9IFN5bWJvbChcIm93bmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBjbGFzc2VzIHRoYXQgY29udGFpbiBkZWZpbmluaXRpb25zIG9mIENTUyBydWxlcy5cclxuICogQHR5cGVwYXJhbSBQIFBhcmVudCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBQYXJlbnQgb2YgdG9wLWx2ZWwgY2xhc3MgaXMgbnVsbC5cclxuICogQHR5cGVwYXJhbSBPIFRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBjbGFzcy4gVGhlIHRvcC1sZXZlbFxyXG4gKiBjbGFzcyBpcyBpdHMgb3duIG93bmVyLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlRGVmaW5pdGlvbjxQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFyZSBjcmVhdGVkIGRpcmVjdGx5IG9ubHkgYnkgdGhlICpzdHlsZWQgY29tcG9uZW50cyogLSB0aGF0IGlzLFxyXG5cdCAqIGNvbXBvbmVudHMgdGhhdCB1c2UgZGlmZmVyZW50IHN0eWxlcyBmb3IgZWFjaCBpbnN0YW5jZS4gT3RoZXJ3aXNlLCBzdHlsZSBkZWZpbml0aW9uXHJcblx0ICogY2xhc3MgaW5zdGFuY2VzIGFyZSBjcmVhdGVkIHdoZW4gZWl0aGVyIHRoZSBbWyR1c2VdXSBvciBbW2FjdGl2YXRlXV0gZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSBwYXJlbnQgUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcGFyZW50PzogUClcclxuXHR7XHJcblx0XHR0aGlzW3N5bVBhcmVudF0gPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIC8vIE93bmVyIGlzIHRha2VuIGZyb20gdGhlIHBhcmVudCBjbGFzczsgYSB0b3AtbGV2ZWwgY2xhc3MgaXMgaXRzIG93biBvd25lci5cclxuXHRcdHRoaXNbc3ltT3duZXJdID0gcGFyZW50ID8gcGFyZW50LiRvd25lciA6IHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBwYXJudCBvZiB0aGlzIHN0eWxlXHJcbiAgICAgKiBkZWZpbml0aW9uIG9iamVjdCBpbiB0aGUgY2hhaW4gb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLiBUaHJvdWdoIHRoaXMgbWVtYmVyLCBhbGwgcnVsZXNcclxuICAgICAqIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIHBhcmVudCBkZWZpbml0aW9uIGNsYXNzIGNhbiBiZSBhY2Nlc3NlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0ICRwYXJlbnQoKTogUCB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBvd25lciBvZlxyXG5cdCAqIHRoaXMgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuIFRoZSBvd25lciBpcyB0aGUgdG9wLWxldmVsIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBzdHlsZVxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhyb3VnaCB0aGlzIG1lbWJlciwgYWxsIHJ1bGVzIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIG93bmVyXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCAkb3duZXIoKTogTyB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZURlZmluaXRpb25DbGFzczxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPFAsTz4gPSBhbnksXHJcbiAgICBQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqIEFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldyggcGFyZW50PzogUCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JvdXBSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZ3JvdXBpbmcgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHJlYWRvbmx5IHJ1bGVzOiBUO1xyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3VwcG9ydHNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRlZCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcnVsZSdzIHF1ZXJ5ICovXHJcbiAgICByZWFkb25seSBpc1N1cHBvcnRlZDogYm9vbGVhbjtcclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNZWRpYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbWVkaWEgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG1lZGlhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGVyVHlwZSBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgdXNlZCB0byBkZWZpbmUgaG93IHRoZSBjYWxscyB0byB0aGVcclxuICogYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHNjaGVkdWxlIHRoZSB3cml0aW5nIG9mIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFNjaGVkdWxlclR5cGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFN5bmNocm9ub3VzIGFjdGl2YXRpb24gLSBzdHlsZSBkZWZpbml0aW9ucyBhcmUgd3JpdHRlbiB0byB0aGUgRE9NIHVwb24gdGhlIGFjdGl2YXRlXHJcblx0ICogYW5kIGRlYWN0aXZhdGUgY2FsbHMuXHJcblx0ICovXHJcblx0U3luYyA9IDEsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIG5leHQgYW5pbWF0aW9uXHJcblx0ICogZnJhbWUgYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0QW5pbWF0aW9uRnJhbWUsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIGNhbGwgdG8gdGhlXHJcblx0ICogZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0TWFudWFsLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNjaGVkdWxlciBpbnRlcmZhY2Ugc2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IGN1c3RvbSBzY2hlZHVsZXJzLiBJdHMgbWV0aG9kcyBhcmUgaW52b2tlZFxyXG4gKiBieSB0aGUgYWN0aXZhdGlvbiBpbmZyYXN0cnVjdHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzY2hlZHVsZXIgb2JqZWN0IGFuZCBwcm92aWRlcyB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZVxyXG4gICAgICogc2NoZWR1bGVyIGRlY2lkZXMgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKTtcclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufSIsImltcG9ydCB7U2NoZWR1bGVyVHlwZSwgU3R5bGVEZWZpbml0aW9uLCBJU2NoZWR1bGVyfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHthY3RpdmF0ZUluc3RhbmNlLCBkZWFjdGl2YXRlSW5zdGFuY2V9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtTdHJpbmdTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFjdGl2YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgcmVzcG9uc2libGUgZm9yIGEgY2VydGFpbiB0eXBlIG9mIGFjdGl2YXRpb25cclxuICogbWVjaGFuaXNtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aXZhdG9yXHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGRlYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBzZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gICAgICogQ1NTIHN0eWxlIG9iamVjdC5cclxuXHQgKi9cclxuICAgIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0Zm9yY2VET01VcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbERPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICogQ1NTIHN0eWxlIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcbntcclxuICAgIGlmICghbmFtZSAmJiB2YWx1ZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChydWxlT3JFbG0gaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5jc3NUZXh0ID0gXCJcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIChydWxlT3JFbG0gYXMgYW55IGFzIEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggbmFtZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlIGFzIHN0cmluZywgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHlsZXNldCA9IHZhbHVlIGFzIFN0cmluZ1N0eWxlc2V0O1xyXG4gICAgICAgIGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGVbcHJvcE5hbWVdID0gc3R5bGVzZXRbcHJvcE5hbWVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3luY2hyb25vdXNBY3RpdmF0b3IgY2xhc3MgcmVwcmVzZW50cyB0aGUgc3luY2hyb25vdXMgYWN0aXZhdGlvbiBtZWNoYW5pc20sIHdoaWNoIHdyaXRlc1xyXG4gKiBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00gd2hlbiB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXHJcbiAqL1xyXG5jbGFzcyBTeW5jaHJvbm91c0FjdGl2YXRvciBpbXBsZW1lbnRzIElBY3RpdmF0b3Jcclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqIEBwYXJhbSBkZWZpbml0aW9uXHJcblx0ICovXHJcblx0cHVibGljIGFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0YWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogZGVhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICogQHBhcmFtIGRlZmluaXRpb25cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGRlYWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gc2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICAgICAqIENTUyBzdHlsZSBvYmplY3QuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsIG5hbWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBmb3JjZURPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZm9yY2VET01VcGRhdGUoKTogdm9pZCB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZCB7fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIG9iamVjdHMgdGhhdCBhcmUgdXNlZCBieSB0aGUgU2NoZWR1bGluZ0FjdGl2YXRvciBjbGFzcyBmb3Igc2V0dGluZyBwcm9wZXJ0eSB2YWx1ZXMuXHJcbiAqIFdoZW4gYm90aCBuYW1lIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGFyZSBudWxsLCB0aGUgc3R5bGUgd2lsbCBiZSBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nXHJcbiAqIGVmZmVjdGl2ZWx5IHJlbW92aW5nIGFsbCBzdHlsZXMgZnJvbSB0aGUgZWxlbWVudCBvciB0aGUgcnVsZS5cclxuICovXHJcbmludGVyZmFjZSBTY2hlZHVsZWRTdHlsZVByb3BWYWx1ZVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBTdHlsZSBvYmplY3QgaW4gd2hpY2ggdG8gc2V0IHRoZSBwcm9wZXJ0eSB2YWx1ZS4gVGhlIHN0eWxlIG9iamVjdCBjYW4gYmVsb25nIHRvIGVpdGhlciBhXHJcbiAgICAgKiBzdHlsZSBydWxlZSBvciB0byBhbiBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuXHRydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBEYXNoZS1jYXNlZCBwcm9wZXJ0eSBuYW1lIGlmIHNldHRpbmcgYSB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvciBudWxsIGlmIHNldHRpbmcgdmFsdWVzXHJcbiAgICAgKiBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0bmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBQcm9wZXJ0eSB2YWx1ZSBpZiBzZXR0aW5nIGEgdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBTdHJpbmdTdHlsZXNldCBvYmplY3QgaWYgc2V0dGluZ1xyXG4gICAgICogdmFsdWVzIG9mIG11bHRpcGxlIHByb3BlcnRpZXMuIElmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgaXQgaXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG5cdHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgbWFya2VkIFwiIWltcG9ydGFudFwiLiBUaGlzIGZsYWcgaXMgaWdub3JlZFxyXG4gICAgICogd2hlbiBzZXR0aW5nIHZhbHVlcyBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0aW1wb3J0YW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxpbmdBY3RpdmF0b3IgY2xhc3Mga2VlcHMgYSBtYXAgb2YgU3R5bGVEZWZpbml0aW9uIGluc3RhbmNlcyB0aGF0IGFyZSBzY2hlZHVsZWQgZm9yXHJcbiAqIGFjdGl2YXRpb24gb3IgZGVhY3RpdmF0aW9uLiBFYWNoIGluc3RhbmNlIGlzIG1hcHBlZCB0byBhIHJlZmVybmNlIGNvdW50LCB3aGljaCBpcyBpbmNyZW1lbnRlZFxyXG4gKiB1cG9uIHRoZSBhY3RpdmF0ZSBjYWxscyBhbmQgZGVjcmVtZW50ZWQgdXBvbiB0aGUgZGVhY3RpdmF0ZSBjYWxscy4gV2hlbiB0aGUgZG9BY3RpdmF0aW9uXHJcbiAqIG1ldGhvZCBpcyBjYWxsZWQgVGhlIHN0eWxlIGRlZmluaXRpb24gd2lsbCBiZSBlaXRoZXIgYWN0aXZhdGVkIG9yIGRlYWN0aXZhdGVkIGJhc2VkIG9uIHdoZXRoZXJcclxuICogdGhlIHJlZmVyZW5jZSBjb3VudCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsaW5nQWN0aXZhdG9yIGltcGxlbWVudHMgSUFjdGl2YXRvclxyXG57XHJcbiAgICAvLyBNYXAgb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbnN0YW5jZXMgdG8gdGhlIHJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25zID0gbmV3IE1hcDxTdHlsZURlZmluaXRpb24sbnVtYmVyPigpO1xyXG5cclxuICAgIC8vIEFycmF5IG9mIHN0eWxlIHByb3BlcnR5IHZhbHVlcyB0byBiZSBzZXQvcmVtb3ZlZC5cclxuICAgIHByaXZhdGUgcHJvcHM6IFNjaGVkdWxlZFN0eWxlUHJvcFZhbHVlW10gPSBbXTtcclxuICAgIFxyXG4gICAgLy8gb3B0aW9uYWwgc2NoZWR1bGVyIG9iamVjdFxyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHNjaGVkdWxlcj86IElTY2hlZHVsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHNjaGVkdWxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlci5pbml0KCAoKSA9PiB0aGlzLmRvRE9NVXBkYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5kZWxldGUoIGRlZmluaXRpb24pO1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGVET01VcGRhdGUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5zZXQoIGRlZmluaXRpb24sICsrcmVmQ291bnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLmRlbGV0ZSggZGVmaW5pdGlvbik7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuc2V0KCBkZWZpbml0aW9uLCAtLXJlZkNvdW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIHNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAgICAgKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5wdXNoKHsgcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50IH0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGluIG91ciBpbnRlcm5hbCBtYXAuXHJcblx0ICovXHJcblx0cHVibGljIGZvcmNlRE9NVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID4gMCB8fCB0aGlzLnByb3BzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcbiAgICAgICAgICAgIHRoaXMuZG9ET01VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbmNlbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA+IDAgfHwgdGhpcy5wcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyQWN0aXZhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5kIHByb3BlcnR5IHNldCBvcGVyYXRpb25zIGFjY3VtdWxhdGVkIGludGVybmFsbHkuIFRoaXNcclxuICAgICAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCBieSB0aGUgZGVyaXZlZCBjbGFzc2VzIHdoZW4gc2NoZWR1bGVkIGFjdGl2YXRpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIGFjdGl2YXRlL2RlYWN0aXZhdGUgc3R5bGUgZGVmaW5pdGlvbnNcclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuZm9yRWFjaCggKHJlZkNvdW50OiBudW1iZXIsIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbikgPT5cclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlZkNvdW50ID4gMClcclxuXHRcdFx0XHRhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCByZWZDb3VudCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkZWFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIC1yZWZDb3VudCk7XHJcblx0XHR9KVxyXG5cclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdHRoaXMucHJvcHMuZm9yRWFjaCggcHJvcCA9PiB1cGRhdGVTdHlsZVByb3BlcnR5KCBwcm9wLnJ1bGVPckVsbSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlLCBwcm9wLmltcG9ydGFudCkpO1xyXG5cdFx0dGhpcy5wcm9wcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcnMgYWxsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGRhdGEgZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY2xlYXJBY3RpdmF0aW9uKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBbXTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVNjaGVkdWxlciBpbXBsZW1lbnRzIHNjaGVkdWxpbmcgdXNpbmcgYW5pbWF0aW9uIGZyYW1lcy5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIGltcGxlbWVudHMgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBIYW5kbGUgcmV0dXJuZWQgYnkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVxdWVzdEhhbmRsZSA9IDA7XHJcblxyXG4gICAgLy8gQ2FsbGJhY2sgdG8gY2FsbCB0byB3cml0ZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSA9IGRvRE9NVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2NoZWR1bGVET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKHRoaXMucmVxdWVzdEhhbmRsZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlcXVlc3RIYW5kbGUpO1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIGFuaW1hdGlvbiBmcmFtZSBzaG91bGQgYmUgZXhlY3V0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBvbkFuaW1hdGlvbkZyYW1lID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0dGhpcy5kb0RPTVVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2NoZWR1bGVzIHRoZSB1cGRhdGUgb2YgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhlIGdpdmVuIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLFxyXG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbCwgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsXHJcbiAgICBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+XHJcblx0XHRhY3RpdmF0b3Iuc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50KSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlcyBjYWxsaW5nIG9mIHRoZSBnaXZlbiBmdW5jdGlvbiB1c2luZyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZUNhbGwoIGZ1bmM6IChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IHZvaWQsIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgYWN0aXZhdG9yID0gc2NoZWR1bGVyVHlwZSA9PSBudWxsID8gc19kZWZhdWx0QWN0aXZhdG9yIDogc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5nZXQoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgaWYgKGFjdGl2YXRvcilcclxuXHRcdGZ1bmMoIGFjdGl2YXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfZGVmYXVsdFNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGRlZmF1bHQgc2NoZWR1bGluZyB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxpbmcgcGFyYW1ldGVyLiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZVxyXG4gKiBwcmV2aW91cyBkZWZhdWx0IGFjdGl2YXRvciBvciAwIGlmIGFuIGVycm9yIG9jY3VycyAoZS5nLiB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgSUQgaXMgbm90XHJcbiAqIHJlZ2lzdGVyZWQpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGU6IG51bWJlcik6IG51bWJlclxyXG57XHJcbiAgICAvLyBjaGVjayB0aGF0IHRoZSBnaXZlbiBudW1iZXIgaXMgaW4gb3VyIG1hcCBvZiByZWdpc3RlcmVkIGFjdGl2YXRvcnNcclxuICAgIGxldCBhY3RpdmF0b3IgPSBzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLmdldCggc2NoZWR1bGVyVHlwZSk7XHJcblx0aWYgKCFhY3RpdmF0b3IpXHJcblx0XHRyZXR1cm4gMDtcclxuXHJcblx0bGV0IHByZXZTY2hlZHVsZXJUeXBlID0gc19kZWZhdWx0U2NoZWR1bGVyVHlwZTtcclxuICAgIHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPSBzY2hlZHVsZXJUeXBlO1xyXG4gICAgc19kZWZhdWx0QWN0aXZhdG9yID0gYWN0aXZhdG9yO1xyXG5cdHJldHVybiBwcmV2U2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzY2hlZHVsZXIgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLCB3aGljaFxyXG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcjogSVNjaGVkdWxlcik6IG51bWJlclxyXG57XHJcblx0Ly8gZ2V0IHRoZSByZWdpc3RyYXRpb24gSUQgZm9yIHRoaXMgc2NoZWR1bGVyXHJcblx0bGV0IGlkID0gc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZSsrO1xyXG5cdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBpZCwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoIHNjaGVkdWxlcikpO1xyXG5cdHJldHVybiBpZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlcnMgYSBzY2hlZHVsZXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc191bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0aWYgKGlkID49IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlKVxyXG5cdHtcclxuXHRcdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuZGVsZXRlKCBpZCk7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGRlbGV0ZWQgc2NoZWR1bGVyIHdhcyBvdXIgZGVmYXVsdCBvbmUsIHdlIHNldCB0aGUgZGVmYXVsdCB0byBTWU5DXHJcbiAgICAgICAgaWYgKHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPT09IGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19kZWZhdWx0U2NoZWR1bGVyVHlwZSA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuICAgICAgICAgICAgc19kZWZhdWx0QWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyLiBUaGlzIHNjaGVkdWxlciB3aWxsIGJlIHVzZWQgaWYgc2NoZWR1bGVyIHR5cGUgaXMgbm90IGV4cGxpY2l0bHlcclxuICogc3BlY2lmaWVkIGluIGNhbGxzIHN1Y2ggYXMgYWN0aXZhdGUgb3IgSVN0eWxlUnVsZS5zZXRQcm9wLlxyXG4gKi9cclxubGV0IHNfZGVmYXVsdFNjaGVkdWxlclR5cGU6IG51bWJlciA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuXHJcbi8qKlxyXG4gKiBTeW5jaHJvbm91cyBhY3RpdmF0b3IgaW5zdGFuY2UuXHJcbiAqL1xyXG5sZXQgc19zeW5jaHJvbm91c0FjdGl2YXRvciA9IG5ldyBTeW5jaHJvbm91c0FjdGl2YXRvcigpO1xyXG5cclxuLyoqXHJcbiAqIEN1cnJlbnQgZGVmYXVsdCBhY3RpdmF0b3IuIFRoaXMgYWN0aXZhdG9yIHdpbGwgYmUgdXNlZCBpZiBzY2hlZHVsZXIgdHlwZSBpcyBub3QgZXhwbGljaXRseVxyXG4gKiBzcGVjaWZpZWQgaW4gY2FsbHMgc3VjaCBhcyBhY3RpdmF0ZSBvciBJU3R5bGVSdWxlLnNldFByb3AuXHJcbiAqL1xyXG5sZXQgc19kZWZhdWx0QWN0aXZhdG9yOiBJQWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBmaXJzdCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqIEFsbCBjdXN0b20gc2NoZWR1bGVyIGlkZW50aWZpZXJzIGFyZSBncmVhdGVyIG9yIGVxdWFsIHRvIHRoaXMgbnVtYmVyLlxyXG4gKi9cclxuY29uc3Qgc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU6IG51bWJlciA9IDEwMDE7XHJcblxyXG4vKipcclxuICogU2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciB0byBiZSBhc3NpZ25lZCB0byB0aGUgbmV4dCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5sZXQgc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZTogbnVtYmVyID0gc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcmVnaXN0ZXJlZCBidWlsdC1pbiBhbmQgY3VzdG9tIGFjdGl2YXRvcnMuXHJcbiAqL1xyXG5sZXQgc19yZWdpc3RlcmVkQWN0aXZhdG9ycyA9IG5ldyBNYXA8bnVtYmVyLElBY3RpdmF0b3I+KCk7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgYnVpbHQtaW4gYW5kIGN1c3RvbSBhY3RpdmF0b3JzLlxyXG4gKi9cclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuU3luYywgc19zeW5jaHJvbm91c0FjdGl2YXRvcik7XHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLkFuaW1hdGlvbkZyYW1lLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvciggbmV3IEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKCkpKTtcclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuTWFudWFsLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvcigpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBDb21iaW5lZFN0eWxlc2V0LCBJVmFyUnVsZSwgRGVwZW5kZW50UnVsZXMsIElOYW1lZEVudGl0eSwgSUNsYXNzUnVsZSwgSUlEUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBDdXN0b21WYXJfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIGNyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge21lcmdlU3R5bGVzZXRzLCBzdHlsZXNldFRvU3RyaW5nLCBzdHlsZVByb3BUb1N0cmluZywgbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge3ZhbDJzdHIsIGNhbWVsVG9EYXNofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuL1ZhclJ1bGVcIjtcclxuaW1wb3J0IHtwc2V1ZG9FbnRpdHlUb1N0cmluZywgc2VsZWN0b3JUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvckZ1bmNzXCI7XHJcbmltcG9ydCB7c19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGV9IGZyb20gXCIuL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgY29udGFpbiBhIHN0eWxlIHJ1bGUuIFRoaXMgY2xhc3NcclxuICogaW1wbGVtZW50cyB0aGUgcGFyc2luZyBvZiB0aGUgQ29tYmluZWRTdHlsZXNldCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFRoZSBzdHlsZXNldCBjYW4gYmUgYW4gQ29tYmluZWRTdHlsZXNldCBmb3IgbWFueSBydWxlczsgaG93ZXZlciwgZm9yIHNvbWUgaXQgaXMganVzdFxyXG5cdC8vIG9mIHRoZSBTdHlsZXNldCB0eXBlLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVzZXQgPSB7fTtcclxuXHRcdHRoaXMuZGVwZW5kZW50UnVsZXMgPSB7fTtcclxuXHJcblx0XHRpZiAoc3R5bGVzZXQpXHJcblx0XHRcdHRoaXMucGFyc2VJbnB1dFN0eWxlc2V0KCBzdHlsZXNldCBhcyBDb21iaW5lZFN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR29lcyBvdmVyIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuIHN0eWxlc2V0IGFuZCBwYXJzZXMgdGhlbSBpbnRvIHByb3BlciBzdHlsZXNldCwgc2V0IG9mXHJcblx0ICogaW1wb3J0YW50IHByb3BlcnRpZXMgYW5kIGRlcGVuZGVudCBydWxlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlSW5wdXRTdHlsZXNldCggaW5wdXRTdHlsZXNldDogQ29tYmluZWRTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB3ZSBoYXZlIHBhcmVudHMsIHdlIGZpcnN0IGNvcHkgcHJvcGVydGllcyBmcm9tIHRoZW0gc28gdGhhdCBvdXIgb3duIHByb3BlcnRpZXNcclxuXHRcdC8vIGNhbiBvdmVycmlkZSB0aGVtLlxyXG5cdFx0aWYgKGlucHV0U3R5bGVzZXRbXCIrXCJdKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB0aGUgdmFsdWUgaXMgYSBzaW5nbGUgU3R5bGVSdWxlIG9yIGFuIGFycmF5IG9mIFN0eWxlUnVsZXMgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cclxuXHRcdFx0bGV0IGV4dGVuZHNQcm9wVmFsID0gaW5wdXRTdHlsZXNldFtcIitcIl0gYXMgKFN0eWxlUnVsZSB8IFN0eWxlUnVsZVtdKTtcclxuXHRcdFx0bGV0IHBhcmVudFJ1bGVzOiBTdHlsZVJ1bGVbXTtcclxuXHRcdFx0aWYgKGV4dGVuZHNQcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVSdWxlKVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gW2V4dGVuZHNQcm9wVmFsXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gZXh0ZW5kc1Byb3BWYWw7XHJcblxyXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIHBhcmVudCBydWxlcywgY29weSBzdHlsZXNldHMgYW5kIGRlcGVuZGVudCBydWxlcyBmcm9tIHRoZW0uXHJcblx0XHRcdGlmIChwYXJlbnRSdWxlcyAmJiBwYXJlbnRSdWxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyZW50UnVsZXMuZm9yRWFjaCggcGFyZW50ID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBwYXJlbnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWVyZ2UgY3VzdG9tICBwcm9wZXJ0aWVzXHJcblx0XHRtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRoaXMuc3R5bGVzZXQsIGlucHV0U3R5bGVzZXQpO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIGlucHV0U3R5bGVzZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgb3ZlciBhbHJlYWR5IHByb2Nlc3NlZCBwYXJlbnRzLCBpbXBvcnRhbnQgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzXHJcblx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCIrXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBwcm9wVmFsID0gaW5wdXRTdHlsZXNldFtwcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiOlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGlzIGlzIGFuIGFycmF5IG9mIHR1cGxlcyByZXByZXNlbnRpbmdcclxuXHRcdFx0XHQvLyBwYXJhbWV0ZXJpc2VkIHBzZXVkbyBlbnRpdGllcyB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcGFyYW1ldGVyIHZhbHVlXHJcblx0XHRcdFx0Ly8gKHN0cmluZykgYW5kIHRoZSBzZWNvbmQgdGhlIENvbWJpbmVkU3R5bGVzZXQuIE90aGVyd2lzZSwgdGhlIHZhbHVlIGlzIGp1c3QgYW5cclxuXHRcdFx0XHQvLyBDb21iaW5lZFN0eWxlc2V0LlxyXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFthbnksIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdFx0cHJvcE5hbWUsIHR1cGxlWzBdLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ldyBEZXBlbmRlbnRSdWxlKCBcIiZcIiArIHByb3BOYW1lLCB1bmRlZmluZWQsXHJcblx0XHRcdFx0XHRcdHByb3BWYWwgYXMgQ29tYmluZWRTdHlsZXNldCwgdGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiJlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHR0dXBsZVswXSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0KCkgPT4gcHJvcE5hbWUgKyBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSksIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuZW5kc1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSkgKyBwcm9wTmFtZSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGlzIGlzIGEgcmVndWxhciBDU1MgcHJvcGVydHk6IGNvcHkgdGhlIHByb3BlcnR5IHZhbHVlIHRvIG91ciBpbnRlcm5hbCBzdHlsZXNldFxyXG5cdFx0XHRcdHRoaXMuc3R5bGVzZXRbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBwcm9jZXNzIHRoZW0gdW5kZXIgdGhlIHNhbWUgY29udGFpbmVyXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHByb3RlY3RlZCBjb3B5RnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uIGEgbmV3bHkgY3JlYXRlZCBvYmplY3Qgc28gd2UgZG9uJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyBpblxyXG5cdFx0Ly8gb3VyIG93biBzdHlsZXNldCB5ZXRcclxuXHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgc3JjLnN0eWxlc2V0KTtcclxuXHRcdHRoaXMuY29weURlcGVuZGVudFJ1bGVzRnJvbSggc3JjKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGRlcGVuZGVudCBydWxlcyBmcm9tIGFub3RoZXIgc3R5bGUgcnVsZSBvYmplY3QuXHJcblx0cHJpdmF0ZSBjb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzcmMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gc3JjLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGFyciA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmICghYXJyKVxyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBhcnIgPSBbXTtcclxuXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoc3JjRGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IHNyY0RlcFJ1bGUuY2xvbmUoKSBhcyBEZXBlbmRlbnRSdWxlO1xyXG5cdFx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0XHRhcnIucHVzaCggbmV3RGVwUnVsZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld0RlcFJ1bGUgPSAocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBuZXdEZXBSdWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBydWxlLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiBgJHt0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nfSB7JHtzdHlsZXNldFRvU3RyaW5nKCB0aGlzLnN0eWxlc2V0KX19YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN0eWxlUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gdGhpcy5jbG9uZU9iamVjdCgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzZXQpLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCB0aGlzLnRvQ3NzU3RyaW5nKCksIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgaW5zZXJ0IHRoZW0gdW5kZXIgdGhlIHNhbWUgcGFyZW50XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuaW5zZXJ0KCBwYXJlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGNsZWFyIHRoZW0gdG9vXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5jbGVhcigpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsZWFyKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzZXQpLmxlbmd0aCA+IDApXHJcblx0XHRcdGN0eC5hZGRSdWxlVGV4dCggdGhpcy50b0Nzc1N0cmluZygpKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGluc2VydCB0aGVtIHVuZGVyIHRoZSBzYW1lIHBhcmVudFxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLnNlcmlhbGl6ZSggY3R4KTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cHVibGljIGdldCBzZWxlY3RvclRleHQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPT0gbnVsbClcclxuXHRcdFx0dGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9IHRoaXMuZ2V0U2VsZWN0b3JTdHJpbmcoKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgdGhlIG9iamVjdCB0byBwYXJ0aWNwYXRlIGluIFwidmFsdWVUb1N0cmluZ1wiIHNlcmlhbGl6YXRpb24uIFdoZW5ldmVyXHJcblx0ICogdGhlIFN0eWxlUnVsZS1kZXJpdmVkIG9iamVjdCBpcyBlbmNvdW50ZXJlZCBieSB0aGUgYFV0aWxGdW5jLnZhbHVlVG9TdHJpbmdgIGZ1bmN0aW9uLFxyXG5cdCAqIHRoZSBydWxlJ3Mgc2VsZWN0b3Igd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdG9yVGV4dDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBzdHlsZSBydWxlIG9iamVjdCBvZiB0aGUgcHJvcGVyIHR5cGUsIGJ1dCB3aXRob3V0IHRoZSBzdHlsZXNldCBhbmQgZGVwZW5kZW50XHJcblx0Ly8gcnVsZXMuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGNsb25lT2JqZWN0KCk6IFN0eWxlUnVsZTtcclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2V0UHJvcDxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBFeHRlbmRlZFN0eWxlc2V0W0tdLFxyXG4gICAgICAgIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmlyc3Qgc2V0L3JlbW92ZSB0aGUgdmFsdWUgaW4gb3VyIGludGVybmFsIHN0eWxlc2V0IG9iamVjdFxyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdGRlbGV0ZSB0aGlzLnN0eWxlc2V0W25hbWVdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnN0eWxlc2V0W25hbWVdID0gaW1wb3J0YW50ID8geyBcIiFcIjogdmFsdWUgYXMgYW55IH0gOiB2YWx1ZSBhcyBhbnk7XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBpZiBDU1NSdWxlIGFscmVkeSBleGlzdHMsIHNldC9yZW1vdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRoZXJlXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG4gICAgICAgIHtcclxuXHRcdCAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggdGhpcy5jc3NSdWxlLCBjYW1lbFRvRGFzaCggbmFtZSksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCBuYW1lLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIHZhck9iaiBJVmFyUnVsZSBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YXJWYWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdmFyT2JqIHx8ICEodmFyT2JqIGluc3RhbmNlb2YgVmFyUnVsZSkpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRsZXQgY3VyckN1c3RvbVByb3BzID0gdGhpcy5zdHlsZXNldFtcIi0tXCJdIGFzIEN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuXHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMgfHwgdmFsdWUgIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoY3VyckN1c3RvbVByb3BzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gY3VyckN1c3RvbVByb3BzLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtWzBdID09PSB2YXJPYmopO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID09PSAxKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbXCItLVwiXSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFjdXJyQ3VzdG9tUHJvcHMpXHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0W1wiLS1cIl0gPSBjdXJyQ3VzdG9tUHJvcHMgPSBbW3Zhck9iaiwgdmFsdWVdXTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gY3VyckN1c3RvbVByb3BzLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtWzBdID09PSB2YXJPYmopO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDApXHJcblx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wc1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzLnB1c2goIFt2YXJPYmosIHZhbHVlXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBpZiBDU1NSdWxlIGFscmVkeSBleGlzdHMsIHNldC9yZW1vdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRoZXJlXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHRoaXMuY3NzUnVsZSwgdmFyT2JqLmNzc05hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCB2YXJPYmoudGVtcGxhdGUsIHZhbHVlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHQvKipcclxuXHQgKiBPYmplY3QgY29udGFpbmluZyBkZXBlbmRlbnQgcnVsZXMuIFByb3BlcnR5IG5hbWVzIGFyZSB0YWtlbiBmcm9tIHNwZWNpYWwgcHJvcGVydGllc1xyXG5cdCAqIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBUaGlzIG9iamVjdCBhbGxvd3MgY2FsbGVycyB0byBhY2Nlc3MgZGVwZW5kZW50IHJ1bGVzIHRvIGNoYW5nZVxyXG5cdCAqIHN0eWxlIHByb3BlcnR5IHZhbHVlcyBwcm9ncmFtbWF0aWNhbGx5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXBlbmRlbnRSdWxlczogRGVwZW5kZW50UnVsZXM7XHJcblxyXG5cdC8vIFJlc3VsdGFudCBvYmplY3QgZGVmaW5pbmcgcHJvcGVydGllcyB0byBiZSBpbnNlcnRlZCBpbnRvIERPTS5cclxuXHRwcml2YXRlIHN0eWxlc2V0OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gU2VsZWN0b3Igc3RyaW5nIGNhY2hlZCBhZnRlciBpdCBpcyBmaXJzdCBvYnRhaW5lZC4gTmVlZGVkIHRvIG5vdCBpbnZva2UgZ2V0U2VsZWN0b3JTdHJpbmdcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgcHJlc2VuY2Ugb2YgZGVwZW5kZW50IHJ1bGVzLlxyXG5cdHByaXZhdGUgY2FjaGVkU2VsZWN0b3JTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRGVwZW5kZW50UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGRlcGVuZHMgb24gdGhlIGNvbnRhaW5pbmcgc3R5bGUgcnVsZS4gVGhpc1xyXG4gKiBpcyB1c2VkIGZvciBwc2V1ZG8gY2xhc3NlcywgcHNldWRvIGVsZW1lbnRzLCBjb21iaW5hdG9ycyBhbmQgb3RoZXIgc2VsZWN0b3JzIHRoYXQgY29tYmluZSB0aGVcclxuICogY29udGFpbmluZyBydWxlJ3Mgc2VsZWN0b3Igd2l0aCBhZGRpdGlvbmFsIHNlbGVjdG9yIGl0ZW1zLlxyXG4gKi9cclxuY2xhc3MgRGVwZW5kZW50UnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0Ly8gZm9yIHJlZ3VsYXIgc2VsZWN0b3JzLCBwc2V1ZG8gY2xhc3NlcyBhbmQgcHNldWRvIGVsZW1lbnRzLCB0aGUgc2VsZWN0b3IgYWxyZWFkeSBjb250YWluc1xyXG5cdC8vIHRoZSBhbXBlcnNhbmQgYW5kIHRoZSBzZWxlY3RvclBhcmFtIGlzIHVuZGVmaW5lZC4gRm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMsIHBzdWRvXHJcblx0Ly8gZWxlbWVudHMgYW5kIGNvbWJpbmF0b3JzLCB0aGUgc2VsZWN0b3JQYXJhbSBpcyBkZWZpbmVkIGFuZCB0aGUgc2VsZWN0b3IgaXMganVzdCB0aGUgZW50aXR5XHJcblx0Ly8gbmFtZS5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc2VsZWN0b3JQYXJhbT86IGFueSwgc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG5cdFx0Y29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHRcdHRoaXMuc2VsZWN0b3JQYXJhbSA9IHNlbGVjdG9yUGFyYW07XHJcblx0XHR0aGlzLmNvbnRhaW5pbmdSdWxlID0gY29udGFpbmluZ1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBEZXBlbmRlbnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBEZXBlbmRlbnRSdWxlKCB0aGlzLnNlbGVjdG9yLCB0aGlzLnNlbGVjdG9yUGFyYW0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcGFyZW50U2VsZWN0b3IgPSB0aGlzLmNvbnRhaW5pbmdSdWxlIS5zZWxlY3RvclRleHQ7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RvclBhcmFtKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yIGFzIHN0cmluZztcclxuXHRcdFx0cmV0dXJuIGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9KCR7cHNldWRvRW50aXR5VG9TdHJpbmcoIHNlbGVjdG9yLCB0aGlzLnNlbGVjdG9yUGFyYW0pfSlgO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb252ZXJ0IHNlbGVjdG9yIHRvIHN0cmluZy5cclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gc2VsZWN0b3JUb1N0cmluZyggdGhpcy5zZWxlY3Rvcik7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgc2VsZWN0b3Igc3RyaW5nIGRvZXNuJ3QgaGF2ZSBhbnkgb2NjdXJyZW5jZXMgb2YgdGhlIGFtcGVyc2FuZCBzeW1ib2wsIHdlXHJcblx0XHRcdC8vIHNpbXBseSBhcHBlbmQgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3I7IG90aGVyd2lzZSwgd2UgcmVwbGFjZSBhbGxcclxuXHRcdFx0Ly8gb2NjdXJyZW5jZXMgb2YgdGhlIGFtcGVyc2FuZCBzeW1ib2wgaW4gdGhlIHNlbGVjdG9yIHN0cmluZyB3aXRoIHRoZSBzZWxlY3RvclxyXG5cdFx0XHQvLyBzdHJpbmcgb2YgdGhlIHBhcmVudCBydWxlLlxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3IuaW5kZXhPZiggXCImXCIpIDwgMFxyXG5cdFx0XHRcdD8gYCR7cGFyZW50U2VsZWN0b3J9JHtzZWxlY3Rvcn1gXHJcblx0XHRcdFx0OiBzZWxlY3Rvci5yZXBsYWNlKCAvJi9nLCBwYXJlbnRTZWxlY3Rvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcnRpYWwgc2VsZWN0b3IgdGhhdCBzaG91bGQgYmUgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBzZWxlY3Rvci5cclxuXHRwcml2YXRlIHNlbGVjdG9yOiBDc3NTZWxlY3RvcjtcclxuXHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlbGVjdG9yIC0gdXNlZCBmb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyBhbmQgZWxlbWVudHMuXHJcblx0cHJpdmF0ZSBzZWxlY3RvclBhcmFtPzogYW55O1xyXG5cclxuXHQvLyBQYXJlbnQgc3R5bGUgcnVsZSBvZiB3aGljaCB0aGlzIHJ1bGUgaXMgZGVwZW5kZW50LlxyXG5cdHB1YmxpYyBjb250YWluaW5nUnVsZT86IFN0eWxlUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFic3RyYWN0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBvbmx5IGJlIHVzZWQgYXMgYSBiYXNlIGZvciBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQWJzdHJhY3RSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBBYnN0cmFjdFJ1bGUoKTtcclxuXHR9XHJcblxyXG5cdC8vIE92ZXJyaWRlcyB0aGUgU3R5bGVSdWxlJ3MgaW1wbGVtZW50YXRpb24gdG8gZG8gbm90aGluZy4gTm8gQ1NTU3R5bGVSdWxlIGlzIGNyZWF0ZWQgZm9yXHJcblx0Ly8gYWJzdHJhY3QgcnVsZXMuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5hbWVkU3R5bGVSdWxlIGNsYXNzIGlzIGEgYmFzZSBmb3Igc3R5bGUgcnVsZSBjbGFzc2VzIHRoYXQgYXJlIGFsc28gbmFtZWQgZW50aXRpZXMgLSBzdWNoXHJcbiAqIGFzIGNsYXNzIHJ1bGUgYW5kIElEIHJ1bGUuXHJcbiAqL1xyXG5hYnN0cmFjdCBjbGFzcyBOYW1lZFN0eWxlUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElOYW1lZEVudGl0eVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUsIHRoaXMuY3NzUHJlZml4KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc05hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgdG9TdHJpbmcgbWV0aG9kIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHJ1bGUgKHdpdGhvdXQgdGhlIENTUyBwcmVmaXgpLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldCBjc3NQcmVmaXgoKTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByb3RlY3RlZCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDbGFzc1J1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBDU1MgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NSdWxlIGV4dGVuZHMgTmFtZWRTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQ2xhc3NSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBjbGFzcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cHVibGljIGdldCBjc3NDbGFzc05hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3NzTmFtZTsgfVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IENsYXNzUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ2xhc3NSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIi5cIjsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGFuIElELlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElEUnVsZSBleHRlbmRzIE5hbWVkU3R5bGVSdWxlIGltcGxlbWVudHMgSUlEUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgZWxlbWVudCBJRCBwcmVmaXhlZCB3aXRoIFwiI1wiICovXHJcblx0cHVibGljIGdldCBjc3NJRE5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3NzTmFtZTsgfVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IElEUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgSURSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIiNcIjsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2VsZWN0b3JSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBDU1Mgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogU2VsZWN0b3JSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBTZWxlY3RvclJ1bGUoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0Ly8gc2VsZWN0b3Igb2JqZWN0IGZvciB0aGlzIHJ1bGUuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJVmFyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtWYXJWYWx1ZVR5cGUsIFZhclRlbXBsYXRlTmFtZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBWYXJSdWxlIGRvZXMgbm90IGRlcml2ZSBmcm9tIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGJlY2F1c2UgaXQgaXMgbm90IGEgcmVhbCBDU1MgcnVsZTsgaG93ZXZlciwgaW4gbWFueSBhc3BlY3RzIGl0IHJlcGVhdHMgdGhlIFJ1bGUnc1xyXG4gKiBmdW5jdGlvbmFsaXR5LiBJbiBwYXJ0aWN1bGFyIGl0IGhhcyB0aGUgcHJvY2VzcyBmdW5jdGlvbiB0aGF0IGFsbG93cyBpdCB0byBvYnRhaW4gYW4gYWN0dWFsXHJcbiAqIG5hbWUsIHdoaWNoIHdpbGwgYmUgdXNlZCB3aGVuIGRlZmluaW5nIGFuZCB1c2luZyB0aGlzIGN1c3RvbSBwcm9wZXJ0eSBpbiBDU1MuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgdGhlIHR5cGUgcGFyYW1ldGVyIEsgaXMgYSBrZXkgb2YgdGhlIElDc3NTdHlsZXNldCBpbnRlcmZhY2UsIHRoZSB2YWx1ZSBpcyBvZlxyXG4gKiB0eXBlIElTdGlsZXNldFtLXSwgd2hpY2ggaXMgRXh0ZW5kZWQ8SUNzc1N0eWxlc2V0W0tdPi4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZyB2YWx1ZXMgdGhhdCBhcmVcclxuICogdmFsaWQgZm9yIHRoZSBFeHRlbmRlZCByb3BlcnR5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSVZhclJ1bGU8Sz5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdGVtcGxhdGU6IEssIHZhbHVlPzogVmFyVmFsdWVUeXBlPEs+LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPilcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUsIFwiLS1cIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBWYXJSdWxlPEs+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBWYXJSdWxlPEs+KHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnZhbHVlID09IG51bGwgPyBudWxsIDogYCR7dGhpcy5jc3NOYW1lfTogJHtzdHlsZVByb3BUb1N0cmluZyggdGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdHJ1ZSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIHZhcigtLW5hbWUpIGV4cHJlc3Npb24uXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiBgdmFyKCR7dGhpcy5jc3NOYW1lfSlgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRWYWx1ZSggdmFsdWU6IFZhclZhbHVlVHlwZTxLPiwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDdXN0b21WYXJWYWx1ZSggdGhpcy5jc3NOYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSlcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvLyAvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyAvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdC8vIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcblx0cHVibGljIHRlbXBsYXRlOiBLO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgdmFsdWU6IFZhclZhbHVlVHlwZTxLPjtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lOYW1lZENvbG9ycywgQ3NzQ29sb3IsIENvbG9yc30gZnJvbSBcIi4vQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQW5nbGVNYXRoLCB2YWwyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcmVkZWZpbmVkIGNvbG9yIG5hbWVzIGJ5IHRoZWlyIG51bWVyaWMgdmFsdWVzLiBPbmx5IGJ1aWx0LWluIGNvbG9yIG5hbWVzIHdpbGwgYmUgaW5cclxuICogdGhpcyBtYXAgLSB0aG9zZSBuYW1lZCBjb2xvcnMgdGhhdCBhcmUgYWRkZWQgdXNpbmcgbW9kdWxlIGF1Z21lbnRhdGlvbiB3aWxsIE5PVCByZXNpZGUgaW5cclxuICogdGhpcyBtYXAuIFRoaXMgaXMgbmVlZGVkIHRvIGNvbnZlcnQgdGhlIG51bWVyaWMgY29sb3IgdmFsdWVzIHNldCB1c2luZyB0aGUgQ29sb3IuYnJvd25cclxuICogbm90YXRpb24gdG8gdGhlaXIgbmFtZXMgd2hlbiBpbnNlcnRpbmcgQ1NTIHJ1bGVzLlxyXG4gKi9cclxubGV0IHJldmVyc2VkQ29sb3JNYXAgPSBuZXcgTWFwPG51bWJlcixzdHJpbmc+KCk7XHJcblxyXG4vLyBidWlsZCBSZXZlcnNlZCBDb2xvciBNYXBcclxuT2JqZWN0LmVudHJpZXMoIENvbG9ycykuZm9yRWFjaCggKFtuYW1lLCB2YWx1ZV0pID0+IHJldmVyc2VkQ29sb3JNYXAuc2V0KCB2YWx1ZSwgbmFtZSkgKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvck51bWJlclRvU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB0aGUgbnVtYmVyIGlzIG5lZ2F0aXZlLCByZW1lbWJlciB0aGF0IGZhY3QgYW5kIGdldCB0aGUgcG9zaXRpdmUgbnVtYmVyXHJcbiAgICBsZXQgbiA9IHZhbCA8IDAgPyAtdmFsIDogdmFsO1xyXG4gICAgbGV0IGlzTmVnYXRpdmUgPSBuICE9PSB2YWw7XHJcblxyXG4gICAgLy8gaWYgdGhlIG51bWJlciBoYXMgYSBmbG9hdGluZyBwb2ludCBwYXJ0LCBzZXBhcmF0ZSBpdCBpbnRvIGFscGhhIGNoYW5uZWxcclxuICAgIGxldCBhID0gMDtcclxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuKSlcclxuICAgIHtcclxuICAgICAgICBsZXQgayA9IE1hdGguZmxvb3Iobik7XHJcbiAgICAgICAgLy8gYSA9IE1hdGgucm91bmQoIChuIC0gaykgKiAxMDApO1xyXG4gICAgICAgIGEgPSBNYXRoLnJvdW5kKCAobiAtIGspICogMjU1KTtcclxuICAgICAgICBuID0gaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgbnVtYmVyIHdhcyBuZWdhdGl2ZSB3ZSByZXZlcnQgdGhlIGNvbG9yIGJ5IG5lZ2F0aW5nIGFsbCB0aGUgYml0cy4gSW4gYW55IGNhc2UsXHJcbiAgICAvLyB3ZSBjbGVhciBldmVyeXRoaW5nIGJleW9uZCB0aGUgZmlyc3QgdGhyZWUgYnl0ZXMuXHJcbiAgICBuID0gaXNOZWdhdGl2ZSA/IH4oMHhGRjAwMDAwMCB8IG4pIDogMHgwMEZGRkZGRiAmIG47XHJcblxyXG4gICAgaWYgKGEgPiAwKVxyXG4gICAgICAgIC8vIHJldHVybiBjb2xvcldpdGhBbHBoYVRvU3RyaW5nKCBuLCBhKTtcclxuICAgICAgICAvLyByZXR1cm4gcmdiVG9TdHJpbmcoIChuICYgMHhGRjAwMDApID4+IDE2LCAobiAmIDB4MDBGRjAwKSA+PiA4LCBuICYgMHgwMDAwRkYsIGEpO1xyXG4gICAgICAgIHJldHVybiBcIiNcIiArIG4udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCA2LCBcIjBcIikgKyBhLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggMiwgXCIwXCIpO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lZCBjb2xvciB3aXRoIHRoZSBnaXZlbiB2YWx1ZSwgcmV0dXJuIHRoZSBjb2xvciBuYW1lXHJcbiAgICAgICAgbGV0IG5hbWUgPSByZXZlcnNlZENvbG9yTWFwLmdldCggbik7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgPyBuYW1lIDogXCIjXCIgKyBuLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggNiwgXCIwXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc2VwYXJhdGlvbiB2YWx1ZSB0byBhIENTUyBzdHJpbmcuIFNlcGFyYXRpb24gYXJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIEBwYXJhbSBjIENvbG9yIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXBhcmF0aW9uVG9TdHJpbmcoIGM6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoYyAhPT0gMCAmJiBjID4gLTEgJiYgYyA8IDEpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaW52ZXJ0IG5lZ2F0aXZlIHZhbHVlXHJcbiAgICAgICAgaWYgKGMgPCAwKVxyXG4gICAgICAgICAgICBjID0gMSArIGM7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCBjICogMTAwKSArIFwiJVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNsYW1wIHRoZSB2YWx1ZSBiZXR3ZWVuIC0yNTUgYW5kIDI1NVxyXG4gICAgICAgIGMgPSBjID4gMjU1ID8gMjU1IDogYyA8IC0yNTUgPyAtMjU1IDogYztcclxuXHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGMpKVxyXG4gICAgICAgICAgICBjID0gTWF0aC5yb3VuZChjKTtcclxuXHJcbiAgICAgICAgLy8gaW52ZXJ0IG5lZ2F0aXZlIHZhbHVlXHJcbiAgICAgICAgaWYgKGMgPCAwKVxyXG4gICAgICAgICAgICBjID0gMjU1ICsgYztcclxuXHJcbiAgICAgICAgcmV0dXJuIGMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nLiBBbHBoYSBpcyByZXByZXNlbnRlZCBhcyBhIG51bWJlclxyXG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBhbHBoYVRvU3RyaW5nKCBhPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIGFscGhhIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBzZXQgaXQgdG8gMVxyXG4gICAgaWYgKGEgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCIxXCI7XHJcblxyXG4gICAgLy8gbmVnYXRpdmUgYW5kIHBvc2l0aXZlIHZhbHVlcyBvZiBhbHBoYSBhcmUgdHJlYXRlZCBpZGVudGljYWxseSwgc28gY29udmVydCB0byBwb3NpdGl2ZVxyXG4gICAgaWYgKGEgPCAwKVxyXG4gICAgICAgIGEgPSAtYTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGFscGhhIHRvIGEgbnVtYmVyIHdpdGggYWJzb2x1dGUgdmFsdWUgbGVzcyB0aGFuIDEgKGlmIGl0IGlzIG5vdCB5ZXQpLiBJZiBhbHBoYVxyXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIDEwMCwgc2V0IGl0IHRvIDE7IG90aGVyd2lzZSwgXHJcbiAgICByZXR1cm4gKGEgPiAxMDAgPyAxIDogYSA+IDEgPyBhIC8gMTAwIDogYSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIHdpdGhcclxuICogdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvU3RyaW5nKCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgcmdiYSgke3NlcGFyYXRpb25Ub1N0cmluZyggcil9LCR7c2VwYXJhdGlvblRvU3RyaW5nKCBnKX0sJHtzZXBhcmF0aW9uVG9TdHJpbmcoIGIpfSwke2FscGhhVG9TdHJpbmcoIGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIG51bWJlciByZXByZXNlbnRpbmcgZWl0aGVyIHNhdHVyYXRpb24gb3IgbGlnaHRuZXNzIGluIHRoZSBIU0wgc2NoZW1lIHRvIHBlcmNlbnRhZ2U6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICovXHJcbmZ1bmN0aW9uIGNvbG9yUGVyY2VudFRvU3RyaW5nKCBuOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gbmVnYXRpdmUgYW5kIHBvc2l0aXZlIHZhbHVlcyBhcmUgdHJlYXRlZCBpZGVudGljYWxseSwgc28gY29udmVydCB0byBwb3NpdGl2ZVxyXG4gICAgaWYgKG4gPCAwKVxyXG4gICAgICAgIG4gPSAtbjtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGFscGhhIHRvIGEgbnVtYmVyIHdpdGggYWJzb2x1dGUgdmFsdWUgbGVzcyB0aGFuIDEgKGlmIGl0IGlzIG5vdCB5ZXQpLiBJZiBhbHBoYVxyXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIDEwMCwgY2xhbXAgaXQuIFxyXG4gICAgcmV0dXJuIChuID4gMTAwID8gMTAwIDogTWF0aC5yb3VuZChuIDw9IDEgPyBuICogMTAwIDogbikpLnRvU3RyaW5nKCkgKyBcIiVcIjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyBodWUtc2F0dXJhdGlvbi1saWdodG5lc3MgY29tcG9uZW50cyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3JcclxuICogdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgSHVlIGNvbXBvbmVudCBpcyB0cmVhdGVkIGFzIHRoZSBDU1MgYDxhbmdsZT5gIHR5cGUuIE51bWJlcnMgYXJlIGNvbnNpZGVyZWQgZGVncmVlcy5cclxuICogXHJcbiAqIFRoZSBTYXR1cmF0aW9uIGFuZCBMaWdodG5lc3MgY29tcG9uZW50cyBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlczpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKlxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gaCBIdWUgY29tcG9uZW50IGFzIGFuIGFuZ2xlIHZhbHVlLlxyXG4gKiBAcGFyYW0gcyBTYXR1cmF0aW9uIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2xUb1N0cmluZyggaDogbnVtYmVyIHwgc3RyaW5nLCBzOiBudW1iZXIsIGw6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYGhzbGEoJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhoKX0sJHtjb2xvclBlcmNlbnRUb1N0cmluZyhzKX0sJHtjb2xvclBlcmNlbnRUb1N0cmluZyhsKX0sJHthbHBoYVRvU3RyaW5nKCBhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGNvbG9yIGFuZCB0aGUgYWxwaGEgbWFzayB0byB0aGUgQ1NTIENvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzXHJcbiAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvciB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgbnVtZXJpYyB2YWx1ZSBvciBhcyBhIHN0cmluZyBjb2xvciBuYW1lLlxyXG4gKiBcclxuICogVGhlIGFscGhhIG1hc2sgaXMgc3BlY2lmaWVkIGFzIGEgbnVtYmVyOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBOdW1iZXIgMSB0byAxMDAgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBOdW1iZXJzIGdyZWF0ZXIgdGhhbiAxMDAgYXJlIGNsYW1wZWQgdG8gMTAwO1xyXG4gKiBcclxuICogQHBhcmFtIGMgQ29sb3IgdmFsdWUgYXMgZWl0aGVyIGEgbnVtYmVyIG9yIGEgbmFtZWQgY29sb3JcclxuICogQHBhcmFtIGEgQWxwaGEgY2hhbm5lbCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIGM6IG51bWJlciB8IGtleW9mIElOYW1lZENvbG9ycywgYTogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHRoZSBhbHBoYSBpcyAwLCByZXR1cm4gdHJhbnNwYXJlbnQgY29sb3JcclxuICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIiMwMDAwXCI7XHJcblxyXG4gICAgLy8gY29udmVydCBjb2xvciB0byBudW1lcmljIHZhbHVlIChpZiBpdCdzIG5vdCBhIG51bWJlciB5ZXQpLiBJZiB0aGUgY29sb3Igd2FzIGdpdmVuIGFzIGFcclxuICAgIC8vIHN0cmluZyB0aGF0IHdlIGNhbm5vdCBmaW5kIGluIHRoZSBDb2xvcnMgb2JqZWN0LCByZXR1cm4gcHVyZSB3aGl0ZS5cclxuICAgIGxldCBuID0gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBDb2xvcnNbY10gOiBjO1xyXG4gICAgaWYgKG4gPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJGRkZcIjtcclxuXHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIG9mIGFscGhhIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgYSA9IC1hO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyAxIG9yIDEwMCwgdGhlbiBzZXQgaXQgdG8gMCBiZWNhdXNlIDAgaW4gdGhlIGNvbG9yTnVtYmVyVG9TdHJpbmcgbWVhbnMgXCJubyBhbHBoYVwiLlxyXG4gICAgYSA9IGEgPT09IDEgfHwgYSA+PSAxMDAgPyAwIDogYSA+IDEgPyBhIC8gMTAwIDogYTtcclxuXHJcbiAgICAvLyBtYWtlIHRoZSBuZXcgYWxwaGFcclxuICAgIHJldHVybiBjb2xvck51bWJlclRvU3RyaW5nKCBuID4gMCA/IG4gKyBhIDogbiAtIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLiBJZiBhIHN0cmluZyB2YWx1ZSBpcyBpbiB0aGUgQ29sb3JzIG9iamVjdCB3ZVxyXG4gKiBuZWVkIHRvIGdldCBpdHMgbnVtYmVyIGFuZCBjb252ZXJ0IGl0IHRvIHRoZSByZ2JbYV0oKSBmdW5jdGlvbiBiZWNhdXNlIGl0IG1pZ2h0IGJlIGEgY3VzdG9tXHJcbiAqIGNvbG9yIG5hbWUgYWRkZWQgdmlhIElOYW1lZENvbG9ycyBtb2R1bGUgYXVnbWVudGF0aW9uLiBGb3IgbnVtZXJpYyB2YWx1ZXMsIHdlIGNoZWNrIGlmIHRoaXMgaXNcclxuICogb25lIG9mIHRoZSBwcmVkZWZpbmVkIGNvbG9ycyBhbmQgcmV0dXJuIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0NvbG9yPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBDb2xvcnNbdl0gPyBjb2xvck51bWJlclRvU3RyaW5nKCBDb2xvcnNbdl0pIDogdixcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvck51bWJlclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdHlwZXMgZm9yIHdvcmtpbmcgd2l0aCBDU1MgY29sb3JzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IElHZW5lcmljUHJveHkgfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlIGxpc3RzIHRoZSBuYW1lcyBvZiBzdGFuZGFyZCBXZWIgY29sb3JzLiBJdCBpcyBuZWVkZWQgdG8gYWxsb3cgZGV2ZWxvcGVyc1xyXG4gKiB0byBhZGQgbmV3IG5hbWVkIGNvbG9ycyB0aHJvdWdoIG1vZHVsZSBhdWdtZW50YXRpb24gdGVjaG5pcXVlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRDb2xvcnNcclxue1xyXG4gICAgcmVhZG9ubHkgYmxhY2s6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2lsdmVyOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JheTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFyb29uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmVkOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcHVycGxlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZnVjaHNpYTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2eTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGVhbDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYWxpY2VibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YW1hcmluZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXp1cmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmVpZ2U6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmlzcXVlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZXZpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnJvd246ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnVybHl3b29kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2FkZXRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hhcnRyZXVzZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hvY29sYXRlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29yYWw6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybnNpbGs6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3JpbXNvbjogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3lhbjogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2JsdWU6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2N5YW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyYXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2toYWtpOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya21hZ2VudGE6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29saXZlZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yYW5nZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yY2hpZDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3JlZDogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NhbG1vbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NlYWdyZWVuOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlYmx1ZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JheTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JleTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3R1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3Zpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHBpbms6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHNreWJsdWU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JheTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JleTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmlyZWJyaWNrOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2FpbnNib3JvOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZGVucm9kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW55ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JleTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG9uZXlkZXc6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG90cGluazogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWFucmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWdvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaXZvcnk6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkga2hha2k6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXJibHVzaDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF3bmdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGVtb25jaGlmZm9uOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjb3JhbDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjeWFuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmVlbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRwaW5rOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzYWxtb246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzZWFncmVlbjogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRza3libHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyZXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGluZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFnZW50YTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYXF1YW1hcmluZTogICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtcHVycGxlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2VhZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdHVycXVvaXNlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlkbmlnaHRibHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWludGNyZWFtOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlzdHlyb3NlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbW9jY2FzaW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2YWpvd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xkbGFjZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmVkcmFiOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlcmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JjaGlkOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXR1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXZpb2xldHJlZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFwYXlhd2hpcDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVhY2hwdWZmOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVydTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGluazogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGx1bTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcG93ZGVyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm9zeWJyb3duOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm95YWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FkZGxlYnJvd246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FsbW9uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FuZHlicm93bjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2VhZ3JlZW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2llbm5hOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2t5Ymx1ZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc25vdzogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3RlZWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGFuOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGhpc3RsZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdG9tYXRvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdHVycXVvaXNlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdmlvbGV0OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hlYXQ6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGVzbW9rZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmViZWNjYXB1cnBsZTogICAgICAgICAgbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbG9yUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgb2YgQ1NTIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGZvclxyXG4gKiBzcGVjaWZ5aW5nIGNvbG9ycy4gVGhpcyBpbnRlcmZhY2UgaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZTogcmdiKCksIGFscGhhKCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9yUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiY29sb3JcIj4ge307XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3lzdGVtQ29sb3JzIHR5cGUgZGVmaW5lcyBrZXl3b3JkcyBmb3Igc3lzdGVtIGNvbG9ycyB0aGF0IGFyZSB1c2VkIGluIGZvcmNlZC1jb2xvciBtb2RlXHJcbiAqIChidXQgY2FuIGJlIGFsc28gdXNlZCBpbiB0aGUgcmVndWxhciBtb2RlKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbUNvbG9ycyA9IFwiQWN0aXZlVGV4dFwiIHwgXCJCdXR0b25GYWNlXCIgfCBcIkJ1dHRvblRleHRcIiB8IFwiQ2FudmFzXCIgfCBcIkNhbnZhc1RleHRcIiB8XHJcbiAgICBcIkZpZWxkXCIgfCBcIkZpZWxkVGV4dFwiIHwgXCJHcmF5VGV4dFwiIHwgXCJIaWdobGlnaHRcIiB8IFwiSGlnaGxpZ2h0VGV4dFwiIHwgXCJMaW5rVGV4dFwiIHwgXCJWaXNpdGVkVGV4dFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBrZXl3b3JkczogYW55IHN0cmluZyB0aGF0IGlzIGEgbmFtZSBvZiBhIHByb3BlcnR5IGluIHRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlLlxyXG4gKiAtIG51bWJlcjpcclxuICogICAtIG5lZ2F0aXZlIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgaW52ZXJ0ZWQgY29sb3JzLlxyXG4gKiAgIC0gaW50ZWdlciBwYXJ0IG9mIHRoZSBudW1iZXIgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgLSBldmVyeXRoaW5nIGVsc2UgaXNcclxuICogICAgIGlnbm9yZWQuXHJcbiAqICAgLSBmbG9hdGluZyBwb2ludCBwYXJ0IG9mIHRoZSBudW1iZXIgaXMgdHJlYXRlZCBhcyBwZXJjZW50cyBvZiBhbHBoYSBjaGFubmVsLiBJZiB0aGVyZSBpcyBub1xyXG4gKiAgICAgZmxvYXRpbmcgcGFydCwgYWxwaGEgaXMgMS5cclxuICogLSBmdW5jdGlvbnM6IHJnYigpLCBoc2woKSwgYWxwaGEoKSBhcyB3ZWxsIGFzIGFueSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIElDb2xvclByb3h5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NDb2xvciA9IFwidHJhbnNwYXJlbnRcIiB8IFwiY3VycmVudGNvbG9yXCIgfCBrZXlvZiBJTmFtZWRDb2xvcnMgfCBudW1iZXIgfCBJQ29sb3JQcm94eSB8IFN5c3RlbUNvbG9ycztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzOiBJTmFtZWRDb2xvcnMgPVxyXG57XHJcbiAgICBibGFjazogICAgICAgICAgICAgICAgICAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogICAgICAgICAgICAgICAgIDB4YzBjMGMwLFxyXG4gICAgZ3JheTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICB3aGl0ZTogICAgICAgICAgICAgICAgICAweGZmZmZmZixcclxuICAgIG1hcm9vbjogICAgICAgICAgICAgICAgIDB4ODAwMDAwLFxyXG4gICAgcmVkOiAgICAgICAgICAgICAgICAgICAgMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6ICAgICAgICAgICAgICAgICAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46ICAgICAgICAgICAgICAgICAgMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAgICAgICAgICAgICAgICAgICAweDAwZmYwMCxcclxuICAgIG9saXZlOiAgICAgICAgICAgICAgICAgIDB4ODA4MDAwLFxyXG4gICAgeWVsbG93OiAgICAgICAgICAgICAgICAgMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAgICAgICAgICAgICAgICAgICAweDAwMDA4MCxcclxuICAgIGJsdWU6ICAgICAgICAgICAgICAgICAgIDB4MDAwMGZmLFxyXG4gICAgdGVhbDogICAgICAgICAgICAgICAgICAgMHgwMDgwODAsXHJcbiAgICBhcXVhOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIG9yYW5nZTogICAgICAgICAgICAgICAgIDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAgICAgICAgICAgICAgMHhmMGY4ZmYsXHJcbiAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgICAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICAgIDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6ICAgICAgICAgICAgICAgICAgMHhmMGZmZmYsXHJcbiAgICBiZWlnZTogICAgICAgICAgICAgICAgICAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogICAgICAgICAgICAgICAgIDB4ZmZlNGM0LFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAgICAgICAgICAgICAweDhhMmJlMixcclxuICAgIGJyb3duOiAgICAgICAgICAgICAgICAgIDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAgICAgICAgICAgICAgMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6ICAgICAgICAgICAgICAweDVmOWVhMCxcclxuICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIDB4N2ZmZjAwLFxyXG4gICAgY2hvY29sYXRlOiAgICAgICAgICAgICAgMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogICAgICAgICAgICAgICAgICAweGZmN2Y1MCxcclxuICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICAgIDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6ICAgICAgICAgICAgICAgMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAgICAgICAgICAgICAgICAweGRjMTQzYyxcclxuICAgIGN5YW46ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6ICAgICAgICAgICAgICAgMHgwMDAwOGIsXHJcbiAgICBkYXJrY3lhbjogICAgICAgICAgICAgICAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgICAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAgICAgICAgICAgICAgMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogICAgICAgICAgICAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIDB4NTU2YjJmLFxyXG4gICAgZGFya29yYW5nZTogICAgICAgICAgICAgMHhmZjhjMDAsXHJcbiAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAweDk5MzJjYyxcclxuICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICAgIDB4OGIwMDAwLFxyXG4gICAgZGFya3NhbG1vbjogICAgICAgICAgICAgMHhlOTk2N2EsXHJcbiAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogICAgICAgICAgICAgMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogICAgICAgICAgICAgICAweGZmMTQ5MyxcclxuICAgIGRlZXBza3libHVlOiAgICAgICAgICAgIDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICAgIDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAgICAgICAgICAgICAgMHhiMjIyMjIsXHJcbiAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgICAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICAgIDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAgICAgICAgICAgICAgMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgICAweGY4ZjhmZixcclxuICAgIGdvbGQ6ICAgICAgICAgICAgICAgICAgIDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAgICAgICAgICAgICAgMHhkYWE1MjAsXHJcbiAgICBncmVlbnllbGxvdzogICAgICAgICAgICAweGFkZmYyZixcclxuICAgIGdyZXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAgICAgICAgICAgICAgICAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogICAgICAgICAgICAgIDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAgICAgICAgICAgICAgICAgMHg0YjAwODIsXHJcbiAgICBpdm9yeTogICAgICAgICAgICAgICAgICAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAgICAgICAgICAgICAgICAgIDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgMHhlNmU2ZmEsXHJcbiAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAweGZmZjBmNSxcclxuICAgIGxhd25ncmVlbjogICAgICAgICAgICAgIDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6ICAgICAgICAgICAgICAweGFkZDhlNixcclxuICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIDB4ZjA4MDgwLFxyXG4gICAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAweGZhZmFkMixcclxuICAgIGxpZ2h0Z3JheTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogICAgICAgICAgICAgMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogICAgICAgICAgICAgIDB4ZmZiNmMxLFxyXG4gICAgbGlnaHRzYWxtb246ICAgICAgICAgICAgMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgICAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIDB4ODdjZWZhLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIDB4YjBjNGRlLFxyXG4gICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgICAweDMyY2QzMixcclxuICAgIGxpbmVuOiAgICAgICAgICAgICAgICAgIDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICAgIDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgMHhiYTU1ZDMsXHJcbiAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIDB4M2NiMzcxLFxyXG4gICAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAweDAwZmE5YSxcclxuICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICAgIDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAweDE5MTk3MCxcclxuICAgIG1pbnRjcmVhbTogICAgICAgICAgICAgIDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogICAgICAgICAgICAgICAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAgICAgICAgICAgIDB4ZmZkZWFkLFxyXG4gICAgb2xkbGFjZTogICAgICAgICAgICAgICAgMHhmZGY1ZTYsXHJcbiAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgICAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogICAgICAgICAgICAgIDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAgICAgICAgICAgICAgICAgMHhkYTcwZDYsXHJcbiAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAweGVlZThhYSxcclxuICAgIHBhbGVncmVlbjogICAgICAgICAgICAgIDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICAgIDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAgICAgICAgICAgICAgICAgICAweGNkODUzZixcclxuICAgIHBpbms6ICAgICAgICAgICAgICAgICAgIDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogICAgICAgICAgICAgICAgICAgMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAgICAgICAgICAgICAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogICAgICAgICAgICAgIDB4YmM4ZjhmLFxyXG4gICAgcm95YWxibHVlOiAgICAgICAgICAgICAgMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogICAgICAgICAgICAweDhiNDUxMyxcclxuICAgIHNhbG1vbjogICAgICAgICAgICAgICAgIDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogICAgICAgICAgICAgMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogICAgICAgICAgICAgICAweDJlOGI1NyxcclxuICAgIHNlYXNoZWxsOiAgICAgICAgICAgICAgIDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAgICAgICAgICAgICAgICAgMHhhMDUyMmQsXHJcbiAgICBza3libHVlOiAgICAgICAgICAgICAgICAweDg3Y2VlYixcclxuICAgIHNsYXRlYmx1ZTogICAgICAgICAgICAgIDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNub3c6ICAgICAgICAgICAgICAgICAgIDB4ZmZmYWZhLFxyXG4gICAgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgICAweDQ2ODJiNCxcclxuICAgIHRhbjogICAgICAgICAgICAgICAgICAgIDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogICAgICAgICAgICAgICAgMHhkOGJmZDgsXHJcbiAgICB0b21hdG86ICAgICAgICAgICAgICAgICAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogICAgICAgICAgICAgIDB4NDBlMGQwLFxyXG4gICAgdmlvbGV0OiAgICAgICAgICAgICAgICAgMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogICAgICAgICAgICAgICAgICAweGY1ZGViMyxcclxuICAgIHdoaXRlc21va2U6ICAgICAgICAgICAgIDB4ZjVmNWY1LFxyXG4gICAgeWVsbG93Z3JlZW46ICAgICAgICAgICAgMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAgICAgICAgICAweDY2MzM5OSxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgRm9udEZhY2VUeXBlcyBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtvYmoyc3RyfSBmcm9tIFwiLi9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7Y2FtZWxUb0Rhc2gsIHZhbDJzdHIsIENzc1BlcmNlbnRNYXRoLCBDc3NBbmdsZU1hdGgsIGFycjJzdHIsIENzc051bWJlck1hdGh9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGZvbnQgZmFjZSBkZWZpbml0aW9uIG9iamVjdCB0byB0aGUgQ1NTIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRGYWNlVG9TdHJpbmcoIGZvbnRmYWNlOiBGb250RmFjZVR5cGVzLklGb250RmFjZSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmb250ZmFjZSB8fCAhZm9udGZhY2UuZm9udEZhbWlseSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBsZXQgcyA9IFwie1wiO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIGZvbnRmYWNlKVxyXG4gICAge1xyXG4gICAgICAgIHMgKz0gYCR7Y2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0cmV0Y2hUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHJldGNoX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3R5bGVfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBvYmxpcXVlICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodil9YCxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYG9ibGlxdWUgJHthcnIyc3RyKCB2LCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFNyY1RvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IGZvbnRTaW5nbGVTcmNUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U2luZ2xlU3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wibG9jYWxcIiwgdiA9PiBgbG9jYWwoJHt2fSlgXSxcclxuICAgICAgICBbXCJ1cmxcIiwgdiA9PiBgdXJsKCR7dn0pYF0sXHJcbiAgICAgICAgW1wiZm9ybWF0XCIsIHYgPT4gYGZvcm1hdCgke2ZvbnRGb3JtYXRUb1N0cmluZyh2KX0pYF1cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRGb3JtYXRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IGBcXFwiJHt2fVxcXCJgLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyB0eXBlcyB1c2VkIHRvIGRlZmluZSBDU1MgYDxpbWFnZT5gIHR5cGUgYW5kIHJlbGF0ZWQgZnVuY3Rpb25zLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7SVVybFByb3h5LCBFeHRlbmRlZCwgQ3NzTnVtYmVyLCBDc3NBbmdsZSwgTnVtYmVyQmFzZSwgQ3NzTGVuZ3RoLCBDc3NQb3NpdGlvbiwgSUdlbmVyaWNQcm94eX0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4vQ29sb3JUeXBlc1wiO1xyXG5pbXBvcnQgeyBFeHRlbnRLZXl3b3JkIH0gZnJvbSBcIi4vU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1hZ2VQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSBvZiBDU1MgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgZm9yXHJcbiAqIHNlY2lmeWluZyBpbWFnZXMuIFRoaXMgaW50ZXJmYWNlIGlzIHJldHVybmVkIGZyb20gZnVuY3Rpb25zIGxpa2U6IGxpbmVhckdyYWRpZW50KCksIHBhaW50KCksXHJcbiAqIGVsZW1lbnQoKSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJpbWFnZVwiPiB7fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NJbWFnZSB0eXBlIHJlcHJlc2VudHMgYSB0eXBlIHVzZWQgZm9yIENTUyBwcm9wZXJ0aWVzIHRoYXQgYWNjZXB0IHRoZSBgPGltYWdlPmAgdHlwZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc0ltYWdlID0gSVVybFByb3h5IHwgSUltYWdlUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBWYWx1ZSBvZiBhIGhpbnQgZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucyBpcyBleHByZXNzZWQgYXMgYSBDU1MgbnVtZXJpYyB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50SGludFZhbHVlID0gRXh0ZW5kZWQ8TnVtYmVyQmFzZTxhbnk+PjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBoaW50IGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMgaXMgZXhwcmVzc2VkIGFzIGEgc2luZ2xlLWl0ZW0gYXJyYXkgdGhhdFxyXG4gKiBjb250YWlucyBhIENTUyBudW1lcmljIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRIaW50ID0gW0dyYWRpZW50SGludFZhbHVlXTtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY29sb3Igc3RvcCB3aXRoIGluZGljYXRpb24gb2YgbGVuZ3RoIGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMuIFRoZSBmaXJzdFxyXG4gKiBpdGVtIGlzIHRoZSBjb2xvciB2YWx1ZSwgdGhlIHNlY29uZCBpdGVtIGlzIHRoZSBwb3NpdGlvbiBvZiB3aGVyZSB0aGUgY29sb3Igc3RhcnRzIGFuZCB0aGVcclxuICogb3B0aW9uYWwgdGhpcmQgaXRlbSBpcyB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIGNvbG9yIHN0b3BzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRDb2xvckFuZExlbmd0aCA9IFtFeHRlbmRlZDxDc3NDb2xvcj4sIEdyYWRpZW50SGludFZhbHVlLCBHcmFkaWVudEhpbnRWYWx1ZT9dO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIHN0b3AgZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucyBpcyBleHByZXNzZWQgYXMgZWl0aGVyIGEgc2luZ2xlIGNvbG9yIHZhbHVlXHJcbiAqIG9yIGFuIGFycmF5IG9mIHR3byBvciB0aHJlZSBpdGVtcy4gSW4gdGhlIGxhdHRlciBjYXNlLCB0aGUgZmlyc3QgaXRlbSBpcyB0aGUgY29sb3IgdmFsdWUsIHRoZVxyXG4gKiBzZWNvbmQgaXRlbSBpcyB0aGUgcG9zaXRpb24gb2Ygd2hlcmUgdGhlIGNvbG9yIHN0YXJ0cyBhbmQgdGhlIG9wdGlvbmFsIHRoaXJkIGl0ZW0gaXMgdGhlXHJcbiAqIHBvc2l0aW9uIHdoZXJlIHRoZSBjb2xvciBzdG9wcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50U3RvcCA9IEV4dGVuZGVkPENzc0NvbG9yPiB8IEdyYWRpZW50Q29sb3JBbmRMZW5ndGg7XHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgZWl0aGVyIGNvbG9yIHN0b3Agb3IgY29sb3IgaGludCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRTdG9wT3JIaW50ID0gR3JhZGllbnRTdG9wIHwgR3JhZGllbnRIaW50O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGVudW1lcmF0ZXMgcG9zc2libGUgdmFsdWVzIG9mIHRoZSBzaWRlLW9yLWNvcm5lciBmb3IgdGhlIGBsaW5lYXItZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGluZWFyR3JhZFNpZGVPckNvcm5lciA9IFwiYm90dG9tXCIgfCBcImxlZnRcIiB8IFwidG9wXCIgfCBcInJpZ2h0XCIgfFxyXG4gICAgXCJ0b3AgbGVmdFwiIHwgXCJ0b3AgcmlnaHRcIiB8IFwiYm90dG9tIHJpZ2h0XCIgfCBcImJvdHRvbSBsZWZ0XCIgfFxyXG4gICAgXCJsZWZ0IHRvcFwiIHwgXCJyaWdodCB0b3BcIiB8IFwibGVmdCBib3R0b21cIiB8IFwicmlnaHQgYm90dG9tXCI7XHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IHJlcHJlc2VudHMgdGhlIGFuZ2xlIG9mIHRoZSBgbGluZWFyLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIExpbmVhckdyYWRBbmdsZSA9IEV4dGVuZGVkPENzc0FuZ2xlPiB8IExpbmVhckdyYWRTaWRlT3JDb3JuZXI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBzaGFwZSBmb3IgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmFkaWFsR3JhZGllbnRTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImVsbGlwc2VcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBzaXplIGZvciB0aGUgYHJhZGlhbC1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uIEl0IGlzIGEgc2luZ2xlIExlbmd0aCB2YWx1ZVxyXG4gKiBmb3IgY2lyY2xlIGFuZCB0d28tZWxlbWVudCB0dXBsZSBvZiBDc3NMZW5ndGggdmFsdWVzIGZvciBlbGxpcHNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmFkaWFsR3JhZGllbnRTaXplID0gRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIHBhcmFtZXRlcnMgZm9yIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDcm9zc0ZhZGVQYXJhbSA9IEV4dGVuZGVkPENzc0ltYWdlPiB8IFtFeHRlbmRlZDxDc3NJbWFnZT4sIEV4dGVuZGVkPENzc051bWJlcj5dO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHcmFkaWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBwcm9wZXJ0aWVzIHRoYXQgcmV0dXJuIGludGVyZmFjZXMgcmVwcmVzZW50aW5nIGA8Z3JhZGllbnQ+YFxyXG4gKiBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JhZGllbnRcclxue1xyXG4gICAgcmVhZG9ubHkgbGluZWFyOiBJTGluZWFyR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSByZXBlYXRpbmdMaW5lYXI6IElMaW5lYXJHcmFkaWVudDtcclxuICAgIHJlYWRvbmx5IHJhZGlhbDogSVJhZGlhbEdyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nUmFkaWFsOiBJUmFkaWFsR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSBjb25pYzogSUNvbmljR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSByZXBlYXRpbmdDb25pYzogSUNvbmljR3JhZGllbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTGluZWFyR3JhZGllbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGVpdGhlciBgbGluZXItZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctbGluZXItZ3JhZGllbnRgIENTUyBmdW5jdGlvbi4gVGhlIGludGVyZmFjZSBhbGxvd3Mgc3BlY2lmeWluZyBhbiBhbmdsZSBwYXJhbWV0ZXJcclxuICogYmVmb3JlIGludm9jYXRpb24gdGhhdCBhY2NlcHRzIGEgbGlzdCBvZiBjb2xvciBzdG9wcyBhbmQgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMaW5lYXJHcmFkaWVudFxyXG57XHJcbiAgICAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5O1xyXG5cdHRvKCBhbmdsZTogTGluZWFyR3JhZEFuZ2xlKTogSUxpbmVhckdyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJhZGlhbEdyYWRpZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBlaXRoZXIgYHJhZGlhbC1ncmFkaWVudGAgb3JcclxuICogYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRgIENTUyBmdW5jdGlvbi4gVGhlIGludGVyZmFjZSBhbGxvd3Mgc3BlY2lmeWluZyB0aGUgc2hhcGUsIHNpemUgYW5kXHJcbiAqIGV4dGVudCBwYXJhbWV0ZXJzIGJlZm9yZSBpbnZvY2F0aW9uIHRoYXQgYWNjZXB0cyBhIGxpc3Qgb2YgY29sb3Igc3RvcHMgYW5kIGhpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUmFkaWFsR3JhZGllbnRcclxue1xyXG4gICAgKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eTtcclxuXHRjaXJjbGUoIHNpemVPckV4dGVudD86IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPik6IElSYWRpYWxHcmFkaWVudDtcclxuXHRlbGxpcHNlKCBzaXplT3JFeHRlbnQ/OiBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPik6IElSYWRpYWxHcmFkaWVudDtcclxuXHRleHRlbnQoIGV4dGVudDogRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pOiBJUmFkaWFsR3JhZGllbnQ7XHJcblx0YXQoIHBvczogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogSVJhZGlhbEdyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbmljR3JhZGllbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGVpdGhlciBgY29uaWMtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctY29uaWMtZ3JhZGllbnRgIENTUyBmdW5jdGlvbi4gVGhlIGludGVyZmFjZSBhbGxvd3Mgc3BlY2lmeWluZyB0aGUgYGZyb21gIGFuZFxyXG4gKiBgcG9zaXRpb25gIHBhcmFtZXRlcnMgYmVmb3JlIGludm9jYXRpb24gdGhhdCBhY2NlcHRzIGEgbGlzdCBvZiBjb2xvciBzdG9wcyBhbmQgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25pY0dyYWRpZW50XHJcbntcclxuICAgICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHk7XHJcblx0ZnJvbSggYW5nbGU6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElDb25pY0dyYWRpZW50O1xyXG5cdGF0KCBwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElDb25pY0dyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIE1lZGlhVHlwZXMgZnJvbSBcIi4vTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7dmFsMnN0ciwgY2FtZWxUb0Rhc2gsIGFycjJzdHJ9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhc3BlY3RSYXRpb1RvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuQXNwZWN0UmF0aW9GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbFswXSArIFwiL1wiICsgdmFsWzFdO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkxlbmd0aEZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJweFwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5SZXNvbHV0aW9uRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcImRwaVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbnR5cGUgY29udmVydEZ1bmNUeXBlPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSAodmFsOiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhRmVhdHVyZUluZm8gcmVwcmVzZW50cyBpbmZvcm1hdGlvbiB0aGF0IHdlIGtlZXAgZm9yIHN0eWxlIHByb3BlcnRpZXNcclxuICovXHJcbnR5cGUgTWVkaWFGZWF0dXJlSW5mbzxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gY29udmVydEZ1bmNUeXBlPEs+IHwgYm9vbGVhbiB8XHJcbiAgICB7XHJcbiAgICAgICAgLyoqIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgZnJvbSB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbiAgICAgICAgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZTxLPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgZGVmaW5lZCwgaW5kaWNhdGVzIHRoZSB2YWx1ZSwgd2hpY2ggd2Ugd2lsbCBub3QgcHV0IGludG8gQ1NTIHN0cmluZy4gVGhpcyBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICogbWVkaWEgZmVhdHVyZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGhvdXQgdGhlIHZhbHVlLCBlLmcuIGNvbG9yIG9yIGNvbG9yLWluZGV4LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmVhdHVyZSBpcyBhIFwicmFuZ2VcIiBmZWF0dXJlOyB0aGF0IGlzLCBjYW4gYmUgdXNlZCBpbiBhblxyXG4gICAgICAgICAqIGV4cHJlc3Npb24gKGEgPD0gZmVhdHVyZSA8PSBiKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVR5cGVzLk1lZGlhUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHF1ZXJ5LCB7XHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLlNpbmdsZU1lZGlhUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbWVkaWFUeXBlID0gcXVlcnkuJG1lZGlhVHlwZTtcclxuICAgIGxldCBvbmx5ID0gcXVlcnkuJG9ubHk7XHJcbiAgICBsZXQgbmVnYXRlID0gcXVlcnkuJG5lZ2F0ZTtcclxuXHJcbiAgICBsZXQgaXRlbXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobWVkaWFUeXBlKVxyXG4gICAgICAgIGl0ZW1zLnB1c2goIChvbmx5ID8gXCJvbmx5IFwiIDogXCJcIikgKyBtZWRpYVR5cGUpO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIHF1ZXJ5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJFwiKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeVtwcm9wTmFtZV0pXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goIGAoJHttZWRpYUZlYXR1cmVUb1N0cmluZyggcHJvcE5hbWUsIHF1ZXJ5W3Byb3BOYW1lXSl9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuZWdhdGUgPyBcIm5vdCBcIiA6IFwiXCJ9JHtpdGVtcy5qb2luKFwiIGFuZCBcIil9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIGZlYXR1cmUgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZlYXR1cmVUb1N0cmluZyggZmVhdHVyZU5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZlYXR1cmVOYW1lIHx8IHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBcclxuICAgIGxldCBpbmZvOiBNZWRpYUZlYXR1cmVJbmZvID0gbWVkaWFGZWF0dXJlc1tmZWF0dXJlTmFtZV07XHJcblxyXG4gICAgbGV0IHJlYWxGZWF0dXJlTmFtZSA9IGNhbWVsVG9EYXNoKCBmZWF0dXJlTmFtZSk7XHJcblxyXG4gICAgLy8gaWYgZGVmYXVsdFZhbHVlIGlzIGRlZmluZWQgYW5kIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBlcXVhbCB0byBpdCwgbm8gdmFsdWUgc2hvdWxkIGJlIHJldHVybmVkLlxyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5kZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcFZhbCA9PT0gZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBcIlwiIDogcmVhbEZlYXR1cmVOYW1lO1xyXG5cclxuICAgIGxldCBjb252ZXJ0ID0gdHlwZW9mIGluZm8gPT09IFwiZnVuY3Rpb25cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uY29udmVydCA6IHVuZGVmaW5lZDtcclxuICAgIGxldCBpc1JhbmdlID0gdHlwZW9mIGluZm8gPT09IFwiYm9vbGVhblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5pc1JhbmdlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGlzUmFuZ2UgJiYgIXZhbHVlT25seSAmJiBBcnJheS5pc0FycmF5KCBwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICBsZXQgczEgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzBdLCBjb252ZXJ0KTtcclxuICAgICAgICBsZXQgczIgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzFdLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gYCR7czF9IDw9ICR7cmVhbEZlYXR1cmVOYW1lfSA8PSAke3MyfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gcyA6IHJlYWxGZWF0dXJlTmFtZSArIFwiOlwiICsgcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsOiBhbnksIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBpZiAoY29udmVydClcclxuICAgICAgICByZXR1cm4gY29udmVydCggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcHJvcFZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHByb3BWYWwpKVxyXG4gICAgICAgIHJldHVybiBhcnIyc3RyKCBwcm9wVmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcHJvcFZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtYXhBc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIGNvbG9yOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGhlaWdodDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbkhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtb25vY2hyb21lOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgcmVzb2x1dGlvbjogeyBjb252ZXJ0OiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5SZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4UmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIHdpZHRoOiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluV2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHt2YWwyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzZWxlY3Rvci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHR3by1udW1iZXIgdHVwbGUgdG8gYSBzdHJpbmcgaW4gdGhlIGZvcm0gQW4rQi5cclxuICovXHJcbmZ1bmN0aW9uIG50aFR1cGxlVG9TdHJpbmcoIHZhbDogW251bWJlciwgbnVtYmVyP10pOiBzdHJpbmdcclxue1xyXG5cdGxldCB2MCA9IHZhbDJzdHIoIHZhbFswXSk7XHJcblx0bGV0IHYxbiA9IHZhbFsxXTtcclxuXHJcblx0Ly8gdGhlICchdjFuJyBleHByZXNzaW9uIGNvdmVycyBudWxsLCB1bmRlZmluZWQgYW5kIDAuXHJcblx0bGV0IHYxID0gIXYxbiA/IFwiXCIgOiB2MW4gPiAwID8gXCIrXCIgKyB2YWwyc3RyKCB2MW4pIDogXCItXCIgKyB2YWwyc3RyKCAtdjFuKTtcclxuXHJcblx0cmV0dXJuIGAke3YwfW4ke3YxfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvclRvU3RyaW5nKCB2YWw6IENzc1NlbGVjdG9yKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcblx0XHRhcnJTZXA6IFwiXCJcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcGFyYW1ldGVyaXplZCBwc2V1ZG8gZW50aXR5LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBzZXVkb0VudGl0eVRvU3RyaW5nKCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZhbDogYW55KTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWVudGl0eU5hbWUpXHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0aWYgKGVudGl0eU5hbWUuc3RhcnRzV2l0aCggXCI6bnRoXCIpKVxyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBmcm9tQXJyYXk6IG50aFR1cGxlVG9TdHJpbmcgfSk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbDJzdHIodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lTdHJpbmdQcm94eSwgSUdlbmVyaWNQcm94eX0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7SVN0eWxlUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZWxlY3RvclByb3h5IGZ1bmN0aW9uIHJldHVybnMgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nLiBUaGlzIHR5cGUgaXMgcmV0dXJuZWQgZnJvbSB0aGVcclxuICogW1tzZWxlY3Rvcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0b3JQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJzZWxlY3RvclwiPiB7fTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIHNlbGVjdG9yIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIFtbc2VsZWN0b3JdXSBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3Rvckl0ZW0gPSBzdHJpbmcgfCBJU3R5bGVSdWxlIHwgSVN0cmluZ1Byb3h5IHwgSVNlbGVjdG9yUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNlbGVjdG9yICovXHJcbmV4cG9ydCB0eXBlIENzc1NlbGVjdG9yID0gU2VsZWN0b3JJdGVtIHwgU2VsZWN0b3JJdGVtW107XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHByaW50LXJlbGF0ZWQgcHNldWRvIGNsYXNzZXMgLSB0aG9zZSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aCB0aGUgQHBhZ2UgQ1NTIHJ1bGUgKi9cclxuZXhwb3J0IHR5cGUgUGFnZVBzZXVkb0NsYXNzID0gXCI6YmxhbmtcIiB8IFwiOmZpcnN0XCIgfCBcIjpsZWZ0XCIgfCBcIjpyaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwc2V1ZG8gY2xhc3NlcyAqL1xyXG5leHBvcnQgdHlwZSBQc2V1ZG9DbGFzcyA9IFBhZ2VQc2V1ZG9DbGFzcyB8XHJcblx0XCI6YWN0aXZlXCIgfCBcIjphbnktbGlua1wiIHwgXCI6YmxhbmtcIiB8IFwiOmNoZWNrZWRcIiB8IFwiOmRlZmF1bHRcIiB8IFwiOmRlZmluZWRcIiB8IFwiOmRpc2FibGVkXCIgfFxyXG5cdFwiOmVtcHR5XCIgfCBcIjplbmFibGVkXCIgfCBcIjpmaXJzdC1jaGlsZFwiIHwgXCI6Zmlyc3Qtb2YtdHlwZVwiIHwgXCI6ZnVsbHNjcmVlblwiIHwgXCI6Zm9jdXNcIiB8XHJcblx0XCI6Zm9jdXMtdmlzaWJsZVwiIHwgXCI6Zm9jdXMtV2l0aGluXCIgfCBcIjpob3ZlclwiIHwgXCI6aW5kZXRlcm1pbmF0ZVwiIHwgXCI6aW4tcmFuZ2VcIiB8IFwiOmludmFsaWRcIiB8XHJcblx0XCI6bGFzdC1jaGlsZFwiIHwgXCI6bGFzdC1vZi10eXBlXCIgfCBcIjpsaW5rXCIgfCBcIjpvbmx5LWNoaWxkXCIgfCBcIjpvbmx5LW9mLXR5cGVcIiB8IFwiOm9wdGlvbmFsXCIgfFxyXG5cdFwiOm91dC1vZi1yYW5nZVwiIHwgXCI6cGxhY2Vob2xkZXItc2hvd25cIiB8IFwiOnJlYWQtb25seVwiIHwgXCI6cmVhZC13cml0ZVwiIHwgXCI6cmVxdWlyZWRcIiB8IFwiOnJvb3RcIiB8XHJcblx0XCI6c2NvcGVcIiB8IFwiOnRhcmdldFwiIHwgXCI6dmFsaWRcIiB8IFwiOnZpc2l0ZWRcIiB8IFwiOmRpcihydGwpXCIgfCBcIjpkaXIobHRyKVwiO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwc2V1ZG8gZWxlbWVudHMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvRWxlbWVudCA9IFwiOjphZnRlclwiIHwgXCI6OmJhY2tkcm9wXCIgfCBcIjo6YmVmb3JlXCIgfCBcIjo6Y3VlXCIgfCBcIjo6Zmlyc3RMZXR0ZXJcIiB8XHJcblx0XCI6OmZpcnN0TGluZVwiIHwgXCI6OmdyYW1tYXJFcnJvclwiIHwgXCI6Om1hcmtlclwiIHwgXCI6OnBsYWNlaG9sZGVyXCIgfCBcIjo6c2VsZWN0aW9uXCIgfCBcIjo6c3BlbGxpbmdFcnJvclwiO1xyXG5cclxuXHJcblxyXG4vKiogQ29tYmluZXMgbmFtZXMgb2Ygbm9uLXBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgYW5kIHBzZXVkbyBlbGVtZW50cyAqL1xyXG5leHBvcnQgdHlwZSBQc2V1ZG9FbnRpdHkgPSBQc2V1ZG9DbGFzcyB8IFBzZXVkb0VsZW1lbnQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBleHByZXNzaW9uIEFuK0IsIHdoaWNoIGlzIHVzZWQgZm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgbGlrZSBgbnRoLWNoaWxkYC4gSXRcclxuICogY2FuIGJlIGEgc3RyaW5nLCBhIHNpbmdsZSBudW1iZXIgb3IgYSB0dXBsZSB3aXRoIG9uZSBvciB0d28gbnVtYmVycy4gSWYgaXQgaXMgYSBzaW5nbGUgbnVtYmVyLFxyXG4gKiB0aGUgJ24nIGluIEFuK0Igd2lsbCBub3QgYmUgdXNlZCAtIGFzIGluIGBudGgtY2hpbGQoMilgLiBJZiBpdCBpcyBhIHR1cGxlLCB0aGUgJ24nIHdpbGwgYmUgdXNlZFxyXG4gKiBldmVuIGlmIHRoZSBzZWNvbmQgdHVwbGUncyBlbGVtZW50IGlzIG5vdCBwcm92aWRlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIE50aENoaWxkRXhwcmVzc2lvbiA9IFwib2RkXCIgfCBcImV2ZW5cIiB8IG51bWJlciB8IFtudW1iZXIsIG51bWJlcj9dIHwgc3RyaW5nIHwgSVN0cmluZ1Byb3h5O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3MgaW50ZXJmYWNlIG1hcHMgbmFtZXMgb2YgcHNldWRvIGNsYXNzZXMgdGhhdCByZXF1aXJlIHBhcmFtZXRlcnNcclxuICogdG8gdGhlIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZXNlIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3Ncclxue1xyXG5cdFwiOmhhc1wiOiBzdHJpbmc7XHJcblx0XCI6aG9zdFwiOiBzdHJpbmc7XHJcblx0XCI6aG9zdC1jb250ZXh0XCI6IHN0cmluZztcclxuXHRcIjppc1wiOiBzdHJpbmc7XHJcblx0XCI6bGFuZ1wiOiBzdHJpbmc7XHJcblx0XCI6bm90XCI6IHN0cmluZztcclxuXHRcIjpudGgtY2hpbGRcIjogTnRoQ2hpbGRFeHByZXNzaW9uO1xyXG5cdFwiOm50aC1vZi10eXBlXCI6IE50aENoaWxkRXhwcmVzc2lvbjtcclxuXHRcIjpudGgtbGFzdC1jaGlsZFwiOiBOdGhDaGlsZEV4cHJlc3Npb247XHJcblx0XCI6bnRoLWxhc3Qtb2YtdHlwZVwiOiBOdGhDaGlsZEV4cHJlc3Npb247XHJcblx0XCI6d2hlcmVcIjogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbGVtZW50IGludGVyZmFjZSBtYXBzIG5hbWVzIG9mIHBzZXVkbyBlbGVtZW50cyB0aGF0IHJlcXVpcmUgcGFyYW1ldGVyc1xyXG4gKiB0byB0aGUgdHlwZSB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlc2UgcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbGVtZW50XHJcbntcclxuXHRcIjo6cGFydFwiOiBzdHJpbmc7XHJcblx0XCI6OnNsb3R0ZWRcIjogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHkgaW50ZXJmYWNlIGNvbWJpbmVzIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3MgYW5kXHJcbiAqIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudCBpbnRlcmZhY2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eSBleHRlbmRzIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3MsIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudFxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkU3R5bGVzZXQsIEFuaW1hdGlvbl9TaW5nbGUsIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSwgQmFja2dyb3VuZF9TaW5nbGUsIEJhY2tncm91bmRTaXplX1NpbmdsZSxcclxuICAgIEJvcmRlckltYWdlX09iamVjdCwgQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGUsIEJveFNoYWRvd19TaW5nbGUsIEJvcmRlclJhZGl1c19TdHlsZVR5cGUsXHJcbiAgICBCb3JkZXJfU3R5bGVUeXBlLCBDb2x1bW5zX1N0eWxlVHlwZSwgQ3Vyc29yX1N0eWxlVHlwZSwgRmxleF9TdHlsZVR5cGUsIEZvbnRfU3R5bGVUeXBlLFxyXG4gICAgR3JpZFRlbXBsYXRlQXJlYXNfU3R5bGVUeXBlLCBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZSwgTWFya2VyX1N0eWxlVHlwZSwgUm90YXRlX1N0eWxlVHlwZSxcclxuICAgIFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZSwgVHJhbnNpdGlvbl9TaW5nbGUsIE9mZnNldF9TdHlsZVR5cGUsIFN0eWxlc2V0LCBDdXN0b21WYXJfU3R5bGVUeXBlLFxyXG4gICAgVmFyVGVtcGxhdGVOYW1lLCBTdXBwb3J0c1F1ZXJ5LCBTaW5nbGVTdXBwb3J0c1F1ZXJ5LCBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb24sIEdyaWRUcmFja1xyXG59IGZyb20gXCIuL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0V4dGVuZGVkLCBDc3NSYWRpdXMsIE9uZU9yTWFueSwgQ3NzTXVsdGlMZW5ndGgsIENzc011bHRpVGltZX0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYW1lbFRvRGFzaCwgZGFzaFRvQ2FtZWwsIHZhbDJzdHIsIGFycjJzdHIsIElWYWx1ZUNvbnZlcnRPcHRpb25zLFxyXG4gICAgcG9zMnN0ciwgbXVsdGlQb3Myc3RyLCBDc3NMZW5ndGhNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzTnVtYmVyTWF0aCxcclxuICAgIENzc0FuZ2xlTWF0aCwgQ3NzRnJlcXVlbmN5TWF0aCwgQ3NzUGVyY2VudE1hdGgsIENzc1Jlc29sdXRpb25NYXRoLCB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG59IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7Y29sb3JUb1N0cmluZ30gZnJvbSBcIi4vQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCI7XHJcbmltcG9ydCB7SUlEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBjb252ZXJ0aW5nIENTUyBwcm9wZXJ0eSB0eXBlcyB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEFuaW1hdGlvbl9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImR1cmF0aW9uXCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImZ1bmNcIiwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlXSxcclxuICAgICAgICBbXCJkZWxheVwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJjb3VudFwiLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgXCJzdGF0ZVwiLFxyXG4gICAgICAgIFwibmFtZVwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPEFuaW1hdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxPbmVPck1hbnk8VGltaW5nRnVuY3Rpb25fU2luZ2xlPj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIsXHJcbiAgICAgICAgZnJvbUFycmF5OiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgc3RlcHMoJHt2YWx9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbUFycmF5KCB2YWw6IGFueVtdKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsWzBdID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbCBhcyBUaW1pbmdGdW5jdGlvbl9TaW5nbGUpXHJcbiAgICAgICAgOiBhcnIyc3RyKCB2YWwsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSwgXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBzdGVwcyBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2WzBdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgc3RlcHMoJHt2WzBdfSR7di5sZW5ndGggPT09IDIgPyBcIixcIiArIHZbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPCAwIHx8IHZbMF0gPiAxIHx8IHZbMl0gPCAwIHx8IHZbMl0gPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4gWW91IGhhdmUgJHt2WzBdfSBhbmQgJHt2WzJdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dlswXX0sJHt2WzFdfSwke3ZbMl19LCR7dlszXX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCggdmFsOiBCYWNrZ3JvdW5kX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgXCJpbWFnZVwiLFxyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIHBvczJzdHJdLFxyXG4gICAgICAgIFtcInNpemVcIiwgbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSwgXCIvXCJdLFxyXG4gICAgICAgIFwicmVwZWF0XCIsXHJcbiAgICAgICAgXCJhdHRhY2htZW50XCIsXHJcbiAgICAgICAgXCJvcmlnaW5cIixcclxuICAgICAgICBcImNsaXBcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QmFja2dyb3VuZF9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPEJhY2tncm91bmRTaXplX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgaW1hZ2Ugc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJJbWFnZVRvU3RyaW5nKCB2YWw6IEJvcmRlckltYWdlX09iamVjdCk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB3aWR0aCBpcyBzcGVjaWZpZWQsIGJ1dCBzbGljZSBpcyBub3QsIHdlIG5lZWQgdG8gc2V0IHNsaWNlIHRvIHRoZSBkZWZhdWx0IDEwMCUgdmFsdWU7XHJcbiAgICAvLyBpZiBvdXRzZXQgaXMgc3BlY2lmaWVkIGJ1dCB3aWR0aCBpcyBub3QuIHdlIG5lZWQgdG8gc2V0IHdpZHRoIHRvIHRoZSBkZWZhdWx0IDEgdmFsdWU7XHJcbiAgICBsZXQgdmFsQ29weTogQm9yZGVySW1hZ2VfT2JqZWN0ID0gT2JqZWN0LmFzc2lnbigge30sIHZhbCk7XHJcbiAgICBpZiAodmFsLnNsaWNlID09IG51bGwgJiYgKHZhbC53aWR0aCAhPSBudWxsIHx8IHZhbC5vdXRzZXQgIT0gbnVsbCkpXHJcbiAgICAgICAgdmFsQ29weS5zbGljZSA9IFwiMTAwJVwiO1xyXG4gICAgaWYgKHZhbC53aWR0aCA9PSBudWxsICYmIHZhbC5vdXRzZXQgIT0gbnVsbClcclxuICAgICAgICB2YWxDb3B5LndpZHRoID0gMTtcclxuXHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsQ29weSwgW1xyXG4gICAgICAgIFwic291cmNlXCIsXHJcbiAgICAgICAgW1wic2xpY2VcIiwgXCJib3JkZXJJbWFnZVNsaWNlXCJdLFxyXG4gICAgICAgIFtcIndpZHRoXCIsIG51bGwsIFwiL1wiXSxcclxuICAgICAgICBbXCJvdXRzZXRcIixudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgXCJyZXBlYXRcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzbGljZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlU2xpY2VUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHYgPT4gdmFsMnN0ciggdiwge1xyXG4gICAgICAgICAgICBmcm9tQm9vbDogKCkgPT4gXCJmaWxsXCIsXHJcbiAgICAgICAgICAgIGZyb21OdW1iZXI6IHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcsXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggdmFsOiBCb3hTaGFkb3dfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJpbnNldFwiLCB2ID0+IHYgPyBcImluc2V0XCIgOiBcIlwiXSxcclxuICAgICAgICBbXCJ4XCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wieVwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImJsdXJcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJzcHJlYWRcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvcm5lciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVDb3JuZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSYWRpdXM+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Qm9yZGVyUmFkaXVzX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHZbMF0pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0d28gTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGFycjJzdHIoIHZbMF0sIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgcyArPSBcIiAvIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBhcnIyc3RyKCB2WzFdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHNpbmdsZSBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHYsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgc2lkZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodlswXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlswXSkpXHJcblxyXG4gICAgICAgICAgICBpZiAodlsxXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbDJzdHIodlsxXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZbMl0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb2xvclRvU3RyaW5nKHZbMl0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWYuam9pbihcIiBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtbnNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDb2x1bW5zX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB2WzBdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMV0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY3Vyc29yIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY3Vyc29yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3Vyc29yX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgLy8gdGhlIHZhbHVlIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiBvciBhbiBhcnJheS4gSWYgaXQgaXMgYW4gYXJyYXksXHJcbiAgICAvLyBpZiB0aGUgZmlyc3QgZWxlbWVudCBpcyBhIGZ1bmN0aW9uLCB0aGVuIHdlIG5lZWQgdG8gdXNlIHNwYWNlIGFzIGEgc2VwYXJhdG9yIChiZWNhdXNlXHJcbiAgICAvLyB0aGlzIGlzIGEgVVJMIHdpdGggb3B0aW9uYWwgbnVtYmVycyBmb3IgdGhlIGhvdCBzcG90KTsgb3RoZXJ3aXNlLCB3ZSB1c2UgY29tbWEgYXMgYVxyXG4gICAgLy8gc2VwYXJhdG9yIC0gYmVjYXVzZSB0aGVzZSBhcmUgbXVsdGlwbGUgY3Vyc29yIGRlZmluaXRpb25zLlxyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2Lmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKHYpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdlsxXSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCB2LCB7IGFyclNlcDogXCIgXCJ9KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCB2LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJySXRlbUZ1bmM6IGN1cnNvclRvU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZmxleCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGZsZXhUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxGbGV4X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuam9pbiggXCIgXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlswXSArIFwiIFwiICsgdlsxXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udF9mcm9tT2JqZWN0KCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wic3R5bGVcIiwgZm9udFN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFwidmFyaWFudFwiLFxyXG4gICAgICAgIFwid2VpZ2h0XCIsXHJcbiAgICAgICAgXCJzdHJldGNoXCIsXHJcbiAgICAgICAgW1wic2l6ZVwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImxpbmVIZWlnaHRcIiwgbnVsbCwgXCIvXCJdLFxyXG4gICAgICAgIFwiZmFtaWx5XCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEZvbnRfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBcIm9ibGlxdWUgXCIgKyBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggdilcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyaWRUZW1wbGF0ZUFyZWFzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8R3JpZFRlbXBsYXRlQXJlYXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyB2YWwgY2FuIGJlIGFycmF5IG9mIGZ1bmN0aW9ucyAoSVF1b3RlZFByb3h5W10pIG9yIGFycmF5cyAoR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uW10pXHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2WzBdID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVHcmlkVGVtcGxhdGVBcmVhc0Zyb21EZWZpbml0aW9ucyh2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGFycmF5IG9mIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbiBvYmplY3RzIHRvIGEgc3RyaW5nIHRoYXQgaXMgc3VpdGFibGUgZm9yXHJcbiAqIHRoZSBncmlkLXRlbXBsYXRlLWFyZWFzIGZvcm1hdC5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWRUZW1wbGF0ZUFyZWFzRnJvbURlZmluaXRpb25zKCBkZWZzOiBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb25bXSk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBjYWxjdWxhdGUgdG90YWwgc2l6ZSBvZiB0aGUgbWF0cml4IGZyb20gdGhlIGFyZWFzJyBzaXplc1xyXG4gICAgbGV0IHJvd0NvdW50ID0gMCwgY29sQ291bnQgPSAwO1xyXG4gICAgZm9yKCBsZXQgZGVmIG9mIGRlZnMpXHJcbiAgICB7XHJcbiAgICAgICAgcm93Q291bnQgPSBNYXRoLm1heCggcm93Q291bnQsIGRlZlszXSk7XHJcbiAgICAgICAgY29sQ291bnQgPSBNYXRoLm1heCggY29sQ291bnQsIGRlZls0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvd0NvdW50ID09PSAwIHx8IGNvbENvdW50ID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiByb3dzIHdoZXJlIGV2ZXJ5IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgY2VsbHNcclxuICAgIGxldCBtYXRyaXggPSBuZXcgQXJyYXk8c3RyaW5nW10+KHJvd0NvdW50KTtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKylcclxuICAgICAgICBtYXRyaXhbaV0gPSBuZXcgQXJyYXk8c3RyaW5nPihjb2xDb3VudCk7XHJcblxyXG4gICAgLy8gZ28gb3ZlciBkZWZpbml0aW9ucyBhbmQgZmlsbCB0aGUgYXBwcm9wcmlhdGUgcGxhY2VzIGluIHRoZSBjZWxscyB3aXRoIGFyZWEgbmFtZXNcclxuICAgIGZvciggbGV0IGRlZiBvZiBkZWZzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBuYW1lID0gdmFsMnN0ciggZGVmWzBdKTtcclxuICAgICAgICBmb3IoIGxldCBpID0gZGVmWzFdOyBpIDw9IGRlZlszXTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKCBsZXQgaiA9IGRlZlsyXTsgaiA8PSBkZWZbNF07IGorKylcclxuICAgICAgICAgICAgICAgIG1hdHJpeFtpLTFdW2otMV0gPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnbyBvdmVyIG91ciBtYXRyaXggYW5kIGZvciBldmVyeSByb3cgY3JlYXRlIGEgcXVvdGVkIHN0cmluZy4gU2luY2Ugb3VyIGNlbGwgYXJyYXlzIG1heSBiZVxyXG4gICAgLy8gc3BhcnNlLCB1c2UgZG90IGZvciB0aGUgdW5kZWZpbmVkIGNlbGxzXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvd05hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciggbGV0IGogPSAwOyBqIDwgcm93Q291bnQ7IGorKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gbWF0cml4W2ldW2pdO1xyXG4gICAgICAgICAgICByb3dOYW1lcy5wdXNoKCBuYW1lID8gbmFtZSA6IFwiLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcyArPSBgXCIke3Jvd05hbWVzLmpvaW4oXCIgXCIpfVwiXFxuYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3JpZFRyYWNrVG9TdHJpbmcoIHZhbDogR3JpZFRyYWNrKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdiksXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBbJHthcnIyc3RyKHYpfV1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmlkQXhpc1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHYpLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBncmlkVHJhY2tUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWFya2VyU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxNYXJrZXJfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iajogdiA9PiBgdXJsKCMkeyh2YWwgYXMgSUlEUnVsZSkubmFtZX0pYFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcm90YXRlVG9TdHJpbmcoIHZhbDpSb3RhdGVfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dlswXX0gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dlswXX0gJHt2WzFdfSAke3ZbMl19ICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodlszXSl9YDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGV4dERlY29yYXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxUZXh0RGVjb3JhdGlvbl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBcImxpbmVcIixcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgW1widGhpY2tuZXNzXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8VHJhbnNpdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJwcm9wZXJ0eVwiLCBjYW1lbFRvRGFzaF0sXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxUcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb2Zmc2V0VG9TdHJpbmcoIHZhbDogT2Zmc2V0X1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wicG9zaXRpb25cIiwgXCJvZmZzZXRQb3NpdGlvblwiXSxcclxuICAgICAgICBbXCJwYXRoXCIsIFwib2Zmc2V0UGF0aFwiXSxcclxuICAgICAgICBbXCJkaXN0YW5jZVwiLCBcIm9mZnNldERpc3RhbmNlXCJdLFxyXG4gICAgICAgIFtcInJvdGF0ZVwiLCBcIm9mZnNldFJvdGF0ZVwiXSxcclxuICAgICAgICBbXCJhbmNob3JcIiwgXCJvZmZzZXRBbmNob3JcIiwgXCIvXCJdLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZGVmbml0aW9uIG9mIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxuZXhwb3J0IHR5cGUgVG9TdHJpbmdGdW5jID0gKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIGEgQ1NTIHN0cmluZyB1c2luZyB0aGUgaW5mbyBwYXJhbWV0ZXIgdG8gaW5mb3JtIGhvdyB0aGUgb2JqZWN0J3NcclxuICogcHJvcGVydGllcyBzaG91bGQgYmUgY29udmVydGVkIHRvIHN0cmluZ3MuIFRoZSBpbmZvIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiBlaXRoZXIgc3RyaW5nc1xyXG4gKiBvciB0d28tIG9yIHRocmUtZWxlbWVudCB0dXBsZXMuIFRoZSBvbmx5IHN0cmluZyBhbmQgdGhlIGZpcnN0IHR1cGxlIGVsZW1lbnQgY29ycmVzcG9uZHMgdG8gYVxyXG4gKiBwcm9wZXJ0eSBleHBlY3RlZCBpbiB0aGUgdmFsdWUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZC4gRWFjaCBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgYWNjb3JkaW5nXHJcbiAqIHRvIHRoZSBmb2xsb3dpbmcgcnVsZXM6XHJcbiAqIC0gSWYgdGhlIGFycmF5IGl0ZW0gaXMganVzdCBhIHN0cmluZywgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmdcclxuICogICB0aGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbi5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQsIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nXHJcbiAqICAgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uLlxyXG4gKiAtIElmIHRoZSBzZWNvbmQgZWxlbWVudCBpcyBhIHN0cmluZyBpdCBpcyB0cmVhdGVkIGFzIGEgbmFtZSBvZiBhIGxvbmdoYW5kIHN0eWxlIHByb3BlcnR5LiBUaGVcclxuICogICB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZyB0aGUgc3R5bGVQcm9wVG9TdHJpbmcgZnVuY3Rpb24gZm9yIHRoaXMgbG9uZ2hhbmQgc3R5bGVcclxuICogICBwcm9wZXJ0eS5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgYSBmdW5jdGlvbiwgaXQgaXMgdXNlZCB0byBjb252ZXJ0IHRoZSB2YWx1ZSdzIHByb3BlcnR5LlxyXG4gKiAtIElmIGEgdGhpcmQgZWxlbWVudCBleGlzdHMgaW4gdGhlIHR1cGxlIGl0IGlzIHRyZWF0ZWQgYXMgYSBwcmVmaXggdG8gYmUgcGxhY2VkIGJlZm9yZSB0aGVcclxuICogICBjb252ZXJ0ZWQgcHJvcGVydHkgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgb3JkZXIgb2YgdGhlIG5hbWVzIGRldGVybWluZXMgaW4gd2hpY2ggb3JkZXIgdGhlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqMnN0ciggdmFsOiBhbnksXHJcbiAgICBpbmZvOiAoc3RyaW5nIHwgW3N0cmluZywgbnVsbCB8IHN0cmluZyB8IFRvU3RyaW5nRnVuYywgc3RyaW5nP10gKVtdLFxyXG4gICAgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuXHJcbiAgICBsZXQgYnVmOiAoc3RyaW5nKVtdID0gW107XHJcbiAgICBpbmZvLmZvckVhY2goIG5hbWVPclR1cGxlID0+XHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSBpbiB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkIGFuZCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZTtcclxuICAgICAgICAvLyBpZiB0aGUgcHJvcGVydGllcyB2YWx1ZSBpcyBub3QgZGVmaW5lZCwgc2tpcCBpdC5cclxuICAgICAgICBsZXQgcHJvcE5hbWUgPSB0eXBlb2YgbmFtZU9yVHVwbGUgPT09IFwic3RyaW5nXCIgPyBuYW1lT3JUdXBsZSA6IG5hbWVPclR1cGxlWzBdO1xyXG4gICAgICAgIGxldCBwcm9wVmFsID0gdmFsW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBhIHByZWZpeFxyXG4gICAgICAgIGxldCBwcmVmaXggPSB0eXBlb2YgbmFtZU9yVHVwbGUgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBuYW1lT3JUdXBsZVsyXTtcclxuICAgICAgICBpZiAocHJlZml4KVxyXG4gICAgICAgICAgICBidWYucHVzaCggcHJlZml4KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnZlcnRvciA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IG5hbWVPclR1cGxlWzFdO1xyXG4gICAgICAgIGlmICghY29udmVydG9yKVxyXG4gICAgICAgICAgICBidWYucHVzaCggdmFsMnN0ciggcHJvcFZhbCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjb252ZXJ0b3IgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBzdHlsZVByb3BUb1N0cmluZyggY29udmVydG9yLCBwcm9wVmFsLCB0cnVlKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBidWYucHVzaCggY29udmVydG9yKCBwcm9wVmFsKSk7XHJcbiAgICB9KTtcclxuXHJcblx0cmV0dXJuIGJ1Zi5qb2luKHNlcGFyYXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgU3R5bGVzZXRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2Ugc3R5bGVzZXQgdG8gdGhlIHRhcmdldCBzdHlsZXNldC4gQWxsIHJlZ3VsYXIgcHJvcGVydGllcyBhcmVcclxuICogcmVwbGFjZWQuIFRoZSBcIi0tXCIgcHJvcGVydHkgZ2V0cyBzcGVjaWFsIHRyZWF0bWVudCBiZWNhdXNlIGl0IGlzIGFuIGFycmF5LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gc291cmNlIFxyXG4gKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIHRhcmdldCBzdHlsZXNldCBpZiBub3QgbnVsbCBvciBhIG5ldyBzdHlsZXNldCBvdGhlcndpc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldHMoIHRhcmdldDogU3R5bGVzZXQgfCB1bmRlZmluZWQgfCBudWxsLFxyXG4gICAgc291cmNlOiBTdHlsZXNldCk6IFN0eWxlc2V0XHJcbntcclxuICAgIGlmICghc291cmNlKVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQgPyB0YXJnZXQgOiB7fTtcclxuXHJcbiAgICAvLyBpZiB0YXJnZXQgaXMgbm90IGRlZmluZWQsIGNyZWF0ZSBpdCBhcyBhbiBlbXB0eSBvYmplY3QuIFRoaXMgb2JqZWN0IHdpbGwgYmUgcmV0dXJuZWQgYWZ0ZXJcclxuICAgIC8vIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIGFyZSBjb3BpZWQgdG8gaXQuXHJcbiAgICBpZiAoIXRhcmdldClcclxuICAgIHtcclxuICAgICAgICB0YXJnZXQgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkLiBJZiBub3QsIHdlIGNhbiBqdXN0IHVzZSB0aGUgT2JqZWN0LmFzc2lnbiBmdW5jdGlvbi5cclxuICAgIGxldCBzb3VyY2VDdXN0b21Qcm9wcyA9IHNvdXJjZVtcIi0tXCJdO1xyXG4gICAgaWYgKCFzb3VyY2VDdXN0b21Qcm9wcylcclxuICAgIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzXHJcbiAgICBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRhcmdldCwgc291cmNlKTtcclxuXHJcbiAgICAvLyBjb3B5IGFsbCBvdGhlciBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZVxyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xyXG5cdH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgXCItLVwiIHByb3BlcnR5IGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGFyZ2V0OiBTdHlsZXNldCxcclxuICAgIHNvdXJjZTogU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEN1c3RvbVByb3BzID0gdGFyZ2V0W1wiLS1cIl07XHJcbiAgICAgICAgdGFyZ2V0W1wiLS1cIl0gPSAhdGFyZ2V0Q3VzdG9tUHJvcHMgPyBzb3VyY2VDdXN0b21Qcm9wcy5zbGljZSgpIDogdGFyZ2V0Q3VzdG9tUHJvcHMuY29uY2F0KCBzb3VyY2VDdXN0b21Qcm9wcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZXNldCB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvU3RyaW5nKCBzdHlsZXNldDogU3R5bGVzZXQpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFzdHlsZXNldClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcblxyXG5cdGZvckFsbFByb3BzSW5TdHlsc2V0KCBzdHlsZXNldCwgKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaXNDdXN0b206IGJvb2xlYW4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoaXNDdXN0b20pXHJcbiAgICAgICAgICAgIHMgKz0gYCR7bmFtZX06JHt2YWx1ZX07YDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gYCR7Y2FtZWxUb0Rhc2gobmFtZSl9OiR7dmFsdWV9O2A7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgbmFtZSBhbmQgc3RyaW5nIHZhbHVlcyBmcm9tIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IGRlZmluaXRpb24uXHJcbiAqIEBwYXJhbSBjdXN0b21WYWwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VzdG9tUHJvcE5hbWVBbmRWYWx1ZSggY3VzdG9tVmFsOiBDdXN0b21WYXJfU3R5bGVUeXBlKTogW3N0cmluZz8sc3RyaW5nP11cclxue1xyXG4gICAgaWYgKCFjdXN0b21WYWwpXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgIGxldCB2YXJOYW1lOiBzdHJpbmc7XHJcbiAgICBsZXQgdGVtcGxhdGU6IHN0cmluZztcclxuICAgIGxldCB2YWx1ZTogYW55O1xyXG4gICAgaWYgKGN1c3RvbVZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IChjdXN0b21WYWxbMF0gYXMgVmFyUnVsZSkuY3NzTmFtZTtcclxuICAgICAgICB0ZW1wbGF0ZSA9IGN1c3RvbVZhbFswXS50ZW1wbGF0ZTtcclxuICAgICAgICB2YWx1ZSA9IGN1c3RvbVZhbFsxXVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSBjdXN0b21WYWxbMF07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgZWxzZSBpZiAoIXZhck5hbWUuc3RhcnRzV2l0aChcIi0tXCIpKVxyXG4gICAgICAgICAgICB2YXJOYW1lID0gXCItLVwiICsgdmFyTmFtZTtcclxuXHJcbiAgICAgICAgdGVtcGxhdGUgPSBjdXN0b21WYWxbMV07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lIHx8ICF0ZW1wbGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICB2YWx1ZSA9IGN1c3RvbVZhbFsyXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3Zhck5hbWUsIHN0eWxlUHJvcFRvU3RyaW5nKCB0ZW1wbGF0ZSwgdmFsdWUsIHRydWUpXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3R5bGUgc3RyaW5nLiBQcm9wZXJ0eSBuYW1lIGNhbiBiZSBpbiBlaXRoZXJcclxuICogZGFzaCBvciBjYW1lbCBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnksIHZhbHVlT25seT86IGJvb2xlYW4pOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFwcm9wTmFtZSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIHByb3BlcnR5XHJcbiAgICBsZXQgaW5mbzogYW55ID0gU3R5bGVQcm9wZXJ0eUluZm9zW2Rhc2hUb0NhbWVsKHByb3BOYW1lKV07XHJcblxyXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBcIiFcIiBwcm9wZXJ0eSwgdGhlbiB0aGUgYWN0dWFsIHZhbHVlIGlzIHRoZVxyXG4gICAgLy8gdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBhbmQgd2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZ1xyXG4gICAgbGV0IHZhclZhbHVlID0gcHJvcFZhbDtcclxuICAgIGxldCBpbXBGbGFnID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwib2JqZWN0XCIgJiYgXCIhXCIgaW4gcHJvcFZhbClcclxuICAgIHtcclxuICAgICAgICB2YXJWYWx1ZSA9IHByb3BWYWxbXCIhXCJdO1xyXG4gICAgICAgIGltcEZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdHJpbmdWYWx1ZSA9ICFpbmZvXHJcbiAgICAgICAgPyB2YWwyc3RyKCB2YXJWYWx1ZSlcclxuICAgICAgICA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgID8gdmFsMnN0ciggdmFyVmFsdWUsIGluZm8gYXMgSVZhbHVlQ29udmVydE9wdGlvbnMpXHJcbiAgICAgICAgICAgIDogdHlwZW9mIGluZm8gPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgID8gdmFsdWVUb1N0cmluZ0J5V2VsbEtub3duRnVuYyggdmFyVmFsdWUsIGluZm8pXHJcbiAgICAgICAgICAgICAgICA6IChpbmZvIGFzIFRvU3RyaW5nRnVuYykoIHZhclZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXN0cmluZ1ZhbHVlICYmICF2YWx1ZU9ubHkpXHJcbiAgICAgICAgc3RyaW5nVmFsdWUgPSBcImluaXRpYWxcIjtcclxuXHJcbiAgICBpZiAoaW1wRmxhZylcclxuICAgICAgICBzdHJpbmdWYWx1ZSArPSBcIiAhaW1wb3J0YW50XCI7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlT25seSA/IHN0cmluZ1ZhbHVlIDogYCR7Y2FtZWxUb0Rhc2goIHByb3BOYW1lKX06JHtzdHJpbmdWYWx1ZX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3IgZWFjaCBwcm9wZXJ0eSAtIHJlZ3VsYXIgYW5kIGN1c3RvbSAtIGluIHRoZSBnaXZlbiBzdHlsZXNldCBpbnZva2VzIHRoZSBhcHByb3ByaWF0ZVxyXG4gKiBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIHByb3BlcnR5IG5hbWUgYW5kIHRoZSB2YWx1ZSBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBmb3JQcm9wIFxyXG4gKiBAcGFyYW0gZm9yQ3VzdG9tUHJvcCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQ6IFN0eWxlc2V0LFxyXG4gICAgZm9yUHJvcDogKG5hbWU6IHN0cmluZywgdmFsOiBzdHJpbmcsIGlzQ3VzdG9tOiBib29sZWFuKSA9PiB2b2lkKVxyXG57XHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0aWYgKHByb3BOYW1lID09PSBcIi0tXCIpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNwZWNpYWwgaGFuZGxpbmcgb2YgdGhlIFwiLS1cIiBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gYXJyYXkgd2hlcmUgZWFjaCBpdGVtIGlzXHJcblx0XHRcdC8vIGEgdHdvLWl0ZW0gb3IgdGhyZWUtaXRlbSBhcnJheVxyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHN0eWxlc2V0W3Byb3BOYW1lXSBhcyBDdXN0b21WYXJfU3R5bGVUeXBlW107XHJcblx0XHRcdGZvciggbGV0IGN1c3RvbVZhbCBvZiBwcm9wVmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFjdXN0b21WYWwpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IFt2YXJOYW1lLCB2YXJWYWx1ZV0gPSBnZXRDdXN0b21Qcm9wTmFtZUFuZFZhbHVlKCBjdXN0b21WYWwpO1xyXG5cdFx0XHRcdGlmICghdmFyTmFtZSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmICh2YXJWYWx1ZSA9PSBudWxsKVxyXG5cdFx0XHRcdFx0dmFyVmFsdWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0XHRmb3JQcm9wKCB2YXJOYW1lLCB2YXJWYWx1ZSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGZvclByb3AoIHByb3BOYW1lLCBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUsIHN0eWxlc2V0W3Byb3BOYW1lXSwgdHJ1ZSksIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiBtdWx0aS1sZW5ndGggdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZVxyXG4vLyBpdGVtcyB3aWxsIGJlIHNlcGFyYXRlZCBieSBzcGFjZS5cclxuZnVuY3Rpb24gbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiIFwiKTtcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiBtdWx0aS10aW1lIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVcclxuLy8gaXRlbXMgd2lsbCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbmZ1bmN0aW9uIG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIENzc1RpbWVNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBcIixcIik7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZSBpdGVtcyB3aWxsIGJlXHJcbi8vIHNlcGFyYXRlZCBieSBjb21tYS5cclxuZnVuY3Rpb24gYXJyYXlUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBhbnkpXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHsgYXJyU2VwOiBcIixcIiB9KTtcclxufTtcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZSBpdGVtcyB3aWxsIGJlXHJcbi8vIHNlcGFyYXRlZCBieSBzbGFzaC5cclxuZnVuY3Rpb24gYXJyYXlUb1N0cmluZ1dpdGhTbGFzaCggdmFsOiBhbnkpXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHsgYXJyU2VwOiBcIi9cIiB9KTtcclxufTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE51bWVyaWMgaWRlbnRpZmllcnMgY29ycmVzcG9uZGluZyB0byB3ZWxsIGtub3duIGZ1bmN0aW9ucyB1c2VkIHRvIGNvbnZlcnQgc3R5bGUgcHJvcGVydHkgdmFsdWVzXHJcbiAqIHRvIHN0cmluZ3MuIFRoaXMgaXMgdXNlZCB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIG9iamVjdCB1c2VkIGZvciBtYXBwaW5nIHN0eWxlIHByb3BlcnRpZXMgdG9cclxuICogY29udmVyc2lvbiBmdW5jdGlvbnMuXHJcbiAqIFxyXG4gKiBOb3RlISEhOiB0aGUgdmFsdWVzIGluIHRoZSBlbnVtZXJhdGlvbiBjYW5ub3QgYmUgY2hhbmdlZCAtIG90aGVyd2lzZSwgaXQgd2lsbCBub3QgYmUgYmFja3dhcmRzXHJcbiAqIGNvbXBhdGlibGUuIEFsbCBuZXcgdmFsdWVzIG11c3QgYmUgYXBwZW5kZWQgYXQgdGhlIGVuZC5cclxuICovXHJcbmNvbnN0IGVudW0gV2VsbEtub3duRnVuY1xyXG57XHJcbiAgICBMZW5ndGggPSAxLFxyXG4gICAgQ29sb3IsXHJcbiAgICBCb3JkZXIsXHJcbiAgICBQb3NpdGlvbixcclxuICAgIENvcm5lclJhZGl1cyxcclxuICAgIE11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBBcnJheVdpdGhTbGFzaCxcclxuICAgIEdyaWRBeGlzLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nIHVzaW5nIGEgd2VsbC1rbm93biBmdW5jdGlvbiBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuXHJcbiAqIGVudW1lcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gdmFsIFxyXG4gKiBAcGFyYW0gZnVuY1R5cGUgXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWx1ZVRvU3RyaW5nQnlXZWxsS25vd25GdW5jKCB2YWw6IGFueSwgZnVuY1R5cGU6IFdlbGxLbm93bkZ1bmMpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGZ1bmMgPVxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkxlbmd0aCA/IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQ29sb3IgPyBjb2xvclRvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Cb3JkZXIgPyBib3JkZXJUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24gPyBwb3Myc3RyIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMgPyBzaW5nbGVDb3JuZXJSYWRpdXNUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UgPyBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEgPyBtdWx0aVRpbWVUb1N0cmluZ1dpdGhDb21tYSA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEgPyBhcnJheVRvU3RyaW5nV2l0aENvbW1hIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCA/IGFycmF5VG9TdHJpbmdXaXRoU2xhc2ggOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkdyaWRBeGlzID8gZ3JpZEF4aXNUb1N0cmluZyA6XHJcbiAgICAgICAgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gZnVuYyA/IGZ1bmModmFsKSA6IFwiXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZ2lzdHJ5IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgc3BlY2lmaWVzIGhvdyB0aGVpciB2YWx1ZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdGhlIFN0eWxlUHJvcGVydHlJbmZvIG9iamVjdHMgZGVzY3JpYmluZyBjdXN0b20gYWN0aW9ucyBuZWNlc3NhcnkgdG9cclxuICogY29udmVydCB0aGUgcHJvcGVydHkgdmFsdWUgdG8gdGhlIENTUy1jb21wbGlhbnQgc3RyaW5nLlxyXG4gKi9cclxuY29uc3QgU3R5bGVQcm9wZXJ0eUluZm9zOiB7IFtLIGluIFZhclRlbXBsYXRlTmFtZV0/OiAoV2VsbEtub3duRnVuYyB8IFRvU3RyaW5nRnVuYyB8IElWYWx1ZUNvbnZlcnRPcHRpb25zKSB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGlvbkRlbGF5OiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uRmlsbE1vZGU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25OYW1lOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uUGxheVN0YXRlOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcsXHJcblxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0LFxyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRDbGlwOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdiA9PiBtdWx0aVBvczJzdHIoIHYsIFwiLFwiKSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0sXHJcbiAgICBiYXNlbGluZVNoaWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlcjogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCbG9ja0VuZDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCbG9ja0VuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJCb3R0b206IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckNvbG9yOiB7XHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIGJvcmRlckltYWdlOiB7XHJcbiAgICAgICAgZnJvbU9iajogYm9yZGVySW1hZ2VUb1N0cmluZyxcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZVNsaWNlOiBib3JkZXJJbWFnZVNsaWNlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVySW5saW5lRW5kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJJbmxpbmVFbmRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJMZWZ0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckxlZnRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckxlZnRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlclJpZ2h0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyU3BhY2luZzogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGJvcmRlclRvcDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyV2lkdGg6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBib3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm94U2hhZG93OiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcblxyXG4gICAgY2FyZXRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGNsaXA6ICB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGByZWN0KCR7bXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSh2KX1gXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBjb2x1bW5HYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgY29sdW1uUnVsZTogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBjb2x1bW5SdWxlQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBjb2x1bW5SdWxlV2lkdGg6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBjb2x1bW5zOiBjb2x1bW5zVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5XaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBjdXJzb3I6IGN1cnNvclRvU3RyaW5nLFxyXG5cclxuICAgIGZpbGw6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBmaWxsT3BhY2l0eTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGZsZXg6IGZsZXhUb1N0cmluZyxcclxuICAgIGZsZXhCYXNpczogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBmbG9vZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgZm9udDoge1xyXG4gICAgICAgIGZyb21PYmo6IGZvbnRfZnJvbU9iamVjdFxyXG4gICAgfSxcclxuICAgIGZvbnRTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGZvbnRTdHlsZTogZm9udFN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgZ2FwOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgZ3JpZENvbHVtbkdhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBncmlkR2FwOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgZ3JpZFJvd0dhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBncmlkQXJlYTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCxcclxuICAgIGdyaWRBdXRvQ29sdW1uczogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuICAgIGdyaWRBdXRvUm93czogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuICAgIGdyaWRDb2x1bW46IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBncmlkUm93OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoLFxyXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGdyaWRUZW1wbGF0ZUFyZWFzVG9TdHJpbmcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG4gICAgZ3JpZFRlbXBsYXRlUm93czogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuXHJcbiAgICBoZWlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIGlubGluZVNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIGxlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbGV0dGVyU3BhY2luZzogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBsaWdodGluZ0NvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG5cclxuICAgIG1hcmdpbjogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIG1hcmdpbkJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbkJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbklubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5JbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5MZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpblJpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpblRvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJrZXJFbmQ6IG1hcmtlclN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJrZXJNaWQ6IG1hcmtlclN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJrZXJTdGFydDogbWFya2VyU3R5bGVUb1N0cmluZyxcclxuICAgIG1heEJsb2NrU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXhIZWlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4SW5saW5lU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXhXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtaW5CbG9ja1NpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWluSGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1pbklubGluZVNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cdG1pbldpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBvYmplY3RQb3NpdGlvbjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIG9mZnNldDogb2Zmc2V0VG9TdHJpbmcsXHJcbiAgICBvZmZzZXRBbmNob3I6IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXREaXN0YW5jZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBvZmZzZXRQb3NpdGlvbjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIG9mZnNldFJvdGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgb3V0bGluZTogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBvdXRsaW5lQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBvdXRsaW5lT2Zmc2V0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBwYWRkaW5nOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgcGFkZGluZ0Jsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdCbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdCb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0lubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdUb3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGVyc3BlY3RpdmU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgcXVvdGVzOiB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHYgPT4gYFwiJHt2fVwiYFxyXG4gICAgfSxcclxuXHJcbiAgICByaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICByb3RhdGU6IHJvdGF0ZVRvU3RyaW5nLFxyXG4gICAgcm93R2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBzY3JvbGxiYXJDb2xvcjoge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsTWFyZ2luOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2s6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbkJvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmU6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5SaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5Ub3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZzogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9jazogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmU6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ1RvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzaGFwZU1hcmdpbjogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzdG9wQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBzdHJva2U6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcblxyXG4gICAgdGFiU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB0ZXh0Q29tYmluZVVwcmlnaHQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBkaWdpdHMgJHt2fWBcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iajogdGV4dERlY29yYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSxcclxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB0ZXh0RW1waGFzaXM6IHtcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICB0ZXh0SW5kZW50OiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dFNpemVBZGp1c3Q6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0b3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25EZWxheTogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nLFxyXG4gICAgdHJhbnNsYXRlOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHZlcnRpY2FsQWxpZ246IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHdpbGxDaGFuZ2U6IHtcclxuICAgICAgICBmcm9tU3RyaW5nOiBjYW1lbFRvRGFzaFxyXG4gICAgfSxcclxuICAgIHdvcmRTcGFjaW5nOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICB6b29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIC8vIHNwZWNpYWwgcHJvcGVydGllcyBmb3IgSVZhclJ1bGUgdHlwZXNcclxuICAgIFwiQ3NzTGVuZ3RoXCI6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgXCJDc3NBbmdsZVwiOiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzVGltZVwiOiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NSZXNvbHV0aW9uXCI6IENzc1Jlc29sdXRpb25NYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyZXF1ZW5jeVwiOiBDc3NGcmVxdWVuY3lNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1BlcmNlbnRcIjogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUG9zaXRpb25cIjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIFwiQ3NzQ29sb3JcIjogV2VsbEtub3duRnVuYy5Db2xvcixcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzdXBwb3J0cyBxdWVyeS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN1cHBvcnRzIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnk6IFN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHF1ZXJ5LCB7XHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nLFxyXG4gICAgICAgIGFyclNlcDogXCIgb3IgXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU2luZ2xlU3VwcG9ydHNRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggcXVlcnksIHtcclxuICAgICAgICBmcm9tT2JqOiAodjogRXh0ZW5kZWRTdHlsZXNldCAmIHsgJG5lZ2F0ZT86IGJvb2xlYW47IH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKCB2KS5maWx0ZXIoIChwcm9wTmFtZSkgPT4gcHJvcE5hbWUgIT0gXCIkbmVnYXRlXCIpO1xyXG4gICAgICAgICAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vdCA9IHYuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgICAgICAgICByZXR1cm4gIGAke25vdH0gKCR7cHJvcE5hbWVzLm1hcCggKHByb3BOYW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lIGFzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQsIHF1ZXJ5W3Byb3BOYW1lXSkpLmpvaW4oIFwiKSBhbmQgKFwiKX0pYDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgRXh0ZW5kZWQsIE9uZU9yUGFpciwgT25lT3JCb3gsIE9uZU9yTWFueSwgQ3NzTnVtYmVyLCBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbixcclxuICAgIENzc1RpbWUsIENzc0xlbmd0aCwgQ3NzQW5nbGUsIENzc1BlcmNlbnQsIENzc0xlbmd0aEJveCwgQ3NzTXVsdGlUaW1lLCBDc3NGcmVxdWVuY3ksXHJcbiAgICBDc3NSZXNvbHV0aW9uLCBDc3NSYWRpdXMsIElVcmxQcm94eSwgSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsXHJcbiAgICBDc3NQb2ludCwgRXh0ZW5kZWRQcm9wLCBJR2VuZXJpY1Byb3h5LCBDc3NMZW5ndGhQYWlyLCBJUXVvdGVkUHJveHlcclxufSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge0Nzc0NvbG9yfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NJbWFnZX0gZnJvbSBcIi4vSW1hZ2VUeXBlc1wiO1xyXG5pbXBvcnQge0ZvbnRTdHJldGNoX1NpbmdsZX0gZnJvbSBcIi4vRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0lWYXJSdWxlLCBJQW5pbWF0aW9uUnVsZSwgSUNvdW50ZXJSdWxlLCBJSURSdWxlLCBJR3JpZExpbmVSdWxlLCBJR3JpZEFyZWFSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHByb3BlcnR5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbi1jb250ZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWduQ29udGVudF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHxcclxuICAgIFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHwgXCJzYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgY2VudGVyXCIgfFxyXG4gICAgXCJzcGFjZS1iZXR3ZWVuXCIgfCBcInNwYWNlLWFyb3VuZFwiIHwgXCJzcGFjZS1ldmVubHlcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWduLWl0ZW1zIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWduSXRlbXNfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcbiAgICBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8IFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24tc2VsZiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnblNlbGZfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHxcclxuICAgIFwic2VsZi1zdGFydFwiIHwgXCJzZWxmLWVuZFwiIHwgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfFxyXG4gICAgXCJzYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgY2VudGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbm1lbnQtYmFzZWxpbmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25tZW50QmFzZWxpbmVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImJhc2VsaW5lXCIgfCBcImJlZm9yZS1lZGdlXCIgfCBcInRleHQtYmVmb3JlLWVkZ2VcIiB8XHJcbiAgICBcIm1pZGRsZVwiIHwgXCJjZW50cmFsXCIgfCBcImFmdGVyLWVkZ2VcIiB8IFwidGV4dC1hZnRlci1lZGdlXCIgfCBcImlkZW9ncmFwaGljXCIgfCBcImFscGhhYmV0aWNcIiB8XHJcbiAgICBcImhhbmdpbmdcIiB8IFwibWF0aGVtYXRpY2FsXCIgfCBcInRvcFwiIHwgXCJjZW50ZXJcIiB8IFwiYm90dG9tXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbl9TaW5nbGUgPVxyXG4gICAge1xyXG4gICAgICAgIG5hbWU/OiBFeHRlbmRlZDxBbmltYXRpb25OYW1lX1NpbmdsZT47XHJcbiAgICAgICAgZHVyYXRpb24/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgICAgICBmdW5jPzogRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU2luZ2xlPjtcclxuICAgICAgICBkZWxheT86IEV4dGVuZGVkPENzc1RpbWU+O1xyXG4gICAgICAgIGNvdW50PzogRXh0ZW5kZWQ8QW5pbWF0aW9uSXRlcmF0aW9uQ291bnRfU2luZ2xlPjtcclxuICAgICAgICBkaXJlY3Rpb24/OiBFeHRlbmRlZDxBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlPjtcclxuICAgICAgICBtb2RlPzogRXh0ZW5kZWQ8QW5pbWF0aW9uRmlsbE1vZGVfU2luZ2xlPjtcclxuICAgICAgICBzdGF0ZT86IEV4dGVuZGVkPEFuaW1hdGlvblBsYXlTdGF0ZV9TaW5nbGU+O1xyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uX1N0eWxlVHlwZSA9IHN0cmluZyB8IE9uZU9yTWFueTxBbmltYXRpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1kZWxheSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EZWxheV9TdHlsZVR5cGUgPSBDc3NNdWx0aVRpbWU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGRpcmVjdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlID0gXCJub3JtYWxcIiB8IFwicmV2ZXJzZVwiIHwgXCJhbHRlcm5hdGVcIiB8IFwiYWx0ZXJuYXRlLXJldmVyc2VcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZGlyZWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkRpcmVjdGlvbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZHVyYXRvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EdXJhdGlvbl9TdHlsZVR5cGUgPSBDc3NNdWx0aVRpbWU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGZpbGwgbW9kZSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GaWxsTW9kZV9TaW5nbGUgPSBcIm5vbmVcIiB8IFwiZm9yd2FyZHNcIiB8IFwiYmFja3dhcmRzXCIgfCBcImJvdGhcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZmlsbC1tb2RlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZpbGxNb2RlX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gaXRlcmF0aW9uIGNvdW50ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZSA9IFwiaW5maW5pdGVcIiB8IENzc051bWJlcjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25JdGVyYXRpb25Db3VudF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBuYW1lICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbk5hbWVfU2luZ2xlID0gXCJub25lXCIgfCBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tbmFtZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25OYW1lX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25OYW1lX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIHBsYXkgc3RhdGUgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uUGxheVN0YXRlX1NpbmdsZSA9IFwicGF1c2VkXCIgfCBcInJ1bm5pbmdcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tcGxheS1zdGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25QbGF5U3RhdGVfU3R5bGVUeXBlID0gT25lT3JNYW55PEFuaW1hdGlvblBsYXlTdGF0ZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2ltcGxlIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb25zIC0gdGhvc2UgdGhhdCBkb24ndCBoYXZlIHBhcmFtZXRlcnMgKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fU2ltcGxlID0gXCJsaW5lYXJcIiB8IFwiZWFzZVwiIHwgXCJlYXNlLWluXCIgfCBcImVhc2Utb3V0XCIgfCBcImVhc2UtaW4tb3V0XCIgfCBcInN0ZXAtc3RhcnRcIiB8IFwic3RlcC1lbmRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzdGVwIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fU3RlcFBvc2l0aW9uID0gXCJqdW1wLXN0YXJ0XCIgfCBcImp1bXAtZW5kXCIgfCBcImp1bXAtbm9uZVwiIHwgXCJqdW1wLWJvdGhcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc3RlcCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX1N0ZXAgPSBudW1iZXIgfCBbRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU3RlcFBvc2l0aW9uPj9dO1xyXG5cclxuLyoqIFR5cGUgZm9yIEJlemllciBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX0JlemllciA9IFtFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9TaW5nbGUgPSBUaW1pbmdGdW5jdGlvbl9TaW1wbGUgfCBUaW1pbmdGdW5jdGlvbl9TdGVwIHwgVGltaW5nRnVuY3Rpb25fQmV6aWVyO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fU3R5bGVUeXBlID0gT25lT3JNYW55PFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZmFjZS12aXNpYmlsaXR5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tmYWNlVmlzaWJpbGl0eU1vZGVfU3R5bGVUeXBlID0gXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgdmFsdWUgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZF9TaW5nbGUgPSBzdHJpbmcgfCBDc3NDb2xvciB8XHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICAgICAgaW1hZ2U/OiBFeHRlbmRlZDxDc3NJbWFnZSB8IHN0cmluZz4sXHJcbiAgICAgICAgcG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4sXHJcbiAgICAgICAgc2l6ZT86IEV4dGVuZGVkPEJhY2tncm91bmRTaXplX1NpbmdsZT4sXHJcbiAgICAgICAgcmVwZWF0PzogRXh0ZW5kZWQ8QmFja2dyb3VuZFJlcGVhdF9TaW5nbGU+LFxyXG4gICAgICAgIGF0dGFjaG1lbnQ/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGU+LFxyXG4gICAgICAgIG9yaWdpbj86IEV4dGVuZGVkPEJhY2tncm91bmRPcmlnaW5fU2luZ2xlPixcclxuICAgICAgICBjbGlwPzogRXh0ZW5kZWQ8QmFja2dyb3VuZENsaXBfU2luZ2xlPixcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBhdHRhY2htZW50ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRBdHRhY2htZW50X1NpbmdsZSA9IFwic2Nyb2xsXCIgfCBcImZpeGVkXCIgfCBcImxvY2FsXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1hdHRhY2htZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRBdHRhY2htZW50X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgYmxlbmQgbW9kZSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQmxlbmRNb2RlX1NpbmdsZSA9IFwibm9ybWFsXCIgfCBcIm11bHRpcGx5XCIgfCBcInNjcmVlblwiIHwgXCJvdmVybGF5XCIgfCBcImRhcmtlblwiIHxcclxuICAgIFwibGlnaHRlblwiIHwgXCJjb2xvci1kb2RnZVwiIHwgXCJjb2xvci1idXJuXCIgfCBcImhhcmQtbGlnaHRcIiB8IFwic29mdC1saWdodFwiIHwgXCJkaWZmZXJlbmNlXCIgfFxyXG4gICAgXCJleGNsdXNpb25cIiB8IFwiaHVlXCIgfCBcInNhdHVyYXRpb25cIiB8IFwiY29sb3JcIiB8IFwibHVtaW5vc2l0eVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtYmxlbmQtbW9kZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQmxlbmRNb2RlX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kQmxlbmRNb2RlX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBjbGlwICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRDbGlwX1NpbmdsZSA9IFwiYm9yZGVyLWJveFwiIHwgXCJwYWRkaW5nLWJveFwiIHwgXCJjb250ZW50LWJveFwiIHwgXCJ0ZXh0XCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1jbGlwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRDbGlwX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kQ2xpcF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1pbWFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kSW1hZ2VfU3R5bGVUeXBlID0gXCJub25lXCIgfCBPbmVPck1hbnk8Q3NzSW1hZ2UgfCBzdHJpbmc+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgb3JpZ2luICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRPcmlnaW5fU2luZ2xlID0gXCJib3JkZXItYm94XCIgfCBcInBhZGRpbmctYm94XCIgfCBcImNvbnRlbnQtYm94XCIgfCBcInRleHRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLW9yaWdpbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kT3JpZ2luX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kT3JpZ2luX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRQb3NpdGlvbl9TdHlsZVR5cGUgPSBNdWx0aUNzc1Bvc2l0aW9uO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgcmVwZWF0ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRSZXBlYXRLZXl3b3JkX1NpbmdsZSA9IFwicmVwZWF0XCIgfCBcInNwYWNlXCIgfCBcInJvdW5kXCIgfCBcIm5vLXJlcGVhdFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIHJlcGVhdCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUmVwZWF0X1NpbmdsZSA9IFwicmVwZWF0LXhcIiB8IFwicmVwZWF0LXlcIiB8IE9uZU9yUGFpcjxCYWNrZ3JvdW5kUmVwZWF0S2V5d29yZF9TaW5nbGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtcmVwZWF0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRSZXBlYXRfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRSZXBlYXRfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQgc2l6ZSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kU2l6ZV9TaW5nbGUgPSBcImNvdmVyXCIgfCBcImNvbnRhaW5cIiB8IE9uZU9yUGFpcjxDc3NMZW5ndGggfCBcImF1dG9cIj47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYmFja2dyb3VuZC1zaXplIHN0eWxlIHByb3BlcnR5LiBUaGUgYmFja2dyb3VuZC1zaXplIHN0eWxlIGNhbiBzcGVjaWZ5IG9uZSBvciBtb3JlXHJcbiAqIGNvbW1hLXNlcGFyYXRlZCBzaXplcywgd2hlcmUgZWFjaCBzaXplIGNhbiBiZSBhIGtleXdvcmQsIGEgbGVuZ3RoIG9yIHR3byBsZW5ndGhzLiBXZSBtb2RlbFxyXG4gKiB0aGlzIHN0cnVjdHVyZSB0aGUgZm9sbG93aW5nIHdheTpcclxuICogLSBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYSBudW1iZXIsIHRoYXQncyB0aGUgb25seSB2YWx1ZTtcclxuICogLSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gaXQgaXMgYSBsaXN0IG9mIHNldmVyYWwgc2l6ZXMuIEVhY2ggZWxlbWVudCBpbiB0aGlzIGFycmF5IGlzXHJcbiAqICAgZWl0aGVyIGEga2V5d29yZCBvciBhIGxlbmd0aCBvciBhbiBhcnJheSBvZiB0d28gZWxlbWVudHMuXHJcbiAqIFRodXMgWzEwMCwyMDBdIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgXCIxMDBweCwgMjAwcHhcIiBhbmQgbm90IFwiMTAwcHggMjAwcHhcIjsgdGhhdCBpcywgaXQgd2lsbFxyXG4gKiBkZWZpbmUgdHdvIHNpemVzIGVhY2ggd2l0aCBhIHdpZHRoIGluc3RlYWQgb2Ygb25lIHNpemUgd2l0aCBib3RoIHdpZHRoIGFuZCBoZWlnaHQuIElmIHlvdSBuZWVkXHJcbiAqIHRvIHNwZWNpZnkgYm90aCB3aWR0aCBhbmQgaGVpZ2h0IHlvdSBtdXN0IHVzZSBhcnJheSB3aXRoaW4gYXJyYXkgLSBldmVuIGZvciBhIHNpbmdsZSBzaXplOlxyXG4gKiBbWzEwMCwyMDBdXSB3bGwgYmUgaW50ZXJwcmV0ZWQgYXMgXCIxMDBweCAyMDBweFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFNpemVfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRTaXplX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYXNlbGluZS1zaGlmdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYXNlbGluZVNoaWZ0X1N0eWxlVHlwZSA9IFwic3ViXCIgfCBcInN1cGVyXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItY29sbGFwc2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyQ29sYXBzZV9TdHlsZVR5cGUgPSBcImNvbGxhcHNlXCIgfCBcInNlcGFyYXRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItY29sb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyQ29sb3JfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzQ29sb3I+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlIHN0eWxlIHByb3BlcnR5IGV4cHJlc3NlZCBhcyBhbiBvYmplY3QuICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlX09iamVjdCA9XHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlOiBFeHRlbmRlZDxCb3JkZXJJbWFnZVNvdXJjZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHNsaWNlPzogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHdpZHRoPzogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VXaWR0aF9TdHlsZVR5cGU+LFxyXG4gICAgICAgIG91dHNldD86IEV4dGVuZGVkPEJvcmRlckltYWdlT3V0c2V0X1N0eWxlVHlwZT4sXHJcbiAgICAgICAgcmVwZWF0PzogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VSZXBlYXRfU3R5bGVUeXBlPixcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlIHN0eWxlIHByb3BlcnR5LiAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZV9TdHlsZVR5cGUgPSBzdHJpbmcgfCBDc3NJbWFnZSB8IEJvcmRlckltYWdlX09iamVjdDtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utb3V0c2V0IHN0eWxlIHByb3BlcnR5LiBJdCBpcyBDc3NOdW1iZXIgYW5kIG5vdCBDc3NMZW5ndGggYmVjYXVzZVxyXG4gKiBib3JkZXItaW1hZ2Utb3V0c2V0IGNhbiBiZSBzcGVjaWZpZWQgYXMgYSB1bml0bGVzcyBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZU91dHNldF9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NOdW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS1yZXBlYXQga2V5d29yZHMgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VSZXBlYXRfS2V5d29yZCA9IFwic3RyZXRjaFwiIHwgXCJyZXBlYXRcIiB8IFwicm91bmRcIiB8IFwic3BhY2VcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2UtcmVwZWF0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlUmVwZWF0X1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxCb3JkZXJJbWFnZVJlcGVhdF9LZXl3b3JkPjtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utc2xpY2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NOdW1iZXIgfCBzdHJpbmc+IHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCB0cnVlXSB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgdHJ1ZV0gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIHRydWVdIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCB0cnVlXTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utc291cmNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlU291cmNlX1N0eWxlVHlwZSA9IE9uZU9yQm94PENzc0ltYWdlIHwgc3RyaW5nPjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utd2lkdGggc3R5bGUgcHJvcGVydHkuIEl0IGlzIENzc051bWJlciBhbmQgbm90IENzc0xlbmd0aCBiZWNhdXNlXHJcbiAqIGJvcmRlci1pbWFnZS13aWR0aCBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgdW5pdGxlc3MgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VXaWR0aF9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NOdW1iZXIgfCBcImF1dG9cIiB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItcmFkaXVzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclJhZGl1c19TdHlsZVR5cGUgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoQm94PjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1zcGFjaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclNwYWNpbmdfU3R5bGVUeXBlID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYm9yZGVyIHNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3R5bGVfS2V5d29yZCA9IFwibm9uZVwiIHwgXCJoaWRkZW5cIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiIHwgXCJzb2xpZFwiIHwgXCJkb3VibGVcIiB8XHJcbiAgICBcImdyb292ZVwiIHwgXCJyaWRnZVwiIHwgXCJpbnNldFwiIHwgXCJvdXRzZXRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTdHlsZV9TdHlsZVR5cGUgPSBPbmVPckJveDxCb3JkZXJTdHlsZV9LZXl3b3JkPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJfU3R5bGVUeXBlID0gQ3NzTGVuZ3RoIHwgQm9yZGVyU3R5bGVfS2V5d29yZCB8IENzc0NvbG9yIHxcclxuICAgIFtFeHRlbmRlZDxDc3NMZW5ndGg+PywgRXh0ZW5kZWQ8Qm9yZGVyU3R5bGVfS2V5d29yZD4/LCBFeHRlbmRlZDxDc3NDb2xvcj4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlciBzaWRlIHdpZHRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoX1NpbmdsZSA9IFwidGhpblwiIHwgXCJtZWRpdW1cIiB8IFwidGhpY2tcIiB8IENzc0xlbmd0aDtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItd2lkdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhfU3R5bGVUeXBlID0gT25lT3JCb3g8Qm9yZGVyV2lkdGhfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBib3ggc2hhZG93LiAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaGFkb3dfU2luZ2xlID0gXCJub25lXCIgfCBzdHJpbmcgfFxyXG4gICAge1xyXG4gICAgICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBzcHJlYWQ/OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIGluc2V0PzogRXh0ZW5kZWQ8Ym9vbGVhbj5cclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYm94IHNoYWRvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaGFkb3dfU3R5bGVUeXBlID0gT25lT3JNYW55PEJveFNoYWRvd19TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm94LXNpemluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaXppbmdfU3R5bGVUeXBlID0gXCJjb250ZW50LWJveFwiIHwgXCJib3JkZXItYm94XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBicmVhay1hZnRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0FmdGVyX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhbHdheXNcIiB8IFwiYWxsXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwicGFnZVwiIHxcclxuICAgIFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJyZWN0b1wiIHwgXCJ2ZXJzb1wiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiY29sdW1uXCIgfFxyXG4gICAgXCJhdm9pZC1yZWdpb25cIiB8IFwicmVnaW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBicmVhay1iZWZvcmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQnJlYWtCZWZvcmVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImFsd2F5c1wiIHwgXCJhbGxcIiB8IFwiYXZvaWQtcGFnZVwiIHwgXCJwYWdlXCIgfFxyXG4gICAgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInJlY3RvXCIgfCBcInZlcnNvXCIgfCBcImF2b2lkLWNvbHVtblwiIHwgXCJjb2x1bW5cIiB8XHJcbiAgICBcImF2b2lkLXJlZ2lvblwiIHwgXCJyZWdpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJyZWFrLWluc2lkZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0luc2lkZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYXZvaWRcIiB8IFwiYXZvaWQtcGFnZVwiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiYXZvaWQtcmVnaW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjYXB0aW9uLXNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2FwdGlvblNpZGVfU3R5bGVUeXBlID0gXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImJsb2NrLXN0YXJ0XCIgfCBcImJsb2NrLWVuZFwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2FyZXQtY29sb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2FyZXRDb2xvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc0NvbG9yO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xlYXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xlYXJfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiYm90aFwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xpcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGlwX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzTGVuZ3RoQm94O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSB1c2VkIGZvciBzZXZlcmFsIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR2VvbWV0cnlCb3hLZXl3b3JkID0gXCJtYXJnaW4tYm94XCIgfCBcImJvcmRlci1ib3hcIiB8IFwicGFkZGluZy1ib3hcIiB8IFwiY29udGVudC1ib3hcIiB8XHJcbiAgICBcImZpbGwtYm94XCIgfCBcInN0cm9rZS1ib3hcIiB8IFwidmlldy1ib3hcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGV4dGVudCBmb3IgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgb3IgYHJheSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbnRLZXl3b3JkID0gXCJjbG9zZXN0LWNvcm5lclwiIHwgXCJjbG9zZXN0LXNpZGVcIiB8IFwiZmFydGhlc3QtY29ybmVyXCIgfCBcImZhcnRoZXN0LXNpZGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsaXAtcGF0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGlwUGF0aF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IElVcmxQcm94eSB8IEJhc2ljU2hhcGUgfCBHZW9tZXRyeUJveEtleXdvcmQgfFxyXG4gICAgW0dlb21ldHJ5Qm94S2V5d29yZCwgQmFzaWNTaGFwZV07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGlwLXJ1bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xpcFJ1bGVfU3R5bGVUeXBlID0gXCJub256ZXJvXCIgfCBcImV2ZW5vZGRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbG9yLWludGVycG9sYXRpb24gYW5kIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIENvbG9ySW50ZXJwb2xhdGlvbl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwic1JHQlwiIHwgXCJsaW5lYXJSR0JcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1jb3VudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5Db3VudF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IG51bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1maWxsIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbHVtbkZpbGxfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImJhbGFuY2VcIiB8IFwiYmFsYW5jZS1hbGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1nYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uR2FwX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tc3BhbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5TcGFuX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhbGxcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGNvbHVtbnMgc3R5bGUgcHJvcGVydHkuIFRoZSB2YWx1ZSBjYW4gYmUgcHJvdmlkZWQgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybXMgYW5kXHJcbiAqIGFuZCB3aWxsIGJlIGNvbnZlcnRlZCB0byBzdHJpbmcgYXMgZm9sbG93czpcclxuICogXHJcbiAqIC0gc3RyaW5nOiB3aWxsIGJlIHRyZWF0ZWQgYXMgaXMuXHJcbiAqIC0gbnVtYmVyOiB3aWxsIGJlIGNvbnZlcnRlZCB0byBhIHVuaXRsZXNzIG51bWJlciAtIGNvdW50IG9mIGNvbHVtbnMuXHJcbiAqIC0gSUxlbmd0aFByb3h5IChlLmcuIHB4KDgpKTogY29udmVydGVkIHRvIGEgbnVtYmVyIHdpdGggdGhlIHByb3BlciBsZW5ndGggdW5pdHMuXHJcbiAqIC0gdHdvIHZhcmlhbnRzIG9mIHR3byBlbGVtZW50IGFycmF5czogb25lIG9mIHRoZSBlbGVtZW50cyB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBudW1iZXIgb2YgY29sdW1uc1xyXG4gKiAgIHdoaWxlIGFub3RoZXIgYXMgdGhlIGNvbHVtbiB3aWR0aC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbHVtbnNfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDc3NOdW1iZXIgfCBDc3NMZW5ndGggfFxyXG4gICAgW1wiYXV0b1wiIHwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgXCJhdXRvXCIgfCBFeGNsdWRlPEV4dGVuZGVkPENzc0xlbmd0aD4sbnVtYmVyPl0gfFxyXG4gICAgW1wiYXV0b1wiIHwgRXhjbHVkZTxFeHRlbmRlZDxDc3NMZW5ndGg+LG51bWJlcj4sIFwiYXV0b1wiIHwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPl07XHJcbi8vIE5vdGUgdGhhdCBubyBzcGVjaWFsIGNvdmVyc2lvbiBmdW5jdGlvbiBpcyByZXF1aXJlZCBmb3IgdGhpcyBwcm9wZXJ0eSBiZWNhdXNlIHRoZSBudW1iZXIgdHlwZSB3aWxsXHJcbi8vIGFsd2F5cyBiZSBjb252ZXJ0ZWQgdG8gYSB1bml0bGVzcyBudW1iZXJcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbnRhaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29udGFpbl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwic3RyaWN0XCIgfCBcImNvbnRlbnRcIiB8IFwic2l6ZVwiIHwgXCJsYXlvdXRcIiB8IFwic3R5bGVcIiB8IFwicGFpbnRcIiB8XHJcbiAgICBFeHRlbmRlZDxcInNpemVcIiB8IFwibGF5b3V0XCIgfCBcInN0eWxlXCIgfCBcInBhaW50XCI+W107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb250ZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbnRlbnRfU3R5bGVUeXBlID0gc3RyaW5nIHwgXCJub25lXCIgfCBcIm5vcm1hbFwiIHwgT25lT3JNYW55PENzc0ltYWdlIHxcclxuICAgIFwib3Blbi1xdW90ZVwiIHwgXCJjbG9zZS1xdW90ZVwiIHwgXCJuby1vcGVuLXF1b3RlXCIgfCBcIm5vLWNsb3NlLXF1b3RlXCI+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY291bnRlci1pbmNyZW1lbnQsIGNvdW50ZXItcmVzZXQgYW5kIGNvdW50ZXItc2V0IHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgQ291bnRlcl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IE9uZU9yTWFueTxJQ291bnRlclJ1bGUgfCBzdHJpbmcgfCBbSUNvdW50ZXJSdWxlIHwgc3RyaW5nLCBFeHRlbmRlZDxudW1iZXI+XT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjdXJzb3IgcHJlLWRlZmluZWQgbmFtZXMgKi9cclxuZXhwb3J0IHR5cGUgQ3Vyc29yX0tleXdvcmQgPSBcImF1dG9cIiB8IFwiZGVmYXVsdFwiIHwgXCJub25lXCIgfCBcImNvbnRleHQtbWVudVwiIHwgXCJoZWxwXCIgfCBcInBvaW50ZXJcIiB8IFwicHJvZ3Jlc3NcIiB8XHJcbiAgICBcIndhaXRcIiB8IFwiY2VsbFwiIHwgXCJjcm9zc2hhaXJcIiB8IFwidGV4dFwiIHwgXCJ2ZXJ0aWNhbC10ZXh0XCIgfCBcImFsaWFzXCIgfCBcImNvcHlcIiB8IFwibW92ZVwiIHxcclxuICAgIFwibm8tZHJvcFwiIHwgXCJub3QtYWxsb3dlZFwiIHwgXCJlLXJlc2l6ZVwiIHwgXCJuLXJlc2l6ZVwiIHwgXCJuZS1yZXNpemVcIiB8IFwibnctcmVzaXplXCIgfFxyXG4gICAgXCJzLXJlc2l6ZVwiIHwgXCJzZS1yZXNpemVcIiB8IFwic3ctcmVzaXplXCIgfCBcInctcmVzaXplXCIgfCBcImV3LXJlc2l6ZVwiIHwgXCJucy1yZXNpemVcIiB8XHJcbiAgICBcIm5lc3ctcmVzaXplXCIgfCBcIm53c2UtcmVzaXplXCIgfCBcImNvbC1yZXNpemVcIiB8IFwicm93LXJlc2l6ZVwiIHwgXCJhbGwtc2Nyb2xsXCIgfCBcInpvb20taW5cIiB8XHJcbiAgICBcInpvb20tb3V0XCIgfCBcImdyYWJcIiB8IFwiZ3JhYmJpbmdcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBjdXJzb3Igc3R5bGUgcHJvcGVydHkgc2luZ2xlIHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIEN1cnNvcl9TaW5nbGUgPSBDdXJzb3JfS2V5d29yZCB8IElVcmxQcm94eSB8IFtJVXJsUHJveHksIEV4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGN1cnNvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDdXJzb3JfU3R5bGVUeXBlID0gT25lT3JNYW55PEN1cnNvcl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZGlyZWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIERpcmVjdGlvbl9TdHlsZVR5cGUgPSBcImx0clwiIHwgXCJydGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGRpc3BsYXkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRGlzcGxheV9TdHlsZVR5cGUgPSBcImJsb2NrXCIgfCBcImlubGluZVwiIHwgXCJydW4taW5cIiB8IFwiY29udGVudHNcIiB8IFwibm9uZVwiIHxcclxuICAgIFwiaW5saW5lLWJsb2NrXCIgfCBcImlubGluZS1saXN0LWl0ZW1cIiB8IFwiaW5saW5lLXRhYmxlXCIgfCBcImlubGluZS1mbGV4XCIgfCBcImlubGluZS1ncmlkXCIgfFxyXG4gICAgXCJmbG93XCIgfCBcImZsb3ctcm9vdFwiIHwgXCJ0YWJsZVwiIHwgXCJmbGV4XCIgfCBcImdyaWRcIiB8IFwicnVieVwiIHxcclxuICAgIFwidGFibGUtcm93LWdyb3VwXCIgfCBcInRhYmxlLWhlYWRlci1ncm91cFwiIHwgXCJ0YWJsZS1mb290ZXItZ3JvdXBcIiB8IFwidGFibGUtcm93XCIgfCBcInRhYmxlLWNlbGxcIiB8XHJcbiAgICAgICAgXCJ0YWJsZS1jb2x1bW4tZ3JvdXBcIiB8IFwidGFibGUtY29sdW1uXCIgfCBcInRhYmxlLWNhcHRpb25cIiB8IFwicnVieS1iYXNlXCIgfCBcInJ1YnktdGV4dFwiIHxcclxuICAgICAgICBcInJ1YnktYmFzZS1jb250YWluZXJcIiB8IFwicnVieS10ZXh0LWNvbnRhaW5lclwiIHxcclxuICAgIFwibGlzdC1pdGVtXCIgfCBcImxpc3QtaXRlbSBibG9ja1wiIHwgXCJsaXN0LWl0ZW0gaW5saW5lXCIgfCBcImxpc3QtaXRlbSBmbG93XCIgfCBcImxpc3QtaXRlbSBmbG93LXJvb3RcIiB8XHJcbiAgICAgICAgXCJsaXN0LWl0ZW0gYmxvY2sgZmxvd1wiIHwgXCJsaXN0LWl0ZW0gYmxvY2sgZmxvdy1yb290XCIgfCBcImZsb3cgbGlzdC1pdGVtIGJsb2NrXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4vKiogVHlwZSBmb3IgZG9taW5hbnQtYmFzZWxpbmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRG9taW5hbnRCYXNlbGluZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidGV4dC1ib3R0b21cIiB8IFwiYWxwaGFiZXRpY1wiIHwgXCJpZGVvZ3JhcGhpY1wiIHwgXCJtaWRkbGVcIiB8XHJcbiAgICBcImNlbnRyYWxcIiB8IFwibWF0aGVtYXRpY2FsXCIgfCBcImhhbmdpbmdcIiB8IFwidGV4dC10b3BcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGVtcHR5LWNlbGxzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEVtcHR5Q2VsbHNfU3R5bGVUeXBlID0gXCJzaG93XCIgfCBcImhpZGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZpbGwtcnVsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGaWxsUnVsZV9TdHlsZVR5cGUgPSBcIm5vbnplcm9cIiB8IFwiZXZlbm9kZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmlsdGVyIGFuZCBiYWNrZHJvcC1maWx0ZXIgc3R5bGUgc2luZ2xlIHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIEZpbHRlcl9TaW5nbGUgPSBzdHJpbmcgfCBJVXJsUHJveHkgfCBJRmlsdGVyUHJveHk7XHJcblxyXG4vKiogVHlwZSBmb3IgZmlsdGVyIGFuZCBiYWNrZHJvcC1maWx0ZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmlsdGVyX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxGaWx0ZXJfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleF9TdHlsZVR5cGUgPSBGbGV4QmFzaXNfU3R5bGVUeXBlIHwgW0V4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPG51bWJlcj5dIHxcclxuICAgIFtFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxGbGV4QmFzaXNfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LWJhc2lzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhCYXNpc19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiY29udGVudFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC1kaXJlY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleERpcmVjdGlvbl9TdHlsZVR5cGUgPSBcInJvd1wiIHwgXCJyb3ctcmV2ZXJzZVwiIHwgXCJjb2x1bW5cIiB8IFwiY29sdW1uLXJldmVyc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtZmxvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4Rmxvd19TdHlsZVR5cGUgPSBGbGV4RGlyZWN0aW9uX1N0eWxlVHlwZSB8IEZsZXhXcmFwX1N0eWxlVHlwZSB8XHJcbiAgICBbRXh0ZW5kZWQ8RmxleERpcmVjdGlvbl9TdHlsZVR5cGU+LCBFeHRlbmRlZDxGbGV4V3JhcF9TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtd3JhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4V3JhcF9TdHlsZVR5cGUgPSBcIm5vd3JhcFwiIHwgXCJ3cmFwXCIgfCBcIndyYXAtcmV2ZXJzZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxvYXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxvYXRfU3R5bGVUeXBlID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcIm5vbmVcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIjtcclxuXHJcblxyXG5cclxuLyoqIEtleXdvcmRzIGZvciBmb250IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRfU3lzdGVtS2V5d29yZCA9IFwiY2FwdGlvblwiIHwgXCJpY29uXCIgfCBcIm1lbnVcIiB8IFwibWVzc2FnZS1ib3hcIiB8IFwic21hbGwtY2FwdGlvblwiIHwgXCJzdGF0dXMtYmFyXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgZm9udCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250X1N0eWxlVHlwZSA9IHN0cmluZyB8IEZvbnRfU3lzdGVtS2V5d29yZCB8XHJcbiAgICB7XHJcbiAgICAgICAgc2l6ZTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPjtcclxuICAgICAgICBmYW1pbHk6IEV4dGVuZGVkPHN0cmluZz47XHJcbiAgICAgICAgc3R5bGU/OiBFeHRlbmRlZDxGb250U3R5bGVfU3R5bGVUeXBlPjtcclxuICAgICAgICB2YXJpYW50PzogRXh0ZW5kZWQ8c3RyaW5nPjtcclxuICAgICAgICB3ZWlnaHQ/OiBFeHRlbmRlZDxGb250V2VpZ2h0X1N0eWxlVHlwZT47XHJcbiAgICAgICAgc3RyZXRjaD86IEV4dGVuZGVkPEV4Y2x1ZGU8Rm9udFN0cmV0Y2hfU2luZ2xlLG51bWJlcj4+O1xyXG4gICAgICAgIGxpbmVIZWlnaHQ/OiBFeHRlbmRlZDxDc3NOdW1iZXI+XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1rZXJuaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRLZXJuaW5nX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub3JtYWxcIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1vcHRpY2FsLXNpemluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250T3B0aWNhbFNpemluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zaXplIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTaXplX1N0eWxlVHlwZSA9IFwieHgtc21hbGxcIiB8IFwieC1zbWFsbFwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8XHJcbiAgICBcIngtbGFyZ2VcIiB8IFwieHgtbGFyZ2VcIiB8IFwieHh4LWxhcmdlXCIgfCBcImxhcmdlclwiIHwgXCJzbWFsbGVyXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXN0cmV0Y2ggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFN0cmV0Y2hfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwidWx0cmEtY29uZGVuc2VkXCIgfCBcImV4dHJhLWNvbmRlbnNlZFwiIHwgXCJjb25kZW5zZWRcIiB8XHJcblwic2VtaS1jb25kZW5zZWRcIiB8IFwic2VtaS1leHBhbmRlZFwiIHwgXCJleHBhbmRlZFwiIHwgXCJleHRyYS1leHBhbmRlZFwiIHwgXCJ1bHRyYS1leHBhbmRlZFwiIHwgQ3NzTnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250U3R5bGVfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiaXRhbGljXCIgfCBcIm9ibGlxdWVcIiB8IENzc0FuZ2xlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zeW50aGVzaXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFN5bnRoZXNpc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwid2VpZ2h0XCIgfCBcInN0eWxlXCIgfCBcIndlaWdodCBzdHlsZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC12YXJpYW50LWNhcHMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFZhcmlhbnRDYXBzX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInNtYWxsLWNhcHNcIiB8IFwiYWxsLXNtYWxsLWNhcHNcIiB8XHJcbiAgICBcInBldGl0ZS1jYXBzXCIgfCBcImFsbC1wZXRpdGUtY2Fwc1wiIHwgXCJ1bmljYXNlXCIgfCBcInRpdGxpbmctY2Fwc1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC12YXJpYW50LXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRWYXJpYW50UG9zaXRpb25fU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3ViXCIgfCBcInN1cGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXdlaWdodCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250V2VpZ2h0X1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImJvbGRcIiB8IFwiYm9sZGVyXCIgfCBcImxpZ2h0ZXJcIiB8IENzc051bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdhcCBvciBncmlkLWdhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHYXBfU3R5bGVUeXBlID0gUm93R2FwX1N0eWxlVHlwZSB8IFtSb3dHYXBfU3R5bGVUeXBlLCBDb2x1bW5HYXBfU3R5bGVUeXBlXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIHRlbXBsYXRlIGVsZW1lbnQgZGVmaW5pbmcgdHJhY2sgc2l6ZSBpbiBncmlkIHRlbXBsYXRlICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUcmFja1NpemUgPSBDc3NMZW5ndGggfCBcIm1pbi1jb250ZW50XCIgfCBcIm1heC1jb250ZW50XCIgfCBcImF1dG9cIiB8XHJcbiAgICBJTWluTWF4UHJveHkgfCBJRml0Q29udGVudFByb3h5IHwgSVJlcGVhdFByb3h5O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC1hdXRvLWNvbHVtbnMgYW5kIGdyaWQtYXV0by1yb3dzIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEF1dG9BeGlzX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxHcmlkVHJhY2tTaXplPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtYXV0by1mbG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBdXRvRmxvd19TdHlsZVR5cGUgPSBcInJvd1wiIHwgXCJjb2x1bW5cIiB8IFwiZGVuc2VcIiB8IFwicm93IGRlbnNlXCIgfCBcImNvbHVtbiBkZW5zZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc3BlY2lmeWluZyBlaXRoZXIgbnVtYmVyIG9mIGdyaWQgbGluZXMgb3IgbmFtZSBvZiBncmlkIGxpbmUgb3IgYXJlYSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkTGluZUNvdW50T3JOYW1lID0gQ3NzTnVtYmVyIHwgSUdyaWRBcmVhUnVsZSB8IElHcmlkTGluZVJ1bGUgfCBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC1jb2x1bW4tc3RhcnQvZW5kIGFuZCBncmlkLXJvdy1zdGFydC9lbmQgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBHcmlkTGluZUNvdW50T3JOYW1lIHwgSVNwYW5Qcm94eTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtY29sdW1uIGFuZCBncmlkLXJvdyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBeGlzX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxHcmlkQXhpc1NpZGVfU3R5bGVUeXBlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtYXJlYSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXJlYV9TdHlsZVR5cGUgPSBPbmVPckJveDxHcmlkQXhpc1NpZGVfU3R5bGVUeXBlPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIGEgc2luZ2xlIGdyaWQgYXJlYSBwb3NpdGlvbi4gVGhlIG51bWJlcnMgYXJlIDEtYmFzZWQgaW5kaWNlcyBvZiB0aGUgbGluZXMgaW5cclxuICogdGhlIGZvbGxvd2luZyBzZXF1ZW5jZTogYmxvY2sgc3RhcnQsIGlubGluZSBzdGFydCwgYmxvY2sgZW5kLCBpbmxpbmUgZW5kLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uID0gW0lHcmlkQXJlYVJ1bGUgfCBFeHRlbmRlZDxzdHJpbmc+LFxyXG4gICAgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLXRlbXBsYXRlLWFyZWFzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgT25lT3JNYW55PElRdW90ZWRQcm94eT4gfFxyXG4gICAgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uW107XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBhIHNpbmdsZSB0ZW1wbGF0ZSBlbGVtZW50IGRlZmluaW5nIG5hbWUgb3IgbmFtZXMgZm9yIGEgZ3JpZCBsaW5lIGluIGdyaWQgdGVtcGxhdGUuXHJcbiAqIFRoaXMgaXMgYWx3YXlzIGFuIGFycmF5IC0gZXZlbiBpZiBhIHNpbmdsZSBuYW1lIGlzIGdpdmVuLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRyYWNrTGluZSA9IChJR3JpZExpbmVSdWxlIHwgRXh0ZW5kZWQ8c3RyaW5nPilbXTtcclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSB0cmFjayBlbGVtZW50IG9mIGdyaWQgdGVtcGxhdGUgYXhpcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVHJhY2sgPSBHcmlkVHJhY2tTaXplIHwgR3JpZFRyYWNrTGluZTtcclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLXRlbXBsYXRlLWNvbHVtbnMgYW5kIGdyaWQtdGVtcGxhdGUtcm93cyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlID0gXCJub25lXCIgfCBPbmVPck1hbnk8R3JpZFRyYWNrPiB8IFwic3ViZ3JpZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgaHlwaGVucyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBIeXBoZW5zX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJtYW51YWxcIiB8IFwiYXV0b1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgaW1hZ2UtcmVuZGVyaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEltYWdlUmVuZGVyaW5nX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJjcmlzcC1lZGdlc1wiIHwgXCJwaXhlbGF0ZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGlzb2xhdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBJc29sYXRpb25fU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImlzb2xhdGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBKdXN0aWZ5Q29udGVudF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzcGFjZS1iZXR3ZWVuXCIgfCBcInNwYWNlLWFyb3VuZFwiIHwgXCJzcGFjZS1ldmVubHlcIiB8IFwic3RyZXRjaFwiIHxcclxuICAgIFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8XHJcbiAgICBcInNhZmUgY2VudGVyXCIgfCBcInNhZmUgc3RhcnRcIiB8IFwic2FmZSBlbmRcIiB8IFwic2FmZSBmbGV4LXN0YXJ0XCIgfCBcInNhZmUgZmxleC1lbmRcIiB8IFwic2FmZSBsZWZ0XCIgfCBcInNhZmUgcmlnaHRcIiB8XHJcbiAgICBcInVuc2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIHN0YXJ0XCIgfCBcInVuc2FmZSBlbmRcIiB8IFwidW5zYWZlIGZsZXgtc3RhcnRcIiB8IFwidW5zYWZlIGZsZXgtZW5kXCIgfCBcInVuc2FmZSBsZWZ0XCIgfCBcInVuc2FmZSByaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IganVzdGlmeS1pdGVtcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBKdXN0aWZ5SXRlbXNfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfFxyXG4gICAgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcInNlbGYtc3RhcnRcIiB8IFwic2VsZi1lbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfFxyXG4gICAgXCJzYWZlIGNlbnRlclwiIHwgXCJzYWZlIHN0YXJ0XCIgfCBcInNhZmUgZW5kXCIgfCBcInNhZmUgc2VsZi1zdGFydFwiIHwgXCJzYWZlIHNlbGYtZW5kXCIgfCBcInNhZmUgZmxleC1zdGFydFwiIHwgXCJzYWZlIGZsZXgtZW5kXCIgfCBcInNhZmUgbGVmdFwiIHwgXCJzYWZlIHJpZ2h0XCIgfFxyXG4gICAgXCJ1bnNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBzdGFydFwiIHwgXCJ1bnNhZmUgZW5kXCIgfCBcInVuc2FmZSBzZWxmLXN0YXJ0XCIgfCBcInVuc2FmZSBzZWxmLWVuZFwiIHwgXCJ1bnNhZmUgZmxleC1zdGFydFwiIHwgXCJ1bnNhZmUgZmxleC1lbmRcIiB8IFwidW5zYWZlIGxlZnRcIiB8IFwidW5zYWZlIHJpZ2h0XCIgfFxyXG4gICAgXCJsZWdhY3lcIiB8IFwibGVnYWN5IGxlZnRcIiB8IFwibGVnYWN5IHJpZ2h0XCIgfCBcImxlZ2FjeSBjZW50ZXJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGp1c3RpZnktc2VsZiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBKdXN0aWZ5U2VsZl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHxcclxuICAgIFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJzZWxmLXN0YXJ0XCIgfCBcInNlbGYtZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHxcclxuICAgIFwic2FmZSBjZW50ZXJcIiB8IFwic2FmZSBzdGFydFwiIHwgXCJzYWZlIGVuZFwiIHwgXCJzYWZlIHNlbGYtc3RhcnRcIiB8IFwic2FmZSBzZWxmLWVuZFwiIHwgXCJzYWZlIGZsZXgtc3RhcnRcIiB8IFwic2FmZSBmbGV4LWVuZFwiIHwgXCJzYWZlIGxlZnRcIiB8IFwic2FmZSByaWdodFwiIHxcclxuICAgIFwidW5zYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgc3RhcnRcIiB8IFwidW5zYWZlIGVuZFwiIHwgXCJ1bnNhZmUgc2VsZi1zdGFydFwiIHwgXCJ1bnNhZmUgc2VsZi1lbmRcIiB8IFwidW5zYWZlIGZsZXgtc3RhcnRcIiB8IFwidW5zYWZlIGZsZXgtZW5kXCIgfCBcInVuc2FmZSBsZWZ0XCIgfCBcInVuc2FmZSByaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGV0dGVyLXNwYWNpbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGV0dGVyU3BhY2luZ19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGluZS1icmVhayBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaW5lQnJlYWtfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImxvb3NlXCIgfCBcIm5vcm1hbFwiIHwgXCJzdHJpY3RcIiB8IFwiYW55d2hlcmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpbmUtaGVpZ2h0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpbmVIZWlnaHRfU3R5bGVUeXBlID0gQ3NzTnVtYmVyIHwgc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGlzdC1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaXN0U3R5bGVfU3R5bGVUeXBlID0gTGlzdFN0eWxlVHlwZV9TdHlsZVR5cGUgfCBMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGUgfCBMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGUgfFxyXG4gICAgW0V4dGVuZGVkPExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZT5dIHxcclxuICAgIFtFeHRlbmRlZDxMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4/XSB8XHJcbiAgICBbRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGU+XSB8XHJcbiAgICBbRXh0ZW5kZWQ8TGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaW5lLXN0eWxlLWltYWdlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgSVVybFByb3h5O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGlzdC1zdHlsZS1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGUgPSBcImluc2lkZVwiIHwgXCJvdXRzaWRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaXN0LXN0eWxlLXR5cGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGlzdFN0eWxlVHlwZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiZGlzY1wiIHwgXCJjaXJjbGVcIiB8IFwic3F1YXJlXCIgfCBcImRlY2ltYWxcIiB8IFwiZGVjaW1hbC1sZWFkaW5nLXplcm9cIiB8XHJcbiAgICBcImNqay1kZWNpbWFsXCIgfCBcImNqay1lYXJ0aGx5LWJyYW5jaFwiIHwgXCJjamstaGVhdmVubHktc3RlbVwiIHwgXCJjamstaWRlb2dyYXBoaWNcIiB8XHJcbiAgICBcImxvd2VyLXJvbWFuXCIgfCBcInVwcGVyLXJvbWFuXCIgfCBcImxvd2VyLWdyZWVrXCIgfCBcImxvd2VyLWFscGhhXCIgfCBcImxvd2VyLWxhdGluXCIgfCBcInVwcGVyLWFscGhhXCIgfCBcInVwcGVyLWxhdGluXCIgfFxyXG4gICAgXCJhcmFiaWMtaW5kaWNcIiB8IFwiYXJtZW5pYW5cIiB8IFwiYmVuZ2FsaVwiIHwgXCJjYW1ib2RpYW5cIiB8IFwiZGV2YW5hZ2FyaVwiIHwgXCJnZW9yZ2lhblwiIHwgXCJndWphcmF0aVwiIHwgXCJndXJtdWtoaVwiIHwgXCJoZWJyZXdcIiB8XHJcbiAgICBcImhpcmFnYW5hXCIgfCBcImhpcmFnYW5hLWlyb2hhXCIgfCBcImphcGFuZXNlLWZvcm1hbFwiIHwgXCJqYXBhbmVzZS1pbmZvcm1hbFwiIHwgXCJrYW5uYWRhXCIgfCBcImthdGFrYW5hXCIgfCBcImthdGFrYW5hLWlyb2hhXCIgfFxyXG4gICAgXCJraG1lclwiIHwgXCJrb3JlYW4taGFuZ3VsLWZvcm1hbFwiIHwgXCJrb3JlYW4taGFuamEtZm9ybWFsXCIgfCBcImtvcmVhbi1oYW5qYS1pbmZvcm1hbFwiIHwgXCJsYW9cIiB8IFwibG93ZXItYXJtZW5pYW5cIiB8XHJcbiAgICBcIm1hbGF5YWxhbVwiIHwgXCJtb25nb2xpYW5cIiB8IFwibXlhbm1hclwiIHwgXCJvcml5YVwiIHwgXCJwZXJzaWFuXCIgfCBcInNpbXAtY2hpbmVzZS1mb3JtYWxcIiB8IFwic2ltcC1jaGluZXNlLWluZm9ybWFsXCIgfFxyXG4gICAgXCJ0YW1pbFwiIHwgXCJ0ZWx1Z3VcIiB8IFwidGhhaVwiIHwgXCJ0aWJldGFuXCIgfCBcInRyYWQtY2hpbmVzZS1mb3JtYWxcIiB8IFwidHJhZC1jaGluZXNlLWluZm9ybWFsXCIgfCBcInVwcGVyLWFybWVuaWFuXCIgfFxyXG4gICAgXCJkaXNjbG9zdXJlLW9wZW5cIiB8IFwiZGlzY2xvc3VyZS1jbG9zZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBtYXJrZXItc3RhcnQsIG1hcmtlci1taWQgYW5kIG1hcmtlci1lbmQgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBNYXJrZXJfU3R5bGVUeXBlID0gXCJub25lXCIgfCBJSURSdWxlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG9iamVjdC1maXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2JqZWN0Rml0X1N0eWxlVHlwZSA9IFwiZmlsbFwiIHwgXCJjb250YWluXCIgfCBcImNvdmVyXCIgfCBcIm5vbmVcIiB8IFwic2NhbGUtZG93blwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG9mZnNldCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPZmZzZXRfU3R5bGVUeXBlID0gc3RyaW5nIHwgT2Zmc2V0UGF0aF9TdHlsZVR5cGUgfFxyXG57XHJcbiAgICBhbmNob3I/OiBPZmZzZXRBbmNob3JfU3R5bGVUeXBlLFxyXG4gICAgZGlzdGFuY2U/OiBDc3NMZW5ndGgsXHJcbiAgICBwYXRoPzogT2Zmc2V0UGF0aF9TdHlsZVR5cGUsXHJcbiAgICBwb3NpdGlvbj86IENzc1Bvc2l0aW9uLFxyXG4gICAgcm90YXRlPzogT2Zmc2V0Um90YXRlX1N0eWxlVHlwZSxcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG9mZnNldC1hbmNob3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2Zmc2V0QW5jaG9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzUG9zaXRpb247XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBvZmZzZXQtcGF0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPZmZzZXRQYXRoX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgSVJheVByb3h5IHwgSVVybFByb3h5IHwgQmFzaWNTaGFwZSB8IEdlb21ldHJ5Qm94S2V5d29yZCB8XHJcbiAgICBbR2VvbWV0cnlCb3hLZXl3b3JkLCBCYXNpY1NoYXBlXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvZmZzZXQtcm90YXRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9mZnNldFJvdGF0ZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwicmV2ZXJzZVwiIHwgQ3NzQW5nbGUgfCBbXCJhdXRvXCIgfCBcInJldmVyc2VcIiwgQ3NzQW5nbGVdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LXgveSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlID0gXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiIHwgXCJjbGlwXCIgfCBcInNjcm9sbFwiIHwgXCJhdXRvXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd19TdHlsZVR5cGUgPSBPbmVPclBhaXI8T3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcmZsb3ctYW5jaG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJmbG93QW5jaG9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub25lXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcmZsb3ctd3JhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd1dyYXBfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiYnJlYWstd29yZFwiIHwgXCJhbnl3aGVyZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJzY3JvbGwtYmVoYXZpb3IteC95IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlID0gXCJjb250YWluXCIgfCBcIm5vbmVcIiB8IFwiYXV0b1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyc2Nyb2xsLWJlaGF2aW9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJzY3JvbGxCZWhhdmlvcl9TdHlsZVR5cGUgPSBPbmVPclBhaXI8T3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBhaW50LW9yZGVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBhaW50T3JkZXJfS2V5d29yZCA9IFwiZmlsbFwiIHwgXCJzdHJva2VcIiB8IFwibWFya2Vyc1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwYWludC1vcmRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQYWludE9yZGVyX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBQYWludE9yZGVyX0tleXdvcmQgfFxyXG4gICAgW1BhaW50T3JkZXJfS2V5d29yZCwgUGFpbnRPcmRlcl9LZXl3b3JkPywgUGFpbnRPcmRlcl9LZXl3b3JkP107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGVyc3BlY3RpdmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGVyc3BlY3RpdmVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGVyc3BlY3RpdmUtb3JpZ2luIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBlcnNwZWN0aXZlT3JpZ2luX1N0eWxlVHlwZSA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aCB8XHJcbiAgICBbRXh0ZW5kZWQ8SG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD4sIEV4dGVuZGVkPFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGxhY2UtY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQbGFjZUNvbnRlbnRfU3R5bGVUeXBlID0gQWxpZ25Db250ZW50X1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxBbGlnbkNvbnRlbnRfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8SnVzdGlmeUNvbnRlbnRfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGxhY2UtaXRlbXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGxhY2VJdGVtc19TdHlsZVR5cGUgPSBBbGlnbkl0ZW1zX1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxBbGlnbkl0ZW1zX1N0eWxlVHlwZT4sIEV4dGVuZGVkPEp1c3RpZnlJdGVtc19TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwbGFjZS1zZWxmIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBsYWNlU2VsZl9TdHlsZVR5cGUgPSBBbGlnblNlbGZfU3R5bGVUeXBlIHwgW0V4dGVuZGVkPEFsaWduU2VsZl9TdHlsZVR5cGU+LCBFeHRlbmRlZDxKdXN0aWZ5U2VsZl9TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwb2ludGVyLWV2ZW50cyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQb2ludGVyRXZlbnRzX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub25lXCIgfCBcInZpc2libGVQYWludGVkXCIgfCBcInZpc2libGVGaWxsXCIgfCBcInZpc2libGVTdHJva2VcIiB8IFwidmlzaWJsZVwiIHxcclxuICAgIFwicGFpbnRlZFwiIHwgXCJmaWxsXCIgfCBcInN0cm9rZVwiIHwgXCJhbGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQb3NpdGlvbl9TdHlsZVR5cGUgPSBcInN0YXRpY1wiIHwgXCJyZWxhdGl2ZVwiIHwgXCJhYnNvbHV0ZVwiIHwgXCJzdGlja3lcIiB8IFwiZml4ZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBxdW90ZXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUXVvdGVzX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhdXRvXCIgfCBFeHRlbmRlZDxzdHJpbmc+W107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcmVzaXplIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFJlc2l6ZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYm90aFwiIHwgXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCIgfCBcImJsb2NrXCIgfCBcImlubGluZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igcm90YXRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFJvdGF0ZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFtcInhcIiB8IFwieVwiIHwgXCJ6XCIsIEV4dGVuZGVkPENzc0FuZ2xlPl0gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc0FuZ2xlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciByb3ctZ2FwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFJvd0dhcF9TdHlsZVR5cGUgPSBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2NhbGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2NhbGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBDc3NOdW1iZXIgfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj4/LCBFeHRlbmRlZDxDc3NOdW1iZXI+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsYmFyLWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbGJhckNvbG9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJkYXJrXCIgfCBcImxpZ2h0XCIgfFxyXG4gICAgW0V4dGVuZGVkPENzc0NvbG9yPiwgRXh0ZW5kZWQ8Q3NzQ29sb3I+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGxiYXItd2lkdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsYmFyV2lkdGhfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInRoaW5cIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbC1iZWhhdmlvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxCZWhhdmlvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwic21vb3RoXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsLXNuYXAtYWxpZ24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsU25hcEFsaWduX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxcIm5vbmVcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImNlbnRlclwiPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGwtc25hcC1zdG9wIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbFNuYXBTdG9wX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImFsd2F5c1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbC1zbmFwLXR5cGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsU25hcFR5cGVfU3R5bGVUeXBlID0gXCJub25lXCIgfFxyXG4gICAgW0V4dGVuZGVkPFwieFwiIHwgXCJ5XCIgfCBcImJsb2NrXCIgfCBcImlubGluZVwiIHwgXCJib3RoXCI+LCBFeHRlbmRlZDxcIm1hbmRhdG9yeVwiIHwgXCJwcm94aW1pdHlcIj5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2hhcGUtb3V0c2lkZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTaGFwZU91dHNpZGVfU3R5bGVUeXBlID0gSVVybFByb3h5IHwgQmFzaWNTaGFwZSB8IEdlb21ldHJ5Qm94S2V5d29yZCB8IENzc0ltYWdlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNoYXBlLXJlbmRlcmluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTaGFwZVJlbmRlcmluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwib3B0aW1pemVTcGVlZFwiIHwgXCJjcmlzcEVkZ2VzXCIgfCBcImdlb21ldHJpY1ByZWNpc2lvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRhYmxlLWxheW91dCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUYWJsZUxheW91dF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiZml4ZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWFsaWduIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRBbGlnbl9TdHlsZVR5cGUgPSBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiIHwgXCJqdXN0aWZ5XCIgfCBcIm1hdGNoLXBhcmVudFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtYWxpZ24tbGFzdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0QWxpZ25MYXN0X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIiB8IFwianVzdGlmeVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtYW5jaG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRBbmNob3JfU3R5bGVUeXBlID0gXCJzdGFydFwiIHwgXCJtaWRkbGVcIiB8IFwiZW5kXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1jb21iaW5lLXVwcmlnaHQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dENvbWJpbmVVcHJpZ2h0X1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhbGxcIiB8IFwiZGlnaXRzXCIgfCBudW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uIHN0eWxlIHByb3BlcnR5LiBJZiBhIG51bWJlciBpcyBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgaW50ZXJwcmV0ZWRcclxuICogYXMgY29sb3IgLSBub3QgYXMgdGhpY2tuZXNzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGV4dERlY29yYXRpb25fU3R5bGVUeXBlID0gVGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZSB8IFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlIHxcclxuICAgIENzc0NvbG9yIHwgVGV4dERlY29yYXRpb25UaGlja25lc3NfU3R5bGVUeXBlIHxcclxuICAgIHtcclxuICAgICAgICBsaW5lPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZT4sXHJcbiAgICAgICAgc3R5bGU/OiBFeHRlbmRlZDxUZXh0RGVjb3JhdGlvblN0eWxlX1N0eWxlVHlwZT4sXHJcbiAgICAgICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICAgICAgdGhpY2tuZXNzPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25UaGlja25lc3NfU3R5bGVUeXBlPixcclxuICAgIH07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLWxpbmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJzcGVsbGluZy1lcnJvclwiIHwgXCJncmFtbWFyLWVycm9yXCIgfFxyXG4gICAgT25lT3JNYW55PFwidW5kZXJsaW5lXCIgfCBcIm92ZXJsaW5lXCIgfCBcImxpbmUtdGhyb3VnaFwiPjsgXHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlID0gXCJzb2xpZFwiIHwgXCJkb3VibGVcIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiIHwgXCJ3YXZ5XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uU2tpcElua19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYXV0b1wiIHwgXCJhbGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJmcm9tLWZvbnRcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLy8gLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc19TdHlsZVR5cGUgPSBUZXh0RW1waGFzaXNTdHlsZV9TdHlsZVR5cGUgfCBDc3NDb2xvciB8XHJcbiAgICBbRXh0ZW5kZWQ8VGV4dEVtcGhhc2lzU3R5bGVfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8Q3NzQ29sb3I+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc1Bvc2l0aW9uX1N0eWxlVHlwZSA9IFwib3ZlciBsZWZ0XCIgfCBcIm92ZXIgcmlnaHRcIiB8IFwidW5kZXIgbGVmdFwiIHwgXCJ1bmRlciByaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogU2hhcGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc1NoYXBlID0gXCJkb3RcIiB8IFwiY2lyY2xlXCIgfCBcImRvdWJsZS1jaXJjbGVcIiB8IFwidHJpYW5nbGVcIiB8IFwic2VzYW1lXCIgfCBzdHJpbmc7XHJcblxyXG4vKiogRmlsbCBvcHRpb24gZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc0ZpbGwgPSBcImZpbGxlZFwiIHwgXCJvcGVuXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZW1waGFzaXMtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEVtcGhhc2lzU3R5bGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBUZXh0RW1waGFzaXNGaWxsIHwgVGV4dEVtcGhhc2lzU2hhcGUgfFxyXG4gICAgW0V4dGVuZGVkPFRleHRFbXBoYXNpc0ZpbGw+LCBFeHRlbmRlZDxUZXh0RW1waGFzaXNTaGFwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtaW5kZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRJbmRlbnRfU3R5bGVUeXBlID0gQ3NzTGVuZ3RoIHxcclxuICAgIFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxPbmVPck1hbnk8XCJlYWNoLWxpbmVcIiB8IFwiaGFuZ2luZ1wiIHwgXCJlYWNoLWxpbmUgaGFuZ2luZ1wiPj5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtanVzdGlmeSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0SnVzdGlmeV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiaW50ZXItY2hhcmFjdGVyXCIgfCBcImludGVyLXdvcmRcIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtb3JpZW50YXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dE9yaWVudGF0aW9uX1N0eWxlVHlwZSA9IFwibWl4ZWRcIiB8IFwidXByaWdodFwiIHwgXCJzaWRld2F5c1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtb3ZlcmZsb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dE92ZXJmbG93X1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxcImNsaXBcIiB8IFwiZWxsaXBzaXNcIiB8IFwiZmFkZVwiIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzaW5nbGUgdmFsdWUgb2YgdGhlIHRleHQtc2hhZG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRTaGFkb3dfU2luZ2xlID0gXCJub25lXCIgfCBzdHJpbmcgfFxyXG4gICAge1xyXG4gICAgICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtc2hhZG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRTaGFkb3dfU3R5bGVUeXBlID0gT25lT3JNYW55PFRleHRTaGFkb3dfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LXNpemUtYWRqdXN0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRTaXplQWRqdXN0X1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhdXRvXCIgfCBDc3NQZXJjZW50O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtdHJhbnNmb3JtIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRUcmFuc2Zvcm1fU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImNhcGl0YWxpemVcIiB8IFwidXBwZXJjYXNlXCIgfCBcImxvd2VyY2FzZVwiIHwgXCJmdWxsLXdpZHRoXCIgfCBcImZ1bGwtc2l6ZS1rYW5hXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC11bmRlcmxpbmUtcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dFVuZGVybGluZVBvc2l0aW9uX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJ1bmRlclwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImF1dG8tcG9zXCIgfCBcImFib3ZlXCIgfCBcImJlbG93XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdG91Y2gtYWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRvdWNoQWN0aW9uX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub25lXCIgfCBcIm1hbmlwdWxhdGlvblwiIHxcclxuICAgIFwicGFuLXhcIiB8IFwicGFuLWxlZnRcIiB8IFwicGFuLXJpZ2h0XCIgfCBcInBhbi15XCIgfCBcInBhbi11cFwiIHwgXCJwYW4tZG93blwiIHwgXCJwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4teCBwaW5jaC16b29tXCIgfCBcInBhbi1sZWZ0IHBpbmNoLXpvb21cIiB8IFwicGFuLXJpZ2h0IHBpbmNoLXpvb21cIiB8IFwicGFuLXkgcGluY2gtem9vbVwiIHwgXCJwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4tZG93biBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4teCBwYW4teVwiIHwgXCJwYW4teCBwYW4teSBwaW5jaC16b29tXCIgfCBcInBhbi14IHBhbi11cFwiIHwgXCJwYW4teCBwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4teCBwYW4tZG93blwiIHwgXCJwYW4teCBwYW4tZG93biBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4teSBwYW4tbGVmdFwiIHwgXCJwYW4teSBwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi15IHBhbi1yaWdodFwiIHwgXCJwYW4teSBwYW4tcmlnaHQgcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLWxlZnQgcGFuLXVwXCIgfCBcInBhbi1sZWZ0IHBhbi11cCBwaW5jaC16b29tXCIgfCBcInBhbi1sZWZ0IHBhbi1kb3duXCIgfCBcInBhbi1sZWZ0IHBhbi1kb3duIHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi1yaWdodCBwYW4tdXBcIiB8IFwicGFuLXJpZ2h0IHBhbi11cCBwaW5jaC16b29tXCIgfCBcInBhbi1yaWdodCBwYW4tZG93blwiIHwgXCJwYW4tcmlnaHQgcGFuLWRvd24gcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXVwIHBhbi1sZWZ0XCIgfCBcInBhbi11cCBwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi11cCBwYW4tcmlnaHRcIiB8IFwicGFuLXVwIHBhbi1yaWdodCBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4tZG93biBwYW4tbGVmdFwiIHwgXCJwYW4tZG93biBwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi1kb3duIHBhbi1yaWdodFwiIHwgXCJwYW4tZG93biBwYW4tcmlnaHQgcGluY2gtem9vbVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNmb3JtIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IHN0cmluZyB8IE9uZU9yTWFueTxJVHJhbnNmb3JtUHJveHk+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNmb3JtLWJveCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1Cb3hfU3R5bGVUeXBlID0gXCJjb250ZW50LWJveFwiIHwgXCJib3JkZXItYm94XCIgfCBcImZpbGwtYm94XCIgfCBcInN0cm9rZS1ib3hcIiB8IFwidmlldy1ib3hcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybS1vcmlnaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtT3JpZ2luX1N0eWxlVHlwZSA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aCB8XHJcbiAgICBbRXh0ZW5kZWQ8SG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD4sIEV4dGVuZGVkPFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNmb3JtLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybVN0eWxlX1N0eWxlVHlwZSA9IFwiZmxhdFwiIHwgXCJwcmVzZXJ2ZS0zZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHRyYW5zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvbl9TaW5nbGUgPSBzdHJpbmcgfFxyXG4gICAge1xyXG4gICAgICAgIHByb3BlcnR5PzogRXh0ZW5kZWQ8VHJhbnNpdGlvblByb3BlcnR5X1NpbmdsZT47XHJcbiAgICAgICAgZHVyYXRpb24/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgICAgICBmdW5jPzogRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU2luZ2xlPjtcclxuICAgICAgICBkZWxheT86IEV4dGVuZGVkPENzc1RpbWU+O1xyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25fU3R5bGVUeXBlID0gT25lT3JNYW55PFRyYW5zaXRpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSB0cmFuc2l0aW9uLXByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGUgPSBcIm5vbmVcIiB8IFwiYWxsXCIgfCBrZXlvZiBJQ3NzU3R5bGVzZXQ7XHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNpdGlvbi1wcm9wZXJ0eSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uUHJvcGVydHlfU3R5bGVUeXBlID0gT25lT3JNYW55PFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRyYW5zbGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2xhdGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBDc3NMZW5ndGggfFxyXG4gICAgW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB1bmljb2RlLWJpZGkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVW5pY29kZUJpZGlfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiZW1iZWRcIiB8IFwiaXNvbGF0ZVwiIHwgXCJiaWRpLW92ZXJyaWRlXCIgfCBcImlzb2xhdGUtb3ZlcnJpZGVcIiB8IFwicGxhaW50ZXh0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdXNlci1zZWxlY3Qgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVXNlclNlbGVjdF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidGV4dFwiIHwgXCJub25lXCIgfCBcImNvbnRhaW5cIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdmVydGljYWwtYWxpZ24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVmVydGljYWxBbGlnbl9TdHlsZVR5cGUgPSBcImJhc2VsaW5lXCIgfCBcInN1YlwiIHwgXCJzdXBlclwiIHwgXCJ0ZXh0LXRvcFwiIHwgXCJ0ZXh0LWJvdHRvbVwiIHxcclxuICAgIFwibWlkZGxlXCIgfCBcInRvcFwiIHwgXCJib3R0b21cIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB2aXNpYmlsaXR5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFZpc2liaWxpdHlfU3R5bGVUeXBlID0gXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiIHwgXCJjb2xsYXBzZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHZlY3Rvci1lZmZlY3Qgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVmVjdG9yRWZmZWN0X1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJub24tc2NhbGluZy1zdHJva2VcIiB8IFwibm9uLXNjYWxpbmctc2l6ZVwiIHwgXCJub24tcm90YXRpb25cIiB8IFwiZml4ZWQtcG9zaXRpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB3aGl0ZS1zcGFjZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXaGl0ZVNwYWNlX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInByZVwiIHwgXCJub3dyYXBcIiB8IFwicHJlLXdyYXBcIiB8IFwicHJlLWxpbmVcIiB8IFwiYnJlYWstc3BhY2VzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB3aWxsLWNoYW5nZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXaWxsQ2hhbmdlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgT25lT3JNYW55PFwic2Nyb2xsLXBvc2l0aW9uXCIgfCBcImNvbnRlbnRzXCIgfCBFeGNsdWRlPGtleW9mIElDc3NTdHlsZXNldCxcIndpbGxDaGFuZ2VcIj4+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHdvcmQtYnJlYWsgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV29yZEJyZWFrX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImJyZWFrLWFsbFwiIHwgXCJrZWVwLWFsbFwiIHwgXCJicmVhay13b3JkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgd29yZC1zcGFjaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdvcmRTcGFjaW5nX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgd3JpdGluZy1tb2RlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdyaXRpbmdNb2RlX1N0eWxlVHlwZSA9IFwiaG9yaXpvbnRhbC10YlwiIHwgXCJ2ZXJ0aWNhbC1ybFwiIHwgXCJ2ZXJ0aWNhbC1sclwiIHwgXCJzaWRld2F5cy1ybFwiIHwgXCJzaWRld2F5cy1sclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHotaW5kZXggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgWkluZGV4X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzTnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHpvb20gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgWm9vbV9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJyZXNldFwiIHwgQ3NzUGVyY2VudDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHN0eWxlIHByb3BlcnRpZXMgZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHNwZWNpYWwgdHlwZSBkZWZpbmVkLiAqL1xyXG5leHBvcnQgdHlwZSBEZWZhdWx0U3R5bGVUeXBlID0gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJveHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSB0aGUgQ1NTIGA8ZmlsdGVyPmAgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmlsdGVyUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiZmlsdGVyXCI+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGJhc2ljLXNoYXBlPmAgZnVuY3Rpb25zXHJcbiAqIGV4Y2VwdCB0aGUgYHBhdGgoKWAgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNpY1NoYXBlUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiYmFzaWMtc2hhcGVcIj4ge307XHJcblxyXG4vKipcclxuICogVGhlIEJhc2ljU2hhcGVUeXBlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGJhc2ljLXNoYXBlPmAgZnVuY3Rpb25zIGluY2x1ZGluZ1xyXG4gKiB0aGUgYHBhdGgoKWAgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCYXNpY1NoYXBlID0gSUJhc2ljU2hhcGVQcm94eSB8IElQYXRoQnVpbGRlcjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJheVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgcmF5KClgIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJheVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInJheVwiPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGJhc2ljLXNoYXBlPmAgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNmb3JtUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwidHJhbnNmb3JtXCI+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWluTWF4UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBtaW5tYXgoKSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWluTWF4UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwibWlubWF4XCI+IHt9XHJcblxyXG4vKipcclxuICogVGhlIElGaXRDb250ZW50UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBmaXQtY29udGVudCgpIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGaXRDb250ZW50UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiZml0LWNvbnRlbnRcIj4ge31cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJlcGVhdFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgcmVwZWF0KCkgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlcGVhdFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInJlcGVhdFwiPiB7fVxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3BhblByb3h5IGZ1bmN0aW9uIHByb2R1Y2VzIHRoZSBzcGFuIGV4cHJlc3Npb24gZm9yIGdyaWQgbGF5b3V0c1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3BhblByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInNwYW5cIj4ge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGF0aEJ1aWxkZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIG9iamVjdCB0aGF0IGFjY3VtdWxhdGVzIHBhdGggY29tbWFuZHMgdGhhdCBhcmUgdGhlblxyXG4gKiBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgcGFyYW1ldGVyIG9mIHRoZSBDU1MgYHBhdGgoKWAgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXRoQnVpbGRlclxyXG57XHJcbiAgICAvLyBNb3ZlLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuICAgIE0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIE1vdmUtdG8gY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG4gICAgbSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gTGluZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0TCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gTGluZS10byBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcbiAgICBsKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBIb3Jpem9udGFsIGxpbmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEhvcml6b250YWwgbGluZS10byBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcbiAgICBoKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBWZXJ0aWNhbCBsaW5lLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRWKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBWZXJ0aWNhbCBsaW5lLXRvIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuICAgIHYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0QyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gQ3ViaWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHRjKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBTbW9vdGggY3ViaWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRTKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gU21vb3RoIGN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0cyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFF1YWRyYXRpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdFEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBRdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHRxKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gU21vb3RoIHF1YWRyYXRpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdFQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFNtb290aCBxdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHR0KCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBFbGxpcHRpY2FsIGFyYyBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0QSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBFbGxpcHRpY2FsIGFyYyBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0YSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBDbG9zZS1wYXRoIGNvbW1hbmQuXHJcbiAgICB6KCk6IElQYXRoQnVpbGRlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3R5bGVzZXQgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSByZXByZXNlbnRpbmcgYSBjb2xsZWN0aW9uIG9mIGJ1aWx0LWluIHN0eWxlIHByb3BlcnRpZXMgYW5kIHRoZWlyIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1N0eWxlc2V0XHJcbntcclxuICAgIGFsbD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBhbGlnbkNvbnRlbnQ/OiBBbGlnbkNvbnRlbnRfU3R5bGVUeXBlO1xyXG4gICAgYWxpZ25JdGVtcz86IEFsaWduSXRlbXNfU3R5bGVUeXBlO1xyXG4gICAgYWxpZ25TZWxmPzogQWxpZ25TZWxmX1N0eWxlVHlwZTtcclxuICAgIGFsaWdubWVudEJhc2VsaW5lPzogQWxpZ25tZW50QmFzZWxpbmVfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uPzogQW5pbWF0aW9uX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkRlbGF5PzogQW5pbWF0aW9uRGVsYXlfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uRGlyZWN0aW9uPzogQW5pbWF0aW9uRGlyZWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogQW5pbWF0aW9uRHVyYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uRmlsbE1vZGU/OiBBbmltYXRpb25GaWxsTW9kZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudD86IEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbk5hbWU/OiBBbmltYXRpb25OYW1lX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZT86IEFuaW1hdGlvblBsYXlTdGF0ZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbj86IEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZTtcclxuXHJcbiAgICBiYWNrZHJvcEZpbHRlcj86IEZpbHRlcl9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZmFjZVZpc2liaWxpdHk/OiBCYWNrZmFjZVZpc2liaWxpdHlNb2RlX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmQ/OiBCYWNrZ3JvdW5kX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50PzogQmFja2dyb3VuZEF0dGFjaG1lbnRfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZT86IEJhY2tncm91bmRCbGVuZE1vZGVfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZENsaXA/OiBCYWNrZ3JvdW5kQ2xpcF9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJhY2tncm91bmRJbWFnZT86IEJhY2tncm91bmRJbWFnZV9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luPzogQmFja2dyb3VuZE9yaWdpbl9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24/OiBCYWNrZ3JvdW5kUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRSZXBlYXQ/OiBCYWNrZ3JvdW5kUmVwZWF0X1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRSZXBlYXRYPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRSZXBlYXRZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRTaXplPzogQmFja2dyb3VuZFNpemVfU3R5bGVUeXBlO1xyXG4gICAgYmFzZWxpbmVTaGlmdD86IEJhc2VsaW5lU2hpZnRfU3R5bGVUeXBlO1xyXG4gICAgYmxvY2tTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgYm9yZGVyPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJsb2NrRW5kPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlckJsb2NrRW5kU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckJsb2NrU3RhcnQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQmxvY2tTdGFydENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyQmxvY2tTdGFydFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyQm90dG9tPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBDc3NSYWRpdXM7XHJcbiAgICBib3JkZXJCb3R0b21TdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJCb3R0b21XaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckNvbGxhcHNlPzogQm9yZGVyQ29sYXBzZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJDb2xvcj86IEJvcmRlckNvbG9yX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlPzogQm9yZGVySW1hZ2VfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VPdXRzZXQ/OiBCb3JkZXJJbWFnZU91dHNldF9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVJlcGVhdD86IEJvcmRlckltYWdlUmVwZWF0X1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlU2xpY2U/OiBCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlU291cmNlPzogQm9yZGVySW1hZ2VTb3VyY2VfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VXaWR0aD86IEJvcmRlckltYWdlV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW5saW5lRW5kPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJJbmxpbmVFbmRTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJJbmxpbmVFbmRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckxlZnQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyTGVmdENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJMZWZ0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyTGVmdFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyUmFkaXVzPzogQm9yZGVyUmFkaXVzX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJpZ2h0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlclJpZ2h0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyUmlnaHRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlclNwYWNpbmc/OiBCb3JkZXJTcGFjaW5nX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclN0eWxlPzogQm9yZGVyU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBDc3NSYWRpdXM7XHJcbiAgICBib3JkZXJUb3BTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJUb3BXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlcldpZHRoPzogQm9yZGVyV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgYm94U2hhZG93PzogQm94U2hhZG93X1N0eWxlVHlwZTtcclxuICAgIGJveFNpemluZz86IEJveFNpemluZ19TdHlsZVR5cGU7XHJcbiAgICBicmVha0FmdGVyPzogQnJlYWtBZnRlcl9TdHlsZVR5cGU7XHJcbiAgICBicmVha0JlZm9yZT86IEJyZWFrQmVmb3JlX1N0eWxlVHlwZTtcclxuICAgIGJyZWFrSW5zaWRlPzogQnJlYWtJbnNpZGVfU3R5bGVUeXBlO1xyXG4gICAgYnVmZmVyZWRSZW5kZXJpbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG5cclxuICAgIGNhcHRpb25TaWRlPzogQ2FwdGlvblNpZGVfU3R5bGVUeXBlO1xyXG4gICAgY2FyZXRDb2xvcj86IENhcmV0Q29sb3JfU3R5bGVUeXBlO1xyXG4gICAgY2xlYXI/OiBDbGVhcl9TdHlsZVR5cGU7XHJcbiAgICBjbGlwPzogQ2xpcF9TdHlsZVR5cGU7XHJcbiAgICBjbGlwUGF0aD86IENsaXBQYXRoX1N0eWxlVHlwZTtcclxuICAgIGNsaXBSdWxlPzogQ2xpcFJ1bGVfU3R5bGVUeXBlO1xyXG4gICAgY29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbj86IENvbG9ySW50ZXJwb2xhdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPzogQ29sb3JJbnRlcnBvbGF0aW9uX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbkNvdW50PzogQ29sdW1uQ291bnRfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uRmlsbD86IENvbHVtbkZpbGxfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uR2FwPzogQ29sdW1uR2FwX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGU/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uUnVsZUNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBjb2x1bW5SdWxlU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgY29sdW1uUnVsZVdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgY29sdW1uU3Bhbj86IENvbHVtblNwYW5fU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uV2lkdGg/OiBDc3NMZW5ndGg7XHJcbiAgICBjb2x1bW5zPzogQ29sdW1uc19TdHlsZVR5cGU7XHJcbiAgICBjb250YWluPzogQ29udGFpbl9TdHlsZVR5cGU7XHJcbiAgICBjb250ZW50PzogQ29udGVudF9TdHlsZVR5cGU7XHJcbiAgICBjb3VudGVySW5jcmVtZW50PzogQ291bnRlcl9TdHlsZVR5cGU7XHJcbiAgICBjb3VudGVyUmVzZXQ/OiBDb3VudGVyX1N0eWxlVHlwZTtcclxuICAgIGNvdW50ZXJTZXQ/OiBDb3VudGVyX1N0eWxlVHlwZTtcclxuICAgIGN1cnNvcj86IEN1cnNvcl9TdHlsZVR5cGU7XHJcblxyXG4gICAgZGlyZWN0aW9uPzogRGlyZWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIGRpc3BsYXk/OiBEaXNwbGF5X1N0eWxlVHlwZTtcclxuICAgIGRvbWluYW50QmFzZWxpbmU/OiBEb21pbmFudEJhc2VsaW5lX1N0eWxlVHlwZTtcclxuXHJcbiAgICBlbXB0eUNlbGxzPzogRW1wdHlDZWxsc19TdHlsZVR5cGU7XHJcblxyXG4gICAgZmlsbD86IENzc0NvbG9yO1xyXG4gICAgZmlsbE9wYWNpdHk/OiBDc3NQZXJjZW50O1xyXG4gICAgZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGU7XHJcbiAgICBmaWx0ZXI/OiBGaWx0ZXJfU3R5bGVUeXBlO1xyXG4gICAgZmxleD86IEZsZXhfU3R5bGVUeXBlO1xyXG4gICAgZmxleEJhc2lzPzogRmxleEJhc2lzX1N0eWxlVHlwZTtcclxuICAgIGZsZXhEaXJlY3Rpb24/OiBGbGV4RGlyZWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIGZsZXhGbG93PzogRmxleEZsb3dfU3R5bGVUeXBlO1xyXG4gICAgZmxleEdyb3c/OiBDc3NOdW1iZXI7XHJcbiAgICBmbGV4U2hyaW5rPzogQ3NzTnVtYmVyO1xyXG4gICAgZmxleFdyYXA/OiBGbGV4V3JhcF9TdHlsZVR5cGU7XHJcbiAgICBmbG9hdD86IEZsb2F0X1N0eWxlVHlwZTtcclxuICAgIGZsb29kQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGZsb29kT3BhY2l0eT86IENzc1BlcmNlbnQ7XHJcbiAgICBmb250PzogRm9udF9TdHlsZVR5cGU7XHJcbiAgICBmb250RmFtaWx5PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udEtlcm5pbmc/OiBGb250S2VybmluZ19TdHlsZVR5cGU7XHJcbiAgICBmb250T3B0aWNhbFNpemluZz86IEZvbnRPcHRpY2FsU2l6aW5nX1N0eWxlVHlwZTtcclxuICAgIGZvbnRTaXplPzogRm9udFNpemVfU3R5bGVUeXBlO1xyXG4gICAgZm9udFNpemVBZGp1c3Q/OiBDc3NOdW1iZXI7XHJcbiAgICBmb250U3RyZXRjaD86IEZvbnRTdHJldGNoX1N0eWxlVHlwZTtcclxuICAgIGZvbnRTdHlsZT86IEZvbnRTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBmb250U3ludGhlc2lzPzogRm9udFN5bnRoZXNpc19TdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudENhcHM/OiBGb250VmFyaWFudENhcHNfU3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnRFYXN0QXNpYW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnRMaWdhdHVyZXM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnROdW1lcmljPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50UG9zaXRpb24/OiBGb250VmFyaWFudFBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYXRpb25TZXR0aW5ncz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250V2VpZ2h0PzogRm9udFdlaWdodF9TdHlsZVR5cGU7XHJcblxyXG4gICAgZ2FwPzogR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZ3JpZEFyZWE/OiBHcmlkQXJlYV9TdHlsZVR5cGU7XHJcbiAgICBncmlkQXV0b0NvbHVtbnM/OiBHcmlkQXV0b0F4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9GbG93PzogR3JpZEF1dG9GbG93X1N0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvUm93cz86IEdyaWRBdXRvQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uPzogR3JpZEF4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbkVuZD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uR2FwPzogQ29sdW1uR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW5TdGFydD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkR2FwPzogR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3c/OiBHcmlkQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkUm93RW5kPzogR3JpZEF4aXNTaWRlX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dHYXA/OiBSb3dHYXBfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvd1N0YXJ0PzogR3JpZEF4aXNTaWRlX1N0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGVBcmVhcz86IEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM/OiBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZVJvd3M/OiBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZTtcclxuXHJcbiAgICBoZWlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBoeXBoZW5zPzogSHlwaGVuc19TdHlsZVR5cGU7XHJcblxyXG4gICAgaW1hZ2VSZW5kZXJpbmc/OiBJbWFnZVJlbmRlcmluZ19TdHlsZVR5cGU7XHJcbiAgICBpbmxpbmVTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgaXNvbGF0aW9uPzogSXNvbGF0aW9uX1N0eWxlVHlwZTtcclxuXHJcbiAgICBqdXN0aWZ5Q29udGVudD86IEp1c3RpZnlDb250ZW50X1N0eWxlVHlwZTtcclxuICAgIGp1c3RpZnlJdGVtcz86IEp1c3RpZnlJdGVtc19TdHlsZVR5cGU7XHJcbiAgICBqdXN0aWZ5U2VsZj86IEp1c3RpZnlTZWxmX1N0eWxlVHlwZTtcclxuXHJcbiAgICBsZWZ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbGV0dGVyU3BhY2luZz86IExldHRlclNwYWNpbmdfU3R5bGVUeXBlO1xyXG4gICAgbGlnaHRpbmdDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgbGluZUJyZWFrPzogTGluZUJyZWFrX1N0eWxlVHlwZTtcclxuICAgIGxpbmVIZWlnaHQ/OiBMaW5lSGVpZ2h0X1N0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZT86IExpc3RTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGVJbWFnZT86IExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZVBvc2l0aW9uPzogTGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgbGlzdFN0eWxlVHlwZT86IExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIG1hcmdpbj86IENzc0xlbmd0aEJveDtcclxuICAgIG1hcmdpbkJsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbkJvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbklubGluZUVuZD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbklubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luTGVmdD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpblJpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFya2VyPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hcmtlckVuZD86IE1hcmtlcl9TdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJNaWQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFya2VyU3RhcnQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFzaz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrQ29tcG9zaXRlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tJbWFnZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrUG9zaXRpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1JlcGVhdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrU2l6ZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrVHlwZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXhCbG9ja1NpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXhIZWlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXhJbmxpbmVTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWF4V2lkdGg/OiBDc3NMZW5ndGg7XHJcbiAgICBtaW5CbG9ja1NpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBtaW5IZWlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtaW5JbmxpbmVTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluV2lkdGg/OiBDc3NMZW5ndGg7XHJcblxyXG4gICAgb2JqZWN0Rml0PzogT2JqZWN0Rml0X1N0eWxlVHlwZTtcclxuICAgIG9iamVjdFBvc2l0aW9uPzogQ3NzUG9zaXRpb247XHJcbiAgICBvZmZzZXQ/OiBPZmZzZXRfU3R5bGVUeXBlO1xyXG4gICAgb2Zmc2V0QW5jaG9yPzogT2Zmc2V0QW5jaG9yX1N0eWxlVHlwZVxyXG4gICAgb2Zmc2V0RGlzdGFuY2U/OiBDc3NMZW5ndGg7XHJcbiAgICBvZmZzZXRQYXRoPzogT2Zmc2V0UGF0aF9TdHlsZVR5cGU7XHJcbiAgICBvZmZzZXRQb3NpdGlvbj86IENzc1Bvc2l0aW9uO1xyXG4gICAgb2Zmc2V0Um90YXRlPzogT2Zmc2V0Um90YXRlX1N0eWxlVHlwZTtcclxuICAgIG9wYWNpdHk/OiBDc3NQZXJjZW50O1xyXG4gICAgb3JkZXI/OiBDc3NOdW1iZXI7XHJcbiAgICBvcnBoYW5zPzogQ3NzTnVtYmVyO1xyXG4gICAgb3V0bGluZT86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBvdXRsaW5lQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIG91dGxpbmVPZmZzZXQ/OiBDc3NMZW5ndGg7XHJcbiAgICBvdXRsaW5lU3R5bGU/OiBCb3JkZXJTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBvdXRsaW5lV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBvdmVyZmxvdz86IE92ZXJmbG93X1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93QW5jaG9yPzogT3ZlcmZsb3dBbmNob3JfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dCbG9jaz86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd0lubGluZT86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd1dyYXA/OiBPdmVyZmxvd1dyYXBfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dYPzogT3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93WT86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3I/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yQmxvY2s/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvcklubGluZT86IE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yWD86IE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yWT86IE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIHBhZGRpbmc/OiBDc3NMZW5ndGhCb3g7XHJcbiAgICBwYWRkaW5nQmxvY2tFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdCb3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nSW5saW5lRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0xlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nUmlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFpbnRPcmRlcj86IFBhaW50T3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgcGFnZUJyZWFrQWZ0ZXI/OiBCcmVha0FmdGVyX1N0eWxlVHlwZTtcclxuICAgIHBhZ2VCcmVha0JlZm9yZT86IEJyZWFrQmVmb3JlX1N0eWxlVHlwZTtcclxuICAgIHBhZ2VCcmVha0luc2lkZT86IEJyZWFrSW5zaWRlX1N0eWxlVHlwZTtcclxuICAgIHBlcnNwZWN0aXZlPzogUGVyc3BlY3RpdmVfU3R5bGVUeXBlO1xyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW4/OiBQZXJzcGVjdGl2ZU9yaWdpbl9TdHlsZVR5cGU7XHJcbiAgICBwbGFjZUNvbnRlbnQ/OiBQbGFjZUNvbnRlbnRfU3R5bGVUeXBlO1xyXG4gICAgcGxhY2VJdGVtcz86IFBsYWNlSXRlbXNfU3R5bGVUeXBlO1xyXG4gICAgcGxhY2VTZWxmPzogUGxhY2VTZWxmX1N0eWxlVHlwZTtcclxuICAgIHBvaW50ZXJFdmVudHM/OiBQb2ludGVyRXZlbnRzX1N0eWxlVHlwZTtcclxuICAgIHBvc2l0aW9uPzogUG9zaXRpb25fU3R5bGVUeXBlO1xyXG5cclxuICAgIHF1b3Rlcz86IFF1b3Rlc19TdHlsZVR5cGU7XHJcblxyXG4gICAgcmVzaXplPzogUmVzaXplX1N0eWxlVHlwZTtcclxuICAgIHJpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcm90YXRlPzogUm90YXRlX1N0eWxlVHlwZTtcclxuICAgIHJvd0dhcD86IFJvd0dhcF9TdHlsZVR5cGU7XHJcbiAgICBydWJ5QWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgcnVieU92ZXJoYW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHJ1YnlQb3NpdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcblxyXG4gICAgc2NhbGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsYmFyQ29sb3I/OiBTY3JvbGxiYXJDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxiYXJXaWR0aD86IFNjcm9sbGJhcldpZHRoX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbEJlaGF2aW9yPzogU2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsTWFyZ2luPzogQ3NzTGVuZ3RoQm94O1xyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2s/OiBDc3NMZW5ndGhQYWlyO1xyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lPzogQ3NzTGVuZ3RoUGFpcjtcclxuICAgIHNjcm9sbE1hcmdpbklubGluZUVuZD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbklubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpblJpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZz86IENzc0xlbmd0aEJveDtcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9jaz86IENzc0xlbmd0aFBhaXI7XHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdCb3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lPzogQ3NzTGVuZ3RoUGFpcjtcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nTGVmdD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdSaWdodD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxTbmFwQWxpZ24/OiBTY3JvbGxTbmFwQWxpZ25fU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsU25hcFN0b3A/OiBTY3JvbGxTbmFwU3RvcF9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxTbmFwVHlwZT86IFNjcm9sbFNuYXBUeXBlX1N0eWxlVHlwZTtcclxuICAgIHNoYXBlSW1hZ2VUaHJlc2hvbGQ/OiBDc3NOdW1iZXI7XHJcbiAgICBzaGFwZU1hcmdpbj86IENzc0xlbmd0aDtcclxuICAgIHNoYXBlT3V0c2lkZT86IFNoYXBlT3V0c2lkZV9TdHlsZVR5cGU7XHJcbiAgICBzaGFwZVJlbmRlcmluZz86IFNoYXBlUmVuZGVyaW5nX1N0eWxlVHlwZTtcclxuICAgIHN0b3BDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgc3RvcE9wYWNpdHk/OiBDc3NOdW1iZXI7XHJcbiAgICBzdHJva2U/OiBDc3NDb2xvcjtcclxuICAgIHN0cm9rZURhc2hhcnJheT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VEYXNob2Zmc2V0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZUxpbmVjYXA/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlTGluZWpvaW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VPcGFjaXR5PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZVdpZHRoPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuXHJcbiAgICB0YWJTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgdGFibGVMYXlvdXQ/OiBUYWJsZUxheW91dF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0QWxpZ24/OiBUZXh0QWxpZ25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dEFsaWduTGFzdD86IFRleHRBbGlnbkxhc3RfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEFuY2hvcj86IFRleHRBbmNob3JfU3R5bGVUeXBlO1xyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0PzogVGV4dENvbWJpbmVVcHJpZ2h0X1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uPzogVGV4dERlY29yYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25Db2xvcj86IENzc0NvbG9yO1xyXG4gICAgdGV4dERlY29yYXRpb25MaW5lPzogVGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uU2tpcEluaz86IFRleHREZWNvcmF0aW9uU2tpcElua19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlPzogVGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcz86IFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZTtcclxuICAgIHRleHRFbXBoYXNpcz86IFRleHRFbXBoYXNpc19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgdGV4dEVtcGhhc2lzUG9zaXRpb24/OiBUZXh0RW1waGFzaXNQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RW1waGFzaXNTdHlsZT86IFRleHRFbXBoYXNpc1N0eWxlX1N0eWxlVHlwZTtcclxuICAgIHRleHRJbmRlbnQ/OiBUZXh0SW5kZW50X1N0eWxlVHlwZTtcclxuICAgIHRleHRKdXN0aWZ5PzogVGV4dEp1c3RpZnlfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEthc2hpZGE/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgdGV4dEthc2hpZGFTcGFjZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICB0ZXh0T3JpZW50YXRpb24/OiBUZXh0T3JpZW50YXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dE92ZXJmbG93PzogVGV4dE92ZXJmbG93X1N0eWxlVHlwZTtcclxuICAgIHRleHRTaGFkb3c/OiBUZXh0U2hhZG93X1N0eWxlVHlwZTtcclxuICAgIHRleHRTaXplQWRqdXN0PzogVGV4dFNpemVBZGp1c3RfU3R5bGVUeXBlO1xyXG4gICAgdGV4dFRyYW5zZm9ybT86IFRleHRUcmFuc2Zvcm1fU3R5bGVUeXBlO1xyXG4gICAgdGV4dFVuZGVybGluZVBvc2l0aW9uPzogVGV4dFVuZGVybGluZVBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRvcD86IENzc0xlbmd0aDtcclxuICAgIHRvdWNoQWN0aW9uPzogVG91Y2hBY3Rpb25fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNmb3JtPzogVHJhbnNmb3JtX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zZm9ybUJveD86IFRyYW5zZm9ybUJveF9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2Zvcm1PcmlnaW4/OiBUcmFuc2Zvcm1PcmlnaW5fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNmb3JtU3R5bGU/OiBUcmFuc2Zvcm1TdHlsZV9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2l0aW9uPzogVHJhbnNpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2l0aW9uRGVsYXk/OiBPbmVPck1hbnk8Q3NzVGltZT47XHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24/OiBPbmVPck1hbnk8Q3NzVGltZT47XHJcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk/OiBUcmFuc2l0aW9uUHJvcGVydHlfU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uPzogVHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zbGF0ZT86IFRyYW5zbGF0ZV9TdHlsZVR5cGU7XHJcblxyXG4gICAgdW5pY29kZUJpZGk/OiBVbmljb2RlQmlkaV9TdHlsZVR5cGU7XHJcbiAgICB1c2VyU2VsZWN0PzogVXNlclNlbGVjdF9TdHlsZVR5cGU7XHJcblxyXG4gICAgdmVydGljYWxBbGlnbj86IFZlcnRpY2FsQWxpZ25fU3R5bGVUeXBlO1xyXG4gICAgdmlzaWJpbGl0eT86IFZpc2liaWxpdHlfU3R5bGVUeXBlO1xyXG4gICAgdmVjdG9yRWZmZWN0PzogVmVjdG9yRWZmZWN0X1N0eWxlVHlwZTtcclxuXHJcbiAgICB3aGl0ZVNwYWNlPzogV2hpdGVTcGFjZV9TdHlsZVR5cGU7XHJcbiAgICB3aWRvd3M/OiBDc3NOdW1iZXI7XHJcbiAgICB3aWR0aD86IENzc0xlbmd0aDtcclxuICAgIHdpbGxDaGFuZ2U/OiBXaWxsQ2hhbmdlX1N0eWxlVHlwZTtcclxuICAgIHdvcmRCcmVhaz86IFdvcmRCcmVha19TdHlsZVR5cGU7XHJcbiAgICB3b3JkU3BhY2luZz86IFdvcmRTcGFjaW5nX1N0eWxlVHlwZTtcclxuICAgIHdyaXRpbmdNb2RlPzogV3JpdGluZ01vZGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIHpJbmRleD86IFpJbmRleF9TdHlsZVR5cGU7XHJcbiAgICB6b29tPzogWm9vbV9TdHlsZVR5cGU7XHJcblxyXG4gICAgLy8gd2Via2l0Qm9yZGVySW1hZ2U/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Qm94RGlyZWN0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdEJveE9yaWVudD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5CcmVha0FmdGVyPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkJyZWFrQmVmb3JlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkJyZWFrSW5zaWRlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkNvdW50PzogQ29sdW1uQ291bnRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5HYXA/OiBTaW5nbGVHYXBTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5SdWxlPzogQ29sdW1uUnVsZVN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtblJ1bGVDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uUnVsZVN0eWxlPzogQ29sdW1uUnVsZVN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtblJ1bGVXaWR0aD86IEJvcmRlckxlbmd0aFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtblNwYW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uV2lkdGg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1ucz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRMaW5lQ2xhbXA/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0VXNlck1vZGlmeT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRVc2VyU2VsZWN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdFdyaXRpbmdNb2RlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuXHJcbiAgICAvLyBtc0NvbnRlbnRab29tQ2hhaW5pbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbUxpbWl0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21MaW1pdE1heD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tTGltaXRNaW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbVNuYXA/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbVNuYXBQb2ludHM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbVNuYXBUeXBlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21pbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNGbG93RnJvbT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0Zsb3dJbnRvPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zRm9udEZlYXR1cmVTZXR0aW5ncz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRDb2x1bW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1uQWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1uU3Bhbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRDb2x1bW5zPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZFJvdz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3dBbGlnbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3dTcGFuPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZFJvd3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIaWdoQ29udHJhc3RBZGp1c3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIeXBoZW5hdGVMaW1pdENoYXJzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSHlwaGVuYXRlTGltaXRMaW5lcz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0h5cGhlbmF0ZUxpbWl0Wm9uZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0h5cGhlbnM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNJbWVBbGlnbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc092ZXJmbG93U3R5bGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxDaGFpbmluZz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRYTWF4PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRYTWluPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRZTWF4PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRZTWluPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsUmFpbHM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwUG9pbnRzWD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBQb2ludHNZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFR5cGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwWD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsVHJhbnNsYXRpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNUZXh0Q29tYmluZUhvcml6b250YWw/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNUZXh0U2l6ZUFkanVzdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1RvdWNoQWN0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVG91Y2hTZWxlY3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNVc2VyU2VsZWN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zV3JhcEZsb3c/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNXcmFwTWFyZ2luPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zV3JhcFRocm91Z2g/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3RyaW5nU3R5bGVzZXQgdHlwZSBtYXBzIENTUyBwcm9wZXJ0aWVzIGluY2x1ZGluZyBjdXN0b20gcHJvcGVydGllcyB0byB0aGUgc3RyaW5nIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN0cmluZ1N0eWxlc2V0ID0geyBbSzogc3RyaW5nXTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRTdHlsZXNldCB0eXBlIG1hcHMgYWxsIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIFtbSUNzc1N0eWxlc2V0XV0gaW50ZXJmYWNlIHRvIHRoZVxyXG4gKiBcImV4dGVuZGVkXCIgdmVyc2lvbnMgb2YgdGhlaXIgdHlwZXMuIFRoZXNlIGV4dGVuZGVkIHR5cGVzIGFyZSBkZWZpbmVkIGJ5IGFkZGluZyBiYXNpYyBrZXl3b3Jkc1xyXG4gKiAoZS5nLiBcInVuc2V0XCIsIFwiaW5pdGlhbFwiLCBldGMuKSBhcyB3ZWxsIGFzIFtbU3RyaW5nUHJveHldXSBhbmQgW1tJQ3VzdG9tVmFyXV0gdG8gdGhlIHR5cGUgdGhhdFxyXG4gKiBpcyBkZWZpbmVkIGluIHRoZSBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRTdHlsZXNldCA9IHsgW0sgaW4ga2V5b2YgSUNzc1N0eWxlc2V0XT86IEV4dGVuZGVkUHJvcDxJQ3NzU3R5bGVzZXRbS10+IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzVmFyVGVtcGxhdGVzIGludGVyZmFjZSBtYXBzIHRlbXBsYXRlIG5hbWVzIHRvIHRoZSB0eXBlcywgd2hpY2ggY2FuIGJlIHVzZWQgZm9yXHJcbiAqIGRlZmluaW5nIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoYS5rLmEuIHZhcmlhYmxlcykuIE5vcm1hbGx5LCB2YXJpYWJsZXMgYXJlIGRlZmluZWQgdXNpbmcgdGhlXHJcbiAqIG5hbWVzIG9mIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB0eXBlIGlzIGRldGVybWluZWQgYnkgdGhlIHR5cGUgb2YgdGhpcyBwcm9wZXJ0eSBpbiB0aGVcclxuICogSUNzc1N0eWxlc2V0IGludGVyZmFjZS4gU29tZXRpbWVzLCBob3dldmVyLCB0aGVyZSBpcyBhIG5lZWQgdG8gZGVmaW5lIHZhcmlhYmxlcyBvZiBzb21lIG90aGVyXHJcbiAqIHR5cGVzLCBmb3Igd2hpY2ggdGhlcmUgaXMgbm8gc3VpdGFibGUgc3R5bGUgcHJvcGVydHkuIFRoZSBJQ3NzVmFyVGVtcGxhdGVzIGludGVyZmFjZSBwcm92aWRlc1xyXG4gKiBtYW55IGJhc2ljIHR5cGVzIGFuZCBpdCBjYW4gYWxzbyBiZSBleHRlbmRlZCB1c2luZyB0aGUgVHlwZVNjcmlwdCdzIG1vZHVsZSBhdWdtZW50YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NWYXJUZW1wbGF0ZXMgZXh0ZW5kcyBJQ3NzU3R5bGVzZXRcclxue1xyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCB2YWx1ZSBvZiBhbnkgdHlwZSAqL1xyXG4gICAgXCJhbnlcIj86IGFueTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgc3RyaW5nIHZhbHVlICovXHJcbiAgICBDc3NTdHJpbmc/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8bnVtYmVyPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NOdW1iZXI/OiBDc3NOdW1iZXI7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8bGVuZ3RoPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NMZW5ndGg/OiBDc3NMZW5ndGg7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhbiBgPGFuZ2xlPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NBbmdsZT86IENzc0FuZ2xlO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPHRpbWU+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1RpbWU/OiBDc3NUaW1lO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPHJlc29sdXRpb24+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1Jlc29sdXRpb24/OiBDc3NSZXNvbHV0aW9uO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPGZyZXF1ZW5jeT5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzRnJlcXVlbmN5PzogQ3NzRnJlcXVlbmN5O1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPHBlcmNlbnQ+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1BlcmNlbnQ/OiBDc3NQZXJjZW50O1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBQb2ludCB2YWx1ZSAqL1xyXG4gICAgQ3NzUG9pbnQ/OiBDc3NQb2ludDtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxwb3NpdGlvbj5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzUG9zaXRpb24/OiBDc3NQb3NpdGlvbjtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYFJhZGl1c2AgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NSYWRpdXM/OiBDc3NSYWRpdXM7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8Y29sb3I+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc0NvbG9yPzogQ3NzQ29sb3I7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhbiBgPGltYWdlPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NJbWFnZT86IENzc0ltYWdlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyVGVtcGxhdGVOYW1lIHR5cGUgZGVmaW5lcyB0aGUga2V5cyAoc3RyaW5ncykgdGhhdCBjYW4gYmUgdXNlZCBhcyB0ZW1wbGF0ZXMgZm9yIGRlZmluaW5nXHJcbiAqIGN1c3RvbSBDU1MgcHJvcGVydGllcyB1c2luZyB0aGUgW1skdmFyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYXJUZW1wbGF0ZU5hbWUgPSBrZXlvZiBJQ3NzVmFyVGVtcGxhdGVzO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclRlbXBsYXRlcyB0eXBlIG1hcHMgYWxsIHRlbXBsYXRlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgW1tJQ3NzVmFyVGVtcGxhdGVzXV1cclxuICogaW50ZXJmYWNlIHRvIHRoZSBcImV4dGVuZGVkXCIgdmVyc2lvbnMgb2YgdGhlaXIgdHlwZXMuIFRoZXNlIGV4dGVuZGVkIHR5cGVzIGFyZSBkZWZpbmVkIHVzaW5nXHJcbiAqIHRoZSBbW0V4dGVuZGVkXV0gZ2VuZXJpYyB0eXBlLCB3aGljaCBhZGRzIGJhc2ljIGtleXdvcmRzIChlLmcuIFwidW5zZXRcIiwgXCJpbml0aWFsXCIsIGV0Yy4pIGFzXHJcbiAqIHdlbGwgYXMgW1tTdHJpbmdQcm94eV1dIGFuZCBbW0lDdXN0b21WYXJdXSB0byB0aGUgdHlwZSB0aGF0IGlzIGRlZmluZWQgaW4gdGhlIElDc3NWYXJUZW1wbGF0ZXNcclxuICogaW50ZXJmYWNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVmFyVGVtcGxhdGVzID0geyBbSyBpbiBWYXJUZW1wbGF0ZU5hbWVdOiBFeHRlbmRlZFByb3A8SUNzc1ZhclRlbXBsYXRlc1tLXT4gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclZhbHVlVHlwZSBnZW5lcmljIHR5cGUgZGVmaW5lcyB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGN1c3RvbVxyXG4gKiBDU1MgcHJvcGVydHkgdXNpbmcgdGhlIGdlbmVyaWMgdHlwZSBLIGFzIGl0cyB0ZW1wbGF0ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFZhclZhbHVlVHlwZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiA9IFZhclRlbXBsYXRlc1tLXTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDdXN0b21WYXJTdHlsZVR5cGUgdHlwZSByZXByZXNlbnRzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eSBuYW1lIGFuZCB2YWx1ZSB0aGF0IGFyZSB1c2VkIHRvXHJcbiAqIGRlZmluZSBjdXN0b20gcHJvcGVydGllcyBpbiBhIFN0eWxlc2V0LiBUaGlzIG9iamVjdCBpcyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXHJcbiAqIGAtLWAgcHJvcGVydHkgb2YgdGhlIFN0eWxlc2V0IHR5cGUuXHJcbiAqIFxyXG4gKiBDdXN0b21WYXJTdHlsZVR5cGUgb2JqZWN0cyBzaG91bGQgYmUgbW9zdGx5IHVzZWQgdG8gb3ZlcnJpZGUgY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBoYXZlXHJcbiAqIHByZXZpb3VzbHkgYmVlbiBkZWZpbmVkIGF0IHRoZSB0b3AtbGV2ZWwgdXNpbmcgdGhlICR2YXIgZnVuY3Rpb24uIFRoYXQgd2F5IHlvdSBjYW4gaGF2ZSBhXHJcbiAqIFwiZ2xvYmFsXCIgdmFsdWUgb2YgYSBjdXN0b20gcHJvcGVydHkgYW5kIGFzc2lnbiBhIGRpZmZlcmVudCB2YWx1ZSB0byBpdCB1bmRlciBhIGNlcnRhaW4gQ1NTXHJcbiAqIHNlbGVjdG9yLlxyXG4gKiBcclxuICogVGhlIHZhbHVlcyBvZiB0aGUgdHlwZSBjYW4gYmUgc3BlY2lmaWVkIGFzIGVpdGhlciBhIHR3by1pdGVtIG9yIGEgdGhyZWUtaXRlbSBhcnJheS4gVGhlXHJcbiAqIHR3by1pdGVtIGFycmF5IGlzIHVzZWQgd2l0aCBhIHByZXZpb3VzbHkgZGVmaW5lZCBjdXN0b20gQ1NTIHByb3BlcnR5IHJlcHJlc2VudGVkIGJ5IGFuIElWYXJSdWxlXHJcbiAqIG9iamVjdDpcclxuICogLSBUaGUgZmlyc3QgaXRlbSBpcyB0aGUgSVZhclJ1bGUgb2JqZWN0LlxyXG4gKiAtIFRoZSBzZWNvbmQgaXRlbSBpcyB0aGUgdmFsdWVcclxuICogXHJcbiAqIFRoZSB0aHJlZS1pdGVtIGFycmF5IGFsbG93cyBkaXJlY3RseSBzcGVjaWZ5aW5nIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5IG5hbWU6XHJcbiAqIC0gVGhlIGZpcnN0IGl0ZW0gaXMgYSBzdHJpbmcgLSB0aGUgbmFtZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS4gSWYgdGhlIG5hbWUgaXMgbm90IHByZWZpeGVkXHJcbiAqIHdpdGggdHdvIGRhc2hlcyB0aGV5IHdpbGwgYmUgYWRkZWQgYXV0b21hdGljYWxseS5cclxuICogLSBUaGUgc2Vjb25kIGl0ZW0gaXMgdGhlIG5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlXHJcbiAqIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuICogLSBUaGUgdGhpcmQgaXRlbSBpcyB0aGUgdmFsdWVcclxuICogXHJcbiAqIFVzZSB0aGUgQ3VzdG9tVmFyU3R5bGVUeXBlIHR5cGUgaW4gdGhlIGZvbGxvd2luZyBtYW5uZXI6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIE15U3R5bGVzIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uXHJcbiAqIHtcclxuICogICAgIC8vIGRlZmluZSBnbG9iYWwgY3VzdG9tIENTUyBwcm9wZXJ0eSBhbmQgcmUtZGVmaW5lIGl0cyB2YWx1ZSB1bmRlciBcImJyb3duXCIgY2xhc3MuXHJcbiAqICAgICBtYWluQ29sb3IgPSAkdmFyKCBcImNvbG9yXCIsIFwiYmxhY2tcIik7XHJcbiAqICAgICBicm93biA9ICRjbGFzcyh7IFwiLS1cIjogWyBbdGhpcy5tYWluQ29sb3IsIFwiYnJvd25cIl0gXSB9KVxyXG5cclxuICogICAgIC8vIGRpcmVjdGx5IGRlZmluZSBjdXN0b20gQ1NTIHByb3BlcnR5IHVuZGVyIFwiYmx1ZVwiIGNsYXNzLlxyXG4gKiAgICAgYmx1ZSA9ICRjbGFzcyh7IFwiLS1cIjogWyBbXCJkaWZmZXJlbnQtY29sb3JcIiwgXCJjb2xvclwiLCBcImJsdWVcIl0gXSB9KVxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGZvbGxvd2luZyBDU1M6XHJcbiAqIFxyXG4gKiBgYGBjc3NcclxuICogOnJvb3QgeyAtLU15U3R5bGVzX21haW5Db2xvcjogXCJibGFja1wiOyB9XHJcbiAqIC5icm93biB7IC0tTXlTdHlsZXNfbWFpbkNvbG9yOiBcImJyb3duXCI7IH1cclxuICogLmJsdWUgeyAtLWRpZmZlcmVudC1vbG9yOiBcImJsdWVcIjsgfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIEN1c3RvbVZhcl9TdHlsZVR5cGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gPSBcclxuICAgIFtJVmFyUnVsZTxLPiwgVmFyVmFsdWVUeXBlPEs+XSB8IFtzdHJpbmcsIEssIFZhclZhbHVlVHlwZTxLPl1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgY29sbGVjdGlvbiBvZiBzdHlsZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB2YWx1ZXMuIEluIGFkZGl0aW9uIHRvIHRoZVxyXG4gKiBwcm9wZXJ0aWVzIHJlcHJlc2VudGluZyB0aGUgc3RhbmRhcmQgQ1NTIHN0eWxlcywgdGhpcyB0eXBlIGFsc28gaW5jbHVkZXMgdGhlIFwiLS1cIiBwcm9wZXJ0eSxcclxuICogd2hpY2ggaXMgYW4gYXJyYXkgb2YgQ3VzdG9tVmFyU3R5bGVUeXBlIG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHlsZXNldCA9IEV4dGVuZGVkU3R5bGVzZXQgJlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNwZWNpYWwgcHJvcGVydHkgXCItLVwiIHNwZWNpZmllcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIEN1c3RvbVZhclN0eWxlVHlwZSBvYmplY3RzIGVhY2hcclxuICAgICAgICAgKiByZXByZXNlbnRpbmcgYSBkZWZpbml0aW9uIG9mIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBcIi0tXCI/OiBDdXN0b21WYXJfU3R5bGVUeXBlW107XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3VwcG9ydHMgcXVlcnkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgc2luZ2xlIHNldCBvZiBzdHlsZXMgYXMgcGFydCBvZiB0aGUgQHN1cHBvcnRzIHJ1bGVzLiBUaGUgc3R5bGVzIGluIHRoZVxyXG4gKiBzdHlsZXNldCBhcmUgY29tYmluZWQgd2l0aCB0aGUgXCJhbmRcIiBvcGVyYXRvci4gVGhlIGVudGlyZSBzdHlsZXNldCBjYW4gYmUgbmVnYXRlZCwgd2hpY2ggd2lsbFxyXG4gKiByZXN1bHQgaW4gcGxhY2luZyB0aGUgXCJub3RcIiBvcGVyYXRvciB0aGF0IHdpbGwgYWN0IG9uIGFsbCBzdHlsZXMgaW4gdGhlIHF1ZXJ5LlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHVzaW5nIFB1cmVTdHlsZXNldCBvYmplY3QgZG9lc24ndCBhbGxvdyBmb3IgY2hlY2tpbmcgd2hldGhlciB0d28gb3IgbW9yZSB2YWx1ZXMgb2ZcclxuICogYSBnaXZlbiBwcm9wZXJ0eSBhcmUgc3VwcG9ydGVkLiBGb3IgZXhhbXBsZSwgYWx0aG91Z2ggd2UgY2FuIHRlc3QgdGhhdCB0aGUgXCJkaXNwbGF5XCIgcHJvcGVydHlcclxuICogc3VwcG9ydHMgdGhlIFwiZmxleFwiIHZhbHVlLCB3ZSBjYW5ub3QgY2hlY2sgd2hldGhlciBib3RoIFwiZmxleFwiIGFuZCBcImdyaWRcIiB2YWx1ZXMgYXJlIHN1cHBvcnRlZC5cclxuICogVG8gY2hlY2sgc3VjaCBjcml0ZXJpYSB5b3UgbXVzdCBzcGVjaWZ5IHRoZSBxdWVyeSBhcyBhIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZVN1cHBvcnRzUXVlcnkgPSBzdHJpbmcgfCBFeHRlbmRlZFN0eWxlc2V0ICYgeyAkbmVnYXRlPzogYm9vbGVhbjsgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIG9uZSBvciBtb3JlIHF1ZXJpZXMgYXMgcGFydCBvZiB0aGUgQHN1cHBvcnRzIHJ1bGUuIFdoaWxlIG11bHRpcGxlIHF1ZXJpZXMgaW5cclxuICogYW4gYXJyYXkgYXJlIGNvbWJpbmVkIHdpdGggdGhlIFwib3JcIiBvcGVyYXRvciwgdGhlIHN0eWxlcyB3aXRoaW4gZWFjaCBzdHlsZXNldCBhcmUgY29tYmluZWQgd2l0aFxyXG4gKiB0aGUgXCJhbmRcIiBvcGVyYXRvci5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN1cHBvcnRzUXVlcnkgPSBTaW5nbGVTdXBwb3J0c1F1ZXJ5IHwgU2luZ2xlU3VwcG9ydHNRdWVyeVtdO1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgRXh0ZW5kZWQsIElHZW5lcmljUHJveHksIENzc051bWJlciwgQ3NzTXVsdGlOdW1iZXIsIElOdW1iZXJCYXNlTWF0aCxcclxuICAgIENzc1Bvc2l0aW9uLCBNdWx0aUNzc1Bvc2l0aW9uLCBOdW1iZXJCYXNlLCBNdWx0aU51bWJlckJhc2UsXHJcbiAgICBDc3NMZW5ndGgsIENzc011bHRpTGVuZ3RoLCBDc3NBbmdsZSwgQ3NzTXVsdGlBbmdsZSwgQ3NzVGltZSwgQ3NzTXVsdGlUaW1lLFxyXG4gICAgQ3NzUmVzb2x1dGlvbiwgQ3NzTXVsdGlSZXNvbHV0aW9uLCBDc3NGcmVxdWVuY3ksIENzc011bHRpRnJlcXVlbmN5LFxyXG4gICAgQ3NzUGVyY2VudCwgQ3NzTXVsdGlQZXJjZW50LCBJQ3NzTGVuZ3RoTWF0aCxcclxuICAgIElDc3NBbmdsZU1hdGgsIElDc3NQZXJjZW50TWF0aCwgSUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NSZXNvbHV0aW9uTWF0aCwgSUNzc1RpbWVNYXRoLFxyXG4gICAgTnVtYmVyVHlwZSwgTGVuZ3RoVHlwZSwgUGVyY2VudFR5cGUsIEFuZ2xlVHlwZSwgVGltZVR5cGUsIFJlc29sdXRpb25UeXBlLCBGcmVxdWVuY3lUeXBlXHJcbn0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZGFzaGUtY2FzZSB0byBjYW1lbENhc2UsIGUuZy4gZm9udC1zaXplIHRvIGZvbnRTaXplLlxyXG4gKiBAcGFyYW0gZGFzaFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZSwgZS5nLiBmb250U2l6ZSB0byBmb250LXNpemUuXHJcbiAqIEBwYXJhbSBjYW1lbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKCBjYW1lbDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gY2FtZWwucmVwbGFjZSggLyhbYS16QS1aXSkoPz1bQS1aXSkvZywgJyQxLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVmFsdWVDb252ZXJ0T3B0aW9ucyBpbnRlcmZhY2UgZGVmaW5lcyBvcHRpb25hbCBmdW5jdGlvbnMgdGhhdCBjb252ZXJ0dmFsdWVzIG9mIGRpZmZlcm50XHJcbiAqIHR5cGVzIHRvIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZUNvbnZlcnRPcHRpb25zXHJcbntcclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgZnJvbU51bGw/OiAoIHZhbDogbnVsbCB8IHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIHN0cmluZy4gVGhpcyBhbGxvd3MgdHJhbnNmb3JtaW5nIG9uZSBzdHJpbmcgdG8gYW5vdGhlci5cclxuICAgIGZyb21TdHJpbmc/OiAoIHZhbDogc3RyaW5nKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgYm9vbGVhblxyXG4gICAgZnJvbUJvb2w/OiAodmFsOiBib29sZWFuKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgbnVtYmVyXHJcbiAgICBmcm9tTnVtYmVyPzogKHZhbDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGFuIGFycmF5XHJcbiAgICBmcm9tQXJyYXk/OiAodmFsOiBhbnlbXSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgIGZyb21PYmo/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdHlwZS1zcGVjaWZpYyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZFxyXG4gICAgZnJvbUFueT86ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCB0byBjb252ZXJ0IGFycmF5IGl0ZW1zIGlmIGZyb21BcnJheSBpcyBub3QgZGVmaW5lZFxyXG4gICAgYXJySXRlbUZ1bmM/OiAodjogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gU2VwYXJhdG9yIGZvciBhcnJheSBpdGVtcyAtIHVzZWQgb25seSBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFyclNlcD86IHN0cmluZztcclxuXHJcbiAgICAvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCB0aGVzZSBhcmUgYXJndW1lbnRzIHRvIHBhc3Mgd2hlbiBpbnZva2luZyBpdFxyXG4gICAgZnVuY0FyZ3M/OiBhbnlbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSB2YWx1ZSBvZiBhbiBhcmJpdHJhcnkgdHlwZSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoZSBvcHRpb25hbCBvcHRpb25zIHBhcmFtZXRlclxyXG4gKiBjYW4gZGVmaW5lIGhvdyBzcGVjaWZpYyB0eXBlcyBhcmUgY29udmVydGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbDJzdHIoIHZhbDogYW55LCBvcHRpb25zPzogSVZhbHVlQ29udmVydE9wdGlvbnMpOiBzdHJpbmdcclxue1xyXG4gICBpZiAoIW9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc3RhbmRhcmQgcHJvY2Vzc2luZzpcclxuICAgICAgICAvLyAtIG51bGwvdW5kZWZpbmVkIGJlY29tZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAgICAgLy8gLSBjYWxsIHZhbHVlVG9TdHJpbmcgKHByb3h5IG9iamVjdHMpIGlmIGV4aXN0LlxyXG4gICAgICAgIC8vIC0gZnVuY3Rpb246IGNhbGwgd2l0aG91dCBwYXJhbWV0ZXJzLlxyXG4gICAgICAgIC8vIC0gZXZlcnl0aGluZyBlbHNlOiBjYWxsIHRvU3RyaW5nKCkuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIHByb2Nlc3Npbmcgd2l0aCBvcHRpb25zLiBGb3IgYWxsIHR5cGVzIGV4Y2VwdCBudWxsIGFuZCBzdHJpbmcsIGlmIHRoZSB0eXBlLXNwZWNpZmljXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIGNhbGwgZnJvbUFueSBpZiBkZWZpbmVkLlxyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bGwgPyBvcHRpb25zLmZyb21OdWxsKCB2YWwpIDogXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tU3RyaW5nID8gb3B0aW9ucy5mcm9tU3RyaW5nKCB2YWwpIDogdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21OdW1iZXIgPyBvcHRpb25zLmZyb21OdW1iZXIoIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCBvcHRpb25zLmZ1bmNBcmdzID8gdmFsKCAuLi5vcHRpb25zLmZ1bmNBcmdzKSA6IHZhbCgpKTtcclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mcm9tQXJyYXkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQXJyYXkoIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG9wdGlvbnMuYXJyU2VwICE9IG51bGwgPyBvcHRpb25zLmFyclNlcCA6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHZhbCwgb3B0aW9ucy5hcnJJdGVtRnVuYyB8fCBvcHRpb25zLmZyb21BbnkgfHwgdW5kZWZpbmVkLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnZhbHVlVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tT2JqKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU9iaiggdmFsKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUJvb2wgPyBvcHRpb25zLmZyb21Cb29sKCB2YWwpIDogb3B0aW9ucy5mcm9tQW55ID8gb3B0aW9ucy5mcm9tQW55KCB2YWwpIDogdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBvZiB0aGUgZ2l2ZW4gdHlwZXRvIGEgc2luZ2xlIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4gKiBFbGVtZW50cyBvZiB0aGUgYXJyYXkgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnIyc3RyKCB2YWw6IGFueVtdLCBmdW5jPzogKHYpID0+IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gIXZhbCB8fCB2YWwubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgOiB2YWwuZmlsdGVyKCB4ID0+IHggIT0gbnVsbCkubWFwKCB5ID0+IGZ1bmMgPyBmdW5jKHkpIDogdmFsMnN0ciggeSkpLmpvaW4oIHNlcGFyYXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgdGVtcGxhdGVTdHJpbmdUb1N0cmluZyBpcyBhIHRhZyBmdW5jdGlvbiBoZWxwZXIgdGhhdCBjb252ZXJ0cyB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhcclxuICogcGFyYW1ldGVycyB0byBhIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gY29udmVydCBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBhbnlbXSxcclxuICAgIGNvbnZlcnRGdW5jPzogKCB2OiBhbnkpID0+IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBudW1iZXIgb2YgcGFyYW1ldGVycyBpcyBhbHdheXMgMSBsZXNzIHRoYW4gdGhlIG51bWJlciBvZiBzdHJpbmcgcGFydHNcclxuICAgIGxldCBwYXJhbXNMZW4gPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgaWYgKHBhcmFtc0xlbiA9PT0gMClcclxuICAgICAgICByZXR1cm4gcGFydHNbMF07XHJcblxyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBwYXJhbXNMZW47IGkrKylcclxuICAgICAgICBzICs9IHBhcnRzW2ldICsgKGNvbnZlcnRGdW5jID8gY29udmVydEZ1bmMoIHBhcmFtc1tpXSkgOiB2YWwyc3RyKCBwYXJhbXNbaV0pKTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIGxhc3QgcGFydFxyXG4gICAgcmV0dXJuIHMgKyBwYXJ0c1twYXJhbXNMZW5dO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBvZiBmdW5jdGlvbnMgdGhhdCBjb252ZXJ0IGEgbnVtYmVyIHRvIGEgc3RyaW5nICovXHJcbnR5cGUgQ29udmVydE51bWJlckZ1bmNUeXBlID0gKG46IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSB0byBhIENTUyBzdHJpbmcgb3B0aW9uYWxseSBhcHBlbmRpbmcgdW5pdHMgdGhhdCBjYW4gYmUgZGlmZmVyZW50XHJcbiAqIGZvciBpbnRlZ2VyIGFuZCBmbG9hdGluZyBwb2ludCBudW1iZXJzLlxyXG4gKiBAcGFyYW0gbiBOdW1iZXIgdG8gY29udmVydCB0byBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAqIEBwYXJhbSBpbnRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGludGVnZXIuXHJcbiAqIEBwYXJhbSBmbG9hdFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgZmxvYXRpbmcgcG9pbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBudW1iZXJUb1N0cmluZyggbjogbnVtYmVyLCBpbnRVbml0OiBzdHJpbmcgPSBcIlwiLCBmbG9hdFVpbnQ6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIobikgPyAgbiArIGludFVuaXQgOiBuICsgZmxvYXRVaW50O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBOdW1iZXIgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIG51bWJlckJhc2VUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PixcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHsgZnJvbU51bWJlcjogY29udmVydEZ1bmN9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBDc3NOdW1iZXIgb3IgYXJyYXkgb2YgQ3NzTnVtYmVyIG9iamVjdHMgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlLSBvciBtdWx0aS1udW1iZXIgc3R5bGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgbnVtYmVyIHRvIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc2VwYXJhdG9yIFN0cmluZyB0byB1c2UgdG8gc2VwYXJhdGUgbXVsdGlwbGUgdmFsdWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gbXVsdGlTdHlsZVRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29udmVydEZ1bmMsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHYgPT4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2LCBjb252ZXJ0RnVuYyksXHJcbiAgICAgICAgYXJyU2VwOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWF0aEZ1bmMgZnVuY3Rpb24gcmV0dXJucyBvbmUgb2YgdGhlIG1hdGhlbWF0aWMgQ1NTIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgb3IgbW9yZVxyXG4gKiBwYXJhbWV0ZXJzIHdob3NlIHR5cGUgaXMgZGVyaXZlZCBmcm9tIE51bWJlckJhc2U8VD4uXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXRoRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggbmFtZTogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHttdWx0aVN0eWxlVG9TdHJpbmcoIHBhcmFtcywgY29udmVydEZ1bmMsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIGNhbGNGdW5jIGZ1bmN0aW9uIHJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY2FsYygpIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGNGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgY2FsYygke3RlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMsICh2OiBhbnkpID0+IG51bWJlckJhc2VUb1N0cmluZyggdiwgY29udmVydEZ1bmMpKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bW1iZXJCYXNlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogbnVtZXJpYyBDU1MgdHlwZXMuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXlcclxuICogYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbiBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVyQmFzZU1hdGg8VCBleHRlbmRzIHN0cmluZz4gaW1wbGVtZW50cyBJTnVtYmVyQmFzZU1hdGg8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBjb252ZXJ0RnVuYzogQ29udmVydE51bWJlckZ1bmNUeXBlKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBudW1iZXJUb1N0cmluZyA9IChuOiBudW1iZXIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RnVuYyggbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpU3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMsIHNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5cIiwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF4KCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1heFwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcImNsYW1wXCIsIFttaW4sIHByZWYsIG1heF0sIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGNGdW5jKCBmb3JtdWxhUGFydHMsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aENsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgXCJzdGF0aWNcIiBzaWRlIG9mIGNsYXNzZXMgZGVyaXZlZCBmcm9tIHRoZVxyXG4gKiBOdW1iZXJNYXRoIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyQmFzZU1hdGhDbGFzczxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBzdHJpbmc7XHJcblxyXG4gICAgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIG5ldygpOiBJTnVtYmVyQmFzZU1hdGg8VD47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVbml0bGVzcyBudW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc051bWJlck1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxudW1iZXI+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NOdW1iZXJNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8TnVtYmVyVHlwZT5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlOdW1iZXI+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1BlcmNlbnRNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cGVyY2VudD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1BlcmNlbnRNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8UGVyY2VudFR5cGU+IGltcGxlbWVudHMgSUNzc1BlcmNlbnRNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIChOdW1iZXIuaXNJbnRlZ2VyKG4pID8gbiA6IE1hdGgucm91bmQobiAqIDEwMCkpICsgXCIlXCI7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlQZXJjZW50Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIHRvIHN0cmluZyB1c2luZyB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIGlmIHRoZSBudW1iZXIgaXMgYmV0d2VlbiAtMSBhbmQgMSAobm9uIGluY2x1c2l2ZSksIG11bHRpcGxpZXMgdGhlIG51bWJlciBhbmQgYXBwZW5kcyBcIiVcIlxyXG4gKiAtIG90aGVyd2lzZSwgY29udmVydHMgdGhlIG51bWJlciB0byBzdHJpbmcgd2l0aG91dCBhcHBlbmRpbmcgYW55IHV0aW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nKCBuOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPj0gMSB8fCBuIDw9IC0xID8gbi50b1N0cmluZygpIDogTWF0aC5yb3VuZChuICogMTAwKSArIFwiJVwiO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIExlbmd0aFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTGVuZ3RoTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGxlbmd0aD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0xlbmd0aE1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxMZW5ndGhUeXBlPiBpbXBsZW1lbnRzIElDc3NMZW5ndGhNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJweFwiLCBcImVtXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElHZW5lcmljUHJveHk8TGVuZ3RoVHlwZT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWlubWF4XCIsIFttaW4sIG1heF0sIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBBbmdsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzQW5nbGVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8YW5nbGU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NBbmdsZU1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxBbmdsZVR5cGU+IGltcGxlbWVudHMgSUNzc0FuZ2xlTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZGVnXCIsIFwidHVyblwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpQW5nbGU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaW1lXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NUaW1lTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHRpbWU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NUaW1lTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFRpbWVUeXBlPiBpbXBsZW1lbnRzIElDc3NUaW1lTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwibXNcIiwgXCJzXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1RpbWU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXNvbHV0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NSZXNvbHV0aW9uTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHJlc29sdXRpb24+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFJlc29sdXRpb25UeXBlPiBpbXBsZW1lbnRzIElDc3NSZXNvbHV0aW9uTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZHBpXCIsIFwieFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVJlc29sdXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJlcXVlbmN5XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NGcmVxdWVuY3lNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8ZnJlcXVlbmNlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPEZyZXF1ZW5jeVR5cGU+IGltcGxlbWVudHMgSUNzc0ZyZXF1ZW5jeU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIkh6XCIsIFwia0h6XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0ZyZXF1ZW5jeT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyZXF1ZW5jeT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIHBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvczJzdHIoIHZhbDogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVsbDogdiA9PiBcIlwiLFxyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHYsIFwiIFwiKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvczJzdHIoIHZhbDogRXh0ZW5kZWQ8TXVsdGlDc3NQb3NpdGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogcG9zMnN0cixcclxuICAgICAgICBhcnJTZXA6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBiYXNpYyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gZGVmaW5lIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuICogXHJcbiAqIEFsbCBDU1MgcHJvcGVydGllcyBzaG91bGQgYWNjZXB0IHN0cmluZyBhcyB0aGUgdHlwZSBvZiB0aGVpciB2YWx1ZSBldmVuIGlmIG5vcm1hbGx5XHJcbiAqIHRoZXkgYWNjZXB0IG90aGVyIHR5cGVzIChlLmcgYSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIGFzIGBcInJlZFwiIHwgXCJncmVlblwiIHwgLi4uYCBmb3IgdGhlXHJcbiAqIGNvbG9yKSBwcm9wZXJ0eS4gVGhpcyBpcyBiZWNhdXNlIGluIGFkZGl0aW9uIHRvIHRoZWlyIG5vcm1hbCB2YWx1ZXMgYW55IHByb3BlcnR5XHJcbiAqIGNhbiB1c2UgY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBgdmFyKC0tcHJvcG5hbWUpYC4gSG93ZXZlciwgaWYgd2UgYWRkIHN0cmluZyB0eXBlXHJcbiAqIHRvIHRoZSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIChlLmcuIGBcInJlZFwiIHwgXCJncmVlblwiIHwgc3RyaW5nYCksIHRoaXMgdGhyb3dzIG9mZiB0aGVcclxuICogSW50ZWxsaXNlbnNlIGFuZCBpdCBkb2Vzbid0IHByb21wdCBkZXZlbG9wZXJzIGZvciB0aGUgcG9zc2libGUgdmFsdWVzLiBUaGUgSVZhbHVlUHJveHlcclxuICogY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBzdHJpbmcgYW5kIHRoaXMgc29sdmVzIHRoZSBJbnRlbGxpc2Vuc2UgaXNzdWUuXHJcbiAqIFxyXG4gKiBBbm90aGVyIGJlbmVmaXQgb2YgdXNpbmcgZnVuY3Rpb25zIGlzIHRoYXQgdGhleSBhcmVcclxuICogY29uc3RydWN0ZWQgYXQgb25lIHRpbWUgYnV0IHRoZSBzdHJpbmcgZ2VuZXJhdGlvbiBvY2N1cnMgYXQgYW5vdGhlciB0aW1lLiBUaGlzIGFsbG93c1xyXG4gKiB1c2luZyB0aGVzZSBvYmplY3RzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuIFRoZXkgY2FuIHJlZmVyZW5jZSBvYmplY3RzIGxpa2VcclxuICogSVZhclJ1bGUgdGhhdCBhcmUgbm90IGZ1bGx5IGluaXRpYWxpemVkIHlldC4gSG93ZXZlciwgd2hlbiB0aGUgc3R5bGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBoYXZlIGFscmVhZHkgb2NjdXJyZWQgYW5kIHRoZSBmdW5jdGlvbiB3aWxsXHJcbiAqIHJldHVybiBhIGNvcnJlY3Qgc3RyaW5nLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSBwcm94eSBmdW5jdGlvbnMgaGF2ZSBhIHBhcmFtZXRlciB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlbSBmcm9tXHJcbiAqIG90aGVyIHByb3h5IGZ1bmN0aW9ucy4gVGhpcyBpcyBiZWNhdXNlIHdlIHdhbnQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbnQgQ1NTIHR5cGVzLFxyXG4gKiBzbyB0aGF0IGEgZnVuY3Rpb24gdXNlZCBmb3Igb25lIENTUyB0eXBlIGNhbm5vdCBiZSB1c2VkIGZvciBhIGRpZmZlcmVudCBDU1MgdHlwZS4gRm9yXHJcbiAqIGV4YW1wbGUsIHRoZSBgY2FsYygpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiwgd2hpbGUgdGhlXHJcbiAqIGBsaW5lYXJJbmdyYWRpZW50KClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIEltYWdlUHJveHkgZnVuY3Rpb24uIFRodXMgeW91IGNhbm5vdCB1c2UgdGhlXHJcbiAqICdjYWxjKClgIGZ1bmN0aW9uIGZvciBpbWFnZS1iYXNlZCBDU1MgcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cclxuICovXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogU3R5bGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFueSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHbG9iYWxfU3R5bGVUeXBlID0gXCJpbmhlcml0XCIgfCBcImluaXRpYWxcIiB8IFwidW5zZXRcIiB8IFwicmV2ZXJ0XCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdlbmVyaWNQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIGludGVyZmFjZSBpbXBsZW1lbnRlZCB1c2luZyBmdW5jdGlvbnMgdGhhdFxyXG4gKiBhY2NlcHQgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIG9mIGEgZ2VuZXJpYyB0eXBlIGFuZCByZXR1cm4gYSBzdHJpbmcuIFRoaXMgaW50ZXJmYWNlIGlzIHVzZWQgYXMgYVxyXG4gKiBiYXNlIGZvciBwcm94eSBpbnRlcmZhY2VzIGRlZmluaW5nIHR5cGVzIGFjY2VwdGFibGUgYnkgY2VydGFpbiBzdHlsZSBwcm9wZXJ0aWVzLiBUaGUgdHlwZVxyXG4gKiBwYXJhbWV0ZXIgaGVscHMgZGlmZmVyZW50aWF0ZSB0aGVzZSBpbnRlcmZhY2VzIHNvIHRoYXQgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIG9uZVxyXG4gKiB0eXBlIG9mIHN0eWxlIHByb3BlcnRpZXMgKGUuZy4gXCJ0cmFuc2Zvcm1cIikgY2Fubm90IGJlIGFzc2lnbmVkIHRvIGFuIGluY29tcGF0aWJsZSBzdHlsZSBwcm9wZXJ0eVxyXG4gKiAoZS5nLiBjbGlwLXBhdGgpLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJpY1Byb3h5PFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIChwPzogVCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdHJpbmdQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0XHJcbiAqIG9mIHR5cGUgZGVmaW5pdGlvbiBmb3IgYWxsIENTUyBwcm9wZXJ0aWVzIC0gZXZlbiBmb3IgdGhvc2UgdGhhdCBkb24ndCBoYXZlIGBzdHJpbmdgIGFzIHBhcnQgb2ZcclxuICogdGhlaXIgdHlwZS5cclxuICogXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZnJvbSB0aGUgYHJhdygpYCBmdW5jdGlvbiwgd2hpY2ggYWxsb3dzIGJ5LXBhc3NpbmcgdGhlIHByb3BlcnR5XHJcbiAqIHR5cGluZyBydWxlcyBhbmQgc3BlY2lmeWluZyBhIHN0cmluZyBkaXJlY3RseS4gVGhpcyBtaWdodCBiZSB1c2VmdWwsIHdoZW4gYSBzdHJpbmcgdmFsdWUgaXNcclxuICogb2J0YWluZWQgZnJvbSBzb21lIGV4dGVybmFsIGNhbGN1bGF0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmluZ1Byb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInN0cmluZ1wiPiB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21WYXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgY3VzdG9tIHByb3BlcnR5IG9iamVjdCB3aXRoIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgbmVlZGVkIGJlY2F1c2UgZXZlcnkgc3R5bGUgcHJvcGVydHkgY2FuIGFjY2VwdCB2YWx1ZSBpbiB0aGUgZm9ybSBvZiB0aGUgdmFyKClcclxuICogQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFyPFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRWYWx1ZSggdmFsdWU6IFQsIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZXh0ZW5kcyB0aGUgZ2l2ZW4gdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqIC0gSUN1c3RvbVZhciBpbnRlcmZhY2UgdGhhdCBhbGxvd3MgdXNpbmcgYSBDU1MgY3VzdG9tIHByb3BlcnR5LlxyXG4gKiAtIElTdHJpbmdQcm94eSBpbnRlcmZhY2UgdGhhdCBhbGxvd3Mgc3BlY2lmeWluZyByYXcgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWQ8VD4gPSBUIHwgSUN1c3RvbVZhcjxUPiB8IElTdHJpbmdQcm94eSB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHR5cGUgb2YgcHJvcGVydHkgaW4gYW4gb2JqZWN0IHdpdGggYSBzaW5nbGUgXCIhXCIgcHJvcGVydHkuIFRoaXNcclxuICogdHlwZSBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3BlcnR5IHZhbHVlIG11c3QgYmUgZmxhZ2dlZCBhcyBcIiFpbXBvcnRhbnRcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEltcG9ydGFudFByb3A8VD4gPSB7IFwiIVwiOiBFeHRlbmRlZDxUPiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV4dGVuZGVkUHJvcCBleHRlbmRzIHRoZSBnaXZlbiBnZW5lcmljIHR5cGUgd2l0aCB0aGUgZm9sbG93aW5nIGVsZW1lbnRzOlxyXG4gKiAtIE9iamVjdCB3aXRoIGEgc2luZ2xlIHByb3BlcnR5IFwiIVwiLCB3aGljaCBpcyB1c2VkIHRvIG1hcmsgYSBwcm9wZXJ0eSBhcyBcIiFpbXBvcnRhbnRcIi5cclxuICogLSBHbG9iYWxfU3R5bGVUeXBlLCB3aGljaCBhbGxvd3MgYW55IHByb3BlcnR5IHRvIGJlIGFzc2lnbmVkIHRoZSBnbG9iYWwgdmFsdWVzIHN1Y2ggYXNcclxuICogICBcImluaXRpYWxcIiwgXCJpbmhlcml0XCIsIFwidW5zZXRcIiBhbmQgXCJyZXZlcnRcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkUHJvcDxUPiA9IEV4dGVuZGVkPFQ+IHwgSW1wb3J0YW50UHJvcDxUPiB8IEdsb2JhbF9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBwYWlyLWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDIgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yUGFpcjxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3gtbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gNCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JCb3g8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4/LCBFeHRlbmRlZDxUPj9dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIG9yIG1vcmUgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yTWFueTxUPiA9IFQgfCBFeHRlbmRlZDxUPltdO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJUXVvdGVkUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhIHN0cmluZyBpbiBxdW90YXRpb24gbWFya3NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVF1b3RlZFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInF1b3RlZFwiPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtZXJpYyB0eXBlcyBhcyBhIGJhc2lzIGZvciBoYW5kbGluZyBDU1MgPG51bWJlcj4sIDxsZW5ndGg+LCA8YW5nbGU+LCBldGMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE51bWJlckJhc2U8VCBleHRlbmRzIHN0cmluZz4gPSBudW1iZXIgfCBzdHJpbmcgfCBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aU51bWJlckJhc2U8VCBleHRlbmRzIHN0cmluZz4gPSBPbmVPck1hbnk8TnVtYmVyQmFzZTxUPj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU51bWJlckJhc2VNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogbnVtZXJpYyBDU1MgdHlwZXMuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgdHlwZSwgdGhleSBhcmUgY29udmVydGVkXHJcbiAqIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGBudW1iZXJUb1N0cmluZ2AgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyQmFzZU1hdGg8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW4oKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1heCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWF4KCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2xhbXAoKSBmdW5jdGlvbi4gKi9cclxuICAgIGNsYW1wKCBtaW46IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBwcmVmOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgbWF4OiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2FsYygpIGZ1bmN0aW9uLiBUaGlzIG1ldGhvZCBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdFxyXG4gICAgICogYmUgaW52b2tlZCB3aXRoIGEgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAgICAgKi9cclxuICAgIGNhbGMoIGZvcm11bGFQYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPG51bWJlcj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIE51bWJlciB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJUeXBlID0gXCJOdW1iZXJcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUgLSBub3RlIHRoYXQgaXQgZXhsdWRlcyBgc3RyaW5nYCAqL1xyXG5leHBvcnQgdHlwZSBDc3NOdW1iZXIgPSBFeGNsdWRlPE51bWJlckJhc2U8TnVtYmVyVHlwZT4sc3RyaW5nPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpTnVtYmVyID0gT25lT3JNYW55PENzc051bWJlcj47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlclByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxOdW1iZXJUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc051bWJlck1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPG51bWJlcj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc051bWJlck1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8TnVtYmVyVHlwZT4ge31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcGVyY2VudCAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VW5pdHMgPSBcIiVcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBQZXJjZW50IHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRUeXBlID0gXCJQZXJjZW50XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQZXJjZW50ID0gTnVtYmVyQmFzZTxQZXJjZW50VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlQZXJjZW50ID0gT25lT3JNYW55PENzc1BlcmNlbnQ+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQZXJjZW50UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFBlcmNlbnRUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1BlcmNlbnRNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzUGVyY2VudE1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8UGVyY2VudFR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bGVuZ3RoPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgbGVuZ3RoICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFVuaXRzID0gXCJRXCIgfCBcImNoXCIgfCBcImNtXCIgfCBcImVtXCIgfCBcImV4XCIgfCBcImljXCIgfCBcImluXCIgfCBcImxoXCIgfCBcIm1tXCIgfCBcInBjXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJwdFwiIHwgXCJweFwiIHwgXCJ2YlwiIHwgXCJ2aFwiIHwgXCJ2aVwiIHwgXCJ2d1wiIHwgXCJyZW1cIiB8IFwicmxoXCIgfCBcInZtYXhcIiB8IFwidm1pblwiIHwgXCJmclwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIExlbmd0aCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhUeXBlID0gXCJMZW5ndGhcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGggPSBOdW1iZXJCYXNlPExlbmd0aFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlMZW5ndGggPSBPbmVPck1hbnk8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLTItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGhQYWlyID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by00LXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoQm94ID0gT25lT3JCb3g8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMZW5ndGhQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8TGVuZ3RoVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NMZW5ndGhNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxsZW5ndGg+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NMZW5ndGhNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPExlbmd0aFR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWlubWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtaW5tYXgoIG1pbjogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgbWF4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUxlbmd0aFByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxhbmdsZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGFuZ2xlICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVW5pdHMgPSBcImRlZ1wiIHwgXCJyYWRcIiB8IFwiZ3JhZFwiIHwgXCJ0dXJuXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgQW5nbGUgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVUeXBlID0gXCJBbmdsZVwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzQW5nbGUgPSBOdW1iZXJCYXNlPEFuZ2xlVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpQW5nbGUgPSBPbmVPck1hbnk8Q3NzQW5nbGU+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5nbGVQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8QW5nbGVUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0FuZ2xlTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8YW5nbGU+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NBbmdsZU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8QW5nbGVUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPHRpbWU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiB0aW1lICovXHJcbmV4cG9ydCB0eXBlIFRpbWVVbml0cyA9IFwic1wiIHwgXCJtc1wiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFRpbWUgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgVGltZVR5cGUgPSBcIlRpbWVcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1RpbWUgPSBOdW1iZXJCYXNlPFRpbWVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVRpbWUgPSBPbmVPck1hbnk8Q3NzVGltZT47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGltZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxUaW1lVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NUaW1lTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8dGltZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1RpbWVNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPFRpbWVUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPHJlc29sdXRpb24+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiByZXNvbHV0aW9uICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25Vbml0cyA9IFwiZHBpXCIgfCBcImRwY21cIiB8IFwiZHBweFwiIHwgXCJ4XCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUmVzb2x1dGlvbiB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uVHlwZSA9IFwiUmVzb2x1dGlvblwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmVzb2x1dGlvbiA9IE51bWJlckJhc2U8UmVzb2x1dGlvblR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUmVzb2x1dGlvbiA9IE9uZU9yTWFueTxDc3NSZXNvbHV0aW9uPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUmVzb2x1dGlvblByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxSZXNvbHV0aW9uVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NSZXNvbHV0aW9uTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1Jlc29sdXRpb25NYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPFJlc29sdXRpb25UeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGZyZXF1ZW5jeT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGZyZXF1ZW5jeSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lVbml0cyA9IFwiSHpcIiB8IFwia0h6XCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgRnJlcXVlbmN5IHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVR5cGUgPSBcIkZyZXF1ZW5jeVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NGcmVxdWVuY3kgPSBOdW1iZXJCYXNlPEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlGcmVxdWVuY3kgPSBPbmVPck1hbnk8Q3NzRnJlcXVlbmN5PjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGcmVxdWVuY3lQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8RnJlcXVlbmN5VHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NGcmVxdWVuY3lNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmVxdWVuY3k+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPEZyZXF1ZW5jeVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYSBwb2ludCB1c2luZyB4IGFuZCB5IGNvb3JkaW5hdGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9pbnQgPSBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3NpdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGhvcml6b250YWwgcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCA9IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGhvcml6b250YWwgcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgVmVydGljYWxQb3NpdGlvbktleXdvcmQgPSBcInRvcFwiIHwgXCJjZW50ZXJcIiB8IFwiYm90dG9tXCI7XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIGEgc2ltcGxlIDEgb3IgdHdvIHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgU2ltcGxlQ3NzUG9zaXRpb24gPSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+IHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGZ1bGwgdXAgdG8gNCB2YWx1ZXMgYDxwb3NpdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Bvc2l0aW9uID0gU2ltcGxlQ3NzUG9zaXRpb24gfCBcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZF0gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+XSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyBtdWx0aXBsZSBgPHBvc2l0aW9uPmAgQ1NTIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE11bHRpQ3NzUG9zaXRpb24gPSBFeHRlbmRlZDxDc3NQb3NpdGlvbj5bXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJhZGl1c1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSBjb3JuZXIgcmFkaXVzICovXHJcbmV4cG9ydCB0eXBlIENzc1JhZGl1cyA9IE9uZU9yUGFpcjxDc3NMZW5ndGg+O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVVJMcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIENTUyB1cmwoKSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInVybFwiPiB7fTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIGF0dHIoKSBmdW5jdGlvbiBzdXBwb3J0XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IHR5cGUgQXR0clR5cGVLZXl3b3JkID0gXCJzdHJpbmdcIiB8IFwiY29sb3JcIiB8IFwidXJsXCIgfCBcImludGVnZXJcIiB8IFwibnVtYmVyXCIgfCBcImxlbmd0aFwiIHwgXCJhbmdsZVwiIHwgXCJ0aW1lXCIgfCBcImZyZXF1ZW5jeVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQXR0clVuaXRLZXl3b3JkID0gUGVyY2VudFVuaXRzIHwgTGVuZ3RoVW5pdHMgfCBUaW1lVW5pdHMgfCBBbmdsZVVuaXRzIHwgUmVzb2x1dGlvblVuaXRzIHwgRnJlcXVlbmN5VW5pdHM7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXZWIgTmFtZXNwYWNlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFdlYk5hbWVzcGFjZXMgY2xhc3MgY29udGFpbnMgaWRlbnRpZmllcnMgZm9yIHRoZSBrbm93biBXZWItcmVsYXRlZCBuYW1lc3BhY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYk5hbWVzcGFjZXNcclxue1xyXG5cdHN0YXRpYyByZWFkb25seSBIVE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFNWRyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWExpbmsgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IE1hdGhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=