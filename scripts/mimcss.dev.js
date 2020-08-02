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
exports.serializeToCSS = exports.createCssSerializer = exports.classes = exports.enableShortNames = exports.$embed = exports.$use = exports.$media = exports.$supports = exports.$page = exports.$namespace = exports.$fontface = exports.$import = exports.$gridarea = exports.$gridline = exports.$counter = exports.$var = exports.$keyframes = exports.$style = exports.$id = exports.$classname = exports.$class = exports.$abstract = void 0;
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
 * Creates new class name rule, which combines one or more other class names. This creates a
 * "synonym" that is easier to apply to an element's class attribute than an array of two or
 * more clas rules.
 */
function $classname(...classes) {
    return new MiscRules_1.ClassNameRule(classes);
}
exports.$classname = $classname;
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
exports.ClassNameRule = exports.PageRule = exports.FontFaceRule = exports.NamespaceRule = exports.ImportRule = void 0;
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
/**
 * The PageRule class represents the CSS @page rule.
 */
class ClassNameRule extends Rule_1.RuleLike {
    constructor(classes) {
        super();
        this.classes = classes;
    }
    // Creates a copy of the rule.
    clone() {
        return new ClassNameRule(this.classes);
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        this.name = this.classes.map(cls => typeof cls === "string" ? cls : cls.name).join(" ");
        this.cssClassName = "." + this.classes.map(cls => typeof cls === "string" ? cls : cls.name).join(".");
    }
    /**
     * This function allows the object to particpate in "valueToString" serialization. Whenever
     * the ClassNameRule object is encountered by the `UtilFunc.valueToString` function,
     * the rule's CSS name (the one with the dots) will be used.
     */
    valueToString() {
        return this.cssClassName;
    }
    // Implementation of the toString method returns the combined name of the classes (without
    // the CSS prefixes).
    toString() {
        return this.name;
    }
}
exports.ClassNameRule = ClassNameRule;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU2NoZWR1bGluZ0FQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1N0eWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvVXRpbEFQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvbWltY3NzVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0FuaW1hdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0NvdW50ZXJSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JpZFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2NoZWR1bGluZy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ltYWdlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9NZWRpYUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU2VsZWN0b3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNB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ZmlsZSI6Im1pbWNzcy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvbWltY3NzVHlwZXMuanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBDb2xvclR5cGVzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCAqIGFzIENvbG9yRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9Db2xvckZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciB3aXRoXHJcbiAqIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGIgQmx1ZSBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLnJnYlRvU3RyaW5nKCByLCBnLCBiLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIEh1ZSBjb21wb25lbnQgaXMgdHJlYXRlZCBhcyB0aGUgQ1NTIGA8YW5nbGU+YCB0eXBlLiBOdW1iZXJzIGFyZSBjb25zaWRlcmVkIGRlZ3JlZXMuXHJcbiAqIFxyXG4gKiBUaGUgU2F0dXJhdGlvbiBhbmQgTGlnaHRuZXNzIGNvbXBvbmVudHMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZXM6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICpcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhPzogbnVtYmVyKTogQ29sb3JUeXBlcy5JQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5oc2xUb1N0cmluZyggaCwgcywgbCwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoIGM6IG51bWJlciB8IGtleW9mIENvbG9yVHlwZXMuSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIGMsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RXh0ZW5kZWQsIENzc1Bvc2l0aW9uLCBDc3NBbmdsZSwgQ3NzTGVuZ3RofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcbiAgICBHcmFkaWVudFN0b3BPckhpbnQsIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIExpbmVhckdyYWRBbmdsZSxcclxuICAgIENyb3NzRmFkZVBhcmFtLCBJSW1hZ2VQcm94eSwgUmFkaWFsR3JhZGllbnRTaGFwZSwgUmFkaWFsR3JhZGllbnRTaXplLCBcclxuICAgIElHcmFkaWVudCwgSUxpbmVhckdyYWRpZW50LCBJUmFkaWFsR3JhZGllbnQsIElDb25pY0dyYWRpZW50XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9JbWFnZVR5cGVzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHt2YWwyc3RyLCBJTnVtYmVyQmFzZU1hdGhDbGFzcywgQ3NzQW5nbGVNYXRoLCBwb3Myc3RyLCBDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHsgRXh0ZW50S2V5d29yZCB9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyYWRpZW50IGNsYXNzIGltcGxlbWVudHMgdGhlIElHcmFkaWVudCBpbnRlcmZhY2UgdXNpbmcgcHJvcGVydHkgZ2V0IGFjY2Vzc29yLCB3aGNpaCBhbGxvd3NcclxuICogY3JlYXRlaW5nIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBhcHByb3ByaWVudCBncmFkaWVudCBpbnRlcmZhY2UuIFdlIG5lZWQgbmV3IGluc3RhbmNlcywgYmVjYXVzZVxyXG4gKiB0aGUgZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGVzZSBjYWxsYWJsZSBpbnRlcmZhY2VzIGtlZXAgb3B0aW9uYWwgcGFyYW1ldGVycyBhcyBwcm9wZXJ0aWVzIG9mXHJcbiAqIHRoZSBmdWNudGlvbiBvYmplY3RzIHRoZW1zZWx2ZXMuXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudCBpbXBsZW1lbnRzIElHcmFkaWVudFxyXG57XHJcbiAgICBwdWJsaWMgZ2V0IGxpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcImxpbmVhci1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdMaW5lYXIoKTogSUxpbmVhckdyYWRpZW50IHsgcmV0dXJuIGxpbmVhckdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJhZGlhbC1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdSYWRpYWwoKTogSVJhZGlhbEdyYWRpZW50IHsgcmV0dXJuIHJhZGlhbEdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcImNvbmljLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0NvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1jb25pYy1ncmFkaWVudFwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JhZGllbnQgdmFyaWFibGUgcHJvdmlkZXMgYWNjZXNzIHRvIGZ1bmN0aW9ucyBpbXBsZW1lbnRpbmcgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGxldCBncmFkaWVudDogSUdyYWRpZW50ID0gbmV3IEdyYWRpZW50KCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlKCAuLi5hcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogSUltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJTGluZWFyR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGxpbmVyLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWxpbmVyLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gbGluZWFyR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJTGluZWFyR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSk7XHJcblxyXG5cdGYudG8gPSAoYW5nbGU6IExpbmVhckdyYWRBbmdsZSkgPT4ge1xyXG4gICAgICAgIGYuYW5nbGVQYXJhbSA9IGFuZ2xlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG4gICAgXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSVJhZGlhbEdyYWRpZW50IGludGVyZmFjZSBmb3IgZWl0aGVyIGByYWRpYWwtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJUmFkaWFsR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuc2hhcGVQYXJhbSwgZi5zaXplUGFyYW0sIGYucG9zUGFyYW0pO1xyXG5cclxuICAgIGYuY2lyY2xlID0gKHNpemVPckV4dGVudD86IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiY2lyY2xlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZWxsaXBzZSA9IChzaXplT3JFeHRlbnQ/OiBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiZWxsaXBzZVwiO1xyXG4gICAgICAgIGYuc2l6ZVBhcmFtID0gc2l6ZU9yRXh0ZW50O1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRmLmV4dGVudCA9IChleHRlbnQ6IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBleHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zOyByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSUNvbmljR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGNvbmljLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gY29uaWNHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElDb25pY0dyYWRpZW50XHJcbntcclxuICAgIGxldCBmOiBhbnkgPSAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5ID0+XHJcbiAgICAgICAgKCkgPT4gY29uaWNHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSwgZi5wb3NQYXJhbSk7XHJcblxyXG5cdGYuZnJvbSA9IChhbmdsZTogTGluZWFyR3JhZEFuZ2xlKSA9PiB7XHJcbiAgICAgICAgZi5hbmdsZVBhcmFtID0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBhbmdsZT86IExpbmVhckdyYWRBbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKGFuZ2xlKVxyXG4gICAge1xyXG4gICAgICAgIGFuZ2xlU3RyaW5nID0gdmFsMnN0ciggYW5nbGUsIHtcclxuICAgICAgICAgICAgZnJvbU51bWJlcjogQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLFxyXG4gICAgICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IC9cXGQrLiovLnRlc3QodikgPyB2IDogXCJ0byBcIiArIHZcclxuICAgICAgICB9KSArIFwiLFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuYW1lfSgke2FuZ2xlU3RyaW5nfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NQZXJjZW50TWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgc2hhcGU6IFJhZGlhbEdyYWRpZW50U2hhcGUsIHNpemVPckV4dGVudDogUmFkaWFsR3JhZGllbnRTaXplIHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4sXHJcbiAgICBwb3M6IENzc1Bvc2l0aW9uKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzaGFwZVN0cmluZyA9IHNoYXBlID8gc2hhcGUgOiBcIlwiO1xyXG4gICAgbGV0IHNpemVPckV4dGVudFN0cmluZyA9IHNpemVPckV4dGVudCA/IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBzaXplT3JFeHRlbnQsIFwiIFwiKSA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBzaGFwZSB8fCBzaXplT3JFeHRlbnRTdHJpbmcgfHwgcG9zID8gYCR7c2hhcGVTdHJpbmd9ICR7c2l6ZU9yRXh0ZW50U3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBwb3M/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFuZ2xlU3RyaW5nID0gYW5nbGUgPyBgZnJvbSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSl9YCA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBhbmdsZSB8fCBwb3MgPyBgJHthbmdsZVN0cmluZ30gJHtwb3NTdHJpbmd9LGAgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NBbmdsZU1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBwYXJhbXNTdHJpbmcgPSB2YWwyc3RyKCBhcmdzLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGNyb3NzRmFkZVBhcmFtVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbC5tYXAoIHYgPT4gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmcoIHYsIG1hdGhDbGFzcykpLmpvaW4oXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50U3RvcE9ySGludCxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHYubGVuZ3RoID09PSAwID8gXCJcIiA6IHYubGVuZ3RoID09PSAxID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZbMF0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2IGFzIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIG1hdGhDbGFzcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2Vjb25kU3RvcCA9IHZhbC5sZW5ndGggPiAyID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsyXSkgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke2NvbG9yVG9TdHJpbmcodmFsWzBdKX0gJHttYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzFdKX0gJHtzZWNvbmRTdG9wfWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbDJzdHIodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgQ29tYmluZWRTdHlsZXNldCwgSVN0eWxlUnVsZSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgQW5pbWF0aW9uRnJhbWUsIElBbmltYXRpb25SdWxlLCBJVmFyUnVsZSxcclxuICAgIElDb3VudGVyUnVsZSwgSUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZSwgSUltcG9ydFJ1bGUsIElGb250RmFjZVJ1bGUsIElOYW1lc3BhY2VSdWxlLFxyXG4gICAgSVBhZ2VSdWxlLCBTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzcywgSVN1cHBvcnRzUnVsZSwgSU1lZGlhUnVsZSwgSUNsYXNzTmFtZVJ1bGVcclxufSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7cHJvY2Vzc0luc3RhbmNlT3JDbGFzcywgc19lbmFibGVTaG9ydE5hbWVzLCBzZXJpYWxpemVJbnN0YW5jZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtFeHRlbmRlZH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge0Nzc1NlbGVjdG9yLCBQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7SUZvbnRGYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFJ1bGUsIENsYXNzUnVsZSwgSURSdWxlLCBTZWxlY3RvclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9TdHlsZVJ1bGVzXCJcclxuaW1wb3J0IHtBbmltYXRpb25SdWxlfSBmcm9tIFwiLi4vcnVsZXMvQW5pbWF0aW9uUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIlxyXG5pbXBvcnQge0NvdW50ZXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvQ291bnRlclJ1bGVzXCI7XHJcbmltcG9ydCB7R3JpZExpbmVSdWxlLCBHcmlkQXJlYVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9HcmlkUnVsZXNcIjtcclxuaW1wb3J0IHtGb250RmFjZVJ1bGUsIEltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGUsIFBhZ2VSdWxlLCBDbGFzc05hbWVSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGUsIE1lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyb3VwUnVsZXNcIlxyXG5pbXBvcnQge3ZhbDJzdHJ9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7SVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFic3RyYWN0IHJ1bGUsIHdoaWNoIGRlZmluZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBiZSBleHRlbmRlZCBieSBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy4gQWJzdHJhY3QgcnVsZXMgZG9uJ3QgaGF2ZSBzZWxlY3RvcnMgYW5kIGFyZSBub3QgaW5zZXJ0ZWQgaW50byBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFic3RyYWN0KCBzdHlsZTogQ29tYmluZWRTdHlsZXNldCk6IElTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG4gICAgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlKTogSUNsYXNzUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY2xhc3MgbmFtZSBydWxlLCB3aGljaCBjb21iaW5lcyBvbmUgb3IgbW9yZSBvdGhlciBjbGFzcyBuYW1lcy4gVGhpcyBjcmVhdGVzIGFcclxuICogXCJzeW5vbnltXCIgdGhhdCBpcyBlYXNpZXIgdG8gYXBwbHkgdG8gYW4gZWxlbWVudCdzIGNsYXNzIGF0dHJpYnV0ZSB0aGFuIGFuIGFycmF5IG9mIHR3byBvclxyXG4gKiBtb3JlIGNsYXMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNsYXNzbmFtZSggLi4uY2xhc3NlczogKElDbGFzc1J1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IHN0cmluZylbXSk6IElDbGFzc05hbWVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzTmFtZVJ1bGUoIGNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgSUQgcnVsZS4gVGhlIElEIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2ZcclxuICogdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdFxyXG4gKiBuYW1lIG9yIGFub3RoZXIgSUQgcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG8gXCJkZWNsYXJlXCJcclxuICogdGhlIElELiBTdWNoIElEIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaWQoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUlEUnVsZSk6IElJRFJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHNlbGVjdG9yIHJ1bGUuIFNlbGVjdG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcgb3IgdmlhIHRoZSBzZWxlY3RvciBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3R5bGUoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU6IENvbWJpbmVkU3R5bGVzZXQpOiBJU3R5bGVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKTogSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQW5pbWF0aW9uUnVsZSggZnJhbWVzLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY3VzdG9tIHZhcmlhYmxlIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBUaGUgdmFyaWFibGUgbmFtZSB3aWxsXHJcbiAqIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlXHJcbiAqIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjdXN0b20gdmFyaWFibGUgcnVsZS4gVGhlXHJcbiAqIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSB2YWx1ZSBqdXN0IHRvIFwiZGVjbGFyZVwiIHRoZSB2YXJpYWJsZS4gU3VjaFxyXG4gKiB2YXJpYWJsZSBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdGVtcGxhdGU6IEssIHByb3BWYWw/OiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRcdFx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz4pOiBJVmFyUnVsZTxLPlxyXG57XHJcblx0cmV0dXJuIG5ldyBWYXJSdWxlKCB0ZW1wbGF0ZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGNvdW50ZXIgb2JqZWN0LiBUaGUgY291bnRlciBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGNvdW50ZXIgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY291bnRlciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKTogSUNvdW50ZXJSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBsaW5lIG9iamVjdC4gVGhlIGxpbmUgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGxpbmUgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGxpbmUoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUsXHJcbiAgICBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbik6IElHcmlkTGluZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgR3JpZExpbmVSdWxlKCBuYW1lT3ZlcnJpZGUsIGlzU3RhcnRFbmRPck5vbmUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBhcmVhIG9iamVjdC4gVGhlIGFyZWEgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGFyZWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGFyZWEoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGUpOiBJR3JpZEFyZWFSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEdyaWRBcmVhUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSk6IElJbXBvcnRSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHVybCwgbWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBmb250LWZhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZm9udGZhY2UoIGZvbnRmYWNlOiBJRm9udEZhY2UpOiBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggZm9udGZhY2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG5hbWVzcGFjZSggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIG5hbWVzcGFjZSwgcHJlZml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcGFnZSggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpOiBJUGFnZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgUGFnZVJ1bGUoIHBzZXVkb0NsYXNzLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzdXBwb3J0czxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggcXVlcnk6IFN1cHBvcnRzUXVlcnksXHJcbiAgICBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgaW5zdE9yQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbWVkaWE8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LFxyXG4gICAgaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IE1lZGlhUnVsZSggcXVlcnksIGluc3RPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBjcmVhdGVzIHVuaXF1ZSBuYW1lcyBmb3IgYWxsIG5hbWVkXHJcbiAqIGVudGl0aWVzLiBGb3IgYSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9ubHkgYSBzaW5nbGUgaW5zdGFuY2UgaXMgY3JlYXRlZCwgbm8gbWF0dGVyIGhvd1xyXG4gKiBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZC4gSG93ZXZlciwgaWYgYW4gaW5zdGFuY2UsIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gcHJvY2Vzc2VkLFxyXG4gKiBpcyBwYXNzZWQsIHRoZW4gYSBuZXcgc2V0IG9mIHVuaXF1ZSBuYW1lcyB3aWxsIGJlIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR1c2U8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdHJldHVybiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzcykgYXMgVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW1iZWRzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGludG8gYW5vdGhlciBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC4gV2hlbiBhY3RpdmF0ZWQsXHJcbiAqIHRoZSBlbWJlZGRlZCBvYmplY3QgZG9lc24ndCBjcmVhdGUgaXRzIG93biBgPHN0eWxlPmAgZWxlbWVudCBidXQgdXNlcyB0aGF0IG9mIGl0cyBvd25lci4gVGhpc1xyXG4gKiBhbGxvd3MgY3JlYXRpbmcgbWFueSBzbWFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgaW5zdGVhZCBvZiBvbmUgaHVnZSBvbmUgd2l0aG91dCBpbmN1cnJpbmdcclxuICogdGhlIG92ZXJoZWFkIG9mIG1hbnkgYDxzdHlsZT5gIGVsZW1lbnRzLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IGFzIG9wcG9zZWQgdG8gdGhlICR1c2UgZnVuY3Rpb24sIHRoZSAkZW1iZWQgZnVuY3Rpb24gYWx3YXlzIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2ZcclxuICogdGhlIGdpdmVuIGNsYXNzIGFuZCBkb2Vzbid0IGFzc29jaWF0ZSB0aGUgY2xhc3Mgd2l0aCB0aGUgY3JlYXRlZCBpbnN0YW5jZS4gVGhhdCBtZWFucyB0aGF0IGlmXHJcbiAqIGEgY2xhc3MgaXMgZW1iZWRkZWQgaW50byBtb3JlIHRoYW4gb25lIFwib3duZXJcIiwgdHdvIHNlcGFyYXRlIGluc3RhbmNlcyBvZiBlYWNoIENTUyBydWxlIHdpbGwgYmVcclxuICogY3JlYXRlZCB3aXRoIGRpZmZlcmVudCB1bmlxdWUgbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGVtYmVkPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHQvLyByZXR1cm4gZGVmaW5pdGlvbiBpbnN0YW5jZSB3aXRob3V0IHByb2Nlc3NpbmcgaXQuIFRoaXMgaXMgdGhlIGluZGljYXRpb24gdGhhdCB0aGUgZGVmaW50aW9uXHJcblx0Ly8gd2lsbCBiZSBlbWJlZGRlZCBpbnRvIGFub3RoZXIgZGVmaW5pdGlvbi5cclxuXHRyZXR1cm4gaW5zdE9yQ2xhc3MgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24gPyBpbnN0T3JDbGFzcyA6IG5ldyBpbnN0T3JDbGFzcygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRyZXR1cm4gc19lbmFibGVTaG9ydE5hbWVzKCBlbmFibGUsIHByZWZpeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyB0aGUgbmFtZXMgb2YgdGhlIGdpdmVuIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gYVxyXG4gKiBgY2xhc3NgIHByb3BlcnR5IG9mIGFuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGNsYXNzZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKCAuLi5jbGFzc2VzOiAoSUNsYXNzUnVsZSB8IEV4dGVuZGVkPHN0cmluZz4pW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWwyc3RyKCBjbGFzc2VzLCB7XHJcblx0XHRhcnJJdGVtRnVuYzogdiA9PiB2IGluc3RhbmNlb2YgQ2xhc3NSdWxlID8gdi5uYW1lIDogdmFsMnN0cih2KVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW50ZXJmYWNlIGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBvYmplY3RzXHJcbiAqIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzU2VyaWFsaXplclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgYWRkKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgY29uY2F0ZW5hdGVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhbGwgQ1NTIHJ1bGVzIGFkZGVkIHRvIHRoZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBzZXJpYWxpemUoKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IElDc3NTZXJpYWxpemVyIG9iamVjdCB0aGF0IGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzXHJcbiAqIGFuZCBpbnN0YW5jZXMgYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzdHJpbmcuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuXHJcbiAqIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZSBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDc3NTZXJpYWxpemVyKCk6IElDc3NTZXJpYWxpemVyXHJcbntcclxuICAgIHJldHVybiBuZXcgQ3NzU2VyaWFsaXplcigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXJpYWxpemVzIG9uZSBvciBtb3JlIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgaW5zdGFuY2VzIGFuZCByZXR1cm5zIHRoZWlyIENTUyBzdHJpbmdcclxuICogcmVwcmVzZW50YXRpb24uIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZVxyXG4gKiBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVUb0NTUyggYXJnMTogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG4gICAgLi4uYXJnczogKFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcylbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2VyaWFsaXplciA9IG5ldyBDc3NTZXJpYWxpemVyKCk7XHJcbiAgICBzZXJpYWxpemVyLmFkZCggYXJnMSk7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxyXG4gICAgICAgIGFyZ3MuZm9yRWFjaCggaW5zdE9yQ2xhc3MgPT4gc2VyaWFsaXplci5hZGQoIGluc3RPckNsYXNzKSk7XHJcblxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZXIuc2VyaWFsaXplKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNlcmlhbGl6ZXIgY2xhc3MgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIG9iamVjdHNcclxuICogYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5jbGFzcyBDc3NTZXJpYWxpemVyIGltcGxlbWVudHMgSUNzc1NlcmlhbGl6ZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoIGluc3RPckNsYXNzOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3MpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UgfHwgdGhpcy5pbnN0YW5jZXMuaGFzKGluc3RhbmNlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5hZGQoIGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgY29uY2F0ZW5hdGVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhbGwgQ1NTIHJ1bGVzIGFkZGVkIHRvIHRoZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBjdHggPSBuZXcgUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCggaW5zdGFuY2UgPT4gY3R4LmFkZFN0eWxlRGVmaW5pdGlvbiggaW5zdGFuY2UpKTtcclxuICAgICAgICByZXR1cm4gY3R4LnRvcExldmVsQnVmICsgY3R4Lm5vblRvcExldmVsQnVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBvZiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlcy4gVGhpcyBpcyBuZWVkZWQgdG8gbm90IGFkZCBzdHlsZSBkZWZpbml0aW9ucyBtb3JlIHRoYW4gb25jZVxyXG4gICAgaW5zdGFuY2VzID0gbmV3IFNldDxTdHlsZURlZmluaXRpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNlcmlhbGl6ZXIgY2xhc3MgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIG9iamVjdHNcclxuICogYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5jbGFzcyBSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW1wbGVtZW50cyBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0XHJcbntcclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBwdWJsaWMgYWRkUnVsZVRleHQoIHM6IHN0cmluZywgaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpc1RvcExldmVsUnVsZSlcclxuICAgICAgICAgICAgdGhpcy50b3BMZXZlbEJ1ZiArPSBzICsgXCJcXG5cIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9uVG9wTGV2ZWxCdWYgKz0gcyArIFwiXFxuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIHB1YmxpYyBhZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlcy5oYXMoIGluc3RhbmNlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLmFkZCggaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBzZXJpYWxpemVJbnN0YW5jZSggaW5zdGFuY2UsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdHJpbmcgYnVmZmVyIHRoYXQgYWNjdW11bGF0ZXMgdG9wLWxldmVsIHJ1bGUgdGV4dHMuXHJcbiAgICBwdWJsaWMgdG9wTGV2ZWxCdWYgPSBcIlwiO1xyXG5cclxuICAgIC8vIFN0cmluZyBidWZmZXIgdGhhdCBhY2N1bXVsYXRlcyBub24tdG9wLWxldmVsIHJ1bGUgdGV4dHMuXHJcbiAgICBwdWJsaWMgbm9uVG9wTGV2ZWxCdWYgPSBcIlwiO1xyXG5cclxuICAgIC8vIFNldCBvZiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlcyB0aGF0IHdlcmUgYWxyZWFkeSBzZXJpYWxpemVkIGluIHRoaXMgY29udGV4dC5cclxuICAgIHByaXZhdGUgaW5zdGFuY2VzID0gbmV3IFNldDxTdHlsZURlZmluaXRpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzcywgSVNjaGVkdWxlcn0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge3Byb2Nlc3NJbnN0YW5jZU9yQ2xhc3N9IGZyb20gXCIuLi9ydWxlcy9SdWxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzX3NjaGVkdWxlQ2FsbCwgc19zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSwgc19nZXREZWZhdWx0U2NoZWR1bGVyVHlwZSxcclxuICAgIElBY3RpdmF0b3IsIHNfcmVnaXN0ZXJTY2hlZHVsZXIsIHNfdW5yZWdpc3RlclNjaGVkdWxlclxyXG59IGZyb20gXCIuLi9ydWxlcy9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWZcclxuICogdGhlIGlucHV0IG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2UgYnV0IGEgY2xhc3MsIHdoaWNoIGlzIG5vdCB5ZXQgYXNzb2NpYXRlZCB3aXRoIGFuIGluc3RhbmNlLFxyXG4gKiB0aGUgaW5zdGFuY2UgaXMgZmlyc3QgY3JlYXRlZCBhbmQgcHJvY2Vzc2VkLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG1haW50YWluc1xyXG4gKiBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkXHJcbiAqIGludG8gRE9NIG9ubHkgdXBvbiBmaXJzdCBhY3RpdmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPixcclxuXHRzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogVCB8IG51bGxcclxue1xyXG5cdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RhbmNlT3JDbGFzcykgYXMgVDtcclxuXHRpZiAoaW5zdGFuY2UpXHJcblx0XHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmFjdGl2YXRlKCBpbnN0YW5jZSksIHNjaGVkdWxlclR5cGUpO1xyXG5cclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlYWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIGJ5IHJlbW92aW5nIGl0cyBydWxlcyBmcm9tIERPTS4gTm90ZSB0aGF0IGVhY2hcclxuICogc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmRlYWN0aXZhdGUoIGluc3RhbmNlKSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyB0byBET00gYWxsIHN0eWxlIGNoYW5nZXMgY2F1c2VkIGJ5IHRoZSBjYWxscyB0byB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zXHJcbiAqIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0IGFjdGl2YXRpb24gb2YgdGhlIGdpdmVuIHNjaGVkdWxpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JjZURPTVVwZGF0ZSggc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuZm9yY2VET01VcGRhdGUoKSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYWxsIHNjaGVkdWxlZCBhY3RpdmF0aW9ucyBjYXVzZWQgYnkgdGhlIGNhbGxzIHRvIHRoZSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnNcclxuICogYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3QgYWN0aXZhdGlvbiBvZiB0aGUgZ2l2ZW4gc2NoZWR1bGluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbERPTVVwZGF0ZSggc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuY2FuY2VsRE9NVXBkYXRlKCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBkZWZhdWx0IHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxlciB0eXBlIHBhcmFtZXRlci4gUmV0dXJucyB0aGUgdHlwZSBvZlxyXG4gKiB0aGUgcHJldmlvdXMgZGVmYXVsdCBzY2hlZHVsZXIgb3IgMCBpZiBhbiBlcnJvciBvY2N1cnMgKGUuZy4gdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIElEIGlzIG5vdFxyXG4gKiByZWdpc3RlcmVkKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZTogbnVtYmVyKTogbnVtYmVyXHJcbntcclxuXHRyZXR1cm4gc19zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIGJ5IGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyB0aGF0IGFyZVxyXG4gKiBjYWxsZWQgd2l0aG91dCBleHBsaWNpdGx5IHByb3ZpZGluZyB2YWx1ZSB0byB0aGUgc2NoZWR1bGVyIHR5cGUgcGFyYW1ldGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzY2hlZHVsZXIgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLCB3aGljaFxyXG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXI6IElTY2hlZHVsZXIpOiBudW1iZXJcclxue1xyXG4gICAgcmV0dXJuIHNfcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFVucmVnaXN0ZXJzIGEgc2NoZWR1bGVyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJTY2hlZHVsZXIoIGlkOiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHJldHVybiBzX3VucmVnaXN0ZXJTY2hlZHVsZXIoIGlkKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgQ3NzTGVuZ3RoLCBDc3NQZXJjZW50LCBDc3NBbmdsZSwgQ3NzTnVtYmVyLCBPbmVPckJveCwgQ3NzUG9pbnR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtTZWxlY3Rvckl0ZW0sIElTZWxlY3RvclByb3h5fSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuXHRTdHlsZXNldCwgRXh0ZW5kZWRTdHlsZXNldCwgU3RyaW5nU3R5bGVzZXQsIEV4dGVudEtleXdvcmQsIElGaWx0ZXJQcm94eSwgSUJhc2ljU2hhcGVQcm94eSxcclxuXHRJVHJhbnNmb3JtUHJveHksIEJvcmRlclJhZGl1c19TdHlsZVR5cGUsIEZpbGxSdWxlX1N0eWxlVHlwZSwgSVBhdGhCdWlsZGVyLCBJUmF5UHJveHksXHJcblx0SUZpdENvbnRlbnRQcm94eSwgSVJlcGVhdFByb3h5LCBJTWluTWF4UHJveHksIEdyaWRUcmFja1NpemUsIEdyaWRUcmFjaywgSVNwYW5Qcm94eSwgR3JpZExpbmVDb3VudE9yTmFtZVxyXG59IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7XHJcblx0c3R5bGVQcm9wVG9TdHJpbmcsIHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LCBib3JkZXJSYWRpdXNUb1N0cmluZywgZm9yQWxsUHJvcHNJblN0eWxzZXQsIGdyaWRUcmFja1RvU3RyaW5nXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aCwgYXJyMnN0ciwgQ3NzQW5nbGVNYXRoLCBDc3NOdW1iZXJNYXRoLCBwb3Myc3RyLFxyXG5cdHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcsIHZhbDJzdHJcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQge3Nfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlfSBmcm9tIFwiLi4vcnVsZXMvU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLiBUaGlzIGZ1bmN0aW9uIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0IGJlXHJcbiAqIGludm9rZWQgd2l0aCB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3IoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBTZWxlY3Rvckl0ZW1bXSk6IElTZWxlY3RvclByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3R5bGVzZXQgbWFuaXB1bGF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIGEgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcE5hbWUgU3R5bGUgcHJvcGVydHkgbmFtZSB0aGF0IGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkXHJcbiAqIHRvIGEgQ1NTIGNvbXBsaWFudCBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BWYWx1ZSBWYWx1ZSB0byBjb252ZXJ0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcFZhbHVlPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0Piggc3R5bGVQcm9wTmFtZTogSyxcclxuXHRzdHlsZVByb3BWYWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHN0eWxlUHJvcFRvU3RyaW5nKCBzdHlsZVByb3BOYW1lLCBzdHlsZVByb3BWYWx1ZSwgdHJ1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdmFsdWVzIG9mIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGZyb20gdGhlIGdpdmVuIFN0eWxlc2V0IG9iamVjdCB0byB0aGUgYHN0eWxlYCBhdHRyaWJ1dGVcclxuICogb2YgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSBIVE1MIGVsZW1lbnQgd2hvc2Ugc3R5bGVzIHdpbGwgYmUgc2V0LlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgU3R5bGVzZXQgb2JqZWN0IHdoaWNoIHByb3ZpZGVzIHZhbHVlcyBmb3Igc3R5bGUgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbGVtZW50U3R5bGUoIGVsbTogSFRNTEVsZW1lbnQsIHN0eWxlc2V0OiBTdHlsZXNldCB8IG51bGwgfCB1bmRlZmluZWQsXHJcblx0c2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG4gICAgc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG0sIHN0eWxlc2V0ID8gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KHN0eWxlc2V0KSA6IG51bGwsIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHJpbmdTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0cmluZ1N0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3RyaW5nU3R5bGVzZXQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG5cdHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCBlbG0sIG51bGwsIHN0eWxlc2V0LCBmYWxzZSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBbW1N0eWxlc2V0XV0gb2JqZWN0IGludG8gYW4gb2JqZWN0LCB3aGVyZSBlYWNoIFN0eWxlc2V0J3MgcHJvcGVydHkgaXNcclxuICogY29udmVydGVkIHRvIGl0cyBzdHJpbmcgdmFsdWUuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIHN0eWxlc2V0OiBTdHlsZXNldCk6IFN0cmluZ1N0eWxlc2V0XHJcbntcclxuXHRsZXQgcmVzOiBTdHJpbmdTdHlsZXNldCA9IHt9O1xyXG5cclxuXHRmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQsXHJcblx0XHQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7IHJlc1tuYW1lXSA9IHZhbHVlIH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyB0d28gU3R5bGVzZXQgb2JqZWN0cyBieSBjb252ZXJ0aW5nIHN0eWxlIHByb3BlcnRpZXMgdG8gc3RyaW5ncyBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuICogdGhhdCBjb250YWlucyBzdHJpbmcgdmFsdWVzIG9mIHByb3BlcnRpZXMgdGhhdCB3ZXJlIG5ldyBvciBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG5ld1xyXG4gKiBzdHlsZXNldCBhbmQgdW5kZWZpbmVkIHZhbHVlcyBmb3IgcHJvcGVydGllcyB0aGF0IGV4aXN0IGluIHRoZSBvbGQgc3R5bGVzZXQgYnV0IGRvbid0IGV4aXN0XHJcbiAqIGluIHRoZSBuZXcgb25lLlxyXG4gKiBAcGFyYW0gb2xkU3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBuZXdTdHlsZXNldCBcclxuICogQHJldHVybnMgU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IGhhdmUgZGlmZmVyZW50IHZhbHVlcyBpbiB0aGUgb2xkIGFuZCBuZXdcclxuICogc3R5bGVzZXRzLiBQcm9wZXJ0aWVzIHRoYXQgZXhpc3RlZCBpbiB0aGUgb2xkIGJ1dCBkb24ndCBleGlzdCBpbiB0aGUgbmV3IHN0eWxlc2V0LCB3aWxsIGhhdmVcclxuICogdGhlaXIgdmFsdWVzIHNldCB0byB1bmRlZmluZWQuIElmIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIHR3byBzdHlsZXNldHMgbnVsbCBpc1xyXG4gKiByZXR1cm5lZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmU3R5bGVzZXRzKCBvbGRTdHlsZXNldDogU3R5bGVzZXQsIG5ld1N0eWxlc2V0OiBTdHlsZXNldCk6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbFxyXG57XHJcblx0aWYgKCFvbGRTdHlsZXNldCAmJiAhbmV3U3R5bGVzZXQpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghb2xkU3R5bGVzZXQpXHJcblx0XHRyZXR1cm4gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBuZXdTdHlsZXNldCk7XHJcblx0ZWxzZSBpZiAoIW5ld1N0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggb2xkU3R5bGVzZXQpO1xyXG5cclxuXHQvLyBmaXJzdCBjb252ZXJ0IGJvdGggc3R5bGVzZXRzIHRvIHRoZWlyIHN0cmluZyB2ZXJzaW9uc1xyXG5cdGxldCBvbGRTdHJpbmdTdHlsZXNldCA9XHRzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG9sZFN0eWxlc2V0KTtcclxuXHRsZXQgbmV3U3RyaW5nU3R5bGVzZXQgPVx0c3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBuZXdTdHlsZXNldCk7XHJcblxyXG5cdGxldCB1cGRhdGVWYWw6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBvbGQgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgbmV3IG9uZS4gVGhlc2VcclxuXHQvLyB3aWxsIGJlIHJlbW92ZWQuXHJcblx0Zm9yKCBsZXQga2V5IGluIG9sZFN0cmluZ1N0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGxldCBuZXdTdHJpbmdWYWwgPSBuZXdTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0aWYgKG5ld1N0cmluZ1ZhbCA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb2xkU3RyaW5nVmFsID0gb2xkU3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdFx0aWYgKG9sZFN0cmluZ1ZhbCAhPT0gbmV3U3RyaW5nVmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gbmV3U3RyaW5nU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFN0cmluZ1ZhbCA9IG9sZFN0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRpZiAob2xkU3RyaW5nVmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVwZGF0ZVZhbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGaWx0ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydGluZyBwZXJjZW50IHZhbHVlIHRvIGludm9jYXRpb24gb2YgdGhlIGdpdmVuIENTUyBmdW5jdGlvbi5cclxuZnVuY3Rpb24gcGVyY2VudEZpbHRlciggbmFtZTogc3RyaW5nLCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGFtb3VudCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJyaWdodG5lc3MoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJyaWdodG5lc3MoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiYnJpZ2h0bmVzc1wiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjb250cmFzdCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udHJhc3QoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiY29udHJhc3RcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZ3JheXNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmF5c2NhbGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiZ3JheXNjYWxlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGludmVydCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImludmVydFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBvcGFjaXR5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcIm9wYWNpdHlcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2F0dXJhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdHVyYXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcInNhdHVyYXRlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNlcGlhKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXBpYSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzZXBpYVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBibHVyKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBibHVyKCByYWRpdXM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBibHVyKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCByYWRpdXMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBkcm9wU2hhZG93KClgIENTUyBmdW5jdGlvbi5cclxuICogQHBhcmFtIHggSG9yaXpvbnRhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIHkgVmVydGljYWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gYmx1ciBWYWx1ZSBvZiB0aGUgc2hhZG93J3MgYmx1cnJpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEgcGl4ZWwuXHJcbiAqIEBwYXJhbSBzcHJlYWQgVmFsdWUgb2YgdGhlIHNoYWRvdydzIHNwcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGluc2V0IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzaGFkb3cgZ29lcyBpbnNpZGUgdGhlIHNoYXBlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wU2hhZG93KFxyXG4gICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIGJsdXI/OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgc3ByZWFkPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElGaWx0ZXJQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGBkcm9wLXNoYWRvdygke3NpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0KCB7IHgsIHksIGNvbG9yLCBibHVyLCBzcHJlYWR9KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaHVlLXJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHVlUm90YXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGh1ZS1yb3RhdGUoJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHNoYXBlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnNldCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXQoIG9mZnNldDogRXh0ZW5kZWQ8T25lT3JCb3g8Q3NzTGVuZ3RoPj4sIHJhZGl1cz86IEV4dGVuZGVkPEJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcblx0bGV0IHIgPSByYWRpdXMgIT0gbnVsbCA/IFwicm91bmQgXCIgKyBib3JkZXJSYWRpdXNUb1N0cmluZyggcmFkaXVzKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGluc2V0KCR7Q3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIG9mZnNldCwgXCIgXCIpfSR7cn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGlzIHVzZWQgdG8gc3BlY2lmeSBhIHJhZGl1cyBpbiBbW2NpcmNsZV1dIGFuZCBbW2VsbGlwc2VdXSBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaGFwZVJhZGl1cyA9IEV4dGVuZGVkPENzc0xlbmd0aCB8IFwiY2xvc2VzdC1zaWRlXCIgfCBcImZhcnRoZXN0LXNpZGVcIj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY2lyY2xlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGUoIGNlbnRlcj86IFNoYXBlUmFkaXVzLCBwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IGMgPSAgY2VudGVyICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoY2VudGVyKSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvczJzdHIoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGNpcmNsZSgke2N9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBlbGxpcHNlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHNlKCByeD86IFNoYXBlUmFkaXVzLCByeT86IFNoYXBlUmFkaXVzLFxyXG5cdHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgcnhzID0gIHJ4ICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocngpIDogXCJcIjtcclxuICAgIGxldCByeXMgPSAgcnkgIT0gbnVsbCA/IFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ5KSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvczJzdHIoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGVsbGlwc2UoJHtyeHN9JHtyeXN9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwb2x5Z29uKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKCBwb2ludE9yUnVsZTogQ3NzUG9pbnQgfCBGaWxsUnVsZV9TdHlsZVR5cGUsXHJcblx0Li4ucG9pbnRzOiBDc3NQb2ludFtdKTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcInBvbHlnb24oXCI7XHJcblx0XHRpZiAodHlwZW9mIHBvaW50T3JSdWxlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRzICs9IHBvaW50T3JSdWxlICsgXCIsXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHMgKz0gYCR7Q3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHBvaW50T3JSdWxlLCBcIiBcIil9LGA7XHJcblxyXG5cdFx0cyArPSBwb2ludHMubWFwKCBwdCA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggcHQsIFwiIFwiKSkuam9pbihcIixcIik7XHJcblxyXG5cdFx0cmV0dXJuIHMgKyBcIilcIjtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElSYXlQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByYXkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJheSggYW5nbGU6IEV4dGVuZGVkPENzc0FuZ2xlPiwgc2l6ZT86IEV4dGVuZGVkPEV4dGVudEtleXdvcmQgfCBDc3NMZW5ndGg+LFxyXG5cdGNvbnRhaW4/OiBib29sZWFuKTogSVJheVByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgYW5nbGVTdHJpbmcgPSBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpO1xyXG5cdFx0bGV0IHNpemVTdHJpbmcgPSBzaXplID0hIG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggc2l6ZSkgOiBcIlwiO1xyXG5cdFx0bGV0IGNvbnRhaW5TdHJpbmcgPSBjb250YWluID8gXCIsY29udGFpblwiIDogXCJcIjtcclxuXHRcdHJldHVybiBgcmF5KCR7YW5nbGVTdHJpbmd9JHtzaXplU3RyaW5nfSR7Y29udGFpblN0cmluZ30pYDtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElQYXRoQnVpbGRlciBpbnRlcmZhY2UgdGhhdCBhbGxvd3MgYnVpbGRpbmcgYSBDU1MgcGF0aC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoKCBmaWxsUnVsZT86IEZpbGxSdWxlX1N0eWxlVHlwZSk6IElQYXRoQnVpbGRlclxyXG57XHJcblx0cmV0dXJuIG5ldyBQYXRoQnVpbGRlciggZmlsbFJ1bGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhdGhCdWlsZGVyIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvYmplY3QgdGhhdCBhY2N1bXVsYXRlcyBwYXRoIGNvbW1hbmRzIHRoYXQgYXJlIHRoZW5cclxuICogY29udmVydGVkIHRvIGEgc3RyaW5nIHBhcmFtZXRlciBvZiB0aGUgQ1NTIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgUGF0aEJ1aWxkZXIgaW1wbGVtZW50cyBJUGF0aEJ1aWxkZXJcclxue1xyXG5cdHByaXZhdGUgYnVmOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5idWYgPSBcInBhdGgoXCI7XHJcblx0XHRpZiAoZmlsbFJ1bGUpXHJcblx0XHRcdHRoaXMuYnVmICs9IGZpbGxSdWxlICsgXCIsXCI7XHJcblxyXG5cdFx0dGhpcy5idWYgKz0gXCInXCI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCBzdHJpbmdcclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpIDogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYnVmICsgXCInKVwiOyB9XHJcblxyXG5cclxuXHRcclxuICAgIC8vIE1vdmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdHByaXZhdGUgaXRlbXMoIGNvbW1hbmQ6IHN0cmluZywgLi4uaXRlbXM6IChudW1iZXIgfCBudW1iZXJbXSlbXSk6IElQYXRoQnVpbGRlclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmICs9IFwiIFwiICsgY29tbWFuZDtcclxuXHJcblx0XHRmb3IoIGxldCBpdGVtIG9mIGl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodHlwZW9mIGl0ZW0gPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBpdGVtO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBzdWJJdGVtIG9mIGl0ZW0pXHJcblx0XHRcdFx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIHN1Ykl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBNKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJNXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIG0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIm1cIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBMKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJMXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImxcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBIKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJIXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImhcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBWKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJWXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIHYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInZcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBDKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJDXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBjKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJjXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgUyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJTXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBzKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInNcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBRKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIHEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwicVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlRcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgdCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwidFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIEEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiQVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgYSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJhXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgeigpIHsgdGhpcy5idWYgKz0gXCIgelwiOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRyYW5zZm9ybXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeCggYTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRkOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHk6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnIyc3RyKCBbYSwgYiwgYywgZCwgdHgsIHR5XSwgdW5kZWZpbmVkLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeDNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgzZChcclxuXHRcdGExOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzE6IEV4dGVuZGVkPENzc051bWJlcj4sIGQxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTI6IEV4dGVuZGVkPENzc051bWJlcj4sIGIyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDI6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjM6IEV4dGVuZGVkPENzc051bWJlcj4sIGMzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGE0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGQ0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdCk6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycjJzdHIoIFthMSwgYjEsIGMxLCBkMSwgYTIsIGIyLCBjMiwgZDIsIGEzLCBiMywgYzMsIGQzLCBhNCwgYjQsIGM0LCBkNF0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwZXJzcGVjdGl2ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUoIGQ6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBwZXJzcGVjdGl2ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhkKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBDU1Mgcm90YXRpb24gZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByb3RhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVYXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWVwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWiggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVpcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUzZChcclxuXHR4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB5OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB6OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeiksIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgcm90YXRlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoIGN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeT86IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZSgke0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhjeCl9JHtzeSAhPSBudWxsID8gXCIsXCIgKyBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3kpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBzY2FsZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVYKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVYXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWSggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWVwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVooIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVpcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlM2QoIHN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRzejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSxcclxuXHRcdENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tldygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tldyggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPiwgYXk/OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSR7YXkgIT0gbnVsbCA/IFwiLFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1goKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdYKCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tld1goJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WSggYXk6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeT86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCl9JHt5ICE9IG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gdHJhbnNsYXRlIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVgoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWFwiLCB4KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWSggeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVZXCIsIHkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVaKCB6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVpcIiwgeik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUzZCggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuXHR6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCksIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSxcclxuXHRcdENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh6KV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBHcmlkIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpdENvbnRlbnRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBmaXQtY29udGVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZml0Q29udGVudCggc2l6ZTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElGaXRDb250ZW50UHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBmaXQtY29udGVudCgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhzaXplKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJTWluTWF4UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWlubWF4KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW5tYXgoIG1pbjogR3JpZFRyYWNrU2l6ZSwgbWF4OiBHcmlkVHJhY2tTaXplKTogSU1pbk1heFByb3h5XHJcbntcclxuICAgIGxldCBvcHRpb25zID0geyBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jIH07XHJcbiAgICByZXR1cm4gKCkgPT4gYG1pbm1heCgke3ZhbDJzdHIoIG1pbiwgb3B0aW9ucyl9LCR7dmFsMnN0ciggbWF4LCBvcHRpb25zKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUmVwZWF0UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmVwZWF0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoIGNvdW50OiBFeHRlbmRlZDxDc3NOdW1iZXI+IHwgXCJhdXRvLWZpbGxcIiB8IFwiYXV0by1maWxsXCIsXHJcbiAgICAuLi50cmFja3M6IEdyaWRUcmFja1tdKTogSVJlcGVhdFByb3h5XHJcbntcclxuICAgIC8vIHJldHVybiAoKSA9PiBgcmVwZWF0KCR7dmFsMnN0cihjb3VudCl9LCR7c3R5bGVQcm9wVG9TdHJpbmcoIFwiZ3JpZFRlbXBsYXRlUm93c1wiLCB0cmFja3MsIHRydWUpfSlgO1xyXG4gICAgcmV0dXJuICgpID0+IGByZXBlYXQoJHt2YWwyc3RyKGNvdW50KX0sJHt2YWwyc3RyKCB0cmFja3MsIHsgYXJySXRlbUZ1bmM6IGdyaWRUcmFja1RvU3RyaW5nIH0pfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElTcGFuUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBzcGFuIGV4cHJlc3Npb24gZm9yIGdyaWQgbGF5b3V0cy4gSWYgdGhlIGZpcnN0XHJcbiAqIHBhcmFtZXRlciBpcyBhIG51bWJlciwgdGhlIHNlY29uZCBwYXJhbWV0ZXIgKGlmIGRlZmluZWQpIG11c3QgYmUgYSBuYW1lOyBpZiB0aGUgZmlyc3QgcGFyYW1ldGVyXHJcbiAqIGlzIGEgbmFtZSwgdGhlIHNlY29uZCBwYXJhbWV0ZXIgKGlmIGRlZmluZWQpIG11c3QgYmUgYSBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiggY291bnRPck5hbWU6IEV4dGVuZGVkPEdyaWRMaW5lQ291bnRPck5hbWU+LFxyXG4gICAgbmFtZU9yQ291bnQ/OiBFeHRlbmRlZDxHcmlkTGluZUNvdW50T3JOYW1lPik6IElTcGFuUHJveHlcclxue1xyXG4gICAgbGV0IGZpcnN0RWxtID0gdmFsMnN0cihjb3VudE9yTmFtZSk7XHJcbiAgICBsZXQgc2Vjb25kRWxtID0gbmFtZU9yQ291bnQgPyB2YWwyc3RyKCBuYW1lT3JDb3VudCkgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBzcGFuICR7Zmlyc3RFbG19ICR7c2Vjb25kRWxtfWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuXHRJQ3NzTnVtYmVyTWF0aCwgSUNzc0xlbmd0aE1hdGgsIElDc3NBbmdsZU1hdGgsIElDc3NUaW1lTWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLFxyXG4gICAgSUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NQZXJjZW50TWF0aCwgRXh0ZW5kZWQsIElTdHJpbmdQcm94eSwgSVVybFByb3h5LFxyXG4gICAgQXR0clR5cGVLZXl3b3JkLCBBdHRyVW5pdEtleXdvcmQsIElMZW5ndGhQcm94eSwgSVBlcmNlbnRQcm94eSwgSUFuZ2xlUHJveHksXHJcbiAgICBJVGltZVByb3h5LCBJUmVzb2x1dGlvblByb3h5LCBJRnJlcXVlbmN5UHJveHksIElRdW90ZWRQcm94eVxyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NOdW1iZXJNYXRoLCBDc3NMZW5ndGhNYXRoLCBDc3NBbmdsZU1hdGgsIENzc1RpbWVNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCxcclxuXHRDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgdmFsMnN0ciwgdGVtcGxhdGVTdHJpbmdUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtJVmFyUnVsZSwgSUNvdW50ZXJSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7VmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bnVtYmVyPmBcclxuICogQ1NTIHR5cGUuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXkgYXJlXHJcbiAqIGNvbnZlcnRlZCB0byBzdHJpbmdzIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1bml0cyB0byB0aGVtLlxyXG4gKi9cclxuZXhwb3J0IGxldCBOdW06IElDc3NOdW1iZXJNYXRoID0gbmV3IENzc051bWJlck1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQZXJjZW50IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudGFnZT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIFwiJVwiIHVuaXQgc3VmZml4LlxyXG4gKi9cclxuZXhwb3J0IGxldCBQZXJjZW50OiBJQ3NzUGVyY2VudE1hdGggPSBuZXcgQ3NzUGVyY2VudE1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgcGVyY2VudCB2YWx1ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudCggbjogbnVtYmVyKTogSVBlcmNlbnRQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCIlXCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBMZW4gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxsZW5ndGg+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBsZW5ndGggdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJweFwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImVtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IExlbjogSUNzc0xlbmd0aE1hdGggPSBuZXcgQ3NzTGVuZ3RoTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcXVhcnRlcnMgb2YgYW4gaW5jaCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIlFcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNoIHVuaXRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImNoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYW50aW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY20oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJjbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2FsY3VsYXRlZCBmb250LXNpemVzIG9mIHRoZSBlbGVtZW50ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImVtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBoZWlnaHRzIG9mIGxvd2VyY2FzZSBsZXR0ZXIgJ3gnIGluIHRoZSBmb250ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImV4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpYyB1bml0cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaWMoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJpY1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaW5jaGVzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiaW5cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgZWxlbWVudCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJsaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbWlsbGltZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1tKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwibW1cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpY2FzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYyggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInBjXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwb2ludHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHB0KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicHRcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpeGVscyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJweFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBibG9jayBheGlzICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YiggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZiXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2aFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBpbmxpbmUgYXhpcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmkoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2aVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdncoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2d1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gZm9udHNpemVzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJlbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJsaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJsaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIHNtYWxsZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZtYXgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2bWF4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgbGFyZ2VyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2bWluKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidm1pblwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgZm9yIGZsZXggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZyKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZnJcIjsgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5nbGUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxhbmdsZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhbiBhbmdsZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRlZ1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInR1cm5cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgQW5nbGU6IElDc3NBbmdsZU1hdGggPSBuZXcgQ3NzQW5nbGVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGRlZ3JlZXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZyggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZGVnXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHJhZGlhbnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZCggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicmFkXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGdyYWRpYW5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmFkKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJncmFkXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHR1cm5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0dXJuKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ0dXJuXCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUaW1lIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8dGltZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHRpbWUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJtc1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInNcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgVGltZTogSUNzc1RpbWVNYXRoID0gbmV3IENzc1RpbWVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gbWlsbGlzZWNvbmRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtcyggbjogbnVtYmVyKTogSVRpbWVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJtc1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyB0aW1lIHZhbHVlIGluIHNlY29uZHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHMoIG46IG51bWJlcik6IElUaW1lUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwic1wiOyB9XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZXNvbHV0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHJlc29sdXRpb24gdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkcGlcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJkcGNtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFJlc29sdXRpb246IElDc3NSZXNvbHV0aW9uTWF0aCA9IG5ldyBDc3NSZXNvbHV0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQSSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHBpKCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRwaVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQQ00gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwY20oIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBjbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwcHgoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBweFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIFggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHgoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwieFwiOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnJlcXVlbmN5IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgZnJlcXVlbmN5IHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiSHpcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJrSHpcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgRnJlcXVlbmN5OiBJQ3NzRnJlcXVlbmN5TWF0aCA9IG5ldyBDc3NGcmVxdWVuY3lNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBIZXJ0eiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHooIG46IG51bWJlcik6IElGcmVxdWVuY3lQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJoelwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gS2lsby1IZXJ0eiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ga2h6KCBuOiBudW1iZXIpOiBJRnJlcXVlbmN5UHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwia2h6XCI7IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gZW5jYXBzdWxhdGluZyB0aGUgZ2l2ZW4gc3RyaW5nLWxpa2UgcGFyYW1ldGVyLiBUaGlzIGZ1bmN0aW9uXHJcbiAqIGFsbG93cyBzcGVjaWZ5aW5nIGFyYml0cmFyeSB0ZXh0IGZvciBwcm9wZXJ0aWVzIHdob3NlIHR5cGUgbm9ybWFsbHkgZG9lc24ndCBhbGxvdyBzdHJpbmdzLlxyXG4gKiBUaGlzIGlzIHVzZWQgYXMgYW4gXCJlc2NhcGUgaGF0Y2hcIiB3aGVuIGEgc3RyaW5nIHZhbHVlIGFscmVhZHkgZXhpc3RzIGFuZCB0aGVyZSBpcyBubyBzZW5zZVxyXG4gKiB0byBjb252ZXJ0IGl0IHRvIGEgcHJvcGVyIHR5cGUuIFRoaXMgZnVuY3Rpb24gaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3QgYmUgaW52b2tlZCB3aXRoXHJcbiAqIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBhbnlbXSk6IElTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGludm9jYXRpb24gb2YgdGhlIGB2YXIoKWAgQ1NTIGZ1bmN0aW9uIGZvclxyXG4gKiB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSB3aXRoIG9wdGlvbmFsIGZhbGxiYWNrcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2V2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIGZhbGxiYWNrPzogVmFyVmFsdWVUeXBlPEs+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBmYWxsYmFja1xyXG4gICAgICAgID8gYHZhcigtLSR7dmFyT2JqLm5hbWV9LCR7c3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgZmFsbGJhY2ssIHRydWUpfSlgXHJcbiAgICAgICAgOiBgdmFyKC0tJHt2YXJPYmoubmFtZX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGB1cmwoKWAgZnVuY3Rpb24uIFRoZSBzdHJpbmcgcGFyYW1ldGVyXHJcbiAqIHdpbGwgYmUgd3JhcHBlZCBpbiBhIFwidXJsKClcIiBpbnZvY2F0aW9uLiBUaGUgZnVuY3Rpb24gY2FuIGFsc28gYWNjZXB0IHRoZSBJSURSdWxlIG9iamVjdCB0b1xyXG4gKiBjcmVhdGUgdXJsKCNlbGVtZW50KSBpbnZvY2F0aW9uLCB3aGljaCBpcyBvZnRlbiB1c2VkIHRvIGFkZHJlc3MgU1ZHIGVsZW1lbnRzIGJ5IHRoZWlyIElEcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmwoIHZhbDogRXh0ZW5kZWQ8c3RyaW5nIHwgSUlEUnVsZT4pOiBJVXJsUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBgdXJsKCR7dmFsMnN0cih2YWwpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYXR0cigpYCBDU1MgZnVuY3Rpb24uIEl0IHJldHVybnMgSVN0cmluZ1Byb3h5XHJcbiAqIGFuZCB0aGVvcmV0aWNhbGx5IGNhbiBiZSB1c2VkIGluIGFueSBzdHlsZSBwcm9wZXJ0eTsgaG93ZXZlciwgaXRzIHVzZSBieSBicm93c2VycyBpcyBjdXJyZW50bHlcclxuICogbGltaXRlZCB0byB0aGUgYGNvbnRlbnRgIHByb3BlcnR5LiBBbHNvIG5vIGJyb3dzZXIgY3VycmVudGx5IHN1cHBvcnQgdHlwZSwgdW5pdHMgb3IgZmFsbGJhY2tcclxuICogdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dHIoIGF0dHJOYW1lOiBFeHRlbmRlZDxzdHJpbmc+LCB0eXBlT3JVbml0PzogRXh0ZW5kZWQ8QXR0clR5cGVLZXl3b3JkIHwgQXR0clVuaXRLZXl3b3JkPixcclxuXHRmYWxsYmFjaz86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBhdHRyKCR7YXR0ck5hbWV9JHt0eXBlT3JVbml0ID8gXCIgXCIgKyB0eXBlT3JVbml0IDogXCJcIn0ke2ZhbGxiYWNrID8gXCIsXCIgKyBmYWxsYmFjayA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYSBzdHJpbmcgaW4gcXVvdGF0aW9uIG1hcmtzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlZCggdmFsOiBhbnkpOiBJUXVvdGVkUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBcIiR7dmFsMnN0cih2YWwpfVwiYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb3VudGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlcigpYCBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uYWxcclxuICogb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXIoIGNvdW50ZXJPYmo6IEV4dGVuZGVkPElDb3VudGVyUnVsZSB8IHN0cmluZz4sXHJcblx0c3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzdHlsZVN0cmluZyA9IHN0eWxlID8gYCwke3ZhbDJzdHIoIHN0eWxlKX1gIDogXCJcIjtcclxuXHRcdGxldCBiZWZvcmUgPSB0ZXh0QmVmb3JlID8gYFwiJHt2YWwyc3RyKCB0ZXh0QmVmb3JlKX1cImAgOiBcIlwiO1xyXG5cdFx0bGV0IGFmdGVyID0gdGV4dEFmdGVyID8gYFwiJHt2YWwyc3RyKCB0ZXh0QWZ0ZXIpfVwiYCA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYCR7YmVmb3JlfSBjb3VudGVyKCR7dmFsMnN0cihjb3VudGVyT2JqKX0ke3N0eWxlU3RyaW5nfSkgJHthZnRlcn1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGBjb3VudGVzcigpYCBmdW5jdGlvbiB3aXRoIHRoZSBnaXZlblxyXG4gKiBzZXBhcmF0b3Igc3RyaW5nIGFuZCBhZGRpdGlvbmFsIG9wdGlvbmFsIHN0cmluZ3MgYWRkZWQgYWZ0ZXIgYW5kL29yIGJlZm9yZSB0aGUgY291bnRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVycyggY291bnRlck9iajogRXh0ZW5kZWQ8SUNvdW50ZXJSdWxlIHwgc3RyaW5nPixcclxuXHRzZXBhcmF0b3I6IEV4dGVuZGVkPHN0cmluZz4sIHN0eWxlPzogRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LFxyXG5cdHRleHRBZnRlcj86IEV4dGVuZGVkPHN0cmluZz4sIHRleHRCZWZvcmU/OiBFeHRlbmRlZDxzdHJpbmc+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgc2VwU3RyaW5nID0gc2VwYXJhdG9yID8gYFwiJHt2YWwyc3RyKCBzZXBhcmF0b3IpfVwiYCA6IGBcIi5cImA7XHJcblx0XHRsZXQgc3R5bGVTdHJpbmcgPSBzdHlsZSA/IGAsJHt2YWwyc3RyKCBzdHlsZSl9YCA6IFwiXCI7XHJcblx0XHRsZXQgYmVmb3JlID0gdGV4dEJlZm9yZSA/IGBcIiR7dmFsMnN0ciggdGV4dEJlZm9yZSl9XCJgIDogXCJcIjtcclxuXHRcdGxldCBhZnRlciA9IHRleHRBZnRlciA/IGBcIiR7dmFsMnN0ciggdGV4dEFmdGVyKX1cImAgOiBcIlwiO1xyXG5cdFx0cmV0dXJuIGAke2JlZm9yZX0gY291bnRlcnMoJHt2YWwyc3RyKGNvdW50ZXJPYmopfSwke3NlcFN0cmluZ30ke3N0eWxlU3RyaW5nfSkgJHthZnRlcn1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jc3NcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0NvbG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ltYWdlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9Db2xvckFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSW1hZ2VBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N0eWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9SdWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TY2hlZHVsaW5nQVBJXCI7XHJcbiIsImltcG9ydCB7SUFuaW1hdGlvblJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBBbmltYXRpb25XYXlwb2ludCwgQW5pbWF0aW9uU3R5bGVzZXQsIElBbmltYXRpb25GcmFtZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZXNcIjtcclxuaW1wb3J0IHsgdmFsMnN0ciB9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAa2V5ZnJhbWVzIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZnJhbWVzPzogQW5pbWF0aW9uRnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoZnJhbWVzKVxyXG5cdFx0XHR0aGlzLmZyYW1lUnVsZXMgPSBmcmFtZXMubWFwKCBmcmFtZSA9PiBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCBmcmFtZVswXSwgZnJhbWVbMV0pKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRrZXlmcmFtZVJ1bGUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQW5pbWF0aW9uUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFuaW1hdGlvblJ1bGUodW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0XHRpZiAodGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRuZXdSdWxlLmZyYW1lUnVsZXMgPSB0aGlzLmZyYW1lUnVsZXMubWFwKCBmcmFtZVJ1bGUgPT4gZnJhbWVSdWxlLmNsb25lKCkgYXMgQW5pbWF0aW9uRnJhbWVSdWxlKTtcclxuXHRcdG5ld1J1bGUubmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBrZXlmcmFtZXMgJHt0aGlzLm5hbWV9IHt9YCwgcGFyZW50KSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cclxuXHRcdGxldCBjc3NLZXlmcmFtZXNSdWxlID0gdGhpcy5jc3NSdWxlIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblx0XHRmb3IoIGxldCBmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNzc0tleWZyYW1lc1J1bGUuYXBwZW5kUnVsZSggZnJhbWVSdWxlLnRvQ3NzU3RyaW5nKCkpXHJcblx0XHRcdFx0bGV0IGNzc1J1bGUgPSBjc3NLZXlmcmFtZXNSdWxlLmNzc1J1bGVzLml0ZW0oICBjc3NLZXlmcmFtZXNSdWxlLmNzc1J1bGVzLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdGlmIChjc3NSdWxlKVxyXG5cdFx0XHRcdFx0ZnJhbWVSdWxlLmNzc0tleWZyYW1lUnVsZSA9IGNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVSdWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKHgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcIkNhbm5vdCBhZGQgQ1NTIGtleWZyYW1lIHJ1bGVcIiwgeClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKCF0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIGBAa2V5ZnJhbWVzICR7dGhpcy5uYW1lfSB7YCk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0Y3R4LmFkZFJ1bGVUZXh0KCBmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuICAgICAgICBcclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggXCJ9XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGNvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLiBBbmltYXRpb24gcnVsZSByZXR1cm5zIGl0cyBuYW1lLlxyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblx0XHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN0eWxlIHJ1bGVzIHJlcHJlc2VudGluZyBhbmltYXRpb24gZnJhbWVzICovXHJcblx0cHVibGljIGZyYW1lUnVsZXM6IEFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWVSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUga2V5ZnJhbWUgY2xhdXNlIGluIHRoZSBhbmltYXRpb24gcnVsZS5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25GcmFtZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50LCBzdHlsZXNldD86IEFuaW1hdGlvblN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZXNldCk7XHJcblx0XHR0aGlzLndheXBvaW50ID0gd2F5cG9pbnQ7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQW5pbWF0aW9uRnJhbWVSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIHRoaXMud2F5cG9pbnQpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHRoaXMud2F5cG9pbnQsIHtcclxuXHRcdFx0ZnJvbU51bWJlcjogdiA9PiB2ICsgXCIlXCIsXHJcblx0XHRcdGFyckl0ZW1GdW5jOiB2ID0+IHZhbDJzdHIoIHYsIHsgZnJvbU51bWJlcjogdiA9PiB2ICsgXCIlXCIgfSksXHJcblx0XHRcdGFyclNlcDogXCIsXCJcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgKi9cclxuXHRwdWJsaWMgd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50O1xyXG5cclxuXHQvKiogU09NIGtleWZyYW1lIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzS2V5ZnJhbWVSdWxlOiBDU1NLZXlmcmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJQ291bnRlclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvdW50ZXJSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGNvdW50ZXIgZGVmaW5pdGlvbi4gVXNlIHRoaXMgcnVsZSB0byBjcmVhdGVcclxuICogY291bnRlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgaW4gY291bnRlci1pbmNyZW1lbnQsIGNvdW50ZXItcmVzZXQgYW5kIGNvdW50ZXItc2V0IHN0eWxlXHJcbiAqIHByb3BlcnRpZXMuIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGNvdW50ZXJzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmVcclxuICogY291bnRlciBkZWZpbml0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUNvdW50ZXJSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cdFx0W3RoaXMubmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDb3VudGVyUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ291bnRlclJ1bGUoIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGNvdW50ZXIgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBjb3VudGVyICovXHJcblx0cHVibGljIGdldCBjb3VudGVyTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JpZExpbmVSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGdyaWQgbGluZSBkZWZpbml0aW9uLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBncmlkXHJcbiAqIGxpbmVzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmUgZ3JpZCBsaW5lIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRMaW5lUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUdyaWRMaW5lUnVsZVxyXG57XHJcbiAgICAvLyBpZiB0aGUgbmFtZU92ZXJyaWRlIGlzIGFuIGFyZWEgcnVsZSBvYmplY3QsIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgYWx3YXlzIGRlZmluZWRcclxuICAgIC8vIGJlY2F1c2UgdGhpcyBjb25zdHJ1Y3RvciBjYW4gb25seSBiZSBpbnZva2VkIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBsaW5lcyBvZiB0aGUgR3JpZEFyZWFSdWxlXHJcbiAgICAvLyBvYmplY3QuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUgfCBJR3JpZEFyZWFSdWxlLCBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbilcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSBpc1N0YXJ0RW5kT3JOb25lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICBsZXQgbmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcbiAgICAgICAgaWYgKG5hbWVPdmVycmlkZSBpbnN0YW5jZW9mIEdyaWRMaW5lUnVsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVPdmVycmlkZS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSBuYW1lT3ZlcnJpZGUuaXNTdGFydEVuZE9yTm9uZTtcclxuICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IG5hbWVPdmVycmlkZS5hcmVhTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZU92ZXJyaWRlIGluc3RhbmNlb2YgR3JpZEFyZWFSdWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZU92ZXJyaWRlLm5hbWUgKyAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID8gXCItc3RhcnRcIiA6IFwiLWVuZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IG5hbWVPdmVycmlkZS5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBvYnRhaW5lZCBuYW1lIGRvZXNuJ3QgaGF2ZSBcIi1zdGFydFwiIG9yIFwiLWVuZFwiIGJ1dCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzXHJcbiAgICAgICAgICAgIC8vIGRlZmluZWQgKHRoYXQgaXMsIGl0IGlzIGVpdGhlciBzdGFydCBvciBlbmQgbGluZSksIHdlIG5lZWQgdG8gYXBwZW5kIHRoZSBzdWZmaXguIElmIHRoZVxyXG4gICAgICAgICAgICAvLyBvYnRhaW5lZCBuYW1lIGFscmVhZHkgaGFzIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIgYW5kIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgbm90XHJcbiAgICAgICAgICAgIC8vIGRlZmluZWQsIHdlIHNldCB0aGlzIGZsYWcgdG8gZWl0aGVyIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIHRoZSBzdWZmaXguIE5vdGUgdGhhdCBpZlxyXG4gICAgICAgICAgICAvLyB0aGUgbmFtZU92ZXJyaWRlIGlzIGFuIGFyZWEgcnVsZSBvYmplY3QsIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgYWx3YXlzIGRlZmluZWQuXHJcbiAgICAgICAgICAgIGxldCBuYW1lSGFzU3RhcnQgPSB0aGlzLm5hbWUuZW5kc1dpdGgoXCItc3RhcnRcIik7XHJcbiAgICAgICAgICAgIGxldCBuYW1lSGFzRW5kID0gdGhpcy5uYW1lLmVuZHNXaXRoKFwiLWVuZFwiKTtcclxuICAgICAgICAgICAgaWYgKG5hbWVIYXNTdGFydClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWUuc3Vic3RyKCAwLCB0aGlzLm5hbWUubGVuZ3RoIC0gXCItc3RhcnRcIi5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWVIYXNFbmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZS5zdWJzdHIoIDAsIHRoaXMubmFtZS5sZW5ndGggLSBcIi1lbmRcIi5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSArPSBcIi1zdGFydFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgKz0gXCItZW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBHcmlkTGluZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEdyaWRMaW5lUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUsIHRoaXMuaXNTdGFydEVuZE9yTm9uZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSBsaW5lIG5hbWUuXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsaW5lIGlzIGEgc3RhcnQgb3IgZW5kIGxpbmUgb2YgYSBncmlkIGFyZWEuIFRoZSB2YWx1ZSBpcyB0cnVlXHJcbiAgICAgKiBpZiB0aGlzIGlzIHRoZSBzdGFydCBsaW5lOyBmYWxzZSBpZiB0aGlzIGlzIHRoZSBlbmQgbGluZTsgYW5kIHVuZGVmaW5lZCBpZiB0aGUgbGluZSBpc1xyXG4gICAgICogbm90IHJlbGF0ZWQgdG8gYW55IGFyZWEuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgaXNTdGFydEVuZE9yTm9uZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGdyaWQgYXJlYSBvZiB3aGljaCB0aGUgbGluZSBpcyBlaXRoZXIgYSBzdGFydCBvciBhbiBlbmQgbGluZS4gSXQgaXMgZGVmaW5lZFxyXG4gICAgICogb25seSBpZiB0aGUgbGluZSBuYW1lIGVuZHMgd2l0aCBcIi1zdGFydFwiIG9yIFwiLWVuZFwiLlxyXG4gICAgICovXHJcblx0cHVibGljIGFyZWFOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZExpbmVSdWxlIHwgSUdyaWRBcmVhUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyaWRBcmVhUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBuYW1lZCBncmlkIGFyZWEgZGVmaW5pdGlvbi4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgZ3JpZFxyXG4gKiBhcmVhcyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlIGdyaWQgYXJlYSBkZWZpbml0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkQXJlYVJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElHcmlkQXJlYVJ1bGVcclxue1xyXG4gICAgLy8gaWYgdGhlIG5hbWVPdmVycmlkZSBpcyBhbiBhcmVhIHJ1bGUgb2JqZWN0LCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIGFsd2F5cyBkZWZpbmVkXHJcbiAgICAvLyBiZWNhdXNlIHRoaXMgY29uc3RydWN0b3IgY2FuIG9ubHkgYmUgaW52b2tlZCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgbGluZXMgb2YgdGhlIEdyaWRBcmVhUnVsZVxyXG4gICAgLy8gb2JqZWN0LlxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZEFyZWFSdWxlKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgbGluZSBydWxlc1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaW5lID0gbmV3IEdyaWRMaW5lUnVsZSggdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lbmRMaW5lID0gbmV3IEdyaWRMaW5lUnVsZSggdGhpcywgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICBbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcbiAgICAgICAgLy8gcHJvY2VzcyBsaW5lIHJ1bGVzXHJcbiAgICAgICAgdGhpcy5zdGFydExpbmUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5lbmRMaW5lLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogR3JpZEFyZWFSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBHcmlkQXJlYVJ1bGUoIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGxpbmUgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBTdGFydCBsaW5lIG9mIHRoZSBhcmVhLiAqL1xyXG5cdHB1YmxpYyBzdGFydExpbmU6IEdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvKiogRW5kIGxpbmUgb2YgdGhlIGFyZWEgYXJlYS4gKi9cclxuXHRwdWJsaWMgZW5kTGluZTogR3JpZExpbmVSdWxlO1xyXG5cclxuICAgIC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRBcmVhUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZURlZmluaXRpb25DbGFzcywgU3R5bGVEZWZpbml0aW9uLCBJR3JvdXBSdWxlLCBJTWVkaWFSdWxlLCBJU3VwcG9ydHNSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2dldENvbnRhaW5lckZyb21JbnN0YW5jZSwgcHJvY2Vzc0luc3RhbmNlT3JDbGFzc30gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7SVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGUsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcm91cFJ1bGUgY2xhc3Mgc2VydmVzIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIGdyb3VwaW5nIENTUyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaW5zdGFuY2VPckNsYXNzID0gaW5zdGFuY2VPckNsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcbiAgICAgICAgLy8gY29udGFpbmVyIHRvIHdoaWNoIG91ciBncm91cG5nIHJ1bGUgYmVsb25ncyBiZWNvbWVzIHRoZSBwYXJlbnQgY29udGFpbmVyIGZvciB0aGVcclxuICAgICAgICAvLyBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlXHJcblx0XHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCB0aGlzLmluc3RhbmNlT3JDbGFzcywgY29udGFpbmVyLmdldERlZmluaXRpb25JbnN0YW5jZSgpKTtcclxuXHRcdGlmICghaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLnJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEdyb3VwU2VsZWN0b3JUZXh0KCk7XHJcblx0XHRpZiAoIXNlbGVjdG9yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGAke3NlbGVjdG9yfSB7fWAsIHBhcmVudCkgYXMgQ1NTR3JvdXBpbmdSdWxlO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5pbnNlcnRSdWxlcyggdGhpcy5jc3NSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAoIXRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0R3JvdXBTZWxlY3RvclRleHQoKTtcclxuXHRcdGlmICghc2VsZWN0b3IpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIGAke3NlbGVjdG9yfSB7YCk7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0dGhpcy5ydWxlQ29udGFpbmVyLnNlcmlhbGl6ZVJ1bGVzKCBjdHgpO1xyXG5cclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggXCJ9XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gY2xlYXIgc3ViLXJ1bGVzXHJcblx0XHRpZiAodGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHR0aGlzLnJ1bGVDb250YWluZXIuY2xlYXJSdWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBkZWZpbmluZyB0aGUgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlXHJcblx0cHVibGljIGdldCBydWxlcygpOiBUIHsgcmV0dXJuIHRoaXMuaW5zdGFuY2UgYXMgVDsgfVxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTR3JvdXBpbmdSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IGRlZmluZXMgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIGZvciB0aGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgcnVsZUNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdXBwb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3VwcG9ydHNSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSVN1cHBvcnRzUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogU3VwcG9ydHNRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN1cHBvcnRzUnVsZTxUPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlPFQ+KCB0aGlzLnF1ZXJ5LCB0aGlzLmluc3RhbmNlT3JDbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHQvLyBjb252ZXJ0IHRoZSBxdWVyeSB0byBpdHMgc3RyaW5nIGZvcm1cclxuXHRcdGxldCBxdWVyeVN0cmluZyA9IHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSk7XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHF1ZXJ5IGlzIHN1cHBvcnRlZCBhbmQgaWYgaXQgaXMgbm90LCBkb24ndCBpbnNlcnQgdGhlIHJ1bGVcclxuXHRcdHJldHVybiBDU1Muc3VwcG9ydHMoIHF1ZXJ5U3RyaW5nKSA/IGBAc3VwcG9ydHMgJHtxdWVyeVN0cmluZ31gIDogbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEZsYWcgaW5kaWNhdGVkIHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhpcyBydWxlJ3MgcXVlcnkgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNTdXBwb3J0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAgQ1NTLnN1cHBvcnRzKCBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpKTtcclxuICAgIH1cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1N1cHBvcnRzUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIHN1cHBvcnQgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwcml2YXRlIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIGluc3RhbmNlT3JDbGFzcyk7XHJcblxyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTWVkaWFSdWxlPFQ+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBNZWRpYVJ1bGU8VD4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdHJldHVybiBgQG1lZGlhICR7bWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTTWVkaWFSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gbWVkaWEgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJRm9udEZhY2VSdWxlLCBJSW1wb3J0UnVsZSwgSVBhZ2VSdWxlLCBJTmFtZXNwYWNlUnVsZSwgSUNsYXNzTmFtZVJ1bGUsIElDbGFzc1J1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtmb250RmFjZVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGUsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQsIFJ1bGVMaWtlLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge21lZGlhUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVzXCI7XHJcbmltcG9ydCB7UGFnZVBzZXVkb0NsYXNzfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNaXNjUnVsZSBjbGFzcyBzZXJ2ZXMgYXMgYSBiYXNlIGNsYXNzIGZvciBzaW1wbGUgcnVsZXMuXHJcbiAqL1xyXG5hYnN0cmFjdCBjbGFzcyBNaXNjUnVsZTxUIGV4dGVuZHMgQ1NTUnVsZT4gZXh0ZW5kcyBSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pc1RvcExldmVsUnVsZSA9IGlzVG9wTGV2ZWxSdWxlO1xyXG5cdH1cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIHRoaXMuZ2V0UnVsZVRleHQoKSwgcGFyZW50KSBhcyBUO1xyXG5cdH1cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRjdHguYWRkUnVsZVRleHQoIHRoaXMuZ2V0UnVsZVRleHQoKSwgdGhpcy5pc1RvcExldmVsUnVsZSk7XHJcbiAgICB9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldFJ1bGVUZXh0KCk6IHN0cmluZztcclxuXHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBUO1xyXG5cclxuICAgIC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcnVsZSBjYW4gb25seSBiZSBhdCB0aGUgdG9wLWxldmVsIG9mIHN0eWxlc2hlZXRzIChlLmcuIEBpbXBvcnRcclxuICAgIC8vIGFuZCBAbmFtZXNwYWNlKS5cclxuICAgIHByaXZhdGUgaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1wb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltcG9ydFJ1bGUgZXh0ZW5kcyBNaXNjUnVsZTxDU1NJbXBvcnRSdWxlPiBpbXBsZW1lbnRzIElJbXBvcnRSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpXHJcblx0e1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSB0b3AtbGV2ZWwgcnVsZVxyXG5cdFx0c3VwZXIoIHRydWUpO1xyXG5cclxuXHRcdHRoaXMudXJsID0gdXJsO1xyXG5cdFx0dGhpcy5tZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeTtcclxuXHRcdHRoaXMuc3VwcG9ydHNRdWVyeSA9IHN1cHBvcnRzUXVlcnk7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogSW1wb3J0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgSW1wb3J0UnVsZSggdGhpcy51cmwsIHRoaXMubWVkaWFRdWVyeSwgdGhpcy5zdXBwb3J0c1F1ZXJ5KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGdldFJ1bGVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0bGV0IHVybDogc3RyaW5nO1xyXG5cdFx0aWYgKHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJ1cmxcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIlxcXCJcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIidcIikpXHJcblx0XHRcdHVybCA9IHRoaXMudXJsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR1cmwgPSBgdXJsKCR7dGhpcy51cmx9KWA7XHJcblxyXG5cdFx0bGV0IHN1cHBvcnRzUXVlcnlTdHJpbmcgPSAhdGhpcy5zdXBwb3J0c1F1ZXJ5ID8gXCJcIiA6IHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5zdXBwb3J0c1F1ZXJ5KTtcclxuXHRcdGlmIChzdXBwb3J0c1F1ZXJ5U3RyaW5nICYmICFzdXBwb3J0c1F1ZXJ5U3RyaW5nLnN0YXJ0c1dpdGgoIFwic3VwcG9ydHNcIikpXHJcblx0XHQgICAgc3VwcG9ydHNRdWVyeVN0cmluZyA9IGBzdXBwb3J0cyggJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSApYDtcclxuXHJcblx0XHRsZXQgbWVkaWFRdWVyeVN0cmluZyA9ICF0aGlzLm1lZGlhUXVlcnkgPyBcIlwiIDogbWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLm1lZGlhUXVlcnkpO1xyXG5cdFx0cmV0dXJuIGBAaW1wb3J0ICR7dXJsfSAke3N1cHBvcnRzUXVlcnlTdHJpbmd9ICR7bWVkaWFRdWVyeVN0cmluZ31gO1xyXG4gICAgfVxyXG5cclxuXHQvLyBVUkwgdG8gaW1wb3J0IGZyb20uXHJcblx0cHVibGljIHVybDogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgc3VwcG9ydHMgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lc3BhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmFtZXNwYWNlUnVsZSBleHRlbmRzIE1pc2NSdWxlPENTU05hbWVzcGFjZVJ1bGU+IGltcGxlbWVudHMgSU5hbWVzcGFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZylcclxuXHR7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBhIHRvcC1sZXZlbCBydWxlXHJcblx0XHRzdXBlciggdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XHJcblx0XHR0aGlzLnByZWZpeCA9IHByZWZpeDtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBOYW1lc3BhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCB0aGlzLm5hbWVzcGFjZSwgdGhpcy5wcmVmaXgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UnVsZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRsZXQgdXJsID0gdGhpcy5uYW1lc3BhY2Uuc3RhcnRzV2l0aCggXCJ1cmwoXCIpID8gdGhpcy5uYW1lc3BhY2UgOiBgdXJsKCR7dGhpcy5uYW1lc3BhY2V9KWA7XHJcblx0XHRyZXR1cm4gYEBuYW1lc3BhY2UgJHt0aGlzLnByZWZpeCA/IHRoaXMucHJlZml4IDogXCJcIn0gJHt1cmx9YDtcclxuICAgIH1cclxuXHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGb250RmFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGZvbnQtZmFjZSBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb250RmFjZVJ1bGUgZXh0ZW5kcyBNaXNjUnVsZTxDU1NGb250RmFjZVJ1bGU+IGltcGxlbWVudHMgSUZvbnRGYWNlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmb250ZmFjZTogSUZvbnRGYWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5mb250ZmFjZSA9IGZvbnRmYWNlO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEZvbnRGYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCB0aGlzLmZvbnRmYWNlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGdldFJ1bGVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIGBAZm9udC1mYWNlICR7Zm9udEZhY2VUb1N0cmluZyggdGhpcy5mb250ZmFjZSl9YDtcclxuICAgIH1cclxuXHJcblx0Ly8gT2JqZWN0IGRlZmluaW5nIGZvbnQtZmFjZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBmb250ZmFjZTogSUZvbnRGYWNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFnZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFnZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJUGFnZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMucHNldWRvQ2xhc3MgPSBwc2V1ZG9DbGFzcztcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBQYWdlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgUGFnZVJ1bGUoIHRoaXMucHNldWRvQ2xhc3MpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGBAcGFnZSAke3RoaXMucHNldWRvQ2xhc3MgPyB0aGlzLnBzZXVkb0NsYXNzIDogXCJcIn1gO1xyXG5cdH1cclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUGFnZVJ1bGU7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cHVibGljIHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYWdlUnVsZSBjbGFzcyByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc05hbWVSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJQ2xhc3NOYW1lUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBjbGFzc2VzOiAoSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgc3RyaW5nKVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IENsYXNzTmFtZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENsYXNzTmFtZVJ1bGUoIHRoaXMuY2xhc3Nlcyk7XHJcblx0fVxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNsYXNzZXMubWFwKCBjbHMgPT4gdHlwZW9mIGNscyA9PT0gXCJzdHJpbmdcIiA/IGNscyA6IGNscy5uYW1lKS5qb2luKFwiIFwiKTtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzTmFtZSA9IFwiLlwiICsgdGhpcy5jbGFzc2VzLm1hcCggY2xzID0+IHR5cGVvZiBjbHMgPT09IFwic3RyaW5nXCIgPyBjbHMgOiBjbHMubmFtZSkuam9pbihcIi5cIik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHRoZSBvYmplY3QgdG8gcGFydGljcGF0ZSBpbiBcInZhbHVlVG9TdHJpbmdcIiBzZXJpYWxpemF0aW9uLiBXaGVuZXZlclxyXG5cdCAqIHRoZSBDbGFzc05hbWVSdWxlIG9iamVjdCBpcyBlbmNvdW50ZXJlZCBieSB0aGUgYFV0aWxGdW5jLnZhbHVlVG9TdHJpbmdgIGZ1bmN0aW9uLFxyXG5cdCAqIHRoZSBydWxlJ3MgQ1NTIG5hbWUgKHRoZSBvbmUgd2l0aCB0aGUgZG90cykgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc0NsYXNzTmFtZTtcclxuXHR9XHJcblxyXG4gICAgLy8gSW1wbGVtZW50YXRpb24gb2YgdGhlIHRvU3RyaW5nIG1ldGhvZCByZXR1cm5zIHRoZSBjb21iaW5lZCBuYW1lIG9mIHRoZSBjbGFzc2VzICh3aXRob3V0XHJcbiAgICAvLyB0aGUgQ1NTIHByZWZpeGVzKS5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG4gICAgLyoqIEFsbCBjbGFzcyBuYW1lcyBjb25jYXRlbmF0ZWQgd2l0aCBzcGFjZSAqL1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIFxyXG4gICAgLyoqIEFsbCBjbGFzcyBDU1MgbmFtZXMgKHdpdGggZG90cykgY29uY2F0ZW5hdGVkIHRvZ2V0aGVyICovXHJcbiAgICBwdWJsaWMgY3NzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiAoSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgc3RyaW5nKVtdO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVJ1bGUsIElOYW1lZEVudGl0eSwgU3R5bGVEZWZpbml0aW9ufSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW50ZXJmYWNlIGtlZXBzIGluZm9ybWF0aW9uIGR1cmluZyBzZXJpYWxpemF0aW9uIG9mIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0XHJcbntcclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBhZGRSdWxlVGV4dCggczogc3RyaW5nLCBpc1RvcExldmVsUnVsZT86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBhZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgYWNjb21wYW5pZXMgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aFxyXG4gKiBhIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvKiogSW5zZXJ0cyBhbGwgcnVsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciB0byBlaXRoZXIgdGhlIHN0eWxlIHNoZWV0IG9yIGdyb3VwaW5nIHJ1bGUuICovXHJcblx0aW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRjbGVhclJ1bGVzKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBXcml0ZXMgYWxsIHJ1bGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBnaXZlbiBzdHJpbmcuICovXHJcblx0c2VyaWFsaXplUnVsZXMoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuICovXHJcblx0c2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRvcExldmVsUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCB0aGF0IFwib3duc1wiXHJcbiAqIHRoZSBydWxlcyB1bmRlciB0aGlzIGNvbnRhaW5lci4gSW4gcGFydGljdWxhciwgdGhlIG93bmVyJ3Mgam9iIGlzIHRvIGdlbmVyYXRlIFwic2NvcGVkXCIgdW5pcXVlXHJcbiAqIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGV4dGVuZHMgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBHZW5lcmF0ZXMgYSBuYW1lLCB3aGljaCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGlzIHN0eWxlc2hlZXQgKi9cclxuXHRnZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVMaWtlIGFic3RyYWN0IGNsYXNzIGlzIGEgYmFzZSBmb3IgYWxsIFwicnVsZXNcIiBkZWZpbmVkIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgLVxyXG4gKiB3aGV0aGVyIHRoZXkgY29ycmVzcG9uZCB0byByZWFsIENzc1J1bGVzIChhbmQgdGh1cyBkZXJpdmUgZnJvbSB0aGUgUnVsZSBjbGFzcykgb3Igbm90IChzdWNoIGFzXHJcbiAqIGNvdW50ZXJzLCBncmlkIGxpbmVzIGFuZCBncmlkIGFyZWFzKS5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlTGlrZVxyXG57XHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0dGhpcy5vd25lckNvbnRhaW5lciA9IG93bmVyQ29udGFpbmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGVMaWtlO1xyXG5cclxuXHQvLyBDb250YWluZXIgYXQgdGhlIHRvcCBvZiB0aGUgY2hhaW4gb2YgY29udGFpbmVycyB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy5cclxuXHRwdWJsaWMgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBjYW5cclxuXHQvLyBiZSBudWxsIGZvciBydWxlcyBub3QgY3JlYXRlZCB2aWEgYXNzaWdubWVudCB0byBzdHlsZSBkZWZpbml0aW9uIHByb3BlcnRpZXMuXHJcblx0cHVibGljIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy5cclxuXHRwdWJsaWMgY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBydWxlcy4gQXMgYSBwYXJlbnQgb2YgUnVsZUNvbnRhaW5lciwgdGhlIFJ1bGVcclxuICogY2xhc3MgaXMgYWxzbyBhbiBhbmNlc3RvciBmb3IgU3R5bGVzaGVldDsgaG93ZXZlciwgbW9zdCBvZiBpdHMgdGhlIGZpZWxkcyBhcmUgdW5kZWZpbmVkIGluXHJcbiAqIHRlIFN0eWxlc2hlZXQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElSdWxlXHJcbntcclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogUnVsZTtcclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0Ly8gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGFjdGl2YXRlZC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2hcclxuXHQvLyB0aGlzIHJ1bGUgYmVsb25ncywgaXMgZGVhY3RpdmF0ZWQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWQgeyB0aGlzLmNzc1J1bGUgPSBudWxsOyB9XHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgZ2l2ZW4gcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkUnVsZVRvRE9NKCBydWxlVGV4dDogc3RyaW5nLCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlIHwgbnVsbFxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCB4KVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgQ2Fubm90IGFkZCBDU1MgcnVsZSAnJHtydWxlVGV4dH0nYCwgeClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENTU1J1bGUtZGVyaXZlZCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgYWN0dWFsbCBDU1MgcnVsZSBpbnNlcnRlZCBpbnRvXHJcblx0Ly8gdGhlIHN0eWxlcyBzaGVldCBvciB0aGUgcGFyZW50IHJ1bGUuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciBTdHlsZXNoZWV0IG9iamVjdHMuXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHNjb3BlZCBuYW1lcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5LFxyXG5cdGNzc1ByZWZpeD86IHN0cmluZyk6IFtzdHJpbmcsc3RyaW5nXVxyXG57XHJcblx0aWYgKCFydWxlTmFtZSAmJiAhbmFtZU92ZXJyaWRlKVxyXG5cdFx0cmV0dXJuIFtcIlwiLCBcIlwiXTtcclxuXHJcblx0bGV0IG5hbWUgPSAhbmFtZU92ZXJyaWRlXHJcblx0XHQ/IG93bmVyQ29udGFpbmVyLmdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZSEpXHJcblx0XHQ6IHR5cGVvZiBuYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBuYW1lT3ZlcnJpZGVcclxuXHRcdFx0OiBuYW1lT3ZlcnJpZGUubmFtZTtcclxuXHJcblx0cmV0dXJuICFjc3NQcmVmaXhcclxuXHRcdD8gW25hbWUsbmFtZV1cclxuXHRcdDogbmFtZS5zdGFydHNXaXRoKCBjc3NQcmVmaXgpXHJcblx0XHRcdD8gW25hbWUuc3Vic3RyKCBjc3NQcmVmaXgubGVuZ3RoKSwgbmFtZV1cclxuXHRcdFx0OiBbbmFtZSwgY3NzUHJlZml4ICsgbmFtZV07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzc30gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZSwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiXHJcbmltcG9ydCB7SW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZX0gZnJvbSBcIi4vTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vLyBEZWZpbmUgc3ltYm9scyB0aGF0IGFyZSB1c2VkIGZvciBrZWVwaW5nIGltcG9ydGFudCBpbmZvcm1hdGlvbiBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZSBkb24ndCB3YW50IHRvIGJlIHZpc2libGUgdG8gZGV2ZWxvcGVycy5cclxuXHJcbi8qKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBwb2ludGluZyB0byB0aGUgc2luZ2x0b24gaW5zdGFuY2UuICovXHJcbmNvbnN0IHN5bUluc3RhbmNlID0gU3ltYm9sKFwiZGVmaW5pdGlvblwiKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBwb2ludGluZyB0byB0aGUgUnVsZUNvbnRhaW5lciBvYmplY3QgdGhhdCBpc1xyXG4gKiByZXNwb25zaWJsZSBmb3IgcHJvY2Vzc2luZyBydWxlcy5cclxuICovXHJcbmNvbnN0IHN5bUNvbnRhaW5lciA9IFN5bWJvbChcImNvbnRhaW5lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlQ29udGFpbmVyIGNsYXNzIGlzIGEgc2hhZG93IHN0cnVjdHVyZSB0aGF0IGFjY29tcGFuaWVzIGV2ZXJ5IHByb2Nlc3NlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIG9iamVjdC4gU2luY2UgU3R5bGVEZWZpbml0aW9uIGNsYXNzIGlzIGFuIGV4cG9ydGVkIGNsYXNzIHZpc2libGUgdG8gZGV2ZWxvcGVycywgd2UgZG9uJ3Qgd2FudFxyXG4gKiB0byBoYXZlIGEgbG90IG9mIGZ1bmN0aW9uYWxpdHkgaW4gaXQuIFRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCBpcyBsaW5rZWQgdG8gdGhlIFN0eWxlRGVmaW5pdGlvblxyXG4gKiBvYmplY3QgdmlhIHRoZSBbc3ltUnVsZUNvbnRhaW5lcl0gc3ltYm9sLiBJdCBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHBhcnNpbmcgcnVsZVxyXG4gKiBkZWZpbml0aW9ucywgbmFtZSBhc3NpZ25tZW50IGFuZCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuICovXHJcbmNsYXNzIFJ1bGVDb250YWluZXIgaW1wbGVtZW50cyBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgbmFtZTogc3RyaW5nLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmVtYmVkZGluZ0NvbnRhaW5lciA9IGVtYmVkZGluZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvciBhcyBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBpbnN0YW5jZS4kcGFyZW50O1xyXG5cdFx0dGhpcy5vd25lciA9IGluc3RhbmNlLiRvd25lcjtcclxuXHJcblx0XHR0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9IDA7XHJcblx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3MoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2VzcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcHV0IHJlZmVyZW5jZSB0byB0aGlzIGNvbnRhaW5lciBpbiB0aGUgc3ltYm9sIHByb3BlcnR5IG9mIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdFx0dGhpcy5pbnN0YW5jZVtzeW1Db250YWluZXJdID0gdGhpcztcclxuXHJcblx0XHQvLyBnZXQgY29udGFpbmVycyBmb3IgdGhlIHBhcmVudCBhbmQgb3duZXIgc3R5bGUgZGVmaW5pdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHRpZiAodGhpcy5vd25lcilcclxuXHRcdFx0dGhpcy50b3BMZXZlbENvbnRhaW5lciA9IHRoaXMub3duZXJbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHQvLyBpZiBvdXIgY29udGFpbmVyIGhhcyBwYXJlbnQgY29udGFpbmVyLCBwcmVmaXggb3VyIG5hbWUgd2l0aCB0aGUgdXBwZXIgb25lXHJcblx0XHRpZiAodGhpcy5wYXJlbnRDb250YWluZXIpXHJcblx0XHRcdHRoaXMubmFtZSA9IGAke3RoaXMucGFyZW50Q29udGFpbmVyLm5hbWV9XyR7dGhpcy5uYW1lfWA7XHJcblxyXG5cdFx0dGhpcy5pbXBvcnRzID0gW107XHJcblx0XHR0aGlzLm5hbWVzcGFjZXMgPSBbXTtcclxuXHRcdHRoaXMudmFycyA9IFtdO1xyXG5cdFx0dGhpcy5yZWZzID0gW107XHJcblx0XHR0aGlzLm90aGVyUnVsZXMgPSBbXTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRoZW0uXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWUsIHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSZWZlcmVuY2UoIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgVmFyUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzVmFyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGVMaWtlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlTGlrZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NBcnJheSggcHJvcFZhbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJlZmVyZW5jZSB0byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gY3JlYXRlZCBieSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHByb2Nlc3NSZWZlcmVuY2UoIHJlZjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBpbnN0YW5jZSBoYXMgbm90IGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHByb2Nlc3MgaXQgYW5kIGluZGljYXRlIHRoYXQgaXQgaXNcclxuXHRcdC8vIGVtYmVkZGVkIGludG8gb3VyIGNvbnRhaW5lciBiZWNhdXNlIG9ubHkgZGVmaW5pdGlvbnMgY3JlYXRlZCB3aXRoIHRoZSAkZW1iZWQgZnVuY3Rpb25cclxuXHRcdC8vIGFyZSBub3QgcHJvY2Vzc2VkLlxyXG5cdFx0cHJvY2Vzc0luc3RhbmNlKCByZWYsIHRoaXMpO1xyXG5cdFx0dGhpcy5yZWZzLnB1c2goIHJlZik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1ZhclJ1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCB2YXJPYmo6IFZhclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAodmFyT2JqLmNvbnRhaW5lcilcclxuXHRcdFx0dmFyT2JqID0gdmFyT2JqLmNsb25lKCk7XHJcblxyXG5cdFx0dmFyT2JqLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHRcdHRoaXMudmFycy5wdXNoKCB2YXJPYmopO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY291bnRlciBvYmplY3QuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUnVsZUxpa2UoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlTGlrZTogUnVsZUxpa2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAocnVsZUxpa2UuY29udGFpbmVyKVxyXG4gICAgICAgICAgICBydWxlTGlrZSA9IHJ1bGVMaWtlLmNsb25lKCk7XHJcblxyXG4gICAgICAgIHJ1bGVMaWtlLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBSdWxlLWRlcml2ZWQgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1J1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlOiBSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGFub3RoZXIgaW5zdGFuY2UsIHdlIGNyZWF0ZSBhIGNsb25lXHJcblx0XHQvLyBvZiB0aGUgcnVsZSBhbmQgc2V0IGl0IHRvIG91ciBpbnN0YW5jZS5cclxuXHRcdGlmIChydWxlLm93bmVyQ29udGFpbmVyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUpXHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0gPSBydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBUT0RPOiBzdXBwb3J0IGFscmVhZHkgdXNlZCBydWxlcyBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJ1bGUucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cclxuXHRcdGlmIChydWxlIGluc3RhbmNlb2YgSW1wb3J0UnVsZSlcclxuXHRcdFx0dGhpcy5pbXBvcnRzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIE5hbWVzcGFjZVJ1bGUpXHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5vdGhlclJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcnVsZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzQXJyYXkoIHByb3BWYWxzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BWYWxzIHx8IHByb3BWYWxzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBwcm9wVmFsIG9mIHByb3BWYWxzKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggbnVsbCwgcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0cHVibGljIGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb25cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgc2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBhIGdsb2JhbGx5IHVuaXF1ZSBDU1MgbmFtZSBmb3IgdGhlIGdpdmVuIHJ1bGUgbmFtZSB1bmxlc3MgdGhpcyBydWxlIG5hbWUgYWxyZWFkeVxyXG5cdCAqIGV4aXN0cyBlaXRoZXIgaW4gYSBiYXNlIGNsYXNzIG9yIGluIHRoZSBjaGFpbiBvZiBwYXJlbnQgZ3JvdXBpbmcgcnVsZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gaWYgcnVsZSBuYW1lIHdhcyBub3Qgc3BlY2lmaWVkLCBnZW5lcmF0ZSBpdCB1bmlxdWVseTsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHdlXHJcblx0XHQvLyBhbHJlYWR5IGhhdmUgdGhpcyBydWxlIG5hbWU6IGlmIHllcywgcmV0dXJuIHRoZSBhbHJlYWR5IGFzc2lnbmVkIG5hbWUuIElmIHdlIGRpZG4ndFxyXG5cdFx0Ly8gZmluZCB0aGUgbmFtZSwgdHJ5IHRvIGZpbmQgaXQgaW4gdGhlIGJhc2UgY2xhc3Nlcyk7IGlmIG5vdCBmb3VuZCB0aGVyZSwgZ2VuZXJhdGUgaXRcclxuXHRcdC8vIHVzaW5nIHRoaXMgY29udGFpbmVyJ3MgbmFtZSBhbmQgdGhlIHJ1bGUgbmFtZSAobm90ZSB0aGF0IGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgYm90aFxyXG5cdFx0Ly8gY2FuIGJlIGdlbmVyYXRlZCB1bmlxdWVseSkuXHJcblx0XHRpZiAoIXJ1bGVOYW1lKVxyXG5cdFx0XHRyZXR1cm4gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlIGlmIChydWxlTmFtZSBpbiB0aGlzLmluc3RhbmNlICYmIFwibmFtZVwiIGluIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0ubmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCBvdXQgaWYgdGhlcmUgaXMgYSBydWxlIHdpdGggdGhpcyBuYW1lIGRlZmluZWQgaW4gYSBzdHlsZXNoZWV0IGluc3RhbmNlIGNyZWF0ZWQgZm9yXHJcblx0XHRcdC8vIGEgY2xhc3MgZnJvbSB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG5cdFx0XHRsZXQgZXhpc3RpbmdOYW1lID0gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggdGhpcy5kZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lKTtcclxuXHRcdFx0cmV0dXJuIGV4aXN0aW5nTmFtZSA/IGV4aXN0aW5nTmFtZSA6IGdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRwdWJsaWMgaW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWN0aXZhdGUgcmVmZXJlbmNlZCBzdHlsZSBkZWZpbml0aW9uc1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uYWN0aXZhdGUoKTtcclxuXHJcblx0XHQvLyBpc2VydCBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT5cclxuXHRcdFx0XHR2YXJPYmoudG9Dc3NTdHJpbmcoKSkuZmlsdGVyKCB2ID0+IHYgIT0gbnVsbCkuam9pbihcIjtcIil9fWAsIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluc2VydCBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdHB1YmxpYyBjbGVhclJ1bGVzKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgLy8gaW1wb3J0IGFuZCBuYW1lc3BhY2UgcnVsZXMgY2FuIG9ubHkgZXhpc3QgaW4gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblxyXG5cdFx0Ly8gZGVhY3RpdmF0ZSBpbXBvcnRlZCBzdHlsZXNoZWV0c1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyB0aGlzIHN0eWxlc2hlZXQgaW50byBET00uICovXHJcblx0cHVibGljIGFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoKyt0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIG5vdC1lbWJlZGRlZCBzdHlsZSBkZWZpbml0aW9ucyBjcmVhdGUgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmVtYmVkZGluZ0NvbnRhaW5lcilcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gdGhpcy5lbWJlZGRpbmdDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0uaWQgPSB0aGlzLm5hbWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5kb21TdHlsZUVsbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSB0aGlzLnRvcExldmVsQ29udGFpbmVyLmRvbVN0eWxlRWxtO1xyXG5cclxuXHRcdFx0dGhpcy5pbnNlcnRSdWxlcyggdGhpcy5kb21TdHlsZUVsbSEuc2hlZXQgYXMgQ1NTU3R5bGVTaGVldCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoaXMgc3R5bGVzaGVldCBmcm9tIERPTS4gKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ3VhcmQgZnJvbSBleHRyYSBkZWFjdGl2YXRlIGNhbGxzXHJcblx0XHRpZiAodGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoLS10aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhclJ1bGVzKCk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uIGNyZWF0ZXMgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSEucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFdyaXRlcyBhbGwgcnVsZXMgcmVjdXJzaXZlbHkgdG8gdGhlIGdpdmVuIHN0cmluZy4gKi9cclxuXHRwdWJsaWMgc2VyaWFsaXplUnVsZXMoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcbiAgICAgICAgZm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuICAgICAgICAgICAgY3R4LmFkZFN0eWxlRGVmaW5pdGlvbiggcmVmKTtcclxuXHJcblx0XHQvLyBzZXJpYWxpemUgb3VyIGN1c3RvbSB2YXJpYWJsZXMgaW4gYSBcIjpyb290XCIgcnVsZVxyXG5cdFx0aWYgKHRoaXMudmFycy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguYWRkUnVsZVRleHQoIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT4gdmFyT2JqLnRvQ3NzU3RyaW5nKCkpLmZpbHRlciggdiA9PiB2ICE9IG51bGwpLmpvaW4oXCI7XCIpfX1gKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZXJpYWxpemUgYWxsIG90aGVyIHJ1bGVzXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLnNlcmlhbGl6ZSggY3R4KSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgY29udGFpbmVyIGlzIGZvciB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24uXHJcblx0cHJpdmF0ZSBnZXQgaXNUb3BMZXZlbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3duZXIgPT09IG51bGwgfHwgdGhpcy5vd25lciA9PT0gdGhpcy5pbnN0YW5jZSB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBwcm9jZXNzZWQuXHJcblx0cHVibGljIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBjcmVhdGVzIGFuIGluc3RhbmNlIG9mLlxyXG5cdHByaXZhdGUgZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3NcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGlzIGNvbnRhaW5lciwgd2hpY2gsIGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgaXMgZWl0aGVyIHRha2VuIGZyb20gdGhlIGNsYXNzXHJcblx0Ly8gZGVmaW5pdGlvbiBuYW1lIG9yIGdlbmVyYXRlZCB1bmlxdWVseS5cclxuXHRwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgcGFyZW50IHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgaXMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgcGFyZW50PzogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIHBhcmVudCBzdHlsZSBkZWZpbnRpb24uIElmIG91ciBjb250YWluZXIgaXMgdG9wLWxldmVsLFxyXG5cdC8vIHRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgcGFyZW50Q29udGFpbmVyPzogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBncm91cGluZyBydWxlcyB0aGF0XHJcblx0Ly8gbGVhZCB0byB0aGlzIHJ1bGUgY29udGFpbmVyLiBGb3IgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb25zLCB0aGlzIHBvaW50cyB0byB0aGUgc2FtZVxyXG5cdC8vIHNpbmdsZXRvbiBkZWZpbml0aW9uIGluc3RhbmNlIGFzIHRoZSAnaW5zdGFuY2UnIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgb3duZXI6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdGhhdCBiZWxvbmdzIHRvIHRoZSBvd25lciBzdHlsZSBkZWZpbnRpb24uIElmIG91ciBjb250YWluZXIgaXMgdG9wLWxldmVsLFxyXG5cdC8vIHRoaXMgcHJvcGVydHkgcG9pbnRzIHRvIGB0aGlzYC4gTmFtZXMgZm9yIG5hbWVkIHJ1bGVzIGFyZSBjcmVhdGVkIHVzaW5nIHRoaXMgY29udGFpbmVyLlxyXG5cdHByaXZhdGUgdG9wTGV2ZWxDb250YWluZXI6IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBjb3JyZXNwb25kaW5nIHRvIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIHRoYXQgaXMgZW1iZWRkaW5nIG91ciBpbnN0YW5jZVxyXG5cdC8vICh0aGF0IGlzLCB0aGUgaW5zdGFuY2UgY29ycmVzcG9uZGluZyB0byBvdXIgY29udGFpbmVyKS4gSWYgZGVmaW5lZCwgdGhpcyBjb250YWluZXInc1xyXG5cdC8vIGA8c3R5bGU+YCBlbGVtZW50IGlzIHVzZWQgdG8gaW5zZXJ0IENTUyBydWxlcyBpbnRvIGluc3RlYWQgb2YgdG9wTGV2ZWxDb250YWluZXIuXHJcblx0cHJpdmF0ZSBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBMaXN0IG9mIHJlZmVyZW5jZXMgdG8gb3RoZXIgc3R5bGUgZGVmaW5pdGlvbnMgY3JlYWVkIHZpYSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHJlZnM6IFN0eWxlRGVmaW5pdGlvbltdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBpbXBvcnQgcnVsZXNcclxuXHRwcml2YXRlIGltcG9ydHM6IEltcG9ydFJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBAbmFtZXNwYWNlIHJ1bGVzXHJcblx0cHJpdmF0ZSBuYW1lc3BhY2VzOiBOYW1lc3BhY2VSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgY3VzdG9tIHZhcmlhYmxlIHJ1bGVzLlxyXG5cdHByaXZhdGUgdmFyczogVmFyUnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIHJ1bGVzIHRoYXQgYXJlIG5vdCBpbXBvcnRzLCBuYW1lc3BhY2VzLCBjdXN0b20gdmFycywgcmVmZXJlbmNlcyBvciBncm91cGluZyBydWxlcy5cclxuXHRwcml2YXRlIG90aGVyUnVsZXM6IFJ1bGVbXTtcclxuXHJcblx0Ly8gXCI6cm9vdFwiIHJ1bGUgd2hlcmUgYWxsIGN1c3RvbSBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIGFyZSBkZWZpbmVkLlxyXG5cdHByaXZhdGUgY3NzQ3VzdG9tVmFyU3R5bGVSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgY291bnQgb2YgYWN0aXZhdGlvbiByZXF1ZXN0cy5cclxuXHRwcml2YXRlIGFjdGl2YXRpb25SZWZDb3VudDogbnVtYmVyO1xyXG5cclxuXHQvLyBET00gc3R5bGUgZWxlbW50XHJcblx0cHVibGljIGRvbVN0eWxlRWxtOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTmFtZSBnZW5lcmF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2VuYWJsZVNob3J0TmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0c191c2VVbmlxdWVTdHlsZU5hbWVzID0gZW5hYmxlO1xyXG5cdHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IHByZWZpeCA/IHByZWZpeCA6IFwiblwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIG5hbWVzIGZvciBzdHlsZSBlbGVtZW50cyAoY2xhc3NlcywgIGFuaW1hdGlvbnMsIGV0Yy4pXHJcbiAqIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHRydWUgaW4gdGhlIFJlbGVhc2UgYnVpbGQgb2YgdGhlIGxpYnJhcnkgYW5kIGZhbHNlIGluIHRoZSBEZWJ1ZyBidWlsZC5cclxuICovXHJcbmxldCBzX3VzZVVuaXF1ZVN0eWxlTmFtZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuLy8vICNpZiBERUJVR1xyXG5zX3VzZVVuaXF1ZVN0eWxlTmFtZXMgPSBmYWxzZTtcclxuLy8vICNlbmRpZlxyXG5cclxuLyoqXHJcbiAqIFByZWZpeCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBzdHlsZSBuYW1lcy4gSWYgdW5kZWZpbmVkLCBhIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqL1xyXG5sZXQgc191bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gXCJuXCI7XHJcblxyXG4vKiogTmV4dCBudW1iZXIgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgaWRlbnRpZmllcnMuICovXHJcbmxldCBzX25leHRVbmlxdWVJRCA9IDE7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgbmFtZSB0byB1c2UgZm9yIHRoZSBnaXZlbiBydWxlIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNoZWV0LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKCBzaGVldE5hbWU6IHN0cmluZywgcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHNfdXNlVW5pcXVlU3R5bGVOYW1lc1xyXG5cdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeClcclxuXHRcdDogYCR7c2hlZXROYW1lfV8ke3J1bGVOYW1lfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBuYW1lLCB3aGljaCBjYW4gYmUgdXNlZCBlaXRoZXIgZm9yIHN0eWxlIGVsZW1lbnQncyBJRCBvciBvciBjbGFzcyxcclxuICogaWRlbnRpZmllciBvciBhbmltYXRpb24gbmFtZS4gTmFtZXMgYXJlIGdlbmVyYXRlZCB1c2luZyBhIHNpbXBsZSBpbmNyZW1lbnRpbmcgbnVtYmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVOYW1lKCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiAocHJlZml4ID8gcHJlZml4IDogc191bmlxdWVTdHlsZU5hbWVzUHJlZml4KSArIHNfbmV4dFVuaXF1ZUlEKys7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTG9va3MgdXAgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb25cclxuLy8gY2xhc3MuIElmIGZvdW5kIGFuZCBpZiB0aGUgcHJvcGVydHkgaXMgYSBydWxlLCB0aGVuIHJldHVybnMgdGhlIG5hbWUgYXNzaWduZWQgZm9yIGl0LlxyXG5mdW5jdGlvbiBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcywgcnVsZU5hbWU6IHN0cmluZylcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbkNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBwcm90b3R5cGVzXHJcbiAgICBmb3IoIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGRlZmluaXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIGJhc2VDbGFzcyAhPT0gU3R5bGVEZWZpbml0aW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBiYXNlIGNsYXNzIGFscmVhZHkgaGFzIGFuIGFzc29jaWF0ZWQgaW5zdGFuY2U7IGlmIHllcywgY2hlY2sgd2hldGhlclxyXG5cdFx0Ly8gaXQgaGFzZSBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIHJ1bGUgbmFtZS4gSWYgeWVzLCB0aGVuIHVzZSB0aGlzIHJ1bGUncyBhbHJlYWR5XHJcblx0XHQvLyBnZW5lcmF0ZWQgbmFtZSAoaWYgZXhpc3RzKS5cclxuXHRcdGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYmFzZUluc3QgPSBiYXNlQ2xhc3Nbc3ltSW5zdGFuY2VdO1xyXG5cdFx0XHRpZiAoYmFzZUluc3QgJiYgcnVsZU5hbWUgaW4gYmFzZUluc3QgJiYgXCJuYW1lXCIgaW4gYmFzZUluc3RbcnVsZU5hbWVdKVxyXG5cdFx0XHRcdHJldHVybiBiYXNlSW5zdFtydWxlTmFtZV0ubmFtZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm9jZXNzaW5nIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgYXNzaWducyBuYW1lcyB0byBpdHMgcnVsZXMuXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdlIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gaW5zdGFuY2UgYWxyZWFkeVxyXG4gKiBjcmVhdGVkIGZvciBpdCBhcyBhIGNsYXNzIHdpbGwgaGF2ZSBvbmx5IGEgc2luZ2xlIGFzc29jaWF0ZWQgaW5zdGFuZSBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXNcclxuICogdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAqIFxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCAoYW4gaW5zdGFuY2Ugb2YgdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcykgdGhlbiB3ZSBjaGVjayB3aGV0aGVyXHJcbiAqIGl0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBJZiB5ZXMsIHdlIGp1c3QgcmV0dXJuIGl0IGJhY2s7IGlmIG5vLCB3ZSBhc3NpZ24gbmV3IHVuaXF1ZSBuYW1lc1xyXG4gKiB0byBpdHMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3M6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuXHRwYXJlbnQ/OiBTdHlsZURlZmluaXRpb24pOiBTdHlsZURlZmluaXRpb24gfCBudWxsXHJcbntcclxuXHRpZiAoIWluc3RPckNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGluc3RPckNsYXNzIGhhcyB0eXBlIFwib2JqZWN0XCIgaWYgaXQgaXMgYW4gaW5zdGFuY2UgYW5kIFwiZnVuY3Rpb25cIiBpZiBpdCBpcyBhIGNsYXNzXHJcblx0aWYgKHR5cGVvZiBpbnN0T3JDbGFzcyA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRwcm9jZXNzSW5zdGFuY2UoIGluc3RPckNsYXNzKTtcclxuXHRcdHJldHVybiBpbnN0T3JDbGFzcztcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBkZWZpbml0aW9uIGNsYXNzIGlzIGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIGFuIGluc3RhbmNlXHJcblx0XHRyZXR1cm4gaW5zdE9yQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpXHJcblx0XHRcdD8gaW5zdE9yQ2xhc3Nbc3ltSW5zdGFuY2VdXHJcblx0XHRcdDogcHJvY2Vzc0NsYXNzKCBpbnN0T3JDbGFzcywgcGFyZW50KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBieSBjcmVhdGluZyBpdHMgaW5zdGFuY2UgYW5kIGFzc29jaWF0aW5nIGFcclxuICogcnVsZSBjb250YWluZXIgb2JqZWN0IHdpdGggaXQuIFRoZSBjbGFzcyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5zdGFuY2UgdXNpbmcgdGhlXHJcbiAqIFN5bWJvbCBwcm9wZXJ0eS4gVGhlIG93bmVyIHBhcmFtZXRlciBpcyBhIHJlZmVyZW5jZSB0byB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvblxyXG4gKiBvYmplY3Qgb3IgbnVsbCBpZiB0aGUgZ2l2ZW4gY2xhc3MgaXMgaXRzZWxmIGEgdG9wLWxldmVsIGNsYXNzICh0aGF0IGlzLCBpcyBub3QgYSBjbGFzc1xyXG4gKiB0aGF0IGRlZmluZXMgcnVsZXMgd2l0aGluIG5lc3RlZCBncm91cGluZyBydWxlcykuXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ2xhc3MoIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdHBhcmVudD86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG4gICAgLy8gcHJvY2VzcyBhbGwgdGhlIGJhc2UgY2xhc3NlcyBzbyB0aGF0IHJ1bGUgbmFtZXMgYXJlIGdlbmVyYXRlZC4gV2UgZG9uJ3QgYWN0aXZhdGUgc3R5bGVzXHJcbiAgICAvLyBmb3IgdGhlc2UgY2xhc3NlcyBiZWNhdXNlIGRlcml2ZWQgY2xhc3NlcyB3aWxsIGhhdmUgYWxsIHRoZSBydWxlcyBmcm9tIGFsbCB0aGUgYmFzZSBjbGFzc2VzXHJcbiAgICAvLyBhcyB0aGVpciBvd24gYW5kIHNvIHRoZXNlIHJ1bGVzIHdpbGwgYmUgYWN0aXZhdGVkIGFzIHBhcnQgb2YgdGhlIGRlcml2ZWQgY2xhc3MuXHJcbiAgICBmb3IoIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGRlZmluaXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIGJhc2VDbGFzcyAhPT0gU3R5bGVEZWZpbml0aW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKVxyXG4gICAge1xyXG5cdFx0cHJvY2Vzc0NsYXNzKCBiYXNlQ2xhc3MsIHBhcmVudCk7XHJcbiAgICB9XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBkZWZpbml0aW9uQ2xhc3MoIHBhcmVudCk7XHJcblxyXG5cdFx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0XHRsZXQgbmFtZSA9IHNfdXNlVW5pcXVlU3R5bGVOYW1lcyB8fCAhZGVmaW5pdGlvbkNsYXNzLm5hbWVcclxuXHRcdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoKVxyXG5cdFx0XHQ6IGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cclxuXHRcdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSk7XHJcblx0XHRkZWZpbml0aW9uQ2xhc3Nbc3ltSW5zdGFuY2VdID0gaW5zdGFuY2U7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgU3R5bGUgRGVmaW5pdGlvbiBDbGFzcyAnJHtkZWZpbml0aW9uQ2xhc3MubmFtZX0nYCwgZXJyKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIGFuZCBhc3NpZ25zIG5hbWVzIHRvIGl0cyBydWxlcy4gSWYgdGhlXHJcbiAqIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCB3ZSBkbyBub3RoaW5nOyBvdGhlcndpc2UsIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcik6IHZvaWRcclxue1xyXG5cdC8vIGlmIHRoZSBpbnN0YW5jZSBpcyBhbHJlYWR5IHByb2Nlc3NlZCwganVzdCByZXR1cm47IGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlXHJcblx0Ly8gZW1iZWRkaW5nQ29udGFpbmVyIHBhcmFtZXRlci5cclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGluc3RhbmNlW3N5bUNvbnRhaW5lcl0gYXMgUnVsZUNvbnRhaW5lcjtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0bGV0IG5hbWUgPSBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRpZiAoIXNfdXNlVW5pcXVlU3R5bGVOYW1lcylcclxuXHR7XHJcblx0XHRsZXQgZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2UuY29uc3RydWN0b3I7XHJcblx0XHRpZiAoZGVmaW5pdGlvbkNsYXNzLm5hbWUpXHJcblx0XHRcdG5hbWUgKz0gXCJfXCIgKyBkZWZpbml0aW9uQ2xhc3MubmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIGNyZWF0ZSBjb250YWluZXIgLSB0aGlzIHdpbGwgYXNzb2NpYXRlIHRoZSBuZXcgY29udGFpbmVyIHdpdGggdGhlIGluc3RhbmNlIGFuZCBwcm9jZXNzXHJcblx0Ly8gdGhlIHJ1bGVzLlxyXG5cdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSwgZW1iZWRkaW5nQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBydWxlIGNvbnRhaW5lciBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiBSdWxlQ29udGFpbmVyXHJcbntcclxuXHRyZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZVtzeW1Db250YWluZXJdIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmIHRoZSBpbnB1dCBvYmplY3QgaXNcclxuICogbm90IGEgc3R5bGUgZGVmaW5pdGlvbiBidXQgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCBvYnRhaW4gc3R5bGUgZGVmaW5pdGlvbiBieSBjYWxsaW5nIHRoZSAkdXNlXHJcbiAqIGZ1bmN0aW9uLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lc1xyXG4gKiBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZCB0byBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXJcclxuICogZ29lcyB1cCB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdFx0cnVsZUNvbnRhaW5lci5hY3RpdmF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZVxyXG4gKiBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY291bnQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxyXG5cdFx0XHRydWxlQ29udGFpbmVyLmRlYWN0aXZhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gdG8gdGhlIGdpdmVuIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG57XHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHQgICAgcnVsZUNvbnRhaW5lci5zZXJpYWxpemVSdWxlcyggY3R4KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lDdXN0b21WYXIsIE9uZU9yTWFueX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFBzZXVkb0VudGl0eSwgQ3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzcywgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHJvcGVydGllcyB1c2VkIGluIHRoZSBbW0NvbWJpbmVkU3R5bGVzZXRdXSB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgZGVwZW5kZW50IHJ1bGVzICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yQ29tYmluYXRvciA9IFwiJlwiIHwgXCImLFwiIHwgXCImIFwiIHwgXCImPlwiIHwgXCImK1wiIHwgXCImflwiIHwgXCIsJlwiIHwgXCIgJlwiIHwgXCI+JlwiIHwgXCIrJlwiIHwgXCJ+JlwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbWJpbmVkU3R5bGVzZXQgdHlwZSBleHRlbmRzIHRoZSBTdHlsZXNldCB0eXBlIHdpdGggY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgcHJvdmlkZVxyXG4gKiBhZGRpdGlvbmFsIG1lYW5pbmcgdG8gdGhlIHN0eWxlc2V0IGFuZCBhbGxvdyBidWlsZGluZyBkZXBlbmRlbnQgc3R5bGUgcnVsZXM6XHJcbiAqIC0gVGhlIGArYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBwc2V1ZG8gY2xhc3MgbmFtZXMgKGUuZy4gXCI6aG92ZXJcIikgb3IgcHNldWRvIGVsZW1lbnQgbmFtZXMgKGUuZy4gXCI6OmFmdGVyXCIpLlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIG5hbWVzIG9mIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgKGUuZy4gXCI6bnRoLWNoaWxkXCIpIG9yIHBhcmFtZXRlcml6ZWRcclxuICogICBwc2V1ZG8gZWxlbWVudHMgKGUuZy4gXCI6OnNsb3R0ZWRcIikuIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBhIHR1cGxlLCB3aGVyZSB0aGUgZmlyc3RcclxuICogICBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgZm9yIHRoZSBzZWxlY3RvciBhbmQgdGhlIHNlY29uZCBlbGVtZW50IGlzIHRoZSBzdHlsZXNldC5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCB0aGUgYW1wZXJzYW5kIHN5bWJvbCAoJyYnKSB0aGF0IGNvbnRhaW4gYXJyYXlzIG9mIHR3by1lbGVtZW50IHR1cGxlcyBlYWNoXHJcbiAqICAgZGVmaW5pbmcgYSBzZWxlY3RvciBhbmQgYSBzdHlsZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgc2VsZWN0b3IuIFNlbGVjdG9ycyBjYW4gdXNlIHRoZVxyXG4gKiAgIGFtcGVyc2FuZCBzeW1ib2wgdG8gcmVmZXIgdG8gdGhlIHBhcmVudCBzdHlsZSBzZWxlY3Rvci4gSWYgdGhlIGFtcGVyc2FuZCBzeW1ib2wgaXMgbm90IHVzZWQsXHJcbiAqICAgdGhlIHNlbGVjdG9yIHdpbGwgYmUgc2ltcGx5IGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcbiAqIFxyXG4gKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gc3R5bGUgcnVsZXMgKGUuZy4gJGNsYXNzKSBhY2NlcHQgdGhlIENvbWJpbmVkU3R5bGVzZXQgYXMgYSBwYXJhbWV0ZXIsXHJcbiAqIGZvciBleGFtcGxlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxuICoge1xyXG4gKiAgICAgY2xhc3MxID0gY3NzLiRjbGFzcyh7fSlcclxuICogICAgIGNsYXNzMiA9IGNzcy4kY2xhc3Moe1xyXG4gKiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gKiAgICAgICAgIFwiOmhvdmVyXCIgOiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIgfSxcclxuICogICAgICAgICBcIiZcIjogW1xyXG4gKiAgICAgICAgICAgICBbIFwibGkgPiAmXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiIH0gXSxcclxuICogICAgICAgICAgICAgWyB0aGlzLmNsYXNzMSwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIgfSBdXHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgfSlcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgd2lsbCB0cmFuc2xhdGUgdG8gdGhlIGZvbGxvd2luZyBDU1MgKGNsYXNzIG5hbWUgaXMgYXV0by1nZW5lcmF0ZWQpOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB3aGl0ZTsgfVxyXG4gKiAubTEyMzpob3ZlciB7IGJhY2tncm91bmRDb2xvcjogZ3JleTsgfVxyXG4gKiBsaSA+IC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3c7IH1cclxuICogLm0xMjMubTEyMiB7IGJhY2tncm91bmRDb2xvcjogb3JhbmdlOyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tYmluZWRTdHlsZXNldCA9IFN0eWxlc2V0ICZcclxuXHR7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBDb21iaW5lZFN0eWxlc2V0IH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHldPzogW0lQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5W0tdLCBDb21iaW5lZFN0eWxlc2V0XVtdIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMgdGhhdCBoYXZlIGEgbmFtZTsgdGhhdCBpcyxcclxuICogY2xhc3MsIElELCBrZXlmcmFtZXMgYW5kIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3RydWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBkZXBlbmRlbnQgcnVsZXMgb2YgYSBzdHlsZSBydWxlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEZXBlbmRlbnRSdWxlcyA9XHJcblx0eyBbSyBpbiBQc2V1ZG9FbnRpdHldPzogSVN0eWxlUnVsZSB9ICZcclxuXHR7IFtLIGluIFNlbGVjdG9yQ29tYmluYXRvcl0/OiBJU3R5bGVSdWxlW10gfSAmXHJcblx0eyBbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlW10gfTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxpbmcgcnVsZSBpbiBhIHN0eWxlIHNoZWV0LiBTdHlsZSBydWxlcyBjYW4gYmUgdXNlZFxyXG4gKiBhbnl3aGVyZSB3aGVyZSBzdHlsZSBwcm9wZXJ0aWVzIGNhbiBiZSBkZWZpbmVkOiBjbGFzcyBydWxlcywgSUQgcnVsZXMsIHNlbGVjdG9yIHJ1bGVzLFxyXG4gKiBrZXlmcmFtZXMsIGV0Yy4gU3R5bGVSdWxlIGRlZmluZXMgYSBzdHlsZXNldCBhbmQgY2FuIG9wdGlvbmFsbHkgcG9pbnQgdG8gb25lIG9yIG1vcmUgc3R5bGUgcnVsZXNcclxuICogZnJvbSB3aGljaCBpdCBpbmhlcml0cy4gQSBzdHlsZXNldCBjb21iaW5lcyBhbGwgdGhlIHByb3BlcnRpZXMgZnJvbSBpdHMgb3duIHByb3BlcnR5IGJsb2NrIGFzXHJcbiAqIHdlbGwgYXMgZnJvbSBhbGwgb2Ygc3R5bGUgcnVsZXMgaXQgaW5oZXJpdGVzIGZyb20uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3R5bGVSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHJlYWRvbmx5IHNlbGVjdG9yVGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBPYmplY3QgY29udGFpbmluZyBkZXBlbmRlbnQgcnVsZXMuIFByb3BlcnR5IG5hbWVzIGFyZSB0YWtlbiBmcm9tIHNwZWNpYWwgcHJvcGVydGllc1xyXG5cdCAqIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBUaGlzIG9iamVjdCBhbGxvd3MgY2FsbGVycyB0byBhY2Nlc3MgZGVwZW5kZW50IHJ1bGVzIHRvIGNoYW5nZVxyXG5cdCAqIHN0eWxlIHByb3BlcnR5IHZhbHVlcyBwcm9ncmFtbWF0aWNhbGx5LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG1vbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBjdXN0b21WYXIgSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBjdXN0b21WYXI6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0aW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRTdHlsZVJ1bGUgaW50ZXJmYWNlIGNvbWJpbmVzIElTdHlsZVJ1bGUgYW5kIElOYW1lZEVudGl0eSBpbnRlcmZhY2VzLiBUaGlzIGlzIHVzZWRcclxuICogZm9yIGNsYXNzIGFuZCBJRCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHdoZXJlIHRoZSBzZWxlY3RvciBpcyBhIHNpbmdsZSBjbGFzcyBuYW1lLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NSdWxlIGV4dGVuZHMgSU5hbWVkU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgY2xhc3MgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0NsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzTmFtZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjb21iaW5hdGlvbiBvZiB0d28gb3IgbW9yZSBjbGFzcyBuYW1lcy4gSXQgY2FuIGJlXHJcbiAqIHVzZWQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gY3JlYXRlIGVsZW1lbnRzIHdpdGggbW9yZSB0aGFuIG9uZSBDU1MgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc05hbWVSdWxlIGV4dGVuZHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogTmFtZSBvZiBhbGwgdGhlIGNsYXNzIG5hbWVzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRyZWFkb25seSBjc3NDbGFzc05hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJRFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHdoZXJlIHRoZSBzZWxlY3RvciBpcyBhIHNpbmdsZSBlbGVtZW50IElELlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSURSdWxlIGV4dGVuZHMgSU5hbWVkU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgZWxlbWVudCBJRCBwcmVmaXhlZCB3aXRoIFwiI1wiICovXHJcblx0cmVhZG9ubHkgY3NzSUROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25XYXlwb2ludCB0eXBlIGRlZmluZXMgYSB0eXBlIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgd2F5cG9pbnQgaW4gYW5cclxuICogYW5pbWF0aW9uIHNlcXVlbmNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uV2F5cG9pbnQgPSBPbmVPck1hbnk8XCJmcm9tXCIgfCBcInRvXCIgfCBudW1iZXI+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25TdHlsZXMgdHlwZSBkZWZpbmVzIGEgb2JqZWN0IGNvbnRhaW5pbmcgc3R5bGUgcHJvcGVydGllcyBmb3IgYW4gYW5pbWF0aW9uIGZyYW1lLlxyXG4gKiBTdHlsZXNldHMgZm9yIGtleWZyYW1lcyBhbGxvdyBjdXN0b20gcHJvcGVydGllcyAodmlhIFwiLS1cIikuIEFuaW1hdGlvbiBzdHlsZXNldCBjYW4gZXh0ZW5kXHJcbiAqIG90aGVyIHN0eWxlIHJ1bGVzOyBob3dldmVyLCBhbnkgZGVwZW5kZW50IHJ1bGVzIHdpbGwgYmUgaWdub3JlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblN0eWxlc2V0ID0gU3R5bGVzZXQgJiB7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZSB0eXBlIGRlZmluZXMgYSBzaW5nbGUga2V5ZnJhbWUgd2l0aGluIGEgQGtleWZyYW1lcyBydWxlLlxyXG4gKiBUaGUgd2F5cG9pbnQgY2FuIGJlIHNwZWNpZmllZCBhcyBcImZyb21cIiBvciBcInRvXCIgc3RyaW5ncyBvciBhcyBhIG51bWJlciAwIHRvIDEwMCwgd2hpY2ggd2lsbCBiZVxyXG4gKiB1c2VkIGFzIGEgcGVyY2VudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZyYW1lID0gW0FuaW1hdGlvbldheXBvaW50LCBBbmltYXRpb25TdHlsZXNldF07XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRrZXlmcmFtZXNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZSB8IG51bGw7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN0eWxlIHJ1bGVzIHJlcHJlc2VudGluZyBhbmltYXRpb24gZnJhbWVzICovXHJcblx0cmVhZG9ubHkgZnJhbWVSdWxlczogSUFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25GcmFtZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzaW5nbGUgZnJhbWUgaW4gdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHJlYWRvbmx5IHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludDtcclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzS2V5ZnJhbWVSdWxlOiBDU1NLZXlmcmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVmFyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHZhcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBleHRlbmRzIElOYW1lZEVudGl0eSwgSUN1c3RvbVZhcjxWYXJWYWx1ZVR5cGU8Sz4+XHJcbntcclxuXHQvKiogTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdHJlYWRvbmx5IHRlbXBsYXRlOiBLO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjb3VudGVyICovXHJcblx0cmVhZG9ubHkgY291bnRlck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogVGhlIElDb3VudGVyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQGNvdW50ZXItc3R5bGUgcnVsZS5cclxuLy8gICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGNvdW50ZXJTdHlsZV1dIGZ1bmN0aW9uLlxyXG4vLyAgKi9cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclN0eWxlUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxuLy8ge1xyXG4vLyBcdC8qKiBTT00gY291bnRlci1zdHlsZSBydWxlICovXHJcbi8vIFx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTQ291bnRlclN0eWxlUnVsZSB8IG51bGw7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSW1wb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGltcG9ydF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1wb3J0UnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGltcG9ydCBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTSW1wb3J0UnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRm9udEZhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGZvbnQtZmFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZm9udGZhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvbnRGYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTRm9udEZhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lc3BhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbmFtZXNwYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lc3BhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTTmFtZXNwYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFnZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skcGFnZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHJlYWRvbmx5IHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gcGFnZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUGFnZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyaWRMaW5lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRlZmluaXRpb24gb2YgYSBuYW1lZCBncmlkIGxpbmUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRncmlkbGluZV1dIGZ1bmN0aW9uIG9yIGNyZWF0ZWRcclxuICogd2hlbiBhIGdyaWQgYXJlYSBpcyBkZWZpbmVkIHVzaW5nIHRoZSBbWyRncmlkYXJlYV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZExpbmVSdWxlIGV4dGVuZHMgSU5hbWVkRW50aXR5XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxpbmUgaXMgYSBzdGFydCBvciBlbmQgbGluZSBvZiBhIGdyaWQgYXJlYS4gVGhlIHZhbHVlIGlzIHRydWVcclxuICAgICAqIGlmIHRoaXMgaXMgdGhlIHN0YXJ0IGxpbmU7IGZhbHNlIGlmIHRoaXMgaXMgdGhlIGVuZCBsaW5lOyBhbmQgdW5kZWZpbmVkIGlmIHRoZSBsaW5lIGlzXHJcbiAgICAgKiBub3QgcmVsYXRlZCB0byBhbnkgYXJlYS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaXNTdGFydEVuZE9yTm9uZT86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBncmlkIGFyZWEgb2Ygd2hpY2ggdGhlIGxpbmUgaXMgZWl0aGVyIGEgc3RhcnQgb3IgYW4gZW5kIGxpbmUuIEl0IGlzIGRlZmluZWRcclxuICAgICAqIG9ubHkgaWYgdGhlIGxpbmUgbmFtZSBlbmRzIHdpdGggXCItc3RhcnRcIiBvciBcIi1lbmRcIi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYXJlYU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHcmlkQXJlYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkZWZpbml0aW9uIG9mIGEgbmFtZWQgZ3JpZCBhcmUuIEdyaWQgYXJlYSBydWxlXHJcbiAqIGRlZmluZXMgdHdvIGxpbmUgcnVsZXM6IGZvciBpdHMgc3RhcnQgYW5kIGVuZCBsaW5lcy5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGdyaWRhcmVhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkQXJlYVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG4gICAgLyoqIFN0YXJ0IGxpbmUgb2YgdGhlIGFyZWEuICovXHJcbiAgICByZWFkb25seSBzdGFydExpbmU6IElHcmlkTGluZVJ1bGU7XHJcblxyXG4gICAgLyoqIEVuZCBsaW5lIG9mIHRoZSBhcmVhLiAqL1xyXG4gICAgcmVhZG9ubHkgZW5kTGluZTogSUdyaWRMaW5lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU3ltYm9sIHRoYXQgaXMgdXNlZCBieSB0aGUgYCRwYXJlbnRgIHByb3BlcnR5IGluIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgdGhhdCBrZWVwcyByZWZlcmVuY2VcclxuICogdG8gdGhlIHBhcm50IHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIERldmVsb3BlcnMgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGFjY2VzcyBydWxlcyBpblxyXG4gKiB0aGUgY2hhaW4gb2YgbmVzdGVkIGdyb3VwaW5nIHJ1bGVzLiBXZSBuZWVkIHRoaXMgc3ltYm9sIHRvIGF2b2lkIGVudW1lcmF0aW5nIHRoZSBgJHBhcmVudGBcclxuICogcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBzeW1QYXJlbnQgPSBTeW1ib2woXCJwYXJlbnRcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBgJG93bmVyYCBwcm9wZXJ0eSBpbiB0aGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzIHRoYXQga2VlcHMgcmVmZXJlbmNlXHJcbiAqIHRvIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gRGV2ZWxvcGVycyBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYWNjZXNzIHJ1bGVzIGluXHJcbiAqIHRoZSBjaGFpbiBvZiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMuIFdlIG5lZWQgdGhpcyBzeW1ib2wgdG8gYXZvaWQgZW51bWVyYXRpbmcgdGhlIGAkb3duZXJgXHJcbiAqIHByb3BlcnR5IHdoZW4gcHJvY2Vzc2luZyB0aGUgcnVsZXMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuY29uc3Qgc3ltT3duZXIgPSBTeW1ib2woXCJvd25lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYSBiYXNlIGZvciBhbGwgY2xhc3NlcyB0aGF0IGNvbnRhaW4gZGVmaW5pbml0aW9ucyBvZiBDU1MgcnVsZXMuXHJcbiAqIEB0eXBlcGFyYW0gUCBQYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gUGFyZW50IG9mIHRvcC1sdmVsIGNsYXNzIGlzIG51bGwuXHJcbiAqIEB0eXBlcGFyYW0gTyBUb3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgd2hpY2ggaXMgdGhlIG93bmVyIG9mIHRoaXMgY2xhc3MuIFRoZSB0b3AtbGV2ZWxcclxuICogY2xhc3MgaXMgaXRzIG93biBvd25lci5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZURlZmluaXRpb248UCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueSwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhcmUgY3JlYXRlZCBkaXJlY3RseSBvbmx5IGJ5IHRoZSAqc3R5bGVkIGNvbXBvbmVudHMqIC0gdGhhdCBpcyxcclxuXHQgKiBjb21wb25lbnRzIHRoYXQgdXNlIGRpZmZlcmVudCBzdHlsZXMgZm9yIGVhY2ggaW5zdGFuY2UuIE90aGVyd2lzZSwgc3R5bGUgZGVmaW5pdGlvblxyXG5cdCAqIGNsYXNzIGluc3RhbmNlcyBhcmUgY3JlYXRlZCB3aGVuIGVpdGhlciB0aGUgW1skdXNlXV0gb3IgW1thY3RpdmF0ZV1dIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gcGFyZW50IFJlZmVyZW5jZSB0byB0aGUgcGFyZW50IHN0eWxlIGRlZmluaXRpb24gY2xhc3NcclxuXHQgKi9cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHBhcmVudD86IFApXHJcblx0e1xyXG5cdFx0dGhpc1tzeW1QYXJlbnRdID0gcGFyZW50O1xyXG5cclxuICAgICAgICAvLyBPd25lciBpcyB0YWtlbiBmcm9tIHRoZSBwYXJlbnQgY2xhc3M7IGEgdG9wLWxldmVsIGNsYXNzIGlzIGl0cyBvd24gb3duZXIuXHJcblx0XHR0aGlzW3N5bU93bmVyXSA9IHBhcmVudCA/IHBhcmVudC4kb3duZXIgOiB0aGlzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVmZXJzIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3aGljaCBpcyB0aGUgcGFybnQgb2YgdGhpcyBzdHlsZVxyXG4gICAgICogZGVmaW5pdGlvbiBvYmplY3QgaW4gdGhlIGNoYWluIG9mIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhyb3VnaCB0aGlzIG1lbWJlciwgYWxsIHJ1bGVzXHJcbiAgICAgKiBhbmQgb3RoZXIgbWVtYmVycyBkZWZpbmVkIGluIHRoZSBwYXJlbnQgZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCAkcGFyZW50KCk6IFAgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpc1tzeW1Pd25lcl07IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVmZXJzIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3aGljaCBpcyB0aGUgb3duZXIgb2ZcclxuXHQgKiB0aGlzIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LiBUaGUgb3duZXIgaXMgdGhlIHRvcC1sZXZlbCBjbGFzcyBpbiB0aGUgY2hhaW4gb2Ygc3R5bGVcclxuXHQgKiBkZWZpbml0aW9uIGNsYXNzZXMuIFRocm91Z2ggdGhpcyBtZW1iZXIsIGFsbCBydWxlcyBhbmQgb3RoZXIgbWVtYmVycyBkZWZpbmVkIGluIHRoZSBvd25lclxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3MgY2FuIGJlIGFjY2Vzc2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgJG93bmVyKCk6IE8gfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpc1tzeW1Pd25lcl07IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGNhbiBiZSBjcmVhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxQLE8+ID0gYW55LFxyXG4gICAgUCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueSwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKiBBbGwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIHNob3VsZCBjb25mb3JtIHRvIHRoaXMgY29uc3RydWN0b3IgKi9cclxuXHRuZXcoIHBhcmVudD86IFApOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyb3VwUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGdyb3VwaW5nIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JvdXBSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGRlZmluaW5nIHRoZSBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGVcclxuXHRyZWFkb25seSBydWxlczogVDtcclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTR3JvdXBpbmdSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdXBwb3J0c1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHN1cHBvcnRzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0ZWQgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGlzIHJ1bGUncyBxdWVyeSAqL1xyXG4gICAgcmVhZG9ubHkgaXNTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1N1cHBvcnRzUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWVkaWFSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRtZWRpYV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWVkaWFSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTTWVkaWFSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxlclR5cGUgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgY2FsbHMgdG8gdGhlXHJcbiAqIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBzY2hlZHVsZSB0aGUgd3JpdGluZyBvZiBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBTY2hlZHVsZXJUeXBlXHJcbntcclxuXHQvKipcclxuXHQgKiBTeW5jaHJvbm91cyBhY3RpdmF0aW9uIC0gc3R5bGUgZGVmaW5pdGlvbnMgYXJlIHdyaXR0ZW4gdG8gdGhlIERPTSB1cG9uIHRoZSBhY3RpdmF0ZVxyXG5cdCAqIGFuZCBkZWFjdGl2YXRlIGNhbGxzLlxyXG5cdCAqL1xyXG5cdFN5bmMgPSAxLFxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxscyB0byBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgYXJlIGFjY3VtdWxhdGVkIHVudGlsIHRoZSBuZXh0IGFuaW1hdGlvblxyXG5cdCAqIGZyYW1lIGFuZCB0aGVuIGV4ZWN1dGVkIGFsbHRvZ2V0aGVyLlxyXG5cdCAqL1xyXG5cdEFuaW1hdGlvbkZyYW1lLFxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxscyB0byBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgYXJlIGFjY3VtdWxhdGVkIHVudGlsIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIGZvcmNlRE9NVXBkYXRlIGZ1bmN0aW9uIGFuZCB0aGVuIGV4ZWN1dGVkIGFsbHRvZ2V0aGVyLlxyXG5cdCAqL1xyXG5cdE1hbnVhbCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTY2hlZHVsZXIgaW50ZXJmYWNlIHNob3VsZCBiZSBpbXBsZW1lbnRlZCBieSBjdXN0b20gc2NoZWR1bGVycy4gSXRzIG1ldGhvZHMgYXJlIGludm9rZWRcclxuICogYnkgdGhlIGFjdGl2YXRpb24gaW5mcmFzdHJ1Y3R1cmUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTY2hlZHVsZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBpbml0KCBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIHNjaGVkdWxlIGl0cyBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuXHRzY2hlZHVsZURPTVVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBjYW5jZWxzIGl0cyBzY2hlZHVsZWQgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcblx0Y2FuY2VsRE9NVXBkYXRlKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQge1NjaGVkdWxlclR5cGUsIFN0eWxlRGVmaW5pdGlvbiwgSVNjaGVkdWxlcn0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7YWN0aXZhdGVJbnN0YW5jZSwgZGVhY3RpdmF0ZUluc3RhbmNlfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7U3RyaW5nU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElBY3RpdmF0b3IgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHJlc3BvbnNpYmxlIGZvciBhIGNlcnRhaW4gdHlwZSBvZiBhY3RpdmF0aW9uXHJcbiAqIG1lY2hhbmlzbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRvclxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQgKiBhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0YWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBkZWFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQgKiBkZWFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRkZWFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gc2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICAgICAqIENTUyBzdHlsZSBvYmplY3QuXHJcblx0ICovXHJcbiAgICBzZXRTdHlsZVByb3BlcnR5KCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSwgbmFtZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICB2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm1zIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGZvcmNlRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGZvcmNlRE9NVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbmNlbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWxET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0Y2FuY2VsRE9NVXBkYXRlKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAqIENTUyBzdHlsZSBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVTdHlsZVByb3BlcnR5KCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSwgbmFtZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG57XHJcbiAgICBpZiAoIW5hbWUgJiYgdmFsdWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBpZiAocnVsZU9yRWxtIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uY3NzVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAocnVsZU9yRWxtIGFzIGFueSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoIG5hbWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcnVsZU9yRWxtLnN0eWxlLnNldFByb3BlcnR5KCBuYW1lLCB2YWx1ZSBhcyBzdHJpbmcsIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgc3R5bGVzZXQgPSB2YWx1ZSBhcyBTdHJpbmdTdHlsZXNldDtcclxuICAgICAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuICAgICAgICAgICAgcnVsZU9yRWxtLnN0eWxlW3Byb3BOYW1lXSA9IHN0eWxlc2V0W3Byb3BOYW1lXTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN5bmNocm9ub3VzQWN0aXZhdG9yIGNsYXNzIHJlcHJlc2VudHMgdGhlIHN5bmNocm9ub3VzIGFjdGl2YXRpb24gbWVjaGFuaXNtLCB3aGljaCB3cml0ZXNcclxuICogc3R5bGUgY2hhbmdlcyB0byB0aGUgRE9NIHdoZW4gdGhlIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgY2FsbGVkLlxyXG4gKi9cclxuY2xhc3MgU3luY2hyb25vdXNBY3RpdmF0b3IgaW1wbGVtZW50cyBJQWN0aXZhdG9yXHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKiBAcGFyYW0gZGVmaW5pdGlvblxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIDEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGRlYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqIEBwYXJhbSBkZWZpbml0aW9uXHJcblx0ICovXHJcblx0cHVibGljIGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRkZWFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIDEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIHNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAgICAgKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB1cGRhdGVTdHlsZVByb3BlcnR5KCBydWxlT3JFbG0sIG5hbWUsIHZhbHVlLCBpbXBvcnRhbnQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0cHVibGljIGZvcmNlRE9NVXBkYXRlKCk6IHZvaWQge31cclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbERPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWQge31cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBvYmplY3RzIHRoYXQgYXJlIHVzZWQgYnkgdGhlIFNjaGVkdWxpbmdBY3RpdmF0b3IgY2xhc3MgZm9yIHNldHRpbmcgcHJvcGVydHkgdmFsdWVzLlxyXG4gKiBXaGVuIGJvdGggbmFtZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhcmUgbnVsbCwgdGhlIHN0eWxlIHdpbGwgYmUgc2V0IHRvIGFuIGVtcHR5IHN0cmluZ1xyXG4gKiBlZmZlY3RpdmVseSByZW1vdmluZyBhbGwgc3R5bGVzIGZyb20gdGhlIGVsZW1lbnQgb3IgdGhlIHJ1bGUuXHJcbiAqL1xyXG5pbnRlcmZhY2UgU2NoZWR1bGVkU3R5bGVQcm9wVmFsdWVcclxue1xyXG5cdC8qKlxyXG4gICAgICogU3R5bGUgb2JqZWN0IGluIHdoaWNoIHRvIHNldCB0aGUgcHJvcGVydHkgdmFsdWUuIFRoZSBzdHlsZSBvYmplY3QgY2FuIGJlbG9uZyB0byBlaXRoZXIgYVxyXG4gICAgICogc3R5bGUgcnVsZWUgb3IgdG8gYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICovXHJcblx0cnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGU7XHJcblxyXG5cdC8qKlxyXG4gICAgICogRGFzaGUtY2FzZWQgcHJvcGVydHkgbmFtZSBpZiBzZXR0aW5nIGEgdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb3IgbnVsbCBpZiBzZXR0aW5nIHZhbHVlc1xyXG4gICAgICogb2YgbXVsdGlwbGUgcHJvcGVydGllcy5cclxuICAgICAqL1xyXG5cdG5hbWU6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogUHJvcGVydHkgdmFsdWUgaWYgc2V0dGluZyBhIHZhbHVlIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgU3RyaW5nU3R5bGVzZXQgb2JqZWN0IGlmIHNldHRpbmdcclxuICAgICAqIHZhbHVlcyBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLiBJZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQsIGl0IGlzIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuXHR2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcHJvcGVydHkgc2hvdWxkIGJlIG1hcmtlZCBcIiFpbXBvcnRhbnRcIi4gVGhpcyBmbGFnIGlzIGlnbm9yZWRcclxuICAgICAqIHdoZW4gc2V0dGluZyB2YWx1ZXMgb2YgbXVsdGlwbGUgcHJvcGVydGllcy5cclxuICAgICAqL1xyXG5cdGltcG9ydGFudD86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY2hlZHVsaW5nQWN0aXZhdG9yIGNsYXNzIGtlZXBzIGEgbWFwIG9mIFN0eWxlRGVmaW5pdGlvbiBpbnN0YW5jZXMgdGhhdCBhcmUgc2NoZWR1bGVkIGZvclxyXG4gKiBhY3RpdmF0aW9uIG9yIGRlYWN0aXZhdGlvbi4gRWFjaCBpbnN0YW5jZSBpcyBtYXBwZWQgdG8gYSByZWZlcm5jZSBjb3VudCwgd2hpY2ggaXMgaW5jcmVtZW50ZWRcclxuICogdXBvbiB0aGUgYWN0aXZhdGUgY2FsbHMgYW5kIGRlY3JlbWVudGVkIHVwb24gdGhlIGRlYWN0aXZhdGUgY2FsbHMuIFdoZW4gdGhlIGRvQWN0aXZhdGlvblxyXG4gKiBtZXRob2QgaXMgY2FsbGVkIFRoZSBzdHlsZSBkZWZpbml0aW9uIHdpbGwgYmUgZWl0aGVyIGFjdGl2YXRlZCBvciBkZWFjdGl2YXRlZCBiYXNlZCBvbiB3aGV0aGVyXHJcbiAqIHRoZSByZWZlcmVuY2UgY291bnQgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2NoZWR1bGluZ0FjdGl2YXRvciBpbXBsZW1lbnRzIElBY3RpdmF0b3Jcclxue1xyXG4gICAgLy8gTWFwIG9mIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW5zdGFuY2VzIHRvIHRoZSByZWZlcmVuY2UgY291bnQgb2YgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcblx0cHJpdmF0ZSBkZWZpbml0aW9ucyA9IG5ldyBNYXA8U3R5bGVEZWZpbml0aW9uLG51bWJlcj4oKTtcclxuXHJcbiAgICAvLyBBcnJheSBvZiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgdG8gYmUgc2V0L3JlbW92ZWQuXHJcbiAgICBwcml2YXRlIHByb3BzOiBTY2hlZHVsZWRTdHlsZVByb3BWYWx1ZVtdID0gW107XHJcbiAgICBcclxuICAgIC8vIG9wdGlvbmFsIHNjaGVkdWxlciBvYmplY3RcclxuICAgIHByaXZhdGUgc2NoZWR1bGVyPzogSVNjaGVkdWxlcjtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzY2hlZHVsZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzY2hlZHVsZXIuaW5pdCggKCkgPT4gdGhpcy5kb0RPTVVwZGF0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVmQ291bnQgPSB0aGlzLmRlZmluaXRpb25zLmdldCggZGVmaW5pdGlvbikgfHwgMDtcclxuXHRcdGlmIChyZWZDb3VudCA9PT0gLTEpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuZGVsZXRlKCBkZWZpbml0aW9uKTtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuc2V0KCBkZWZpbml0aW9uLCArK3JlZkNvdW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0ICovXHJcblx0cHVibGljIGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVmQ291bnQgPSB0aGlzLmRlZmluaXRpb25zLmdldCggZGVmaW5pdGlvbikgfHwgMDtcclxuXHRcdGlmIChyZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5kZWxldGUoIGRlZmluaXRpb24pO1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZURPTVVwZGF0ZSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLnNldCggZGVmaW5pdGlvbiwgLS1yZWZDb3VudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBzZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gICAgICogQ1NTIHN0eWxlIG9iamVjdC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzZXRTdHlsZVByb3BlcnR5KCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSwgbmFtZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICB2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZURPTVVwZGF0ZSgpO1xyXG5cclxuXHRcdHRoaXMucHJvcHMucHVzaCh7IHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCB9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBpbiBvdXIgaW50ZXJuYWwgbWFwLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBmb3JjZURPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA+IDAgfHwgdGhpcy5wcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG4gICAgICAgICAgICB0aGlzLmRvRE9NVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPiAwIHx8IHRoaXMucHJvcHMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhckFjdGl2YXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm1zIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuZCBwcm9wZXJ0eSBzZXQgb3BlcmF0aW9ucyBhY2N1bXVsYXRlZCBpbnRlcm5hbGx5LiBUaGlzXHJcbiAgICAgKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgYnkgdGhlIGRlcml2ZWQgY2xhc3NlcyB3aGVuIHNjaGVkdWxlZCBhY3RpdmF0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZG9ET01VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICAvLyBhY3RpdmF0ZS9kZWFjdGl2YXRlIHN0eWxlIGRlZmluaXRpb25zXHJcblx0XHR0aGlzLmRlZmluaXRpb25zLmZvckVhY2goIChyZWZDb3VudDogbnVtYmVyLCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pID0+XHJcblx0XHR7XHJcblx0XHRcdGlmIChyZWZDb3VudCA+IDApXHJcblx0XHRcdFx0YWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgcmVmQ291bnQpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGVhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCAtcmVmQ291bnQpO1xyXG5cdFx0fSlcclxuXHJcblx0XHR0aGlzLmRlZmluaXRpb25zLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBzdHlsZSBwcm9wZXJ0aWVzXHJcblx0XHR0aGlzLnByb3BzLmZvckVhY2goIHByb3AgPT4gdXBkYXRlU3R5bGVQcm9wZXJ0eSggcHJvcC5ydWxlT3JFbG0sIHByb3AubmFtZSwgcHJvcC52YWx1ZSwgcHJvcC5pbXBvcnRhbnQpKTtcclxuXHRcdHRoaXMucHJvcHMgPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2xlYXJzIGFsbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBkYXRhIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNsZWFyQWN0aXZhdGlvbigpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnByb3BzID0gW107XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgaW1wbGVtZW50cyBzY2hlZHVsaW5nIHVzaW5nIGFuaW1hdGlvbiBmcmFtZXMuXHJcbiAqL1xyXG5jbGFzcyBBbmltYXRpb25GcmFtZVNjaGVkdWxlciBpbXBsZW1lbnRzIElTY2hlZHVsZXJcclxue1xyXG4gICAgLy8gSGFuZGxlIHJldHVybmVkIGJ5IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cclxuICAgIC8vIENhbGxiYWNrIHRvIGNhbGwgdG8gd3JpdGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG5cdHByaXZhdGUgZG9ET01VcGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHNjaGVkdWxlciBvYmplY3QgYW5kIHByb3ZpZGVzIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlXHJcbiAgICAgKiBzY2hlZHVsZXIgZGVjaWRlcyB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9ET01VcGRhdGUgPSBkb0RPTVVwZGF0ZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdHRoaXMucmVxdWVzdEhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5vbkFuaW1hdGlvbkZyYW1lKVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBjYW5jZWxzIGl0cyBzY2hlZHVsZWQgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmICh0aGlzLnJlcXVlc3RIYW5kbGUgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5yZXF1ZXN0SGFuZGxlKTtcclxuXHRcdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gMDtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiBhbmltYXRpb24gZnJhbWUgc2hvdWxkIGJlIGV4ZWN1dGVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgb25BbmltYXRpb25GcmFtZSA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gMDtcclxuXHRcdHRoaXMuZG9ET01VcGRhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlcyB0aGUgdXBkYXRlIG9mIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoZSBnaXZlbiBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSxcclxuICAgIG5hbWU6IHN0cmluZyB8IG51bGwsIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLFxyXG4gICAgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PlxyXG5cdFx0YWN0aXZhdG9yLnNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXMgY2FsbGluZyBvZiB0aGUgZ2l2ZW4gZnVuY3Rpb24gdXNpbmcgdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2NoZWR1bGVDYWxsKCBmdW5jOiAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiB2b2lkLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0bGV0IGFjdGl2YXRvciA9IHNjaGVkdWxlclR5cGUgPT0gbnVsbCA/IHNfZGVmYXVsdEFjdGl2YXRvciA6IHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuZ2V0KCBzY2hlZHVsZXJUeXBlKTtcclxuICAgIGlmIChhY3RpdmF0b3IpXHJcblx0XHRmdW5jKCBhY3RpdmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19nZXREZWZhdWx0U2NoZWR1bGVyVHlwZSgpOiBudW1iZXJcclxue1xyXG5cdHJldHVybiBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBkZWZhdWx0IHNjaGVkdWxpbmcgdHlwZSB0aGF0IGlzIHVzZWQgYnkgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHRoYXQgYXJlXHJcbiAqIGNhbGxlZCB3aXRob3V0IGV4cGxpY2l0bHkgcHJvdmlkaW5nIHZhbHVlIHRvIHRoZSBzY2hlZHVsaW5nIHBhcmFtZXRlci4gUmV0dXJucyB0aGUgdHlwZSBvZiB0aGVcclxuICogcHJldmlvdXMgZGVmYXVsdCBhY3RpdmF0b3Igb3IgMCBpZiBhbiBlcnJvciBvY2N1cnMgKGUuZy4gdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIElEIGlzIG5vdFxyXG4gKiByZWdpc3RlcmVkKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX3NldERlZmF1bHRTY2hlZHVsZXJUeXBlKCBzY2hlZHVsZXJUeXBlOiBudW1iZXIpOiBudW1iZXJcclxue1xyXG4gICAgLy8gY2hlY2sgdGhhdCB0aGUgZ2l2ZW4gbnVtYmVyIGlzIGluIG91ciBtYXAgb2YgcmVnaXN0ZXJlZCBhY3RpdmF0b3JzXHJcbiAgICBsZXQgYWN0aXZhdG9yID0gc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5nZXQoIHNjaGVkdWxlclR5cGUpO1xyXG5cdGlmICghYWN0aXZhdG9yKVxyXG5cdFx0cmV0dXJuIDA7XHJcblxyXG5cdGxldCBwcmV2U2NoZWR1bGVyVHlwZSA9IHNfZGVmYXVsdFNjaGVkdWxlclR5cGU7XHJcbiAgICBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlID0gc2NoZWR1bGVyVHlwZTtcclxuICAgIHNfZGVmYXVsdEFjdGl2YXRvciA9IGFjdGl2YXRvcjtcclxuXHRyZXR1cm4gcHJldlNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciwgd2hpY2hcclxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX3JlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXI6IElTY2hlZHVsZXIpOiBudW1iZXJcclxue1xyXG5cdC8vIGdldCB0aGUgcmVnaXN0cmF0aW9uIElEIGZvciB0aGlzIHNjaGVkdWxlclxyXG5cdGxldCBpZCA9IHNfbmV4dEN1c3RvbVNjaGVkdWxlclR5cGUrKztcclxuXHRzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLnNldCggaWQsIG5ldyBTY2hlZHVsaW5nQWN0aXZhdG9yKCBzY2hlZHVsZXIpKTtcclxuXHRyZXR1cm4gaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFVucmVnaXN0ZXJzIGEgc2NoZWR1bGVyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfdW5yZWdpc3RlclNjaGVkdWxlciggaWQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGlmIChpZCA+PSBzX2ZpcnN0Q3VzdG9tU2NoZWR1bGVyVHlwZSlcclxuXHR7XHJcblx0XHRzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLmRlbGV0ZSggaWQpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBkZWxldGVkIHNjaGVkdWxlciB3YXMgb3VyIGRlZmF1bHQgb25lLCB3ZSBzZXQgdGhlIGRlZmF1bHQgdG8gU1lOQ1xyXG4gICAgICAgIGlmIChzX2RlZmF1bHRTY2hlZHVsZXJUeXBlID09PSBpZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPSBTY2hlZHVsZXJUeXBlLlN5bmM7XHJcbiAgICAgICAgICAgIHNfZGVmYXVsdEFjdGl2YXRvciA9IHNfc3luY2hyb25vdXNBY3RpdmF0b3I7XHJcbiAgICAgICAgfVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3VycmVudCBkZWZhdWx0IHNjaGVkdWxlci4gVGhpcyBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkIGlmIHNjaGVkdWxlciB0eXBlIGlzIG5vdCBleHBsaWNpdGx5XHJcbiAqIHNwZWNpZmllZCBpbiBjYWxscyBzdWNoIGFzIGFjdGl2YXRlIG9yIElTdHlsZVJ1bGUuc2V0UHJvcC5cclxuICovXHJcbmxldCBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlOiBudW1iZXIgPSBTY2hlZHVsZXJUeXBlLlN5bmM7XHJcblxyXG4vKipcclxuICogU3luY2hyb25vdXMgYWN0aXZhdG9yIGluc3RhbmNlLlxyXG4gKi9cclxubGV0IHNfc3luY2hyb25vdXNBY3RpdmF0b3IgPSBuZXcgU3luY2hyb25vdXNBY3RpdmF0b3IoKTtcclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IGRlZmF1bHQgYWN0aXZhdG9yLiBUaGlzIGFjdGl2YXRvciB3aWxsIGJlIHVzZWQgaWYgc2NoZWR1bGVyIHR5cGUgaXMgbm90IGV4cGxpY2l0bHlcclxuICogc3BlY2lmaWVkIGluIGNhbGxzIHN1Y2ggYXMgYWN0aXZhdGUgb3IgSVN0eWxlUnVsZS5zZXRQcm9wLlxyXG4gKi9cclxubGV0IHNfZGVmYXVsdEFjdGl2YXRvcjogSUFjdGl2YXRvciA9IHNfc3luY2hyb25vdXNBY3RpdmF0b3I7XHJcblxyXG4vKipcclxuICogU2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciB0byBiZSBhc3NpZ25lZCB0byB0aGUgZmlyc3QgY3VzdG9tIHNjaGVkdWxlciB0byBiZSByZWdpc3RlcmVkLlxyXG4gKiBBbGwgY3VzdG9tIHNjaGVkdWxlciBpZGVudGlmaWVycyBhcmUgZ3JlYXRlciBvciBlcXVhbCB0byB0aGlzIG51bWJlci5cclxuICovXHJcbmNvbnN0IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlOiBudW1iZXIgPSAxMDAxO1xyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIgdG8gYmUgYXNzaWduZWQgdG8gdGhlIG5leHQgY3VzdG9tIHNjaGVkdWxlciB0byBiZSByZWdpc3RlcmVkLlxyXG4gKi9cclxubGV0IHNfbmV4dEN1c3RvbVNjaGVkdWxlclR5cGU6IG51bWJlciA9IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHJlZ2lzdGVyZWQgYnVpbHQtaW4gYW5kIGN1c3RvbSBhY3RpdmF0b3JzLlxyXG4gKi9cclxubGV0IHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMgPSBuZXcgTWFwPG51bWJlcixJQWN0aXZhdG9yPigpO1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGJ1aWx0LWluIGFuZCBjdXN0b20gYWN0aXZhdG9ycy5cclxuICovXHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLlN5bmMsIHNfc3luY2hyb25vdXNBY3RpdmF0b3IpO1xyXG5zX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLnNldCggU2NoZWR1bGVyVHlwZS5BbmltYXRpb25GcmFtZSwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoIG5ldyBBbmltYXRpb25GcmFtZVNjaGVkdWxlcigpKSk7XHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLk1hbnVhbCwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoKSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlUnVsZSwgQ29tYmluZWRTdHlsZXNldCwgSVZhclJ1bGUsIERlcGVuZGVudFJ1bGVzLCBJTmFtZWRFbnRpdHksIElDbGFzc1J1bGUsIElJRFJ1bGUsIElDbGFzc05hbWVSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIEN1c3RvbVZhcl9TdHlsZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7bWVyZ2VTdHlsZXNldHMsIHN0eWxlc2V0VG9TdHJpbmcsIHN0eWxlUHJvcFRvU3RyaW5nLCBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHN9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7dmFsMnN0ciwgY2FtZWxUb0Rhc2h9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiO1xyXG5pbXBvcnQge3BzZXVkb0VudGl0eVRvU3RyaW5nLCBzZWxlY3RvclRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIjtcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBjb250YWluIGEgc3R5bGUgcnVsZS4gVGhpcyBjbGFzc1xyXG4gKiBpbXBsZW1lbnRzIHRoZSBwYXJzaW5nIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0IG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSVN0eWxlUnVsZVxyXG57XHJcblx0Ly8gVGhlIHN0eWxlc2V0IGNhbiBiZSBhbiBDb21iaW5lZFN0eWxlc2V0IGZvciBtYW55IHJ1bGVzOyBob3dldmVyLCBmb3Igc29tZSBpdCBpcyBqdXN0XHJcblx0Ly8gb2YgdGhlIFN0eWxlc2V0IHR5cGUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZXNldD86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHt9O1xyXG5cdFx0dGhpcy5kZXBlbmRlbnRSdWxlcyA9IHt9O1xyXG5cclxuXHRcdGlmIChzdHlsZXNldClcclxuXHRcdFx0dGhpcy5wYXJzZUlucHV0U3R5bGVzZXQoIHN0eWxlc2V0IGFzIENvbWJpbmVkU3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHb2VzIG92ZXIgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgYW5kIHBhcnNlcyB0aGVtIGludG8gcHJvcGVyIHN0eWxlc2V0LCBzZXQgb2ZcclxuXHQgKiBpbXBvcnRhbnQgcHJvcGVydGllcyBhbmQgZGVwZW5kZW50IHJ1bGVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VJbnB1dFN0eWxlc2V0KCBpbnB1dFN0eWxlc2V0OiBDb21iaW5lZFN0eWxlc2V0KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcGFyZW50cywgd2UgZmlyc3QgY29weSBwcm9wZXJ0aWVzIGZyb20gdGhlbSBzbyB0aGF0IG91ciBvd24gcHJvcGVydGllc1xyXG5cdFx0Ly8gY2FuIG92ZXJyaWRlIHRoZW0uXHJcblx0XHRpZiAoaW5wdXRTdHlsZXNldFtcIitcIl0pXHJcblx0XHR7XHJcblx0XHRcdC8vIHRoZSB2YWx1ZSBpcyBhIHNpbmdsZSBTdHlsZVJ1bGUgb3IgYW4gYXJyYXkgb2YgU3R5bGVSdWxlcyB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxyXG5cdFx0XHRsZXQgZXh0ZW5kc1Byb3BWYWwgPSBpbnB1dFN0eWxlc2V0W1wiK1wiXSBhcyAoU3R5bGVSdWxlIHwgU3R5bGVSdWxlW10pO1xyXG5cdFx0XHRsZXQgcGFyZW50UnVsZXM6IFN0eWxlUnVsZVtdO1xyXG5cdFx0XHRpZiAoZXh0ZW5kc1Byb3BWYWwgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBbZXh0ZW5kc1Byb3BWYWxdO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBleHRlbmRzUHJvcFZhbDtcclxuXHJcblx0XHRcdC8vIElmIHdlIGhhdmUgcGFyZW50IHJ1bGVzLCBjb3B5IHN0eWxlc2V0cyBhbmQgZGVwZW5kZW50IHJ1bGVzIGZyb20gdGhlbS5cclxuXHRcdFx0aWYgKHBhcmVudFJ1bGVzICYmIHBhcmVudFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJlbnRSdWxlcy5mb3JFYWNoKCBwYXJlbnQgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0ID0gbWVyZ2VTdHlsZXNldHMoIHRoaXMuc3R5bGVzZXQsIHBhcmVudC5zdHlsZXNldCk7XHJcblx0XHRcdFx0XHR0aGlzLmNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHBhcmVudCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtZXJnZSBjdXN0b20gIHByb3BlcnRpZXNcclxuXHRcdG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGhpcy5zdHlsZXNldCwgaW5wdXRTdHlsZXNldCk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gaW5wdXRTdHlsZXNldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBvdmVyIGFscmVhZHkgcHJvY2Vzc2VkIHBhcmVudHMsIGltcG9ydGFudCBhbmQgY3VzdG9tIHByb3BlcnRpZXNcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcIitcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IHByb3BWYWwgPSBpbnB1dFN0eWxlc2V0W3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCI6XCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoaXMgaXMgYW4gYXJyYXkgb2YgdHVwbGVzIHJlcHJlc2VudGluZ1xyXG5cdFx0XHRcdC8vIHBhcmFtZXRlcmlzZWQgcHNldWRvIGVudGl0aWVzIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgdmFsdWVcclxuXHRcdFx0XHQvLyAoc3RyaW5nKSBhbmQgdGhlIHNlY29uZCB0aGUgQ29tYmluZWRTdHlsZXNldC4gT3RoZXJ3aXNlLCB0aGUgdmFsdWUgaXMganVzdCBhblxyXG5cdFx0XHRcdC8vIENvbWJpbmVkU3R5bGVzZXQuXHJcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW2FueSwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0XHRwcm9wTmFtZSwgdHVwbGVbMF0sIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gbmV3IERlcGVuZGVudFJ1bGUoIFwiJlwiICsgcHJvcE5hbWUsIHVuZGVmaW5lZCxcclxuXHRcdFx0XHRcdFx0cHJvcFZhbCBhcyBDb21iaW5lZFN0eWxlc2V0LCB0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCImXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdHR1cGxlWzBdLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBwcm9wTmFtZSArIHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5lbmRzV2l0aChcIiZcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdCgpID0+IHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSArIHByb3BOYW1lLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoaXMgaXMgYSByZWd1bGFyIENTUyBwcm9wZXJ0eTogY29weSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gb3VyIGludGVybmFsIHN0eWxlc2V0XHJcblx0XHRcdFx0dGhpcy5zdHlsZXNldFtwcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIHByb2Nlc3MgdGhlbSB1bmRlciB0aGUgc2FtZSBjb250YWluZXJcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHJvdGVjdGVkIGNvcHlGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgb24gYSBuZXdseSBjcmVhdGVkIG9iamVjdCBzbyB3ZSBkb24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIGluXHJcblx0XHQvLyBvdXIgb3duIHN0eWxlc2V0IHlldFxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBzcmMuc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgZGVwZW5kZW50IHJ1bGVzIGZyb20gYW5vdGhlciBzdHlsZSBydWxlIG9iamVjdC5cclxuXHRwcml2YXRlIGNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHNyYzogU3R5bGVSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHNyYy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzcmMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgYXJyID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKCFhcnIpXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IGFyciA9IFtdO1xyXG5cclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChzcmNEZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBuZXdEZXBSdWxlID0gc3JjRGVwUnVsZS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHRcdGFyci5wdXNoKCBuZXdEZXBSdWxlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsb25lKCkgYXMgRGVwZW5kZW50UnVsZTtcclxuXHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ld0RlcFJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJ1bGUuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIGAke3RoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmd9IHske3N0eWxlc2V0VG9TdHJpbmcoIHRoaXMuc3R5bGVzZXQpfX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSB0aGlzLmNsb25lT2JqZWN0KCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5zdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIHRoaXMudG9Dc3NTdHJpbmcoKSwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5pbnNlcnQoIHBhcmVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgY2xlYXIgdGhlbSB0b29cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmNsZWFyKCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuY2xlYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5zdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdFx0Y3R4LmFkZFJ1bGVUZXh0KCB0aGlzLnRvQ3NzU3RyaW5nKCkpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgaW5zZXJ0IHRoZW0gdW5kZXIgdGhlIHNhbWUgcGFyZW50XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5zZXJpYWxpemUoIGN0eCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuc2VyaWFsaXplKCBjdHgpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRwdWJsaWMgZ2V0IHNlbGVjdG9yVGV4dCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFsbG93cyB0aGUgb2JqZWN0IHRvIHBhcnRpY3BhdGUgaW4gXCJ2YWx1ZVRvU3RyaW5nXCIgc2VyaWFsaXphdGlvbi4gV2hlbmV2ZXJcclxuXHQgKiB0aGUgU3R5bGVSdWxlLWRlcml2ZWQgb2JqZWN0IGlzIGVuY291bnRlcmVkIGJ5IHRoZSBgVXRpbEZ1bmMudmFsdWVUb1N0cmluZ2AgZnVuY3Rpb24sXHJcblx0ICogdGhlIHJ1bGUncyBzZWxlY3RvciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0b3JUZXh0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IHN0eWxlIHJ1bGUgb2JqZWN0IG9mIHRoZSBwcm9wZXIgdHlwZSwgYnV0IHdpdGhvdXQgdGhlIHN0eWxlc2V0IGFuZCBkZXBlbmRlbnRcclxuXHQvLyBydWxlcy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY2xvbmVPYmplY3QoKTogU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sXHJcbiAgICAgICAgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0ZGVsZXRlIHRoaXMuc3R5bGVzZXRbbmFtZV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc3R5bGVzZXRbbmFtZV0gPSBpbXBvcnRhbnQgPyB7IFwiIVwiOiB2YWx1ZSBhcyBhbnkgfSA6IHZhbHVlIGFzIGFueTtcclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcbiAgICAgICAge1xyXG5cdFx0ICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc1J1bGUsIGNhbWVsVG9EYXNoKCBuYW1lKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIG5hbWUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gdmFyT2JqIElWYXJSdWxlIG9iamVjdCBkZWZpbmluZyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhclZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0Q3VzdG9tUHJvcDxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgdmFsdWU6IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF2YXJPYmogfHwgISh2YXJPYmogaW5zdGFuY2VvZiBWYXJSdWxlKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGZpcnN0IHNldC9yZW1vdmUgdGhlIHZhbHVlIGluIG91ciBpbnRlcm5hbCBzdHlsZXNldCBvYmplY3RcclxuXHRcdGxldCBjdXJyQ3VzdG9tUHJvcHMgPSB0aGlzLnN0eWxlc2V0W1wiLS1cIl0gYXMgQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG5cdFx0aWYgKGN1cnJDdXN0b21Qcm9wcyB8fCB2YWx1ZSAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBjdXJyQ3VzdG9tUHJvcHMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW1bMF0gPT09IHZhck9iaik7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKGN1cnJDdXN0b21Qcm9wcy5sZW5ndGggPT09IDEpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIi0tXCJdID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWN1cnJDdXN0b21Qcm9wcylcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbXCItLVwiXSA9IGN1cnJDdXN0b21Qcm9wcyA9IFtbdmFyT2JqLCB2YWx1ZV1dO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBjdXJyQ3VzdG9tUHJvcHMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW1bMF0gPT09IHZhck9iaik7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMClcclxuXHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzW2luZGV4XVsxXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHMucHVzaCggW3Zhck9iaiwgdmFsdWVdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggdGhpcy5jc3NSdWxlLCB2YXJPYmouY3NzTmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgdmFsdWUsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cHVibGljIGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0Ly8gUmVzdWx0YW50IG9iamVjdCBkZWZpbmluZyBwcm9wZXJ0aWVzIHRvIGJlIGluc2VydGVkIGludG8gRE9NLlxyXG5cdHByaXZhdGUgc3R5bGVzZXQ6IFN0eWxlc2V0O1xyXG5cclxuXHQvLyBTZWxlY3RvciBzdHJpbmcgY2FjaGVkIGFmdGVyIGl0IGlzIGZpcnN0IG9idGFpbmVkLiBOZWVkZWQgdG8gbm90IGludm9rZSBnZXRTZWxlY3RvclN0cmluZ1xyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBwcmVzZW5jZSBvZiBkZXBlbmRlbnQgcnVsZXMuXHJcblx0cHJpdmF0ZSBjYWNoZWRTZWxlY3RvclN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBEZXBlbmRlbnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgZGVwZW5kcyBvbiB0aGUgY29udGFpbmluZyBzdHlsZSBydWxlLiBUaGlzXHJcbiAqIGlzIHVzZWQgZm9yIHBzZXVkbyBjbGFzc2VzLCBwc2V1ZG8gZWxlbWVudHMsIGNvbWJpbmF0b3JzIGFuZCBvdGhlciBzZWxlY3RvcnMgdGhhdCBjb21iaW5lIHRoZVxyXG4gKiBjb250YWluaW5nIHJ1bGUncyBzZWxlY3RvciB3aXRoIGFkZGl0aW9uYWwgc2VsZWN0b3IgaXRlbXMuXHJcbiAqL1xyXG5jbGFzcyBEZXBlbmRlbnRSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHQvLyBmb3IgcmVndWxhciBzZWxlY3RvcnMsIHBzZXVkbyBjbGFzc2VzIGFuZCBwc2V1ZG8gZWxlbWVudHMsIHRoZSBzZWxlY3RvciBhbHJlYWR5IGNvbnRhaW5zXHJcblx0Ly8gdGhlIGFtcGVyc2FuZCBhbmQgdGhlIHNlbGVjdG9yUGFyYW0gaXMgdW5kZWZpbmVkLiBGb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcywgcHN1ZG9cclxuXHQvLyBlbGVtZW50cyBhbmQgY29tYmluYXRvcnMsIHRoZSBzZWxlY3RvclBhcmFtIGlzIGRlZmluZWQgYW5kIHRoZSBzZWxlY3RvciBpcyBqdXN0IHRoZSBlbnRpdHlcclxuXHQvLyBuYW1lLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzZWxlY3RvclBhcmFtPzogYW55LCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsXHJcblx0XHRjb250YWluaW5nUnVsZT86IFN0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdFx0dGhpcy5zZWxlY3RvclBhcmFtID0gc2VsZWN0b3JQYXJhbTtcclxuXHRcdHRoaXMuY29udGFpbmluZ1J1bGUgPSBjb250YWluaW5nUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IERlcGVuZGVudFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IERlcGVuZGVudFJ1bGUoIHRoaXMuc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHRoaXMuY29udGFpbmluZ1J1bGUhLnNlbGVjdG9yVGV4dDtcclxuXHRcdGlmICh0aGlzLnNlbGVjdG9yUGFyYW0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgYXMgc3RyaW5nO1xyXG5cdFx0XHRyZXR1cm4gYCR7cGFyZW50U2VsZWN0b3J9JHtzZWxlY3Rvcn0oJHtwc2V1ZG9FbnRpdHlUb1N0cmluZyggc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSl9KWA7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnZlcnQgc2VsZWN0b3IgdG8gc3RyaW5nLlxyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSBzZWxlY3RvclRvU3RyaW5nKCB0aGlzLnNlbGVjdG9yKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBzZWxlY3RvciBzdHJpbmcgZG9lc24ndCBoYXZlIGFueSBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCwgd2VcclxuXHRcdFx0Ly8gc2ltcGx5IGFwcGVuZCB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBzZWxlY3Rvcjsgb3RoZXJ3aXNlLCB3ZSByZXBsYWNlIGFsbFxyXG5cdFx0XHQvLyBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpbiB0aGUgc2VsZWN0b3Igc3RyaW5nIHdpdGggdGhlIHNlbGVjdG9yXHJcblx0XHRcdC8vIHN0cmluZyBvZiB0aGUgcGFyZW50IHJ1bGUuXHJcblx0XHRcdHJldHVybiBzZWxlY3Rvci5pbmRleE9mKCBcIiZcIikgPCAwXHJcblx0XHRcdFx0PyBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfWBcclxuXHRcdFx0XHQ6IHNlbGVjdG9yLnJlcGxhY2UoIC8mL2csIHBhcmVudFNlbGVjdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFydGlhbCBzZWxlY3RvciB0aGF0IHNob3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgcGFyZW50IHNlbGVjdG9yLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG5cclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VsZWN0b3IgLSB1c2VkIGZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGFuZCBlbGVtZW50cy5cclxuXHRwcml2YXRlIHNlbGVjdG9yUGFyYW0/OiBhbnk7XHJcblxyXG5cdC8vIFBhcmVudCBzdHlsZSBydWxlIG9mIHdoaWNoIHRoaXMgcnVsZSBpcyBkZXBlbmRlbnQuXHJcblx0cHVibGljIGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQWJzdHJhY3RSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGJhc2UgZm9yIG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBYnN0cmFjdFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFic3RyYWN0UnVsZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gT3ZlcnJpZGVzIHRoZSBTdHlsZVJ1bGUncyBpbXBsZW1lbnRhdGlvbiB0byBkbyBub3RoaW5nLiBObyBDU1NTdHlsZVJ1bGUgaXMgY3JlYXRlZCBmb3JcclxuXHQvLyBhYnN0cmFjdCBydWxlcy5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZWRTdHlsZVJ1bGUgY2xhc3MgaXMgYSBiYXNlIGZvciBzdHlsZSBydWxlIGNsYXNzZXMgdGhhdCBhcmUgYWxzbyBuYW1lZCBlbnRpdGllcyAtIHN1Y2hcclxuICogYXMgY2xhc3MgcnVsZSBhbmQgSUQgcnVsZS5cclxuICovXHJcbmFic3RyYWN0IGNsYXNzIE5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5jc3NQcmVmaXgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIEltcGxlbWVudGF0aW9uIG9mIHRoZSB0b1N0cmluZyBtZXRob2QgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcnVsZSAod2l0aG91dCB0aGUgQ1NTIHByZWZpeCkuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJvdGVjdGVkIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElDbGFzc1J1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkgfCBJQ2xhc3NOYW1lUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgY2xhc3MgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzQ2xhc3NOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNzc05hbWU7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBDbGFzc1J1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENsYXNzUnVsZSggdW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmcgeyByZXR1cm4gXCIuXCI7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhbiBJRC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJRFJ1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElJRFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGVsZW1lbnQgSUQgcHJlZml4ZWQgd2l0aCBcIiNcIiAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzSUROYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNzc05hbWU7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBJRFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IElEUnVsZSggdW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmcgeyByZXR1cm4gXCIjXCI7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNlbGVjdG9yUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgQ1NTIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IFNlbGVjdG9yUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU2VsZWN0b3JSdWxlKCB0aGlzLnNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB2YWwyc3RyKCB0aGlzLnNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVZhclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7VmFyVmFsdWVUeXBlLCBWYXJUZW1wbGF0ZU5hbWV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7c3R5bGVQcm9wVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVmFyUnVsZSBkb2VzIG5vdCBkZXJpdmUgZnJvbSB0aGUgUnVsZVxyXG4gKiBjbGFzcyBiZWNhdXNlIGl0IGlzIG5vdCBhIHJlYWwgQ1NTIHJ1bGU7IGhvd2V2ZXIsIGluIG1hbnkgYXNwZWN0cyBpdCByZXBlYXRzIHRoZSBSdWxlJ3NcclxuICogZnVuY3Rpb25hbGl0eS4gSW4gcGFydGljdWxhciBpdCBoYXMgdGhlIHByb2Nlc3MgZnVuY3Rpb24gdGhhdCBhbGxvd3MgaXQgdG8gb2J0YWluIGFuIGFjdHVhbFxyXG4gKiBuYW1lLCB3aGljaCB3aWxsIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBhbmQgdXNpbmcgdGhpcyBjdXN0b20gcHJvcGVydHkgaW4gQ1NTLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHdoaWxlIHRoZSB0eXBlIHBhcmFtZXRlciBLIGlzIGEga2V5IG9mIHRoZSBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLCB0aGUgdmFsdWUgaXMgb2ZcclxuICogdHlwZSBJU3RpbGVzZXRbS10sIHdoaWNoIGlzIEV4dGVuZGVkPElDc3NTdHlsZXNldFtLXT4uIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmcgdmFsdWVzIHRoYXQgYXJlXHJcbiAqIHZhbGlkIGZvciB0aGUgRXh0ZW5kZWQgcm9wZXJ0eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElWYXJSdWxlPEs+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHRlbXBsYXRlOiBLLCB2YWx1ZT86IFZhclZhbHVlVHlwZTxLPiwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz4pXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlLCBcIi0tXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogVmFyUnVsZTxLPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVmFyUnVsZTxLPih0aGlzLnRlbXBsYXRlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy52YWx1ZSA9PSBudWxsID8gbnVsbCA6IGAke3RoaXMuY3NzTmFtZX06ICR7c3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRydWUpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSB2YXIoLS1uYW1lKSBleHByZXNzaW9uLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gYHZhcigke3RoaXMuY3NzTmFtZX0pYDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0VmFsdWUoIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q3VzdG9tVmFyVmFsdWUoIHRoaXMuY3NzTmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBzdHlsZVByb3BUb1N0cmluZyggdGhpcy50ZW1wbGF0ZSwgdmFsdWUsIHRydWUpLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQsIHNjaGVkdWxlclR5cGUpXHJcblx0fVxyXG5cclxuXHJcblx0XHJcblx0Ly8gLy8gTmFtZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLiBUaGlzIGlzXHJcblx0Ly8gLy8gbnVsbCBmb3IgU3R5bGVzaGVldC5cclxuXHQvLyBwdWJsaWMgcnVsZU5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLlxyXG5cdHB1YmxpYyB0ZW1wbGF0ZTogSztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBWYWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz47XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz47XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJTmFtZWRDb2xvcnMsIENzc0NvbG9yLCBDb2xvcnN9IGZyb20gXCIuL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQge0Nzc0FuZ2xlTWF0aCwgdmFsMnN0cn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtFeHRlbmRlZH0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJlZGVmaW5lZCBjb2xvciBuYW1lcyBieSB0aGVpciBudW1lcmljIHZhbHVlcy4gT25seSBidWlsdC1pbiBjb2xvciBuYW1lcyB3aWxsIGJlIGluXHJcbiAqIHRoaXMgbWFwIC0gdGhvc2UgbmFtZWQgY29sb3JzIHRoYXQgYXJlIGFkZGVkIHVzaW5nIG1vZHVsZSBhdWdtZW50YXRpb24gd2lsbCBOT1QgcmVzaWRlIGluXHJcbiAqIHRoaXMgbWFwLiBUaGlzIGlzIG5lZWRlZCB0byBjb252ZXJ0IHRoZSBudW1lcmljIGNvbG9yIHZhbHVlcyBzZXQgdXNpbmcgdGhlIENvbG9yLmJyb3duXHJcbiAqIG5vdGF0aW9uIHRvIHRoZWlyIG5hbWVzIHdoZW4gaW5zZXJ0aW5nIENTUyBydWxlcy5cclxuICovXHJcbmxldCByZXZlcnNlZENvbG9yTWFwID0gbmV3IE1hcDxudW1iZXIsc3RyaW5nPigpO1xyXG5cclxuLy8gYnVpbGQgUmV2ZXJzZWQgQ29sb3IgTWFwXHJcbk9iamVjdC5lbnRyaWVzKCBDb2xvcnMpLmZvckVhY2goIChbbmFtZSwgdmFsdWVdKSA9PiByZXZlcnNlZENvbG9yTWFwLnNldCggdmFsdWUsIG5hbWUpICk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1MgY29sb3Igc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sb3JOdW1iZXJUb1N0cmluZyggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgdGhlIG51bWJlciBpcyBuZWdhdGl2ZSwgcmVtZW1iZXIgdGhhdCBmYWN0IGFuZCBnZXQgdGhlIHBvc2l0aXZlIG51bWJlclxyXG4gICAgbGV0IG4gPSB2YWwgPCAwID8gLXZhbCA6IHZhbDtcclxuICAgIGxldCBpc05lZ2F0aXZlID0gbiAhPT0gdmFsO1xyXG5cclxuICAgIC8vIGlmIHRoZSBudW1iZXIgaGFzIGEgZmxvYXRpbmcgcG9pbnQgcGFydCwgc2VwYXJhdGUgaXQgaW50byBhbHBoYSBjaGFubmVsXHJcbiAgICBsZXQgYSA9IDA7XHJcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobikpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGsgPSBNYXRoLmZsb29yKG4pO1xyXG4gICAgICAgIC8vIGEgPSBNYXRoLnJvdW5kKCAobiAtIGspICogMTAwKTtcclxuICAgICAgICBhID0gTWF0aC5yb3VuZCggKG4gLSBrKSAqIDI1NSk7XHJcbiAgICAgICAgbiA9IGs7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIG51bWJlciB3YXMgbmVnYXRpdmUgd2UgcmV2ZXJ0IHRoZSBjb2xvciBieSBuZWdhdGluZyBhbGwgdGhlIGJpdHMuIEluIGFueSBjYXNlLFxyXG4gICAgLy8gd2UgY2xlYXIgZXZlcnl0aGluZyBiZXlvbmQgdGhlIGZpcnN0IHRocmVlIGJ5dGVzLlxyXG4gICAgbiA9IGlzTmVnYXRpdmUgPyB+KDB4RkYwMDAwMDAgfCBuKSA6IDB4MDBGRkZGRkYgJiBuO1xyXG5cclxuICAgIGlmIChhID4gMClcclxuICAgICAgICAvLyByZXR1cm4gY29sb3JXaXRoQWxwaGFUb1N0cmluZyggbiwgYSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHJnYlRvU3RyaW5nKCAobiAmIDB4RkYwMDAwKSA+PiAxNiwgKG4gJiAweDAwRkYwMCkgPj4gOCwgbiAmIDB4MDAwMEZGLCBhKTtcclxuICAgICAgICByZXR1cm4gXCIjXCIgKyBuLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggNiwgXCIwXCIpICsgYS50b1N0cmluZygxNikucGFkU3RhcnQoIDIsIFwiMFwiKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZWQgY29sb3Igd2l0aCB0aGUgZ2l2ZW4gdmFsdWUsIHJldHVybiB0aGUgY29sb3IgbmFtZVxyXG4gICAgICAgIGxldCBuYW1lID0gcmV2ZXJzZWRDb2xvck1hcC5nZXQoIG4pO1xyXG4gICAgICAgIHJldHVybiBuYW1lID8gbmFtZSA6IFwiI1wiICsgbi50b1N0cmluZygxNikucGFkU3RhcnQoIDYsIFwiMFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNlcGFyYXRpb24gdmFsdWUgdG8gYSBDU1Mgc3RyaW5nLiBTZXBhcmF0aW9uIGFyZSByZXByZXNlbnRlZCBhcyBhIG51bWJlclxyXG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gc2VwYXJhdGlvblRvU3RyaW5nKCBjOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKGMgIT09IDAgJiYgYyA+IC0xICYmIGMgPCAxKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGludmVydCBuZWdhdGl2ZSB2YWx1ZVxyXG4gICAgICAgIGlmIChjIDwgMClcclxuICAgICAgICAgICAgYyA9IDEgKyBjO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCggYyAqIDEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBjbGFtcCB0aGUgdmFsdWUgYmV0d2VlbiAtMjU1IGFuZCAyNTVcclxuICAgICAgICBjID0gYyA+IDI1NSA/IDI1NSA6IGMgPCAtMjU1ID8gLTI1NSA6IGM7XHJcblxyXG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjKSlcclxuICAgICAgICAgICAgYyA9IE1hdGgucm91bmQoYyk7XHJcblxyXG4gICAgICAgIC8vIGludmVydCBuZWdhdGl2ZSB2YWx1ZVxyXG4gICAgICAgIGlmIChjIDwgMClcclxuICAgICAgICAgICAgYyA9IDI1NSArIGM7XHJcblxyXG4gICAgICAgIHJldHVybiBjLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIHRvIGEgQ1NTIHN0cmluZy4gQWxwaGEgaXMgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXJcclxuICogd2l0aCB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gYWxwaGFUb1N0cmluZyggYT86IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiBhbHBoYSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgc2V0IGl0IHRvIDFcclxuICAgIGlmIChhID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiMVwiO1xyXG5cclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgb2YgYWxwaGEgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChhIDwgMClcclxuICAgICAgICBhID0gLWE7XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiAxMDAsIHNldCBpdCB0byAxOyBvdGhlcndpc2UsIFxyXG4gICAgcmV0dXJuIChhID4gMTAwID8gMSA6IGEgPiAxID8gYSAvIDEwMCA6IGEpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciB3aXRoXHJcbiAqIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGIgQmx1ZSBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2JUb1N0cmluZyggcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYHJnYmEoJHtzZXBhcmF0aW9uVG9TdHJpbmcoIHIpfSwke3NlcGFyYXRpb25Ub1N0cmluZyggZyl9LCR7c2VwYXJhdGlvblRvU3RyaW5nKCBiKX0sJHthbHBoYVRvU3RyaW5nKCBhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBudW1iZXIgcmVwcmVzZW50aW5nIGVpdGhlciBzYXR1cmF0aW9uIG9yIGxpZ2h0bmVzcyBpbiB0aGUgSFNMIHNjaGVtZSB0byBwZXJjZW50YWdlOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlIGFyZSBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZCB0byAxMDAuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvclBlcmNlbnRUb1N0cmluZyggbjogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChuIDwgMClcclxuICAgICAgICBuID0gLW47XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiAxMDAsIGNsYW1wIGl0LiBcclxuICAgIHJldHVybiAobiA+IDEwMCA/IDEwMCA6IE1hdGgucm91bmQobiA8PSAxID8gbiAqIDEwMCA6IG4pKS50b1N0cmluZygpICsgXCIlXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIEh1ZSBjb21wb25lbnQgaXMgdHJlYXRlZCBhcyB0aGUgQ1NTIGA8YW5nbGU+YCB0eXBlLiBOdW1iZXJzIGFyZSBjb25zaWRlcmVkIGRlZ3JlZXMuXHJcbiAqIFxyXG4gKiBUaGUgU2F0dXJhdGlvbiBhbmQgTGlnaHRuZXNzIGNvbXBvbmVudHMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZXM6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICpcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9TdHJpbmcoIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyLCBsOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBoc2xhKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoaCl9LCR7Y29sb3JQZXJjZW50VG9TdHJpbmcocyl9LCR7Y29sb3JQZXJjZW50VG9TdHJpbmcobCl9LCR7YWxwaGFUb1N0cmluZyggYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgdGhlIGFscGhhIG1hc2sgdG8gdGhlIENTUyBDb2xvciByZXByZXNlbnRhdGlvbi4gVGhpc1xyXG4gKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3IgdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIG51bWVyaWMgdmFsdWUgb3IgYXMgYSBzdHJpbmcgY29sb3IgbmFtZS5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGlzIHNwZWNpZmllZCBhcyBhIG51bWJlcjpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVyIDEgdG8gMTAwIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVycyBncmVhdGVyIHRoYW4gMTAwIGFyZSBjbGFtcGVkIHRvIDEwMDtcclxuICogXHJcbiAqIEBwYXJhbSBjIENvbG9yIHZhbHVlIGFzIGVpdGhlciBhIG51bWJlciBvciBhIG5hbWVkIGNvbG9yXHJcbiAqIEBwYXJhbSBhIEFscGhhIGNoYW5uZWwgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvcldpdGhBbHBoYVRvU3RyaW5nKCBjOiBudW1iZXIgfCBrZXlvZiBJTmFtZWRDb2xvcnMsIGE6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB0aGUgYWxwaGEgaXMgMCwgcmV0dXJuIHRyYW5zcGFyZW50IGNvbG9yXHJcbiAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCIjMDAwMFwiO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgY29sb3IgdG8gbnVtZXJpYyB2YWx1ZSAoaWYgaXQncyBub3QgYSBudW1iZXIgeWV0KS4gSWYgdGhlIGNvbG9yIHdhcyBnaXZlbiBhcyBhXHJcbiAgICAvLyBzdHJpbmcgdGhhdCB3ZSBjYW5ub3QgZmluZCBpbiB0aGUgQ29sb3JzIG9iamVjdCwgcmV0dXJuIHB1cmUgd2hpdGUuXHJcbiAgICBsZXQgbiA9IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gQ29sb3JzW2NdIDogYztcclxuICAgIGlmIChuID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiRkZGXCI7XHJcblxyXG4gICAgLy8gbmVnYXRpdmUgYW5kIHBvc2l0aXZlIHZhbHVlcyBvZiBhbHBoYSBhcmUgdHJlYXRlZCBpZGVudGljYWxseSwgc28gY29udmVydCB0byBwb3NpdGl2ZVxyXG4gICAgaWYgKGEgPCAwKVxyXG4gICAgICAgIGEgPSAtYTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGFscGhhIHRvIGEgbnVtYmVyIHdpdGggYWJzb2x1dGUgdmFsdWUgbGVzcyB0aGFuIDEgKGlmIGl0IGlzIG5vdCB5ZXQpLiBJZiBhbHBoYVxyXG4gICAgLy8gaXMgMSBvciAxMDAsIHRoZW4gc2V0IGl0IHRvIDAgYmVjYXVzZSAwIGluIHRoZSBjb2xvck51bWJlclRvU3RyaW5nIG1lYW5zIFwibm8gYWxwaGFcIi5cclxuICAgIGEgPSBhID09PSAxIHx8IGEgPj0gMTAwID8gMCA6IGEgPiAxID8gYSAvIDEwMCA6IGE7XHJcblxyXG4gICAgLy8gbWFrZSB0aGUgbmV3IGFscGhhXHJcbiAgICByZXR1cm4gY29sb3JOdW1iZXJUb1N0cmluZyggbiA+IDAgPyBuICsgYSA6IG4gLSBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3Igc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy4gSWYgYSBzdHJpbmcgdmFsdWUgaXMgaW4gdGhlIENvbG9ycyBvYmplY3Qgd2VcclxuICogbmVlZCB0byBnZXQgaXRzIG51bWJlciBhbmQgY29udmVydCBpdCB0byB0aGUgcmdiW2FdKCkgZnVuY3Rpb24gYmVjYXVzZSBpdCBtaWdodCBiZSBhIGN1c3RvbVxyXG4gKiBjb2xvciBuYW1lIGFkZGVkIHZpYSBJTmFtZWRDb2xvcnMgbW9kdWxlIGF1Z21lbnRhdGlvbi4gRm9yIG51bWVyaWMgdmFsdWVzLCB3ZSBjaGVjayBpZiB0aGlzIGlzXHJcbiAqIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBjb2xvcnMgYW5kIHJldHVybiBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NDb2xvcj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gQ29sb3JzW3ZdID8gY29sb3JOdW1iZXJUb1N0cmluZyggQ29sb3JzW3ZdKSA6IHYsXHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JOdW1iZXJUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHR5cGVzIGZvciB3b3JraW5nIHdpdGggQ1NTIGNvbG9ycy5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJR2VuZXJpY1Byb3h5IH0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkQ29sb3JzIGludGVyZmFjZSBsaXN0cyB0aGUgbmFtZXMgb2Ygc3RhbmRhcmQgV2ViIGNvbG9ycy4gSXQgaXMgbmVlZGVkIHRvIGFsbG93IGRldmVsb3BlcnNcclxuICogdG8gYWRkIG5ldyBuYW1lZCBjb2xvcnMgdGhyb3VnaCBtb2R1bGUgYXVnbWVudGF0aW9uIHRlY2huaXF1ZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkQ29sb3JzXHJcbntcclxuICAgIHJlYWRvbmx5IGJsYWNrOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpbHZlcjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyYXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hcm9vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlZDogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHB1cnBsZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvdzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdnk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRlYWw6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWE6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFsaWNlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFudGlxdWV3aGl0ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWFtYXJpbmU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGF6dXJlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJlaWdlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJpc3F1ZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsYW5jaGVkYWxtb25kOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJyb3duOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJ1cmx5d29vZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNhZGV0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNob2NvbGF0ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcmFsOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5mbG93ZXJibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5zaWxrOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNyaW1zb246ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGN5YW46ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtibHVlOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtjeWFuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmF5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmV5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtraGFraTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmttYWdlbnRhOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtyZWQ6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzYWxtb246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzZWFncmVlbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBwaW5rOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBza3libHVlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyYXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyZXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRvZGdlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZpcmVicmljazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZsb3JhbHdoaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZvcmVzdGdyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdhaW5zYm9ybzogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdob3N0d2hpdGU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGQ6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGRlbnJvZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVueWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvbmV5ZGV3OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvdHBpbms6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlhbnJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlnbzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGl2b3J5OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGtoYWtpOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhd25ncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxlbW9uY2hpZmZvbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y3lhbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0cGluazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0eWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbmVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hZ2VudGE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bW9yY2hpZDogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXB1cnBsZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXR1cnF1b2lzZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXZpb2xldHJlZDogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pbnRjcmVhbTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pc3R5cm9zZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1vY2Nhc2luOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdmFqb3doaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9sZGxhY2U6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlZHJhYjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZXJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yY2hpZDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhcGF5YXdoaXA6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlYWNocHVmZjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlcnU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBpbms6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBsdW06ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBvd2RlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvc3licm93bjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJveWFsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhZGRsZWJyb3duOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbG1vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbmR5YnJvd246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYWdyZWVuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYXNoZWxsOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpZW5uYTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNreWJsdWU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNub3c6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNwcmluZ2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHN0ZWVsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRhbjogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRoaXN0bGU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRvbWF0bzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHR1cnF1b2lzZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHZpb2xldDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoZWF0OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlc21va2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvd2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb2xvclByb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIG9mIENTUyBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBmb3JcclxuICogc3BlY2lmeWluZyBjb2xvcnMuIFRoaXMgaW50ZXJmYWNlIGlzIHJldHVybmVkIGZyb20gZnVuY3Rpb25zIGxpa2U6IHJnYigpLCBhbHBoYSgpLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvclByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImNvbG9yXCI+IHt9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN5c3RlbUNvbG9ycyB0eXBlIGRlZmluZXMga2V5d29yZHMgZm9yIHN5c3RlbSBjb2xvcnMgdGhhdCBhcmUgdXNlZCBpbiBmb3JjZWQtY29sb3IgbW9kZVxyXG4gKiAoYnV0IGNhbiBiZSBhbHNvIHVzZWQgaW4gdGhlIHJlZ3VsYXIgbW9kZSkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTeXN0ZW1Db2xvcnMgPSBcIkFjdGl2ZVRleHRcIiB8IFwiQnV0dG9uRmFjZVwiIHwgXCJCdXR0b25UZXh0XCIgfCBcIkNhbnZhc1wiIHwgXCJDYW52YXNUZXh0XCIgfFxyXG4gICAgXCJGaWVsZFwiIHwgXCJGaWVsZFRleHRcIiB8IFwiR3JheVRleHRcIiB8IFwiSGlnaGxpZ2h0XCIgfCBcIkhpZ2hsaWdodFRleHRcIiB8IFwiTGlua1RleHRcIiB8IFwiVmlzaXRlZFRleHRcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBjb2xvci4gQ29sb3IgY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqIC0ga2V5d29yZHM6IGFueSBzdHJpbmcgdGhhdCBpcyBhIG5hbWUgb2YgYSBwcm9wZXJ0eSBpbiB0aGUgSU5hbWVkQ29sb3JzIGludGVyZmFjZS5cclxuICogLSBudW1iZXI6XHJcbiAqICAgLSBuZWdhdGl2ZSBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIGludmVydGVkIGNvbG9ycy5cclxuICogICAtIGludGVnZXIgcGFydCBvZiB0aGUgbnVtYmVyIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDB4RkZGRkZGIC0gZXZlcnl0aGluZyBlbHNlIGlzXHJcbiAqICAgICBpZ25vcmVkLlxyXG4gKiAgIC0gZmxvYXRpbmcgcG9pbnQgcGFydCBvZiB0aGUgbnVtYmVyIGlzIHRyZWF0ZWQgYXMgcGVyY2VudHMgb2YgYWxwaGEgY2hhbm5lbC4gSWYgdGhlcmUgaXMgbm9cclxuICogICAgIGZsb2F0aW5nIHBhcnQsIGFscGhhIGlzIDEuXHJcbiAqIC0gZnVuY3Rpb25zOiByZ2IoKSwgaHNsKCksIGFscGhhKCkgYXMgd2VsbCBhcyBhbnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBJQ29sb3JQcm94eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzQ29sb3IgPSBcInRyYW5zcGFyZW50XCIgfCBcImN1cnJlbnRjb2xvclwiIHwga2V5b2YgSU5hbWVkQ29sb3JzIHwgbnVtYmVyIHwgSUNvbG9yUHJveHkgfCBTeXN0ZW1Db2xvcnM7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBPYmplY3Qgd2hvc2UgcHJvcGVydHkgbmFtZXMgYXJlIG5hbWVzIG9mIHdlbGwta25vd24gY29sb3JzIGFuZCB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgaGV4YWRlY2ltYWxcclxuICogcmVwcmVzZW50YXJ0aW9uIG9mIHRoZSBSR0Igc2VwYXJhdGlvbnMgKHdpdGhvdXQgYW4gYWxwaGEgbWFzaykuXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbG9yczogSU5hbWVkQ29sb3JzID1cclxue1xyXG4gICAgYmxhY2s6ICAgICAgICAgICAgICAgICAgMHgwMDAwMDAsXHJcbiAgICBzaWx2ZXI6ICAgICAgICAgICAgICAgICAweGMwYzBjMCxcclxuICAgIGdyYXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgd2hpdGU6ICAgICAgICAgICAgICAgICAgMHhmZmZmZmYsXHJcbiAgICBtYXJvb246ICAgICAgICAgICAgICAgICAweDgwMDAwMCxcclxuICAgIHJlZDogICAgICAgICAgICAgICAgICAgIDB4ZmYwMDAwLFxyXG4gICAgcHVycGxlOiAgICAgICAgICAgICAgICAgMHg4MDAwODAsXHJcbiAgICBmdWNoc2lhOiAgICAgICAgICAgICAgICAweGZmMDBmZixcclxuICAgIGdyZWVuOiAgICAgICAgICAgICAgICAgIDB4MDA4MDAwLFxyXG4gICAgbGltZTogICAgICAgICAgICAgICAgICAgMHgwMGZmMDAsXHJcbiAgICBvbGl2ZTogICAgICAgICAgICAgICAgICAweDgwODAwMCxcclxuICAgIHllbGxvdzogICAgICAgICAgICAgICAgIDB4ZmZmZjAwLFxyXG4gICAgbmF2eTogICAgICAgICAgICAgICAgICAgMHgwMDAwODAsXHJcbiAgICBibHVlOiAgICAgICAgICAgICAgICAgICAweDAwMDBmZixcclxuICAgIHRlYWw6ICAgICAgICAgICAgICAgICAgIDB4MDA4MDgwLFxyXG4gICAgYXF1YTogICAgICAgICAgICAgICAgICAgMHgwMGZmZmYsXHJcbiAgICBvcmFuZ2U6ICAgICAgICAgICAgICAgICAweGZmYTUwMCxcclxuICAgIGFsaWNlYmx1ZTogICAgICAgICAgICAgIDB4ZjBmOGZmLFxyXG4gICAgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgMHhmYWViZDcsXHJcbiAgICBhcXVhbWFyaW5lOiAgICAgICAgICAgICAweDdmZmZkNCxcclxuICAgIGF6dXJlOiAgICAgICAgICAgICAgICAgIDB4ZjBmZmZmLFxyXG4gICAgYmVpZ2U6ICAgICAgICAgICAgICAgICAgMHhmNWY1ZGMsXHJcbiAgICBiaXNxdWU6ICAgICAgICAgICAgICAgICAweGZmZTRjNCxcclxuICAgIGJsYW5jaGVkYWxtb25kOiAgICAgICAgIDB4ZmZlYmNkLFxyXG4gICAgYmx1ZXZpb2xldDogICAgICAgICAgICAgMHg4YTJiZTIsXHJcbiAgICBicm93bjogICAgICAgICAgICAgICAgICAweGE1MmEyYSxcclxuICAgIGJ1cmx5d29vZDogICAgICAgICAgICAgIDB4ZGViODg3LFxyXG4gICAgY2FkZXRibHVlOiAgICAgICAgICAgICAgMHg1ZjllYTAsXHJcbiAgICBjaGFydHJldXNlOiAgICAgICAgICAgICAweDdmZmYwMCxcclxuICAgIGNob2NvbGF0ZTogICAgICAgICAgICAgIDB4ZDI2OTFlLFxyXG4gICAgY29yYWw6ICAgICAgICAgICAgICAgICAgMHhmZjdmNTAsXHJcbiAgICBjb3JuZmxvd2VyYmx1ZTogICAgICAgICAweDY0OTVlZCxcclxuICAgIGNvcm5zaWxrOiAgICAgICAgICAgICAgIDB4ZmZmOGRjLFxyXG4gICAgY3JpbXNvbjogICAgICAgICAgICAgICAgMHhkYzE0M2MsXHJcbiAgICBjeWFuOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIGRhcmtibHVlOiAgICAgICAgICAgICAgIDB4MDAwMDhiLFxyXG4gICAgZGFya2N5YW46ICAgICAgICAgICAgICAgMHgwMDhiOGIsXHJcbiAgICBkYXJrZ29sZGVucm9kOiAgICAgICAgICAweGI4ODYwYixcclxuICAgIGRhcmtncmF5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2dyZWVuOiAgICAgICAgICAgICAgMHgwMDY0MDAsXHJcbiAgICBkYXJrZ3JleTogICAgICAgICAgICAgICAweGE5YTlhOSxcclxuICAgIGRhcmtraGFraTogICAgICAgICAgICAgIDB4YmRiNzZiLFxyXG4gICAgZGFya21hZ2VudGE6ICAgICAgICAgICAgMHg4YjAwOGIsXHJcbiAgICBkYXJrb2xpdmVncmVlbjogICAgICAgICAweDU1NmIyZixcclxuICAgIGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIDB4ZmY4YzAwLFxyXG4gICAgZGFya29yY2hpZDogICAgICAgICAgICAgMHg5OTMyY2MsXHJcbiAgICBkYXJrcmVkOiAgICAgICAgICAgICAgICAweDhiMDAwMCxcclxuICAgIGRhcmtzYWxtb246ICAgICAgICAgICAgIDB4ZTk5NjdhLFxyXG4gICAgZGFya3NlYWdyZWVuOiAgICAgICAgICAgMHg4ZmJjOGYsXHJcbiAgICBkYXJrc2xhdGVibHVlOiAgICAgICAgICAweDQ4M2Q4YixcclxuICAgIGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIDB4MmY0ZjRmLFxyXG4gICAgZGFya3NsYXRlZ3JleTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrdHVycXVvaXNlOiAgICAgICAgICAweDAwY2VkMSxcclxuICAgIGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIDB4OTQwMGQzLFxyXG4gICAgZGVlcHBpbms6ICAgICAgICAgICAgICAgMHhmZjE0OTMsXHJcbiAgICBkZWVwc2t5Ymx1ZTogICAgICAgICAgICAweDAwYmZmZixcclxuICAgIGRpbWdyYXk6ICAgICAgICAgICAgICAgIDB4Njk2OTY5LFxyXG4gICAgZGltZ3JleTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkb2RnZXJibHVlOiAgICAgICAgICAgICAweDFlOTBmZixcclxuICAgIGZpcmVicmljazogICAgICAgICAgICAgIDB4YjIyMjIyLFxyXG4gICAgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgMHhmZmZhZjAsXHJcbiAgICBmb3Jlc3RncmVlbjogICAgICAgICAgICAweDIyOGIyMixcclxuICAgIGdhaW5zYm9ybzogICAgICAgICAgICAgIDB4ZGNkY2RjLFxyXG4gICAgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgMHhmOGY4ZmYsXHJcbiAgICBnb2xkOiAgICAgICAgICAgICAgICAgICAweGZmZDcwMCxcclxuICAgIGdvbGRlbnJvZDogICAgICAgICAgICAgIDB4ZGFhNTIwLFxyXG4gICAgZ3JlZW55ZWxsb3c6ICAgICAgICAgICAgMHhhZGZmMmYsXHJcbiAgICBncmV5OiAgICAgICAgICAgICAgICAgICAweDgwODA4MCxcclxuICAgIGhvbmV5ZGV3OiAgICAgICAgICAgICAgIDB4ZjBmZmYwLFxyXG4gICAgaG90cGluazogICAgICAgICAgICAgICAgMHhmZjY5YjQsXHJcbiAgICBpbmRpYW5yZWQ6ICAgICAgICAgICAgICAweGNkNWM1YyxcclxuICAgIGluZGlnbzogICAgICAgICAgICAgICAgIDB4NGIwMDgyLFxyXG4gICAgaXZvcnk6ICAgICAgICAgICAgICAgICAgMHhmZmZmZjAsXHJcbiAgICBraGFraTogICAgICAgICAgICAgICAgICAweGYwZTY4YyxcclxuICAgIGxhdmVuZGVyOiAgICAgICAgICAgICAgIDB4ZTZlNmZhLFxyXG4gICAgbGF2ZW5kZXJibHVzaDogICAgICAgICAgMHhmZmYwZjUsXHJcbiAgICBsYXduZ3JlZW46ICAgICAgICAgICAgICAweDdjZmMwMCxcclxuICAgIGxlbW9uY2hpZmZvbjogICAgICAgICAgIDB4ZmZmYWNkLFxyXG4gICAgbGlnaHRibHVlOiAgICAgICAgICAgICAgMHhhZGQ4ZTYsXHJcbiAgICBsaWdodGNvcmFsOiAgICAgICAgICAgICAweGYwODA4MCxcclxuICAgIGxpZ2h0Y3lhbjogICAgICAgICAgICAgIDB4ZTBmZmZmLFxyXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgMHhmYWZhZDIsXHJcbiAgICBsaWdodGdyYXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIDB4OTBlZTkwLFxyXG4gICAgbGlnaHRncmV5OiAgICAgICAgICAgICAgMHhkM2QzZDMsXHJcbiAgICBsaWdodHBpbms6ICAgICAgICAgICAgICAweGZmYjZjMSxcclxuICAgIGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIDB4ZmZhMDdhLFxyXG4gICAgbGlnaHRzZWFncmVlbjogICAgICAgICAgMHgyMGIyYWEsXHJcbiAgICBsaWdodHNreWJsdWU6ICAgICAgICAgICAweDg3Y2VmYSxcclxuICAgIGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIDB4Nzc4ODk5LFxyXG4gICAgbGlnaHRzbGF0ZWdyZXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHN0ZWVsYmx1ZTogICAgICAgICAweGIwYzRkZSxcclxuICAgIGxpZ2h0eWVsbG93OiAgICAgICAgICAgIDB4ZmZmZmUwLFxyXG4gICAgbGltZWdyZWVuOiAgICAgICAgICAgICAgMHgzMmNkMzIsXHJcbiAgICBsaW5lbjogICAgICAgICAgICAgICAgICAweGZhZjBlNixcclxuICAgIG1hZ2VudGE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgbWVkaXVtYXF1YW1hcmluZTogICAgICAgMHg2NmNkYWEsXHJcbiAgICBtZWRpdW1ibHVlOiAgICAgICAgICAgICAweDAwMDBjZCxcclxuICAgIG1lZGl1bW9yY2hpZDogICAgICAgICAgIDB4YmE1NWQzLFxyXG4gICAgbWVkaXVtcHVycGxlOiAgICAgICAgICAgMHg5MzcwZGIsXHJcbiAgICBtZWRpdW1zZWFncmVlbjogICAgICAgICAweDNjYjM3MSxcclxuICAgIG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIDB4N2I2OGVlLFxyXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgMHgwMGZhOWEsXHJcbiAgICBtZWRpdW10dXJxdW9pc2U6ICAgICAgICAweDQ4ZDFjYyxcclxuICAgIG1lZGl1bXZpb2xldHJlZDogICAgICAgIDB4YzcxNTg1LFxyXG4gICAgbWlkbmlnaHRibHVlOiAgICAgICAgICAgMHgxOTE5NzAsXHJcbiAgICBtaW50Y3JlYW06ICAgICAgICAgICAgICAweGY1ZmZmYSxcclxuICAgIG1pc3R5cm9zZTogICAgICAgICAgICAgIDB4ZmZlNGUxLFxyXG4gICAgbW9jY2FzaW46ICAgICAgICAgICAgICAgMHhmZmU0YjUsXHJcbiAgICBuYXZham93aGl0ZTogICAgICAgICAgICAweGZmZGVhZCxcclxuICAgIG9sZGxhY2U6ICAgICAgICAgICAgICAgIDB4ZmRmNWU2LFxyXG4gICAgb2xpdmVkcmFiOiAgICAgICAgICAgICAgMHg2YjhlMjMsXHJcbiAgICBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICAweGZmNDUwMCxcclxuICAgIG9yY2hpZDogICAgICAgICAgICAgICAgIDB4ZGE3MGQ2LFxyXG4gICAgcGFsZWdvbGRlbnJvZDogICAgICAgICAgMHhlZWU4YWEsXHJcbiAgICBwYWxlZ3JlZW46ICAgICAgICAgICAgICAweDk4ZmI5OCxcclxuICAgIHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIDB4YWZlZWVlLFxyXG4gICAgcGFsZXZpb2xldHJlZDogICAgICAgICAgMHhkYjcwOTMsXHJcbiAgICBwYXBheWF3aGlwOiAgICAgICAgICAgICAweGZmZWZkNSxcclxuICAgIHBlYWNocHVmZjogICAgICAgICAgICAgIDB4ZmZkYWI5LFxyXG4gICAgcGVydTogICAgICAgICAgICAgICAgICAgMHhjZDg1M2YsXHJcbiAgICBwaW5rOiAgICAgICAgICAgICAgICAgICAweGZmYzBjYixcclxuICAgIHBsdW06ICAgICAgICAgICAgICAgICAgIDB4ZGRhMGRkLFxyXG4gICAgcG93ZGVyYmx1ZTogICAgICAgICAgICAgMHhiMGUwZTYsXHJcbiAgICByb3N5YnJvd246ICAgICAgICAgICAgICAweGJjOGY4ZixcclxuICAgIHJveWFsYmx1ZTogICAgICAgICAgICAgIDB4NDE2OWUxLFxyXG4gICAgc2FkZGxlYnJvd246ICAgICAgICAgICAgMHg4YjQ1MTMsXHJcbiAgICBzYWxtb246ICAgICAgICAgICAgICAgICAweGZhODA3MixcclxuICAgIHNhbmR5YnJvd246ICAgICAgICAgICAgIDB4ZjRhNDYwLFxyXG4gICAgc2VhZ3JlZW46ICAgICAgICAgICAgICAgMHgyZThiNTcsXHJcbiAgICBzZWFzaGVsbDogICAgICAgICAgICAgICAweGZmZjVlZSxcclxuICAgIHNpZW5uYTogICAgICAgICAgICAgICAgIDB4YTA1MjJkLFxyXG4gICAgc2t5Ymx1ZTogICAgICAgICAgICAgICAgMHg4N2NlZWIsXHJcbiAgICBzbGF0ZWJsdWU6ICAgICAgICAgICAgICAweDZhNWFjZCxcclxuICAgIHNsYXRlZ3JheTogICAgICAgICAgICAgIDB4NzA4MDkwLFxyXG4gICAgc2xhdGVncmV5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbm93OiAgICAgICAgICAgICAgICAgICAweGZmZmFmYSxcclxuICAgIHNwcmluZ2dyZWVuOiAgICAgICAgICAgIDB4MDBmZjdmLFxyXG4gICAgc3RlZWxibHVlOiAgICAgICAgICAgICAgMHg0NjgyYjQsXHJcbiAgICB0YW46ICAgICAgICAgICAgICAgICAgICAweGQyYjQ4YyxcclxuICAgIHRoaXN0bGU6ICAgICAgICAgICAgICAgIDB4ZDhiZmQ4LFxyXG4gICAgdG9tYXRvOiAgICAgICAgICAgICAgICAgMHhmZjYzNDcsXHJcbiAgICB0dXJxdW9pc2U6ICAgICAgICAgICAgICAweDQwZTBkMCxcclxuICAgIHZpb2xldDogICAgICAgICAgICAgICAgIDB4ZWU4MmVlLFxyXG4gICAgd2hlYXQ6ICAgICAgICAgICAgICAgICAgMHhmNWRlYjMsXHJcbiAgICB3aGl0ZXNtb2tlOiAgICAgICAgICAgICAweGY1ZjVmNSxcclxuICAgIHllbGxvd2dyZWVuOiAgICAgICAgICAgIDB4OWFjZDMyLFxyXG4gICAgcmViZWNjYXB1cnBsZTogICAgICAgICAgMHg2NjMzOTksXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIEZvbnRGYWNlVHlwZXMgZnJvbSBcIi4vRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCB7b2JqMnN0cn0gZnJvbSBcIi4vU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge2NhbWVsVG9EYXNoLCB2YWwyc3RyLCBDc3NQZXJjZW50TWF0aCwgQ3NzQW5nbGVNYXRoLCBhcnIyc3RyLCBDc3NOdW1iZXJNYXRofSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBmb250IGZhY2UgZGVmaW5pdGlvbiBvYmplY3QgdG8gdGhlIENTUyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250RmFjZVRvU3RyaW5nKCBmb250ZmFjZTogRm9udEZhY2VUeXBlcy5JRm9udEZhY2UpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghZm9udGZhY2UgfHwgIWZvbnRmYWNlLmZvbnRGYW1pbHkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IHMgPSBcIntcIjtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBmb250ZmFjZSlcclxuICAgIHtcclxuICAgICAgICBzICs9IGAke2NhbWVsVG9EYXNoKCBwcm9wTmFtZSl9OmA7XHJcbiAgICAgICAgbGV0IHByb3BWYWwgPSBmb250ZmFjZVtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcImZvbnRTdHJldGNoXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFN0cmV0Y2hUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0eWxlXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFN0eWxlVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcImZvbnRXZWlnaHRcIilcclxuICAgICAgICAgICAgcyArPSBmb250V2VpZ2h0VG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcInNyY1wiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTcmNUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzICs9IHByb3BWYWw7XHJcblxyXG4gICAgICAgIHMgKz0gXCI7XCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcyArIFwifVwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHJldGNoVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3RyZXRjaF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0eWxlX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgb2JsaXF1ZSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHYpfWAsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBvYmxpcXVlICR7YXJyMnN0ciggdiwgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcpfWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRXZWlnaHRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRXZWlnaHRfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBmb250U2luZ2xlU3JjVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFNpbmdsZVNyY1RvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImxvY2FsXCIsIHYgPT4gYGxvY2FsKCR7dn0pYF0sXHJcbiAgICAgICAgW1widXJsXCIsIHYgPT4gYHVybCgke3Z9KWBdLFxyXG4gICAgICAgIFtcImZvcm1hdFwiLCB2ID0+IGBmb3JtYXQoJHtmb250Rm9ybWF0VG9TdHJpbmcodil9KWBdXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250Rm9ybWF0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBgXFxcIiR7dn1cXFwiYCxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdHlwZXMgdXNlZCB0byBkZWZpbmUgQ1NTIGA8aW1hZ2U+YCB0eXBlIGFuZCByZWxhdGVkIGZ1bmN0aW9ucy5cclxuICovXHJcblxyXG5pbXBvcnQge0lVcmxQcm94eSwgRXh0ZW5kZWQsIENzc051bWJlciwgQ3NzQW5nbGUsIE51bWJlckJhc2UsIENzc0xlbmd0aCwgQ3NzUG9zaXRpb24sIElHZW5lcmljUHJveHl9IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuL0NvbG9yVHlwZXNcIjtcclxuaW1wb3J0IHsgRXh0ZW50S2V5d29yZCB9IGZyb20gXCIuL1N0eWxlVHlwZXNcIjtcclxuXHJcblxyXG4vKipcclxuICogVGhlIEltYWdlUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgb2YgQ1NTIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGZvclxyXG4gKiBzZWNpZnlpbmcgaW1hZ2VzLiBUaGlzIGludGVyZmFjZSBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlOiBsaW5lYXJHcmFkaWVudCgpLCBwYWludCgpLFxyXG4gKiBlbGVtZW50KCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiaW1hZ2VcIj4ge307XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzSW1hZ2UgdHlwZSByZXByZXNlbnRzIGEgdHlwZSB1c2VkIGZvciBDU1MgcHJvcGVydGllcyB0aGF0IGFjY2VwdCB0aGUgYDxpbWFnZT5gIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NJbWFnZSA9IElVcmxQcm94eSB8IElJbWFnZVByb3h5O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVmFsdWUgb2YgYSBoaW50IGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMgaXMgZXhwcmVzc2VkIGFzIGEgQ1NTIG51bWVyaWMgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFkaWVudEhpbnRWYWx1ZSA9IEV4dGVuZGVkPE51bWJlckJhc2U8YW55Pj47XHJcblxyXG4vKipcclxuICogQ29sb3IgaGludCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zIGlzIGV4cHJlc3NlZCBhcyBhIHNpbmdsZS1pdGVtIGFycmF5IHRoYXRcclxuICogY29udGFpbnMgYSBDU1MgbnVtZXJpYyB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50SGludCA9IFtHcmFkaWVudEhpbnRWYWx1ZV07XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNvbG9yIHN0b3Agd2l0aCBpbmRpY2F0aW9uIG9mIGxlbmd0aCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLiBUaGUgZmlyc3RcclxuICogaXRlbSBpcyB0aGUgY29sb3IgdmFsdWUsIHRoZSBzZWNvbmQgaXRlbSBpcyB0aGUgcG9zaXRpb24gb2Ygd2hlcmUgdGhlIGNvbG9yIHN0YXJ0cyBhbmQgdGhlXHJcbiAqIG9wdGlvbmFsIHRoaXJkIGl0ZW0gaXMgdGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBjb2xvciBzdG9wcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50Q29sb3JBbmRMZW5ndGggPSBbRXh0ZW5kZWQ8Q3NzQ29sb3I+LCBHcmFkaWVudEhpbnRWYWx1ZSwgR3JhZGllbnRIaW50VmFsdWU/XTtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBzdG9wIGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMgaXMgZXhwcmVzc2VkIGFzIGVpdGhlciBhIHNpbmdsZSBjb2xvciB2YWx1ZVxyXG4gKiBvciBhbiBhcnJheSBvZiB0d28gb3IgdGhyZWUgaXRlbXMuIEluIHRoZSBsYXR0ZXIgY2FzZSwgdGhlIGZpcnN0IGl0ZW0gaXMgdGhlIGNvbG9yIHZhbHVlLCB0aGVcclxuICogc2Vjb25kIGl0ZW0gaXMgdGhlIHBvc2l0aW9uIG9mIHdoZXJlIHRoZSBjb2xvciBzdGFydHMgYW5kIHRoZSBvcHRpb25hbCB0aGlyZCBpdGVtIGlzIHRoZVxyXG4gKiBwb3NpdGlvbiB3aGVyZSB0aGUgY29sb3Igc3RvcHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFkaWVudFN0b3AgPSBFeHRlbmRlZDxDc3NDb2xvcj4gfCBHcmFkaWVudENvbG9yQW5kTGVuZ3RoO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGVpdGhlciBjb2xvciBzdG9wIG9yIGNvbG9yIGhpbnQgZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50U3RvcE9ySGludCA9IEdyYWRpZW50U3RvcCB8IEdyYWRpZW50SGludDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBlbnVtZXJhdGVzIHBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgc2lkZS1vci1jb3JuZXIgZm9yIHRoZSBgbGluZWFyLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIExpbmVhckdyYWRTaWRlT3JDb3JuZXIgPSBcImJvdHRvbVwiIHwgXCJsZWZ0XCIgfCBcInRvcFwiIHwgXCJyaWdodFwiIHxcclxuICAgIFwidG9wIGxlZnRcIiB8IFwidG9wIHJpZ2h0XCIgfCBcImJvdHRvbSByaWdodFwiIHwgXCJib3R0b20gbGVmdFwiIHxcclxuICAgIFwibGVmdCB0b3BcIiB8IFwicmlnaHQgdG9wXCIgfCBcImxlZnQgYm90dG9tXCIgfCBcInJpZ2h0IGJvdHRvbVwiO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCByZXByZXNlbnRzIHRoZSBhbmdsZSBvZiB0aGUgYGxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMaW5lYXJHcmFkQW5nbGUgPSBFeHRlbmRlZDxDc3NBbmdsZT4gfCBMaW5lYXJHcmFkU2lkZU9yQ29ybmVyO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgc2hhcGUgZm9yIHRoZSBgcmFkaWFsLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJhZGlhbEdyYWRpZW50U2hhcGUgPSBcImNpcmNsZVwiIHwgXCJlbGxpcHNlXCI7XHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgc2l6ZSBmb3IgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLiBJdCBpcyBhIHNpbmdsZSBMZW5ndGggdmFsdWVcclxuICogZm9yIGNpcmNsZSBhbmQgdHdvLWVsZW1lbnQgdHVwbGUgb2YgQ3NzTGVuZ3RoIHZhbHVlcyBmb3IgZWxsaXBzZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJhZGlhbEdyYWRpZW50U2l6ZSA9IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBwYXJhbWV0ZXJzIGZvciB0aGUgYGNyb3NzLWZhZGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3Jvc3NGYWRlUGFyYW0gPSBFeHRlbmRlZDxDc3NJbWFnZT4gfCBbRXh0ZW5kZWQ8Q3NzSW1hZ2U+LCBFeHRlbmRlZDxDc3NOdW1iZXI+XTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JhZGllbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgcHJvcGVydGllcyB0aGF0IHJldHVybiBpbnRlcmZhY2VzIHJlcHJlc2VudGluZyBgPGdyYWRpZW50PmBcclxuICogQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyYWRpZW50XHJcbntcclxuICAgIHJlYWRvbmx5IGxpbmVhcjogSUxpbmVhckdyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nTGluZWFyOiBJTGluZWFyR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSByYWRpYWw6IElSYWRpYWxHcmFkaWVudDtcclxuICAgIHJlYWRvbmx5IHJlcGVhdGluZ1JhZGlhbDogSVJhZGlhbEdyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgY29uaWM6IElDb25pY0dyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nQ29uaWM6IElDb25pY0dyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUxpbmVhckdyYWRpZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBlaXRoZXIgYGxpbmVyLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWxpbmVyLWdyYWRpZW50YCBDU1MgZnVuY3Rpb24uIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHNwZWNpZnlpbmcgYW4gYW5nbGUgcGFyYW1ldGVyXHJcbiAqIGJlZm9yZSBpbnZvY2F0aW9uIHRoYXQgYWNjZXB0cyBhIGxpc3Qgb2YgY29sb3Igc3RvcHMgYW5kIGhpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTGluZWFyR3JhZGllbnRcclxue1xyXG4gICAgKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eTtcclxuXHR0byggYW5nbGU6IExpbmVhckdyYWRBbmdsZSk6IElMaW5lYXJHcmFkaWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSYWRpYWxHcmFkaWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgZWl0aGVyIGByYWRpYWwtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50YCBDU1MgZnVuY3Rpb24uIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHNwZWNpZnlpbmcgdGhlIHNoYXBlLCBzaXplIGFuZFxyXG4gKiBleHRlbnQgcGFyYW1ldGVycyBiZWZvcmUgaW52b2NhdGlvbiB0aGF0IGFjY2VwdHMgYSBsaXN0IG9mIGNvbG9yIHN0b3BzIGFuZCBoaW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlhbEdyYWRpZW50XHJcbntcclxuICAgICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHk7XHJcblx0Y2lyY2xlKCBzaXplT3JFeHRlbnQ/OiBFeHRlbmRlZDxDc3NMZW5ndGg+IHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pOiBJUmFkaWFsR3JhZGllbnQ7XHJcblx0ZWxsaXBzZSggc2l6ZU9yRXh0ZW50PzogW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD5dIHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pOiBJUmFkaWFsR3JhZGllbnQ7XHJcblx0ZXh0ZW50KCBleHRlbnQ6IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KTogSVJhZGlhbEdyYWRpZW50O1xyXG5cdGF0KCBwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElSYWRpYWxHcmFkaWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb25pY0dyYWRpZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBlaXRoZXIgYGNvbmljLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50YCBDU1MgZnVuY3Rpb24uIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHNwZWNpZnlpbmcgdGhlIGBmcm9tYCBhbmRcclxuICogYHBvc2l0aW9uYCBwYXJhbWV0ZXJzIGJlZm9yZSBpbnZvY2F0aW9uIHRoYXQgYWNjZXB0cyBhIGxpc3Qgb2YgY29sb3Igc3RvcHMgYW5kIGhpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uaWNHcmFkaWVudFxyXG57XHJcbiAgICAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5O1xyXG5cdGZyb20oIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJQ29uaWNHcmFkaWVudDtcclxuXHRhdCggcG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBJQ29uaWNHcmFkaWVudDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBNZWRpYVR5cGVzIGZyb20gXCIuL01lZGlhVHlwZXNcIlxyXG5pbXBvcnQge3ZhbDJzdHIsIGNhbWVsVG9EYXNoLCBhcnIyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXNwZWN0UmF0aW9Ub1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkFzcGVjdFJhdGlvRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWxbMF0gKyBcIi9cIiArIHZhbFsxXTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5MZW5ndGhGZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwicHhcIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuUmVzb2x1dGlvbkZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJkcGlcIjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG50eXBlIGNvbnZlcnRGdW5jVHlwZTxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gKHZhbDogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS10pID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYUZlYXR1cmVJbmZvIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gdGhhdCB3ZSBrZWVwIGZvciBzdHlsZSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG50eXBlIE1lZGlhRmVhdHVyZUluZm88SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9IGNvbnZlcnRGdW5jVHlwZTxLPiB8IGJvb2xlYW4gfFxyXG4gICAge1xyXG4gICAgICAgIC8qKiBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGZyb20gdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG4gICAgICAgIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGU8Sz47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIGRlZmluZWQsIGluZGljYXRlcyB0aGUgdmFsdWUsIHdoaWNoIHdlIHdpbGwgbm90IHB1dCBpbnRvIENTUyBzdHJpbmcuIFRoaXMgaXMgbmVlZGVkIGZvclxyXG4gICAgICAgICAqIG1lZGlhIGZlYXR1cmVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRob3V0IHRoZSB2YWx1ZSwgZS5nLiBjb2xvciBvciBjb2xvci1pbmRleC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZlYXR1cmUgaXMgYSBcInJhbmdlXCIgZmVhdHVyZTsgdGhhdCBpcywgY2FuIGJlIHVzZWQgaW4gYW5cclxuICAgICAgICAgKiBleHByZXNzaW9uIChhIDw9IGZlYXR1cmUgPD0gYikuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFUeXBlcy5NZWRpYVF1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCBxdWVyeSwge1xyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZU1lZGlhUXVlcnlUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogTWVkaWFUeXBlcy5TaW5nbGVNZWRpYVF1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IG1lZGlhVHlwZSA9IHF1ZXJ5LiRtZWRpYVR5cGU7XHJcbiAgICBsZXQgb25seSA9IHF1ZXJ5LiRvbmx5O1xyXG4gICAgbGV0IG5lZ2F0ZSA9IHF1ZXJ5LiRuZWdhdGU7XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG1lZGlhVHlwZSlcclxuICAgICAgICBpdGVtcy5wdXNoKCAob25seSA/IFwib25seSBcIiA6IFwiXCIpICsgbWVkaWFUeXBlKTtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBxdWVyeSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiRcIikpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlbcHJvcE5hbWVdKVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCBgKCR7bWVkaWFGZWF0dXJlVG9TdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmVnYXRlID8gXCJub3QgXCIgOiBcIlwifSR7aXRlbXMuam9pbihcIiBhbmQgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBmZWF0dXJlIHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGZWF0dXJlVG9TdHJpbmcoIGZlYXR1cmVOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmZWF0dXJlTmFtZSB8fCBwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgXHJcbiAgICBsZXQgaW5mbzogTWVkaWFGZWF0dXJlSW5mbyA9IG1lZGlhRmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xyXG5cclxuICAgIGxldCByZWFsRmVhdHVyZU5hbWUgPSBjYW1lbFRvRGFzaCggZmVhdHVyZU5hbWUpO1xyXG5cclxuICAgIC8vIGlmIGRlZmF1bHRWYWx1ZSBpcyBkZWZpbmVkIGFuZCB0aGUgcHJvcGVydHkgdmFsdWUgaXMgZXF1YWwgdG8gaXQsIG5vIHZhbHVlIHNob3VsZCBiZSByZXR1cm5lZC5cclxuICAgIGxldCBkZWZhdWx0VmFsdWUgPSB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uZGVmYXVsdFZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BWYWwgPT09IGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gXCJcIiA6IHJlYWxGZWF0dXJlTmFtZTtcclxuXHJcbiAgICBsZXQgY29udmVydCA9IHR5cGVvZiBpbmZvID09PSBcImZ1bmN0aW9uXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmNvbnZlcnQgOiB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaXNSYW5nZSA9IHR5cGVvZiBpbmZvID09PSBcImJvb2xlYW5cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uaXNSYW5nZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChpc1JhbmdlICYmICF2YWx1ZU9ubHkgJiYgQXJyYXkuaXNBcnJheSggcHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMxID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFswXSwgY29udmVydCk7XHJcbiAgICAgICAgbGV0IHMyID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFsxXSwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3MxfSA8PSAke3JlYWxGZWF0dXJlTmFtZX0gPD0gJHtzMn1gO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbCwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IHMgOiByZWFsRmVhdHVyZU5hbWUgKyBcIjpcIiArIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbDogYW55LCBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgaWYgKGNvbnZlcnQpXHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnQoIHByb3BWYWwpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWw7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBwcm9wVmFsKSlcclxuICAgICAgICByZXR1cm4gYXJyMnN0ciggcHJvcFZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgbWVkaWFGZWF0dXJlczogeyBbSyBpbiBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldF0/OiBNZWRpYUZlYXR1cmVJbmZvPEs+IH0gPVxyXG57XHJcbiAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIG1pbkFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWF4QXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBjb2xvcjogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGNvbG9ySW5kZXg6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBoZWlnaHQ6IHsgY29udmVydDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5IZWlnaHQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heEhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbW9ub2Nocm9tZTogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIHJlc29sdXRpb246IHsgY29udmVydDogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluUmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsXHJcbiAgICB3aWR0aDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbldpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7dmFsMnN0cn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc2VsZWN0b3IuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB0d28tbnVtYmVyIHR1cGxlIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtIEFuK0IuXHJcbiAqL1xyXG5mdW5jdGlvbiBudGhUdXBsZVRvU3RyaW5nKCB2YWw6IFtudW1iZXIsIG51bWJlcj9dKTogc3RyaW5nXHJcbntcclxuXHRsZXQgdjAgPSB2YWwyc3RyKCB2YWxbMF0pO1xyXG5cdGxldCB2MW4gPSB2YWxbMV07XHJcblxyXG5cdC8vIHRoZSAnIXYxbicgZXhwcmVzc2lvbiBjb3ZlcnMgbnVsbCwgdW5kZWZpbmVkIGFuZCAwLlxyXG5cdGxldCB2MSA9ICF2MW4gPyBcIlwiIDogdjFuID4gMCA/IFwiK1wiICsgdmFsMnN0ciggdjFuKSA6IFwiLVwiICsgdmFsMnN0ciggLXYxbik7XHJcblxyXG5cdHJldHVybiBgJHt2MH1uJHt2MX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JUb1N0cmluZyggdmFsOiBDc3NTZWxlY3Rvcik6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG5cdFx0YXJyU2VwOiBcIlwiXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHBhcmFtZXRlcml6ZWQgcHNldWRvIGVudGl0eS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9FbnRpdHlUb1N0cmluZyggZW50aXR5TmFtZTogc3RyaW5nLCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFlbnRpdHlOYW1lKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdGlmIChlbnRpdHlOYW1lLnN0YXJ0c1dpdGgoIFwiOm50aFwiKSlcclxuXHRcdHJldHVybiB2YWwyc3RyKCB2YWwsIHsgZnJvbUFycmF5OiBudGhUdXBsZVRvU3RyaW5nIH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiB2YWwyc3RyKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJU3RyaW5nUHJveHksIElHZW5lcmljUHJveHl9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge0lTdHlsZVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU2VsZWN0b3JQcm94eSBmdW5jdGlvbiByZXR1cm5zIGEgQ1NTIHNlbGVjdG9yIHN0cmluZy4gVGhpcyB0eXBlIGlzIHJldHVybmVkIGZyb20gdGhlXHJcbiAqIFtbc2VsZWN0b3JdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdG9yUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwic2VsZWN0b3JcIj4ge307XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSBzZWxlY3RvciB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBbW3NlbGVjdG9yXV0gZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgU2VsZWN0b3JJdGVtID0gc3RyaW5nIHwgSVN0eWxlUnVsZSB8IElTdHJpbmdQcm94eSB8IElTZWxlY3RvclByb3h5O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzZWxlY3RvciAqL1xyXG5leHBvcnQgdHlwZSBDc3NTZWxlY3RvciA9IFNlbGVjdG9ySXRlbSB8IFNlbGVjdG9ySXRlbVtdO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwcmludC1yZWxhdGVkIHBzZXVkbyBjbGFzc2VzIC0gdGhvc2UgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGggdGhlIEBwYWdlIENTUyBydWxlICovXHJcbmV4cG9ydCB0eXBlIFBhZ2VQc2V1ZG9DbGFzcyA9IFwiOmJsYW5rXCIgfCBcIjpmaXJzdFwiIHwgXCI6bGVmdFwiIHwgXCI6cmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHNldWRvIGNsYXNzZXMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvQ2xhc3MgPSBQYWdlUHNldWRvQ2xhc3MgfFxyXG5cdFwiOmFjdGl2ZVwiIHwgXCI6YW55LWxpbmtcIiB8IFwiOmJsYW5rXCIgfCBcIjpjaGVja2VkXCIgfCBcIjpkZWZhdWx0XCIgfCBcIjpkZWZpbmVkXCIgfCBcIjpkaXNhYmxlZFwiIHxcclxuXHRcIjplbXB0eVwiIHwgXCI6ZW5hYmxlZFwiIHwgXCI6Zmlyc3QtY2hpbGRcIiB8IFwiOmZpcnN0LW9mLXR5cGVcIiB8IFwiOmZ1bGxzY3JlZW5cIiB8IFwiOmZvY3VzXCIgfFxyXG5cdFwiOmZvY3VzLXZpc2libGVcIiB8IFwiOmZvY3VzLVdpdGhpblwiIHwgXCI6aG92ZXJcIiB8IFwiOmluZGV0ZXJtaW5hdGVcIiB8IFwiOmluLXJhbmdlXCIgfCBcIjppbnZhbGlkXCIgfFxyXG5cdFwiOmxhc3QtY2hpbGRcIiB8IFwiOmxhc3Qtb2YtdHlwZVwiIHwgXCI6bGlua1wiIHwgXCI6b25seS1jaGlsZFwiIHwgXCI6b25seS1vZi10eXBlXCIgfCBcIjpvcHRpb25hbFwiIHxcclxuXHRcIjpvdXQtb2YtcmFuZ2VcIiB8IFwiOnBsYWNlaG9sZGVyLXNob3duXCIgfCBcIjpyZWFkLW9ubHlcIiB8IFwiOnJlYWQtd3JpdGVcIiB8IFwiOnJlcXVpcmVkXCIgfCBcIjpyb290XCIgfFxyXG5cdFwiOnNjb3BlXCIgfCBcIjp0YXJnZXRcIiB8IFwiOnZhbGlkXCIgfCBcIjp2aXNpdGVkXCIgfCBcIjpkaXIocnRsKVwiIHwgXCI6ZGlyKGx0cilcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHNldWRvIGVsZW1lbnRzICovXHJcbmV4cG9ydCB0eXBlIFBzZXVkb0VsZW1lbnQgPSBcIjo6YWZ0ZXJcIiB8IFwiOjpiYWNrZHJvcFwiIHwgXCI6OmJlZm9yZVwiIHwgXCI6OmN1ZVwiIHwgXCI6OmZpcnN0TGV0dGVyXCIgfFxyXG5cdFwiOjpmaXJzdExpbmVcIiB8IFwiOjpncmFtbWFyRXJyb3JcIiB8IFwiOjptYXJrZXJcIiB8IFwiOjpwbGFjZWhvbGRlclwiIHwgXCI6OnNlbGVjdGlvblwiIHwgXCI6OnNwZWxsaW5nRXJyb3JcIjtcclxuXHJcblxyXG5cclxuLyoqIENvbWJpbmVzIG5hbWVzIG9mIG5vbi1wYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGFuZCBwc2V1ZG8gZWxlbWVudHMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvRW50aXR5ID0gUHNldWRvQ2xhc3MgfCBQc2V1ZG9FbGVtZW50O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZXhwcmVzc2lvbiBBbitCLCB3aGljaCBpcyB1c2VkIGZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGxpa2UgYG50aC1jaGlsZGAuIEl0XHJcbiAqIGNhbiBiZSBhIHN0cmluZywgYSBzaW5nbGUgbnVtYmVyIG9yIGEgdHVwbGUgd2l0aCBvbmUgb3IgdHdvIG51bWJlcnMuIElmIGl0IGlzIGEgc2luZ2xlIG51bWJlcixcclxuICogdGhlICduJyBpbiBBbitCIHdpbGwgbm90IGJlIHVzZWQgLSBhcyBpbiBgbnRoLWNoaWxkKDIpYC4gSWYgaXQgaXMgYSB0dXBsZSwgdGhlICduJyB3aWxsIGJlIHVzZWRcclxuICogZXZlbiBpZiB0aGUgc2Vjb25kIHR1cGxlJ3MgZWxlbWVudCBpcyBub3QgcHJvdmlkZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOdGhDaGlsZEV4cHJlc3Npb24gPSBcIm9kZFwiIHwgXCJldmVuXCIgfCBudW1iZXIgfCBbbnVtYmVyLCBudW1iZXI/XSB8IHN0cmluZyB8IElTdHJpbmdQcm94eTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzIGludGVyZmFjZSBtYXBzIG5hbWVzIG9mIHBzZXVkbyBjbGFzc2VzIHRoYXQgcmVxdWlyZSBwYXJhbWV0ZXJzXHJcbiAqIHRvIHRoZSB0eXBlIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB0aGVzZSBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzXHJcbntcclxuXHRcIjpoYXNcIjogc3RyaW5nO1xyXG5cdFwiOmhvc3RcIjogc3RyaW5nO1xyXG5cdFwiOmhvc3QtY29udGV4dFwiOiBzdHJpbmc7XHJcblx0XCI6aXNcIjogc3RyaW5nO1xyXG5cdFwiOmxhbmdcIjogc3RyaW5nO1xyXG5cdFwiOm5vdFwiOiBzdHJpbmc7XHJcblx0XCI6bnRoLWNoaWxkXCI6IE50aENoaWxkRXhwcmVzc2lvbjtcclxuXHRcIjpudGgtb2YtdHlwZVwiOiBOdGhDaGlsZEV4cHJlc3Npb247XHJcblx0XCI6bnRoLWxhc3QtY2hpbGRcIjogTnRoQ2hpbGRFeHByZXNzaW9uO1xyXG5cdFwiOm50aC1sYXN0LW9mLXR5cGVcIjogTnRoQ2hpbGRFeHByZXNzaW9uO1xyXG5cdFwiOndoZXJlXCI6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudCBpbnRlcmZhY2UgbWFwcyBuYW1lcyBvZiBwc2V1ZG8gZWxlbWVudHMgdGhhdCByZXF1aXJlIHBhcmFtZXRlcnNcclxuICogdG8gdGhlIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZXNlIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudFxyXG57XHJcblx0XCI6OnBhcnRcIjogc3RyaW5nO1xyXG5cdFwiOjpzbG90dGVkXCI6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5IGludGVyZmFjZSBjb21iaW5lcyBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzIGFuZFxyXG4gKiBJUGFyYW1ldGVyaXplZFBzZXVkb0VsZW1lbnQgaW50ZXJmYWNlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHkgZXh0ZW5kcyBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzLCBJUGFyYW1ldGVyaXplZFBzZXVkb0VsZW1lbnRcclxue1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBFeHRlbmRlZFN0eWxlc2V0LCBBbmltYXRpb25fU2luZ2xlLCBUaW1pbmdGdW5jdGlvbl9TaW5nbGUsIEJhY2tncm91bmRfU2luZ2xlLCBCYWNrZ3JvdW5kU2l6ZV9TaW5nbGUsXHJcbiAgICBCb3JkZXJJbWFnZV9PYmplY3QsIEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlLCBCb3hTaGFkb3dfU2luZ2xlLCBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlLFxyXG4gICAgQm9yZGVyX1N0eWxlVHlwZSwgQ29sdW1uc19TdHlsZVR5cGUsIEN1cnNvcl9TdHlsZVR5cGUsIEZsZXhfU3R5bGVUeXBlLCBGb250X1N0eWxlVHlwZSxcclxuICAgIEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZSwgR3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGUsIE1hcmtlcl9TdHlsZVR5cGUsIFJvdGF0ZV9TdHlsZVR5cGUsXHJcbiAgICBUZXh0RGVjb3JhdGlvbl9TdHlsZVR5cGUsIFRyYW5zaXRpb25fU2luZ2xlLCBPZmZzZXRfU3R5bGVUeXBlLCBTdHlsZXNldCwgQ3VzdG9tVmFyX1N0eWxlVHlwZSxcclxuICAgIFZhclRlbXBsYXRlTmFtZSwgU3VwcG9ydHNRdWVyeSwgU2luZ2xlU3VwcG9ydHNRdWVyeSwgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uLCBHcmlkVHJhY2tcclxufSBmcm9tIFwiLi9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtFeHRlbmRlZCwgQ3NzUmFkaXVzLCBPbmVPck1hbnksIENzc011bHRpTGVuZ3RoLCBDc3NNdWx0aVRpbWV9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FtZWxUb0Rhc2gsIGRhc2hUb0NhbWVsLCB2YWwyc3RyLCBhcnIyc3RyLCBJVmFsdWVDb252ZXJ0T3B0aW9ucyxcclxuICAgIHBvczJzdHIsIG11bHRpUG9zMnN0ciwgQ3NzTGVuZ3RoTWF0aCwgQ3NzVGltZU1hdGgsIENzc051bWJlck1hdGgsXHJcbiAgICBDc3NBbmdsZU1hdGgsIENzc0ZyZXF1ZW5jeU1hdGgsIENzc1BlcmNlbnRNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCwgdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxufSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiO1xyXG5pbXBvcnQge0lJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBDU1MgcHJvcGVydHkgdHlwZXMgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCggdmFsOiBBbmltYXRpb25fU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY291bnRcIiwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICBcIm5hbWVcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxBbmltYXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8T25lT3JNYW55PFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT4+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdGltaW5nRnVuY3Rpb25fZnJvbUFycmF5XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYHN0ZXBzKCR7dmFsfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheSggdmFsOiBhbnlbXSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbFswXSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWwgYXMgVGltaW5nRnVuY3Rpb25fU2luZ2xlKVxyXG4gICAgICAgIDogYXJyMnN0ciggdmFsLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUsIFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgc3RlcHMgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPD0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby4gWW91IGhhdmU6ICR7dlswXX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlciggdlswXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgYW4gSW50ZWdlci4gWW91IGhhdmU6ICR7dlswXX1gKTtcclxuICAgICAgICAgICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHN0ZXBzKCR7dlswXX0ke3YubGVuZ3RoID09PSAyID8gXCIsXCIgKyB2WzFdIDogXCJcIn0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYmV6aWVyIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2WzBdIDwgMCB8fCB2WzBdID4gMSB8fCB2WzJdIDwgMCB8fCB2WzJdID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEZpcnN0IGFuZCB0aGlyZCBwYXJhbWV0ZXJzIG9mIGN1YmljLWJlemllciBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuIFlvdSBoYXZlICR7dlswXX0gYW5kICR7dlsyXX1gKTtcclxuICAgICAgICAgICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGN1YmljLWJlemllcigke3ZbMF19LCR7dlsxXX0sJHt2WzJdfSwke3ZbM119KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QoIHZhbDogQmFja2dyb3VuZF9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddLFxyXG4gICAgICAgIFwiaW1hZ2VcIixcclxuICAgICAgICBbXCJwb3NpdGlvblwiLCBwb3Myc3RyXSxcclxuICAgICAgICBbXCJzaXplXCIsIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiLFxyXG4gICAgICAgIFwiYXR0YWNobWVudFwiLFxyXG4gICAgICAgIFwib3JpZ2luXCIsXHJcbiAgICAgICAgXCJjbGlwXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPEJhY2tncm91bmRfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRTaXplX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxCYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VUb1N0cmluZyggdmFsOiBCb3JkZXJJbWFnZV9PYmplY3QpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgd2lkdGggaXMgc3BlY2lmaWVkLCBidXQgc2xpY2UgaXMgbm90LCB3ZSBuZWVkIHRvIHNldCBzbGljZSB0byB0aGUgZGVmYXVsdCAxMDAlIHZhbHVlO1xyXG4gICAgLy8gaWYgb3V0c2V0IGlzIHNwZWNpZmllZCBidXQgd2lkdGggaXMgbm90LiB3ZSBuZWVkIHRvIHNldCB3aWR0aCB0byB0aGUgZGVmYXVsdCAxIHZhbHVlO1xyXG4gICAgbGV0IHZhbENvcHk6IEJvcmRlckltYWdlX09iamVjdCA9IE9iamVjdC5hc3NpZ24oIHt9LCB2YWwpO1xyXG4gICAgaWYgKHZhbC5zbGljZSA9PSBudWxsICYmICh2YWwud2lkdGggIT0gbnVsbCB8fCB2YWwub3V0c2V0ICE9IG51bGwpKVxyXG4gICAgICAgIHZhbENvcHkuc2xpY2UgPSBcIjEwMCVcIjtcclxuICAgIGlmICh2YWwud2lkdGggPT0gbnVsbCAmJiB2YWwub3V0c2V0ICE9IG51bGwpXHJcbiAgICAgICAgdmFsQ29weS53aWR0aCA9IDE7XHJcblxyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbENvcHksIFtcclxuICAgICAgICBcInNvdXJjZVwiLFxyXG4gICAgICAgIFtcInNsaWNlXCIsIFwiYm9yZGVySW1hZ2VTbGljZVwiXSxcclxuICAgICAgICBbXCJ3aWR0aFwiLCBudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgW1wib3V0c2V0XCIsbnVsbCwgXCIvXCJdLFxyXG4gICAgICAgIFwicmVwZWF0XCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgaW1hZ2Ugc2xpY2Ugc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJJbWFnZVNsaWNlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiB2ID0+IHZhbDJzdHIoIHYsIHtcclxuICAgICAgICAgICAgZnJvbUJvb2w6ICgpID0+IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHZhbDogQm94U2hhZG93X1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiaW5zZXRcIiwgdiA9PiB2ID8gXCJpbnNldFwiIDogXCJcIl0sXHJcbiAgICAgICAgW1wieFwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInlcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJibHVyXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wic3ByZWFkXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb3JuZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmFkaXVzPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlclJhZGl1c1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2WzBdKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBhcnIyc3RyKCB2WzBdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCIgLyBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgYXJyMnN0ciggdlsxXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2LCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxCb3JkZXJfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHZbMF0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMF0pKVxyXG5cclxuICAgICAgICAgICAgaWYgKHZbMV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWwyc3RyKHZbMV0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2WzJdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggY29sb3JUb1N0cmluZyh2WzJdKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnVmLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbnMgc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5zVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q29sdW1uc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gdlswXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzFdKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGN1cnNvciBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGN1cnNvclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEN1cnNvcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuIElmIGl0IGlzIGFuIGFycmF5LFxyXG4gICAgLy8gaWYgdGhlIGZpcnN0IGVsZW1lbnQgaXMgYSBmdW5jdGlvbiwgdGhlbiB3ZSBuZWVkIHRvIHVzZSBzcGFjZSBhcyBhIHNlcGFyYXRvciAoYmVjYXVzZVxyXG4gICAgLy8gdGhpcyBpcyBhIFVSTCB3aXRoIG9wdGlvbmFsIG51bWJlcnMgZm9yIHRoZSBob3Qgc3BvdCk7IG90aGVyd2lzZSwgd2UgdXNlIGNvbW1hIGFzIGFcclxuICAgIC8vIHNlcGFyYXRvciAtIGJlY2F1c2UgdGhlc2UgYXJlIG11bHRpcGxlIGN1cnNvciBkZWZpbml0aW9ucy5cclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodi5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsMnN0cih2KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMV0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsMnN0ciggdiwgeyBhcnJTZXA6IFwiIFwifSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsMnN0ciggdiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyckl0ZW1GdW5jOiBjdXJzb3JUb1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGZsZXggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBmbGV4VG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8RmxleF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LmpvaW4oIFwiIFwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbMF0gKyBcIiBcIiArIHZbMV0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsyXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRfZnJvbU9iamVjdCggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcInN0eWxlXCIsIGZvbnRTdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcInZhcmlhbnRcIixcclxuICAgICAgICBcIndlaWdodFwiLFxyXG4gICAgICAgIFwic3RyZXRjaFwiLFxyXG4gICAgICAgIFtcInNpemVcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJsaW5lSGVpZ2h0XCIsIG51bGwsIFwiL1wiXSxcclxuICAgICAgICBcImZhbWlseVwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxGb250X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gXCJvYmxpcXVlIFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIHYpXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmlkVGVtcGxhdGVBcmVhc1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgLy8gdmFsIGNhbiBiZSBhcnJheSBvZiBmdW5jdGlvbnMgKElRdW90ZWRQcm94eVtdKSBvciBhcnJheXMgKEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbltdKVxyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdlswXSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHYpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlR3JpZFRlbXBsYXRlQXJlYXNGcm9tRGVmaW5pdGlvbnModik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBhcnJheSBvZiBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb24gb2JqZWN0cyB0byBhIHN0cmluZyB0aGF0IGlzIHN1aXRhYmxlIGZvclxyXG4gKiB0aGUgZ3JpZC10ZW1wbGF0ZS1hcmVhcyBmb3JtYXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVHcmlkVGVtcGxhdGVBcmVhc0Zyb21EZWZpbml0aW9ucyggZGVmczogR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uW10pOiBzdHJpbmdcclxue1xyXG4gICAgLy8gY2FsY3VsYXRlIHRvdGFsIHNpemUgb2YgdGhlIG1hdHJpeCBmcm9tIHRoZSBhcmVhcycgc2l6ZXNcclxuICAgIGxldCByb3dDb3VudCA9IDAsIGNvbENvdW50ID0gMDtcclxuICAgIGZvciggbGV0IGRlZiBvZiBkZWZzKVxyXG4gICAge1xyXG4gICAgICAgIHJvd0NvdW50ID0gTWF0aC5tYXgoIHJvd0NvdW50LCBkZWZbM10pO1xyXG4gICAgICAgIGNvbENvdW50ID0gTWF0aC5tYXgoIGNvbENvdW50LCBkZWZbNF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3dDb3VudCA9PT0gMCB8fCBjb2xDb3VudCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyBjcmVhdGUgYXJyYXkgb2Ygcm93cyB3aGVyZSBldmVyeSBlbGVtZW50IGlzIGFuIGFycmF5IG9mIGNlbGxzXHJcbiAgICBsZXQgbWF0cml4ID0gbmV3IEFycmF5PHN0cmluZ1tdPihyb3dDb3VudCk7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcbiAgICAgICAgbWF0cml4W2ldID0gbmV3IEFycmF5PHN0cmluZz4oY29sQ291bnQpO1xyXG5cclxuICAgIC8vIGdvIG92ZXIgZGVmaW5pdGlvbnMgYW5kIGZpbGwgdGhlIGFwcHJvcHJpYXRlIHBsYWNlcyBpbiB0aGUgY2VsbHMgd2l0aCBhcmVhIG5hbWVzXHJcbiAgICBmb3IoIGxldCBkZWYgb2YgZGVmcylcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHZhbDJzdHIoIGRlZlswXSk7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IGRlZlsxXTsgaSA8PSBkZWZbM107IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciggbGV0IGogPSBkZWZbMl07IGogPD0gZGVmWzRdOyBqKyspXHJcbiAgICAgICAgICAgICAgICBtYXRyaXhbaS0xXVtqLTFdID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ28gb3ZlciBvdXIgbWF0cml4IGFuZCBmb3IgZXZlcnkgcm93IGNyZWF0ZSBhIHF1b3RlZCBzdHJpbmcuIFNpbmNlIG91ciBjZWxsIGFycmF5cyBtYXkgYmVcclxuICAgIC8vIHNwYXJzZSwgdXNlIGRvdCBmb3IgdGhlIHVuZGVmaW5lZCBjZWxsc1xyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3dOYW1lczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IoIGxldCBqID0gMDsgaiA8IHJvd0NvdW50OyBqKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IG1hdHJpeFtpXVtqXTtcclxuICAgICAgICAgICAgcm93TmFtZXMucHVzaCggbmFtZSA/IG5hbWUgOiBcIi5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHMgKz0gYFwiJHtyb3dOYW1lcy5qb2luKFwiIFwiKX1cIlxcbmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWRUcmFja1RvU3RyaW5nKCB2YWw6IEdyaWRUcmFjayk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHYpLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgWyR7YXJyMnN0cih2KX1dYFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JpZEF4aXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2KSxcclxuICAgICAgICBhcnJJdGVtRnVuYzogZ3JpZFRyYWNrVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1hcmtlclN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TWFya2VyX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHYgPT4gYHVybCgjJHsodmFsIGFzIElJRFJ1bGUpLm5hbWV9KWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZVRvU3RyaW5nKCB2YWw6Um90YXRlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZbMF19ICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodlsxXSl9YDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZbMF19ICR7dlsxXX0gJHt2WzJdfSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHZbM10pfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25fU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgXCJsaW5lXCIsXHJcbiAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInRoaWNrbmVzc1wiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEV4dGVuZGVkPFRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wicHJvcGVydHlcIiwgY2FtZWxUb0Rhc2hdLFxyXG4gICAgICAgIFtcImR1cmF0aW9uXCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImZ1bmNcIiwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlXSxcclxuICAgICAgICBbXCJkZWxheVwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8VHJhbnNpdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9mZnNldFRvU3RyaW5nKCB2YWw6IE9mZnNldF9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIFwib2Zmc2V0UG9zaXRpb25cIl0sXHJcbiAgICAgICAgW1wicGF0aFwiLCBcIm9mZnNldFBhdGhcIl0sXHJcbiAgICAgICAgW1wiZGlzdGFuY2VcIiwgXCJvZmZzZXREaXN0YW5jZVwiXSxcclxuICAgICAgICBbXCJyb3RhdGVcIiwgXCJvZmZzZXRSb3RhdGVcIl0sXHJcbiAgICAgICAgW1wiYW5jaG9yXCIsIFwib2Zmc2V0QW5jaG9yXCIsIFwiL1wiXSxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgY29udmVydHMgaXQgdG8gc3RyaW5nICovXHJcbmV4cG9ydCB0eXBlIFRvU3RyaW5nRnVuYyA9ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBhIENTUyBzdHJpbmcgdXNpbmcgdGhlIGluZm8gcGFyYW1ldGVyIHRvIGluZm9ybSBob3cgdGhlIG9iamVjdCdzXHJcbiAqIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLiBUaGUgaW5mbyBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgZWl0aGVyIHN0cmluZ3NcclxuICogb3IgdHdvLSBvciB0aHJlLWVsZW1lbnQgdHVwbGVzLiBUaGUgb25seSBzdHJpbmcgYW5kIHRoZSBmaXJzdCB0dXBsZSBlbGVtZW50IGNvcnJlc3BvbmRzIHRvIGFcclxuICogcHJvcGVydHkgZXhwZWN0ZWQgaW4gdGhlIHZhbHVlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWQuIEVhY2ggcHJvcGVydHkgaXMgY29udmVydGVkIGFjY29yZGluZ1xyXG4gKiB0byB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIElmIHRoZSBhcnJheSBpdGVtIGlzIGp1c3QgYSBzdHJpbmcsIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nXHJcbiAqICAgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIG51bGwgb3IgdW5kZWZpbmVkLCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZ1xyXG4gKiAgIHRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uLi5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgYSBzdHJpbmcgaXQgaXMgdHJlYXRlZCBhcyBhIG5hbWUgb2YgYSBsb25naGFuZCBzdHlsZSBwcm9wZXJ0eS4gVGhlXHJcbiAqICAgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmcgdGhlIHN0eWxlUHJvcFRvU3RyaW5nIGZ1bmN0aW9uIGZvciB0aGlzIGxvbmdoYW5kIHN0eWxlXHJcbiAqICAgcHJvcGVydHkuXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIGl0IGlzIHVzZWQgdG8gY29udmVydCB0aGUgdmFsdWUncyBwcm9wZXJ0eS5cclxuICogLSBJZiBhIHRoaXJkIGVsZW1lbnQgZXhpc3RzIGluIHRoZSB0dXBsZSBpdCBpcyB0cmVhdGVkIGFzIGEgcHJlZml4IHRvIGJlIHBsYWNlZCBiZWZvcmUgdGhlXHJcbiAqICAgY29udmVydGVkIHByb3BlcnR5IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIG9yZGVyIG9mIHRoZSBuYW1lcyBkZXRlcm1pbmVzIGluIHdoaWNoIG9yZGVyIHRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iajJzdHIoIHZhbDogYW55LFxyXG4gICAgaW5mbzogKHN0cmluZyB8IFtzdHJpbmcsIG51bGwgfCBzdHJpbmcgfCBUb1N0cmluZ0Z1bmMsIHN0cmluZz9dIClbXSxcclxuICAgIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgbGV0IGJ1ZjogKHN0cmluZylbXSA9IFtdO1xyXG4gICAgaW5mby5mb3JFYWNoKCBuYW1lT3JUdXBsZSA9PlxyXG4gICAge1xyXG4gICAgICAgIC8vIGdldCB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgaW4gdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWU7XHJcbiAgICAgICAgLy8gaWYgdGhlIHByb3BlcnRpZXMgdmFsdWUgaXMgbm90IGRlZmluZWQsIHNraXAgaXQuXHJcbiAgICAgICAgbGV0IHByb3BOYW1lID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gbmFtZU9yVHVwbGUgOiBuYW1lT3JUdXBsZVswXTtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHdlIGhhdmUgYSBwcmVmaXhcclxuICAgICAgICBsZXQgcHJlZml4ID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogbmFtZU9yVHVwbGVbMl07XHJcbiAgICAgICAgaWYgKHByZWZpeClcclxuICAgICAgICAgICAgYnVmLnB1c2goIHByZWZpeCk7XHJcblxyXG4gICAgICAgIGxldCBjb252ZXJ0b3IgPSB0eXBlb2YgbmFtZU9yVHVwbGUgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBuYW1lT3JUdXBsZVsxXTtcclxuICAgICAgICBpZiAoIWNvbnZlcnRvcilcclxuICAgICAgICAgICAgYnVmLnB1c2goIHZhbDJzdHIoIHByb3BWYWwpKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29udmVydG9yID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICBidWYucHVzaCggc3R5bGVQcm9wVG9TdHJpbmcoIGNvbnZlcnRvciwgcHJvcFZhbCwgdHJ1ZSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgYnVmLnB1c2goIGNvbnZlcnRvciggcHJvcFZhbCkpO1xyXG4gICAgfSk7XHJcblxyXG5cdHJldHVybiBidWYuam9pbihzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgZm9yIGhhbmRsaW5nIFN0eWxlc2V0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogTWVyZ2VzIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIHN0eWxlc2V0IHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQuIEFsbCByZWd1bGFyIHByb3BlcnRpZXMgYXJlXHJcbiAqIHJlcGxhY2VkLiBUaGUgXCItLVwiIHByb3BlcnR5IGdldHMgc3BlY2lhbCB0cmVhdG1lbnQgYmVjYXVzZSBpdCBpcyBhbiBhcnJheS5cclxuICogQHBhcmFtIHRhcmdldCBcclxuICogQHBhcmFtIHNvdXJjZSBcclxuICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQgaWYgbm90IG51bGwgb3IgYSBuZXcgc3R5bGVzZXQgb3RoZXJ3aXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzZXRzKCB0YXJnZXQ6IFN0eWxlc2V0IHwgdW5kZWZpbmVkIHwgbnVsbCxcclxuICAgIHNvdXJjZTogU3R5bGVzZXQpOiBTdHlsZXNldFxyXG57XHJcbiAgICBpZiAoIXNvdXJjZSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0ID8gdGFyZ2V0IDoge307XHJcblxyXG4gICAgLy8gaWYgdGFyZ2V0IGlzIG5vdCBkZWZpbmVkLCBjcmVhdGUgaXQgYXMgYW4gZW1wdHkgb2JqZWN0LiBUaGlzIG9iamVjdCB3aWxsIGJlIHJldHVybmVkIGFmdGVyXHJcbiAgICAvLyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBhcmUgY29waWVkIHRvIGl0LlxyXG4gICAgaWYgKCF0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbiggdGFyZ2V0LCBzb3VyY2UpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgd2hldGhlciBjdXN0b20gcHJvcGVydGllcyBhcmUgZGVmaW5lZC4gSWYgbm90LCB3ZSBjYW4ganVzdCB1c2UgdGhlIE9iamVjdC5hc3NpZ24gZnVuY3Rpb24uXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbiggdGFyZ2V0LCBzb3VyY2UpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWVyZ2UgY3VzdG9tIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllc1xyXG4gICAgbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0YXJnZXQsIHNvdXJjZSk7XHJcblxyXG4gICAgLy8gY29weSBhbGwgb3RoZXIgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2VcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzb3VyY2UpXHJcblx0e1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCIhXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogTWVyZ2VzIFwiLS1cIiBwcm9wZXJ0eSBmcm9tIHRoZSBzb3VyY2Ugc3R5bGVzZXQgdG8gdGhlIHRhcmdldCBzdHlsZXNldC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRhcmdldDogU3R5bGVzZXQsXHJcbiAgICBzb3VyY2U6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllcyBhcmUgZGVmaW5lZFxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gcHJvcGVydGllc1xyXG4gICAgaWYgKHNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXRDdXN0b21Qcm9wcyA9IHRhcmdldFtcIi0tXCJdO1xyXG4gICAgICAgIHRhcmdldFtcIi0tXCJdID0gIXRhcmdldEN1c3RvbVByb3BzID8gc291cmNlQ3VzdG9tUHJvcHMuc2xpY2UoKSA6IHRhcmdldEN1c3RvbVByb3BzLmNvbmNhdCggc291cmNlQ3VzdG9tUHJvcHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGVzZXQgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZyggc3R5bGVzZXQ6IFN0eWxlc2V0KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghc3R5bGVzZXQpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG5cclxuXHRmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQsIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGlzQ3VzdG9tOiBib29sZWFuKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tKVxyXG4gICAgICAgICAgICBzICs9IGAke25hbWV9OiR7dmFsdWV9O2A7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzICs9IGAke2NhbWVsVG9EYXNoKG5hbWUpfToke3ZhbHVlfTtgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3RzIG5hbWUgYW5kIHN0cmluZyB2YWx1ZXMgZnJvbSB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBAcGFyYW0gY3VzdG9tVmFsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1c3RvbVByb3BOYW1lQW5kVmFsdWUoIGN1c3RvbVZhbDogQ3VzdG9tVmFyX1N0eWxlVHlwZSk6IFtzdHJpbmc/LHN0cmluZz9dXHJcbntcclxuICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICBsZXQgdmFyTmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBsZXQgdmFsdWU6IGFueTtcclxuICAgIGlmIChjdXN0b21WYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSAoY3VzdG9tVmFsWzBdIGFzIFZhclJ1bGUpLmNzc05hbWU7XHJcbiAgICAgICAgdGVtcGxhdGUgPSBjdXN0b21WYWxbMF0udGVtcGxhdGU7XHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMV1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gY3VzdG9tVmFsWzBdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2UgaWYgKCF2YXJOYW1lLnN0YXJ0c1dpdGgoXCItLVwiKSlcclxuICAgICAgICAgICAgdmFyTmFtZSA9IFwiLS1cIiArIHZhck5hbWU7XHJcblxyXG4gICAgICAgIHRlbXBsYXRlID0gY3VzdG9tVmFsWzFdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSB8fCAhdGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFt2YXJOYW1lLCBzdHlsZVByb3BUb1N0cmluZyggdGVtcGxhdGUsIHZhbHVlLCB0cnVlKV07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZy4gUHJvcGVydHkgbmFtZSBjYW4gYmUgaW4gZWl0aGVyXHJcbiAqIGRhc2ggb3IgY2FtZWwgZm9ybS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBwcm9wZXJ0eVxyXG4gICAgbGV0IGluZm86IGFueSA9IFN0eWxlUHJvcGVydHlJbmZvc1tkYXNoVG9DYW1lbChwcm9wTmFtZSldO1xyXG5cclxuICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgXCIhXCIgcHJvcGVydHksIHRoZW4gdGhlIGFjdHVhbCB2YWx1ZSBpcyB0aGVcclxuICAgIC8vIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgYW5kIHdlIGFsc28gbmVlZCB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWdcclxuICAgIGxldCB2YXJWYWx1ZSA9IHByb3BWYWw7XHJcbiAgICBsZXQgaW1wRmxhZyA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcIm9iamVjdFwiICYmIFwiIVwiIGluIHByb3BWYWwpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyVmFsdWUgPSBwcm9wVmFsW1wiIVwiXTtcclxuICAgICAgICBpbXBGbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyaW5nVmFsdWUgPSAhaW5mb1xyXG4gICAgICAgID8gdmFsMnN0ciggdmFyVmFsdWUpXHJcbiAgICAgICAgOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICA/IHZhbDJzdHIoIHZhclZhbHVlLCBpbmZvIGFzIElWYWx1ZUNvbnZlcnRPcHRpb25zKVxyXG4gICAgICAgICAgICA6IHR5cGVvZiBpbmZvID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICA/IHZhbHVlVG9TdHJpbmdCeVdlbGxLbm93bkZ1bmMoIHZhclZhbHVlLCBpbmZvKVxyXG4gICAgICAgICAgICAgICAgOiAoaW5mbyBhcyBUb1N0cmluZ0Z1bmMpKCB2YXJWYWx1ZSk7XHJcblxyXG4gICAgaWYgKCFzdHJpbmdWYWx1ZSAmJiAhdmFsdWVPbmx5KVxyXG4gICAgICAgIHN0cmluZ1ZhbHVlID0gXCJpbml0aWFsXCI7XHJcblxyXG4gICAgaWYgKGltcEZsYWcpXHJcbiAgICAgICAgc3RyaW5nVmFsdWUgKz0gXCIgIWltcG9ydGFudFwiO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzdHJpbmdWYWx1ZSA6IGAke2NhbWVsVG9EYXNoKCBwcm9wTmFtZSl9OiR7c3RyaW5nVmFsdWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRm9yIGVhY2ggcHJvcGVydHkgLSByZWd1bGFyIGFuZCBjdXN0b20gLSBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgaW52b2tlcyB0aGUgYXBwcm9wcmlhdGVcclxuICogZnVuY3Rpb24gdGhhdCBnZXRzIHRoZSBwcm9wZXJ0eSBuYW1lIGFuZCB0aGUgdmFsdWUgY29udmVydGVkIHRvIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlc2V0IFxyXG4gKiBAcGFyYW0gZm9yUHJvcCBcclxuICogQHBhcmFtIGZvckN1c3RvbVByb3AgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0OiBTdHlsZXNldCxcclxuICAgIGZvclByb3A6IChuYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nLCBpc0N1c3RvbTogYm9vbGVhbikgPT4gdm9pZClcclxue1xyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIi0tXCIgcHJvcGVydHksIHdoaWNoIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggaXRlbSBpc1xyXG5cdFx0XHQvLyBhIHR3by1pdGVtIG9yIHRocmVlLWl0ZW0gYXJyYXlcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzdHlsZXNldFtwcm9wTmFtZV0gYXMgQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG5cdFx0XHRmb3IoIGxldCBjdXN0b21WYWwgb2YgcHJvcFZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VzdG9tVmFsKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBbdmFyTmFtZSwgdmFyVmFsdWVdID0gZ2V0Q3VzdG9tUHJvcE5hbWVBbmRWYWx1ZSggY3VzdG9tVmFsKTtcclxuXHRcdFx0XHRpZiAoIXZhck5hbWUpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRpZiAodmFyVmFsdWUgPT0gbnVsbClcclxuXHRcdFx0XHRcdHZhclZhbHVlID0gXCJcIjtcclxuXHJcblx0XHRcdFx0Zm9yUHJvcCggdmFyTmFtZSwgdmFyVmFsdWUsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBmb3JQcm9wKCBwcm9wTmFtZSwgc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lLCBzdHlsZXNldFtwcm9wTmFtZV0sIHRydWUpLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gbXVsdGktbGVuZ3RoIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVcclxuLy8gaXRlbXMgd2lsbCBiZSBzZXBhcmF0ZWQgYnkgc3BhY2UuXHJcbmZ1bmN0aW9uIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBcIiBcIik7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gbXVsdGktdGltZSB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlXHJcbi8vIGl0ZW1zIHdpbGwgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG5mdW5jdGlvbiBtdWx0aVRpbWVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVRpbWU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBDc3NUaW1lTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgXCIsXCIpO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGUgaXRlbXMgd2lsbCBiZVxyXG4vLyBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbmZ1bmN0aW9uIGFycmF5VG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogYW55KVxyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7IGFyclNlcDogXCIsXCIgfSk7XHJcbn07XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGUgaXRlbXMgd2lsbCBiZVxyXG4vLyBzZXBhcmF0ZWQgYnkgc2xhc2guXHJcbmZ1bmN0aW9uIGFycmF5VG9TdHJpbmdXaXRoU2xhc2goIHZhbDogYW55KVxyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7IGFyclNlcDogXCIvXCIgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBOdW1lcmljIGlkZW50aWZpZXJzIGNvcnJlc3BvbmRpbmcgdG8gd2VsbCBrbm93biBmdW5jdGlvbnMgdXNlZCB0byBjb252ZXJ0IHN0eWxlIHByb3BlcnR5IHZhbHVlc1xyXG4gKiB0byBzdHJpbmdzLiBUaGlzIGlzIHVzZWQgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBvYmplY3QgdXNlZCBmb3IgbWFwcGluZyBzdHlsZSBwcm9wZXJ0aWVzIHRvXHJcbiAqIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxyXG4gKiBcclxuICogTm90ZSEhITogdGhlIHZhbHVlcyBpbiB0aGUgZW51bWVyYXRpb24gY2Fubm90IGJlIGNoYW5nZWQgLSBvdGhlcndpc2UsIGl0IHdpbGwgbm90IGJlIGJhY2t3YXJkc1xyXG4gKiBjb21wYXRpYmxlLiBBbGwgbmV3IHZhbHVlcyBtdXN0IGJlIGFwcGVuZGVkIGF0IHRoZSBlbmQuXHJcbiAqL1xyXG5jb25zdCBlbnVtIFdlbGxLbm93bkZ1bmNcclxue1xyXG4gICAgTGVuZ3RoID0gMSxcclxuICAgIENvbG9yLFxyXG4gICAgQm9yZGVyLFxyXG4gICAgUG9zaXRpb24sXHJcbiAgICBDb3JuZXJSYWRpdXMsXHJcbiAgICBNdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIE11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIEFycmF5V2l0aENvbW1hLFxyXG4gICAgQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBHcmlkQXhpcyxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZyB1c2luZyBhIHdlbGwta25vd24gZnVuY3Rpb24gaW5kaWNhdGVkIGJ5IHRoZSBnaXZlblxyXG4gKiBlbnVtZXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIHZhbCBcclxuICogQHBhcmFtIGZ1bmNUeXBlIFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsdWVUb1N0cmluZ0J5V2VsbEtub3duRnVuYyggdmFsOiBhbnksIGZ1bmNUeXBlOiBXZWxsS25vd25GdW5jKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBmdW5jID1cclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5MZW5ndGggPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkNvbG9yID8gY29sb3JUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQm9yZGVyID8gYm9yZGVyVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLlBvc2l0aW9uID8gcG9zMnN0ciA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzID8gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlID8gbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hID8gbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hID8gYXJyYXlUb1N0cmluZ1dpdGhDb21tYSA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2ggPyBhcnJheVRvU3RyaW5nV2l0aFNsYXNoIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5HcmlkQXhpcyA/IGdyaWRBeGlzVG9TdHJpbmcgOlxyXG4gICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmMgPyBmdW5jKHZhbCkgOiBcIlwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZWdpc3RyeSBvZiBDU1MgcHJvcGVydGllcyB0aGF0IHNwZWNpZmllcyBob3cgdGhlaXIgdmFsdWVzIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBWYXJUZW1wbGF0ZU5hbWVdPzogKFdlbGxLbm93bkZ1bmMgfCBUb1N0cmluZ0Z1bmMgfCBJVmFsdWVDb252ZXJ0T3B0aW9ucykgfSA9XHJcbntcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0LFxyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZUFuaW1hdGlvbl9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICBhbmltYXRpb25EZWxheTogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kQ2xpcDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJhY2tncm91bmRPcmlnaW46IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHYgPT4gbXVsdGlQb3Myc3RyKCB2LCBcIixcIiksXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHNpbmdsZUJhY2tncm91bmRTaXplX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9LFxyXG4gICAgYmFzZWxpbmVTaGlmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXI6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQmxvY2tFbmRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckJsb2NrRW5kV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyQm90dG9tOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJCb3R0b21XaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJDb2xvcjoge1xyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZToge1xyXG4gICAgICAgIGZyb21PYmo6IGJvcmRlckltYWdlVG9TdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2VTbGljZTogYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlcklubGluZVN0YXJ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyTGVmdDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJMZWZ0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlclNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBib3JkZXJUb3A6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyVG9wQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlclRvcFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlcldpZHRoOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgYm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJveFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmV0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBjbGlwOiAge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgcmVjdCgke211bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2Uodil9YFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY29sdW1uR2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGNvbHVtblJ1bGU6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgY29sdW1uUnVsZUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgY29sdW1uczogY29sdW1uc1RvU3RyaW5nLFxyXG4gICAgY29sdW1uV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgY3Vyc29yOiBjdXJzb3JUb1N0cmluZyxcclxuXHJcbiAgICBmaWxsOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgZmlsbE9wYWNpdHk6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBmbGV4OiBmbGV4VG9TdHJpbmcsXHJcbiAgICBmbGV4QmFzaXM6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZmxvb2RDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGZvbnQ6IHtcclxuICAgICAgICBmcm9tT2JqOiBmb250X2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBmb250U3R5bGU6IGZvbnRTdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGdhcDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGdyaWRDb2x1bW5HYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZ3JpZEdhcDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGdyaWRSb3dHYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZ3JpZEFyZWE6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBncmlkQXV0b0NvbHVtbnM6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcbiAgICBncmlkQXV0b1Jvd3M6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcbiAgICBncmlkQ29sdW1uOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoLFxyXG4gICAgZ3JpZFJvdzogV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCxcclxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiBncmlkVGVtcGxhdGVBcmVhc1RvU3RyaW5nLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuICAgIGdyaWRUZW1wbGF0ZVJvd3M6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcblxyXG4gICAgaGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBpbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBsZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGxldHRlclNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbGlnaHRpbmdDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuXHJcbiAgICBtYXJnaW46IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBtYXJnaW5CbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbkJvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5JbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5SaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5Ub3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFya2VyRW5kOiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFya2VyTWlkOiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFya2VyU3RhcnQ6IG1hcmtlclN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhCbG9ja1NpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4SGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1heElubGluZVNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWluQmxvY2tTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1pbkhlaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtaW5JbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHRtaW5XaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgb2JqZWN0UG9zaXRpb246IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXQ6IG9mZnNldFRvU3RyaW5nLFxyXG4gICAgb2Zmc2V0QW5jaG9yOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgb2Zmc2V0RGlzdGFuY2U6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgb2Zmc2V0UG9zaXRpb246IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXRSb3RhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgb3V0bGluZUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgb3V0bGluZU9mZnNldDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgcGFkZGluZzogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHBhZGRpbmdCbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdMZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdSaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBlcnNwZWN0aXZlOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHF1b3Rlczoge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiB2ID0+IGBcIiR7dn1cImBcclxuICAgIH0sXHJcblxyXG4gICAgcmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcm90YXRlOiByb3RhdGVUb1N0cmluZyxcclxuICAgIHJvd0dhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgc2Nyb2xsYmFyQ29sb3I6IHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogY29sb3JUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHNjcm9sbE1hcmdpbjogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5Cb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbkxlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmc6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0JvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0xlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ1JpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2hhcGVNYXJnaW46IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc3RvcENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgc3Ryb2tlOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG5cclxuICAgIHRhYlNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0OiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgZGlnaXRzICR7dn1gXHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb246IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmo6IHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgdGV4dEVtcGhhc2lzOiB7XHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRleHRFbXBoYXNpc0NvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgdGV4dEluZGVudDoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRleHRTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIHRleHRTaXplQWRqdXN0OiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uRGVsYXk6IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICB3aWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB3aWxsQ2hhbmdlOiB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogY2FtZWxUb0Rhc2hcclxuICAgIH0sXHJcbiAgICB3b3JkU3BhY2luZzogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgem9vbTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICAvLyBzcGVjaWFsIHByb3BlcnRpZXMgZm9yIElWYXJSdWxlIHR5cGVzXHJcbiAgICBcIkNzc0xlbmd0aFwiOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIFwiQ3NzQW5nbGVcIjogQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1RpbWVcIjogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUmVzb2x1dGlvblwiOiBDc3NSZXNvbHV0aW9uTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NGcmVxdWVuY3lcIjogQ3NzRnJlcXVlbmN5TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQZXJjZW50XCI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Bvc2l0aW9uXCI6IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBcIkNzc0NvbG9yXCI6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc3VwcG9ydHMgcXVlcnkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCBxdWVyeSwge1xyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiIG9yIFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN1cHBvcnRzIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnk6IFNpbmdsZVN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHF1ZXJ5LCB7XHJcbiAgICAgICAgZnJvbU9iajogKHY6IEV4dGVuZGVkU3R5bGVzZXQgJiB7ICRuZWdhdGU/OiBib29sZWFuOyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggdikuZmlsdGVyKCAocHJvcE5hbWUpID0+IHByb3BOYW1lICE9IFwiJG5lZ2F0ZVwiKTtcclxuICAgICAgICAgICAgaWYgKHByb3BOYW1lcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBub3QgPSB2LiRuZWdhdGUgPyBcIm5vdFwiIDogXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT5cclxuICAgICAgICAgICAgICAgIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSBhcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0LCBxdWVyeVtwcm9wTmFtZV0pKS5qb2luKCBcIikgYW5kIChcIil9KWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBPbmVPclBhaXIsIE9uZU9yQm94LCBPbmVPck1hbnksIENzc051bWJlciwgQ3NzUG9zaXRpb24sIE11bHRpQ3NzUG9zaXRpb24sXHJcbiAgICBDc3NUaW1lLCBDc3NMZW5ndGgsIENzc0FuZ2xlLCBDc3NQZXJjZW50LCBDc3NMZW5ndGhCb3gsIENzc011bHRpVGltZSwgQ3NzRnJlcXVlbmN5LFxyXG4gICAgQ3NzUmVzb2x1dGlvbiwgQ3NzUmFkaXVzLCBJVXJsUHJveHksIEhvcml6b250YWxQb3NpdGlvbktleXdvcmQsIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLFxyXG4gICAgQ3NzUG9pbnQsIEV4dGVuZGVkUHJvcCwgSUdlbmVyaWNQcm94eSwgQ3NzTGVuZ3RoUGFpciwgSVF1b3RlZFByb3h5XHJcbn0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4vQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7Q3NzSW1hZ2V9IGZyb20gXCIuL0ltYWdlVHlwZXNcIjtcclxuaW1wb3J0IHtGb250U3RyZXRjaF9TaW5nbGV9IGZyb20gXCIuL0ZvbnRGYWNlVHlwZXNcIjtcclxuaW1wb3J0IHtJVmFyUnVsZSwgSUFuaW1hdGlvblJ1bGUsIElDb3VudGVyUnVsZSwgSUlEUnVsZSwgSUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24tY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnbkNvbnRlbnRfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcbiAgICBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8IFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiIHxcclxuICAgIFwic3BhY2UtYmV0d2VlblwiIHwgXCJzcGFjZS1hcm91bmRcIiB8IFwic3BhY2UtZXZlbmx5XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbi1pdGVtcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnbkl0ZW1zX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfFxyXG4gICAgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfCBcInNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBjZW50ZXJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWduLXNlbGYgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25TZWxmX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcbiAgICBcInNlbGYtc3RhcnRcIiB8IFwic2VsZi1lbmRcIiB8IFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHxcclxuICAgIFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ25tZW50LWJhc2VsaW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWdubWVudEJhc2VsaW5lX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJiYXNlbGluZVwiIHwgXCJiZWZvcmUtZWRnZVwiIHwgXCJ0ZXh0LWJlZm9yZS1lZGdlXCIgfFxyXG4gICAgXCJtaWRkbGVcIiB8IFwiY2VudHJhbFwiIHwgXCJhZnRlci1lZGdlXCIgfCBcInRleHQtYWZ0ZXItZWRnZVwiIHwgXCJpZGVvZ3JhcGhpY1wiIHwgXCJhbHBoYWJldGljXCIgfFxyXG4gICAgXCJoYW5naW5nXCIgfCBcIm1hdGhlbWF0aWNhbFwiIHwgXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25fU2luZ2xlID1cclxuICAgIHtcclxuICAgICAgICBuYW1lPzogRXh0ZW5kZWQ8QW5pbWF0aW9uTmFtZV9TaW5nbGU+O1xyXG4gICAgICAgIGR1cmF0aW9uPzogRXh0ZW5kZWQ8Q3NzVGltZT47XHJcbiAgICAgICAgZnVuYz86IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT47XHJcbiAgICAgICAgZGVsYXk/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgICAgICBjb3VudD86IEV4dGVuZGVkPEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZT47XHJcbiAgICAgICAgZGlyZWN0aW9uPzogRXh0ZW5kZWQ8QW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZT47XHJcbiAgICAgICAgbW9kZT86IEV4dGVuZGVkPEFuaW1hdGlvbkZpbGxNb2RlX1NpbmdsZT47XHJcbiAgICAgICAgc3RhdGU/OiBFeHRlbmRlZDxBbmltYXRpb25QbGF5U3RhdGVfU2luZ2xlPjtcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbl9TdHlsZVR5cGUgPSBzdHJpbmcgfCBPbmVPck1hbnk8QW5pbWF0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZGVsYXkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRGVsYXlfU3R5bGVUeXBlID0gQ3NzTXVsdGlUaW1lO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBkaXJlY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZSA9IFwibm9ybWFsXCIgfCBcInJldmVyc2VcIiB8IFwiYWx0ZXJuYXRlXCIgfCBcImFsdGVybmF0ZS1yZXZlcnNlXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EaXJlY3Rpb25fU3R5bGVUeXBlID0gT25lT3JNYW55PEFuaW1hdGlvbkRpcmVjdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWR1cmF0b24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRHVyYXRpb25fU3R5bGVUeXBlID0gQ3NzTXVsdGlUaW1lO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBmaWxsIG1vZGUgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRmlsbE1vZGVfU2luZ2xlID0gXCJub25lXCIgfCBcImZvcndhcmRzXCIgfCBcImJhY2t3YXJkc1wiIHwgXCJib3RoXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWZpbGwtbW9kZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GaWxsTW9kZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGl0ZXJhdGlvbiBjb3VudCAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25JdGVyYXRpb25Db3VudF9TaW5nbGUgPSBcImluZmluaXRlXCIgfCBDc3NOdW1iZXI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25JdGVyYXRpb25Db3VudF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uSXRlcmF0aW9uQ291bnRfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gbmFtZSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25OYW1lX1NpbmdsZSA9IFwibm9uZVwiIHwgc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLW5hbWUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uTmFtZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uTmFtZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBwbGF5IHN0YXRlICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblBsYXlTdGF0ZV9TaW5nbGUgPSBcInBhdXNlZFwiIHwgXCJydW5uaW5nXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLXBsYXktc3RhdGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uUGxheVN0YXRlX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25QbGF5U3RhdGVfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbXBsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9ucyAtIHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBwYXJhbWV0ZXJzICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX1NpbXBsZSA9IFwibGluZWFyXCIgfCBcImVhc2VcIiB8IFwiZWFzZS1pblwiIHwgXCJlYXNlLW91dFwiIHwgXCJlYXNlLWluLW91dFwiIHwgXCJzdGVwLXN0YXJ0XCIgfCBcInN0ZXAtZW5kXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc3RlcCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX1N0ZXBQb3NpdGlvbiA9IFwianVtcC1zdGFydFwiIHwgXCJqdW1wLWVuZFwiIHwgXCJqdW1wLW5vbmVcIiB8IFwianVtcC1ib3RoXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHN0ZXAgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9TdGVwID0gbnVtYmVyIHwgW0V4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1N0ZXBQb3NpdGlvbj4/XTtcclxuXHJcbi8qKiBUeXBlIGZvciBCZXppZXIgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9CZXppZXIgPSBbRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPl07XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fU2luZ2xlID0gVGltaW5nRnVuY3Rpb25fU2ltcGxlIHwgVGltaW5nRnVuY3Rpb25fU3RlcCB8IFRpbWluZ0Z1bmN0aW9uX0JlemllcjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2ZhY2UtdmlzaWJpbGl0eSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZmFjZVZpc2liaWxpdHlNb2RlX1N0eWxlVHlwZSA9IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRfU2luZ2xlID0gc3RyaW5nIHwgQ3NzQ29sb3IgfFxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIGltYWdlPzogRXh0ZW5kZWQ8Q3NzSW1hZ2UgfCBzdHJpbmc+LFxyXG4gICAgICAgIHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+LFxyXG4gICAgICAgIHNpemU/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+LFxyXG4gICAgICAgIHJlcGVhdD86IEV4dGVuZGVkPEJhY2tncm91bmRSZXBlYXRfU2luZ2xlPixcclxuICAgICAgICBhdHRhY2htZW50PzogRXh0ZW5kZWQ8QmFja2dyb3VuZEF0dGFjaG1lbnRfU2luZ2xlPixcclxuICAgICAgICBvcmlnaW4/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kT3JpZ2luX1NpbmdsZT4sXHJcbiAgICAgICAgY2xpcD86IEV4dGVuZGVkPEJhY2tncm91bmRDbGlwX1NpbmdsZT4sXHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgYXR0YWNobWVudCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGUgPSBcInNjcm9sbFwiIHwgXCJmaXhlZFwiIHwgXCJsb2NhbFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtYXR0YWNobWVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQXR0YWNobWVudF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZEF0dGFjaG1lbnRfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIGJsZW5kIG1vZGUgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEJsZW5kTW9kZV9TaW5nbGUgPSBcIm5vcm1hbFwiIHwgXCJtdWx0aXBseVwiIHwgXCJzY3JlZW5cIiB8IFwib3ZlcmxheVwiIHwgXCJkYXJrZW5cIiB8XHJcbiAgICBcImxpZ2h0ZW5cIiB8IFwiY29sb3ItZG9kZ2VcIiB8IFwiY29sb3ItYnVyblwiIHwgXCJoYXJkLWxpZ2h0XCIgfCBcInNvZnQtbGlnaHRcIiB8IFwiZGlmZmVyZW5jZVwiIHxcclxuICAgIFwiZXhjbHVzaW9uXCIgfCBcImh1ZVwiIHwgXCJzYXR1cmF0aW9uXCIgfCBcImNvbG9yXCIgfCBcImx1bWlub3NpdHlcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLWJsZW5kLW1vZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEJsZW5kTW9kZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZEJsZW5kTW9kZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgY2xpcCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQ2xpcF9TaW5nbGUgPSBcImJvcmRlci1ib3hcIiB8IFwicGFkZGluZy1ib3hcIiB8IFwiY29udGVudC1ib3hcIiB8IFwidGV4dFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtY2xpcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQ2xpcF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZENsaXBfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtaW1hZ2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEltYWdlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgT25lT3JNYW55PENzc0ltYWdlIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIG9yaWdpbiAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kT3JpZ2luX1NpbmdsZSA9IFwiYm9yZGVyLWJveFwiIHwgXCJwYWRkaW5nLWJveFwiIHwgXCJjb250ZW50LWJveFwiIHwgXCJ0ZXh0XCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1vcmlnaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZE9yaWdpbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZE9yaWdpbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUG9zaXRpb25fU3R5bGVUeXBlID0gTXVsdGlDc3NQb3NpdGlvbjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIHJlcGVhdCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUmVwZWF0S2V5d29yZF9TaW5nbGUgPSBcInJlcGVhdFwiIHwgXCJzcGFjZVwiIHwgXCJyb3VuZFwiIHwgXCJuby1yZXBlYXRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCByZXBlYXQgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFJlcGVhdF9TaW5nbGUgPSBcInJlcGVhdC14XCIgfCBcInJlcGVhdC15XCIgfCBPbmVPclBhaXI8QmFja2dyb3VuZFJlcGVhdEtleXdvcmRfU2luZ2xlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLXJlcGVhdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUmVwZWF0X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kUmVwZWF0X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kIHNpemUgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFNpemVfU2luZ2xlID0gXCJjb3ZlclwiIHwgXCJjb250YWluXCIgfCBPbmVPclBhaXI8Q3NzTGVuZ3RoIHwgXCJhdXRvXCI+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGJhY2tncm91bmQtc2l6ZSBzdHlsZSBwcm9wZXJ0eS4gVGhlIGJhY2tncm91bmQtc2l6ZSBzdHlsZSBjYW4gc3BlY2lmeSBvbmUgb3IgbW9yZVxyXG4gKiBjb21tYS1zZXBhcmF0ZWQgc2l6ZXMsIHdoZXJlIGVhY2ggc2l6ZSBjYW4gYmUgYSBrZXl3b3JkLCBhIGxlbmd0aCBvciB0d28gbGVuZ3Rocy4gV2UgbW9kZWxcclxuICogdGhpcyBzdHJ1Y3R1cmUgdGhlIGZvbGxvd2luZyB3YXk6XHJcbiAqIC0gaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGEgbnVtYmVyLCB0aGF0J3MgdGhlIG9ubHkgdmFsdWU7XHJcbiAqIC0gaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIGl0IGlzIGEgbGlzdCBvZiBzZXZlcmFsIHNpemVzLiBFYWNoIGVsZW1lbnQgaW4gdGhpcyBhcnJheSBpc1xyXG4gKiAgIGVpdGhlciBhIGtleXdvcmQgb3IgYSBsZW5ndGggb3IgYW4gYXJyYXkgb2YgdHdvIGVsZW1lbnRzLlxyXG4gKiBUaHVzIFsxMDAsMjAwXSB3aWxsIGJlIGludGVycHJldGVkIGFzIFwiMTAwcHgsIDIwMHB4XCIgYW5kIG5vdCBcIjEwMHB4IDIwMHB4XCI7IHRoYXQgaXMsIGl0IHdpbGxcclxuICogZGVmaW5lIHR3byBzaXplcyBlYWNoIHdpdGggYSB3aWR0aCBpbnN0ZWFkIG9mIG9uZSBzaXplIHdpdGggYm90aCB3aWR0aCBhbmQgaGVpZ2h0LiBJZiB5b3UgbmVlZFxyXG4gKiB0byBzcGVjaWZ5IGJvdGggd2lkdGggYW5kIGhlaWdodCB5b3UgbXVzdCB1c2UgYXJyYXkgd2l0aGluIGFycmF5IC0gZXZlbiBmb3IgYSBzaW5nbGUgc2l6ZTpcclxuICogW1sxMDAsMjAwXV0gd2xsIGJlIGludGVycHJldGVkIGFzIFwiMTAwcHggMjAwcHhcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRTaXplX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFzZWxpbmUtc2hpZnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFzZWxpbmVTaGlmdF9TdHlsZVR5cGUgPSBcInN1YlwiIHwgXCJzdXBlclwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWNvbGxhcHNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckNvbGFwc2VfU3R5bGVUeXBlID0gXCJjb2xsYXBzZVwiIHwgXCJzZXBhcmF0ZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckNvbG9yX1N0eWxlVHlwZSA9IE9uZU9yQm94PENzc0NvbG9yPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZSBzdHlsZSBwcm9wZXJ0eSBleHByZXNzZWQgYXMgYW4gb2JqZWN0LiAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZV9PYmplY3QgPVxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZTogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VTb3VyY2VfU3R5bGVUeXBlPixcclxuICAgICAgICBzbGljZT86IEV4dGVuZGVkPEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlPixcclxuICAgICAgICB3aWR0aD86IEV4dGVuZGVkPEJvcmRlckltYWdlV2lkdGhfU3R5bGVUeXBlPixcclxuICAgICAgICBvdXRzZXQ/OiBFeHRlbmRlZDxCb3JkZXJJbWFnZU91dHNldF9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHJlcGVhdD86IEV4dGVuZGVkPEJvcmRlckltYWdlUmVwZWF0X1N0eWxlVHlwZT4sXHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZSBzdHlsZSBwcm9wZXJ0eS4gKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VfU3R5bGVUeXBlID0gc3RyaW5nIHwgQ3NzSW1hZ2UgfCBCb3JkZXJJbWFnZV9PYmplY3Q7XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYm9yZGVyLWltYWdlLW91dHNldCBzdHlsZSBwcm9wZXJ0eS4gSXQgaXMgQ3NzTnVtYmVyIGFuZCBub3QgQ3NzTGVuZ3RoIGJlY2F1c2VcclxuICogYm9yZGVyLWltYWdlLW91dHNldCBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgdW5pdGxlc3MgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VPdXRzZXRfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzTnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2UtcmVwZWF0IGtleXdvcmRzICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlUmVwZWF0X0tleXdvcmQgPSBcInN0cmV0Y2hcIiB8IFwicmVwZWF0XCIgfCBcInJvdW5kXCIgfCBcInNwYWNlXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXJlcGVhdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVJlcGVhdF9TdHlsZVR5cGUgPSBPbmVPclBhaXI8Qm9yZGVySW1hZ2VSZXBlYXRfS2V5d29yZD47XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXNsaWNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzTnVtYmVyIHwgc3RyaW5nPiB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgdHJ1ZV0gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIHRydWVdIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCB0cnVlXSB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgdHJ1ZV07XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXNvdXJjZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVNvdXJjZV9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NJbWFnZSB8IHN0cmluZz47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXdpZHRoIHN0eWxlIHByb3BlcnR5LiBJdCBpcyBDc3NOdW1iZXIgYW5kIG5vdCBDc3NMZW5ndGggYmVjYXVzZVxyXG4gKiBib3JkZXItaW1hZ2Utd2lkdGggY2FuIGJlIHNwZWNpZmllZCBhcyBhIHVuaXRsZXNzIG51bWJlci5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlV2lkdGhfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzTnVtYmVyIHwgXCJhdXRvXCIgfCBzdHJpbmc+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLXJhZGl1cyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlID0gT25lT3JQYWlyPENzc0xlbmd0aEJveD47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItc3BhY2luZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTcGFjaW5nX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxDc3NMZW5ndGg+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJvcmRlciBzaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclN0eWxlX0tleXdvcmQgPSBcIm5vbmVcIiB8IFwiaGlkZGVuXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIiB8IFwic29saWRcIiB8IFwiZG91YmxlXCIgfFxyXG4gICAgXCJncm9vdmVcIiB8IFwicmlkZ2VcIiB8IFwiaW5zZXRcIiB8IFwib3V0c2V0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3R5bGVfU3R5bGVUeXBlID0gT25lT3JCb3g8Qm9yZGVyU3R5bGVfS2V5d29yZD47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyX1N0eWxlVHlwZSA9IENzc0xlbmd0aCB8IEJvcmRlclN0eWxlX0tleXdvcmQgfCBDc3NDb2xvciB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPj8sIEV4dGVuZGVkPEJvcmRlclN0eWxlX0tleXdvcmQ+PywgRXh0ZW5kZWQ8Q3NzQ29sb3I+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXIgc2lkZSB3aWR0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJXaWR0aF9TaW5nbGUgPSBcInRoaW5cIiB8IFwibWVkaXVtXCIgfCBcInRoaWNrXCIgfCBDc3NMZW5ndGg7XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLXdpZHRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoX1N0eWxlVHlwZSA9IE9uZU9yQm94PEJvcmRlcldpZHRoX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYm94IHNoYWRvdy4gKi9cclxuZXhwb3J0IHR5cGUgQm94U2hhZG93X1NpbmdsZSA9IFwibm9uZVwiIHwgc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgYmx1cj86IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgc3ByZWFkPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgICAgICBpbnNldD86IEV4dGVuZGVkPGJvb2xlYW4+XHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJveCBzaGFkb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm94U2hhZG93X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCb3hTaGFkb3dfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJveC1zaXppbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm94U2l6aW5nX1N0eWxlVHlwZSA9IFwiY29udGVudC1ib3hcIiB8IFwiYm9yZGVyLWJveFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstYWZ0ZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQnJlYWtBZnRlcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYXZvaWRcIiB8IFwiYWx3YXlzXCIgfCBcImFsbFwiIHwgXCJhdm9pZC1wYWdlXCIgfCBcInBhZ2VcIiB8XHJcbiAgICBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwicmVjdG9cIiB8IFwidmVyc29cIiB8IFwiYXZvaWQtY29sdW1uXCIgfCBcImNvbHVtblwiIHxcclxuICAgIFwiYXZvaWQtcmVnaW9uXCIgfCBcInJlZ2lvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstYmVmb3JlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJyZWFrQmVmb3JlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhbHdheXNcIiB8IFwiYWxsXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwicGFnZVwiIHxcclxuICAgIFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJyZWN0b1wiIHwgXCJ2ZXJzb1wiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiY29sdW1uXCIgfFxyXG4gICAgXCJhdm9pZC1yZWdpb25cIiB8IFwicmVnaW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBicmVhay1pbnNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQnJlYWtJbnNpZGVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwiYXZvaWQtY29sdW1uXCIgfCBcImF2b2lkLXJlZ2lvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2FwdGlvbi1zaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENhcHRpb25TaWRlX1N0eWxlVHlwZSA9IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJibG9jay1zdGFydFwiIHwgXCJibG9jay1lbmRcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNhcmV0LWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENhcmV0Q29sb3JfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDc3NDb2xvcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsZWFyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENsZWFyX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImJvdGhcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsaXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xpcF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc0xlbmd0aEJveDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgdXNlZCBmb3Igc2V2ZXJhbCBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdlb21ldHJ5Qm94S2V5d29yZCA9IFwibWFyZ2luLWJveFwiIHwgXCJib3JkZXItYm94XCIgfCBcInBhZGRpbmctYm94XCIgfCBcImNvbnRlbnQtYm94XCIgfFxyXG4gICAgXCJmaWxsLWJveFwiIHwgXCJzdHJva2UtYm94XCIgfCBcInZpZXctYm94XCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBleHRlbnQgZm9yIHRoZSBgcmFkaWFsLWdyYWRpZW50KClgIG9yIGByYXkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW50S2V5d29yZCA9IFwiY2xvc2VzdC1jb3JuZXJcIiB8IFwiY2xvc2VzdC1zaWRlXCIgfCBcImZhcnRoZXN0LWNvcm5lclwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGlwLXBhdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xpcFBhdGhfU3R5bGVUeXBlID0gXCJub25lXCIgfCBJVXJsUHJveHkgfCBCYXNpY1NoYXBlIHwgR2VvbWV0cnlCb3hLZXl3b3JkIHxcclxuICAgIFtHZW9tZXRyeUJveEtleXdvcmQsIEJhc2ljU2hhcGVdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xpcC1ydWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENsaXBSdWxlX1N0eWxlVHlwZSA9IFwibm9uemVyb1wiIHwgXCJldmVub2RkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2xvci1pbnRlcnBvbGF0aW9uIGFuZCBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBDb2xvckludGVycG9sYXRpb25fU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInNSR0JcIiB8IFwibGluZWFyUkdCXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tY291bnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uQ291bnRfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBudW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tZmlsbCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5GaWxsX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJiYWxhbmNlXCIgfCBcImJhbGFuY2UtYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tZ2FwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbHVtbkdhcF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1uLXNwYW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uU3Bhbl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBjb2x1bW5zIHN0eWxlIHByb3BlcnR5LiBUaGUgdmFsdWUgY2FuIGJlIHByb3ZpZGVkIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1zIGFuZFxyXG4gKiBhbmQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFzIGZvbGxvd3M6XHJcbiAqIFxyXG4gKiAtIHN0cmluZzogd2lsbCBiZSB0cmVhdGVkIGFzIGlzLlxyXG4gKiAtIG51bWJlcjogd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSB1bml0bGVzcyBudW1iZXIgLSBjb3VudCBvZiBjb2x1bW5zLlxyXG4gKiAtIElMZW5ndGhQcm94eSAoZS5nLiBweCg4KSk6IGNvbnZlcnRlZCB0byBhIG51bWJlciB3aXRoIHRoZSBwcm9wZXIgbGVuZ3RoIHVuaXRzLlxyXG4gKiAtIHR3byB2YXJpYW50cyBvZiB0d28gZWxlbWVudCBhcnJheXM6IG9uZSBvZiB0aGUgZWxlbWVudHMgd2lsbCBiZSB0cmVhdGVkIGFzIGEgbnVtYmVyIG9mIGNvbHVtbnNcclxuICogICB3aGlsZSBhbm90aGVyIGFzIHRoZSBjb2x1bW4gd2lkdGguXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5zX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzTnVtYmVyIHwgQ3NzTGVuZ3RoIHxcclxuICAgIFtcImF1dG9cIiB8IEV4dGVuZGVkPENzc051bWJlcj4sIFwiYXV0b1wiIHwgRXhjbHVkZTxFeHRlbmRlZDxDc3NMZW5ndGg+LG51bWJlcj5dIHxcclxuICAgIFtcImF1dG9cIiB8IEV4Y2x1ZGU8RXh0ZW5kZWQ8Q3NzTGVuZ3RoPixudW1iZXI+LCBcImF1dG9cIiB8IEV4dGVuZGVkPENzc051bWJlcj5dO1xyXG4vLyBOb3RlIHRoYXQgbm8gc3BlY2lhbCBjb3ZlcnNpb24gZnVuY3Rpb24gaXMgcmVxdWlyZWQgZm9yIHRoaXMgcHJvcGVydHkgYmVjYXVzZSB0aGUgbnVtYmVyIHR5cGUgd2lsbFxyXG4vLyBhbHdheXMgYmUgY29udmVydGVkIHRvIGEgdW5pdGxlc3MgbnVtYmVyXHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb250YWluIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbnRhaW5fU3R5bGVUeXBlID0gXCJub25lXCIgfCBcInN0cmljdFwiIHwgXCJjb250ZW50XCIgfCBcInNpemVcIiB8IFwibGF5b3V0XCIgfCBcInN0eWxlXCIgfCBcInBhaW50XCIgfFxyXG4gICAgRXh0ZW5kZWQ8XCJzaXplXCIgfCBcImxheW91dFwiIHwgXCJzdHlsZVwiIHwgXCJwYWludFwiPltdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb250ZW50X1N0eWxlVHlwZSA9IHN0cmluZyB8IFwibm9uZVwiIHwgXCJub3JtYWxcIiB8IE9uZU9yTWFueTxDc3NJbWFnZSB8XHJcbiAgICBcIm9wZW4tcXVvdGVcIiB8IFwiY2xvc2UtcXVvdGVcIiB8IFwibm8tb3Blbi1xdW90ZVwiIHwgXCJuby1jbG9zZS1xdW90ZVwiPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIENvdW50ZXJfU3R5bGVUeXBlID0gXCJub25lXCIgfCBPbmVPck1hbnk8SUNvdW50ZXJSdWxlIHwgc3RyaW5nIHwgW0lDb3VudGVyUnVsZSB8IHN0cmluZywgRXh0ZW5kZWQ8bnVtYmVyPl0+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY3Vyc29yIHByZS1kZWZpbmVkIG5hbWVzICovXHJcbmV4cG9ydCB0eXBlIEN1cnNvcl9LZXl3b3JkID0gXCJhdXRvXCIgfCBcImRlZmF1bHRcIiB8IFwibm9uZVwiIHwgXCJjb250ZXh0LW1lbnVcIiB8IFwiaGVscFwiIHwgXCJwb2ludGVyXCIgfCBcInByb2dyZXNzXCIgfFxyXG4gICAgXCJ3YWl0XCIgfCBcImNlbGxcIiB8IFwiY3Jvc3NoYWlyXCIgfCBcInRleHRcIiB8IFwidmVydGljYWwtdGV4dFwiIHwgXCJhbGlhc1wiIHwgXCJjb3B5XCIgfCBcIm1vdmVcIiB8XHJcbiAgICBcIm5vLWRyb3BcIiB8IFwibm90LWFsbG93ZWRcIiB8IFwiZS1yZXNpemVcIiB8IFwibi1yZXNpemVcIiB8IFwibmUtcmVzaXplXCIgfCBcIm53LXJlc2l6ZVwiIHxcclxuICAgIFwicy1yZXNpemVcIiB8IFwic2UtcmVzaXplXCIgfCBcInN3LXJlc2l6ZVwiIHwgXCJ3LXJlc2l6ZVwiIHwgXCJldy1yZXNpemVcIiB8IFwibnMtcmVzaXplXCIgfFxyXG4gICAgXCJuZXN3LXJlc2l6ZVwiIHwgXCJud3NlLXJlc2l6ZVwiIHwgXCJjb2wtcmVzaXplXCIgfCBcInJvdy1yZXNpemVcIiB8IFwiYWxsLXNjcm9sbFwiIHwgXCJ6b29tLWluXCIgfFxyXG4gICAgXCJ6b29tLW91dFwiIHwgXCJncmFiXCIgfCBcImdyYWJiaW5nXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgY3Vyc29yIHN0eWxlIHByb3BlcnR5IHNpbmdsZSB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBDdXJzb3JfU2luZ2xlID0gQ3Vyc29yX0tleXdvcmQgfCBJVXJsUHJveHkgfCBbSVVybFByb3h5LCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBjdXJzb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ3Vyc29yX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxDdXJzb3JfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBEaXJlY3Rpb25fU3R5bGVUeXBlID0gXCJsdHJcIiB8IFwicnRsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBkaXNwbGF5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIERpc3BsYXlfU3R5bGVUeXBlID0gXCJibG9ja1wiIHwgXCJpbmxpbmVcIiB8IFwicnVuLWluXCIgfCBcImNvbnRlbnRzXCIgfCBcIm5vbmVcIiB8XHJcbiAgICBcImlubGluZS1ibG9ja1wiIHwgXCJpbmxpbmUtbGlzdC1pdGVtXCIgfCBcImlubGluZS10YWJsZVwiIHwgXCJpbmxpbmUtZmxleFwiIHwgXCJpbmxpbmUtZ3JpZFwiIHxcclxuICAgIFwiZmxvd1wiIHwgXCJmbG93LXJvb3RcIiB8IFwidGFibGVcIiB8IFwiZmxleFwiIHwgXCJncmlkXCIgfCBcInJ1YnlcIiB8XHJcbiAgICBcInRhYmxlLXJvdy1ncm91cFwiIHwgXCJ0YWJsZS1oZWFkZXItZ3JvdXBcIiB8IFwidGFibGUtZm9vdGVyLWdyb3VwXCIgfCBcInRhYmxlLXJvd1wiIHwgXCJ0YWJsZS1jZWxsXCIgfFxyXG4gICAgICAgIFwidGFibGUtY29sdW1uLWdyb3VwXCIgfCBcInRhYmxlLWNvbHVtblwiIHwgXCJ0YWJsZS1jYXB0aW9uXCIgfCBcInJ1YnktYmFzZVwiIHwgXCJydWJ5LXRleHRcIiB8XHJcbiAgICAgICAgXCJydWJ5LWJhc2UtY29udGFpbmVyXCIgfCBcInJ1YnktdGV4dC1jb250YWluZXJcIiB8XHJcbiAgICBcImxpc3QtaXRlbVwiIHwgXCJsaXN0LWl0ZW0gYmxvY2tcIiB8IFwibGlzdC1pdGVtIGlubGluZVwiIHwgXCJsaXN0LWl0ZW0gZmxvd1wiIHwgXCJsaXN0LWl0ZW0gZmxvdy1yb290XCIgfFxyXG4gICAgICAgIFwibGlzdC1pdGVtIGJsb2NrIGZsb3dcIiB8IFwibGlzdC1pdGVtIGJsb2NrIGZsb3ctcm9vdFwiIHwgXCJmbG93IGxpc3QtaXRlbSBibG9ja1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuLyoqIFR5cGUgZm9yIGRvbWluYW50LWJhc2VsaW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIERvbWluYW50QmFzZWxpbmVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInRleHQtYm90dG9tXCIgfCBcImFscGhhYmV0aWNcIiB8IFwiaWRlb2dyYXBoaWNcIiB8IFwibWlkZGxlXCIgfFxyXG4gICAgXCJjZW50cmFsXCIgfCBcIm1hdGhlbWF0aWNhbFwiIHwgXCJoYW5naW5nXCIgfCBcInRleHQtdG9wXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBlbXB0eS1jZWxscyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBFbXB0eUNlbGxzX1N0eWxlVHlwZSA9IFwic2hvd1wiIHwgXCJoaWRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmaWxsLXJ1bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmlsbFJ1bGVfU3R5bGVUeXBlID0gXCJub256ZXJvXCIgfCBcImV2ZW5vZGRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZpbHRlciBhbmQgYmFja2Ryb3AtZmlsdGVyIHN0eWxlIHNpbmdsZSB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBGaWx0ZXJfU2luZ2xlID0gc3RyaW5nIHwgSVVybFByb3h5IHwgSUZpbHRlclByb3h5O1xyXG5cclxuLyoqIFR5cGUgZm9yIGZpbHRlciBhbmQgYmFja2Ryb3AtZmlsdGVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZpbHRlcl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8RmlsdGVyX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhfU3R5bGVUeXBlID0gRmxleEJhc2lzX1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+XSB8XHJcbiAgICBbRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8RmxleEJhc2lzX1N0eWxlVHlwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC1iYXNpcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4QmFzaXNfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImNvbnRlbnRcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtZGlyZWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhEaXJlY3Rpb25fU3R5bGVUeXBlID0gXCJyb3dcIiB8IFwicm93LXJldmVyc2VcIiB8IFwiY29sdW1uXCIgfCBcImNvbHVtbi1yZXZlcnNlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LWZsb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleEZsb3dfU3R5bGVUeXBlID0gRmxleERpcmVjdGlvbl9TdHlsZVR5cGUgfCBGbGV4V3JhcF9TdHlsZVR5cGUgfFxyXG4gICAgW0V4dGVuZGVkPEZsZXhEaXJlY3Rpb25fU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8RmxleFdyYXBfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LXdyYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleFdyYXBfU3R5bGVUeXBlID0gXCJub3dyYXBcIiB8IFwid3JhcFwiIHwgXCJ3cmFwLXJldmVyc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsb2F0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsb2F0X1N0eWxlVHlwZSA9IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJub25lXCIgfCBcImlubGluZS1zdGFydFwiIHwgXCJpbmxpbmUtZW5kXCI7XHJcblxyXG5cclxuXHJcbi8qKiBLZXl3b3JkcyBmb3IgZm9udCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250X1N5c3RlbUtleXdvcmQgPSBcImNhcHRpb25cIiB8IFwiaWNvblwiIHwgXCJtZW51XCIgfCBcIm1lc3NhZ2UtYm94XCIgfCBcInNtYWxsLWNhcHRpb25cIiB8IFwic3RhdHVzLWJhclwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udF9TdHlsZVR5cGUgPSBzdHJpbmcgfCBGb250X1N5c3RlbUtleXdvcmQgfFxyXG4gICAge1xyXG4gICAgICAgIHNpemU6IEV4dGVuZGVkPENzc0xlbmd0aD47XHJcbiAgICAgICAgZmFtaWx5OiBFeHRlbmRlZDxzdHJpbmc+O1xyXG4gICAgICAgIHN0eWxlPzogRXh0ZW5kZWQ8Rm9udFN0eWxlX1N0eWxlVHlwZT47XHJcbiAgICAgICAgdmFyaWFudD86IEV4dGVuZGVkPHN0cmluZz47XHJcbiAgICAgICAgd2VpZ2h0PzogRXh0ZW5kZWQ8Rm9udFdlaWdodF9TdHlsZVR5cGU+O1xyXG4gICAgICAgIHN0cmV0Y2g/OiBFeHRlbmRlZDxFeGNsdWRlPEZvbnRTdHJldGNoX1NpbmdsZSxudW1iZXI+PjtcclxuICAgICAgICBsaW5lSGVpZ2h0PzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPlxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQta2VybmluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250S2VybmluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9ybWFsXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtb3B0aWNhbC1zaXppbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udE9wdGljYWxTaXppbmdfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc2l6ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250U2l6ZV9TdHlsZVR5cGUgPSBcInh4LXNtYWxsXCIgfCBcIngtc21hbGxcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCIgfFxyXG4gICAgXCJ4LWxhcmdlXCIgfCBcInh4LWxhcmdlXCIgfCBcInh4eC1sYXJnZVwiIHwgXCJsYXJnZXJcIiB8IFwic21hbGxlclwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zdHJldGNoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTdHJldGNoX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInVsdHJhLWNvbmRlbnNlZFwiIHwgXCJleHRyYS1jb25kZW5zZWRcIiB8IFwiY29uZGVuc2VkXCIgfFxyXG5cInNlbWktY29uZGVuc2VkXCIgfCBcInNlbWktZXhwYW5kZWRcIiB8IFwiZXhwYW5kZWRcIiB8IFwiZXh0cmEtZXhwYW5kZWRcIiB8IFwidWx0cmEtZXhwYW5kZWRcIiB8IENzc051bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFN0eWxlX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcIml0YWxpY1wiIHwgXCJvYmxpcXVlXCIgfCBDc3NBbmdsZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc3ludGhlc2lzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTeW50aGVzaXNfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcIndlaWdodFwiIHwgXCJzdHlsZVwiIHwgXCJ3ZWlnaHQgc3R5bGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtdmFyaWFudC1jYXBzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRWYXJpYW50Q2Fwc19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzbWFsbC1jYXBzXCIgfCBcImFsbC1zbWFsbC1jYXBzXCIgfFxyXG4gICAgXCJwZXRpdGUtY2Fwc1wiIHwgXCJhbGwtcGV0aXRlLWNhcHNcIiB8IFwidW5pY2FzZVwiIHwgXCJ0aXRsaW5nLWNhcHNcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtdmFyaWFudC1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250VmFyaWFudFBvc2l0aW9uX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN1YlwiIHwgXCJzdXBlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC13ZWlnaHQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFdlaWdodF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJib2xkXCIgfCBcImJvbGRlclwiIHwgXCJsaWdodGVyXCIgfCBDc3NOdW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBnYXAgb3IgZ3JpZC1nYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgR2FwX1N0eWxlVHlwZSA9IFJvd0dhcF9TdHlsZVR5cGUgfCBbUm93R2FwX1N0eWxlVHlwZSwgQ29sdW1uR2FwX1N0eWxlVHlwZV07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSB0ZW1wbGF0ZSBlbGVtZW50IGRlZmluaW5nIHRyYWNrIHNpemUgaW4gZ3JpZCB0ZW1wbGF0ZSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVHJhY2tTaXplID0gQ3NzTGVuZ3RoIHwgXCJtaW4tY29udGVudFwiIHwgXCJtYXgtY29udGVudFwiIHwgXCJhdXRvXCIgfFxyXG4gICAgSU1pbk1heFByb3h5IHwgSUZpdENvbnRlbnRQcm94eSB8IElSZXBlYXRQcm94eTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtYXV0by1jb2x1bW5zIGFuZCBncmlkLWF1dG8tcm93cyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBdXRvQXhpc19TdHlsZVR5cGUgPSBPbmVPck1hbnk8R3JpZFRyYWNrU2l6ZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWF1dG8tZmxvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXV0b0Zsb3dfU3R5bGVUeXBlID0gXCJyb3dcIiB8IFwiY29sdW1uXCIgfCBcImRlbnNlXCIgfCBcInJvdyBkZW5zZVwiIHwgXCJjb2x1bW4gZGVuc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNwZWNpZnlpbmcgZWl0aGVyIG51bWJlciBvZiBncmlkIGxpbmVzIG9yIG5hbWUgb2YgZ3JpZCBsaW5lIG9yIGFyZWEgKi9cclxuZXhwb3J0IHR5cGUgR3JpZExpbmVDb3VudE9yTmFtZSA9IENzc051bWJlciB8IElHcmlkQXJlYVJ1bGUgfCBJR3JpZExpbmVSdWxlIHwgc3RyaW5nO1xyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtY29sdW1uLXN0YXJ0L2VuZCBhbmQgZ3JpZC1yb3ctc3RhcnQvZW5kIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEF4aXNTaWRlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgR3JpZExpbmVDb3VudE9yTmFtZSB8IElTcGFuUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWNvbHVtbiBhbmQgZ3JpZC1yb3cgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXhpc19TdHlsZVR5cGUgPSBPbmVPclBhaXI8R3JpZEF4aXNTaWRlX1N0eWxlVHlwZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWFyZWEgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEFyZWFfU3R5bGVUeXBlID0gT25lT3JCb3g8R3JpZEF4aXNTaWRlX1N0eWxlVHlwZT47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBkZWZpbmluZyBhIHNpbmdsZSBncmlkIGFyZWEgcG9zaXRpb24uIFRoZSBudW1iZXJzIGFyZSAxLWJhc2VkIGluZGljZXMgb2YgdGhlIGxpbmVzIGluXHJcbiAqIHRoZSBmb2xsb3dpbmcgc2VxdWVuY2U6IGJsb2NrIHN0YXJ0LCBpbmxpbmUgc3RhcnQsIGJsb2NrIGVuZCwgaW5saW5lIGVuZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbiA9IFtJR3JpZEFyZWFSdWxlIHwgRXh0ZW5kZWQ8c3RyaW5nPixcclxuICAgIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC10ZW1wbGF0ZS1hcmVhcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IE9uZU9yTWFueTxJUXVvdGVkUHJveHk+IHxcclxuICAgIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbltdO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYSBzaW5nbGUgdGVtcGxhdGUgZWxlbWVudCBkZWZpbmluZyBuYW1lIG9yIG5hbWVzIGZvciBhIGdyaWQgbGluZSBpbiBncmlkIHRlbXBsYXRlLlxyXG4gKiBUaGlzIGlzIGFsd2F5cyBhbiBhcnJheSAtIGV2ZW4gaWYgYSBzaW5nbGUgbmFtZSBpcyBnaXZlbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUcmFja0xpbmUgPSAoSUdyaWRMaW5lUnVsZSB8IEV4dGVuZGVkPHN0cmluZz4pW107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgdHJhY2sgZWxlbWVudCBvZiBncmlkIHRlbXBsYXRlIGF4aXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRyYWNrID0gR3JpZFRyYWNrU2l6ZSB8IEdyaWRUcmFja0xpbmU7XHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIGFuZCBncmlkLXRlbXBsYXRlLXJvd3Mgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgT25lT3JNYW55PEdyaWRUcmFjaz4gfCBcInN1YmdyaWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGh5cGhlbnMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSHlwaGVuc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwibWFudWFsXCIgfCBcImF1dG9cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGltYWdlLXJlbmRlcmluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBJbWFnZVJlbmRlcmluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiY3Jpc3AtZWRnZXNcIiB8IFwicGl4ZWxhdGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBpc29sYXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSXNvbGF0aW9uX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJpc29sYXRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSnVzdGlmeUNvbnRlbnRfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3BhY2UtYmV0d2VlblwiIHwgXCJzcGFjZS1hcm91bmRcIiB8IFwic3BhY2UtZXZlbmx5XCIgfCBcInN0cmV0Y2hcIiB8XHJcbiAgICBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfFxyXG4gICAgXCJzYWZlIGNlbnRlclwiIHwgXCJzYWZlIHN0YXJ0XCIgfCBcInNhZmUgZW5kXCIgfCBcInNhZmUgZmxleC1zdGFydFwiIHwgXCJzYWZlIGZsZXgtZW5kXCIgfCBcInNhZmUgbGVmdFwiIHwgXCJzYWZlIHJpZ2h0XCIgfFxyXG4gICAgXCJ1bnNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBzdGFydFwiIHwgXCJ1bnNhZmUgZW5kXCIgfCBcInVuc2FmZSBmbGV4LXN0YXJ0XCIgfCBcInVuc2FmZSBmbGV4LWVuZFwiIHwgXCJ1bnNhZmUgbGVmdFwiIHwgXCJ1bnNhZmUgcmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGp1c3RpZnktaXRlbXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSnVzdGlmeUl0ZW1zX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHxcclxuICAgIFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJzZWxmLXN0YXJ0XCIgfCBcInNlbGYtZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHxcclxuICAgIFwic2FmZSBjZW50ZXJcIiB8IFwic2FmZSBzdGFydFwiIHwgXCJzYWZlIGVuZFwiIHwgXCJzYWZlIHNlbGYtc3RhcnRcIiB8IFwic2FmZSBzZWxmLWVuZFwiIHwgXCJzYWZlIGZsZXgtc3RhcnRcIiB8IFwic2FmZSBmbGV4LWVuZFwiIHwgXCJzYWZlIGxlZnRcIiB8IFwic2FmZSByaWdodFwiIHxcclxuICAgIFwidW5zYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgc3RhcnRcIiB8IFwidW5zYWZlIGVuZFwiIHwgXCJ1bnNhZmUgc2VsZi1zdGFydFwiIHwgXCJ1bnNhZmUgc2VsZi1lbmRcIiB8IFwidW5zYWZlIGZsZXgtc3RhcnRcIiB8IFwidW5zYWZlIGZsZXgtZW5kXCIgfCBcInVuc2FmZSBsZWZ0XCIgfCBcInVuc2FmZSByaWdodFwiIHxcclxuICAgIFwibGVnYWN5XCIgfCBcImxlZ2FjeSBsZWZ0XCIgfCBcImxlZ2FjeSByaWdodFwiIHwgXCJsZWdhY3kgY2VudGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBqdXN0aWZ5LXNlbGYgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSnVzdGlmeVNlbGZfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8XHJcbiAgICBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwic2VsZi1zdGFydFwiIHwgXCJzZWxmLWVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8XHJcbiAgICBcInNhZmUgY2VudGVyXCIgfCBcInNhZmUgc3RhcnRcIiB8IFwic2FmZSBlbmRcIiB8IFwic2FmZSBzZWxmLXN0YXJ0XCIgfCBcInNhZmUgc2VsZi1lbmRcIiB8IFwic2FmZSBmbGV4LXN0YXJ0XCIgfCBcInNhZmUgZmxleC1lbmRcIiB8IFwic2FmZSBsZWZ0XCIgfCBcInNhZmUgcmlnaHRcIiB8XHJcbiAgICBcInVuc2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIHN0YXJ0XCIgfCBcInVuc2FmZSBlbmRcIiB8IFwidW5zYWZlIHNlbGYtc3RhcnRcIiB8IFwidW5zYWZlIHNlbGYtZW5kXCIgfCBcInVuc2FmZSBmbGV4LXN0YXJ0XCIgfCBcInVuc2FmZSBmbGV4LWVuZFwiIHwgXCJ1bnNhZmUgbGVmdFwiIHwgXCJ1bnNhZmUgcmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxldHRlci1zcGFjaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExldHRlclNwYWNpbmdfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpbmUtYnJlYWsgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGluZUJyZWFrX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJsb29zZVwiIHwgXCJub3JtYWxcIiB8IFwic3RyaWN0XCIgfCBcImFueXdoZXJlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaW5lLWhlaWdodCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaW5lSGVpZ2h0X1N0eWxlVHlwZSA9IENzc051bWJlciB8IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpc3Qtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGlzdFN0eWxlX1N0eWxlVHlwZSA9IExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlIHwgTGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlIHwgTGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlIHxcclxuICAgIFtFeHRlbmRlZDxMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGU+XSB8XHJcbiAgICBbRXh0ZW5kZWQ8TGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+P10gfFxyXG4gICAgW0V4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlPl0gfFxyXG4gICAgW0V4dGVuZGVkPExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGluZS1zdHlsZS1pbWFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IElVcmxQcm94eTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpc3Qtc3R5bGUtcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlID0gXCJpbnNpZGVcIiB8IFwib3V0c2lkZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGlzdC1zdHlsZS10eXBlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImRpc2NcIiB8IFwiY2lyY2xlXCIgfCBcInNxdWFyZVwiIHwgXCJkZWNpbWFsXCIgfCBcImRlY2ltYWwtbGVhZGluZy16ZXJvXCIgfFxyXG4gICAgXCJjamstZGVjaW1hbFwiIHwgXCJjamstZWFydGhseS1icmFuY2hcIiB8IFwiY2prLWhlYXZlbmx5LXN0ZW1cIiB8IFwiY2prLWlkZW9ncmFwaGljXCIgfFxyXG4gICAgXCJsb3dlci1yb21hblwiIHwgXCJ1cHBlci1yb21hblwiIHwgXCJsb3dlci1ncmVla1wiIHwgXCJsb3dlci1hbHBoYVwiIHwgXCJsb3dlci1sYXRpblwiIHwgXCJ1cHBlci1hbHBoYVwiIHwgXCJ1cHBlci1sYXRpblwiIHxcclxuICAgIFwiYXJhYmljLWluZGljXCIgfCBcImFybWVuaWFuXCIgfCBcImJlbmdhbGlcIiB8IFwiY2FtYm9kaWFuXCIgfCBcImRldmFuYWdhcmlcIiB8IFwiZ2VvcmdpYW5cIiB8IFwiZ3VqYXJhdGlcIiB8IFwiZ3VybXVraGlcIiB8IFwiaGVicmV3XCIgfFxyXG4gICAgXCJoaXJhZ2FuYVwiIHwgXCJoaXJhZ2FuYS1pcm9oYVwiIHwgXCJqYXBhbmVzZS1mb3JtYWxcIiB8IFwiamFwYW5lc2UtaW5mb3JtYWxcIiB8IFwia2FubmFkYVwiIHwgXCJrYXRha2FuYVwiIHwgXCJrYXRha2FuYS1pcm9oYVwiIHxcclxuICAgIFwia2htZXJcIiB8IFwia29yZWFuLWhhbmd1bC1mb3JtYWxcIiB8IFwia29yZWFuLWhhbmphLWZvcm1hbFwiIHwgXCJrb3JlYW4taGFuamEtaW5mb3JtYWxcIiB8IFwibGFvXCIgfCBcImxvd2VyLWFybWVuaWFuXCIgfFxyXG4gICAgXCJtYWxheWFsYW1cIiB8IFwibW9uZ29saWFuXCIgfCBcIm15YW5tYXJcIiB8IFwib3JpeWFcIiB8IFwicGVyc2lhblwiIHwgXCJzaW1wLWNoaW5lc2UtZm9ybWFsXCIgfCBcInNpbXAtY2hpbmVzZS1pbmZvcm1hbFwiIHxcclxuICAgIFwidGFtaWxcIiB8IFwidGVsdWd1XCIgfCBcInRoYWlcIiB8IFwidGliZXRhblwiIHwgXCJ0cmFkLWNoaW5lc2UtZm9ybWFsXCIgfCBcInRyYWQtY2hpbmVzZS1pbmZvcm1hbFwiIHwgXCJ1cHBlci1hcm1lbmlhblwiIHxcclxuICAgIFwiZGlzY2xvc3VyZS1vcGVuXCIgfCBcImRpc2Nsb3N1cmUtY2xvc2VkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgbWFya2VyLXN0YXJ0LCBtYXJrZXItbWlkIGFuZCBtYXJrZXItZW5kIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgTWFya2VyX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgSUlEUnVsZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvYmplY3QtZml0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9iamVjdEZpdF9TdHlsZVR5cGUgPSBcImZpbGxcIiB8IFwiY29udGFpblwiIHwgXCJjb3ZlclwiIHwgXCJub25lXCIgfCBcInNjYWxlLWRvd25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvZmZzZXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2Zmc2V0X1N0eWxlVHlwZSA9IHN0cmluZyB8IE9mZnNldFBhdGhfU3R5bGVUeXBlIHxcclxue1xyXG4gICAgYW5jaG9yPzogT2Zmc2V0QW5jaG9yX1N0eWxlVHlwZSxcclxuICAgIGRpc3RhbmNlPzogQ3NzTGVuZ3RoLFxyXG4gICAgcGF0aD86IE9mZnNldFBhdGhfU3R5bGVUeXBlLFxyXG4gICAgcG9zaXRpb24/OiBDc3NQb3NpdGlvbixcclxuICAgIHJvdGF0ZT86IE9mZnNldFJvdGF0ZV9TdHlsZVR5cGUsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvZmZzZXQtYW5jaG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9mZnNldEFuY2hvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc1Bvc2l0aW9uO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igb2Zmc2V0LXBhdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2Zmc2V0UGF0aF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IElSYXlQcm94eSB8IElVcmxQcm94eSB8IEJhc2ljU2hhcGUgfCBHZW9tZXRyeUJveEtleXdvcmQgfFxyXG4gICAgW0dlb21ldHJ5Qm94S2V5d29yZCwgQmFzaWNTaGFwZV07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb2Zmc2V0LXJvdGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPZmZzZXRSb3RhdGVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInJldmVyc2VcIiB8IENzc0FuZ2xlIHwgW1wiYXV0b1wiIHwgXCJyZXZlcnNlXCIsIENzc0FuZ2xlXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyZmxvdy14L3kgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZSA9IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIiB8IFwiY2xpcFwiIHwgXCJzY3JvbGxcIiB8IFwiYXV0b1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyZmxvdy0gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcmZsb3dfU3R5bGVUeXBlID0gT25lT3JQYWlyPE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LWFuY2hvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd0FuY2hvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LXdyYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcmZsb3dXcmFwX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImJyZWFrLXdvcmRcIiB8IFwiYW55d2hlcmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyc2Nyb2xsLWJlaGF2aW9yLXgveSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZSA9IFwiY29udGFpblwiIHwgXCJub25lXCIgfCBcImF1dG9cIjtcclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcnNjcm9sbC1iZWhhdmlvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyc2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlID0gT25lT3JQYWlyPE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwYWludC1vcmRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQYWludE9yZGVyX0tleXdvcmQgPSBcImZpbGxcIiB8IFwic3Ryb2tlXCIgfCBcIm1hcmtlcnNcIjtcclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGFpbnQtb3JkZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGFpbnRPcmRlcl9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgUGFpbnRPcmRlcl9LZXl3b3JkIHxcclxuICAgIFtQYWludE9yZGVyX0tleXdvcmQsIFBhaW50T3JkZXJfS2V5d29yZD8sIFBhaW50T3JkZXJfS2V5d29yZD9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBlcnNwZWN0aXZlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBlcnNwZWN0aXZlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBlcnNwZWN0aXZlLW9yaWdpbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQZXJzcGVjdGl2ZU9yaWdpbl9TdHlsZVR5cGUgPSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGggfFxyXG4gICAgW0V4dGVuZGVkPEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGg+LCBFeHRlbmRlZDxWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBsYWNlLWNvbnRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGxhY2VDb250ZW50X1N0eWxlVHlwZSA9IEFsaWduQ29udGVudF9TdHlsZVR5cGUgfCBbRXh0ZW5kZWQ8QWxpZ25Db250ZW50X1N0eWxlVHlwZT4sIEV4dGVuZGVkPEp1c3RpZnlDb250ZW50X1N0eWxlVHlwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBsYWNlLWl0ZW1zIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBsYWNlSXRlbXNfU3R5bGVUeXBlID0gQWxpZ25JdGVtc19TdHlsZVR5cGUgfCBbRXh0ZW5kZWQ8QWxpZ25JdGVtc19TdHlsZVR5cGU+LCBFeHRlbmRlZDxKdXN0aWZ5SXRlbXNfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGxhY2Utc2VsZiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQbGFjZVNlbGZfU3R5bGVUeXBlID0gQWxpZ25TZWxmX1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxBbGlnblNlbGZfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8SnVzdGlmeVNlbGZfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcG9pbnRlci1ldmVudHMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUG9pbnRlckV2ZW50c19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiIHwgXCJ2aXNpYmxlUGFpbnRlZFwiIHwgXCJ2aXNpYmxlRmlsbFwiIHwgXCJ2aXNpYmxlU3Ryb2tlXCIgfCBcInZpc2libGVcIiB8XHJcbiAgICBcInBhaW50ZWRcIiB8IFwiZmlsbFwiIHwgXCJzdHJva2VcIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUG9zaXRpb25fU3R5bGVUeXBlID0gXCJzdGF0aWNcIiB8IFwicmVsYXRpdmVcIiB8IFwiYWJzb2x1dGVcIiB8IFwic3RpY2t5XCIgfCBcImZpeGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcXVvdGVzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFF1b3Rlc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYXV0b1wiIHwgRXh0ZW5kZWQ8c3RyaW5nPltdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHJlc2l6ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBSZXNpemVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImJvdGhcIiB8IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiIHwgXCJibG9ja1wiIHwgXCJpbmxpbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHJvdGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBSb3RhdGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBbXCJ4XCIgfCBcInlcIiB8IFwielwiLCBFeHRlbmRlZDxDc3NBbmdsZT5dIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NBbmdsZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igcm93LWdhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBSb3dHYXBfU3R5bGVUeXBlID0gQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjYWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjYWxlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgQ3NzTnVtYmVyIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+PywgRXh0ZW5kZWQ8Q3NzTnVtYmVyPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbGJhci1jb2xvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxiYXJDb2xvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiZGFya1wiIHwgXCJsaWdodFwiIHxcclxuICAgIFtFeHRlbmRlZDxDc3NDb2xvcj4sIEV4dGVuZGVkPENzc0NvbG9yPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsYmFyLXdpZHRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbGJhcldpZHRoX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJ0aGluXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGwtYmVoYXZpb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInNtb290aFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbC1zbmFwLWFsaWduIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbFNuYXBBbGlnbl9TdHlsZVR5cGUgPSBPbmVPclBhaXI8XCJub25lXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJjZW50ZXJcIj47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsLXNuYXAtc3RvcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxTbmFwU3RvcF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJhbHdheXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGwtc25hcC10eXBlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbFNuYXBUeXBlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHxcclxuICAgIFtFeHRlbmRlZDxcInhcIiB8IFwieVwiIHwgXCJibG9ja1wiIHwgXCJpbmxpbmVcIiB8IFwiYm90aFwiPiwgRXh0ZW5kZWQ8XCJtYW5kYXRvcnlcIiB8IFwicHJveGltaXR5XCI+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNoYXBlLW91dHNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVPdXRzaWRlX1N0eWxlVHlwZSA9IElVcmxQcm94eSB8IEJhc2ljU2hhcGUgfCBHZW9tZXRyeUJveEtleXdvcmQgfCBDc3NJbWFnZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzaGFwZS1yZW5kZXJpbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSZW5kZXJpbmdfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm9wdGltaXplU3BlZWRcIiB8IFwiY3Jpc3BFZGdlc1wiIHwgXCJnZW9tZXRyaWNQcmVjaXNpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0YWJsZS1sYXlvdXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGFibGVMYXlvdXRfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImZpeGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1hbGlnbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0QWxpZ25fU3R5bGVUeXBlID0gXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIiB8IFwianVzdGlmeVwiIHwgXCJtYXRjaC1wYXJlbnRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWFsaWduLWxhc3Qgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEFsaWduTGFzdF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCIgfCBcImp1c3RpZnlcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWFuY2hvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0QW5jaG9yX1N0eWxlVHlwZSA9IFwic3RhcnRcIiB8IFwibWlkZGxlXCIgfCBcImVuZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtY29tYmluZS11cHJpZ2h0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRDb21iaW5lVXByaWdodF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYWxsXCIgfCBcImRpZ2l0c1wiIHwgbnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbiBzdHlsZSBwcm9wZXJ0eS4gSWYgYSBudW1iZXIgaXMgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGludGVycHJldGVkXHJcbiAqIGFzIGNvbG9yIC0gbm90IGFzIHRoaWNrbmVzcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZSA9IFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGUgfCBUZXh0RGVjb3JhdGlvblN0eWxlX1N0eWxlVHlwZSB8XHJcbiAgICBDc3NDb2xvciB8IFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZSB8XHJcbiAgICB7XHJcbiAgICAgICAgbGluZT86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHN0eWxlPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIHRoaWNrbmVzcz86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZT4sXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbi1saW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwic3BlbGxpbmctZXJyb3JcIiB8IFwiZ3JhbW1hci1lcnJvclwiIHxcclxuICAgIE9uZU9yTWFueTxcInVuZGVybGluZVwiIHwgXCJvdmVybGluZVwiIHwgXCJsaW5lLXRocm91Z2hcIj47IFxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbi1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvblN0eWxlX1N0eWxlVHlwZSA9IFwic29saWRcIiB8IFwiZG91YmxlXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIiB8IFwid2F2eVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbi1za2lwLWluayBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvblNraXBJbmtfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImF1dG9cIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvblRoaWNrbmVzc19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiZnJvbS1mb250XCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8vIC8qKiBUeXBlIGZvciB0aGUgdGV4dC1lbXBoYXNpcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNfU3R5bGVUeXBlID0gVGV4dEVtcGhhc2lzU3R5bGVfU3R5bGVUeXBlIHwgQ3NzQ29sb3IgfFxyXG4gICAgW0V4dGVuZGVkPFRleHRFbXBoYXNpc1N0eWxlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPENzc0NvbG9yPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1lbXBoYXNpcy1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNQb3NpdGlvbl9TdHlsZVR5cGUgPSBcIm92ZXIgbGVmdFwiIHwgXCJvdmVyIHJpZ2h0XCIgfCBcInVuZGVyIGxlZnRcIiB8IFwidW5kZXIgcmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFNoYXBlIGZvciB0aGUgdGV4dC1lbXBoYXNpcy1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNTaGFwZSA9IFwiZG90XCIgfCBcImNpcmNsZVwiIHwgXCJkb3VibGUtY2lyY2xlXCIgfCBcInRyaWFuZ2xlXCIgfCBcInNlc2FtZVwiIHwgc3RyaW5nO1xyXG5cclxuLyoqIEZpbGwgb3B0aW9uIGZvciB0aGUgdGV4dC1lbXBoYXNpcy1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNGaWxsID0gXCJmaWxsZWRcIiB8IFwib3BlblwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc1N0eWxlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgVGV4dEVtcGhhc2lzRmlsbCB8IFRleHRFbXBoYXNpc1NoYXBlIHxcclxuICAgIFtFeHRlbmRlZDxUZXh0RW1waGFzaXNGaWxsPiwgRXh0ZW5kZWQ8VGV4dEVtcGhhc2lzU2hhcGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWluZGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0SW5kZW50X1N0eWxlVHlwZSA9IENzc0xlbmd0aCB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8T25lT3JNYW55PFwiZWFjaC1saW5lXCIgfCBcImhhbmdpbmdcIiB8IFwiZWFjaC1saW5lIGhhbmdpbmdcIj4+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWp1c3RpZnkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEp1c3RpZnlfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImludGVyLWNoYXJhY3RlclwiIHwgXCJpbnRlci13b3JkXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LW9yaWVudGF0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRPcmllbnRhdGlvbl9TdHlsZVR5cGUgPSBcIm1peGVkXCIgfCBcInVwcmlnaHRcIiB8IFwic2lkZXdheXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LW92ZXJmbG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRPdmVyZmxvd19TdHlsZVR5cGUgPSBPbmVPclBhaXI8XCJjbGlwXCIgfCBcImVsbGlwc2lzXCIgfCBcImZhZGVcIiB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2luZ2xlIHZhbHVlIG9mIHRoZSB0ZXh0LXNoYWRvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0U2hhZG93X1NpbmdsZSA9IFwibm9uZVwiIHwgc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgYmx1cj86IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LXNoYWRvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0U2hhZG93X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUZXh0U2hhZG93X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1zaXplLWFkanVzdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0U2l6ZUFkanVzdF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYXV0b1wiIHwgQ3NzUGVyY2VudDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LXRyYW5zZm9ybSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0VHJhbnNmb3JtX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJjYXBpdGFsaXplXCIgfCBcInVwcGVyY2FzZVwiIHwgXCJsb3dlcmNhc2VcIiB8IFwiZnVsbC13aWR0aFwiIHwgXCJmdWxsLXNpemUta2FuYVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRVbmRlcmxpbmVQb3NpdGlvbl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidW5kZXJcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJhdXRvLXBvc1wiIHwgXCJhYm92ZVwiIHwgXCJiZWxvd1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRvdWNoLWFjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUb3VjaEFjdGlvbl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiIHwgXCJtYW5pcHVsYXRpb25cIiB8XHJcbiAgICBcInBhbi14XCIgfCBcInBhbi1sZWZ0XCIgfCBcInBhbi1yaWdodFwiIHwgXCJwYW4teVwiIHwgXCJwYW4tdXBcIiB8IFwicGFuLWRvd25cIiB8IFwicGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXggcGluY2gtem9vbVwiIHwgXCJwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi1yaWdodCBwaW5jaC16b29tXCIgfCBcInBhbi15IHBpbmNoLXpvb21cIiB8IFwicGFuLXVwIHBpbmNoLXpvb21cIiB8IFwicGFuLWRvd24gcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXggcGFuLXlcIiB8IFwicGFuLXggcGFuLXkgcGluY2gtem9vbVwiIHwgXCJwYW4teCBwYW4tdXBcIiB8IFwicGFuLXggcGFuLXVwIHBpbmNoLXpvb21cIiB8IFwicGFuLXggcGFuLWRvd25cIiB8IFwicGFuLXggcGFuLWRvd24gcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXkgcGFuLWxlZnRcIiB8IFwicGFuLXkgcGFuLWxlZnQgcGluY2gtem9vbVwiIHwgXCJwYW4teSBwYW4tcmlnaHRcIiB8IFwicGFuLXkgcGFuLXJpZ2h0IHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi1sZWZ0IHBhbi11cFwiIHwgXCJwYW4tbGVmdCBwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4tbGVmdCBwYW4tZG93blwiIHwgXCJwYW4tbGVmdCBwYW4tZG93biBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4tcmlnaHQgcGFuLXVwXCIgfCBcInBhbi1yaWdodCBwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4tcmlnaHQgcGFuLWRvd25cIiB8IFwicGFuLXJpZ2h0IHBhbi1kb3duIHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi11cCBwYW4tbGVmdFwiIHwgXCJwYW4tdXAgcGFuLWxlZnQgcGluY2gtem9vbVwiIHwgXCJwYW4tdXAgcGFuLXJpZ2h0XCIgfCBcInBhbi11cCBwYW4tcmlnaHQgcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLWRvd24gcGFuLWxlZnRcIiB8IFwicGFuLWRvd24gcGFuLWxlZnQgcGluY2gtem9vbVwiIHwgXCJwYW4tZG93biBwYW4tcmlnaHRcIiB8IFwicGFuLWRvd24gcGFuLXJpZ2h0IHBpbmNoLXpvb21cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1fU3R5bGVUeXBlID0gXCJub25lXCIgfCBzdHJpbmcgfCBPbmVPck1hbnk8SVRyYW5zZm9ybVByb3h5PjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybS1ib3ggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtQm94X1N0eWxlVHlwZSA9IFwiY29udGVudC1ib3hcIiB8IFwiYm9yZGVyLWJveFwiIHwgXCJmaWxsLWJveFwiIHwgXCJzdHJva2UtYm94XCIgfCBcInZpZXctYm94XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2Zvcm0tb3JpZ2luIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybU9yaWdpbl9TdHlsZVR5cGUgPSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGggfFxyXG4gICAgW0V4dGVuZGVkPEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGg+LCBFeHRlbmRlZDxWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybS1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1TdHlsZV9TdHlsZVR5cGUgPSBcImZsYXRcIiB8IFwicHJlc2VydmUtM2RcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSB0cmFuc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25fU2luZ2xlID0gc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICBwcm9wZXJ0eT86IEV4dGVuZGVkPFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGU+O1xyXG4gICAgICAgIGR1cmF0aW9uPzogRXh0ZW5kZWQ8Q3NzVGltZT47XHJcbiAgICAgICAgZnVuYz86IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT47XHJcbiAgICAgICAgZGVsYXk/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUcmFuc2l0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgdHJhbnNpdGlvbi1wcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uUHJvcGVydHlfU2luZ2xlID0gXCJub25lXCIgfCBcImFsbFwiIHwga2V5b2YgSUNzc1N0eWxlc2V0O1xyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zaXRpb24tcHJvcGVydHkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblByb3BlcnR5X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUcmFuc2l0aW9uUHJvcGVydHlfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8VGltaW5nRnVuY3Rpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0cmFuc2xhdGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNsYXRlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgQ3NzTGVuZ3RoIHxcclxuICAgIFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdW5pY29kZS1iaWRpIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFVuaWNvZGVCaWRpX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImVtYmVkXCIgfCBcImlzb2xhdGVcIiB8IFwiYmlkaS1vdmVycmlkZVwiIHwgXCJpc29sYXRlLW92ZXJyaWRlXCIgfCBcInBsYWludGV4dFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHVzZXItc2VsZWN0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFVzZXJTZWxlY3RfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInRleHRcIiB8IFwibm9uZVwiIHwgXCJjb250YWluXCIgfCBcImFsbFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHZlcnRpY2FsLWFsaWduIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFZlcnRpY2FsQWxpZ25fU3R5bGVUeXBlID0gXCJiYXNlbGluZVwiIHwgXCJzdWJcIiB8IFwic3VwZXJcIiB8IFwidGV4dC10b3BcIiB8IFwidGV4dC1ib3R0b21cIiB8XHJcbiAgICBcIm1pZGRsZVwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdmlzaWJpbGl0eSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBWaXNpYmlsaXR5X1N0eWxlVHlwZSA9IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIiB8IFwiY29sbGFwc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB2ZWN0b3ItZWZmZWN0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFZlY3RvckVmZmVjdF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwibm9uLXNjYWxpbmctc3Ryb2tlXCIgfCBcIm5vbi1zY2FsaW5nLXNpemVcIiB8IFwibm9uLXJvdGF0aW9uXCIgfCBcImZpeGVkLXBvc2l0aW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgd2hpdGUtc3BhY2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV2hpdGVTcGFjZV9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJwcmVcIiB8IFwibm93cmFwXCIgfCBcInByZS13cmFwXCIgfCBcInByZS1saW5lXCIgfCBcImJyZWFrLXNwYWNlc1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igd2lsbC1jaGFuZ2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV2lsbENoYW5nZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IE9uZU9yTWFueTxcInNjcm9sbC1wb3NpdGlvblwiIHwgXCJjb250ZW50c1wiIHwgRXhjbHVkZTxrZXlvZiBJQ3NzU3R5bGVzZXQsXCJ3aWxsQ2hhbmdlXCI+PjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB3b3JkLWJyZWFrIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdvcmRCcmVha19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJicmVhay1hbGxcIiB8IFwia2VlcC1hbGxcIiB8IFwiYnJlYWstd29yZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHdvcmQtc3BhY2luZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXb3JkU3BhY2luZ19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHdyaXRpbmctbW9kZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXcml0aW5nTW9kZV9TdHlsZVR5cGUgPSBcImhvcml6b250YWwtdGJcIiB8IFwidmVydGljYWwtcmxcIiB8IFwidmVydGljYWwtbHJcIiB8IFwic2lkZXdheXMtcmxcIiB8IFwic2lkZXdheXMtbHJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB6LWluZGV4IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFpJbmRleF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc051bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB6b29tIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFpvb21fU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwicmVzZXRcIiB8IENzc1BlcmNlbnQ7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzdHlsZSBwcm9wZXJ0aWVzIGZvciB3aGljaCB0aGVyZSBpcyBubyBzcGVjaWFsIHR5cGUgZGVmaW5lZC4gKi9cclxuZXhwb3J0IHR5cGUgRGVmYXVsdFN0eWxlVHlwZSA9IHN0cmluZztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3h5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGZpbHRlcj5gIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlclByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImZpbHRlclwiPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYDxiYXNpYy1zaGFwZT5gIGZ1bmN0aW9uc1xyXG4gKiBleGNlcHQgdGhlIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzaWNTaGFwZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImJhc2ljLXNoYXBlXCI+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCYXNpY1NoYXBlVHlwZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYDxiYXNpYy1zaGFwZT5gIGZ1bmN0aW9ucyBpbmNsdWRpbmdcclxuICogdGhlIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQmFzaWNTaGFwZSA9IElCYXNpY1NoYXBlUHJveHkgfCBJUGF0aEJ1aWxkZXI7XHJcblxyXG4vKipcclxuICogVGhlIElSYXlQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYHJheSgpYCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSYXlQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJyYXlcIj4ge307XHJcblxyXG4vKipcclxuICogVGhlIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYDxiYXNpYy1zaGFwZT5gIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zZm9ybVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInRyYW5zZm9ybVwiPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1pbk1heFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgbWlubWF4KCkgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1pbk1heFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcIm1pbm1heFwiPiB7fVxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRml0Q29udGVudFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgZml0LWNvbnRlbnQoKSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRml0Q29udGVudFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImZpdC1jb250ZW50XCI+IHt9XHJcblxyXG4vKipcclxuICogVGhlIElSZXBlYXRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIHJlcGVhdCgpIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSZXBlYXRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJyZXBlYXRcIj4ge31cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNwYW5Qcm94eSBmdW5jdGlvbiBwcm9kdWNlcyB0aGUgc3BhbiBleHByZXNzaW9uIGZvciBncmlkIGxheW91dHNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNwYW5Qcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJzcGFuXCI+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhdGhCdWlsZGVyIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvYmplY3QgdGhhdCBhY2N1bXVsYXRlcyBwYXRoIGNvbW1hbmRzIHRoYXQgYXJlIHRoZW5cclxuICogY29udmVydGVkIHRvIGEgc3RyaW5nIHBhcmFtZXRlciBvZiB0aGUgQ1NTIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGF0aEJ1aWxkZXJcclxue1xyXG4gICAgLy8gTW92ZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcbiAgICBNKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBNb3ZlLXRvIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuICAgIG0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIExpbmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIExpbmUtdG8gY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG4gICAgbCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRIKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBIb3Jpem9udGFsIGxpbmUtdG8gY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG4gICAgaCggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gVmVydGljYWwgbGluZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0ViggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gVmVydGljYWwgbGluZS10byBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcbiAgICB2KCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBDdWJpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0YyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gU21vb3RoIGN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0UyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFNtb290aCBjdWJpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG5cdHMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBRdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRRKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gUXVhZHJhdGljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0cSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFNtb290aCBxdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRUKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBTbW9vdGggcXVhZHJhdGljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0dCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gRWxsaXB0aWNhbCBhcmMgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gRWxsaXB0aWNhbCBhcmMgY3VydmUgY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG5cdGEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gQ2xvc2UtcGF0aCBjb21tYW5kLlxyXG4gICAgeigpOiBJUGF0aEJ1aWxkZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0eWxlc2V0IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgcmVwcmVzZW50aW5nIGEgY29sbGVjdGlvbiBvZiBidWlsdC1pbiBzdHlsZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NTdHlsZXNldFxyXG57XHJcbiAgICBhbGw/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgYWxpZ25Db250ZW50PzogQWxpZ25Db250ZW50X1N0eWxlVHlwZTtcclxuICAgIGFsaWduSXRlbXM/OiBBbGlnbkl0ZW1zX1N0eWxlVHlwZTtcclxuICAgIGFsaWduU2VsZj86IEFsaWduU2VsZl9TdHlsZVR5cGU7XHJcbiAgICBhbGlnbm1lbnRCYXNlbGluZT86IEFsaWdubWVudEJhc2VsaW5lX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbj86IEFuaW1hdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EZWxheT86IEFuaW1hdGlvbkRlbGF5X1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkRpcmVjdGlvbj86IEFuaW1hdGlvbkRpcmVjdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EdXJhdGlvbj86IEFuaW1hdGlvbkR1cmF0aW9uX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlPzogQW5pbWF0aW9uRmlsbE1vZGVfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ/OiBBbmltYXRpb25JdGVyYXRpb25Db3VudF9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25OYW1lPzogQW5pbWF0aW9uTmFtZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU/OiBBbmltYXRpb25QbGF5U3RhdGVfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24/OiBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9TdHlsZVR5cGU7XHJcblxyXG4gICAgYmFja2Ryb3BGaWx0ZXI/OiBGaWx0ZXJfU3R5bGVUeXBlO1xyXG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5PzogQmFja2ZhY2VWaXNpYmlsaXR5TW9kZV9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kPzogQmFja2dyb3VuZF9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudD86IEJhY2tncm91bmRBdHRhY2htZW50X1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRCbGVuZE1vZGU/OiBCYWNrZ3JvdW5kQmxlbmRNb2RlX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRDbGlwPzogQmFja2dyb3VuZENsaXBfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U/OiBCYWNrZ3JvdW5kSW1hZ2VfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZE9yaWdpbj86IEJhY2tncm91bmRPcmlnaW5fU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uPzogQmFja2dyb3VuZFBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvblg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0PzogQmFja2dyb3VuZFJlcGVhdF9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0WD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0WT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZT86IEJhY2tncm91bmRTaXplX1N0eWxlVHlwZTtcclxuICAgIGJhc2VsaW5lU2hpZnQ/OiBCYXNlbGluZVNoaWZ0X1N0eWxlVHlwZTtcclxuICAgIGJsb2NrU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIGJvcmRlcj86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCbG9ja0VuZD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCbG9ja0VuZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJCbG9ja0VuZFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlckJsb2NrRW5kV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyQmxvY2tTdGFydFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckJvdHRvbT86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCb3R0b21Db2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz86IENzc1JhZGl1cztcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyQm90dG9tU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJDb2xsYXBzZT86IEJvcmRlckNvbGFwc2VfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQ29sb3I/OiBCb3JkZXJDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZT86IEJvcmRlckltYWdlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlT3V0c2V0PzogQm9yZGVySW1hZ2VPdXRzZXRfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VSZXBlYXQ/OiBCb3JkZXJJbWFnZVJlcGVhdF9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVNsaWNlPzogQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVNvdXJjZT86IEJvcmRlckltYWdlU291cmNlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlV2lkdGg/OiBCb3JkZXJJbWFnZVdpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlcklubGluZUVuZD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVySW5saW5lRW5kU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJJbmxpbmVTdGFydD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0V2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJMZWZ0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckxlZnRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyTGVmdFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlckxlZnRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlclJhZGl1cz86IEJvcmRlclJhZGl1c19TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJSaWdodD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJSaWdodENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJSaWdodFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlclJpZ2h0V2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJTcGFjaW5nPzogQm9yZGVyU3BhY2luZ19TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJTdHlsZT86IEJvcmRlclN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJUb3BDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1cz86IENzc1JhZGl1cztcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyVG9wU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyVG9wV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJXaWR0aD86IEJvcmRlcldpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIGJveFNoYWRvdz86IEJveFNoYWRvd19TdHlsZVR5cGU7XHJcbiAgICBib3hTaXppbmc/OiBCb3hTaXppbmdfU3R5bGVUeXBlO1xyXG4gICAgYnJlYWtBZnRlcj86IEJyZWFrQWZ0ZXJfU3R5bGVUeXBlO1xyXG4gICAgYnJlYWtCZWZvcmU/OiBCcmVha0JlZm9yZV9TdHlsZVR5cGU7XHJcbiAgICBicmVha0luc2lkZT86IEJyZWFrSW5zaWRlX1N0eWxlVHlwZTtcclxuICAgIGJ1ZmZlcmVkUmVuZGVyaW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuXHJcbiAgICBjYXB0aW9uU2lkZT86IENhcHRpb25TaWRlX1N0eWxlVHlwZTtcclxuICAgIGNhcmV0Q29sb3I/OiBDYXJldENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGNsZWFyPzogQ2xlYXJfU3R5bGVUeXBlO1xyXG4gICAgY2xpcD86IENsaXBfU3R5bGVUeXBlO1xyXG4gICAgY2xpcFBhdGg/OiBDbGlwUGF0aF9TdHlsZVR5cGU7XHJcbiAgICBjbGlwUnVsZT86IENsaXBSdWxlX1N0eWxlVHlwZTtcclxuICAgIGNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBjb2xvckludGVycG9sYXRpb24/OiBDb2xvckludGVycG9sYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz86IENvbG9ySW50ZXJwb2xhdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5Db3VudD86IENvbHVtbkNvdW50X1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbkZpbGw/OiBDb2x1bW5GaWxsX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbkdhcD86IENvbHVtbkdhcF9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5SdWxlPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGVDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgY29sdW1uUnVsZVN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGNvbHVtblJ1bGVXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGNvbHVtblNwYW4/OiBDb2x1bW5TcGFuX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbldpZHRoPzogQ3NzTGVuZ3RoO1xyXG4gICAgY29sdW1ucz86IENvbHVtbnNfU3R5bGVUeXBlO1xyXG4gICAgY29udGFpbj86IENvbnRhaW5fU3R5bGVUeXBlO1xyXG4gICAgY29udGVudD86IENvbnRlbnRfU3R5bGVUeXBlO1xyXG4gICAgY291bnRlckluY3JlbWVudD86IENvdW50ZXJfU3R5bGVUeXBlO1xyXG4gICAgY291bnRlclJlc2V0PzogQ291bnRlcl9TdHlsZVR5cGU7XHJcbiAgICBjb3VudGVyU2V0PzogQ291bnRlcl9TdHlsZVR5cGU7XHJcbiAgICBjdXJzb3I/OiBDdXJzb3JfU3R5bGVUeXBlO1xyXG5cclxuICAgIGRpcmVjdGlvbj86IERpcmVjdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBkaXNwbGF5PzogRGlzcGxheV9TdHlsZVR5cGU7XHJcbiAgICBkb21pbmFudEJhc2VsaW5lPzogRG9taW5hbnRCYXNlbGluZV9TdHlsZVR5cGU7XHJcblxyXG4gICAgZW1wdHlDZWxscz86IEVtcHR5Q2VsbHNfU3R5bGVUeXBlO1xyXG5cclxuICAgIGZpbGw/OiBDc3NDb2xvcjtcclxuICAgIGZpbGxPcGFjaXR5PzogQ3NzUGVyY2VudDtcclxuICAgIGZpbGxSdWxlPzogRmlsbFJ1bGVfU3R5bGVUeXBlO1xyXG4gICAgZmlsdGVyPzogRmlsdGVyX1N0eWxlVHlwZTtcclxuICAgIGZsZXg/OiBGbGV4X1N0eWxlVHlwZTtcclxuICAgIGZsZXhCYXNpcz86IEZsZXhCYXNpc19TdHlsZVR5cGU7XHJcbiAgICBmbGV4RGlyZWN0aW9uPzogRmxleERpcmVjdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBmbGV4Rmxvdz86IEZsZXhGbG93X1N0eWxlVHlwZTtcclxuICAgIGZsZXhHcm93PzogQ3NzTnVtYmVyO1xyXG4gICAgZmxleFNocmluaz86IENzc051bWJlcjtcclxuICAgIGZsZXhXcmFwPzogRmxleFdyYXBfU3R5bGVUeXBlO1xyXG4gICAgZmxvYXQ/OiBGbG9hdF9TdHlsZVR5cGU7XHJcbiAgICBmbG9vZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBmbG9vZE9wYWNpdHk/OiBDc3NQZXJjZW50O1xyXG4gICAgZm9udD86IEZvbnRfU3R5bGVUeXBlO1xyXG4gICAgZm9udEZhbWlseT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250RmVhdHVyZVNldHRpbmdzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRLZXJuaW5nPzogRm9udEtlcm5pbmdfU3R5bGVUeXBlO1xyXG4gICAgZm9udE9wdGljYWxTaXppbmc/OiBGb250T3B0aWNhbFNpemluZ19TdHlsZVR5cGU7XHJcbiAgICBmb250U2l6ZT86IEZvbnRTaXplX1N0eWxlVHlwZTtcclxuICAgIGZvbnRTaXplQWRqdXN0PzogQ3NzTnVtYmVyO1xyXG4gICAgZm9udFN0cmV0Y2g/OiBGb250U3RyZXRjaF9TdHlsZVR5cGU7XHJcbiAgICBmb250U3R5bGU/OiBGb250U3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgZm9udFN5bnRoZXNpcz86IEZvbnRTeW50aGVzaXNfU3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnRDYXBzPzogRm9udFZhcmlhbnRDYXBzX1N0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50TGlnYXR1cmVzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50TnVtZXJpYz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudFBvc2l0aW9uPzogRm9udFZhcmlhbnRQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFdlaWdodD86IEZvbnRXZWlnaHRfU3R5bGVUeXBlO1xyXG5cclxuICAgIGdhcD86IEdhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGdyaWRBcmVhPzogR3JpZEFyZWFfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9Db2x1bW5zPzogR3JpZEF1dG9BeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvRmxvdz86IEdyaWRBdXRvRmxvd19TdHlsZVR5cGU7XHJcbiAgICBncmlkQXV0b1Jvd3M/OiBHcmlkQXV0b0F4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbj86IEdyaWRBeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW5FbmQ/OiBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbkdhcD86IENvbHVtbkdhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uU3RhcnQ/OiBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEdhcD86IEdhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkUm93PzogR3JpZEF4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvd0VuZD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkUm93R2FwPzogUm93R2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dTdGFydD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zPzogR3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGVSb3dzPzogR3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGU7XHJcblxyXG4gICAgaGVpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgaHlwaGVucz86IEh5cGhlbnNfU3R5bGVUeXBlO1xyXG5cclxuICAgIGltYWdlUmVuZGVyaW5nPzogSW1hZ2VSZW5kZXJpbmdfU3R5bGVUeXBlO1xyXG4gICAgaW5saW5lU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIGlzb2xhdGlvbj86IElzb2xhdGlvbl9TdHlsZVR5cGU7XHJcblxyXG4gICAganVzdGlmeUNvbnRlbnQ/OiBKdXN0aWZ5Q29udGVudF9TdHlsZVR5cGU7XHJcbiAgICBqdXN0aWZ5SXRlbXM/OiBKdXN0aWZ5SXRlbXNfU3R5bGVUeXBlO1xyXG4gICAganVzdGlmeVNlbGY/OiBKdXN0aWZ5U2VsZl9TdHlsZVR5cGU7XHJcblxyXG4gICAgbGVmdD86IENzc0xlbmd0aDtcclxuICAgIGxldHRlclNwYWNpbmc/OiBMZXR0ZXJTcGFjaW5nX1N0eWxlVHlwZTtcclxuICAgIGxpZ2h0aW5nQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGxpbmVCcmVhaz86IExpbmVCcmVha19TdHlsZVR5cGU7XHJcbiAgICBsaW5lSGVpZ2h0PzogTGluZUhlaWdodF9TdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGU/OiBMaXN0U3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgbGlzdFN0eWxlSW1hZ2U/OiBMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGVQb3NpdGlvbj86IExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZVR5cGU/OiBMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZTtcclxuXHJcbiAgICBtYXJnaW4/OiBDc3NMZW5ndGhCb3g7XHJcbiAgICBtYXJnaW5CbG9ja0VuZD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbkJsb2NrU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5Cb3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5JbmxpbmVFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5JbmxpbmVTdGFydD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbkxlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5SaWdodD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpblRvcD86IENzc0xlbmd0aDtcclxuICAgIG1hcmtlcj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJFbmQ/OiBNYXJrZXJfU3R5bGVUeXBlO1xyXG4gICAgbWFya2VyTWlkPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hcmtlclN0YXJ0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2s/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza0NvbXBvc2l0ZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrSW1hZ2U/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1Bvc2l0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tSZXBlYXQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1NpemU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1R5cGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWF4QmxvY2tTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWF4SGVpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWF4SW5saW5lU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIG1heFdpZHRoPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluQmxvY2tTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluSGVpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluSW5saW5lU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIG1pbldpZHRoPzogQ3NzTGVuZ3RoO1xyXG5cclxuICAgIG9iamVjdEZpdD86IE9iamVjdEZpdF9TdHlsZVR5cGU7XHJcbiAgICBvYmplY3RQb3NpdGlvbj86IENzc1Bvc2l0aW9uO1xyXG4gICAgb2Zmc2V0PzogT2Zmc2V0X1N0eWxlVHlwZTtcclxuICAgIG9mZnNldEFuY2hvcj86IE9mZnNldEFuY2hvcl9TdHlsZVR5cGVcclxuICAgIG9mZnNldERpc3RhbmNlPzogQ3NzTGVuZ3RoO1xyXG4gICAgb2Zmc2V0UGF0aD86IE9mZnNldFBhdGhfU3R5bGVUeXBlO1xyXG4gICAgb2Zmc2V0UG9zaXRpb24/OiBDc3NQb3NpdGlvbjtcclxuICAgIG9mZnNldFJvdGF0ZT86IE9mZnNldFJvdGF0ZV9TdHlsZVR5cGU7XHJcbiAgICBvcGFjaXR5PzogQ3NzUGVyY2VudDtcclxuICAgIG9yZGVyPzogQ3NzTnVtYmVyO1xyXG4gICAgb3JwaGFucz86IENzc051bWJlcjtcclxuICAgIG91dGxpbmU/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgb3V0bGluZUNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBvdXRsaW5lT2Zmc2V0PzogQ3NzTGVuZ3RoO1xyXG4gICAgb3V0bGluZVN0eWxlPzogQm9yZGVyU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgb3V0bGluZVdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgb3ZlcmZsb3c/OiBPdmVyZmxvd19TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd0FuY2hvcj86IE92ZXJmbG93QW5jaG9yX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93QmxvY2s/OiBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dJbmxpbmU/OiBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dXcmFwPzogT3ZlcmZsb3dXcmFwX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93WD86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd1k/OiBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yPzogT3ZlcnNjcm9sbEJlaGF2aW9yX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvckJsb2NrPzogT3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3JJbmxpbmU/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvclg/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvclk/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuXHJcbiAgICBwYWRkaW5nPzogQ3NzTGVuZ3RoQm94O1xyXG4gICAgcGFkZGluZ0Jsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0Jsb2NrU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nQm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0lubGluZUVuZD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdJbmxpbmVTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdMZWZ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ1JpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ1RvcD86IENzc0xlbmd0aDtcclxuICAgIHBhaW50T3JkZXI/OiBQYWludE9yZGVyX1N0eWxlVHlwZTtcclxuICAgIHBhZ2VCcmVha0FmdGVyPzogQnJlYWtBZnRlcl9TdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtCZWZvcmU/OiBCcmVha0JlZm9yZV9TdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtJbnNpZGU/OiBCcmVha0luc2lkZV9TdHlsZVR5cGU7XHJcbiAgICBwZXJzcGVjdGl2ZT86IFBlcnNwZWN0aXZlX1N0eWxlVHlwZTtcclxuICAgIHBlcnNwZWN0aXZlT3JpZ2luPzogUGVyc3BlY3RpdmVPcmlnaW5fU3R5bGVUeXBlO1xyXG4gICAgcGxhY2VDb250ZW50PzogUGxhY2VDb250ZW50X1N0eWxlVHlwZTtcclxuICAgIHBsYWNlSXRlbXM/OiBQbGFjZUl0ZW1zX1N0eWxlVHlwZTtcclxuICAgIHBsYWNlU2VsZj86IFBsYWNlU2VsZl9TdHlsZVR5cGU7XHJcbiAgICBwb2ludGVyRXZlbnRzPzogUG9pbnRlckV2ZW50c19TdHlsZVR5cGU7XHJcbiAgICBwb3NpdGlvbj86IFBvc2l0aW9uX1N0eWxlVHlwZTtcclxuXHJcbiAgICBxdW90ZXM/OiBRdW90ZXNfU3R5bGVUeXBlO1xyXG5cclxuICAgIHJlc2l6ZT86IFJlc2l6ZV9TdHlsZVR5cGU7XHJcbiAgICByaWdodD86IENzc0xlbmd0aDtcclxuICAgIHJvdGF0ZT86IFJvdGF0ZV9TdHlsZVR5cGU7XHJcbiAgICByb3dHYXA/OiBSb3dHYXBfU3R5bGVUeXBlO1xyXG4gICAgcnVieUFsaWduPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHJ1YnlPdmVyaGFuZz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBydWJ5UG9zaXRpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG5cclxuICAgIHNjYWxlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHNjcm9sbGJhckNvbG9yPzogU2Nyb2xsYmFyQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsYmFyV2lkdGg/OiBTY3JvbGxiYXJXaWR0aF9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxCZWhhdmlvcj86IFNjcm9sbEJlaGF2aW9yX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbE1hcmdpbj86IENzc0xlbmd0aEJveDtcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrPzogQ3NzTGVuZ3RoUGFpcjtcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbkJvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbklubGluZT86IENzc0xlbmd0aFBhaXI7XHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbkxlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5SaWdodD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpblRvcD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmc/OiBDc3NMZW5ndGhCb3g7XHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s/OiBDc3NMZW5ndGhQYWlyO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZT86IENzc0xlbmd0aFBhaXI7XHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0xlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsU25hcEFsaWduPzogU2Nyb2xsU25hcEFsaWduX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbFNuYXBTdG9wPzogU2Nyb2xsU25hcFN0b3BfU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsU25hcFR5cGU/OiBTY3JvbGxTbmFwVHlwZV9TdHlsZVR5cGU7XHJcbiAgICBzaGFwZUltYWdlVGhyZXNob2xkPzogQ3NzTnVtYmVyO1xyXG4gICAgc2hhcGVNYXJnaW4/OiBDc3NMZW5ndGg7XHJcbiAgICBzaGFwZU91dHNpZGU/OiBTaGFwZU91dHNpZGVfU3R5bGVUeXBlO1xyXG4gICAgc2hhcGVSZW5kZXJpbmc/OiBTaGFwZVJlbmRlcmluZ19TdHlsZVR5cGU7XHJcbiAgICBzdG9wQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIHN0b3BPcGFjaXR5PzogQ3NzTnVtYmVyO1xyXG4gICAgc3Ryb2tlPzogQ3NzQ29sb3I7XHJcbiAgICBzdHJva2VEYXNoYXJyYXk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlRGFzaG9mZnNldD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VMaW5lY2FwPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZUxpbmVqb2luPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZU1pdGVybGltaXQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlT3BhY2l0eT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VXaWR0aD86IERlZmF1bHRTdHlsZVR5cGU7XHJcblxyXG4gICAgdGFiU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIHRhYmxlTGF5b3V0PzogVGFibGVMYXlvdXRfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEFsaWduPzogVGV4dEFsaWduX1N0eWxlVHlwZTtcclxuICAgIHRleHRBbGlnbkxhc3Q/OiBUZXh0QWxpZ25MYXN0X1N0eWxlVHlwZTtcclxuICAgIHRleHRBbmNob3I/OiBUZXh0QW5jaG9yX1N0eWxlVHlwZTtcclxuICAgIHRleHRDb21iaW5lVXByaWdodD86IFRleHRDb21iaW5lVXByaWdodF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbj86IFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIHRleHREZWNvcmF0aW9uTGluZT86IFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvblNraXBJbms/OiBUZXh0RGVjb3JhdGlvblNraXBJbmtfU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25TdHlsZT86IFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M/OiBUZXh0RGVjb3JhdGlvblRoaWNrbmVzc19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RW1waGFzaXM/OiBUZXh0RW1waGFzaXNfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uPzogVGV4dEVtcGhhc2lzUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dEVtcGhhc2lzU3R5bGU/OiBUZXh0RW1waGFzaXNTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0SW5kZW50PzogVGV4dEluZGVudF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0SnVzdGlmeT86IFRleHRKdXN0aWZ5X1N0eWxlVHlwZTtcclxuICAgIHRleHRLYXNoaWRhPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHRleHRLYXNoaWRhU3BhY2U/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgdGV4dE9yaWVudGF0aW9uPzogVGV4dE9yaWVudGF0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRleHRPdmVyZmxvdz86IFRleHRPdmVyZmxvd19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0U2hhZG93PzogVGV4dFNoYWRvd19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0U2l6ZUFkanVzdD86IFRleHRTaXplQWRqdXN0X1N0eWxlVHlwZTtcclxuICAgIHRleHRUcmFuc2Zvcm0/OiBUZXh0VHJhbnNmb3JtX1N0eWxlVHlwZTtcclxuICAgIHRleHRVbmRlcmxpbmVQb3NpdGlvbj86IFRleHRVbmRlcmxpbmVQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0b3A/OiBDc3NMZW5ndGg7XHJcbiAgICB0b3VjaEFjdGlvbj86IFRvdWNoQWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zZm9ybT86IFRyYW5zZm9ybV9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2Zvcm1Cb3g/OiBUcmFuc2Zvcm1Cb3hfU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNmb3JtT3JpZ2luPzogVHJhbnNmb3JtT3JpZ2luX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zZm9ybVN0eWxlPzogVHJhbnNmb3JtU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNpdGlvbkRlbGF5PzogT25lT3JNYW55PENzc1RpbWU+O1xyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzogT25lT3JNYW55PENzc1RpbWU+O1xyXG4gICAgdHJhbnNpdGlvblByb3BlcnR5PzogVHJhbnNpdGlvblByb3BlcnR5X1N0eWxlVHlwZTtcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbj86IFRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2xhdGU/OiBUcmFuc2xhdGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIHVuaWNvZGVCaWRpPzogVW5pY29kZUJpZGlfU3R5bGVUeXBlO1xyXG4gICAgdXNlclNlbGVjdD86IFVzZXJTZWxlY3RfU3R5bGVUeXBlO1xyXG5cclxuICAgIHZlcnRpY2FsQWxpZ24/OiBWZXJ0aWNhbEFsaWduX1N0eWxlVHlwZTtcclxuICAgIHZpc2liaWxpdHk/OiBWaXNpYmlsaXR5X1N0eWxlVHlwZTtcclxuICAgIHZlY3RvckVmZmVjdD86IFZlY3RvckVmZmVjdF9TdHlsZVR5cGU7XHJcblxyXG4gICAgd2hpdGVTcGFjZT86IFdoaXRlU3BhY2VfU3R5bGVUeXBlO1xyXG4gICAgd2lkb3dzPzogQ3NzTnVtYmVyO1xyXG4gICAgd2lkdGg/OiBDc3NMZW5ndGg7XHJcbiAgICB3aWxsQ2hhbmdlPzogV2lsbENoYW5nZV9TdHlsZVR5cGU7XHJcbiAgICB3b3JkQnJlYWs/OiBXb3JkQnJlYWtfU3R5bGVUeXBlO1xyXG4gICAgd29yZFNwYWNpbmc/OiBXb3JkU3BhY2luZ19TdHlsZVR5cGU7XHJcbiAgICB3cml0aW5nTW9kZT86IFdyaXRpbmdNb2RlX1N0eWxlVHlwZTtcclxuXHJcbiAgICB6SW5kZXg/OiBaSW5kZXhfU3R5bGVUeXBlO1xyXG4gICAgem9vbT86IFpvb21fU3R5bGVUeXBlO1xyXG5cclxuICAgIC8vIHdlYmtpdEJvcmRlckltYWdlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdEJveERpcmVjdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRCb3hPcmllbnQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uQnJlYWtBZnRlcj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5CcmVha0JlZm9yZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5CcmVha0luc2lkZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5Db3VudD86IENvbHVtbkNvdW50U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uR2FwPzogU2luZ2xlR2FwU3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uUnVsZT86IENvbHVtblJ1bGVTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5SdWxlQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIC8vIHdlYmtpdENvbHVtblJ1bGVTdHlsZT86IENvbHVtblJ1bGVTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5SdWxlV2lkdGg/OiBCb3JkZXJMZW5ndGhTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5TcGFuPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbldpZHRoPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbnM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0TGluZUNsYW1wPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdFRhcEhpZ2hsaWdodENvbG9yPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdFVzZXJNb2RpZnk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0VXNlclNlbGVjdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRXcml0aW5nTW9kZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcblxyXG4gICAgLy8gbXNDb250ZW50Wm9vbUNoYWluaW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21MaW1pdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tTGltaXRNYXg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbUxpbWl0TWluPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21TbmFwPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21TbmFwUG9pbnRzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21TbmFwVHlwZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29taW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zRmxvd0Zyb20/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNGbG93SW50bz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0ZvbnRGZWF0dXJlU2V0dGluZ3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZENvbHVtbkFsaWduPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZENvbHVtblNwYW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1ucz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3c/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkUm93QWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkUm93U3Bhbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3dzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSGlnaENvbnRyYXN0QWRqdXN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSHlwaGVuYXRlTGltaXRDaGFycz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0h5cGhlbmF0ZUxpbWl0TGluZXM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIeXBoZW5hdGVMaW1pdFpvbmU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIeXBoZW5zPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSW1lQWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNPdmVyZmxvd1N0eWxlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsQ2hhaW5pbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxMaW1pdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WE1heD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WE1pbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WU1heD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WU1pbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFJhaWxzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFBvaW50c1g/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwUG9pbnRzWT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBUeXBlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwWT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFRyYW5zbGF0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVGV4dENvbWJpbmVIb3Jpem9udGFsPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVGV4dFNpemVBZGp1c3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNUb3VjaEFjdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1RvdWNoU2VsZWN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVXNlclNlbGVjdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1dyYXBGbG93PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zV3JhcE1hcmdpbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1dyYXBUaHJvdWdoPzogRGVmYXVsdFN0eWxlVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0cmluZ1N0eWxlc2V0IHR5cGUgbWFwcyBDU1MgcHJvcGVydGllcyBpbmNsdWRpbmcgY3VzdG9tIHByb3BlcnRpZXMgdG8gdGhlIHN0cmluZyB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHJpbmdTdHlsZXNldCA9IHsgW0s6IHN0cmluZ106IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV4dGVuZGVkU3R5bGVzZXQgdHlwZSBtYXBzIGFsbCBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBbW0lDc3NTdHlsZXNldF1dIGludGVyZmFjZSB0byB0aGVcclxuICogXCJleHRlbmRlZFwiIHZlcnNpb25zIG9mIHRoZWlyIHR5cGVzLiBUaGVzZSBleHRlbmRlZCB0eXBlcyBhcmUgZGVmaW5lZCBieSBhZGRpbmcgYmFzaWMga2V5d29yZHNcclxuICogKGUuZy4gXCJ1bnNldFwiLCBcImluaXRpYWxcIiwgZXRjLikgYXMgd2VsbCBhcyBbW1N0cmluZ1Byb3h5XV0gYW5kIFtbSUN1c3RvbVZhcl1dIHRvIHRoZSB0eXBlIHRoYXRcclxuICogaXMgZGVmaW5lZCBpbiB0aGUgSUNzc1N0eWxlc2V0IGludGVyZmFjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkU3R5bGVzZXQgPSB7IFtLIGluIGtleW9mIElDc3NTdHlsZXNldF0/OiBFeHRlbmRlZFByb3A8SUNzc1N0eWxlc2V0W0tdPiB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1ZhclRlbXBsYXRlcyBpbnRlcmZhY2UgbWFwcyB0ZW1wbGF0ZSBuYW1lcyB0byB0aGUgdHlwZXMsIHdoaWNoIGNhbiBiZSB1c2VkIGZvclxyXG4gKiBkZWZpbmluZyBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKGEuay5hLiB2YXJpYWJsZXMpLiBOb3JtYWxseSwgdmFyaWFibGVzIGFyZSBkZWZpbmVkIHVzaW5nIHRoZVxyXG4gKiBuYW1lcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBhbmQgdGhlaXIgdHlwZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgaW4gdGhlXHJcbiAqIElDc3NTdHlsZXNldCBpbnRlcmZhY2UuIFNvbWV0aW1lcywgaG93ZXZlciwgdGhlcmUgaXMgYSBuZWVkIHRvIGRlZmluZSB2YXJpYWJsZXMgb2Ygc29tZSBvdGhlclxyXG4gKiB0eXBlcywgZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHN1aXRhYmxlIHN0eWxlIHByb3BlcnR5LiBUaGUgSUNzc1ZhclRlbXBsYXRlcyBpbnRlcmZhY2UgcHJvdmlkZXNcclxuICogbWFueSBiYXNpYyB0eXBlcyBhbmQgaXQgY2FuIGFsc28gYmUgZXh0ZW5kZWQgdXNpbmcgdGhlIFR5cGVTY3JpcHQncyBtb2R1bGUgYXVnbWVudGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzVmFyVGVtcGxhdGVzIGV4dGVuZHMgSUNzc1N0eWxlc2V0XHJcbntcclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgdmFsdWUgb2YgYW55IHR5cGUgKi9cclxuICAgIFwiYW55XCI/OiBhbnk7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIHN0cmluZyB2YWx1ZSAqL1xyXG4gICAgQ3NzU3RyaW5nPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPG51bWJlcj5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzTnVtYmVyPzogQ3NzTnVtYmVyO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPGxlbmd0aD5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzTGVuZ3RoPzogQ3NzTGVuZ3RoO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYW4gYDxhbmdsZT5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzQW5nbGU/OiBDc3NBbmdsZTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDx0aW1lPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NUaW1lPzogQ3NzVGltZTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxyZXNvbHV0aW9uPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NSZXNvbHV0aW9uPzogQ3NzUmVzb2x1dGlvbjtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxmcmVxdWVuY3k+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc0ZyZXF1ZW5jeT86IENzc0ZyZXF1ZW5jeTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxwZXJjZW50PmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NQZXJjZW50PzogQ3NzUGVyY2VudDtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgUG9pbnQgdmFsdWUgKi9cclxuICAgIENzc1BvaW50PzogQ3NzUG9pbnQ7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8cG9zaXRpb24+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1Bvc2l0aW9uPzogQ3NzUG9zaXRpb247XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGBSYWRpdXNgIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzUmFkaXVzPzogQ3NzUmFkaXVzO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPGNvbG9yPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NDb2xvcj86IENzc0NvbG9yO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYW4gYDxpbWFnZT5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzSW1hZ2U/OiBDc3NJbWFnZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclRlbXBsYXRlTmFtZSB0eXBlIGRlZmluZXMgdGhlIGtleXMgKHN0cmluZ3MpIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGVtcGxhdGVzIGZvciBkZWZpbmluZ1xyXG4gKiBjdXN0b20gQ1NTIHByb3BlcnRpZXMgdXNpbmcgdGhlIFtbJHZhcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVmFyVGVtcGxhdGVOYW1lID0ga2V5b2YgSUNzc1ZhclRlbXBsYXRlcztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJUZW1wbGF0ZXMgdHlwZSBtYXBzIGFsbCB0ZW1wbGF0ZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIFtbSUNzc1ZhclRlbXBsYXRlc11dXHJcbiAqIGludGVyZmFjZSB0byB0aGUgXCJleHRlbmRlZFwiIHZlcnNpb25zIG9mIHRoZWlyIHR5cGVzLiBUaGVzZSBleHRlbmRlZCB0eXBlcyBhcmUgZGVmaW5lZCB1c2luZ1xyXG4gKiB0aGUgW1tFeHRlbmRlZF1dIGdlbmVyaWMgdHlwZSwgd2hpY2ggYWRkcyBiYXNpYyBrZXl3b3JkcyAoZS5nLiBcInVuc2V0XCIsIFwiaW5pdGlhbFwiLCBldGMuKSBhc1xyXG4gKiB3ZWxsIGFzIFtbU3RyaW5nUHJveHldXSBhbmQgW1tJQ3VzdG9tVmFyXV0gdG8gdGhlIHR5cGUgdGhhdCBpcyBkZWZpbmVkIGluIHRoZSBJQ3NzVmFyVGVtcGxhdGVzXHJcbiAqIGludGVyZmFjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFZhclRlbXBsYXRlcyA9IHsgW0sgaW4gVmFyVGVtcGxhdGVOYW1lXTogRXh0ZW5kZWRQcm9wPElDc3NWYXJUZW1wbGF0ZXNbS10+IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJWYWx1ZVR5cGUgZ2VuZXJpYyB0eXBlIGRlZmluZXMgdGhlIHR5cGUgb2YgdGhlIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBjdXN0b21cclxuICogQ1NTIHByb3BlcnR5IHVzaW5nIHRoZSBnZW5lcmljIHR5cGUgSyBhcyBpdHMgdGVtcGxhdGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYXJWYWx1ZVR5cGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4gPSBWYXJUZW1wbGF0ZXNbS107XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3VzdG9tVmFyU3R5bGVUeXBlIHR5cGUgcmVwcmVzZW50cyBhIGN1c3RvbSBDU1MgcHJvcGVydHkgbmFtZSBhbmQgdmFsdWUgdGhhdCBhcmUgdXNlZCB0b1xyXG4gKiBkZWZpbmUgY3VzdG9tIHByb3BlcnRpZXMgaW4gYSBTdHlsZXNldC4gVGhpcyBvYmplY3QgaXMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxyXG4gKiBgLS1gIHByb3BlcnR5IG9mIHRoZSBTdHlsZXNldCB0eXBlLlxyXG4gKiBcclxuICogQ3VzdG9tVmFyU3R5bGVUeXBlIG9iamVjdHMgc2hvdWxkIGJlIG1vc3RseSB1c2VkIHRvIG92ZXJyaWRlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgaGF2ZVxyXG4gKiBwcmV2aW91c2x5IGJlZW4gZGVmaW5lZCBhdCB0aGUgdG9wLWxldmVsIHVzaW5nIHRoZSAkdmFyIGZ1bmN0aW9uLiBUaGF0IHdheSB5b3UgY2FuIGhhdmUgYVxyXG4gKiBcImdsb2JhbFwiIHZhbHVlIG9mIGEgY3VzdG9tIHByb3BlcnR5IGFuZCBhc3NpZ24gYSBkaWZmZXJlbnQgdmFsdWUgdG8gaXQgdW5kZXIgYSBjZXJ0YWluIENTU1xyXG4gKiBzZWxlY3Rvci5cclxuICogXHJcbiAqIFRoZSB2YWx1ZXMgb2YgdGhlIHR5cGUgY2FuIGJlIHNwZWNpZmllZCBhcyBlaXRoZXIgYSB0d28taXRlbSBvciBhIHRocmVlLWl0ZW0gYXJyYXkuIFRoZVxyXG4gKiB0d28taXRlbSBhcnJheSBpcyB1c2VkIHdpdGggYSBwcmV2aW91c2x5IGRlZmluZWQgY3VzdG9tIENTUyBwcm9wZXJ0eSByZXByZXNlbnRlZCBieSBhbiBJVmFyUnVsZVxyXG4gKiBvYmplY3Q6XHJcbiAqIC0gVGhlIGZpcnN0IGl0ZW0gaXMgdGhlIElWYXJSdWxlIG9iamVjdC5cclxuICogLSBUaGUgc2Vjb25kIGl0ZW0gaXMgdGhlIHZhbHVlXHJcbiAqIFxyXG4gKiBUaGUgdGhyZWUtaXRlbSBhcnJheSBhbGxvd3MgZGlyZWN0bHkgc3BlY2lmeWluZyB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eSBuYW1lOlxyXG4gKiAtIFRoZSBmaXJzdCBpdGVtIGlzIGEgc3RyaW5nIC0gdGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuIElmIHRoZSBuYW1lIGlzIG5vdCBwcmVmaXhlZFxyXG4gKiB3aXRoIHR3byBkYXNoZXMgdGhleSB3aWxsIGJlIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAqIC0gVGhlIHNlY29uZCBpdGVtIGlzIHRoZSBuYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZVxyXG4gKiBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcbiAqIC0gVGhlIHRoaXJkIGl0ZW0gaXMgdGhlIHZhbHVlXHJcbiAqIFxyXG4gKiBVc2UgdGhlIEN1c3RvbVZhclN0eWxlVHlwZSB0eXBlIGluIHRoZSBmb2xsb3dpbmcgbWFubmVyOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICAvLyBkZWZpbmUgZ2xvYmFsIGN1c3RvbSBDU1MgcHJvcGVydHkgYW5kIHJlLWRlZmluZSBpdHMgdmFsdWUgdW5kZXIgXCJicm93blwiIGNsYXNzLlxyXG4gKiAgICAgbWFpbkNvbG9yID0gJHZhciggXCJjb2xvclwiLCBcImJsYWNrXCIpO1xyXG4gKiAgICAgYnJvd24gPSAkY2xhc3MoeyBcIi0tXCI6IFsgW3RoaXMubWFpbkNvbG9yLCBcImJyb3duXCJdIF0gfSlcclxuXHJcbiAqICAgICAvLyBkaXJlY3RseSBkZWZpbmUgY3VzdG9tIENTUyBwcm9wZXJ0eSB1bmRlciBcImJsdWVcIiBjbGFzcy5cclxuICogICAgIGJsdWUgPSAkY2xhc3MoeyBcIi0tXCI6IFsgW1wiZGlmZmVyZW50LWNvbG9yXCIsIFwiY29sb3JcIiwgXCJibHVlXCJdIF0gfSlcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHRoZSBmb2xsb3dpbmcgQ1NTOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIDpyb290IHsgLS1NeVN0eWxlc19tYWluQ29sb3I6IFwiYmxhY2tcIjsgfVxyXG4gKiAuYnJvd24geyAtLU15U3R5bGVzX21haW5Db2xvcjogXCJicm93blwiOyB9XHJcbiAqIC5ibHVlIHsgLS1kaWZmZXJlbnQtb2xvcjogXCJibHVlXCI7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDdXN0b21WYXJfU3R5bGVUeXBlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+ID0gXHJcbiAgICBbSVZhclJ1bGU8Sz4sIFZhclZhbHVlVHlwZTxLPl0gfCBbc3RyaW5nLCBLLCBWYXJWYWx1ZVR5cGU8Sz5dXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIGNvbGxlY3Rpb24gb2Ygc3R5bGUgcHJvcGVydGllcyBhbmQgdGhlaXIgdmFsdWVzLiBJbiBhZGRpdGlvbiB0byB0aGVcclxuICogcHJvcGVydGllcyByZXByZXNlbnRpbmcgdGhlIHN0YW5kYXJkIENTUyBzdHlsZXMsIHRoaXMgdHlwZSBhbHNvIGluY2x1ZGVzIHRoZSBcIi0tXCIgcHJvcGVydHksXHJcbiAqIHdoaWNoIGlzIGFuIGFycmF5IG9mIEN1c3RvbVZhclN0eWxlVHlwZSBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3R5bGVzZXQgPSBFeHRlbmRlZFN0eWxlc2V0ICZcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTcGVjaWFsIHByb3BlcnR5IFwiLS1cIiBzcGVjaWZpZXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBDdXN0b21WYXJTdHlsZVR5cGUgb2JqZWN0cyBlYWNoXHJcbiAgICAgICAgICogcmVwcmVzZW50aW5nIGEgZGVmaW5pdGlvbiBvZiBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgXCItLVwiPzogQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnRzIHF1ZXJ5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIHNpbmdsZSBzZXQgb2Ygc3R5bGVzIGFzIHBhcnQgb2YgdGhlIEBzdXBwb3J0cyBydWxlcy4gVGhlIHN0eWxlcyBpbiB0aGVcclxuICogc3R5bGVzZXQgYXJlIGNvbWJpbmVkIHdpdGggdGhlIFwiYW5kXCIgb3BlcmF0b3IuIFRoZSBlbnRpcmUgc3R5bGVzZXQgY2FuIGJlIG5lZ2F0ZWQsIHdoaWNoIHdpbGxcclxuICogcmVzdWx0IGluIHBsYWNpbmcgdGhlIFwibm90XCIgb3BlcmF0b3IgdGhhdCB3aWxsIGFjdCBvbiBhbGwgc3R5bGVzIGluIHRoZSBxdWVyeS5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB1c2luZyBQdXJlU3R5bGVzZXQgb2JqZWN0IGRvZXNuJ3QgYWxsb3cgZm9yIGNoZWNraW5nIHdoZXRoZXIgdHdvIG9yIG1vcmUgdmFsdWVzIG9mXHJcbiAqIGEgZ2l2ZW4gcHJvcGVydHkgYXJlIHN1cHBvcnRlZC4gRm9yIGV4YW1wbGUsIGFsdGhvdWdoIHdlIGNhbiB0ZXN0IHRoYXQgdGhlIFwiZGlzcGxheVwiIHByb3BlcnR5XHJcbiAqIHN1cHBvcnRzIHRoZSBcImZsZXhcIiB2YWx1ZSwgd2UgY2Fubm90IGNoZWNrIHdoZXRoZXIgYm90aCBcImZsZXhcIiBhbmQgXCJncmlkXCIgdmFsdWVzIGFyZSBzdXBwb3J0ZWQuXHJcbiAqIFRvIGNoZWNrIHN1Y2ggY3JpdGVyaWEgeW91IG11c3Qgc3BlY2lmeSB0aGUgcXVlcnkgYXMgYSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVTdXBwb3J0c1F1ZXJ5ID0gc3RyaW5nIHwgRXh0ZW5kZWRTdHlsZXNldCAmIHsgJG5lZ2F0ZT86IGJvb2xlYW47IH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBvbmUgb3IgbW9yZSBxdWVyaWVzIGFzIHBhcnQgb2YgdGhlIEBzdXBwb3J0cyBydWxlLiBXaGlsZSBtdWx0aXBsZSBxdWVyaWVzIGluXHJcbiAqIGFuIGFycmF5IGFyZSBjb21iaW5lZCB3aXRoIHRoZSBcIm9yXCIgb3BlcmF0b3IsIHRoZSBzdHlsZXMgd2l0aGluIGVhY2ggc3R5bGVzZXQgYXJlIGNvbWJpbmVkIHdpdGhcclxuICogdGhlIFwiYW5kXCIgb3BlcmF0b3IuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdXBwb3J0c1F1ZXJ5ID0gU2luZ2xlU3VwcG9ydHNRdWVyeSB8IFNpbmdsZVN1cHBvcnRzUXVlcnlbXTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBJR2VuZXJpY1Byb3h5LCBDc3NOdW1iZXIsIENzc011bHRpTnVtYmVyLCBJTnVtYmVyQmFzZU1hdGgsXHJcbiAgICBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbiwgTnVtYmVyQmFzZSwgTXVsdGlOdW1iZXJCYXNlLFxyXG4gICAgQ3NzTGVuZ3RoLCBDc3NNdWx0aUxlbmd0aCwgQ3NzQW5nbGUsIENzc011bHRpQW5nbGUsIENzc1RpbWUsIENzc011bHRpVGltZSxcclxuICAgIENzc1Jlc29sdXRpb24sIENzc011bHRpUmVzb2x1dGlvbiwgQ3NzRnJlcXVlbmN5LCBDc3NNdWx0aUZyZXF1ZW5jeSxcclxuICAgIENzc1BlcmNlbnQsIENzc011bHRpUGVyY2VudCwgSUNzc0xlbmd0aE1hdGgsXHJcbiAgICBJQ3NzQW5nbGVNYXRoLCBJQ3NzUGVyY2VudE1hdGgsIElDc3NGcmVxdWVuY3lNYXRoLCBJQ3NzUmVzb2x1dGlvbk1hdGgsIElDc3NUaW1lTWF0aCxcclxuICAgIE51bWJlclR5cGUsIExlbmd0aFR5cGUsIFBlcmNlbnRUeXBlLCBBbmdsZVR5cGUsIFRpbWVUeXBlLCBSZXNvbHV0aW9uVHlwZSwgRnJlcXVlbmN5VHlwZVxyXG59IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpY3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRhc2hlLWNhc2UgdG8gY2FtZWxDYXNlLCBlLmcuIGZvbnQtc2l6ZSB0byBmb250U2l6ZS5cclxuICogQHBhcmFtIGRhc2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UsIGUuZy4gZm9udFNpemUgdG8gZm9udC1zaXplLlxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhbHVlQ29udmVydE9wdGlvbnMgaW50ZXJmYWNlIGRlZmluZXMgb3B0aW9uYWwgZnVuY3Rpb25zIHRoYXQgY29udmVydHZhbHVlcyBvZiBkaWZmZXJudFxyXG4gKiB0eXBlcyB0byBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVDb252ZXJ0T3B0aW9uc1xyXG57XHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgIGZyb21OdWxsPzogKCB2YWw6IG51bGwgfCB1bmRlZmluZWQpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBzdHJpbmcuIFRoaXMgYWxsb3dzIHRyYW5zZm9ybWluZyBvbmUgc3RyaW5nIHRvIGFub3RoZXIuXHJcbiAgICBmcm9tU3RyaW5nPzogKCB2YWw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgIGZyb21Cb29sPzogKHZhbDogYm9vbGVhbikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIG51bWJlclxyXG4gICAgZnJvbU51bWJlcj86ICh2YWw6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgZnJvbUFycmF5PzogKHZhbDogYW55W10pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gb2JqZWN0XHJcbiAgICBmcm9tT2JqPzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHR5cGUtc3BlY2lmaWMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWRcclxuICAgIGZyb21Bbnk/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgdG8gY29udmVydCBhcnJheSBpdGVtcyBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFyckl0ZW1GdW5jPzogKHY6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIFNlcGFyYXRvciBmb3IgYXJyYXkgaXRlbXMgLSB1c2VkIG9ubHkgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJTZXA/OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgdGhlc2UgYXJlIGFyZ3VtZW50cyB0byBwYXNzIHdoZW4gaW52b2tpbmcgaXRcclxuICAgIGZ1bmNBcmdzPzogYW55W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgdmFsdWUgb2YgYW4gYXJiaXRyYXJ5IHR5cGUgdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGUgb3B0aW9uYWwgb3B0aW9ucyBwYXJhbWV0ZXJcclxuICogY2FuIGRlZmluZSBob3cgc3BlY2lmaWMgdHlwZXMgYXJlIGNvbnZlcnRlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWwyc3RyKCB2YWw6IGFueSwgb3B0aW9ucz86IElWYWx1ZUNvbnZlcnRPcHRpb25zKTogc3RyaW5nXHJcbntcclxuICAgaWYgKCFvcHRpb25zKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHN0YW5kYXJkIHByb2Nlc3Npbmc6XHJcbiAgICAgICAgLy8gLSBudWxsL3VuZGVmaW5lZCBiZWNvbWUgZW1wdHkgc3RyaW5nLlxyXG4gICAgICAgIC8vIC0gY2FsbCB2YWx1ZVRvU3RyaW5nIChwcm94eSBvYmplY3RzKSBpZiBleGlzdC5cclxuICAgICAgICAvLyAtIGZ1bmN0aW9uOiBjYWxsIHdpdGhvdXQgcGFyYW1ldGVycy5cclxuICAgICAgICAvLyAtIGV2ZXJ5dGhpbmcgZWxzZTogY2FsbCB0b1N0cmluZygpLlxyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2YWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbCgpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwudmFsdWVUb1N0cmluZyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnZhbHVlVG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBwcm9jZXNzaW5nIHdpdGggb3B0aW9ucy4gRm9yIGFsbCB0eXBlcyBleGNlcHQgbnVsbCBhbmQgc3RyaW5nLCBpZiB0aGUgdHlwZS1zcGVjaWZpY1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBjYWxsIGZyb21BbnkgaWYgZGVmaW5lZC5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21OdWxsID8gb3B0aW9ucy5mcm9tTnVsbCggdmFsKSA6IFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbVN0cmluZyA/IG9wdGlvbnMuZnJvbVN0cmluZyggdmFsKSA6IHZhbDtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVtYmVyID8gb3B0aW9ucy5mcm9tTnVtYmVyKCB2YWwpIDogb3B0aW9ucy5mcm9tQW55ID8gb3B0aW9ucy5mcm9tQW55KCB2YWwpIDogdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsMnN0ciggb3B0aW9ucy5mdW5jQXJncyA/IHZhbCggLi4ub3B0aW9ucy5mdW5jQXJncykgOiB2YWwoKSk7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnJvbUFycmF5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFycmF5KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZXBhcmF0b3IgPSBvcHRpb25zLmFyclNlcCAhPSBudWxsID8gb3B0aW9ucy5hcnJTZXAgOiBcIiBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2YWwsIG9wdGlvbnMuYXJySXRlbUZ1bmMgfHwgb3B0aW9ucy5mcm9tQW55IHx8IHVuZGVmaW5lZCwgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwudmFsdWVUb1N0cmluZyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbU9iailcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21PYmooIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbUFueSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21Cb29sID8gb3B0aW9ucy5mcm9tQm9vbCggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbUFueSlcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW4gYXJyYXkgb2YgdGhlIGdpdmVuIHR5cGV0byBhIHNpbmdsZSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIHNlcGFyYXRvci5cclxuICogRWxlbWVudHMgb2YgdGhlIGFycmF5IGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXJyMnN0ciggdmFsOiBhbnlbXSwgZnVuYz86ICh2KSA9PiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuICF2YWwgfHwgdmFsLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gXCJcIlxyXG4gICAgICAgIDogdmFsLmZpbHRlciggeCA9PiB4ICE9IG51bGwpLm1hcCggeSA9PiBmdW5jID8gZnVuYyh5KSA6IHZhbDJzdHIoIHkpKS5qb2luKCBzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcgaXMgYSB0YWcgZnVuY3Rpb24gaGVscGVyIHRoYXQgY29udmVydHMgdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRoXHJcbiAqIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIGNvbnZlcnQgcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogYW55W10sXHJcbiAgICBjb252ZXJ0RnVuYz86ICggdjogYW55KSA9PiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gbnVtYmVyIG9mIHBhcmFtZXRlcnMgaXMgYWx3YXlzIDEgbGVzcyB0aGFuIHRoZSBudW1iZXIgb2Ygc3RyaW5nIHBhcnRzXHJcbiAgICBsZXQgcGFyYW1zTGVuID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGlmIChwYXJhbXNMZW4gPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcGFyYW1zTGVuOyBpKyspXHJcbiAgICAgICAgcyArPSBwYXJ0c1tpXSArIChjb252ZXJ0RnVuYyA/IGNvbnZlcnRGdW5jKCBwYXJhbXNbaV0pIDogdmFsMnN0ciggcGFyYW1zW2ldKSk7XHJcblxyXG4gICAgLy8gYWRkIHRoZSBsYXN0IHBhcnRcclxuICAgIHJldHVybiBzICsgcGFydHNbcGFyYW1zTGVuXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgb2YgZnVuY3Rpb25zIHRoYXQgY29udmVydCBhIG51bWJlciB0byBhIHN0cmluZyAqL1xyXG50eXBlIENvbnZlcnROdW1iZXJGdW5jVHlwZSA9IChuOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nIG9wdGlvbmFsbHkgYXBwZW5kaW5nIHVuaXRzIHRoYXQgY2FuIGJlIGRpZmZlcmVudFxyXG4gKiBmb3IgaW50ZWdlciBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycy5cclxuICogQHBhcmFtIG4gTnVtYmVyIHRvIGNvbnZlcnQgdG8gc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gKiBAcGFyYW0gaW50VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBpbnRlZ2VyLlxyXG4gKiBAcGFyYW0gZmxvYXRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGZsb2F0aW5nIHBvaW50LlxyXG4gKi9cclxuZnVuY3Rpb24gbnVtYmVyVG9TdHJpbmcoIG46IG51bWJlciwgaW50VW5pdDogc3RyaW5nID0gXCJcIiwgZmxvYXRVaW50OiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG4pID8gIG4gKyBpbnRVbml0IDogbiArIGZsb2F0VWludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTnVtYmVyIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBudW1iZXJCYXNlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7IGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgQ3NzTnVtYmVyIG9yIGFycmF5IG9mIENzc051bWJlciBvYmplY3RzIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZS0gb3IgbXVsdGktbnVtYmVyIHN0eWxlIHZhbHVlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICogQHBhcmFtIHNlcGFyYXRvciBTdHJpbmcgdG8gdXNlIHRvIHNlcGFyYXRlIG11bHRpcGxlIHZhbHVlcy5cclxuICovXHJcbmZ1bmN0aW9uIG11bHRpU3R5bGVUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LFxyXG4gICAgICAgICAgICAgICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiB2ID0+IG51bWJlckJhc2VUb1N0cmluZyggdiwgY29udmVydEZ1bmMpLFxyXG4gICAgICAgIGFyclNlcDogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIG1hdGhGdW5jIGZ1bmN0aW9uIHJldHVybnMgb25lIG9mIHRoZSBtYXRoZW1hdGljIENTUyBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIG9yIG1vcmVcclxuICogcGFyYW1ldGVycyB3aG9zZSB0eXBlIGlzIGRlcml2ZWQgZnJvbSBOdW1iZXJCYXNlPFQ+LlxyXG4gKi9cclxuZnVuY3Rpb24gbWF0aEZ1bmM8VCBleHRlbmRzIHN0cmluZz4oIG5hbWU6IHN0cmluZywgcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7bXVsdGlTdHlsZVRvU3RyaW5nKCBwYXJhbXMsIGNvbnZlcnRGdW5jLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBjYWxjRnVuYyBmdW5jdGlvbiByZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNhbGMoKSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYGNhbGMoJHt0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0cywgcGFyYW1zLCAodjogYW55KSA9PiBudW1iZXJCYXNlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW1tYmVyQmFzZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIEphdmFTY3JpcHQgdHlwZSB0aGV5XHJcbiAqIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBieSBjYWxsaW5nIGEgZnVuY3Rpb24gc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICovXHJcbmNsYXNzIE51bWJlckJhc2VNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+IGltcGxlbWVudHMgSU51bWJlckJhc2VNYXRoPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBwcm90ZWN0ZWQgY29udmVydEZ1bmM6IENvbnZlcnROdW1iZXJGdW5jVHlwZSlcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbnVtYmVyVG9TdHJpbmcgPSAobjogbnVtYmVyKTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEZ1bmMoIG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdHlsZVRvU3RyaW5nID0gKHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aVN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCB0aGlzLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWluXCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtYXhcIiwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJjbGFtcFwiLCBbbWluLCBwcmVmLCBtYXhdLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYWxjRnVuYyggZm9ybXVsYVBhcnRzLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU51bWJlck1hdGhDbGFzcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIFwic3RhdGljXCIgc2lkZSBvZiBjbGFzc2VzIGRlcml2ZWQgZnJvbSB0aGVcclxuICogTnVtYmVyTWF0aCBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlckJhc2VNYXRoQ2xhc3M8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgICBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nO1xyXG5cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICBuZXcoKTogSU51bWJlckJhc2VNYXRoPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVW5pdGxlc3MgbnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NOdW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bnVtYmVyPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTnVtYmVyTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPE51bWJlclR5cGU+XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBuLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NQZXJjZW50TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHBlcmNlbnQ+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NQZXJjZW50TWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFBlcmNlbnRUeXBlPiBpbXBsZW1lbnRzIElDc3NQZXJjZW50TWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiAoTnVtYmVyLmlzSW50ZWdlcihuKSA/IG4gOiBNYXRoLnJvdW5kKG4gKiAxMDApKSArIFwiJVwiOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUGVyY2VudD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciB0byBzdHJpbmcgdXNpbmcgdGhlIGZvbGxvd2luZyBydWxlczpcclxuICogLSBpZiB0aGUgbnVtYmVyIGlzIGJldHdlZW4gLTEgYW5kIDEgKG5vbiBpbmNsdXNpdmUpLCBtdWx0aXBsaWVzIHRoZSBudW1iZXIgYW5kIGFwcGVuZHMgXCIlXCJcclxuICogLSBvdGhlcndpc2UsIGNvbnZlcnRzIHRoZSBudW1iZXIgdG8gc3RyaW5nIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1dGludHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyggbjogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBuID49IDEgfHwgbiA8PSAtMSA/IG4udG9TdHJpbmcoKSA6IE1hdGgucm91bmQobiAqIDEwMCkgKyBcIiVcIjtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBMZW5ndGhcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0xlbmd0aE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxsZW5ndGg+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NMZW5ndGhNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8TGVuZ3RoVHlwZT4gaW1wbGVtZW50cyBJQ3NzTGVuZ3RoTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwicHhcIiwgXCJlbVwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJR2VuZXJpY1Byb3h5PExlbmd0aFR5cGU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pbm1heFwiLCBbbWluLCBtYXhdLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0FuZ2xlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGFuZ2xlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzQW5nbGVNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8QW5nbGVUeXBlPiBpbXBsZW1lbnRzIElDc3NBbmdsZU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcImRlZ1wiLCBcInR1cm5cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUFuZ2xlPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGltZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzVGltZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDx0aW1lPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzVGltZU1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxUaW1lVHlwZT4gaW1wbGVtZW50cyBJQ3NzVGltZU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIm1zXCIsIFwic1wiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVRpbWU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzVGltZU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVzb2x1dGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUmVzb2x1dGlvbk1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxyZXNvbHV0aW9uPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxSZXNvbHV0aW9uVHlwZT4gaW1wbGVtZW50cyBJQ3NzUmVzb2x1dGlvbk1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcImRwaVwiLCBcInhcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmVzb2x1dGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZyZXF1ZW5jeVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzRnJlcXVlbmN5TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGZyZXF1ZW5jZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxGcmVxdWVuY3lUeXBlPiBpbXBsZW1lbnRzIElDc3NGcmVxdWVuY3lNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJIelwiLCBcImtIelwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NGcmVxdWVuY3k+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmVxdWVuY3k+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBwb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3Myc3RyKCB2YWw6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bGw6IHYgPT4gXCJcIixcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2LCBcIiBcIilcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlQb3Myc3RyKCB2YWw6IEV4dGVuZGVkPE11bHRpQ3NzUG9zaXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHBvczJzdHIsXHJcbiAgICAgICAgYXJyU2VwOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYmFzaWMgdHlwZXMgYW5kIGZ1bmN0aW9ucyB1c2VkIHRvIGRlZmluZSBDU1MgcHJvcGVydHkgdHlwZXMuXHJcbiAqIFxyXG4gKiBBbGwgQ1NTIHByb3BlcnRpZXMgc2hvdWxkIGFjY2VwdCBzdHJpbmcgYXMgdGhlIHR5cGUgb2YgdGhlaXIgdmFsdWUgZXZlbiBpZiBub3JtYWxseVxyXG4gKiB0aGV5IGFjY2VwdCBvdGhlciB0eXBlcyAoZS5nIGEgc2V0IG9mIHN0cmluZyBsaXRlcmFscyBhcyBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IC4uLmAgZm9yIHRoZVxyXG4gKiBjb2xvcikgcHJvcGVydHkuIFRoaXMgaXMgYmVjYXVzZSBpbiBhZGRpdGlvbiB0byB0aGVpciBub3JtYWwgdmFsdWVzIGFueSBwcm9wZXJ0eVxyXG4gKiBjYW4gdXNlIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhlIGZvcm0gYHZhcigtLXByb3BuYW1lKWAuIEhvd2V2ZXIsIGlmIHdlIGFkZCBzdHJpbmcgdHlwZVxyXG4gKiB0byB0aGUgc2V0IG9mIHN0cmluZyBsaXRlcmFscyAoZS5nLiBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IHN0cmluZ2ApLCB0aGlzIHRocm93cyBvZmYgdGhlXHJcbiAqIEludGVsbGlzZW5zZSBhbmQgaXQgZG9lc24ndCBwcm9tcHQgZGV2ZWxvcGVycyBmb3IgdGhlIHBvc3NpYmxlIHZhbHVlcy4gVGhlIElWYWx1ZVByb3h5XHJcbiAqIGNhbiBiZSB1c2VkIGluc3RlYWQgb2Ygc3RyaW5nIGFuZCB0aGlzIHNvbHZlcyB0aGUgSW50ZWxsaXNlbnNlIGlzc3VlLlxyXG4gKiBcclxuICogQW5vdGhlciBiZW5lZml0IG9mIHVzaW5nIGZ1bmN0aW9ucyBpcyB0aGF0IHRoZXkgYXJlXHJcbiAqIGNvbnN0cnVjdGVkIGF0IG9uZSB0aW1lIGJ1dCB0aGUgc3RyaW5nIGdlbmVyYXRpb24gb2NjdXJzIGF0IGFub3RoZXIgdGltZS4gVGhpcyBhbGxvd3NcclxuICogdXNpbmcgdGhlc2Ugb2JqZWN0cyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLiBUaGV5IGNhbiByZWZlcmVuY2Ugb2JqZWN0cyBsaWtlXHJcbiAqIElWYXJSdWxlIHRoYXQgYXJlIG5vdCBmdWxseSBpbml0aWFsaXplZCB5ZXQuIEhvd2V2ZXIsIHdoZW4gdGhlIHN0eWxlcyBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuICogaW50byBET00gdGhlIGluaXRpYWxpemF0aW9uIHdpbGwgaGF2ZSBhbHJlYWR5IG9jY3VycmVkIGFuZCB0aGUgZnVuY3Rpb24gd2lsbFxyXG4gKiByZXR1cm4gYSBjb3JyZWN0IHN0cmluZy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB0aGUgcHJveHkgZnVuY3Rpb25zIGhhdmUgYSBwYXJhbWV0ZXIgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZW0gZnJvbVxyXG4gKiBvdGhlciBwcm94eSBmdW5jdGlvbnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSB3YW50IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gZGlmZmVyZW50IENTUyB0eXBlcyxcclxuICogc28gdGhhdCBhIGZ1bmN0aW9uIHVzZWQgZm9yIG9uZSBDU1MgdHlwZSBjYW5ub3QgYmUgdXNlZCBmb3IgYSBkaWZmZXJlbnQgQ1NTIHR5cGUuIEZvclxyXG4gKiBleGFtcGxlLCB0aGUgYGNhbGMoKWAgZnVuY3Rpb24gcmV0dXJucyB0aGUgTnVtYmVyUHJveHkgZnVuY3Rpb24sIHdoaWxlIHRoZVxyXG4gKiBgbGluZWFySW5ncmFkaWVudCgpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBJbWFnZVByb3h5IGZ1bmN0aW9uLiBUaHVzIHlvdSBjYW5ub3QgdXNlIHRoZVxyXG4gKiAnY2FsYygpYCBmdW5jdGlvbiBmb3IgaW1hZ2UtYmFzZWQgQ1NTIHByb3BlcnRpZXMgYW5kIHZpY2UgdmVyc2EuXHJcbiAqL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWMgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlIHZhbHVlcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBhbnkgQ1NTIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR2xvYmFsX1N0eWxlVHlwZSA9IFwiaW5oZXJpdFwiIHwgXCJpbml0aWFsXCIgfCBcInVuc2V0XCIgfCBcInJldmVydFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHZW5lcmljUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBpbnRlcmZhY2UgaW1wbGVtZW50ZWQgdXNpbmcgZnVuY3Rpb25zIHRoYXRcclxuICogYWNjZXB0IGFuIG9wdGlvbmFsIHBhcmFtZXRlciBvZiBhIGdlbmVyaWMgdHlwZSBhbmQgcmV0dXJuIGEgc3RyaW5nLiBUaGlzIGludGVyZmFjZSBpcyB1c2VkIGFzIGFcclxuICogYmFzZSBmb3IgcHJveHkgaW50ZXJmYWNlcyBkZWZpbmluZyB0eXBlcyBhY2NlcHRhYmxlIGJ5IGNlcnRhaW4gc3R5bGUgcHJvcGVydGllcy4gVGhlIHR5cGVcclxuICogcGFyYW1ldGVyIGhlbHBzIGRpZmZlcmVudGlhdGUgdGhlc2UgaW50ZXJmYWNlcyBzbyB0aGF0IGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBvbmVcclxuICogdHlwZSBvZiBzdHlsZSBwcm9wZXJ0aWVzIChlLmcuIFwidHJhbnNmb3JtXCIpIGNhbm5vdCBiZSBhc3NpZ25lZCB0byBhbiBpbmNvbXBhdGlibGUgc3R5bGUgcHJvcGVydHlcclxuICogKGUuZy4gY2xpcC1wYXRoKS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdlbmVyaWNQcm94eTxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICAocD86IFQpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3RyaW5nUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcuIFRoaXMgZnVuY3Rpb24gaXMgcGFydFxyXG4gKiBvZiB0eXBlIGRlZmluaXRpb24gZm9yIGFsbCBDU1MgcHJvcGVydGllcyAtIGV2ZW4gZm9yIHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBgc3RyaW5nYCBhcyBwYXJ0IG9mXHJcbiAqIHRoZWlyIHR5cGUuXHJcbiAqIFxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJldHVybmVkIGZyb20gdGhlIGByYXcoKWAgZnVuY3Rpb24sIHdoaWNoIGFsbG93cyBieS1wYXNzaW5nIHRoZSBwcm9wZXJ0eVxyXG4gKiB0eXBpbmcgcnVsZXMgYW5kIHNwZWNpZnlpbmcgYSBzdHJpbmcgZGlyZWN0bHkuIFRoaXMgbWlnaHQgYmUgdXNlZnVsLCB3aGVuIGEgc3RyaW5nIHZhbHVlIGlzXHJcbiAqIG9idGFpbmVkIGZyb20gc29tZSBleHRlcm5hbCBjYWxjdWxhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHJpbmdQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJzdHJpbmdcIj4ge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tVmFyIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBvYmplY3Qgd2l0aCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIG5lZWRlZCBiZWNhdXNlIGV2ZXJ5IHN0eWxlIHByb3BlcnR5IGNhbiBhY2NlcHQgdmFsdWUgaW4gdGhlIGZvcm0gb2YgdGhlIHZhcigpXHJcbiAqIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhcjxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0c2V0VmFsdWUoIHZhbHVlOiBULCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGV4dGVuZHMgdGhlIGdpdmVuIHR5cGUgd2l0aCB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAtIElDdXN0b21WYXIgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIHVzaW5nIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eS5cclxuICogLSBJU3RyaW5nUHJveHkgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIHNwZWNpZnlpbmcgcmF3IHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkPFQ+ID0gVCB8IElDdXN0b21WYXI8VD4gfCBJU3RyaW5nUHJveHkgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZW5jYXBzdWxhdGVzIHRoZSB0eXBlIG9mIHByb3BlcnR5IGluIGFuIG9iamVjdCB3aXRoIGEgc2luZ2xlIFwiIVwiIHByb3BlcnR5LiBUaGlzXHJcbiAqIHR5cGUgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGJlIGZsYWdnZWQgYXMgXCIhaW1wb3J0YW50XCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJbXBvcnRhbnRQcm9wPFQ+ID0geyBcIiFcIjogRXh0ZW5kZWQ8VD4gfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFeHRlbmRlZFByb3AgZXh0ZW5kcyB0aGUgZ2l2ZW4gZ2VuZXJpYyB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyBlbGVtZW50czpcclxuICogLSBPYmplY3Qgd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSBcIiFcIiwgd2hpY2ggaXMgdXNlZCB0byBtYXJrIGEgcHJvcGVydHkgYXMgXCIhaW1wb3J0YW50XCIuXHJcbiAqIC0gR2xvYmFsX1N0eWxlVHlwZSwgd2hpY2ggYWxsb3dzIGFueSBwcm9wZXJ0eSB0byBiZSBhc3NpZ25lZCB0aGUgZ2xvYmFsIHZhbHVlcyBzdWNoIGFzXHJcbiAqICAgXCJpbml0aWFsXCIsIFwiaW5oZXJpdFwiLCBcInVuc2V0XCIgYW5kIFwicmV2ZXJ0XCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFByb3A8VD4gPSBFeHRlbmRlZDxUPiB8IEltcG9ydGFudFByb3A8VD4gfCBHbG9iYWxfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgcGFpci1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byAyIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPclBhaXI8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPl07XHJcblxyXG4vKiogVHlwZSBmb3IgYm94LWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDQgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yQm94PFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+PywgRXh0ZW5kZWQ8VD4/XTtcclxuXHJcbi8qKiBUeXBlIGZvciBhIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSBvciBtb3JlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPck1hbnk8VD4gPSBUIHwgRXh0ZW5kZWQ8VD5bXTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSVF1b3RlZFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYSBzdHJpbmcgaW4gcXVvdGF0aW9uIG1hcmtzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElRdW90ZWRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJxdW90ZWRcIj4ge31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWVyaWMgdHlwZXMgYXMgYSBiYXNpcyBmb3IgaGFuZGxpbmcgQ1NTIDxudW1iZXI+LCA8bGVuZ3RoPiwgPGFuZ2xlPiwgZXRjLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmc+ID0gbnVtYmVyIHwgc3RyaW5nIHwgSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmc+ID0gT25lT3JNYW55PE51bWJlckJhc2U8VD4+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOdW1iZXJCYXNlTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIHR5cGUsIHRoZXkgYXJlIGNvbnZlcnRlZFxyXG4gKiB0byBzdHJpbmdzIHVzaW5nIHRoZSBgbnVtYmVyVG9TdHJpbmdgIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlckJhc2VNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWluKCkgZnVuY3Rpb24uICovXHJcbiAgICBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIGNsYW1wKCkgZnVuY3Rpb24uICovXHJcbiAgICBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIGNhbGMoKSBmdW5jdGlvbi4gVGhpcyBtZXRob2QgaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3RcclxuICAgICAqIGJlIGludm9rZWQgd2l0aCBhIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gICAgICovXHJcbiAgICBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxudW1iZXI+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBOdW1iZXIgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyVHlwZSA9IFwiTnVtYmVyXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlIC0gbm90ZSB0aGF0IGl0IGV4bHVkZXMgYHN0cmluZ2AgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTnVtYmVyID0gRXhjbHVkZTxOdW1iZXJCYXNlPE51bWJlclR5cGU+LHN0cmluZz47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aU51bWJlciA9IE9uZU9yTWFueTxDc3NOdW1iZXI+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8TnVtYmVyVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NOdW1iZXJNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxudW1iZXI+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NOdW1iZXJNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPE51bWJlclR5cGU+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHBlcmNlbnQgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFVuaXRzID0gXCIlXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUGVyY2VudCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VHlwZSA9IFwiUGVyY2VudFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUGVyY2VudCA9IE51bWJlckJhc2U8UGVyY2VudFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUGVyY2VudCA9IE9uZU9yTWFueTxDc3NQZXJjZW50PjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGVyY2VudFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxQZXJjZW50VHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NQZXJjZW50TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1BlcmNlbnRNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPFBlcmNlbnRUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGxlbmd0aD5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGxlbmd0aCAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhVbml0cyA9IFwiUVwiIHwgXCJjaFwiIHwgXCJjbVwiIHwgXCJlbVwiIHwgXCJleFwiIHwgXCJpY1wiIHwgXCJpblwiIHwgXCJsaFwiIHwgXCJtbVwiIHwgXCJwY1wiIHxcclxuICAgICAgICAgICAgICAgIFwicHRcIiB8IFwicHhcIiB8IFwidmJcIiB8IFwidmhcIiB8IFwidmlcIiB8IFwidndcIiB8IFwicmVtXCIgfCBcInJsaFwiIHwgXCJ2bWF4XCIgfCBcInZtaW5cIiB8IFwiZnJcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBMZW5ndGggdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVHlwZSA9IFwiTGVuZ3RoXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoID0gTnVtYmVyQmFzZTxMZW5ndGhUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpTGVuZ3RoID0gT25lT3JNYW55PENzc0xlbmd0aD47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by0yLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoUGFpciA9IE9uZU9yUGFpcjxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tNC1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aEJveCA9IE9uZU9yQm94PENzc0xlbmd0aD47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTGVuZ3RoUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PExlbmd0aFR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTGVuZ3RoTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bGVuZ3RoPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTGVuZ3RoTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxMZW5ndGhUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1pbm1heCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElMZW5ndGhQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8YW5nbGU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBhbmdsZSAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVVuaXRzID0gXCJkZWdcIiB8IFwicmFkXCIgfCBcImdyYWRcIiB8IFwidHVyblwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEFuZ2xlIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVHlwZSA9IFwiQW5nbGVcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlID0gTnVtYmVyQmFzZTxBbmdsZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUFuZ2xlID0gT25lT3JNYW55PENzc0FuZ2xlPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuZ2xlUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PEFuZ2xlVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NBbmdsZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGFuZ2xlPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzQW5nbGVNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPEFuZ2xlVHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDx0aW1lPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgdGltZSAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVW5pdHMgPSBcInNcIiB8IFwibXNcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBUaW1lIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFRpbWVUeXBlID0gXCJUaW1lXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NUaW1lID0gTnVtYmVyQmFzZTxUaW1lVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlUaW1lID0gT25lT3JNYW55PENzc1RpbWU+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWVQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8VGltZVR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzVGltZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHRpbWU+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NUaW1lTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxUaW1lVHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxyZXNvbHV0aW9uPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcmVzb2x1dGlvbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uVW5pdHMgPSBcImRwaVwiIHwgXCJkcGNtXCIgfCBcImRwcHhcIiB8IFwieFwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFJlc29sdXRpb24gdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblR5cGUgPSBcIlJlc29sdXRpb25cIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Jlc29sdXRpb24gPSBOdW1iZXJCYXNlPFJlc29sdXRpb25UeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVJlc29sdXRpb24gPSBPbmVPck1hbnk8Q3NzUmVzb2x1dGlvbj47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlc29sdXRpb25Qcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8UmVzb2x1dGlvblR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUmVzb2x1dGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxSZXNvbHV0aW9uVHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxmcmVxdWVuY3k+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBmcmVxdWVuY3kgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VW5pdHMgPSBcIkh6XCIgfCBcImtIelwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEZyZXF1ZW5jeSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lUeXBlID0gXCJGcmVxdWVuY3lcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzRnJlcXVlbmN5ID0gTnVtYmVyQmFzZTxGcmVxdWVuY3lUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpRnJlcXVlbmN5ID0gT25lT3JNYW55PENzc0ZyZXF1ZW5jeT47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRnJlcXVlbmN5UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PEZyZXF1ZW5jeVR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzRnJlcXVlbmN5TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxGcmVxdWVuY3lUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgcG9pbnQgdXNpbmcgeCBhbmQgeSBjb29yZGluYXRlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc1BvaW50ID0gW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkID0gXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyBhIHNpbXBsZSAxIG9yIHR3byB2YWx1ZXMgYDxwb3NpdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIFNpbXBsZUNzc1Bvc2l0aW9uID0gSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBmdWxsIHVwIHRvIDQgdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb3NpdGlvbiA9IFNpbXBsZUNzc1Bvc2l0aW9uIHwgXHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmRdIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgbXVsdGlwbGUgYDxwb3NpdGlvbj5gIENTUyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUNzc1Bvc2l0aW9uID0gRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+W107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSYWRpdXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgY29ybmVyIHJhZGl1cyAqL1xyXG5leHBvcnQgdHlwZSBDc3NSYWRpdXMgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVSTHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJVXJsUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBDU1MgdXJsKCkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJ1cmxcIj4ge307XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBhdHRyKCkgZnVuY3Rpb24gc3VwcG9ydFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJUeXBlS2V5d29yZCA9IFwic3RyaW5nXCIgfCBcImNvbG9yXCIgfCBcInVybFwiIHwgXCJpbnRlZ2VyXCIgfCBcIm51bWJlclwiIHwgXCJsZW5ndGhcIiB8IFwiYW5nbGVcIiB8IFwidGltZVwiIHwgXCJmcmVxdWVuY3lcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJVbml0S2V5d29yZCA9IFBlcmNlbnRVbml0cyB8IExlbmd0aFVuaXRzIHwgVGltZVVuaXRzIHwgQW5nbGVVbml0cyB8IFJlc29sdXRpb25Vbml0cyB8IEZyZXF1ZW5jeVVuaXRzO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gV2ViIE5hbWVzcGFjZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBXZWJOYW1lc3BhY2VzIGNsYXNzIGNvbnRhaW5zIGlkZW50aWZpZXJzIGZvciB0aGUga25vd24gV2ViLXJlbGF0ZWQgbmFtZXNwYWNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWJOYW1lc3BhY2VzXHJcbntcclxuXHRzdGF0aWMgcmVhZG9ubHkgSFRNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBTVkcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhMaW5rID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBNYXRoTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9