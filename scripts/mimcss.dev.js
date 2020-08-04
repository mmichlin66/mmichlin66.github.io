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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU2NoZWR1bGluZ0FQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1N0eWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvVXRpbEFQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvbWltY3NzVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0FuaW1hdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0NvdW50ZXJSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JpZFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2NoZWR1bGluZy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL01lZGlhRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TZWxlY3RvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLGlHQUFrRDtBQUlsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxTQUFnQixHQUFHLENBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVTtJQUU1RCxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELGtCQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBQ0gsU0FBZ0IsR0FBRyxDQUFFLENBQWtCLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVO0lBRXJFLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBSEQsa0JBR0M7QUFFRDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILFNBQWdCLEtBQUssQ0FBRSxDQUF5QyxFQUFFLENBQVM7SUFFdkUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFIRCxzQkFHQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVELG1HQUFtRDtBQUNuRCxnR0FBd0g7QUFLeEg7Ozs7O0dBS0c7QUFDSCxNQUFNLFFBQVE7SUFFVixJQUFXLE1BQU0sS0FBc0IsT0FBTyxrQkFBa0IsQ0FBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixJQUFXLGVBQWUsS0FBc0IsT0FBTyxrQkFBa0IsQ0FBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRyxJQUFXLE1BQU0sS0FBc0IsT0FBTyxrQkFBa0IsQ0FBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixJQUFXLGVBQWUsS0FBc0IsT0FBTyxrQkFBa0IsQ0FBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRyxJQUFXLEtBQUssS0FBcUIsT0FBTyxpQkFBaUIsQ0FBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixJQUFXLGNBQWMsS0FBcUIsT0FBTyxpQkFBaUIsQ0FBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN6RztBQUlEOztHQUVHO0FBQ1EsZ0JBQVEsR0FBYyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBSWhEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFFLEdBQUcsSUFBc0I7SUFFaEQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBSEQsOEJBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFTLGtCQUFrQixDQUFFLElBQVk7SUFFckMsSUFBSSxDQUFDLEdBQVEsQ0FBQyxHQUFHLFlBQWtDLEVBQWUsRUFBRSxDQUNoRSxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV2RSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFO1FBQzNCLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsa0JBQWtCLENBQUUsSUFBWTtJQUVyQyxJQUFJLENBQUMsR0FBUSxDQUFDLEdBQUcsWUFBa0MsRUFBZSxFQUFFLENBQ2hFLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU3RixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsWUFBNEQsRUFBRSxFQUFFO1FBQ3hFLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxZQUFtRixFQUFFLEVBQUU7UUFDN0YsQ0FBQyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDekIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDM0IsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUosQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQStCLEVBQUUsRUFBRTtRQUN4QyxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFSixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBMEIsRUFBRSxFQUFFO1FBQy9CLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVKLE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsaUJBQWlCLENBQUUsSUFBWTtJQUVwQyxJQUFJLENBQUMsR0FBUSxDQUFDLEdBQUcsWUFBa0MsRUFBZSxFQUFFLENBQ2hFLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEYsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQXNCLEVBQUUsRUFBRTtRQUM3QixDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFSixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBMEIsRUFBRSxFQUFFO1FBQy9CLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUlELFNBQVMsc0JBQXNCLENBQUUsSUFBWSxFQUFFLFlBQWtDLEVBQzdFLEtBQXVCO0lBRXZCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFJLEtBQUssRUFDVDtRQUNJLFdBQVcsR0FBRyxtQkFBTyxDQUFFLEtBQUssRUFBRTtZQUMxQixVQUFVLEVBQUUsd0JBQVksQ0FBQyxXQUFXO1lBQ3BDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7U0FDbkQsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNaO0lBRUQsT0FBTyxHQUFHLElBQUksSUFBSSxXQUFXLEdBQUcsNEJBQTRCLENBQUUsWUFBWSxFQUFFLDBCQUFjLENBQUMsR0FBRyxDQUFDO0FBQ25HLENBQUM7QUFJRCxTQUFTLHNCQUFzQixDQUFFLElBQVksRUFBRSxZQUFrQyxFQUM3RSxLQUEwQixFQUFFLFlBQTBELEVBQ3RGLEdBQWdCO0lBRWhCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckMsSUFBSSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLHlCQUFhLENBQUMsa0JBQWtCLENBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEcsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLG1CQUFPLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELElBQUksWUFBWSxHQUFHLEtBQUssSUFBSSxrQkFBa0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxJQUFJLGtCQUFrQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEgsT0FBTyxHQUFHLElBQUksSUFBSSxZQUFZLEdBQUcsNEJBQTRCLENBQUUsWUFBWSxFQUFFLDBCQUFjLENBQUMsR0FBRyxDQUFDO0FBQ3BHLENBQUM7QUFJRCxTQUFTLHFCQUFxQixDQUFFLElBQVksRUFBRSxZQUFrQyxFQUM1RSxLQUEwQixFQUFFLEdBQTJCO0lBRXZELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSx3QkFBWSxDQUFDLGFBQWEsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUUsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLG1CQUFPLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELElBQUksWUFBWSxHQUFHLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEUsT0FBTyxHQUFHLElBQUksSUFBSSxZQUFZLEdBQUcsNEJBQTRCLENBQUUsWUFBWSxFQUFFLHdCQUFZLENBQUMsR0FBRyxDQUFDO0FBQ2xHLENBQUM7QUFJRCxTQUFTLGlCQUFpQixDQUFFLElBQXNCO0lBRTlDLElBQUksWUFBWSxHQUFHLG1CQUFPLENBQUUsSUFBSSxFQUFFO1FBQzlCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsTUFBTSxFQUFFLEdBQUc7S0FDZCxDQUFDO0lBRUYsT0FBTyxjQUFjLFlBQVksR0FBRyxDQUFDO0FBQ3pDLENBQUM7QUFJRCxTQUFTLDRCQUE0QixDQUFvQixHQUF5QixFQUM5RSxTQUFrQztJQUVsQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUlELFNBQVMsMEJBQTBCLENBQW9CLEdBQXVCLEVBQzFFLFNBQWtDO0lBRWxDLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLDBCQUFhO1FBQ3pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsOEJBQThCLENBQUUsQ0FBMkIsRUFBRSxTQUFTLENBQUM7S0FDMUYsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsOEJBQThCLENBQW9CLEdBQTJCLEVBQ2xGLFNBQWtDO0lBRWxDLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEUsT0FBTyxHQUFHLDBCQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUN4RixDQUFDO0FBSUQsU0FBUyxzQkFBc0IsQ0FBRSxHQUFtQjtJQUVoRCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSwwQkFBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUMzRSxDQUFDLENBQUM7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwTkQsOEZBSTRCO0FBQzVCLDBHQUFxRztBQU1yRyxpR0FBaUY7QUFDakYsMEdBQW9EO0FBQ3BELHdGQUF3QztBQUN4Qyx1R0FBa0Q7QUFDbEQsOEZBQThEO0FBQzlELDhGQUFtRztBQUNuRyxpR0FBMkQ7QUFDM0QsZ0dBQTRDO0FBSzVDOzs7R0FHRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxLQUF1QjtJQUVqRCxPQUFPLElBQUkseUJBQVksQ0FBRSxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBSEQsOEJBR0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixNQUFNLENBQUUsS0FBd0IsRUFDNUMsWUFBbUQ7SUFFdEQsT0FBTyxJQUFJLHNCQUFTLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFKRCx3QkFJQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixVQUFVLENBQUUsR0FBRyxPQUFpRDtJQUUvRSxPQUFPLElBQUkseUJBQWEsQ0FBRSxPQUFPLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSEQsZ0NBR0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixHQUFHLENBQUUsS0FBd0IsRUFBRSxZQUErQjtJQUU3RSxPQUFPLElBQUksbUJBQU0sQ0FBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUhELGtCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsUUFBcUIsRUFBRSxLQUF1QjtJQUVyRSxPQUFPLElBQUkseUJBQVksQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHdCQUdDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLE1BQXlCLEVBQ3BELFlBQXNDO0lBRXRDLE9BQU8sSUFBSSw2QkFBYSxDQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSkQsZ0NBSUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsSUFBSSxDQUE2QixRQUFXLEVBQUUsT0FBeUIsRUFDbkYsWUFBbUM7SUFFdEMsT0FBTyxJQUFJLGlCQUFPLENBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBSkQsb0JBSUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLFlBQW9DO0lBRTdELE9BQU8sSUFBSSwwQkFBVyxDQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIRCw0QkFHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUUsWUFBcUMsRUFDNUQsZ0JBQTBCO0lBRTdCLE9BQU8sSUFBSSx3QkFBWSxDQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFKRCw4QkFJQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUUsWUFBcUM7SUFFL0QsT0FBTyxJQUFJLHdCQUFZLENBQUUsWUFBWSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUhELDhCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsR0FBVyxFQUFFLFVBQWdDLEVBQ3JFLGFBQXNDO0lBRXRDLE9BQU8sSUFBSSxzQkFBVSxDQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUpELDBCQUlDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsUUFBbUI7SUFFN0MsT0FBTyxJQUFJLHdCQUFZLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUhELDhCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsU0FBaUIsRUFBRSxNQUFlO0lBRTdELE9BQU8sSUFBSSx5QkFBYSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsZ0NBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxXQUE2QixFQUFFLEtBQWdCO0lBRXJFLE9BQU8sSUFBSSxvQkFBUSxDQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBSEQsc0JBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBNkIsS0FBb0IsRUFDdEUsV0FBeUM7SUFFNUMsT0FBTyxJQUFJLHlCQUFZLENBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFKRCw4QkFJQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUE2QixLQUEwQixFQUN6RSxXQUF5QztJQUU1QyxPQUFPLElBQUksc0JBQVMsQ0FBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUpELHdCQUlDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixJQUFJLENBQTZCLFdBQXlDO0lBRXpGLE9BQU8sc0NBQXNCLENBQUUsV0FBVyxDQUFNLENBQUM7QUFDbEQsQ0FBQztBQUhELG9CQUdDO0FBSUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLE1BQU0sQ0FBNkIsV0FBeUM7SUFFM0YsOEZBQThGO0lBQzlGLDRDQUE0QztJQUM1QyxPQUFPLFdBQVcsWUFBWSwyQkFBZSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUM7QUFDakYsQ0FBQztBQUxELHdCQUtDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsTUFBZSxFQUFFLE1BQWU7SUFFakUsT0FBTyxrQ0FBa0IsQ0FBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUhELDRDQUdDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxHQUFHLE9BQTBDO0lBRXJFLE9BQU8sbUJBQU8sQ0FBRSxPQUFPLEVBQUU7UUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLHNCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzlELENBQUMsQ0FBQztBQUNKLENBQUM7QUFMRCwwQkFLQztBQXdCRDs7OztHQUlHO0FBQ0gsU0FBZ0IsbUJBQW1CO0lBRS9CLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBSEQsa0RBR0M7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLElBQTZDLEVBQ3pFLEdBQUcsSUFBaUQ7SUFFcEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNyQyxVQUFVLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUvRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBVEQsd0NBU0M7QUFJRDs7OztHQUlHO0FBQ0gsTUFBTSxhQUFhO0lBQW5CO1FBd0JJLGdHQUFnRztRQUNoRyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFDM0MsQ0FBQztJQXhCRzs7T0FFRztJQUNJLEdBQUcsQ0FBRSxXQUFvRDtRQUU1RCxJQUFJLFFBQVEsR0FBRyxzQ0FBc0IsQ0FBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxPQUFPO1FBRVgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUVaLElBQUksR0FBRyxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ2hELENBQUM7Q0FJSjtBQUlEOzs7O0dBSUc7QUFDSCxNQUFNLHdCQUF3QjtJQUE5QjtRQXFCSSx1REFBdUQ7UUFDaEQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFeEIsMkRBQTJEO1FBQ3BELG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRTNCLGtGQUFrRjtRQUMxRSxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFDbkQsQ0FBQztJQTNCRyxpQkFBaUI7SUFDVixXQUFXLENBQUUsQ0FBUyxFQUFFLGNBQXdCO1FBRW5ELElBQUksY0FBYztZQUNkLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzs7WUFFN0IsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpQkFBaUI7SUFDVixrQkFBa0IsQ0FBRSxRQUF5QjtRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLEVBQ2xDO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUIsaUNBQWlCLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztDQVVKOzs7Ozs7Ozs7Ozs7Ozs7QUM3V0QsMEdBQThEO0FBQzlELGlHQUc2QjtBQUk3Qjs7Ozs7O0dBTUc7QUFDSCxTQUFnQixRQUFRLENBQ3ZCLGVBQTZDLEVBQzdDLGFBQXNCO0lBRXRCLElBQUksUUFBUSxHQUFHLHNDQUFzQixDQUFFLGVBQWUsQ0FBTSxDQUFDO0lBQzdELElBQUksUUFBUTtRQUNYLDJCQUFjLENBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFFLFFBQVEsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTFGLE9BQU8sUUFBUSxDQUFDO0FBQ2pCLENBQUM7QUFURCw0QkFTQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixVQUFVLENBQUUsUUFBeUIsRUFBRSxhQUFzQjtJQUU1RSwyQkFBYyxDQUFFLENBQUMsU0FBcUIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBRSxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM1RixDQUFDO0FBSEQsZ0NBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixjQUFjLENBQUUsYUFBc0I7SUFFckQsMkJBQWMsQ0FBRSxDQUFDLFNBQXFCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN2RixDQUFDO0FBSEQsd0NBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixlQUFlLENBQUUsYUFBc0I7SUFFdEQsMkJBQWMsQ0FBRSxDQUFDLFNBQXFCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN4RixDQUFDO0FBSEQsMENBR0M7QUFJRDs7Ozs7R0FLRztBQUNILFNBQWdCLHVCQUF1QixDQUFFLGFBQXFCO0lBRTdELE9BQU8sc0NBQXlCLENBQUUsYUFBYSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUhELDBEQUdDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsdUJBQXVCO0lBRXRDLE9BQU8sc0NBQXlCLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBSEQsMERBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixpQkFBaUIsQ0FBRSxTQUFxQjtJQUVwRCxPQUFPLGdDQUFtQixDQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCw4Q0FHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQUUsRUFBVTtJQUUzQyxPQUFPLGtDQUFxQixDQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFIRCxrREFHQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEdELG1HQUU2QjtBQUM3QixnR0FHNkI7QUFDN0IsaUdBQWtFO0FBSWxFOzs7R0FHRztBQUNILFNBQWdCLFFBQVEsQ0FBRSxLQUEyQixFQUFFLEdBQUcsTUFBc0I7SUFFL0UsT0FBTyxHQUFHLEVBQUUsQ0FBQyxrQ0FBc0IsQ0FBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELDRCQUdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRix3QkFBd0I7QUFDeEIsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7Ozs7R0FLRztBQUNILFNBQWdCLGlCQUFpQixDQUFvQyxhQUFnQixFQUNwRixjQUFtQztJQUVuQyxPQUFPLDhCQUFpQixDQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUpELDhDQUlDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixlQUFlLENBQUUsR0FBZ0IsRUFBRSxRQUFxQyxFQUN2RixhQUFzQjtJQUVuQixxQkFBcUIsQ0FBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3JHLENBQUM7QUFKRCwwQ0FJQztBQUlEOzs7OztHQUtHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUUsR0FBZ0IsRUFBRSxRQUEyQyxFQUNuRyxhQUFzQjtJQUVuQiwwQ0FBNkIsQ0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUpELHNEQUlDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLHdCQUF3QixDQUFFLFFBQWtCO0lBRTNELElBQUksR0FBRyxHQUFtQixFQUFFLENBQUM7SUFFN0IsaUNBQW9CLENBQUUsUUFBUSxFQUM3QixDQUFDLElBQVksRUFBRSxLQUFhLEVBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0QsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBUkQsNERBUUM7QUFJRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxXQUFxQixFQUFFLFdBQXFCO0lBRTFFLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxXQUFXO1FBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ1IsSUFBSSxDQUFDLFdBQVc7UUFDcEIsT0FBTyx3QkFBd0IsQ0FBRSxXQUFXLENBQUMsQ0FBQztTQUMxQyxJQUFJLENBQUMsV0FBVztRQUNwQixPQUFPLHdCQUF3QixDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRS9DLHdEQUF3RDtJQUN4RCxJQUFJLGlCQUFpQixHQUFHLHdCQUF3QixDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELElBQUksaUJBQWlCLEdBQUcsd0JBQXdCLENBQUUsV0FBVyxDQUFDLENBQUM7SUFFL0QsSUFBSSxTQUFTLEdBQTBCLElBQUksQ0FBQztJQUU1QywyRkFBMkY7SUFDM0YsbUJBQW1CO0lBQ25CLEtBQUssSUFBSSxHQUFHLElBQUksaUJBQWlCLEVBQ2pDO1FBQ0MsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxZQUFZLElBQUksSUFBSSxFQUN4QjtZQUNDLFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO1lBQzVCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDM0I7YUFFRDtZQUNDLElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksWUFBWSxLQUFLLFlBQVksRUFDakM7Z0JBQ0MsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUM7YUFDOUI7U0FDRDtLQUNEO0lBRUQsMkZBQTJGO0lBQzNGLGlCQUFpQjtJQUNqQixLQUFLLElBQUksR0FBRyxJQUFJLGlCQUFpQixFQUNqQztRQUNDLElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksWUFBWSxJQUFJLElBQUksRUFDeEI7WUFDQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUM1QixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEM7S0FDRDtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUM7QUFqREQsc0NBaURDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixVQUFVO0FBQ1YsRUFBRTtBQUNGLCtGQUErRjtBQUUvRixvRkFBb0Y7QUFDcEYsU0FBUyxhQUFhLENBQUUsSUFBWSxFQUFFLE1BQTRCO0lBRTlELE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksMEJBQWMsQ0FBQyxhQUFhLENBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNyRSxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsTUFBNEI7SUFFcEQsT0FBTyxhQUFhLENBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFIRCxnQ0FHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLE1BQTRCO0lBRWxELE9BQU8sYUFBYSxDQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsNEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxNQUE0QjtJQUVuRCxPQUFPLGFBQWEsQ0FBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUhELDhCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsTUFBNEI7SUFFaEQsT0FBTyxhQUFhLENBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFIRCx3QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLE1BQTRCO0lBRWpELE9BQU8sYUFBYSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBSEQsMEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFFBQVEsQ0FBRSxNQUE0QjtJQUVsRCxPQUFPLGFBQWEsQ0FBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUhELDRCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsTUFBNEI7SUFFL0MsT0FBTyxhQUFhLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxzQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFFLE1BQTJCO0lBRTdDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSx5QkFBYSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2pFLENBQUM7QUFIRCxvQkFHQztBQUlEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsVUFBVSxDQUN0QixDQUFzQixFQUN0QixDQUFzQixFQUN0QixLQUEwQixFQUMxQixJQUEwQixFQUMxQixNQUE0QjtJQUUvQixPQUFPLEdBQUcsRUFBRSxDQUFDLGVBQWUsdUNBQTBCLENBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsR0FBRyxDQUFDO0FBQzFGLENBQUM7QUFSRCxnQ0FRQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFFLE1BQTBCO0lBRWpELE9BQU8sR0FBRyxFQUFFLENBQUMsY0FBYywwQkFBYyxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ3hFLENBQUM7QUFIRCw4QkFHQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsZUFBZTtBQUNmLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsTUFBcUMsRUFBRSxNQUF5QztJQUV0RyxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsaUNBQW9CLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMseUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDaEYsQ0FBQztBQUpELHNCQUlDO0FBV0Q7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsTUFBb0IsRUFBRSxRQUFnQztJQUUxRSxJQUFJLENBQUMsR0FBSSxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RFLElBQUksR0FBRyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxtQkFBTyxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN0QyxDQUFDO0FBTEQsd0JBS0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxFQUFnQixFQUFFLEVBQWdCLEVBQzFELFFBQWdDO0lBRTdCLElBQUksR0FBRyxHQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsSUFBSSxHQUFHLEdBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLG1CQUFPLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMvQyxDQUFDO0FBUEQsMEJBT0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxXQUEwQyxFQUNsRSxHQUFHLE1BQWtCO0lBRXJCLE9BQU8sR0FBRyxFQUFFO1FBRVgsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ25CLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUTtZQUNsQyxDQUFDLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQzs7WUFFdkIsQ0FBQyxJQUFJLEdBQUcseUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUVoRSxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsRUFBRSxDQUFDLHlCQUFhLENBQUMsa0JBQWtCLENBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxLQUF5QixFQUFFLElBQTBDLEVBQ3pGLE9BQWlCO0lBRWpCLE9BQU8sR0FBRyxFQUFFO1FBRVgsSUFBSSxXQUFXLEdBQUcsd0JBQVksQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFFLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLE9BQU8sT0FBTyxXQUFXLEdBQUcsVUFBVSxHQUFHLGFBQWEsR0FBRyxDQUFDO0lBQzNELENBQUMsQ0FBQztBQUNILENBQUM7QUFWRCxrQkFVQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFFLFFBQTZCO0lBRWxELE9BQU8sSUFBSSxXQUFXLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUhELG9CQUdDO0FBSUQ7OztHQUdHO0FBQ0gsTUFBTSxXQUFXO0lBSWhCLFlBQW9CLFFBQTZCO1FBRWhELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLElBQUksUUFBUTtZQUNYLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUU1QixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQWlDO0lBQzFCLGFBQWEsS0FBYyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUl4RCw2Q0FBNkM7SUFDeEMsS0FBSyxDQUFFLE9BQWUsRUFBRSxHQUFHLEtBQTRCO1FBRTlELElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUUxQixLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssRUFDdEI7WUFDQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztpQkFFeEI7Z0JBQ0MsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJO29CQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDM0I7U0FDRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDLENBQUUsS0FBc0IsRUFBRSxHQUFHLElBQXVCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEcsQ0FBQyxDQUFFLEtBQXNCLEVBQUUsR0FBRyxJQUF1QixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RyxDQUFDLENBQUUsS0FBYSxFQUFFLEdBQUcsSUFBYyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBRSxLQUFhLEVBQUUsR0FBRyxJQUFjLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEYsQ0FBQyxDQUFFLEtBQWEsRUFBRSxHQUFHLElBQWMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDLENBQUUsS0FBYSxFQUFFLEdBQUcsSUFBYyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBGLENBQUMsQ0FBRSxLQUFrRCxFQUMzRCxHQUFHLElBQW1ELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQyxDQUFFLEtBQWtELEVBQzNELEdBQUcsSUFBbUQsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5RixDQUFDLENBQUUsS0FBb0MsRUFDN0MsR0FBRyxJQUFxQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBRSxLQUFvQyxFQUM3QyxHQUFHLElBQXFDLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEYsQ0FBQyxDQUFFLEtBQW9DLEVBQzdDLEdBQUcsSUFBcUMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDLENBQUUsS0FBb0MsRUFDN0MsR0FBRyxJQUFxQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhGLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDLENBQUUsS0FBc0IsRUFBRSxHQUFHLElBQXVCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEcsQ0FBQyxDQUFFLEtBQW1ELEVBQzVELEdBQUcsSUFBb0QsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDLENBQUUsS0FBbUQsRUFDNUQsR0FBRyxJQUFvRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9GLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztDQUM3QztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsYUFBYTtBQUNiLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsQ0FBc0IsRUFBRSxDQUFzQixFQUFFLENBQXNCLEVBQzdGLENBQXNCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QjtJQUVyRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsbUJBQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDN0UsQ0FBQztBQUpELHdCQUlDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixRQUFRLENBQ3RCLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQ2xHLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQ2xHLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQ2xHLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCO0lBR2hHLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxtQkFBTyxDQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDekgsQ0FBQztBQVJELDRCQVFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixXQUFXLENBQUUsQ0FBc0I7SUFFL0MsT0FBTyxHQUFHLEVBQUUsQ0FBQyxlQUFlLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDbEUsQ0FBQztBQUhELGtDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBRSxJQUFZLEVBQUUsQ0FBcUI7SUFFcEQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzdELENBQUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFxQjtJQUV6QyxPQUFPLFVBQVUsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsQ0FBcUI7SUFFMUMsT0FBTyxVQUFVLENBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFIRCwwQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLENBQXFCO0lBRTFDLE9BQU8sVUFBVSxDQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSEQsMEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxDQUFxQjtJQUUxQyxPQUFPLFVBQVUsQ0FBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUhELDBCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixRQUFRLENBQ3ZCLENBQXNCLEVBQUUsQ0FBc0IsRUFBRSxDQUFzQixFQUN0RSxDQUFxQjtJQUVyQixJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0RSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RSxPQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEMsQ0FBQztBQVBELDRCQU9DO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsRUFBdUIsRUFBRSxFQUF3QjtJQUVwRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUN2SCxDQUFDO0FBSEQsc0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQVMsU0FBUyxDQUFFLElBQVksRUFBRSxDQUFzQjtJQUVwRCxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDOUQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLENBQXNCO0lBRTFDLE9BQU8sU0FBUyxDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsd0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFzQjtJQUUxQyxPQUFPLFNBQVMsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsQ0FBc0I7SUFFMUMsT0FBTyxTQUFTLENBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx3QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDeEUsRUFBdUI7SUFFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDeEUseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ2pDLENBQUM7QUFORCwwQkFNQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFFLEVBQXNCLEVBQUUsRUFBdUI7SUFFakUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDcEgsQ0FBQztBQUhELG9CQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsRUFBc0I7SUFFekMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDNUQsQ0FBQztBQUhELHNCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsRUFBc0I7SUFFekMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDNUQsQ0FBQztBQUhELHNCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsQ0FBc0IsRUFBRSxDQUF1QjtJQUV0RSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUN4SCxDQUFDO0FBSEQsOEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQVMsYUFBYSxDQUFFLElBQVksRUFBRSxDQUFzQjtJQUV4RCxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDOUQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLENBQXNCO0lBRTlDLE9BQU8sYUFBYSxDQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsZ0NBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxDQUFzQjtJQUU5QyxPQUFPLGFBQWEsQ0FBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsQ0FBc0I7SUFFOUMsT0FBTyxhQUFhLENBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxnQ0FHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLENBQXNCLEVBQUUsQ0FBc0IsRUFDMUUsQ0FBc0I7SUFFdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdEUseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0FBQ3JDLENBQUM7QUFORCxrQ0FNQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsaUJBQWlCO0FBQ2pCLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsSUFBeUI7SUFFakQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxlQUFlLHlCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDckUsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsR0FBa0IsRUFBRSxHQUFrQjtJQUUxRCxJQUFJLE9BQU8sR0FBRyxFQUFFLFVBQVUsRUFBRSx5QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hELE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxtQkFBTyxDQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxtQkFBTyxDQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQy9FLENBQUM7QUFKRCx3QkFJQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLEtBQXFELEVBQ3pFLEdBQUcsTUFBbUI7SUFFdEIsb0dBQW9HO0lBQ3BHLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLG1CQUFPLENBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLDhCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ3JHLENBQUM7QUFMRCx3QkFLQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixJQUFJLENBQUUsV0FBMEMsRUFDNUQsV0FBMkM7SUFFM0MsSUFBSSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLG1CQUFPLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RCxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2pELENBQUM7QUFORCxvQkFNQzs7Ozs7Ozs7Ozs7Ozs7O0FDbndCRCxnR0FHNEI7QUFHNUIsbUdBQXVEO0FBSXZEOzs7O0dBSUc7QUFDUSxXQUFHLEdBQW1CLElBQUkseUJBQWEsRUFBRSxDQUFDO0FBSXJEOzs7R0FHRztBQUNRLGVBQU8sR0FBb0IsSUFBSSwwQkFBYyxFQUFFLENBQUM7QUFJM0QsNEJBQTRCO0FBQzVCLFNBQWdCLE9BQU8sQ0FBRSxDQUFTLElBQW1CLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBNUUsMEJBQTRFO0FBSTVFOzs7O0dBSUc7QUFDUSxXQUFHLEdBQW1CLElBQUkseUJBQWEsRUFBRSxDQUFDO0FBSXJELGtEQUFrRDtBQUNsRCxTQUFnQixDQUFDLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQXJFLGNBQXFFO0FBRXJFLHVDQUF1QztBQUN2QyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSwwQ0FBMEM7QUFDMUMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUsbUVBQW1FO0FBQ25FLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLDBFQUEwRTtBQUMxRSxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSx1Q0FBdUM7QUFDdkMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUscUNBQXFDO0FBQ3JDLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBekUsb0JBQXlFO0FBRXpFLDBEQUEwRDtBQUMxRCxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSwwQ0FBMEM7QUFDMUMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUsb0NBQW9DO0FBQ3BDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLHFDQUFxQztBQUNyQyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSxxQ0FBcUM7QUFDckMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkU7c0NBQ3NDO0FBQ3RDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLDBGQUEwRjtBQUMxRixTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RTt1Q0FDdUM7QUFDdkMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUseUZBQXlGO0FBQ3pGLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLHFFQUFxRTtBQUNyRSxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQXpFLGtCQUF5RTtBQUV6RSx3RUFBd0U7QUFDeEUsU0FBZ0IsR0FBRyxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUF6RSxrQkFBeUU7QUFFekUsb0ZBQW9GO0FBQ3BGLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBM0Usb0JBQTJFO0FBRTNFLG1GQUFtRjtBQUNuRixTQUFnQixJQUFJLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQTNFLG9CQUEyRTtBQUUzRSxvQ0FBb0M7QUFDcEMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFHdkU7Ozs7R0FJRztBQUNRLGFBQUssR0FBa0IsSUFBSSx3QkFBWSxFQUFFLENBQUM7QUFJckQscUNBQXFDO0FBQ3JDLFNBQWdCLEdBQUcsQ0FBRSxDQUFTLElBQWlCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFBeEUsa0JBQXdFO0FBRXhFLHFDQUFxQztBQUNyQyxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFpQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQXhFLGtCQUF3RTtBQUV4RSxzQ0FBc0M7QUFDdEMsU0FBZ0IsSUFBSSxDQUFFLENBQVMsSUFBaUIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUExRSxvQkFBMEU7QUFFMUUsbUNBQW1DO0FBQ25DLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQWlCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBMUUsb0JBQTBFO0FBSTFFOzs7O0dBSUc7QUFDUSxZQUFJLEdBQWlCLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBSWxELHlDQUF5QztBQUN6QyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFnQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXJFLGdCQUFxRTtBQUVyRSxvQ0FBb0M7QUFDcEMsU0FBZ0IsQ0FBQyxDQUFFLENBQVMsSUFBZ0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFuRSxjQUFtRTtBQUduRTs7OztHQUlHO0FBQ1Esa0JBQVUsR0FBdUIsSUFBSSw2QkFBaUIsRUFBRSxDQUFDO0FBSXBFLHNDQUFzQztBQUN0QyxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFzQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQTdFLGtCQUE2RTtBQUU3RSx1Q0FBdUM7QUFDdkMsU0FBZ0IsSUFBSSxDQUFFLENBQVMsSUFBc0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUEvRSxvQkFBK0U7QUFFL0UsdUNBQXVDO0FBQ3ZDLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQXNCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBL0Usb0JBQStFO0FBRS9FLG9DQUFvQztBQUNwQyxTQUFnQixDQUFDLENBQUUsQ0FBUyxJQUFzQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQXpFLGNBQXlFO0FBSXpFOzs7O0dBSUc7QUFDUSxpQkFBUyxHQUFzQixJQUFJLDRCQUFnQixFQUFFLENBQUM7QUFJakUsdUNBQXVDO0FBQ3ZDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQXFCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBMUUsZ0JBQTBFO0FBRTFFLDRDQUE0QztBQUM1QyxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFxQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQTVFLGtCQUE0RTtBQUk1RSwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GOzs7Ozs7R0FNRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxLQUEyQixFQUFFLEdBQUcsTUFBYTtJQUU5RCxPQUFPLEdBQUcsRUFBRSxDQUFDLGtDQUFzQixDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBSEQsa0JBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixNQUFNLENBQTZCLE1BQW1CLEVBQUUsUUFBMEI7SUFFOUYsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRO1FBQ2pCLENBQUMsQ0FBQyxTQUFTLE1BQU0sQ0FBQyxJQUFJLElBQUksOEJBQWlCLENBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7UUFDaEYsQ0FBQyxDQUFDLFNBQVMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQ2xDLENBQUM7QUFMRCx3QkFLQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixHQUFHLENBQUUsR0FBK0I7SUFFbkQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLG1CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNyQyxDQUFDO0FBSEQsa0JBR0M7QUFJRDs7Ozs7R0FLRztBQUNILFNBQWdCLElBQUksQ0FBRSxRQUEwQixFQUFFLFVBQXdELEVBQ3pHLFFBQTJCO0lBRXhCLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUMzRyxDQUFDO0FBSkQsb0JBSUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxHQUFRO0lBRTVCLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckMsQ0FBQztBQUhELHdCQUdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixXQUFXO0FBQ1gsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7O0dBR0c7QUFDSCxTQUFnQixPQUFPLENBQUUsVUFBMkMsRUFDbkUsS0FBeUMsRUFDekMsU0FBNEIsRUFBRSxVQUE2QjtJQUUzRCxPQUFPLEdBQUcsRUFBRTtRQUVYLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBTyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFPLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hELE9BQU8sR0FBRyxNQUFNLFlBQVksbUJBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDM0UsQ0FBQztBQUNGLENBQUM7QUFYRCwwQkFXQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLFFBQVEsQ0FBRSxVQUEyQyxFQUNwRSxTQUEyQixFQUFFLEtBQXlDLEVBQ3RFLFNBQTRCLEVBQUUsVUFBNkI7SUFFM0QsT0FBTyxHQUFHLEVBQUU7UUFFWCxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFPLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBTyxDQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEQsT0FBTyxHQUFHLE1BQU0sYUFBYSxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsR0FBRyxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDekYsQ0FBQztBQUNGLENBQUM7QUFaRCw0QkFZQzs7Ozs7Ozs7Ozs7Ozs7QUM5U0QsOEJBQThCOzs7OztBQUU5QixxRkFBbUM7QUFDbkMsdUZBQW9DO0FBTXBDLG1GQUFrQztBQUNsQywyRUFBOEI7QUFDOUIsNkVBQStCO0FBQy9CLDZFQUErQjtBQUMvQiw2RUFBK0I7QUFDL0IsMkVBQThCO0FBQzlCLHVGQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDZHBDLHdFQUEyRztBQUMzRywwRkFBdUM7QUFDdkMsZ0dBQThDO0FBSTlDOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsV0FBSTtJQUV0QyxZQUFvQixNQUF5QixFQUFFLFlBQXNDO1FBRXBGLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxNQUFNO1lBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyRixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF5QixFQUFFLGNBQXNDLEVBQUUsUUFBZ0I7UUFFbEcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXBELENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsa0JBQVcsQ0FBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0RixLQUFLLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQ3ZDLFlBQVksQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksSUFBSSxDQUFDLFVBQVU7WUFDbEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQXdCLENBQUMsQ0FBQztRQUNqRyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDekMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ25CLE9BQU87UUFFUixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQUksQ0FBQyxZQUFZLENBQUUsY0FBYyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFxQixDQUFDO1FBRTVGLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQTJCLENBQUM7UUFDeEQsS0FBSyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUNyQztZQUNDLElBQ0E7Z0JBQ0MsZ0JBQWdCLENBQUMsVUFBVSxDQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckQsSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixJQUFJLE9BQU87b0JBQ1YsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUEwQixDQUFDO2FBQ3hEO1lBQ0QsT0FBTSxDQUFDLEVBQ1A7Z0JBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7YUFDakQ7U0FDRDtJQUNGLENBQUM7SUFHRCxvQ0FBb0M7SUFDMUIsU0FBUyxDQUFFLEdBQThCO1FBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixPQUFPO1FBRVIsR0FBRyxDQUFDLFdBQVcsQ0FBRSxjQUFjLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBRTlDLEtBQUssSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVU7WUFDcEMsR0FBRyxDQUFDLFdBQVcsQ0FBRSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUMsR0FBRyxDQUFDLFdBQVcsQ0FBRSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBSUosNkZBQTZGO0lBQ3RGLGFBQWE7UUFFbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0EyQkQ7QUFoSEQsc0NBZ0hDO0FBSUQ7O0dBRUc7QUFDSCxNQUFNLGtCQUFtQixTQUFRLHNCQUFTO0lBRXpDLFlBQW9CLFFBQTJCLEVBQUUsUUFBNEI7UUFFNUUsS0FBSyxDQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsV0FBVztRQUVqQixPQUFPLElBQUksa0JBQWtCLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sbUJBQU8sQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzlCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ3hCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFPLENBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQzNELE1BQU0sRUFBRSxHQUFHO1NBQ1gsQ0FBQztJQUNILENBQUM7Q0FPRDs7Ozs7Ozs7Ozs7Ozs7O0FDN0pELHdFQUFxRjtBQUlyRjs7Ozs7R0FLRztBQUNILE1BQWEsV0FBWSxTQUFRLGVBQVE7SUFFeEMsWUFBb0IsWUFBb0M7UUFFakQsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF5QixFQUFFLGNBQXNDLEVBQUUsUUFBdUI7UUFFbkcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFXLENBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUlELGtHQUFrRztJQUNsRyw4QkFBOEI7SUFDcEIsYUFBYTtRQUV0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0lBV0osMEJBQTBCO0lBQzFCLElBQVcsV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FLdEQ7QUFqREQsa0NBaURDOzs7Ozs7Ozs7Ozs7Ozs7QUMzREQsd0VBQXFGO0FBSXJGOzs7R0FHRztBQUNILE1BQWEsWUFBYSxTQUFRLGVBQVE7SUFFdEMsMEZBQTBGO0lBQzFGLCtGQUErRjtJQUMvRixVQUFVO0lBQ1YsWUFBb0IsWUFBcUQsRUFBRSxnQkFBMEI7UUFFakcsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEQsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRW5HLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUksWUFBWSxZQUFZLFlBQVksRUFDeEM7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7U0FDekM7YUFDSSxJQUFJLFlBQVksWUFBWSxZQUFZLEVBQzdDO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztTQUNyQzthQUVEO1lBQ0ksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQVcsQ0FBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV4RSx3RkFBd0Y7WUFDeEYsMEZBQTBGO1lBQzFGLG9GQUFvRjtZQUNwRiwwRkFBMEY7WUFDMUYsd0ZBQXdGO1lBQ3hGLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksWUFBWSxFQUNoQjtnQkFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUU7aUJBQ0ksSUFBSSxVQUFVLEVBQ25CO2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxRTtpQkFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQ3ZDO2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7YUFDekI7aUJBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxFQUN4QztnQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO2FBQ3ZCO1NBQ0o7SUFDUixDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksWUFBWSxDQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlELGtHQUFrRztJQUNsRywyQkFBMkI7SUFDakIsYUFBYTtRQUV0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0NBMkJKO0FBM0dELG9DQTJHQztBQUlEOzs7R0FHRztBQUNILE1BQWEsWUFBYSxTQUFRLGVBQVE7SUFFdEMsMEZBQTBGO0lBQzFGLCtGQUErRjtJQUMvRixVQUFVO0lBQ1YsWUFBb0IsWUFBcUM7UUFFckQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUVqQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRW5HLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBVyxDQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXhFLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFlBQVksQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUlELGtHQUFrRztJQUNsRywyQkFBMkI7SUFDakIsYUFBYTtRQUV0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0NBb0JKO0FBaEVELG9DQWdFQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0xELG1HQUFnRjtBQUNoRix3RUFBOEY7QUFDOUYsbUdBQTJEO0FBRzNELG1HQUF3RDtBQUl4RDs7R0FFRztBQUNILE1BQXNCLFNBQXFDLFNBQVEsV0FBSTtJQUV0RSxZQUFvQixlQUE2QztRQUVoRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3hDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUFnQjtRQUVsRyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUMsbUZBQW1GO1FBQ25GLDRCQUE0QjtRQUNsQyxJQUFJLFFBQVEsR0FBRyxzQ0FBc0IsQ0FBRSxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVE7WUFDWixPQUFPO1FBRVIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyx3Q0FBd0IsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBSUQsOERBQThEO0lBQ3ZELE1BQU0sQ0FBRSxNQUF1QztRQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDdEIsT0FBTztRQUVSLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRO1lBQ1osT0FBTztRQUVSLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBRSxHQUFHLFFBQVEsS0FBSyxFQUFFLE1BQU0sQ0FBb0IsQ0FBQztRQUUvRSxtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBSUQsb0NBQW9DO0lBQzFCLFNBQVMsQ0FBRSxHQUE4QjtRQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDdEIsT0FBTztRQUVSLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRO1lBQ1osT0FBTztRQUVSLEdBQUcsQ0FBQyxXQUFXLENBQUUsR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBRWxDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUV4QyxHQUFHLENBQUMsV0FBVyxDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFTSiw2QkFBNkI7SUFDdEIsS0FBSztRQUVYLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLGtCQUFrQjtRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUlELHFGQUFxRjtJQUNyRixJQUFXLEtBQUssS0FBUSxPQUFPLElBQUksQ0FBQyxRQUFhLENBQUMsQ0FBQyxDQUFDO0NBYXBEO0FBakdELDhCQWlHQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxZQUF3QyxTQUFRLFNBQVk7SUFFeEUsWUFBb0IsS0FBb0IsRUFBRSxlQUE2QztRQUV0RixLQUFLLENBQUUsZUFBZSxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFlBQVksQ0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBSUQscURBQXFEO0lBQzNDLG9CQUFvQjtRQUU3Qix1Q0FBdUM7UUFDdkMsSUFBSSxXQUFXLEdBQUcsa0NBQXFCLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJELG1GQUFtRjtRQUNuRixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2RSxDQUFDO0lBSUQsb0VBQW9FO0lBQ2pFLElBQVcsV0FBVztRQUVsQixPQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUUsa0NBQXFCLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQU9KO0FBMUNELG9DQTBDQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxTQUFxQyxTQUFRLFNBQVk7SUFFckUsWUFBb0IsS0FBMEIsRUFBRSxlQUE2QztRQUU1RixLQUFLLENBQUUsZUFBZSxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFNBQVMsQ0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSUQscURBQXFEO0lBQzNDLG9CQUFvQjtRQUU3QixPQUFPLFVBQVUsK0JBQWtCLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDcEQsQ0FBQztDQVNEO0FBaENELDhCQWdDQzs7Ozs7Ozs7Ozs7Ozs7O0FDcE1ELDRHQUF3RDtBQUN4RCx3RUFBeUc7QUFHekcsbUdBQTJEO0FBQzNELG1HQUF3RDtBQUN4RCwwRkFBdUM7QUFLdkM7O0dBRUc7QUFDSCxNQUFlLFFBQTRCLFNBQVEsV0FBSTtJQUV0RCxZQUFvQixjQUF3QjtRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxDQUFNLENBQUM7SUFDcEUsQ0FBQztJQUVELG9DQUFvQztJQUMxQixTQUFTLENBQUUsR0FBOEI7UUFFbEQsR0FBRyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FXSjtBQUlEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsUUFBdUI7SUFFdEQsWUFBb0IsR0FBVyxFQUFFLFVBQWdDLEVBQUUsYUFBc0M7UUFFbEcsMkJBQTJCO1FBQ2pDLEtBQUssQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFVBQVUsQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxvQ0FBb0M7SUFDdkIsV0FBVztRQUV2QixJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN0RixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7WUFFZixHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFMUIsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0NBQXFCLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hHLElBQUksbUJBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUUsVUFBVSxDQUFDO1lBQ25FLG1CQUFtQixHQUFHLGFBQWEsbUJBQW1CLElBQUksQ0FBQztRQUUvRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywrQkFBa0IsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEYsT0FBTyxXQUFXLEdBQUcsSUFBSSxtQkFBbUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pFLENBQUM7Q0FVSjtBQTNDRCxnQ0EyQ0M7QUFJRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLFFBQTBCO0lBRTVELFlBQW9CLFNBQWlCLEVBQUUsTUFBZTtRQUUvQywyQkFBMkI7UUFDakMsS0FBSyxDQUFFLElBQUksQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLGFBQWEsQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQW9DO0lBQ3ZCLFdBQVc7UUFFdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBQ3pGLE9BQU8sY0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0QsQ0FBQztDQVFKO0FBOUJELHNDQThCQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsUUFBeUI7SUFFMUQsWUFBb0IsUUFBbUI7UUFFdEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksWUFBWSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQW9DO0lBQ3ZCLFdBQVc7UUFFdkIsT0FBTyxjQUFjLGdDQUFnQixDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUM7Q0FJSjtBQXZCRCxvQ0F1QkM7QUFJRDs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLHNCQUFTO0lBRXRDLFlBQW9CLFdBQTZCLEVBQUUsS0FBZ0I7UUFFbEUsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixXQUFXO1FBRWpCLE9BQU8sSUFBSSxRQUFRLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sU0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0NBT0Q7QUF6QkQsNEJBeUJDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxlQUFRO0lBRTFDLFlBQW9CLE9BQWlEO1FBRXBFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLGFBQWEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRW5HLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNJLGFBQWE7UUFFbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRSwwRkFBMEY7SUFDMUYscUJBQXFCO0lBQ2pCLFFBQVE7UUFFZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQVNEO0FBL0NELHNDQStDQzs7Ozs7Ozs7Ozs7Ozs7O0FDaE1EOzs7O0dBSUc7QUFDSCxNQUFzQixRQUFRO0lBRTdCLHNCQUFzQjtJQUNmLE9BQU8sQ0FBRSxTQUF5QixFQUFFLGNBQXNDLEVBQUUsUUFBdUI7UUFFbkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztDQWNEO0FBdEJELDRCQXNCQztBQUlEOzs7O0dBSUc7QUFDSCxNQUFzQixJQUFLLFNBQVEsUUFBUTtJQVMxQyw2RkFBNkY7SUFDN0YscUNBQXFDO0lBQzlCLEtBQUssS0FBVyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFPN0MsbUVBQW1FO0lBQzVELE1BQU0sQ0FBQyxZQUFZLENBQUUsUUFBZ0IsRUFBRSxNQUF1QztRQUVwRixJQUNBO1lBQ0MsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLENBQUMsRUFDUjtZQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUsd0JBQXdCLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztDQU9EO0FBdENELG9CQXNDQztBQUlELHlEQUF5RDtBQUN6RCxTQUFnQixXQUFXLENBQUUsY0FBc0MsRUFBRSxRQUF1QixFQUFFLFlBQW9DLEVBQ2pJLFNBQWtCO0lBRWxCLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxZQUFZO1FBQzdCLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxZQUFZO1FBQ3ZCLENBQUMsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUUsUUFBUyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxRQUFRO1lBQ2pDLENBQUMsQ0FBQyxZQUFZO1lBQ2QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFFdEIsT0FBTyxDQUFDLFNBQVM7UUFDaEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFFLFNBQVMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBakJELGtDQWlCQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEpELHVGQUFrRTtBQUNsRSx3RUFBd0Y7QUFDeEYsaUZBQWlDO0FBQ2pDLHVGQUFxRDtBQUNyRCwwRkFBMkQ7QUFJM0QseUZBQXlGO0FBQ3pGLDREQUE0RDtBQUU1RCxnRkFBZ0Y7QUFDaEYsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDOzs7R0FHRztBQUNILE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUl6Qzs7Ozs7O0dBTUc7QUFDSCxNQUFNLGFBQWE7SUFFbEIsWUFBYSxRQUF5QixFQUFFLElBQVksRUFBRSxrQkFBa0M7UUFFdkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBRXZDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLFdBQW9DLENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUU3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLHdDQUF3QztJQUNoQyxPQUFPO1FBRWQscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRW5DLDJEQUEyRDtRQUNyRCxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQ2IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkQsNEVBQTRFO1FBQzVFLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsc0VBQXNFO1FBQ3RFLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVE7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFJRCw2RkFBNkY7SUFDN0Ysd0NBQXdDO0lBQ2hDLGVBQWUsQ0FBRSxRQUF1QixFQUFFLE9BQVk7UUFFN0QsSUFBSSxPQUFPLFlBQVksMkJBQWU7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFFLE9BQU8sQ0FBQzthQUMzQixJQUFJLE9BQU8sWUFBWSxpQkFBTztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDbkMsSUFBSSxPQUFPLFlBQVksV0FBSTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNqQyxJQUFJLE9BQU8sWUFBWSxlQUFRO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUNwQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUUsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFJRCxnRkFBZ0Y7SUFDeEUsZ0JBQWdCLENBQUUsR0FBb0I7UUFFN0MscUZBQXFGO1FBQ3JGLHdGQUF3RjtRQUN4RixxQkFBcUI7UUFDckIsZUFBZSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBSUQsaUNBQWlDO0lBQ3pCLGNBQWMsQ0FBRSxRQUF1QixFQUFFLE1BQWU7UUFFL0QsOEVBQThFO1FBQzlFLHdDQUF3QztRQUN4QyxJQUFJLE1BQU0sQ0FBQyxTQUFTO1lBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFekIsTUFBTSxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFJRCw0QkFBNEI7SUFDcEIsZUFBZSxDQUFFLFFBQXVCLEVBQUUsUUFBa0I7UUFFbkUsOEVBQThFO1FBQzlFLHdDQUF3QztRQUN4QyxJQUFJLFFBQVEsQ0FBQyxTQUFTO1lBQ1osUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoQyxRQUFRLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUlELDJDQUEyQztJQUNuQyxXQUFXLENBQUUsUUFBdUIsRUFBRSxJQUFVO1FBRXZELHlGQUF5RjtRQUN6RiwwQ0FBMEM7UUFDMUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN2QjtZQUNDLElBQUksUUFBUTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBRS9DO2dCQUNDLCtDQUErQztnQkFDL0MsT0FBTzthQUNQO1NBQ0Q7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFdEQsSUFBSSxJQUFJLFlBQVksc0JBQVU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7YUFDckIsSUFBSSxJQUFJLFlBQVkseUJBQWE7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7O1lBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFJRCx3Q0FBd0M7SUFDaEMsWUFBWSxDQUFFLFFBQWU7UUFFcEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDckMsT0FBTztRQUVSLHNGQUFzRjtRQUN0RixLQUFLLElBQUksT0FBTyxJQUFJLFFBQVE7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxxQkFBcUI7UUFFM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFJRCx1RUFBdUU7SUFDaEUsaUJBQWlCLENBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxTQUFtQixFQUFFLGFBQXNCO1FBRWpHLElBQUksSUFBSSxDQUFDLHFCQUFxQjtZQUNwQiwwQ0FBNkIsQ0FBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUlEOzs7T0FHRztJQUNJLGlCQUFpQixDQUFFLFFBQWdCO1FBRXpDLG9GQUFvRjtRQUNwRixzRkFBc0Y7UUFDdEYsc0ZBQXNGO1FBQ3RGLHVGQUF1RjtRQUN2Riw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFFBQVE7WUFDWixPQUFPLGtCQUFrQixFQUFFLENBQUM7YUFDeEIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDdEUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUVyQztZQUNDLDBGQUEwRjtZQUMxRixrRUFBa0U7WUFDbEUsSUFBSSxZQUFZLEdBQUcsK0JBQStCLENBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRixPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4RTtJQUNGLENBQUM7SUFJRCw4RkFBOEY7SUFDdkYsV0FBVyxDQUFFLE1BQXVDO1FBRTFELHNHQUFzRztRQUN0Ryx5REFBeUQ7UUFDekQsSUFBSSxNQUFNLFlBQVksYUFBYSxFQUNuQztZQUNDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELHdDQUF3QztRQUN4QyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQ3hCLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5QiwrQ0FBK0M7UUFDL0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3hCO1lBQ0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFdBQUksQ0FBQyxZQUFZLENBQUUsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUNqRixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFpQixDQUFDO1NBQ3JGO1FBRUQseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsVUFBVTtRQUVWLG9GQUFvRjtRQUMxRixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ25CO1lBQ0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUUvQyxrQ0FBa0M7UUFDbEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUN4QixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUlELHdDQUF3QztJQUNqQyxRQUFRO1FBRWQsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLEVBQ25DO1lBQ0MsaUZBQWlGO1lBQ2pGLElBQUksSUFBSSxDQUFDLGtCQUFrQjtnQkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2lCQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ3hCO2dCQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzdDOztnQkFFQSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7WUFFdkQsSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsV0FBWSxDQUFDLEtBQXNCLENBQUMsQ0FBQztTQUM1RDtJQUNGLENBQUM7SUFJRCx3Q0FBd0M7SUFDakMsVUFBVTtRQUVoQixvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQztZQUNoQyxPQUFPO1FBRVIsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLEVBQ25DO1lBQ0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRWxCLG1FQUFtRTtZQUNuRSxJQUFJLElBQUksQ0FBQyxVQUFVO2dCQUNsQixJQUFJLENBQUMsV0FBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztJQUlELHdEQUF3RDtJQUNqRCxjQUFjLENBQUUsR0FBOEI7UUFFcEQsc0dBQXNHO1FBQ3RHLHlEQUF5RDtRQUN6RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ25CO1lBQ0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsd0NBQXdDO1FBQ2xDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUk7WUFDckIsR0FBRyxDQUFDLGtCQUFrQixDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDeEI7WUFDQyxHQUFHLENBQUMsV0FBVyxDQUFFLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoSDtRQUVELDRCQUE0QjtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSUQsZ0ZBQWdGO0lBQ2hGLElBQVksVUFBVSxLQUFjLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7Q0EyRGhHO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7Ozs7O0dBTUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBRSxNQUFlLEVBQUUsTUFBZTtJQUVuRSxxQkFBcUIsR0FBRyxNQUFNLENBQUM7SUFDL0Isd0JBQXdCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNsRCxDQUFDO0FBSkQsZ0RBSUM7QUFJRDs7O0dBR0c7QUFDSCxJQUFJLHFCQUFxQixHQUFZLElBQUksQ0FBQztBQUUxQyxhQUFhO0FBQ2IscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQzlCLFVBQVU7QUFFVjs7R0FFRztBQUNILElBQUksd0JBQXdCLEdBQUcsR0FBRyxDQUFDO0FBRW5DLDZEQUE2RDtBQUM3RCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFJdkI7O0dBRUc7QUFDSCxTQUFTLFlBQVksQ0FBRSxTQUFpQixFQUFFLFFBQWdCO0lBRXpELE9BQU8scUJBQXFCO1FBQzNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBRSx3QkFBd0IsQ0FBQztRQUMvQyxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksUUFBUSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsa0JBQWtCLENBQUUsTUFBZTtJQUUzQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUM7QUFDeEUsQ0FBQztBQUlELCtGQUErRjtBQUMvRix3RkFBd0Y7QUFDeEYsU0FBUywrQkFBK0IsQ0FBRSxlQUFzQyxFQUFFLFFBQWdCO0lBRWpHLElBQUksQ0FBQyxlQUFlO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBRWIsdUJBQXVCO0lBQ3BCLEtBQUssSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBRSxlQUFlLENBQUMsRUFDcEQsU0FBUyxLQUFLLDJCQUFlLEVBQ3pCLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFFLFNBQVMsQ0FBQyxFQUM1RDtRQUNDLG9GQUFvRjtRQUNwRixvRkFBb0Y7UUFDcEYsOEJBQThCO1FBQzlCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFDekM7WUFDQyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxNQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDbkUsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0tBQ0Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLHNCQUFzQixDQUFFLFdBQW9ELEVBQzNGLE1BQXdCO0lBRXhCLElBQUksQ0FBQyxXQUFXO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFFYixxRkFBcUY7SUFDckYsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQ25DO1FBQ0MsZUFBZSxDQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sV0FBVyxDQUFDO0tBQ25CO1NBRUQ7UUFDQyw2RUFBNkU7UUFDN0UsT0FBTyxXQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUM3QyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUMxQixDQUFDLENBQUMsWUFBWSxDQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN0QztBQUNGLENBQUM7QUFuQkQsd0RBbUJDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxZQUFZLENBQUUsZUFBc0MsRUFDNUQsTUFBd0I7SUFFckIsMEZBQTBGO0lBQzFGLDhGQUE4RjtJQUM5RixrRkFBa0Y7SUFDbEYsS0FBSyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFFLGVBQWUsQ0FBQyxFQUNwRCxTQUFTLEtBQUssMkJBQWUsRUFDekIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUUsU0FBUyxDQUFDLEVBQ3pEO1FBQ0YsWUFBWSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM5QjtJQUVKLElBQ0E7UUFDQyw4Q0FBOEM7UUFDOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUMsaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxHQUFHLHFCQUFxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUk7WUFDeEQsQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQ3RCLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhCLElBQUksYUFBYSxDQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLE9BQU8sUUFBUSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxHQUFHLEVBQ1Y7UUFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLCtDQUErQyxlQUFlLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUYsT0FBTyxJQUFJLENBQUM7S0FDWjtBQUNGLENBQUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBUyxlQUFlLENBQUUsUUFBeUIsRUFBRSxrQkFBa0M7SUFFdEYsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztJQUNoQyxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFrQixDQUFDO0lBQzVELElBQUksYUFBYTtRQUNoQixPQUFPO0lBRVIsaUNBQWlDO0lBQ2pDLElBQUksSUFBSSxHQUFHLGtCQUFrQixFQUFFLENBQUM7SUFDaEMsSUFBSSxDQUFDLHFCQUFxQixFQUMxQjtRQUNDLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxlQUFlLENBQUMsSUFBSTtZQUN2QixJQUFJLElBQUksR0FBRyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7S0FDcEM7SUFFRCx5RkFBeUY7SUFDekYsYUFBYTtJQUNiLElBQUksYUFBYSxDQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQix3QkFBd0IsQ0FBRSxRQUF5QjtJQUVsRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDakQsQ0FBQztBQUhELDREQUdDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsUUFBeUIsRUFBRSxLQUFhO0lBRXpFLElBQUksYUFBYSxHQUFHLHdCQUF3QixDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELElBQUksYUFBYSxFQUNqQjtRQUNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzdCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQjtBQUNGLENBQUM7QUFSRCw0Q0FRQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBRSxRQUF5QixFQUFFLEtBQWE7SUFFM0UsSUFBSSxhQUFhLEdBQUcsd0JBQXdCLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsSUFBSSxhQUFhLEVBQ2pCO1FBQ0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDN0IsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQzVCO0FBQ0YsQ0FBQztBQVJELGdEQVFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixpQkFBaUIsQ0FBRSxRQUF5QixFQUFFLEdBQThCO0lBRTNGLElBQUksYUFBYSxHQUFHLHdCQUF3QixDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELElBQUksYUFBYTtRQUNiLGFBQWEsQ0FBQyxjQUFjLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUxELDhDQUtDOzs7Ozs7Ozs7Ozs7Ozs7QUMxUkQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFJbkM7Ozs7O0dBS0c7QUFDSCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFJakM7Ozs7O0dBS0c7QUFDSCxNQUFzQixlQUFlO0lBRXBDOzs7OztPQUtHO0lBQ0gsWUFBb0IsTUFBVTtRQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBRW5CLDRFQUE0RTtRQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLE9BQU8sS0FBb0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlEOzs7OztPQUtHO0lBQ0gsSUFBVyxNQUFNLEtBQW9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM3RDtBQTlCRCwwQ0E4QkM7Ozs7Ozs7Ozs7Ozs7OztBQ25iRCxtR0FBcUU7QUErQ3JFOzs7R0FHRztBQUNILFNBQVMsbUJBQW1CLENBQUUsU0FBK0MsRUFBRSxJQUFtQixFQUM5RixLQUFzQyxFQUFFLFNBQW1CO0lBRTNELElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFDMUI7UUFDSSxJQUFJLFNBQVMsWUFBWSxZQUFZO1lBQ2pDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztZQUV0QixTQUE0QixDQUFDLGVBQWUsQ0FBRSxPQUFPLENBQUMsQ0FBQztLQUMvRDtTQUNJLElBQUksSUFBSSxFQUNiO1FBQ0ksSUFBSSxLQUFLLElBQUksSUFBSTtZQUNiLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFFLElBQUksQ0FBQyxDQUFDOztZQUV0QyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBRSxJQUFJLEVBQUUsS0FBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqRztTQUVEO1FBQ0ksSUFBSSxRQUFRLEdBQUcsS0FBdUIsQ0FBQztRQUN2QyxLQUFLLElBQUksUUFBUSxJQUFJLFFBQVE7WUFDekIsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7QUFDTCxDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsTUFBTSxvQkFBb0I7SUFFekI7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBRSxVQUEyQjtRQUUzQyxnQ0FBZ0IsQ0FBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxVQUFVLENBQUUsVUFBMkI7UUFFN0Msa0NBQWtCLENBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDTyxnQkFBZ0IsQ0FBRSxTQUErQyxFQUFFLElBQW1CLEVBQ3pGLEtBQXNDLEVBQUUsU0FBbUI7UUFFM0QsbUJBQW1CLENBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjLEtBQVUsQ0FBQztJQUVoQzs7OztPQUlHO0lBQ0ksZUFBZSxLQUFVLENBQUM7Q0FDakM7QUFzQ0Q7Ozs7OztHQU1HO0FBQ0gsTUFBYSxtQkFBbUI7SUFhNUIsWUFBYSxTQUFzQjtRQVhuQyw2RkFBNkY7UUFDeEYsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUVyRCxvREFBb0Q7UUFDNUMsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFTMUMsSUFBSSxTQUFTLEVBQ2I7WUFDSSxTQUFTLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUlKOztPQUVHO0lBQ0ksUUFBUSxDQUFFLFVBQTJCO1FBRTNDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFDbkI7WUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDcEQ7YUFFRDtZQUNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRWxFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQztJQUlEOztPQUVHO0lBQ0ksVUFBVSxDQUFFLFVBQTJCO1FBRTdDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQ2xCO1lBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2hFO2FBRUQ7WUFDQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUVsRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7SUFJRDs7O09BR0c7SUFDTyxnQkFBZ0IsQ0FBRSxTQUErQyxFQUFFLElBQW1CLEVBQ3pGLEtBQXNDLEVBQUUsU0FBbUI7UUFFakUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUvRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUlEOztPQUVHO0lBQ0ksY0FBYztRQUVwQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3REO1lBQ1UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1RDtJQUNGLENBQUM7SUFJRDs7O09BR0c7SUFDSSxlQUFlO1FBRXJCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdEQ7WUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUQ7SUFDRixDQUFDO0lBSUQ7OztPQUdHO0lBQ0ssV0FBVztRQUVaLHdDQUF3QztRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxDQUFDLFFBQWdCLEVBQUUsVUFBMkIsRUFBRSxFQUFFO1lBRTNFLElBQUksUUFBUSxHQUFHLENBQUM7Z0JBQ2YsZ0NBQWdCLENBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztnQkFFeEMsa0NBQWtCLENBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQiwwQkFBMEI7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFJSjs7O09BR0c7SUFDSyxlQUFlO1FBRWhCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNEO0FBbkpELGtEQW1KQztBQUlEOztHQUVHO0FBQ0gsTUFBTSx1QkFBdUI7SUFBN0I7UUFFSSxxREFBcUQ7UUFDaEQsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFvQzFCOztXQUVHO1FBQ0sscUJBQWdCLEdBQUcsR0FBUyxFQUFFO1lBRXJDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0YsQ0FBQztJQXRDRzs7O09BR0c7SUFDSSxJQUFJLENBQUUsV0FBdUI7UUFFaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVKOztPQUVHO0lBQ08saUJBQWlCO1FBRTFCLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2hFLENBQUM7SUFFSjs7T0FFRztJQUNPLGVBQWU7UUFFeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFDMUI7WUFDQyxvQkFBb0IsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDdkI7SUFDQyxDQUFDO0NBV0o7QUFJRDs7R0FFRztBQUNILFNBQWdCLDZCQUE2QixDQUFFLFNBQStDLEVBQzFGLElBQW1CLEVBQUUsS0FBc0MsRUFDM0QsU0FBbUIsRUFBRSxhQUFzQjtJQUU5QyxjQUFjLENBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQUUsQ0FDekMsU0FBUyxDQUFDLGdCQUFnQixDQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFORCxzRUFNQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLElBQXFDLEVBQUUsYUFBc0I7SUFFNUYsSUFBSSxTQUFTLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBRSxhQUFhLENBQUMsQ0FBQztJQUNyRyxJQUFJLFNBQVM7UUFDZixJQUFJLENBQUUsU0FBUyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUxELHdDQUtDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQix5QkFBeUI7SUFFeEMsT0FBTyxzQkFBc0IsQ0FBQztBQUMvQixDQUFDO0FBSEQsOERBR0M7QUFJRDs7Ozs7R0FLRztBQUNILFNBQWdCLHlCQUF5QixDQUFFLGFBQXFCO0lBRTVELHFFQUFxRTtJQUNyRSxJQUFJLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUQsSUFBSSxDQUFDLFNBQVM7UUFDYixPQUFPLENBQUMsQ0FBQztJQUVWLElBQUksaUJBQWlCLEdBQUcsc0JBQXNCLENBQUM7SUFDNUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUNsQyxPQUFPLGlCQUFpQixDQUFDO0FBQzFCLENBQUM7QUFYRCw4REFXQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLG1CQUFtQixDQUFFLFNBQXFCO0lBRXpELDZDQUE2QztJQUM3QyxJQUFJLEVBQUUsR0FBRyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3JDLHNCQUFzQixDQUFDLEdBQUcsQ0FBRSxFQUFFLEVBQUUsSUFBSSxtQkFBbUIsQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sRUFBRSxDQUFDO0FBQ1gsQ0FBQztBQU5ELGtEQU1DO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixxQkFBcUIsQ0FBRSxFQUFVO0lBRWhELElBQUksRUFBRSxJQUFJLDBCQUEwQixFQUNwQztRQUNDLHNCQUFzQixDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUVuQywyRUFBMkU7UUFDckUsSUFBSSxzQkFBc0IsS0FBSyxFQUFFLEVBQ2pDO1lBQ0ksc0JBQXNCLGVBQXFCLENBQUM7WUFDNUMsa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7U0FDL0M7S0FDUDtBQUNGLENBQUM7QUFiRCxzREFhQztBQUlEOzs7R0FHRztBQUNILElBQUksc0JBQXNCLGVBQTZCLENBQUM7QUFFeEQ7O0dBRUc7QUFDSCxJQUFJLHNCQUFzQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUV4RDs7O0dBR0c7QUFDSCxJQUFJLGtCQUFrQixHQUFlLHNCQUFzQixDQUFDO0FBRTVEOzs7R0FHRztBQUNILE1BQU0sMEJBQTBCLEdBQVcsSUFBSSxDQUFDO0FBRWhEOztHQUVHO0FBQ0gsSUFBSSx5QkFBeUIsR0FBVywwQkFBMEIsQ0FBQztBQUluRTs7R0FFRztBQUNILElBQUksc0JBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUM7QUFFMUQ7O0dBRUc7QUFDSCxzQkFBc0IsQ0FBQyxHQUFHLGVBQXNCLHNCQUFzQixDQUFDLENBQUM7QUFDeEUsc0JBQXNCLENBQUMsR0FBRyx5QkFBZ0MsSUFBSSxtQkFBbUIsQ0FBRSxJQUFJLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ILHNCQUFzQixDQUFDLEdBQUcsaUJBQXdCLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6ZjdFLHdFQUE0RztBQUM1RyxtR0FBa0g7QUFDbEgsZ0dBQXlEO0FBQ3pELGlGQUFrQztBQUNsQyw0R0FBK0U7QUFDL0UsMEZBQTJEO0FBSTNEOzs7R0FHRztBQUNILE1BQXNCLFNBQVUsU0FBUSxXQUFJO0lBRTNDLHVGQUF1RjtJQUN2Rix3QkFBd0I7SUFDeEIsWUFBb0IsUUFBbUI7UUFFdEMsS0FBSyxFQUFFLENBQUM7UUF1WFQsNEZBQTRGO1FBQzVGLHFEQUFxRDtRQUM3Qyx5QkFBb0IsR0FBa0IsSUFBSSxDQUFDO1FBdlhsRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUV6QixJQUFJLFFBQVE7WUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUUsUUFBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFJRDs7O09BR0c7SUFDSyxrQkFBa0IsQ0FBRSxhQUErQjtRQUUxRCxvRkFBb0Y7UUFDcEYscUJBQXFCO1FBQ3JCLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUN0QjtZQUNDLG9GQUFvRjtZQUNwRixJQUFJLGNBQWMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUE4QixDQUFDO1lBQ3JFLElBQUksV0FBd0IsQ0FBQztZQUM3QixJQUFJLGNBQWMsWUFBWSxTQUFTO2dCQUN0QyxXQUFXLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Z0JBRS9CLFdBQVcsR0FBRyxjQUFjLENBQUM7WUFFOUIseUVBQXlFO1lBQ3pFLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN6QztnQkFDQyxXQUFXLENBQUMsT0FBTyxDQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUU3QixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUFjLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxzQkFBc0IsQ0FBRSxNQUFNLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDSDtTQUNEO1FBRUQsMkJBQTJCO1FBQzNCLHFDQUF3QixDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFeEQsS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEVBQ2xDO1lBQ0MsdUVBQXVFO1lBQ3ZFLElBQUksUUFBUSxLQUFLLEdBQUcsSUFBSSxRQUFRLEtBQUssSUFBSTtnQkFDeEMsU0FBUztZQUVWLElBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQzVCO2dCQUNDLHlFQUF5RTtnQkFDekUsK0VBQStFO2dCQUMvRSxnRkFBZ0Y7Z0JBQ2hGLG9CQUFvQjtnQkFDcEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUMxQjtvQkFDQyxJQUFJLE1BQU0sR0FBRyxPQUFvQyxDQUFDO29CQUNsRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQjt3QkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FDckUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0Q7O29CQUVBLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxTQUFTLEVBQzNFLE9BQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckM7aUJBQ0ksSUFBSSxRQUFRLEtBQUssR0FBRyxFQUN6QjtnQkFDQyxxRUFBcUU7Z0JBQ3JFLElBQUksTUFBTSxHQUFHLE9BQTRDLENBQUM7Z0JBQzFELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JCO29CQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxDQUNyRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNEO2lCQUNJLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDakM7Z0JBQ0MscUVBQXFFO2dCQUNyRSxJQUFJLE1BQU0sR0FBRyxPQUE0QyxDQUFDO2dCQUMxRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQjtvQkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FDckUsR0FBRyxFQUFFLENBQUMsUUFBUSxHQUFHLGdDQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDM0U7YUFDRDtpQkFDSSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQy9CO2dCQUNDLHFFQUFxRTtnQkFDckUsSUFBSSxNQUFNLEdBQUcsT0FBNEMsQ0FBQztnQkFDMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDckI7b0JBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQ3JFLEdBQUcsRUFBRSxDQUFDLGdDQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzNFO2FBQ0Q7aUJBRUQ7Z0JBQ0MsbUZBQW1GO2dCQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRXpHLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxrRUFBa0U7UUFDbEUsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN4QztZQUNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQXNCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkFFL0YsT0FBeUIsQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RTtJQUNGLENBQUM7SUFJRCxpREFBaUQ7SUFDdkMsUUFBUSxDQUFFLEdBQWM7UUFFakMscUZBQXFGO1FBQ3JGLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUFjLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHNCQUFzQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFJRCx5REFBeUQ7SUFDakQsc0JBQXNCLENBQUUsR0FBYztRQUU3QyxLQUFLLElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQ3ZDO1lBQ0MsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2hEO2dCQUNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHO29CQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFFMUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLFVBQXlCLEVBQUUsRUFBRTtvQkFFOUMsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBbUIsQ0FBQztvQkFDckQsVUFBVSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2FBQ0g7aUJBRUQ7Z0JBQ0MsSUFBSSxVQUFVLEdBQUksT0FBeUIsQ0FBQyxLQUFLLEVBQW1CLENBQUM7Z0JBQ3JFLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUMzQztTQUNEO0lBQ0YsQ0FBQztJQUlELHlEQUF5RDtJQUNsRCxXQUFXO1FBRWpCLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUk7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRELE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEtBQUssNkJBQWdCLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDN0UsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQUksQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sQ0FBaUIsQ0FBQztRQUUvRSw4REFBOEQ7UUFDOUQsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN4QztZQUNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQXNCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXJFLE9BQXlCLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQztJQUlELDZCQUE2QjtJQUN0QixLQUFLO1FBRVgsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsMkNBQTJDO1FBQzNDLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDeEM7WUFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs7Z0JBRTdELE9BQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEM7SUFDRixDQUFDO0lBSUQsb0NBQW9DO0lBQzFCLFNBQVMsQ0FBRSxHQUE4QjtRQUVsRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFdEMsOERBQThEO1FBQzlELEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDeEM7WUFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7O2dCQUVyRSxPQUF5QixDQUFDLFNBQVMsQ0FBRSxHQUFHLENBQUMsQ0FBQztTQUM1QztJQUNDLENBQUM7SUFJSiwrQkFBK0I7SUFDL0IsSUFBVyxZQUFZO1FBRXRCLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUk7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ2xDLENBQUM7SUFJRDs7OztPQUlHO0lBQ0ksYUFBYTtRQUVuQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQWFEOzs7Ozs7O09BT0c7SUFDTyxPQUFPLENBQW9DLElBQU8sRUFBRSxLQUEwQixFQUNqRixTQUFtQixFQUFFLGFBQXNCO1FBRWpELDZEQUE2RDtRQUM3RCxJQUFJLEtBQUssSUFBSSxJQUFJO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFZLENBQUM7UUFFeEUsd0VBQXdFO1FBQ3hFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDVjtZQUNGLDBDQUE2QixDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsdUJBQVcsQ0FBRSxJQUFJLENBQUMsRUFDckQsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4QkFBaUIsQ0FBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMvRjtJQUNSLENBQUM7SUFJRDs7Ozs7OztPQU9HO0lBQ0ksYUFBYSxDQUE2QixNQUFtQixFQUFFLEtBQXNCLEVBQzNGLFNBQW1CLEVBQUUsYUFBc0I7UUFFM0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLGlCQUFPLENBQUM7WUFDMUMsT0FBTztRQUVSLDZEQUE2RDtRQUM3RCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBMEIsQ0FBQztRQUNuRSxJQUFJLGVBQWUsSUFBSSxLQUFLLElBQUksSUFBSSxFQUNwQztZQUNDLElBQUksS0FBSyxJQUFJLElBQUksRUFDakI7Z0JBQ0MsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDOUI7b0JBQ0MsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUNkO3dCQUNDLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDOzRCQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7NEJBRWhDLGVBQWUsQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNuQztpQkFDRDthQUNEO2lCQUVEO2dCQUNDLElBQUksQ0FBQyxlQUFlO29CQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBRTNEO29CQUNDLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7b0JBQ25FLElBQUksS0FBSyxJQUFJLENBQUM7d0JBQ2IsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzs7d0JBRWxDLGVBQWUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDeEM7YUFDRDtTQUNEO1FBRUQsd0VBQXdFO1FBQ3hFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDVjtZQUNJLDBDQUE2QixDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDdkQsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4QkFBaUIsQ0FBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFDdkUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2pDO0lBQ1IsQ0FBQztDQW9CRDtBQWhZRCw4QkFnWUM7QUFJRDs7OztHQUlHO0FBQ0gsTUFBTSxhQUFjLFNBQVEsU0FBUztJQUVwQywyRkFBMkY7SUFDM0YsNEZBQTRGO0lBQzVGLDZGQUE2RjtJQUM3RixRQUFRO0lBQ1IsWUFBb0IsUUFBcUIsRUFBRSxhQUFtQixFQUFFLEtBQXdCLEVBQ3ZGLGNBQTBCO1FBRTFCLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsV0FBVztRQUVqQixPQUFPLElBQUksYUFBYSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFJRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFlLENBQUMsWUFBWSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLGFBQWEsRUFDdEI7WUFDQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBa0IsQ0FBQztZQUN2QyxPQUFPLEdBQUcsY0FBYyxHQUFHLFFBQVEsSUFBSSxvQ0FBb0IsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7U0FDOUY7YUFFRDtZQUNDLDhCQUE4QjtZQUM5QixJQUFJLFFBQVEsR0FBRyxnQ0FBZ0IsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEQsa0ZBQWtGO1lBQ2xGLCtFQUErRTtZQUMvRSwrRUFBK0U7WUFDL0UsNkJBQTZCO1lBQzdCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsR0FBRyxjQUFjLEdBQUcsUUFBUSxFQUFFO2dCQUNoQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDO0NBWUQ7QUFJRDs7O0dBR0c7QUFDSCxNQUFhLFlBQWEsU0FBUSxTQUFTO0lBRTFDLFlBQW9CLEtBQXdCO1FBRTNDLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsV0FBVztRQUVqQixPQUFPLElBQUksWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHlGQUF5RjtJQUN6RixrQkFBa0I7SUFDWCxNQUFNLENBQUUsTUFBdUM7SUFFdEQsQ0FBQztJQUVELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0Q7QUF4QkQsb0NBd0JDO0FBSUQ7OztHQUdHO0FBQ0gsTUFBZSxjQUFlLFNBQVEsU0FBUztJQUU5QyxZQUFvQixLQUF3QixFQUFFLFlBQW9DO1FBRWpGLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUFnQjtRQUVsRyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxrQkFBVyxDQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrRkFBK0Y7SUFDeEYsUUFBUTtRQUVkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBdUJEO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFNBQVUsU0FBUSxjQUFjO0lBRTVDLFlBQW9CLEtBQXdCLEVBQUUsWUFBcUQ7UUFFbEcsS0FBSyxDQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQTBDO0lBQzFDLElBQVcsWUFBWSxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFMUQscUNBQXFDO0lBQzlCLFdBQVc7UUFFakIsT0FBTyxJQUFJLFNBQVMsQ0FBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw0RkFBNEY7SUFDNUYsYUFBYTtJQUNiLElBQWMsU0FBUyxLQUFhLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNqRDtBQW5CRCw4QkFtQkM7QUFJRDs7R0FFRztBQUNILE1BQWEsTUFBTyxTQUFRLGNBQWM7SUFFekMsWUFBb0IsS0FBd0IsRUFBRSxZQUFvQztRQUVqRixLQUFLLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsSUFBVyxTQUFTLEtBQWEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV2RCxxQ0FBcUM7SUFDOUIsV0FBVztRQUVqQixPQUFPLElBQUksTUFBTSxDQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDRGQUE0RjtJQUM1RixhQUFhO0lBQ2IsSUFBYyxTQUFTLEtBQWEsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ2pEO0FBbkJELHdCQW1CQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsU0FBUztJQUUxQyxZQUFvQixRQUFxQixFQUFFLEtBQXdCO1FBRWxFLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsV0FBVztRQUVqQixPQUFPLElBQUksWUFBWSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0NBQStDO0lBQ3hDLGlCQUFpQjtRQUV2QixPQUFPLG1CQUFPLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FJRDtBQXRCRCxvQ0FzQkM7Ozs7Ozs7Ozs7Ozs7OztBQzVuQkQsbUdBQXNEO0FBQ3RELHdFQUFxRjtBQUlyRjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFhLE9BQXlDLFNBQVEsZUFBUTtJQUVyRSxZQUFvQixRQUFXLEVBQUUsS0FBdUIsRUFBRSxZQUFtQztRQUV0RixLQUFLLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUF1QjtRQUV6RyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxrQkFBVyxDQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksT0FBTyxDQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUlELG1DQUFtQztJQUM1QixXQUFXO1FBRWpCLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLDhCQUFpQixDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzlHLENBQUM7SUFJRCxrR0FBa0c7SUFDbEcsd0NBQXdDO0lBQzlCLGFBQWE7UUFFdEIsT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBSUo7Ozs7OztPQU1HO0lBQ0ksUUFBUSxDQUFFLEtBQXNCLEVBQUUsU0FBbUIsRUFBRSxhQUFzQjtRQUVuRixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBQyxPQUFPLEVBQ3BDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsOEJBQWlCLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQ3JFLFNBQVMsRUFBRSxhQUFhLENBQUM7SUFDcEMsQ0FBQztDQStCRDtBQXpGRCwwQkF5RkM7Ozs7Ozs7Ozs7Ozs7OztBQzFHRCwyRkFBMkQ7QUFDM0Qsd0ZBQWlEO0FBS2pEOzs7OztHQUtHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztBQUVoRCwyQkFBMkI7QUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBRSxtQkFBTSxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUUsQ0FBQztBQUl6Rjs7R0FFRztBQUNILFNBQVMsbUJBQW1CLENBQUUsR0FBVztJQUVyQyw0RUFBNEU7SUFDNUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM3QixJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBRTNCLDBFQUEwRTtJQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDeEI7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLGtDQUFrQztRQUNsQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7SUFFRCx3RkFBd0Y7SUFDeEYsb0RBQW9EO0lBQ3BELENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNMLHdDQUF3QztRQUN4QyxtRkFBbUY7UUFDbkYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUVyRjtRQUNJLHVFQUF1RTtRQUN2RSxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMvRDtBQUNMLENBQUM7QUFJRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBRSxDQUFTO0lBRWxDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDOUI7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNMLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDckM7U0FFRDtRQUNJLHVDQUF1QztRQUN2QyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ0wsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFaEIsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBSUQ7Ozs7Ozs7R0FPRztBQUNILFNBQVMsYUFBYSxDQUFFLENBQVU7SUFFOUIsNkNBQTZDO0lBQzdDLElBQUksQ0FBQyxJQUFJLElBQUk7UUFDVCxPQUFPLEdBQUcsQ0FBQztJQUVmLHdGQUF3RjtJQUN4RixJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRVgseUZBQXlGO0lBQ3pGLGdEQUFnRDtJQUNoRCxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVO0lBRXBFLE9BQU8sUUFBUSxrQkFBa0IsQ0FBRSxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLENBQUMsSUFBSSxhQUFhLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN0SCxDQUFDO0FBSEQsa0NBR0M7QUFJRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9CQUFvQixDQUFFLENBQVM7SUFFcEMsK0VBQStFO0lBQy9FLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFWCx5RkFBeUY7SUFDekYsa0NBQWtDO0lBQ2xDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDL0UsQ0FBQztBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxDQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVTtJQUU3RSxPQUFPLFFBQVEsd0JBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDL0gsQ0FBQztBQUhELGtDQUdDO0FBSUQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxTQUFnQixzQkFBc0IsQ0FBRSxDQUE4QixFQUFFLENBQVM7SUFFN0UsOENBQThDO0lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDUCxPQUFPLE9BQU8sQ0FBQztJQUVuQix5RkFBeUY7SUFDekYsc0VBQXNFO0lBQ3RFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLElBQUksQ0FBQyxJQUFJLElBQUk7UUFDVCxPQUFPLEtBQUssQ0FBQztJQUVqQix3RkFBd0Y7SUFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVYLHlGQUF5RjtJQUN6Rix1RkFBdUY7SUFDdkYsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEQscUJBQXFCO0lBQ3JCLE9BQU8sbUJBQW1CLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUF0QkQsd0RBc0JDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixhQUFhLENBQUUsR0FBdUI7SUFFbEQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBRSxtQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsVUFBVSxFQUFFLG1CQUFtQjtLQUNsQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsc0NBTUM7Ozs7Ozs7Ozs7Ozs7O0FDNVBEOztHQUVHOztBQXdLMkQsQ0FBQztBQTRCL0Q7OztHQUdHO0FBQ1EsY0FBTSxHQUNqQjtJQUNJLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsR0FBRyxFQUFxQixRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxPQUFPLEVBQWlCLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxPQUFPLEVBQWlCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsb0JBQW9CLEVBQUksUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxZQUFZLEVBQVksUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxjQUFjLEVBQVUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLGdCQUFnQixFQUFRLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsZUFBZSxFQUFTLFFBQVE7SUFDaEMsaUJBQWlCLEVBQU8sUUFBUTtJQUNoQyxlQUFlLEVBQVMsUUFBUTtJQUNoQyxlQUFlLEVBQVMsUUFBUTtJQUNoQyxZQUFZLEVBQVksUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxHQUFHLEVBQXFCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0NBQ25DLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9WRiwyRkFBcUM7QUFDckMsd0ZBQXVHO0FBSXZHOztHQUVHO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsUUFBaUM7SUFFL0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBRWhCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUVaLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxFQUM3QjtRQUNJLENBQUMsSUFBSSxHQUFHLHVCQUFXLENBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLEtBQUssYUFBYTtZQUMxQixDQUFDLElBQUksbUJBQW1CLENBQUUsT0FBTyxDQUFDLENBQUM7YUFDbEMsSUFBSSxRQUFRLEtBQUssV0FBVztZQUM3QixDQUFDLElBQUksaUJBQWlCLENBQUUsT0FBTyxDQUFDLENBQUM7YUFDaEMsSUFBSSxRQUFRLEtBQUssWUFBWTtZQUM5QixDQUFDLElBQUksa0JBQWtCLENBQUUsT0FBTyxDQUFDLENBQUM7YUFDakMsSUFBSSxRQUFRLEtBQUssS0FBSztZQUN2QixDQUFDLElBQUksZUFBZSxDQUFFLE9BQU8sQ0FBQyxDQUFDOztZQUUvQixDQUFDLElBQUksT0FBTyxDQUFDO1FBRWpCLENBQUMsSUFBSSxHQUFHO0tBQ1g7SUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDbkIsQ0FBQztBQTFCRCw0Q0EwQkM7QUFJRCxTQUFTLG1CQUFtQixDQUFFLEdBQTJDO0lBRXJFLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLDBCQUFjLENBQUMsYUFBYTtRQUN4QyxXQUFXLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO0tBQzVDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGlCQUFpQixDQUFFLEdBQXlDO0lBRWpFLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMzRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLG1CQUFPLENBQUUsQ0FBQyxFQUFFLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7S0FDdkUsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsa0JBQWtCLENBQUUsR0FBMEM7SUFFbkUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixPQUFPLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0tBQ3ZDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGVBQWUsQ0FBRSxHQUF1QztJQUU3RCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsTUFBTSxFQUFFLEdBQUc7S0FDZCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxxQkFBcUIsQ0FBRSxHQUFpQztJQUU3RCxPQUFPLG9CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDdEQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsa0JBQWtCLENBQUUsR0FBaUM7SUFFMUQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUMzQixNQUFNLEVBQUUsR0FBRztLQUNkLENBQUMsQ0FBQztBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlGRCx3RkFBMEQ7QUFJMUQsU0FBUyxtQkFBbUIsQ0FBRSxHQUFzQztJQUVoRSxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBSUQsU0FBUyxxQkFBcUIsQ0FBRSxHQUFpQztJQUU3RCxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ3RELENBQUM7QUFJRCxTQUFTLHlCQUF5QixDQUFFLEdBQXFDO0lBRXJFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDdkQsQ0FBQztBQWdDRDs7R0FFRztBQUNILFNBQWdCLGtCQUFrQixDQUFFLEtBQXFDO0lBRXJFLE9BQU8sbUJBQU8sQ0FBRSxLQUFLLEVBQUU7UUFDbkIsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxNQUFNLEVBQUUsR0FBRztLQUNkLENBQUM7QUFDTixDQUFDO0FBTkQsZ0RBTUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLHdCQUF3QixDQUFFLEtBQWtDO0lBRXhFLElBQUksQ0FBQyxLQUFLO1FBQ04sT0FBTyxFQUFFLENBQUM7SUFFZCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ2pDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUUzQixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDekIsSUFBSSxTQUFTO1FBQ1QsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUVuRCxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssRUFDMUI7UUFDSSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3hCLFNBQVM7UUFFYixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDZixLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksb0JBQW9CLENBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1RTtJQUVELE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUMzRCxDQUFDO0FBdkJELDREQXVCQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUUsV0FBbUIsRUFBRSxPQUFZLEVBQUUsU0FBbUI7SUFFeEYsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLElBQUksSUFBSTtRQUMvQixPQUFPLElBQUksQ0FBQztJQUVoQiwyQkFBMkI7SUFDM0IsSUFBSSxJQUFJLEdBQXFCLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV4RCxJQUFJLGVBQWUsR0FBRyx1QkFBVyxDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWhELGlHQUFpRztJQUNqRyxJQUFJLFlBQVksR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLFlBQVk7UUFDdEQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBRTVDLElBQUksT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0RyxJQUFJLE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckcsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDNUU7UUFDSSxJQUFJLEVBQUUsR0FBRywrQkFBK0IsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0QsSUFBSSxFQUFFLEdBQUcsK0JBQStCLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sR0FBRyxFQUFFLE9BQU8sZUFBZSxPQUFPLEVBQUUsRUFBRSxDQUFDO0tBQ2pEO1NBRUQ7UUFDSSxJQUFJLENBQUMsR0FBRywrQkFBK0IsQ0FBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDcEQ7QUFDTCxDQUFDO0FBNUJELG9EQTRCQztBQUlELFNBQVMsK0JBQStCLENBQUUsT0FBWSxFQUFFLE9BQXlCO0lBRTdFLElBQUksT0FBTyxJQUFJLElBQUk7UUFDZixPQUFPLEVBQUUsQ0FBQztJQUVkLElBQUksT0FBTztRQUNQLE9BQU8sT0FBTyxDQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUTtRQUNoQyxPQUFPLE9BQU8sQ0FBQztTQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUM7UUFDNUIsT0FBTyxtQkFBTyxDQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUV6QixPQUFPLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBSUQsSUFBSSxhQUFhLEdBQ2pCO0lBQ0ksV0FBVyxFQUFFLG1CQUFtQjtJQUNoQyxjQUFjLEVBQUUsbUJBQW1CO0lBQ25DLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkMsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3pDLFVBQVUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUN6RCxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsVUFBVSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzlDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ2pFLGFBQWEsRUFBRSx5QkFBeUI7SUFDeEMsYUFBYSxFQUFFLHlCQUF5QjtJQUN4QyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUN4RCxRQUFRLEVBQUUscUJBQXFCO0lBQy9CLFFBQVEsRUFBRSxxQkFBcUI7Q0FDbEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcktGLHdGQUFvQztBQUlwQyxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGdCQUFnQjtBQUNoQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOztHQUVHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBRSxHQUFzQjtJQUVoRCxJQUFJLEVBQUUsR0FBRyxtQkFBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqQixzREFBc0Q7SUFDdEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLG1CQUFPLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxtQkFBTyxDQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFMUUsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBRSxHQUFnQjtJQUVqRCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO0tBQ1YsQ0FBQztBQUNILENBQUM7QUFMRCw0Q0FLQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUUsVUFBa0IsRUFBRSxHQUFRO0lBRWpFLElBQUksQ0FBQyxVQUFVO1FBQ2QsT0FBTyxFQUFFLENBQUM7SUFFWCxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUUsTUFBTSxDQUFDO1FBQ2pDLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDOztRQUV0RCxPQUFPLG1CQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQVRELG9EQVNDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Qsd0ZBSW9CO0FBQ3BCLDJGQUEyQztBQU0zQyxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDBEQUEwRDtBQUMxRCxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HLFNBQVMsMEJBQTBCLENBQUUsR0FBcUI7SUFFdEQsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLENBQUMsVUFBVSxFQUFFLHVCQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUMsTUFBTSxFQUFFLDhCQUE4QixDQUFDO1FBQ3hDLENBQUMsT0FBTyxFQUFFLHVCQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3BDLENBQUMsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3RDLFdBQVc7UUFDWCxNQUFNO1FBQ04sT0FBTztRQUNQLE1BQU07S0FDVCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyx5QkFBeUIsQ0FBRSxHQUErQjtJQUUvRCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLE9BQU8sRUFBRSwwQkFBMEI7S0FDdEMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsc0JBQXNCLENBQUUsR0FBK0M7SUFFNUUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLFNBQVMsRUFBRSx3QkFBd0I7S0FDdEMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMseUJBQXlCLENBQUUsR0FBVztJQUUzQyxPQUFPLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDM0IsQ0FBQztBQUlELFNBQVMsd0JBQXdCLENBQUUsR0FBVTtJQUV6QyxPQUFPLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVE7UUFDN0IsQ0FBQyxDQUFDLDhCQUE4QixDQUFFLEdBQTRCLENBQUM7UUFDL0QsQ0FBQyxDQUFDLG1CQUFPLENBQUUsR0FBRyxFQUFFLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFJRCxTQUFTLDhCQUE4QixDQUFFLEdBQW9DO0lBRXpFLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLHlCQUF5QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFFWCxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNoQjtnQkFDSSx5QkFBeUI7Z0JBRXpCLGFBQWE7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFFLDhFQUE4RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNwRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUUsdUVBQXVFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RHLFVBQVU7Z0JBRVYsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7YUFDOUQ7aUJBRUQ7Z0JBQ0ksMEJBQTBCO2dCQUUxQixhQUFhO2dCQUNULElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUUsbUdBQW1HLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5SSxVQUFVO2dCQUVWLE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQzFEO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLDJCQUEyQixDQUFFLEdBQXNCO0lBRXhELE9BQU8sT0FBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixDQUFDLE9BQU8sRUFBRSwwQkFBYSxDQUFDO1FBQ3hCLE9BQU87UUFDUCxDQUFDLFVBQVUsRUFBRSxtQkFBTyxDQUFDO1FBQ3JCLENBQUMsTUFBTSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsQ0FBQztRQUMzQyxRQUFRO1FBQ1IsWUFBWTtRQUNaLFFBQVE7UUFDUixNQUFNO0tBQ1QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsMEJBQTBCLENBQUUsR0FBZ0M7SUFFakUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsMEJBQWE7UUFDekIsT0FBTyxFQUFFLDJCQUEyQjtLQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyw4QkFBOEIsQ0FBRSxHQUFvQztJQUV6RSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSx5QkFBYSxDQUFDLGFBQWE7UUFDdkMsU0FBUyxFQUFFLDRCQUE0QjtLQUMxQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLG1CQUFtQixDQUFFLEdBQXVCO0lBRWpELDJGQUEyRjtJQUMzRix3RkFBd0Y7SUFDeEYsSUFBSSxPQUFPLEdBQXVCLE1BQU0sQ0FBQyxNQUFNLENBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztRQUM5RCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUMzQixJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSTtRQUN2QyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUV0QixPQUFPLE9BQU8sQ0FBRSxPQUFPLEVBQUU7UUFDckIsUUFBUTtRQUNSLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDO1FBQzdCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7UUFDcEIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUNwQixRQUFRO0tBQ1gsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBRSxHQUF5QztJQUV4RSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxxQ0FBeUI7UUFDckMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQU8sQ0FBRSxDQUFDLEVBQUU7WUFDMUIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLHFDQUF5QjtTQUN4QyxDQUFDO0tBQ0wsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQWdCLDBCQUEwQixDQUFFLEdBQXFCO0lBRTdELE9BQU8sT0FBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxHQUFHLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUM7UUFDbEMsQ0FBQyxHQUFHLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUM7UUFDbEMsQ0FBQyxNQUFNLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUM7UUFDckMsQ0FBQyxRQUFRLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUM7UUFDdkMsQ0FBQyxPQUFPLEVBQUUsMEJBQWEsQ0FBQztLQUMzQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBVkQsZ0VBVUM7QUFJRDs7R0FFRztBQUNILFNBQVMsMEJBQTBCLENBQUUsR0FBd0I7SUFFekQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixXQUFXLEVBQUUseUJBQWEsQ0FBQyxhQUFhO1FBQ3hDLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUUsR0FBcUM7SUFFdkUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFFWCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hCO2dCQUNJLCtCQUErQjtnQkFDL0IsSUFBSSxDQUFDLEdBQUcsbUJBQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUseUJBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsSUFBSSxLQUFLLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsbUJBQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUseUJBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDL0Q7aUJBRUQ7Z0JBQ0ksaUNBQWlDO2dCQUNqQyxPQUFPLG1CQUFPLENBQUUsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3hEO1FBQ0wsQ0FBQztRQUNELE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXBCRCxvREFvQkM7QUFJRDs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFFLEdBQStCO0lBRXBELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLHlCQUFhLENBQUMsYUFBYTtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFFWCxJQUFJLEdBQUcsR0FBYSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTtnQkFDWixHQUFHLENBQUMsSUFBSSxDQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7Z0JBQ1osR0FBRyxDQUFDLElBQUksQ0FBRSxtQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTtnQkFDWixHQUFHLENBQUMsSUFBSSxDQUFFLDBCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUNELE9BQU8sRUFBRSwwQkFBYTtLQUN6QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBRSxHQUFnQztJQUV0RCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xFLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFFLEdBQStCO0lBRXBELGlGQUFpRjtJQUNqRix3RkFBd0Y7SUFDeEYsc0ZBQXNGO0lBQ3RGLDZEQUE2RDtJQUM3RCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxDQUFDO2lCQUNULElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNuQixPQUFPLG1CQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUTtnQkFDN0IsT0FBTyxtQkFBTyxDQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztpQkFFdEM7Z0JBQ0ksT0FBTyxtQkFBTyxDQUFFLENBQUMsRUFBRTtvQkFDZixXQUFXLEVBQUUsY0FBYztvQkFDM0IsTUFBTSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQzthQUNMO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFFLEdBQTZCO0lBRWhELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBRVgsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxDQUFDOztnQkFFcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNELE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsZUFBZSxDQUFFLEdBQVE7SUFFOUIsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO1FBQzVCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsU0FBUztRQUNULENBQUMsTUFBTSxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3JDLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7UUFDekIsUUFBUTtLQUNYLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGlCQUFpQixDQUFFLEdBQTZCO0lBRXJELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxHQUFHLHdCQUFZLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQztLQUMvRCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyx5QkFBeUIsQ0FBRSxHQUEwQztJQUUxRSwyRkFBMkY7SUFDM0YsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDZCxPQUFPLEVBQUUsQ0FBQztpQkFDVCxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVU7Z0JBQy9CLE9BQU8sbUJBQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQzs7Z0JBRW5CLE9BQU8sc0NBQXNDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFTLHNDQUFzQyxDQUFFLElBQW1DO0lBRWhGLDJEQUEyRDtJQUMzRCxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUMvQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFDcEI7UUFDSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxDQUFDO0lBRWQsZ0VBQWdFO0lBQ2hFLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFXLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBUyxRQUFRLENBQUMsQ0FBQztJQUU1QyxtRkFBbUY7SUFDbkYsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQ3BCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsbUJBQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUNyQztZQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDL0I7S0FDSjtJQUVELDRGQUE0RjtJQUM1RiwwQ0FBMEM7SUFDMUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFDakM7UUFDSSxJQUFJLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFDakM7WUFDSSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3BDO1FBRUQsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0tBQ3BDO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBSUQsU0FBZ0IsaUJBQWlCLENBQUUsR0FBYztJQUU3QyxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQztRQUNoRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1CQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUc7S0FDcEMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELDhDQU1DO0FBSUQsU0FBUyxnQkFBZ0IsQ0FBRSxHQUF5QztJQUVoRSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQztRQUNoRCxXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLG1CQUFtQixDQUFFLEdBQStCO0lBRXpELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUyxHQUFlLENBQUMsSUFBSSxHQUFHO0tBQ2pELENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGNBQWMsQ0FBRSxHQUFvQjtJQUV6QyxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNkLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksd0JBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7Z0JBRXJELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdFLENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsU0FBUyx5QkFBeUIsQ0FBRSxHQUF1QztJQUV2RSxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsTUFBTTtRQUNOLE9BQU87UUFDUCxDQUFDLE9BQU8sRUFBRSwwQkFBYSxDQUFDO1FBQ3hCLENBQUMsV0FBVyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDO0tBQzdDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLDJCQUEyQixDQUFFLEdBQWdDO0lBRWxFLE9BQU8sT0FBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixDQUFDLFVBQVUsRUFBRSx1QkFBVyxDQUFDO1FBQ3pCLENBQUMsVUFBVSxFQUFFLHVCQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUMsTUFBTSxFQUFFLDhCQUE4QixDQUFDO1FBQ3hDLENBQUMsT0FBTyxFQUFFLHVCQUFXLENBQUMsYUFBYSxDQUFDO0tBQ3ZDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLDBCQUEwQixDQUFFLEdBQWdDO0lBRWpFLE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsT0FBTyxFQUFFLDJCQUEyQjtLQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxjQUFjLENBQUUsR0FBcUI7SUFFMUMsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQzlCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztRQUN0QixDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztRQUM5QixDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUM7UUFDMUIsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBQztLQUNsQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxHQUFRLEVBQzdCLElBQW1FLEVBQ25FLFlBQW9CLEdBQUc7SUFFdkIsSUFBSSxHQUFHLElBQUksSUFBSTtRQUNYLE9BQU8sRUFBRSxDQUFDO1NBQ1QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQzVCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTFCLElBQUksR0FBRyxHQUFlLEVBQUUsQ0FBQztJQUN6QixJQUFJLENBQUMsT0FBTyxDQUFFLFdBQVcsQ0FBQyxFQUFFO1FBRXhCLHlGQUF5RjtRQUN6RixtREFBbUQ7UUFDbkQsSUFBSSxRQUFRLEdBQUcsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNmLE9BQU87UUFFWCxpQ0FBaUM7UUFDakMsSUFBSSxNQUFNLEdBQUcsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLElBQUksU0FBUyxHQUFHLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFNBQVM7WUFDVixHQUFHLENBQUMsSUFBSSxDQUFFLG1CQUFPLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUM1QixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVE7WUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBRSxpQkFBaUIsQ0FBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBRXhELEdBQUcsQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFTixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQWxDRCwwQkFrQ0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLG9DQUFvQztBQUNwQyxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7Ozs7R0FNRztBQUNILFNBQWdCLGNBQWMsQ0FBRSxNQUFtQyxFQUMvRCxNQUFnQjtJQUVoQixJQUFJLENBQUMsTUFBTTtRQUNQLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVoQyw2RkFBNkY7SUFDN0YsK0NBQStDO0lBQy9DLElBQUksQ0FBQyxNQUFNLEVBQ1g7UUFDSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0IsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxtR0FBbUc7SUFDbkcsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDLGlCQUFpQixFQUN0QjtRQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0lBRUQsd0NBQXdDO0lBQ3hDLHdCQUF3QixDQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUxQyw0Q0FBNEM7SUFDL0MsS0FBSyxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQzNCO1FBQ08sSUFBSSxRQUFRLEtBQUssR0FBRyxJQUFJLFFBQVEsS0FBSyxJQUFJO1lBQ3JDLFNBQVM7O1lBRVQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5QztJQUVFLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFwQ0Qsd0NBb0NDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQix3QkFBd0IsQ0FBRSxNQUFnQixFQUN0RCxNQUFnQjtJQUVoQix1RUFBdUU7SUFDdkUsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDLGlCQUFpQjtRQUNsQixPQUFPO0lBRVgsMEJBQTBCO0lBQzFCLElBQUksaUJBQWlCLEVBQ3JCO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUUsaUJBQWlCLENBQUMsQ0FBQztLQUNoSDtBQUNMLENBQUM7QUFkRCw0REFjQztBQUlELCtEQUErRDtBQUMvRCxTQUFnQixnQkFBZ0IsQ0FBRSxRQUFrQjtJQUVoRCxJQUFJLENBQUMsUUFBUTtRQUNULE9BQU8sRUFBRSxDQUFDO0lBRWQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRWQsb0JBQW9CLENBQUUsUUFBUSxFQUFFLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBRSxRQUFpQixFQUFRLEVBQUU7UUFDbEYsSUFBSSxRQUFRO1lBQ1IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDOztZQUV6QixDQUFDLElBQUksR0FBRyx1QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBZkQsNENBZUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQix5QkFBeUIsQ0FBRSxTQUE4QjtJQUVyRSxJQUFJLENBQUMsU0FBUztRQUNWLE9BQU8sRUFBRSxDQUFDO0lBRWQsSUFBSSxPQUFlLENBQUM7SUFDcEIsSUFBSSxRQUFnQixDQUFDO0lBQ3JCLElBQUksS0FBVSxDQUFDO0lBQ2YsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDMUI7UUFDSSxPQUFPLEdBQUksU0FBUyxDQUFDLENBQUMsQ0FBYSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUN2QjtTQUVEO1FBQ0ksT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTztZQUNSLE9BQU8sRUFBRSxDQUFDO2FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQzlCLE9BQU8sR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBRTdCLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFDckIsT0FBTyxFQUFFLENBQUM7UUFFZCxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQTlCRCw4REE4QkM7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixpQkFBaUIsQ0FBRSxRQUFnQixFQUFFLE9BQVksRUFBRSxTQUFtQjtJQUVsRixJQUFJLENBQUMsUUFBUTtRQUNULE9BQU8sRUFBRSxDQUFDO0lBRWQsMkNBQTJDO0lBQzNDLElBQUksSUFBSSxHQUFRLGtCQUFrQixDQUFDLHVCQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUUxRCx5RkFBeUY7SUFDekYsdUVBQXVFO0lBQ3ZFLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUN2QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDcEIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksR0FBRyxJQUFJLE9BQU8sRUFDakQ7UUFDSSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDbEI7SUFFRCxJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUk7UUFDbkIsQ0FBQyxDQUFDLG1CQUFPLENBQUUsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRO1lBQ3RCLENBQUMsQ0FBQyxtQkFBTyxDQUFFLFFBQVEsRUFBRSxJQUE0QixDQUFDO1lBQ2xELENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRO2dCQUN0QixDQUFDLENBQUMsNEJBQTRCLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztnQkFDL0MsQ0FBQyxDQUFFLElBQXFCLENBQUUsUUFBUSxDQUFDLENBQUM7SUFFaEQsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQVM7UUFDMUIsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUU1QixJQUFJLE9BQU87UUFDUCxXQUFXLElBQUksYUFBYSxDQUFDO0lBRWpDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsdUJBQVcsQ0FBRSxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNoRixDQUFDO0FBakNELDhDQWlDQztBQUlEOzs7Ozs7R0FNRztBQUNILFNBQWdCLG9CQUFvQixDQUFFLFFBQWtCLEVBQ3BELE9BQStEO0lBRWxFLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxFQUM3QjtRQUNDLElBQUksUUFBUSxLQUFLLElBQUksRUFDckI7WUFDQyw4RUFBOEU7WUFDOUUsaUNBQWlDO1lBQ2pDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQTBCLENBQUM7WUFDMUQsS0FBSyxJQUFJLFNBQVMsSUFBSSxPQUFPLEVBQzdCO2dCQUNDLElBQUksQ0FBQyxTQUFTO29CQUNiLFNBQVM7Z0JBRVYsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyx5QkFBeUIsQ0FBRSxTQUFTLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLE9BQU87b0JBQ1gsU0FBUztnQkFDVixJQUFJLFFBQVEsSUFBSSxJQUFJO29CQUNuQixRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUVmLE9BQU8sQ0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Q7YUFFRDtZQUNDLGdEQUFnRDtZQUN2QyxPQUFPLENBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0Y7S0FDRDtBQUNGLENBQUM7QUE5QkQsb0RBOEJDO0FBSUQsaUdBQWlHO0FBQ2pHLG9DQUFvQztBQUNwQyxTQUFTLDRCQUE0QixDQUFFLEdBQTZCO0lBRWhFLE9BQU8seUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUVELCtGQUErRjtBQUMvRixvQ0FBb0M7QUFDcEMsU0FBUywwQkFBMEIsQ0FBRSxHQUEyQjtJQUU1RCxPQUFPLHVCQUFXLENBQUMsa0JBQWtCLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFFRCxrR0FBa0c7QUFDbEcsc0JBQXNCO0FBQ3RCLFNBQVMsc0JBQXNCLENBQUUsR0FBUTtJQUVyQyxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUFBLENBQUM7QUFFRixrR0FBa0c7QUFDbEcsc0JBQXNCO0FBQ3RCLFNBQVMsc0JBQXNCLENBQUUsR0FBUTtJQUVyQyxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUFBLENBQUM7QUE0QkY7Ozs7O0dBS0c7QUFDSCxTQUFTLDRCQUE0QixDQUFFLEdBQVEsRUFBRSxRQUF1QjtJQUVwRSxJQUFJLElBQUksR0FDSixRQUFRLG1CQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLFFBQVEsa0JBQXdCLENBQUMsQ0FBQyxDQUFDLDBCQUFhLENBQUMsQ0FBQztZQUNsRCxRQUFRLG1CQUF5QixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDcEQsUUFBUSxxQkFBMkIsQ0FBQyxDQUFDLENBQUMsbUJBQU8sQ0FBQyxDQUFDO29CQUMvQyxRQUFRLHlCQUErQixDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO3dCQUN0RSxRQUFRLGlDQUF1QyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOzRCQUNoRixRQUFRLCtCQUFxQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dDQUM1RSxRQUFRLDJCQUFpQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29DQUNwRSxRQUFRLDJCQUFpQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3dDQUNwRSxRQUFRLHNCQUEyQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRDQUN4RCxJQUFJLENBQUM7SUFFVCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakMsQ0FBQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsNkZBQTZGO0FBQzdGLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsTUFBTSxrQkFBa0IsR0FDeEI7SUFDSSxTQUFTLEVBQUU7UUFDUCxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNELGNBQWMsNEJBQWtDO0lBQ2hELGlCQUFpQiw0QkFBa0M7SUFDbkQsdUJBQXVCLHdCQUE4QjtJQUNyRCxpQkFBaUIsd0JBQThCO0lBQy9DLGFBQWEsd0JBQThCO0lBQzNDLGtCQUFrQix3QkFBOEI7SUFDaEQsdUJBQXVCLEVBQUUsc0JBQXNCO0lBRS9DLFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRSwwQkFBYTtRQUN6QixPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Qsb0JBQW9CLHdCQUE4QjtJQUNsRCxtQkFBbUIsd0JBQThCO0lBQ2pELGNBQWMsd0JBQThCO0lBQzVDLGVBQWUsZUFBcUI7SUFDcEMsZ0JBQWdCLHdCQUE4QjtJQUM5QyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLHdCQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUM5QyxnQkFBZ0Isd0JBQThCO0lBQzlDLGNBQWMsRUFBRTtRQUNaLFVBQVUsRUFBRSx5QkFBYSxDQUFDLGFBQWE7UUFDdkMsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0QsYUFBYSxnQkFBc0I7SUFDbkMsTUFBTSxnQkFBc0I7SUFDNUIsY0FBYyxnQkFBc0I7SUFDcEMsbUJBQW1CLGVBQXFCO0lBQ3hDLG1CQUFtQixnQkFBc0I7SUFDekMsZ0JBQWdCLGdCQUFzQjtJQUN0QyxxQkFBcUIsZUFBcUI7SUFDMUMscUJBQXFCLGdCQUFzQjtJQUMzQyxZQUFZLGdCQUFzQjtJQUNsQyxpQkFBaUIsZUFBcUI7SUFDdEMsc0JBQXNCLHNCQUE0QjtJQUNsRCx1QkFBdUIsc0JBQTRCO0lBQ25ELGlCQUFpQixnQkFBc0I7SUFDdkMsV0FBVyxFQUFFO1FBQ1QsT0FBTyxFQUFFLDBCQUFhO0tBQ3pCO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsT0FBTyxFQUFFLG1CQUFtQjtLQUMvQjtJQUNELGdCQUFnQixFQUFFLHdCQUF3QjtJQUMxQyxlQUFlLGdCQUFzQjtJQUNyQyxvQkFBb0IsZUFBcUI7SUFDekMsb0JBQW9CLGdCQUFzQjtJQUMxQyxpQkFBaUIsZ0JBQXNCO0lBQ3ZDLHNCQUFzQixlQUFxQjtJQUMzQyxzQkFBc0IsZ0JBQXNCO0lBQzVDLFVBQVUsZ0JBQXNCO0lBQ2hDLGVBQWUsZUFBcUI7SUFDcEMsZUFBZSxnQkFBc0I7SUFDckMsWUFBWSxFQUFFLG9CQUFvQjtJQUNsQyxXQUFXLGdCQUFzQjtJQUNqQyxnQkFBZ0IsZUFBcUI7SUFDckMsZ0JBQWdCLGdCQUFzQjtJQUN0QyxhQUFhLDhCQUFvQztJQUNqRCxTQUFTLGdCQUFzQjtJQUMvQixjQUFjLGVBQXFCO0lBQ25DLG1CQUFtQixzQkFBNEI7SUFDL0Msb0JBQW9CLHNCQUE0QjtJQUNoRCxjQUFjLGdCQUFzQjtJQUNwQyxXQUFXLDhCQUFvQztJQUMvQyxNQUFNLGdCQUFzQjtJQUM1QixTQUFTLEVBQUU7UUFDUCxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLE1BQU0sRUFBRSxHQUFHO0tBQ2Q7SUFFRCxVQUFVLGVBQXFCO0lBQy9CLElBQUksRUFBRztRQUNILFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDNUQ7SUFDRCxLQUFLLGVBQXFCO0lBQzFCLFNBQVMsZ0JBQXNCO0lBQy9CLFVBQVUsZ0JBQXNCO0lBQ2hDLGVBQWUsZUFBcUI7SUFDcEMsZUFBZSw4QkFBb0M7SUFDbkQsT0FBTyxFQUFFLGVBQWU7SUFDeEIsV0FBVyxnQkFBc0I7SUFDakMsTUFBTSxFQUFFLGNBQWM7SUFFdEIsSUFBSSxlQUFxQjtJQUN6QixXQUFXLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO0lBQ3pDLElBQUksRUFBRSxZQUFZO0lBQ2xCLFNBQVMsZ0JBQXNCO0lBQy9CLFVBQVUsZUFBcUI7SUFDL0IsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLGVBQWU7S0FDM0I7SUFDRCxRQUFRLGdCQUFzQjtJQUM5QixTQUFTLEVBQUUsaUJBQWlCO0lBRTVCLEdBQUcsOEJBQW9DO0lBQ3ZDLGFBQWEsZ0JBQXNCO0lBQ25DLE9BQU8sOEJBQW9DO0lBQzNDLFVBQVUsZ0JBQXNCO0lBQ2hDLFFBQVEsd0JBQThCO0lBQ3RDLGVBQWUsbUJBQXdCO0lBQ3ZDLFlBQVksbUJBQXdCO0lBQ3BDLFVBQVUsd0JBQThCO0lBQ3hDLE9BQU8sd0JBQThCO0lBQ3JDLGlCQUFpQixFQUFFLHlCQUF5QjtJQUM1QyxtQkFBbUIsbUJBQXdCO0lBQzNDLGdCQUFnQixtQkFBd0I7SUFFeEMsTUFBTSxnQkFBc0I7SUFFNUIsVUFBVSxnQkFBc0I7SUFFaEMsSUFBSSxnQkFBc0I7SUFDMUIsYUFBYSxnQkFBc0I7SUFDbkMsYUFBYSxlQUFxQjtJQUVsQyxNQUFNLDhCQUFvQztJQUMxQyxjQUFjLGdCQUFzQjtJQUNwQyxnQkFBZ0IsZ0JBQXNCO0lBQ3RDLFlBQVksZ0JBQXNCO0lBQ2xDLGVBQWUsZ0JBQXNCO0lBQ3JDLGlCQUFpQixnQkFBc0I7SUFDdkMsVUFBVSxnQkFBc0I7SUFDaEMsV0FBVyxnQkFBc0I7SUFDakMsU0FBUyxnQkFBc0I7SUFDL0IsU0FBUyxFQUFFLG1CQUFtQjtJQUM5QixTQUFTLEVBQUUsbUJBQW1CO0lBQzlCLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsWUFBWSxnQkFBc0I7SUFDbEMsU0FBUyxnQkFBc0I7SUFDL0IsYUFBYSxnQkFBc0I7SUFDbkMsUUFBUSxnQkFBc0I7SUFDOUIsWUFBWSxnQkFBc0I7SUFDbEMsU0FBUyxnQkFBc0I7SUFDL0IsYUFBYSxnQkFBc0I7SUFDdEMsUUFBUSxnQkFBc0I7SUFFM0IsY0FBYyxrQkFBd0I7SUFDdEMsTUFBTSxFQUFFLGNBQWM7SUFDdEIsWUFBWSxrQkFBd0I7SUFDcEMsY0FBYyxnQkFBc0I7SUFDcEMsY0FBYyxrQkFBd0I7SUFDdEMsWUFBWSxFQUFFO1FBQ1YsT0FBTyxFQUFFLHdCQUFZLENBQUMsYUFBYTtLQUN0QztJQUNELE9BQU8sZ0JBQXNCO0lBQzdCLFlBQVksZUFBcUI7SUFDakMsYUFBYSxnQkFBc0I7SUFFbkMsT0FBTyw4QkFBb0M7SUFDM0MsZUFBZSxnQkFBc0I7SUFDckMsaUJBQWlCLGdCQUFzQjtJQUN2QyxhQUFhLGdCQUFzQjtJQUNuQyxnQkFBZ0IsZ0JBQXNCO0lBQ3RDLGtCQUFrQixnQkFBc0I7SUFDeEMsV0FBVyxnQkFBc0I7SUFDakMsWUFBWSxnQkFBc0I7SUFDbEMsVUFBVSxnQkFBc0I7SUFDaEMsV0FBVyxnQkFBc0I7SUFDakMsaUJBQWlCLEVBQUU7UUFDZixPQUFPLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0tBQ3ZDO0lBRUQsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7S0FDN0I7SUFFRCxLQUFLLGdCQUFzQjtJQUMzQixNQUFNLEVBQUUsY0FBYztJQUN0QixNQUFNLGdCQUFzQjtJQUU1QixjQUFjLEVBQUU7UUFDWixXQUFXLEVBQUUsMEJBQWE7S0FDN0I7SUFDRCxZQUFZLDhCQUFvQztJQUNoRCxpQkFBaUIsOEJBQW9DO0lBQ3JELG9CQUFvQixnQkFBc0I7SUFDMUMsc0JBQXNCLGdCQUFzQjtJQUM1QyxrQkFBa0IsZ0JBQXNCO0lBQ3hDLGtCQUFrQiw4QkFBb0M7SUFDdEQscUJBQXFCLGdCQUFzQjtJQUMzQyx1QkFBdUIsZ0JBQXNCO0lBQzdDLGdCQUFnQixnQkFBc0I7SUFDdEMsaUJBQWlCLGdCQUFzQjtJQUN2QyxlQUFlLGdCQUFzQjtJQUNyQyxhQUFhLDhCQUFvQztJQUNqRCxrQkFBa0IsOEJBQW9DO0lBQ3RELHFCQUFxQixnQkFBc0I7SUFDM0MsdUJBQXVCLGdCQUFzQjtJQUM3QyxtQkFBbUIsZ0JBQXNCO0lBQ3pDLG1CQUFtQiw4QkFBb0M7SUFDdkQsc0JBQXNCLGdCQUFzQjtJQUM1Qyx3QkFBd0IsZ0JBQXNCO0lBQzlDLGlCQUFpQixnQkFBc0I7SUFDdkMsa0JBQWtCLGdCQUFzQjtJQUN4QyxnQkFBZ0IsZ0JBQXNCO0lBQ3RDLFdBQVcsZ0JBQXNCO0lBQ2pDLFNBQVMsZUFBcUI7SUFDOUIsTUFBTSxlQUFxQjtJQUUzQixPQUFPLGdCQUFzQjtJQUM3QixrQkFBa0IsRUFBRTtRQUNoQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtLQUNqQztJQUNELGNBQWMsRUFBRTtRQUNaLFVBQVUsRUFBRSwwQkFBYTtRQUN6QixPQUFPLEVBQUUseUJBQXlCO0tBQ3JDO0lBQ0QsbUJBQW1CLGVBQXFCO0lBQ3hDLHVCQUF1QixnQkFBc0I7SUFDN0MsWUFBWSxFQUFFO1FBQ1YsT0FBTyxFQUFFLDBCQUFhO0tBQ3pCO0lBQ0QsaUJBQWlCLGVBQXFCO0lBQ3RDLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkM7SUFDRCxVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLE1BQU0sRUFBRSxHQUFHO0tBQ2Q7SUFDRCxjQUFjLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO0lBQzVDLEdBQUcsZ0JBQXNCO0lBQ3pCLGVBQWUsRUFBRTtRQUNiLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkM7SUFDRCxVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNELGVBQWUsNEJBQWtDO0lBQ2pELGtCQUFrQiw0QkFBa0M7SUFDcEQsd0JBQXdCLEVBQUUsc0JBQXNCO0lBQ2hELFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkM7SUFFRCxhQUFhLGdCQUFzQjtJQUVuQyxLQUFLLGdCQUFzQjtJQUMzQixVQUFVLEVBQUU7UUFDUixVQUFVLEVBQUUsdUJBQVc7S0FDMUI7SUFDRCxXQUFXLGdCQUFzQjtJQUVqQyxJQUFJLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO0lBRWxDLHdDQUF3QztJQUN4QyxXQUFXLGdCQUFzQjtJQUNqQyxVQUFVLEVBQUUsd0JBQVksQ0FBQyxhQUFhO0lBQ3RDLFNBQVMsRUFBRSx1QkFBVyxDQUFDLGFBQWE7SUFDcEMsZUFBZSxFQUFFLDZCQUFpQixDQUFDLGFBQWE7SUFDaEQsY0FBYyxFQUFFLDRCQUFnQixDQUFDLGFBQWE7SUFDOUMsWUFBWSxFQUFFLDBCQUFjLENBQUMsYUFBYTtJQUMxQyxhQUFhLGtCQUF3QjtJQUNyQyxVQUFVLGVBQXFCO0NBQ2xDLENBQUM7QUFJRixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLHNCQUFzQjtBQUN0QixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HLHFFQUFxRTtBQUNyRSxTQUFnQixxQkFBcUIsQ0FBRSxLQUFvQjtJQUV2RCxPQUFPLG1CQUFPLENBQUUsS0FBSyxFQUFFO1FBQ25CLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsTUFBTSxFQUFFLE1BQU07S0FDakIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELHNEQU1DO0FBSUQscUVBQXFFO0FBQ3JFLFNBQWdCLDJCQUEyQixDQUFFLEtBQTBCO0lBRW5FLE9BQU8sbUJBQU8sQ0FBRSxLQUFLLEVBQUU7UUFDbkIsT0FBTyxFQUFFLENBQUMsQ0FBNEMsRUFBRSxFQUFFO1lBQ3RELElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxDQUFDO1lBRWQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakMsT0FBUSxHQUFHLEdBQUcsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDM0MsaUJBQWlCLENBQUUsUUFBa0MsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQ3JHLENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBYkQsa0VBYUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hwQ0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixVQUFVO0FBQ1YsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUUsSUFBWTtJQUV4QyxJQUFJLENBQUMsSUFBSTtRQUNSLE9BQU8sSUFBSSxDQUFDO0lBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFFLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFORCxrQ0FNQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxLQUFhO0lBRXhDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBRSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyRSxDQUFDO0FBSEQsa0NBR0M7QUEyQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEdBQVEsRUFBRSxPQUE4QjtJQUU5RCxJQUFJLENBQUMsT0FBTyxFQUNYO1FBQ0ksdUJBQXVCO1FBQ3ZCLHdDQUF3QztRQUN4QyxpREFBaUQ7UUFDakQsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQ1gsT0FBTyxFQUFFLENBQUM7YUFDVCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFDNUIsT0FBTyxHQUFHLENBQUM7YUFDVixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLE9BQU8sT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVTtZQUM5QixPQUFPLEdBQUcsRUFBRSxDQUFDO2FBQ1osSUFBSSxPQUFPLEdBQUcsQ0FBQyxhQUFhLEtBQUssVUFBVTtZQUM1QyxPQUFPLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7WUFFM0IsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDN0I7U0FFRDtRQUNJLHNGQUFzRjtRQUN0RixvREFBb0Q7UUFDcEQsSUFBSSxHQUFHLElBQUksSUFBSTtZQUNYLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ3JELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUM1QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUMxRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFDNUIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDL0csSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVO1lBQzlCLE9BQU8sT0FBTyxDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNyRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQzNCO1lBQ0ksSUFBSSxPQUFPLENBQUMsU0FBUztnQkFDakIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUVuQztnQkFDSSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUM5RCxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN4RjtTQUNKO2FBQ0ksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQ2hDO1lBQ0ksSUFBSSxPQUFPLEdBQUcsQ0FBQyxhQUFhLEtBQUssVUFBVTtnQkFDdkMsT0FBTyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQzFCLElBQUksT0FBTyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQztpQkFDNUIsSUFBSSxPQUFPLENBQUMsT0FBTztnQkFDcEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDOztnQkFFN0IsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDN0I7YUFDSSxJQUFJLE9BQU8sR0FBRyxLQUFLLFNBQVM7WUFDN0IsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0csSUFBSSxPQUFPLENBQUMsT0FBTztZQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUM7O1lBRTdCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzdCO0FBQ0wsQ0FBQztBQTlERCwwQkE4REM7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixPQUFPLENBQUUsR0FBVSxFQUFFLElBQW9CLEVBQUUsWUFBb0IsR0FBRztJQUU5RSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsRUFBRTtRQUNKLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFDLENBQUM7QUFDL0YsQ0FBQztBQUxELDBCQUtDO0FBS0Q7OztHQUdHO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQUUsS0FBMkIsRUFBRSxNQUFhLEVBQzlFLFdBQWlDO0lBRWpDLHdFQUF3RTtJQUN4RSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLElBQUksU0FBUyxLQUFLLENBQUM7UUFDZixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRTtRQUM5QixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxGLG9CQUFvQjtJQUNwQixPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQWRELHdEQWNDO0FBZUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxjQUFjLENBQUUsQ0FBUyxFQUFFLFVBQWtCLEVBQUUsRUFBRSxZQUFvQixFQUFFO0lBRTVFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUM5RCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsa0JBQWtCLENBQW9CLEdBQTRCLEVBQ3ZFLFdBQW1DO0lBRW5DLE9BQU8sT0FBTyxDQUFFLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsa0JBQWtCLENBQW9CLEdBQWlDLEVBQ2hFLFdBQW1DLEVBQUUsWUFBb0IsR0FBRztJQUV4RSxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsVUFBVSxFQUFFLFdBQVc7UUFDdkIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQztRQUNyRCxNQUFNLEVBQUUsU0FBUztLQUNwQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBUyxRQUFRLENBQW9CLElBQVksRUFBRSxNQUFpQyxFQUNoRixXQUFtQztJQUVuQyxPQUFPLEdBQUcsSUFBSSxJQUFJLGtCQUFrQixDQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN2RSxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLFFBQVEsQ0FBb0IsS0FBMkIsRUFBRSxNQUFpQyxFQUMvRixXQUFtQztJQUVuQyxPQUFPLFFBQVEsc0JBQXNCLENBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM5RyxDQUFDO0FBSUQ7Ozs7R0FJRztBQUNILE1BQU0sY0FBYztJQUVoQixZQUF1QixXQUFrQztRQUFsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFJbEQsbUJBQWMsR0FBRyxDQUFDLENBQVMsRUFBVSxFQUFFO1lBRTFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRU0sa0JBQWEsR0FBRyxDQUFDLEdBQTRCLEVBQVUsRUFBRTtZQUU1RCxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVNLHVCQUFrQixHQUFHLENBQUMsR0FBaUMsRUFBRSxZQUFvQixHQUFHLEVBQVUsRUFBRTtZQUUvRixPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFmRCxDQUFDO0lBaUJNLEdBQUcsQ0FBRSxHQUFHLE1BQWlDO1FBRTVDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxHQUFHLENBQUUsR0FBRyxNQUFpQztRQUU1QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sS0FBSyxDQUFFLEdBQTRCLEVBQUUsSUFBNkIsRUFBRSxHQUE0QjtRQUVuRyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sSUFBSSxDQUFFLFlBQWtDLEVBQUUsR0FBRyxNQUFpQztRQUVqRixPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0o7QUFzQkQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLGFBQWMsU0FBUSxjQUEwQjtJQUVsRCxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0QsTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUF3QixJQUMvQyxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBRSxHQUE2QixFQUFFLFNBQWlCLElBQzVFLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlFLGdCQUFnQixLQUFLLENBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7Q0FDdEQ7QUFYRCxzQ0FXQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsVUFBVTtBQUNWLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsY0FBMkI7SUFFcEQsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFTLElBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUU5RCxNQUFNLENBQUMsYUFBYSxDQUFFLEdBQXlCLElBQ2hELE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0QsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQThCLEVBQUUsU0FBaUIsSUFDN0UsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0UsZ0JBQWdCLEtBQUssQ0FBRSxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztDQUN2RDtBQVpELHdDQVlDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLHlCQUF5QixDQUFFLENBQVM7SUFFaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDeEUsQ0FBQztBQUhELDhEQUdDO0FBR0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixTQUFTO0FBQ1QsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLGFBQWMsU0FBUSxjQUEwQjtJQUVsRCxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLGNBQWMsQ0FBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRixNQUFNLENBQUMsYUFBYSxDQUFFLEdBQXdCLElBQy9DLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUQsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQTZCLEVBQUUsU0FBaUIsSUFDNUUsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUUsZ0JBQWdCLEtBQUssQ0FBRSxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztJQUU1QyxNQUFNLENBQUUsR0FBd0IsRUFBRSxHQUF3QjtRQUU3RCxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDSjtBQWhCRCxzQ0FnQkM7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLFFBQVE7QUFDUixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILE1BQWEsWUFBYSxTQUFRLGNBQXlCO0lBRWhELE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FBUyxJQUFZLE9BQU8sY0FBYyxDQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBGLE1BQU0sQ0FBQyxhQUFhLENBQUUsR0FBdUIsSUFDOUMsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBNEIsRUFBRSxTQUFpQixJQUMzRSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3RSxnQkFBZ0IsS0FBSyxDQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO0NBQ3JEO0FBWEQsb0NBV0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLE9BQU87QUFDUCxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILE1BQWEsV0FBWSxTQUFRLGNBQXdCO0lBRTlDLE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FBUyxJQUFZLE9BQU8sY0FBYyxDQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhGLE1BQU0sQ0FBQyxhQUFhLENBQUUsR0FBc0IsSUFDN0MsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxRCxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBMkIsRUFBRSxTQUFpQixJQUMxRSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RSxnQkFBZ0IsS0FBSyxDQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO0NBQ3BEO0FBWEQsa0NBV0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGFBQWE7QUFDYixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsY0FBOEI7SUFFMUQsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFTLElBQVksT0FBTyxjQUFjLENBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakYsTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUE0QixJQUNuRCxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEUsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQWlDLEVBQUUsU0FBaUIsSUFDaEYsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRixnQkFBZ0IsS0FBSyxDQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7Q0FDMUQ7QUFYRCw4Q0FXQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsWUFBWTtBQUNaLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxjQUE2QjtJQUV4RCxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLGNBQWMsQ0FBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRixNQUFNLENBQUMsYUFBYSxDQUFFLEdBQTJCLElBQ2xELE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUvRCxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBZ0MsRUFBRSxTQUFpQixJQUMvRSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpGLGdCQUFnQixLQUFLLENBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztDQUN6RDtBQVhELDRDQVdDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixXQUFXO0FBQ1gsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxHQUEwQjtJQUUvQyxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNqQixVQUFVLEVBQUUsYUFBYSxDQUFDLGFBQWE7UUFDdkMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7S0FDNUQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDBCQU9DO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixZQUFZLENBQUUsR0FBK0IsRUFBRSxTQUFpQjtJQUU1RSxPQUFPLE9BQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsV0FBVyxFQUFFLE9BQU87UUFDcEIsTUFBTSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELG9DQU1DOzs7Ozs7Ozs7Ozs7OztBQ25pQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRzs7QUF3SytELENBQUM7QUE2QkMsQ0FBQztBQXNDSCxDQUFDO0FBaUNILENBQUM7QUErQkgsQ0FBQztBQStCVyxDQUFDO0FBK0JILENBQUM7QUFrRWYsQ0FBQztBQWdCM0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7R0FFRztBQUNILE1BQXNCLGFBQWE7O0FBQW5DLHNDQVFDO0FBTmdCLGtCQUFJLEdBQUcsOEJBQThCLENBQUM7QUFDdEMsaUJBQUcsR0FBRyw0QkFBNEIsQ0FBQztBQUNuQyxtQkFBSyxHQUFHLDhCQUE4QixDQUFDO0FBQ3ZDLGlCQUFHLEdBQUcsc0NBQXNDLENBQUM7QUFDN0MsbUJBQUssR0FBRywrQkFBK0IsQ0FBQztBQUN4QyxvQkFBTSxHQUFHLG9DQUFvQyxDQUFDIiwiZmlsZSI6Im1pbWNzcy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvbWltY3NzVHlwZXMuanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBDb2xvclR5cGVzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCAqIGFzIENvbG9yRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9Db2xvckZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciB3aXRoXHJcbiAqIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGIgQmx1ZSBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLnJnYlRvU3RyaW5nKCByLCBnLCBiLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIEh1ZSBjb21wb25lbnQgaXMgdHJlYXRlZCBhcyB0aGUgQ1NTIGA8YW5nbGU+YCB0eXBlLiBOdW1iZXJzIGFyZSBjb25zaWRlcmVkIGRlZ3JlZXMuXHJcbiAqIFxyXG4gKiBUaGUgU2F0dXJhdGlvbiBhbmQgTGlnaHRuZXNzIGNvbXBvbmVudHMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZXM6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICpcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhPzogbnVtYmVyKTogQ29sb3JUeXBlcy5JQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5oc2xUb1N0cmluZyggaCwgcywgbCwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoIGM6IG51bWJlciB8IGtleW9mIENvbG9yVHlwZXMuSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIGMsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RXh0ZW5kZWQsIENzc1Bvc2l0aW9uLCBDc3NBbmdsZSwgQ3NzTGVuZ3RofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcbiAgICBHcmFkaWVudFN0b3BPckhpbnQsIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIExpbmVhckdyYWRBbmdsZSxcclxuICAgIENyb3NzRmFkZVBhcmFtLCBJSW1hZ2VQcm94eSwgUmFkaWFsR3JhZGllbnRTaGFwZSwgUmFkaWFsR3JhZGllbnRTaXplLCBcclxuICAgIElHcmFkaWVudCwgSUxpbmVhckdyYWRpZW50LCBJUmFkaWFsR3JhZGllbnQsIElDb25pY0dyYWRpZW50XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9JbWFnZVR5cGVzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHt2YWwyc3RyLCBJTnVtYmVyQmFzZU1hdGhDbGFzcywgQ3NzQW5nbGVNYXRoLCBwb3Myc3RyLCBDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHsgRXh0ZW50S2V5d29yZCB9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyYWRpZW50IGNsYXNzIGltcGxlbWVudHMgdGhlIElHcmFkaWVudCBpbnRlcmZhY2UgdXNpbmcgcHJvcGVydHkgZ2V0IGFjY2Vzc29yLCB3aGNpaCBhbGxvd3NcclxuICogY3JlYXRlaW5nIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBhcHByb3ByaWVudCBncmFkaWVudCBpbnRlcmZhY2UuIFdlIG5lZWQgbmV3IGluc3RhbmNlcywgYmVjYXVzZVxyXG4gKiB0aGUgZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGVzZSBjYWxsYWJsZSBpbnRlcmZhY2VzIGtlZXAgb3B0aW9uYWwgcGFyYW1ldGVycyBhcyBwcm9wZXJ0aWVzIG9mXHJcbiAqIHRoZSBmdWNudGlvbiBvYmplY3RzIHRoZW1zZWx2ZXMuXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudCBpbXBsZW1lbnRzIElHcmFkaWVudFxyXG57XHJcbiAgICBwdWJsaWMgZ2V0IGxpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcImxpbmVhci1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdMaW5lYXIoKTogSUxpbmVhckdyYWRpZW50IHsgcmV0dXJuIGxpbmVhckdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJhZGlhbC1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdSYWRpYWwoKTogSVJhZGlhbEdyYWRpZW50IHsgcmV0dXJuIHJhZGlhbEdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcImNvbmljLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0NvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1jb25pYy1ncmFkaWVudFwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JhZGllbnQgdmFyaWFibGUgcHJvdmlkZXMgYWNjZXNzIHRvIGZ1bmN0aW9ucyBpbXBsZW1lbnRpbmcgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGxldCBncmFkaWVudDogSUdyYWRpZW50ID0gbmV3IEdyYWRpZW50KCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlKCAuLi5hcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogSUltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJTGluZWFyR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGxpbmVyLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWxpbmVyLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gbGluZWFyR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJTGluZWFyR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSk7XHJcblxyXG5cdGYudG8gPSAoYW5nbGU6IExpbmVhckdyYWRBbmdsZSkgPT4ge1xyXG4gICAgICAgIGYuYW5nbGVQYXJhbSA9IGFuZ2xlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG4gICAgXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSVJhZGlhbEdyYWRpZW50IGludGVyZmFjZSBmb3IgZWl0aGVyIGByYWRpYWwtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJUmFkaWFsR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuc2hhcGVQYXJhbSwgZi5zaXplUGFyYW0sIGYucG9zUGFyYW0pO1xyXG5cclxuICAgIGYuY2lyY2xlID0gKHNpemVPckV4dGVudD86IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiY2lyY2xlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZWxsaXBzZSA9IChzaXplT3JFeHRlbnQ/OiBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiZWxsaXBzZVwiO1xyXG4gICAgICAgIGYuc2l6ZVBhcmFtID0gc2l6ZU9yRXh0ZW50O1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRmLmV4dGVudCA9IChleHRlbnQ6IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBleHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zOyByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSUNvbmljR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGNvbmljLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gY29uaWNHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElDb25pY0dyYWRpZW50XHJcbntcclxuICAgIGxldCBmOiBhbnkgPSAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5ID0+XHJcbiAgICAgICAgKCkgPT4gY29uaWNHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSwgZi5wb3NQYXJhbSk7XHJcblxyXG5cdGYuZnJvbSA9IChhbmdsZTogTGluZWFyR3JhZEFuZ2xlKSA9PiB7XHJcbiAgICAgICAgZi5hbmdsZVBhcmFtID0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBhbmdsZT86IExpbmVhckdyYWRBbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKGFuZ2xlKVxyXG4gICAge1xyXG4gICAgICAgIGFuZ2xlU3RyaW5nID0gdmFsMnN0ciggYW5nbGUsIHtcclxuICAgICAgICAgICAgZnJvbU51bWJlcjogQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLFxyXG4gICAgICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IC9cXGQrLiovLnRlc3QodikgPyB2IDogXCJ0byBcIiArIHZcclxuICAgICAgICB9KSArIFwiLFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuYW1lfSgke2FuZ2xlU3RyaW5nfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NQZXJjZW50TWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgc2hhcGU6IFJhZGlhbEdyYWRpZW50U2hhcGUsIHNpemVPckV4dGVudDogUmFkaWFsR3JhZGllbnRTaXplIHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4sXHJcbiAgICBwb3M6IENzc1Bvc2l0aW9uKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzaGFwZVN0cmluZyA9IHNoYXBlID8gc2hhcGUgOiBcIlwiO1xyXG4gICAgbGV0IHNpemVPckV4dGVudFN0cmluZyA9IHNpemVPckV4dGVudCA/IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBzaXplT3JFeHRlbnQsIFwiIFwiKSA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBzaGFwZSB8fCBzaXplT3JFeHRlbnRTdHJpbmcgfHwgcG9zID8gYCR7c2hhcGVTdHJpbmd9ICR7c2l6ZU9yRXh0ZW50U3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBwb3M/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFuZ2xlU3RyaW5nID0gYW5nbGUgPyBgZnJvbSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSl9YCA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBhbmdsZSB8fCBwb3MgPyBgJHthbmdsZVN0cmluZ30gJHtwb3NTdHJpbmd9LGAgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NBbmdsZU1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBwYXJhbXNTdHJpbmcgPSB2YWwyc3RyKCBhcmdzLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGNyb3NzRmFkZVBhcmFtVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbC5tYXAoIHYgPT4gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmcoIHYsIG1hdGhDbGFzcykpLmpvaW4oXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50U3RvcE9ySGludCxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHYubGVuZ3RoID09PSAwID8gXCJcIiA6IHYubGVuZ3RoID09PSAxID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZbMF0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2IGFzIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIG1hdGhDbGFzcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2Vjb25kU3RvcCA9IHZhbC5sZW5ndGggPiAyID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsyXSkgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke2NvbG9yVG9TdHJpbmcodmFsWzBdKX0gJHttYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzFdKX0gJHtzZWNvbmRTdG9wfWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbDJzdHIodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgQ29tYmluZWRTdHlsZXNldCwgSVN0eWxlUnVsZSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgQW5pbWF0aW9uRnJhbWUsIElBbmltYXRpb25SdWxlLCBJVmFyUnVsZSxcclxuICAgIElDb3VudGVyUnVsZSwgSUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZSwgSUltcG9ydFJ1bGUsIElGb250RmFjZVJ1bGUsIElOYW1lc3BhY2VSdWxlLFxyXG4gICAgSVBhZ2VSdWxlLCBTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzcywgSVN1cHBvcnRzUnVsZSwgSU1lZGlhUnVsZSwgSUNsYXNzTmFtZVJ1bGVcclxufSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7cHJvY2Vzc0luc3RhbmNlT3JDbGFzcywgc19lbmFibGVTaG9ydE5hbWVzLCBzZXJpYWxpemVJbnN0YW5jZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtFeHRlbmRlZH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge0Nzc1NlbGVjdG9yLCBQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7SUZvbnRGYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFJ1bGUsIENsYXNzUnVsZSwgSURSdWxlLCBTZWxlY3RvclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9TdHlsZVJ1bGVzXCJcclxuaW1wb3J0IHtBbmltYXRpb25SdWxlfSBmcm9tIFwiLi4vcnVsZXMvQW5pbWF0aW9uUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIlxyXG5pbXBvcnQge0NvdW50ZXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvQ291bnRlclJ1bGVzXCI7XHJcbmltcG9ydCB7R3JpZExpbmVSdWxlLCBHcmlkQXJlYVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9HcmlkUnVsZXNcIjtcclxuaW1wb3J0IHtGb250RmFjZVJ1bGUsIEltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGUsIFBhZ2VSdWxlLCBDbGFzc05hbWVSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGUsIE1lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyb3VwUnVsZXNcIlxyXG5pbXBvcnQge3ZhbDJzdHJ9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7SVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFic3RyYWN0IHJ1bGUsIHdoaWNoIGRlZmluZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBiZSBleHRlbmRlZCBieSBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy4gQWJzdHJhY3QgcnVsZXMgZG9uJ3QgaGF2ZSBzZWxlY3RvcnMgYW5kIGFyZSBub3QgaW5zZXJ0ZWQgaW50byBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFic3RyYWN0KCBzdHlsZTogQ29tYmluZWRTdHlsZXNldCk6IElTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG4gICAgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlKTogSUNsYXNzUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY2xhc3MgbmFtZSBydWxlLCB3aGljaCBjb21iaW5lcyBvbmUgb3IgbW9yZSBvdGhlciBjbGFzcyBuYW1lcy4gVGhpcyBjcmVhdGVzIGFcclxuICogXCJzeW5vbnltXCIgdGhhdCBpcyBlYXNpZXIgdG8gYXBwbHkgdG8gYW4gZWxlbWVudCdzIGNsYXNzIGF0dHJpYnV0ZSB0aGFuIGFuIGFycmF5IG9mIHR3byBvclxyXG4gKiBtb3JlIGNsYXMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNsYXNzbmFtZSggLi4uY2xhc3NlczogKElDbGFzc1J1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IHN0cmluZylbXSk6IElDbGFzc05hbWVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzTmFtZVJ1bGUoIGNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgSUQgcnVsZS4gVGhlIElEIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2ZcclxuICogdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdFxyXG4gKiBuYW1lIG9yIGFub3RoZXIgSUQgcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG8gXCJkZWNsYXJlXCJcclxuICogdGhlIElELiBTdWNoIElEIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaWQoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUlEUnVsZSk6IElJRFJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHNlbGVjdG9yIHJ1bGUuIFNlbGVjdG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcgb3IgdmlhIHRoZSBzZWxlY3RvciBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3R5bGUoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU6IENvbWJpbmVkU3R5bGVzZXQpOiBJU3R5bGVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKTogSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQW5pbWF0aW9uUnVsZSggZnJhbWVzLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY3VzdG9tIHZhcmlhYmxlIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBUaGUgdmFyaWFibGUgbmFtZSB3aWxsXHJcbiAqIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlXHJcbiAqIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjdXN0b20gdmFyaWFibGUgcnVsZS4gVGhlXHJcbiAqIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSB2YWx1ZSBqdXN0IHRvIFwiZGVjbGFyZVwiIHRoZSB2YXJpYWJsZS4gU3VjaFxyXG4gKiB2YXJpYWJsZSBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdGVtcGxhdGU6IEssIHByb3BWYWw/OiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRcdFx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz4pOiBJVmFyUnVsZTxLPlxyXG57XHJcblx0cmV0dXJuIG5ldyBWYXJSdWxlKCB0ZW1wbGF0ZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGNvdW50ZXIgb2JqZWN0LiBUaGUgY291bnRlciBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGNvdW50ZXIgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY291bnRlciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKTogSUNvdW50ZXJSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBsaW5lIG9iamVjdC4gVGhlIGxpbmUgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGxpbmUgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGxpbmUoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUsXHJcbiAgICBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbik6IElHcmlkTGluZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgR3JpZExpbmVSdWxlKCBuYW1lT3ZlcnJpZGUsIGlzU3RhcnRFbmRPck5vbmUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBhcmVhIG9iamVjdC4gVGhlIGFyZWEgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGFyZWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGFyZWEoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGUpOiBJR3JpZEFyZWFSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEdyaWRBcmVhUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSk6IElJbXBvcnRSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHVybCwgbWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBmb250LWZhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZm9udGZhY2UoIGZvbnRmYWNlOiBJRm9udEZhY2UpOiBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggZm9udGZhY2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG5hbWVzcGFjZSggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIG5hbWVzcGFjZSwgcHJlZml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcGFnZSggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpOiBJUGFnZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgUGFnZVJ1bGUoIHBzZXVkb0NsYXNzLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzdXBwb3J0czxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggcXVlcnk6IFN1cHBvcnRzUXVlcnksXHJcbiAgICBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgaW5zdE9yQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbWVkaWE8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LFxyXG4gICAgaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IE1lZGlhUnVsZSggcXVlcnksIGluc3RPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBjcmVhdGVzIHVuaXF1ZSBuYW1lcyBmb3IgYWxsIG5hbWVkXHJcbiAqIGVudGl0aWVzLiBGb3IgYSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9ubHkgYSBzaW5nbGUgaW5zdGFuY2UgaXMgY3JlYXRlZCwgbm8gbWF0dGVyIGhvd1xyXG4gKiBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZC4gSG93ZXZlciwgaWYgYW4gaW5zdGFuY2UsIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gcHJvY2Vzc2VkLFxyXG4gKiBpcyBwYXNzZWQsIHRoZW4gYSBuZXcgc2V0IG9mIHVuaXF1ZSBuYW1lcyB3aWxsIGJlIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR1c2U8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdHJldHVybiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzcykgYXMgVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW1iZWRzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGludG8gYW5vdGhlciBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC4gV2hlbiBhY3RpdmF0ZWQsXHJcbiAqIHRoZSBlbWJlZGRlZCBvYmplY3QgZG9lc24ndCBjcmVhdGUgaXRzIG93biBgPHN0eWxlPmAgZWxlbWVudCBidXQgdXNlcyB0aGF0IG9mIGl0cyBvd25lci4gVGhpc1xyXG4gKiBhbGxvd3MgY3JlYXRpbmcgbWFueSBzbWFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgaW5zdGVhZCBvZiBvbmUgaHVnZSBvbmUgd2l0aG91dCBpbmN1cnJpbmdcclxuICogdGhlIG92ZXJoZWFkIG9mIG1hbnkgYDxzdHlsZT5gIGVsZW1lbnRzLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IGFzIG9wcG9zZWQgdG8gdGhlICR1c2UgZnVuY3Rpb24sIHRoZSAkZW1iZWQgZnVuY3Rpb24gYWx3YXlzIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2ZcclxuICogdGhlIGdpdmVuIGNsYXNzIGFuZCBkb2Vzbid0IGFzc29jaWF0ZSB0aGUgY2xhc3Mgd2l0aCB0aGUgY3JlYXRlZCBpbnN0YW5jZS4gVGhhdCBtZWFucyB0aGF0IGlmXHJcbiAqIGEgY2xhc3MgaXMgZW1iZWRkZWQgaW50byBtb3JlIHRoYW4gb25lIFwib3duZXJcIiwgdHdvIHNlcGFyYXRlIGluc3RhbmNlcyBvZiBlYWNoIENTUyBydWxlIHdpbGwgYmVcclxuICogY3JlYXRlZCB3aXRoIGRpZmZlcmVudCB1bmlxdWUgbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGVtYmVkPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHQvLyByZXR1cm4gZGVmaW5pdGlvbiBpbnN0YW5jZSB3aXRob3V0IHByb2Nlc3NpbmcgaXQuIFRoaXMgaXMgdGhlIGluZGljYXRpb24gdGhhdCB0aGUgZGVmaW50aW9uXHJcblx0Ly8gd2lsbCBiZSBlbWJlZGRlZCBpbnRvIGFub3RoZXIgZGVmaW5pdGlvbi5cclxuXHRyZXR1cm4gaW5zdE9yQ2xhc3MgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24gPyBpbnN0T3JDbGFzcyA6IG5ldyBpbnN0T3JDbGFzcygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRyZXR1cm4gc19lbmFibGVTaG9ydE5hbWVzKCBlbmFibGUsIHByZWZpeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyB0aGUgbmFtZXMgb2YgdGhlIGdpdmVuIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gYVxyXG4gKiBgY2xhc3NgIHByb3BlcnR5IG9mIGFuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGNsYXNzZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKCAuLi5jbGFzc2VzOiAoSUNsYXNzUnVsZSB8IEV4dGVuZGVkPHN0cmluZz4pW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWwyc3RyKCBjbGFzc2VzLCB7XHJcblx0XHRhcnJJdGVtRnVuYzogdiA9PiB2IGluc3RhbmNlb2YgQ2xhc3NSdWxlID8gdi5uYW1lIDogdmFsMnN0cih2KVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW50ZXJmYWNlIGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBvYmplY3RzXHJcbiAqIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzU2VyaWFsaXplclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgYWRkKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgY29uY2F0ZW5hdGVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhbGwgQ1NTIHJ1bGVzIGFkZGVkIHRvIHRoZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBzZXJpYWxpemUoKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IElDc3NTZXJpYWxpemVyIG9iamVjdCB0aGF0IGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzXHJcbiAqIGFuZCBpbnN0YW5jZXMgYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzdHJpbmcuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuXHJcbiAqIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZSBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDc3NTZXJpYWxpemVyKCk6IElDc3NTZXJpYWxpemVyXHJcbntcclxuICAgIHJldHVybiBuZXcgQ3NzU2VyaWFsaXplcigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXJpYWxpemVzIG9uZSBvciBtb3JlIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgaW5zdGFuY2VzIGFuZCByZXR1cm5zIHRoZWlyIENTUyBzdHJpbmdcclxuICogcmVwcmVzZW50YXRpb24uIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZVxyXG4gKiBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVUb0NTUyggYXJnMTogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG4gICAgLi4uYXJnczogKFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcylbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2VyaWFsaXplciA9IG5ldyBDc3NTZXJpYWxpemVyKCk7XHJcbiAgICBzZXJpYWxpemVyLmFkZCggYXJnMSk7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxyXG4gICAgICAgIGFyZ3MuZm9yRWFjaCggaW5zdE9yQ2xhc3MgPT4gc2VyaWFsaXplci5hZGQoIGluc3RPckNsYXNzKSk7XHJcblxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZXIuc2VyaWFsaXplKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNlcmlhbGl6ZXIgY2xhc3MgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIG9iamVjdHNcclxuICogYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5jbGFzcyBDc3NTZXJpYWxpemVyIGltcGxlbWVudHMgSUNzc1NlcmlhbGl6ZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoIGluc3RPckNsYXNzOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3MpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UgfHwgdGhpcy5pbnN0YW5jZXMuaGFzKGluc3RhbmNlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5hZGQoIGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgY29uY2F0ZW5hdGVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhbGwgQ1NTIHJ1bGVzIGFkZGVkIHRvIHRoZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBjdHggPSBuZXcgUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCggaW5zdGFuY2UgPT4gY3R4LmFkZFN0eWxlRGVmaW5pdGlvbiggaW5zdGFuY2UpKTtcclxuICAgICAgICByZXR1cm4gY3R4LnRvcExldmVsQnVmICsgY3R4Lm5vblRvcExldmVsQnVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBvZiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlcy4gVGhpcyBpcyBuZWVkZWQgdG8gbm90IGFkZCBzdHlsZSBkZWZpbml0aW9ucyBtb3JlIHRoYW4gb25jZVxyXG4gICAgaW5zdGFuY2VzID0gbmV3IFNldDxTdHlsZURlZmluaXRpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNlcmlhbGl6ZXIgY2xhc3MgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIG9iamVjdHNcclxuICogYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5jbGFzcyBSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW1wbGVtZW50cyBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0XHJcbntcclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBwdWJsaWMgYWRkUnVsZVRleHQoIHM6IHN0cmluZywgaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpc1RvcExldmVsUnVsZSlcclxuICAgICAgICAgICAgdGhpcy50b3BMZXZlbEJ1ZiArPSBzICsgXCJcXG5cIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9uVG9wTGV2ZWxCdWYgKz0gcyArIFwiXFxuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIHB1YmxpYyBhZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlcy5oYXMoIGluc3RhbmNlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLmFkZCggaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBzZXJpYWxpemVJbnN0YW5jZSggaW5zdGFuY2UsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdHJpbmcgYnVmZmVyIHRoYXQgYWNjdW11bGF0ZXMgdG9wLWxldmVsIHJ1bGUgdGV4dHMuXHJcbiAgICBwdWJsaWMgdG9wTGV2ZWxCdWYgPSBcIlwiO1xyXG5cclxuICAgIC8vIFN0cmluZyBidWZmZXIgdGhhdCBhY2N1bXVsYXRlcyBub24tdG9wLWxldmVsIHJ1bGUgdGV4dHMuXHJcbiAgICBwdWJsaWMgbm9uVG9wTGV2ZWxCdWYgPSBcIlwiO1xyXG5cclxuICAgIC8vIFNldCBvZiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlcyB0aGF0IHdlcmUgYWxyZWFkeSBzZXJpYWxpemVkIGluIHRoaXMgY29udGV4dC5cclxuICAgIHByaXZhdGUgaW5zdGFuY2VzID0gbmV3IFNldDxTdHlsZURlZmluaXRpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzcywgSVNjaGVkdWxlcn0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge3Byb2Nlc3NJbnN0YW5jZU9yQ2xhc3N9IGZyb20gXCIuLi9ydWxlcy9SdWxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzX3NjaGVkdWxlQ2FsbCwgc19zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSwgc19nZXREZWZhdWx0U2NoZWR1bGVyVHlwZSxcclxuICAgIElBY3RpdmF0b3IsIHNfcmVnaXN0ZXJTY2hlZHVsZXIsIHNfdW5yZWdpc3RlclNjaGVkdWxlclxyXG59IGZyb20gXCIuLi9ydWxlcy9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWZcclxuICogdGhlIGlucHV0IG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2UgYnV0IGEgY2xhc3MsIHdoaWNoIGlzIG5vdCB5ZXQgYXNzb2NpYXRlZCB3aXRoIGFuIGluc3RhbmNlLFxyXG4gKiB0aGUgaW5zdGFuY2UgaXMgZmlyc3QgY3JlYXRlZCBhbmQgcHJvY2Vzc2VkLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG1haW50YWluc1xyXG4gKiBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkXHJcbiAqIGludG8gRE9NIG9ubHkgdXBvbiBmaXJzdCBhY3RpdmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPixcclxuXHRzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogVCB8IG51bGxcclxue1xyXG5cdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RhbmNlT3JDbGFzcykgYXMgVDtcclxuXHRpZiAoaW5zdGFuY2UpXHJcblx0XHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmFjdGl2YXRlKCBpbnN0YW5jZSksIHNjaGVkdWxlclR5cGUpO1xyXG5cclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlYWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIGJ5IHJlbW92aW5nIGl0cyBydWxlcyBmcm9tIERPTS4gTm90ZSB0aGF0IGVhY2hcclxuICogc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmRlYWN0aXZhdGUoIGluc3RhbmNlKSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyB0byBET00gYWxsIHN0eWxlIGNoYW5nZXMgY2F1c2VkIGJ5IHRoZSBjYWxscyB0byB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zXHJcbiAqIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0IGFjdGl2YXRpb24gb2YgdGhlIGdpdmVuIHNjaGVkdWxpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JjZURPTVVwZGF0ZSggc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuZm9yY2VET01VcGRhdGUoKSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYWxsIHNjaGVkdWxlZCBhY3RpdmF0aW9ucyBjYXVzZWQgYnkgdGhlIGNhbGxzIHRvIHRoZSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnNcclxuICogYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3QgYWN0aXZhdGlvbiBvZiB0aGUgZ2l2ZW4gc2NoZWR1bGluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbERPTVVwZGF0ZSggc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuY2FuY2VsRE9NVXBkYXRlKCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBkZWZhdWx0IHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxlciB0eXBlIHBhcmFtZXRlci4gUmV0dXJucyB0aGUgdHlwZSBvZlxyXG4gKiB0aGUgcHJldmlvdXMgZGVmYXVsdCBzY2hlZHVsZXIgb3IgMCBpZiBhbiBlcnJvciBvY2N1cnMgKGUuZy4gdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIElEIGlzIG5vdFxyXG4gKiByZWdpc3RlcmVkKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZTogbnVtYmVyKTogbnVtYmVyXHJcbntcclxuXHRyZXR1cm4gc19zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIGJ5IGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyB0aGF0IGFyZVxyXG4gKiBjYWxsZWQgd2l0aG91dCBleHBsaWNpdGx5IHByb3ZpZGluZyB2YWx1ZSB0byB0aGUgc2NoZWR1bGVyIHR5cGUgcGFyYW1ldGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzY2hlZHVsZXIgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLCB3aGljaFxyXG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXI6IElTY2hlZHVsZXIpOiBudW1iZXJcclxue1xyXG4gICAgcmV0dXJuIHNfcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFVucmVnaXN0ZXJzIGEgc2NoZWR1bGVyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJTY2hlZHVsZXIoIGlkOiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHJldHVybiBzX3VucmVnaXN0ZXJTY2hlZHVsZXIoIGlkKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgQ3NzTGVuZ3RoLCBDc3NQZXJjZW50LCBDc3NBbmdsZSwgQ3NzTnVtYmVyLCBPbmVPckJveCwgQ3NzUG9pbnR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtTZWxlY3Rvckl0ZW0sIElTZWxlY3RvclByb3h5fSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuXHRTdHlsZXNldCwgRXh0ZW5kZWRTdHlsZXNldCwgU3RyaW5nU3R5bGVzZXQsIEV4dGVudEtleXdvcmQsIElGaWx0ZXJQcm94eSwgSUJhc2ljU2hhcGVQcm94eSxcclxuXHRJVHJhbnNmb3JtUHJveHksIEJvcmRlclJhZGl1c19TdHlsZVR5cGUsIEZpbGxSdWxlX1N0eWxlVHlwZSwgSVBhdGhCdWlsZGVyLCBJUmF5UHJveHksXHJcblx0SUZpdENvbnRlbnRQcm94eSwgSVJlcGVhdFByb3h5LCBJTWluTWF4UHJveHksIEdyaWRUcmFja1NpemUsIEdyaWRUcmFjaywgSVNwYW5Qcm94eSwgR3JpZExpbmVDb3VudE9yTmFtZVxyXG59IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7XHJcblx0c3R5bGVQcm9wVG9TdHJpbmcsIHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LCBib3JkZXJSYWRpdXNUb1N0cmluZywgZm9yQWxsUHJvcHNJblN0eWxzZXQsIGdyaWRUcmFja1RvU3RyaW5nXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aCwgYXJyMnN0ciwgQ3NzQW5nbGVNYXRoLCBDc3NOdW1iZXJNYXRoLCBwb3Myc3RyLFxyXG5cdHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcsIHZhbDJzdHJcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQge3Nfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlfSBmcm9tIFwiLi4vcnVsZXMvU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLiBUaGlzIGZ1bmN0aW9uIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0IGJlXHJcbiAqIGludm9rZWQgd2l0aCB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3IoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBTZWxlY3Rvckl0ZW1bXSk6IElTZWxlY3RvclByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3R5bGVzZXQgbWFuaXB1bGF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIGEgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcE5hbWUgU3R5bGUgcHJvcGVydHkgbmFtZSB0aGF0IGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkXHJcbiAqIHRvIGEgQ1NTIGNvbXBsaWFudCBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BWYWx1ZSBWYWx1ZSB0byBjb252ZXJ0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcFZhbHVlPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0Piggc3R5bGVQcm9wTmFtZTogSyxcclxuXHRzdHlsZVByb3BWYWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHN0eWxlUHJvcFRvU3RyaW5nKCBzdHlsZVByb3BOYW1lLCBzdHlsZVByb3BWYWx1ZSwgdHJ1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdmFsdWVzIG9mIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGZyb20gdGhlIGdpdmVuIFN0eWxlc2V0IG9iamVjdCB0byB0aGUgYHN0eWxlYCBhdHRyaWJ1dGVcclxuICogb2YgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSBIVE1MIGVsZW1lbnQgd2hvc2Ugc3R5bGVzIHdpbGwgYmUgc2V0LlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgU3R5bGVzZXQgb2JqZWN0IHdoaWNoIHByb3ZpZGVzIHZhbHVlcyBmb3Igc3R5bGUgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbGVtZW50U3R5bGUoIGVsbTogSFRNTEVsZW1lbnQsIHN0eWxlc2V0OiBTdHlsZXNldCB8IG51bGwgfCB1bmRlZmluZWQsXHJcblx0c2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG4gICAgc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG0sIHN0eWxlc2V0ID8gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KHN0eWxlc2V0KSA6IG51bGwsIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHJpbmdTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0cmluZ1N0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3RyaW5nU3R5bGVzZXQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG5cdHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCBlbG0sIG51bGwsIHN0eWxlc2V0LCBmYWxzZSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBbW1N0eWxlc2V0XV0gb2JqZWN0IGludG8gYW4gb2JqZWN0LCB3aGVyZSBlYWNoIFN0eWxlc2V0J3MgcHJvcGVydHkgaXNcclxuICogY29udmVydGVkIHRvIGl0cyBzdHJpbmcgdmFsdWUuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIHN0eWxlc2V0OiBTdHlsZXNldCk6IFN0cmluZ1N0eWxlc2V0XHJcbntcclxuXHRsZXQgcmVzOiBTdHJpbmdTdHlsZXNldCA9IHt9O1xyXG5cclxuXHRmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQsXHJcblx0XHQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7IHJlc1tuYW1lXSA9IHZhbHVlIH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyB0d28gU3R5bGVzZXQgb2JqZWN0cyBieSBjb252ZXJ0aW5nIHN0eWxlIHByb3BlcnRpZXMgdG8gc3RyaW5ncyBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuICogdGhhdCBjb250YWlucyBzdHJpbmcgdmFsdWVzIG9mIHByb3BlcnRpZXMgdGhhdCB3ZXJlIG5ldyBvciBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG5ld1xyXG4gKiBzdHlsZXNldCBhbmQgdW5kZWZpbmVkIHZhbHVlcyBmb3IgcHJvcGVydGllcyB0aGF0IGV4aXN0IGluIHRoZSBvbGQgc3R5bGVzZXQgYnV0IGRvbid0IGV4aXN0XHJcbiAqIGluIHRoZSBuZXcgb25lLlxyXG4gKiBAcGFyYW0gb2xkU3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBuZXdTdHlsZXNldCBcclxuICogQHJldHVybnMgU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IGhhdmUgZGlmZmVyZW50IHZhbHVlcyBpbiB0aGUgb2xkIGFuZCBuZXdcclxuICogc3R5bGVzZXRzLiBQcm9wZXJ0aWVzIHRoYXQgZXhpc3RlZCBpbiB0aGUgb2xkIGJ1dCBkb24ndCBleGlzdCBpbiB0aGUgbmV3IHN0eWxlc2V0LCB3aWxsIGhhdmVcclxuICogdGhlaXIgdmFsdWVzIHNldCB0byB1bmRlZmluZWQuIElmIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIHR3byBzdHlsZXNldHMgbnVsbCBpc1xyXG4gKiByZXR1cm5lZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmU3R5bGVzZXRzKCBvbGRTdHlsZXNldDogU3R5bGVzZXQsIG5ld1N0eWxlc2V0OiBTdHlsZXNldCk6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbFxyXG57XHJcblx0aWYgKCFvbGRTdHlsZXNldCAmJiAhbmV3U3R5bGVzZXQpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghb2xkU3R5bGVzZXQpXHJcblx0XHRyZXR1cm4gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBuZXdTdHlsZXNldCk7XHJcblx0ZWxzZSBpZiAoIW5ld1N0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggb2xkU3R5bGVzZXQpO1xyXG5cclxuXHQvLyBmaXJzdCBjb252ZXJ0IGJvdGggc3R5bGVzZXRzIHRvIHRoZWlyIHN0cmluZyB2ZXJzaW9uc1xyXG5cdGxldCBvbGRTdHJpbmdTdHlsZXNldCA9XHRzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG9sZFN0eWxlc2V0KTtcclxuXHRsZXQgbmV3U3RyaW5nU3R5bGVzZXQgPVx0c3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBuZXdTdHlsZXNldCk7XHJcblxyXG5cdGxldCB1cGRhdGVWYWw6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBvbGQgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgbmV3IG9uZS4gVGhlc2VcclxuXHQvLyB3aWxsIGJlIHJlbW92ZWQuXHJcblx0Zm9yKCBsZXQga2V5IGluIG9sZFN0cmluZ1N0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGxldCBuZXdTdHJpbmdWYWwgPSBuZXdTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0aWYgKG5ld1N0cmluZ1ZhbCA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb2xkU3RyaW5nVmFsID0gb2xkU3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdFx0aWYgKG9sZFN0cmluZ1ZhbCAhPT0gbmV3U3RyaW5nVmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gbmV3U3RyaW5nU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFN0cmluZ1ZhbCA9IG9sZFN0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRpZiAob2xkU3RyaW5nVmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVwZGF0ZVZhbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGaWx0ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydGluZyBwZXJjZW50IHZhbHVlIHRvIGludm9jYXRpb24gb2YgdGhlIGdpdmVuIENTUyBmdW5jdGlvbi5cclxuZnVuY3Rpb24gcGVyY2VudEZpbHRlciggbmFtZTogc3RyaW5nLCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGFtb3VudCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJyaWdodG5lc3MoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJyaWdodG5lc3MoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiYnJpZ2h0bmVzc1wiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjb250cmFzdCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udHJhc3QoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiY29udHJhc3RcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZ3JheXNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmF5c2NhbGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiZ3JheXNjYWxlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGludmVydCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImludmVydFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBvcGFjaXR5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcIm9wYWNpdHlcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2F0dXJhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdHVyYXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcInNhdHVyYXRlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNlcGlhKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXBpYSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzZXBpYVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBibHVyKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBibHVyKCByYWRpdXM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBibHVyKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCByYWRpdXMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBkcm9wU2hhZG93KClgIENTUyBmdW5jdGlvbi5cclxuICogQHBhcmFtIHggSG9yaXpvbnRhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIHkgVmVydGljYWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gYmx1ciBWYWx1ZSBvZiB0aGUgc2hhZG93J3MgYmx1cnJpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEgcGl4ZWwuXHJcbiAqIEBwYXJhbSBzcHJlYWQgVmFsdWUgb2YgdGhlIHNoYWRvdydzIHNwcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGluc2V0IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzaGFkb3cgZ29lcyBpbnNpZGUgdGhlIHNoYXBlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wU2hhZG93KFxyXG4gICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIGJsdXI/OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgc3ByZWFkPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElGaWx0ZXJQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGBkcm9wLXNoYWRvdygke3NpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0KCB7IHgsIHksIGNvbG9yLCBibHVyLCBzcHJlYWR9KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaHVlLXJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHVlUm90YXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGh1ZS1yb3RhdGUoJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHNoYXBlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnNldCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXQoIG9mZnNldDogRXh0ZW5kZWQ8T25lT3JCb3g8Q3NzTGVuZ3RoPj4sIHJhZGl1cz86IEV4dGVuZGVkPEJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcblx0bGV0IHIgPSByYWRpdXMgIT0gbnVsbCA/IFwicm91bmQgXCIgKyBib3JkZXJSYWRpdXNUb1N0cmluZyggcmFkaXVzKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGluc2V0KCR7Q3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIG9mZnNldCwgXCIgXCIpfSR7cn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGlzIHVzZWQgdG8gc3BlY2lmeSBhIHJhZGl1cyBpbiBbW2NpcmNsZV1dIGFuZCBbW2VsbGlwc2VdXSBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaGFwZVJhZGl1cyA9IEV4dGVuZGVkPENzc0xlbmd0aCB8IFwiY2xvc2VzdC1zaWRlXCIgfCBcImZhcnRoZXN0LXNpZGVcIj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY2lyY2xlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGUoIGNlbnRlcj86IFNoYXBlUmFkaXVzLCBwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IGMgPSAgY2VudGVyICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoY2VudGVyKSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvczJzdHIoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGNpcmNsZSgke2N9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBlbGxpcHNlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHNlKCByeD86IFNoYXBlUmFkaXVzLCByeT86IFNoYXBlUmFkaXVzLFxyXG5cdHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgcnhzID0gIHJ4ICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocngpIDogXCJcIjtcclxuICAgIGxldCByeXMgPSAgcnkgIT0gbnVsbCA/IFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ5KSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvczJzdHIoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGVsbGlwc2UoJHtyeHN9JHtyeXN9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwb2x5Z29uKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKCBwb2ludE9yUnVsZTogQ3NzUG9pbnQgfCBGaWxsUnVsZV9TdHlsZVR5cGUsXHJcblx0Li4ucG9pbnRzOiBDc3NQb2ludFtdKTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcInBvbHlnb24oXCI7XHJcblx0XHRpZiAodHlwZW9mIHBvaW50T3JSdWxlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRzICs9IHBvaW50T3JSdWxlICsgXCIsXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHMgKz0gYCR7Q3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHBvaW50T3JSdWxlLCBcIiBcIil9LGA7XHJcblxyXG5cdFx0cyArPSBwb2ludHMubWFwKCBwdCA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggcHQsIFwiIFwiKSkuam9pbihcIixcIik7XHJcblxyXG5cdFx0cmV0dXJuIHMgKyBcIilcIjtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElSYXlQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByYXkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJheSggYW5nbGU6IEV4dGVuZGVkPENzc0FuZ2xlPiwgc2l6ZT86IEV4dGVuZGVkPEV4dGVudEtleXdvcmQgfCBDc3NMZW5ndGg+LFxyXG5cdGNvbnRhaW4/OiBib29sZWFuKTogSVJheVByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgYW5nbGVTdHJpbmcgPSBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpO1xyXG5cdFx0bGV0IHNpemVTdHJpbmcgPSBzaXplID0hIG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggc2l6ZSkgOiBcIlwiO1xyXG5cdFx0bGV0IGNvbnRhaW5TdHJpbmcgPSBjb250YWluID8gXCIsY29udGFpblwiIDogXCJcIjtcclxuXHRcdHJldHVybiBgcmF5KCR7YW5nbGVTdHJpbmd9JHtzaXplU3RyaW5nfSR7Y29udGFpblN0cmluZ30pYDtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElQYXRoQnVpbGRlciBpbnRlcmZhY2UgdGhhdCBhbGxvd3MgYnVpbGRpbmcgYSBDU1MgcGF0aC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoKCBmaWxsUnVsZT86IEZpbGxSdWxlX1N0eWxlVHlwZSk6IElQYXRoQnVpbGRlclxyXG57XHJcblx0cmV0dXJuIG5ldyBQYXRoQnVpbGRlciggZmlsbFJ1bGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhdGhCdWlsZGVyIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvYmplY3QgdGhhdCBhY2N1bXVsYXRlcyBwYXRoIGNvbW1hbmRzIHRoYXQgYXJlIHRoZW5cclxuICogY29udmVydGVkIHRvIGEgc3RyaW5nIHBhcmFtZXRlciBvZiB0aGUgQ1NTIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgUGF0aEJ1aWxkZXIgaW1wbGVtZW50cyBJUGF0aEJ1aWxkZXJcclxue1xyXG5cdHByaXZhdGUgYnVmOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5idWYgPSBcInBhdGgoXCI7XHJcblx0XHRpZiAoZmlsbFJ1bGUpXHJcblx0XHRcdHRoaXMuYnVmICs9IGZpbGxSdWxlICsgXCIsXCI7XHJcblxyXG5cdFx0dGhpcy5idWYgKz0gXCInXCI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCBzdHJpbmdcclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpIDogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYnVmICsgXCInKVwiOyB9XHJcblxyXG5cclxuXHRcclxuICAgIC8vIE1vdmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdHByaXZhdGUgaXRlbXMoIGNvbW1hbmQ6IHN0cmluZywgLi4uaXRlbXM6IChudW1iZXIgfCBudW1iZXJbXSlbXSk6IElQYXRoQnVpbGRlclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmICs9IFwiIFwiICsgY29tbWFuZDtcclxuXHJcblx0XHRmb3IoIGxldCBpdGVtIG9mIGl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodHlwZW9mIGl0ZW0gPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBpdGVtO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBzdWJJdGVtIG9mIGl0ZW0pXHJcblx0XHRcdFx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIHN1Ykl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBNKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJNXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIG0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIm1cIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBMKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJMXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImxcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBIKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJIXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImhcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBWKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJWXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIHYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInZcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBDKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJDXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBjKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJjXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgUyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJTXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBzKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInNcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBRKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIHEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwicVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlRcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgdCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwidFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIEEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiQVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgYSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJhXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgeigpIHsgdGhpcy5idWYgKz0gXCIgelwiOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRyYW5zZm9ybXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeCggYTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRkOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHk6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnIyc3RyKCBbYSwgYiwgYywgZCwgdHgsIHR5XSwgdW5kZWZpbmVkLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeDNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgzZChcclxuXHRcdGExOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzE6IEV4dGVuZGVkPENzc051bWJlcj4sIGQxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTI6IEV4dGVuZGVkPENzc051bWJlcj4sIGIyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDI6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjM6IEV4dGVuZGVkPENzc051bWJlcj4sIGMzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGE0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGQ0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdCk6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycjJzdHIoIFthMSwgYjEsIGMxLCBkMSwgYTIsIGIyLCBjMiwgZDIsIGEzLCBiMywgYzMsIGQzLCBhNCwgYjQsIGM0LCBkNF0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwZXJzcGVjdGl2ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUoIGQ6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBwZXJzcGVjdGl2ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhkKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBDU1Mgcm90YXRpb24gZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByb3RhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVYXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWVwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWiggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVpcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUzZChcclxuXHR4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB5OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB6OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeiksIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgcm90YXRlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoIGN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeT86IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZSgke0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhjeCl9JHtzeSAhPSBudWxsID8gXCIsXCIgKyBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3kpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBzY2FsZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVYKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVYXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWSggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWVwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVooIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVpcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlM2QoIHN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRzejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSxcclxuXHRcdENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tldygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tldyggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPiwgYXk/OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSR7YXkgIT0gbnVsbCA/IFwiLFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1goKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdYKCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tld1goJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WSggYXk6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeT86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCl9JHt5ICE9IG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gdHJhbnNsYXRlIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVgoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWFwiLCB4KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWSggeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVZXCIsIHkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVaKCB6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVpcIiwgeik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUzZCggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuXHR6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCksIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSxcclxuXHRcdENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh6KV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBHcmlkIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpdENvbnRlbnRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBmaXQtY29udGVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZml0Q29udGVudCggc2l6ZTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElGaXRDb250ZW50UHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBmaXQtY29udGVudCgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhzaXplKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJTWluTWF4UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWlubWF4KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW5tYXgoIG1pbjogR3JpZFRyYWNrU2l6ZSwgbWF4OiBHcmlkVHJhY2tTaXplKTogSU1pbk1heFByb3h5XHJcbntcclxuICAgIGxldCBvcHRpb25zID0geyBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jIH07XHJcbiAgICByZXR1cm4gKCkgPT4gYG1pbm1heCgke3ZhbDJzdHIoIG1pbiwgb3B0aW9ucyl9LCR7dmFsMnN0ciggbWF4LCBvcHRpb25zKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUmVwZWF0UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmVwZWF0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoIGNvdW50OiBFeHRlbmRlZDxDc3NOdW1iZXI+IHwgXCJhdXRvLWZpbGxcIiB8IFwiYXV0by1maXRcIixcclxuICAgIC4uLnRyYWNrczogR3JpZFRyYWNrW10pOiBJUmVwZWF0UHJveHlcclxue1xyXG4gICAgLy8gcmV0dXJuICgpID0+IGByZXBlYXQoJHt2YWwyc3RyKGNvdW50KX0sJHtzdHlsZVByb3BUb1N0cmluZyggXCJncmlkVGVtcGxhdGVSb3dzXCIsIHRyYWNrcywgdHJ1ZSl9KWA7XHJcbiAgICByZXR1cm4gKCkgPT4gYHJlcGVhdCgke3ZhbDJzdHIoY291bnQpfSwke3ZhbDJzdHIoIHRyYWNrcywgeyBhcnJJdGVtRnVuYzogZ3JpZFRyYWNrVG9TdHJpbmcgfSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVNwYW5Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIHNwYW4gZXhwcmVzc2lvbiBmb3IgZ3JpZCBsYXlvdXRzLiBJZiB0aGUgZmlyc3RcclxuICogcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCB0aGUgc2Vjb25kIHBhcmFtZXRlciAoaWYgZGVmaW5lZCkgbXVzdCBiZSBhIG5hbWU7IGlmIHRoZSBmaXJzdCBwYXJhbWV0ZXJcclxuICogaXMgYSBuYW1lLCB0aGUgc2Vjb25kIHBhcmFtZXRlciAoaWYgZGVmaW5lZCkgbXVzdCBiZSBhIG51bWJlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGFuKCBjb3VudE9yTmFtZTogRXh0ZW5kZWQ8R3JpZExpbmVDb3VudE9yTmFtZT4sXHJcbiAgICBuYW1lT3JDb3VudD86IEV4dGVuZGVkPEdyaWRMaW5lQ291bnRPck5hbWU+KTogSVNwYW5Qcm94eVxyXG57XHJcbiAgICBsZXQgZmlyc3RFbG0gPSB2YWwyc3RyKGNvdW50T3JOYW1lKTtcclxuICAgIGxldCBzZWNvbmRFbG0gPSBuYW1lT3JDb3VudCA/IHZhbDJzdHIoIG5hbWVPckNvdW50KSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYHNwYW4gJHtmaXJzdEVsbX0gJHtzZWNvbmRFbG19YDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG5cdElDc3NOdW1iZXJNYXRoLCBJQ3NzTGVuZ3RoTWF0aCwgSUNzc0FuZ2xlTWF0aCwgSUNzc1RpbWVNYXRoLCBJQ3NzUmVzb2x1dGlvbk1hdGgsXHJcbiAgICBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBFeHRlbmRlZCwgSVN0cmluZ1Byb3h5LCBJVXJsUHJveHksXHJcbiAgICBBdHRyVHlwZUtleXdvcmQsIEF0dHJVbml0S2V5d29yZCwgSUxlbmd0aFByb3h5LCBJUGVyY2VudFByb3h5LCBJQW5nbGVQcm94eSxcclxuICAgIElUaW1lUHJveHksIElSZXNvbHV0aW9uUHJveHksIElGcmVxdWVuY3lQcm94eSwgSVF1b3RlZFByb3h5XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge1xyXG5cdENzc051bWJlck1hdGgsIENzc0xlbmd0aE1hdGgsIENzc0FuZ2xlTWF0aCwgQ3NzVGltZU1hdGgsIENzc1Jlc29sdXRpb25NYXRoLFxyXG5cdENzc0ZyZXF1ZW5jeU1hdGgsIENzc1BlcmNlbnRNYXRoLCB2YWwyc3RyLCB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0lWYXJSdWxlLCBJQ291bnRlclJ1bGUsIElJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZSwgTGlzdFN0eWxlVHlwZV9TdHlsZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW0gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxudW1iZXI+YFxyXG4gKiBDU1MgdHlwZS4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleSBhcmVcclxuICogY29udmVydGVkIHRvIHN0cmluZ3Mgd2l0aG91dCBhcHBlbmRpbmcgYW55IHVuaXRzIHRvIHRoZW0uXHJcbiAqL1xyXG5leHBvcnQgbGV0IE51bTogSUNzc051bWJlck1hdGggPSBuZXcgQ3NzTnVtYmVyTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBlcmNlbnQgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50YWdlPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgXCIlXCIgdW5pdCBzdWZmaXguXHJcbiAqL1xyXG5leHBvcnQgbGV0IFBlcmNlbnQ6IElDc3NQZXJjZW50TWF0aCA9IG5ldyBDc3NQZXJjZW50TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBwZXJjZW50IHZhbHVlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50KCBuOiBudW1iZXIpOiBJUGVyY2VudFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIiVcIjsgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIExlbiBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPGxlbmd0aD5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGxlbmd0aCB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcInB4XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZW1cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgTGVuOiBJQ3NzTGVuZ3RoTWF0aCA9IG5ldyBDc3NMZW5ndGhNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBxdWFydGVycyBvZiBhbiBpbmNoICovXHJcbmV4cG9ydCBmdW5jdGlvbiBRKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiUVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2ggdW5pdHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiY2hcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNhbnRpbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImNtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYWxjdWxhdGVkIGZvbnQtc2l6ZXMgb2YgdGhlIGVsZW1lbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVtKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZW1cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGhlaWdodHMgb2YgbG93ZXJjYXNlIGxldHRlciAneCcgaW4gdGhlIGZvbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZXhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGljIHVuaXRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpYyggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImljXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpbmNoZXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluY2goIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJpblwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSBlbGVtZW50ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImxoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBtaWxsaW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW0oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJtbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcGljYXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBjKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicGNcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBvaW50cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHQoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJwdFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcGl4ZWxzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBweCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInB4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAqIG9mIHRoZSByb290IGVsZW1lbnTigJlzIGJsb2NrIGF4aXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZiKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidmJcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAqIG9mIHRoZSByb290IGVsZW1lbnTigJlzIGlubGluZSBheGlzICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZpXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgd2lkdGggb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2dyggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZ3XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBmb250c2l6ZXMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicmVtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmxoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicmxoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgc21hbGxlciB2YWx1ZSBiZXR3ZWVuIHZ3IGFuZCB2aCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdm1heCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZtYXhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBsYXJnZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZtaW4oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2bWluXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBmb3IgZmxleCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZnIoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJmclwiOyB9XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmdsZSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPGFuZ2xlPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGFuIGFuZ2xlIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZGVnXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwidHVyblwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBBbmdsZTogSUNzc0FuZ2xlTWF0aCA9IG5ldyBDc3NBbmdsZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZGVncmVlcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVnKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkZWdcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gcmFkaWFucyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFkKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJyYWRcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZ3JhZGlhbnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyYWQoIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImdyYWRcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gdHVybnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHR1cm4oIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInR1cm5cIjsgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRpbWUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDx0aW1lPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgdGltZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIm1zXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwic1wiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBUaW1lOiBJQ3NzVGltZU1hdGggPSBuZXcgQ3NzVGltZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1zKCBuOiBudW1iZXIpOiBJVGltZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIm1zXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gc2Vjb25kcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcyggbjogbnVtYmVyKTogSVRpbWVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJzXCI7IH1cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJlc29sdXRpb24gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgcmVzb2x1dGlvbiB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRwaVwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImRwY21cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgUmVzb2x1dGlvbjogSUNzc1Jlc29sdXRpb25NYXRoID0gbmV3IENzc1Jlc29sdXRpb25NYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBJICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcGkoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBpXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBDTSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHBjbSggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkcGNtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBQWCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHBweCggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkcHB4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gWCAqL1xyXG5leHBvcnQgZnVuY3Rpb24geCggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ4XCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGcmVxdWVuY3kgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBmcmVxdWVuY3kgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJIelwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImtIelwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBGcmVxdWVuY3k6IElDc3NGcmVxdWVuY3lNYXRoID0gbmV3IENzc0ZyZXF1ZW5jeU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEhlcnR6ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoeiggbjogbnVtYmVyKTogSUZyZXF1ZW5jeVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImh6XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBLaWxvLUhlcnR6ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBraHooIG46IG51bWJlcik6IElGcmVxdWVuY3lQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJraHpcIjsgfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyB1dGlsaXR5IGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBlbmNhcHN1bGF0aW5nIHRoZSBnaXZlbiBzdHJpbmctbGlrZSBwYXJhbWV0ZXIuIFRoaXMgZnVuY3Rpb25cclxuICogYWxsb3dzIHNwZWNpZnlpbmcgYXJiaXRyYXJ5IHRleHQgZm9yIHByb3BlcnRpZXMgd2hvc2UgdHlwZSBub3JtYWxseSBkb2Vzbid0IGFsbG93IHN0cmluZ3MuXHJcbiAqIFRoaXMgaXMgdXNlZCBhcyBhbiBcImVzY2FwZSBoYXRjaFwiIHdoZW4gYSBzdHJpbmcgdmFsdWUgYWxyZWFkeSBleGlzdHMgYW5kIHRoZXJlIGlzIG5vIHNlbnNlXHJcbiAqIHRvIGNvbnZlcnQgaXQgdG8gYSBwcm9wZXIgdHlwZS4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZSBpbnZva2VkIHdpdGhcclxuICogdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhdyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IGFueVtdKTogSVN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0cywgcGFyYW1zKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgaW52b2NhdGlvbiBvZiB0aGUgYHZhcigpYCBDU1MgZnVuY3Rpb24gZm9yXHJcbiAqIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IHdpdGggb3B0aW9uYWwgZmFsbGJhY2tzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgZmFsbGJhY2s/OiBWYXJWYWx1ZVR5cGU8Sz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGZhbGxiYWNrXHJcbiAgICAgICAgPyBgdmFyKC0tJHt2YXJPYmoubmFtZX0sJHtzdHlsZVByb3BUb1N0cmluZyggdmFyT2JqLnRlbXBsYXRlLCBmYWxsYmFjaywgdHJ1ZSl9KWBcclxuICAgICAgICA6IGB2YXIoLS0ke3Zhck9iai5uYW1lfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYHVybCgpYCBmdW5jdGlvbi4gVGhlIHN0cmluZyBwYXJhbWV0ZXJcclxuICogd2lsbCBiZSB3cmFwcGVkIGluIGEgXCJ1cmwoKVwiIGludm9jYXRpb24uIFRoZSBmdW5jdGlvbiBjYW4gYWxzbyBhY2NlcHQgdGhlIElJRFJ1bGUgb2JqZWN0IHRvXHJcbiAqIGNyZWF0ZSB1cmwoI2VsZW1lbnQpIGludm9jYXRpb24sIHdoaWNoIGlzIG9mdGVuIHVzZWQgdG8gYWRkcmVzcyBTVkcgZWxlbWVudHMgYnkgdGhlaXIgSURzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVybCggdmFsOiBFeHRlbmRlZDxzdHJpbmcgfCBJSURSdWxlPik6IElVcmxQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGB1cmwoJHt2YWwyc3RyKHZhbCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBhdHRyKClgIENTUyBmdW5jdGlvbi4gSXQgcmV0dXJucyBJU3RyaW5nUHJveHlcclxuICogYW5kIHRoZW9yZXRpY2FsbHkgY2FuIGJlIHVzZWQgaW4gYW55IHN0eWxlIHByb3BlcnR5OyBob3dldmVyLCBpdHMgdXNlIGJ5IGJyb3dzZXJzIGlzIGN1cnJlbnRseVxyXG4gKiBsaW1pdGVkIHRvIHRoZSBgY29udGVudGAgcHJvcGVydHkuIEFsc28gbm8gYnJvd3NlciBjdXJyZW50bHkgc3VwcG9ydCB0eXBlLCB1bml0cyBvciBmYWxsYmFja1xyXG4gKiB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXR0ciggYXR0ck5hbWU6IEV4dGVuZGVkPHN0cmluZz4sIHR5cGVPclVuaXQ/OiBFeHRlbmRlZDxBdHRyVHlwZUtleXdvcmQgfCBBdHRyVW5pdEtleXdvcmQ+LFxyXG5cdGZhbGxiYWNrPzogRXh0ZW5kZWQ8c3RyaW5nPik6IElTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGF0dHIoJHthdHRyTmFtZX0ke3R5cGVPclVuaXQgPyBcIiBcIiArIHR5cGVPclVuaXQgOiBcIlwifSR7ZmFsbGJhY2sgPyBcIixcIiArIGZhbGxiYWNrIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyBhIHN0cmluZyBpbiBxdW90YXRpb24gbWFya3MuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcXVvdGVkKCB2YWw6IGFueSk6IElRdW90ZWRQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYFwiJHt2YWwyc3RyKHZhbCl9XCJgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENvdW50ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGBjb3VudGVyKClgIGZ1bmN0aW9uIHdpdGggYWRkaXRpb25hbFxyXG4gKiBvcHRpb25hbCBzdHJpbmdzIGFkZGVkIGFmdGVyIGFuZC9vciBiZWZvcmUgdGhlIGNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlciggY291bnRlck9iajogRXh0ZW5kZWQ8SUNvdW50ZXJSdWxlIHwgc3RyaW5nPixcclxuXHRzdHlsZT86IEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPixcclxuXHR0ZXh0QWZ0ZXI/OiBFeHRlbmRlZDxzdHJpbmc+LCB0ZXh0QmVmb3JlPzogRXh0ZW5kZWQ8c3RyaW5nPik6IElTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsMnN0ciggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbDJzdHIoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbDJzdHIoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXIoJHt2YWwyc3RyKGNvdW50ZXJPYmopfSR7c3R5bGVTdHJpbmd9KSAke2FmdGVyfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYGNvdW50ZXNyKClgIGZ1bmN0aW9uIHdpdGggdGhlIGdpdmVuXHJcbiAqIHNlcGFyYXRvciBzdHJpbmcgYW5kIGFkZGl0aW9uYWwgb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXJzKCBjb3VudGVyT2JqOiBFeHRlbmRlZDxJQ291bnRlclJ1bGUgfCBzdHJpbmc+LFxyXG5cdHNlcGFyYXRvcjogRXh0ZW5kZWQ8c3RyaW5nPiwgc3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzZXBTdHJpbmcgPSBzZXBhcmF0b3IgPyBgXCIke3ZhbDJzdHIoIHNlcGFyYXRvcil9XCJgIDogYFwiLlwiYDtcclxuXHRcdGxldCBzdHlsZVN0cmluZyA9IHN0eWxlID8gYCwke3ZhbDJzdHIoIHN0eWxlKX1gIDogXCJcIjtcclxuXHRcdGxldCBiZWZvcmUgPSB0ZXh0QmVmb3JlID8gYFwiJHt2YWwyc3RyKCB0ZXh0QmVmb3JlKX1cImAgOiBcIlwiO1xyXG5cdFx0bGV0IGFmdGVyID0gdGV4dEFmdGVyID8gYFwiJHt2YWwyc3RyKCB0ZXh0QWZ0ZXIpfVwiYCA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYCR7YmVmb3JlfSBjb3VudGVycygke3ZhbDJzdHIoY291bnRlck9iail9LCR7c2VwU3RyaW5nfSR7c3R5bGVTdHJpbmd9KSAke2FmdGVyfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWNzc1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvQ29sb3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvSW1hZ2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1V0aWxBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0NvbG9yQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9JbWFnZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3R5bGVBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1J1bGVBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1NjaGVkdWxpbmdBUElcIjtcclxuIiwiaW1wb3J0IHtJQW5pbWF0aW9uUnVsZSwgQW5pbWF0aW9uRnJhbWUsIEFuaW1hdGlvbldheXBvaW50LCBBbmltYXRpb25TdHlsZXNldCwgSUFuaW1hdGlvbkZyYW1lUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQgeyB2YWwyc3RyIH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25SdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBrZXlmcmFtZXMgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGlmIChmcmFtZXMpXHJcblx0XHRcdHRoaXMuZnJhbWVSdWxlcyA9IGZyYW1lcy5tYXAoIGZyYW1lID0+IG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIGZyYW1lWzBdLCBmcmFtZVsxXSkpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdGtleWZyYW1lUnVsZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25SdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uUnVsZSh1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdGlmICh0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdG5ld1J1bGUuZnJhbWVSdWxlcyA9IHRoaXMuZnJhbWVSdWxlcy5tYXAoIGZyYW1lUnVsZSA9PiBmcmFtZVJ1bGUuY2xvbmUoKSBhcyBBbmltYXRpb25GcmFtZVJ1bGUpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGtleWZyYW1lcyAke3RoaXMubmFtZX0ge31gLCBwYXJlbnQpIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdFx0bGV0IGNzc0tleWZyYW1lc1J1bGUgPSB0aGlzLmNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHRcdGZvciggbGV0IGZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3NzS2V5ZnJhbWVzUnVsZS5hcHBlbmRSdWxlKCBmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuXHRcdFx0XHRsZXQgY3NzUnVsZSA9IGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMuaXRlbSggIGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0aWYgKGNzc1J1bGUpXHJcblx0XHRcdFx0XHRmcmFtZVJ1bGUuY3NzS2V5ZnJhbWVSdWxlID0gY3NzUnVsZSBhcyBDU1NLZXlmcmFtZVJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goeClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiQ2Fubm90IGFkZCBDU1Mga2V5ZnJhbWUgcnVsZVwiLCB4KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAoIXRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggYEBrZXlmcmFtZXMgJHt0aGlzLm5hbWV9IHtgKTtcclxuXHJcblx0XHRmb3IoIGxldCBmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRjdHguYWRkUnVsZVRleHQoIGZyYW1lUnVsZS50b0Nzc1N0cmluZygpKVxyXG4gICAgICAgIFxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBcIn1cIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gY29udmVydCBhbiBvYmplY3QgdG8gYSBzdHJpbmcuIEFuaW1hdGlvbiBydWxlIHJldHVybnMgaXRzIG5hbWUuXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRwdWJsaWMgZnJhbWVSdWxlczogQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBrZXlmcmFtZSBjbGF1c2UgaW4gdGhlIGFuaW1hdGlvbiBydWxlLlxyXG4gKi9cclxuY2xhc3MgQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvbkZyYW1lUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQsIHN0eWxlc2V0PzogQW5pbWF0aW9uU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHRcdHRoaXMud2F5cG9pbnQgPSB3YXlwb2ludDtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBbmltYXRpb25GcmFtZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSggdGhpcy53YXlwb2ludCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsMnN0ciggdGhpcy53YXlwb2ludCwge1xyXG5cdFx0XHRmcm9tTnVtYmVyOiB2ID0+IHYgKyBcIiVcIixcclxuXHRcdFx0YXJySXRlbUZ1bmM6IHYgPT4gdmFsMnN0ciggdiwgeyBmcm9tTnVtYmVyOiB2ID0+IHYgKyBcIiVcIiB9KSxcclxuXHRcdFx0YXJyU2VwOiBcIixcIlxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHB1YmxpYyB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQ7XHJcblxyXG5cdC8qKiBTT00ga2V5ZnJhbWUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDb3VudGVyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ291bnRlclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvdW50ZXJSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJQ291bnRlclJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0XHRbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IENvdW50ZXJSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgY291bnRlciBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50ZXJOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJR3JpZExpbmVSdWxlLCBJR3JpZEFyZWFSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2V9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcmlkTGluZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgZ3JpZCBsaW5lIGRlZmluaXRpb24uIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGdyaWRcclxuICogbGluZXMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZSBncmlkIGxpbmUgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZExpbmVSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJR3JpZExpbmVSdWxlXHJcbntcclxuICAgIC8vIGlmIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZFxyXG4gICAgLy8gYmVjYXVzZSB0aGlzIGNvbnN0cnVjdG9yIGNhbiBvbmx5IGJlIGludm9rZWQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIGxpbmVzIG9mIHRoZSBHcmlkQXJlYVJ1bGVcclxuICAgIC8vIG9iamVjdC5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRMaW5lUnVsZSB8IElHcmlkQXJlYVJ1bGUsIGlzU3RhcnRFbmRPck5vbmU/OiBib29sZWFuKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IGlzU3RhcnRFbmRPck5vbmU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIGxldCBuYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuICAgICAgICBpZiAobmFtZU92ZXJyaWRlIGluc3RhbmNlb2YgR3JpZExpbmVSdWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZU92ZXJyaWRlLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IG5hbWVPdmVycmlkZS5pc1N0YXJ0RW5kT3JOb25lO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gbmFtZU92ZXJyaWRlLmFyZWFOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lT3ZlcnJpZGUgaW5zdGFuY2VvZiBHcmlkQXJlYVJ1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lT3ZlcnJpZGUubmFtZSArICh0aGlzLmlzU3RhcnRFbmRPck5vbmUgPyBcIi1zdGFydFwiIDogXCItZW5kXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gbmFtZU92ZXJyaWRlLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIG9idGFpbmVkIG5hbWUgZG9lc24ndCBoYXZlIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIgYnV0IHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXNcclxuICAgICAgICAgICAgLy8gZGVmaW5lZCAodGhhdCBpcywgaXQgaXMgZWl0aGVyIHN0YXJ0IG9yIGVuZCBsaW5lKSwgd2UgbmVlZCB0byBhcHBlbmQgdGhlIHN1ZmZpeC4gSWYgdGhlXHJcbiAgICAgICAgICAgIC8vIG9idGFpbmVkIG5hbWUgYWxyZWFkeSBoYXMgXCItc3RhcnRcIiBvciBcIi1lbmRcIiBhbmQgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBub3RcclxuICAgICAgICAgICAgLy8gZGVmaW5lZCwgd2Ugc2V0IHRoaXMgZmxhZyB0byBlaXRoZXIgdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gdGhlIHN1ZmZpeC4gTm90ZSB0aGF0IGlmXHJcbiAgICAgICAgICAgIC8vIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZC5cclxuICAgICAgICAgICAgbGV0IG5hbWVIYXNTdGFydCA9IHRoaXMubmFtZS5lbmRzV2l0aChcIi1zdGFydFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWVIYXNFbmQgPSB0aGlzLm5hbWUuZW5kc1dpdGgoXCItZW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAobmFtZUhhc1N0YXJ0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZS5zdWJzdHIoIDAsIHRoaXMubmFtZS5sZW5ndGggLSBcIi1zdGFydFwiLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZUhhc0VuZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lLnN1YnN0ciggMCwgdGhpcy5uYW1lLmxlbmd0aCAtIFwiLWVuZFwiLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID09PSB0cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lICs9IFwiLXN0YXJ0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID09PSBmYWxzZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSArPSBcIi1lbmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEdyaWRMaW5lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5pc1N0YXJ0RW5kT3JOb25lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGxpbmUgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxpbmUgaXMgYSBzdGFydCBvciBlbmQgbGluZSBvZiBhIGdyaWQgYXJlYS4gVGhlIHZhbHVlIGlzIHRydWVcclxuICAgICAqIGlmIHRoaXMgaXMgdGhlIHN0YXJ0IGxpbmU7IGZhbHNlIGlmIHRoaXMgaXMgdGhlIGVuZCBsaW5lOyBhbmQgdW5kZWZpbmVkIGlmIHRoZSBsaW5lIGlzXHJcbiAgICAgKiBub3QgcmVsYXRlZCB0byBhbnkgYXJlYS5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBpc1N0YXJ0RW5kT3JOb25lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgZ3JpZCBhcmVhIG9mIHdoaWNoIHRoZSBsaW5lIGlzIGVpdGhlciBhIHN0YXJ0IG9yIGFuIGVuZCBsaW5lLiBJdCBpcyBkZWZpbmVkXHJcbiAgICAgKiBvbmx5IGlmIHRoZSBsaW5lIG5hbWUgZW5kcyB3aXRoIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgYXJlYU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUgfCBJR3JpZEFyZWFSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JpZEFyZWFSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGdyaWQgYXJlYSBkZWZpbml0aW9uLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBncmlkXHJcbiAqIGFyZWFzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmUgZ3JpZCBhcmVhIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRBcmVhUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUdyaWRBcmVhUnVsZVxyXG57XHJcbiAgICAvLyBpZiB0aGUgbmFtZU92ZXJyaWRlIGlzIGFuIGFyZWEgcnVsZSBvYmplY3QsIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgYWx3YXlzIGRlZmluZWRcclxuICAgIC8vIGJlY2F1c2UgdGhpcyBjb25zdHJ1Y3RvciBjYW4gb25seSBiZSBpbnZva2VkIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBsaW5lcyBvZiB0aGUgR3JpZEFyZWFSdWxlXHJcbiAgICAvLyBvYmplY3QuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGUpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5lIHJ1bGVzXHJcbiAgICAgICAgdGhpcy5zdGFydExpbmUgPSBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVuZExpbmUgPSBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIGxpbmUgcnVsZXNcclxuICAgICAgICB0aGlzLnN0YXJ0TGluZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuICAgICAgICB0aGlzLmVuZExpbmUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBHcmlkQXJlYVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEdyaWRBcmVhUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgbGluZSBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFN0YXJ0IGxpbmUgb2YgdGhlIGFyZWEuICovXHJcblx0cHVibGljIHN0YXJ0TGluZTogR3JpZExpbmVSdWxlO1xyXG5cclxuICAgIC8qKiBFbmQgbGluZSBvZiB0aGUgYXJlYSBhcmVhLiAqL1xyXG5cdHB1YmxpYyBlbmRMaW5lOiBHcmlkTGluZVJ1bGU7XHJcblxyXG4gICAgLy8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZEFyZWFSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBTdHlsZURlZmluaXRpb24sIElHcm91cFJ1bGUsIElNZWRpYVJ1bGUsIElTdXBwb3J0c1J1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Z2V0Q29udGFpbmVyRnJvbUluc3RhbmNlLCBwcm9jZXNzSW5zdGFuY2VPckNsYXNzfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZSwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyb3VwUnVsZSBjbGFzcyBzZXJ2ZXMgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgZ3JvdXBpbmcgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyb3VwUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZU9yQ2xhc3MgPSBpbnN0YW5jZU9yQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICAvLyBjb250YWluZXIgdG8gd2hpY2ggb3VyIGdyb3VwbmcgcnVsZSBiZWxvbmdzIGJlY29tZXMgdGhlIHBhcmVudCBjb250YWluZXIgZm9yIHRoZVxyXG4gICAgICAgIC8vIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2VcclxuXHRcdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIHRoaXMuaW5zdGFuY2VPckNsYXNzLCBjb250YWluZXIuZ2V0RGVmaW5pdGlvbkluc3RhbmNlKCkpO1xyXG5cdFx0aWYgKCFpbnN0YW5jZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMucnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0R3JvdXBTZWxlY3RvclRleHQoKTtcclxuXHRcdGlmICghc2VsZWN0b3IpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYCR7c2VsZWN0b3J9IHt9YCwgcGFyZW50KSBhcyBDU1NHcm91cGluZ1J1bGU7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmluc2VydFJ1bGVzKCB0aGlzLmNzc1J1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmICghdGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5nZXRHcm91cFNlbGVjdG9yVGV4dCgpO1xyXG5cdFx0aWYgKCFzZWxlY3RvcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggYCR7c2VsZWN0b3J9IHtgKTtcclxuXHJcblx0XHQvLyBpbnNlcnQgc3ViLXJ1bGVzXHJcblx0XHR0aGlzLnJ1bGVDb250YWluZXIuc2VyaWFsaXplUnVsZXMoIGN0eCk7XHJcblxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBcIn1cIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBjbGVhciBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5jbGVhclJ1bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGRlZmluaW5nIHRoZSBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGVcclxuXHRwdWJsaWMgZ2V0IHJ1bGVzKCk6IFQgeyByZXR1cm4gdGhpcy5pbnN0YW5jZSBhcyBUOyB9XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgZGVmaW5lcyBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzcztcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgZm9yIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBydWxlQ29udGFpbmVyOiBJUnVsZUNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN1cHBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJU3VwcG9ydHNSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIGluc3RhbmNlT3JDbGFzcyk7XHJcblxyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU3VwcG9ydHNSdWxlPFQ+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBTdXBwb3J0c1J1bGU8VD4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdC8vIGNvbnZlcnQgdGhlIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgZm9ybVxyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGUgcXVlcnkgaXMgc3VwcG9ydGVkIGFuZCBpZiBpdCBpcyBub3QsIGRvbid0IGluc2VydCB0aGUgcnVsZVxyXG5cdFx0cmV0dXJuIENTUy5zdXBwb3J0cyggcXVlcnlTdHJpbmcpID8gYEBzdXBwb3J0cyAke3F1ZXJ5U3RyaW5nfWAgOiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRmxhZyBpbmRpY2F0ZWQgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGlzIHJ1bGUncyBxdWVyeSAqL1xyXG4gICAgcHVibGljIGdldCBpc1N1cHBvcnRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICBDU1Muc3VwcG9ydHMoIHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSkpO1xyXG4gICAgfVxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gc3VwcG9ydCBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHByaXZhdGUgcXVlcnk6IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElNZWRpYVJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBNZWRpYVJ1bGU8VD5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE1lZGlhUnVsZTxUPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0cmV0dXJuIGBAbWVkaWEgJHttZWRpYVF1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lGb250RmFjZVJ1bGUsIElJbXBvcnRSdWxlLCBJUGFnZVJ1bGUsIElOYW1lc3BhY2VSdWxlLCBJQ2xhc3NOYW1lUnVsZSwgSUNsYXNzUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7SUZvbnRGYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIlxyXG5pbXBvcnQge2ZvbnRGYWNlVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VGdW5jc1wiXHJcbmltcG9ydCB7UnVsZSwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCwgUnVsZUxpa2UsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeSwgU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZXNcIjtcclxuaW1wb3J0IHtQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1pc2NSdWxlIGNsYXNzIHNlcnZlcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHNpbXBsZSBydWxlcy5cclxuICovXHJcbmFic3RyYWN0IGNsYXNzIE1pc2NSdWxlPFQgZXh0ZW5kcyBDU1NSdWxlPiBleHRlbmRzIFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmlzVG9wTGV2ZWxSdWxlID0gaXNUb3BMZXZlbFJ1bGU7XHJcblx0fVxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggdGhpcy5nZXRSdWxlVGV4dCgpLCBwYXJlbnQpIGFzIFQ7XHJcblx0fVxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggdGhpcy5nZXRSdWxlVGV4dCgpLCB0aGlzLmlzVG9wTGV2ZWxSdWxlKTtcclxuICAgIH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0UnVsZVRleHQoKTogc3RyaW5nO1xyXG5cclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IFQ7XHJcblxyXG4gICAgLy8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBydWxlIGNhbiBvbmx5IGJlIGF0IHRoZSB0b3AtbGV2ZWwgb2Ygc3R5bGVzaGVldHMgKGUuZy4gQGltcG9ydFxyXG4gICAgLy8gYW5kIEBuYW1lc3BhY2UpLlxyXG4gICAgcHJpdmF0ZSBpc1RvcExldmVsUnVsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJbXBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW1wb3J0UnVsZSBleHRlbmRzIE1pc2NSdWxlPENTU0ltcG9ydFJ1bGU+IGltcGxlbWVudHMgSUltcG9ydFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdXJsOiBzdHJpbmcsIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSlcclxuXHR7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBhIHRvcC1sZXZlbCBydWxlXHJcblx0XHRzdXBlciggdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy51cmwgPSB1cmw7XHJcblx0XHR0aGlzLm1lZGlhUXVlcnkgPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0dGhpcy5zdXBwb3J0c1F1ZXJ5ID0gc3VwcG9ydHNRdWVyeTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB0aGlzLnVybCwgdGhpcy5tZWRpYVF1ZXJ5LCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UnVsZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHRpZiAodGhpcy51cmwuc3RhcnRzV2l0aChcInVybFwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiXFxcIlwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiJ1wiKSlcclxuXHRcdFx0dXJsID0gdGhpcy51cmw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHVybCA9IGB1cmwoJHt0aGlzLnVybH0pYDtcclxuXHJcblx0XHRsZXQgc3VwcG9ydHNRdWVyeVN0cmluZyA9ICF0aGlzLnN1cHBvcnRzUXVlcnkgPyBcIlwiIDogc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdFx0aWYgKHN1cHBvcnRzUXVlcnlTdHJpbmcgJiYgIXN1cHBvcnRzUXVlcnlTdHJpbmcuc3RhcnRzV2l0aCggXCJzdXBwb3J0c1wiKSlcclxuXHRcdCAgICBzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gYHN1cHBvcnRzKCAke3N1cHBvcnRzUXVlcnlTdHJpbmd9IClgO1xyXG5cclxuXHRcdGxldCBtZWRpYVF1ZXJ5U3RyaW5nID0gIXRoaXMubWVkaWFRdWVyeSA/IFwiXCIgOiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHRoaXMubWVkaWFRdWVyeSk7XHJcblx0XHRyZXR1cm4gYEBpbXBvcnQgJHt1cmx9ICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gJHttZWRpYVF1ZXJ5U3RyaW5nfWA7XHJcbiAgICB9XHJcblxyXG5cdC8vIFVSTCB0byBpbXBvcnQgZnJvbS5cclxuXHRwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG5cclxuXHQvLyBPcHRpb25hbCBzdXBwb3J0cyBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5hbWVzcGFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VSdWxlIGV4dGVuZHMgTWlzY1J1bGU8Q1NTTmFtZXNwYWNlUnVsZT4gaW1wbGVtZW50cyBJTmFtZXNwYWNlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBuYW1lc3BhY2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKVxyXG5cdHtcclxuICAgICAgICAvLyB0aGlzIGlzIGEgdG9wLWxldmVsIHJ1bGVcclxuXHRcdHN1cGVyKCB0cnVlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcclxuXHRcdHRoaXMucHJlZml4ID0gcHJlZml4O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE5hbWVzcGFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIHRoaXMubmFtZXNwYWNlLCB0aGlzLnByZWZpeCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBnZXRSdWxlVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdGxldCB1cmwgPSB0aGlzLm5hbWVzcGFjZS5zdGFydHNXaXRoKCBcInVybChcIikgPyB0aGlzLm5hbWVzcGFjZSA6IGB1cmwoJHt0aGlzLm5hbWVzcGFjZX0pYDtcclxuXHRcdHJldHVybiBgQG5hbWVzcGFjZSAke3RoaXMucHJlZml4ID8gdGhpcy5wcmVmaXggOiBcIlwifSAke3VybH1gO1xyXG4gICAgfVxyXG5cclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZvbnRGYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAZm9udC1mYWNlIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvbnRGYWNlUnVsZSBleHRlbmRzIE1pc2NSdWxlPENTU0ZvbnRGYWNlUnVsZT4gaW1wbGVtZW50cyBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZvbnRmYWNlOiBJRm9udEZhY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmZvbnRmYWNlID0gZm9udGZhY2U7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogRm9udEZhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIHRoaXMuZm9udGZhY2UpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UnVsZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gYEBmb250LWZhY2UgJHtmb250RmFjZVRvU3RyaW5nKCB0aGlzLmZvbnRmYWNlKX1gO1xyXG4gICAgfVxyXG5cclxuXHQvLyBPYmplY3QgZGVmaW5pbmcgZm9udC1mYWNlIHByb3BlcnRpZXMuXHJcblx0cHVibGljIGZvbnRmYWNlOiBJRm9udEZhY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYWdlUnVsZSBjbGFzcyByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYWdlUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElQYWdlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcywgc3R5bGU/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5wc2V1ZG9DbGFzcyA9IHBzZXVkb0NsYXNzO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IFBhZ2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQYWdlUnVsZSggdGhpcy5wc2V1ZG9DbGFzcyk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYEBwYWdlICR7dGhpcy5wc2V1ZG9DbGFzcyA/IHRoaXMucHNldWRvQ2xhc3MgOiBcIlwifWA7XHJcblx0fVxyXG5cclxuXHQvKiogU09NIHBhZ2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NQYWdlUnVsZTtcclxuXHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRwdWJsaWMgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhZ2VSdWxlIGNsYXNzIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsYXNzTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElDbGFzc05hbWVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGNsYXNzZXM6IChJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUgfCBzdHJpbmcpW10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ2xhc3NOYW1lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ2xhc3NOYW1lUnVsZSggdGhpcy5jbGFzc2VzKTtcclxuXHR9XHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuY2xhc3Nlcy5tYXAoIGNscyA9PiB0eXBlb2YgY2xzID09PSBcInN0cmluZ1wiID8gY2xzIDogY2xzLm5hbWUpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHRoaXMuY3NzQ2xhc3NOYW1lID0gXCIuXCIgKyB0aGlzLmNsYXNzZXMubWFwKCBjbHMgPT4gdHlwZW9mIGNscyA9PT0gXCJzdHJpbmdcIiA/IGNscyA6IGNscy5uYW1lKS5qb2luKFwiLlwiKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgdGhlIG9iamVjdCB0byBwYXJ0aWNwYXRlIGluIFwidmFsdWVUb1N0cmluZ1wiIHNlcmlhbGl6YXRpb24uIFdoZW5ldmVyXHJcblx0ICogdGhlIENsYXNzTmFtZVJ1bGUgb2JqZWN0IGlzIGVuY291bnRlcmVkIGJ5IHRoZSBgVXRpbEZ1bmMudmFsdWVUb1N0cmluZ2AgZnVuY3Rpb24sXHJcblx0ICogdGhlIHJ1bGUncyBDU1MgbmFtZSAodGhlIG9uZSB3aXRoIHRoZSBkb3RzKSB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzQ2xhc3NOYW1lO1xyXG5cdH1cclxuXHJcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgdG9TdHJpbmcgbWV0aG9kIHJldHVybnMgdGhlIGNvbWJpbmVkIG5hbWUgb2YgdGhlIGNsYXNzZXMgKHdpdGhvdXRcclxuICAgIC8vIHRoZSBDU1MgcHJlZml4ZXMpLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcbiAgICAvKiogQWxsIGNsYXNzIG5hbWVzIGNvbmNhdGVuYXRlZCB3aXRoIHNwYWNlICovXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICAvKiogQWxsIGNsYXNzIENTUyBuYW1lcyAod2l0aCBkb3RzKSBjb25jYXRlbmF0ZWQgdG9nZXRoZXIgKi9cclxuICAgIHB1YmxpYyBjc3NDbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGNsYXNzZXM6IChJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUgfCBzdHJpbmcpW107XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJUnVsZSwgSU5hbWVkRW50aXR5LCBTdHlsZURlZmluaXRpb259IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCBpbnRlcmZhY2Uga2VlcHMgaW5mb3JtYXRpb24gZHVyaW5nIHNlcmlhbGl6YXRpb24gb2Ygc3R5bGVcclxuICogZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBpbnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHRcclxue1xyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIGFkZFJ1bGVUZXh0KCBzOiBzdHJpbmcsIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIGFkZFN0eWxlRGVmaW5pdGlvbiggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBhY2NvbXBhbmllcyBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoXHJcbiAqIGEgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlQ29udGFpbmVyXHJcbntcclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZDtcclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdGNsZWFyUnVsZXMoKTogdm9pZDtcclxuXHJcblx0LyoqIFdyaXRlcyBhbGwgcnVsZXMgcmVjdXJzaXZlbHkgdG8gdGhlIGdpdmVuIHN0cmluZy4gKi9cclxuXHRzZXJpYWxpemVSdWxlcyggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZDtcclxuXHJcbiAgICAvKiogU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS4gKi9cclxuXHRzZXRDdXN0b21WYXJWYWx1ZSggbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IHRoYXQgXCJvd25zXCJcclxuICogdGhlIHJ1bGVzIHVuZGVyIHRoaXMgY29udGFpbmVyLiBJbiBwYXJ0aWN1bGFyLCB0aGUgb3duZXIncyBqb2IgaXMgdG8gZ2VuZXJhdGUgXCJzY29wZWRcIiB1bmlxdWVcclxuICogbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUb3BMZXZlbFJ1bGVDb250YWluZXIgZXh0ZW5kcyBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIEdlbmVyYXRlcyBhIG5hbWUsIHdoaWNoIHdpbGwgYmUgdW5pcXVlIGluIHRoaXMgc3R5bGVzaGVldCAqL1xyXG5cdGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZUxpa2UgYWJzdHJhY3QgY2xhc3MgaXMgYSBiYXNlIGZvciBhbGwgXCJydWxlc1wiIGRlZmluZWQgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyAtXHJcbiAqIHdoZXRoZXIgdGhleSBjb3JyZXNwb25kIHRvIHJlYWwgQ3NzUnVsZXMgKGFuZCB0aHVzIGRlcml2ZSBmcm9tIHRoZSBSdWxlIGNsYXNzKSBvciBub3QgKHN1Y2ggYXNcclxuICogY291bnRlcnMsIGdyaWQgbGluZXMgYW5kIGdyaWQgYXJlYXMpLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGVMaWtlXHJcbntcclxuXHQvLyBQcm9jZXNzZXMgdGhlIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblx0XHR0aGlzLm93bmVyQ29udGFpbmVyID0gb3duZXJDb250YWluZXI7XHJcblx0XHR0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogUnVsZUxpa2U7XHJcblxyXG5cdC8vIENvbnRhaW5lciBhdCB0aGUgdG9wIG9mIHRoZSBjaGFpbiBvZiBjb250YWluZXJzIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLlxyXG5cdHB1YmxpYyBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLiBUaGlzIGNhblxyXG5cdC8vIGJlIG51bGwgZm9yIHJ1bGVzIG5vdCBjcmVhdGVkIHZpYSBhc3NpZ25tZW50IHRvIHN0eWxlIGRlZmluaXRpb24gcHJvcGVydGllcy5cclxuXHRwdWJsaWMgcnVsZU5hbWU6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHJ1bGVzLiBBcyBhIHBhcmVudCBvZiBSdWxlQ29udGFpbmVyLCB0aGUgUnVsZVxyXG4gKiBjbGFzcyBpcyBhbHNvIGFuIGFuY2VzdG9yIGZvciBTdHlsZXNoZWV0OyBob3dldmVyLCBtb3N0IG9mIGl0cyB0aGUgZmllbGRzIGFyZSB1bmRlZmluZWQgaW5cclxuICogdGUgU3R5bGVzaGVldCBpbnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSVJ1bGVcclxue1xyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBjbG9uZSgpOiBSdWxlO1xyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQvLyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncywgaXMgYWN0aXZhdGVkLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaFxyXG5cdC8vIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBkZWFjdGl2YXRlZC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7IHRoaXMuY3NzUnVsZSA9IG51bGw7IH1cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcblx0cHVibGljIGFic3RyYWN0IHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSBnaXZlbiBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIHN0YXRpYyBhZGRSdWxlVG9ET00oIHJ1bGVUZXh0OiBzdHJpbmcsIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IENTU1J1bGUgfCBudWxsXHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIHgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBDYW5ub3QgYWRkIENTUyBydWxlICcke3J1bGVUZXh0fSdgLCB4KVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ1NTUnVsZS1kZXJpdmVkIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBhY3R1YWxsIENTUyBydWxlIGluc2VydGVkIGludG9cclxuXHQvLyB0aGUgc3R5bGVzIHNoZWV0IG9yIHRoZSBwYXJlbnQgcnVsZS4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIFN0eWxlc2hlZXQgb2JqZWN0cy5cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgc2NvcGVkIG5hbWVzIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHksXHJcblx0Y3NzUHJlZml4Pzogc3RyaW5nKTogW3N0cmluZyxzdHJpbmddXHJcbntcclxuXHRpZiAoIXJ1bGVOYW1lICYmICFuYW1lT3ZlcnJpZGUpXHJcblx0XHRyZXR1cm4gW1wiXCIsIFwiXCJdO1xyXG5cclxuXHRsZXQgbmFtZSA9ICFuYW1lT3ZlcnJpZGVcclxuXHRcdD8gb3duZXJDb250YWluZXIuZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lISlcclxuXHRcdDogdHlwZW9mIG5hbWVPdmVycmlkZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQ/IG5hbWVPdmVycmlkZVxyXG5cdFx0XHQ6IG5hbWVPdmVycmlkZS5uYW1lO1xyXG5cclxuXHRyZXR1cm4gIWNzc1ByZWZpeFxyXG5cdFx0PyBbbmFtZSxuYW1lXVxyXG5cdFx0OiBuYW1lLnN0YXJ0c1dpdGgoIGNzc1ByZWZpeClcclxuXHRcdFx0PyBbbmFtZS5zdWJzdHIoIGNzc1ByZWZpeC5sZW5ndGgpLCBuYW1lXVxyXG5cdFx0XHQ6IFtuYW1lLCBjc3NQcmVmaXggKyBuYW1lXTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1N0eWxlRGVmaW5pdGlvbiwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCJcclxuaW1wb3J0IHtJbXBvcnRSdWxlLCBOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi9NaXNjUnVsZXNcIlxyXG5pbXBvcnQge3Nfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlfSBmcm9tIFwiLi9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8vIERlZmluZSBzeW1ib2xzIHRoYXQgYXJlIHVzZWQgZm9yIGtlZXBpbmcgaW1wb3J0YW50IGluZm9ybWF0aW9uIG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uXHJcbi8vIGluc3RhbmNlcyB0aGF0IHdlIGRvbid0IHdhbnQgdG8gYmUgdmlzaWJsZSB0byBkZXZlbG9wZXJzLlxyXG5cclxuLyoqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHBvaW50aW5nIHRvIHRoZSBzaW5nbHRvbiBpbnN0YW5jZS4gKi9cclxuY29uc3Qgc3ltSW5zdGFuY2UgPSBTeW1ib2woXCJkZWZpbml0aW9uXCIpO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIHBvaW50aW5nIHRvIHRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCB0aGF0IGlzXHJcbiAqIHJlc3BvbnNpYmxlIGZvciBwcm9jZXNzaW5nIHJ1bGVzLlxyXG4gKi9cclxuY29uc3Qgc3ltQ29udGFpbmVyID0gU3ltYm9sKFwiY29udGFpbmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVDb250YWluZXIgY2xhc3MgaXMgYSBzaGFkb3cgc3RydWN0dXJlIHRoYXQgYWNjb21wYW5pZXMgZXZlcnkgcHJvY2Vzc2VkIHN0eWxlIGRlZmluaXRpb25cclxuICogb2JqZWN0LiBTaW5jZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYW4gZXhwb3J0ZWQgY2xhc3MgdmlzaWJsZSB0byBkZXZlbG9wZXJzLCB3ZSBkb24ndCB3YW50XHJcbiAqIHRvIGhhdmUgYSBsb3Qgb2YgZnVuY3Rpb25hbGl0eSBpbiBpdC4gVGhlIFJ1bGVDb250YWluZXIgb2JqZWN0IGlzIGxpbmtlZCB0byB0aGUgU3R5bGVEZWZpbml0aW9uXHJcbiAqIG9iamVjdCB2aWEgdGhlIFtzeW1SdWxlQ29udGFpbmVyXSBzeW1ib2wuIEl0IGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgcGFyc2luZyBydWxlXHJcbiAqIGRlZmluaXRpb25zLCBuYW1lIGFzc2lnbm1lbnQgYW5kIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG4gKi9cclxuY2xhc3MgUnVsZUNvbnRhaW5lciBpbXBsZW1lbnRzIElUb3BMZXZlbFJ1bGVDb250YWluZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBuYW1lOiBzdHJpbmcsIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuZW1iZWRkaW5nQ29udGFpbmVyID0gZW1iZWRkaW5nQ29udGFpbmVyO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmluaXRpb25DbGFzcyA9IGluc3RhbmNlLmNvbnN0cnVjdG9yIGFzIElTdHlsZURlZmluaXRpb25DbGFzcztcclxuICAgICAgICB0aGlzLnBhcmVudCA9IGluc3RhbmNlLiRwYXJlbnQ7XHJcblx0XHR0aGlzLm93bmVyID0gaW5zdGFuY2UuJG93bmVyO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID0gMDtcclxuXHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucHJvY2VzcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwdXQgcmVmZXJlbmNlIHRvIHRoaXMgY29udGFpbmVyIGluIHRoZSBzeW1ib2wgcHJvcGVydHkgb2YgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0XHR0aGlzLmluc3RhbmNlW3N5bUNvbnRhaW5lcl0gPSB0aGlzO1xyXG5cclxuXHRcdC8vIGdldCBjb250YWluZXJzIGZvciB0aGUgcGFyZW50IGFuZCBvd25lciBzdHlsZSBkZWZpbml0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KVxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudFtzeW1Db250YWluZXJdO1xyXG5cclxuXHRcdGlmICh0aGlzLm93bmVyKVxyXG5cdFx0XHR0aGlzLnRvcExldmVsQ29udGFpbmVyID0gdGhpcy5vd25lcltzeW1Db250YWluZXJdO1xyXG5cclxuXHRcdC8vIGlmIG91ciBjb250YWluZXIgaGFzIHBhcmVudCBjb250YWluZXIsIHByZWZpeCBvdXIgbmFtZSB3aXRoIHRoZSB1cHBlciBvbmVcclxuXHRcdGlmICh0aGlzLnBhcmVudENvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5uYW1lID0gYCR7dGhpcy5wYXJlbnRDb250YWluZXIubmFtZX1fJHt0aGlzLm5hbWV9YDtcclxuXHJcblx0XHR0aGlzLmltcG9ydHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZXNwYWNlcyA9IFtdO1xyXG5cdFx0dGhpcy52YXJzID0gW107XHJcblx0XHR0aGlzLnJlZnMgPSBbXTtcclxuXHRcdHRoaXMub3RoZXJSdWxlcyA9IFtdO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhlbS5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZSwgdGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHByb3BWYWwgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24pXHJcblx0XHRcdHRoaXMucHJvY2Vzc1JlZmVyZW5jZSggcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBWYXJSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZUxpa2UpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1J1bGVMaWtlKCBwcm9wTmFtZSwgcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdHRoaXMucHJvY2Vzc0FycmF5KCBwcm9wVmFsKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcmVmZXJlbmNlIHRvIGFub3RoZXIgc3R5bGUgZGVmaW5pdGlvbiBjcmVhdGVkIGJ5IHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1JlZmVyZW5jZSggcmVmOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIGluc3RhbmNlIGhhcyBub3QgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCwgcHJvY2VzcyBpdCBhbmQgaW5kaWNhdGUgdGhhdCBpdCBpc1xyXG5cdFx0Ly8gZW1iZWRkZWQgaW50byBvdXIgY29udGFpbmVyIGJlY2F1c2Ugb25seSBkZWZpbml0aW9ucyBjcmVhdGVkIHdpdGggdGhlICRlbWJlZCBmdW5jdGlvblxyXG5cdFx0Ly8gYXJlIG5vdCBwcm9jZXNzZWQuXHJcblx0XHRwcm9jZXNzSW5zdGFuY2UoIHJlZiwgdGhpcyk7XHJcblx0XHR0aGlzLnJlZnMucHVzaCggcmVmKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzVmFyUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHZhck9iajogVmFyUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZXNoZWV0LCB3ZSBjcmVhdGUgYSBjbG9uZSBvZiB0aGVcclxuXHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc3R5bGVzaGVldC5cclxuXHRcdGlmICh2YXJPYmouY29udGFpbmVyKVxyXG5cdFx0XHR2YXJPYmogPSB2YXJPYmouY2xvbmUoKTtcclxuXHJcblx0XHR2YXJPYmoucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cdFx0dGhpcy52YXJzLnB1c2goIHZhck9iaik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBjb3VudGVyIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NSdWxlTGlrZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHJ1bGVMaWtlOiBSdWxlTGlrZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZXNoZWV0LCB3ZSBjcmVhdGUgYSBjbG9uZSBvZiB0aGVcclxuXHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc3R5bGVzaGVldC5cclxuXHRcdGlmIChydWxlTGlrZS5jb250YWluZXIpXHJcbiAgICAgICAgICAgIHJ1bGVMaWtlID0gcnVsZUxpa2UuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgcnVsZUxpa2UucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIFJ1bGUtZGVyaXZlZCBvYmplY3QuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHJ1bGU6IFJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIHJ1bGUgb2JqZWN0IGlzIGFscmVhZHkgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYW5vdGhlciBpbnN0YW5jZSwgd2UgY3JlYXRlIGEgY2xvbmVcclxuXHRcdC8vIG9mIHRoZSBydWxlIGFuZCBzZXQgaXQgdG8gb3VyIGluc3RhbmNlLlxyXG5cdFx0aWYgKHJ1bGUub3duZXJDb250YWluZXIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChwcm9wTmFtZSlcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlW3Byb3BOYW1lXSA9IHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFRPRE86IHN1cHBvcnQgYWxyZWFkeSB1c2VkIHJ1bGVzIGluIGFuIGFycmF5XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cnVsZS5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblxyXG5cdFx0aWYgKHJ1bGUgaW5zdGFuY2VvZiBJbXBvcnRSdWxlKVxyXG5cdFx0XHR0aGlzLmltcG9ydHMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgTmFtZXNwYWNlUnVsZSlcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLm90aGVyUnVsZXMucHVzaCggcnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBydWxlcyBmcm9tIHRoZSBnaXZlbiBhcnJheS5cclxuXHRwcml2YXRlIHByb2Nlc3NBcnJheSggcHJvcFZhbHM6IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcHJvcFZhbHMgfHwgcHJvcFZhbHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHByb3BWYWwgb2YgcHJvcFZhbHMpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1Byb3BlcnR5KCBudWxsLCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRwdWJsaWMgZ2V0RGVmaW5pdGlvbkluc3RhbmNlKCk6IFN0eWxlRGVmaW5pdGlvblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBnaXZlbiB2YWx1ZSBmb3IgdGhlIGN1c3RvbSBDU1Mgcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBzZXRDdXN0b21WYXJWYWx1ZSggbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSlcclxuICAgICAgICAgICAgc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGVzIGEgZ2xvYmFsbHkgdW5pcXVlIENTUyBuYW1lIGZvciB0aGUgZ2l2ZW4gcnVsZSBuYW1lIHVubGVzcyB0aGlzIHJ1bGUgbmFtZSBhbHJlYWR5XHJcblx0ICogZXhpc3RzIGVpdGhlciBpbiBhIGJhc2UgY2xhc3Mgb3IgaW4gdGhlIGNoYWluIG9mIHBhcmVudCBncm91cGluZyBydWxlcy5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBpZiBydWxlIG5hbWUgd2FzIG5vdCBzcGVjaWZpZWQsIGdlbmVyYXRlIGl0IHVuaXF1ZWx5OyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgd2VcclxuXHRcdC8vIGFscmVhZHkgaGF2ZSB0aGlzIHJ1bGUgbmFtZTogaWYgeWVzLCByZXR1cm4gdGhlIGFscmVhZHkgYXNzaWduZWQgbmFtZS4gSWYgd2UgZGlkbid0XHJcblx0XHQvLyBmaW5kIHRoZSBuYW1lLCB0cnkgdG8gZmluZCBpdCBpbiB0aGUgYmFzZSBjbGFzc2VzKTsgaWYgbm90IGZvdW5kIHRoZXJlLCBnZW5lcmF0ZSBpdFxyXG5cdFx0Ly8gdXNpbmcgdGhpcyBjb250YWluZXIncyBuYW1lIGFuZCB0aGUgcnVsZSBuYW1lIChub3RlIHRoYXQgZGVwZW5kaW5nIG9uIHRoZSBtb2RlLCBib3RoXHJcblx0XHQvLyBjYW4gYmUgZ2VuZXJhdGVkIHVuaXF1ZWx5KS5cclxuXHRcdGlmICghcnVsZU5hbWUpXHJcblx0XHRcdHJldHVybiBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGVOYW1lIGluIHRoaXMuaW5zdGFuY2UgJiYgXCJuYW1lXCIgaW4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0pXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlW3J1bGVOYW1lXS5uYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIG91dCBpZiB0aGVyZSBpcyBhIHJ1bGUgd2l0aCB0aGlzIG5hbWUgZGVmaW5lZCBpbiBhIHN0eWxlc2hlZXQgaW5zdGFuY2UgY3JlYXRlZCBmb3JcclxuXHRcdFx0Ly8gYSBjbGFzcyBmcm9tIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuXHJcblx0XHRcdGxldCBleGlzdGluZ05hbWUgPSBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCB0aGlzLmRlZmluaXRpb25DbGFzcywgcnVsZU5hbWUpO1xyXG5cdFx0XHRyZXR1cm4gZXhpc3RpbmdOYW1lID8gZXhpc3RpbmdOYW1lIDogZ2VuZXJhdGVOYW1lKCB0aGlzLm5hbWUsIHJ1bGVOYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLiAqL1xyXG5cdHB1YmxpYyBpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGFzIHRoZXkgbXVzdCBiZSBiZWZvcmUgb3RoZXIgcnVsZXMuIElmIHRoZSBwYXJlbnQgaXMgYSBncm91cGluZ1xyXG5cdFx0Ly8gcnVsZSwgZG9uJ3QgaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXQgYWxsXHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltQ29udGFpbmVyXS5hY3RpdmF0ZSgpO1xyXG5cclxuXHRcdC8vIGlzZXJ0IG91ciBjdXN0b20gdmFyaWFibGVzIGluIGEgXCI6cm9vdFwiIHJ1bGVcclxuXHRcdGlmICh0aGlzLnZhcnMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYDpyb290IHske3RoaXMudmFycy5tYXAoIHZhck9iaiA9PlxyXG5cdFx0XHRcdHZhck9iai50b0Nzc1N0cmluZygpKS5maWx0ZXIoIHYgPT4gdiAhPSBudWxsKS5qb2luKFwiO1wiKX19YCwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IGFsbCBvdGhlciBydWxlc1xyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogQ2xlYXJzIGFsbCBDU1MgcnVsZSBvYmplY3RzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuICovXHJcblx0cHVibGljIGNsZWFyUnVsZXMoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICAvLyBpbXBvcnQgYW5kIG5hbWVzcGFjZSBydWxlcyBjYW4gb25seSBleGlzdCBpbiB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHJcblx0XHQvLyBkZWFjdGl2YXRlIGltcG9ydGVkIHN0eWxlc2hlZXRzXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltQ29udGFpbmVyXS5kZWFjdGl2YXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGVzaGVldCBpbnRvIERPTS4gKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICgrK3RoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgbm90LWVtYmVkZGVkIHN0eWxlIGRlZmluaXRpb25zIGNyZWF0ZSB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuZW1iZWRkaW5nQ29udGFpbmVyKVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSB0aGlzLmVtYmVkZGluZ0NvbnRhaW5lci5kb21TdHlsZUVsbTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbS5pZCA9IHRoaXMubmFtZTtcclxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLmRvbVN0eWxlRWxtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IHRoaXMudG9wTGV2ZWxDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblxyXG5cdFx0XHR0aGlzLmluc2VydFJ1bGVzKCB0aGlzLmRvbVN0eWxlRWxtIS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZXNoZWV0IGZyb20gRE9NLiAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBndWFyZCBmcm9tIGV4dHJhIGRlYWN0aXZhdGUgY2FsbHNcclxuXHRcdGlmICh0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICgtLXRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyUnVsZXMoKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpaXRpb24gY3JlYXRlcyB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtIS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogV3JpdGVzIGFsbCBydWxlcyByZWN1cnNpdmVseSB0byB0aGUgZ2l2ZW4gc3RyaW5nLiAqL1xyXG5cdHB1YmxpYyBzZXJpYWxpemVSdWxlcyggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGFzIHRoZXkgbXVzdCBiZSBiZWZvcmUgb3RoZXIgcnVsZXMuIElmIHRoZSBwYXJlbnQgaXMgYSBncm91cGluZ1xyXG5cdFx0Ly8gcnVsZSwgZG9uJ3QgaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXQgYWxsXHJcblx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5zZXJpYWxpemUoIGN0eCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5zZXJpYWxpemUoIGN0eCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFjdGl2YXRlIHJlZmVyZW5jZWQgc3R5bGUgZGVmaW5pdGlvbnNcclxuICAgICAgICBmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG4gICAgICAgICAgICBjdHguYWRkU3R5bGVEZWZpbml0aW9uKCByZWYpO1xyXG5cclxuXHRcdC8vIHNlcmlhbGl6ZSBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGN0eC5hZGRSdWxlVGV4dCggYDpyb290IHske3RoaXMudmFycy5tYXAoIHZhck9iaiA9PiB2YXJPYmoudG9Dc3NTdHJpbmcoKSkuZmlsdGVyKCB2ID0+IHYgIT0gbnVsbCkuam9pbihcIjtcIil9fWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNlcmlhbGl6ZSBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBjb250YWluZXIgaXMgZm9yIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbi5cclxuXHRwcml2YXRlIGdldCBpc1RvcExldmVsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vd25lciA9PT0gbnVsbCB8fCB0aGlzLm93bmVyID09PSB0aGlzLmluc3RhbmNlIH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoaXMgY29udGFpbmVyIHByb2Nlc3NlZC5cclxuXHRwdWJsaWMgaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoaXMgY29udGFpbmVyIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YuXHJcblx0cHJpdmF0ZSBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzc1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoaXMgY29udGFpbmVyLCB3aGljaCwgZGVwZW5kaW5nIG9uIHRoZSBtb2RlLCBpcyBlaXRoZXIgdGFrZW4gZnJvbSB0aGUgY2xhc3NcclxuXHQvLyBkZWZpbml0aW9uIG5hbWUgb3IgZ2VuZXJhdGVkIHVuaXF1ZWx5LlxyXG5cdHByaXZhdGUgbmFtZTogc3RyaW5nXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbiB0aGUgY2hhaW4gb2YgZ3JvdXBpbmcgcnVsZXMgdGhhdFxyXG5cdC8vIGxlYWQgdG8gdGhpcyBydWxlIGNvbnRhaW5lci4gRm9yIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9ucywgdGhpcyBpcyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBwYXJlbnQ/OiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRoYXQgYmVsb25ncyB0byB0aGUgcGFyZW50IHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBwYXJlbnRDb250YWluZXI/OiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgcG9pbnRzIHRvIHRoZSBzYW1lXHJcblx0Ly8gc2luZ2xldG9uIGRlZmluaXRpb24gaW5zdGFuY2UgYXMgdGhlICdpbnN0YW5jZScgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBvd25lcjogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIG93bmVyIHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBwb2ludHMgdG8gYHRoaXNgLiBOYW1lcyBmb3IgbmFtZWQgcnVsZXMgYXJlIGNyZWF0ZWQgdXNpbmcgdGhpcyBjb250YWluZXIuXHJcblx0cHJpdmF0ZSB0b3BMZXZlbENvbnRhaW5lcjogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgdGhhdCBpcyBlbWJlZGRpbmcgb3VyIGluc3RhbmNlXHJcblx0Ly8gKHRoYXQgaXMsIHRoZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIG91ciBjb250YWluZXIpLiBJZiBkZWZpbmVkLCB0aGlzIGNvbnRhaW5lcidzXHJcblx0Ly8gYDxzdHlsZT5gIGVsZW1lbnQgaXMgdXNlZCB0byBpbnNlcnQgQ1NTIHJ1bGVzIGludG8gaW5zdGVhZCBvZiB0b3BMZXZlbENvbnRhaW5lci5cclxuXHRwcml2YXRlIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIExpc3Qgb2YgcmVmZXJlbmNlcyB0byBvdGhlciBzdHlsZSBkZWZpbml0aW9ucyBjcmVhZWQgdmlhIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVmczogU3R5bGVEZWZpbml0aW9uW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQGltcG9ydCBydWxlc1xyXG5cdHByaXZhdGUgaW1wb3J0czogSW1wb3J0UnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBuYW1lc3BhY2UgcnVsZXNcclxuXHRwcml2YXRlIG5hbWVzcGFjZXM6IE5hbWVzcGFjZVJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBjdXN0b20gdmFyaWFibGUgcnVsZXMuXHJcblx0cHJpdmF0ZSB2YXJzOiBWYXJSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgcnVsZXMgdGhhdCBhcmUgbm90IGltcG9ydHMsIG5hbWVzcGFjZXMsIGN1c3RvbSB2YXJzLCByZWZlcmVuY2VzIG9yIGdyb3VwaW5nIHJ1bGVzLlxyXG5cdHByaXZhdGUgb3RoZXJSdWxlczogUnVsZVtdO1xyXG5cclxuXHQvLyBcIjpyb290XCIgcnVsZSB3aGVyZSBhbGwgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgYXJlIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBjc3NDdXN0b21WYXJTdHlsZVJ1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBlbGVtbnRcclxuXHRwdWJsaWMgZG9tU3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOYW1lIGdlbmVyYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRzX3VzZVVuaXF1ZVN0eWxlTmFtZXMgPSBlbmFibGU7XHJcblx0c191bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gcHJlZml4ID8gcHJlZml4IDogXCJuXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgbmFtZXMgZm9yIHN0eWxlIGVsZW1lbnRzIChjbGFzc2VzLCAgYW5pbWF0aW9ucywgZXRjLilcclxuICogQnkgZGVmYXVsdCB0aGlzIGZsYWcgaXMgdHJ1ZSBpbiB0aGUgUmVsZWFzZSBidWlsZCBvZiB0aGUgbGlicmFyeSBhbmQgZmFsc2UgaW4gdGhlIERlYnVnIGJ1aWxkLlxyXG4gKi9cclxubGV0IHNfdXNlVW5pcXVlU3R5bGVOYW1lczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4vLy8gI2lmIERFQlVHXHJcbnNfdXNlVW5pcXVlU3R5bGVOYW1lcyA9IGZhbHNlO1xyXG4vLy8gI2VuZGlmXHJcblxyXG4vKipcclxuICogUHJlZml4IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIHN0eWxlIG5hbWVzLiBJZiB1bmRlZmluZWQsIGEgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICovXHJcbmxldCBzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXggPSBcIm5cIjtcclxuXHJcbi8qKiBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy4gKi9cclxubGV0IHNfbmV4dFVuaXF1ZUlEID0gMTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGdpdmVuIHJ1bGUgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2hlZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hbWUoIHNoZWV0TmFtZTogc3RyaW5nLCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gc191c2VVbmlxdWVTdHlsZU5hbWVzXHJcblx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSggc191bmlxdWVTdHlsZU5hbWVzUHJlZml4KVxyXG5cdFx0OiBgJHtzaGVldE5hbWV9XyR7cnVsZU5hbWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgdW5pcXVlIG5hbWUsIHdoaWNoIGNhbiBiZSB1c2VkIGVpdGhlciBmb3Igc3R5bGUgZWxlbWVudCdzIElEIG9yIG9yIGNsYXNzLFxyXG4gKiBpZGVudGlmaWVyIG9yIGFuaW1hdGlvbiBuYW1lLiBOYW1lcyBhcmUgZ2VuZXJhdGVkIHVzaW5nIGEgc2ltcGxlIGluY3JlbWVudGluZyBudW1iZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHByZWZpeD86IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiBzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpICsgc19uZXh0VW5pcXVlSUQrKztcclxufVxyXG5cclxuXHJcblxyXG4vLyBMb29rcyB1cCBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBjbGFzcy4gSWYgZm91bmQgYW5kIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHJ1bGUsIHRoZW4gcmV0dXJucyB0aGUgbmFtZSBhc3NpZ25lZCBmb3IgaXQuXHJcbmZ1bmN0aW9uIGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBydWxlTmFtZTogc3RyaW5nKVxyXG57XHJcblx0aWYgKCFkZWZpbml0aW9uQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIHByb3RvdHlwZXNcclxuICAgIGZvciggbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZGVmaW5pdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgYmFzZUNsYXNzICE9PSBTdHlsZURlZmluaXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGJhc2VDbGFzcykpXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgdGhlIGJhc2UgY2xhc3MgYWxyZWFkeSBoYXMgYW4gYXNzb2NpYXRlZCBpbnN0YW5jZTsgaWYgeWVzLCBjaGVjayB3aGV0aGVyXHJcblx0XHQvLyBpdCBoYXNlIGEgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gcnVsZSBuYW1lLiBJZiB5ZXMsIHRoZW4gdXNlIHRoaXMgcnVsZSdzIGFscmVhZHlcclxuXHRcdC8vIGdlbmVyYXRlZCBuYW1lIChpZiBleGlzdHMpLlxyXG5cdFx0aWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBiYXNlSW5zdCA9IGJhc2VDbGFzc1tzeW1JbnN0YW5jZV07XHJcblx0XHRcdGlmIChiYXNlSW5zdCAmJiBydWxlTmFtZSBpbiBiYXNlSW5zdCAmJiBcIm5hbWVcIiBpbiBiYXNlSW5zdFtydWxlTmFtZV0pXHJcblx0XHRcdFx0cmV0dXJuIGJhc2VJbnN0W3J1bGVOYW1lXS5uYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb2Nlc3NpbmcgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBhc3NpZ25zIG5hbWVzIHRvIGl0cyBydWxlcy5cclxuICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgd2UgY2hlY2sgd2hldGhlciB0aGVyZSBpcyBhbiBpbnN0YW5jZSBhbHJlYWR5XHJcbiAqIGNyZWF0ZWQgZm9yIGl0IGFzIGEgY2xhc3Mgd2lsbCBoYXZlIG9ubHkgYSBzaW5nbGUgYXNzb2NpYXRlZCBpbnN0YW5lIG5vIG1hdHRlciBob3cgbWFueSB0aW1lc1xyXG4gKiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICogXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IChhbiBpbnN0YW5jZSBvZiB0aGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzKSB0aGVuIHdlIGNoZWNrIHdoZXRoZXJcclxuICogaXQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQuIElmIHllcywgd2UganVzdCByZXR1cm4gaXQgYmFjazsgaWYgbm8sIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdHBhcmVudD86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG5cdGlmICghaW5zdE9yQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gaW5zdE9yQ2xhc3MgaGFzIHR5cGUgXCJvYmplY3RcIiBpZiBpdCBpcyBhbiBpbnN0YW5jZSBhbmQgXCJmdW5jdGlvblwiIGlmIGl0IGlzIGEgY2xhc3NcclxuXHRpZiAodHlwZW9mIGluc3RPckNsYXNzID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdHByb2Nlc3NJbnN0YW5jZSggaW5zdE9yQ2xhc3MpO1xyXG5cdFx0cmV0dXJuIGluc3RPckNsYXNzO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB0aGlzIGRlZmluaXRpb24gY2xhc3MgaXMgYWxyZWFkeSBhc3NvY2lhdGVkIHdpdGggYW4gaW5zdGFuY2VcclxuXHRcdHJldHVybiBpbnN0T3JDbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSlcclxuXHRcdFx0PyBpbnN0T3JDbGFzc1tzeW1JbnN0YW5jZV1cclxuXHRcdFx0OiBwcm9jZXNzQ2xhc3MoIGluc3RPckNsYXNzLCBwYXJlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGJ5IGNyZWF0aW5nIGl0cyBpbnN0YW5jZSBhbmQgYXNzb2NpYXRpbmcgYVxyXG4gKiBydWxlIGNvbnRhaW5lciBvYmplY3Qgd2l0aCBpdC4gVGhlIGNsYXNzIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnN0YW5jZSB1c2luZyB0aGVcclxuICogU3ltYm9sIHByb3BlcnR5LiBUaGUgb3duZXIgcGFyYW1ldGVyIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uXHJcbiAqIG9iamVjdCBvciBudWxsIGlmIHRoZSBnaXZlbiBjbGFzcyBpcyBpdHNlbGYgYSB0b3AtbGV2ZWwgY2xhc3MgKHRoYXQgaXMsIGlzIG5vdCBhIGNsYXNzXHJcbiAqIHRoYXQgZGVmaW5lcyBydWxlcyB3aXRoaW4gbmVzdGVkIGdyb3VwaW5nIHJ1bGVzKS5cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NDbGFzcyggZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcblx0cGFyZW50PzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcbiAgICAvLyBwcm9jZXNzIGFsbCB0aGUgYmFzZSBjbGFzc2VzIHNvIHRoYXQgcnVsZSBuYW1lcyBhcmUgZ2VuZXJhdGVkLiBXZSBkb24ndCBhY3RpdmF0ZSBzdHlsZXNcclxuICAgIC8vIGZvciB0aGVzZSBjbGFzc2VzIGJlY2F1c2UgZGVyaXZlZCBjbGFzc2VzIHdpbGwgaGF2ZSBhbGwgdGhlIHJ1bGVzIGZyb20gYWxsIHRoZSBiYXNlIGNsYXNzZXNcclxuICAgIC8vIGFzIHRoZWlyIG93biBhbmQgc28gdGhlc2UgcnVsZXMgd2lsbCBiZSBhY3RpdmF0ZWQgYXMgcGFydCBvZiB0aGUgZGVyaXZlZCBjbGFzcy5cclxuICAgIGZvciggbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZGVmaW5pdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgYmFzZUNsYXNzICE9PSBTdHlsZURlZmluaXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGJhc2VDbGFzcykpXHJcbiAgICB7XHJcblx0XHRwcm9jZXNzQ2xhc3MoIGJhc2VDbGFzcywgcGFyZW50KTtcclxuICAgIH1cclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIHRoZSBpbnN0YW5jZSBvZiB0aGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IGRlZmluaXRpb25DbGFzcyggcGFyZW50KTtcclxuXHJcblx0XHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRcdGxldCBuYW1lID0gc191c2VVbmlxdWVTdHlsZU5hbWVzIHx8ICFkZWZpbml0aW9uQ2xhc3MubmFtZVxyXG5cdFx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSgpXHJcblx0XHRcdDogZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblxyXG5cdFx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lKTtcclxuXHRcdGRlZmluaXRpb25DbGFzc1tzeW1JbnN0YW5jZV0gPSBpbnN0YW5jZTtcclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgaW5zdGFudGlhdGluZyBTdHlsZSBEZWZpbml0aW9uIENsYXNzICcke2RlZmluaXRpb25DbGFzcy5uYW1lfSdgLCBlcnIpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgYW5kIGFzc2lnbnMgbmFtZXMgdG8gaXRzIHJ1bGVzLiBJZiB0aGVcclxuICogaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHdlIGRvIG5vdGhpbmc7IG90aGVyd2lzZSwgd2UgYXNzaWduIG5ldyB1bmlxdWUgbmFtZXNcclxuICogdG8gaXRzIHJ1bGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKTogdm9pZFxyXG57XHJcblx0Ly8gaWYgdGhlIGluc3RhbmNlIGlzIGFscmVhZHkgcHJvY2Vzc2VkLCBqdXN0IHJldHVybjsgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVcclxuXHQvLyBlbWJlZGRpbmdDb250YWluZXIgcGFyYW1ldGVyLlxyXG5cdGxldCBydWxlQ29udGFpbmVyID0gaW5zdGFuY2Vbc3ltQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRsZXQgbmFtZSA9IGdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdGlmICghc191c2VVbmlxdWVTdHlsZU5hbWVzKVxyXG5cdHtcclxuXHRcdGxldCBkZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvcjtcclxuXHRcdGlmIChkZWZpbml0aW9uQ2xhc3MubmFtZSlcclxuXHRcdFx0bmFtZSArPSBcIl9cIiArIGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gY3JlYXRlIGNvbnRhaW5lciAtIHRoaXMgd2lsbCBhc3NvY2lhdGUgdGhlIG5ldyBjb250YWluZXIgd2l0aCB0aGUgaW5zdGFuY2UgYW5kIHByb2Nlc3NcclxuXHQvLyB0aGUgcnVsZXMuXHJcblx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lLCBlbWJlZGRpbmdDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHJ1bGUgY29udGFpbmVyIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbik6IFJ1bGVDb250YWluZXJcclxue1xyXG5cdHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlW3N5bUNvbnRhaW5lcl0gOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWYgdGhlIGlucHV0IG9iamVjdCBpc1xyXG4gKiBub3QgYSBzdHlsZSBkZWZpbml0aW9uIGJ1dCBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIG9idGFpbiBzdHlsZSBkZWZpbml0aW9uIGJ5IGNhbGxpbmcgdGhlICR1c2VcclxuICogZnVuY3Rpb24uIE5vdGUgdGhhdCBlYWNoIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzXHJcbiAqIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkIHRvIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlclxyXG4gKiBnb2VzIHVwIHRvIDEuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY291bnQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxyXG5cdFx0XHRydWxlQ29udGFpbmVyLmFjdGl2YXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kXHJcbiAqIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUluc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspXHJcblx0XHRcdHJ1bGVDb250YWluZXIuZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiB0byB0aGUgZ2l2ZW4gc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUluc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbntcclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdCAgICBydWxlQ29udGFpbmVyLnNlcmlhbGl6ZVJ1bGVzKCBjdHgpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUN1c3RvbVZhciwgT25lT3JNYW55fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge0V4dGVuZGVkU3R5bGVzZXQsIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7XHJcblx0UHNldWRvRW50aXR5LCBDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzLCBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eVxyXG59IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwcm9wZXJ0aWVzIHVzZWQgaW4gdGhlIFtbQ29tYmluZWRTdHlsZXNldF1dIHdoaWNoIGFyZSB1c2VkIHRvIGRlZmluZSBkZXBlbmRlbnQgcnVsZXMgKi9cclxuZXhwb3J0IHR5cGUgU2VsZWN0b3JDb21iaW5hdG9yID0gXCImXCIgfCBcIiYsXCIgfCBcIiYgXCIgfCBcIiY+XCIgfCBcIiYrXCIgfCBcIiZ+XCIgfCBcIiwmXCIgfCBcIiAmXCIgfCBcIj4mXCIgfCBcIismXCIgfCBcIn4mXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29tYmluZWRTdHlsZXNldCB0eXBlIGV4dGVuZHMgdGhlIFN0eWxlc2V0IHR5cGUgd2l0aCBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBwcm92aWRlXHJcbiAqIGFkZGl0aW9uYWwgbWVhbmluZyB0byB0aGUgc3R5bGVzZXQgYW5kIGFsbG93IGJ1aWxkaW5nIGRlcGVuZGVudCBzdHlsZSBydWxlczpcclxuICogLSBUaGUgYCtgIHByb3BlcnR5IHNwZWNpZmllcyBvbmUgb3IgbW9yZSBwYXJlbnQgc3R5bGUgcnVsZXMuIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmdcclxuICogICBwYXJlbnQgcnVsZXMgdXNpbmcgYSBjb252ZW5pZW50IHN0eWxlLXByb3BlcnR5LWxpa2Ugbm90YXRpb24uXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIHBzZXVkbyBjbGFzcyBuYW1lcyAoZS5nLiBcIjpob3ZlclwiKSBvciBwc2V1ZG8gZWxlbWVudCBuYW1lcyAoZS5nLiBcIjo6YWZ0ZXJcIikuXHJcbiAqICAgVGhlc2UgcHJvcGVydGllcyBkZWZpbmUgYSBzdHlsZXNldCB0aGF0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHNlbGVjdG9yIG9idGFpbmVkIGJ5IHVzaW5nXHJcbiAqICAgdGhlIG9yaWdpbmFsIHN0eWxlc2V0J3Mgb3duZXIgZm9sbG93ZWQgYnkgdGhlIGdpdmVuIHBzZXVkbyBjbGFzcyBvciBwc2V1ZG8gZWxlbWVudC5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggbmFtZXMgb2YgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyAoZS5nLiBcIjpudGgtY2hpbGRcIikgb3IgcGFyYW1ldGVyaXplZFxyXG4gKiAgIHBzZXVkbyBlbGVtZW50cyAoZS5nLiBcIjo6c2xvdHRlZFwiKS4gVGhlc2UgcHJvcGVydGllcyBjb250YWluIGEgdHVwbGUsIHdoZXJlIHRoZSBmaXJzdFxyXG4gKiAgIGVsZW1lbnQgaXMgdGhlIHBhcmFtZXRlciBmb3IgdGhlIHNlbGVjdG9yIGFuZCB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgdGhlIHN0eWxlc2V0LlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIHRoZSBhbXBlcnNhbmQgc3ltYm9sICgnJicpIHRoYXQgY29udGFpbiBhcnJheXMgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIGVhY2hcclxuICogICBkZWZpbmluZyBhIHNlbGVjdG9yIGFuZCBhIHN0eWxlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBzZWxlY3Rvci4gU2VsZWN0b3JzIGNhbiB1c2UgdGhlXHJcbiAqICAgYW1wZXJzYW5kIHN5bWJvbCB0byByZWZlciB0byB0aGUgcGFyZW50IHN0eWxlIHNlbGVjdG9yLiBJZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpcyBub3QgdXNlZCxcclxuICogICB0aGUgc2VsZWN0b3Igd2lsbCBiZSBzaW1wbHkgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBzZWxlY3Rvci5cclxuICogXHJcbiAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBzdHlsZSBydWxlcyAoZS5nLiAkY2xhc3MpIGFjY2VwdCB0aGUgQ29tYmluZWRTdHlsZXNldCBhcyBhIHBhcmFtZXRlcixcclxuICogZm9yIGV4YW1wbGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIE15U3R5bGVzIGV4dGVuZHMgY3NzLlN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICBjbGFzczEgPSBjc3MuJGNsYXNzKHt9KVxyXG4gKiAgICAgY2xhc3MyID0gY3NzLiRjbGFzcyh7XHJcbiAqICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAqICAgICAgICAgXCI6aG92ZXJcIiA6IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiB9LFxyXG4gKiAgICAgICAgIFwiJlwiOiBbXHJcbiAqICAgICAgICAgICAgIFsgXCJsaSA+ICZcIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSBdLFxyXG4gKiAgICAgICAgICAgICBbIHRoaXMuY2xhc3MxLCB7IGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiB9IF1cclxuICogICAgICAgICBdXHJcbiAqICAgICB9KVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhpcyB3aWxsIHRyYW5zbGF0ZSB0byB0aGUgZm9sbG93aW5nIENTUyAoY2xhc3MgbmFtZSBpcyBhdXRvLWdlbmVyYXRlZCk6XHJcbiAqIFxyXG4gKiBgYGBjc3NcclxuICogLm0xMjMgeyBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlOyB9XHJcbiAqIC5tMTIzOmhvdmVyIHsgYmFja2dyb3VuZENvbG9yOiBncmV5OyB9XHJcbiAqIGxpID4gLm0xMjMgeyBiYWNrZ3JvdW5kQ29sb3I6IHllbGxvdzsgfVxyXG4gKiAubTEyMy5tMTIyIHsgYmFja2dyb3VuZENvbG9yOiBvcmFuZ2U7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21iaW5lZFN0eWxlc2V0ID0gU3R5bGVzZXQgJlxyXG5cdHsgXCIrXCI/OiBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdIH0gJlxyXG5cdHsgW0sgaW4gUHNldWRvRW50aXR5XT86IENvbWJpbmVkU3R5bGVzZXQgfSAmXHJcblx0eyBbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eV0/OiBbSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlbS10sIENvbWJpbmVkU3R5bGVzZXRdW10gfSAmXHJcblx0eyBbSyBpbiBTZWxlY3RvckNvbWJpbmF0b3JdPzogW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdIH07XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcyB0aGF0IGhhdmUgYSBuYW1lOyB0aGF0IGlzLFxyXG4gKiBjbGFzcywgSUQsIGtleWZyYW1lcyBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHJ1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGRlcGVuZGVudCBydWxlcyBvZiBhIHN0eWxlIHJ1bGVcclxuICovXHJcbmV4cG9ydCB0eXBlIERlcGVuZGVudFJ1bGVzID1cclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIGtleW9mIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XT86IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGluZyBydWxlIGluIGEgc3R5bGUgc2hlZXQuIFN0eWxlIHJ1bGVzIGNhbiBiZSB1c2VkXHJcbiAqIGFueXdoZXJlIHdoZXJlIHN0eWxlIHByb3BlcnRpZXMgY2FuIGJlIGRlZmluZWQ6IGNsYXNzIHJ1bGVzLCBJRCBydWxlcywgc2VsZWN0b3IgcnVsZXMsXHJcbiAqIGtleWZyYW1lcywgZXRjLiBTdHlsZVJ1bGUgZGVmaW5lcyBhIHN0eWxlc2V0IGFuZCBjYW4gb3B0aW9uYWxseSBwb2ludCB0byBvbmUgb3IgbW9yZSBzdHlsZSBydWxlc1xyXG4gKiBmcm9tIHdoaWNoIGl0IGluaGVyaXRzLiBBIHN0eWxlc2V0IGNvbWJpbmVzIGFsbCB0aGUgcHJvcGVydGllcyBmcm9tIGl0cyBvd24gcHJvcGVydHkgYmxvY2sgYXNcclxuICogd2VsbCBhcyBmcm9tIGFsbCBvZiBzdHlsZSBydWxlcyBpdCBpbmhlcml0ZXMgZnJvbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cmVhZG9ubHkgc2VsZWN0b3JUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHNldFByb3A8SyBleHRlbmRzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQ+KCBuYW1lOiBLLCB2YWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSxcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIGN1c3RvbVZhciBJVmFyUnVsZSBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIGN1c3RvbVZhcjogSVZhclJ1bGU8Sz4sIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZFN0eWxlUnVsZSBpbnRlcmZhY2UgY29tYmluZXMgSVN0eWxlUnVsZSBhbmQgSU5hbWVkRW50aXR5IGludGVyZmFjZXMuIFRoaXMgaXMgdXNlZFxyXG4gKiBmb3IgY2xhc3MgYW5kIElEIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGNsYXNzIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc1J1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjbGFzcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cmVhZG9ubHkgY3NzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NOYW1lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNvbWJpbmF0aW9uIG9mIHR3byBvciBtb3JlIGNsYXNzIG5hbWVzLiBJdCBjYW4gYmVcclxuICogdXNlZCB0byBtYWtlIGl0IGVhc2llciB0byBjcmVhdGUgZWxlbWVudHMgd2l0aCBtb3JlIHRoYW4gb25lIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzTmFtZVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBOYW1lIG9mIGFsbCB0aGUgY2xhc3MgbmFtZXMgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0NsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUlEUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGVsZW1lbnQgSUQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJRFJ1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRyZWFkb25seSBjc3NJRE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbldheXBvaW50IHR5cGUgZGVmaW5lcyBhIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSB3YXlwb2ludCBpbiBhblxyXG4gKiBhbmltYXRpb24gc2VxdWVuY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25XYXlwb2ludCA9IE9uZU9yTWFueTxcImZyb21cIiB8IFwidG9cIiB8IG51bWJlcj47XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblN0eWxlcyB0eXBlIGRlZmluZXMgYSBvYmplY3QgY29udGFpbmluZyBzdHlsZSBwcm9wZXJ0aWVzIGZvciBhbiBhbmltYXRpb24gZnJhbWUuXHJcbiAqIFN0eWxlc2V0cyBmb3Iga2V5ZnJhbWVzIGFsbG93IGN1c3RvbSBwcm9wZXJ0aWVzICh2aWEgXCItLVwiKS4gQW5pbWF0aW9uIHN0eWxlc2V0IGNhbiBleHRlbmRcclxuICogb3RoZXIgc3R5bGUgcnVsZXM7IGhvd2V2ZXIsIGFueSBkZXBlbmRlbnQgcnVsZXMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3R5bGVzZXQgPSBTdHlsZXNldCAmIHsgXCIrXCI/OiBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdIH07XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lIHR5cGUgZGVmaW5lcyBhIHNpbmdsZSBrZXlmcmFtZSB3aXRoaW4gYSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIFRoZSB3YXlwb2ludCBjYW4gYmUgc3BlY2lmaWVkIGFzIFwiZnJvbVwiIG9yIFwidG9cIiBzdHJpbmdzIG9yIGFzIGEgbnVtYmVyIDAgdG8gMTAwLCB3aGljaCB3aWxsIGJlXHJcbiAqIHVzZWQgYXMgYSBwZXJjZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRnJhbWUgPSBbQW5pbWF0aW9uV2F5cG9pbnQsIEFuaW1hdGlvblN0eWxlc2V0XTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvblJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGtleWZyYW1lc11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRyZWFkb25seSBmcmFtZVJ1bGVzOiBJQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvbkZyYW1lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNpbmdsZSBmcmFtZSBpbiB0aGUgQGtleWZyYW1lcyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50ICovXHJcblx0cmVhZG9ubHkgd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50O1xyXG5cclxuXHQvKiogU09NIGtleWZyYW1lIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdmFyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYXJSdWxlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+IGV4dGVuZHMgSU5hbWVkRW50aXR5LCBJQ3VzdG9tVmFyPFZhclZhbHVlVHlwZTxLPj5cclxue1xyXG5cdC8qKiBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuICovXHJcblx0cmVhZG9ubHkgdGVtcGxhdGU6IEs7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ291bnRlclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBuYW1lZCBjb3VudGVyIGRlZmluaXRpb24uIFVzZSB0aGlzIHJ1bGUgdG8gY3JlYXRlXHJcbiAqIGNvdW50ZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIGluIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZVxyXG4gKiBwcm9wZXJ0aWVzLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBjb3VudGVycyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlXHJcbiAqIGNvdW50ZXIgZGVmaW5pdGlvbnMuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRjb3VudGVyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudGVyUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRyZWFkb25seSBjb3VudGVyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAY291bnRlci1zdHlsZSBydWxlLlxyXG4vLyAgKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlclN0eWxlXV0gZnVuY3Rpb24uXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElDb3VudGVyU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGUsIElOYW1lZEVudGl0eVxyXG4vLyB7XHJcbi8vIFx0LyoqIFNPTSBjb3VudGVyLXN0eWxlIHJ1bGUgKi9cclxuLy8gXHRyZWFkb25seSBjc3NSdWxlOiBDU1NDb3VudGVyU3R5bGVSdWxlIHwgbnVsbDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJbXBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skaW1wb3J0XV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbXBvcnRSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gaW1wb3J0IHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NJbXBvcnRSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElGb250RmFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAZm9udC1mYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRmb250ZmFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9udEZhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NGb250RmFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVzcGFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRuYW1lc3BhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gbmFtZXNwYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NOYW1lc3BhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYWdlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRwYWdlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cmVhZG9ubHkgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NQYWdlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JpZExpbmVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZGVmaW5pdGlvbiBvZiBhIG5hbWVkIGdyaWQgbGluZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGdyaWRsaW5lXV0gZnVuY3Rpb24gb3IgY3JlYXRlZFxyXG4gKiB3aGVuIGEgZ3JpZCBhcmVhIGlzIGRlZmluZWQgdXNpbmcgdGhlIFtbJGdyaWRhcmVhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkTGluZVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGluZSBpcyBhIHN0YXJ0IG9yIGVuZCBsaW5lIG9mIGEgZ3JpZCBhcmVhLiBUaGUgdmFsdWUgaXMgdHJ1ZVxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgc3RhcnQgbGluZTsgZmFsc2UgaWYgdGhpcyBpcyB0aGUgZW5kIGxpbmU7IGFuZCB1bmRlZmluZWQgaWYgdGhlIGxpbmUgaXNcclxuICAgICAqIG5vdCByZWxhdGVkIHRvIGFueSBhcmVhLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGdyaWQgYXJlYSBvZiB3aGljaCB0aGUgbGluZSBpcyBlaXRoZXIgYSBzdGFydCBvciBhbiBlbmQgbGluZS4gSXQgaXMgZGVmaW5lZFxyXG4gICAgICogb25seSBpZiB0aGUgbGluZSBuYW1lIGVuZHMgd2l0aCBcIi1zdGFydFwiIG9yIFwiLWVuZFwiLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBhcmVhTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyaWRBcmVhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRlZmluaXRpb24gb2YgYSBuYW1lZCBncmlkIGFyZS4gR3JpZCBhcmVhIHJ1bGVcclxuICogZGVmaW5lcyB0d28gbGluZSBydWxlczogZm9yIGl0cyBzdGFydCBhbmQgZW5kIGxpbmVzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZ3JpZGFyZWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRBcmVhUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcbiAgICAvKiogU3RhcnQgbGluZSBvZiB0aGUgYXJlYS4gKi9cclxuICAgIHJlYWRvbmx5IHN0YXJ0TGluZTogSUdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvKiogRW5kIGxpbmUgb2YgdGhlIGFyZWEuICovXHJcbiAgICByZWFkb25seSBlbmRMaW5lOiBJR3JpZExpbmVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBgJHBhcmVudGAgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZVxyXG4gKiB0byB0aGUgcGFybnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gRGV2ZWxvcGVycyBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYWNjZXNzIHJ1bGVzIGluXHJcbiAqIHRoZSBjaGFpbiBvZiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMuIFdlIG5lZWQgdGhpcyBzeW1ib2wgdG8gYXZvaWQgZW51bWVyYXRpbmcgdGhlIGAkcGFyZW50YFxyXG4gKiBwcm9wZXJ0eSB3aGVuIHByb2Nlc3NpbmcgdGhlIHJ1bGVzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmNvbnN0IHN5bVBhcmVudCA9IFN5bWJvbChcInBhcmVudFwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbCB0aGF0IGlzIHVzZWQgYnkgdGhlIGAkb3duZXJgIHByb3BlcnR5IGluIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgdGhhdCBrZWVwcyByZWZlcmVuY2VcclxuICogdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBEZXZlbG9wZXJzIGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhY2Nlc3MgcnVsZXMgaW5cclxuICogdGhlIGNoYWluIG9mIG5lc3RlZCBncm91cGluZyBydWxlcy4gV2UgbmVlZCB0aGlzIHN5bWJvbCB0byBhdm9pZCBlbnVtZXJhdGluZyB0aGUgYCRvd25lcmBcclxuICogcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBzeW1Pd25lciA9IFN5bWJvbChcIm93bmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBjbGFzc2VzIHRoYXQgY29udGFpbiBkZWZpbmluaXRpb25zIG9mIENTUyBydWxlcy5cclxuICogQHR5cGVwYXJhbSBQIFBhcmVudCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBQYXJlbnQgb2YgdG9wLWx2ZWwgY2xhc3MgaXMgbnVsbC5cclxuICogQHR5cGVwYXJhbSBPIFRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBjbGFzcy4gVGhlIHRvcC1sZXZlbFxyXG4gKiBjbGFzcyBpcyBpdHMgb3duIG93bmVyLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlRGVmaW5pdGlvbjxQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFyZSBjcmVhdGVkIGRpcmVjdGx5IG9ubHkgYnkgdGhlICpzdHlsZWQgY29tcG9uZW50cyogLSB0aGF0IGlzLFxyXG5cdCAqIGNvbXBvbmVudHMgdGhhdCB1c2UgZGlmZmVyZW50IHN0eWxlcyBmb3IgZWFjaCBpbnN0YW5jZS4gT3RoZXJ3aXNlLCBzdHlsZSBkZWZpbml0aW9uXHJcblx0ICogY2xhc3MgaW5zdGFuY2VzIGFyZSBjcmVhdGVkIHdoZW4gZWl0aGVyIHRoZSBbWyR1c2VdXSBvciBbW2FjdGl2YXRlXV0gZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSBwYXJlbnQgUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcGFyZW50PzogUClcclxuXHR7XHJcblx0XHR0aGlzW3N5bVBhcmVudF0gPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIC8vIE93bmVyIGlzIHRha2VuIGZyb20gdGhlIHBhcmVudCBjbGFzczsgYSB0b3AtbGV2ZWwgY2xhc3MgaXMgaXRzIG93biBvd25lci5cclxuXHRcdHRoaXNbc3ltT3duZXJdID0gcGFyZW50ID8gcGFyZW50LiRvd25lciA6IHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBwYXJudCBvZiB0aGlzIHN0eWxlXHJcbiAgICAgKiBkZWZpbml0aW9uIG9iamVjdCBpbiB0aGUgY2hhaW4gb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLiBUaHJvdWdoIHRoaXMgbWVtYmVyLCBhbGwgcnVsZXNcclxuICAgICAqIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIHBhcmVudCBkZWZpbml0aW9uIGNsYXNzIGNhbiBiZSBhY2Nlc3NlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0ICRwYXJlbnQoKTogUCB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBvd25lciBvZlxyXG5cdCAqIHRoaXMgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuIFRoZSBvd25lciBpcyB0aGUgdG9wLWxldmVsIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBzdHlsZVxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhyb3VnaCB0aGlzIG1lbWJlciwgYWxsIHJ1bGVzIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIG93bmVyXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCAkb3duZXIoKTogTyB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZURlZmluaXRpb25DbGFzczxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPFAsTz4gPSBhbnksXHJcbiAgICBQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqIEFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldyggcGFyZW50PzogUCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JvdXBSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZ3JvdXBpbmcgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHJlYWRvbmx5IHJ1bGVzOiBUO1xyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3VwcG9ydHNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRlZCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcnVsZSdzIHF1ZXJ5ICovXHJcbiAgICByZWFkb25seSBpc1N1cHBvcnRlZDogYm9vbGVhbjtcclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNZWRpYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbWVkaWEgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG1lZGlhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGVyVHlwZSBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgdXNlZCB0byBkZWZpbmUgaG93IHRoZSBjYWxscyB0byB0aGVcclxuICogYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHNjaGVkdWxlIHRoZSB3cml0aW5nIG9mIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFNjaGVkdWxlclR5cGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFN5bmNocm9ub3VzIGFjdGl2YXRpb24gLSBzdHlsZSBkZWZpbml0aW9ucyBhcmUgd3JpdHRlbiB0byB0aGUgRE9NIHVwb24gdGhlIGFjdGl2YXRlXHJcblx0ICogYW5kIGRlYWN0aXZhdGUgY2FsbHMuXHJcblx0ICovXHJcblx0U3luYyA9IDEsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIG5leHQgYW5pbWF0aW9uXHJcblx0ICogZnJhbWUgYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0QW5pbWF0aW9uRnJhbWUsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIGNhbGwgdG8gdGhlXHJcblx0ICogZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0TWFudWFsLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNjaGVkdWxlciBpbnRlcmZhY2Ugc2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IGN1c3RvbSBzY2hlZHVsZXJzLiBJdHMgbWV0aG9kcyBhcmUgaW52b2tlZFxyXG4gKiBieSB0aGUgYWN0aXZhdGlvbiBpbmZyYXN0cnVjdHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzY2hlZHVsZXIgb2JqZWN0IGFuZCBwcm92aWRlcyB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZVxyXG4gICAgICogc2NoZWR1bGVyIGRlY2lkZXMgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKTtcclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufSIsImltcG9ydCB7U2NoZWR1bGVyVHlwZSwgU3R5bGVEZWZpbml0aW9uLCBJU2NoZWR1bGVyfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHthY3RpdmF0ZUluc3RhbmNlLCBkZWFjdGl2YXRlSW5zdGFuY2V9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtTdHJpbmdTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFjdGl2YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgcmVzcG9uc2libGUgZm9yIGEgY2VydGFpbiB0eXBlIG9mIGFjdGl2YXRpb25cclxuICogbWVjaGFuaXNtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aXZhdG9yXHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGRlYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBzZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gICAgICogQ1NTIHN0eWxlIG9iamVjdC5cclxuXHQgKi9cclxuICAgIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0Zm9yY2VET01VcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbERPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICogQ1NTIHN0eWxlIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcbntcclxuICAgIGlmICghbmFtZSAmJiB2YWx1ZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChydWxlT3JFbG0gaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5jc3NUZXh0ID0gXCJcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIChydWxlT3JFbG0gYXMgYW55IGFzIEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggbmFtZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlIGFzIHN0cmluZywgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHlsZXNldCA9IHZhbHVlIGFzIFN0cmluZ1N0eWxlc2V0O1xyXG4gICAgICAgIGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGVbcHJvcE5hbWVdID0gc3R5bGVzZXRbcHJvcE5hbWVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3luY2hyb25vdXNBY3RpdmF0b3IgY2xhc3MgcmVwcmVzZW50cyB0aGUgc3luY2hyb25vdXMgYWN0aXZhdGlvbiBtZWNoYW5pc20sIHdoaWNoIHdyaXRlc1xyXG4gKiBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00gd2hlbiB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXHJcbiAqL1xyXG5jbGFzcyBTeW5jaHJvbm91c0FjdGl2YXRvciBpbXBsZW1lbnRzIElBY3RpdmF0b3Jcclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqIEBwYXJhbSBkZWZpbml0aW9uXHJcblx0ICovXHJcblx0cHVibGljIGFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0YWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogZGVhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICogQHBhcmFtIGRlZmluaXRpb25cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGRlYWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gc2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICAgICAqIENTUyBzdHlsZSBvYmplY3QuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsIG5hbWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBmb3JjZURPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZm9yY2VET01VcGRhdGUoKTogdm9pZCB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZCB7fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIG9iamVjdHMgdGhhdCBhcmUgdXNlZCBieSB0aGUgU2NoZWR1bGluZ0FjdGl2YXRvciBjbGFzcyBmb3Igc2V0dGluZyBwcm9wZXJ0eSB2YWx1ZXMuXHJcbiAqIFdoZW4gYm90aCBuYW1lIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGFyZSBudWxsLCB0aGUgc3R5bGUgd2lsbCBiZSBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nXHJcbiAqIGVmZmVjdGl2ZWx5IHJlbW92aW5nIGFsbCBzdHlsZXMgZnJvbSB0aGUgZWxlbWVudCBvciB0aGUgcnVsZS5cclxuICovXHJcbmludGVyZmFjZSBTY2hlZHVsZWRTdHlsZVByb3BWYWx1ZVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBTdHlsZSBvYmplY3QgaW4gd2hpY2ggdG8gc2V0IHRoZSBwcm9wZXJ0eSB2YWx1ZS4gVGhlIHN0eWxlIG9iamVjdCBjYW4gYmVsb25nIHRvIGVpdGhlciBhXHJcbiAgICAgKiBzdHlsZSBydWxlZSBvciB0byBhbiBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuXHRydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBEYXNoZS1jYXNlZCBwcm9wZXJ0eSBuYW1lIGlmIHNldHRpbmcgYSB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvciBudWxsIGlmIHNldHRpbmcgdmFsdWVzXHJcbiAgICAgKiBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0bmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBQcm9wZXJ0eSB2YWx1ZSBpZiBzZXR0aW5nIGEgdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBTdHJpbmdTdHlsZXNldCBvYmplY3QgaWYgc2V0dGluZ1xyXG4gICAgICogdmFsdWVzIG9mIG11bHRpcGxlIHByb3BlcnRpZXMuIElmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgaXQgaXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG5cdHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgbWFya2VkIFwiIWltcG9ydGFudFwiLiBUaGlzIGZsYWcgaXMgaWdub3JlZFxyXG4gICAgICogd2hlbiBzZXR0aW5nIHZhbHVlcyBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0aW1wb3J0YW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxpbmdBY3RpdmF0b3IgY2xhc3Mga2VlcHMgYSBtYXAgb2YgU3R5bGVEZWZpbml0aW9uIGluc3RhbmNlcyB0aGF0IGFyZSBzY2hlZHVsZWQgZm9yXHJcbiAqIGFjdGl2YXRpb24gb3IgZGVhY3RpdmF0aW9uLiBFYWNoIGluc3RhbmNlIGlzIG1hcHBlZCB0byBhIHJlZmVybmNlIGNvdW50LCB3aGljaCBpcyBpbmNyZW1lbnRlZFxyXG4gKiB1cG9uIHRoZSBhY3RpdmF0ZSBjYWxscyBhbmQgZGVjcmVtZW50ZWQgdXBvbiB0aGUgZGVhY3RpdmF0ZSBjYWxscy4gV2hlbiB0aGUgZG9BY3RpdmF0aW9uXHJcbiAqIG1ldGhvZCBpcyBjYWxsZWQgVGhlIHN0eWxlIGRlZmluaXRpb24gd2lsbCBiZSBlaXRoZXIgYWN0aXZhdGVkIG9yIGRlYWN0aXZhdGVkIGJhc2VkIG9uIHdoZXRoZXJcclxuICogdGhlIHJlZmVyZW5jZSBjb3VudCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsaW5nQWN0aXZhdG9yIGltcGxlbWVudHMgSUFjdGl2YXRvclxyXG57XHJcbiAgICAvLyBNYXAgb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbnN0YW5jZXMgdG8gdGhlIHJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25zID0gbmV3IE1hcDxTdHlsZURlZmluaXRpb24sbnVtYmVyPigpO1xyXG5cclxuICAgIC8vIEFycmF5IG9mIHN0eWxlIHByb3BlcnR5IHZhbHVlcyB0byBiZSBzZXQvcmVtb3ZlZC5cclxuICAgIHByaXZhdGUgcHJvcHM6IFNjaGVkdWxlZFN0eWxlUHJvcFZhbHVlW10gPSBbXTtcclxuICAgIFxyXG4gICAgLy8gb3B0aW9uYWwgc2NoZWR1bGVyIG9iamVjdFxyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHNjaGVkdWxlcj86IElTY2hlZHVsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHNjaGVkdWxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlci5pbml0KCAoKSA9PiB0aGlzLmRvRE9NVXBkYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5kZWxldGUoIGRlZmluaXRpb24pO1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGVET01VcGRhdGUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5zZXQoIGRlZmluaXRpb24sICsrcmVmQ291bnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLmRlbGV0ZSggZGVmaW5pdGlvbik7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuc2V0KCBkZWZpbml0aW9uLCAtLXJlZkNvdW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIHNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAgICAgKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5wdXNoKHsgcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50IH0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGluIG91ciBpbnRlcm5hbCBtYXAuXHJcblx0ICovXHJcblx0cHVibGljIGZvcmNlRE9NVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID4gMCB8fCB0aGlzLnByb3BzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcbiAgICAgICAgICAgIHRoaXMuZG9ET01VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbmNlbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA+IDAgfHwgdGhpcy5wcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyQWN0aXZhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5kIHByb3BlcnR5IHNldCBvcGVyYXRpb25zIGFjY3VtdWxhdGVkIGludGVybmFsbHkuIFRoaXNcclxuICAgICAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCBieSB0aGUgZGVyaXZlZCBjbGFzc2VzIHdoZW4gc2NoZWR1bGVkIGFjdGl2YXRpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIGFjdGl2YXRlL2RlYWN0aXZhdGUgc3R5bGUgZGVmaW5pdGlvbnNcclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuZm9yRWFjaCggKHJlZkNvdW50OiBudW1iZXIsIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbikgPT5cclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlZkNvdW50ID4gMClcclxuXHRcdFx0XHRhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCByZWZDb3VudCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkZWFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIC1yZWZDb3VudCk7XHJcblx0XHR9KVxyXG5cclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdHRoaXMucHJvcHMuZm9yRWFjaCggcHJvcCA9PiB1cGRhdGVTdHlsZVByb3BlcnR5KCBwcm9wLnJ1bGVPckVsbSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlLCBwcm9wLmltcG9ydGFudCkpO1xyXG5cdFx0dGhpcy5wcm9wcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcnMgYWxsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGRhdGEgZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY2xlYXJBY3RpdmF0aW9uKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBbXTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVNjaGVkdWxlciBpbXBsZW1lbnRzIHNjaGVkdWxpbmcgdXNpbmcgYW5pbWF0aW9uIGZyYW1lcy5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIGltcGxlbWVudHMgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBIYW5kbGUgcmV0dXJuZWQgYnkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVxdWVzdEhhbmRsZSA9IDA7XHJcblxyXG4gICAgLy8gQ2FsbGJhY2sgdG8gY2FsbCB0byB3cml0ZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSA9IGRvRE9NVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2NoZWR1bGVET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKHRoaXMucmVxdWVzdEhhbmRsZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlcXVlc3RIYW5kbGUpO1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIGFuaW1hdGlvbiBmcmFtZSBzaG91bGQgYmUgZXhlY3V0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBvbkFuaW1hdGlvbkZyYW1lID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0dGhpcy5kb0RPTVVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2NoZWR1bGVzIHRoZSB1cGRhdGUgb2YgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhlIGdpdmVuIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLFxyXG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbCwgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsXHJcbiAgICBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+XHJcblx0XHRhY3RpdmF0b3Iuc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50KSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlcyBjYWxsaW5nIG9mIHRoZSBnaXZlbiBmdW5jdGlvbiB1c2luZyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZUNhbGwoIGZ1bmM6IChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IHZvaWQsIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgYWN0aXZhdG9yID0gc2NoZWR1bGVyVHlwZSA9PSBudWxsID8gc19kZWZhdWx0QWN0aXZhdG9yIDogc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5nZXQoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgaWYgKGFjdGl2YXRvcilcclxuXHRcdGZ1bmMoIGFjdGl2YXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfZGVmYXVsdFNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGRlZmF1bHQgc2NoZWR1bGluZyB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxpbmcgcGFyYW1ldGVyLiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZVxyXG4gKiBwcmV2aW91cyBkZWZhdWx0IGFjdGl2YXRvciBvciAwIGlmIGFuIGVycm9yIG9jY3VycyAoZS5nLiB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgSUQgaXMgbm90XHJcbiAqIHJlZ2lzdGVyZWQpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGU6IG51bWJlcik6IG51bWJlclxyXG57XHJcbiAgICAvLyBjaGVjayB0aGF0IHRoZSBnaXZlbiBudW1iZXIgaXMgaW4gb3VyIG1hcCBvZiByZWdpc3RlcmVkIGFjdGl2YXRvcnNcclxuICAgIGxldCBhY3RpdmF0b3IgPSBzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLmdldCggc2NoZWR1bGVyVHlwZSk7XHJcblx0aWYgKCFhY3RpdmF0b3IpXHJcblx0XHRyZXR1cm4gMDtcclxuXHJcblx0bGV0IHByZXZTY2hlZHVsZXJUeXBlID0gc19kZWZhdWx0U2NoZWR1bGVyVHlwZTtcclxuICAgIHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPSBzY2hlZHVsZXJUeXBlO1xyXG4gICAgc19kZWZhdWx0QWN0aXZhdG9yID0gYWN0aXZhdG9yO1xyXG5cdHJldHVybiBwcmV2U2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzY2hlZHVsZXIgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLCB3aGljaFxyXG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcjogSVNjaGVkdWxlcik6IG51bWJlclxyXG57XHJcblx0Ly8gZ2V0IHRoZSByZWdpc3RyYXRpb24gSUQgZm9yIHRoaXMgc2NoZWR1bGVyXHJcblx0bGV0IGlkID0gc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZSsrO1xyXG5cdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBpZCwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoIHNjaGVkdWxlcikpO1xyXG5cdHJldHVybiBpZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlcnMgYSBzY2hlZHVsZXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc191bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0aWYgKGlkID49IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlKVxyXG5cdHtcclxuXHRcdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuZGVsZXRlKCBpZCk7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGRlbGV0ZWQgc2NoZWR1bGVyIHdhcyBvdXIgZGVmYXVsdCBvbmUsIHdlIHNldCB0aGUgZGVmYXVsdCB0byBTWU5DXHJcbiAgICAgICAgaWYgKHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPT09IGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19kZWZhdWx0U2NoZWR1bGVyVHlwZSA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuICAgICAgICAgICAgc19kZWZhdWx0QWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyLiBUaGlzIHNjaGVkdWxlciB3aWxsIGJlIHVzZWQgaWYgc2NoZWR1bGVyIHR5cGUgaXMgbm90IGV4cGxpY2l0bHlcclxuICogc3BlY2lmaWVkIGluIGNhbGxzIHN1Y2ggYXMgYWN0aXZhdGUgb3IgSVN0eWxlUnVsZS5zZXRQcm9wLlxyXG4gKi9cclxubGV0IHNfZGVmYXVsdFNjaGVkdWxlclR5cGU6IG51bWJlciA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuXHJcbi8qKlxyXG4gKiBTeW5jaHJvbm91cyBhY3RpdmF0b3IgaW5zdGFuY2UuXHJcbiAqL1xyXG5sZXQgc19zeW5jaHJvbm91c0FjdGl2YXRvciA9IG5ldyBTeW5jaHJvbm91c0FjdGl2YXRvcigpO1xyXG5cclxuLyoqXHJcbiAqIEN1cnJlbnQgZGVmYXVsdCBhY3RpdmF0b3IuIFRoaXMgYWN0aXZhdG9yIHdpbGwgYmUgdXNlZCBpZiBzY2hlZHVsZXIgdHlwZSBpcyBub3QgZXhwbGljaXRseVxyXG4gKiBzcGVjaWZpZWQgaW4gY2FsbHMgc3VjaCBhcyBhY3RpdmF0ZSBvciBJU3R5bGVSdWxlLnNldFByb3AuXHJcbiAqL1xyXG5sZXQgc19kZWZhdWx0QWN0aXZhdG9yOiBJQWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBmaXJzdCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqIEFsbCBjdXN0b20gc2NoZWR1bGVyIGlkZW50aWZpZXJzIGFyZSBncmVhdGVyIG9yIGVxdWFsIHRvIHRoaXMgbnVtYmVyLlxyXG4gKi9cclxuY29uc3Qgc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU6IG51bWJlciA9IDEwMDE7XHJcblxyXG4vKipcclxuICogU2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciB0byBiZSBhc3NpZ25lZCB0byB0aGUgbmV4dCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5sZXQgc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZTogbnVtYmVyID0gc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcmVnaXN0ZXJlZCBidWlsdC1pbiBhbmQgY3VzdG9tIGFjdGl2YXRvcnMuXHJcbiAqL1xyXG5sZXQgc19yZWdpc3RlcmVkQWN0aXZhdG9ycyA9IG5ldyBNYXA8bnVtYmVyLElBY3RpdmF0b3I+KCk7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgYnVpbHQtaW4gYW5kIGN1c3RvbSBhY3RpdmF0b3JzLlxyXG4gKi9cclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuU3luYywgc19zeW5jaHJvbm91c0FjdGl2YXRvcik7XHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLkFuaW1hdGlvbkZyYW1lLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvciggbmV3IEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKCkpKTtcclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuTWFudWFsLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvcigpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBDb21iaW5lZFN0eWxlc2V0LCBJVmFyUnVsZSwgRGVwZW5kZW50UnVsZXMsIElOYW1lZEVudGl0eSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgSUNsYXNzTmFtZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0V4dGVuZGVkU3R5bGVzZXQsIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZSwgQ3VzdG9tVmFyX1N0eWxlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHttZXJnZVN0eWxlc2V0cywgc3R5bGVzZXRUb1N0cmluZywgc3R5bGVQcm9wVG9TdHJpbmcsIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wc30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHt2YWwyc3RyLCBjYW1lbFRvRGFzaH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCI7XHJcbmltcG9ydCB7cHNldWRvRW50aXR5VG9TdHJpbmcsIHNlbGVjdG9yVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JGdW5jc1wiO1xyXG5pbXBvcnQge3Nfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlfSBmcm9tIFwiLi9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBydWxlcyB0aGF0IGNvbnRhaW4gYSBzdHlsZSBydWxlLiBUaGlzIGNsYXNzXHJcbiAqIGltcGxlbWVudHMgdGhlIHBhcnNpbmcgb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJU3R5bGVSdWxlXHJcbntcclxuXHQvLyBUaGUgc3R5bGVzZXQgY2FuIGJlIGFuIENvbWJpbmVkU3R5bGVzZXQgZm9yIG1hbnkgcnVsZXM7IGhvd2V2ZXIsIGZvciBzb21lIGl0IGlzIGp1c3RcclxuXHQvLyBvZiB0aGUgU3R5bGVzZXQgdHlwZS5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlc2V0PzogU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlc2V0ID0ge307XHJcblx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzID0ge307XHJcblxyXG5cdFx0aWYgKHN0eWxlc2V0KVxyXG5cdFx0XHR0aGlzLnBhcnNlSW5wdXRTdHlsZXNldCggc3R5bGVzZXQgYXMgQ29tYmluZWRTdHlsZXNldCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdvZXMgb3ZlciBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlbiBzdHlsZXNldCBhbmQgcGFyc2VzIHRoZW0gaW50byBwcm9wZXIgc3R5bGVzZXQsIHNldCBvZlxyXG5cdCAqIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFuZCBkZXBlbmRlbnQgcnVsZXMuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZUlucHV0U3R5bGVzZXQoIGlucHV0U3R5bGVzZXQ6IENvbWJpbmVkU3R5bGVzZXQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBwYXJlbnRzLCB3ZSBmaXJzdCBjb3B5IHByb3BlcnRpZXMgZnJvbSB0aGVtIHNvIHRoYXQgb3VyIG93biBwcm9wZXJ0aWVzXHJcblx0XHQvLyBjYW4gb3ZlcnJpZGUgdGhlbS5cclxuXHRcdGlmIChpbnB1dFN0eWxlc2V0W1wiK1wiXSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gdGhlIHZhbHVlIGlzIGEgc2luZ2xlIFN0eWxlUnVsZSBvciBhbiBhcnJheSBvZiBTdHlsZVJ1bGVzIHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXHJcblx0XHRcdGxldCBleHRlbmRzUHJvcFZhbCA9IGlucHV0U3R5bGVzZXRbXCIrXCJdIGFzIChTdHlsZVJ1bGUgfCBTdHlsZVJ1bGVbXSk7XHJcblx0XHRcdGxldCBwYXJlbnRSdWxlczogU3R5bGVSdWxlW107XHJcblx0XHRcdGlmIChleHRlbmRzUHJvcFZhbCBpbnN0YW5jZW9mIFN0eWxlUnVsZSlcclxuXHRcdFx0XHRwYXJlbnRSdWxlcyA9IFtleHRlbmRzUHJvcFZhbF07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRwYXJlbnRSdWxlcyA9IGV4dGVuZHNQcm9wVmFsO1xyXG5cclxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBwYXJlbnQgcnVsZXMsIGNvcHkgc3R5bGVzZXRzIGFuZCBkZXBlbmRlbnQgcnVsZXMgZnJvbSB0aGVtLlxyXG5cdFx0XHRpZiAocGFyZW50UnVsZXMgJiYgcGFyZW50UnVsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmVudFJ1bGVzLmZvckVhY2goIHBhcmVudCA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHRcdFx0XHRcdHRoaXMuY29weURlcGVuZGVudFJ1bGVzRnJvbSggcGFyZW50KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1lcmdlIGN1c3RvbSAgcHJvcGVydGllc1xyXG5cdFx0bWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0aGlzLnN0eWxlc2V0LCBpbnB1dFN0eWxlc2V0KTtcclxuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBpbnB1dFN0eWxlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBza2lwIG92ZXIgYWxyZWFkeSBwcm9jZXNzZWQgcGFyZW50cywgaW1wb3J0YW50IGFuZCBjdXN0b20gcHJvcGVydGllc1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwiK1wiIHx8IHByb3BOYW1lID09PSBcIi0tXCIpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IGlucHV0U3R5bGVzZXRbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIjpcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhpcyBpcyBhbiBhcnJheSBvZiB0dXBsZXMgcmVwcmVzZW50aW5nXHJcblx0XHRcdFx0Ly8gcGFyYW1ldGVyaXNlZCBwc2V1ZG8gZW50aXRpZXMgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHBhcmFtZXRlciB2YWx1ZVxyXG5cdFx0XHRcdC8vIChzdHJpbmcpIGFuZCB0aGUgc2Vjb25kIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBPdGhlcndpc2UsIHRoZSB2YWx1ZSBpcyBqdXN0IGFuXHJcblx0XHRcdFx0Ly8gQ29tYmluZWRTdHlsZXNldC5cclxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbYW55LCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHRcdHByb3BOYW1lLCB0dXBsZVswXSwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBuZXcgRGVwZW5kZW50UnVsZSggXCImXCIgKyBwcm9wTmFtZSwgdW5kZWZpbmVkLFxyXG5cdFx0XHRcdFx0XHRwcm9wVmFsIGFzIENvbWJpbmVkU3R5bGVzZXQsIHRoaXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcIiZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0dHVwbGVbMF0sIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiZcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdCgpID0+IHByb3BOYW1lICsgc2VsZWN0b3JUb1N0cmluZyggdHVwbGVbMF0pLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLmVuZHNXaXRoKFwiJlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0KCkgPT4gc2VsZWN0b3JUb1N0cmluZyggdHVwbGVbMF0pICsgcHJvcE5hbWUsIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdGhpcyBpcyBhIHJlZ3VsYXIgQ1NTIHByb3BlcnR5OiBjb3B5IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byBvdXIgaW50ZXJuYWwgc3R5bGVzZXRcclxuXHRcdFx0XHR0aGlzLnN0eWxlc2V0W3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgcHJvY2VzcyB0aGVtIHVuZGVyIHRoZSBzYW1lIGNvbnRhaW5lclxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwcm90ZWN0ZWQgY29weUZyb20oIHNyYzogU3R5bGVSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbiBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0IHNvIHdlIGRvbid0IGhhdmUgYW55IHByb3BlcnRpZXMgaW5cclxuXHRcdC8vIG91ciBvd24gc3R5bGVzZXQgeWV0XHJcblx0XHR0aGlzLnN0eWxlc2V0ID0gbWVyZ2VTdHlsZXNldHMoIHRoaXMuc3R5bGVzZXQsIHNyYy5zdHlsZXNldCk7XHJcblx0XHR0aGlzLmNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHNyYyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBkZXBlbmRlbnQgcnVsZXMgZnJvbSBhbm90aGVyIHN0eWxlIHJ1bGUgb2JqZWN0LlxyXG5cdHByaXZhdGUgY29weURlcGVuZGVudFJ1bGVzRnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3JjLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHNyYy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBhcnIgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAoIWFycilcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gYXJyID0gW107XHJcblxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKHNyY0RlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG5ld0RlcFJ1bGUgPSBzcmNEZXBSdWxlLmNsb25lKCkgYXMgRGVwZW5kZW50UnVsZTtcclxuXHRcdFx0XHRcdG5ld0RlcFJ1bGUuY29udGFpbmluZ1J1bGUgPSB0aGlzO1xyXG5cdFx0XHRcdFx0YXJyLnB1c2goIG5ld0RlcFJ1bGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBuZXdEZXBSdWxlID0gKHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuY2xvbmUoKSBhcyBEZXBlbmRlbnRSdWxlO1xyXG5cdFx0XHRcdG5ld0RlcFJ1bGUuY29udGFpbmluZ1J1bGUgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gbmV3RGVwUnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcnVsZS5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPT0gbnVsbClcclxuXHRcdFx0dGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9IHRoaXMuZ2V0U2VsZWN0b3JTdHJpbmcoKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZ30geyR7c3R5bGVzZXRUb1N0cmluZyggdGhpcy5zdHlsZXNldCl9fWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdHlsZVJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IHRoaXMuY2xvbmVPYmplY3QoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnN0eWxlc2V0KS5sZW5ndGggPiAwKVxyXG5cdFx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggdGhpcy50b0Nzc1N0cmluZygpLCBwYXJlbnQpIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGluc2VydCB0aGVtIHVuZGVyIHRoZSBzYW1lIHBhcmVudFxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmluc2VydCggcGFyZW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBjbGVhciB0aGVtIHRvb1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUuY2xlYXIoKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5jbGVhcigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnN0eWxlc2V0KS5sZW5ndGggPiAwKVxyXG5cdFx0XHRjdHguYWRkUnVsZVRleHQoIHRoaXMudG9Dc3NTdHJpbmcoKSk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLnNlcmlhbGl6ZSggY3R4KSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5zZXJpYWxpemUoIGN0eCk7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHB1YmxpYyBnZXQgc2VsZWN0b3JUZXh0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHRoZSBvYmplY3QgdG8gcGFydGljcGF0ZSBpbiBcInZhbHVlVG9TdHJpbmdcIiBzZXJpYWxpemF0aW9uLiBXaGVuZXZlclxyXG5cdCAqIHRoZSBTdHlsZVJ1bGUtZGVyaXZlZCBvYmplY3QgaXMgZW5jb3VudGVyZWQgYnkgdGhlIGBVdGlsRnVuYy52YWx1ZVRvU3RyaW5nYCBmdW5jdGlvbixcclxuXHQgKiB0aGUgcnVsZSdzIHNlbGVjdG9yIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RvclRleHQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgc3R5bGUgcnVsZSBvYmplY3Qgb2YgdGhlIHByb3BlciB0eXBlLCBidXQgd2l0aG91dCB0aGUgc3R5bGVzZXQgYW5kIGRlcGVuZGVudFxyXG5cdC8vIHJ1bGVzLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjbG9uZU9iamVjdCgpOiBTdHlsZVJ1bGU7XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFByb3A8SyBleHRlbmRzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQ+KCBuYW1lOiBLLCB2YWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSxcclxuICAgICAgICBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpcnN0IHNldC9yZW1vdmUgdGhlIHZhbHVlIGluIG91ciBpbnRlcm5hbCBzdHlsZXNldCBvYmplY3RcclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5zdHlsZXNldFtuYW1lXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zdHlsZXNldFtuYW1lXSA9IGltcG9ydGFudCA/IHsgXCIhXCI6IHZhbHVlIGFzIGFueSB9IDogdmFsdWUgYXMgYW55O1xyXG5cclxuXHRcdC8vIHNlY29uZCwgaWYgQ1NTUnVsZSBhbHJlZHkgZXhpc3RzLCBzZXQvcmVtb3ZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0aGVyZVxyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuICAgICAgICB7XHJcblx0XHQgICAgc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHRoaXMuY3NzUnVsZSwgY2FtZWxUb0Rhc2goIG5hbWUpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBzdHlsZVByb3BUb1N0cmluZyggbmFtZSwgdmFsdWUsIHRydWUpLCBpbXBvcnRhbnQsIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSB2YXJPYmogSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFyVmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB2YXJPYmo6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0aW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXZhck9iaiB8fCAhKHZhck9iaiBpbnN0YW5jZW9mIFZhclJ1bGUpKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZmlyc3Qgc2V0L3JlbW92ZSB0aGUgdmFsdWUgaW4gb3VyIGludGVybmFsIHN0eWxlc2V0IG9iamVjdFxyXG5cdFx0bGV0IGN1cnJDdXN0b21Qcm9wcyA9IHRoaXMuc3R5bGVzZXRbXCItLVwiXSBhcyBDdXN0b21WYXJfU3R5bGVUeXBlW107XHJcblx0XHRpZiAoY3VyckN1c3RvbVByb3BzIHx8IHZhbHVlICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGN1cnJDdXN0b21Qcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGN1cnJDdXN0b21Qcm9wcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbVswXSA9PT0gdmFyT2JqKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiAoY3VyckN1c3RvbVByb3BzLmxlbmd0aCA9PT0gMSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0W1wiLS1cIl0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VyckN1c3RvbVByb3BzKVxyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIi0tXCJdID0gY3VyckN1c3RvbVByb3BzID0gW1t2YXJPYmosIHZhbHVlXV07XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGN1cnJDdXN0b21Qcm9wcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbVswXSA9PT0gdmFyT2JqKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKVxyXG5cdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHNbaW5kZXhdWzFdID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wcy5wdXNoKCBbdmFyT2JqLCB2YWx1ZV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNlY29uZCwgaWYgQ1NTUnVsZSBhbHJlZHkgZXhpc3RzLCBzZXQvcmVtb3ZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0aGVyZVxyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc1J1bGUsIHZhck9iai5jc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBzdHlsZVByb3BUb1N0cmluZyggdmFyT2JqLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQsIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1N0eWxlUnVsZTtcclxuXHJcblx0LyoqXHJcblx0ICogT2JqZWN0IGNvbnRhaW5pbmcgZGVwZW5kZW50IHJ1bGVzLiBQcm9wZXJ0eSBuYW1lcyBhcmUgdGFrZW4gZnJvbSBzcGVjaWFsIHByb3BlcnRpZXNcclxuXHQgKiBvZiB0aGUgQ29tYmluZWRTdHlsZXNldC4gVGhpcyBvYmplY3QgYWxsb3dzIGNhbGxlcnMgdG8gYWNjZXNzIGRlcGVuZGVudCBydWxlcyB0byBjaGFuZ2VcclxuXHQgKiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgcHJvZ3JhbW1hdGljYWxseS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvLyBSZXN1bHRhbnQgb2JqZWN0IGRlZmluaW5nIHByb3BlcnRpZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0cHJpdmF0ZSBzdHlsZXNldDogU3R5bGVzZXQ7XHJcblxyXG5cdC8vIFNlbGVjdG9yIHN0cmluZyBjYWNoZWQgYWZ0ZXIgaXQgaXMgZmlyc3Qgb2J0YWluZWQuIE5lZWRlZCB0byBub3QgaW52b2tlIGdldFNlbGVjdG9yU3RyaW5nXHJcblx0Ly8gbXVsdGlwbGUgdGltZXMgaW4gdGhlIHByZXNlbmNlIG9mIGRlcGVuZGVudCBydWxlcy5cclxuXHRwcml2YXRlIGNhY2hlZFNlbGVjdG9yU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERlcGVuZGVudFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBkZXBlbmRzIG9uIHRoZSBjb250YWluaW5nIHN0eWxlIHJ1bGUuIFRoaXNcclxuICogaXMgdXNlZCBmb3IgcHNldWRvIGNsYXNzZXMsIHBzZXVkbyBlbGVtZW50cywgY29tYmluYXRvcnMgYW5kIG90aGVyIHNlbGVjdG9ycyB0aGF0IGNvbWJpbmUgdGhlXHJcbiAqIGNvbnRhaW5pbmcgcnVsZSdzIHNlbGVjdG9yIHdpdGggYWRkaXRpb25hbCBzZWxlY3RvciBpdGVtcy5cclxuICovXHJcbmNsYXNzIERlcGVuZGVudFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdC8vIGZvciByZWd1bGFyIHNlbGVjdG9ycywgcHNldWRvIGNsYXNzZXMgYW5kIHBzZXVkbyBlbGVtZW50cywgdGhlIHNlbGVjdG9yIGFscmVhZHkgY29udGFpbnNcclxuXHQvLyB0aGUgYW1wZXJzYW5kIGFuZCB0aGUgc2VsZWN0b3JQYXJhbSBpcyB1bmRlZmluZWQuIEZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzLCBwc3Vkb1xyXG5cdC8vIGVsZW1lbnRzIGFuZCBjb21iaW5hdG9ycywgdGhlIHNlbGVjdG9yUGFyYW0gaXMgZGVmaW5lZCBhbmQgdGhlIHNlbGVjdG9yIGlzIGp1c3QgdGhlIGVudGl0eVxyXG5cdC8vIG5hbWUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHNlbGVjdG9yUGFyYW0/OiBhbnksIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCxcclxuXHRcdGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0XHR0aGlzLnNlbGVjdG9yUGFyYW0gPSBzZWxlY3RvclBhcmFtO1xyXG5cdFx0dGhpcy5jb250YWluaW5nUnVsZSA9IGNvbnRhaW5pbmdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogRGVwZW5kZW50UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRGVwZW5kZW50UnVsZSggdGhpcy5zZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHBhcmVudFNlbGVjdG9yID0gdGhpcy5jb250YWluaW5nUnVsZSEuc2VsZWN0b3JUZXh0O1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0b3JQYXJhbSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciBhcyBzdHJpbmc7XHJcblx0XHRcdHJldHVybiBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfSgke3BzZXVkb0VudGl0eVRvU3RyaW5nKCBzZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKX0pYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29udmVydCBzZWxlY3RvciB0byBzdHJpbmcuXHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHNlbGVjdG9yVG9TdHJpbmcoIHRoaXMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHNlbGVjdG9yIHN0cmluZyBkb2Vzbid0IGhhdmUgYW55IG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sLCB3ZVxyXG5cdFx0XHQvLyBzaW1wbHkgYXBwZW5kIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IHNlbGVjdG9yOyBvdGhlcndpc2UsIHdlIHJlcGxhY2UgYWxsXHJcblx0XHRcdC8vIG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sIGluIHRoZSBzZWxlY3RvciBzdHJpbmcgd2l0aCB0aGUgc2VsZWN0b3JcclxuXHRcdFx0Ly8gc3RyaW5nIG9mIHRoZSBwYXJlbnQgcnVsZS5cclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yLmluZGV4T2YoIFwiJlwiKSA8IDBcclxuXHRcdFx0XHQ/IGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9YFxyXG5cdFx0XHRcdDogc2VsZWN0b3IucmVwbGFjZSggLyYvZywgcGFyZW50U2VsZWN0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJ0aWFsIHNlbGVjdG9yIHRoYXQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWxlY3RvciAtIHVzZWQgZm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgYW5kIGVsZW1lbnRzLlxyXG5cdHByaXZhdGUgc2VsZWN0b3JQYXJhbT86IGFueTtcclxuXHJcblx0Ly8gUGFyZW50IHN0eWxlIHJ1bGUgb2Ygd2hpY2ggdGhpcyBydWxlIGlzIGRlcGVuZGVudC5cclxuXHRwdWJsaWMgY29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBYnN0cmFjdFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gb25seSBiZSB1c2VkIGFzIGEgYmFzZSBmb3Igb3RoZXIgc3R5bGVcclxuICogcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IEFic3RyYWN0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCk7XHJcblx0fVxyXG5cclxuXHQvLyBPdmVycmlkZXMgdGhlIFN0eWxlUnVsZSdzIGltcGxlbWVudGF0aW9uIHRvIGRvIG5vdGhpbmcuIE5vIENTU1N0eWxlUnVsZSBpcyBjcmVhdGVkIGZvclxyXG5cdC8vIGFic3RyYWN0IHJ1bGVzLlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lZFN0eWxlUnVsZSBjbGFzcyBpcyBhIGJhc2UgZm9yIHN0eWxlIHJ1bGUgY2xhc3NlcyB0aGF0IGFyZSBhbHNvIG5hbWVkIGVudGl0aWVzIC0gc3VjaFxyXG4gKiBhcyBjbGFzcyBydWxlIGFuZCBJRCBydWxlLlxyXG4gKi9cclxuYWJzdHJhY3QgY2xhc3MgTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlLCB0aGlzLmNzc1ByZWZpeCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jc3NOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gSW1wbGVtZW50YXRpb24gb2YgdGhlIHRvU3RyaW5nIG1ldGhvZCByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBydWxlICh3aXRob3V0IHRoZSBDU1MgcHJlZml4KS5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcm90ZWN0ZWQgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2xhc3NSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgQ1NTIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsYXNzUnVsZSBleHRlbmRzIE5hbWVkU3R5bGVSdWxlIGltcGxlbWVudHMgSUNsYXNzUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSB8IElDbGFzc05hbWVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBjbGFzcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cHVibGljIGdldCBjc3NDbGFzc05hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3NzTmFtZTsgfVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IENsYXNzUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ2xhc3NSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIi5cIjsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGFuIElELlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElEUnVsZSBleHRlbmRzIE5hbWVkU3R5bGVSdWxlIGltcGxlbWVudHMgSUlEUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgZWxlbWVudCBJRCBwcmVmaXhlZCB3aXRoIFwiI1wiICovXHJcblx0cHVibGljIGdldCBjc3NJRE5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3NzTmFtZTsgfVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IElEUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgSURSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIiNcIjsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2VsZWN0b3JSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBDU1Mgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogU2VsZWN0b3JSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBTZWxlY3RvclJ1bGUoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0Ly8gc2VsZWN0b3Igb2JqZWN0IGZvciB0aGlzIHJ1bGUuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJVmFyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtWYXJWYWx1ZVR5cGUsIFZhclRlbXBsYXRlTmFtZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBWYXJSdWxlIGRvZXMgbm90IGRlcml2ZSBmcm9tIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGJlY2F1c2UgaXQgaXMgbm90IGEgcmVhbCBDU1MgcnVsZTsgaG93ZXZlciwgaW4gbWFueSBhc3BlY3RzIGl0IHJlcGVhdHMgdGhlIFJ1bGUnc1xyXG4gKiBmdW5jdGlvbmFsaXR5LiBJbiBwYXJ0aWN1bGFyIGl0IGhhcyB0aGUgcHJvY2VzcyBmdW5jdGlvbiB0aGF0IGFsbG93cyBpdCB0byBvYnRhaW4gYW4gYWN0dWFsXHJcbiAqIG5hbWUsIHdoaWNoIHdpbGwgYmUgdXNlZCB3aGVuIGRlZmluaW5nIGFuZCB1c2luZyB0aGlzIGN1c3RvbSBwcm9wZXJ0eSBpbiBDU1MuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgdGhlIHR5cGUgcGFyYW1ldGVyIEsgaXMgYSBrZXkgb2YgdGhlIElDc3NTdHlsZXNldCBpbnRlcmZhY2UsIHRoZSB2YWx1ZSBpcyBvZlxyXG4gKiB0eXBlIElTdGlsZXNldFtLXSwgd2hpY2ggaXMgRXh0ZW5kZWQ8SUNzc1N0eWxlc2V0W0tdPi4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZyB2YWx1ZXMgdGhhdCBhcmVcclxuICogdmFsaWQgZm9yIHRoZSBFeHRlbmRlZCByb3BlcnR5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSVZhclJ1bGU8Sz5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdGVtcGxhdGU6IEssIHZhbHVlPzogVmFyVmFsdWVUeXBlPEs+LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPilcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUsIFwiLS1cIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBWYXJSdWxlPEs+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBWYXJSdWxlPEs+KHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnZhbHVlID09IG51bGwgPyBudWxsIDogYCR7dGhpcy5jc3NOYW1lfTogJHtzdHlsZVByb3BUb1N0cmluZyggdGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdHJ1ZSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIHZhcigtLW5hbWUpIGV4cHJlc3Npb24uXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiBgdmFyKCR7dGhpcy5jc3NOYW1lfSlgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRWYWx1ZSggdmFsdWU6IFZhclZhbHVlVHlwZTxLPiwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDdXN0b21WYXJWYWx1ZSggdGhpcy5jc3NOYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSlcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvLyAvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyAvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdC8vIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcblx0cHVibGljIHRlbXBsYXRlOiBLO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgdmFsdWU6IFZhclZhbHVlVHlwZTxLPjtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lOYW1lZENvbG9ycywgQ3NzQ29sb3IsIENvbG9yc30gZnJvbSBcIi4vQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQW5nbGVNYXRoLCB2YWwyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcmVkZWZpbmVkIGNvbG9yIG5hbWVzIGJ5IHRoZWlyIG51bWVyaWMgdmFsdWVzLiBPbmx5IGJ1aWx0LWluIGNvbG9yIG5hbWVzIHdpbGwgYmUgaW5cclxuICogdGhpcyBtYXAgLSB0aG9zZSBuYW1lZCBjb2xvcnMgdGhhdCBhcmUgYWRkZWQgdXNpbmcgbW9kdWxlIGF1Z21lbnRhdGlvbiB3aWxsIE5PVCByZXNpZGUgaW5cclxuICogdGhpcyBtYXAuIFRoaXMgaXMgbmVlZGVkIHRvIGNvbnZlcnQgdGhlIG51bWVyaWMgY29sb3IgdmFsdWVzIHNldCB1c2luZyB0aGUgQ29sb3IuYnJvd25cclxuICogbm90YXRpb24gdG8gdGhlaXIgbmFtZXMgd2hlbiBpbnNlcnRpbmcgQ1NTIHJ1bGVzLlxyXG4gKi9cclxubGV0IHJldmVyc2VkQ29sb3JNYXAgPSBuZXcgTWFwPG51bWJlcixzdHJpbmc+KCk7XHJcblxyXG4vLyBidWlsZCBSZXZlcnNlZCBDb2xvciBNYXBcclxuT2JqZWN0LmVudHJpZXMoIENvbG9ycykuZm9yRWFjaCggKFtuYW1lLCB2YWx1ZV0pID0+IHJldmVyc2VkQ29sb3JNYXAuc2V0KCB2YWx1ZSwgbmFtZSkgKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvck51bWJlclRvU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB0aGUgbnVtYmVyIGlzIG5lZ2F0aXZlLCByZW1lbWJlciB0aGF0IGZhY3QgYW5kIGdldCB0aGUgcG9zaXRpdmUgbnVtYmVyXHJcbiAgICBsZXQgbiA9IHZhbCA8IDAgPyAtdmFsIDogdmFsO1xyXG4gICAgbGV0IGlzTmVnYXRpdmUgPSBuICE9PSB2YWw7XHJcblxyXG4gICAgLy8gaWYgdGhlIG51bWJlciBoYXMgYSBmbG9hdGluZyBwb2ludCBwYXJ0LCBzZXBhcmF0ZSBpdCBpbnRvIGFscGhhIGNoYW5uZWxcclxuICAgIGxldCBhID0gMDtcclxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuKSlcclxuICAgIHtcclxuICAgICAgICBsZXQgayA9IE1hdGguZmxvb3Iobik7XHJcbiAgICAgICAgLy8gYSA9IE1hdGgucm91bmQoIChuIC0gaykgKiAxMDApO1xyXG4gICAgICAgIGEgPSBNYXRoLnJvdW5kKCAobiAtIGspICogMjU1KTtcclxuICAgICAgICBuID0gaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgbnVtYmVyIHdhcyBuZWdhdGl2ZSB3ZSByZXZlcnQgdGhlIGNvbG9yIGJ5IG5lZ2F0aW5nIGFsbCB0aGUgYml0cy4gSW4gYW55IGNhc2UsXHJcbiAgICAvLyB3ZSBjbGVhciBldmVyeXRoaW5nIGJleW9uZCB0aGUgZmlyc3QgdGhyZWUgYnl0ZXMuXHJcbiAgICBuID0gaXNOZWdhdGl2ZSA/IH4oMHhGRjAwMDAwMCB8IG4pIDogMHgwMEZGRkZGRiAmIG47XHJcblxyXG4gICAgaWYgKGEgPiAwKVxyXG4gICAgICAgIC8vIHJldHVybiBjb2xvcldpdGhBbHBoYVRvU3RyaW5nKCBuLCBhKTtcclxuICAgICAgICAvLyByZXR1cm4gcmdiVG9TdHJpbmcoIChuICYgMHhGRjAwMDApID4+IDE2LCAobiAmIDB4MDBGRjAwKSA+PiA4LCBuICYgMHgwMDAwRkYsIGEpO1xyXG4gICAgICAgIHJldHVybiBcIiNcIiArIG4udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCA2LCBcIjBcIikgKyBhLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggMiwgXCIwXCIpO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lZCBjb2xvciB3aXRoIHRoZSBnaXZlbiB2YWx1ZSwgcmV0dXJuIHRoZSBjb2xvciBuYW1lXHJcbiAgICAgICAgbGV0IG5hbWUgPSByZXZlcnNlZENvbG9yTWFwLmdldCggbik7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgPyBuYW1lIDogXCIjXCIgKyBuLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggNiwgXCIwXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc2VwYXJhdGlvbiB2YWx1ZSB0byBhIENTUyBzdHJpbmcuIFNlcGFyYXRpb24gYXJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIEBwYXJhbSBjIENvbG9yIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXBhcmF0aW9uVG9TdHJpbmcoIGM6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoYyAhPT0gMCAmJiBjID4gLTEgJiYgYyA8IDEpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaW52ZXJ0IG5lZ2F0aXZlIHZhbHVlXHJcbiAgICAgICAgaWYgKGMgPCAwKVxyXG4gICAgICAgICAgICBjID0gMSArIGM7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCBjICogMTAwKSArIFwiJVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNsYW1wIHRoZSB2YWx1ZSBiZXR3ZWVuIC0yNTUgYW5kIDI1NVxyXG4gICAgICAgIGMgPSBjID4gMjU1ID8gMjU1IDogYyA8IC0yNTUgPyAtMjU1IDogYztcclxuXHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGMpKVxyXG4gICAgICAgICAgICBjID0gTWF0aC5yb3VuZChjKTtcclxuXHJcbiAgICAgICAgLy8gaW52ZXJ0IG5lZ2F0aXZlIHZhbHVlXHJcbiAgICAgICAgaWYgKGMgPCAwKVxyXG4gICAgICAgICAgICBjID0gMjU1ICsgYztcclxuXHJcbiAgICAgICAgcmV0dXJuIGMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nLiBBbHBoYSBpcyByZXByZXNlbnRlZCBhcyBhIG51bWJlclxyXG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBhbHBoYVRvU3RyaW5nKCBhPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIGFscGhhIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBzZXQgaXQgdG8gMVxyXG4gICAgaWYgKGEgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCIxXCI7XHJcblxyXG4gICAgLy8gbmVnYXRpdmUgYW5kIHBvc2l0aXZlIHZhbHVlcyBvZiBhbHBoYSBhcmUgdHJlYXRlZCBpZGVudGljYWxseSwgc28gY29udmVydCB0byBwb3NpdGl2ZVxyXG4gICAgaWYgKGEgPCAwKVxyXG4gICAgICAgIGEgPSAtYTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGFscGhhIHRvIGEgbnVtYmVyIHdpdGggYWJzb2x1dGUgdmFsdWUgbGVzcyB0aGFuIDEgKGlmIGl0IGlzIG5vdCB5ZXQpLiBJZiBhbHBoYVxyXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIDEwMCwgc2V0IGl0IHRvIDE7IG90aGVyd2lzZSwgXHJcbiAgICByZXR1cm4gKGEgPiAxMDAgPyAxIDogYSA+IDEgPyBhIC8gMTAwIDogYSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIHdpdGhcclxuICogdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvU3RyaW5nKCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgcmdiYSgke3NlcGFyYXRpb25Ub1N0cmluZyggcil9LCR7c2VwYXJhdGlvblRvU3RyaW5nKCBnKX0sJHtzZXBhcmF0aW9uVG9TdHJpbmcoIGIpfSwke2FscGhhVG9TdHJpbmcoIGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIG51bWJlciByZXByZXNlbnRpbmcgZWl0aGVyIHNhdHVyYXRpb24gb3IgbGlnaHRuZXNzIGluIHRoZSBIU0wgc2NoZW1lIHRvIHBlcmNlbnRhZ2U6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICovXHJcbmZ1bmN0aW9uIGNvbG9yUGVyY2VudFRvU3RyaW5nKCBuOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gbmVnYXRpdmUgYW5kIHBvc2l0aXZlIHZhbHVlcyBhcmUgdHJlYXRlZCBpZGVudGljYWxseSwgc28gY29udmVydCB0byBwb3NpdGl2ZVxyXG4gICAgaWYgKG4gPCAwKVxyXG4gICAgICAgIG4gPSAtbjtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGFscGhhIHRvIGEgbnVtYmVyIHdpdGggYWJzb2x1dGUgdmFsdWUgbGVzcyB0aGFuIDEgKGlmIGl0IGlzIG5vdCB5ZXQpLiBJZiBhbHBoYVxyXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIDEwMCwgY2xhbXAgaXQuIFxyXG4gICAgcmV0dXJuIChuID4gMTAwID8gMTAwIDogTWF0aC5yb3VuZChuIDw9IDEgPyBuICogMTAwIDogbikpLnRvU3RyaW5nKCkgKyBcIiVcIjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyBodWUtc2F0dXJhdGlvbi1saWdodG5lc3MgY29tcG9uZW50cyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3JcclxuICogdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgSHVlIGNvbXBvbmVudCBpcyB0cmVhdGVkIGFzIHRoZSBDU1MgYDxhbmdsZT5gIHR5cGUuIE51bWJlcnMgYXJlIGNvbnNpZGVyZWQgZGVncmVlcy5cclxuICogXHJcbiAqIFRoZSBTYXR1cmF0aW9uIGFuZCBMaWdodG5lc3MgY29tcG9uZW50cyBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlczpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKlxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gaCBIdWUgY29tcG9uZW50IGFzIGFuIGFuZ2xlIHZhbHVlLlxyXG4gKiBAcGFyYW0gcyBTYXR1cmF0aW9uIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2xUb1N0cmluZyggaDogbnVtYmVyIHwgc3RyaW5nLCBzOiBudW1iZXIsIGw6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYGhzbGEoJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhoKX0sJHtjb2xvclBlcmNlbnRUb1N0cmluZyhzKX0sJHtjb2xvclBlcmNlbnRUb1N0cmluZyhsKX0sJHthbHBoYVRvU3RyaW5nKCBhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGNvbG9yIGFuZCB0aGUgYWxwaGEgbWFzayB0byB0aGUgQ1NTIENvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzXHJcbiAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvciB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgbnVtZXJpYyB2YWx1ZSBvciBhcyBhIHN0cmluZyBjb2xvciBuYW1lLlxyXG4gKiBcclxuICogVGhlIGFscGhhIG1hc2sgaXMgc3BlY2lmaWVkIGFzIGEgbnVtYmVyOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBOdW1iZXIgMSB0byAxMDAgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBOdW1iZXJzIGdyZWF0ZXIgdGhhbiAxMDAgYXJlIGNsYW1wZWQgdG8gMTAwO1xyXG4gKiBcclxuICogQHBhcmFtIGMgQ29sb3IgdmFsdWUgYXMgZWl0aGVyIGEgbnVtYmVyIG9yIGEgbmFtZWQgY29sb3JcclxuICogQHBhcmFtIGEgQWxwaGEgY2hhbm5lbCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIGM6IG51bWJlciB8IGtleW9mIElOYW1lZENvbG9ycywgYTogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHRoZSBhbHBoYSBpcyAwLCByZXR1cm4gdHJhbnNwYXJlbnQgY29sb3JcclxuICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIiMwMDAwXCI7XHJcblxyXG4gICAgLy8gY29udmVydCBjb2xvciB0byBudW1lcmljIHZhbHVlIChpZiBpdCdzIG5vdCBhIG51bWJlciB5ZXQpLiBJZiB0aGUgY29sb3Igd2FzIGdpdmVuIGFzIGFcclxuICAgIC8vIHN0cmluZyB0aGF0IHdlIGNhbm5vdCBmaW5kIGluIHRoZSBDb2xvcnMgb2JqZWN0LCByZXR1cm4gcHVyZSB3aGl0ZS5cclxuICAgIGxldCBuID0gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBDb2xvcnNbY10gOiBjO1xyXG4gICAgaWYgKG4gPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJGRkZcIjtcclxuXHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIG9mIGFscGhhIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgYSA9IC1hO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyAxIG9yIDEwMCwgdGhlbiBzZXQgaXQgdG8gMCBiZWNhdXNlIDAgaW4gdGhlIGNvbG9yTnVtYmVyVG9TdHJpbmcgbWVhbnMgXCJubyBhbHBoYVwiLlxyXG4gICAgYSA9IGEgPT09IDEgfHwgYSA+PSAxMDAgPyAwIDogYSA+IDEgPyBhIC8gMTAwIDogYTtcclxuXHJcbiAgICAvLyBtYWtlIHRoZSBuZXcgYWxwaGFcclxuICAgIHJldHVybiBjb2xvck51bWJlclRvU3RyaW5nKCBuID4gMCA/IG4gKyBhIDogbiAtIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLiBJZiBhIHN0cmluZyB2YWx1ZSBpcyBpbiB0aGUgQ29sb3JzIG9iamVjdCB3ZVxyXG4gKiBuZWVkIHRvIGdldCBpdHMgbnVtYmVyIGFuZCBjb252ZXJ0IGl0IHRvIHRoZSByZ2JbYV0oKSBmdW5jdGlvbiBiZWNhdXNlIGl0IG1pZ2h0IGJlIGEgY3VzdG9tXHJcbiAqIGNvbG9yIG5hbWUgYWRkZWQgdmlhIElOYW1lZENvbG9ycyBtb2R1bGUgYXVnbWVudGF0aW9uLiBGb3IgbnVtZXJpYyB2YWx1ZXMsIHdlIGNoZWNrIGlmIHRoaXMgaXNcclxuICogb25lIG9mIHRoZSBwcmVkZWZpbmVkIGNvbG9ycyBhbmQgcmV0dXJuIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0NvbG9yPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBDb2xvcnNbdl0gPyBjb2xvck51bWJlclRvU3RyaW5nKCBDb2xvcnNbdl0pIDogdixcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvck51bWJlclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdHlwZXMgZm9yIHdvcmtpbmcgd2l0aCBDU1MgY29sb3JzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IElHZW5lcmljUHJveHkgfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlIGxpc3RzIHRoZSBuYW1lcyBvZiBzdGFuZGFyZCBXZWIgY29sb3JzLiBJdCBpcyBuZWVkZWQgdG8gYWxsb3cgZGV2ZWxvcGVyc1xyXG4gKiB0byBhZGQgbmV3IG5hbWVkIGNvbG9ycyB0aHJvdWdoIG1vZHVsZSBhdWdtZW50YXRpb24gdGVjaG5pcXVlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRDb2xvcnNcclxue1xyXG4gICAgcmVhZG9ubHkgYmxhY2s6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2lsdmVyOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JheTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFyb29uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmVkOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcHVycGxlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZnVjaHNpYTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2eTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGVhbDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYWxpY2VibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YW1hcmluZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXp1cmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmVpZ2U6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmlzcXVlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZXZpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnJvd246ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnVybHl3b29kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2FkZXRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hhcnRyZXVzZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hvY29sYXRlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29yYWw6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybnNpbGs6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3JpbXNvbjogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3lhbjogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2JsdWU6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2N5YW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyYXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2toYWtpOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya21hZ2VudGE6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29saXZlZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yYW5nZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yY2hpZDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3JlZDogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NhbG1vbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NlYWdyZWVuOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlYmx1ZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JheTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JleTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3R1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3Zpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHBpbms6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHNreWJsdWU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JheTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JleTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmlyZWJyaWNrOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2FpbnNib3JvOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZGVucm9kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW55ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JleTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG9uZXlkZXc6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG90cGluazogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWFucmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWdvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaXZvcnk6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkga2hha2k6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXJibHVzaDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF3bmdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGVtb25jaGlmZm9uOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjb3JhbDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjeWFuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmVlbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRwaW5rOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzYWxtb246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzZWFncmVlbjogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRza3libHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyZXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGluZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFnZW50YTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYXF1YW1hcmluZTogICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtcHVycGxlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2VhZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdHVycXVvaXNlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlkbmlnaHRibHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWludGNyZWFtOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlzdHlyb3NlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbW9jY2FzaW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2YWpvd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xkbGFjZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmVkcmFiOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlcmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JjaGlkOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXR1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXZpb2xldHJlZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFwYXlhd2hpcDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVhY2hwdWZmOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVydTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGluazogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGx1bTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcG93ZGVyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm9zeWJyb3duOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm95YWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FkZGxlYnJvd246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FsbW9uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FuZHlicm93bjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2VhZ3JlZW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2llbm5hOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2t5Ymx1ZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc25vdzogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3RlZWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGFuOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGhpc3RsZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdG9tYXRvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdHVycXVvaXNlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdmlvbGV0OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hlYXQ6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGVzbW9rZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmViZWNjYXB1cnBsZTogICAgICAgICAgbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbG9yUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgb2YgQ1NTIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGZvclxyXG4gKiBzcGVjaWZ5aW5nIGNvbG9ycy4gVGhpcyBpbnRlcmZhY2UgaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZTogcmdiKCksIGFscGhhKCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9yUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiY29sb3JcIj4ge307XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3lzdGVtQ29sb3JzIHR5cGUgZGVmaW5lcyBrZXl3b3JkcyBmb3Igc3lzdGVtIGNvbG9ycyB0aGF0IGFyZSB1c2VkIGluIGZvcmNlZC1jb2xvciBtb2RlXHJcbiAqIChidXQgY2FuIGJlIGFsc28gdXNlZCBpbiB0aGUgcmVndWxhciBtb2RlKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbUNvbG9ycyA9IFwiQWN0aXZlVGV4dFwiIHwgXCJCdXR0b25GYWNlXCIgfCBcIkJ1dHRvblRleHRcIiB8IFwiQ2FudmFzXCIgfCBcIkNhbnZhc1RleHRcIiB8XHJcbiAgICBcIkZpZWxkXCIgfCBcIkZpZWxkVGV4dFwiIHwgXCJHcmF5VGV4dFwiIHwgXCJIaWdobGlnaHRcIiB8IFwiSGlnaGxpZ2h0VGV4dFwiIHwgXCJMaW5rVGV4dFwiIHwgXCJWaXNpdGVkVGV4dFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBrZXl3b3JkczogYW55IHN0cmluZyB0aGF0IGlzIGEgbmFtZSBvZiBhIHByb3BlcnR5IGluIHRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlLlxyXG4gKiAtIG51bWJlcjpcclxuICogICAtIG5lZ2F0aXZlIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgaW52ZXJ0ZWQgY29sb3JzLlxyXG4gKiAgIC0gaW50ZWdlciBwYXJ0IG9mIHRoZSBudW1iZXIgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgLSBldmVyeXRoaW5nIGVsc2UgaXNcclxuICogICAgIGlnbm9yZWQuXHJcbiAqICAgLSBmbG9hdGluZyBwb2ludCBwYXJ0IG9mIHRoZSBudW1iZXIgaXMgdHJlYXRlZCBhcyBwZXJjZW50cyBvZiBhbHBoYSBjaGFubmVsLiBJZiB0aGVyZSBpcyBub1xyXG4gKiAgICAgZmxvYXRpbmcgcGFydCwgYWxwaGEgaXMgMS5cclxuICogLSBmdW5jdGlvbnM6IHJnYigpLCBoc2woKSwgYWxwaGEoKSBhcyB3ZWxsIGFzIGFueSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIElDb2xvclByb3h5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NDb2xvciA9IFwidHJhbnNwYXJlbnRcIiB8IFwiY3VycmVudGNvbG9yXCIgfCBrZXlvZiBJTmFtZWRDb2xvcnMgfCBudW1iZXIgfCBJQ29sb3JQcm94eSB8IFN5c3RlbUNvbG9ycztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzOiBJTmFtZWRDb2xvcnMgPVxyXG57XHJcbiAgICBibGFjazogICAgICAgICAgICAgICAgICAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogICAgICAgICAgICAgICAgIDB4YzBjMGMwLFxyXG4gICAgZ3JheTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICB3aGl0ZTogICAgICAgICAgICAgICAgICAweGZmZmZmZixcclxuICAgIG1hcm9vbjogICAgICAgICAgICAgICAgIDB4ODAwMDAwLFxyXG4gICAgcmVkOiAgICAgICAgICAgICAgICAgICAgMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6ICAgICAgICAgICAgICAgICAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46ICAgICAgICAgICAgICAgICAgMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAgICAgICAgICAgICAgICAgICAweDAwZmYwMCxcclxuICAgIG9saXZlOiAgICAgICAgICAgICAgICAgIDB4ODA4MDAwLFxyXG4gICAgeWVsbG93OiAgICAgICAgICAgICAgICAgMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAgICAgICAgICAgICAgICAgICAweDAwMDA4MCxcclxuICAgIGJsdWU6ICAgICAgICAgICAgICAgICAgIDB4MDAwMGZmLFxyXG4gICAgdGVhbDogICAgICAgICAgICAgICAgICAgMHgwMDgwODAsXHJcbiAgICBhcXVhOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIG9yYW5nZTogICAgICAgICAgICAgICAgIDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAgICAgICAgICAgICAgMHhmMGY4ZmYsXHJcbiAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgICAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICAgIDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6ICAgICAgICAgICAgICAgICAgMHhmMGZmZmYsXHJcbiAgICBiZWlnZTogICAgICAgICAgICAgICAgICAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogICAgICAgICAgICAgICAgIDB4ZmZlNGM0LFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAgICAgICAgICAgICAweDhhMmJlMixcclxuICAgIGJyb3duOiAgICAgICAgICAgICAgICAgIDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAgICAgICAgICAgICAgMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6ICAgICAgICAgICAgICAweDVmOWVhMCxcclxuICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIDB4N2ZmZjAwLFxyXG4gICAgY2hvY29sYXRlOiAgICAgICAgICAgICAgMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogICAgICAgICAgICAgICAgICAweGZmN2Y1MCxcclxuICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICAgIDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6ICAgICAgICAgICAgICAgMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAgICAgICAgICAgICAgICAweGRjMTQzYyxcclxuICAgIGN5YW46ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6ICAgICAgICAgICAgICAgMHgwMDAwOGIsXHJcbiAgICBkYXJrY3lhbjogICAgICAgICAgICAgICAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgICAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAgICAgICAgICAgICAgMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogICAgICAgICAgICAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIDB4NTU2YjJmLFxyXG4gICAgZGFya29yYW5nZTogICAgICAgICAgICAgMHhmZjhjMDAsXHJcbiAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAweDk5MzJjYyxcclxuICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICAgIDB4OGIwMDAwLFxyXG4gICAgZGFya3NhbG1vbjogICAgICAgICAgICAgMHhlOTk2N2EsXHJcbiAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogICAgICAgICAgICAgMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogICAgICAgICAgICAgICAweGZmMTQ5MyxcclxuICAgIGRlZXBza3libHVlOiAgICAgICAgICAgIDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICAgIDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAgICAgICAgICAgICAgMHhiMjIyMjIsXHJcbiAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgICAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICAgIDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAgICAgICAgICAgICAgMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgICAweGY4ZjhmZixcclxuICAgIGdvbGQ6ICAgICAgICAgICAgICAgICAgIDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAgICAgICAgICAgICAgMHhkYWE1MjAsXHJcbiAgICBncmVlbnllbGxvdzogICAgICAgICAgICAweGFkZmYyZixcclxuICAgIGdyZXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAgICAgICAgICAgICAgICAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogICAgICAgICAgICAgIDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAgICAgICAgICAgICAgICAgMHg0YjAwODIsXHJcbiAgICBpdm9yeTogICAgICAgICAgICAgICAgICAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAgICAgICAgICAgICAgICAgIDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgMHhlNmU2ZmEsXHJcbiAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAweGZmZjBmNSxcclxuICAgIGxhd25ncmVlbjogICAgICAgICAgICAgIDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6ICAgICAgICAgICAgICAweGFkZDhlNixcclxuICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIDB4ZjA4MDgwLFxyXG4gICAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAweGZhZmFkMixcclxuICAgIGxpZ2h0Z3JheTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogICAgICAgICAgICAgMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogICAgICAgICAgICAgIDB4ZmZiNmMxLFxyXG4gICAgbGlnaHRzYWxtb246ICAgICAgICAgICAgMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgICAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIDB4ODdjZWZhLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIDB4YjBjNGRlLFxyXG4gICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgICAweDMyY2QzMixcclxuICAgIGxpbmVuOiAgICAgICAgICAgICAgICAgIDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICAgIDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgMHhiYTU1ZDMsXHJcbiAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIDB4M2NiMzcxLFxyXG4gICAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAweDAwZmE5YSxcclxuICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICAgIDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAweDE5MTk3MCxcclxuICAgIG1pbnRjcmVhbTogICAgICAgICAgICAgIDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogICAgICAgICAgICAgICAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAgICAgICAgICAgIDB4ZmZkZWFkLFxyXG4gICAgb2xkbGFjZTogICAgICAgICAgICAgICAgMHhmZGY1ZTYsXHJcbiAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgICAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogICAgICAgICAgICAgIDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAgICAgICAgICAgICAgICAgMHhkYTcwZDYsXHJcbiAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAweGVlZThhYSxcclxuICAgIHBhbGVncmVlbjogICAgICAgICAgICAgIDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICAgIDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAgICAgICAgICAgICAgICAgICAweGNkODUzZixcclxuICAgIHBpbms6ICAgICAgICAgICAgICAgICAgIDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogICAgICAgICAgICAgICAgICAgMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAgICAgICAgICAgICAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogICAgICAgICAgICAgIDB4YmM4ZjhmLFxyXG4gICAgcm95YWxibHVlOiAgICAgICAgICAgICAgMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogICAgICAgICAgICAweDhiNDUxMyxcclxuICAgIHNhbG1vbjogICAgICAgICAgICAgICAgIDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogICAgICAgICAgICAgMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogICAgICAgICAgICAgICAweDJlOGI1NyxcclxuICAgIHNlYXNoZWxsOiAgICAgICAgICAgICAgIDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAgICAgICAgICAgICAgICAgMHhhMDUyMmQsXHJcbiAgICBza3libHVlOiAgICAgICAgICAgICAgICAweDg3Y2VlYixcclxuICAgIHNsYXRlYmx1ZTogICAgICAgICAgICAgIDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNub3c6ICAgICAgICAgICAgICAgICAgIDB4ZmZmYWZhLFxyXG4gICAgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgICAweDQ2ODJiNCxcclxuICAgIHRhbjogICAgICAgICAgICAgICAgICAgIDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogICAgICAgICAgICAgICAgMHhkOGJmZDgsXHJcbiAgICB0b21hdG86ICAgICAgICAgICAgICAgICAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogICAgICAgICAgICAgIDB4NDBlMGQwLFxyXG4gICAgdmlvbGV0OiAgICAgICAgICAgICAgICAgMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogICAgICAgICAgICAgICAgICAweGY1ZGViMyxcclxuICAgIHdoaXRlc21va2U6ICAgICAgICAgICAgIDB4ZjVmNWY1LFxyXG4gICAgeWVsbG93Z3JlZW46ICAgICAgICAgICAgMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAgICAgICAgICAweDY2MzM5OSxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgRm9udEZhY2VUeXBlcyBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtvYmoyc3RyfSBmcm9tIFwiLi9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7Y2FtZWxUb0Rhc2gsIHZhbDJzdHIsIENzc1BlcmNlbnRNYXRoLCBDc3NBbmdsZU1hdGgsIGFycjJzdHIsIENzc051bWJlck1hdGh9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGZvbnQgZmFjZSBkZWZpbml0aW9uIG9iamVjdCB0byB0aGUgQ1NTIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRGYWNlVG9TdHJpbmcoIGZvbnRmYWNlOiBGb250RmFjZVR5cGVzLklGb250RmFjZSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmb250ZmFjZSB8fCAhZm9udGZhY2UuZm9udEZhbWlseSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBsZXQgcyA9IFwie1wiO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIGZvbnRmYWNlKVxyXG4gICAge1xyXG4gICAgICAgIHMgKz0gYCR7Y2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0cmV0Y2hUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHJldGNoX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3R5bGVfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBvYmxpcXVlICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodil9YCxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYG9ibGlxdWUgJHthcnIyc3RyKCB2LCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFNyY1RvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IGZvbnRTaW5nbGVTcmNUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U2luZ2xlU3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wibG9jYWxcIiwgdiA9PiBgbG9jYWwoJHt2fSlgXSxcclxuICAgICAgICBbXCJ1cmxcIiwgdiA9PiBgdXJsKCR7dn0pYF0sXHJcbiAgICAgICAgW1wiZm9ybWF0XCIsIHYgPT4gYGZvcm1hdCgke2ZvbnRGb3JtYXRUb1N0cmluZyh2KX0pYF1cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRGb3JtYXRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IGBcXFwiJHt2fVxcXCJgLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIE1lZGlhVHlwZXMgZnJvbSBcIi4vTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7dmFsMnN0ciwgY2FtZWxUb0Rhc2gsIGFycjJzdHJ9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhc3BlY3RSYXRpb1RvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuQXNwZWN0UmF0aW9GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbFswXSArIFwiL1wiICsgdmFsWzFdO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkxlbmd0aEZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJweFwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5SZXNvbHV0aW9uRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcImRwaVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbnR5cGUgY29udmVydEZ1bmNUeXBlPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSAodmFsOiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhRmVhdHVyZUluZm8gcmVwcmVzZW50cyBpbmZvcm1hdGlvbiB0aGF0IHdlIGtlZXAgZm9yIHN0eWxlIHByb3BlcnRpZXNcclxuICovXHJcbnR5cGUgTWVkaWFGZWF0dXJlSW5mbzxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gY29udmVydEZ1bmNUeXBlPEs+IHwgYm9vbGVhbiB8XHJcbiAgICB7XHJcbiAgICAgICAgLyoqIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgZnJvbSB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbiAgICAgICAgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZTxLPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgZGVmaW5lZCwgaW5kaWNhdGVzIHRoZSB2YWx1ZSwgd2hpY2ggd2Ugd2lsbCBub3QgcHV0IGludG8gQ1NTIHN0cmluZy4gVGhpcyBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICogbWVkaWEgZmVhdHVyZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGhvdXQgdGhlIHZhbHVlLCBlLmcuIGNvbG9yIG9yIGNvbG9yLWluZGV4LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmVhdHVyZSBpcyBhIFwicmFuZ2VcIiBmZWF0dXJlOyB0aGF0IGlzLCBjYW4gYmUgdXNlZCBpbiBhblxyXG4gICAgICAgICAqIGV4cHJlc3Npb24gKGEgPD0gZmVhdHVyZSA8PSBiKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVR5cGVzLk1lZGlhUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHF1ZXJ5LCB7XHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLlNpbmdsZU1lZGlhUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbWVkaWFUeXBlID0gcXVlcnkuJG1lZGlhVHlwZTtcclxuICAgIGxldCBvbmx5ID0gcXVlcnkuJG9ubHk7XHJcbiAgICBsZXQgbmVnYXRlID0gcXVlcnkuJG5lZ2F0ZTtcclxuXHJcbiAgICBsZXQgaXRlbXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobWVkaWFUeXBlKVxyXG4gICAgICAgIGl0ZW1zLnB1c2goIChvbmx5ID8gXCJvbmx5IFwiIDogXCJcIikgKyBtZWRpYVR5cGUpO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIHF1ZXJ5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJFwiKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeVtwcm9wTmFtZV0pXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goIGAoJHttZWRpYUZlYXR1cmVUb1N0cmluZyggcHJvcE5hbWUsIHF1ZXJ5W3Byb3BOYW1lXSl9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuZWdhdGUgPyBcIm5vdCBcIiA6IFwiXCJ9JHtpdGVtcy5qb2luKFwiIGFuZCBcIil9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIGZlYXR1cmUgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZlYXR1cmVUb1N0cmluZyggZmVhdHVyZU5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZlYXR1cmVOYW1lIHx8IHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBcclxuICAgIGxldCBpbmZvOiBNZWRpYUZlYXR1cmVJbmZvID0gbWVkaWFGZWF0dXJlc1tmZWF0dXJlTmFtZV07XHJcblxyXG4gICAgbGV0IHJlYWxGZWF0dXJlTmFtZSA9IGNhbWVsVG9EYXNoKCBmZWF0dXJlTmFtZSk7XHJcblxyXG4gICAgLy8gaWYgZGVmYXVsdFZhbHVlIGlzIGRlZmluZWQgYW5kIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBlcXVhbCB0byBpdCwgbm8gdmFsdWUgc2hvdWxkIGJlIHJldHVybmVkLlxyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5kZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcFZhbCA9PT0gZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBcIlwiIDogcmVhbEZlYXR1cmVOYW1lO1xyXG5cclxuICAgIGxldCBjb252ZXJ0ID0gdHlwZW9mIGluZm8gPT09IFwiZnVuY3Rpb25cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uY29udmVydCA6IHVuZGVmaW5lZDtcclxuICAgIGxldCBpc1JhbmdlID0gdHlwZW9mIGluZm8gPT09IFwiYm9vbGVhblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5pc1JhbmdlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGlzUmFuZ2UgJiYgIXZhbHVlT25seSAmJiBBcnJheS5pc0FycmF5KCBwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICBsZXQgczEgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzBdLCBjb252ZXJ0KTtcclxuICAgICAgICBsZXQgczIgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzFdLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gYCR7czF9IDw9ICR7cmVhbEZlYXR1cmVOYW1lfSA8PSAke3MyfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gcyA6IHJlYWxGZWF0dXJlTmFtZSArIFwiOlwiICsgcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsOiBhbnksIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBpZiAoY29udmVydClcclxuICAgICAgICByZXR1cm4gY29udmVydCggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcHJvcFZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHByb3BWYWwpKVxyXG4gICAgICAgIHJldHVybiBhcnIyc3RyKCBwcm9wVmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcHJvcFZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtYXhBc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIGNvbG9yOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGhlaWdodDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbkhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtb25vY2hyb21lOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgcmVzb2x1dGlvbjogeyBjb252ZXJ0OiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5SZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4UmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIHdpZHRoOiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluV2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHt2YWwyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzZWxlY3Rvci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHR3by1udW1iZXIgdHVwbGUgdG8gYSBzdHJpbmcgaW4gdGhlIGZvcm0gQW4rQi5cclxuICovXHJcbmZ1bmN0aW9uIG50aFR1cGxlVG9TdHJpbmcoIHZhbDogW251bWJlciwgbnVtYmVyP10pOiBzdHJpbmdcclxue1xyXG5cdGxldCB2MCA9IHZhbDJzdHIoIHZhbFswXSk7XHJcblx0bGV0IHYxbiA9IHZhbFsxXTtcclxuXHJcblx0Ly8gdGhlICchdjFuJyBleHByZXNzaW9uIGNvdmVycyBudWxsLCB1bmRlZmluZWQgYW5kIDAuXHJcblx0bGV0IHYxID0gIXYxbiA/IFwiXCIgOiB2MW4gPiAwID8gXCIrXCIgKyB2YWwyc3RyKCB2MW4pIDogXCItXCIgKyB2YWwyc3RyKCAtdjFuKTtcclxuXHJcblx0cmV0dXJuIGAke3YwfW4ke3YxfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvclRvU3RyaW5nKCB2YWw6IENzc1NlbGVjdG9yKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcblx0XHRhcnJTZXA6IFwiXCJcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcGFyYW1ldGVyaXplZCBwc2V1ZG8gZW50aXR5LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBzZXVkb0VudGl0eVRvU3RyaW5nKCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZhbDogYW55KTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWVudGl0eU5hbWUpXHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0aWYgKGVudGl0eU5hbWUuc3RhcnRzV2l0aCggXCI6bnRoXCIpKVxyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBmcm9tQXJyYXk6IG50aFR1cGxlVG9TdHJpbmcgfSk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbDJzdHIodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgRXh0ZW5kZWRTdHlsZXNldCwgQW5pbWF0aW9uX1NpbmdsZSwgVGltaW5nRnVuY3Rpb25fU2luZ2xlLCBCYWNrZ3JvdW5kX1NpbmdsZSwgQmFja2dyb3VuZFNpemVfU2luZ2xlLFxyXG4gICAgQm9yZGVySW1hZ2VfT2JqZWN0LCBCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZSwgQm94U2hhZG93X1NpbmdsZSwgQm9yZGVyUmFkaXVzX1N0eWxlVHlwZSxcclxuICAgIEJvcmRlcl9TdHlsZVR5cGUsIENvbHVtbnNfU3R5bGVUeXBlLCBDdXJzb3JfU3R5bGVUeXBlLCBGbGV4X1N0eWxlVHlwZSwgRm9udF9TdHlsZVR5cGUsXHJcbiAgICBHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGUsIEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlLCBNYXJrZXJfU3R5bGVUeXBlLCBSb3RhdGVfU3R5bGVUeXBlLFxyXG4gICAgVGV4dERlY29yYXRpb25fU3R5bGVUeXBlLCBUcmFuc2l0aW9uX1NpbmdsZSwgT2Zmc2V0X1N0eWxlVHlwZSwgU3R5bGVzZXQsIEN1c3RvbVZhcl9TdHlsZVR5cGUsXHJcbiAgICBWYXJUZW1wbGF0ZU5hbWUsIFN1cHBvcnRzUXVlcnksIFNpbmdsZVN1cHBvcnRzUXVlcnksIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbiwgR3JpZFRyYWNrXHJcbn0gZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWQsIENzc1JhZGl1cywgT25lT3JNYW55LCBDc3NNdWx0aUxlbmd0aCwgQ3NzTXVsdGlUaW1lfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbWVsVG9EYXNoLCBkYXNoVG9DYW1lbCwgdmFsMnN0ciwgYXJyMnN0ciwgSVZhbHVlQ29udmVydE9wdGlvbnMsXHJcbiAgICBwb3Myc3RyLCBtdWx0aVBvczJzdHIsIENzc0xlbmd0aE1hdGgsIENzc1RpbWVNYXRoLCBDc3NOdW1iZXJNYXRoLFxyXG4gICAgQ3NzQW5nbGVNYXRoLCBDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgQ3NzUmVzb2x1dGlvbk1hdGgsIHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcsXHJcbn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIjtcclxuaW1wb3J0IHtJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgZm9yIGNvbnZlcnRpbmcgQ1NTIHByb3BlcnR5IHR5cGVzIHRvIHN0cmluZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QoIHZhbDogQW5pbWF0aW9uX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImNvdW50XCIsIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIixcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcInN0YXRlXCIsXHJcbiAgICAgICAgXCJuYW1lXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUFuaW1hdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QW5pbWF0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE9uZU9yTWFueTxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+Pik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlciggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBzdGVwcygke3ZhbH0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXkoIHZhbDogYW55W10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsIGFzIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSlcclxuICAgICAgICA6IGFycjJzdHIoIHZhbCwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlLCBcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHN0ZXBzIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2WzBdIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uIFlvdSBoYXZlOiAke3ZbMF19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIoIHZbMF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGFuIEludGVnZXIuIFlvdSBoYXZlOiAke3ZbMF19YCk7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBzdGVwcygke3ZbMF19JHt2Lmxlbmd0aCA9PT0gMiA/IFwiLFwiICsgdlsxXSA6IFwiXCJ9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlemllciBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8IDAgfHwgdlswXSA+IDEgfHwgdlsyXSA8IDAgfHwgdlsyXSA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBGaXJzdCBhbmQgdGhpcmQgcGFyYW1ldGVycyBvZiBjdWJpYy1iZXppZXIgYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxLiBZb3UgaGF2ZSAke3ZbMF19IGFuZCAke3ZbMl19YCk7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjdWJpYy1iZXppZXIoJHt2WzBdfSwke3ZbMV19LCR7dlsyXX0sJHt2WzNdfSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0KCB2YWw6IEJhY2tncm91bmRfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXSxcclxuICAgICAgICBcImltYWdlXCIsXHJcbiAgICAgICAgW1wicG9zaXRpb25cIiwgcG9zMnN0cl0sXHJcbiAgICAgICAgW1wic2l6ZVwiLCBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLCBcIi9cIl0sXHJcbiAgICAgICAgXCJyZXBlYXRcIixcclxuICAgICAgICBcImF0dGFjaG1lbnRcIixcclxuICAgICAgICBcIm9yaWdpblwiLFxyXG4gICAgICAgIFwiY2xpcFwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxCYWNrZ3JvdW5kX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QmFja2dyb3VuZFNpemVfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlVG9TdHJpbmcoIHZhbDogQm9yZGVySW1hZ2VfT2JqZWN0KTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHdpZHRoIGlzIHNwZWNpZmllZCwgYnV0IHNsaWNlIGlzIG5vdCwgd2UgbmVlZCB0byBzZXQgc2xpY2UgdG8gdGhlIGRlZmF1bHQgMTAwJSB2YWx1ZTtcclxuICAgIC8vIGlmIG91dHNldCBpcyBzcGVjaWZpZWQgYnV0IHdpZHRoIGlzIG5vdC4gd2UgbmVlZCB0byBzZXQgd2lkdGggdG8gdGhlIGRlZmF1bHQgMSB2YWx1ZTtcclxuICAgIGxldCB2YWxDb3B5OiBCb3JkZXJJbWFnZV9PYmplY3QgPSBPYmplY3QuYXNzaWduKCB7fSwgdmFsKTtcclxuICAgIGlmICh2YWwuc2xpY2UgPT0gbnVsbCAmJiAodmFsLndpZHRoICE9IG51bGwgfHwgdmFsLm91dHNldCAhPSBudWxsKSlcclxuICAgICAgICB2YWxDb3B5LnNsaWNlID0gXCIxMDAlXCI7XHJcbiAgICBpZiAodmFsLndpZHRoID09IG51bGwgJiYgdmFsLm91dHNldCAhPSBudWxsKVxyXG4gICAgICAgIHZhbENvcHkud2lkdGggPSAxO1xyXG5cclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWxDb3B5LCBbXHJcbiAgICAgICAgXCJzb3VyY2VcIixcclxuICAgICAgICBbXCJzbGljZVwiLCBcImJvcmRlckltYWdlU2xpY2VcIl0sXHJcbiAgICAgICAgW1wid2lkdGhcIiwgbnVsbCwgXCIvXCJdLFxyXG4gICAgICAgIFtcIm91dHNldFwiLG51bGwsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHNsaWNlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogdiA9PiB2YWwyc3RyKCB2LCB7XHJcbiAgICAgICAgICAgIGZyb21Cb29sOiAoKSA9PiBcImZpbGxcIixcclxuICAgICAgICAgICAgZnJvbU51bWJlcjogdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0KCB2YWw6IEJveFNoYWRvd19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImluc2V0XCIsIHYgPT4gdiA/IFwiaW5zZXRcIiA6IFwiXCJdLFxyXG4gICAgICAgIFtcInhcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJ5XCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiYmx1clwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInNwcmVhZFwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29ybmVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1JhZGl1cz4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxCb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggdlswXSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3byBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzID0gYXJyMnN0ciggdlswXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBzICs9IFwiIC8gXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIGFycjJzdHIoIHZbMV0sIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gc2luZ2xlIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzaWRlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVyVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Qm9yZGVyX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidWY6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGlmICh2WzBdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzBdKSlcclxuXHJcbiAgICAgICAgICAgIGlmICh2WzFdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggdmFsMnN0cih2WzFdKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodlsyXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIGNvbG9yVG9TdHJpbmcodlsyXSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1Zi5qb2luKFwiIFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2x1bW5zIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sdW1uc1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENvbHVtbnNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHZbMF0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsxXSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjdXJzb3Igc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjdXJzb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDdXJzb3JfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyB0aGUgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LiBJZiBpdCBpcyBhbiBhcnJheSxcclxuICAgIC8vIGlmIHRoZSBmaXJzdCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIHRoZW4gd2UgbmVlZCB0byB1c2Ugc3BhY2UgYXMgYSBzZXBhcmF0b3IgKGJlY2F1c2VcclxuICAgIC8vIHRoaXMgaXMgYSBVUkwgd2l0aCBvcHRpb25hbCBudW1iZXJzIGZvciB0aGUgaG90IHNwb3QpOyBvdGhlcndpc2UsIHdlIHVzZSBjb21tYSBhcyBhXHJcbiAgICAvLyBzZXBhcmF0b3IgLSBiZWNhdXNlIHRoZXNlIGFyZSBtdWx0aXBsZSBjdXJzb3IgZGVmaW5pdGlvbnMuXHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHYubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIodik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2WzFdID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIoIHYsIHsgYXJyU2VwOiBcIiBcIn0pXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIoIHYsIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJJdGVtRnVuYzogY3Vyc29yVG9TdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxleFRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEZsZXhfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5qb2luKCBcIiBcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB2WzBdICsgXCIgXCIgKyB2WzFdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMl0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250X2Zyb21PYmplY3QoIHZhbDogYW55KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJzdHlsZVwiLCBmb250U3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJ2YXJpYW50XCIsXHJcbiAgICAgICAgXCJ3ZWlnaHRcIixcclxuICAgICAgICBcInN0cmV0Y2hcIixcclxuICAgICAgICBbXCJzaXplXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wibGluZUhlaWdodFwiLCBudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgXCJmYW1pbHlcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Rm9udF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IFwib2JsaXF1ZSBcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCB2KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JpZFRlbXBsYXRlQXJlYXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHZhbCBjYW4gYmUgYXJyYXkgb2YgZnVuY3Rpb25zIChJUXVvdGVkUHJveHlbXSkgb3IgYXJyYXlzIChHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb25bXSlcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUdyaWRUZW1wbGF0ZUFyZWFzRnJvbURlZmluaXRpb25zKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgYXJyYXkgb2YgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uIG9iamVjdHMgdG8gYSBzdHJpbmcgdGhhdCBpcyBzdWl0YWJsZSBmb3JcclxuICogdGhlIGdyaWQtdGVtcGxhdGUtYXJlYXMgZm9ybWF0LlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlR3JpZFRlbXBsYXRlQXJlYXNGcm9tRGVmaW5pdGlvbnMoIGRlZnM6IEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbltdKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBzaXplIG9mIHRoZSBtYXRyaXggZnJvbSB0aGUgYXJlYXMnIHNpemVzXHJcbiAgICBsZXQgcm93Q291bnQgPSAwLCBjb2xDb3VudCA9IDA7XHJcbiAgICBmb3IoIGxldCBkZWYgb2YgZGVmcylcclxuICAgIHtcclxuICAgICAgICByb3dDb3VudCA9IE1hdGgubWF4KCByb3dDb3VudCwgZGVmWzNdKTtcclxuICAgICAgICBjb2xDb3VudCA9IE1hdGgubWF4KCBjb2xDb3VudCwgZGVmWzRdKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm93Q291bnQgPT09IDAgfHwgY29sQ291bnQgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIHJvd3Mgd2hlcmUgZXZlcnkgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBjZWxsc1xyXG4gICAgbGV0IG1hdHJpeCA9IG5ldyBBcnJheTxzdHJpbmdbXT4ocm93Q291bnQpO1xyXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG4gICAgICAgIG1hdHJpeFtpXSA9IG5ldyBBcnJheTxzdHJpbmc+KGNvbENvdW50KTtcclxuXHJcbiAgICAvLyBnbyBvdmVyIGRlZmluaXRpb25zIGFuZCBmaWxsIHRoZSBhcHByb3ByaWF0ZSBwbGFjZXMgaW4gdGhlIGNlbGxzIHdpdGggYXJlYSBuYW1lc1xyXG4gICAgZm9yKCBsZXQgZGVmIG9mIGRlZnMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB2YWwyc3RyKCBkZWZbMF0pO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSBkZWZbMV07IGkgPD0gZGVmWzNdOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoIGxldCBqID0gZGVmWzJdOyBqIDw9IGRlZls0XTsgaisrKVxyXG4gICAgICAgICAgICAgICAgbWF0cml4W2ktMV1bai0xXSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdvIG92ZXIgb3VyIG1hdHJpeCBhbmQgZm9yIGV2ZXJ5IHJvdyBjcmVhdGUgYSBxdW90ZWQgc3RyaW5nLiBTaW5jZSBvdXIgY2VsbCBhcnJheXMgbWF5IGJlXHJcbiAgICAvLyBzcGFyc2UsIHVzZSBkb3QgZm9yIHRoZSB1bmRlZmluZWQgY2VsbHNcclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKylcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93TmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yKCBsZXQgaiA9IDA7IGogPCByb3dDb3VudDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBtYXRyaXhbaV1bal07XHJcbiAgICAgICAgICAgIHJvd05hbWVzLnB1c2goIG5hbWUgPyBuYW1lIDogXCIuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzICs9IGBcIiR7cm93TmFtZXMuam9pbihcIiBcIil9XCJcXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmlkVHJhY2tUb1N0cmluZyggdmFsOiBHcmlkVHJhY2spOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2KSxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYFske2FycjJzdHIodil9XWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyaWRBeGlzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8R3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdiksXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGdyaWRUcmFja1RvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtYXJrZXJTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE1hcmtlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqOiB2ID0+IGB1cmwoIyR7KHZhbCBhcyBJSURSdWxlKS5uYW1lfSlgXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByb3RhdGVUb1N0cmluZyggdmFsOlJvdGF0ZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt2WzBdfSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHZbMV0pfWA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt2WzBdfSAke3ZbMV19ICR7dlsyXX0gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyh2WzNdKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFwibGluZVwiLFxyXG4gICAgICAgIFwic3R5bGVcIixcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXSxcclxuICAgICAgICBbXCJ0aGlja25lc3NcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxUcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcInByb3BlcnR5XCIsIGNhbWVsVG9EYXNoXSxcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRyYW5zaXRpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvZmZzZXRUb1N0cmluZyggdmFsOiBPZmZzZXRfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJwb3NpdGlvblwiLCBcIm9mZnNldFBvc2l0aW9uXCJdLFxyXG4gICAgICAgIFtcInBhdGhcIiwgXCJvZmZzZXRQYXRoXCJdLFxyXG4gICAgICAgIFtcImRpc3RhbmNlXCIsIFwib2Zmc2V0RGlzdGFuY2VcIl0sXHJcbiAgICAgICAgW1wicm90YXRlXCIsIFwib2Zmc2V0Um90YXRlXCJdLFxyXG4gICAgICAgIFtcImFuY2hvclwiLCBcIm9mZnNldEFuY2hvclwiLCBcIi9cIl0sXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyAqL1xyXG5leHBvcnQgdHlwZSBUb1N0cmluZ0Z1bmMgPSAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gYSBDU1Mgc3RyaW5nIHVzaW5nIHRoZSBpbmZvIHBhcmFtZXRlciB0byBpbmZvcm0gaG93IHRoZSBvYmplY3Qnc1xyXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncy4gVGhlIGluZm8gcGFyYW1ldGVyIGlzIGFuIGFycmF5IG9mIGVpdGhlciBzdHJpbmdzXHJcbiAqIG9yIHR3by0gb3IgdGhyZS1lbGVtZW50IHR1cGxlcy4gVGhlIG9ubHkgc3RyaW5nIGFuZCB0aGUgZmlyc3QgdHVwbGUgZWxlbWVudCBjb3JyZXNwb25kcyB0byBhXHJcbiAqIHByb3BlcnR5IGV4cGVjdGVkIGluIHRoZSB2YWx1ZSBvYmplY3QgdG8gYmUgY29udmVydGVkLiBFYWNoIHByb3BlcnR5IGlzIGNvbnZlcnRlZCBhY2NvcmRpbmdcclxuICogdG8gdGhlIGZvbGxvd2luZyBydWxlczpcclxuICogLSBJZiB0aGUgYXJyYXkgaXRlbSBpcyBqdXN0IGEgc3RyaW5nLCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZ1xyXG4gKiAgIHRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uLlxyXG4gKiAtIElmIHRoZSBzZWNvbmQgZWxlbWVudCBpcyBudWxsIG9yIHVuZGVmaW5lZCwgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmdcclxuICogICB0aGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbi4uXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIGEgc3RyaW5nIGl0IGlzIHRyZWF0ZWQgYXMgYSBuYW1lIG9mIGEgbG9uZ2hhbmQgc3R5bGUgcHJvcGVydHkuIFRoZVxyXG4gKiAgIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nIHRoZSBzdHlsZVByb3BUb1N0cmluZyBmdW5jdGlvbiBmb3IgdGhpcyBsb25naGFuZCBzdHlsZVxyXG4gKiAgIHByb3BlcnR5LlxyXG4gKiAtIElmIHRoZSBzZWNvbmQgZWxlbWVudCBpcyBhIGZ1bmN0aW9uLCBpdCBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIHZhbHVlJ3MgcHJvcGVydHkuXHJcbiAqIC0gSWYgYSB0aGlyZCBlbGVtZW50IGV4aXN0cyBpbiB0aGUgdHVwbGUgaXQgaXMgdHJlYXRlZCBhcyBhIHByZWZpeCB0byBiZSBwbGFjZWQgYmVmb3JlIHRoZVxyXG4gKiAgIGNvbnZlcnRlZCBwcm9wZXJ0eSB2YWx1ZS5cclxuICogXHJcbiAqIFRoZSBvcmRlciBvZiB0aGUgbmFtZXMgZGV0ZXJtaW5lcyBpbiB3aGljaCBvcmRlciB0aGUgcHJvcGVydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmoyc3RyKCB2YWw6IGFueSxcclxuICAgIGluZm86IChzdHJpbmcgfCBbc3RyaW5nLCBudWxsIHwgc3RyaW5nIHwgVG9TdHJpbmdGdW5jLCBzdHJpbmc/XSApW10sXHJcbiAgICBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG5cclxuICAgIGxldCBidWY6IChzdHJpbmcpW10gPSBbXTtcclxuICAgIGluZm8uZm9yRWFjaCggbmFtZU9yVHVwbGUgPT5cclxuICAgIHtcclxuICAgICAgICAvLyBnZXQgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IGluIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlO1xyXG4gICAgICAgIC8vIGlmIHRoZSBwcm9wZXJ0aWVzIHZhbHVlIGlzIG5vdCBkZWZpbmVkLCBza2lwIGl0LlxyXG4gICAgICAgIGxldCBwcm9wTmFtZSA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IG5hbWVPclR1cGxlIDogbmFtZU9yVHVwbGVbMF07XHJcbiAgICAgICAgbGV0IHByb3BWYWwgPSB2YWxbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB3ZSBoYXZlIGEgcHJlZml4XHJcbiAgICAgICAgbGV0IHByZWZpeCA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IG5hbWVPclR1cGxlWzJdO1xyXG4gICAgICAgIGlmIChwcmVmaXgpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBwcmVmaXgpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydG9yID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogbmFtZU9yVHVwbGVbMV07XHJcbiAgICAgICAgaWYgKCFjb252ZXJ0b3IpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWwyc3RyKCBwcm9wVmFsKSk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbnZlcnRvciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgYnVmLnB1c2goIHN0eWxlUHJvcFRvU3RyaW5nKCBjb252ZXJ0b3IsIHByb3BWYWwsIHRydWUpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb252ZXJ0b3IoIHByb3BWYWwpKTtcclxuICAgIH0pO1xyXG5cclxuXHRyZXR1cm4gYnVmLmpvaW4oc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBoYW5kbGluZyBTdHlsZXNldHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LiBBbGwgcmVndWxhciBwcm9wZXJ0aWVzIGFyZVxyXG4gKiByZXBsYWNlZC4gVGhlIFwiLS1cIiBwcm9wZXJ0eSBnZXRzIHNwZWNpYWwgdHJlYXRtZW50IGJlY2F1c2UgaXQgaXMgYW4gYXJyYXkuXHJcbiAqIEBwYXJhbSB0YXJnZXQgXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0IGlmIG5vdCBudWxsIG9yIGEgbmV3IHN0eWxlc2V0IG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc2V0cyggdGFyZ2V0OiBTdHlsZXNldCB8IHVuZGVmaW5lZCB8IG51bGwsXHJcbiAgICBzb3VyY2U6IFN0eWxlc2V0KTogU3R5bGVzZXRcclxue1xyXG4gICAgaWYgKCFzb3VyY2UpXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCA/IHRhcmdldCA6IHt9O1xyXG5cclxuICAgIC8vIGlmIHRhcmdldCBpcyBub3QgZGVmaW5lZCwgY3JlYXRlIGl0IGFzIGFuIGVtcHR5IG9iamVjdC4gVGhpcyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBhZnRlclxyXG4gICAgLy8gcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2UgYXJlIGNvcGllZCB0byBpdC5cclxuICAgIGlmICghdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGRlZmluZWQuIElmIG5vdCwgd2UgY2FuIGp1c3QgdXNlIHRoZSBPYmplY3QuYXNzaWduIGZ1bmN0aW9uLlxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBhbmQgaW1wb3J0YW50IHByb3BlcnRpZXNcclxuICAgIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGFyZ2V0LCBzb3VyY2UpO1xyXG5cclxuICAgIC8vIGNvcHkgYWxsIG90aGVyIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlXHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc291cmNlKVxyXG5cdHtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiIVwiIHx8IHByb3BOYW1lID09PSBcIi0tXCIpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XHJcblx0fVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBcIi0tXCIgcHJvcGVydHkgZnJvbSB0aGUgc291cmNlIHN0eWxlc2V0IHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0YXJnZXQ6IFN0eWxlc2V0LFxyXG4gICAgc291cmNlOiBTdHlsZXNldCk6IHZvaWRcclxue1xyXG4gICAgLy8gY2hlY2sgd2hldGhlciBjdXN0b20gcHJvcGVydGllcyBhbmQgaW1wb3J0YW50IHByb3BlcnRpZXMgYXJlIGRlZmluZWRcclxuICAgIGxldCBzb3VyY2VDdXN0b21Qcm9wcyA9IHNvdXJjZVtcIi0tXCJdO1xyXG4gICAgaWYgKCFzb3VyY2VDdXN0b21Qcm9wcylcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgLy8gbWVyZ2UgY3VzdG9tIHByb3BlcnRpZXNcclxuICAgIGlmIChzb3VyY2VDdXN0b21Qcm9wcylcclxuICAgIHtcclxuICAgICAgICBsZXQgdGFyZ2V0Q3VzdG9tUHJvcHMgPSB0YXJnZXRbXCItLVwiXTtcclxuICAgICAgICB0YXJnZXRbXCItLVwiXSA9ICF0YXJnZXRDdXN0b21Qcm9wcyA/IHNvdXJjZUN1c3RvbVByb3BzLnNsaWNlKCkgOiB0YXJnZXRDdXN0b21Qcm9wcy5jb25jYXQoIHNvdXJjZUN1c3RvbVByb3BzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlc2V0IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9TdHJpbmcoIHN0eWxlc2V0OiBTdHlsZXNldCk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXN0eWxlc2V0KVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuXHJcblx0Zm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0LCAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpc0N1c3RvbTogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmIChpc0N1c3RvbSlcclxuICAgICAgICAgICAgcyArPSBgJHtuYW1lfToke3ZhbHVlfTtgO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBgJHtjYW1lbFRvRGFzaChuYW1lKX06JHt2YWx1ZX07YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBuYW1lIGFuZCBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICogQHBhcmFtIGN1c3RvbVZhbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXN0b21Qcm9wTmFtZUFuZFZhbHVlKCBjdXN0b21WYWw6IEN1c3RvbVZhcl9TdHlsZVR5cGUpOiBbc3RyaW5nPyxzdHJpbmc/XVxyXG57XHJcbiAgICBpZiAoIWN1c3RvbVZhbClcclxuICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgbGV0IHZhck5hbWU6IHN0cmluZztcclxuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgbGV0IHZhbHVlOiBhbnk7XHJcbiAgICBpZiAoY3VzdG9tVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gKGN1c3RvbVZhbFswXSBhcyBWYXJSdWxlKS5jc3NOYW1lO1xyXG4gICAgICAgIHRlbXBsYXRlID0gY3VzdG9tVmFsWzBdLnRlbXBsYXRlO1xyXG4gICAgICAgIHZhbHVlID0gY3VzdG9tVmFsWzFdXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IGN1c3RvbVZhbFswXTtcclxuICAgICAgICBpZiAoIXZhck5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICBlbHNlIGlmICghdmFyTmFtZS5zdGFydHNXaXRoKFwiLS1cIikpXHJcbiAgICAgICAgICAgIHZhck5hbWUgPSBcIi0tXCIgKyB2YXJOYW1lO1xyXG5cclxuICAgICAgICB0ZW1wbGF0ZSA9IGN1c3RvbVZhbFsxXTtcclxuICAgICAgICBpZiAoIXZhck5hbWUgfHwgIXRlbXBsYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIHZhbHVlID0gY3VzdG9tVmFsWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbdmFyTmFtZSwgc3R5bGVQcm9wVG9TdHJpbmcoIHRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSldO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgdG8gdGhlIENTUyBzdHlsZSBzdHJpbmcuIFByb3BlcnR5IG5hbWUgY2FuIGJlIGluIGVpdGhlclxyXG4gKiBkYXNoIG9yIGNhbWVsIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXByb3BOYW1lKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgcHJvcGVydHlcclxuICAgIGxldCBpbmZvOiBhbnkgPSBTdHlsZVByb3BlcnR5SW5mb3NbZGFzaFRvQ2FtZWwocHJvcE5hbWUpXTtcclxuXHJcbiAgICAvLyBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdGhlIFwiIVwiIHByb3BlcnR5LCB0aGVuIHRoZSBhY3R1YWwgdmFsdWUgaXMgdGhlXHJcbiAgICAvLyB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGFuZCB3ZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnXHJcbiAgICBsZXQgdmFyVmFsdWUgPSBwcm9wVmFsO1xyXG4gICAgbGV0IGltcEZsYWcgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJvYmplY3RcIiAmJiBcIiFcIiBpbiBwcm9wVmFsKVxyXG4gICAge1xyXG4gICAgICAgIHZhclZhbHVlID0gcHJvcFZhbFtcIiFcIl07XHJcbiAgICAgICAgaW1wRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0cmluZ1ZhbHVlID0gIWluZm9cclxuICAgICAgICA/IHZhbDJzdHIoIHZhclZhbHVlKVxyXG4gICAgICAgIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgPyB2YWwyc3RyKCB2YXJWYWx1ZSwgaW5mbyBhcyBJVmFsdWVDb252ZXJ0T3B0aW9ucylcclxuICAgICAgICAgICAgOiB0eXBlb2YgaW5mbyA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgPyB2YWx1ZVRvU3RyaW5nQnlXZWxsS25vd25GdW5jKCB2YXJWYWx1ZSwgaW5mbylcclxuICAgICAgICAgICAgICAgIDogKGluZm8gYXMgVG9TdHJpbmdGdW5jKSggdmFyVmFsdWUpO1xyXG5cclxuICAgIGlmICghc3RyaW5nVmFsdWUgJiYgIXZhbHVlT25seSlcclxuICAgICAgICBzdHJpbmdWYWx1ZSA9IFwiaW5pdGlhbFwiO1xyXG5cclxuICAgIGlmIChpbXBGbGFnKVxyXG4gICAgICAgIHN0cmluZ1ZhbHVlICs9IFwiICFpbXBvcnRhbnRcIjtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gc3RyaW5nVmFsdWUgOiBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfToke3N0cmluZ1ZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZvciBlYWNoIHByb3BlcnR5IC0gcmVndWxhciBhbmQgY3VzdG9tIC0gaW4gdGhlIGdpdmVuIHN0eWxlc2V0IGludm9rZXMgdGhlIGFwcHJvcHJpYXRlXHJcbiAqIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgcHJvcGVydHkgbmFtZSBhbmQgdGhlIHZhbHVlIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBcclxuICogQHBhcmFtIGZvclByb3AgXHJcbiAqIEBwYXJhbSBmb3JDdXN0b21Qcm9wIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckFsbFByb3BzSW5TdHlsc2V0KCBzdHlsZXNldDogU3R5bGVzZXQsXHJcbiAgICBmb3JQcm9wOiAobmFtZTogc3RyaW5nLCB2YWw6IHN0cmluZywgaXNDdXN0b206IGJvb2xlYW4pID0+IHZvaWQpXHJcbntcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcblx0XHRpZiAocHJvcE5hbWUgPT09IFwiLS1cIilcclxuXHRcdHtcclxuXHRcdFx0Ly8gc3BlY2lhbCBoYW5kbGluZyBvZiB0aGUgXCItLVwiIHByb3BlcnR5LCB3aGljaCBpcyBhbiBhcnJheSB3aGVyZSBlYWNoIGl0ZW0gaXNcclxuXHRcdFx0Ly8gYSB0d28taXRlbSBvciB0aHJlZS1pdGVtIGFycmF5XHJcblx0XHRcdGxldCBwcm9wVmFsID0gc3R5bGVzZXRbcHJvcE5hbWVdIGFzIEN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuXHRcdFx0Zm9yKCBsZXQgY3VzdG9tVmFsIG9mIHByb3BWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWN1c3RvbVZhbClcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgW3Zhck5hbWUsIHZhclZhbHVlXSA9IGdldEN1c3RvbVByb3BOYW1lQW5kVmFsdWUoIGN1c3RvbVZhbCk7XHJcblx0XHRcdFx0aWYgKCF2YXJOYW1lKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0aWYgKHZhclZhbHVlID09IG51bGwpXHJcblx0XHRcdFx0XHR2YXJWYWx1ZSA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdGZvclByb3AoIHZhck5hbWUsIHZhclZhbHVlLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgZm9yUHJvcCggcHJvcE5hbWUsIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSwgc3R5bGVzZXRbcHJvcE5hbWVdLCB0cnVlKSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIG11bHRpLWxlbmd0aCB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlXHJcbi8vIGl0ZW1zIHdpbGwgYmUgc2VwYXJhdGVkIGJ5IHNwYWNlLlxyXG5mdW5jdGlvbiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgXCIgXCIpO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIG11bHRpLXRpbWUgdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZVxyXG4vLyBpdGVtcyB3aWxsIGJlIHNlcGFyYXRlZCBieSBjb21tYS5cclxuZnVuY3Rpb24gbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gQ3NzVGltZU1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiLFwiKTtcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlIGl0ZW1zIHdpbGwgYmVcclxuLy8gc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG5mdW5jdGlvbiBhcnJheVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IGFueSlcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBhcnJTZXA6IFwiLFwiIH0pO1xyXG59O1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlIGl0ZW1zIHdpbGwgYmVcclxuLy8gc2VwYXJhdGVkIGJ5IHNsYXNoLlxyXG5mdW5jdGlvbiBhcnJheVRvU3RyaW5nV2l0aFNsYXNoKCB2YWw6IGFueSlcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBhcnJTZXA6IFwiL1wiIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTnVtZXJpYyBpZGVudGlmaWVycyBjb3JyZXNwb25kaW5nIHRvIHdlbGwga25vd24gZnVuY3Rpb25zIHVzZWQgdG8gY29udmVydCBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXNcclxuICogdG8gc3RyaW5ncy4gVGhpcyBpcyB1c2VkIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgb2JqZWN0IHVzZWQgZm9yIG1hcHBpbmcgc3R5bGUgcHJvcGVydGllcyB0b1xyXG4gKiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cclxuICogXHJcbiAqIE5vdGUhISE6IHRoZSB2YWx1ZXMgaW4gdGhlIGVudW1lcmF0aW9uIGNhbm5vdCBiZSBjaGFuZ2VkIC0gb3RoZXJ3aXNlLCBpdCB3aWxsIG5vdCBiZSBiYWNrd2FyZHNcclxuICogY29tcGF0aWJsZS4gQWxsIG5ldyB2YWx1ZXMgbXVzdCBiZSBhcHBlbmRlZCBhdCB0aGUgZW5kLlxyXG4gKi9cclxuY29uc3QgZW51bSBXZWxsS25vd25GdW5jXHJcbntcclxuICAgIExlbmd0aCA9IDEsXHJcbiAgICBDb2xvcixcclxuICAgIEJvcmRlcixcclxuICAgIFBvc2l0aW9uLFxyXG4gICAgQ29ybmVyUmFkaXVzLFxyXG4gICAgTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBNdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICBBcnJheVdpdGhDb21tYSxcclxuICAgIEFycmF5V2l0aFNsYXNoLFxyXG4gICAgR3JpZEF4aXMsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBzdHJpbmcgdXNpbmcgYSB3ZWxsLWtub3duIGZ1bmN0aW9uIGluZGljYXRlZCBieSB0aGUgZ2l2ZW5cclxuICogZW51bWVyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSB2YWwgXHJcbiAqIEBwYXJhbSBmdW5jVHlwZSBcclxuICovXHJcbmZ1bmN0aW9uIHZhbHVlVG9TdHJpbmdCeVdlbGxLbm93bkZ1bmMoIHZhbDogYW55LCBmdW5jVHlwZTogV2VsbEtub3duRnVuYyk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgZnVuYyA9XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuTGVuZ3RoID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Db2xvciA/IGNvbG9yVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkJvcmRlciA/IGJvcmRlclRvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Qb3NpdGlvbiA/IHBvczJzdHIgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyA/IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSA/IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSA/IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSA/IGFycmF5VG9TdHJpbmdXaXRoQ29tbWEgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoID8gYXJyYXlUb1N0cmluZ1dpdGhTbGFzaCA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMgPyBncmlkQXhpc1RvU3RyaW5nIDpcclxuICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBmdW5jID8gZnVuYyh2YWwpIDogXCJcIjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVnaXN0cnkgb2YgQ1NTIHByb3BlcnRpZXMgdGhhdCBzcGVjaWZpZXMgaG93IHRoZWlyIHZhbHVlcyBzaG91bGQgYmUgY29udmVydGVkIHRvIHN0cmluZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byB0aGUgU3R5bGVQcm9wZXJ0eUluZm8gb2JqZWN0cyBkZXNjcmliaW5nIGN1c3RvbSBhY3Rpb25zIG5lY2Vzc2FyeSB0b1xyXG4gKiBjb252ZXJ0IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgQ1NTLWNvbXBsaWFudCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBTdHlsZVByb3BlcnR5SW5mb3M6IHsgW0sgaW4gVmFyVGVtcGxhdGVOYW1lXT86IChXZWxsS25vd25GdW5jIHwgVG9TdHJpbmdGdW5jIHwgSVZhbHVlQ29udmVydE9wdGlvbnMpIH0gPVxyXG57XHJcbiAgICBhbmltYXRpb246IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVBbmltYXRpb25fZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbk5hbWU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZENsaXA6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB2ID0+IG11bHRpUG9zMnN0ciggdiwgXCIsXCIpLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRTaXplOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSxcclxuICAgIGJhc2VsaW5lU2hpZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckJvdHRvbTogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyQ29sb3I6IHtcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2U6IHtcclxuICAgICAgICBmcm9tT2JqOiBib3JkZXJJbWFnZVRvU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGJvcmRlckltYWdlU2xpY2U6IGJvcmRlckltYWdlU2xpY2VUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlcklubGluZUVuZFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckxlZnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyTGVmdENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyTGVmdFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJSaWdodENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgYm9yZGVyVG9wOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlclRvcENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJUb3BXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJXaWR0aDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGJvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3hTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBjYXJldENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY2xpcDogIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYHJlY3QoJHttdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlKHYpfWBcclxuICAgIH0sXHJcbiAgICBjb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGNvbHVtbkdhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBjb2x1bW5SdWxlOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGNvbHVtblJ1bGVDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGNvbHVtblJ1bGVXaWR0aDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGNvbHVtbnM6IGNvbHVtbnNUb1N0cmluZyxcclxuICAgIGNvbHVtbldpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGN1cnNvcjogY3Vyc29yVG9TdHJpbmcsXHJcblxyXG4gICAgZmlsbDogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGZpbGxPcGFjaXR5OiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZmxleDogZmxleFRvU3RyaW5nLFxyXG4gICAgZmxleEJhc2lzOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGZsb29kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBmb250OiB7XHJcbiAgICAgICAgZnJvbU9iajogZm9udF9mcm9tT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgZm9udFNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZm9udFN0eWxlOiBmb250U3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBnYXA6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBncmlkQ29sdW1uR2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGdyaWRHYXA6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBncmlkUm93R2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGdyaWRBcmVhOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoLFxyXG4gICAgZ3JpZEF1dG9Db2x1bW5zOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG4gICAgZ3JpZEF1dG9Sb3dzOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG4gICAgZ3JpZENvbHVtbjogV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCxcclxuICAgIGdyaWRSb3c6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBncmlkVGVtcGxhdGVBcmVhczogZ3JpZFRlbXBsYXRlQXJlYXNUb1N0cmluZyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcbiAgICBncmlkVGVtcGxhdGVSb3dzOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG5cclxuICAgIGhlaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgaW5saW5lU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgbGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGxpZ2h0aW5nQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcblxyXG4gICAgbWFyZ2luOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgbWFyZ2luQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5Cb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbklubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbkxlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmtlckVuZDogbWFya2VyU3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmtlck1pZDogbWFya2VyU3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmtlclN0YXJ0OiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4QmxvY2tTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1heEhlaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXhJbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1heFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1pbkJsb2NrU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtaW5IZWlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWluSW5saW5lU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblx0bWluV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIG9iamVjdFBvc2l0aW9uOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgb2Zmc2V0OiBvZmZzZXRUb1N0cmluZyxcclxuICAgIG9mZnNldEFuY2hvcjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIG9mZnNldERpc3RhbmNlOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG9mZnNldFBvc2l0aW9uOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgb2Zmc2V0Um90YXRlOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIG91dGxpbmVDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIG91dGxpbmVPZmZzZXQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHBhZGRpbmc6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBwYWRkaW5nQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0Jsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdJbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ1RvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwZXJzcGVjdGl2ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICBxdW90ZXM6IHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogdiA9PiBgXCIke3Z9XCJgXHJcbiAgICB9LFxyXG5cclxuICAgIHJpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHJvdGF0ZTogcm90YXRlVG9TdHJpbmcsXHJcbiAgICByb3dHYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHNjcm9sbGJhckNvbG9yOiB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBzY3JvbGxNYXJnaW46IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZTogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5MZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpblJpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpblRvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdCb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZTogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdSaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNoYXBlTWFyZ2luOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHN0b3BDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHN0cm9rZTogV2VsbEtub3duRnVuYy5Db2xvcixcclxuXHJcbiAgICB0YWJTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRleHRDb21iaW5lVXByaWdodDoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gYGRpZ2l0cyAke3Z9YFxyXG4gICAgfSxcclxuICAgIHRleHREZWNvcmF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqOiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRleHRFbXBoYXNpczoge1xyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHRleHRJbmRlbnQ6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0U2hhZG93OiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0U2l6ZUFkanVzdDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0LFxyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZVRyYW5zaXRpb25fZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbkRlbGF5OiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcsXHJcbiAgICB0cmFuc2xhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgdmVydGljYWxBbGlnbjogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgd2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgd2lsbENoYW5nZToge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IGNhbWVsVG9EYXNoXHJcbiAgICB9LFxyXG4gICAgd29yZFNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgLy8gc3BlY2lhbCBwcm9wZXJ0aWVzIGZvciBJVmFyUnVsZSB0eXBlc1xyXG4gICAgXCJDc3NMZW5ndGhcIjogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBcIkNzc0FuZ2xlXCI6IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NUaW1lXCI6IENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Jlc29sdXRpb25cIjogQ3NzUmVzb2x1dGlvbk1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzRnJlcXVlbmN5XCI6IENzc0ZyZXF1ZW5jeU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUGVyY2VudFwiOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQb3NpdGlvblwiOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgXCJDc3NDb2xvclwiOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHN1cHBvcnRzIHF1ZXJ5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU3VwcG9ydHNRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggcXVlcnksIHtcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIiBvciBcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCBxdWVyeSwge1xyXG4gICAgICAgIGZyb21PYmo6ICh2OiBFeHRlbmRlZFN0eWxlc2V0ICYgeyAkbmVnYXRlPzogYm9vbGVhbjsgfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoIHYpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm90ID0gdi4kbmVnYXRlID8gXCJub3RcIiA6IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAgYCR7bm90fSAoJHtwcm9wTmFtZXMubWFwKCAocHJvcE5hbWUpID0+XHJcbiAgICAgICAgICAgICAgICBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUgYXMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldCwgcXVlcnlbcHJvcE5hbWVdKSkuam9pbiggXCIpIGFuZCAoXCIpfSlgO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBFeHRlbmRlZCwgSUdlbmVyaWNQcm94eSwgQ3NzTnVtYmVyLCBDc3NNdWx0aU51bWJlciwgSU51bWJlckJhc2VNYXRoLFxyXG4gICAgQ3NzUG9zaXRpb24sIE11bHRpQ3NzUG9zaXRpb24sIE51bWJlckJhc2UsIE11bHRpTnVtYmVyQmFzZSxcclxuICAgIENzc0xlbmd0aCwgQ3NzTXVsdGlMZW5ndGgsIENzc0FuZ2xlLCBDc3NNdWx0aUFuZ2xlLCBDc3NUaW1lLCBDc3NNdWx0aVRpbWUsXHJcbiAgICBDc3NSZXNvbHV0aW9uLCBDc3NNdWx0aVJlc29sdXRpb24sIENzc0ZyZXF1ZW5jeSwgQ3NzTXVsdGlGcmVxdWVuY3ksXHJcbiAgICBDc3NQZXJjZW50LCBDc3NNdWx0aVBlcmNlbnQsIElDc3NMZW5ndGhNYXRoLFxyXG4gICAgSUNzc0FuZ2xlTWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLCBJQ3NzVGltZU1hdGgsXHJcbiAgICBOdW1iZXJUeXBlLCBMZW5ndGhUeXBlLCBQZXJjZW50VHlwZSwgQW5nbGVUeXBlLCBUaW1lVHlwZSwgUmVzb2x1dGlvblR5cGUsIEZyZXF1ZW5jeVR5cGVcclxufSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBkYXNoZS1jYXNlIHRvIGNhbWVsQ2FzZSwgZS5nLiBmb250LXNpemUgdG8gZm9udFNpemUuXHJcbiAqIEBwYXJhbSBkYXNoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdHJldHVybiBkYXNoLnJlcGxhY2UoIC8tKFthLXpBLVpdKS9nLCAoeCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjYW1lbENhc2UgdG8gZGFzaC1jYXNlLCBlLmcuIGZvbnRTaXplIHRvIGZvbnQtc2l6ZS5cclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYWx1ZUNvbnZlcnRPcHRpb25zIGludGVyZmFjZSBkZWZpbmVzIG9wdGlvbmFsIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnR2YWx1ZXMgb2YgZGlmZmVybnRcclxuICogdHlwZXMgdG8gc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlQ29udmVydE9wdGlvbnNcclxue1xyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICBmcm9tTnVsbD86ICggdmFsOiBudWxsIHwgdW5kZWZpbmVkKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgc3RyaW5nLiBUaGlzIGFsbG93cyB0cmFuc2Zvcm1pbmcgb25lIHN0cmluZyB0byBhbm90aGVyLlxyXG4gICAgZnJvbVN0cmluZz86ICggdmFsOiBzdHJpbmcpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBib29sZWFuXHJcbiAgICBmcm9tQm9vbD86ICh2YWw6IGJvb2xlYW4pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBudW1iZXJcclxuICAgIGZyb21OdW1iZXI/OiAodmFsOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gYXJyYXlcclxuICAgIGZyb21BcnJheT86ICh2YWw6IGFueVtdKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgZnJvbU9iaj86ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB0eXBlLXNwZWNpZmljIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkXHJcbiAgICBmcm9tQW55PzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIHRvIGNvbnZlcnQgYXJyYXkgaXRlbXMgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJJdGVtRnVuYz86ICh2OiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBTZXBhcmF0b3IgZm9yIGFycmF5IGl0ZW1zIC0gdXNlZCBvbmx5IGlmIGZyb21BcnJheSBpcyBub3QgZGVmaW5lZFxyXG4gICAgYXJyU2VwPzogc3RyaW5nO1xyXG5cclxuICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZXNlIGFyZSBhcmd1bWVudHMgdG8gcGFzcyB3aGVuIGludm9raW5nIGl0XHJcbiAgICBmdW5jQXJncz86IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIG9mIGFuIGFyYml0cmFyeSB0eXBlIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhlIG9wdGlvbmFsIG9wdGlvbnMgcGFyYW1ldGVyXHJcbiAqIGNhbiBkZWZpbmUgaG93IHNwZWNpZmljIHR5cGVzIGFyZSBjb252ZXJ0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsMnN0ciggdmFsOiBhbnksIG9wdGlvbnM/OiBJVmFsdWVDb252ZXJ0T3B0aW9ucyk6IHN0cmluZ1xyXG57XHJcbiAgIGlmICghb3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICAvLyBzdGFuZGFyZCBwcm9jZXNzaW5nOlxyXG4gICAgICAgIC8vIC0gbnVsbC91bmRlZmluZWQgYmVjb21lIGVtcHR5IHN0cmluZy5cclxuICAgICAgICAvLyAtIGNhbGwgdmFsdWVUb1N0cmluZyAocHJveHkgb2JqZWN0cykgaWYgZXhpc3QuXHJcbiAgICAgICAgLy8gLSBmdW5jdGlvbjogY2FsbCB3aXRob3V0IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgLy8gLSBldmVyeXRoaW5nIGVsc2U6IGNhbGwgdG9TdHJpbmcoKS5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdmFsKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvY2Vzc2luZyB3aXRoIG9wdGlvbnMuIEZvciBhbGwgdHlwZXMgZXhjZXB0IG51bGwgYW5kIHN0cmluZywgaWYgdGhlIHR5cGUtc3BlY2lmaWNcclxuICAgICAgICAvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgY2FsbCBmcm9tQW55IGlmIGRlZmluZWQuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVsbCA/IG9wdGlvbnMuZnJvbU51bGwoIHZhbCkgOiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21TdHJpbmcgPyBvcHRpb25zLmZyb21TdHJpbmcoIHZhbCkgOiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bWJlciA/IG9wdGlvbnMuZnJvbU51bWJlciggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIoIG9wdGlvbnMuZnVuY0FyZ3MgPyB2YWwoIC4uLm9wdGlvbnMuZnVuY0FyZ3MpIDogdmFsKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZyb21BcnJheSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BcnJheSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gb3B0aW9ucy5hcnJTZXAgIT0gbnVsbCA/IG9wdGlvbnMuYXJyU2VwIDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdmFsLCBvcHRpb25zLmFyckl0ZW1GdW5jIHx8IG9wdGlvbnMuZnJvbUFueSB8fCB1bmRlZmluZWQsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21PYmopXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tT2JqKCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQm9vbCA/IG9wdGlvbnMuZnJvbUJvb2woIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIGFycmF5IG9mIHRoZSBnaXZlbiB0eXBldG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEVsZW1lbnRzIG9mIHRoZSBhcnJheSBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycjJzdHIoIHZhbDogYW55W10sIGZ1bmM/OiAodikgPT4gc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAhdmFsIHx8IHZhbC5sZW5ndGggPT09IDBcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IHZhbC5maWx0ZXIoIHggPT4geCAhPSBudWxsKS5tYXAoIHkgPT4gZnVuYyA/IGZ1bmMoeSkgOiB2YWwyc3RyKCB5KSkuam9pbiggc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nIGlzIGEgdGFnIGZ1bmN0aW9uIGhlbHBlciB0aGF0IGNvbnZlcnRzIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aFxyXG4gKiBwYXJhbWV0ZXJzIHRvIGEgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBjb252ZXJ0IHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBwYXJhbXM6IGFueVtdLFxyXG4gICAgY29udmVydEZ1bmM/OiAoIHY6IGFueSkgPT4gc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIC8vIG51bWJlciBvZiBwYXJhbWV0ZXJzIGlzIGFsd2F5cyAxIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHN0cmluZyBwYXJ0c1xyXG4gICAgbGV0IHBhcmFtc0xlbiA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBpZiAocGFyYW1zTGVuID09PSAwKVxyXG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHBhcmFtc0xlbjsgaSsrKVxyXG4gICAgICAgIHMgKz0gcGFydHNbaV0gKyAoY29udmVydEZ1bmMgPyBjb252ZXJ0RnVuYyggcGFyYW1zW2ldKSA6IHZhbDJzdHIoIHBhcmFtc1tpXSkpO1xyXG5cclxuICAgIC8vIGFkZCB0aGUgbGFzdCBwYXJ0XHJcbiAgICByZXR1cm4gcyArIHBhcnRzW3BhcmFtc0xlbl07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWJlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIG9mIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnQgYSBudW1iZXIgdG8gYSBzdHJpbmcgKi9cclxudHlwZSBDb252ZXJ0TnVtYmVyRnVuY1R5cGUgPSAobjogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHNpbmdsZSBudW1lcmljIHZhbHVlIHRvIGEgQ1NTIHN0cmluZyBvcHRpb25hbGx5IGFwcGVuZGluZyB1bml0cyB0aGF0IGNhbiBiZSBkaWZmZXJlbnRcclxuICogZm9yIGludGVnZXIgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMuXHJcbiAqIEBwYXJhbSBuIE51bWJlciB0byBjb252ZXJ0IHRvIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICogQHBhcmFtIGludFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgaW50ZWdlci5cclxuICogQHBhcmFtIGZsb2F0VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBmbG9hdGluZyBwb2ludC5cclxuICovXHJcbmZ1bmN0aW9uIG51bWJlclRvU3RyaW5nKCBuOiBudW1iZXIsIGludFVuaXQ6IHN0cmluZyA9IFwiXCIsIGZsb2F0VWludDogc3RyaW5nID0gXCJcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgaW50VW5pdCA6IG4gKyBmbG9hdFVpbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aW1lIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE51bWJlciBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGUuXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgbnVtYmVyIHRvIGEgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gbnVtYmVyQmFzZVRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuY30pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIENzc051bWJlciBvciBhcnJheSBvZiBDc3NOdW1iZXIgb2JqZWN0cyB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUtIG9yIG11bHRpLW51bWJlciBzdHlsZSB2YWx1ZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzZXBhcmF0b3IgU3RyaW5nIHRvIHVzZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBtdWx0aVN0eWxlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+PixcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuYyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogdiA9PiBudW1iZXJCYXNlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSxcclxuICAgICAgICBhcnJTZXA6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYXRoRnVuYyBmdW5jdGlvbiByZXR1cm5zIG9uZSBvZiB0aGUgbWF0aGVtYXRpYyBDU1MgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBvciBtb3JlXHJcbiAqIHBhcmFtZXRlcnMgd2hvc2UgdHlwZSBpcyBkZXJpdmVkIGZyb20gTnVtYmVyQmFzZTxUPi5cclxuICovXHJcbmZ1bmN0aW9uIG1hdGhGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBuYW1lOiBzdHJpbmcsIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgJHtuYW1lfSgke211bHRpU3R5bGVUb1N0cmluZyggcGFyYW1zLCBjb252ZXJ0RnVuYywgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgY2FsY0Z1bmMgZnVuY3Rpb24gcmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjYWxjKCkgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY0Z1bmM8VCBleHRlbmRzIHN0cmluZz4oIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBjYWxjKCR7dGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcywgKHY6IGFueSkgPT4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2LCBjb252ZXJ0RnVuYykpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtbWJlckJhc2VNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleVxyXG4gKiBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgYnkgY2FsbGluZyBhIGZ1bmN0aW9uIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJCYXNlTWF0aDxUIGV4dGVuZHMgc3RyaW5nPiBpbXBsZW1lbnRzIElOdW1iZXJCYXNlTWF0aDxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggcHJvdGVjdGVkIGNvbnZlcnRGdW5jOiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG51bWJlclRvU3RyaW5nID0gKG46IG51bWJlcik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRGdW5jKCBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsdGlTdHlsZVRvU3RyaW5nID0gKHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWluKCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pblwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWF4XCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYW1wKCBtaW46IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBwcmVmOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgbWF4OiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwiY2xhbXBcIiwgW21pbiwgcHJlZiwgbWF4XSwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGMoIGZvcm11bGFQYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2FsY0Z1bmMoIGZvcm11bGFQYXJ0cywgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOdW1iZXJNYXRoQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBcInN0YXRpY1wiIHNpZGUgb2YgY2xhc3NlcyBkZXJpdmVkIGZyb20gdGhlXHJcbiAqIE51bWJlck1hdGggY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJCYXNlTWF0aENsYXNzPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gICAgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZztcclxuXHJcbiAgICBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgbmV3KCk6IElOdW1iZXJCYXNlTWF0aDxUPjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVuaXRsZXNzIG51bWJlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTnVtYmVyTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPG51bWJlcj4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc051bWJlck1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxOdW1iZXJUeXBlPlxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbi50b1N0cmluZygpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc051bWJlcj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aU51bWJlcj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc051bWJlck1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUGVyY2VudE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxwZXJjZW50PiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUGVyY2VudE1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxQZXJjZW50VHlwZT4gaW1wbGVtZW50cyBJQ3NzUGVyY2VudE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gKE51bWJlci5pc0ludGVnZXIobikgPyBuIDogTWF0aC5yb3VuZChuICogMTAwKSkgKyBcIiVcIjsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVBlcmNlbnQ+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgdG8gc3RyaW5nIHVzaW5nIHRoZSBmb2xsb3dpbmcgcnVsZXM6XHJcbiAqIC0gaWYgdGhlIG51bWJlciBpcyBiZXR3ZWVuIC0xIGFuZCAxIChub24gaW5jbHVzaXZlKSwgbXVsdGlwbGllcyB0aGUgbnVtYmVyIGFuZCBhcHBlbmRzIFwiJVwiXHJcbiAqIC0gb3RoZXJ3aXNlLCBjb252ZXJ0cyB0aGUgbnVtYmVyIHRvIHN0cmluZyB3aXRob3V0IGFwcGVuZGluZyBhbnkgdXRpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcoIG46IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gbiA+PSAxIHx8IG4gPD0gLTEgPyBuLnRvU3RyaW5nKCkgOiBNYXRoLnJvdW5kKG4gKiAxMDApICsgXCIlXCI7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTGVuZ3RoXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NMZW5ndGhNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bGVuZ3RoPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTGVuZ3RoTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPExlbmd0aFR5cGU+IGltcGxlbWVudHMgSUNzc0xlbmd0aE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcInB4XCIsIFwiZW1cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBtaW5tYXgoIG1pbjogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgbWF4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUdlbmVyaWNQcm94eTxMZW5ndGhUeXBlPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5tYXhcIiwgW21pbiwgbWF4XSwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEFuZ2xlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NBbmdsZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxhbmdsZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0FuZ2xlTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPEFuZ2xlVHlwZT4gaW1wbGVtZW50cyBJQ3NzQW5nbGVNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJkZWdcIiwgXCJ0dXJuXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0FuZ2xlPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlBbmdsZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRpbWVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1RpbWVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8dGltZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1RpbWVNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8VGltZVR5cGU+IGltcGxlbWVudHMgSUNzc1RpbWVNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJtc1wiLCBcInNcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzVGltZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlc29sdXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1Jlc29sdXRpb25NYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cmVzb2x1dGlvbj4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1Jlc29sdXRpb25NYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8UmVzb2x1dGlvblR5cGU+IGltcGxlbWVudHMgSUNzc1Jlc29sdXRpb25NYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJkcGlcIiwgXCJ4XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1Jlc29sdXRpb24+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUmVzb2x1dGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGcmVxdWVuY3lcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0ZyZXF1ZW5jeU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxmcmVxdWVuY2U+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8RnJlcXVlbmN5VHlwZT4gaW1wbGVtZW50cyBJQ3NzRnJlcXVlbmN5TWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiSHpcIiwgXCJrSHpcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzRnJlcXVlbmN5Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJlcXVlbmN5Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3NpdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zMnN0ciggdmFsOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdWxsOiB2ID0+IFwiXCIsXHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdiwgXCIgXCIpXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zMnN0ciggdmFsOiBFeHRlbmRlZDxNdWx0aUNzc1Bvc2l0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBwb3Myc3RyLFxyXG4gICAgICAgIGFyclNlcDogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGJhc2ljIHR5cGVzIGFuZCBmdW5jdGlvbnMgdXNlZCB0byBkZWZpbmUgQ1NTIHByb3BlcnR5IHR5cGVzLlxyXG4gKiBcclxuICogQWxsIENTUyBwcm9wZXJ0aWVzIHNob3VsZCBhY2NlcHQgc3RyaW5nIGFzIHRoZSB0eXBlIG9mIHRoZWlyIHZhbHVlIGV2ZW4gaWYgbm9ybWFsbHlcclxuICogdGhleSBhY2NlcHQgb3RoZXIgdHlwZXMgKGUuZyBhIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgYXMgYFwicmVkXCIgfCBcImdyZWVuXCIgfCAuLi5gIGZvciB0aGVcclxuICogY29sb3IpIHByb3BlcnR5LiBUaGlzIGlzIGJlY2F1c2UgaW4gYWRkaXRpb24gdG8gdGhlaXIgbm9ybWFsIHZhbHVlcyBhbnkgcHJvcGVydHlcclxuICogY2FuIHVzZSBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoZSBmb3JtIGB2YXIoLS1wcm9wbmFtZSlgLiBIb3dldmVyLCBpZiB3ZSBhZGQgc3RyaW5nIHR5cGVcclxuICogdG8gdGhlIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgKGUuZy4gYFwicmVkXCIgfCBcImdyZWVuXCIgfCBzdHJpbmdgKSwgdGhpcyB0aHJvd3Mgb2ZmIHRoZVxyXG4gKiBJbnRlbGxpc2Vuc2UgYW5kIGl0IGRvZXNuJ3QgcHJvbXB0IGRldmVsb3BlcnMgZm9yIHRoZSBwb3NzaWJsZSB2YWx1ZXMuIFRoZSBJVmFsdWVQcm94eVxyXG4gKiBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHN0cmluZyBhbmQgdGhpcyBzb2x2ZXMgdGhlIEludGVsbGlzZW5zZSBpc3N1ZS5cclxuICogXHJcbiAqIEFub3RoZXIgYmVuZWZpdCBvZiB1c2luZyBmdW5jdGlvbnMgaXMgdGhhdCB0aGV5IGFyZVxyXG4gKiBjb25zdHJ1Y3RlZCBhdCBvbmUgdGltZSBidXQgdGhlIHN0cmluZyBnZW5lcmF0aW9uIG9jY3VycyBhdCBhbm90aGVyIHRpbWUuIFRoaXMgYWxsb3dzXHJcbiAqIHVzaW5nIHRoZXNlIG9iamVjdHMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhleSBjYW4gcmVmZXJlbmNlIG9iamVjdHMgbGlrZVxyXG4gKiBJVmFyUnVsZSB0aGF0IGFyZSBub3QgZnVsbHkgaW5pdGlhbGl6ZWQgeWV0LiBIb3dldmVyLCB3aGVuIHRoZSBzdHlsZXMgc2hvdWxkIGJlIGluc2VydGVkXHJcbiAqIGludG8gRE9NIHRoZSBpbml0aWFsaXphdGlvbiB3aWxsIGhhdmUgYWxyZWFkeSBvY2N1cnJlZCBhbmQgdGhlIGZ1bmN0aW9uIHdpbGxcclxuICogcmV0dXJuIGEgY29ycmVjdCBzdHJpbmcuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgdGhlIHByb3h5IGZ1bmN0aW9ucyBoYXZlIGEgcGFyYW1ldGVyIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGVtIGZyb21cclxuICogb3RoZXIgcHJveHkgZnVuY3Rpb25zLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVudCBDU1MgdHlwZXMsXHJcbiAqIHNvIHRoYXQgYSBmdW5jdGlvbiB1c2VkIGZvciBvbmUgQ1NTIHR5cGUgY2Fubm90IGJlIHVzZWQgZm9yIGEgZGlmZmVyZW50IENTUyB0eXBlLiBGb3JcclxuICogZXhhbXBsZSwgdGhlIGBjYWxjKClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIE51bWJlclByb3h5IGZ1bmN0aW9uLCB3aGlsZSB0aGVcclxuICogYGxpbmVhckluZ3JhZGllbnQoKWAgZnVuY3Rpb24gcmV0dXJucyB0aGUgSW1hZ2VQcm94eSBmdW5jdGlvbi4gVGh1cyB5b3UgY2Fubm90IHVzZSB0aGVcclxuICogJ2NhbGMoKWAgZnVuY3Rpb24gZm9yIGltYWdlLWJhc2VkIENTUyBwcm9wZXJ0aWVzIGFuZCB2aWNlIHZlcnNhLlxyXG4gKi9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYW55IENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdsb2JhbF9TdHlsZVR5cGUgPSBcImluaGVyaXRcIiB8IFwiaW5pdGlhbFwiIHwgXCJ1bnNldFwiIHwgXCJyZXZlcnRcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR2VuZXJpY1Byb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGEgY2FsbGFibGUgaW50ZXJmYWNlIGltcGxlbWVudGVkIHVzaW5nIGZ1bmN0aW9ucyB0aGF0XHJcbiAqIGFjY2VwdCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgb2YgYSBnZW5lcmljIHR5cGUgYW5kIHJldHVybiBhIHN0cmluZy4gVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCBhcyBhXHJcbiAqIGJhc2UgZm9yIHByb3h5IGludGVyZmFjZXMgZGVmaW5pbmcgdHlwZXMgYWNjZXB0YWJsZSBieSBjZXJ0YWluIHN0eWxlIHByb3BlcnRpZXMuIFRoZSB0eXBlXHJcbiAqIHBhcmFtZXRlciBoZWxwcyBkaWZmZXJlbnRpYXRlIHRoZXNlIGludGVyZmFjZXMgc28gdGhhdCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gb25lXHJcbiAqIHR5cGUgb2Ygc3R5bGUgcHJvcGVydGllcyAoZS5nLiBcInRyYW5zZm9ybVwiKSBjYW5ub3QgYmUgYXNzaWduZWQgdG8gYW4gaW5jb21wYXRpYmxlIHN0eWxlIHByb3BlcnR5XHJcbiAqIChlLmcuIGNsaXAtcGF0aCkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHZW5lcmljUHJveHk8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgKHA/OiBUKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0cmluZ1Byb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIHBhcnRcclxuICogb2YgdHlwZSBkZWZpbml0aW9uIGZvciBhbGwgQ1NTIHByb3BlcnRpZXMgLSBldmVuIGZvciB0aG9zZSB0aGF0IGRvbid0IGhhdmUgYHN0cmluZ2AgYXMgcGFydCBvZlxyXG4gKiB0aGVpciB0eXBlLlxyXG4gKiBcclxuICogVGhpcyBmdW5jdGlvbiBpcyByZXR1cm5lZCBmcm9tIHRoZSBgcmF3KClgIGZ1bmN0aW9uLCB3aGljaCBhbGxvd3MgYnktcGFzc2luZyB0aGUgcHJvcGVydHlcclxuICogdHlwaW5nIHJ1bGVzIGFuZCBzcGVjaWZ5aW5nIGEgc3RyaW5nIGRpcmVjdGx5LiBUaGlzIG1pZ2h0IGJlIHVzZWZ1bCwgd2hlbiBhIHN0cmluZyB2YWx1ZSBpc1xyXG4gKiBvYnRhaW5lZCBmcm9tIHNvbWUgZXh0ZXJuYWwgY2FsY3VsYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3RyaW5nUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwic3RyaW5nXCI+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbVZhciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgb2JqZWN0IHdpdGggdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBuZWVkZWQgYmVjYXVzZSBldmVyeSBzdHlsZSBwcm9wZXJ0eSBjYW4gYWNjZXB0IHZhbHVlIGluIHRoZSBmb3JtIG9mIHRoZSB2YXIoKVxyXG4gKiBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYXI8VCA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHNldFZhbHVlKCB2YWx1ZTogVCwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBleHRlbmRzIHRoZSBnaXZlbiB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBJQ3VzdG9tVmFyIGludGVyZmFjZSB0aGF0IGFsbG93cyB1c2luZyBhIENTUyBjdXN0b20gcHJvcGVydHkuXHJcbiAqIC0gSVN0cmluZ1Byb3h5IGludGVyZmFjZSB0aGF0IGFsbG93cyBzcGVjaWZ5aW5nIHJhdyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZDxUPiA9IFQgfCBJQ3VzdG9tVmFyPFQ+IHwgSVN0cmluZ1Byb3h5IHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgdHlwZSBvZiBwcm9wZXJ0eSBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBcIiFcIiBwcm9wZXJ0eS4gVGhpc1xyXG4gKiB0eXBlIGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBmbGFnZ2VkIGFzIFwiIWltcG9ydGFudFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSW1wb3J0YW50UHJvcDxUPiA9IHsgXCIhXCI6IEV4dGVuZGVkPFQ+IH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRQcm9wIGV4dGVuZHMgdGhlIGdpdmVuIGdlbmVyaWMgdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgZWxlbWVudHM6XHJcbiAqIC0gT2JqZWN0IHdpdGggYSBzaW5nbGUgcHJvcGVydHkgXCIhXCIsIHdoaWNoIGlzIHVzZWQgdG8gbWFyayBhIHByb3BlcnR5IGFzIFwiIWltcG9ydGFudFwiLlxyXG4gKiAtIEdsb2JhbF9TdHlsZVR5cGUsIHdoaWNoIGFsbG93cyBhbnkgcHJvcGVydHkgdG8gYmUgYXNzaWduZWQgdGhlIGdsb2JhbCB2YWx1ZXMgc3VjaCBhc1xyXG4gKiAgIFwiaW5pdGlhbFwiLCBcImluaGVyaXRcIiwgXCJ1bnNldFwiIGFuZCBcInJldmVydFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRQcm9wPFQ+ID0gRXh0ZW5kZWQ8VD4gfCBJbXBvcnRhbnRQcm9wPFQ+IHwgR2xvYmFsX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIHBhaXItbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gMiB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JQYWlyPFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJveC1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byA0IHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPckJveDxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPj8sIEV4dGVuZGVkPFQ+P107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgb3IgbW9yZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JNYW55PFQ+ID0gVCB8IEV4dGVuZGVkPFQ+W107XHJcblxyXG4vKipcclxuICogVGhlIElRdW90ZWRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGEgc3RyaW5nIGluIHF1b3RhdGlvbiBtYXJrc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUXVvdGVkUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwicXVvdGVkXCI+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1lcmljIHR5cGVzIGFzIGEgYmFzaXMgZm9yIGhhbmRsaW5nIENTUyA8bnVtYmVyPiwgPGxlbmd0aD4sIDxhbmdsZT4sIGV0Yy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IG51bWJlciB8IHN0cmluZyB8IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IE9uZU9yTWFueTxOdW1iZXJCYXNlPFQ+PjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyQmFzZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciB0eXBlLCB0aGV5IGFyZSBjb252ZXJ0ZWRcclxuICogdG8gc3RyaW5ncyB1c2luZyB0aGUgYG51bWJlclRvU3RyaW5nYCBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJCYXNlTWF0aDxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1pbigpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWluKCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjbGFtcCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjYWxjKCkgZnVuY3Rpb24uIFRoaXMgbWV0aG9kIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0XHJcbiAgICAgKiBiZSBpbnZva2VkIHdpdGggYSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICAgICAqL1xyXG4gICAgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bnVtYmVyPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTnVtYmVyIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE51bWJlclR5cGUgPSBcIk51bWJlclwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAtIG5vdGUgdGhhdCBpdCBleGx1ZGVzIGBzdHJpbmdgICovXHJcbmV4cG9ydCB0eXBlIENzc051bWJlciA9IEV4Y2x1ZGU8TnVtYmVyQmFzZTxOdW1iZXJUeXBlPixzdHJpbmc+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlOdW1iZXIgPSBPbmVPck1hbnk8Q3NzTnVtYmVyPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PE51bWJlclR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bnVtYmVyPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTnVtYmVyTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxOdW1iZXJUeXBlPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBwZXJjZW50ICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRVbml0cyA9IFwiJVwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFBlcmNlbnQgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFR5cGUgPSBcIlBlcmNlbnRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1BlcmNlbnQgPSBOdW1iZXJCYXNlPFBlcmNlbnRUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVBlcmNlbnQgPSBPbmVPck1hbnk8Q3NzUGVyY2VudD47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlcmNlbnRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8UGVyY2VudFR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUGVyY2VudE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHBlcmNlbnQ+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NQZXJjZW50TWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxQZXJjZW50VHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxsZW5ndGg+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBsZW5ndGggKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVW5pdHMgPSBcIlFcIiB8IFwiY2hcIiB8IFwiY21cIiB8IFwiZW1cIiB8IFwiZXhcIiB8IFwiaWNcIiB8IFwiaW5cIiB8IFwibGhcIiB8IFwibW1cIiB8IFwicGNcIiB8XHJcbiAgICAgICAgICAgICAgICBcInB0XCIgfCBcInB4XCIgfCBcInZiXCIgfCBcInZoXCIgfCBcInZpXCIgfCBcInZ3XCIgfCBcInJlbVwiIHwgXCJybGhcIiB8IFwidm1heFwiIHwgXCJ2bWluXCIgfCBcImZyXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTGVuZ3RoIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFR5cGUgPSBcIkxlbmd0aFwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aCA9IE51bWJlckJhc2U8TGVuZ3RoVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUxlbmd0aCA9IE9uZU9yTWFueTxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tMi1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aFBhaXIgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLTQtcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGhCb3ggPSBPbmVPckJveDxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxlbmd0aFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxMZW5ndGhUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0xlbmd0aE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGxlbmd0aD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0xlbmd0aE1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8TGVuZ3RoVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW5tYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJTGVuZ3RoUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGFuZ2xlPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgYW5nbGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0cyA9IFwiZGVnXCIgfCBcInJhZFwiIHwgXCJncmFkXCIgfCBcInR1cm5cIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBBbmdsZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVR5cGUgPSBcIkFuZ2xlXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NBbmdsZSA9IE51bWJlckJhc2U8QW5nbGVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlBbmdsZSA9IE9uZU9yTWFueTxDc3NBbmdsZT47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmdsZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxBbmdsZVR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzQW5nbGVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxhbmdsZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0FuZ2xlTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxBbmdsZVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8dGltZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHRpbWUgKi9cclxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gXCJzXCIgfCBcIm1zXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgVGltZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVHlwZSA9IFwiVGltZVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzVGltZSA9IE51bWJlckJhc2U8VGltZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpVGltZSA9IE9uZU9yTWFueTxDc3NUaW1lPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFRpbWVUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1RpbWVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDx0aW1lPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzVGltZU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8VGltZVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8cmVzb2x1dGlvbj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHJlc29sdXRpb24gKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblVuaXRzID0gXCJkcGlcIiB8IFwiZHBjbVwiIHwgXCJkcHB4XCIgfCBcInhcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBSZXNvbHV0aW9uIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25UeXBlID0gXCJSZXNvbHV0aW9uXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NSZXNvbHV0aW9uID0gTnVtYmVyQmFzZTxSZXNvbHV0aW9uVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlSZXNvbHV0aW9uID0gT25lT3JNYW55PENzc1Jlc29sdXRpb24+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvbHV0aW9uUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFJlc29sdXRpb25UeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1Jlc29sdXRpb25NYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8UmVzb2x1dGlvblR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8ZnJlcXVlbmN5PmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJlcXVlbmN5ICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVVuaXRzID0gXCJIelwiIHwgXCJrSHpcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBGcmVxdWVuY3kgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VHlwZSA9IFwiRnJlcXVlbmN5XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyZXF1ZW5jeSA9IE51bWJlckJhc2U8RnJlcXVlbmN5VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyZXF1ZW5jeSA9IE9uZU9yTWFueTxDc3NGcmVxdWVuY3k+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZyZXF1ZW5jeVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxGcmVxdWVuY3lUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0ZyZXF1ZW5jeU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8RnJlcXVlbmN5VHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIHBvaW50IHVzaW5nIHggYW5kIHkgY29vcmRpbmF0ZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb2ludCA9IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCA9IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgYSBzaW1wbGUgMSBvciB0d28gdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBTaW1wbGVDc3NQb3NpdGlvbiA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgZnVsbCB1cCB0byA0IHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9zaXRpb24gPSBTaW1wbGVDc3NQb3NpdGlvbiB8IFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkXSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIG11bHRpcGxlIGA8cG9zaXRpb24+YCBDU1MgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlDc3NQb3NpdGlvbiA9IEV4dGVuZGVkPENzc1Bvc2l0aW9uPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmFkaXVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIGNvcm5lciByYWRpdXMgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmFkaXVzID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVUkxzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVVybFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgQ1NTIHVybCgpIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVXJsUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwidXJsXCI+IHt9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpIGZ1bmN0aW9uIHN1cHBvcnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVHlwZUtleXdvcmQgPSBcInN0cmluZ1wiIHwgXCJjb2xvclwiIHwgXCJ1cmxcIiB8IFwiaW50ZWdlclwiIHwgXCJudW1iZXJcIiB8IFwibGVuZ3RoXCIgfCBcImFuZ2xlXCIgfCBcInRpbWVcIiB8IFwiZnJlcXVlbmN5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVW5pdEtleXdvcmQgPSBQZXJjZW50VW5pdHMgfCBMZW5ndGhVbml0cyB8IFRpbWVVbml0cyB8IEFuZ2xlVW5pdHMgfCBSZXNvbHV0aW9uVW5pdHMgfCBGcmVxdWVuY3lVbml0cztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFdlYiBOYW1lc3BhY2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2ViTmFtZXNwYWNlcyBjbGFzcyBjb250YWlucyBpZGVudGlmaWVycyBmb3IgdGhlIGtub3duIFdlYi1yZWxhdGVkIG5hbWVzcGFjZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2ViTmFtZXNwYWNlc1xyXG57XHJcblx0c3RhdGljIHJlYWRvbmx5IEhUTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTGluayA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUwgPSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgTWF0aE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==