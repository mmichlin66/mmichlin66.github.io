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
exports.virtual = exports.serializeToCSS = exports.createCssSerializer = exports.classes = exports.enableShortNames = exports.$embed = exports.$use = exports.$media = exports.$supports = exports.$page = exports.$namespace = exports.$fontface = exports.$import = exports.$gridarea = exports.$gridline = exports.$counter = exports.$var = exports.$keyframes = exports.$style = exports.$id = exports.$classname = exports.$class = exports.$abstract = void 0;
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
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Rule virtualization.
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Decorator that should be applied to a rule if it is defined and used in the same style
 * definition class but then is overridden in a derived style definition class. The problem
 * this solves is this: when a rule is defined in a base class and then overridden in a derived
 * class, when an instance of the derived class is created, the rules that are created in the
 * base and derived classes see different values of the rule. Since our rules are defined as
 * part of the constructor, the base class constructor's code only sees the value assigned in that
 * code. If another rule in the base class uses this first rule, this value is remembered.
 *
 * The `@virtual` decorator creates a Proxy object for the rule with the handler that keeps the
 * most recent value set. Thus when a rule in the base class's constructor uses a virtualized
 * rule, the first rule will see the overridden value of the rule when accessed in the
 * post-constructor code.
 */
function virtual(target, name) {
    // symbol to keep the proxy handler value
    let sym = Symbol(name + "_proxy_handler");
    Object.defineProperty(target, name, {
        enumerable: true,
        get() {
            // check whether we already have the handler and create it if we don't. In this
            // case we also create a proxy for an empty object
            let handler = this[sym];
            if (!handler) {
                this[sym] = handler = new VirtHandler();
                handler.proxy = new Proxy({}, handler);
            }
            return handler.proxy;
        },
        set(v) {
            // depending on the object type we may have a different object to pass to the proxy;
            // also we need to know whether the object is a special (internal to JavaScript) one
            // and the handler will have to treat it specially
            let [newTarget, isSpecial] = getProxiableObject(v);
            // check whether we already have the handler and create it if we don't
            let handler = this[sym];
            if (!handler) {
                this[sym] = handler = new VirtHandler();
                handler.proxy = newTarget == null ? {} : new Proxy(newTarget, handler);
            }
            // set the new vaules to the handler so that it will use it from now on
            handler.target = newTarget;
            handler.isSpecial = isSpecial;
        }
    });
}
exports.virtual = virtual;
/**
 * For the given value returns a two-element tuple:
 * - the first element is the value that should be passed to a proxy. For objects, it is the input
 *   value. For primitive types it is the boxed object (e.g. Number for numbers). For null and
 *   undefined it is null and undefined respectively
 * - the second element is the "special" flag, which is true if the proxy handler will have to have
 *   a special treatment the objects' methods; that is, it will have to bind them to the target
 *   object before returning them from the get method. This is true for "internal" JavaScript
 *   classes like boxed primitive types, Map, Set, Promise and some others.
 */
function getProxiableObject(v) {
    if (v == null)
        return [v, false];
    else if (typeof v === "string")
        return [new String(v), true];
    else if (typeof v === "number")
        return [new Number(v), true];
    else if (typeof v === "boolean")
        return [new Boolean(v), true];
    else if (typeof v === "symbol")
        return [new Object(v), true];
    else if (typeof v === "object" && (v instanceof Map || v instanceof Set))
        return [v, true];
    else
        return [v, false];
}
/**
 * Handler for the proxy created by the `@virtual` decorator. It keeps the current value of a
 * rule so that the most recent value is used whenever the proxy is accessed.
 */
class VirtHandler {
    // interesting things happen in the get method
    get(t, p, r) {
        // if our value is null or undefined and the requested property is a well-known symbol
        // toPrimitive we return a function that returns either null or undefined. This will help
        // if our proxy either participate in an arithmetic expression or or is combined with a
        // string.
        if (this.target == null && p === Symbol.toPrimitive)
            return () => this.target;
        // get the value of the request property; if the value is null or undefined, an exception
        // will be thrown - which is expected.
        let pv = Reflect.get(this.target, p, r);
        // if the requested property is a function of a boxed primitive, bind the original method
        // to the target object
        return this.isSpecial && typeof pv === "function" ? pv.bind(this.target) : pv;
    }
    // the rest of the methods mostly delegate the calls to the latest target instead of the
    // original target. In some cases, we check whether the target is null or undefined so that
    // we don'tthrow exceptions wher we can avoid it.
    getPrototypeOf(t) { return this.target == null ? null : Reflect.getPrototypeOf(this.target); }
    setPrototypeOf(t, v) { return Reflect.setPrototypeOf(this.target, v); }
    isExtensible(t) { return this.target == null ? false : Reflect.isExtensible(this.target); }
    preventExtensions(t) { return this.target == null ? false : Reflect.preventExtensions(this.target); }
    getOwnPropertyDescriptor(t, p) { return Reflect.getOwnPropertyDescriptor(this.target, p); }
    has(t, p) { return this.target == null ? false : Reflect.has(this.target, p); }
    set(t, p, v, r) { return Reflect.set(this.target, p, v, r); }
    deleteProperty(t, p) { return Reflect.deleteProperty(this.target, p); }
    defineProperty(t, p, attrs) { return Reflect.defineProperty(this.target, p, attrs); }
    enumerate(t) { return Array.from(Reflect.enumerate(this.target)); }
    ownKeys(t) { return Reflect.ownKeys(this.target); }
    apply(t, thisArg, args) { return this.target.apply(this, args); }
    construct(t, args, newTarget) { return Reflect.construct(this.target, args, newTarget); }
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
            this.parentContainer = this.parent[symContainer];
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
            if (baseInst && baseInst[ruleName] != null && "name" in baseInst[ruleName])
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
    else
        return processClass(instOrClass, parent);
}
exports.processInstanceOrClass = processInstanceOrClass;
/**
 * Processes the given style definition class by creating its instance and associating a
 * rule container object with it. The class will be associated with the instance using a
 * Symbol property. The parent parameter is a reference to the parent style defiition
 * object or null if the given class is itself a top-level class (that is, is not a class
 * that defines rules within nested grouping rules).
 */
function processClass(definitionClass, parent) {
    // check whether this definition class is already associated with an instance
    if (definitionClass.hasOwnProperty(symInstance))
        return definitionClass[symInstance];
    // recursively process all base classes so that rule names are generated. We don't activate styles
    // for these classes because derived classes will have all the rules from all the base classes
    // as their own and so these rules will be activated as part of the derived class.
    let baseClass = Object.getPrototypeOf(definitionClass);
    if (baseClass !== RuleTypes_1.StyleDefinition)
        processClass(baseClass, parent);
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
    get $parent() { return this[symParent]; }
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
            // skip over already processed parents and custom properties
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
 * `gradient.linear()` function returns the ImageProxy function. Thus you cannot use the
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU2NoZWR1bGluZ0FQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1N0eWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvVXRpbEFQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvbWltY3NzVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0FuaW1hdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0NvdW50ZXJSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JpZFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2NoZWR1bGluZy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ltYWdlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9NZWRpYUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU2VsZWN0b3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxpR0FBa0Q7QUFJbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0gsU0FBZ0IsR0FBRyxDQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVU7SUFFNUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFIRCxrQkFHQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxDQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVTtJQUVyRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELGtCQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxTQUFnQixLQUFLLENBQUUsQ0FBeUMsRUFBRSxDQUFTO0lBRXZFLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBSEQsc0JBR0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUQsbUdBQW1EO0FBQ25ELGdHQUF3SDtBQUt4SDs7Ozs7R0FLRztBQUNILE1BQU0sUUFBUTtJQUVWLElBQVcsTUFBTSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQVcsZUFBZSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLElBQVcsTUFBTSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQVcsZUFBZSxLQUFzQixPQUFPLGtCQUFrQixDQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLElBQVcsS0FBSyxLQUFxQixPQUFPLGlCQUFpQixDQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLElBQVcsY0FBYyxLQUFxQixPQUFPLGlCQUFpQixDQUFFLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pHO0FBSUQ7O0dBRUc7QUFDUSxnQkFBUSxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7QUFJaEQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsR0FBRyxJQUFzQjtJQUVoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFIRCw4QkFHQztBQUlEOzs7R0FHRztBQUNILFNBQVMsa0JBQWtCLENBQUUsSUFBWTtJQUVyQyxJQUFJLENBQUMsR0FBUSxDQUFDLEdBQUcsWUFBa0MsRUFBZSxFQUFFLENBQ2hFLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXZFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7UUFDM0IsQ0FBQyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUosT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBRSxJQUFZO0lBRXJDLElBQUksQ0FBQyxHQUFRLENBQUMsR0FBRyxZQUFrQyxFQUFlLEVBQUUsQ0FDaEUsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTdGLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUE0RCxFQUFFLEVBQUU7UUFDeEUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDeEIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDM0IsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUosQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLFlBQW1GLEVBQUUsRUFBRTtRQUM3RixDQUFDLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN6QixDQUFDLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUMzQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFSixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBK0IsRUFBRSxFQUFFO1FBQ3hDLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUEwQixFQUFFLEVBQUU7UUFDL0IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUosT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBRSxJQUFZO0lBRXBDLElBQUksQ0FBQyxHQUFRLENBQUMsR0FBRyxZQUFrQyxFQUFlLEVBQUUsQ0FDaEUsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsRixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFO1FBQzdCLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUEwQixFQUFFLEVBQUU7UUFDL0IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDakIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUosT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBSUQsU0FBUyxzQkFBc0IsQ0FBRSxJQUFZLEVBQUUsWUFBa0MsRUFDN0UsS0FBdUI7SUFFdkIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksS0FBSyxFQUNUO1FBQ0ksV0FBVyxHQUFHLG1CQUFPLENBQUUsS0FBSyxFQUFFO1lBQzFCLFVBQVUsRUFBRSx3QkFBWSxDQUFDLFdBQVc7WUFDcEMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztTQUNuRCxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLEdBQUcsSUFBSSxJQUFJLFdBQVcsR0FBRyw0QkFBNEIsQ0FBRSxZQUFZLEVBQUUsMEJBQWMsQ0FBQyxHQUFHLENBQUM7QUFDbkcsQ0FBQztBQUlELFNBQVMsc0JBQXNCLENBQUUsSUFBWSxFQUFFLFlBQWtDLEVBQzdFLEtBQTBCLEVBQUUsWUFBMEQsRUFDdEYsR0FBZ0I7SUFFaEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyQyxJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMseUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sbUJBQU8sQ0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakQsSUFBSSxZQUFZLEdBQUcsS0FBSyxJQUFJLGtCQUFrQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLElBQUksa0JBQWtCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsSCxPQUFPLEdBQUcsSUFBSSxJQUFJLFlBQVksR0FBRyw0QkFBNEIsQ0FBRSxZQUFZLEVBQUUsMEJBQWMsQ0FBQyxHQUFHLENBQUM7QUFDcEcsQ0FBQztBQUlELFNBQVMscUJBQXFCLENBQUUsSUFBWSxFQUFFLFlBQWtDLEVBQzVFLEtBQTBCLEVBQUUsR0FBMkI7SUFFdkQsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLHdCQUFZLENBQUMsYUFBYSxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sbUJBQU8sQ0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakQsSUFBSSxZQUFZLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxPQUFPLEdBQUcsSUFBSSxJQUFJLFlBQVksR0FBRyw0QkFBNEIsQ0FBRSxZQUFZLEVBQUUsd0JBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEcsQ0FBQztBQUlELFNBQVMsaUJBQWlCLENBQUUsSUFBc0I7SUFFOUMsSUFBSSxZQUFZLEdBQUcsbUJBQU8sQ0FBRSxJQUFJLEVBQUU7UUFDOUIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxNQUFNLEVBQUUsR0FBRztLQUNkLENBQUM7SUFFRixPQUFPLGNBQWMsWUFBWSxHQUFHLENBQUM7QUFDekMsQ0FBQztBQUlELFNBQVMsNEJBQTRCLENBQW9CLEdBQXlCLEVBQzlFLFNBQWtDO0lBRWxDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBSUQsU0FBUywwQkFBMEIsQ0FBb0IsR0FBdUIsRUFDMUUsU0FBa0M7SUFFbEMsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsMEJBQWE7UUFDekIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSw4QkFBOEIsQ0FBRSxDQUEyQixFQUFFLFNBQVMsQ0FBQztLQUMxRixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyw4QkFBOEIsQ0FBb0IsR0FBMkIsRUFDbEYsU0FBa0M7SUFFbEMsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RSxPQUFPLEdBQUcsMEJBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ3hGLENBQUM7QUFJRCxTQUFTLHNCQUFzQixDQUFFLEdBQW1CO0lBRWhELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLDBCQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQzNFLENBQUMsQ0FBQztBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTkQsOEZBSTRCO0FBQzVCLDBHQUFxRztBQUtyRyxpR0FBaUY7QUFDakYsMEdBQW9EO0FBQ3BELHdGQUF3QztBQUN4Qyx1R0FBa0Q7QUFDbEQsOEZBQThEO0FBQzlELDhGQUFtRztBQUNuRyxpR0FBMkQ7QUFDM0QsZ0dBQTRDO0FBSzVDOzs7R0FHRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxLQUF1QjtJQUVqRCxPQUFPLElBQUkseUJBQVksQ0FBRSxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBSEQsOEJBR0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixNQUFNLENBQUUsS0FBd0IsRUFDNUMsWUFBbUQ7SUFFdEQsT0FBTyxJQUFJLHNCQUFTLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFKRCx3QkFJQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixVQUFVLENBQUUsR0FBRyxPQUFpRDtJQUUvRSxPQUFPLElBQUkseUJBQWEsQ0FBRSxPQUFPLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSEQsZ0NBR0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixHQUFHLENBQUUsS0FBd0IsRUFBRSxZQUErQjtJQUU3RSxPQUFPLElBQUksbUJBQU0sQ0FBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUhELGtCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsUUFBcUIsRUFBRSxLQUF1QjtJQUVyRSxPQUFPLElBQUkseUJBQVksQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHdCQUdDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLE1BQXlCLEVBQ3BELFlBQXNDO0lBRXRDLE9BQU8sSUFBSSw2QkFBYSxDQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSkQsZ0NBSUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsSUFBSSxDQUE2QixRQUFXLEVBQUUsT0FBeUIsRUFDbkYsWUFBbUM7SUFFdEMsT0FBTyxJQUFJLGlCQUFPLENBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBSkQsb0JBSUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLFlBQW9DO0lBRTdELE9BQU8sSUFBSSwwQkFBVyxDQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIRCw0QkFHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUUsWUFBcUMsRUFDNUQsZ0JBQTBCO0lBRTdCLE9BQU8sSUFBSSx3QkFBWSxDQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFKRCw4QkFJQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUUsWUFBcUM7SUFFL0QsT0FBTyxJQUFJLHdCQUFZLENBQUUsWUFBWSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUhELDhCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsR0FBVyxFQUFFLFVBQWdDLEVBQ3JFLGFBQXNDO0lBRXRDLE9BQU8sSUFBSSxzQkFBVSxDQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUpELDBCQUlDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsUUFBbUI7SUFFN0MsT0FBTyxJQUFJLHdCQUFZLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUhELDhCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsU0FBaUIsRUFBRSxNQUFlO0lBRTdELE9BQU8sSUFBSSx5QkFBYSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsZ0NBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxXQUE2QixFQUFFLEtBQWdCO0lBRXJFLE9BQU8sSUFBSSxvQkFBUSxDQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBSEQsc0JBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBNkIsS0FBb0IsRUFDdEUsV0FBeUM7SUFFNUMsT0FBTyxJQUFJLHlCQUFZLENBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFKRCw4QkFJQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUE2QixLQUEwQixFQUN6RSxXQUF5QztJQUU1QyxPQUFPLElBQUksc0JBQVMsQ0FBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUpELHdCQUlDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixJQUFJLENBQTZCLFdBQXlDO0lBRXpGLE9BQU8sc0NBQXNCLENBQUUsV0FBVyxDQUFNLENBQUM7QUFDbEQsQ0FBQztBQUhELG9CQUdDO0FBSUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLE1BQU0sQ0FBNkIsV0FBeUM7SUFFM0YsOEZBQThGO0lBQzlGLDRDQUE0QztJQUM1QyxPQUFPLFdBQVcsWUFBWSwyQkFBZSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUM7QUFDakYsQ0FBQztBQUxELHdCQUtDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsTUFBZSxFQUFFLE1BQWU7SUFFakUsT0FBTyxrQ0FBa0IsQ0FBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUhELDRDQUdDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxHQUFHLE9BQWlEO0lBRTVFLE9BQU8sbUJBQU8sQ0FBRSxPQUFPLEVBQUU7UUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLHNCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzlELENBQUMsQ0FBQztBQUNKLENBQUM7QUFMRCwwQkFLQztBQThCRDs7OztHQUlHO0FBQ0gsU0FBZ0IsbUJBQW1CO0lBRS9CLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBSEQsa0RBR0M7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLElBQTZDLEVBQ3pFLEdBQUcsSUFBaUQ7SUFFcEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNyQyxVQUFVLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUvRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBVEQsd0NBU0M7QUFJRDs7OztHQUlHO0FBQ0gsTUFBTSxhQUFhO0lBQW5CO1FBd0JJLGdHQUFnRztRQUNoRyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFDM0MsQ0FBQztJQXhCRzs7T0FFRztJQUNJLEdBQUcsQ0FBRSxXQUFvRDtRQUU1RCxJQUFJLFFBQVEsR0FBRyxzQ0FBc0IsQ0FBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxPQUFPO1FBRVgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUVaLElBQUksR0FBRyxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ2hELENBQUM7Q0FJSjtBQUlEOzs7O0dBSUc7QUFDSCxNQUFNLHdCQUF3QjtJQUE5QjtRQXFCSSx1REFBdUQ7UUFDaEQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFeEIsMkRBQTJEO1FBQ3BELG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRTNCLGtGQUFrRjtRQUMxRSxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFDbkQsQ0FBQztJQTNCRyxpQkFBaUI7SUFDVixXQUFXLENBQUUsQ0FBUyxFQUFFLGNBQXdCO1FBRW5ELElBQUksY0FBYztZQUNkLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzs7WUFFN0IsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpQkFBaUI7SUFDVixrQkFBa0IsQ0FBRSxRQUF5QjtRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLEVBQ2xDO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUIsaUNBQWlCLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztDQVVKO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRix1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLE1BQVcsRUFBRSxJQUFZO0lBRTlDLHlDQUF5QztJQUN6QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLENBQUM7SUFFMUMsTUFBTSxDQUFDLGNBQWMsQ0FBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1FBQ2pDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEdBQUc7WUFFQywrRUFBK0U7WUFDL0Usa0RBQWtEO1lBQ2xELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQWdCLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sRUFDWjtnQkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQztZQUVELG9GQUFvRjtZQUNwRixvRkFBb0Y7WUFDcEYsa0RBQWtEO1lBQ2xELElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkQsc0VBQXNFO1lBQ3RFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQWdCLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sRUFDWjtnQkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0U7WUFFRCx1RUFBdUU7WUFDdkUsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUF6Q0QsMEJBeUNDO0FBSUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBRSxDQUFNO0lBRS9CLElBQUksQ0FBQyxJQUFJLElBQUk7UUFDVCxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pCLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUMxQixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFNBQVM7UUFDM0IsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdCLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUMxQixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7UUFDcEUsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFakIsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsTUFBTSxXQUFXO0lBTWIsOENBQThDO0lBQzlDLEdBQUcsQ0FBRSxDQUFNLEVBQUUsQ0FBYyxFQUFFLENBQU07UUFFL0Isc0ZBQXNGO1FBQ3RGLHlGQUF5RjtRQUN6Rix1RkFBdUY7UUFDdkYsVUFBVTtRQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxXQUFXO1lBQy9DLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU3Qix5RkFBeUY7UUFDekYsc0NBQXNDO1FBQ3RDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekMseUZBQXlGO1FBQ3pGLHVCQUF1QjtRQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25GLENBQUM7SUFFRCx3RkFBd0Y7SUFDeEYsMkZBQTJGO0lBQzNGLGlEQUFpRDtJQUVqRCxjQUFjLENBQUUsQ0FBTSxJQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixjQUFjLENBQUMsQ0FBTSxFQUFFLENBQU0sSUFDdkIsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELFlBQVksQ0FBQyxDQUFNLElBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsaUJBQWlCLENBQUMsQ0FBTSxJQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLHdCQUF3QixDQUFDLENBQU0sRUFBRSxDQUFjLElBQ3pDLE9BQU8sT0FBTyxDQUFDLHdCQUF3QixDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsQ0FBQyxDQUFNLEVBQUUsQ0FBYyxJQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsR0FBRyxDQUFFLENBQU0sRUFBRSxDQUFjLEVBQUUsQ0FBTSxFQUFFLENBQU0sSUFDckMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsY0FBYyxDQUFDLENBQU0sRUFBRSxDQUFjLElBQy9CLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxjQUFjLENBQUMsQ0FBTSxFQUFFLENBQWMsRUFBRSxLQUF5QixJQUMxRCxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELFNBQVMsQ0FBQyxDQUFNLElBQ1YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELE9BQU8sQ0FBQyxDQUFNLElBQ1IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsS0FBSyxDQUFDLENBQU0sRUFBRSxPQUFZLEVBQUUsSUFBVSxJQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsU0FBUyxDQUFDLENBQU0sRUFBRSxJQUFTLEVBQUUsU0FBZSxJQUN0QyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ25FOzs7Ozs7Ozs7Ozs7Ozs7O0FDaGhCRCwwR0FBOEQ7QUFDOUQsaUdBRzZCO0FBSTdCOzs7Ozs7R0FNRztBQUNILFNBQWdCLFFBQVEsQ0FDdkIsZUFBNkMsRUFDN0MsYUFBc0I7SUFFdEIsSUFBSSxRQUFRLEdBQUcsc0NBQXNCLENBQUUsZUFBZSxDQUFNLENBQUM7SUFDN0QsSUFBSSxRQUFRO1FBQ1gsMkJBQWMsQ0FBRSxDQUFDLFNBQXFCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUUsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFMUYsT0FBTyxRQUFRLENBQUM7QUFDakIsQ0FBQztBQVRELDRCQVNDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxRQUF5QixFQUFFLGFBQXNCO0lBRTVFLDJCQUFjLENBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFFLFFBQVEsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFIRCxnQ0FHQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLGNBQWMsQ0FBRSxhQUFzQjtJQUVyRCwyQkFBYyxDQUFFLENBQUMsU0FBcUIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFIRCx3Q0FHQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLGVBQWUsQ0FBRSxhQUFzQjtJQUV0RCwyQkFBYyxDQUFFLENBQUMsU0FBcUIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3hGLENBQUM7QUFIRCwwQ0FHQztBQUlEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsdUJBQXVCLENBQUUsYUFBcUI7SUFFN0QsT0FBTyxzQ0FBeUIsQ0FBRSxhQUFhLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBSEQsMERBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQix1QkFBdUI7SUFFdEMsT0FBTyxzQ0FBeUIsRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFIRCwwREFHQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLGlCQUFpQixDQUFFLFNBQXFCO0lBRXBELE9BQU8sZ0NBQW1CLENBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELDhDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixtQkFBbUIsQ0FBRSxFQUFVO0lBRTNDLE9BQU8sa0NBQXFCLENBQUUsRUFBRSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUhELGtEQUdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEdELG1HQUU2QjtBQUM3QixnR0FHNkI7QUFDN0IsaUdBQWtFO0FBSWxFOzs7R0FHRztBQUNILFNBQWdCLFFBQVEsQ0FBRSxLQUEyQixFQUFFLEdBQUcsTUFBc0I7SUFFL0UsT0FBTyxHQUFHLEVBQUUsQ0FBQyxrQ0FBc0IsQ0FBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELDRCQUdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRix3QkFBd0I7QUFDeEIsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7Ozs7R0FLRztBQUNILFNBQWdCLGlCQUFpQixDQUFvQyxhQUFnQixFQUNwRixjQUFtQztJQUVuQyxPQUFPLDhCQUFpQixDQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUpELDhDQUlDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixlQUFlLENBQUUsR0FBZ0IsRUFBRSxRQUFxQyxFQUN2RixhQUFzQjtJQUVuQixxQkFBcUIsQ0FBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3JHLENBQUM7QUFKRCwwQ0FJQztBQUlEOzs7OztHQUtHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUUsR0FBZ0IsRUFBRSxRQUEyQyxFQUNuRyxhQUFzQjtJQUVuQiwwQ0FBNkIsQ0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUpELHNEQUlDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLHdCQUF3QixDQUFFLFFBQWtCO0lBRTNELElBQUksR0FBRyxHQUFtQixFQUFFLENBQUM7SUFFN0IsaUNBQW9CLENBQUUsUUFBUSxFQUM3QixDQUFDLElBQVksRUFBRSxLQUFhLEVBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0QsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBUkQsNERBUUM7QUFJRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxXQUFxQixFQUFFLFdBQXFCO0lBRTFFLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxXQUFXO1FBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ1IsSUFBSSxDQUFDLFdBQVc7UUFDcEIsT0FBTyx3QkFBd0IsQ0FBRSxXQUFXLENBQUMsQ0FBQztTQUMxQyxJQUFJLENBQUMsV0FBVztRQUNwQixPQUFPLHdCQUF3QixDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRS9DLHdEQUF3RDtJQUN4RCxJQUFJLGlCQUFpQixHQUFHLHdCQUF3QixDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELElBQUksaUJBQWlCLEdBQUcsd0JBQXdCLENBQUUsV0FBVyxDQUFDLENBQUM7SUFFL0QsSUFBSSxTQUFTLEdBQTBCLElBQUksQ0FBQztJQUU1QywyRkFBMkY7SUFDM0YsbUJBQW1CO0lBQ25CLEtBQUssSUFBSSxHQUFHLElBQUksaUJBQWlCLEVBQ2pDO1FBQ0MsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxZQUFZLElBQUksSUFBSSxFQUN4QjtZQUNDLFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO1lBQzVCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDM0I7YUFFRDtZQUNDLElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksWUFBWSxLQUFLLFlBQVksRUFDakM7Z0JBQ0MsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUM7YUFDOUI7U0FDRDtLQUNEO0lBRUQsMkZBQTJGO0lBQzNGLGlCQUFpQjtJQUNqQixLQUFLLElBQUksR0FBRyxJQUFJLGlCQUFpQixFQUNqQztRQUNDLElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksWUFBWSxJQUFJLElBQUksRUFDeEI7WUFDQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUM1QixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEM7S0FDRDtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUM7QUFqREQsc0NBaURDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixVQUFVO0FBQ1YsRUFBRTtBQUNGLCtGQUErRjtBQUUvRixvRkFBb0Y7QUFDcEYsU0FBUyxhQUFhLENBQUUsSUFBWSxFQUFFLE1BQTRCO0lBRTlELE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksMEJBQWMsQ0FBQyxhQUFhLENBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNyRSxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsTUFBNEI7SUFFcEQsT0FBTyxhQUFhLENBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFIRCxnQ0FHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLE1BQTRCO0lBRWxELE9BQU8sYUFBYSxDQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsNEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxNQUE0QjtJQUVuRCxPQUFPLGFBQWEsQ0FBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUhELDhCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsTUFBNEI7SUFFaEQsT0FBTyxhQUFhLENBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFIRCx3QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLE1BQTRCO0lBRWpELE9BQU8sYUFBYSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBSEQsMEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFFBQVEsQ0FBRSxNQUE0QjtJQUVsRCxPQUFPLGFBQWEsQ0FBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUhELDRCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsTUFBNEI7SUFFL0MsT0FBTyxhQUFhLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxzQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFFLE1BQTJCO0lBRTdDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSx5QkFBYSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2pFLENBQUM7QUFIRCxvQkFHQztBQUlEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsVUFBVSxDQUN0QixDQUFzQixFQUN0QixDQUFzQixFQUN0QixLQUEwQixFQUMxQixJQUEwQixFQUMxQixNQUE0QjtJQUUvQixPQUFPLEdBQUcsRUFBRSxDQUFDLGVBQWUsdUNBQTBCLENBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsR0FBRyxDQUFDO0FBQzFGLENBQUM7QUFSRCxnQ0FRQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFFLE1BQTBCO0lBRWpELE9BQU8sR0FBRyxFQUFFLENBQUMsY0FBYywwQkFBYyxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ3hFLENBQUM7QUFIRCw4QkFHQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsZUFBZTtBQUNmLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsTUFBcUMsRUFBRSxNQUF5QztJQUV0RyxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsaUNBQW9CLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMseUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDaEYsQ0FBQztBQUpELHNCQUlDO0FBV0Q7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsTUFBb0IsRUFBRSxRQUFnQztJQUUxRSxJQUFJLENBQUMsR0FBSSxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RFLElBQUksR0FBRyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxtQkFBTyxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN0QyxDQUFDO0FBTEQsd0JBS0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxFQUFnQixFQUFFLEVBQWdCLEVBQzFELFFBQWdDO0lBRTdCLElBQUksR0FBRyxHQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsSUFBSSxHQUFHLEdBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLG1CQUFPLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMvQyxDQUFDO0FBUEQsMEJBT0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxXQUEwQyxFQUNsRSxHQUFHLE1BQWtCO0lBRXJCLE9BQU8sR0FBRyxFQUFFO1FBRVgsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ25CLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUTtZQUNsQyxDQUFDLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQzs7WUFFdkIsQ0FBQyxJQUFJLEdBQUcseUJBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUVoRSxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsRUFBRSxDQUFDLHlCQUFhLENBQUMsa0JBQWtCLENBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxLQUF5QixFQUFFLElBQTBDLEVBQ3pGLE9BQWlCO0lBRWpCLE9BQU8sR0FBRyxFQUFFO1FBRVgsSUFBSSxXQUFXLEdBQUcsd0JBQVksQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFFLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLE9BQU8sT0FBTyxXQUFXLEdBQUcsVUFBVSxHQUFHLGFBQWEsR0FBRyxDQUFDO0lBQzNELENBQUMsQ0FBQztBQUNILENBQUM7QUFWRCxrQkFVQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFFLFFBQTZCO0lBRWxELE9BQU8sSUFBSSxXQUFXLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUhELG9CQUdDO0FBSUQ7OztHQUdHO0FBQ0gsTUFBTSxXQUFXO0lBSWhCLFlBQW9CLFFBQTZCO1FBRWhELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLElBQUksUUFBUTtZQUNYLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUU1QixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQWlDO0lBQzFCLGFBQWEsS0FBYyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUl4RCw2Q0FBNkM7SUFDeEMsS0FBSyxDQUFFLE9BQWUsRUFBRSxHQUFHLEtBQTRCO1FBRTlELElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUUxQixLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssRUFDdEI7WUFDQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztpQkFFeEI7Z0JBQ0MsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJO29CQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDM0I7U0FDRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDLENBQUUsS0FBc0IsRUFBRSxHQUFHLElBQXVCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEcsQ0FBQyxDQUFFLEtBQXNCLEVBQUUsR0FBRyxJQUF1QixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RyxDQUFDLENBQUUsS0FBYSxFQUFFLEdBQUcsSUFBYyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBRSxLQUFhLEVBQUUsR0FBRyxJQUFjLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEYsQ0FBQyxDQUFFLEtBQWEsRUFBRSxHQUFHLElBQWMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDLENBQUUsS0FBYSxFQUFFLEdBQUcsSUFBYyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBGLENBQUMsQ0FBRSxLQUFrRCxFQUMzRCxHQUFHLElBQW1ELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQyxDQUFFLEtBQWtELEVBQzNELEdBQUcsSUFBbUQsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5RixDQUFDLENBQUUsS0FBb0MsRUFDN0MsR0FBRyxJQUFxQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBRSxLQUFvQyxFQUM3QyxHQUFHLElBQXFDLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEYsQ0FBQyxDQUFFLEtBQW9DLEVBQzdDLEdBQUcsSUFBcUMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDLENBQUUsS0FBb0MsRUFDN0MsR0FBRyxJQUFxQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhGLENBQUMsQ0FBRSxLQUFzQixFQUFFLEdBQUcsSUFBdUIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDLENBQUUsS0FBc0IsRUFBRSxHQUFHLElBQXVCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEcsQ0FBQyxDQUFFLEtBQW1ELEVBQzVELEdBQUcsSUFBb0QsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDLENBQUUsS0FBbUQsRUFDNUQsR0FBRyxJQUFvRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9GLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztDQUM3QztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsYUFBYTtBQUNiLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsQ0FBc0IsRUFBRSxDQUFzQixFQUFFLENBQXNCLEVBQzdGLENBQXNCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QjtJQUVyRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsbUJBQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDN0UsQ0FBQztBQUpELHdCQUlDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixRQUFRLENBQ3RCLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQ2xHLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQ2xHLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQ2xHLEVBQXVCLEVBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCO0lBR2hHLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxtQkFBTyxDQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDekgsQ0FBQztBQVJELDRCQVFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixXQUFXLENBQUUsQ0FBc0I7SUFFL0MsT0FBTyxHQUFHLEVBQUUsQ0FBQyxlQUFlLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDbEUsQ0FBQztBQUhELGtDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBRSxJQUFZLEVBQUUsQ0FBcUI7SUFFcEQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzdELENBQUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFxQjtJQUV6QyxPQUFPLFVBQVUsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsQ0FBcUI7SUFFMUMsT0FBTyxVQUFVLENBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFIRCwwQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLENBQXFCO0lBRTFDLE9BQU8sVUFBVSxDQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSEQsMEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxDQUFxQjtJQUUxQyxPQUFPLFVBQVUsQ0FBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUhELDBCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixRQUFRLENBQ3ZCLENBQXNCLEVBQUUsQ0FBc0IsRUFBRSxDQUFzQixFQUN0RSxDQUFxQjtJQUVyQixJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0RSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RSxPQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEMsQ0FBQztBQVBELDRCQU9DO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsRUFBdUIsRUFBRSxFQUF3QjtJQUVwRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUN2SCxDQUFDO0FBSEQsc0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQVMsU0FBUyxDQUFFLElBQVksRUFBRSxDQUFzQjtJQUVwRCxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDOUQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLENBQXNCO0lBRTFDLE9BQU8sU0FBUyxDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsd0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFzQjtJQUUxQyxPQUFPLFNBQVMsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsQ0FBc0I7SUFFMUMsT0FBTyxTQUFTLENBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx3QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDeEUsRUFBdUI7SUFFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDeEUseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ2pDLENBQUM7QUFORCwwQkFNQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFFLEVBQXNCLEVBQUUsRUFBdUI7SUFFakUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyx3QkFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDcEgsQ0FBQztBQUhELG9CQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsRUFBc0I7SUFFekMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDNUQsQ0FBQztBQUhELHNCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixLQUFLLENBQUUsRUFBc0I7SUFFekMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDNUQsQ0FBQztBQUhELHNCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsQ0FBc0IsRUFBRSxDQUF1QjtJQUV0RSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUN4SCxDQUFDO0FBSEQsOEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQVMsYUFBYSxDQUFFLElBQVksRUFBRSxDQUFzQjtJQUV4RCxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDOUQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLENBQXNCO0lBRTlDLE9BQU8sYUFBYSxDQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsZ0NBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxDQUFzQjtJQUU5QyxPQUFPLGFBQWEsQ0FBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsQ0FBc0I7SUFFOUMsT0FBTyxhQUFhLENBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxnQ0FHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLENBQXNCLEVBQUUsQ0FBc0IsRUFDMUUsQ0FBc0I7SUFFdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdEUseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0FBQ3JDLENBQUM7QUFORCxrQ0FNQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsaUJBQWlCO0FBQ2pCLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsSUFBeUI7SUFFakQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxlQUFlLHlCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDckUsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsR0FBa0IsRUFBRSxHQUFrQjtJQUUxRCxJQUFJLE9BQU8sR0FBRyxFQUFFLFVBQVUsRUFBRSx5QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hELE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxtQkFBTyxDQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxtQkFBTyxDQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQy9FLENBQUM7QUFKRCx3QkFJQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLEtBQXFELEVBQ3pFLEdBQUcsTUFBbUI7SUFFdEIsb0dBQW9HO0lBQ3BHLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLG1CQUFPLENBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLDhCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ3JHLENBQUM7QUFMRCx3QkFLQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixJQUFJLENBQUUsV0FBMEMsRUFDNUQsV0FBMkM7SUFFM0MsSUFBSSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLG1CQUFPLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RCxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2pELENBQUM7QUFORCxvQkFNQzs7Ozs7Ozs7Ozs7Ozs7OztBQ253QkQsZ0dBRzRCO0FBRzVCLG1HQUF1RDtBQUl2RDs7OztHQUlHO0FBQ1EsV0FBRyxHQUFtQixJQUFJLHlCQUFhLEVBQUUsQ0FBQztBQUlyRDs7O0dBR0c7QUFDUSxlQUFPLEdBQW9CLElBQUksMEJBQWMsRUFBRSxDQUFDO0FBSTNELDRCQUE0QjtBQUM1QixTQUFnQixPQUFPLENBQUUsQ0FBUyxJQUFtQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQTVFLDBCQUE0RTtBQUk1RTs7OztHQUlHO0FBQ1EsV0FBRyxHQUFtQixJQUFJLHlCQUFhLEVBQUUsQ0FBQztBQUlyRCxrREFBa0Q7QUFDbEQsU0FBZ0IsQ0FBQyxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFyRSxjQUFxRTtBQUVyRSx1Q0FBdUM7QUFDdkMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUsMENBQTBDO0FBQzFDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLG1FQUFtRTtBQUNuRSxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSwwRUFBMEU7QUFDMUUsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUsdUNBQXVDO0FBQ3ZDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLHFDQUFxQztBQUNyQyxTQUFnQixJQUFJLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXpFLG9CQUF5RTtBQUV6RSwwREFBMEQ7QUFDMUQsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUsMENBQTBDO0FBQzFDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLG9DQUFvQztBQUNwQyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSxxQ0FBcUM7QUFDckMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkUscUNBQXFDO0FBQ3JDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFO3NDQUNzQztBQUN0QyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSwwRkFBMEY7QUFDMUYsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUF2RSxnQkFBdUU7QUFFdkU7dUNBQ3VDO0FBQ3ZDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBRXZFLHlGQUF5RjtBQUN6RixTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQXZFLGdCQUF1RTtBQUV2RSxxRUFBcUU7QUFDckUsU0FBZ0IsR0FBRyxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUF6RSxrQkFBeUU7QUFFekUsd0VBQXdFO0FBQ3hFLFNBQWdCLEdBQUcsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFBekUsa0JBQXlFO0FBRXpFLG9GQUFvRjtBQUNwRixTQUFnQixJQUFJLENBQUUsQ0FBUyxJQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQTNFLG9CQUEyRTtBQUUzRSxtRkFBbUY7QUFDbkYsU0FBZ0IsSUFBSSxDQUFFLENBQVMsSUFBa0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUEzRSxvQkFBMkU7QUFFM0Usb0NBQW9DO0FBQ3BDLFNBQWdCLEVBQUUsQ0FBRSxDQUFTLElBQWtCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBdkUsZ0JBQXVFO0FBR3ZFOzs7O0dBSUc7QUFDUSxhQUFLLEdBQWtCLElBQUksd0JBQVksRUFBRSxDQUFDO0FBSXJELHFDQUFxQztBQUNyQyxTQUFnQixHQUFHLENBQUUsQ0FBUyxJQUFpQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQXhFLGtCQUF3RTtBQUV4RSxxQ0FBcUM7QUFDckMsU0FBZ0IsR0FBRyxDQUFFLENBQVMsSUFBaUIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUF4RSxrQkFBd0U7QUFFeEUsc0NBQXNDO0FBQ3RDLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQWlCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBMUUsb0JBQTBFO0FBRTFFLG1DQUFtQztBQUNuQyxTQUFnQixJQUFJLENBQUUsQ0FBUyxJQUFpQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQTFFLG9CQUEwRTtBQUkxRTs7OztHQUlHO0FBQ1EsWUFBSSxHQUFpQixJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUlsRCx5Q0FBeUM7QUFDekMsU0FBZ0IsRUFBRSxDQUFFLENBQVMsSUFBZ0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFyRSxnQkFBcUU7QUFFckUsb0NBQW9DO0FBQ3BDLFNBQWdCLENBQUMsQ0FBRSxDQUFTLElBQWdCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBbkUsY0FBbUU7QUFHbkU7Ozs7R0FJRztBQUNRLGtCQUFVLEdBQXVCLElBQUksNkJBQWlCLEVBQUUsQ0FBQztBQUlwRSxzQ0FBc0M7QUFDdEMsU0FBZ0IsR0FBRyxDQUFFLENBQVMsSUFBc0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUE3RSxrQkFBNkU7QUFFN0UsdUNBQXVDO0FBQ3ZDLFNBQWdCLElBQUksQ0FBRSxDQUFTLElBQXNCLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBL0Usb0JBQStFO0FBRS9FLHVDQUF1QztBQUN2QyxTQUFnQixJQUFJLENBQUUsQ0FBUyxJQUFzQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQS9FLG9CQUErRTtBQUUvRSxvQ0FBb0M7QUFDcEMsU0FBZ0IsQ0FBQyxDQUFFLENBQVMsSUFBc0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUF6RSxjQUF5RTtBQUl6RTs7OztHQUlHO0FBQ1EsaUJBQVMsR0FBc0IsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO0FBSWpFLHVDQUF1QztBQUN2QyxTQUFnQixFQUFFLENBQUUsQ0FBUyxJQUFxQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQTFFLGdCQUEwRTtBQUUxRSw0Q0FBNEM7QUFDNUMsU0FBZ0IsR0FBRyxDQUFFLENBQVMsSUFBcUIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUE1RSxrQkFBNEU7QUFJNUUsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7Ozs7O0dBTUc7QUFDSCxTQUFnQixHQUFHLENBQUUsS0FBMkIsRUFBRSxHQUFHLE1BQWE7SUFFOUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxrQ0FBc0IsQ0FBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUhELGtCQUdDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxDQUE2QixNQUFtQixFQUFFLFFBQTBCO0lBRTlGLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUTtRQUNqQixDQUFDLENBQUMsU0FBUyxNQUFNLENBQUMsSUFBSSxJQUFJLDhCQUFpQixDQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHO1FBQ2hGLENBQUMsQ0FBQyxTQUFTLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUNsQyxDQUFDO0FBTEQsd0JBS0M7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IsR0FBRyxDQUFFLEdBQStCO0lBRW5ELE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckMsQ0FBQztBQUhELGtCQUdDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixJQUFJLENBQUUsUUFBMEIsRUFBRSxVQUF3RCxFQUN6RyxRQUEyQjtJQUV4QixPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDM0csQ0FBQztBQUpELG9CQUlDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsR0FBUTtJQUU1QixPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksbUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ3JDLENBQUM7QUFIRCx3QkFHQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsV0FBVztBQUNYLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7OztHQUdHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLFVBQTJDLEVBQ25FLEtBQXlDLEVBQ3pDLFNBQTRCLEVBQUUsVUFBNkI7SUFFM0QsT0FBTyxHQUFHLEVBQUU7UUFFWCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFPLENBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBTyxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxPQUFPLEdBQUcsTUFBTSxZQUFZLG1CQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxLQUFLLEtBQUssRUFBRSxDQUFDO0lBQzNFLENBQUM7QUFDRixDQUFDO0FBWEQsMEJBV0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixRQUFRLENBQUUsVUFBMkMsRUFDcEUsU0FBMkIsRUFBRSxLQUF5QyxFQUN0RSxTQUE0QixFQUFFLFVBQTZCO0lBRTNELE9BQU8sR0FBRyxFQUFFO1FBRVgsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFPLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBTyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQU8sQ0FBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFPLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hELE9BQU8sR0FBRyxNQUFNLGFBQWEsbUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLEdBQUcsV0FBVyxLQUFLLEtBQUssRUFBRSxDQUFDO0lBQ3pGLENBQUM7QUFDRixDQUFDO0FBWkQsNEJBWUM7Ozs7Ozs7Ozs7Ozs7O0FDOVNELDhCQUE4Qjs7Ozs7Ozs7Ozs7O0FBRTlCLGtHQUFtQztBQUNuQyxvR0FBb0M7QUFDcEMsb0dBQW9DO0FBQ3BDLG9HQUFvQztBQUNwQywwR0FBdUM7QUFDdkMsb0dBQW9DO0FBQ3BDLDBHQUF1QztBQUN2QyxnR0FBa0M7QUFDbEMsd0ZBQThCO0FBQzlCLDBGQUErQjtBQUMvQiwwRkFBK0I7QUFDL0IsMEZBQStCO0FBQy9CLHdGQUE4QjtBQUM5QixvR0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcEMsd0VBQTJHO0FBQzNHLDBGQUF1QztBQUN2QyxnR0FBOEM7QUFJOUM7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxXQUFJO0lBRXRDLFlBQW9CLE1BQXlCLEVBQUUsWUFBc0M7UUFFcEYsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLE1BQU07WUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUFnQjtRQUVsRyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxrQkFBVyxDQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRGLEtBQUssSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVU7WUFDdkMsWUFBWSxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUNsQixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBd0IsQ0FBQyxDQUFDO1FBQ2pHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBSUQsOERBQThEO0lBQ3ZELE1BQU0sQ0FBRSxNQUF1QztRQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsT0FBTztRQUVSLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBRSxjQUFjLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxNQUFNLENBQXFCLENBQUM7UUFFNUYsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBMkIsQ0FBQztRQUN4RCxLQUFLLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ3JDO1lBQ0MsSUFDQTtnQkFDQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLElBQUksT0FBTztvQkFDVixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQTBCLENBQUM7YUFDeEQ7WUFDRCxPQUFNLENBQUMsRUFDUDtnQkFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLDhCQUE4QixFQUFFLENBQUMsQ0FBQzthQUNqRDtTQUNEO0lBQ0YsQ0FBQztJQUdELG9DQUFvQztJQUMxQixTQUFTLENBQUUsR0FBOEI7UUFFbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ25CLE9BQU87UUFFUixHQUFHLENBQUMsV0FBVyxDQUFFLGNBQWMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFFOUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUNwQyxHQUFHLENBQUMsV0FBVyxDQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUxQyxHQUFHLENBQUMsV0FBVyxDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFJSiw2RkFBNkY7SUFDdEYsYUFBYTtRQUVuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQTJCRDtBQWhIRCxzQ0FnSEM7QUFJRDs7R0FFRztBQUNILE1BQU0sa0JBQW1CLFNBQVEsc0JBQVM7SUFFekMsWUFBb0IsUUFBMkIsRUFBRSxRQUE0QjtRQUU1RSxLQUFLLENBQUUsUUFBUSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixXQUFXO1FBRWpCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxtQkFBTyxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDOUIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQU8sQ0FBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDM0QsTUFBTSxFQUFFLEdBQUc7U0FDWCxDQUFDO0lBQ0gsQ0FBQztDQU9EOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0pELHdFQUFxRjtBQUlyRjs7Ozs7R0FLRztBQUNILE1BQWEsV0FBWSxTQUFRLGVBQVE7SUFFeEMsWUFBb0IsWUFBb0M7UUFFakQsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF5QixFQUFFLGNBQXNDLEVBQUUsUUFBdUI7UUFFbkcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFXLENBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUlELGtHQUFrRztJQUNsRyw4QkFBOEI7SUFDcEIsYUFBYTtRQUV0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0lBV0osMEJBQTBCO0lBQzFCLElBQVcsV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FLdEQ7QUFqREQsa0NBaURDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RELHdFQUFxRjtBQUlyRjs7O0dBR0c7QUFDSCxNQUFhLFlBQWEsU0FBUSxlQUFRO0lBRXRDLDBGQUEwRjtJQUMxRiwrRkFBK0Y7SUFDL0YsVUFBVTtJQUNWLFlBQW9CLFlBQXFELEVBQUUsZ0JBQTBCO1FBRWpHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQ2hELENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUF1QjtRQUVuRyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyQyxJQUFJLFlBQVksWUFBWSxZQUFZLEVBQ3hDO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7WUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQ3pDO2FBQ0ksSUFBSSxZQUFZLFlBQVksWUFBWSxFQUM3QztZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDckM7YUFFRDtZQUNJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFXLENBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFeEUsd0ZBQXdGO1lBQ3hGLDBGQUEwRjtZQUMxRixvRkFBb0Y7WUFDcEYsMEZBQTBGO1lBQzFGLHdGQUF3RjtZQUN4RixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLFlBQVksRUFDaEI7Z0JBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVFO2lCQUNJLElBQUksVUFBVSxFQUNuQjtnQkFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDMUU7aUJBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUN2QztnQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO2FBQ3pCO2lCQUNJLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLEtBQUssRUFDeEM7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQzthQUN2QjtTQUNKO0lBQ1IsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFlBQVksQ0FBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFJRCxrR0FBa0c7SUFDbEcsMkJBQTJCO0lBQ2pCLGFBQWE7UUFFdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2YsQ0FBQztDQTJCSjtBQTNHRCxvQ0EyR0M7QUFJRDs7O0dBR0c7QUFDSCxNQUFhLFlBQWEsU0FBUSxlQUFRO0lBRXRDLDBGQUEwRjtJQUMxRiwrRkFBK0Y7SUFDL0YsVUFBVTtJQUNWLFlBQW9CLFlBQXFDO1FBRXJELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUF1QjtRQUVuRyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQVcsQ0FBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV4RSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxZQUFZLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFJRCxrR0FBa0c7SUFDbEcsMkJBQTJCO0lBQ2pCLGFBQWE7UUFFdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2YsQ0FBQztDQW9CSjtBQWhFRCxvQ0FnRUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTEQsbUdBQWdGO0FBQ2hGLHdFQUE4RjtBQUM5RixtR0FBMkQ7QUFHM0QsbUdBQXdEO0FBSXhEOztHQUVHO0FBQ0gsTUFBc0IsU0FBcUMsU0FBUSxXQUFJO0lBRXRFLFlBQW9CLGVBQTZDO1FBRWhFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDeEMsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQWdCO1FBRWxHLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU5QyxtRkFBbUY7UUFDbkYsNEJBQTRCO1FBQ2xDLElBQUksUUFBUSxHQUFHLHNDQUFzQixDQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUTtZQUNaLE9BQU87UUFFUixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLHdDQUF3QixDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN0QixPQUFPO1FBRVIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVE7WUFDWixPQUFPO1FBRVIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLEdBQUcsUUFBUSxLQUFLLEVBQUUsTUFBTSxDQUFvQixDQUFDO1FBRS9FLG1CQUFtQjtRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFJRCxvQ0FBb0M7SUFDMUIsU0FBUyxDQUFFLEdBQThCO1FBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN0QixPQUFPO1FBRVIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVE7WUFDWixPQUFPO1FBRVIsR0FBRyxDQUFDLFdBQVcsQ0FBRSxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFFbEMsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLEdBQUcsQ0FBQyxXQUFXLENBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQVNKLDZCQUE2QjtJQUN0QixLQUFLO1FBRVgsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsa0JBQWtCO1FBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWE7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBSUQscUZBQXFGO0lBQ3JGLElBQVcsS0FBSyxLQUFRLE9BQU8sSUFBSSxDQUFDLFFBQWEsQ0FBQyxDQUFDLENBQUM7Q0FhcEQ7QUFqR0QsOEJBaUdDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFlBQXdDLFNBQVEsU0FBWTtJQUV4RSxZQUFvQixLQUFvQixFQUFFLGVBQTZDO1FBRXRGLEtBQUssQ0FBRSxlQUFlLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksWUFBWSxDQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFJRCxxREFBcUQ7SUFDM0Msb0JBQW9CO1FBRTdCLHVDQUF1QztRQUN2QyxJQUFJLFdBQVcsR0FBRyxrQ0FBcUIsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckQsbUZBQW1GO1FBQ25GLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZFLENBQUM7SUFJRCxvRUFBb0U7SUFDakUsSUFBVyxXQUFXO1FBRWxCLE9BQVEsR0FBRyxDQUFDLFFBQVEsQ0FBRSxrQ0FBcUIsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBT0o7QUExQ0Qsb0NBMENDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFNBQXFDLFNBQVEsU0FBWTtJQUVyRSxZQUFvQixLQUEwQixFQUFFLGVBQTZDO1FBRTVGLEtBQUssQ0FBRSxlQUFlLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksU0FBUyxDQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFJRCxxREFBcUQ7SUFDM0Msb0JBQW9CO1FBRTdCLE9BQU8sVUFBVSwrQkFBa0IsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0NBU0Q7QUFoQ0QsOEJBZ0NDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcE1ELDRHQUF3RDtBQUN4RCx3RUFBeUc7QUFHekcsbUdBQTJEO0FBQzNELG1HQUF3RDtBQUN4RCwwRkFBdUM7QUFLdkM7O0dBRUc7QUFDSCxNQUFlLFFBQTRCLFNBQVEsV0FBSTtJQUV0RCxZQUFvQixjQUF3QjtRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxDQUFNLENBQUM7SUFDcEUsQ0FBQztJQUVELG9DQUFvQztJQUMxQixTQUFTLENBQUUsR0FBOEI7UUFFbEQsR0FBRyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FXSjtBQUlEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsUUFBdUI7SUFFdEQsWUFBb0IsR0FBVyxFQUFFLFVBQWdDLEVBQUUsYUFBc0M7UUFFbEcsMkJBQTJCO1FBQ2pDLEtBQUssQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFVBQVUsQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxvQ0FBb0M7SUFDdkIsV0FBVztRQUV2QixJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN0RixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7WUFFZixHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFMUIsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0NBQXFCLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hHLElBQUksbUJBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUUsVUFBVSxDQUFDO1lBQ25FLG1CQUFtQixHQUFHLGFBQWEsbUJBQW1CLElBQUksQ0FBQztRQUUvRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywrQkFBa0IsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEYsT0FBTyxXQUFXLEdBQUcsSUFBSSxtQkFBbUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pFLENBQUM7Q0FVSjtBQTNDRCxnQ0EyQ0M7QUFJRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLFFBQTBCO0lBRTVELFlBQW9CLFNBQWlCLEVBQUUsTUFBZTtRQUUvQywyQkFBMkI7UUFDakMsS0FBSyxDQUFFLElBQUksQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLGFBQWEsQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQW9DO0lBQ3ZCLFdBQVc7UUFFdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBQ3pGLE9BQU8sY0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0QsQ0FBQztDQVFKO0FBOUJELHNDQThCQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsUUFBeUI7SUFFMUQsWUFBb0IsUUFBbUI7UUFFdEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxPQUFPLElBQUksWUFBWSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQW9DO0lBQ3ZCLFdBQVc7UUFFdkIsT0FBTyxjQUFjLGdDQUFnQixDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUM7Q0FJSjtBQXZCRCxvQ0F1QkM7QUFJRDs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLHNCQUFTO0lBRXRDLFlBQW9CLFdBQTZCLEVBQUUsS0FBZ0I7UUFFbEUsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixXQUFXO1FBRWpCLE9BQU8sSUFBSSxRQUFRLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sU0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0NBT0Q7QUF6QkQsNEJBeUJDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxlQUFRO0lBRTFDLFlBQW9CLE9BQWlEO1FBRXBFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLGFBQWEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRW5HLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNJLGFBQWE7UUFFbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRSwwRkFBMEY7SUFDMUYscUJBQXFCO0lBQ2pCLFFBQVE7UUFFZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQVNEO0FBL0NELHNDQStDQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNRDs7OztHQUlHO0FBQ0gsTUFBc0IsUUFBUTtJQUU3QixzQkFBc0I7SUFDZixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRW5HLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Q0FjRDtBQXRCRCw0QkFzQkM7QUFJRDs7OztHQUlHO0FBQ0gsTUFBc0IsSUFBSyxTQUFRLFFBQVE7SUFTMUMsNkZBQTZGO0lBQzdGLHFDQUFxQztJQUM5QixLQUFLLEtBQVcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBTzdDLG1FQUFtRTtJQUM1RCxNQUFNLENBQUMsWUFBWSxDQUFFLFFBQWdCLEVBQUUsTUFBdUM7UUFFcEYsSUFDQTtZQUNDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxDQUFDLEVBQ1I7WUFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLHdCQUF3QixRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdEQsT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7Q0FPRDtBQXRDRCxvQkFzQ0M7QUFJRCx5REFBeUQ7QUFDekQsU0FBZ0IsV0FBVyxDQUFFLGNBQXNDLEVBQUUsUUFBdUIsRUFBRSxZQUFvQyxFQUNqSSxTQUFrQjtJQUVsQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsWUFBWTtRQUM3QixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWpCLElBQUksSUFBSSxHQUFHLENBQUMsWUFBWTtRQUN2QixDQUFDLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFFLFFBQVMsQ0FBQztRQUM5QyxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUTtZQUNqQyxDQUFDLENBQUMsWUFBWTtZQUNkLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBRXRCLE9BQU8sQ0FBQyxTQUFTO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBRSxTQUFTLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQWpCRCxrQ0FpQkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SkQsdUZBQWtFO0FBQ2xFLHdFQUF3RjtBQUN4RixpRkFBaUM7QUFDakMsdUZBQXFEO0FBQ3JELDBGQUEyRDtBQUkzRCx5RkFBeUY7QUFDekYsNERBQTREO0FBRTVELGdGQUFnRjtBQUNoRixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFekM7OztHQUdHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBSXpDOzs7Ozs7R0FNRztBQUNILE1BQU0sYUFBYTtJQUVsQixZQUFhLFFBQXlCLEVBQUUsSUFBWSxFQUFFLGtCQUFrQztRQUV2RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFFdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsV0FBb0MsQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCw2RkFBNkY7SUFDN0Ysd0NBQXdDO0lBQ2hDLE9BQU87UUFFZCxxRkFBcUY7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbkMsMkRBQTJEO1FBQ3JELElBQUksSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsS0FBSztZQUNiLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5ELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxlQUFlO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXJCLHNFQUFzRTtRQUN0RSxLQUFLLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLHdDQUF3QztJQUNoQyxlQUFlLENBQUUsUUFBdUIsRUFBRSxPQUFZO1FBRTdELElBQUksT0FBTyxZQUFZLDJCQUFlO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLENBQUM7YUFDM0IsSUFBSSxPQUFPLFlBQVksaUJBQU87WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ25DLElBQUksT0FBTyxZQUFZLFdBQUk7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDakMsSUFBSSxPQUFPLFlBQVksZUFBUTtZQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDcEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFFLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBSUQsZ0ZBQWdGO0lBQ3hFLGdCQUFnQixDQUFFLEdBQW9CO1FBRTdDLHFGQUFxRjtRQUNyRix3RkFBd0Y7UUFDeEYscUJBQXFCO1FBQ3JCLGVBQWUsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUlELGlDQUFpQztJQUN6QixjQUFjLENBQUUsUUFBdUIsRUFBRSxNQUFlO1FBRS9ELDhFQUE4RTtRQUM5RSx3Q0FBd0M7UUFDeEMsSUFBSSxNQUFNLENBQUMsU0FBUztZQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSUQsNEJBQTRCO0lBQ3BCLGVBQWUsQ0FBRSxRQUF1QixFQUFFLFFBQWtCO1FBRW5FLDhFQUE4RTtRQUM5RSx3Q0FBd0M7UUFDeEMsSUFBSSxRQUFRLENBQUMsU0FBUztZQUNaLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFJRCwyQ0FBMkM7SUFDbkMsV0FBVyxDQUFFLFFBQXVCLEVBQUUsSUFBVTtRQUV2RCx5RkFBeUY7UUFDekYsMENBQTBDO1FBQzFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDdkI7WUFDQyxJQUFJLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUUvQztnQkFDQywrQ0FBK0M7Z0JBQy9DLE9BQU87YUFDUDtTQUNEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXRELElBQUksSUFBSSxZQUFZLHNCQUFVO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JCLElBQUksSUFBSSxZQUFZLHlCQUFhO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDOztZQUU1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBSUQsd0NBQXdDO0lBQ2hDLFlBQVksQ0FBRSxRQUFlO1FBRXBDLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3JDLE9BQU87UUFFUixzRkFBc0Y7UUFDdEYsS0FBSyxJQUFJLE9BQU8sSUFBSSxRQUFRO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQscUJBQXFCO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBSUQsdUVBQXVFO0lBQ2hFLGlCQUFpQixDQUFFLElBQVksRUFBRSxLQUFhLEVBQUUsU0FBbUIsRUFBRSxhQUFzQjtRQUVqRyxJQUFJLElBQUksQ0FBQyxxQkFBcUI7WUFDcEIsMENBQTZCLENBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFJRDs7O09BR0c7SUFDSSxpQkFBaUIsQ0FBRSxRQUFnQjtRQUV6QyxvRkFBb0Y7UUFDcEYsc0ZBQXNGO1FBQ3RGLHNGQUFzRjtRQUN0Rix1RkFBdUY7UUFDdkYsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxRQUFRO1lBQ1osT0FBTyxrQkFBa0IsRUFBRSxDQUFDO2FBQ3hCLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3RFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFFckM7WUFDQywwRkFBMEY7WUFDMUYsa0VBQWtFO1lBQ2xFLElBQUksWUFBWSxHQUFHLCtCQUErQixDQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEYsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEU7SUFDRixDQUFDO0lBSUQsOEZBQThGO0lBQ3ZGLFdBQVcsQ0FBRSxNQUF1QztRQUUxRCxzR0FBc0c7UUFDdEcseURBQXlEO1FBQ3pELElBQUksTUFBTSxZQUFZLGFBQWEsRUFDbkM7WUFDQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUU7UUFFRCx3Q0FBd0M7UUFDeEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUN4QixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFOUIsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN4QjtZQUNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FDakYsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBaUIsQ0FBQztTQUNyRjtRQUVELHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSUQsNkRBQTZEO0lBQ3RELFVBQVU7UUFFVixvRkFBb0Y7UUFDMUYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUNuQjtZQUNDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFL0Msa0NBQWtDO1FBQ2xDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUk7WUFDeEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFJRCx3Q0FBd0M7SUFDakMsUUFBUTtRQUVkLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxFQUNuQztZQUNDLGlGQUFpRjtZQUNqRixJQUFJLElBQUksQ0FBQyxrQkFBa0I7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztpQkFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUN4QjtnQkFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM3Qzs7Z0JBRUEsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDO1lBRXZELElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFdBQVksQ0FBQyxLQUFzQixDQUFDLENBQUM7U0FDNUQ7SUFDRixDQUFDO0lBSUQsd0NBQXdDO0lBQ2pDLFVBQVU7UUFFaEIsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUM7WUFDaEMsT0FBTztRQUVSLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxFQUNuQztZQUNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVsQixtRUFBbUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsVUFBVTtnQkFDbEIsSUFBSSxDQUFDLFdBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFJRCx3REFBd0Q7SUFDakQsY0FBYyxDQUFFLEdBQThCO1FBRXBELHNHQUFzRztRQUN0Ryx5REFBeUQ7UUFDekQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUNuQjtZQUNDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELHdDQUF3QztRQUNsQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQ3JCLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUV2QyxtREFBbUQ7UUFDbkQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3hCO1lBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBRSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEg7UUFFRCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUlELGdGQUFnRjtJQUNoRixJQUFZLFVBQVUsS0FBYyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO0NBMkRoRztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7Ozs7OztHQU1HO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUUsTUFBZSxFQUFFLE1BQWU7SUFFbkUscUJBQXFCLEdBQUcsTUFBTSxDQUFDO0lBQy9CLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDbEQsQ0FBQztBQUpELGdEQUlDO0FBSUQ7OztHQUdHO0FBQ0gsSUFBSSxxQkFBcUIsR0FBWSxJQUFJLENBQUM7QUFFMUMsYUFBYTtBQUNiLHFCQUFxQixHQUFHLEtBQUssQ0FBQztBQUM5QixVQUFVO0FBRVY7O0dBRUc7QUFDSCxJQUFJLHdCQUF3QixHQUFHLEdBQUcsQ0FBQztBQUVuQyw2REFBNkQ7QUFDN0QsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBSXZCOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUUsU0FBaUIsRUFBRSxRQUFnQjtJQUV6RCxPQUFPLHFCQUFxQjtRQUMzQixDQUFDLENBQUMsa0JBQWtCLENBQUUsd0JBQXdCLENBQUM7UUFDL0MsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFTLGtCQUFrQixDQUFFLE1BQWU7SUFFM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDO0FBQ3hFLENBQUM7QUFJRCwrRkFBK0Y7QUFDL0Ysd0ZBQXdGO0FBQ3hGLFNBQVMsK0JBQStCLENBQUUsZUFBc0MsRUFBRSxRQUFnQjtJQUVqRyxJQUFJLENBQUMsZUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQztJQUViLHVCQUF1QjtJQUNwQixLQUFLLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUUsZUFBZSxDQUFDLEVBQ3BELFNBQVMsS0FBSywyQkFBZSxFQUN6QixTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBRSxTQUFTLENBQUMsRUFDNUQ7UUFDQyxvRkFBb0Y7UUFDcEYsb0ZBQW9GO1FBQzlFLDhCQUE4QjtRQUNwQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQ3pDO1lBQ1UsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLElBQUksUUFBUSxJQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQzFFLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNoQztLQUNEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFnQixzQkFBc0IsQ0FBRSxXQUFvRCxFQUMzRixNQUF3QjtJQUV4QixJQUFJLENBQUMsV0FBVztRQUNmLE9BQU8sSUFBSSxDQUFDO0lBRWIscUZBQXFGO0lBQ3JGLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUNuQztRQUNDLGVBQWUsQ0FBRSxXQUFXLENBQUMsQ0FBQztRQUM5QixPQUFPLFdBQVcsQ0FBQztLQUNuQjs7UUFFQSxPQUFPLFlBQVksQ0FBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQWRELHdEQWNDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxZQUFZLENBQUUsZUFBc0MsRUFDNUQsTUFBd0I7SUFFckIsNkVBQTZFO0lBQzdFLElBQUksZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFDM0MsT0FBTyxlQUFlLENBQUMsV0FBVyxDQUFDO0lBRXZDLGtHQUFrRztJQUNsRyw4RkFBOEY7SUFDOUYsa0ZBQWtGO0lBQ2xGLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUUsZUFBZSxDQUFDLENBQUM7SUFDeEQsSUFBSSxTQUFTLEtBQUssMkJBQWU7UUFDbkMsWUFBWSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVsQyxJQUNBO1FBQ0MsOENBQThDO1FBQzlDLElBQUksUUFBUSxHQUFHLElBQUksZUFBZSxDQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVDLGlDQUFpQztRQUNqQyxJQUFJLElBQUksR0FBRyxxQkFBcUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJO1lBQ3hELENBQUMsQ0FBQyxrQkFBa0IsRUFBRTtZQUN0QixDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztRQUV4QixJQUFJLGFBQWEsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUN4QyxPQUFPLFFBQVEsQ0FBQztLQUNoQjtJQUNELE9BQU8sR0FBRyxFQUNWO1FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSwrQ0FBK0MsZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVGLE9BQU8sSUFBSSxDQUFDO0tBQ1o7QUFDRixDQUFDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQVMsZUFBZSxDQUFFLFFBQXlCLEVBQUUsa0JBQWtDO0lBRXRGLGdGQUFnRjtJQUNoRixnQ0FBZ0M7SUFDaEMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBa0IsQ0FBQztJQUM1RCxJQUFJLGFBQWE7UUFDaEIsT0FBTztJQUVSLGlDQUFpQztJQUNqQyxJQUFJLElBQUksR0FBRyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hDLElBQUksQ0FBQyxxQkFBcUIsRUFDMUI7UUFDQyxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksZUFBZSxDQUFDLElBQUk7WUFDdkIsSUFBSSxJQUFJLEdBQUcsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO0tBQ3BDO0lBRUQseUZBQXlGO0lBQ3pGLGFBQWE7SUFDYixJQUFJLGFBQWEsQ0FBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0Isd0JBQXdCLENBQUUsUUFBeUI7SUFFbEUsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2pELENBQUM7QUFIRCw0REFHQztBQUlEOzs7Ozs7R0FNRztBQUNILFNBQWdCLGdCQUFnQixDQUFFLFFBQXlCLEVBQUUsS0FBYTtJQUV6RSxJQUFJLGFBQWEsR0FBRyx3QkFBd0IsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUN4RCxJQUFJLGFBQWEsRUFDakI7UUFDQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUM3QixhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDMUI7QUFDRixDQUFDO0FBUkQsNENBUUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUUsUUFBeUIsRUFBRSxLQUFhO0lBRTNFLElBQUksYUFBYSxHQUFHLHdCQUF3QixDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELElBQUksYUFBYSxFQUNqQjtRQUNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzdCLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUM1QjtBQUNGLENBQUM7QUFSRCxnREFRQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUUsUUFBeUIsRUFBRSxHQUE4QjtJQUUzRixJQUFJLGFBQWEsR0FBRyx3QkFBd0IsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUN4RCxJQUFJLGFBQWE7UUFDYixhQUFhLENBQUMsY0FBYyxDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFMRCw4Q0FLQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RSRDs7Ozs7R0FLRztBQUNILE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUluQzs7Ozs7R0FLRztBQUNILE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUlqQzs7Ozs7R0FLRztBQUNILE1BQXNCLGVBQWU7SUFFcEM7Ozs7O09BS0c7SUFDSCxZQUFvQixNQUFVO1FBRTdCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7UUFFbkIsNEVBQTRFO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVcsT0FBTyxLQUFvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0Q7Ozs7O09BS0c7SUFDSCxJQUFXLE1BQU0sS0FBb0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzdEO0FBOUJELDBDQThCQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25iRCxtR0FBcUU7QUErQ3JFOzs7R0FHRztBQUNILFNBQVMsbUJBQW1CLENBQUUsU0FBK0MsRUFBRSxJQUFtQixFQUM5RixLQUFzQyxFQUFFLFNBQW1CO0lBRTNELElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFDMUI7UUFDSSxJQUFJLFNBQVMsWUFBWSxZQUFZO1lBQ2pDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztZQUV0QixTQUE0QixDQUFDLGVBQWUsQ0FBRSxPQUFPLENBQUMsQ0FBQztLQUMvRDtTQUNJLElBQUksSUFBSSxFQUNiO1FBQ0ksSUFBSSxLQUFLLElBQUksSUFBSTtZQUNiLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFFLElBQUksQ0FBQyxDQUFDOztZQUV0QyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBRSxJQUFJLEVBQUUsS0FBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqRztTQUVEO1FBQ0ksSUFBSSxRQUFRLEdBQUcsS0FBdUIsQ0FBQztRQUN2QyxLQUFLLElBQUksUUFBUSxJQUFJLFFBQVE7WUFDekIsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7QUFDTCxDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsTUFBTSxvQkFBb0I7SUFFekI7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBRSxVQUEyQjtRQUUzQyxnQ0FBZ0IsQ0FBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxVQUFVLENBQUUsVUFBMkI7UUFFN0Msa0NBQWtCLENBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDTyxnQkFBZ0IsQ0FBRSxTQUErQyxFQUFFLElBQW1CLEVBQ3pGLEtBQXNDLEVBQUUsU0FBbUI7UUFFM0QsbUJBQW1CLENBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjLEtBQVUsQ0FBQztJQUVoQzs7OztPQUlHO0lBQ0ksZUFBZSxLQUFVLENBQUM7Q0FDakM7QUFzQ0Q7Ozs7OztHQU1HO0FBQ0gsTUFBYSxtQkFBbUI7SUFhNUIsWUFBYSxTQUFzQjtRQVhuQyw2RkFBNkY7UUFDeEYsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUVyRCxvREFBb0Q7UUFDNUMsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFTMUMsSUFBSSxTQUFTLEVBQ2I7WUFDSSxTQUFTLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUlKOztPQUVHO0lBQ0ksUUFBUSxDQUFFLFVBQTJCO1FBRTNDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFDbkI7WUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDcEQ7YUFFRDtZQUNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRWxFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQztJQUlEOztPQUVHO0lBQ0ksVUFBVSxDQUFFLFVBQTJCO1FBRTdDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQ2xCO1lBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2hFO2FBRUQ7WUFDQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUVsRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7SUFJRDs7O09BR0c7SUFDTyxnQkFBZ0IsQ0FBRSxTQUErQyxFQUFFLElBQW1CLEVBQ3pGLEtBQXNDLEVBQUUsU0FBbUI7UUFFakUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUvRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUlEOztPQUVHO0lBQ0ksY0FBYztRQUVwQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3REO1lBQ1UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1RDtJQUNGLENBQUM7SUFJRDs7O09BR0c7SUFDSSxlQUFlO1FBRXJCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdEQ7WUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUQ7SUFDRixDQUFDO0lBSUQ7OztPQUdHO0lBQ0ssV0FBVztRQUVaLHdDQUF3QztRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxDQUFDLFFBQWdCLEVBQUUsVUFBMkIsRUFBRSxFQUFFO1lBRTNFLElBQUksUUFBUSxHQUFHLENBQUM7Z0JBQ2YsZ0NBQWdCLENBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztnQkFFeEMsa0NBQWtCLENBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQiwwQkFBMEI7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFJSjs7O09BR0c7SUFDSyxlQUFlO1FBRWhCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNEO0FBbkpELGtEQW1KQztBQUlEOztHQUVHO0FBQ0gsTUFBTSx1QkFBdUI7SUFBN0I7UUFFSSxxREFBcUQ7UUFDaEQsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFvQzFCOztXQUVHO1FBQ0sscUJBQWdCLEdBQUcsR0FBUyxFQUFFO1lBRXJDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0YsQ0FBQztJQXRDRzs7O09BR0c7SUFDSSxJQUFJLENBQUUsV0FBdUI7UUFFaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVKOztPQUVHO0lBQ08saUJBQWlCO1FBRTFCLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2hFLENBQUM7SUFFSjs7T0FFRztJQUNPLGVBQWU7UUFFeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFDMUI7WUFDQyxvQkFBb0IsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDdkI7SUFDQyxDQUFDO0NBV0o7QUFJRDs7R0FFRztBQUNILFNBQWdCLDZCQUE2QixDQUFFLFNBQStDLEVBQzFGLElBQW1CLEVBQUUsS0FBc0MsRUFDM0QsU0FBbUIsRUFBRSxhQUFzQjtJQUU5QyxjQUFjLENBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQUUsQ0FDekMsU0FBUyxDQUFDLGdCQUFnQixDQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFORCxzRUFNQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLElBQXFDLEVBQUUsYUFBc0I7SUFFNUYsSUFBSSxTQUFTLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBRSxhQUFhLENBQUMsQ0FBQztJQUNyRyxJQUFJLFNBQVM7UUFDZixJQUFJLENBQUUsU0FBUyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUxELHdDQUtDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQix5QkFBeUI7SUFFeEMsT0FBTyxzQkFBc0IsQ0FBQztBQUMvQixDQUFDO0FBSEQsOERBR0M7QUFJRDs7Ozs7R0FLRztBQUNILFNBQWdCLHlCQUF5QixDQUFFLGFBQXFCO0lBRTVELHFFQUFxRTtJQUNyRSxJQUFJLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUQsSUFBSSxDQUFDLFNBQVM7UUFDYixPQUFPLENBQUMsQ0FBQztJQUVWLElBQUksaUJBQWlCLEdBQUcsc0JBQXNCLENBQUM7SUFDNUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUNsQyxPQUFPLGlCQUFpQixDQUFDO0FBQzFCLENBQUM7QUFYRCw4REFXQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLG1CQUFtQixDQUFFLFNBQXFCO0lBRXpELDZDQUE2QztJQUM3QyxJQUFJLEVBQUUsR0FBRyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3JDLHNCQUFzQixDQUFDLEdBQUcsQ0FBRSxFQUFFLEVBQUUsSUFBSSxtQkFBbUIsQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sRUFBRSxDQUFDO0FBQ1gsQ0FBQztBQU5ELGtEQU1DO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixxQkFBcUIsQ0FBRSxFQUFVO0lBRWhELElBQUksRUFBRSxJQUFJLDBCQUEwQixFQUNwQztRQUNDLHNCQUFzQixDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUVuQywyRUFBMkU7UUFDckUsSUFBSSxzQkFBc0IsS0FBSyxFQUFFLEVBQ2pDO1lBQ0ksc0JBQXNCLGVBQXFCLENBQUM7WUFDNUMsa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7U0FDL0M7S0FDUDtBQUNGLENBQUM7QUFiRCxzREFhQztBQUlEOzs7R0FHRztBQUNILElBQUksc0JBQXNCLGVBQTZCLENBQUM7QUFFeEQ7O0dBRUc7QUFDSCxJQUFJLHNCQUFzQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUV4RDs7O0dBR0c7QUFDSCxJQUFJLGtCQUFrQixHQUFlLHNCQUFzQixDQUFDO0FBRTVEOzs7R0FHRztBQUNILE1BQU0sMEJBQTBCLEdBQVcsSUFBSSxDQUFDO0FBRWhEOztHQUVHO0FBQ0gsSUFBSSx5QkFBeUIsR0FBVywwQkFBMEIsQ0FBQztBQUluRTs7R0FFRztBQUNILElBQUksc0JBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUM7QUFFMUQ7O0dBRUc7QUFDSCxzQkFBc0IsQ0FBQyxHQUFHLGVBQXNCLHNCQUFzQixDQUFDLENBQUM7QUFDeEUsc0JBQXNCLENBQUMsR0FBRyx5QkFBZ0MsSUFBSSxtQkFBbUIsQ0FBRSxJQUFJLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ILHNCQUFzQixDQUFDLEdBQUcsaUJBQXdCLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDemY3RSx3RUFBNEc7QUFDNUcsbUdBQWtIO0FBQ2xILGdHQUF5RDtBQUN6RCxpRkFBa0M7QUFDbEMsNEdBQStFO0FBQy9FLDBGQUEyRDtBQUkzRDs7O0dBR0c7QUFDSCxNQUFzQixTQUFVLFNBQVEsV0FBSTtJQUUzQyx1RkFBdUY7SUFDdkYsd0JBQXdCO0lBQ3hCLFlBQW9CLFFBQW1CO1FBRXRDLEtBQUssRUFBRSxDQUFDO1FBdVhULDRGQUE0RjtRQUM1RixxREFBcUQ7UUFDN0MseUJBQW9CLEdBQWtCLElBQUksQ0FBQztRQXZYbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFFekIsSUFBSSxRQUFRO1lBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFFLFFBQTRCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0ssa0JBQWtCLENBQUUsYUFBK0I7UUFFMUQsb0ZBQW9GO1FBQ3BGLHFCQUFxQjtRQUNyQixJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFDdEI7WUFDQyxvRkFBb0Y7WUFDcEYsSUFBSSxjQUFjLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBOEIsQ0FBQztZQUNyRSxJQUFJLFdBQXdCLENBQUM7WUFDN0IsSUFBSSxjQUFjLFlBQVksU0FBUztnQkFDdEMsV0FBVyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O2dCQUUvQixXQUFXLEdBQUcsY0FBYyxDQUFDO1lBRTlCLHlFQUF5RTtZQUN6RSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDekM7Z0JBQ0MsV0FBVyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUMsRUFBRTtvQkFFN0IsSUFBSSxDQUFDLFFBQVEsR0FBRywyQkFBYyxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsc0JBQXNCLENBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2FBQ0g7U0FDRDtRQUVELDJCQUEyQjtRQUMzQixxQ0FBd0IsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXhELEtBQUssSUFBSSxRQUFRLElBQUksYUFBYSxFQUNsQztZQUNDLDREQUE0RDtZQUM1RCxJQUFJLFFBQVEsS0FBSyxHQUFHLElBQUksUUFBUSxLQUFLLElBQUk7Z0JBQ3hDLFNBQVM7WUFFVixJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUM1QjtnQkFDQyx5RUFBeUU7Z0JBQ3pFLCtFQUErRTtnQkFDL0UsZ0ZBQWdGO2dCQUNoRixvQkFBb0I7Z0JBQ3BCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFDMUI7b0JBQ0MsSUFBSSxNQUFNLEdBQUcsT0FBb0MsQ0FBQztvQkFDbEQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDckI7d0JBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQ3JFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ3RDO2lCQUNEOztvQkFFQSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsU0FBUyxFQUMzRSxPQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO2lCQUNJLElBQUksUUFBUSxLQUFLLEdBQUcsRUFDekI7Z0JBQ0MscUVBQXFFO2dCQUNyRSxJQUFJLE1BQU0sR0FBRyxPQUE0QyxDQUFDO2dCQUMxRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQjtvQkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FDckUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDdkM7YUFDRDtpQkFDSSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQ2pDO2dCQUNDLHFFQUFxRTtnQkFDckUsSUFBSSxNQUFNLEdBQUcsT0FBNEMsQ0FBQztnQkFDMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDckI7b0JBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQ3JFLEdBQUcsRUFBRSxDQUFDLFFBQVEsR0FBRyxnQ0FBZ0IsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzNFO2FBQ0Q7aUJBQ0ksSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUMvQjtnQkFDQyxxRUFBcUU7Z0JBQ3JFLElBQUksTUFBTSxHQUFHLE9BQTRDLENBQUM7Z0JBQzFELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JCO29CQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxDQUNyRSxHQUFHLEVBQUUsQ0FBQyxnQ0FBZ0IsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMzRTthQUNEO2lCQUVEO2dCQUNDLG1GQUFtRjtnQkFDbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDbEM7U0FDRDtJQUNGLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsY0FBc0MsRUFBRSxRQUF1QjtRQUV6RyxLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsa0VBQWtFO1FBQ2xFLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDeEM7WUFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBRS9GLE9BQXlCLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEU7SUFDRixDQUFDO0lBSUQsaURBQWlEO0lBQ3ZDLFFBQVEsQ0FBRSxHQUFjO1FBRWpDLHFGQUFxRjtRQUNyRix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRywyQkFBYyxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxzQkFBc0IsQ0FBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBSUQseURBQXlEO0lBQ2pELHNCQUFzQixDQUFFLEdBQWM7UUFFN0MsS0FBSyxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsY0FBYyxFQUN2QztZQUNDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNoRDtnQkFDQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsR0FBRztvQkFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBRTFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxVQUF5QixFQUFFLEVBQUU7b0JBRTlDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQW1CLENBQUM7b0JBQ3JELFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQzthQUNIO2lCQUVEO2dCQUNDLElBQUksVUFBVSxHQUFJLE9BQXlCLENBQUMsS0FBSyxFQUFtQixDQUFDO2dCQUNyRSxVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDM0M7U0FDRDtJQUNGLENBQUM7SUFJRCx5REFBeUQ7SUFDbEQsV0FBVztRQUVqQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0RCxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixLQUFLLDZCQUFnQixDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQzdFLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLENBQWlCLENBQUM7UUFFL0UsOERBQThEO1FBQzlELEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDeEM7WUFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2dCQUVyRSxPQUF5QixDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7SUFJRCw2QkFBNkI7SUFDdEIsS0FBSztRQUVYLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLDJDQUEyQztRQUMzQyxLQUFLLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQ3hDO1lBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUMsT0FBc0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7O2dCQUU3RCxPQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BDO0lBQ0YsQ0FBQztJQUlELG9DQUFvQztJQUMxQixTQUFTLENBQUUsR0FBOEI7UUFFbEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN4QyxHQUFHLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXRDLDhEQUE4RDtRQUM5RCxLQUFLLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQ3hDO1lBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUMsT0FBc0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOztnQkFFckUsT0FBeUIsQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7SUFDQyxDQUFDO0lBSUosK0JBQStCO0lBQy9CLElBQVcsWUFBWTtRQUV0QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0RCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNsQyxDQUFDO0lBSUQ7Ozs7T0FJRztJQUNJLGFBQWE7UUFFbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFhRDs7Ozs7OztPQU9HO0lBQ08sT0FBTyxDQUFvQyxJQUFPLEVBQUUsS0FBMEIsRUFDakYsU0FBbUIsRUFBRSxhQUFzQjtRQUVqRCw2REFBNkQ7UUFDN0QsSUFBSSxLQUFLLElBQUksSUFBSTtZQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBWSxDQUFDO1FBRXhFLHdFQUF3RTtRQUN4RSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQ1Y7WUFDRiwwQ0FBNkIsQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFLHVCQUFXLENBQUUsSUFBSSxDQUFDLEVBQ3JELEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsOEJBQWlCLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDL0Y7SUFDUixDQUFDO0lBSUQ7Ozs7Ozs7T0FPRztJQUNJLGFBQWEsQ0FBNkIsTUFBbUIsRUFBRSxLQUFzQixFQUMzRixTQUFtQixFQUFFLGFBQXNCO1FBRTNDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxpQkFBTyxDQUFDO1lBQzFDLE9BQU87UUFFUiw2REFBNkQ7UUFDN0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQTBCLENBQUM7UUFDbkUsSUFBSSxlQUFlLElBQUksS0FBSyxJQUFJLElBQUksRUFDcEM7WUFDQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQ2pCO2dCQUNDLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzlCO29CQUNDLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7b0JBQ25FLElBQUksS0FBSyxJQUFJLENBQUMsRUFDZDt3QkFDQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7OzRCQUVoQyxlQUFlLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDbkM7aUJBQ0Q7YUFDRDtpQkFFRDtnQkFDQyxJQUFJLENBQUMsZUFBZTtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFlLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUUzRDtvQkFDQyxJQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO29CQUNuRSxJQUFJLEtBQUssSUFBSSxDQUFDO3dCQUNiLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O3dCQUVsQyxlQUFlLENBQUMsSUFBSSxDQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Q7U0FDRDtRQUVELHdFQUF3RTtRQUN4RSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQ1Y7WUFDSSwwQ0FBNkIsQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQ3ZELEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsOEJBQWlCLENBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQ3ZFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNqQztJQUNSLENBQUM7Q0FvQkQ7QUFoWUQsOEJBZ1lDO0FBSUQ7Ozs7R0FJRztBQUNILE1BQU0sYUFBYyxTQUFRLFNBQVM7SUFFcEMsMkZBQTJGO0lBQzNGLDRGQUE0RjtJQUM1Riw2RkFBNkY7SUFDN0YsUUFBUTtJQUNSLFlBQW9CLFFBQXFCLEVBQUUsYUFBbUIsRUFBRSxLQUF3QixFQUN2RixjQUEwQjtRQUUxQixLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLFdBQVc7UUFFakIsT0FBTyxJQUFJLGFBQWEsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSUQsK0NBQStDO0lBQ3hDLGlCQUFpQjtRQUV2QixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBZSxDQUFDLFlBQVksQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQ3RCO1lBQ0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQWtCLENBQUM7WUFDdkMsT0FBTyxHQUFHLGNBQWMsR0FBRyxRQUFRLElBQUksb0NBQW9CLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQzlGO2FBRUQ7WUFDQyw4QkFBOEI7WUFDOUIsSUFBSSxRQUFRLEdBQUcsZ0NBQWdCLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELGtGQUFrRjtZQUNsRiwrRUFBK0U7WUFDL0UsK0VBQStFO1lBQy9FLDZCQUE2QjtZQUM3QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxHQUFHLFFBQVEsRUFBRTtnQkFDaEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQztDQVlEO0FBSUQ7OztHQUdHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsU0FBUztJQUUxQyxZQUFvQixLQUF3QjtRQUUzQyxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLFdBQVc7UUFFakIsT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx5RkFBeUY7SUFDekYsa0JBQWtCO0lBQ1gsTUFBTSxDQUFFLE1BQXVDO0lBRXRELENBQUM7SUFFRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztDQUNEO0FBeEJELG9DQXdCQztBQUlEOzs7R0FHRztBQUNILE1BQWUsY0FBZSxTQUFRLFNBQVM7SUFFOUMsWUFBb0IsS0FBd0IsRUFBRSxZQUFvQztRQUVqRixLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF5QixFQUFFLGNBQXNDLEVBQUUsUUFBZ0I7UUFFbEcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXBELENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsa0JBQVcsQ0FBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsK0ZBQStGO0lBQ3hGLFFBQVE7UUFFZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQXVCRDtBQUlEOztHQUVHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsY0FBYztJQUU1QyxZQUFvQixLQUF3QixFQUFFLFlBQXFEO1FBRWxHLEtBQUssQ0FBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDBDQUEwQztJQUMxQyxJQUFXLFlBQVksS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTFELHFDQUFxQztJQUM5QixXQUFXO1FBRWpCLE9BQU8sSUFBSSxTQUFTLENBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNEZBQTRGO0lBQzVGLGFBQWE7SUFDYixJQUFjLFNBQVMsS0FBYSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDakQ7QUFuQkQsOEJBbUJDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxjQUFjO0lBRXpDLFlBQW9CLEtBQXdCLEVBQUUsWUFBb0M7UUFFakYsS0FBSyxDQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0NBQStDO0lBQy9DLElBQVcsU0FBUyxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFdkQscUNBQXFDO0lBQzlCLFdBQVc7UUFFakIsT0FBTyxJQUFJLE1BQU0sQ0FBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw0RkFBNEY7SUFDNUYsYUFBYTtJQUNiLElBQWMsU0FBUyxLQUFhLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNqRDtBQW5CRCx3QkFtQkM7QUFJRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLFNBQVM7SUFFMUMsWUFBb0IsUUFBcUIsRUFBRSxLQUF3QjtRQUVsRSxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLFdBQVc7UUFFakIsT0FBTyxJQUFJLFlBQVksQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxtQkFBTyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBSUQ7QUF0QkQsb0NBc0JDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNW5CRCxtR0FBc0Q7QUFDdEQsd0VBQXFGO0FBSXJGOzs7Ozs7Ozs7R0FTRztBQUNILE1BQWEsT0FBeUMsU0FBUSxlQUFRO0lBRXJFLFlBQW9CLFFBQVcsRUFBRSxLQUF1QixFQUFFLFlBQW1DO1FBRXRGLEtBQUssRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBeUIsRUFBRSxjQUFzQyxFQUFFLFFBQXVCO1FBRXpHLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGtCQUFXLENBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxPQUFPLENBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBSUQsbUNBQW1DO0lBQzVCLFdBQVc7UUFFakIsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssOEJBQWlCLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDOUcsQ0FBQztJQUlELGtHQUFrRztJQUNsRyx3Q0FBd0M7SUFDOUIsYUFBYTtRQUV0QixPQUFPLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFJSjs7Ozs7O09BTUc7SUFDSSxRQUFRLENBQUUsS0FBc0IsRUFBRSxTQUFtQixFQUFFLGFBQXNCO1FBRW5GLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFDLE9BQU8sRUFDcEMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4QkFBaUIsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFDckUsU0FBUyxFQUFFLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0NBK0JEO0FBekZELDBCQXlGQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFHRCwyRkFBMkQ7QUFDM0Qsd0ZBQWlEO0FBS2pEOzs7OztHQUtHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztBQUVoRCwyQkFBMkI7QUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBRSxtQkFBTSxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUUsQ0FBQztBQUl6Rjs7R0FFRztBQUNILFNBQVMsbUJBQW1CLENBQUUsR0FBVztJQUVyQyw0RUFBNEU7SUFDNUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM3QixJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBRTNCLDBFQUEwRTtJQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDeEI7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLGtDQUFrQztRQUNsQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7SUFFRCx3RkFBd0Y7SUFDeEYsb0RBQW9EO0lBQ3BELENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNMLHdDQUF3QztRQUN4QyxtRkFBbUY7UUFDbkYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUVyRjtRQUNJLHVFQUF1RTtRQUN2RSxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMvRDtBQUNMLENBQUM7QUFJRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBRSxDQUFTO0lBRWxDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDOUI7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNMLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDckM7U0FFRDtRQUNJLHVDQUF1QztRQUN2QyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ0wsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFaEIsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBSUQ7Ozs7Ozs7R0FPRztBQUNILFNBQVMsYUFBYSxDQUFFLENBQVU7SUFFOUIsNkNBQTZDO0lBQzdDLElBQUksQ0FBQyxJQUFJLElBQUk7UUFDVCxPQUFPLEdBQUcsQ0FBQztJQUVmLHdGQUF3RjtJQUN4RixJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRVgseUZBQXlGO0lBQ3pGLGdEQUFnRDtJQUNoRCxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVO0lBRXBFLE9BQU8sUUFBUSxrQkFBa0IsQ0FBRSxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLENBQUMsSUFBSSxhQUFhLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN0SCxDQUFDO0FBSEQsa0NBR0M7QUFJRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9CQUFvQixDQUFFLENBQVM7SUFFcEMsK0VBQStFO0lBQy9FLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFWCx5RkFBeUY7SUFDekYsa0NBQWtDO0lBQ2xDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDL0UsQ0FBQztBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxDQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVTtJQUU3RSxPQUFPLFFBQVEsd0JBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDL0gsQ0FBQztBQUhELGtDQUdDO0FBSUQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxTQUFnQixzQkFBc0IsQ0FBRSxDQUE4QixFQUFFLENBQVM7SUFFN0UsOENBQThDO0lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDUCxPQUFPLE9BQU8sQ0FBQztJQUVuQix5RkFBeUY7SUFDekYsc0VBQXNFO0lBQ3RFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLElBQUksQ0FBQyxJQUFJLElBQUk7UUFDVCxPQUFPLEtBQUssQ0FBQztJQUVqQix3RkFBd0Y7SUFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVYLHlGQUF5RjtJQUN6Rix1RkFBdUY7SUFDdkYsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEQscUJBQXFCO0lBQ3JCLE9BQU8sbUJBQW1CLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUF0QkQsd0RBc0JDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixhQUFhLENBQUUsR0FBdUI7SUFFbEQsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBRSxtQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsVUFBVSxFQUFFLG1CQUFtQjtLQUNsQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsc0NBTUM7Ozs7Ozs7Ozs7Ozs7O0FDNVBEOztHQUVHOzs7QUF3SzJELENBQUM7QUE0Qi9EOzs7R0FHRztBQUNRLGNBQU0sR0FDakI7SUFDSSxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLEdBQUcsRUFBcUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLGNBQWMsRUFBVSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLGNBQWMsRUFBVSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxZQUFZLEVBQVksUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxPQUFPLEVBQWlCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLG9CQUFvQixFQUFJLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxnQkFBZ0IsRUFBUSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLGNBQWMsRUFBVSxRQUFRO0lBQ2hDLGVBQWUsRUFBUyxRQUFRO0lBQ2hDLGlCQUFpQixFQUFPLFFBQVE7SUFDaEMsZUFBZSxFQUFTLFFBQVE7SUFDaEMsZUFBZSxFQUFTLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsR0FBRyxFQUFxQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtDQUNuQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL1ZGLDJGQUFxQztBQUNyQyx3RkFBdUc7QUFJdkc7O0dBRUc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBRSxRQUFpQztJQUUvRCxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFFaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRVosS0FBSyxJQUFJLFFBQVEsSUFBSSxRQUFRLEVBQzdCO1FBQ0ksQ0FBQyxJQUFJLEdBQUcsdUJBQVcsQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxJQUFJLFFBQVEsS0FBSyxhQUFhO1lBQzFCLENBQUMsSUFBSSxtQkFBbUIsQ0FBRSxPQUFPLENBQUMsQ0FBQzthQUNsQyxJQUFJLFFBQVEsS0FBSyxXQUFXO1lBQzdCLENBQUMsSUFBSSxpQkFBaUIsQ0FBRSxPQUFPLENBQUMsQ0FBQzthQUNoQyxJQUFJLFFBQVEsS0FBSyxZQUFZO1lBQzlCLENBQUMsSUFBSSxrQkFBa0IsQ0FBRSxPQUFPLENBQUMsQ0FBQzthQUNqQyxJQUFJLFFBQVEsS0FBSyxLQUFLO1lBQ3ZCLENBQUMsSUFBSSxlQUFlLENBQUUsT0FBTyxDQUFDLENBQUM7O1lBRS9CLENBQUMsSUFBSSxPQUFPLENBQUM7UUFFakIsQ0FBQyxJQUFJLEdBQUc7S0FDWDtJQUVELE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNuQixDQUFDO0FBMUJELDRDQTBCQztBQUlELFNBQVMsbUJBQW1CLENBQUUsR0FBMkM7SUFFckUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO1FBQ3hDLFdBQVcsRUFBRSwwQkFBYyxDQUFDLGFBQWE7S0FDNUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsaUJBQWlCLENBQUUsR0FBeUM7SUFFakUsT0FBTyxtQkFBTyxDQUFFLEdBQUcsRUFBRTtRQUNqQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLHdCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzNELFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsbUJBQU8sQ0FBRSxDQUFDLEVBQUUsd0JBQVksQ0FBQyxhQUFhLENBQUMsRUFBRTtLQUN2RSxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxrQkFBa0IsQ0FBRSxHQUEwQztJQUVuRSxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsZUFBZSxDQUFFLEdBQXVDO0lBRTdELE9BQU8sbUJBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixNQUFNLEVBQUUsR0FBRztLQUNkLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLHFCQUFxQixDQUFFLEdBQWlDO0lBRTdELE9BQU8sb0JBQU8sQ0FBRSxHQUFHLEVBQUU7UUFDakIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzdCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUN0RCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyxrQkFBa0IsQ0FBRSxHQUFpQztJQUUxRCxPQUFPLG1CQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQzNCLE1BQU0sRUFBRSxHQUFHO0tBQ2QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GRDs7R0FFRzs7QUFZMkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2IvRCx3RkFBMEQ7QUFJMUQsU0FBUyxtQkFBbUIsQ0FBRSxHQUFzQztJQUVoRSxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBSUQsU0FBUyxxQkFBcUIsQ0FBRSxHQUFpQztJQUU3RCxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ3RELENBQUM7QUFJRCxTQUFTLHlCQUF5QixDQUFFLEdBQXFDO0lBRXJFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDdkQsQ0FBQztBQWdDRDs7R0FFRztBQUNILFNBQWdCLGtCQUFrQixDQUFFLEtBQXFDO0lBRXJFLE9BQU8sbUJBQU8sQ0FBRSxLQUFLLEVBQUU7UUFDbkIsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxNQUFNLEVBQUUsR0FBRztLQUNkLENBQUM7QUFDTixDQUFDO0FBTkQsZ0RBTUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLHdCQUF3QixDQUFFLEtBQWtDO0lBRXhFLElBQUksQ0FBQyxLQUFLO1FBQ04sT0FBTyxFQUFFLENBQUM7SUFFZCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ2pDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUUzQixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDekIsSUFBSSxTQUFTO1FBQ1QsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUVuRCxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssRUFDMUI7UUFDSSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3hCLFNBQVM7UUFFYixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDZixLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksb0JBQW9CLENBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1RTtJQUVELE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUMzRCxDQUFDO0FBdkJELDREQXVCQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUUsV0FBbUIsRUFBRSxPQUFZLEVBQUUsU0FBbUI7SUFFeEYsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLElBQUksSUFBSTtRQUMvQixPQUFPLElBQUksQ0FBQztJQUVoQiwyQkFBMkI7SUFDM0IsSUFBSSxJQUFJLEdBQXFCLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV4RCxJQUFJLGVBQWUsR0FBRyx1QkFBVyxDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWhELGlHQUFpRztJQUNqRyxJQUFJLFlBQVksR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLFlBQVk7UUFDdEQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBRTVDLElBQUksT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0RyxJQUFJLE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckcsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDNUU7UUFDSSxJQUFJLEVBQUUsR0FBRywrQkFBK0IsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0QsSUFBSSxFQUFFLEdBQUcsK0JBQStCLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sR0FBRyxFQUFFLE9BQU8sZUFBZSxPQUFPLEVBQUUsRUFBRSxDQUFDO0tBQ2pEO1NBRUQ7UUFDSSxJQUFJLENBQUMsR0FBRywrQkFBK0IsQ0FBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLEdBQUcsR0FBRyxD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QUFDO0FBK0JILENBQUM7QUFrRWYsQ0FBQztBQWdCM0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7R0FFRztBQUNILE1BQXNCLGFBQWE7O0FBQW5DLHNDQVFDO0FBTmdCLGtCQUFJLEdBQUcsOEJBQThCLENBQUM7QUFDdEMsaUJBQUcsR0FBRyw0QkFBNEIsQ0FBQztBQUNuQyxtQkFBSyxHQUFHLDhCQUE4QixDQUFDO0FBQ3ZDLGlCQUFHLEdBQUcsc0NBQXNDLENBQUM7QUFDN0MsbUJBQUssR0FBRywrQkFBK0IsQ0FBQztBQUN4QyxvQkFBTSxHQUFHLG9DQUFvQyxDQUFDIiwiZmlsZSI6Im1pbWNzcy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvbWltY3NzVHlwZXMuanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBDb2xvclR5cGVzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCAqIGFzIENvbG9yRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9Db2xvckZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciB3aXRoXHJcbiAqIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGIgQmx1ZSBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLnJnYlRvU3RyaW5nKCByLCBnLCBiLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIEh1ZSBjb21wb25lbnQgaXMgdHJlYXRlZCBhcyB0aGUgQ1NTIGA8YW5nbGU+YCB0eXBlLiBOdW1iZXJzIGFyZSBjb25zaWRlcmVkIGRlZ3JlZXMuXHJcbiAqIFxyXG4gKiBUaGUgU2F0dXJhdGlvbiBhbmQgTGlnaHRuZXNzIGNvbXBvbmVudHMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZXM6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICpcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhPzogbnVtYmVyKTogQ29sb3JUeXBlcy5JQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5oc2xUb1N0cmluZyggaCwgcywgbCwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoIGM6IG51bWJlciB8IGtleW9mIENvbG9yVHlwZXMuSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIGMsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RXh0ZW5kZWQsIENzc1Bvc2l0aW9uLCBDc3NBbmdsZSwgQ3NzTGVuZ3RofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcbiAgICBHcmFkaWVudFN0b3BPckhpbnQsIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIExpbmVhckdyYWRBbmdsZSxcclxuICAgIENyb3NzRmFkZVBhcmFtLCBJSW1hZ2VQcm94eSwgUmFkaWFsR3JhZGllbnRTaGFwZSwgUmFkaWFsR3JhZGllbnRTaXplLCBcclxuICAgIElHcmFkaWVudCwgSUxpbmVhckdyYWRpZW50LCBJUmFkaWFsR3JhZGllbnQsIElDb25pY0dyYWRpZW50XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9JbWFnZVR5cGVzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHt2YWwyc3RyLCBJTnVtYmVyQmFzZU1hdGhDbGFzcywgQ3NzQW5nbGVNYXRoLCBwb3Myc3RyLCBDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHsgRXh0ZW50S2V5d29yZCB9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyYWRpZW50IGNsYXNzIGltcGxlbWVudHMgdGhlIElHcmFkaWVudCBpbnRlcmZhY2UgdXNpbmcgcHJvcGVydHkgZ2V0IGFjY2Vzc29yLCB3aGNpaCBhbGxvd3NcclxuICogY3JlYXRlaW5nIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBhcHByb3ByaWVudCBncmFkaWVudCBpbnRlcmZhY2UuIFdlIG5lZWQgbmV3IGluc3RhbmNlcywgYmVjYXVzZVxyXG4gKiB0aGUgZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGVzZSBjYWxsYWJsZSBpbnRlcmZhY2VzIGtlZXAgb3B0aW9uYWwgcGFyYW1ldGVycyBhcyBwcm9wZXJ0aWVzIG9mXHJcbiAqIHRoZSBmdWNudGlvbiBvYmplY3RzIHRoZW1zZWx2ZXMuXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudCBpbXBsZW1lbnRzIElHcmFkaWVudFxyXG57XHJcbiAgICBwdWJsaWMgZ2V0IGxpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcImxpbmVhci1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdMaW5lYXIoKTogSUxpbmVhckdyYWRpZW50IHsgcmV0dXJuIGxpbmVhckdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJhZGlhbC1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdSYWRpYWwoKTogSVJhZGlhbEdyYWRpZW50IHsgcmV0dXJuIHJhZGlhbEdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcImNvbmljLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0NvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1jb25pYy1ncmFkaWVudFwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JhZGllbnQgdmFyaWFibGUgcHJvdmlkZXMgYWNjZXNzIHRvIGZ1bmN0aW9ucyBpbXBsZW1lbnRpbmcgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGxldCBncmFkaWVudDogSUdyYWRpZW50ID0gbmV3IEdyYWRpZW50KCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlKCAuLi5hcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogSUltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJTGluZWFyR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGxpbmVyLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWxpbmVyLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gbGluZWFyR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJTGluZWFyR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSk7XHJcblxyXG5cdGYudG8gPSAoYW5nbGU6IExpbmVhckdyYWRBbmdsZSkgPT4ge1xyXG4gICAgICAgIGYuYW5nbGVQYXJhbSA9IGFuZ2xlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG4gICAgXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSVJhZGlhbEdyYWRpZW50IGludGVyZmFjZSBmb3IgZWl0aGVyIGByYWRpYWwtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJUmFkaWFsR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuc2hhcGVQYXJhbSwgZi5zaXplUGFyYW0sIGYucG9zUGFyYW0pO1xyXG5cclxuICAgIGYuY2lyY2xlID0gKHNpemVPckV4dGVudD86IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiY2lyY2xlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZWxsaXBzZSA9IChzaXplT3JFeHRlbnQ/OiBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiZWxsaXBzZVwiO1xyXG4gICAgICAgIGYuc2l6ZVBhcmFtID0gc2l6ZU9yRXh0ZW50O1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRmLmV4dGVudCA9IChleHRlbnQ6IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBleHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zOyByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSUNvbmljR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGNvbmljLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gY29uaWNHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElDb25pY0dyYWRpZW50XHJcbntcclxuICAgIGxldCBmOiBhbnkgPSAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5ID0+XHJcbiAgICAgICAgKCkgPT4gY29uaWNHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSwgZi5wb3NQYXJhbSk7XHJcblxyXG5cdGYuZnJvbSA9IChhbmdsZTogTGluZWFyR3JhZEFuZ2xlKSA9PiB7XHJcbiAgICAgICAgZi5hbmdsZVBhcmFtID0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBhbmdsZT86IExpbmVhckdyYWRBbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKGFuZ2xlKVxyXG4gICAge1xyXG4gICAgICAgIGFuZ2xlU3RyaW5nID0gdmFsMnN0ciggYW5nbGUsIHtcclxuICAgICAgICAgICAgZnJvbU51bWJlcjogQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLFxyXG4gICAgICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IC9cXGQrLiovLnRlc3QodikgPyB2IDogXCJ0byBcIiArIHZcclxuICAgICAgICB9KSArIFwiLFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuYW1lfSgke2FuZ2xlU3RyaW5nfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NQZXJjZW50TWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgc2hhcGU6IFJhZGlhbEdyYWRpZW50U2hhcGUsIHNpemVPckV4dGVudDogUmFkaWFsR3JhZGllbnRTaXplIHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4sXHJcbiAgICBwb3M6IENzc1Bvc2l0aW9uKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzaGFwZVN0cmluZyA9IHNoYXBlID8gc2hhcGUgOiBcIlwiO1xyXG4gICAgbGV0IHNpemVPckV4dGVudFN0cmluZyA9IHNpemVPckV4dGVudCA/IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBzaXplT3JFeHRlbnQsIFwiIFwiKSA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBzaGFwZSB8fCBzaXplT3JFeHRlbnRTdHJpbmcgfHwgcG9zID8gYCR7c2hhcGVTdHJpbmd9ICR7c2l6ZU9yRXh0ZW50U3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBwb3M/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFuZ2xlU3RyaW5nID0gYW5nbGUgPyBgZnJvbSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSl9YCA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBhbmdsZSB8fCBwb3MgPyBgJHthbmdsZVN0cmluZ30gJHtwb3NTdHJpbmd9LGAgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NBbmdsZU1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBwYXJhbXNTdHJpbmcgPSB2YWwyc3RyKCBhcmdzLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGNyb3NzRmFkZVBhcmFtVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbC5tYXAoIHYgPT4gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmcoIHYsIG1hdGhDbGFzcykpLmpvaW4oXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50U3RvcE9ySGludCxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHYubGVuZ3RoID09PSAwID8gXCJcIiA6IHYubGVuZ3RoID09PSAxID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZbMF0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2IGFzIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIG1hdGhDbGFzcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2Vjb25kU3RvcCA9IHZhbC5sZW5ndGggPiAyID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsyXSkgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke2NvbG9yVG9TdHJpbmcodmFsWzBdKX0gJHttYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzFdKX0gJHtzZWNvbmRTdG9wfWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbDJzdHIodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgQ29tYmluZWRTdHlsZXNldCwgSVN0eWxlUnVsZSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgQW5pbWF0aW9uRnJhbWUsIElBbmltYXRpb25SdWxlLCBJVmFyUnVsZSxcclxuICAgIElDb3VudGVyUnVsZSwgSUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZSwgSUltcG9ydFJ1bGUsIElGb250RmFjZVJ1bGUsIElOYW1lc3BhY2VSdWxlLFxyXG4gICAgSVBhZ2VSdWxlLCBTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzcywgSVN1cHBvcnRzUnVsZSwgSU1lZGlhUnVsZSwgSUNsYXNzTmFtZVJ1bGVcclxufSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7cHJvY2Vzc0luc3RhbmNlT3JDbGFzcywgc19lbmFibGVTaG9ydE5hbWVzLCBzZXJpYWxpemVJbnN0YW5jZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge0Nzc1NlbGVjdG9yLCBQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7SUZvbnRGYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFJ1bGUsIENsYXNzUnVsZSwgSURSdWxlLCBTZWxlY3RvclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9TdHlsZVJ1bGVzXCJcclxuaW1wb3J0IHtBbmltYXRpb25SdWxlfSBmcm9tIFwiLi4vcnVsZXMvQW5pbWF0aW9uUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIlxyXG5pbXBvcnQge0NvdW50ZXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvQ291bnRlclJ1bGVzXCI7XHJcbmltcG9ydCB7R3JpZExpbmVSdWxlLCBHcmlkQXJlYVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9HcmlkUnVsZXNcIjtcclxuaW1wb3J0IHtGb250RmFjZVJ1bGUsIEltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGUsIFBhZ2VSdWxlLCBDbGFzc05hbWVSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGUsIE1lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyb3VwUnVsZXNcIlxyXG5pbXBvcnQge3ZhbDJzdHJ9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7SVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFic3RyYWN0IHJ1bGUsIHdoaWNoIGRlZmluZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBiZSBleHRlbmRlZCBieSBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy4gQWJzdHJhY3QgcnVsZXMgZG9uJ3QgaGF2ZSBzZWxlY3RvcnMgYW5kIGFyZSBub3QgaW5zZXJ0ZWQgaW50byBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFic3RyYWN0KCBzdHlsZTogQ29tYmluZWRTdHlsZXNldCk6IElTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG4gICAgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlKTogSUNsYXNzUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY2xhc3MgbmFtZSBydWxlLCB3aGljaCBjb21iaW5lcyBvbmUgb3IgbW9yZSBvdGhlciBjbGFzcyBuYW1lcy4gVGhpcyBjcmVhdGVzIGFcclxuICogXCJzeW5vbnltXCIgdGhhdCBpcyBlYXNpZXIgdG8gYXBwbHkgdG8gYW4gZWxlbWVudCdzIGNsYXNzIGF0dHJpYnV0ZSB0aGFuIGFuIGFycmF5IG9mIHR3byBvclxyXG4gKiBtb3JlIGNsYXMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNsYXNzbmFtZSggLi4uY2xhc3NlczogKElDbGFzc1J1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IHN0cmluZylbXSk6IElDbGFzc05hbWVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzTmFtZVJ1bGUoIGNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgSUQgcnVsZS4gVGhlIElEIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2ZcclxuICogdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdFxyXG4gKiBuYW1lIG9yIGFub3RoZXIgSUQgcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG8gXCJkZWNsYXJlXCJcclxuICogdGhlIElELiBTdWNoIElEIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaWQoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUlEUnVsZSk6IElJRFJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHNlbGVjdG9yIHJ1bGUuIFNlbGVjdG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcgb3IgdmlhIHRoZSBzZWxlY3RvciBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3R5bGUoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU6IENvbWJpbmVkU3R5bGVzZXQpOiBJU3R5bGVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKTogSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQW5pbWF0aW9uUnVsZSggZnJhbWVzLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY3VzdG9tIHZhcmlhYmxlIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBUaGUgdmFyaWFibGUgbmFtZSB3aWxsXHJcbiAqIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlXHJcbiAqIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjdXN0b20gdmFyaWFibGUgcnVsZS4gVGhlXHJcbiAqIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSB2YWx1ZSBqdXN0IHRvIFwiZGVjbGFyZVwiIHRoZSB2YXJpYWJsZS4gU3VjaFxyXG4gKiB2YXJpYWJsZSBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdGVtcGxhdGU6IEssIHByb3BWYWw/OiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRcdFx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz4pOiBJVmFyUnVsZTxLPlxyXG57XHJcblx0cmV0dXJuIG5ldyBWYXJSdWxlKCB0ZW1wbGF0ZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGNvdW50ZXIgb2JqZWN0LiBUaGUgY291bnRlciBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGNvdW50ZXIgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY291bnRlciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKTogSUNvdW50ZXJSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBsaW5lIG9iamVjdC4gVGhlIGxpbmUgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGxpbmUgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGxpbmUoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUsXHJcbiAgICBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbik6IElHcmlkTGluZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgR3JpZExpbmVSdWxlKCBuYW1lT3ZlcnJpZGUsIGlzU3RhcnRFbmRPck5vbmUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBhcmVhIG9iamVjdC4gVGhlIGFyZWEgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGFyZWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGFyZWEoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGUpOiBJR3JpZEFyZWFSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEdyaWRBcmVhUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSk6IElJbXBvcnRSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHVybCwgbWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBmb250LWZhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZm9udGZhY2UoIGZvbnRmYWNlOiBJRm9udEZhY2UpOiBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggZm9udGZhY2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG5hbWVzcGFjZSggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIG5hbWVzcGFjZSwgcHJlZml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcGFnZSggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpOiBJUGFnZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgUGFnZVJ1bGUoIHBzZXVkb0NsYXNzLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzdXBwb3J0czxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggcXVlcnk6IFN1cHBvcnRzUXVlcnksXHJcbiAgICBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgaW5zdE9yQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbWVkaWE8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LFxyXG4gICAgaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IE1lZGlhUnVsZSggcXVlcnksIGluc3RPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBjcmVhdGVzIHVuaXF1ZSBuYW1lcyBmb3IgYWxsIG5hbWVkXHJcbiAqIGVudGl0aWVzLiBGb3IgYSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9ubHkgYSBzaW5nbGUgaW5zdGFuY2UgaXMgY3JlYXRlZCwgbm8gbWF0dGVyIGhvd1xyXG4gKiBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZC4gSG93ZXZlciwgaWYgYW4gaW5zdGFuY2UsIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gcHJvY2Vzc2VkLFxyXG4gKiBpcyBwYXNzZWQsIHRoZW4gYSBuZXcgc2V0IG9mIHVuaXF1ZSBuYW1lcyB3aWxsIGJlIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR1c2U8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdHJldHVybiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzcykgYXMgVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW1iZWRzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGludG8gYW5vdGhlciBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC4gV2hlbiBhY3RpdmF0ZWQsXHJcbiAqIHRoZSBlbWJlZGRlZCBvYmplY3QgZG9lc24ndCBjcmVhdGUgaXRzIG93biBgPHN0eWxlPmAgZWxlbWVudCBidXQgdXNlcyB0aGF0IG9mIGl0cyBvd25lci4gVGhpc1xyXG4gKiBhbGxvd3MgY3JlYXRpbmcgbWFueSBzbWFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgaW5zdGVhZCBvZiBvbmUgaHVnZSBvbmUgd2l0aG91dCBpbmN1cnJpbmdcclxuICogdGhlIG92ZXJoZWFkIG9mIG1hbnkgYDxzdHlsZT5gIGVsZW1lbnRzLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IGFzIG9wcG9zZWQgdG8gdGhlICR1c2UgZnVuY3Rpb24sIHRoZSAkZW1iZWQgZnVuY3Rpb24gYWx3YXlzIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2ZcclxuICogdGhlIGdpdmVuIGNsYXNzIGFuZCBkb2Vzbid0IGFzc29jaWF0ZSB0aGUgY2xhc3Mgd2l0aCB0aGUgY3JlYXRlZCBpbnN0YW5jZS4gVGhhdCBtZWFucyB0aGF0IGlmXHJcbiAqIGEgY2xhc3MgaXMgZW1iZWRkZWQgaW50byBtb3JlIHRoYW4gb25lIFwib3duZXJcIiwgdHdvIHNlcGFyYXRlIGluc3RhbmNlcyBvZiBlYWNoIENTUyBydWxlIHdpbGwgYmVcclxuICogY3JlYXRlZCB3aXRoIGRpZmZlcmVudCB1bmlxdWUgbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGVtYmVkPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHQvLyByZXR1cm4gZGVmaW5pdGlvbiBpbnN0YW5jZSB3aXRob3V0IHByb2Nlc3NpbmcgaXQuIFRoaXMgaXMgdGhlIGluZGljYXRpb24gdGhhdCB0aGUgZGVmaW50aW9uXHJcblx0Ly8gd2lsbCBiZSBlbWJlZGRlZCBpbnRvIGFub3RoZXIgZGVmaW5pdGlvbi5cclxuXHRyZXR1cm4gaW5zdE9yQ2xhc3MgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24gPyBpbnN0T3JDbGFzcyA6IG5ldyBpbnN0T3JDbGFzcygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRyZXR1cm4gc19lbmFibGVTaG9ydE5hbWVzKCBlbmFibGUsIHByZWZpeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyB0aGUgbmFtZXMgb2YgdGhlIGdpdmVuIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gYVxyXG4gKiBgY2xhc3NgIHByb3BlcnR5IG9mIGFuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGNsYXNzZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKCAuLi5jbGFzc2VzOiAoSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgc3RyaW5nKVtdKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdmFsMnN0ciggY2xhc3Nlcywge1xyXG5cdFx0YXJySXRlbUZ1bmM6IHYgPT4gdiBpbnN0YW5jZW9mIENsYXNzUnVsZSA/IHYubmFtZSA6IHZhbDJzdHIodilcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSdWxlIHZpcnR1YWxpemF0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzU2VyaWFsaXplciBpbnRlcmZhY2UgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIG9iamVjdHNcclxuICogYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NTZXJpYWxpemVyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBhZGQoIGluc3RPckNsYXNzOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBjb25jYXRlbmF0ZWQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFsbCBDU1MgcnVsZXMgYWRkZWQgdG8gdGhlIGNvbnRleHQuXHJcbiAgICAgKi9cclxuICAgIHNlcmlhbGl6ZSgpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgSUNzc1NlcmlhbGl6ZXIgb2JqZWN0IHRoYXQgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXNcclxuICogYW5kIGluc3RhbmNlcyBhbmQgc2VyaWFsaXppbmcgdGhlbSB0byBhIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNzc1NlcmlhbGl6ZXIoKTogSUNzc1NlcmlhbGl6ZXJcclxue1xyXG4gICAgcmV0dXJuIG5ldyBDc3NTZXJpYWxpemVyKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNlcmlhbGl6ZXMgb25lIG9yIG1vcmUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBpbnN0YW5jZXMgYW5kIHJldHVybnMgdGhlaXIgQ1NTIHN0cmluZ1xyXG4gKiByZXByZXNlbnRhdGlvbi4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW4gdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlXHJcbiAqIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZVRvQ1NTKCBhcmcxOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcbiAgICAuLi5hcmdzOiAoU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzKVtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzZXJpYWxpemVyID0gbmV3IENzc1NlcmlhbGl6ZXIoKTtcclxuICAgIHNlcmlhbGl6ZXIuYWRkKCBhcmcxKTtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgYXJncy5mb3JFYWNoKCBpbnN0T3JDbGFzcyA9PiBzZXJpYWxpemVyLmFkZCggaW5zdE9yQ2xhc3MpKTtcclxuXHJcbiAgICByZXR1cm4gc2VyaWFsaXplci5zZXJpYWxpemUoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlU2VyaWFsaXplciBjbGFzcyBhbGxvd3MgYWRkaW5nIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgb2JqZWN0c1xyXG4gKiBhbmQgc2VyaWFsaXppbmcgdGhlbSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuXHJcbiAqIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZSBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmNsYXNzIENzc1NlcmlhbGl6ZXIgaW1wbGVtZW50cyBJQ3NzU2VyaWFsaXplclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZCggaW5zdE9yQ2xhc3M6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzcyk7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSB8fCB0aGlzLmluc3RhbmNlcy5oYXMoaW5zdGFuY2UpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmFkZCggaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBjb25jYXRlbmF0ZWQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFsbCBDU1MgcnVsZXMgYWRkZWQgdG8gdGhlIGNvbnRleHQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN0eCA9IG5ldyBSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKCBpbnN0YW5jZSA9PiBjdHguYWRkU3R5bGVEZWZpbml0aW9uKCBpbnN0YW5jZSkpO1xyXG4gICAgICAgIHJldHVybiBjdHgudG9wTGV2ZWxCdWYgKyBjdHgubm9uVG9wTGV2ZWxCdWY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IG9mIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2VzLiBUaGlzIGlzIG5lZWRlZCB0byBub3QgYWRkIHN0eWxlIGRlZmluaXRpb25zIG1vcmUgdGhhbiBvbmNlXHJcbiAgICBpbnN0YW5jZXMgPSBuZXcgU2V0PFN0eWxlRGVmaW5pdGlvbj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlU2VyaWFsaXplciBjbGFzcyBhbGxvd3MgYWRkaW5nIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgb2JqZWN0c1xyXG4gKiBhbmQgc2VyaWFsaXppbmcgdGhlbSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuXHJcbiAqIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZSBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmNsYXNzIFJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCBpbXBsZW1lbnRzIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHRcclxue1xyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIHB1YmxpYyBhZGRSdWxlVGV4dCggczogc3RyaW5nLCBpc1RvcExldmVsUnVsZT86IGJvb2xlYW4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGlzVG9wTGV2ZWxSdWxlKVxyXG4gICAgICAgICAgICB0aGlzLnRvcExldmVsQnVmICs9IHMgKyBcIlxcblwiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5ub25Ub3BMZXZlbEJ1ZiArPSBzICsgXCJcXG5cIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGRzIHJ1bGUgdGV4dFxyXG4gICAgcHVibGljIGFkZFN0eWxlRGVmaW5pdGlvbiggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyggaW5zdGFuY2UpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuYWRkKCBpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZUluc3RhbmNlKCBpbnN0YW5jZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0cmluZyBidWZmZXIgdGhhdCBhY2N1bXVsYXRlcyB0b3AtbGV2ZWwgcnVsZSB0ZXh0cy5cclxuICAgIHB1YmxpYyB0b3BMZXZlbEJ1ZiA9IFwiXCI7XHJcblxyXG4gICAgLy8gU3RyaW5nIGJ1ZmZlciB0aGF0IGFjY3VtdWxhdGVzIG5vbi10b3AtbGV2ZWwgcnVsZSB0ZXh0cy5cclxuICAgIHB1YmxpYyBub25Ub3BMZXZlbEJ1ZiA9IFwiXCI7XHJcblxyXG4gICAgLy8gU2V0IG9mIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2VzIHRoYXQgd2VyZSBhbHJlYWR5IHNlcmlhbGl6ZWQgaW4gdGhpcyBjb250ZXh0LlxyXG4gICAgcHJpdmF0ZSBpbnN0YW5jZXMgPSBuZXcgU2V0PFN0eWxlRGVmaW5pdGlvbj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSdWxlIHZpcnR1YWxpemF0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIGEgcnVsZSBpZiBpdCBpcyBkZWZpbmVkIGFuZCB1c2VkIGluIHRoZSBzYW1lIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gY2xhc3MgYnV0IHRoZW4gaXMgb3ZlcnJpZGRlbiBpbiBhIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIHByb2JsZW1cclxuICogdGhpcyBzb2x2ZXMgaXMgdGhpczogd2hlbiBhIHJ1bGUgaXMgZGVmaW5lZCBpbiBhIGJhc2UgY2xhc3MgYW5kIHRoZW4gb3ZlcnJpZGRlbiBpbiBhIGRlcml2ZWRcclxuICogY2xhc3MsIHdoZW4gYW4gaW5zdGFuY2Ugb2YgdGhlIGRlcml2ZWQgY2xhc3MgaXMgY3JlYXRlZCwgdGhlIHJ1bGVzIHRoYXQgYXJlIGNyZWF0ZWQgaW4gdGhlXHJcbiAqIGJhc2UgYW5kIGRlcml2ZWQgY2xhc3NlcyBzZWUgZGlmZmVyZW50IHZhbHVlcyBvZiB0aGUgcnVsZS4gU2luY2Ugb3VyIHJ1bGVzIGFyZSBkZWZpbmVkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIGNvbnN0cnVjdG9yLCB0aGUgYmFzZSBjbGFzcyBjb25zdHJ1Y3RvcidzIGNvZGUgb25seSBzZWVzIHRoZSB2YWx1ZSBhc3NpZ25lZCBpbiB0aGF0XHJcbiAqIGNvZGUuIElmIGFub3RoZXIgcnVsZSBpbiB0aGUgYmFzZSBjbGFzcyB1c2VzIHRoaXMgZmlyc3QgcnVsZSwgdGhpcyB2YWx1ZSBpcyByZW1lbWJlcmVkLlxyXG4gKiBcclxuICogVGhlIGBAdmlydHVhbGAgZGVjb3JhdG9yIGNyZWF0ZXMgYSBQcm94eSBvYmplY3QgZm9yIHRoZSBydWxlIHdpdGggdGhlIGhhbmRsZXIgdGhhdCBrZWVwcyB0aGVcclxuICogbW9zdCByZWNlbnQgdmFsdWUgc2V0LiBUaHVzIHdoZW4gYSBydWxlIGluIHRoZSBiYXNlIGNsYXNzJ3MgY29uc3RydWN0b3IgdXNlcyBhIHZpcnR1YWxpemVkXHJcbiAqIHJ1bGUsIHRoZSBmaXJzdCBydWxlIHdpbGwgc2VlIHRoZSBvdmVycmlkZGVuIHZhbHVlIG9mIHRoZSBydWxlIHdoZW4gYWNjZXNzZWQgaW4gdGhlXHJcbiAqIHBvc3QtY29uc3RydWN0b3IgY29kZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aXJ0dWFsKCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKVxyXG57XHJcbiAgICAvLyBzeW1ib2wgdG8ga2VlcCB0aGUgcHJveHkgaGFuZGxlciB2YWx1ZVxyXG4gICAgbGV0IHN5bSA9IFN5bWJvbChuYW1lICsgXCJfcHJveHlfaGFuZGxlclwiKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgZ2V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHRoZSBoYW5kbGVyIGFuZCBjcmVhdGUgaXQgaWYgd2UgZG9uJ3QuIEluIHRoaXNcclxuICAgICAgICAgICAgLy8gY2FzZSB3ZSBhbHNvIGNyZWF0ZSBhIHByb3h5IGZvciBhbiBlbXB0eSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzW3N5bV0gYXMgVmlydEhhbmRsZXI7XHJcbiAgICAgICAgICAgIGlmICghaGFuZGxlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gaGFuZGxlciA9IG5ldyBWaXJ0SGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5wcm94eSA9IG5ldyBQcm94eSgge30sIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlci5wcm94eTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQodilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgb2JqZWN0IHR5cGUgd2UgbWF5IGhhdmUgYSBkaWZmZXJlbnQgb2JqZWN0IHRvIHBhc3MgdG8gdGhlIHByb3h5O1xyXG4gICAgICAgICAgICAvLyBhbHNvIHdlIG5lZWQgdG8ga25vdyB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYSBzcGVjaWFsIChpbnRlcm5hbCB0byBKYXZhU2NyaXB0KSBvbmVcclxuICAgICAgICAgICAgLy8gYW5kIHRoZSBoYW5kbGVyIHdpbGwgaGF2ZSB0byB0cmVhdCBpdCBzcGVjaWFsbHlcclxuICAgICAgICAgICAgbGV0IFtuZXdUYXJnZXQsIGlzU3BlY2lhbF0gPSBnZXRQcm94aWFibGVPYmplY3Qodik7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSB0aGUgaGFuZGxlciBhbmQgY3JlYXRlIGl0IGlmIHdlIGRvbid0XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gdGhpc1tzeW1dIGFzIFZpcnRIYW5kbGVyO1xyXG4gICAgICAgICAgICBpZiAoIWhhbmRsZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IGhhbmRsZXIgPSBuZXcgVmlydEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIucHJveHkgPSBuZXdUYXJnZXQgPT0gbnVsbCA/IHt9IDogbmV3IFByb3h5KCBuZXdUYXJnZXQsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIG5ldyB2YXVsZXMgdG8gdGhlIGhhbmRsZXIgc28gdGhhdCBpdCB3aWxsIHVzZSBpdCBmcm9tIG5vdyBvblxyXG4gICAgICAgICAgICBoYW5kbGVyLnRhcmdldCA9IG5ld1RhcmdldDtcclxuICAgICAgICAgICAgaGFuZGxlci5pc1NwZWNpYWwgPSBpc1NwZWNpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZvciB0aGUgZ2l2ZW4gdmFsdWUgcmV0dXJucyBhIHR3by1lbGVtZW50IHR1cGxlOlxyXG4gKiAtIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gYSBwcm94eS4gRm9yIG9iamVjdHMsIGl0IGlzIHRoZSBpbnB1dFxyXG4gKiAgIHZhbHVlLiBGb3IgcHJpbWl0aXZlIHR5cGVzIGl0IGlzIHRoZSBib3hlZCBvYmplY3QgKGUuZy4gTnVtYmVyIGZvciBudW1iZXJzKS4gRm9yIG51bGwgYW5kXHJcbiAqICAgdW5kZWZpbmVkIGl0IGlzIG51bGwgYW5kIHVuZGVmaW5lZCByZXNwZWN0aXZlbHlcclxuICogLSB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgdGhlIFwic3BlY2lhbFwiIGZsYWcsIHdoaWNoIGlzIHRydWUgaWYgdGhlIHByb3h5IGhhbmRsZXIgd2lsbCBoYXZlIHRvIGhhdmVcclxuICogICBhIHNwZWNpYWwgdHJlYXRtZW50IHRoZSBvYmplY3RzJyBtZXRob2RzOyB0aGF0IGlzLCBpdCB3aWxsIGhhdmUgdG8gYmluZCB0aGVtIHRvIHRoZSB0YXJnZXRcclxuICogICBvYmplY3QgYmVmb3JlIHJldHVybmluZyB0aGVtIGZyb20gdGhlIGdldCBtZXRob2QuIFRoaXMgaXMgdHJ1ZSBmb3IgXCJpbnRlcm5hbFwiIEphdmFTY3JpcHRcclxuICogICBjbGFzc2VzIGxpa2UgYm94ZWQgcHJpbWl0aXZlIHR5cGVzLCBNYXAsIFNldCwgUHJvbWlzZSBhbmQgc29tZSBvdGhlcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQcm94aWFibGVPYmplY3QoIHY6IGFueSk6IFthbnksIGJvb2xlYW5dXHJcbntcclxuICAgIGlmICh2ID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFt2LCBmYWxzZV07XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gW25ldyBTdHJpbmcodiksIHRydWVdO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIFtuZXcgTnVtYmVyKHYpLCB0cnVlXTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICByZXR1cm4gW25ldyBCb29sZWFuKHYpLCB0cnVlXTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcInN5bWJvbFwiKVxyXG4gICAgICAgIHJldHVybiBbbmV3IE9iamVjdCh2KSwgdHJ1ZV07XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiAodiBpbnN0YW5jZW9mIE1hcCB8fCB2IGluc3RhbmNlb2YgU2V0KSlcclxuICAgICAgICByZXR1cm4gW3YsIHRydWVdO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBbdiwgZmFsc2VdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciB0aGUgcHJveHkgY3JlYXRlZCBieSB0aGUgYEB2aXJ0dWFsYCBkZWNvcmF0b3IuIEl0IGtlZXBzIHRoZSBjdXJyZW50IHZhbHVlIG9mIGFcclxuICogcnVsZSBzbyB0aGF0IHRoZSBtb3N0IHJlY2VudCB2YWx1ZSBpcyB1c2VkIHdoZW5ldmVyIHRoZSBwcm94eSBpcyBhY2Nlc3NlZC5cclxuICovXHJcbmNsYXNzIFZpcnRIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgcHVibGljIHByb3h5OiBhbnk7XHJcbiAgICBwdWJsaWMgdGFyZ2V0OiBhbnk7XHJcbiAgICBwdWJsaWMgaXNTcGVjaWFsOiBib29sZWFuO1xyXG5cclxuICAgIC8vIGludGVyZXN0aW5nIHRoaW5ncyBoYXBwZW4gaW4gdGhlIGdldCBtZXRob2RcclxuICAgIGdldCggdDogYW55LCBwOiBQcm9wZXJ0eUtleSwgcjogYW55KTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgLy8gaWYgb3VyIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkIGFuZCB0aGUgcmVxdWVzdGVkIHByb3BlcnR5IGlzIGEgd2VsbC1rbm93biBzeW1ib2xcclxuICAgICAgICAvLyB0b1ByaW1pdGl2ZSB3ZSByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyIG51bGwgb3IgdW5kZWZpbmVkLiBUaGlzIHdpbGwgaGVscFxyXG4gICAgICAgIC8vIGlmIG91ciBwcm94eSBlaXRoZXIgcGFydGljaXBhdGUgaW4gYW4gYXJpdGhtZXRpYyBleHByZXNzaW9uIG9yIG9yIGlzIGNvbWJpbmVkIHdpdGggYVxyXG4gICAgICAgIC8vIHN0cmluZy5cclxuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT0gbnVsbCAmJiBwID09PSBTeW1ib2wudG9QcmltaXRpdmUpXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVxdWVzdCBwcm9wZXJ0eTsgaWYgdGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBhbiBleGNlcHRpb25cclxuICAgICAgICAvLyB3aWxsIGJlIHRocm93biAtIHdoaWNoIGlzIGV4cGVjdGVkLlxyXG4gICAgICAgIGxldCBwdiA9IFJlZmxlY3QuZ2V0KCB0aGlzLnRhcmdldCwgcCwgcik7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHkgaXMgYSBmdW5jdGlvbiBvZiBhIGJveGVkIHByaW1pdGl2ZSwgYmluZCB0aGUgb3JpZ2luYWwgbWV0aG9kXHJcbiAgICAgICAgLy8gdG8gdGhlIHRhcmdldCBvYmplY3RcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1NwZWNpYWwgJiYgdHlwZW9mIHB2ID09PSBcImZ1bmN0aW9uXCIgPyBwdi5iaW5kKCB0aGlzLnRhcmdldCkgOiBwdjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGUgcmVzdCBvZiB0aGUgbWV0aG9kcyBtb3N0bHkgZGVsZWdhdGUgdGhlIGNhbGxzIHRvIHRoZSBsYXRlc3QgdGFyZ2V0IGluc3RlYWQgb2YgdGhlXHJcbiAgICAvLyBvcmlnaW5hbCB0YXJnZXQuIEluIHNvbWUgY2FzZXMsIHdlIGNoZWNrIHdoZXRoZXIgdGhlIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZCBzbyB0aGF0XHJcbiAgICAvLyB3ZSBkb24ndHRocm93IGV4Y2VwdGlvbnMgd2hlciB3ZSBjYW4gYXZvaWQgaXQuXHJcblxyXG4gICAgZ2V0UHJvdG90eXBlT2YoIHQ6IGFueSk6IG9iamVjdCB8IG51bGxcclxuICAgICAgICB7IHJldHVybiB0aGlzLnRhcmdldCA9PSBudWxsID8gbnVsbCA6IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRoaXMudGFyZ2V0KTsgfVxyXG4gICAgc2V0UHJvdG90eXBlT2YodDogYW55LCB2OiBhbnkpOiBib29sZWFuXHJcbiAgICAgICAgeyByZXR1cm4gUmVmbGVjdC5zZXRQcm90b3R5cGVPZiggdGhpcy50YXJnZXQsIHYpOyB9XHJcbiAgICBpc0V4dGVuc2libGUodDogYW55KTogYm9vbGVhblxyXG4gICAgICAgIHsgcmV0dXJuIHRoaXMudGFyZ2V0ID09IG51bGwgPyBmYWxzZSA6IFJlZmxlY3QuaXNFeHRlbnNpYmxlKCB0aGlzLnRhcmdldCk7IH1cclxuICAgIHByZXZlbnRFeHRlbnNpb25zKHQ6IGFueSk6IGJvb2xlYW5cclxuICAgICAgICB7IHJldHVybiB0aGlzLnRhcmdldCA9PSBudWxsID8gZmFsc2UgOiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKCB0aGlzLnRhcmdldCk7IH1cclxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0OiBhbnksIHA6IFByb3BlcnR5S2V5KTogUHJvcGVydHlEZXNjcmlwdG9yIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgeyByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMudGFyZ2V0LCBwKTsgfVxyXG4gICAgaGFzKHQ6IGFueSwgcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICAgICAgeyByZXR1cm4gdGhpcy50YXJnZXQgPT0gbnVsbCA/IGZhbHNlIDogUmVmbGVjdC5oYXMoIHRoaXMudGFyZ2V0LCBwKTsgfVxyXG4gICAgc2V0KCB0OiBhbnksIHA6IFByb3BlcnR5S2V5LCB2OiBhbnksIHI6IGFueSk6IGJvb2xlYW5cclxuICAgICAgICB7IHJldHVybiBSZWZsZWN0LnNldCggdGhpcy50YXJnZXQsIHAsIHYsIHIpOyB9XHJcbiAgICBkZWxldGVQcm9wZXJ0eSh0OiBhbnksIHA6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAgICAgIHsgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoIHRoaXMudGFyZ2V0LCBwKTsgfVxyXG4gICAgZGVmaW5lUHJvcGVydHkodDogYW55LCBwOiBQcm9wZXJ0eUtleSwgYXR0cnM6IFByb3BlcnR5RGVzY3JpcHRvcik6IGJvb2xlYW5cclxuICAgICAgICB7IHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLnRhcmdldCwgcCwgYXR0cnMpOyB9XHJcbiAgICBlbnVtZXJhdGUodDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAgICAgIHsgcmV0dXJuIEFycmF5LmZyb20oIFJlZmxlY3QuZW51bWVyYXRlKCB0aGlzLnRhcmdldCkpOyB9XHJcbiAgICBvd25LZXlzKHQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgICAgICB7IHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRoaXMudGFyZ2V0KTsgfVxyXG4gICAgYXBwbHkodDogYW55LCB0aGlzQXJnOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnlcclxuICAgICAgICB7IHJldHVybiB0aGlzLnRhcmdldC5hcHBseSggdGhpcywgYXJncyk7IH1cclxuICAgIGNvbnN0cnVjdCh0OiBhbnksIGFyZ3M6IGFueSwgbmV3VGFyZ2V0PzogYW55KTogb2JqZWN0XHJcbiAgICAgICAgeyByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QoIHRoaXMudGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzcywgSVNjaGVkdWxlcn0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge3Byb2Nlc3NJbnN0YW5jZU9yQ2xhc3N9IGZyb20gXCIuLi9ydWxlcy9SdWxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzX3NjaGVkdWxlQ2FsbCwgc19zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSwgc19nZXREZWZhdWx0U2NoZWR1bGVyVHlwZSxcclxuICAgIElBY3RpdmF0b3IsIHNfcmVnaXN0ZXJTY2hlZHVsZXIsIHNfdW5yZWdpc3RlclNjaGVkdWxlclxyXG59IGZyb20gXCIuLi9ydWxlcy9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWZcclxuICogdGhlIGlucHV0IG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2UgYnV0IGEgY2xhc3MsIHdoaWNoIGlzIG5vdCB5ZXQgYXNzb2NpYXRlZCB3aXRoIGFuIGluc3RhbmNlLFxyXG4gKiB0aGUgaW5zdGFuY2UgaXMgZmlyc3QgY3JlYXRlZCBhbmQgcHJvY2Vzc2VkLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG1haW50YWluc1xyXG4gKiBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkXHJcbiAqIGludG8gRE9NIG9ubHkgdXBvbiBmaXJzdCBhY3RpdmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPixcclxuXHRzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogVCB8IG51bGxcclxue1xyXG5cdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RhbmNlT3JDbGFzcykgYXMgVDtcclxuXHRpZiAoaW5zdGFuY2UpXHJcblx0XHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmFjdGl2YXRlKCBpbnN0YW5jZSksIHNjaGVkdWxlclR5cGUpO1xyXG5cclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlYWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIGJ5IHJlbW92aW5nIGl0cyBydWxlcyBmcm9tIERPTS4gTm90ZSB0aGF0IGVhY2hcclxuICogc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmRlYWN0aXZhdGUoIGluc3RhbmNlKSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyB0byBET00gYWxsIHN0eWxlIGNoYW5nZXMgY2F1c2VkIGJ5IHRoZSBjYWxscyB0byB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zXHJcbiAqIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0IGFjdGl2YXRpb24gb2YgdGhlIGdpdmVuIHNjaGVkdWxpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JjZURPTVVwZGF0ZSggc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuZm9yY2VET01VcGRhdGUoKSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYWxsIHNjaGVkdWxlZCBhY3RpdmF0aW9ucyBjYXVzZWQgYnkgdGhlIGNhbGxzIHRvIHRoZSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnNcclxuICogYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3QgYWN0aXZhdGlvbiBvZiB0aGUgZ2l2ZW4gc2NoZWR1bGluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbERPTVVwZGF0ZSggc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuY2FuY2VsRE9NVXBkYXRlKCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBkZWZhdWx0IHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxlciB0eXBlIHBhcmFtZXRlci4gUmV0dXJucyB0aGUgdHlwZSBvZlxyXG4gKiB0aGUgcHJldmlvdXMgZGVmYXVsdCBzY2hlZHVsZXIgb3IgMCBpZiBhbiBlcnJvciBvY2N1cnMgKGUuZy4gdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIElEIGlzIG5vdFxyXG4gKiByZWdpc3RlcmVkKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZTogbnVtYmVyKTogbnVtYmVyXHJcbntcclxuXHRyZXR1cm4gc19zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIGJ5IGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyB0aGF0IGFyZVxyXG4gKiBjYWxsZWQgd2l0aG91dCBleHBsaWNpdGx5IHByb3ZpZGluZyB2YWx1ZSB0byB0aGUgc2NoZWR1bGVyIHR5cGUgcGFyYW1ldGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzY2hlZHVsZXIgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLCB3aGljaFxyXG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXI6IElTY2hlZHVsZXIpOiBudW1iZXJcclxue1xyXG4gICAgcmV0dXJuIHNfcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFVucmVnaXN0ZXJzIGEgc2NoZWR1bGVyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJTY2hlZHVsZXIoIGlkOiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHJldHVybiBzX3VucmVnaXN0ZXJTY2hlZHVsZXIoIGlkKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgQ3NzTGVuZ3RoLCBDc3NQZXJjZW50LCBDc3NBbmdsZSwgQ3NzTnVtYmVyLCBPbmVPckJveCwgQ3NzUG9pbnR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtTZWxlY3Rvckl0ZW0sIElTZWxlY3RvclByb3h5fSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuXHRTdHlsZXNldCwgRXh0ZW5kZWRTdHlsZXNldCwgU3RyaW5nU3R5bGVzZXQsIEV4dGVudEtleXdvcmQsIElGaWx0ZXJQcm94eSwgSUJhc2ljU2hhcGVQcm94eSxcclxuXHRJVHJhbnNmb3JtUHJveHksIEJvcmRlclJhZGl1c19TdHlsZVR5cGUsIEZpbGxSdWxlX1N0eWxlVHlwZSwgSVBhdGhCdWlsZGVyLCBJUmF5UHJveHksXHJcblx0SUZpdENvbnRlbnRQcm94eSwgSVJlcGVhdFByb3h5LCBJTWluTWF4UHJveHksIEdyaWRUcmFja1NpemUsIEdyaWRUcmFjaywgSVNwYW5Qcm94eSwgR3JpZExpbmVDb3VudE9yTmFtZVxyXG59IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7XHJcblx0c3R5bGVQcm9wVG9TdHJpbmcsIHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LCBib3JkZXJSYWRpdXNUb1N0cmluZywgZm9yQWxsUHJvcHNJblN0eWxzZXQsIGdyaWRUcmFja1RvU3RyaW5nXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aCwgYXJyMnN0ciwgQ3NzQW5nbGVNYXRoLCBDc3NOdW1iZXJNYXRoLCBwb3Myc3RyLFxyXG5cdHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcsIHZhbDJzdHJcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQge3Nfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlfSBmcm9tIFwiLi4vcnVsZXMvU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLiBUaGlzIGZ1bmN0aW9uIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0IGJlXHJcbiAqIGludm9rZWQgd2l0aCB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3IoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBTZWxlY3Rvckl0ZW1bXSk6IElTZWxlY3RvclByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3R5bGVzZXQgbWFuaXB1bGF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIGEgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcE5hbWUgU3R5bGUgcHJvcGVydHkgbmFtZSB0aGF0IGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkXHJcbiAqIHRvIGEgQ1NTIGNvbXBsaWFudCBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BWYWx1ZSBWYWx1ZSB0byBjb252ZXJ0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcFZhbHVlPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0Piggc3R5bGVQcm9wTmFtZTogSyxcclxuXHRzdHlsZVByb3BWYWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHN0eWxlUHJvcFRvU3RyaW5nKCBzdHlsZVByb3BOYW1lLCBzdHlsZVByb3BWYWx1ZSwgdHJ1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdmFsdWVzIG9mIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGZyb20gdGhlIGdpdmVuIFN0eWxlc2V0IG9iamVjdCB0byB0aGUgYHN0eWxlYCBhdHRyaWJ1dGVcclxuICogb2YgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSBIVE1MIGVsZW1lbnQgd2hvc2Ugc3R5bGVzIHdpbGwgYmUgc2V0LlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgU3R5bGVzZXQgb2JqZWN0IHdoaWNoIHByb3ZpZGVzIHZhbHVlcyBmb3Igc3R5bGUgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbGVtZW50U3R5bGUoIGVsbTogSFRNTEVsZW1lbnQsIHN0eWxlc2V0OiBTdHlsZXNldCB8IG51bGwgfCB1bmRlZmluZWQsXHJcblx0c2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG4gICAgc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG0sIHN0eWxlc2V0ID8gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KHN0eWxlc2V0KSA6IG51bGwsIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHJpbmdTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0cmluZ1N0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3RyaW5nU3R5bGVzZXQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG5cdHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCBlbG0sIG51bGwsIHN0eWxlc2V0LCBmYWxzZSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBbW1N0eWxlc2V0XV0gb2JqZWN0IGludG8gYW4gb2JqZWN0LCB3aGVyZSBlYWNoIFN0eWxlc2V0J3MgcHJvcGVydHkgaXNcclxuICogY29udmVydGVkIHRvIGl0cyBzdHJpbmcgdmFsdWUuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIHN0eWxlc2V0OiBTdHlsZXNldCk6IFN0cmluZ1N0eWxlc2V0XHJcbntcclxuXHRsZXQgcmVzOiBTdHJpbmdTdHlsZXNldCA9IHt9O1xyXG5cclxuXHRmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQsXHJcblx0XHQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7IHJlc1tuYW1lXSA9IHZhbHVlIH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyB0d28gU3R5bGVzZXQgb2JqZWN0cyBieSBjb252ZXJ0aW5nIHN0eWxlIHByb3BlcnRpZXMgdG8gc3RyaW5ncyBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuICogdGhhdCBjb250YWlucyBzdHJpbmcgdmFsdWVzIG9mIHByb3BlcnRpZXMgdGhhdCB3ZXJlIG5ldyBvciBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG5ld1xyXG4gKiBzdHlsZXNldCBhbmQgdW5kZWZpbmVkIHZhbHVlcyBmb3IgcHJvcGVydGllcyB0aGF0IGV4aXN0IGluIHRoZSBvbGQgc3R5bGVzZXQgYnV0IGRvbid0IGV4aXN0XHJcbiAqIGluIHRoZSBuZXcgb25lLlxyXG4gKiBAcGFyYW0gb2xkU3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBuZXdTdHlsZXNldCBcclxuICogQHJldHVybnMgU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IGhhdmUgZGlmZmVyZW50IHZhbHVlcyBpbiB0aGUgb2xkIGFuZCBuZXdcclxuICogc3R5bGVzZXRzLiBQcm9wZXJ0aWVzIHRoYXQgZXhpc3RlZCBpbiB0aGUgb2xkIGJ1dCBkb24ndCBleGlzdCBpbiB0aGUgbmV3IHN0eWxlc2V0LCB3aWxsIGhhdmVcclxuICogdGhlaXIgdmFsdWVzIHNldCB0byB1bmRlZmluZWQuIElmIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIHR3byBzdHlsZXNldHMgbnVsbCBpc1xyXG4gKiByZXR1cm5lZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmU3R5bGVzZXRzKCBvbGRTdHlsZXNldDogU3R5bGVzZXQsIG5ld1N0eWxlc2V0OiBTdHlsZXNldCk6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbFxyXG57XHJcblx0aWYgKCFvbGRTdHlsZXNldCAmJiAhbmV3U3R5bGVzZXQpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmICghb2xkU3R5bGVzZXQpXHJcblx0XHRyZXR1cm4gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBuZXdTdHlsZXNldCk7XHJcblx0ZWxzZSBpZiAoIW5ld1N0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggb2xkU3R5bGVzZXQpO1xyXG5cclxuXHQvLyBmaXJzdCBjb252ZXJ0IGJvdGggc3R5bGVzZXRzIHRvIHRoZWlyIHN0cmluZyB2ZXJzaW9uc1xyXG5cdGxldCBvbGRTdHJpbmdTdHlsZXNldCA9XHRzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG9sZFN0eWxlc2V0KTtcclxuXHRsZXQgbmV3U3RyaW5nU3R5bGVzZXQgPVx0c3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBuZXdTdHlsZXNldCk7XHJcblxyXG5cdGxldCB1cGRhdGVWYWw6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBvbGQgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgbmV3IG9uZS4gVGhlc2VcclxuXHQvLyB3aWxsIGJlIHJlbW92ZWQuXHJcblx0Zm9yKCBsZXQga2V5IGluIG9sZFN0cmluZ1N0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGxldCBuZXdTdHJpbmdWYWwgPSBuZXdTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0aWYgKG5ld1N0cmluZ1ZhbCA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb2xkU3RyaW5nVmFsID0gb2xkU3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdFx0aWYgKG9sZFN0cmluZ1ZhbCAhPT0gbmV3U3RyaW5nVmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gbmV3U3RyaW5nU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFN0cmluZ1ZhbCA9IG9sZFN0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRpZiAob2xkU3RyaW5nVmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVwZGF0ZVZhbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGaWx0ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydGluZyBwZXJjZW50IHZhbHVlIHRvIGludm9jYXRpb24gb2YgdGhlIGdpdmVuIENTUyBmdW5jdGlvbi5cclxuZnVuY3Rpb24gcGVyY2VudEZpbHRlciggbmFtZTogc3RyaW5nLCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGFtb3VudCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJyaWdodG5lc3MoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJyaWdodG5lc3MoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiYnJpZ2h0bmVzc1wiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjb250cmFzdCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udHJhc3QoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiY29udHJhc3RcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZ3JheXNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmF5c2NhbGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiZ3JheXNjYWxlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGludmVydCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImludmVydFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBvcGFjaXR5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcIm9wYWNpdHlcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2F0dXJhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdHVyYXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcInNhdHVyYXRlXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNlcGlhKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXBpYSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzZXBpYVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBibHVyKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBibHVyKCByYWRpdXM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBibHVyKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCByYWRpdXMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBkcm9wU2hhZG93KClgIENTUyBmdW5jdGlvbi5cclxuICogQHBhcmFtIHggSG9yaXpvbnRhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIHkgVmVydGljYWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gYmx1ciBWYWx1ZSBvZiB0aGUgc2hhZG93J3MgYmx1cnJpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEgcGl4ZWwuXHJcbiAqIEBwYXJhbSBzcHJlYWQgVmFsdWUgb2YgdGhlIHNoYWRvdydzIHNwcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGluc2V0IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzaGFkb3cgZ29lcyBpbnNpZGUgdGhlIHNoYXBlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wU2hhZG93KFxyXG4gICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIGJsdXI/OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgc3ByZWFkPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElGaWx0ZXJQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGBkcm9wLXNoYWRvdygke3NpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0KCB7IHgsIHksIGNvbG9yLCBibHVyLCBzcHJlYWR9KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaHVlLXJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHVlUm90YXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGh1ZS1yb3RhdGUoJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHNoYXBlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnNldCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXQoIG9mZnNldDogRXh0ZW5kZWQ8T25lT3JCb3g8Q3NzTGVuZ3RoPj4sIHJhZGl1cz86IEV4dGVuZGVkPEJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcblx0bGV0IHIgPSByYWRpdXMgIT0gbnVsbCA/IFwicm91bmQgXCIgKyBib3JkZXJSYWRpdXNUb1N0cmluZyggcmFkaXVzKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGluc2V0KCR7Q3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIG9mZnNldCwgXCIgXCIpfSR7cn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGlzIHVzZWQgdG8gc3BlY2lmeSBhIHJhZGl1cyBpbiBbW2NpcmNsZV1dIGFuZCBbW2VsbGlwc2VdXSBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaGFwZVJhZGl1cyA9IEV4dGVuZGVkPENzc0xlbmd0aCB8IFwiY2xvc2VzdC1zaWRlXCIgfCBcImZhcnRoZXN0LXNpZGVcIj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY2lyY2xlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGUoIGNlbnRlcj86IFNoYXBlUmFkaXVzLCBwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IGMgPSAgY2VudGVyICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoY2VudGVyKSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvczJzdHIoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGNpcmNsZSgke2N9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBlbGxpcHNlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHNlKCByeD86IFNoYXBlUmFkaXVzLCByeT86IFNoYXBlUmFkaXVzLFxyXG5cdHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgcnhzID0gIHJ4ICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocngpIDogXCJcIjtcclxuICAgIGxldCByeXMgPSAgcnkgIT0gbnVsbCA/IFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ5KSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvczJzdHIoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGVsbGlwc2UoJHtyeHN9JHtyeXN9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwb2x5Z29uKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKCBwb2ludE9yUnVsZTogQ3NzUG9pbnQgfCBGaWxsUnVsZV9TdHlsZVR5cGUsXHJcblx0Li4ucG9pbnRzOiBDc3NQb2ludFtdKTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcInBvbHlnb24oXCI7XHJcblx0XHRpZiAodHlwZW9mIHBvaW50T3JSdWxlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRzICs9IHBvaW50T3JSdWxlICsgXCIsXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHMgKz0gYCR7Q3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHBvaW50T3JSdWxlLCBcIiBcIil9LGA7XHJcblxyXG5cdFx0cyArPSBwb2ludHMubWFwKCBwdCA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggcHQsIFwiIFwiKSkuam9pbihcIixcIik7XHJcblxyXG5cdFx0cmV0dXJuIHMgKyBcIilcIjtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElSYXlQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByYXkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJheSggYW5nbGU6IEV4dGVuZGVkPENzc0FuZ2xlPiwgc2l6ZT86IEV4dGVuZGVkPEV4dGVudEtleXdvcmQgfCBDc3NMZW5ndGg+LFxyXG5cdGNvbnRhaW4/OiBib29sZWFuKTogSVJheVByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgYW5nbGVTdHJpbmcgPSBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpO1xyXG5cdFx0bGV0IHNpemVTdHJpbmcgPSBzaXplID0hIG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggc2l6ZSkgOiBcIlwiO1xyXG5cdFx0bGV0IGNvbnRhaW5TdHJpbmcgPSBjb250YWluID8gXCIsY29udGFpblwiIDogXCJcIjtcclxuXHRcdHJldHVybiBgcmF5KCR7YW5nbGVTdHJpbmd9JHtzaXplU3RyaW5nfSR7Y29udGFpblN0cmluZ30pYDtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElQYXRoQnVpbGRlciBpbnRlcmZhY2UgdGhhdCBhbGxvd3MgYnVpbGRpbmcgYSBDU1MgcGF0aC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoKCBmaWxsUnVsZT86IEZpbGxSdWxlX1N0eWxlVHlwZSk6IElQYXRoQnVpbGRlclxyXG57XHJcblx0cmV0dXJuIG5ldyBQYXRoQnVpbGRlciggZmlsbFJ1bGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhdGhCdWlsZGVyIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvYmplY3QgdGhhdCBhY2N1bXVsYXRlcyBwYXRoIGNvbW1hbmRzIHRoYXQgYXJlIHRoZW5cclxuICogY29udmVydGVkIHRvIGEgc3RyaW5nIHBhcmFtZXRlciBvZiB0aGUgQ1NTIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgUGF0aEJ1aWxkZXIgaW1wbGVtZW50cyBJUGF0aEJ1aWxkZXJcclxue1xyXG5cdHByaXZhdGUgYnVmOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5idWYgPSBcInBhdGgoXCI7XHJcblx0XHRpZiAoZmlsbFJ1bGUpXHJcblx0XHRcdHRoaXMuYnVmICs9IGZpbGxSdWxlICsgXCIsXCI7XHJcblxyXG5cdFx0dGhpcy5idWYgKz0gXCInXCI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCBzdHJpbmdcclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpIDogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYnVmICsgXCInKVwiOyB9XHJcblxyXG5cclxuXHRcclxuICAgIC8vIE1vdmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdHByaXZhdGUgaXRlbXMoIGNvbW1hbmQ6IHN0cmluZywgLi4uaXRlbXM6IChudW1iZXIgfCBudW1iZXJbXSlbXSk6IElQYXRoQnVpbGRlclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmICs9IFwiIFwiICsgY29tbWFuZDtcclxuXHJcblx0XHRmb3IoIGxldCBpdGVtIG9mIGl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodHlwZW9mIGl0ZW0gPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBpdGVtO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBzdWJJdGVtIG9mIGl0ZW0pXHJcblx0XHRcdFx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIHN1Ykl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBNKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJNXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIG0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIm1cIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBMKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJMXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImxcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBIKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJIXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIGgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImhcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBWKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJWXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIHYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInZcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBDKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJDXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBjKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJjXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgUyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJTXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBzKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInNcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBRKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIHEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwicVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlRcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgdCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwidFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIEEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiQVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgYSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJhXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgeigpIHsgdGhpcy5idWYgKz0gXCIgelwiOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRyYW5zZm9ybXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeCggYTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRkOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHk6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnIyc3RyKCBbYSwgYiwgYywgZCwgdHgsIHR5XSwgdW5kZWZpbmVkLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeDNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgzZChcclxuXHRcdGExOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzE6IEV4dGVuZGVkPENzc051bWJlcj4sIGQxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTI6IEV4dGVuZGVkPENzc051bWJlcj4sIGIyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDI6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjM6IEV4dGVuZGVkPENzc051bWJlcj4sIGMzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGE0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGQ0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdCk6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycjJzdHIoIFthMSwgYjEsIGMxLCBkMSwgYTIsIGIyLCBjMiwgZDIsIGEzLCBiMywgYzMsIGQzLCBhNCwgYjQsIGM0LCBkNF0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwZXJzcGVjdGl2ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUoIGQ6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBwZXJzcGVjdGl2ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhkKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBDU1Mgcm90YXRpb24gZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByb3RhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVYXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWVwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWiggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVpcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUzZChcclxuXHR4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB5OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB6OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeiksIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgcm90YXRlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoIGN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeT86IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZSgke0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhjeCl9JHtzeSAhPSBudWxsID8gXCIsXCIgKyBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3kpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBzY2FsZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVYKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVYXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWSggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWVwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVooIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVpcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlM2QoIHN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRzejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSxcclxuXHRcdENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tldygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tldyggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPiwgYXk/OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSR7YXkgIT0gbnVsbCA/IFwiLFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1goKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdYKCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tld1goJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WSggYXk6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeT86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCl9JHt5ICE9IG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gdHJhbnNsYXRlIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVgoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWFwiLCB4KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWSggeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVZXCIsIHkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVaKCB6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVpcIiwgeik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUzZCggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuXHR6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCksIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSxcclxuXHRcdENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh6KV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBHcmlkIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpdENvbnRlbnRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBmaXQtY29udGVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZml0Q29udGVudCggc2l6ZTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElGaXRDb250ZW50UHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBmaXQtY29udGVudCgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhzaXplKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJTWluTWF4UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWlubWF4KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW5tYXgoIG1pbjogR3JpZFRyYWNrU2l6ZSwgbWF4OiBHcmlkVHJhY2tTaXplKTogSU1pbk1heFByb3h5XHJcbntcclxuICAgIGxldCBvcHRpb25zID0geyBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jIH07XHJcbiAgICByZXR1cm4gKCkgPT4gYG1pbm1heCgke3ZhbDJzdHIoIG1pbiwgb3B0aW9ucyl9LCR7dmFsMnN0ciggbWF4LCBvcHRpb25zKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUmVwZWF0UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmVwZWF0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoIGNvdW50OiBFeHRlbmRlZDxDc3NOdW1iZXI+IHwgXCJhdXRvLWZpbGxcIiB8IFwiYXV0by1maXRcIixcclxuICAgIC4uLnRyYWNrczogR3JpZFRyYWNrW10pOiBJUmVwZWF0UHJveHlcclxue1xyXG4gICAgLy8gcmV0dXJuICgpID0+IGByZXBlYXQoJHt2YWwyc3RyKGNvdW50KX0sJHtzdHlsZVByb3BUb1N0cmluZyggXCJncmlkVGVtcGxhdGVSb3dzXCIsIHRyYWNrcywgdHJ1ZSl9KWA7XHJcbiAgICByZXR1cm4gKCkgPT4gYHJlcGVhdCgke3ZhbDJzdHIoY291bnQpfSwke3ZhbDJzdHIoIHRyYWNrcywgeyBhcnJJdGVtRnVuYzogZ3JpZFRyYWNrVG9TdHJpbmcgfSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVNwYW5Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIHNwYW4gZXhwcmVzc2lvbiBmb3IgZ3JpZCBsYXlvdXRzLiBJZiB0aGUgZmlyc3RcclxuICogcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCB0aGUgc2Vjb25kIHBhcmFtZXRlciAoaWYgZGVmaW5lZCkgbXVzdCBiZSBhIG5hbWU7IGlmIHRoZSBmaXJzdCBwYXJhbWV0ZXJcclxuICogaXMgYSBuYW1lLCB0aGUgc2Vjb25kIHBhcmFtZXRlciAoaWYgZGVmaW5lZCkgbXVzdCBiZSBhIG51bWJlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGFuKCBjb3VudE9yTmFtZTogRXh0ZW5kZWQ8R3JpZExpbmVDb3VudE9yTmFtZT4sXHJcbiAgICBuYW1lT3JDb3VudD86IEV4dGVuZGVkPEdyaWRMaW5lQ291bnRPck5hbWU+KTogSVNwYW5Qcm94eVxyXG57XHJcbiAgICBsZXQgZmlyc3RFbG0gPSB2YWwyc3RyKGNvdW50T3JOYW1lKTtcclxuICAgIGxldCBzZWNvbmRFbG0gPSBuYW1lT3JDb3VudCA/IHZhbDJzdHIoIG5hbWVPckNvdW50KSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYHNwYW4gJHtmaXJzdEVsbX0gJHtzZWNvbmRFbG19YDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG5cdElDc3NOdW1iZXJNYXRoLCBJQ3NzTGVuZ3RoTWF0aCwgSUNzc0FuZ2xlTWF0aCwgSUNzc1RpbWVNYXRoLCBJQ3NzUmVzb2x1dGlvbk1hdGgsXHJcbiAgICBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBFeHRlbmRlZCwgSVN0cmluZ1Byb3h5LCBJVXJsUHJveHksXHJcbiAgICBBdHRyVHlwZUtleXdvcmQsIEF0dHJVbml0S2V5d29yZCwgSUxlbmd0aFByb3h5LCBJUGVyY2VudFByb3h5LCBJQW5nbGVQcm94eSxcclxuICAgIElUaW1lUHJveHksIElSZXNvbHV0aW9uUHJveHksIElGcmVxdWVuY3lQcm94eSwgSVF1b3RlZFByb3h5XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge1xyXG5cdENzc051bWJlck1hdGgsIENzc0xlbmd0aE1hdGgsIENzc0FuZ2xlTWF0aCwgQ3NzVGltZU1hdGgsIENzc1Jlc29sdXRpb25NYXRoLFxyXG5cdENzc0ZyZXF1ZW5jeU1hdGgsIENzc1BlcmNlbnRNYXRoLCB2YWwyc3RyLCB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0lWYXJSdWxlLCBJQ291bnRlclJ1bGUsIElJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZSwgTGlzdFN0eWxlVHlwZV9TdHlsZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW0gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxudW1iZXI+YFxyXG4gKiBDU1MgdHlwZS4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleSBhcmVcclxuICogY29udmVydGVkIHRvIHN0cmluZ3Mgd2l0aG91dCBhcHBlbmRpbmcgYW55IHVuaXRzIHRvIHRoZW0uXHJcbiAqL1xyXG5leHBvcnQgbGV0IE51bTogSUNzc051bWJlck1hdGggPSBuZXcgQ3NzTnVtYmVyTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBlcmNlbnQgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50YWdlPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgXCIlXCIgdW5pdCBzdWZmaXguXHJcbiAqL1xyXG5leHBvcnQgbGV0IFBlcmNlbnQ6IElDc3NQZXJjZW50TWF0aCA9IG5ldyBDc3NQZXJjZW50TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBwZXJjZW50IHZhbHVlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50KCBuOiBudW1iZXIpOiBJUGVyY2VudFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIiVcIjsgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIExlbiBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPGxlbmd0aD5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGxlbmd0aCB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcInB4XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZW1cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgTGVuOiBJQ3NzTGVuZ3RoTWF0aCA9IG5ldyBDc3NMZW5ndGhNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBxdWFydGVycyBvZiBhbiBpbmNoICovXHJcbmV4cG9ydCBmdW5jdGlvbiBRKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiUVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2ggdW5pdHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiY2hcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNhbnRpbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImNtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYWxjdWxhdGVkIGZvbnQtc2l6ZXMgb2YgdGhlIGVsZW1lbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVtKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZW1cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGhlaWdodHMgb2YgbG93ZXJjYXNlIGxldHRlciAneCcgaW4gdGhlIGZvbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZXhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGljIHVuaXRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpYyggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImljXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpbmNoZXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluY2goIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJpblwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSBlbGVtZW50ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImxoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBtaWxsaW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW0oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJtbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcGljYXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBjKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicGNcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBvaW50cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHQoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJwdFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcGl4ZWxzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBweCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInB4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAqIG9mIHRoZSByb290IGVsZW1lbnTigJlzIGJsb2NrIGF4aXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZiKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidmJcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAqIG9mIHRoZSByb290IGVsZW1lbnTigJlzIGlubGluZSBheGlzICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZpXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgd2lkdGggb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2dyggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZ3XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBmb250c2l6ZXMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicmVtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmxoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicmxoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgc21hbGxlciB2YWx1ZSBiZXR3ZWVuIHZ3IGFuZCB2aCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdm1heCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZtYXhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBsYXJnZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZtaW4oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2bWluXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBmb3IgZmxleCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZnIoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJmclwiOyB9XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmdsZSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPGFuZ2xlPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGFuIGFuZ2xlIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZGVnXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwidHVyblwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBBbmdsZTogSUNzc0FuZ2xlTWF0aCA9IG5ldyBDc3NBbmdsZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZGVncmVlcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVnKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkZWdcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gcmFkaWFucyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFkKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJyYWRcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZ3JhZGlhbnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyYWQoIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImdyYWRcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gdHVybnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHR1cm4oIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInR1cm5cIjsgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRpbWUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDx0aW1lPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgdGltZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIm1zXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwic1wiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBUaW1lOiBJQ3NzVGltZU1hdGggPSBuZXcgQ3NzVGltZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1zKCBuOiBudW1iZXIpOiBJVGltZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIm1zXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gc2Vjb25kcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcyggbjogbnVtYmVyKTogSVRpbWVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJzXCI7IH1cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJlc29sdXRpb24gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgcmVzb2x1dGlvbiB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRwaVwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImRwY21cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgUmVzb2x1dGlvbjogSUNzc1Jlc29sdXRpb25NYXRoID0gbmV3IENzc1Jlc29sdXRpb25NYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBJICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcGkoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBpXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBDTSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHBjbSggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkcGNtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBQWCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHBweCggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkcHB4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gWCAqL1xyXG5leHBvcnQgZnVuY3Rpb24geCggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ4XCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGcmVxdWVuY3kgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBmcmVxdWVuY3kgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJIelwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImtIelwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBGcmVxdWVuY3k6IElDc3NGcmVxdWVuY3lNYXRoID0gbmV3IENzc0ZyZXF1ZW5jeU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEhlcnR6ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoeiggbjogbnVtYmVyKTogSUZyZXF1ZW5jeVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImh6XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBLaWxvLUhlcnR6ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBraHooIG46IG51bWJlcik6IElGcmVxdWVuY3lQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJraHpcIjsgfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyB1dGlsaXR5IGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBlbmNhcHN1bGF0aW5nIHRoZSBnaXZlbiBzdHJpbmctbGlrZSBwYXJhbWV0ZXIuIFRoaXMgZnVuY3Rpb25cclxuICogYWxsb3dzIHNwZWNpZnlpbmcgYXJiaXRyYXJ5IHRleHQgZm9yIHByb3BlcnRpZXMgd2hvc2UgdHlwZSBub3JtYWxseSBkb2Vzbid0IGFsbG93IHN0cmluZ3MuXHJcbiAqIFRoaXMgaXMgdXNlZCBhcyBhbiBcImVzY2FwZSBoYXRjaFwiIHdoZW4gYSBzdHJpbmcgdmFsdWUgYWxyZWFkeSBleGlzdHMgYW5kIHRoZXJlIGlzIG5vIHNlbnNlXHJcbiAqIHRvIGNvbnZlcnQgaXQgdG8gYSBwcm9wZXIgdHlwZS4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZSBpbnZva2VkIHdpdGhcclxuICogdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhdyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IGFueVtdKTogSVN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0cywgcGFyYW1zKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgaW52b2NhdGlvbiBvZiB0aGUgYHZhcigpYCBDU1MgZnVuY3Rpb24gZm9yXHJcbiAqIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IHdpdGggb3B0aW9uYWwgZmFsbGJhY2tzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgZmFsbGJhY2s/OiBWYXJWYWx1ZVR5cGU8Sz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGZhbGxiYWNrXHJcbiAgICAgICAgPyBgdmFyKC0tJHt2YXJPYmoubmFtZX0sJHtzdHlsZVByb3BUb1N0cmluZyggdmFyT2JqLnRlbXBsYXRlLCBmYWxsYmFjaywgdHJ1ZSl9KWBcclxuICAgICAgICA6IGB2YXIoLS0ke3Zhck9iai5uYW1lfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYHVybCgpYCBmdW5jdGlvbi4gVGhlIHN0cmluZyBwYXJhbWV0ZXJcclxuICogd2lsbCBiZSB3cmFwcGVkIGluIGEgXCJ1cmwoKVwiIGludm9jYXRpb24uIFRoZSBmdW5jdGlvbiBjYW4gYWxzbyBhY2NlcHQgdGhlIElJRFJ1bGUgb2JqZWN0IHRvXHJcbiAqIGNyZWF0ZSB1cmwoI2VsZW1lbnQpIGludm9jYXRpb24sIHdoaWNoIGlzIG9mdGVuIHVzZWQgdG8gYWRkcmVzcyBTVkcgZWxlbWVudHMgYnkgdGhlaXIgSURzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVybCggdmFsOiBFeHRlbmRlZDxzdHJpbmcgfCBJSURSdWxlPik6IElVcmxQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGB1cmwoJHt2YWwyc3RyKHZhbCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBhdHRyKClgIENTUyBmdW5jdGlvbi4gSXQgcmV0dXJucyBJU3RyaW5nUHJveHlcclxuICogYW5kIHRoZW9yZXRpY2FsbHkgY2FuIGJlIHVzZWQgaW4gYW55IHN0eWxlIHByb3BlcnR5OyBob3dldmVyLCBpdHMgdXNlIGJ5IGJyb3dzZXJzIGlzIGN1cnJlbnRseVxyXG4gKiBsaW1pdGVkIHRvIHRoZSBgY29udGVudGAgcHJvcGVydHkuIEFsc28gbm8gYnJvd3NlciBjdXJyZW50bHkgc3VwcG9ydCB0eXBlLCB1bml0cyBvciBmYWxsYmFja1xyXG4gKiB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXR0ciggYXR0ck5hbWU6IEV4dGVuZGVkPHN0cmluZz4sIHR5cGVPclVuaXQ/OiBFeHRlbmRlZDxBdHRyVHlwZUtleXdvcmQgfCBBdHRyVW5pdEtleXdvcmQ+LFxyXG5cdGZhbGxiYWNrPzogRXh0ZW5kZWQ8c3RyaW5nPik6IElTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGF0dHIoJHthdHRyTmFtZX0ke3R5cGVPclVuaXQgPyBcIiBcIiArIHR5cGVPclVuaXQgOiBcIlwifSR7ZmFsbGJhY2sgPyBcIixcIiArIGZhbGxiYWNrIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyBhIHN0cmluZyBpbiBxdW90YXRpb24gbWFya3MuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcXVvdGVkKCB2YWw6IGFueSk6IElRdW90ZWRQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYFwiJHt2YWwyc3RyKHZhbCl9XCJgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENvdW50ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGBjb3VudGVyKClgIGZ1bmN0aW9uIHdpdGggYWRkaXRpb25hbFxyXG4gKiBvcHRpb25hbCBzdHJpbmdzIGFkZGVkIGFmdGVyIGFuZC9vciBiZWZvcmUgdGhlIGNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlciggY291bnRlck9iajogRXh0ZW5kZWQ8SUNvdW50ZXJSdWxlIHwgc3RyaW5nPixcclxuXHRzdHlsZT86IEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPixcclxuXHR0ZXh0QWZ0ZXI/OiBFeHRlbmRlZDxzdHJpbmc+LCB0ZXh0QmVmb3JlPzogRXh0ZW5kZWQ8c3RyaW5nPik6IElTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsMnN0ciggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbDJzdHIoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbDJzdHIoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXIoJHt2YWwyc3RyKGNvdW50ZXJPYmopfSR7c3R5bGVTdHJpbmd9KSAke2FmdGVyfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYGNvdW50ZXNyKClgIGZ1bmN0aW9uIHdpdGggdGhlIGdpdmVuXHJcbiAqIHNlcGFyYXRvciBzdHJpbmcgYW5kIGFkZGl0aW9uYWwgb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXJzKCBjb3VudGVyT2JqOiBFeHRlbmRlZDxJQ291bnRlclJ1bGUgfCBzdHJpbmc+LFxyXG5cdHNlcGFyYXRvcjogRXh0ZW5kZWQ8c3RyaW5nPiwgc3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzZXBTdHJpbmcgPSBzZXBhcmF0b3IgPyBgXCIke3ZhbDJzdHIoIHNlcGFyYXRvcil9XCJgIDogYFwiLlwiYDtcclxuXHRcdGxldCBzdHlsZVN0cmluZyA9IHN0eWxlID8gYCwke3ZhbDJzdHIoIHN0eWxlKX1gIDogXCJcIjtcclxuXHRcdGxldCBiZWZvcmUgPSB0ZXh0QmVmb3JlID8gYFwiJHt2YWwyc3RyKCB0ZXh0QmVmb3JlKX1cImAgOiBcIlwiO1xyXG5cdFx0bGV0IGFmdGVyID0gdGV4dEFmdGVyID8gYFwiJHt2YWwyc3RyKCB0ZXh0QWZ0ZXIpfVwiYCA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYCR7YmVmb3JlfSBjb3VudGVycygke3ZhbDJzdHIoY291bnRlck9iail9LCR7c2VwU3RyaW5nfSR7c3R5bGVTdHJpbmd9KSAke2FmdGVyfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWNzc1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvQ29sb3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvSW1hZ2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1V0aWxBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0NvbG9yQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9JbWFnZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3R5bGVBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1J1bGVBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1NjaGVkdWxpbmdBUElcIjtcclxuIiwiaW1wb3J0IHtJQW5pbWF0aW9uUnVsZSwgQW5pbWF0aW9uRnJhbWUsIEFuaW1hdGlvbldheXBvaW50LCBBbmltYXRpb25TdHlsZXNldCwgSUFuaW1hdGlvbkZyYW1lUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQgeyB2YWwyc3RyIH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25SdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBrZXlmcmFtZXMgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGlmIChmcmFtZXMpXHJcblx0XHRcdHRoaXMuZnJhbWVSdWxlcyA9IGZyYW1lcy5tYXAoIGZyYW1lID0+IG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIGZyYW1lWzBdLCBmcmFtZVsxXSkpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdGtleWZyYW1lUnVsZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25SdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uUnVsZSh1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdGlmICh0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdG5ld1J1bGUuZnJhbWVSdWxlcyA9IHRoaXMuZnJhbWVSdWxlcy5tYXAoIGZyYW1lUnVsZSA9PiBmcmFtZVJ1bGUuY2xvbmUoKSBhcyBBbmltYXRpb25GcmFtZVJ1bGUpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGtleWZyYW1lcyAke3RoaXMubmFtZX0ge31gLCBwYXJlbnQpIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdFx0bGV0IGNzc0tleWZyYW1lc1J1bGUgPSB0aGlzLmNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHRcdGZvciggbGV0IGZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3NzS2V5ZnJhbWVzUnVsZS5hcHBlbmRSdWxlKCBmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuXHRcdFx0XHRsZXQgY3NzUnVsZSA9IGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMuaXRlbSggIGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0aWYgKGNzc1J1bGUpXHJcblx0XHRcdFx0XHRmcmFtZVJ1bGUuY3NzS2V5ZnJhbWVSdWxlID0gY3NzUnVsZSBhcyBDU1NLZXlmcmFtZVJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goeClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiQ2Fubm90IGFkZCBDU1Mga2V5ZnJhbWUgcnVsZVwiLCB4KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAoIXRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggYEBrZXlmcmFtZXMgJHt0aGlzLm5hbWV9IHtgKTtcclxuXHJcblx0XHRmb3IoIGxldCBmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRjdHguYWRkUnVsZVRleHQoIGZyYW1lUnVsZS50b0Nzc1N0cmluZygpKVxyXG4gICAgICAgIFxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBcIn1cIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gY29udmVydCBhbiBvYmplY3QgdG8gYSBzdHJpbmcuIEFuaW1hdGlvbiBydWxlIHJldHVybnMgaXRzIG5hbWUuXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRwdWJsaWMgZnJhbWVSdWxlczogQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBrZXlmcmFtZSBjbGF1c2UgaW4gdGhlIGFuaW1hdGlvbiBydWxlLlxyXG4gKi9cclxuY2xhc3MgQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvbkZyYW1lUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQsIHN0eWxlc2V0PzogQW5pbWF0aW9uU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHRcdHRoaXMud2F5cG9pbnQgPSB3YXlwb2ludDtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBbmltYXRpb25GcmFtZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSggdGhpcy53YXlwb2ludCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsMnN0ciggdGhpcy53YXlwb2ludCwge1xyXG5cdFx0XHRmcm9tTnVtYmVyOiB2ID0+IHYgKyBcIiVcIixcclxuXHRcdFx0YXJySXRlbUZ1bmM6IHYgPT4gdmFsMnN0ciggdiwgeyBmcm9tTnVtYmVyOiB2ID0+IHYgKyBcIiVcIiB9KSxcclxuXHRcdFx0YXJyU2VwOiBcIixcIlxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHB1YmxpYyB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQ7XHJcblxyXG5cdC8qKiBTT00ga2V5ZnJhbWUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDb3VudGVyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ291bnRlclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvdW50ZXJSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJQ291bnRlclJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0XHRbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IENvdW50ZXJSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgY291bnRlciBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50ZXJOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJR3JpZExpbmVSdWxlLCBJR3JpZEFyZWFSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2V9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcmlkTGluZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgZ3JpZCBsaW5lIGRlZmluaXRpb24uIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGdyaWRcclxuICogbGluZXMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZSBncmlkIGxpbmUgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZExpbmVSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJR3JpZExpbmVSdWxlXHJcbntcclxuICAgIC8vIGlmIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZFxyXG4gICAgLy8gYmVjYXVzZSB0aGlzIGNvbnN0cnVjdG9yIGNhbiBvbmx5IGJlIGludm9rZWQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIGxpbmVzIG9mIHRoZSBHcmlkQXJlYVJ1bGVcclxuICAgIC8vIG9iamVjdC5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRMaW5lUnVsZSB8IElHcmlkQXJlYVJ1bGUsIGlzU3RhcnRFbmRPck5vbmU/OiBib29sZWFuKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IGlzU3RhcnRFbmRPck5vbmU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIGxldCBuYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuICAgICAgICBpZiAobmFtZU92ZXJyaWRlIGluc3RhbmNlb2YgR3JpZExpbmVSdWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZU92ZXJyaWRlLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IG5hbWVPdmVycmlkZS5pc1N0YXJ0RW5kT3JOb25lO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gbmFtZU92ZXJyaWRlLmFyZWFOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lT3ZlcnJpZGUgaW5zdGFuY2VvZiBHcmlkQXJlYVJ1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lT3ZlcnJpZGUubmFtZSArICh0aGlzLmlzU3RhcnRFbmRPck5vbmUgPyBcIi1zdGFydFwiIDogXCItZW5kXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gbmFtZU92ZXJyaWRlLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIG9idGFpbmVkIG5hbWUgZG9lc24ndCBoYXZlIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIgYnV0IHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXNcclxuICAgICAgICAgICAgLy8gZGVmaW5lZCAodGhhdCBpcywgaXQgaXMgZWl0aGVyIHN0YXJ0IG9yIGVuZCBsaW5lKSwgd2UgbmVlZCB0byBhcHBlbmQgdGhlIHN1ZmZpeC4gSWYgdGhlXHJcbiAgICAgICAgICAgIC8vIG9idGFpbmVkIG5hbWUgYWxyZWFkeSBoYXMgXCItc3RhcnRcIiBvciBcIi1lbmRcIiBhbmQgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBub3RcclxuICAgICAgICAgICAgLy8gZGVmaW5lZCwgd2Ugc2V0IHRoaXMgZmxhZyB0byBlaXRoZXIgdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gdGhlIHN1ZmZpeC4gTm90ZSB0aGF0IGlmXHJcbiAgICAgICAgICAgIC8vIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZC5cclxuICAgICAgICAgICAgbGV0IG5hbWVIYXNTdGFydCA9IHRoaXMubmFtZS5lbmRzV2l0aChcIi1zdGFydFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWVIYXNFbmQgPSB0aGlzLm5hbWUuZW5kc1dpdGgoXCItZW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAobmFtZUhhc1N0YXJ0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZS5zdWJzdHIoIDAsIHRoaXMubmFtZS5sZW5ndGggLSBcIi1zdGFydFwiLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZUhhc0VuZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lLnN1YnN0ciggMCwgdGhpcy5uYW1lLmxlbmd0aCAtIFwiLWVuZFwiLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID09PSB0cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lICs9IFwiLXN0YXJ0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID09PSBmYWxzZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSArPSBcIi1lbmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEdyaWRMaW5lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5pc1N0YXJ0RW5kT3JOb25lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGxpbmUgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxpbmUgaXMgYSBzdGFydCBvciBlbmQgbGluZSBvZiBhIGdyaWQgYXJlYS4gVGhlIHZhbHVlIGlzIHRydWVcclxuICAgICAqIGlmIHRoaXMgaXMgdGhlIHN0YXJ0IGxpbmU7IGZhbHNlIGlmIHRoaXMgaXMgdGhlIGVuZCBsaW5lOyBhbmQgdW5kZWZpbmVkIGlmIHRoZSBsaW5lIGlzXHJcbiAgICAgKiBub3QgcmVsYXRlZCB0byBhbnkgYXJlYS5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBpc1N0YXJ0RW5kT3JOb25lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgZ3JpZCBhcmVhIG9mIHdoaWNoIHRoZSBsaW5lIGlzIGVpdGhlciBhIHN0YXJ0IG9yIGFuIGVuZCBsaW5lLiBJdCBpcyBkZWZpbmVkXHJcbiAgICAgKiBvbmx5IGlmIHRoZSBsaW5lIG5hbWUgZW5kcyB3aXRoIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgYXJlYU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUgfCBJR3JpZEFyZWFSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JpZEFyZWFSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGdyaWQgYXJlYSBkZWZpbml0aW9uLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBncmlkXHJcbiAqIGFyZWFzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmUgZ3JpZCBhcmVhIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRBcmVhUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUdyaWRBcmVhUnVsZVxyXG57XHJcbiAgICAvLyBpZiB0aGUgbmFtZU92ZXJyaWRlIGlzIGFuIGFyZWEgcnVsZSBvYmplY3QsIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgYWx3YXlzIGRlZmluZWRcclxuICAgIC8vIGJlY2F1c2UgdGhpcyBjb25zdHJ1Y3RvciBjYW4gb25seSBiZSBpbnZva2VkIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBsaW5lcyBvZiB0aGUgR3JpZEFyZWFSdWxlXHJcbiAgICAvLyBvYmplY3QuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGUpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5lIHJ1bGVzXHJcbiAgICAgICAgdGhpcy5zdGFydExpbmUgPSBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVuZExpbmUgPSBuZXcgR3JpZExpbmVSdWxlKCB0aGlzLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIGxpbmUgcnVsZXNcclxuICAgICAgICB0aGlzLnN0YXJ0TGluZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuICAgICAgICB0aGlzLmVuZExpbmUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBHcmlkQXJlYVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEdyaWRBcmVhUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgbGluZSBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFN0YXJ0IGxpbmUgb2YgdGhlIGFyZWEuICovXHJcblx0cHVibGljIHN0YXJ0TGluZTogR3JpZExpbmVSdWxlO1xyXG5cclxuICAgIC8qKiBFbmQgbGluZSBvZiB0aGUgYXJlYSBhcmVhLiAqL1xyXG5cdHB1YmxpYyBlbmRMaW5lOiBHcmlkTGluZVJ1bGU7XHJcblxyXG4gICAgLy8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZEFyZWFSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBTdHlsZURlZmluaXRpb24sIElHcm91cFJ1bGUsIElNZWRpYVJ1bGUsIElTdXBwb3J0c1J1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Z2V0Q29udGFpbmVyRnJvbUluc3RhbmNlLCBwcm9jZXNzSW5zdGFuY2VPckNsYXNzfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZSwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyb3VwUnVsZSBjbGFzcyBzZXJ2ZXMgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgZ3JvdXBpbmcgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyb3VwUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZU9yQ2xhc3MgPSBpbnN0YW5jZU9yQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICAvLyBjb250YWluZXIgdG8gd2hpY2ggb3VyIGdyb3VwbmcgcnVsZSBiZWxvbmdzIGJlY29tZXMgdGhlIHBhcmVudCBjb250YWluZXIgZm9yIHRoZVxyXG4gICAgICAgIC8vIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2VcclxuXHRcdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIHRoaXMuaW5zdGFuY2VPckNsYXNzLCBjb250YWluZXIuZ2V0RGVmaW5pdGlvbkluc3RhbmNlKCkpO1xyXG5cdFx0aWYgKCFpbnN0YW5jZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMucnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0R3JvdXBTZWxlY3RvclRleHQoKTtcclxuXHRcdGlmICghc2VsZWN0b3IpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYCR7c2VsZWN0b3J9IHt9YCwgcGFyZW50KSBhcyBDU1NHcm91cGluZ1J1bGU7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmluc2VydFJ1bGVzKCB0aGlzLmNzc1J1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmICghdGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5nZXRHcm91cFNlbGVjdG9yVGV4dCgpO1xyXG5cdFx0aWYgKCFzZWxlY3RvcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggYCR7c2VsZWN0b3J9IHtgKTtcclxuXHJcblx0XHQvLyBpbnNlcnQgc3ViLXJ1bGVzXHJcblx0XHR0aGlzLnJ1bGVDb250YWluZXIuc2VyaWFsaXplUnVsZXMoIGN0eCk7XHJcblxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBcIn1cIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBjbGVhciBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5jbGVhclJ1bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGRlZmluaW5nIHRoZSBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGVcclxuXHRwdWJsaWMgZ2V0IHJ1bGVzKCk6IFQgeyByZXR1cm4gdGhpcy5pbnN0YW5jZSBhcyBUOyB9XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgZGVmaW5lcyBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzcztcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgZm9yIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBydWxlQ29udGFpbmVyOiBJUnVsZUNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN1cHBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJU3VwcG9ydHNSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIGluc3RhbmNlT3JDbGFzcyk7XHJcblxyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU3VwcG9ydHNSdWxlPFQ+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBTdXBwb3J0c1J1bGU8VD4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdC8vIGNvbnZlcnQgdGhlIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgZm9ybVxyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGUgcXVlcnkgaXMgc3VwcG9ydGVkIGFuZCBpZiBpdCBpcyBub3QsIGRvbid0IGluc2VydCB0aGUgcnVsZVxyXG5cdFx0cmV0dXJuIENTUy5zdXBwb3J0cyggcXVlcnlTdHJpbmcpID8gYEBzdXBwb3J0cyAke3F1ZXJ5U3RyaW5nfWAgOiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRmxhZyBpbmRpY2F0ZWQgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGlzIHJ1bGUncyBxdWVyeSAqL1xyXG4gICAgcHVibGljIGdldCBpc1N1cHBvcnRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICBDU1Muc3VwcG9ydHMoIHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSkpO1xyXG4gICAgfVxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gc3VwcG9ydCBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHByaXZhdGUgcXVlcnk6IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElNZWRpYVJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBNZWRpYVJ1bGU8VD5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE1lZGlhUnVsZTxUPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0cmV0dXJuIGBAbWVkaWEgJHttZWRpYVF1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lGb250RmFjZVJ1bGUsIElJbXBvcnRSdWxlLCBJUGFnZVJ1bGUsIElOYW1lc3BhY2VSdWxlLCBJQ2xhc3NOYW1lUnVsZSwgSUNsYXNzUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7SUZvbnRGYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIlxyXG5pbXBvcnQge2ZvbnRGYWNlVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VGdW5jc1wiXHJcbmltcG9ydCB7UnVsZSwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCwgUnVsZUxpa2UsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeSwgU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZXNcIjtcclxuaW1wb3J0IHtQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1pc2NSdWxlIGNsYXNzIHNlcnZlcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHNpbXBsZSBydWxlcy5cclxuICovXHJcbmFic3RyYWN0IGNsYXNzIE1pc2NSdWxlPFQgZXh0ZW5kcyBDU1NSdWxlPiBleHRlbmRzIFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmlzVG9wTGV2ZWxSdWxlID0gaXNUb3BMZXZlbFJ1bGU7XHJcblx0fVxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggdGhpcy5nZXRSdWxlVGV4dCgpLCBwYXJlbnQpIGFzIFQ7XHJcblx0fVxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggdGhpcy5nZXRSdWxlVGV4dCgpLCB0aGlzLmlzVG9wTGV2ZWxSdWxlKTtcclxuICAgIH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0UnVsZVRleHQoKTogc3RyaW5nO1xyXG5cclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IFQ7XHJcblxyXG4gICAgLy8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBydWxlIGNhbiBvbmx5IGJlIGF0IHRoZSB0b3AtbGV2ZWwgb2Ygc3R5bGVzaGVldHMgKGUuZy4gQGltcG9ydFxyXG4gICAgLy8gYW5kIEBuYW1lc3BhY2UpLlxyXG4gICAgcHJpdmF0ZSBpc1RvcExldmVsUnVsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJbXBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW1wb3J0UnVsZSBleHRlbmRzIE1pc2NSdWxlPENTU0ltcG9ydFJ1bGU+IGltcGxlbWVudHMgSUltcG9ydFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdXJsOiBzdHJpbmcsIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSlcclxuXHR7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBhIHRvcC1sZXZlbCBydWxlXHJcblx0XHRzdXBlciggdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy51cmwgPSB1cmw7XHJcblx0XHR0aGlzLm1lZGlhUXVlcnkgPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0dGhpcy5zdXBwb3J0c1F1ZXJ5ID0gc3VwcG9ydHNRdWVyeTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB0aGlzLnVybCwgdGhpcy5tZWRpYVF1ZXJ5LCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UnVsZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHRpZiAodGhpcy51cmwuc3RhcnRzV2l0aChcInVybFwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiXFxcIlwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiJ1wiKSlcclxuXHRcdFx0dXJsID0gdGhpcy51cmw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHVybCA9IGB1cmwoJHt0aGlzLnVybH0pYDtcclxuXHJcblx0XHRsZXQgc3VwcG9ydHNRdWVyeVN0cmluZyA9ICF0aGlzLnN1cHBvcnRzUXVlcnkgPyBcIlwiIDogc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdFx0aWYgKHN1cHBvcnRzUXVlcnlTdHJpbmcgJiYgIXN1cHBvcnRzUXVlcnlTdHJpbmcuc3RhcnRzV2l0aCggXCJzdXBwb3J0c1wiKSlcclxuXHRcdCAgICBzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gYHN1cHBvcnRzKCAke3N1cHBvcnRzUXVlcnlTdHJpbmd9IClgO1xyXG5cclxuXHRcdGxldCBtZWRpYVF1ZXJ5U3RyaW5nID0gIXRoaXMubWVkaWFRdWVyeSA/IFwiXCIgOiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHRoaXMubWVkaWFRdWVyeSk7XHJcblx0XHRyZXR1cm4gYEBpbXBvcnQgJHt1cmx9ICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gJHttZWRpYVF1ZXJ5U3RyaW5nfWA7XHJcbiAgICB9XHJcblxyXG5cdC8vIFVSTCB0byBpbXBvcnQgZnJvbS5cclxuXHRwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG5cclxuXHQvLyBPcHRpb25hbCBzdXBwb3J0cyBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5hbWVzcGFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VSdWxlIGV4dGVuZHMgTWlzY1J1bGU8Q1NTTmFtZXNwYWNlUnVsZT4gaW1wbGVtZW50cyBJTmFtZXNwYWNlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBuYW1lc3BhY2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKVxyXG5cdHtcclxuICAgICAgICAvLyB0aGlzIGlzIGEgdG9wLWxldmVsIHJ1bGVcclxuXHRcdHN1cGVyKCB0cnVlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcclxuXHRcdHRoaXMucHJlZml4ID0gcHJlZml4O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE5hbWVzcGFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIHRoaXMubmFtZXNwYWNlLCB0aGlzLnByZWZpeCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBnZXRSdWxlVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdGxldCB1cmwgPSB0aGlzLm5hbWVzcGFjZS5zdGFydHNXaXRoKCBcInVybChcIikgPyB0aGlzLm5hbWVzcGFjZSA6IGB1cmwoJHt0aGlzLm5hbWVzcGFjZX0pYDtcclxuXHRcdHJldHVybiBgQG5hbWVzcGFjZSAke3RoaXMucHJlZml4ID8gdGhpcy5wcmVmaXggOiBcIlwifSAke3VybH1gO1xyXG4gICAgfVxyXG5cclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZvbnRGYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAZm9udC1mYWNlIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvbnRGYWNlUnVsZSBleHRlbmRzIE1pc2NSdWxlPENTU0ZvbnRGYWNlUnVsZT4gaW1wbGVtZW50cyBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZvbnRmYWNlOiBJRm9udEZhY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmZvbnRmYWNlID0gZm9udGZhY2U7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogRm9udEZhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIHRoaXMuZm9udGZhY2UpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UnVsZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gYEBmb250LWZhY2UgJHtmb250RmFjZVRvU3RyaW5nKCB0aGlzLmZvbnRmYWNlKX1gO1xyXG4gICAgfVxyXG5cclxuXHQvLyBPYmplY3QgZGVmaW5pbmcgZm9udC1mYWNlIHByb3BlcnRpZXMuXHJcblx0cHVibGljIGZvbnRmYWNlOiBJRm9udEZhY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYWdlUnVsZSBjbGFzcyByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYWdlUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElQYWdlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcywgc3R5bGU/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5wc2V1ZG9DbGFzcyA9IHBzZXVkb0NsYXNzO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IFBhZ2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQYWdlUnVsZSggdGhpcy5wc2V1ZG9DbGFzcyk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYEBwYWdlICR7dGhpcy5wc2V1ZG9DbGFzcyA/IHRoaXMucHNldWRvQ2xhc3MgOiBcIlwifWA7XHJcblx0fVxyXG5cclxuXHQvKiogU09NIHBhZ2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NQYWdlUnVsZTtcclxuXHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRwdWJsaWMgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhZ2VSdWxlIGNsYXNzIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsYXNzTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElDbGFzc05hbWVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGNsYXNzZXM6IChJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUgfCBzdHJpbmcpW10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ2xhc3NOYW1lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ2xhc3NOYW1lUnVsZSggdGhpcy5jbGFzc2VzKTtcclxuXHR9XHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuY2xhc3Nlcy5tYXAoIGNscyA9PiB0eXBlb2YgY2xzID09PSBcInN0cmluZ1wiID8gY2xzIDogY2xzLm5hbWUpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHRoaXMuY3NzQ2xhc3NOYW1lID0gXCIuXCIgKyB0aGlzLmNsYXNzZXMubWFwKCBjbHMgPT4gdHlwZW9mIGNscyA9PT0gXCJzdHJpbmdcIiA/IGNscyA6IGNscy5uYW1lKS5qb2luKFwiLlwiKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgdGhlIG9iamVjdCB0byBwYXJ0aWNwYXRlIGluIFwidmFsdWVUb1N0cmluZ1wiIHNlcmlhbGl6YXRpb24uIFdoZW5ldmVyXHJcblx0ICogdGhlIENsYXNzTmFtZVJ1bGUgb2JqZWN0IGlzIGVuY291bnRlcmVkIGJ5IHRoZSBgVXRpbEZ1bmMudmFsdWVUb1N0cmluZ2AgZnVuY3Rpb24sXHJcblx0ICogdGhlIHJ1bGUncyBDU1MgbmFtZSAodGhlIG9uZSB3aXRoIHRoZSBkb3RzKSB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzQ2xhc3NOYW1lO1xyXG5cdH1cclxuXHJcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgdG9TdHJpbmcgbWV0aG9kIHJldHVybnMgdGhlIGNvbWJpbmVkIG5hbWUgb2YgdGhlIGNsYXNzZXMgKHdpdGhvdXRcclxuICAgIC8vIHRoZSBDU1MgcHJlZml4ZXMpLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcbiAgICAvKiogQWxsIGNsYXNzIG5hbWVzIGNvbmNhdGVuYXRlZCB3aXRoIHNwYWNlICovXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICAvKiogQWxsIGNsYXNzIENTUyBuYW1lcyAod2l0aCBkb3RzKSBjb25jYXRlbmF0ZWQgdG9nZXRoZXIgKi9cclxuICAgIHB1YmxpYyBjc3NDbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGNsYXNzZXM6IChJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUgfCBzdHJpbmcpW107XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJUnVsZSwgSU5hbWVkRW50aXR5LCBTdHlsZURlZmluaXRpb259IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCBpbnRlcmZhY2Uga2VlcHMgaW5mb3JtYXRpb24gZHVyaW5nIHNlcmlhbGl6YXRpb24gb2Ygc3R5bGVcclxuICogZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBpbnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHRcclxue1xyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIGFkZFJ1bGVUZXh0KCBzOiBzdHJpbmcsIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIGFkZFN0eWxlRGVmaW5pdGlvbiggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBhY2NvbXBhbmllcyBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoXHJcbiAqIGEgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlQ29udGFpbmVyXHJcbntcclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZDtcclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdGNsZWFyUnVsZXMoKTogdm9pZDtcclxuXHJcblx0LyoqIFdyaXRlcyBhbGwgcnVsZXMgcmVjdXJzaXZlbHkgdG8gdGhlIGdpdmVuIHN0cmluZy4gKi9cclxuXHRzZXJpYWxpemVSdWxlcyggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZDtcclxuXHJcbiAgICAvKiogU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS4gKi9cclxuXHRzZXRDdXN0b21WYXJWYWx1ZSggbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IHRoYXQgXCJvd25zXCJcclxuICogdGhlIHJ1bGVzIHVuZGVyIHRoaXMgY29udGFpbmVyLiBJbiBwYXJ0aWN1bGFyLCB0aGUgb3duZXIncyBqb2IgaXMgdG8gZ2VuZXJhdGUgXCJzY29wZWRcIiB1bmlxdWVcclxuICogbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUb3BMZXZlbFJ1bGVDb250YWluZXIgZXh0ZW5kcyBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIEdlbmVyYXRlcyBhIG5hbWUsIHdoaWNoIHdpbGwgYmUgdW5pcXVlIGluIHRoaXMgc3R5bGVzaGVldCAqL1xyXG5cdGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZUxpa2UgYWJzdHJhY3QgY2xhc3MgaXMgYSBiYXNlIGZvciBhbGwgXCJydWxlc1wiIGRlZmluZWQgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyAtXHJcbiAqIHdoZXRoZXIgdGhleSBjb3JyZXNwb25kIHRvIHJlYWwgQ3NzUnVsZXMgKGFuZCB0aHVzIGRlcml2ZSBmcm9tIHRoZSBSdWxlIGNsYXNzKSBvciBub3QgKHN1Y2ggYXNcclxuICogY291bnRlcnMsIGdyaWQgbGluZXMgYW5kIGdyaWQgYXJlYXMpLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGVMaWtlXHJcbntcclxuXHQvLyBQcm9jZXNzZXMgdGhlIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblx0XHR0aGlzLm93bmVyQ29udGFpbmVyID0gb3duZXJDb250YWluZXI7XHJcblx0XHR0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogUnVsZUxpa2U7XHJcblxyXG5cdC8vIENvbnRhaW5lciBhdCB0aGUgdG9wIG9mIHRoZSBjaGFpbiBvZiBjb250YWluZXJzIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLlxyXG5cdHB1YmxpYyBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLiBUaGlzIGNhblxyXG5cdC8vIGJlIG51bGwgZm9yIHJ1bGVzIG5vdCBjcmVhdGVkIHZpYSBhc3NpZ25tZW50IHRvIHN0eWxlIGRlZmluaXRpb24gcHJvcGVydGllcy5cclxuXHRwdWJsaWMgcnVsZU5hbWU6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHJ1bGVzLiBBcyBhIHBhcmVudCBvZiBSdWxlQ29udGFpbmVyLCB0aGUgUnVsZVxyXG4gKiBjbGFzcyBpcyBhbHNvIGFuIGFuY2VzdG9yIGZvciBTdHlsZXNoZWV0OyBob3dldmVyLCBtb3N0IG9mIGl0cyB0aGUgZmllbGRzIGFyZSB1bmRlZmluZWQgaW5cclxuICogdGUgU3R5bGVzaGVldCBpbnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSVJ1bGVcclxue1xyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBjbG9uZSgpOiBSdWxlO1xyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQvLyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncywgaXMgYWN0aXZhdGVkLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaFxyXG5cdC8vIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBkZWFjdGl2YXRlZC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7IHRoaXMuY3NzUnVsZSA9IG51bGw7IH1cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcblx0cHVibGljIGFic3RyYWN0IHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSBnaXZlbiBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIHN0YXRpYyBhZGRSdWxlVG9ET00oIHJ1bGVUZXh0OiBzdHJpbmcsIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IENTU1J1bGUgfCBudWxsXHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIHgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBDYW5ub3QgYWRkIENTUyBydWxlICcke3J1bGVUZXh0fSdgLCB4KVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ1NTUnVsZS1kZXJpdmVkIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBhY3R1YWxsIENTUyBydWxlIGluc2VydGVkIGludG9cclxuXHQvLyB0aGUgc3R5bGVzIHNoZWV0IG9yIHRoZSBwYXJlbnQgcnVsZS4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIFN0eWxlc2hlZXQgb2JqZWN0cy5cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgc2NvcGVkIG5hbWVzIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHksXHJcblx0Y3NzUHJlZml4Pzogc3RyaW5nKTogW3N0cmluZyxzdHJpbmddXHJcbntcclxuXHRpZiAoIXJ1bGVOYW1lICYmICFuYW1lT3ZlcnJpZGUpXHJcblx0XHRyZXR1cm4gW1wiXCIsIFwiXCJdO1xyXG5cclxuXHRsZXQgbmFtZSA9ICFuYW1lT3ZlcnJpZGVcclxuXHRcdD8gb3duZXJDb250YWluZXIuZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lISlcclxuXHRcdDogdHlwZW9mIG5hbWVPdmVycmlkZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQ/IG5hbWVPdmVycmlkZVxyXG5cdFx0XHQ6IG5hbWVPdmVycmlkZS5uYW1lO1xyXG5cclxuXHRyZXR1cm4gIWNzc1ByZWZpeFxyXG5cdFx0PyBbbmFtZSxuYW1lXVxyXG5cdFx0OiBuYW1lLnN0YXJ0c1dpdGgoIGNzc1ByZWZpeClcclxuXHRcdFx0PyBbbmFtZS5zdWJzdHIoIGNzc1ByZWZpeC5sZW5ndGgpLCBuYW1lXVxyXG5cdFx0XHQ6IFtuYW1lLCBjc3NQcmVmaXggKyBuYW1lXTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1N0eWxlRGVmaW5pdGlvbiwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCJcclxuaW1wb3J0IHtJbXBvcnRSdWxlLCBOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi9NaXNjUnVsZXNcIlxyXG5pbXBvcnQge3Nfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlfSBmcm9tIFwiLi9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8vIERlZmluZSBzeW1ib2xzIHRoYXQgYXJlIHVzZWQgZm9yIGtlZXBpbmcgaW1wb3J0YW50IGluZm9ybWF0aW9uIG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uXHJcbi8vIGluc3RhbmNlcyB0aGF0IHdlIGRvbid0IHdhbnQgdG8gYmUgdmlzaWJsZSB0byBkZXZlbG9wZXJzLlxyXG5cclxuLyoqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHBvaW50aW5nIHRvIHRoZSBzaW5nbHRvbiBpbnN0YW5jZS4gKi9cclxuY29uc3Qgc3ltSW5zdGFuY2UgPSBTeW1ib2woXCJkZWZpbml0aW9uXCIpO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIHBvaW50aW5nIHRvIHRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCB0aGF0IGlzXHJcbiAqIHJlc3BvbnNpYmxlIGZvciBwcm9jZXNzaW5nIHJ1bGVzLlxyXG4gKi9cclxuY29uc3Qgc3ltQ29udGFpbmVyID0gU3ltYm9sKFwiY29udGFpbmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVDb250YWluZXIgY2xhc3MgaXMgYSBzaGFkb3cgc3RydWN0dXJlIHRoYXQgYWNjb21wYW5pZXMgZXZlcnkgcHJvY2Vzc2VkIHN0eWxlIGRlZmluaXRpb25cclxuICogb2JqZWN0LiBTaW5jZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYW4gZXhwb3J0ZWQgY2xhc3MgdmlzaWJsZSB0byBkZXZlbG9wZXJzLCB3ZSBkb24ndCB3YW50XHJcbiAqIHRvIGhhdmUgYSBsb3Qgb2YgZnVuY3Rpb25hbGl0eSBpbiBpdC4gVGhlIFJ1bGVDb250YWluZXIgb2JqZWN0IGlzIGxpbmtlZCB0byB0aGUgU3R5bGVEZWZpbml0aW9uXHJcbiAqIG9iamVjdCB2aWEgdGhlIFtzeW1SdWxlQ29udGFpbmVyXSBzeW1ib2wuIEl0IGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgcGFyc2luZyBydWxlXHJcbiAqIGRlZmluaXRpb25zLCBuYW1lIGFzc2lnbm1lbnQgYW5kIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG4gKi9cclxuY2xhc3MgUnVsZUNvbnRhaW5lciBpbXBsZW1lbnRzIElUb3BMZXZlbFJ1bGVDb250YWluZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBuYW1lOiBzdHJpbmcsIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuZW1iZWRkaW5nQ29udGFpbmVyID0gZW1iZWRkaW5nQ29udGFpbmVyO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmluaXRpb25DbGFzcyA9IGluc3RhbmNlLmNvbnN0cnVjdG9yIGFzIElTdHlsZURlZmluaXRpb25DbGFzcztcclxuICAgICAgICB0aGlzLnBhcmVudCA9IGluc3RhbmNlLiRwYXJlbnQ7XHJcblx0XHR0aGlzLm93bmVyID0gaW5zdGFuY2UuJG93bmVyO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID0gMDtcclxuXHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucHJvY2VzcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwdXQgcmVmZXJlbmNlIHRvIHRoaXMgY29udGFpbmVyIGluIHRoZSBzeW1ib2wgcHJvcGVydHkgb2YgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0XHR0aGlzLmluc3RhbmNlW3N5bUNvbnRhaW5lcl0gPSB0aGlzO1xyXG5cclxuXHRcdC8vIGdldCBjb250YWluZXJzIGZvciB0aGUgcGFyZW50IGFuZCBvd25lciBzdHlsZSBkZWZpbml0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KVxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudENvbnRhaW5lciA9IHRoaXMucGFyZW50W3N5bUNvbnRhaW5lcl07XHJcblxyXG5cdFx0aWYgKHRoaXMub3duZXIpXHJcblx0XHRcdHRoaXMudG9wTGV2ZWxDb250YWluZXIgPSB0aGlzLm93bmVyW3N5bUNvbnRhaW5lcl07XHJcblxyXG5cdFx0Ly8gaWYgb3VyIGNvbnRhaW5lciBoYXMgcGFyZW50IGNvbnRhaW5lciwgcHJlZml4IG91ciBuYW1lIHdpdGggdGhlIHVwcGVyIG9uZVxyXG5cdFx0aWYgKHRoaXMucGFyZW50Q29udGFpbmVyKVxyXG5cdFx0XHR0aGlzLm5hbWUgPSBgJHt0aGlzLnBhcmVudENvbnRhaW5lci5uYW1lfV8ke3RoaXMubmFtZX1gO1xyXG5cclxuXHRcdHRoaXMuaW1wb3J0cyA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lc3BhY2VzID0gW107XHJcblx0XHR0aGlzLnZhcnMgPSBbXTtcclxuXHRcdHRoaXMucmVmcyA9IFtdO1xyXG5cdFx0dGhpcy5vdGhlclJ1bGVzID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aGVtLlxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUHJvcGVydHkoIHByb3BOYW1lLCB0aGlzLmluc3RhbmNlW3Byb3BOYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBjcmVhdGVzIG5hbWVzIGZvciBjbGFzc2VzLFxyXG5cdC8vIElEcywgYW5pbWF0aW9ucyBhbmQgY3VzdG9tIHZhcmlhYmxlcy5cclxuXHRwcml2YXRlIHByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFN0eWxlRGVmaW5pdGlvbilcclxuXHRcdFx0dGhpcy5wcm9jZXNzUmVmZXJlbmNlKCBwcm9wVmFsKVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFZhclJ1bGUpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1ZhclJ1bGUoIHByb3BOYW1lLCBwcm9wVmFsKVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGUpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1J1bGUoIHByb3BOYW1lLCBwcm9wVmFsKTtcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlTGlrZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZUxpa2UoIHByb3BOYW1lLCBwcm9wVmFsKVxyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzQXJyYXkoIHByb3BWYWwpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyByZWZlcmVuY2UgdG8gYW5vdGhlciBzdHlsZSBkZWZpbml0aW9uIGNyZWF0ZWQgYnkgdGhlICR1c2UgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBwcm9jZXNzUmVmZXJlbmNlKCByZWY6IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgaW5zdGFuY2UgaGFzIG5vdCBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCBwcm9jZXNzIGl0IGFuZCBpbmRpY2F0ZSB0aGF0IGl0IGlzXHJcblx0XHQvLyBlbWJlZGRlZCBpbnRvIG91ciBjb250YWluZXIgYmVjYXVzZSBvbmx5IGRlZmluaXRpb25zIGNyZWF0ZWQgd2l0aCB0aGUgJGVtYmVkIGZ1bmN0aW9uXHJcblx0XHQvLyBhcmUgbm90IHByb2Nlc3NlZC5cclxuXHRcdHByb2Nlc3NJbnN0YW5jZSggcmVmLCB0aGlzKTtcclxuXHRcdHRoaXMucmVmcy5wdXNoKCByZWYpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIHByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgdmFyT2JqOiBWYXJSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzdHlsZXNoZWV0LlxyXG5cdFx0aWYgKHZhck9iai5jb250YWluZXIpXHJcblx0XHRcdHZhck9iaiA9IHZhck9iai5jbG9uZSgpO1xyXG5cclxuXHRcdHZhck9iai5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblx0XHR0aGlzLnZhcnMucHVzaCggdmFyT2JqKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIGNvdW50ZXIgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1J1bGVMaWtlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcnVsZUxpa2U6IFJ1bGVMaWtlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzdHlsZXNoZWV0LlxyXG5cdFx0aWYgKHJ1bGVMaWtlLmNvbnRhaW5lcilcclxuICAgICAgICAgICAgcnVsZUxpa2UgPSBydWxlTGlrZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICBydWxlTGlrZS5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gUnVsZS1kZXJpdmVkIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcnVsZTogUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgcnVsZSBvYmplY3QgaXMgYWxyZWFkeSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhbm90aGVyIGluc3RhbmNlLCB3ZSBjcmVhdGUgYSBjbG9uZVxyXG5cdFx0Ly8gb2YgdGhlIHJ1bGUgYW5kIHNldCBpdCB0byBvdXIgaW5zdGFuY2UuXHJcblx0XHRpZiAocnVsZS5vd25lckNvbnRhaW5lcilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lKVxyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdID0gcnVsZSA9IHJ1bGUuY2xvbmUoKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gVE9ETzogc3VwcG9ydCBhbHJlYWR5IHVzZWQgcnVsZXMgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRydWxlLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHJcblx0XHRpZiAocnVsZSBpbnN0YW5jZW9mIEltcG9ydFJ1bGUpXHJcblx0XHRcdHRoaXMuaW1wb3J0cy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBOYW1lc3BhY2VSdWxlKVxyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMub3RoZXJSdWxlcy5wdXNoKCBydWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJ1bGVzIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc0FycmF5KCBwcm9wVmFsczogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wVmFscyB8fCBwcm9wVmFscy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRob3NlIHRoYXQgYXJlIHJ1bGVzLlxyXG5cdFx0Zm9yKCBsZXQgcHJvcFZhbCBvZiBwcm9wVmFscylcclxuXHRcdFx0dGhpcy5wcm9jZXNzUHJvcGVydHkoIG51bGwsIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdHB1YmxpYyBnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHNldEN1c3RvbVZhclZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlKVxyXG4gICAgICAgICAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggdGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbnQsIHNjaGVkdWxlclR5cGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZXMgYSBnbG9iYWxseSB1bmlxdWUgQ1NTIG5hbWUgZm9yIHRoZSBnaXZlbiBydWxlIG5hbWUgdW5sZXNzIHRoaXMgcnVsZSBuYW1lIGFscmVhZHlcclxuXHQgKiBleGlzdHMgZWl0aGVyIGluIGEgYmFzZSBjbGFzcyBvciBpbiB0aGUgY2hhaW4gb2YgcGFyZW50IGdyb3VwaW5nIHJ1bGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGlmIHJ1bGUgbmFtZSB3YXMgbm90IHNwZWNpZmllZCwgZ2VuZXJhdGUgaXQgdW5pcXVlbHk7IG90aGVyd2lzZSwgY2hlY2sgd2hldGhlciB3ZVxyXG5cdFx0Ly8gYWxyZWFkeSBoYXZlIHRoaXMgcnVsZSBuYW1lOiBpZiB5ZXMsIHJldHVybiB0aGUgYWxyZWFkeSBhc3NpZ25lZCBuYW1lLiBJZiB3ZSBkaWRuJ3RcclxuXHRcdC8vIGZpbmQgdGhlIG5hbWUsIHRyeSB0byBmaW5kIGl0IGluIHRoZSBiYXNlIGNsYXNzZXMpOyBpZiBub3QgZm91bmQgdGhlcmUsIGdlbmVyYXRlIGl0XHJcblx0XHQvLyB1c2luZyB0aGlzIGNvbnRhaW5lcidzIG5hbWUgYW5kIHRoZSBydWxlIG5hbWUgKG5vdGUgdGhhdCBkZXBlbmRpbmcgb24gdGhlIG1vZGUsIGJvdGhcclxuXHRcdC8vIGNhbiBiZSBnZW5lcmF0ZWQgdW5pcXVlbHkpLlxyXG5cdFx0aWYgKCFydWxlTmFtZSlcclxuXHRcdFx0cmV0dXJuIGdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdFx0ZWxzZSBpZiAocnVsZU5hbWUgaW4gdGhpcy5pbnN0YW5jZSAmJiBcIm5hbWVcIiBpbiB0aGlzLmluc3RhbmNlW3J1bGVOYW1lXSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdLm5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGZpbmQgb3V0IGlmIHRoZXJlIGlzIGEgcnVsZSB3aXRoIHRoaXMgbmFtZSBkZWZpbmVkIGluIGEgc3R5bGVzaGVldCBpbnN0YW5jZSBjcmVhdGVkIGZvclxyXG5cdFx0XHQvLyBhIGNsYXNzIGZyb20gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy5cclxuXHRcdFx0bGV0IGV4aXN0aW5nTmFtZSA9IGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIHRoaXMuZGVmaW5pdGlvbkNsYXNzLCBydWxlTmFtZSk7XHJcblx0XHRcdHJldHVybiBleGlzdGluZ05hbWUgPyBleGlzdGluZ05hbWUgOiBnZW5lcmF0ZU5hbWUoIHRoaXMubmFtZSwgcnVsZU5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyBhbGwgcnVsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciB0byBlaXRoZXIgdGhlIHN0eWxlIHNoZWV0IG9yIGdyb3VwaW5nIHJ1bGUuICovXHJcblx0cHVibGljIGluc2VydFJ1bGVzKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXMgdGhleSBtdXN0IGJlIGJlZm9yZSBvdGhlciBydWxlcy4gSWYgdGhlIHBhcmVudCBpcyBhIGdyb3VwaW5nXHJcblx0XHQvLyBydWxlLCBkb24ndCBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhdCBhbGxcclxuXHRcdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFjdGl2YXRlIHJlZmVyZW5jZWQgc3R5bGUgZGVmaW5pdGlvbnNcclxuXHRcdGZvciggbGV0IHJlZiBvZiB0aGlzLnJlZnMpXHJcblx0XHRcdHJlZltzeW1Db250YWluZXJdLmFjdGl2YXRlKCk7XHJcblxyXG5cdFx0Ly8gaXNlcnQgb3VyIGN1c3RvbSB2YXJpYWJsZXMgaW4gYSBcIjpyb290XCIgcnVsZVxyXG5cdFx0aWYgKHRoaXMudmFycy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgOnJvb3QgeyR7dGhpcy52YXJzLm1hcCggdmFyT2JqID0+XHJcblx0XHRcdFx0dmFyT2JqLnRvQ3NzU3RyaW5nKCkpLmZpbHRlciggdiA9PiB2ICE9IG51bGwpLmpvaW4oXCI7XCIpfX1gLCBwYXJlbnQpIGFzIENTU1N0eWxlUnVsZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbnNlcnQgYWxsIG90aGVyIHJ1bGVzXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRwdWJsaWMgY2xlYXJSdWxlcygpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIGltcG9ydCBhbmQgbmFtZXNwYWNlIHJ1bGVzIGNhbiBvbmx5IGV4aXN0IGluIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cclxuXHRcdC8vIGRlYWN0aXZhdGUgaW1wb3J0ZWQgc3R5bGVzaGVldHNcclxuXHRcdGZvciggbGV0IHJlZiBvZiB0aGlzLnJlZnMpXHJcblx0XHRcdHJlZltzeW1Db250YWluZXJdLmRlYWN0aXZhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgdGhpcyBzdHlsZXNoZWV0IGludG8gRE9NLiAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCsrdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDEpXHJcblx0XHR7XHJcblx0XHRcdC8vIG9ubHkgdGhlIHRvcC1sZXZlbCBub3QtZW1iZWRkZWQgc3R5bGUgZGVmaW5pdGlvbnMgY3JlYXRlIHRoZSBgPHN0eWxlPmAgZWxlbWVudFxyXG5cdFx0XHRpZiAodGhpcy5lbWJlZGRpbmdDb250YWluZXIpXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IHRoaXMuZW1iZWRkaW5nQ29udGFpbmVyLmRvbVN0eWxlRWxtO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtLmlkID0gdGhpcy5uYW1lO1xyXG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuZG9tU3R5bGVFbG0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gdGhpcy50b3BMZXZlbENvbnRhaW5lci5kb21TdHlsZUVsbTtcclxuXHJcblx0XHRcdHRoaXMuaW5zZXJ0UnVsZXMoIHRoaXMuZG9tU3R5bGVFbG0hLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGlzIHN0eWxlc2hlZXQgZnJvbSBET00uICovXHJcblx0cHVibGljIGRlYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGd1YXJkIGZyb20gZXh0cmEgZGVhY3RpdmF0ZSBjYWxsc1xyXG5cdFx0aWYgKHRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKC0tdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2xlYXJSdWxlcygpO1xyXG5cclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvbiBjcmVhdGVzIHRoZSBgPHN0eWxlPmAgZWxlbWVudFxyXG5cdFx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0hLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBXcml0ZXMgYWxsIHJ1bGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBnaXZlbiBzdHJpbmcuICovXHJcblx0cHVibGljIHNlcmlhbGl6ZVJ1bGVzKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXMgdGhleSBtdXN0IGJlIGJlZm9yZSBvdGhlciBydWxlcy4gSWYgdGhlIHBhcmVudCBpcyBhIGdyb3VwaW5nXHJcblx0XHQvLyBydWxlLCBkb24ndCBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhdCBhbGxcclxuXHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLnNlcmlhbGl6ZSggY3R4KSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLnNlcmlhbGl6ZSggY3R4KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWN0aXZhdGUgcmVmZXJlbmNlZCBzdHlsZSBkZWZpbml0aW9uc1xyXG4gICAgICAgIGZvciggbGV0IHJlZiBvZiB0aGlzLnJlZnMpXHJcbiAgICAgICAgICAgIGN0eC5hZGRTdHlsZURlZmluaXRpb24oIHJlZik7XHJcblxyXG5cdFx0Ly8gc2VyaWFsaXplIG91ciBjdXN0b20gdmFyaWFibGVzIGluIGEgXCI6cm9vdFwiIHJ1bGVcclxuXHRcdGlmICh0aGlzLnZhcnMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0Y3R4LmFkZFJ1bGVUZXh0KCBgOnJvb3QgeyR7dGhpcy52YXJzLm1hcCggdmFyT2JqID0+IHZhck9iai50b0Nzc1N0cmluZygpKS5maWx0ZXIoIHYgPT4gdiAhPSBudWxsKS5qb2luKFwiO1wiKX19YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2VyaWFsaXplIGFsbCBvdGhlciBydWxlc1xyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5zZXJpYWxpemUoIGN0eCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGNvbnRhaW5lciBpcyBmb3IgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uLlxyXG5cdHByaXZhdGUgZ2V0IGlzVG9wTGV2ZWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm93bmVyID09PSBudWxsIHx8IHRoaXMub3duZXIgPT09IHRoaXMuaW5zdGFuY2UgfVxyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgcHJvY2Vzc2VkLlxyXG5cdHB1YmxpYyBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzXHJcblxyXG5cdC8vIE5hbWUgb2YgdGhpcyBjb250YWluZXIsIHdoaWNoLCBkZXBlbmRpbmcgb24gdGhlIG1vZGUsIGlzIGVpdGhlciB0YWtlbiBmcm9tIHRoZSBjbGFzc1xyXG5cdC8vIGRlZmluaXRpb24gbmFtZSBvciBnZW5lcmF0ZWQgdW5pcXVlbHkuXHJcblx0cHJpdmF0ZSBuYW1lOiBzdHJpbmdcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHBhcmVudCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBncm91cGluZyBydWxlcyB0aGF0XHJcblx0Ly8gbGVhZCB0byB0aGlzIHJ1bGUgY29udGFpbmVyLiBGb3IgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb25zLCB0aGlzIGlzIHVuZGVmaW5lZC5cclxuXHRwcml2YXRlIHBhcmVudD86IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdGhhdCBiZWxvbmdzIHRvIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW50aW9uLiBJZiBvdXIgY29udGFpbmVyIGlzIHRvcC1sZXZlbCxcclxuXHQvLyB0aGlzIHByb3BlcnR5IGlzIHVuZGVmaW5lZC5cclxuXHRwcml2YXRlIHBhcmVudENvbnRhaW5lcj86IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbiB0aGUgY2hhaW4gb2YgZ3JvdXBpbmcgcnVsZXMgdGhhdFxyXG5cdC8vIGxlYWQgdG8gdGhpcyBydWxlIGNvbnRhaW5lci4gRm9yIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9ucywgdGhpcyBwb2ludHMgdG8gdGhlIHNhbWVcclxuXHQvLyBzaW5nbGV0b24gZGVmaW5pdGlvbiBpbnN0YW5jZSBhcyB0aGUgJ2luc3RhbmNlJyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIG93bmVyOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRoYXQgYmVsb25ncyB0byB0aGUgb3duZXIgc3R5bGUgZGVmaW50aW9uLiBJZiBvdXIgY29udGFpbmVyIGlzIHRvcC1sZXZlbCxcclxuXHQvLyB0aGlzIHByb3BlcnR5IHBvaW50cyB0byBgdGhpc2AuIE5hbWVzIGZvciBuYW1lZCBydWxlcyBhcmUgY3JlYXRlZCB1c2luZyB0aGlzIGNvbnRhaW5lci5cclxuXHRwcml2YXRlIHRvcExldmVsQ29udGFpbmVyOiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBDb250YWluZXIgY29ycmVzcG9uZGluZyB0byB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSB0aGF0IGlzIGVtYmVkZGluZyBvdXIgaW5zdGFuY2VcclxuXHQvLyAodGhhdCBpcywgdGhlIGluc3RhbmNlIGNvcnJlc3BvbmRpbmcgdG8gb3VyIGNvbnRhaW5lcikuIElmIGRlZmluZWQsIHRoaXMgY29udGFpbmVyJ3NcclxuXHQvLyBgPHN0eWxlPmAgZWxlbWVudCBpcyB1c2VkIHRvIGluc2VydCBDU1MgcnVsZXMgaW50byBpbnN0ZWFkIG9mIHRvcExldmVsQ29udGFpbmVyLlxyXG5cdHByaXZhdGUgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gTGlzdCBvZiByZWZlcmVuY2VzIHRvIG90aGVyIHN0eWxlIGRlZmluaXRpb25zIGNyZWFlZCB2aWEgdGhlICR1c2UgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSByZWZzOiBTdHlsZURlZmluaXRpb25bXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBAaW1wb3J0IHJ1bGVzXHJcblx0cHJpdmF0ZSBpbXBvcnRzOiBJbXBvcnRSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQG5hbWVzcGFjZSBydWxlc1xyXG5cdHByaXZhdGUgbmFtZXNwYWNlczogTmFtZXNwYWNlUnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIGN1c3RvbSB2YXJpYWJsZSBydWxlcy5cclxuXHRwcml2YXRlIHZhcnM6IFZhclJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBydWxlcyB0aGF0IGFyZSBub3QgaW1wb3J0cywgbmFtZXNwYWNlcywgY3VzdG9tIHZhcnMsIHJlZmVyZW5jZXMgb3IgZ3JvdXBpbmcgcnVsZXMuXHJcblx0cHJpdmF0ZSBvdGhlclJ1bGVzOiBSdWxlW107XHJcblxyXG5cdC8vIFwiOnJvb3RcIiBydWxlIHdoZXJlIGFsbCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciBhcmUgZGVmaW5lZC5cclxuXHRwcml2YXRlIGNzc0N1c3RvbVZhclN0eWxlUnVsZTogQ1NTU3R5bGVSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIGNvdW50IG9mIGFjdGl2YXRpb24gcmVxdWVzdHMuXHJcblx0cHJpdmF0ZSBhY3RpdmF0aW9uUmVmQ291bnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gRE9NIHN0eWxlIGVsZW1udFxyXG5cdHB1YmxpYyBkb21TdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudCB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE5hbWUgZ2VuZXJhdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19lbmFibGVTaG9ydE5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHNfdXNlVW5pcXVlU3R5bGVOYW1lcyA9IGVuYWJsZTtcclxuXHRzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXggPSBwcmVmaXggPyBwcmVmaXggOiBcIm5cIjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCBuYW1lcyBmb3Igc3R5bGUgZWxlbWVudHMgKGNsYXNzZXMsICBhbmltYXRpb25zLCBldGMuKVxyXG4gKiBCeSBkZWZhdWx0IHRoaXMgZmxhZyBpcyB0cnVlIGluIHRoZSBSZWxlYXNlIGJ1aWxkIG9mIHRoZSBsaWJyYXJ5IGFuZCBmYWxzZSBpbiB0aGUgRGVidWcgYnVpbGQuXHJcbiAqL1xyXG5sZXQgc191c2VVbmlxdWVTdHlsZU5hbWVzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbi8vLyAjaWYgREVCVUdcclxuc191c2VVbmlxdWVTdHlsZU5hbWVzID0gZmFsc2U7XHJcbi8vLyAjZW5kaWZcclxuXHJcbi8qKlxyXG4gKiBQcmVmaXggdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgc3R5bGUgbmFtZXMuIElmIHVuZGVmaW5lZCwgYSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKi9cclxubGV0IHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IFwiblwiO1xyXG5cclxuLyoqIE5leHQgbnVtYmVyIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIGlkZW50aWZpZXJzLiAqL1xyXG5sZXQgc19uZXh0VW5pcXVlSUQgPSAxO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIG5hbWUgdG8gdXNlIGZvciB0aGUgZ2l2ZW4gcnVsZSBmcm9tIHRoZSBnaXZlbiBzdHlsZSBzaGVldC5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTmFtZSggc2hlZXROYW1lOiBzdHJpbmcsIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiBzX3VzZVVuaXF1ZVN0eWxlTmFtZXNcclxuXHRcdD8gZ2VuZXJhdGVVbmlxdWVOYW1lKCBzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpXHJcblx0XHQ6IGAke3NoZWV0TmFtZX1fJHtydWxlTmFtZX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgbmFtZSwgd2hpY2ggY2FuIGJlIHVzZWQgZWl0aGVyIGZvciBzdHlsZSBlbGVtZW50J3MgSUQgb3Igb3IgY2xhc3MsXHJcbiAqIGlkZW50aWZpZXIgb3IgYW5pbWF0aW9uIG5hbWUuIE5hbWVzIGFyZSBnZW5lcmF0ZWQgdXNpbmcgYSBzaW1wbGUgaW5jcmVtZW50aW5nIG51bWJlci5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlTmFtZSggcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6IHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeCkgKyBzX25leHRVbmlxdWVJRCsrO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIExvb2tzIHVwIGEgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBpbiB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uXHJcbi8vIGNsYXNzLiBJZiBmb3VuZCBhbmQgaWYgdGhlIHByb3BlcnR5IGlzIGEgcnVsZSwgdGhlbiByZXR1cm5zIHRoZSBuYW1lIGFzc2lnbmVkIGZvciBpdC5cclxuZnVuY3Rpb24gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcbntcclxuXHRpZiAoIWRlZmluaXRpb25DbGFzcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyBsb29wIG92ZXIgcHJvdG90eXBlc1xyXG4gICAgZm9yKCBsZXQgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBkZWZpbml0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICBiYXNlQ2xhc3MgIT09IFN0eWxlRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgICAgIGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggYmFzZUNsYXNzKSlcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgYmFzZSBjbGFzcyBhbHJlYWR5IGhhcyBhbiBhc3NvY2lhdGVkIGluc3RhbmNlOyBpZiB5ZXMsIGNoZWNrIHdoZXRoZXJcclxuXHRcdC8vIGl0IGhhc2UgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBydWxlIG5hbWUuIElmIHllcywgdGhlbiB1c2UgdGhpcyBydWxlJ3MgYWxyZWFkeVxyXG4gICAgICAgIC8vIGdlbmVyYXRlZCBuYW1lIChpZiBleGlzdHMpLlxyXG5cdFx0aWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSkpXHJcblx0XHR7XHJcbiAgICAgICAgICAgIGxldCBiYXNlSW5zdCA9IGJhc2VDbGFzc1tzeW1JbnN0YW5jZV07XHJcblx0XHRcdGlmIChiYXNlSW5zdCAmJiAgYmFzZUluc3RbcnVsZU5hbWVdICE9IG51bGwgJiYgXCJuYW1lXCIgaW4gYmFzZUluc3RbcnVsZU5hbWVdKVxyXG5cdFx0XHRcdHJldHVybiBiYXNlSW5zdFtydWxlTmFtZV0ubmFtZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm9jZXNzaW5nIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgYXNzaWducyBuYW1lcyB0byBpdHMgcnVsZXMuXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdlIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gaW5zdGFuY2UgYWxyZWFkeVxyXG4gKiBjcmVhdGVkIGZvciBpdCBhcyBhIGNsYXNzIHdpbGwgaGF2ZSBvbmx5IGEgc2luZ2xlIGFzc29jaWF0ZWQgaW5zdGFuZSBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXNcclxuICogdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAqIFxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCAoYW4gaW5zdGFuY2Ugb2YgdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcykgdGhlbiB3ZSBjaGVjayB3aGV0aGVyXHJcbiAqIGl0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBJZiB5ZXMsIHdlIGp1c3QgcmV0dXJuIGl0IGJhY2s7IGlmIG5vLCB3ZSBhc3NpZ24gbmV3IHVuaXF1ZSBuYW1lc1xyXG4gKiB0byBpdHMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3M6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuXHRwYXJlbnQ/OiBTdHlsZURlZmluaXRpb24pOiBTdHlsZURlZmluaXRpb24gfCBudWxsXHJcbntcclxuXHRpZiAoIWluc3RPckNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGluc3RPckNsYXNzIGhhcyB0eXBlIFwib2JqZWN0XCIgaWYgaXQgaXMgYW4gaW5zdGFuY2UgYW5kIFwiZnVuY3Rpb25cIiBpZiBpdCBpcyBhIGNsYXNzXHJcblx0aWYgKHR5cGVvZiBpbnN0T3JDbGFzcyA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRwcm9jZXNzSW5zdGFuY2UoIGluc3RPckNsYXNzKTtcclxuXHRcdHJldHVybiBpbnN0T3JDbGFzcztcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHByb2Nlc3NDbGFzcyggaW5zdE9yQ2xhc3MsIHBhcmVudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBieSBjcmVhdGluZyBpdHMgaW5zdGFuY2UgYW5kIGFzc29jaWF0aW5nIGFcclxuICogcnVsZSBjb250YWluZXIgb2JqZWN0IHdpdGggaXQuIFRoZSBjbGFzcyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5zdGFuY2UgdXNpbmcgYVxyXG4gKiBTeW1ib2wgcHJvcGVydHkuIFRoZSBwYXJlbnQgcGFyYW1ldGVyIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgc3R5bGUgZGVmaWl0aW9uXHJcbiAqIG9iamVjdCBvciBudWxsIGlmIHRoZSBnaXZlbiBjbGFzcyBpcyBpdHNlbGYgYSB0b3AtbGV2ZWwgY2xhc3MgKHRoYXQgaXMsIGlzIG5vdCBhIGNsYXNzXHJcbiAqIHRoYXQgZGVmaW5lcyBydWxlcyB3aXRoaW4gbmVzdGVkIGdyb3VwaW5nIHJ1bGVzKS5cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NDbGFzcyggZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcblx0cGFyZW50PzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoaXMgZGVmaW5pdGlvbiBjbGFzcyBpcyBhbHJlYWR5IGFzc29jaWF0ZWQgd2l0aCBhbiBpbnN0YW5jZVxyXG4gICAgaWYgKGRlZmluaXRpb25DbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSkpXHJcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25DbGFzc1tzeW1JbnN0YW5jZV1cclxuXHJcbiAgICAvLyByZWN1cnNpdmVseSBwcm9jZXNzIGFsbCBiYXNlIGNsYXNzZXMgc28gdGhhdCBydWxlIG5hbWVzIGFyZSBnZW5lcmF0ZWQuIFdlIGRvbid0IGFjdGl2YXRlIHN0eWxlc1xyXG4gICAgLy8gZm9yIHRoZXNlIGNsYXNzZXMgYmVjYXVzZSBkZXJpdmVkIGNsYXNzZXMgd2lsbCBoYXZlIGFsbCB0aGUgcnVsZXMgZnJvbSBhbGwgdGhlIGJhc2UgY2xhc3Nlc1xyXG4gICAgLy8gYXMgdGhlaXIgb3duIGFuZCBzbyB0aGVzZSBydWxlcyB3aWxsIGJlIGFjdGl2YXRlZCBhcyBwYXJ0IG9mIHRoZSBkZXJpdmVkIGNsYXNzLlxyXG4gICAgbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZGVmaW5pdGlvbkNsYXNzKTtcclxuICAgIGlmIChiYXNlQ2xhc3MgIT09IFN0eWxlRGVmaW5pdGlvbilcclxuXHRcdHByb2Nlc3NDbGFzcyggYmFzZUNsYXNzLCBwYXJlbnQpO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgdGhlIGluc3RhbmNlIG9mIHRoZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgZGVmaW5pdGlvbkNsYXNzKCBwYXJlbnQpO1xyXG5cclxuXHRcdC8vIGdldCB0aGUgbmFtZSBmb3Igb3VyIGNvbnRhaW5lclxyXG5cdFx0bGV0IG5hbWUgPSBzX3VzZVVuaXF1ZVN0eWxlTmFtZXMgfHwgIWRlZmluaXRpb25DbGFzcy5uYW1lXHJcblx0XHRcdD8gZ2VuZXJhdGVVbmlxdWVOYW1lKClcclxuXHRcdFx0OiBkZWZpbml0aW9uQ2xhc3MubmFtZTtcclxuXHJcblx0XHRuZXcgUnVsZUNvbnRhaW5lciggaW5zdGFuY2UsIG5hbWUpO1xyXG5cdFx0ZGVmaW5pdGlvbkNsYXNzW3N5bUluc3RhbmNlXSA9IGluc3RhbmNlO1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBpbnN0YW50aWF0aW5nIFN0eWxlIERlZmluaXRpb24gQ2xhc3MgJyR7ZGVmaW5pdGlvbkNsYXNzLm5hbWV9J2AsIGVycik7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBhbmQgYXNzaWducyBuYW1lcyB0byBpdHMgcnVsZXMuIElmIHRoZVxyXG4gKiBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCwgd2UgZG8gbm90aGluZzsgb3RoZXJ3aXNlLCB3ZSBhc3NpZ24gbmV3IHVuaXF1ZSBuYW1lc1xyXG4gKiB0byBpdHMgcnVsZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXIpOiB2b2lkXHJcbntcclxuXHQvLyBpZiB0aGUgaW5zdGFuY2UgaXMgYWxyZWFkeSBwcm9jZXNzZWQsIGp1c3QgcmV0dXJuOyBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZVxyXG5cdC8vIGVtYmVkZGluZ0NvbnRhaW5lciBwYXJhbWV0ZXIuXHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBpbnN0YW5jZVtzeW1Db250YWluZXJdIGFzIFJ1bGVDb250YWluZXI7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGdldCB0aGUgbmFtZSBmb3Igb3VyIGNvbnRhaW5lclxyXG5cdGxldCBuYW1lID0gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0aWYgKCFzX3VzZVVuaXF1ZVN0eWxlTmFtZXMpXHJcblx0e1xyXG5cdFx0bGV0IGRlZmluaXRpb25DbGFzcyA9IGluc3RhbmNlLmNvbnN0cnVjdG9yO1xyXG5cdFx0aWYgKGRlZmluaXRpb25DbGFzcy5uYW1lKVxyXG5cdFx0XHRuYW1lICs9IFwiX1wiICsgZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBjcmVhdGUgY29udGFpbmVyIC0gdGhpcyB3aWxsIGFzc29jaWF0ZSB0aGUgbmV3IGNvbnRhaW5lciB3aXRoIHRoZSBpbnN0YW5jZSBhbmQgcHJvY2Vzc1xyXG5cdC8vIHRoZSBydWxlcy5cclxuXHRuZXcgUnVsZUNvbnRhaW5lciggaW5zdGFuY2UsIG5hbWUsIGVtYmVkZGluZ0NvbnRhaW5lcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgcnVsZSBjb250YWluZXIgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uKTogUnVsZUNvbnRhaW5lclxyXG57XHJcblx0cmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2Vbc3ltQ29udGFpbmVyXSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBhbmQgaW5zZXJ0cyBhbGwgaXRzIHJ1bGVzIGludG8gRE9NLiBJZiB0aGUgaW5wdXQgb2JqZWN0IGlzXHJcbiAqIG5vdCBhIHN0eWxlIGRlZmluaXRpb24gYnV0IGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgb2J0YWluIHN0eWxlIGRlZmluaXRpb24gYnkgY2FsbGluZyB0aGUgJHVzZVxyXG4gKiBmdW5jdGlvbi4gTm90ZSB0aGF0IGVhY2ggc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXNcclxuICogaXQgd2FzIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgaW5zZXJ0ZWQgdG8gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyXHJcbiAqIGdvZXMgdXAgdG8gMS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUluc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspXHJcblx0XHRcdHJ1bGVDb250YWluZXIuYWN0aXZhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlYWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGJ5IHJlbW92aW5nIGl0cyBydWxlcyBmcm9tIERPTS4gTm90ZSB0aGF0IGVhY2ggc3R5bGVcclxuICogZGVmaW5pdGlvbiBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmRcclxuICogZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlciBnb2VzIGRvd24gdG8gMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdFx0cnVsZUNvbnRhaW5lci5kZWFjdGl2YXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIHRvIHRoZSBnaXZlbiBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxue1xyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0ICAgIHJ1bGVDb250YWluZXIuc2VyaWFsaXplUnVsZXMoIGN0eCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJQ3VzdG9tVmFyLCBPbmVPck1hbnl9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuXHRQc2V1ZG9FbnRpdHksIENzc1NlbGVjdG9yLCBQYWdlUHNldWRvQ2xhc3MsIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHByb3BlcnRpZXMgdXNlZCBpbiB0aGUgW1tDb21iaW5lZFN0eWxlc2V0XV0gd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGRlcGVuZGVudCBydWxlcyAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3RvckNvbWJpbmF0b3IgPSBcIiZcIiB8IFwiJixcIiB8IFwiJiBcIiB8IFwiJj5cIiB8IFwiJitcIiB8IFwiJn5cIiB8IFwiLCZcIiB8IFwiICZcIiB8IFwiPiZcIiB8IFwiKyZcIiB8IFwifiZcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21iaW5lZFN0eWxlc2V0IHR5cGUgZXh0ZW5kcyB0aGUgU3R5bGVzZXQgdHlwZSB3aXRoIGNlcnRhaW4gcHJvcGVydGllcyB0aGF0IHByb3ZpZGVcclxuICogYWRkaXRpb25hbCBtZWFuaW5nIHRvIHRoZSBzdHlsZXNldCBhbmQgYWxsb3cgYnVpbGRpbmcgZGVwZW5kZW50IHN0eWxlIHJ1bGVzOlxyXG4gKiAtIFRoZSBgXCIrXCJgIHByb3BlcnR5IHNwZWNpZmllcyBvbmUgb3IgbW9yZSBwYXJlbnQgc3R5bGUgcnVsZXMuIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmdcclxuICogICBwYXJlbnQgcnVsZXMgdXNpbmcgYSBjb252ZW5pZW50IHN0eWxlLXByb3BlcnR5LWxpa2Ugbm90YXRpb24uXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIHBzZXVkbyBjbGFzcyBuYW1lcyAoZS5nLiBcIjpob3ZlclwiKSBvciBwc2V1ZG8gZWxlbWVudCBuYW1lcyAoZS5nLiBcIjo6YWZ0ZXJcIikuXHJcbiAqICAgVGhlc2UgcHJvcGVydGllcyBkZWZpbmUgYSBzdHlsZXNldCB0aGF0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHNlbGVjdG9yIG9idGFpbmVkIGJ5IHVzaW5nXHJcbiAqICAgdGhlIG9yaWdpbmFsIHN0eWxlc2V0J3Mgb3duZXIgZm9sbG93ZWQgYnkgdGhlIGdpdmVuIHBzZXVkbyBjbGFzcyBvciBwc2V1ZG8gZWxlbWVudC5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggbmFtZXMgb2YgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyAoZS5nLiBcIjpudGgtY2hpbGRcIikgb3IgcGFyYW1ldGVyaXplZFxyXG4gKiAgIHBzZXVkbyBlbGVtZW50cyAoZS5nLiBcIjo6c2xvdHRlZFwiKS4gVGhlc2UgcHJvcGVydGllcyBjb250YWluIGEgdHVwbGUsIHdoZXJlIHRoZSBmaXJzdFxyXG4gKiAgIGVsZW1lbnQgaXMgdGhlIHBhcmFtZXRlciBmb3IgdGhlIHNlbGVjdG9yIGFuZCB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgdGhlIHN0eWxlc2V0LlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIHRoZSBhbXBlcnNhbmQgc3ltYm9sICgnJicpIHRoYXQgY29udGFpbiBhcnJheXMgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIGVhY2hcclxuICogICBkZWZpbmluZyBhIHNlbGVjdG9yIGFuZCBhIHN0eWxlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBzZWxlY3Rvci4gU2VsZWN0b3JzIGNhbiB1c2UgdGhlXHJcbiAqICAgYW1wZXJzYW5kIHN5bWJvbCB0byByZWZlciB0byB0aGUgcGFyZW50IHN0eWxlIHNlbGVjdG9yLiBJZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpcyBub3QgdXNlZCxcclxuICogICB0aGUgc2VsZWN0b3Igd2lsbCBiZSBzaW1wbHkgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBzZWxlY3Rvci5cclxuICogXHJcbiAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBzdHlsZSBydWxlcyAoZS5nLiAkY2xhc3MpIGFjY2VwdCB0aGUgQ29tYmluZWRTdHlsZXNldCBhcyBhIHBhcmFtZXRlcixcclxuICogZm9yIGV4YW1wbGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIE15U3R5bGVzIGV4dGVuZHMgY3NzLlN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICBjbGFzczEgPSBjc3MuJGNsYXNzKHt9KVxyXG4gKiAgICAgY2xhc3MyID0gY3NzLiRjbGFzcyh7XHJcbiAqICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAqICAgICAgICAgXCI6aG92ZXJcIiA6IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiB9LFxyXG4gKiAgICAgICAgIFwiJlwiOiBbXHJcbiAqICAgICAgICAgICAgIFsgXCJsaSA+ICZcIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSBdLFxyXG4gKiAgICAgICAgICAgICBbIHRoaXMuY2xhc3MxLCB7IGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiB9IF1cclxuICogICAgICAgICBdXHJcbiAqICAgICB9KVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhpcyB3aWxsIHRyYW5zbGF0ZSB0byB0aGUgZm9sbG93aW5nIENTUyAoaW4gcmVhbGl0eSwgY2xhc3MgbmFtZXMgYXJlIGF1dG8tZ2VuZXJhdGVkKTpcclxuICogXHJcbiAqIGBgYGNzc1xyXG4gKiAuY2xhc3MyIHsgYmFja2dyb3VuZENvbG9yOiB3aGl0ZTsgfVxyXG4gKiAuY2xhc3MyOmhvdmVyIHsgYmFja2dyb3VuZENvbG9yOiBncmV5OyB9XHJcbiAqIGxpID4gLmNsYXNzMiB7IGJhY2tncm91bmRDb2xvcjogeWVsbG93OyB9XHJcbiAqIC5jbGFzczIuY2xhc3MxIHsgYmFja2dyb3VuZENvbG9yOiBvcmFuZ2U7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21iaW5lZFN0eWxlc2V0ID0gU3R5bGVzZXQgJlxyXG5cdHsgXCIrXCI/OiBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdIH0gJlxyXG5cdHsgW0sgaW4gUHNldWRvRW50aXR5XT86IENvbWJpbmVkU3R5bGVzZXQgfSAmXHJcblx0eyBbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eV0/OiBbSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlbS10sIENvbWJpbmVkU3R5bGVzZXRdW10gfSAmXHJcblx0eyBbSyBpbiBTZWxlY3RvckNvbWJpbmF0b3JdPzogW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdIH07XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcyB0aGF0IGhhdmUgYSBuYW1lOyB0aGF0IGlzLFxyXG4gKiBjbGFzcywgSUQsIGtleWZyYW1lcyBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHJ1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGRlcGVuZGVudCBydWxlcyBvZiBhIHN0eWxlIHJ1bGVcclxuICovXHJcbmV4cG9ydCB0eXBlIERlcGVuZGVudFJ1bGVzID1cclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIGtleW9mIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XT86IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGluZyBydWxlIGluIGEgc3R5bGUgc2hlZXQuIFN0eWxlIHJ1bGVzIGNhbiBiZSB1c2VkXHJcbiAqIGFueXdoZXJlIHdoZXJlIHN0eWxlIHByb3BlcnRpZXMgY2FuIGJlIGRlZmluZWQ6IGNsYXNzIHJ1bGVzLCBJRCBydWxlcywgc2VsZWN0b3IgcnVsZXMsXHJcbiAqIGtleWZyYW1lcywgZXRjLiBTdHlsZVJ1bGUgZGVmaW5lcyBhIHN0eWxlc2V0IGFuZCBjYW4gb3B0aW9uYWxseSBwb2ludCB0byBvbmUgb3IgbW9yZSBzdHlsZSBydWxlc1xyXG4gKiBmcm9tIHdoaWNoIGl0IGluaGVyaXRzLiBBIHN0eWxlc2V0IGNvbWJpbmVzIGFsbCB0aGUgcHJvcGVydGllcyBmcm9tIGl0cyBvd24gcHJvcGVydHkgYmxvY2sgYXNcclxuICogd2VsbCBhcyBmcm9tIGFsbCBvZiBzdHlsZSBydWxlcyBpdCBpbmhlcml0ZXMgZnJvbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cmVhZG9ubHkgc2VsZWN0b3JUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHNldFByb3A8SyBleHRlbmRzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQ+KCBuYW1lOiBLLCB2YWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSxcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIGN1c3RvbVZhciBJVmFyUnVsZSBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIGN1c3RvbVZhcjogSVZhclJ1bGU8Sz4sIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZFN0eWxlUnVsZSBpbnRlcmZhY2UgY29tYmluZXMgSVN0eWxlUnVsZSBhbmQgSU5hbWVkRW50aXR5IGludGVyZmFjZXMuIFRoaXMgaXMgdXNlZFxyXG4gKiBmb3IgY2xhc3MgYW5kIElEIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGNsYXNzIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc1J1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjbGFzcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cmVhZG9ubHkgY3NzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NOYW1lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNvbWJpbmF0aW9uIG9mIHR3byBvciBtb3JlIGNsYXNzIG5hbWVzLiBJdCBjYW4gYmVcclxuICogdXNlZCB0byBtYWtlIGl0IGVhc2llciB0byBjcmVhdGUgZWxlbWVudHMgd2l0aCBtb3JlIHRoYW4gb25lIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzTmFtZVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBOYW1lIG9mIGFsbCB0aGUgY2xhc3MgbmFtZXMgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0NsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUlEUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGVsZW1lbnQgSUQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJRFJ1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRyZWFkb25seSBjc3NJRE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbldheXBvaW50IHR5cGUgZGVmaW5lcyBhIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSB3YXlwb2ludCBpbiBhblxyXG4gKiBhbmltYXRpb24gc2VxdWVuY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25XYXlwb2ludCA9IE9uZU9yTWFueTxcImZyb21cIiB8IFwidG9cIiB8IG51bWJlcj47XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblN0eWxlcyB0eXBlIGRlZmluZXMgYSBvYmplY3QgY29udGFpbmluZyBzdHlsZSBwcm9wZXJ0aWVzIGZvciBhbiBhbmltYXRpb24gZnJhbWUuXHJcbiAqIFN0eWxlc2V0cyBmb3Iga2V5ZnJhbWVzIGFsbG93IGN1c3RvbSBwcm9wZXJ0aWVzICh2aWEgXCItLVwiKS4gQW5pbWF0aW9uIHN0eWxlc2V0IGNhbiBleHRlbmRcclxuICogb3RoZXIgc3R5bGUgcnVsZXM7IGhvd2V2ZXIsIGFueSBkZXBlbmRlbnQgcnVsZXMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3R5bGVzZXQgPSBTdHlsZXNldCAmIHsgXCIrXCI/OiBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdIH07XHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lIHR5cGUgZGVmaW5lcyBhIHNpbmdsZSBrZXlmcmFtZSB3aXRoaW4gYSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIFRoZSB3YXlwb2ludCBjYW4gYmUgc3BlY2lmaWVkIGFzIFwiZnJvbVwiIG9yIFwidG9cIiBzdHJpbmdzIG9yIGFzIGEgbnVtYmVyIDAgdG8gMTAwLCB3aGljaCB3aWxsIGJlXHJcbiAqIHVzZWQgYXMgYSBwZXJjZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRnJhbWUgPSBbQW5pbWF0aW9uV2F5cG9pbnQsIEFuaW1hdGlvblN0eWxlc2V0XTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvblJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGtleWZyYW1lc11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRyZWFkb25seSBmcmFtZVJ1bGVzOiBJQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvbkZyYW1lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNpbmdsZSBmcmFtZSBpbiB0aGUgQGtleWZyYW1lcyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50ICovXHJcblx0cmVhZG9ubHkgd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50O1xyXG5cclxuXHQvKiogU09NIGtleWZyYW1lIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NLZXlmcmFtZVJ1bGU6IENTU0tleWZyYW1lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdmFyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYXJSdWxlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+IGV4dGVuZHMgSU5hbWVkRW50aXR5LCBJQ3VzdG9tVmFyPFZhclZhbHVlVHlwZTxLPj5cclxue1xyXG5cdC8qKiBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuICovXHJcblx0cmVhZG9ubHkgdGVtcGxhdGU6IEs7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ291bnRlclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBuYW1lZCBjb3VudGVyIGRlZmluaXRpb24uIFVzZSB0aGlzIHJ1bGUgdG8gY3JlYXRlXHJcbiAqIGNvdW50ZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIGluIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZVxyXG4gKiBwcm9wZXJ0aWVzLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBjb3VudGVycyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlXHJcbiAqIGNvdW50ZXIgZGVmaW5pdGlvbnMuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRjb3VudGVyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudGVyUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRyZWFkb25seSBjb3VudGVyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAY291bnRlci1zdHlsZSBydWxlLlxyXG4vLyAgKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlclN0eWxlXV0gZnVuY3Rpb24uXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElDb3VudGVyU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGUsIElOYW1lZEVudGl0eVxyXG4vLyB7XHJcbi8vIFx0LyoqIFNPTSBjb3VudGVyLXN0eWxlIHJ1bGUgKi9cclxuLy8gXHRyZWFkb25seSBjc3NSdWxlOiBDU1NDb3VudGVyU3R5bGVSdWxlIHwgbnVsbDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJbXBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skaW1wb3J0XV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbXBvcnRSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gaW1wb3J0IHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NJbXBvcnRSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElGb250RmFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAZm9udC1mYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRmb250ZmFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9udEZhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NGb250RmFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVzcGFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRuYW1lc3BhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gbmFtZXNwYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NOYW1lc3BhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYWdlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRwYWdlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cmVhZG9ubHkgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NQYWdlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JpZExpbmVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZGVmaW5pdGlvbiBvZiBhIG5hbWVkIGdyaWQgbGluZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGdyaWRsaW5lXV0gZnVuY3Rpb24gb3IgY3JlYXRlZFxyXG4gKiB3aGVuIGEgZ3JpZCBhcmVhIGlzIGRlZmluZWQgdXNpbmcgdGhlIFtbJGdyaWRhcmVhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkTGluZVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGluZSBpcyBhIHN0YXJ0IG9yIGVuZCBsaW5lIG9mIGEgZ3JpZCBhcmVhLiBUaGUgdmFsdWUgaXMgdHJ1ZVxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgc3RhcnQgbGluZTsgZmFsc2UgaWYgdGhpcyBpcyB0aGUgZW5kIGxpbmU7IGFuZCB1bmRlZmluZWQgaWYgdGhlIGxpbmUgaXNcclxuICAgICAqIG5vdCByZWxhdGVkIHRvIGFueSBhcmVhLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGdyaWQgYXJlYSBvZiB3aGljaCB0aGUgbGluZSBpcyBlaXRoZXIgYSBzdGFydCBvciBhbiBlbmQgbGluZS4gSXQgaXMgZGVmaW5lZFxyXG4gICAgICogb25seSBpZiB0aGUgbGluZSBuYW1lIGVuZHMgd2l0aCBcIi1zdGFydFwiIG9yIFwiLWVuZFwiLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBhcmVhTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyaWRBcmVhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRlZmluaXRpb24gb2YgYSBuYW1lZCBncmlkIGFyZS4gR3JpZCBhcmVhIHJ1bGVcclxuICogZGVmaW5lcyB0d28gbGluZSBydWxlczogZm9yIGl0cyBzdGFydCBhbmQgZW5kIGxpbmVzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZ3JpZGFyZWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRBcmVhUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcbiAgICAvKiogU3RhcnQgbGluZSBvZiB0aGUgYXJlYS4gKi9cclxuICAgIHJlYWRvbmx5IHN0YXJ0TGluZTogSUdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvKiogRW5kIGxpbmUgb2YgdGhlIGFyZWEuICovXHJcbiAgICByZWFkb25seSBlbmRMaW5lOiBJR3JpZExpbmVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBgJHBhcmVudGAgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZVxyXG4gKiB0byB0aGUgcGFybnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gRGV2ZWxvcGVycyBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYWNjZXNzIHJ1bGVzIGluXHJcbiAqIHRoZSBjaGFpbiBvZiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMuIFdlIG5lZWQgdGhpcyBzeW1ib2wgdG8gYXZvaWQgZW51bWVyYXRpbmcgdGhlIGAkcGFyZW50YFxyXG4gKiBwcm9wZXJ0eSB3aGVuIHByb2Nlc3NpbmcgdGhlIHJ1bGVzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmNvbnN0IHN5bVBhcmVudCA9IFN5bWJvbChcInBhcmVudFwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbCB0aGF0IGlzIHVzZWQgYnkgdGhlIGAkb3duZXJgIHByb3BlcnR5IGluIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgdGhhdCBrZWVwcyByZWZlcmVuY2VcclxuICogdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBEZXZlbG9wZXJzIGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhY2Nlc3MgcnVsZXMgaW5cclxuICogdGhlIGNoYWluIG9mIG5lc3RlZCBncm91cGluZyBydWxlcy4gV2UgbmVlZCB0aGlzIHN5bWJvbCB0byBhdm9pZCBlbnVtZXJhdGluZyB0aGUgYCRvd25lcmBcclxuICogcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBzeW1Pd25lciA9IFN5bWJvbChcIm93bmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBjbGFzc2VzIHRoYXQgY29udGFpbiBkZWZpbmluaXRpb25zIG9mIENTUyBydWxlcy5cclxuICogQHR5cGVwYXJhbSBQIFBhcmVudCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBQYXJlbnQgb2YgdG9wLWx2ZWwgY2xhc3MgaXMgbnVsbC5cclxuICogQHR5cGVwYXJhbSBPIFRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBjbGFzcy4gVGhlIHRvcC1sZXZlbFxyXG4gKiBjbGFzcyBpcyBpdHMgb3duIG93bmVyLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlRGVmaW5pdGlvbjxQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFyZSBjcmVhdGVkIGRpcmVjdGx5IG9ubHkgYnkgdGhlICpzdHlsZWQgY29tcG9uZW50cyogLSB0aGF0IGlzLFxyXG5cdCAqIGNvbXBvbmVudHMgdGhhdCB1c2UgZGlmZmVyZW50IHN0eWxlcyBmb3IgZWFjaCBpbnN0YW5jZS4gT3RoZXJ3aXNlLCBzdHlsZSBkZWZpbml0aW9uXHJcblx0ICogY2xhc3MgaW5zdGFuY2VzIGFyZSBjcmVhdGVkIHdoZW4gZWl0aGVyIHRoZSBbWyR1c2VdXSBvciBbW2FjdGl2YXRlXV0gZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSBwYXJlbnQgUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcGFyZW50PzogUClcclxuXHR7XHJcblx0XHR0aGlzW3N5bVBhcmVudF0gPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIC8vIE93bmVyIGlzIHRha2VuIGZyb20gdGhlIHBhcmVudCBjbGFzczsgYSB0b3AtbGV2ZWwgY2xhc3MgaXMgaXRzIG93biBvd25lci5cclxuXHRcdHRoaXNbc3ltT3duZXJdID0gcGFyZW50ID8gcGFyZW50LiRvd25lciA6IHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBwYXJudCBvZiB0aGlzIHN0eWxlXHJcbiAgICAgKiBkZWZpbml0aW9uIG9iamVjdCBpbiB0aGUgY2hhaW4gb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLiBUaHJvdWdoIHRoaXMgbWVtYmVyLCBhbGwgcnVsZXNcclxuICAgICAqIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIHBhcmVudCBkZWZpbml0aW9uIGNsYXNzIGNhbiBiZSBhY2Nlc3NlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0ICRwYXJlbnQoKTogUCB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bVBhcmVudF07IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVmZXJzIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3aGljaCBpcyB0aGUgb3duZXIgb2ZcclxuXHQgKiB0aGlzIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LiBUaGUgb3duZXIgaXMgdGhlIHRvcC1sZXZlbCBjbGFzcyBpbiB0aGUgY2hhaW4gb2Ygc3R5bGVcclxuXHQgKiBkZWZpbml0aW9uIGNsYXNzZXMuIFRocm91Z2ggdGhpcyBtZW1iZXIsIGFsbCBydWxlcyBhbmQgb3RoZXIgbWVtYmVycyBkZWZpbmVkIGluIHRoZSBvd25lclxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3MgY2FuIGJlIGFjY2Vzc2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgJG93bmVyKCk6IE8gfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpc1tzeW1Pd25lcl07IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGNhbiBiZSBjcmVhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxQLE8+ID0gYW55LFxyXG4gICAgUCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueSwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKiBBbGwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIHNob3VsZCBjb25mb3JtIHRvIHRoaXMgY29uc3RydWN0b3IgKi9cclxuXHRuZXcoIHBhcmVudD86IFApOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyb3VwUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGdyb3VwaW5nIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JvdXBSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGRlZmluaW5nIHRoZSBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGVcclxuXHRyZWFkb25seSBydWxlczogVDtcclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTR3JvdXBpbmdSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdXBwb3J0c1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHN1cHBvcnRzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogRmxhZyBpbmRpY2F0ZWQgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGlzIHJ1bGUncyBxdWVyeSAqL1xyXG4gICAgcmVhZG9ubHkgaXNTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1N1cHBvcnRzUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWVkaWFSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRtZWRpYV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWVkaWFSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTTWVkaWFSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxlclR5cGUgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgY2FsbHMgdG8gdGhlXHJcbiAqIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBzY2hlZHVsZSB0aGUgd3JpdGluZyBvZiBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBTY2hlZHVsZXJUeXBlXHJcbntcclxuXHQvKipcclxuXHQgKiBTeW5jaHJvbm91cyBhY3RpdmF0aW9uIC0gc3R5bGUgZGVmaW5pdGlvbnMgYXJlIHdyaXR0ZW4gdG8gdGhlIERPTSB1cG9uIHRoZSBhY3RpdmF0ZVxyXG5cdCAqIGFuZCBkZWFjdGl2YXRlIGNhbGxzLlxyXG5cdCAqL1xyXG5cdFN5bmMgPSAxLFxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxscyB0byBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgYXJlIGFjY3VtdWxhdGVkIHVudGlsIHRoZSBuZXh0IGFuaW1hdGlvblxyXG5cdCAqIGZyYW1lIGFuZCB0aGVuIGV4ZWN1dGVkIGFsbHRvZ2V0aGVyLlxyXG5cdCAqL1xyXG5cdEFuaW1hdGlvbkZyYW1lLFxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxscyB0byBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgYXJlIGFjY3VtdWxhdGVkIHVudGlsIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIGZvcmNlRE9NVXBkYXRlIGZ1bmN0aW9uIGFuZCB0aGVuIGV4ZWN1dGVkIGFsbHRvZ2V0aGVyLlxyXG5cdCAqL1xyXG5cdE1hbnVhbCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTY2hlZHVsZXIgaW50ZXJmYWNlIHNob3VsZCBiZSBpbXBsZW1lbnRlZCBieSBjdXN0b20gc2NoZWR1bGVycy4gSXRzIG1ldGhvZHMgYXJlIGludm9rZWRcclxuICogYnkgdGhlIGFjdGl2YXRpb24gaW5mcmFzdHJ1Y3R1cmUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTY2hlZHVsZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBpbml0KCBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIHNjaGVkdWxlIGl0cyBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuXHRzY2hlZHVsZURPTVVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBjYW5jZWxzIGl0cyBzY2hlZHVsZWQgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcblx0Y2FuY2VsRE9NVXBkYXRlKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQge1NjaGVkdWxlclR5cGUsIFN0eWxlRGVmaW5pdGlvbiwgSVNjaGVkdWxlcn0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7YWN0aXZhdGVJbnN0YW5jZSwgZGVhY3RpdmF0ZUluc3RhbmNlfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7U3RyaW5nU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElBY3RpdmF0b3IgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHJlc3BvbnNpYmxlIGZvciBhIGNlcnRhaW4gdHlwZSBvZiBhY3RpdmF0aW9uXHJcbiAqIG1lY2hhbmlzbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRvclxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQgKiBhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0YWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBkZWFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQgKiBkZWFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRkZWFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gc2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICAgICAqIENTUyBzdHlsZSBvYmplY3QuXHJcblx0ICovXHJcbiAgICBzZXRTdHlsZVByb3BlcnR5KCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSwgbmFtZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICB2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm1zIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGZvcmNlRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGZvcmNlRE9NVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbmNlbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWxET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0Y2FuY2VsRE9NVXBkYXRlKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAqIENTUyBzdHlsZSBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVTdHlsZVByb3BlcnR5KCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSwgbmFtZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG57XHJcbiAgICBpZiAoIW5hbWUgJiYgdmFsdWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBpZiAocnVsZU9yRWxtIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uY3NzVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAocnVsZU9yRWxtIGFzIGFueSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoIG5hbWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcnVsZU9yRWxtLnN0eWxlLnNldFByb3BlcnR5KCBuYW1lLCB2YWx1ZSBhcyBzdHJpbmcsIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgc3R5bGVzZXQgPSB2YWx1ZSBhcyBTdHJpbmdTdHlsZXNldDtcclxuICAgICAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuICAgICAgICAgICAgcnVsZU9yRWxtLnN0eWxlW3Byb3BOYW1lXSA9IHN0eWxlc2V0W3Byb3BOYW1lXTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN5bmNocm9ub3VzQWN0aXZhdG9yIGNsYXNzIHJlcHJlc2VudHMgdGhlIHN5bmNocm9ub3VzIGFjdGl2YXRpb24gbWVjaGFuaXNtLCB3aGljaCB3cml0ZXNcclxuICogc3R5bGUgY2hhbmdlcyB0byB0aGUgRE9NIHdoZW4gdGhlIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgY2FsbGVkLlxyXG4gKi9cclxuY2xhc3MgU3luY2hyb25vdXNBY3RpdmF0b3IgaW1wbGVtZW50cyBJQWN0aXZhdG9yXHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKiBAcGFyYW0gZGVmaW5pdGlvblxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIDEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGRlYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqIEBwYXJhbSBkZWZpbml0aW9uXHJcblx0ICovXHJcblx0cHVibGljIGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRkZWFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIDEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIHNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAgICAgKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB1cGRhdGVTdHlsZVByb3BlcnR5KCBydWxlT3JFbG0sIG5hbWUsIHZhbHVlLCBpbXBvcnRhbnQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0cHVibGljIGZvcmNlRE9NVXBkYXRlKCk6IHZvaWQge31cclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbERPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWQge31cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBvYmplY3RzIHRoYXQgYXJlIHVzZWQgYnkgdGhlIFNjaGVkdWxpbmdBY3RpdmF0b3IgY2xhc3MgZm9yIHNldHRpbmcgcHJvcGVydHkgdmFsdWVzLlxyXG4gKiBXaGVuIGJvdGggbmFtZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhcmUgbnVsbCwgdGhlIHN0eWxlIHdpbGwgYmUgc2V0IHRvIGFuIGVtcHR5IHN0cmluZ1xyXG4gKiBlZmZlY3RpdmVseSByZW1vdmluZyBhbGwgc3R5bGVzIGZyb20gdGhlIGVsZW1lbnQgb3IgdGhlIHJ1bGUuXHJcbiAqL1xyXG5pbnRlcmZhY2UgU2NoZWR1bGVkU3R5bGVQcm9wVmFsdWVcclxue1xyXG5cdC8qKlxyXG4gICAgICogU3R5bGUgb2JqZWN0IGluIHdoaWNoIHRvIHNldCB0aGUgcHJvcGVydHkgdmFsdWUuIFRoZSBzdHlsZSBvYmplY3QgY2FuIGJlbG9uZyB0byBlaXRoZXIgYVxyXG4gICAgICogc3R5bGUgcnVsZWUgb3IgdG8gYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICovXHJcblx0cnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGU7XHJcblxyXG5cdC8qKlxyXG4gICAgICogRGFzaGUtY2FzZWQgcHJvcGVydHkgbmFtZSBpZiBzZXR0aW5nIGEgdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb3IgbnVsbCBpZiBzZXR0aW5nIHZhbHVlc1xyXG4gICAgICogb2YgbXVsdGlwbGUgcHJvcGVydGllcy5cclxuICAgICAqL1xyXG5cdG5hbWU6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogUHJvcGVydHkgdmFsdWUgaWYgc2V0dGluZyBhIHZhbHVlIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgU3RyaW5nU3R5bGVzZXQgb2JqZWN0IGlmIHNldHRpbmdcclxuICAgICAqIHZhbHVlcyBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLiBJZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQsIGl0IGlzIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuXHR2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcHJvcGVydHkgc2hvdWxkIGJlIG1hcmtlZCBcIiFpbXBvcnRhbnRcIi4gVGhpcyBmbGFnIGlzIGlnbm9yZWRcclxuICAgICAqIHdoZW4gc2V0dGluZyB2YWx1ZXMgb2YgbXVsdGlwbGUgcHJvcGVydGllcy5cclxuICAgICAqL1xyXG5cdGltcG9ydGFudD86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY2hlZHVsaW5nQWN0aXZhdG9yIGNsYXNzIGtlZXBzIGEgbWFwIG9mIFN0eWxlRGVmaW5pdGlvbiBpbnN0YW5jZXMgdGhhdCBhcmUgc2NoZWR1bGVkIGZvclxyXG4gKiBhY3RpdmF0aW9uIG9yIGRlYWN0aXZhdGlvbi4gRWFjaCBpbnN0YW5jZSBpcyBtYXBwZWQgdG8gYSByZWZlcm5jZSBjb3VudCwgd2hpY2ggaXMgaW5jcmVtZW50ZWRcclxuICogdXBvbiB0aGUgYWN0aXZhdGUgY2FsbHMgYW5kIGRlY3JlbWVudGVkIHVwb24gdGhlIGRlYWN0aXZhdGUgY2FsbHMuIFdoZW4gdGhlIGRvQWN0aXZhdGlvblxyXG4gKiBtZXRob2QgaXMgY2FsbGVkIFRoZSBzdHlsZSBkZWZpbml0aW9uIHdpbGwgYmUgZWl0aGVyIGFjdGl2YXRlZCBvciBkZWFjdGl2YXRlZCBiYXNlZCBvbiB3aGV0aGVyXHJcbiAqIHRoZSByZWZlcmVuY2UgY291bnQgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2NoZWR1bGluZ0FjdGl2YXRvciBpbXBsZW1lbnRzIElBY3RpdmF0b3Jcclxue1xyXG4gICAgLy8gTWFwIG9mIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW5zdGFuY2VzIHRvIHRoZSByZWZlcmVuY2UgY291bnQgb2YgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcblx0cHJpdmF0ZSBkZWZpbml0aW9ucyA9IG5ldyBNYXA8U3R5bGVEZWZpbml0aW9uLG51bWJlcj4oKTtcclxuXHJcbiAgICAvLyBBcnJheSBvZiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgdG8gYmUgc2V0L3JlbW92ZWQuXHJcbiAgICBwcml2YXRlIHByb3BzOiBTY2hlZHVsZWRTdHlsZVByb3BWYWx1ZVtdID0gW107XHJcbiAgICBcclxuICAgIC8vIG9wdGlvbmFsIHNjaGVkdWxlciBvYmplY3RcclxuICAgIHByaXZhdGUgc2NoZWR1bGVyPzogSVNjaGVkdWxlcjtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzY2hlZHVsZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzY2hlZHVsZXIuaW5pdCggKCkgPT4gdGhpcy5kb0RPTVVwZGF0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVmQ291bnQgPSB0aGlzLmRlZmluaXRpb25zLmdldCggZGVmaW5pdGlvbikgfHwgMDtcclxuXHRcdGlmIChyZWZDb3VudCA9PT0gLTEpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuZGVsZXRlKCBkZWZpbml0aW9uKTtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuc2V0KCBkZWZpbml0aW9uLCArK3JlZkNvdW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0ICovXHJcblx0cHVibGljIGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVmQ291bnQgPSB0aGlzLmRlZmluaXRpb25zLmdldCggZGVmaW5pdGlvbikgfHwgMDtcclxuXHRcdGlmIChyZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5kZWxldGUoIGRlZmluaXRpb24pO1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZURPTVVwZGF0ZSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLnNldCggZGVmaW5pdGlvbiwgLS1yZWZDb3VudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBzZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gICAgICogQ1NTIHN0eWxlIG9iamVjdC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzZXRTdHlsZVByb3BlcnR5KCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSwgbmFtZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICB2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZURPTVVwZGF0ZSgpO1xyXG5cclxuXHRcdHRoaXMucHJvcHMucHVzaCh7IHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCB9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBpbiBvdXIgaW50ZXJuYWwgbWFwLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBmb3JjZURPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA+IDAgfHwgdGhpcy5wcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG4gICAgICAgICAgICB0aGlzLmRvRE9NVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPiAwIHx8IHRoaXMucHJvcHMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhckFjdGl2YXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm1zIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuZCBwcm9wZXJ0eSBzZXQgb3BlcmF0aW9ucyBhY2N1bXVsYXRlZCBpbnRlcm5hbGx5LiBUaGlzXHJcbiAgICAgKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgYnkgdGhlIGRlcml2ZWQgY2xhc3NlcyB3aGVuIHNjaGVkdWxlZCBhY3RpdmF0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZG9ET01VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICAvLyBhY3RpdmF0ZS9kZWFjdGl2YXRlIHN0eWxlIGRlZmluaXRpb25zXHJcblx0XHR0aGlzLmRlZmluaXRpb25zLmZvckVhY2goIChyZWZDb3VudDogbnVtYmVyLCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pID0+XHJcblx0XHR7XHJcblx0XHRcdGlmIChyZWZDb3VudCA+IDApXHJcblx0XHRcdFx0YWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgcmVmQ291bnQpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGVhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCAtcmVmQ291bnQpO1xyXG5cdFx0fSlcclxuXHJcblx0XHR0aGlzLmRlZmluaXRpb25zLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBzdHlsZSBwcm9wZXJ0aWVzXHJcblx0XHR0aGlzLnByb3BzLmZvckVhY2goIHByb3AgPT4gdXBkYXRlU3R5bGVQcm9wZXJ0eSggcHJvcC5ydWxlT3JFbG0sIHByb3AubmFtZSwgcHJvcC52YWx1ZSwgcHJvcC5pbXBvcnRhbnQpKTtcclxuXHRcdHRoaXMucHJvcHMgPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2xlYXJzIGFsbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBkYXRhIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNsZWFyQWN0aXZhdGlvbigpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnByb3BzID0gW107XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgaW1wbGVtZW50cyBzY2hlZHVsaW5nIHVzaW5nIGFuaW1hdGlvbiBmcmFtZXMuXHJcbiAqL1xyXG5jbGFzcyBBbmltYXRpb25GcmFtZVNjaGVkdWxlciBpbXBsZW1lbnRzIElTY2hlZHVsZXJcclxue1xyXG4gICAgLy8gSGFuZGxlIHJldHVybmVkIGJ5IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cclxuICAgIC8vIENhbGxiYWNrIHRvIGNhbGwgdG8gd3JpdGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG5cdHByaXZhdGUgZG9ET01VcGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHNjaGVkdWxlciBvYmplY3QgYW5kIHByb3ZpZGVzIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlXHJcbiAgICAgKiBzY2hlZHVsZXIgZGVjaWRlcyB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9ET01VcGRhdGUgPSBkb0RPTVVwZGF0ZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdHRoaXMucmVxdWVzdEhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5vbkFuaW1hdGlvbkZyYW1lKVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBjYW5jZWxzIGl0cyBzY2hlZHVsZWQgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmICh0aGlzLnJlcXVlc3RIYW5kbGUgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5yZXF1ZXN0SGFuZGxlKTtcclxuXHRcdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gMDtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiBhbmltYXRpb24gZnJhbWUgc2hvdWxkIGJlIGV4ZWN1dGVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgb25BbmltYXRpb25GcmFtZSA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gMDtcclxuXHRcdHRoaXMuZG9ET01VcGRhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlcyB0aGUgdXBkYXRlIG9mIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoZSBnaXZlbiBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSxcclxuICAgIG5hbWU6IHN0cmluZyB8IG51bGwsIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLFxyXG4gICAgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PlxyXG5cdFx0YWN0aXZhdG9yLnNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXMgY2FsbGluZyBvZiB0aGUgZ2l2ZW4gZnVuY3Rpb24gdXNpbmcgdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2NoZWR1bGVDYWxsKCBmdW5jOiAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiB2b2lkLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0bGV0IGFjdGl2YXRvciA9IHNjaGVkdWxlclR5cGUgPT0gbnVsbCA/IHNfZGVmYXVsdEFjdGl2YXRvciA6IHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuZ2V0KCBzY2hlZHVsZXJUeXBlKTtcclxuICAgIGlmIChhY3RpdmF0b3IpXHJcblx0XHRmdW5jKCBhY3RpdmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19nZXREZWZhdWx0U2NoZWR1bGVyVHlwZSgpOiBudW1iZXJcclxue1xyXG5cdHJldHVybiBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBkZWZhdWx0IHNjaGVkdWxpbmcgdHlwZSB0aGF0IGlzIHVzZWQgYnkgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHRoYXQgYXJlXHJcbiAqIGNhbGxlZCB3aXRob3V0IGV4cGxpY2l0bHkgcHJvdmlkaW5nIHZhbHVlIHRvIHRoZSBzY2hlZHVsaW5nIHBhcmFtZXRlci4gUmV0dXJucyB0aGUgdHlwZSBvZiB0aGVcclxuICogcHJldmlvdXMgZGVmYXVsdCBhY3RpdmF0b3Igb3IgMCBpZiBhbiBlcnJvciBvY2N1cnMgKGUuZy4gdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIElEIGlzIG5vdFxyXG4gKiByZWdpc3RlcmVkKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX3NldERlZmF1bHRTY2hlZHVsZXJUeXBlKCBzY2hlZHVsZXJUeXBlOiBudW1iZXIpOiBudW1iZXJcclxue1xyXG4gICAgLy8gY2hlY2sgdGhhdCB0aGUgZ2l2ZW4gbnVtYmVyIGlzIGluIG91ciBtYXAgb2YgcmVnaXN0ZXJlZCBhY3RpdmF0b3JzXHJcbiAgICBsZXQgYWN0aXZhdG9yID0gc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5nZXQoIHNjaGVkdWxlclR5cGUpO1xyXG5cdGlmICghYWN0aXZhdG9yKVxyXG5cdFx0cmV0dXJuIDA7XHJcblxyXG5cdGxldCBwcmV2U2NoZWR1bGVyVHlwZSA9IHNfZGVmYXVsdFNjaGVkdWxlclR5cGU7XHJcbiAgICBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlID0gc2NoZWR1bGVyVHlwZTtcclxuICAgIHNfZGVmYXVsdEFjdGl2YXRvciA9IGFjdGl2YXRvcjtcclxuXHRyZXR1cm4gcHJldlNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciwgd2hpY2hcclxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX3JlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXI6IElTY2hlZHVsZXIpOiBudW1iZXJcclxue1xyXG5cdC8vIGdldCB0aGUgcmVnaXN0cmF0aW9uIElEIGZvciB0aGlzIHNjaGVkdWxlclxyXG5cdGxldCBpZCA9IHNfbmV4dEN1c3RvbVNjaGVkdWxlclR5cGUrKztcclxuXHRzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLnNldCggaWQsIG5ldyBTY2hlZHVsaW5nQWN0aXZhdG9yKCBzY2hlZHVsZXIpKTtcclxuXHRyZXR1cm4gaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFVucmVnaXN0ZXJzIGEgc2NoZWR1bGVyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfdW5yZWdpc3RlclNjaGVkdWxlciggaWQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGlmIChpZCA+PSBzX2ZpcnN0Q3VzdG9tU2NoZWR1bGVyVHlwZSlcclxuXHR7XHJcblx0XHRzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLmRlbGV0ZSggaWQpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBkZWxldGVkIHNjaGVkdWxlciB3YXMgb3VyIGRlZmF1bHQgb25lLCB3ZSBzZXQgdGhlIGRlZmF1bHQgdG8gU1lOQ1xyXG4gICAgICAgIGlmIChzX2RlZmF1bHRTY2hlZHVsZXJUeXBlID09PSBpZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPSBTY2hlZHVsZXJUeXBlLlN5bmM7XHJcbiAgICAgICAgICAgIHNfZGVmYXVsdEFjdGl2YXRvciA9IHNfc3luY2hyb25vdXNBY3RpdmF0b3I7XHJcbiAgICAgICAgfVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3VycmVudCBkZWZhdWx0IHNjaGVkdWxlci4gVGhpcyBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkIGlmIHNjaGVkdWxlciB0eXBlIGlzIG5vdCBleHBsaWNpdGx5XHJcbiAqIHNwZWNpZmllZCBpbiBjYWxscyBzdWNoIGFzIGFjdGl2YXRlIG9yIElTdHlsZVJ1bGUuc2V0UHJvcC5cclxuICovXHJcbmxldCBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlOiBudW1iZXIgPSBTY2hlZHVsZXJUeXBlLlN5bmM7XHJcblxyXG4vKipcclxuICogU3luY2hyb25vdXMgYWN0aXZhdG9yIGluc3RhbmNlLlxyXG4gKi9cclxubGV0IHNfc3luY2hyb25vdXNBY3RpdmF0b3IgPSBuZXcgU3luY2hyb25vdXNBY3RpdmF0b3IoKTtcclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IGRlZmF1bHQgYWN0aXZhdG9yLiBUaGlzIGFjdGl2YXRvciB3aWxsIGJlIHVzZWQgaWYgc2NoZWR1bGVyIHR5cGUgaXMgbm90IGV4cGxpY2l0bHlcclxuICogc3BlY2lmaWVkIGluIGNhbGxzIHN1Y2ggYXMgYWN0aXZhdGUgb3IgSVN0eWxlUnVsZS5zZXRQcm9wLlxyXG4gKi9cclxubGV0IHNfZGVmYXVsdEFjdGl2YXRvcjogSUFjdGl2YXRvciA9IHNfc3luY2hyb25vdXNBY3RpdmF0b3I7XHJcblxyXG4vKipcclxuICogU2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciB0byBiZSBhc3NpZ25lZCB0byB0aGUgZmlyc3QgY3VzdG9tIHNjaGVkdWxlciB0byBiZSByZWdpc3RlcmVkLlxyXG4gKiBBbGwgY3VzdG9tIHNjaGVkdWxlciBpZGVudGlmaWVycyBhcmUgZ3JlYXRlciBvciBlcXVhbCB0byB0aGlzIG51bWJlci5cclxuICovXHJcbmNvbnN0IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlOiBudW1iZXIgPSAxMDAxO1xyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIgdG8gYmUgYXNzaWduZWQgdG8gdGhlIG5leHQgY3VzdG9tIHNjaGVkdWxlciB0byBiZSByZWdpc3RlcmVkLlxyXG4gKi9cclxubGV0IHNfbmV4dEN1c3RvbVNjaGVkdWxlclR5cGU6IG51bWJlciA9IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHJlZ2lzdGVyZWQgYnVpbHQtaW4gYW5kIGN1c3RvbSBhY3RpdmF0b3JzLlxyXG4gKi9cclxubGV0IHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMgPSBuZXcgTWFwPG51bWJlcixJQWN0aXZhdG9yPigpO1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGJ1aWx0LWluIGFuZCBjdXN0b20gYWN0aXZhdG9ycy5cclxuICovXHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLlN5bmMsIHNfc3luY2hyb25vdXNBY3RpdmF0b3IpO1xyXG5zX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLnNldCggU2NoZWR1bGVyVHlwZS5BbmltYXRpb25GcmFtZSwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoIG5ldyBBbmltYXRpb25GcmFtZVNjaGVkdWxlcigpKSk7XHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLk1hbnVhbCwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoKSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlUnVsZSwgQ29tYmluZWRTdHlsZXNldCwgSVZhclJ1bGUsIERlcGVuZGVudFJ1bGVzLCBJTmFtZWRFbnRpdHksIElDbGFzc1J1bGUsIElJRFJ1bGUsIElDbGFzc05hbWVSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIEN1c3RvbVZhcl9TdHlsZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7bWVyZ2VTdHlsZXNldHMsIHN0eWxlc2V0VG9TdHJpbmcsIHN0eWxlUHJvcFRvU3RyaW5nLCBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHN9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7dmFsMnN0ciwgY2FtZWxUb0Rhc2h9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiO1xyXG5pbXBvcnQge3BzZXVkb0VudGl0eVRvU3RyaW5nLCBzZWxlY3RvclRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIjtcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBjb250YWluIGEgc3R5bGUgcnVsZS4gVGhpcyBjbGFzc1xyXG4gKiBpbXBsZW1lbnRzIHRoZSBwYXJzaW5nIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0IG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSVN0eWxlUnVsZVxyXG57XHJcblx0Ly8gVGhlIHN0eWxlc2V0IGNhbiBiZSBhbiBDb21iaW5lZFN0eWxlc2V0IGZvciBtYW55IHJ1bGVzOyBob3dldmVyLCBmb3Igc29tZSBpdCBpcyBqdXN0XHJcblx0Ly8gb2YgdGhlIFN0eWxlc2V0IHR5cGUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZXNldD86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHt9O1xyXG5cdFx0dGhpcy5kZXBlbmRlbnRSdWxlcyA9IHt9O1xyXG5cclxuXHRcdGlmIChzdHlsZXNldClcclxuXHRcdFx0dGhpcy5wYXJzZUlucHV0U3R5bGVzZXQoIHN0eWxlc2V0IGFzIENvbWJpbmVkU3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHb2VzIG92ZXIgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgYW5kIHBhcnNlcyB0aGVtIGludG8gcHJvcGVyIHN0eWxlc2V0LCBzZXQgb2ZcclxuXHQgKiBpbXBvcnRhbnQgcHJvcGVydGllcyBhbmQgZGVwZW5kZW50IHJ1bGVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VJbnB1dFN0eWxlc2V0KCBpbnB1dFN0eWxlc2V0OiBDb21iaW5lZFN0eWxlc2V0KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcGFyZW50cywgd2UgZmlyc3QgY29weSBwcm9wZXJ0aWVzIGZyb20gdGhlbSBzbyB0aGF0IG91ciBvd24gcHJvcGVydGllc1xyXG5cdFx0Ly8gY2FuIG92ZXJyaWRlIHRoZW0uXHJcblx0XHRpZiAoaW5wdXRTdHlsZXNldFtcIitcIl0pXHJcblx0XHR7XHJcblx0XHRcdC8vIHRoZSB2YWx1ZSBpcyBhIHNpbmdsZSBTdHlsZVJ1bGUgb3IgYW4gYXJyYXkgb2YgU3R5bGVSdWxlcyB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxyXG5cdFx0XHRsZXQgZXh0ZW5kc1Byb3BWYWwgPSBpbnB1dFN0eWxlc2V0W1wiK1wiXSBhcyAoU3R5bGVSdWxlIHwgU3R5bGVSdWxlW10pO1xyXG5cdFx0XHRsZXQgcGFyZW50UnVsZXM6IFN0eWxlUnVsZVtdO1xyXG5cdFx0XHRpZiAoZXh0ZW5kc1Byb3BWYWwgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBbZXh0ZW5kc1Byb3BWYWxdO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBleHRlbmRzUHJvcFZhbDtcclxuXHJcblx0XHRcdC8vIElmIHdlIGhhdmUgcGFyZW50IHJ1bGVzLCBjb3B5IHN0eWxlc2V0cyBhbmQgZGVwZW5kZW50IHJ1bGVzIGZyb20gdGhlbS5cclxuXHRcdFx0aWYgKHBhcmVudFJ1bGVzICYmIHBhcmVudFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJlbnRSdWxlcy5mb3JFYWNoKCBwYXJlbnQgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0ID0gbWVyZ2VTdHlsZXNldHMoIHRoaXMuc3R5bGVzZXQsIHBhcmVudC5zdHlsZXNldCk7XHJcblx0XHRcdFx0XHR0aGlzLmNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHBhcmVudCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtZXJnZSBjdXN0b20gIHByb3BlcnRpZXNcclxuXHRcdG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGhpcy5zdHlsZXNldCwgaW5wdXRTdHlsZXNldCk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gaW5wdXRTdHlsZXNldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBvdmVyIGFscmVhZHkgcHJvY2Vzc2VkIHBhcmVudHMgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzXHJcblx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCIrXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBwcm9wVmFsID0gaW5wdXRTdHlsZXNldFtwcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiOlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGlzIGlzIGFuIGFycmF5IG9mIHR1cGxlcyByZXByZXNlbnRpbmdcclxuXHRcdFx0XHQvLyBwYXJhbWV0ZXJpc2VkIHBzZXVkbyBlbnRpdGllcyB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcGFyYW1ldGVyIHZhbHVlXHJcblx0XHRcdFx0Ly8gKHN0cmluZykgYW5kIHRoZSBzZWNvbmQgdGhlIENvbWJpbmVkU3R5bGVzZXQuIE90aGVyd2lzZSwgdGhlIHZhbHVlIGlzIGp1c3QgYW5cclxuXHRcdFx0XHQvLyBDb21iaW5lZFN0eWxlc2V0LlxyXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFthbnksIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdFx0cHJvcE5hbWUsIHR1cGxlWzBdLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ldyBEZXBlbmRlbnRSdWxlKCBcIiZcIiArIHByb3BOYW1lLCB1bmRlZmluZWQsXHJcblx0XHRcdFx0XHRcdHByb3BWYWwgYXMgQ29tYmluZWRTdHlsZXNldCwgdGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiJlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHR0dXBsZVswXSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0KCkgPT4gcHJvcE5hbWUgKyBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSksIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuZW5kc1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSkgKyBwcm9wTmFtZSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGlzIGlzIGEgcmVndWxhciBDU1MgcHJvcGVydHk6IGNvcHkgdGhlIHByb3BlcnR5IHZhbHVlIHRvIG91ciBpbnRlcm5hbCBzdHlsZXNldFxyXG5cdFx0XHRcdHRoaXMuc3R5bGVzZXRbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBwcm9jZXNzIHRoZW0gdW5kZXIgdGhlIHNhbWUgY29udGFpbmVyXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHByb3RlY3RlZCBjb3B5RnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uIGEgbmV3bHkgY3JlYXRlZCBvYmplY3Qgc28gd2UgZG9uJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyBpblxyXG5cdFx0Ly8gb3VyIG93biBzdHlsZXNldCB5ZXRcclxuXHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgc3JjLnN0eWxlc2V0KTtcclxuXHRcdHRoaXMuY29weURlcGVuZGVudFJ1bGVzRnJvbSggc3JjKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGRlcGVuZGVudCBydWxlcyBmcm9tIGFub3RoZXIgc3R5bGUgcnVsZSBvYmplY3QuXHJcblx0cHJpdmF0ZSBjb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzcmMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gc3JjLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGFyciA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmICghYXJyKVxyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBhcnIgPSBbXTtcclxuXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoc3JjRGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IHNyY0RlcFJ1bGUuY2xvbmUoKSBhcyBEZXBlbmRlbnRSdWxlO1xyXG5cdFx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0XHRhcnIucHVzaCggbmV3RGVwUnVsZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld0RlcFJ1bGUgPSAocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0bmV3RGVwUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBuZXdEZXBSdWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBydWxlLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiBgJHt0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nfSB7JHtzdHlsZXNldFRvU3RyaW5nKCB0aGlzLnN0eWxlc2V0KX19YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN0eWxlUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gdGhpcy5jbG9uZU9iamVjdCgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzZXQpLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCB0aGlzLnRvQ3NzU3RyaW5nKCksIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgaW5zZXJ0IHRoZW0gdW5kZXIgdGhlIHNhbWUgcGFyZW50XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuaW5zZXJ0KCBwYXJlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGNsZWFyIHRoZW0gdG9vXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5jbGVhcigpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsZWFyKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzZXQpLmxlbmd0aCA+IDApXHJcblx0XHRcdGN0eC5hZGRSdWxlVGV4dCggdGhpcy50b0Nzc1N0cmluZygpKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGluc2VydCB0aGVtIHVuZGVyIHRoZSBzYW1lIHBhcmVudFxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLnNlcmlhbGl6ZSggY3R4KTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cHVibGljIGdldCBzZWxlY3RvclRleHQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPT0gbnVsbClcclxuXHRcdFx0dGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9IHRoaXMuZ2V0U2VsZWN0b3JTdHJpbmcoKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgdGhlIG9iamVjdCB0byBwYXJ0aWNwYXRlIGluIFwidmFsdWVUb1N0cmluZ1wiIHNlcmlhbGl6YXRpb24uIFdoZW5ldmVyXHJcblx0ICogdGhlIFN0eWxlUnVsZS1kZXJpdmVkIG9iamVjdCBpcyBlbmNvdW50ZXJlZCBieSB0aGUgYFV0aWxGdW5jLnZhbHVlVG9TdHJpbmdgIGZ1bmN0aW9uLFxyXG5cdCAqIHRoZSBydWxlJ3Mgc2VsZWN0b3Igd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdG9yVGV4dDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBzdHlsZSBydWxlIG9iamVjdCBvZiB0aGUgcHJvcGVyIHR5cGUsIGJ1dCB3aXRob3V0IHRoZSBzdHlsZXNldCBhbmQgZGVwZW5kZW50XHJcblx0Ly8gcnVsZXMuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGNsb25lT2JqZWN0KCk6IFN0eWxlUnVsZTtcclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2V0UHJvcDxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBFeHRlbmRlZFN0eWxlc2V0W0tdLFxyXG4gICAgICAgIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmlyc3Qgc2V0L3JlbW92ZSB0aGUgdmFsdWUgaW4gb3VyIGludGVybmFsIHN0eWxlc2V0IG9iamVjdFxyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdGRlbGV0ZSB0aGlzLnN0eWxlc2V0W25hbWVdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnN0eWxlc2V0W25hbWVdID0gaW1wb3J0YW50ID8geyBcIiFcIjogdmFsdWUgYXMgYW55IH0gOiB2YWx1ZSBhcyBhbnk7XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBpZiBDU1NSdWxlIGFscmVkeSBleGlzdHMsIHNldC9yZW1vdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRoZXJlXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG4gICAgICAgIHtcclxuXHRcdCAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggdGhpcy5jc3NSdWxlLCBjYW1lbFRvRGFzaCggbmFtZSksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCBuYW1lLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIHZhck9iaiBJVmFyUnVsZSBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YXJWYWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdmFyT2JqIHx8ICEodmFyT2JqIGluc3RhbmNlb2YgVmFyUnVsZSkpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRsZXQgY3VyckN1c3RvbVByb3BzID0gdGhpcy5zdHlsZXNldFtcIi0tXCJdIGFzIEN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuXHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMgfHwgdmFsdWUgIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoY3VyckN1c3RvbVByb3BzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gY3VyckN1c3RvbVByb3BzLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtWzBdID09PSB2YXJPYmopO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID09PSAxKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbXCItLVwiXSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFjdXJyQ3VzdG9tUHJvcHMpXHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0W1wiLS1cIl0gPSBjdXJyQ3VzdG9tUHJvcHMgPSBbW3Zhck9iaiwgdmFsdWVdXTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gY3VyckN1c3RvbVByb3BzLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtWzBdID09PSB2YXJPYmopO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDApXHJcblx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wc1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzLnB1c2goIFt2YXJPYmosIHZhbHVlXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBpZiBDU1NSdWxlIGFscmVkeSBleGlzdHMsIHNldC9yZW1vdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRoZXJlXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHRoaXMuY3NzUnVsZSwgdmFyT2JqLmNzc05hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCB2YXJPYmoudGVtcGxhdGUsIHZhbHVlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHQvKipcclxuXHQgKiBPYmplY3QgY29udGFpbmluZyBkZXBlbmRlbnQgcnVsZXMuIFByb3BlcnR5IG5hbWVzIGFyZSB0YWtlbiBmcm9tIHNwZWNpYWwgcHJvcGVydGllc1xyXG5cdCAqIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBUaGlzIG9iamVjdCBhbGxvd3MgY2FsbGVycyB0byBhY2Nlc3MgZGVwZW5kZW50IHJ1bGVzIHRvIGNoYW5nZVxyXG5cdCAqIHN0eWxlIHByb3BlcnR5IHZhbHVlcyBwcm9ncmFtbWF0aWNhbGx5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXBlbmRlbnRSdWxlczogRGVwZW5kZW50UnVsZXM7XHJcblxyXG5cdC8vIFJlc3VsdGFudCBvYmplY3QgZGVmaW5pbmcgcHJvcGVydGllcyB0byBiZSBpbnNlcnRlZCBpbnRvIERPTS5cclxuXHRwcml2YXRlIHN0eWxlc2V0OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gU2VsZWN0b3Igc3RyaW5nIGNhY2hlZCBhZnRlciBpdCBpcyBmaXJzdCBvYnRhaW5lZC4gTmVlZGVkIHRvIG5vdCBpbnZva2UgZ2V0U2VsZWN0b3JTdHJpbmdcclxuXHQvLyBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgcHJlc2VuY2Ugb2YgZGVwZW5kZW50IHJ1bGVzLlxyXG5cdHByaXZhdGUgY2FjaGVkU2VsZWN0b3JTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRGVwZW5kZW50UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGRlcGVuZHMgb24gdGhlIGNvbnRhaW5pbmcgc3R5bGUgcnVsZS4gVGhpc1xyXG4gKiBpcyB1c2VkIGZvciBwc2V1ZG8gY2xhc3NlcywgcHNldWRvIGVsZW1lbnRzLCBjb21iaW5hdG9ycyBhbmQgb3RoZXIgc2VsZWN0b3JzIHRoYXQgY29tYmluZSB0aGVcclxuICogY29udGFpbmluZyBydWxlJ3Mgc2VsZWN0b3Igd2l0aCBhZGRpdGlvbmFsIHNlbGVjdG9yIGl0ZW1zLlxyXG4gKi9cclxuY2xhc3MgRGVwZW5kZW50UnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0Ly8gZm9yIHJlZ3VsYXIgc2VsZWN0b3JzLCBwc2V1ZG8gY2xhc3NlcyBhbmQgcHNldWRvIGVsZW1lbnRzLCB0aGUgc2VsZWN0b3IgYWxyZWFkeSBjb250YWluc1xyXG5cdC8vIHRoZSBhbXBlcnNhbmQgYW5kIHRoZSBzZWxlY3RvclBhcmFtIGlzIHVuZGVmaW5lZC4gRm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMsIHBzdWRvXHJcblx0Ly8gZWxlbWVudHMgYW5kIGNvbWJpbmF0b3JzLCB0aGUgc2VsZWN0b3JQYXJhbSBpcyBkZWZpbmVkIGFuZCB0aGUgc2VsZWN0b3IgaXMganVzdCB0aGUgZW50aXR5XHJcblx0Ly8gbmFtZS5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc2VsZWN0b3JQYXJhbT86IGFueSwgc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG5cdFx0Y29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHRcdHRoaXMuc2VsZWN0b3JQYXJhbSA9IHNlbGVjdG9yUGFyYW07XHJcblx0XHR0aGlzLmNvbnRhaW5pbmdSdWxlID0gY29udGFpbmluZ1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBEZXBlbmRlbnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBEZXBlbmRlbnRSdWxlKCB0aGlzLnNlbGVjdG9yLCB0aGlzLnNlbGVjdG9yUGFyYW0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcGFyZW50U2VsZWN0b3IgPSB0aGlzLmNvbnRhaW5pbmdSdWxlIS5zZWxlY3RvclRleHQ7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RvclBhcmFtKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yIGFzIHN0cmluZztcclxuXHRcdFx0cmV0dXJuIGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9KCR7cHNldWRvRW50aXR5VG9TdHJpbmcoIHNlbGVjdG9yLCB0aGlzLnNlbGVjdG9yUGFyYW0pfSlgO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb252ZXJ0IHNlbGVjdG9yIHRvIHN0cmluZy5cclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gc2VsZWN0b3JUb1N0cmluZyggdGhpcy5zZWxlY3Rvcik7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgc2VsZWN0b3Igc3RyaW5nIGRvZXNuJ3QgaGF2ZSBhbnkgb2NjdXJyZW5jZXMgb2YgdGhlIGFtcGVyc2FuZCBzeW1ib2wsIHdlXHJcblx0XHRcdC8vIHNpbXBseSBhcHBlbmQgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3I7IG90aGVyd2lzZSwgd2UgcmVwbGFjZSBhbGxcclxuXHRcdFx0Ly8gb2NjdXJyZW5jZXMgb2YgdGhlIGFtcGVyc2FuZCBzeW1ib2wgaW4gdGhlIHNlbGVjdG9yIHN0cmluZyB3aXRoIHRoZSBzZWxlY3RvclxyXG5cdFx0XHQvLyBzdHJpbmcgb2YgdGhlIHBhcmVudCBydWxlLlxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3IuaW5kZXhPZiggXCImXCIpIDwgMFxyXG5cdFx0XHRcdD8gYCR7cGFyZW50U2VsZWN0b3J9JHtzZWxlY3Rvcn1gXHJcblx0XHRcdFx0OiBzZWxlY3Rvci5yZXBsYWNlKCAvJi9nLCBwYXJlbnRTZWxlY3Rvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcnRpYWwgc2VsZWN0b3IgdGhhdCBzaG91bGQgYmUgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBzZWxlY3Rvci5cclxuXHRwcml2YXRlIHNlbGVjdG9yOiBDc3NTZWxlY3RvcjtcclxuXHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlbGVjdG9yIC0gdXNlZCBmb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyBhbmQgZWxlbWVudHMuXHJcblx0cHJpdmF0ZSBzZWxlY3RvclBhcmFtPzogYW55O1xyXG5cclxuXHQvLyBQYXJlbnQgc3R5bGUgcnVsZSBvZiB3aGljaCB0aGlzIHJ1bGUgaXMgZGVwZW5kZW50LlxyXG5cdHB1YmxpYyBjb250YWluaW5nUnVsZT86IFN0eWxlUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFic3RyYWN0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBvbmx5IGJlIHVzZWQgYXMgYSBiYXNlIGZvciBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQWJzdHJhY3RSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBBYnN0cmFjdFJ1bGUoKTtcclxuXHR9XHJcblxyXG5cdC8vIE92ZXJyaWRlcyB0aGUgU3R5bGVSdWxlJ3MgaW1wbGVtZW50YXRpb24gdG8gZG8gbm90aGluZy4gTm8gQ1NTU3R5bGVSdWxlIGlzIGNyZWF0ZWQgZm9yXHJcblx0Ly8gYWJzdHJhY3QgcnVsZXMuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5hbWVkU3R5bGVSdWxlIGNsYXNzIGlzIGEgYmFzZSBmb3Igc3R5bGUgcnVsZSBjbGFzc2VzIHRoYXQgYXJlIGFsc28gbmFtZWQgZW50aXRpZXMgLSBzdWNoXHJcbiAqIGFzIGNsYXNzIHJ1bGUgYW5kIElEIHJ1bGUuXHJcbiAqL1xyXG5hYnN0cmFjdCBjbGFzcyBOYW1lZFN0eWxlUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElOYW1lZEVudGl0eVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUsIHRoaXMuY3NzUHJlZml4KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc05hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgdG9TdHJpbmcgbWV0aG9kIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHJ1bGUgKHdpdGhvdXQgdGhlIENTUyBwcmVmaXgpLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldCBjc3NQcmVmaXgoKTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByb3RlY3RlZCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDbGFzc1J1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBDU1MgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NSdWxlIGV4dGVuZHMgTmFtZWRTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQ2xhc3NSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5IHwgSUNsYXNzTmFtZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNsYXNzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0NsYXNzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiLlwiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSURSdWxlIGV4dGVuZHMgTmFtZWRTdHlsZVJ1bGUgaW1wbGVtZW50cyBJSURSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0lETmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogSURSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJRFJ1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiI1wiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RvclJ1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvclJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBTZWxlY3RvclJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsMnN0ciggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBzZWxlY3RvciBvYmplY3QgZm9yIHRoaXMgcnVsZS5cclxuXHRwcml2YXRlIHNlbGVjdG9yOiBDc3NTZWxlY3RvcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lWYXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1ZhclZhbHVlVHlwZSwgVmFyVGVtcGxhdGVOYW1lfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2V9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuIFZhclJ1bGUgZG9lcyBub3QgZGVyaXZlIGZyb20gdGhlIFJ1bGVcclxuICogY2xhc3MgYmVjYXVzZSBpdCBpcyBub3QgYSByZWFsIENTUyBydWxlOyBob3dldmVyLCBpbiBtYW55IGFzcGVjdHMgaXQgcmVwZWF0cyB0aGUgUnVsZSdzXHJcbiAqIGZ1bmN0aW9uYWxpdHkuIEluIHBhcnRpY3VsYXIgaXQgaGFzIHRoZSBwcm9jZXNzIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIGl0IHRvIG9idGFpbiBhbiBhY3R1YWxcclxuICogbmFtZSwgd2hpY2ggd2lsbCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgYW5kIHVzaW5nIHRoaXMgY3VzdG9tIHByb3BlcnR5IGluIENTUy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSB0aGUgdHlwZSBwYXJhbWV0ZXIgSyBpcyBhIGtleSBvZiB0aGUgSUNzc1N0eWxlc2V0IGludGVyZmFjZSwgdGhlIHZhbHVlIGlzIG9mXHJcbiAqIHR5cGUgSVN0aWxlc2V0W0tdLCB3aGljaCBpcyBFeHRlbmRlZDxJQ3NzU3R5bGVzZXRbS10+LiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nIHZhbHVlcyB0aGF0IGFyZVxyXG4gKiB2YWxpZCBmb3IgdGhlIEV4dGVuZGVkIHJvcGVydHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYXJSdWxlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+IGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJVmFyUnVsZTxLPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZTogSywgdmFsdWU/OiBWYXJWYWx1ZVR5cGU8Sz4sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+KVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCItLVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFZhclJ1bGU8Sz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFZhclJ1bGU8Sz4odGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWUgPT0gbnVsbCA/IG51bGwgOiBgJHt0aGlzLmNzc05hbWV9OiAke3N0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZhbHVlLCB0cnVlKX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgdmFyKC0tbmFtZSkgZXhwcmVzc2lvbi5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIGB2YXIoJHt0aGlzLmNzc05hbWV9KWA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldFZhbHVlKCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnNldEN1c3RvbVZhclZhbHVlKCB0aGlzLmNzc05hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHZhbHVlLCB0cnVlKSxcclxuICAgICAgICAgICAgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKVxyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8vIC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIC8vIG51bGwgZm9yIFN0eWxlc2hlZXQuXHJcblx0Ly8gcHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRwdWJsaWMgdGVtcGxhdGU6IEs7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+O1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SU5hbWVkQ29sb3JzLCBDc3NDb2xvciwgQ29sb3JzfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NBbmdsZU1hdGgsIHZhbDJzdHJ9IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByZWRlZmluZWQgY29sb3IgbmFtZXMgYnkgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuIE9ubHkgYnVpbHQtaW4gY29sb3IgbmFtZXMgd2lsbCBiZSBpblxyXG4gKiB0aGlzIG1hcCAtIHRob3NlIG5hbWVkIGNvbG9ycyB0aGF0IGFyZSBhZGRlZCB1c2luZyBtb2R1bGUgYXVnbWVudGF0aW9uIHdpbGwgTk9UIHJlc2lkZSBpblxyXG4gKiB0aGlzIG1hcC4gVGhpcyBpcyBuZWVkZWQgdG8gY29udmVydCB0aGUgbnVtZXJpYyBjb2xvciB2YWx1ZXMgc2V0IHVzaW5nIHRoZSBDb2xvci5icm93blxyXG4gKiBub3RhdGlvbiB0byB0aGVpciBuYW1lcyB3aGVuIGluc2VydGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5sZXQgcmV2ZXJzZWRDb2xvck1hcCA9IG5ldyBNYXA8bnVtYmVyLHN0cmluZz4oKTtcclxuXHJcbi8vIGJ1aWxkIFJldmVyc2VkIENvbG9yIE1hcFxyXG5PYmplY3QuZW50cmllcyggQ29sb3JzKS5mb3JFYWNoKCAoW25hbWUsIHZhbHVlXSkgPT4gcmV2ZXJzZWRDb2xvck1hcC5zZXQoIHZhbHVlLCBuYW1lKSApO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIGNvbG9yIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGNvbG9yTnVtYmVyVG9TdHJpbmcoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHRoZSBudW1iZXIgaXMgbmVnYXRpdmUsIHJlbWVtYmVyIHRoYXQgZmFjdCBhbmQgZ2V0IHRoZSBwb3NpdGl2ZSBudW1iZXJcclxuICAgIGxldCBuID0gdmFsIDwgMCA/IC12YWwgOiB2YWw7XHJcbiAgICBsZXQgaXNOZWdhdGl2ZSA9IG4gIT09IHZhbDtcclxuXHJcbiAgICAvLyBpZiB0aGUgbnVtYmVyIGhhcyBhIGZsb2F0aW5nIHBvaW50IHBhcnQsIHNlcGFyYXRlIGl0IGludG8gYWxwaGEgY2hhbm5lbFxyXG4gICAgbGV0IGEgPSAwO1xyXG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG4pKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBrID0gTWF0aC5mbG9vcihuKTtcclxuICAgICAgICAvLyBhID0gTWF0aC5yb3VuZCggKG4gLSBrKSAqIDEwMCk7XHJcbiAgICAgICAgYSA9IE1hdGgucm91bmQoIChuIC0gaykgKiAyNTUpO1xyXG4gICAgICAgIG4gPSBrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBudW1iZXIgd2FzIG5lZ2F0aXZlIHdlIHJldmVydCB0aGUgY29sb3IgYnkgbmVnYXRpbmcgYWxsIHRoZSBiaXRzLiBJbiBhbnkgY2FzZSxcclxuICAgIC8vIHdlIGNsZWFyIGV2ZXJ5dGhpbmcgYmV5b25kIHRoZSBmaXJzdCB0aHJlZSBieXRlcy5cclxuICAgIG4gPSBpc05lZ2F0aXZlID8gfigweEZGMDAwMDAwIHwgbikgOiAweDAwRkZGRkZGICYgbjtcclxuXHJcbiAgICBpZiAoYSA+IDApXHJcbiAgICAgICAgLy8gcmV0dXJuIGNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIG4sIGEpO1xyXG4gICAgICAgIC8vIHJldHVybiByZ2JUb1N0cmluZyggKG4gJiAweEZGMDAwMCkgPj4gMTYsIChuICYgMHgwMEZGMDApID4+IDgsIG4gJiAweDAwMDBGRiwgYSk7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgbi50b1N0cmluZygxNikucGFkU3RhcnQoIDYsIFwiMFwiKSArIGEudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCAyLCBcIjBcIik7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVkIGNvbG9yIHdpdGggdGhlIGdpdmVuIHZhbHVlLCByZXR1cm4gdGhlIGNvbG9yIG5hbWVcclxuICAgICAgICBsZXQgbmFtZSA9IHJldmVyc2VkQ29sb3JNYXAuZ2V0KCBuKTtcclxuICAgICAgICByZXR1cm4gbmFtZSA/IG5hbWUgOiBcIiNcIiArIG4udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCA2LCBcIjBcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzZXBhcmF0aW9uIHZhbHVlIHRvIGEgQ1NTIHN0cmluZy4gU2VwYXJhdGlvbiBhcmUgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXJcclxuICogd2l0aCB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBJbnRlZ2VyIG51bWJlciAtMjU1IHRvIDI1NS4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuIE5lZ2F0aXZlIG51bWJlcnNcclxuICogICAgIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgLTEuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgICAgRmxvYXRpbmcgbnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIHJvdW5kZWQgYW5kIHRyZWF0ZWQgYXMgaW50ZWdlciBudW1iZXJzLiBOZWdhdGl2ZVxyXG4gKiAgICAgbnVtYmVycyB3aWxsIGJlIGludmVydGVkLlxyXG4gKiBcclxuICogQHBhcmFtIGMgQ29sb3Igc2VwYXJhdGlvbiB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIHNlcGFyYXRpb25Ub1N0cmluZyggYzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChjICE9PSAwICYmIGMgPiAtMSAmJiBjIDwgMSlcclxuICAgIHtcclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAxICsgYztcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoIGMgKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2xhbXAgdGhlIHZhbHVlIGJldHdlZW4gLTI1NSBhbmQgMjU1XHJcbiAgICAgICAgYyA9IGMgPiAyNTUgPyAyNTUgOiBjIDwgLTI1NSA/IC0yNTUgOiBjO1xyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoYykpXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLnJvdW5kKGMpO1xyXG5cclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAyNTUgKyBjO1xyXG5cclxuICAgICAgICByZXR1cm4gYy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSB0byBhIENTUyBzdHJpbmcuIEFscGhhIGlzIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICovXHJcbmZ1bmN0aW9uIGFscGhhVG9TdHJpbmcoIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgYWxwaGEgaXMgbnVsbCBvciB1bmRlZmluZWQsIHNldCBpdCB0byAxXHJcbiAgICBpZiAoYSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIjFcIjtcclxuXHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIG9mIGFscGhhIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgYSA9IC1hO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBzZXQgaXQgdG8gMTsgb3RoZXJ3aXNlLCBcclxuICAgIHJldHVybiAoYSA+IDEwMCA/IDEgOiBhID4gMSA/IGEgLyAxMDAgOiBhKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIHJlZCwgZ3JlZW4sIGJsdWUgc2VwYXJhdGlvbiB2YWx1ZXMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIEVhY2ggY29sb3Igc2VwYXJhdGlvbiBjYW4gYmUgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXIgd2l0aFxyXG4gKiB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBJbnRlZ2VyIG51bWJlciAtMjU1IHRvIDI1NS4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuIE5lZ2F0aXZlIG51bWJlcnNcclxuICogICAgIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgLTEuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgbXVsdGlwbGllZCBieSAxMDAgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgICAgRmxvYXRpbmcgbnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIHJvdW5kZWQgYW5kIHRyZWF0ZWQgYXMgaW50ZWdlciBudW1iZXJzLiBOZWdhdGl2ZVxyXG4gKiAgICAgbnVtYmVycyB3aWxsIGJlIGludmVydGVkLlxyXG4gKiBcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIHIgUmVkIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBnIEdyZWVuIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBiIEJsdWUgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9TdHJpbmcoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7c2VwYXJhdGlvblRvU3RyaW5nKCByKX0sJHtzZXBhcmF0aW9uVG9TdHJpbmcoIGcpfSwke3NlcGFyYXRpb25Ub1N0cmluZyggYil9LCR7YWxwaGFUb1N0cmluZyggYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHJlcHJlc2VudGluZyBlaXRoZXIgc2F0dXJhdGlvbiBvciBsaWdodG5lc3MgaW4gdGhlIEhTTCBzY2hlbWUgdG8gcGVyY2VudGFnZTpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sb3JQZXJjZW50VG9TdHJpbmcoIG46IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAobiA8IDApXHJcbiAgICAgICAgbiA9IC1uO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBjbGFtcCBpdC4gXHJcbiAgICByZXR1cm4gKG4gPiAxMDAgPyAxMDAgOiBNYXRoLnJvdW5kKG4gPD0gMSA/IG4gKiAxMDAgOiBuKSkudG9TdHJpbmcoKSArIFwiJVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIGh1ZS1zYXR1cmF0aW9uLWxpZ2h0bmVzcyBjb21wb25lbnRzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBIdWUgY29tcG9uZW50IGlzIHRyZWF0ZWQgYXMgdGhlIENTUyBgPGFuZ2xlPmAgdHlwZS4gTnVtYmVycyBhcmUgY29uc2lkZXJlZCBkZWdyZWVzLlxyXG4gKiBcclxuICogVGhlIFNhdHVyYXRpb24gYW5kIExpZ2h0bmVzcyBjb21wb25lbnRzIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2VzOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlIGFyZSBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZCB0byAxMDAuXHJcbiAqXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSBoIEh1ZSBjb21wb25lbnQgYXMgYW4gYW5nbGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBzIFNhdHVyYXRpb24gY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGwgTGlnaHRuZXNzIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvU3RyaW5nKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgaHNsYSgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGgpfSwke2NvbG9yUGVyY2VudFRvU3RyaW5nKHMpfSwke2NvbG9yUGVyY2VudFRvU3RyaW5nKGwpfSwke2FscGhhVG9TdHJpbmcoIGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JXaXRoQWxwaGFUb1N0cmluZyggYzogbnVtYmVyIHwga2V5b2YgSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgdGhlIGFscGhhIGlzIDAsIHJldHVybiB0cmFuc3BhcmVudCBjb2xvclxyXG4gICAgaWYgKGEgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIFwiIzAwMDBcIjtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGNvbG9yIHRvIG51bWVyaWMgdmFsdWUgKGlmIGl0J3Mgbm90IGEgbnVtYmVyIHlldCkuIElmIHRoZSBjb2xvciB3YXMgZ2l2ZW4gYXMgYVxyXG4gICAgLy8gc3RyaW5nIHRoYXQgd2UgY2Fubm90IGZpbmQgaW4gdGhlIENvbG9ycyBvYmplY3QsIHJldHVybiBwdXJlIHdoaXRlLlxyXG4gICAgbGV0IG4gPSB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IENvbG9yc1tjXSA6IGM7XHJcbiAgICBpZiAobiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIkZGRlwiO1xyXG5cclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgb2YgYWxwaGEgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChhIDwgMClcclxuICAgICAgICBhID0gLWE7XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIDEgb3IgMTAwLCB0aGVuIHNldCBpdCB0byAwIGJlY2F1c2UgMCBpbiB0aGUgY29sb3JOdW1iZXJUb1N0cmluZyBtZWFucyBcIm5vIGFscGhhXCIuXHJcbiAgICBhID0gYSA9PT0gMSB8fCBhID49IDEwMCA/IDAgOiBhID4gMSA/IGEgLyAxMDAgOiBhO1xyXG5cclxuICAgIC8vIG1ha2UgdGhlIG5ldyBhbHBoYVxyXG4gICAgcmV0dXJuIGNvbG9yTnVtYmVyVG9TdHJpbmcoIG4gPiAwID8gbiArIGEgOiBuIC0gYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuIElmIGEgc3RyaW5nIHZhbHVlIGlzIGluIHRoZSBDb2xvcnMgb2JqZWN0IHdlXHJcbiAqIG5lZWQgdG8gZ2V0IGl0cyBudW1iZXIgYW5kIGNvbnZlcnQgaXQgdG8gdGhlIHJnYlthXSgpIGZ1bmN0aW9uIGJlY2F1c2UgaXQgbWlnaHQgYmUgYSBjdXN0b21cclxuICogY29sb3IgbmFtZSBhZGRlZCB2aWEgSU5hbWVkQ29sb3JzIG1vZHVsZSBhdWdtZW50YXRpb24uIEZvciBudW1lcmljIHZhbHVlcywgd2UgY2hlY2sgaWYgdGhpcyBpc1xyXG4gKiBvbmUgb2YgdGhlIHByZWRlZmluZWQgY29sb3JzIGFuZCByZXR1cm4gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzQ29sb3I+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IENvbG9yc1t2XSA/IGNvbG9yTnVtYmVyVG9TdHJpbmcoIENvbG9yc1t2XSkgOiB2LFxyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yTnVtYmVyVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyB0eXBlcyBmb3Igd29ya2luZyB3aXRoIENTUyBjb2xvcnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSUdlbmVyaWNQcm94eSB9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZENvbG9ycyBpbnRlcmZhY2UgbGlzdHMgdGhlIG5hbWVzIG9mIHN0YW5kYXJkIFdlYiBjb2xvcnMuIEl0IGlzIG5lZWRlZCB0byBhbGxvdyBkZXZlbG9wZXJzXHJcbiAqIHRvIGFkZCBuZXcgbmFtZWQgY29sb3JzIHRocm91Z2ggbW9kdWxlIGF1Z21lbnRhdGlvbiB0ZWNobmlxdWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZENvbG9yc1xyXG57XHJcbiAgICByZWFkb25seSBibGFjazogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWx2ZXI6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmF5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYXJvb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWQ6ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwdXJwbGU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmdWNoc2lhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3c6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZ5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVlOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0ZWFsOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2U6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbGljZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbnRpcXVld2hpdGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhbWFyaW5lOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhenVyZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiZWlnZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiaXNxdWU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibGFuY2hlZGFsbW9uZDogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVldmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBicm93bjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBidXJseXdvb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjYWRldGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaGFydHJldXNlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaG9jb2xhdGU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JhbDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JuZmxvd2VyYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3Juc2lsazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjcmltc29uOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjeWFuOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrYmx1ZTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrY3lhbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JheTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JleTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJra2hha2k6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrbWFnZW50YTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb2xpdmVncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JhbmdlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JjaGlkOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrcmVkOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2FsbW9uOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2VhZ3JlZW46ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVibHVlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmF5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmV5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwcGluazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwc2t5Ymx1ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmF5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmV5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkb2RnZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmaXJlYnJpY2s6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmbG9yYWx3aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmb3Jlc3RncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnYWluc2Jvcm86ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnaG9zdHdoaXRlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkZW5yb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbnllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmV5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob25leWRldzogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob3RwaW5rOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpYW5yZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpZ286ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpdm9yeTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBraGFraTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcmJsdXNoOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXduZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsZW1vbmNoaWZmb246ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGNvcmFsOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGN5YW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdvbGRlbnJvZHllbGxvdzogICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZWVuOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHBpbms6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNhbG1vbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNlYWdyZWVuOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNreWJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JheTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JleTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHN0ZWVsYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW5lbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYWdlbnRhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1ibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1vcmNoaWQ6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1wdXJwbGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zZWFncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zcHJpbmdncmVlbjogICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW10dXJxdW9pc2U6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW12aW9sZXRyZWQ6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaWRuaWdodGJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaW50Y3JlYW06ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaXN0eXJvc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtb2NjYXNpbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZham93aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGRsYWNlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZWRyYWI6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmNoaWQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldmlvbGV0cmVkOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYXBheWF3aGlwOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZWFjaHB1ZmY6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZXJ1OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwaW5rOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwbHVtOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwb3dkZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3N5YnJvd246ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3lhbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWRkbGVicm93bjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWxtb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYW5keWJyb3duOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFncmVlbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFzaGVsbDogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWVubmE6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBza3libHVlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbm93OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzcHJpbmdncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzdGVlbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0YW46ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0aGlzdGxlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0b21hdG86ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0dXJxdW9pc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB2aW9sZXQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGVhdDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZXNtb2tlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3dncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWJlY2NhcHVycGxlOiAgICAgICAgICBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29sb3JQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSBvZiBDU1MgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgZm9yXHJcbiAqIHNwZWNpZnlpbmcgY29sb3JzLiBUaGlzIGludGVyZmFjZSBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlOiByZ2IoKSwgYWxwaGEoKSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sb3JQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJjb2xvclwiPiB7fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTeXN0ZW1Db2xvcnMgdHlwZSBkZWZpbmVzIGtleXdvcmRzIGZvciBzeXN0ZW0gY29sb3JzIHRoYXQgYXJlIHVzZWQgaW4gZm9yY2VkLWNvbG9yIG1vZGVcclxuICogKGJ1dCBjYW4gYmUgYWxzbyB1c2VkIGluIHRoZSByZWd1bGFyIG1vZGUpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3lzdGVtQ29sb3JzID0gXCJBY3RpdmVUZXh0XCIgfCBcIkJ1dHRvbkZhY2VcIiB8IFwiQnV0dG9uVGV4dFwiIHwgXCJDYW52YXNcIiB8IFwiQ2FudmFzVGV4dFwiIHxcclxuICAgIFwiRmllbGRcIiB8IFwiRmllbGRUZXh0XCIgfCBcIkdyYXlUZXh0XCIgfCBcIkhpZ2hsaWdodFwiIHwgXCJIaWdobGlnaHRUZXh0XCIgfCBcIkxpbmtUZXh0XCIgfCBcIlZpc2l0ZWRUZXh0XCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgY29sb3IuIENvbG9yIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAtIGtleXdvcmRzOiBhbnkgc3RyaW5nIHRoYXQgaXMgYSBuYW1lIG9mIGEgcHJvcGVydHkgaW4gdGhlIElOYW1lZENvbG9ycyBpbnRlcmZhY2UuXHJcbiAqIC0gbnVtYmVyOlxyXG4gKiAgIC0gbmVnYXRpdmUgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBpbnZlcnRlZCBjb2xvcnMuXHJcbiAqICAgLSBpbnRlZ2VyIHBhcnQgb2YgdGhlIG51bWJlciBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAweEZGRkZGRiAtIGV2ZXJ5dGhpbmcgZWxzZSBpc1xyXG4gKiAgICAgaWdub3JlZC5cclxuICogICAtIGZsb2F0aW5nIHBvaW50IHBhcnQgb2YgdGhlIG51bWJlciBpcyB0cmVhdGVkIGFzIHBlcmNlbnRzIG9mIGFscGhhIGNoYW5uZWwuIElmIHRoZXJlIGlzIG5vXHJcbiAqICAgICBmbG9hdGluZyBwYXJ0LCBhbHBoYSBpcyAxLlxyXG4gKiAtIGZ1bmN0aW9uczogcmdiKCksIGhzbCgpLCBhbHBoYSgpIGFzIHdlbGwgYXMgYW55IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgSUNvbG9yUHJveHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc0NvbG9yID0gXCJ0cmFuc3BhcmVudFwiIHwgXCJjdXJyZW50Y29sb3JcIiB8IGtleW9mIElOYW1lZENvbG9ycyB8IG51bWJlciB8IElDb2xvclByb3h5IHwgU3lzdGVtQ29sb3JzO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogT2JqZWN0IHdob3NlIHByb3BlcnR5IG5hbWVzIGFyZSBuYW1lcyBvZiB3ZWxsLWtub3duIGNvbG9ycyBhbmQgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGhleGFkZWNpbWFsXHJcbiAqIHJlcHJlc2VudGFydGlvbiBvZiB0aGUgUkdCIHNlcGFyYXRpb25zICh3aXRob3V0IGFuIGFscGhhIG1hc2spLlxyXG4gKi9cclxuZXhwb3J0IGxldCBDb2xvcnM6IElOYW1lZENvbG9ycyA9XHJcbntcclxuICAgIGJsYWNrOiAgICAgICAgICAgICAgICAgIDB4MDAwMDAwLFxyXG4gICAgc2lsdmVyOiAgICAgICAgICAgICAgICAgMHhjMGMwYzAsXHJcbiAgICBncmF5OiAgICAgICAgICAgICAgICAgICAweDgwODA4MCxcclxuICAgIHdoaXRlOiAgICAgICAgICAgICAgICAgIDB4ZmZmZmZmLFxyXG4gICAgbWFyb29uOiAgICAgICAgICAgICAgICAgMHg4MDAwMDAsXHJcbiAgICByZWQ6ICAgICAgICAgICAgICAgICAgICAweGZmMDAwMCxcclxuICAgIHB1cnBsZTogICAgICAgICAgICAgICAgIDB4ODAwMDgwLFxyXG4gICAgZnVjaHNpYTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBncmVlbjogICAgICAgICAgICAgICAgICAweDAwODAwMCxcclxuICAgIGxpbWU6ICAgICAgICAgICAgICAgICAgIDB4MDBmZjAwLFxyXG4gICAgb2xpdmU6ICAgICAgICAgICAgICAgICAgMHg4MDgwMDAsXHJcbiAgICB5ZWxsb3c6ICAgICAgICAgICAgICAgICAweGZmZmYwMCxcclxuICAgIG5hdnk6ICAgICAgICAgICAgICAgICAgIDB4MDAwMDgwLFxyXG4gICAgYmx1ZTogICAgICAgICAgICAgICAgICAgMHgwMDAwZmYsXHJcbiAgICB0ZWFsOiAgICAgICAgICAgICAgICAgICAweDAwODA4MCxcclxuICAgIGFxdWE6ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgb3JhbmdlOiAgICAgICAgICAgICAgICAgMHhmZmE1MDAsXHJcbiAgICBhbGljZWJsdWU6ICAgICAgICAgICAgICAweGYwZjhmZixcclxuICAgIGFudGlxdWV3aGl0ZTogICAgICAgICAgIDB4ZmFlYmQ3LFxyXG4gICAgYXF1YW1hcmluZTogICAgICAgICAgICAgMHg3ZmZmZDQsXHJcbiAgICBhenVyZTogICAgICAgICAgICAgICAgICAweGYwZmZmZixcclxuICAgIGJlaWdlOiAgICAgICAgICAgICAgICAgIDB4ZjVmNWRjLFxyXG4gICAgYmlzcXVlOiAgICAgICAgICAgICAgICAgMHhmZmU0YzQsXHJcbiAgICBibGFuY2hlZGFsbW9uZDogICAgICAgICAweGZmZWJjZCxcclxuICAgIGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIDB4OGEyYmUyLFxyXG4gICAgYnJvd246ICAgICAgICAgICAgICAgICAgMHhhNTJhMmEsXHJcbiAgICBidXJseXdvb2Q6ICAgICAgICAgICAgICAweGRlYjg4NyxcclxuICAgIGNhZGV0Ymx1ZTogICAgICAgICAgICAgIDB4NWY5ZWEwLFxyXG4gICAgY2hhcnRyZXVzZTogICAgICAgICAgICAgMHg3ZmZmMDAsXHJcbiAgICBjaG9jb2xhdGU6ICAgICAgICAgICAgICAweGQyNjkxZSxcclxuICAgIGNvcmFsOiAgICAgICAgICAgICAgICAgIDB4ZmY3ZjUwLFxyXG4gICAgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgMHg2NDk1ZWQsXHJcbiAgICBjb3Juc2lsazogICAgICAgICAgICAgICAweGZmZjhkYyxcclxuICAgIGNyaW1zb246ICAgICAgICAgICAgICAgIDB4ZGMxNDNjLFxyXG4gICAgY3lhbjogICAgICAgICAgICAgICAgICAgMHgwMGZmZmYsXHJcbiAgICBkYXJrYmx1ZTogICAgICAgICAgICAgICAweDAwMDA4YixcclxuICAgIGRhcmtjeWFuOiAgICAgICAgICAgICAgIDB4MDA4YjhiLFxyXG4gICAgZGFya2dvbGRlbnJvZDogICAgICAgICAgMHhiODg2MGIsXHJcbiAgICBkYXJrZ3JheTogICAgICAgICAgICAgICAweGE5YTlhOSxcclxuICAgIGRhcmtncmVlbjogICAgICAgICAgICAgIDB4MDA2NDAwLFxyXG4gICAgZGFya2dyZXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJra2hha2k6ICAgICAgICAgICAgICAweGJkYjc2YixcclxuICAgIGRhcmttYWdlbnRhOiAgICAgICAgICAgIDB4OGIwMDhiLFxyXG4gICAgZGFya29saXZlZ3JlZW46ICAgICAgICAgMHg1NTZiMmYsXHJcbiAgICBkYXJrb3JhbmdlOiAgICAgICAgICAgICAweGZmOGMwMCxcclxuICAgIGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIDB4OTkzMmNjLFxyXG4gICAgZGFya3JlZDogICAgICAgICAgICAgICAgMHg4YjAwMDAsXHJcbiAgICBkYXJrc2FsbW9uOiAgICAgICAgICAgICAweGU5OTY3YSxcclxuICAgIGRhcmtzZWFncmVlbjogICAgICAgICAgIDB4OGZiYzhmLFxyXG4gICAgZGFya3NsYXRlYmx1ZTogICAgICAgICAgMHg0ODNkOGIsXHJcbiAgICBkYXJrc2xhdGVncmF5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIDB4MmY0ZjRmLFxyXG4gICAgZGFya3R1cnF1b2lzZTogICAgICAgICAgMHgwMGNlZDEsXHJcbiAgICBkYXJrdmlvbGV0OiAgICAgICAgICAgICAweDk0MDBkMyxcclxuICAgIGRlZXBwaW5rOiAgICAgICAgICAgICAgIDB4ZmYxNDkzLFxyXG4gICAgZGVlcHNreWJsdWU6ICAgICAgICAgICAgMHgwMGJmZmYsXHJcbiAgICBkaW1ncmF5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRpbWdyZXk6ICAgICAgICAgICAgICAgIDB4Njk2OTY5LFxyXG4gICAgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgMHgxZTkwZmYsXHJcbiAgICBmaXJlYnJpY2s6ICAgICAgICAgICAgICAweGIyMjIyMixcclxuICAgIGZsb3JhbHdoaXRlOiAgICAgICAgICAgIDB4ZmZmYWYwLFxyXG4gICAgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgMHgyMjhiMjIsXHJcbiAgICBnYWluc2Jvcm86ICAgICAgICAgICAgICAweGRjZGNkYyxcclxuICAgIGdob3N0d2hpdGU6ICAgICAgICAgICAgIDB4ZjhmOGZmLFxyXG4gICAgZ29sZDogICAgICAgICAgICAgICAgICAgMHhmZmQ3MDAsXHJcbiAgICBnb2xkZW5yb2Q6ICAgICAgICAgICAgICAweGRhYTUyMCxcclxuICAgIGdyZWVueWVsbG93OiAgICAgICAgICAgIDB4YWRmZjJmLFxyXG4gICAgZ3JleTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICBob25leWRldzogICAgICAgICAgICAgICAweGYwZmZmMCxcclxuICAgIGhvdHBpbms6ICAgICAgICAgICAgICAgIDB4ZmY2OWI0LFxyXG4gICAgaW5kaWFucmVkOiAgICAgICAgICAgICAgMHhjZDVjNWMsXHJcbiAgICBpbmRpZ286ICAgICAgICAgICAgICAgICAweDRiMDA4MixcclxuICAgIGl2b3J5OiAgICAgICAgICAgICAgICAgIDB4ZmZmZmYwLFxyXG4gICAga2hha2k6ICAgICAgICAgICAgICAgICAgMHhmMGU2OGMsXHJcbiAgICBsYXZlbmRlcjogICAgICAgICAgICAgICAweGU2ZTZmYSxcclxuICAgIGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIDB4ZmZmMGY1LFxyXG4gICAgbGF3bmdyZWVuOiAgICAgICAgICAgICAgMHg3Y2ZjMDAsXHJcbiAgICBsZW1vbmNoaWZmb246ICAgICAgICAgICAweGZmZmFjZCxcclxuICAgIGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIDB4YWRkOGU2LFxyXG4gICAgbGlnaHRjb3JhbDogICAgICAgICAgICAgMHhmMDgwODAsXHJcbiAgICBsaWdodGN5YW46ICAgICAgICAgICAgICAweGUwZmZmZixcclxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIDB4ZmFmYWQyLFxyXG4gICAgbGlnaHRncmF5OiAgICAgICAgICAgICAgMHhkM2QzZDMsXHJcbiAgICBsaWdodGdyZWVuOiAgICAgICAgICAgICAweDkwZWU5MCxcclxuICAgIGxpZ2h0Z3JleTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRwaW5rOiAgICAgICAgICAgICAgMHhmZmI2YzEsXHJcbiAgICBsaWdodHNhbG1vbjogICAgICAgICAgICAweGZmYTA3YSxcclxuICAgIGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIDB4MjBiMmFhLFxyXG4gICAgbGlnaHRza3libHVlOiAgICAgICAgICAgMHg4N2NlZmEsXHJcbiAgICBsaWdodHNsYXRlZ3JheTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIDB4Nzc4ODk5LFxyXG4gICAgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgMHhiMGM0ZGUsXHJcbiAgICBsaWdodHllbGxvdzogICAgICAgICAgICAweGZmZmZlMCxcclxuICAgIGxpbWVncmVlbjogICAgICAgICAgICAgIDB4MzJjZDMyLFxyXG4gICAgbGluZW46ICAgICAgICAgICAgICAgICAgMHhmYWYwZTYsXHJcbiAgICBtYWdlbnRhOiAgICAgICAgICAgICAgICAweGZmMDBmZixcclxuICAgIG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIDB4NjZjZGFhLFxyXG4gICAgbWVkaXVtYmx1ZTogICAgICAgICAgICAgMHgwMDAwY2QsXHJcbiAgICBtZWRpdW1vcmNoaWQ6ICAgICAgICAgICAweGJhNTVkMyxcclxuICAgIG1lZGl1bXB1cnBsZTogICAgICAgICAgIDB4OTM3MGRiLFxyXG4gICAgbWVkaXVtc2VhZ3JlZW46ICAgICAgICAgMHgzY2IzNzEsXHJcbiAgICBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgICAweDdiNjhlZSxcclxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIDB4MDBmYTlhLFxyXG4gICAgbWVkaXVtdHVycXVvaXNlOiAgICAgICAgMHg0OGQxY2MsXHJcbiAgICBtZWRpdW12aW9sZXRyZWQ6ICAgICAgICAweGM3MTU4NSxcclxuICAgIG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIDB4MTkxOTcwLFxyXG4gICAgbWludGNyZWFtOiAgICAgICAgICAgICAgMHhmNWZmZmEsXHJcbiAgICBtaXN0eXJvc2U6ICAgICAgICAgICAgICAweGZmZTRlMSxcclxuICAgIG1vY2Nhc2luOiAgICAgICAgICAgICAgIDB4ZmZlNGI1LFxyXG4gICAgbmF2YWpvd2hpdGU6ICAgICAgICAgICAgMHhmZmRlYWQsXHJcbiAgICBvbGRsYWNlOiAgICAgICAgICAgICAgICAweGZkZjVlNixcclxuICAgIG9saXZlZHJhYjogICAgICAgICAgICAgIDB4NmI4ZTIzLFxyXG4gICAgb3JhbmdlcmVkOiAgICAgICAgICAgICAgMHhmZjQ1MDAsXHJcbiAgICBvcmNoaWQ6ICAgICAgICAgICAgICAgICAweGRhNzBkNixcclxuICAgIHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIDB4ZWVlOGFhLFxyXG4gICAgcGFsZWdyZWVuOiAgICAgICAgICAgICAgMHg5OGZiOTgsXHJcbiAgICBwYWxldHVycXVvaXNlOiAgICAgICAgICAweGFmZWVlZSxcclxuICAgIHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIDB4ZGI3MDkzLFxyXG4gICAgcGFwYXlhd2hpcDogICAgICAgICAgICAgMHhmZmVmZDUsXHJcbiAgICBwZWFjaHB1ZmY6ICAgICAgICAgICAgICAweGZmZGFiOSxcclxuICAgIHBlcnU6ICAgICAgICAgICAgICAgICAgIDB4Y2Q4NTNmLFxyXG4gICAgcGluazogICAgICAgICAgICAgICAgICAgMHhmZmMwY2IsXHJcbiAgICBwbHVtOiAgICAgICAgICAgICAgICAgICAweGRkYTBkZCxcclxuICAgIHBvd2RlcmJsdWU6ICAgICAgICAgICAgIDB4YjBlMGU2LFxyXG4gICAgcm9zeWJyb3duOiAgICAgICAgICAgICAgMHhiYzhmOGYsXHJcbiAgICByb3lhbGJsdWU6ICAgICAgICAgICAgICAweDQxNjllMSxcclxuICAgIHNhZGRsZWJyb3duOiAgICAgICAgICAgIDB4OGI0NTEzLFxyXG4gICAgc2FsbW9uOiAgICAgICAgICAgICAgICAgMHhmYTgwNzIsXHJcbiAgICBzYW5keWJyb3duOiAgICAgICAgICAgICAweGY0YTQ2MCxcclxuICAgIHNlYWdyZWVuOiAgICAgICAgICAgICAgIDB4MmU4YjU3LFxyXG4gICAgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgMHhmZmY1ZWUsXHJcbiAgICBzaWVubmE6ICAgICAgICAgICAgICAgICAweGEwNTIyZCxcclxuICAgIHNreWJsdWU6ICAgICAgICAgICAgICAgIDB4ODdjZWViLFxyXG4gICAgc2xhdGVibHVlOiAgICAgICAgICAgICAgMHg2YTVhY2QsXHJcbiAgICBzbGF0ZWdyYXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNsYXRlZ3JleTogICAgICAgICAgICAgIDB4NzA4MDkwLFxyXG4gICAgc25vdzogICAgICAgICAgICAgICAgICAgMHhmZmZhZmEsXHJcbiAgICBzcHJpbmdncmVlbjogICAgICAgICAgICAweDAwZmY3ZixcclxuICAgIHN0ZWVsYmx1ZTogICAgICAgICAgICAgIDB4NDY4MmI0LFxyXG4gICAgdGFuOiAgICAgICAgICAgICAgICAgICAgMHhkMmI0OGMsXHJcbiAgICB0aGlzdGxlOiAgICAgICAgICAgICAgICAweGQ4YmZkOCxcclxuICAgIHRvbWF0bzogICAgICAgICAgICAgICAgIDB4ZmY2MzQ3LFxyXG4gICAgdHVycXVvaXNlOiAgICAgICAgICAgICAgMHg0MGUwZDAsXHJcbiAgICB2aW9sZXQ6ICAgICAgICAgICAgICAgICAweGVlODJlZSxcclxuICAgIHdoZWF0OiAgICAgICAgICAgICAgICAgIDB4ZjVkZWIzLFxyXG4gICAgd2hpdGVzbW9rZTogICAgICAgICAgICAgMHhmNWY1ZjUsXHJcbiAgICB5ZWxsb3dncmVlbjogICAgICAgICAgICAweDlhY2QzMixcclxuICAgIHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIDB4NjYzMzk5LFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBGb250RmFjZVR5cGVzIGZyb20gXCIuL0ZvbnRGYWNlVHlwZXNcIlxyXG5pbXBvcnQge29iajJzdHJ9IGZyb20gXCIuL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHtjYW1lbFRvRGFzaCwgdmFsMnN0ciwgQ3NzUGVyY2VudE1hdGgsIENzc0FuZ2xlTWF0aCwgYXJyMnN0ciwgQ3NzTnVtYmVyTWF0aH0gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZm9udCBmYWNlIGRlZmluaXRpb24gb2JqZWN0IHRvIHRoZSBDU1Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udEZhY2VUb1N0cmluZyggZm9udGZhY2U6IEZvbnRGYWNlVHlwZXMuSUZvbnRGYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfTpgO1xyXG4gICAgICAgIGxldCBwcm9wVmFsID0gZm9udGZhY2VbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3RyZXRjaFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHJldGNoVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcImZvbnRTdHlsZVwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHlsZVRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250V2VpZ2h0XCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFdlaWdodFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJzcmNcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3JjVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBwcm9wVmFsO1xyXG5cclxuICAgICAgICBzICs9IFwiO1wiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHMgKyBcIn1cIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3RyZXRjaFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0cmV0Y2hfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHlsZV9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gYG9ibGlxdWUgJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyh2KX1gLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgb2JsaXF1ZSAke2FycjJzdHIoIHYsIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250V2VpZ2h0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250V2VpZ2h0X0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFueTogZm9udFNpbmdsZVNyY1RvU3RyaW5nLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTaW5nbGVTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJsb2NhbFwiLCB2ID0+IGBsb2NhbCgke3Z9KWBdLFxyXG4gICAgICAgIFtcInVybFwiLCB2ID0+IGB1cmwoJHt2fSlgXSxcclxuICAgICAgICBbXCJmb3JtYXRcIiwgdiA9PiBgZm9ybWF0KCR7Zm9udEZvcm1hdFRvU3RyaW5nKHYpfSlgXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udEZvcm1hdFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gYFxcXCIke3Z9XFxcImAsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHR5cGVzIHVzZWQgdG8gZGVmaW5lIENTUyBgPGltYWdlPmAgdHlwZSBhbmQgcmVsYXRlZCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtJVXJsUHJveHksIEV4dGVuZGVkLCBDc3NOdW1iZXIsIENzc0FuZ2xlLCBOdW1iZXJCYXNlLCBDc3NMZW5ndGgsIENzc1Bvc2l0aW9uLCBJR2VuZXJpY1Byb3h5fSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge0Nzc0NvbG9yfSBmcm9tIFwiLi9Db2xvclR5cGVzXCI7XHJcbmltcG9ydCB7IEV4dGVudEtleXdvcmQgfSBmcm9tIFwiLi9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJbWFnZVByb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIG9mIENTUyBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBmb3JcclxuICogc2VjaWZ5aW5nIGltYWdlcy4gVGhpcyBpbnRlcmZhY2UgaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZTogbGluZWFyR3JhZGllbnQoKSwgcGFpbnQoKSxcclxuICogZWxlbWVudCgpLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImltYWdlXCI+IHt9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENzc0ltYWdlIHR5cGUgcmVwcmVzZW50cyBhIHR5cGUgdXNlZCBmb3IgQ1NTIHByb3BlcnRpZXMgdGhhdCBhY2NlcHQgdGhlIGA8aW1hZ2U+YCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzSW1hZ2UgPSBJVXJsUHJveHkgfCBJSW1hZ2VQcm94eTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFZhbHVlIG9mIGEgaGludCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zIGlzIGV4cHJlc3NlZCBhcyBhIENTUyBudW1lcmljIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRIaW50VmFsdWUgPSBFeHRlbmRlZDxOdW1iZXJCYXNlPGFueT4+O1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGhpbnQgZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucyBpcyBleHByZXNzZWQgYXMgYSBzaW5nbGUtaXRlbSBhcnJheSB0aGF0XHJcbiAqIGNvbnRhaW5zIGEgQ1NTIG51bWVyaWMgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFkaWVudEhpbnQgPSBbR3JhZGllbnRIaW50VmFsdWVdO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb2xvciBzdG9wIHdpdGggaW5kaWNhdGlvbiBvZiBsZW5ndGggZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucy4gVGhlIGZpcnN0XHJcbiAqIGl0ZW0gaXMgdGhlIGNvbG9yIHZhbHVlLCB0aGUgc2Vjb25kIGl0ZW0gaXMgdGhlIHBvc2l0aW9uIG9mIHdoZXJlIHRoZSBjb2xvciBzdGFydHMgYW5kIHRoZVxyXG4gKiBvcHRpb25hbCB0aGlyZCBpdGVtIGlzIHRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgY29sb3Igc3RvcHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFkaWVudENvbG9yQW5kTGVuZ3RoID0gW0V4dGVuZGVkPENzc0NvbG9yPiwgR3JhZGllbnRIaW50VmFsdWUsIEdyYWRpZW50SGludFZhbHVlP107XHJcblxyXG4vKipcclxuICogQ29sb3Igc3RvcCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zIGlzIGV4cHJlc3NlZCBhcyBlaXRoZXIgYSBzaW5nbGUgY29sb3IgdmFsdWVcclxuICogb3IgYW4gYXJyYXkgb2YgdHdvIG9yIHRocmVlIGl0ZW1zLiBJbiB0aGUgbGF0dGVyIGNhc2UsIHRoZSBmaXJzdCBpdGVtIGlzIHRoZSBjb2xvciB2YWx1ZSwgdGhlXHJcbiAqIHNlY29uZCBpdGVtIGlzIHRoZSBwb3NpdGlvbiBvZiB3aGVyZSB0aGUgY29sb3Igc3RhcnRzIGFuZCB0aGUgb3B0aW9uYWwgdGhpcmQgaXRlbSBpcyB0aGVcclxuICogcG9zaXRpb24gd2hlcmUgdGhlIGNvbG9yIHN0b3BzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRTdG9wID0gRXh0ZW5kZWQ8Q3NzQ29sb3I+IHwgR3JhZGllbnRDb2xvckFuZExlbmd0aDtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBlaXRoZXIgY29sb3Igc3RvcCBvciBjb2xvciBoaW50IGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFkaWVudFN0b3BPckhpbnQgPSBHcmFkaWVudFN0b3AgfCBHcmFkaWVudEhpbnQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZW51bWVyYXRlcyBwb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIHNpZGUtb3ItY29ybmVyIGZvciB0aGUgYGxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMaW5lYXJHcmFkU2lkZU9yQ29ybmVyID0gXCJib3R0b21cIiB8IFwibGVmdFwiIHwgXCJ0b3BcIiB8IFwicmlnaHRcIiB8XHJcbiAgICBcInRvcCBsZWZ0XCIgfCBcInRvcCByaWdodFwiIHwgXCJib3R0b20gcmlnaHRcIiB8IFwiYm90dG9tIGxlZnRcIiB8XHJcbiAgICBcImxlZnQgdG9wXCIgfCBcInJpZ2h0IHRvcFwiIHwgXCJsZWZ0IGJvdHRvbVwiIHwgXCJyaWdodCBib3R0b21cIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgcmVwcmVzZW50cyB0aGUgYW5nbGUgb2YgdGhlIGBsaW5lYXItZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGluZWFyR3JhZEFuZ2xlID0gRXh0ZW5kZWQ8Q3NzQW5nbGU+IHwgTGluZWFyR3JhZFNpZGVPckNvcm5lcjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIHNoYXBlIGZvciB0aGUgYHJhZGlhbC1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSYWRpYWxHcmFkaWVudFNoYXBlID0gXCJjaXJjbGVcIiB8IFwiZWxsaXBzZVwiO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIHNpemUgZm9yIHRoZSBgcmFkaWFsLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi4gSXQgaXMgYSBzaW5nbGUgTGVuZ3RoIHZhbHVlXHJcbiAqIGZvciBjaXJjbGUgYW5kIHR3by1lbGVtZW50IHR1cGxlIG9mIENzc0xlbmd0aCB2YWx1ZXMgZm9yIGVsbGlwc2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSYWRpYWxHcmFkaWVudFNpemUgPSBFeHRlbmRlZDxDc3NMZW5ndGg+IHwgW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgcGFyYW1ldGVycyBmb3IgdGhlIGBjcm9zcy1mYWRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIENyb3NzRmFkZVBhcmFtID0gRXh0ZW5kZWQ8Q3NzSW1hZ2U+IHwgW0V4dGVuZGVkPENzc0ltYWdlPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPl07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyYWRpZW50IGludGVyZmFjZSByZXByZXNlbnRzIHByb3BlcnRpZXMgdGhhdCByZXR1cm4gaW50ZXJmYWNlcyByZXByZXNlbnRpbmcgYDxncmFkaWVudD5gXHJcbiAqIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmFkaWVudFxyXG57XHJcbiAgICByZWFkb25seSBsaW5lYXI6IElMaW5lYXJHcmFkaWVudDtcclxuICAgIHJlYWRvbmx5IHJlcGVhdGluZ0xpbmVhcjogSUxpbmVhckdyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgcmFkaWFsOiBJUmFkaWFsR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSByZXBlYXRpbmdSYWRpYWw6IElSYWRpYWxHcmFkaWVudDtcclxuICAgIHJlYWRvbmx5IGNvbmljOiBJQ29uaWNHcmFkaWVudDtcclxuICAgIHJlYWRvbmx5IHJlcGVhdGluZ0NvbmljOiBJQ29uaWNHcmFkaWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElMaW5lYXJHcmFkaWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgZWl0aGVyIGBsaW5lci1ncmFkaWVudGAgb3JcclxuICogYHJlcGVhdGluZy1saW5lci1ncmFkaWVudGAgQ1NTIGZ1bmN0aW9uLiBUaGUgaW50ZXJmYWNlIGFsbG93cyBzcGVjaWZ5aW5nIGFuIGFuZ2xlIHBhcmFtZXRlclxyXG4gKiBiZWZvcmUgaW52b2NhdGlvbiB0aGF0IGFjY2VwdHMgYSBsaXN0IG9mIGNvbG9yIHN0b3BzIGFuZCBoaW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmVhckdyYWRpZW50XHJcbntcclxuICAgICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHk7XHJcblx0dG8oIGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUpOiBJTGluZWFyR3JhZGllbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUmFkaWFsR3JhZGllbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGVpdGhlciBgcmFkaWFsLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudGAgQ1NTIGZ1bmN0aW9uLiBUaGUgaW50ZXJmYWNlIGFsbG93cyBzcGVjaWZ5aW5nIHRoZSBzaGFwZSwgc2l6ZSBhbmRcclxuICogZXh0ZW50IHBhcmFtZXRlcnMgYmVmb3JlIGludm9jYXRpb24gdGhhdCBhY2NlcHRzIGEgbGlzdCBvZiBjb2xvciBzdG9wcyBhbmQgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpYWxHcmFkaWVudFxyXG57XHJcbiAgICAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5O1xyXG5cdGNpcmNsZSggc2l6ZU9yRXh0ZW50PzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KTogSVJhZGlhbEdyYWRpZW50O1xyXG5cdGVsbGlwc2UoIHNpemVPckV4dGVudD86IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XSB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KTogSVJhZGlhbEdyYWRpZW50O1xyXG5cdGV4dGVudCggZXh0ZW50OiBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPik6IElSYWRpYWxHcmFkaWVudDtcclxuXHRhdCggcG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBJUmFkaWFsR3JhZGllbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29uaWNHcmFkaWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgZWl0aGVyIGBjb25pYy1ncmFkaWVudGAgb3JcclxuICogYHJlcGVhdGluZy1jb25pYy1ncmFkaWVudGAgQ1NTIGZ1bmN0aW9uLiBUaGUgaW50ZXJmYWNlIGFsbG93cyBzcGVjaWZ5aW5nIHRoZSBgZnJvbWAgYW5kXHJcbiAqIGBwb3NpdGlvbmAgcGFyYW1ldGVycyBiZWZvcmUgaW52b2NhdGlvbiB0aGF0IGFjY2VwdHMgYSBsaXN0IG9mIGNvbG9yIHN0b3BzIGFuZCBoaW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmljR3JhZGllbnRcclxue1xyXG4gICAgKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eTtcclxuXHRmcm9tKCBhbmdsZTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSUNvbmljR3JhZGllbnQ7XHJcblx0YXQoIHBvczogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogSUNvbmljR3JhZGllbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgTWVkaWFUeXBlcyBmcm9tIFwiLi9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHt2YWwyc3RyLCBjYW1lbFRvRGFzaCwgYXJyMnN0cn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzcGVjdFJhdGlvVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5Bc3BlY3RSYXRpb0ZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsWzBdICsgXCIvXCIgKyB2YWxbMV07XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuTGVuZ3RoRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcInB4XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLlJlc29sdXRpb25GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwiZHBpXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxudHlwZSBjb252ZXJ0RnVuY1R5cGU8SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9ICh2YWw6IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFGZWF0dXJlSW5mbyByZXByZXNlbnRzIGluZm9ybWF0aW9uIHRoYXQgd2Uga2VlcCBmb3Igc3R5bGUgcHJvcGVydGllc1xyXG4gKi9cclxudHlwZSBNZWRpYUZlYXR1cmVJbmZvPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSBjb252ZXJ0RnVuY1R5cGU8Sz4gfCBib29sZWFuIHxcclxuICAgIHtcclxuICAgICAgICAvKiogRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxuICAgICAgICBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlPEs+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiBkZWZpbmVkLCBpbmRpY2F0ZXMgdGhlIHZhbHVlLCB3aGljaCB3ZSB3aWxsIG5vdCBwdXQgaW50byBDU1Mgc3RyaW5nLiBUaGlzIGlzIG5lZWRlZCBmb3JcclxuICAgICAgICAgKiBtZWRpYSBmZWF0dXJlcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aG91dCB0aGUgdmFsdWUsIGUuZy4gY29sb3Igb3IgY29sb3ItaW5kZXguXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmZWF0dXJlIGlzIGEgXCJyYW5nZVwiIGZlYXR1cmU7IHRoYXQgaXMsIGNhbiBiZSB1c2VkIGluIGFuXHJcbiAgICAgICAgICogZXhwcmVzc2lvbiAoYSA8PSBmZWF0dXJlIDw9IGIpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhUXVlcnlUb1N0cmluZyggcXVlcnk6IHN0cmluZyB8IE1lZGlhVHlwZXMuTWVkaWFRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggcXVlcnksIHtcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZU1lZGlhUXVlcnlUb1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuU2luZ2xlTWVkaWFRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBtZWRpYVR5cGUgPSBxdWVyeS4kbWVkaWFUeXBlO1xyXG4gICAgbGV0IG9ubHkgPSBxdWVyeS4kb25seTtcclxuICAgIGxldCBuZWdhdGUgPSBxdWVyeS4kbmVnYXRlO1xyXG5cclxuICAgIGxldCBpdGVtczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChtZWRpYVR5cGUpXHJcbiAgICAgICAgaXRlbXMucHVzaCggKG9ubHkgPyBcIm9ubHkgXCIgOiBcIlwiKSArIG1lZGlhVHlwZSk7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gcXVlcnkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCIkXCIpKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHF1ZXJ5W3Byb3BOYW1lXSlcclxuICAgICAgICAgICAgaXRlbXMucHVzaCggYCgke21lZGlhRmVhdHVyZVRvU3RyaW5nKCBwcm9wTmFtZSwgcXVlcnlbcHJvcE5hbWVdKX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25lZ2F0ZSA/IFwibm90IFwiIDogXCJcIn0ke2l0ZW1zLmpvaW4oXCIgYW5kIFwiKX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgZmVhdHVyZSB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRmVhdHVyZVRvU3RyaW5nKCBmZWF0dXJlTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnksIHZhbHVlT25seT86IGJvb2xlYW4pOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghZmVhdHVyZU5hbWUgfHwgcHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IFxyXG4gICAgbGV0IGluZm86IE1lZGlhRmVhdHVyZUluZm8gPSBtZWRpYUZlYXR1cmVzW2ZlYXR1cmVOYW1lXTtcclxuXHJcbiAgICBsZXQgcmVhbEZlYXR1cmVOYW1lID0gY2FtZWxUb0Rhc2goIGZlYXR1cmVOYW1lKTtcclxuXHJcbiAgICAvLyBpZiBkZWZhdWx0VmFsdWUgaXMgZGVmaW5lZCBhbmQgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGVxdWFsIHRvIGl0LCBubyB2YWx1ZSBzaG91bGQgYmUgcmV0dXJuZWQuXHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmRlZmF1bHRWYWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wVmFsID09PSBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IFwiXCIgOiByZWFsRmVhdHVyZU5hbWU7XHJcblxyXG4gICAgbGV0IGNvbnZlcnQgPSB0eXBlb2YgaW5mbyA9PT0gXCJmdW5jdGlvblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5jb252ZXJ0IDogdW5kZWZpbmVkO1xyXG4gICAgbGV0IGlzUmFuZ2UgPSB0eXBlb2YgaW5mbyA9PT0gXCJib29sZWFuXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmlzUmFuZ2UgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNSYW5nZSAmJiAhdmFsdWVPbmx5ICYmIEFycmF5LmlzQXJyYXkoIHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzMSA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMF0sIGNvbnZlcnQpO1xyXG4gICAgICAgIGxldCBzMiA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMV0sIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiBgJHtzMX0gPD0gJHtyZWFsRmVhdHVyZU5hbWV9IDw9ICR7czJ9YDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWwsIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzIDogcmVhbEZlYXR1cmVOYW1lICsgXCI6XCIgKyBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWw6IGFueSwgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGlmIChjb252ZXJ0KVxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0KCBwcm9wVmFsKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggcHJvcFZhbCkpXHJcbiAgICAgICAgcmV0dXJuIGFycjJzdHIoIHByb3BWYWwpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxubGV0IG1lZGlhRmVhdHVyZXM6IHsgW0sgaW4ga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRdPzogTWVkaWFGZWF0dXJlSW5mbzxLPiB9ID1cclxue1xyXG4gICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtaW5Bc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIG1heEFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgY29sb3I6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBjb2xvckluZGV4OiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgaGVpZ2h0OiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluSGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhIZWlnaHQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1vbm9jaHJvbWU6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICByZXNvbHV0aW9uOiB7IGNvbnZlcnQ6IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pblJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhSZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgd2lkdGg6IHsgY29udmVydDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5XaWR0aDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4V2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSBcIi4vU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge3ZhbDJzdHJ9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHNlbGVjdG9yLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdHdvLW51bWJlciB0dXBsZSB0byBhIHN0cmluZyBpbiB0aGUgZm9ybSBBbitCLlxyXG4gKi9cclxuZnVuY3Rpb24gbnRoVHVwbGVUb1N0cmluZyggdmFsOiBbbnVtYmVyLCBudW1iZXI/XSk6IHN0cmluZ1xyXG57XHJcblx0bGV0IHYwID0gdmFsMnN0ciggdmFsWzBdKTtcclxuXHRsZXQgdjFuID0gdmFsWzFdO1xyXG5cclxuXHQvLyB0aGUgJyF2MW4nIGV4cHJlc3Npb24gY292ZXJzIG51bGwsIHVuZGVmaW5lZCBhbmQgMC5cclxuXHRsZXQgdjEgPSAhdjFuID8gXCJcIiA6IHYxbiA+IDAgPyBcIitcIiArIHZhbDJzdHIoIHYxbikgOiBcIi1cIiArIHZhbDJzdHIoIC12MW4pO1xyXG5cclxuXHRyZXR1cm4gYCR7djB9biR7djF9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yVG9TdHJpbmcoIHZhbDogQ3NzU2VsZWN0b3IpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuXHRcdGFyclNlcDogXCJcIlxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBwYXJhbWV0ZXJpemVkIHBzZXVkbyBlbnRpdHkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHNldWRvRW50aXR5VG9TdHJpbmcoIGVudGl0eU5hbWU6IHN0cmluZywgdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZW50aXR5TmFtZSlcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRpZiAoZW50aXR5TmFtZS5zdGFydHNXaXRoKCBcIjpudGhcIikpXHJcblx0XHRyZXR1cm4gdmFsMnN0ciggdmFsLCB7IGZyb21BcnJheTogbnRoVHVwbGVUb1N0cmluZyB9KTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsMnN0cih2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SVN0cmluZ1Byb3h5LCBJR2VuZXJpY1Byb3h5fSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtJU3R5bGVSdWxlLCBJQ2xhc3NOYW1lUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZWxlY3RvclByb3h5IGZ1bmN0aW9uIHJldHVybnMgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nLiBUaGlzIHR5cGUgaXMgcmV0dXJuZWQgZnJvbSB0aGVcclxuICogW1tzZWxlY3Rvcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0b3JQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJzZWxlY3RvclwiPiB7fTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIHNlbGVjdG9yIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIFtbc2VsZWN0b3JdXSBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3Rvckl0ZW0gPSBzdHJpbmcgfCBJU3R5bGVSdWxlIHwgSUNsYXNzTmFtZVJ1bGUgfCBJU3RyaW5nUHJveHkgfCBJU2VsZWN0b3JQcm94eTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2VsZWN0b3IgKi9cclxuZXhwb3J0IHR5cGUgQ3NzU2VsZWN0b3IgPSBTZWxlY3Rvckl0ZW0gfCBTZWxlY3Rvckl0ZW1bXTtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHJpbnQtcmVsYXRlZCBwc2V1ZG8gY2xhc3NlcyAtIHRob3NlIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRoIHRoZSBAcGFnZSBDU1MgcnVsZSAqL1xyXG5leHBvcnQgdHlwZSBQYWdlUHNldWRvQ2xhc3MgPSBcIjpibGFua1wiIHwgXCI6Zmlyc3RcIiB8IFwiOmxlZnRcIiB8IFwiOnJpZ2h0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBzZXVkbyBjbGFzc2VzICovXHJcbmV4cG9ydCB0eXBlIFBzZXVkb0NsYXNzID0gUGFnZVBzZXVkb0NsYXNzIHxcclxuXHRcIjphY3RpdmVcIiB8IFwiOmFueS1saW5rXCIgfCBcIjpibGFua1wiIHwgXCI6Y2hlY2tlZFwiIHwgXCI6ZGVmYXVsdFwiIHwgXCI6ZGVmaW5lZFwiIHwgXCI6ZGlzYWJsZWRcIiB8XHJcblx0XCI6ZW1wdHlcIiB8IFwiOmVuYWJsZWRcIiB8IFwiOmZpcnN0LWNoaWxkXCIgfCBcIjpmaXJzdC1vZi10eXBlXCIgfCBcIjpmdWxsc2NyZWVuXCIgfCBcIjpmb2N1c1wiIHxcclxuXHRcIjpmb2N1cy12aXNpYmxlXCIgfCBcIjpmb2N1cy1XaXRoaW5cIiB8IFwiOmhvdmVyXCIgfCBcIjppbmRldGVybWluYXRlXCIgfCBcIjppbi1yYW5nZVwiIHwgXCI6aW52YWxpZFwiIHxcclxuXHRcIjpsYXN0LWNoaWxkXCIgfCBcIjpsYXN0LW9mLXR5cGVcIiB8IFwiOmxpbmtcIiB8IFwiOm9ubHktY2hpbGRcIiB8IFwiOm9ubHktb2YtdHlwZVwiIHwgXCI6b3B0aW9uYWxcIiB8XHJcblx0XCI6b3V0LW9mLXJhbmdlXCIgfCBcIjpwbGFjZWhvbGRlci1zaG93blwiIHwgXCI6cmVhZC1vbmx5XCIgfCBcIjpyZWFkLXdyaXRlXCIgfCBcIjpyZXF1aXJlZFwiIHwgXCI6cm9vdFwiIHxcclxuXHRcIjpzY29wZVwiIHwgXCI6dGFyZ2V0XCIgfCBcIjp2YWxpZFwiIHwgXCI6dmlzaXRlZFwiIHwgXCI6ZGlyKHJ0bClcIiB8IFwiOmRpcihsdHIpXCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBzZXVkbyBlbGVtZW50cyAqL1xyXG5leHBvcnQgdHlwZSBQc2V1ZG9FbGVtZW50ID0gXCI6OmFmdGVyXCIgfCBcIjo6YmFja2Ryb3BcIiB8IFwiOjpiZWZvcmVcIiB8IFwiOjpjdWVcIiB8IFwiOjpmaXJzdExldHRlclwiIHxcclxuXHRcIjo6Zmlyc3RMaW5lXCIgfCBcIjo6Z3JhbW1hckVycm9yXCIgfCBcIjo6bWFya2VyXCIgfCBcIjo6cGxhY2Vob2xkZXJcIiB8IFwiOjpzZWxlY3Rpb25cIiB8IFwiOjpzcGVsbGluZ0Vycm9yXCI7XHJcblxyXG5cclxuXHJcbi8qKiBDb21iaW5lcyBuYW1lcyBvZiBub24tcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyBhbmQgcHNldWRvIGVsZW1lbnRzICovXHJcbmV4cG9ydCB0eXBlIFBzZXVkb0VudGl0eSA9IFBzZXVkb0NsYXNzIHwgUHNldWRvRWxlbWVudDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGV4cHJlc3Npb24gQW4rQiwgd2hpY2ggaXMgdXNlZCBmb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyBsaWtlIGBudGgtY2hpbGRgLiBJdFxyXG4gKiBjYW4gYmUgYSBzdHJpbmcsIGEgc2luZ2xlIG51bWJlciBvciBhIHR1cGxlIHdpdGggb25lIG9yIHR3byBudW1iZXJzLiBJZiBpdCBpcyBhIHNpbmdsZSBudW1iZXIsXHJcbiAqIHRoZSAnbicgaW4gQW4rQiB3aWxsIG5vdCBiZSB1c2VkIC0gYXMgaW4gYG50aC1jaGlsZCgyKWAuIElmIGl0IGlzIGEgdHVwbGUsIHRoZSAnbicgd2lsbCBiZSB1c2VkXHJcbiAqIGV2ZW4gaWYgdGhlIHNlY29uZCB0dXBsZSdzIGVsZW1lbnQgaXMgbm90IHByb3ZpZGVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTnRoQ2hpbGRFeHByZXNzaW9uID0gXCJvZGRcIiB8IFwiZXZlblwiIHwgbnVtYmVyIHwgW251bWJlciwgbnVtYmVyP10gfCBzdHJpbmcgfCBJU3RyaW5nUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcmFtZXRlcml6ZWRQc2V1ZG9DbGFzcyBpbnRlcmZhY2UgbWFwcyBuYW1lcyBvZiBwc2V1ZG8gY2xhc3NlcyB0aGF0IHJlcXVpcmUgcGFyYW1ldGVyc1xyXG4gKiB0byB0aGUgdHlwZSB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlc2UgcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtZXRlcml6ZWRQc2V1ZG9DbGFzc1xyXG57XHJcblx0XCI6aGFzXCI6IHN0cmluZztcclxuXHRcIjpob3N0XCI6IHN0cmluZztcclxuXHRcIjpob3N0LWNvbnRleHRcIjogc3RyaW5nO1xyXG5cdFwiOmlzXCI6IHN0cmluZztcclxuXHRcIjpsYW5nXCI6IHN0cmluZztcclxuXHRcIjpub3RcIjogc3RyaW5nO1xyXG5cdFwiOm50aC1jaGlsZFwiOiBOdGhDaGlsZEV4cHJlc3Npb247XHJcblx0XCI6bnRoLW9mLXR5cGVcIjogTnRoQ2hpbGRFeHByZXNzaW9uO1xyXG5cdFwiOm50aC1sYXN0LWNoaWxkXCI6IE50aENoaWxkRXhwcmVzc2lvbjtcclxuXHRcIjpudGgtbGFzdC1vZi10eXBlXCI6IE50aENoaWxkRXhwcmVzc2lvbjtcclxuXHRcIjp3aGVyZVwiOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyYW1ldGVyaXplZFBzZXVkb0VsZW1lbnQgaW50ZXJmYWNlIG1hcHMgbmFtZXMgb2YgcHNldWRvIGVsZW1lbnRzIHRoYXQgcmVxdWlyZSBwYXJhbWV0ZXJzXHJcbiAqIHRvIHRoZSB0eXBlIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB0aGVzZSBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyYW1ldGVyaXplZFBzZXVkb0VsZW1lbnRcclxue1xyXG5cdFwiOjpwYXJ0XCI6IHN0cmluZztcclxuXHRcIjo6c2xvdHRlZFwiOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eSBpbnRlcmZhY2UgY29tYmluZXMgSVBhcmFtZXRlcml6ZWRQc2V1ZG9DbGFzcyBhbmRcclxuICogSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbGVtZW50IGludGVyZmFjZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5IGV4dGVuZHMgSVBhcmFtZXRlcml6ZWRQc2V1ZG9DbGFzcywgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbGVtZW50XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgRXh0ZW5kZWRTdHlsZXNldCwgQW5pbWF0aW9uX1NpbmdsZSwgVGltaW5nRnVuY3Rpb25fU2luZ2xlLCBCYWNrZ3JvdW5kX1NpbmdsZSwgQmFja2dyb3VuZFNpemVfU2luZ2xlLFxyXG4gICAgQm9yZGVySW1hZ2VfT2JqZWN0LCBCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZSwgQm94U2hhZG93X1NpbmdsZSwgQm9yZGVyUmFkaXVzX1N0eWxlVHlwZSxcclxuICAgIEJvcmRlcl9TdHlsZVR5cGUsIENvbHVtbnNfU3R5bGVUeXBlLCBDdXJzb3JfU3R5bGVUeXBlLCBGbGV4X1N0eWxlVHlwZSwgRm9udF9TdHlsZVR5cGUsXHJcbiAgICBHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGUsIEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlLCBNYXJrZXJfU3R5bGVUeXBlLCBSb3RhdGVfU3R5bGVUeXBlLFxyXG4gICAgVGV4dERlY29yYXRpb25fU3R5bGVUeXBlLCBUcmFuc2l0aW9uX1NpbmdsZSwgT2Zmc2V0X1N0eWxlVHlwZSwgU3R5bGVzZXQsIEN1c3RvbVZhcl9TdHlsZVR5cGUsXHJcbiAgICBWYXJUZW1wbGF0ZU5hbWUsIFN1cHBvcnRzUXVlcnksIFNpbmdsZVN1cHBvcnRzUXVlcnksIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbiwgR3JpZFRyYWNrXHJcbn0gZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWQsIENzc1JhZGl1cywgT25lT3JNYW55LCBDc3NNdWx0aUxlbmd0aCwgQ3NzTXVsdGlUaW1lfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbWVsVG9EYXNoLCBkYXNoVG9DYW1lbCwgdmFsMnN0ciwgYXJyMnN0ciwgSVZhbHVlQ29udmVydE9wdGlvbnMsXHJcbiAgICBwb3Myc3RyLCBtdWx0aVBvczJzdHIsIENzc0xlbmd0aE1hdGgsIENzc1RpbWVNYXRoLCBDc3NOdW1iZXJNYXRoLFxyXG4gICAgQ3NzQW5nbGVNYXRoLCBDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgQ3NzUmVzb2x1dGlvbk1hdGgsIHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcsXHJcbn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIjtcclxuaW1wb3J0IHtJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgZm9yIGNvbnZlcnRpbmcgQ1NTIHByb3BlcnR5IHR5cGVzIHRvIHN0cmluZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QoIHZhbDogQW5pbWF0aW9uX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImNvdW50XCIsIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIixcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcInN0YXRlXCIsXHJcbiAgICAgICAgXCJuYW1lXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUFuaW1hdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QW5pbWF0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE9uZU9yTWFueTxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+Pik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlciggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBzdGVwcygke3ZhbH0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXkoIHZhbDogYW55W10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsIGFzIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSlcclxuICAgICAgICA6IGFycjJzdHIoIHZhbCwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlLCBcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHN0ZXBzIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2WzBdIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uIFlvdSBoYXZlOiAke3ZbMF19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIoIHZbMF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGFuIEludGVnZXIuIFlvdSBoYXZlOiAke3ZbMF19YCk7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBzdGVwcygke3ZbMF19JHt2Lmxlbmd0aCA9PT0gMiA/IFwiLFwiICsgdlsxXSA6IFwiXCJ9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlemllciBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8IDAgfHwgdlswXSA+IDEgfHwgdlsyXSA8IDAgfHwgdlsyXSA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBGaXJzdCBhbmQgdGhpcmQgcGFyYW1ldGVycyBvZiBjdWJpYy1iZXppZXIgYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxLiBZb3UgaGF2ZSAke3ZbMF19IGFuZCAke3ZbMl19YCk7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjdWJpYy1iZXppZXIoJHt2WzBdfSwke3ZbMV19LCR7dlsyXX0sJHt2WzNdfSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0KCB2YWw6IEJhY2tncm91bmRfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXSxcclxuICAgICAgICBcImltYWdlXCIsXHJcbiAgICAgICAgW1wicG9zaXRpb25cIiwgcG9zMnN0cl0sXHJcbiAgICAgICAgW1wic2l6ZVwiLCBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLCBcIi9cIl0sXHJcbiAgICAgICAgXCJyZXBlYXRcIixcclxuICAgICAgICBcImF0dGFjaG1lbnRcIixcclxuICAgICAgICBcIm9yaWdpblwiLFxyXG4gICAgICAgIFwiY2xpcFwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxCYWNrZ3JvdW5kX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QmFja2dyb3VuZFNpemVfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlVG9TdHJpbmcoIHZhbDogQm9yZGVySW1hZ2VfT2JqZWN0KTogc3RyaW5nXHJcbntcclxuICAgIC8vIGlmIHdpZHRoIGlzIHNwZWNpZmllZCwgYnV0IHNsaWNlIGlzIG5vdCwgd2UgbmVlZCB0byBzZXQgc2xpY2UgdG8gdGhlIGRlZmF1bHQgMTAwJSB2YWx1ZTtcclxuICAgIC8vIGlmIG91dHNldCBpcyBzcGVjaWZpZWQgYnV0IHdpZHRoIGlzIG5vdC4gd2UgbmVlZCB0byBzZXQgd2lkdGggdG8gdGhlIGRlZmF1bHQgMSB2YWx1ZTtcclxuICAgIGxldCB2YWxDb3B5OiBCb3JkZXJJbWFnZV9PYmplY3QgPSBPYmplY3QuYXNzaWduKCB7fSwgdmFsKTtcclxuICAgIGlmICh2YWwuc2xpY2UgPT0gbnVsbCAmJiAodmFsLndpZHRoICE9IG51bGwgfHwgdmFsLm91dHNldCAhPSBudWxsKSlcclxuICAgICAgICB2YWxDb3B5LnNsaWNlID0gXCIxMDAlXCI7XHJcbiAgICBpZiAodmFsLndpZHRoID09IG51bGwgJiYgdmFsLm91dHNldCAhPSBudWxsKVxyXG4gICAgICAgIHZhbENvcHkud2lkdGggPSAxO1xyXG5cclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWxDb3B5LCBbXHJcbiAgICAgICAgXCJzb3VyY2VcIixcclxuICAgICAgICBbXCJzbGljZVwiLCBcImJvcmRlckltYWdlU2xpY2VcIl0sXHJcbiAgICAgICAgW1wid2lkdGhcIiwgbnVsbCwgXCIvXCJdLFxyXG4gICAgICAgIFtcIm91dHNldFwiLG51bGwsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHNsaWNlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogdiA9PiB2YWwyc3RyKCB2LCB7XHJcbiAgICAgICAgICAgIGZyb21Cb29sOiAoKSA9PiBcImZpbGxcIixcclxuICAgICAgICAgICAgZnJvbU51bWJlcjogdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0KCB2YWw6IEJveFNoYWRvd19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImluc2V0XCIsIHYgPT4gdiA/IFwiaW5zZXRcIiA6IFwiXCJdLFxyXG4gICAgICAgIFtcInhcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJ5XCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiYmx1clwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInNwcmVhZFwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29ybmVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1JhZGl1cz4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxCb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggdlswXSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3byBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzID0gYXJyMnN0ciggdlswXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBzICs9IFwiIC8gXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIGFycjJzdHIoIHZbMV0sIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gc2luZ2xlIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzaWRlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVyVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Qm9yZGVyX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidWY6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGlmICh2WzBdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzBdKSlcclxuXHJcbiAgICAgICAgICAgIGlmICh2WzFdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggdmFsMnN0cih2WzFdKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodlsyXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIGNvbG9yVG9TdHJpbmcodlsyXSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1Zi5qb2luKFwiIFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2x1bW5zIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sdW1uc1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENvbHVtbnNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHZbMF0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsxXSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjdXJzb3Igc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjdXJzb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDdXJzb3JfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyB0aGUgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LiBJZiBpdCBpcyBhbiBhcnJheSxcclxuICAgIC8vIGlmIHRoZSBmaXJzdCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIHRoZW4gd2UgbmVlZCB0byB1c2Ugc3BhY2UgYXMgYSBzZXBhcmF0b3IgKGJlY2F1c2VcclxuICAgIC8vIHRoaXMgaXMgYSBVUkwgd2l0aCBvcHRpb25hbCBudW1iZXJzIGZvciB0aGUgaG90IHNwb3QpOyBvdGhlcndpc2UsIHdlIHVzZSBjb21tYSBhcyBhXHJcbiAgICAvLyBzZXBhcmF0b3IgLSBiZWNhdXNlIHRoZXNlIGFyZSBtdWx0aXBsZSBjdXJzb3IgZGVmaW5pdGlvbnMuXHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHYubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIodik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2WzFdID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIoIHYsIHsgYXJyU2VwOiBcIiBcIn0pXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIoIHYsIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJJdGVtRnVuYzogY3Vyc29yVG9TdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxleFRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEZsZXhfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5qb2luKCBcIiBcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB2WzBdICsgXCIgXCIgKyB2WzFdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMl0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250X2Zyb21PYmplY3QoIHZhbDogYW55KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJzdHlsZVwiLCBmb250U3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJ2YXJpYW50XCIsXHJcbiAgICAgICAgXCJ3ZWlnaHRcIixcclxuICAgICAgICBcInN0cmV0Y2hcIixcclxuICAgICAgICBbXCJzaXplXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wibGluZUhlaWdodFwiLCBudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgXCJmYW1pbHlcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Rm9udF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IFwib2JsaXF1ZSBcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCB2KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JpZFRlbXBsYXRlQXJlYXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHZhbCBjYW4gYmUgYXJyYXkgb2YgZnVuY3Rpb25zIChJUXVvdGVkUHJveHlbXSkgb3IgYXJyYXlzIChHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb25bXSlcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUdyaWRUZW1wbGF0ZUFyZWFzRnJvbURlZmluaXRpb25zKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgYXJyYXkgb2YgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uIG9iamVjdHMgdG8gYSBzdHJpbmcgdGhhdCBpcyBzdWl0YWJsZSBmb3JcclxuICogdGhlIGdyaWQtdGVtcGxhdGUtYXJlYXMgZm9ybWF0LlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlR3JpZFRlbXBsYXRlQXJlYXNGcm9tRGVmaW5pdGlvbnMoIGRlZnM6IEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbltdKTogc3RyaW5nXHJcbntcclxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBzaXplIG9mIHRoZSBtYXRyaXggZnJvbSB0aGUgYXJlYXMnIHNpemVzXHJcbiAgICBsZXQgcm93Q291bnQgPSAwLCBjb2xDb3VudCA9IDA7XHJcbiAgICBmb3IoIGxldCBkZWYgb2YgZGVmcylcclxuICAgIHtcclxuICAgICAgICByb3dDb3VudCA9IE1hdGgubWF4KCByb3dDb3VudCwgZGVmWzNdKTtcclxuICAgICAgICBjb2xDb3VudCA9IE1hdGgubWF4KCBjb2xDb3VudCwgZGVmWzRdKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm93Q291bnQgPT09IDAgfHwgY29sQ291bnQgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIHJvd3Mgd2hlcmUgZXZlcnkgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBjZWxsc1xyXG4gICAgbGV0IG1hdHJpeCA9IG5ldyBBcnJheTxzdHJpbmdbXT4ocm93Q291bnQpO1xyXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG4gICAgICAgIG1hdHJpeFtpXSA9IG5ldyBBcnJheTxzdHJpbmc+KGNvbENvdW50KTtcclxuXHJcbiAgICAvLyBnbyBvdmVyIGRlZmluaXRpb25zIGFuZCBmaWxsIHRoZSBhcHByb3ByaWF0ZSBwbGFjZXMgaW4gdGhlIGNlbGxzIHdpdGggYXJlYSBuYW1lc1xyXG4gICAgZm9yKCBsZXQgZGVmIG9mIGRlZnMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB2YWwyc3RyKCBkZWZbMF0pO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSBkZWZbMV07IGkgPD0gZGVmWzNdOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoIGxldCBqID0gZGVmWzJdOyBqIDw9IGRlZls0XTsgaisrKVxyXG4gICAgICAgICAgICAgICAgbWF0cml4W2ktMV1bai0xXSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdvIG92ZXIgb3VyIG1hdHJpeCBhbmQgZm9yIGV2ZXJ5IHJvdyBjcmVhdGUgYSBxdW90ZWQgc3RyaW5nLiBTaW5jZSBvdXIgY2VsbCBhcnJheXMgbWF5IGJlXHJcbiAgICAvLyBzcGFyc2UsIHVzZSBkb3QgZm9yIHRoZSB1bmRlZmluZWQgY2VsbHNcclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKylcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93TmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yKCBsZXQgaiA9IDA7IGogPCByb3dDb3VudDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBtYXRyaXhbaV1bal07XHJcbiAgICAgICAgICAgIHJvd05hbWVzLnB1c2goIG5hbWUgPyBuYW1lIDogXCIuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzICs9IGBcIiR7cm93TmFtZXMuam9pbihcIiBcIil9XCJcXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmlkVHJhY2tUb1N0cmluZyggdmFsOiBHcmlkVHJhY2spOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2KSxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYFske2FycjJzdHIodil9XWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyaWRBeGlzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8R3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdiksXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGdyaWRUcmFja1RvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtYXJrZXJTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE1hcmtlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqOiB2ID0+IGB1cmwoIyR7KHZhbCBhcyBJSURSdWxlKS5uYW1lfSlgXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByb3RhdGVUb1N0cmluZyggdmFsOlJvdGF0ZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt2WzBdfSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHZbMV0pfWA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt2WzBdfSAke3ZbMV19ICR7dlsyXX0gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyh2WzNdKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFwibGluZVwiLFxyXG4gICAgICAgIFwic3R5bGVcIixcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXSxcclxuICAgICAgICBbXCJ0aGlja25lc3NcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxUcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcInByb3BlcnR5XCIsIGNhbWVsVG9EYXNoXSxcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRyYW5zaXRpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvZmZzZXRUb1N0cmluZyggdmFsOiBPZmZzZXRfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJwb3NpdGlvblwiLCBcIm9mZnNldFBvc2l0aW9uXCJdLFxyXG4gICAgICAgIFtcInBhdGhcIiwgXCJvZmZzZXRQYXRoXCJdLFxyXG4gICAgICAgIFtcImRpc3RhbmNlXCIsIFwib2Zmc2V0RGlzdGFuY2VcIl0sXHJcbiAgICAgICAgW1wicm90YXRlXCIsIFwib2Zmc2V0Um90YXRlXCJdLFxyXG4gICAgICAgIFtcImFuY2hvclwiLCBcIm9mZnNldEFuY2hvclwiLCBcIi9cIl0sXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyAqL1xyXG5leHBvcnQgdHlwZSBUb1N0cmluZ0Z1bmMgPSAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gYSBDU1Mgc3RyaW5nIHVzaW5nIHRoZSBpbmZvIHBhcmFtZXRlciB0byBpbmZvcm0gaG93IHRoZSBvYmplY3Qnc1xyXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncy4gVGhlIGluZm8gcGFyYW1ldGVyIGlzIGFuIGFycmF5IG9mIGVpdGhlciBzdHJpbmdzXHJcbiAqIG9yIHR3by0gb3IgdGhyZS1lbGVtZW50IHR1cGxlcy4gVGhlIG9ubHkgc3RyaW5nIGFuZCB0aGUgZmlyc3QgdHVwbGUgZWxlbWVudCBjb3JyZXNwb25kcyB0byBhXHJcbiAqIHByb3BlcnR5IGV4cGVjdGVkIGluIHRoZSB2YWx1ZSBvYmplY3QgdG8gYmUgY29udmVydGVkLiBFYWNoIHByb3BlcnR5IGlzIGNvbnZlcnRlZCBhY2NvcmRpbmdcclxuICogdG8gdGhlIGZvbGxvd2luZyBydWxlczpcclxuICogLSBJZiB0aGUgYXJyYXkgaXRlbSBpcyBqdXN0IGEgc3RyaW5nLCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZ1xyXG4gKiAgIHRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uLlxyXG4gKiAtIElmIHRoZSBzZWNvbmQgZWxlbWVudCBpcyBudWxsIG9yIHVuZGVmaW5lZCwgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmdcclxuICogICB0aGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbi4uXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIGEgc3RyaW5nIGl0IGlzIHRyZWF0ZWQgYXMgYSBuYW1lIG9mIGEgbG9uZ2hhbmQgc3R5bGUgcHJvcGVydHkuIFRoZVxyXG4gKiAgIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nIHRoZSBzdHlsZVByb3BUb1N0cmluZyBmdW5jdGlvbiBmb3IgdGhpcyBsb25naGFuZCBzdHlsZVxyXG4gKiAgIHByb3BlcnR5LlxyXG4gKiAtIElmIHRoZSBzZWNvbmQgZWxlbWVudCBpcyBhIGZ1bmN0aW9uLCBpdCBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIHZhbHVlJ3MgcHJvcGVydHkuXHJcbiAqIC0gSWYgYSB0aGlyZCBlbGVtZW50IGV4aXN0cyBpbiB0aGUgdHVwbGUgaXQgaXMgdHJlYXRlZCBhcyBhIHByZWZpeCB0byBiZSBwbGFjZWQgYmVmb3JlIHRoZVxyXG4gKiAgIGNvbnZlcnRlZCBwcm9wZXJ0eSB2YWx1ZS5cclxuICogXHJcbiAqIFRoZSBvcmRlciBvZiB0aGUgbmFtZXMgZGV0ZXJtaW5lcyBpbiB3aGljaCBvcmRlciB0aGUgcHJvcGVydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmoyc3RyKCB2YWw6IGFueSxcclxuICAgIGluZm86IChzdHJpbmcgfCBbc3RyaW5nLCBudWxsIHwgc3RyaW5nIHwgVG9TdHJpbmdGdW5jLCBzdHJpbmc/XSApW10sXHJcbiAgICBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG5cclxuICAgIGxldCBidWY6IChzdHJpbmcpW10gPSBbXTtcclxuICAgIGluZm8uZm9yRWFjaCggbmFtZU9yVHVwbGUgPT5cclxuICAgIHtcclxuICAgICAgICAvLyBnZXQgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IGluIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlO1xyXG4gICAgICAgIC8vIGlmIHRoZSBwcm9wZXJ0aWVzIHZhbHVlIGlzIG5vdCBkZWZpbmVkLCBza2lwIGl0LlxyXG4gICAgICAgIGxldCBwcm9wTmFtZSA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IG5hbWVPclR1cGxlIDogbmFtZU9yVHVwbGVbMF07XHJcbiAgICAgICAgbGV0IHByb3BWYWwgPSB2YWxbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB3ZSBoYXZlIGEgcHJlZml4XHJcbiAgICAgICAgbGV0IHByZWZpeCA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IG5hbWVPclR1cGxlWzJdO1xyXG4gICAgICAgIGlmIChwcmVmaXgpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBwcmVmaXgpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydG9yID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogbmFtZU9yVHVwbGVbMV07XHJcbiAgICAgICAgaWYgKCFjb252ZXJ0b3IpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWwyc3RyKCBwcm9wVmFsKSk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbnZlcnRvciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgYnVmLnB1c2goIHN0eWxlUHJvcFRvU3RyaW5nKCBjb252ZXJ0b3IsIHByb3BWYWwsIHRydWUpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb252ZXJ0b3IoIHByb3BWYWwpKTtcclxuICAgIH0pO1xyXG5cclxuXHRyZXR1cm4gYnVmLmpvaW4oc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBoYW5kbGluZyBTdHlsZXNldHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LiBBbGwgcmVndWxhciBwcm9wZXJ0aWVzIGFyZVxyXG4gKiByZXBsYWNlZC4gVGhlIFwiLS1cIiBwcm9wZXJ0eSBnZXRzIHNwZWNpYWwgdHJlYXRtZW50IGJlY2F1c2UgaXQgaXMgYW4gYXJyYXkuXHJcbiAqIEBwYXJhbSB0YXJnZXQgXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0IGlmIG5vdCBudWxsIG9yIGEgbmV3IHN0eWxlc2V0IG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc2V0cyggdGFyZ2V0OiBTdHlsZXNldCB8IHVuZGVmaW5lZCB8IG51bGwsXHJcbiAgICBzb3VyY2U6IFN0eWxlc2V0KTogU3R5bGVzZXRcclxue1xyXG4gICAgaWYgKCFzb3VyY2UpXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCA/IHRhcmdldCA6IHt9O1xyXG5cclxuICAgIC8vIGlmIHRhcmdldCBpcyBub3QgZGVmaW5lZCwgY3JlYXRlIGl0IGFzIGFuIGVtcHR5IG9iamVjdC4gVGhpcyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBhZnRlclxyXG4gICAgLy8gcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2UgYXJlIGNvcGllZCB0byBpdC5cclxuICAgIGlmICghdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGRlZmluZWQuIElmIG5vdCwgd2UgY2FuIGp1c3QgdXNlIHRoZSBPYmplY3QuYXNzaWduIGZ1bmN0aW9uLlxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBhbmQgaW1wb3J0YW50IHByb3BlcnRpZXNcclxuICAgIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGFyZ2V0LCBzb3VyY2UpO1xyXG5cclxuICAgIC8vIGNvcHkgYWxsIG90aGVyIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlXHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc291cmNlKVxyXG5cdHtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiIVwiIHx8IHByb3BOYW1lID09PSBcIi0tXCIpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XHJcblx0fVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBcIi0tXCIgcHJvcGVydHkgZnJvbSB0aGUgc291cmNlIHN0eWxlc2V0IHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0YXJnZXQ6IFN0eWxlc2V0LFxyXG4gICAgc291cmNlOiBTdHlsZXNldCk6IHZvaWRcclxue1xyXG4gICAgLy8gY2hlY2sgd2hldGhlciBjdXN0b20gcHJvcGVydGllcyBhbmQgaW1wb3J0YW50IHByb3BlcnRpZXMgYXJlIGRlZmluZWRcclxuICAgIGxldCBzb3VyY2VDdXN0b21Qcm9wcyA9IHNvdXJjZVtcIi0tXCJdO1xyXG4gICAgaWYgKCFzb3VyY2VDdXN0b21Qcm9wcylcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgLy8gbWVyZ2UgY3VzdG9tIHByb3BlcnRpZXNcclxuICAgIGlmIChzb3VyY2VDdXN0b21Qcm9wcylcclxuICAgIHtcclxuICAgICAgICBsZXQgdGFyZ2V0Q3VzdG9tUHJvcHMgPSB0YXJnZXRbXCItLVwiXTtcclxuICAgICAgICB0YXJnZXRbXCItLVwiXSA9ICF0YXJnZXRDdXN0b21Qcm9wcyA/IHNvdXJjZUN1c3RvbVByb3BzLnNsaWNlKCkgOiB0YXJnZXRDdXN0b21Qcm9wcy5jb25jYXQoIHNvdXJjZUN1c3RvbVByb3BzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlc2V0IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9TdHJpbmcoIHN0eWxlc2V0OiBTdHlsZXNldCk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXN0eWxlc2V0KVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuXHJcblx0Zm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0LCAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpc0N1c3RvbTogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmIChpc0N1c3RvbSlcclxuICAgICAgICAgICAgcyArPSBgJHtuYW1lfToke3ZhbHVlfTtgO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBgJHtjYW1lbFRvRGFzaChuYW1lKX06JHt2YWx1ZX07YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBuYW1lIGFuZCBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICogQHBhcmFtIGN1c3RvbVZhbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXN0b21Qcm9wTmFtZUFuZFZhbHVlKCBjdXN0b21WYWw6IEN1c3RvbVZhcl9TdHlsZVR5cGUpOiBbc3RyaW5nPyxzdHJpbmc/XVxyXG57XHJcbiAgICBpZiAoIWN1c3RvbVZhbClcclxuICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgbGV0IHZhck5hbWU6IHN0cmluZztcclxuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgbGV0IHZhbHVlOiBhbnk7XHJcbiAgICBpZiAoY3VzdG9tVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gKGN1c3RvbVZhbFswXSBhcyBWYXJSdWxlKS5jc3NOYW1lO1xyXG4gICAgICAgIHRlbXBsYXRlID0gY3VzdG9tVmFsWzBdLnRlbXBsYXRlO1xyXG4gICAgICAgIHZhbHVlID0gY3VzdG9tVmFsWzFdXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IGN1c3RvbVZhbFswXTtcclxuICAgICAgICBpZiAoIXZhck5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICBlbHNlIGlmICghdmFyTmFtZS5zdGFydHNXaXRoKFwiLS1cIikpXHJcbiAgICAgICAgICAgIHZhck5hbWUgPSBcIi0tXCIgKyB2YXJOYW1lO1xyXG5cclxuICAgICAgICB0ZW1wbGF0ZSA9IGN1c3RvbVZhbFsxXTtcclxuICAgICAgICBpZiAoIXZhck5hbWUgfHwgIXRlbXBsYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIHZhbHVlID0gY3VzdG9tVmFsWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbdmFyTmFtZSwgc3R5bGVQcm9wVG9TdHJpbmcoIHRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSldO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgdG8gdGhlIENTUyBzdHlsZSBzdHJpbmcuIFByb3BlcnR5IG5hbWUgY2FuIGJlIGluIGVpdGhlclxyXG4gKiBkYXNoIG9yIGNhbWVsIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXByb3BOYW1lKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgcHJvcGVydHlcclxuICAgIGxldCBpbmZvOiBhbnkgPSBTdHlsZVByb3BlcnR5SW5mb3NbZGFzaFRvQ2FtZWwocHJvcE5hbWUpXTtcclxuXHJcbiAgICAvLyBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdGhlIFwiIVwiIHByb3BlcnR5LCB0aGVuIHRoZSBhY3R1YWwgdmFsdWUgaXMgdGhlXHJcbiAgICAvLyB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGFuZCB3ZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnXHJcbiAgICBsZXQgdmFyVmFsdWUgPSBwcm9wVmFsO1xyXG4gICAgbGV0IGltcEZsYWcgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJvYmplY3RcIiAmJiBcIiFcIiBpbiBwcm9wVmFsKVxyXG4gICAge1xyXG4gICAgICAgIHZhclZhbHVlID0gcHJvcFZhbFtcIiFcIl07XHJcbiAgICAgICAgaW1wRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0cmluZ1ZhbHVlID0gIWluZm9cclxuICAgICAgICA/IHZhbDJzdHIoIHZhclZhbHVlKVxyXG4gICAgICAgIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgPyB2YWwyc3RyKCB2YXJWYWx1ZSwgaW5mbyBhcyBJVmFsdWVDb252ZXJ0T3B0aW9ucylcclxuICAgICAgICAgICAgOiB0eXBlb2YgaW5mbyA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgPyB2YWx1ZVRvU3RyaW5nQnlXZWxsS25vd25GdW5jKCB2YXJWYWx1ZSwgaW5mbylcclxuICAgICAgICAgICAgICAgIDogKGluZm8gYXMgVG9TdHJpbmdGdW5jKSggdmFyVmFsdWUpO1xyXG5cclxuICAgIGlmICghc3RyaW5nVmFsdWUgJiYgIXZhbHVlT25seSlcclxuICAgICAgICBzdHJpbmdWYWx1ZSA9IFwiaW5pdGlhbFwiO1xyXG5cclxuICAgIGlmIChpbXBGbGFnKVxyXG4gICAgICAgIHN0cmluZ1ZhbHVlICs9IFwiICFpbXBvcnRhbnRcIjtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gc3RyaW5nVmFsdWUgOiBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfToke3N0cmluZ1ZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZvciBlYWNoIHByb3BlcnR5IC0gcmVndWxhciBhbmQgY3VzdG9tIC0gaW4gdGhlIGdpdmVuIHN0eWxlc2V0IGludm9rZXMgdGhlIGFwcHJvcHJpYXRlXHJcbiAqIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgcHJvcGVydHkgbmFtZSBhbmQgdGhlIHZhbHVlIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBcclxuICogQHBhcmFtIGZvclByb3AgXHJcbiAqIEBwYXJhbSBmb3JDdXN0b21Qcm9wIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckFsbFByb3BzSW5TdHlsc2V0KCBzdHlsZXNldDogU3R5bGVzZXQsXHJcbiAgICBmb3JQcm9wOiAobmFtZTogc3RyaW5nLCB2YWw6IHN0cmluZywgaXNDdXN0b206IGJvb2xlYW4pID0+IHZvaWQpXHJcbntcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcblx0XHRpZiAocHJvcE5hbWUgPT09IFwiLS1cIilcclxuXHRcdHtcclxuXHRcdFx0Ly8gc3BlY2lhbCBoYW5kbGluZyBvZiB0aGUgXCItLVwiIHByb3BlcnR5LCB3aGljaCBpcyBhbiBhcnJheSB3aGVyZSBlYWNoIGl0ZW0gaXNcclxuXHRcdFx0Ly8gYSB0d28taXRlbSBvciB0aHJlZS1pdGVtIGFycmF5XHJcblx0XHRcdGxldCBwcm9wVmFsID0gc3R5bGVzZXRbcHJvcE5hbWVdIGFzIEN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuXHRcdFx0Zm9yKCBsZXQgY3VzdG9tVmFsIG9mIHByb3BWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWN1c3RvbVZhbClcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgW3Zhck5hbWUsIHZhclZhbHVlXSA9IGdldEN1c3RvbVByb3BOYW1lQW5kVmFsdWUoIGN1c3RvbVZhbCk7XHJcblx0XHRcdFx0aWYgKCF2YXJOYW1lKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0aWYgKHZhclZhbHVlID09IG51bGwpXHJcblx0XHRcdFx0XHR2YXJWYWx1ZSA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdGZvclByb3AoIHZhck5hbWUsIHZhclZhbHVlLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgZm9yUHJvcCggcHJvcE5hbWUsIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSwgc3R5bGVzZXRbcHJvcE5hbWVdLCB0cnVlKSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIG11bHRpLWxlbmd0aCB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlXHJcbi8vIGl0ZW1zIHdpbGwgYmUgc2VwYXJhdGVkIGJ5IHNwYWNlLlxyXG5mdW5jdGlvbiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgXCIgXCIpO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIG11bHRpLXRpbWUgdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZVxyXG4vLyBpdGVtcyB3aWxsIGJlIHNlcGFyYXRlZCBieSBjb21tYS5cclxuZnVuY3Rpb24gbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gQ3NzVGltZU1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiLFwiKTtcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlIGl0ZW1zIHdpbGwgYmVcclxuLy8gc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG5mdW5jdGlvbiBhcnJheVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IGFueSlcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBhcnJTZXA6IFwiLFwiIH0pO1xyXG59O1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlIGl0ZW1zIHdpbGwgYmVcclxuLy8gc2VwYXJhdGVkIGJ5IHNsYXNoLlxyXG5mdW5jdGlvbiBhcnJheVRvU3RyaW5nV2l0aFNsYXNoKCB2YWw6IGFueSlcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBhcnJTZXA6IFwiL1wiIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTnVtZXJpYyBpZGVudGlmaWVycyBjb3JyZXNwb25kaW5nIHRvIHdlbGwga25vd24gZnVuY3Rpb25zIHVzZWQgdG8gY29udmVydCBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXNcclxuICogdG8gc3RyaW5ncy4gVGhpcyBpcyB1c2VkIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgb2JqZWN0IHVzZWQgZm9yIG1hcHBpbmcgc3R5bGUgcHJvcGVydGllcyB0b1xyXG4gKiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cclxuICogXHJcbiAqIE5vdGUhISE6IHRoZSB2YWx1ZXMgaW4gdGhlIGVudW1lcmF0aW9uIGNhbm5vdCBiZSBjaGFuZ2VkIC0gb3RoZXJ3aXNlLCBpdCB3aWxsIG5vdCBiZSBiYWNrd2FyZHNcclxuICogY29tcGF0aWJsZS4gQWxsIG5ldyB2YWx1ZXMgbXVzdCBiZSBhcHBlbmRlZCBhdCB0aGUgZW5kLlxyXG4gKi9cclxuY29uc3QgZW51bSBXZWxsS25vd25GdW5jXHJcbntcclxuICAgIExlbmd0aCA9IDEsXHJcbiAgICBDb2xvcixcclxuICAgIEJvcmRlcixcclxuICAgIFBvc2l0aW9uLFxyXG4gICAgQ29ybmVyUmFkaXVzLFxyXG4gICAgTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBNdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICBBcnJheVdpdGhDb21tYSxcclxuICAgIEFycmF5V2l0aFNsYXNoLFxyXG4gICAgR3JpZEF4aXMsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBzdHJpbmcgdXNpbmcgYSB3ZWxsLWtub3duIGZ1bmN0aW9uIGluZGljYXRlZCBieSB0aGUgZ2l2ZW5cclxuICogZW51bWVyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSB2YWwgXHJcbiAqIEBwYXJhbSBmdW5jVHlwZSBcclxuICovXHJcbmZ1bmN0aW9uIHZhbHVlVG9TdHJpbmdCeVdlbGxLbm93bkZ1bmMoIHZhbDogYW55LCBmdW5jVHlwZTogV2VsbEtub3duRnVuYyk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgZnVuYyA9XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuTGVuZ3RoID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Db2xvciA/IGNvbG9yVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkJvcmRlciA/IGJvcmRlclRvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Qb3NpdGlvbiA/IHBvczJzdHIgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyA/IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSA/IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSA/IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSA/IGFycmF5VG9TdHJpbmdXaXRoQ29tbWEgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoID8gYXJyYXlUb1N0cmluZ1dpdGhTbGFzaCA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMgPyBncmlkQXhpc1RvU3RyaW5nIDpcclxuICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBmdW5jID8gZnVuYyh2YWwpIDogXCJcIjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVnaXN0cnkgb2YgQ1NTIHByb3BlcnRpZXMgdGhhdCBzcGVjaWZpZXMgaG93IHRoZWlyIHZhbHVlcyBzaG91bGQgYmUgY29udmVydGVkIHRvIHN0cmluZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byB0aGUgU3R5bGVQcm9wZXJ0eUluZm8gb2JqZWN0cyBkZXNjcmliaW5nIGN1c3RvbSBhY3Rpb25zIG5lY2Vzc2FyeSB0b1xyXG4gKiBjb252ZXJ0IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgQ1NTLWNvbXBsaWFudCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBTdHlsZVByb3BlcnR5SW5mb3M6IHsgW0sgaW4gVmFyVGVtcGxhdGVOYW1lXT86IChXZWxsS25vd25GdW5jIHwgVG9TdHJpbmdGdW5jIHwgSVZhbHVlQ29udmVydE9wdGlvbnMpIH0gPVxyXG57XHJcbiAgICBhbmltYXRpb246IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVBbmltYXRpb25fZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbk5hbWU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZENsaXA6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB2ID0+IG11bHRpUG9zMnN0ciggdiwgXCIsXCIpLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRTaXplOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSxcclxuICAgIGJhc2VsaW5lU2hpZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckJvdHRvbTogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyQ29sb3I6IHtcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2U6IHtcclxuICAgICAgICBmcm9tT2JqOiBib3JkZXJJbWFnZVRvU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGJvcmRlckltYWdlU2xpY2U6IGJvcmRlckltYWdlU2xpY2VUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlcklubGluZUVuZFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckxlZnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyTGVmdENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyTGVmdFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJSaWdodENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgYm9yZGVyVG9wOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlclRvcENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJUb3BXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJXaWR0aDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGJvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3hTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBjYXJldENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY2xpcDogIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYHJlY3QoJHttdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlKHYpfWBcclxuICAgIH0sXHJcbiAgICBjb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGNvbHVtbkdhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBjb2x1bW5SdWxlOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGNvbHVtblJ1bGVDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGNvbHVtblJ1bGVXaWR0aDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGNvbHVtbnM6IGNvbHVtbnNUb1N0cmluZyxcclxuICAgIGNvbHVtbldpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGN1cnNvcjogY3Vyc29yVG9TdHJpbmcsXHJcblxyXG4gICAgZmlsbDogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGZpbGxPcGFjaXR5OiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZmxleDogZmxleFRvU3RyaW5nLFxyXG4gICAgZmxleEJhc2lzOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGZsb29kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBmb250OiB7XHJcbiAgICAgICAgZnJvbU9iajogZm9udF9mcm9tT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgZm9udFNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZm9udFN0eWxlOiBmb250U3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBnYXA6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBncmlkQ29sdW1uR2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGdyaWRHYXA6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBncmlkUm93R2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGdyaWRBcmVhOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoLFxyXG4gICAgZ3JpZEF1dG9Db2x1bW5zOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG4gICAgZ3JpZEF1dG9Sb3dzOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG4gICAgZ3JpZENvbHVtbjogV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCxcclxuICAgIGdyaWRSb3c6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBncmlkVGVtcGxhdGVBcmVhczogZ3JpZFRlbXBsYXRlQXJlYXNUb1N0cmluZyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcbiAgICBncmlkVGVtcGxhdGVSb3dzOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG5cclxuICAgIGhlaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgaW5saW5lU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgbGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGxpZ2h0aW5nQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcblxyXG4gICAgbWFyZ2luOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgbWFyZ2luQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5Cb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbklubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbkxlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmtlckVuZDogbWFya2VyU3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmtlck1pZDogbWFya2VyU3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmtlclN0YXJ0OiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4QmxvY2tTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1heEhlaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXhJbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1heFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1pbkJsb2NrU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtaW5IZWlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWluSW5saW5lU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblx0bWluV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIG9iamVjdFBvc2l0aW9uOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgb2Zmc2V0OiBvZmZzZXRUb1N0cmluZyxcclxuICAgIG9mZnNldEFuY2hvcjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIG9mZnNldERpc3RhbmNlOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG9mZnNldFBvc2l0aW9uOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgb2Zmc2V0Um90YXRlOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIG91dGxpbmVDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIG91dGxpbmVPZmZzZXQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHBhZGRpbmc6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBwYWRkaW5nQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0Jsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdJbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ1RvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwZXJzcGVjdGl2ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICBxdW90ZXM6IHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogdiA9PiBgXCIke3Z9XCJgXHJcbiAgICB9LFxyXG5cclxuICAgIHJpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHJvdGF0ZTogcm90YXRlVG9TdHJpbmcsXHJcbiAgICByb3dHYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHNjcm9sbGJhckNvbG9yOiB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBzY3JvbGxNYXJnaW46IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZTogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5MZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpblJpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpblRvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdCb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZTogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdSaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNoYXBlTWFyZ2luOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHN0b3BDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHN0cm9rZTogV2VsbEtub3duRnVuYy5Db2xvcixcclxuXHJcbiAgICB0YWJTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRleHRDb21iaW5lVXByaWdodDoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gYGRpZ2l0cyAke3Z9YFxyXG4gICAgfSxcclxuICAgIHRleHREZWNvcmF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqOiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRleHRFbXBoYXNpczoge1xyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIHRleHRJbmRlbnQ6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0U2hhZG93OiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0U2l6ZUFkanVzdDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0LFxyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZVRyYW5zaXRpb25fZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbkRlbGF5OiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcsXHJcbiAgICB0cmFuc2xhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgdmVydGljYWxBbGlnbjogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgd2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgd2lsbENoYW5nZToge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IGNhbWVsVG9EYXNoXHJcbiAgICB9LFxyXG4gICAgd29yZFNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgLy8gc3BlY2lhbCBwcm9wZXJ0aWVzIGZvciBJVmFyUnVsZSB0eXBlc1xyXG4gICAgXCJDc3NMZW5ndGhcIjogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBcIkNzc0FuZ2xlXCI6IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NUaW1lXCI6IENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Jlc29sdXRpb25cIjogQ3NzUmVzb2x1dGlvbk1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzRnJlcXVlbmN5XCI6IENzc0ZyZXF1ZW5jeU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUGVyY2VudFwiOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQb3NpdGlvblwiOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgXCJDc3NDb2xvclwiOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHN1cHBvcnRzIHF1ZXJ5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU3VwcG9ydHNRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggcXVlcnksIHtcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIiBvciBcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCBxdWVyeSwge1xyXG4gICAgICAgIGZyb21PYmo6ICh2OiBFeHRlbmRlZFN0eWxlc2V0ICYgeyAkbmVnYXRlPzogYm9vbGVhbjsgfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoIHYpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm90ID0gdi4kbmVnYXRlID8gXCJub3RcIiA6IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAgYCR7bm90fSAoJHtwcm9wTmFtZXMubWFwKCAocHJvcE5hbWUpID0+XHJcbiAgICAgICAgICAgICAgICBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUgYXMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldCwgcXVlcnlbcHJvcE5hbWVdKSkuam9pbiggXCIpIGFuZCAoXCIpfSlgO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBFeHRlbmRlZCwgT25lT3JQYWlyLCBPbmVPckJveCwgT25lT3JNYW55LCBDc3NOdW1iZXIsIENzc1Bvc2l0aW9uLCBNdWx0aUNzc1Bvc2l0aW9uLFxyXG4gICAgQ3NzVGltZSwgQ3NzTGVuZ3RoLCBDc3NBbmdsZSwgQ3NzUGVyY2VudCwgQ3NzTGVuZ3RoQm94LCBDc3NNdWx0aVRpbWUsIENzc0ZyZXF1ZW5jeSxcclxuICAgIENzc1Jlc29sdXRpb24sIENzc1JhZGl1cywgSVVybFByb3h5LCBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCxcclxuICAgIENzc1BvaW50LCBFeHRlbmRlZFByb3AsIElHZW5lcmljUHJveHksIENzc0xlbmd0aFBhaXIsIElRdW90ZWRQcm94eVxyXG59IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQge0Nzc0ltYWdlfSBmcm9tIFwiLi9JbWFnZVR5cGVzXCI7XHJcbmltcG9ydCB7Rm9udFN0cmV0Y2hfU2luZ2xlfSBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCI7XHJcbmltcG9ydCB7SVZhclJ1bGUsIElBbmltYXRpb25SdWxlLCBJQ291bnRlclJ1bGUsIElJRFJ1bGUsIElHcmlkTGluZVJ1bGUsIElHcmlkQXJlYVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgcHJvcGVydHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWduLWNvbnRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25Db250ZW50X1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfFxyXG4gICAgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfCBcInNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBjZW50ZXJcIiB8XHJcbiAgICBcInNwYWNlLWJldHdlZW5cIiB8IFwic3BhY2UtYXJvdW5kXCIgfCBcInNwYWNlLWV2ZW5seVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24taXRlbXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25JdGVtc19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHxcclxuICAgIFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHwgXCJzYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgY2VudGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbi1zZWxmIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWduU2VsZl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfFxyXG4gICAgXCJzZWxmLXN0YXJ0XCIgfCBcInNlbGYtZW5kXCIgfCBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8XHJcbiAgICBcInNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBjZW50ZXJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWdubWVudC1iYXNlbGluZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnbm1lbnRCYXNlbGluZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYmFzZWxpbmVcIiB8IFwiYmVmb3JlLWVkZ2VcIiB8IFwidGV4dC1iZWZvcmUtZWRnZVwiIHxcclxuICAgIFwibWlkZGxlXCIgfCBcImNlbnRyYWxcIiB8IFwiYWZ0ZXItZWRnZVwiIHwgXCJ0ZXh0LWFmdGVyLWVkZ2VcIiB8IFwiaWRlb2dyYXBoaWNcIiB8IFwiYWxwaGFiZXRpY1wiIHxcclxuICAgIFwiaGFuZ2luZ1wiIHwgXCJtYXRoZW1hdGljYWxcIiB8IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uX1NpbmdsZSA9XHJcbiAgICB7XHJcbiAgICAgICAgbmFtZT86IEV4dGVuZGVkPEFuaW1hdGlvbk5hbWVfU2luZ2xlPjtcclxuICAgICAgICBkdXJhdGlvbj86IEV4dGVuZGVkPENzc1RpbWU+O1xyXG4gICAgICAgIGZ1bmM/OiBFeHRlbmRlZDxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+O1xyXG4gICAgICAgIGRlbGF5PzogRXh0ZW5kZWQ8Q3NzVGltZT47XHJcbiAgICAgICAgY291bnQ/OiBFeHRlbmRlZDxBbmltYXRpb25JdGVyYXRpb25Db3VudF9TaW5nbGU+O1xyXG4gICAgICAgIGRpcmVjdGlvbj86IEV4dGVuZGVkPEFuaW1hdGlvbkRpcmVjdGlvbl9TaW5nbGU+O1xyXG4gICAgICAgIG1vZGU/OiBFeHRlbmRlZDxBbmltYXRpb25GaWxsTW9kZV9TaW5nbGU+O1xyXG4gICAgICAgIHN0YXRlPzogRXh0ZW5kZWQ8QW5pbWF0aW9uUGxheVN0YXRlX1NpbmdsZT47XHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25fU3R5bGVUeXBlID0gc3RyaW5nIHwgT25lT3JNYW55PEFuaW1hdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWRlbGF5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkRlbGF5X1N0eWxlVHlwZSA9IENzc011bHRpVGltZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gZGlyZWN0aW9uICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkRpcmVjdGlvbl9TaW5nbGUgPSBcIm5vcm1hbFwiIHwgXCJyZXZlcnNlXCIgfCBcImFsdGVybmF0ZVwiIHwgXCJhbHRlcm5hdGUtcmV2ZXJzZVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1kaXJlY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRGlyZWN0aW9uX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1kdXJhdG9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkR1cmF0aW9uX1N0eWxlVHlwZSA9IENzc011bHRpVGltZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gZmlsbCBtb2RlICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZpbGxNb2RlX1NpbmdsZSA9IFwibm9uZVwiIHwgXCJmb3J3YXJkc1wiIHwgXCJiYWNrd2FyZHNcIiB8IFwiYm90aFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1maWxsLW1vZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRmlsbE1vZGVfU3R5bGVUeXBlID0gT25lT3JNYW55PEFuaW1hdGlvbkRpcmVjdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBpdGVyYXRpb24gY291bnQgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uSXRlcmF0aW9uQ291bnRfU2luZ2xlID0gXCJpbmZpbml0ZVwiIHwgQ3NzTnVtYmVyO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uSXRlcmF0aW9uQ291bnRfU3R5bGVUeXBlID0gT25lT3JNYW55PEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIG5hbWUgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uTmFtZV9TaW5nbGUgPSBcIm5vbmVcIiB8IHN0cmluZyB8IElBbmltYXRpb25SdWxlO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1uYW1lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbk5hbWVfU3R5bGVUeXBlID0gT25lT3JNYW55PEFuaW1hdGlvbk5hbWVfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gcGxheSBzdGF0ZSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25QbGF5U3RhdGVfU2luZ2xlID0gXCJwYXVzZWRcIiB8IFwicnVubmluZ1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1wbGF5LXN0YXRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblBsYXlTdGF0ZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uUGxheVN0YXRlX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW1wbGUgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbnMgLSB0aG9zZSB0aGF0IGRvbid0IGhhdmUgcGFyYW1ldGVycyAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9TaW1wbGUgPSBcImxpbmVhclwiIHwgXCJlYXNlXCIgfCBcImVhc2UtaW5cIiB8IFwiZWFzZS1vdXRcIiB8IFwiZWFzZS1pbi1vdXRcIiB8IFwic3RlcC1zdGFydFwiIHwgXCJzdGVwLWVuZFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHN0ZXAgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9TdGVwUG9zaXRpb24gPSBcImp1bXAtc3RhcnRcIiB8IFwianVtcC1lbmRcIiB8IFwianVtcC1ub25lXCIgfCBcImp1bXAtYm90aFwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzdGVwIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fU3RlcCA9IG51bWJlciB8IFtFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxUaW1pbmdGdW5jdGlvbl9TdGVwUG9zaXRpb24+P107XHJcblxyXG4vKiogVHlwZSBmb3IgQmV6aWVyIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fQmV6aWVyID0gW0V4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPG51bWJlcj5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSA9IFRpbWluZ0Z1bmN0aW9uX1NpbXBsZSB8IFRpbWluZ0Z1bmN0aW9uX1N0ZXAgfCBUaW1pbmdGdW5jdGlvbl9CZXppZXI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8VGltaW5nRnVuY3Rpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tmYWNlLXZpc2liaWxpdHkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2ZhY2VWaXNpYmlsaXR5TW9kZV9TdHlsZVR5cGUgPSBcInZpc2libGVcIiB8IFwiaGlkZGVuXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kX1NpbmdsZSA9IHN0cmluZyB8IENzc0NvbG9yIHxcclxuICAgIHtcclxuICAgICAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgICAgICBpbWFnZT86IEV4dGVuZGVkPENzc0ltYWdlIHwgc3RyaW5nPixcclxuICAgICAgICBwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPixcclxuICAgICAgICBzaXplPzogRXh0ZW5kZWQ8QmFja2dyb3VuZFNpemVfU2luZ2xlPixcclxuICAgICAgICByZXBlYXQ/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kUmVwZWF0X1NpbmdsZT4sXHJcbiAgICAgICAgYXR0YWNobWVudD86IEV4dGVuZGVkPEJhY2tncm91bmRBdHRhY2htZW50X1NpbmdsZT4sXHJcbiAgICAgICAgb3JpZ2luPzogRXh0ZW5kZWQ8QmFja2dyb3VuZE9yaWdpbl9TaW5nbGU+LFxyXG4gICAgICAgIGNsaXA/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kQ2xpcF9TaW5nbGU+LFxyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIGF0dGFjaG1lbnQgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEF0dGFjaG1lbnRfU2luZ2xlID0gXCJzY3JvbGxcIiB8IFwiZml4ZWRcIiB8IFwibG9jYWxcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEF0dGFjaG1lbnRfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRBdHRhY2htZW50X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBibGVuZCBtb2RlICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRCbGVuZE1vZGVfU2luZ2xlID0gXCJub3JtYWxcIiB8IFwibXVsdGlwbHlcIiB8IFwic2NyZWVuXCIgfCBcIm92ZXJsYXlcIiB8IFwiZGFya2VuXCIgfFxyXG4gICAgXCJsaWdodGVuXCIgfCBcImNvbG9yLWRvZGdlXCIgfCBcImNvbG9yLWJ1cm5cIiB8IFwiaGFyZC1saWdodFwiIHwgXCJzb2Z0LWxpZ2h0XCIgfCBcImRpZmZlcmVuY2VcIiB8XHJcbiAgICBcImV4Y2x1c2lvblwiIHwgXCJodWVcIiB8IFwic2F0dXJhdGlvblwiIHwgXCJjb2xvclwiIHwgXCJsdW1pbm9zaXR5XCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1ibGVuZC1tb2RlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRCbGVuZE1vZGVfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRCbGVuZE1vZGVfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIGNsaXAgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZENsaXBfU2luZ2xlID0gXCJib3JkZXItYm94XCIgfCBcInBhZGRpbmctYm94XCIgfCBcImNvbnRlbnQtYm94XCIgfCBcInRleHRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLWNsaXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZENsaXBfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRDbGlwX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLWltYWdlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRJbWFnZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IE9uZU9yTWFueTxDc3NJbWFnZSB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBvcmlnaW4gKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZE9yaWdpbl9TaW5nbGUgPSBcImJvcmRlci1ib3hcIiB8IFwicGFkZGluZy1ib3hcIiB8IFwiY29udGVudC1ib3hcIiB8IFwidGV4dFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtb3JpZ2luIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRPcmlnaW5fU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRPcmlnaW5fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFBvc2l0aW9uX1N0eWxlVHlwZSA9IE11bHRpQ3NzUG9zaXRpb247XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCByZXBlYXQgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFJlcGVhdEtleXdvcmRfU2luZ2xlID0gXCJyZXBlYXRcIiB8IFwic3BhY2VcIiB8IFwicm91bmRcIiB8IFwibm8tcmVwZWF0XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgcmVwZWF0ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRSZXBlYXRfU2luZ2xlID0gXCJyZXBlYXQteFwiIHwgXCJyZXBlYXQteVwiIHwgT25lT3JQYWlyPEJhY2tncm91bmRSZXBlYXRLZXl3b3JkX1NpbmdsZT47XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1yZXBlYXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFJlcGVhdF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZFJlcGVhdF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZCBzaXplICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRTaXplX1NpbmdsZSA9IFwiY292ZXJcIiB8IFwiY29udGFpblwiIHwgT25lT3JQYWlyPENzc0xlbmd0aCB8IFwiYXV0b1wiPjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBiYWNrZ3JvdW5kLXNpemUgc3R5bGUgcHJvcGVydHkuIFRoZSBiYWNrZ3JvdW5kLXNpemUgc3R5bGUgY2FuIHNwZWNpZnkgb25lIG9yIG1vcmVcclxuICogY29tbWEtc2VwYXJhdGVkIHNpemVzLCB3aGVyZSBlYWNoIHNpemUgY2FuIGJlIGEga2V5d29yZCwgYSBsZW5ndGggb3IgdHdvIGxlbmd0aHMuIFdlIG1vZGVsXHJcbiAqIHRoaXMgc3RydWN0dXJlIHRoZSBmb2xsb3dpbmcgd2F5OlxyXG4gKiAtIGlmIHRoZSB2YWx1ZSBpcyBhIHN0cmluZyBvciBhIG51bWJlciwgdGhhdCdzIHRoZSBvbmx5IHZhbHVlO1xyXG4gKiAtIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiBpdCBpcyBhIGxpc3Qgb2Ygc2V2ZXJhbCBzaXplcy4gRWFjaCBlbGVtZW50IGluIHRoaXMgYXJyYXkgaXNcclxuICogICBlaXRoZXIgYSBrZXl3b3JkIG9yIGEgbGVuZ3RoIG9yIGFuIGFycmF5IG9mIHR3byBlbGVtZW50cy5cclxuICogVGh1cyBbMTAwLDIwMF0gd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBcIjEwMHB4LCAyMDBweFwiIGFuZCBub3QgXCIxMDBweCAyMDBweFwiOyB0aGF0IGlzLCBpdCB3aWxsXHJcbiAqIGRlZmluZSB0d28gc2l6ZXMgZWFjaCB3aXRoIGEgd2lkdGggaW5zdGVhZCBvZiBvbmUgc2l6ZSB3aXRoIGJvdGggd2lkdGggYW5kIGhlaWdodC4gSWYgeW91IG5lZWRcclxuICogdG8gc3BlY2lmeSBib3RoIHdpZHRoIGFuZCBoZWlnaHQgeW91IG11c3QgdXNlIGFycmF5IHdpdGhpbiBhcnJheSAtIGV2ZW4gZm9yIGEgc2luZ2xlIHNpemU6XHJcbiAqIFtbMTAwLDIwMF1dIHdsbCBiZSBpbnRlcnByZXRlZCBhcyBcIjEwMHB4IDIwMHB4XCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kU2l6ZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZFNpemVfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhc2VsaW5lLXNoaWZ0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhc2VsaW5lU2hpZnRfU3R5bGVUeXBlID0gXCJzdWJcIiB8IFwic3VwZXJcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1jb2xsYXBzZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJDb2xhcHNlX1N0eWxlVHlwZSA9IFwiY29sbGFwc2VcIiB8IFwic2VwYXJhdGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1jb2xvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJDb2xvcl9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NDb2xvcj47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2Ugc3R5bGUgcHJvcGVydHkgZXhwcmVzc2VkIGFzIGFuIG9iamVjdC4gKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VfT2JqZWN0ID1cclxuICAgIHtcclxuICAgICAgICBzb3VyY2U6IEV4dGVuZGVkPEJvcmRlckltYWdlU291cmNlX1N0eWxlVHlwZT4sXHJcbiAgICAgICAgc2xpY2U/OiBFeHRlbmRlZDxCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZT4sXHJcbiAgICAgICAgd2lkdGg/OiBFeHRlbmRlZDxCb3JkZXJJbWFnZVdpZHRoX1N0eWxlVHlwZT4sXHJcbiAgICAgICAgb3V0c2V0PzogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VPdXRzZXRfU3R5bGVUeXBlPixcclxuICAgICAgICByZXBlYXQ/OiBFeHRlbmRlZDxCb3JkZXJJbWFnZVJlcGVhdF9TdHlsZVR5cGU+LFxyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2Ugc3R5bGUgcHJvcGVydHkuICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlX1N0eWxlVHlwZSA9IHN0cmluZyB8IENzc0ltYWdlIHwgQm9yZGVySW1hZ2VfT2JqZWN0O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS1vdXRzZXQgc3R5bGUgcHJvcGVydHkuIEl0IGlzIENzc051bWJlciBhbmQgbm90IENzc0xlbmd0aCBiZWNhdXNlXHJcbiAqIGJvcmRlci1pbWFnZS1vdXRzZXQgY2FuIGJlIHNwZWNpZmllZCBhcyBhIHVuaXRsZXNzIG51bWJlci5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlT3V0c2V0X1N0eWxlVHlwZSA9IE9uZU9yQm94PENzc051bWJlciB8IHN0cmluZz47XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXJlcGVhdCBrZXl3b3JkcyAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVJlcGVhdF9LZXl3b3JkID0gXCJzdHJldGNoXCIgfCBcInJlcGVhdFwiIHwgXCJyb3VuZFwiIHwgXCJzcGFjZVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS1yZXBlYXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VSZXBlYXRfU3R5bGVUeXBlID0gT25lT3JQYWlyPEJvcmRlckltYWdlUmVwZWF0X0tleXdvcmQ+O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS1zbGljZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZSA9IE9uZU9yQm94PENzc051bWJlciB8IHN0cmluZz4gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIHRydWVdIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCB0cnVlXSB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgdHJ1ZV0gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIHRydWVdO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS1zb3VyY2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VTb3VyY2VfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzSW1hZ2UgfCBzdHJpbmc+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS13aWR0aCBzdHlsZSBwcm9wZXJ0eS4gSXQgaXMgQ3NzTnVtYmVyIGFuZCBub3QgQ3NzTGVuZ3RoIGJlY2F1c2VcclxuICogYm9yZGVyLWltYWdlLXdpZHRoIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSB1bml0bGVzcyBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVdpZHRoX1N0eWxlVHlwZSA9IE9uZU9yQm94PENzc051bWJlciB8IFwiYXV0b1wiIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1yYWRpdXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyUmFkaXVzX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxDc3NMZW5ndGhCb3g+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLXNwYWNpbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3BhY2luZ19TdHlsZVR5cGUgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBib3JkZXIgc2lkZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTdHlsZV9LZXl3b3JkID0gXCJub25lXCIgfCBcImhpZGRlblwiIHwgXCJkb3R0ZWRcIiB8IFwiZGFzaGVkXCIgfCBcInNvbGlkXCIgfCBcImRvdWJsZVwiIHxcclxuICAgIFwiZ3Jvb3ZlXCIgfCBcInJpZGdlXCIgfCBcImluc2V0XCIgfCBcIm91dHNldFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclN0eWxlX1N0eWxlVHlwZSA9IE9uZU9yQm94PEJvcmRlclN0eWxlX0tleXdvcmQ+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlcl9TdHlsZVR5cGUgPSBDc3NMZW5ndGggfCBCb3JkZXJTdHlsZV9LZXl3b3JkIHwgQ3NzQ29sb3IgfFxyXG4gICAgW0V4dGVuZGVkPENzc0xlbmd0aD4/LCBFeHRlbmRlZDxCb3JkZXJTdHlsZV9LZXl3b3JkPj8sIEV4dGVuZGVkPENzc0NvbG9yPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyIHNpZGUgd2lkdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhfU2luZ2xlID0gXCJ0aGluXCIgfCBcIm1lZGl1bVwiIHwgXCJ0aGlja1wiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci13aWR0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJXaWR0aF9TdHlsZVR5cGUgPSBPbmVPckJveDxCb3JkZXJXaWR0aF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJveCBzaGFkb3cuICovXHJcbmV4cG9ydCB0eXBlIEJveFNoYWRvd19TaW5nbGUgPSBcIm5vbmVcIiB8IHN0cmluZyB8XHJcbiAgICB7XHJcbiAgICAgICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIGJsdXI/OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIHNwcmVhZD86IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICAgICAgaW5zZXQ/OiBFeHRlbmRlZDxib29sZWFuPlxyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3ggc2hhZG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJveFNoYWRvd19TdHlsZVR5cGUgPSBPbmVPck1hbnk8Qm94U2hhZG93X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3gtc2l6aW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJveFNpemluZ19TdHlsZVR5cGUgPSBcImNvbnRlbnQtYm94XCIgfCBcImJvcmRlci1ib3hcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJyZWFrLWFmdGVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJyZWFrQWZ0ZXJfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImFsd2F5c1wiIHwgXCJhbGxcIiB8IFwiYXZvaWQtcGFnZVwiIHwgXCJwYWdlXCIgfFxyXG4gICAgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInJlY3RvXCIgfCBcInZlcnNvXCIgfCBcImF2b2lkLWNvbHVtblwiIHwgXCJjb2x1bW5cIiB8XHJcbiAgICBcImF2b2lkLXJlZ2lvblwiIHwgXCJyZWdpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJyZWFrLWJlZm9yZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0JlZm9yZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYXZvaWRcIiB8IFwiYWx3YXlzXCIgfCBcImFsbFwiIHwgXCJhdm9pZC1wYWdlXCIgfCBcInBhZ2VcIiB8XHJcbiAgICBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwicmVjdG9cIiB8IFwidmVyc29cIiB8IFwiYXZvaWQtY29sdW1uXCIgfCBcImNvbHVtblwiIHxcclxuICAgIFwiYXZvaWQtcmVnaW9uXCIgfCBcInJlZ2lvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstaW5zaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJyZWFrSW5zaWRlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhdm9pZC1wYWdlXCIgfCBcImF2b2lkLWNvbHVtblwiIHwgXCJhdm9pZC1yZWdpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNhcHRpb24tc2lkZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDYXB0aW9uU2lkZV9TdHlsZVR5cGUgPSBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiYmxvY2stc3RhcnRcIiB8IFwiYmxvY2stZW5kXCIgfCBcImlubGluZS1zdGFydFwiIHwgXCJpbmxpbmUtZW5kXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjYXJldC1jb2xvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDYXJldENvbG9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzQ29sb3I7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGVhciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGVhcl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJib3RoXCIgfCBcImlubGluZS1zdGFydFwiIHwgXCJpbmxpbmUtZW5kXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGlwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENsaXBfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDc3NMZW5ndGhCb3g7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIHVzZWQgZm9yIHNldmVyYWwgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHZW9tZXRyeUJveEtleXdvcmQgPSBcIm1hcmdpbi1ib3hcIiB8IFwiYm9yZGVyLWJveFwiIHwgXCJwYWRkaW5nLWJveFwiIHwgXCJjb250ZW50LWJveFwiIHxcclxuICAgIFwiZmlsbC1ib3hcIiB8IFwic3Ryb2tlLWJveFwiIHwgXCJ2aWV3LWJveFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgZXh0ZW50IGZvciB0aGUgYHJhZGlhbC1ncmFkaWVudCgpYCBvciBgcmF5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVudEtleXdvcmQgPSBcImNsb3Nlc3QtY29ybmVyXCIgfCBcImNsb3Nlc3Qtc2lkZVwiIHwgXCJmYXJ0aGVzdC1jb3JuZXJcIiB8IFwiZmFydGhlc3Qtc2lkZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xpcC1wYXRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENsaXBQYXRoX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgSVVybFByb3h5IHwgQmFzaWNTaGFwZSB8IEdlb21ldHJ5Qm94S2V5d29yZCB8XHJcbiAgICBbR2VvbWV0cnlCb3hLZXl3b3JkLCBCYXNpY1NoYXBlXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsaXAtcnVsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGlwUnVsZV9TdHlsZVR5cGUgPSBcIm5vbnplcm9cIiB8IFwiZXZlbm9kZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sb3ItaW50ZXJwb2xhdGlvbiBhbmQgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JJbnRlcnBvbGF0aW9uX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJzUkdCXCIgfCBcImxpbmVhclJHQlwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1uLWNvdW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbHVtbkNvdW50X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgbnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1uLWZpbGwgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uRmlsbF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYmFsYW5jZVwiIHwgXCJiYWxhbmNlLWFsbFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1uLWdhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5HYXBfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1zcGFuIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbHVtblNwYW5fU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImFsbFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgY29sdW1ucyBzdHlsZSBwcm9wZXJ0eS4gVGhlIHZhbHVlIGNhbiBiZSBwcm92aWRlZCBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtcyBhbmRcclxuICogYW5kIHdpbGwgYmUgY29udmVydGVkIHRvIHN0cmluZyBhcyBmb2xsb3dzOlxyXG4gKiBcclxuICogLSBzdHJpbmc6IHdpbGwgYmUgdHJlYXRlZCBhcyBpcy5cclxuICogLSBudW1iZXI6IHdpbGwgYmUgY29udmVydGVkIHRvIGEgdW5pdGxlc3MgbnVtYmVyIC0gY291bnQgb2YgY29sdW1ucy5cclxuICogLSBJTGVuZ3RoUHJveHkgKGUuZy4gcHgoOCkpOiBjb252ZXJ0ZWQgdG8gYSBudW1iZXIgd2l0aCB0aGUgcHJvcGVyIGxlbmd0aCB1bml0cy5cclxuICogLSB0d28gdmFyaWFudHMgb2YgdHdvIGVsZW1lbnQgYXJyYXlzOiBvbmUgb2YgdGhlIGVsZW1lbnRzIHdpbGwgYmUgdHJlYXRlZCBhcyBhIG51bWJlciBvZiBjb2x1bW5zXHJcbiAqICAgd2hpbGUgYW5vdGhlciBhcyB0aGUgY29sdW1uIHdpZHRoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uc19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc051bWJlciB8IENzc0xlbmd0aCB8XHJcbiAgICBbXCJhdXRvXCIgfCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBcImF1dG9cIiB8IEV4Y2x1ZGU8RXh0ZW5kZWQ8Q3NzTGVuZ3RoPixudW1iZXI+XSB8XHJcbiAgICBbXCJhdXRvXCIgfCBFeGNsdWRlPEV4dGVuZGVkPENzc0xlbmd0aD4sbnVtYmVyPiwgXCJhdXRvXCIgfCBFeHRlbmRlZDxDc3NOdW1iZXI+XTtcclxuLy8gTm90ZSB0aGF0IG5vIHNwZWNpYWwgY292ZXJzaW9uIGZ1bmN0aW9uIGlzIHJlcXVpcmVkIGZvciB0aGlzIHByb3BlcnR5IGJlY2F1c2UgdGhlIG51bWJlciB0eXBlIHdpbGxcclxuLy8gYWx3YXlzIGJlIGNvbnZlcnRlZCB0byBhIHVuaXRsZXNzIG51bWJlclxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29udGFpbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb250YWluX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJzdHJpY3RcIiB8IFwiY29udGVudFwiIHwgXCJzaXplXCIgfCBcImxheW91dFwiIHwgXCJzdHlsZVwiIHwgXCJwYWludFwiIHxcclxuICAgIEV4dGVuZGVkPFwic2l6ZVwiIHwgXCJsYXlvdXRcIiB8IFwic3R5bGVcIiB8IFwicGFpbnRcIj5bXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbnRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29udGVudF9TdHlsZVR5cGUgPSBzdHJpbmcgfCBcIm5vbmVcIiB8IFwibm9ybWFsXCIgfCBPbmVPck1hbnk8Q3NzSW1hZ2UgfFxyXG4gICAgXCJvcGVuLXF1b3RlXCIgfCBcImNsb3NlLXF1b3RlXCIgfCBcIm5vLW9wZW4tcXVvdGVcIiB8IFwibm8tY2xvc2UtcXVvdGVcIj47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBDb3VudGVyX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgT25lT3JNYW55PElDb3VudGVyUnVsZSB8IHN0cmluZyB8IFtJQ291bnRlclJ1bGUgfCBzdHJpbmcsIEV4dGVuZGVkPG51bWJlcj5dPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGN1cnNvciBwcmUtZGVmaW5lZCBuYW1lcyAqL1xyXG5leHBvcnQgdHlwZSBDdXJzb3JfS2V5d29yZCA9IFwiYXV0b1wiIHwgXCJkZWZhdWx0XCIgfCBcIm5vbmVcIiB8IFwiY29udGV4dC1tZW51XCIgfCBcImhlbHBcIiB8IFwicG9pbnRlclwiIHwgXCJwcm9ncmVzc1wiIHxcclxuICAgIFwid2FpdFwiIHwgXCJjZWxsXCIgfCBcImNyb3NzaGFpclwiIHwgXCJ0ZXh0XCIgfCBcInZlcnRpY2FsLXRleHRcIiB8IFwiYWxpYXNcIiB8IFwiY29weVwiIHwgXCJtb3ZlXCIgfFxyXG4gICAgXCJuby1kcm9wXCIgfCBcIm5vdC1hbGxvd2VkXCIgfCBcImUtcmVzaXplXCIgfCBcIm4tcmVzaXplXCIgfCBcIm5lLXJlc2l6ZVwiIHwgXCJudy1yZXNpemVcIiB8XHJcbiAgICBcInMtcmVzaXplXCIgfCBcInNlLXJlc2l6ZVwiIHwgXCJzdy1yZXNpemVcIiB8IFwidy1yZXNpemVcIiB8IFwiZXctcmVzaXplXCIgfCBcIm5zLXJlc2l6ZVwiIHxcclxuICAgIFwibmVzdy1yZXNpemVcIiB8IFwibndzZS1yZXNpemVcIiB8IFwiY29sLXJlc2l6ZVwiIHwgXCJyb3ctcmVzaXplXCIgfCBcImFsbC1zY3JvbGxcIiB8IFwiem9vbS1pblwiIHxcclxuICAgIFwiem9vbS1vdXRcIiB8IFwiZ3JhYlwiIHwgXCJncmFiYmluZ1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGN1cnNvciBzdHlsZSBwcm9wZXJ0eSBzaW5nbGUgdmFsdWUgKi9cclxuZXhwb3J0IHR5cGUgQ3Vyc29yX1NpbmdsZSA9IEN1cnNvcl9LZXl3b3JkIHwgSVVybFByb3h5IHwgW0lVcmxQcm94eSwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPl07XHJcblxyXG4vKiogVHlwZSBmb3IgY3Vyc29yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEN1cnNvcl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8Q3Vyc29yX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBkaXJlY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRGlyZWN0aW9uX1N0eWxlVHlwZSA9IFwibHRyXCIgfCBcInJ0bFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZGlzcGxheSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBEaXNwbGF5X1N0eWxlVHlwZSA9IFwiYmxvY2tcIiB8IFwiaW5saW5lXCIgfCBcInJ1bi1pblwiIHwgXCJjb250ZW50c1wiIHwgXCJub25lXCIgfFxyXG4gICAgXCJpbmxpbmUtYmxvY2tcIiB8IFwiaW5saW5lLWxpc3QtaXRlbVwiIHwgXCJpbmxpbmUtdGFibGVcIiB8IFwiaW5saW5lLWZsZXhcIiB8IFwiaW5saW5lLWdyaWRcIiB8XHJcbiAgICBcImZsb3dcIiB8IFwiZmxvdy1yb290XCIgfCBcInRhYmxlXCIgfCBcImZsZXhcIiB8IFwiZ3JpZFwiIHwgXCJydWJ5XCIgfFxyXG4gICAgXCJ0YWJsZS1yb3ctZ3JvdXBcIiB8IFwidGFibGUtaGVhZGVyLWdyb3VwXCIgfCBcInRhYmxlLWZvb3Rlci1ncm91cFwiIHwgXCJ0YWJsZS1yb3dcIiB8IFwidGFibGUtY2VsbFwiIHxcclxuICAgICAgICBcInRhYmxlLWNvbHVtbi1ncm91cFwiIHwgXCJ0YWJsZS1jb2x1bW5cIiB8IFwidGFibGUtY2FwdGlvblwiIHwgXCJydWJ5LWJhc2VcIiB8IFwicnVieS10ZXh0XCIgfFxyXG4gICAgICAgIFwicnVieS1iYXNlLWNvbnRhaW5lclwiIHwgXCJydWJ5LXRleHQtY29udGFpbmVyXCIgfFxyXG4gICAgXCJsaXN0LWl0ZW1cIiB8IFwibGlzdC1pdGVtIGJsb2NrXCIgfCBcImxpc3QtaXRlbSBpbmxpbmVcIiB8IFwibGlzdC1pdGVtIGZsb3dcIiB8IFwibGlzdC1pdGVtIGZsb3ctcm9vdFwiIHxcclxuICAgICAgICBcImxpc3QtaXRlbSBibG9jayBmbG93XCIgfCBcImxpc3QtaXRlbSBibG9jayBmbG93LXJvb3RcIiB8IFwiZmxvdyBsaXN0LWl0ZW0gYmxvY2tcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbi8qKiBUeXBlIGZvciBkb21pbmFudC1iYXNlbGluZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBEb21pbmFudEJhc2VsaW5lX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJ0ZXh0LWJvdHRvbVwiIHwgXCJhbHBoYWJldGljXCIgfCBcImlkZW9ncmFwaGljXCIgfCBcIm1pZGRsZVwiIHxcclxuICAgIFwiY2VudHJhbFwiIHwgXCJtYXRoZW1hdGljYWxcIiB8IFwiaGFuZ2luZ1wiIHwgXCJ0ZXh0LXRvcFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZW1wdHktY2VsbHMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRW1wdHlDZWxsc19TdHlsZVR5cGUgPSBcInNob3dcIiB8IFwiaGlkZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmlsbC1ydWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZpbGxSdWxlX1N0eWxlVHlwZSA9IFwibm9uemVyb1wiIHwgXCJldmVub2RkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmaWx0ZXIgYW5kIGJhY2tkcm9wLWZpbHRlciBzdHlsZSBzaW5nbGUgdmFsdWUgKi9cclxuZXhwb3J0IHR5cGUgRmlsdGVyX1NpbmdsZSA9IHN0cmluZyB8IElVcmxQcm94eSB8IElGaWx0ZXJQcm94eTtcclxuXHJcbi8qKiBUeXBlIGZvciBmaWx0ZXIgYW5kIGJhY2tkcm9wLWZpbHRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGaWx0ZXJfU3R5bGVUeXBlID0gT25lT3JNYW55PEZpbHRlcl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4X1N0eWxlVHlwZSA9IEZsZXhCYXNpc19TdHlsZVR5cGUgfCBbRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPl0gfFxyXG4gICAgW0V4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPEZsZXhCYXNpc19TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtYmFzaXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleEJhc2lzX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJjb250ZW50XCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LWRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4RGlyZWN0aW9uX1N0eWxlVHlwZSA9IFwicm93XCIgfCBcInJvdy1yZXZlcnNlXCIgfCBcImNvbHVtblwiIHwgXCJjb2x1bW4tcmV2ZXJzZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC1mbG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhGbG93X1N0eWxlVHlwZSA9IEZsZXhEaXJlY3Rpb25fU3R5bGVUeXBlIHwgRmxleFdyYXBfU3R5bGVUeXBlIHxcclxuICAgIFtFeHRlbmRlZDxGbGV4RGlyZWN0aW9uX1N0eWxlVHlwZT4sIEV4dGVuZGVkPEZsZXhXcmFwX1N0eWxlVHlwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC13cmFwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhXcmFwX1N0eWxlVHlwZSA9IFwibm93cmFwXCIgfCBcIndyYXBcIiB8IFwid3JhcC1yZXZlcnNlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbG9hdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbG9hdF9TdHlsZVR5cGUgPSBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwibm9uZVwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiO1xyXG5cclxuXHJcblxyXG4vKiogS2V5d29yZHMgZm9yIGZvbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udF9TeXN0ZW1LZXl3b3JkID0gXCJjYXB0aW9uXCIgfCBcImljb25cIiB8IFwibWVudVwiIHwgXCJtZXNzYWdlLWJveFwiIHwgXCJzbWFsbC1jYXB0aW9uXCIgfCBcInN0YXR1cy1iYXJcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBmb250IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRfU3R5bGVUeXBlID0gc3RyaW5nIHwgRm9udF9TeXN0ZW1LZXl3b3JkIHxcclxuICAgIHtcclxuICAgICAgICBzaXplOiBFeHRlbmRlZDxDc3NMZW5ndGg+O1xyXG4gICAgICAgIGZhbWlseTogRXh0ZW5kZWQ8c3RyaW5nPjtcclxuICAgICAgICBzdHlsZT86IEV4dGVuZGVkPEZvbnRTdHlsZV9TdHlsZVR5cGU+O1xyXG4gICAgICAgIHZhcmlhbnQ/OiBFeHRlbmRlZDxzdHJpbmc+O1xyXG4gICAgICAgIHdlaWdodD86IEV4dGVuZGVkPEZvbnRXZWlnaHRfU3R5bGVUeXBlPjtcclxuICAgICAgICBzdHJldGNoPzogRXh0ZW5kZWQ8RXhjbHVkZTxGb250U3RyZXRjaF9TaW5nbGUsbnVtYmVyPj47XHJcbiAgICAgICAgbGluZUhlaWdodD86IEV4dGVuZGVkPENzc051bWJlcj5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LWtlcm5pbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udEtlcm5pbmdfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vcm1hbFwiIHwgXCJub25lXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LW9wdGljYWwtc2l6aW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRPcHRpY2FsU2l6aW5nX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub25lXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXNpemUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFNpemVfU3R5bGVUeXBlID0gXCJ4eC1zbWFsbFwiIHwgXCJ4LXNtYWxsXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHxcclxuICAgIFwieC1sYXJnZVwiIHwgXCJ4eC1sYXJnZVwiIHwgXCJ4eHgtbGFyZ2VcIiB8IFwibGFyZ2VyXCIgfCBcInNtYWxsZXJcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc3RyZXRjaCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250U3RyZXRjaF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJ1bHRyYS1jb25kZW5zZWRcIiB8IFwiZXh0cmEtY29uZGVuc2VkXCIgfCBcImNvbmRlbnNlZFwiIHxcclxuXCJzZW1pLWNvbmRlbnNlZFwiIHwgXCJzZW1pLWV4cGFuZGVkXCIgfCBcImV4cGFuZGVkXCIgfCBcImV4dHJhLWV4cGFuZGVkXCIgfCBcInVsdHJhLWV4cGFuZGVkXCIgfCBDc3NOdW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTdHlsZV9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJpdGFsaWNcIiB8IFwib2JsaXF1ZVwiIHwgQ3NzQW5nbGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXN5bnRoZXNpcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250U3ludGhlc2lzX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJ3ZWlnaHRcIiB8IFwic3R5bGVcIiB8IFwid2VpZ2h0IHN0eWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXZhcmlhbnQtY2FwcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250VmFyaWFudENhcHNfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic21hbGwtY2Fwc1wiIHwgXCJhbGwtc21hbGwtY2Fwc1wiIHxcclxuICAgIFwicGV0aXRlLWNhcHNcIiB8IFwiYWxsLXBldGl0ZS1jYXBzXCIgfCBcInVuaWNhc2VcIiB8IFwidGl0bGluZy1jYXBzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXZhcmlhbnQtcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFZhcmlhbnRQb3NpdGlvbl9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzdWJcIiB8IFwic3VwZXJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtd2VpZ2h0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRXZWlnaHRfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiYm9sZFwiIHwgXCJib2xkZXJcIiB8IFwibGlnaHRlclwiIHwgQ3NzTnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZ2FwIG9yIGdyaWQtZ2FwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEdhcF9TdHlsZVR5cGUgPSBSb3dHYXBfU3R5bGVUeXBlIHwgW1Jvd0dhcF9TdHlsZVR5cGUsIENvbHVtbkdhcF9TdHlsZVR5cGVdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgdGVtcGxhdGUgZWxlbWVudCBkZWZpbmluZyB0cmFjayBzaXplIGluIGdyaWQgdGVtcGxhdGUgKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRyYWNrU2l6ZSA9IENzc0xlbmd0aCB8IFwibWluLWNvbnRlbnRcIiB8IFwibWF4LWNvbnRlbnRcIiB8IFwiYXV0b1wiIHxcclxuICAgIElNaW5NYXhQcm94eSB8IElGaXRDb250ZW50UHJveHkgfCBJUmVwZWF0UHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWF1dG8tY29sdW1ucyBhbmQgZ3JpZC1hdXRvLXJvd3Mgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXV0b0F4aXNfU3R5bGVUeXBlID0gT25lT3JNYW55PEdyaWRUcmFja1NpemU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC1hdXRvLWZsb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEF1dG9GbG93X1N0eWxlVHlwZSA9IFwicm93XCIgfCBcImNvbHVtblwiIHwgXCJkZW5zZVwiIHwgXCJyb3cgZGVuc2VcIiB8IFwiY29sdW1uIGRlbnNlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzcGVjaWZ5aW5nIGVpdGhlciBudW1iZXIgb2YgZ3JpZCBsaW5lcyBvciBuYW1lIG9mIGdyaWQgbGluZSBvciBhcmVhICovXHJcbmV4cG9ydCB0eXBlIEdyaWRMaW5lQ291bnRPck5hbWUgPSBDc3NOdW1iZXIgfCBJR3JpZEFyZWFSdWxlIHwgSUdyaWRMaW5lUnVsZSB8IHN0cmluZztcclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWNvbHVtbi1zdGFydC9lbmQgYW5kIGdyaWQtcm93LXN0YXJ0L2VuZCBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBeGlzU2lkZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IEdyaWRMaW5lQ291bnRPck5hbWUgfCBJU3BhblByb3h5O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC1jb2x1bW4gYW5kIGdyaWQtcm93IHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEF4aXNfU3R5bGVUeXBlID0gT25lT3JQYWlyPEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC1hcmVhIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBcmVhX1N0eWxlVHlwZSA9IE9uZU9yQm94PEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZGVmaW5pbmcgYSBzaW5nbGUgZ3JpZCBhcmVhIHBvc2l0aW9uLiBUaGUgbnVtYmVycyBhcmUgMS1iYXNlZCBpbmRpY2VzIG9mIHRoZSBsaW5lcyBpblxyXG4gKiB0aGUgZm9sbG93aW5nIHNlcXVlbmNlOiBibG9jayBzdGFydCwgaW5saW5lIHN0YXJ0LCBibG9jayBlbmQsIGlubGluZSBlbmQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb24gPSBbSUdyaWRBcmVhUnVsZSB8IEV4dGVuZGVkPHN0cmluZz4sXHJcbiAgICBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtdGVtcGxhdGUtYXJlYXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRlbXBsYXRlQXJlYXNfU3R5bGVUeXBlID0gXCJub25lXCIgfCBPbmVPck1hbnk8SVF1b3RlZFByb3h5PiB8XHJcbiAgICBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb25bXTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGEgc2luZ2xlIHRlbXBsYXRlIGVsZW1lbnQgZGVmaW5pbmcgbmFtZSBvciBuYW1lcyBmb3IgYSBncmlkIGxpbmUgaW4gZ3JpZCB0ZW1wbGF0ZS5cclxuICogVGhpcyBpcyBhbHdheXMgYW4gYXJyYXkgLSBldmVuIGlmIGEgc2luZ2xlIG5hbWUgaXMgZ2l2ZW4uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVHJhY2tMaW5lID0gKElHcmlkTGluZVJ1bGUgfCBFeHRlbmRlZDxzdHJpbmc+KVtdO1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIHRyYWNrIGVsZW1lbnQgb2YgZ3JpZCB0ZW1wbGF0ZSBheGlzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUcmFjayA9IEdyaWRUcmFja1NpemUgfCBHcmlkVHJhY2tMaW5lO1xyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtdGVtcGxhdGUtY29sdW1ucyBhbmQgZ3JpZC10ZW1wbGF0ZS1yb3dzIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IE9uZU9yTWFueTxHcmlkVHJhY2s+IHwgXCJzdWJncmlkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBoeXBoZW5zIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEh5cGhlbnNfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcIm1hbnVhbFwiIHwgXCJhdXRvXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBpbWFnZS1yZW5kZXJpbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSW1hZ2VSZW5kZXJpbmdfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImNyaXNwLWVkZ2VzXCIgfCBcInBpeGVsYXRlZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgaXNvbGF0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIElzb2xhdGlvbl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiaXNvbGF0ZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEp1c3RpZnlDb250ZW50X1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInNwYWNlLWJldHdlZW5cIiB8IFwic3BhY2UtYXJvdW5kXCIgfCBcInNwYWNlLWV2ZW5seVwiIHwgXCJzdHJldGNoXCIgfFxyXG4gICAgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHxcclxuICAgIFwic2FmZSBjZW50ZXJcIiB8IFwic2FmZSBzdGFydFwiIHwgXCJzYWZlIGVuZFwiIHwgXCJzYWZlIGZsZXgtc3RhcnRcIiB8IFwic2FmZSBmbGV4LWVuZFwiIHwgXCJzYWZlIGxlZnRcIiB8IFwic2FmZSByaWdodFwiIHxcclxuICAgIFwidW5zYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgc3RhcnRcIiB8IFwidW5zYWZlIGVuZFwiIHwgXCJ1bnNhZmUgZmxleC1zdGFydFwiIHwgXCJ1bnNhZmUgZmxleC1lbmRcIiB8IFwidW5zYWZlIGxlZnRcIiB8IFwidW5zYWZlIHJpZ2h0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBqdXN0aWZ5LWl0ZW1zIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEp1c3RpZnlJdGVtc19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8XHJcbiAgICBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwic2VsZi1zdGFydFwiIHwgXCJzZWxmLWVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8XHJcbiAgICBcInNhZmUgY2VudGVyXCIgfCBcInNhZmUgc3RhcnRcIiB8IFwic2FmZSBlbmRcIiB8IFwic2FmZSBzZWxmLXN0YXJ0XCIgfCBcInNhZmUgc2VsZi1lbmRcIiB8IFwic2FmZSBmbGV4LXN0YXJ0XCIgfCBcInNhZmUgZmxleC1lbmRcIiB8IFwic2FmZSBsZWZ0XCIgfCBcInNhZmUgcmlnaHRcIiB8XHJcbiAgICBcInVuc2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIHN0YXJ0XCIgfCBcInVuc2FmZSBlbmRcIiB8IFwidW5zYWZlIHNlbGYtc3RhcnRcIiB8IFwidW5zYWZlIHNlbGYtZW5kXCIgfCBcInVuc2FmZSBmbGV4LXN0YXJ0XCIgfCBcInVuc2FmZSBmbGV4LWVuZFwiIHwgXCJ1bnNhZmUgbGVmdFwiIHwgXCJ1bnNhZmUgcmlnaHRcIiB8XHJcbiAgICBcImxlZ2FjeVwiIHwgXCJsZWdhY3kgbGVmdFwiIHwgXCJsZWdhY3kgcmlnaHRcIiB8IFwibGVnYWN5IGNlbnRlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IganVzdGlmeS1zZWxmIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEp1c3RpZnlTZWxmX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfFxyXG4gICAgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcInNlbGYtc3RhcnRcIiB8IFwic2VsZi1lbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfFxyXG4gICAgXCJzYWZlIGNlbnRlclwiIHwgXCJzYWZlIHN0YXJ0XCIgfCBcInNhZmUgZW5kXCIgfCBcInNhZmUgc2VsZi1zdGFydFwiIHwgXCJzYWZlIHNlbGYtZW5kXCIgfCBcInNhZmUgZmxleC1zdGFydFwiIHwgXCJzYWZlIGZsZXgtZW5kXCIgfCBcInNhZmUgbGVmdFwiIHwgXCJzYWZlIHJpZ2h0XCIgfFxyXG4gICAgXCJ1bnNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBzdGFydFwiIHwgXCJ1bnNhZmUgZW5kXCIgfCBcInVuc2FmZSBzZWxmLXN0YXJ0XCIgfCBcInVuc2FmZSBzZWxmLWVuZFwiIHwgXCJ1bnNhZmUgZmxleC1zdGFydFwiIHwgXCJ1bnNhZmUgZmxleC1lbmRcIiB8IFwidW5zYWZlIGxlZnRcIiB8IFwidW5zYWZlIHJpZ2h0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsZXR0ZXItc3BhY2luZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMZXR0ZXJTcGFjaW5nX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaW5lLWJyZWFrIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpbmVCcmVha19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibG9vc2VcIiB8IFwibm9ybWFsXCIgfCBcInN0cmljdFwiIHwgXCJhbnl3aGVyZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGluZS1oZWlnaHQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGluZUhlaWdodF9TdHlsZVR5cGUgPSBDc3NOdW1iZXIgfCBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaXN0LXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpc3RTdHlsZV9TdHlsZVR5cGUgPSBMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZSB8IExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZSB8IExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZSB8XHJcbiAgICBbRXh0ZW5kZWQ8TGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlPl0gfFxyXG4gICAgW0V4dGVuZGVkPExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPj9dIHxcclxuICAgIFtFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZT5dIHxcclxuICAgIFtFeHRlbmRlZDxMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpbmUtc3R5bGUtaW1hZ2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlID0gXCJub25lXCIgfCBJVXJsUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaXN0LXN0eWxlLXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZSA9IFwiaW5zaWRlXCIgfCBcIm91dHNpZGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpc3Qtc3R5bGUtdHlwZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJkaXNjXCIgfCBcImNpcmNsZVwiIHwgXCJzcXVhcmVcIiB8IFwiZGVjaW1hbFwiIHwgXCJkZWNpbWFsLWxlYWRpbmctemVyb1wiIHxcclxuICAgIFwiY2prLWRlY2ltYWxcIiB8IFwiY2prLWVhcnRobHktYnJhbmNoXCIgfCBcImNqay1oZWF2ZW5seS1zdGVtXCIgfCBcImNqay1pZGVvZ3JhcGhpY1wiIHxcclxuICAgIFwibG93ZXItcm9tYW5cIiB8IFwidXBwZXItcm9tYW5cIiB8IFwibG93ZXItZ3JlZWtcIiB8IFwibG93ZXItYWxwaGFcIiB8IFwibG93ZXItbGF0aW5cIiB8IFwidXBwZXItYWxwaGFcIiB8IFwidXBwZXItbGF0aW5cIiB8XHJcbiAgICBcImFyYWJpYy1pbmRpY1wiIHwgXCJhcm1lbmlhblwiIHwgXCJiZW5nYWxpXCIgfCBcImNhbWJvZGlhblwiIHwgXCJkZXZhbmFnYXJpXCIgfCBcImdlb3JnaWFuXCIgfCBcImd1amFyYXRpXCIgfCBcImd1cm11a2hpXCIgfCBcImhlYnJld1wiIHxcclxuICAgIFwiaGlyYWdhbmFcIiB8IFwiaGlyYWdhbmEtaXJvaGFcIiB8IFwiamFwYW5lc2UtZm9ybWFsXCIgfCBcImphcGFuZXNlLWluZm9ybWFsXCIgfCBcImthbm5hZGFcIiB8IFwia2F0YWthbmFcIiB8IFwia2F0YWthbmEtaXJvaGFcIiB8XHJcbiAgICBcImtobWVyXCIgfCBcImtvcmVhbi1oYW5ndWwtZm9ybWFsXCIgfCBcImtvcmVhbi1oYW5qYS1mb3JtYWxcIiB8IFwia29yZWFuLWhhbmphLWluZm9ybWFsXCIgfCBcImxhb1wiIHwgXCJsb3dlci1hcm1lbmlhblwiIHxcclxuICAgIFwibWFsYXlhbGFtXCIgfCBcIm1vbmdvbGlhblwiIHwgXCJteWFubWFyXCIgfCBcIm9yaXlhXCIgfCBcInBlcnNpYW5cIiB8IFwic2ltcC1jaGluZXNlLWZvcm1hbFwiIHwgXCJzaW1wLWNoaW5lc2UtaW5mb3JtYWxcIiB8XHJcbiAgICBcInRhbWlsXCIgfCBcInRlbHVndVwiIHwgXCJ0aGFpXCIgfCBcInRpYmV0YW5cIiB8IFwidHJhZC1jaGluZXNlLWZvcm1hbFwiIHwgXCJ0cmFkLWNoaW5lc2UtaW5mb3JtYWxcIiB8IFwidXBwZXItYXJtZW5pYW5cIiB8XHJcbiAgICBcImRpc2Nsb3N1cmUtb3BlblwiIHwgXCJkaXNjbG9zdXJlLWNsb3NlZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG1hcmtlci1zdGFydCwgbWFya2VyLW1pZCBhbmQgbWFya2VyLWVuZCBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIE1hcmtlcl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IElJRFJ1bGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb2JqZWN0LWZpdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPYmplY3RGaXRfU3R5bGVUeXBlID0gXCJmaWxsXCIgfCBcImNvbnRhaW5cIiB8IFwiY292ZXJcIiB8IFwibm9uZVwiIHwgXCJzY2FsZS1kb3duXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb2Zmc2V0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9mZnNldF9TdHlsZVR5cGUgPSBzdHJpbmcgfCBPZmZzZXRQYXRoX1N0eWxlVHlwZSB8XHJcbntcclxuICAgIGFuY2hvcj86IE9mZnNldEFuY2hvcl9TdHlsZVR5cGUsXHJcbiAgICBkaXN0YW5jZT86IENzc0xlbmd0aCxcclxuICAgIHBhdGg/OiBPZmZzZXRQYXRoX1N0eWxlVHlwZSxcclxuICAgIHBvc2l0aW9uPzogQ3NzUG9zaXRpb24sXHJcbiAgICByb3RhdGU/OiBPZmZzZXRSb3RhdGVfU3R5bGVUeXBlLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb2Zmc2V0LWFuY2hvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPZmZzZXRBbmNob3JfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDc3NQb3NpdGlvbjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIG9mZnNldC1wYXRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9mZnNldFBhdGhfU3R5bGVUeXBlID0gXCJub25lXCIgfCBJUmF5UHJveHkgfCBJVXJsUHJveHkgfCBCYXNpY1NoYXBlIHwgR2VvbWV0cnlCb3hLZXl3b3JkIHxcclxuICAgIFtHZW9tZXRyeUJveEtleXdvcmQsIEJhc2ljU2hhcGVdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG9mZnNldC1yb3RhdGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2Zmc2V0Um90YXRlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJyZXZlcnNlXCIgfCBDc3NBbmdsZSB8IFtcImF1dG9cIiB8IFwicmV2ZXJzZVwiLCBDc3NBbmdsZV07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcmZsb3cteC95IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGUgPSBcInZpc2libGVcIiB8IFwiaGlkZGVuXCIgfCBcImNsaXBcIiB8IFwic2Nyb2xsXCIgfCBcImF1dG9cIjtcclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcmZsb3ctIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJmbG93X1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyZmxvdy1hbmNob3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcmZsb3dBbmNob3JfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyZmxvdy13cmFwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJmbG93V3JhcF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJicmVhay13b3JkXCIgfCBcImFueXdoZXJlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcnNjcm9sbC1iZWhhdmlvci14L3kgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGUgPSBcImNvbnRhaW5cIiB8IFwibm9uZVwiIHwgXCJhdXRvXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJzY3JvbGwtYmVoYXZpb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcnNjcm9sbEJlaGF2aW9yX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGFpbnQtb3JkZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGFpbnRPcmRlcl9LZXl3b3JkID0gXCJmaWxsXCIgfCBcInN0cm9rZVwiIHwgXCJtYXJrZXJzXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBhaW50LW9yZGVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBhaW50T3JkZXJfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFBhaW50T3JkZXJfS2V5d29yZCB8XHJcbiAgICBbUGFpbnRPcmRlcl9LZXl3b3JkLCBQYWludE9yZGVyX0tleXdvcmQ/LCBQYWludE9yZGVyX0tleXdvcmQ/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwZXJzcGVjdGl2ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQZXJzcGVjdGl2ZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwZXJzcGVjdGl2ZS1vcmlnaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGVyc3BlY3RpdmVPcmlnaW5fU3R5bGVUeXBlID0gSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoIHxcclxuICAgIFtFeHRlbmRlZDxIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8VmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGg+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwbGFjZS1jb250ZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBsYWNlQ29udGVudF9TdHlsZVR5cGUgPSBBbGlnbkNvbnRlbnRfU3R5bGVUeXBlIHwgW0V4dGVuZGVkPEFsaWduQ29udGVudF9TdHlsZVR5cGU+LCBFeHRlbmRlZDxKdXN0aWZ5Q29udGVudF9TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwbGFjZS1pdGVtcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQbGFjZUl0ZW1zX1N0eWxlVHlwZSA9IEFsaWduSXRlbXNfU3R5bGVUeXBlIHwgW0V4dGVuZGVkPEFsaWduSXRlbXNfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8SnVzdGlmeUl0ZW1zX1N0eWxlVHlwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBsYWNlLXNlbGYgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGxhY2VTZWxmX1N0eWxlVHlwZSA9IEFsaWduU2VsZl9TdHlsZVR5cGUgfCBbRXh0ZW5kZWQ8QWxpZ25TZWxmX1N0eWxlVHlwZT4sIEV4dGVuZGVkPEp1c3RpZnlTZWxmX1N0eWxlVHlwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBvaW50ZXItZXZlbnRzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBvaW50ZXJFdmVudHNfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vbmVcIiB8IFwidmlzaWJsZVBhaW50ZWRcIiB8IFwidmlzaWJsZUZpbGxcIiB8IFwidmlzaWJsZVN0cm9rZVwiIHwgXCJ2aXNpYmxlXCIgfFxyXG4gICAgXCJwYWludGVkXCIgfCBcImZpbGxcIiB8IFwic3Ryb2tlXCIgfCBcImFsbFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBvc2l0aW9uX1N0eWxlVHlwZSA9IFwic3RhdGljXCIgfCBcInJlbGF0aXZlXCIgfCBcImFic29sdXRlXCIgfCBcInN0aWNreVwiIHwgXCJmaXhlZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHF1b3RlcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBRdW90ZXNfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImF1dG9cIiB8IEV4dGVuZGVkPHN0cmluZz5bXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSByZXNpemUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUmVzaXplX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJib3RoXCIgfCBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIiB8IFwiYmxvY2tcIiB8IFwiaW5saW5lXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciByb3RhdGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUm90YXRlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgW1wieFwiIHwgXCJ5XCIgfCBcInpcIiwgRXh0ZW5kZWQ8Q3NzQW5nbGU+XSB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgRXh0ZW5kZWQ8Q3NzQW5nbGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHJvdy1nYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUm93R2FwX1N0eWxlVHlwZSA9IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY2FsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY2FsZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IENzc051bWJlciB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPj8sIEV4dGVuZGVkPENzc051bWJlcj4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGxiYXItY29sb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsYmFyQ29sb3JfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImRhcmtcIiB8IFwibGlnaHRcIiB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzQ29sb3I+LCBFeHRlbmRlZDxDc3NDb2xvcj5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbGJhci13aWR0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxiYXJXaWR0aF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidGhpblwiIHwgXCJub25lXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsLWJlaGF2aW9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbEJlaGF2aW9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJzbW9vdGhcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGwtc25hcC1hbGlnbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxTbmFwQWxpZ25fU3R5bGVUeXBlID0gT25lT3JQYWlyPFwibm9uZVwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiY2VudGVyXCI+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbC1zbmFwLXN0b3Agc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsU25hcFN0b3BfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiYWx3YXlzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsLXNuYXAtdHlwZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxTbmFwVHlwZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8XHJcbiAgICBbRXh0ZW5kZWQ8XCJ4XCIgfCBcInlcIiB8IFwiYmxvY2tcIiB8IFwiaW5saW5lXCIgfCBcImJvdGhcIj4sIEV4dGVuZGVkPFwibWFuZGF0b3J5XCIgfCBcInByb3hpbWl0eVwiPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaGFwZS1vdXRzaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNoYXBlT3V0c2lkZV9TdHlsZVR5cGUgPSBJVXJsUHJveHkgfCBCYXNpY1NoYXBlIHwgR2VvbWV0cnlCb3hLZXl3b3JkIHwgQ3NzSW1hZ2U7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2hhcGUtcmVuZGVyaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNoYXBlUmVuZGVyaW5nX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJvcHRpbWl6ZVNwZWVkXCIgfCBcImNyaXNwRWRnZXNcIiB8IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGFibGUtbGF5b3V0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRhYmxlTGF5b3V0X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJmaXhlZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtYWxpZ24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEFsaWduX1N0eWxlVHlwZSA9IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCIgfCBcImp1c3RpZnlcIiB8IFwibWF0Y2gtcGFyZW50XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1hbGlnbi1sYXN0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRBbGlnbkxhc3RfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiIHwgXCJqdXN0aWZ5XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1hbmNob3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEFuY2hvcl9TdHlsZVR5cGUgPSBcInN0YXJ0XCIgfCBcIm1pZGRsZVwiIHwgXCJlbmRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWNvbWJpbmUtdXByaWdodCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0Q29tYmluZVVwcmlnaHRfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImFsbFwiIHwgXCJkaWdpdHNcIiB8IG51bWJlcjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIHRoZSB0ZXh0LWRlY29yYXRpb24gc3R5bGUgcHJvcGVydHkuIElmIGEgbnVtYmVyIGlzIHNwZWNpZmllZCwgaXQgd2lsbCBiZSBpbnRlcnByZXRlZFxyXG4gKiBhcyBjb2xvciAtIG5vdCBhcyB0aGlja25lc3MuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvbl9TdHlsZVR5cGUgPSBUZXh0RGVjb3JhdGlvbkxpbmVfU3R5bGVUeXBlIHwgVGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGUgfFxyXG4gICAgQ3NzQ29sb3IgfCBUZXh0RGVjb3JhdGlvblRoaWNrbmVzc19TdHlsZVR5cGUgfFxyXG4gICAge1xyXG4gICAgICAgIGxpbmU/OiBFeHRlbmRlZDxUZXh0RGVjb3JhdGlvbkxpbmVfU3R5bGVUeXBlPixcclxuICAgICAgICBzdHlsZT86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlPixcclxuICAgICAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgICAgICB0aGlja25lc3M/OiBFeHRlbmRlZDxUZXh0RGVjb3JhdGlvblRoaWNrbmVzc19TdHlsZVR5cGU+LFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWRlY29yYXRpb24tbGluZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvbkxpbmVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcInNwZWxsaW5nLWVycm9yXCIgfCBcImdyYW1tYXItZXJyb3JcIiB8XHJcbiAgICBPbmVPck1hbnk8XCJ1bmRlcmxpbmVcIiB8IFwib3ZlcmxpbmVcIiB8IFwibGluZS10aHJvdWdoXCI+OyBcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWRlY29yYXRpb24tc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGUgPSBcInNvbGlkXCIgfCBcImRvdWJsZVwiIHwgXCJkb3R0ZWRcIiB8IFwiZGFzaGVkXCIgfCBcIndhdnlcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbmsgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dERlY29yYXRpb25Ta2lwSW5rX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhdXRvXCIgfCBcImFsbFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3Mgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dERlY29yYXRpb25UaGlja25lc3NfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImZyb20tZm9udFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vLyAvKiogVHlwZSBmb3IgdGhlIHRleHQtZW1waGFzaXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEVtcGhhc2lzX1N0eWxlVHlwZSA9IFRleHRFbXBoYXNpc1N0eWxlX1N0eWxlVHlwZSB8IENzc0NvbG9yIHxcclxuICAgIFtFeHRlbmRlZDxUZXh0RW1waGFzaXNTdHlsZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxDc3NDb2xvcj5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZW1waGFzaXMtcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEVtcGhhc2lzUG9zaXRpb25fU3R5bGVUeXBlID0gXCJvdmVyIGxlZnRcIiB8IFwib3ZlciByaWdodFwiIHwgXCJ1bmRlciBsZWZ0XCIgfCBcInVuZGVyIHJpZ2h0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBTaGFwZSBmb3IgdGhlIHRleHQtZW1waGFzaXMtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEVtcGhhc2lzU2hhcGUgPSBcImRvdFwiIHwgXCJjaXJjbGVcIiB8IFwiZG91YmxlLWNpcmNsZVwiIHwgXCJ0cmlhbmdsZVwiIHwgXCJzZXNhbWVcIiB8IHN0cmluZztcclxuXHJcbi8qKiBGaWxsIG9wdGlvbiBmb3IgdGhlIHRleHQtZW1waGFzaXMtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEVtcGhhc2lzRmlsbCA9IFwiZmlsbGVkXCIgfCBcIm9wZW5cIjtcclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1lbXBoYXNpcy1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNTdHlsZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFRleHRFbXBoYXNpc0ZpbGwgfCBUZXh0RW1waGFzaXNTaGFwZSB8XHJcbiAgICBbRXh0ZW5kZWQ8VGV4dEVtcGhhc2lzRmlsbD4sIEV4dGVuZGVkPFRleHRFbXBoYXNpc1NoYXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1pbmRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEluZGVudF9TdHlsZVR5cGUgPSBDc3NMZW5ndGggfFxyXG4gICAgW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPE9uZU9yTWFueTxcImVhY2gtbGluZVwiIHwgXCJoYW5naW5nXCIgfCBcImVhY2gtbGluZSBoYW5naW5nXCI+Pl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1qdXN0aWZ5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRKdXN0aWZ5X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJpbnRlci1jaGFyYWN0ZXJcIiB8IFwiaW50ZXItd29yZFwiIHwgXCJub25lXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1vcmllbnRhdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0T3JpZW50YXRpb25fU3R5bGVUeXBlID0gXCJtaXhlZFwiIHwgXCJ1cHJpZ2h0XCIgfCBcInNpZGV3YXlzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1vdmVyZmxvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0T3ZlcmZsb3dfU3R5bGVUeXBlID0gT25lT3JQYWlyPFwiY2xpcFwiIHwgXCJlbGxpcHNpc1wiIHwgXCJmYWRlXCIgfCBzdHJpbmc+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNpbmdsZSB2YWx1ZSBvZiB0aGUgdGV4dC1zaGFkb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dFNoYWRvd19TaW5nbGUgPSBcIm5vbmVcIiB8IHN0cmluZyB8XHJcbiAgICB7XHJcbiAgICAgICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIGJsdXI/OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1zaGFkb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dFNoYWRvd19TdHlsZVR5cGUgPSBPbmVPck1hbnk8VGV4dFNoYWRvd19TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtc2l6ZS1hZGp1c3Qgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dFNpemVBZGp1c3RfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImF1dG9cIiB8IENzc1BlcmNlbnQ7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC10cmFuc2Zvcm0gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dFRyYW5zZm9ybV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiY2FwaXRhbGl6ZVwiIHwgXCJ1cHBlcmNhc2VcIiB8IFwibG93ZXJjYXNlXCIgfCBcImZ1bGwtd2lkdGhcIiB8IFwiZnVsbC1zaXplLWthbmFcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0VW5kZXJsaW5lUG9zaXRpb25fU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInVuZGVyXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiYXV0by1wb3NcIiB8IFwiYWJvdmVcIiB8IFwiYmVsb3dcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0b3VjaC1hY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVG91Y2hBY3Rpb25fU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vbmVcIiB8IFwibWFuaXB1bGF0aW9uXCIgfFxyXG4gICAgXCJwYW4teFwiIHwgXCJwYW4tbGVmdFwiIHwgXCJwYW4tcmlnaHRcIiB8IFwicGFuLXlcIiB8IFwicGFuLXVwXCIgfCBcInBhbi1kb3duXCIgfCBcInBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi14IHBpbmNoLXpvb21cIiB8IFwicGFuLWxlZnQgcGluY2gtem9vbVwiIHwgXCJwYW4tcmlnaHQgcGluY2gtem9vbVwiIHwgXCJwYW4teSBwaW5jaC16b29tXCIgfCBcInBhbi11cCBwaW5jaC16b29tXCIgfCBcInBhbi1kb3duIHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi14IHBhbi15XCIgfCBcInBhbi14IHBhbi15IHBpbmNoLXpvb21cIiB8IFwicGFuLXggcGFuLXVwXCIgfCBcInBhbi14IHBhbi11cCBwaW5jaC16b29tXCIgfCBcInBhbi14IHBhbi1kb3duXCIgfCBcInBhbi14IHBhbi1kb3duIHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi15IHBhbi1sZWZ0XCIgfCBcInBhbi15IHBhbi1sZWZ0IHBpbmNoLXpvb21cIiB8IFwicGFuLXkgcGFuLXJpZ2h0XCIgfCBcInBhbi15IHBhbi1yaWdodCBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4tbGVmdCBwYW4tdXBcIiB8IFwicGFuLWxlZnQgcGFuLXVwIHBpbmNoLXpvb21cIiB8IFwicGFuLWxlZnQgcGFuLWRvd25cIiB8IFwicGFuLWxlZnQgcGFuLWRvd24gcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXJpZ2h0IHBhbi11cFwiIHwgXCJwYW4tcmlnaHQgcGFuLXVwIHBpbmNoLXpvb21cIiB8IFwicGFuLXJpZ2h0IHBhbi1kb3duXCIgfCBcInBhbi1yaWdodCBwYW4tZG93biBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4tdXAgcGFuLWxlZnRcIiB8IFwicGFuLXVwIHBhbi1sZWZ0IHBpbmNoLXpvb21cIiB8IFwicGFuLXVwIHBhbi1yaWdodFwiIHwgXCJwYW4tdXAgcGFuLXJpZ2h0IHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi1kb3duIHBhbi1sZWZ0XCIgfCBcInBhbi1kb3duIHBhbi1sZWZ0IHBpbmNoLXpvb21cIiB8IFwicGFuLWRvd24gcGFuLXJpZ2h0XCIgfCBcInBhbi1kb3duIHBhbi1yaWdodCBwaW5jaC16b29tXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2Zvcm0gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgc3RyaW5nIHwgT25lT3JNYW55PElUcmFuc2Zvcm1Qcm94eT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2Zvcm0tYm94IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybUJveF9TdHlsZVR5cGUgPSBcImNvbnRlbnQtYm94XCIgfCBcImJvcmRlci1ib3hcIiB8IFwiZmlsbC1ib3hcIiB8IFwic3Ryb2tlLWJveFwiIHwgXCJ2aWV3LWJveFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNmb3JtLW9yaWdpbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1PcmlnaW5fU3R5bGVUeXBlID0gSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoIHxcclxuICAgIFtFeHRlbmRlZDxIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8VmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2Zvcm0tc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtU3R5bGVfU3R5bGVUeXBlID0gXCJmbGF0XCIgfCBcInByZXNlcnZlLTNkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgdHJhbnNpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uX1NpbmdsZSA9IHN0cmluZyB8XHJcbiAgICB7XHJcbiAgICAgICAgcHJvcGVydHk/OiBFeHRlbmRlZDxUcmFuc2l0aW9uUHJvcGVydHlfU2luZ2xlPjtcclxuICAgICAgICBkdXJhdGlvbj86IEV4dGVuZGVkPENzc1RpbWU+O1xyXG4gICAgICAgIGZ1bmM/OiBFeHRlbmRlZDxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+O1xyXG4gICAgICAgIGRlbGF5PzogRXh0ZW5kZWQ8Q3NzVGltZT47XHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8VHJhbnNpdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHRyYW5zaXRpb24tcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblByb3BlcnR5X1NpbmdsZSA9IFwibm9uZVwiIHwgXCJhbGxcIiB8IGtleW9mIElDc3NTdHlsZXNldDtcclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2l0aW9uLXByb3BlcnR5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25Qcm9wZXJ0eV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8VHJhbnNpdGlvblByb3BlcnR5X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb25fU3R5bGVUeXBlID0gT25lT3JNYW55PFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdHJhbnNsYXRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zbGF0ZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IENzc0xlbmd0aCB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHVuaWNvZGUtYmlkaSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBVbmljb2RlQmlkaV9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJlbWJlZFwiIHwgXCJpc29sYXRlXCIgfCBcImJpZGktb3ZlcnJpZGVcIiB8IFwiaXNvbGF0ZS1vdmVycmlkZVwiIHwgXCJwbGFpbnRleHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB1c2VyLXNlbGVjdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBVc2VyU2VsZWN0X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJ0ZXh0XCIgfCBcIm5vbmVcIiB8IFwiY29udGFpblwiIHwgXCJhbGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB2ZXJ0aWNhbC1hbGlnbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbEFsaWduX1N0eWxlVHlwZSA9IFwiYmFzZWxpbmVcIiB8IFwic3ViXCIgfCBcInN1cGVyXCIgfCBcInRleHQtdG9wXCIgfCBcInRleHQtYm90dG9tXCIgfFxyXG4gICAgXCJtaWRkbGVcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHZpc2liaWxpdHkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVmlzaWJpbGl0eV9TdHlsZVR5cGUgPSBcInZpc2libGVcIiB8IFwiaGlkZGVuXCIgfCBcImNvbGxhcHNlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdmVjdG9yLWVmZmVjdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBWZWN0b3JFZmZlY3RfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcIm5vbi1zY2FsaW5nLXN0cm9rZVwiIHwgXCJub24tc2NhbGluZy1zaXplXCIgfCBcIm5vbi1yb3RhdGlvblwiIHwgXCJmaXhlZC1wb3NpdGlvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHdoaXRlLXNwYWNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdoaXRlU3BhY2VfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwicHJlXCIgfCBcIm5vd3JhcFwiIHwgXCJwcmUtd3JhcFwiIHwgXCJwcmUtbGluZVwiIHwgXCJicmVhay1zcGFjZXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHdpbGwtY2hhbmdlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdpbGxDaGFuZ2VfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBPbmVPck1hbnk8XCJzY3JvbGwtcG9zaXRpb25cIiB8IFwiY29udGVudHNcIiB8IEV4Y2x1ZGU8a2V5b2YgSUNzc1N0eWxlc2V0LFwid2lsbENoYW5nZVwiPj47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgd29yZC1icmVhayBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXb3JkQnJlYWtfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiYnJlYWstYWxsXCIgfCBcImtlZXAtYWxsXCIgfCBcImJyZWFrLXdvcmRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB3b3JkLXNwYWNpbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV29yZFNwYWNpbmdfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB3cml0aW5nLW1vZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV3JpdGluZ01vZGVfU3R5bGVUeXBlID0gXCJob3Jpem9udGFsLXRiXCIgfCBcInZlcnRpY2FsLXJsXCIgfCBcInZlcnRpY2FsLWxyXCIgfCBcInNpZGV3YXlzLXJsXCIgfCBcInNpZGV3YXlzLWxyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgei1pbmRleCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBaSW5kZXhfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDc3NOdW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgem9vbSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBab29tX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInJlc2V0XCIgfCBDc3NQZXJjZW50O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc3R5bGUgcHJvcGVydGllcyBmb3Igd2hpY2ggdGhlcmUgaXMgbm8gc3BlY2lhbCB0eXBlIGRlZmluZWQuICovXHJcbmV4cG9ydCB0eXBlIERlZmF1bHRTdHlsZVR5cGUgPSBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm94eSB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYDxmaWx0ZXI+YCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGaWx0ZXJQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJmaWx0ZXJcIj4ge307XHJcblxyXG4vKipcclxuICogVGhlIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSB0aGUgQ1NTIGA8YmFzaWMtc2hhcGU+YCBmdW5jdGlvbnNcclxuICogZXhjZXB0IHRoZSBgcGF0aCgpYCBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2ljU2hhcGVQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJiYXNpYy1zaGFwZVwiPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQmFzaWNTaGFwZVR5cGUgcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSB0aGUgQ1NTIGA8YmFzaWMtc2hhcGU+YCBmdW5jdGlvbnMgaW5jbHVkaW5nXHJcbiAqIHRoZSBgcGF0aCgpYCBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJhc2ljU2hhcGUgPSBJQmFzaWNTaGFwZVByb3h5IHwgSVBhdGhCdWlsZGVyO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJUmF5UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSB0aGUgQ1NTIGByYXkoKWAgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUmF5UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwicmF5XCI+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSB0aGUgQ1NTIGA8YmFzaWMtc2hhcGU+YCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmFuc2Zvcm1Qcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJ0cmFuc2Zvcm1cIj4ge307XHJcblxyXG4vKipcclxuICogVGhlIElNaW5NYXhQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIG1pbm1heCgpIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNaW5NYXhQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJtaW5tYXhcIj4ge31cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZpdENvbnRlbnRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIGZpdC1jb250ZW50KCkgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpdENvbnRlbnRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJmaXQtY29udGVudFwiPiB7fVxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUmVwZWF0UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSByZXBlYXQoKSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUmVwZWF0UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwicmVwZWF0XCI+IHt9XHJcblxyXG4vKipcclxuICogVGhlIElTcGFuUHJveHkgZnVuY3Rpb24gcHJvZHVjZXMgdGhlIHNwYW4gZXhwcmVzc2lvbiBmb3IgZ3JpZCBsYXlvdXRzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTcGFuUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwic3BhblwiPiB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXRoQnVpbGRlciBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgb2JqZWN0IHRoYXQgYWNjdW11bGF0ZXMgcGF0aCBjb21tYW5kcyB0aGF0IGFyZSB0aGVuXHJcbiAqIGNvbnZlcnRlZCB0byBhIHN0cmluZyBwYXJhbWV0ZXIgb2YgdGhlIENTUyBgcGF0aCgpYCBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhdGhCdWlsZGVyXHJcbntcclxuICAgIC8vIE1vdmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG4gICAgTSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gTW92ZS10byBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcbiAgICBtKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBMaW5lLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRMKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBMaW5lLXRvIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuICAgIGwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEhvcml6b250YWwgbGluZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0SCggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lLXRvIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuICAgIGgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFZlcnRpY2FsIGxpbmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdFYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFZlcnRpY2FsIGxpbmUtdG8gY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG4gICAgdiggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gQ3ViaWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRDKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBDdWJpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG5cdGMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFNtb290aCBjdWJpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdFMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBTbW9vdGggY3ViaWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHRzKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gUXVhZHJhdGljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0USggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFF1YWRyYXRpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG5cdHEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBTbW9vdGggcXVhZHJhdGljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0VCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gU21vb3RoIHF1YWRyYXRpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG5cdHQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEVsbGlwdGljYWwgYXJjIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRBKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEVsbGlwdGljYWwgYXJjIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHRhKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIENsb3NlLXBhdGggY29tbWFuZC5cclxuICAgIHooKTogSVBhdGhCdWlsZGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdHlsZXNldCB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHJlcHJlc2VudGluZyBhIGNvbGxlY3Rpb24gb2YgYnVpbHQtaW4gc3R5bGUgcHJvcGVydGllcyBhbmQgdGhlaXIgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzU3R5bGVzZXRcclxue1xyXG4gICAgYWxsPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGFsaWduQ29udGVudD86IEFsaWduQ29udGVudF9TdHlsZVR5cGU7XHJcbiAgICBhbGlnbkl0ZW1zPzogQWxpZ25JdGVtc19TdHlsZVR5cGU7XHJcbiAgICBhbGlnblNlbGY/OiBBbGlnblNlbGZfU3R5bGVUeXBlO1xyXG4gICAgYWxpZ25tZW50QmFzZWxpbmU/OiBBbGlnbm1lbnRCYXNlbGluZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb24/OiBBbmltYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uRGVsYXk/OiBBbmltYXRpb25EZWxheV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EaXJlY3Rpb24/OiBBbmltYXRpb25EaXJlY3Rpb25fU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uRHVyYXRpb24/OiBBbmltYXRpb25EdXJhdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25GaWxsTW9kZT86IEFuaW1hdGlvbkZpbGxNb2RlX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50PzogQW5pbWF0aW9uSXRlcmF0aW9uQ291bnRfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uTmFtZT86IEFuaW1hdGlvbk5hbWVfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uUGxheVN0YXRlPzogQW5pbWF0aW9uUGxheVN0YXRlX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uPzogQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fU3R5bGVUeXBlO1xyXG5cclxuICAgIGJhY2tkcm9wRmlsdGVyPzogRmlsdGVyX1N0eWxlVHlwZTtcclxuICAgIGJhY2tmYWNlVmlzaWJpbGl0eT86IEJhY2tmYWNlVmlzaWJpbGl0eU1vZGVfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZD86IEJhY2tncm91bmRfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ/OiBCYWNrZ3JvdW5kQXR0YWNobWVudF9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlPzogQmFja2dyb3VuZEJsZW5kTW9kZV9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQ2xpcD86IEJhY2tncm91bmRDbGlwX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYmFja2dyb3VuZEltYWdlPzogQmFja2dyb3VuZEltYWdlX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRPcmlnaW4/OiBCYWNrZ3JvdW5kT3JpZ2luX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbj86IEJhY2tncm91bmRQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25YPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvblk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFJlcGVhdD86IEJhY2tncm91bmRSZXBlYXRfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFJlcGVhdFg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFJlcGVhdFk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFNpemU/OiBCYWNrZ3JvdW5kU2l6ZV9TdHlsZVR5cGU7XHJcbiAgICBiYXNlbGluZVNoaWZ0PzogQmFzZWxpbmVTaGlmdF9TdHlsZVR5cGU7XHJcbiAgICBibG9ja1NpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBib3JkZXI/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQmxvY2tFbmQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQmxvY2tFbmRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyQmxvY2tFbmRTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyQmxvY2tTdGFydD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0Q29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlckJsb2NrU3RhcnRTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJCb3R0b20/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBDc3NSYWRpdXM7XHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz86IENzc1JhZGl1cztcclxuICAgIGJvcmRlckJvdHRvbVN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlckJvdHRvbVdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyQ29sbGFwc2U/OiBCb3JkZXJDb2xhcHNlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckNvbG9yPzogQm9yZGVyQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2U/OiBCb3JkZXJJbWFnZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZU91dHNldD86IEJvcmRlckltYWdlT3V0c2V0X1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlUmVwZWF0PzogQm9yZGVySW1hZ2VSZXBlYXRfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VTbGljZT86IEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VTb3VyY2U/OiBCb3JkZXJJbWFnZVNvdXJjZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVdpZHRoPzogQm9yZGVySW1hZ2VXaWR0aF9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbmxpbmVFbmQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW5saW5lRW5kQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlcklubGluZUVuZFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlcklubGluZUVuZFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVySW5saW5lU3RhcnQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW5saW5lU3RhcnRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVySW5saW5lU3RhcnRTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyTGVmdD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJMZWZ0Q29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlckxlZnRTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJMZWZ0V2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJSYWRpdXM/OiBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyUmlnaHQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyUmlnaHRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyUmlnaHRTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJSaWdodFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyU3BhY2luZz86IEJvcmRlclNwYWNpbmdfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyU3R5bGU/OiBCb3JkZXJTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJUb3A/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM/OiBDc3NSYWRpdXM7XHJcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1cz86IENzc1JhZGl1cztcclxuICAgIGJvcmRlclRvcFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlclRvcFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyV2lkdGg/OiBCb3JkZXJXaWR0aF9TdHlsZVR5cGU7XHJcbiAgICBib3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBib3hTaGFkb3c/OiBCb3hTaGFkb3dfU3R5bGVUeXBlO1xyXG4gICAgYm94U2l6aW5nPzogQm94U2l6aW5nX1N0eWxlVHlwZTtcclxuICAgIGJyZWFrQWZ0ZXI/OiBCcmVha0FmdGVyX1N0eWxlVHlwZTtcclxuICAgIGJyZWFrQmVmb3JlPzogQnJlYWtCZWZvcmVfU3R5bGVUeXBlO1xyXG4gICAgYnJlYWtJbnNpZGU/OiBCcmVha0luc2lkZV9TdHlsZVR5cGU7XHJcbiAgICBidWZmZXJlZFJlbmRlcmluZz86IERlZmF1bHRTdHlsZVR5cGU7XHJcblxyXG4gICAgY2FwdGlvblNpZGU/OiBDYXB0aW9uU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBjYXJldENvbG9yPzogQ2FyZXRDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBjbGVhcj86IENsZWFyX1N0eWxlVHlwZTtcclxuICAgIGNsaXA/OiBDbGlwX1N0eWxlVHlwZTtcclxuICAgIGNsaXBQYXRoPzogQ2xpcFBhdGhfU3R5bGVUeXBlO1xyXG4gICAgY2xpcFJ1bGU/OiBDbGlwUnVsZV9TdHlsZVR5cGU7XHJcbiAgICBjb2xvcj86IENzc0NvbG9yO1xyXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uPzogQ29sb3JJbnRlcnBvbGF0aW9uX1N0eWxlVHlwZTtcclxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM/OiBDb2xvckludGVycG9sYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uQ291bnQ/OiBDb2x1bW5Db3VudF9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5GaWxsPzogQ29sdW1uRmlsbF9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5HYXA/OiBDb2x1bW5HYXBfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uUnVsZT86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5SdWxlQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGNvbHVtblJ1bGVTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBjb2x1bW5SdWxlV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBjb2x1bW5TcGFuPzogQ29sdW1uU3Bhbl9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5XaWR0aD86IENzc0xlbmd0aDtcclxuICAgIGNvbHVtbnM/OiBDb2x1bW5zX1N0eWxlVHlwZTtcclxuICAgIGNvbnRhaW4/OiBDb250YWluX1N0eWxlVHlwZTtcclxuICAgIGNvbnRlbnQ/OiBDb250ZW50X1N0eWxlVHlwZTtcclxuICAgIGNvdW50ZXJJbmNyZW1lbnQ/OiBDb3VudGVyX1N0eWxlVHlwZTtcclxuICAgIGNvdW50ZXJSZXNldD86IENvdW50ZXJfU3R5bGVUeXBlO1xyXG4gICAgY291bnRlclNldD86IENvdW50ZXJfU3R5bGVUeXBlO1xyXG4gICAgY3Vyc29yPzogQ3Vyc29yX1N0eWxlVHlwZTtcclxuXHJcbiAgICBkaXJlY3Rpb24/OiBEaXJlY3Rpb25fU3R5bGVUeXBlO1xyXG4gICAgZGlzcGxheT86IERpc3BsYXlfU3R5bGVUeXBlO1xyXG4gICAgZG9taW5hbnRCYXNlbGluZT86IERvbWluYW50QmFzZWxpbmVfU3R5bGVUeXBlO1xyXG5cclxuICAgIGVtcHR5Q2VsbHM/OiBFbXB0eUNlbGxzX1N0eWxlVHlwZTtcclxuXHJcbiAgICBmaWxsPzogQ3NzQ29sb3I7XHJcbiAgICBmaWxsT3BhY2l0eT86IENzc1BlcmNlbnQ7XHJcbiAgICBmaWxsUnVsZT86IEZpbGxSdWxlX1N0eWxlVHlwZTtcclxuICAgIGZpbHRlcj86IEZpbHRlcl9TdHlsZVR5cGU7XHJcbiAgICBmbGV4PzogRmxleF9TdHlsZVR5cGU7XHJcbiAgICBmbGV4QmFzaXM/OiBGbGV4QmFzaXNfU3R5bGVUeXBlO1xyXG4gICAgZmxleERpcmVjdGlvbj86IEZsZXhEaXJlY3Rpb25fU3R5bGVUeXBlO1xyXG4gICAgZmxleEZsb3c/OiBGbGV4Rmxvd19TdHlsZVR5cGU7XHJcbiAgICBmbGV4R3Jvdz86IENzc051bWJlcjtcclxuICAgIGZsZXhTaHJpbms/OiBDc3NOdW1iZXI7XHJcbiAgICBmbGV4V3JhcD86IEZsZXhXcmFwX1N0eWxlVHlwZTtcclxuICAgIGZsb2F0PzogRmxvYXRfU3R5bGVUeXBlO1xyXG4gICAgZmxvb2RDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgZmxvb2RPcGFjaXR5PzogQ3NzUGVyY2VudDtcclxuICAgIGZvbnQ/OiBGb250X1N0eWxlVHlwZTtcclxuICAgIGZvbnRGYW1pbHk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udEZlYXR1cmVTZXR0aW5ncz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250S2VybmluZz86IEZvbnRLZXJuaW5nX1N0eWxlVHlwZTtcclxuICAgIGZvbnRPcHRpY2FsU2l6aW5nPzogRm9udE9wdGljYWxTaXppbmdfU3R5bGVUeXBlO1xyXG4gICAgZm9udFNpemU/OiBGb250U2l6ZV9TdHlsZVR5cGU7XHJcbiAgICBmb250U2l6ZUFkanVzdD86IENzc051bWJlcjtcclxuICAgIGZvbnRTdHJldGNoPzogRm9udFN0cmV0Y2hfU3R5bGVUeXBlO1xyXG4gICAgZm9udFN0eWxlPzogRm9udFN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGZvbnRTeW50aGVzaXM/OiBGb250U3ludGhlc2lzX1N0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50Q2Fwcz86IEZvbnRWYXJpYW50Q2Fwc19TdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudEVhc3RBc2lhbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudExpZ2F0dXJlcz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudE51bWVyaWM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnRQb3NpdGlvbj86IEZvbnRWYXJpYW50UG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhdGlvblNldHRpbmdzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRXZWlnaHQ/OiBGb250V2VpZ2h0X1N0eWxlVHlwZTtcclxuXHJcbiAgICBnYXA/OiBHYXBfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBncmlkQXJlYT86IEdyaWRBcmVhX1N0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvQ29sdW1ucz86IEdyaWRBdXRvQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkQXV0b0Zsb3c/OiBHcmlkQXV0b0Zsb3dfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9Sb3dzPzogR3JpZEF1dG9BeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW4/OiBHcmlkQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uRW5kPzogR3JpZEF4aXNTaWRlX1N0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW5HYXA/OiBDb2x1bW5HYXBfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtblN0YXJ0PzogR3JpZEF4aXNTaWRlX1N0eWxlVHlwZTtcclxuICAgIGdyaWRHYXA/OiBHYXBfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvdz86IEdyaWRBeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dFbmQ/OiBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvd0dhcD86IFJvd0dhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkUm93U3RhcnQ/OiBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzPzogR3JpZFRlbXBsYXRlQXJlYXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1ucz86IEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlUm93cz86IEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlO1xyXG5cclxuICAgIGhlaWdodD86IENzc0xlbmd0aDtcclxuICAgIGh5cGhlbnM/OiBIeXBoZW5zX1N0eWxlVHlwZTtcclxuXHJcbiAgICBpbWFnZVJlbmRlcmluZz86IEltYWdlUmVuZGVyaW5nX1N0eWxlVHlwZTtcclxuICAgIGlubGluZVNpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBpc29sYXRpb24/OiBJc29sYXRpb25fU3R5bGVUeXBlO1xyXG5cclxuICAgIGp1c3RpZnlDb250ZW50PzogSnVzdGlmeUNvbnRlbnRfU3R5bGVUeXBlO1xyXG4gICAganVzdGlmeUl0ZW1zPzogSnVzdGlmeUl0ZW1zX1N0eWxlVHlwZTtcclxuICAgIGp1c3RpZnlTZWxmPzogSnVzdGlmeVNlbGZfU3R5bGVUeXBlO1xyXG5cclxuICAgIGxlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBsZXR0ZXJTcGFjaW5nPzogTGV0dGVyU3BhY2luZ19TdHlsZVR5cGU7XHJcbiAgICBsaWdodGluZ0NvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBsaW5lQnJlYWs/OiBMaW5lQnJlYWtfU3R5bGVUeXBlO1xyXG4gICAgbGluZUhlaWdodD86IExpbmVIZWlnaHRfU3R5bGVUeXBlO1xyXG4gICAgbGlzdFN0eWxlPzogTGlzdFN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZUltYWdlPzogTGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlO1xyXG4gICAgbGlzdFN0eWxlUG9zaXRpb24/OiBMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGVUeXBlPzogTGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU7XHJcblxyXG4gICAgbWFyZ2luPzogQ3NzTGVuZ3RoQm94O1xyXG4gICAgbWFyZ2luQmxvY2tFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5CbG9ja1N0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luQm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luSW5saW5lRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5MZWZ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luUmlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5Ub3A/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJrZXI/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFya2VyRW5kPzogTWFya2VyX1N0eWxlVHlwZTtcclxuICAgIG1hcmtlck1pZD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJTdGFydD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tDb21wb3NpdGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza0ltYWdlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tQb3NpdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrUmVwZWF0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tTaXplPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tUeXBlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1heEJsb2NrU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIG1heEhlaWdodD86IENzc0xlbmd0aDtcclxuICAgIG1heElubGluZVNpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXhXaWR0aD86IENzc0xlbmd0aDtcclxuICAgIG1pbkJsb2NrU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIG1pbkhlaWdodD86IENzc0xlbmd0aDtcclxuICAgIG1pbklubGluZVNpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBtaW5XaWR0aD86IENzc0xlbmd0aDtcclxuXHJcbiAgICBvYmplY3RGaXQ/OiBPYmplY3RGaXRfU3R5bGVUeXBlO1xyXG4gICAgb2JqZWN0UG9zaXRpb24/OiBDc3NQb3NpdGlvbjtcclxuICAgIG9mZnNldD86IE9mZnNldF9TdHlsZVR5cGU7XHJcbiAgICBvZmZzZXRBbmNob3I/OiBPZmZzZXRBbmNob3JfU3R5bGVUeXBlXHJcbiAgICBvZmZzZXREaXN0YW5jZT86IENzc0xlbmd0aDtcclxuICAgIG9mZnNldFBhdGg/OiBPZmZzZXRQYXRoX1N0eWxlVHlwZTtcclxuICAgIG9mZnNldFBvc2l0aW9uPzogQ3NzUG9zaXRpb247XHJcbiAgICBvZmZzZXRSb3RhdGU/OiBPZmZzZXRSb3RhdGVfU3R5bGVUeXBlO1xyXG4gICAgb3BhY2l0eT86IENzc1BlcmNlbnQ7XHJcbiAgICBvcmRlcj86IENzc051bWJlcjtcclxuICAgIG9ycGhhbnM/OiBDc3NOdW1iZXI7XHJcbiAgICBvdXRsaW5lPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIG91dGxpbmVDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgb3V0bGluZU9mZnNldD86IENzc0xlbmd0aDtcclxuICAgIG91dGxpbmVTdHlsZT86IEJvcmRlclN0eWxlX1N0eWxlVHlwZTtcclxuICAgIG91dGxpbmVXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIG92ZXJmbG93PzogT3ZlcmZsb3dfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dBbmNob3I/OiBPdmVyZmxvd0FuY2hvcl9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd0Jsb2NrPzogT3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93SW5saW5lPzogT3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93V3JhcD86IE92ZXJmbG93V3JhcF9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd1g/OiBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dZPzogT3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvcj86IE92ZXJzY3JvbGxCZWhhdmlvcl9TdHlsZVR5cGU7XHJcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3JCbG9jaz86IE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9ySW5saW5lPzogT3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3JYPzogT3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3JZPzogT3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGU7XHJcblxyXG4gICAgcGFkZGluZz86IENzc0xlbmd0aEJveDtcclxuICAgIHBhZGRpbmdCbG9ja0VuZD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdCbG9ja1N0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0JvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdJbmxpbmVFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nTGVmdD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdSaWdodD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdUb3A/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWludE9yZGVyPzogUGFpbnRPcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtBZnRlcj86IEJyZWFrQWZ0ZXJfU3R5bGVUeXBlO1xyXG4gICAgcGFnZUJyZWFrQmVmb3JlPzogQnJlYWtCZWZvcmVfU3R5bGVUeXBlO1xyXG4gICAgcGFnZUJyZWFrSW5zaWRlPzogQnJlYWtJbnNpZGVfU3R5bGVUeXBlO1xyXG4gICAgcGVyc3BlY3RpdmU/OiBQZXJzcGVjdGl2ZV9TdHlsZVR5cGU7XHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbj86IFBlcnNwZWN0aXZlT3JpZ2luX1N0eWxlVHlwZTtcclxuICAgIHBsYWNlQ29udGVudD86IFBsYWNlQ29udGVudF9TdHlsZVR5cGU7XHJcbiAgICBwbGFjZUl0ZW1zPzogUGxhY2VJdGVtc19TdHlsZVR5cGU7XHJcbiAgICBwbGFjZVNlbGY/OiBQbGFjZVNlbGZfU3R5bGVUeXBlO1xyXG4gICAgcG9pbnRlckV2ZW50cz86IFBvaW50ZXJFdmVudHNfU3R5bGVUeXBlO1xyXG4gICAgcG9zaXRpb24/OiBQb3NpdGlvbl9TdHlsZVR5cGU7XHJcblxyXG4gICAgcXVvdGVzPzogUXVvdGVzX1N0eWxlVHlwZTtcclxuXHJcbiAgICByZXNpemU/OiBSZXNpemVfU3R5bGVUeXBlO1xyXG4gICAgcmlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICByb3RhdGU/OiBSb3RhdGVfU3R5bGVUeXBlO1xyXG4gICAgcm93R2FwPzogUm93R2FwX1N0eWxlVHlwZTtcclxuICAgIHJ1YnlBbGlnbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBydWJ5T3Zlcmhhbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgcnVieVBvc2l0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuXHJcbiAgICBzY2FsZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxiYXJDb2xvcj86IFNjcm9sbGJhckNvbG9yX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbGJhcldpZHRoPzogU2Nyb2xsYmFyV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsQmVoYXZpb3I/OiBTY3JvbGxCZWhhdmlvcl9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxNYXJnaW4/OiBDc3NMZW5ndGhCb3g7XHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jaz86IENzc0xlbmd0aFBhaXI7XHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja0VuZD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5Cb3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmU/OiBDc3NMZW5ndGhQYWlyO1xyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5MZWZ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5Ub3A/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nPzogQ3NzTGVuZ3RoQm94O1xyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrPzogQ3NzTGVuZ3RoUGFpcjtcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja0VuZD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0JvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmU/OiBDc3NMZW5ndGhQYWlyO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZUVuZD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ1JpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ1RvcD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFNuYXBBbGlnbj86IFNjcm9sbFNuYXBBbGlnbl9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxTbmFwU3RvcD86IFNjcm9sbFNuYXBTdG9wX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbFNuYXBUeXBlPzogU2Nyb2xsU25hcFR5cGVfU3R5bGVUeXBlO1xyXG4gICAgc2hhcGVJbWFnZVRocmVzaG9sZD86IENzc051bWJlcjtcclxuICAgIHNoYXBlTWFyZ2luPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2hhcGVPdXRzaWRlPzogU2hhcGVPdXRzaWRlX1N0eWxlVHlwZTtcclxuICAgIHNoYXBlUmVuZGVyaW5nPzogU2hhcGVSZW5kZXJpbmdfU3R5bGVUeXBlO1xyXG4gICAgc3RvcENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBzdG9wT3BhY2l0eT86IENzc051bWJlcjtcclxuICAgIHN0cm9rZT86IENzc0NvbG9yO1xyXG4gICAgc3Ryb2tlRGFzaGFycmF5PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZURhc2hvZmZzZXQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlTGluZWNhcD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VMaW5lam9pbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VNaXRlcmxpbWl0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZU9wYWNpdHk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlV2lkdGg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG5cclxuICAgIHRhYlNpemU/OiBDc3NMZW5ndGg7XHJcbiAgICB0YWJsZUxheW91dD86IFRhYmxlTGF5b3V0X1N0eWxlVHlwZTtcclxuICAgIHRleHRBbGlnbj86IFRleHRBbGlnbl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0QWxpZ25MYXN0PzogVGV4dEFsaWduTGFzdF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0QW5jaG9yPzogVGV4dEFuY2hvcl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0Q29tYmluZVVwcmlnaHQ/OiBUZXh0Q29tYmluZVVwcmlnaHRfU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb24/OiBUZXh0RGVjb3JhdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU/OiBUZXh0RGVjb3JhdGlvbkxpbmVfU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25Ta2lwSW5rPzogVGV4dERlY29yYXRpb25Ta2lwSW5rX1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uU3R5bGU/OiBUZXh0RGVjb3JhdGlvblN0eWxlX1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzPzogVGV4dERlY29yYXRpb25UaGlja25lc3NfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEVtcGhhc2lzPzogVGV4dEVtcGhhc2lzX1N0eWxlVHlwZTtcclxuICAgIHRleHRFbXBoYXNpc0NvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICB0ZXh0RW1waGFzaXNQb3NpdGlvbj86IFRleHRFbXBoYXNpc1Bvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRleHRFbXBoYXNpc1N0eWxlPzogVGV4dEVtcGhhc2lzU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEluZGVudD86IFRleHRJbmRlbnRfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEp1c3RpZnk/OiBUZXh0SnVzdGlmeV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0S2FzaGlkYT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICB0ZXh0S2FzaGlkYVNwYWNlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHRleHRPcmllbnRhdGlvbj86IFRleHRPcmllbnRhdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0T3ZlcmZsb3c/OiBUZXh0T3ZlcmZsb3dfU3R5bGVUeXBlO1xyXG4gICAgdGV4dFNoYWRvdz86IFRleHRTaGFkb3dfU3R5bGVUeXBlO1xyXG4gICAgdGV4dFNpemVBZGp1c3Q/OiBUZXh0U2l6ZUFkanVzdF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0VHJhbnNmb3JtPzogVGV4dFRyYW5zZm9ybV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0VW5kZXJsaW5lUG9zaXRpb24/OiBUZXh0VW5kZXJsaW5lUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgdG91Y2hBY3Rpb24/OiBUb3VjaEFjdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2Zvcm0/OiBUcmFuc2Zvcm1fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNmb3JtQm94PzogVHJhbnNmb3JtQm94X1N0eWxlVHlwZTtcclxuICAgIHRyYW5zZm9ybU9yaWdpbj86IFRyYW5zZm9ybU9yaWdpbl9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2Zvcm1TdHlsZT86IFRyYW5zZm9ybVN0eWxlX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zaXRpb24/OiBUcmFuc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zaXRpb25EZWxheT86IE9uZU9yTWFueTxDc3NUaW1lPjtcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbj86IE9uZU9yTWFueTxDc3NUaW1lPjtcclxuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eT86IFRyYW5zaXRpb25Qcm9wZXJ0eV9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24/OiBUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb25fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNsYXRlPzogVHJhbnNsYXRlX1N0eWxlVHlwZTtcclxuXHJcbiAgICB1bmljb2RlQmlkaT86IFVuaWNvZGVCaWRpX1N0eWxlVHlwZTtcclxuICAgIHVzZXJTZWxlY3Q/OiBVc2VyU2VsZWN0X1N0eWxlVHlwZTtcclxuXHJcbiAgICB2ZXJ0aWNhbEFsaWduPzogVmVydGljYWxBbGlnbl9TdHlsZVR5cGU7XHJcbiAgICB2aXNpYmlsaXR5PzogVmlzaWJpbGl0eV9TdHlsZVR5cGU7XHJcbiAgICB2ZWN0b3JFZmZlY3Q/OiBWZWN0b3JFZmZlY3RfU3R5bGVUeXBlO1xyXG5cclxuICAgIHdoaXRlU3BhY2U/OiBXaGl0ZVNwYWNlX1N0eWxlVHlwZTtcclxuICAgIHdpZG93cz86IENzc051bWJlcjtcclxuICAgIHdpZHRoPzogQ3NzTGVuZ3RoO1xyXG4gICAgd2lsbENoYW5nZT86IFdpbGxDaGFuZ2VfU3R5bGVUeXBlO1xyXG4gICAgd29yZEJyZWFrPzogV29yZEJyZWFrX1N0eWxlVHlwZTtcclxuICAgIHdvcmRTcGFjaW5nPzogV29yZFNwYWNpbmdfU3R5bGVUeXBlO1xyXG4gICAgd3JpdGluZ01vZGU/OiBXcml0aW5nTW9kZV9TdHlsZVR5cGU7XHJcblxyXG4gICAgekluZGV4PzogWkluZGV4X1N0eWxlVHlwZTtcclxuICAgIHpvb20/OiBab29tX1N0eWxlVHlwZTtcclxuXHJcbiAgICAvLyB3ZWJraXRCb3JkZXJJbWFnZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRCb3hEaXJlY3Rpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Qm94T3JpZW50PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkJyZWFrQWZ0ZXI/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uQnJlYWtCZWZvcmU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uQnJlYWtJbnNpZGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uQ291bnQ/OiBDb2x1bW5Db3VudFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkdhcD86IFNpbmdsZUdhcFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtblJ1bGU/OiBDb2x1bW5SdWxlU3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uUnVsZUNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5SdWxlU3R5bGU/OiBDb2x1bW5SdWxlU3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uUnVsZVdpZHRoPzogQm9yZGVyTGVuZ3RoU3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uU3Bhbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5XaWR0aD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5zPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdExpbmVDbGFtcD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRUYXBIaWdobGlnaHRDb2xvcj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRVc2VyTW9kaWZ5PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdFVzZXJTZWxlY3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0V3JpdGluZ01vZGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG5cclxuICAgIC8vIG1zQ29udGVudFpvb21DaGFpbmluZz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tTGltaXQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbUxpbWl0TWF4PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21MaW1pdE1pbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tU25hcD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tU25hcFBvaW50cz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tU25hcFR5cGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbWluZz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0Zsb3dGcm9tPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zRmxvd0ludG8/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNGb250RmVhdHVyZVNldHRpbmdzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZENvbHVtbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRDb2x1bW5BbGlnbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRDb2x1bW5TcGFuPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZENvbHVtbnM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkUm93PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZFJvd0FsaWduPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZFJvd1NwYW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkUm93cz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0hpZ2hDb250cmFzdEFkanVzdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0h5cGhlbmF0ZUxpbWl0Q2hhcnM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIeXBoZW5hdGVMaW1pdExpbmVzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSHlwaGVuYXRlTGltaXRab25lPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSHlwaGVucz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0ltZUFsaWduPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zT3ZlcmZsb3dTdHlsZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbENoYWluaW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxMaW1pdFhNYXg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxMaW1pdFhNaW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxMaW1pdFlNYXg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxMaW1pdFlNaW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxSYWlscz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBQb2ludHNYPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFBvaW50c1k/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwVHlwZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBYPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxUcmFuc2xhdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1RleHRDb21iaW5lSG9yaXpvbnRhbD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1RleHRTaXplQWRqdXN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVG91Y2hBY3Rpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNUb3VjaFNlbGVjdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1VzZXJTZWxlY3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNXcmFwRmxvdz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1dyYXBNYXJnaW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNXcmFwVGhyb3VnaD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHJpbmdTdHlsZXNldCB0eXBlIG1hcHMgQ1NTIHByb3BlcnRpZXMgaW5jbHVkaW5nIGN1c3RvbSBwcm9wZXJ0aWVzIHRvIHRoZSBzdHJpbmcgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3RyaW5nU3R5bGVzZXQgPSB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFeHRlbmRlZFN0eWxlc2V0IHR5cGUgbWFwcyBhbGwgQ1NTIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgW1tJQ3NzU3R5bGVzZXRdXSBpbnRlcmZhY2UgdG8gdGhlXHJcbiAqIFwiZXh0ZW5kZWRcIiB2ZXJzaW9ucyBvZiB0aGVpciB0eXBlcy4gVGhlc2UgZXh0ZW5kZWQgdHlwZXMgYXJlIGRlZmluZWQgYnkgYWRkaW5nIGJhc2ljIGtleXdvcmRzXHJcbiAqIChlLmcuIFwidW5zZXRcIiwgXCJpbml0aWFsXCIsIGV0Yy4pIGFzIHdlbGwgYXMgW1tTdHJpbmdQcm94eV1dIGFuZCBbW0lDdXN0b21WYXJdXSB0byB0aGUgdHlwZSB0aGF0XHJcbiAqIGlzIGRlZmluZWQgaW4gdGhlIElDc3NTdHlsZXNldCBpbnRlcmZhY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFN0eWxlc2V0ID0geyBbSyBpbiBrZXlvZiBJQ3NzU3R5bGVzZXRdPzogRXh0ZW5kZWRQcm9wPElDc3NTdHlsZXNldFtLXT4gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDc3NWYXJUZW1wbGF0ZXMgaW50ZXJmYWNlIG1hcHMgdGVtcGxhdGUgbmFtZXMgdG8gdGhlIHR5cGVzLCB3aGljaCBjYW4gYmUgdXNlZCBmb3JcclxuICogZGVmaW5pbmcgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIChhLmsuYS4gdmFyaWFibGVzKS4gTm9ybWFsbHksIHZhcmlhYmxlcyBhcmUgZGVmaW5lZCB1c2luZyB0aGVcclxuICogbmFtZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgYW5kIHRoZWlyIHR5cGUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgdHlwZSBvZiB0aGlzIHByb3BlcnR5IGluIHRoZVxyXG4gKiBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLiBTb21ldGltZXMsIGhvd2V2ZXIsIHRoZXJlIGlzIGEgbmVlZCB0byBkZWZpbmUgdmFyaWFibGVzIG9mIHNvbWUgb3RoZXJcclxuICogdHlwZXMsIGZvciB3aGljaCB0aGVyZSBpcyBubyBzdWl0YWJsZSBzdHlsZSBwcm9wZXJ0eS4gVGhlIElDc3NWYXJUZW1wbGF0ZXMgaW50ZXJmYWNlIHByb3ZpZGVzXHJcbiAqIG1hbnkgYmFzaWMgdHlwZXMgYW5kIGl0IGNhbiBhbHNvIGJlIGV4dGVuZGVkIHVzaW5nIHRoZSBUeXBlU2NyaXB0J3MgbW9kdWxlIGF1Z21lbnRhdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1ZhclRlbXBsYXRlcyBleHRlbmRzIElDc3NTdHlsZXNldFxyXG57XHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IHZhbHVlIG9mIGFueSB0eXBlICovXHJcbiAgICBcImFueVwiPzogYW55O1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBzdHJpbmcgdmFsdWUgKi9cclxuICAgIENzc1N0cmluZz86IHN0cmluZztcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxudW1iZXI+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc051bWJlcj86IENzc051bWJlcjtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxsZW5ndGg+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc0xlbmd0aD86IENzc0xlbmd0aDtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGFuIGA8YW5nbGU+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc0FuZ2xlPzogQ3NzQW5nbGU7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8dGltZT5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzVGltZT86IENzc1RpbWU7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8cmVzb2x1dGlvbj5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzUmVzb2x1dGlvbj86IENzc1Jlc29sdXRpb247XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8ZnJlcXVlbmN5PmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NGcmVxdWVuY3k/OiBDc3NGcmVxdWVuY3k7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8cGVyY2VudD5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzUGVyY2VudD86IENzc1BlcmNlbnQ7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIFBvaW50IHZhbHVlICovXHJcbiAgICBDc3NQb2ludD86IENzc1BvaW50O1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPHBvc2l0aW9uPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NQb3NpdGlvbj86IENzc1Bvc2l0aW9uO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgUmFkaXVzYCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1JhZGl1cz86IENzc1JhZGl1cztcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxjb2xvcj5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzQ29sb3I/OiBDc3NDb2xvcjtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGFuIGA8aW1hZ2U+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc0ltYWdlPzogQ3NzSW1hZ2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJUZW1wbGF0ZU5hbWUgdHlwZSBkZWZpbmVzIHRoZSBrZXlzIChzdHJpbmdzKSB0aGF0IGNhbiBiZSB1c2VkIGFzIHRlbXBsYXRlcyBmb3IgZGVmaW5pbmdcclxuICogY3VzdG9tIENTUyBwcm9wZXJ0aWVzIHVzaW5nIHRoZSBbWyR2YXJdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFZhclRlbXBsYXRlTmFtZSA9IGtleW9mIElDc3NWYXJUZW1wbGF0ZXM7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyVGVtcGxhdGVzIHR5cGUgbWFwcyBhbGwgdGVtcGxhdGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBbW0lDc3NWYXJUZW1wbGF0ZXNdXVxyXG4gKiBpbnRlcmZhY2UgdG8gdGhlIFwiZXh0ZW5kZWRcIiB2ZXJzaW9ucyBvZiB0aGVpciB0eXBlcy4gVGhlc2UgZXh0ZW5kZWQgdHlwZXMgYXJlIGRlZmluZWQgdXNpbmdcclxuICogdGhlIFtbRXh0ZW5kZWRdXSBnZW5lcmljIHR5cGUsIHdoaWNoIGFkZHMgYmFzaWMga2V5d29yZHMgKGUuZy4gXCJ1bnNldFwiLCBcImluaXRpYWxcIiwgZXRjLikgYXNcclxuICogd2VsbCBhcyBbW1N0cmluZ1Byb3h5XV0gYW5kIFtbSUN1c3RvbVZhcl1dIHRvIHRoZSB0eXBlIHRoYXQgaXMgZGVmaW5lZCBpbiB0aGUgSUNzc1ZhclRlbXBsYXRlc1xyXG4gKiBpbnRlcmZhY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYXJUZW1wbGF0ZXMgPSB7IFtLIGluIFZhclRlbXBsYXRlTmFtZV06IEV4dGVuZGVkUHJvcDxJQ3NzVmFyVGVtcGxhdGVzW0tdPiB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyVmFsdWVUeXBlIGdlbmVyaWMgdHlwZSBkZWZpbmVzIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgY3VzdG9tXHJcbiAqIENTUyBwcm9wZXJ0eSB1c2luZyB0aGUgZ2VuZXJpYyB0eXBlIEsgYXMgaXRzIHRlbXBsYXRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVmFyVmFsdWVUeXBlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+ID0gVmFyVGVtcGxhdGVzW0tdO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEN1c3RvbVZhclN0eWxlVHlwZSB0eXBlIHJlcHJlc2VudHMgYSBjdXN0b20gQ1NTIHByb3BlcnR5IG5hbWUgYW5kIHZhbHVlIHRoYXQgYXJlIHVzZWQgdG9cclxuICogZGVmaW5lIGN1c3RvbSBwcm9wZXJ0aWVzIGluIGEgU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGlzIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcclxuICogYC0tYCBwcm9wZXJ0eSBvZiB0aGUgU3R5bGVzZXQgdHlwZS5cclxuICogXHJcbiAqIEN1c3RvbVZhclN0eWxlVHlwZSBvYmplY3RzIHNob3VsZCBiZSBtb3N0bHkgdXNlZCB0byBvdmVycmlkZSBjdXN0b20gcHJvcGVydGllcyB0aGF0IGhhdmVcclxuICogcHJldmlvdXNseSBiZWVuIGRlZmluZWQgYXQgdGhlIHRvcC1sZXZlbCB1c2luZyB0aGUgJHZhciBmdW5jdGlvbi4gVGhhdCB3YXkgeW91IGNhbiBoYXZlIGFcclxuICogXCJnbG9iYWxcIiB2YWx1ZSBvZiBhIGN1c3RvbSBwcm9wZXJ0eSBhbmQgYXNzaWduIGEgZGlmZmVyZW50IHZhbHVlIHRvIGl0IHVuZGVyIGEgY2VydGFpbiBDU1NcclxuICogc2VsZWN0b3IuXHJcbiAqIFxyXG4gKiBUaGUgdmFsdWVzIG9mIHRoZSB0eXBlIGNhbiBiZSBzcGVjaWZpZWQgYXMgZWl0aGVyIGEgdHdvLWl0ZW0gb3IgYSB0aHJlZS1pdGVtIGFycmF5LiBUaGVcclxuICogdHdvLWl0ZW0gYXJyYXkgaXMgdXNlZCB3aXRoIGEgcHJldmlvdXNseSBkZWZpbmVkIGN1c3RvbSBDU1MgcHJvcGVydHkgcmVwcmVzZW50ZWQgYnkgYW4gSVZhclJ1bGVcclxuICogb2JqZWN0OlxyXG4gKiAtIFRoZSBmaXJzdCBpdGVtIGlzIHRoZSBJVmFyUnVsZSBvYmplY3QuXHJcbiAqIC0gVGhlIHNlY29uZCBpdGVtIGlzIHRoZSB2YWx1ZVxyXG4gKiBcclxuICogVGhlIHRocmVlLWl0ZW0gYXJyYXkgYWxsb3dzIGRpcmVjdGx5IHNwZWNpZnlpbmcgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkgbmFtZTpcclxuICogLSBUaGUgZmlyc3QgaXRlbSBpcyBhIHN0cmluZyAtIHRoZSBuYW1lIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LiBJZiB0aGUgbmFtZSBpcyBub3QgcHJlZml4ZWRcclxuICogd2l0aCB0d28gZGFzaGVzIHRoZXkgd2lsbCBiZSBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gKiAtIFRoZSBzZWNvbmQgaXRlbSBpcyB0aGUgbmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGVcclxuICogY3VzdG9tIHByb3BlcnR5IHZhbHVlLlxyXG4gKiAtIFRoZSB0aGlyZCBpdGVtIGlzIHRoZSB2YWx1ZVxyXG4gKiBcclxuICogVXNlIHRoZSBDdXN0b21WYXJTdHlsZVR5cGUgdHlwZSBpbiB0aGUgZm9sbG93aW5nIG1hbm5lcjpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXMgZXh0ZW5kcyBTdHlsZURlZmluaXRpb25cclxuICoge1xyXG4gKiAgICAgLy8gZGVmaW5lIGdsb2JhbCBjdXN0b20gQ1NTIHByb3BlcnR5IGFuZCByZS1kZWZpbmUgaXRzIHZhbHVlIHVuZGVyIFwiYnJvd25cIiBjbGFzcy5cclxuICogICAgIG1haW5Db2xvciA9ICR2YXIoIFwiY29sb3JcIiwgXCJibGFja1wiKTtcclxuICogICAgIGJyb3duID0gJGNsYXNzKHsgXCItLVwiOiBbIFt0aGlzLm1haW5Db2xvciwgXCJicm93blwiXSBdIH0pXHJcblxyXG4gKiAgICAgLy8gZGlyZWN0bHkgZGVmaW5lIGN1c3RvbSBDU1MgcHJvcGVydHkgdW5kZXIgXCJibHVlXCIgY2xhc3MuXHJcbiAqICAgICBibHVlID0gJGNsYXNzKHsgXCItLVwiOiBbIFtcImRpZmZlcmVudC1jb2xvclwiLCBcImNvbG9yXCIsIFwiYmx1ZVwiXSBdIH0pXHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byB0aGUgZm9sbG93aW5nIENTUzpcclxuICogXHJcbiAqIGBgYGNzc1xyXG4gKiA6cm9vdCB7IC0tTXlTdHlsZXNfbWFpbkNvbG9yOiBcImJsYWNrXCI7IH1cclxuICogLmJyb3duIHsgLS1NeVN0eWxlc19tYWluQ29sb3I6IFwiYnJvd25cIjsgfVxyXG4gKiAuYmx1ZSB7IC0tZGlmZmVyZW50LW9sb3I6IFwiYmx1ZVwiOyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3VzdG9tVmFyX1N0eWxlVHlwZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiA9IFxyXG4gICAgW0lWYXJSdWxlPEs+LCBWYXJWYWx1ZVR5cGU8Sz5dIHwgW3N0cmluZywgSywgVmFyVmFsdWVUeXBlPEs+XVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYSBjb2xsZWN0aW9uIG9mIHN0eWxlIHByb3BlcnRpZXMgYW5kIHRoZWlyIHZhbHVlcy4gSW4gYWRkaXRpb24gdG8gdGhlXHJcbiAqIHByb3BlcnRpZXMgcmVwcmVzZW50aW5nIHRoZSBzdGFuZGFyZCBDU1Mgc3R5bGVzLCB0aGlzIHR5cGUgYWxzbyBpbmNsdWRlcyB0aGUgXCItLVwiIHByb3BlcnR5LFxyXG4gKiB3aGljaCBpcyBhbiBhcnJheSBvZiBDdXN0b21WYXJTdHlsZVR5cGUgb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN0eWxlc2V0ID0gRXh0ZW5kZWRTdHlsZXNldCAmXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3BlY2lhbCBwcm9wZXJ0eSBcIi0tXCIgc3BlY2lmaWVzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgQ3VzdG9tVmFyU3R5bGVUeXBlIG9iamVjdHMgZWFjaFxyXG4gICAgICAgICAqIHJlcHJlc2VudGluZyBhIGRlZmluaXRpb24gb2YgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFwiLS1cIj86IEN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdXBwb3J0cyBxdWVyeSB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYSBzaW5nbGUgc2V0IG9mIHN0eWxlcyBhcyBwYXJ0IG9mIHRoZSBAc3VwcG9ydHMgcnVsZXMuIFRoZSBzdHlsZXMgaW4gdGhlXHJcbiAqIHN0eWxlc2V0IGFyZSBjb21iaW5lZCB3aXRoIHRoZSBcImFuZFwiIG9wZXJhdG9yLiBUaGUgZW50aXJlIHN0eWxlc2V0IGNhbiBiZSBuZWdhdGVkLCB3aGljaCB3aWxsXHJcbiAqIHJlc3VsdCBpbiBwbGFjaW5nIHRoZSBcIm5vdFwiIG9wZXJhdG9yIHRoYXQgd2lsbCBhY3Qgb24gYWxsIHN0eWxlcyBpbiB0aGUgcXVlcnkuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgdXNpbmcgUHVyZVN0eWxlc2V0IG9iamVjdCBkb2Vzbid0IGFsbG93IGZvciBjaGVja2luZyB3aGV0aGVyIHR3byBvciBtb3JlIHZhbHVlcyBvZlxyXG4gKiBhIGdpdmVuIHByb3BlcnR5IGFyZSBzdXBwb3J0ZWQuIEZvciBleGFtcGxlLCBhbHRob3VnaCB3ZSBjYW4gdGVzdCB0aGF0IHRoZSBcImRpc3BsYXlcIiBwcm9wZXJ0eVxyXG4gKiBzdXBwb3J0cyB0aGUgXCJmbGV4XCIgdmFsdWUsIHdlIGNhbm5vdCBjaGVjayB3aGV0aGVyIGJvdGggXCJmbGV4XCIgYW5kIFwiZ3JpZFwiIHZhbHVlcyBhcmUgc3VwcG9ydGVkLlxyXG4gKiBUbyBjaGVjayBzdWNoIGNyaXRlcmlhIHlvdSBtdXN0IHNwZWNpZnkgdGhlIHF1ZXJ5IGFzIGEgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlU3VwcG9ydHNRdWVyeSA9IHN0cmluZyB8IEV4dGVuZGVkU3R5bGVzZXQgJiB7ICRuZWdhdGU/OiBib29sZWFuOyB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgb25lIG9yIG1vcmUgcXVlcmllcyBhcyBwYXJ0IG9mIHRoZSBAc3VwcG9ydHMgcnVsZS4gV2hpbGUgbXVsdGlwbGUgcXVlcmllcyBpblxyXG4gKiBhbiBhcnJheSBhcmUgY29tYmluZWQgd2l0aCB0aGUgXCJvclwiIG9wZXJhdG9yLCB0aGUgc3R5bGVzIHdpdGhpbiBlYWNoIHN0eWxlc2V0IGFyZSBjb21iaW5lZCB3aXRoXHJcbiAqIHRoZSBcImFuZFwiIG9wZXJhdG9yLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3VwcG9ydHNRdWVyeSA9IFNpbmdsZVN1cHBvcnRzUXVlcnkgfCBTaW5nbGVTdXBwb3J0c1F1ZXJ5W107XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBFeHRlbmRlZCwgSUdlbmVyaWNQcm94eSwgQ3NzTnVtYmVyLCBDc3NNdWx0aU51bWJlciwgSU51bWJlckJhc2VNYXRoLFxyXG4gICAgQ3NzUG9zaXRpb24sIE11bHRpQ3NzUG9zaXRpb24sIE51bWJlckJhc2UsIE11bHRpTnVtYmVyQmFzZSxcclxuICAgIENzc0xlbmd0aCwgQ3NzTXVsdGlMZW5ndGgsIENzc0FuZ2xlLCBDc3NNdWx0aUFuZ2xlLCBDc3NUaW1lLCBDc3NNdWx0aVRpbWUsXHJcbiAgICBDc3NSZXNvbHV0aW9uLCBDc3NNdWx0aVJlc29sdXRpb24sIENzc0ZyZXF1ZW5jeSwgQ3NzTXVsdGlGcmVxdWVuY3ksXHJcbiAgICBDc3NQZXJjZW50LCBDc3NNdWx0aVBlcmNlbnQsIElDc3NMZW5ndGhNYXRoLFxyXG4gICAgSUNzc0FuZ2xlTWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLCBJQ3NzVGltZU1hdGgsXHJcbiAgICBOdW1iZXJUeXBlLCBMZW5ndGhUeXBlLCBQZXJjZW50VHlwZSwgQW5nbGVUeXBlLCBUaW1lVHlwZSwgUmVzb2x1dGlvblR5cGUsIEZyZXF1ZW5jeVR5cGVcclxufSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBkYXNoZS1jYXNlIHRvIGNhbWVsQ2FzZSwgZS5nLiBmb250LXNpemUgdG8gZm9udFNpemUuXHJcbiAqIEBwYXJhbSBkYXNoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdHJldHVybiBkYXNoLnJlcGxhY2UoIC8tKFthLXpBLVpdKS9nLCAoeCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjYW1lbENhc2UgdG8gZGFzaC1jYXNlLCBlLmcuIGZvbnRTaXplIHRvIGZvbnQtc2l6ZS5cclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYWx1ZUNvbnZlcnRPcHRpb25zIGludGVyZmFjZSBkZWZpbmVzIG9wdGlvbmFsIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnR2YWx1ZXMgb2YgZGlmZmVybnRcclxuICogdHlwZXMgdG8gc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlQ29udmVydE9wdGlvbnNcclxue1xyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICBmcm9tTnVsbD86ICggdmFsOiBudWxsIHwgdW5kZWZpbmVkKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgc3RyaW5nLiBUaGlzIGFsbG93cyB0cmFuc2Zvcm1pbmcgb25lIHN0cmluZyB0byBhbm90aGVyLlxyXG4gICAgZnJvbVN0cmluZz86ICggdmFsOiBzdHJpbmcpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBib29sZWFuXHJcbiAgICBmcm9tQm9vbD86ICh2YWw6IGJvb2xlYW4pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBudW1iZXJcclxuICAgIGZyb21OdW1iZXI/OiAodmFsOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gYXJyYXlcclxuICAgIGZyb21BcnJheT86ICh2YWw6IGFueVtdKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgZnJvbU9iaj86ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB0eXBlLXNwZWNpZmljIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkXHJcbiAgICBmcm9tQW55PzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIHRvIGNvbnZlcnQgYXJyYXkgaXRlbXMgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJJdGVtRnVuYz86ICh2OiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBTZXBhcmF0b3IgZm9yIGFycmF5IGl0ZW1zIC0gdXNlZCBvbmx5IGlmIGZyb21BcnJheSBpcyBub3QgZGVmaW5lZFxyXG4gICAgYXJyU2VwPzogc3RyaW5nO1xyXG5cclxuICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZXNlIGFyZSBhcmd1bWVudHMgdG8gcGFzcyB3aGVuIGludm9raW5nIGl0XHJcbiAgICBmdW5jQXJncz86IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIG9mIGFuIGFyYml0cmFyeSB0eXBlIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhlIG9wdGlvbmFsIG9wdGlvbnMgcGFyYW1ldGVyXHJcbiAqIGNhbiBkZWZpbmUgaG93IHNwZWNpZmljIHR5cGVzIGFyZSBjb252ZXJ0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsMnN0ciggdmFsOiBhbnksIG9wdGlvbnM/OiBJVmFsdWVDb252ZXJ0T3B0aW9ucyk6IHN0cmluZ1xyXG57XHJcbiAgIGlmICghb3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICAvLyBzdGFuZGFyZCBwcm9jZXNzaW5nOlxyXG4gICAgICAgIC8vIC0gbnVsbC91bmRlZmluZWQgYmVjb21lIGVtcHR5IHN0cmluZy5cclxuICAgICAgICAvLyAtIGNhbGwgdmFsdWVUb1N0cmluZyAocHJveHkgb2JqZWN0cykgaWYgZXhpc3QuXHJcbiAgICAgICAgLy8gLSBmdW5jdGlvbjogY2FsbCB3aXRob3V0IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgLy8gLSBldmVyeXRoaW5nIGVsc2U6IGNhbGwgdG9TdHJpbmcoKS5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdmFsKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvY2Vzc2luZyB3aXRoIG9wdGlvbnMuIEZvciBhbGwgdHlwZXMgZXhjZXB0IG51bGwgYW5kIHN0cmluZywgaWYgdGhlIHR5cGUtc3BlY2lmaWNcclxuICAgICAgICAvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgY2FsbCBmcm9tQW55IGlmIGRlZmluZWQuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVsbCA/IG9wdGlvbnMuZnJvbU51bGwoIHZhbCkgOiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21TdHJpbmcgPyBvcHRpb25zLmZyb21TdHJpbmcoIHZhbCkgOiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bWJlciA/IG9wdGlvbnMuZnJvbU51bWJlciggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDJzdHIoIG9wdGlvbnMuZnVuY0FyZ3MgPyB2YWwoIC4uLm9wdGlvbnMuZnVuY0FyZ3MpIDogdmFsKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZyb21BcnJheSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BcnJheSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gb3B0aW9ucy5hcnJTZXAgIT0gbnVsbCA/IG9wdGlvbnMuYXJyU2VwIDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdmFsLCBvcHRpb25zLmFyckl0ZW1GdW5jIHx8IG9wdGlvbnMuZnJvbUFueSB8fCB1bmRlZmluZWQsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21PYmopXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tT2JqKCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQm9vbCA/IG9wdGlvbnMuZnJvbUJvb2woIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIGFycmF5IG9mIHRoZSBnaXZlbiB0eXBldG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEVsZW1lbnRzIG9mIHRoZSBhcnJheSBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycjJzdHIoIHZhbDogYW55W10sIGZ1bmM/OiAodikgPT4gc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAhdmFsIHx8IHZhbC5sZW5ndGggPT09IDBcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IHZhbC5maWx0ZXIoIHggPT4geCAhPSBudWxsKS5tYXAoIHkgPT4gZnVuYyA/IGZ1bmMoeSkgOiB2YWwyc3RyKCB5KSkuam9pbiggc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nIGlzIGEgdGFnIGZ1bmN0aW9uIGhlbHBlciB0aGF0IGNvbnZlcnRzIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aFxyXG4gKiBwYXJhbWV0ZXJzIHRvIGEgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBjb252ZXJ0IHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBwYXJhbXM6IGFueVtdLFxyXG4gICAgY29udmVydEZ1bmM/OiAoIHY6IGFueSkgPT4gc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIC8vIG51bWJlciBvZiBwYXJhbWV0ZXJzIGlzIGFsd2F5cyAxIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHN0cmluZyBwYXJ0c1xyXG4gICAgbGV0IHBhcmFtc0xlbiA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBpZiAocGFyYW1zTGVuID09PSAwKVxyXG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHBhcmFtc0xlbjsgaSsrKVxyXG4gICAgICAgIHMgKz0gcGFydHNbaV0gKyAoY29udmVydEZ1bmMgPyBjb252ZXJ0RnVuYyggcGFyYW1zW2ldKSA6IHZhbDJzdHIoIHBhcmFtc1tpXSkpO1xyXG5cclxuICAgIC8vIGFkZCB0aGUgbGFzdCBwYXJ0XHJcbiAgICByZXR1cm4gcyArIHBhcnRzW3BhcmFtc0xlbl07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWJlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIG9mIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnQgYSBudW1iZXIgdG8gYSBzdHJpbmcgKi9cclxudHlwZSBDb252ZXJ0TnVtYmVyRnVuY1R5cGUgPSAobjogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHNpbmdsZSBudW1lcmljIHZhbHVlIHRvIGEgQ1NTIHN0cmluZyBvcHRpb25hbGx5IGFwcGVuZGluZyB1bml0cyB0aGF0IGNhbiBiZSBkaWZmZXJlbnRcclxuICogZm9yIGludGVnZXIgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMuXHJcbiAqIEBwYXJhbSBuIE51bWJlciB0byBjb252ZXJ0IHRvIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICogQHBhcmFtIGludFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgaW50ZWdlci5cclxuICogQHBhcmFtIGZsb2F0VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBmbG9hdGluZyBwb2ludC5cclxuICovXHJcbmZ1bmN0aW9uIG51bWJlclRvU3RyaW5nKCBuOiBudW1iZXIsIGludFVuaXQ6IHN0cmluZyA9IFwiXCIsIGZsb2F0VWludDogc3RyaW5nID0gXCJcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgaW50VW5pdCA6IG4gKyBmbG9hdFVpbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aW1lIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE51bWJlciBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGUuXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgbnVtYmVyIHRvIGEgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gbnVtYmVyQmFzZVRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuY30pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIENzc051bWJlciBvciBhcnJheSBvZiBDc3NOdW1iZXIgb2JqZWN0cyB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUtIG9yIG11bHRpLW51bWJlciBzdHlsZSB2YWx1ZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzZXBhcmF0b3IgU3RyaW5nIHRvIHVzZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBtdWx0aVN0eWxlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+PixcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuYyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogdiA9PiBudW1iZXJCYXNlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSxcclxuICAgICAgICBhcnJTZXA6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYXRoRnVuYyBmdW5jdGlvbiByZXR1cm5zIG9uZSBvZiB0aGUgbWF0aGVtYXRpYyBDU1MgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBvciBtb3JlXHJcbiAqIHBhcmFtZXRlcnMgd2hvc2UgdHlwZSBpcyBkZXJpdmVkIGZyb20gTnVtYmVyQmFzZTxUPi5cclxuICovXHJcbmZ1bmN0aW9uIG1hdGhGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBuYW1lOiBzdHJpbmcsIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgJHtuYW1lfSgke211bHRpU3R5bGVUb1N0cmluZyggcGFyYW1zLCBjb252ZXJ0RnVuYywgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgY2FsY0Z1bmMgZnVuY3Rpb24gcmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjYWxjKCkgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY0Z1bmM8VCBleHRlbmRzIHN0cmluZz4oIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBjYWxjKCR7dGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcywgKHY6IGFueSkgPT4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2LCBjb252ZXJ0RnVuYykpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtbWJlckJhc2VNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleVxyXG4gKiBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgYnkgY2FsbGluZyBhIGZ1bmN0aW9uIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJCYXNlTWF0aDxUIGV4dGVuZHMgc3RyaW5nPiBpbXBsZW1lbnRzIElOdW1iZXJCYXNlTWF0aDxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggcHJvdGVjdGVkIGNvbnZlcnRGdW5jOiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG51bWJlclRvU3RyaW5nID0gKG46IG51bWJlcik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRGdW5jKCBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsdGlTdHlsZVRvU3RyaW5nID0gKHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWluKCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pblwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWF4XCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYW1wKCBtaW46IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBwcmVmOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgbWF4OiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwiY2xhbXBcIiwgW21pbiwgcHJlZiwgbWF4XSwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGMoIGZvcm11bGFQYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2FsY0Z1bmMoIGZvcm11bGFQYXJ0cywgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOdW1iZXJNYXRoQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBcInN0YXRpY1wiIHNpZGUgb2YgY2xhc3NlcyBkZXJpdmVkIGZyb20gdGhlXHJcbiAqIE51bWJlck1hdGggY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJCYXNlTWF0aENsYXNzPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gICAgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZztcclxuXHJcbiAgICBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgbmV3KCk6IElOdW1iZXJCYXNlTWF0aDxUPjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVuaXRsZXNzIG51bWJlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTnVtYmVyTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPG51bWJlcj4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc051bWJlck1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxOdW1iZXJUeXBlPlxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbi50b1N0cmluZygpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc051bWJlcj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aU51bWJlcj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc051bWJlck1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUGVyY2VudE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxwZXJjZW50PiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUGVyY2VudE1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxQZXJjZW50VHlwZT4gaW1wbGVtZW50cyBJQ3NzUGVyY2VudE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gKE51bWJlci5pc0ludGVnZXIobikgPyBuIDogTWF0aC5yb3VuZChuICogMTAwKSkgKyBcIiVcIjsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVBlcmNlbnQ+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgdG8gc3RyaW5nIHVzaW5nIHRoZSBmb2xsb3dpbmcgcnVsZXM6XHJcbiAqIC0gaWYgdGhlIG51bWJlciBpcyBiZXR3ZWVuIC0xIGFuZCAxIChub24gaW5jbHVzaXZlKSwgbXVsdGlwbGllcyB0aGUgbnVtYmVyIGFuZCBhcHBlbmRzIFwiJVwiXHJcbiAqIC0gb3RoZXJ3aXNlLCBjb252ZXJ0cyB0aGUgbnVtYmVyIHRvIHN0cmluZyB3aXRob3V0IGFwcGVuZGluZyBhbnkgdXRpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcoIG46IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gbiA+PSAxIHx8IG4gPD0gLTEgPyBuLnRvU3RyaW5nKCkgOiBNYXRoLnJvdW5kKG4gKiAxMDApICsgXCIlXCI7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTGVuZ3RoXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NMZW5ndGhNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bGVuZ3RoPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTGVuZ3RoTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPExlbmd0aFR5cGU+IGltcGxlbWVudHMgSUNzc0xlbmd0aE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcInB4XCIsIFwiZW1cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBtaW5tYXgoIG1pbjogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgbWF4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUdlbmVyaWNQcm94eTxMZW5ndGhUeXBlPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5tYXhcIiwgW21pbiwgbWF4XSwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEFuZ2xlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NBbmdsZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxhbmdsZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0FuZ2xlTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPEFuZ2xlVHlwZT4gaW1wbGVtZW50cyBJQ3NzQW5nbGVNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJkZWdcIiwgXCJ0dXJuXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0FuZ2xlPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlBbmdsZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRpbWVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1RpbWVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8dGltZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1RpbWVNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8VGltZVR5cGU+IGltcGxlbWVudHMgSUNzc1RpbWVNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJtc1wiLCBcInNcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzVGltZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlc29sdXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1Jlc29sdXRpb25NYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cmVzb2x1dGlvbj4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1Jlc29sdXRpb25NYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8UmVzb2x1dGlvblR5cGU+IGltcGxlbWVudHMgSUNzc1Jlc29sdXRpb25NYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJkcGlcIiwgXCJ4XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1Jlc29sdXRpb24+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUmVzb2x1dGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGcmVxdWVuY3lcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0ZyZXF1ZW5jeU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxmcmVxdWVuY2U+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8RnJlcXVlbmN5VHlwZT4gaW1wbGVtZW50cyBJQ3NzRnJlcXVlbmN5TWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiSHpcIiwgXCJrSHpcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzRnJlcXVlbmN5Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJlcXVlbmN5Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3NpdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zMnN0ciggdmFsOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdWxsOiB2ID0+IFwiXCIsXHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdiwgXCIgXCIpXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zMnN0ciggdmFsOiBFeHRlbmRlZDxNdWx0aUNzc1Bvc2l0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBwb3Myc3RyLFxyXG4gICAgICAgIGFyclNlcDogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGJhc2ljIHR5cGVzIGFuZCBmdW5jdGlvbnMgdXNlZCB0byBkZWZpbmUgQ1NTIHByb3BlcnR5IHR5cGVzLlxyXG4gKiBcclxuICogQWxsIENTUyBwcm9wZXJ0aWVzIHNob3VsZCBhY2NlcHQgc3RyaW5nIGFzIHRoZSB0eXBlIG9mIHRoZWlyIHZhbHVlIGV2ZW4gaWYgbm9ybWFsbHlcclxuICogdGhleSBhY2NlcHQgb3RoZXIgdHlwZXMgKGUuZyBhIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgYXMgYFwicmVkXCIgfCBcImdyZWVuXCIgfCAuLi5gIGZvciB0aGVcclxuICogY29sb3IpIHByb3BlcnR5LiBUaGlzIGlzIGJlY2F1c2UgaW4gYWRkaXRpb24gdG8gdGhlaXIgbm9ybWFsIHZhbHVlcyBhbnkgcHJvcGVydHlcclxuICogY2FuIHVzZSBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoZSBmb3JtIGB2YXIoLS1wcm9wbmFtZSlgLiBIb3dldmVyLCBpZiB3ZSBhZGQgc3RyaW5nIHR5cGVcclxuICogdG8gdGhlIHNldCBvZiBzdHJpbmcgbGl0ZXJhbHMgKGUuZy4gYFwicmVkXCIgfCBcImdyZWVuXCIgfCBzdHJpbmdgKSwgdGhpcyB0aHJvd3Mgb2ZmIHRoZVxyXG4gKiBJbnRlbGxpc2Vuc2UgYW5kIGl0IGRvZXNuJ3QgcHJvbXB0IGRldmVsb3BlcnMgZm9yIHRoZSBwb3NzaWJsZSB2YWx1ZXMuIFRoZSBJVmFsdWVQcm94eVxyXG4gKiBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHN0cmluZyBhbmQgdGhpcyBzb2x2ZXMgdGhlIEludGVsbGlzZW5zZSBpc3N1ZS5cclxuICogXHJcbiAqIEFub3RoZXIgYmVuZWZpdCBvZiB1c2luZyBmdW5jdGlvbnMgaXMgdGhhdCB0aGV5IGFyZVxyXG4gKiBjb25zdHJ1Y3RlZCBhdCBvbmUgdGltZSBidXQgdGhlIHN0cmluZyBnZW5lcmF0aW9uIG9jY3VycyBhdCBhbm90aGVyIHRpbWUuIFRoaXMgYWxsb3dzXHJcbiAqIHVzaW5nIHRoZXNlIG9iamVjdHMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhleSBjYW4gcmVmZXJlbmNlIG9iamVjdHMgbGlrZVxyXG4gKiBJVmFyUnVsZSB0aGF0IGFyZSBub3QgZnVsbHkgaW5pdGlhbGl6ZWQgeWV0LiBIb3dldmVyLCB3aGVuIHRoZSBzdHlsZXMgc2hvdWxkIGJlIGluc2VydGVkXHJcbiAqIGludG8gRE9NIHRoZSBpbml0aWFsaXphdGlvbiB3aWxsIGhhdmUgYWxyZWFkeSBvY2N1cnJlZCBhbmQgdGhlIGZ1bmN0aW9uIHdpbGxcclxuICogcmV0dXJuIGEgY29ycmVjdCBzdHJpbmcuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgdGhlIHByb3h5IGZ1bmN0aW9ucyBoYXZlIGEgcGFyYW1ldGVyIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGVtIGZyb21cclxuICogb3RoZXIgcHJveHkgZnVuY3Rpb25zLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVudCBDU1MgdHlwZXMsXHJcbiAqIHNvIHRoYXQgYSBmdW5jdGlvbiB1c2VkIGZvciBvbmUgQ1NTIHR5cGUgY2Fubm90IGJlIHVzZWQgZm9yIGEgZGlmZmVyZW50IENTUyB0eXBlLiBGb3JcclxuICogZXhhbXBsZSwgdGhlIGBjYWxjKClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIE51bWJlclByb3h5IGZ1bmN0aW9uLCB3aGlsZSB0aGVcclxuICogYGdyYWRpZW50LmxpbmVhcigpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBJbWFnZVByb3h5IGZ1bmN0aW9uLiBUaHVzIHlvdSBjYW5ub3QgdXNlIHRoZVxyXG4gKiAnY2FsYygpYCBmdW5jdGlvbiBmb3IgaW1hZ2UtYmFzZWQgQ1NTIHByb3BlcnRpZXMgYW5kIHZpY2UgdmVyc2EuXHJcbiAqL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWMgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlIHZhbHVlcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBhbnkgQ1NTIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR2xvYmFsX1N0eWxlVHlwZSA9IFwiaW5oZXJpdFwiIHwgXCJpbml0aWFsXCIgfCBcInVuc2V0XCIgfCBcInJldmVydFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHZW5lcmljUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBpbnRlcmZhY2UgaW1wbGVtZW50ZWQgdXNpbmcgZnVuY3Rpb25zIHRoYXRcclxuICogYWNjZXB0IGFuIG9wdGlvbmFsIHBhcmFtZXRlciBvZiBhIGdlbmVyaWMgdHlwZSBhbmQgcmV0dXJuIGEgc3RyaW5nLiBUaGlzIGludGVyZmFjZSBpcyB1c2VkIGFzIGFcclxuICogYmFzZSBmb3IgcHJveHkgaW50ZXJmYWNlcyBkZWZpbmluZyB0eXBlcyBhY2NlcHRhYmxlIGJ5IGNlcnRhaW4gc3R5bGUgcHJvcGVydGllcy4gVGhlIHR5cGVcclxuICogcGFyYW1ldGVyIGhlbHBzIGRpZmZlcmVudGlhdGUgdGhlc2UgaW50ZXJmYWNlcyBzbyB0aGF0IGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBvbmVcclxuICogdHlwZSBvZiBzdHlsZSBwcm9wZXJ0aWVzIChlLmcuIFwidHJhbnNmb3JtXCIpIGNhbm5vdCBiZSBhc3NpZ25lZCB0byBhbiBpbmNvbXBhdGlibGUgc3R5bGUgcHJvcGVydHlcclxuICogKGUuZy4gY2xpcC1wYXRoKS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdlbmVyaWNQcm94eTxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICAocD86IFQpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3RyaW5nUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcuIFRoaXMgZnVuY3Rpb24gaXMgcGFydFxyXG4gKiBvZiB0eXBlIGRlZmluaXRpb24gZm9yIGFsbCBDU1MgcHJvcGVydGllcyAtIGV2ZW4gZm9yIHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBgc3RyaW5nYCBhcyBwYXJ0IG9mXHJcbiAqIHRoZWlyIHR5cGUuXHJcbiAqIFxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJldHVybmVkIGZyb20gdGhlIGByYXcoKWAgZnVuY3Rpb24sIHdoaWNoIGFsbG93cyBieS1wYXNzaW5nIHRoZSBwcm9wZXJ0eVxyXG4gKiB0eXBpbmcgcnVsZXMgYW5kIHNwZWNpZnlpbmcgYSBzdHJpbmcgZGlyZWN0bHkuIFRoaXMgbWlnaHQgYmUgdXNlZnVsLCB3aGVuIGEgc3RyaW5nIHZhbHVlIGlzXHJcbiAqIG9idGFpbmVkIGZyb20gc29tZSBleHRlcm5hbCBjYWxjdWxhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHJpbmdQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJzdHJpbmdcIj4ge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tVmFyIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBvYmplY3Qgd2l0aCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIG5lZWRlZCBiZWNhdXNlIGV2ZXJ5IHN0eWxlIHByb3BlcnR5IGNhbiBhY2NlcHQgdmFsdWUgaW4gdGhlIGZvcm0gb2YgdGhlIHZhcigpXHJcbiAqIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhcjxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0c2V0VmFsdWUoIHZhbHVlOiBULCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGV4dGVuZHMgdGhlIGdpdmVuIHR5cGUgd2l0aCB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAtIElDdXN0b21WYXIgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIHVzaW5nIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eS5cclxuICogLSBJU3RyaW5nUHJveHkgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIHNwZWNpZnlpbmcgcmF3IHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkPFQ+ID0gVCB8IElDdXN0b21WYXI8VD4gfCBJU3RyaW5nUHJveHkgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZW5jYXBzdWxhdGVzIHRoZSB0eXBlIG9mIHByb3BlcnR5IGluIGFuIG9iamVjdCB3aXRoIGEgc2luZ2xlIFwiIVwiIHByb3BlcnR5LiBUaGlzXHJcbiAqIHR5cGUgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGJlIGZsYWdnZWQgYXMgXCIhaW1wb3J0YW50XCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJbXBvcnRhbnRQcm9wPFQ+ID0geyBcIiFcIjogRXh0ZW5kZWQ8VD4gfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFeHRlbmRlZFByb3AgZXh0ZW5kcyB0aGUgZ2l2ZW4gZ2VuZXJpYyB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyBlbGVtZW50czpcclxuICogLSBPYmplY3Qgd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSBcIiFcIiwgd2hpY2ggaXMgdXNlZCB0byBtYXJrIGEgcHJvcGVydHkgYXMgXCIhaW1wb3J0YW50XCIuXHJcbiAqIC0gR2xvYmFsX1N0eWxlVHlwZSwgd2hpY2ggYWxsb3dzIGFueSBwcm9wZXJ0eSB0byBiZSBhc3NpZ25lZCB0aGUgZ2xvYmFsIHZhbHVlcyBzdWNoIGFzXHJcbiAqICAgXCJpbml0aWFsXCIsIFwiaW5oZXJpdFwiLCBcInVuc2V0XCIgYW5kIFwicmV2ZXJ0XCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFByb3A8VD4gPSBFeHRlbmRlZDxUPiB8IEltcG9ydGFudFByb3A8VD4gfCBHbG9iYWxfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgcGFpci1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byAyIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPclBhaXI8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPl07XHJcblxyXG4vKiogVHlwZSBmb3IgYm94LWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDQgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yQm94PFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+PywgRXh0ZW5kZWQ8VD4/XTtcclxuXHJcbi8qKiBUeXBlIGZvciBhIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSBvciBtb3JlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPck1hbnk8VD4gPSBUIHwgRXh0ZW5kZWQ8VD5bXTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSVF1b3RlZFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYSBzdHJpbmcgaW4gcXVvdGF0aW9uIG1hcmtzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElRdW90ZWRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJxdW90ZWRcIj4ge31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWVyaWMgdHlwZXMgYXMgYSBiYXNpcyBmb3IgaGFuZGxpbmcgQ1NTIDxudW1iZXI+LCA8bGVuZ3RoPiwgPGFuZ2xlPiwgZXRjLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmc+ID0gbnVtYmVyIHwgc3RyaW5nIHwgSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmc+ID0gT25lT3JNYW55PE51bWJlckJhc2U8VD4+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOdW1iZXJCYXNlTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIHR5cGUsIHRoZXkgYXJlIGNvbnZlcnRlZFxyXG4gKiB0byBzdHJpbmdzIHVzaW5nIHRoZSBgbnVtYmVyVG9TdHJpbmdgIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlckJhc2VNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWluKCkgZnVuY3Rpb24uICovXHJcbiAgICBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIGNsYW1wKCkgZnVuY3Rpb24uICovXHJcbiAgICBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIGNhbGMoKSBmdW5jdGlvbi4gVGhpcyBtZXRob2QgaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3RcclxuICAgICAqIGJlIGludm9rZWQgd2l0aCBhIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gICAgICovXHJcbiAgICBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxudW1iZXI+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBOdW1iZXIgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyVHlwZSA9IFwiTnVtYmVyXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlIC0gbm90ZSB0aGF0IGl0IGV4bHVkZXMgYHN0cmluZ2AgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTnVtYmVyID0gRXhjbHVkZTxOdW1iZXJCYXNlPE51bWJlclR5cGU+LHN0cmluZz47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aU51bWJlciA9IE9uZU9yTWFueTxDc3NOdW1iZXI+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8TnVtYmVyVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NOdW1iZXJNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxudW1iZXI+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NOdW1iZXJNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPE51bWJlclR5cGU+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHBlcmNlbnQgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFVuaXRzID0gXCIlXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUGVyY2VudCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VHlwZSA9IFwiUGVyY2VudFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUGVyY2VudCA9IE51bWJlckJhc2U8UGVyY2VudFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUGVyY2VudCA9IE9uZU9yTWFueTxDc3NQZXJjZW50PjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGVyY2VudFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxQZXJjZW50VHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NQZXJjZW50TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1BlcmNlbnRNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPFBlcmNlbnRUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGxlbmd0aD5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGxlbmd0aCAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhVbml0cyA9IFwiUVwiIHwgXCJjaFwiIHwgXCJjbVwiIHwgXCJlbVwiIHwgXCJleFwiIHwgXCJpY1wiIHwgXCJpblwiIHwgXCJsaFwiIHwgXCJtbVwiIHwgXCJwY1wiIHxcclxuICAgICAgICAgICAgICAgIFwicHRcIiB8IFwicHhcIiB8IFwidmJcIiB8IFwidmhcIiB8IFwidmlcIiB8IFwidndcIiB8IFwicmVtXCIgfCBcInJsaFwiIHwgXCJ2bWF4XCIgfCBcInZtaW5cIiB8IFwiZnJcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBMZW5ndGggdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVHlwZSA9IFwiTGVuZ3RoXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoID0gTnVtYmVyQmFzZTxMZW5ndGhUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpTGVuZ3RoID0gT25lT3JNYW55PENzc0xlbmd0aD47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by0yLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoUGFpciA9IE9uZU9yUGFpcjxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tNC1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aEJveCA9IE9uZU9yQm94PENzc0xlbmd0aD47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTGVuZ3RoUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PExlbmd0aFR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTGVuZ3RoTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bGVuZ3RoPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTGVuZ3RoTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxMZW5ndGhUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1pbm1heCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElMZW5ndGhQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8YW5nbGU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBhbmdsZSAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVVuaXRzID0gXCJkZWdcIiB8IFwicmFkXCIgfCBcImdyYWRcIiB8IFwidHVyblwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEFuZ2xlIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVHlwZSA9IFwiQW5nbGVcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlID0gTnVtYmVyQmFzZTxBbmdsZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUFuZ2xlID0gT25lT3JNYW55PENzc0FuZ2xlPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuZ2xlUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PEFuZ2xlVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NBbmdsZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGFuZ2xlPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzQW5nbGVNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPEFuZ2xlVHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDx0aW1lPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgdGltZSAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVW5pdHMgPSBcInNcIiB8IFwibXNcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBUaW1lIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFRpbWVUeXBlID0gXCJUaW1lXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NUaW1lID0gTnVtYmVyQmFzZTxUaW1lVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlUaW1lID0gT25lT3JNYW55PENzc1RpbWU+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWVQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8VGltZVR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzVGltZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHRpbWU+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NUaW1lTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxUaW1lVHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxyZXNvbHV0aW9uPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcmVzb2x1dGlvbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uVW5pdHMgPSBcImRwaVwiIHwgXCJkcGNtXCIgfCBcImRwcHhcIiB8IFwieFwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFJlc29sdXRpb24gdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblR5cGUgPSBcIlJlc29sdXRpb25cIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Jlc29sdXRpb24gPSBOdW1iZXJCYXNlPFJlc29sdXRpb25UeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVJlc29sdXRpb24gPSBPbmVPck1hbnk8Q3NzUmVzb2x1dGlvbj47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlc29sdXRpb25Qcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8UmVzb2x1dGlvblR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUmVzb2x1dGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxSZXNvbHV0aW9uVHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxmcmVxdWVuY3k+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBmcmVxdWVuY3kgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VW5pdHMgPSBcIkh6XCIgfCBcImtIelwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEZyZXF1ZW5jeSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lUeXBlID0gXCJGcmVxdWVuY3lcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzRnJlcXVlbmN5ID0gTnVtYmVyQmFzZTxGcmVxdWVuY3lUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpRnJlcXVlbmN5ID0gT25lT3JNYW55PENzc0ZyZXF1ZW5jeT47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRnJlcXVlbmN5UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PEZyZXF1ZW5jeVR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzRnJlcXVlbmN5TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxGcmVxdWVuY3lUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgcG9pbnQgdXNpbmcgeCBhbmQgeSBjb29yZGluYXRlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc1BvaW50ID0gW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkID0gXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyBhIHNpbXBsZSAxIG9yIHR3byB2YWx1ZXMgYDxwb3NpdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIFNpbXBsZUNzc1Bvc2l0aW9uID0gSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBmdWxsIHVwIHRvIDQgdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb3NpdGlvbiA9IFNpbXBsZUNzc1Bvc2l0aW9uIHwgXHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmRdIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgbXVsdGlwbGUgYDxwb3NpdGlvbj5gIENTUyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUNzc1Bvc2l0aW9uID0gRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+W107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSYWRpdXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgY29ybmVyIHJhZGl1cyAqL1xyXG5leHBvcnQgdHlwZSBDc3NSYWRpdXMgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVSTHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJVXJsUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBDU1MgdXJsKCkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJ1cmxcIj4ge307XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBhdHRyKCkgZnVuY3Rpb24gc3VwcG9ydFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJUeXBlS2V5d29yZCA9IFwic3RyaW5nXCIgfCBcImNvbG9yXCIgfCBcInVybFwiIHwgXCJpbnRlZ2VyXCIgfCBcIm51bWJlclwiIHwgXCJsZW5ndGhcIiB8IFwiYW5nbGVcIiB8IFwidGltZVwiIHwgXCJmcmVxdWVuY3lcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJVbml0S2V5d29yZCA9IFBlcmNlbnRVbml0cyB8IExlbmd0aFVuaXRzIHwgVGltZVVuaXRzIHwgQW5nbGVVbml0cyB8IFJlc29sdXRpb25Vbml0cyB8IEZyZXF1ZW5jeVVuaXRzO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gV2ViIE5hbWVzcGFjZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBXZWJOYW1lc3BhY2VzIGNsYXNzIGNvbnRhaW5zIGlkZW50aWZpZXJzIGZvciB0aGUga25vd24gV2ViLXJlbGF0ZWQgbmFtZXNwYWNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWJOYW1lc3BhY2VzXHJcbntcclxuXHRzdGF0aWMgcmVhZG9ubHkgSFRNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBTVkcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhMaW5rID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBNYXRoTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9